var nowSetting = {
    name: appConfig().title,
    mm:appConfig().customerService
}

var preloadjs = function(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();

var vuelogform;

function addcls(obj, cls){
  var obj_class = obj.className;
  var blank = (obj_class != '') ? ' ' : '';
  var added = obj_class + blank + cls;
  obj.className = added;
}

function rmcls(obj, cls){
  var obj_class = ' '+obj.className+' ';
  obj_class = obj_class.replace(/(\s+)/gi, ' ');
  var removed = obj_class.replace(' '+cls+' ', ' ');
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');
  obj.className = removed;
}


function hascls(obj, cls){
  var obj_class = obj.className;
  var obj_class_lst = obj_class.split(/\s+/);
  var x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {
      return true;
    }
  }
  return false;
}

var verifyRule = {
    // 常用验证
    mobile: {
        reg: /^(861((33|49|53|7[37]|8[019]|99)|(3[012]|45|5[56]|66|7[56]|8[56])|(3[456789]|47|5[012789]78|8[23478]))[0-9]{8}$)|^(?!86)\d+/,
        tip: '国家号+手机号，如中国,请输入8613900000000'
    },
    username: {
        reg: /^[a-zA-Z_]{1}\w{5,9}$/,
        tip: "大小写字母或'_'开头，6-10个字符"
    },
    psw: {
        reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,24}$/,
        tip: '6到24位字母和数字组合'
    },
    repeatPsw: {
        reg: /^([a-zA-Z0-9]){6,24}$/,
        tip: '再次输入密码'
    },
    verifyImg: {
        reg: /^([0-9]){5}$/,
        tip: '5位数字',
    },
    verifyCode: {
        reg: /^([0-9]){4}$/,
        tip: '4位数字'
    }
};

function _autoLogin(_this){
  let winUrl = window.location.href;
  if (String(winUrl).indexOf('h5')==-1) {
    let chkUrls = String(winUrl).split('.html?')[1];
    if (typeof chkUrls !='undefined') {
      let names = chkUrls.split('name=')[1];
      if(!names) return false;
      let name = names.split('&pwd')[0];
      let pwd = chkUrls.split('pwd=')[1];
      _this.name = name;
      _this.pass = pwd;
      _this.loginstr(true);  
    }  
  }
  
};

