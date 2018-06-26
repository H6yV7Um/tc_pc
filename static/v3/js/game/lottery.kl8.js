/**
 * 彩票投注辅助
 */
var LotteryUtils = function() {
	/**
	 * 多少注计算
	 */
	var _inputNumbers = function(type, datasel) {
		var nums = 0, tmp_nums = 1;
		// 选号
		switch (type) {
		case 'rx1':
			nums = datasel[0].length + (datasel[1]).length;
			break;
		case 'rx2':
			var l = datasel[0].length + (datasel[1]).length;
			if(l >= 2 && l <= 8) {
				nums = ArrayUtil.ComNum(l, 2);
			}
			break;
		case 'rx3':
			var l = datasel[0].length + (datasel[1]).length;
			if(l >= 3 && l <= 8) {
				nums = ArrayUtil.ComNum(l, 3);
			}
			break;
		case 'rx4':
			var l = datasel[0].length + (datasel[1]).length;
			if(l >= 4 && l <= 8) {
				nums = ArrayUtil.ComNum(l, 4);
			}
			break;
		case 'rx5':
			var l = datasel[0].length + (datasel[1]).length;
			if(l >= 5 && l <= 8) {
				nums = ArrayUtil.ComNum(l, 5);
			}
			break;
		case 'rx6':
			var l = datasel[0].length + (datasel[1]).length;
			if(l >= 6 && l <= 8) {
				nums = ArrayUtil.ComNum(l, 6);
			}
			break;
		case 'rx7':
			var l = datasel[0].length + (datasel[1]).length;
			if(l >= 7 && l <= 8) {
				nums = ArrayUtil.ComNum(l, 7);
			}
			break;
		default:
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				// 有位置上没有选择
				if (datasel[i].length == 0) {
					tmp_nums = 0; break;
				}
				tmp_nums *= datasel[i].length;
			}
			nums += tmp_nums;
		}
		return nums;
	}

	var _inputFormat = function(type, datasel) {
		switch (type) {
		case 'rx1':
		case 'rx2':
		case 'rx3':
		case 'rx4':
		case 'rx5':
		case 'rx6':
		case 'rx7':
			return datasel[0].concat(datasel[1]).toString();
		case 'hezhids':
		case 'hezhidx':
		case 'jopan':
		case 'sxpan':
		case 'hzdxds':
		case 'hezhiwx':
			return datasel[0].toString().replace(/\,/g , '|');
		default:
			break;
		}
	}

	var _typeFormat = function(code) {
		var arr = [];
		var j = 0, o = 0, h = 0;
		$.each(code, function(idx, val) {
			var num = parseInt(val);
			h += num;
			if(num%2 == 0) {
				o++;
			} else {
				j++;
			}
		});
		if(j > o) {
			arr[0] = '奇';
		}
		if(j < o) {
			arr[0] = '偶';
		}
		if(j == o) {
			arr[0] = '和';
		}
		var hdx = '';
		if(h >= 210 && h <= 809) {
			hdx += '小';
		}
		if(h == 810) {
			hdx += '和';
		}
		if(h >= 811 && h <= 1410) {
			hdx += '大';
		}
		if(h%2 == 0) {
			hdx += '双';
		} else {
			hdx += '单';
		}
		arr[1] = hdx;
		return arr;
	}

	return {
		inputNumbers: _inputNumbers,
		inputFormat: _inputFormat,
		typeFormat: _typeFormat
	}
}();

/**
 * TODO 彩票投注主要方法
 */
