<template>
  <div class="loginWarp register">
    <div class="warp registerWarp">
      <div class="register_otherBg" v-if="isotherRegister">
         <img src="../img/register/register_otherBg1.png" alt="">
      </div>
      <div class="pc_page" v-show="!ismoble">
        <router-link v-if="isotherRegister"  to="/activity/pc"><img width="506" height="370" src="../img/register/discount_cont.jpg" class="login_logo"></router-link>

        <router-link v-else to="/activity/0"><img width="506" height="370" src="../img/login/discount_cont.png" class="login_logo"></router-link>
        <div class="split_line_v"></div>
        <div class="login" id="login">
          <div class="login_main reg_mainform clearfix" id="loginform" v-if="!ismoble">
            <div class="login_title">
              <p :class="[!regType && 'active']" @click="typeSwitch(0)">账号注册</p>
              <p :class="[regType && 'active']" @click="typeSwitch(1)">手机号注册</p>
              <span class="close_btn cursor icon" @click="hide()">&#xe63b;</span>
            </div>
            <div class="login_main_right clearfix">
              <div class="clearfix main_input mobile_name" v-show="regType">
                  <!--<div class="area_code">-->
                    <!--<select>-->
                      <!--<option>+86</option>-->
                      <!--<option>+06</option>-->
                    <!--</select>-->
                  <!--</div>-->
                  <i class="icon">&#xe688;</i>
                  <input class="" v-model="formObj.mobile.val" type="text" v-on:focus="focusInput('mobile')" v-on:blur="regCheck('mobile')" name="" placeholder="请输入手机号"/>
                  <p class="" v-show="formObj.mobile.isShow">{{formObj.mobile.tip}}</p>
                  <em class="icon right_icon" v-show="formObj.mobile.isFocus && formObj.mobile.isPass">&#xe6bb;</em>
                  <em class="icon wrong_icon" v-show="formObj.mobile.isFocus && !formObj.mobile.isPass">&#xe63b;</em>
              </div>
              <div class="clearfix main_input user_name" v-show="!regType">
                <i class="icon">&#xe600;</i>
                <input class="" v-model="formObj.username.val" type="text" v-on:focus="focusInput('username')" v-on:blur="regCheck('username')" name=""
                       placeholder="6-10位，字母、数字或下划线"/>
                <p class="" v-show="formObj.username.isShow">{{formObj.username.tip}}</p>
                <em class="icon right_icon" v-show="formObj.username.isFocus && formObj.username.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.username.isFocus && !formObj.username.isPass">&#xe63b;</em>
              </div>
              <div class="clearfix main_input psw">
                <i class="icon">&#xe719;</i>
                <input class="" type="password" v-on:focus="focusInput('psw')" v-on:blur="regCheck('psw')" v-model="formObj.psw.val" id="login-pass2" placeholder="请输入密码"/>
                <p class="" v-show="formObj.psw.isShow">{{formObj.psw.tip}}</p>
                <em class="icon right_icon" v-show="formObj.psw.isFocus && formObj.psw.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.psw.isFocus && !formObj.psw.isPass">&#xe63b;</em>
              </div>
              <div class="clearfix main_input repeat_psw">
                <i class="icon">&#xe719;</i>
                <input class="" type="password" @focus="focusInput('repeatPsw')" @blur="regCheck('repeatPsw')" v-model="formObj.repeatPsw.val" placeholder="请重复您的密码"/>
                <p class="" v-show="formObj.repeatPsw.isShow">{{formObj.repeatPsw.tip}}</p>
                <em class="icon right_icon" v-show="formObj.repeatPsw.isFocus && formObj.repeatPsw.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.repeatPsw.isFocus && !formObj.repeatPsw.isPass">&#xe63b;</em>
              </div>
              <div class="verify_img clearfix mt5 main_input" v-cloak>
                <i class="icon">&#xe69d;</i>
                <input class="BgRgbB0 ft14" type="text" v-on:keyup.enter="login" v-model="formObj.verifyImg.val"  placeholder="请输入验证数字" />
                <div class="imgWrapper"><img v-bind:src="safetySrc" @click="RefreshSrc" alt="" ></div>
              </div>
              <div class="verify_code clearfix mt5 main_input" v-show="regType">
                <i class="icon">&#xe69d;</i>
                <input class="BgRgbB0 ft14" type="text" v-on:keyup.enter="login" v-model="formObj.verifyCode.val"
                       placeholder="请输入验证码"/>
                <div class="get_code" @click="get_verify_code()">点击发送</div>
                <div class="count_down" v-show="isCountFinish">{{countTime}}</div>
              </div>
              <span class="error colorA ft12 clear" v-cloak>{{login_pass_error}}</span>
              <div v-on:click="registerSubmit" class="register_btn clearfix colorA cursor">
                立即注册
              </div>
              <!--<div class="reg_discount">-->
                <!--<img src="../img/login/register_award.png">-->
                <!--<span class="common_color">手机注册即送3元彩金</span>-->
              <!--</div>-->
            </div>
          </div>
        </div>
      </div>
      <div class="mobileWarp" v-show="ismoble" :style="{'height': height + 'px'}">
        <div class="logoImg">
          <a href="javascript:void(0)"><img src="../img/register/logo_big_d.png"/></a>
        </div>
        <div class="login">
          <div :class="isotherRegister?'login_main clearfix hrefActivity':'login_main clearfix'">
            <div class="login_title">
              <div class="mobile_pop"></div>
              <p :class="[regType && 'active','first']" @click="typeSwitch(1)"><em class="icon">&#xe688;</em>手机号注册</p>
              <p :class="[!regType && 'active','sec']" @click="typeSwitch(0)"><em class="icon">&#xe6b9;</em>账号注册</p>
            </div>
            <div class="login_main_right clearfix">
              <div class="clearfix main_input mobile_name" v-show="regType">
                <!--<div class="area_code">-->
                <!--<select>-->
                <!--<option>+86</option>-->
                <!--<option>+06</option>-->
                <!--</select>-->
                <!--</div>-->
                <i class="icon">&#xe688;<b>手机号</b></i>
                <input class="" v-model="formObj.mobile.val" type="text" v-on:focus="focusInput('mobile')" v-on:blur="regCheck('mobile')" name=""
                       placeholder="请输入手机号"/>
                <p class="" v-show="formObj.mobile.isShow">{{formObj.mobile.tip}}</p>
                <em class="icon right_icon" v-show="formObj.mobile.isFocus && formObj.mobile.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.mobile.isFocus && !formObj.mobile.isPass">&#xe63b;</em>
              </div>
              <div class="clearfix main_input user_name" v-show="!regType">
                <i class="icon">&#xe600;<b>用户名</b></i>
                <input class="" v-model="formObj.username.val" type="text" v-on:focus="focusInput('username')" v-on:blur="regCheck('username')" name=""
                       placeholder="6-10位，字母、数字或下划线"/>
                <p class="" v-show="formObj.username.isShow">{{formObj.username.tip}}</p>
                <em class="icon right_icon" v-show="formObj.username.isFocus && formObj.username.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.username.isFocus && !formObj.username.isPass">&#xe63b;</em>
              </div>
              <div class="clearfix main_input psw">
                <i class="icon">&#xe719;<b>密码</b></i>
                <input class="" type="password" v-on:focus="focusInput('psw')" v-on:blur="regCheck('psw')" v-model="formObj.psw.val" placeholder="6到24位，字母和数字组合"/>
                <p class="" v-show="formObj.psw.isShow">{{formObj.psw.tip}}</p>
                <em class="icon right_icon" v-show="formObj.psw.isFocus && formObj.psw.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.psw.isFocus && !formObj.psw.isPass">&#xe63b;</em>
              </div>
              <div class="clearfix main_input repeat_psw">
                <i class="icon">&#xe719;<b>重复密码</b></i>
                <input class="" type="password" @focus="focusInput('repeatPsw')" @blur="regCheck('repeatPsw')" v-model="formObj.repeatPsw.val" placeholder="请重复您的密码"/>
                <p class="" v-show="formObj.repeatPsw.isShow">{{formObj.repeatPsw.tip}}</p>
                <em class="icon right_icon" v-show="formObj.repeatPsw.isFocus && formObj.repeatPsw.isPass">&#xe6bb;</em>
                <em class="icon wrong_icon" v-show="formObj.repeatPsw.isFocus && !formObj.repeatPsw.isPass">&#xe63b;</em>
              </div>
              <div class="verify_img clearfix mt5 main_input main_input_seclast" v-cloak>
                <i class="icon">&#xe610;<b>验证码</b></i>
                <input class="BgRgbB0 ft14" type="text" v-on:keyup.enter="login" v-model="formObj.verifyImg.val"  placeholder="输入验证码" />
                <div class="imgWrapper"><img v-bind:src="safetySrc" @click="RefreshSrc" alt="" id="captcha-img"/></div>
              </div>
              <div class="verify_code clearfix mt5 main_input main_input_last" v-show="regType">
                <i class="icon">&#xe610;<b>短信验证码</b></i>
                <input class="BgRgbB0 ft14" type="text" v-on:keyup.enter="login" v-model="formObj.verifyCode.val"
                       placeholder="短信验证码"/>
                <div class="get_code" @click="get_verify_code(formObj.verifyImg.val)">点击发送</div>
                <div class="count_down" v-show="isCountFinish">{{countTime}}</div>
              </div>
              <span class="error colorA ft12 clear" v-cloak>{{login_pass_error}}</span>
              <div class="keepleft" style="display:none;">
								<em class="chkdot">
									<i class="icon" v-show="ischk">&#xe660;</i>
								</em>
								<a href="javascript:void(0)" target="_blank">同意<span class="common_color">“开户协议”</span></a>
              </div>
              <div v-on:click="registerSubmit" class="register_btn clearfix colorA cursor">
                注&nbsp;册
              </div>
              <div class="reg_center">
                <a :href="loginlnk" class="lf hand">已有账号？<em>立即登录</em></a>
              </div>

              <!--<div class="reg_discount">-->
                <!--<img src="../img/login/register_award.png">-->
                <!--<span class="common_color">手机注册即送3元彩金</span>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        
        <div class="bottomlnk">
          <div class="innerbt">
            <a href="/yx/login/sign.html" class="lf hand">已有账号？<em>点击登录</em></a>
            <a :href="customer_url" target="_blank" class="rf hand"><em class="icon">&#xe6ae;</em>咨询客服</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import bgtab from './pageBgTab.vue';
  import rightBar from './pageRightBar.vue';
  import {loginInit, downloadInit, lineDerection, registerInit, getVerifyCode} from '../js/index.js';
  import {IsPC} from '../js/common.js';
  import {verifyRule} from '../js/const.js';

  let speed = lineDerection();
  let init = registerInit();
  let constructObj = function() {
    let obj = {};
    for (let key in verifyRule) {
      if (key === 'username' || key === 'mobile' || key === 'psw' || key === 'repeatPsw' || key === 'verifyImg' || key === 'verifyCode') {
        obj[key] = {
          isShow : false,
          val : '',
          tip : verifyRule[key].tip,
          reg : verifyRule[key].reg,
          error : verifyRule[key].error,
          isPass : false,
          isFocus : false
        }
      }
    }
    return obj
  };

  var QueryString = function() {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }();

  export default {
    name: 'warp',
    data() {
      return {
        customer_url: appConfig().customerService,
        height: (document.documentElement.clientHeight < 550 ? 550 : document.documentElement.clientHeight),
        width: '100%',
        widths: document.documentElement.clientWidth,
        nameNote: true,
        passNote: true,//loginlnk:'/yx/login/sign.html',
        loginlnk:'/welcome/sign.html',
        verifyRule: verifyRule,ischk:true,
        captcha: '',
        regType: 1,
        parentId: null,
        login_pass_error: '',
        formObj : constructObj(),
        countTime: 60,
        isCountFinish : false,
        passTo: '',
        safety: '',
        safetySrc: '',
        serverTerms: true,agreem:null,
        registerMsg: '',
        parentId: '',
        links: '',
        ismoble: false,
        islogin: this.$store.state.isLogin === 'true',
        registerNote: '2s秒后自动跳转至登录...',
        swiperOption: {
          autoplay: 3000,
          effect: "fade",
          grabCursor: true,
          setWrapperSize: true,
          paginationClickable: true,
          pagination: '.swiper-pagination',
          mousewheelControl: false,
          observeParents: true,
        },
        isotherRegister: '',
        isotherRegisterType:'',
      }
    },
    methods: {
      // 切换注册方式
      typeSwitch (typeId) {
        this.regType = typeId;
        this.formObj = constructObj();
        this.login_pass_error = '';
      },
      isread:function() {
        this.agreem = new jBox('Modal', {
          id:'readagree',
          title:'开户协议',
          content: '<div class="agreement_txt">我同意</div><div class="closeagree"><a class="hand" onclick="window.agreeM.close();">确认</a></div>'
        });
         
        this.agreem.open();
        window.agreeM = this.agreem;
        //this.ischk = !this.ischk;  
      },
      // 获取手机验证码
      get_verify_code () {
        let that = this;
        let mobile = this.formObj.mobile;
        let verifyImg = this.formObj.verifyImg;

        if (!mobile.reg.test(mobile.val)) {
          this.login_pass_error = '手机号错误';
          return
        }
        if (!verifyImg.reg.test(verifyImg.val)) {
          this.login_pass_error = '验证图片数字错误';
          return
        }

        let options = {
          phoneNum : mobile.val,
          yanzCode : verifyImg.val,
          type : this.regType
        };
        this.isCountFinish = true;
        let timer = setInterval(function() {
          if(that.countTime === 0) {
            clearInterval(timer);
            that.countTime = 60;
            that.isCountFinish = false;
          }
          that.countTime--;
        }, 1000);
        this.regType === 1 && getVerifyCode(this, options);
      },
      // 输入框获取焦点
      focusInput (focusTarget) {
        let target = this.formObj[focusTarget];

        this.login_pass_error = '';
        target.isShow = true;
      },
      // 输入框失去焦点
      regCheck(tipTarget) {
        let target = this.formObj[tipTarget];

        target.isFocus = true;
        target.isShow = false;
        target.val = target.val.trim();

         if (target.reg.test(target.val)) {
           if (tipTarget === 'repeatPsw') {
             if (!this.repeatPswReg()) {
               return false
             }
           }
           target.isPass = true;
         } else {
           target.isPass = false;
         }
      },
      repeatPswReg() {
        if(this.formObj['psw'].val !== this.formObj['repeatPsw'].val) {
          this.formObj['repeatPsw'].isPass = false;
          return false;
        }
        return true
      },
      hide() {
        this.$emit('hide');
        localStorage.setItem("_isRegisterGo", '');
      },
      speedFns() {
        speed(this, true);
      },
      showPassNote() {
        this.nameNote = false;
        this.passNote = true;
      },
      showNameNote() {
        this.passNote = false;
        this.nameNote = true;
      },
      // 注册提交
      registerSubmit() {
        let obj = this.formObj;
        if (this.regType === 1) {
          for (let key in obj) {
            if (key !== 'username') {
              if (!obj[key].reg.test(obj[key].val)) {
                this.formObj[key].isFocus = true;
                this.formObj[key].isPass = false;
                this.login_pass_error = this.formObj[key].error;
                return false;
              }
            }
          }
        } else {
          for (let key in obj) {
            if (key !== 'mobile' && (key !== 'verifyCode')) {
              if (!obj[key].reg.test(obj[key].val)) {
                this.formObj[key].isFocus = true;
                this.formObj[key].isPass = false;
                this.login_pass_error = this.formObj[key].error;
                return false;
              }
            }
          }
        }

        if (!this.ischk) {
          this.login_pass_error = '请勾选同意！';
          return false;
        }
        //需要自动登录
        this.needLogin = "1";
        console.log(this);
        init.register(this);
      },
      serverTerm(e) {
        this.serverTerms = this.zdchecked ? (this.zdchecked = false, e.target.className = 'matai colorA ft12', true) : (this.zdchecked = true, e.target.className = 'matai colorAa ft12', false);
      },
      RefreshSrc() {
        init.RefreshSrc(this);
      },
    },
    created () {
      // if (IsPC() && (location.href.indexOf('register') > 0)) {
      //   localStorage.setItem("_isRegisterGo", true);
      //   let urls = window.location.href.split('referrer=')[1];
      //   console.log(urls)
      //   if(urls) {
      //     return this.$router.push('/index?referrer='+urls);
      //   }
      //   this.$router.push('/index');
      // }

    },
    beforeCreate() {
      let s = document.createElement('meta');
      s.name = "viewport";
      s.content = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui";
      s.id = "hello";
      document.getElementsByTagName('head')[0].appendChild(s);
    },
    components: {
      bgtab,
      rightBar
    },
    mounted() {
      var isMobile = {
          Android: function() {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
              return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          }
      };

      if (typeof QueryString.h5 !='undefined' && QueryString.h5=='1') {
        this.loginlnk = '/yx/login/sign.html?h5=1'
      }

      /*(function(t){
        try{
          let urls = JSON.parse(localStorage.getItem('_referrer'));
          if (urls==null) {
            return false;  
          }
          let delReferrer = appConfig().referrerMap;
          let smobiles = urls.rels.split('&smobile');
          if(smobiles[1]){
            urls = smobiles[0]
          }else{
            if (urls != null) {
              urls = urls.rels;  
            }
          }
          if(urls && urls !== 'false'){
              // let datatype = urls.split('&type=');
              for(let i = 0, l = delReferrer.length; i < l; i++) {
                if(urls === delReferrer[i]) {
                  t.isotherRegister = false;
                  return false;
                }
              }
              t.isotherRegister = urls;
          }
        }catch(e){
          console.log(e);
        }
      })(this);*/

      let _this = this;
      let box = document.getElementById("hello");
      box.parentNode.removeChild(box);
      init.RefreshSrc(this);
      window.addEventListener("resize", function () {
        _this.height = (document.documentElement.clientHeight < 550 ? 550 : document.documentElement.clientHeight)
      }, false)
      _this.parentId = localStorage.getItem("_parentid");
      //alert(_this.parentId);
      if (!IsPC()) {
        this.ismoble = true;
        // let url = window.location.href.split('referrer=')[1];
        // console.log(url)
        // debugger;
        // if(url){
        //     location.href = "/yx/login/sign.html?referrer="+url;
        // }
        console.log(this.ismoble);
        document.getElementById("app").style.width = document.documentElement.clientWidth;

      }
    }
  }
