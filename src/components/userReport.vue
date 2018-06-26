<template>
	<div class="activity userCentWarp">
		<div class="userMain">
			<div class="contentMain nav ">
				<pageUserNav></pageUserNav>
				<div class="userRpt userMainWarp bgcolorA manager">



				</div>
			</div>
		</div>
</div>
</template>

<script>

	import pagefooter from './pagefooter.vue'
	import pageUserNav from './pageUserNav.vue'
	import pagrUserHeader from './pagrUserHeader.vue'
	function initactive(_this,str) {
		_this.activeType = str;
	}

	export default {
	  name: 'warp',
	  data () {
	    return {
	      height: document.documentElement.clientHeight,
	      width: document.documentElement.clientWidth,
	      initColor: localStorage.getItem('_bgIndex')!=='undefined'?localStorage.getItem('_bgIndex'):1,
				activeType: 0,
      }
	  },
	  components: {
	    pagefooter,
			pageUserNav,
			pagrUserHeader
	  },
	  updated () {

		},
		watch: {
      '$route'(to, form) {
				let pageUrl = to.hash.split('page=')[1][0];
				if (pageUrl>3) pageUrl -= 1;
				initactive(this, pageUrl);
			}
		},
	  methods: {

		},
	  mounted () {
			let pageUrl = window.location.href.split("page=")[1][0];
			if (pageUrl>3) pageUrl -= 1;
			this.activeType = pageUrl;
      $('.daterangepicker').remove();
      $.get('/static/uc/report.html',function(fhtml) {
        $('.userRpt').html(fhtml);
        AppData.init();
        initReport();
      })
	  },
		beforeMount() {
			this.$store.commit('setAppImg', 'bg1.jpg')
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
