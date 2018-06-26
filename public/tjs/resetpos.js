var quickBetTop = 0;

var pospop = function(a) {
  //console.log(a,'pospoppospoppospop',$('.jBox-wrapper').size());
  quickBetTop = a;
  if ($('.quick-bet .modal-dialog').size()==1) {
    $('.quick-bet .modal-dialog').css('top',175+parseInt(quickBetTop,10));
  }
  
  if ($('.jBox-wrapper').size()==1) {
    var chkid = $('.jBox-wrapper').attr('id');
    var now = $('.jBox-wrapper').position();
    var offset = parseInt(now.top,10)-parseInt(a,10);
    if (typeof chkid !='undefined') {
      if (chkid=='chaseFloat') {
        $('.jBox-wrapper').css('top',a);    
      }  
    }else {
      $('.jBox-wrapper').css('top',a+150)  
    }
    
  }
}

var refreshigh = function() {
  var ptitle = $('lottery .iframebox', window.parent.document);
  //console.log($('body .container').height());
  ptitle.width($('body').width());
  //console.log(ptitle.height());
  if ($('body .container').height()>ptitle.height()) {
    ptitle.height($('body .container').height());  
  }
}

var highdot = function() {
  var allrel = []
  $('.choosetag li').map(function(k,e){
    allrel.push('.'+$(e).attr('rel'))
  });
  //console.log(allrel);
  
  for (i = 0; i < allrel.length; i++) {
    var nowchk = $('.topfive li'+allrel[i]).find('ol').attr('count');
    if ($('.topfive li'+allrel[i]).find('ol').size()>1) {
      nowchk = typeof $('.topfive li'+allrel[i]).find('ol').first().attr('count') !== 'undefined' ? parseInt($('.topfive li'+allrel[i]).find('ol').first().attr('count'),10) : 0;
      nowchk += typeof $('.topfive li'+allrel[i]).find('ol').last().attr('count') !== 'undefined' ? parseInt($('.topfive li'+allrel[i]).find('ol').last().attr('count'),10) : 0;  
    }
    if (typeof nowchk !== 'undefined') {
      if (parseInt(nowchk,10)>0) {
        $('.choosetag li[rel='+allrel[i].replace('.','')+']').addClass('highlight')  
      }else {
        $('.choosetag li[rel='+allrel[i].replace('.','')+']').removeClass('highlight')  
      }
    }
  }
  //var allrels = [".theone", ".thetwo", ".thethree", ".thefour", ".thefive", ".topthree", ".midthree", ".lstthree", ".totallh", ".douniu", ".suoha"];
}

var resethighdot = function() {
  $('.choosetag li.highlight').removeClass('highlight');    
}

$(function() {
  $('.choosetag li').click(function(){
    var reltag = $(this).attr('rel');
    var nowchoose = $(this).parent();
    var nowdiv = $(this).parent().parent().parent();
    nowchoose.find('.active').removeClass('active');
    $(this).addClass('active');
    nowdiv.find('.topfive > li.active').removeClass('active');
    $('.topfive > li.'+reltag).addClass('active');
    if (typeof refreshigh !='undefined') {
      refreshigh();  
    }
  });
})
