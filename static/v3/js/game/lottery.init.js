//========================================================
//以下是通用的投注初始化相关的功能
//========================================================
//游戏数据
var GameData = function() {

	var info; // 游戏信息
	var method; // 玩法规则
  var methodTreeLst=[]; // 玩法细类列表
  var methodLst=[]; // 玩法列表
	var config; // 配置信息
  var thisgame = this;

	var init = function(name) {
		var cbfun;
    if (arguments.length > 1){
      cbfun = arguments[1]
    }
    var options = {};
    methodTreeLst=[];methodLst=[]
		options.url = Route.PATH + Route.WebAjax.PATH + Route.WebAjax.INIT_GAME_LOTTERY;
		options.data = { name: name };
		options.async = false;
		options.success = function(response) {
      //console.log(response,response.data.info.showName,'GAMEDATA');
      var ptitle = $('lottery .now_lottery', window.parent.document);
      if (typeof ptitle !='undefined') {
        if (ptitle.html()=='') {
          ptitle.html(response.data.info.showName);
        }
      }
			if (response.error == 0) {
				var data = response.data;
				info = data.info;
        info.id = name;
				method = data.method;
        for (a in method) {
          //console.log(method[a].name);
          var shortname = method[a].name.substr(0,3);
          var longname = method[a].name;
          //console.log(shortname,longname,'shortnameshortnameshortname');
          if (String(method[a].name).indexOf('3D')>-1) {
            shortname = String(method[a].name).replace('3D','').substr(0,5);
          }

          if (String(info.shortName)=='BJPK10') {
            shortname = String(method[a].name).substr(0,5);
          }
          if (String(info.shortName).indexOf('11Y')>-1) {
            shortname = String(method[a].name).substr(0,5);
          }
          if (shortname.indexOf('五星')>-1) {
            shortname = '五星';
          }
          if (shortname.indexOf('不定胆')>-1) {
            shortname = '不定胆';
          }
          //console.log(info.shortName);
          if (shortname.indexOf('前二')>-1 || shortname.indexOf('后二')>-1 || shortname.indexOf('二星后')>-1 || shortname.indexOf('二星前')>-1) {
            shortname = ((String(method[a].name).indexOf('3D')>-1 || String(info.shortName).indexOf('11Y')>-1) ? '二码': '二星');
            if (String(info.shortName).indexOf('PK10')>-1) {
              shortname ='前二';
            }
          }
          if (shortname.indexOf('任选')>-1) {
            shortname = '任选';
          }
          if (shortname.indexOf('单式任')>-1) {
            shortname = '任选';
          }
          if (shortname.indexOf('大小')>-1) {
            shortname = '大小';
          }
          if (shortname.indexOf('单双')>-1) {
            shortname = '单双';
          }
          if (shortname.indexOf('组选组六')>-1 || shortname.indexOf('组选组三')>-1) {
            shortname = (String(method[a].name).indexOf('3D')>-1 ? '三码': '三星');
          }
          if (shortname.indexOf('后三')>-1 && longname.indexOf('不定胆')==-1) {
            shortname = '后三';
          }
          if (longname.indexOf('不定胆')>-1) {
            shortname = '不定胆';
          }
          if (shortname.indexOf('定位胆')>-1 || shortname.indexOf('后五定')>-1 || shortname.indexOf('前五定')>-1) {
            shortname = '定位胆';
          }
          if (shortname.indexOf('前三')>-1) {
            shortname = '前三';
            if (String(info.shortName).indexOf('11Y')>-1) {
              shortname ='三码';
            }
          }
          if (shortname.indexOf('猜1个')>-1) {
            shortname = '猜中位';
          }
          if (shortname.indexOf('猜前四')>-1) {
            shortname = '前四';
          }
          if (shortname.indexOf('猜前五')>-1) {
            shortname = '前五';
          }
          if (shortname.indexOf('龙虎和')>-1 || shortname.indexOf('龙虎1')>-1 || shortname.indexOf('龙虎2')>-1 || shortname.indexOf('龙虎3')>-1 || shortname.indexOf('龙虎4')>-1 || shortname.indexOf('龙虎5')>-1) {
            shortname = '龙虎';
          }
          //console.log(shortname,'shortnameshortnameshortname');
          if (shortname.indexOf('趣味三')>-1 || shortname.indexOf('趣味二')>-1 || shortname.indexOf('趣味一')>-1 || shortname.indexOf('趣味四')>-1 || shortname.indexOf('趣味好')>-1) {
            shortname = '趣味';
          }
          if (shortname.indexOf('冠军')>-1) {
            shortname = '前一';
          }
          if (shortname.indexOf('中三')>-1) {
            shortname = '中三';
          }
          if (shortname.indexOf('四星')>-1) {
            shortname = '后四';
          }
          //console.log(method[a].name,String(method[a].name).indexOf('3D')>-1 && longname.indexOf('大小单双')>-1);
          if (String(method[a].name).indexOf('大小单双')>-1) {
            shortname = '大小单双';
          }
          //console.log(shortname,'last');
          methodTreeLst.push(a);
          if ($.inArray(shortname,methodLst)==-1) {
            methodLst.push(shortname);
          }
        }
				config = data.config;
        //console.log(methodTreeLst,methodLst,'methodLstmethodLstmethodLst');
        cbfun(config,thisgame);
        //console.log(methodTreeLst,'methodTreeLst');
			}
		};
		HttpRequest(options);
	};

  thisgame = {
		init: init,
		getInfo: function() {
			return info;
		},
		getMethod: function() {
			return method;
		},
		getMethods: function() {
			//console.log(methodTreeLst,'methodTreeLstmethodTreeLst');
      return methodTreeLst;
		},
		getMethodList: function() {
			return methodLst;
		},
		getConfig: function() {
			return config;
		}
	}

	return thisgame

}();

