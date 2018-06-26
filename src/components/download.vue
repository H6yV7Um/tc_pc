<template>
	<div class="main downloadWarp" style="overflow:hidden;">
		<div class="" :style="{width:width}">
			<div class="">
				<div class="logoImg" v-show="false"> <!--!isLoginDown-->
					<div class="headerwarp bgcolorJ">
						<div class="headerMain contentMain clearfix">
							<ul class="fl clearfix headerMainLeft">
								<li class="fl ft12 headerMainLeftLi">
									<router-link to="/index" class="colorAa">
										<i class="ctx color9 ft14">&#xe67c;</i>
										首页
									</router-link>
								</li>
								<li class="fl ft12 colorla headerMainLeftLine">|</li>
								<li class="fl ft12 ">
									<router-link to="/detection" class="colorlb">
											<i class="ctx colorlb ft14">&#xe689;</i>
											线路切换
									</router-link>
								</li>
							</ul>
							<ol class="fr clearfix">
								<li class="fl ft12 ">
										<i class="ctx color9 ft14">&#xe619;</i>
										<a href="https://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=913191&configID=55502&jid=6889947871&s=1" target="_blank"><span class="ft12 color9 ">客服</span></a>
								</li>
							</ol>
						</div>
					</div>
					<div class="login_header_logo contentMain">
						<div class="login_header_logo clearfix" >
							<div class="logoImgLys">
								<router-link to="/index" class="mr15"><img src="../img/commit/logo.png" /></router-link>
							</div>
						</div>
					</div>
				</div>
        <!--图片相关-->
        <div class="download_bg">
          <div class="downloadMain txtcen clearfix">
            <div class="ball_left download_ab"></div>
            <div class="font_pic download_ab"></div>
            <div class="mobile_pic download_ab"></div>
            <div class="downloadMainPosERCODE clearfix">
              <div class="code_wrapper">
                <div class="android_part">
                  <img class="fl" src="../img/download/ercodeAndroid.png" />
                  <div class="text_part">
                    <i class="icon">&#xe61f;</i>
                    <span>安卓客户端扫码下载</span>
                  </div>
                </div>
                <div class="ios_part">
                  <img class="fl" src="../img/download/downloadIOS.png" />
                  <div class="text_part">
                    <i class="icon">&#xe601;</i>
                    <span>苹果客户端扫码下载</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
				<div class="downloadList contentMain mobile_advantage clearfix ft14">
					<ul class="fl">
						<li class="libold clearfix ft20"><span class="colorA ft12">1</span>使用方便！</li>
						<li>移动设备优化，让您快速购买乐透MAX票，在旅途中还能感受赌场的气氛，现在开始您的大奖之旅吧！</li>
					</ul>
						<ul class="fl">
							<li class="libold clearfix ft20"><span class="colorA ft12">2</span>快捷！</li>
							<li>不会错过任何一个抽奖了！享受移动娱乐场最佳的体验！利用手机让你随时随地在全省获得彩票，体育和娱乐场。</li>
						</ul>
							<ul class="fl">
								<li class="libold clearfix ft20"><span class="colorA ft12">3</span>更好的移动体验！</li>
								<li>现在，随着新的移动赌场，你可以在旅途中随时进行自己喜欢的游戏，并且数据和web端是同步的。</li>
							</ul>
				</div>
				<div class="downloadNotice contentMain warmheart_tip clearfix ft12 colorA">
					温馨提示：iPhone手机在安装App，运行时提示不能运行，请在iPhone【设置】-->【通用】-->【设备管理】找到信任证书，点击信任，到App图标，点击即可使用App！
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import pagefooter from './pagefooter.vue'
	import {downloadInit} from '../js/index.js'
	let init =  downloadInit();
	export default {
		name: 'warp',
		data() {
			return {
				msg: 'this is index',
				height: document.documentElement.clientHeight,
				width: document.documentElement.clientWidth,
				isLoginDown: this.$store.state.isLogin === 'true',
				ispc: localStorage.getItem("_browser"),
			}
		},
		methods: {},
		components: {
			pagefooter,
		},
		mounted() {
			let _this = this;
			 window.addEventListener("resize",function(){
					_this.height = document.documentElement.clientHeight
					_this.width = document.documentElement.clientWidth;
				},false)
		},
	    beforeCreate () {
		  	init.browser(function(){
				localStorage.setItem("_browser","ios")
			}, function(){
				localStorage.setItem("_browser","android")
			},function(){
				localStorage.setItem("_browser","web");
			});
		  }
	}
</script>

<style lang="less">
.downloadWarp{margin-top: 0;}



