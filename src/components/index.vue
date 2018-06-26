<template>
  <div class="index_main">
    <div class="index_wrapper">
      <div class="index_content">
        <div class="first_content content_top">
          <div class="new_notice left_content standard_frame">
            <div class="login_show_notice">
              <div class="cont_title">
                <div class="notice_title">
                  <span class="icon">&#xe6ac;</span>
                  <i class="fz16">平台公告</i>
                </div>
                <router-link to="/game-notice/0" v-show="isLogin">more&gt;</router-link>
              </div>
              <h1 class="first_title" v-show="!isLogin">
                <span>{{promptList[0] && promptList[0].title}}</span>
              </h1>
              <h1 class="first_title" v-show="isLogin">
                <span><router-link to="/game-notice/0">{{promptList[0] && promptList[0].title}}</router-link></span>
              </h1>
              <div class="notice_cont" v-show="!isLogin">
                <div class="notice_exsit">
                  <div class="dotted_line"></div>
                  <div class="notice">
                    <div class="slider-item"  v-for="(item, index) in promptList"  v-if="index < 4">
                      <a href="/game-notice/0">
                        <i class="notice_body">{{item.title}}</i>
                        <i class="notice_time">【{{item.time | monthDay}}】</i>
                      </a>
                      <div class="dotted_line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="notice_cont" v-show="isLogin">
                <div class="notice_exsit" v-show="promptList.length > 1">
                  <div class="dotted_line"></div>
                  <div class="notice">
                    <div class="slider-item"  v-for="(item, index) in promptList"  v-if="index < 5 && index > 0">
                      <router-link :to="noticeLnk(index)">
                        <i class="notice_body">{{item.title}}</i>
                        <i class="notice_time">【{{item.time | monthDay}}】</i>
                      </router-link>
                      <div class="dotted_line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center_content center_banner">
            <div class="swiper-container banner-swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to="/activity/1">
                        <img src="/static/img/newyear.jpg">
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/activity/1">
                        <img src="../img/index/banner0.jpg">
                    </router-link>
                </div>
                <div class="swiper-slide">
                  <router-link to="/activity/1">
                    <img src="../img/index/banner1.jpg">
                  </router-link>
                </div>
                <div class="swiper-slide">
                  <a href="/static/lt.html#200" target="_blank">
                    <img src="../img/index/banner2.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <router-link to="/activity/1">
                    <img src="../img/index/banner3.jpg">
                  </router-link>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="right_content login_part standard_frame">
            <component :is="currentRoute" ref="dybox"></component>
          </div>
        </div>
        <div class="sec_content">
          <div class="left_content sec_left">
            <div class="common_title">
              <div class="common_color">
                <span class="icon">&#xe6b8;</span>
                <i class="">人气跟单</i>
              </div>
              <a class="no_important" @click="openFunds">more></a>
            </div>
            <div class="follow_list">
              <div class="mask_cover"></div>
              <ul>
                <li>
                  <div class="fl">
                    <div class="user_name_r">发起人：
                      <span>空城追击</span>
                    </div>
                    <i class="lottery_info">重庆时时彩/后三单式直选</i>
                    <div>
                      金额 : <i class="common_color">56515.00元</i>
                    </div>
                  </div>
                  <div class="fr">
                    <div class="user_grade">
                      <span class="icon"></span>
                      <i>计划宗师</i>
                    </div>
                    <i>00 : 06 : 35</i>
                    <div>
                      <router-link to="/hotLottery">跟单</router-link>
                      <a>关注</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fl">
                    <div class="user_name_r">发起人：
                      <span>空城追击</span>
                    </div>
                    <i class="lottery_info">重庆时时彩/后三单式直选</i>
                    <div>
                      金额 : <i class="common_color">56515.00元</i>
                    </div>
                  </div>
                  <div class="fr">
                    <div class="user_grade">
                      <span class="icon"></span>
                      <i>计划宗师</i>
                    </div>
                    <i>00 : 06 : 35</i>
                    <div>
                      <router-link to="/hotLottery">跟单</router-link>
                      <a>关注</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fl">
                    <div class="user_name_r">发起人：
                      <span>空城追击</span>
                    </div>
                    <i class="lottery_info">重庆时时彩/后三单式直选</i>
                    <div>
                      金额 : <i class="common_color">56515.00元</i>
                    </div>
                  </div>
                  <div class="fr">
                    <div class="user_grade">
                      <span class="icon"></span>
                      <i>计划宗师</i>
                    </div>
                    <i>00 : 06 : 35</i>
                    <div>
                      <router-link to="/hotLottery">跟单</router-link>
                      <a>关注</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fl">
                    <div class="user_name_r">发起人：
                      <span>空城追击</span>
                    </div>
                    <i class="lottery_info">重庆时时彩/后三单式直选</i>
                    <div>
                      金额 : <i class="common_color">56515.00元</i>
                    </div>
                  </div>
                  <div class="fr">
                    <div class="user_grade">
                      <span class="icon"></span>
                      <i>计划宗师</i>
                    </div>
                    <i>00 : 06 : 35</i>
                    <div>
                      <router-link to="/hotLottery">跟单</router-link>
                      <a>关注</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fl">
                    <div class="user_name_r">发起人：
                      <span>空城追击</span>
                    </div>
                    <i class="lottery_info">重庆时时彩/后三单式直选</i>
                    <div>
                      金额 : <i class="common_color">56515.00元</i>
                    </div>
                  </div>
                  <div class="fr">
                    <div class="user_grade">
                      <span class="icon"></span>
                      <i>计划宗师</i>
                    </div>
                    <i>00 : 06 : 35</i>
                    <div>
                      <router-link to="/hotLottery">跟单</router-link>
                      <a>关注</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="center_content sec_center">
            <div class="hot_lottery_list">
              <div class="common_title">
                <div class="common_color">
                  <span class="icon">&#xe686;</span>
                  <i class="">热门彩票</i>
                </div>
                <a href='static/lt.html#11' class="no_important">more></a>
              </div>
              <div class="lottery_list">
                <ul v-show="isLogin">
                  <li v-for="(value, key) in lotteryList">
                    <div class="li_wraper">
                      <a :href="((value.id == 85 || value.id == 86 || value.id == 87)? '/yx/xjw/v/lottery/'+ value.id+'.html':'/static/lt.html#'+ value.id)"  target="_self" :class="'a' + key">
                        <div class="lottery_img" :class="value.code | firstLetterChange"></div>
                      </a>
                      <span>{{value.showName}}</span>
                    </div>
                  </li>
                </ul>
                <ul v-show="!isLogin">
                  <li>
                    <div class="li_wraper">
                      <a class="a0">
                        <div class="lottery_img CQSSC"></div>
                      </a>
                      <span>重庆时时彩</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a1">
                        <div class="lottery_img GD11Y"></div>
                      </a>
                      <span>广东11选5</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a2">
                        <div class="lottery_img A3DFC"></div>
                      </a>
                      <span>3D福彩</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a3">
                        <div class="lottery_img ZY11Y"></div>
                      </a>
                      <span>槟城11选5</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a4">
                        <div class="lottery_img TGSSC"></div>
                      </a>
                      <span>新德里1.5分彩</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a5">
                        <div class="lottery_img JX11Y"></div>
                      </a>
                      <span>江西11选5</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a6">
                        <div class="lottery_img XJSSC"></div>
                      </a>
                      <span>新疆时时彩</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a7">
                        <div class="lottery_img SD11Y"></div>
                      </a>
                      <span>山东11选5</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a8">
                        <div class="lottery_img ZYFFSSC"></div>
                      </a>
                      <span>夏威夷分分彩</span>
                    </div>
                  </li>
                  <li>
                    <div class="li_wraper">
                      <a class="a9">
                        <div class="lottery_img pl3"></div>
                      </a>
                      <span>排列三/排列五</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lottery_trivial">
              <div class="lottery_pool">
                <div class="common_title">
                  <div class="common_color">
                    <span class="icon">&#xe6b5;</span>
                    <i class="">奖池</i>
                  </div>
                </div>
                <div class="pool_detail">
                  <div class="call_title">
                    <h1>巨额奖池 谁来清空</h1>
                    <a href='static/lt.html#11'>
                      <i>详情</i>
                      <span class="">&gt;</span>
                    </a>
                  </div>
                  <div class="gif_light"></div>
                  <div class="randon_machine">
                    <ul>
                      <li><span :style="{marginTop : positionArr[0]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[1]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[2]}">0123456789</span></li>
                      <li class="punctuation">,</li>
                      <li><span :style="{marginTop : positionArr[3]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[4]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[5]}">0123456789</span></li>
                      <li class="punctuation">,</li>
                      <li><span :style="{marginTop : positionArr[6]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[7]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[8]}">0123456789</span></li>
                      <li class="punctuation">.</li>
                      <li><span :style="{marginTop : positionArr[9]}">0123456789</span></li>
                      <li><span :style="{marginTop : positionArr[10]}">0123456789</span></li>
                    </ul>
                  </div>
                  <a href='static/lt.html#11' class="have_a_try">
                    <span class="icon">&#xe6bd;</span>
                    <i class="">试试手气</i>
                  </a>
                </div>
              </div>
              <ul class="lottery_process">
                <li class="how_recharge">
                  <router-link to="/aboutUs#4">
                    <div class="icon">&#xe6ba;</div>
                    <i>如何充值</i>
                  </router-link>
                </li>
                <li class="how_deposit">
                  <router-link to="/aboutUs#4">
                    <div class="icon">&#xe6b7;</div>
                    <i>如何提款</i>
                  </router-link>
                </li>
                <li class="psw_change">
                  <router-link to="/aboutUs#4">
                    <div class="icon">&#xe64b;</div>
                    <i>如何改密码</i>
                  </router-link>
                </li>
              </ul>
              <ul class="help_cont">
                <li class="how_register">
                  <router-link to="/aboutUs#4">
                    <div class="icon">&#xe6b9;</div>
                    <i>如何注册</i>
                  </router-link>
                </li>
                <li class="learn_more">
                  <router-link to="/aboutUs#0">
                    <div class="icon">&#xe6a9;</div>
                    <i>更多</i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="right_content sec_right">
            <div class="yesterday_won">
              <div class="red_wave_bg">
                <span class="icon">&#xe6b6;</span>
                <i class="fz16">昨日中奖排行</i>
              </div>
              <ul id="lotteryOpenObj">
                <li >
                  <div class="medal gold_medal">
                    <span>1</span>
                  </div>
                  <div class="won_detail">
                    <div>
                      账号: <i class="common_color">{{randomNames[0]}}</i>
                    </div>
                    <div>
                      总奖金： ¥<i class="common_color">{{numArr1[2]}}</i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="medal silver_medal">
                    <span></span>
                  </div>
                  <div class="won_detail">
                    <div>
                      账号: <i class="common_color">{{randomNames[1]}}</i>
                    </div>
                    <div>
                      总奖金： ¥<i class="common_color">{{numArr1[1]}}</i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="medal copper_medal">
                    <span></span>
                  </div>
                  <div class="won_detail">
                    <div>
                      账号: <i class="common_color">{{randomNames[2]}}</i>
                    </div>
                    <div>
                      总奖金： ¥<i class="common_color">{{numArr1[0]}}</i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="today_won">
              <div class="title">
                <span class="icon">&#xe69c;</span>
                <i>今日中奖排行</i>
              </div>
              <ul>
                <li>
                  <div class="medal gold_star">
                    <span>1</span>
                  </div>
                  <div class="won_detail">
                    <div>
                      账号: <i class="common_color">{{randomNames[3]}}</i>
                    </div>
                    <div>
                      总奖金： ¥<i class="common_color">{{numArr2[2]}}</i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="medal silver_star">
                    <span>2</span>
                  </div>
                  <div class="won_detail">
                    <div>
                      账号: <i class="common_color">{{randomNames[4]}}</i>
                    </div>
                    <div>
                      总奖金： ¥<i class="common_color">{{numArr2[1]}}</i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="medal copper_star">
                    <span>3</span>
                  </div>
                  <div class="won_detail">
                    <div>
                      账号: <i class="common_color">{{randomNames[5]}}</i>
                    </div>
                    <div>
                      总奖金： ¥<i class="common_color">{{numArr2[0]}}</i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="third_content">
          <div class="left_content">
            <ul>
              <li>
                <span class="icon">&#xe6ba;</span>
                <i>充值提现: </i>
                <span class="safe_state">正常</span>
              </li>
              <li>
                <span class="icon">&#xe689;</span>
                <i>网络状态: </i>
                <SecurityBar percent="100" class="net_state"></SecurityBar>
                <span class="safe_state">优</span>
              </li>
              <li>
                <span class="icon">&#xe6c1;</span>
                <i>网站状态: </i>
                <SecurityBar percent="80" class="website_state net_state"></SecurityBar>
                <span class="safe_state">良</span>
              </li>
              <li>
                <span class="icon">&#xe69d;</span>
                <i>资金状态: </i>
                <span class="icon safe_state">&#xe69f;</span>
                <span class="safe_state">正常</span>
              </li>
            </ul>
          </div>
          <div class="mobile_download"></div>
        </div>
      </div>
    </div>
    <PersonalDetails ref="detail_component" :class="[isShowInfo ? 'visible' : 'hidden']"></PersonalDetails>
    <div class="gapten"></div>
  </div>