//兼容手机版本样式
var QueryString = function() {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();


var ininLtPage = function(config,GameData) {
	// console.log(GameData.getMethod()['sxzhixfsh'])
  var lotteryInfo = GameData.getInfo();
	var lotteryMethod = GameData.getMethod();
	var lotteryConfig = GameData.getConfig();
	var lotteryName = GameData.getInfo().showName;
	var lotteryShortName = GameData.getInfo().shortName;
	var lotteryType = GameData.getInfo().type;
  var lotteryId = GameData.getInfo().id;
  //console.log(GameData.getInfo());

	LotteryPlan.init(lotteryShortName);

	// 初始化彩票玩法
  LotteryMain.init({
		lottery: lotteryInfo.shortName,
		downCode: lotteryInfo.downCode,
		fenDownCode: lotteryInfo.fenDownCode,
		liDownCode: lotteryInfo.liDownCode,
		method: lotteryMethod,
		//sysCode: (lotteryConfig.sysCode > lotteryConfig.maxBetCode ? lotteryConfig.maxBetCode : lotteryConfig.sysCode),
    sysCode: lotteryConfig.sysCode,
		sysUnitMoney: lotteryConfig.sysUnitMoney,
		userCode: (AppData.getLotteryAccount().code > lotteryConfig.maxBetCode ? lotteryConfig.maxBetCode : AppData.getLotteryAccount().code),
		userLp: AppData.getLotteryAccount().point
	});
	// 投注记录
	typeof RecordList !='undefined' && RecordList.init();
	// 开奖信息
	LotteryOpenTime.init(lotteryInfo);
	// 开奖号码
	//LotteryOpenCode.init(lotteryInfo);
  //LotteryTrend.init(lotteryShortName,lotteryId,lotteryName);
  // 	AppLoop.init();
	AppLoop.push({
		key: 'PlayLottery',
		lottery: lotteryInfo.shortName
	}, function(res) {
		var thisData = res.PlayLottery;
		if (thisData) {
			if (thisData.openCode) {
				LotteryOpenCode.flush(thisData.openCode);
			}
			if (thisData.hasNewNotice) {
				// 拉取盈亏消息
				//LotteryOpenNotice.pull();
				// 刷新订单
				//RecordList.init();
			}
		}
	});
	//WebQQ.init();//聊天插件
  //遗漏

  setTimeout(function() {
    var ptitle = $('lottery .iframebox', window.parent.document);
    ptitle.height($('body .page-content').height());
  },400)
}

/**
 * 自动初始化
 */
/*(function() {

})();*/


$(document).ready(function() {
  var locSearch = window.location.pathname;
	if(locSearch) {
    //var a = 'http://127.0.0.1/hz/hbs/lottery/1.html';
		var a = locSearch;
		var reg = /\/\d+\.html/;
		var test = a.match(reg);
    if (test != null) {
      var reg1 = /\d+/;
      var lotteryId = test[0].match(reg1)[0];
      //var name = locSearch.substring(1);
      //console.info(lotteryId);
      GameData.init(lotteryId,function(a,b) {
        ininLtPage(a,b);
        setLogo();multipleControls();
      });
    }else {
      if (typeof QueryString.lid !== 'undefined') {
        GameData.init(QueryString.lid,function(a,b) {
          ininLtPage(a,b);setLogo();multipleControls();
        });
      }else {
        if (location.hash!='') {
          //console.log(location.hash,'location.hashlocation.hash');
          var nowltid = parseInt(String(location.hash).replace('#',''),10);
          var ltgroups={
            'ssc':[11,18,15,16,19,9,42],
            'pk10':[43,204],
            '11y':[24,21,23,22,25,26,28],
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
          //LotteryUtils=null,LotteryMain=null;
          //alert('212');
          loadjscallback(beforeload,function(){
            //loadScript("/dist/lottery.js");
            $('#lottery-navs li.mylt_'+nowltid).addClass('on');
            //console.log(LotteryUtils,LotteryUtils.namespace,LotteryMain,LotteryMain.namespace);
            GameData.init(nowltid,function(a,b) {
              ininLtPage(a,b);
              setLogo();multipleControls();
            });
          });
          //GameData.init(String(location.hash).replace('#',''),function(a,b) {
            //ininLtPage(a,b);
          //});
        }
      }
    }

	} else {
		//window.location.href = '/404.html';
	}

  //ininLtPage();
});
