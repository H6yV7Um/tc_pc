<template>
  <div class="follow_history">
    <div class="follow_wrapper">
      <div class="banner">
        <img src="../img/newAdd/banner.png">
      </div>
      <div class="celebrity">
        <ul class="celeb_title main_title">
          <li v-for="(item, index) in followTitles" :class="followId === index && 'active'"
              @click="getFollowData(index)">
            <div>
              <span>{{item.name}}</span>
              <i v-if="item.num">{{item.num}}</i>
            </div>
          </li>
        </ul>
        <ul class="celeb_cont main_cont" v-show="followId === 0">
          <li v-for="(item, index) in celebrities" @mouseover="topModelMouseoverFn($event,index)"
              @mouseout="isShowTopModel = false" class="followShow">
            {{item.nickName}}
          </li>
        </ul>
        <ul class="celeb_cont main_cont" v-show="followId === 1">
          <li v-for="(item, index) in myIdols" class="followShow" @mouseover="topModelMouseoverFn($event,index)"
              @mouseout="isShowTopModel = false">
            {{item.nickName}}
          </li>
        </ul>
        <ul class="celeb_cont main_cont" v-show="followId === 2">
          <li v-for="(item, index) in myFans" class="followShow" @mouseover="topModelMouseoverFn($event,index)"
              @mouseout="isShowTopModel = false">
            {{item.nickName}}
          </li>
        </ul>
        <div class="topFollowModel" :style="{'top': + topModelMovePx + 'px' , 'left': + topModelMoveLeftPx + 'px'}"
             v-show="isShowTopModel" @mousemove="isShowTopModel = true" @mouseout="isShowTopModel = false">
          <followPrompt :data="topModelConten"/>
          <span></span>
        </div>
      </div>
      <div class="history_list">
        <div class="filtrate_cont">
          <span class="">跟单筛选</span>
          <select class="category_choose child_p" v-model="currentLottery">
            <option value="-1">全部彩种</option>
            <option v-for="item in allLottery" :value="item.code">{{item.lotteryName}}</option>
          </select>
          <select class="play_choose child_p" v-model="currentPlayWay">
            <option value="-1">全部玩法</option>
            <option v-for="item in allPlays" :value="item.code">{{item.name}}</option>
          </select>
          <input type="text" placeholder="发起人昵称" v-model="searchNickName" class="child_p">
          <div class="search_btn child_p" @click="searchGendan">搜索</div>
        </div>
        <ul class="celeb_cont main_cont">
          <li v-for="(item, index) in celebrities">{{item.name}}</li>
        </ul>
      </div>
      <div class="filtrate_list">
        <div class="list_table">
          <table class="list_tableDome">
            <thead ref="table_header">
            <tr>
              <td>发起人</td>
              <td>
                <i>战绩</i>
                <span class="icon"></span>
              </td>
              <td>彩种</td>
              <td>玩法</td>
              <td>
                <i>方案金额</i>
                <span class="icon"></span>
              </td>
              <td>
                <i>奖金</i>
                <span class="icon"></span>
              </td>
              <td>
                <i>历史中奖率</i>
                <span class="icon"></span>
              </td>
              <td>
                <i>截止时间</i>
                <span class="icon"></span>
              </td>
              <td @click="searchGendan">
                <span class="icon"></span>
                <i style="cursor: pointer;">刷新</i>
              </td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(n, index) in listData" :key="index">
              <td class="overDIv">
                {{n.nickName}}
                <div class="over" @mouseover="mouseoverFn(n,index)" @mouseout="isShowPrompt = false"
                     :style="{'height':initTopPx+'px'}"></div>
              </td>
              <td>
                <span class="icon"></span>
                <i>{{n.feat}}</i>
              </td>
              <td>
                <i>{{n.lottery}}</i>
                <span class="icon"></span>
              </td>
              <td>{{n.playType}}</td>
              <td>{{n.orderAmount}}元</td>
              <td>{{n.planBonus}}</td>
              <td>{{n.historyRate}}%</td>
              <td>{{n.sellEndTime}}</td>
              <td @click="setGendan(n)" v-if="n.canFollow">跟单</td>
              <td v-else>已结束</td>
              <!--<td @click="setGendan(n)">跟单</td>-->
            </tr>
            </tbody>
            <div class="loading" v-show="isLoading">加载中...</div>
          </table>
          <div class="filtrate_page">
            <Page :total="totalCount" :page-size="pageSize" :current.sync="currentPage" class-name="filter_page"
                  @on-change="searchGendan"></Page>
          </div>
          <div class="showPrompt" :style="{'top':modelMovePx + 'px'}" @mouseover="isShowPrompt = true"
               @mouseout="isShowPrompt = false" v-show="isShowPrompt">
            <UtilFollowPrompt :data="modeConten"/>
            <span></span>
          </div>
        </div>
        <ul class="block_cont">
          <li>
            <div class="common_title">热门玩法</div>
            <ul class="common_cont">
              <li v-for="(item,index) in hotMethod">
                <router-link :to="{path:`/static/lt.html#${item.id}`}" target="_blank">
                  <span>{{index+1}}</span>
                  <i>{{item.cnname}}-{{item.name}}</i>
                  <i class="icon"></i>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <div class="common_title">人气跟单</div>
            <ul class="common_cont">
              <li>
                <span>1</span>
                <i>重庆时时彩彩后三组六</i>
              </li>
              <li>
                <span>2</span>
                <i>江西时时彩单选前四</i>
              </li>
              <li>
                <span>3</span>
                <i>新疆时时彩</i>
              </li>
              <li>
                <span>4</span>
                <i>高频彩重庆11选5</i>
              </li>
              <li>
                <span>5</span>
                <i>重庆时时彩彩后三组六</i>
              </li>
            </ul>
          </li>
          <li>
            <div class="common_title">昨日盈利榜</div>
            <ul class="common_cont">
              <li>
                <span>1</span>
                <i>重庆时时彩彩后三组六重庆时时彩彩后三组六</i>
              </li>
              <li>
                <span>2</span>
                <i>江西时时彩单选前四</i>
              </li>
              <li>
                <span>3</span>
                <i>新疆时时彩</i>
              </li>
              <li>
                <span>4</span>
                <i>高频彩重庆11选5</i>
              </li>
              <li>
                <span>5</span>
                <i>重庆时时彩彩后三组六</i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <UtilPrompt v-show="isShow" v-on:hide="isShow = false">
      <div class="follow_tip">
        <div class="follow_tip_title relative_p">
          <span class="common_color">跟单提示</span>
          <div class="close_icon" @click="closeFollowTip">
            <i>X</i>
          </div>
        </div>
        <div class="fllow_split">
          <i class="pre_scissor"></i>
          <span class="middle_dotted"></span>
          <i class="nex_scissor"></i>
        </div>
        <ul>
          <li>
            <span>发布人 : </span>
            <div>{{followTipContent.nickName}}</div>
          </li>
          <li>
            <span>彩种 : </span>
            <div>{{followTipContent.lottery}}</div>
          </li>
          <li>
            <span>玩法 : </span>
            <div>{{followTipContent.playType}}</div>
          </li>
          <li>
            <span>佣金比例 : </span>
            <div>{{followTipContent.commRate}}</div>
          </li>
          <li>
            <span>奖金 : </span>
            <div>
              <i class="common_color">{{followTipContent.bonus}}</i>元
            </div>
          </li>
          <li>
            <span>投注总金额 : </span>
            <div>
              <i class="common_color">{{followTipContent.orderAmount}}</i>元
            </div>
          </li>
          <li class="fold_increase">
            <span>加倍 : </span>
            <div>
              <div class="increase_frame">
                <i class="minus_num" @click="double(true)">-</i>
                <input type="number" step="10" min="0" v-model="doubleNum">
                <i class="add_num" @click="double(false)">+</i> 倍
              </div>
            </div>
          </li>
        </ul>
        <div class="confirm_btn" @click="followBet">确定跟单</div>
        <div class="time_count_down">{{billNoError}}</div>
      </div>
    </UtilPrompt>
  </div>
