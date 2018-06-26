<template>
    <div class="rightBox" :style="{top:height/2 + 'px'}">
        <ul>
            <!--<li :class="[isShowLong ? 'active' : '']" class="contain_A">
                <a :href="customer_url"
                   target="_blank">
                    <span class="icon fz22 common_color">&#xe6ae;</span>
                    <i>客服</i>
                </a>
            </li> -->
            <li v-show="isLogin" :class="[isShowLong ? 'active' : '']" @click="optimize()">
                <a href="/static/lottery-trend.html?id=11&w=1&q=50&chs=重庆时时彩" target="_blank">
                    <span class="icon fz22 common_color">&#xe69e;</span>
                    <i>走势</i>
                </a>
            </li>
            <li :class="[isShowLong ? 'active' : '']" class="mobile_download">
                <router-link to="/download">
                    <span class="icon fz22 common_color">&#xe688;</span>
                    <i>下载</i>
                </router-link>
                <!--<div class="download_code hover_show_list">-->
                <!--<div class="hover_show_arrow"></div>-->
                <!--<div class="hover_show_content">-->
                <!--<div class="QR_android QR">-->
                <!--<div class="QC_title">-->
                <!--<span class="icon">&#xe61f;</span>-->
                <!--<i>安卓下载</i>-->
                <!--</div>-->
                <!--<img width="103px" height="103px" src="../img/download/ercodeAndroid.png">-->
                <!--</div>-->
                <!--<div class="QR_IOS QR">-->
                <!--<div class="QC_title">-->
                <!--<span class="icon">&#xe601;</span>-->
                <!--<i>苹果下载</i>-->
                <!--</div>-->
                <!--<img width="103px" height="103px" src="../img/download/downloadIOS.png">-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </li>
            <li :class="[isShowLong ? 'active' : '']" @click="optimize()">
                <a href="" @click.prevent="showDetection = true">
                    <span class="icon fz22 common_color">&#xe68c;</span>
                    <i>线路</i>
                </a>
            </li>
            <li @click="rightBoxControl()">
                <a v-show="!isShowLong">
                    <span class="icon fz22 common_color">&#xe6bb;</span>
                    <i>收起</i>
                </a>
                <a v-show="isShowLong">
                    <span class="icon fz22 common_color">&#xe60a;</span>
                    <i>展开</i>
                </a>
            </li>
            <li class="red_packet">
                <router-link to="/sales/1"></router-link>
                <div class="hover_show_list">
                    <div class="hover_show_arrow"></div>
                    <div class="hover_show_content">
                        <a>
                            <span class="material_title">完善资料</span>
                            <span class="material_cont">绑定手机号即可领取6元彩金!</span>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
        <div class="kefu">
          <div class="word">嘿，我来帮你！</div>
          <div class="girl"><a :href="customer_url" target="_blank">&nbsp;</a></div>
          <div class="circle"></div> 
          <div class="circle cir1"></div>
          <div class="circle cir2"></div>
        </div>
        <UtilPrompt v-show="showDetection" v-on:hide="showDetection = false">
            <div class="speed_test">
                <div class="lineDetectionWarp loginWarp">
                    <div class="speed_title">
                        <div class="ft26">
                            <span class="icon ft26">&#xe68b;</span>
                            <i>线路检测</i>
                        </div>
                        <span class="icon" @click="showDetection = false">&#xe63b;</span>
                    </div>
                    <div class="detectionDataArr fl relative   clearfix">
                        <div class="part_cont">
                            <div class="top_part">
                                <div class="recommend">
                                    <div class="icon_part">
                                        <span class="icon ft22">&#xe6bf;</span>
                                    </div>
                                    <i class="ft16">推荐路线</i>
                                </div>
                                <div class="detectionMain_title_right clearfix">
                                    <label class="clearfix">
                                        <span class="spColor10"></span>
                                        <b>很好</b>
                                    </label>
                                    <label class="clearfix">
                                        <span class="spColor11"></span>
                                        <b>较好</b>
                                    </label>
                                    <label class="clearfix">
                                        <span class="spColor12"></span>
                                        <b>好</b>
                                    </label>
                                    <label class="clearfix">
                                        <span class="spColor13"></span>
                                        <b>一般</b>
                                    </label>
                                    <label class="clearfix">
                                        <span class="spColor14"></span>
                                        <b>较差</b>
                                    </label>
                                    <label class="clearfix">
                                        <span class="spColor15"></span>
                                        <b>很差</b>
                                    </label>
                                </div>
                            </div>
                            <div class="best_route detectionDataArrDemo">
                                <div class="top clearfix router_line txtl route_recommend">
                                    <em class=" ft14 mr5 colorA ml5">{{ detectionDataArr[0] && detectionDataArr[0].msg}}</em>
                                    <a class="detectionMain_progress bgcoloref clearfix" :href="detectionDataArr[0] && detectionDataArr[0].src">
                                        <div :class="'spColor1'+1" class="txtl ft14" :style="{width: detectionDataArr[0] && detectionDataArr[0].wid + '%'}">
                                            {{ detectionDataArr[0] && detectionDataArr[0].time}}MS
                                        </div>
                                    </a>
                                    <a :href="detectionDataArr[0] && detectionDataArr[0].src" class="detectionBtn ft16" style="width:110px; margin-right:-90px">立即进入 ></a>
                                </div>
                            </div>
                        </div>
                        <div class="bold_line"></div>
                        <div class="part_cont part_cont2">
                            <div class="detectionDataArrDemo" v-for="(item, index) in detectionDataArr">
                                <div class="top clearfix txtl router_line" :class="[index % 2 !== 0 && 'odd']">
                                    <em class=" ft14">{{item.msg}}</em>
                                    <a class="detectionMain_progress bgcoloref clearfix" :href="item.src">
                                        <div :class="'spColor1'+index" class="txtl ft14" :style="{width:item.wid+'%'}">
                                            {{item.time}}MS
                                        </div>
                                    </a>
                                    <!--<a :href="item.src" class="detectionBtn ft12">立即登陆</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn_part">
                        <div class="refresh_route" @click="refreshSpeed">
                            <span class="icon ft20">&#xe614;</span>
                            <i>刷新</i>
                        </div>
                        <!--<div class="intelligent_choose">-->
                            <!--<span class="icon ft20">&#xe698;</span>-->
                            <!--<i>智能选择</i>-->
                        <!--</div>-->
                    </div>
                    <img v-for="(item, index) in speedSrc" :src="isImgSrcExit ? (item+ '/yx/'+speedSrcRdm+'.html') : ''" @error="srcErroe(index)"
                         style="display: none;"/>
                </div>
            </div>
        </UtilPrompt>
    </div>
