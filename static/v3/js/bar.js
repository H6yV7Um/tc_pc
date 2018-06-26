//显示时间插件 
function showLocale(objD) {
  var str, colorhead, colorfoot;
  var yy = objD.getYear();
  if (yy < 1900) yy = yy + 1900;
  var MM = objD.getMonth() + 1;
  if (MM < 10) MM = '0' + MM;
  var dd = objD.getDate();
  if (dd < 10) dd = '0' + dd;
  var hh = objD.getHours();
  if (hh < 10) hh = '0' + hh;
  var mm = objD.getMinutes();
  if (mm < 10) mm = '0' + mm;
  var ss = objD.getSeconds();
  if (ss < 10) ss = '0' + ss;
  var ww = objD.getDay();
  if (ww == 0) colorhead = "<font>";
  if (ww > 0 && ww < 6) colorhead = "<font>";
  if (ww == 6) colorhead = "<font>";
  if (ww == 0) ww = "星期日";
  if (ww == 1) ww = "星期一";
  if (ww == 2) ww = "星期二";
  if (ww == 3) ww = "星期三";
  if (ww == 4) ww = "星期四";
  if (ww == 5) ww = "星期五";
  if (ww == 6) ww = "星期六";
  colorfoot = "</font>"
  //str = colorhead + yy + "年" + MM + "月" + dd + "日" + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
  str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
  return (str);
}
function formatSeconds(value, k) {
  var theTime = parseInt(value); // 秒
  var inTime = parseInt(value);
  var theTime1 = 0; // 分
  var theTime2 = 0; // 小时
  // alert(theTime);
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    // alert(theTime1+"-"+theTime);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
    }
  }
  //console.log(theTime,theTime1,theTime2);
  if (theTime > 0) {
    var result = "00:" + (parseInt(theTime) > 9 ? parseInt(theTime) : ("0" + parseInt(theTime))) + "";
    if (theTime1 > 0) {
      result = "" + (parseInt(theTime) > 9 ? parseInt(theTime) : ("0" + parseInt(theTime))) + "";
      result = "" + (parseInt(theTime1) > 9 ? parseInt(theTime1) : ("0" + parseInt(theTime1))) + ":" + result;
    }
    if (theTime2 > 0) {
      result = "" + (parseInt(theTime2) > 9 ? parseInt(theTime2) : ("0" + parseInt(theTime2))) + ":" + result;
    }

  } else {
    //console.log(inTime,'inTimeinTime');
    if (parseInt(theTime) == 0 && inTime < 60) {
      getLeftSec(k);
    }
    if (parseInt(theTime) < -1 && inTime < 60) {
      //console.log('need freah',typeof getLeftSec);
      getLeftSec(k);
    }
    result = '00:00';
  }

  return {
    'str': result,
    'k': k
  };
}
function tick(a) {
  var today;
  today = new Date();
  document.getElementById("localtime").innerHTML = showLocale(today);
  var allleft = $('.lottery-navs .lt-countdown');
  allleft.each(function(k, el) {
    if (typeof $(el).data('left') != 'undefined') {
      var leftsec = parseInt($(el).data('left'), 10);
      leftsec--;
      var outp = formatSeconds(leftsec, k);
      if (a == 0) {
        $(el).html(outp.str);
        $(el).data('left', leftsec)
      } else {
        if (leftsec < 0) {
          $('.lottery-navs ul').attr('next', k)
        }
        //console.log($('.lottery-navs ul').attr('next'),'next');
        $(el).html(outp.str);
        $(el).data('left', leftsec);
      }
      //console.log(formatSeconds(leftsec));
    }
  });
  window.setTimeout("tick(1)", 1000);
}
tick(0);