</template>
<script>
  import Login from './login';
  import Register from './register';
  import UserInfo from './userInfo';
  import PersonalDetails from './personalDetails';
  import SecurityBar from './securityBar';
  import {userInit, Prompt, loginInit, noticeInit} from '../js/index.js';
  import {inArray, getNodes, browserType} from '../js/common.js';
  import base from '../js/pubilc.js';

  let oPrompt = Prompt();
  let init = loginInit();
  let randomCont = base.lotteryinit();

  let gameClassifyArr = [
    {name : '时时彩', idArr: [11, 161, 151]},
    {name : '官方时时彩', idArr: [911, 205, 206, 191, 601]},
    {name : '菲律宾', idArr: [200, 201, 202]},
    {name : '全天彩', idArr: []},
    {name : '11选5', idArr: [21, 22, 23, 24, 26, 28]},
    {name : '低频彩', idArr: [41]},
    {name : '趣味彩', idArr: [204]}
  ];
  let a = [
    {title:'ssssss', time:'174564564', content:'必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。 '},
    {title:'ssssss', time:'174564564', content:'ssssssssssssssssssasddeeeeeeeeeeeeeeeeeeeeeeeeeeess'},
    {title:'ssssss', time:'174564564', content:'sssssssssssssssssssssssssssssssssssssssssss'},
    {title:'ssssss', time:'174564564', content:'ssssssssssssssssssssssssssssssssssssssssss'},
    {title:'ssssss', time:'174564564', content:'sssssssssssssssssssssssssssssss'},
    {title:'ssssss', time:'174564564', content:'sssssssssssssssssssss'},
    {title:'ssssss', time:'174564564', content:'3.-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。 '}];
    let randomNumFunc = function () {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(Math.round(Math.random() * (100000 - 100)))
        }
        arr.sort();
        return arr;
    }
  export default {
    data() {
      return {
        positionArr: [],
        height: document.documentElement.clientHeight,
        isShowMore: false,
        activeIdx: 0,
        currentRoute: 'Login',
        gameArr: [],
        isShowInfo : false,
        ishowAllGame: false,
        promptList : [],
        event : null,
        lotteryOpenList:[],
        swiperOption3: {
          direction: 'vertical',
          autoplay: 3000,
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: true
        },
          randomNames:[],
          numArr1: [],
          numArr2: []
      }
    },
    computed: {
      isLogin () {
        if (this.$store.state.isLogin === 'true') {
          noticeInit().init(this);
          return true;
        } else {
          this.getUnloginNotice();
          return false;
        }
      },
      lotteryList() {
        if (this.$store.state.isLogin === 'true') {
          return this.$store.state.allLotteryList;
        }
      },
    },
    created() {
      let that = this;
      let timer = setInterval(function() {
        that.positionArr = [];
        that.random_num(11);
      }, 3000);
      this.getGameData();
      this.checkUrl();
    },
    watch: {
      '$route'(to, from) {
        this.checkUrl();
      }
    },
    methods: {
      show_reg:function() {
        if (typeof this.$refs.dybox.show_reg !='undefined') {
          this.$refs.dybox.show_reg();  
        }
      },
      needlogin() {
        oPrompt({
          idx: "boxwarps",
          message: "请先登录"
        });
      },
      // 公告链接，未登录时不需要链接
      noticeLnk:function(index) {
        var _t = this;
        if (_t.isLogin) {
          return '/game-notice/' + index;
        }
        return '';
      },
      // 绑定的提示框鼠标移入事件
      show_tip (e) {
        let detailComponent = this.$refs.detail_component;
        this.isShowInfo = true;
        detailComponent.getPosition(e);
        this.$store.commit('setPersonalDetail', e)
      },
      // 绑定的提示框鼠标移出事件
      tip_leave () {
        this.isShowInfo = false;
        this.$store.commit('initPersonalDetail');
      },
      // 获取未登录时最新公告
      getUnloginNotice () {
        let that = this;

        this.$http.get('/json/notice.json'
        ).then((response) => {
          let data = response.data && response.data.data;

          if (data && (data.length > 0)) {
            that.promptList = data || [{title : '无数据'}];
          }
        })
      },
      // 展开所有游戏
      openAllGame () {
        this.ishowAllGame = true;
      },
      closeAllGame() {
        this.ishowAllGame = false;
      },
      // 获取彩种列表
      getGameData() {
        let that = this;
        this.$http.post('/yx/u/api/game-lottery/openLotterys'
        ).then((response) => {
          let obj = response.body.data;

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
      routerLink(url, idx) {
        this.activeIdx = idx;
        this.$router.push(url);
      },
      // 首字母大写
      firstUpperCase(letter) {
        let arr = letter.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
      },
      openFunds() {
        oPrompt({
          idx: "boxwarps",
          message: "敬请期待"
        });
      },
      checkUrl() {
        let isAreadyLogin =  localStorage.getItem('_status') === 'true';
        let path = window.location.pathname.slice(1);

        if (path.indexOf('login') > -1) {
          this.currentRoute = 'Login';
        } else if (path.indexOf('register') > -1) {
          this.currentRoute = 'Register';
        } else if (path.indexOf('index') > -1) {
          this.currentRoute = isAreadyLogin ? 'UserInfo' : 'Login';
        } else {
          this.currentRoute = 'index';
        }
      },
      // 随机产生获奖数字
      random_num (countNum) {
        for (let i = 0; i < countNum; i++) {
          let position = parseInt(Math.random() * 10);

          this.positionArr.push(position * (-36) + 'px');
        }
      },
        showNumName () {
            this.randomNames=[
                randomCont.getName(7, 11),
                randomCont.getName(8, 12),
                randomCont.getName(9, 13),
                randomCont.getName(8, 12),
                randomCont.getName(8, 12),
                randomCont.getName(8, 12),
            ];
            this.numArr1 = randomNumFunc();
            this.numArr2 = randomNumFunc();
        }
    },
    mounted () {
      let option = {};
      let self = this;
      if (browserType().name !== 'IE') {
        option = {
          loop: true,
          autoplay: 3000,
          effect: 'cube',
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          pagination : '.swiper-pagination',
          paginationClickable :true
        }
      } else {
        option = {
          loop: true,
          autoplay: 3000,
//          effect: 'cube',
//          grabCursor: true,
//          cubeEffect: {
//            shadow: true,
//            slideShadows: true,
//            shadowOffset: 20,
//            shadowScale: 0.94
//          },
//          pagination : '.swiper-pagination',
//          paginationClickable :true
        }
      }
      new Swiper('.banner-swiper', option);
        this.showNumName ();
      setInterval(function () {
        self.showNumName ();
      }, 10000)

    },
    components: {
      Login,
      Register,
      UserInfo,
      SecurityBar,
      PersonalDetails
    }
  };
</script>

<style lang="stylus">
  @import "../css/stylus/index.styl";
  .visible
    visibility:visible
  .hidden
    visibility:hidden

  .component-fade-enter-active, .component-fade-leave-active
    transition: opacity 4s ease

  .component-fade-enter, .component-fade-leave-to
    opacity: 0

  .first_content, .sec_content, .third_content
    display:flex
    justify-content:space-between

  .left_content, .center_content, .right_content
    height:100%
  .left_content
    width:282px
  .center_content
    width: 690px
  .right_content
    width:206px

  .red_wave_bg
    letter-spacing: 3px
    padding: 10px 0
    background-image:url(imgPathIndex + 'notice_top.png')
    background-repeat:no-repeat
    background-position:center top
    color()

  .common_title
    display:flex
    border-bottom:1px solid #dcdddd
    height: 40px
    padding: 0 10px
    align-items:center
    justify-content:space-between
    a
      font-size:12px
      color(unimportant_color)
      cursor()

  .safe_state
    color(#4db051)
</style>
<style lang='stylus'>
  @import "../css/stylus/index.styl";

  .common_title
    div
      font-size:16px

  .index_main
    min-height:900px
    padding-bottom:0px
    background-image:url(imgPathIndex + 'index_bg.png')
    .index_wrapper
      width: main_width
      margin: 0 auto
      padding-top:10px
      .index_content
        .first_content
          align-items: flex-start
          .standard_frame
            padding-bottom:4px
            background:url(imgPathIndex + 'wave_bg1.png') bottom center no-repeat
            background-size:cover
            position:relative
            height: 264px
            .cont_title
              position:relative
              letter-spacing: 3px
              padding: 10px 0
              background-image:url(imgPathIndex + 'notice_top.png')
              background-repeat:no-repeat
              background-position:center top
              color()
          .new_notice
            .login_show_notice
              position:relative
              .cont_title
                height:92px
                bgColor(#fff1f2)
                .notice_title
                  margin-bottom:20px
                a
                  position:absolute
                  right: 0
                  top:10px
                  font-size:12px
              h1
                position:absolute
                top:55px
                padding:0 3px
                font-size:18px
                width:100%
                text-align:center
                color(text_color)
                font-weight:normal
                letter-spacing:0
                ellipsis()
              .notice_cont
                bgColor()
                .notice_exsit
                  position:relative
                  .notice
                    height:144px
                    .slider-item
                      line-height:34px
                      a
                        display: block
                        overflow: hidden
                        white-space: nowrap
                        text-overflow: ellipsis
                        font-size: 12px
                        .notice_body
                          width:180px
                          float:left
                          text-align:left
                          padding-left:5px
                          ellipsis()
                        .notice_time
                          color:#c9caca
                          float:right
                          margin-right:4px
              /*position: absolute
              z-index: 5
              top: 10px
              left: 8px
              li
                width: 212px
                height: 75px
                background-position: center center
                background-repeat: no-repeat
                margin-bottom:10px
                cursor:pointer
                transition: 0.5s
                &:hover
                  transform:scale(1.1)
              .donate
                background-image: url(imgPathIndex + 'donate.png')
              .more_activity
                background-image: url(imgPathIndex + 'more_activity.png')
                a
                  display:inline-block
                  width: 100%
                  height:100%
              .coming_soon
                background-image: url(imgPathIndex + 'coming_soon.png')*/
          .login_part
            .cont_title
              margin-bottom:20px
          .center_banner
            height:264px
            overflow:hidden
            .banner-swiper
              margin-top:-3px
              .swiper-pagination
                bottom:-30px
                .swiper-pagination-bullet
                  bgColor(#fff)
                  opacity:1
                .swiper-pagination-bullet-active
                  bgColor(#5ec2e7)
                  opacity:1
        .sec_content
          margin-top:15px
          align-items:center
          height:520px
          >div
            bgColor()
          .sec_left
            .follow_list
              position:relative
              height: 480px
              color:#999
              .mask_cover
                position:absolute
                top: 0
                left: 0
                right: 0
                bottom:0
                z-index:0
                bgColor(rgba(0,0,0,0.3))
              >ul
                display:flex
                height:100%
                flex-direction:column
                padding:0 10px
                >li
                  height:20%
                  border-bottom:1px solid #dcdddd
                  /*overflow:hidden*/
                  font-size:14px
                  &:last-child
                    border:none
                  >div
                    display:flex
                    flex-direction:column
                    line-height:30px
                  .fl
                    text-align:left
                    .user_name_r
                      position:relative
                      color:#333
                      cursor()
                      &:hover
                        .personal_detail
                          visibility:visible
                      .personal_detail
                        /*visibility:hidden*/
                  .fr
                    .user_grade
                      color:#e39300
                    a
                      color(#118ee5)
                      margin:0 2px
                      border-bottom:1px solid #118ee5
                      cursor()
          .sec_center
            background-color:transparent
            .hot_lottery_list
              bgColor()
              .lottery_list
                height:256px
                ul
                  font-size: 0
                  overflow:hidden
                  li
                    float:left
                    font-size:14px
                    height:128px
                    width:20%
                    .li_wraper
                      display:flex
                      justify-content:center
                      align-items: center
                      height:100%
                      flex-direction:column
                      a
                        width: 82px
                        height: 82px
                        line-height:82px
                        radius(15px)
                        margin: 0 auto
                        bgRed()
                        .lottery_img
                          height:50px
                          margin-left: 14px
                          margin-top:14px
                          bgNormal(imgPathIndex + 'alllogos_white.png')
                          background-size:1000px 333px
                        .BJLE
                          background-position:0 -40px
                        .CQSSC
                          background-position:-15px -115px
                        .GD11Y
                          background-position:-585px -115px
                        .A3DFC
                          background-position:-661px -214px
                        .ZY11Y
                          background-position:-420px -115px
                        .TGSSC
                          background-position:-348px -25px
                        .JX11Y
                          background-position:-663px -115px
                        .XJSSC
                          background-position:-179px -115px
                        .SD11Y
                          background-position:-504px -115px
                        .ZYFFSSC
                          background-position:-183px -25px
                        .pl3
                          background-position:-585px -213px
                        .JSK3
                          background-position:-8px -210px
                        .SH11Y
                          background-position:-743px -217px
                        .TJSSC
                          background-position:-95px -217px
                        .HGSSC
                          background-position:-433px -25px
                        .BJPK10
                          background-position:-509px -217px
                        .XJPSSC
                          background-position:-663px -25px
                        .DJSSC
                          background-position:-517px -25px
                        .BJKL8SSC
                          background-position:-258px -115px
                        .JS11Y
                          background-position:-822px -115px
                        .TXSSC
                          background-position:-105px -25px
                        .TG30SSC
                          background-position:-18px -25px
                        .XYFTPK10
                          background-position:-818px -207px
                        .FLB15SSC
                          background-position:-264px -25px
                        .FLB2SSC
                          background-position:-735px -25px
                        .FLB5SSC
                          background-position:-814px -25px
                        .LD2SSC
                          background-position:-587px -25px
                        .AKLPK10
                          background-position:-416px -213px
                        .SHOUERSSC
                          background-position:-738px -217px
                        .NEWYOSSC
                          background-position:-886px -217px
                        .FLB15SSCXJW
                          background-position: -264px -25px;
                        .FLB2SSCXJW
                          background-position: -738px -25px;
                        .FLB5SSCXJW
                          background-position: -813px -25px;
                      .a0
                        background:-webkit-linear-gradient(top,#6e87d7,#48c6ef)
                        gradientIE(1,#6e87d7,#48c6ef)
                      .a1
                        background:-webkit-linear-gradient(top,#f78de1,#f7bf4b)
                      .a2
                        background:-webkit-linear-gradient(top,#f9c1ea,#a38dd2)
                      .a3
                        background:-webkit-linear-gradient(top,#84e6b5,#8582d3)
                      .a4
                        background:-webkit-linear-gradient(top,#00dcc2,#0097e9)
                      .a5
                        background:-webkit-linear-gradient(top,#04c3d9,#4ede86)
                      .a6
                          background:-webkit-linear-gradient(top,#66dfd0,#239ffd)
                      .a7
                        background:-webkit-linear-gradient(top,#ff9349,#fc6274)
                      .a8
                        background:-webkit-linear-gradient(top,#e5ca53,#fc6473)
                      .a9
                        background:-webkit-linear-gradient(top,#fe5295,#f77063)
            .lottery_trivial
              display:flex
              justify-content: space-between
              height:210px
              margin-top:15px
              .lottery_pool
                width:432px
                bgColor()
                .common_title
                  border:none
                .pool_detail
                  height:170px
                  padding:0 14px
                  bgFull(imgPathIndex + "lottery_pool.png")
                  .call_title
                    position:relative
                    h1
                      font-size: 32px
                      color()
                      text-overflow:inset 5px 5px 5px #f9d6f5
                    a
                      position:absolute
                      right: 0
                      top:15px
                      color()
                      cursor()
                  .gif_light
                    height:32px
                    bgNormal(imgPathIndex + 'gif_light.png')
                  .randon_machine
                    width:380px
                    height:43px
                    margin:0 auto
                    padding:3px 6px
                    bgAll(imgPathIndex + 'random_machine.png')
                    overflow:hidden
                    font-size:0
                    li
                      float:left
                      font-size:14px
                      radius(2px)
                      width: 28px
                      overflow:hidden
                      height:36px
                      line-height:36px
                      font-weight:600
                      background-image:-webkit-linear-gradient(top,#e3815f 5%,#fff 50%,#ffefe9 50%,#f89378 100%)
                      boxShadow(0 0 20px 1px #dd6b56)
                      margin-right:3px
                      color(#7f264d)
                      &:last-child
                        margin-right:0
                      span
                        display:block
                        word-wrap:break-word
                        padding:0 8px
                        transition:1s
                    .punctuation
                      width:7px
                      padding-top:8px
                      color()
                      boxShadow:none
                      background-image:none
                  .have_a_try
                    display:inline-block
                    margin: 0 auto
                    margin-top:10px
                    line-height:30px
                    height: 30px
                    width:130px
                    bgColor(#fff8eb)
                    font-size:18px
                    color(#e5653f)
                    radius(2px)
              .lottery_process, .help_cont
                display:flex
                flex-direction:column
                li
                  flex:1
                  opacity:0.6
                  margin-bottom: 10px
                  cursor()
                  &:last-child
                    margin:0
                  a
                    opacity:1
                    color()
                    height:100%
                    .icon
                      font-size:26px
              .lottery_process
                width: 120px
                li
                  background-size:100%
                  background-size:100%
                  .icon
                    padding-top:5px
                    line-height:34px
                .how_recharge
                  bgNormal(imgPathIndex + 'to_recharge.png')
                .how_deposit
                  bgNormal(imgPathIndex + 'to_deposit.png')
                .psw_change
                  bgNormal(imgPathIndex + 'to_change.png')
              .help_cont
                width:120px
                li
                  background-size:100%
                  background-size:100%
                  .icon
                    padding-top:20px
                .how_register
                  bgNormal(imgPathIndex + 'to_register.png')
                .learn_more
                  bgNormal(imgPathIndex + 'learn_more.png')
          .sec_right
            background:url(imgPathIndex + 'bg_white.png') center center no-repeat
            background-size:100% 100%
            .yesterday_won, .today_won
              height:50%
              ul
                li
                  width:100%
                  setMiddle()
                  height:68px
                  .medal
                    width: 29px
                    height:33px
                    margin-right:10px
                    span
                      display:inline-block
                      font-size: 12px
                      margin-top:2px
                      color:#999
                  .gold_medal
                    bgNormal(imgPathIndex + 'gold_medal.png')
                    span
                      margin-top:4px
                      margin-left:2px
                  .silver_medal
                    bgNormal(imgPathIndex + 'silver_medal.png')
                  .copper_medal
                    bgNormal(imgPathIndex + 'copper_medal.png')
                  .won_detail
                    text-align:left
            .today_won
              padding-top:20px
              .title
                font-weight:bold
              ul
                li
                  .medal
                    width: 29px
                    height:33px
                    margin-right:10px
                    background-repeat:no-repeat
                    background-position:center center
                    span
                      display:inline-block
                      font-size: 12px
                      margin-top:8px
                      color:#999
                  .gold_star
                    background-image:url(imgPathIndex + 'gold_star.png')
                  .silver_star
                    background-image:url(imgPathIndex + 'silver_star.png')
                  .copper_star
                    background-image:url(imgPathIndex + 'copper_star.png')
        .third_content
          margin-top:10px
          height: 140px
          bgColor()
          .left_content
            padding:16px 22px
            ul
              li
                display:flex
                height: 30px
                justify-content:flex-start
                align-items:center
                span
                  &:first-child
                    color:#ca9a8f
                .net_state
                  width:113px
                  margin-right:5px
                i
                  margin:0 10px
          .mobile_download
            width:900px
            bgNormal(imgPathIndex + 'downLoad_relative.png')
</style>