</template>

<script>
    import {lineDerection, speedInit} from '../js/index';
    import UtilPrompt from './utilPrompt.vue';
    import base from '../js/pubilc.js';
    import rightBar from './pageRightBar.vue'
    import download from './pageDownload.vue'

    let speed = lineDerection();
    let init = speedInit();
    export default {
        data() {
            return {
                height: document.documentElement.clientHeight,
                isShowLong: false,
                isShowQR: false,
                customer_url: appConfig().customerService,
                msg: 'this is index',
                width: document.documentElement.clientWidth,
                hrefs: ['sss', 'aaa', 'ssssdddd', 'wwwww', 'eeee', 'fffff'],
                isLoginDown: this.$store.state.isLogin === 'true',
                titleMsg: '测试准备中....',
                isidex: null,
								// 测速相关开始
                isImgSrcExit : false, // 是否绑定测速地址？ 右侧导航栏未打开状态时设为false
                showDetection: false, // 控制右侧导航栏是否打开
                speedSrc: appConfig().speedSrc,
                detectionDataArr: [], // 测速数据集合
                speedStartTime: 0, // 测速开始请求图片时时间
                speedSrcRdm: base.random(false, 10),
                // 测速相关结束
            };
        },
        computed: {
            isLogin() {
                if (this.$store.state.isLogin === 'true') {
                    return true
                }
                return false;
            }
        },
				watch : {
    			showDetection(curVal,oldVal) {
              curVal && this.refreshSpeed();
					}
				},
        components: {
            UtilPrompt,
            rightBar,
            download
        },
        methods: {
            rightBoxControl() {
                this.isShowLong && (this.isShowQR = false);
                this.isShowLong = !this.isShowLong;
            },
            showQRcode() {
                this.isShowQR = !this.isShowQR;
            },
            routerLink(url) {
                this.$router.push(url);
            },
            optimize() {
                speed(this, true);
            },
						// 测速相关数据重新获取
            refreshSpeed(isRefresh) {
                if(isRefresh && this.detectionDataArr.length < this.speedSrc.length) {
                    return false;
								}
                let self = this;
                self.isImgSrcExit = false;
                this.detectionDataArr = [];
                self.speedSrc = appConfig().speedSrc;
                setTimeout(function () {
                    self.speedStartTime = new Date().getTime();
                    self.isImgSrcExit = true;
                }, 5);
            },
            kefuEventout(e) {
                document.getElementById('login_rightBar_bom_li').style.color = "#BBBBBB";
            },
            kefuEventover(e) {
                document.getElementById('login_rightBar_bom_li').style.color = "#fff";
            },
            srcErroe(index) {
								this.isImgSrcExit && init.init2(this, this.speedStartTime, index);
            }
        },
        mounted() {
            let _this = this;
            window.addEventListener("resize", function () {
                _this.width = document.documentElement.clientWidth;
                _this.height = document.documentElement.clientHeight;
            })
            //init.load()
        },
        activated() {
            console.log("zujian ji huo")
        }
    };
