//=========================================
//以下是根据每个平台不同而改变的自定义功能
//=========================================
var setLogo = function() {
  //$('.last-time').show().addClass('animated flash');
	var allgdata = GameData.getInfo();
  var showName = GameData.getInfo().showName;
	var shortName = GameData.getInfo().shortName;
  //console.log('GameData.getInfo()',allgdata);
	var lotteryType = GameData.getInfo().type;
	var description = GameData.getInfo().description;
	var lot = $("<div class='lot'>");
	var wrapper1 = $('<div class="wrapper"><div class="logo animated flash"></div><div class="nav"><a href="#" class="lottery-code-trend" target="_blank"><em class="m_ico">&#59244;</em>号码走势</a><a href="/static/help.html#game" target="_blank"><em class="m_ico">&#59245;</em>游戏说明</a></div></div>');
	var wrapper2 = $('<div class="wrapper">');

	lot.append(wrapper1);
  if ($('.lottery-open .lot').size()==0) {
    $('.lottery-open').prepend(lot);
  }else {
    $('.lottery-open .lot').remove()
    $('.lottery-open').prepend(lot);
  }

  //console.log(shortName,'shortNameshortNameshortName');
	$('.lottery-open').find('.logo').addClass(shortName.toLowerCase().replace('30','2').replace(/[0346789]/g, ""));


 	$('title').html(showName);
 	$('.lottery-nav .menu .title span:eq(0)').text(showName);

	if(lotteryType==1 && shortName.indexOf("min")==0){
		$('.lottery-open').find('.logo').addClass('logo0');
	}else{
		$('.lottery-open').find('.logo').addClass('logo'+lotteryType);
	}

	$('.lottery-nav').append('<a class="will-back" href="/game-center.html">返回彩票大厅</a>');

  //console.log(allgdata.id,$('.mylt_'+allgdata.id).size());
  LotteryTrend.init(shortName,allgdata.id,allgdata.showName);

	$('.lottery-nav .title').append('<span class="lot-desc">' + (description ? description : '')+'</span>');

	//彩票温馨提示生成:早上10:00 - 晚上22:00（72期）10分钟一期，晚上22:00 - 凌晨02:00（48期）5分钟一期
	!function(){
		$('.account-info').empty();
		if(GameData.getInfo().description){
			$('.account-info').html('温馨提示：'+GameData.getInfo().description);
		}
		var tips = $('<div class="tips aaa"><i></i>彩票温馨提示</div>');
		wrapper2.append(tips);


		lot.append(wrapper2);
		$('.lottery-nav .menu .title span').text(showName);
	};

	!function(){
	//彩票
	var calculate = function(fixedMoney){
    //var input = $('<input type="text" name="fixedMoney" />');
    //$('.lottery-record > .button').prepend(input);

		var getPostion = function (fixed){
			var fixedStr = fixed+'';
			if(fixedStr.indexOf('.')<0) return 0;
			return (fixedStr.length-fixedStr.indexOf('.')-1)
		}

      //input.change(function(){
		  var num = parseInt($('.play-options [data-field="num"]').html());
		  var money = num*GameData.getConfig().sysUnitMoney;

      //var fixedMoney = parseFloat($('.lottery-record [name="fixedMoney"]').val());
		  var fixed = fixedMoney/money          //   90/6 = 15 9/6=1.5
		  if(fixed>10000) fixed =parseInt(fixed);
		  var fixedStr = fixed+'';          //   90/6 = 15 9/6=1.5
		  var pos = getPostion(fixed);
		  if(getPostion(fixed)>3) fixedStr=fixed.toFixed(3)+'';
		  var newMultiple = fixedStr.replace(/^[0\.]+|\./g,'');
		  var newModel = getPostion(fixed);

		  $('.play-options [name="multiple"]').val(newMultiple);
		  $('.play-options [name="multiple"]').trigger("keyup");
		  $('.play-options .model a').eq(newModel).click();
      //});
	}

	//弹出框
	var button = $('<input type="button" name="fixedMoney" value="快速投注"/>');
  //$('.lottery-record > .button').prepend(button);
	button.click(function(){
		var num = parseInt($('.play-options [data-field="num"]').html());
		if(num==0) return;
		var $doc = $('<div id="quick-bet">\
					<div>提示：您只需要输入金额，系统会自动计算倍数</div>\
					<div class="amounts">\
						<span>100元</span><span>100元</span><span>100元</span><span>100元</span>\
						<span>100元</span><span>100元</span><span>100元</span><span>100元</span>\
						<span>100元</span><span>100元</span><span>100元</span><span><input type="text" name="fixedMoney"/>元</span>\
					</div>\
					<div><span id="submit">确定投注</span></div>\
				</div>');
		$doc.find('.amounts span').click(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
		});
		var box = Will.initBox('<i class="icon lock"></i>快速投注<span class="title-sm"></span>', $doc,550,230);
		$doc.find('#submit').click(function(){
			box.close();
			var selected;
			var $input = $doc.find('.selected input');
			if($input.val()==''){
				return;
			}
			if($input.size()==0) {
				selected = parseInt($doc.find('.selected').html());
			}else{
				selected = $input.val();
			}
			calculate(selected);
		});
	});
 }();

 //
 $(".lottery-nav .menu .list").append('<a class="close">×</a>');
 $(".lottery-nav .menu .title").click(function(){
		//$(this).next().stop().slideToggle();
 });
 $(".lottery-nav .menu .list .close").click(function(){
	 $(this).parent().slideUp();
 });
 var hoverTimer;
 $(".lottery-nav .menu .list").on('mouseout',function(){
  hoverTimer = setTimeout(function() {
    $('.lottery-nav .list:visible').slideUp();
  },500)
 });

 $(".lottery-nav .menu .list").on('mouseover',function(){
  clearTimeout(hoverTimer);
 });

 $('.page-container').on('click',function(ev) {
   if ($(".lottery-nav .title").length>0) {
     if (!$.contains($(".lottery-nav .title")[0],$(ev.target)[0]) && !$.contains($(".lottery-nav .list")[0],$(ev.target)[0]) && $('.lottery-nav .list:visible').size()>0) {
       $('.lottery-nav .list:visible').slideUp();
     }
   }
 })

 var issupzuo = function(id) {
    if ($.inArray(id,[11,46,151,911,161,119,711,6,811,191,200,601,201,51,202,203])>-1) {
      return true;
    }
    return false;
  }
  if (!issupzuo(GameData.getInfo().id)) {
    $('.top_gen').hide();
    //$(".button").find('[data-command="generate"]').hide();
  }else {
    $('.top_gen').show();
    //$(".button").find('[data-command="generate"]').show();
  }

  $('.top_gen').off('click').on('click',function() {
    $(".button").find('[data-command="generate"]').click();  
  })
}


