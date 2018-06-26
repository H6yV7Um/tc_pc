<template>
  <div class="index_newmain">
    <div class="fullbanner">
      <swiper :options="bannerOption" class="imgbanner">
        <swiper-slide class="banner9"><a href="/sportsGame" target="_blank"></a></swiper-slide>
        <swiper-slide class="banner7"><a href="/qiandao" target="_blank"></a></swiper-slide>
				<!--<swiper-slide class="banner8"><a href="http://8080987.com" target="_target"></a></swiper-slide>
        <swiper-slide class="banner7"><router-link to="/qiandao"></router-link></swiper-slide>-->
        <swiper-slide class="banner6"><a href="/static/lt.html#50" target="_blank"></a></swiper-slide>
        <swiper-slide class="banner2"><a href="/sales/1" target="_blank"></a></swiper-slide>
        <swiper-slide class="banner3"><a href="/sales/1" target="_blank"></a></swiper-slide>
        <swiper-slide class="banner4"><a href="/sales/1" target="_blank"></a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="top-prev swiper-button-prev" slot="button-prev"></div>
        <div class="top-next swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="bottom_notice">
        <div class="fix_ico"><em class="icon">&#xe6ac;</em></div>
        <div class="fix_ico fix_right"><em class="icon">&#xe60b;</em></div>
        <swiper :options="noticeOption" class="notice_box">
          <swiper-slide  v-for="(item, index) in notices" :key="index"><marquee direction="left" class="fl_right gonggao"><router-link :to="noticeLnk(index)">{{item.c}}</router-link></marquee></swiper-slide>
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
                <li v-for="item in getssc_after_filter"><a :href="fulllnk(item.id)" @click="ltgolink" :target="fulltarget()">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>

            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>菲律宾</h3>
              <ol class="inlst">
                <li v-for="item in getflb_after_filter"><a :href="fulllnk(item.id)" @click="ltgolink" :target="fulltarget()">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>十一选五</h3>
              <ol class="inlst">
                <li v-for="item in getxuan_after_filter"><a :href="fulllnk(item.id)" @click="ltgolink" :target="fulltarget()">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>低频彩</h3>
              <ol class="inlst">
                <li v-for="item in getlow_after_filter"><a :href="fulllnk(item.id)" @click="ltgolink" :target="fulltarget()">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
            <li class="links_narrow" v-show="!isclassic">
              <h3>其他</h3>
              <ol class="inlst">
                <li v-for="item in getother_after_filter"><a :href="fulllnk(item.id)" @click="ltgolink" :target="fulltarget()">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
            <li class="links_wide" v-show="isclassic">
              <h3>经典</h3>
              <ol class="inlst">
                <li v-for="item in getclassic_after_filter"><a :href="pkfulllnk(item.id)" @click="ltgolink" :target="fulltarget()">{{item.showName}}<img :src="iconhot" v-show="ishot(item.id)" class="icohot" alt=""><img :src="iconnew" class="iconew" v-show="isnew(item.id)" alt=""></a></a></li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <div class="rf">
        <div class="maarea" v-show="canma">
          <div class="matitle"><a :class="ismaon" @click="swma(0)">出码排行</a><a :class="ismaother" @click="swma(1)">遗漏排行</a></div>
          <div class="malst">
            <div class="mafilter">
              <label class="flabel">&nbsp;</label>
              <select name="target" v-model="maid" @change="changeLt">
                <option v-for="item in getonlinelt_dict" v-bind:value="item.id">{{item.showName}}</option>
              </select>
              <label>次数</label>
              <select name="qishut" v-model="maqi" @change="changeQi">
                <option v-for="item in qishu" v-bind:value="item.v">{{item.name}}</option>
              </select>
            </div>
            <ul class="maitems">
              <li v-for="item in topfive">
                <div class="mainner"><span class="mahalf first"" v-html="fname(item.name)"></span><span class="mahalf">{{item.time}}期</span></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="maarea_placeholder" v-show="!canma"><img src="../img/index/new/ma.png"></div>
        <div class="paihang_open">
          <a class="hand" :href="'/static/lt.html#'+maid" target="_blank"><em class="icon">&#xe7d0;</em>进入游戏</a>
        </div>
      </div>
    </div>
    <div class="gapten"></div>
    <div class="hotrend clearfix">
      <h3>热门跟单 <span class="rf"><em class="icon">&#xe64c;</em>••<i class="on">•</i><em class="icon on">&#xe628;</em><span class="gapin">&nbsp;&nbsp;</span>更多&gt;</span></h3>
      <div class="scrollbox">
        <div id="gdtw" class="gd_n_content">
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
    </div>
    <div class="gapten"></div>
    <div class="hotact">
      <h3>优惠活动 <span class="rf"><router-link to="/sales/1">更多&gt;</router-link></span></h3>
      <div class="hotcontent">
        <ul>
          <li class="ileft first_line">
            <div class="mask"><router-link to="/sales/1">查看详情</router-link></div>
            <div class="act_img"><img src="../img/index/new/in_ac1a.jpg" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt;  双飞无限，财色兼收！</span><span class="rf">2018-05-12</span></div>
          </li>
          <li class="first_line">
            <div class="mask"><router-link to="/sales/1">查看详情</router-link></div>
            <div class="act_img"><img src="../img/index/new/in_ac2.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 菲律宾1.5分彩，劲爆2000模式！</span><span class="rf">2018-03-11</span></div>
          </li>
          <li class="ileft">
            <div class="mask"><router-link to="/sales/1">查看详情</router-link></div>
            <div class="act_img"><img src="../img/index/new/in_ac3.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 绑定手机，立刻送彩金！</span><span class="rf">2018-03-11</span></div>
          </li>
          <li>
            <div class="mask"><router-link to="/sales/1">查看详情</router-link></div>
            <div class="act_img"><img src="../img/index/new/in_ac4.png" alt="" width="" height="" /></div>
            <div class="act_rel"><span class="act_t">&gt; 手机APP充值周周送！</span><span class="rf">2018-03-11</span></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="gapmore"></div>

    <div class="bigfoot">
      <div class="inner">
        <div class="bonus_list">
          <div class="bonus_title"><span :class="geton(0)" @click="goon(0)">综合</span><span :class="geton(1)" @click="goon(1)">时时彩</span><span :class="geton(3)" @click="goon(3)">菲律宾</span><span :class="geton(4)" @click="goon(4)">十一选五</span><span :class="geton(5)" @click="goon(5)">低频彩</span><span :class="geton(2)" @click="goon(2)">其他</span></div>
          <div class="bonus_box">
            <marquee direction="up" loop="infinite" scrollamount="3" onmouseover=this.stop() onmouseout=this.start()>
            <ul class="bonus_board">
              <li v-for="item in nowbonus"><span class="yellow">恭喜玩家</span><span class="dark">{{item.u}}</span><span><i class="high">{{item.lt}}</i></span><span class="last">喜中<i class="highm">{{item.m}}</i>元</span></li>
            </ul>
            </marquee>
          </div>
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
  import UtilPrompt from "./utilPrompt"
  import {IsPC} from '../js/common.js';

  let oPrompt = Prompt();
  let init = loginInit();
  let randomCont = base.lotteryinit();

  export default {
    data() {
      return {
        iconhot:hotimg,iconnew:newimg,hot:appConfig().hotlt,newlt:appConfig().newlt,isclassic:false,
        isShow:false,isBelongAgt:false,maid:11,qishu:[],topfive:[],maqi:'-',qishuchk:{},deftag:'lengRe',canma:false,
        ison:{
          'on':true
        },
        ismaon:{'on':true},ismaother:{'on':false},
        isoff:{
          'on':false
        },
        boonusw:[true,false,false,false,false,false],
        ltgroups:{
          'ssc':[11,46,151,911,161,119,711,6,811,191,601,51,205,206,711,50,61],
          'flb':[200,201,202],
          'pk10':[204,43,47],
          '11y':[21,22,24,23,28,26],
          '3d':[41],
          'low':[41,42],
          'k3':[31,32,33,34,35,36],
          'classic':[80,85,86,87,90,100,110],
          'other':[31,32,33,34,35,36,43,204]
        },
        rollbonus:{
          '0':[],'1':[],'2':[],'3':[],'4':[],'5':[]
        },
        nowbindex:0,
        bonusrandom:{
          'user':['ad3***','s31***','lin***','wta***','cct***','xia***','sun***','hy5***','hl0***','hjh***','mlg***','sgt***','qaz***','azh***','ssk***'],
          'lt':['重庆时时彩','腾讯分分彩','菲律宾1.5分彩','山东11选5','排列三/排列五','北京PK10','湖北快3'],
          'ssc':['新德里1.5分彩','新加坡2分彩','韩国1.5分彩','东京1.5分彩','多伦多30秒','夏威夷分分彩','首尔1.5分彩'],
          'offical':['江苏快3','安徽快3','湖北快3','北京PK10','奥克兰赛车PK10'],
          'flb':['菲律宾1.5分彩','菲律宾2分彩','菲律宾5分彩'],
          'xuan':['广东11选5','江西11选5','上海11选5','山东11选5','江苏11选5'],
          'low':['3D福彩','排列三/排列五'],
          'bonus':[5862,9027.4,6596,5733,11700,5542.4,8680,7221.92,7055.1,9750,5862,8820,18054.8,8793,9873.5,6000,8820,1203,4224.8,2981,5320,4730,6800,9200,8320,10290]
        },
        notices:[],targetstr:'_blank',
        onlines:[
          {
            "code" : "CQSSC",
            "showName" : "重庆时时彩",
            "id" : 11
          }, {
            "code" : "GD11Y",
            "showName" : "广东11选5",
            "id" : 24
          }, {
            "code" : "TX30SSC",
            "showName" : "腾讯30秒",
            "id" : 50
          }, {
            "code" : "QQ60SSC",
            "showName" : "QQ分分彩",
            "id" : 61
          }, {
            "code" : "3DFC",
            "showName" : "3D福彩",
            "id" : 41
          }, {
            "code" : "TGSSC",
            "showName" : "新德里1.5分彩",
            "id" : 6
          }, {
            "code" : "JX11Y",
            "showName" : "江西11选5",
            "id" : 23
          }, {
            "code" : "XJSSC",
            "showName" : "新疆时时彩",
            "id" : 151
          }, {
            "code" : "SD11Y",
            "showName" : "山东11选5",
            "id" : 22
          }, {
            "code" : "ZYFFSSC",
            "showName" : "夏威夷分分彩",
            "id" : 119
          }, {
            "code" : "pl3",
            "showName" : "排列三/排列五",
            "id" : 42
          }, {
            "code" : "JSK3",
            "showName" : "江苏快3",
            "id" : 31
          }, {
            "code" : "SH11Y",
            "showName" : "上海11选5",
            "id" : 26
          }, {
            "code" : "AHK3",
            "showName" : "安徽快3",
            "id" : 33
          }, {
            "code" : "HBK3",
            "showName" : "湖北快3",
            "id" : 35
          }, {
            "code" : "HGSSC",
            "showName" : "韩国1.5分彩",
            "id" : 191
          }, {
            "code" : "BJPK10",
            "showName" : "北京PK10",
            "id" : 43
          }, {
            "code" : "XJPSSC",
            "showName" : "新加坡2分彩",
            "id" : 51
          }, {
            "code" : "DJSSC",
            "showName" : "东京1.5分彩",
            "id" : 601
          }, {
            "code" : "JS11Y",
            "showName" : "江苏11选5",
            "id" : 28
          }, {
            "code" : "TXSSC",
            "showName" : "腾讯分分彩",
            "id" : 911
          }, {
            "code" : "TG30SSC",
            "showName" : "多伦多30秒",
            "id" : 46
          }, {
            "code" : "CQSSCXJW",
            "showName" : "经典重庆时时彩",
            "id" : 80
          }, {
            "code" : "FLB15SSCXJW",
            "showName" : "经典菲律宾1.5分彩",
            "id" : 85
          }, {
            "code" : "FLB2SSCXJW",
            "showName" : "经典菲律宾2分彩",
            "id" : 86
          }, {
            "code" : "FLB5SSCXJW",
            "showName" : "经典菲律宾5分彩",
            "id" : 87
          }, {
            "code" : "JSK3XJW",
            "showName" : "经典江苏快3",
            "id" : 90
          }, {
            "code" : "GD11YXJW",
            "showName" : "经典广东11选5",
            "id" : 100
          }, {
            "code" : "BJPK10XJW",
            "showName" : "经典北京PK10",
            "id" : 110
          }, {
            "code" : "FLB15SSC",
            "showName" : "菲律宾1.5分彩",
            "id" : 200
          }, {
            "code" : "FLB2SSC",
            "showName" : "菲律宾2分彩",
            "id" : 201
          }, {
            "code" : "FLB5SSC",
            "showName" : "菲律宾5分彩",
            "id" : 202
          }, {
            "code" : "LD2SSC",
            "showName" : "伦敦2分彩",
            "id" : 203
          }, {
            "code" : "AKLPK10",
            "showName" : "奥克兰赛车PK10",
            "id" : 204
          }, {
            "code" : "SHOUERSSC",
            "showName" : "首尔1.5分彩",
            "id" : 205
          }, {
            "code" : "NEWYOSSC",
            "showName" : "纽约1.5分彩",
            "id" : 206
          }
        ],
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        bannerOption: {
          autoplay: {
            delay: 8000,disableOnInteraction:false
          },
          loop: true,
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
          //this.getUnloginNotice();
          return false;
        }
      },
      lotteryList() {
        if (this.$store.state.isLogin === 'true') {
          return this.$store.state.allLotteryList;
        }
      },
      nowbonus:function() {
        var t = this;
        return this.rollbonus[t.nowbindex];
      },
      getonlinelt_dict:function() {
        var t = this;
        //console.log(this.onlines,'this.onlinesthis.onlines');
        return this.onlines.filter(function(data) {
          return String(data.showName).indexOf('经典')==-1;
        })
      },
      getssc_after_filter: function() {
        var t = this;
        //console.log(this.onlines,'this.onlinesthis.onlines');
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
      show_reg:function() {
        this.isShow=true;
      },
      swma:function(n) {
        if (n==0) {
          this.ismaon =  {
            'on':true
          }
          this.ismaother =  {
            'on':false
          }
          this.deftag = 'lengRe';
          this.getMarate('lengRe');
        }else {
          this.ismaon =  {
            'on':false
          }
          this.ismaother =  {
            'on':true
          }
          this.deftag = 'yiLou';
          this.getMarate('yiLou');
        }
      },
      maon:function(a) {
        return {
          'on':(a==0 ? true : false)
        }
      },
      changeQi:function() {
        //this.getMarate();
        //console.log(this.maqi,this.qishuchk[this.maqi]);
        this.topfive = this.qishuchk[this.maqi]
      },
      changeLt:function() {
        //console.log(this.maid,'this.maidthis.maidthis.maid');
        this.getMarate('lengRe');
      },
      fname:function(str) {
        return str.replace('@','<i>@')+'</i>';
      },
      ltgolink:function(e) {
        //console.log(e);
        var _t = this;
        if (!_t.isLogin) {
          oPrompt({
            idx: "boxwarps",
            message: "请先登录"
          });
        }
      },
      // 获取彩种列表
      getGameData() {
        let that = this;
        this.$http.post('/yx/u/api/game-lottery/openLotterys'
        ).then((response) => {
          let obj = response.body.data;
          //console.log(obj);
          if (typeof obj !='undefined') {
            that.onlines = obj;
          }
          //that.onlines = obj;
        });
      },
      //出码
      getMarate:function(tag) {
        ///yx/u/api/game-lottery/search-zhCm?id=43
        let that = this;
        that.topfive = [];that.qishu = [];
        var firstag = [];

        var compareTime = function(a,b) {
          if (a.time < b.time)
            return 1;
          if (a.time > b.time)
            return -1;
          return 0;
        }
        that.qishuchk ={};
        var nowqishu=[];

        this.$http.get('/yx/u/api/game-lottery/search-zhCm?id='+that.maid
        ).then((response) => {
          let mobj = response.body.data;
          //console.log(mobj,that.getonlinelt_dict);
          var chumadict = mobj[that.deftag];
          if (typeof chumadict =='undefined') {
            that.maqi = '-'
            that.qishu.push({'name':'-','v':'-'});
          }

          //console.log(chumadict);
          for (var key in chumadict) {
            firstag.push(key)
          }
          //console.log(firstag.length,'firstag.lengthfirstag.length');
          if (firstag.length==0) {
            return;
          }
          var liangm = chumadict[firstag[0]];
          var o2 = chumadict[firstag[1]];
          var o3 = chumadict[firstag[2]];
          liangm = Object.assign(liangm, o2, o3);
          //console.log(liangm,'liangm');
          if (typeof liangm !='undefined') {
            for (var lkey in liangm) {
              //console.log(t.topfive.length);
              if (that.topfive.length<99) {
                that.topfive.push({'name':lkey,'time':liangm[lkey]})
                if (typeof that.qishuchk[liangm[lkey]] =='undefined') {
                  that.qishuchk[liangm[lkey]] = [{'name':lkey,'time':liangm[lkey]}];
                  nowqishu.push(parseInt(liangm[lkey],10));
                }else {
                  that.qishuchk[liangm[lkey]].push({'name':lkey,'time':liangm[lkey]});
                }
              }
            }

            that.topfive.sort(compareTime);
            //console.log(that.topfive,'that.topfivethat.topfivethat.topfive');
            var sortedqishu = nowqishu.sort(function(a,b){return a-b});
            for (var i = 0; i < nowqishu.length; i++) {
              that.qishu.push({'name':nowqishu[i],'v':nowqishu[i]});
              if (i==nowqishu.length-1) {
                that.maqi = nowqishu[i];
              }
            }
            //console.log(sortedqishu);
          }
          that.qishu.reverse();
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
      // 公告链接，未登录时不需要链接
      noticeLnk:function(index) {
        var _t = this;
        if (_t.isLogin) {
          return '/game-notice/' + index;
        }
        return '';
      },
      geton:function(index) {
        var t = this;
        //t.boonusw = [false,false,false,false,false,false];
        //t.boonusw[index] = true;
        return {
          'on':t.boonusw[index]
        }
      },
      goon:function(index) {
        var t = this;
        t.boonusw = [false,false,false,false,false,false];
        t.boonusw[index] = true;
        t.nowbindex = index;
      },
      //开奖随机
      getRandomBonus:function() {
        var t = this;
        for (var i = 0; i < 20; i++) {
          t.rollbonus['0'].push({'u':_.sample(t.bonusrandom['user']),'m':_.sample(t.bonusrandom['bonus']),'lt':_.sample(t.bonusrandom['lt'])});
          t.rollbonus['1'].push({'u':_.sample(t.bonusrandom['user']),'m':_.sample(t.bonusrandom['bonus']),'lt':_.sample(t.bonusrandom['ssc'])});
          t.rollbonus['2'].push({'u':_.sample(t.bonusrandom['user']),'m':_.sample(t.bonusrandom['bonus']),'lt':_.sample(t.bonusrandom['offical'])});
          t.rollbonus['3'].push({'u':_.sample(t.bonusrandom['user']),'m':_.sample(t.bonusrandom['bonus']),'lt':_.sample(t.bonusrandom['flb'])});
          t.rollbonus['4'].push({'u':_.sample(t.bonusrandom['user']),'m':_.sample(t.bonusrandom['bonus']),'lt':_.sample(t.bonusrandom['xuan'])});
          t.rollbonus['5'].push({'u':_.sample(t.bonusrandom['user']),'m':_.sample(t.bonusrandom['bonus']),'lt':_.sample(t.bonusrandom['low'])});
        }
        //console.log(t.rollbonus['0']);
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
        if (this.isLogin) {
          return '/static/lt.html#'+id;
        }else {
          return '#';
        }
        //return '/static/lt.html#'+id;
      },
      fulltarget:function() {
        if (this.isLogin) {
          return '_blank';
        }
        return '_self'
      },
      pkfulllnk:function(id) {
        return '/yx/xjw/v/lottery/'+id+'.html';
      },
      chgactlink:function() {
        this.$root.$children[0].showAcitve();
      },
      // 获取未登录时最新公告
      getUnloginNotice () {
        let that = this;
        //alert('wss');
        this.$http.get('/json/notice.json').then((response) => {
          let data = response.data && response.data.data;
          if (data && (data.length > 0)) {
            for (var i = 0; i < data.length; i++) {
              that.notices.push({'title':data[i].title,'t':data[i].time,'c':String(data[i].content).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ').replace(/<(.[^>]*)>/g, '')})
            }
          }
        })
      },
      // 获取最新公告
      getNotice () {
        let that = this;
        //this.$http.post('/json/notice.json'
        this.$http.post('/yx/u/api/notice/list'
        ).then((response) => {
          let ndata = response.data && response.data.data;
          //console.log(ndata,'ndatandata');
          if (typeof ndata !='undefined') {
            for (var i = 0; i < ndata.length; i++) {
              that.notices.push({'title':ndata[i].title,'t':ndata[i].time,'c':String(ndata[i].content).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ').replace(/<(.[^>]*)>/g, '')})
            }
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
      if (typeof this.$route.params.agentId !='undefined') {
        //this.isBelongAgt = true;
        //this.$root.$children[0].showReg();
        localStorage.setItem("_parentid",this.$route.params.agentId);
      }else {
        //localStorage.removeItem("_parentid");
      }
      if(!IsPC() && typeof this.$route.params.agentId !='undefined'){
        ///register_mobile?smobile=web
        //this.$router.push('/register_mobile/?h5=1');
        //if (this.isLogin) {
        location.href = '/yx/home';
        //}else {
        //  location.href = '/yx/login/sign.html';
        //}

      }
      $("#gdtw").imgscroll({
        speed: 20, //滚动速度
        amount: 0, //滚动过渡时间
        width: 1, //滚动步数
        dir: "left" // "left" 或 "up" 向左或向上滚动
      });
      this.getGameData();

      //
      //console.log(this.isLogin,'this.isLoginthis.isLogin');
      if (this.isLogin) {
        this.getNotice();
        this.canma = true;
        this.getMarate('lengRe');
      }else {
        this.canma = false;
        this.getUnloginNotice();
      }
      //console.log(this.isLogin);
      this.chgactlink();
      this.getRandomBonus();
      //this.getOnlineCounter();
    },
    components: {
      Login,
      Register,
      UserInfo,
      SecurityBar,
      PersonalDetails,UtilPrompt
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