</script>
<style lang="less">
    .detectionDataArrTop {
        width: 100%;
        border-top: 2px solid #434a55;
    }

    .detectionDataArrTop span {
        position: absolute;
        left: 40%;
        top: -20px;
        display: block;
        padding: 8px 20px;
        background: #050315;
        border-radius: 15px;
    }

    .lineDetectionWarp .detectionMainEm {
        margin-left: 0px;
        color: #2294f2;
        font-weight: bold;
    }

    .lineDetectionWarp .detectionMainEm b {
        font-weight: 100;
        color: #333;
    }

    .lineDetectionWarp .logoNav {
        margin: 20px 0;
    }

    .lineDetectionWarp .detectionBtn {
        padding: 3px 10px;
        background: #fff;
        border-radius: 6px;
        color: #666;
        margin-left: 5px;
    }

    .lineDetectionWarp .detectionBtn:hover {
        color: #f00;
    }

    .lineDetectionWarp .detectionDataArrDemoBom {
        position: absolute;
        bottom: 25px;
        left: 47%;
    }

    .lineDetectionWarp .detectionDataArrDemoBom a {
        display: inline-block;
        padding: 5px 12px;
        background-image: -webkit-linear-gradient(180deg, #f06660, #f38682 100%);
        border-radius: 4px;
    }

    .lineDetectionWarp .mainNav {
        width: 1200px;
        margin: 0 auto;
        border-radius: 8px;
        padding-bottom: 20px;
    }

    .lineDetectionWarp .detection_MainIcon a {
        margin-left: 35px;
        margin-top: 15px;
        float: left;;
    }

    .lineDetectionWarp .login_main {
        left: -220px;
        margin-top: 0;
    }

    .lineDetectionWarp .register_mainRight {
        background: #f5f6f7;
        padding: 30px 0 60px 0;
    }

    .lineDetectionWarp .login_footer_text {
        margin-bottom: 5px;
    }

    .lineDetectionWarp .login_footer_img {
        margin-bottom: 30px;
    }

    .lineDetectionWarp {
        overflow: hidden;
    }

    .lineDetectionWarp .register_main {
        padding-top: 35px;
    }

    .lineDetectionWarp .detectionMain {
        padding: 0px 35px 20px 35px;
        font-size: 20px;
    }

    .lineDetectionWarp .detectionMain .detectionMain_line {
        display: inline-block;
        width: 2px;
        height: 20px;
        margin: 2px 5px 0 0;
    }

    .lineDetectionWarp .detectionMain_title_right {
        font-size: 18px;
        float:right
    }

    .lineDetectionWarp .detectionMain_title_right b {
        font-weight: 100;
    }

    .lineDetectionWarp .detectionMain_title_right em {
        font-weight: 100;
    }

    .lineDetectionWarp .detectionMain_title_right label {
        color: #2294f2;
        display:flex;
        align-items:center;
        float:left
    }

    .lineDetectionWarp .detectionMain_title_right span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right:5px
    }

    .lineDetectionWarp .detectionMain_title_right em {
        margin-right: 25px;
    }

    .lineDetectionWarp .detectionDataArr {
        border-radius: 16px;
        z-index: 10;

    }

    .lineDetectionWarp .detectionDataArrDemo {
        margin-top: 28px;
    }

    .lineDetectionWarp .detectionDataArrDemo .top {
        border-radius: 8px;
    }

    .lineDetectionWarp .detectionMain_progress {
        display:block;
        width: 400px;
        height: 36px;
        border-radius: 20px;
        margin-bottom: 10px;
        margin-top: 5px;
        cursor:pointer;
    }

    .lineDetectionWarp .detectionMain_progress div {
        width: 60%;
        height: 36px;
        line-height:36px;
        border-radius: 20px;
        padding-left: 15px;
    }

    .lineDetectionWarp div.detection_Main {
        width: 1200px;
        margin: 0 auto;
        border-radius: 8px;
    }

    .detectionMain_progress .fl {
        color: #666
    }

    /*	.Detectionfoote{
            border-radius: 25px;
            width: 100%;
            background:rgba(255, 255, 255, 0.14);
            box-shadow:inset 0px 0px 10px rgba(255, 255, 255, 0.3), 0px 0px 30px #000;
            margin-top: 110px;
        }*/

    .lineDetectionWarp div.logoImg {
        position: relative;
        top: 70px;
    }
