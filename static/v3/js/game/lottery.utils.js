var ArrayUtil = function() {
	
	// 组合数
	var ComNum = function(n, m) {
		m = parseInt(m);
		n = parseInt(n);
		if (m < 0 || n < 0) {
			return false;
		}
		if (m == 0 || n == 0) {
			return 1;
		}
		if (m > n) {
			return 0;
		}
		if (m > n / 2.0) {
			m = n - m;
		}
		var result = 0.0;
		for (var i = n; i >= (n - m + 1); i--) {
			result += Math.log(i);
		}
		for (var i = m; i >= 1; i--) {
			result -= Math.log(i);
		}
		result = Math.exp(result);
		return Math.round(result);
	}
	
	// 组合值
	var ComVal = function(source, m, x) {
		var n = source.length;
		var list = [];
		var start = 0;
		while (m > 0) {
			if (m == 1) {
				list.push(source[start + x]);
				break;
			}
			for (var i = 0; i <= n - m; i++) {
				var cnm = ComNum(n - 1 - i, m - 1);
				if (x <= cnm - 1) {
					list.push(source[start + i]);
					start = start + (i + 1);
					n = n - (i + 1);
					m--;
					break;
				} else {
					x = x - cnm;
				}
			}
		}
		return list;
	}
	
	// 判断是否存在
	var inArray = function(e, data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i] == e) return true;
		}
		return false;
	}
	
	// 数组去重复
	var uniquelize = function(data) {
		var array = new Array();
		for (var i = 0; i < data.length; i++) {
			if (!inArray(data[i], array)) {
				array.push(data[i]);
			}
		}
		return array;
	}
	
	//求两个集合的并集
	var union = function(a, b) {
		return uniquelize(a.concat(b));
	}
	
	//求两个集合的差集
	var minus = function(a, b) {
		var array = new Array();
		var ua = uniquelize(a);
		for (var i = 0; i < ua.length; i++) {
			if(!inArray(ua[i], b)) {
				array.push(ua[i]);
			}
		}
		return array;
	}
	
	//求两个集合的交集
	var intersect = function(a, b) {
		var array = new Array();
		var ua = uniquelize(a);
		for (var i = 0; i < ua.length; i++) {
			if(inArray(ua[i], b)) {
				array.push(ua[i]);
			}
		}
		return array;
	}
	
	//求两个集合的补集
	var complement = function(a, b) {
		return minus(union(a, b), intersect(a, b));
	}
	
	// 去除重复，最快速方法，会排序
	var unique = function(data) {
		data.sort();
		var re = [data[0]];
		for(var i = 1; i < data.length; i++) {
			if(data[i] !== re[re.length - 1]) {
				re.push(data[i]);
			}
		}
		return re;
	}
	
	// 根据下标删除
	var remove = function(data, idx) {
		if(data.length > idx) {
			data.splice(idx, 1);
		}
		return data;
	}
	
	return {
		ComNum: ComNum,
		ComVal: ComVal,
		unique: unique,
		uniquelize: uniquelize,
		intersect: intersect,
		complement: complement,
		remove: remove,
	}

}();

var LZMAUtil = function() {
	
	var toHex = function(byte_arr) {
		var hex_str = '', i, len, tmp_hex;
		len = byte_arr.length;
		for (i = 0; i < len; ++i) {
			if (byte_arr[i] < 0) {
				byte_arr[i] = byte_arr[i] + 256;
			}
			tmp_hex = byte_arr[i].toString(16);
			if (tmp_hex.length === 1) {
				tmp_hex = '0' + tmp_hex;
			}
			hex_str += tmp_hex;
		}
		return hex_str.trim();
	}
	
	return {
		toHex: toHex
	}
	
}();




 


 