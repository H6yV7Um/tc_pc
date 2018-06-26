/*eslint-disable*/
import md5 from 'js-md5';
import base from '../js/pubilc.js';
import APPAPI from './httpPath.js';
import TransferAccount from './TransferAccount.js';

const API = APPAPI.APPAPI;
const ITEM = base.storage();
let STATUS = base.LoginStatus();
const CONFIG = base.config();
let LOTTERYOPTION = base.lotterySildeOption();
let LOTTERYINIT = null;
let mainConfig = appConfig();

function inputlineBtn() {
  TransferAccount();
}

function indexInit() {
  let index = {
    arror() {
      var mainContent = document.getElementById('main_content');
      var hoverBox = document.getElementById('hoverBox');
      var timer = null;
      mainContent.addEventListener('mouseover', function () {
        clearTimeout(timer);
        hoverBox.style.display = 'block';
      }, false);
      mainContent.addEventListener('mouseout', function () {
        timer = setTimeout(function () {
          hoverBox.style.display = 'none';
        }, 200);
      }, false);
      hoverBox.addEventListener('mouseover', function () {
        clearTimeout(timer);
        this.style.display = 'block';
      }, false);
      hoverBox.addEventListener('mouseout', function () {
        var _this = this;
        timer = setTimeout(function () {
          _this.style.display = 'none';
        }, 200);
      }, false);
      return this;
    },
    lotteryPlayInit(obj, obj2, _this) {
      for (let i = 0; i < 3; i++) {
        let lotteryNum = LOTTERYINIT.getNum(3, 5);
        this.lotterySildeInitData += lotteryNum;
        _this.lotteryOpenList.push({
          names: LOTTERYINIT.getName(8, 12),
          number: lotteryNum,
          lottery: LOTTERYINIT.getLottery()
        });
      }
      return this.tabFn(obj, obj2, _this);
    },
    lotterySildeInitTime: LOTTERYOPTION.time,
    lotterySildeInitData: 0,
    lotterySildeInitcycle: LOTTERYOPTION.isCycle,
    lotteyList(_this) {
      if (_this.$store.state.isLogin !== 'true') {
        return _this.$router.push('/login');
      }
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.LOTTERY_LIST, function (result) {
        if (result.code === 0) {
          _this.lottery = result.data;
          LOTTERYINIT = base.lotteryinit(result.data);
        }
      });
      return this;
    },
    tabFn(obj, obj2, that) {
      let lotteryNum = LOTTERYINIT.getNum(3, 5);
      let _this = this;
      let InitData = '0000000';
      if (this.lotterySildeInitData > 99999999) this.lotterySildeInitData = 0;
      this.lotterySildeInitData += lotteryNum;
      InitData += this.lotterySildeInitData;

      that.lotteryOpenList.push({
        names: LOTTERYINIT.getName(8, 12),
        number: lotteryNum,
        lottery: LOTTERYINIT.getLottery()
      });
      base.move(obj, {'top': -25});
      this.sildeInit(obj2, InitData.substring(InitData.length - 8), 0);
      return setTimeout(function () {
        try {
          obj.removeChild(obj.firstChild);
          obj.style.top = '0px';
          _this.tabFn(obj, obj2, that);
        } catch (e) {
          console.log(e);
        }
      }, this.lotterySildeInitTime);
    },
    sildeInit(obj, data, objIdx) {
      data += '';
      if (!obj.length) {
        return false;
      }
      if (objIdx >= 8) {
        return true;
      }
      base.move(obj[objIdx], {'top': -data[objIdx] * 35}, null, LOTTERYOPTION.speedtime);
      return this.sildeInit(obj, data, ++objIdx);
    }
  };
  return index;
}

function Prompt(option) {
  return base.Promptfn(option);
}

function loginInit() {
  let login = {
    login(_this) {
      let ssoParams = [];
      if (_this.loginType === 1) {
        ssoParams = [API.ROOTS + API.ROOTSPATH.LOGIN, '?', 'cn=', _this.mobile, '&phoneYzCode=', _this.verifyCode, '&yanzCode=', _this.verifyImg, '&type=', _this.loginType];
      } else {
        ssoParams = [API.ROOTS + API.ROOTSPATH.LOGIN, '?', 'cn=', _this.username, '&password=', md5(_this.psw), '&type=', _this.loginType];
      }

      if (_this.captchasrc !== '' && !_this.loginType) {
        ssoParams.push('&capchaCode=' + _this.captcha);
      }
      base.httpPost(_this, ssoParams.join(''), function (result) {
        if (result.code !== 0) {
          if (result.needCapchaCode && !_this.loginType) {
            _this.captcha = '';
            _this.isCaptcha = true;
          }
          if (_this.isCaptcha) {
            _this.captcha = '';
          }
          if (result.code === 38) {
            _this.captchasrc = API.ROOTS + API.ROOTSPATH.CAPTCHA + '?t=' + new Date();
            _this.login_pass_error = '网络超时';
            return false;
          }
          !_this.loginType && (_this.captchasrc = API.ROOTS + API.ROOTSPATH.CAPTCHA + '?t=' + new Date());
          _this.login_pass_error = result.msg;
          return false;
        }
        if (_this.loginType === 1) {

        } else {

        }
        ITEM.set('_pass', md5(_this.psw));
        ITEM.set('_appid', result.user.sourceAppId);
        ITEM.set('_name', _this.username);
        STATUS.set(_this, 'loginStatus', 'true');
        ITEM.set('_isIndex', 'true');
        location.href = '/yx/home';
        return false;
      });
    },
    RefreshSrc(_this) {
      _this.captchasrc = API.ROOTS + API.ROOTSPATH.CAPTCHA + '?t=' + new Date();
    },
    setLogined(_this) {
      console.log('setLoginedsetLoginedsetLogined');
      // alert('111');
      STATUS.set(_this, 'loginStatus', 'true');
    }
  };
  return login;
}