</style>
<style lang="stylus">
    @import "../css/stylus/index.styl";

    .recommend
        float:left
        setMiddle()
        color(text_color)
        .icon_part
            width: 35px
            height: 35px
            line-height: 35px
            bgRed()
            radius(50%)
            color()
            margin-right:5px

    .rightBox
        position: fixed
        right: 0
        z-index: 1000
        margin-top: -210px
        .kefu
          display:inline-block
          width:82px
          height:82px
          position: absolute;
          top: 380px;
          left: -20px;
          &:hover
            width:262px
            left: -200px;
            .word
              display:block
            .girl
              left: 95px;
          .word
            position: absolute;
            background-image: url(imgPathIndex + '/new/girl.png')
            background-position: 0px -34px;
            background-repeat: no-repeat;
            line-height:42px
            color:#fff
            text-align:center
            left:30px
            top:15px
            width:155px
            height:48px
            display:none
            cursor:pointer
          .girl
            display:inline-block
            width: 69px;
            height: 72px;
            position: relative;
            z-index:8
            background-image: url(imgPathIndex + '/new/girl.png')
            background-position: -181px -23px;
            background-repeat: no-repeat;
            left: 5px;
            top: 5px;
            cursor:pointer
            a
              display:block
              height:72px
          .circle
            position: absolute;
            z-index:7
            top: 8px;
            right: 8px;
            /*animation: 2000ms scaleToggleOne cubic-bezier(0.25,0.46,0.45,0.94) forwards;*/
            animation: scaleToggleOne 10s 0s infinite;
            background: rgba(252,125,138,0.25);
            width: 60px;
            height: 60px;
            border-radius: 50%;
          .cir1
            animation: scaleToggleTwo 11s 0s infinite;
          .cir2
            animation: scaleToggleThree 12s 0s infinite;
        ul
            /*width:187px*/
            white-space: nowrap
            /*overflow:hidden*/
            font-size: 12px
            li
                width: 68px
                height: 54px
                border: 1px solid #37383c
                radius(5px)
                margin-bottom: 1px
                background-color:#37383c;
                cursor()
                visibility: visible
                &:hover
                    bgRed()
                    color: #fff
                    > a
                        .icon, i
                            color()
                &.active
                    visibility: hidden
                > a
                    display: flex
                    flex-direction: column
                    width: 100%
                    height: 100%
                    .icon
                        line-height: 30px
                        color(common_color)
                    i
                        color(#bbbbbb)
            .mobile_download
                position: relative
                &:hover
                    .download_code
                        display: block
                .download_code
                    display: none
                    top: -30px
                    left: -192px
                    .hover_show_arrow
                        margin-top: 50px
                    .hover_show_content
                        display: flex
                        flex-direction: column
                        padding: 10px 40px
                        radius(10px)
                        .QR
                            display: block
                            text-align: center
                            color(text_color)
                            i
                                font-size: 18px
                        .QR_android
                            margin-bottom: 10px
            .red_packet
                position: relative
                height: 68px
                background-color:#fff
                border: 1px solid #dcdddd
                margin-top: 13px
                background-image: url(imgPathIndex + 'red_packet.png')
                background-position: center;
                background-repeat: no-repeat;
                &:hover
                    .hover_show_list
                        display: block
                .hover_show_list
                    display: none
                    top: -6px
                    left: -230px
                    .hover_show_arrow
                        margin-top: 35px
                        background-image: url(imgPathIndex + 'left_arrow_black.png')
                    .hover_show_content
                        background-color: rgba(0, 0, 0, 0.5)
                        width: 220px
                        height: 62px
                        radius(5px)
                        a
                            display: inline-block
                            width: 100%
                            height: 100%
                            padding: 5px
                            color()
                            .material_title
                                display: block
                            .material_cont
                                white-space: normal

    .speed_test
        .lineDetectionWarp
            width:1060px
            height:550px
            position:relative
            bgColor()
            .speed_title
                display:flex
                justify-content :space-between
                align-items:center
                height: 62px
                bgRed()
                color()
                cursor()
                text-align:left
                padding:26px
                .icon
                    width: 20px
                    height: 20px
                    radius(50%)
                    text-align:center
                    bgColor()
                    color(text_color)
            .detectionDataArr
                padding:10px 5px 20px 5px
                .part_cont
                    padding:0 40px
                    overflow:hidden
                    .top_part
                        overflow:hidden
                        margin-top:10px
                .part_cont2
                    overflow-y:auto
                    height:238px
                .detectionDataArrDemo
                    display:inline-block
                    text-align:left
                    width:50%
                    color()
                    .router_line
                        display:flex
                        justify-content :flex-start
                        align-items:center
                        em
                            margin-right:5px
                            width:50px
                            color(#666)
                        & > .odd
                            justify-content :flex-end
                .best_route
                    text-align:left
                    margin-bottom:20px
                    float:left
                    clear:both
                .bold_line
                    clear:both
                    border-bottom:2px solid #f2f2f3
            .btn_part
                position:absolute
                text-align:center
                bottom: 20px
                left: 0
                right:0
                >div
                    display:inline-block
                    width: 142px
                    line-height: 42px
                    font-size:20px
                    height: 42px
                    color()
                    radius(4px)
                    margin:5px
                    cursor()
                .refresh_route
                    bgColor(#999)
                .intelligent_choose
                    bgRed()
</style>
