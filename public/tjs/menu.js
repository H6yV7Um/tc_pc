function ShowDiv(show_div,bg_div){
  document.getElementById(show_div).style.display='block';
  document.getElementById(bg_div).style.display='block' ;
  var bgdiv = document.getElementById(bg_div);
  bgdiv.style.width = document.body.scrollWidth;
  // document.getElementById(bg_div).style.height =  hh_height;
  $("#"+bg_div).height($(document).height());
};

$(document).ready(function(){
  if( $(".eventtext a").hasClass('current') ) {
		$(".current").parent().removeClass("hide");
		$(".current").parent().parent().find('.small').first().addClass("selected");
		$(".selected .sj_img").removeClass("hide");
		$(".current").parent().parent().find('.img_hide').addClass("hide");
		$(".current").parent().parent().find('.small').first().addClass("btl");
	} else {
		$(".current").parent().addClass('hide');
	}
  $("#nav4 .small").click(function() {
    $("#nav4 .small .sj_img").addClass("hide");
    $("#nav4 .selected .img_hide").removeClass("hide");
    var index = $(this).index();
    if ($(this).hasClass('selected')) {
      $(this).removeClass("selected");
      $(this).parent().find('.eventtext').first().hide(500);
    } else {
      $(".small").removeClass("selected");
      $(this).addClass("selected");
      $(".selected .sj_img").removeClass("hide");
      $("#nav4 .selected .img_hide").addClass("hide");
      $(".eventtext").hide(500);
      var big = $(this).parent().find('.eventtext').first();
      big.show(500);
    }
  });
});