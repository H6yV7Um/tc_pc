<template>
  <div class="cart-list">
    <div class="cart-content">
      <div class="goods-list">
        <div class="goods-item">
          <v-exchange-type :showCount="showCount"></v-exchange-type>
        </div>
        <div class="list-detail">
          <div class="thead">
            <div class="choose-all" @click="chooseAll"><i class="choose-icon"
                                                          :class="{active:selectAll}"></i><span>全选</span></div>
            <div class="title">商品</div>
            <div class="price">价格</div>
            <div class="count">数量</div>
            <div class="total">小计</div>
            <div class="action">操作</div>
          </div>
          <div class="tbody">
            <ul>
              <li class="item" v-for="(goods,index) in cartList" :key="index">
                <div class="choose-btn">
                  <i class="choose-icon" :class="{active:goods.checked}" @click="goods.checked = !goods.checked"></i>
                </div>
                <div class="goods-info">
                  <div class="img">
                    <img :src="goods.product.coverImgSrc" alt="">
                  </div>
                  <div class="abstract">
                    <p class="title">{{goods.product.name}}</p>
                    <p class="abstract">{{goods.product.simpleDesc}}</p>
                  </div>
                  <!--<div class="color-size">-->
                  <!--<p class="color">颜色：银色</p>-->
                  <!--<p class="size">尺码：公开版</p>-->
                  <!--</div>-->
                </div>
                <div class="price">￥{{goods.product.sellPrice}}</div>
                <div class="count">
                  <v-add-reduce :count="goods.count" :id="goods.product.id" @changeCount="changeCount"></v-add-reduce>
                </div>
                <div class="total">￥{{goods.count*goods.product.sellPrice}}</div>
                <div class="action">
                  <p class="del" @click="delSingleCart({count:0,id:goods.product.id})">删除</p>
                  <!--<p class="focus">移动到我的关注</p>-->
                </div>
              </li>
            </ul>
          </div>
          <div class="tfoot">
            <div class="del-all" @click="delCartBetll">删除选中的商品</div>
            <!--<div class="focus-all">移动到我的关注</div>-->
            <div class="total-count">已选择<span>{{selectGoodsCount}}</span>件商品</div>
            <div class="total-price">总价 : <span>￥{{totalPrice}}</span></div>
            <div class="pay-btn" @click="buyNow">兑换</div>
          </div>
        </div>
      </div>
      <!--<div class="guess-your-love">-->
        <!--<h3 class="title">商品精选</h3>-->
        <!--<div class="shop-item">-->
          <!--<div class="item" v-for="i in 4">-->
          <!--<v-single-goods></v-single-goods>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import singleGoods from './public/singleGoods'
  import addReduce from './public/addReduce'
  import exchangeType from './public/exchangeType'

  export default {
    name: "cart-list",
    components: {
      'v-single-goods': singleGoods,
      'v-add-reduce': addReduce,
      'v-exchange-type': exchangeType
    },
    data() {
      return {
        cartList: [],
        showCount: true
      }
    },
    computed: {
      // 总的价格
      totalPrice() {
        let total = 0
        this.cartList.forEach(item => {
          if (item.checked) {
            total += item.product.sellPrice * item.count
          }
        })
        return total
      },
      // 选择全部
      selectAll() {
        if (this.cartList.length === 0) {
          return false
        }
        for (let i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].checked === false) {
            return false
          }
        }
        return true
      },
      // 选中商品的总量
      selectGoodsCount() {
        let total = 0
        this.cartList.forEach(item => {
          item.checked && total++
        })
        return total
      }
    },
    created() {
      this.getCartList();
    },
    methods: {
      // 获取商品列表
      getCartList() {
        let url = '/vip/store/queryGoods';
        this.$http.get(url).then(res => {
          let data = res.body;
          if (data.code === 0) {
            data.data.forEach(item => {
              let middle = Object.assign({}, item, {
                checked: true
              });
              this.cartList.push(middle)
            });
          }
        })
      },
      buyNow() {
        let url = '/vip/store/exchangeCommodity';
        let mixparams  = "[{'amount':10,'id':1}]";
        this.$http.post(url, {products : mixparams}, {emulateJSON:true}).then(res => {
          let data = res.body;
          console.log(data);
          /*if (data.code === 0) {
            this.goodList = data.data.list;
            this.total = data.data.totalCount;
          } else {
            this.goodList = [];
          }
          console.log(data);*/
        });
      },
      // 全部选择
      chooseAll() {
        this.cartList.forEach(item => {
          item.checked = !this.selectAll
        })
      },
      // 增减商品数量 当传入数量为0时为删除 不为零时为增减
      changeCount(data) {
        let url = '/vip/store/addGoods'
        let params = {
          goodsId: data.id,
          number: data.count
        }
        this.$http.get(url, {params}).then(res => {
          if (res.body.code === 0) {
            if (data.count === 0) {
              this.cartList.splice(data.index, 1);
            } else {
              for (let i = 0; i < this.cartList.length; i++) {
                if (this.cartList[i].product.id === data.id) {
                  this.cartList[i].count = res.body.data
                  break
                }
              }
            }
          } else {
            this.$Message.error('服务器抽风中,请再次提交.......');
          }
        });
      },
      // 删除单个商品
      delSingleCart(data) {
        this.$Modal.confirm({
          title: '确认要删除该商品吗?',
          content: '<p>该商品将从购物车中删除!!</p>',
          onOk: () => {
            this.changeCount(data);
          }
        });
      },
      // 批量删除商品
      delCartBetll() {
        this.$Modal.confirm({
          title: '确认要删除选中的商品吗?',
          content: '<p>选中的商品将从购物车中删除!!</p>',
          onOk: () => {
            let arr = []
            this.cartList.forEach(item => {
              if (item.checked) {
                let obj = {
                  id: item.product.id,
                  count: 0
                }
                arr.push(obj)
              }
            })
            arr.forEach(item => {
              this.changeCount(item);
            })
          }
        });
      }
    },
    watch: {
      // 实时更新总的商品数量
      cartList: {
        deep: true,
        handler(newVal, oldVal) {
          let num = 0;
          this.cartList.forEach(item => {
            num += parseInt(item.count)
          });
          this.$store.commit('setCartTotalCount', num)
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import "../css/stylus/index.styl";
  .v-transfer-dom
    .ivu-btn-primary
      border-color: #ff6979
      background-color: #ff6979
      &:hover
        border-color: #ff6979
        background-color: #ff6979

  .cart-list
    overflow: hidden
    padding-bottom: 0
    line-height: 1
    min-height: 800px
    background: #fee5e7 url(imgPathIntegralMall + 'bg.jpg') no-repeat center top
    font-size: 0
    .cart-content
      margin: 18px auto 50px auto
      border-radius: 15px
      width: main_width
      overflow: hidden
      line-height: 1
      background: #fff
      padding-bottom: 34px
      .list-detail
        padding-top: 8px
        text-align: left
        .choose-icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          border: 1px solid #b8b8b8
          background-color: #fff
          background-repeat: no-repeat
          background-position: center
          &.active
            background-image: url(imgPathCartList + 'choose.png')
        .thead
          width: 100%
          padding: 14px 0 14px 18px
          background: #dcdddd
          color: #666666
          div
            font-size: 14px
            display: inline-block
            vertical-align: top
            &.choose-all
              cursor: pointer
              user-select: none
              .choose-icon
                margin-right: 3px
                margin-top: 1px
            &.title
              margin-left: 28px
            &.price
              margin-left: 472px
              width: 116px
              text-align: center
            &.count
              width: 104px
              text-align: center
            &.total
              width: 116px
              text-align: center
            &.action
              margin-left: 74px
        .tbody
          li.item
            padding: 22px 0 22px 34px
            border-bottom: 1px solid #f1f1f1
            div
              display: inline-block
              vertical-align: top
              &.choose-btn
                cursor: pointer
                margin-top: 11px
              &.goods-info
                margin-left: 40px
                width: 502px
                .img
                  width: 34px
                  height: 34px
                  padding: 2px 4px
                  text-align: center
                  border: 1px solid #dcdddd
                  margin-right: 4px
                  img
                    display: block
                    margin: 0 auto
                    height: 100%
                    max-width: 100%
                .abstract
                  font-size: 12px
                  color: #333333
                  width: 280px
                  p
                    white-space: nowrap
                    overflow: hidden
                    text-overflow: ellipsis
                    &.title
                      margin-top: 2px
                    &.abstract
                      margin-top: 6px
                .color-size
                  font-size: 12px
                  color: #999999
                  p
                    &.color
                      margin-top: 2px
                    &.size
                      margin-top: 6px
              &.count
                margin-top: 5px
              &.price, &.total
                font-size: 14px
                color: #666666
                width: 116px
                text-align: center
                line-height: 34px
              &.total
                color: #ff697a
              &.action
                margin-left: 74px
                color: #333333
                font-size: 12px
                .del
                  margin-top: 2px
                  cursor: pointer
                  user-select: none
                  display: inline-block
                .focus
                  margin-top: 5px
                  cursor: pointer
                  user-select: none
        .tfoot
          position: relative
          height: 34px
          margin-top: 14px
          margin-bottom: 64px
          div
            font-size: 14px
            display: inline-block
            vertical-align: top
            color: #666
            line-height: 16px
            margin-top: 9px
            span
              color: #ff6979
              font-size: 16px
              font-weight: bold
              line-height: 16px
              vertical-align: top
            &.del-all
              margin-left: 34px
              cursor: pointer
              user-select: none
            &.focus-all
              margin-left: 48px
              cursor: pointer
              user-select: none
            &.total-count
              width: 268px
              margin-left: 196px
            &.total-price
              width: 188px
              span
                margin-left: 8px
            &.pay-btn
              width: 124px
              height: 34px
              line-height: 34px
              text-align: center
              color: #ffffff
              background: #ff6979
              margin-top: 0
              cursor: pointer
              position: absolute
              top: 0
              right: 66px
              font-weight: bold
              font-size: 16px
              user-select: none

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
