<template>
  <div class="integralMall-wrapper">
    <div class="integralMall-content">
      <div class="current-integral">
        <div class="inner">
          <span class="num">当前积分 : {{bonus}}</span>
          <i class="more">?</i>
        </div>
      </div>
      <div class="current-level">
        <div class="detail">
          <span>当前等级 :</span>
          <i class="level">青铜</i>
        </div>
        <div class="promt-info">（距离下一个等级差1000积分）</div>
        <div class="level-progress">
          <ul class="word">
            <li v-for="(item,index) in level" :class="{active:currentLevel === index}">{{currentLevel === index ? '' :
              item}}
            </li>
          </ul>
          <ul class="icon">
            <li v-for="item in level.length"></li>
          </ul>
        </div>
      </div>
      <div class="nv-item">
        <ul>
          <li v-for="(item,index) in navItem">
            <div :class="'item item_vip'+index"></div>
            <p>{{item.word}}</p>
            <div v-show="index === 1" class="active-nav"></div>
          </li>
        </ul>
      </div>
      <div class="goods-list">
        <div class="goods-item">
          <v-exchange-type></v-exchange-type>
        </div>
        <div class="type-item">
          <ul>
            <li>兑换类型</li>
            <li>全部</li>
            <li>电子产品</li>
            <li>汽车</li>
            <li>生活用品</li>
            <li>定制珍藏品</li>
            <li>限时抢购</li>
            <li class="active">我可兑换的</li>
          </ul>
        </div>
        <div class="shop-item">
          <div class="item" v-for="i in 8">
            <v-single-goods></v-single-goods>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import singleGoods from './public/singleGoods'
  import exchangeType from './public/exchangeType'

  export default {
    name: "integral-mall",
    components: {
      'v-single-goods': singleGoods,
      'v-exchange-type': exchangeType
    },
    data() {
      return {
        level: [
          'v1青铜级',
          'v2白银级',
          'v3黄金级',
          'v4铂金级',
          'v5钻石级',
          'v6黑耀级',
          'v7至尊级'
        ],
        currentLevel: 3,
        bonus:0,
        navItem: [
          {
            word: 'VIP等级与福利'
          },
          {
            word: '免费筹码'
          },
          {
            word: 'VIP生日礼金'
          },
          {
            word: 'VIP晋级礼金'
          },
          {
            word: '提款额度'
          },
          {
            word: '积分商城'
          }
        ]
      }
    },
    created() {
      console.log(this.$route)
    },
    methods: {
      goToExchange(i) {
        console.log(i)
      },
      getVipBonus:function() {
        let that = this;
        this.$http.get('/vip/activity/getActivityList?page='+that.page+'&size='+that.pagesize
        ).then((response) => {
          let obj = response.body.data;
          //console.log(obj,'getActivityListgetActivityList');
          that.onlineActivity = obj.list;
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../css/stylus/index.styl";
  .integralMall-wrapper
    background-image: url(imgPathIntegralMall + 'bg.jpg')
    min-height: 900px;
    padding-bottom: 0;
    overflow: hidden
    line-height: 1
    .integralMall-content
      margin: 0 auto
      width: main_width
      overflow: hidden
      .current-integral
        margin: 170px auto 0 auto
        font-size: 0
        text-align: center
        .inner
          display: inline-block
          background: #ddd
          padding: 3px 2px 3px 18px
          border-radius: 24px
          .num
            display: inline-block
            vertical-align: top
            color: #c56b22
            font-size: 14px
            margin-top: 2px
          .more
            display: inline-block
            vertical-align: top
            width: 18px
            height: 18px
            border-radius: 50%
            background: #ff687a
            font-size: 12px
            line-height: 18px
            color: #fff
            text-align: center
            cursor: pointer
            margin-left: 15px

      .current-level
        margin-top: 5px
        text-align: left
        .detail
          font-size: 0
          span
            font-size: 16px
            color: #222222
            display: inline-block
            vertical-align: top
            padding-top: 4px
          .level
            background: url(imgPathIntegralMall + 'current-level.png')
            display: inline-block
            width: 80px
            height: 24px
            margin-left: 2px
            vertical-align: top
        .promt-info
          color: #fe3242
          padding-top: 6px
          font-size: 12px
        .level-progress
          height: 40px
          background: url(imgPathIntegralMall + 'level-bg.png') no-repeat left bottom
          width: 100%
          padding: 0 10px
          .word
            margin-top: 8px
            display: flex
            justify-content: space-between
            flex-flow: row wrap
            li
              font-size: 14px
              color: #222222
              position: relative
              &:before
                content: ''
                width: 10px
                height: 10px
                border-radius: 50%
                background-color: #fff
                position: absolute
                top: 26px
                left: 50%
                margin-left: -5px
              &.active
                width: 22px
                &:before
                  width: 22px
                  height: 32px
                  top: 6px
                  margin-left: -11px
                  background: url(imgPathIntegralMall + 'level-arrow.png')
              &:last-child:before
                left: 100%
                margin-left: -10px
              &.active:last-child:before
                margin-left: -16px
              &:first-child:before
                left: 0
                margin-left: 0
              &.active:first-child:before
                left: 0
                margin-left: -4px
      .nv-item
        margin-top: 32px
        ul
          height: 146px
          display: flex
          justify-content: space-between
          flex-flow: row wrap
          li
            width: 146px
            position: relative
            border-radius: 50%
            cursor: pointer
            .item
              width: 100%
              height: 100px
              background-position: center
              background-repeat: no-repeat
            .item_vip0
              background-image: url(imgPathIntegralMall + 'nav-item-1.png')
            .item_vip1
              background-image: url(imgPathIntegralMall + 'nav-item-2.png')
            .item_vip2
              background-image: url(imgPathIntegralMall + 'nav-item-3.png')
            .item_vip3
              background-image: url(imgPathIntegralMall + 'nav-item-4.png')
            .item_vip4
              background-image: url(imgPathIntegralMall + 'nav-item-5.png')
            .item_vip5
              background-image: url(imgPathIntegralMall + 'nav-item-6.png')  
            p
              color: #333333
              text-align: center
              line-height: 1
              padding-top: 8px
              font-size: 20px
            .active-nav
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              background-image: url(imgPathIntegralMall + 'nav-item-active.png')
      .goods-list
        width: 100%
        background: #fff
        overflow: hidden
        .type-item
          font-size: 0
          text-align: left
          margin-top: 22px
          margin-bottom: 22px
          li
            font-size: 12px
            color: #999999
            padding: 3px 8px 4px 8px
            margin-left: 12px
            border-radius: 4px
            line-height: 1
            display: inline-block
            vertical-align: top
            cursor: pointer
            &:first-child
              margin-left: 14px
              color: #0a0e0a
            &.active
              background: #e34148
              color: #fff
        .shop-item
          padding: 0 22px
          font-size: 0
          text-align: left
          margin-bottom: 100px
          overflow: hidden
          .item
            float: left
            margin-right: 6px
            margin-top: 10px
</style>
