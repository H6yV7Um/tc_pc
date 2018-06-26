<template>
	<div class="lineDetectionWarp loginWarp" :style="{ width:'100%'}" >
		<div class="navListWarp fl colorA" :style="{height:(height-40)+'px','min-height':'720px'}">
			<h2 class="ft40 navListWarpTitleh">域名测速</h2>
			<p class="navListWarpTitlep ft20">LINE SPEED</p>
			<ul class="navListWarpTitleul txtl ft14">
				<router-link to="/download"><li class="colorA " ><span class="fl mr10 "></span>app下载</li></router-link>
				<router-link to="/detection"><li class="colorA active" ><span class="fl mr10 "></span>域名测速</li></router-link>
			</ul>
		</div>
		<div class="detectionMain_cont fl relative   clearfix">
			<div class="clearfix detectionMain_contTop relative">
				<span class="ft26 colorA">访问状态说明</span>
				<!-- <em class="fl detectionMainEm ft20">| ||线路测试<b class="ft14"> (温馨提示 : 网页速度 飞机>火车>单车)</b></em>
				<div class="detectionMain_title_right fr clearfix">
					<label class="clearfix fl cursor"  @click="resterLoad">
						<i class="ctx ft14">&#xe61c;</i>
						<b>重新测速</b>
					</label>
				</div> -->
			</div>
			<div class="detectionMain_title_right clearfix">
				<label class="clearfix fl">
					<span class="spColor10"></span>
					<b>很好</b>
				</label>
				<label class="clearfix fl">
					<span class="spColor11"></span>
					<b>较好</b>
				</label>
				<label class="clearfix fl">
					<span class="spColor12"></span>
					<b>好</b>
				</label>
				<label class="clearfix fl">
					<span class="spColor13"></span>
					<b>一般</b>
				</label>
				<label class="clearfix fl">
					<span class="spColor14"></span>
					<b>较差</b>
				</label>
				<label class="clearfix fl">
					<span class="spColor15"></span>
					<b>很差</b>
				</label>
			</div>
			<div class="detectionMain_contDemo fl" v-for="(item, index) in detectionMain_cont" :style="{'margin': (index%3==1)?'30px 90px 0 90px':'30px 0 0 0'}">
				<div class="top clearfix txtl">
					<em class=" ft14 mr5 colorA ml5">{{item.msg}}<span v-show="index<3" style="color:#f00;">&nbsp;&nbsp;[ 推荐 ]</span></em>
					<div class="detectionMain_progress bgcoloref clearfix ">
						<div :class="'spColor1'+index" class="fl txtl ft14" :style="{width:item.wid+'%'}">{{item.time}}MS</div>
					</div>
						<a :href="item.src" class="detectionBtn ft12" >立即登陆</a>
				</div>

			</div>
		</div>
		<img v-for="item in speedSrc" :src="item+ '/yx/'+speedSrcRdm+'.html'" @error="srcErroe" style="display: none;" />
  </div>
</template>

<script>
	import rightBar from './pageRightBar.vue'
	import download from './pageDownload.vue'
	import bgtab from './pageBgTab.vue'
	//http://www.glzszy.com/static/testspeed.html?0.2452052050083876



	import {speedInit} from '../js/index.js'
	import base from '../js/pubilc.js';
	let init =  speedInit();
	export default {
	  name: 'warp',
	  data () {
	    return {
	      msg: 'this is index',
	      height: document.documentElement.clientHeight,
	      width: document.documentElement.clientWidth,
	      speedSrc: appConfig().speedSrc,
	      detectionMain_cont: [],
	      hrefs: ['sss','aaa','ssssdddd','wwwww','eeee','fffff'],
	      isLoginDown: this.$store.state.isLogin === 'true'?true:false,
	      titleMsg:'测试准备中....',
				isidex:null,
				initStarTime:new Date().getTime(),
				speedSrcRdm: base.random(false,10),
	    }
	  },
	  methods: {
			resterLoad(){
				let _this = this;
				this.detectionMain_cont = [];
				this.speedSrc = [];
				init.speedIdx = 0;
				this.speedSrcRdm = base.random(false,10);
				setTimeout(function(){
					_this.initStarTime = new Date().getTime();
					_this.speedSrc = appConfig().speedSrc;
				},500);
			},
	  	kefuEventout (e) {
	  		document.getElementById('login_rightBar_bom_li').style.color="#BBBBBB";
	  	},
	  	kefuEventover (e) {
	  		document.getElementById('login_rightBar_bom_li').style.color="#fff";
	  	},
	  	srcErroe () {
				init.init2(this,this.initStarTime);
	  	}
	  },
	  components: {
	    rightBar,
	    download,
	    bgtab
	  },
	  mounted () {
	  	let _this =this;
	  	window.addEventListener("resize",function(){
	  		_this.width= document.documentElement.clientWidth;
	  		_this.height= document.documentElement.clientHeight;
	  	})
	  	//init.load()
	  },
	  activated () {
	  	console.log("zujian ji huo")
	  }
	}
