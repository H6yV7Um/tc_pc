<template>
  <div id="trend">
    <h4 class="clearfix">香港六合彩</h4>
    <div class="trend_filter clearfix" style="display:none;">
      <ul class="clearfix">
        <li class="now"><a class="qchoose_days">近30期</a></li>
        <li><a class="qchoose_days">近50期</a></li>
        <li><a class="qchoose_days qchoose_today">今日数据</a></li>
        <li><a class="qchoose_days">近2天</a></li>
        <li><a class="qchoose_days">近5天</a></li>
        <li class="qchoose_pick" style="display:none;"><datepicker placeholder="选择开始日期" :language="lan" format="yyyy-MM-dd" v-model="start"></datepicker></li>
        <li style="display:none;">至</li>
        <li class="qchoose_pick" style="display:none;"><datepicker placeholder="选择结束日期" :language="lan" format="yyyy-MM-dd" v-model="end"></datepicker></li>
        <li><a href="#" class="bigsearch">搜索</a></li>
      </ul>
    </div>
    <div class="clearfix">
      <ul class="trend_items">
        <li class="trend_lititle clearfix"><span>期号</span><span>开奖时间</span><span class="longcol"><em class="first">正1</em><em>正2</em><em>正3</em><em>正4</em><em>正5</em><em>正6</em><em>特码</em></span><span class="last">特码</span><span class="last hezhi">和值</span></li>
        <li class="trend_liitem clearfix" style="display:none;">
          <span>18032</span>
          <span>2018-03-29 21:30:00</span>
          <span class="longcol">
            <ol class="lhcopen"><li class="lhchball ">24</li><li class="lhchball ">34</li><li class="lhchball ">45</li><li class="lhclvball ">06</li><li class="lhchball ">40</li><li class="lhclball lhcbelst">10</li><li class="lhclball lhclst">09</li></ol>
          </span>
          <span class="last"><em>大</em><em>单</em><em>降</em></span>
          <span class="last hezhi"><em>大</em><em>双</em><em>升</em><em>199</em></span>
        </li>
        <li class="trend_liitem clearfix" v-for="(item, index) in codelist">
          <span>{{item.issue}}</span>
          <span>{{item.time}}</span>
          <span class="longcol">
            <ol class="lhcopen" v-html="item.number"><li class="lhchball ">24</li><li class="lhchball ">34</li><li class="lhchball ">45</li><li class="lhclvball ">06</li><li class="lhchball ">40</li><li class="lhclball lhcbelst">10</li><li class="lhclball lhclst">09</li></ol>
          </span>
          <span class="last" v-html="item.tema"><em>大</em><em>单</em><em>降</em></span>
          <span class="last hezhi" v-html="item.hezhi"><em>大</em><em>双</em><em>升</em><em>199</em></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import base from '../js/pubilc.js';
  import {noticeInit} from '../js/index.js'
  import Datepicker from 'vuejs-datepicker';

    export default {
        name: 'index',
        data() {
            return {
              lan:'zh',start:'',end:'',
              alldata:'',codelist:[],issuetime:{},
              ballcolors:{
                'hong':[29, 30, 34, 35, 40, 45, 46, 1, 2, 7, 8, 12, 13, 18, 19, 23, 24],
                'lv':[27, 28, 32, 33, 38, 39, 43, 44, 5, 6, 11, 16, 17, 21, 22, 49],
                'lan':[25, 26, 31, 36, 37, 41, 42, 47, 48, 3, 4, 9, 10, 14, 15, 20]
              }
            }
        },
        components: {
          Datepicker
        },
        computed: {
            
        },
        methods: {
          // 获取彩种列表
          getTrendData() {
            let that = this;
            this.$http.get('/yx/u/api/game-lottery/openIssues?id=250&issueCount=100'
            ).then((response) => {
              let obj = response.body.data;
              //console.log(obj);
              that.alldata = obj.split(',')
              for (var i = 0; i < that.alldata.length; i++) {
                var thisnum = String(that.alldata[i]).split('|');
                var prevnum = [null,''];
                //console.log(that.alldata[i+1]);
                if (typeof that.alldata[i+1] !='undefined') {
                  prevnum = String(that.alldata[i+1]).split('|');  
                }
                that.codelist.push({
                  'issue':thisnum[0],
                  'number':that.joinhtmlstr(thisnum[1]),
                  'tema':that.temaformat(thisnum[1],prevnum[1]),
                  'time':that.issuetime[thisnum[0]],
                  'hezhi':that.hezhiformat(thisnum[1],prevnum[1])
                })    
              }
              //console.log(that.alldata,'alldataalldata');
            });
          },
          getTrendIssus:function(callback) {
            let that = this;
            function time(s) {
                return new Date(s * 1e3);//.toLocaleString();
            }

            this.$http.get('/yx/u/api/game-lottery/static-open-code?name=LHECXJW'
            ).then((response) => {
              let issues = response.body;
              //console.log(issues);
              for (var i = 0; i < issues.length; i++) {
                that.issuetime[issues[i].issue] = base.formatDate(time(issues[i].time), 'yyyy-MM-dd hh:mm:ss');
                //console.log(base.formatDate(time(issues[i].time), 'yyyy/MM/dd hh:mm:ss'));
              }
              //console.log(that.issuetime);
              if (typeof callback =='function') {
                callback(issues); 
              }
            });
          },
          cklhc:function(no) {
            var _t = this;
            var colorcls = '';
            //console.log(_.indexOf(_t.ballbanbo['hong'],parseInt(no,10)),parseInt(no,10));
            if (_.indexOf(_t.ballcolors['hong'],parseInt(no,10))>-1) {
              colorcls = 'lhchball';  
            }
            if (_.indexOf(_t.ballcolors['lv'],parseInt(no,10))>-1) {
              colorcls = 'lhclvball';  
            }
            if (_.indexOf(_t.ballcolors['lan'],parseInt(no,10))>-1) {
              colorcls = 'lhclball';  
            }
            return colorcls
          },
          temaformat:function(str,prev) {
            var lastcode = str.match(/(\d\d)(\b)/g);
            var plastcode = prev.match(/(\d\d)(\b)/g);
            //console.log(lastcode,plastcode);
            var lastnum = '',plastnum = '';
            var daxiaof = '大';
            var dansf = '单';
            var sjiangf = '-';
            //console.log(lastcode);
            if (lastcode.length>0) {
              lastnum = lastcode[0];  
            }
            if (plastcode!=null && plastcode.length>0) {
              plastnum = plastcode[0];  
            }
            if (parseInt(lastnum,10)<25) {
              daxiaof = '小';  
            }
            if(parseInt(lastnum,10) % 2 == 0){
              dansf = '双';
            }
            if(parseInt(plastnum,10)>parseInt(lastnum,10)){
              sjiangf = '降';
            }
            if(parseInt(plastnum,10)<parseInt(lastnum,10)){
              sjiangf = '升';
            }
            if(parseInt(plastnum,10)==parseInt(lastnum,10)){
              sjiangf = '平';
            }
            //console.log(plastnum,lastnum);
            return '<em>'+daxiaof+'</em><em>'+dansf+'</em><em>'+sjiangf+'</em>';
          },
          hezhiformat:function(str,prev) {
            var lastcode = String(str.replace(/(\d\d)(?!\b)/g,'$1,')).split(',');
            var plastcode = String(prev.replace(/(\d\d)(?!\b)/g,'$1,')).split(',');
            var lastnum = '',plastnum = '';
            const sum = (...arr) => [].concat(...arr).reduce((acc, val) => parseInt(acc,10) + parseInt(val,10), 0);
            var daxiaof = '大';
            var dansf = '单';
            var sjiangf = '-';
            var hezhif = sum(lastcode);
            var phezhif = sum(plastcode);
            //var allhenow = eval(lastcode);
            //var pallhenow = eval(plastcode);
            if (parseInt(hezhif,10)<164) {
              daxiaof = '小';  
            }
            if(parseInt(hezhif,10) % 2 == 0){
              dansf = '双';
            }
            
            if(parseInt(hezhif,10)<parseInt(phezhif,10)){
              sjiangf = '降';
            }
            if(parseInt(hezhif,10)>parseInt(phezhif,10)){
              sjiangf = '升';
            }
            if(parseInt(hezhif,10)==parseInt(phezhif,10)){
              sjiangf = '平';
            }
            //console.log(sum(lastcode),sum(plastcode));
            return '<em>'+daxiaof+'</em><em>'+dansf+'</em><em>'+sjiangf+'</em><em>'+hezhif+'</em>';
          },
          joinhtmlstr:function(str) {
            //console.log(str);
            str = str.replace(/(\d\d)(?!\b)/g,'$1,');
            str = str.split(',')
            //console.log(str,'endddd');
            var allout = [];
            var _t = this;
            var lstcls = '';
            for (var i = 0; i < str.length; i++) {
              if (i==str.length-1) {
                lstcls = ' lhclst'
              }
              allout.push('<li class="'+_t.cklhc(str[i])+lstcls+'">'+str[i]+'</li>')  
            }
            return allout.join(''); 
            //return '<em>'+str.join('</em><em>')+'</em>'  
          }
        },
        beforeCreate() {
          //init.init(this);
        },
        created() {
            
        },
        updated() {
            
        },
        mounted() {
          var t = this;
          this.showIndex = this.$route.params.pageId;
          this.getTrendIssus(function(s) {
            t.getTrendData();  
          });
          
        }
    }

