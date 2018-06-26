<template>
  <div class="loginWarp" :class="[isMounted ? 'width_spread' : 'width_shrink']">
    <div class="warp registerWarp">
      <div class="cont_title">账户登录</div>
      <div class="login" id="login">
        <div class="login_main clearfix" id="loginform">
          <div class="login_main_right clearfix">
            <!--<a class="forget_psw clearfix">忘记密码</a>-->
            <div class="clearfix main_input" v-show="!loginType">
              <span class="icon fz12">&#xe600;</span>
              <input class="userName" v-model="username" type="text" name="" placeholder="用户名/手机号" />
            </div>
            <div class="clearfix main_input" v-show="loginType">
              <span class="icon fz12">&#xe600;</span>
              <input class="userName" v-model="mobile" type="text" name="" placeholder="手机号" />
            </div>
            <div class="clearfix main_input" v-show="!loginType">
              <span class="icon">&#xe719;</span>
              <input class="psw" type="password" v-on:keyup.enter="login" v-model="psw" id="login-pass" placeholder="请输入密码" />
            </div>
            <div v-show="loginType" class="verifyImg clearfix mt5 main_input" v-cloak>
              <input class="BgRgbB0 ft14" type="text" v-on:keyup.enter="login" v-model="verifyImg" placeholder="图片验证码" />
              <div class="imgWrapper"><img v-bind:src="safetySrc" @click="RefreshSafety" alt="" /></div>
            </div>
            <div class="clearfix main_input get_verify_code" v-show="loginType">
              <input type="text" placeholder="验证码" v-model="verifyCode">
              <span @click="get_verify_code()">发送验证码</span>
              <div class="count_down" v-show="isCountFinish">{{countTime}}</div>
            </div>
            <div v-show="isCaptcha && !loginType" class="verify_code clearfix mt5 main_input" v-cloak>
              <input class="BgRgbB0 ft14" type="text" v-on:keyup.enter="login" v-model="captcha" id="captcha-input2" placeholder="图片验证码" />
              <div class="imgWrapper"><img v-bind:src="captchasrc" @click="RefreshSrc" alt="" id="captcha-img"/></div>
            </div>
            <span class="error colorA ft12" style="display: block;text-align: left" v-cloak>{{login_pass_error}}</span>
            <div v-on:click="login" class="login_btn clearfix cursor">
              立即登录
            </div>
            <!--<div class="go_mobile_login" v-show="!loginType" @click="switchLogin(1)">手机验证码登录</div>-->
            <!--<div class="go_mobile_login" @click="switchLogin(0)" v-show="loginType">用户名登录</div>-->
            <div class="other_option">
              <a href="http://test.tc508.com/yx/rgv/demo" class="try_play fl">试玩>></a>
              <a class="go_register fr" @click="isShow = true">免费注册</a>
            </div>
            <div class="pswReset"><router-link to="/passwordReset">重置密码</router-link></div>
          </div>
        </div>
        <!--<div class="login_navbar clearfix ">-->
          <!--<div class="colorA ml18 cursor" @click="speedFns">-->
            <!--域名验证-->
          <!--</div>-->
          <!--<span class="split_line"></span>-->
          <!--<a :href="customerService" target="_blank" class="colorA" to="">-->
            <!--<div class="cursor">-->
              <!--联系客服-->
            <!--</div>-->
          <!--</a>-->
        <!--</div>-->
        <UtilPrompt v-show="isShow" v-on:hide="isShow = false">
          <Register v-on:hide="isShow = false"></Register>
        </UtilPrompt>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
	import pagefooter from './pagefooter.vue';
  import UtilPrompt from "./utilPrompt"
  import Register from "./register"
	import {loginInit, downloadInit, lineDerection, getVerifyCode, registerInit} from '../js/index.js';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import {verifyRule} from '../js/const.js';

	let init =  loginInit();
	let initSafetyImg = registerInit();
	let downloadI =  downloadInit();
	let speed = lineDerection();
	export default {
	  name: 'login',
	  data () {
	    return {
	      msg: 'this is login',
	      height: document.documentElement.clientHeight,
	      width: document.documentElement.clientWidth,
        customerService : appConfig().customerService,
        username: '',
        mobile : '',
        verifyImg: '',
        safetySrc: '',
        countTime: 60,
        loginType : 0,
        isCountFinish: false,
	      psw: '',
        verifyCode : '',
        isMounted: false,
	      login_captcha_error: '',
	      login_pass_error: '',
	      isCaptcha: false,
	      captchasrc: '',
	      captcha: '',
        isShow: false
	    };
	  },
    created () {
      initSafetyImg.RefreshSrc(this);
      if (localStorage.getItem('_isRegisterGo') && localStorage.getItem('loginStatus') !== 'true') {
        this.isShow = true;
         localStorage.setItem('_isRegisterGo', '')
      }
    },
	  methods: {
      show_reg:function() {
        this.isShow = true;
      },
      get_verify_code (imgCode) {
        let that = this;

        if (!verifyRule.mobile.reg.test(this.mobile)) {
          this.login_pass_error = '手机号错误';
          return false
        }
        if (!verifyRule.verifyImg.reg.test(this.verifyImg)) {
          this.login_pass_error = '图片验证码错误';
          return false
        }

        let options = {
          phoneNum : this.mobile,
          yanzCode : this.verifyImg,
          type : 2
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
        this.loginType === 1 && getVerifyCode(this, options);
      },
      // 切换登录方式
	    switchLogin (type) {
        this.loginType = type;
        this.login_pass_error = '';
      },
			speedFns() {
				speed(this, true);
			},
	    download () {
	      this.isDownLoad = this.isDownLoad ? 0 : 1
	    },
      RefreshSafety () {
        initSafetyImg.RefreshSrc(this);
      },
	    RefreshSrc () {
	    	init.RefreshSrc(this)
	    },
	    focusPassWord (e) {
	      e.target.value = ''
	    },
	    blurPassWord (e) {
	      e.target.value = '0000'
	    },
	    login () {
	      if (this.loginType === 1) {
          if (!verifyRule.mobile.reg.test(this.mobile)) {
            this.login_pass_error = "手机号错误";
            return
          }
          if (!verifyRule.verifyImg.reg.test(this.verifyImg)) {
            this.login_pass_error = "图片验证码错误";
            return
          }
          if (!verifyRule.verifyCode.reg.test(this.verifyCode)) {
            this.login_pass_error = "手机验证码错误";
            return
          }
        } else {
          if (!verifyRule.username.reg.test(this.username) && !verifyRule.mobile.reg.test(this.username)) {
            this.login_pass_error = "账户名错误";
            return
          }
          if (!verifyRule.psw.reg.test(this.psw)) {
            this.login_pass_error = "密码错误";
            return
          }
          if (this.isCaptcha && !verifyRule.verifyImg.reg.test(this.captcha)) {
            this.login_pass_error = "图片验证码错误";
            return
          }
        }
	    	init.login(this)
	    }
	  },
	  components: {pagefooter, UtilPrompt, Register},
    mounted () {
      this.isMounted = true;
    },
	  beforeCreate() {
	  	// if(window.location.href.indexOf('/register') == -1 && (window.location.href.indexOf('/activity') === -1)){
	  	// 	if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	  	// 		location.href = '/yx/login/sign.html';
	  	// 	}
		  //   if(/(Android)/i.test(navigator.userAgent)) {
	  	// 		location.href = '/yx/login/sign.html';
	  	// 	}
	  	// }
	  }
	}
</script>
<style lang="stylus">
  @import "../css/stylus/index.styl";

  .loginWarp
    transition:1s
    &.width_spread
      display:block
    &.width_shrink
      display:none
    .login
      font-size:14px
      padding:0 25px
      .login_main
        .login_main_right
          .main_input
            display:flex
            margin-bottom:10px
            border:1px solid #c7c6c6
            radius(4px)
            height:24px
            input
              width:126px
              height: 22px
              line-height:22px
              padding-left:5px
              radius(4px)
            span
              display:inline-block
              radiusLeft(4px)
              flex-basis: 30px
              height:22px
              line-height:22px
              color()
              bgColor(bg_color)
          .verifyImg
            height:30px
            overflow:hidden
            input
              height: 28px
              line-height:28px
              width:90px
            img
              margin-top:1px
              height:30px
              radiusRight(5px)
              cursor()
          .get_verify_code
            position: relative
            input
              width:80px
            span
              flex-basis:80px
              cursor()
            .count_down
                position:absolute
                right: 0
                top: 0
                width: 74px
                bottom: 0
                font-size:16px
                line-height:22px
                bgRed()
                color()
                radiusRight(5px)
          .verify_code
            display:flex
            height:28px
            line-height:28px
            align-items:center
            input
              width: 80px
              height:100%
              border:none
            .imgWrapper
              height:100%
              float:right
              radius(4px)
              overflow:hidden
              img
                height:34px
          .error
            color:red
            line-height: 14px
            margin-bottom:10px
          .login_btn
            height: 24px
            line-height:24px
            gradientRed()
            color()
            radius(4px)
          .go_mobile_login
            color(text_color)
            cursor()
          .other_option, .pswReset
            overflow:hidden
            font-size: 12px
          .other_option
            margin-top:10px
            a
              display:inline-block
              padding: 3px
              radius(3px)
              bgRed()
              color()
          .pswReset
            a
              float:right
              color(#c9caca)
      .login_navbar
        display:flex
        justify-content:center
        align-items: center
        font-size:12px
        .split_line
          height:14px
          border-left:1px solid #fff
          margin:0 10px
</style>