</script>
<style lang="stylus">
  @import "../css/stylus/index.styl";
  .hrefActivity
    position: relative;
    background-image: url(/static/img/referrerRegister.png);
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 110px;
    margin-top: 0;
    height: 40%;
  .register
    .keepleft
      text-align:left;
      .chkdot
        background-color: #ff687a;
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        margin-right: 4px;
        float:left;
        margin-top:3px;
    .register_otherBg
      position:absolute;
      bottom:100%;
      left:28%;
    .reg_center
      color:#898989
      em
        color:#ff5868
    .warp
      .pc_page, .mobileWarp
        .login
          width: 92%
          font-size: 14px
          padding: 0
          height: 90%
          .login_title
            position: relative
            .mobile_pop
              background-image: url(../img/register/youli.png)
              position: absolute;
              display:none;
              top: -35px;
              height: 30px;
              width: 125px;
              background-size: 100% 100%;
            p
              display: inline-block
              border: 1px
              cursor()
              font-size:16px
              background-color: #e9e9e9
              &.active
                font-weight: bold
                height: 44px
                background-color: #ff687a
                color:#fff
          .login_main
            .login_main_right
              .main_input
                position: relative
                margin: 0px auto;
                margin-bottom: 18px
                border: none
                height: auto
                width: 100%
                overflow: hidden;
                radius(0px)
                height: 42px
                line-height: 42px
                border-bottom: 1px solid #dadad9
                em
                  position:absolute
                  right: 8px
                  height: 16px
                  line-height:18px
                  color()
                  top:12px
                  radius(50%)
                .right_icon
                  bgColor(green)
                .wrong_icon
                  bgRed()
                i
                  position:absolute
                  left: 5px
                  font-size: 22px;
                  color(#fe8493)
                  height:100%
                  width:100px
                  line-height:40px;
                  text-align: left;
                  radiusLeft(5px)
                  b
                    font-size: 14px;
                    color: #202020;
                    font-family: Microsoft YaHei;
                    font-weight: normal;
                    line-height: 41px;
                    float: right;
                    width: 70px;
                    text-align: left;
                input
                  height: 42px
                  line-height: 42px
                  width: 100%
                  padding-left: 116px
                  padding-right:20px
                p
                  position: absolute
                  text-align:left
                  left:0
                  padding:0 5px
                  z-index:10
                  bottom: -17px
                  line-height: 16px
                  font-size:12px
                  color()
                  radius(2px)
                  bgColor(tip_bg)
              .user_name
                margin-top: 0px
              .mobile_name
                .area_code
                  width:80px
                  select
                    display:block
                    height:100%
                    radius(5px)
              .error
                display: block
                color: red
                line-height: 14px
                text-align: left
                margin: 0px auto
                width:90%
                line-height: 25px;
                margin-bottom: 0px
              .verify_img
                input
                  radiusRight(0)
                .imgWrapper
                  border:0px solid #dcdddd
                  width:100px
                  overflow:hidden
                  img
                    height:30px
                    width:100%
              .verify_code
                input
                  radiusRight(0)
                .get_code
                  height: 30px
                  line-height: 30px
                  width: 77px
                  color:#ff687a
                  font-size:12px
                  border-radius: 3px;
                  background-color:#ffefef
                  border:1px solid #f67c7c
                  cursor()
                .count_down
                  position:absolute
                  right: -1px
                  top: 0
                  width: 78px
                  bottom: 0
                  font-size:18px
                  line-height:34px
                  bgRed()
                  color()
                  radiusLeft(5px)
              .register_btn
                height: 48px
                line-height: 48px
                font-size: 20px
                radius(5px)
                width:90%
                margin:10px auto
                bgRed()
              .reg_discount
                display: flex
                setMiddle()
                img
                  margin-right: 2px
      .pc_page
        display: flex
        justify-content: center
        align-items: center
        bgNormal(imgPathLogin + 'prompt_bg.png')
        width: 1200px
        height: 470px
        margin:100px auto
        .split_line_v
          width: 2px
          height: 80%
          border-left: 1px solid #dcdddd
          margin: 0 30px
        .login
          width: 330px
          font-size: 14px
          padding: 0
          height: 80%
          .login_title
            text-align: left
            p
              &.active
                color(text_color)
                border-bottom: 1px solid text_color
            .close_btn
              position: absolute
              right: 0
          .login_main
            .login_main_right
              .user_name
                margin-top: 0px
              .error
                display: block
                color: red
                line-height: 14px
                text-align: left
                margin: 0px auto
                width:90%
                margin-bottom: 5px
              .verify_code
                input
                  radiusRight(0)
              .register_btn
                bgColor(#ff5868)
      .mobileWarp
        padding:30px 0
        bgNormal(imgPathCommit + 'login_rg_bg1.png')
        background-size:100% 100%
        position: relative
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none
        input
          outline: none
        .login
          .login_main 
            .login_main_right
              .verify_code
                .count_down
                  line-height: 42px
                  background-color: #e9e9e9;
                  color: #ff6681;
                  border-top-left-radius: 0px;
                  border-bottom-left-radius: 0px;
        .logoImg
          height:90px
          a
            display:block
            img
              height:60px
        .bottomlnk
          position: absolute;
          bottom: 20px;
          width:100%
          display:none
          text-align:right
          .innerbt
            width: 92%;
            margin: 0px auto;  
          .lf
            float:left;
            color:#932e37
            em
              color:#f9737f
          .rf
            color:#932e37
        .login
          margin:0 auto
          margin-top:10px
          .login_title
            text-align:center
            position: relative;
            height:44px
            .first
              border-radius: 5px 0px 0px 5px;
            .sec
              border-radius: 0px 5px 5px 0px;
            p
              color(#999)
              float:left
              width:50%
              line-height:44px
              em
                display:none
              &.active
                border-bottom: 0px solid red
                color(#fff)
          .login_main
            .login_main_right
              background-color:transparent
              padding-top: 15px
              .main_input
                margin-bottom:12px
              .main_input_seclast
                margin-bottom:0px
              .main_input_last
                margin-bottom:0px
                margin-top:10px
            .reg_discount
              span
                color()
            input
              bgColor()

</style>
<style>
  #readagree{
    width:80%;
  }
  #readagree .agreement_txt{
    width: 100%;
    min-height: 300px;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    height: 300px;
    background-color: #EFEFEF;
    padding: 10px 5px;
    border-radius: 8px;
  }
  #readagree .jBox-title{
    padding:0px;
    text-align:center;border-bottom:none;
    background-color: #FFF;
    line-height: 50px;
    font-size: 22px;
    font-weight: bold;
  }
  #readagree .jBox-container{
    border-radius: 10px;
    overflow: hidden;
  }
  #readagree .jBox-content{
    padding-top:0px;
  }
  #readagree .closeagree{
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    border-radius: 5px;
    width: 90%;
    margin: 10px auto;
    background-color: #ff6681;
    text-align:center;
    margin-top: 20px;
  }
  #readagree .closeagree a{
    color:#fff;
  }
  .register .warp .pc_page .reg_mainform .login_title{
    margin-bottom:15px;
  }
  .register .warp .pc_page .reg_mainform .login_title p{
    color:#ababab;
    display:inline-block;
    background-color: transparent;
    margin-right:15px;
  }
  .register .warp .pc_page .reg_mainform .login_title p.active{
    color:#ff5669;
    background-color: transparent;
    line-height: 44px;
  }
  #loginform.reg_mainform .main_input i{
    width:40px;
    text-align: center;
  }
  #loginform.reg_mainform .main_input input{
    padding-left: 46px;
  }
  #loginform.reg_mainform .main_input{
    margin-bottom:5px;
  }
  
  @media (min-height:480px){
	  .register .warp .mobileWarp .bottomlnk{
      position: relative;
    }
	}
</style>