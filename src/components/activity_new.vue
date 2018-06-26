<template>
  <div class="main" style="margin-top: 0;background: url(../src/img/index/active_bg.jpg);">
    <div v-show="!isMobile" class="pc_part">
        
    </div>
    <div v-show="isMobile" id="mobile_part">
        
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
        name: 'warp',
        data() {
            return {
                isMobile: false,
                index: -1,
                msg: 'this is index',
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth,
                bgsrc: 'url(/dist/PromptBoxBg.png)  no-repeat',
                lottery: [{showName: '登录'}],
                promptList: [],
                allShow: [1, 2, 3],
                isonlyshow: 0,
            }
        },
        components: {
            bgtab,
            leftbar,
            download
        },
        beforeCreate() {
            let s = document.createElement('meta');
            s.name = "viewport";
            s.content = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui";
            s.id = "activity";
            document.getElementsByTagName('head')[0].appendChild(s);
        },
        updated() {},
        methods: {
            showMore(idx) {
                this.index = this.index === idx ? -1 : idx;
            },
            openFunds() {
                oPrompt({
                    idx: "boxwarps",
                    message: "敬请期待"
                });
            }
        },
        mounted() {
          let refs = JSON.parse(_storage.get('_referrer'));
          let urls = null;
          if(refs && refs !== 'false') {
            urls = refs.rels.split('&smobile')[0];
            console.log(APPCONFIG.activityMap[urls])
            this.isonlyshow = (APPCONFIG.activityMap[urls] && APPCONFIG.activityMap[urls]) || 0;
          }
          console.log(this.isonlyshow)
//            init.activityDetails('activityMmain_cont_demo_right', 'activityMmain_cont_txt');
            if (!IsPC()) {
                this.isMobile = true;
                document.getElementById("app").style.width = document.documentElement.clientWidth;
                document.getElementById("mobile_part").style.height = document.documentElement.clientHeight;
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .activityMmainImg {
        position: absolute;
        top: -20px;
        left: 0;
        width: 1200px;
    }

    .mainbanner {
        width: 1920px;
        margin: 0 auto;
    }

    i.closeIcon {
        font-size: 40px;
        margin-top: 0;
        float: right;
    }

    .warp img {
        width: 100%;
    }

    .mt25 {
        margin-top: 25px;
    }

    .mr15 {
        margin-left: 15px;
    }

    .mt10 {
        margin-top: 10px;
    }

    .activityMmainImg2 {
        display: none;
    }

    .main {
        margin-top: 8%;
        padding-bottom: 8%;
        position: relative;
        padding-bottom: 40px;
    }

    .boxHeight {
        height: 50px;
        width: 20px;
    }

    .login_rightBar {
        position: absolute;
        right: 30px;
        top: -120px;
        z-index: 101;
    }

    .activityMmain {
        width: 82%;
        z-index: 88;
        margin: 0;
        max-width: 1200px;
        margin: 0 auto;
    }

    .activityMmain_header {
        font-size: 18px;
        text-align: left;
        padding-top: 15px;
        position: relative;
        display: block;
        height: 65px;
    }

    .activityMmain_header:after {
        position: absolute;
        border-bottom: 1px solid #dddddd;
        width: 100%;
        height: 5px;
        bottom: 2px;
    }

    .activityMmain_header img {
        width: 18px;
    }

    .activityMmain_header li {
        float: left;
        line-height: 40px;
        padding: 3px 5px;
        margin-left: 30px;
        border-radius: 0px;
        cursor: pointer;
    }

    .activityMmain_header li.active {
        border-bottom: 1px solid #fa4d3d;
        color: #fa4d3d;
    }

    .activityMmain_cont {
        width: 100%;
        border-radius: 0px;
        margin-bottom:70px;
        padding-bottom:50px;
    }

    .activityMmain_cont_demo {
        width: 377px;
        margin-top: 10px;
        position: relative;
    }

    .activityMmain_cont_last {
        margin-right: 0px;
    }

    .activityMmain_cont_txter {
        text-align: left;
        padding: 15px;
        padding-bottom: 5px;
        border: 1px solid #f3f4f4;
    }

    .activityMmain_left h3 {
        font-size: 20px;
        font-weight: bold;
    }

    .activityMmain_left p {
        font-size: 14px;
        margin-top: 5px;
    }

    .activityMmain_cont_txt {
        text-align: left;
        font-size: 14px;
        padding: 10px 15px 10px 10px;
        position: absolute;
        left: 15px;
        right: 15px;
        top: 98%;
        z-index: 9;
        height: 220px;
        overflow-y: auto;
        border: 1px solid #f3f4f4;
        box-shadow:0 5px 8px 1px #666;
        border-top: 0;
        background-color:#eee;
    }

    .activitywapper {
        background-image: url('../img/activity/banner.jpg');
        height: 138px;
        background-position: center;
    }

    @media only screen and (min-width: 315px) and (max-width: 420px) {
        .activityMmainImg2 {
            display: block;
        }

        .activityMmainImg2 {
            width: 60%;
            margin: 0 auto;
        }

        .activityMmain_header, .activityMmainImg, .activitywapper {
            display: none;
        }

        .activityMmain {
            background: rgba(255, 255, 255, 0);
            padding-top: 5px;
            width: 100%;
        }

        .activityMmain_cont {
            margin-left: 0;
            margin-top: 5px;
            padding-left: 0;
        }

        .activityMmain_cont_demo {
            margin-right: 0;
            width: 100%;
        }
    }
</style>
<style lang="stylus" scoped>
    .activityMmain_left
        em
            color: #ff6a76
            margin-right: 5px

    .pc_part
        .activityMmain_cont_demo
            width: 50%
            padding: 10px 15px
            .activityMmain_cont_demo_right
                & > .active
                    transform: rotate(90deg)

    #mobile_part
        margin-bottom: -1500px
        .mobile_wrapper
            .activityMmain_cont_txter
                padding-bottom:25px
                .activityMmain_left
                    max-width:90%
            .activityMmain_cont_txt
                position: static
                height: auto
            .activityMmain_cont_demo
                margin-top: 0
                > img
                    border: 1px solid #dcdddd
                    border-bottom: none
            .second_text
                margin-top: 10px
</style>