var LotteryMain = function() {

	var $Lottery; // 彩票
	var $DownCode; // 降点
	var $FenDownCode; // 分模式降点
	var $LiDownCode; // 厘模式讲点

	var $Method; // 彩票玩法

	var $SysCode; // 系统号级别
	var $SysUnitMoney; // 单注金额

	var $UserCode; // 用户号级别
	var $UserLp; // 用户定位返点
	var $UserMaxCode; // 用户最高号
	var $UserMinCode; // 用户最低号

	var $bData = {}, $bList = [];

	// 布局
	var Layout = [{
		title: '趣味',
		rows: [[{
			title: '趣味型',
			columns: [{
				showname: '和值单双',
				shortname: 'hezhids',
				realname: '[趣味_和值单双]',
				tips: '选择20个开奖号码总和值的单双属性。',
				example: '投注方案：和值单双“双”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：和值单双“双”',
				help: '20个开奖号码的总和值为奇数时中“单”，为偶数时中“双”。',
				select: {
					layout: [{
						title: '和值单双',
						balls: ['单', '双'],
						tools: false
					}]
				}
			}, {
				showname: '和值大小',
				shortname: 'hezhidx',
				realname: '[趣味_和值大小]',
				tips: '选择20个开奖号码总和值的大小属性。',
				example: '投注方案：和值大小“小”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：和值大小“小”',
				help: '选择20个开奖号码总和值的大小属性：小于810为小，等于810为和，大于810为大。',
				select: {
					layout: [{
						title: '和值大小',
						balls: ['小(210~809)', '和(810)', '大(811~1410)'],
						values: ['小', '和', '大'],
						tools: false,
						cls: 'x-large f16'
					}]
				}
			}, {
				showname: '奇偶盘',
				shortname: 'jopan',
				realname: '[趣味_奇偶盘]',
				tips: '选择20个开奖号码中包含奇偶号码个数多少的关系。',
				example: '投注方案：奇偶盘“和”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：奇偶盘“和”',
				help: '任选一个奇偶盘属性，当开奖结果的20个号码的奇偶盘属性与所投注的结果一致，即为中奖。',
				select: {
					layout: [{
						title: '奇偶',
						balls: ['奇(奇>偶)', '和(奇=偶)', '偶(奇<偶)'],
						values: ['奇', '和', '偶'],
						tools: false,
						cls: 'x-large f16'
					}]
				}
			}, {
				showname: '上下盘',
				shortname: 'sxpan',
				realname: '[趣味_上下盘]',
				tips: '开奖号码中包含上盘(01-40)与下盘(41-80)号码个数多少的关系。',
				example: '投注方案：上下盘“上”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：上下盘“上”',
				help: '任选一个上下盘属性，当开奖结果的20个号码的上下盘属性与所投注的结果一致，即为中奖。',
				select: {
					layout: [{
						title: '上下',
						balls: ['上(上>下)', '中(上=下)', '下(上<下)'],
						values: ['上', '中', '下'],
						tools: false,
						cls: 'x-large f16'
					}]
				}
			}, {
				showname: '和值大小盘',
				shortname: 'hzdxds',
				realname: '[趣味_和值大小盘]',
				tips: '选择20个开奖号码总和值的大小单双属性',
				example: '投注方案：和值大小单双“小双”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：和值大小单双“小双”',
				help: '任选一个和值大小单双属性，当开奖结果的20个号码的和值大小单双属性与所投注的结果一致，即为中奖。',
				select: {
					layout: [{
						title: '大小单双',
						balls: ['大&单', '大&双', '小&单', '小&双'],
						values: ['大单', '大双', '小单', '小双'],
						tools: false,
						cls: 'x-large f22'
					}]
				}
			}]
		}]]
	}, {
		title: '任选',
		rows: [[{
			title: '任选',
			columns: [{
				showname: '任选1',
				shortname: 'rx1',
				realname: '[任选_任选1]',
				tips: '从01-80中任选1个以上号码',
				example: '投注方案：01<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中1个号码',
				help: '从01-80中选择1个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}]
				}
			}, {
				showname: '任选2',
				shortname: 'rx2',
				realname: '[任选_任选2]',
				tips: '从01-80中任选2-8个以上号码',
				example: '投注方案：01 02<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中2个号码',
				help: '从01-80中选择2个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}],
					maxLength: 8
				}
			}, {
				showname: '任选3',
				shortname: 'rx3',
				realname: '[任选_任选3]',
				tips: '从01-80中任选3-8个以上号码',
				example: '投注方案：01 02 03<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中3个号码',
				help: '从01-80中选择3个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}],
					maxLength: 8
				}
			}, {
				showname: '任选4',
				shortname: 'rx4',
				realname: '[任选_任选4]',
				tips: '从01-80中任选4-8个以上号码',
				example: '投注方案：01 02 03 04<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中4个号码',
				help: '从01-80中选择4个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}],
					maxLength: 8
				}
			}, {
				showname: '任选5',
				shortname: 'rx5',
				realname: '[任选_任选5]',
				tips: '从01-80中任选5-8个以上号码',
				example: '投注方案：01 02 03 04 05<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中5个号码',
				help: '从01-80中选择5个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}],
					maxLength: 8
				}
			}, {
				showname: '任选6',
				shortname: 'rx6',
				realname: '[任选_任选6]',
				tips: '从01-80中任选6-8个以上号码',
				example: '投注方案：01 02 03 04 05 06<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中5个号码',
				help: '从01-80中选择5个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}],
					maxLength: 8
				}
			}, {
				showname: '任选7',
				shortname: 'rx7',
				realname: '[任选_任选7]',
				tips: '从01-80中任选7-8个以上号码',
				example: '投注方案：01 02 03 04 05 06 07<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中7个号码',
				help: '从01-80中选择7个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
				select: {
					layout: [{
						title: '上',
						balls: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'],
						tools: false,
						cls: 'place'
					}, {
						title: '下',
						balls: ['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'],
						tools: false,
						cls: 'place'
					}],
					maxLength: 8
				}
			}]
		}]]
	}, {
		title: '五行',
		rows: [[{
			title: '五行',
			columns: [{
				showname: '五行',
				shortname: 'hezhiwx',
				realname: '[五行]',
				tips: '选择20个开奖号码总和值的五行属性。',
				example: '',
				help: '',
				select: {
					layout: [{
						balls: ['金(210～695)', '木(696～763)', '水(764～855)', '火(856～923)', '土(924～1410)'],
						values: ['金', '木', '水', '火', '土'],
						styles: ['metal', 'tree', 'water', 'fire', 'earth'],
						tools: false,
						cls: 'x-large f14'
					}]
				}
			}]
		}]]
	}];

	/**
	 * TODO 逻辑开始
	 */

	// 得到用户选择的号码，格式化后的数据
	var getSelectBall = function(playArea) {
		var datasel = [];
		var sb = playArea.find('.balls');
		if(sb && sb.length > 0) {
			$.each(sb, function() {
				var ball = [];
				var as = $(this).find('ul > li > a.selected');
				$.each(as, function() {
					var val = $(this).attr('data-val');
					ball.push(val);
				});
				datasel.push(ball);
			});
		}
		return datasel;
	}

	// 得到用户输入的号码，格式化后的数据
	var getTextareaBall = function(playArea) {
		var datasel = [];
		var textarea = playArea.find('.textarea > textarea');
		if(textarea && textarea.length > 0) {
			var format = textarea.val().replace(/\,|\;|\n|\t/g, ' ');
			var as = format.split(' ');
			$.each(as, function(idx, val) {
				datasel.push(val);
			});
		}
		return datasel;
	}

	// 构造选号区域
	var buildSelectPlace = function(playArea, select) {
		$.each(select.layout, function(i, val) {
			var row = $('<div class="row">');
			if(val.title) {
				row.append('<div class="label">' + val.title + '</div>');
			}
			if(val.cls) {
				row.addClass(val.cls);
			}
			// 球
			var balls = $('<div class="balls">').append('<ul>');
			$.each(val.balls, function(j, ball) {
				var els = $('<li>').append('<a>' + ball + '</a>');
				if(val.values) {
					els.find('a').attr('data-val', val.values[j]);
				} else {
					els.find('a').attr('data-val', ball);
				}
				if(val.styles) {
					els.find('a').addClass(val.styles[j]);
				}
				balls.find('ul').append(els);
			});
			balls.find('ul > li > a').unbind('click').click(function() {
				if($(this).hasClass('selected')) {
					$(this).removeClass('selected');
				} else {
					// 关联事件maxLength
					if(select.maxLength) {
						var abs = playArea.find('.balls > ul > li > a.selected');
						if(abs.length >= select.maxLength) {
							return false;
						}
					}
					$(this).addClass('selected');
				}
				PlayOptions.update();
			});
			row.append(balls);
			// 工具
			if(val.tools) {
				buildBallTools(row, balls);
			}
			playArea.append(row);
		});
	}

	// 构造选号工具
	var buildBallTools = function(row, balls) {
		var blist = balls.find('ul > li > a');
		var tools = $('<div class="tools">').append('<ul><li><a data-command="all">全</a></li><li><a data-command="big">大</a></li><li><a data-command="small">小</a></li><li><a data-command="single">单</a></li><li><a data-command="double">双</a></li><li><a data-command="clean">清</a></li></ul>');
		var setSelected = function(els, selected) {
			if(selected) {
				if(!els.hasClass('selected')) {
					els.trigger('click');
				}
			} else {
				if(els.hasClass('selected')) {
					els.trigger('click');
				}
			}
		}
		tools.find('a[data-command="all"]').unbind('click').click(function() {
			$.each(blist, function() {
				setSelected($(this), true);
			});
		});
		tools.find('a[data-command="big"]').unbind('click').click(function() {
			$.each(blist, function(idx) {
				if(idx < Math.round(blist.length/2)) {
					setSelected($(this), false);
				} else {
					setSelected($(this), true);
				}
			});
		});
		tools.find('a[data-command="small"]').unbind('click').click(function() {
			$.each(blist, function(idx) {
				if(idx < Math.round(blist.length/2)) {
					setSelected($(this), true);
				} else {
					setSelected($(this), false);
				}
			});
		});
		tools.find('a[data-command="single"]').unbind('click').click(function() {
			var arr = [1,3,5,7,9,11];
			$.each(blist, function() {
				var val = parseInt($(this).attr('data-val'));
				if($.inArray(val, arr) != -1) {
					setSelected($(this), true);
				} else {
					setSelected($(this), false);
				}
			});
		});
		tools.find('a[data-command="double"]').unbind('click').click(function() {
			var arr = [0,2,4,6,8,10];
			$.each(blist, function() {
				var val = parseInt($(this).attr('data-val'));
				if($.inArray(val, arr) != -1) {
					setSelected($(this), true);
				} else {
					setSelected($(this), false);
				}
			});
		});
		tools.find('a[data-command="clean"]').unbind('click').click(function() {
			$.each(blist, function() {
				setSelected($(this), false);
			});
		});
		row.append(tools);
	}

	// 构造手动输入框
	var buildTextareaPlace = function(playArea) {
		var textarea = $('<div class="textarea">').append('<textarea>');
		var help = $('<div class="help">').html('每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。');
		textarea.find('textarea').keyup(function() {
			//$(this).val($(this).val().replace(/\,|\;|\n/g, ' '));
      $(this).val($(this).val().replace(/[；.,。，、|]/g, ' '));
			PlayOptions.update();
		});

    textarea.find('textarea').on('paste',function() {
      var thisarea = $(this);
      setTimeout(function() {
        thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ' '));
			  PlayOptions.update();
      },10)
		});
		playArea.append(textarea);
		playArea.append(help);
	}

	var PlayArea = function() {
		var data = function() {
			var playArea = $('.lottery-betting .lottery-opearation > .play-area');
			var datasel = [];
			var balls = getSelectBall(playArea);
			var textarea = getTextareaBall(playArea);
			return datasel.concat(balls).concat(textarea);
		}
		var reset = function() {
			var playList = $('.lottery-betting .lottery-opearation > .play-list');
			playList.find('[data-method="' + $bData.method + '"]').trigger('click');
		}
		return {data: data, reset: reset};
	}();

	// 构造选项栏
	var buildPlayOptions = function(playOptions) {
		// playOptions.append('<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注，倍数</div>');
		// playOptions.append('<div class="multiple"><input name="multiple" type="text" value="1"></div>');
		// playOptions.append('<div class="label">模式</div>');
		// playOptions.append('<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>');
		// playOptions.append('<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>');
		//playOptions.append('<div class="button"><a data-command="add">添加到投注列表</a></div>');
		playOptions.append([
      '<div class="part-one">',

      '<div class="model" style="margin-right:15px;"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
			'<div class="multiple"><input name="multiple" type="text" value="1"></div><div class="label">倍</div>',
      '<div class="adjust-prize"></div>',
			  '<div class="label">已选 <span class="text-money" data-field="num">0</span> 注</div>',
      '<div class="label">共 <span class="text-money" data-field="total">0.000</span> 元</div>',
      '</div>'].join('')
    );
		// GET Cookie Model Value
		var bDataModel = 'yuan';
		if($.cookie('USER_BDATA_MODEL')) {
			bDataModel = $.cookie('USER_BDATA_MODEL')
		}
		playOptions.find('.model > a[data-val="' + bDataModel + '"]').addClass('selected');

		// 倍数输入框
		var multiple = playOptions.find('.multiple > input');
		multiple.keyup(function() {
			if($(this).val() == '') return;
			var val = $(this).val();
			if(/^[0-9]*$/.test(val)) {
				val = Number(val);
				if(val > 10000) $(this).val(10000);
				if(val < 1) $(this).val(1);
				PlayOptions.update();
			} else {
				$(this).val(1);
				PlayOptions.update();
			}
		});
		multiple.keydown(function(e) {
			if(e.keyCode == 38 || e.keyCode == 40) {
				if($(this).val() == '') return;
				var val = Number($(this).val());
				if(!isNaN(val)) {
					if(e.keyCode == 38) val++;
					if(e.keyCode == 40) val--;
					if(val > 10000) val = 10000;
					if(val < 1) val = 1;
					$(this).val(val);
				}
			}
		});
		multiple.blur(function() {
			if($(this).val() == '') {
				$(this).val(1);
				PlayOptions.update();
			}
		});
		// 分模式
		var fenModel = function() {
			if($FenDownCode > 0) {
				var thisCode = $SysCode - $FenDownCode;
				if($UserCode > thisCode) {
					$UserMaxCode = thisCode - $DownCode;
					App.alert('info', '提示消息', '分模式最高为' + $UserMaxCode + '。', 3000);
				}
			}
		}
		// 厘模式
		var liModel = function() {
			if($LiDownCode > 0) {
				var thisCode = $SysCode - $LiDownCode;
				if($UserCode > thisCode) {
					$UserMaxCode = thisCode - $DownCode;
					App.alert('info', '提示消息', '厘模式最高为' + $UserMaxCode + '。', 3000);
				}
			}
		}
		// 默认模式
		var defaultModel = function() {
			$UserMaxCode = $UserCode - $DownCode;
			$UserMinCode = $SysCode - $UserLp * 20;
		}
		// 更新默认
		var update = function(model) {
			if(model == 'fen') {
				fenModel();
			} else if(model == 'li') {
				liModel();
			} else {
				defaultModel();
			}
		}
		// 模式选择
		var models = playOptions.find('.model > a');
		models.click(function() {
			if(!$(this).hasClass('selected')) {
				models.removeClass('selected');
				$(this).addClass('selected');
				var model = $(this).attr('data-val');
				update(model);

				//AdjustPrize.slider();
				AdjustPrize.update();
				PlayOptions.update();
				// SET Cookie Model Value
				var expires = new Date(moment().startOf('year').add(1, 'years'));
				$.cookie('USER_BDATA_MODEL', model, {expires: expires, path: '/'});
			}
		});
		update(bDataModel);
	}

	var PlayOptions = function() {
		var els = function() {
			return $('.lottery-betting .lottery-opearation > .play-options');
		}
		var multiple = function() {
			return Number(els().find('.multiple > input').val());
		}
		var model = function() {
			var val = els().find('.model > a.selected').attr('data-val');
			if(val == 'yuan') {
				return {val: val, money: 1};
			}
			if(val == 'jiao') {
				return {val: val, money: 0.1};
			}
			if(val == 'fen') {
				return {val: val, money: 0.01};
			}
			if(val == 'li') {
				return {val: val, money: 0.001};
			}
		}
		var update = function() {
			var sumstr = LotteryUtils.inputFormat($('.play-list .selected').data('method'), PlayArea.data());
      $('.ks_btn').attr('summary',(sumstr.length<20 ? sumstr : (sumstr.substring(0, 20)+'...')));

      var num = LotteryUtils.inputNumbers($bData.method, PlayArea.data());
			var total = multiple() * num * $SysUnitMoney * model().money;
			els().find('[data-field="num"]').html(num);
			els().find('[data-field="total"]').html(total.toFixed(3));

      if (parseInt(num,10)>0) {
        $('.btn[data-command="add"]').addClass('active');
      }else {
        $('.btn[data-command="add"]').removeClass('active');
      }
		}
		return {els: els, multiple: multiple, model: model, update: update};
	}();

	// 构造奖金
	var buildAdjustPrize = function(adjustPrize, column) {
		adjustPrize.empty();
		adjustPrize.append('<div class="slider"></div><span data-field="code">0</span> / <span data-field="point">0.0</span>%');
		var slider = adjustPrize.find('.slider');
		var start = $UserMaxCode;
		// GET Cookie Code Value
		if($.cookie('USER_BDATA_CODE')) {
			var bCode = $.cookie('USER_BDATA_CODE');
			if (!isNaN(bCode)) {
				if(bCode > $UserMaxCode) {
					start = $UserMaxCode;
				} else if(bCode < $UserMinCode) {
					start = $UserMinCode;
				} else {
					start = bCode;
				}
			}
		}
		slider.noUiSlider({connect: 'lower', behaviour: 'snap', step: 2, start: start, range: {'max': $UserMaxCode, 'min': $UserMinCode}});
		if ($UserMaxCode == $UserMinCode) {
			slider.attr('disabled', 'disabled');
		} else {
			slider.removeAttr('disabled');
		}
		var update = function(code) {
			var point = $UserLp - ((code - $UserMinCode) / 20.0).toFixed(1);
			adjustPrize.find('[data-field="code"]').html(code);
			adjustPrize.find('[data-field="point"]').html(point.toFixed(1));
			AdjustPrize.update();
		}
		var onSet = function() {
			var code = Number(slider.val());
			update(code);
			// SET Cookie Code Value
			var expires = new Date(moment().startOf('year').add(1, 'years'));
			$.cookie('USER_BDATA_CODE', code, {expires: expires, path: '/'});
		}
		var onSlide = function() {
			var code = Number(slider.val());
			update(code);
		}
		slider.on({set: onSet, slide: onSlide});
		update(start);
	}

	// 玩法提示
	var PlayHelp = function() {
		var els = function() {
			return $('.lottery-betting .lottery-opearation > .play-help');
		}
		var update = function(t) {
			$('.lottery-betting .lottery-opearation .prize').find('[data-field="prize"]').html(t);
		}
		return {els: els, update: update};
	}();

	// 奖金调节获取值
	var AdjustPrize = function() {
		var els = function() {
			return $('.lottery-betting .lottery-opearation .adjust-prize');
		}
		var code = function() {
			return Number(els().find('[data-field="code"]').html());
		}
		var point = function() {
			return Number(els().find('[data-field="point"]').html());
		}
		var slider = function() {
			els().find('.slider').noUiSlider({range: {'max': $UserMaxCode, 'min': $UserMinCode}}, true);
		}
		var update = function() {
			var method = $Method[$bData.method];
      var model =  PlayOptions.model();
			var mMoney = PlayOptions.model().money;
			if(method) {
				var ps = method.bonus.split(',');
				var t = [];
				for (var i = 0, j = ps.length; i < j; i++) {
					//var pm = (code() / Number(ps[i])) * ($SysUnitMoney / 2) * mMoney;
          var percent = Number(ps[i])/$UserMinCode;
          var pm = (code()*percent / Number(ps[i])) * Number(ps[i]) * ($SysUnitMoney / 2);
					t.push(pm);
				}
				t.sort(function(a, b) {
					return Number(a) > Number(b) ? 1 : -1;
				});
				if(t.length == 1) {
					t[0]= t[0]*model.money;
          PlayHelp.update(t[0].toFixed(3));
				} else {
					t[0]= t[0]*model.money;
          t[t.length - 1] = t[t.length - 1]*model.money;
          PlayHelp.update(t[0].toFixed(3) + ' ~ ' + t[t.length - 1].toFixed(3));
				}
			}
		}
		return {els: els, code: code, point: point, update: update, slider: slider};
	}();

	/**
	 * TODO 添加号码
	 */
	var addCallback = []; // 添加号码后的事件
	var addToList = function(callback,finalcall) {
		//var issue = ''; // 暂时不用填写期号
		var issue = $('[data-field="global-expect"]').html();
    var method = $bData.method;
		var compress = $bData.compress;
		var datasel = PlayArea.data();
		var num = LotteryUtils.inputNumbers(method, datasel);
		var content = LotteryUtils.inputFormat(method, datasel);
		var code = AdjustPrize.code();
		var point = AdjustPrize.point();
		var multiple = PlayOptions.multiple();
		var model = PlayOptions.model().val;
		var total = multiple * num * $SysUnitMoney * PlayOptions.model().money;
		if(num == 0) {
			App.alert('info', '提示消息', '您还没有选择号码或所选号码不全！', 3000);
			return false;
		}
		var _method = $Method[method];
		if (num <= _method.oooNums) {
			App.confirm('question', '温馨提示', '您所投注内容属于单挑玩法，最高奖金为' + _method.oooBonus + '元，确认继续投注？', 0, '确认', '取消', function() {
				LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, callback);
				PlayArea.reset();
			});
		} else {
			LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, null);
      if (typeof finalcall == 'function') {
        finalcall();
      }
			PlayArea.reset();
		}
	}

	// 投注列表
	var LotteryRecord = function() {
		var els = function() {
			return $('.lottery-record');
		}
		var name = function(method) {
			var method = $Method[method];
			return '[' + method.name + ']';
		}
		var format = function(content) {
			if(content.length > 16) {
				content = content.substring(0, 16) + '…<a data-command="details">[详细]';
			}
			return content;
		}
		var add = function(issue, method, compress, content, num, multiple, model, code, point, total, callback) {
			var tbody = els().find('.list table > tbody');
			var tr = $('<tr>');tr.data('c',content);
      var cnmodel = function(m) {
        var cnm = {'yuan':'元','jiao':'角','fen':'分','li':'厘'}
        return cnm[m];
      }
			tr.append('<td class="ltname">' + GameData.getInfo().showName + '</td>');
      // tr.append('<td class="content">' + name(method) + '</td>');
      tr.append('<td class="munber">' + format(content) + '</td>');
			tr.append('<td style="display:none;" class="nandm" rel="' + num + '"></td>');
			// tr.append('<td class="nandm" rel="' + num + '">' + num + '注</td>');
			tr.append('<td class="multiple">' + multiple + '倍</td>');
			tr.append('<td class="content">' + name(method) + '</td>');
      // tr.append('<td class="model">' + cnmodel(model) + '</td>');
			tr.append('<td class="total">' + total.toFixed(3) + '元</td>');
			// tr.append('<td class="point">' + point.toFixed(1) + '%</td>');
			tr.append('<td class="btn"><a data-command="del">删除</a></td>');
			tr.find('a[data-command="del"]').click(function() {
				var idx = tbody.find('tr').index(tr);
				ArrayUtil.remove($bList, idx);
				tr.remove();
        if (tbody.find('tr').size()==0) {
          $('.ks_btn[data-command="quick"]').removeClass('disabled');
        }
			});
			tbody.append(tr);
			// 加密处理开始
			if(compress === true && num >= 1000) {
				App.blockUI({
					target: els(),
					boxed: true,
					message: '超大注数处理中...'
				});
				LZMA.compress(content, 3, function(result) {
					App.unblockUI(els());
					if(result === false) {
						return App.alert('info', '消息提示', '号码添加失败，请重试！', 3000);
					}
					content = LZMAUtil.toHex(result);
					$bList.push({lottery: $Lottery, issue: issue, content: content, num: num, method: method, multiple: multiple, model: model, code: code, compress: true});
					// 回调函数
					if($.isFunction(callback)) callback();
					for (var i = 0; i < addCallback.length; i++) {
						if($.isFunction(addCallback[i])) {
							addCallback[i]();
						}
					}
				});
			} else {
				$bList.push({lottery: $Lottery, issue: issue, content: content, num: num, method: method, multiple: multiple, model: model, code: code, compress: false});
				// 回调函数
				if($.isFunction(callback)) callback();
				for (var i = 0; i < addCallback.length; i++) {
					if($.isFunction(addCallback[i])) {
						addCallback[i]();
					}
				}
			}
      tr.find('[data-command="details"]').off('click').click(function() {
        App.alertLimit('chknumdetail','info', '查看详细',tr.data('c'), 3000000);
      });
		}
		var clear = function() {
			els().find('.list table > tbody').empty();
			$bList = [];
		}
		var isInit = false;
		var init = function() {
			if(!isInit) {
				//isInit = true;
				App.initScroll();
				var button = els().find('.button');
				button.find('[data-command="add"]').unbind('click').click(function() {
					addToList(function() {
            $('.ks_btn[data-command="quick"]').addClass('disabled')
          });
				});
				button.find('[data-command="submit"]').unbind('click').click(function() {
					var totalam = parseFloat($('.total-inner [data-field="sum-money"]').text());
          /*if (totalam<0.01) {
            App.alert('warning', '提示消息', "总注单最小金额为0.01元！");
			      dialog.close();
            return;
          } */
          BootstrapDialog.show({
            cssClass:'quick-bet',
            title: '<i class="icon lock"></i>快速投注',
            message:function(){
                return [
                  "<div class='cftip lname'>你确认加入第"+$('.lottery-open-info [data-field="global-expect"]').text()+"期？</div>",
                  "<div class='cftip totalm'>总注数："+($('.total-inner [data-field="sum-num"]').text() =='0' ? $('.text-money[data-field="num"]').text() : $('.total-inner [data-field="sum-num"]').text())+"</div>",
                  "<div class='cftip totalm'>订单笔数：1</div>","<div class='cftip totalm'>是否追号：否</div>",
                  "<div class='cftip totalm'>投注总额："+($('.total-inner [data-field="sum-money"]').text() == '0.000' ? $('.text-money[data-field="total"]').text() : $('.total-inner [data-field="sum-money"]').text()) +"元</div>",
                  "<div class='cftip aboutmax'>温馨提示：本期最高奖金限额"+Route.LotteryBonusTip(GameData.getInfo().id)+"元，请会员谨慎投注！</div>"
                ].join('');
              }(),
            buttons: [{
              label: '确定投注',
              action: function(dialog) {
                if($bList.length > 0) {
                  doSubmit(dialog);
                } else {
                  addToList(function() {
                    doSubmit(dialog);
                  },function() {
                    doSubmit(dialog);
                  });
                }
              }
            }, {
              label: '取消',
              action: function(dialog) {
                dialog.close();
              }
            }]
          });
          /*if($bList.length > 0) {
						doSubmit();
					} else {
						addToList(doSubmit);
					} */
				});
				button.find('[data-command="clear"]').unbind('click').click(function() {
					clear();
				});
				button.find('[data-command="chase"]').unbind('click').click(function() {
					LotteryChase.init();
				});
			}
		}
		return {init: init, add: add, clear: clear};
	}();

	// 初始化网页元素
	var initDocument = function() {
		$('.lottery-betting .lottery-opearation').empty();
    var main = $('.lottery-betting .lottery-opearation');
		var playGroups = $('<div class="play-groups">').append('<ul>');
		var playList = $('<div class="play-list">');
		var playHelp = $('<div class="play-help">');
		var playArea = $('<div class="play-area">');
		var adjustPrize = $('<div class="adjust-prize">');
		var playOptions = $('<div class="play-options">');
		var linfo = GameData.getInfo();
    // 初始化玩法组
		var initPlayGroups = function(index) {
			playGroups.find('ul').empty();
			$.each(Layout, function(i, group) {
				if ($.inArray(group.title,GameData.getMethodList())>-1) {
          var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
          // 点击效果
          thisGroup.find('a').off('click').click(function() {
            if(!$(this).hasClass('selected')) {
              playGroups.find('li > a.selected').removeClass('selected');
              $(this).addClass('selected');
              initPlayList(group.rows);
            }
          });
          playGroups.find('ul').append(thisGroup);
        }
			});
			playGroups.find('ul > li > a').eq(index).trigger('click');
		}
		// 初始化玩法列表
		var initPlayList = function(list) {
			playList.empty();
			$.each(list, function(i, rows) {
				var thisRow = $('<div class="row">');
				$.each(rows, function(j, row) {
					thisRow.append('<div class="label">' + row.title + '</div>');
					$.each(row.columns, function(k, column) {
						if ($.inArray(column.shortname,GameData.getMethods())>-1) {
              var thisColumn = $('<div class="column">').attr('data-method', column.shortname).html(column.showname);
              // 点击效果
              thisColumn.click(function() {
                if(!$(this).hasClass('selected')) {
                  playList.find('.row > .column').removeClass('selected');
                  $(this).addClass('selected');
                }
                LotteryOpenCode.init(linfo);
                $bData.method = column.shortname; // 用户选中的方法
                buildPlayHelp(column);
                buildPlayArea(column);
                buildAdjustPrize(adjustPrize, column);
                PlayOptions.update();
              });
              thisRow.append(thisColumn);
            }
					});
				});
				playList.append(thisRow);
			});
			playList.find('.row > .column').eq(0).trigger('click');
      if (typeof refreshigh !='undefined') {
        refreshigh();
      }
		}
		// 初始化帮助信息
		var buildPlayHelp = function(column) {
			playHelp.empty();
			playHelp.append('<div class="tips"><em class="icon m_orange" style="color:#f16d67;">&#xe71c;</em><span class="label" style="color:#f16d67;">玩法提示：</span>' + column.tips + '</div>');
			playHelp.append('<div class="help-info"><i class="arrow"></i><div class="example">' + column.example + '</div><div class="help">' + column.help + '</div></div>');
			playHelp.append('<div class="prize"><em class="icon m_orange" style="color:#f16d67;">&#xe69d;</em>当前玩法奖金<span data-field="prize">0.00</span>元</div>');
			var show = function(els, target) {
				var top = $(els).position().top;
				var left = $(els).position().left;
				playHelp.find(target).css({top: top + 32, left: left}).show();
			}
			var hide = function(target) {
				playHelp.find(target).hide();
			}
			playHelp.find('.tips').hover(function() {show(this, '.help-info')}, function() {hide('.help-info')});
		}
		// 初始化玩法区域
		var buildPlayArea = function(column) {
			playArea.empty();
			if(column.select) {
				buildSelectPlace(playArea, column.select);
			}
			if(column.textarea) {
				buildTextareaPlace(playArea, column.textarea);
			}
		}
		// 初始化选项栏
		buildPlayOptions(playOptions);
		// 加载
		main.append(playGroups);
		main.append(playList);
		main.append(playHelp);
		main.append(playArea);
		main.append(adjustPrize);
		main.append(playOptions);
		// 调用初始化方法
		initPlayGroups(0);
		// 初始化投注列表
		LotteryRecord.init();
	}

	// 初始化
	var init = function(data) {
		if (data) {
			$Lottery = data.lottery;
			$LotteryName = data.lotteryName;
			$DownCode = data.downCode;
			$FenDownCode = data.fenDownCode;
			$LiDownCode = data.liDownCode;
			$Method = data.method;
			$SysCode = data.sysCode;
			$SysUnitMoney = data.sysUnitMoney;
			$UserCode = data.userCode;
			$UserLp = data.userLp;
			// 计算得出
			$UserMaxCode = $UserCode - $DownCode;
			$UserMinCode = $UserCode - $UserLp * 20;
		}

		initDocument();
		LotteryRecord.clear();
	}

	var isLoading = false;
	var doSubmit = function(dialog) {
		var thisContent = $('.lottery-record');
		if(!isLoading) {
			if($bList.length == 0) {
				return App.alert('info', '提示消息', '投注列表没有订单！', 3000);
			}
			var list = [];
			$.each($bList, function(i, v) {
				list.push({
					lottery: v.lottery,
					issue: v.issue,
					method: v.method,
					content: v.content,
					model: v.model,
					multiple: v.multiple,
					code: v.code,
					compress: v.compress
				});
			});
			var data = { text: $.toJSON(list) };
			GameLotteryCtrl.addOrder({
				data: data,
				beforeSend: function() {
					isLoading = true;
					App.blockUI({
						target: thisContent,
						boxed: true
					});
				},
				success: function(response) {
					if(response.error == 0) {
						isLoading = false;
						App.unblockUI(thisContent);
						LotteryRecord.clear();
						App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
            if ($('.lottery-record .list table tr').size()==0) {
              $('.ks_btn[data-command="quick"]').removeClass('disabled');
            }
            dialog.close();
            $('[data-field="lotteryBalance"]').html(response.data);
						if (typeof RecordList != 'undefined') {
							RecordList.init();
						}
					}
					if(response.error == 1) {
						if ('116-05' == response.code) {
							setTimeout(function() {
								isLoading = false;
								App.unblockUI(thisContent);
								App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。');
							}, 10000);
						} else if ('116-06' == response.code) {
							window.location.href = 'http://game991.hbs991.com/js/game/lottery/index.html';
						} else {
							isLoading = false;
							App.unblockUI(thisContent);
              //App.alert('warning', '提示消息', response.message);
              if (response.message!='该用户已被冻结') {
                App.alert('warning', '提示消息', response.message);
              }else {
                App.alert('normal', '提示消息', '<div class="cm">正在提交，请稍等</div>',30000,'',function() {},function() {
                  App.alert('warning', '提示消息', '投注失败，请注意核对：网络超时');
                });
              }
						}
            dialog.close();
					}
				}
			});
		}
	}

	return {
		init: init,
		getConfig: function() {
			return {
				lottery: $Lottery,
				lotteryName: $LotteryName,
				downCode: $DownCode,
				fenDownCode: $FenDownCode,
				liDownCode: $LiDownCode,
				method: $Method,
				sysCode: $SysCode,
				sysUnitMoney: $SysUnitMoney,
				userCode: $UserCode,
				userLp: $UserLp,
				userMaxCode: $UserMaxCode,
				userMinCode: $UserMinCode
			}
		},
		bList: function() {
			return $bList;
		},
		clear: function() {
			LotteryRecord.clear();
		},
		addCallback: function(cb) {
			addCallback.push(cb);
		}
	}

}();
