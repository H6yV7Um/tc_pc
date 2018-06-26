/**
 * 彩票投注辅助
 */
var LotteryUtils = function() {
	/**
	 * 输入框类型检测
	 */
	var _inputCheck_Num = function(datasel, l, fun, sort) {
		fun = $.isFunction(fun) ? fun : function(n, l) {
			return true;
		}
		var newsel = []; // 新的号码
		if(sort) { // 如果需要号码排序
			var sortsel = [];
			$.each(datasel, function(i, n) {
				sortsel.push(n.split('').sort().toString().replace(/\,/g, ''));
			});
			datasel = sortsel;
		}
		datasel = ArrayUtil.unique(datasel); // 去除重复
		var regex = new RegExp('^[0-9]{' + l + '}$');
		$.each(datasel, function(i, n) {
			if(regex.test(n) && fun(n, l)) {
				newsel.push(n);
			}
		});
		return newsel;
	}

	/**
	 * 和值检测
	 */
	var _HHZXCheck_Num = function(n, l) {
		var a = new Array();
		if (l == 2) {//两位
			a = [ '00', '11', '22', '33', '44', '55', '66', '77', '88', '99' ];
		} else {//三位[默认]
			a = [ '000', '111', '222', '333', '444', '555', '666', '777', '888', '999' ];
		}
		return $.inArray(n, a) == -1 ? true : false;
	};

	/**
	 * 多少注计算
	 */
	var _inputNumbers = function(type, datasel) {
		var nums = 0, tmp_nums = 1;
		// 输入号
		switch (type) {
		case 'sanxzhixds':
			nums = _inputCheck_Num(datasel, 3).length;
			break;
		case 'sanxhhzx':
			nums = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true).length;
			break;
		case 'sm_zux_hz':
      var cc = {1 : 1,2 : 2,3 : 2,4 : 4,5 : 5,6 : 6,7 : 8,8 : 10,9 : 11,10 : 13,11 : 14,12 : 14,13 : 15,14 : 15,15 : 14,16 : 14,17 : 13,18 : 11,19 : 10,20 : 8,21 : 6,22 : 5,23 : 4,24 : 2,25 : 2,26 : 1};
		  for (var i = 0; i < datasel[0].length; i++) {
		    nums += cc[parseInt(datasel[0][i], 10)];
			}
		  break;
    case 'exzhixdsh':
		case 'exzhixdsq':
			nums = _inputCheck_Num(datasel, 2).length;
			break;
		case 'exzuxdsh':
		case 'exzuxdsq':
			nums = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true).length;
			break;
		case 'sanxzs':
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				// 组三必须选两位或者以上
				if (s > 1) {
					nums += s * (s - 1);
				}
			}
			break;
		case 'sanxzl':
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				// 组六必须选三位或者以上
				if (s > 2) {
					nums += s * (s - 1) * (s - 2) / 6;
				}
			}
			break;
		case 'sanxzhixhz':
		case 'exzhixhzh':
		case 'exzhixhzq':
			var cc = {0 : 1,1 : 3,2 : 6,3 : 10,4 : 15,5 : 21,6 : 28,7 : 36,8 : 45,9 : 55,10 : 63,11 : 69,12 : 73,13 : 75,14 : 75,15 : 73,16 : 69,17 : 63,18 : 55,19 : 45,20 : 36,21 : 28,22 : 21,23 : 15,24 : 10,25 : 6,26 : 3,27 : 1};
			if(type == 'exzhixhzh' || type == 'exzhixhzq') {
				cc = {0 : 1,1 : 2,2 : 3,3 : 4,4 : 5,5 : 6,6 : 7,7 : 8,8 : 9,9 : 10,10 : 9,11 : 8,12 : 7,13 : 6,14 : 5,15 : 4,16 : 3,17 : 2,18 : 1};
			}
		    for (var i = 0; i < datasel[0].length; i++) {
		    	nums += cc[parseInt(datasel[0][i], 10)];
			}
		    break;
    case 'bdd_bdd_bdd2':
      var dpsel = datasel[0];
      if (dpsel.length>0) {
        var autosumsols = Array.apply(null, {length: dpsel.length}).map(Number.call, Number);
        //console.log(autosumsols,'autosumsolsautosumsols');
        if (autosumsols.length>1) {
          cmb = Combinatorics.combination(autosumsols,2);
          nums = cmb.length;  
        }else {
          nums = 0;  
        }
      }else {
        nums = 0;
      }
      break;
		case 'dw': //定位胆所有在一起特殊处理
			var maxplace = 3;
			for (var i = 0; i < maxplace; i++) {
				nums += datasel[i].length;
			}
			break;
		case 'exzuxfsh':
		case 'exzuxfsq':
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				// 二码不定位必须选两位或者以上
				if (s > 1) {
					nums += s * (s - 1) / 2;
				}
			}
			break;
		default:
			var maxplace = 0;
			switch (type) {
			case "sanxzhixfs":
				maxplace = 3;
				break;
			case "exzhixfsh":
			case "exzhixfsq":
				maxplace = 2;
				break;
      case '3d_dxds_h2':
      case '3d_dxds_q2':
        maxplace = 2;
        break;
			case "yimabdw":
				maxplace = 1;
				break;
			}
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

	var _formatSelect_Num = function(datasel, m, n) {
		var newsel = new Array();
		if(!m) m = 0;
		if(!n) n = 0;
		for (var i = 0; i < m; i++) {
			newsel.push('-');
		}
		for (var i = 0; i < datasel.length; i++) {
			var f = datasel[i].toString().replace(/\,/g, '');
			if(f == '') {
				newsel.push('-');
			} else {
				newsel.push(f);
			}
		}
		for (var i = 0; i < n; i++) {
			newsel.push('-');
		}
		return newsel.toString();
	}

	var _formatTextarea_Num = function(type, datasel) {
		switch (type) {
		case 'sanxzhixds':
			datasel = _inputCheck_Num(datasel, 3);
			break;
		case 'sanxhhzx':
			datasel = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true);
			break;
		case 'exzhixdsh':
		case 'exzhixdsq':
			datasel = _inputCheck_Num(datasel, 2);
			break;
		case 'exzuxdsh':
		case 'exzuxdsq':
			datasel = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true);
			break;
		default:
			break;
		}
		return datasel.toString().replace(/\,/g, ' ');
	}

	var _inputFormat = function(type, datasel) {
		switch (type) {
		case 'sanxzhixds':
		case 'sanxhhzx':
		case 'exzhixdsh':
		case 'exzhixdsq':
		case 'exzuxdsh':
		case 'exzuxdsq':
			return _formatTextarea_Num(type, datasel);
		case 'sanxzs':
		case 'sanxzl':
		case 'exzuxfsh':
		case 'exzuxfsq':
		case 'yimabdw':
		case 'sanxzhixhz':
		case 'exzhixhzh':
		case 'exzhixhzq':
    case 'sm_zux_hz':
			return datasel.toString();
		case 'sanxzhixfs':
			return _formatSelect_Num(datasel);
		case 'exzhixfsh':
			return _formatSelect_Num(datasel, 1);
		case 'exzhixfsq':
			return _formatSelect_Num(datasel, 0, 1);
		default:
			return _formatSelect_Num(datasel);
		}
	}

	var _typeFormat = function(code) {
		var a = [code[0], code[1], code[2]];
		var _a = a.uniquelize();
		var arr = [];
		if(_a.length == 1) arr[0] = '豹子';
		if(_a.length == 2) arr[0] = '组三';
		if(_a.length == 3) arr[0] = '组六';
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
		title: '三码',
		rows: [[{
			title: '直选',
			columns: [{
				showname: '复式',
				shortname: 'sanxzhixfs',
				realname: '[三码_复式]',
				tips: '从个、十、百位各选一个号码组成一注。',
				example: '',
				help: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
				select: {
					layout: [{
						title: '百位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}, {
						title: '十位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}, {
						title: '个位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'sanxzhixds',
				realname: '[三码_单式]',
				tips: '手动输入号码，至少输入1个三位数号码组成一注。',
				example: '',
				help: '手动输入一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
				textarea: {}
			}, {
				showname: '直选和值',
				shortname: 'sanxzhixhz',
				realname: '[三码_和值]',
				tips: '从0-27中任意选择1个或1个以上号码',
				example: '',
				help: '所选数值等于开奖号码的三个数字相加之和，即为中奖。',
				select: {
					layout: [{
						balls: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
						tools: true,
						cls: 'hz'
					}]
				}
			}]
		}], [{
			title: '组选',
			columns: [{
				showname: '组三',
				shortname: 'sanxzs',
				realname: '[三码_组三]',
				tips: '从0-9中任意选择2个或2个以上号码。',
				example: '',
				help: '从0-9中选择2个数字组成两注，所选号码与开奖号码相同，且顺序不限，即为中奖。',
				select: {
					layout: [{
						title: '组三',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '组六',
				shortname: 'sanxzl',
				realname: '[三码_组六]',
				tips: '从0-9中任意选择3个或3个以上号码。',
				example: '',
				help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码相同，顺序不限，即为中奖。',
				select: {
					layout: [{
						title: '组六',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '混合组选',
				shortname: 'sanxhhzx',
				realname: '[后三码_混合组选]',
				tips: '手动输入号码，至少输入1个三位数号码。',
				example: '',
				help: '键盘手动输入购买号码，3个数字为一注，开奖号码符合组三或组六均为中奖。',
				textarea: {}
			}, {
				showname: '组选和值',
				shortname: 'sm_zux_hz',
				realname: '[后三码_混合和值]',
				tips: '从1-26中任意选择1个以上号码。',
				example: '如：选择6，<br>开奖号码为114中组三奖，<br>开奖号码为015中组六奖。',
				help: '所选数值等于开奖号码的三个数字相加之和，即为中奖。',
				select: {
          layout: [{
            balls: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
            tools: true,
            cls: 'hz'
          }]
        }
			}]
		}]]
	}, {
		title: '二码',
		rows: [[{
			title: '后二码　直选',
			columns: [{
				showname: '复式',
				shortname: 'exzhixfsh',
				realname: '[后二码_直选_复式]',
				tips: '从十、个位各选一个号码组成一注。',
				example: '',
				help: '从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
				select: {
					layout: [{
						title: '十位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}, {
						title: '个位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'exzhixdsh',
				realname: '[后二码_直选_单式]',
				tips: '手动输入号码，至少输入1个两位数号码。',
				example: '',
				help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。',
				textarea: {}
			}, {
				showname: '直选和值',
				shortname: 'exzhixhzh',
				realname: '[后二码_直选_和值]',
				tips: '从0-18中任意选择1个或1个以上的和值号码。',
				example: '',
				help: '所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。',
				select: {
					layout: [{
						balls: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
						tools: false,
						cls: 'hz'
					}]
				}
			}]
		}, {
			title: '组选',
			columns: [{
				showname: '复式',
				shortname: 'exzuxfsh',
				realname: '[后二码_组选_复式]',
				tips: '从0-9中任意选择2个或2个以上号码。',
				example: '',
				help: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。',
				select: {
					layout: [{
						title: '组选',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'exzuxdsh',
				realname: '[后二码_组选_单式]',
				tips: '手动输入号码，至少输入1个两位数号码。',
				example: '',
				help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。',
				textarea: {}
			}]
		}], [{
			title: '前二码　直选',
			columns: [{
				showname: '复式',
				shortname: 'exzhixfsq',
				realname: '[前二码_直选_复式]',
				tips: '从百、十位各选一个号码组成一注。',
				example: '',
				help: '从百位、十位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。',
				select: {
					layout: [{
						title: '百位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}, {
						title: '十位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'exzhixdsq',
				realname: '[前二码_直选_单式]',
				tips: '手动输入号码，至少输入1个两位数号码。',
				example: '',
				help: '手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。',
				textarea: {}
			}, {
				showname: '直选和值',
				shortname: 'exzhixhzq',
				realname: '[前二码_直选_和值]',
				tips: '从0-18中任意选择1个或1个以上的和值号码。',
				example: '',
				help: '所选数值等于开奖号码的百位、十位二个数字相加之和，即为中奖。',
				select: {
					layout: [{
						balls: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
						tools: false,
						cls: 'hz'
					}]
				}
			}]
		}, {
			title: '组选',
			columns: [{
				showname: '复式',
				shortname: 'exzuxfsq',
				realname: '[前二码_组选_复式]',
				tips: '从0-9中任意选择2个或2个以上号码。',
				example: '',
				help: '从0-9中选2个号码组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，即中奖。',
				select: {
					layout: [{
						title: '组选',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'exzuxdsq',
				realname: '[前二码_组选_单式]',
				tips: '手动输入号码，至少输入1个两位数号码。',
				example: '',
				help: '手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，顺序不限，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '定位胆',
		rows: [[{
			title: '定位胆',
			columns: [{
				showname: '定位胆',
				shortname: 'dw',
				realname: '定位胆',
				tips: '在百位，十位，个位任意位置上任意选择1个或1个以上号码。',
				example: '',
				help: '从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
				select: {
					layout: [{
						title: '百位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}, {
						title: '十位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}, {
						title: '个位',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				}
			}]
		}]]
	}, {
		title: '不定胆',
		rows: [[{
			title: '不定胆',
			columns: [{
				showname: '一码不定胆',
				shortname: 'yimabdw',
				realname: '[不定胆_后三一码]',
				tips: '从0-9中任意选择1个以上号码。',
				example: '',
				help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '不定胆',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				},
				bwd: true
			},{
				showname: '二码不定胆',
				shortname: 'bdd_bdd_bdd2',
				realname: '[不定胆_后三二码]',
				tips: '从0-9中任意选择2个以上号码。',
				example: '如：选择二码不定位45，<br>开出45*、54*、*54、*45、5*4、4*5，即为中奖。',
				help: '从0-9中选择2个号码，每注由2个号码组成，只要开奖结果中包含所选2个号码，即为中奖。',
				select: {
					layout: [{
						title: '不定胆',
						balls: [0,1,2,3,4,5,6,7,8,9],
						tools: true
					}]
				},
				bwd: true
			}]
		}]]
	}, {
		title: '大小单双',
		rows: [[{
			title: '大小单双',
			columns: [{
				showname: '后二大小单双',
				shortname: '3d_dxds_h2',
				realname: '[不定胆_后三一码]',
				tips: '从0-9中任意选择1个以上号码。',
				example: '',
				help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码包含所选号码，即为中奖。',
				select: {
          layout: [{
            title: '十位',
            balls: ['大', '小', '单', '双']
          }, {
            title: '个位',
            balls: ['大', '小', '单', '双']
          }]
        }
			},{
				showname: '前二大小单双',
				shortname: '3d_dxds_q2',
				realname: '[不定胆_后三二码]',
				tips: '从0-9中任意选择1个以上号码。',
				example: '',
				help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码包含所选号码，即为中奖。',
				select: {
          layout: [{
            title: '万位',
            balls: ['大', '小', '单', '双']
          }, {
            title: '千位',
            balls: ['大', '小', '单', '双']
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
				balls.find('ul').append('<li><a data-val="' + ball + '">' + ball + '</a></li>');
			});
			balls.find('ul > li > a').unbind('click').click(function() {
				if($(this).hasClass('selected')) {
					$(this).removeClass('selected');
				} else {
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
			var arr = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37];
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
			var arr = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38];
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
			//$(this).val($(this).val().replace(/[；.,。，、|]/g, ';'));
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
		playOptions.append([
      '<div class="part-one">',

      '<div class="model" style="margin-right:15px;"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
			'<div class="multiple"><input name="multiple" type="text" value="1"></div><div class="label">倍</div>',
      '<div class="adjust-prize"></div>',
			  '<div class="label">已选 <span class="text-money" data-field="num">0</span> 注</div>',
      '<div class="label">共 <span class="text-money" data-field="total">0.000</span> 元</div>',
      '</div>'].join('')
    );
    //playOptions.append('<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注，倍数</div>');
		//playOptions.append('<div class="multiple"><input name="multiple" type="text" value="1"></div>');
		//playOptions.append('<div class="label">模式</div>');
		//playOptions.append('<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>');
		//playOptions.append('<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>');
		//playOptions.append('<div class="button"><a data-command="add">添加到投注列表</a></div>');

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
				if(val > 9999) $(this).val(9999);
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
					if(val > 9999) val = 9999;
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

				AdjustPrize.slider();
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
    var lc = GameData.getConfig();
    if (parseInt($UserMaxCode,10)>parseInt(lc.maxBetCode,10)) {
      $UserMaxCode=parseInt(lc.maxBetCode,10)
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
        $('[data-command="chase"]').attr('code',$UserMinCode);
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
				console.log('单挑玩法',callback);
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
		var add = function(issue, method, compress, content, num, multiple, model, code, point, total, isAll, callback) {
			var tbody = els().find('.list table > tbody');
			var tr = $('<tr>');
      var cnmodel = function(m) {
        var cnm = {'yuan':'元','jiao':'角','fen':'分','li':'厘'}
        return cnm[m];
      }
      tr.data('c',content);
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
        var addbuttton = button.find('[data-command="add"]');
        if (button.find('[data-command="add"]:not(.quickadd)').length==0) {
          addbuttton = $('.lottery-firepart [data-command="add"]');
        }
        //console.log(button.find('[data-command="add"]'),'buttonbutton');
				addbuttton.unbind('click').click(function() {
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
                  console.log('111111111111');
                  doSubmit(dialog);
                } else {
                  console.log('22222222222',doSubmit);
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
					}*/
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

    var zutypech = {
      "三码":"三码组态"
    }

    var zutypemethod = function(textkey) {
      //console.log(textkey,'textkeytextkey');

      var chkdtwuxin = function(str) {
        var ar = str.split(',');
        //console.log(_.sortBy(ar));
        if (str==null) {return '';  }
        if (hasDuplicates(ar,0)){return '组120'}
        if (hasDuplicates(ar,1)){return '组60'}
        if (hasDuplicates(ar,2)){return '组30'}
        if (hasDuplicates(ar,2)){return '组20'}
        if (hasDuplicates(ar,3)){return '组10'}
        if (hasDuplicates(ar,3)){return '组5'}
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
        if (hasDuplicates(ar,2)){return '组6'}
        if (hasDuplicates(ar,2)){return '组4'}
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
      if (textkey=="三码") {
        return chksan1;
      }
      if (textkey=="和值") {
        return chkthree;
      }
      return undefined
    }

    var hasDuplicates = function(a,len) {
      return _.uniq(a).length !== a.length && (a.length-_.uniq(a).length==len);
    }
    var linfo = GameData.getInfo();
    // 初始化玩法组
		var initPlayGroups = function(index) {
			playGroups.find('ul').empty();
			$.each(Layout, function(i, group) {
        //console.log(GameData.getMethodList(),'GameData.getMethodListGameData.getMethodList',group.title);
				if ($.inArray(group.title.substring(0,4),GameData.getMethodList())>-1) {
          var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
          // 点击效果
          thisGroup.find('a').off('click').click(function() {
            if(!$(this).hasClass('selected')) {
              playGroups.find('li > a.selected').removeClass('selected');
              $(this).addClass('selected');
              var topmname = $(this).text();
              //console.log(topmname,'topmnametopmname');

              if (zutypech[$(this).text()]!=null) {
                $('.lottery-open-list .code').removeClass('expand');
                $('.lottery-open-list .title .zutype').html(zutypech[$(this).text()]).show();
                $('.lottery-open-list .list .zutype').show();
              }else {
                $('.lottery-open-list .code').addClass('expand');
                $('.lottery-open-list .title .zutype').html('').hide();
                $('.lottery-open-list .list .zutype').hide();
              }
              var nowmethod = zutypemethod(topmname);
              $('.lottery-open-list .list .zutype').each(function(i,el) {
                if (typeof nowmethod !='undefined') {
                  $(el).html(nowmethod($(el).attr('rel')))
                }
              })
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
              if (String(column.showname).indexOf('大小')>-1 || String(column.showname).length>4) {
                thisColumn.addClass('bigcolumn');   
              }
              thisColumn.click(function() {
                if(!$(this).hasClass('selected')) {
                  playList.find('.row > .column').removeClass('selected');
                  $(this).addClass('selected');
                }
                var nowtag = $(this).text();
                var subtype;
                if (String(nowtag).indexOf('和值')>-1) {
                  subtype = String($(this).siblings('.label').first().text()).replace('星　直选','').replace('直选','').replace('组选','');
                  if (subtype=='') {
                    subtype = '和值';
                  }
                  if (subtype=='三码') {
                    subtype = subtype+'和值';
                  }
                  $('.lottery-open-list .code').removeClass('expand');
                  $('.lottery-open-list .title .zutype').html(nowtag).show();
                  $('.lottery-open-list .list .zutype').show();
                }else {
                  sectype = String($(this).siblings('.label').first().text()).replace('星　直选','').replace('直选','').replace('组选','')
                  subtype = playGroups.find('li > a.selected').text();
                  //console.log(subtype,sectype,'非和值');

                  if (subtype!=sectype && sectype!='') {
                    subtype = sectype;
                  }
                  //console.log(subtype,sectype,'other subtypesubtype');
                  if (typeof zutypech[subtype] !='undefined') {
                    $('.lottery-open-list .title .zutype').html(zutypech[subtype]).show();
                  }
                }
                var nowmethod = zutypemethod(subtype);
                $('.lottery-open-list .list .zutype').each(function(i,el) {
                  if (typeof nowmethod !='undefined') {
                    $(el).html(nowmethod($(el).attr('rel')))
                  }
                });
                LotteryOpenCode.init(linfo);
                $bData.method = column.shortname; // 用户选中的方法
                $bData.compress = column.compress; // 是否加密传输
                buildPlayHelp(column);
                buildPlayArea(column);
                buildAdjustPrize($('.lottery-betting .lottery-opearation .adjust-prize'), column);
                //buildAdjustPrize(adjustPrize, column);
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
			playHelp.append('<div class="tips"><em class="icon m_orange" style="color:#f16d67;">&#xe71c;</em><span class="label" style="color:#f16d67;">玩法示意：</span>' + column.tips + '</div>');
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
		//main.append(adjustPrize);
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
		console.log(!isLoading,'doSubmitdoSubmitdoSubmitdoSubmit');
    if(!isLoading) {
			if($bList.length == 0) {
				return App.alert('info', '提示消息', '投注列表没有订单！', 3000);
			}
			var list = [];
      //console.log($bList,'$bList$bList$bList');
      //setTimeout(function() {
        //console.log($bList.length,'$bList$bList.len');
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

      //},100);
      //_.delay(function(text) {
      //  //console.log(text);
      //}, 1000, 'later');
      //
      var fireOrder = function(list,dialog) {
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
              $('[data-field="lotteryBalance"]').html(response.data);
              dialog.close();
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
                window.location.href = './index.html';
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
      fireOrder(list,dialog);
      //fireOrder(list,dialog);
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
