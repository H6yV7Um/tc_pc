<template>
  <div class="utilFollow">
    <p class="headerImg">
      <img src="../img/thirdParty/potrait.png" alt="">
      <img src="../img/thirdParty/grade_img.png">
    </p>
    <table>
      <tbody>
      <tr>
        <td>昵称：</td>
        <td>{{data.nickName}}</td>
        <td>计划达人：</td>
        <td class="plan">
          <i class="icon">&#xe6b3;</i>
          <span>{{data.feat}}</span>
        </td>
      </tr>
      <tr>
        <td>佣金比例：</td>
        <td class="commission">{{data.commRate}}</td>
        <td>历史中奖率：</td>
        <td>{{data.historyRate + '%'}}</td>
      </tr>
      <tr>
        <td>最高连中：</td>
        <td>{{data.maxContinuityCount}}</td>
        <td>当前连中：</td>
        <td>{{data.currentContinuityCount}}</td>
      </tr>
      <tr>
        <td>参与人数：</td>
        <td>{{data.followOrderAmount}}</td>
        <td>昨日计划排行：</td>
        <td></td>
      </tr>
      <tr>
        <td>玩法：</td>
        <td>{{data.lottery}}</td>
        <td>投注注数：</td>
        <td>{{data.orderAmount}}注</td>
      </tr>
      <tr>
        <td>方案金额：</td>
        <td class="planAmount">{{data.orderAmount}}元</td>
        <td>奖金：</td>
        <td class="bonus">{{data.bonus}}</td>
      </tr>
      </tbody>
    </table>
    <div class="followBtn">
      <p class="followOrder" @click="showData">
        <i class="icon">&#xe687;</i>
        <span>我要跟单</span>
      </p>
      <p class="guanzhu" @click="focus">
        <i class="icon">&#xe6ad;</i>
        <span>{{data.isFocus | isFocus}}关注</span>
        <span>({{data.focusedCount}})</span>
      </p>
      <p class="dianzan" @click="setlike">
        <i class="icon">&#xe696;</i>
        <span>赞</span>
        <span>(111)</span>
      </p>
    </div>
  </div>
</template>

<script>
  import {gendan} from './../js/index'

  let gendanFn = gendan()
  export default {
    props: {
      'data': {
        type: Object
      }
    },
    data() {
      return {};
    },
    filters: {
      isFocus(val) {
        if (typeof val !== 'undefined') {
          return val ? '已' : '未'
        }
      }
    },
    components: {},
    methods: {
      // 关注
      focus() {
        gendanFn.followUser(this, {id: this.data.id})
      },
      showData() {
        console.log(this.data)
      },
      // 点赞
      setlike() {
        let params = {
          followOrderId: this.data.startOrderId
        }
        gendanFn.setLike(this, params)
      }
    },
    watch: {
      data: {
        deep: true,
        handler(val) {
          // console.log(val)
        }
      }
    }
  }
</script>
<style lang="stylus">
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
    table {
      position: relative;
      margin-top: 4%;
      tbody {
        width: 100%;
        height: 100%;
        tr {
          height: auto;
        }
        tr > td {
          padding: 6px;
          border: 1px solid #EBF2D6;
        }
        :first-child, :nth-child(3) {
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
      overflow: hidden;
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
