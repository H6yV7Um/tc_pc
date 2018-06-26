/**
 * 彩票投注辅助
 */
var LotteryUtils = function() {
	/**
	 * 输入框类型检测
	 */
	var _inputCheck_Num = function(datasel, l, fun) {
		fun = $.isFunction(fun) ? fun : function(n, l) {
			return true;
		}
		var newsel = []; // 新的号码
		datasel = ArrayUtil.unique(datasel); // 去除重复
    //console.log(datasel);
		var regex = new RegExp('^([0-9]{2}\\s{1}){' + (l - 1) + '}[0-9]{2}$');
		$.each(datasel, function(i, n) {
			//console.log(regex.test(n) && fun(n, l),n,l,'_inputCheck_Num_inputCheck_Num');
      if(regex.test(n) && fun(n, l)) {
				newsel.push(n);
			}
		});
		return newsel;
	};

	var _numberCheck_Num = function(n) {
		var t = n.split(' ');
		var l = t.length;
		for (var i = 0; i < l; i++) {
			if (Number(t[i]) > 10 || Number(t[i]) < 1) {
				return false;
			}
			for (var j = i + 1; j < l; j++) {
				if (Number(t[i]) == Number(t[j])) {
					return false;
				}
			}
		}
		return true;
	}

	var _inputNumbers = function(type, datasel) {
		var nums = 0, tmp_nums = 1;
		// 输入号
		switch (type) {
		case 'qianerzxds':
			return _inputCheck_Num(datasel, 2, _numberCheck_Num).length;
		case 'qiansanzxds':
			return _inputCheck_Num(datasel, 3, _numberCheck_Num).length;
    case 'zx_q4_ds':
			return _inputCheck_Num(datasel, 4, _numberCheck_Num).length;
    case 'zx_q5_ds':
			return _inputCheck_Num(datasel, 5, _numberCheck_Num).length;
		// 选号
		case 'qiansanzxfs':
			if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0) {
				for (var i = 0; i < datasel[0].length; i++) {
					for (var j = 0; j < datasel[1].length; j++) {
						for (var k = 0; k < datasel[2].length; k++) {
							if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[1][j] != datasel[2][k]) {
								nums++;
							}
						}
					}
				}
			}
			break;
    case 'zx_q4_fs':
      if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0 && datasel[3].length > 0) {
				for (var i = 0; i < datasel[0].length; i++) {
					for (var j = 0; j < datasel[1].length; j++) {
						for (var k = 0; k < datasel[2].length; k++) {
							for (var l = 0; l < datasel[3].length; l++) {
                if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[0][i] != datasel[3][l] &&
                  datasel[1][j] != datasel[2][k] && datasel[1][j] != datasel[3][l] && datasel[2][k]!= datasel[3][l]
                  ) {
                  nums++;
                }
              }
						}
					}
				}
			}
			break;
    case 'zx_q5_fs':
      if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0 && datasel[3].length > 0) {
				for (var i = 0; i < datasel[0].length; i++) {
					for (var j = 0; j < datasel[1].length; j++) {
						for (var k = 0; k < datasel[2].length; k++) {
							for (var l = 0; l < datasel[3].length; l++) {
                for (var m = 0; m < datasel[4].length; m++) {
                  if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[0][i] != datasel[3][l] && datasel[0][i] != datasel[4][m] &&
                    datasel[1][j] != datasel[2][k] && datasel[1][j] != datasel[3][l] && datasel[1][j] != datasel[4][m] &&
                    datasel[2][k]!= datasel[3][l] && datasel[2][k] != datasel[4][m] && datasel[3][l] != datasel[4][m]
                    ) {
                    nums++;
                  }
                }
              }
						}
					}
				}
			}
			break;
    case 'qianerzxfs':
			if (datasel[0].length > 0 && datasel[1].length > 0) {
				for (var i = 0; i < datasel[0].length; i++) {
					for (var j = 0; j < datasel[1].length; j++) {
						if (datasel[0][i] != datasel[1][j]) {
							nums++;
						}
					}
				}
			}
			break;
		case 'dingweidan':
			var maxplace = 3;
			for (var i = 0; i < maxplace; i++) {
				nums += datasel[i].length;
			}
			break;
		case 'dwqian':
		case 'dwhou':
			var maxplace = 5;
			for (var i = 0; i < maxplace; i++) {
				nums += datasel[i].length;
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

	var _formatSelect_Num = function(datasel, m, n) {
		var newsel = new Array();
		if(!m) m = 0;
		if(!n) n = 0;
		for (var i = 0; i < m; i++) {
			newsel.push('-');
		}
		for (var i = 0; i < datasel.length; i++) {
			var f = datasel[i].toString().replace(/\,/g, ' ');
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
		case 'qianerzxds':
			datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num);
			break;
		case 'qiansanzxds':
			datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num);
      break;
		case 'zx_q4_ds':
			datasel = _inputCheck_Num(datasel, 4, _numberCheck_Num);
      break;
    case 'zx_q5_ds':
			datasel = _inputCheck_Num(datasel, 5, _numberCheck_Num);
      break;
		default:
			break;
		}
		return datasel.toString().replace(/\,/g, ';');
	}

	var _inputFormat = function(type, datasel) {
		switch (type) {
		case 'qianyi':
			return datasel[0].toString();
		case 'qianerzxfs':
		case 'qiansanzxfs':
		case 'zx_q4_fs':
		case 'zx_q5_fs':
		case 'dingweidan':
		case 'dwqian':
		case 'dwhou':
			return _formatSelect_Num(datasel);
		case 'qianerzxds':
		case 'qiansanzxds':
		case 'zx_q4_ds':
		case 'zx_q5_ds':
      //console.log(datasel,'tyyyyy',type);
			return _formatTextarea_Num(type, datasel);
		case 'dxd1':
		case 'dxd2':
		case 'dxd3':
		case 'dsd1':
		case 'dsd2':
		case 'dsd3':
    case 'lh_lh_1v10':
		case 'lh_lh_2v9':
		case 'lh_lh_3v8':
		case 'lh_lh_4v7':
		case 'lh_lh_5v6':
			return datasel[0].toString().replace(/\,/g , '|');
		default:
			break;
		}
	}

	return {
		inputNumbers: _inputNumbers,
		inputFormat: _inputFormat
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
	var $UserMaxCode; // 用户最高号
	var $UserMinCode; // 用户最低号

	var $bData = {}, $bList = [];

	// 布局
	var Layout = [{
		title: '前一',
		rows: [[{
			title: '前一',
			columns: [{
				showname: '前一',
				shortname: 'qianyi',
				realname: '[前一]',
				tips: '从第一位中选择1个以上号码。',
				example: '',
				help: '选号与开奖号码中第一位一致即中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}]
		}]]
	}, {
		title: '前二',
		rows: [[{
			title: '前二',
			columns: [{
				showname: '前二复式',
				shortname: 'qianerzxfs',
				realname: '[前二_复式]',
				tips: '从第一位、第二位、第三位中至少各选择1个号码。',
				example: '选号与开奖号码中第一位、第二位一致即中奖。',
				help: '',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}, {
				showname: '前二单式',
				shortname: 'qianerzxds',
				realname: '[前二_单式]',
				tips: '手动输入号码，至少输入2个二位数号码组成一注。',
				example: '',
				help: '如：选择01，02，<br>开奖号码的前2个号码顺序为01，02，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '前三',
		rows: [[{
			title: '前三',
			columns: [{
				showname: '前三复式',
				shortname: 'qiansanzxfs',
				realname: '[前三_复式]',
				tips: '从第一位、第二位、第三位中至少各选择1个号码。',
				example: '',
				help: '选号与开奖号码中第一位、第二位、第三位一致即中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第三位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}, {
				showname: '前三单式',
				shortname: 'qiansanzxds',
				realname: '[前三_单式]',
				tips: '手动输入号码，至少输入3个二位数号码组成一注。',
				example: '',
				help: '如：手动输入01 02 03，<br>开奖号码的前3个号码顺序为01 02 03，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '前四',
		rows: [[{
			title: '前四',
			columns: [{
				showname: '前四复式',
				shortname: 'zx_q4_fs',
				realname: '[前四_复式]',
				tips: '从第一位、第二位、第三位、第四位中至少各选择1个号码。',
				example: '',
				help: '选号与开奖号码中第一位、第二位、第三位、第四位一致即中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第三位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第四位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}, {
				showname: '前四单式',
				shortname: 'zx_q4_ds',
				realname: '[前四_单式]',
				tips: '手动输入号码，至少输入4个二位数号码组成一注。',
				example: '',
				help: '如：手动输入01 02 03 04，<br>开奖号码的前4个号码顺序为01 02 03 04，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '前五',
		rows: [[{
			title: '前五',
			columns: [{
				showname: '前五复式',
				shortname: 'zx_q5_fs',
				realname: '[前五_复式]',
				tips: '从第一位、第二位、第三位、第四位、第五位中至少各选择1个号码。',
				example: '',
				help: '选号与开奖号码中第一位、第二位、第三位、第四位、第五位一致即中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第三位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第四位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第五位',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}, {
				showname: '前五单式',
				shortname: 'zx_q5_ds',
				realname: '[前五_单式]',
				tips: '手动输入号码，至少输入5个二位数号码组成一注。',
				example: '',
				help: '如：手动输入01 02 03 04 05，<br>开奖号码的前5个号码顺序为01 02 03 04 05，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '定位胆',
		rows: [[{
			title: '定位胆',
			columns: [{
				showname: '第1~5名',
				shortname: 'dwqian',
				realname: '[定位胆_第1~5名]',
				tips: '在一、二、三、四、五名任意位置上任意选择1个或1个以上号码。',
				example: '',
				help: '选择的号码与开奖的号码相对应，即为中奖。如选择第一位购买号码为1,第一位开奖号码为1，即为中奖。',
				select: {
					layout: [{
						title: '第一名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第二名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第三名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第四名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第五名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}, {
				showname: '第6~10名',
				shortname: 'dwhou',
				realname: '[定位胆_第6~10名]',
				tips: '在第六、七、八、九、十名任意位置上任意选择1个或1个以上号码。',
				example: '',
				help: '选择的号码与开奖的号码相对应，即为中奖。如选择第六位购买号码为1,第六位开奖号码为1，即为中奖。',
				select: {
					layout: [{
						title: '第六名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第七名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第八名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第九名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}, {
						title: '第十名',
						balls: ['01','02','03','04','05','06','07','08','09','10'],
						tools: true
					}]
				}
			}]
		}]]
	}, {
		title: '龙虎',
		rows: [[{
			title: '龙虎',
			columns: [{
				showname: '1v10',
				shortname: 'lh_lh_1v10',
				realname: '[龙虎_第一名]',
				tips: '从“龙、虎”中至少选一个组成一注。',
				example: '',
				help: '从龙、虎中选择1个号码形态组成一注，冠军开奖号码大于第十名开奖号码，则为龙；冠军开奖号码小于第十名开奖号码，则为虎',
				select: {
					layout: [{
						title: '第一名',
						balls: ['龙','虎']
					}]
				}
			}, {
				showname: '2v9',
				shortname: 'lh_lh_2v9',
				realname: '[大小_第二名]',
				tips: '从“龙、虎”中至少选一个组成一注。',
				example: '',
				help: '从龙、虎中选择1个号码形态组成一注，亚军开奖号码大于第九名开奖号码，则为龙；亚军开奖号码小于第九名开奖号码，则为虎',
				select: {
					layout: [{
						title: '第二名',
						balls: ['龙','虎']
					}]
				}
			}, {
				showname: '3v8',
				shortname: 'lh_lh_3v8',
				realname: '[大小_第三名]',
				tips: '从“龙、虎”中至少选一个组成一注。',
				example: '',
				help: '从龙、虎中选择1个号码形态组成一注，季军开奖号码大于第八名开奖号码，则为龙；季军开奖号码小于第八名开奖号码，则为虎',
				select: {
					layout: [{
						title: '第三名',
						balls: ['龙','虎']
					}]
				}
			}, {
				showname: '4v7',
				shortname: 'lh_lh_4v7',
				realname: '[大小_第四名]',
				tips: '从“龙、虎”中至少选一个组成一注。',
				example: '',
				help: '从龙、虎中选择1个号码形态组成一注，第四名开奖号码大于第七名开奖号码，则为龙；第四名开奖号码小于第七名开奖号码，则为虎',
				select: {
					layout: [{
						title: '第四名',
						balls: ['龙','虎']
					}]
				}
			}, {
				showname: '5v6',
				shortname: 'lh_lh_5v6',
				realname: '[大小_第五名]',
				tips: '从“龙、虎”中至少选一个组成一注。',
				example: '',
				help: '从龙、虎中选择1个号码形态组成一注，第五名开奖号码大于第六名开奖号码，则为龙；第五名开奖号码小于第六名开奖号码，则为虎',
				select: {
					layout: [{
						title: '第五名',
						balls: ['龙','虎']
					}]
				}
			}]
		}]]
	}, {
		title: '大小',
		rows: [[{
			title: '大小',
			columns: [{
				showname: '第一名',
				shortname: 'dxd1',
				realname: '[大小_第一名]',
				tips: '选择第一名车号大小为一注。',
				example: '',
				help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
				select: {
					layout: [{
						title: '第一名',
						balls: ['大','小']
					}]
				}
			}, {
				showname: '第二名',
				shortname: 'dxd2',
				realname: '[大小_第二名]',
				tips: '选择第二名车号大小为一注。',
				example: '',
				help: '选择的号码与开奖号码相对应，即为中奖，如第二位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
				select: {
					layout: [{
						title: '第二名',
						balls: ['大','小']
					}]
				}
			}, {
				showname: '第三名',
				shortname: 'dxd3',
				realname: '[大小_第三名]',
				tips: '选择第三名车号大小为一注。',
				example: '',
				help: '选择的号码与开奖号码相对应，即为中奖，如第三位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
				select: {
					layout: [{
						title: '第三名',
						balls: ['大','小']
					}]
				}
			}]
		}]]
	}, {
		title: '单双',
		rows: [[{
			title: '单双',
			columns: [{
				showname: '第一名',
				shortname: 'dsd1',
				realname: '[单双_第一名]',
				tips: '选择第一名车号单双为一注。',
				example: '',
				help: '选择的号码与开奖号码相对应，即为中奖，如第一名购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
				select: {
					layout: [{
						title: '第一名',
						balls: ['单','双']
					}]
				}
			}, {
				showname: '第二名',
				shortname: 'dsd2',
				realname: '[单双_第二名]',
				tips: '选择第二名车号单双为一注。',
				example: '',
				help: '选择的号码与开奖号码相对应，即为中奖，如第二名购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
				select: {
					layout: [{
						title: '第二名',
						balls: ['单','双']
					}]
				}
			}, {
				showname: '第三名',
				shortname: 'dsd3',
				realname: '[单双_第三名]',
				tips: '选择第三名车号单双为一注。',
				example: '',
				help: '选择的号码与开奖号码相对应，即为中奖，如第三名购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
				select: {
					layout: [{
						title: '第三名',
						balls: ['单','双']
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
			var format = textarea.val().replace(/\,|\n/g, ';');
			var as = format.split(';');
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
			//$(this).val($(this).val().replace(/\,|\n/g, ';'));
      $(this).val($(this).val().replace(/[；.,。，、|]/g, ';'));
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
		//playOptions.append([
    //  '<div class="part-two">',
    //  '</div>'].join('')
    //);

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
      console.log($SysCode,$UserLp,$UserMinCode,'$UserMinCode');
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
    var lc = GameData.getConfig();
    if (parseInt($UserMaxCode,10)>parseInt(lc.maxBetCode,10)) {
      $UserMaxCode=parseInt(lc.maxBetCode,10)
    }
    var sop = {connect: 'lower', behaviour: 'snap', step: 2, start: start,range: {'max': $UserMaxCode, 'min': $UserMinCode}};
		//console.log(sop);
    slider.noUiSlider(sop);
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
			var mMoney = PlayOptions.model().money;
      var model =  PlayOptions.model();
      //console.log(method,'methodmethodmethod',mMoney);

			if(method) {
				var ps = method.bonus.split(',');
				var t = [];$('[data-command="chase"]').attr('code',$UserMinCode);
				for (var i = 0, j = ps.length; i < j; i++) {
					//var pm = (code() / Number(ps[i])) * ($SysUnitMoney / 2) * mMoney;
          var percent = Number(ps[i])/$UserMinCode;
          var pm = (code()*percent / Number(ps[i])) * Number(ps[i]) * ($SysUnitMoney / 2);
          console.log(pm,'ppppppppppmS');
					t.push(pm);
				}
				t.sort(function(a, b) {
					return Number(a) > Number(b) ? 1 : -1;
				});
        //console.log(t,'PlayHelpPlayHelpPlayHelpPlayHelpPlayHelp');

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
			if (String(method).indexOf('lh')>-1) {
        //龙虎拆单
        var splitcontent = content.split('|');

        for (i = 0; i < splitcontent.length; i++) {
          //console.log(num, multiple);
          var realnum = parseInt(num/splitcontent.length,10);
          total = multiple * realnum * $SysUnitMoney * PlayOptions.model().money;
          LotteryRecord.add(issue, method, compress, splitcontent[i], realnum, multiple, model, code, point, total, null);
        }
        if (typeof finalcall == 'function') {
          finalcall();
        }

      }else {
        LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, callback);
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
			//debugger;
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
				var addbuttton = button.find('[data-command="add"]');
        if (button.find('[data-command="add"]:not(.quickadd)').length==0) {
          addbuttton = $('.lottery-firepart [data-command="add"]');
        }
        addbuttton.unbind('click').click(function() {
					addToList(function() {
            $('.ks_btn[data-command="quick"]').addClass('disabled');
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
                  //addToList(doSubmit);
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
						doSubmit(dialog);
					} else {
						addToList(function() {
              doSubmit(dialog);
            },function() {
              doSubmit(dialog);
            });
            //addToList(doSubmit);
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

  // 组态和值高亮
  var zutypech = {
    "大小":"冠军",
    "和值":"冠亚和值",
    "单双":"冠军",
    "龙虎":"1v10"
  }

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
			var ishavePankou = [43];
      var pankouLink = {
        '43':'110'
      }
      $.each(Layout, function(i, group) {
        //console.log(GameData.getMethodList(),group.title);
				if ($.inArray(group.title,GameData.getMethodList())>-1) {
          var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
          // 点击效果
          thisGroup.find('a').off('click').click(function() {
            if(!$(this).hasClass('selected')) {
              playGroups.find('li > a.selected').removeClass('selected');
              $(this).addClass('selected');
              var topmname = $(this).text();
              if (typeof zutypech[topmname] !='undefined') {
                $('.lottery-open-list .code').removeClass('expand');
                $('.lottery-open-list .title .zutype').html(zutypech[topmname]).show();
                $('.lottery-open-list .list .zutype').show();
              }else {
                $('.lottery-open-list .code').addClass('expand');
                $('.lottery-open-list .title .zutype').html('').hide();
                $('.lottery-open-list .list .zutype').hide();
              }
              //LotteryOpenCode.init(linfo);
              initPlayList(group.rows);
            }
          });
          playGroups.find('ul').append(thisGroup);
        }
			});
      if ($.inArray(GameData.getInfo().id,ishavePankou)>-1) {
        if (typeof pankouLink[GameData.getInfo().id] !='undefined') {
          playGroups.find('ul').append($('<li><a class="linkpan" href="/yx/xjw/v/lottery/'+pankouLink[GameData.getInfo().id]+'.html" target="_blank">经典</a></li>'));  
          $('div.fixed-right a.classic').attr('href','/yx/xjw/v/lottery/'+pankouLink[GameData.getInfo().id]+'.html').css('display','block');
        }
      }
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
                var nowtag = $(this).text();
                var subtype;
                if (String(nowtag).indexOf('和值')>-1) {

                }else {
                  $('.lottery-open-list .code').addClass('expand');
                  $('.lottery-open-list .title .zutype').html('').hide();
                  $('.lottery-open-list .list .zutype').hide();
                }
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
            dialog.close();
						App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
            if ($('.lottery-record .list table tr').size()==0) {
              $('.ks_btn[data-command="quick"]').removeClass('disabled');
            }
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
                //dialog.close();
								App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。');
							}, 10000);
						} else if ('116-06' == response.code) {
							window.location.href = 'http://game991.hbs991.com/js/game/lottery/index.html';
						} else {
							isLoading = false;
							App.unblockUI(thisContent);
              //dialog.close();
							//App.alert('warning', '提示消息', response.message);
              if (response.message!='该用户已被冻结') {
                App.alert('warning', '提示消息', response.message);
              }else {
                App.alert('normal', '提示消息', '<div class="cm">正在提交，请稍等</div>',30000,'',function() {},function() {
                  App.alert('warning', '提示消息', '投注失败，请注意核对：网络超时');
                });
              }
						}
					}
				}
			});
		}
	}

	return {
    namespace:'pk10',
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
