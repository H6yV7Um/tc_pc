<template>
    <div class="bet_bar">
        <div class="content">
            <div class="lottery_rec">
                <div>
                    <div class="lottery_logo"></div>
                    <div class="lottery_detail">
                        <span>第20171114-029期 截止时间</span>
                        <!--<h1>{{lotteryName}}</h1>-->
                        <div>
                            <!--<div class="history_reward">-->
                                <!--<span>历史开奖</span>-->
                                <!--<span class="icon-qushitu iconfont"></span>-->
                            <!--</div>-->
                            <ul class="count_time">
                                <li class="num_wrap">{{stopTime.hour}}</li>
                                <li class="symbol_wrap">:</li>
                                <li class="num_wrap">{{stopTime.minute}}</li>
                                <li class="symbol_wrap">:</li>
                                <li class="num_wrap">{{stopTime.second}}</li>
                            </ul>
                            <!--<div class="more_lottery">-->
                                <!---->
                                <!--&lt;!&ndash;<span>更多彩种</span>&ndash;&gt;-->
                                <!--&lt;!&ndash;<span class="icon-xialajiantouxiangxia iconfont"></span>&ndash;&gt;-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="win_num">
                <div>
                    <div class="win_title">
                        <span>第2015114-208 开奖结果</span>
                        <a href="#" class="win_trendency">开奖走势</a>
                    </div>
                    <ul>
                        <li v-for="num in winNum" class="pinkImg">
                            <span>{{num}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="num_relative">
                <div>
                    <div class="history_num">
                        <span>历史期号</span>
                        <ul>
                            <li>第20173342344</li>
                            <li>第20173342344</li>
                            <li>第20173342344</li>
                            <li>第20173342344</li>
                            <li>第20173342344</li>
                            <li>第20173342344</li>
                            <li>第20173342344</li>
                        </ul>
                    </div>
                    <div class="list_num">
                        <span>开奖号码</span>
                        <ul>
                            <li>
                                <ul>
                                    <li>0</li>
                                    <li>1</li>
                                    <li>0</li>
                                    <li>3</li>
                                    <li>0</li>
                                    <li>4</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>0</li>
                                    <li>1</li>
                                    <li>0</li>
                                    <li>3</li>
                                    <li>0</li>
                                    <li>4</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>0</li>
                                    <li>1</li>
                                    <li>0</li>
                                    <li>3</li>
                                    <li>0</li>
                                    <li>4</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="group_status">
                        <span>组态</span>
                        <ul>
                            <li>组三</li>
                            <li>组六</li>
                            <li>组三</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data (){
            return {
                lotteryName : '',
                winNum: [],
                stopTime : {}
            }
        },
        created(){
             let that = this;
             let lotteryId = this.$route.params.betId ? this.$route.params.betId : 11;
             let sendUrl = ['/yx/u/api/game-lottery/init-game-lottery','?name=',lotteryId];

            // 初始化彩票信息
            this.$http.post('/yx/u/api/game-lottery/init-game-lottery',{name:lotteryId},{emulateJSON:true}
            ).then((response) => {
                let obj = response.body
                console.log(obj)
//                if (obj && (obj.code === 0)){
//                    this.lotteryName = obj.data.info.showName
//                }
            });

            // 开奖号码
            this.$http.post('/yx/u/api/game-lottery/static-open-code?name=CQSSC'
            ).then((response) => {
                let obj;

                (Object.prototype.toString.call(response.body) === '[object Array]') && (obj = response.body[0]);
                obj.code && (this.winNum = obj.code.split(','))
            });

            function getCountTime(d){
                let hour = ('00' + parseInt(d / 60 / 60)).slice(-2)
                let minute = ('00' + parseInt((d - hour*60*60)/60)).slice(-2)
                let second = ('00' + parseInt((d - hour*60*60 - minute*60))).slice(-2);
                return {
                    hour: hour,
                    minute: minute,
                    second: second
                }
            }

            let secondTime = 0;
            function getCountNum(){
                // 开奖信息
                that.$http.post('/yx/u/api/game-lottery/static-open-time?name=CQSSC'
                ).then((response) => {
                    let obj = response.body

                    if (obj && obj.stopTime){
                        let d1 = new Date(obj.stopTime)
                        let d2 = new Date()
                        let d = d1 - d2
                        secondTime = d/1000;
                        that.stopTime = getCountTime(secondTime);
                    }
                })
            }
            getCountNum()

            //倒计时
            setInterval(function () {
                if(secondTime > 0){
                    secondTime--;
                    that.stopTime = getCountTime(secondTime);
                }else{
                    getCountNum()
                }
            },1000)
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../css/stylus/index.styl";

    .bet_bar .content{
        ::-webkit-scrollbar{width:10px;};
        ::-webkit-scrollbar-track{background-color:#bee1eb;opacity:0.5;border-radius:5px};
        ::-webkit-scrollbar-thumb{background-color:#00aff0;opacity:0.5;border-radius:5px};
        ::-webkit-scrollbar-thumb<a href="https://www.baidu.com/s?wd=%3Ahover&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLuhc1njKWnjTzPAnYmH7b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EP1RkPjRYP1TvPHf3rjRsnW0Y" target="_blank" class="baidu-highlight">:hover</a> {background-color:#9c3}
        ::-webkit-scrollbar-thumb:active {background-color:#00aff0}
    }

    .bet_bar
        height: 144px
        background:url(imgPath + 'bar_bg.png') center center no-repeat
        background-size:cover
        &:before
            display:table
            content:''
        .content
            height:136px
            margin-top:8px
            display:flex
            align-items:center
            border-top:1px solid #517abb
            font-size:14px
            >div
                flex: 1
                height:110px
            .lottery_rec
                vertical-align:middle
                text-align:center
                >div
                    width: 356px
                    height:100%
                    display:flex
                    margin:0 auto
                    align-items:center
                    background:url(imgPath + 'bar_left.png') center center no-repeat
                    background-size:cover
                    .lottery_logo
                        width:94px
                        height:94px
                        margin-left:8px
                        background:url(imgPath + 'lottery_logo.png') center center no-repeat
                    .lottery_detail
                        display:inline-block
                        vertical-align:middle
                        margin-left:20px
                        span
                            text-align:center
                        >div
                            margin-top:16px
                            color:#fff
                            .count_time
                                color:#4181b6
                                /*background-color :#378acb*/
                                li
                                    display:inline-block
                                    height:38px
                                    line-height: 38px
                                    text-align :center
                                    font-size:22px
                                    /*font-weight:bold*/
                                .num_wrap
                                    width:38px
                                    background-color:#ddeffb
                                    boxSizing()
                                    border: 1px solid #b7d6eb
                                .symbol_wrap
                                    width:12px
            .win_num,.num_relative
                position:relative
                >div
                    text-align:center
                    vertical-algin:middle
                    >div
                        margin-top:10px
            .win_num
                color:#fff
                background:url(imgPath + 'split_line.png') right center no-repeat
                .win_title
                    a
                        color:bet_bit_text
                        text-decoration: underline
                ul
                    position:absolute
                    width:100%
                    left:0
                    display:inline-block
                    bottom:5px
                    font-size:0
                    li
                        display:inline-block
                        backgroundImg()
                        background-size:contain
                        width:56px
                        height: 56px
                        text-align:center
                        border-radius:50%
                        text-align:center
                        font-size:26px
                        margin:0 4px
                        &.greyImg
                            background-image:url(imgPath + 'circle_grey.png')
                        &.pinkImg
                            background-image:url(imgPath + 'circle_pink.png')
                        span
                            display:inline-block
                            vertical-align:middle
                            width:38px
                            height:38px
                            margin-top:8px
                            line-height:32px
                            border:2px solid #fff
                            radius(50%)
            .num_relative
                color:#fff


                >div
                    height:105px
                    display:flex
                    overflow-y:scroll
                    >div
                        display:inline-block
                    .history_num
                        width:40%
                    .list_num
                        width:35%
                        >ul
                            >li
                              ul
                                li
                                    display:inline-block
                                    height: 16px
                                    width:16px
                                    line-height:16px
                                    radius(50%)
                                    background-color:#6daddf
                                    font-size:12px
                    .group_status
                        width:20%
</style>
