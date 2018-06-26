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
            <li class="active">全部</li>
            <!--<li>电子产品</li>-->
            <!--<li>汽车</li>-->
            <!--<li>生活用品</li>-->
            <!--<li>定制珍藏品</li>-->
            <!--<li>限时抢购</li>-->
            <!--<li>我可兑换的</li>-->
          </ul>
        </div>
        <div class="detail">
          <div class="img">
            <img :src="goods.coverImgSrc" alt="">
          </div>
          <div class="infor">
            <h4 class="title">{{goods.name}}</h4>
            <div class="abstract">{{goods.simpleDesc}}</div>
            <div class="price"><i>市场价：</i> <span>¥{{goods.sellPrice}}</span></div>
            <div class="condition"><i>积分要求：</i> <span>100</span></div>
            <!--<div class="model">-->
            <!--<i>选择：</i>-->
            <!--<select>-->
            <!--<option value="volvo">苹果7xx</option>-->
            <!--<option value="saab">Saab</option>-->
            <!--<option value="opel">Opel</option>-->
            <!--<option value="audi">Audi</option>-->
            <!--</select>-->
            <!--</div>-->
            <div class="count">
              <i>数量：</i>
              <v-add-reduce :count="count" @changeCount="changeCount"></v-add-reduce>
            </div>
            <div class="btn-group">
              <div class="buyNow" @click="buyNow">立即兑换</div>
              <div class="addToshopCart active" @click="addToCart">
                <span class="icon">&#xe6bd;</span><span class="word">加入购物车</span>
              </div>
            </div>
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
  import APPAPI from '../js/httpPath'

  // 提示框
  import {Prompt } from '../js/index.js';
  let oPrompt = Prompt();


  export default  {
    name: "goods-detail",
    components: {
      'v-single-goods': singleGoods,
      'v-add-reduce': addReduce,
      'v-exchange-type': exchangeType
    },
    data() {
      return {
        count: 1
      }
    },
    computed: {
      goods() {
        return this.$store.state.singleGoods;
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        if (JSON.stringify(this.goods) === "{}") {
          this.$router.push({path: '/integralMall'})
        }
      },
      changeCount(data) {
        this.count = data.count;
      },
      buyNow() {
      	//点击立即兑换，会先去请求接口的数据，然后提示返回的状态消息

        // let url = '/vip/store/exchangeCommodity';
        let url='/commodityExchange.json'
        let mixparams  = {'amount':10,'id':1};
        // this.$http.post(url, {products : mixparams}, {emulateJSON:true}).then(res => {
        //   let data = res.body;
        //   console.log(data);
        //   /*if (data.code === 0) {
        //     this.goodList = data.data.list;
        //     this.total = data.data.totalCount;
        //   } else {
        //     this.goodList = [];
        //   }
        //   console.log(data);*/
        // });
        this.$http({
	        url:url,
	        params:mixparams,
	        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	        method:'get'
        }).then(function (res) {
          let data=res.data
          if(data.message.includes('请求成功')){
          	// 这个是调取的iview的模态框
	          // this.$Modal.success({title:'提示',content:data.data.text})
	          oPrompt({
		          idx: "boxwarps",
		          message: data.data.text
            })
          }
        },function (err) {
          console.log(err)
	        oPrompt({
		        idx: "boxwarps",
		        message: data.data.text
	        })
        })
      },
      addToCart() {
        let url = '/vip/store/addGoods';
        let params = {
          goodsId: this.goods.id,
          number: this.count
        }
        this.$http.get(url, {params}).then(res => {
          if (res.body.code === 0) {
            this.$store.commit('setCartTotalCount', res.body.data)
            this.$router.push({path: '/cartList'})
          }
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../css/stylus/index.styl";
  .goods-detail
    overflow: hidden
    min-height: 800px
    background: #fee5e7 url(imgPathIntegralMall + 'bg.jpg') no-repeat center top
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
                color: #333
                cursor: pointer
                &.active, &:hover
                  background: #ff6979
                  color: #fff
                &.addToshopCart
                  margin-left: 14px
                  .icon
                    vertical-align: top
                    margin-right: 6px
                    font-size: 20px
                    color: #fff
                    font-weight: 400
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
