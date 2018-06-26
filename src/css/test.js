var nowSetting = {
  name:'彩宏娱乐'
}

domready(function(){
  
  new Vue({
      el: ($('header #loginform').size()>0 ? 'nav' : 'header'),
      ready: function () {
      },
      data: {
        title: nowSetting.name
      },
      computed: {
        // a computed getter
        reversedMessage: function () {
          document.title = '会员登录 - '+this.title;
          return ''
        }
      }
  });
  if (typeof Swiper !='undefined') {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true
    });  
  }   
  new Vue({
    el: '#loginform',
    data: {
      login_name_error :'', 
      login_pass_error:'',check
      login_captcha_error:'',
      name:'',
      show:false,
      pass:'',
      captcha:'',
      initcode:'',
      captchasrc:''
    },
    methods: {
      check: function (event) {
        //console.log(event.target.value);
      },
      checkpwd: function (event) {
        //console.log(event.target.value);
      },
      showheight:function() {
        // v-on:focus="showheight"
        //setTimeout(function() {
        //  alert(window.innerHeight);  
        //},400)
      },
      checkcode: function (event) {
        //console.log(event.target.value);
        //this.$http.post(ssoParams.join('')).then(function(res) {
      },
      login:function(event) {
        var appId = 5;
        var s = {
          name : this.name,
          pwd : this.pass
        }
        var ssoParams = [SimpleApi.route.login, "?",  "cn=", s.name,"&password=", md5(s.pwd)];
        if (this.captchasrc!='') {
          ssoParams.push("&capchaCode=" + this.captcha)
        }
        
        this.$http.post(ssoParams.join('')).then(function(res) {
          var res = JSON.parse(res.body);
          if (res.code=='0') {
            this.login_captcha_error='';
            this.login_pass_error='';
            window.location.href = "/yx/home";
            //window.location.href = "/static/html/index.html?cn="+res.user.cn;
          }else {
            if (res.code=='36' || res.code=='37') {
              this.captchasrc = SimpleApi.route.imageCode+'?t='+new Date();
              this.captcha='';
              this.show = true;
              this.login_captcha_error = res.msg;
            }
            if (res.code=='2' || res.code=='1') {
              if (this.login_captcha_error=='需要填写验证码') {
                this.login_captcha_error='';this.captcha='';
                this.captchasrc = SimpleApi.route.imageCode+'?t='+new Date();
              }
              if (this.login_captcha_error=='验证码输入错误') {
                this.login_captcha_error='';
                this.captchasrc = SimpleApi.route.imageCode+'?t='+new Date();
                this.captcha='';
              }
              this.login_pass_error = res.msg;
            }else {
              this.login_pass_error = res.msg;
            }
          }
          
        },function(error) {
          //console.log(error);
        });
      },
      fire:function(event) {
          
      }
    },
    computed: {
        readyshow: function () {
          setTimeout(function() {
            jQuery('.innerform').show();  
          },200)
          return ''
        }
      }
  });
  typeof SpeedTest !== 'undefined' && SpeedTest.init();

});