</script>
<style scoped lang="less">

</style>
<style lang="less" scoped>
.detectionMain_contTop{width: 100%;border-top: 2px solid #434a55;}
.detectionMain_contTop span{position: absolute;left: 40%;top:-20px;display: block;padding: 8px 20px;background: #050315;border-radius: 15px;}
.lineDetectionWarp .detectionMainEm{margin-left:0px;color: #2294f2;font-weight: bold;}
.lineDetectionWarp .detectionMainEm b{font-weight: 100;color: #333;}
.lineDetectionWarp .logoNav{margin: 20px 0;}
.lineDetectionWarp .detectionBtn{padding: 3px 10px;background: #fff;border-radius: 6px;color: #2b7278;margin-left: 5px;}
.lineDetectionWarp .detectionBtn:hover{color: #f00;}
.lineDetectionWarp .detectionMain_contDemoBom{position: absolute;bottom: 25px;left: 47%;}
.lineDetectionWarp .detectionMain_contDemoBom a{display: inline-block;padding: 5px 12px;background-image: -webkit-linear-gradient(180deg, #f06660, #f38682 100%);border-radius: 4px;}
.lineDetectionWarp .mainNav{width: 1200px;margin: 0 auto;border-radius: 8px;padding-bottom: 20px;}
.lineDetectionWarp .detection_MainIcon a{margin-left: 35px;margin-top:15px;float: left;;}
.lineDetectionWarp .login_main{left: -220px;margin-top: 0;}
.lineDetectionWarp .register_mainRight{background: #f5f6f7;padding: 30px 0 60px 0;}
.lineDetectionWarp .login_footer_text{margin-bottom: 5px;}
.lineDetectionWarp .login_footer_img{margin-bottom: 30px;}
.lineDetectionWarp{
	overflow: hidden;
}
	.lineDetectionWarp .register_main {
		padding-top: 35px;
	}
	.lineDetectionWarp .detectionMain{
		padding: 0px 35px 20px 35px;
		font-size: 20px;
	}
	.lineDetectionWarp .detectionMain .detectionMain_line{
		display: inline-block;
		width: 2px;
		height: 20px;
		margin: 2px 5px 0 0;
	}

	.lineDetectionWarp .detectionMain_title_right{font-size: 12px;margin-top: 30px;margin-left: 35%;}
	.lineDetectionWarp .detectionMain_title_right b{font-weight: 100;}
	.lineDetectionWarp .detectionMain_title_right em{font-weight: 100;}
	.lineDetectionWarp .detectionMain_title_right label{margin: 0 15px 0 0;color: #2294f2;}
	.lineDetectionWarp .detectionMain_title_right span{
		display: inline-block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-top: 7px;
	}
	.lineDetectionWarp .detectionMain_title_right em{margin-right: 25px;}
	.lineDetectionWarp .detectionMain_cont {
		top: 115px;
		left:50px;
		min-height: 318px;
		width: 1150px;
		padding: 20px ;
		border-radius: 16px;
		z-index: 10;

	}
	.lineDetectionWarp .detectionMain_contDemo{
		margin-top: 28px;
		width: 310px;
	}
	.lineDetectionWarp .detectionMain_contDemo .top{
		border-radius:8px;
	}
	.lineDetectionWarp .detectionMain_progress{
		width: 310px;
		height: 20px;
		border-radius: 20px;
		margin-bottom: 10px;
		margin-top: 5px;
	}
	.lineDetectionWarp .detectionMain_progress div{
		width: 60%;
		height: 20px;
		border-radius: 20px;
		padding-left: 15px;
	}

	.lineDetectionWarp div.detection_Main{
		width:1200px;
		margin: 0 auto;
		border-radius: 8px;
	}
  .detectionMain_progress .fl{
    color:#666
  }
/*	.Detectionfoote{
		border-radius: 25px;
		width: 100%;
		background:rgba(255, 255, 255, 0.14);
		box-shadow:inset 0px 0px 10px rgba(255, 255, 255, 0.3), 0px 0px 30px #000;
		margin-top: 110px;
	}*/



	.lineDetectionWarp div.logoImg{position: relative;top: 70px;}
</style>
