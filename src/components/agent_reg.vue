<template>
  <div class="warp login" :style="{width:(width-20)+'px',height:height+'px'}">
    <p class="login_logo ">
      <img src="../img/common/logo.png" alt="">
    </p>
    <div class="clear"></div>
    <div class="login_userMain ">
      <div class="login_header clearfix">
        <span class="fl active">
          <i class="tc">&#xe6d8;</i>
          会员注册
        </span>
      </div>


      <table class="register" >

        <tbody>
          <tr>
            <td class="left">会员账号 :</td>
            <td class="right">
              <input type="text" name="" v-model="reg.cn" value="" placeholder="请填写数字字母组合账号">
              <!-- <i class="tc">&#xe6d7;</i> -->
            </td>
          </tr>
          <tr>
            <td class="left">登录密码 :</td>
            <td class="right">
              <input type="password" name="" value="" v-model="reg.pwd" placeholder="长度6-16位">
              <!-- <i class="tc">&#xe6d7;</i> -->
            </td>
          </tr>
          <tr>
            <td class="left">重复密码 :</td>
            <td class="right">
              <input type="password" name="" value="" v-model="reg.pwdto" placeholder="请重复输入密码">
              <!-- <i class="tc">&#xe6d7;</i> -->
            </td>
          </tr>
          <!-- <tr>
            <td class="left">邮箱地址 :</td>
            <td class="right">
              <input type="text" name="" value="" v-model="reg.email" placeholder="如：xxx@163.com">
            </td>
          </tr>
          <tr>
            <td class="left">手机号码 :</td>
            <td class="right">
              <input type="text" name="" value="" v-model="reg.mobile" placeholder="请如实填写方便与您联系">
            </td>
          </tr>
          <tr>
            <td class="left">联系QQ&nbsp; :</td>
            <td class="right">
              <input type="text" name="" value="" v-model="reg.qq" placeholder="请如实填写方便与您联系">
            </td>
          </tr> -->
          <tr class="cofcode">
            <td class="left">验证码&nbsp;&nbsp;&nbsp; :</td>
            <td class="right">
              <input type="text" name="" value="" v-model="reg.refreshcode" placeholder="请填写验证码">
              <img title="点击刷新" :src="imgSrc" alt="" @click="resetRefreshSrc">
            </td>
          </tr>
          <tr class="btn">
            <td class="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td class="right">
              <input type="button" @click="userregister" name="" class="btn" value="立即注册" placeholder="立即注册">

            </td>
          </tr>
          <tr class="error">
            <td class="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td class="right error">
              {{error}}
            </td>
          </tr>
        </tbody>
      </table>


    </div>
  </div>
</template>
<script type="text/javascript">
  import {loginInit,  RefreshSrc} from '../js/index.js'
  let matchVal = loginInit().matchVal;
  let Login = loginInit();
	export default {
	  name: 'login',
	  data () {
	    return {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
        error:'',
        reg:{},
        imgSrc: RefreshSrc(),
        successurl: appConfig().speedSrc,
	    };
	  },
    created () {},
	  methods: {
      successurlfn(){
        let n = 0;
        let m = this.successurl.length-1;
      	let c = m - n + 1;
      	return this.successurl[Math.floor(Math.random() * c + n)] + '/login';
      },
      resetRefreshSrc() {
        this.imgSrc = RefreshSrc();
      },
      userregister() {
        let sendata = null;
        this.error = "";
        if(!matchVal('regusername', this.reg.cn)) {
          this.error = "请填写数字字母组合账号";
          return ;
        }
        if(!matchVal('pwd', this.reg.pwd)) {
          this.error = "请填写长度6-16位密码";
          return ;
        }
        if(this.reg.pwd !== this.reg.pwdto){
          this.error = "重复密码输入错误请校验...";
          return ;
        }

        if(!this.reg.refreshcode) {
          this.error = "请输入验证码.";
          return false;
        }



        // if(!matchVal('email', this.reg.email)) {
        //   this.error = "请填写正确的邮箱格式, 如：xxx@163.com";
        //   return ;
        // }
        // if(!matchVal('mobile', this.reg.mobile)) {
        //   this.error = "请如实填写手机号方便与您联系";
        //   return ;
        // }
        // if(!this.reg.qq) {
        //   this.error = "请如实填写qq方便与您联系";
        //   return ;
        // }

        sendata = {
          name: this.reg.cn,
          pwd: this.reg.pwd,
          yanzCode: this.reg.refreshcode,
          needLogin: 1,
          type: 0,
          parentId: this.reg.parentId
        }
        // sendata = {
        //   name: 'testke101',
        //   pwd:'qwert12345',
        //   yanzCode:32154,
        //   needLogin:1,
        //   type:0,
        //   parentId:7,
        // }
        this.reg.phone && (sendata['phone'] = this.reg.mobile);
        this.reg.email && (sendata['email'] = this.reg.email);
        this.reg.qq && (sendata['qq'] = this.reg.qq);
        Login.register({
          _this: this,
          data: sendata,
          success(result) {
            this._this.error = result.message;
            this._this.resetRefreshSrc();
            let t = this._this;
            if(result.error.toString() === '0') {
              this._this.error = result.message + '2s后自动跳转至登录...';
              setTimeout(function(){
                location.href = t.successurlfn();
              }, 2000);
              return ;
            }

          },
          fail(err){
            console.log(err);
          }
        })
      }
    },
	  components: {

    },
    mounted () {
      this.reg['parentId'] = location.href.split('/rg?')[1];
      console.log()
    },
	  beforeCreate() {

	  }
	}
</script>
<style lang="less">
  @import "./../css/base.less";
  @import "./../css/color.less";
  @import "./../css/login.less";
</style>
