<template>
  <div class="goods-detail">
    <div class="goods-content">
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
        <div class="detail">
          <div class="img">
            <img :src="imgSrc" alt="">
          </div>
          <div class="infor">
            <h4 class="title">平角裤夏季防走光三分安全打底裤Apple Iphone7Plus</h4>
            <div class="abstract">全网通移动联通电信4G 128G</div>
            <div class="price"><i>市场价：</i> <span>¥5888</span></div>
            <div class="condition"><i>积分要求：</i> <span>1698326</span></div>
            <div class="model">
              <i>市场价：</i>
              <select>
                <option value="volvo">苹果7xx</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="count">
              <i>数量：</i>
              <v-add-reduce></v-add-reduce>
            </div>
            <div class="btn-group">
              <div class="buyNow">立即购买</div>
              <div class="addToshopCart active">
                <span class="icon"></span><span class="word">加入购物车</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guess-your-love">
        <h3 class="title">商品精选</h3>
        <div class="shop-item">
          <div class="item" v-for="i in 4">
            <v-single-goods></v-single-goods>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import singleGoods from './public/singleGoods'
  import addReduce from './public/addReduce'
  import exchangeType from './public/exchangeType'

  export default {
    name: "goods-detail",
    components: {
      'v-single-goods': singleGoods,
      'v-add-reduce': addReduce,
      'v-exchange-type': exchangeType
    },
    data() {
      return {
        imgSrc: './src/img/integralMall/shop.png'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../css/stylus/index.styl";
  .goods-detail
    overflow: hidden
    background: url(goodsDetail + 'bg.jpg') no-repeat center
    background-size: cover
    .goods-content
      margin: 18px auto 50px auto
      border-radius: 15px
      width: main_width
      overflow: hidden
      line-height: 1
      background: #fff
      padding-bottom: 34px
      .goods-list
        width: 100%
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
        .detail
          padding: 0 22px
          font-size: 0
          text-align: left
          margin-bottom: 100px
          overflow: hidden
          display: flex
          .img
            height: 358px
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            width: 394px
            border: 1px solid #dcdddd
            margin-right: 42px
            img
              display: block
              max-height: 330px
              max-width: 80%
              min-height: 300px
          .infor
            flex: 1
            overflow: hidden
            i
              display: inline-block
              width: 80px
              vertical-align: top
              font-size: 14px
            .title
              font-size: 18px
              color: #333333
              margin-top: 16px
            .abstract
              font-size: 14px
              color: #999999
              margin-top: 32px
            .price
              color: #999999
              margin-top: 32px
              span
                color: #666666
                font-size: 14px
            .condition
              color: #999999
              margin-top: 32px
              span
                color: #ff5868
                font-size: 14px
            .model
              color: #999999
              margin-top: 30px
              i
                width: 66px
                padding-top: 6px
              select
                display: inline-block
                outline: none
                min-width: 120px
                vertical-align: top
                color: #666666
                font-size: 14px
            .count
              color: #999999
              margin-top: 30px
              i
                width: 66px
                padding-top: 6px
            .btn-group
              margin-top: 32px
              div
                width: 196px
                height: 34px
                border: 1px solid #ff6979
                text-align: center
                line-height: 32px
                display: inline-block
                vertical-align: top
                font-size: 16px
                font-weight: 700
                color: #dcdddd
                cursor: pointer
                &.active, &:hover
                  background: #ff6979
                  color: #fff
                &.addToshopCart
                  margin-left: 14px
                  .icon
                    display: inline-block
                    vertical-align: top
                    margin-top: 6px
                    padding-top: 20px
                    padding-left: 18px
                    margin-right: 5px
                    height: 0
                    background: url(goodsDetail + 'cart-arrow.png') no-repeat 0 center
      .guess-your-love
        width: 100%
        font-size: 0
        text-align: left
        .title
          color: #333333
          padding: 22px 0 16px 22px
          border-top: 1px solid #dcdddd
          font-size: 18px
        .shop-item
          padding: 0 22px
          font-size: 0
          text-align: left
          overflow: hidden
          .item
            float: left
            margin-right: 6px
            margin-top: 10px
</style>
