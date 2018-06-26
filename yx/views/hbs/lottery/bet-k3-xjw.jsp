<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!doctype html>
<head>
	<meta charset="utf-8"/>
	<title>彩票游戏</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
  <link rel="shortcut icon" href="/dist/favicon.ico" type="image/x-icon">

	<!-- 引用样式文件开始 -->
  <link media="all" type="text/css" rel="stylesheet" href="/static/v3/css/zui.css" />
  <link media="all" type="text/css" rel="stylesheet" href="/static/v3/css/login.css" />

  <link rel="stylesheet" type="text/css" href="/static/v3/css/jquery.plugins.css" >
  <link rel="stylesheet" type="text/css" href="/static/v3/css/jquery.easyweb.css" >
  <link rel="stylesheet" type="text/css" href="/static/v3/css/reset.css" >
  <link rel="stylesheet" type="text/css" href="/static/v3/css/common.css" >
  <link rel="stylesheet" type="text/css" href="/static/v3/css/lottery.css" >
  <link rel="stylesheet" type="text/css" href="/static/v3/css/animate.min.css" >
  <link rel="stylesheet" type="text/css" href="/static/v3/css/dialog.css">
  <link rel="stylesheet" type="text/css" href="/static/v3/css/topctx.css">
  <link rel="stylesheet" type="text/css" href="/static/v3/css/main_gray.css">
  <link rel="stylesheet" type="text/css" href="/static/v3/css/main_addon.css">
	<!-- 引用脚本文件开始-->
  <script>var ry_lottery_config = {assets: '/public/timages/{0}',currency: '￥',locale: 'zh_cn',officalDomain: '/index.php'};</script>
  <script type="text/javascript" src="/static/v3/js/core.js"></script>
  <script type="text/javascript" src="/static/v3/js/jquery.plugins.js"></script>
  <script type="text/javascript" src="/static/v3/js/socket.io.js"></script>
  <script type="text/javascript" src="/static/v3/js/lodash.min.js"></script>
  <script type="text/javascript" src="/static/v3/js/zui.js"></script>
  <script type="text/javascript" src="/static/v3/js/app.js"></script>
  <script type="text/javascript" src="/static/v3/js/api.js?v=14b"></script>
  <script type="text/javascript" src="/static/v3/js/lz-string.min.js"></script>
  <script type="text/javascript" src="/static/v3/js/game/lottery.utils.js" ></script>
  <script type="text/javascript" src="/static/v3/js/game/lottery.ssc.js" ></script>
  <script type="text/javascript" src="/static/v3/js/game/lottery.chase.js" ></script>
  <script type="text/javascript" src="/static/v3/js/game/lottery.record.js" ></script>
  <script type="text/javascript" src="/static/v3/js/game/lottery.global.js"></script>
  <script type="text/javascript" src="/static/v3/js/game/lottery.init.js" ></script>
  <script type="text/javascript" src="/static/v3/js/platform-lottery.js" ></script>
  <script type="text/javascript" src="/config.js"></script>
  <script type="text/javascript" src="/static/v3/js/common-all-pankou.js"></script>
  <script type="text/javascript" src="/static/v3/js/common-lottery.js" ></script>
  <script type="text/javascript" src="/static/v3/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/static/v3/js/combinatorics.js"></script>
  <script type="text/javascript" src="/static/v3/js/bootstrap-dialog.js" ></script>
  <script type="text/javascript" src="/static/v3/js/resetpos.js" ></script>
  <script type="text/javascript" src="/static/v3/js/lzma.js"></script>
  <script src="/public/tjs/main.js"></script>
  <script>
    var ctx = "/yx",keyWords = 'hbs';
    var goParentGo = function() {
      $('[data-command="submit"]').click();
    }
    var changeModel = function(n) {
      $('.play-options a:eq('+n+')').click();
    }
    var addTimes = function() {
      $('.multiple span:first').click();
    }
    var minusTimes = function() {
      $('.multiple span:last').click();
    }
    var loadjscallback = function(url,callback) {
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
    }
    var loadScript = function(scriptSrc){
      var scriptTag = document.createElement('script');
      scriptTag.src = scriptSrc;
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
    $(window).on('hashchange', function() {
      if ($('#top-lt-list:visible').size()>0) {
        $('#top-lt-list:visible').hide();
      }
      var nowltid = parseInt(window.location.hash.replace('#',''),10);
      $('.lottery-navs ul li').removeClass('on');
      $('.lottery-navs ul li.mylt_'+nowltid).addClass('on');
      //$('.lottery-navs ul').removeData('loading');
      getLeftOnlySec();
      var ltgroups={
        'ssc':[11,18,15,16,19,9,42],
        'pk10':[43,204],
        '11y':[24,21,23,22,26,28],
        '3d':[41],
        'k3':[33,35,36,31,32],
        'kl8':[7,8]
      };
      var beforeload = '/static/v3/js/game/lottery.ssc.js';
      if ($.inArray(nowltid,ltgroups['ssc'])>-1) {
        beforeload = '/static/v3/js/game/lottery.ssc.js';
      }
      $.inArray(nowltid,ltgroups['pk10'])>-1 ? beforeload = '/static/v3/js/game/lottery.pk10.js' : true;
      $.inArray(nowltid,ltgroups['11y'])>-1 ? beforeload = '/static/v3/js/game/lottery.11x5.js' : true;
      $.inArray(nowltid,ltgroups['3d'])>-1 ? beforeload = '/static/v3/js/game/lottery.3d.js' : true;
      $.inArray(nowltid,ltgroups['k3'])>-1 ? beforeload = '/static/v3/js/game/lottery.k3.js' : true;
      $.inArray(nowltid,ltgroups['kl8'])>-1 ? beforeload = '/static/v3/js/game/lottery.kl8.js' : true;
      if (typeof LotteryScript[beforeload] =='undefined') {
        LotteryUtils=null,LotteryMain=null;
        loadjscallback(beforeload,function(){
          LotteryScript[beforeload]={'LotteryUtils':LotteryUtils,'LotteryMain':LotteryMain};
          GameData.init(nowltid,function(a,b) {
            ininLtPage(a,b,1);
            setLogo();multipleControls();
            setTimeout(function() {
              $('#top-lt-list').removeAttr('style');
            },800)
          });
        });
      }else {
        LotteryUtils=LotteryScript[beforeload].LotteryUtils,LotteryMain=LotteryScript[beforeload].LotteryMain;
        GameData.init(nowltid,function(a,b) {
          ininLtPage(a,b,1);
          setLogo();multipleControls();
          setTimeout(function() {
            $('#top-lt-list').removeAttr('style');
          },800)
        });
      }
    })
  </script>
  <!-- 引用脚本文件结束-->
</head>
<body class="lottery_main">
	<div class="bar pageHeader">
    <div class="a a87 holder"></div>
    <div class="a a86 holder"></div>
    <!-- 投注顶部导航栏 开始 -->


		<div class="a a86">
			<div class="b b1"  data-ajax-trigger="global" data-init="topBar">
				<div class="c c14 give-me-space">
					<!-- <a class="hand goback" href="/yx/home"><em class="icon">&#xe6bc;</em>首页</a> -->
          <a class="hand goback" href="http://agent.tc508.com/" target="_blank"><img src="/dist/enter.gif" alt="" width="" height=""></a>

		      <div class="c c12" id ='localtime'></div>
		    </div>
				<a class="c c7 link" data-command="logout" style="background:#eeeeee;color:#333;">登出</a>
				<a class="c c8 c7a link" href="/userAccount#page=1_finance">提款</a>
				<a class="c c7 link" href="/userAccount#page=0_finance" target="_blank">充值</a>
		    <span class="brk brk_r"></span>
				<div class="c c4 moneylist link">
					<div class='balances'>
						<div  title="设为默认"  class="lotteryBalance">&nbsp;&nbsp;余额：¥ <span class='data' data-field="lotteryBalance" style="color:#ff7a74;">0.000</span><em style="float:right;margin-right:8px;" class="m_icosea manual_hide">隐藏</em></div>
					</div>
					<div class='outter'></div>
					<!--<i class="arrow-bottom"></i> -->
					<div  title="设为默认" class="money">
						<div class='inner'></div>
					</div>
				</div>
		    <span class="brk brk_r"></span>
		    <a class="c cc link" href="/userMessage#page=0_message"><em class="icon">&#xe68e;</em> 消息 <span style="display:none;" id="systeMsg" class="brk_rSpan">1</span></a>
		    <span class="brk brk_r"></span>
		    <a class="c cc link" href="/game-notice/0"><em class="icon">&#xe6ac;</em>公告 <span style="display:none;" id="noticeMsg" class="brk_rSpan">1</span> </a>
				<!-- <div class="menu-drop dropdown dropdown-hover" id="agent-top-nav">
		      <a class="hand ltmenu-top" data-toggle="dropdown">代理中心 <span class="caret"></span></a>
		      <div id="top-agent-menu" class="dropdown-menu">
		        <div class="top-agent-menu-inside clearfix">
		          <em class="m_ico">&#59187;</em>
		          <ul>
		            <li><a href="/yx/hbs/manager-account.html#page=6_proxy" target="_self">团队报表</a></li>
		            <li><a href="/yx/hbs/manager-account.html#page=4_report" target="_self">个人报表</a></li>
		            <li><a href="/yx/hbs/manager-account.html#page=3_proxy" target="_self">游戏记录</a></li>
		            <li><a href="/yx/hbs/manager-account.html#page=2_proxy" target="_self">会员管理</a></li>
		            <li><a href="/yx/hbs/manager-account.html#page=1_proxy" target="_self">开户中心</a></li>
		            <li><a href="/yx/hbs/manager-account.html#page=1_proxy" target="_self">链接开户</a></li>
		          </ul>
		        </div>
		      </div>
		    </div> -->
		    <a class="c c11 link" id="center-btn" href="/yx/hbs/manager-account.html#page=0_account" target="_self">个人中心</a>
				<div class="menu-drop dropdown dropdown-hover">
		      <span class="thumb_icon"></span><a class="hand ltmenu-top" data-toggle="dropdown"><span style="display:none;" data-field="greeting"></span><em class="icon" style="color:#f5e301">&#xe600;</em>  <span data-field="username" style="color:#e97206">获取中...</span> <span class="m_ico" style="display:none">&#58955;</span></a>
		      <div id="top-usr-menu" class="dropdown-menu">
		        <div class="top-usr-menu-inside clearfix">
		          <em class="m_ico">&#59187;</em>
		          <div class="clscols clearfix">
								<ul>
			            <li><a href="/userCenter" target="_self">个人中心</a></li>
			            <li><a href="/userAccount#page=0_finance" target="_self">财务中心</a></li>
			            <li><a href="/userReport#page=0_report" target="_self">订单报表</a></li>
			            <li><a href="/playDetails#0" target="_self">玩法介绍</a></li>
			          </ul>
		          </div>

		        </div>
		      </div>
		    </div>
				<a class="c c9 link"  href="/yx/hbs/manager-account.html#page=2_finance">转账</a>
				<a class="c c10 link"  href="/yx/hbs/aboutus.html">公告</a>
				<a href="/qiandao" id="qiandao_gm" class="get_money c cc" style="margin-top:2px;margin-right:-20px;display:none;"><img height="35" src="/dist/getm.gif"></a>
		    <!-- 对话框HTML -->
			</div>


		</div>
		<div class="sec_part" >
			<div class="sec_wrapper">
			<div class="logo">
				<a href="/index" class="logo_bg"></a>
			</div>

			<div class="ul_right">

				<ul class="ul_right_ul">
					<li class="index ul_right_ulLi">
						<a class="ul_right_ulLia" href="/index">
							<span class="icon">&#xe6be;</span>
							<p>首页</p>
						</a>
					</li>
					<li class="contain_a active ul_right_ulLi">
						<div class="dropdown dropdown-hover" style="-display:none;margin-top:5px;">
							<a class="hand ltmenu-top allgame-top" data-toggle="dropdown"><em class="icon">&#xe64d;</em>彩票中心 </a>
						  <div id="top-lt-list" class="dropdown-menu downList drop_down_list" >
								<div class="drop_down_arrow"></div>
								<div class="drop_down_content">
									<div class="downlist_top">
										<span class="official on">官方</span>
										<span class="classical">经典</span>
									</div>
									<div class="dotted_line"></div>
									<div class="official_lottery">

                                    </div>
                                    <div class="classic_lottery" style="display:none">

                                    </div>
								</div>
							</div>
						</div>
						<!-- <a>
							<span class="icon">&#xe943;</span>
							<p>彩票中心</p>
							<span class="icon">&#xe943;</span>
						</a> -->
					</li>
					<li class="lottery_link ul_right_ulLi">
						<a class="ul_right_ulLia lottery-code-trend" >
							<span class="icon">&#xe69e;</span>
							<p>走势图表</p>
						</a>
					</li>
					<li class="ul_right_ulLi">
						<a href="javascript:alert('敬请期待');" class="ul_right_ulLia">
							<span class="icon">&#xe6a6;</span>
							<p>跟单大厅</p>
						</a>
					</li>
					<li class="ul_right_ulLi">
						<a href="javascript:alert('敬请期待');" class="ul_right_ulLia">
							<span class="icon">&#xe6b3;</span>
							<p>积分商城</p>
						</a>
					</li>
					<li class="ul_right_ulLi">
						<a class="ul_right_ulLia" href="/activity/0">
							<span class="icon">&#xe693;</span>
							<p>优惠活动</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		</div>
    <!-- 投注顶部导航栏 结束 -->
    <script type="text/javascript" src="/static/v3/js/bar.js"></script>
 	</div>
	<!-- 顶部预留位置开始 -->
	<div class="clear-header"></div>
	<!-- 顶部预留位置结束 -->
	<!-- 中间部分开始 -->
	<div class="page-content noselect default-cursor clearfix">
		<div class="page-topgap" style="height:70px;">&nbsp;</div>
    <div class="page-container clearfix">
			<!-- 彩种导航开始 -->
			<div class="lottery-nav">
				<div class="menu">
					<div class="title"><span>重庆时时彩</span><i class="arrow down"></i></div>
					<div class="list" id="allopenlt">
						<div class="line"></div>
						<div class="category">
							<div class="logo u9"></div>
							<div class="items zyc">
								<a href="/yx/hbs/lottery/12.html" data-name="zyffc">胜利分分彩</a>
								<a href="/yx/hbs/lottery/13.html" data-name="zy5fc">胜利5分彩</a>
								<a href="/yx/hbs/lottery/21.html" data-name="zy11y">胜利11选5</a>
							</div>
						</div>
						<div class="line"></div>
						<div class="category">
							<div class="logo ssc"></div>
							<div class="items sscls">
								<a href="/yx/hbs/lottery/19.html" data-name="hgssc">韩国1.5分彩</a>
								<a href="/yx/hbs/lottery/11.html" data-name="cqssc">重庆时时彩</a>
								<a href="/yx/hbs/lottery/15.html" data-name="xjssc">新疆时时彩</a>
								<a href="/yx/hbs/lottery/16.html" data-name="tjssc">天津时时彩</a>
								<a href="/yx/hbs/lottery/5.html" data-name="xjpssc">新加坡2分彩</a>
								<a href="/yx/hbs/lottery/6.html" data-name="djssc">东京1.5分彩</a>
								<a href="/yx/hbs/lottery/7.html" data-name="bjkl8ssc">北京快乐8</a>
								<a href="/yx/hbs/lottery/8.html" data-name="twssc">台湾宾果</a>
								<a href="/yx/hbs/lottery/9.html" data-name="txssc">腾讯分分彩</a>
							</div>
						</div>
						<div class="line"></div>
						<div class="category">
							<div class="logo x511"></div>
							<div class="items eleveny">
								<a href="/yx/hbs/lottery/24.html" data-name="gd11y">广东11选5</a>
								<a href="/yx/hbs/lottery/23.html" data-name="jx11y">江西11选5</a>
								<a href="/yx/hbs/lottery/28.html" data-name="js11y">江苏11选5</a>
								<a href="/yx/hbs/lottery/22.html" data-name="sd11y">山东11选5</a>
								<a href="/yx/hbs/lottery/25.html" data-name="ln11y">辽宁11选5</a>
								<a href="/yx/hbs/lottery/27.html" data-name="hk11y">越南11选5</a>
								<a href="/yx/hbs/lottery/26.html" data-name="sh11y">上海11选5</a>
							</div>
						</div>
						<div class="line"></div>
						<div class="category">
							<div class="logo k3"></div>
							<div class="items kuaicls">
								<a href="/yx/hbs/lottery/31.html" data-name="jsk3">江苏快3</a>
								<a href="/yx/hbs/lottery/32.html" data-name="jlk3">吉林快3</a>
								<a href="/yx/hbs/lottery/33.html" data-name="ahk3">安徽快3</a>
								<a href="/yx/hbs/lottery/34.html" data-name="gxk3">广西快3</a>
								<a href="/yx/hbs/lottery/35.html" data-name="hbk3">湖北快3</a>
								<a href="/yx/hbs/lottery/36.html" data-name="nmk3">内蒙快3</a>
							</div>
						</div>
						<div class="line"></div>
						<div class="category">
							<div class="logo c3"></div>
							<div class="items pailie">
								<a href="/yx/hbs/lottery/41.html" data-name="fc3d">3D福彩</a>
								<a href="/yx/hbs/lottery/42.html" data-name="pl3">排列三/排列五</a>
							</div>
						</div>
						<div class="line"></div>
						<div class="category">
							<div class="logo pk10"></div>
							<div class="items pkten">
								<a href="/yx/hbs/lottery/43.html" data-name="bjpk10">北京PK10</a>
							</div>
						</div>
					</div>
				</div>
				<div class="tabs"></div>
			</div>
			<!-- 彩种导航结束 -->
			<div class="center-side">
        <!-- 导航区域 -->
        <div class="lottery-navs">
          <!--<div class="set-navs">
            <div class="clearfix">
              <div class="sound-set">
                <em class="m_ico">&#59041;</em>声音：<span class="txtgap"></span><span class="audio-sw hand juston"><em class="rf sound-status">关</em><em class=" m_bigger rf"></em><em class="m_dotcycle"></em></span>
              </div>
            </div>
          </div> -->
          <ul>
            <li class="title"><img src="/static/v3/images/lotteryType.png" alt="">常用彩种 <span>编辑</span></li>
            <li class="normal first">
              <div class="lt-choose">
                <h3>重庆时时彩</h3>
                <span class="lt-countdown">00:00</span>
              </div>
            </li>
            <li class="normal">
              <div class="lt-choose">
                <h3>广东11选5</h3>
                <span class="lt-countdown">00:00</span>
              </div>
            </li>
          </ul>
					<!-- 开奖列表信息 -->
					<div class="lottery-open-list mouseon clearfix">
						<div class="arrow"></div>
						<div class="title">
							<img src="/static/v3/images/historyLotteryList.png" alt="">
							历史期号
							<!-- <div class="expect">历史期号</div> -->
							<!-- <div class="code">开奖号码</div>
							<div class="zutype">组态</div> -->
						</div>
						<div class="content clearfix">
							<div class="wrapper">
								<div class="scroller bonus-list" data-handle-color="#93dbce" data-handle-distance="3px">
									<ul class="list bonus-data"></ul>
								</div>
							</div>
						</div>
					</div>
          <!-- 遗漏出码 -->
          <div class="lottery-ma">
            <div class="ma-title"><em class="icon">&#xe6b8;</em>排行数据<a class="hand rf" rel="yiLou">遗漏</a><a class="hand rf on" rel="lengRe">出码</a></div>
            <div class="ma-filter">
              <span>次数</span>
              <span>
                <select name="" id="ma-times">
                  <option value=""></option>
                  <option value="" selected="selected"></option>
                </select>
              </span>
            </div>
            <div class="ma-lst"><ul></ul></div>
          </div>

        </div>
				<!-- 选号区域 -->
				<div class="lottery-betting">
          <div class="fixed-right">
          	<a class="active">经典</a>
						<a class="offical">官方</a>
          </div>
          <div class="pankou_main">
            <div class="fullwidth clearfix">
              <div class="dashpart">
                <ul>
                  <li class="ltlogo clearfix">
                    <span></span>
                    <div class="ltmenus dropdown dropdown-hover">
                      <a class="hand" data-toggle="dropdown"><label>${lotteryName}</label><em class="m_ico">&#xe943;</em></a>
                      <div id="pank-lt-list" class="dropdown-menu">
                        <div class="top-lt-list-inside clearfix">
                          <em class="m_ico"></em>
                          <ul class="top-lt-choose">
                            <li class="first_cls first_ssc" style="width:220px;">
                              <h4><span class="icon_ball"></span></h4>
                              <ul class="sec-lt-list" rel="ssc">
                                <li class="on" rel="80"><a href="/yx/xjw/v/lottery/80.html">重庆时时彩</a></li>
                                <li class="" rel="82"><a href="/yx/xjw/v/lottery/82.html">新疆时时彩</a></li>
                              </ul>
                            </li>
                            <li class="first_cls">
                              <h4 class="xuan"><span class="icon_ball"></span></h4>
                              <ul class="sec-lt-list" rel="xuan">
                                <li class="" rel="100"><a href="/yx/xjw/v/lottery/100.html">广东11选5</a></li>
                                <li class="" rel="101"><a href="/yx/xjw/v/lottery/101.html">江西11选5</a></li>
                                <li class="" rel="102"><a href="/yx/xjw/v/lottery/102.html">山东11选5</a></li>
                              </ul>
                            </li>
                            <li class="first_cls">
                              <h4 class="pk"><span class="icon_ball"></span></h4>
                              <ul class="sec-lt-list" rel="pk"><li class="" rel="110"><a href="/yx/xjw/v/lottery/110.html">北京PK10</a></li></ul>
                            </li>
                            <li class="first_cls">
                              <h4 class="three"><span class="icon_ball"></span></h4>
                              <ul class="sec-lt-list" rel="three">
                                <li class="" rel="120"><a href="/yx/xjw/v/lottery/120.html">3D福彩</a></li>
                              </ul>
                            </li>
                            <li class="first_cls">
                              <h4 class="other"><span class="icon_ball"></span></h4>
                              <ul class="sec-lt-list" rel="other">
                                <li class="" rel="90"><a href="/yx/xjw/v/lottery/90.html">江苏快3</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                  </li>
                  <li class="counter clearfix">
                    <div class="tbox">第 <b class="box" id="current-issue"></b> 期至截止还有<div class="audio-sw audio-off"></div></div>
                    <div class="timebox">
                      <span rel="距离封盘"><b class="box timer" id="close-timer"><span class="days"><em class="dots">:</em></span><em class="min">00</em><em class="dots">:</em><em class="sec">00</em></b></span>
                    </div>
                    <span style="display:none;">距离开奖<b class="box timer" id="award-timer"><span class="days"><em class="dots">:</em></span><em class="min">00</em><em class="dots">:</em><em class="sec">00</em></b></span>
                    <div class="break"></div>
                  </li>
                  <li class="opencode clearfix">
                    <div class="tbox">第 <b id="prev-issue"></b> 期 开奖结果 <a class="lottery-code-trend">开奖走势</a></div>
                    <div class="timebox" id="pre-result">
                      <span class="fl summary-name" style="display:none;">${lotteryName}</span>
                      <span id="prev-bs"></span>
                    </div>
                    <div class="sound"><em class="m_ico">&#xe616;</em></div>
                  </li>
                  <li class="lastcodes">
                    <div class="tbox">近期开奖号码</div>
                  </li>
                </ul>
              </div>
            </div>
            <!--.summary START-->
            <div class="summary clearfix" id="summary">
              <div class="tabchange">
                <ul class="xuan">
                  <li class="on" rel="j-n1">整合</li>
                </ul>
              </div>
              <i title="声音开关" class="icon1 sound-on fr"></i>
              
              <span class="button-secondary-group">
                <button class="button button-blank button-current" data-mode="normal">一般</button>
                <button class="button " data-mode="quick">快捷</button>
              </span>
            </div>
            <!--.summary END-->
            <!-- 盘口投注 开始 -->
            <div id="play" class="play"> 
   <div class="play-hd clearfix"> 
    <ul class="play-category fl" id="play-tab"> 
     <li data-target="#j-all" data-np="1"> <a href=""> 整合 </a> </li> 
     <!-- <li data-target="#j-sd" data-np="0" data-hits="yes"><a href="">
官方
</a></li> --> 
    </ul> 
   </div> 
   <div class="play-bd clearfix"> 
    <div class="main-bd" id="parlay-ctn"> 
     <div class="clearfix top-bar"> 
      <div class="fr"> 
       <form class="form normal-form hide tac" action=""> 
        <button class="button parlay bet-button" data-action="parlay"> 下注 </button> 
        <button class="button button-secondary bet-button" data-action="reset" type="reset"> 重置 </button> 
       </form> 
      </div> 
      <div class="fr removable"> 
       <form class="form quick-form need-auth" action=""> 
        <label> 金额： <input type="text" class="input fb sync-bet" /> </label> 
        <button class="button parlay bet-button" data-action="parlay"> 下注 </button> 
        <button class="button button-secondary bet-button" data-action="reset" type="reset"> 重置 </button> 
       </form> 
      </div> 
      <!--                 <span>

                    今天输赢
                    <b id="win-lose">0.00</b>
                </span> --> 
     </div> 
     <div class="mt10"> 
      <!-- 整合 --> 
      <div id="j-all" class="now"> 
       <!-- 和值|两连 start --> 
       <table class="table nested-table mb10" style="border-bottom:none;"> 
        <thead> 
         <tr> 
          <th colspan="4">和值</th> 
         </tr> 
        </thead> 
        <tbody> 
         <tr> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="165" data-type="和值" data-id="4125"> 
              <td class="table-odd">3</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">165</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="10" data-type="和值" data-id="4129"> 
              <td class="table-odd">7</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">10</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="5.6" data-type="和值" data-id="4133"> 
              <td class="table-odd">11</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">5.6</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="15" data-type="和值" data-id="4137"> 
              <td class="table-odd">15</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">15</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="1.96" data-type="和值" data-id="4141"> 
              <td class="table-odd">大</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="48" data-type="和值" data-id="4126"> 
              <td class="table-odd">4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">48</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="7.2" data-type="和值" data-id="4130"> 
              <td class="table-odd">8</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">7.2</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="6.05" data-type="和值" data-id="4134"> 
              <td class="table-odd">12</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">6.05</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="25" data-type="和值" data-id="4138"> 
              <td class="table-odd">16</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">25</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="1.96" data-type="和值" data-id="4142"> 
              <td class="table-odd">小</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="25" data-type="和值" data-id="4127"> 
              <td class="table-odd">5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">25</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="6.05" data-type="和值" data-id="4131"> 
              <td class="table-odd">9</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">6.05</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="7.2" data-type="和值" data-id="4135"> 
              <td class="table-odd">13</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">7.2</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="48" data-type="和值" data-id="4139"> 
              <td class="table-odd">17</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">48</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="1.96" data-type="和值" data-id="4143"> 
              <td class="table-odd">单</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="15" data-type="和值" data-id="4128"> 
              <td class="table-odd">6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">15</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="5.6" data-type="和值" data-id="4132"> 
              <td class="table-odd">10</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">5.6</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="10" data-type="和值" data-id="4136"> 
              <td class="table-odd">14</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">10</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="165" data-type="和值" data-id="4140"> 
              <td class="table-odd">18</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">165</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="1.96" data-type="和值" data-id="4144"> 
              <td class="table-odd">双</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <!-- 和值|两连 end --> 
       <!-- 和值|两连 start --> 
       <table class="table nested-table mb10" style="border-bottom:none;"> 
        <thead> 
         <tr> 
          <th colspan="4">两连</th> 
         </tr> 
        </thead> 
        <tbody> 
         <tr> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="4.8" data-type="两连" data-id="4158"> 
              <td class="table-odd">1,2</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4162"> 
              <td class="table-odd">1,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4166"> 
              <td class="table-odd">2,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4170"> 
              <td class="table-odd">4,5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="4.8" data-type="两连" data-id="4159"> 
              <td class="table-odd">1,3</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4163"> 
              <td class="table-odd">2,3</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4167"> 
              <td class="table-odd">3,4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4171"> 
              <td class="table-odd">4,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="4.8" data-type="两连" data-id="4160"> 
              <td class="table-odd">1,4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4164"> 
              <td class="table-odd">2,4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4168"> 
              <td class="table-odd">3,5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4172"> 
              <td class="table-odd">5,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-odds="4.8" data-type="两连" data-id="4161"> 
              <td class="table-odd">1,5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4165"> 
              <td class="table-odd">2,5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="4.8" data-type="两连" data-id="4169"> 
              <td class="table-odd">3,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <!-- 和值|两连 end --> 
       <!-- 和值|两连 start --> 
       <table class="table nested-table mb10" style="border-bottom:none;"> 
        <tbody> 
         <tr> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <thead> 
             <tr> 
              <th colspan="3">独胆</th> 
             </tr> 
            </thead> 
            <tbody> 
             <tr data-odds="2.01" data-type="独胆" data-id="4145"> 
              <td class="table-odd">1</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="2.01" data-type="独胆" data-id="4146"> 
              <td class="table-odd">2</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="2.01" data-type="独胆" data-id="4147"> 
              <td class="table-odd">3</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="2.01" data-type="独胆" data-id="4148"> 
              <td class="table-odd">4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="2.01" data-type="独胆" data-id="4149"> 
              <td class="table-odd">5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="2.01" data-type="独胆" data-id="4150"> 
              <td class="table-odd">6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr>  
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <thead> 
             <tr> 
              <th colspan="3">豹子</th> 
             </tr> 
            </thead> 
            <tbody> 
             <tr data-odds="160" data-type="豹子" data-id="4151"> 
              <td class="table-odd">1,1,1</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="160" data-type="豹子" data-id="4152"> 
              <td class="table-odd">2,2,2</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="160" data-type="豹子" data-id="4153"> 
              <td class="table-odd">3,3,3</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="160" data-type="豹子" data-id="4154"> 
              <td class="table-odd">4,4,4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="160" data-type="豹子" data-id="4155"> 
              <td class="table-odd">5,5,5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="160" data-type="豹子" data-id="4156"> 
              <td class="table-odd">6,6,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="27.5" data-type="豹子" data-id="4157"> 
              <td class="table-odd">任意豹子</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">27.5</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
          <td class="p0" style="border-bottom:none;"> 
           <table class="j-betting f-border"> 
            <thead> 
             <tr> 
              <th colspan="3">对子</th> 
             </tr> 
            </thead> 
            <tbody> 
             <tr data-odds="9.8" data-type="对子" data-id="4173"> 
              <td class="table-odd">1,1</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="9.8" data-type="对子" data-id="4174"> 
              <td class="table-odd">2,2</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="9.8" data-type="对子" data-id="4175"> 
              <td class="table-odd">3,3</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="9.8" data-type="对子" data-id="4176"> 
              <td class="table-odd">4,4</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="9.8" data-type="对子" data-id="4177"> 
              <td class="table-odd">5,5</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-odds="9.8" data-type="对子" data-id="4178"> 
              <td class="table-odd">6,6</td> 
              <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
              <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody>
           </table> </td> 
         </tr> 
        </tbody> 
       </table> 
       <!-- 和值|两连 end --> 
      </div> 
      <script type="text/html" id="tpl-prev-balls">
    {{#balls}}
      <i class="icon_2 icon_three ball-{{.}}-k3">{{.}}</i>
    {{/balls}}
</script> 
     </div> 
     <!--.selected-ball START--> 
     <div class="selected-ball clearfix need-auth"> 
      <div class="fr"> 
       <form class="form quick-form need-auth" action=""> 
        <label> 金额： <input type="text" class="input fb sync-bet" /> </label> 
        <button class="button parlay bet-button" data-action="parlay"> 下注 </button> 
        <button class="button button-secondary bet-button" data-action="reset" type="reset"> 重置 </button> 
       </form> 
      </div> 
      <form class="form normal-form hide tac" action="" style="text-align:right;"> 
       <button class="button parlay bet-button" data-action="parlay"> 下注 </button> 
       <button class="button button-secondary bet-button" data-action="reset" type="reset"> 重置 </button> 
      </form> 
     </div> 
     <!--.selected-ball END--> 
     <!-- <div id="trends" class="play-tab tab mt10 hide" data-widget="tab">

</div> --> 
     <script id="tpl-trends" type="text/html">
    <table class="table nested-table secondary-table">
        <thead>
            <tr>
                <td colspan="10" class="tab-hd">
                    {{#hd}}
                    <a href="javascript:;" class="tab-item active">{{.}}</a>
                    {{/hd}}
                </td>
            </tr>
        </thead>
        <tbody>
            {{#bd}}
            <tr class="tab-bd">
                <td colspan="10" class="p0">

                    <table>
                        <tr>
                            {{#number}}

                            <td>{{.}}</td>

                            {{/number}}
                        </tr>
                        <tr>
                            {{#item}}

                            <td>{{.}}</td>

                            {{/item}}
                        </tr>
                    </table>

                </td>
            </tr>
            {{/bd}}
        </tbody>
    </table>
</script> 
     <div id="luzhu" class="play-tab tab mt10 hide" data-widget="tab"> 
     </div> 
     <script id="tpl-luzhu" type="text/html">
                <table class="table secondary-table">
                    <thead>
                        <tr>
                            <td colspan="30" class="tab-hd">
                                {{#hd}}
                                <a href="javascript:;;" class="tab-item">{{.}}</a>
                                {{/hd}}
                            </td>
                        </tr>

                    </thead>
                    <tbody>
                        {{#bd}}
                        <tr class="tab-bd">
                            {{#items}}
                            <td>
                                {{#item}}{{.}}<br />
                                {{/item}}
                            </td>
                            {{/items}}
                        </tr>
                        {{/bd}}
                    </tbody>
                </table>
            </script> 
    </div>
   </div>
  </div>
			      <!-- 盘口投注 结束 -->
            <script>require(['/public/tjs/ssc.js'], function (Lottery) {new Lottery({lotteryId: '${lotteryId}'});});</script>
          </div>
        </div>

			</div>
			<!-- 右侧结束 -->

      <!-- 弹出框 开始 -->
      <div id="j-confirm-tpl" class="hide ">
        <div class="confirm-parlay">
          <h3>共计：{{currency}}<em>{{total}}</em>/<em>{{sum}}</em>注，您确定要下注吗？</h3>
          <ul class="{{col}}">{{#items}}<li><span>{{category}}【{{name}}】</span>@{{odds}} X {{amount}}</li>{{/items}}</ul>
        </div>
      </div>
      <!-- 弹出框 结束 -->

			<!-- 投注记录开始 -->

			<!-- 投注记录结束 -->
		</div>
	</div>
  <div class="modal fade" id="saveMy">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
          <h4 class="modal-title">请选择您最常玩的彩种(最多可选9个彩种)</h4>
        </div>
        <div class="modal-body">
          <ul class="savemylt clearfix">
            <li class="seccls" rel="ssc">
              <h4>时时彩</h4>
              <ul class="sublist sscfirst"></ul>
            </li>
            <li class="seccls xuan" rel="xuan">
              <h4>11选5</h4>
              <ul class="sublist"></ul>
            </li>
            <li class="seccls kuai" rel="kuai">
              <h4>快乐彩</h4>
              <ul class="sublist"></ul>
            </li>
            <li class="seccls other" rel="other">
              <h4>其他</h4>
              <ul class="sublist"></ul>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <a class="hand likebtn" id="saveMylottery" data-dismiss="modal">保存</a>
        </div>
      </div>
    </div>
  </div>
	<!-- 尾部 开始 -->
  <div class="bot">
      <div class="pagefooterWarps">
        <div class="page_footer"><div id="special_purpose" class="footer_content"><div class="footer_index"><em id="counter1">3240</em><em id="counter2" class="sec">3047</em></div> <div class="fullw_link"><div class="footer_link clearfix"><div class="lf"><ul><li class="first">赌博委员会监管服务条款</li> <li><a href="/aboutUs#0" target="_blank" class="">关于我们</a></li> <li><a href="/aboutUs#1" target="_blank" class="">服务条款</a></li> <li><a href="/aboutUs#2" target="_blank" class="">充提说明</a></li> <li><a href="/aboutUs#3" target="_blank" class="">免责声明</a></li> <li><a href="/aboutUs#4" target="_blank" class="">博彩责任</a></li></ul></div> <div class="rf">Copyright © 2018 头彩娱乐 版权所有 | 18+</div></div></div></div></div>
    </div>
  </div>
  <!-- 尾部 结束 -->

  <!-- 其他弹层 开始 -->
  <div class="modal modal-zui fade" id="letwait">
    <div class="modal-dialog modal-sm">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">提示</h4>
      </div>
      <div class="modal-content letus-wait">
        敬请期待
      </div>
    </div>
  </div>
  <div class="modal fade" id="popnotice" style="display:none;">
    <div class="modal-dialog" style="width:500px;">
      <div class="modal-content popnotice-main">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
          <h4 class="modal-title">系统公告</h4>
        </div>
        <div class="modal-body">
          <p></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" style="float:right;">关闭</button><a href="/yx/hbs/game-notice.html?index=0" target="_self" style="float: right;font-size: 12px;color: #0fa490;line-height: 35px;margin-right: 10px;">查看全部公告</a>
        </div>
      </div>
    </div>
  </div>
  <!-- 其他弹层 结束 -->
  <!-- 悬浮层 开始 -->
   <div class="fixright-bars">
    <ul class="clearfix">
		<li class="rbar fixrightLi"><div class="lico"><em class="icon">&#xe6ae;</em></div><a target="_blank" href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=925834&configID=8015&jid=8547731414&s=1"><span>客服</span></a></li>
		<li class="rbar fixrightLi"><div class="lico"><em class="icon">&#xe69e;</em></div><a class="lottery-code-trend"><span>走势</span></a></li>
		<li class="rbar fixrightLi"><div class="lico"><em class="icon">&#xe688;</em></div><a href="/download"><span>下载</span></a></li>
		<li class="rbar fixrightLi router_click"><div class="lico"><em class="icon">&#xe68c;</em></div><a href="javascript:void(0)"><span>线路</span></a></li>
		<li class="rbar btn"><div class="lico"><em class="icon">&#xe6bb;</em></div><span>收起</span></li>
    </ul>
  </div>
  <!-- 线路测速弹窗 -->
    <div class="util_prompt" style='display:none'>
                <div class="prompt_content">
                    <div class="speed_test">
                        <div class="lineDetectionWarp loginWarp">
                            <div class="speed_title">
                                <div class="ft26">
                                    <span class="icon ft26">&#xe68b;</span>
                                    <i>线路检测</i>
                                </div>
                                <span class="icon" @click="showDetection = false">&#xe63b;</span>
                            </div>
                            <div class="detectionMain_cont fl relative   clearfix">
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
                                    <div class="best_route detectionMain_contDemo">

                                    </div>
                                </div>
                                <div class="bold_line"></div>
                                <div class="part_cont part_cont2">

                                </div>
                            </div>
                            <div class="btn_part">
                                <div class="refresh_route" @click="resterLoad">
                                    <span class="icon ft20">&#xe614;</span>
                                    <i>刷新</i>
                                </div>
                                <!--<div class="intelligent_choose">-->
                                <!--<span class="icon ft20">&#xe698;</span>-->
                                <!--<i>智能选择</i>-->
                                <!--</div>-->
                            </div>
                            <div class="imgWrapper" style="display: none;"></div>
                            <!--<img v-for="item in speedSrc" :src="item+ '/yx/'+speedSrcRdm+'.html'" @error="srcErroe"-->
                                 <!--/>-->
                        </div>
                    </div>
                </div>
            </div>
  <!-- 悬浮层 结束 -->
	<script type="text/javascript">
		$(".fixright-bars .btn").click(function(){
			if(this.zdidx){
				$('.fixright-bars .fixrightLi').show();
				$(this).find("span").html("收起");
				this.zdidx = false;
			}else{
				$('.fixright-bars .fixrightLi').hide();
				$(this).find("span").html("展开");
				this.zdidx = true;
			}
		})
	</script>
</body>
</html>
