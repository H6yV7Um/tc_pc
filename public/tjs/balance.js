//余额切换事件
$(function(){
  function changeIdx(clz){
    if(!clz) {
      if($.cookie('MONEY_CLZ'))   {
        clz = $.cookie('MONEY_CLZ');
      }else{
         clz='.'+$('.moneylist .balances div').eq(0).attr('class');	
      }
    } 
    console.log(clz);
    $('.moneylist .outter').empty().append($('.moneylist .balances').find(clz).clone());
    $('.moneylist .inner').empty().append($('.moneylist .balances').find(clz).siblings().clone());
    var expires = new Date(moment().startOf('year').add(1, 'years'));
    $.cookie('MONEY_CLZ', clz, {expires: expires, path: '/'});
  }
  changeIdx();
  $('.moneylist .inner').delegate("div","click",function(){
    changeIdx('.'+$(this).attr('class'));
  });
});