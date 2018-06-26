<template>
  <div class="stationNotice bgcolorA" v-show="showNotice ">
    <div class="noticeHeader colorA clearfix">
      <span class="fl">通知列表</span>
      <div class="fr">
        <button class="colorA BgRgbB0" @click="clearNotice">清空</button>
        <button class="colorA BgRgbB0" @click="closeNotice">关闭</button>
      </div>
    </div>
    <ul class="noticeMain colorY bgcolorA">
      <li>
        <a href="/userMessage#page=0_message" target="_blank" @click="closeNotice">站内消息 {{noticeList1[0] && noticeList1[0].time}}</a>
        <p class="color3">{{noticeList1[0] && noticeList1[0].content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {stationNotice} from '../js/index.js'

  let init = stationNotice();

  export default {
    name: 'app',
    data() {
      return {
        noticeList1: [],
        showNotice: false,
      }
    },
    components: {
      // 判断是否在密码设置页面
      // isPswResetPage() {
      //   return this.$store.state.isPswResetPage;
      // },
    },
    methods: {
      closeNotice() {
        this.showNotice = false;
      },
      clearNotice() {
        init.readyNotice(this);
      }
    },
    mounted() {
//      let _this = this;
//      window.addEventListener("resize", function () {
//        _this.height = document.documentElement.clientHeight
//      }, false)
      if (String(location.href).indexOf('register_mobile')==-1) {
        init.init(this);
        init.getNotice(this);  
      }
      
    },
    Update() {
      //console.log(console.log(this.$store.state.isLogin), 'undata')
    }
  }
</script>

<style scoped lang="less">
  .stationNotice {
    position: fixed;
    right: 65px;
    bottom: 0;
    width: 270px;
    min-height: 150px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    z-index: 99999;
    overflow: hidden;
  }

  .noticeHeader {
    padding: 5px 15px;
    background-image: -webkit-linear-gradient(#ff606f, #fb949d 50%, #ff606f);
    font-size: 14px;
  }

  .noticeHeader button {
    border: 0;
    outline: none;
    font-size: 12px;
    cursor: pointer;
  }

  .noticeMain {
    text-align: left;
    font-size: 12px;
    padding: 0 15px;
  }

  .noticeMain li {
    padding: 5px 0;
  }

  .noticeMain a {
    cursor: pointer;
  }
</style>
