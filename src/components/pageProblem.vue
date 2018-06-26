<template>
<div class="helpWarp clearfix" style="margin-top: 0;height:1070px;">
	<div class="navListWarp fl colorA" :style="{height:(height-40)+'px','min-height':'720px'}">
		<h2 class="ft40 navListWarpTitleh">活动</h2>
		<p class="navListWarpTitlep ft20">EVENT NEWS</p>
		<ul class="navListWarpTitleul txtl ft14">
			<router-link to="#2"><li class="colorA " ><span class="fl mr10 "></span>编辑个人资料</li></router-link>
			<router-link to="#0"><li class="colorA " ><span class="fl mr10 "></span>更改会员密码</li></router-link>
				<router-link to="#5"><li class="colorA " ><span class="fl mr10 "></span>设置资金密码</li></router-link>
				<router-link to="#10"><li class="colorA " ><span class="fl mr10 "></span>交易记录</li></router-link>
					<router-link to="#7"><li class="colorA " ><span class="fl mr10 "></span>充值</li></router-link>
					<router-link to="#9"><li class="colorA " ><span class="fl mr10 "></span>取款</li></router-link>
						<router-link to="#16"><li class="colorA " ><span class="fl mr10 "></span>追号</li></router-link>
						<router-link to="#14"><li class="colorA " ><span class="fl mr10 "></span>兑奖</li></router-link>
							<router-link to="#11"><li class="colorA " ><span class="fl mr10 "></span>购彩</li></router-link>
		</ul>
	</div>
	<div class="helpCenMain clearfix fl" v-cloak>
			<div class="activityMmain_cont_demo contentMain clearfix  ">


				<ul class="helpMain colorJ  fl" >
					<li class="clearfix helpMain_btn colorA" v-for="(item,index) in listhelp">
						<span class="spblock bgcolorY colorA">Q</span>
						<span >{{item.title}}</span>
						<i class="fr" style="margin-right: 10px;"><img src="../img/index/help.png"/></i>
						<div class="helpMain_txt clearfix bdcolorAa colorYYS">
							<span class="spblock fl bgcolorc mt3 colorA mr5">A</span>
							<p class="fl" style="width:90%;" v-html="item.message"></p>
						</div>
					</li>

				</ul>
			</div>
	</div>
<!--
   <router-link to="/">Go to index</router-link>
   <router-link to="/login">Go to index</router-link>
   <router-link to="/register">Go to index</router-link>-->
  </div>
</template>

<script>
  import {listhelp} from '../js/const.js';
  import {activityInit} from '../js/index.js';

	let init =  activityInit();
	export default {
	  name: 'warp',
	  data () {
	    return {
        listhelp: listhelp,
        isScroll:'hidden',
        domList:null,
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
	    }
	  },
	  components: {
	  },
	  watch: {
			'$route' (to,form) {
 	  		let indexIt = to.hash.split('#')[1];
				this.domList.clearBtnBoxs(this.domList.btnBoxs, this.domList.btns)
				this.domList.btnBoxs[indexIt].style.display = 'block';
				this.domList.btns[indexIt].zdblock = true;
			}
	  },
	  updated () {},
	   mounted () {
			 let indexIt = location.hash.split('#')[1];
	  		this.domList = init.activityDetails('helpMain_btn','helpMain_txt','DIV',indexIt,true);
				let _this =this;
		  	window.addEventListener("resize",function(){
		  		_this.width= document.documentElement.clientWidth;
		  		_this.height= document.documentElement.clientHeight;
		  	})
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.colorYYS{color: #ffe597;}
	.helpWarp .bdcc{border-color: #e2e2e2;}
	.helpCenMainNav .colorY{color: #fff;}
	.helpWarp .bdbom{border-bottom: 0;border-color: #e2e2e2;}
	.helpCenMainNav ul li{padding: 3px 0;font-size: 14px;cursor: pointer;}
	.helpCenMainNav ul li a{color: #ffe597;}
	.helpCenMainNav ul li a:hover{color:#2294f2;}
	.helpCenMainNav{width: 196px;background: rgba(0,0,0,0);box-shadow: 0 0px 10px #dad7d7;padding: 10px 0;}

	.activityMmain_cont_demo{padding: 0; }
	.helpMain{text-align: left;font-size: 14px;padding: 0px 15px;width: 1000px;background: rgba(255,255,255,.1)}
	.helpMain li{
		padding: 10px 0;
		border-radius: 4px;
		border-bottom: 1px solid #e2e2e2;
		cursor: pointer;
	}
	.spblock{display: inline-block;font-size: 12px;width: 16px;height: 16px;text-align: center;line-height: 16px;;margin-left: 10px;}
	.helpMain_txt{padding:5px 10px 0px  0px;margin-top: 5px;width: 100%;font-size: 12px;display: none;cursor: text;}

</style>
