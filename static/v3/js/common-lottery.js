//========================================================
//以下是通用的投注相关的功能
//========================================================
var loadDanshi = {};

var multipleControls = function() {
  //console.log('multipleControlsmultipleControlsmultipleControls');
  !function(){//增加+-号控制倍数按钮
		$('.multiple').append('<span class="addm">+</span>');
		$('.multiple').prepend('<span class="subm">-</span>');
		$('.lottery-betting .addm').off('click').on("click",function(){
			var event = $.Event("keydown");
			event.keyCode = 38;
			$(this).prev().trigger(event);
			$(this).prev().trigger("keyup");
		});
		$('.lottery-betting .subm').off('click').on("click",function(){
			var event = $.Event("keydown");
			event.keyCode = 40;
			$(this).next().trigger(event);
			$(this).next().trigger("keyup");
		});
	}();
}

$(document).ready(function() {

  $('body').on('click',function(e) {
    if (typeof $('.quickgo', window.parent.document) !='undefined') {
      if (typeof $('.quickgo', window.parent.document).attr('shown') !='undefined') {
        if (typeof window.parent !='undefined') {
          window.parent.toggleLeftBar()
        }
      }
    }
  });

	multipleControls();

	!function(){//行前序号
		$('.lottery-betting').delegate('[data-command="add"]',"click",function(){
 			var $trs = $('.lottery-record tr');
			$trs.each(function(){
				//$(this).find('.content').prepend($(this).index()+1);
			});
		});
	}();

	$('.lottery-record .total').append([
    //'<div class="total">第<span data-field="global-expect">00000000</span>期投注截止时间  <span data-field="global-last-time">00:00:00</span>  &nbsp;&nbsp;订单总计 <span data-field="sum-order">0</span> 个  &nbsp;&nbsp;总注数 <span data-field="sum-num">0</span> 注  &nbsp;&nbsp;总金额 ¥ <span data-field="sum-money">0</span> 元</div>'
    //'<div class="total">订单总计 <span data-field="sum-order">0</span> 个  &nbsp;&nbsp;总注数 <span data-field="sum-num">0</span> 注  &nbsp;&nbsp;总金额 ¥ <span data-field="sum-money">0</span> 元</div>'
    '<div class="total-inner"><h5>总注数</h5><span data-field="sum-num">0</span>注<h5 class="nextlines">总金额</h5> ¥<span data-field="sum-money">0</span>元</div>'
    ].join('')
  );
	var sumAll = function(){//计算总注数总金额
		if(!$('.lottery-record')) return;
		var mul = 0;
		var num = 0;
		var total = 0;
		var domNum = $('.lottery-record .list .nandm');
		domNum.each(function(){
			 num=compt.add(num,parseFloat($(this).attr('rel')));
		});
		$('.lottery-record .list .total').each(function(){
			total=compt.add(total,parseFloat($(this).text()));
		});
		$('[data-field="sum-order"]').text(domNum.size());
    //console.log(num,'numnumnumnumnumnumnumnumnumnum');
		$('[data-field="sum-num"]').text(num);
		$('[data-field="sum-money"]').text(total.toFixed(3));
		setTimeout(sumAll,500);
	};
	if($('[data-field="sum-num"]').size()>0){
    sumAll();
  }

	//投注列表的倍数修改和模式修改
	LotteryMain!=null && LotteryMain.addCallback(function() {
		var $tr = $('.lottery-record tr:last-child');
		if($tr.data('initialized')) return ;
		var $mul = $tr.find('.multiple')
		var mulHtml = $tr.find('.multiple').html();
		var $mulInput = $('<input name="multiple" type="text" value="'+parseInt(mulHtml) +'">');
		$mulInput.after('<span>倍</span>');
		$mul.html($mulInput);
		$mul.append('<span>倍</span>');
		var blist = LotteryMain.bList();
		var data = blist[$tr.index()];

		var strVar = "";
		strVar += "<select>";
		strVar += "        <option value='yuan'>元<\/option>";
		strVar += "        <option value='jiao'>角<\/option>";
		strVar += "        <option value='fen'>分<\/option>";
		strVar += "        <option value='li'>厘<\/option>";
		strVar += "<\/select>";
		var $select = $(strVar);
		$select.val(data.model);
		$tr.find('.multiple').after($select);
		$select.wrap("<td></td>");

		$mulInput.blur(function() {//倍数输入事件
			{//格式
				if($(this).val() == '') return;
				var val = $(this).val();
				if(/^[0-9]*$/.test(val)) {
					val = Number(val);
					if(val > 10000) $(this).val(10000);
					if(val < 1) $(this).val(1);
				} else {
					$(this).val(1);
				}
			}
			{//计算
				var oldMul=data.multiple;
				var newMul=$(this).val();
				data.multiple=newMul;
				var $total = $(this).parent().nextAll('.total');
        //$total.html((parseInt($total.html())/oldMul*newMul).toFixed(3) + '元');
				$total.html(compt.mul(compt.div(parseFloat($total.html()),oldMul),newMul).toFixed(3) + '元');
			}
		});

		$select.change(function(){
			var model = $(this).val();
			var scale = 1;
			var oldScale = m2s(data.model);
			var newScale = m2s(model);
			data.model = model;
			var $total = $(this).parent().nextAll('.total');
   		//$total.html((parseInt($total.html())/oldScale*newScale).toFixed(3) + '元');
			$total.html(compt.mul(compt.div(parseFloat($total.html()),oldScale),newScale).toFixed(3) + '元');

			function m2s(model){
				var scale = 1;
				if(model == 'yuan') { scale = 1; }
				else if(model == 'jiao') { scale =  0.1; }
				else if(model == 'fen') { scale =  0.01; }
				else if(model == 'li') { scale = 0.001; }
					return scale;
				}
			});

			$tr.data('initialized',true);
	});

  var returnTip = function(id) {
    var ltgroups={
      'ssc':[11,18,15,16,19,911],
      'pk10':[43,204,47],
      '11y':[24,21,23,22,25,26,28],
      '3d':[41,42],
      'k3':[33,35,36,31,32],
      'kl8':[7,8]
    };
    var limitnum = '400000';
    $.inArray(id,ltgroups['pk10'])>-1 ? limitnum= '200000' : true;
    $.inArray(id,ltgroups['11y'])>-1 ? limitnum= '200000' : true;
    $.inArray(id,ltgroups['3d'])>-1 ? limitnum= '100000' : true;
    $.inArray(id,ltgroups['k3'])>-1 ? limitnum= '200000' : true;
    $.inArray(id,ltgroups['kl8'])>-1 ? limitnum= '200000' : true;
    return limitnum;
  }

  var issupzuo = function(id) {
    if ($.inArray(id,[11,18,15,16,19,9])>-1) {
      return true;
    }
    return false;
  }

	//一键投注
	$(".button,.lottery-firepart").find('[data-command="quick"]').unbind('click').click(function(){
		/*if($('[data-injection="order-list"]').bootstrapTable('getData').length){
			App.alert('warning', '提示消息', "请先完成购彩栏中的订单，如没有完成不能快速投注！");
			return ;
		}*/
		var num = parseInt($('.play-options [data-field="num"]').html());
		if(num==0) {
			App.alert('warning', '提示消息', "您还没选择号码！");
			return;
		}
    //$('[data-command="clear"]').click();

    var unitMoney = 1; // 单倍投注金额
    var maxMultiple = 10000; // 最大投注限额
    var modelPoint = function() {
      var points ={
        'yuan':1,'jiao':0.1,'fen':0.01,'li':0.001
      }
      return points[$('.model a.selected').data('val')]
    }
    var calculate = function(num, amount, multi) {
      var unitAmountYuan = num * unitMoney; // 单倍元模式投注金额
      var result;
      //console.log(amount,unitAmountYuan,'calculatecalculatecalculatecalculate');
      //amount = amount/parseInt($('.play-options [name="multiple"]').val(),10);
      if (amount >= unitAmountYuan) {
        var multiple = parseInt(amount / unitAmountYuan);
        var total = unitAmountYuan * multiple;
        if (multiple <= maxMultiple) {
          result = {
            model: 'yuan',
            multiple: multiple==1 ? (multi>maxMultiple ? maxMultiple : multi) : multiple,
            total: total
          };
        }
      }
      var unitAmountJiao = unitAmountYuan * 0.1; // 单倍角模式投注金额
      //console.log(amount,unitAmountJiao,amount >= unitAmountJiao);
      if (amount >= unitAmountJiao) {
        var multiple = parseInt(amount / unitAmountJiao);
        var total = unitAmountJiao * multiple;
        var isReplace = true;
        //console.log(multiple <= maxMultiple);
        if (multiple <= maxMultiple) {
          if (result) {
            if (total - result.total <= 1) {
              isReplace =  false;
            }
          }
          if (isReplace) {
            result = {
              model: 'jiao',
              multiple: multiple==1 ? (multi>maxMultiple ? maxMultiple : multi) : multiple,
              total: total
            };
            //console.log(result,'jiao');
          }
        }
      }
      var unitAmountFen = unitAmountJiao * 0.1; // 单倍分模式投注金额
      unitAmountFen = new Number(unitAmountFen).toFixed(2);
      //amount = new Number(amount).toFixed(2);
      //console.log(amount >= unitAmountFen,amount,unitAmountFen);
      if (parseFloat(amount) >= parseFloat(unitAmountFen)) {
        var multiple = parseInt(amount / unitAmountFen);
        var total = unitAmountFen * multiple;
        var isReplace = true;
        //console.log(multiple <= maxMultiple);
        if (multiple <= maxMultiple) {
          if (result) {
            if (total - result.total <= 0.1) {
              isReplace =  false;
            }
          }
          if (isReplace) {
            result = {
              model: 'fen',
              multiple: multiple==1 ? (multi>maxMultiple ? maxMultiple : multi) : multiple,
              total: total
            };
          }
        }
      }
      var unitAmountLi = unitAmountFen * 0.1; // 单倍厘模式投注金额
      //amount = new Number(amount).toFixed(2);
      //unitAmountLi = new Number(unitAmountLi);
      unitAmountLi = new Number(unitAmountLi).toFixed(3);
      //console.log(amount,unitAmountLi);
      if (amount >= unitAmountLi) {
        var multiple = parseInt(amount / unitAmountLi);
        var total = unitAmountLi * multiple;
        var isReplace = true;
        if (multiple <= maxMultiple) {
          if (result) {
            if (total - result.total <= 0.01) {
              isReplace =  false;
            }
          }
          //console.log(isReplace,multiple);
          if (isReplace) {
            result = {
              model: 'li',
              multiple: multiple==1 ? (multi>maxMultiple ? maxMultiple : multi) : multiple,
              total: total
            };
          }
        }
      }
      var newModel;
      //console.log(result);
      if(result.model=="yuan") newModel = 0;
      if(result.model=="jiao") newModel = 1;
      if(result.model=="fen") newModel = 2;
      if(result.model=="li") newModel = 3;
      //console.log(result.multiple,'result.multipleresult.multipleresult.multiple');
      $('.play-options [name="multiple"]').val(result.multiple);
      $('.play-options [name="multiple"]').trigger("keyup");
      $('.play-options .model a').eq(newModel).click();
      //$('[data-injection="order-list"]').bootstrapTable("removeAll");
      $('.btn-big[data-command="submit"]').click();
      //$('[name="multiple"]').val(1);
    }

    var amount = num*unitMoney*parseFloat(modelPoint());
    var chkamount = amount*parseInt($('.play-options [name="multiple"]').val(),10);
    //console.log(amount,chkamount,'chkamountchkamountchkamountchkamount');
    /*if (chkamount<0.01) {
      App.alert('warning', '提示消息', "使用厘模式进行投注，单注注单最小金额为0.01元！");
      return;
    }*/
    //console.log(amount,'amount',parseInt($('.play-options [name="multiple"]').val(),10));
    calculate(num,amount,parseInt($('.play-options [name="multiple"]').val(),10));
//		BootstrapDialog.show({
//			cssClass:'quick-bet',
//			title: '<i class="icon lock"></i>快速投注',
//			message:function(){
//          return [
//            //"<div class='cftip lname'>彩种："+GameData.getInfo().showName+"</div>",
//            "<div class='cftip lname'>你确认加入第"+$('.lottery-open-info [data-field="global-expect"]').text()+"期？</div>",
//            "<div class='cftip totalm'>总注数："+$('span.text-money[data-field="num"]').text()+"</div>",
//            "<div class='cftip totalm'>订单笔数：1</div>","<div class='cftip totalm'>是否追号：否</div>",
//            //"<div class='cftip digest'>"+$('.play-list .selected').parent().find('>.label').text()+","+$('.play-list .selected').text()+" "+$('.ks_btn').attr('summary')+"</div>",
//            "<div class='cftip totalm'>投注总额："+$('span.text-money[data-field="total"]').text()+"元</div>",
//            "<div class='cftip aboutmax'>温馨提示：本期最高奖金限额"+returnTip(GameData.getInfo().id)+"万，请会员谨慎投注！</div>"
//          ].join('');
//				}(),
//			buttons: [{
//				label: '确定投注',
//				action: function(dialog) {
//					/*var unitMoney = 2; // 单倍投注金额
//					var maxMultiple = 10000; // 最大投注限额
//					var calculate = function(num, amount) {
//						var unitAmountYuan = num * unitMoney; // 单倍元模式投注金额
//						var result;
//            //console.log(amount,unitAmountYuan);
//						if (amount >= unitAmountYuan) {
//							var multiple = parseInt(amount / unitAmountYuan);
//							var total = unitAmountYuan * multiple;
//							if (multiple <= maxMultiple) {
//								result = {
//									model: 'yuan',
//									multiple: multiple,
//									total: total
//								};
//							}
//						}
//						var unitAmountJiao = unitAmountYuan * 0.1; // 单倍角模式投注金额
//						if (amount >= unitAmountJiao) {
//							var multiple = parseInt(amount / unitAmountJiao);
//							var total = unitAmountJiao * multiple;
//							var isReplace = true;
//							if (multiple <= maxMultiple) {
//								if (result) {
//									if (total - result.total <= 1) {
//										isReplace =  false;
//									}
//								}
//								if (isReplace) {
//                  result = {
//										model: 'jiao',
//										multiple: multiple,
//										total: total
//									};
//                  //console.log(result,'jiao');
//								}
//							}
//						}
//						var unitAmountFen = unitAmountJiao * 0.1; // 单倍分模式投注金额
//            unitAmountFen = new Number(unitAmountFen).toFixed(2);
//						if (amount >= unitAmountFen) {
//							var multiple = parseInt(amount / unitAmountFen);
//							var total = unitAmountFen * multiple;
//							var isReplace = true;
//							if (multiple <= maxMultiple) {
//								if (result) {
//									if (total - result.total <= 0.1) {
//										isReplace =  false;
//									}
//								}
//								if (isReplace) {
//									result = {
//										model: 'fen',
//										multiple: multiple,
//										total: total
//									};
//								}
//							}
//						}
//						var unitAmountLi = unitAmountFen * 0.1; // 单倍厘模式投注金额
//						unitAmountLi = new Number(unitAmountLi).toFixed(3);
//            if (amount >= unitAmountLi) {
//							var multiple = parseInt(amount / unitAmountLi);
//							var total = unitAmountLi * multiple;
//              var isReplace = true;
//							if (multiple <= maxMultiple) {
//								if (result) {
//									if (total - result.total <= 0.01) {
//										isReplace =  false;
//									}
//								}
//                if (isReplace) {
//                  result = {
//                    model: 'li',
//                    multiple: multiple,
//                    total: total
//                  };
//                }
//							}
//						}
//						var newModel;
//            //console.log(result);
//						if(result.model=="yuan") newModel = 0;
//						if(result.model=="jiao") newModel = 1;
//						if(result.model=="fen") newModel = 2;
//						if(result.model=="li") newModel = 3;
//						$('.play-options [name="multiple"]').val(result.multiple);
//						$('.play-options [name="multiple"]').trigger("keyup");
//						$('.play-options .model a').eq(newModel).click();
//						//$('[data-injection="order-list"]').bootstrapTable("removeAll");
//						$('[data-command="submit"]').click();
//						$('[name="multiple"]').val(1);
//					}
//					//var data = $('[data-injection="quick-bet"]').bootstrapTable('getSelections');
//          var modelPoint = function() {
//            var points ={
//              'yuan':1,'jiao':0.1,'fen':0.01,'li':0.001
//            }
//            return points[$('.model a.selected').data('val')]
//          }
//          var amount = parseInt($('input[name=multiple]').first().val(),10)*num*unitMoney*parseFloat(modelPoint());
//          //console.log(amount);
//          if (amount<0.01) {
//            App.alert('warning', '提示消息', "使用厘模式进行投注，单注注单最小金额为0.01元！");
//			      dialog.close();
//            return;
//          }*/
//					calculate(num,amount);
//			 		dialog.close();
//				}
//			}, {
//				label: '取消',
//				action: function(dialog) {
//					dialog.close();
//				}
//			}]
//		});
	});

  //做号投注1-3星
  var maingenNumbers = function(method,tags,allchoose,btn) {
    //console.log(method,tags,allchoose,'mtallchooseallchoose');
    if (typeof allchoose['gen-shi-without'] !='undefined') {
      if (allchoose['gen-shi-without'].length==0 || (allchoose['gen-shi-without'].length>0 && typeof allchoose['gen-shi-without'][0] == 'number')) {
        allchoose['gen-shi-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      }
    }else {
      allchoose['gen-shi-without']=[];
      allchoose['gen-shi-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    if (typeof allchoose['gen-ge-without'] =='undefined') {
      allchoose['gen-ge-without']=[];
    }
    if (allchoose['gen-ge-without'].length==0 || (allchoose['gen-ge-without'].length>0 && typeof allchoose['gen-ge-without'][0] == 'number')) {
      allchoose['gen-ge-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    if (typeof allchoose['gen-bai-without'] =='undefined') {
      allchoose['gen-bai-without']=[];
    }
    if (allchoose['gen-bai-without'].length==0 || (allchoose['gen-bai-without'].length>0 && typeof allchoose['gen-bai-without'][0] == 'number')) {
      allchoose['gen-bai-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    if (typeof allchoose['gen-qian-without'] =='undefined') {
      allchoose['gen-qian-without']=[];
    }
    if (allchoose['gen-qian-without'].length==0 || (allchoose['gen-qian-without'].length>0 && typeof allchoose['gen-qian-without'][0] == 'number')) {
      allchoose['gen-qian-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    if (typeof allchoose['gen-wan-without'] =='undefined') {
      allchoose['gen-wan-without']=[];
    }
    if (allchoose['gen-wan-without'].length==0 || (allchoose['gen-wan-without'].length>0 && typeof allchoose['gen-wan-without'][0] == 'number')) {
      allchoose['gen-wan-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    if (typeof allchoose['gen-hezhi-without'] =='undefined') {
      allchoose['gen-hezhi-without']=[];
    }
    if (allchoose['gen-hezhi-without'].length==0 || (allchoose['gen-hezhi-without'].length>0 && typeof allchoose['gen-hezhi-without'][0] == 'number')) {
      allchoose['gen-hezhi-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18]);
    }
    if (typeof allchoose['gen-hewei-without'] != 'undefined') {
      allchoose['gen-hewei-without'].unshift([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    //console.log(_.without.apply(this,allchoose['gen-shi-without']));
    var shiarray = _.without.apply(this,allchoose['gen-shi-without']);
    var gearray = _.without.apply(this,allchoose['gen-ge-without']);
    var baiarray = _.without.apply(this,allchoose['gen-bai-without']);
    var qianarray = _.without.apply(this,allchoose['gen-qian-without']);
    var wanarray = _.without.apply(this,allchoose['gen-wan-without']);
    //console.log(baiarray,'baiarraybaiarraybaiarray');

    if (typeof allchoose['gen-hewei-without'] =='undefined') {
      allchoose['gen-hewei-without']=[];
    }
    var heweiarray = allchoose['gen-hewei-without'];
    if (typeof allchoose['gen-kuadu-without'] =='undefined') {
      allchoose['gen-kuadu-without']=[];
    }
    var kuaduarray = allchoose['gen-kuadu-without'];
    var danmaarray = allchoose['gen-danma'];
    var hezhiarray = allchoose['gen-hezhi-without'];
    var daxiaoarray = allchoose['gen-daxiao-without'];
    var yierluarray = allchoose['gen-yierlu-without'];
    var lianxuarray = allchoose['gen-lianxu-without'];
    var yierluwithout = [];
    var allnum = [];
    var union,union_part_1,union_part_2;
    if (tags=='h2') {
      $('.play-groups li.ex a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [shiarray,gearray];
    }
    if (tags=='q2') {
      $('.play-groups li.ex a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [shiarray,gearray];
    }
    if (tags=='q3') {
      $('.play-groups li.q3 a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [baiarray,shiarray,gearray];
    }
    if (tags=='z3') {
      $('.play-groups li.z3 a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [baiarray,shiarray,gearray];
    }
    if (tags=='h3') {
      $('.play-groups li.h3 a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [baiarray,shiarray,gearray];
    }
    if (tags=='h4') {
      $('.play-groups li.h4 a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [qianarray,baiarray,shiarray,gearray];
    }
    if (tags=='wx') {
      $('.play-groups li.wx a').click();
      $('.play-list [data-method="'+method+'"]').click();
      allnum = [wanarray,qianarray,baiarray,shiarray,gearray];
    }
    if (typeof danmaarray !='undefined') {
      shiarray = _.intersection(shiarray,danmaarray);
      allnum = [shiarray,gearray];
      //console.log(allnum,'p1',shiarray.length==0);
      if (shiarray.length==0) {
        union_part_1=[];
      }else {

        cp0 = Combinatorics.cartesianProduct.apply(this,allnum);
        union_part_1 = cp0.toArrayStr();
      }
    }

    //console.log(shiarray,'lianxuarray');
    //console.log(allnum,'allnumallnum');
    for (ci = 0; ci < allnum.length; ci++) {
      if (allnum[ci].length==0) {
        $('.generate-bet #danshitext').val('');
        $('.generate-bet #gen-cleanall').click();
        return false;
      }
    }

    if (typeof danmaarray =='undefined'){
      cp = Combinatorics.cartesianProduct.apply(this,allnum);
    }
    if (typeof danmaarray !='undefined') {
      shiarray_1 = _.without.apply(this,allchoose['gen-shi-without']);
      gearray_1 = _.intersection(_.without.apply(this,allchoose['gen-ge-without']),danmaarray);
      allnum_1 = [shiarray_1,gearray_1];
      //console.log(allnum_1,'p2');
      if (gearray_1.length==0) {
        union_part_2 =[];
      }else {
        cp1 = Combinatorics.cartesianProduct.apply(this,allnum_1);
        union_part_2 = cp1.toArrayStr();
      }

    }
    if (typeof lianxuarray =='undefined') {
      lianxuarray = [];
    }
    if (typeof danmaarray =='undefined'){
      if (typeof daxiaoarray =='undefined') {
        daxiaoarray=[];
      }
      if (typeof yierluarray !='undefined') {
        var zot,allzot=[];
        var yierludict ={
          '0':[0, 3, 6, 9],
          '1':[1,4,7],
          '2':[2,5,8]
        }
        for (i = 0; i < yierluarray.length; i++) {
          var twoindex = yierluarray[i].split('');
          if (twoindex.length==2) {
            zot = Combinatorics.cartesianProduct(yierludict[twoindex[0]],yierludict[twoindex[1]]);
          }
          if (twoindex.length==3) {
            zot = Combinatorics.cartesianProduct(yierludict[twoindex[0]],yierludict[twoindex[1]],yierludict[twoindex[2]]);
          }
          allzot = _.union(allzot,zot.toArrayStr())
        }
        var totalgp = cp.toArraySumLast(null,false,heweiarray,kuaduarray,hezhiarray,daxiaoarray,lianxuarray);
        //console.log(allzot,'allzotallzotallzotallzot');
        var lastdiff = _.difference(totalgp, allzot);
        $('.generate-bet #danshitext').val(lastdiff.join(' '));
        $('.generate-bet #gen-totaldeal').html(lastdiff.length);
      }else {
        //console.log(heweiarray,kuaduarray,hezhiarray,daxiaoarray,lianxuarray,'heweiarray,kuaduarray,hezhiarray,daxiaoarray,lianxuarray');
        $('.generate-bet #danshitext').val(cp.toArraySumLast(null,' ',heweiarray,kuaduarray,hezhiarray,daxiaoarray,lianxuarray));
        $('.generate-bet #gen-totaldeal').html(cp.resLen());
      }

    }else {
      union = _.union(union_part_1,union_part_2);
      $('.generate-bet #danshitext').val(union.join(' '));
      $('.generate-bet #gen-totaldeal').html(union.length);
    }
    $('.lottery-betting .play-area .textarea textarea').val($('.generate-bet #danshitext').val()).keyup();
    btn.removeClass('loading').html('立即生成');
  }

  //做号4星
  var manualNumbersShi = function(method,tags,allchoose,btn) {
    var t= this;
    var shiarray = typeof allchoose['gen-shi-without'] !='undefined' ? allchoose['gen-shi-without'] : [];
    var gearray = typeof allchoose['gen-ge-without'] !='undefined' ? allchoose['gen-ge-without'] : [];
    var baiarray = typeof allchoose['gen-bai-without'] !='undefined' ? allchoose['gen-bai-without'] : [];
    var qianarray = typeof allchoose['gen-qian-without'] !='undefined' ? allchoose['gen-qian-without'] : [];

    (gearray.length==1 && gearray[0].length==10) ? (allchoose['gen-ge-without']=[],gearray=[]) :!0;
    (shiarray.length==1 && shiarray[0].length==10) ? (allchoose['gen-shi-without']=[],shiarray=[]) :!0;
    (baiarray.length==1 && baiarray[0].length==10) ? (allchoose['gen-bai-without']=[],baiarray=[]) :!0;
    (qianarray.length==1 && qianarray[0].length==10) ? (allchoose['gen-qian-without']=[],qianarray=[]) :!0;
    //console.log(shiarray,gearray,baiarray,qianarray);


    if (tags=='h4') {
      $('.play-groups li.h4 a').click();
      $('.play-list [data-method="'+method+'"]').click();
    }

    //和位杀
    var heweiarray = typeof allchoose['gen-hewei-without'] !='undefined' ? allchoose['gen-hewei-without'] : [];
    var kuaduarray = typeof allchoose['gen-kuadu-without'] !='undefined' ? allchoose['gen-kuadu-without'] : [];
    var danmaarray = typeof allchoose['gen-danma'] !='undefined' ? allchoose['gen-danma'] : [];
    var hezhiarray = typeof allchoose['gen-hezhi-without'] !='undefined' ? allchoose['gen-hezhi-without'] : [];
    var daxiaoarray = typeof allchoose['gen-daxiao-without'] !='undefined' ? allchoose['gen-daxiao-without'] : [];
    var teshuarray = typeof allchoose['gen-lianxu-without'] !='undefined' ? allchoose['gen-lianxu-without'] : [];


    var all = '0000 1000 2000 3000 4000 5000 6000 7000 8000 9000 0100 1100 2100 3100 4100 5100 6100 7100 8100 9100 0200 1200 2200 3200 4200 5200 6200 7200 8200 9200 0300 1300 2300 3300 4300 5300 6300 7300 8300 9300 0400 1400 2400 3400 4400 5400 6400 7400 8400 9400 0500 1500 2500 3500 4500 5500 6500 7500 8500 9500 0600 1600 2600 3600 4600 5600 6600 7600 8600 9600 0700 1700 2700 3700 4700 5700 6700 7700 8700 9700 0800 1800 2800 3800 4800 5800 6800 7800 8800 9800 0900 1900 2900 3900 4900 5900 6900 7900 8900 9900 0010 1010 2010 3010 4010 5010 6010 7010 8010 9010 0110 1110 2110 3110 4110 5110 6110 7110 8110 9110 0210 1210 2210 3210 4210 5210 6210 7210 8210 9210 0310 1310 2310 3310 4310 5310 6310 7310 8310 9310 0410 1410 2410 3410 4410 5410 6410 7410 8410 9410 0510 1510 2510 3510 4510 5510 6510 7510 8510 9510 0610 1610 2610 3610 4610 5610 6610 7610 8610 9610 0710 1710 2710 3710 4710 5710 6710 7710 8710 9710 0810 1810 2810 3810 4810 5810 6810 7810 8810 9810 0910 1910 2910 3910 4910 5910 6910 7910 8910 9910 0020 1020 2020 3020 4020 5020 6020 7020 8020 9020 0120 1120 2120 3120 4120 5120 6120 7120 8120 9120 0220 1220 2220 3220 4220 5220 6220 7220 8220 9220 0320 1320 2320 3320 4320 5320 6320 7320 8320 9320 0420 1420 2420 3420 4420 5420 6420 7420 8420 9420 0520 1520 2520 3520 4520 5520 6520 7520 8520 9520 0620 1620 2620 3620 4620 5620 6620 7620 8620 9620 0720 1720 2720 3720 4720 5720 6720 7720 8720 9720 0820 1820 2820 3820 4820 5820 6820 7820 8820 9820 0920 1920 2920 3920 4920 5920 6920 7920 8920 9920 0030 1030 2030 3030 4030 5030 6030 7030 8030 9030 0130 1130 2130 3130 4130 5130 6130 7130 8130 9130 0230 1230 2230 3230 4230 5230 6230 7230 8230 9230 0330 1330 2330 3330 4330 5330 6330 7330 8330 9330 0430 1430 2430 3430 4430 5430 6430 7430 8430 9430 0530 1530 2530 3530 4530 5530 6530 7530 8530 9530 0630 1630 2630 3630 4630 5630 6630 7630 8630 9630 0730 1730 2730 3730 4730 5730 6730 7730 8730 9730 0830 1830 2830 3830 4830 5830 6830 7830 8830 9830 0930 1930 2930 3930 4930 5930 6930 7930 8930 9930 0040 1040 2040 3040 4040 5040 6040 7040 8040 9040 0140 1140 2140 3140 4140 5140 6140 7140 8140 9140 0240 1240 2240 3240 4240 5240 6240 7240 8240 9240 0340 1340 2340 3340 4340 5340 6340 7340 8340 9340 0440 1440 2440 3440 4440 5440 6440 7440 8440 9440 0540 1540 2540 3540 4540 5540 6540 7540 8540 9540 0640 1640 2640 3640 4640 5640 6640 7640 8640 9640 0740 1740 2740 3740 4740 5740 6740 7740 8740 9740 0840 1840 2840 3840 4840 5840 6840 7840 8840 9840 0940 1940 2940 3940 4940 5940 6940 7940 8940 9940 0050 1050 2050 3050 4050 5050 6050 7050 8050 9050 0150 1150 2150 3150 4150 5150 6150 7150 8150 9150 0250 1250 2250 3250 4250 5250 6250 7250 8250 9250 0350 1350 2350 3350 4350 5350 6350 7350 8350 9350 0450 1450 2450 3450 4450 5450 6450 7450 8450 9450 0550 1550 2550 3550 4550 5550 6550 7550 8550 9550 0650 1650 2650 3650 4650 5650 6650 7650 8650 9650 0750 1750 2750 3750 4750 5750 6750 7750 8750 9750 0850 1850 2850 3850 4850 5850 6850 7850 8850 9850 0950 1950 2950 3950 4950 5950 6950 7950 8950 9950 0060 1060 2060 3060 4060 5060 6060 7060 8060 9060 0160 1160 2160 3160 4160 5160 6160 7160 8160 9160 0260 1260 2260 3260 4260 5260 6260 7260 8260 9260 0360 1360 2360 3360 4360 5360 6360 7360 8360 9360 0460 1460 2460 3460 4460 5460 6460 7460 8460 9460 0560 1560 2560 3560 4560 5560 6560 7560 8560 9560 0660 1660 2660 3660 4660 5660 6660 7660 8660 9660 0760 1760 2760 3760 4760 5760 6760 7760 8760 9760 0860 1860 2860 3860 4860 5860 6860 7860 8860 9860 0960 1960 2960 3960 4960 5960 6960 7960 8960 9960 0070 1070 2070 3070 4070 5070 6070 7070 8070 9070 0170 1170 2170 3170 4170 5170 6170 7170 8170 9170 0270 1270 2270 3270 4270 5270 6270 7270 8270 9270 0370 1370 2370 3370 4370 5370 6370 7370 8370 9370 0470 1470 2470 3470 4470 5470 6470 7470 8470 9470 0570 1570 2570 3570 4570 5570 6570 7570 8570 9570 0670 1670 2670 3670 4670 5670 6670 7670 8670 9670 0770 1770 2770 3770 4770 5770 6770 7770 8770 9770 0870 1870 2870 3870 4870 5870 6870 7870 8870 9870 0970 1970 2970 3970 4970 5970 6970 7970 8970 9970 0080 1080 2080 3080 4080 5080 6080 7080 8080 9080 0180 1180 2180 3180 4180 5180 6180 7180 8180 9180 0280 1280 2280 3280 4280 5280 6280 7280 8280 9280 0380 1380 2380 3380 4380 5380 6380 7380 8380 9380 0480 1480 2480 3480 4480 5480 6480 7480 8480 9480 0580 1580 2580 3580 4580 5580 6580 7580 8580 9580 0680 1680 2680 3680 4680 5680 6680 7680 8680 9680 0780 1780 2780 3780 4780 5780 6780 7780 8780 9780 0880 1880 2880 3880 4880 5880 6880 7880 8880 9880 0980 1980 2980 3980 4980 5980 6980 7980 8980 9980 0090 1090 2090 3090 4090 5090 6090 7090 8090 9090 0190 1190 2190 3190 4190 5190 6190 7190 8190 9190 0290 1290 2290 3290 4290 5290 6290 7290 8290 9290 0390 1390 2390 3390 4390 5390 6390 7390 8390 9390 0490 1490 2490 3490 4490 5490 6490 7490 8490 9490 0590 1590 2590 3590 4590 5590 6590 7590 8590 9590 0690 1690 2690 3690 4690 5690 6690 7690 8690 9690 0790 1790 2790 3790 4790 5790 6790 7790 8790 9790 0890 1890 2890 3890 4890 5890 6890 7890 8890 9890 0990 1990 2990 3990 4990 5990 6990 7990 8990 9990 0001 1001 2001 3001 4001 5001 6001 7001 8001 9001 0101 1101 2101 3101 4101 5101 6101 7101 8101 9101 0201 1201 2201 3201 4201 5201 6201 7201 8201 9201 0301 1301 2301 3301 4301 5301 6301 7301 8301 9301 0401 1401 2401 3401 4401 5401 6401 7401 8401 9401 0501 1501 2501 3501 4501 5501 6501 7501 8501 9501 0601 1601 2601 3601 4601 5601 6601 7601 8601 9601 0701 1701 2701 3701 4701 5701 6701 7701 8701 9701 0801 1801 2801 3801 4801 5801 6801 7801 8801 9801 0901 1901 2901 3901 4901 5901 6901 7901 8901 9901 0011 1011 2011 3011 4011 5011 6011 7011 8011 9011 0111 1111 2111 3111 4111 5111 6111 7111 8111 9111 0211 1211 2211 3211 4211 5211 6211 7211 8211 9211 0311 1311 2311 3311 4311 5311 6311 7311 8311 9311 0411 1411 2411 3411 4411 5411 6411 7411 8411 9411 0511 1511 2511 3511 4511 5511 6511 7511 8511 9511 0611 1611 2611 3611 4611 5611 6611 7611 8611 9611 0711 1711 2711 3711 4711 5711 6711 7711 8711 9711 0811 1811 2811 3811 4811 5811 6811 7811 8811 9811 0911 1911 2911 3911 4911 5911 6911 7911 8911 9911 0021 1021 2021 3021 4021 5021 6021 7021 8021 9021 0121 1121 2121 3121 4121 5121 6121 7121 8121 9121 0221 1221 2221 3221 4221 5221 6221 7221 8221 9221 0321 1321 2321 3321 4321 5321 6321 7321 8321 9321 0421 1421 2421 3421 4421 5421 6421 7421 8421 9421 0521 1521 2521 3521 4521 5521 6521 7521 8521 9521 0621 1621 2621 3621 4621 5621 6621 7621 8621 9621 0721 1721 2721 3721 4721 5721 6721 7721 8721 9721 0821 1821 2821 3821 4821 5821 6821 7821 8821 9821 0921 1921 2921 3921 4921 5921 6921 7921 8921 9921 0031 1031 2031 3031 4031 5031 6031 7031 8031 9031 0131 1131 2131 3131 4131 5131 6131 7131 8131 9131 0231 1231 2231 3231 4231 5231 6231 7231 8231 9231 0331 1331 2331 3331 4331 5331 6331 7331 8331 9331 0431 1431 2431 3431 4431 5431 6431 7431 8431 9431 0531 1531 2531 3531 4531 5531 6531 7531 8531 9531 0631 1631 2631 3631 4631 5631 6631 7631 8631 9631 0731 1731 2731 3731 4731 5731 6731 7731 8731 9731 0831 1831 2831 3831 4831 5831 6831 7831 8831 9831 0931 1931 2931 3931 4931 5931 6931 7931 8931 9931 0041 1041 2041 3041 4041 5041 6041 7041 8041 9041 0141 1141 2141 3141 4141 5141 6141 7141 8141 9141 0241 1241 2241 3241 4241 5241 6241 7241 8241 9241 0341 1341 2341 3341 4341 5341 6341 7341 8341 9341 0441 1441 2441 3441 4441 5441 6441 7441 8441 9441 0541 1541 2541 3541 4541 5541 6541 7541 8541 9541 0641 1641 2641 3641 4641 5641 6641 7641 8641 9641 0741 1741 2741 3741 4741 5741 6741 7741 8741 9741 0841 1841 2841 3841 4841 5841 6841 7841 8841 9841 0941 1941 2941 3941 4941 5941 6941 7941 8941 9941 0051 1051 2051 3051 4051 5051 6051 7051 8051 9051 0151 1151 2151 3151 4151 5151 6151 7151 8151 9151 0251 1251 2251 3251 4251 5251 6251 7251 8251 9251 0351 1351 2351 3351 4351 5351 6351 7351 8351 9351 0451 1451 2451 3451 4451 5451 6451 7451 8451 9451 0551 1551 2551 3551 4551 5551 6551 7551 8551 9551 0651 1651 2651 3651 4651 5651 6651 7651 8651 9651 0751 1751 2751 3751 4751 5751 6751 7751 8751 9751 0851 1851 2851 3851 4851 5851 6851 7851 8851 9851 0951 1951 2951 3951 4951 5951 6951 7951 8951 9951 0061 1061 2061 3061 4061 5061 6061 7061 8061 9061 0161 1161 2161 3161 4161 5161 6161 7161 8161 9161 0261 1261 2261 3261 4261 5261 6261 7261 8261 9261 0361 1361 2361 3361 4361 5361 6361 7361 8361 9361 0461 1461 2461 3461 4461 5461 6461 7461 8461 9461 0561 1561 2561 3561 4561 5561 6561 7561 8561 9561 0661 1661 2661 3661 4661 5661 6661 7661 8661 9661 0761 1761 2761 3761 4761 5761 6761 7761 8761 9761 0861 1861 2861 3861 4861 5861 6861 7861 8861 9861 0961 1961 2961 3961 4961 5961 6961 7961 8961 9961 0071 1071 2071 3071 4071 5071 6071 7071 8071 9071 0171 1171 2171 3171 4171 5171 6171 7171 8171 9171 0271 1271 2271 3271 4271 5271 6271 7271 8271 9271 0371 1371 2371 3371 4371 5371 6371 7371 8371 9371 0471 1471 2471 3471 4471 5471 6471 7471 8471 9471 0571 1571 2571 3571 4571 5571 6571 7571 8571 9571 0671 1671 2671 3671 4671 5671 6671 7671 8671 9671 0771 1771 2771 3771 4771 5771 6771 7771 8771 9771 0871 1871 2871 3871 4871 5871 6871 7871 8871 9871 0971 1971 2971 3971 4971 5971 6971 7971 8971 9971 0081 1081 2081 3081 4081 5081 6081 7081 8081 9081 0181 1181 2181 3181 4181 5181 6181 7181 8181 9181 0281 1281 2281 3281 4281 5281 6281 7281 8281 9281 0381 1381 2381 3381 4381 5381 6381 7381 8381 9381 0481 1481 2481 3481 4481 5481 6481 7481 8481 9481 0581 1581 2581 3581 4581 5581 6581 7581 8581 9581 0681 1681 2681 3681 4681 5681 6681 7681 8681 9681 0781 1781 2781 3781 4781 5781 6781 7781 8781 9781 0881 1881 2881 3881 4881 5881 6881 7881 8881 9881 0981 1981 2981 3981 4981 5981 6981 7981 8981 9981 0091 1091 2091 3091 4091 5091 6091 7091 8091 9091 0191 1191 2191 3191 4191 5191 6191 7191 8191 9191 0291 1291 2291 3291 4291 5291 6291 7291 8291 9291 0391 1391 2391 3391 4391 5391 6391 7391 8391 9391 0491 1491 2491 3491 4491 5491 6491 7491 8491 9491 0591 1591 2591 3591 4591 5591 6591 7591 8591 9591 0691 1691 2691 3691 4691 5691 6691 7691 8691 9691 0791 1791 2791 3791 4791 5791 6791 7791 8791 9791 0891 1891 2891 3891 4891 5891 6891 7891 8891 9891 0991 1991 2991 3991 4991 5991 6991 7991 8991 9991 0002 1002 2002 3002 4002 5002 6002 7002 8002 9002 0102 1102 2102 3102 4102 5102 6102 7102 8102 9102 0202 1202 2202 3202 4202 5202 6202 7202 8202 9202 0302 1302 2302 3302 4302 5302 6302 7302 8302 9302 0402 1402 2402 3402 4402 5402 6402 7402 8402 9402 0502 1502 2502 3502 4502 5502 6502 7502 8502 9502 0602 1602 2602 3602 4602 5602 6602 7602 8602 9602 0702 1702 2702 3702 4702 5702 6702 7702 8702 9702 0802 1802 2802 3802 4802 5802 6802 7802 8802 9802 0902 1902 2902 3902 4902 5902 6902 7902 8902 9902 0012 1012 2012 3012 4012 5012 6012 7012 8012 9012 0112 1112 2112 3112 4112 5112 6112 7112 8112 9112 0212 1212 2212 3212 4212 5212 6212 7212 8212 9212 0312 1312 2312 3312 4312 5312 6312 7312 8312 9312 0412 1412 2412 3412 4412 5412 6412 7412 8412 9412 0512 1512 2512 3512 4512 5512 6512 7512 8512 9512 0612 1612 2612 3612 4612 5612 6612 7612 8612 9612 0712 1712 2712 3712 4712 5712 6712 7712 8712 9712 0812 1812 2812 3812 4812 5812 6812 7812 8812 9812 0912 1912 2912 3912 4912 5912 6912 7912 8912 9912 0022 1022 2022 3022 4022 5022 6022 7022 8022 9022 0122 1122 2122 3122 4122 5122 6122 7122 8122 9122 0222 1222 2222 3222 4222 5222 6222 7222 8222 9222 0322 1322 2322 3322 4322 5322 6322 7322 8322 9322 0422 1422 2422 3422 4422 5422 6422 7422 8422 9422 0522 1522 2522 3522 4522 5522 6522 7522 8522 9522 0622 1622 2622 3622 4622 5622 6622 7622 8622 9622 0722 1722 2722 3722 4722 5722 6722 7722 8722 9722 0822 1822 2822 3822 4822 5822 6822 7822 8822 9822 0922 1922 2922 3922 4922 5922 6922 7922 8922 9922 0032 1032 2032 3032 4032 5032 6032 7032 8032 9032 0132 1132 2132 3132 4132 5132 6132 7132 8132 9132 0232 1232 2232 3232 4232 5232 6232 7232 8232 9232 0332 1332 2332 3332 4332 5332 6332 7332 8332 9332 0432 1432 2432 3432 4432 5432 6432 7432 8432 9432 0532 1532 2532 3532 4532 5532 6532 7532 8532 9532 0632 1632 2632 3632 4632 5632 6632 7632 8632 9632 0732 1732 2732 3732 4732 5732 6732 7732 8732 9732 0832 1832 2832 3832 4832 5832 6832 7832 8832 9832 0932 1932 2932 3932 4932 5932 6932 7932 8932 9932 0042 1042 2042 3042 4042 5042 6042 7042 8042 9042 0142 1142 2142 3142 4142 5142 6142 7142 8142 9142 0242 1242 2242 3242 4242 5242 6242 7242 8242 9242 0342 1342 2342 3342 4342 5342 6342 7342 8342 9342 0442 1442 2442 3442 4442 5442 6442 7442 8442 9442 0542 1542 2542 3542 4542 5542 6542 7542 8542 9542 0642 1642 2642 3642 4642 5642 6642 7642 8642 9642 0742 1742 2742 3742 4742 5742 6742 7742 8742 9742 0842 1842 2842 3842 4842 5842 6842 7842 8842 9842 0942 1942 2942 3942 4942 5942 6942 7942 8942 9942 0052 1052 2052 3052 4052 5052 6052 7052 8052 9052 0152 1152 2152 3152 4152 5152 6152 7152 8152 9152 0252 1252 2252 3252 4252 5252 6252 7252 8252 9252 0352 1352 2352 3352 4352 5352 6352 7352 8352 9352 0452 1452 2452 3452 4452 5452 6452 7452 8452 9452 0552 1552 2552 3552 4552 5552 6552 7552 8552 9552 0652 1652 2652 3652 4652 5652 6652 7652 8652 9652 0752 1752 2752 3752 4752 5752 6752 7752 8752 9752 0852 1852 2852 3852 4852 5852 6852 7852 8852 9852 0952 1952 2952 3952 4952 5952 6952 7952 8952 9952 0062 1062 2062 3062 4062 5062 6062 7062 8062 9062 0162 1162 2162 3162 4162 5162 6162 7162 8162 9162 0262 1262 2262 3262 4262 5262 6262 7262 8262 9262 0362 1362 2362 3362 4362 5362 6362 7362 8362 9362 0462 1462 2462 3462 4462 5462 6462 7462 8462 9462 0562 1562 2562 3562 4562 5562 6562 7562 8562 9562 0662 1662 2662 3662 4662 5662 6662 7662 8662 9662 0762 1762 2762 3762 4762 5762 6762 7762 8762 9762 0862 1862 2862 3862 4862 5862 6862 7862 8862 9862 0962 1962 2962 3962 4962 5962 6962 7962 8962 9962 0072 1072 2072 3072 4072 5072 6072 7072 8072 9072 0172 1172 2172 3172 4172 5172 6172 7172 8172 9172 0272 1272 2272 3272 4272 5272 6272 7272 8272 9272 0372 1372 2372 3372 4372 5372 6372 7372 8372 9372 0472 1472 2472 3472 4472 5472 6472 7472 8472 9472 0572 1572 2572 3572 4572 5572 6572 7572 8572 9572 0672 1672 2672 3672 4672 5672 6672 7672 8672 9672 0772 1772 2772 3772 4772 5772 6772 7772 8772 9772 0872 1872 2872 3872 4872 5872 6872 7872 8872 9872 0972 1972 2972 3972 4972 5972 6972 7972 8972 9972 0082 1082 2082 3082 4082 5082 6082 7082 8082 9082 0182 1182 2182 3182 4182 5182 6182 7182 8182 9182 0282 1282 2282 3282 4282 5282 6282 7282 8282 9282 0382 1382 2382 3382 4382 5382 6382 7382 8382 9382 0482 1482 2482 3482 4482 5482 6482 7482 8482 9482 0582 1582 2582 3582 4582 5582 6582 7582 8582 9582 0682 1682 2682 3682 4682 5682 6682 7682 8682 9682 0782 1782 2782 3782 4782 5782 6782 7782 8782 9782 0882 1882 2882 3882 4882 5882 6882 7882 8882 9882 0982 1982 2982 3982 4982 5982 6982 7982 8982 9982 0092 1092 2092 3092 4092 5092 6092 7092 8092 9092 0192 1192 2192 3192 4192 5192 6192 7192 8192 9192 0292 1292 2292 3292 4292 5292 6292 7292 8292 9292 0392 1392 2392 3392 4392 5392 6392 7392 8392 9392 0492 1492 2492 3492 4492 5492 6492 7492 8492 9492 0592 1592 2592 3592 4592 5592 6592 7592 8592 9592 0692 1692 2692 3692 4692 5692 6692 7692 8692 9692 0792 1792 2792 3792 4792 5792 6792 7792 8792 9792 0892 1892 2892 3892 4892 5892 6892 7892 8892 9892 0992 1992 2992 3992 4992 5992 6992 7992 8992 9992 0003 1003 2003 3003 4003 5003 6003 7003 8003 9003 0103 1103 2103 3103 4103 5103 6103 7103 8103 9103 0203 1203 2203 3203 4203 5203 6203 7203 8203 9203 0303 1303 2303 3303 4303 5303 6303 7303 8303 9303 0403 1403 2403 3403 4403 5403 6403 7403 8403 9403 0503 1503 2503 3503 4503 5503 6503 7503 8503 9503 0603 1603 2603 3603 4603 5603 6603 7603 8603 9603 0703 1703 2703 3703 4703 5703 6703 7703 8703 9703 0803 1803 2803 3803 4803 5803 6803 7803 8803 9803 0903 1903 2903 3903 4903 5903 6903 7903 8903 9903 0013 1013 2013 3013 4013 5013 6013 7013 8013 9013 0113 1113 2113 3113 4113 5113 6113 7113 8113 9113 0213 1213 2213 3213 4213 5213 6213 7213 8213 9213 0313 1313 2313 3313 4313 5313 6313 7313 8313 9313 0413 1413 2413 3413 4413 5413 6413 7413 8413 9413 0513 1513 2513 3513 4513 5513 6513 7513 8513 9513 0613 1613 2613 3613 4613 5613 6613 7613 8613 9613 0713 1713 2713 3713 4713 5713 6713 7713 8713 9713 0813 1813 2813 3813 4813 5813 6813 7813 8813 9813 0913 1913 2913 3913 4913 5913 6913 7913 8913 9913 0023 1023 2023 3023 4023 5023 6023 7023 8023 9023 0123 1123 2123 3123 4123 5123 6123 7123 8123 9123 0223 1223 2223 3223 4223 5223 6223 7223 8223 9223 0323 1323 2323 3323 4323 5323 6323 7323 8323 9323 0423 1423 2423 3423 4423 5423 6423 7423 8423 9423 0523 1523 2523 3523 4523 5523 6523 7523 8523 9523 0623 1623 2623 3623 4623 5623 6623 7623 8623 9623 0723 1723 2723 3723 4723 5723 6723 7723 8723 9723 0823 1823 2823 3823 4823 5823 6823 7823 8823 9823 0923 1923 2923 3923 4923 5923 6923 7923 8923 9923 0033 1033 2033 3033 4033 5033 6033 7033 8033 9033 0133 1133 2133 3133 4133 5133 6133 7133 8133 9133 0233 1233 2233 3233 4233 5233 6233 7233 8233 9233 0333 1333 2333 3333 4333 5333 6333 7333 8333 9333 0433 1433 2433 3433 4433 5433 6433 7433 8433 9433 0533 1533 2533 3533 4533 5533 6533 7533 8533 9533 0633 1633 2633 3633 4633 5633 6633 7633 8633 9633 0733 1733 2733 3733 4733 5733 6733 7733 8733 9733 0833 1833 2833 3833 4833 5833 6833 7833 8833 9833 0933 1933 2933 3933 4933 5933 6933 7933 8933 9933 0043 1043 2043 3043 4043 5043 6043 7043 8043 9043 0143 1143 2143 3143 4143 5143 6143 7143 8143 9143 0243 1243 2243 3243 4243 5243 6243 7243 8243 9243 0343 1343 2343 3343 4343 5343 6343 7343 8343 9343 0443 1443 2443 3443 4443 5443 6443 7443 8443 9443 0543 1543 2543 3543 4543 5543 6543 7543 8543 9543 0643 1643 2643 3643 4643 5643 6643 7643 8643 9643 0743 1743 2743 3743 4743 5743 6743 7743 8743 9743 0843 1843 2843 3843 4843 5843 6843 7843 8843 9843 0943 1943 2943 3943 4943 5943 6943 7943 8943 9943 0053 1053 2053 3053 4053 5053 6053 7053 8053 9053 0153 1153 2153 3153 4153 5153 6153 7153 8153 9153 0253 1253 2253 3253 4253 5253 6253 7253 8253 9253 0353 1353 2353 3353 4353 5353 6353 7353 8353 9353 0453 1453 2453 3453 4453 5453 6453 7453 8453 9453 0553 1553 2553 3553 4553 5553 6553 7553 8553 9553 0653 1653 2653 3653 4653 5653 6653 7653 8653 9653 0753 1753 2753 3753 4753 5753 6753 7753 8753 9753 0853 1853 2853 3853 4853 5853 6853 7853 8853 9853 0953 1953 2953 3953 4953 5953 6953 7953 8953 9953 0063 1063 2063 3063 4063 5063 6063 7063 8063 9063 0163 1163 2163 3163 4163 5163 6163 7163 8163 9163 0263 1263 2263 3263 4263 5263 6263 7263 8263 9263 0363 1363 2363 3363 4363 5363 6363 7363 8363 9363 0463 1463 2463 3463 4463 5463 6463 7463 8463 9463 0563 1563 2563 3563 4563 5563 6563 7563 8563 9563 0663 1663 2663 3663 4663 5663 6663 7663 8663 9663 0763 1763 2763 3763 4763 5763 6763 7763 8763 9763 0863 1863 2863 3863 4863 5863 6863 7863 8863 9863 0963 1963 2963 3963 4963 5963 6963 7963 8963 9963 0073 1073 2073 3073 4073 5073 6073 7073 8073 9073 0173 1173 2173 3173 4173 5173 6173 7173 8173 9173 0273 1273 2273 3273 4273 5273 6273 7273 8273 9273 0373 1373 2373 3373 4373 5373 6373 7373 8373 9373 0473 1473 2473 3473 4473 5473 6473 7473 8473 9473 0573 1573 2573 3573 4573 5573 6573 7573 8573 9573 0673 1673 2673 3673 4673 5673 6673 7673 8673 9673 0773 1773 2773 3773 4773 5773 6773 7773 8773 9773 0873 1873 2873 3873 4873 5873 6873 7873 8873 9873 0973 1973 2973 3973 4973 5973 6973 7973 8973 9973 0083 1083 2083 3083 4083 5083 6083 7083 8083 9083 0183 1183 2183 3183 4183 5183 6183 7183 8183 9183 0283 1283 2283 3283 4283 5283 6283 7283 8283 9283 0383 1383 2383 3383 4383 5383 6383 7383 8383 9383 0483 1483 2483 3483 4483 5483 6483 7483 8483 9483 0583 1583 2583 3583 4583 5583 6583 7583 8583 9583 0683 1683 2683 3683 4683 5683 6683 7683 8683 9683 0783 1783 2783 3783 4783 5783 6783 7783 8783 9783 0883 1883 2883 3883 4883 5883 6883 7883 8883 9883 0983 1983 2983 3983 4983 5983 6983 7983 8983 9983 0093 1093 2093 3093 4093 5093 6093 7093 8093 9093 0193 1193 2193 3193 4193 5193 6193 7193 8193 9193 0293 1293 2293 3293 4293 5293 6293 7293 8293 9293 0393 1393 2393 3393 4393 5393 6393 7393 8393 9393 0493 1493 2493 3493 4493 5493 6493 7493 8493 9493 0593 1593 2593 3593 4593 5593 6593 7593 8593 9593 0693 1693 2693 3693 4693 5693 6693 7693 8693 9693 0793 1793 2793 3793 4793 5793 6793 7793 8793 9793 0893 1893 2893 3893 4893 5893 6893 7893 8893 9893 0993 1993 2993 3993 4993 5993 6993 7993 8993 9993 0004 1004 2004 3004 4004 5004 6004 7004 8004 9004 0104 1104 2104 3104 4104 5104 6104 7104 8104 9104 0204 1204 2204 3204 4204 5204 6204 7204 8204 9204 0304 1304 2304 3304 4304 5304 6304 7304 8304 9304 0404 1404 2404 3404 4404 5404 6404 7404 8404 9404 0504 1504 2504 3504 4504 5504 6504 7504 8504 9504 0604 1604 2604 3604 4604 5604 6604 7604 8604 9604 0704 1704 2704 3704 4704 5704 6704 7704 8704 9704 0804 1804 2804 3804 4804 5804 6804 7804 8804 9804 0904 1904 2904 3904 4904 5904 6904 7904 8904 9904 0014 1014 2014 3014 4014 5014 6014 7014 8014 9014 0114 1114 2114 3114 4114 5114 6114 7114 8114 9114 0214 1214 2214 3214 4214 5214 6214 7214 8214 9214 0314 1314 2314 3314 4314 5314 6314 7314 8314 9314 0414 1414 2414 3414 4414 5414 6414 7414 8414 9414 0514 1514 2514 3514 4514 5514 6514 7514 8514 9514 0614 1614 2614 3614 4614 5614 6614 7614 8614 9614 0714 1714 2714 3714 4714 5714 6714 7714 8714 9714 0814 1814 2814 3814 4814 5814 6814 7814 8814 9814 0914 1914 2914 3914 4914 5914 6914 7914 8914 9914 0024 1024 2024 3024 4024 5024 6024 7024 8024 9024 0124 1124 2124 3124 4124 5124 6124 7124 8124 9124 0224 1224 2224 3224 4224 5224 6224 7224 8224 9224 0324 1324 2324 3324 4324 5324 6324 7324 8324 9324 0424 1424 2424 3424 4424 5424 6424 7424 8424 9424 0524 1524 2524 3524 4524 5524 6524 7524 8524 9524 0624 1624 2624 3624 4624 5624 6624 7624 8624 9624 0724 1724 2724 3724 4724 5724 6724 7724 8724 9724 0824 1824 2824 3824 4824 5824 6824 7824 8824 9824 0924 1924 2924 3924 4924 5924 6924 7924 8924 9924 0034 1034 2034 3034 4034 5034 6034 7034 8034 9034 0134 1134 2134 3134 4134 5134 6134 7134 8134 9134 0234 1234 2234 3234 4234 5234 6234 7234 8234 9234 0334 1334 2334 3334 4334 5334 6334 7334 8334 9334 0434 1434 2434 3434 4434 5434 6434 7434 8434 9434 0534 1534 2534 3534 4534 5534 6534 7534 8534 9534 0634 1634 2634 3634 4634 5634 6634 7634 8634 9634 0734 1734 2734 3734 4734 5734 6734 7734 8734 9734 0834 1834 2834 3834 4834 5834 6834 7834 8834 9834 0934 1934 2934 3934 4934 5934 6934 7934 8934 9934 0044 1044 2044 3044 4044 5044 6044 7044 8044 9044 0144 1144 2144 3144 4144 5144 6144 7144 8144 9144 0244 1244 2244 3244 4244 5244 6244 7244 8244 9244 0344 1344 2344 3344 4344 5344 6344 7344 8344 9344 0444 1444 2444 3444 4444 5444 6444 7444 8444 9444 0544 1544 2544 3544 4544 5544 6544 7544 8544 9544 0644 1644 2644 3644 4644 5644 6644 7644 8644 9644 0744 1744 2744 3744 4744 5744 6744 7744 8744 9744 0844 1844 2844 3844 4844 5844 6844 7844 8844 9844 0944 1944 2944 3944 4944 5944 6944 7944 8944 9944 0054 1054 2054 3054 4054 5054 6054 7054 8054 9054 0154 1154 2154 3154 4154 5154 6154 7154 8154 9154 0254 1254 2254 3254 4254 5254 6254 7254 8254 9254 0354 1354 2354 3354 4354 5354 6354 7354 8354 9354 0454 1454 2454 3454 4454 5454 6454 7454 8454 9454 0554 1554 2554 3554 4554 5554 6554 7554 8554 9554 0654 1654 2654 3654 4654 5654 6654 7654 8654 9654 0754 1754 2754 3754 4754 5754 6754 7754 8754 9754 0854 1854 2854 3854 4854 5854 6854 7854 8854 9854 0954 1954 2954 3954 4954 5954 6954 7954 8954 9954 0064 1064 2064 3064 4064 5064 6064 7064 8064 9064 0164 1164 2164 3164 4164 5164 6164 7164 8164 9164 0264 1264 2264 3264 4264 5264 6264 7264 8264 9264 0364 1364 2364 3364 4364 5364 6364 7364 8364 9364 0464 1464 2464 3464 4464 5464 6464 7464 8464 9464 0564 1564 2564 3564 4564 5564 6564 7564 8564 9564 0664 1664 2664 3664 4664 5664 6664 7664 8664 9664 0764 1764 2764 3764 4764 5764 6764 7764 8764 9764 0864 1864 2864 3864 4864 5864 6864 7864 8864 9864 0964 1964 2964 3964 4964 5964 6964 7964 8964 9964 0074 1074 2074 3074 4074 5074 6074 7074 8074 9074 0174 1174 2174 3174 4174 5174 6174 7174 8174 9174 0274 1274 2274 3274 4274 5274 6274 7274 8274 9274 0374 1374 2374 3374 4374 5374 6374 7374 8374 9374 0474 1474 2474 3474 4474 5474 6474 7474 8474 9474 0574 1574 2574 3574 4574 5574 6574 7574 8574 9574 0674 1674 2674 3674 4674 5674 6674 7674 8674 9674 0774 1774 2774 3774 4774 5774 6774 7774 8774 9774 0874 1874 2874 3874 4874 5874 6874 7874 8874 9874 0974 1974 2974 3974 4974 5974 6974 7974 8974 9974 0084 1084 2084 3084 4084 5084 6084 7084 8084 9084 0184 1184 2184 3184 4184 5184 6184 7184 8184 9184 0284 1284 2284 3284 4284 5284 6284 7284 8284 9284 0384 1384 2384 3384 4384 5384 6384 7384 8384 9384 0484 1484 2484 3484 4484 5484 6484 7484 8484 9484 0584 1584 2584 3584 4584 5584 6584 7584 8584 9584 0684 1684 2684 3684 4684 5684 6684 7684 8684 9684 0784 1784 2784 3784 4784 5784 6784 7784 8784 9784 0884 1884 2884 3884 4884 5884 6884 7884 8884 9884 0984 1984 2984 3984 4984 5984 6984 7984 8984 9984 0094 1094 2094 3094 4094 5094 6094 7094 8094 9094 0194 1194 2194 3194 4194 5194 6194 7194 8194 9194 0294 1294 2294 3294 4294 5294 6294 7294 8294 9294 0394 1394 2394 3394 4394 5394 6394 7394 8394 9394 0494 1494 2494 3494 4494 5494 6494 7494 8494 9494 0594 1594 2594 3594 4594 5594 6594 7594 8594 9594 0694 1694 2694 3694 4694 5694 6694 7694 8694 9694 0794 1794 2794 3794 4794 5794 6794 7794 8794 9794 0894 1894 2894 3894 4894 5894 6894 7894 8894 9894 0994 1994 2994 3994 4994 5994 6994 7994 8994 9994 0005 1005 2005 3005 4005 5005 6005 7005 8005 9005 0105 1105 2105 3105 4105 5105 6105 7105 8105 9105 0205 1205 2205 3205 4205 5205 6205 7205 8205 9205 0305 1305 2305 3305 4305 5305 6305 7305 8305 9305 0405 1405 2405 3405 4405 5405 6405 7405 8405 9405 0505 1505 2505 3505 4505 5505 6505 7505 8505 9505 0605 1605 2605 3605 4605 5605 6605 7605 8605 9605 0705 1705 2705 3705 4705 5705 6705 7705 8705 9705 0805 1805 2805 3805 4805 5805 6805 7805 8805 9805 0905 1905 2905 3905 4905 5905 6905 7905 8905 9905 0015 1015 2015 3015 4015 5015 6015 7015 8015 9015 0115 1115 2115 3115 4115 5115 6115 7115 8115 9115 0215 1215 2215 3215 4215 5215 6215 7215 8215 9215 0315 1315 2315 3315 4315 5315 6315 7315 8315 9315 0415 1415 2415 3415 4415 5415 6415 7415 8415 9415 0515 1515 2515 3515 4515 5515 6515 7515 8515 9515 0615 1615 2615 3615 4615 5615 6615 7615 8615 9615 0715 1715 2715 3715 4715 5715 6715 7715 8715 9715 0815 1815 2815 3815 4815 5815 6815 7815 8815 9815 0915 1915 2915 3915 4915 5915 6915 7915 8915 9915 0025 1025 2025 3025 4025 5025 6025 7025 8025 9025 0125 1125 2125 3125 4125 5125 6125 7125 8125 9125 0225 1225 2225 3225 4225 5225 6225 7225 8225 9225 0325 1325 2325 3325 4325 5325 6325 7325 8325 9325 0425 1425 2425 3425 4425 5425 6425 7425 8425 9425 0525 1525 2525 3525 4525 5525 6525 7525 8525 9525 0625 1625 2625 3625 4625 5625 6625 7625 8625 9625 0725 1725 2725 3725 4725 5725 6725 7725 8725 9725 0825 1825 2825 3825 4825 5825 6825 7825 8825 9825 0925 1925 2925 3925 4925 5925 6925 7925 8925 9925 0035 1035 2035 3035 4035 5035 6035 7035 8035 9035 0135 1135 2135 3135 4135 5135 6135 7135 8135 9135 0235 1235 2235 3235 4235 5235 6235 7235 8235 9235 0335 1335 2335 3335 4335 5335 6335 7335 8335 9335 0435 1435 2435 3435 4435 5435 6435 7435 8435 9435 0535 1535 2535 3535 4535 5535 6535 7535 8535 9535 0635 1635 2635 3635 4635 5635 6635 7635 8635 9635 0735 1735 2735 3735 4735 5735 6735 7735 8735 9735 0835 1835 2835 3835 4835 5835 6835 7835 8835 9835 0935 1935 2935 3935 4935 5935 6935 7935 8935 9935 0045 1045 2045 3045 4045 5045 6045 7045 8045 9045 0145 1145 2145 3145 4145 5145 6145 7145 8145 9145 0245 1245 2245 3245 4245 5245 6245 7245 8245 9245 0345 1345 2345 3345 4345 5345 6345 7345 8345 9345 0445 1445 2445 3445 4445 5445 6445 7445 8445 9445 0545 1545 2545 3545 4545 5545 6545 7545 8545 9545 0645 1645 2645 3645 4645 5645 6645 7645 8645 9645 0745 1745 2745 3745 4745 5745 6745 7745 8745 9745 0845 1845 2845 3845 4845 5845 6845 7845 8845 9845 0945 1945 2945 3945 4945 5945 6945 7945 8945 9945 0055 1055 2055 3055 4055 5055 6055 7055 8055 9055 0155 1155 2155 3155 4155 5155 6155 7155 8155 9155 0255 1255 2255 3255 4255 5255 6255 7255 8255 9255 0355 1355 2355 3355 4355 5355 6355 7355 8355 9355 0455 1455 2455 3455 4455 5455 6455 7455 8455 9455 0555 1555 2555 3555 4555 5555 6555 7555 8555 9555 0655 1655 2655 3655 4655 5655 6655 7655 8655 9655 0755 1755 2755 3755 4755 5755 6755 7755 8755 9755 0855 1855 2855 3855 4855 5855 6855 7855 8855 9855 0955 1955 2955 3955 4955 5955 6955 7955 8955 9955 0065 1065 2065 3065 4065 5065 6065 7065 8065 9065 0165 1165 2165 3165 4165 5165 6165 7165 8165 9165 0265 1265 2265 3265 4265 5265 6265 7265 8265 9265 0365 1365 2365 3365 4365 5365 6365 7365 8365 9365 0465 1465 2465 3465 4465 5465 6465 7465 8465 9465 0565 1565 2565 3565 4565 5565 6565 7565 8565 9565 0665 1665 2665 3665 4665 5665 6665 7665 8665 9665 0765 1765 2765 3765 4765 5765 6765 7765 8765 9765 0865 1865 2865 3865 4865 5865 6865 7865 8865 9865 0965 1965 2965 3965 4965 5965 6965 7965 8965 9965 0075 1075 2075 3075 4075 5075 6075 7075 8075 9075 0175 1175 2175 3175 4175 5175 6175 7175 8175 9175 0275 1275 2275 3275 4275 5275 6275 7275 8275 9275 0375 1375 2375 3375 4375 5375 6375 7375 8375 9375 0475 1475 2475 3475 4475 5475 6475 7475 8475 9475 0575 1575 2575 3575 4575 5575 6575 7575 8575 9575 0675 1675 2675 3675 4675 5675 6675 7675 8675 9675 0775 1775 2775 3775 4775 5775 6775 7775 8775 9775 0875 1875 2875 3875 4875 5875 6875 7875 8875 9875 0975 1975 2975 3975 4975 5975 6975 7975 8975 9975 0085 1085 2085 3085 4085 5085 6085 7085 8085 9085 0185 1185 2185 3185 4185 5185 6185 7185 8185 9185 0285 1285 2285 3285 4285 5285 6285 7285 8285 9285 0385 1385 2385 3385 4385 5385 6385 7385 8385 9385 0485 1485 2485 3485 4485 5485 6485 7485 8485 9485 0585 1585 2585 3585 4585 5585 6585 7585 8585 9585 0685 1685 2685 3685 4685 5685 6685 7685 8685 9685 0785 1785 2785 3785 4785 5785 6785 7785 8785 9785 0885 1885 2885 3885 4885 5885 6885 7885 8885 9885 0985 1985 2985 3985 4985 5985 6985 7985 8985 9985 0095 1095 2095 3095 4095 5095 6095 7095 8095 9095 0195 1195 2195 3195 4195 5195 6195 7195 8195 9195 0295 1295 2295 3295 4295 5295 6295 7295 8295 9295 0395 1395 2395 3395 4395 5395 6395 7395 8395 9395 0495 1495 2495 3495 4495 5495 6495 7495 8495 9495 0595 1595 2595 3595 4595 5595 6595 7595 8595 9595 0695 1695 2695 3695 4695 5695 6695 7695 8695 9695 0795 1795 2795 3795 4795 5795 6795 7795 8795 9795 0895 1895 2895 3895 4895 5895 6895 7895 8895 9895 0995 1995 2995 3995 4995 5995 6995 7995 8995 9995 0006 1006 2006 3006 4006 5006 6006 7006 8006 9006 0106 1106 2106 3106 4106 5106 6106 7106 8106 9106 0206 1206 2206 3206 4206 5206 6206 7206 8206 9206 0306 1306 2306 3306 4306 5306 6306 7306 8306 9306 0406 1406 2406 3406 4406 5406 6406 7406 8406 9406 0506 1506 2506 3506 4506 5506 6506 7506 8506 9506 0606 1606 2606 3606 4606 5606 6606 7606 8606 9606 0706 1706 2706 3706 4706 5706 6706 7706 8706 9706 0806 1806 2806 3806 4806 5806 6806 7806 8806 9806 0906 1906 2906 3906 4906 5906 6906 7906 8906 9906 0016 1016 2016 3016 4016 5016 6016 7016 8016 9016 0116 1116 2116 3116 4116 5116 6116 7116 8116 9116 0216 1216 2216 3216 4216 5216 6216 7216 8216 9216 0316 1316 2316 3316 4316 5316 6316 7316 8316 9316 0416 1416 2416 3416 4416 5416 6416 7416 8416 9416 0516 1516 2516 3516 4516 5516 6516 7516 8516 9516 0616 1616 2616 3616 4616 5616 6616 7616 8616 9616 0716 1716 2716 3716 4716 5716 6716 7716 8716 9716 0816 1816 2816 3816 4816 5816 6816 7816 8816 9816 0916 1916 2916 3916 4916 5916 6916 7916 8916 9916 0026 1026 2026 3026 4026 5026 6026 7026 8026 9026 0126 1126 2126 3126 4126 5126 6126 7126 8126 9126 0226 1226 2226 3226 4226 5226 6226 7226 8226 9226 0326 1326 2326 3326 4326 5326 6326 7326 8326 9326 0426 1426 2426 3426 4426 5426 6426 7426 8426 9426 0526 1526 2526 3526 4526 5526 6526 7526 8526 9526 0626 1626 2626 3626 4626 5626 6626 7626 8626 9626 0726 1726 2726 3726 4726 5726 6726 7726 8726 9726 0826 1826 2826 3826 4826 5826 6826 7826 8826 9826 0926 1926 2926 3926 4926 5926 6926 7926 8926 9926 0036 1036 2036 3036 4036 5036 6036 7036 8036 9036 0136 1136 2136 3136 4136 5136 6136 7136 8136 9136 0236 1236 2236 3236 4236 5236 6236 7236 8236 9236 0336 1336 2336 3336 4336 5336 6336 7336 8336 9336 0436 1436 2436 3436 4436 5436 6436 7436 8436 9436 0536 1536 2536 3536 4536 5536 6536 7536 8536 9536 0636 1636 2636 3636 4636 5636 6636 7636 8636 9636 0736 1736 2736 3736 4736 5736 6736 7736 8736 9736 0836 1836 2836 3836 4836 5836 6836 7836 8836 9836 0936 1936 2936 3936 4936 5936 6936 7936 8936 9936 0046 1046 2046 3046 4046 5046 6046 7046 8046 9046 0146 1146 2146 3146 4146 5146 6146 7146 8146 9146 0246 1246 2246 3246 4246 5246 6246 7246 8246 9246 0346 1346 2346 3346 4346 5346 6346 7346 8346 9346 0446 1446 2446 3446 4446 5446 6446 7446 8446 9446 0546 1546 2546 3546 4546 5546 6546 7546 8546 9546 0646 1646 2646 3646 4646 5646 6646 7646 8646 9646 0746 1746 2746 3746 4746 5746 6746 7746 8746 9746 0846 1846 2846 3846 4846 5846 6846 7846 8846 9846 0946 1946 2946 3946 4946 5946 6946 7946 8946 9946 0056 1056 2056 3056 4056 5056 6056 7056 8056 9056 0156 1156 2156 3156 4156 5156 6156 7156 8156 9156 0256 1256 2256 3256 4256 5256 6256 7256 8256 9256 0356 1356 2356 3356 4356 5356 6356 7356 8356 9356 0456 1456 2456 3456 4456 5456 6456 7456 8456 9456 0556 1556 2556 3556 4556 5556 6556 7556 8556 9556 0656 1656 2656 3656 4656 5656 6656 7656 8656 9656 0756 1756 2756 3756 4756 5756 6756 7756 8756 9756 0856 1856 2856 3856 4856 5856 6856 7856 8856 9856 0956 1956 2956 3956 4956 5956 6956 7956 8956 9956 0066 1066 2066 3066 4066 5066 6066 7066 8066 9066 0166 1166 2166 3166 4166 5166 6166 7166 8166 9166 0266 1266 2266 3266 4266 5266 6266 7266 8266 9266 0366 1366 2366 3366 4366 5366 6366 7366 8366 9366 0466 1466 2466 3466 4466 5466 6466 7466 8466 9466 0566 1566 2566 3566 4566 5566 6566 7566 8566 9566 0666 1666 2666 3666 4666 5666 6666 7666 8666 9666 0766 1766 2766 3766 4766 5766 6766 7766 8766 9766 0866 1866 2866 3866 4866 5866 6866 7866 8866 9866 0966 1966 2966 3966 4966 5966 6966 7966 8966 9966 0076 1076 2076 3076 4076 5076 6076 7076 8076 9076 0176 1176 2176 3176 4176 5176 6176 7176 8176 9176 0276 1276 2276 3276 4276 5276 6276 7276 8276 9276 0376 1376 2376 3376 4376 5376 6376 7376 8376 9376 0476 1476 2476 3476 4476 5476 6476 7476 8476 9476 0576 1576 2576 3576 4576 5576 6576 7576 8576 9576 0676 1676 2676 3676 4676 5676 6676 7676 8676 9676 0776 1776 2776 3776 4776 5776 6776 7776 8776 9776 0876 1876 2876 3876 4876 5876 6876 7876 8876 9876 0976 1976 2976 3976 4976 5976 6976 7976 8976 9976 0086 1086 2086 3086 4086 5086 6086 7086 8086 9086 0186 1186 2186 3186 4186 5186 6186 7186 8186 9186 0286 1286 2286 3286 4286 5286 6286 7286 8286 9286 0386 1386 2386 3386 4386 5386 6386 7386 8386 9386 0486 1486 2486 3486 4486 5486 6486 7486 8486 9486 0586 1586 2586 3586 4586 5586 6586 7586 8586 9586 0686 1686 2686 3686 4686 5686 6686 7686 8686 9686 0786 1786 2786 3786 4786 5786 6786 7786 8786 9786 0886 1886 2886 3886 4886 5886 6886 7886 8886 9886 0986 1986 2986 3986 4986 5986 6986 7986 8986 9986 0096 1096 2096 3096 4096 5096 6096 7096 8096 9096 0196 1196 2196 3196 4196 5196 6196 7196 8196 9196 0296 1296 2296 3296 4296 5296 6296 7296 8296 9296 0396 1396 2396 3396 4396 5396 6396 7396 8396 9396 0496 1496 2496 3496 4496 5496 6496 7496 8496 9496 0596 1596 2596 3596 4596 5596 6596 7596 8596 9596 0696 1696 2696 3696 4696 5696 6696 7696 8696 9696 0796 1796 2796 3796 4796 5796 6796 7796 8796 9796 0896 1896 2896 3896 4896 5896 6896 7896 8896 9896 0996 1996 2996 3996 4996 5996 6996 7996 8996 9996 0007 1007 2007 3007 4007 5007 6007 7007 8007 9007 0107 1107 2107 3107 4107 5107 6107 7107 8107 9107 0207 1207 2207 3207 4207 5207 6207 7207 8207 9207 0307 1307 2307 3307 4307 5307 6307 7307 8307 9307 0407 1407 2407 3407 4407 5407 6407 7407 8407 9407 0507 1507 2507 3507 4507 5507 6507 7507 8507 9507 0607 1607 2607 3607 4607 5607 6607 7607 8607 9607 0707 1707 2707 3707 4707 5707 6707 7707 8707 9707 0807 1807 2807 3807 4807 5807 6807 7807 8807 9807 0907 1907 2907 3907 4907 5907 6907 7907 8907 9907 0017 1017 2017 3017 4017 5017 6017 7017 8017 9017 0117 1117 2117 3117 4117 5117 6117 7117 8117 9117 0217 1217 2217 3217 4217 5217 6217 7217 8217 9217 0317 1317 2317 3317 4317 5317 6317 7317 8317 9317 0417 1417 2417 3417 4417 5417 6417 7417 8417 9417 0517 1517 2517 3517 4517 5517 6517 7517 8517 9517 0617 1617 2617 3617 4617 5617 6617 7617 8617 9617 0717 1717 2717 3717 4717 5717 6717 7717 8717 9717 0817 1817 2817 3817 4817 5817 6817 7817 8817 9817 0917 1917 2917 3917 4917 5917 6917 7917 8917 9917 0027 1027 2027 3027 4027 5027 6027 7027 8027 9027 0127 1127 2127 3127 4127 5127 6127 7127 8127 9127 0227 1227 2227 3227 4227 5227 6227 7227 8227 9227 0327 1327 2327 3327 4327 5327 6327 7327 8327 9327 0427 1427 2427 3427 4427 5427 6427 7427 8427 9427 0527 1527 2527 3527 4527 5527 6527 7527 8527 9527 0627 1627 2627 3627 4627 5627 6627 7627 8627 9627 0727 1727 2727 3727 4727 5727 6727 7727 8727 9727 0827 1827 2827 3827 4827 5827 6827 7827 8827 9827 0927 1927 2927 3927 4927 5927 6927 7927 8927 9927 0037 1037 2037 3037 4037 5037 6037 7037 8037 9037 0137 1137 2137 3137 4137 5137 6137 7137 8137 9137 0237 1237 2237 3237 4237 5237 6237 7237 8237 9237 0337 1337 2337 3337 4337 5337 6337 7337 8337 9337 0437 1437 2437 3437 4437 5437 6437 7437 8437 9437 0537 1537 2537 3537 4537 5537 6537 7537 8537 9537 0637 1637 2637 3637 4637 5637 6637 7637 8637 9637 0737 1737 2737 3737 4737 5737 6737 7737 8737 9737 0837 1837 2837 3837 4837 5837 6837 7837 8837 9837 0937 1937 2937 3937 4937 5937 6937 7937 8937 9937 0047 1047 2047 3047 4047 5047 6047 7047 8047 9047 0147 1147 2147 3147 4147 5147 6147 7147 8147 9147 0247 1247 2247 3247 4247 5247 6247 7247 8247 9247 0347 1347 2347 3347 4347 5347 6347 7347 8347 9347 0447 1447 2447 3447 4447 5447 6447 7447 8447 9447 0547 1547 2547 3547 4547 5547 6547 7547 8547 9547 0647 1647 2647 3647 4647 5647 6647 7647 8647 9647 0747 1747 2747 3747 4747 5747 6747 7747 8747 9747 0847 1847 2847 3847 4847 5847 6847 7847 8847 9847 0947 1947 2947 3947 4947 5947 6947 7947 8947 9947 0057 1057 2057 3057 4057 5057 6057 7057 8057 9057 0157 1157 2157 3157 4157 5157 6157 7157 8157 9157 0257 1257 2257 3257 4257 5257 6257 7257 8257 9257 0357 1357 2357 3357 4357 5357 6357 7357 8357 9357 0457 1457 2457 3457 4457 5457 6457 7457 8457 9457 0557 1557 2557 3557 4557 5557 6557 7557 8557 9557 0657 1657 2657 3657 4657 5657 6657 7657 8657 9657 0757 1757 2757 3757 4757 5757 6757 7757 8757 9757 0857 1857 2857 3857 4857 5857 6857 7857 8857 9857 0957 1957 2957 3957 4957 5957 6957 7957 8957 9957 0067 1067 2067 3067 4067 5067 6067 7067 8067 9067 0167 1167 2167 3167 4167 5167 6167 7167 8167 9167 0267 1267 2267 3267 4267 5267 6267 7267 8267 9267 0367 1367 2367 3367 4367 5367 6367 7367 8367 9367 0467 1467 2467 3467 4467 5467 6467 7467 8467 9467 0567 1567 2567 3567 4567 5567 6567 7567 8567 9567 0667 1667 2667 3667 4667 5667 6667 7667 8667 9667 0767 1767 2767 3767 4767 5767 6767 7767 8767 9767 0867 1867 2867 3867 4867 5867 6867 7867 8867 9867 0967 1967 2967 3967 4967 5967 6967 7967 8967 9967 0077 1077 2077 3077 4077 5077 6077 7077 8077 9077 0177 1177 2177 3177 4177 5177 6177 7177 8177 9177 0277 1277 2277 3277 4277 5277 6277 7277 8277 9277 0377 1377 2377 3377 4377 5377 6377 7377 8377 9377 0477 1477 2477 3477 4477 5477 6477 7477 8477 9477 0577 1577 2577 3577 4577 5577 6577 7577 8577 9577 0677 1677 2677 3677 4677 5677 6677 7677 8677 9677 0777 1777 2777 3777 4777 5777 6777 7777 8777 9777 0877 1877 2877 3877 4877 5877 6877 7877 8877 9877 0977 1977 2977 3977 4977 5977 6977 7977 8977 9977 0087 1087 2087 3087 4087 5087 6087 7087 8087 9087 0187 1187 2187 3187 4187 5187 6187 7187 8187 9187 0287 1287 2287 3287 4287 5287 6287 7287 8287 9287 0387 1387 2387 3387 4387 5387 6387 7387 8387 9387 0487 1487 2487 3487 4487 5487 6487 7487 8487 9487 0587 1587 2587 3587 4587 5587 6587 7587 8587 9587 0687 1687 2687 3687 4687 5687 6687 7687 8687 9687 0787 1787 2787 3787 4787 5787 6787 7787 8787 9787 0887 1887 2887 3887 4887 5887 6887 7887 8887 9887 0987 1987 2987 3987 4987 5987 6987 7987 8987 9987 0097 1097 2097 3097 4097 5097 6097 7097 8097 9097 0197 1197 2197 3197 4197 5197 6197 7197 8197 9197 0297 1297 2297 3297 4297 5297 6297 7297 8297 9297 0397 1397 2397 3397 4397 5397 6397 7397 8397 9397 0497 1497 2497 3497 4497 5497 6497 7497 8497 9497 0597 1597 2597 3597 4597 5597 6597 7597 8597 9597 0697 1697 2697 3697 4697 5697 6697 7697 8697 9697 0797 1797 2797 3797 4797 5797 6797 7797 8797 9797 0897 1897 2897 3897 4897 5897 6897 7897 8897 9897 0997 1997 2997 3997 4997 5997 6997 7997 8997 9997 0008 1008 2008 3008 4008 5008 6008 7008 8008 9008 0108 1108 2108 3108 4108 5108 6108 7108 8108 9108 0208 1208 2208 3208 4208 5208 6208 7208 8208 9208 0308 1308 2308 3308 4308 5308 6308 7308 8308 9308 0408 1408 2408 3408 4408 5408 6408 7408 8408 9408 0508 1508 2508 3508 4508 5508 6508 7508 8508 9508 0608 1608 2608 3608 4608 5608 6608 7608 8608 9608 0708 1708 2708 3708 4708 5708 6708 7708 8708 9708 0808 1808 2808 3808 4808 5808 6808 7808 8808 9808 0908 1908 2908 3908 4908 5908 6908 7908 8908 9908 0018 1018 2018 3018 4018 5018 6018 7018 8018 9018 0118 1118 2118 3118 4118 5118 6118 7118 8118 9118 0218 1218 2218 3218 4218 5218 6218 7218 8218 9218 0318 1318 2318 3318 4318 5318 6318 7318 8318 9318 0418 1418 2418 3418 4418 5418 6418 7418 8418 9418 0518 1518 2518 3518 4518 5518 6518 7518 8518 9518 0618 1618 2618 3618 4618 5618 6618 7618 8618 9618 0718 1718 2718 3718 4718 5718 6718 7718 8718 9718 0818 1818 2818 3818 4818 5818 6818 7818 8818 9818 0918 1918 2918 3918 4918 5918 6918 7918 8918 9918 0028 1028 2028 3028 4028 5028 6028 7028 8028 9028 0128 1128 2128 3128 4128 5128 6128 7128 8128 9128 0228 1228 2228 3228 4228 5228 6228 7228 8228 9228 0328 1328 2328 3328 4328 5328 6328 7328 8328 9328 0428 1428 2428 3428 4428 5428 6428 7428 8428 9428 0528 1528 2528 3528 4528 5528 6528 7528 8528 9528 0628 1628 2628 3628 4628 5628 6628 7628 8628 9628 0728 1728 2728 3728 4728 5728 6728 7728 8728 9728 0828 1828 2828 3828 4828 5828 6828 7828 8828 9828 0928 1928 2928 3928 4928 5928 6928 7928 8928 9928 0038 1038 2038 3038 4038 5038 6038 7038 8038 9038 0138 1138 2138 3138 4138 5138 6138 7138 8138 9138 0238 1238 2238 3238 4238 5238 6238 7238 8238 9238 0338 1338 2338 3338 4338 5338 6338 7338 8338 9338 0438 1438 2438 3438 4438 5438 6438 7438 8438 9438 0538 1538 2538 3538 4538 5538 6538 7538 8538 9538 0638 1638 2638 3638 4638 5638 6638 7638 8638 9638 0738 1738 2738 3738 4738 5738 6738 7738 8738 9738 0838 1838 2838 3838 4838 5838 6838 7838 8838 9838 0938 1938 2938 3938 4938 5938 6938 7938 8938 9938 0048 1048 2048 3048 4048 5048 6048 7048 8048 9048 0148 1148 2148 3148 4148 5148 6148 7148 8148 9148 0248 1248 2248 3248 4248 5248 6248 7248 8248 9248 0348 1348 2348 3348 4348 5348 6348 7348 8348 9348 0448 1448 2448 3448 4448 5448 6448 7448 8448 9448 0548 1548 2548 3548 4548 5548 6548 7548 8548 9548 0648 1648 2648 3648 4648 5648 6648 7648 8648 9648 0748 1748 2748 3748 4748 5748 6748 7748 8748 9748 0848 1848 2848 3848 4848 5848 6848 7848 8848 9848 0948 1948 2948 3948 4948 5948 6948 7948 8948 9948 0058 1058 2058 3058 4058 5058 6058 7058 8058 9058 0158 1158 2158 3158 4158 5158 6158 7158 8158 9158 0258 1258 2258 3258 4258 5258 6258 7258 8258 9258 0358 1358 2358 3358 4358 5358 6358 7358 8358 9358 0458 1458 2458 3458 4458 5458 6458 7458 8458 9458 0558 1558 2558 3558 4558 5558 6558 7558 8558 9558 0658 1658 2658 3658 4658 5658 6658 7658 8658 9658 0758 1758 2758 3758 4758 5758 6758 7758 8758 9758 0858 1858 2858 3858 4858 5858 6858 7858 8858 9858 0958 1958 2958 3958 4958 5958 6958 7958 8958 9958 0068 1068 2068 3068 4068 5068 6068 7068 8068 9068 0168 1168 2168 3168 4168 5168 6168 7168 8168 9168 0268 1268 2268 3268 4268 5268 6268 7268 8268 9268 0368 1368 2368 3368 4368 5368 6368 7368 8368 9368 0468 1468 2468 3468 4468 5468 6468 7468 8468 9468 0568 1568 2568 3568 4568 5568 6568 7568 8568 9568 0668 1668 2668 3668 4668 5668 6668 7668 8668 9668 0768 1768 2768 3768 4768 5768 6768 7768 8768 9768 0868 1868 2868 3868 4868 5868 6868 7868 8868 9868 0968 1968 2968 3968 4968 5968 6968 7968 8968 9968 0078 1078 2078 3078 4078 5078 6078 7078 8078 9078 0178 1178 2178 3178 4178 5178 6178 7178 8178 9178 0278 1278 2278 3278 4278 5278 6278 7278 8278 9278 0378 1378 2378 3378 4378 5378 6378 7378 8378 9378 0478 1478 2478 3478 4478 5478 6478 7478 8478 9478 0578 1578 2578 3578 4578 5578 6578 7578 8578 9578 0678 1678 2678 3678 4678 5678 6678 7678 8678 9678 0778 1778 2778 3778 4778 5778 6778 7778 8778 9778 0878 1878 2878 3878 4878 5878 6878 7878 8878 9878 0978 1978 2978 3978 4978 5978 6978 7978 8978 9978 0088 1088 2088 3088 4088 5088 6088 7088 8088 9088 0188 1188 2188 3188 4188 5188 6188 7188 8188 9188 0288 1288 2288 3288 4288 5288 6288 7288 8288 9288 0388 1388 2388 3388 4388 5388 6388 7388 8388 9388 0488 1488 2488 3488 4488 5488 6488 7488 8488 9488 0588 1588 2588 3588 4588 5588 6588 7588 8588 9588 0688 1688 2688 3688 4688 5688 6688 7688 8688 9688 0788 1788 2788 3788 4788 5788 6788 7788 8788 9788 0888 1888 2888 3888 4888 5888 6888 7888 8888 9888 0988 1988 2988 3988 4988 5988 6988 7988 8988 9988 0098 1098 2098 3098 4098 5098 6098 7098 8098 9098 0198 1198 2198 3198 4198 5198 6198 7198 8198 9198 0298 1298 2298 3298 4298 5298 6298 7298 8298 9298 0398 1398 2398 3398 4398 5398 6398 7398 8398 9398 0498 1498 2498 3498 4498 5498 6498 7498 8498 9498 0598 1598 2598 3598 4598 5598 6598 7598 8598 9598 0698 1698 2698 3698 4698 5698 6698 7698 8698 9698 0798 1798 2798 3798 4798 5798 6798 7798 8798 9798 0898 1898 2898 3898 4898 5898 6898 7898 8898 9898 0998 1998 2998 3998 4998 5998 6998 7998 8998 9998 0009 1009 2009 3009 4009 5009 6009 7009 8009 9009 0109 1109 2109 3109 4109 5109 6109 7109 8109 9109 0209 1209 2209 3209 4209 5209 6209 7209 8209 9209 0309 1309 2309 3309 4309 5309 6309 7309 8309 9309 0409 1409 2409 3409 4409 5409 6409 7409 8409 9409 0509 1509 2509 3509 4509 5509 6509 7509 8509 9509 0609 1609 2609 3609 4609 5609 6609 7609 8609 9609 0709 1709 2709 3709 4709 5709 6709 7709 8709 9709 0809 1809 2809 3809 4809 5809 6809 7809 8809 9809 0909 1909 2909 3909 4909 5909 6909 7909 8909 9909 0019 1019 2019 3019 4019 5019 6019 7019 8019 9019 0119 1119 2119 3119 4119 5119 6119 7119 8119 9119 0219 1219 2219 3219 4219 5219 6219 7219 8219 9219 0319 1319 2319 3319 4319 5319 6319 7319 8319 9319 0419 1419 2419 3419 4419 5419 6419 7419 8419 9419 0519 1519 2519 3519 4519 5519 6519 7519 8519 9519 0619 1619 2619 3619 4619 5619 6619 7619 8619 9619 0719 1719 2719 3719 4719 5719 6719 7719 8719 9719 0819 1819 2819 3819 4819 5819 6819 7819 8819 9819 0919 1919 2919 3919 4919 5919 6919 7919 8919 9919 0029 1029 2029 3029 4029 5029 6029 7029 8029 9029 0129 1129 2129 3129 4129 5129 6129 7129 8129 9129 0229 1229 2229 3229 4229 5229 6229 7229 8229 9229 0329 1329 2329 3329 4329 5329 6329 7329 8329 9329 0429 1429 2429 3429 4429 5429 6429 7429 8429 9429 0529 1529 2529 3529 4529 5529 6529 7529 8529 9529 0629 1629 2629 3629 4629 5629 6629 7629 8629 9629 0729 1729 2729 3729 4729 5729 6729 7729 8729 9729 0829 1829 2829 3829 4829 5829 6829 7829 8829 9829 0929 1929 2929 3929 4929 5929 6929 7929 8929 9929 0039 1039 2039 3039 4039 5039 6039 7039 8039 9039 0139 1139 2139 3139 4139 5139 6139 7139 8139 9139 0239 1239 2239 3239 4239 5239 6239 7239 8239 9239 0339 1339 2339 3339 4339 5339 6339 7339 8339 9339 0439 1439 2439 3439 4439 5439 6439 7439 8439 9439 0539 1539 2539 3539 4539 5539 6539 7539 8539 9539 0639 1639 2639 3639 4639 5639 6639 7639 8639 9639 0739 1739 2739 3739 4739 5739 6739 7739 8739 9739 0839 1839 2839 3839 4839 5839 6839 7839 8839 9839 0939 1939 2939 3939 4939 5939 6939 7939 8939 9939 0049 1049 2049 3049 4049 5049 6049 7049 8049 9049 0149 1149 2149 3149 4149 5149 6149 7149 8149 9149 0249 1249 2249 3249 4249 5249 6249 7249 8249 9249 0349 1349 2349 3349 4349 5349 6349 7349 8349 9349 0449 1449 2449 3449 4449 5449 6449 7449 8449 9449 0549 1549 2549 3549 4549 5549 6549 7549 8549 9549 0649 1649 2649 3649 4649 5649 6649 7649 8649 9649 0749 1749 2749 3749 4749 5749 6749 7749 8749 9749 0849 1849 2849 3849 4849 5849 6849 7849 8849 9849 0949 1949 2949 3949 4949 5949 6949 7949 8949 9949 0059 1059 2059 3059 4059 5059 6059 7059 8059 9059 0159 1159 2159 3159 4159 5159 6159 7159 8159 9159 0259 1259 2259 3259 4259 5259 6259 7259 8259 9259 0359 1359 2359 3359 4359 5359 6359 7359 8359 9359 0459 1459 2459 3459 4459 5459 6459 7459 8459 9459 0559 1559 2559 3559 4559 5559 6559 7559 8559 9559 0659 1659 2659 3659 4659 5659 6659 7659 8659 9659 0759 1759 2759 3759 4759 5759 6759 7759 8759 9759 0859 1859 2859 3859 4859 5859 6859 7859 8859 9859 0959 1959 2959 3959 4959 5959 6959 7959 8959 9959 0069 1069 2069 3069 4069 5069 6069 7069 8069 9069 0169 1169 2169 3169 4169 5169 6169 7169 8169 9169 0269 1269 2269 3269 4269 5269 6269 7269 8269 9269 0369 1369 2369 3369 4369 5369 6369 7369 8369 9369 0469 1469 2469 3469 4469 5469 6469 7469 8469 9469 0569 1569 2569 3569 4569 5569 6569 7569 8569 9569 0669 1669 2669 3669 4669 5669 6669 7669 8669 9669 0769 1769 2769 3769 4769 5769 6769 7769 8769 9769 0869 1869 2869 3869 4869 5869 6869 7869 8869 9869 0969 1969 2969 3969 4969 5969 6969 7969 8969 9969 0079 1079 2079 3079 4079 5079 6079 7079 8079 9079 0179 1179 2179 3179 4179 5179 6179 7179 8179 9179 0279 1279 2279 3279 4279 5279 6279 7279 8279 9279 0379 1379 2379 3379 4379 5379 6379 7379 8379 9379 0479 1479 2479 3479 4479 5479 6479 7479 8479 9479 0579 1579 2579 3579 4579 5579 6579 7579 8579 9579 0679 1679 2679 3679 4679 5679 6679 7679 8679 9679 0779 1779 2779 3779 4779 5779 6779 7779 8779 9779 0879 1879 2879 3879 4879 5879 6879 7879 8879 9879 0979 1979 2979 3979 4979 5979 6979 7979 8979 9979 0089 1089 2089 3089 4089 5089 6089 7089 8089 9089 0189 1189 2189 3189 4189 5189 6189 7189 8189 9189 0289 1289 2289 3289 4289 5289 6289 7289 8289 9289 0389 1389 2389 3389 4389 5389 6389 7389 8389 9389 0489 1489 2489 3489 4489 5489 6489 7489 8489 9489 0589 1589 2589 3589 4589 5589 6589 7589 8589 9589 0689 1689 2689 3689 4689 5689 6689 7689 8689 9689 0789 1789 2789 3789 4789 5789 6789 7789 8789 9789 0889 1889 2889 3889 4889 5889 6889 7889 8889 9889 0989 1989 2989 3989 4989 5989 6989 7989 8989 9989 0099 1099 2099 3099 4099 5099 6099 7099 8099 9099 0199 1199 2199 3199 4199 5199 6199 7199 8199 9199 0299 1299 2299 3299 4299 5299 6299 7299 8299 9299 0399 1399 2399 3399 4399 5399 6399 7399 8399 9399 0499 1499 2499 3499 4499 5499 6499 7499 8499 9499 0599 1599 2599 3599 4599 5599 6599 7599 8599 9599 0699 1699 2699 3699 4699 5699 6699 7699 8699 9699 0799 1799 2799 3799 4799 5799 6799 7799 8799 9799 0899 1899 2899 3899 4899 5899 6899 7899 8899 9899 0999 1999 2999 3999 4999 5999 6999 7999 8999 9999';
    var fullfours = all.split(' ');

    var lens = 10000;
    var woutp,txtpattern;
    console.log(danmaarray,'danmaarraydanmaarraydanmaarraydanmaarray',qianarray);

    if (danmaarray.length>0 && danmaarray.length<10) {
      var danqian=[0,1,2,3,4,5,6,7,8,9],danbai=[0,1,2,3,4,5,6,7,8,9],danshi=[0,1,2,3,4,5,6,7,8,9],dange=[0,1,2,3,4,5,6,7,8,9];
      var firstdanma;
      if (qianarray.length>0) {
        var tempqian = _.clone(qianarray);
        tempqian.unshift([0,1,2,3,4,5,6,7,8,9])
        danqian = _.without.apply(this,tempqian);
        var tempfirstdanma = _.clone(qianarray);
        tempfirstdanma.unshift(danmaarray)
        firstdanma = _.without.apply(this,tempfirstdanma);
      }else {
        firstdanma = danmaarray;
      }
      console.log(firstdanma,'firstdanmafirstdanmafirstdanma');

      if (baiarray.length>0) {
        var tempbai = _.clone(baiarray);
        tempbai.unshift([0,1,2,3,4,5,6,7,8,9])
        danbai = _.without.apply(this,tempbai);
      }
      if (shiarray.length>0) {
        var tempshi = _.clone(shiarray);
        tempshi.unshift([0,1,2,3,4,5,6,7,8,9])
        danshi = _.without.apply(this,tempshi);
      }
      if (gearray.length>0) {
        var tempge = _.clone(gearray);
        tempge.unshift([0,1,2,3,4,5,6,7,8,9])
        dange = _.without.apply(this,tempge);
      }
      var union_part_0;
      if (firstdanma.length>0) {
        var allnum_0 = [firstdanma,danbai,danshi,dange];
        var cp0 = Combinatorics.cartesianProduct.apply(this,allnum_0);
        union_part_0 = cp0.toArrayStr();
      }else {
        union_part_0 = [];
      }
      var allnum_1 = [danqian,danmaarray,danshi,dange];
      var cp1 = Combinatorics.cartesianProduct.apply(this,allnum_1);
      var union_part_1 = cp1.toArrayStr();

      var allnum_2 = [danqian,danbai,danmaarray,dange];
      var cp2 = Combinatorics.cartesianProduct.apply(this,allnum_2);
      var union_part_2 = cp2.toArrayStr();

      var allnum_3 = [danqian,danbai,danshi,danmaarray];
      var cp3 = Combinatorics.cartesianProduct.apply(this,allnum_3);
      var union_part_3 = cp3.toArrayStr();
      var allunion = _.union(union_part_0,union_part_1,union_part_2,union_part_3);
      all = allunion.join(' ');
    }

    if (qianarray.length>0) {
      woutp = allchoose['gen-qian-without'].join('|');
      txtpattern = '(['+woutp+']\\d\\d\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
      var outstr_1 = new RegExp(txtpattern, 'g');
      all = all.replace(outstr_1,'');
      //console.log('qian',outstr_1,all);
    }
    if (baiarray.length>0) {
      woutp = allchoose['gen-bai-without'].join('|');
      txtpattern = '(\\d['+woutp+']\\d\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
      var outstr_2 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
      all = all.replace(outstr_2,'');
      //console.log('bai',outstr_2,all);
    }
    if (shiarray.length>0) {
      woutp = allchoose['gen-shi-without'].join('|');
      txtpattern = '(\\d\\d['+woutp+']\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
      var outstr_3 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
      all = all.replace(outstr_3,'');
      //console.log('shi',outstr_3,all);
    }
    if (gearray.length>0) {
      woutp = allchoose['gen-ge-without'].join('|');
      txtpattern = '(\\d\\d\\d['+woutp+'])[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
      var outstr_4 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
      all = all.replace(outstr_4,'');
      //console.log('ge',outstr_4,all);
    }
    //console.log(heweiarray.length>0 && heweiarray.length<10 && typeof shix_heiwei !='undefined' && tags=='h4');
    if (heweiarray.length>0 && heweiarray.length<10 && typeof shix_heiwei !='undefined' && tags=='h4') {
      heweiarray.forEach(function(hw) {
        //console.log(hw,shix_heiwei[hw]);
        txtpattern = '('+shix_heiwei[hw]+')';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_5 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        all = all.replace(outstr_5,'');
      });
      //console.log('hewei',heweiarray,all);
      all = all.replace(/[ ](?!\b)/g,'');
    }
    if (kuaduarray.length>0 && kuaduarray.length<10 && typeof shix_kuadu !='undefined' && tags=='h4') {
      kuaduarray.forEach(function(hw) {
        txtpattern = '('+shix_kuadu[hw]+')';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_5 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        all = all.replace(outstr_5,'');
      });
      all = all.replace(/[ ](?!\b)/g,'');
      //console.log('kd',all);
    }
    if (hezhiarray.length>0 && hezhiarray.length<10 && typeof shix_hezhi !='undefined' && tags=='h4') {
      //console.log(hezhiarray,'hezhiarrayhezhiarray');
      hezhiarray.forEach(function(hw) {
        txtpattern = '('+shix_hezhi[hw]+')';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_6 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        all = all.replace(outstr_6,'');
      });
      all = all.replace(/[ ](?!\b)/g,'');
      //console.log('kd',all);
    }
    if (daxiaoarray.length>0 && daxiaoarray.length<16 && typeof shix_daxiao !='undefined' && tags=='h4') {
      daxiaoarray.forEach(function(dx) {
        txtpattern = '('+shix_daxiao[dx]+')';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_7 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        all = all.replace(outstr_7,'');
      });
      all = all.replace(/[ ](?!\b)/g,'');
    }
    if (teshuarray.length>0 && typeof shix_teshu !='undefined' && tags=='h4') {
      teshuarray.forEach(function(ts) {
        txtpattern = '('+shix_teshu[ts]+')';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_8 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        all = all.replace(outstr_8,'');
      });
      all = all.replace(/[ ](?!\b)/g,'');
    }
    if (heweiarray.length==10 || kuaduarray.length==10 || hezhiarray.length==10 || daxiaoarray.length==16) {
      all='';
    }
    lens = all.split(' ')

    if (all=='') {
      lens=0;
    }
    //var cpcontent = LZString.compressToEncodedURIComponent(all);
    //$('#zuohao #danshitext').data('cp',cpcontent).val(all);
    $('.generate-bet #danshitext').val(all);
    var lens = all.split(' ');
    $('.generate-bet #gen-totaldeal').html(lens.length);
    $('.lottery-betting .play-area .textarea textarea').val($('.generate-bet #danshitext').val()).keyup();
    btn.removeClass('loading').html('立即生成')
    //$('.generate-bet #gen-totaldeal').html(lens.length);
    //var getmulti = parseInt($('#zuohao .gen-model .multiple input').val(),10);
    //$('.generate-bet #gen-totalmoney').html(Number(lens.length*getmulti*modeltime).toFixed(3));
    //btn.removeClass('loading').html('立即生成');
  }

  //做号5星
  var manualWxNumbers = function(method,tags,allchoose,btn) {
    var calMoney = function(mval) {
      var monetdict = {
        'yuan':1,'jiao':0.1,'fen':0.01,'li':0.001
      }
      var nowmodelset = {'val': mval, 'money': monetdict[mval]};
      var getmulti = parseInt($('.generate-bet .gen-model .multiple input').val(),10);
      var modeltime = parseFloat(nowmodelset.money);
      $('.generate-bet #gen-totalmoney').html(Number(parseInt($('.generate-bet #gen-totaldeal').text(),10)*getmulti*modeltime).toFixed(3));
    };

    var filteWxNums = function(wx,method,tags,allchoose,btn) {
      var shiarray = typeof allchoose['gen-shi-without'] !='undefined' ? allchoose['gen-shi-without'] : [];
      var gearray = typeof allchoose['gen-ge-without'] !='undefined' ? allchoose['gen-ge-without'] : [];
      var baiarray = typeof allchoose['gen-bai-without'] !='undefined' ? allchoose['gen-bai-without'] : [];
      var qianarray = typeof allchoose['gen-qian-without'] !='undefined' ? allchoose['gen-qian-without'] : [];
      var wanarray = typeof allchoose['gen-wan-without'] !='undefined' ? allchoose['gen-wan-without'] : [];
      var woutp,txtpattern;
      (gearray.length==1 && gearray[0].length==10) ? (allchoose['gen-ge-without']=[],gearray=[]) :!0;
      (shiarray.length==1 && shiarray[0].length==10) ? (allchoose['gen-shi-without']=[],shiarray=[]) :!0;
      (baiarray.length==1 && baiarray[0].length==10) ? (allchoose['gen-bai-without']=[],baiarray=[]) :!0;
      (qianarray.length==1 && qianarray[0].length==10) ? (allchoose['gen-qian-without']=[],qianarray=[]) :!0;
      (wanarray.length==1 && wanarray[0].length==10) ? (allchoose['gen-wan-without']=[],qianarray=[]) :!0;
      //console.log(shiarray,gearray,baiarray,qianarray,wanarray);

      //和尾杀
      var heweiarray = typeof allchoose['gen-hewei-without'] !='undefined' ? allchoose['gen-hewei-without'] : [];
      var kuaduarray = typeof allchoose['gen-kuadu-without'] !='undefined' ? allchoose['gen-kuadu-without'] : [];
      var hezhiarray = typeof allchoose['gen-hezhi-without'] !='undefined' ? allchoose['gen-hezhi-without'] : [];
      var daxiaoarray = typeof allchoose['gen-daxiao-without'] !='undefined' ? allchoose['gen-daxiao-without'] : [];
      var teshuarray = typeof allchoose['gen-lianxu-without'] !='undefined' ? allchoose['gen-lianxu-without'] : [];
      var danmaarray = typeof allchoose['gen-danma'] !='undefined' ? allchoose['gen-danma'] : [];
      //console.log(gearray,shiarray,baiarray,qianarray,wanarray,'danmaarraydanmaarraydanmaarraydanmaarray',qianarray);

      var getnowdan = function(dan,wan,qian,bai,shi,ge,dindex) {
        var wanwithdan,qianwithdan,baiwithdan,shiwithdan,gewithdan;
        if (dan.length>0) {
          //console.log('getnowdan',dan,wan,qian,bai,shi,ge);

          var joindan;
          if (dindex==0) {joindan = wan;  }
          if (dindex==1) {joindan = qian;  }
          if (dindex==2) {joindan = bai;  }
          if (dindex==3) {joindan = shi;  }
          if (dindex==4) {joindan = ge;  }

          var tempdan = _.clone(joindan);
          tempdan.unshift(dan)
          wanwithdan = _.without.apply(this,tempdan);
          //console.log(dindex,joindan,wanwithdan,'wanwithdan',joindan,'joindan');
          var neddjoin = [];

          /*qbsg*/
          var tempwan = _.clone(wan);
          tempwan.unshift([0,1,2,3,4,5,6,7,8,9])
          var danwan = _.without.apply(this,tempwan);

          var tempqian = _.clone(qian);
          tempqian.unshift([0,1,2,3,4,5,6,7,8,9])
          var danqian = _.without.apply(this,tempqian);

          var tempbai = _.clone(bai);
          tempbai.unshift([0,1,2,3,4,5,6,7,8,9])
          var danbai = _.without.apply(this,tempbai);

          var tempshi = _.clone(shi);
          tempshi.unshift([0,1,2,3,4,5,6,7,8,9])
          var danshi = _.without.apply(this,tempshi);

          var tempge = _.clone(ge);
          tempge.unshift([0,1,2,3,4,5,6,7,8,9])
          var dange = _.without.apply(this,tempge);

          //console.log('llllllll',wanwithdan.length,danqian.length,danbai.length,danshi.length,dange.length);
          if (wanwithdan.length>0 && danqian.length>0 && danbai.length>0 && danshi.length>0 && dange.length>0) {
            var allnum_0;
            if (dindex==0) {
              allnum_0= [wanwithdan,danqian,danbai,danshi,dange]
            }
            if (dindex==1) {
              allnum_0= [danwan,wanwithdan,danbai,danshi,dange]
            }
            if (dindex==2) {
              allnum_0= [danwan,danqian,wanwithdan,danshi,dange]
            }
            if (dindex==3) {
              allnum_0= [danwan,danqian,danbai,wanwithdan,dange]
            }
            if (dindex==4) {
              allnum_0= [danwan,danqian,danbai,danshi,wanwithdan]
            }
            //console.log(dindex,allnum_0);
            var cp0 = Combinatorics.cartesianProduct.apply(this,allnum_0);
            neddjoin = cp0.toArrayStr();
          }else {
            neddjoin =[]
          }
          //console.log(neddjoin,'neddjoinneddjoin');
          return neddjoin;
          //var tempfirstdanma = _.clone(qianarray);
          //tempfirstdanma.unshift(danmaarray)
          //firstdanma = _.without.apply(this,tempfirstdanma);
        }else {
          return [];
        }
      }

      if (danmaarray.length>0 && danmaarray.length<10) {
        var allfulldan = [];
        for (di = 0; di < 5; di++) {
          var danback = getnowdan(danmaarray,wanarray,qianarray,baiarray,shiarray,gearray,di);
          //console.log(di,danback);
          allfulldan.push(danback);
        }
        //console.log(allfulldan.length,'allfulldanallfulldanallfulldan');
        var allunion = _.union.apply(this,allfulldan)
        wx = allunion.join(' ');
        //console.log(allunion.length);
      }


      if (wanarray.length>0) {
        woutp = allchoose['gen-wan-without'].join('|');
        txtpattern = '(['+woutp+']\\d\\d\\d\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_0 = new RegExp(txtpattern, 'g');
        wx = wx.replace(outstr_0,'');
        //console.log('qian',outstr_1,all);
      }
      if (qianarray.length>0) {
        woutp = allchoose['gen-qian-without'].join('|');
        txtpattern = '(\\d['+woutp+']\\d\\d\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_1 = new RegExp(txtpattern, 'g');
        wx = wx.replace(outstr_1,'');
        //console.log('qian',outstr_1,all);
      }
      if (baiarray.length>0) {
        woutp = allchoose['gen-bai-without'].join('|');
        txtpattern = '(\\d\\d['+woutp+']\\d\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_2 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        wx = wx.replace(outstr_2,'');
        //console.log('bai',outstr_2,all);
      }
      if (shiarray.length>0) {
        woutp = allchoose['gen-shi-without'].join('|');
        txtpattern = '(\\d\\d\\d['+woutp+']\\d)[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
        var outstr_3 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        wx = wx.replace(outstr_3,'');
        //console.log('shi',outstr_3,all);
      }
      if (gearray.length>0) {
        woutp = allchoose['gen-ge-without'].join('|');
        //txtpattern = '(\\d\\d\\d\\d['+woutp+'])[\\s]';//正则([3|4]\\d\\d\\d)[\\s]
        txtpattern = '(\\d\\d\\d\\d['+woutp+'])([\\s]|\\b)';
        var outstr_4 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
        wx = wx.replace(outstr_4,'');
        //console.log('ge',outstr_4,all);
      }
      if (heweiarray.length>0 && heweiarray.length<10 && tags=='wx') {
        heweiarray.forEach(function(hw) {
          if (typeof window['wx_heiwei_'+hw] !='undefined') {
            var formated = String(window['wx_heiwei_'+hw]).replace(/(\s*$)/g,'');
            var allouthw = formated.split(' |');
            var allwx = wx.split(' ');
            console.log(allouthw,allouthw.length);
            var presents = _.xor(allouthw, allwx);
            //var dif = _.differenceWith(allouthw, allwx, _.isEqual);
            //console.log(dif,'allouthwallouthwallouthw');
            //console.log(presents,'presentspresents');
            //txtpattern = '('+window['wx_heiwei_'+hw]+')';//正则([3|4]\\d\\d\\d)[\\s]
            //var outstr_5 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
            //wx = wx.replace(outstr_5,'');
            wx = presents.join(' ');
          }
        });
        wx = wx.replace(/[ ](?!\b)/g,'');
      }
      if (kuaduarray.length>0 && kuaduarray.length<10 && tags=='wx') {
        kuaduarray.forEach(function(hw) {
          if (typeof window['wx_kuadu_'+hw] !='undefined') {
            txtpattern = '('+window['wx_kuadu_'+hw]+')';//正则([3|4]\\d\\d\\d)[\\s]
            var outstr_6 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
            wx = wx.replace(outstr_6,'');
          }
        });
        wx = wx.replace(/[ ](?!\b)/g,'');
      }
      if (hezhiarray.length>0 && hezhiarray.length<37 && tags=='wx') {
        hezhiarray.forEach(function(hw) {
          if (typeof window['wx_hezhi_'+hw] !='undefined') {
            txtpattern = '('+window['wx_hezhi_'+hw]+')';//正则([3|4]\\d\\d\\d)[\\s]
            var outstr_7 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
            wx = wx.replace(outstr_7,'');
          }
        });
        wx = wx.replace(/[ ](?!\b)/g,'');
      }
      if (daxiaoarray.length>0 && daxiaoarray.length<16 && tags=='wx') {
        daxiaoarray.forEach(function(dx) {
          //console.log('wx_daxiao_'+dx.replace(/\|/g,''));
          if (typeof window['wx_daxiao_'+dx.replace(/\|/g,'')] !='undefined') {
            txtpattern = '('+window['wx_daxiao_'+dx.replace(/\|/g,'')]+')';//正则([3|4]\\d\\d\\d)[\\s]
            var outstr_8 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
            wx = wx.replace(outstr_8,'');
          }
        });
        wx = wx.replace(/[ ](?!\b)/g,'');
      }
      if (teshuarray.length>0 && tags=='wx') {
        teshuarray.forEach(function(ts) {
          //console.log(typeof window['wx_teshu_'+ts]);
          if (typeof window['wx_teshu_'+ts] !='undefined') {
            txtpattern = '('+window['wx_teshu_'+ts]+')';//正则([3|4]\\d\\d\\d)[\\s]
            var outstr_9 = new RegExp(txtpattern, 'g');//正则([3|4]\d\d\d)[\s]
            wx = wx.replace(outstr_9,'');
          }
        });
        wx = wx.replace(/[ ](?!\b)/g,'');
      }
      wx = wx.replace(/(\s*$)/,'');
      //$('#testreszuo').append('1.finished<br>2.going');
      //var shortwx = wx.substr(0,500)+' 号码太多，只显示部分号码';
      var splitre = /\s/ig;
      var splitsblank = wx.match(splitre);

      var cpcontent = LZString.compressToEncodedURIComponent(wx);
      $('.generate-bet #danshitext').data('cp',cpcontent);
      //var lens = wx.split(' ');
      var lens = splitsblank;
      var totallen = lens.length+1;
      $('.generate-bet #danshitext').val(wx);
      $('.generate-bet #gen-totaldeal').html(totallen);
      calMoney($('.generate-bet .gen-model .model a.selected').data('val'));
      btn.removeClass('loading').html('生成号码');
    }

    var allfcps = '93 0 0 1 0 -65 39 9 0 0 0 0 0 0 24 105 4 34 16 52 54 -27 87 -53 76 4 96 -95 10 56 31 57 13 -128 121 27 -9 -94 66 -115 95 -99 65 -9 22 115 88 -111 70 113 -61 20 -53 -37 -63 6 64 -52 -122 109 -126 -68 -114 -46 -43 80 116 -63 68 -121 -38 -55 -109 68 74 -33 99 113 31 -44 76 64 -63 99 124 94 96 60 -55 79 40 -109 58 -39 124 -50 -50 -36 75 108 -37 -120 27 41 91 -11 -5 -41 41 42 -102 -37 78 -100 -1 37 1 -69 31 -83 67 -16 30 80 -2 73 76 78 99 30 -103 -61 72 86 71 114 95 7 -90 -53 0 72 48 -93 12 -84 -65 111 104 25 22 -124 14 15 -94 -77 -94 80 115 -67 -7 -111 -15 -84 60 -52 -15 -57 -14 -2 113 16 2 74 38 47 6 47 -51 19 -91 -53 66 -15 28 -98 94 98 65 -15 12 18 -52 123 3 -92 30 60 -91 -69 106 -44 -49 -11 -11 122 -107 100 61 -71 87 11 104 114 87 -30 -18 -23 -61 85 -93 -21 -13 53 -82 54 14 -27 -115 -16 -23 -124 -48 76 76 -73 -126 -86 -75 -114 95 5 99 84 -91 7 -67 41 5 3 107 66 35 -95 82 -76 -28 -18 -81 -68 99 14 -73 71 -12 -34 64 106 -67 7 -92 -34 53 -50 14 -31 -98 96 51 -19 5 -106 -69 55 99 79 61 -69 -9 -66 -67 34 34 127 107 -8 97 84 -93 67 86 -7 67 7 122 -73 13 28 -78 -121 -117 -4 114 -2 120 63 3 102 -16 -33 6 -70 22 -127 117 -53 -83 -47 58 -32 -60 -79 -43 -58 -30 13 -67 73 68 -71 -116 -41 -33 84 -72 -34 -107 94 -50 -65 -122 -102 117 9 -38 120 17 -53 8 69 83 114 7 22 65 122 -36 20 36 94 -90 79 34 -35 -50 65 -10 40 -119 -108 23 5 16 -62 58 94 63 46 75 109 -124 93 124 -41 -87 -94 85 -55 -128 127 -95 113 65 -61 -23 26 65 82 -125 -77 28 62 -36 -107 -72 -125 -96 96 -41 -84 -115 -79 38 -43 2 103 -111 63 33 38 -107 89 114 -24 -60 63 -78 70 96 95 -108 91 107 84 -46 -70 -68 -29 35 52 32 -126 121 -51 18 72 116 8 87 1 -53 60 -96 -97 -44 -102 -4 -44 -108 -7 -60 51 -85 -79 21 63 59 -98 -104 87 109 120 105 -126 79 -62 127 -128 89 99 -19 -82 -123 -30 -39 -40 32 -98 53 -80 75 79 37 -72 -68 47 3 -61 -85 39 27 5 -104 72 -21 36 111 -105 -20 -63 39 -70 -115 -14 29 -78 -81 -125 -63 104 -3 54 42 8 -10 103 98 -70 -119 -80 60 123 -60 46 -37 18 -12 83 99 -20 -38 -24 38 73 -116 -121 -65 -24 -39 5 122 62 -34 56 -88 35 -24 -17 -89 -4 -98 18 46 -91 42 -79 -33 -115 -75 116 -97 27 61 -77 -115 -18 21 64 -1 25 72 -25 51 -6 -14 -73 -84 -45 -51 6 -90 -73 -31 -3 123 -7 62 7 -83 91 -70 91 -63 -103 3 81 51 -127 27 -21 79 55 126 -123 -124 27 67 -36 -82 -31 -46 124 -103 -102 115 -92 -126 -1 14 98 -26 99 61 -15 101 -6 62 88 105 -84 -116 120 -2 -119 -57 113 83 -77 77 -64 46 8 -109 74 -8 119 10 -52 -100 -90 112 -114 -93 -107 62 127 123 89 -106 76 -93 -27 107 63 122 127 -116 124 -82 -119 -51 53 36 -84 101 6 33 25 -63 -51 -87 -107 -80 -39 54 1 32 -80 127 17 -123 -122 101 99 80 -94 40 126 91 -61 121 -47 107 58 3 94 -5 -125 119 90 29 60 -107 -58 48 -5 93 113 -31 82 62 34 105 23 -119 1 123 122 -25 -98 73 -58 -35 24 78 -109 -83 12 -63 -72 -85 96 -127 -8 45 63 -34 -14 -28 39 -120 -21 -15 -23 8 72 89 107 124 -21 57 113 56 -118 -56 -24 -40 -91 -119 -10 -49 -69 37 -41 -95 38 108 -30 -14 29 -127 -17 24 -36 -44 -3 -46 20 -122 60 46 5 -78 47 -49 40 45 -54 89 97 -97 -105 -103 -118 46 -3 -4 97 88 56 2 -18 -99 5 -92 0 -77 -47 101 108 -6 81 92 -8 34 22 7 104 -6 38 -81 -60 122 -113 25 24 98 -20 -122 10 82 -34 -127 125 -128 70 96 120 -41 117 -97 10 72 -15 -6 53 127 -73 -85 34 -5 30 127 -103 -59 89 -104 -51 39 101 -85 -12 -75 37 -13 -89 40 -92 102 -89 61 -6 110 88 80 -45 100 -73 -13 11 -46 -93 116 74 -68 23 -50 99 -39 -30 43 70 86 -76 -108 102 87 -115 107 92 -11 -97 12 -123 -35 99 -106 -99 74 109 6 6 -52 -89 82 -62 -101 39 -6 114 -74 -125 1 -116 104 -40 125 127 -51 117 79 61 -123 118 -115 123 37 71 -50 83 113 -96 16 -102 80 -58 34 -113 -11 -47 -10 64 -48 46 -77 -98 -127 82 106 -114 -13 79 -74 105 16 32 -69 -35 118 25 19 101 -69 -93 -101 -107 89 107 109 -13 -16 101 -15 87 -32 93 -102 31 -39 -15 -34 80 -115 45 -42 91 -31 60 -125 106 -26 -63 95 86 37 -6 -63 125 -94 -54 -123 -103 54 19 70 0 -32 -40 92 44 62 -5 -2 63 -64 14 111 30 93 86 -111 -109 53 -106 44 -85 -93 -79 7 -5 -29 -102 -34 -57 -33 76 89 -125 110 -24 102 105 74 -16 71 82 55 99 -79 -40 -23 41 -89 -102 -51 88 -26 108 125 -89 -125 57 89 -89 28 -13 85 -9 30 58 87 109 -125 12 13 -7 -23 -103 -54 102 -32 -12 -94 84 107 39 -22 34 68 80 -61 75 96 -99 79 -78 43 -78 0 53 51 54 -97 -39 -40 35 80 69 -83 76 74 27 61 -7 -107 -82 33 71 -41 55 25 71 -116 -71 -40 -56 118 -122 69 122 -4 -56 125 109 57 26 -81 42 45 0 -19 -54 56 44 -41 51 -110 -72 -98 26 -80 -34 -61 -10 -123 -93 67 54 95 63 28 -63 24 85 -100 -53 4 23 -108 108 1 89 63 69 -103 -37 -117 76 11 27 56 49 1 21 67 -22 124 60 124 -9 101 106 -1 -111 127 -88 -66 96 -113 -115 -34 -95 -37 -23 -50 -2 -50 -18 -113 68 7 -5 49 12 44 -57 -102 88 -71 -20 -26 -99 -60 97 -66 -107 71 -54 -72 -79 94 118 -9 -14 94 -40 -86 55 -43 51 -8 65 64 40 -104 -44 114 -51 30 57 -42 -121 -62 111 3 -115 16 82 2 119 -34 -62 -45 -116 0 31 -112 62 73 -13 79 -119 78 -72 121 96 -106 92 -34 46 55 -12 101 -6 -34 64 -7 18 100 -1 61 70 0 -20 57 -79 -121 -77 -97 -21 -4 57 21 -65 49 83 -51 -56 14 -101 -19 100 -11 -59 28 53 39 -7 -95 -63 98 -113 38 -55 116 -91 8 24 85 104 -111 -53 42 -114 -30 20 -16 62 20 112 -70 -120 64 -127 39 15 6 -44 -18 6 -61 68 29 22 -90 34 19 86 -56 -22 -47 91 -96 28 20 -39 -55 -118 -30 -79 19 -95 -98 66 -22 -108 115 57 -51 43 -54 12 -126 -107 -86 119 -73 117 -65 69 83 -109 -14 31 -124 -48 -104 -11 11 -17 -94 -110 -47 117 -41 16 66 -98 18 27 -104 28 51 90 55 25 112 -42 70 31 97 1 -74 118 31 -81 16 -33 36 -67 123 -72 83 -67 42 63 71 -10 -98 -57 19 63 -123 -128 -93 -123 15 -37 114 64 110 -7 46 -29 40 76 -125 95 -17 111 -84 16 -17 -50 -32 -49 60 22 -117 59 54 -36 -40 -25 -47 110 -39 20 -90 119 118 102 56 90 -111 19 127 -69 -61 -65 -75 -36 72 10 -11 5 36 50 -29 31 -119 -27 28 -95 9 -87 85 68 -90 -121 -17 118 78 -86 85 -47 -103 100 66 10 -57 53 47 90 115 7 -61 80 -29 -71 64 -18 -110 -86 75 -8 -98 -39 23 -111 1 -106 -126 109 -120 0 -127 -5 -71 -50 -23 63 29 38 -35 -82 69 -105 4 -56 89 -113 -35 -111 4 45 -47 99 73 -34 78 88 38 -33 103 -44 63 -16 -89 -75 -102 -37 95 -1 -85 -77 -79 -17 -35 -92 100 -60 -52 -21 -59 -65 -87 43 54 -18 -89 70 5 100 110 -123 -39 101 -53 -1 90 -14 -4 92 50 40 90 -37 -69 -27 -104 -73 -115 76 -119 10 86 65 103 -89 108 -98 48 -23 -65 -33 -22 -79 126 91 126 -65 -81 78 45 -104 4 -76 -24 17 -7 -69 64 -126 -9 125 23 -124 -88 77 76 -82 -70 -71 86 54 23 -83 113 95 66 -1 -104 -49 -44 -19 54 21 5 -28 -87 82 -122 -36 -127 -1 -76 120 -123 -66 11 -19 118 -3 59 125 -122 -43 111 91 -34 -75 -84 -91 -2 111 19 -81 -108 87 -81 74 77 96 16 99 -96 -58 -41 -113 -101 42 -106 -1 36 55 75 -12 -127 25 50 5 34 -86 -29 -62 52 43 61 69 -56 -102 -57 -67 -81 66 -27 -38 60 59 -87 84 -88 115 -74 90 65 -72 111 113 114 -56 -117 71 105 34 85 -4 -106 -16 78 39 118 6 59 38 9 -88 -64 22 -93 50 120 -16 94 87 -65 22 -110 12 25 103 -74 -109 -4 109 -62 80 -126 -70 30 -97 73 -25 -69 17 114 -65 116 30 -12 122 -15 -84 -2 44 72 -85 -32 80 -111 -96 95 -19 -121 122 60 38 -127 77 41 54 64 34 -38 -112 99 48 52 -48 -68 -116 -88 -15 49 -102 -72 102 21 -100 -29 44 -61 -42 112 58 -59 39 -5 -122 -64 -126 35 -78 -111 -31 118 74 54 121 103 -83 91 41 111 -32 74 -103 -56 26 15 87 20 -21 105 -1 65 -1 -69 27 56 -97 -19 62 -1 105 -6 -39 39 -88 13 40 119 110 -24 76 -106 -25 -21 102 39 -99 -5 51 17 70 -12 24 36 88 -22 88 -24 38 -80 -100 42 88 -31 -118 -38 -86 -120 126 83 84 73 3 -25 -4 -10 126 113 -38 -80 17 47 81 -93 -18 8 -86 -52 100 114 100 123 -127 70 73 72 -37 102 -50 -94 62 108 -118 111 48 -118 -81 55 60 97 109 -103 -89 -80 66 -70 -27 108 -16 -98 -124 62 -62 -103 97 118 -50 -86 75 54 -46 -83 19 -12 34 124 122 -85 6 63 87 -77 11 -119 -59 82 -20 -99 6 126 -19 -82 49 -34 -64 121 72 -116 -36 -57 -110 -104 -114 82 44 -83 -128 -92 -99 70 42 99 -3 -124 -29 -94 -126 105 120 -73 67 -93 126 72 119 116 -124 -11 -124 71 -92 -59 -79 -13 75 -24 70 -55 92 115 46 64 22 -17 110 -75 5 96 -100 -47 67 127 -100 80 85 -36 105 -2 8 127 41 -76 -13 -15 -24 98 113 -108 -29 109 -51 112 43 12 -95 -28 109 -47 4 -123 28 -45 93 95 -52 -50 39 -64 24 -72 105 51 -84 -80 -107 81 -36 -77 100 102 -33 -115 -81 -12 -28 44 45 47 121 -41 49 111 -78 -34 -9 -108 111 18 9 -76 -17 -55 55 17 90 -124 11 103 60 83 2 16 2 93 -123 -58 -4 76 12 124 60 94 -94 -125 -13 -41 -4 53 -97 -13 -90 -29 120 -103 -123 -26 -118 -47 64 -28 43 -42 31 -77 52 -15 9 -5 124 -18 -120 53 -58 -126 72 -87 36 -69 87 41 -11 -53 24 -117 16 92 0 92 -86 10 119 -28 -113 -14 -74 -102 -69 -117 56 -26 -9 32 -22 -42 53 -65 -65 55 -35 -2 -32 -69 82 3 -70 -122 -96 116 80 85 -19 -62 37 114 83 -89 11 -61 2 -24 -61 -28 13 113 84 -122 -93 -77 3 27 -22 8 39 -82 -125 48 49 -125 74 -85 44 -10 38 16 23 -32 90 -9 94 -66 46 -52 52 -118 -108 -107 82 105 -40 5 -87 -10 -106 63 49 -22 -16 -12 7 -10 34 -128 -4 -81 108 109 -110 92 24 113 104 -7 -75 -64 -54 -22 -29 -96 118 71 84 -85 -8 -92 -86 81 2 -31 -5 18 -100 -58 102 65 122 -91 -59 64 -19 -62 -93 -69 -31 26 -14 44 60 -122 86 -74 -77 -126 92 -119 43 59 -116 50 -70 85 -66 -109 -45 -12 91 7 116 92 74 43 -70 125 -6 82 112 -16 -5 -50 70 19 40 14 81 11 -60 113 -57 -83 -33 22 90 100 -58 -25 -37 -25 -66 -114 -106 44 -11 11 -17 -94 -110 -47 118 20 -39 -55 -118 -30 78 -29 -52 -64 50 -94 -65 98 -122 35 14 126 55 105 28 -48 -109 47 -34 -76 67 -104 -83 -99 59 35 -85 -120 -117 -106 -19 -79 -123 9 4 39 30 -66 37 34 -82 42 46 -82 -82 95 3 -103 -13 11 -101 38 27 83 -58 -13 117 -121 -42 14 44 90 -51 -76 -91 22 -107 -27 -125 96 -110 -8 75 50 -118 72 56 28 -62 102 -67 102 100 -92 13 69 -110 -119 -118 -20 89 82 -78 -47 15 -3 74 39 -1 97 -126 17 70 127 -125 63 98 -80 30 -51 -2 64 -40 113 -105 -114 66 126 94 -55 -93 95 -60 -10 63 -87 -19 80 -50 -18 13 -4 5 93 -105 -68 54 -40 -68 41 -36 -102 -39 127 -21 25 -19 23 -65 16 -41 -87 -46 -58 -113 -113 79 123 116 53 -13 -121 -105 46 -122 -66 -8 -88 58 45 -26 -70 106 -54 -111 104 39 90 63 -24 -70 -86 22 9 -41 2 62 -27 32 -118 58 102 46 -18 -42 -87 18 36 -75 -67 -63 -52 37 -61 -16 94 37 33 45 -76 4 47 -110 7 100 -8 19 110 124 -76 65 -92 -123 -71 57 22 -40 71 -66 46 -122 39 3 56 -54 21 23 -69 61 11 126 1 23 -54 97 -38 32 43 70 -109 -73 -57 -36 11 85 25 8 36 -67 -52 127 -30 24 88 17 34 60 -19 76 -49 -106 69 -6 -34 84 102 -34 0 -116 46 -104 -54 3 -77 69 126 97 96 101 -44 -35 -80 58 36 123 113 72 -126 30 -43 81 -55 11 -57 -22 -95 45 -61 -75 -86 -97 74 -46 -75 -10 19 -45 -104 113 38 -79 86 -47 -72 122 -79 85 -125 -44 26 30 -118 -97 67 97 -122 34 -10 -86 -113 -35 -2 74 92 -128 85 52 55 123 -49 -3 -63 -65 62 -22 -51 -57 -7 78 119 -103 -37 104 -55 -107 -28 -108 60 -24 -83 102 -50 67 43 -44 75 -37 -91 49 124 -3 -107 -47 119 92 70 -103 9 -90 101 -33 55 3 114 -118 -126 -83 -5 111 -53 -127 -102 -33 66 -76 -116 -5 -107 -57 -88 33 118 36 -95 -69 101 59 -64 90 34 48 -6 -122 -95 -119 -66 59 -75 -40 13 -41 64 -44 -109 25 -28 -46 -55 -122 -5 -56 -97 -113 116 21 -70 -103 119 -58 81 104 96 67 75 44 93 87 -45 -87 127 -102 5 72 -67 -91 116 -97 -61 -117 -97 -21 -102 -126 -58 81 104 96 67 75 44 93 99 -68 -65 -128 126 6 -123 -33 -19 -10 102 -7 -110 -84 0 -93 13 -13 -127 10 122 -70 64 -118 -36 -58 39 -106 3 76 -83 49 13 105 87 39 -11 -67 53 -88 -56 -121 118 -77 -15 69 -32 -92 -80 7 -45 -45 29 -45 -56 -30 -117 24 -4 44 -128 24 -106 78 -57 -52 -98 -50 -77 48 -30 104 -21 114 48 -121 -77 5 22 120 106 17 -81 7 -39 -32 98 43 12 -107 -125 -117 -90 78 86 -51 64 50 -5 -61 -85 -44 126 14 61 40 -7 18 -6 -77 -52 58 43 44 22 -26 -119 121 -78 40 -53 119 0 19 1 -39 -87 -52 85 -124 63 -113 60 107 -13 -21 107 -51 -10 14 -46 -126 -11 8 -19 -9 -109 4 -45 109 -64 82 12 -122 32 -11 -22 50 -80 19 -80 98 -39 -45 123 100 -17 -29 -8 21 -114 -22 58 -14 39 -29 6 -98 40 22 -69 127 6 -96 -16 126 28 51 125 30 -50 -40 -64 127 124 -83 -12 -90 49 71 -13 14 -22 -118 35 111 75 -32 67 98 -90 -74 122 -71 14 -54 17 98 -87 29 -125 -49 -71 72 10 -89 7 -32 98 -39 -125 83 -14 -102 -61 81 98 -34 -63 -3 -85 -75 2 -84 -97 74 -82 -37 -11 -48 100 -62 105 102 -34 90 64 -12 -84 97 116 71 -24 6 -61 107 42 -63 -12 -74 88 -34 -85 56 36 10 -83 49 -98 60 -57 -9 -75 93 79 -66 -78 71 103 -88 -93 70 -39 47 30 -20 -15 88 -21 -59 -88 0 95 -27 40 -21 -112 -26 53 105 -126 23 -61 71 -38 53 -57 88 40 -36 -17 46 -12 -32 -6 -108 74 -75 -112 104 62 102 -82 94 99 7 -37 91 126 78 -103 -69 -28 5 -54 -70 57 -27 -70 0 62 -69 -94 -39 -63 100 -21 8 -32 37 46 -85 -67 54 62 -1 23 101 -60 -1 -46 127 127 -18 12 -82 17 56 118 -109 114 -95 -128 -15 106 77 18 11 -67 41 -76 26 -82 62 2 -116 32 -15 -53 118 62 46 6 26 -78 49 110 -52 99 103 -64 71 38 53 -46 -50 66 27 -91 -124 -6 -97 102 97 -44 -22 42 27 79 121 83 -116 -47 -121 -17 -99 100 -46 -57 -25 -35 -117 -61 49 3 31 73 6 -117 -66 -104 -55 -84 -64 -77 23 -16 -127 56 -9 -78 -72 -98 -113 45 -108 27 87 79 120 95 23 60 5 79 -12 -92 -91 115 39 -98 -70 57 -122 -5 56 26 -84 45 85 51 -94 49 87 91 -64 -70 -22 42 -112 -95 -95 -26 40 -94 116 -38 77 -9 -10 -93 115 -18 30 -44 -9 -5 -99 -39 48 -93 95 106 80 35 -67 26 72 32 61 121 -78 -113 16 -98 -128 -59 94 53 97 -127 101 77 98 -7 81 -34 -6 4 94 18 103 50 73 -35 -96 -53 82 -119 44 107 -1 -69 116 -14 14 100 100 118 -18 -81 30 109 79 90 -82 99 117 -85 50 -47 -96 76 39 78 -28 96 36 71 -122 -46 45 119 10 63 -42 61 79 14 27 3 40 -23 -66 68 -112 15 34 -49 -78 -33 79 -121 -26 124 125 10 74 20 72 63 99 -78 -16 -14 -68 -65 57 75 89 -55 -20 -45 -17 127 -68 88 91 3 83 -17 -14 -102 -76 -66 18 107 43 18 -11 -23 126 -22 -13 -116 28 -38 71 -24 -78 -44 8 -70 -5 -62 68 56 -87 116 -126 16 116 -55 -31 -30 98 122 -19 -98 122 40 119 103 111 -104 -31 103 63 3 115 -110 -65 -76 -39 -40 60 -36 7 7 34 0 -88 43 59 100 -38 -100 58 108 45 -16 -119 -109 67 -97 -17 20 -26 8 -110 122 58 -18 -29 -33 -105 -115 -112 -28 -18 44 82 -68 50 22 96 63 -11 -73 -21 8 122 -113 77 -78 -87 -51 -103 -99 -7 -101 66 67 63 4 108 -60 16 84 -120 -43 35 100 86 59 -52 92 24 -29 74 -116 -36 20 -125 -52 -14 123 69 102 92 -28 -29 6 -53 -99 95 -17 66 23 4 53 37 49 -100 97 -26 -50 -91 14 59 -89 40 1 -49 92 -126 -78 -3 123 102 98 -67 -85 -68 37 74 46 44 -113 -3 -105 11 -76 99 63 67 -105 -122 71 84 69 46 -25 -4 -125 34 -53 120 24 125 -79 -90 90 98 -35 29 106 15 17 -53 29 15 -31 41 19 -97 92 5 75 -125 -23 -75 -2 60 -123 -55 101 85 77 13 127 -82 -48 -65 31 -28 -31 123 26 -36 122 67 31 28 81 41 54 72 54 32 -115 56 37 3 -67 72 98 12 -59 116 -81 -19 -37 -61 -84 25 83 65 34 36 32 -115 53 112 122 -109 20 -91 22 71 97 24 -88 33 118 36 -95 -69 101 59 -64 90 34 48 -6 -122 -125 37 -22 5 32 -70 116 4 -13 -72 99 60 59 13 13 -77 -69 6 20 26 -60 -42 48 19 -17 49 -94 33 123 -49 -50 54 72 95 68 -85 25 42 76 -50 -96 -74 -95 38 111 -113 97 56 -15 -71 -36 -41 -114 95 81 104 96 67 75 44 93 87 -45 -87 127 -102 5 -21 54 3 -74 -73 82 18 -80 -14 17 35 -85 -58 -126 20 28 58 -4 79 -100 7 78 -7 -83 111 -33 -21 -68 -66 -36 -2 127 -103 100 0 24 -92 -128 -31 119 -90 46 0 36 9 36 8 26 -119 -112 26 75 -62 -8 16 -13 -83 -65 -42 30 85 -24 119 -25 59 -19 -71 -39 44 -17 -84 -49 63 -72 -7 -110 -44 -119 -42 -37 40 6 28 89 -42 122 -60 3 2 54 -72 90 -12 -38 30 41 -65 60 110 -50 43 -122 -103 105 0 -60 80 -48 -35 -45 -64 53 -41 -32 -99 -86 -33 -71 -38 -75 -117 -22 75 -77 -113 91 6 -117 22 126 57 100 -6 118 -22 68 -15 -82 -123 103 48 -21 -10 77 100 -71 -122 -78 -61 -31 -8 51 88 -128 79 -56 73 -29 47 91 0 -14 3 41 -52 -99 -36 -84 -65 -41 -115 -3 104 -117 92 -98 -125 -29 42 23 52 109 76 76 104 103 73 -120 -78 26 -55 92 -13 -76 125 -71 46 7 10 -111 84 -96 -48 71 -37 17 -84 127 125 30 -49 -67 -60 109 -38 -107 -117 48 -1 9 -82 -7 -98 -106 66 124 -122 83 103 88 -43 51 81 -9 -66 6 -94 103 69 39 -5 -96 -75 -92 -126 -52 -13 104 54 114 33 125 -38 22 107 -79 61 36 5 -84 -127 -33 105 -2 4 39 117 -69 -60 -75 -6 -45 -63 -38 75 101 -36 13 55 -20 -79 60 61 -121 -9 108 50 119 -103 -124 29 48 -124 -114 -41 -86 13 -120 -87 -11 78 4 89 19 -35 98 -97 120 -60 74 101 -60 -103 -23 0 35 -86 87 -29 -28 -120 -14 84 44 105 45 -59 120 -32 18 19 49 -23 92 122 -79 -77 -80 -120 -90 -106 -58 79 -47 -114 57 43 -122 62 25 57 -35 27 -1 123 -80 58 -17 4 53 -22 17 -2 -27 -38 80 7 49 -83 -108 73 96 14 122 -124 55 18 -51 -48 -69 -101 38 107 6 -64 -124 48 52 58 -102 -7 -13 -123 77 78 30 -7 -104 37 -87 -48 90 -102 71 -77 101 -105 29 -30 104 -46 127 127 -18 12 -82 17 56 118 -109 114 -95 -128 -15 106 77 18 13 -73 -58 10 94 -103 -73 -46 -113 82 -125 -99 -87 17 51 -30 73 26 2 -74 3 12 -45 72 -93 -63 -72 113 34 -76 -40 -54 3 71 6 115 7 -14 41 81 105 -22 -40 61 -64 63 38 92 63 109 22 -95 84 -109 70 -90 -56 49 83 35 67 -75 -16 106 -38 14 -98 7 -33 -120 -110 71 -47 -99 56 121 63 -65 -43 -128 37 76 -90 -30 -72 86 2 36 -51 89 39 -3 -98 29 -19 -96 -101 77 44 -108 -9 40 -105 -6 -101 74 -31 -5 32 27 98 68 20 3 15 117 58 68 -106 -112 118 115 29 116 -124 65 114 -32 -63 122 -30 -72 -58 7 -69 -4 58 -98 109 -34 17 42 -74 98 -60 -124 -122 6 71 38 41 -76 -54 -42 6 126 -6 106 -75 116 -58 -37 -125 -69 3 46 66 105 12 -113 19 30 3 -81 -18 23 29 -24 81 117 -85 50 -47 -96 76 39 78 -28 96 36 71 -122 -46 45 119 10 63 -36 -77 120 -50 82 99 -109 5 11 105 51 -97 79 76 -18 29 -13 62 -75 -7 115 77 -52 79 69 -6 117 -64 86 -88 -11 -99 87 -51 -111 1 -20 116 -37 -19 -30 -107 -118 77 -20 99 -115 -60 -80 9 80 -28 109 -97 57 -63 31 125 39 22 27 123 124 -39 -33 80 31 -62 -60 -72 103 -86 -113 44 88 -40 30 -63 -44 84 115 -16 56 -81 62 -75 -101 -76 -66 -127 -25 2 -80 71 125 124 -46 10 -23 -87 -128 3 -49 -125 -119 24 -127 63 42 -96 85 88 70 5 -79 32 83 -105 -88 36 37 119 13 70 -66 121 -2 -10 50 -38 -112 26 100 37 7 -125 -48 -101 -121 -51 -78 -70 2 113 -53 -75 -60 -53 -81 46 51 -103 -82 110 -26 -116 -77 -108 35 -116 -87 -71 -49 86 -107 40 -37 -111 86 -75 10 117 49 -97 -104 84 -74 69 100 -5 95 106 -18 -115 105 -46 111 108 -2 123 110 70 -109 -86 65 -66 -113 -13 24 41 -80 -41 26 -28 87 40 -58 38 31 -123 -81 -111 47 61 90 -58 -92 -88 31 112 -78 71 43 -55 -13 33 54 76 -42 -82 17 17 -38 -66 -118 -66 73 -7 5 112 67 -69 -51 18 12 124 -6 111 -48 26 -12 -108 -21 -47 -54 94 56 -93 -1 45 -59 -106 79 30 -107 -34 17 -57 -63 -96 -68 -94 52 -95 -78 -55 -38 -45 72 -77 -98 -86 23 102 -23 84 -8 -92 50 -47 81 -83 3 102 -111 0 -49 69 -79 44 76 -16 11 79 48 -89 40 26 -66 -13 -114 -51 -128 -6 -81 -93 121 -112 -53 45 -112 94 114 -27 37 -32 92 84 -54 -111 124 6 -63 99 -13 -70 13 -89 -120 40 71 -63 36 74 -6 -97 68 48 92 27 6 -50 111 4 -65 -110 -39 25 -94 -15 69 -92 -86 84 42 -32 22 21 -122 -121 19 -76 -58 57 -11 -79 7 -19 51 85 29 -93 18 -64 26 81 -74 -7 -14 14 32 49 75 -38 -90 92 -83 12 -20 -112 22 -119 113 30 1 -115 74 -125 -68 82 -7 -64 107 -24 113 84 46 -6 118 55 -33 -90 -106 -128 -43 85 69 12 -82 70 37 127 9 -124 19 76 -54 -50 69 13 -35 96 13 -48 -98 -25 -11 21 47 -47 91 -70 110 10 44 -43 -90 -48 -116 -86 -106 97 -48 93 -2 -94 46 -40 25 118 48 10 66 -40 -6 -90 -32 -92 -81 63 -69 -65 108 77 -67 95 68 -74 -109 -24 -1 22 -31 113 -126 -96 -10 -92 -67 -71 -38 -24 -63 41 -27 -82 2 -42 54 -6 -8 -106 -36 -5 -75 -13 -40 16 -2 85 80 36 119 85 98 19 -39 -22 29 1 -122 21 99 49 -2 -95 -76 -101 71 -74 -29 -99 -113 126 107 46 -18 -11 -85 108 14 -49 -22 -117 75 -19 105 103 96 38 -27 117 33 106 -121 -88 -102 -113 -5 -114 8 -106 -101 -54 -120 -43 -61 89 94 -121 25 101 17 59 -38 -86 -38 44 -102 -18 -59 8 -31 -27 -119 -44 -75 -3 -85 4 -33 66 107 -73 59 -46 -4 -73 -73 2 -47 -123 119 -126 -18 113 13 -43 50 7 -46 -104 118 53 -114 -104 -104 89 -118 -83 -34 114 -80 -93 -45 54 -68 -11 46 -34 -75 -72 83 100 -68 8 -28 112 -78 62 116 16 108 20 61 -101 -110 -40 -104 -65 -65 -108 30 -17 42 -109 39 100 -99 127 -84 -45 45 29 -51 16 -101 -66 94 -70 -123 -91 4 -22 125 10 -35 79 125 -120 12 -109 55 -126 -115 -92 -10 -90 -61 101 -1 -67 -80 -45 -47 -113 -29 89 -107 -81 -14 -75 105 27 118 -73 111 -85 108 -54 53 -117 -95 113 102 -48 41 17 114 -2 16 76 32 30 -53 111 21 -113 125 28 79 83 119 104 36 -5 -6 119 74 -118 -108 101 -32 -125 -96 127 49 113 -110 -100 39 73 124 -35 43 -33 -70 110 4 -28 16 -62 97 -120 -68 9 53 -119 94 111 -31 -67 17 60 -77 -116 47 -13 111 34 -12 -84 58 -33 15 -61 83 -97 24 -53 -81 49 56 26 56 60 40 -109 88 -78 120 58 46 -84 -3 -121 105 -7 -58 -54 -68 9 116 25 84 120 16 -86 -114 114 42 -1 -126 82 65 11 -41 -19 -6 -116 -90 12 99 62 124 -65 22 -98 82 -63 -105 -116 -90 -61 -85 -109 -118 53 73 96 117 -70 -20 31 -108 -103 -5 -97 -44 56 -103 -105 74 -84 21 -124 40 77 2 -72 108 127 -41 -6 -5 75 104 -42 -89 29 88 48 -8 -47 -1 -62 -42 -118 56 40 -39 66 -110 28 104 -89 3 67 86 -110 -77 -122 34 -125 22 -95 54 -104 -103 52 0 -23 -91 92 -94 126 5 4 64 28 -46 -49 104 2 22 93 -45 -43 -69 -43 5 -23 107 12 4 -67 104 18 122 116 -22 -128 92 -66 56 -10 -76 -35 84 89 105 -17 118 116 -55 106 -30 32 125 -6 -3 -14 -49 101 -9 32 25 64 52 60 -42 66 -44 84 -2 111 -96 -43 -55 -31 -49 113 41 -120 125 -3 23 -4 -98 -48 2 -120 -126 -1 77 66 -38 0 -91 -128 -67 110 38 28 -23 124 -121 -6 90 -33 14 112 -52 -35 125 -26 -85 -52 -48 98 89 104 119 -62 -25 21 -90 -18 -126 92 -72 110 -112 -125 -74 -92 -83 -41 -7 -1 -12 -29 112 17 -72 99 -43 -70 1 -70 -122 -5 -38 -67 82 -102 -6 -114 2 -44 -41 -33 -46 -5 -100 -72 23 -71 -67 97 26 -2 46 96 -23 -62 114 -25 42 -93 72 -84 -55 -87 -109 50 -123 -125 99 12 -37 63 -86 -88 -51 -57 115 9 36 105 -52 -86 46 -100 98 -6 110 3 105 -96 15 -110 -40 47 -113 -60 77 52 108 51 50 38 -9 -122 36 -40 86 -121 41 -87 -72 -46 -112 -60 -125 73 -45 -37 116 -39 -62 127 83 31 -128 86 15 -48 -121 34 -39 40 -103 96 102 -12 -57 41 15 -114 -104 -75 124 -13 -121 42 -92 13 13 -16 99 2 -84 3 -25 -124 -22 82 72 96 51 -71 100 -61 -11 -110 -71 -15 -61 91 82 59 -118 -41 -109 -86 -2 36 112 -79 -11 -127 -123 35 -89 82 121 -119 42 -90 116 28 52 4 92 -1 -20 35 -114 -41 -115 -35 88 -57 106 57 120 -116 -41 99 6 -98 90 122 117 -8 -57 -113 -41 -54 5 -127 64 6 5 -112 25 -89 -122 9 -39 12 118 28 -126 -11 -43 -81 -69 49 24 16 -62 20 4 -21 -14 72 -29 -4 -3 60 -1 -34 79 106 -111 -86 -46 -47 37 35 -39 99 -50 31 -77 -73 111 66 -112 -116 50 -118 -5 -128 77 82 -101 -12 -18 97 -63 -49 -67 -25 -111 99 -22 -82 -69 -43 4 23 -92 -23 115 -124 56 1 8 -30 18 123 -20 28 -75 10 92 122 51 -59 -102 72 75 58 -67 56 64 -3 93 52 -70 94 -89 -26 -82 -117 -50 82 62 19 118 -59 9 -38 83 -33 72 119 -88 109 45 -22 70 77 -78 67 -60 99 78 -53 -8 -72 16 77 -113 52 -80 -27 -80 -59 29 93 -38 18 9 -17 114 35 -22 -3 35 -29 -6 -52 119 -24 77 -1 67 51 122 32 103 99 3 124 -38 -29 12 -43 -73 -72 9 -127 82 116 105 56 -74 90 65 -72 111 113 114 -56 -117 71 105 34 85 -4 -106 -103 43 122 -35 9 1 126 116 -10 105 71 18 -85 -65 -25 92 93 29 -117 111 -3 -74 119 -100 -12 90 9 -122 -119 -79 -51 -46 31 73 -123 -5 90 47 -53 54 2 -128 15 -7 63 68 84 -27 -31 101 -48 54 -47 -25 -22 -82 41 -83 99 123 84 -64 -72 50 9 78 -68 -51 102 -27 108 65 -45 62 -108 70 -55 -47 -122 -29 68 -16 -58 -80 64 -31 -64 44 -82 -94 -97 31 65 -60 105 -123 -50 -106 0 -78 -1 24 91 68 -59 -69 -2 -107 -48 -86 86 -2 52 85 -123 -1 65 26 -24 104 -43 75 -11 -13 6 -46 6 -11 -2 -119 53 28 81 8 -101 68 -52 -80 -101 122 -76 -81 -41 -78 49 -29 -106 93 63 65 -59 118 20 -88 -58 39 -124 -97 -84 -50 68 -106 47 9 -112 -76 117 -106 -69 -108 22 -44 -54 53 -32 86 -19 69 64 70 63 127 45 -30 62 46 -119 -64 -86 91 69 -43 18 -64 -39 24 -18 25 65 -116 88 93 -39 -112 -3 104 69 -120 123 109 -23 -70 -127 8 59 -88 -16 59 -110 52 70 -51 -117 49 3 35 -22 -9 67 -17 2 11 -37 37 -110 43 -13 -121 35 -118 -91 122 124 -91 7 -112 119 -78 -29 -123 -88 121 -76 22 -29 7 72 85 -70 63 88 122 -28 -11 77 -65 -29 -90 -95 -118 57 -94 67 108 -80 -32 61 81 93 59 3 33 -81 122 -3 83 -51 101 -1 39 58 -80 26 86 113 103 -37 12 -28 -73 -55 -15 -77 13 -79 72 19 31 121 89 68 115 -50 5 -108 -124 -22 -69 -51 -15 118 -39 -77 -71 94 26 37 -93 -17 106 118 -2 101 31 -35 45 67 8 -126 89 92 107 -64 78 94 75 -90 -93 -102 120 23 44 92 36 -119 -16 -121 76 -105 80 51 -128 -46 -119 -63 -76 96 24 36 109 -101 -92 106 -12 60 12 -113 112 -32 11 -73 87 -30 -118 56 -94 -114 20 -55 -15 -49 -125 114 81 -23 123 -103 83 122 68 -121 -25 123 -29 -84 60 -41 7 -107 -94 -103 -68 29 93 17 -22 -101 80 -98 -109 -14 -71 108 -67 41 -18 -125 -43 -77 -21 94 -30 51 38 64 82 26 -75 18 126 39 87 106 66 -79 61 1 13 -10 -117 -8 -95 -9 124 -74 -79 -78 33 -111 -71 9 -103 -29 121 28 -111 -17 42 -69 33 120 -80 -30 55 -49 -21 36 -97 102 -7 117 -73 108 22 -83 49 -63 -67 109 -43 -109 67 -115 -127 61 -13 50 -49 17 -94 65 -80 58 15 -90 10 -27 62 -54 -11 35 -89 -43 82 -65 127 105 92 32 -73 -64 -127 -16 -13 -98 59 104 49 17 125 -106 -127 80 23 4 -56 71 -62 95 7 -48 -97 -1 45 78 -103 -112 20 -83 43 -96 -56 -89 90 8 19 66 60 -80 38 67 -51 -74 -87 -27 78 40 -37 38 91 68 105 -78 -67 111 47 122 -112 84 22 10 10 62 -81 -116 72 -12 -34 67 109 54 35 -8 -76 -2 71 -127 -21 -18 -51 71 122 -102 -38 58 -53 -57 -100 -39 -98 -74 -74 -92 84 91 -43 -51 -124 99 21 -48 91 -43 -6 -44 51 31 -12 30 108 108 38 32 -25 99 -24 2 31 -89 -36 99 102 -84 -86 -93 -124 118 -71 -56 24 -21 9 115 77 96 -95 -126 -20 73 34 19 31 126 19 -93 -74 -61 95 88 -41 -85 -116 6 50 -24 115 -60 -124 28 28 69 -1 37 -64 82 -47 37 -32 -6 -2 65 -28 -89 29 -64 57 -3 -79 2 -33 119 -49 80 86 16 78 34 57 -127 22 -58 61 12 -76 39 37 -22 -7 -104 -30 108 73 39 40 -63 -88 76 -100 19 -18 -11 52 115 -109 75 -98 -118 -32 58 -71 -51 -75 44 -13 121 10 101 7 -96 119 -95 111 2 -90 -115 83 22 56 -62 36 57 70 40 15 -9 75 -110 125 59 -73 -101 93 18 86 -101 126 29 27 96 -115 61 11 -38 -60 11 111 102 103 -99 4 77 -91 89 -84 63 38 -114 -75 -87 18 120 -81 113 88 -84 97 81 17 118 11 36 90 -94 -93 -40 31 -50 -20 23 -84 -126 42 71 -102 41 49 -1 10 -98 -115 -29 -59 -7 -119 106 99 86 -87 -11 127 50 -100 -68 -96 1 -58 -127 91 18 -95 -126 -48 -32 -35 -13 -123 -53 3 -69 48 -88 27 -42 -71 5 80 13 -64 114 -92 -27 -53 47 -112 -33 12 49 6 -87 -55 31 -28 69 -37 20 11 89 34 91 102 -28 -34 39 22 87 -82 24 -48 -75 -37 124 -65 21 -2 80 -72 -42 -27 -101 -121 64 -27 -45 83 -115 39 -103 -11 50 1 9 -85 14 -105 37 86 -54 38 92 -42 -115 112 -74 -76 -111 -69 -39 -128 -73 -117 100 69 -17 95 -5 97 -99 -58 -38 -113 102 -14 -19 67 34 -44 -43 124 -25 12 -23 12 -101 114 11 52 90 -76 -19 -30 -48 -104 -88 -21 45 -70 -92 -81 -112 -47 -55 108 77 -49 41 55 -8 -49 123 9 -44 -78 -78 98 -108 114 -94 -111 18 -80 51 14 11 -106 -93 1 -21 -124 -45 34 -112 -37 69 -80 -33 34 117 -123 38 -77 114 104 104 44 52 -25 39 -35 11 -107 -31 -13 -71 23 82 -7 -64 107 -24 113 84 46 -11 -69 -63 -99 -120 -44 -37 -69 21 88 -8 23 -20 -14 74 -108 62 -112 47 103 -65 -26 -10 91 89 -104 -84 80 69 -110 78 -92 82 -47 10 -67 29 20 55 -41 -85 8 -95 1 111 31 -110 -111 -115 84 66 86 -17 -76 111 -5 -98 115 -1 -57 63 -50 -119 -89 69 58 83 73 -37 7 4 40 127 -31 -123 -54 -114 89 101 54 -97 121 -15 79 30 67 -46 111 63 -22 -49 -65 -74 81 89 -61 31 -60 -9 -57 -45 89 -51 -55 52 32 -72 116 120 -7 -124 75 -58 25 -125 -82 79 51 103 124 -81 -93 81 123 121 86 -85 120 -9 28 -84 -27 68 11 76 30 23 13 -41 52 90 -59 -68 88 51 48 -23 91 60 -82 84 -56 -57 116 35 -96 14 30 25 -66 -79 97 -123 114 87 -49 -55 41 10 -77 3 -97 -55 -54 -90 2 39 -86 89 -36 -65 41 103 99 93 109 -69 -108 46 9 -11 -19 21 68 -97 -88 -18 46 95 115 -47 -35 -115 -126 65 111 -86 -14 39 -29 6 -98 40 22 -69 126 -13 121 -7 -121 -59 -35 -1 110 45 -86 -96 -23 127 -9 -114 38 101 106 -113 -35 -117 107 -123 92 2 91 102 -13 -73 63 -98 108 95 -98 -24 56 -84 -96 -74 109 14 91 62 -28 57 105 125 82 -127 -109 20 62 -16 126 -88 6 109 24 -100 -5 98 -106 78 105 90 115 0 125 76 14 -128 109 -104 90 -1 91 62 32 -121 79 82 -102 19 88 -90 53 121 125 -86 -3 69 107 105 43 -99 20 62 -13 23 68 57 61 -116 25 51 116 -14 40 -83 -102 29 121 -126 93 25 -44 -112 6 -20 99 -41 49 -26 19 41 -56 -46 82 2 79 0 81 -77 81 -2 -77 37 -89 40 17 -85 -29 -29 77 97 37 3 -66 74 28 -72 52 87 72 79 -2 32 -4 -73 -81 -85 126 -114 10 62 106 -73 -44 -69 -61 116 116 52 -15 9 -8 112 -111 -112 71 32 15 31 -38 101 -34 80 -117 75 -1 23 101 -60 -1 -46 127 127 -18 12 -82 17 56 118 -109 114 -95 -128 -15 106 77 38 47 50 26 -126 -63 -64 63 96 -42 -87 -122 87 84 -61 12 40 83 -9 -45 -121 31 -16 104 110 -22 126 65 -20 -65 73 50 -90 -58 -22 -5 -67 8 -121 -71 -38 100 14 -46 -45 -87 88 57 -114 23 81 -27 13 -33 24 59 -43 -112 20 71 -86 3 -58 18 -21 -49 -126 107 -42 -16 -128 7 -54 40 -44 -71 75 -110 126 -118 -50 116 -37 90 -85 -85 69 -118 -116 -75 125 -118 -15 13 -82 83 2 32 -35 18 45 48 74 -67 59 44 -93 35 -80 104 -67 -47 -1 92 -46 7 -80 -56 -43 -66 63 40 -108 121 -107 110 2 -41 53 110 121 -22 -40 89 -87 109 -43 62 -60 31 26 8 93 -28 0 -105 74 119 -54 -104 61 -59 58 -89 66 60 -97 -112 -60 117 -55 -118 -30 -79 19 116 103 -51 -39 -12 21 34 -15 37 -6 105 28 -48 -109 47 -34 -76 67 -104 -83 -98 3 56 -66 84 -121 94 102 29 -80 91 55 -23 76 -101 -55 -26 -32 13 63 -16 9 -96 -114 -77 -123 81 32 -35 47 0 81 84 -121 110 62 -57 66 -4 120 5 -40 -17 73 110 63 117 -79 -84 -33 109 -98 -45 27 106 -65 68 -84 57 107 -64 -84 77 -27 18 28 100 103 101 -89 -92 -65 -42 -13 -73 68 -44 -40 -105 -88 -45 80 -119 -65 -126 107 111 81 98 28 52 -48 5 -46 -35 -75 -76 105 53 52 -74 18 -13 84 50 61 20 61 -59 44 -12 -93 -91 -26 -49 -38 41 -2 -3 32 11 37 -18 -5 17 121 -101 16 -25 -33 -117 -76 -117 -100 110 20 46 -14 -72 68 -72 78 29 -83 0 -56 -110 86 -117 -17 -121 -108 -1 -15 -37 79 -103 -105 -12 -58 94 -37 -124 105 -40 -19 -36 60 59 69 89 95 -74 -64 101 -127 45 -40 -62 53 -118 -66 13 87 3 -97 -99 -19 95 -31 50 -119 74 -68 -115 44 73 89 -78 75 74 120 120 116 113 -62 125 0 34 -126 -96 -109 125 29 116 -74 45 106 123 3 63 -106 -101 -81 -81 -31 -10 -78 -38 102 -125 -116 122 38 92 7 -66 -55 -104 80 37 -37 30 -49 -20 -84 -114 -86 -53 19 -48 -40 102 65 -47 -123 0 -15 118 83 -75 88 -120 118 92 -84 -123 -31 -70 92 121 -85 99 -107 -73 -70 21 -18 -46 88 -100 -80 -41 64 124 -82 -4 32 81 -13 117 -16 -55 -50 20 119 79 -58 70 -110 -73 -76 22 -115 45 109 -102 72 36 -80 56 98 -106 27 7 25 -109 8 -22 47 -61 100 91 -68 56 -116 41 60 116 12 8 90 23 -107 64 102 -117 22 39 98 -102 -33 104 44 -87 25 63 -64 36 63 -50 119 -21 -118 50 59 19 72 -57 -40 90 44 49 -126 -37 -108 58 -62 79 33 -89 33 -114 -114 57 120 88 -119 68 -88 -111 -75 23 -123 82 48 -28 53 48 -12 -90 20 104 21 34 -41 18 -58 -72 93 -52 50 -51 80 -109 96 58 84 -65 30 -60 -19 -15 5 -9 104 9 -32 -113 13 -115 -66 -86 78 7 9 101 -87 -45 37 80 -72 -95 -17 -79 98 66 -11 -8 -22 -122 -64 -15 -63 96 120 -52 122 7 -98 -125 -34 3 -81 -45 4 110 25 -63 -81 -39 95 -96 -118 -40 -55 23 -24 78 77 39 -13 87 -45 -87 127 -89 -94 -59 118 -127 121 -12 75 -121 -11 -52 -122 -54 34 68 29 24 -107 58 -112 -4 -40 97 51 45 -67 -24 41 5 28 -50 -41 -103 -37 114 -77 94 126 77 -118 54 43 -52 -58 -32 92 -101 93 -104 58 25 54 18 -90 -33 49 79 -109 -26 -65 60 85 -56 125 61 41 21 -56 13 -62 115 -7 17 -60 -87 -65 -114 5 111 -104 -29 -101 84 -100 67 14 103 -80 55 -5 109 17 -16 -89 -80 -80 -78 107 57 -94 9 37 -128 81 9 74 -30 -20 -113 -113 62 -79 46 19 -96 -104 -80 -119 95 -109 -86 -77 3 55 125 -55 45 -31 55 53 -32 -106 44 86 83 -124 -58 97 -112 39 15 -44 -101 49 -13 -1 -6 -52 -60 120 -30 -72 -50 -70 107 35 -5 37 10 -6 -95 108 29 71 98 -34 122 -56 -105 7 -82 41 23 53 -66 -33 111 -49 49 80 95 68 -44 -93 -52 40 -108 -84 36 -7 -38 -84 -89 90 -66 44 101 11 83 -77 -75 -43 -81 109 -70 59 -48 18 -30 120 -18 26 27 113 -8 80 106 13 66 -72 -120 42 34 39 -97 -11 -21 -110 7 112 53 -106 51 -48 79 -84 72 112 64 106 18 111 -14 -123 117 -120 -89 -104 9 35 84 31 -92 16 90 -58 57 56 -4 20 -36 89 69 112 -50 -31 -120 96 -93 116 -51 77 4 -93 -103 -117 50 -83 -118 -100 47 10 -12 48 72 -85 40 -15 4 103 -8 112 75 -25 110 -64 -33 116 22 21 -80 92 -8 108 12 26 5 -43 44 -77 -86 -38 -63 74 29 104 -6 -117 38 101 -110 -17 -25 40 -72 119 -16 -42 -69 -104 -40 -34 -119 -7 -78 30 10 -58 40 -67 22 -70 -128 97 3 -83 -61 -51 -2 -12 -87 -57 80 123 92 6 119 -25 80 40 -99 69 -72 64 17 96 -66 -102 -125 -43 -77 -21 94 -30 53 -26 -81 37 -115 -120 84 -46 42 -71 -95 113 90 24 44 26 108 73 -125 96 -5 -29 -40 6 -57 65 8 -67 125 9 105 -123 77 78 -87 70 118 -26 85 -6 52 64 -105 -32 82 -82 -123 -54 -103 115 127 -50 -58 104 89 102 -47 5 93 104 45 19 -47 -111 100 61 -50 97 -22 -91 -23 -62 -29 -124 61 -106 23 92 -118 -11 60 -26 126 81 21 71 -67 119 -48 -14 -111 112 -95 97 0 -32 55 74 -80 -108 -107 -61 120 11 61 -18 24 -39 50 126 -113 7 70 -40 121 -31 -80 26 -3 -59 -46 -42 11 56 74 14 -107 -49 -15 38 -52 -103 -59 12 -54 33 -47 -69 116 85 -20 118 100 -88 -42 44 89 16 59 -88 -7 -37 117 -115 57 63 78 -92 43 83 -27 4 25 82 -24 -41 48 81 115 -59 -111 126 -28 -2 -119 20 59 -121 -61 79 -3 -10 62 -8 32 127 19 3 -94 8 63 127 -70 55 124 -35 -111 -59 108 -116 108 -113 -48 26 -47 -15 33 56 85 -46 45 119 10 63 -36 -82 50 105 108 58 -22 1 -47 123 70 -6 -17 39 6 11 -50 -10 10 116 -3 91 -61 25 -22 86 63 118 -101 107 5 72 -36 76 17 119 92 -75 -34 -91 -45 97 35 115 -11 -24 -86 -57 91 109 63 -92 -62 41 25 106 -26 30 -5 118 -20 23 -42 47 -103 75 19 97 -21 101 -55 68 8 36 56 10 -51 28 -120 -69 -95 86 13 -116 5 -28 90 -20 56 105 -21 88 -79 72 -119 -108 99 112 104 88 -51 -96 38 -60 90 48 -34 8 -45 13 -120 25 8 -68 -126 23 -127 62 47 70 -27 -5 -107 -93 100 103 90 -12 -127 35 -92 26 -30 -54 55 74 -121 102 127 -113 -120 67 94 -116 21 -114 87 -16 119 65 -31 14 -66 -9 74 -115 -24 -97 -27 -30 -109 -73 -45 -128 109 -71 62 -107 85 91 100 59 -112 -12 75 -32 11 -57 23 66 80 94 32 57 18 -9 -36 -9 4 -33 63 91 21 -45 -52 -48 56 -115 -67 -92 109 51 -122 -29 36 -97 41 -118 107 110 -56 -37 22 -116 126 100 5 28 -32 -4 -45 -50 -13 -36 82 97 54 58 -13 -110 43 -79 -119 -90 -10 116 -76 127 -66 39 35 109 -53 -68 -20 97 -111 30 -15 101 12 -3 -59 -51 52 -123 -43 123 -10 103 -127 -125 87 111 -68 116 -120 -58 33 98 4 97 -49 55 -92 114 126 -87 -103 -49 -95 -115 -63 -50 21 -109 -121 7 -118 83 -85 -116 0 10 -11 -78 37 -96 98 72 -30 57 46 -97 -6 5 -116 43 -84 -53 21 92 51 5 -65 97 -16 -87 85 94 -125 -49 65 -76 -125 -19 67 23 -5 -65 119 -76 92 -115 -38 125 -14 -113 29 56 12 -118 82 14 -106 118 119 -33 -82 43 83 23 -122 -59 34 -116 -120 -51 -71 -46 53 82 116 105 56 -74 90 65 -72 111 113 -121 -117 -21 -26 97 -119 89 -79 102 42 -80 106 -14 -43 -82 -74 -40 -68 -43 -109 92 -65 -25 92 93 29 -117 111 -3 -74 119 -100 -12 90 9 -123 -61 2 -32 109 -78 120 67 66 94 82 117 107 119 -82 -118 41 123 -55 -24 43 69 -9 -97 -123 -53 11 94 -112 46 -83 -45 -92 -29 30 -64 -82 79 111 -53 -94 -118 -41 7 73 -105 -62 35 55 -94 -109 16 -37 -24 -47 -12 71 -6 -25 25 -8 -66 79 -12 102 39 107 -63 94 -28 -46 -100 50 -102 -7 105 -78 124 -85 74 49 -36 11 -37 54 17 65 -25 -101 -88 -79 80 -78 85 -9 -123 -66 84 26 -53 -123 -95 -24 79 14 -111 -102 -39 113 64 -101 -63 -64 4 38 40 -113 76 -28 -35 12 -93 15 71 -19 98 124 -54 77 -41 -114 127 -78 86 -119 30 74 -107 -80 123 60 16 -54 59 -125 75 -25 58 -78 46 -57 -115 61 59 23 74 12 -59 -118 7 51 -45 0 19 101 -20 -46 87 -93 14 71 -96 76 44 52 80 -62 49 31 -34 -105 -93 92 -118 -107 -116 -38 -128 -49 -79 57 -117 71 51 -64 53 -43 -34 91 -35 -100 -88 45 77 -97 -67 -7 4 40 -61 -4 -5 -13 -96 -128 -95 -126 -92 127 117 78 -23 41 -89 -105 -89 -14 60 -78 -52 -59 83 -43 -114 94 -7 42 119 124 -17 -23 -31 -46 -103 124 81 120 -100 -68 -68 104 40 81 -101 49 3 24 -83 -36 1 51 108 -5 117 -66 56 -28 -27 -88 16 67 -68 -83 -65 126 76 59 -90 -85 8 99 78 -30 76 -126 66 -23 -114 46 59 86 24 -35 99 33 18 75 -94 -48 113 -64 30 65 64 -28 -48 -57 -80 43 5 -92 -12 -71 31 64 -110 28 -128 72 13 98 15 -69 115 3 -19 121 -12 1 -53 99 -63 -30 -67 85 -5 93 -17 59 66 4 -33 102 51 49 0 -19 36 27 38 -71 79 -57 34 58 -24 -125 -50 38 49 110 -79 -86 -127 51 -72 -96 -70 -9 -98 82 115 26 56 -127 122 79 -24 -16 -106 115 11 32 -67 2 127 -65 -120 -84 -20 29 -25 -116 -104 118 -79 71 92 -49 -45 -125 -112 -4 13 55 -98 -58 -46 -88 -93 103 101 -81 31 -98 -118 120 23 -109 111 18 -18 -91 42 8 -110 56 26 56 60 40 -109 88 125 -105 -53 87 -118 39 -107 90 -105 2 -109 99 -41 -3 -125 95 25 17 114 -23 39 58 40 -63 58 24 49 34 19 -65 -79 65 85 -87 -44 2 -15 116 102 -126 -126 -67 86 102 -110 47 -72 72 -47 97 56 116 -71 -6 -16 -31 3 -43 43 43 -75 -58 -115 -80 75 52 56 -71 31 25 -106 74 -121 19 -85 105 1 13 43 76 -122 21 -48 -97 38 49 118 -116 -1 -21 57 35 -67 -79 12 -104 -100 20 -90 -46 20 -84 83 -126 -75 -26 68 22 62 -75 64 83 -108 -81 -32 53 14 -79 -105 -37 -51 -20 84 -123 78 58 -52 55 -68 82 48 52 -22 -111 -31 -79 -8 94 -83 7 -60 -50 -59 1 -50 39 80 -21 -112 -30 97 -97 -63 -46 -83 75 72 -9 77 -126 -52 -54 -33 -50 37 -45 113 -57 -57 -52 -51 65 -112 95 120 -85 -19 79 -104 -88 -96 84 -20 26 71 57 34 -47 83 -43 -88 -41 -108 -6 49 -48 -17 -13 -82 -8 101 -16 109 -32 110 0 -18 -18 113 -11 98 111 -128 66 -7 -73 50 23 -65 -103 -110 -25 14 78 80 -78 -98 -33 108 108 -80 123 73 -13 87 103 86 -47 -19 95 32 26 119 55 -58 118 -16 112 -59 -64 13 45 76 -3 -22 -44 -84 -103 27 28 -94 -76 -75 -51 -63 -116 -112 -38 76 -24 93 -42 14 -7 -8 -28 7 -123 30 47 -62 -18 -91 -62 68 -18 -79 -90 -5 -10 -23 5 -53 -44 -33 -116 106 86 -85 47 83 -19 40 50 113 -61 67 -89 13 -63 95 87 65 55 -37 28 -14 -82 68 -54 -12 18 -8 36 -86 6 -62 12 -42 -54 -106 37 82 78 110 42 79 -59 59 -25 91 98 -86 -72 33 -27 48 28 -73 23 -113 -109 37 -25 -52 40 5 20 33 106 -54 -15 91 75 57 -29 -118 105 -91 5 5 33 -116 -2 6 -106 47 11 -42 -13 56 63 -124 120 -54 -71 85 -1 123 104 5 91 -34 -128 -91 -101 63 86 100 -98 6 -48 8 -23 -125 -82 79 -104 74 -100 -23 -49 58 28 96 62 50 -52 69 -49 -112 4 -113 -127 119 65 -25 105 27 5 -14 -51 -125 -31 -96 -57 -5 60 -9 35 -63 -98 -11 -102 20 -82 60 59 -126 -42 -65 -62 29 -76 -90 -74 -109 18 18 -81 26 51 25 30 -121 75 44 -78 -62 -1 24 -120 87 -102 71 123 75 27 119 -108 18 11 -93 -108 -104 -110 72 -95 -92 64 51 -88 91 126 28 11 40 -68 99 38 4 -5 89 88 -84 80 -82 -33 50 16 91 -43 -12 40 30 23 -35 11 73 0 -26 -19 -5 -66 -114 -98 92 5 73 -83 -94 -88 -105 92 -69 -125 -36 -96 123 -116 119 8 69 -80 -19 -118 -97 -19 26 74 -125 -67 54 109 44 -49 -59 -46 -27 -98 15 -126 -23 125 96 47 25 119 124 9 -60 -109 -78 -4 86 121 -106 47 103 6 108 7 41 -96 17 -77 -21 25 101 -117 86 32 110 -69 -4 -60 -32 -87 -28 43 51 -23 -14 84 -19 83 101 -111 114 -41 38 -21 34 95 61 51 71 -8 15 -56 93 -126 111 -74 -42 105 -67 9 118 103 79 -37 -70 3 13 101 -30 -20 104 86 -128 84 -50 -59 95 44 6 120 -126 52 -98 104 -102 51 61 -53 -82 49 -11 14 -46 -96 -23 -113 66 -99 126 -99 23 114 -113 -10 -84 91 -96 -10 122 -53 -112 17 -48 93 23 -101 82 120 -125 -28 -109 -42 -101 83 -53 -119 -121 24 -88 -8 80 91 36 111 67 121 17 -108 -63 -70 -49 -58 -37 78 -63 88 -119 112 -99 85 31 59 47 -22 -18 -93 -24 112 87 -113 28 -31 14 125 96 66 94 -108 96 -49 -120 22 16 -98 -73 90 70 41 -31 93 -70 -122 48 -53 58 114 -125 120 72 -112 -9 39 66 -106 120 88 14 -127 -53 118 101 92 -59 -17 -100 -52 -115 -43 -128 -76 72 -14 -115 -83 75 -5 53 80 -33 1 -55 -116 -73 -118 -105 108 -58 120 -46 -41 -89 -25 -69 -70 119 100 8 -123 -27 -16 -4 -39 53 85 -68 125 -24 62 105 -96 -124 26 -62 43 -26 31 41 -7 -24 76 -19 71 11 -23 -24 90 -91 -56 -78 -78 -63 -62 -102 8 -10 -16 106 -117 90 123 97 -89 31 -36 -118 77 6 58 20 -29 13 -86 1 125 -75 -3 -94 -84 89 74 -34 108 98 47 72 -70 -122 -73 -93 -22 -45 -108 -111 110 9 -113 109 109 98 78 80 95 -98 -6 -70 -109 -84 94 91 55 -6 90 60 -36 -107 -16 -1 -17 -125 -45 -117 2 3 101 4 85 -51 -17 -105 70 78 -79 101 85 31 -15 116 32 85 57 -88 -124 49 76 32 93 26 120 53 -52 -73 63 -71 39 49 11 48 66 7 18 -98 -16 -92 23 -116 93 71 -88 -80 29 -82 -106 5 -38 12 124 -59 -126 76 25 101 -87 -63 14 -79 -100 22 -106 123 72 114 58 -57 -39 48 -45 -46 44 53 111 -19 94 -125 67 21 80 -123 -27 41 106 -34 95 72 85 -70 62 -3 -20 -77 -126 39 -41 1 -91 106 98 -52 76 -80 50 -32 -46 2 -82 78 117 102 74 125 109 -56 -111 122 19 -18 87 84 20 38 64 30 -70 -68 63 -21 -36 -86 -33 116 99 -70 36 23 21 111 104 -74 -29 22 86 -36 117 -82 -81 44 -102 -94 -38 107 27 124 -69 95 -67 41 -78 -97 117 67 -67 -56 -43 23 21 -93 -123 17 -33 114 54 75 -73 8 -47 56 -55 -41 69 -83 100 -14 81 -53 -114 -25 -26 69 120 85 -123 105 39 79 -88 -53 71 89 -69 20 -30 8 96 53 66 46 -74 62 -109 -124 -94 97 -39 -56 10 -78 65 101 39 -5 -25 -116 -8 78 48 -83 -76 87 -64 -81 123 -4 -75 -51 92 68 60 -28 -102 -13 74 80 -83 11 -121 70 -32 -4 52 108 20 -35 -73 -48 -28 -105 -92 74 -31 44 -38 47 81 126 -82 87 90 76 56 -13 19 80 -122 -50 116 24 -97 69 121 114 54 95 -52 35 72 100 -117 56 -31 -81 -61 35 22 -55 93 28 -6 -86 -84 53 105 -8 60 -55 125 -17 -93 -31 -126 -119 38 -16 75 108 114 -100 54 -75 -18 -91 42 9 14 35 -75 -8 -122 10 91 -32 108 4 -41 56 41 123 -72 -10 -3 -35 35 123 82 -64 36 -62 -18 41 -112 73 -99 38 -107 49 -35 98 44 -100 26 122 120 106 -106 -65 25 -29 -86 -49 91 27 -57 -14 1 64 -48 -19 48 67 -124 3 -114 -87 16 125 -56 -121 91 -15 24 -39 -53 -27 -88 -76 50 51 -86 -75 -112 98 -125 35 -6 10 12 -75 64 4 86 11 123 39 -111 16 45 9 30 -29 53 47 75 -117 20 -122 83 -120 95 117 -24 63 -93 100 -5 -78 12 -33 49 -106 -8 -81 -35 -33 -123 46 60 18 48 33 111 120 -69 -24 4 -100 49 6 6 65 7 -27 -105 -53 -94 -59 -101 -61 73 106 54 -72 -82 111 -88 -69 -14 -94 -68 77 54 17 -119 126 42 -20 -120 -77 -72 -98 -86 55 1 7 122 122 -122 -125 -52 -62 112 32 -30 -98 80 48 -20 -67 121 -101 8 98 88 -52 102 127 23 -112 60 91 -58 83 -50 -115 -96 -7 104 -115 75 -128 -108 -78 120 -70 81 46 -118 -19 -63 -44 -28 -48 81 -5 -22 14 23';

    if (typeof loadDanshi.allfive == 'undefined') {
      //console.log('cccccccccccccccccc');
      var compression_mode = 4,my_lzma = new LZMA("../js/lzma_worker.js");
      my_lzma.decompress(allfcps.split(' '),function(result,e) {

        loadDanshi.allfive = result;
        filteWxNums(result,method,tags,allchoose,btn);
        //console.log(result);
        //loadDanshi.allfive = result;
        //btn.removeClass('loading').html('生成号码');
        //$('.generate-bet #danshitext').val(result);
      },function(percent) {
        btn.addClass('loading').html('加载中...');
        //console.log("Compressing: " + (percent * 100) + "%");
      });
    }else {
      //console.log('alreadyyyyyyyyyyyyy');
      //console.log(loadDanshi.allfive);
      //$('.generate-bet #danshitext').val(result);
      filteWxNums(loadDanshi.allfive,method,tags,allchoose,btn);
    }
    /*my_lzma.compress(allf, 4, function(result, error) {
      $('.generate-bet #danshitext').val(result.join(' '));
    }, function(percent) {
      console.log("Compressing: " + (percent * 100) + "%");
    });*/
    /*my_lzma.decompress(allfcps.split(' '),function(result,e) {
      //filteWxNums(result,method,tags,allchoose,btn);
      //console.log(result);
      $('.generate-bet #danshitext').val(result);
    },function(percent) {
      console.log("Compressing: " + (percent * 100) + "%");
    });*/
    /*my_lzma.compress(allf, compression_mode, function(result, error) {
      $('.generate-bet #danshitext').val(result);
    },function(result, error) {
      console.log(result, error,'innn');
    });*/
    //var cpcontent = LZString.compressToEncodedURIComponent();
    //$('.generate-bet #danshitext').val(cpcontent);
    //if (t.allwx==null) {
    //  LZMA.decompress(config.forwxshort.split(' '),function(result,e) {
    //    filteWxNums(result,method,tags,allchoose,btn);
    //  },function(r1, e1) {
    //    btn.addClass('loading').html('生成...');
    //  });
    //}else {
    //  filteWxNums(t.allwx,method,tags,allchoose,btn);
    //}

  }

  var dynamicLoadDanshi = function(url,callback) {
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

  $(".button").find('[data-command="generate"]').unbind('click').click(function(){
		var num = parseInt($('.play-options [data-field="num"]').html());
		/*if(num==0) {
			App.alert('warning', '提示消息', "您还没选择号码！");
			return;
		}*/
		BootstrapDialog.show({
			cssClass:'generate-bet',
      onshown: function(dialog) {
        //cp = Combinatorics.cartesianProduct([0, 1, 2], [0, 1, 2], [0, 1, 2]);
        //dialog.$modalBody.find('#danshitext').val(cp.toArrayStr());
        //$('.lottery-betting .play-area .textarea textarea').val(cp.toArrayStr()).keyup();
        $('.generate-bet .gen-topbox .lf i').html($('.lottery-open-info [data-field="global-expect"]').html());
        $('.generate-bet .gen-topbox .rf [data-field="expect"]').html($('.lottery-open-code [data-field="expect"]').html());
        $('.generate-bet #gen-counter-time').html($('.lottery-open-info [data-field="global-last-time"]').html());
        if ($('.codeholder:visible').size()>0) {
          $('.generate-bet #gen-opens').html('开奖中...');
        }else {
          $('.generate-bet #gen-opens').html($('.lottery-open-code [data-field="code"]').html());
          $('.generate-bet #gen-opens').addClass($('.lottery-open-code [data-field="code"]').attr('class'))
        }
        var allchoose = {};
        var formatdaxiaolst = function(list) {
          var alloutput =[];
          for (i = 0; i < list.length; i++) {
            alloutput.push('<li rel="'+(String(list[i]).replace(/大/g,"1").replace(/小/g,"0")).split('').join('|')+'">'+list[i]+'</li>')
          }
          return alloutput.join('');
        }
        var formatyierlulst = function(list) {
          var alloutput =[];
          for (i = 0; i < list.length; i++) {
            alloutput.push('<li rel="'+(String(list[i]).replace(/大/g,"1").replace(/小/g,"0")).split('').join('')+'">'+list[i]+'</li>')
          }
          return alloutput.join('');
        }

        //显示几星
        //console.log($('.lottery-opearation .play-groups ul > li.h4').size(),'hhhhhhhhhhh4');
        dialog.$modalBody.find('.gen-method li').off('click').on('click',function() {
          dialog.$modalBody.find('.gen-method li').removeClass('on');
          $(this).addClass('on');
          allchoose = {};
          if ($(this).attr('nums')=='q2') {
            $('div[rel="gen-shi-without"] > span').html('万位');
            $('div[rel="gen-ge-without"] > span').html('千位');
          }
          if ($(this).attr('nums')=='h2') {
            $('div[rel="gen-shi-without"] > span').html('十位');
            $('div[rel="gen-ge-without"] > span').html('个位');
          }
          if ($(this).attr('nums')=='q3') {
            $('div[rel="gen-bai-without"] > span').html('万位');
            $('div[rel="gen-shi-without"] > span').html('千位');
            $('div[rel="gen-ge-without"] > span').html('百位');
          }
          if ($(this).attr('nums')=='z3') {
            $('div[rel="gen-bai-without"] > span').html('千位');
            $('div[rel="gen-shi-without"] > span').html('百位');
            $('div[rel="gen-ge-without"] > span').html('十位');
          }
          if ($(this).attr('nums')=='h3') {
            $('div[rel="gen-bai-without"] > span').html('百位');
            $('div[rel="gen-shi-without"] > span').html('十位');
            $('div[rel="gen-ge-without"] > span').html('个位');
          }
          if ($(this).attr('nums')=='h4') {
            $('div[rel="gen-qian-without"] > span').html('千位');
            $('div[rel="gen-bai-without"] > span').html('百位');
            $('div[rel="gen-shi-without"] > span').html('十位');
            $('div[rel="gen-ge-without"] > span').html('个位');
          }
          if ($(this).attr('nums')=='wx') {
            $('div[rel="gen-wan-without"] > span').html('万位');
            $('div[rel="gen-qian-without"] > span').html('千位');
            $('div[rel="gen-bai-without"] > span').html('百位');
            $('div[rel="gen-shi-without"] > span').html('十位');
            $('div[rel="gen-ge-without"] > span').html('个位');
          }

          $('.generate-bet #auto-special-ols li').hide();
          if ($(this).attr('nums')=='q2' || $(this).attr('nums')=='h2') {
            $('div[rel="gen-bai-without"]').hide();$('#item-yierlu').hide();
            $('div[rel="gen-qian-without"]').hide();$('div[rel="gen-wan-without"]').hide();
            var autosumsols = Array.apply(null, {length: 19}).map(Number.call, Number);
            $('#auto-sums-ols').html(['<li>',autosumsols.join('</li><li>'),'</li>'].join(''))
            var daxiaogps = Combinatorics.baseN(['大','小'], 2);
            var yelgps = Combinatorics.baseN(['0','1','2'], 2);
            $('#auto-daxiao-ols').html(formatdaxiaolst(daxiaogps.toArrayStr()));
            $('#auto-yierlu-ols').html(formatyierlulst(yelgps.toArrayStr()));
            $('.generate-bet #auto-special-ols .twosp').show();
          }
          if ($(this).attr('nums')=='q3' || $(this).attr('nums')=='z3' || $(this).attr('nums')=='h3') {
            $('div[rel="gen-bai-without"]').show();$('#item-yierlu').show();
            $('div[rel="gen-qian-without"]').hide();$('div[rel="gen-wan-without"]').hide();
            var autosumsols = Array.apply(null, {length: 28}).map(Number.call, Number);
            var daxiaogps = Combinatorics.baseN(['大','小'], 3);
            var yelgps = Combinatorics.baseN(['0','1','2'], 3);
            $('#auto-sums-ols').html(['<li>',autosumsols.join('</li><li>'),'</li>'].join(''));
            $('#auto-daxiao-ols').html(formatdaxiaolst(daxiaogps.toArrayStr()));
            $('#auto-yierlu-ols').html(formatyierlulst(yelgps.toArrayStr()));
            $('.generate-bet #auto-special-ols .threesp').show();
          }
          if ($(this).attr('nums')=='q4' || $(this).attr('nums')=='h4') {
            $('div[rel="gen-bai-without"]').show();$('div[rel="gen-qian-without"]').show();$('div[rel="gen-wan-without"]').hide();
            $('#item-yierlu').hide();
            var autosumsols = Array.apply(null, {length: 37}).map(Number.call, Number);
            var daxiaogps = Combinatorics.baseN(['大','小'], 4);
            $('#auto-sums-ols').html(['<li>',autosumsols.join('</li><li>'),'</li>'].join(''));
            $('#auto-daxiao-ols').html(formatdaxiaolst(daxiaogps.toArrayStr()));
            $('#auto-yierlu-ols').html('');
            $('.generate-bet #auto-special-ols .foursp').show();
          }
          if ($(this).attr('nums')=='wx') {
            $('div[rel="gen-bai-without"]').show();$('div[rel="gen-qian-without"]').show();$('div[rel="gen-wan-without"]').show();
            $('#item-yierlu').hide();
            var autosumsols = Array.apply(null, {length: 46}).map(Number.call, Number);
            var daxiaogps = Combinatorics.baseN(['大','小'], 5);
            $('#auto-sums-ols').html(['<li>',autosumsols.join('</li><li>'),'</li>'].join(''));
            $('#auto-daxiao-ols').html(formatdaxiaolst(daxiaogps.toArrayStr()));
            $('#auto-yierlu-ols').html('');
            $('.generate-bet #auto-special-ols .fivesp').show();
          }
        });
        $('.modal-dialog .gen-headers .close-gen').off('click').on('click',function() {
          dialog.close();
        });
        //生成号码
        dialog.$modalBody.find('.gen-btns a.nowg').off('click').on('click',function() {
          var thibtn = $(this);
          if ($(this).hasClass('loading')) {
            return false;
          }
          var rel = $('.gen-method li.on').attr('rel');
          var nums = $('.gen-method li.on').attr('nums');
          $(this).addClass('loading').html('生成中...');
          if (nums!='h4' && nums!='wx') {
            console.log("h4 & wx");
            maingenNumbers(rel,nums,allchoose,$(this));
          }else {
            if (nums=='h4') {
              console.log("h4");
              manualNumbersShi(rel,nums,allchoose,$(this));
            }
            if (nums=='wx') {
              console.log("wx");
              manualWxNumbers(rel,nums,allchoose,$(this));
            }
          }

          calMoney($('.generate-bet .gen-model .model a.selected').data('val'));

          setTimeout(function() {
            thibtn.removeClass('loading').html('生成号码');
          },4000)
        });

        //清除号码
        dialog.$modalBody.find('.gen-btns a.cleannow').off('click').on('click',function() {
          $('.generate-bet #danshitext').val('');
          $('.generate-bet #gen-totaldeal').html('0');
          $('.generate-bet #gen-totalmoney').html('0.000');
          $('.lottery-betting .play-area .textarea textarea').val('').keyup();
        });

        var calMoney = function(mval) {
          var monetdict = {
            'yuan':1,'jiao':0.1,'fen':0.01,'li':0.001
          }
          var nowmodelset = {'val': mval, 'money': monetdict[mval]};
          var getmulti = parseInt($('.generate-bet .gen-model .multiple input').val(),10);
          var modeltime = parseFloat(nowmodelset.money);
          $('.generate-bet #gen-totalmoney').html(Number(parseInt($('.generate-bet #gen-totaldeal').text(),10)*getmulti*modeltime).toFixed(3));
        }
        //模式
        var mainm = $('.lottery-betting .lottery-opearation .play-options .model a.selected').data('val');
        $('.generate-bet .gen-model .model a[data-val="'+mainm+'"]').addClass('selected');
        $('.generate-bet .gen-model .multiple input').val($('.lottery-betting .lottery-opearation .multiple input').val());
        dialog.$modalBody.find('.gen-model .model').off('click').on('click','> a',function() {
          $('.generate-bet .gen-model .model a').removeClass('selected');
          $(this).addClass('selected');
          calMoney($(this).data('val'));
          $('.lottery-betting .lottery-opearation .play-options .model a[data-val="'+$(this).data('val')+'"]').click()
          /*var monetdict = {
            'yuan':1,'jiao':0.1,'fen':0.01,'li':0.001
          }
          var nowmodelset = {'val': $(this).data('val'), 'money': monetdict[$(this).data('val')]};
          var getmulti = parseInt($('.generate-bet .gen-model .multiple input').val(),10);
          var modeltime = parseFloat(nowmodelset.money);
          $('.generate-bet #gen-totalmoney').html(Number(parseInt($('.generate-bet #gen-totaldeal').text(),10)*getmulti*modeltime).toFixed(3));*/
          //t.changebonus(t.nowmsets);
        });

        //倍数
        var multiple = $('.generate-bet .gen-model .multiple > input');
        multiple.keyup(function() {
          if($(this).val() == '') return;
          var val = $(this).val();
          if(/^[0-9]*$/.test(val)) {
            val = Number(val);
            if(val > 10000) $(this).val(10000);
            if(val < 1) $(this).val(1);
            $('.lottery-betting .lottery-opearation .multiple input').val($('.generate-bet .gen-model .multiple input').val());
            calMoney($('.generate-bet .gen-model .model a.selected').data('val'));
            //t.changebonus(t.nowmsets);
          } else {
            $(this).val(1);
            calMoney($('.generate-bet .gen-model .model a.selected').data('val'));
            $('.lottery-betting .lottery-opearation .multiple input').val($('.generate-bet .gen-model .multiple input').val());
            //t.changebonus(t.nowmsets);
          }
        });
        multiple.keydown(function(e) {
          if(e.keyCode == 38 || e.keyCode == 40) {
            if($(this).val() == '') return;
            var val = Number($(this).val());
            if(!isNaN(val)) {
              if(e.keyCode == 38) val++;
              if(e.keyCode == 40) val--;
              if(val > 10000) val = 10000;
              if(val < 1) val = 1;
              $(this).val(val);
            }
          }
        });
        multiple.blur(function() {
          if($(this).val() == '') {
            $(this).val(1);
            calMoney($('.generate-bet .gen-model .model a.selected').data('val'));
            //t.changebonus(t.nowmsets);
          }
        });

        $('.generate-bet .gen-model .multiple > span').off('click').on('click',function() {
          if ($(this).hasClass('subm')) {
            var event = $.Event("keydown");
            event.keyCode = 40;
            multiple.trigger(event);
            multiple.trigger("keyup");
          }else {
            var event = $.Event("keydown");
            event.keyCode = 38;
            multiple.trigger(event);
            multiple.trigger("keyup");
          }

        });

        $('.gen-secmethod #gen-toggleall').off('click').on('click',function() {
          if (!$(this).hasClass('closed')) {
            $('.gen-secmethod > ul > li').animate({'height':28});
            $(this).html('展开').addClass('closed');
          }else {
            $('.gen-secmethod > ul > li').css({'height':'auto'});
            $(this).html('隐藏').removeClass('closed');
          }
        });
        $('.gen-secmethod .groups').off('click').on('click','> li',function() {
          var nowhandel = $(this).text();
          var numbersbar = $(this).parent().prev();
          var choosedict = {
            '全':[0,1,2,3,4,5,6,7,8,9],
            '清':[],
            '大':[5,6,7,8,9],
            '小':[0,1,2,3,4],
            '单':[1,3,5,7,9],
            '双':[0,2,4,6,8]
          }
          numbersbar.find('li').each(function(k,el) {
            $(el).removeClass('on');
            if ($.inArray(k,choosedict[nowhandel])>-1) {
              $(el).trigger('click');
            }else {
              if ($(el).hasClass('on')) {
                $(el).trigger('click');
              }
            }
          });
        });

        $('.gen-secmethod #gen-cleanall').off('click').on('click',function() {
          $('.generate-bet #danshitext').val('');
          $('.generate-bet #gen-totaldeal').html('0');
          $('.generate-bet #gen-totalmoney').html('0.000');
          $('.lottery-betting .play-area .textarea textarea').val('').keyup();
        });
        $('.gen-secmethod .nums').off('click').on('click','> li',function() {
          var nowcollect = $(this).parents('div').attr('rel');
          //console.log(nowcollect,'nowcollectnowcollect');
          if (typeof nowcollect !='undefined') {
            if (typeof allchoose[nowcollect] =='undefined') {
              allchoose[nowcollect] = [];
            }
          }
          var nowball = $(this).text();
          if (typeof $(this).attr('rel') !='undefined') {
            nowball = $(this).attr('rel');
          }
          var orgarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          var nowval = parseInt($(this).text(),10);
          if (typeof $(this).attr('rel') !='undefined') {
            nowval = $(this).attr('rel');
          }
          if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            allchoose[nowcollect].push(nowval);
          }else {
            $(this).removeClass('on');
            allchoose[nowcollect] =  _.without(allchoose[nowcollect],nowval)
          }

          var nums = $('.generate-bet .gen-method li.on').attr('nums');
          //动态加载排除规则
          if (typeof loadDanshi['shxhw_'+nowball] =='undefined' && nums=='h4' && nowcollect=='gen-hewei-without') {
            dynamicLoadDanshi('/dist/js/danshi/shixhw.js',function() {
              loadDanshi['shxhw_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['hw_'+nowball] =='undefined' && nums=='wx' && nowcollect=='gen-hewei-without') {
            dynamicLoadDanshi('/dist/js/danshi/wxhw_'+nowball+'.js',function() {
              loadDanshi['hw_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['shxkd_'+nowball] =='undefined' && nums=='h4' && nowcollect=='gen-kuadu-without') {
            dynamicLoadDanshi('/dist/js/danshi/shixkd.js',function() {
              loadDanshi['shxkd_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['kd_'+nowball] =='undefined' && nums=='wx' && nowcollect=='gen-kuadu-without') {
            dynamicLoadDanshi('/dist/js/danshi/wxkd_'+nowball+'.js',function() {
              loadDanshi['kd_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['shxhz_'+nowball] =='undefined' && nums=='h4' && nowcollect=='gen-hezhi-without') {
            dynamicLoadDanshi('/dist/js/danshi/shixhz.js',function() {
              loadDanshi['shxhz_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['hz_'+nowball] =='undefined' && nums=='wx' && nowcollect=='gen-hezhi-without') {
            dynamicLoadDanshi('/dist/js/danshi/wxhz_'+nowball+'.js',function() {
              loadDanshi['hz_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['shxdx_'+nowball.replace(/\|/g,'')] && nums=='h4' && nowcollect=='gen-daxiao-without') {
            dynamicLoadDanshi('/dist/js/danshi/shixdx.js',function() {
              loadDanshi['shxdx_'+nowball.replace(/\|/g,'')]=1;
            });
          }
          if (typeof loadDanshi['dx_'+nowball.replace(/\|/g,'')] =='undefined' && nums=='wx' && nowcollect=='gen-daxiao-without') {
            dynamicLoadDanshi('/dist/js/danshi/wxdx_'+nowball.replace(/\|/g,'')+'.js',function() {
              loadDanshi['dx_'+nowball.replace(/\|/g,'')]=1;
            });
          }
          if (typeof loadDanshi['shxsp_'+nowball] =='undefined' && nums=='h4' && nowcollect=='gen-lianxu-without') {
            dynamicLoadDanshi('/dist/js/danshi/shixsp.js',function() {
              loadDanshi['shxsp_'+nowball]=1;
            });
          }
          if (typeof loadDanshi['sp_'+nowball] =='undefined' && nums=='wx' && nowcollect=='gen-lianxu-without') {
            dynamicLoadDanshi('/dist/js/danshi/wxsp_'+nowball+'.js',function() {
              loadDanshi['sp_'+nowball]=1;
            });
          }
          //console.log(loadDanshi,'loadDanshiloadDanshiloadDanshi');

        });

        //默认不展开
        //$('.gen-secmethod > ul > li').animate({'height':32});
        $('.gen-secmethod #gen-toggleall').html('展开').addClass('closed');
        //dialog.getButton('button-c').disable();
      },
			title: '',//'<i class="icon lock"></i>做号投注',
			message:function(){
          return [
            '<div class="gen-top clearfix">',
            '<div class="gen-headers"><span>做号投注</span><a class="close-gen"><em class="icon" style="font-size:36px;font-weight:100;">&#xe63b;</em></a></div>',
              '<div class="gen-topbox clearfix"><div class="lf"><h3>第<i data-field="global-expect">20170708-086</i>期截止时间还有</h3><div id="gen-counter-time" data-field="global-last-time"></div></div>',
              '<div class="rf"><h3>第<i data-field="expect">20170708-086</i>期开奖号码</h3><div id="gen-opens"></div></div></div>',
              '<div class="gen-method"><ul>',
                '<li rel="exzhixdsq" nums="q2">前二</li><li class="on" rel="exzhixdsh" nums="h2">后二</li>',
                '<li rel="sxzhixdsq" nums="q3">前三</li><li rel="sxzhixdsz" nums="z3">中三</li><li rel="sxzhixdsh" nums="h3">后三</li>',
                '<li rel="sixzhixdsh" nums="h4">后四</li><li rel="wxzhixds" nums="wx">五星</li>',
              '</ul></div>',
            '</div>',
            '<div class="gen-secmethod">',
              '<div class="gen-secmethod-topgap"></div>',
              '<ul class="clearfix">',
                '<li class="clearfix" style="height: 28px;">',
                  '<label>定位杀</label><span class="gen-toggle"><a class="hand" id="gen-toggleall">隐藏</a><a class="hand on" id="gen-cleanall">清除</a></span>',
                  '<div class="gen-hideline" rel="gen-wan-without">',
                    '<span>万位</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                    '<ol class="groups">',
                      '<li>全</li><li>大</li><li>小</li><li>单</li><li>双</li><li>清</li>',
                    '</ol>',
                  '</div>',
                  '<div class="gen-hideline" rel="gen-qian-without">',
                    '<span>千位</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                    '<ol class="groups">',
                      '<li>全</li><li>大</li><li>小</li><li>单</li><li>双</li><li>清</li>',
                    '</ol>',
                  '</div>',
                  '<div class="gen-hideline" rel="gen-bai-without">',
                    '<span>百位</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                    '<ol class="groups">',
                      '<li>全</li><li>大</li><li>小</li><li>单</li><li>双</li><li>清</li>',
                    '</ol>',
                  '</div>',
                  '<div rel="gen-shi-without">',
                    '<span>十位</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                    '<ol class="groups">',
                      '<li>全</li><li>大</li><li>小</li><li>单</li><li>双</li><li>清</li>',
                    '</ol>',
                  '</div>',
                  '<div rel="gen-ge-without">',
                    '<span>个位</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                      '<ol class="groups">',
                    '<li>全</li><li>大</li><li>小</li><li>单</li><li>双</li><li>清</li>',
                    '</ol>',
                  '</div>',
                '</li>',
                '<li class="clearfix" style="height: 28px;">',
                  '<label>和跨胆</label>',
                  '<div rel="gen-hewei-without">',
                    '<span>和尾杀</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                  '</div>',
                  '<div rel="gen-kuadu-without">',
                    '<span>跨度杀</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                  '</div>',
                  '<div rel="gen-danma">',
                    '<span>胆码选</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                  '</div>',
                '</li>',
                '<li class="clearfix" style="display:none;height: 28px;">',
                  '<label>胆组</label>',
                  '<div>',
                    '<span>组一</span>',
                    '<ol class="nums">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                    '</ol>',
                  '</div>',
                '</li>',
                '<li class="clearfix" style="height: 28px;">',
                  '<label>和值杀</label>',
                  '<div rel="gen-hezhi-without">',
                    '<span>和值</span>',
                    '<ol class="nums sums" id="auto-sums-ols">',
                      '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
                      '<li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li>',
                    '</ol>',
                  '</div>',
                '</li>',
                '<li class="clearfix" style="height: 28px;">',
                  '<label>杀排列</label>',
                  '<div rel="gen-daxiao-without">',
                    '<span>大小</span>',
                    '<ol class="nums text" id="auto-daxiao-ols">',
                      '<li rel="1|1">大大</li><li rel="0|0">小小</li><li rel="0|1">小大</li><li rel="0|0">小小</li>',
                    '</ol>',
                  '</div>',
                '</li>',
                '<li class="clearfix" style="height: 28px;" id="item-yierlu">',
                  '<label>杀012路</label>',
                  '<div rel="gen-yierlu-without">',
                    '<span>012</span>',
                    '<ol class="nums" id="auto-yierlu-ols">',
                      '<li rel="00">00</li><li rel="01">01</li><li rel="02">02</li>',
                      '<li rel="10">10</li><li rel="11">11</li><li rel="12">12</li>',
                      '<li rel="20">20</li><li rel="21">21</li><li rel="22">22</li>',
                    '</ol>',
                  '</div>',
                '</li>',
                '<li class="clearfix" style="height: 28px;">',
                  '<label>特别排除</label>',
                  '<div rel="gen-lianxu-without">',
                    '<span>排除</span>',
                    '<ol class="nums text" id="auto-special-ols">',
                      '<li class="twosp" rel="01">不连</li><li class="twosp" rel="02">两连</li>',
                      '<li class="threesp" rel="03">豹子</li><li class="threesp" rel="04">组三</li><li class="threesp" rel="05">组六</li><li class="threesp" rel="06">三连</li>',
                      '<li class="foursp" style="display:none;" rel="09">豹子</li><li class="foursp" style="display:none;" rel="10">不连</li>',
                      '<li class="foursp" style="display:none;" rel="11">二连</li><li class="foursp" style="display:none;" rel="12">三连</li>',
                      '<li class="foursp" style="display:none;" rel="13">散号</li><li class="foursp" style="display:none;" rel="14">对子号</li>',
                      '<li class="foursp" style="display:none;" rel="15">三同号</li><li class="foursp" style="display:none;" rel="16">两个对子</li>',
                      '<li class="fivesp" style="display:none;" rel="17">不连</li>',
                      '<li class="fivesp" style="display:none;" rel="18">两连</li>',
                      '<li class="fivesp" style="display:none;" rel="19">三连</li>',
                      '<li class="fivesp" style="display:none;" rel="20">四连</li>',
                      '<li class="fivesp" style="display:none;" rel="21">五连</li>',
                      '<li class="fivesp" style="display:none;" rel="22">AAAAA</li>',
                      '<li class="fivesp" style="display:none;" rel="23">AABCD</li>',
                      '<li class="fivesp" style="display:none;" rel="24">AABBC</li>',
                      '<li class="fivesp" style="display:none;" rel="25">AAABB</li>',
                      '<li class="fivesp" style="display:none;" rel="26">AAABC</li>',
                      '<li class="fivesp" style="display:none;" rel="27">AAAAB</li>',
                      '<li class="fivesp" style="display:none;" rel="28">ABCDE</li>',
                      //'<li class="threesp" rel="07">散号</li><li class="threesp" rel="08">对子号</li><li class="threesp" rel="08">三同号</li><li class="threesp" rel="09">两个对子</li>',
                      //'<li class="foursp" rel="10">四连</li><li class="foursp" rel="11">五连</li>',
                      //'<li class="fivesp" rel="12">AAAAA</li><li class="fivesp" rel="13">AABCD</li><li class="fivesp" rel="14">AABBC</li><li class="fivesp" rel="15">AAABB</li><li class="fivesp" rel="16">AAABC</li><li class="fivesp" rel="17">AAAAB</li><li class="fivesp" rel="18">ABCDE</li>',
                    '</ol>',
                  '</div>',
                '</li>',
              '</ul>',
              '<div class="gen-number">您共选择了<i id="gen-totaldeal">0</i>注，共计<i id="gen-totalmoney">0.00</i>元</div>',
              '<div class="gen-model clearfix">',
              '<div class="part-two"><div class="label">模式</div><div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div><div class="label">倍数</div><div class="multiple"><span class="subm">-</span><input name="multiple" type="text" value="1"><span class="addm">+</span></div></div>',
              '</div>',
              '<div class="gen-btns"><a class="likebtn hand nowg">立即生成</a>&nbsp;<a class="likebtn hand cleannow">清除号码</a></div>',
                //'<div class="cftip lname">彩种：'+GameData.getInfo().showName+'</div>',
                //'<div class="cftip digest">'+$(".play-list .selected").parent().find(">.label").text()+','+$(".play-list .selected").text()+' '+$(".ks_btn").attr("summary")+'</div>',
                //'<div class="cftip totalm">付款总金额：'+$("span.text-money[data-field='total']").text()+'元</div>',
                //'<div class="cftip">玩法</div>',
              '<div class="cftip cfmulti clearfix"><span>单式投注号码：</span>',
                '<textarea name="" rows="5" id="danshitext" cols="7"></textarea>',
              '</div>',
              '<div class="cftip aboutmax">温馨提示：本期最高奖金限额'+returnTip(GameData.getInfo().id)+'万，请会员谨慎投注！</div>',
            '</div>'
          ].join('');
				}(),
			buttons: [{
				label: '确定投注',
				action: function(dialog) {
					$('.lottery-betting .play-area .textarea textarea').val($('.generate-bet #danshitext').val()).keyup();
          setTimeout(function() {
            $('.quicktouzhu[data-command="submit"]').click();
          },300);
			 		dialog.close();
				}
			}, {
				label: '取消',
				action: function(dialog) {
					dialog.close();
				}
			}]
		});
	});

});
