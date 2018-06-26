<template>
  <div class="pswResetpage" :style="{minHeight: height + 'px'}">
    <!--<img src="../img/login/pswReset.png">-->
    <div class="reset_cont">
      <div class="login_main clearfix" id="loginform">
        <div class="login_main_right clearfix">
          <h1>密码重置</h1>
          <div class="clearfix main_input mobile_name">
            <span class="icon">&#xe688;</span>
            <input class="" v-model="formObj.username.val" type="text" v-on:focus="focusInput('username')" v-on:blur="regCheck('username')" name=""
                   placeholder="请输入用户名"/>
            <p class="" v-show="formObj.username.isShow">{{formObj.username.tip}}</p>
            <em class="icon right_icon" v-show="formObj.username.isFocus && formObj.username.isPass">&#xe6bb;</em>
            <em class="icon wrong_icon" v-show="formObj.username.isFocus && !formObj.username.isPass">&#xe63b;</em>
          </div>
          <div class="clearfix main_input mobile_name">
            <span class="icon">&#xe688;</span>
            <input class="" v-model="formObj.mobile.val" type="text" v-on:focus="focusInput('mobile')" v-on:blur="regCheck('mobile')" name=""
                   placeholder="请输入手机号"/>
            <p class="" v-show="formObj.mobile.isShow">{{formObj.mobile.tip}}</p>
            <em class="icon right_icon" v-show="formObj.mobile.isFocus && formObj.mobile.isPass">&#xe6bb;</em>
            <em class="icon wrong_icon" v-show="formObj.mobile.isFocus && !formObj.mobile.isPass">&#xe63b;</em>
          </div>
          <div class="clearfix main_input psw">
            <span class="icon">&#xe719;</span>
            <input class="" type="password" @focus="focusInput('fundPsw')" @blur="regCheck('fundPsw')" v-model="formObj.fundPsw.val"  placeholder="请输入资金密码"/>
            <p class="" v-show="formObj.fundPsw.isShow">{{formObj.fundPsw.tip}}</p>
            <em class="icon right_icon" v-show="formObj.fundPsw.isFocus && formObj.fundPsw.isPass">&#xe6bb;</em>
            <em class="icon wrong_icon" v-show="formObj.fundPsw.isFocus && !formObj.fundPsw.isPass">&#xe63b;</em>
          </div>
          <div class="clearfix main_input psw">
            <span class="icon">&#xe719;</span>
            <input class="" type="password" v-on:focus="focusInput('psw')" v-on:blur="regCheck('psw')" v-model="formObj.psw.val" placeholder="请输入新密码"/>
            <p class="" v-show="formObj.psw.isShow">{{formObj.psw.tip}}</p>
            <em class="icon right_icon" v-show="formObj.psw.isFocus && formObj.psw.isPass">&#xe6bb;</em>
            <em class="icon wrong_icon" v-show="formObj.psw.isFocus && !formObj.psw.isPass">&#xe63b;</em>
          </div>
          <div class="clearfix main_input repeat_psw">
            <span class="icon">&#xe719;</span>
            <input class="" type="password" @focus="focusInput('repeatPsw')" @blur="regCheck('repeatPsw')" v-model="formObj.repeatPsw.val" placeholder="请重复您的密码"/>
            <p class="" v-show="formObj.repeatPsw.isShow">{{formObj.repeatPsw.tip}}</p>
            <em class="icon right_icon" v-show="formObj.repeatPsw.isFocus && formObj.repeatPsw.isPass">&#xe6bb;</em>
            <em class="icon wrong_icon" v-show="formObj.repeatPsw.isFocus && !formObj.repeatPsw.isPass">&#xe63b;</em>
          </div>
          <div class="verify_img clearfix mt5 main_input" v-cloak>
            <input class="BgRgbB0 ft14" type="text" v-model="formObj.verifyImg.val"  placeholder="请输入验证数字" />
            <div class="imgWrapper"><img v-bind:src="safetySrc" @click="RefreshSrc" alt="" ></div>
          </div>
          <div class="verify_code clearfix mt5 main_input">
            <input class="BgRgbB0 ft14" type="text" v-model="formObj.verifyCode.val"
                   placeholder="请输入验证码"/>
            <div class="get_code" @click="getResetVerifyCode">点击发送</div>
            <div class="count_down" v-show="isCountFinish">{{countTime}}</div>
          </div>
          <span class="error colorA ft12 clear" v-cloak>{{login_pass_error}}</span>
          <div @click="resetAct" class="login_btn clearfix cursor">
            重置
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {verifyRule} from '../js/const.js';
  import {registerInit, resetVerifyCode, pswReset, pswIntensity} from '../js/index.js';

  let init = registerInit();
  let constructObj = function() {
    let obj = {};

    for (let key in verifyRule) {
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
    return obj
  };
  export default {
    data() {
      return {
        height: 1266,
        mobile: '',
        psw: '',
        verifyImg: '',
        safetySrc: '',
        formObj : constructObj(),
        verifyCode: '',
        safetySrc: '',
        login_pass_error: '',
        isCountFinish: false,
        countTime: 60
      }
    },
    beforeCreate () {
      this.$store.commit('setPswResetPage', true);
    },
    methods: {
      RefreshSrc () {
        init.RefreshSrc(this);
      },
      getResetVerifyCode () {
        let that = this;
        let username = this.formObj.username;
        let mobile = this.formObj.mobile;
        let verifyImg = this.formObj.verifyImg;

        if (!username.reg.test(username.val)) {
          this.login_pass_error = username.error;
          return
        }
        if (!mobile.reg.test(mobile.val)) {
          this.login_pass_error = mobile.error;
          return
        }
        if (!verifyImg.reg.test(verifyImg.val)) {
          this.login_pass_error = verifyImg.error;
          return
        }

        let options = {
          name : username.val,
          phoneNum : mobile.val,
          yanzCode : verifyImg.val
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
        resetVerifyCode(this, options);
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
      resetAct () {
        let obj = this.formObj;

        for (let key in obj) {
          if (!obj[key].reg.test(obj[key].val)) {
            this.formObj[key].isFocus = true;
            this.formObj[key].isPass = false;
            this.login_pass_error = obj[key].error;
            return false;
          }
        }

        pswReset(this, obj);
      }
    },
    mounted () {
      init.RefreshSrc(this);
      this.height = document.documentElement.clientHeight - 204;
      //alert(document.documentElement.clientHeight - 204);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../css/stylus/index.styl";

  .pswResetpage
    position:relative
    background-image:-webkit-linear-gradient(top, #feaebb 0, #fff 10%, #ff96a2 70%, #fff 90%, #f8e8f2 100%)
    /*bgNormal(imgPathLogin + 'pswReset.png')*/
    height: 100%
    .reset_cont
      position:absolute
      top: 0
      left: 0
      right: 0
      bottom:0
      .login_main
        height:100%
        width:100%
        setMiddle()
        .login_main_right
          padding:20px
          width:400px
          font-size:14px
          bgColor()
          radius(5px)
          h1
            font-size: 20px
            margin-bottom: 10px
            color(#333)
          .main_input
            display:flex
            position:relative
            margin-bottom:10px
            border:1px solid #c7c6c6
            radius(4px)
            height:32px
            input
              width:100%
              height: 30px
              line-height:30px
              padding-left:5px
              radius(4px)
            span
              display:inline-block
              radiusLeft(4px)
              flex-basis: 30px
              height:30px
              line-height:30px
              color()
              bgColor(bg_color)
            em
              position:absolute
              right: 2px
              padding-left:1px
              line-height: 19px
              color()
              top:6px
              radius(50%)
            .right_icon
              bgColor(green)
            .wrong_icon
              bgRed()
            p
              position: absolute
              // width:100%
              text-align:left
              z-index:10
              bottom: 31px
              line-height: 16px
              left:0
              padding:2px 5px
              color()
              radius(2px)
              bgColor(tip_bg)
          .verify_img
            overflow:hidden
            .imgWrapper
              cursor()
              img
                margin-top:1px
                height:30px
                width:80px
                radiusRight(5px)
          .verify_code
            display:flex
            align-items:center
            input
              width: 280px
              height:100%
              border:none
            .get_code
              height:100%
              line-height:30px
              float:right
              radius(4px)
              overflow:hidden
              width:80px
              bgRed()
              color()
              cursor()
            .count_down
                position:absolute
                right: 0
                top: 0
                width: 81px
                bottom: 0
                font-size:16px
                line-height:30px
                bgRed()
                color()
                cursor()
                radiusRight(5px)
          .error
            display:block
            color:red
            line-height: 16px
            height:16px
            margin-bottom:10px
          .login_btn
            height: 40px
            line-height:40px
            gradientRed()
            color()
            radius(4px)
            font-size: 18px
            letter-spacing:4px
</style>
<style scoped>
  @media only screen and (min-width: 320px) and (max-width: 567px) {
	  .pswResetpage .reset_cont{
      position: relative;
      top:auto;
      left:auto;
      bottom:auto;
      right:auto;
    }
    .pswResetpage .reset_cont .login_main .login_main_right{
      padding: 10px;
      width: 90%;
      margin: 0px auto;
      margin-top: 20px;
    }
	}
</style>