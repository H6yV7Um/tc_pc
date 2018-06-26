// 判断是否为函数
export const isFunction = function (fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
};

// 获取元素在数组中的位置，没有则返回-1
export const inArray = function(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
    return -1;
};

// 将秒格式化为时分秒对象
export const formateSecond = function(time) {
    if (time > 0) {
        let hour = ('00' + parseInt(time / 60 / 60)).slice(-2);
        let minute = ('00' + parseInt((time - hour * 60 * 60) / 60)).slice(-2);
        let second = ('00' + parseInt((time - hour * 60 * 60 - minute * 60))).slice(-2);
        return {
            hour: hour,
            minute: minute,
            second: second
        };
    }

    return {
            hour: '00',
            minute: '00',
            second: '00'
    };

};

// 数组排序引用函数
export const sortNumber = function (a, b) {
    return a - b;
};

// 日期月份/天的显示，如果是1位数，则在前面加上'0'
export const getFormatDate = function(arg) {
    if (arg === undefined || arg === '') {
        return '';
    }
    let re = arg + '';
    if (re.length < 2) {
        re = '0' + re;
    }
    return re;
};

// 日期，在原有日期基础上，增加days天数，默认增加1天
export const addDate = function(today, days, fomat) {
    if (days === undefined || days === '') {
        days = 1;
    }
    let date = new Date(today);
    date.setDate(date.getDate() + days);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return date.getFullYear() + fomat + getFormatDate(month) + fomat + getFormatDate(day);
};

// 获取元素所有兄弟节点、所有子节点
export const getNodes = function(elem) {
    let parentNode = elem.parentNode;
    let nodeArr = parentNode.childNodes;
    let siblings = [];
    let children = elem.childNodes;
    let childNodes = [];
    for (let i = 0; i < nodeArr.length; i++) {
        if (nodeArr[i].nodeName === '#text' && !/\S/.test(nodeArr[i].nodeValue)) {
            parentNode.removeChild(nodeArr[i]);
        } else {
            siblings.push(nodeArr[i]);
        }
    }
    for (let i = 0; i < children.length; i++) {
        if (children[i].nodeName === '#text' && !/\S/.test(children[i].nodeValue)) {
            elem.removeChild(children[i]);
        } else {
            childNodes.push(children[i]);
        }
    }
    return {
        siblings,
        childNodes
    };
};

// cookie操作
export const Cookie = {
  setCookie(cName, value, expiredays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = cName + "=" + escape(value) + ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString());
  },
  getCookie(cName) {
    if (document.cookie.length > 0) {
      let cStart = document.cookie.indexOf(cName + '=');

      if (cStart !== -1) {
        cStart = cStart + cName.length + 1;
        let cEnd = document.cookie.indexOf(';', cStart);
        if (cEnd === -1) {
          cEnd = document.cookie.length;
        }
        return unescape(document.cookie.substring(cStart, cEnd));
      }
    }
    return "";
  },
  checkCookie(cName) {
    let name = this.getCookie(cName);
    if (name !== null && name !== '') {
      return false;
    }
    return true;
  }
};
// 判断是否为PC
export const IsPC = function () {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
// 获取元素距离浏览器边框的距离
export const getRect = function (element) {
  let rect = element.getBoundingClientRect();
  let clientTop = document.documentElement.clientTop;
  let clientLeft = document.documentElement.clientLeft;
  return { // 兼容ie多出的两个px
    top: rect.top - clientTop, // 距离顶部的位置
    bottom: rect.bottom - clientTop, // 距离顶部加上元素本身的高度就等于bottom的位置
    left: rect.left - clientLeft, // 距离左边的位置
    right: rect.right - clientLeft // 距离右边的位置就是 距离左边的位置加上元素本身的宽度
  };
};
// 判断浏览器类型
export const browserType = function() {
  let Sys = {};
  let ua = navigator.userAgent.toLowerCase();
  let s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] : (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1]
    : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

  if (Sys.ie) {
    return {name : 'IE', version : Sys.ie}
  }
  if (Sys.firefox) {
    return {name : 'firefox', version : Sys.firefox}
  };
  if (Sys.chrome) {
    return {name : 'chrome', version : Sys.chrome}
  };
  if (Sys.opera) {
    return {name : 'opera', version : Sys.opera}
  };
  if (Sys.safari) {
    return {name : 'safari', version : Sys.safari}
  };
  return {name: ''}
}
