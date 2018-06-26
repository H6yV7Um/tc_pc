<template>
  <div class="page_footer">
    <div class="footer_content" id="special_purpose">
      <div class="footer_index">
        <em id="counter1"></em><em class="sec" id="counter2"></em>  
      </div>
      <div class="fullw_link">
        <div class="footer_link clearfix">
          <div class="lf">
            <ul>
              <li class="first">赌博委员会监管服务条款</li>
              <li><router-link to="/aboutUs#0">关于我们</router-link></li>
              <li><router-link to="/aboutUs#1">服务条款</router-link></li>
              <li><router-link to="/aboutUs#2">充提说明</router-link></li>
              <li><router-link to="/aboutUs#3">免责声明</router-link></li>
              <li><router-link to="/aboutUs#4">常见问题</router-link></li>
            </ul>
          </div>
          <div class="rf">Copyright © 2018 头彩娱乐 版权所有 | 18+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      online:0,gameonline:0 
    }
  },
  methods:{
    // 获取人数
    getOnlineCounter(bc) {
      let that = this;
      //alert('wss');
      this.$http.get('/json/online_game_user.json').then((response) => {
        let data = response.body;
        //console.log(data);
        if (typeof bc !='undefined') {
          bc(data)  
        }
      })
    },
    goLoop:function(a) {
      var that = this;
      (function() {
        var number1 = parseInt(a.startonline,10);
        //console.log(number1,'number1number1number1');
        var number2 = parseInt(a.startgame,10);
        var t = function(name) {
          number1 = number1 + parseInt(_.random(0,10),10);
          number2 = number2 + parseInt(_.random(0,10),10);
          if (number1<=parseInt(a.online,10)) {
            document.getElementById('counter1').innerHTML=number1;  
          }
          if (number2<=parseInt(a.gameonline,10)) {
            document.getElementById('counter2').innerHTML=number2;
          }
          if (number1== parseInt(a.online,10) && number2==parseInt(a.gameonline,10)) {
            return false;  
          }
          setTimeout(function() {
            t(0);
          },_.random(1000,10000));
          return this;
        }
        t(1);
      })()
    }
  },
  mounted:function() {
    var that = this;
    
    
    that.getOnlineCounter(function(b) {
      //console.log(b);
      that.online = parseInt(b.onlineUser,10);
      that.gameonline = parseInt(b.gamingUser,10);
      
      that.startonline = that.online-parseInt(_.random(100, 200),10);
      that.startgame = that.gameonline-parseInt(_.random(100, 200),10);
      document.getElementById('counter1').innerHTML=that.startonline;
      document.getElementById('counter2').innerHTML=that.startgame;
      that.goLoop(that);
    });
    /**/  
  }
}
</script>

<style lang="stylus">
  #special_purpose
    height:169px
    background-image:url('../img/index/new/footer_vbg.png');
    padding-top:20px;
  .page_footer
    background-color:#141415
    height:169px
    padding-top:0px
  .fullw_link
    background-color:#000;
    height:39px;
    width:100%;
  .footer_link
    width: 1200px
    margin: 0px auto;
    height:39px;
    color:#999;
    margin-top: 30px;
    line-height: 39px;
    .rf
      float:right;
      color:#999;
    .lf
      float:left
      color:#999;
    li
      float:left
      color:#999;
      margin-left:38px;
    .first
      margin-left:0px;
    a
      color:#999;
    
  .footer_index
    background-image:url('../img/index/new/foot_bg.jpg')
    height:80px
    width: 1200px
    margin: 0px auto;
    em
      color:#999
      float:left
      font-size:22px
      margin-top: 42px
      margin-left: 32px;
      display: inline-block;
      width: 60px;
      text-align: left;
    .sec
      margin-left: 80px  
</style>
