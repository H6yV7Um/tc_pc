var RecordList = function () {

  /**
   * 订单工具类
   */
  var OrderUtils = function () {
    var isLoading = false;
    var loadData = function (billno, thisContent, callback) {
      var plen = arguments.length;
      if (!isLoading) {
        isLoading = true;
        App.blockUI({
          target: thisContent,
          boxed: true
        });
        $.ajax({
          type: 'post',
          url: Route.PATH + '/game-lottery/get-order',
          data: {billno: billno},
          timeout: 10000,
          dataType: 'json',
          success: function (response) {
            isLoading = false;
            App.unblockUI(thisContent);
            if (response.error == 0) {
              if (plen < 4) {
                initBox(response.data, thisContent, callback);
              } else {
                callback(response.data, thisContent);
              }
              //initBox(response.data, thisContent, callback);
            }
            if (response.error == 1 || response.error == 2) {
              App.alert('warning', '提示消息', response.message);
            }
          },
          error: function () {
            isLoading = false;
            App.unblockUI(thisContent);
          }
        });
      }
    }
    var initDoc = function (data) {
      var actions = '';
      if (data.allowCancel) {
        actions += '<input data-id="' + data.billno + '" data-command="cancel-general" value="撤销订单" type="button" class="button">';
      } else {
        actions = '<input value="无操作" type="button" class="button grey">';
      }
      var formatPrizeModel = data.point > 0 ? data.code + ' + 返点' + data.point.toFixed(1) + '%' : data.code;
      var innerHtml =
        '<div class="lottery-order-details">' +
        '<table class="info">' +
        '<tbody>' +
        '<tr>' +
        '<td class="label">订单编号</td>' +
        '<td class="value">' + data.billno + '</td>' +
        '<td class="label">状态</td>' +
        '<td class="value">' + data.statusRemark + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">彩种</td>' +
        '<td>' + data.lottery + '</td>' +
        '<td class="label">期号</td>' +
        '<td>' + data.issue + '期</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">玩法</td>' +
        '<td>' + data.method + '</td>' +
        '<td class="label">注数</td>' +
        '<td>' + data.nums + '注</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">资金模式</td>' +
        '<td>' + DataFormat.formatUserBetsModel(data.model) + '</td>' +
        '<td class="label">倍数</td>' +
        '<td>' + data.multiple + '倍</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">奖金模式</td>' +
        '<td>' + data.code + '</td>' +
        '<td class="label">返点</td>' +
        '<td>' + data.point.toFixed(1) + '%</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">投注金额</td>' +
        '<td>¥ ' + data.money.toFixed(3) + '</td>' +
        '<td class="label">中奖金额</td>' +
        '<td>¥ ' + data.winMoney.toFixed(3) + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">下单时间</td>' +
        '<td colspan="3">' + moment(data.orderTime).format('YYYY-MM-DD HH:mm:ss') + '</td>' +
        //'<td class="label" rel="封单时间"></td>'+
        //'<td rel="'+moment(data.stopTime).format('YYYY-MM-DD HH:mm:ss')+'"></td>'+
        '</tr>' +
        '<tr>' +
        '<td class="label">开奖号码</td>' +
        '<td colspan="3">' + (data.openCode ? data.openCode : '无') + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label">投注内容<br><a class="hand print" style="color:red">打印</a></td>' +
        '<td colspan="3" class="v-middle">' + '<div id="printnow" style="display:none"></div>' +
        '<div class="scroller" style="height: 90px; overflow-x: hidden;overflow-y: auto;">' +
        '<div class="text-codes">' + (String(data.method).indexOf('单式') > -1 ? String(data.content).replace(/,/g, '').replace(/\|/g, ',') : data.content) + '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<div class="button-groups">' + actions + '<input data-command="cancel" value="取消" type="button" class="button green"></div>' +
        '</div>';
      return innerHtml;
    }
    var initEvent = function (thisContent, data, callback) {
      $('.lottery-order-details').find('[data-command="cancel-general"]').click(function () {
        var id = $(this).attr('data-id');
        cancelGeneral(id, thisContent, callback);
      });
      $('.lottery-order-details').find('.print').click(function () {
        $('.lottery-order-details #printfr').remove();
        $('.lottery-order-details #printnow').html('<iframe id="printfr" rel="/static/print.html"></iframe>');
        $('.lottery-order-details #printfr').attr('src', '/static/print.html').load(function () {
          var iframe = $('.lottery-order-details #printfr');
          var innerDoc = iframe[0].contentDocument || iframe[0].contentWindow.document;
          innerDoc.write([
            '<style media="all">.PrintArea{color:#000;width:508px;height:100px}.smallNum{display:block;}em{font-style:normal;}ul{margin:0px;padding:0px;}li{line-height:25px;}hr{border:none;height:2px;background-color: #000000;border-bottom:2px solid #000000;}h2{font-size:18px;padding:0px;margin:0px;text-align:center;line-height:45px;}.bl{display:block;}.printContent{word-break: break-all;max-height: 220px;overflow-y: hidden;display: inline-block;}</style>',
            '<div class="PrintArea">',
            '<h2>彩票投注单</h2>',
            '<ul>',
            '<li><span>下单时间：</span><em>', moment(data.orderTime).format('MM-DD HH:mm:ss'), '</em></li>',
            '<li><span>投注彩种：</span><em>', data.lottery, '</em></li>',
            '<li class="lottime"><span>投注期号：</span><em>', data.issue, '</em><hr/></li>',
            '<li class="lotbh"><span>注单编号：</span><em class="smallNum">', data.billno, '</em></li>',
            '<li><span>投注玩法：</span><em>', data.method, '</em></li>',
            '<li><span class="bl">投注内容：</span><em class="printContent">', (data.content.length > 100 ? data.content.substr(0, 100) + '... 投注内容较长，只显示部分投注内容。' : data.content), '</em></li>',
            '<li class="lotje"><span>投注金额：</span><em>', data.money.toFixed(3), '元</em></li>',
            '<li class="lotmon"><hr/>　　<span>总金额：</span><em>', data.money.toFixed(3), '元</em></li>',
            '</ul>',
            '</div>',
          ].join(''));
          iframe[0].contentWindow.print();
        });

      });
      $('.lottery-order-details').find('[data-command="cancel-chase"]').click(function () {
        var chaseBillno = $(this).attr('data-no');
        cancelChase(chaseBillno, thisContent, callback);
      });
      $('.lottery-order-details').find('[data-command="cancel"]').click(function () {
        if (box) box.close();
      });
    }
    var box;
    var initBox = function (data, thisContent, callback) {
      if (box == undefined) {
        var doc = initDoc(data);
        box = new jBox('Modal', {
          width: 740,
          height: 520,
          title: '订单详情',
          overlay: true,
          closeOnClick: false,
          blockScroll: false,
          animation: {open: 'zoomIn'},
          closeButton: 'title',
          draggable: 'title',
          content: doc,
          addClass: 'common-modal grey order_detail',
          onInit: function () {
            this.open();
            initEvent(thisContent, data, callback);
            App.initScroll('.scroller');
            //App.initScroll();
            //
          },
          onCloseComplete: function () {
            this.destroy();
            box = undefined;
          }
        });
      } else {
        box.toggle();
      }
    }
    var details = function (billno, thisContent, callback) {
      loadData(billno, thisContent, callback);
    }
    var detailsnopop = function (billno, thisContent, callback) {
      loadData(billno, thisContent, callback, 1);
    }
    var isCanceling = false;
    var doCancelOrder = function (data, thisContent, callback) {
      if (!isCanceling) {
        isCanceling = true;
        App.blockUI({
          target: thisContent,
          boxed: true
        });
        $.ajax({
          type: 'post',
          url: Route.PATH + '/game-lottery/cancel-order',
          data: data,
          timeout: 10000,
          dataType: 'json',
          success: function (response) {
            isCanceling = false;
            App.unblockUI(thisContent);
            if (response.error == 0) {
              App.alert('success', '提示消息', '操作成功，该订单已成功撤销。', 3000);
              if ($.isFunction(callback)) callback();
            }
            if (response.error == 1 || response.error == 2) {
              App.alert('warning', '提示消息', response.message);
            }
          },
          error: function () {
            isCanceling = false;
            App.unblockUI(thisContent);
          }
        });
      }
    }
    var cancelGeneral = function (billno, thisContent, callback) {
      if (box) box.close();
      App.confirm('question', '确认消息', '确定要撤销该订单？', 0, '确定', '取消', function () {
        var data = {billno: billno};
        doCancelOrder(data, thisContent, callback);
      }, function () {

      }, 'cancel-common');
    }
    var cancelChase = function (chaseBillno, thisContent, callback) {
      if (box) box.close();
      App.confirm('question', '确认消息', '确定要撤销该追号订单？', 0, '确定', '取消', function () {
        var data = {type: 'chase', billno: chaseBillno};
        Will.ajax(data, Route.PATH + '/game-lottery/cancel-chase', callback);
      });
    }
    return {details: details, detailsnopop: detailsnopop, cancelGeneral: cancelGeneral, cancelChase: cancelChase}
  }();

  var PopOrderRecord = function () {

    var initDoc = function (data) {
      //console.log(data,'datadatadata');
      var actions = '';
      if (data.allowCancel) {
        actions += '<input data-id="' + data.billno + '" data-command="cancel-general" value="撤销订单" type="button" class="button">';
        if (data.type == 1) {
          actions += '<input data-no="' + data.chaseBillno + '" data-command="cancel-chase" value="撤销追号" type="button" class="button green">';
        }
      } else {
        actions = '<input value="无操作" type="button" class="button grey">';
      }
      var innerHtml =
        '<div class="lottery-order-details sffsdf32">' +
        '<table class="info">' +
        '<tbody>' +
        '<tr>' +
        '<td class="label-f" width="140">订单编号</td>' +
        '<td class="value">' + data.billno + '</td>' +
        '<td class="label-f">状态</td>' +
        '<td class="value" rel="' + data.status + '">' + DataFormat.formatUserBetsStatus(data.status) + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">彩种</td>' +
        '<td>' + data.lottery + '</td>' +
        '<td class="label-f">期号</td>' +
        '<td>' + data.issue + '期</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">玩法</td>' +
        '<td>' + data.method + '</td>' +
        '<td class="label-f">注数</td>' +
        '<td>' + data.nums + '注</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">资金模式</td>' +
        '<td>' + DataFormat.formatUserBetsModel(data.model) + '</td>' +
        '<td class="label-f">倍数</td>' +
        '<td>' + data.multiple + '倍</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">奖级</td>' +
        '<td>' + data.code + '</td>' +
        '<td class="label-f">返点</td>' +
        '<td>' + data.point.toFixed(1) + '%</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">投注金额</td>' +
        '<td>¥ ' + data.money.toFixed(3) + '</td>' +
        '<td class="label-f">中奖金额</td>' +
        '<td>¥ ' + (data.winMoney ? data.winMoney : 0).toFixed(3) + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">下单时间</td>' +
        '<td colspan="3">' + moment(data.orderTime).format('YYYY-MM-DD HH:mm:ss') + '</td>' +
        //'<td class="label-f">封单时间</td>'+
        //'<td>' + moment(data.stopTime).format('YYYY-MM-DD HH:mm:ss') + '</td>'+
        '</tr>' +
        '<tr>' +
        '<td class="label-f">开奖号码</td>' +
        '<td colspan="3">' + (data.openCode ? data.openCode : '无') + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">投注内容</td>' +
        '<td colspan="3" class="v-middle">' +
        '<div class="scroller" style="height: 60px; overflow-x: hidden;overflow-y: auto;">' +
        '<div class="text-codes">' + data.content + '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<div class="button-groups">' + actions + '<input data-command="cancel" value="取消" type="button" class="button green"></div>' +
        '</div>';
      return innerHtml;
    }
    var initEvent = function (thisContent, callback) {
      $('.lottery-order-details').find('[data-command="cancel-general"]').click(function () {
        var id = $(this).attr('data-id');
        cancelGeneral(id, thisContent, callback);
      });
      $('.lottery-order-details').find('[data-command="cancel-chase"]').click(function () {
        var chaseBillno = $(this).attr('data-no');
        cancelChase(chaseBillno, thisContent, callback);
      });
      $('.lottery-order-details').find('[data-command="cancel"]').click(function () {
        var box = Will.getBox();
        if (box) box.close();
      });

      //		cancel-single-trace
    }

    var details = function (id, thisContent, callback, isAgent) {
      var url = Route.PATH + '/game-lottery/get-order';
      //if(isAgent) url = '/api/agent/get-lottery-order';
      Will.ajax({billno: id}, url, function (data) {
        Will.initBox('订单详情', initDoc(data), 800, 420, initEvent, 'order_detail');
      })
    }
    var doCancelOrder = function (data, thisContent, callback) {
      Will.ajax(data, Route.PATH + '/game-lottery/cancel-order', function (data) {
        App.alert('success', '提示消息', '操作成功，该订单已成功撤销。', 500);
        if ($.isFunction(callback)) callback();
      })
    }

    var cancelGeneral = function (id, thisContent, callback) {
      var box = Will.getBox();
      if (box) box.close();
      cancelGeneralOrder(id, thisContent, callback);
    }
    var cancelGeneralOrder = function (id, thisContent, callback) {
      App.confirm('question', '确认消息', '确定要撤销该订单？', 0, '确定', '取消', function () {
        var data = {type: 'general', billno: id};
        doCancelOrder(data, thisContent, callback);
      });
    }

    var doCancelTraceOrder = function (data, thisContent, callback) {
      Will.ajax(data, Route.PATH + '/game-lottery/cancel-single-chase', function (data) {
        App.alert('success', '提示消息', '操作成功，该追号订单已成功撤销。', 500);
        if ($.isFunction(callback)) callback();
      })
    }

    var cancelTraceOrder = function (id, thisContent, callback) {
      var box = Will.getBox();
      if (box) box.close();
      App.confirm('question', '确认消息', '确定要撤销该订单？', 0, '确定', '取消', function () {
        var data = {type: 'general', billno: id};
        doCancelTraceOrder(data, thisContent, callback);
      });
    }

    var cancelChase = function (chaseBillno, thisContent, callback) {
      var box = Will.getBox();
      if (box) box.close();
      App.confirm('question', '确认消息', '确定要撤销该追号订单？', 0, '确定', '取消', function () {
        var data = {type: 'chase', chaseBillno: chaseBillno};
        doCancelTraceOrder(data, thisContent, callback);
      });
    }

    var chaseDetail = function (id, thisContent, callback) {
      Will.ajax({billno: id}, Route.PATH + '/game-lottery/get-chase', function (data) {
        Will.initBox('订单详情', initDoc02(data), 800, 500, initEvent02);
      });
    }

    var initDoc02 = function (data) {
      var actions = '';
      if (data.allowCancel) {
        actions += '<input data-no="' + data.billno + '" data-command="cancel-chase" value="撤销追号" type="button" class="button green">';
      } else {
        actions = '<input value="无操作" type="button" class="button grey">';
      }
      var innerHtml =
        '<div class="lottery-details"><span class="w-tabs">详细</span><span class="w-tabs">列表</span>' +
        '<div class="lottery-order-details w-cots">' +
        '<table class="info">' +
        '<tbody>' +
        '<tr>' +
        '<td class="label-f">订单编号</td>' +
        '<td class="value">' + data.billno + '</td>' +
        '<td class="label-f">状态</td>' +
        '<td class="value" rel="' + data.status + '">' + data.statusStr + '</td>' +
        //'<td class="value">' + DataFormat.formatUserChaseStatus(data.status) + '</td>'+
        '</tr>' +
        '<tr>' +
        '<td class="label-f">彩种</td>' +
        '<td>' + data.lottery + '</td>' +
        '<td class="label-f">玩法</td>' +
        '<td>' + data.method + '</td>' +

        '</tr>' +
        '<tr>' +
        '<td class="label-f">开始期号</td>' +
        '<td>' + data.startIssue + '期</td>' +
        /*			'<td class="label-f">截止期号</td>'+
              '<td>' + data.endIssue + '期</td>'+*/
        '<td class="label-f">返点</td>' +
        '<td>' + data.point.toFixed(1) + '%</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">总期数</td>' +
        '<td>' + data.totalCount + '</td>' +
        '<td class="label-f">已追期数</td>' +
        '<td>' + data.clearCount + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">资金模式</td>' +
        '<td>' + DataFormat.formatUserBetsModel(data.model) + '</td>' +
        '<td class="label-f">注数</td>' +
        '<td>' + data.nums + '注</td>' +
        '</tr>' +
        '<tr>' +
        /*'<td class="label-f">奖级</td>'+
        '<td>' + data.code + '</td>'+*/
        '</tr>' +
        '<tr>' +
        '<td class="label-f">总金额</td>' +
        '<td>¥ ' + data.totalMoney.toFixed(3) + '</td>' +
        '<td class="label-f">总奖金</td>' +
        '<td>¥ ' + (data.winMoney ? data.winMoney : 0).toFixed(3) + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td class="label-f">下单时间</td>' +
        '<td colspan="3">' + moment(data.orderTime).format('YYYY-MM-DD HH:mm:ss') + '</td>' +
        //'<td class="label-f">封单时间</td>'+
        //'<td>' + moment(data.stopTime).format('YYYY-MM-DD HH:mm:ss') + '</td>'+
        '</tr>' +
        '<tr>' +
        '<td class="label-f">中奖是否撤单</td>' +
        '<td>' + (data.winStop ? '是' : '否') + '</td>' +
        '<td class="label-f"> </td>' +
        '<td>   </td>' +
        '</tr>' +

        '<tr>' +
        '<td class="label-f">投注内容</td>' +
        '<td colspan="3" class="v-middle">' +
        '<div class="scroller" style="height: 60px; width:584px; overflow-x: hidden; overflow-y: auto;">' +
        '<div class="text-codes">' + data.content + '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '<span class="button-groups">' + actions + '<input data-command="cancel" value="取消" type="button" class="button green"></span>' +
        '<div class="w-list lottery-chase-list  w-cots" style="display:none">' +
        '<table class="wh-table">' +
        '<thead>' +
        '<tr>' +
        '<td width="110">期号</td>' +
        '<td width="50">倍数</td>' +
        /*	'<td width="150">开奖时间</td>'+*/
        '<td width="60">投注金额</td>' +
        '<td width="60">中奖金额</td>' +
        '<td width="80">状态</td>' +
        '<td width="150">开奖号码</td>' +
        '<td width="80">操作</td>' +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '<div class="scroll">' +
        '<table class="w-table">				' +
        '<tbody>' + generateChaseOrderList(data) +
        '</tbody>' +
        '</table>' +
        '<div>' +
        '</div>	' +

        '</div>';
      return innerHtml;
    }

    var generateChaseOrderList = function (data) {
      var trHtml = '';
      $.each(data.chaseList, function (i, val) {  //.attr('data-id',ele.billno).attr('chaseBillno',data.billno);
        trHtml +=
          '<tr data-id="201604041211297402427179">' +
          '<td width="110">' + val.issue + '</td>' +
          '<td width="50">' + val.multiple + '</td>' +
          /*	'<td width="150">'+moment(val.openTime).format('YYYY-MM-DD HH:mm:ss')+'</td>'+*/
          '<td width="60">¥ ' + val.money.toFixed(3) + '</td>' +
          '<td width="60">¥ ' + val.winMoney.toFixed(3) + '</td>' +
          '<td width="80">' + val.statusRemark + '</td>' +
          '<td width="150" class="code"><span class="data">' + (val.openCode ? val.openCode : '无') + '</span></td>		' +
          '<td width="80">' + (val.allowCancel ? '<input data-id="' + val.billno + '"  chaseBillno="' + data.billno + '" data-command="cancel-single-trace" value="撤销订单" type="button" class="button stracebtn">' : '无操作') + '</td>		' +
          '</tr>';
      });
      return trHtml;
    }

    var initEvent02 = function (thisContent, callback) {
      //追号列表的撤销订单操作
      $('.lottery-details').delegate("[data-command='cancel-general']", "click", function () {
        var id = $(this).attr('data-id');
        var chaseId = $(this).attr('chaseBillno');
        cancelGeneralOrder(id, thisContent, function () {
          Will.ajax({billno: chaseId}, Route.PATH + '/game-lottery/get-chase', function (data) {
            var sb = $('.lottery-details');
            $('.lottery-details .scroll tbody').empty().append(generateChaseOrderList(data));
            $('.lottery-details > span:eq(1)').click();
          })
        });
      });
      $('.lottery-details').find('[data-command="cancel-chase"]').click(function () {
        var chaseBillno = $(this).attr('data-no');
        cancelChase(chaseBillno, thisContent, callback);
      });
      $('.lottery-details').find('[data-command="cancel-single-trace"]').click(function () {
        //var chaseBillno = $(this).attr('data-no');
        var biilno = $(this).attr('data-id');
        ;
        cancelTraceOrder(biilno, thisContent, callback);
      });
      $('.lottery-details').find('[data-command="cancel"]').click(function () {
        var box = Will.getBox();
        if (box) box.close();
      });

      $('.lottery-details > .w-tabs').click(function () {
        $('.lottery-details > .w-tabs').removeClass('active');
        $(this).addClass('active');
        $('.lottery-details > .w-cots').hide();
        $('.lottery-details > .w-cots').eq($(this).index()).show();
      });
      $('.lottery-details > .w-tabs:eq(0)').click();
    }


    var doCancelChase = function (data, thisContent, callback) {
      Will.ajax(data, Route.PATH + '/game-lottery/cancel-chase', function (data) {
        App.alert('success', '提示消息', '操作成功，该追号订单已成功撤销。', 3000);
      });
    }

    var cancelChase = function (chaseBillno, thisContent, callback) {
      var box = Will.getBox();
      if (box) box.close();
      App.confirm('question', '确认消息', '确定要撤销该追号订单？', 0, '确定', '取消', function () {
        var data = {type: 'chase', billno: chaseBillno};
        doCancelChase(data, thisContent, callback);
      });
    }

    //details方法可同时被个人和代理游戏记录详细调用
    //chaseDetail追号详细
    return {
      details: details,
      chaseDetail: chaseDetail,
      cancelGeneral: cancelGeneral,
      cancelChase: cancelChase,
      cancelTraceOrder: cancelTraceOrder
    }

  }();

  var repeatAgain = function (a, data) {
    var aviableMethod = GameData.getMethodList();
    //console.log('44444',aviableMethod);
    var methodcode = a.parent().attr('rel');
    var methodtime = a.parent().attr('time');
    var methodmodel = a.parent().attr('model');
    var methodcn = a.parent().attr('method');
    var methodcontent = a.parent().attr('content');
    console.log(methodcontent, 'beforebeforebeforebeforebeforebefore');
    var postcontent = methodcontent.replace(/,/g, '').replace(/\|/g, ',');
    if (String(methodcn).indexOf('任选') > -1) {
      postcontent = methodcontent;
    }
    if (String(methodcn).indexOf('单式') > -1) {
      postcontent = methodcontent.replace(/,/g, '').replace(/\|/g, ' ');
    }
    console.log(methodcn, postcontent, 'afterafterafterafterafterafter');
    var getdata = data;
    var bindNumber = function (els) {
      if (els.length == 0) return;
      els.keydown(function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
          if ($(this).val() == '') return;
          var val = Number($(this).val());
          if (val > 999) {
            val = 999;
          }
          if (!isNaN(val)) {
            if (e.keyCode == 38) val++;
            if (e.keyCode == 40) val--;
            if (val < 0) val = 0;
            $(this).val(val);
          }
        }
      });
      els.keyup(function () {
        if ($(this).val() == '') return;
        var val = Number($(this).val());
        if (/^[0-9]*$/.test(val)) {
          if (val < 0) $(this).val(1);
        } else {
          $(this).val(0);
        }
      });
      els.blur(function () {
        if ($(this).val() == '') {
          $(this).val(0);
        }
      });
    }

    BootstrapDialog.show({
      cssClass: 'quick-bet',
      title: '<i class="icon lock"></i>再来一注',
      onshow: function (d) {
        d.$modalBody.find('.totalm').data('money', getdata.money);
        d.$modalBody.find('.totalm').data('repeat', getdata.money);
        d.$modalBody.find('.totalm').data('times', 1);
        //console.log(d.$modalBody.find('.totalm').data('repeat'),'rrrrrrrrrr');

        d.$modalBody.find('.betmodel').off('click').on('click', 'a', function () {
          $(this).siblings().removeClass('selected');
          $(this).addClass('selected');
          $('.record-list').data('m', $(this).data('val'));
          var plustime = {
            'yuan': 1, 'jiao': 0.1, 'fen': 0.01, 'li': 0.001
          }
          var backrealt = d.$modalBody.find('.totalm').data('money') / plustime[getdata.model];

          //console.log(d.$modalBody.find('.totalm').data('money'),plustime[getdata.model]);
          //console.log(backrealt,d.$modalBody.find('.totalm').data('money'),plustime[d.$modalBody.find('.betmodel a.selected').data('val')]);

          //console.log(backrealm,d.$modalBody.find('.betmodel a.selected').data('val'));
          var newmoney = backrealt * plustime[d.$modalBody.find('.betmodel a.selected').data('val')] / methodtime;
          //console.log(newmoney,'initttttttttttt');
          d.$modalBody.find('.totalm').data('repeat', newmoney);
          newmoney = newmoney * parseInt(d.$modalBody.find('.multiple input').val(), 10);
          if (typeof String(newmoney).split('.')[1] !== 'undefined' && String(newmoney).split('.')[1].length > 10) {
            newmoney = Number(newmoney).toFixed(2);
          }
          //console.log(newmoney);
          d.$modalBody.find('.totalm i').html(newmoney);
        });
        d.$modalBody.find('.bettime input').val(methodtime);
        //console.log(methodtime,'methodtimemethodtime',getdata.model);
        //console.log($('.record-list').data('m'),'read');
        if (typeof $('.record-list').data('m') != 'undefined') {
          d.$modalBody.find('.betmodel a').removeClass('selected');
          //console.log($('.record-list').data('m'));
          //console.log($('.record-list').data('m')!=getdata.model,$('.record-list').data('m'),getdata.model);
          if ($('.record-list').data('m') != getdata.model) {
            d.$modalBody.find('.betmodel a[data-val="' + getdata.model + '"]').addClass('selected');
          } else {
            d.$modalBody.find('.betmodel a[data-val="' + $('.record-list').data('m') + '"]').addClass('selected');
          }
        } else {
          d.$modalBody.find('.betmodel a').removeClass('selected');
          d.$modalBody.find('.betmodel a[data-val="' + getdata.model + '"]').addClass('selected');
        }
        bindNumber(d.$modalBody.find('.bettime input'));
        d.$modalBody.find('.bettime .subm').off('click').on('click', function () {
          var event = $.Event("keydown");
          event.keyCode = 40;
          if (parseInt($(this).next().val(), 10) == 1) {
            return false;
          }
          $(this).next().trigger(event);
          $(this).next().trigger("keyup");
          var addtimem = d.$modalBody.find('.totalm').data('repeat') * parseInt($(this).next().val(), 10);
          if (typeof String(addtimem).split('.')[1] !== 'undefined' && String(addtimem).split('.')[1].length > 10) {
            addtimem = Number(addtimem).toFixed(2);
          }
          d.$modalBody.find('.totalm i').html(addtimem);
        });
        d.$modalBody.find('.bettime .addm').off('click').on('click', function () {
          var event = $.Event("keydown");
          event.keyCode = 38;
          $(this).prev().trigger(event);
          $(this).prev().trigger("keyup");
          var addtimem = d.$modalBody.find('.totalm').data('repeat') * parseInt($(this).prev().val(), 10);
          if (typeof String(addtimem).split('.')[1] !== 'undefined' && String(addtimem).split('.')[1].length > 10) {
            addtimem = Number(addtimem).toFixed(2);
          }
          d.$modalBody.find('.totalm i').html(addtimem);
        });
      },
      message: function () {
        return [
          "<div class='cftip lname'>彩种：" + GameData.getInfo().showName + "</div>",
          "<div class='cftip digest'>" + methodcn + "," + postcontent + "</div>",
          "<div class='cftip totalm'>付款总金额：<i>" + data.money + "</i>元</div>",
          "<div class='cftip betmodel'><label>模式：</label><div class='model'><a data-val='yuan' class='selected'>元</a><a data-val='jiao'>角</a><a data-val='fen'>分</a><a data-val='li'>厘</a></div></div>",
          "<div class='cftip bettime'><label>倍数：</label><div class='multiple'><span class='subm hand'>-</span><input name='multiple' type='text' value='1'><span class='addm hand'>+</span></div></div>",
          ""
        ].join('')
      }(),
      buttons: [{
        label: '确定投注',
        action: function (dialog) {
          //console.log(typeof GameLotteryCtrl !='undefined');
          //var data = { text: $.toJSON(list) };
          //"-,4,4,5,-"
          var modelv = dialog.$modalBody.find('.betmodel a.selected').data('val');
          var modelt = dialog.$modalBody.find('.bettime input').val();

          if (modelt > 999) {
            modelt = 999;
          }
          var recontent = String(getdata.content).replace(/,/g, '').replace(/\|/g, ',');
          if (String(GameData.getInfo().shortName).indexOf('11Y') > -1) {
            recontent = String(getdata.content).replace(/,/g, ' ').replace(/\|/g, ',')
            //postcontent = String(getdata.content).replace(/,/g,' ').replace(/\|/g, ',')+',-,-';
            //console.log(postcontent,'_____',recontent);
          }
          //alert(methodcn);
          if (String(GameData.getInfo().shortName).indexOf('PK10') > -1) {
            //recontent = String(getdata.content);
            if (String(getdata.content).indexOf('|') > -1) {
              recontent = String(getdata.content).replace(/,/g, ' ').replace(/\|/g, ';');
            } else {
              recontent = String(getdata.content);
            }
            //postcontent = String(getdata.content).replace(/,/g,' ').replace(/\|/g, ',')+',-,-';
            //console.log(getdata.content,'_____',recontent);
          }

          if (String(methodcn).indexOf('单式') > -1) {
            recontent = String(getdata.content).replace(/,/g, '').replace(/\|/g, ' ');
          }

          if (String(GameData.getInfo().shortName).indexOf('K3') > -1) {
            recontent = String(getdata.content);
            //postcontent = String(getdata.content).replace(/,/g,' ').replace(/\|/g, ',')+',-,-';
            //console.log(getdata.content,'_____',recontent);
          }
          console.log(recontent, 'recontent');
          if (postcontent != recontent) {
            postcontent = recontent;
          }

          /*if (parseFloat(dialog.$modalBody.find('.totalm i').html())<0.01) {
            App.alert('warning', '提示消息', "使用厘模式进行投注，单注注单最小金额为0.01元！");
                  dialog.close();
            return;
          }*/
          //console.log(postcontent==String(getdata.content).replace(/,/g,'').replace(/\|/g, ','));
          var data = {text: '[{"lottery":"' + GameData.getInfo().shortName + '","issue":"' + $('[data-field="global-expect"]').text() + '","method":"' + methodcode + '","content":"' + postcontent + '","model":"' + modelv + '","multiple":"' + modelt + '","code":' + $('.lottery-betting .lottery-opearation .adjust-prize [data-field="code"]').html() + ',"compress":false}]'};
          //console.log(data,'data');
          GameLotteryCtrl.addOrder({
            data: data,
            beforeSend: function () {

            },
            success: function (response) {
              if (response.error == 0) {
                App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
                $('[data-field="lotteryBalance"]').html(response.data);
                if (typeof RecordList != 'undefined') {
                  RecordList.init();
                }
              } else {
                App.alert('info', '消息提示', response.message, 3000);
              }
            }
          });
          //alert('1');
          dialog.close();
        }
      }, {
        label: '取消',
        action: function (dialog) {
          dialog.close();
        }
      }]
    });
  }

  var shortMethodCn = function (m) {
    m = String(m).replace('二星后二', '后二').replace('二星前二', '前二');
    return (String(m).length > 8 ? String(m).substring(0, 8) + '...' : m)
  }
  var initNotOpenOrder = function () {
    var thisContent = els().find('[data-content="NotOpenOrder"]');
    var thisResultTable = thisContent.find('.result > table');

    thisContent.show();

    var getSearchParams = function () {
      var sTime = moment().format('YYYY-MM-DD') + " 00:00:00";
      var eTime = moment().add(1, 'days').format('YYYY-MM-DD') + " 23:59:59";
      return {sTime: sTime, eTime: eTime, status: 0, lotteryType: 1};
    }

    var isSearching = false;
    var pagination = $.pagination({
      render: thisContent.find('.page-list'),
      pageSize: 5,
      ajaxType: 'post',
      ajaxUrl: Route.PATH + '/game-lottery/search-order',
      ajaxData: getSearchParams,
      beforeSend: function () {
        isSearching = true;
        App.blockUI({
          target: thisContent,
          boxed: true
        });
      },
      complete: function () {
        isSearching = false;
        App.unblockUI(thisContent);
      },
      success: function (list) {
        thisResultTable.find('tbody').empty();
        var iscancancel = true;
        if (Number($('[data-field="global-last-time"]').attr('s')) < 13) {
          iscancancel = false;
        }
        $.each(list, function (i, val) {
          var actions = '无操作';
          if (val.allowCancel) {
            actions = (iscancancel ? '<a data-command="cancel">撤单</a>' : '');
          }
          if (actions != '无操作') {
            actions += '<a style="margin-left:2px;" data-command="repeat" >再来一注</a>';
          } else {
            actions = '<a data-command="repeat">再来一注</a>';
          }
          for (var i = 0; i < userInforInit.allowLottery.length; i++) {
            var a = userInforInit.allowLottery[i]
            if (a.lotteryName === val.lottery && a.methodName === val.method) {
              actions += '<a data-command="gendan" style="margin-left:2px">跟单</a>'
              break
            }
          }
          var shortMethod = String(val.method).replace(/[万千百十个]/g, '');
          var innerHtml =
            '<tr data-billno="' + val.billno + '">' +
            '<td><a data-command="details">' + val.billno.substr(16) + '</a></td>' +
            //'<td>' + val.lottery + '</td>'+
            '<td title="' + val.method + '"><label class="maxhidden">' + val.lottery + '/' + shortMethodCn(shortMethod) + '</label></td>' +
            '<td>' + val.issue + '</td>' +
            '<td>' + moment(val.orderTime).format('MM-DD HH:mm:ss') + '</td>' +
            '<td>¥' + val.money.toFixed(3) + '</td>' +
            '<td>¥' + (val.winMoney ? val.winMoney : 0).toFixed(3) + '</td>' +
            '<td>' + val.statusRemark + '</td>' +
            '<td class="repeatbtn" rel="' + val.methodCode + '" model="' + val.model + '" time="' + val.multiple + '" method="' + val.method + '" content="' + val.content + '">' + (val.lottery == GameData.getInfo().showName ? actions : '') + '</td>' +
            '</tr>';
          thisResultTable.find('tbody').append(innerHtml);
        });
        thisResultTable.find('a[data-command="details"]').click(function () {
          var billno = $(this).parents('tr').attr('data-billno');
          OrderUtils.details(billno, thisContent, function () {
            pagination.reload();
          });
        });
        thisResultTable.find('a[data-command="cancel"]').click(function () {
          var billno = $(this).parents('tr').attr('data-billno');
          OrderUtils.cancelGeneral(billno, thisContent, function () {
            pagination.reload();
          });
        });
        thisResultTable.find('a[data-command="repeat"]').click(function () {
          var billno = $(this).parents('tr').attr('data-billno');
          var t = $(this);
          OrderUtils.detailsnopop(billno, thisContent, function (res, c) {
            repeatAgain(t, res);
          });
        });
        thisResultTable.find('a[data-command="gendan"]').click(function () {
          var index = $(this).parents('tr').index()
          var getdata = JSON.parse(JSON.stringify(list[index]))
          getdata.model = 'yuan'
          var methodtime = getdata.multiple
          BootstrapDialog.show({
            cssClass: 'quick-bet',
            title: '<i class="icon lock"></i>下注清单',
            message: function () {
              return [
                "<div class='cftip lname'>彩种：" + list[index].lottery + "</div>",
                "<div class='cftip'>佣金比例: <input type='number' name='commRate' step='0.1' min='0'><span>佣金比例范围:" + userInforInit.minCommit + "~" + userInforInit.maxCommit + "</span></div>",
                "<div class='cftip digest' style='margin-top:5px;'>喇叭语言: <input type='text' name='hornTitle'></div>",
                "<div class='cftip digest'><div class='promt' style='color:red'></div></div>",
              ].join('')
            }(),
            buttons: [{
              label: '发起跟单',
              action: function (dialog) {
                var commRate = Number($('.bootstrap-dialog .bootstrap-dialog-message .cftip input[name="commRate"]').val().trim())
                var promptObj = $('.bootstrap-dialog .bootstrap-dialog-message .cftip .promt')
                if (!commRate && commRate !== 0) {
                  promptObj.text('佣金比例不能为空')
                  return false
                }
                if (commRate < userInforInit.minCommit || commRate > userInforInit.maxCommit) {
                  promptObj.text('佣金比例不在范围之内')
                  return false
                }
                var hornTitle = $('.bootstrap-dialog .bootstrap-dialog-message .digest input[name="hornTitle"]').val().trim()
                if (!hornTitle) {
                  promptObj.text('喇叭标语不能为空')
                  return false
                }
                App.confirm('question', '确认消息', '确定发起跟单吗?', 0, '确定', '取消', function () {
                  var params = {
                    data: {
                      billNo: getdata.billno,
                      commRate: commRate,
                      hornTitle: hornTitle
                    },
                    url: '/gendan/add-follow-start-order',
                    success: function (data) {
                      if (data.code === 0) {
                        App.alert('success', '提示消息', '发起跟单成功！', 3000);
                      } else {
                        App.alert('warning', '提示消息', data.message, 3000);
                      }
                    }
                  }
                  HttpRequest(params)
                  dialog.close();
                });
              }
            }, {
              label: '取消',
              action: function (dialog) {
                dialog.close();
              }
            }]
          });
        });
      },
      pageError: function (response) {
        isSearching = false;
      },
      emptyData: function () {
        isSearching = false;
        var emptyHtml = '<tr class="nodata"><td colspan="20"><em class="blanksign"></em></td></tr>';   //当前没有未开奖订单
        thisResultTable.find('tbody').html(emptyHtml);
      }
    });
    // 初始化
    pagination.init();
  }

  var initHistoryOrder = function () {
    var thisContent = els().find('[data-content="HistoryOrder"]');
    var thisResultTable = thisContent.find('.result > table');

    thisContent.show();

    var getSearchParams = function () {
      var sTime = moment().format('YYYY-MM-DD') + " 00:00:00";
      var eTime = moment().add(1, 'days').format('YYYY-MM-DD') + " 23:59:59";
      return {sTime: sTime, eTime: eTime, lotteryType: 1};
    }

    var isSearching = false;
    var pagination = $.pagination({
      render: thisContent.find('.page-list'),
      pageSize: 5,
      ajaxType: 'post',
      ajaxUrl: Route.PATH + '/game-lottery/search-order',
      ajaxData: getSearchParams,
      beforeSend: function () {
        isSearching = true;
        App.blockUI({
          target: thisContent,
          boxed: true
        });
      },
      complete: function () {
        isSearching = false;
        App.unblockUI(thisContent);
      },
      success: function (list) {
        thisResultTable.find('tbody').empty();
        $.each(list, function (i, val) {
          var actions = '无操作';
          var iscancancel = true;
          console.log($('[data-field="global-last-time"]').attr('s'));
          if (Number($('[data-field="global-last-time"]').attr('s')) < 13) {
            iscancancel = false;
          }
          if (val.allowCancel) {
            actions = (iscancancel ? '<a data-command="cancel">撤单</a>' : '');
          }
          if (actions != '无操作') {
            actions += '<a data-command="repeat" style="margin-left:2px;">再来一注</a>';
          } else {
            actions = '<a data-command="repeat">再来一注</a>';
            // <em class="icon">&#xe6c3;</em>
          }
          var shortMethod = String(val.method).replace(/[万千百十个]/g, '');
          var innerHtml =
            '<tr data-billno="' + val.billno + '">' +
            '<td><a data-command="details">' + val.billno.substr(16) + '</a></td>' +
            //'<td>' + val.lottery + '</td>'+
            '<td title="' + val.method + '"><label class="maxhidden">' + val.lottery + '/' + shortMethodCn(shortMethod) + '</label></td>' +
            //'<td title="' + val.method + '">' + val.method.substr(0,9) + '**</td>'+
            '<td>' + val.issue + '</td>' +
            '<td>' + moment(val.orderTime).format('MM-DD HH:mm:ss') + '</td>' +
            '<td title="' + val.money.toFixed(3) + '"><label class="maxmoney">¥' + val.money.toFixed(3) + '</label></td>' +
            '<td title="' + (val.winMoney ? val.winMoney : 0).toFixed(3) + '"><label class="maxmoney">¥' + (val.winMoney ? val.winMoney : 0).toFixed(3) + '</label></td>' +
            '<td>' + val.statusRemark + '</td>' +
            '<td class="repeatbtn" rel="' + val.methodCode + '" model="' + val.model + '" time="' + val.multiple + '" method="' + val.method + '" content="' + val.content + '">' + (val.lottery == GameData.getInfo().showName ? actions : '') + '</td>' +
            '</tr>';
          thisResultTable.find('tbody').append(innerHtml);
        });
        thisResultTable.find('a[data-command="details"]').click(function () {
          var billno = $(this).parents('tr').attr('data-billno');
          OrderUtils.details(billno, thisContent, function () {
            pagination.reload();
          });
        });
        thisResultTable.find('a[data-command="cancel"]').click(function () {
          var billno = $(this).parents('tr').attr('data-billno');
          OrderUtils.cancelGeneral(billno, thisContent, function () {
            pagination.reload();
          });
        });

        thisResultTable.find('a[data-command="repeat"]').click(function () {
          var billno = $(this).parents('tr').attr('data-billno');
          var t = $(this);
          OrderUtils.detailsnopop(billno, thisContent, function (res, c) {
            //console.log(res,c);
            repeatAgain(t, res);
            //pagination.reload();
          });

          //-,3,47,567,6转换到3|4,7|5,6,7|6
          //repeatAgain($(this));
        });
      },
      pageError: function (response) {
        isSearching = false;
      },
      emptyData: function () {
        isSearching = false;
        var emptyHtml = '<tr class="nodata"><td colspan="20"><em class="blanksign"></em></td></tr>';  //当前没有历史投注记录
        thisResultTable.find('tbody').html(emptyHtml);
      }
    });
    // 初始化
    pagination.init();
  }

  var initChaseOrder = function () {
    var thisContent = els().find('[data-content="ChaseOrder"]');
    var thisResultTable = thisContent.find('.result > table');

    thisContent.show();

    var getSearchParams = function () {
      var sTime = moment().format('YYYY-MM-DD');
      var eTime = moment().add(1, 'days').format('YYYY-MM-DD');
      return {sTime: sTime, eTime: eTime, lotteryType: 1};
    }

    var isSearching = false;
    var pagination = $.pagination({
      render: thisContent.find('.page-list'),
      pageSize: 5,
      ajaxType: 'post',
      ajaxUrl: Route.PATH + '/game-lottery/search-chase',
      ajaxData: getSearchParams,
      beforeSend: function () {
        isSearching = true;
        App.blockUI({
          target: thisContent,
          boxed: true
        });
      },
      complete: function () {
        isSearching = false;
        App.unblockUI(thisContent);
      },
      success: function (list) {
        thisResultTable.find('tbody').empty();
        $.each(list, function (i, val) {
          var actions = '无操作';
          if (val.allowCancel) {
            actions = '<a data-command="cancel-chase">撤单</a>';
          }
          var shortMethod = String(val.method).replace(/[万千百十个]/g, '');
          var innerHtml =
            '<tr data-id="' + val.billno + '">' +
            '<td><a class="hand" data-command="details">' + val.billno + '</a></td>' +
            //'<td>' + val.lottery + '</td>'+
            '<td title="' + val.method + '"><label class="maxhidden">' + val.lottery + '/' + (String(shortMethod).length > 8 ? String(shortMethod).substring(0, 8) + '...' : shortMethod) + '</label></td>' +
            //'<td title="'+val.method+'">' + val.lottery+'/'+ (String(shortMethod).length>8 ? String(shortMethod).substring(0,8)+'...' : shortMethod) + '</td>'+
            //'<td>' + val.method + '</td>'+
            '<td>' + val.startIssue + '</td>' +
            '<td>' + val.clearCount + '/' + val.totalCount + '</td>' +
            '<td>¥' + val.totalMoney.toFixed(3) + '</td>' +
            '<td>¥' + val.winMoney.toFixed(3) + '</td>' +
            '<td>' + val.statusStr + '</td>' +
            //'<td>' + DataFormat.formatUserChaseStatus(val.status) + '</td>'+
            '<td>' + actions + '</td>' +
            '</tr>';
          thisResultTable.find('tbody').append(innerHtml);
        });
        thisResultTable.find('a[data-command="details"]').click(function () {
          var id = $(this).parents('tr').attr('data-id');
          //console.log(id,'idPopOrderRecordPopOrderRecordPopOrderRecord');
          PopOrderRecord.chaseDetail(id, thisContent, function () {
            pagination.reload();
          });
          //OrderUtils.details(id, thisContent, function() {
          //	pagination.reload();
          //});
        });
        /*thisResultTable.find('a[data-command="cancel"]').click(function() {
            var id = $(this).parents('tr').attr('data-id');
            OrderUtils.cancelGeneral(id, thisContent, function() {
                pagination.reload();
            });
        });*/
        thisResultTable.find('a[data-command="cancel-chase"]').click(function () {
          var billno = $(this).parents('tr').attr('data-id');
          OrderUtils.cancelChase(billno, thisContent, function () {
            pagination.reload();
          });
        });
      },
      pageError: function (response) {
        isSearching = false;
      },
      emptyData: function () {
        isSearching = false;
        var emptyHtml = '<tr class="nodata"><td colspan="20"><em class="blanksign"></em></td></tr>';  //当前没有追号记录
        thisResultTable.find('tbody').html(emptyHtml);
      }
    });
    // 初始化
    pagination.init();
  }

  var els = function () {
    return $('.record-list');
  }

  $(document).ready(function () {
    els().find('.tabs > a:not(.outerlink)').click(function () {
      if (!$(this).hasClass('active')) {
        els().find('.tabs > a').removeClass('active');
        $(this).addClass('active');
        els().find('.panels > .content').hide();
        init();
      }
    });
  });
  var userInforInit = {
    minCommit: 0
  }
  var getInitInfor = function () {
    var params = {
      url: '/gendan/followUser/getPlanLevelSet',
      success: function (data) {
        if (data.code === 0) {
          var commitArr = data.data
          var params1 = {
            url: '/gendan/followUser/getUserInfo',
            success: function (data) {
              var level = data.data.level ? data.data.level : '菜鸟'
              for (var i = 0; i < commitArr.length; i++) {
                if (commitArr[i].level === level) {
                  userInforInit.maxCommit = commitArr[i].commRate
                  break
                }
              }
              var params2 = {
                url: '/gendan/queryAllAllowLotteyList',
                success: function (data) {
                  if (data.code === 0) {
                    userInforInit.allowLottery = data.data
                    init()
                  }
                }
              }
              HttpRequest(params2)
            }
          }
          HttpRequest(params1)
        }
      }
    }
    HttpRequest(params)
  }()
  var init = function () {
    if (typeof userInforInit.allowLottery === 'undefined') {
      return false
    }
    console.log(userInforInit)
    var key = els().find('.tabs > a.active').attr('data-key');
    if (key == 'NotOpenOrder') {
      initNotOpenOrder();
    }
    if (key == 'HistoryOrder') {
      initHistoryOrder();
    }
    if (key == 'ChaseOrder') {
      initChaseOrder();
    }
  }

  return {
    init: init
  }

}();
