<template>
  <header class="pageHeader_toucai">
    <div class="first_part">
      <div class="content_center">
        <router-link to="/index" class="left_p">
          <span class="icon">&#xe6be;</span>
          <i>首页</i>
        </router-link>
        <div class="right_p" v-show="isLogin">
          <div class="say_hello" >
            <div class="nickname relative_p cursor" :title="nickname" @mouseover="AccountListfn" @mouseout="AccountListfnout">
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
                <span class="num_count" v-show="stationNoticeLen">{{stationNoticeLen}}</span>
              </router-link>
            </div>
            <span class="width_border"></span>
            <div class="balance">
              <i class="remaining">
                <span class="">余额</span>
                <i class="money_part">￥{{lotteryBalance}}</i>
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
          <span class="width_border"></span>
          <div target="_self" class="exit_account cursor" @click="loginOut">
            登出
          </div>
        </div>
      </div>
    </div>
    <div class="sec_part">
      <div class="clearfix sec_wrapper" id="header_navbar_sec">
        <div class="downList drop_down_list" v-show="ishowAllGame && isLogin" @mouseover="openAllGame" @mouseout="closeAllGame">
          <div class="drop_down_arrow"></div>
          <div class="drop_down_content">
            <div class="downlist_top">
              <span class="official" :class="[isOfficial && 'active']" @click="isOfficial = true">官方</span>
              <span class="classical" :class="[!isOfficial && 'active']" @click="isOfficial = false">经典</span>
            </div>
            <div class="dotted_line"></div>
            <ul class="title_ul">
              <li class="title_li" v-for="(item, index) in gameArr.slice(0, gameArr.length - 1)"  v-show="isOfficial">
                <div class="lottery_img">
                  <h1 class="title" :class="['header_lottery' + index]"></h1>
                </div>
                <ul class="inner_ul">
                  <li  v-for="(n, idx) in item.objArr">
                    <a :href="'/static/lt.html#'+ n.id" target="_self">
                      {{n.showName}}
                    </a>
                  </li>
                </ul>
                <div class="dotted_line"></div>
              </li>
              <li class="title_li" v-for="(item, index) in gameArr.slice(gameArr.length - 1)" v-show="!isOfficial">
                <div class="lottery_img">
                  <h1 class="title classical_lottery"></h1>
                </div>
                <ul class="inner_ul">
                  <li  v-for="(n, idx) in item.objArr">
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
              <router-link to="/index">
                <span class="icon">&#xe6be;</span>
                <p>首页</p>
              </router-link>
            </li>
            <li class="contain_a" @mouseover="openAllGame" @mouseout="closeAllGame">
              <a>
                <span class="icon">&#xe64d;</span>
                <p>彩票中心</p>
              </a>
            </li>
            <li class="lottery_link">
              <a :href="isLogin && '/static/lottery-trend.html?id=11&w=1&q=50&chs=重庆时时彩'" target="_blank">
                <span class="icon">&#xe69e;</span>
                <p>走势图表</p>
                <!--<span class="icon">&#xe6bb;</span>-->
              </a>
            </li>
            <li class="" @click="openFunds">
              <a>
                <span class="icon">&#xe6a6;</span>
                <p>跟单大厅</p>
              </a>
            </li>
            <li @click="openFunds">
              <a>
                <span class="icon">&#xe6b3;</span>
                <p>积分商城</p>
              </a>
            </li>
            <li>
              <router-link to="/activity/1">
                <span class="icon">&#xe693;</span>
                <p>优惠活动</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {userInit, Prompt} from '../js/index.js';
  import {inArray, getNodes, Cookie} from '../js/common';

  let init = userInit();
  let oPrompt = Prompt();
  let gameClassifyArr = [
    {name : '时时彩', idArr: [11, 161, 151, 6, 119, 161, 51, 711, 811, 46, 203, 911, 205, 206, 191, 601]},
    {name : '菲律宾', idArr: [200, 201, 202]},
//    {name : '全天彩', idArr: []},
    {name : '11选5', idArr: [21, 22, 23, 24, 25, 26, 28]},
    {name : '低频彩', idArr: [41, 42]},
    {name : '其他', idArr: [204, 31, 32, 33, 34, 35, 36, 43, 47]},
    {name : '经典', idArr: [80, 85, 86, 87, 90, 100, 110]}
  ];

  export default {
    name: 'pageHeader',
    data() {
      return {
        msg: 'this is index',
        isCenterClick : false,
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
        isproxyContList: false,
        ishowAccountList: false,
        nickname: '获取中...',
        lotteryBalance: '',
        ishowBalance: false,
        lotteryBalance2: '',
        showNotice: false,
        istype:'',
        on_ff_id : 0,
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
        lottery: [],
        timer: null,
        timerAccount: null,
        timerproxy: null,
        userTime: '',
        promptList: [],
        PromptBox: localStorage.getItem('_isShowBox') === 'true',
        ispromptList: true,
        islogin: this.$store.state.isLogin === 'true',
        initlotteryBalanceTimer:null,
        dom:null,
        ishowAllGame:false,
        gameArr: [],
        // 彩票中心显示
        isOfficial: true
      };
    },
    created() {
      let _this = this;

      this.getGameData();
      setInterval(function() {
        init.initlotteryBalance(_this);
      }, 10000)
    },
    methods: {
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
          obj && obj.forEach(function(item) {
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
        this.timerproxy = setTimeout(function() {
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
      '$route' (to, form) {
        this.ishowAccountList = false;
        this.isproxyContList = false;
        //
      }
    },
    mounted () {
      let _this = this;
      window.addEventListener("resize", function () {
        _this.height = document.documentElement.clientHeight;
      });
      if (!this.islogin) {
        return false;
      }

      init.initUserInfo(this);
    },
    beforeCreate() {
      init.userInit(this);
      init.lotteyList(this, function (a) {
//                console.log(t.lottery, 'tttttttttttttttttttttttt');
      });
    },
    computed: {
      // 判断是否在密码设置页面
      isPswReset () {
        return this.$store.state.isPswReset;
      },
      noticeLen () {
        return this.$store.state.noticeLen;
      },
      stationNoticeLen () {
        return this.$store.state.stationNoticeLen;
      },
      isLogin () {
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
    background-color:#333
    position:relative
    color:#666
    .first_part
      width: main_width
      margin:0 auto
      height:36px
      .content_center
        margin: 0 auto
        font-size:12px
        .left_p
          float:left
          margin-top:7px
          height:22px
          line-height:22px
          border:1px solid #999
          radius(10px)
          padding: 0 5px
          setMiddle()
        .right_p
          float:right
          display:flex
          align-items:center
          height:36px
          padding:0 30px
          .width_border
            display:inline-block
            border-left:1px solid #dcdcdc
            height:14px
            line-height:14px
            margin: 0 10px
          >div
            float:left
            setMiddle()
          .say_hello
            position:relative
            .notice_state, .message_state
              a
                setMiddle()
                .icon
                  margin-right:4px
            .nickname
              setMiddle()
              min-width: 80px
              text-align:center
              .icon
                margin-right:4px
              .drop_down_list
                right:-40px
                top:30px
              .drop_down_content
                padding:5px 0
                width:140px
                li
                  a
                    display:block
                    height:40px
                    line-height:40px
                    &:hover
                      bgRed()
                      color()
            .notice_state, .message_state
              setMiddle()
              .num_count
                display:inline-block
                margin-left:3px
                bgRed()
                radius(50%)
                height: 14px
                line-height: 14px
                color:#fff
                width: 14px
            .balance
              height: 20px
              padding: 0 8px
              bgColor(#eee)
          .my_account
            position:relative
            .user_center
              position:absolute
              display:inline-block
              height:auto
              z-index:10
              left:-190px
              top: 35px
              background:url(imgPathPage + 'user_center.png') top center no-repeat
              bgCover()
              .user_show
                padding: 15px
                padding-top:20px
                padding-bottom:8px
                radius(10px)
                .big_ul
                  text-align:left
                  >li
                    width:425px
                    overflow:hidden
                    .left_float
                      float:left
                      margin-top:3px
                    >ul
                      float:right
                      font-size:0
                      width:368px
                      li
                        display:inline-block
                        width: 82px
                        height:30px
                        line-height: 30px
                        text-align:center
                        margin-left:10px
                        font-size:12px
                        radius(5px)
                        backgroundImg()
                        background-size:cover
                        gradientBlue()
                        margin-bottom:9px
                        &:hover
                          gradientRed()
                        a
                          color:#fff
          .balance
            display:flex
            align-items:center
            line-height:20px
            radius(5px)
            .money_part
              display:inline-block
              min-width:105px
              text-align:left
            .remaining
              margin-left:6px
            .refresh_icon
              height:18px
              line-height:18px
            .refreshBlance
              margin-left:5px
          .btn_arr
            .recharge, .deposit, .transfer, .balance_walet
              display:inline-block
              padding:0 6px
              height:20px
              line-height: 18px
              color:#fff
              background-repeat:no-repeat
              background-position:center center
              cursor:pointer
              font-size:12px
              radius(2px)
            .recharge
              bgColor(#60c986)
              margin-right:16px
            .deposit
              bgColor(#fd8e70)
            .transfer
              bgColor(#0089b3)
            .balance_walet
              bgColor(#d48b0b)
            .service
              a
                color:#fff
                padding-right:3px
          .exit_account
            padding: 0 6px
            height: 20px
            font-size:12px
            line-height: 20px;
            bgColor(#a6a9a0)
            color()
            radius(2px)
          .time_switch
            .slider_bar
              position:relative
              margin: 0 3px
              width: 42px
              height:20px
              line-height:20px
              radius(10px)
              bgColor(#00eb6b)
            .slider_ball
              position:absolute
              z-index:4
              height: 18px
              width: 18px
              top: 1px
              left:1px
              radius(50%)
              bgColor(#fff)
              cursor()
              transition: transform 0.5s ease;
              &.on
                transform:translateX(22px)
              .off
                transform:translateX(1px)
            .left_bar, .right_bar
              position:absolute
              z-index:3
              width:50%
              height:20px
              cursor()
            .left_bar
              left:0
              radiusLeft(50%)
            .right_bar
              right:0
              radiusRight(50%)
    .sec_part
      bgColor(#ff6a76)
      .sec_wrapper
        position:relative
        height:68px
        width:main_width
        margin:0 auto
        .downList
          padding-top:10px
          width:1200px
          background-size:100% 100%
          top:44px
          left:0
          padding-bottom:20px
          z-index:36
          .drop_down_arrow
            background-position:45% center
          .drop_down_content
            boxShadow(0 5px 10px 1px #666)
            padding-top:5px
            .downlist_top
              font-size:0
              text-align:center
              margin-bottom:5px
              span
                display:inline-block
                width: 76px
                height: 32px
                line-height:32px
                font-size:16px
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
                display:flex
                position:relative
                padding:10px 0
                align-items:center
                text-align:right
                justify-content:flex-start
                overflow:hidden
                .dotted_line
                  position:absolute
                  width:100%
                  bottom:0
                &:last-child
                  .dotted_line
                    display:none
                .lottery_img
                  width: 116px
                  h1
                    display:inline-block
                    vertical-align:middle
                    width: 60px
                    height: 60px
                    text-align:center
                    line-height:60px
                    radius(50%)
                    font-size:18px
                    font-weight:normal
                    color()
                    background-repeat:no-repeat
                    background-position:center
                  .header_lottery0
                    background-image:url(imgPathPage + 'header_lottery0.png')
                  .header_lottery1
                    background-image:url(imgPathPage + 'header_lottery2.png')
                  .header_lottery2
                    background-image:url(imgPathPage + 'header_lottery3.png')
                  .header_lottery3
                    background-image:url(imgPathPage + 'header_lottery4.png')
                  .header_lottery4
                    background-image:url(imgPathPage + 'header_lottery5.png')
                  .header_lottery5
                    background-image:url(imgPathPage + 'header_lottery6.png')
                  .classical_lottery
                    background-image:url(imgPathPage + 'header_lottery6.png')
                ul
                  text-align:left
                  width:1080px
                  li
                    display:inline-block
                    line-height: 30px
                    text-align:center
                    cursor: pointer
                    font-size:16px
                    radius(5px)
                    bgGrey()
                    margin:9px 16px
                    &:hover
                      background-image: -webkit-linear-gradient(to bottom, #e7556e 0, #f95867 100%);
                      background-image:linear-gradient(to bottom, #e7556e 0, #f95867 100%);
                      bgColor(red)
                      a
                        color:#fff
                    a
                      display:inline-block
                      width:100%
                      height:100%
                      padding:2px 8px
                      color: #636363
        .logo
          float:left
          width:244px
          height:100%
          bgNormal(imgPathCommit + 'logo.png')
          .logo_bg
            display:inline-block
            height:100%
            width:100%
        .ul_right
          float:right
          height:100%
          ul
            overflow:hidden
            margin-top:20px
            align-items:center
            vertical-align:middle
            li
              display:inline-block
              padding:0 10px
              radius(5px)
              height:30px
              cursor()
              font-size:18px
              margin:0 15px
              color:#fff
              span
                margin-right:5px
              &.active
                radius(15px)
                bgColor()
                color:text_color
              a
                display:flex
                align-items:center
                width: 100%
                height:100%
            .index
              a
                justify-content:center
</style>
