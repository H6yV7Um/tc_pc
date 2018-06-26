<template>
  <div class="main vip_page">
    <div class="inner">
      <span class="score">{{nowbonus}}</span>
      <div class="level_tag"><em></em></div>
      <div class="level_star">
        <ul class="level_choose">
          <li class="first">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
          <li class="otherw">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
          <li class="otherw1">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
          <li class="otherw2">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
          <li class="otherw3">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
          <li class="otherw4">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
          <li class="otherw5">
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
            <span>100元</span>
          </li>
        </ul>
        <div class="level_record"><a href="#" class="hand" :target="gotarget"><img src="../img/qiandao/blank.gif" alt=""
                                                                                   width="150" height="46"/></a></div>
      </div>
    </div>
  </div>
</template>
<script>
  import leftbar from './pageLeftBar.vue';
  import bgtab from './pageBgTab.vue';
  import download from './pageDownload.vue';
  import {activityInit, Prompt} from '../js/index.js';
  import _base from '../js/pubilc.js';
  import {IsPC} from '../js/common.js';

  const APPCONFIG = _base.config();
  const _storage = _base.storage();
  let init = activityInit();
  let oPrompt = Prompt();

  export default {
    name: 'qiandao',
    data() {
      return {
        golink: '', gotarget: '_blank', nowbonus: 0, nowdict: {}
      }
    },
    methods: {
      getbonus: function () {
        let that = this;

        this.$http.get('/vip/vip/getUserVipInfo'
        ).then((response) => {
          let bdata = response.data && response.data.data;
          console.log(bdata);
          if (bdata.score != null) {
            that.nowbonus = bdata.score;
          }

        })
      }
    },
    components: {
      bgtab, leftbar, download
    },
    mounted() {
      this.getbonus();
    },
    beforeCreate() {

    }
  }
</script>

<style scoped>
  .vip_page {
    padding-bottom: 0px;
  }

  .vip_page .inner {
    height: 1666px;
    background-image: url('../img/jifen/jifen_about.png');
    padding-bottom: 0px;
    background-position: top center;
    position: relative;
  }

  .vip_page .score {
    position: absolute;
    left: 50%;
    /* margin-left: -130px; */
    top: 175px;
    margin-left: 9px;
  }

  .vip_page .level_tag {
    position: relative;
    width: 1200px;
    top: 270px;
    height: 40px;
    /* left: 50%; */
    margin: 0px auto;
  }

  .level_record {
    text-align: center;
  }

  .level_record a {
    display: inline-block;
    margin-top: 5px;
  }

  .vip_page .level_star {
    position: relative;
    width: 1200px;
    top: 507px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
  }

  .vip_page .level_tag em {
    background-image: url('../img/jifen/jifen_dot.png');
    width: 22px;
    height: 33px;
    display: inline-block;
    position: absolute;
    left: 0px;
  }

  .vip_page .level_choose {
    height: 360px;
    width: 1205px;
  }

  .vip_page .level_choose li {
    width: 136px;
    height: 360px;
    float: left;
  }

  .vip_page .level_choose li:hover {
    border: 1px solid #ff0000;
  }

  .vip_page .level_choose .otherw {
    width: 145px;
  }

  .vip_page .level_choose .otherw1 {
    width: 143px;
  }

  .vip_page .level_choose .otherw2 {
    width: 144px;
  }

  .vip_page .level_choose .otherw3 {
    width: 143px;
  }

  .vip_page .level_choose .otherw4 {
    width: 143px;
  }

  .vip_page .level_choose .otherw5 {
    width: 135px;
  }

  .vip_page .level_choose .first {
    margin-left: 208px;
  }

  .level_choose li span {
    display: block;
    line-height: 88px;
    height: 88px;
    text-align: center;
    font-size: 22px;
  }

  @media only screen and (min-width: 300px) and (max-width: 1700px) {

  }
</style>