function downloadInit() {
  return {
    browser() {
      base.browser(function () {
        ITEM.set('_browser', 'ios');
      }, function () {
        ITEM.set('_browser', 'android');
      }, function () {
        ITEM.set('_browser', 'web');
      });
    }
  };
}

// 获取第三方游戏相关内容
function thirdpartyGame() {
  return {
    getLinkUrl(_this, platformId) {
      let str = platformId === 6 ? '&subGame=sport' : ''; // 如果是体育，则增加参数‘subGame=sport’

      let arr = [API.ROOTY + API.POOTYPATH.LOGIN_URL, '?',
        '&platformId=', platformId, str
      ];
      base.httpPost(_this, arr.join(''), function (res) {
        if (res) {
          _this.clickIndex = -1;
          window.open(res.data);
        }
      })
    },
    getBalances(_this, val) {
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.THIRD_PARTY_BALANCE, function (res) {
        let arr = res.data;
        if (arr && arr.length) {
          for (let i = 0; i < arr.length; i++) {
            arr[i].cbId === val && (_this.walletBalance = arr[i].balance);
          }
        }
      })
    },
  }
}

function userInit() {
  let user = {
    loginout(_this, isroter) {
      // let ssoParams = [API.ROOTS + API.ROOTSPATH.LOGOUT, '?', 'cn=', ITEM.get('_name'), '&password=', ITEM.get('_pass'), '&appId=', ITEM.get('_appid')];
      let ssoParams = [API.ROOTS + API.ROOTSPATH.LOGOUT];
      base.httpPost(_this, ssoParams.join(''), function (result) {
        if (result.code === 0) {
          this.$store.commit('loginStatus', 'false');
          // this.$emit('loginOutMsg', isroter);
          if (location.host === '119.28.134.82' || location.host === 'test.tc508.com') {
            location.href = 'http://tc508.com/login';
          } else {
            location.href = '/login';
          }
        }
      });
      ITEM.clear();
    },
    initlotteryBalance(_this) {
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.USERLOOP, function (result) {
        if (result.code === 0) {
          this.lotteryBalance = result.data.lotteryBalance;
          this.$store.commit('setBaseInfo', {lotteryBalance: this.lotteryBalance});
          this.ftSize = this.lotteryBalance.toString().length > 9 ? this.lotteryBalance.toString().length > 15 ? '14' : '18' : ' 20';
        }
      });
    },
    userInit(_this) {
      let winUrl = String(location.href).replace('http://', '').replace('https://', '');
      let chkUrl = String(winUrl).split('/')
      console.log(winUrl);
      ITEM.set('_isShowBox', true);
      ITEM.set('_navIndex', 0);
      ITEM.set('_bankCard', 0);
      if (winUrl.indexOf('/activity') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/qiandao') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/passwordReset') !== -1) {
        return false;
      }
      // console.log(winUrl, chkUrl, typeof chkUrl[1] !== 'undefined' && Number.isInteger(parseInt(chkUrl[1], 10)) && chkUrl.length === 2);
      if (typeof chkUrl[1] !== 'undefined' && Number.isInteger(parseInt(chkUrl[1], 10)) && chkUrl.length === 2) {
        return false;
      }
      // alert('111');
      if (winUrl.indexOf('/userCenter#bandCard') !== -1) {
        ITEM.set('_bankCard', 1);
        return _this.$router.push('/userCenter');
      }
      if (winUrl.indexOf('/game-notice/0') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/old') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/rg') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/sales') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/register') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/download') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/detection') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/aboutUs') !== -1) {
        return false;
      }
      if (winUrl.indexOf('/index') !== -1) {
        ITEM.set('_isShowBox', false);
      }
      if (winUrl.indexOf('quickForword') !== -1) {
        STATUS.set(_this, 'loginStatus', 'true');
      }
      if (winUrl.indexOf('app=1') !== -1) {
        STATUS.set(_this, 'loginStatus', 'true');
      }
      if ((winUrl.indexOf('/login') !== -1 || winUrl[winUrl.length - 1] === '/') && STATUS.get(_this, 'isLogin') === 'true') {
        return _this.$router.push('/index');
      }
      if (STATUS.get(_this, 'isLogin') !== 'true') {
        // alert('dfg45234');
        return _this.$router.push('/login');
      }
      return this;
    },
    lotteyList(_this) {
      if (_this.$store.state.isLogin !== 'true') {
        return false;
      }
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.LOTTERY_LIST, function (result) {
        if (result.code === 0) {
          _this.lottery = result.data;
          LOTTERYINIT = base.lotteryinit(result.data);
        }
      });
      return this;
    },
    initUserInfo(_this, istrue) {
      if (STATUS.get(_this, 'isLogin') === 'true') {
        let time = base.formatDate(new Date().getTime(), 'hh:mm:ss').split(':')[0];

        if (time < 4) {
          _this.userTime = '凌晨好';
        }
        if (time >= 4 && time < 8) {
          _this.userTime = '早上好';
        }
        if (time >= 8 && time < 11) {
          _this.userTime = '上午好';
        }
        if (time >= 11 && time < 14) {
          _this.userTime = '中午好';
        }
        if (time >= 14 && time < 18) {
          _this.userTime = '下午好';
        }
        if (time >= 18 && time < 22) {
          _this.userTime = '晚上好';
        }
        if (time >= 22 && time < 25) {
          _this.userTime = '午夜好';
        }

        if (istrue) {
          return false;
        }
        return base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_INFO, function (result) {
          if (result.code === 0) {
            if (!result.data.isLogin) {
              STATUS.set(this, 'loginStatus', 'false');
              location.href = '/';
              return false;
            }
            this.nickname = result.data.main.nickname;
            this.lotteryBalance = result.data.lottery.availableBalance;
            this.$store.commit('setBaseInfo', {
              nickName: this.nickname,
              lotteryBalance: this.lotteryBalance,
              userTime: this.userTime
            });
            this.ftSize = this.lotteryBalance.toString().length > 9 ? this.lotteryBalance.toString().length > 15 ? '14' : '18' : ' 20';
            this.istype = result.data.main.type;
            ITEM.set('_userType', this.istype);
            noticeInit().init(this);
          }
          return false;
        });
      }
      return false;
    }
  };
  return user;
}

