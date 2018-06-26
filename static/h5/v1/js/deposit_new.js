$(function() {
  var allthird = [],allquicks=[],allscan=[];allbanks={};
  var bkcode = {
    'CEB':'光大银行',
    'PSBC':'中国邮政储蓄银行',
    'ABC':'中国农业银行',
    'CCB':'中国建设银行',
    'GDB':'广东发展银行',
    'BOCM':'交通银行',
    'NBBANK':'宁波银行',
    'HXB':'华夏银行',
    'HZCB':'杭州银行','NJCB':'南京银行',
    'HKBEA':'东亚银行',
    'BCCB':'北京银行',
    'CMBC':'民生银行',
    'NBCB':'宁波银行',
    'SDB':'平安银行',
    'CGB':'广发银行',
    'BOB':'北京银行',
    'BOC':'中国银行',
    'CMB':'招商银行',
    'ICBC':'中国工商银行',
    'CITIC':'中信银行','CTITC':'中信银行',
    'CIB':'兴业银行',
    'SPDB':'上海浦发银行'
  };
  var QueryString = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
          // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
          // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }();
  var gettypLogo = function(name) {
    if (String(name).indexOf('微信')>-1 || name =='2') {
      return 'images/wx.png'
    }
    if (String(name).indexOf('支付宝')>-1) {
      return 'images/zfb.png'
    } 
    if (String(name).indexOf('网银')>-1 || name =='4') {
      return 'images/yl.png'
    }  
    if (String(name).indexOf('QQ')>-1 || name =='3') {
      return 'images/qq.png'
    }
    return 'images/yl.png'
  }

  var allqcodeDict = {};

  var popAlert =function(c,t) {
    if (typeof window.top.fsevenAlert !='undefined') {
      window.top.fsevenAlert(c,t)  
    }else {
      alert(c);
    }
  }

  // 在线充值渠道切换事件
  var getThirdNow = function(a,cls,banks) {
    var allbks= ['<option value="" selected="selected">请选择银行</option>'];
    var thisrel = a.attr('rel');
    var thiscode = a.attr('code');
    $('#thirdlist-box .thirdlist'+cls+'-channel li').removeClass('on');
    a.addClass('on');
    $('#thirdlist-box .labeltxtMin').html(a.attr('min'));
    $('#thirdlist-box .labeltxtMax').html(a.attr('max'));
    //console.log(banks[thiscode]);
    if (typeof banks[thiscode] !='undefined') {
      if (banks[thiscode].length>0) {
        $('#thirdlist-box .havebank').show();
      }else {
        //console.log(cls,'getThirdNowgetThirdNow');
        (cls=='' ? $('#thirdlist-box .havebank').hide() : !0);
        (cls=='-quick' ? $('#thirdlist-box .havebank').hide() : !0);
      }
    }else {
      //console.log('ssssss',cls);
      (cls=='' ? $('#thirdlist-box .havebank').hide() : !0);
    }
    for (i = 0; i < banks[thisrel].length; i++) {
      allbks.push('<option value="'+banks[thisrel][i].code+'">'+bkcode[String(banks[thisrel][i].code).toUpperCase()]+'</option>')
    }
    $('#thirdlist-bank').html(allbks.join(''));
    //console.log(banks[thiscode],thiscode);  
  }

  var getScanNow = function(a,cls) {
    var thisrel = a.attr('rel');
    var thiscode = a.attr('code');
    $('#scan-box .scan-channel li').removeClass('on');
    a.addClass('on');
    $('#scan-box .labeltxtMin').html(a.attr('min'));
    $('#scan-box .labeltxtMax').html(a.attr('max'));
    
  }

  //加减金额辅助
  $('#thirdlist-box .addnumber a').click(function () {
    var addNum = ($(this).attr('vel') - 0) * 1000;
    var vla = ($('#accoumtkeves-blank').val() - 0 ) * 1000;
    var addnum = 0;
    if (!Number(vla)||vla == 0) vla = 0;
    addnum = (addNum + vla) / 1000;
    $('#accoumtkeves-blank').val(addnum);
  });
  $('#scan-box .addnumber a').click(function () {
    var addNum = ($(this).attr('vel') - 0) * 1000;
    var vla = ($('#scan-blank').val() - 0 ) * 1000;
    var addnum = 0;
    if (!Number(vla)||vla == 0) vla = 0;
    addnum = (addNum + vla) / 1000;
    $('#scan-blank').val(addnum);
  });

  //切换在线充值和快速充值
  $('.likethird').off('click').on('click',function() {
    $('.likethird.on,.scanmethod').removeClass('on');
    $(this).addClass('on');
    $('#thirdlist-box').show();
    $('#scan-box').hide();
    if ($(this).attr('rel')=='normal') {
      $('#thirdlist-box .thirdlist-quick-channel').hide();
      $('#thirdlist-box .thirdlist-channel').show();
      $('#accoumtkeves-blank').show();$('#mychg').hide();
      $('#thirdlist-box .addnumber').show();
      getThirdNow($('#thirdlist-box .thirdlist-channel li').first(),'',allbanks);
    }
    if ($(this).attr('rel')=='quick') {
      $('#thirdlist-box .thirdlist-channel').hide();
      $('#thirdlist-box .thirdlist-quick-channel').show();
      $('#accoumtkeves-blank').hide();$('#mychg').show();
      $('#thirdlist-box .addnumber').hide();
      getThirdNow($('#thirdlist-box .thirdlist-quick-channel li').first(),'-quick',allbanks); 
    }
  });

  //扫码
  $('.scanmethod').off('click').on('click',function() {
    $('.likethird.on').removeClass('on');
    $(this).addClass('on');
    $('#thirdlist-box').hide();
    $('#scan-box').show();
    //getScanNow($('#scan-box .scan-channel li').first(),'');
  });
  //console.log(QueryString.typ,'QueryString.typQueryString.typ');
  if (typeof QueryString.typ !='undefined') {
    //console.log(QueryString.typ=='1');
    if (QueryString.typ=='1') {
      $('.likethird.on').removeClass('on');
      $('.scanmethod').addClass('on');
      $('#thirdlist-box').hide();
      $('#scan-box').show();
      //console.log('getScanNow');
      getScanNow($('#scan-box .scan-channel li').first(),'');
    }  
  }

  Api.getCommon('reqAllMethod', {}, function(all) {
    if (!all.data.rechargeConfig.isOpen) {
      $('.paytypeTabs').hide();
      $('#iframedeposit > h3').html(all.data.rechargeConfig.serviceMsg)
			return;
		}
    var allthridList = all.data.thridList;
    var qrcodeList = all.data.qrCodeList;
		var transferList = all.data.transferList;
    var thisYHKItem,thisWQItem,thisQQItem,thisAlipayItem,thisWechatItem,thisYHKItems;
    var getScanName = function(type) {
      if (type=='4') {
        return '手机银行'  
      }
      if (type=='2') {
        return '微信扫码'  
      }
      if (type=='3') {
        return 'QQ扫码'  
      }
      return '手机银行'
    }

    var godirect = function(i,a) {
      if (parseInt(i,10)<1 || String(a[i].name).indexOf('网银')>-1) {
       return ['<a class="btn hand btn-primary golink" rel="',i,'" code="',a[i].code,'" href="/static/h5/0.html?id=',a[i].code,'">充值</a>'].join('');
      }
      return ['<a class="btn hand btn-primary nowdeposit" rel="',i,'" code="',a[i].code,'" max="',a[i].maxUnitRecharge,'" min="',a[i].minUnitRecharge,'" data-toggle="modal" data-position="100px" data-target="#letdeposit">充值</a>'].join('');
    }
    if (qrcodeList != undefined && qrcodeList.length != 0) {
      $.each(qrcodeList, function(i, val) {
        allqcodeDict['qr_'+val.id] = val.fileByte;
        allscan.push([
          '<li rel="',val.id,'" typ="',val.codeType,'" code="',val.code,'" min="',val.minUnitRecharge,'" max="',val.maxUnitRecharge,'">',
            '<label>',
              '<img src="',gettypLogo(val.codeType),'" width="auto" height="48"><span>',getScanName(val.codeType),
              '</span><div class="redius"><div></div></div>',
            '</label>',
          '</li>'
        ].join(''));
      });
    }
    for (i = 0; i < allthridList.length; i++) {
      allbanks[allthridList[i].code] = allthridList[i].banklist;
      if (allthridList[i].phoneStatus=='0') {
        if (!allthridList[i].aliPayH5) {
          allthird.push([
            '<li rel="',allthridList[i].code,'" code="',allthridList[i].code,'" min="',allthridList[i].minUnitRecharge,'" max="',allthridList[i].maxUnitRecharge,'">',
              '<label>',
                '<img src="',gettypLogo(allthridList[i].name),'" width="auto" height="48"><span>',allthridList[i].name,
                '</span><div class="redius"><div></div></div>',
              '</label>',
            '</li>'
          ].join(''));  
        }
        if (allthridList[i].aliPayH5) {
          allquicks.push([
            '<li rel="',allthridList[i].code,'" code="',allthridList[i].code,'" min="',allthridList[i].minUnitRecharge,'" max="',allthridList[i].maxUnitRecharge,'">',
              '<label>',
                '<img src="',gettypLogo(allthridList[i].name),'" width="auto" height="48"><span>',allthridList[i].name,
                '</span><div class="redius"><div></div></div>',
              '</label>',
            '</li>'
          ].join(''));
        }
      }
    }
    if (transferList != undefined && transferList.length != 0) {
      /*$('.resolutt [data-field="bankname"]').html(transferList[0].bankName);
      $('.resolutt [data-field="cardNum"]').html(transferList[0].cardId);
      $('.resolutt [data-field="cardName"]').html(transferList[0].cardName);
			thisAlipayItem = $('<label pid='+transferList[0].id+' max='+transferList[0].maxUnitRecharge+' min='+transferList[0].minUnitRecharge+'><img src="/static/v3/images/img/zfb.png" /><input name="payType" rel="0" type="radio">支付宝银行<div class="redius"><div></div></div></label>');
      thisWechatItem = $('<label  pid='+transferList[0].id+' max='+transferList[0].maxUnitRecharge+' min='+transferList[0].minUnitRecharge+'><img src="/static/v3/images/img/wxq.png" /><input name="payType" rel="1" type="radio">微信银行<div class="redius"><div></div></div></label>');
      thisYHKItems = $('<label pid='+transferList[0].id+' max='+transferList[0].maxUnitRecharge+' min='+transferList[0].minUnitRecharge+'><img src="/static/v3/images/img/yhks.png" /><input name="payType" rel="4" " type="radio">网银转账<div class="redius"><div></div></div></label>');*/
      //payType2.append(thisAlipayItem);
      //payType2.append(thisWechatItem);
      //payType2.append(thisYHKItems);
    }
    //绑定所有在线充值的渠道
    $('#thirdlist-box .thirdlist-channel').html(allthird.join(''));
    $('#thirdlist-box .thirdlist-quick-channel').html(allquicks.join(''));
    $('#scan-box .scan-channel').html(allscan.join(''));

    if (QueryString.typ=='1') {
      //alert('111');
      $('#scan-box .scan-channel li').first().addClass('on');
      getScanNow($('#scan-box .scan-channel li').first(),'');  
    }
    if (allquicks.length==0) {
      $('.likethird[rel="quick"]').hide();
    }else {
      $('.likethird[rel="quick"]').show();
    }
    //$('#thirdlist-box .thirdlist-channel li').first().addClass('on');
    
    
    $('#thirdlist-box .thirdlist-channel').off('click').on('click','li',function() {
      getThirdNow($(this),'',allbanks);  
    });
    $('#scan-box .scan-channel').off('click').on('click','li',function() {
      getScanNow($(this),'');  
    });
    getThirdNow($('#thirdlist-box .thirdlist-channel li').first(),'',allbanks);
    //getThirdNow($('#thirdlist-box .thirdlist-quick-channel li').first(),'-quick',allbanks); 


    $('#thirdlist_quick').html(allquicks.join(''));
    location.hash = $('body').height();
    //
    
    $('#thirdlist').off('click').on('click','.nowdeposit',function() {
      var allbks= [];
      var thisrel = $(this).attr('rel');
      var thiscode = $(this).attr('code');
      $('#thirdlist_quick .btnon').removeClass('btnon');
      $(this).addClass('btnon');
      //console.log(allbanks[thisrel],thisrel);
      for (i = 0; i < allbanks[thisrel].length; i++) {
        allbks.push('<li rel="'+allbanks[thisrel][i].code+'" num="'+allbanks[thisrel][i].bankId+'">'+bkcode[String(allbanks[thisrel][i].code).toUpperCase()]+'</li>')
      }
      $('#letdeposit .banks ul').html(allbks.join(''));
      $('#letdeposit .banks ul li').eq(0).addClass('on');
      $('#letdeposit .surego').attr('code',thiscode);
      $('#letdeposit #amnumber').show();$('#letdeposit #mychg').hide();
      $('#letdeposit .banks ul').off('click').on('click','li',function() {
        $('#letdeposit .banks ul li.on').removeClass('on');
        $(this).addClass('on');
      });
    });

    $('#thirdlist_quick').off('click').on('click','.nowdeposit',function() {
      var allbks= [];
      var thisrel = $(this).attr('rel');
      var thiscode = $(this).attr('code');
      $('#thirdlist .btnon').removeClass('btnon');
      $(this).addClass('btnon');
      console.log(allbanks[thisrel],thisrel);
      for (i = 0; i < allbanks[thisrel].length; i++) {
        allbks.push('<li rel="'+allbanks[thisrel][i].code+'" num="'+allbanks[thisrel][i].bankId+'">'+bkcode[String(allbanks[thisrel][i].code).toUpperCase()]+'</li>')
      }
      $('#letdeposit .banks ul').html('');

      $('#letdeposit #amnumber').hide();$('#letdeposit #mychg').show();
      $('#letdeposit .surego').attr('code',thiscode);
    });

    //复制订单号
    var clipboard = new Clipboard('.cancopy');
    clipboard.on('success', function (e) {
        //console.trace();
        //console.info('Action:', e.action);
        //console.info('Text:', e.text);
        //console.info('Trigger:', e.trigger);
        e.clearSelection();console.log(e.text);
        popAlert('复制成功！','提示：');
    });

    //去充值
    $('#submitplyt-blank1').off('click').on('click',function() {
      //window.top.fsevenAlert('aaa','提示：');
      var cls= "";
      if ($('.likethird[rel="quick"]').hasClass('on')) {
        cls= "-quick";   
      }
      var ps = {
        'pid':$('.thirdlist'+cls+'-channel li.on').attr('code'),
        'bankco':$('#thirdlist-bank').val(),
        'amount':$('#accoumtkeves-blank').val()
      };
      Api.getCommon('goThirdMethod',ps,function(res) {
        console.log(res);
        if (res.code=='0') {
          $('#thirdlist-box .third-second').show();$('#submitplyt-blank1').hide();
          $('#third-moneyreview').html('¥'+res.data.amount);
          $('#third-oidreview').attr('data-clipboard-text', res.data.billno).html(res.data.billno);
          $('#third-oidreview-btn').attr('data-clipboard-text', res.data.billno);
          $('#depositform').attr('action',res.data.link);
          $('#depositform input[name="text"]').val(res.data.text);
          //popAlert(res.message)  
        }else {
          $('#thirdlist-box .third-second').hide();
          popAlert(res.message);
          return false;
        }
        //$('#depositform').attr('action',res.data.link);
        //$('#depositform [name="text"]').val(res.data.text);
        //$('#depositform').submit();
      },'POST'); 
    });

    $('#submit-scan').off('click').on('click',function() {
      var ps = {
        'qrid':$('.scan-channel li.on').attr('rel'),
        'payWay':$('.scan-channel li.on').attr('typ'),
        'amount':$('#scan-blank').val()
      };
      //console.log(allqcodeDict['qr_'+$('.scan-channel li.on').attr('rel')]);
      $('#scan-box #scan-ercode').attr('src','data:image/gif;base64,'+allqcodeDict['qr_'+$('.scan-channel li.on').attr('rel')]);
      Api.getCommon('goTransferPay',ps,function(res) {
        console.log(res);
        if (res.code=='0') {
          $('#scan-box .scan-second').show();$('#submit-scan').hide();
          $('#scan-point').html('¥'+res.data.amount);
          $('#scan-billno').attr('data-clipboard-text', res.data.billno).html(res.data.billno);
          $('#scan-billno-btn').attr('data-clipboard-text', res.data.billno);
          $('#scan-point-btn').attr('data-clipboard-text', res.data.amount);
          $('#depositform').attr('action',res.data.link);
          $('#depositform input[name="text"]').val(res.data.text);
          //popAlert(res.message)  
        }else {
          $('#scan-box .scan-second').hide();
          popAlert(res.message);
          return false;
        }
        //$('#depositform').attr('action',res.data.link);
        //$('#depositform [name="text"]').val(res.data.text);
        //$('#depositform').submit();
      },'POST'); 
    });

    $('#third-submit').off('click').on('click',function() {
      $('#depositform').submit();  
    });

    $('#letdeposit .surego').off('click').on('click',function() {
      var ps = {
        'pid':$('#letdeposit .surego').attr('code'),
        'bankco':$('#letdeposit .banks ul li.on').attr('rel'),
        'amount':$('#letdeposit #amnumber').val()
      };
      var lmitmax = parseInt($('#thirdlist .btnon').attr('max'),10);
      var lmitmin = parseInt($('#thirdlist .btnon').attr('min'),10);
      var nowmoney = parseInt($('#letdeposit #amnumber').val(),10);
      console.log(nowmoney,lmitmax,lmitmin,'ppppppp');
      if ($('#letdeposit #mychg:visible').size()>0) {
        nowmoney = parseInt($('#letdeposit #mychg').val(),10);
        ps['amount'] = nowmoney;
      }

      if (nowmoney>lmitmax || nowmoney<lmitmin) {
        $('#letdeposit .amount_error').show();
        return false;
      }else {
        $('#letdeposit .amount_error').hide();
      }
      Api.getCommon('goThirdMethod',ps,function(res) {
        $('#depositform').attr('action',res.data.link);
        $('#depositform [name="text"]').val(res.data.text);
        $('#depositform').submit();
      },'POST');
    });
    thisWQItem!=null && thisWQItem.find('input[type="radio"]').unbind('click').click(function(){
      var qrsrc = 'qr_' + $(this).parent().attr('dataId');
      $('.ercodeImg img.fl').attr('src','data:image/gif;base64,'+allqcodeDict[qrsrc]);
      $('.section .labeltxtMin').html(($(this).parent().attr('min')));
      $('.section .labeltxtMax').html(($(this).parent().attr('max')));
      $('.ercodes .firsttxt').html('第一步：打开微信，扫描下方二维码，<span style="color:#ff6977;">并在微信“添加留言”备注会员账号</span>');
      $('.ercodes .secondtxt').html('第二步：<span style="color:#ff6977;">支付成功后，填写您的转帐资料，然后提交（金额后面加零头,到账更快,如100.2元）</span>');
      $(this).parent().addClass('active').siblings().removeClass('active');

    });
    thisQQItem!=null && thisQQItem.find('input[type="radio"]').unbind('click').click(function(){
      var qrsrc = 'qr_' + $(this).parent().attr('dataId');
      $('.ercodeImg img.fl').attr('src','data:image/gif;base64,'+allqcodeDict[qrsrc]);
      $('.section .labeltxtMin').html(($(this).parent().attr('min')));
      $('.section .labeltxtMax').html(($(this).parent().attr('max')));
      $('.ercodes .firsttxt').html('第一步：打开【QQ钱包】，扫描下方二维码 ,<span style="color:#ff6977;"> 打开【QQ钱包】，扫描下方二维码</span>');
      $('.ercodes .secondtxt').html('第二步：<span style="color:#ff6977;">支付成功后，填写您的转帐资料，然后提交（金额后面加零头,到账更快,如100.2元）</span>');
      $(this).parent().addClass('active').siblings().removeClass('active');

    });
    thisYHKItem!=null && thisYHKItem.find('input[type="radio"]').unbind('click').click(function(){
      var qrsrc = 'qr_' + $(this).parent().attr('dataId');
      $('.ercodeImg img.fl').attr('src','data:image/gif;base64,'+allqcodeDict[qrsrc]);
      $('.section .labeltxtMin').html(($(this).parent().attr('min')));
      $('.section .labeltxtMax').html(($(this).parent().attr('max')));
      $('.ercodes .firsttxt').html('第一步：打开【手机银行】或【云闪付APP】，扫描下方二维码');
      $('.ercodes .secondtxt').html('第二步：支付成功后，填写您的转帐资料，然后提交（<span style="color:#ff6977;">金额后面加零头,到账更快,如100.2元</span>）');
      $(this).parent().addClass('active').siblings().removeClass('active');

    });

    thisAlipayItem!=null && thisAlipayItem.find('input[type="radio"]').unbind('click').click(function(){
      $('.section .labeltxtMin').html(($(this).parent().attr('min')));
      $('.section .labeltxtMax').html(($(this).parent().attr('max')));
      var qrsrc = 'qr_' + $(this).parent().attr('dataId');
      $('.ercodes .firsttxt').html('第一步：打开【手机银行】或【云闪付APP】，扫描下方二维码');
      $('.ercodes .secondtxt').html('第二步：支付成功后，填写您的转帐资料，然后提交（<span style="color:#ff6977;">金额后面加零头,到账更快,如100.2元</span>）');
      $(this).parent().addClass('active').siblings().removeClass('active');
    });
    thisWechatItem!=null && thisWechatItem.find('input[type="radio"]').unbind('click').click(function(){
      $('.section .labeltxtMin').html(($(this).parent().attr('min')));
      $('.section .labeltxtMax').html(($(this).parent().attr('max')));
      var qrsrc = 'qr_' + $(this).parent().attr('dataId');

      $('.ercodes .firsttxt').html('第一步：打开【手机银行】或【云闪付APP】，扫描下方二维码');
      $('.ercodes .secondtxt').html('第二步：支付成功后，填写您的转帐资料，然后提交（<span style="color:#ff6977;">金额后面加零头,到账更快,如100.2元</span>）');
      $(this).parent().addClass('active').siblings().removeClass('active');

    });
    thisYHKItems!=null && thisYHKItems.find('input[type="radio"]').unbind('click').click(function(){
      $('.section .labeltxtMin').html(($(this).parent().attr('min')));
      $('.section .labeltxtMax').html(($(this).parent().attr('max')));
      var qrsrc = 'qr_' + $(this).parent().attr('dataId');

      $('.ercodes .firsttxt').html('第一步：打开【手机银行】或【云闪付APP】，扫描下方二维码');
      $('.ercodes .secondtxt').html('第二步：支付成功后，填写您的转帐资料，然后提交（<span style="color:#ff6977;">金额后面加零头,到账更快,如100.2元</span>）');
      $(this).parent().addClass('active').siblings().removeClass('active');

    });
  });

  $('#letdeposit').on('shown.zui.modal', function() {
    var lmitmax = parseInt($('#thirdlist .btnon').attr('max'),10);
    var lmitmin = parseInt($('#thirdlist .btnon').attr('min'),10);
    console.log(lmitmax,lmitmin,'lmitmaxlmitmax');
    $('#letdeposit .amount_error').hide();
    $('#letdeposit .amount_error em:eq(0)').html(lmitmax);
    $('#letdeposit .amount_error em:eq(1)').html(lmitmin);
    if ($('#thirdlist_quick .btnon').attr('code')=='205') {
      $('#letdeposit .surego').html('进入支付宝付款');
    }else {
      $('#letdeposit .surego').html('进入第三方支付付款');
    }
  });
});
