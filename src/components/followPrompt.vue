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
          <!--<span class="icon">&#xe6b3;</span>-->
          <i>{{data.feat}}</i>
        </td>
      </tr>
      <tr>
        <td>发起跟单：</td>
        <td class="initiate"></td>
        <td>历史中奖率：</td>
        <td></td>
      </tr>
      <tr>
        <td>最高连中：</td>
        <td></td>
        <td>当前连中：</td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <div class="followBtn">
      <p class="guanzhu" @click="focus">
        <i class="icon">&#xe6ad;</i>
        <span>{{data.isFocus | isFocus}}关注</span>
        <span>({{data.focusedCount}})</span>
      </p>
      <!--<p class="dianzan" @click="setlike">-->
      <!--<i class="icon">&#xe696;</i>-->
      <!--<span>赞</span>-->
      <!--<span>(13222)</span>-->
      <!--</p>-->
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
          followOrderId: this.data.billNo
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
<style lang="less" scoped>
  .utilFollow {
    width: 584px;
    height: 200px;
    border: 2px solid #FC5667;
    background: #FDFFF2;
    position: absolute;
    .headerImg {
      width: 150px;
      float: left;
      margin-top: 50px;
      box-sizing: border-box;
      padding-left: 20px;
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
          // width: 100px;
          text-align: right;
        }
        :nth-child(2), :last-child {
          width: 130px;
          text-align: left;
        }
        .plan {
          color: #E5A42E;
        }
        .initiate {
          color: #FC5667;
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
        left: 27%;
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
