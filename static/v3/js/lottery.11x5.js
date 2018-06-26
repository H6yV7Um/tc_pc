/**
 * 彩票投注辅助
 */
var LotteryUtils = function() {
	/**
	 * 输入框类型检测
	 */
	var _inputCheck_Num = function(datasel, l, fun, sort) {
		//console.log(datasel);
		fun = $.isFunction(fun) ? fun : function(n, l) {
			return true;
		}
		//LotteryUtils.inputFormat()
		var newsel = []; // 新的号码
		// if(sort) { // 如果需要号码排序
		// 	var sortsel = [];
		// 	$.each(datasel, function(i, n) {
		// 		let sn = n.split(' ');
		// 		if(sn.length < 2){
		// 			sn = ['15 51'];
		// 		}else{
		// 			sortsel.push(sn.sort().toString().replace(/\,/g, ''));
		// 		}
		// 	});
		// 	datasel = sortsel;
		// }
    datasel = ArrayUtil.unique(datasel); // 去除重复
    //console.log(datasel);
    //console.log('^([0-9]{2}\\s{1}){' + (l - 1) + '}[0-9]{2}$');

		var regex = new RegExp('^([0-9]{2}\\s{1}){' + (l - 1) + '}[0-9]{2}$');
		var regex1 = new RegExp('^([0-9]{2}){' + (l - 1) + '}[0-9]{2}$');
    $.each(datasel, function(i, n) {
			//console.log(regex.test(n),regex1.test(n),n);

      if((regex.test(n) || regex1.test(n)) && fun(n, l)) {
				if (!regex1.test(n)) {
          newsel.push(n);
        }else {
          newsel.push(n.replace(/(\d\d)(?!\b)/g, '$1 '));
        }

			}
		});
		return newsel;
	}

	/**
	 * 输入框号码检测
	 */
	var _numberCheck_Num = function(n) {
		var t = n.split(' ');
		var l = t.length;
    //console.log(t.length==0 && String(n).length % 2 == 0,t.length,String(n).length,'dfgggggggggggg');
    if (t.length==1 && String(n).length % 2 == 0) {
      n = n.replace(/(\d\d)(?!\b)/g, '$1 ');
      t = n.split(' ');
      l = t.length;
    }
		//console.log(t)
    //console.log(n,t,l);
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
		// for (var i = 0; i < l; i++) {
		// 	if (Number(t[i]) > 11 || Number(t[i]) < 1) {
		// 		return false;
		// 	}
		// 	for (var j = i + 1; j < l; j++) {
		// 		if (Number(t[i]) == Number(t[j])) {
		// 			return false;
		// 		}
		// 	}
		// }
		return true;
	}

	/**
	 * 多少注计算
	 */
	var _inputNumbers = function(type, datasel) {
		var nums = 0;
		switch (type) {
		// 这里验证输入框类型
		case 'sanmzhixdsq':
			return _inputCheck_Num(datasel, 3, _numberCheck_Num).length;
		case 'sanmzuxdsq':
			return _inputCheck_Num(datasel, 3, _numberCheck_Num, true).length;
		case 'ermzhixdsq':
			return _inputCheck_Num(datasel, 2, _numberCheck_Num).length;
		case 'ermzuxdsq':
			return _inputCheck_Num(datasel, 2, _numberCheck_Num, true).length;
		case 'rx1ds':
			return _inputCheck_Num(datasel, 1, _numberCheck_Num, true).length;
		case 'rx2ds':
			return _inputCheck_Num(datasel, 2, _numberCheck_Num, true).length;
		case 'rx3ds':
			return _inputCheck_Num(datasel, 3, _numberCheck_Num, true).length;
		case 'rx4ds':
			return _inputCheck_Num(datasel, 4, _numberCheck_Num, true).length;
		case 'rx5ds':
			return _inputCheck_Num(datasel, 5, _numberCheck_Num, true).length;
		case 'rx6ds':
			return _inputCheck_Num(datasel, 6, _numberCheck_Num, true).length;
		case 'rx7ds':
			return _inputCheck_Num(datasel, 7, _numberCheck_Num, true).length;
		case 'rx8ds':
			return _inputCheck_Num(datasel, 8, _numberCheck_Num, true).length;
		// 这里验证选号类型
		case 'sanmzhixfsq':
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
		case 'sanmzuxfsq':
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 2) {
					nums += s * (s - 1) * (s - 2) / 6;
				}
			}
			break;
		case 'ermzhixfsq':
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
		case 'ermzuxfsq':
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 1) {
					nums += s * (s - 1) / 2;
				}
			}
			break;
		case 'bdw':
		case 'dwd':
		case 'dds':
		case 'czw':
		case 'rx1fs': // 任选1中1
			var maxplace = 0;
			if('bdw' == type || 'dds' == type || 'czw' == type || 'rx1fs' ==type) {
				maxplace = 1;
			}
			if('dwd' == type) {
				maxplace = 3;
			}
			for (var i = 0; i < maxplace; i++) {
				nums += datasel[i].length;
			}
			break;
		case 'rx2fs': // 任选2中2
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 1) {
					nums += s * (s - 1) / 2;
				}
			}
			break;
		case 'rx3fs': // 任选3中3
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 2) {
					nums += s * (s - 1) * (s - 2) / 6;
				}
			}
			break;
		case 'rx4fs': // 任选4中4
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 3) {
					nums += s * (s - 1) * (s - 2) * (s - 3) / 24;
				}
			}
			break;
		case 'rx5fs': // 任选5中5
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 4) {
					nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120;
				}
			}
			break;
		case 'rx6fs': // 任选6中6
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 5) {
					nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) / 720;
				}
			}
			break;
		case 'rx7fs': // 任选7中7
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 6) {
					nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) / 5040;
				}
			}
			break;
		case 'rx8fs': // 任选8中8
			var maxplace = 1;
			for (var i = 0; i < maxplace; i++) {
				var s = datasel[i].length;
				if (s > 7) {
					nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) * (s - 7) / 40320;
				}
			}
			break;
		default:
			break;
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
		case 'sanmzhixdsq':
			datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num);
		case 'sanmzuxdsq':
			datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num, true);
      //console.log(datasel,'dataseldatasel');

			break;
		case 'ermzhixdsq':
			datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num)
		case 'ermzuxdsq':
			datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num, true);
			break;
		case 'rx1ds':
			datasel = _inputCheck_Num(datasel, 1, _numberCheck_Num, true);
			break;
		case 'rx2ds':
			datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num, true);
			break;
		case 'rx3ds':
			datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num, true);
			break;
		case 'rx4ds':
			datasel = _inputCheck_Num(datasel, 4, _numberCheck_Num, true);
			break;
		case 'rx5ds':
			datasel = _inputCheck_Num(datasel, 5, _numberCheck_Num, true);
			break;
		case 'rx6ds':
			datasel = _inputCheck_Num(datasel, 6, _numberCheck_Num, true);
			break;
		case 'rx7ds':
			datasel = _inputCheck_Num(datasel, 7, _numberCheck_Num, true);
			break;
		case 'rx8ds':
			datasel = _inputCheck_Num(datasel, 8, _numberCheck_Num, true);
			break;
		default:
			break;
		}
		return datasel.toString().replace(/\,/g, ';');
	}

	var _inputFormat = function(type, datasel) {
    //console.log(type,'type');

		switch (type) {
		case 'sanmzhixfsq':
		case 'dwd':
			return _formatSelect_Num(datasel, 0, 2);
		case 'ermzhixfsq':
			return _formatSelect_Num(datasel, 0, 3);
		case 'sanmzuxfsq':
		case 'ermzuxfsq':
		case 'bdw':
		case 'rx1fs':
		case 'rx2fs':
		case 'rx3fs':
		case 'rx4fs':
		case 'rx5fs':
		case 'rx6fs':
		case 'rx7fs':
		case 'rx8fs':
			return datasel[0].toString();
		case 'sanmzhixdsq':
		case 'sanmzuxdsq':
		case 'ermzhixdsq':
		case 'ermzuxdsq':
		case 'rx1ds':
		case 'rx2ds':
		case 'rx3ds':
		case 'rx4ds':
		case 'rx5ds':
		case 'rx6ds':
		case 'rx7ds':
		case 'rx8ds':
			return _formatTextarea_Num(type, datasel);
		case 'dds':
			return datasel[0].toString().replace(/\,/g , '|');
		case 'czw':
			return datasel[0].toString();
		default:
			break;
		}
	}

	var _typeFormat = function(code) {
		code.sort();
		var arr = [];
		var j = 0, o = 0, z = 0;
		$.each(code, function(idx, val) {
			var num = parseInt(val);
			if(num%2 == 0) {
				o++;
			} else {
				j++;
			}
			if(idx == 2) {
				z = num;
			}
		});
		arr[0] = j + '单' + o + '双';
		arr[1] = z;
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
			title: '前三直选',
			columns: [{
				showname: '复式',
				shortname: 'sanmzhixfsq',
				realname: '[前三直选_复式]',
				tips: '从第一位、第二位、第三位中至少各选择1个号码。',
				example: '',
				help: '从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}, {
						title: '第三位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'sanmzhixdsq',
				realname: '[前三直选_单式]',
				tips: '手动输入号码，至少输入1个三位数号码组成一注。',
				example: '',
				help: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
				textarea: {}
			}]
		}], [{
			title: '前三组选',
			columns: [{
				showname: '复式',
				shortname: 'sanmzuxfsq',
				realname: '[前三组选_复式]',
				tips: '从0-9中任意选择3个或3个以上号码。',
				example: '',
				help: '从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
				select: {
					layout: [{
						title: '选号',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'sanmzuxdsq',
				realname: '[前三组选_单式]',
				tips: '手动输入号码，至少输入1个三位数号码组成一注。',
				example: '',
				help: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '二码',
		rows: [[{
			title: '前二直选',
			columns: [{
				showname: '复式',
				shortname: 'ermzhixfsq',
				realname: '[前二直选_复式]',
				tips: '从第一位、第二位中至少各选择1个号码。',
				example: '',
				help: '从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'ermzhixdsq',
				realname: '[前二直选_单式]',
				tips: '手动输入号码，至少输入1个两位数号码组成一注。',
				example: '',
				help: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
				textarea: {}
			}]
		}], [{
			title: '前二组选',
			columns: [{
				showname: '复式',
				shortname: 'ermzuxfsq',
				realname: '[前二组选_复式]',
				tips: '从0-9中任意选择2个或2个以上号码。',
				example: '',
				help: '从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
				select: {
					layout: [{
						title: '选号',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '单式',
				shortname: 'ermzuxdsq',
				realname: '[前二组选_单式]',
				tips: '手动输入号码，至少输入1个两位数号码组成一注。',
				example: '',
				help: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '不定胆',
		rows: [[{
			title: '不定胆',
			columns: [{
				showname: '前三位',
				shortname: 'bdw',
				realname: '[不定胆_前三位]',
				tips: '从01-11中任意选择1个或1个以上号码。',
				example: '',
				help: '从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '选号',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}]
		}]]
	}, {
		title: '定位胆',
		rows: [[{
			title: '定位胆',
			columns: [{
				showname: '定位胆',
				shortname: 'dwd',
				realname: '[定位胆]',
				tips: '从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码。',
				example: '',
				help: '从第一位，第二位，第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
				select: {
					layout: [{
						title: '第一位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}, {
						title: '第二位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}, {
						title: '第三位',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}]
		}]]
	}, {
		title: '趣味型',
		rows: [[{
			title: '趣味型',
			columns: [{
				showname: '定单双',
				shortname: 'dds',
				realname: '[定单双]',
				tips: '从不同的单双组合中任意选择1个或1个以上的组合。',
				example: '',
				help: '从5种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。',
				select: {
					layout: [{
						title: '定单双',
						balls: ['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'],
						tools: false,
						cls: 'large'
					}]
				}
			}, {
				showname: '猜中位',
				shortname: 'czw',
				realname: '[猜中位]',
				tips: '从3-9中任意选择1个或1个以上数字。',
				example: '',
				help: '从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。',
				select: {
					layout: [{
						title: '猜中位',
						balls: ['03','04','05','06','07','08','09'],
						tools: true
					}]
				}
			}]
		}]]
	}, {
		title: '任选',
		rows: [[{
			title: '任选复式',
			columns: [{
				showname: '一中一',
				shortname: 'rx1fs',
				realname: '[任选复式_一中一]',
				tips: '从01-11中任意选择1个或1个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '一中一',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '二中二',
				shortname: 'rx2fs',
				realname: '[任选复式_二中二]',
				tips: '从01-11中任意选择2个或2个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '二中二',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '三中三',
				shortname: 'rx3fs',
				realname: '[任选复式_三中三]',
				tips: '从01-11中任意选择3个或3个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '三中三',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '四中四',
				shortname: 'rx4fs',
				realname: '[任选复式_四中四]',
				tips: '从01-11中任意选择4个或4个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '四中四',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '五中五',
				shortname: 'rx5fs',
				realname: '[任选复式_五中五]',
				tips: '从01-11中任意选择5个或5个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '五中五',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '六中五',
				shortname: 'rx6fs',
				realname: '[任选复式_六中五]',
				tips: '从01-11中任意选择6个或6个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '六中五',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '七中五',
				shortname: 'rx7fs',
				realname: '[任选复式_七中五]',
				tips: '从01-11中任意选择7个或7个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '七中五',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}, {
				showname: '八中五',
				shortname: 'rx8fs',
				realname: '[任选复式_八中五]',
				tips: '从01-11中任意选择8个或8个以上号码。',
				example: '',
				help: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				select: {
					layout: [{
						title: '八中五',
						balls: ['01','02','03','04','05','06','07','08','09','10','11'],
						tools: true
					}]
				}
			}]
		}], [{
			title: '任选单式',
			columns: [{
				showname: '一中一',
				shortname: 'rx1ds',
				realname: '[任选单式_一中一]',
				tips: '手动输入号码，从01-11中任意输入1个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '二中二',
				shortname: 'rx2ds',
				realname: '[任选单式_二中二]',
				tips: '手动输入号码，从01-11中任意输入2个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '三中三',
				shortname: 'rx3ds',
				realname: '[任选单式_三中三]',
				tips: '手动输入号码，从01-11中任意输入3个号码组成一注。。',
				example: '',
				help: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '四中四',
				shortname: 'rx4ds',
				realname: '[任选单式_四中四]',
				tips: '手动输入号码，从01-11中任意输入4个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '五中五',
				shortname: 'rx5ds',
				realname: '[任选单式_五中五]',
				tips: '手动输入号码，从01-11中任意输入5个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '六中五',
				shortname: 'rx6ds',
				realname: '[任选单式_六中五]',
				tips: '手动输入号码，从01-11中任意输入6个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '七中五',
				shortname: 'rx7ds',
				realname: '[任选单式_七中五]',
				tips: '手动输入号码，从01-11中任意输入7个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
			}, {
				showname: '八中五',
				shortname: 'rx8ds',
				realname: '[任选单式_八中五]',
				tips: '手动输入号码，从01-11中任意输入8个号码组成一注。',
				example: '',
				help: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
				textarea: {}
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
    //console.log(datasel,'dataseldatasel');
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
		var help = $('<div class="help">').html('每个号码之间请用一个空格隔开，每注号码用英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。');
		textarea.find('textarea').keyup(function() {
			var testf = String($(this).val()).match(/(\d\d)(\d\d)(\d\d)/g);
      if (testf!=null) {
        if (testf.length>0) {
					$(this).val($(this).val().replace(/[；.,。，、|]/g, ';').replace(/(;+)/g, ';').replace(/[ ]/g, ';'));
          //$(this).val($(this).val().replace(testf[0],''));
        }else {
          $(this).val($(this).val().replace(/[；.,。，、|]/g, ';'));
        }
      }else {
        $(this).val($(this).val().replace(/[；.,。，、|]/g, ';'));
      }
      PlayOptions.update();
		});

    textarea.find('textarea').on('paste',function() {
      var thisarea = $(this);
      setTimeout(function() {
        var testf = String(thisarea.val()).match(/(\d\d)(\d\d)(\d\d)/g)
        if (testf!=null) {
          if (testf.length>0) {
            thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ';').replace(/(;+)/g, ';').replace(/[ ]/g, ';'));
          }else {
            thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ';'));
          }
        }else {
          thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ';'));
        }
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
      //console.log(textarea,'textarea');

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
    //console.log(content,'contentcontentcontent');
		console.log(num)
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
      //console.log(!isInit,'!isInit!isInit');
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

  // 组态和值高亮
  var zutypech = {}

	// 初始化网页元素
	var initDocument = function() {
		$('.lottery-betting .lottery-opearation').empty();
		var main = $('.lottery-betting .lottery-opearation')
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
			var ishavePankou = [24];
      var pankouLink = {
        //'22':'102',
        //'23':'101',
        '24':'100'
      }
      $.each(Layout, function(i, group) {
        //console.log(group.title,GameData.getMethodList());
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
			console.log( column.tips)
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
		console.log($bList);
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