function noticeInit() {
  let notice = {
    init(_this) {
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.NOTICE_LIST, function (result) {
        let conData = result.data;
        if (result.code === 0 && conData) {
          for (let i = 0, len = conData.length; i < len; i++) {
            conData[i].content = conData[i].content.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ');
            //   conData[i].content = conData[i].content.replace(/&lt;\/?[^&gt;]*&gt;/g, '').replace(/&nbsp;/g, ' ').replace(/\s\s+/g, ' ');
            conData[i].time = conData[i].time;
          }
          _this.$store.commit('setNoticeLen', conData.length);
          _this.promptList = conData;
        }
        // this.promptList = [
        //   {title:'ssssss', time:'174564564', content:'3.-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。 '},
        // 	{title:'ssssss', time:'174564564', content:'ssssssssssssssssssasddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeess'},
        // 	{title:'ssssss', time:'174564564', content:'ssssssssssssssssssdddddddddddddddddddddddddddddddddddddddsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'},
        // 	{title:'ssssss', time:'174564564', content:'sssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssss'},
        // 	{title:'ssssss', time:'174564564', content:'3.-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。 '}
        // ];
      });
    }
  };
  return notice;
}

function userConterStatus() {
  return {
    setStatus: function (_this, key, value) {
      STATUS.set(_this, key, value);
    },
    getStatus: function (_this, key) {
      return STATUS.get(_this, key);
    }
  };
}