.downloadWarp .downloadMain .downloadMain_erCodeDiv img{width: 100%;}
.downloadWarp .downloadMainPosERCODE{

}
.downloadWarp .downloadMainPosGERCODE{position: absolute;bottom: 115px;left: 180px;}
.downloadWarp .downloadMain .downloadMainPosERCODE img,.downloadWarp .downloadMain .downloadMainPosGERCODE img{width: 92px;}
.downloadWarp .downloadMain{
  width: 100%;
  margin: 0 auto;
  height: 100%;
  max-width:1920px;
  background-position: center -100px;
}
.downloadWarp div.logoImgLys{margin: 30px 0;}
.downloadWarp .headerMain{
	height: 40px;
	line-height: 40px;
}
.downloadWarp .headerMainLeft li{
	padding: 0 10px
}
.downloadWarp .headerMainLeft .headerMainLeftLi{
	padding-left: 0;

}
.downloadWarp .headerMainLeft .headerMainLeftLine{
	padding:0;
}
.downloadWarp .downloadNotice{
	background: #999999;
	margin:25px auto 0px auto;
}
.downloadWarp .downloadList ul{
	width: 245px;
	text-align: left;
	color: #d8d8d8;
	margin-left: 120px;
}
.downloadWarp .downloadList li{
	line-height: 20px;
}
.downloadWarp .libold{
	color: #ff5868;
	margin-bottom: 10px;
}
.downloadWarp .libold span{
	display: inline-block;
	width: 15px;height: 15px;
	border-radius: 50%;
	text-align: center;
	line-height: 15px;
	background: #ff5868;
	margin-right: 10px;
	position: relative;
	top:-3px;
}

.downloadWarp div.main{margin-top: 0;padding: 0;}
.downloadWarp div.footerTop{background: rgba(0,0,0,0);}
	.downlaod_header_logo{
		width: 60%;
		margin: 50px auto 30px auto;
	}
	.downloadWarp .downlaod_header_logo img{
		width: 100%;
	}
	.downloadWarp .downlaod_header button{
		width: 60%;
		height: 40px;
		font-size: 14px;
		line-height: 40px;
		border: 0;
		outline: none;
		border-radius: 10px;
		margin-top: 30px;
	}
	.downloadWarp .linkLogin{
		margin-top: 25px;
	}
	.downloadWarp .linkLogin a{
		display: inline-block;
		width: 60%;
		height: 40px;
		line-height: 40px;
		border-radius: 10px;
		margin: 0 auto;
	}
	.downloadWarp .login_footer {
		position: fixed;
		left: 0;
		bottom: 30px;
		margin: 0 auto;
		width: 100%;
	}
	.downloadWarp .login_footer_text {
		font-size: 14px;
		margin-bottom: 15px;
	}

	.downloadWarp .login_footer_img img {
		width: 37px;
	}


	.downloadWarp .downloadMain img {
		width: 1980px;
	}

	.downloadWarp .downloadMain_erCode {
		width:280px;
		height: 33.5%;
		position: absolute;
		left: 495px;
		bottom: 15.9%;
	}

	.downloadWarp .downloadMain_erCodeDiv {
		width: 34.4%;
		padding: 0;
	}

	.downloadWarp .downloadMain_erCodeiOS {
		/*padding-left: 10px;*/
	}

	.downloadWarp .downloadMain_erCodeDiv p {
		font-size: 14px;
		margin: 0;
	}

	.downloadWarp .pagefooterTopMain{position: absolute;left: 50%;margin-left: -600px;bottom:90px;}

	@media only screen and (min-width: 300px) and (max-width: 1700px) {
		.downloadMain_erCodeDiv p {
			font-size: 12px;
		}
	}
</style>
<style lang="stylus">
  @import "../css/stylus/index.styl";

  .downloadWarp
    .download_bg
      height:413px
      background:url('../img/app/download.png') center top no-repeat
      background-size:100% 100%
    .downloadMain
      position:relative
      width:1200px
      margin: 0 auto
      .downloadMainPosERCODE
        position:absolute
        bottom:50px
        left:160px
        width:410px
        .code_wrapper
          display:flex
          align-items:center
          justify-content:center
          >div
            display:flex
            align-items:center
            justify-content:space-between
            width:200px
            .img
              width: 94px
              margin-right:10px
            .text_part
              display:flex
              align-items:center
              justify-content:center
              width: 120px
              color:#ff6a76
              font-size:14px
              margin-left:5px
              i
                width:15px
                font-size:20px
                margin-right:5px
              span
                width: 85px
                text-align:left
          .android_part
            margin-right:40px
      .download_ab
        position:absolute
        background-repeat:no-repeat
        background-position:center center
      .ball_left
        width: 201px
        height:198px
        background:url(../img/download/ball_left.png)
        bottom:-50px
        left:-80px
      .font_pic
        top:70px
        left:140px
        width: 545px
        height:167px
        background:url(../img/download/font_pic.png)
      .mobile_pic
        width: 562px
        height:532px
        top:10px
        right:-10px
        background:url(../img/download/mobile_pic.png)
    .mobile_advantage
      padding-top:70px
      padding-bottom:60px
      bgColor()
      margin-bottom:0
      ul
        li
          &:first-child
            color(text_color)
            text-align:center
            font-size:22px
            margin-bottom:16px
          &:last-child
            color(#666)
    .warmheart_tip
      bgRed()
      margin:0 auto
      height: 25px
      line-height:25px
</style>
