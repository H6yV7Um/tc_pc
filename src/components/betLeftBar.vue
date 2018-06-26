<template>
    <div class="bet_left_bar">
        <div class="left_bar_content">
            <div class="top_part">
                <div class="radio">
                    <span class="ctx">&#xe6a1;</span>
                    <i>声音 :&nbsp;</i>
                    <div class="switch">开关</div>
                </div>
                <div class="show_more_bet">
                    <a class="more_bet">
                        <i>更多彩种</i>
                        <span class="ctx">&#xe626;</span>
                    </a>
                    <div id="top-lt-list" class="dropdown-menu">
                        <div class="top-lt-list-inside clearfix">
                            <em class="m_ico">hello;</em>
                            <ul class="top-lt-choose">
                                <li v-for="(item, index) in renderLotttery" :class="[index == 0? 'width_big' : '']">
                                    <h4>{{item.name}}</h4>
                                    <ul class="sec-lt-list" rel="ssc">
                                        <li v-for="(n, idx) in item.itemArr">
                                            <a>{{n.showName}}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--<div class="species">-->
                    <!--<div class="official active">官方</div>-->
                    <!--<div class="classic">经典</div>-->
                <!--</div>-->
            </div>
            <div class="second_part">
                <div class="title">官方常用彩种</div>
                <div class="bet_content">
                    <div class="edit_btn">
                        <a @click="isShow = true">
                            <span class="ctx">&#xe63e;</span>
                            <i>编辑</i>
                        </a>
                        <UtilPrompt v-show="isShow" v-on:hide="hide()">
                            <div style="text-align:center">
                                <div class="fav_content">
                                    <div class="choose_fav_modal">
                                        <span>请选择您的常玩<i>官方</i>彩种</span>
                                        <i class="max_num">最多9个/4</i>
                                        <div class="spity_line"></div>
                                        <i class="close_btn ctx" @click="isShow = false">&#xe665;</i>
                                    </div>
                                    <ul class="fav_detail">
                                        <li v-for="(item, index) in renderLotttery">
                                            <div class="fav_title">{{item.name}}</div>
                                            <ul class="content_detail">
                                                <li v-for="(n, idx) in item.itemArr">
                                                    <div :class="[n.isActive ? 'active' : '']" @click="chooseLotteryItem(index, idx, n.isActive)">{{n.showName}}</div>
                                                    <span>H</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </UtilPrompt>
                    </div>
                    <ul class="bet_list">
                        <li v-for="(item, index) in favArr" :class="[index === chooseIdx ? 'active' : '']" class="first_cls first_ssc" @click="chooseFav(index)">
                            <div class="bet_name">{{item.lotteryName}}</div>
                            <div class="detail">
                                <span class="icon fz16">H</span>
                                <i class="time_count fz14">{{item.surplusTime}}</i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <!--<div class="modal">-->
        <!--<div class="modal_bg"></div>-->
    <!--</div>-->
</template>

<script type="text/ecmascript-6">
    import UtilPrompt from './utilPrompt';

    let sscorder = [11,151,161,6,191,46,911,119,205,206,200,201,202,711,811,601,51,203];