function userConter() {
  const sendAPI = {
    init(_this) {
      _this.nickname = ITEM.get('_nickname');
    },
    checkgrade(_this) {
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_STATUS, function (result) {
        let grade = 0;
        if (result.code === 0) {
          this.isBindWithdrawPassword = false;
          if (result.data.isBindWithdrawPassword) {
            grade += 33;
            this.isBindWithdrawPassword = true;
          }
          if (result.data.isBindCard) {
            grade += 33;
            this.isBindCard = true;
          }
          if (result.data.isBindWithdrawName) {
            grade += 33;
            this.isBindWithdrawName = true;
          }
          if (grade <= 35) {
            this.gradeMsg.title = '低！';
            this.gradeMsg.num = 35;
          }
          if (grade <= 70 && grade > 36) {
            this.gradeMsg.title = '中！';
            this.gradeMsg.num = 70;
          }
          if (grade >= 90) {
            this.gradeMsg.title = '高！';
            this.gradeMsg.num = 100;
          }
          this.isbind = result.data;
          this.isCloseUserData = this.isbind.isBindWithdrawName;
          this.isbindBg = !this.isCloseUserData;
          this.isuserinfoInt = this.isCloseUserData;
          this.tabnickName = this.isuserinfoInt;
        }
      });

      return this;
    },
    getGrade(_this) {
      let _that = this;
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_STATUS, function (result) {
        let grade = 0;
        let gradeMsg = {
          num: 0,
          title: ''
        }
        if (result.code === 0) {
          if (result.data.isBindWithdrawPassword) {
            grade += 33;
            // this.isBindWithdrawPassword = true;
          }
          if (result.data.isBindCard) {
            grade += 33;
            // this.isBindCard = true;
          }
          if (result.data.isBindWithdrawName) {
            grade += 33;
            // this.isBindWithdrawName = true;
          }
          if (grade <= 35) {
            gradeMsg.title = '低！';
            gradeMsg.num = 35;
          }
          if (grade <= 70 && grade > 36) {
            gradeMsg.title = '中！';
            gradeMsg.num = 70;
          }
          if (grade >= 90) {
            gradeMsg.title = '高！';
            gradeMsg.num = 100;
          }
          _that.isBindWithdrawPassword = result.data.isBindWithdrawPassword;
          _this.$store.commit('setUserGrade', gradeMsg);
          // this.isbind = result.data;
          // this.isCloseUserData = !!this.isbind.isBindWithdrawName;
          // this.isbindBg = !this.isCloseUserData;
          // this.isuserinfoInt = this.isCloseUserData;
          // this.tabnickName = this.isuserinfoInt;
        }
      });
    },
    checkClient(_this) {

      base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_INFOALL, function (result) {
        if (result.code === 0) {
          this.loginTime = base.formatDate(result.data.account.loginTime, 'yyyy-MM-dd hh:mm:ss');
          this.clientIp = result.data.accountLoginLog.ip;
        }
      });
      return this;
    },
    checkCard(_this) {
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.LIST_CARD, function (result) {
        if (result.code === 0) {
          if (result.data.length > 0) {
            for (let i = 0, len = result.data.length; i < len; i++) {
              result.data[i].bankCardId = result.data[i].bankCardId.slice(-4);
            }
            this.bindBankList = result.data;
            this.nickNames = this.bindBankList[0].bankCardName;
            this.isSendData = false;
          }
          if (this.bindBankList.length >= 5) {
            return this.isAddBank = false;
          }
          this.bindBankLists.pop();
          this.isAddBank = this.bindBankLists.length > 0 || false;
        }
      });
      return this;
    },
    loadBanks(_this) {

      base.httpPost(_this, API.ROOTY + API.POOTYPATH.LOADBANKS, function (result) {
        if (result.code === 0) {
          this.openBank = result.data.bankList[0].id;
          this.bankList = result.data.bankList;
          this.bindBankLists.length - 1;
          this.isAddBank = this.bindBankLists.length > 0 || false;
        }
      });
      return this;
    },
    sendUserData(_this, sendUrl) {
      base.httpPost(_this, sendUrl, function (result) {
        if (result.code === 0) {
          this.isCloseUserData = true;
          this.isbindBg = false;
          sendAPI.checkCard(this).checkgrade(this);
          this.nickName = '';
          this.nickNameNote = '（提款的时候只能用真实姓名操作(不能填写字母、数字、特殊字符。)';
          this.openBank = this.bankList[0].id;
          this.bankName = '';
          this.backNmaeNote = '填写支行名称遇到问题，请联系客服。';
          this.bankNumber = '';
          this.bankNumberNote = '由16或18或19位数字组成，请填写银行借记卡。';
          this.bankNumberAgain = '';
          this.bankNumberNoteAgain = '由16或18或19位数字组成，请填写银行借记卡。';
          this.fundsPwd = '';
          this.fundsPwdNote = '最少要输入 8 个字符';
          return true;
        }
        this.receiveError = result.message;
        return false;
      });
      return this;
    },
    sendResetPwd(_this, sendUrl) {
      base.httpPost(_this, sendUrl, function (result) {
        let that = this;
        if (result.code === 0) {
          that.resetPwd = false;
          that.isbindBg = false;
          Prompt()({
            idx: 'register',
            message: '密码设置成功，2s后自动跳转至登录...'
          });
          let timer = setTimeout(function () {
            clearTimeout(timer);
            userInit().loginout(_this, {target: "/login", islogin: true});
          }, 2000);
        }
        this.resetPwdErroe = result.message;
      });
      return this;
    },
    getLoginListInfo(_this, fn) {
      base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_LOGINDETAIL, function (result) {
        if (result.code === 0) {
          for (let i = 0, len = result.data.length; i < len; i++) {
            result.data[i].loginTime = base.formatDate(result.data[i].loginTime, 'yyyy-MM-dd hh:mm:ss');
          }
          if (result.data.length > 5) {
            this.loginListInfo = result.data.slice(4);
            return;
          }
          this.loginListInfo = result.data;
          fn && fn.call(_this);
        }
      });
      return this;
    },
    sendResetFunds(_this, sendUrl) {
      base.httpPost(_this, sendUrl, function (result) {
        let that = this;
        if (result.code === 0) {
          setTimeout(function () {
            that.resetPwd = false;
            that.isbindBg = false;
          }, 1000);
        }
        this.resetPwdErroe = result.message;
      });
      return this;
    },
    resetFundsPwd(_this) {
      let sendUrl = [API.ROOTY + API.POOTYPATH.RESET_FUNDSPASSWORD, '?', 'oldPassword=', md5(_this.oldPassword), '&newPassword=', md5(_this.rePassword)].join('');
      return this.sendResetFunds(_this, sendUrl);
    },
    bindUserInfo(_this) {
      let sendUrl = null;
      if (_this.isSendData) {
        sendUrl = [API.ROOTY + API.POOTYPATH.USER_DATA, '?', 'withdrawName=', _this.realName, '&withdrawPassword=', md5(_this.fundsPwd), '&bankId=', _this.openBank, '&bankBranch=', _this.bankName, '&bankCardId=', _this.bankNumber].join('');
      } else {
        sendUrl = [API.ROOTY + API.POOTYPATH.ADD_BANK, '?', '&withdrawPassword=', md5(_this.fundsPwd), '&bankId=', _this.openBank, '&bankBranch=', _this.bankName, '&bankCardId=', _this.bankNumber].join('');
      }
      this.sendUserData(_this, sendUrl);
      return true;
    },
    resetPwd(_this) {
      let sendUrl = '';

      sendUrl = [API.ROOTY + API.POOTYPATH.RESET_LOGINPASSWORD, '?', 'oldPassword=', md5(_this.oldPassword), '&newPassword=', md5(_this.rePassword)].join('');
      return this.sendResetPwd(_this, sendUrl);
    },
    resetUsername(_this) {
      let datas = {cn: _this.formObj.username.val, password: md5(_this.formObj.psw.val), withdrawPassword: ''};
      if (_this.isBindWithdrawPassword) {
        if (_this.formObj.psw.val === _this.formObj.fundPsw.val) return Prompt()({
          idx: 'errors',
          message: '密码与资金密码重复清重新输入'
        });
        datas['withdrawPassword'] = md5(_this.formObj.fundPsw.val);
      }
      _this.$http.post('/yx/u/api/account/first-time-modify-cn', {
          cn: _this.formObj.username.val,
          password: md5(_this.formObj.psw.val),
          withdrawPassword: md5(_this.formObj.fundPsw.val)
        }, {emulateJSON: true}
      ).then((res) => {
        let data = res.body;

        if (data.code === 0) {
          _this.usernameShow = false;
          Prompt()({
            idx: 'register',
            message: '用户名设置成功，2s后自动跳转至登录...'
          });
          let timer = setTimeout(function () {
            clearTimeout(timer);
            userInit().loginout(_this, {target: "/login", islogin: true});
          }, 2000);
        } else {
          _this.login_pass_error = data.message;
        }
      });
    }
  };
  return sendAPI;
}

