
$(function() { 
  var allthird = [];allbanks={};
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
  
  Api.getCommon('reqAllMethod', {}, function(all) {
    var codeid = QueryString.id;
    var allthridList = all.data.thridList;
    var godirect = function(i,a) {
      return ['<a class="btn hand btn-primary nowdeposit" rel="',i,'" code="',a[i].code,'" data-toggle="modal" data-position="100px" data-target="#letdeposit">充值</a>'].join('');  
    }

    for (i = 0; i < allthridList.length; i++) {
      allbanks[allthridList[i].code] = allthridList[i].banklist;
    }
    console.log(allbanks);
    $('#thirdlist').html(allthird.join(''));
    location.hash = $('body').height();
    //$('#thirdlist').off('click').on('click','.nowdeposit',function() {
    var allbks= [];
    var thisrel = codeid;
    var thiscode = codeid;
    //console.log(allbanks[thisrel]);
    for (i = 0; i < allbanks[thisrel].length; i++) {
      allbks.push('<li rel="'+allbanks[thisrel][i].code+'" num="'+allbanks[thisrel][i].bankId+'">'+bkcode[String(allbanks[thisrel][i].code).toUpperCase()]+'</li>')  
    }
    $('#iframedeposit .nowdeposit').removeClass('choosed');
    //$(this).addClass('choosed');
    $('#iframedeposit .banks ul').html(allbks.join(''));
    $('#iframedeposit .banks ul li').eq(0).addClass('on');
    $('#iframedeposit .surego').attr('code',thiscode);
    $('#iframedeposit .banks ul').off('click').on('click','li',function() {
      $('#iframedeposit .banks ul li.on').removeClass('on');
      $(this).addClass('on');
    });
    //});

    $('#iframedeposit .surego').off('click').on('click',function() {
      var ps = {
        'pid':codeid,
        'bankco':$('#iframedeposit .banks ul li.on').attr('rel'),
        'amount':$('#iframedeposit #amnumber').val()
      };
      console.log(ps,'ppppppp');
      
      Api.getCommon('goThirdMethod',ps,function(res) {
        $('#depositform').attr('action',res.data.link);
        $('#depositform [name="text"]').val(res.data.text);
        $('#depositform').submit();
      },'POST');
    });
  });

});

