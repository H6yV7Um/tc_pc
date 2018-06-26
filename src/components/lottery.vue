<template>
  <div id="lottery" class="ltp">
    <div class="mainlottery">
      <span id="hashlid" style="display:none;">{{$route.hash}}</span>
      <span id="localtime" style="display:none;"></span>
      <div id="top-lt-list" style="display:none;"></div>
      <div class="openzoneholder"></div>
      <!-- 导航区域 -->
      <div class="lottery-navs">
        <ul style="display:none;"></ul>
        <div class="replacer" style="display:none;">
          <span>常玩彩种</span>
          <a class="nolink" rel="1" name="">显示</a>
        </div>
      </div>
      <!-- 选号区域 -->
      <div class="lottery-betting">
        <div class="lottery-betting-topborder"></div>
        <div class="lottert-topside clearfix">
          <div class="top-side">
            <!-- 开奖投注信息 -->
            <div class="lottery-open">
              <!-- 开奖信息 -->
              <div class="lottery-open-code">
                <div class="lt-audio">
                  <div class="switch audio-on"></div>
                </div>
                <div class="expect">【第 <span data-field="expect">00000000-000</span> 期】<br>开奖号码为&nbsp;&nbsp;</div>
                <div class="onlymobilecode"></div>
                <div class="codeholder">开奖中...</div>
                <div class="code ssc" data-field="code" >
                  <ul>
                    <li>0</li><li>0</li><li>0</li><li>0</li><li>0</li>
                  </ul>
                </div>
              </div>
              <!-- 投注信息 -->
              <div class="lottery-open-info">
                <div class="expect">
                  第 <span data-field="global-expect">00000000-000</span> 期截止时间还有
                </div>
                <div class="last-time"><span data-field="global-last-time" ></span></div>
              </div>
            </div>
            <a target="lottery-trend" class="lottery-code-trend">
              <i></i>近<br/>期<br/>走<br/>势
            </a>
          </div>
        </div>
        <div class="lottery-opearation">
          
        </div>
        <!-- 号码列表 -->
        <div class="lottery-record in-record">
          <div class="list-thead"><span>购彩篮</span></div>
          <div class="list-thead-sec"><span>玩法</span><span>号码</span><span>金额</span></div>
          <div class="list">
            <div class="scroller" data-handle-color="#aaa" data-handle-distance="2px">
              <table class="table">
                <tbody></tbody>
              </table>
            </div>
          </div>
          <div class="total"></div>
        </div>
        <!-- 按钮 -->
        <div class="lottery-onlybtns clearfix">
          <div class="button btnfire clearfix">
            <a class="btn" data-command="add"><em class="m_ico">&#58906;</em>添加号码</a>
            <a class="btn" data-command="clear"><!--<i class="clear"></i>--><em class="icon">&#xe624;</em>清空列表</a>
            <a class="btn" data-command="chase"><!--<i class="chase"></i>--><em class="icon">&#xe6c5;</em>我要追号<em class="help_stag">可提高中奖率</em></a>
            <a class="btn" data-command="plan"><!--<i class="plan"></i>-->合买跟单</a> 
            <!--<a class="btn" target="_blank" >我的投注</a>-->
            <a class="likebtn quicksoha"></a>
            <a class="btn ks_btn" data-command="quick"><em class="m_ico">&#59268;</em>快速投注</a>
            <a class="likebtn quicktouzhu" data-command="submit"></a>
            <a class="likebtn quickadd" data-command="add"></a>
            <div class="btn-big" data-command="submit">
              <div class="time">截止时间<span data-field="global-last-time">00:00:00</span></div>
              <div class="submit"><em class="icon">&#xe708;</em>立即投注</div>
            </div>
          </div>
          <div class="total"></div>
        </div>
      </div>
      
      <!-- 开奖列表信息 -->
      <div class="lottery-open-list transbg clearfix">
        <div class="arrow"></div>
        <div class="bigtitle" style="display:none">
          <span>&nbsp;历史开奖</span>
          <a class="nolink" rel="0" name="A">隐藏</a>
        </div>
        <div class="title" style="display:none">
          <div class="expect">期号</div>
          <div class="code">开奖号码</div>
          <div class="zutype">前三组态</div>
        </div>
        <div class="content clearfix" style="display:none">
          <div class="wrapper">
            <div class="scroller" data-handle-color="#93dbce" data-handle-distance="3px">
              <div class="list"></div>
            </div>
          </div>
        </div>
        <div class="replacer" style="display:none">
          <span>历史开奖</span>
          <a class="nolink" rel="1" name="A">显示</a>
        </div>
      </div>
      
			<!-- 投注记录开始 -->
			<div class="record-list">
				<div class="tabs">
					<a data-key="NotOpenOrder" class="long">未开奖订单</a><!--<em class="hand w-order-list" rel="显示列表|隐藏列表">显示/隐藏列表</em>-->
					<a data-key="HistoryOrder" class="first active">游戏记录</a>
					<a data-key="ChaseOrder">追号记录</a>
				</div>
				<div class="panels">
					<div data-content="NotOpenOrder" class="content hide">
						<div class="result">
							<table class="form-control">
								<thead>
									<tr>
										<td width="10%">订单号</td>
										<td>彩种/玩法</td>
										<td width="14%">期号</td>
										<td width="16%">下单时间</td>
										<td width="10%">投注金额</td>
										<td width="10%">奖金</td>
										<td width="8%">状态</td>
										<td width="8%">操作</td>
									</tr>
								</thead>
								<tbody><tr class="nodata"><td colspan="20">当前没有未开奖订单</td></tr></tbody>
							</table>
							<div class="page-list noselect"></div>
						</div>
					</div>
					<div data-content="HistoryOrder" class="content hide">
						<div class="result">
							<table class="form-control">
								<thead>
									<tr>
										<td width="10%">订单号</td>
										<td width="180">彩种/玩法</td>
										<td width="14%">期号</td>
										<td width="12%">下单时间</td>
										<td width="90">投注金额</td>
										<td width="90">奖金</td>
										<td width="8%">状态</td>
										<td width="8%">操作</td>
									</tr>
								</thead>
								<tbody><tr class="nodata"><td colspan="20">没有投注历史记录</td></tr></tbody>
							</table>
							<div class="page-list noselect"></div>
						</div>
					</div>
					<div data-content="ChaseOrder" class="content hide">
						<div class="result">
							<table class="form-control">
								<thead>
									<tr>
										<td width="10%">订单号</td>
										<td>彩种/玩法</td>
										<td width="14%">期号</td>
										<td width="16%">预计开奖时间</td>
										<td width="10%">投注金额</td>
										<td width="10%">奖金</td>
										<td width="8%">状态</td>
										<td width="8%">操作</td>
									</tr>
								</thead>
								<tbody><tr class="nodata"><td colspan="20">当前没有追号记录</td></tr></tbody>
							</table>
							<div class="page-list noselect"></div>
						</div>
					</div>
				</div>
			</div>
      <div class="botgap"></div>
			<!-- 投注记录结束 -->
      <!-- 余额 -->
      <div id="ltbalbox" class="leftbalance" @click="reBalance">账户余额：{{nowBalance}}</div>
      <!-- 单式做号【只单式显示】 -->
      <div class="lottery-zuo clearfix">
        <label>做号</label><a class="likebtn zuofire" @click="openzuo" data-command="zuo"><em class="m_ico">&#59167;</em>做号投注</a>
      </div>
    </div>
    <div class="submitbtn">
      <div class="dealcounter">当前已选<i class="totaldeal">0</i>注，倍数<i class="totaldealtime">x1</i>，共计<i class="totaldealamount">0.00</i>元，盈利<i class="totalgain">0.00</i>元</div>
      <div class="row no-gutter">
        <div class="col-15 clear" @click="cleanall"><a class="hand likebtn likebtn-white">清空</a></div>
        <div class="col-15 ticker"><a href="/basket/" class="link"><em class="m_ico">&#58975;</em></a></div>
        <div class="col-35 basket" id="addtobasket" rel="0" @click="qadd"><a ref="/basket/" class="link"><em class="m_ico">&#59003;</em>添加号码</a></div>
        <div class="col-35 quickdeal" @click="qdeal"><em class="m_ico">&#58999;</em>快速投注</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import Combinatorics from 'js-combinatorics';