function registerInit() {
  let rg = {
    register(_this) {
      _this.login_pass_error = '';
      let obj = _this.formObj;
      let ssoParams = [];
      let _referrer = JSON.parse(localStorage.getItem('_referrer'));
      let _parentid = JSON.parse(localStorage.getItem('_parentid'));
      let isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      }
      let afterautologin = function (_this, pass) {
        // var ssoParams = [API.ROOTY + API.POOTYPATH.REGAUTOLOGIN, '?', 'userName=', pass.data.userName, '&tk=', pass.data.tk, '&type=', pass.data.type];
        var ssoParams = [API.ROOTS + API.ROOTSPATH.LOGIN, "?", "cn=", pass.data.userName, "&appId=", 5, "&password=", pass.data.tk, "&type=", mainConfig.loginType]; // pass.data.type
        console.log('afterautologin', ssoParams.join(''));
        base.httpPost(_this, ssoParams.join(''), function (result) {
          if (result.code === 0) {
            var iframe = null;
            iframe = document.createElement('iframe')
            iframe.style.display = 'none'
            iframe.src = window.location.protocol + '//' + window.location.host + '/yx/u/login';
            iframe.id = 'login-iframe'
            document.body.appendChild(iframe)
            iframe.onload = function () {
              localStorage.setItem('_status', 'true');
              localStorage.setItem('_isIndex', 'true');
              localStorage.setItem('_name', pass.data.userName);
              localStorage.setItem('_pass', pass.data.tk);
              localStorage.setItem('_type', mainConfig.loginType);
              localStorage.setItem('_appid', 5);
              if (isMobile.any()) {
                setTimeout(function () {
                  location.href = '/yx/home';
                }, 200);
              } else {
                location.href = '/index';
              }
              // location.href = '/static/lt.html#11';
            }
            // location.href = '/index';
          }
          return false;
        });
        return this;
      }
      if (_this.regType === 1) {
        ssoParams = [API.ROOTY + API.POOTYPATH.REGISTER, '?',
          '&type=', _this.regType,
          '&phoneNum=', obj.mobile.val,
          '&pwd=', md5(obj.psw.val),
          '&yanzCode=', obj.verifyImg.val,
          '&phYzCode=', obj.verifyCode.val
        ];
      } else {
        ssoParams = [API.ROOTY + API.POOTYPATH.REGISTER, '?',
          '&name=', obj.username.val,
          '&pwd=', md5(obj.psw.val),
          '&type=', _this.regType,
          '&yanzCode=', obj.verifyImg.val
        ];
      }
      if (typeof _this.needLogin !== 'undefined') {
        if (_this.needLogin === '1') {
          ssoParams.push("&needLogin=1");
        }
      }
      if (_referrer && _referrer !== 'false' && _referrer !== 'undefined') {
        ssoParams.push("&referrer=" + _referrer.rels);
        // ssoParams.push("&referrerType=" + _this.isotherRegisterType);
      }
      if (_parentid && _parentid !== 'false' && _parentid !== 'undefined') {
        ssoParams.push("&parentId=" + _parentid);
        // ssoParams.push("&referrerType=" + _this.isotherRegisterType);
      }

      base.httpPost(_this, ssoParams.join(''), function (result) {
        let _this = this;
        if (result.code === 0) {
          if (document.documentElement.clientWidth < 450) {
            Prompt()({
              idx: 'register',
              message: '注册成功，跳转至登陆页面...'
            });
            localStorage.clear();
            if (typeof _this.needLogin !== 'undefined') {
              afterautologin(_this, result);
            } else {
              // if (isMobile.any()) {
              location.href = '/welcome/sign.html';
              // }else {
              //  location.href = '/yx/login/sign.html';
              // }
            }
            return true;
          }
          this.$store.commit('loginStatus', 'false');
          Prompt()({
            idx: 'register',
            message: '注册成功，跳转至登陆页面...'
          });
          if (typeof _this.needLogin !== 'undefined') {
            afterautologin(_this, result);
          } else {
            setTimeout(function () {
              localStorage.clear();
              location.href = '/login';
            }, 2000);
          }
          // console.log(result);
          return true;
        }
        _this.safetySrc = API.ROOTY + API.POOTYPATH.CAPTCHA + '?t=' + new Date();
        _this.login_pass_error = result.message;
        return false;
      });
      return this;
    },
    initlink(_this) {
      if (!_this.$route.params.userid) {
        return false;
      }
      var ssoParams = [API.ROOTY + API.POOTYPATH.USER_REGISTER, '?', 'link=', _this.$route.params.userid];

      base.httpPost(_this, ssoParams.join(''), function (result) {
        if (result.code.toString() !== '0') {
          /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? location.href = '/welcome/sign.html' : /(Android)/i.test(navigator.userAgent) ? location.href = '/welcome/sign.html' : this.$router.push('/login');
          return true;
        }
        this.parentId = result.data.parentId;
        this.links = result.data.link;
        return false;
      });
      return this;
    },
    RefreshSrc(_this) {
      _this.safetySrc = API.ROOTY + API.POOTYPATH.CAPTCHA + '?t=' + new Date();
    }
  };
  return rg;
};