//余额切换事件
(function() {
  function changeIdx(clz) {
    if (!clz) {
      if ($.cookie('MONEY_CLZ')) {
        clz = $.cookie('MONEY_CLZ');
      } else {
        clz = '.' + $('.moneylist .balances div').eq(0).attr('class');
      }
    }
    $('.moneylist .outter').empty().append($('.moneylist .balances').find(clz).clone());
    $('.moneylist .inner').empty().append($('.moneylist .balances').find(clz).siblings().clone());
    var expires = new Date(moment().startOf('year').add(1, 'years'));
    $.cookie('MONEY_CLZ', clz, {
      expires: expires,
      path: '/'
    });
  }
  if (typeof $.cookie !== 'undefined') {
    changeIdx();
  }
  if ($('.moneylist .outter').html() == '') {
    $('.moneylist .outter').empty().append($('.moneylist .balances').find('.lotteryBalance').clone());
  }
  $('.moneylist .inner').delegate("div", "click",
  function() {
    changeIdx('.' + $(this).attr('class'));
  });
})()
//页面级别判断是否登陆,还有ajax级别的
if ($('html').attr('login') === 'true') {
  if (!AppData.isLogin()) {
    var domain = window.location.protocol + '//' + window.location.host;
    window.location.href = domain + '/index.html';
  }
}
//$(document).ready
//bar上各种用户信息的显示
(function() {

  var initTopBar = function() {

    if (!AppData.isLogin()) {
      window.location.href = '/login';
      //$('.a87').show();$('#login-form').show();
      //$('.a86').hide();
      return false;
    } else {
      $('.a86').show();
      //$('.a87').hide();$('#login-form').hide();
    }

    var mainAccount = AppData.getMainAccount();
    var lotteryAccount = AppData.getLotteryAccount();
    var msgCount = AppData.getMsgCount();

    if (mainAccount.accountType == 0) {
      $('[data-visible="proxy"]').hide();
    } else {
      $('[data-visible="proxy"]').show();
    }

    var els = $('[data-init="topBar"]');

    if (els.length > 0) {
      var greeting = function() {
        var hour = moment().hour();
        if (hour >= 6 && hour < 11) {
          return '早上好';
        }
        if (hour >= 11 && hour < 13) {
          return '中午好';
        }
        if (hour >= 13 && hour < 19) {
          return '下午好';
        }
        if (hour >= 19 || hour < 6) {
          return '晚上好';
        }
      }
      els.find('[data-field="greeting"]').html(greeting());
      els.find('[data-field="nickname"]').html(mainAccount.nickname);
      els.find('[data-field="username"]').html(mainAccount.username);
      $('.newheader [data-field="username"]').html(mainAccount.username);
      els.find('[data-field="lotteryBalance"]').html(lotteryAccount.availableBalance.toFixed(3));
      els.find('[data-field="baccaratBalance"]').html('0.000');
      els.find('[data-field="msgCount"]').html(msgCount);
    }
  }

  initTopBar();

  $('[data-command="logout"]').click(function() {
    MainCtrl.logout({
      success: function() {
        //window.location.href = "/yx/home";
        window.location.href = "/";
      }
    });
  });

})();

var setCookie = function(name, val) {
  var expires = new Date(moment().startOf('year').add(1, 'years'));
  $.cookie(name, val, {
    expires: expires,
    path: '/'
  });
}

