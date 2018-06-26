<template>
<div>	
	<ul class="main_leftBar BgRgbB2 fl">
		<li>
			<a href="/static/lt.html#11" target="_blank"><div id="gopng_leftBar_cp_outer" class="gopng_leftBar_cp"></div></a>
		</li>
		<li>
			<a @click="openFunds" >
				<div id="gopng_leftBar_zr_outer" class="gopng_leftBar_zr"></div>
				</a>
		</li>
		<li>
			<a href="/yx/hbs/manager-account.html#page=0_finance" target="_blank">
				<div id="gopng_leftBar_jr_outer" class="gopng_leftBar_jr"></div>
				</a>
		</li>
		<li>
			<a @click="openFunds" >
				<div id="gopng_leftBar_lhj_outer" class="gopng_leftBar_lhj"></div>
				</a>
		</li>
		<li>
			<a @click="openFunds" >
				<div id="gopng_leftBar_ty_outer" class="gopng_leftBar_ty"></div>
				</a>
		</li>
		<li>
			<a @click="openFunds" >
				<div id="gopng_leftBar_qp_outer" class="gopng_leftBar_qp"></div>
				</a>
		</li>
		<li>
			<router-link to="/activity">
				<div id="gopng_leftBar_hd_outer" class="gopng_leftBar_hd"></div>
				</router-link>
		</li>
	</ul>
	<div v-show="iscloseFunds" class="jBox-wrapper jBox-Modal jBox-Default common-modal grey jBox-hasTitle jBox-closeButton-title BgRgbB4" style="position: fixed;  opacity: 1; z-index: 9999;left: 0;top: 0;" :style="{width:width, height:height+'px'}">
		<div class="jBox-container"  style="position: fixed;  opacity: 1; z-index: 10000; left: 50%; top: 50%; margin-left: -150px; margin-top: -50px;">
			<div class="jBox-title jBox-draggable">
				<div><i class="icon lock"></i>提示：<span class="title-sm"></span></div>
				<div class="jBox-closeButton jBox-noDrag" @click="closeFunds">
					<svg viewBox="0 0 24 24">
						<path d="M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"></path>
					</svg>
				</div>
			</div>
			<div class="jBox-content" style="padding: 20px 0; text-align: center; width: 300px;">
				敬请期待
			</div>
		</div>
	</div>
			
			
</div>
	
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
		height: document.documentElement.clientHeight,
		width: '100%',
		iscloseFunds: false,
    }
  },
  components: {},
   methods: {
   	closeFunds () {
   		this.iscloseFunds = false;
   	},
   	openFunds () {
   		this.iscloseFunds = true;
   	}
  },
  mounted () { 
  	let _this = this;
	 window.addEventListener("resize",function(){
  		_this.height = document.documentElement.clientHeight
  	},false)
  },
  Update () {
  	//console.log(console.log(this.$store.state.isLogin), 'undata')
  }
}	
	
	
</script>

<style>
	.main_leftBar{position: absolute;left: 4%;top: 20%;z-index: 999;padding:0px 0px 18px 5px;border-radius: 71px;}
	.main_leftBar li{width: 90%;margin-top: 30%;}
	@media only screen and (min-width: 1000px) and (max-width: 1590px) {
		.main_leftBar{left: 1%;}
	}
</style>