// 判断密码强度
function pswIntensity(psw) {
  let len = psw.length;

  if (len < 9) {
    return 1;
  } else if (len < 15) {
    return 2;
  } else {
    return 3;
  }
}

// 获取手机验证码
function getVerifyCode(_this, options) {
  _this.$http.post('/yx/send-verify-code', options, {emulateJSON: true}
  ).then((response) => {
    let data = response.body;
    if (data.code === 0) {
      return true
    }
    _this.safetySrc = API.ROOTY + API.POOTYPATH.CAPTCHA + '?t=' + new Date();
    _this.login_pass_error = data.message;
  })
}

// 重置页面获取手机验证码
function resetVerifyCode(_this, options) {
  _this.$http.post('/yx/send-resetLoginPwd-verify-code', options, {emulateJSON: true}
  ).then((response) => {
    let data = response.body;
    if (data.code === 0) {
      return true
    }
    _this.safetySrc = API.ROOTY + API.POOTYPATH.CAPTCHA + '?t=' + new Date();
    _this.login_pass_error = data.message;
  })
}

// 重置用户密码
function pswReset(_this, obj) {
  let options = {
    name: obj.username.val,
    phoneNum: obj.mobile.val,
    phYzCode: obj.verifyCode.val,
    withdrawPassword: md5(obj.fundPsw.val),
    pwd: md5(obj.psw.val),
    passwordSecurity: pswIntensity(obj.psw.val)
  };

  _this.$http.post('/yx/reset-login-pwd', options, {emulateJSON: true}
  ).then((response) => {
    let data = response.body;
    if (data.code === 0) {
      Prompt()({
        idx: 'register',
        message: '重置密码成功，跳转至登陆页面...'
      });
      setTimeout(function () {
        location.href = '/login';
      }, 2000);
    }
    _this.login_pass_error = data.message;
  })
}

function lineDerection() {
  return function (_this, isboolean) {
    _this.$emit('speedMsg', isboolean);
  };
}

function speedInit() {
  let {speedSrc, speedConfig} = CONFIG;
  let speed = {
    allsites: speedSrc,
    domStyle: speedConfig,
    init2(_this, startime, index) {
      let odate = (new Date().getTime()) - startime;
      _this.detectionDataArr.push({
        src: this.allsites[index],
        time: odate,
        msg: this.domStyle[1][_this.detectionDataArr.length],
        wid: this.domStyle[0][index]
      });
    }
  };
  return speed;
};

