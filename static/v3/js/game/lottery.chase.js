var LotteryChase = function() {
	
	var Config = {};
	
	var els = function() {
		return $('.lottery-chase');
	}
	
	var TimeList = [];
	var loadExpect = function(count, fn) {
		var url = Route.PATH + '/game-lottery/static-chase-time';
		var data = {name: Config.lottery};
		$.ajax({
			type: 'post',
			url: url,
			data: data,
			timeout: 10000,
			dataType: 'json',
			success: function(response) {
				TimeList = response;
				if($.isFunction(fn)) fn();
			}
		});
	}
	
	/**
	 * 计算投注列表信息
	 */
	var BListInfo = function() {
		var bList = function() {
			return LotteryMain.bList();
		}
		var money = function(multiple) {
			var amount = 0;
			var list = bList();
			for (var i = 0; i < list.length; i++) {
				var val = list[i];
				amount += multiple * val.num * Config.sysUnitMoney * PrizeUtils.model(val.model).money;
			}
			return amount;
		}
		var cList = function() {
			var list = [];
			var thisTable = els().find('.sections').find('table > tbody');
			thisTable.find('tr').each(function() {
				var thisRow = $(this);
				var checkbox = thisRow.find('input[type="checkbox"]');
				var expect = thisRow.find('.expect').html();
				var multiple = Number(thisRow.find('input[type="text"]').val());
				if(checkbox.is(':checked')) {
					list.push({expect: expect, multiple: multiple});
				}
			});
			return list;
		}
		return {
			bList: bList,
			cList: cList,
			money: money
		}
	}();
	
	/**
	 * 奖金工具
	 */
	var PrizeUtils = function() {
		var model = function(val) {
			if(val == 'yuan') {
				return {val: val, money: 1};
			}
			if(val == 'jiao') {
				return {val: val, money: 0.1};
			}
			if(val == 'fen') {
				return {val: val, money: 0.01};
			}
			if(val == 'li') {
				return {val: val, money: 0.001};
			}
		}
		var money = function(type, m, code) {
			var method = Config.method[type];
			var mMoney = model(m).money;
			var prize = [];
			if(method) {
				var ps = method.bonus.split(',');
        //console.log(ps,ps*(Config.sysUnitMoney / 2)*mMoney,'psssssssss',Config.sysUnitMoney,mMoney);
				for (var i = 0, j = ps.length; i < j; i++) {
					var pm = (code / Number(ps[i])) * (Config.sysUnitMoney / 2) * mMoney;
					prize[i] = pm.toFixed(3);
				}
			}
      //console.log(type, m, code,prize,'prizeprizeprizeprizeprize');
			return prize;
		}
		var tracesinglemoney = function(type, m, code) {
			var method = Config.method[type];
			var mMoney = model(m).money;
			var prize = [];
			if(method) {
				var ps = method.bonus.split(',');
        //console.log('trace',code,ps,ps*(Config.sysUnitMoney / 2)*mMoney,'psssssssss',Config.sysUnitMoney,mMoney);
				for (var i = 0, j = ps.length; i < j; i++) {
          //console.log((code / Number(ps[i])));
					var pm = (code / Number(ps[i])) * ps*(Config.sysUnitMoney / 2)*mMoney;
					prize[i] = pm.toFixed(3);
				}
			}
      //console.log(prize,'lastprizeprizeprizeprizeprize');
			return prize;
		}
		return {
			model: model,
      tracesinglemoney : tracesinglemoney,
			money: money
		}
	}();
	
	/**
	 * 投注选项
	 */
	var Options = function() {
		var update = function() {
			var options = els().find('.options');
			var thisTable = els().find('.sections').find('table > tbody');
			var totalExpect = 0, totalMoney = 0;
			thisTable.find('tr').each(function() {
				var thisRow = $(this);
				var checkbox = thisRow.find('input[type="checkbox"]');
				var thisMoney = Number(thisRow.find('.money').html()); 
				if(checkbox.is(':checked')) {
					totalExpect++;
					totalMoney += thisMoney;
				}
			});
			options.find('[data-field="total-expect"]').html(totalExpect);
			options.find('[data-field="total-money"]').html(totalMoney.toFixed(3));
		}
		var isStop = function() {
			var options = els().find('.options');
			var isStop = options.find('input[name="isStop"]');
			return isStop.is(':checked') ? true : false;
		}
		return {update: update, isStop: isStop};
	}();
	
	/**
	 * 计算利润率
	 * count 追号期数
	 * sMultiple 开始倍数
	 * maxMultiple 最大倍投
	 * minProfit 最低利润率（百分比）
	 * money 单倍金额
	 * prize 单倍奖金
	 */
	var calculation = function(count, sMultiple, maxMultiple, minProfit, money, prize) {
		var result = []; // 结果
		var totalMoney = 0;
		var multiple = sMultiple;
		for (var i = 0; i < count; i++) {
			var thisMoney = 0;
			var thisPrize = 0;
			var thisProfit = 0;
			while (true) {
				thisMoney = money * multiple;
				thisPrize = prize * multiple;
				var tempTotal = totalMoney + thisMoney;
				thisProfit = (thisPrize - tempTotal) / tempTotal;
				if(thisProfit >= minProfit) break;
				if(multiple > maxMultiple) return result;
				multiple++;
			}
			totalMoney += thisMoney; // 累计投入
			//alert(multiple + '-' + thisMoney + '-' + totalMoney + '-' + thisPrize);
			result.push({multiple: multiple, thisMoney: thisMoney, thisPrize: thisPrize, thisProfit: thisProfit});
		}
		return result;
	}
	
	var doGenerate = function() {
		var tabs = els().find('.tabs');
		var options = els().find('.options');
		var thisTable = els().find('.sections').find('table > tbody');
		var total = Number(options.find('input[name="expect"]').val());
		var index = tabs.find('.active').attr('data-type');
		if(index == 0) {
			// 判断多订单
			if(BListInfo.bList().length > 1) {
				return App.alert('info', '提示消息', '多个订单不支持利润率追号！', 3000);
			}
			var data = BListInfo.bList()[0];
			// 计算单倍奖金
			var prize = PrizeUtils.tracesinglemoney(data.method, data.model, data.code);
			if(prize.length > 1) {
				return App.alert('info', '提示消息', '该玩法不支持利润率追号！', 3000);
			}
			// 计算单倍投注金额
			var money = data.num * Config.sysUnitMoney * PrizeUtils.model(data.model).money;
			// 获取选项
			var sMultiple = Number(options.find('input[name="sMultiple"]').val());
			var maxMultiple = Number(options.find('input[name="maxMultiple"]').val());
			var minProfit = Number(options.find('input[name="minProfit"]').val());
			minProfit = minProfit / 100; // 变成百分比
      //console.log(minProfit,'minProfit');
      //console.log(total, sMultiple, maxMultiple, minProfit, money, prize);
			var result = calculation(total, sMultiple, maxMultiple, minProfit, money, prize);
      //console.log(result,'resultresultresult');
			thisTable.empty();
			if(result.length > 0) {
				for (var i = 0; i < result.length; i++) {
					if(i > TimeList.length - 1) break;
					var val = TimeList[i];
					var multiple = result[i].multiple;
					var innerHtml =
						'<tr>'+
						'<td class="checkbox"><input type="checkbox" checked="checked"></td>'+
						'<td class="expect">' + val.issue + '</td>'+
						'<td class="multiple"><input type="text" class="form-control" value="' + multiple + '"> 倍</td>'+
						'<td class="money">' + BListInfo.money(multiple).toFixed(3) + '</td>'+
						'<td class="time">' + val.stopTime + '</td>'+
						'</tr>';
					thisTable.append(innerHtml);
				}
			} else {
				var innerHtml = '<tr><td>没有符合要求的方案，请调整参数重新计算！</td></tr>';
				thisTable.append(innerHtml);
			}
			Options.update();
		}
		if(index == 1) {
			var sMultiple = Number(options.find('input[name="sMultiple"]').val());
			thisTable.empty();
			for (var i = 0; i < total; i++) {
				if(i > TimeList.length - 1) break;
				var val = TimeList[i];
				var innerHtml =
				'<tr>'+
					'<td class="checkbox"><input type="checkbox" checked="checked"></td>'+
					'<td class="expect">' + val.issue + '</td>'+
					'<td class="multiple"><input type="text" class="form-control" value="' + sMultiple + '"> 倍</td>'+
					'<td class="money">' + BListInfo.money(sMultiple).toFixed(3) + '</td>'+
					'<td class="time">' + val.stopTime + '</td>'+
				'</tr>';
				thisTable.append(innerHtml);
			}
			Options.update();
		}
		if(index == 2) {
			var sMultiple = Number(options.find('input[name="sMultiple"]').val());
			var operation = options.find('select[name="operation"]').val();
			var expTimes = Number(options.find('input[name="expTimes"]').val());
			var expMultiple = Number(options.find('input[name="expMultiple"]').val());
			thisTable.empty();
			for (var i = 0; i < total; i++) {
				if(i > TimeList.length - 1) break;
				var val = TimeList[i];
				var multiple = 1;
				if('x' == operation) {
					multiple = i < expTimes ? sMultiple : sMultiple * Math.pow(expMultiple, Math.floor(i / expTimes));
				}
				if('+' == operation) {
					multiple = i < expTimes ? sMultiple : sMultiple + expMultiple * Math.floor(i / expTimes);
				}
				if(multiple > 10000) return;
				var innerHtml =
				'<tr>'+
					'<td class="checkbox"><input type="checkbox" checked="checked"></td>'+
					'<td class="expect">' + val.issue + '</td>'+
					'<td class="multiple"><input type="text" class="form-control" value="' + multiple + '"> 倍</td>'+
					'<td class="money">' + BListInfo.money(multiple).toFixed(3) + '</td>'+
					'<td class="time">' + val.stopTime + '</td>'+
				'</tr>';
				thisTable.append(innerHtml);
			}
			Options.update();
		}
		initTableEvent();
	}
	
	var initNormal = function() {
		var options = els().find('.options');
    //console.log(TimeList,'TimeListTimeListTimeList');
		var thisTable = els().find('.sections').find('table > tbody');
		var total = Number(options.find('input[name="expect"]').val());
    //console.log(total,'totaltotaltotaltotaltotaltotal');
		thisTable.empty();
		for (var i = 0; i < total; i++) {
			var val = TimeList[i];
      if (typeof TimeList[i] !='undefined') {
        var innerHtml =
        '<tr>'+
          '<td class="checkbox"><input type="checkbox"></td>'+
          '<td class="expect">' + val.issue + '</td>'+
          '<td class="multiple"><input type="text" class="form-control" value="0" disabled="disabled"> 倍</td>'+
          '<td class="money">0.000</td>'+
          '<td class="time">' + val.stopTime + '</td>'+
        '</tr>';
        thisTable.append(innerHtml);  
      }
			
		}
		initTableEvent();
	}
	
	var initTableEvent = function() {
		var thisTable = els().find('.sections').find('table > tbody');
		thisTable.find('tr').each(function() {
			var thisRow = $(this);
			var checkbox = thisRow.find('input[type="checkbox"]');
			var multiple = thisRow.find('input[type="text"]');
			var update = function() {
				var val = Number(multiple.val());
				if(isNaN(val)) val = 0;
				thisRow.find('.money').html(BListInfo.money(val).toFixed(3));
				Options.update();
			}
			checkbox.change(function() {
				if($(this).is(':checked')) {
					multiple.val(1);
					multiple.removeAttr('disabled');
				} else {
					multiple.val(0);
					multiple.attr('disabled', 'disabled');
				}
				update();
			});
			multiple.keyup(function() {
				if($(this).val() == '') return;
				var val = Number($(this).val());
				if(/^[0-9]*$/.test(val)) {
					if(val > 10000) $(this).val(10000);
					if(val < 1) $(this).val(1);
				} else {
					$(this).val(1);
				}
				update();
			});
			multiple.keydown(function(e) {
				if($(this).val() == '') return;
				var val = Number($(this).val());
				if(!isNaN(val)) {
					if(e.keyCode == 38) val++;
					if(e.keyCode == 40) val--;
					if(val > 10000) val = 10000;
					if(val < 1) val = 1;
					$(this).val(val);
				}
			});
		});
	}
	
	var bindNumber = function(els, defval) {
		if(els.length == 0) return;
		els.keydown(function(e) {
			if(e.keyCode == 38 || e.keyCode == 40) {
				if($(this).val() == '') return;
				var val = Number($(this).val());
				if(!isNaN(val)) {
					if(e.keyCode == 38) val++;
					if(e.keyCode == 40) val--;
					if(val < 0) val = defval;
					$(this).val(val);
				}
			}
		});
		els.keyup(function() {
			if($(this).val() == '') return;
			var val = Number($(this).val());
			if(/^[0-9]*$/.test(val)) {
				if(val < 0) $(this).val(1);
			} else {
				$(this).val(defval);
			}
		});
		els.blur(function() {
			if($(this).val() == '') {
				$(this).val(defval);
			}
		});
	}
	
	var initDocEvent = function() {
		var tabs = els().find('.tabs');
		var options = els().find('.options');
    var firegroup = els().find('.last-btn-group');
		tabs.find('a').click(function() {
			var index = $(this).attr('data-type');
			if(!$(this).hasClass('active')) {
				tabs.find('a').removeClass('active');
				$(this).addClass('active');
				options.find('section').removeClass('active');
				options.find('section[data-type="' + index + '"]').addClass('active');
			}
		});
		/*var expect = options.find('input[name="expect"]');
		expect.change(function() {
			initNormal();
		});*/
		options.find('[data-command="generate"]').click(function() {
			doGenerate();
		});
		firegroup.find('[data-command="submit"]').click(function() {
			var lottery = Config.lottery;
			var blist = BListInfo.bList();
			var clist = BListInfo.cList();
			var isStop = Options.isStop();
			doSubmit(lottery, blist, clist, isStop);
		});
		// 只能输入数字
		var expect = options.find('input[name="expect"]');
		var sMultiple = options.find('input[name="sMultiple"]');
		var maxMultiple = options.find('input[name="maxMultiple"]');
		var minProfit = options.find('input[name="minProfit"]');
		var expTimes = options.find('input[name="expTimes"]');
		var expMultiple = options.find('input[name="expMultiple"]');
		bindNumber(expect, 1);
		bindNumber(sMultiple, 1);
		bindNumber(maxMultiple, 1);
		bindNumber(minProfit, 1);
		bindNumber(expTimes, 1);
		bindNumber(expMultiple, 1);
	}
	
	// 投注
	var isLoading = false;
	var doSubmit = function(lottery, blist, clist, isStop) {
		if(!isLoading) {
			if(blist.length == 0) {
				return App.alert('info', '提示消息', '投注列表没有订单！', 3000);
			}
			if(clist.length == 0) {
				return App.alert('info', '提示消息', '您没有勾选任何追号计划！', 3000);
			}
			var orderList = [];
			$.each(blist, function(i, v) {
				orderList.push({
					lottery: v.lottery,
					method: v.method,
					content: v.content,
					model: v.model,
					code: v.code,
					compress: v.compress
				});
			});
			var planList = [];
			$.each(clist, function(i, v) {
				planList.push({
					issue: v.expect,
					multiple: v.multiple
				});
			});
			var text = {
				orderList: orderList,
				planList: planList,
				winStop: isStop
			}
			var data = { text: $.toJSON(text) };
			var url =Route.PATH + '/game-lottery/add-chase';
			isLoading = true;
			var thisContent = els().find('.jBox-content');
			App.blockUI({
				target: thisContent,
				boxed: true
			});
			$.ajax({
				type: 'post',
				url: url,
				data: data,
				timeout: 10000,
				dataType: 'json',
				success: function(response) {
					if(response.error == 0) {
						isLoading = false;
						App.unblockUI(thisContent);
						LotteryMain.clear();
						box.close();
						App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
            $('[data-field="lotteryBalance"]').html(response.data);
						if(RecordList) RecordList.init();
					}
					if(response.error == 1) {
						if ('116-05' == response.code) {
							setTimeout(function() {
								isLoading = false;
								App.unblockUI(thisContent);
								App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。');
							}, 10000);
						} else if ('116-06' == response.code) {
							window.location.href = '/game/lottery/index.html';
						} else {
							isLoading = false;
							App.unblockUI(thisContent);
							App.alert('warning', '提示消息', response.message);
						}
					}
				},
				error : function() {
					isLoading = false;
					App.unblockUI(thisContent);
				}
			});
		}
	}
	
	var initDocument = function() {
		var innerHtml = 
		'<div class="tabs"><a data-type="2">翻倍追号</a><a data-type="1">同倍追号</a><a data-type="0" class="active">利润率追号</a></div>'+
		'<div class="panels">'+
			'<div class="options">'+
				'<div class="row">'+
					'<label>追号期数：</label>'+
					'<input name="expect" type="text" class="form-control" value="10">'+
					'<label>&nbsp;总期数：<span class="text-dark-green" data-field="total-expect">0</span>期，</label>'+
					'<label>总追号金额：<span class="text-dark-green" data-field="total-money">0.000</span>元</label>'+
					'<input name="isStop" type="checkbox" checked="checked">'+
					'<label>中奖后停止追号</label>'+
				'</div>'+
				'<div class="row">'+
					'<label>起始倍数：</label>'+
					'<input name="sMultiple" type="text" class="form-control" value="1">'+
					'<section class="active" data-type="0">'+
						'<label>&nbsp;最大倍投：</label>'+
						'<input name="maxMultiple" type="text" class="form-control" value="100">'+
						'<label>&nbsp;最低收益率：</label>'+
						'<input name="minProfit" type="text" class="form-control" value="30">'+
						'<label>&nbsp;%</label>'+
					'</section>'+
					'<section data-type="2">'+
						'<label>&nbsp;隔&nbsp;</label>'+
						'<input name="expTimes" type="text" class="form-control" value="1">'+
						'<label>&nbsp;期，倍&nbsp;</label>'+
						'<select name="operation" class="form-control" style="width: 36px; border-right: none;">'+
							'<option value="x">x</option>'+
							'<option value="+">+</option>'+
						'</select>'+
						'<input name="expMultiple" type="text" class="form-control" value="2">'+
					'</section>'+
				'</div>'+
				'<div class="btn-group">'+
					'<a class="generate" data-command="generate">生成追号单</a>'+
					//'<a class="submit" data-command="submit">确认投注</a>'+
				'</div>'+
			'</div>'+
			'<div class="sections clearfix"><table><thead><tr><td class="checkbox">选择</td><td class="expect">期号</td><td class="multiple">倍数</td><td class="money">金额<em class="canhide">（元）</em></td><td class="time"><em class="canhide">代购</em>截止时间</td></tr></thead></table><div class="list"><div class="scroller" data-handle-distance="2px"><table><tbody></tbody></table></div></div></div>'+
      '<div class="last-btn-group"><a class="submit hand" data-command="submit">确认投注</a></div>'+
		'</div>';
		return innerHtml;
	}
	
	var box, defalutCount = 100;
	var init = function() {
		Config = LotteryMain.getConfig();
		if(BListInfo.bList().length == 0) {
			return App.alert('info', '提示消息', '投注列表没有可以追号的订单！');
		}
		if(box == undefined) {
			var thisExpect = $('.lottery-open-info').find('[data-field="global-expect"]').html();
      var doc = initDocument();
			var jOpt = {
        id:'chaseFloat',
        width: 800,
        height: 635,
        title: '我要追号<font class="f16">（当前销售第 <span data-field="global-expect">' + thisExpect + '</span>期，距离投注截止时间还有<span data-field="global-last-time">00:00:00</span></font>）',
        overlay: true,
        closeOnClick: false,
        blockScroll: false,
        animation: {open: 'zoomIn', close: 'zoomOut'},
        closeButton: 'title',
        draggable: 'title',
        content: doc,
        addClass: 'common-modal lottery-chase noselect default-cursor',
        onInit: function() {
          this.open();
          initDocEvent();
          App.initScroll();
          loadExpect(defalutCount, initNormal);
        },
        onCloseComplete: function() {
          this.destroy();
          box = undefined;
        }
      };
      if (typeof QueryString.iframe !='undefined') {
        jOpt.position = {
          x: 'center',
          y: $('lottery #lottery-frame', window.parent.document).scrollTop()+181//window.parent.document.body.clientHeight/2
        };
        //jOpt.fixed = true
        jOpt.offset = {
          x: 0,
          y: -180
        };
        //console.log(jOpt);
        //console.log($('lottery #lottery-frame', window.parent.document).scrollTop(),jOpt.position);
      }
      box = new jBox('Modal',jOpt);
      AppData.jbox = box;
		} else {
			box.toggle();
		}
	}
	return {init: init};
}();