</script>

<style>
  #trend{
    width:1200px;
    margin:10px auto;
  }
  #trend h4{
    line-height:45px;
    text-align:left;
    font-size:18px;
    padding: 2px 0px 10px 0px;
  }
  #trend .trend_filter{
    height:43px;
    margin-bottom:10px;
  }
  
  #trend .trend_filter li{
    float:left;
    line-height:43px;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }

  #trend .trend_filter a{
    display:block;
    padding:0px 10px;
    color:#fff;
    background-color: #d09ca0;
  }

  #trend .trend_filter li.now a,#trend .trend_filter li:hover a{
    background-color: #ff6a76;
  }

  #trend .qchoose_pick{
    border: 1px solid #C6C6CC;
  }

  #trend .qchoose_pick input{
    padding-left:10px;
  }
  
  #trend .bigsearch{
    box-shadow: 0 1px 2px 1px #0000002b;
    border-radius: 8px;
    background-image: linear-gradient(180deg, #12daac 0%, #0ccc9d 50%, #08c195 100%);
    width: 100px;
    font-size: 16px;
    color:#fff;
  }

  #trend .trend_lititle span{
    display: inline-block;
    height: 25px;
    float: left;
    line-height: 25px;
    width: 15%;
    background-color: #ff6a76;
    color: #fff;
    border-right: 1px solid #fff;
  }
  
  #trend .trend_liitem span{
    display: inline-block;
    height: 85px;
    float: left;
    line-height: 85px;
    width: 15%;
    background-color: #fff;
    color: #333;
    border-right: 1px solid #ccc;
  }
  #trend .trend_items{
    border: 1px solid #ccc;
  }
  #trend .trend_liitem span.last,#trend .trend_lititle span.last{
    width: 10%;
  }

  #trend .trend_liitem span.hezhi,#trend .trend_lititle span.hezhi{
    width: 11%;
    border-right: 0px;
  }

  #trend .trend_lititle span.longcol{
    width: 49%;
  }
  #trend .trend_liitem span.longcol{
    width: 49%;
  }

  #trend .trend_lititle span.longcol em{
    display:inline-block;
    float:left;
    width:66px;
  }

  #trend .trend_lititle span.longcol em.first{
    margin-left:14px;
  }

  #trend .trend_liitem .lhcopen{
    float:left;
    margin: 17px 0px 0px 17px;
  }
  #trend .trend_liitem .lhcopen > li{
    width: 48px;
    height: 48px;
    font-size: 22px;
    line-height: 42px;
    margin: 0 4px;
    border-radius: 24px;
    color: #333;
    background-image: none;
    box-shadow: 0 0 30px red, inset 0 0 10px red;
    border: 2px solid #ffffff;
    background-image: -webkit-linear-gradient(-30deg,rgba(244, 79, 41, 0.15),rgba(196, 0, 0, 0.19));
    margin-right:15px;
    float:left;
  }

  #trend .trend_liitem .lhcopen > li:after{
    content:'+';
    display:inline-block;
    width:24px;
    height:24px;
    position: absolute;
    margin-left: 6px;
  }

  #trend .trend_liitem .lhcopen > li.lhclvball{
    box-shadow: 0 0 30px #22d319, inset 0 0 10px #22d319;
    border: 2px solid #fff;
    background-image: -webkit-linear-gradient(-30deg,rgba(42, 187, 34, 0.24),#2abb22);
  }
  #trend .trend_liitem .lhcopen > li.lhclball{
    box-shadow: 0 0 30px #3cafe5, inset 0 0 10px #3cafe5;
    background-image: -webkit-linear-gradient(-30deg,rgba(60, 175, 229, 0.18),#5b9bfc);
    border: 2px solid #fff;
  }

  #trend .trend_liitem .lhcopen > li.lhclst{
    box-shadow: 0 0 30px #f4f22f, inset 0 0 10px #f4f22f;
    border: 2px solid #dfdd37;
    background-image: -webkit-linear-gradient(-30deg,#fdfb44,#85841d);
    color:#fff;
  }
  #trend .trend_liitem .lhcopen > li.lhcbelst:after{
    content:'=';
  }
  #trend .trend_liitem .lhcopen > li.lhclst:after{
    display:none;
  }

</style>
