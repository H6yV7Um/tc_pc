<template>
	<header class="pageHeader_toucai">
		<div class="first_part">
			<div class="content_center">
				<a href="http://agent.tc508.com" class="left_p" target="_blank">
					<img src="../img/index/new/enter.gif" alt="" width="" height=""/>
				</a>
				<div class="right_p" v-show="!isLogin">
					<ul class="beforelogin">
						<li>
							<div class="errorbox">{{login_pass_error}}</div>
						</li>
						<li>
							<div class="inputbox"><em class="icon">&#xe600;</em><input class="userName" v-model="username" type="text" name="" placeholder="用户名/手机号"/></div>
						</li>
						<li>
							<div class="inputbox"><em class="icon">&#xe719;</em><input class="userName" v-model="psw" type="password" name="" placeholder="密码"/></div>
						</li>
						<li v-show="isCaptcha">
							<div class="inputbox"><em class="icon">&#xe69f;</em><input class="userName half" v-model="captcha" type="text" name="" placeholder="验证码"/>
								<div class="imgWrapper"><img v-bind:src="captchasrc" @click="RefreshSrc" alt="" id="captcha-img"/></div>
							</div>
						</li>
						<li class="last">
							<a class="hand" @click="login">登录</a>&nbsp;<a class="nowreg cone" @click="showreg">注册</a>&nbsp;<a
								href="http://test.tc508.com/yx/rgv/demo" target="_blank" class="ctwo">试玩</a>
						</li>
					</ul>
				</div>
				<div class="right_p" v-show="isLogin">
					<div class="say_hello">
						<router-link to="/qiandao" v-show="qdactive"><img src="../img/qiandao/getm.gif" height="35"></router-link>
            <div class="nickname relative_p cursor" :title="nickname" @mouseover="AccountListfn"
								 @mouseout="AccountListfnout">
							<span class="icon">&#xe600;</span>
							<i>{{nickname}}</i>
							<!--<img class="" src="/assets/images/ctx/thumb-ico.png" alt="">{{userTime}}, {{nickname}}-->
							<div class="drop_down_list" v-show="ishowAccountList">
								<div class="drop_down_arrow"></div>
								<ul class="drop_down_content">
									<li @click="isCenterClick = true">
										<router-link to="/userCenter">个人中心</router-link>
									</li>
									<li>
										<router-link to="/userAccount#page=2_finance">财务中心</router-link>
									</li>
									<li>
										<router-link to="/userReport#page=0_report">订单报表</router-link>
									</li>
									<li>
										<router-link to="/playDetails#0">玩法介绍</router-link>
									</li>
									<li>
										<router-link to="/jifen">积分制度</router-link>
									</li>
									<li>
										<a class="hand" @click="loginOut"><i class="icon">&#xe67b;</i>退出</a>
									</li>
								</ul>
							</div>
						</div>
						<span class="width_border"></span>
						<div class="notice_state">
							<router-link to="/game-notice/0">
								<span class="icon">&#xe6ac;</span>
								<i>公告</i>
								<!--<span class="num_count" v-show="noticeLen">{{noticeLen}}</span>-->
							</router-link>
						</div>
						<span class="width_border"></span>
						<div class="message_state">
							<router-link to="/userMessage#page=0_message">
								<span class="icon">&#xe68e;</span>
								<i>消息</i>
								<span class="num_count" id="num_popnt" v-show="stationNoticeLen">{{stationNoticeLen}}</span>
							</router-link>
						</div>
						<span class="width_border"></span>
						<div class="balance">
							<i class="remaining">
								<span class="">余额</span>
								<i class="money_part"><em>￥</em>{{lotteryBalance}}</i>
							</i>
							<!--<i>-->
							<i @click="hiddenlotteryBalance" class="cursor refreshBlance">
								<span v-show="!ishowBalance">隐藏</span>
								<span v-show="ishowBalance">显示</span>
							</i>
						</div>
					</div>
					<div class="btn_arr">
						<span class="width_border"></span>
						<a href="/userAccount#page=0_finance" class="recharge">
							充值
						</a>
						<a href="/userAccount#page=1_finance" class="deposit">
							提款
						</a>
						<!--<router-link to="/index#page=2_finance" class="transfer">-->
						<!--转账-->
						<!--</router-link>-->
						<!--<span class="width_border"></span>-->
						<!--<router-link to="/index#page=2_finance" class="balance_walet">-->
						<!--余额宝-->
						<!--</router-link>-->
					</div>
					<!--<span class="width_border"></span>
					<div target="_self" class="exit_account cursor" @click="loginOut">
						登出
					</div>
					<a href="http://agent.tc508.com" class="other_agent cursor" target="_blank"><em class="icon">&#xe6c5;</em>代理中心</a>-->
				</div>
			</div>
		</div>
		<div class="sec_part">
			<div class="clearfix sec_wrapper" id="header_navbar_sec">
				<div class="downList drop_down_list" v-show="ishowAllGame && isLogin" @mouseover="openAllGame"
						 @mouseout="closeAllGame">
					<div class="drop_down_arrow"></div>
					<div class="drop_down_content">
						<div class="downlist_top">
							<span class="official" :class="[isOfficial && 'active']" @click="isOfficial = true">官方</span>
							<span class="classical" :class="[!isOfficial && 'active']" @click="isOfficial = false">经典</span>
						</div>
						<div class="dotted_line"></div>
						<ul class="title_ul">
							<li class="title_li" v-for="(item, index) in gameArr.slice(0, gameArr.length - 1)" v-show="isOfficial">
								<div class="lottery_img">
									<h1 class="title" :class="['header_lottery' + index]"></h1>
								</div>
								<ul class="inner_ul">
									<li v-for="(n, idx) in item.objArr" rel="n.id">
										<a :href="'/static/lt.html#'+ n.id" target="_self">
											{{n.showName}}<img :src="iconnew" class="iconew" v-show="isnew(n.id)" alt="">
										</a>
									</li>
								</ul>
								<div class="dotted_line"></div>
							</li>
              <li class="title_li" v-show="isOfficial && isLhcShow">
                <div class="lottery_img">
									<h1 class="title header_lottery7"></h1>
								</div>
                <ul class="inner_ul">
									<li rel="LHECXJW" @click="closenowmenu">
										<router-link to="/pankou/#250">
											香港六合彩
										</router-link>
									</li>
								</ul>
                <div class="dotted_line"></div>
              </li>
              <li class="title_li" v-show="isOfficial && false">
                <div class="lottery_img">
									<h1 class="title header_lottery8"></h1>
								</div>
                <ul class="inner_ul">
									<li rel="LHECXJW">
										<a :href="vrlink" target="_blank">
											天彩VR
										</a>
									</li>
								</ul>
              </li>
							<li class="title_li" v-for="(item, index) in gameArr.slice(gameArr.length - 1)" v-show="!isOfficial">
								<div class="lottery_img">
									<h1 class="title classical_lottery"></h1>
								</div>
								<ul class="inner_ul classic_ul">
									<li v-for="(n, idx) in item.objArr">
										<a :href="'/yx/xjw/v/lottery/' + n.id + '.html'" target="_self">
											{{n.showName}}
										</a>
									</li>
								</ul>
								<div class="dotted_line"></div>
							</li>
						</ul>
					</div>
				</div>
				<div class="logo">
					<router-link to="/index" class="logo_bg"></router-link>
				</div>
				<div class="ul_right" v-show="!isPswReset">
					<ul>
						<li class="index active" @click="secHeadClick($event)">
							<!--<a to="/new" class="fixico"><em class="icon">&#xe743;</em></a>-->
							<router-link to="/index">
								<p>首页</p>
							</router-link>
						</li>
						<li class="contain_a" @mouseover="openAllGame" @mouseout="closeAllGame">
							<a>
								<p>彩票中心</p>
							</a>
						</li>
						<li class="lottery_link">
							<a :href="isLogin && '/static/lottery-trend.html?id=11&w=1&q=50&chs=重庆时时彩'" target="_blank">
								<p>走势图表</p>
							</a>
						</li>
						<li class="">
							<router-link to="/followBet">
								<p>跟单大厅</p>
							</router-link>
						</li>
						<li class="thirdparty_game">
							<a href="javascript:void(0)">
								<p>第三方游戏</p><span class="icon ft12">&#xe6bb;</span>
								<div class="third_downlist">
									<router-link to="/entertainment">棋牌游戏</router-link>
									<router-link to="/realPeople">真人娱乐</router-link>
									<router-link to="/sportsGame">体育竞技</router-link>
								</div>
							</a>
						</li>
						<li>
							<!--<a @click="openFunds">-->
								<!--<span class="icon">&#xe6b3;</span>-->
								<!--<p>积分商城</p>-->
							<!--</a>-->
							<router-link to="/mall">
								<span class="icon">&#xe6b3;</span>
								<p>积分商城</p>
							</router-link>
						</li>
						<li>
							<router-link :to="actlink">
								<p>优惠活动</p>
							</router-link>
						</li>
						<li>
							<router-link to="/download">
								<p>下载中心</p>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
    import {userInit, Prompt, registerInit, loginInit} from '../js/index.js';
    import {inArray, getNodes, Cookie} from '../js/common';
    import {verifyRule} from '../js/const.js';
    import _base from '../js/pubilc.js';
    import newimg from '../img/index/new/new.gif'

    let init = userInit();
    let initLogin = loginInit();
    let oPrompt = Prompt();
    let initSafetyImg = registerInit();
    const APPCONFIG = _base.config();

    let gameClassifyArr = [
        {name: '时时彩', idArr: [11, 161, 151, 6, 119, 161, 51, 711, 811, 46, 203, 911, 205, 206, 191, 601, 50, 61]},
        {name: '菲律宾', idArr: [200, 201, 202]},
        //{name : '全天彩', idArr: []},
        {name: '11选5', idArr: [21, 22, 23, 24, 25, 26, 28]},
        {name: '低频彩', idArr: [41, 42]},
        {name: '其他', idArr: [204, 31, 32, 33, 34, 35, 36, 43, 47]},
        {name: '经典', idArr: [80, 82, 85, 86, 87, 88, 90, 91, 100, 102, 103, 110, 104, 105, 70, 71, 72]}
    ];

    export default {
        name: 'pageHeader',
        data() {
            return {
                msg: 'this is index',
                isLhcShow:APPCONFIG.isLhcShow,
                iconnew: newimg,qdactive:APPCONFIG.isqiandao,
                username: '', psw: '', captcha: '', captchasrc: '', loginType: 0, login_pass_error: '',
                actlink: '/sales/1',
                isCenterClick: false, isCaptcha: false,
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth,
                isproxyContList: false,
                ishowAccountList: false,
                nickname: '获取中...',
                lotteryBalance: '',
                ishowBalance: false,
                lotteryBalance2: '',
                showNotice: false,vrlink:'#',
                istype: '',
                on_ff_id: 0,
                noticeListLen: 0,
                ltgroups: {
                    'ssc': [11, 151, 161],
                    'tsssc': [6, 191, 46, 911, 119, 205, 206],
                    'flb': [200, 201, 202],
                    'qth': [711, 811, 601, 51, 203],
                    'xuan': [21, 22, 24, 23, 28, 26],
                    'kuai': [32, 33, 35, 36],
                    'other': [47, 204, 43, 41, 42],
                    'pk10': [204, 43, 47],
                    '11y': [21, 22, 24, 23, 28, 26],
                    '3d': [41, 42],
                    'k3': [31, 32, 33, 35, 36],
                    'kl8': [711]
                },
                lottery: [], newlt: [50, 61],
                timer: null,
                timerAccount: null,
                timerproxy: null,
                userTime: '',
                promptList: [],
                PromptBox: localStorage.getItem('_isShowBox') === 'true',
                ispromptList: true,
                islogin: this.$store.state.isLogin === 'true',
                initlotteryBalanceTimer: null,
                dom: null,
                ishowAllGame: false,
                gameArr: [],
                // 彩票中心显示
                isOfficial: true
            };
        },
        created() {
            let _this = this;

            this.getGameData();
            setInterval(function () {
                init.initlotteryBalance(_this);
            }, 10000)
        },
        methods: {
            showreg: function () {
                this.$root.$children[0].showReg();
            },
            closenowmenu:function() {
                //alert('closenowmenu');
                this.ishowAllGame = false;
            },
            isbr:function(index) {
              return true;
            },
            isnew: function (id) {
                if ($.inArray(id, this.newlt) > -1) {
                    return true;
                }
                return false;
            },
            newact: function () {
                this.actlink = '/sales/1';
            },
            login() {
                if (this.loginType === 1) {
                    if (!verifyRule.mobile.reg.test(this.username)) {
                        this.login_pass_error = "手机号错误";
                        return
                    }
                    if (!verifyRule.verifyImg.reg.test(this.verifyImg)) {
                        this.login_pass_error = "图片验证码错误";
                        return
                    }
                    if (!verifyRule.verifyCode.reg.test(this.verifyCode)) {
                        this.login_pass_error = "手机验证码错误";
                        return
                    }
                } else {
                    if (!verifyRule.username.reg.test(this.username) && !verifyRule.mobile.reg.test(this.username)) {
                        this.login_pass_error = "账户名错误";
                        return
                    }
                    if (!verifyRule.psw.reg.test(this.psw)) {
                        this.login_pass_error = "密码错误";
                        return
                    }
                    if (this.isCaptcha && !verifyRule.verifyImg.reg.test(this.captcha)) {
                        this.login_pass_error = "图片验证码错误";
                        return
                    }
                }
                initLogin.login(this)
            },
            getvrlink:function() {
              let that = this;

              this.$http.get('/yx/thirdGameApi/common/getLoginUrl?platformId=14'
              ).then((response) => {
                let data = response.data && response.data.data;
                console.log(data,'vrrr');
                that.vrlink = data;
              })
            },
            RefreshSafety() {
                initSafetyImg.RefreshSrc(this);
            },
            RefreshSrc() {
                init.RefreshSrc(this)
            },
            // 获取彩种列表
            getGameData() {
                let that = this;
                this.$http.post('/yx/u/api/game-lottery/openLotterys'
                ).then((response) => {
                    let obj = response.body.data;
                    let temporary = {};
                    let i = 0;
                    for (let k in obj) {
                        if (i < 10) {
                            i++;
                            temporary[k] = obj[k]
                        }
                    }
                    let o = Object.assign({}, obj);

                    that.$store.commit('setAllLotteryList', temporary);
                    obj && obj.forEach(function (item) {
                        for (let i = 0; i < gameClassifyArr.length; i++) {
                            let single = gameClassifyArr[i];
                            if (inArray(item.id, single.idArr) > -1) {
                                single.objArr = single.objArr || [];
                                single.objArr.push(item);
                            }
                        }
                    })

                    that.gameArr = gameClassifyArr;
                });
            },
            // 代理中心显示、隐藏下拉框
            proxyContListfn() {
                clearTimeout(this.timerproxy)
                this.isproxyContList = true;
            },
            proxyContListfnout() {
                let _this = this;
                this.timerproxy = setTimeout(function () {
                    _this.isproxyContList = false;
                }, 200);
            },
            // 关闭弹窗
            PromptBoxClose() {
                let winUrl = location.href;
                this.PromptBox = true;
            },
            // 显示隐藏余额
            hiddenlotteryBalance() {
                if (!this.ishowBalance) {
                    this.lotteryBalance2 = this.lotteryBalance;
                    this.lotteryBalance = "";
                    this.ishowBalance = true;
                } else {
                    this.lotteryBalance = this.lotteryBalance2;
                    this.ishowBalance = false;
                }
            },
            // 刷新余额
            userRefresh() {
                this.lotteryBalance = '0.00';
                this.ishowBalance = false;
                init.initlotteryBalance(this);
            },
            openFunds() {
                oPrompt({
                    idx: "boxwarps",
                    message: "敬请期待"
                });
            },
            // 退出账号
            loginOut() {
                clearInterval();
                init.loginout(this, {target: "/login", islogin: true});
            },
            // 展开隐藏所有游戏
            openAllGame(e, istrue) {
                if (!this.isCenterClick) {
                    this.ishowAllGame = true;
                } else {
                    this.isCenterClick = false;
                }
            },
            closeAllGame(e, istrue) {
                this.ishowAllGame = false;
            },
            // 个人中心列表展示隐藏
            AccountListfn() {
                clearTimeout(this.timerAccount)
                this.ishowAccountList = true;
            },
            AccountListfnout() {
                let _this = this;
                this.timerAccount = setTimeout(function () {
                    _this.ishowAccountList = false;
                }, 200);
            },
            // 路由跳转函数
            routerLink(url) {
                this.$router.push(url);
            },
            // 头部第二部分导航栏点击函数
            secHeadClick(e) {
                let node = e.target;
                if (node.nodeName === 'LI' || node.nodeName === 'A') {
                    let parentNode = document.getElementById('header_navbar_sec');
                    let children = parentNode.getElementsByTagName('li');
                    for (let child of children) {
                        child.classList.remove('active');
                    }
                }
                if (node.nodeName === 'LI') {
                    node.classList.add('active');
                } else if (node.nodeName === 'A') {
                    node.parentNode.classList.add('active');
                }
            }
        },
        watch: {
            '$route'(to, form) {
                this.ishowAccountList = false;
                this.isproxyContList = false;
                //
            },
            ishowAllGame(to, form) {
              if (to) {
                $('.classic_ul li').eq(5).after('<br>');
                $('.classic_ul li').eq(7).after('<br>');
              }else {
                $('.classic_ul br').remove();
              }
              //console.log(to,'ishowAllGame');
            }
        },
        mounted() {
            let _this = this;
            window.addEventListener("resize", function () {
                _this.height = document.documentElement.clientHeight;
            });
            if (!this.islogin) {
                return false;
            }

            init.initUserInfo(this);
            _this.getvrlink();
        },
        beforeCreate() {
            init.userInit(this);
            init.lotteyList(this, function (a) {
                //console.log(t.lottery, 'tttttttttttttttttttttttt');
            });
        },
        computed: {
            // 判断是否在密码设置页面
            isPswReset() {
                return this.$store.state.isPswReset;
            },
            noticeLen() {
                return this.$store.state.noticeLen;
            },
            stationNoticeLen() {
                return this.$store.state.stationNoticeLen;
            },
            isLogin() {
                if (this.$store.state.isLogin === 'true') {
                    return true;
                }
                return false;
            },
            getssc_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.ssc.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            },
            gettsssc_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.tsssc.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            },
            getflbssc_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.flb.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            },
            getqthssc_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.qth.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            },
            getxuan_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.xuan.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            },
            getkuai_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.kuai.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            },
            getother_after_filter: function () {
                var t = this;
                return this.lottery.filter(function (data) {
                    var allstr = ',' + t.ltgroups.other.join(',') + ','
                    return String(allstr).indexOf(',' + data.id + ',') > -1;
                })
            }
        }
    };
