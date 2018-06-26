<template>
	<div id="sports_game">
		<div class="sports_wrapper">
			<ul>
				<li class="first_li">
					<a :href="golink" :target="gotarget">
						<div class="enter_wrapper">
							<div class="enter_ball">{{clickIndex !== 0 ? '进入游戏' : '加载中...'}}</div>
						</div>
					</a>
				</li>
				<li class="sec_li">
					<a :href="golink" :target="gotarget">
						<div class="enter_wrapper">
							<div class="enter_ball">{{clickIndex !== 1 ? '进入游戏' : '加载中...'}}</div>
						</div>
					</a>
				</li>
			</ul>
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
                commonUrl: '',golink:'#',gotarget:'_blank',
                clickIndex : -1, // 被点击的链接的index
                sportObj : appConfig().thirdPartyGame.sportObj // config中的sportObj决定是否开启体育
            }
        },
        methods : {
            openFunds(index) {
                if (this.sportObj.isOpen) {
                    this.clickIndex = index;
                    init.getLinkUrl(this, this.sportObj.platformId);
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

              this.$http.get('/yx/thirdGameApi/common/getLoginUrl?platformId=6&subGame=sport'
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

          this.getlink()
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import "../css/stylus/index.styl"
	
	#sports_game
		background: url('../img/play/sports_bg.png') center center no-repeat
		background-size: 121% 100%
		min-width: main_width
		margin: 0 auto
		padding-top: 430px
		padding-bottom: 30px
		.sports_wrapper
			ul
				display:flex
				justify-content:space-between
				width: 1200px
				margin: 0 auto
				font-size:0
				li
					width: 49%
					height: 291px
					a
						display: inline-block
						width: 100%
						height: 100%
					&:hover
						.enter_wrapper
							visibility: visible
					.enter_wrapper
						visibility: hidden
						setMiddle()
						height: 100%
						bgColor(rgba(0, 0, 0, 0.5))
						.enter_ball
							width: 134px
							height: 134px
							radius(50%)
							color()
							font-size:24px
							background-image: -webkit-linear-gradient(to right bottom, #65d4f2 0, #3b5cb0 100%)
							background-image: linear-gradient(to right bottom, #65d4f2 0, #3b5cb0 100%)
							bgColor(#65d4f2)
							setMiddle()
				.first_li
					bgAll('../img/play/sport1.png')
				.sec_li
					bgAll('../img/play/sport2.png')
</style>