export default {
  data () {
    return {
      name: '',
      ltname:'',
      pass:'',
      lid:'',
      captcha:'',
      mtopname:'',
      currentPage:1,
      pageSize:10,
      totalitem:0,
      nowBalance:0,
      backlink:'/',
      tabledata:[]
    }
  },
  components: {
    
  },
  computed: {
    ...mapGetters([
      //'nowBalance','getNumbers',
      //'nowNick'
    ])
  },
  watch: {
    '$route' (to, from) {
      console.log(to,from,appConfig().lotteryClsFile);
      this.initLotteryPage();
    }
  },
  mounted:function() {
    if (typeof Combinatorics !== 'undefined') {
      //f7.comb = Combinatorics;  
    }
    this.initLotteryPage();
    
  },
  methods:{
    ...mapActions([
      'setAmountOnly'
    ]),
    loadScript:function() {
      var scriptTag = document.createElement('script');
      scriptTag.src = scriptSrc;
      document.getElementsByTagName('head')[0].appendChild(scriptTag);  
    },
    initLotteryPage:function() {
      var t= this;
      jQuery.ajaxSetup({cache: true});
      var lid = parseInt(String(t.$route.hash).replace('#',''),10);
      $('#hashlid').html(lid);
      var beforeload = appConfig().distpath+'lottery.ssc.js';
      var clstag = 'ssc';
      var lotteryClsFile = appConfig().lotteryClsFile;
      //console.log(LtClsLibs,'LtClsLibsLtClsLibsLtClsLibsLtClsLibsLtClsLibs');
      
      if ($.inArray(lid,appConfig().ltgroups['ssc'])>-1) {
        beforeload = appConfig().distpath+'lottery.ssc.js';  
      }
      $.inArray(lid,appConfig().ltgroups['pk10'])>-1 ? (beforeload = appConfig().distpath+'lottery.pk10.js',clstag = 'pk10') : true;
      $.inArray(lid,appConfig().ltgroups['11y'])>-1 ? (beforeload = appConfig().distpath+'lottery.11x5.js',clstag = '11x5') : true; 
      $.inArray(lid,appConfig().ltgroups['3d'])>-1 ? (beforeload = appConfig().distpath+'lottery.3d.js',clstag = '3d') : true; 
      $.inArray(lid,appConfig().ltgroups['k3'])>-1 ? (beforeload = appConfig().distpath+'lottery.k3.js',clstag = 'k3') : true; 
      t.lid = lid;
      $('#lottery #topltname').attr('rel',lid);
      //console.log(clstag,LtClsLibs[clstag]);
      if (typeof LtClsLibs[clstag] =='undefined') {
        t.loadsc(beforeload,function() {
          LtClsLibs[clstag]={'utils':null,'main':null};
          LtClsLibs[clstag].utils = LotteryUtils;
          LtClsLibs[clstag].main = LotteryMain;
          if (typeof BasketLtChoose =='undefined') {
            AppData.init(undefined,function() {
              typeof initPartOne !='undefined' ? initPartOne() : !0;
              typeof init_two !='undefined' ? init_two() : !0;
              typeof init_one !='undefined' ? init_one() : !0;
              typeof init_three !='undefined' ? init_three() : !0; 
            });
          }else {
            AppData.init(undefined,function() {
              typeof initPartOne_Sec !='undefined' ? initPartOne_Sec() : !0;
              typeof init_two !='undefined' ? init_two() : !0;
              typeof init_one !='undefined' ? init_one() : !0;
              typeof init_three !='undefined' ? init_three() : !0;  
            });
          }
        });  
      }else {
        LotteryUtils = LtClsLibs[clstag].utils;
        LotteryMain = LtClsLibs[clstag].main;
        if (typeof AppDataInitData =='undefined') {
          AppData.init(undefined,function() {
            typeof initPartOne_Sec !='undefined' ? initPartOne_Sec() : !0;
            typeof init_two !='undefined' ? init_two() : !0;
            typeof init_one !='undefined' ? init_one() : !0;
            typeof init_three !='undefined' ? init_three() : !0;  
          });  
        }else {
          typeof initPartOne_Sec !='undefined' ? initPartOne_Sec() : !0;
          typeof init_two !='undefined' ? init_two() : !0;
          typeof init_one !='undefined' ? init_one() : !0;
          typeof init_three !='undefined' ? init_three() : !0;    
        }
      }  
    },
    reBalance:function() {
      var t= this;
    },
    openzuo:function() {
      //f7.popup('#zuomainbox');  
    },
    loadsc:function(url,callback) {
      var script = document.createElement("script")
      script.type = "text/javascript";
      if (script.readyState){//IE
        script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
          }
        };
      }else{//Others
        script.onload = function(){
          callback();
        };
      }
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    todate:function(s) {
      Date.prototype.Format = function(fmt){ //author: meizz "yyyy-MM-dd hh:mm:ss.S"
        var o = {
          "M+" : this.getMonth()+1,                 //月份
          "d+" : this.getDate(),                    //日
          "h+" : this.getHours(),                   //小时
          "m+" : this.getMinutes(),                 //分
          "s+" : this.getSeconds(),                 //秒
          "q+" : Math.floor((this.getMonth()+3)/3), //季度
          "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
          if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
      }
      var date = new Date(s);
	    var time = date.Format('yyyy-MM-dd hh:mm:ss');
      return time;  
    },
    expnums:function(e) {
      var t = this;
      if (typeof jQuery(".openzone").attr('opened') =='undefined') {
        jQuery(".openzone").animate({height:"210px"});
        jQuery(".openzoneholder").animate({height:"210px"});
        jQuery(".openzone").attr('opened',1);
        jQuery(".inline-numtable").show();
      }else {
        jQuery(".openzoneholder").animate({height:"33px"});
        jQuery(".openzone").animate({height:"33px"},'fast',function() {
          jQuery(".inline-numtable").hide();jQuery(".openzone").removeAttr('opened');  
        });
      }
    },
    cleanall:function() {
      //this.Dom7('.lottery-record [data-command="clear"]').click();
      //this.Dom7('.lottery-opearation .play-area [data-command="clean"]').click();
    },
    notready:function() {
      //f7.alert('暂未开通', '提示：');
    },
    qdeal:function() {
      //this.Dom7('.ltp [data-command="submit"]').trigger('click');
    },
    qadd:function() {
      //this.Dom7('.ltp [data-command="add"]').trigger('click');
    }
  }
}
</script>

<style>
  @import "../css/stylus/lottery.styl";
</style>