var initBar = function() {
  if (typeof $.cookie('MONEY-SHOWN') != 'undefined' && $.cookie('MONEY-SHOWN') == 'OFF') {
    $('.moneylist .data').hide();
    $('.manual_hide').html('显示');
    $('.manual_hide').addClass('justhide');
  }
  $('.manual_hide').off('click').on('click',
  function() {
    if (!$(this).hasClass('justhide')) {
      setCookie('MONEY-SHOWN', 'OFF');
      $(this).html('显示');
      $(this).addClass('justhide');
      $('.moneylist .data').hide();
    } else {
      setCookie('MONEY-SHOWN', 'ON');
      $(this).html('隐藏');
      $(this).removeClass('justhide');
      $('.moneylist .data').show();
    }
  });
  //console.log($('.audio-sw'));
  if (typeof $.cookie !== 'undefined') {
    if ($.cookie('WIN-VOICE') && $.cookie('WIN-VOICE') === 'OFF') {
      $('.set-voice').find('.win').addClass('audio-off');
      $('.set-voice').find('.win').removeClass('audio-on');
    } else {
      $('.set-voice').find('.win').addClass('audio-on');
      $('.set-voice').find('.win').removeClass('audio-off');
    }
    $('.set-voice').find('.win').click(function() {
      if ($('.set-voice').find('.win').hasClass('audio-on')) {
        $('.set-voice').find('.win').addClass('audio-off');
        $('.set-voice').find('.win').removeClass('audio-on');
        setCookie('WIN-VOICE', 'OFF');
        $('audio#lottery-open').remove();
      } else {
        $('.set-voice').find('.win').addClass('audio-on');
        $('.set-voice').find('.win').removeClass('audio-off');

        setCookie('WIN-VOICE', 'ON');

      };
    });
  }
  $('.win-play').click(function() {
    if ($('.set-voice').find('.win').hasClass('audio-on')) {
      var lotteryOpen = document.getElementById('lottery-open');
      if (lotteryOpen) {
        lotteryOpen.play();
        return;
      }
      var audio = $('<audio id="lottery-open" autoplay="autoplay">');
      audio.attr('src', '/audio/lottery-open.mp3').hide();
      $('body').append(audio);
    }
  })
  if (typeof $.cookie !== 'undefined') {
    if ($.cookie('MSG-VOICE') && $.cookie('MSG-VOICE') === 'OFF') {
      $('.set-voice').find('.msg').addClass('audio-off');
      $('.set-voice').find('.msg').removeClass('audio-on');
    } else {
      $('.set-voice').find('.msg').addClass('audio-on');
      $('.set-voice').find('.msg').removeClass('audio-off');
    }
  }
  $('.set-voice').find('.msg').click(function() {
    if ($('.set-voice').find('.msg').hasClass('audio-on')) {
      $('.set-voice').find('.msg').addClass('audio-off');
      $('.set-voice').find('.msg').removeClass('audio-on');
      setCookie('MSG-VOICE', 'OFF');
      $('audio#sys-message').remove();
    } else {
      $('.set-voice').find('.msg').addClass('audio-on');
      $('.set-voice').find('.msg').removeClass('audio-off');
      setCookie('MSG-VOICE', 'ON');
    };
  });

  $('.msg-play').click(function() {
    if ($('.set-voice').find('.msg').hasClass('audio-on')) {
      var sysMsg = document.getElementById('sys-message');
      if (sysMsg) {
        sysMsg.play();
        return;
      }
      var audio = $('<audio id="sys-message" autoplay="autoplay">');
      audio.attr('src', '/audio/message.mp3').hide();
      $('body').append(audio);
    }
  })

  if (typeof $.cookie !== 'undefined') {

    if ($.cookie('CD-VOICE') && $.cookie('CD-VOICE') === 'OFF') {
      $('.set-voice').find('.cd').addClass('audio-off');
      $('.set-voice').find('.cd').removeClass('audio-on');
    } else {
      $('.set-voice').find('.cd').addClass('audio-on');
      $('.set-voice').find('.cd').removeClass('audio-off');
    }

    $('.set-voice').find('.cd').click(function() {
      var lotteryCd = document.getElementById('lottery-cd');
      var lotteryCd2 = document.getElementById('lotteryCd');
      if ($('.set-voice').find('.cd').hasClass('audio-on')) {
        $('.set-voice').find('.cd').addClass('audio-off');
        $('.set-voice').find('.cd').removeClass('audio-on');
        setCookie('CD-VOICE', 'OFF');
        if (lotteryCd) {
          lotteryCd.pause();
        }
        if (lotteryCd2) {
          lotteryCd2.pause();
        }
      } else {
        $('.set-voice').find('.cd').addClass('audio-on');
        $('.set-voice').find('.cd').removeClass('audio-off');
        setCookie('CD-VOICE', 'ON');
        if (lotteryCd) {
          lotteryCd.play();
        }
      };
    });

  }

  $('.cd-play').click(function() {
    if ($('.set-voice').find('.cd').hasClass('audio-on')) {
      var lotteryCd = document.getElementById('lotteryCd');
      if (lotteryCd) {
        lotteryCd.play();
      } else {
        var audio = $('<audio id="lotteryCd" autoplay="autoplay">');
        audio.attr('src', '/audio/cd.mp3').hide();
        $('body').append(audio);
      }

      setTimeout(function() {
        $('audio#lotteryCd').remove();
      },
      3000)

    }
  });  
}