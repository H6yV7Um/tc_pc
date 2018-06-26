<template>
  <div class="single-goods">
    <div class="img">
      <img :src="goods.coverImgSrc" alt="">
    </div>
    <div class="info">
      <div class="title-price">
        <span class="title">{{goods.name}}</span>
        <span class="price">市场价：¥{{goods.sellPrice}}</span>
      </div>
      <p>{{goods.simpleDesc}}</p>
    </div>
    <div class="condition">
      <div class="least-condition">积分要求：{{goods.basePrice}}</div>
      <div class="btn" @click="goToExchange">立即兑换</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "single-good",
    props: {
      goods: {
        required: true
      }
    },
    methods: {
      goToExchange() {
        this.$emit('goToExchange', this.goods);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .single-goods
    width: 280px
    height: 322px
    border: 1px solid #dcdddd
    display: inline-block
    vertical-align: top
    position: relative
    &:nth-child(4n+0)
      margin-right: 0
    .img
      width: 100%
      height: 234px
      overflow: hidden
      padding: 8px 0 14px 0
      img
        height: 100%
        max-width: 85%
        display: block
        margin: 0 auto
    .info
      width: 100%
      padding: 0 10px 0 6px
      .title-price
        overflow: hidden
        line-height: 14px
        span
          display: inline-block
          vertical-align: top
          color: #333333
          &.title
            max-width: 160px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-size: 14px
            float: left
          &.price
            float: right
            font-size: 12px
      p
        font-size: 12px
        margin-top: 6px
        color: #999999
    .condition
      width: 100%
      padding: 0 8px 0 6px
      font-size: 14px
      overflow: hidden
      position: absolute
      bottom: 8px
      .least-condition
        color: #ff5868
        float: left
        margin-top: 6px
      .btn
        color: #ffffff
        width: 100px
        height: 26px
        background: #ff5868
        text-align: center
        line-height: 26px
        cursor: pointer
        float: right
        border-radius: 26px
        user-select: none
</style>
