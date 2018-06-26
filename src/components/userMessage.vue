<template>
	<div class="activity userCentWarp">
		<div class="userMain">
			<div class="contentMain nav ">
				<pageUserNav></pageUserNav>
				<div class="userMessage userMainWarp bgcolorA manager">



				</div>
			</div>
		</div>
</div>
</template>

<script>

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
      $.get('/static/uc/message.html',function(fhtml) {
        $('.userMessage').html(fhtml);
        AppData.init();
        initMessage();
      })
	  },
		beforeMount() {
			this.$store.commit('setAppImg', 'bg1.jpg')
		},

	}
</script>
<style media="screen">
.manager .content .form-float table.form-control-float > tbody > tr.textarea > td.value textarea{
	line-height: 20px;
	padding: 10px 11px;
}
.manager .content .params > .row .button-groups > a,.manager .content .form-float table.form-control-float > tbody > tr > td .button-groups > .button{
	color: #fff;
}
.manager .content .form-float table.form-control-float > tbody > tr > td .button-groups{text-align: left;}
.manager .modal-float .form table.form-control-float > tbody > tr > td textarea.message{padding-top: 15px;}
.manager table.form-control-float > tbody > tr > td .button{color: #fff;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.contentMainRgihtWarp{width: 1070px;}

</style>
