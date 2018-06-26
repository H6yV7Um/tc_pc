<template>
  <div class="main qiandao_page">
    <div class="inner">
      <a href="" class="goLottery" target="_blank" ref="link"></a>
      <div class="inline">
        今日已投注：<em>{{todayConfirm}}</em>元
        <p>活动日期：{{startTime}} ~ {{endTime}}</p>
      </div>
      <div class="today_bonus">
        <div class="qianItems clear">
          <ul v-if="login" class="clear">
            <li class="first" v-for="(item) in signList">
              <h6 class="day">第{{item.actDay}}天</h6>
              <span :style="currentSignDay >= item.actDay ? 'visibility: auto':'visibility: hidden'"
                    v-html='betAmount(item.actDay,item.confirmBetAmount)'></span>
              <p class="cont">领取奖金</p>
              <h1 class="money">{{item.awardAmount}}<em>元</em></h1>
              <p class="sign"
                 v-if="(item.confirmBetAmount <= todayConfirm) && (currentSignDay === item.actDay) && !item.signed"
                 @click="signNow(item.actDay)">
                点击领取
              </p>
              <p class="sign signed" v-else-if="item.signed">已领取</p>
              <p class="sign notEnough" v-else>未达标</p>
            </li>
          </ul>
          <div v-else class="noSign">
            <img src="../img/qiandao/qiandao_noSign.png">
            <p>您还未登录，请立即登录</p>
            <a class="btn" ref="gotoIndex">
              点击登录
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {noticeInit, activityInit, loginInit, Prompt} from '../js/index.js';
  import _base from '../js/pubilc.js';

  const APPCONFIG = _base.config();
  const _storage = _base.storage();
  let init = activityInit();
  let lginit = loginInit();
  let oPrompt = Prompt();

  export default {
    name: 'qiandao',
    data() {
      return {
        login: false,
        signList: [],
        currentSignDay: 0,
        acId: -1, // 活动Id
        todayIndex: -1,
        todayConfirm: 0,
        startTime: 0,
        endTime: 0,
        ltLink: '/static/lt.html#11'
      }
    },
    methods: {
      getToday() {
        let _this = this;
        this.$http.post('/vip/sign-activity/get-activity-info'
        ).then((response) => {
          console.log('qiandaoqiandao!!');
          console.log(response);
          console.log(response.body);
          if(response.body.code === 0) {
            let signData = response.data && response.data.data;
            lginit.setLogined(_this);
            _this.login = true;
            if (signData.length !== '') {
              // 活动Id
              _this.acId = signData[0].activityId;
              _this.currentSignDay = signData[0].currentSignDay;
              // 开始时间，结束时间
              _this.startTime = signData[0].startTime;
              _this.endTime = signData[0].endTime;
              // 签到列表
              let list = signData[0].signRecordList.splice(0, 35);
              _this.signList = [];
              for (let i = 0; i < list.length; i++) {
                let obj = {
                  actDay: list[i].actDay,
                  confirmBetAmount: list[i].confirmBetAmount,
                  canSign: list[i].canSign,
                  signed: list[i].signed,
                  awardAmount: list[i].awardAmount
                };
                // 设置“今天已投注”的金额
                if (list[i].userTodayConfirmBetAmount) {
                  _this.todayConfirm = list[i].userTodayConfirmBetAmount;
                }
                _this.signList.push(obj);
              }
            } else {
              oPrompt({
                idx: 'qianConfirm',
                message: '服务器在开小差去了，亲请稍后再试哈！！！'
              })
            }
          }
        })
      },
      betAmount(actDay, amount) {
        if (this.currentSignDay >= actDay && amount !== 0) {
          return '投' + amount + '元';
        } else if (this.currentSignDay >= actDay && amount === 0) {
          return '无需流水';
        }
      },
      signNow(activityDay) {
        if (this.acId < 0) {
          oPrompt({
            idx: 'qianConfirm',
            message: '活动编号错误！'
          });
          return false;
        }
        this.$http.post('/vip/sign-activity/sign-activity', {
          activityId: this.acId,
          activityDay: activityDay || -1
        }, {emulateJSON: true}).then((response) => {
          console.log('点击签到！');
          console.log(response);
          let data = response.data;
          let code = response.code;
          if (code === 0) {
            oPrompt({
              idx: "qianConfirm",
              message: data.data
            });
          } else {
            oPrompt({
              idx: "qianConfirm",
              message: data.data
            });
          }
          this.getToday();
        })
      },
      // 判断当前环境是否在app里，如果在app中就将href链接清空
      isApp() {
        let isMobile = {
          Android: function () {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function () {
            console.log('mmmm mobile!!');
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          }
        };
        let app = Number(this.$route.query.app);
        if(app === 1) { // app端
          this.login = true;
          this.$refs.link.setAttribute('href', '/yx/home');
          this.$refs.gotoIndex.setAttribute('href', '/yx/home');
        }else{
          if(isMobile.any()) { // mobile端
            console.log('进入mobile判断');
            if(this.isLogin) { // 登录之后的跳转
              console.log('mobile login');
              console.log(this.$refs.link);
              this.$refs.link.setAttribute('href', '/yx/home'); // 【立即投注】
              this.$refs.gotoIndex.setAttribute('href', '/yx/home');
            }else{  // 未登录的跳转
              console.log('mobile nonono login');
              this.$refs.link.setAttribute('href', '/welcome/sign.html');
              this.$refs.gotoIndex.setAttribute('href', '/welcome/sign.html');
            }
          }else{ // pc端
            this.$refs.link.setAttribute('href', '/static/lt.html#11');
            this.$refs.gotoIndex.setAttribute('href', '/index');
          }
        }
      },
      // 判断是否登录
      isLogin() {
        if (this.$store.state.isLogin === 'true') {
          noticeInit().init(this);
          console.log('已经登录登录！');
          return true;
        } else {
          console.log('未登录！');
          // this.getUnloginNotice();
          return false;
        }
      }
      // 跳转到首页登录
      // goToIndex() {
      //   this.$router.push('/index');
      // }
    },
    mounted() {
      if (!APPCONFIG.isqiandao) {
        this.$router.push({path: '/index'})
      }
      let app = Number(this.$route.query.app);
      // alert(this.isLogin());
      if(app === 1) {
        this.login = true;
        this.getToday();
        this.isApp();
      }else {
        if(this.isLogin()) {
          this.login = true;
          this.getToday();
          this.isApp();
        }else{
          this.login = false;
          this.getToday();
          this.isApp();
        }
      }
    },
    created() {
      // this.getToday();
    }
  }
</script>

<style lang="less">
  div.qiandao_page {
    padding-bottom: 0;
    div.inner {
      width: 100%;
      padding-top: 149%;
      background: url('../img/qiandao/qiandao_June.png') top center no-repeat;
      padding-bottom: 0;
      position: relative;
      a.goLottery {
        position: absolute;
        top: 500px;
        left: 50%;
        width: 380px;
        height: 100px;
        border-radius: 50px;
        transform: translateX(-195px);
      }
      div.inline {
        position: absolute;
        top: 620px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 35px;
        text-align: center;
        color: #FFED37;
        p {
          margin: 5px 0 0 0;
          font-size: 22px;
          color: #fff;
          font-weight: bold;
        }
      }
      div.today_bonus {
        position: absolute;
        top: 778px;
        left: 50%;
        transform: translateX(-604px);
        width: 1200px;
        height: 1075px;
        div.qianItems {
          position: relative;
          width: 100%;
          height: 100%;
          ul {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 30px 15px 0;
            li {
              float: left;
              position: relative;
              width: calc(100% / 7);
              height: 192px;
              margin: 0 0 15px 0;
              background: url("../img/qiandao/qiandao_June_day.png") no-repeat center center;
              background-size: auto 190px;
              text-align: center;
              & > h6.day {
                color: #fff;
                font-size: 16px;
                margin: 10px 0 0;
              }
              & > span {
                display: inline-block;
                font-size: 14px;
                color: #FFED37;
              }
              & > p.cont {
                font-size: 14px;
                color: #fff;
              }
              h1 {
                color: #FFED37;
                font-size: 50px;
                line-height: 55px;
                em {
                  font-size: 12px;
                }
              }
              & > p.sign {
                position: absolute;
                top: 145px;
                left: 50%;
                transform: translateX(-50%);
                width: 90px;
                height: 35px;
                line-height: 35px;
                font-size: 15px;
                border-radius: 17.5px;
                background: #FFED37;
                color: #000;
                cursor: pointer;
              }
              p.noSigned {
                cursor: auto;
                color: #FFF;
                background: #C7063D;
              }
              p.notEnough {
                cursor: auto;
                color: #FFF;
                background: #356DA4;
              }
              p.signed {
                cursor: auto;
                color: #4E84B9;
                background: #1C3957;
              }
            }
          }
          div.noSign{
            width: 550px;
            margin: 200px auto 0;
            p{
              font-size: 30px;
              color: #A8BEF2;
              margin: 40px 0;
            }
            a.btn{
              display: block;
              width: 170px;
              height: 50px;
              margin: 0 auto;
              line-height: 50px;
              font-size: 20px;
              text-align: center;
              border-radius: 30px;
              cursor: pointer;
              background: #FFED37;
              color: #0C0C3A;
            }
          }
        }
      }
    }
  }



  @media only screen and (min-width: 315px) and (max-width: 420px) {
    div.qiandao_page {
      width: 100%;
      div.inner {
        width: 100%;
        padding-top: 504%;
        background: url("../img/qiandao/qiandao_June_h5.png") no-repeat top center;
        background-size: contain;
      }
    }
    // 右边测导航
    div#login_rightBar{
      display: none;
    }
    // 右下方公告栏
    div.stationNotice {
      display: none;
    }
  }

  // iPhone 6/7/8 Plus
  @media only screen and (max-width: 420px) {
    div.qiandao_page {
      & > div.inner {
        /*height: 2088px;*/
        & > a.goLottery {
          top: 146px;
          width: 125px;
          height: 32px;
          transform: translateX(-50%);
        }
        & > div.inline {
          top: 185px;
          font-size: 16px;
          height: 20px;
          line-height: 20px;
          p {
            margin: 0;
            font-size: 12px;
          }
        }
        div.today_bonus {
          width: 100%;
          top: 215px;
          left: 0;
          transform: translateX(0);
          & > div.qianItems {
            width: 100%;
            & > ul {
              padding-top: 40px;
              & > li {
                width: calc(100% / 4);
                height: 135px;
                background-size: 85px;
                margin: 0 0 10px;
                & > h6.day {
                  font-size: 12px;
                  margin: 3px 0 0;
                }
                & > span {
                  display: block;
                  padding: 0 10px;
                  height: 19px;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                & > p.cont {
                  margin: 0;
                  font-size: 10px;
                }
                h1.money {
                  font-size: 30px;
                  line-height: 30px;
                }
                p.sign {
                  top: 105px;
                  font-size: 12px;
                  width: 65px;
                  height: 20px;
                  line-height: 20px;
                }
              }
            }
            & > div.noSign{
              width: 100%;
              margin: 100px auto 0;
              img{
                width: 80px;
              }
              p{
                font-size: 20px;
                margin: 20px 0 ;
              }
              a.btn{
                width: 100px;
                height: 30px;
                line-height: 30px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  // iPhone 6/7/8
  @media only screen and (max-width: 375px) {
    div.qiandao_page {
      & > div.inner {
        /*height: 1895px;*/
        & > a.goLottery {
          top: 133px;
          width: 115px;
          height: 28px;
          transform: translateX(-50%);
        }
        & > div.inline {
          top: 167px;
          font-size: 16px;
          height: 20px;
          line-height: 20px;
          p {
            transform: scale(0.9) translateY(-2px);
          }
        }
        div.today_bonus {
          width: 100%;
          top: 215px;
          left: 0;
          transform: translateX(0);
          & > div.qianItems {
            width: 100%;
            & > ul {
              margin: 0;
              padding: 20px 15px 0;
              & > li {
                width: calc(100% / 4);
                height: 120px;
                background-size: 75px;
                margin: 0 0 10px;
                & > h6.day {
                  font-size: 12px;
                  margin: 0;
                }
                & > span {
                  display: block;
                  width: 100%;
                  padding: 0;
                  height: 15px;
                  font-size: 10px;
                  transform: scale(0.8);
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                & > p.cont {
                  margin: 0;
                  font-size: 10px;
                }
                h1.money {
                  font-size: 30px;
                  line-height: 30px;
                }
                p.sign {
                  top: 93px;
                  font-size: 12px;
                  width: 65px;
                  height: 20px;
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
    }
  }

  // iPhone 5/SE
  @media only screen and (max-width: 320px) {
    div.qiandao_page {
      & > div.inner {
        /*height: 1614px;*/
        & > a.goLottery {
          top: 113px;
          width: 95px;
          height: 25px;
          transform: translateX(-50%);
        }
        & > div.inline {
          top: 140px;
          font-size: 14px;
          height: 20px;
          line-height: 20px;
          p {
            transform: scale(0.75) translateY(-10px);
          }
        }
        div.today_bonus {
          width: 100%;
          top: 180px;
          left: 0;
          transform: translateX(0);
          & > div.qianItems {
            width: 100%;
            & > ul {
              margin: 0;
              padding: 20px 15px 0;
              & > li {
                width: calc(100% / 4);
                height: 100px;
                background-size: 60px;
                margin: 0 0 10px;
                position: relative;
                & > h6.day {
                  font-size: 10px;
                  transform: scale(0.8);
                  margin: 3px 0 0;
                }
                & > span {
                  position: absolute;
                  top: 16px;
                  left: 50%;
                  width: 100%;
                  padding: 0;
                  font-size: 12px;
                  transform: scale(0.7) translateX(-70%);
                  text-align: center;
                }
                & > p.cont {
                  margin: 0;
                  font-size: 10px;
                  transform: scale(0.7);
                  line-height: 30px;
                }
                h1.money {
                  font-size: 20px;
                  line-height: 10px;
                }
                p.sign {
                  top: 75px;
                  width: 65px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 10px;
                  transform: scale(0.8) translateX(-40.5px);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