$(document).ready(function() {
	$('.moneylist .manual_hide').on('click',function(){
		console.log(789789)
		if(this.zdx){
			$('.moneylist [data-field="lotteryBalance"]').show();
			this.innerHTML = "隐藏";
			this.zdx = false;
		}else{
			$('.moneylist [data-field="lotteryBalance"]').hide();
			this.innerHTML = "显示";
			this.zdx = true;
		}
	});

	var url = "/yx/u/api/notice/list";
		$.ajax({
				type: 'post',
				url: url,
				timeout: 10000,
				dataType: 'json',
				success: function(response) {
					//console.log(response)
					if (response.data==null) {
            return;
          }
          if (response.code == '0' && response.data.length) {
						$("#noticeMsg").hide();
						//$("#noticeMsg").html(response.data.length);
					}
				},
				error : function(e) {
					console.log(e)
				}
			});
		var ursl = "/yx/u/api/account/list-system-message";
			$.ajax({
					type: 'post',
					url: ursl,
					timeout: 10000,
					dataType: 'json',
					success: function(response) {
						if(response.code == '0' && response.data.length){

								$("#systeMsg").hide();
								//$("#systeMsg").html(response.data.length);
						}
					},
					error : function(e) {
						console.log(e)
					}
				});
  //setLogo();
	var bgIndex = localStorage.getItem( '_bgIndex');
	bgIndex = bgIndex?bgIndex:1;
	//$('.lottery_main').css('background-image','url(/static/appbg/bg'+bgIndex+'.png)')
	$('.login_rightBar_btn').eq(bgIndex-1).css('border','2px solid rgb(200,200,200)');
	$('#lottery_mainBg').addClass('lottery_mainBg'+bgIndex);
	styleTab(Number(bgIndex));
	$('.login_rightBar_btn').on('click',function(){
		$('.login_rightBar_btn').css('border','0');
		localStorage.setItem( '_bgIndex', $(this).index() );
		$('#lottery_mainBg').removeClass()
		InitStyle.call(this);
	})

	function InitStyle(){
		$(this).css('border','2px solid rgb(200,200,200)');
		$('.lottery_main').css('background-image','url(/static/appbg/bg'+$(this).index()+'.png)')
		$('#lottery_mainBg').addClass('lottery_mainBg'+$(this).index());
		styleTab($(this).index());
	}
	function styleTab(num){
		//console.log(num)
		switch (num) {
			case 1:
				$('.lottery_main').removeClass('style2');
				$('.lottery_main').removeClass('style3');

				break;
			case 2:
				$('.lottery_main').removeClass('style3');
				$('.lottery_main').addClass('style2');
				break;
			case 3:
				$('.lottery_main').removeClass('style2');
				$('.lottery_main').addClass('style3');
				break;
			default:

		}

	}
});
