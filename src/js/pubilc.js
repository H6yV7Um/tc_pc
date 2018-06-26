const APPCONFIG = appConfig();
try {
  window.addEventListener('load', function () {
    document.getElementsByTagName('title')[0].innerHTML = APPCONFIG.title;
  }, false);
} catch (e) {
  console.log(e);
}
const base = {
  padLeftZero(str) {
    return ('00' + str).substr(str.length);
  },
  lotterySildeOption() {
    return APPCONFIG.lotterySilde;
  },
  formatDate(time, fmt) {
    let date = time ? new Date(time) : new Date();
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
      }
    }
    return fmt;
  },
  browser(iosfn, anfn, pcfn, _this) {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      iosfn && iosfn();
    } else if (/(Android)/i.test(navigator.userAgent)) {
      anfn && anfn();
    } else {
      pcfn && pcfn(_this);
    }
  },
  httpPost(_this, url, fn) {
    let that = this;
    _this.$http.post(url).then(function (res) {
      let result = res.body;
      typeof result === 'string' && (result = eval('(' + result + ')'));
      try {
        // that && (result && (result.that = that));
      } catch (e) {
        console.log(e);
      }
      fn.call(this, result);
    }, function (res) {
      fn.call(this, res);
    });
    return _this;
  },
  storage() {
    return {
      set(name, value) {
        localStorage.setItem(name, value);
        return true;
      },
      get(name) {
        let item = localStorage.getItem(name);
        return item;
      },
      clear() {
        localStorage.clear();
      }
    };
  },
  lotteryarr: [],
  lotteryNum: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  lotteryName: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'P', 'S', 'W', 'Y', 'Z'],
  lotteryinit() {
    let _this = this;
    return {
      getName(min, max) {
        let name = _this.random(true, min, max);
        let str = name[0];
        for (let i = 1; i < name.length - 2; i++) {
          str += "*";
        }
        str += name[name.length - 1];
        return str;
      },
      getNum(min, max) {
        return parseInt(_this.random(true, min, max).toString());
      },
      getLottery() {
        return _this.random(false, 1, null);
      }
    };
  },
  randomWord(randomFlag, min, max, arr) {
    let str = '';
    let range = min;
    let pos = null;
    // 随机产生
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < range; i++) {
      pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str;
  },
  isExpiredReferrer(urls, fn) {
    let _stor = this.storage();
    let referrer = JSON.parse(_stor.get('_referrer'));
    let nowDate = new Date().getTime() // APPCONFIG.expiredReferrer;
    let type = urls.split("&type");
    if (type[1]) {
      urls = type[0];
    }
    if (referrer && referrer !== 'false') {
      if ((!this.indexof(urls, 'referrer') && nowDate - referrer.time < APPCONFIG.expiredReferrer) || referrer !== 'false') {
        return fn(referrer);
      }
      return localStorage.setItem('_referrer', 'false');
    }
    return fn(referrer);
  },
  referrer(urls) {
    this.isExpiredReferrer(urls, (v) => {
      let rels = null;
      if (!this.indexof(urls, 'referrer')) {
        rels = urls.split('referrer=')[1];
        if (v && v !== 'false' && v.rels === rels) {
          return false;
        }
        localStorage.setItem('_referrer', JSON.stringify({rels: rels, time: new Date().getTime()}))
      }
    });
  },
  random(randomFlag, min, max) {
    let str = '';
    let range = min;
    let pos = null;
    let arr = this.lotteryNum.concat(this.lotteryName);
    // 随机产生
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < range; i++) {
      pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str;
  },
  LoginStatus() {
    return {
      get(_this, name) {
        return _this.$store.state[name];
      },
      set(_this, keys, value) {
        return _this.$store.commit(keys, value);
      }
    };
  },
  indexof(str, value) {
    return str.indexOf(value) === -1;
  },
  doMove(e, c, d) {
    var g = 0;
    var b = 0;
    var f = null;
    for (let a in c) {
      if (a === 'opacity') {
        g = parseInt(parseFloat(this.getStyle(e, a)) * 100);
      } else {
        g = parseInt(this.getStyle(e, a));
      }
      f = (c[a] - g) / 8;
      f = f > 0 ? Math.ceil(f) : Math.floor(f);
      if (g !== c[a]) {
        b++;
        if (a === 'opacity') {
          e.style.filter = 'alpha(opacity:' + (g + f) + ')';
          e.style.opacity = (g + f) / 100;
        } else {
          e.style[a] = g + f + 'px';
        }
      }
    }
    b.toString() === '0' && clearInterval(e.timer) && d && d();
  },
  move(c, a, f, t) {
    t = t || 40;
    try {
      clearInterval(c.timer);
      let _this = this;
      c.timer = setInterval(function () {
        _this.doMove(c, a, f);
      }, t);
    } catch (e) {
      console.log(e);
    }

  },
  getStyle(b, a) {
    try {
      if (b.currentStyle) {
        return b.currentStyle[a];
      }
      return getComputedStyle(b, false)[a];
    } catch (err) {
      this.showerror(err);
      return false;
    }
  },
  config() {
    return APPCONFIG;
  },
  unique(arr) {
    let ret = [];
    let len = arr.length;
    let tmp = {};
    for (let i = 0; i < len; i++) {
      if (!tmp[arr[i]]) {
        tmp[arr[i]] = 1;
        ret.push(arr[i]);
      }
    }
    return ret;
  },
  Promptfn() {
    let oPrompt = null;
    let idxarrr = [];
    let _self = this;
    return function (option) {
      function openfn(option) {
        oPrompt.init(option);
      }

      idxarrr = _self.unique(idxarrr);
      for (let i = 0, len = idxarrr.length; i < len; i++) {
        if (idxarrr[i].toString() === option.idx.toString()) {
          return openfn(option);
        }
      }
      idxarrr.push(option.idx);
      oPrompt = new Prompt(option);
      return oPrompt;
    };
  }
};

