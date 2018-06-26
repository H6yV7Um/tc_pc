<template>
	<div id="real_people">
		<div class="real_wrapper">
			<p class="ft24">余额</p>
			<div class="ft22">{{walletBalance}}元</div>
			<a :href="golink">{{clickIndex !== 0 ? '进入游戏' : '加载中...'}}</a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import {thirdpartyGame, Prompt} from '../js/index.js';

    let init = thirdpartyGame();
    let oPrompt = Prompt();
    export default {
        data() {
            return {
                commonUrl : '',
                walletBalance: '',golink:'',
                clickIndex : -1, // 被点击的链接的index
                realObj : appConfig().thirdPartyGame.realObj // config中的realtObj决定是否开启真人
            }
        },
        methods : {
            openFunds(index) {
                if (this.realObj.isOpen) {
                    this.clickIndex = index;
                    init.getLinkUrl(this, this.realObj.platformId);
                } else {
                    oPrompt({
                        idx: "boxwarps",
                        message: "正在维护中，请耐心等待"
                    });
                }
            },
            singlebal:function(id,call,name) {
              let that = this;
              //5,6,7
              this.$http.get('/yx/thirdGameApi/common/showThirdAmount?platformId='+id
              ).then((response) => {
                //console.log(response.data.data);
                that.walletBalance = Number(response.data.data).toFixed(2);
                //that.third[name]= Number(response.data.data).toFixed(2);
                if (typeof call !='undefined') {
                  call();  
                }
              }); 
            },
            getthirdbal:function() {
              let that = this;

              that.singlebal(5,function() {

              },'zr');
            },
            // 判断是否登录
            isLogin() {
              if (this.$store.state.isLogin === 'true') {
                console.log('已经登录登录！');
                return true;
              } else {
                console.log('未登录！');
                // this.getUnloginNotice();
                return false;
              }
            },
            getlink:function() {
              let that = this;

              this.$http.get('/yx/thirdGameApi/common/getLoginUrl?platformId=5'
              ).then((response) => {
                let data = response.data && response.data.data;
                //console.log(data);
                if (response.data.code=='-1') {
                  oPrompt({
                    idx: "errorpop",
                    message: response.data.message
                  });  
                }
                that.golink = data;
                if (typeof that.prompt !='undefined') {
                  that.prompt.close();  
                }else {
                  $('#boxwarps').remove();
                }
                
              })
            }
        },
        created() {
            init.getBalances(this, this.realObj.val);
        },
        mounted() {
          var _t = this;
          if (!this.isLogin()) {
            oPrompt({
              idx: "boxwarps",
              message: "请先登录！"
            });
            setTimeout(function() {
              _t.$router.push('/index');  
            },1000)
            return false;
          }
          this.getlink();this.getthirdbal(); 
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../css/stylus/index.styl"
	
	#real_people
		position:relative
		width:1200px
		height: 770px
		margin:0 auto
		bgAll('../img/play/real_bg.png')
		.real_wrapper
			position:absolute
			bottom:150px
			left:100px
			color(text_color)
			text-align:right
			div
				margin:5px 0 15px 0
			a
				display:inline-block
				width: 170px
				height: 40px
				line-height: 40px
				text-align:center
				bgColor(#ff6b95)
				color()
				radius(5px)
</style>