<template>
  <div id="app" :style="nomarlstyl"> <!--, background:'url(' + imgPath + ')'-->
    <div id="app_wrap" :style="{'min-height':height+'px'}" class="padBottom">
      <div id="login_header" class="display_none" v-show="isPc">
        <headers v-show="true" v-on:loginOutMsg="loginOutfns" ref="pagehead"></headers> <!--isLogin-->
      </div>
      <!--<transition name="fade" mode="out-in">-->
      <router-view v-on:speedMsg="showSpeedfns" ref="main"></router-view> <!--transition="some"-->
      <!--</transition>-->
      <!--isLogin-->
      <div class="display_none clearfix" id="login_rightBar" v-show="!isPswResetPage">
        <bgtab v-on:speedMsg="showSpeedfns"></bgtab>
      </div>
      <!--<stationNotices></stationNotices>-->
    </div>
    <div class="pagefooterWarps display_none" v-show="isPc" :style="{background:footColor}">
      <pagefooter></pagefooter>
    </div>
    <div id="goTopBtn"><a class="hand" @click="gotop"><em class="icon">&#xe632;</em></a></div>
    <UtilPrompt v-show="isShow" v-on:hide="isShow = false">
      <Register v-on:hide="isShow = false"></Register>
    </UtilPrompt>
    <chatRoom></chatRoom>
  </div>
</template>

