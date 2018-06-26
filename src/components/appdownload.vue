<template>
	<div class=" appdwonload relative bgcolorA txtcen clearfix" :style="{height:height+'px'}">
		<div class="logoImg mt15">
			<img src="../img/commit/logo_w.png" />
		</div>
		<div class="downloadMainPosERCODE mt10 clearfix">
			<p class="ft12">2018安卓APP</p>
			<p><img src="../img/download/ercodeAndroid.png" /></p>
			<p class="ft12">2018iOSAPP</p>
			<p><img src="../img/download/downloadIOS.png" /></p>
		</div>
		<!-- <div class="downloadMainPosERCODE">
			<p class="ft12">彩天下挂机APP</p>
			<p><img src="../img/download/gercode.jpg" /></p>
		</div> -->
	</div>
</template>
<script>
  export default {
    data() {
      return {
        height: document.documentElement.clientHeight,
      }
    }
  }
</script>

<style lang="less">
	.appdwonload .downloadMainPosERCODE img{width: 120px}
</style>