domready(function() {
    new Vue({
        el: '#foot_link',
        ready: function() {},
        data: {
            version: '1.0.0',
            mlink:nowSetting.mm
        }
    });

    vuelogform = new Vue({
        el: '#loginform',
        data: {
            login_pass_error: '',
            login_captcha_error: '',mlink:nowSetting.mm,
            name: '',
            username: '',
            mobile: '',
            verifyImg: '',
            bodycls:{},
            isCountFinish: false,
            loginType: 0,
            safetySrc: '',
            countTime: 60,
            verifyCode: '',
            show: false,
            isshowac:false,
            pass: '',
            captcha: '',
            initcode: '',
            captchasrc: ''
        },
        created() {
            this.RefreshSafety();
        },
        methods: {
            RefreshSafety() {
                this.safetySrc = '/yx/getImgCode' + '?t=' + new Date();
            },
            // 密码框获取焦点
            pswFocus(e) {
                // e.target.setAttribute('type', 'password');
            },
            get_verify_code(imgCode) {
                let that = this;

                if (!verifyRule.mobile.reg.test(this.mobile)) {
                    this.login_pass_error = '*手机号错误';
                    return
                }

                if (!verifyRule.verifyImg.reg.test(this.verifyImg)) {
                    this.login_pass_error = '*验证图片数字错误';
                    return
                }

                let options = {
                    phoneNum: this.mobile,
                    yanzCode: this.verifyImg,
                    type: 2
                };
                this.isCountFinish = true;
                let timer = setInterval(function() {
                    if (that.countTime === 0) {
                        clearInterval(timer);
                        that.countTime = 60;
                        that.isCountFinish = false;
                    }
                    that.countTime--;
                }, 1000);
                this.loginType === 1 && this.getVerifyCode(options);
            },
            switchLogin(type) {
                this.loginType = type;
                this.login_pass_error = '';
            },
            fackpwd: function() {
                var t = this;
                t.pass = '88888888';
            },
            check: function(event) {
                var t = this;
                // if (event.target.value!='' && localStorage.getItem(event.target.value)!='null') {
                //   t.pass = '88888888';
                // }
            },
            checkpwd: function(event) {

            },
            showheight: function() {
                // v-on:focus="showheight"
                //setTimeout(function() {
                //  alert(window.innerHeight);
                //},400)
            },
            checkcode: function(event) {
                //this.$http.post(ssoParams.join('')).then(function(res) {
            },
            switchreme: function(e) {
                //alert('switchreme');
                if ($('.remember').hasClass('remembered')) {
                    $('.remember em').hide();
                    $('.remember').removeClass('remembered');
                } else {
                    $('.remember em').show();
                    $('.remember').addClass('remembered');
                }
            },
            getVerifyCode: function(options) {
                let _this = this;
                _this.$http.post('/yx/send-verify-code', options, { emulateJSON: true }).then((response) => {
                    let data = response.body;
                    if (data.code === 0) {
                        return true
                    }
                    _this.safetySrc = '/yx/getImgCode' + '?t=' + new Date();
                    _this.login_pass_error = '*'+data.message;
                })
            },
            loginstr() {
              var appId = 5;
              var pwdstr = null;
              var _this = this;
              var tform = this;
              var s = {
                      name: this.name,
                      pwd: this.pass
                  }
                  var namestr = s.name;
                  let ssoParams = [];
                  if (this.loginType === 1) {
                      ssoParams = ['/sso/login', '?', 'cn=', this.mobile, '&phoneYzCode=', this.verifyCode, '&type=', this.loginType];
                  } else {
                      ssoParams = [SimpleApi.route.login, "?", "cn=", this.name, "&appId=", appId, "&password=", this.pass, '&type=', _this.loginType];
                      if (this.captchasrc !== '') {
                          ssoParams.push("&capchaCode=" + this.captcha);
                      }
                  }
                  let self = this;
                  this.$http.post(ssoParams.join('')).then(function(res) {
                      var res = JSON.parse(res.body);
                      //alert(res.code == '0');
                      if (res.code == '0') {
                          console.log(String(document.getElementById('rememberme').className).indexOf('remembered') > -1 && typeof localStorage !== 'undefined');
                          alert('11');
                          if (String(document.getElementById('rememberme').className).indexOf('remembered') > -1 && typeof localStorage !== 'undefined') {
                              if (md5(s.pwd) != '8ddcff3a80f4189ca1c9d4d902c3c909') {
                                  if (localStorage.getItem(s.name) != null && localStorage.getItem(s.name) == md5(s.pwd)) {
                                      localStorage.setItem(s.name, md5(s.pwd));
                                  }
                                  if (localStorage.getItem(s.name) == null || localStorage.getItem(s.name) == 'null') {
                                      localStorage.setItem(s.name, md5(s.pwd));
                                  }
                              }
                          }
                          if (String(document.getElementById('rememberme').className).indexOf('remembered') == -1 && typeof localStorage !== 'undefined') {
                              localStorage.setItem(namestr, null);
                          }

                          this.login_pass_error = '';
                          if (window.location.host != 'localhost' && String(window.location.host).indexOf('192.168') == -1) {
                              window.location.href = "/yx/home"+(typeof QueryString.h5 !='undefined' ? '?h5=1' : '');
                          } else {
                              $(document.body).append('<iframe id="login-iframe" style="display: none;"></iframe>');
                              $("iframe#login-iframe").attr("src", "/yx/u/login");
                              $("iframe#login-iframe").load(function() {
                                  localStorage.setItem('_last', namestr);
                                  setTimeout(function() {
                                      //localStorage.setItem(s.name, md5(s.pwd));
                                      window.location.href = "/";
                                  }, 300);
                              })

                          }
                          //window.location.href = "/static/html/index.html?cn="+res.user.cn;
                      } else {
                          if (self.loginType === 0) {
                              if (res.needCapchaCode) {
                                  self.captchasrc = SimpleApi.route.imageCode + '?t=' + new Date();
                                  self.captcha = '';
                                  self.show = true;
                                  self.login_pass_error = '*需要填写验证码';
                              }
                              if (res.code == '2' || res.code == '1') {
                                  if (res.code == '2') {
                                      document.getElementById('login-name').removeAttribute("P");
                                      localStorage.setItem(namestr, null);
                                  }

                                  if (res.msg == '需要填写验证码' || '验证码输入错误') {
                                      self.captcha = '';
                                      self.captchasrc = SimpleApi.route.imageCode + '?t=' + new Date();
                                  }
                                  self.login_pass_error = '*'+res.msg;
                              }
                          } else {
                              // self.captchasrc = API.ROOTS + API.ROOTSPATH.CAPTCHA + '?t=' + new Date();
                              self.login_pass_error = '*'+res.msg;
                              return false;
                          }

                      }

                  }, function(error) {

                  });
            },
            login: function(istrues) {
                var appId = 5;
                var pwdstr = null;
                var _this = this;
                var tform = this;
                var s = {
                        name: this.name,
                        pwd: this.pass
                    }
                    // $('#login-pass').val('');
                    // $('#login-pass').attr('type', 'text');

                pwdstr = md5(this.pass);
                var namestr = s.name;
                if (pwdstr == '8ddcff3a80f4189ca1c9d4d902c3c909' && localStorage.getItem(s.name) != null) {
                    pwdstr = localStorage.getItem(s.name);
                } else {
                    if (typeof document.getElementById('login-name').getAttribute('P') !== 'undefined') {
                        if (document.getElementById('login-name').getAttribute('P') != 'null' && document.getElementById('login-name').getAttribute('P') != '8ddcff3a80f4189ca1c9d4d902c3c909') {
                            pwdstr = (document.getElementById('login-name').getAttribute('P') != null && document.getElementById('login-name').getAttribute('P') != undefined) ? document.getElementById('login-name').getAttribute('P') : md5(s.pwd);
                            namestr = document.getElementById('login-name').value;
                        } else {
                            document.getElementById("rememberme").className = 'nobottom remember';
                            document.getElementById("rememberme_ico").style.display = 'none';
                        }
                    }
                }
                if (pwdstr == null) {
                    pwdstr = s.name;
                }
                if (pwdstr != md5(tform.pass) && tform.pass != '88888888') {
                    pwdstr = md5(tform.pass);
                }
                if (localStorage.getItem(tform.name) != null && localStorage.getItem(tform.name) != 'null') {
                    if (tform.pass == '88888888' || md5(tform.pass) == localStorage.getItem(tform.name)) {
                        pwdstr = localStorage.getItem(tform.name);
                    } else {
                        pwdstr = md5(tform.pass);
                    }
                }
                // bear
                if (this.loginType === 1) {
                    if (!verifyRule.mobile.reg.test(this.mobile)) {
                        this.login_pass_error = "*手机号错误";
                        return false;
                    }
                    if (!verifyRule.verifyCode.reg.test(this.verifyCode)) {
                        this.login_pass_error = "*验证码错误";
                        return false;
                    }
                } else {
                    if (!verifyRule.username.reg.test(this.name) && !verifyRule.mobile.reg.test(this.name)) {
                        this.login_pass_error = "*账户名错误";
                        return false;
                    }
                    if (!verifyRule.psw.reg.test(this.pass) && String(this.pass)!='88888888') {
                        this.login_pass_error = "*密码错误";
                        return false;
                    }
                    if (this.isCaptcha && !verifyRule.verifyImg.reg.test(this.captcha)) {
                        this.login_pass_error = "*验证图片数字错误";
                        return false;
                    }
                }
                let ssoParams = [];
                if (this.loginType === 1) {
                    ssoParams = ['/sso/login', '?', 'cn=', this.mobile, '&phoneYzCode=', this.verifyCode, '&type=', this.loginType];
                } else {
                    ssoParams = [SimpleApi.route.login, "?", "cn=", namestr, "&appId=", appId, "&password=", pwdstr, '&type=', _this.loginType];
                    if (this.captchasrc !== '') {
                        ssoParams.push("&capchaCode=" + this.captcha);
                    }
                }
                let self = this;
                this.$http.post(ssoParams.join('')).then(function(res) {
                    var res = JSON.parse(res.body);
                    if (res.code == '0') {
                        //alert(String(document.getElementById('rememberme').className).indexOf('remembered') > -1 && typeof localStorage !== 'undefined');
                        if (String(document.getElementById('rememberme').className).indexOf('remembered') > -1 && typeof localStorage !== 'undefined') {
                            //alert('2');
                            if (md5(s.pwd) != '8ddcff3a80f4189ca1c9d4d902c3c909') {
                                if (localStorage.getItem(s.name) != null && localStorage.getItem(s.name) == md5(s.pwd)) {
                                    localStorage.setItem(s.name, md5(s.pwd));
                                }
                                if (localStorage.getItem(s.name) == null || localStorage.getItem(s.name) == 'null') {
                                    localStorage.setItem(s.name, md5(s.pwd));
                                }
                            }
                        }
                        if (String(document.getElementById('rememberme').className).indexOf('remembered') == -1 && typeof localStorage !== 'undefined') {
                            localStorage.setItem(namestr, null);
                        }

                        this.login_pass_error = '';
                        if (window.location.host != 'localhost' && String(window.location.host).indexOf('192.168') == -1) {
                            localStorage.setItem('_last', namestr);
                            window.location.href = "/yx/home"+(typeof QueryString.h5 !='undefined' ? '?h5=1' : '');
                        } else {
                            $(document.body).append('<iframe id="login-iframe" style="display: none;"></iframe>');
                            $("iframe#login-iframe").attr("src", "/yx/u/login");
                            $("iframe#login-iframe").load(function() {
                                localStorage.setItem('_last', namestr);
                                setTimeout(function() {
                                    //localStorage.setItem(s.name, md5(s.pwd));
                                    window.location.href = "/";
                                }, 300);
                            })

                        }
                        //window.location.href = "/static/html/index.html?cn="+res.user.cn;
                    } else {
                        if (self.loginType === 0) {
                            if (res.needCapchaCode) {
                                self.captchasrc = SimpleApi.route.imageCode + '?t=' + new Date();
                                self.captcha = '';
                                self.show = true;
                                self.login_pass_error = '*需要填写验证码';
                            }
                            if (res.code == '2' || res.code == '1') {
                                if (res.code == '2') {
                                    document.getElementById('login-name').removeAttribute("P");
                                    localStorage.setItem(namestr, null);
                                }

                                if (res.msg == '需要填写验证码' || '验证码输入错误') {
                                    self.captcha = '';
                                    self.captchasrc = SimpleApi.route.imageCode + '?t=' + new Date();
                                }
                                self.login_pass_error = '*'+res.msg;
                            }
                        } else {
                            // self.captchasrc = API.ROOTS + API.ROOTSPATH.CAPTCHA + '?t=' + new Date();
                            self.login_pass_error = '*'+res.msg;
                            return false;
                        }

                    }

                }, function(error) {

                });
            },
            fire: function(event) {

            }
        },
        mounted: function() {

            var skey = Object.keys(localStorage);
            var t = this;
            var realname = [],
                hisname = {},
                realindex = 0;
            for (var i = 0; i < skey.length; i++) {
                if (String(skey[i]).indexOf('_') == -1 && String(skey[i]) != 'uin' && String(skey[i]) != 'debug' && String(skey[i]) != 'loglevel:webpack-dev-server' && String(skey[i]) != 'loglevel:webpack-dev-server' && String(skey[i]) != 'browser' && String(skey[i]) != 'isIndex' && String(skey[i]) != 'isShowBox' && String(skey[i]) != 'pass' && String(skey[i]) != 'name' && String(skey[i]) != 'appid' && String(skey[i]) != 'status' && String(skey[i]) != '_last') {
                    realname.push(skey[i]);
                    hisname[skey[i]] = realindex;
                    realindex++;
                }
            }
            //document.getElementById("mologin").innerText = '欢迎登陆'+appConfig().fullname;
            var bd = document.getElementsByTagName("BODY")[0];
            if (typeof QueryString.ac !='undefined') {
              t.isshowac = true;
              addcls(bd,'isonact');
            }else {
              t.isshowac = false;
              rmcls(bd,'isonact');
            }
            if (typeof skey !== 'undefined' && skey.length > 0 && realname.length > 0) {
                var initindex = realname.length - 1;
                if (typeof localStorage.getItem('_last') != 'undefined' && localStorage.getItem('_last') != null && typeof hisname[localStorage.getItem('_last')] != 'undefined') {
                    initindex = hisname[localStorage.getItem('_last')];
                }
                t.name = realname[initindex];
                if (localStorage.getItem(realname[initindex]) == 'null' || localStorage.getItem(realname[initindex]) == null) {
                    t.pass = '';
                } else {
                    t.pass = '88888888';
                }
            } else {
                t.name = '';
                t.pass = '';
            }
            _autoLogin(this);
        },
        computed: {
            readyshow: function() {
                setTimeout(function() {
                    jQuery('.innerform').show();
                }, 200)
                return ''
            }
        }
    });

    if (String(document.getElementById('rememberme').className).indexOf('remembered') > -1 && typeof localStorage !== 'undefined') {
        var skey = Object.keys(localStorage);
        var realname = [],
            hisname = {},
            realindex_1 = 0;
        for (var i = 0; i < skey.length; i++) {
            if (String(skey[i]).indexOf('_') == -1 && String(skey[i]) != 'uin' && String(skey[i]) != 'debug' && String(skey[i]) != 'loglevel:webpack-dev-server' && String(skey[i]) != 'browser' && String(skey[i]) != 'isIndex' && String(skey[i]) != 'isShowBox' && String(skey[i]) != 'pass' && String(skey[i]) != 'name' && String(skey[i]) != 'appid' && String(skey[i]) != 'status' && String(skey[i]) != '_last') {
                realname.push(skey[i]);
                hisname[skey[i]] = realindex_1;
                realindex_1++;
            }
        }
        if (typeof skey !== 'undefined' && skey.length > 0 && realname.length > 0) {
            var initindex = realname.length - 1;
            if (typeof localStorage.getItem('_last') != 'undefined' && localStorage.getItem('_last') != null && typeof hisname[localStorage.getItem('_last')] != 'undefined') {
                initindex = hisname[localStorage.getItem('_last')];
            }
            var uname = realname[initindex];
            //alert(uname);
            document.getElementById('login-name').value = uname;
            if (localStorage.getItem(uname) != 'null' && uname != 'initopen') {
                document.getElementById('login-name').setAttribute('P', localStorage.getItem(uname));
                document.getElementById('login-pass').value = '88888888';
                if (typeof vuelogform.fackpwd == 'function') {
                    vuelogform.fackpwd();
                }
            } else {
                //alert('222');
                document.getElementById("rememberme").className = 'nobottom remember';
                document.getElementById("rememberme_ico").style.display = 'none';
            }
        }
        if (skey.length == 0 || realname.length == 0) {
            document.getElementById('login-name').value = '';
            document.getElementById('login-pass').value = '';
        }
    }

    setTimeout(function() {
      //preloadjs('/m/vendor.js?v=1f', function() {
        preloadjs('/m/core.js?v=1f', function() {
          //preloadjs('/m/build.js?v=1f',function() {
            console.log('preload core');
          //})
        })
      //})
    }, 300);
});
