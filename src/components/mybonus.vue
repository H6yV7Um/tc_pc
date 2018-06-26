<template>
	<div class="main mybonus">
	  <div class="inner">
      <h3>我的兑换</h3>
    </div>  
	</div>
</template>
<script>
	import leftbar from './pageLeftBar.vue';
  import bgtab from './pageBgTab.vue';
  import download from './pageDownload.vue';
  import {activityInit, Prompt} from '../js/index.js';
  import _base from '../js/pubilc.js';
  import {IsPC} from '../js/common.js';

  const APPCONFIG = _base.config();
  const _storage = _base.storage();
  let init = activityInit();
  let oPrompt = Prompt();

	export default {
		name: 'mybonus',
		data() {
			return {
			  golink:'',gotarget:'_blank',nowbonus:0,nowdict:{}
			}
		},
		methods: {
      getbonus:function() {
        let that = this;

        this.$http.get('/vip/vip/getUserVipInfo'
        ).then((response) => {
          let bdata = response.data && response.data.data;
          console.log(bdata);
          if (bdata.score != null) {
            that.nowbonus = bdata.score;  
          }
          
        })
      }  
    },
		components: {
			bgtab,leftbar,download
		},
		mounted() {
		  //this.getbonus();  
		},
	  beforeCreate () {
      
		}
	}
</script>

<style scoped>
	.mybonus{
    padding-bottom:0px;
  }
  .mybonus .inner{
    height:666px;
    padding-bottom:0px;
    background-position: top center;
    position: relative;
  }
	@media only screen and (min-width: 300px) and (max-width: 1700px) {
		
	}
</style>
