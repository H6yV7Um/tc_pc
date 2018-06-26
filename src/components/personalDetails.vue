<template>
  <div class="personal_detail drop_down_list" id="personal_detail" :style="{top: topValue + 'px', left: leftValue + 'px'}">
    <div class="border_triangle top_triangle" :style="{marginLeft : marginLeft + 'px'}" v-show="!isTopTriangle">
      <!--<div></div>-->
    </div>
    <div class="drop_down_content">
      <div class="top_part">
        <div class="portrait_part">
          <div class="portrait"></div>
          <div class="user_grade"></div>
        </div>
        <div class="text_info">
          <ul>
            <li class="first_row">
              <span>昵称 : </span>
              <div>不准脱裤子</div>
            </li>
            <li class="first_row">
              <span>计划达人等级 : </span>
              <div><i class="icon">&#xe6b8;</i>不准脱裤子</div>
            </li>
            <li>
              <span>抽佣金 : </span>
              <div class="common_color">2%</div>
            </li>
            <li>
              <span>历史中奖率 : </span>
              <div>95%</div>
            </li>
            <li>
              <span>最高连中 : </span>
              <div>980期</div>
            </li>
            <li>
              <span>参与人数 : </span>
              <div>20人</div>
            </li>
            <li>
              <span>昨日计划排行 : </span>
              <div>第60名</div>
            </li>
            <li>
              <span>玩法 :</span>
              <div>重庆彩后三直选</div>
            </li>
            <li>
              <span>投注注数 :</span>
              <div>1300注</div></li>
            <li class="last_row">
              <span>方案金额 :</span>
              <div class="common_color">200000元</div>
            </li>
            <li class="last_row">
              <span>奖金 :</span>
              <div class="common_color">50000元</div>
            </li>
          </ul>
        </div>
      </div>
      <ul class="li_btn">
        <li class="follow_order">
          <span class="icon"></span>
          <i>我要跟单</i>
        </li>
        <li class="pay_attention">
          <span class="icon"></span>
          <i>关注（1998）</i>
        </li>
        <li class="thumbs_up">
          <span class="icon"></span>
          <i>赞（9999）</i>
        </li>
      </ul>
    </div>
    <!--<div class="drop_down_arrow"></div>-->
    <div class="border_triangle bottom_triangle" :style="{marginLeft : marginLeft + 'px'}" v-show="isTopTriangle">
      <!--<div></div>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRect} from '../js/common.js';

  export default {
    data () {
      return {
        topValue : 0,
        leftValue : 0,
        marginLeft : 0,
        isTopTriangle : true
      }
    },
    beforeCreate () {

    },
    computed : {

    },
    methods : {
      getPosition (e) {
        let mainWidth = document.documentElement.clientWidth;   // 页面总宽度
        let mainHeight = document.documentElement.clientHeight; // 页面总高度
        let width = e.target.offsetWidth; // 鼠标目标元素宽度
        let height = e.target.offsetHeight; // 鼠标目标元素高度
        let clientX = getRect(e.target).left + width / 2;  // 鼠标目标元素距离左边框距离
        let clientY = getRect(e.target).top; // 鼠标距离顶边框距离
        let leftClient = (mainWidth - 1200) / 2;
        let specialClientLeft = document.getElementById('special_purpose').offsetLeft; // 中心内容距离左边框距离
        let personalWidth = document.getElementById('personal_detail').offsetWidth; // 弹窗的宽
        let personalHeight = document.getElementById('personal_detail').offsetHeight; // 弹框的高
        let clientX_ = mainWidth - clientX; // 鼠标距离右边框距离
        let clientY_ = mainHeight - clientY; // 鼠标距离底边框距离

        let leftD = clientX - personalWidth / 2;
        let topD = clientY - personalHeight;

        if (leftD < 0) {
          this.leftValue = 10;
          this.marginLeft = clientX - 15;
        } else {
          if (mainWidth - clientX < personalWidth / 2) {
            this.leftValue = mainWidth - personalWidth;
            this.marginLeft = personalWidth - (mainWidth - clientX)
          } else {
            this.leftValue = leftD;
            this.marginLeft = personalWidth / 2 - 7;
          }
        }

        if (topD < 0) {
          this.isTopTriangle = false;
          this.topValue = clientY + height;
        } else {
          this.isTopTriangle = true;
          this.topValue = topD;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../css/stylus/index.styl";

  .personal_detail
    position:fixed !important
    .drop_down_content
      width:622px
      padding:10px
      border:2px solid bg_color
      bgColor(#fcfff2 !important)
      .top_part
        margin-bottom:10px
        setBetween()
        .portrait_part
          width:110px
          setColumn()
          .portrait
            height:68px
            bgNormal(imgPathThird + 'potrait.png')
          .user_grade
            height:20px
            bgNormal(imgPathThird + 'grade_img.png')
        .text_info
          width:510px
          ul
            display:flex
            justify-content:flex-start
            align-items:center
            flex-wrap:wrap
            font-size:0
            width:494px
            li
              width: 247px
              font-size:0
              box-sizing:border-box
              margin-top:-5px
              &:nth-child(even)
                div
                  border-right:1px solid #e8f0cf
              span, div
                display:inline-block
                font-size:12px
                border-left:1px solid #e8f0cf
                border-top:1px solid #e8f0cf
              span
                padding-right:10px
                text-align:right
                width:40%
              div
                padding-left:10px
                width:60%
            .first_row
              margin-top:0
            .last_row
              span, div
                border-bottom:1px solid #e8f0cf
      .li_btn
        overflow:hidden
        li
          float:right
          width: 108px
          height:30px
          line-height: 30px
          radius(5px)
          color()
          margin-right:10px
          text-align:center
        .follow_order
          background-image:-webkit-linear-gradient(left, #fbc9cd, #ff6a75)
        .pay_attention
          background-image:-webkit-linear-gradient(left, #70cab0, #64b3d8)
        .thumbs_up
          background-image:-webkit-linear-gradient(left, #fe8be2, #cc61cf)
    .border_triangle
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    .top_triangle
      border-bottom: 14px solid bg_color;
    .bottom_triangle
      border-top: 14px solid bg_color;
</style>