//    var sscorder1 = [6,191,46,911,119,205,206];
//    var sscorder2 = [200,201,202];
//    var sscorder3 = [711,811,601,51,203];
    let xuanorder = [21,22,24,23,28,26];
    let otherorder = [47,204,43,41,42];
    let lotteryArr = [
            {name : '时时彩',itemArr : []},
            {name : '11选5',itemArr : []},
            {name : '其他',itemArr : []}
        ];

    //判断是否为函数
    function isFunction(fn) {
        return Object.prototype.toString.call(fn)=== '[object Function]';
    }

    function inArray(item, arr){
        for(let i = 0; i < arr.length; i++ ){
            if(item == arr[i]){
                return i
            }
        }
        return -1
    }

    export default{
        data(){
            return {
                favArr : [],
                chooseIdx : -1,
                modal10: false,
                isShow : false,
                dataGot : [],
                itemCount : 0,
                renderLotttery:[]
            }
        },
        created(){
            this.getFavLottery(this.formAllLottery);
            this.getAllLottery(this.formAllLottery);
        },

        methods:{
            getFavLottery(callBack){
                let that = this;

                // 初始化彩票信息
                this.$http.post('/yx/u/api/game-lottery/get-favourite-game'
                ).then((response) => {
                    let obj = response.body;
                    if (obj && (obj.code === 0)){
                        that.favArr = obj.data;
                        isFunction(callBack) && callBack()
                    }else{
                        console.error('获取数据有问题')
                    }
                });
            },
            getAllLottery(callBack){
                let that = this;

                this.$http.post('/yx/u/api/game-lottery/openLotterys'
                ).then((response) => {
                    let obj = response.body;

                    if (obj && (obj.code === 0)){
                        that.dataGot = obj.data;
                        isFunction(callBack) && callBack()
                    }else{
                        console.error('获取数据有问题')
                    }
                });
            },
            formAllLottery(){
                var that = this;

                if(that.favArr.length && this.dataGot.length){
                    this.dataGot.forEach(function(item){
                       item.isActive = false;

                       that.favArr.forEach(function(n){
                           if(item.id == n.lotteryId){
                               item.isActive = true;
                               that.itemCount++
                           }
                       })

                       if(inArray(item.id, sscorder) > -1){
                           lotteryArr[0].itemArr.push(item)
                       }else if(inArray(item.id, xuanorder) > -1){
                           lotteryArr[1].itemArr.push(item)
                       }else{
                           lotteryArr[2].itemArr.push(item)
                       }
                    });
                    this.renderLotttery = Object.assign({}, lotteryArr);
                }
            },
            chooseLotteryItem(index, idx, isActive){
                if(isActive){
                    this.itemCount--;
                    lotteryArr[index].itemArr[idx].isActive = false;
                    this.delFavLottery(lotteryArr[index].itemArr[idx].id)
                    this.renderLotttery = Object.assign({}, lotteryArr);
                }else{
                    if(this.itemCount < 9){
                        this.itemCount++;
                        lotteryArr[index].itemArr[idx].isActive = true;
                        this.addFavLottery(lotteryArr[index].itemArr[idx].id)
                        this.renderLotttery = Object.assign({}, lotteryArr);
                    }else{
                        alert("每次最多选择9个")
                    }
                }
            },
            delFavLottery(lotteryId){
                let that = this;

                this.$http.post('/yx/u/api/game-lottery/del-favourite-game', {lotteryId : lotteryId}, {emulateJSON:true}
                ).then((response) => {
                    let obj = response.body;

                    if (obj && (obj.code === 0)){
                        that.getFavLottery()
                    }else{
                        console.error('获取数据有问题')
                    }
                });
            },
            addFavLottery(lotteryId){
                let that = this;

                this.$http.post('/yx/u/api/game-lottery/add-favourite-game', {lotteryId : lotteryId}, {emulateJSON:true}
                ).then((response) => {
                    let obj = response.body;

                    if (obj && (obj.code === 0)){
                        that.getFavLottery()
                    }else{
                        console.error('获取数据有问题')
                    }
                });
            },
            hide(){
                this.isShow = false
            },
            chooseFav(idx){
                this.chooseIdx = idx
            }
        },
        components:{
            UtilPrompt
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../css/stylus/index.styl";

    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }

    .width_big
        width:350px !important

    .fav_content
        padding:17px
        .choose_fav_modal
            display:flex
            align-items:center
            justify-content :space-between
            font-size:14px
            span
                margin-right:5px
            i
                color:bet_btn_blue
            .spity_line
                border:1px solid #c9caca
                flex-grow:1
                margin-left:5px
            .close_btn
                margin-left:5px
        .fav_detail
            font-size:14px
            >li
                overflow:hidden
                padding-right:200px
                border-bottom:1px dotted #c9caca
                &:last-child
                    border:none
                .fav_title
                    padding-top:12px
                    float:left
                    width:70px
                    color:bet_btn_blue
                    font-weight:bold
                .content_detail
                    float:left
                    width: 760px
                    font-size:0
                    overflow:hidden
                    li
                        display:flex
                        align-items:center
                        justify-content :flex-start
                        width:125px
                        boxSizing()
                        float:left
                        margin:15px 0
                        font-size:12px
                        div
                            height:24px
                            padding: 0 5px
                            radius(5px)
                            line-height:22px
                            border:1px solid #c9caca
                            &.active
                                background-color:bet_btn_blue
                                border-color:bet_btn_blue
                                color:#fff
                        span
                            width: 17px
                            height: 17px
                            line-height:18px
                            margin-left:4px
                            color:#fff
                            background-color:small_color



    .bet_left_bar
        position:absolute
        width:168px
        left:-168px
        top:0
        background:url(imgPath + 'left_bar_bg1.png') center center no-repeat
        radius(8px)
        border-right:2px solid #a0cdea
        /*background-size:cover*/
        .left_bar_content
            width: 100%
            margin-top:8px
            margin-left: -8px
            radius(8px)
            .top_part
                background:url(imgPath + 'left_part_top.png') center center no-repeat
                background-size:cover
                padding:15px 10px
                border-top-left-radius:8px
                border-top-right-radius:8px
                color:#fff
                .radio
                    margin-bottom:20px
                    font-size:14px
                    display:flex
                    align-items:center
                    justify-content:center
                    text-align:center
                    i
                        margin-left:4px
                .show_more_bet
                    &:hover
                        #top-lt-list
                            visibility: visible
                    .more_bet
                        height: 32px
                        line-height:32px
                        display:block
                        radius(16px)
                        background-color:#58aef7
                        color:#fff
                        font-size:18px
                        cursor()
                    #top-lt-list
                        position: absolute
                        left: 0
                        height:70px
                        margin: -1px 0
                        z-index: 1000
                        visibility: hidden
                        float: left
                        min-width: 160px
                        font-size: 12px
                        list-style: none
                        background-clip: padding-box
                        border-radius: 4px
                        padding: 0px
                        border: none
                        background-color: transparent;box-shadow: none
                        top:50px
                        color:#333
                        .top-lt-list-inside
                            background: #fff
                            padding-bottom: 15px
                            width: 700px
                            height: auto
                            border: 5px solid #7bb5e2
                            box-shadow: 4px 4px 18px -2px rgba(0,0,0,.61)
                            margin-top: 0px
                            border-radius: 5px
                            margin-left: 169px
                            position: relative
                            margin-top: 10px
                            .em
                                position: absolute
                                top: -20px
                                left: 5px
                                color: #dadada
                                font-size: 120%
                                /*display:none*/
                            .top-lt-choose
                                margin: 10px auto
                                width: 95%
                                li
                                    width:110px
                                    float:left
                                    margin-left:8px
                                    h4
                                        background: #2294f2
                                        color: #fff
                                        text-align: center
                                        font-size: 18px
                                        height: 25px
                                        line-height: 25px
                                        border-radius: 3px
                                    .sec-lt-list
                                        margin-left: 0px
                                        margin-top: 10px
                                        li
                                            float:left
                                            width: 110px
                                            font-size: 12px
                                            float: left
                                            margin: 0 5px 5px 0
                                            height: 28px
                                            line-height: 26px
                                            text-align: left;padding: 0 7px 0 6px
                                            border: 1px solid #e4e4e4
                                            border-radius: 6px
                                            color: #63636
                                            cursor: pointer
                                            background-color: #fff
                                            &:hover
                                                background-color: #2294f2
                                                border: 1px solid #2294f2
                                                color: #fff
                                                a
                                                    color:#fff
                                            a
                                                display:block
                                .first_ssc
                                    width:300px
                                    float:left
                                .other_cls
                                    width: 120px
                                    .sec-lt-list
                                        li
                                            width: 120px;
                                            em
                                                float:right

                .species
                    margin-top:10px
                    div
                        display:inline-block
                        height: 32px
                        line-height:32px
                        width: 64px
                        radius(16px)
                        background-size:cover
                        background:url(imgPath + 'classic_btn.png') center center no-repeat
                    &>.active
                        background:url(imgPath + 'official_btn.png') center center no-repeat
            .second_part
                background:url(imgPath + 'second_p_bg.png') center center no-repeat
                background-size:cover
                padding:10px 8px
                .title
                    font-size:red
                    color:#fff
                .bet_content
                    radius(10px)
                    background-color:#fff
                    color:bet_main_text
                    .edit_btn
                        height:32px
                        line-height:32px
                        background-color:#c9e4fb
                        radiusTop(10px)
                        cursor()
                        a
                            background-color:#c9e4fb
                    .bet_list
                        li
                            height: 70px
                            boxSizing()
                            padding-top:10px
                            border-bottom:1px solid #e5e5e4
                            cursor()
                            &:last-child
                                border:none
                            &.active
                                background-color:#334c9f
                                .bet_name
                                    color:#fff
                            .bet_name
                                font-size:16px
                            .detail
                                margin-top:5px
                                position:relative
                                span
                                    position:absolute
                                    height: 17px
                                    width:17px
                                    left:15px
                                    top:3px
                                    line-height:17px
                                    color:#fff
                                    background-color:small_color
                                i
                                    color:bet_bit_text
</style>
