


<template>
	<div class="login_rightBar_bom  fr colorC shaowRgihtbar BgRgbF2 bdcolorJ" id="login_rightBar_bom">
		<ul>
			<li @mouseover="download" @mouseout="download" class="clearfix">
				<router-link :class="isDownLoad?' colorA':' colorC'" to="/download"><i :class="isDownLoad?'cbl login_download colorA':'cbl login_download colorC'">&#58917;</i>
				<p :class="initColor==3?'login_rightBar_bomcolor3 colorA login_rightBar_bom_pColor':'login_rightBar_bom_pColor'">手机端下载</p></router-link>
			</li>
			<li class="mt10 clearfix" id="testspeed" @mouseover="downloads" @mouseout="downloads">
				<router-link :class="isDownLoads?' colorA':' colorC'" to="/detection"><i :class="isDownLoads?'cbl login_download colorA':'cbl login_download colorC'">&#58916;</i>
				<p :class="initColor==3?'login_rightBar_bomcolor3 colorA login_rightBar_bom_pColor':'login_rightBar_bom_pColor'">线路检测</p></router-link>
			</li>
			<li class="mt10 clearfix" @mouseover="downloadss" @mouseout="downloadss">
				<a :class="isDownLoadss?' colorA':' colorC'" target="_blank" href="https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=832162&configID=69612&jid=7792232430&s=1">
					<i :class="isDownLoadss?'cbl login_download colorA':'cbl login_download colorC'">&#58914;</i>
					<p :class="initColor==3?'login_rightBar_bomcolor3 colorA login_rightBar_bom_pColor':'login_rightBar_bom_pColor'">在线客服</p>
				</a>
			</li>
		</ul>
		<transition name="fade">
			<div v-show="isDownLoad" transiton="fade" class="login_rightBar_bom_erCode">
				<img src="/dist/qrcode.png"/>
				<p class="colorA">
					扫描二维码<br/>
					下载手机端
				</p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
  name: 'warp',
  data () {
    return {
    	isDownLoad: false,
    	isDownLoads: false,
    	isDownLoadss: false,
    	initColor: localStorage.getItem('_bgIndex')!=='undefined'?localStorage.getItem('_bgIndex'):1,
    }
  },
  methods: {
    download () {
      this.isDownLoad = this.isDownLoad ? 0 : 1
    },
    downloads () {
      this.isDownLoads = this.isDownLoads ? 0 : 1
    },
    downloadss () {
      this.isDownLoadss = this.isDownLoadss ? 0 : 1
    },
  }
}
</script>

<style scoped lang="less">


.login_rightBar_bom {
		margin-top: 48px;
		width: 90px;
		height: 320px;
		font-size: 14px;
	}

	.login_rightBar_bom img {
		width: 28px;
		margin: 20px 25px 10px 25px;
	}

	.login_rightBar_bom li p {
		float: left;
		text-align: center;
		width: 100%;
		text-align: center;
	}

	.login_rightBar_bom li {
		padding-top: 35px;
		padding-bottom: 15px;
	}
	.login_rightBar_bom_erCode {
		width: 160px;
		height: 183px;
		background: url(/static/appbg/QRcode_border.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 213px;
		right: 100px;
	}

	.login_rightBar_bom_erCode img {
		width: 123px;
		margin: 15px 15px 5px 0;
	}

	.login_rightBar_bom_erCode p {
		font-size: 14px;
		line-height: 15px;
	}
</style>
