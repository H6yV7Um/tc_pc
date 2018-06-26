<template>
  <div class="integralMall-wrapper">
    <div class="integralMall-content">
      <div class="current-integral">
        <div class="inner">
          <span class="num">当前积分 : {{nowbonus}}</span>
          <i class="more">
            ?
            <div class="tips">
              <h6>投注换积分细则</h6>
              <p>
                1、会员在彩票消费1元，将获得1积分； <br>
                2、兑换比例不定期调整，请以兑换实时比例为准。<br>
                3、积分结算只针对彩票消费，不包括百家乐消费，积分兑换的金额将直接派发到彩票账户。<br>
                4、最终解释权及更改权归头彩娱乐所有！
              </p>
            </div>
          </i>
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
            <li v-for="(item,index) in level"
                :class="{active:currentLevel === index}">
              {{currentLevel === index ? '':item}}
            </li>
          </ul>
          <ul class="icon">
            <li v-for="item in level.length"></li>
          </ul>
        </div>
      </div>
      <div class="nv-item">
        <ul>
          <li v-for="(item,index) in navItem" @click="tabs(index)">
            <div class="item" :class="navcls(index)"></div>
            <p>{{item.word}}</p>
            <div v-show="index === currentIndex" class="active-nav"></div>
          </li>
        </ul>
      </div>
      <div class="VIP-level" v-if="currentIndex === 0">
        <ul>
          <li>
            <div class="title"></div>
            <div>投注换积分</div>
            <div>Vip每月免费筹码</div>
            <div>VipP积分兑换</div>
            <div>Vip生日礼金</div>
            <div>Vip晋级礼金</div>
            <div>Vip每月特别优惠</div>
            <div>当日提款额度</div>
          </li>
          <li>
            <div class="title">
              <img src="../img/integralMall/level_01.png">
              <p>青铜VIP</p>
            </div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>58元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>168元</div>
            <div>66元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>40万</div>
          </li>
          <li>
            <div class="title">
              <img src="../img/integralMall/level_02.png">
              <p>白银VIP</p>
            </div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>168元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>288元</div>
            <div>168元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>50万</div>
          </li>
          <li>
            <div class="title">
              <img src="../img/integralMall/level_03.png">
              <p>黄金VIP</p>
            </div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>1088元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>1088元</div>
            <div>888元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>60万</div>
          </li>
          <li>
            <div class="title">
              <img src="../img/integralMall/level_04.png">
              <p>紫晶VIP</p>
            </div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>5088元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>5088元</div>
            <div>1888元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>80万</div>
          </li>
          <li>
            <div class="title">
              <img src="../img/integralMall/level_05.png">
              <p>钻石VIP</p>
            </div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>16888元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>16888元</div>
            <div>5888元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>100万</div>
          </li>
          <li>
            <div class="title">
              <img src="../img/integralMall/level_06.png">
              <p>至尊VIP</p>
            </div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>22888元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>22888元</div>
            <div>16888元</div>
            <div>
              <i class="icon">&#xe660;</i>
            </div>
            <div>无上限</div>
          </li>
        </ul>
        <div class="content">
          <img class="logo" src="../img/integralMall/vip_logo.png">
          <img src="../img/integralMall/vip_content.png">
        </div>
      </div>
      <div class="free" v-if="currentIndex === 1">
        <h6>申请方式</h6>
        <p>符合VIP资格的会员以邮件的形式申请开通对应VIP层级！</p>
        <h6>生日礼金细则</h6>
        <p>
          1、VIP条件结算为每月1日至每月月底为周期结算一次。 <br>
          2、每月10号系统自动派发免费筹码，会员自行领取。请于次月10日前领取，否则将视为放弃，系统自动清零。<br>
          3、免费筹码必须消费1倍流水，方能出款。<br>
          4、最终解释权及更改权归头彩娱乐所有！
        </p>
      </div>
      <div class="birthday" v-if="currentIndex === 2">
        <h6>申请方式</h6>
        <p>符合VIP资格的会员以邮件的形式申请开通对应VIP层级！</p>
        <h6>免费筹码细则</h6>
        <p>
          1、vip生日礼金每个玩家一年只派发一次，派发日期为会员生日当天。<br>
          2、会员生日以会员资料上绑定的日期为准。<br>
          3、生日礼金须在会员生日起七天内领取（包括生日当天），否则系统将自动清零。<br>
          4、生日礼金领取后，请会员在彩票账户查收。<br>
          5、最终解释权及更改权归头彩娱乐所有！
        </p>
      </div>
      <div class="upgrade" v-if="currentIndex === 3">
        <h6>申请方式</h6>
        <p>符合VIP资格的会员以邮件的形式申请开通对应VIP层级！</p>
        <h6>晋级礼金细则</h6>
        <p>
          1、每月10号系统自动派发晋级礼金，会员自行领取。请于次月10日前领取，否则将视为放弃，系统自动清零。<br>
          2、每个vip等级的晋级礼金只派发一次，如会员的vip等级降级后重新晋级将不再派发晋级礼金。<br>
          3、若跳级可累计领取之间所有级别的晋级礼金。<br>
          4、晋级礼金领取后，请会员在彩票账户查收。<br>
          5、最终解释权及更改权归头彩娱乐所有！
        </p>
      </div>
      <div class="deposit" v-if="currentIndex === 4">
        <h1>
          亲，暂时未开放！
        </h1>
      </div>
      <div class="goods-list" v-if="currentIndex === 5">
        <div class="goods-item">
          <v-exchange-type></v-exchange-type>
        </div>
        <div class="type-item" v-show="!mylist && !mycash">
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
        <div class="shop-item" v-show="!mylist && !mycash">
          <div class="item" v-for="(item,index) in goodList">
            <v-single-goods :goods="item" :key="index" @goToExchange="goToExchange"></v-single-goods>
          </div>
        </div>
        <div class="bonus-record-list" v-show="mylist">
          <div class="filter_part">
            时间：
            <datepicker placeholder="选择开始日期" :language="lan" format="yyyy-MM-dd" v-model="start"></datepicker>
            ～
            <datepicker placeholder="选择开始日期" :language="lan" format="yyyy-MM-dd" v-model="end"></datepicker> &nbsp;
            类型：
            <select name="">
              <option value="" selected="selected">全部</option>
              <option value=""></option>
            </select>
            &nbsp;券编号：<input type="text" name="" value=""/><a class="hand likebtn">查询</a>
          </div>
          <div class="list_part">
            <ul>
              <li class="title">
                <span>兑换时间</span><span>券类型</span><span>券编号</span><span>说明</span><span>消耗积分值</span><span>到期时间</span><span>返利金额</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="cash-list" v-show="mycash">
          <ul class="clearfix">
            <li>
              <span class="seevalue">10</span>
              <span class="letnum">99</span>
              <span class="needbonus">53</span>
              <a class="clickchg hand" @click="getCash">立即兑换</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import singleGoods from './public/singleGoods'
  import exchangeType from './public/exchangeType'
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: "integral-mall",
    components: {
      'v-single-goods': singleGoods,
      'v-exchange-type': exchangeType,
      Datepicker
    },
    data() {
      return {
        level: [
          'v1青铜级',
          'v2白银级',
          'v3黄金级',
          'v4紫晶级',
          'v5钻石级',
          // 'v6黑耀级',
          'v6至尊级'
        ],
        page: 1,
        pageSize: 8,
        start: '',
        end: '',
        lan: 'zh',
        mylist: false,
        mycash: false,
        goodList: [], // 当前页展示的数据
        total: 0, // 总的列表数据
        currentLevel: 0,
        nowbonus: 0,
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
        ],
        currentIndex: 0 // 默认为0，将其设置为第一个
      }
    },
    watch: {
      '$route'(to, from) {
        console.log(to, from);
        if (to.path === '/mybonus/2') {
          this.mylist = true;
          this.mycash = false;
        }
        if (to.path === '/mybonus/1') {
          this.mycash = true;
          this.mylist = false;
        }
        if (to.path === '/mall') {
          this.mylist = false;
          this.mycash = false;
        }
      }
    },
    mounted() {
      console.log(this.$route.params.tabId, 'this.$route.params.activeIdthis.$route.params.activeIdthis.$route.params.activeId');
      if (typeof this.$route.params.tabId !== 'undefined') {
        if (this.$route.params.tabId === '2') {
          this.mylist = true;
          this.mycash = false;
        }
        if (this.$route.params.tabId === '1') {
          this.mylist = false;
          this.mycash = true;
        }
      } else {
        this.mylist = false;
        this.mycash = false;
      }
      this.getGoodsList();
      this.getRecordList();
    },
    methods: {
      tabs(index) {
        this.currentIndex = index;
      },
      navcls(i) {
        var tag = "navitem_set" + String(i);
        var cls = {};
        cls[tag] = true;
        return cls;
      },
      // 获取商品列表信息
      getGoodsList() {
        let url = '/vip/store/queryGoodsList';
        let params = {
          page: this.page,
          size: this.pageSize
        };
        this.$http.get(url, {params}).then(res => {
          console.log('goodList!!!')
          console.log(res);
          let data = res.body;
          if (data.code === 0) {
            this.goodList = data.data.list;
            this.total = data.data.totalCount;
          } else {
            this.goodList = [];
          }
          // console.log(this.goodList);
          // console.log(data);
        });
      },
      // 获取订单列表信息
      getRecordList() {
        let url = '/vip/store/getStoreOrderList';
        let params = {
          page: this.page,
          size: this.pageSize
        };
        this.$http.get(url, {params}).then(res => {
          let rdata = res.body;
          console.log(rdata, 'getStoreOrderList');
        });
      },
      // 积分换现金
      getCash() {
        let url = '/vip/vip/exchangeCash';
        let params = {
          // uin: this.uin,
          score: 100
        };
        this.$http.get(url, {params}).then(res => {
          let cdata = res.body;
          console.log(cdata, 'exchangeCash');
        });
      },
      // 点击立即兑换 跳转到详情页面
      goToExchange(goods) {
        console.log(goods);
        this.$store.commit('setSingleGoods', goods);
        this.$router.push({name: 'goodsDetail', params: {goodsId: goods.id}})
      },
      getGoods: function () {
        // GET /store/queryGoodsList
        let that = this;

        this.$http.get('/vip/store/queryGoodsList?page=0&size=8').then((response) => {
          let gdata = response.data && response.data.data;
          console.log(gdata, 'queryGoodsList');

        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../css/stylus/index.styl";
  @import "../css/stylus/mall.styl";
</style>
<style>
  .integralMall-wrapper .vdp-datepicker input {
    border: 1px solid #e6e6e6;
    line-height: 26px;
    width: 128px;
  }
</style>
