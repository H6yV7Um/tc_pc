<template>
	<div class="activity userCentWarp">
		<div class="userMain">
			<div class="contentMain nav ">
				<pageUserNav></pageUserNav>
				<div class="userProxy userMainWarp bgcolorA manager">

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
				initactive(this,to.hash.split('page=')[1][0]);
			}
		},
	  methods: {

		},
	  mounted () {
			this.activeType = window.location.href.split("page=")[1][0];
	    $('.daterangepicker').remove();
      $.get('/static/uc/proxy.html',function(fhtml) {
        $('.userProxy').html(fhtml);
        AppData.init();
        initProxy();
      })
    },
		beforeMount() {
			this.$store.commit('setAppImg', 'bg1.jpg')
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