function activityInit() {
  let activity = {
    activityDetails(btn, showobj, obj, initidx, isdoc) {
      let btns = document.getElementsByClassName(btn);
      let btnBoxs = document.getElementsByClassName(showobj);
      if (initidx) {
        btnBoxs[initidx].style.display = 'block';
        btns[initidx].zdblock = true;
      }

      function clearBtnBoxs(obj, btns) {
        for (let i = 0, len = obj.length; i < len; i++) {
          btns[i].zdblock = false;
          obj[i].style.display = 'none';
        }
      }

      function eventloop(e, btnBoxs, btns, _this) {
        if (e && e.stopPropagation) {
          e.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        if (e.target.nodeName === obj) {
          return false;
        }
        if (_this.zdblock) {
          btnBoxs[_this.index].style.display = 'none';
          _this.zdblock = false;
          return false;
        }
        clearBtnBoxs(btnBoxs, btns);
        btnBoxs[_this.index].style.display = 'block';
        _this.zdblock = true;
        return true;
      }

      for (let i = 0, len = btns.length; i < len; i++) {
        btns[i].index = i;
        btns[i].addEventListener('click', function (e) {
          eventloop(e, btnBoxs, btns, this);
        }, false);
      }
      if (isdoc) return {btns, btnBoxs, clearBtnBoxs};
      document.addEventListener('click', function () {
        clearBtnBoxs(btnBoxs, btns);
      }, false);
      return {
        btns,
        btnBoxs
      };
    },
    playDetails(btn, showobj, obj) {
      let btns = document.getElementsByClassName(btn);
      let btnBoxs = document.getElementsByClassName(showobj);

      function clearBtnBoxs(obj, btns) {
        for (let i = 0, len = obj.length; i < len; i++) {
          btns[i].zdblock = false;
          obj[i].style.display = 'none';
        }
      }

      function playDetailsEvent(e, btnBoxs, btns, _this) {
        if (e && e.stopPropagation) {
          e.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        if (obj && e.target.nodeName === obj) {
          return false;
        }

        clearBtnBoxs(btnBoxs, btns);
        btnBoxs[_this.index].style.display = 'block';
        return true;
      }

      function playDetailsEve(e, btnBoxs, btns, _this) {
        if (e && e.stopPropagation) {
          e.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        if (obj && e.target.nodeName === obj) {
          return false;
        }

        btnBoxs[_this.index].style.display = 'none';
        return true;
      }

      for (let i = 0, len = btns.length; i < len; i++) {
        btns[i].index = i;
        btns[i].addEventListener('mouseover', function (e) {
          playDetailsEvent(e, btnBoxs, btns, this);
        }, false);
        btns[i].addEventListener('mouseout', function (e) {
          playDetailsEve(e, btnBoxs, btns, this);
        }, false);
      }
    }
  };

  return activity;
}

function stationNotice() {
  let notice = {
    listall: [],
    init(_this) {
      this.loopNotice(_this);
    },
    getNotice(_this) {
      if (STATUS.get(_this, 'isLogin') !== 'true') {
        return false;
      }
      let that = this;
      return base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_NOTICE, function (result) {
        if (result.code === 0 && result.data.length >= 1) {
          for (let i = 0, len = result.data.length; i < len; i++) {
            result.data[i].time = base.formatDate(result.data[i].time, 'hh:mm:ss');
            that.listall.push(result.data[i].id);
          }
          let conData = result.data;
          for (let i = 0, len = conData.length; i < len; i++) {
            conData[i].content = !this.noticeList1 ? conData[i].content.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ')
              : conData[i].content.replace(/&lt;.*?&gt;/g, '').replace(/&amp;lt;.*?&amp;gt;/g, '');
            //   conData[i].content = conData[i].content.replace(/&lt;\/?[^&gt;]*&gt;/g, '').replace(/&nbsp;/g, ' ').replace(/\s\s+/g, ' ');
            conData[i].time = conData[i].time;
          }
          this.noticeList && (this.noticeList = result.data);
          this.noticeList1 && (this.noticeList1 = result.data);
          this.noticeListLen = result.data.length;
          _this.$store.commit('setStationNotice', result.data.length);
          this.showNotice = true;
          this.showRoom = this.noticeList1.length > 0
          this.IsAddRoom = this.noticeList1.length > 0
          console.log(this.showRoom)
          return false;
        }
        try {
          this.noticeList = [];
          this.noticeListLen = '';
          this.showNotice = false;
          this.showRoom = false;
          this.IsAddRoom = false;
          this.newMessage = false;
        } catch (e) {
          console.log(e);
        }
        return true;
      });
    },
    loopNotice(_this) {
      if (STATUS.get(_this, 'isLogin') !== 'true') {
        return false;
      }
      let that = this;
      return setInterval(function () {
        that.getNotice(_this);
      }, 60000);
    },
    readyNotice(_this) {
      let that = this;
      return base.httpPost(_this, API.ROOTY + API.POOTYPATH.USER_NOTICEREADY + '?ids=' + (this.listall.toString()), function (result) {
        if (result.code === 0) {
          that.getNotice(this);
        }
      });
    }
  };
  return notice;
};

function gendan() {
  let activity = {
    // 我的关注
    myFocusUserList(_this) {
      let options = {start: 0, end: 10}
      _this.$http.post('/gendan/followUser/myFocusUserList', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.myIdols = data.data
          return true
        }
      })
      return this
    },
    // 我的粉丝
    foucusMe(_this) {
      let options = {start: 0, end: 10}
      _this.$http.post('/gendan/followUser/focusedMeUserList', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.myFans = data.data
          return true
        }
      })
      return this
    },
    // 获取彩种列表
    getLottery(_this) {
      let options = {start: 0, end: 10}
      _this.$http.post('/gendan/follow-order-query/get-lottery', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.allLottery = data.data
          _this.allLottery.forEach(item => {
            gendan().initGame(_this, {name: _this.lotteryZd[item.code], code: item.code})
          })
        }
      })
      return this
    },
    // 获取彩种列表
    initGame(_this, options) {
      _this.$http.post('/yx/u/api/game-lottery/init-game-lottery', {name: options.name}, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.$set(_this.prizeZD, options.code, data.data.code)
        }
      })
      return this
    },
    // 获取彩种列表
    getMethod(_this) {
      let options = {lottery: _this.currentLottery}
      _this.$http.post('/gendan/follow-order-query/get-lottery-method', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.allPlays = data.data
        }
      })
      return this
    },
    // 获取彩种列表
    getList(_this, options) {
      _this.isLoading = true
      _this.$http.post('/gendan/follow-order-query/list', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        _this.isLoading = false
        if (data.code === 0) {
          _this.totalCount = data.data.tatalcount
          _this.listData = data.data.list
        }
      })
      return this
    },
    // 关注用户
    followUser(_this, options) {
      _this.$http.post('/gendan/followUser/followUser', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.data.isFocus = data.data.isFocus
          if (_this.data.isFocus) {
            _this.data.focusedCount++
          } else {
            _this.data.focusedCount > 0 && _this.data.focusedCount--
          }
        } else {
          App.alert('warning', '提示消息', data.message, 3000);
        }
      })
      return this
    },
    // 获取用户信息
    getFollowUserInfo(_this, options, callback) {
      _this.$http.post('/gendan/followUser/getFollowUserInfo', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          callback(data.data)
        }
      })
      return this
    },
    // 跟单
    followOrder(_this, options) {
      _this.$http.post('/gendan/follow-order', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        _this.isShow = false
        if (data.code === 0) {
          App.alert('success', '提示消息', '跟单成功!', 3000);
        } else {
          App.alert('warning', '提示消息', data.message, 3000);
        }
      })
      return this
    },
    // 跟单
    setLike(_this, options) {
      _this.$http.post('/gendan/setLikeByOrderId', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
        } else {
        }
      })
      return this
    },
    // 跟单
    hotMethod(_this) {
      _this.$http.post('/gendan/hotPlayMethodList', {pageSize: 5}, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          let middle = {}
          data.data.forEach(item => {
            middle = Object.assign({}, item, {id: _this.lotteryZd[item.code]})
            _this.hotMethod.push(middle)
          })
        } else {
        }
      })
      return this
    },
    // 昨日盈利榜
    yesterdayProfitList(_this) {
      _this.$http.post('/gendan/yesterdayProfitList', {pageSize: 5}, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
        } else {
        }
      })
      return this
    },
    // 个人信息接口
    getUserInfo(_this) {
      _this.$http.post('/gendan/followUser/getUserInfo', {}, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
          _this.userInfor = data.data
        } else {
        }
      })
      return this
    },
    // 设置昵称和头像
    setFollowUserInfo(_this, options) {
      _this.$http.post('/gendan/followUser/setFollowUserInfo', options, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        _this.closeNicknameBox()
        if (data.code === 0) {
          gendan().getUserInfo(_this)
          App.alert('success', '提示消息', '修改昵称成功！', 3000);
        } else {
          App.alert('warning', '提示消息', '修改昵称失败!', 3000);
        }
      })
      return this
    },
    // 跟单名人
    orderStarList(_this) {
      _this.$http.post('/gendan/orderStarList', {pageSize: 10}, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
        } else {
        }
      })
      return this
    },
    // 头像列表
    iconList(_this) {
      _this.$http.post('/gendan/follow-user-icon/list', {page: 0, size: 10}, {emulateJSON: true}
      ).then((response) => {
        let data = response.body;
        if (data.code === 0) {
        } else {
        }
      })
      return this
    },
  }
  return activity;
}

export {
  indexInit,
  loginInit,
  userInit,
  userConter,
  registerInit,
  speedInit,
  activityInit,
  downloadInit,
  noticeInit,
  stationNotice,
  Prompt,
  pswReset,
  resetVerifyCode,
  pswIntensity,
  getVerifyCode,
  inputlineBtn,
  userConterStatus,
  lineDerection,
  thirdpartyGame,
  gendan
};
