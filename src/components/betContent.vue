<template>
    <div class="content_body">
        <div class="content">
            <div class="header_part">
                <div class="rightmost_btn">
                    <div class="lottery_pool">
                        <span class="ctx">&#xe6a0;</span>
                        <i>彩票奖池</i>
                    </div>
                    <div class="mark_cathectic">
                        <span class="ctx">&#xe6a3;</span>
                        <i>做号投注</i>
                    </div>
                </div>
                <div class="choose_bar">
                    <ul >
                        <li v-for="(n, index) in objArr" @click="barChoose(index, 'barIdx')" :class="[index == barIdx ? 'active' : '']">{{n.title}}</li>
                    </ul>
                    <div class="pack_up">-收起</div>
                </div>
                <div class="area">
                    <div class="left_cont">
                        <div class="choose_area">
                            <div class="title1" v-for="(row, index) in filterObj.rows">
                                <span>{{row[0].title}}</span>
                                <ul>
                                    <li v-for="(column, index) in row[0].columns" @click="middleChoose(index, 'columnIdx', column, row[0].title)"
                                        :class="[((index === columnIdx) && (row[0].title === columnTitle)) ? 'active' : '']">{{column.showname}}</li>
                                </ul>
                            </div>
                            <div class="choose_num">
                                <div class="left_part">
                                    <div class="notice">
                                        <div class="notice_left">
                                            <span class="ctx">&#xe69d;</span>
                                            <span class="notice_cont">{{columnText}}</span>
                                        </div>
                                        <div class="notice_right">
                                            <span class="ctx">&#xe668;</span>
                                            <i>机选</i>
                                            <!--<span class="notice_cont">当前玩法奖金<i class="money_color">0.659</i>元</span>-->
                                        </div>
                                    </div>
                                    <div class="num_list" v-for="(select, index) in selectArr">
                                        <div>
                                            <div class="left_choose">
                                                <span>{{select.title}}</span>
                                                <ul>
                                                    <li v-for="(n, index) in select.balls" @click="bottomChoose($event, index, select.title)"
                                                    >{{n}}</li>
                                                </ul>
                                            </div>
                                            <div class="right_choose">
                                                <ul>
                                                    <li v-for="(n, index) in textList" @click="bottomTextChoose($event, index, select.title)">{{n}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--<div class="split_line"></div>-->
                        <div class="other_choose">
                            <ul>
                                <li class="show_times">
                                    您选择了<i class="money_color">30</i>注
                                </li>
                                <li class="times_input">
                                    <button class="minus">-</button>
                                    <input type="text">
                                    <button class="plus">+</button>
                                </li>
                                <li class="bei">倍</li>
                                <li class="with_border">
                                    <span class="yuan">元</span>
                                    <span class="jiao active">角</span>
                                    <span class="fen">分</span>
                                    <span class="li">厘</span>
                                </li>
                                <li class="money">
                                    共<i class="money_color">20.00</i>元
                                </li>
                                <li class="win_money">
                                    <span>奖金</span>
                                    <div id="snap"></div>
                                    <!--<input type="range" :min="min" :max="max" v-model="value">-->
                                    <span class="show_value">{{value}}</span>
                                    <span class="percent">{{percent}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="num_basket">
                            <div class="left_basket">
                                <div class="left_bg1"></div>
                                <div class="left_bg2">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>玩法类型</td>
                                                <td>投注号码</td>
                                                <td>模式</td>
                                                <td>注数</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!--<tr>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                            <!--</tr>-->
                                            <!--<tr>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                            <!--</tr>-->
                                            <!--<tr>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                                <!--<td>432134124</td>-->
                                            <!--</tr>-->
                                        </tbody>
                                    </table>
                                    <div class="empty_basket"></div>
                                </div>
                                <div class="left_bg3"></div>
                            </div>
                            <div class="btn_part">
                                <ul>
                                    <li class="margin_right">
                                        <span class="ctx">&#xe67b;</span>
                                        <span class="">添加号码</span>
                                    </li>
                                    <li class="margin_left">
                                        <span class="ctx">&#xe651;</span>
                                        <span class="">直接投注</span>
                                    </li>
                                    <li class="margin_right">
                                        <span class="ctx">&#xe676;</span>
                                        <span class="">清空号码</span>
                                    </li>
                                    <li class="margin_left">
                                        <span class="ctx">&#xe69e;</span>
                                        <span class="">我要投注</span>
                                    </li>
                                </ul>
                                <div class="confirm_bet">
                                    <span class="ctx">&#xe672;</span>
                                    <i>00:01:02</i>
                                    <span class="confirm_text">确定投注</span>
                                </div>
                                <div class="statistical fz12">
                                    号码篮共 <i class="money_color">30</i> 注  共<i class="money_color"> 60.00</i> 元
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <record></record>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Record from './betRecord';
    import {objArr} from './betContent';

    // default value
    let defaultBarIdx = 2;// 导航栏默认值

    let textList = ['全', '大', '小', '单', '双', '清']

    export default {
        data () {
            return {
                value: 1800,
                min: 1700,
                max: 1970,
                objArr : objArr,
                barIdx : defaultBarIdx,
                columnIdx : -1,
                columnTitle : '',
                columnText : '',
                columnHideText : '',
                selectArr: [],
                bottomChooseArr : [],
                textList : textList
            }
        },
        methods:{
            barChoose: function (idx, barIdx){
                this[barIdx] = idx
            },

            middleChoose : function(idx, columnIdx, column, title){
                this.columnTitle = title;
                this.columnIdx = idx;
                this.columnText = column.tips;
                this.columnHideText = column.example + column.help;
                this.selectArr = column.select ? column.select.layout : []
            },
            bottomChoose : function (event, idx, title) {
                event.target.className = (event.target.className === 'active') ? '' : 'active';

                var arr = this.bottomChooseArr;

                if(arr.length > 0){
                    for(let i = arr.length - 1; i >= 0; i--){
                        if((arr[i].title === title) && (arr[i].idx === idx)){
                            arr.splice(i, 1)
                            return
                        }
                    }
                }
                this.bottomChooseArr.push({'title': title, 'idx': idx})
            },
            bottomTextChoose : function(event, idx, title){

            }
        },
        computed : {
            // 仅读取
            percent: function () {
                return ((this.value - this.min) / (this.max - this.min) * 100).toFixed(1) + '%'
            },
            filterObj : function() {
                return this.objArr[this.barIdx]
            }
        },
//    created() {
//
//    },
        mounted () {
            var snapSlider = document.getElementById('snap');
            let _this = this;

//            console.log(this.$route.params.betId);

//            noUiSlider.create(snapSlider, {
//                start: 40,
//                behaviour: 'update',
//                connect: [true, false],
//                range: {
//                    'min':  _this.min,
//                    'max':  _this.max
//                }
//            });
//
//            snapSlider.noUiSlider.on('update', function(value) {
//                _this.value = parseInt(value)
//            });

//            _index.initAll()
        },
        components: {
            Record
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../css/stylus/index.styl"

    .content_body
        .content
            .header_part
                position:relative
                background-color:#f4f4f4
                color:#666
                padding:10px
                box-shadow:0 5px 5px #ddd
                .rightmost_btn
                    position:absolute
                    right:-30px
                    top:0
                    >div
                        width: 30px
                        height: 116px
                        border-top-right:10px
                        border-bottom-right:10px
                        font-size: 14px
                        line-height:16px
                        padding:10px 10px
                        color:#fff
                    .lottery_pool
                        background:url(imgPath + 'jiangchi.png') center center no-repeat
                    .mark_cathectic
                        margin-top:6px
                        background:url(imgPath + 'zuohao.png') center center no-repeat
                .choose_bar
                    height:34px
                    line-height:34px
                    font-size:14px
                    text-align:left
                    ul
                        /*display:inline-block*/
                        border-bottom:1px solid border_bottom_color
                        li
                            display:inline-block
                            width: 60px
                            height:24px
                            line-height:24px
                            margin:6px
                            text-align:center
                            border-radius:10px
                            cursor:pointer
                            &.active
                                background-color:bet_btn_light_blue

                    .pack_up
                        position:absolute
                        height: 20px
                        width:50px
                        background-color:#70abdc
                        line-height: 20px
                        color:#fff
                        right: 20px
                        text-align:center
                        radius(5px)
                        top:17px
                        cursor()
                .area
                    padding:15px 20px 25px 20px
                    overflow:hidden
                    .left_cont
                        /*width:760px*/
                        /*float:left*/
                        overflow:hidden
                        .choose_area
                            font-size:12px
                            .title1
                                margin-top:10px
                                margin-bottom:15px
                                text-align:left
                                color:#333
                                span
                                    display:inline-block
                                ul
                                    display:inline-block
                                    font-size:0
                                    li
                                        display:inline-block
                                        height:20px
                                        padding: 0 8px
                                        border:1px solid #d9d9d9
                                        line-height:18px;
                                        text-align:center
                                        font-size:12px;
                                        margin-right:10px
                                        radius(6px)
                                        cursor:pointer
                                        &.active
                                            color: #ffffff
                                            background-color:bet_btn_blue
                                            border-color:bet_btn_blue
                            .choose_num
                                background-color: #fff
                                border:1px solid border_bottom_color
                                radius(10px)
                                .left_part
                                    padding: 10px 16px
                                    min-height:200px
                                    .notice
                                        display:flex
                                        justify-content:space-between
                                        .notice_left
                                            .ctx
                                                color:small_color
                                        .notice_right
                                            border:1px solid #999999
                                            width:64px
                                            height:22px
                                            line-height:20px
                                            font-size:14px
                                            cursor()
                                            radius(6px)
                                    .num_list
                                        margin-top:12px
                                        >div
                                            display:flex
                                            justify-content :space-between
                                            .left_choose
                                                display:flex
                                                align-items :center
                                                >span
                                                    width:40px
                                                    height: 20px
                                                    line-height:18px
                                                    text-align:center
                                                    border:1px solid #999
                                                    display:inline-block
                                                    margin-right:18px
                                                    radius(5px)
                                                    color:#333
                                                ul
                                                    display:inline-block
                                                    font-size:0
                                                    height:30px
                                                    li
                                                        display:inline-block
                                                        width:30px
                                                        height:30px
                                                        text-align:center
                                                        line-height 28px
                                                        border:1px solid #999
                                                        border-radius:50%
                                                        font-size:20px
                                                        color:#999
                                                        margin-right:10px
                                                        font-size:20px
                                                        cursor()
                                                        &.active
                                                            background:bet_btn_blue
                                                            border:1px solid bet_btn_blue
                                                            color:#fff
                                                            &:hover
                                                                color:#fff
                                                        &:hover
                                                            color:bet_btn_blue
                                                            border-color:bet_btn_blue
                                            .right_choose
                                                ul
                                                    display:inline-block
                                                    font-size:0
                                                    li
                                                        display:inline-block
                                                        width:24px
                                                        height: 24px
                                                        text-align:center
                                                        line-height: 22px
                                                        border:1px solid #999
                                                        font-size:14px
                                                        margin-right:10px
                                                        border-radius:5px
                                                        cursor()
                                                        &.active
                                                            background-color:bet_btn_blue
                                                            border:1px solid bet_btn_blue
                                                            color:#fff
                                                            &:hover
                                                                color:#fff
                                                        &:hover
                                                            color:bet_btn_blue
                                                            border:1px solid bet_btn_blue
                                                    li:last-child
                                                        margin-right:0
                        .other_choose
                            font-size:14px
                            text-align:center
                            margin:20px 0 30px 0
                            color:#333
                            ul
                                display:inline-flex
                                align-items: center
                                margin:0 auto
                                .show_times
                                    margin-right:10px
                                    i
                                        display:inline-block
                                        padding:3px
                                .times_input
                                    display:flex
                                    justify-content:space-between
                                    align-items:center
                                    width: 96px
                                    height:20px
                                    border-radius: 5px
                                    border:1px solid #efefef
                                    background-color:#efefef
                                    margin-right:3px
                                    input
                                        width: 52px
                                        text-align :center
                                        height:20px
                                    button
                                        width: 22px
                                        height: 100%
                                        text-align:center
                                        line-height:18px
                                        color:#8b8b8a
                                        background-color:#efefef
                                        border:0
                                .bei
                                    margin-right:15px
                                .with_border
                                    span
                                        display:inline-block
                                        width: 28px
                                        height: 20px
                                        border:1px solid #d9d9d9
                                        line-height: 18px
                                        margin-right:3px
                                        border-radius:5px
                                        &.active
                                            background-color:bet_btn_blue
                                            border-color:bet_btn_blue
                                            color:#fff
                                .money
                                    padding:0 30px
                                    i
                                        display:inline-block
                                        padding:3px
                                .win_money
                                    display:flex
                                    align-items:center
                                    #snap
                                        width:100px
                                    span
                                        margin-right:3px
                                    .percent
                                        margin-left:5px
                                    input
                                        width:110px
                                        border:1px solid #d9d9d9
                                        text-align:center
                                        color:#ff4900
                        .num_basket
                            .left_basket
                                float:left
                                width:739px
                                height:188px
                                >div
                                    height:100%
                                    float:left
                                .left_bg1
                                    width:15px
                                    background:url(imgPath + 'left_bg1.png') center center no-repeat
                                .left_bg3
                                    width:21px
                                    background:url(imgPath + 'left_bg3.png') center center no-repeat
                                .left_bg2
                                    width:703px
                                    padding:10px 0
                                    background:url(imgPath + 'left_bg2.png') left center repeat
                                    table
                                        width: 100%
                                        margin-left:6px
                                        thead
                                            tr
                                                border-bottom:1px solid border_bottom_color
                                        tbody
                                            tr
                                                height:30px
                                    .empty_basket
                                        width:100%
                                        height:142px
                                        background:url(imgPath + "empty_basket.png") center center no-repeat
                            .btn_part
                                float:right
                                width:260px
                                ul
                                    font-size:0
                                    li
                                        display:inline-block
                                        width:120px
                                        height:42px
                                        line-height: 40px
                                        background-color:#fff
                                        border:1px solid border_bottom_color
                                        font-size:14px
                                        margin-bottom:10px
                                        radius(6px)
                                        cursor()
                                    .margin_right
                                        margin-right:10px
                                    .margin_left
                                        margin-left:10px
                                .confirm_bet
                                    display:flex
                                    align-items:center
                                    justify-content :center
                                    height: 52px
                                    line-height:52px
                                    background-color:bet_btn_middle_blue
                                    radius(6px)
                                    color:#f7f7f7
                                    cursor()
                                    .confirm_text
                                        font-size:24px
                                        margin-left:10px
                                .statistical
                                    margin-top:5px
            .second
                color:#999
                .li_bar
                    font-size:0
                    padding:10px
                    padding-bottom:0
                    li
                        display:inline-block
                        width:132px
                        height: 42px
                        line-height:42px
                        text-align:center
                        border:1px solid border_bottom_color
                        border-bottom:0
                        font-size:18px
                        border-top-left-radius:5px
                        border-top-right-radius:5px
                        &.active
                            background-color:#efefef
                            color:#333
                .tab_head
                    border:1px solid border_bottom_color
                    border-radius:10px
                    padding-bottom:13px
                    font-size:14px
                    color:#333
                    table
                        width:100%
                        tr
                            padding:0 8px
                        thead
                            tr
                                height:30px
                                line-height:30px
                                border-bottom:1px solid #efefef
                                background-color:#efefef
                                overflow:hidden
                                td
                                    font-weight:bold
                                    text-align:center
                        tbody
                            tr
                                height:27px
                                td
                                    text-align:center
                                    vertical-align:bottom
</style>
