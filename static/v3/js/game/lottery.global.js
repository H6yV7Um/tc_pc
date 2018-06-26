/**
 * 走势图
 */
var LotteryTrend = function() {

	var init = function(shortName,no,chs) {
		var name = shortName;
		if(name == 'fbffc1m') name = 'ffc';
		if(name == 'fbffc3m') name = '3fc';
		if(name == 'fbffc5m') name = '5fc';
		$('.lottery-code-trend').attr('href', '/static/lottery-trend.html?id='+no+'&w=1&q=50&chs='+ encodeURI(chs));
		$('.lottery-code-trend').attr('target', new Date().getTime());
	}

	return {
		init: init
	}

}();

/**
 * 合买计划
 */
var LotteryPlan = function() {

	var init = function(lottery) {
		var name = lottery.shortName;
		if(name == 'fbffc1m') name = 'ffc';
		if(name == 'fbffc3m') name = '3fc';
		if(name == 'fbffc5m') name = '5fc';
		var thisButton = $('.lottery-record').find('[data-command="plan"]');
		thisButton.attr('href', '/lottery-plan.html?' + name);
	}

	return {
		init: init
	}

}();

/**
 * 彩票开奖时间
 */
var LotteryOpenTime = function() {

	var $Lottery; // 彩票游戏
	var $Timer; // 定时器

	var loadData = function() {
		var data = { name: $Lottery.shortName };
		GameLotteryCtrl.staticOpenTime({
			data: data,
			success: function(response) {
				if (response) {
					handleData(response);
				}
			}
		});
	}

	// 格式化时间
	var formatTime = function(seconds) {
		var s = 1, m = 60 * s, h = m * 60;
		var ss = 0, mm = 0, hh = 0;
		if(s > 0) {
			hh = Math.floor(seconds / h);
			mm = Math.floor(seconds % h / m);
			ss = Math.floor(seconds % h % m / s);
		}
		var p = function(t) {
			return t < 10 ? '0' + t : t;
		}
		return [p(hh), p(mm), p(ss)];
	}

	var setTime = function(issue, openTime) {
		var seconds = openTime.diff(moment(), 'seconds');
		var time = formatTime(seconds);
		$('[data-field="global-expect"]').html(issue);
		var ihtml = '<i style="color:'+ (time[0] < 1 ?"#9c9c9c" : "#353535") +'">' + time[0] + '</i>:<i style="color:'+ (time[1] < 1 ?"#9c9c9c" : "#353535") +'">' + time[1] + '</i>:<i style="color:'+ (time[2] < 1 ?"#9c9c9c" : "#353535") +'">' + time[2] + '</i>'
		$('[data-field="global-last-time"]').attr('s',seconds).html(ihtml);
    if (typeof $('lottery #topmcounter', window.parent.document) !='undefined') {
      $('lottery #topmcounter', window.parent.document).html((time[0] !='00' ? '<i>' + time[0] + '</i>:' : '')+'<i>' + time[1] + '</i>:<i>' + time[2] + '</i>');
    }
    if (typeof $('.footer-bar-deal #mcounter_other', window.parent.document) !='undefined') {
      $('.footer-bar-deal #mcounter_other', window.parent.document).html((time[0] !='00' ? '<i>' + time[0] + '</i>:' : '')+'<i>' + time[1] + '</i>:<i>' + time[2] + '</i>');
    }
    if(seconds == 15){
      console.log(seconds,AppData.jbox != null && typeof AppData.jbox !='undefined' && $('#'+AppData.jbox.id).hasClass('cancel-common'));
      $('.noneopen-list a[data-command="cancel"],.alopen-list a[data-command="cancel"]').hide();
    }
    if(seconds == 10 && $.cookie('WIN-VOICE')=='ON') {
      //console.log('GO SOUND');
      $('#lottery-cd').remove();
			var audio = $('<audio id="lottery-cd" autoplay="autoplay">');
      audio.attr('src', '/static/v3/sound/time.mp3').hide();
      $('body').append(audio);
      console.log(AppData.jbox != null && typeof AppData.jbox !='undefined' && $('#'+AppData.jbox.id).hasClass('cancel-common'));
      if (AppData.jbox != null && typeof AppData.jbox !='undefined' && $('#'+AppData.jbox.id).hasClass('cancel-common')) {
        AppData.jbox.close();    
      }
      $('.noneopen-list a[data-command="cancel"]').hide();
    }
		if(seconds <= 10) {
      //倒计时声音
			/*if($('.set-voice').find('.cd').hasClass('audio-on')) {
				var lotteryCd = document.getElementById('lottery-cd');
				if(lotteryCd) {
					lotteryCd.play();
				} else {
					var audio = $('<audio id="lottery-cd" autoplay="autoplay">');
					audio.attr('src', 'assets/global/audio/cd.mp3').hide();
					$('body').append(audio);
				}
			} */
		}
    if (seconds == 0) {
      $('div[data-field="code"]').hide();
      $('.codeholder').show();
      if (typeof getLeftOnlySec !='undefined') {
        getLeftOnlySec();
      }
      if (AppData.jbox!=null) {
        AppData.jbox.close()  
      }
      if ($('#sys-message').size()> 0) {
        document.getElementById('sys-message').play()
      }else {
				if($('.set-voice').find('.cd').hasClass('audio-on') && !isMobile.any()) {
          var audio = $('<audio id="sys-message" autoplay="autoplay">');
          audio.attr('src', '/audio/message.mp3').hide();
          $('body').append(audio);
          document.getElementById('sys-message').play();
        }
      }
    }
    if (seconds%10== 0) {
      getLeftOnlySec();
    }
    if (seconds%30== 0) {
      RecordList.init();
      var linfo = GameData.getInfo();
      LotteryOpenCode.init(linfo);
      //getLeftOnlySec();
    }else {
      if (seconds>5 && seconds<50) {
        if (seconds% 5== 0) {
          var linfo = GameData.getInfo();
          LotteryOpenCode.init(linfo);
        }
      }
    }

		if (seconds <= 0) {
			$('audio#lottery-cd').remove();
      $('[data-field="expect"]').html(issue);
			clearTimeout($Timer);
			App.alert('warning', '温馨提示', '第 <font class="f18" color="#ff4500">' + issue + '</font> 期 已截止，<br/>请注意投注期号！', 3000);
			setTimeout(loadData, 3000);
			$Timer = setInterval(loadData, 5000);
		}
	}


	var handleData = function(data) {
		$Timer && clearTimeout($Timer);
		var issue = data.issue;
		var seconds = data.surplusTime + 1;
		var openTime = moment().add(seconds, 'seconds'); // moment对象
		setTime(issue, openTime);
		$Timer = setInterval(function() {
			setTime(issue, openTime);
		}, 1000);
	}

	var init = function(lottery) {
		$Lottery = lottery;
		loadData();
	}

	return {
		init: init
	}

}();

