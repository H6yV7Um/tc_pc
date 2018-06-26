<template>
  <div class="show_user_info">
    <div class="part1">
      <!--<div class="top_right_part">-->
        <!--<div class="small_triangle"></div>-->
        <!--<div class="big_triangle"></div>-->
        <!--<div class="text-cont">VIP6</div>-->
      <!--</div>-->
      <div class="user_relative">
        <div class="portrait"></div>
        <div class="user_info">
          <div class="nickname fz14">{{baseInfo.userTime}}{{baseInfo.nickName}}</div>
          <div class="last_location">
            <span class="icon common_color">&#xe6a8;</span>
            <i class="">上次登录: </i><span class="common_color">{{loginListInfo | getLocation}} </span>
          </div>
        </div>
      </div>
      <div class="security_relative">
        <SecurityBar :percent="gradeMsg.num" class="security_grade"></SecurityBar>
        <div class="security_cont">
          <div class="fl fz14">
            <i>账户安全等级: </i><span class="common_color">{{gradeMsg.title}}</span>
          </div>
          <router-link to="/userCenter" class="fr" v-show="gradeMsg.num !== 100">去提升></router-link>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="balance_title fz14">
        <div class="fl">
          <i class="icon">&#xe695;</i>
          <span>账户余额:</span>
        </div>
        <a href="/userReport#page=2_report" class="fr common_color">资金明细</a>
      </div>
      <div class="balance_relative">
        <i class="common_color">{{baseInfo.lotteryBalance}}</i>
        <span class="icon fr fz16" @click="userRefresh">&#xe614;</span>
      </div>
      <div class="btn_list fz14">
        <a class="recharge" href="/userAccount#page=0_finance">充值</a>
        <a class="deposit" href="/userAccount#page=1_finance">提款</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import base from '../js/pubilc.js';
  import obj from '../js/httpPath';
  import SecurityBar from './securityBar';
  import {userConter, userInit} from '../js/index.js'

  let init = userInit();
  let initGrade = userConter();

  export default {
    data () {
      return {
        nowTime : '',
        loginListInfo : ''
      };
    },
    created () {
      let that = this;

      this.initLocation();
      this.nowTime = base.formatDate(null, 'yyyy/MM/dd hh:mm');
      this.$http.post('/yx' + obj.APPAPI.POOTYPATH.USER_INFO).then((response) => {
        let type = (response.body.data && response.body.data.main) ?  response.body.data.main.type : 0;
        that.$store.commit('setAccountType', type);
      });
      initGrade.getGrade(this);
    },
    methods : {
      // 刷新余额
      userRefresh() {
        this.baseInfo.lotteryBalance = '-----';
        this.ishowBalance = true;
        init.initlotteryBalance(this);
      },
      // 位置定位
      initLocation () {
        userConter().getLoginListInfo(this);
      }
    },
    computed : {
      baseInfo () {
        return this.$store.state.baseInfo;
      },
      gradeMsg () {
        return this.$store.state.gradeMsg;
      }
    },
    components :{
      SecurityBar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../css/stylus/index.styl";

  .show_user_info
    height:100%
    font-size:12px
    .part1, .part2
      padding:16px 10px

      padding-bottom:0
    .part1
      position:relative
      padding-top:25px
      height:50%
      border-bottom:1px solid #dcdddd
      .top_right_part
        position:absolute
        top: 0
        right: 0
        height: 50px
        width:50px
        >div
          position:absolute
          right:0
          top:0
          z-index:4
        .small_triangle, .big_triangle
          width: 0
          height: 0
        .small_triangle
          border-left: 7px solid transparent
          border-bottom: 7px solid transparent
          border-top: 7px solid #fff
          border-right: 7px solid #fff
        .big_triangle
          z-index:3
          border-left: 25px solid transparent
          border-bottom: 25px solid transparent
          border-top: 25px solid red
          border-right: 25px solid red
        .text-cont
          top:7px
          font-size: 14px
          color()
          transform:rotate(45deg)
      .user_relative
        display:flex
        justify-content: flex-start
        .portrait
          width:54px
          height: 54px
          radius(50%)
          bgNormal(imgPathIndex + 'portrait.png')
          margin-right:5px
        .user_info
          height:50px
          .nickname
            max-width:114px
            color(#333)
            ellipsis()
      .security_relative
        .grade_bar
          height: 8px
          radius(4px)
          bgColor(#efefef)
        .security_grade
          margin: 12px 5px 5px 5px
        .security_cont
          overflow:hidden
    .part2
      height:49%
      .balance_title
        overflow:hidden
        a
          text-decoration:underline
      .balance_relative
        height: 36px
        line-height:36px
        bgColor(#fff0f1)
        radius(4px)
        margin:8px 0
        padding-right:5px
        i
          font-size:22px
        span
          color(#999)
          cursor()
      .btn_list
        margin-top:5px
        a
          display:inline-block
          width: 74px
          height: 30px
          line-height: 30px
          color:#fff
          radius(3px)
        .recharge
          bgColor(bg_color)
          margin-right:10px
        .deposit
          bgColor(#56b04b)
</style>
