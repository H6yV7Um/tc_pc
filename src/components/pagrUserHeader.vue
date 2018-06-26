


<template>
  <div class="banner">
    <img src="/dist/imgs/userInfoBanner.png" alt="">
    <div class="contentMain bannerWarp clearfix">
      <div class="userLeft fl clearfix mt20">
        <div class="userAvatar fl mr30">
          <img src="/dist/imgs/userAvatar.png" alt="">
        </div>
        <div class="fl mt5 colorA ft14 userInfo">
          <p class="fl">下午好, {{nickname}}<!--<a class="colorY ml5 cursor">修改昵称</a>--></p>
          <p class="fl mt10">账户总余额： <span class="ft18 mr3">{{lotteryBalance}}</span>元<i class="matai ft20 colorA cursor ml5" @click="userRefresh">&#xe600;</i></p>
          <ul class="clearfix mt5 cursor">
            <router-link to="/userAccount#page=0_finance" class="colorA"><li class="fl BgRgbB0 mr10 mt15">充值</li></router-link>
            <router-link to="/userAccount#page=1_finance" class="colorA"><li class="fl BgRgbB0 mr10 mt15">取款</li></router-link>
            <router-link to="/userAccount#page=2_finance" class="colorA"><li class="fl BgRgbB0 mr10 mt15">转账</li></router-link>
            <router-link to="/userReport#page=0_report" class="colorA"><li class="fl BgRgbB0 mt15">投注记录</li></router-link>
          </ul>
        </div>
      </div>


      <div class="userright fl ml100 clearfix mt20">
        <div>
          <i :class="gradeMsg.num>30?'matai ft30 cursor mr5 colorY':'matai ft30 cursor mr5 colorA'">&#xe65c;</i>
          <i :class="gradeMsg.num>45?'matai ft30 cursor mr5 colorY':'matai ft30 cursor mr5 colorA'">&#xe65c;</i>
          <i :class="gradeMsg.num>90?'matai ft30 cursor mr5 colorY':'matai ft30 cursor mr5 colorA'">&#xe65c;</i>
        </div>
        <p class="colorY ft18 mt15">{{gradeMsg.title}}</p>
        <p class="colorA ft12 mt10"><i class="matai ft12 colorA cursor mr5">&#xe678;</i>上次登录：{{loginTime}} <i class="matai ft12 colorA cursor ml5 mr5">&#xe617;</i>IP地址：{{clientIp}} 不是本人登录？<!--<a class="colorY ml5 cursor" @click="setPwd('pwd')">修改密码</a>--></p>
      </div>

    </div>
  </div>
</template>

<script>
import {userConter, userInit} from '../js/index.js'
let init =  {
  userHeader: userInit(),
  userContent: userConter()
};
export default {
  name: 'warp',
  data () {
    return {
      nickname:'',
      lotteryBalance:'',
      gradeMsg:{
        num: 0,
        title: ''
      },

      loginTime: '', // 上次登录时间
      clientIp: '', // ip
    	initColor: localStorage.getItem('_bgIndex')!=='undefined'?localStorage.getItem('_bgIndex'):1,
    }
  },
  methods: {
    userRefresh () {
     this.lotteryBalance = '0.00';
     init.userHeader.initUserInfo(this)
   },
  },
  mounted () {
    init.userHeader.initUserInfo(this);
    init.userContent.checkgrade(this).checkClient(this);
  },
}
</script>

<style scoped lang="less">
.banner{
  position: relative;
}
.bannerWarp{
height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -600px;
}
.userLeft{
  width: 50%;
  border-right: 1px solid #ccc;
}

.userAvatar{
  width: 115px;
  height: 115px;
  border-radius: 50%;
  border: 3px solid #ccc;
  overflow: hidden;
}
.userInfo p, .userInfo ul{
  width: 100%;
  text-align: left;
}
.userInfo li{
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 27px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.userInfo li:hover{
  background: #d02a1d;
  border: 0;
}


.userright{
  text-align: left;
}
</style>
