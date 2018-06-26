<template>
  <div class="exchangeType">
    <ul>
      <li class="active">礼物兑换</li>
      <li>现金兑换</li>
      <li>积分抽奖</li>
      <li>我的积分与兑换</li>
    </ul>
    <div class="shopcart">我的购物车(<span>0</span>)</div>
  </div>
</template>

<script>
  export default {
    name: "exchange-type"
  }
</script>

<style lang="stylus" scoped>
  .exchangeType
    border-bottom: 1px solid #dcdddd
    margin-top: 30px
    position: relative
    ul
      font-size: 0
      text-align: left
      li
        display: inline-block
        vertical-align: top
        margin: 0 18px -1px 18px
        font-size: 18px
        color: #666666
        padding: 4px
        cursor: pointer
        border-bottom: 1px solid transparent
        user-select: none
        &.active
          border-bottom: 1px solid red
    .shopcart
      height: 18px
      margin-top: -9px
      padding-left: 24px
      line-height: 18px
      background: url( '../../img/integralMall/shopcart.png') no-repeat left center
      font-size: 14px
      color: #666666
      position: absolute
      top: 50%
      right: 40px
      cursor: pointer
      span
        margin: 0 1px
        color: #ff5868
</style>