/**
 * 彩票开奖号码
 */
var LotteryOpenCode = function() {

	var $Lottery; // 彩票游戏
	var $Timer; // 定时器

	var $LastIssue; // 上一期的开奖号码

	var loadData = function(history) {
		//console.log(history);
    var data = { name: $Lottery.shortName, history: history };
		GameLotteryCtrl.staticOpenCode({
			data: data,
			success: function(response) {
        //console.log('responseresponseresponseresponse',response);
				if (String(response)=='-1') {
          window.location.href = "/welcome/sign.html";
          return false;
        }
        if (response) {
					handleData(response);
				}
			}
		});
	}
	var $MoreTimer;
	var $CurrCode;
	var handleData = function(list) {
      //console.log('change ',list);

      var thisResultList = $('.lottery-open-list .list');
	    thisResultList.empty();
      var getRandomNum = function() {
        var arr = [],json = {};
        while(arr.length<5){
          var num = Math.round(Math.random()*9);
          if(!json[num]) {
            arr.push(num);
            json[num] = true;
          }
        }
        return arr;
      }

      var formatCode = function(code, lottery, zutype,nowtopm,nowtoplabel) {
          //console.log(code,nowtoplabel,nowtopm,'zutypezutype');
          var formatlen = [];
          if (nowtopm=='中三') {
            formatlen = [1,2,3];
          }
          if (nowtopm=='前三') {
            formatlen = [0,1,2];
          }
          if (nowtopm=='后三') {
            formatlen = [2,3,4];
          }
          if (nowtopm=='后四') {
            formatlen = [1,2,3,4];
          }
          if (nowtopm=='二星') {
            if (nowtoplabel=='后二星　直选') {
              formatlen = [3,4];
            }
            if (nowtoplabel=='前二星　直选') {
              formatlen = [0,1];
            }
            //console.log(formatlen);
          }
          if (nowtopm=='前二') {
            formatlen = [0,1];
            //console.log(formatlen);
          }

          if (nowtopm=='前一' && code.length>15) {
            formatlen = [0];
            //console.log(nowtopm,code,formatlen);
          }
	        var format = $('<div class="code'+(typeof zutype !='undefined' ? '' : ' expand')+'">');
          //console.log(code,lottery);
          if (code == null) {
            //code = getRandomNum().join(',');
          }
	        var codes = code.split(',');
	        if (codes.length == 20 && (lottery == "hgffc" || lottery == "bjffc" || lottery == "twffc" || lottery == "jndffc")) {
	        	//alert('1');
            var bigAry = BigNumber(codes).bigAry;
            console.log(bigAry,'66666666666666')
	            for (var i = 0; i < 5; i++) {
                if (formatlen.length>0) {
                  if ($.inArray(i,formatlen)>-1) {
                    format.append('<div class="num more highlight">' + bigAry[i] + '</div>');
                  }else {
                    format.append('<div class="num more">' + bigAry[i] + '</div>');
                  }
                  //format.append('<div class="num more">' + bigAry[i] + '</div>');
                }else {
                  if ($.inArray(i,formatlen)>-1) {
                    format.append('<div class="num more highlight">' + bigAry[i] + '</div>');
                  }else {
                    format.append('<div class="num more">' + bigAry[i] + '</div>');
                  }
                }

	            }
	        } else {

	            //alert('33');
              var length = codes.length > 5 ? 5 : codes.length;
	            if ($Lottery.type == 6) {
	            	length = codes.length;
	            }
	            for (var i = 0; i < length; i++) {
	              if (formatlen.length>0) {
                  if ($.inArray(i,formatlen)>-1) {
                    format.append('<div class="num highlight">' + codes[i].split('|')[0] + '</div>');

                  }else {
                    format.append('<div class="num">' + codes[i].split('|')[0] + '</div>');
                  }
                  //format.append('<div class="num">' + codes[i].split('|')[0] + '</div>');
                }else {
                  if ($.inArray(i,formatlen)>-1) {
                    format.append('<div class="num highlight">' + codes[i].split('|')[0] + '</div>');
                  }else {
                    format.append('<div class="num highlight">' + codes[i].split('|')[0] + '</div>');
                  }
                }

	            }
	           if (codes.length >3&&codes.length <5) {
	                format.append('<a class="more">...</a>');
	            }
	        }
          //console.log(String($Lottery.shortName).indexOf('PK10'));
	        if($Lottery.type == 10 || String($Lottery.shortName).indexOf('PK10')>-1){
	        		format = $('<div class="code pkcode'+(typeof zutype !='undefined' ? '' : ' expand')+'">');
	            	var sb = code.split(',');
                var leftfive = _.take(sb, 5).join('</div><div class="num">');
                var lastfive = _.takeRight(sb, 5).join('</div><div class="num">');
	            	format.append('<div class="num">' + leftfive + '</div><br><div class="num">'+lastfive+'</div>')
	            }
	        return format;
	    }
      //console.log(list,'listlist');
      var shortIssue = function(str) {
        if (String(str).indexOf('-')>-1) {
          return str.split('-')[1]
        }
        str = _.takeRight(str.split(''), 4).join('');
        return str
      }
      var hasDuplicates = function(a,len) {
        //console.log(a.length-_.uniq(a).length==2);
        return _.uniq(a).length !== a.length && (a.length-_.uniq(a).length==len);
      }
      var zutypemethod = function(textkey) {
        var chkdtwuxin = function(str) {
          if (str==null) {return '';}
          var ar = str.split(',');
          //console.log(_.sortBy(ar));
          if (str==null) {return '';  }
          if (hasDuplicates(ar,0)){return '组120'}
          if (hasDuplicates(ar,1)){return '组60'}
          if (hasDuplicates(ar,2,2)){return '组30'}
          if (hasDuplicates(ar,2,3)){return '组20'}
          if (hasDuplicates(ar,3,3,2)){return '组10'}
          if (hasDuplicates(ar,2)){return '组5'}
          return '组120'
        }
        var chkdtsixin = function(str) {
          if (str==null) {return '';}
          var ar = str.split(',');
          ar = _.takeRight(ar, 4);
          //console.log(_.sortBy(ar));
          if (str==null) {return '';  }
          if (hasDuplicates(ar,0)){return '组24'}
          if (hasDuplicates(ar,1)){return '组12'}
          if (hasDuplicates(ar,2,2)){return '组6'}
          if (hasDuplicates(ar,2,3)){return '组4'}
          return '组24'
        }
        var chksan1 = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.take(allno, 3);
          //console.log(allno);
          if (hasDuplicates(allno,1)) {return '组三'}
          return '组六'
        }
        var chksan2 = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.takeRight(allno, 4);
          allno = _.take(allno, 3);
          if (hasDuplicates(allno,1)) {return '组三'}
          return '组六'
        }
        var chksan3 = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.takeRight(allno, 3);
          if (hasDuplicates(allno,1)) {return '组三'}
          return '组六'
        }
        var chktwo = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.takeRight(allno, 2);
          return eval(allno.join("+"));
        }
        var chktwo1 = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.take(allno, 2);
          return eval(allno.join("+"));
        }
        var chkthree = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.take(allno, 3);
          return eval(allno.join("+"));
        }
        var chkthree1 = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.takeRight(allno, 4);
          allno = _.take(allno, 3);
          return eval(allno.join("+"));
        }
        var chkthree2 = function(str) {
          if (str==null) {return '';  }
          var allno = str.split(',');
          allno = _.takeRight(allno, 3);
          return eval(allno.join("+"));
        }
        if (textkey=="五星") {
          return chkdtwuxin;
        }
        if (textkey=="后四") {
          return chkdtsixin;
        }
        if (textkey=="前三") {
          return chksan1;
        }
        //console.log(textkey,'textkeytextkeytextkey',$Lottery.shortName);
        if (textkey=="三码" && String($Lottery.shortName).indexOf('11Y')==-1) {
          return chksan1;
        }
        if (textkey=="前三和值") {
          return chkthree;
        }
        if (textkey=="中三") {
          return chksan2;
        }
        if (textkey=="中三和值") {
          return chkthree1;
        }
        if (textkey=="后三") {
          return chksan3;
        }
        if (textkey=="后三和值") {
          return chkthree2;
        }
        if (textkey=="二星") {
          return chktwo;
        }
        if (textkey=="后二") {
          return chktwo;
        }
        if (textkey=="前二") {
          return chktwo1;
        }
        return undefined
      }
      var hasDuplicates = function(a,len) {
        if (arguments.length > 2) {
          var chkeylen = arguments[2];
          var bc =_.countBy(a, _.identity);
          var maxsame = 0;
          for (var key in bc) {
            if (typeof bc[key] !== 'undefined') {
              if (bc[key]>maxsame) {
                maxsame = bc[key];
              }
            }
          }
          var allkeys = Object.keys(bc);
          if (arguments.length > 3) {
            return _.uniq(a).length !== a.length && chkeylen==maxsame && arguments[3]==allkeys.length && (a.length-_.uniq(a).length==len);
          }
          //console.log(bc,'maxsamemaxsame',maxsame);
          return _.uniq(a).length !== a.length && chkeylen==maxsame && (a.length-_.uniq(a).length==len);
        }
        return _.uniq(a).length !== a.length && (a.length-_.uniq(a).length==len);
      }
      //console.log(list,'listlistlist');

	    $.each(list, function(i, val) {
	        if (i == 0) {
	        	$LastIssue = val.issue;
	        	$CurrCode = val;
            //console.log($('[data-field="expect"]').html()==$LastIssue,$LastIssue,$('[data-field="expect"]').html());
            //console.log('showOpenCodeshowOpenCodeshowOpenCode',$CurrCode);
            //console.log($CurrCode.code!=null && $('[data-field="expect"]').html()==$LastIssue);

            if ($CurrCode.code!=null && $('[data-field="expect"]').html()==$LastIssue) {
              showOpenCode(val);
              $('div[data-field="code"]').show();
              $('.codeholder').hide();
            }else {
              if ($('[data-field="expect"]').html()=='00000000-000') {
                $('[data-field="expect"]').html(val.issue);
                //console.log('00000000000000-00000000000',val);

                showOpenCode(val);
              }else {
                $('[data-field="expect"]').html(val.issue);
                showOpenCode(val);
              }
            }
	        }
	        var item = $('<div class="item">');
	        item.append('<div class="expect">' + val.issue + '</div>');
          var nowtopm = $('.lottery-betting .play-groups a.selected').text();
          var nowtoplabel = $('.lottery-betting .play-list div.selected').siblings('.label').eq(0).text();
          if (nowtoplabel=='前二星　直选') {
            nowtopm = '前二';
          }
          if (val.code!=null) {
            item.append(formatCode(val.code, val.lottery,zutypemethod(nowtopm),nowtopm,nowtoplabel));
          }else {
            item.append('<div class="code wait'+(typeof zutypemethod(nowtopm) !='undefined' ? '' : ' expand')+'">等待开奖</div>');
          }

          //console.log(nowtopm,GameData.getInfo());
          //console.log(nowtopm,'gloabalgloabalgloabalgloabal');

          if (typeof zutypemethod(nowtopm) !== 'undefined') {
            item.append('<div class="zutype" rel="'+val.code+'">' + zutypemethod(nowtopm)(val.code) + '</div>');
          }else {
            item.append('<div class="zutype" rel="'+val.code+'" style="display:none;"></div>');
          }

	        item.find('.code .more').hover(function() {
	            clearTimeout($MoreTimer);
	            showOpenCode(val);
	        }, function() {
	            $MoreTimer = setTimeout(function() {
	                showOpenCode($CurrCode);
	            }, 300);
	        });
	        thisResultList.append(item);
	    });


      // $('.lottery-open-list').hover(function() {
      //   $('.lottery-open-list').addClass('mouseon');
      // },function() {
      //   $('.lottery-open-list').removeClass('mouseon');
      // })
	}

	var BigNumber = function(smallAry) {
	    var smallGroupAry = [];
	    var bigStr;
	    var bigAry = [];
	    var bigExpAry = [];
	    for (var i = 0; i < smallAry.length / 4; i++) {
	        var small = [];
	        var v1 = smallAry[i * 4];
	        var v2 = smallAry[i * 4 + 1];
	        var v3 = smallAry[i * 4 + 2];
	        var v4 = smallAry[i * 4 + 3];
	        small.push(v1, v2, v3, v4);
	        var sum = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
	        var exp = '' + v1 + "+" + v2 + "+" + v3 + "+" + v4 + "=" + (sum);
	        var expHtml = '' + exp;
	        var length = expHtml.length;
	        expHtml = expHtml.substr(0, length - 1) + '<span style="color:yellow">' + expHtml.substr(length - 1, length) + '</span>';
	        var sumStr = '' + sum;
	        bigAry.push(sumStr.substr(sumStr.length - 1, sumStr.length));
	        bigExpAry.push(exp);
	        smallGroupAry.push(small);
	    }
	    return {
	        bigAry: bigAry,
	        bigExpAry: bigExpAry,
	        smallGroupAry: smallGroupAry
	    }
	}

	/**
	 * 显示开奖号码
	 */
	var timeouter = 0;
	var showOpenCode = function(data) {
      if (data.code!=null) {
        //data.code = '8,8,8,8,8'
        $('.onlymobilecode').html(data.code);
        if ($('.codeholder:visible').size()>0) {
          $('div[data-field="code"]').show();
          $('.codeholder').hide();
        }
        var prevcode = $('.lottery-open-code').find('[data-field="expect"]').data('now');
        //console.log(data.code==prevcode);
        if (typeof prevcode !='undefined' && data.code==prevcode) {
          //console.log('noneed');
          return false;
        }
        if ((typeof prevcode =='undefined' || data.code!=prevcode) && $.cookie('WIN-VOICE')=='ON') {
          //console.log('open.mp3');
          $('#lottery-cd').remove();
          var audio = $('<audio id="lottery-cd" autoplay="autoplay">');
          audio.attr('src', '/static/v3/sound/open.mp3').hide();
          $('body').append(audio);
        }

        var formatCode = function(code) {
            var format = $('<ul class="clearfix" style="margin:0 auto;">');
            var codes = code.split(',');
            for (var i = 0; i < codes.length; i++) {
                // 检测号码个数
                if ($Lottery.type == 1 || $Lottery.type == 2) {
                    if (i >= 5) break;
                }
                if ($Lottery.type == 3 || $Lottery.type == 4) {
                    if (i >= 3) break;
                }
                if ($Lottery.type == 5) {
                    if (i >= 20) break;
                }
                if ($Lottery.type == 6) {
                    if (i >= 10) break;
                }
                // 格式化开奖号码
                if ($Lottery.type == 6) {
                    format.append('<li class="r' + codes[i] + '"></li>');
                } else {
                    format.append('<li>' + codes[i] + '</li>');
                }
            }
						format.css('width',codes.length * 50 + 'px');
            return format;
        }
        $('.lottery-open-code').find('[data-field="expect"]').data('now',data.code).html(data.issue);
        var animateRotateShow = function(els, code, location) {
	        var codes = code.split(',');
	        var speed = 400,
	            bwidth = 68,
	            tdelay = 0;
	        var show = function(code, location, time, delay) {
	            setTimeout(function() {
	                var item = $('<div class="item">');
	                item.html(code);
	                item.css({
	                    'left': '-' + bwidth + 'px',
	                    'animation': '0.5s linear 0s normal none infinite rotate'
	                });
	                item.animate({
	                    'left': location
	                }, time, 'linear', function() {
	                    item.attr('style', 'left: ' + location + 'px');
	                });
	                els.find('.rotate').append(item);
	            }, delay);
	        }
	        for (var i = 0; i < codes.length; i++) {
	            var thisCode = codes[codes.length - 1 - i];
	            var thisLocation = location[codes.length - 1 - i];
	            var time = (thisLocation + bwidth) / speed * 1000;
	            show(thisCode, thisLocation, time, tdelay);
	            tdelay += time;
	        }
	      }
        var lotteryOpenCode = $('.lottery-open-code').find('[data-field="code"]');

        // 滚动效果的
        if ($Lottery.shortName == 'hgssc' || $Lottery.shortName == 'BJPK10' || $Lottery.shortName == 'AKLPK10' || $Lottery.shortName == 'bjssc'|| $Lottery.shortName == 'twbgssc') {
            clearTimeout(timeouter);
            var lotteryOpenCode02 = lotteryOpenCode;
            lotteryOpenCode02.addClass('higher');
            /*lotteryOpenCode02.css({
                webkitFilter: 'url(#go1)',
                filter: 'url(#go1)'
            });*/
            //var smallStr = data.code.split('|')[1];
            //var smallAry = smallStr.split(',');

            //小号数据分组
            //var temp = BigNumber(smallAry);
            var allcode = String(data.code).split(',');
            var temp = {
              bigAry:allcode,
              smallGroupAry:allcode,
            }
            var smallGroupAry = temp.smallGroupAry;
            var bigAry = temp.bigAry;
            var bigExpAry = temp.bigExpAry;

            //生成小号html
            var smallul = '<ul class="small" style="display:none;">';
            for (var idx1 in smallGroupAry) {
                smallul += '<span class="wp1"><span class="wp2">';
                //smallGroupAry[idx1];
                //for (var idx2 in smallGroupAry[idx1]) {
                    smallul += '<li>' + smallGroupAry[idx1] + '</li>';
                //}
                smallul += '</span></span>';
            }
            smallul += '</ul>';

            //生成大号html
            var bigsul = "<ul class='big'>";
            for (var idx1 in bigAry) {
                //bigsul += '<li class="ball_'+bigAry[idx1]+'">' + bigAry[idx1] + '</li>';

               bigsul += '<li class="ball_'+bigAry[idx1]+'"></li>';
            }
            smallul += '</ul>';


            lotteryOpenCode02.empty();
            var tip = $("<div class='tip1'></div>");
            //lotteryOpenCode02.append(smallul);
            lotteryOpenCode02.append(bigsul);
            lotteryOpenCode02.append(tip);
            lotteryOpenCode02.append('<div style="clear:both;"></div>')
            //lotteryOpenCode02.find('li').hide();

            //入场
            var smallli = lotteryOpenCode02.find('.small li');
            /*smallli.removeClass("zoomIn animated");
            smallli.each(function(idx, obj) {
                setTimeout(function() {
                    $(obj).css('display', 'block').addClass("zoomIn animated")
                }, idx * 50);
            });*/
            var bigli = lotteryOpenCode02.find('.big li');
            var smallGroup = lotteryOpenCode02.find('.small .wp2');


            //大小球动画
            !! function() {
                timeouter = setTimeout(function() {
                    lotteryOpenCode02.removeAttr("style");
                }, 1000);
                smallGroup.each(function(idx, obj) {
                    setTimeout(function() {
                        //$(obj).css('display', 'block').removeClass().addClass("wp2 zoomOut animated");
                        // 	                    bigli.eq(idx).css({'visibility':'visible','display':'block'}).removeClass().addClass("li2 bounceIn animated");
                        bigli.eq(idx).css('display', 'block').removeClass().addClass("li2 bounceIn animated");

                        //$(obj).css('display','block').removeClass().addClass("wp2 zoomOut animated");
                        //$(obj).css('display','block').removeClass().addClass("wp2 bounceOut animated");

                        // $(obj).find('li').css('display','block').removeClass().addClass("wp2 bounceOut animated");
                        // setTimeout(function(){
                        // bigli.eq(idx).css('display','block').removeClass().addClass("li2 bounceIn animated");
                        // },500);


                        // $(obj).css('display','block').removeClass().addClass("wp2 flip animated");
                        // setTimeout(function(){$(obj).css('display','block').removeClass().addClass("wp2 zoomOut animated")},800);
                        // setTimeout(function(){bigli.eq(idx).css('display','block').removeClass().addClass("li2 zoomIn animated")},800);

                        // $(obj).css('display','block').removeClass().addClass("wp2 hinge animated");
                        // bigli.eq(idx).css('display','block').removeClass().addClass("li2 rollIn animated");
                    }, 1000 + idx * 200);
                });
            }()

            //大球悬停动画
            /*bigli.unbind();
            bigli.hover(function() {
                // $(this).removeClass().addClass("flipOutY animated");
                // smallGroup.eq($(this).index()).removeClass().addClass("wp2 flipInY animated");
                var ls = smallGroup.eq($(this).index()).find('li');
                var html = "";
                var sum = 0;
                ls.each(function(idx, ele) {
                    var txt = $(this).html();
                    if (idx == ls.length - 1) html += txt + "=";
                    if (idx != ls.length - 1) html += txt + "+";
                    sum += parseInt(txt);
                });
                html += sum;
                var length = html.length;
                html = html.substr(0, length - 1) + '<span style="color:yellow">' + html.substr(length - 1, length) + '</span>';
                tip.html(html);
            }, function() {
                // $(this).removeClass().addClass("flipInY animated");
                // smallGroup.eq($(this).index()).removeClass().addClass("wp2 flipOutY animated");
            });*/

        } else {
            lotteryOpenCode.html(formatCode(data.code));
            //入场
            var list = $('.lottery-open-code .code li');
            list.each(function(idx, obj) {
                setTimeout(function() {
              //$(obj).css('display', 'block').addClass("zoomIn animated"); bounceInLeft
            var s = 'zoomIn';
            $(obj).css('visibility', 'visible');
            //$(obj).attr('style','visibility: visible;');
                    $(obj).addClass(s+" animated");     //visibility: visible;
              //$(obj).css('display', 'inline-block')
                }, idx * 100);
            });

            lotteryOpenCode.removeClass('higher');
        }

      }else {
        $('.lottery-open-code').find('[data-field="expect"]').data('now','').html(data.issue);
        $('div[data-field="code"]').hide();
        $('.codeholder').show();
      }
	}

	var init = function(lottery) {
		//console.log('LotteryOpenCode.init',lottery);
    $Lottery = lottery;
		loadData(true);
	}

	var flush = function(data) {
		if (data.issue != $LastIssue) {
			loadData(true);
		}
	}

	return {
		init: init,
		flush: flush
	}

}();

/**
 * 开奖通知
 */
var LotteryOpenNotice = function() {

	var loadData = function() {
		GameLotteryCtrl.pullOpenNotice({
			success: function(response) {
				if (response.error == 0) {
					handleData(response.data);
				}
			}
		});
	}

	// 播放声音
	var audio = function() {
		if($('.set-voice').find('.win').hasClass('audio-on')) {
			$('audio#lottery-open').remove();
			var audio = $('<audio id="lottery-open" autoplay="autoplay">');
			audio.attr('src', 'assets/global/audio/lottery-open.mp3').hide();
			$('body').append(audio);
		}
	}

	var handleData = function(data) {
		audio();
		var msg = '当前彩种：' + data.lottery + '<br/>';
		msg += '当前期号：' + data.issue + '<br/>';
		msg += '当期投注：' + data.money.toFixed(3) + '元<br/>';
		msg += '当期中奖：' + data.winMoney.toFixed(3) + '元<br/>';
		msg += '当期盈亏：' + data.profit.toFixed(3) + '元<br/>';
		App.tips('消息提示', msg, 8000);
	}

	var pull = function() {
		loadData();
	}

	return {
		pull: pull
	}

}();

var LotteryScript = {'/static/v3/js/game/lottery.ssc.js':true};
