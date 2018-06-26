<template>
	<div class="main" style="margin-top: 0;background: url(../src/img/index/active_bg.jpg);">
		<div>
			<div class="activitywapper"></div>
			<div class="activityMmain">
				<div class="activityMmainImg2">
					<router-link to="/index"><img src="../img/commit/logo_w.png"/></router-link>
				</div>
        <br />
        <ul class="activityItems">
          <li class="acLi bgcolorA">
            <div class="acTag acGo"></div>
            <div class="acTitle">
              <h2>{{info.title}}</h2>
              <h5>活动时间：{{info.start}} ~ {{info.end}}</h5>
            </div>
            <div class="acBanner">
              <img :src="coverImgSrc" alt="" width="1084" height="216" />
            </div>
            <div class="acContent" v-html="detailDesc">

            </div>
          </li>
        </ul>
        <div><router-link :to="backlnk" class="backsale">返回</router-link></div>
			</div>
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
    import paginate from 'vuejs-paginate'

    const APPCONFIG = _base.config();
    const _storage = _base.storage();
    let init = activityInit();
    let oPrompt = Prompt();
    export default {
        name: 'warp',
        data() {
            return {
                isMobile: false,
                index: -1,
                info:{},
                backlnk:'/newsales/1',
                coverImgSrc:'',
                onlineActivity:[],
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth,
                bgsrc: 'url(/dist/PromptBoxBg.png)  no-repeat',
                lottery: [{showName: '登录'}],
                promptList: [],
                allShow: [1, 2, 3],
                detailDesc:'',
                toggleArray:{
                  0:false,1:false,2:false,3:false
                },
                isonlyshow: 0,
            }
        },
        components: {
            bgtab,
            leftbar,
            download,paginate
        },
        beforeCreate() {
            
        },
        updated() {
        },
        methods: {
            changepage:function(pageNum) {
              console.log(pageNum);  
            },
            showMore(idx) {
                this.index = this.index === idx ? -1 : idx;
            },
            openFunds() {
                oPrompt({
                    idx: "boxwarps",
                    message: "敬请期待"
                });
            },
            toggleContent:function(index) {
              this.toggleArray[index]=!this.toggleArray[index];  
            },
            getDetails:function() {
              // 获取 活动列表
              let that = this;
              this.$http.get('/vip/activity/getActivityDetails?activityId='+this.$route.params.activeId
              ).then((response) => {
                let obj = response.body.data;
                //that.detailDesc = String(obj.detailDesc).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ').replace(/<(.[^>]*)>/g, '');
                //console.log(String(obj.detailDesc));
                that.detailDesc = String(obj.detailDesc).replace(/&amp;bull;/g, "•").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                that.coverImgSrc = obj.coverImgSrc;
                that.info.title = obj.name;
                that.info.start = obj.startTime;
                that.info.end = obj.endTime;
                //console.log(obj,'detailDescdetailDescdetailDesc');
                //that.onlineActivity = obj.list;
              });
            }
        },
        mounted() {
          if (typeof this.$route.params.pageId !='undefined') {
            console.log(this.$route.params.pageId,'this.$route.params.pageIdthis.$route.params.pageId');
            this.backlnk = '/newsales/'+(parseInt(this.$route.params.pageId,10)+1);   
          }
          this.getDetails()    
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .backsale{
    display: inline-block;
    text-align: center;
    width: 60px;
    height: 30px;
    line-height: 30px;
    background-color: #ff6a76;
    color: #fff;
    font-size: 14px;
    border-radius: 15px;
  }
  .acContent td{
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    line-height: 49px;
    text-align: center;
    color: #787878;
    font-size: 16px;
  }
  .acContent table{
    border-left: 1px solid #333;
    border-top: 1px solid #333;
    width: 80%;
    margin: 15px auto;
  }
</style>
<style scoped lang="less">
	.activityMmainImg {
		position: absolute;
		top: -20px;
		left: 0;
		width: 1200px;
	}
	.pagebox li{
    display:inline-block;
  }
	.mainbanner {
		width: 1920px;
		margin: 0 auto;
	}
	
	i.closeIcon {
		font-size: 40px;
		margin-top: 0;
		float: right;
	}
	
	.warp img {
		width: 100%;
	}
	
	.mt25 {
		margin-top: 25px;
	}
	
	.mr15 {
		margin-left: 15px;
	}
	
	.mt10 {
		margin-top: 10px;
	}
	
	.activityMmainImg2 {
		display: none;
	}
	
	.main {
		margin-top: 8%;
		padding-bottom: 8%;
		position: relative;
		padding-bottom: 40px;
	}
	
	.boxHeight {
		height: 50px;
		width: 20px;
	}
	
	.login_rightBar {
		position: absolute;
		right: 30px;
		top: -120px;
		z-index: 101;
	}
	
	.activityMmain {
		width: 82%;
		z-index: 88;
		margin: 0;
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.activityMmain_header {
		font-size: 18px;
		text-align: left;
		padding-top: 15px;
		position: relative;
		display: block;
		height: 65px;
	}
	
	.activityMmain_header:after {
		position: absolute;
		border-bottom: 1px solid #dddddd;
		width: 100%;
		height: 5px;
		bottom: 2px;
	}
	
	.activityMmain_header img {
		width: 18px;
	}
	
	.activityMmain_header li {
		float: left;
		line-height: 40px;
		padding: 3px 5px;
		margin-left: 30px;
		border-radius: 0px;
		cursor: pointer;
	}
	
	.activityMmain_header li.active {
		border-bottom: 1px solid #fa4d3d;
		color: #fa4d3d;
	}
	
	.activityMmain_cont {
		width: 100%;
		border-radius: 0px;
		margin-bottom: 70px;
		padding-bottom: 50px;
	}
	
	.activityMmain_cont_demo {
		width: 377px;
		margin-top: 10px;
		position: relative;
	}
	
	.activityMmain_cont_last {
		margin-right: 0px;
	}
	
	.activityMmain_cont_txter {
		text-align: left;
		padding: 15px;
		padding-bottom: 5px;
		border: 1px solid #f3f4f4;
	}
	
	.activityMmain_left h3 {
		font-size: 20px;
		font-weight: bold;
	}
	
	.activityMmain_left p {
		font-size: 14px;
		margin-top: 5px;
	}
	
	.activityMmain_cont_txt {
		text-align: left;
		font-size: 14px;
		padding: 10px 15px 10px 10px;
		position: absolute;
		left: 15px;
		right: 15px;
		top: 98%;
		z-index: 9;
		height: 220px;
		overflow-y: auto;
		border: 1px solid #f3f4f4;
		box-shadow: 0 5px 8px 1px #666;
		border-top: 0;
		background-color: #eee;
	}
	.activityItems li{
    position: relative;
    padding:33px 0px;
    margin-bottom: 20px;
  }
	.activitywapper {
		background-image: url('../img/activity/banner.jpg');
		height: 138px;
		background-position: center;
	}
  .acTitle{
    width:1083px;
    margin:0px auto;
    height:auto;
    text-align:left;
    position: relative;
  }
  .acContent{
    width:1083px;
    margin:0px auto;
    height:auto;
    text-align:left;
    font-size:14px;
  }
  .acContent table{
    border-left:1px solid #333;
    border-top:1px solid #333;
    width:80%;
    margin:15px auto;
  }
  .acContent h3{
    margin:10px 0px;
  }
  .acContent td{
    border-right:1px solid #333;
    border-bottom:1px solid #333;
    line-height:49px;
    text-align:center;
    color:#787878;
    font-size:16px;
  }
  .acContent ol li{
    margin:0px;
    padding:0px;
  }
  .acToggle{
    position: absolute;
    right: 0;
    top: 0;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 42px;
    border-radius: 50%;
    font-size: 23px;
    border: 3px solid #787878;
    cursor: pointer;
  }

  .acTitle h2{
    font-size:32px;
    color:#ff7a74;
  }
  .acTitle h5{
    font-size:18px;
    color:#787878;
  } 
  .acTag {
		background-image: url('../img/activity/ac_tags.png');
		height: 72px;
    width:72px;
    display:inline-block;
    position: absolute;
    left:0px;
    top:0px;
	}
  .acGo {
		background-position: 0px 0px;
	}
  .acPause {
		background-position: 0px -72px;
	}
  .acHot {
		background-position: 0px -144px;
	}
  .acEnd {
		background-position: 0px -216px;
	}
  .acAlreadyend{
    -webkit-filter: grayscale(100%); /* chrome+ */
    filter: grayscale(100%);
  }
  .acAlreadyend .acTitle h2{
    color: #999999;
  }

	.activityMmain_cont_txt table{
		width:100%
	}
	.activityMmain_cont_txt table td{
		border:1px solid #999
	}
	
	@media only screen and (min-width: 315px) and (max-width: 420px) {
		.activityMmainImg2 {
			display: block;
		}
		
		.activityMmainImg2 {
			width: 60%;
			margin: 0 auto;
		}
		
		.activityMmain_header, .activityMmainImg, .activitywapper {
			display: none;
		}
		
		.activityMmain {
			background: rgba(255, 255, 255, 0);
			padding-top: 5px;
			width: 100%;
		}
		
		.activityMmain_cont {
			margin-left: 0;
			margin-top: 5px;
			padding-left: 0;
		}
		
		.activityMmain_cont_demo {
			margin-right: 0;
			width: 100%;
		}
	}
</style>
<style lang="stylus" scoped>
	.activityMmain_left
		em
			color: #ff6a76
			margin-right: 5px
	
	.pc_part
		.activityMmain_cont_demo
			width: 50%
			padding: 10px 15px
			.activityMmain_cont_demo_right
				& > .active
					transform: rotate(90deg)
	
	#mobile_part
		margin-bottom: -1500px
		.mobile_wrapper
			.activityMmain_cont_txter
				padding-bottom: 25px
				.activityMmain_left
					max-width: 90%
			.activityMmain_cont_txt
				position: static
				height: auto
			.activityMmain_cont_demo
				margin-top: 0
				> img
					border: 1px solid #dcdddd
					border-bottom: none
			.second_text
				margin-top: 10px
</style>