<script>
	import headers from './components/pageHeader.vue';
	import leftbar from './components/pageLeftBar.vue';
	import bgtab from './components/pageBgTab.vue';
	import download from './components/pageDownload.vue';
	import pagefooter from './components/pagefooter.vue';
	import rightBar from './components/pageRightBar.vue';
	// import stationNotices from './components/stationNotice.vue';
	import pageLineDetection from './components/pageLineDetection.vue';
	import UtilPrompt from "./components/utilPrompt";
	import Register from './components/register';
	import base from './js/pubilc.js';
	import {IsPC} from './js/common.js';
	//引入消息推送文件
	import chatRoom from './components/chatRoom_pc.vue';


	const ITEM = base.storage();
	let STATUS = base.LoginStatus();

	function autoLogin(_this, chkUrl) {
		if ((window.location.href.indexOf('/register') !== -1 || window.location.href.indexOf('/activity') === -1) && window.location.href.indexOf('/rg/') === -1 && window.location.href.indexOf('/qiandao') === -1 && window.location.href.indexOf('/register_mobile') === -1 && window.location.href.indexOf('/passwordReset') === -1 && window.location.href.indexOf('/sales') === -1) {
			//alert('autoLoginautoLogin');
			let url = window.location.href.split('referrer=')[1];
			let type = window.location.href.split('smobile=')[1];
			let pwd = window.location.href.split('pwd=')[1];
			//console.log('sddsdds');
			//alert('223');
			if (pwd) {
				let name = window.location.href.split('name=')[1].split('&pwd')[0];
				var url = '/sso/login?cn=' + name + '&password=' + pwd + '&type=0';
				if (!IsPC()) {
					if (typeof chkUrl != 'undefined') {
						location.href = '/welcome/sign.html?' + chkUrl;
					} else {
						location.href = '/welcome/sign.html?name=' + name + '&pwd=' + pwd;
					}

					return false;
				}
				base.httpPost(_this, url, function (result) {
					if (result.code !== 0) {
						return false;
					}
					ITEM.set('_pass', pwd);
					ITEM.set('_appid', result.user.sourceAppId);
					ITEM.set('_name', name);
					STATUS.set(_this, 'loginStatus', 'true');
					ITEM.set('_isIndex', 'true');
					location.href = '/yx/home';
					return false;
				});
				return false;
			}
			if (!IsPC() && !type) {
				if (url) {
					location.href = '/yx/login/sign.html' + '?referrer=' + url;
				} else {
					location.href = '/yx/login/sign.html';
				}
				return false;
			}
			if (IsPC() && window.location.href.indexOf('/register') !== -1) {
				localStorage.setItem("_isRegisterGo", true);
				location.href = '/login'
			}

			base.referrer(window.location.href);
			return true;
		}


	}

	export default {
		name: 'app',
		data() {
			return {
				height: document.documentElement.clientHeight,
				isDay: false, isShow: false,
				width: '100%',
				nomarlstyl: {},
				isLogin: this.$store.state.isLogin === 'true',
				footColor: "",
				isshowpageLineDetection: false,
				isNoticePage: false,
				isPc: true
			};
		},
		components: {
			headers,
			leftbar,
			bgtab,
			download,
			// stationNotices,
			rightBar,
			pagefooter,
			pageLineDetection, Register, UtilPrompt,
			chatRoom,
		},
		computed: {
			// 判断是否在密码设置页面
			isPswResetPage() {
				return this.$store.state.isPswResetPage;
			},
			imgPath() {
				return this.$store.state.imgPath;
			}
		},
		methods: {

			loginOutfns(data) {
				if (data.islogin) {
					this.isLogin = false;
					this.$router.push(data.target);
				}
			},
			showSpeedfns(data) {
				this.isshowpageLineDetection = data;
			},
			showReg: function () {
				this.isShow = true;
				//if (typeof this.$refs.main.show_reg !='undefined') {
				//  this.$refs.main.show_reg();
				//}
			},
			showAcitve: function () {
				if (typeof this.$refs.pagehead.newact != 'undefined') {
					this.$refs.pagehead.newact();
					//alert('1');
				}
			},
			handleScroll: function () {
				var sc = $(window).scrollTop();
				var rwidth = $(window).width();
				if (sc > 0) {
					$("#goTopBtn").css("display", "block");
					$("#goTopBtn").css("left", (rwidth - 36) + "px")
				} else {
					$("#goTopBtn").css("display", "none");
				}
			},
			gotop: function () {
				var sc = $(window).scrollTop();
				$('body,html').animate({scrollTop: 0}, 500);
			}
		},
		mounted() {
			let _this = this;
			window.addEventListener("resize", function () {
				_this.height = document.documentElement.clientHeight;
			}, false);
//      init(this,{href: window.location.href});
		},
		created() {
			if (!IsPC()) {
				this.isPc = false
				var nowh = parseInt(window.screen.availHeight, 10) - 10;
				//console.log(nowh,'nowhnowh');
				this.nomarlstyl = {width: this.width, 'height': nowh + 'px'}
			} else {
				this.nomarlstyl = {width: this.width}
			}
			window.addEventListener('scroll', this.handleScroll);
		},
		watch: {
			'$route'(to, form) {
				if (to.path === '/') {
					location.href = "index";
					return false;
				}
				if (to.name && to.name.indexOf('passwordReset') < 0) {
					this.$store.commit('setPswResetPage', false);
				}
			}
		},
		beforeCreate() {
			let winUrl = window.location.href;
			let chkUrl = String(winUrl).split('/')
			let chkUrls = String(winUrl).split('/?')[1];
			window.location.href.indexOf('/login') === -1 && localStorage.setItem("_isRegisterGo", '');
			this.isDay = localStorage.isDay === true;
			if (autoLogin(this, chkUrls)) {

				if (typeof chkUrl[1] != 'undefined' && Number.isInteger(parseInt(chkUrl[1], 10)) && chkUrl.length == 2) {
					return
				}
				if (window.location.href.indexOf('/game-notice/0') !== -1) {
					return
				}
				if (window.location.href.indexOf('/new') !== -1) {
					return
				}
				if (window.location.href.indexOf('/sales') !== -1) {
					return
				}
				if (window.location.href.indexOf('/old') !== -1) {
					return
				}
				if (window.location.href.indexOf('/rg') !== -1) {
					return
				}
				if (window.location.href.indexOf('/qiandao') !== -1) {
					return
				}


			}
			// if (window.location.href.indexOf('/register') !== -1 || window.location.href.indexOf('/activity') !== -1) {
			//   let url = window.location.href.split('referrer=')[1];
			//   if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			//     if(!url.indexOf('type=web') !== -1){
			//       location.href = '/yx/login/sign.html' + '?referrer=' + url;
			//     }
			//
			//   }
			//   if (/(Android)/i.test(navigator.userAgent)) {
			//     if(!url.indexOf('type=web') === -1){location.href = '/yx/login/sign.html' + '?referrer=' + url;}
			//
			//   }
			// }
		}
	};
</script>

<style lang="less">
  @import "./css/commit/base.less";
  @import "./css/commit/swiper.css";
  @import "./css/commit/jbox.css";

  #app_wrap {
    background: url(./img/app/app_bg.png) center center no-repeat;
    background-size: 100% 100%;
    padding-bottom: 100px
  }

  .pagefooterWarps {
    background: #f5f6f7;
    margin-top: -100px
  }

  @media only screen and (min-width: 315px) and (max-width: 420px) {
    .display_none {
      display: none;
    }

    #app_wrap.padBottom {
      padding-bottom: 0;
      background-size: auto;
    }
  }

  html {
    min-height: 100%
  }
</style>
