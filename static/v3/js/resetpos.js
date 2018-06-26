var pospop = function(a) {
  //console.log(a,'pospoppospoppospop');
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
  ptitle.height($('body .page-content').height());
}