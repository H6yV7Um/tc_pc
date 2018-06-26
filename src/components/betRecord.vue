<template>
    <div class="record_list">
        <ul class="li_bar">
            <li class="active">我的投注</li>
            <li>我的追号</li>
        </ul>
        <div class="tab_head">
            <table>
                <thead>
                <tr>
                    <td>游戏类别</td>
                    <td>投注期号</td>
                    <td>玩法类别</td>
                    <td>模式</td>
                    <td>金额</td>
                    <td>下单时间</td>
                    <td>奖金</td>
                    <td>状态</td>
                    <td class="function_btn">
                        <div class="refresh_data">
                            <span class="ctx">&#xe67d;</span>
                            <i>刷新</i>
                        </div>
                        <div class="show_more_data">
                            <span class="ctx">&#xe634;</span>
                            <i>更多</i>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="obj in orderlist">
                    <td>{{obj.lottery}}</td>
                    <td class="money_color">{{obj.issue}}</td>
                    <td>{{obj.method}}</td>
                    <td>{{obj.code}}</td>
                    <td>{{obj.winMoney}}</td>
                    <td>{{obj.orderTime | format('yyyy-MM-dd')}}</td>
                    <td>{{obj.nums}}元</td>
                    <td class="state">{{obj.statusRemark}}</td>
                    <td class="repeat">
                        <div class="active">再次投注{{obj.allowCancel}}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                orderlist:[]
            }
        },
        created () {
            let url = '/yx/u/api/game-lottery/search-order?status=0';
            this.$http.post(url
            ).then((response) => {
                let obj = response.body
                console.log(response.body)
                if (obj && (obj.code === 0)){
                    this.orderlist = obj.data.list;
                }
            });
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../css/stylus/index.styl"

    .record_list
        color:#999
        overflow:hidden
        display:flex
        clear:both
        margin:15px 0
        height:184px
        .li_bar
            flex-basis:40px
            font-size:0
            padding-bottom:0
            float:left
            cursor()
            li
                display:inline-block
                width:40px
                height: 90px
                line-height:18px
                text-align:center
                padding: 7px 8px
                border:1px solid border_bottom_color
                font-size:14px
                border-top-left-radius:5px
                border-bottom-left-radius:5px
                &.active
                    background-color:bet_deep_blue
                    color:#fff
                &:last-child
                    margin-top:-1px
        .tab_head
            flex-grow:1
            float:left
            border:1px solid #dcdddd
            height:179px
            font-size:12px
            border-top-right-radius:10px
            border-bottom-right-radius:10px
            color:#333
            margin-left:-1px
            box-shadow: 0 3px 10px #ddd
            table
                width:100%
                background-color:#fff
                tr
                    padding:0 8px
                thead
                    tr
                        height:30px
                        line-height:30px
                        border-bottom:1px solid #cadae5
                        background-color:#edf6fd
                        overflow:hidden
                        td
                            font-weight:bold
                            text-align:center
                            &.function_btn
                                color:bet_deep_blue
                                >div
                                    display:inline-block
                                    cursor()
                                .show_more_data
                                    margin-left:5px
                tbody
                    tr
                        height:27px
                        td
                            text-align:center
                            vertical-align:bottom
                        .repeat
                            div
                                display:inline-block
                                padding:0 8px
                                height: 16px
                                line-height:14px
                                background-color:disabled_color
                                radius(5px)
                                color:#fff
                                cursor()
                                &.active
                                    background-color:bet_btn_blue


</style>
