<template>
  <div class="index_newmain">
    <div class="fullbanner">
      <swiper :options="bannerOption">
        <swiper-slide class="banner1"></swiper-slide>
        <swiper-slide class="banner2"></swiper-slide>
        <swiper-slide class="banner3"></swiper-slide>
        <swiper-slide class="banner4"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="top-prev swiper-button-prev" slot="button-prev"></div>
        <div class="top-next swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="bottom_notice">
        <div class="fix_ico"><em class="icon">&#xe6ac;</em></div>
        <div class="fix_ico fix_right"><em class="icon">&#xe60b;</em></div>
        <swiper :options="noticeOption" class="notice_box">
          <swiper-slide  v-for="item in notices"><marquee direction="left" class="fl_right gonggao">{{item.c}}</marquee></swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"><slot name="button-prev"><em class="icon">&#xe60e;</em></slot></div>
          <div class="swiper-button-next" slot="button-next"><slot name="button-next"><em class="icon">&#xe60f;</em></slot></div>
        </swiper>
      </div>
    </div>
    <div class="gapten"></div>
    <div class="innerquick clearfix">
      <div class="lf">
        <div class="quickimg">
          <ul>
            <li><a href="/static/lt.html#11" target="_blank"><img src="../img/index/new/game1.png" alt="" width="" height="" /></a></li>
            <li><a href="/static/lt.html#201" target="_blank"><img src="../img/index/new/game2.png" alt="" width="" height="" /></a></li>
            <li><a href="/static/lt.html#35" target="_blank"><img src="../img/index/new/game3.png" alt="" width="" height="" /></a></li>
            <li><a href="/static/lt.html#911" target="_blank"><img src="../img/index/new/game4.png" alt="" width="" height="" /></a></li>
          </ul> 
        </div>
        <div class="links">
          <ul class="clearfix">
            <li class="links_tag">
              <a :class="ison" @click="chgClassic(0)">官方玩法</a><span class="gapin"></span><a :class="isoff" @click="chgClassic(1)">经典玩法</a>
            </li>
            <li class="links_middle" v-show="!isclassic">
              <h3>时时彩</h3>
              <ol class="inlst">
                <li v-for="item in getssc_after_filter"><a :href="fulllnk(item.id)" target="_blank">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
              
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>菲律宾</h3>
              <ol class="inlst">
                <li v-for="item in getflb_after_filter"><a :href="fulllnk(item.id)" target="_blank">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>十一选五</h3>
              <ol class="inlst">
                <li v-for="item in getxuan_after_filter"><a :href="fulllnk(item.id)" target="_blank">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>低频彩</h3>
              <ol class="inlst">
                <li v-for="item in getlow_after_filter"><a :href="fulllnk(item.id)" target="_blank">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol> 
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>其他</h3>
              <ol class="inlst">
                <li v-for="item in getother_after_filter"><a :href="fulllnk(item.id)" target="_blank">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol> 
            </li>
            <li class="links_wide" v-show="isclassic">
              <h3>经典</h3>
              <ol class="inlst">
                <li v-for="item in getclassic_after_filter"><a :href="pkfulllnk(item.id)" target="_blank">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol> 
            </li>
          </ul>
        </div>
      </div>
      <div class="rf">
        <img src="../img/index/new/ma.png" alt="" width="" height="" />
        <div class="paihang_open">
          <a class="hand"><em class="icon">&#xe7d0;</em>进入游戏</a>
        </div>
      </div>
    </div>
    <div class="gapten"></div>
    <div class="hotrend">
      <h3>热门跟单 <span class="rf"><em class="icon">&#xe64c;</em>••<i class="on">•</i><em class="icon on">&#xe628;</em><span class="gapin">&nbsp;&nbsp;</span>更多&gt;</span></h3>
      <div id="gdtw" class="scrollbox gd_n_content">
        <ul class="winlist">
          <li>
            <div class="gd_top">
            <div class="gd_touxiang">
                <img src="../img/index/new/tx1.png">
              </div>
              <div class="gd_user">
                <div>
                  <span>清风明月</span><span class="zongshi"><i class="icon"></i>计划宗师</span>
                </div>
                <div>
                <span>用户跟投：</span><span class="num">80000.0000</span>
                </div>
              </div>
              <div class="gd_caozuo">
              <a class="gz">关注</a>
              <a class="gd">跟单</a>
              </div>
            </div>
            <div class="gd_bottom">
            <span>彩种：重庆时时彩</span>
              <span>玩法：直选60 </span>
              <span>佣金：3% </span>
              <span>金额：<i>5000元</i></span>
            </div>
            <div>
              <i class="new"></i>
              <span class="new-span">新</span>
            <div>
          </div></div></li>
          <li>
            <div class="gd_top">
            <div class="gd_touxiang">
                <img src="../img/index/new/tx1.png">
              </div>
              <div class="gd_user">
                <div>
                  <span>发财168</span><span class="zongshi"><i class="icon"></i>计划宗师</span>
                </div>
                <div>
                <span>用户跟投：</span><span class="num">80000.0000</span>
                </div>
              </div>
              <div class="gd_caozuo">
              <a class="gz">关注</a>
              <a class="gd">跟单</a>
              </div>
            </div>
            <div class="gd_bottom">
            <span>彩种：天津时时彩</span>
              <span>玩法：直选20 </span>
              <span>佣金：2% </span>
              <span>金额：<i>2000元</i></span>
            </div>
            <div>
              <i class="new"></i>
              <span class="new-span">新</span>
            <div>
          </div></div></li>
          <li>
            <div class="gd_top">
            <div class="gd_touxiang">
                <img src="../img/index/new/tx1.png">
              </div>
              <div class="gd_user">
                <div>
                  <span>发财168</span><span class="zongshi"><i class="icon"></i>计划宗师</span>
                </div>
                <div>
                <span>用户跟投：</span><span class="num">80000.0000</span>
                </div>
              </div>
              <div class="gd_caozuo">
              <a class="gz ygz">关注</a>
              <a class="gd">跟单</a>
              </div>
            </div>
            <div class="gd_bottom">
            <span>彩种：天津时时彩</span>
              <span>玩法：直选20 </span>
              <span>佣金：2% </span>
              <span>金额：<i>2000元</i></span>
            </div>
            <div>
              <i class="new"></i>
              <span class="new-span">新</span>
            <div>
          </div></div></li>
          <li>
            <div class="gd_top">
            <div class="gd_touxiang">
                <img src="../img/index/new/tx1.png">
              </div>
              <div class="gd_user">
                <div>
                  <span>发财168</span><span class="zongshi"><i class="icon"></i>计划宗师</span>
                </div>
                <div>
                <span>用户跟投：</span><span class="num">80000.0000</span>
                </div>
              </div>
              <div class="gd_caozuo">
              <a class="gz ygz">关注</a>
              <a class="gd">跟单</a>
              </div>
            </div>
            <div class="gd_bottom">
            <span>彩种：天津时时彩</span>
              <span>玩法：直选20 </span>
              <span>佣金：2% </span>
              <span>金额：<i>2000元</i></span>
            </div>
          </li>
          <li>
            <div class="gd_top">
            <div class="gd_touxiang">
                <img src="../img/index/new/tx1.png">
              </div>
              <div class="gd_user">
                <div>
                  <span>发财168</span><span class="zongshi"><i class="icon"></i>计划宗师</span>
                </div>
                <div>
                <span>用户跟投：</span><span class="num">80000.0000</span>
                </div>
              </div>
              <div class="gd_caozuo">
              <a class="gz">关注</a>
              <a class="gd">跟单</a>
              </div>
            </div>
            <div class="gd_bottom">
            <span>彩种：天津时时彩</span>
              <span>玩法：直选20 </span>
              <span>佣金：2% </span>
              <span>金额：<i>2000元</i></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="gapten"></div>
    <div class="hotact">
      <h3>优惠活动 <span class="rf">更多&gt;</span></h3>
      <div class="hotcontent">
        <ul>
          <li class="ileft first_line">
            <div class="mask"><a href="#">查看详情</a></div>
            <div class="act_img"><img src="../img/index/new/in_ac1.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 充值有惊喜，美女送上门！</span><span class="rf">2018-03-11</span></div>
          </li>
          <li class="first_line">
            <div class="mask"><a href="#">查看详情</a></div>
            <div class="act_img"><img src="../img/index/new/in_ac2.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 充值有惊喜，美女送上门！</span><span class="rf">2018-03-11</span></div>
          </li>
          <li class="ileft">
            <div class="mask"><a href="#">查看详情</a></div>
            <div class="act_img"><img src="../img/index/new/in_ac3.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 充值有惊喜，美女送上门！</span><span class="rf">2018-03-11</span></div>
          </li>
          <li>
            <div class="mask"><a href="#">查看详情</a></div>
            <div class="act_img"><img src="../img/index/new/in_ac4.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 充值有惊喜，美女送上门！</span><span class="rf">2018-03-11</span></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="gapmore"></div>

    <div class="bigfoot">
      <div class="inner">
        <div class="bonus_list">
          <div class="bonus_title"><span class="on">综合</span><span>时时彩</span><span>官方彩</span><span>菲律宾</span><span>11选5</span><span>低频彩</span></div>
          <swiper :options="bonusOption" class="bonus_board">
            <swiper-slide><span class="yellow">恭喜玩家</span><span class="dark">w***9</span><span><i class="high">腾讯分分彩</i></span><span class="last">喜中<i class="highm">19987.5元</i>(刚刚)</span></swiper-slide>
            <swiper-slide><span class="yellow">恭喜玩家</span><span class="dark">w***9</span><span><i class="high">腾讯分分彩</i></span><span class="last">喜中<i class="highm">19987.5元</i>(刚刚)</span></swiper-slide>
            <swiper-slide><span class="yellow">恭喜玩家</span><span class="dark">w***9</span><span><i class="high">腾讯分分彩</i></span><span class="last">喜中<i class="highm">19987.5元</i>(刚刚)</span></swiper-slide>
            <swiper-slide><span class="yellow">恭喜玩家</span><span class="dark">w***9</span><span><i class="high">腾讯分分彩</i></span><span class="last">喜中<i class="highm">19987.5元</i>(刚刚)</span></swiper-slide>
            <swiper-slide><span class="yellow">恭喜玩家</span><span class="dark">w***9</span><span><i class="high">腾讯分分彩</i></span><span class="last">喜中<i class="highm">19987.5元</i>(刚刚)</span></swiper-slide>
          </swiper>
        </div>
        <div class="ioscode"><img src="../img/download/downloadIOS.png" alt="" width="" height="" /></div>
        <div class="andcode"><img src="../img/download/ercodeAndroid.png" alt="" width="" height="" /></div>
      </div>
    </div>
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
  import hotimg from '../img/index/new/hot.gif'
  import newimg from '../img/index/new/new.gif'
  
  let oPrompt = Prompt();
  let init = loginInit();
  let randomCont = base.lotteryinit();

  export default {
    data() {
      return {
        iconhot:hotimg,iconnew:newimg,hot:[11],newlt:[911],isclassic:false,
        ison:{
          'on':true
        },
        isoff:{
          'on':false
        },
        ltgroups:{
          'ssc':[11,46,151,911,161,119,711,6,811,191,601,201,51,202,42,205,206,711],
          'flb':[200,201,202],
          'pk10':[204,43,47],
          '11y':[21,22,24,23,28,26],
          '3d':[41],
          'low':[41,42],
          'k3':[31,32,33,34,35,36],
          'classic':[80,85,86,87,90,100,110],
          'other':[31,32,33,34,35,36,43,204]
        },
        notices:[],onlines:[],
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        bannerOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.fullbanner .top-next',
            prevEl: '.fullbanner .top-prev'
          }
        },
        noticeOption: {
          direction: 'vertical',//autoplay:true,
          navigation: {
            nextEl: '.notice_box .swiper-button-next',
            prevEl: '.notice_box .swiper-button-prev'
          }
        },
        bonusOption: {
          direction: 'vertical',//autoplay:true,
          slidesPerView: 4,autoplay:true
        }
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
      getssc_after_filter: function() {
        var t = this;
        return this.onlines.filter(function(data) {
          return $.inArray(data.id,t.ltgroups['ssc'])>-1;
        })
      },
      getflb_after_filter: function() {
        var t = this;
        return this.onlines.filter(function(data) {
          return $.inArray(data.id,t.ltgroups['flb'])>-1;
        })
      },
      getxuan_after_filter: function() {
        var t = this;
        return this.onlines.filter(function(data) {
          return $.inArray(data.id,t.ltgroups['11y'])>-1;
        })
      },
      getlow_after_filter: function() {
        var t = this;
        return this.onlines.filter(function(data) {
          return $.inArray(data.id,t.ltgroups['low'])>-1;
        })
      },
      getother_after_filter: function() {
        var t = this;
        return this.onlines.filter(function(data) {
          return $.inArray(data.id,t.ltgroups['other'])>-1;
        })
      },
      getclassic_after_filter: function() {
        var t = this;
        return this.onlines.filter(function(data) {
          return $.inArray(data.id,t.ltgroups['classic'])>-1;
        })
      }
    },
    created() {
      
    },
    watch: {
      '$route'(to, from) {
        this.checkUrl();
      }
    },
    methods: {
      // 获取彩种列表
      getGameData() {
        let that = this;
        this.$http.post('/yx/u/api/game-lottery/openLotterys'
        ).then((response) => {
          let obj = response.body.data;
          console.log(obj);
          that.onlines = obj;
        });
      },
      chgClassic:function(index) {
        if (index==1) {
          this.ison= {
            'on':false
          }
          this.isoff= {
            'on':true
          }
          this.isclassic = true;  
        }else {
          this.ison= {
            'on':true
          }
          this.isoff= {
            'on':false
          }
          this.isclassic = false;  
        }
      },
      ishot:function(id) {
        if ( $.inArray(id,this.hot)>-1) {
          return true;    
        }
        return false;
      },
      isnew:function(id) {
        if ( $.inArray(id,this.newlt)>-1) {
          return true;    
        }
        return false;
      },
      fulllnk:function(id) {
        
      },
      pkfulllnk:function(id) {
        return '/yx/xjw/v/lottery/'+id+'.html';  
      },
      chgactlink:function() {
        this.$root.$children[0].showAcitve();    
      },
      // 获取最新公告
      getNotice () {
        let that = this;
        this.$http.post('/yx/u/api/notice/list'
        ).then((response) => {
          let ndata = response.data && response.data.data;
          //console.log(ndata,'ndatandata');
          for (var i = 0; i < ndata.length; i++) {
            that.notices.push({'title':ndata[i].title,'t':ndata[i].time,'c':String(ndata[i].content).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ').replace(/<(.[^>]*)>/g, '')})    
          }
        })
      },
      needlogin() {
        oPrompt({
          idx: "boxwarps",
          message: "请先登录"
        });
      }
    },
    mounted () {
      $("#gdtw").imgscroll({
        speed: 20, //滚动速度
        amount: 0, //滚动过渡时间
        width: 1, //滚动步数
        dir: "left" // "left" 或 "up" 向左或向上滚动
      });
      this.getGameData();
      this.getNotice();
      this.chgactlink();
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
<style>
  @import "../css/commit/swiper.css";
  @import "../css/commit/gen.css";
</style>
<style lang="stylus">
  @import "../css/stylus/index_new.styl"; 
</style>