</script>


<style lang="stylus" scoped>
	@import "../css/stylus/index.styl";

	.pageHeader_toucai
		background-color: #333
		position: relative
		color: #666
    #num_popnt
			font-size:80%
		.first_part
			width: main_width
			margin: 0 auto
			height: 36px
			.other_agent
				color: #ffbf48
				margin-left: 10px
				em
					vertical-align: -1px
					margin-right: 3px
			.content_center
				margin: 0 auto
				font-size: 12px
				.left_p
					float: left
					color: #ffbf48
					margin-top: 7px
					height: 22px
					line-height: 22px
					border: 0px solid #999
					radius(10px)
					padding: 0 5px
					setMiddle()
					span
						margin-right: 3px
				.right_p
					.get_money
						padding-top:4px
						cursor()
					.beforelogin
						.errorbox
							color: #f00
							line-height: 28px
							padding: 0px 10px
						.inputbox
							background-color: #f0f0f0;
							float: left;
							display: inline-block;
							width: 145px;
							height: 29px;
							border-radius: 5px;
							margin-right: 10px;
							line-height: 29px;
							position: relative;
							.imgWrapper
								position: absolute;
								right: 2px;
								top: -1px;
								img
									height: 26px
							em
								color: #999999
								float: left
								width: 20px
							input
								width: 116px
								float: left
								background-color: transparent
								height: 28px
								line-height: 26px
								outline: none
							.half
								width: 58px
						li
							float: left
						.last
							a
								display: inline-block;
								width: 65px;
								height: 30px;
								background-color: #ff6682;
								line-height: 28px;
								color: #fff;
								border-radius: 5px;
								font-size: 14px;
							.cone
								background-color: #118ee5
							.ctwo
								background-color: #00cf1d
					float: right
					display: flex
					align-items: center
					height: 36px
					padding: 0px
					.width_border
						display: inline-block
						border-left: 1px solid #dcdcdc
						height: 14px
						line-height: 14px
						margin: 0 10px
					> div
						float: left
						setMiddle()
					.say_hello
						position: relative
						> div > a
							color: #dbdbdb
						.notice_state, .message_state
							a
								setMiddle()
								.icon
									margin-right: 4px
						.nickname
							setMiddle()
							min-width: 80px
							text-align: center
							> i
								color: #e97206
							> .icon
								margin-right: 4px
								color: #f5e301
							.drop_down_list
								right: -40px
								top: 30px
							.drop_down_content
								padding: 5px 0
								width: 140px
								li
									a
										display: block
										height: 40px
										line-height: 40px
										&:hover
											bgRed()
											color()
						.notice_state, .message_state
							setMiddle()
							.num_count
								display: inline-block
								margin-left: 3px
								bgRed()
								radius(50%)
								height: 14px
								line-height: 14px
								color: #fff
								width: 14px
						.balance
							height: 20px
							padding: 0 8px
							bgColor(#eee)
					.my_account
						position: relative
						.user_center
							position: absolute
							display: inline-block
							height: auto
							z-index: 10
							left: -190px
							top: 35px
							background: url(imgPathPage + 'user_center.png') top center no-repeat
							bgCover()
							.user_show
								padding: 15px
								padding-top: 20px
								padding-bottom: 8px
								radius(10px)
								.big_ul
									text-align: left
									> li
										width: 425px
										overflow: hidden
										.left_float
											float: left
											margin-top: 3px
										> ul
											float: right
											font-size: 0
											width: 368px
											li
												display: inline-block
												width: 82px
												height: 30px
												line-height: 30px
												text-align: center
												margin-left: 10px
												font-size: 12px
												radius(5px)
												backgroundImg()
												background-size: cover
												gradientBlue()
												margin-bottom: 9px
												&:hover
													gradientRed()
												a
													color: #fff
					.balance
						display: flex
						align-items: center
						line-height: 20px
						radius(5px)
						.money_part
							display: inline-block
							min-width: 105px
							text-align: left
							color: #ff7a74
							em
								color: #666
						.remaining
							margin-left: 6px
						.refresh_icon
							height: 18px
							line-height: 18px
						.refreshBlance
							margin-left: 5px
					.btn_arr
						.recharge, .deposit, .transfer, .balance_walet
							display: inline-block
							padding: 0 6px
							height: 20px
							line-height: 18px
							color: #fff
							background-repeat: no-repeat
							background-position: center center
							cursor: pointer
							font-size: 12px
							radius(2px)
						.recharge
							bgColor(#60c986)
							margin-right: 10px
						.deposit
							bgColor(#fd8e70)
						.transfer
							bgColor(#0089b3)
						.balance_walet
							bgColor(#d48b0b)
						.service
							a
								color: #fff
								padding-right: 3px
					.exit_account
						padding: 0 6px
						height: 20px
						font-size: 12px
						line-height: 20px;
						bgColor(#a6a9a0)
						color()
						radius(2px)
					.time_switch
						.slider_bar
							position: relative
							margin: 0 3px
							width: 42px
							height: 20px
							line-height: 20px
							radius(10px)
							bgColor(#00eb6b)
						.slider_ball
							position: absolute
							z-index: 4
							height: 18px
							width: 18px
							top: 1px
							left: 1px
							radius(50%)
							bgColor(#fff)
							cursor()
							transition: transform 0.5s ease;
							&.on
								transform: translateX(22px)
							.off
								transform: translateX(1px)
						.left_bar, .right_bar
							position: absolute
							z-index: 3
							width: 50%
							height: 20px
							cursor()
						.left_bar
							left: 0
							radiusLeft(50%)
						.right_bar
							right: 0
							radiusRight(50%)
		.sec_part
			bgColor(#ff6a76)
			.sec_wrapper
				position: relative
				height: 68px
				width: main_width
				margin: 0 auto
				.downList
					padding-top: 10px
					width: 1200px
					background-size: 100% 100%
					top: 44px
					left: 0
					padding-bottom: 20px
					z-index: 36
					.drop_down_arrow
						background-position: 37% center
					.drop_down_content
						boxShadow(0 5px 10px 1px #666)
						padding-top: 5px
						.downlist_top
							font-size: 0
							text-align: center
							margin-bottom: 5px
							span
								display: inline-block
								width: 76px
								height: 32px
								line-height: 32px
								font-size: 16px
								cursor()
								bgColor(#dcdddd)
								&.active
									color()
									bgRed()
							.official
								radiusLeft(16px)
							.classical
								radiusRight(16px)
						.title_ul
							bgColor(#fff)
							.title_li
								display: flex
								position: relative
								padding: 10px 0
								align-items: center
								text-align: right
								justify-content: flex-start
								overflow: hidden
								.dotted_line
									position: absolute
									width: 100%
									bottom: 0
								&:last-child
									.dotted_line
										display: none
								.lottery_img
									width: 116px
									h1
										display: inline-block
										vertical-align: middle
										width: 60px
										height: 60px
										text-align: center
										line-height: 60px
										radius(50%)
										font-size: 18px
										font-weight: normal
										color()
										background-repeat: no-repeat
										background-position: center
									.header_lottery0
										background-image: url(imgPathPage + 'header_lottery0.png')
									.header_lottery1
										background-image: url(imgPathPage + 'header_lottery2.png')
									.header_lottery2
										background-image: url(imgPathPage + 'header_lottery3.png')
									.header_lottery3
										background-image: url(imgPathPage + 'header_lottery4.png')
									.header_lottery4
										background-image: url(imgPathPage + 'header_lottery5.png')
									.header_lottery5
										background-image: url(imgPathPage + 'header_lottery6.png')
									.header_lottery7
										background-image: url(imgPathPage + 'header_lottery7.png')
									.header_lottery8
										background-image: url(imgPathPage + 'header_lottery8.png')
									.classical_lottery
										background-image: url(imgPathPage + 'header_lottery6.png')
								ul
									text-align: left
									width: 1080px
									li
										display: inline-block
										line-height: 30px
										text-align: center
										cursor: pointer
										font-size: 16px
										radius(5px)
										bgGrey()
										margin: 9px 16px
										&:hover
											background-image: -webkit-linear-gradient(to bottom, #e7556e 0, #f95867 100%);
											background-image: linear-gradient(to bottom, #e7556e 0, #f95867 100%);
											bgColor(red)
											a
												color: #fff
										a
											display: inline-block
											width: 100%
											height: 100%
											padding: 2px 8px
											color: #636363
				.logo
					float: left
					width: 244px
					height: 100%
					bgNormal(imgPathCommit + 'logo.png')
					.logo_bg
						display: inline-block
						height: 100%
						width: 100%
				.ul_right
					float: right
					height: 100%
					ul
						/*overflow:hidden*/
						margin-top: 20px
						align-items: center
						vertical-align: middle
						li
							display: inline-block
							position: relative
							padding: 0 10px
							radius(5px)
							height: 30px
							cursor()
							font-size: 16px
							margin: 0 10px
							color: #fff
							&:hover
								border-radius: 15px;
								background-color: #fff;
								color: #ff6a76;
							.fixico
								position: absolute;
								right: -20px;
								font-size: 20px;
								width: 20px;
								color: #ffffff;
								top: -8px;
								font-weight: normal;
								height: 20px;
								line-height: 20px;
								z-index: 6;
							span
								margin-right: 5px
							&.active
								radius(15px)
								bgColor()
								color: text_color
							> a
								display: flex
								align-items: center
								width: 100%
								height: 100%
						.index
							a
								justify-content: center
			.thirdparty_game
				> a
					position: relative
					p
						margin-right: 3px
					&:hover
						.third_downlist
							visibility: visible
					.third_downlist
						position: absolute
						visibility: hidden
						left: 0
						top: 30px
						width: 100px
						font-size: 14px
						bgColor()
						z-index: 15
						radius(5px)
						box-shadow: 0 1px 5px 1px #f84d1f;
						a
							display: inline-block
							width: 100%
							text-align: center
							height: 30px
							line-height: 30px
							color(text_color)
							border-bottom: 1px solid #ccc4bc
							&:last-child
								border-bottom: none
							&:hover
								bgColor(text_color)
								color()

</style>
