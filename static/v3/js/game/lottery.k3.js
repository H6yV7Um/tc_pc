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
		var regex = new RegExp('^[0-6]{' + l + '}$');
		$.each(datasel, function(i, n) {
			if(regex.test(n) && fun(n, l)) {
				newsel.push(n);
			}
		});
		return newsel;
	}

	/**
	 * 2排不重复检测
	 */
	var _uniqueCheck = function(a, b) {
		return ArrayUtil.intersect(a, b).length == 0 ? true : false;
	}

	/**
	 * 二同号单式
	 */
	var _ethdsCheck = function(n, l) {
		if (l != 3) return false;
		var first = n.substring(0, 1);
		var second = n.substring(1, 2);
		var third = n.substring(2, 3);
		if (first == second && second == third) return false;
		if (first == second || second == third || third == first) return true;
		return false;
	}

	/**
     * 二不同号单式
     */
	var _ebthdsCheck = function(n, l) {
		if (l != 2) return false;
		var first = n.substring(0, 1);
		var second = n.substring(1, 2);
		if (first == second) return false;
		return true;
	}

    /**
     * 三不同号单式
     */
	var _sbthdsCheck = function(n, l) {
		if (l != 3) return false;
		var first = n.substring(0, 1);
		var second = n.substring(1, 2);
		var third = n.substring(2, 3);
		if (first != second && second != third && third != first) return true;
		return false;
	}

	/**
	 * 快三计算号码
	 */
	var _inputNumbers = function(type, datasel) {
		var nums = 0;
		// 输入号
		switch (type) {
		case 'ebthds':
			return _inputCheck_Num(datasel, 2, _ebthdsCheck).length;
		case 'ethds':
			return _inputCheck_Num(datasel, 3, _ethdsCheck).length;
		case 'sbthds':
			return _inputCheck_Num(datasel, 3, _sbthdsCheck).length;
		// 选号
		case 'ebthdx': // 二不同号，标准选号
            if (datasel[0].length >= 2) {
                nums += ArrayUtil.ComNum(datasel[0].length, 2);
            }
            break;
		case 'ebthdt':
			var maxplace = 2;
			if(datasel.length == maxplace) {
				if(_uniqueCheck(datasel[0], datasel[1])) {
					for (var i = 0; i < maxplace; i++) {
						var s = datasel[i].length;
						if (s > 0) {
							if(i > 0) {
								nums = datasel[i].length;
							}
						} else {
							nums = 0;
							break;
						}
					}
				}
			}
			break;
		case 'ethdx':
			var s = datasel.length;
			if(s > 1) {
				var a = datasel[0].length;
				var b = datasel[1].length;
				if(a > 0 && b > 0) {
					if(_uniqueCheck(datasel[0], datasel[1])) {
						nums = a * b;
					}
				}
			}
			break;
		case 'ethfx':
			nums = datasel[0].length;
			break;
		case 'sbthdx': // 三不同号单选
            if (datasel[0].length >= 3) {
                nums += ArrayUtil.ComNum(datasel[0].length, 3);
            }
            break;
		case 'sthdx': // 三同号单选
		case 'hezhi': // 和值
    case 'bdw_bdw_fs':
    case 'dx_dx_fs':
    case 'ds_ds_fs':
      //console.log(datasel);
			nums = datasel[0].length;
      break;
		case 'sthtx': // 三同号通选
		case 'slhtx': // 三连号通选
			nums = datasel[0].length > 0 ? 1 : 0;
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
		case 'ebthds':
			datasel = _inputCheck_Num(datasel, 2, _ebthdsCheck);
			break;
		case 'ethds':
			datasel = _inputCheck_Num(datasel, 3, _ethdsCheck);
			break;
		case 'sbthds':
			datasel = _inputCheck_Num(datasel, 3, _sbthdsCheck);
			break;
		default:
			break;
		}
		return datasel.toString().replace(/\,/g, ' ');
	}

	var _inputFormat = function(type, datasel) {
		switch (type) {
		case 'ebthds':
		case 'ethds':
		case 'sbthds':
			return _formatTextarea_Num(type, datasel);
		case 'ebthdx':
		case 'ethfx':
		case 'sbthdx':
		case 'sthdx':
		case 'sthtx':
		case 'slhtx':
		case 'hezhi':
		case 'bdw_bdw_fs':
    case 'dx_dx_fs':
    case 'ds_ds_fs':
			return datasel[0].toString();
		case 'ebthdt':
		case 'ethdx':
			return _formatSelect_Num(datasel);
		default:
			break;
		}
	}

	var _typeFormat = function(code) {
		var arr = [];
		code.sort();
		var a = code[0];
		var b = code[1];
		var c = code[2];
		var sanlian = ['123', '234', '345', '456'];
		if($.inArray(code.toString().replace(/\,/g , ''), sanlian) != -1) {
			arr[0] = '三连号';
		} else if(a == b && b == c) {
			arr[0] = '三同号';
		} else if(a == b || b == c) {
			arr[0] = '二同号';
		}else {
			arr[0] = '三不同';
		}
		arr[1] = parseInt(a) + parseInt(b) + parseInt(c);
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
		title: '二不同号',
		rows: [[{
			title: '二不同号',
			columns: [{
				showname: '标准选号',
				shortname: 'ebthdx',
				realname: '[二不同号_标准选号]',
				tips: '从1-6中任意选择2个或2个以上号码。',
				example: '投注方案：2,5；开奖号码中出现：1个2、1个5 (顺序不限)，即中奖。',
				help: '从1-6中任意选择2个号码组成一注，顺序不限。开奖号码中出现所选的两个号码即为中奖。',
				select: {
					layout: [{
						title: '号码',
						balls: [1,2,3,4,5,6]
					}]
				}
			}, {
				showname: '手动选号',
				shortname: 'ebthds',
				realname: '[二不同号_手动选号]',
				tips: '手动输入号码，至少输入1-6中两个不同的数字组成一注号码。',
				example: '投注方案：56；开奖号码：536，即中奖。',
				help: '开奖号码中至少包含所输入的两个数字即为中奖。',
				textarea: {}
			}, {
				showname: '胆拖选号',
				shortname: 'ebthdt',
				realname: '[二不同号_胆拖选号]',
				tips: '从1-6中任意选择1个胆码以及1个以上的号码作为拖码。',
				example: '',
				help: '从1-6中选择一个胆码和至少一个拖码，如果开奖号码中不重复数字至少包含胆码所选号码即为中奖',
				select: {
					layout: [{
						title: '胆码',
						balls: [1,2,3,4,5,6],
						trigger: 'only'
					}, {
						title: '拖码',
						balls: [1,2,3,4,5,6]
					}]
				}
			}]
		}]]
	}, {
		title: '二同号',
		rows: [[{
			title: '二同号单选',
			columns: [{
				showname: '标准选号',
				shortname: 'ethdx',
				realname: '[二同号_标准选号]',
				tips: '选择1个对子（11,22,33,44,55,66）和1个不同号码(1,2,3,4,5,6)投注。',
				example: '投注方案：112；开奖号码为112,121,211中任意一个，即中奖。',
				help: '选择1个对子（11,22,33,44,55,66）和1个不同号码(1,2,3,4,5,6)投注，选号与开奖号码一致即中奖。',
				select: {
					layout: [{
						title: '二同号',
						balls: ['11','22','33','44','55','66'],
						values: [1,2,3,4,5,6],
						trigger: 'only'
					}, {
						title: '不同号',
						balls: [1,2,3,4,5,6]
					}]
				}
			}, {
				showname: '手动选号',
				shortname: 'ethds',
				realname: '[二同号_手动选号]',
				tips: '手动输入号码，至少输入1个三位数号码组成一注。',
				example: '投注方案：112；开奖号码为112,121,211中任意一个，即中奖。',
				help: '手动输入号码，至少输入1个三位数号码，选号与开奖号码一致即中奖。',
				textarea: {}
			}]
		}], [{
			title: '二同号复选',
			columns: [{
				showname: '二同号复选',
				shortname: 'ethfx',
				realname: '[二同号_复选]',
				tips: '选择对子(11*,22*,33*,44*,55*,66*)进行投注。',
				example: '投注方案：11*；开奖号码为：112,211,121,即中奖。',
				help: '选择对子(11*,22*,33*,44*,55*,66*)投注，开奖号码中包含选择的对子即中奖。',
				select: {
					layout: [{
						title: '二同号',
						balls: ['11*','22*','33*','44*','55*','66*'],
						values: [1,2,3,4,5,6],
						cls: 'medium'
					}]
				}
			}]
		}]]
	}, {
		title: '三不同号',
		rows: [[{
			title: '三不同号',
			columns: [{
				showname: '标准选号',
				shortname: 'sbthdx',
				realname: '[三不同号_标准选号]',
				tips: '选择任意三个或以上的号码进行投注。',
				example: '投注方案：2,5,6；开奖号码中出现：256,562,625(顺序不限)即中奖。',
				help: '从1-6中任意选择3个（或以上）不相同号码组成一注，顺序不限，若其中三位与开奖号码相同即为中奖。',
				select: {
					layout: [{
						title: '号码',
						balls: [1,2,3,4,5,6]
					}]
				}
			}, {
				showname: '手动选号',
				shortname: 'sbthds',
				realname: '[三不同号_手动选号]',
				tips: '对三个各不相同的号码进行投注。',
				example: '投注方案：258；开奖号码中出现：1个2、1个5、1个8 (顺序不限)，即中奖。。',
				help: '从1-6中任意选择3个或3个以上各不相同号码组成一注，顺序不限，若开奖号码与所选号码相同，即为中奖。',
				textarea: {}
			}]
		}]]
	}, {
		title: '三同号',
		rows: [[{
			title: '三同号单选',
			columns: [{
				showname: '三同号单选',
				shortname: 'sthdx',
				realname: '[三同号单选]',
				tips: '选择任意一组以上三位相同的号码。',
				example: '投注方案：222；开奖号码为：3个2，即中奖。',
				help: '从111,222,333,444,555，666中选择任意一组或一组以上的号码，若和开奖号相同即为中奖。',
				select: {
					layout: [{
						title: '号码',
						balls: ['111','222','333','444','555','666'],
						values: [1,2,3,4,5,6],
						cls: 'medium'
					}]
				}
			}]
		}], [{
			title: '三同号通选',
			columns: [{
				showname: '三同号通选',
				shortname: 'sthtx',
				realname: '[三同号通选]',
				tips: '对所有三同号（111,222,333,444,555,666）进行投注。',
				example: '投注方案：通选；开奖号码中出现：222或3个其他数字，即中奖。',
				help: '投注后，开奖号码为任意数字的三重号，即为中奖。',
				select: {
					layout: [{
						title: '胆码',
						balls: ['111','222','333','444','555','666'],
						cls: 'medium',
						trigger: 'all'
					}]
				}
			}]
		}]]
	}, {
		title: '三连号',
		rows: [[{
			title: '三连号通选',
			columns: [{
				showname: '三连号通选',
				shortname: 'slhtx',
				realname: '[三同号连选]',
				tips: '对所有三个相连的号码进行投注。',
				example: '投注方案：三连号通选 开奖号码：123或234或345或456	即为中奖',
				help: '开奖号码为3连号（123,234,345,456）即为中奖',
				select: {
					layout: [{
						title: '号码',
						balls: ['123','234','345','456'],
						cls: 'medium',
						trigger: 'all'
					}]
				}
			}]
		}]]
	}, {
		title: '和值',
		rows: [[{
			title: '和值',
			columns: [{
				showname: '和值',
				shortname: 'hezhi',
				realname: '[和值]',
				tips: '从3-18中任意选择1个或1个以上号码。',
				example: '投注方案：和值4；开奖号码：112,即中奖。',
				help: '所选数值等于开奖号码三个数字相加之和，即为中奖。注意:和值为3或18一等奖；4或17二等奖；5或16三等奖；6或15四等奖；7或14五等奖；8或13六等奖；9或12七等奖；10或11八等奖',
				select: {
					layout: [{
						balls: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
						cls: 'hz'
					}]
				}
			}]
		},{
			title: '大小',
			columns: [{
				showname: '大小',
				shortname: 'dx_dx_fs',
				realname: '[大小]',
				tips: '从大、小中至少选一个组成一注。',
				example: '投注方案：小<br>开奖号码：113（3个号码之和5，形态小），即中和值小。',
				help: '至少选择1个和值形态（3个号码之和）进行投注，所选和值形态与开奖的3个号码的和值形态相同即中奖。',
				select: {
          layout: [{
            title: '和值',
            balls: ['大', '小']
          }]
        }
			}]
		},{
			title: '单双',
			columns: [{
				showname: '单双',
				shortname: 'ds_ds_fs',
				realname: '[单双]',
				tips: '从单、双中至少选一个组成一注。',
				example: '投注方案：小<br>开奖号码：113（3个号码之和5，形态单），即中和值单。',
				help: '至少选择1个和值形态（3个号码之和）进行投注，所选和值形态与开奖的3个号码的和值形态相同即中奖。',
				select: {
          layout: [{
            title: '和值',
            balls: ['单', '双']
          }]
        }
			}]
		}]]
	}, {
		title: '猜中位',
		rows: [[{
			title: '猜中位',
			columns: [{
				showname: '猜一个号码就中奖',
				shortname: 'bdw_bdw_fs',
				realname: '[猜中位]',
				tips: '从1-6中，任选一个或多个号码进行投注。',
				example: '投注方案：4,开奖：124，即中猜必出号码。',
				help: '从1-6中，任选一个或多个号码，所选号码出现于开奖号码中即中奖。',
				select: {
					layout: [{
						balls: [1,2,3,4,5,6],
						cls: 'hz'
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
				if(val.values) {
					balls.find('ul').append('<li><a data-val="' + val.values[j] + '">' + ball + '</a></li>');
				} else {
					balls.find('ul').append('<li><a data-val="' + ball + '">' + ball + '</a></li>');
				}
			});
			balls.find('ul > li > a').unbind('click').click(function() {
				if($(this).hasClass('selected')) {
					$(this).removeClass('selected');
					// 关联事件
					if(val.trigger == 'all') {
						balls.find('ul > li > a').removeClass('selected');
					}
				} else {
					// 关联事件only
					if(val.trigger == 'only') {
						balls.find('ul > li > a').removeClass('selected');
					}
					$(this).addClass('selected');
					// 关联事件all
					if(val.trigger == 'all') {
						balls.find('ul > li > a').addClass('selected');
					}
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
      //console.log($UserCode - $DownCode,'b');
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
    //console.log(start,'startstartstart',$UserMaxCode);
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
    //console.log({connect: 'lower', behaviour: 'snap', step: 2, start: start, range: {'max': $UserMaxCode, 'min': $UserMinCode}});
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
        var addbuttton = button.find('[data-command="add"]');
        //console.log(button.find('[data-command="add"]:not(.quickadd)').length);
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
			//console.log(GameData.getMethodList(),GameData.getMethods());
      var ishavePankou = [31];
      var pankouLink = {
        '31':'90'
      }
      $.each(Layout, function(i, group) {
        //console.log(GameData.getMethodList(),'GameData.getMethodListGameData.getMethodList',group.title);
        if ($.inArray(group.title.substring(0,3),GameData.getMethodList())>-1) {
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
			//console.log(data,'datadatadata');
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
      //console.log($UserCode - $DownCode,$UserCode,$DownCode,'a');
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
