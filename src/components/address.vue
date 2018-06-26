<template>
  <div class="address-wrapper">
    <div class="address-content">
      <div class="title">
        <ul>
          <li class="active">填写并核对订单信息</li>
        </ul>
      </div>
      <div class="person-infor address-item">
        <div class="top">
          <h5>收货人信息</h5>
          <div class="add-address">新增收货地址</div>
        </div>
        <ul>
          <li v-for="i in 5">
            <div class="province-city" :class="{active:i===1}"><span class="province">广东</span><span
              class="city">深圳</span></div>
            <div style="margin-left:13px">孙悟空</div>
            <div style="margin-left:16px">上海</div>
            <div style="margin-left:12px">徐汇</div>
            <div style="margin-left:10px">徐汇街道徐汇校区XXXX徐汇大夏A座606</div>
            <div style="margin-left:35px">135****1111</div>
          </li>
        </ul>
        <div class="collapse">
          收起地址
        </div>
      </div>
      <div class="pay-way address-item">
        <div class="top">
          <h5>支付方式</h5>
        </div>
        <ul>
          <li>货到付款</li>
          <li class="active">在线支付</li>
        </ul>
      </div>
      <div class="address-item result-infor">
        <div class="top">
          <h5>送货清单</h5>
          <div class="descreption">
            <div><i class="icon">&#xe71c;</i><span>价格说明</span></div>
            <div>返回修改购物车</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "address"
  }
</script>

<style lang="stylus" scoped>
  @import "../css/stylus/index.styl";
  .address-wrapper
    overflow: hidden
    background: url(goodsDetail + 'bg.jpg') no-repeat center
    background-size: cover
    font-size: 0
    .address-content
      margin: 18px auto 50px auto
      border-radius: 15px
      width: main_width
      overflow: hidden
      line-height: 1
      background: #fff
      padding-bottom: 34px
      text-align: left
      .title
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
      .top
        position: relative
        h5
          font-size: 14px
      .address-item
        margin: 36px 47px 0 47px
        border-bottom: 1px solid #e6e6e6
        padding-bottom: 12px
      .person-infor
        .top
          .add-address
            font-size: 12px
            color: #005ea7
            cursor: pointer
            user-select: none
            position: absolute
            right: 0
            top: 0
        ul
          padding-left: 18px
          li
            margin-top: 12px
            div
              display: inline-block
              vertical-align: top
              font-size: 12px
              color: #666
              line-height: 30px
              &.province-city
                text-align: center
                width: 144px
                line-height: 28px
                border: 1px solid #dddddd
                height: 30px
                cursor: pointer
                user-select: none
                &.active
                  background: url(imgPathAddress + 'choose-address.jpg') no-repeat center
                  border: none
                  line-height: 30px
                .city
                  margin-left: 4px
      .pay-way
        padding-bottom: 18px
        ul
          padding-left: 18px
          margin-top: 12px
          li
            display: inline-block
            vertical-align: top
            text-align: center
            width: 144px
            line-height: 28px
            border: 1px solid #dddddd
            height: 30px
            cursor: pointer
            user-select: none
            font-size: 12px
            color: #666
            margin-right: 8px
            &.active
              background: url(imgPathAddress + 'choose-address.jpg') no-repeat center
              border: none
              line-height: 30px
      .result-infor
        .top
          position: relative
          .descreption
            position: absolute
            right: 0
            top: 0
            div
              display: inline-block
              vertical-align: top
</style>
