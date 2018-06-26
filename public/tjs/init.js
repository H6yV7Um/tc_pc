require(['/public/tjs/ssc.js'], function (Lottery) {
  new Lottery({
      lotteryId: lid
  });
  if (typeof refreshigh !='undefined') {
    refreshigh();  
  }
});