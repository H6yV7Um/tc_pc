<template>
    <div id="notice">
        <div class="notice_wrapper">
            <div>
                <h2>
                    <span class="icon ft22">&#xe8c0;</span>
                    <i class="ft22">公告中心</i>
                </h2>
                <div class="content_wrapper box_shadow">
                    <ul class="notice_part">
                        <li v-for="(item, index ) in list">
                            <div class="notice_title" :class="[index === idx && 'active']">
                                <span class="title_cont fl">{{item.title}}</span>
                                <div class="fr">
                                    <span class="notice_time">{{item.time}}</span>
                                    <span class="show_btn icon" @click="showCont(index)">
                                            <i v-show="index !== idx">&#xe620;</i>
                                            <i v-show="index === idx">&#xe621;</i>
                                    </span>
                                </div>
                            </div>
                            <transition name="fade">
                                <div class="notice_content" v-show="index === idx">
                                    <div class="cont_detail" v-html="item.content"></div>
                                </div>
                            </transition>
                        </li>
                    </ul>
                    <Page class="switch_btn" show-total @on-change="handlePage" :page-size="pageSize" :total="promptList.length" ></Page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {noticeInit} from '../js/index.js'




    export default {
        name: 'index',
        data() {
            return {
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth,
                promptList: [],
                idx : 0,
                currentNum : 1,
                pageSize: 10,
                islogin: this.$store.state.isLogin === 'true',
                showIndex: null,
            }
        },
        computed: {
            list () {
                return this.promptList.slice((this.currentNum - 1) * this.pageSize, this.currentNum * this.pageSize)
            },
            pageNum () {
                return Math.ceil(this.list.length/ this.pageSize);
            }
        },
        methods: {
            handlePage(index) {
                this.currentNum = index;
            },
            showCont(index) {
                this.idx = this.idx === index ? -1 : index;
            },
            getUnloginNotice () {
                let that = this;

                this.$http.get('/json/notice.json'
                ).then((response) => {
                    let data = response.data && response.data.data;

                    if (data && (data.length > 0)) {
                        for (let i = 0, len = data.length; i < len; i++) {
                            data[i].content = data[i].content.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;nbsp;/g, ' ');
                            //   conData[i].content = conData[i].content.replace(/&lt;\/?[^&gt;]*&gt;/g, '').replace(/&nbsp;/g, ' ').replace(/\s\s+/g, ' ');
                            data[i].time = data[i].time;
                        }
                        that.promptList = data;
                    }
                })
            }
        },
        beforeCreate() {
//            init.init(this);
        },
        created() {
            if (this.islogin) {
                this.idx = parseInt(this.$route.params.pageId,10);
                let init = noticeInit();
                init.init(this);
            } else {
                this.getUnloginNotice()
            }
        },
        updated() {
            if (this.promptList.length - 1 < this.showIndex) this.showIndex = 0;

            function inittab(btn, obj) {
                let btns = document.getElementsByClassName(btn),
                    objs = document.getElementsByClassName(obj);

                for (let i = 0, len = btns.length; i < len; i++) {
                    btns[i].zdindexs = i;
                    btns[i].addEventListener("click", function () {
                        for (let y = 0, lenn = objs.length; y < lenn; y++) {
                            objs[y].style.display = "none";
                            btns[y].className = 'PromptBoxContent_main_listLi noticePromptBoxContent_main_listLi bgcolorA colorJ';
                        }
                        objs[this.zdindexs].style.display = "block";
                        this.className = 'PromptBoxContent_main_listLi noticePromptBoxContent_main_listLi bgcolorY colorA';
                    }, false)
                }
            }

            inittab('noticePromptBoxContent_main_listLi', 'noticePromptBoxContent_maini_content');
        },
        mounted() {
            this.showIndex = this.$route.params.pageId;
        },
    }

</script>

<style>
    .switch_btn .ivu-page-item a{
        color:#333
    }
    .switch_btn .ivu-page-item-active, .switch_btn .ivu-page-item-active:hover{
        background-color:#ff6a76 !important;
        border-color:#ff6a76 !important;
    }
    .switch_btn .ivu-page-item:hover{
        background-color:#ededed;
        border-color:#ededed;
    }
    .switch_btn .ivu-page-item-active a{
        color:#fff
    }
</style>
<style lang="stylus" scoped>
    @import "../css/stylus/index.styl";

    .fade-enter-active, .fade-leave-active
        transition: opacity .4s;
    .fade-enter, .fade-leave-to
        opacity: 0;

    #notice
        width:main_width
        margin:25px auto
        text-align:left
        .notice_wrapper
            >div
                h2
                    color(text_color)
                    margin-bottom: 10px
                .content_wrapper
                    bgColor()
                    .notice_part
                        .notice_title
                            overflow:hidden
                            height: 40px
                            line-height: 40px
                            padding:0 26px
                            transition: background 0.4s
                            border-bottom:1px solid #dedede
                            font-size:14px
                            &.active
                                bgRed()
                                color()
                                .fr
                                    .notice_time
                                        color()
                            .title_cont
                                font-weight:bold
                                ellipsis()
                                max-width:950px
                            .fr
                                font-size:12px
                                .notice_time
                                    color(#c3c3c3)
                                .show_btn
                                    margin-left:10px
                                    cursor()
                        .notice_content
                            padding:10px 36px
                            padding-bottom:30px
                            border-bottom:1px solid #dedede
                            bgColor(#fbfbfb)
                            .dear_guest
                                margin:5px
                                font-weight:bold
                            .cont_detail
                                padding:5px
                    .switch_btn
                        text-align:center
                        padding:20px 0
                        .ivu-page-item
                            bgRed()
</style>