</template>

<script type="text/ecmascript-6">
  /*eslint-disable*/
  import UtilPrompt from './utilPrompt.vue';
  import UtilFollowPrompt from './utilFollowPrompt';
  import followPrompt from './followPrompt';
  import {gendan} from './../js/index'

  let gendanFn = gendan()
  export default {
    data() {
      return {
        followTitles: [{name: '跟单名人', num: 0}, {name: '我的关注', num: 9}, {name: '关注我的', num: 5}],
        followId: 0,
        doubleNum: 10, //加倍数
        followTipContent: {},//跟单里面显示的内容
        isShow: false,
        celebrities: [], // 跟单名人列表
        myIdols: [], // 我的关注列表
        myFans: [], // 关注我的列表
        allLottery: [], // 所有的彩种
        currentLottery: '-1', // 当前彩种
        allPlays: [], // 全部玩法
        currentPlayWay: '-1', // 当前玩法
        searchNickName: '',
        hotMethod: [], // 热门玩法
        lotteryZd: {
          "CQSSC": 11,
          "GD11Y": 24,
          "3DFC": 41,
          "ZY11Y": 21,
          "TGSSC": 6,
          "JX11Y": 23,
          "XJSSC": 151,
          "SD11Y": 22,
          "ZYFFSSC": 119,
          "pl3": 42,
          "JSK3": 31,
          "JLK3": 32,
          "LN11Y": 25,
          "SH11Y": 26,
          "AHK3": 33,
          "GXK3": 34,
          "HBK3": 35,
          "NMK3": 36,
          "TJSSC": 161,
          "HGSSC": 191,
          "BJPK10": 43,
          "XJPSSC": 51,
          "DJSSC": 601,
          "BJKL8SSC": 711,
          "TWSSC": 811,
          "JS11Y": 28,
          "TXSSC": 911,
          "TG30SSC": 46,
          "XYFTPK10": 47,
          "CQSSCXJW": 80,
          "FLB15SSCXJW": 85,
          "FLB2SSCXJW": 86,
          "FLB5SSCXJW": 87,
          "JSK3XJW": 90,
          "GD11YXJW": 100,
          "BJPK10XJW": 110,
          "FLB15SSC": 200,
          "FLB2SSC": 201,
          "FLB5SSC": 202,
          "LD2SSC": 203,
          "AKLPK10": 204,
          "SHOUERSSC": 205,
          "NEWYOSSC": 206,
          "LHECXJW": 250
        }, // 后期删除
        prizeZD: {}, // 后期删除
        billNoError: '',

        totalCount: 0,
        pageSize: 10,
        currentPage: 1,
        listData: [],
        isLoading: false, // 是否正在加载中

        hotPlays: [{name: '重庆时时彩'}], // 热门玩法
        popularPlays: [{name: '重庆时时彩'}], // 人气列表
        winMost: [{name: '重庆时时彩'}], // 盈利最多排行列表
        allSponsor: [], // 发起人列表
        isShowPrompt: false, // 模块是否显示
        isShowTopModel: false, // 上方模块是否显示
        isShowTopModelOver: false, // 是否在上方模块上
        isisShowPromptOver: false, // 是否在模块上
        initTopPx: 45, // 模块初始父元素距离
        topModelInitTopPx: 0, // 上方模块初始父元素距离
        topModelMovePx: 0, //上方模块上下移动距离
        topModelMoveLeftPx: 0, //上方模块左右移动距离
        modelMovePx: 0, // 模块移动距离
        modeConten: {}, // 模块内显示内容
        topModelConten: {} // 上方模块显示内容
      }
    },
    methods: {
      init() {
        gendanFn.myFocusUserList(this).foucusMe(this).getLottery(this).hotMethod(this)
        gendanFn.yesterdayProfitList(this).orderStarList(this).iconList(this)
        this.searchGendan()
      },
      double(flag) {
        this.doubleNum = Number(this.doubleNum)
        if (flag) {
          if (this.doubleNum > 0) {
            this.doubleNum -= 10;
          }
        } else {
          this.doubleNum += 10;
        }
      },
      //跟单关闭按钮
      closeFollowTip() {
        this.isShow = false;
      },
      topModelMouseoverFn(e, index) {
        switch (this.followId) {
          case 0:
            this.topModelConten = this.celebrities[index]
            break
          case 1:
            this.topModelConten = this.myIdols[index]
            break
          case 2:
            this.topModelConten = this.myFans[index]
            break
        }
        let pos = $(e.target).position()
        let w = 584
        let domW = $(e.target).outerWidth(true)
        this.topModelMovePx = pos.top - 200;
        this.topModelMoveLeftPx = pos.left - (w - domW) / 2 + 236
        this.isShowTopModel = true;
        let _this = this
        gendanFn.getFollowUserInfo(this, {userId: this.topModelConten.userId}, function (data) {
          _this.topModelConten = Object.assign({}, _this.topModelConten, data)
        })
      },
      topModelMouseoutFn(e) {
        !this.isShowTopModelOver && (this.isShowTopModel = false);
      },
      topModelOver() {
        this.isShowTopModel = true;
        this.isShowTopModelOver = true;
      },
      topModelOut() {
        this.isShowTopModel = this.isShowTopModelOver = false;
      },
      UtilFollowPromptOver() {
        this.isisShowPromptOver = true;
        this.isShowPrompt = true;
      },
      mouseoverFn(item, index) {
        this.modeConten = item
        this.modelMovePx = this.initTopPx * (Number(index) + 1) - 300;
        this.isShowPrompt = true
        // let _this = this
        // gendanFn.getFollowUserInfo(this, {userId: item.userId}, function (data) {
        //   _this.modeConten = Object.assign({}, _this.modeConten, data)
        // })
      },
      UtilFollowPromptOut() {
        this.isShowPrompt = this.isisShowPromptOver = false;
      },
      mouseoutFn(e) {
        !this.isisShowPromptOver && (this.isShowPrompt = false);
      },
      getFollowData(index) {
        this.followId !== index && (this.followId = index);
      },
      getCelebrity() {

      },
      getMyAttentions() {

      },
      getMyFans() {

      },
      searchGendan() {
        let params = {
          size: this.pageSize,
          page: this.currentPage - 1
        }
        if (String(this.currentLottery) !== '-1') {
          params.lottery = this.currentLottery
        }
        if (String(this.currentPlayWay) !== '-1') {
          params.method = this.currentPlayWay
        }
        if (this.searchNickName) {
          params.nickName = this.searchNickName
        }
        gendanFn.getList(this, params)
      },
      setGendan(item) {
        this.billNoError = ''
        this.followTipContent = Object.assign({}, item)
        this.doubleNum = 10
        this.isShow = true;
      },
      followBet() {
        if (Number(this.doubleNum) === 0) {
          this.billNoError = '投注倍数不能为0'
          return false
        }
        let params = {
          multiple: this.doubleNum,
          billNo: this.followTipContent.billNo,
          model: 'yuan',
          code: this.prizeZD[this.followTipContent.lotteryCode]
        }
        gendanFn.followOrder(this, params)
      }
    },
    components: {
      UtilPrompt,
      UtilFollowPrompt,
      followPrompt
    },
    created() {
      this.init()
    },
    watch: {
      currentLottery(val) {
        if (String(val) !== '-1') {
          gendanFn.getMethod(this)
        } else {
          this.currentPlayWay = '-1'
          this.allPlays = []
        }
      },
      myIdols: {
        deep: true,
        handler(val) {
          console.log(val)
        }
      },
      doubleNum(val) {
        if (val < 0) {
          this.doubleNum = 0
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../css/stylus/index.styl";

  .follow_history
    bgColor(#f6f6f6)
    .follow_wrapper
      width: main_width
      margin: 0 auto
      > div
        margin: 15px 0
      .celebrity, .history_list
        border: 1px solid #dcdddd
        height: 118px
        bgColor()
        .main_cont
          text-align: left
          li
            display: inline-block
            line-height: 38px
            padding: 0 20px
            cursor()
      .celebrity
        position: relative
        text-align: left
        li
          display: inline-block
        .celeb_title
          border-bottom: 1px solid #dcdddd
          li
            height: 34px
            line-height: 34px
            font-size: 18px
            margin: 0 20px
            cursor()
            &.active
              div
                border-bottom: 1px solid text_color
                span
                  color: text_color
            i
              display: inline-block
              font-size: 12px
              width: 18px
              height: 18px
              line-height: 18px
              bgRed()
              radius(50%)
              text-align: center
              color()
        .topFollowModel
          position: absolute
          z-index: 2
          > span
            display: inline-block
            border-width: 10px
            border-color: #FC5667 transparent transparent transparent
            border-style: solid
            position: relative
            top: 200px;
            left: 48px;
      .history_list
        .filtrate_cont
          height: 35px
          padding: 0 20px
          setMiddle()
          justify-content: flex-start
          > span
            margin-right: 40px
            font-size: 18px
            color(text_color)
          .child_p
            height: 26px
            line-height: 26px
            padding: 0 5px
            margin: 0 10px
          input, select
            display: inline-block
            border: 1px solid #dcdddd
          .search_btn
            bgRed()
            cursor: pointer
            padding: 0 20px
            color()
      .filtrate_list
        display: flex
        justify-content: space-between;
        .list_table
          width: 914px
          position: relative
          .list_tableDome
            width: 100%
            position: relative
            tr
              height: 44px
              line-height: 44px
              border-bottom: 1px solid #dcdddd
            thead
              bgRed()
              color()
              border: none
            tbody
              font-size: 12px
              tr
                td
                  &.overDIv
                    position: relative
                    .over
                      position: absolute
                      width: 100%
                      z-index: 2
                      top: 0
                      left: 0
                  &:first-child, &:last-child
                    span
                      display: inline-block
                      line-height: 14px
                      border-bottom: 2px solid #c4c4c4
                      cursor()
            .loading
              position: absolute
              top: 0
              left: 0
              text-align: center
              width: 100%
              background-color: rgba(255, 255, 255, 0.5)
              line-height: 485px
              height: 485px
              font-size: 20px
          .filtrate_page
            position: absolute
            top: 510px
            left: 0
            width: 100%
            text-align: center
            .filter_page
              .ivu-page-item
                border-color: #dcdddd
                a
                  color(#898989)
                  font-size: 18px
              .ivu-page-item-active
                bgRed()
                a
                  color()
              .ivu-page-prev, .ivu-page-next
                a
                  font-size: 28px
        .block_cont
          width: 270px
          > li
            margin-bottom: 10px
            height: 256px
            border: 1px solid #dcdddd
            bgColor()
            .common_title
              border-bottom: 2px solid text_color
              height: 40px
              line-height: 40px
            .common_cont
              padding-top: 10px
              li
                setStart()
                height: 38px
                padding-left: 16px
                font-size: 0
                span
                  display: inline-block
                  vertical-align: top
                  width: 18px
                  height: 18px
                  line-height: 18px
                  bgRed()
                  color()
                  margin-right: 8px
                  font-size: 12px
                i
                  ellipsis()
                  color: #2c3e50
                  font-size: 12px
    .follow_tip
      width: 440px
      height: 380px
      padding: 10px
      font-size: 14px
      bgColor()
      radius(5px)
      .follow_tip_title
        span
          font-size: 18px
        .close_icon
          position: absolute
          top: -20px
          right: -20px
          height: 36px
          width: 36px
          line-height: 36px
          bgRed()
          radius(50%)
          color()
          cursor: pointer
      .fllow_split
        height: 32px
        position: relative
        i, span
          display: inline-block
          height: 100%
        .pre_scissor
          float: left
          width: 21px
          bgNormal(imgPathNew + 'pre_scissor.png')
        .middle_dotted
          position: absolute
          width: 383px
          left: 18px
          right: 18px
          bgNormal(imgPathNew + 'dotted_line.png')
          background-size: 100% 1px
        .nex_scissor
          float: right
          width: 21px
          bgNormal(imgPathNew + 'next_scissor.png')
      ul
        user-select: none
        li
          setMiddle()
          height: 30px
          > span
            width: 40%
            text-align: right
          > div
            width: 58%
            text-align: left
            padding-left: 10px
        .fold_increase
          .increase_frame
            width: 130px
            height: 26px
            setStart()
            i
              width: 25px
              height: 26px
              bgColor(#d87c7c)
              color()
              text-align: center
              font-size: 16px
              cursor: pointer
              .minus_num
                radiusLeft(5px)
              .add_num
                radiusRight(5px)
            input
              height: 100%
              border-top: common_border
              border-bottom: common_border
              width: 60px
      .confirm_btn
        width: 214px
        height: 35px
        line-height: 35px
        commonBtn()
        radius(5px)
        font-size: 18px
        margin: 10px auto
      .time_count_down
        margin-top: 10px
    .showPrompt
      position: absolute
      top: 0
      left: 0
      z-index: 10
      > span
        display: inline-block
        border-width: 10px
        border-color: #FC5667 transparent transparent transparent
        border-style: solid
        position: relative
        left: -42%

  .utilFollow {
    width: 694px;
    height: 300px;
    border: 2px solid #FC5667;
    background: #FDFFF2;
    .headerImg {
      width: 150px;
      float: left;
      margin-top: 70px;
    }
    > table {
      position: relative;
      margin-top: 4%;
      > tbody {
        width: 100%;
        height: 100%;
        > tr > td {
          padding: 6px;
          border: 1px solid #EBF2D6;
        }
        :first-child, :nth-child(3) {
          // width: 120px;
          text-align: right;
        }
        :nth-child(2), :last-child {
          width: 180px;
          text-align: left;
        }
        .commission, .planAmount, .bonus {
          color: #FC5667;
        }
        .plan {
          color: #E5A42E;
        }

      }
    }
    .followBtn {
      p {
        width: 120px;
        height: 30px;
        border-radius: 3px;
        color: white;
        margin-top: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
        margin-left: 10px;
        position: relative;
        left: 42%;
        cursor: pointer;
      }
      .followOrder {
        background: linear-gradient(#FE6A75, #FD6784);
      }
      .guanzhu {
        background: linear-gradient(#70C9AD, #64B2D7);
      }
      .dianzan {
        background: linear-gradient(#FF8BE2, #CA62CE);
      }
    }
  }

</style>
