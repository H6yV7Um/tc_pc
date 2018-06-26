<template>
  <div class="exchangeType">
    <ul>
      <li><router-link to="/mall">礼物兑换</router-link></li>
      <li><router-link to="/mybonus/1">现金兑换</router-link></li>
      <!--<li><router-link to="/mybonus/3">积分抽奖</router-link></li>-->
      <li><router-link to="/mybonus/2">我的积分与兑换</router-link></li>
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
        height 30px
        vertical-align: top
        margin: 0 18px
        font-size: 18px
        color: #666
        padding: 4px
        cursor: pointer
        border-bottom: 1px solid transparent
        user-select: none
        box-sizing border-box
        a
          display inline-block
          height 27px
          padding 0 5px
          color #666
          &.router-link-active
            color #ff416d
            border-bottom: 1px solid #ff416d
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
