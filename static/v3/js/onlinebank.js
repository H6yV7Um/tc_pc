var timerOb;

$(function() { 
  var allthird = [];allbanks={};
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
  var nick = '';
  var TinyCounter = TinyCounter || {
    init:function(el){
      var countDownDate = new Date();
      countDownDate.setMinutes(countDownDate.getMinutes() + 30);
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        el.html((days>0 ? (days + "d ") : '') + (hours>0 ? (hours + "h ") : '')
        + minutes + ":" + seconds + "");
        if (distance < 0) {
          clearInterval(x);
          //document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
      timerOb = x;
    }
  };
  
  Api.getCommon('getInitPage', {}, function(getnick) {
    nick = getnick.data.main.nickname;
    console.log(nick,'nicknicknick');
  });

  Api.getCommon('reqAllMethod', {}, function(all) {
    console.log(all);
    $('#letdeposit_t .timecounter').hide();
    var transferList = all.data.transferList;
    for (i = 0; i < transferList.length; i++) {
      allbanks[i] = transferList[i];
      allthird.push([
        '<li>',
          '<div class="full clearfix">',
            '<div class="lf">',transferList[i].bankName,'</div>',
            '<div class="rf"><a class="btn hand btn-primary nowdeposit" max="',transferList[i].maxUnitRecharge,'" min="',transferList[i].minUnitRecharge,'" rel="',i,'" code="',transferList[i].id,'" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-position="100px" data-target="#letdeposit_t">转账</a></div>',
          '</div>',
          '<div class="line-tip">最大金额：',transferList[i].maxUnitRecharge,'，最小金额：',transferList[i].minUnitRecharge,'</div>',
        '</li>' 
      ].join(''));   
    }
    $('#thirdlist').html(allthird.join(''));
    $('#thirdlist').off('click').on('click','.nowdeposit',function() {
      var allbks= [];
      var thisrel = $(this).attr('rel');
      var thiscode = $(this).attr('code');
      $('#thirdlist .btnon').removeClass('btnon');
      $(this).addClass('btnon');
      
      $('#letdeposit_t .surenext').show().attr('code',thiscode);
      $('#letdeposit_t .nextfinish').hide();
      //$('#letdeposit_t .timecounter').html('');
      
      $('#letdeposit_t #amnumber').removeAttr('disabled');
      //console.log(allbanks[thisrel],'allbanksallbanksallbanks');
      $('#letdeposit_t .bankinfo .bname').html(allbanks[thisrel].bankName);
      $('#letdeposit_t .bankinfo .bcardno').html(allbanks[thisrel].cardId);
      $('#letdeposit_t .cancopy[rel="bcardno"]').attr('data-clipboard-text',allbanks[thisrel].cardId);
      $('#letdeposit_t .bankinfo .bcard').html(allbanks[thisrel].cardName);
      $('#letdeposit_t .cancopy[rel="bcard"]').attr('data-clipboard-text',allbanks[thisrel].cardName);
    });

    $('#letdeposit_t .surenext').off('click').on('click',function() {
      
      var lmitmax = parseInt($('#thirdlist .btnon').attr('max'),10);
      var lmitmin = parseInt($('#thirdlist .btnon').attr('min'),10);
      var nowmoney = parseInt($('#letdeposit_t #amnumber').val(),10);
      
      $('#letdeposit_t #fuyin').val($('#letdeposit_t #alipayname').val()+'：'+nick);
      //console.log($('#letdeposit_t #fuyin').val(),$('#letdeposit_t #alipayname').val()+'：'+nick);
      $('#letdeposit_t .cancopy[rel="bcardfuyin"]').attr('data-clipboard-text',$('#letdeposit_t #alipayname').val()+'：'+nick);
      var ps = {
        'pid':$('#letdeposit_t .surenext').attr('code'),
        'amount':$('#letdeposit_t #amnumber').val(),
        'fuYan':$('#letdeposit_t #fuyin').val()
      };
      if ($('#letdeposit_t #alipayname').val()=='') {
        $('#letdeposit_t .fuyin_error').css({'color':'#ff0ac8','font-weight':'bold'});
        return false;
      }
      if (nowmoney>lmitmax || nowmoney<lmitmin) {
        $('#letdeposit_t .amount_error').show();
        return false;
      }else {
        $('#letdeposit_t .amount_error').hide();
      }
      
      Api.getCommon('goTransferPay',ps,function(info) {
        console.log(info,'infoinfoinfoinfo');
        var vdata = info.data;
        $('#letdeposit_t .bankinfo .ono').html(vdata.billno);
        $('#letdeposit_t .bankinfo .battach').html(vdata.attach);
        $('#letdeposit_t .bankinfo .bmoney').html(vdata.amount);
        $('#letdeposit_t .cancopy[rel="bmoney"]').attr('data-clipboard-text',vdata.amount);
        $('#letdeposit_t .cancopy[rel="battach"]').attr('data-clipboard-text',vdata.attach);
        $('#letdeposit_t .bankinfo').show();
        $('#letdeposit_t .timecounter').show();
        
        $('#letdeposit_t .surenext').hide();$('#letdeposit_t .nextfinish').show();
        

        
        var clipboard = new Clipboard('#letdeposit_t .cancopy');
        clipboard.on('success', function(e) {
          //console.info('Action:', e.action);
          //console.info('Text:', e.text);
          //console.info('Trigger:', e.trigger);
          e.clearSelection();
          $('#letdeposit_success').modal({backdrop:false});
        });

        clipboard.on('error', function(e) {
          //console.error('Action:', e.action);
          //console.error('Trigger:', e.trigger);
        });
        $('#letdeposit_t #aliline').hide();$('#letdeposit_t #fuyinline').show();
        $('#letdeposit_t #amnumber').attr('disabled','disabled');
        $('#letdeposit_t #alipayname').attr('disabled','disabled');
        TinyCounter.init($('#timeleft'));$('#letdeposit_t .timecounter').show();
      },'POST');
      
      
      /*var ps = {
        'pid':$('#letdeposit .surego').attr('code'),
        'bankco':$('#letdeposit .banks ul li.on').attr('rel'),
        'amount':$('#letdeposit #amnumber').val()
      };
      console.log(ps,'ppppppp');
      
      Api.getCommon('goThirdMethod',ps,function(res) {
        $('#depositform').attr('action',res.data.link);
        $('#depositform [name="text"]').val(res.data.text);
        $('#depositform').submit();
      },'POST');*/
    });

    $('#letdeposit_t').on('shown.zui.modal', function() {
      var lmitmax = parseInt($('#thirdlist .btnon').attr('max'),10);
      var lmitmin = parseInt($('#thirdlist .btnon').attr('min'),10);
      //console.log(lmitmax,'lmitmaxlmitmax');
      $('#letdeposit_t .aliline').hide();$('#letdeposit_t .fuyinline').show();
      $('#letdeposit_t #fuyin').attr('disabled','disabled');
      $('#letdeposit_t #aliline').show();$('#letdeposit_t #fuyinline').hide();
      $('#letdeposit_t #alipayname').val('').removeAttr('disabled');
      $('#letdeposit_t .bankinfo').hide();//$('#letdeposit_t .timecounter').show();
    });
    $('#letdeposit_t').on('hide.zui.modal', function() {
      console.log($('#letdeposit_t .surenext:visible').size(),'hide.zui.modalhide.zui.modal');
      if ($('#letdeposit_t .surenext:visible').size()==0) {
        setTimeout(function() {
          $('#letsubmit_success').modal({backdrop:false});    
        },300)
      }
    });
    $('#letdeposit_t').on('hidden.zui.modal', function() {
      $('#letdeposit_t .bankinfo').hide();$('#letdeposit_t .timecounter').hide();
      clearInterval(timerOb);$('#timeleft').html('30:00');
      //console.log($('#letdeposit_t .surenext:visible').size());
      //if ($('#letdeposit_t .surenext:visible').size()==0) {
      //  $('#letsubmit_success').modal({backdrop:false});  
      //}
    });
  });
});

