<template>
	<div id="entertainment" :style="{height: height +10 + 'px'}">
		<ul class="card_wrapper">
			<li v-for="(item, index) in cardArr">
				<div class="img_wrapper" :style="{backgroundImage:'url(/static/img/card' + index + '.jpg)'}"></div>
				<div class="text-wrapper">
					<div class="left_part">
						<h3>{{item.gameName}}</h3>
						<div class="balance">
							<span>余额 :</span>
							<i>{{walletBalance}}</i>
							<!--<a class="transfer_in" href="/index/pageUserNav/userAccount#page=2_finance">转账</a>-->
							<!--<a class="transfer_out" href="/index/pageUserNav/userAccount#page=2_finance">转出</a>-->
						</div>
					</div>
					<a class="access_game" :href="golink" :target="gotarget">{{clickIndex !== index ? '进入游戏' : '加载中...'}}</a>
					<a class="transfer_url" href="/userAccount#page=2_finance">转账</a>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
    import {thirdpartyGame, Prompt} from '../js/index.js';
		
    let init = thirdpartyGame();
    let oPrompt = Prompt();
    export default {
        data() {
            return {
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth,
								cardArr : [
										{gameName: '德州扑克', url:''},
										{gameName: '二八杠', url:''},
										{gameName: '抢庄牛牛', url:''},
										{gameName: '扎金花', url:''},
										{gameName: '三公', url:''},
										{gameName: '抢庄龙虎', url:''},
										{gameName: '二十一点', url:''},
										{gameName: '通比牛牛', url:''},
										{gameName: '汇率红包', url:''}
								],
                clickIndex : -1, // 被点击的链接的index
								commonUrl : '',
                walletBalance: '',golink:'',gotarget:'_blank',
                cardObj : appConfig().thirdPartyGame.cardObj // config中的isOpenCard决定是否开启棋牌
            }
        },
				methods : {
            openFunds(index) {
                if (this.cardObj.isOpen) {
                    this.clickIndex = index;
                    init.getLinkUrl(this, this.cardObj.platformId);
                } else {
                    oPrompt({
                        idx: "boxwarps",
                        message: "正在维护中，请耐心等待"
                    });
                }
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
              console.log('getlinkgetlinkgetlink');
              this.$http.get('/yx/thirdGameApi/common/getLoginUrl?platformId=7'
              ).then((response) => {
                let data = response.data && response.data.data;
                //console.log(data);
                that.golink = data;
                that.gotarget = "_blank";
                if (typeof that.prompt !='undefined') {
                  that.prompt.close();  
                }else {
                  $('#boxwarps').remove();
                }
              })
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

              that.singlebal(7,function() {

              },'ky');
            }
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
          
          this.getthirdbal();
          this.getlink();
        },
        created() {
          //this.getthirdbal();
          // this.getlink();
          //init.getBalances(this, this.cardObj.val);
				}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
	@import "../css/stylus/index.styl"
	
	#entertainment
		min-height:460px
		bgColor()
		height:100%
		max-width: 1250px;
		margin: 0 auto;
		.card_wrapper
			padding:2%
			font-size:0
			height:100%
			padding-bottom:30px;
			li
				display:inline-block
				width:31.7%
				height:30%
				margin:1% 0.8%
				font-size:14px
				.img_wrapper
					background-position:center center
					background-size:100% 100%
					height:70%
				.text-wrapper
					position:relative
					border:1px solid #ccc
					border-top:none
					height:auto
					padding:0 2%
					setSpaceH()
					.left_part
						width:45%
						text-align:left
						h3
							font-size:18px
							font-weight:normal
							margin-bottom:3px
						.balance
							setStart()
							span
								color(#999)
							i
								color(#f34777)
								min-width: 80px
								ellipsis()
							a
								height: 20px
								line-height: 20px
								color()
								padding:0 10px
								radius(3px)
							.transfer_in
								bgColor(#bbb)
							.transfer_out
								bgColor(#0abc66)
					>a
						position:absolute
						top:20%
						width: 90px
						height: 34px
						line-height:34px
						radius(3px)
						color()
					.access_game
						right:100px
						bgColor(#0d86ff)
					.transfer_url
						right:2%
						bgColor(#bbb)
	@media only screen and (max-width: 1500px)
		.balance
			font-size:12px
	
</style>
