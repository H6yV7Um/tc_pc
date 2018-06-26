$(function() {
  var allthird = [],allquicks=[];allbanks={};
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
  var allqcodeDict = {};
  Api.getCommon('reqAllMethod', {}, function(all) {
    if (!all.data.rechargeConfig.isOpen) {
      $('.paytypeTabs').hide();
      $('#iframedeposit > h3').html(all.data.rechargeConfig.serviceMsg)
			return;
		}
    var allthridList = all.data.thridList;
    var qrcodeList = all.data.qrCodeList;
		var transferList = all.data.transferList;
		var payType1 = $('#pay-type1');
		var payType2 = $('#pay-type2');
    var thisYHKItem,thisWQItem,thisQQItem,thisAlipayItem,thisWechatItem,thisYHKItems;
    var godirect = function(i,a) {
      if (parseInt(i,10)<1 || String(a[i].name).indexOf('网银')>-1) {
       return ['<a class="btn hand btn-primary golink" rel="',i,'" h="',a[i].aliPayH5,'" code="',a[i].code,'" href="/static/h5/0.html?id=',a[i].code,'">充值</a>'].join('');
      }
      return ['<a class="btn hand btn-primary nowdeposit" rel="',i,'" h="',a[i].aliPayH5,'" code="',a[i].code,'" max="',a[i].maxUnitRecharge,'" min="',a[i].minUnitRecharge,'" data-toggle="modal" data-position="100px" data-target="#letdeposit">充值</a>'].join('');
    }
    if (qrcodeList != undefined && qrcodeList.length != 0) {
      $.each(qrcodeList, function(i, val) {
        allqcodeDict['qr_'+val.id] = val.fileByte;
        if(val.codeType=='4'){
          thisYHKItem = $('<label max='+val.maxUnitRecharge+' min='+val.minUnitRecharge+' dataId = '+val.id+'><img  src="/static/v3/images/img/yhks.png" /><input name="payType" rel="4" " min="'+val.minUnitRecharge+'" max="'+val.maxUnitRecharge+'" type="radio">手机银行二维码<div class="redius"><div></div></div></label>');
        }
        if (val.codeType=='2') {
          thisWQItem = $('<label max='+val.maxUnitRecharge+' min='+val.minUnitRecharge+' dataId = '+val.id+'><img  src="/static/v3/images/img/wxq.png" /><input name="payType" rel="2" " min="'+val.minUnitRecharge+'" max="'+val.maxUnitRecharge+'" type="radio">微信二维码<div class="redius"><div></div></div></label>');

        }
        if (val.codeType=='3') {
          thisQQItem = $('<label max='+val.maxUnitRecharge+' min='+val.minUnitRecharge+' dataId = '+val.id+'><img src="/static/v3/images/img/qq.png" /><input name="payType" rel="3" " min="'+val.minUnitRecharge+'" max="'+val.maxUnitRecharge+'" type="radio">QQ二维码<div class="redius"><div></div></div></label>');

        }
        payType1.append(thisWQItem);
        payType1.append(thisQQItem);
        payType1.append(thisYHKItem);
      });
    }
    for (i = 0; i < allthridList.length; i++) {
      allbanks[i] = allthridList[i].banklist;
      console.log(allthridList[i].aliPayH5);
      if (allthridList[i].phoneStatus=='0') {
        if (!allthridList[i].aliPayH5) {
          allthird.push([
            '<li>',
              '<div class="full clearfix">',
                '<div class="lf">',allthridList[i].name,'</div>',
                '<div class="rf">',godirect(i,allthridList),'</div>',
              '</div>',
              '<div class="line-tip">最大金额：',allthridList[i].maxUnitRecharge,'，最小金额：',allthridList[i].minUnitRecharge,'</div>',
            '</li>'
          ].join(''));  
        }
        if (allthridList[i].aliPayH5) {
          allquicks.push([
            '<li>',
              '<div class="full clearfix">',
                '<div class="lf">',allthridList[i].name,'</div>',
                '<div class="rf">',godirect(i,allthridList),'</div>',
              '</div>',
              '<div class="line-tip">最大金额：',allthridList[i].maxUnitRecharge,'，最小金额：',allthridList[i].minUnitRecharge,'</div>',
            '</li>'
          ].join(''));
        }
      }
    }
    if (transferList != undefined && transferList.length != 0) {
      $('.resolutt [data-field="bankname"]').html(transferList[0].bankName);
      $('.resolutt [data-field="cardNum"]').html(transferList[0].cardId);
      $('.resolutt [data-field="cardName"]').html(transferList[0].cardName);
			thisAlipayItem = $('<label pid='+transferList[0].id+' max='+transferList[0].maxUnitRecharge+' min='+transferList[0].minUnitRecharge+'><img src="/static/v3/images/img/zfb.png" /><input name="payType" rel="0" type="radio">支付宝银行<div class="redius"><div></div></div></label>');
      thisWechatItem = $('<label  pid='+transferList[0].id+' max='+transferList[0].maxUnitRecharge+' min='+transferList[0].minUnitRecharge+'><img src="/static/v3/images/img/wxq.png" /><input name="payType" rel="1" type="radio">微信银行<div class="redius"><div></div></div></label>');
      thisYHKItems = $('<label pid='+transferList[0].id+' max='+transferList[0].maxUnitRecharge+' min='+transferList[0].minUnitRecharge+'><img src="/static/v3/images/img/yhks.png" /><input name="payType" rel="4" " type="radio">网银转账<div class="redius"><div></div></div></label>');
      payType2.append(thisAlipayItem);
      payType2.append(thisWechatItem);
      payType2.append(thisYHKItems);
    }

    $('#thirdlist').html(allthird.join(''));
    $('#thirdlist_quick').html(allquicks.join(''));
    location.hash = $('body').height();
    $('#thirdlist').off('click').on('click','.nowdeposit',function() {
      var allbks= [];
      var thisrel = $(this).attr('rel');
      var thiscode = $(this).attr('code');
      $('#thirdlist_quick .btnon').removeClass('btnon');
      $(this).addClass('btnon');
      console.log(allbanks[thisrel],thisrel);
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
    if ($('#thirdlist_quick .btnon').attr('h')=='true') {
      $('#letdeposit .surego').html('进入支付宝付款');
    }else {
      $('#letdeposit .surego').html('进入第三方支付付款');
    }
  });
});