class Prompt {
  constructor(option) {
    this.createDiv = document.createElement('div');
    this.timer = null;
    return this.init(option);
  }

  init(option) {
    let {idx, message = '', note = '', autoClose, time = 2000, wid = '100%', hei = document.documentElement.clientHeight} = option;
    this.createDiv.id = idx;
    this.time = time;
    this.createDiv.innerHTML = `<div class='jBox-wrapper jBox-Modal jBox-Default common-modal grey jBox-hasTitle jBox-closeButton-title BgRgbB4' style='width:${wid};height:${hei}px;position: fixed;  opacity: 1; z-index: 9999;left: 0;top: 0;'><div class='jBox-container'  style='position: fixed;  opacity: 1; z-index: 10000; left: 50%; top: 50%; margin-left: -150px; margin-top: -50px;'><div class='jBox-title jBox-draggable' style="background:#ff677e;padding:0 10px;letter-spacing:3px"><div><i class='icon lock'></i>提示：<span class='title-sm'></span></div><div class='jBox-closeButton jBox-noDrag' id='${idx}close'><span class="icon" style="display:inline-block;vertical-align:0;width:16px;margin-left:34px">&#xe63b;</span></div></div><div class='jBox-content' style='padding: 20px 0; text-align: center; width: 300px;background:#fff;'>${message} <br />${note}</div></div></div>`;
    this.bandEvent(autoClose);
    return {
      idx: idx,
      createDiv: this.createDiv,
      init: this.openCreateDiv,
      close: this.closeCreateDiv,
      time: this.time,
      timer: this.timer
    };
  }

  bandEvent(autoClose) {
    let _this = this;
    document.body.appendChild(this.createDiv);
    if (autoClose) {
      this.timer = setTimeout(function () {
        _this.closeCreateDiv();
      }, this.time);
    }
    this.createDiv.addEventListener('click', function () {
      _this.closeCreateDiv();
    }, false);
  }

  openCreateDiv(option) {
    clearTimeout(this.timer);
    let _this = this;
    this.createDiv = document.getElementById(option.idx);
    if (option.hasOwnProperty('isReset')) {
      return this.init(option);
    }
    if (option.hasOwnProperty('autoClose') && option.autoClose) {
      this.timer = setTimeout(function () {
        _this.close();
      }, this.time);
    }
    ;
    this.createDiv.style.display = 'block';
    return true;
  }

  closeCreateDiv() {
    clearTimeout(this.timer);
    this.createDiv.style.display = 'none';
  }
};
export default base;
