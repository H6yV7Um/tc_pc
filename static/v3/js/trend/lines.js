;function searchs() {
  s = document.getElementById("searchstar").value,
  e = document.getElementById("searchend").value,
  location.href = "?id=" + id + "&w=" + w + "&s=" + BASE64.encode(s) + "&e=" + BASE64.encode(e)
}

function getElementsByName(t, e) {
  for (var r = document.getElementsByTagName(t), h = 0, a = [], s = 0; s < r.length; s++) r[s].getAttribute("name") == e && (a[h++] = r[s]);
  return a
}

function getElementsByClassName(t, e) {
  for (var r = document.getElementsByTagName(t), h = 0, a = [], s = 0; s < r.length; s++) r[s].getAttribute("class") == e && (a[h++] = r[s]);
  return a
}

function cyl(t) {
  if (t.checked) {
    for (var e = getElementsByClassName("td", "num"), r = 0; r < e.length; r++) e[r].style.color = "#d3d3d3";
    for (var h = 0; 5 >= h; h++) for (var a = getElementsByName("td", "line" + h), r = 0; r < a.length; r++) a[r].style.color = "#fff"
  } else for (var e = getElementsByClassName("td", "num"), r = 0; r < e.length; r++) e[r].style.color = "#fff"
}

function cylt(t) {
  if (t.checked) for (var e = getElementsByName("td", "back"), r = 0; r < e.length; r++) e[r].style.background = "#e1e1e1";
  else for (var e = getElementsByName("td", "back"), r = 0; r < e.length; r++) e[r].style.background = "#fff"
}

function czs(t) {
  document.getElementById("ballcanvas").style.visibility = t.checked ? "visible" : "hidden"
  //document.getElementById("ballcanvas").style.display = 'none'
}

function houwu(t) {
  //console.log(t.checked);
  if (t.checked) {
    $('#balltb thead').html('<tr><th width="8%" class="sa" rowspan="2" colspan="3">期号</th><th width="6%" class="sa" rowspan="2" colspan="2">开奖号码</th><th colspan="10">第六名</th><th colspan="10">第七名</th><th colspan="10">第八名</th><th colspan="10">第九名</th><th colspan="10">第十名</th><th colspan="10">号码分布</th></tr><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>');
  } else {
    $('#balltb thead').html('<tr><th width="8%" class="sa" rowspan="2" colspan="3">期号</th><th width="6%" class="sa" rowspan="2" colspan="2">开奖号码</th><th colspan="10">冠军</th><th colspan="10">亚军</th><th colspan="10">季军</th><th colspan="10">第四名</th><th colspan="10">第五名</th><th colspan="10">号码分布</th></tr><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>');
  }
}

function chw(t) {
  if (t.checked) {
    for (var e = getElementsByClassName("td", "num lenghao"), r = 0; r < e.length; r++) {
      $(e[r]).addClass('bluehigh');
      //e[r].style.background = "url(images/blue.png) no-repeat center";
    }
    e = getElementsByClassName("td", "num wenhao");
    for (var r = 0; r < e.length; r++) {
      $(e[r]).addClass('yellowhigh');
      //e[r].style.background = "url(images/yellow.png) no-repeat center";
    }
  } else {
    $('.bluehigh').removeClass('bluehigh');
    $('.yellowhigh').removeClass('yellowhigh');
  }
}

function linefun() {
  //console.log('linefunlinefun');
  var t = document.getElementById("ballcanvas"),
  e = document.getElementById("balltb");
  if (t.height = e.offsetHeight, "undefined" != typeof window.G_vmlCanvasManager) {
    t = window.G_vmlCanvasManager.initElement(t);
    var r = t.getContext("2d")
  } else var r = t.getContext("2d");
  r.strokeStyle = "rgba(255,0,0,1)",
  r.lineWidth = 2;
  var h, a, s = 0;
  s = (1 == w || 7 == w) ? 6 : 2 == w ? 5 : 3 == w ? 4 : 4 == w ? 4 : 5 == w ? 3 : 3;
  for (var n = 0; s > n; n++) {
    a = getElementsByName("td", "line" + (n - 1)),
    r.beginPath();
    for (var d = 0; d < a.length; d++) {
      var l = a[d].offsetHeight / 2,
      i = a[d].offsetWidth / 2;
      0 == h ? (h = 1, r.moveTo(a[d].offsetLeft - e.offsetLeft + i + 1, a[d].offsetTop - e.offsetTop + l + 1)) : r.lineTo(a[d].offsetLeft - e.offsetLeft + i + 1, a[d].offsetTop - e.offsetTop + l + 1)
    }
    r.stroke(),
    h = 0
  }
}

function chkssc(id) {
  var fulllst = [11, 6, 151, 111, 161, 191, 51,46, 601, 711, 811, 911, 45, 200, 201, 202, 203, 42, 43, 47, 204, 205, 206, 119, 80, 82, 85, 86, 87, 70, 71, 72, 88]; //12
  return $.inArray(parseInt(id, 10), fulllst) > -1 ? true: false
  //return  (1 == Number(id) || 4 == Number(id) || 5 == Number(id) || 8 == Number(id) || 29 == Number(id))
}

function chkpk(id) {
  var fulllst = [43, 47, 204, 250]; //12
  return $.inArray(parseInt(id, 10), fulllst) > -1 ? true: false
}

function chkthreed(id) {
  //3d和K3
  var fulllst = [31,41,32,33,34,35,36];
  return $.inArray(parseInt(id, 10), fulllst) > -1 ? true: false
  //return  (3 == Number(id))
}

function chkthree(id) {
  //3d和K3
  var fulllst = [34, 32, 33, 35, 36];
  return $.inArray(parseInt(id, 10), fulllst) > -1 ? true: false
  //return  (3 == Number(id))
}

function chkxuanwu(id) {
  var fulllst = [24, 21, 23, 22, 26, 28, 100, 101, 102, 103, 104, 105];
  return $.inArray(parseInt(id, 10), fulllst) > -1 ? true: false
  //return  (2 == Number(id) || chkthreed(id) || 6 == Number(id) || 7 == Number(id) || 9 == Number(id))
}

document.getElementById("searchstar").value = getnoew(0),
document.getElementById("searchend").value = getnoew(1);
var sorting = function() {
  function t(t) {
    return t
  }

  function e(t) {
    return "string" == typeof t ? t.toLowerCase() : t
  }

  function r(r, h) {
    if (h = "number" == typeof h ? {
      direction: h
    }: h || {},
    "function" != typeof r) {
      var a = r;
      r = function(t) {
        return t[a] ? t[a] : ""
      }
    }
    if (1 === r.length) {
      var s = r,
      n = h.ignoreCase ? e: t;
      r = function(t, e) {
        return n(s(t)) < n(s(e)) ? -1 : n(s(t)) > n(s(e)) ? 1 : 0
      }
    }
    return - 1 === h.direction ?
    function(t, e) {
      return - r(t, e)
    }: r
  }

  function h(t, e) {
    return t = r(t, e),
    t.thenBy = a,
    t
  }

  function a(t, e) {
    var a = this;
    return t = r(t, e),
    h(function(e, r) {
      return a(e, r) || t(e, r)
    })
  }
  return h
} (),
id,
aid = '',
w,
q,
qd,
s,
e,
qstr = '',
qdstr = '',
cnstr = '';
if (id = GetQueryString("id"), (id == '1b' ? (aid = '1b', id = 1) : !0), chs = GetQueryString("chs"), w = GetQueryString("w"), q = GetQueryString("q"), qd = GetQueryString("date"), s = GetQueryString("s"), e = GetQueryString("e"), Number(id) <= 0 || Number(id) > 999) location.href = "?id=11&w=1&q=50";
else if (Number(w) <= 0 || Number(w) > 999) location.href = "?id=11&w=1&q=50";
else if (id = GetQueryString("id"),id=='110') location.href = "?id=43&w=1&q=50&chs=北京PK10";
else if (id = GetQueryString("id"),id=='90') location.href = "?id=31&w=1&q=50&chs=江苏快3";
else { (chkxuanwu(id)) && (w = "1"),
  (Number(q) <= 0 || Number(q) > 300) && (q != null ? q = "50": !0);
  var chs_dict = function(name) {
    //console.log(GetQueryString("chs"));
    return decodeURI(GetQueryString("chs"));
  }
  var alter_chs_dict = function(name) {
    return decodeURI(GetQueryString("chs"));
  }; (qd != null ? (qdstr = "&date=" + qd) : qdstr = ""); (q != null ? qstr = "&q=" + q: qstr = "");
  //console.log('|'+aid+'|');
  if (aid == '') { (chs_dict(id) != null ? cnstr = "&chs=" + chs_dict(id) : cnstr = "");
    document.getElementById("showMenu").innerHTML = chs_dict(id) + '<em >▾</em>';
    //console.log(cnstr,'cnstr');
  } (aid != '' ? document.getElementById("showMenu").innerHTML = (aid == "" ? chs_dict(id) : alter_chs_dict(aid)) + '<em >▾</em>': null),
  chkssc(id) ? (document.getElementById("play").innerHTML = "<a href='?id=" + id + "&w=1" + qstr + qdstr + cnstr + "' id='" + (1 == w ? "playc": "plays") + "'>" + (chkpk(id) ? "前五": "五星") + "</a>" + (chkpk(id) ? "<a href='?id=" + id + "&w=7" + qstr + qdstr + cnstr + "' id='" + (7 == w ? "playc": "plays") + "'>后五</a>": "") + "<a href='?id=" + id + "&w=2" + qstr + qdstr + cnstr + "' id='" + (2 == w ? "playc": "plays") + "'>四星</a><a href='?id=" + id + "&w=3" + qstr + qdstr + cnstr + "' id='" + (3 == w ? "playc": "plays") + "'>前三</a><a href='?id=" + id + "&w=4" + qstr + qdstr + cnstr + "' id='" + (4 == w ? "playc": "plays") + "'>后三</a><a href='?id=" + id + "&w=5" + qstr + qdstr + cnstr + "' id='" + (5 == w ? "playc": "plays") + "'>前二</a><a href='?id=" + id + "&w=6" + qstr + qdstr + cnstr + "' id='" + (6 == w ? "playc": "plays") + "'>后二</a>", document.getElementById("nper").innerHTML = "<a href='?id=" + id + "&w=" + w + cnstr + "&date=0' rel='0' id='" + ((0 == q) ? "playc": "plays") + "'>今天</a><a href='?id=" + id + "&w=" + w + cnstr + "&date=1' rel='1' id='" + ( - 1 == q ? "playc": "plays") + "'>昨天</a><a href='?id=" + id + "&w=" + w + cnstr + "&date=2' rel='2' id='" + ( - 2 == q ? "playc": "plays") + "'>前天</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=50' id='" + (50 == q ? "playc": "plays") + "'>50期</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=100' id='" + (100 == q ? "playc": "plays") + "'>100期</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=200' id='" + (200 == q ? "playc": "plays") + "'>200期</a></span>") : chkxuanwu(id) ? (document.getElementById("play").innerHTML = "<a href='?id=" + id + "&w=1" + qstr + qdstr + "' id='" + (1 == w ? "playc": "plays") + "'>五星</a>",

  document.getElementById("nper").innerHTML = "<a href='?id=" + id + "&w=" + w + cnstr + "&date=0' rel='0' id='" + ((0 == q) ? "playc": "plays") + "'>今天</a><a href='?id=" + id + "&w=" + w + cnstr + "&date=1' rel='1' id='" + ( - 1 == q ? "playc": "plays") + "'>昨天</a><a href='?id=" + id + "&w=" + w + cnstr + "&date=2' rel='2' id='" + ( - 2 == q ? "playc": "plays") + "'>前天</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=50' id='" + (50 == q ? "playc": "plays") + "'>50期</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=100' id='" + (100 == q ? "playc": "plays") + "'>100期</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=200' id='" + (200 == q ? "playc": "plays") + "'>200期</a></span>") : chkthreed(id) && (document.getElementById("play").innerHTML = "<a href='?id=" + id + "&w=1" + qstr + qdstr + "' id='" + (1 == w ? "playc": "plays") + "'>三星</a>", document.getElementById("nper").innerHTML = "<a href='?id=" + id + "&w=" + w + cnstr + "&q=50' id='" + (50 == q ? "playc": "plays") + "'>50期</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=100' id='" + (100 == q ? "playc": "plays") + "'>100期</a><a href='?id=" + id + "&w=" + w + cnstr + "&q=200' id='" + (200 == q ? "playc": "plays") + "'>200期</a></span>"),
  $(".msg").css("display", "block"),
  (qd != null ? (qdstr = "&date=" + qd, $('#nper a[rel=' + qd + ']').addClass('playon')) : qdstr = ""),
  (q != null ? qstr = "&issueCount=" + q: qstr = ""),
  (chkthree(id) ? document.getElementById("play").innerHTML = "<a href='?id=" + id + "&w=1" + qstr + qdstr + "' id='" + (1 == w ? "playc": "plays") + "'>三星</a>" : !0)
  $.ajax({
    //async: !1,
    type: "get",
    //url: "" + id + ".txt",
    url: SimpleApi.route.opens + "?id=" + id + qstr + qdstr,
    //dataType: "jsonp",
    //jsonpCallback: "jadyndata",
    success: function(t) {
      if (t == '-1') {
        window.location.href = "/";
        return false;
      }
      //console.log(t);
      t.name = t.data;
      if (chkssc(id)) {
        for (var e = 0,
        r = 0,
        h = new Array,
        a = new Array,
        s = new Array,
        n = new Array,
        d = new Array,
        l = (1 == w || 7 == w) ? 50 : 2 == w ? 40 : 3 == w ? 30 : 4 == w ? 30 : 5 == w ? 20 : 20, i = (1 == w || 7 == w) ? 5 : 2 == w ? 4 : 3 == w ? 3 : 4 == w ? 3 : 5 == w ? 2 : 2, o = 0; l > o; o++) h[o] = 0,
        a[o] = 0,
        s[o] = 0,
        n[o] = 0,
        d[o] = 0;
        var allbb = t.name.split(",").reverse();
        //console.log(allbb);
        for (var c = allbb, u = 0; u < c.length; u++) {
          e = 0;
          var p = c[u].split("|");
          if (p[1].length > 10) {
            var allpkno = p[1].replace(/(\d\d)/g, '$1 ').replace(/\s$/g, '').split(' ');
            p[1] = allpkno;
            //console.log(p,p[1].length,allpkno);
          }
          if (2 == p.length) for (var m = 0; i > m; m++) for (var b = 0; 10 > b; b++) {
            switch (Number(w)) {
            case 1:
              r = Number(p[1][m]);
              break;
            case 7:
              r = Number(p[1][m]);
              break;
            case 2:
              r = Number(p[1][m + 1]);
              break;
            case 3:
              r = Number(p[1][m]);
              break;
            case 4:
              r = Number(p[1][m + 2]);
              break;
            case 5:
              r = Number(p[1][m]);
              break;
            default:
              r = Number(p[1][m + 3])
            }
            r == b ? (h[e] += 1, n[e] += 1, d[e] = 0) : (n[e] = 0, d[e] += 1),
            s[e] = n[e] > s[e] ? n[e] : s[e],
            a[e] = d[e] > a[e] ? d[e] : a[e],
            e += 1
          }
          p = null
        }
        for (var f = [], o = 0; l > o; o++) f[o] = new Object,
        f[o].id = 0,
        f[o].kjcs = 0,
        f[o].lccs = 0,
        f[o].int = 0;
        for (var N = 0,
        y = 0,
        g = 0; i > g; g++) {
          for (var v = [], o = 0; 10 > o; o++) v[o] = new Object,
          v[o].id = N,
          v[o].kjcs = h[N],
          v[o].lccs = s[N],
          v[o].int = 0,
          N += 1;
          v.sort(sorting(function(t, e) {
            return t.lccs > e.lccs ? -1 : t.lccs < e.lccs ? 1 : 0
          })),
          v.sort(sorting(function(t, e) {
            return t.kjcs > e.kjcs ? -1 : t.kjcs < e.kjcs ? 1 : 0
          })),
          v[0].int = 0,
          v[1].int = 0,
          v[2].int = 0,
          v[3].int = 1,
          v[4].int = 1,
          v[5].int = 1,
          v[6].int = 1,
          v[7].int = 2,
          v[8].int = 2,
          v[9].int = 2;
          for (var o = 0; 10 > o; o++) f[y] = v[o],
          f[y].id = v[o].id,
          f[y].kjcs = v[o].kjcs,
          f[y].lccs = v[o].lccs,
          f[y].int = v[o].int,
          y += 1
        }
        f.sort(sorting(function(t, e) {
          return t.id < e.id ? -1 : t.id > e.id ? 1 : 0
        }))
      } else if (chkxuanwu(id)) {
        for (var e = 0,
        r = 0,
        h = new Array,
        a = new Array,
        s = new Array,
        n = new Array,
        d = new Array,
        l = 55,
        i = 5,
        o = 0; l > o; o++) h[o] = 0,
        a[o] = 0,
        s[o] = 0,
        n[o] = 0,
        d[o] = 0;
        for (var c = t.name.split(",").reverse(), u = 0; u < c.length; u++) {
          e = 0;
          var p = c[u].split("|");
          if (2 == p.length) for (var m = 0; i > m; m++) for (var b = 1; 11 >= b; b++) {
            var I = parseInt(p[1][0] + p[1][1]),
            k = parseInt(p[1][2] + p[1][3]),
            A = parseInt(p[1][4] + p[1][5]),
            q = parseInt(p[1][6] + p[1][7]),
            j = parseInt(p[1][8] + p[1][9]);
            parseInt(0 == m ? I: 1 == m ? k: 2 == m ? A: 3 == m ? q: j) == b ? (h[e] += 1, n[e] += 1, d[e] = 0) : (n[e] = 0, d[e] += 1),
            s[e] = n[e] > s[e] ? n[e] : s[e],
            a[e] = d[e] > a[e] ? d[e] : a[e],
            e += 1
          }
          p = null
        }
        for (var f = [], o = 0; l > o; o++) f[o] = new Object,
        f[o].id = 0,
        f[o].kjcs = 0,
        f[o].lccs = 0,
        f[o].int = 0,
        f[o].zdyl = 0;
        for (var N = 0,
        y = 0,
        g = 0; i > g; g++) {
          for (var v = [], o = 0; 11 > o; o++) v[o] = new Object,
          v[o].id = N,
          v[o].kjcs = h[N],
          v[o].lccs = s[N],
          v[o].int = 0,
          v[o].zdyl = a[N],
          N += 1;
          v.sort(sorting(function(t, e) {
            return t.zdyl > e.zdyl ? -1 : t.zdyl < e.zdyl ? 1 : 0
          })),
          v.sort(sorting(function(t, e) {
            return t.lccs > e.lccs ? -1 : t.lccs < e.lccs ? 1 : 0
          })),
          v.sort(sorting(function(t, e) {
            return t.kjcs > e.kjcs ? -1 : t.kjcs < e.kjcs ? 1 : 0
          })),
          v[0].int = 0,
          v[1].int = 0,
          v[2].int = 0,
          v[3].int = 1,
          v[4].int = 1,
          v[5].int = 1,
          v[6].int = 1,
          v[7].int = 2,
          v[8].int = 2,
          v[9].int = 2,
          v[10].int = 2;
          for (var o = 0; 11 > o; o++) f[y] = v[o],
          f[y].id = v[o].id,
          f[y].kjcs = v[o].kjcs,
          f[y].lccs = v[o].lccs,
          f[y].int = v[o].int,
          y += 1
        }
        f.sort(sorting(function(t, e) {
          return t.id < e.id ? -1 : t.id > e.id ? 1 : 0
        }))
      }
      if (chkthreed(id)) {
        for (var e = 0,
        r = 0,
        h = new Array,
        a = new Array,
        s = new Array,
        n = new Array,
        d = new Array,
        l = 30,
        i = 3,
        o = 0; l > o; o++) h[o] = 0,
        a[o] = 0,
        s[o] = 0,
        n[o] = 0,
        d[o] = 0;
        for (var c = t.name.split(",").reverse(), u = 0; u < c.length; u++) {
          e = 0;
          var p = c[u].split("|");
          if (2 == p.length) for (var m = 0; i > m; m++) for (var b = 0; 10 > b; b++) r = Number(p[1][m]),
          r == b ? (h[e] += 1, n[e] += 1, d[e] = 0) : (n[e] = 0, d[e] += 1),
          s[e] = n[e] > s[e] ? n[e] : s[e],
          a[e] = d[e] > a[e] ? d[e] : a[e],
          e += 1;
          p = null
        }
        for (var f = [], o = 0; l > o; o++) f[o] = new Object,
        f[o].id = 0,
        f[o].kjcs = 0,
        f[o].lccs = 0,
        f[o].int = 0,
        f[o].zdyl = 0;
        for (var N = 0,
        y = 0,
        g = 0; i > g; g++) {
          for (var v = [], o = 0; 10 > o; o++) v[o] = new Object,
          v[o].id = N,
          v[o].kjcs = h[N],
          v[o].lccs = s[N],
          v[o].int = 0,
          v[o].zdyl = a[N],
          N += 1;
          v.sort(sorting(function(t, e) {
            return t.lccs > e.lccs ? -1 : t.lccs < e.lccs ? 1 : 0
          })),
          v.sort(sorting(function(t, e) {
            return t.kjcs > e.kjcs ? -1 : t.kjcs < e.kjcs ? 1 : 0
          })),
          v[0].int = 0,
          v[1].int = 0,
          v[2].int = 0,
          v[3].int = 1,
          v[4].int = 1,
          v[5].int = 1,
          v[6].int = 1,
          v[7].int = 2,
          v[8].int = 2,
          v[9].int = 2;
          for (var o = 0; 10 > o; o++) f[y] = v[o],
          f[y].id = v[o].id,
          f[y].kjcs = v[o].kjcs,
          f[y].lccs = v[o].lccs,
          f[y].int = v[o].int,
          y += 1
        }
        f.sort(sorting(function(t, e) {
          return t.id < e.id ? -1 : t.id > e.id ? 1 : 0
        }))
      }
      var B, E = t.name.split(",").reverse();
      var headertpl = "<th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>";
      var titlech = ['万位', '千位', '百位', '十位', '个位'];
      if (id == 43 || id == 204 || id == 47) {
        headertpl = "<th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th>";
        titlech = ['冠军', '亚军', '季军', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];
      }
      if (id == 41) {
        headertpl = "<th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>";
        titlech = ['百位', '十位', '个位','',''];
      }
      if (chkssc(id)) switch (Number(w)) {
      case 1:
        B = ["<thead>", "<tr><th width=8% class=sa rowspan=2 colspan=3>期号</th><th width=6% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>", titlech[0], "</th><th colspan=10>", titlech[1], "</th><th colspan=10>", titlech[2], "</th><th colspan=10>", titlech[3], "</th><th colspan=10>", titlech[4], "</th><th colspan=10>号码分布</th></tr>", "<tr>", headertpl, headertpl, headertpl, headertpl, headertpl, headertpl, "</tr></thead><tbody>"].join('');
        break;
      case 7:
        B = ["<thead>", "<tr><th width=8% class=sa rowspan=2 colspan=3>期号</th><th width=6% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>", titlech[5], "</th><th colspan=10>", titlech[6], "</th><th colspan=10>", titlech[7], "</th><th colspan=10>", titlech[8], "</th><th colspan=10>", titlech[9], "</th><th colspan=10>号码分布</th></tr>", "<tr>", headertpl, headertpl, headertpl, headertpl, headertpl, headertpl, "</tr></thead><tbody>"].join('');
        break;
      case 2:
        B = "<thead><tr><th width=8% class=sa rowspan=2 colspan=3>期号</th><th width=6% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>" + titlech[1] + "</th><th colspan=10>" + titlech[2] + "</th><th colspan=10>" + titlech[3] + "</th><th colspan=10>" + titlech[4] + "</th><th colspan=10>号码分布</th></tr><tr>" + [headertpl, headertpl, headertpl, headertpl, headertpl].join('') + "</tr></thead><tbody>";
        break;
      case 3:
        B = "<thead><tr><th width=7% class=sa rowspan=2 colspan=3>期号</th><th width=5% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>" + titlech[0] + "</th><th colspan=10>" + titlech[1] + "</th><th colspan=10>" + titlech[2] + "</th><th colspan=10>号码分布</th><th rowspan=2 colspan=3>大小形态</th><th rowspan=2 colspan=3>单双形态</th><th rowspan=2 colspan=3>质合形态</th><th rowspan=2 colspan=3>012形态</th><th rowspan=2>豹子</th><th rowspan=2>组三</th><th rowspan=2>组六</th><th rowspan=2>跨度</th><th rowspan=2>直选和值</th><th rowspan=2>和值尾数</th></tr><tr>" + [headertpl, headertpl, headertpl, headertpl].join('') + "</tr></thead><tbody>";
        break;
      case 4:
        B = "<thead><tr><th width=7% class=sa rowspan=2 colspan=3>期号</th><th width=5% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>" + titlech[2] + "</th><th colspan=10>" + titlech[3] + "</th><th colspan=10>" + titlech[4] + "</th><th colspan=10>号码分布</th><th rowspan=2 colspan=3>大小形态</th><th rowspan=2 colspan=3>单双形态</th><th rowspan=2 colspan=3>质合形态</th><th rowspan=2 colspan=3>012形态</th><th rowspan=2>豹子</th><th rowspan=2>组三</th><th rowspan=2>组六</th><th rowspan=2>跨度</th><th rowspan=2>直选和值</th><th rowspan=2>和值尾数</th></tr><tr>" + [headertpl, headertpl, headertpl, headertpl].join('') + "</tr></thead><tbody>";
        break;
      case 5:
        B = "<thead><tr><th width=8% class=sa rowspan=2 colspan=3>期号</th><th width=6% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>" + titlech[0] + "</th><th colspan=10>" + titlech[1] + "</th><th colspan=10>号码分布</th><th colspan=10>跨度走势</th><th rowspan=2>对子</th><th rowspan=2>和值</th></tr><tr>" + [headertpl, headertpl, headertpl, headertpl].join('') + "</tr></thead><tbody>";
        break;
      default:
        B = "<thead><tr><th width=8% class=sa rowspan=2 colspan=3>期号</th><th width=6% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>" + titlech[3] + "</th><th colspan=10>" + titlech[4] + "</th><th colspan=10>号码分布</th><th colspan=10>跨度走势</th><th rowspan=2>对子</th><th rowspan=2>和值</th></tr><tr>" + [headertpl, headertpl, headertpl, headertpl].join('') + "</tr></thead><tbody>"
      } else(chkxuanwu(id)) ? B = "<thead><tr><th width=7% class=sa rowspan=2 colspan=3>期号</th><th width=7% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=11>万位</th><th colspan=11>千位</th><th colspan=11>百位</th><th colspan=11>十位</th><th colspan=11>个位</th><th colspan=11>号码分布</th></tr><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th></tr></thead><tbody>": chkthreed(id) && (B = "<thead><tr><th width=7% class=sa rowspan=2 colspan=3>期号</th><th width=5% class=sa rowspan=2 colspan=2>开奖号码</th><th colspan=10>百位</th><th colspan=10>十位</th><th colspan=10>个位</th><th colspan=10>号码分布</th><th rowspan=2 colspan=3>大小形态</th><th rowspan=2 colspan=3>单双形态</th><th rowspan=2 colspan=3>质合形态</th><th rowspan=2 colspan=3>012形态</th><th rowspan=2>豹子</th><th rowspan=2>组三</th><th rowspan=2>组六</th><th rowspan=2>跨度</th><th rowspan=2>直选和值</th><th rowspan=2>和值尾数</th></tr><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody>");
      for (var M = 0,
      T = 0,
      C = 0,
      L = 0,
      S = 0,
      x = 0,
      z = 0,
      H = 0,
      G = 0,
      O = 0,
      Q = 0,
      W = 0,
      _ = 0,
      D = 0,
      P = 0,
      F = 0,
      J = 0,
      K = 0,
      R = 0,
      U = 0,
      V = new Array,
      o = 0; 10 > o; o++) V[o] = 0;
      for (var X = new Array,
      o = 0; 10 > o; o++) X[o] = 0;
      for (var Y = new Array,
      o = 0; 10 > o; o++) Y[o] = 0;
      for (var Z = new Array,
      o = 0; 10 > o; o++) Z[o] = 0;
      for (var te = new Array,
      o = 0; 10 > o; o++) te[o] = 0;
      for (var ee = new Array,
      o = 0; 10 > o; o++) ee[o] = 0;
      for (var re = new Array,
      l = (1 == w || 7 == w) ? 50 : 2 == w ? 40 : 3 == w ? 30 : 4 == w ? 30 : 5 == w ? 20 : 20, o = 0; l > o; o++) re[o] = 0;
      for (var he = new Array,
      o = 0; l > o; o++) he[o] = 0;
      for (var ae = new Array,
      o = 0; l + 10 > o; o++) ae[o] = 0;
      for (var se = new Array,
      o = 0; l + 10 > o; o++) se[o] = 0;
      for (var ne = new Array,
      o = 0; l + 10 > o; o++) ne[o] = 0;
      for (var de = new Array,
      o = 0; l + 10 > o; o++) de[o] = 0;
      for (var le = new Array,
      o = 0; l + 10 > o; o++) le[o] = 0;
      for (var ie = new Array,
      o = 0; 10 > o; o++) ie[o] = 0;
      for (var oe = new Array,
      o = 0; 55 > o; o++) oe[o] = 0;
      for (var ce = new Array,
      o = 0; 12 > o; o++) ce[o] = 0;
      for (var ue = new Array,
      o = 0; 66 > o; o++) ue[o] = 0;
      for (var pe = new Array,
      o = 0; 66 > o; o++) pe[o] = 0;
      for (var me = new Array,
      o = 0; 66 > o; o++) me[o] = 0;
      for (var be = new Array,
      o = 0; 66 > o; o++) be[o] = 0;
      for (var we = new Array,
      o = 0; 66 > o; o++) we[o] = 0;
      for (var fe = new Array,
      o = 0; 55 > o; o++) fe[o] = 0;
      var Ne = E.length; //console.log(Ne,'NeNeNe');
      if (chkssc(id)) for (var ye = 0; ye < E.length; ye++) {
        var ge = E[ye].split("|");
        he[ge[1][0]] = ye + 1,
        he[parseInt(10 + parseInt(ge[1][1]))] = ye + 1,
        he[parseInt(20 + parseInt(ge[1][2]))] = ye + 1,
        he[parseInt(30 + parseInt(ge[1][3]))] = ye + 1,
        he[parseInt(40 + parseInt(ge[1][4]))] = ye + 1
      } else if (chkxuanwu(id)) for (var ye = 0; ye < E.length; ye++) {
        var ge = E[ye].split("|");
        fe[parseInt(parseInt(ge[1][0] + ge[1][1]) - 1)] = ye + 1,
        fe[parseInt(parseInt(11 + parseInt(ge[1][2] + ge[1][3]) - 1))] = ye + 1,
        fe[parseInt(parseInt(22 + parseInt(ge[1][4] + ge[1][5]) - 1))] = ye + 1,
        fe[parseInt(parseInt(33 + parseInt(ge[1][6] + ge[1][7]) - 1))] = ye + 1,
        fe[parseInt(parseInt(44 + parseInt(ge[1][8] + ge[1][9]) - 1))] = ye + 1
      } else if (chkthreed(id)) for (var ye = 0; ye < E.length; ye++) {
        var ge = E[ye].split("|");
        he[ge[1][0]] = ye + 1,
        he[parseInt(10 + parseInt(ge[1][1]))] = ye + 1,
        he[parseInt(20 + parseInt(ge[1][2]))] = ye + 1
      }
      //console.log(E,'E.lengthE.lengthE.length');
      for (var o = 0; o < E.length; o++) {
        o % 5 == 0 && o > 0 && (B += '<tr name=clears style="background:#fff;height:1px;border: 2px"></tr>');
        var ge = E[o].split("|");
        if (ge[1].length > 10) {
          var temppkno = ge[1].replace(/(\d\d)/g, '$1 ').replace(/\s$/g, '').split(' ');
          ge[1] = temppkno;
          //console.log(p,p[1].length,allpkno);    
        }
        if (2 == ge.length) {
          //console.log(w,'wwwwwwwwwwwwwwwwwwww');
          if (chkssc(id)) switch (Number(w)) {
          case 1:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i class=r>" + ge[1][0] + "</i><i class=r>" + ge[1][1] + "</i><i class=r>" + ge[1][2] + "</i><i class=r>" + (typeof ge[1][3] !='undefined' ? ge[1][3] :'') + "</i><i class=r>" + (typeof ge[1][4] !='undefined' ? ge[1][4] :'') + "</i></td>";
            break;
          case 7:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i class=r>" + ge[1][5] + "</i><i class=r>" + ge[1][6] + "</i><i class=r>" + ge[1][7] + "</i><i class=r>" + ge[1][8] + "</i><i class=r>" + ge[1][9] + "</i></td>";
            break;
          case 2:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i>" + ge[1][0] + "</i><i class=r>" + ge[1][1] + "</i><i class=r>" + ge[1][2] + "</i><i class=r>" + (typeof ge[1][3] !='undefined' ? ge[1][3] :'') + "</i><i class=r>" + (typeof ge[1][4] !='undefined' ? ge[1][4] :'') + "</i></td>";
            break;
          case 3:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i class=r>" + ge[1][0] + "</i><i class=r>" + ge[1][1] + "</i><i class=r>" + ge[1][2] + "</i><i>" + (typeof ge[1][3] !='undefined' ? ge[1][3] :'') + "</i><i>" + (typeof ge[1][4] !='undefined' ? ge[1][4] :'') + "</i></td>";
            break;
          case 4:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i>" + ge[1][0] + "</i><i>" + ge[1][1] + "</i><i class=r>" + ge[1][2] + "</i><i class=r>" + (typeof ge[1][3] !='undefined' ? ge[1][3] :'') + "</i><i class=r>" + (typeof ge[1][4] !='undefined' ? ge[1][4] :'') + "</i></td>";
            break;
          case 5:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i class=r>" + ge[1][0] + "</i><i class=r>" + ge[1][1] + "</i><i>" + ge[1][2] + "</i><i>" + (typeof ge[1][3] !='undefined' ? ge[1][3] :'') + "</i><i>" + (typeof ge[1][4] !='undefined' ? ge[1][4] :'') + "</i></td>";
            break;
          default:
            B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i>" + ge[1][0] + "</i><i>" + ge[1][1] + "</i><i>" + ge[1][2] + "</i><i class=r>" + (typeof ge[1][3] !='undefined' ? ge[1][3] :'') + "</i><i class=r>" + (typeof ge[1][4] !='undefined' ? ge[1][4] :'') + "</i></td>"
          } else chkxuanwu(id) ? B = B + "<tr><td width=70 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i class=r>" + ge[1][0] + ge[1][1] + "</i> <i class=r>" + ge[1][2] + ge[1][3] + "</i> <i class=r>" + ge[1][4] + ge[1][5] + "</i> <i class=r>" + ge[1][6] + ge[1][7] + "</i> <i class=r>" + ge[1][8] + ge[1][9] + "</i></td>": chkthreed(id) && (B = B + "<tr><td width=60 colspan=3>" + ge[0] + "</td><td class=ball colspan=2><i class=r>" + ge[1][0] + "</i><i class=r>" + ge[1][1] + "</i><i class=r>" + ge[1][2] + "</i></td>");
          if (chkssc(id)) for (var ve = 0,
          i = (1 == w || 7 == w) ? 5 : 2 == w ? 4 : 3 == w ? 3 : 4 == w ? 3 : 5 == w ? 2 : 2, ye = 0; i > ye; ye++) for (var g = (chkpk(id) ? 1 : 0); (chkpk(id) ? 11 : 10) > g; g++) {
            var Ie = 0;
            //console.log(ge[1]);
            switch (Number(w)) {
            case 1:
              Ie = Number(ge[1][ye]);
              break;
            case 7:
              Ie = Number(ge[1][ye + 5]);
              break;
            case 2:
              Ie = Number(ge[1][ye + 1]);
              break;
            case 3:
              Ie = Number(ge[1][ye]);
              break;
            case 4:
              Ie = Number(ge[1][ye + 2]);
              break;
            case 5:
              Ie = Number(ge[1][ye]);
              break;
            default:
              Ie = Number(ge[1][ye + 3])
            }
            //console.log(Ie,g,'IeIeIe');
            if (Ie == g) {
              re[ve] = 0,
              ae[ve] += 1,
              ne[ve] += 1,
              se[ve] = parseInt(se[ve] < re[ve] ? re[ve] : se[ve]),
              de[ve] = de[ve] < ne[ve] ? ne[ve] : de[ve];
              var ke;
              //console.log(f);
              ke = 0 == f[ve].int ? "num": 1 == f[ve].int ? '"num wenhao"': '"num lenghao"',
              B = B + "<td width=18 class=" + ke + " name=line" + ye + " id=line" + ye + " title=" + Ie + "><em rel='gfd'>" + Ie + "</em></td>"
            } else re[ve] += 1,
            se[ve] = parseInt(se[ve] < re[ve] ? re[ve] : se[ve]),
            de[ve] = de[ve] < ne[ve] ? ne[ve] : de[ve],
            ne[ve] = 0,
            B = he[ve + parseInt((1 == w || 7 == w) ? 0 : 2 == w ? 10 : 3 == w ? 0 : 4 == w ? 20 : 5 == w ? 0 : 30)] > o ? B + "<td width=18 class=num title=" + re[ve] + ">" + re[ve] + "</td>": B + "<td width=18 name=back class=num title=" + re[ve] + ">" + re[ve] + "</td>";
            ve += 1
          } else if (chkxuanwu(id)) for (var I = parseInt(ge[1][0] + ge[1][1]), k = parseInt(ge[1][2] + ge[1][3]), A = parseInt(ge[1][4] + ge[1][5]), q = parseInt(ge[1][6] + ge[1][7]), j = parseInt(ge[1][8] + ge[1][9]), ve = 0, ye = 0; 5 > ye; ye++) for (var g = 1; 12 > g; g++) {
            if (g == parseInt(0 == ye ? I: 1 == ye ? k: 2 == ye ? A: 3 == ye ? q: j)) {
              ue[ve] += 1,
              oe[ve] = 0,
              we[ve] += 1,
              oe[ve] > pe[ve] && (pe[ve] = oe[ve]),
              we[ve] > me[ve] && (me[ve] = we[ve]);
              var ke;
              ke = 0 == f[ve].int ? "num": 1 == f[ve].int ? '"num wenhao"': '"num lenghao"',
              B = B + "<td width=18 class=" + ke + " name=line" + ye + " id=line" + ye + "><em>" + parseInt(0 == ye ? I: 1 == ye ? k: 2 == ye ? A: 3 == ye ? q: j) + "</em></td>"
            } else oe[ve] += 1,
            oe[ve] > pe[ve] && (pe[ve] = oe[ve]),
            we[ve] > me[ve] && (me[ve] = we[ve]),
            we[ve] = 0,
            B = fe[ve] > o ? B + "<td width=18 class=num title=" + oe[ve] + ">" + oe[ve] + "</td>": B + "<td width=18 name=back class=num title=" + oe[ve] + ">" + oe[ve] + "</td>";
            ve += 1
          }
          if (chkthreed(id)) for (var ve = 0,
          i = 3,
          ye = 0; i > ye; ye++) for (var g = 0; 10 > g; g++) {
            var Ie = 0;
            switch (Number(w)) {
            case 1:
              Ie = Number(ge[1][ye]);
              break;
            case 7:
              Ie = Number(ge[1][ye]);
              break;
            case 2:
              Ie = Number(ge[1][ye + 1]);
              break;
            case 3:
              Ie = Number(ge[1][ye]);
              break;
            case 4:
              Ie = Number(ge[1][ye + 2]);
              break;
            case 5:
              Ie = Number(ge[1][ye]);
              break;
            default:
              Ie = Number(ge[1][ye + 3])
            }
            if (Ie == g) {
              re[ve] = 0,
              ae[ve] += 1,
              ne[ve] += 1,
              de[ve] = de[ve] < ne[ve] ? ne[ve] : de[ve];
              var ke;
              ke = 0 == f[ve].int ? "num": 1 == f[ve].int ? '"num wenhao"': '"num lenghao"',
              B = B + "<td width=18 class=" + ke + " name=line" + ye + " id=line" + ye + " title=" + Ie + "><em>" + Ie + "</em></td>"
            } else re[ve] += 1,
            se[ve] = parseInt(se[ve] < re[ve] ? re[ve] : se[ve]),
            de[ve] = de[ve] < ne[ve] ? ne[ve] : de[ve],
            ne[ve] = 0,
            B = he[ve] > o ? B + "<td width=18 class=num title=" + re[ve] + ">" + re[ve] + "</td>": B + "<td width=18 name=back class=num title=" + re[ve] + ">" + re[ve] + "</td>";
            ve += 1
          }

          if (chkssc(id)) for (var g = (chkpk(id) ? 1 : 0); (chkpk(id) ? 11 : 10) > g; g++) switch (Number(w)) {
          case 1:
            if (Number(ge[1][0]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][0]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][0]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][0]) == Number(ge[1][3]) ? "id=purple": Number(ge[1][0]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][1]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][1]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][3]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][2]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][2]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][3]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][3]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][3]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][3]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][3]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][3]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][4]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][4]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][4]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][4]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][4]) == Number(ge[1][3]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + (isNaN(ie[g]) ? '': ie[g]) + ">" + (isNaN(ie[g]) ? '': ie[g]) + "</td>";
            break;
          case 7:
            if (Number(ge[1][5]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][5]) == Number(ge[1][6]) ? "id=purple": Number(ge[1][5]) == Number(ge[1][7]) ? "id=purple": Number(ge[1][5]) == Number(ge[1][8]) ? "id=purple": Number(ge[1][5]) == Number(ge[1][9]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][6]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][6]) == Number(ge[1][5]) ? "id=purple": Number(ge[1][6]) == Number(ge[1][7]) ? "id=purple": Number(ge[1][6]) == Number(ge[1][8]) ? "id=purple": Number(ge[1][6]) == Number(ge[1][9]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][7]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][7]) == Number(ge[1][5]) ? "id=purple": Number(ge[1][7]) == Number(ge[1][6]) ? "id=purple": Number(ge[1][7]) == Number(ge[1][8]) ? "id=purple": Number(ge[1][7]) == Number(ge[1][9]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][8]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][8]) == Number(ge[1][5]) ? "id=purple": Number(ge[1][8]) == Number(ge[1][6]) ? "id=purple": Number(ge[1][8]) == Number(ge[1][7]) ? "id=purple": Number(ge[1][8]) == Number(ge[1][9]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][9]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][9]) == Number(ge[1][5]) ? "id=purple": Number(ge[1][9]) == Number(ge[1][6]) ? "id=purple": Number(ge[1][9]) == Number(ge[1][7]) ? "id=purple": Number(ge[1][9]) == Number(ge[1][8]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + (isNaN(ie[g]) ? '': ie[g]) + ">" + (isNaN(ie[g]) ? '': ie[g]) + "</td>";
            break;
          case 2:
            if (Number(ge[1][1]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][1]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][3]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][2]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][2]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][3]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][3]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][3]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][3]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][3]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][4]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][4]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][4]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][4]) == Number(ge[1][3]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + ie[g] + ">" + ie[g] + "</td>";
            break;
          case 3:
            if (Number(ge[1][0]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][0]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][0]) == Number(ge[1][2]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][1]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][1]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][2]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][2]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][2]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][1]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + ie[g] + ">" + ie[g] + "</td>";
            break;
          case 4:
            if (Number(ge[1][2]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][2]) == Number(ge[1][3]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][3]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][3]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][3]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][4]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][4]) == Number(ge[1][2]) ? "id=purple": Number(ge[1][4]) == Number(ge[1][3]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + ie[g] + ">" + ie[g] + "</td>";
            break;
          case 5:
            if (Number(ge[1][0]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][0]) == Number(ge[1][1]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][1]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][1]) == Number(ge[1][0]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + ie[g] + ">" + ie[g] + "</td>";
            break;
          default:
            if (Number(ge[1][3]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][3]) == Number(ge[1][4]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else if (Number(ge[1][4]) == g) {
              ie[g] = 0,
              ae[10 * i + g] += 1,
              ne[10 * i + g] += 1,
              se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
              de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
              var Ae = Number(ge[1][4]) == Number(ge[1][3]) ? "id=purple": "id=green";
              B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
            } else ie[g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
            ne[10 * i + g] = 0,
            B = B + "<td width=18 class=num title=" + ie[g] + ">" + ie[g] + "</td>"
          } else if (chkxuanwu(id)) for (var I = parseInt(ge[1][0] + ge[1][1]), k = parseInt(ge[1][2] + ge[1][3]), A = parseInt(ge[1][4] + ge[1][5]), q = parseInt(ge[1][6] + ge[1][7]), j = parseInt(ge[1][8] + ge[1][9]), g = 1; 12 > g; g++) g == I ? (ue[g + 54] += 1, ce[g] = 0, we[ve] += 1, ce[g] > pe[ve] && (pe[ve] = ce[g]), we[ve] > me[ve] && (me[ve] = we[ve]), B = B + "<td id=green width=18 name=line5 class=num title=><em>" + I + "</em></td>") : g == k ? (ue[g + 54] += 1, ce[g] = 0, we[ve] += 1, ce[g] > pe[ve] && (pe[ve] = ce[g]), we[ve] > me[ve] && (me[ve] = we[ve]), B = B + "<td id=green width=18 name=line5 class=num title=><em>" + k + "</em></td>") : g == A ? (ue[g + 54] += 1, ce[g] = 0, we[ve] += 1, ce[g] > pe[ve] && (pe[ve] = ce[g]), we[ve] > me[ve] && (me[ve] = we[ve]), B = B + "<td id=green width=18 name=line5 class=num title=><em>" + A + "</em></td>") : g == q ? (ue[g + 54] += 1, ce[g] = 0, we[ve] += 1, ce[g] > pe[ve] && (pe[ve] = ce[g]), we[ve] > me[ve] && (me[ve] = we[ve]), B = B + "<td id=green width=18 name=line5 class=num title=><em>" + q + "</em></td>") : g == j ? (ue[g + 54] += 1, ce[g] = 0, we[ve] += 1, ce[g] > pe[ve] && (pe[ve] = ce[g]), we[ve] > me[ve] && (me[ve] = we[ve]), B = B + "<td id=green width=18 name=line5 class=num title=><em>" + j + "</em></td>") : (ce[g] += 1, ce[g] > pe[ve] && (pe[ve] = ce[g]), B = B + "<td width=18 class=num title=>" + ce[g] + "</td>", we[ve] > me[ve] && (me[ve] = we[ve]), we[ve] = 0),
          ve += 1;
          else if (chkthreed(id)) for (var g = 0; 10 > g; g++) if (Number(ge[1][0]) == g) {
            ie[g] = 0,
            ae[10 * i + g] += 1,
            ne[10 * i + g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
            var Ae = Number(ge[1][0]) == Number(ge[1][1]) ? "id=purple": Number(ge[1][0]) == Number(ge[1][2]) ? "id=purple": "id=green";
            B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
          } else if (Number(ge[1][1]) == g) {
            ie[g] = 0,
            ae[10 * i + g] += 1,
            ne[10 * i + g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
            var Ae = Number(ge[1][1]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][1]) == Number(ge[1][2]) ? "id=purple": "id=green";
            B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
          } else if (Number(ge[1][2]) == g) {
            ie[g] = 0,
            ae[10 * i + g] += 1,
            ne[10 * i + g] += 1,
            se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
            de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g];
            var Ae = Number(ge[1][2]) == Number(ge[1][0]) ? "id=purple": Number(ge[1][2]) == Number(ge[1][1]) ? "id=purple": "id=green";
            B = B + "<td width=18 " + Ae + " name=line5 class=num title=" + g + "><em>" + g + "</em></td>"
          } else ie[g] += 1,
          se[10 * i + g] = parseInt(se[10 * i + g] < ie[g] ? ie[g] : se[10 * i + g]),
          de[10 * i + g] = de[10 * i + g] < ne[10 * i + g] ? ne[10 * i + g] : de[10 * i + g],
          ne[10 * i + g] = 0,
          B = B + "<td width=18 class=num title=" + ie[g] + ">" + ie[g] + "</td>";
          if (chkssc(id)) {
            var qe = "";
            if (3 == w || 4 == w) {
              var g = 0;
              for (g = 0; 3 > g; g++) qe += ge[1][g + parseInt(3 == w ? 0 : 2)] >= 5 ? "大": "小";
              for (B = B + '<td width=18 colspan=3 class=nums style="background-color: #4dc3ff;color: #fff;">' + qe + "</td>", qe = "", g = 0; 3 > g; g++) qe += ge[1][g + parseInt(3 == w ? 0 : 2)] % 2 == 0 ? "双": "单";
              for (B = B + '<td width=18 colspan=3 class=nums style="background-color: #7acc52;color: #fff;">' + qe + "</td>", qe = "", g = 0; 3 > g; g++) qe += 1 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 2 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 3 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 5 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 7 == ge[1][g + parseInt(3 == w ? 0 : 2)] ? "质": "合";
              for (B = B + '<td width=18 colspan=3 class=nums style="background-color: #4dc3ff;color: #fff;">' + qe + "</td>", qe = "", g = 0; 3 > g; g++) qe += 0 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 3 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 6 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 9 == ge[1][g + parseInt(3 == w ? 0 : 2)] ? "0": 1 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 4 == ge[1][g + parseInt(3 == w ? 0 : 2)] || 7 == ge[1][g + parseInt(3 == w ? 0 : 2)] ? "1": "2";
              B = B + '<td width=18 colspan=3 class=nums style="background-color: #7acc52;color: #fff;">' + qe + "</td>",
              qe = "",
              ge[1][parseInt(3 == w ? 0 : 2)] == ge[1][parseInt(3 == w ? 1 : 3)] && ge[1][parseInt(3 == w ? 0 : 2)] == ge[1][parseInt(3 == w ? 2 : 4)] ? (B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>", M += 1, L = 0, _ += 1, _ > S && (S = _)) : (L += 1, _ = 0, L > O && (O = L), B = B + "<td width=18 class=nums>" + L + "</td>"),
              ge[1][parseInt(3 == w ? 0 : 2)] == ge[1][parseInt(3 == w ? 1 : 3)] || ge[1][parseInt(3 == w ? 0 : 2)] == ge[1][parseInt(3 == w ? 2 : 4)] ? (T += 1, x = 0, D += 1, D > z && (z = D), B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>") : (x += 1, D = 0, x > Q && (Q = x), B = B + "<td width=18 class=nums>" + x + "</td>"),
              ge[1][parseInt(3 == w ? 0 : 2)] == ge[1][parseInt(3 == w ? 1 : 3)] || ge[1][parseInt(3 == w ? 0 : 2)] == ge[1][parseInt(3 == w ? 2 : 4)] ? (H += 1, P = 0, H > W && (W = H), B = B + "<td width=18 class=nums>" + H + "</td>") : (C += 1, H = 0, P += 1, P > G && (G = P), B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>");
              var je = new Array;
              je[0] = parseInt(ge[1][parseInt(3 == w ? 0 : 2)]),
              je[1] = parseInt(ge[1][parseInt(3 == w ? 1 : 3)]),
              je[2] = parseInt(ge[1][parseInt(3 == w ? 2 : 4)]);
              var Be = Math.max.apply(null, je) - Math.min.apply(null, je);
              B = B + '<td width=18 class=nums style="background-color: #4dc3ff;color: #fff;">' + Be + "</td>",
              Be = parseInt(ge[1][parseInt(3 == w ? 0 : 2)]) + parseInt(ge[1][parseInt(3 == w ? 1 : 3)]) + parseInt(ge[1][parseInt(3 == w ? 2 : 4)]),
              B = B + '<td width=18 class=nums style="background-color: #f66;color: #fff;">' + Be + "</td>";
              var Ee = Be.toString();
              B = B + "<td width=18 class=nums>" + Ee.substr(Ee.length - 1, 1) + "</td>"
            } else if (5 == w || 6 == w) {
              for (var g = 0; 10 > g; g++) {
                var Me = new Array;
                Me[0] = parseInt(ge[1][parseInt(5 == w ? 0 : 3)]),
                Me[1] = parseInt(ge[1][parseInt(5 == w ? 1 : 4)]);
                var Be = Math.max.apply(null, Me) - Math.min.apply(null, Me);
                Be == g ? (te[g] += 1, te[g] > ee[g] && (ee[g] = te[g]), V[g] = 0, Y[g] += 1, Y[g] > Z[g] && (Z[g] = Y[g]), B = B + '<td width=18 class=nums style="background-color: #4dc3ff;color: #fff;">' + g + "</td>") : (V[g] += 1, te[g] = 0, V[g] > X[g] && (X[g] = V[g]), B = B + "<td width=18 class=nums>" + V[g] + "</td>")
              }
              ge[1][parseInt(5 == w ? 0 : 3)] == ge[1][parseInt(5 == w ? 1 : 4)] ? (F += 1, J = 0, K += 1, K > U && (U = K), B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>") : (J += 1, K = 0, J > R && (R = J), B = B + "<td width=18 class=nums>" + J + "</td>");
              var Te = parseInt(ge[1][parseInt(5 == w ? 0 : 3)]) + parseInt(ge[1][parseInt(5 == w ? 1 : 4)]);
              B = B + '<td width=18 class=nums style="background-color: #f66;color: #fff;">' + Te + "</td>"
            }
          } else if (chkthreed(id)) {
            var qe = "",
            g = 0;
            for (g = 0; 3 > g; g++) qe += ge[1][g] >= 5 ? "大": "小";
            for (B = B + '<td width=18 colspan=3 class=nums style="background-color: #4dc3ff;color: #fff;">' + qe + "</td>", qe = "", g = 0; 3 > g; g++) qe += ge[1][g] % 2 == 0 ? "双": "单";
            for (B = B + '<td width=18 colspan=3 class=nums style="background-color: #7acc52;color: #fff;">' + qe + "</td>", qe = "", g = 0; 3 > g; g++) qe += 1 == ge[1][g] || 2 == ge[1][g] || 3 == ge[1][g] || 5 == ge[1][g] || 7 == ge[1][g] ? "质": "合";
            for (B = B + '<td width=18 colspan=3 class=nums style="background-color: #4dc3ff;color: #fff;">' + qe + "</td>", qe = "", g = 0; 3 > g; g++) qe += 0 == ge[1][g] || 3 == ge[1][g] || 6 == ge[1][g] || 9 == ge[1][g] ? "0": 1 == ge[1][g] || 4 == ge[1][g] || 7 == ge[1][g] ? "1": "2";
            B = B + '<td width=18 colspan=3 class=nums style="background-color: #7acc52;color: #fff;">' + qe + "</td>",
            qe = "",
            ge[1][0] == ge[1][1] && ge[1][0] == ge[1][2] ? (B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>", M += 1, L = 0, _ += 1, _ > S && (S = _)) : (L += 1, _ = 0, L > O && (O = L), B = B + "<td width=18 class=nums>" + L + "</td>"),
            ge[1][0] == ge[1][1] || ge[1][0] == ge[1][2] ? (T += 1, x = 0, D += 1, D > z && (z = D), B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>") : (x += 1, D = 0, x > Q && (Q = x), B = B + "<td width=18 class=nums>" + x + "</td>"),
            ge[1][0] == ge[1][1] || ge[1][0] == ge[1][2] ? (H += 1, P = 0, H > W && (W = H), B = B + "<td width=18 class=nums>" + H + "</td>") : (C += 1, H = 0, P += 1, P > G && (G = P), B += "<td id=tick width=18 class=nums><em class='m_ico'>&#xe6b6;</em></td>");
            var je = new Array;
            je[0] = parseInt(ge[1][0]),
            je[1] = parseInt(ge[1][1]),
            je[2] = parseInt(ge[1][2]);
            var Be = Math.max.apply(null, je) - Math.min.apply(null, je);
            B = B + '<td width=18 class=nums style="background-color: #4dc3ff;color: #fff;">' + Be + "</td>",
            Be = parseInt(ge[1][0]) + parseInt(ge[1][1]) + parseInt(ge[1][2]),
            B = B + '<td width=18 class=nums style="background-color: #f66;color: #fff;">' + Be + "</td>";
            var Ee = Be.toString();
            B = B + "<td width=18 class=nums>" + Ee.substr(Ee.length - 1, 1) + "</td>"
          }
        }
        ge = null
      }
      if (chkssc(id)) {
        B += "</tr>",
        B += "<tr><th colspan=3>出现总次数</th><th colspan=2></th>";
        for (var g = 0; l + 10 > g; g++) B = B + "<td>" + ae[g] + "</td>",
        le[g] = 0 == ae[g] ? 0 : parseInt(Ne / ae[g]) + 1;
        if (3 == w || 4 == w) B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>',
        B = B + "<td>" + M + "</td><td>" + T + "</td><td>" + C + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>';
        else if (5 == w || 6 == w) {
          for (var g = 0; 10 > g; g++) B = B + "<td>" + Y[g] + "</td>";
          B = B + "<td>" + F + '</td><td style="background-color: #e1e1e1;"></td>'
        }
        B += "</tr><tr><th colspan=3>平均遗漏值</th><th colspan=2></th>";
        for (var g = 0; l + 10 > g; g++) B = B + "<td>" + parseInt(le[g]) + "</td>";
        if (3 == w || 4 == w) {
          B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>';
          var Ce = 0 == M ? 0 : parseInt(Ne / M),
          Le = 0 == T ? 0 : parseInt(Ne / T),
          Se = 0 == C ? 0 : parseInt(Ne / C);
          B = B + "<td>" + Ce + "</td><td>" + Le + "</td><td>" + Se + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>'
        } else if (5 == w || 6 == w) {
          for (var g = 0; 10 > g; g++) {
            var xe = parseInt(0 == Y[g] ? 0 : parseInt(Ne / Y[g]) + 1);
            B = B + "<td>" + xe + "</td>"
          }
          var ze = 0 == F ? 0 : parseInt(Ne / F);
          B = B + "<td>" + ze + '</td><td style="background-color: #e1e1e1;"></td>'
        }
        B += "</tr><tr><th colspan=3>最大遗漏值</th><th colspan=2></th>";
        for (var g = 0; l + 10 > g; g++) B = B + "<td>" + parseInt(se[g]) + "</td>";
        if (3 == w || 4 == w) B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>',
        B = B + "<td>" + O + "</td><td>" + Q + "</td><td>" + W + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>';
        else if (5 == w || 6 == w) {
          for (var g = 0; 10 > g; g++) B = B + "<td>" + X[g] + "</td>";
          B = B + "<td>" + R + '</td><td style="background-color: #e1e1e1;"></td>'
        }
        B += "</tr><tr><th colspan=3>最大连出值</th><th colspan=2></th>";
        for (var g = 0; l + 10 > g; g++) B = B + "<td>" + parseInt(de[g]) + "</td>";
        if (3 == w || 4 == w) B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>',
        B = B + "<td>" + S + "</td><td>" + z + "</td><td>" + G + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>';
        else if (5 == w || 6 == w) {
          for (var g = 0; 10 > g; g++) B = B + "<td>" + ee[g] + "</td>";
          B = B + "<td>" + U + '</td><td style="background-color: #e1e1e1;"></td>'
        }
        B += "</tr></tbody>",
        $("#balltb").html(B),
        linefun(),
        $(".msg").css("display", "none")
      } else if (chkxuanwu(id)) {
        B += "</tr>",
        B += "<tr><th colspan=3>出现总次数</th><th colspan=2></th>";
        for (var g = 0; 66 > g; g++) B = B + "<td>" + ue[g] + "</td>";
        B += "</tr><tr><th colspan=3>平均遗漏值</th><th colspan=2></th>";
        for (var g = 0; 66 > g; g++) {
          var He = 0 == ue[g] ? 0 : parseInt(Ne / ue[g]) + 1;
          B = B + "<td>" + He + "</td>"
        }
        B += "</tr><tr><th colspan=3>最大遗漏值</th><th colspan=2></th>";
        for (var g = 0; 66 > g; g++) B = B + "<td>" + pe[g] + "</td>";
        B += "</tr><tr><th colspan=3>最大连出值</th><th colspan=2></th>";
        for (var g = 0; 66 > g; g++) B = B + "<td>" + me[g] + "</td>";
        B += "</tr></tbody>",
        $("#balltb").html(B),
        linefun(),
        $(".msg").css("display", "none")
      }
      if (chkthreed(id)) {
        B += "</tr>",
        B += "<tr><th colspan=3>出现总次数</th><th colspan=2></th>";
        for (var g = 0; 40 > g; g++) B = B + "<td>" + ae[g] + "</td>",
        le[g] = 0 == ae[g] ? 0 : parseInt(Ne / ae[g]) + 1;
        B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>',
        B = B + "<td>" + M + "</td><td>" + T + "</td><td>" + C + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>',
        B += "</tr><tr><th colspan=3>平均遗漏值</th><th colspan=2></th>";
        for (var g = 0; 40 > g; g++) B = B + "<td>" + parseInt(le[g]) + "</td>";
        B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>';
        var Ce = 0 == M ? 0 : parseInt(Ne / M),
        Le = 0 == T ? 0 : parseInt(Ne / T),
        Se = 0 == C ? 0 : parseInt(Ne / C);
        B = B + "<td>" + Ce + "</td><td>" + Le + "</td><td>" + Se + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>',
        B += "</tr><tr><th colspan=3>最大遗漏值</th><th colspan=2></th>";
        for (var g = 0; 40 > g; g++) B = B + "<td>" + parseInt(se[g]) + "</td>";
        B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>',
        B = B + "<td>" + O + "</td><td>" + Q + "</td><td>" + W + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>',
        B += "</tr><tr><th colspan=3>最大连出值</th><th colspan=2></th>";
        for (var g = 0; 40 > g; g++) B = B + "<td>" + parseInt(de[g]) + "</td>";
        B += '<td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td><td style="background-color: #e1e1e1;" colspan=3></td>',
        B = B + "<td>" + S + "</td><td>" + z + "</td><td>" + G + '</td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td><td style="background-color: #e1e1e1;"></td>',
        B += "</tr></tbody>",
        $("#balltb").html(B),
        linefun(),
        $(".msg").css("display", "none")
      }
    }
  })
}

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

$(function() {
  new Vue({
    el: '#trendpage',
    data: {
      domain: '头彩',
      shortname: '头彩'
    }
  });
  $('title').html('头彩-走势图');
  $('em.shortname').html('头彩');

  $("#showMenu").click(function() {
    if (!$("#showMenu").hasClass('showed')) {
      $(".outer-nav").slideToggle("fast",
      function() {
        $(".outer-nav").addClass("showed");
      });
    } else {
      $(".outer-nav").slideUp("fast",
      function() {
        $(".outer-nav").removeClass("showed");
      });
    }
  })

  if (isMobile.any()) {
    $("#ballcanvas").attr("width", 1200);
  } else {
    $("#ballcanvas").attr("width", $(window).width());
  }

  var alls = $('.alllotterys a').map(function(k, el) {
    return $(el).attr('rel');
  });
  var alllid = [];
  var allinmenu = [];
  Api.getCommon('onlineLotterys', {
      t: new Date().getTime()
  }, function(res) {
    var ald = res.data;
    for (i = 0; i < ald.length; i++) {
      allinmenu.push('<a href="?id='+ald[i].id+'&w=1&q=50&chs='+ald[i].showName+'">'+ald[i].showName+'</a>');
    }
    $('#allltmenu').html(allinmenu.join(''));
    //console.log(res);
  });

  //linefun();
  //czs(true)
  //$(window).resize(function (){
  //  $("#ballcanvas").attr("width",$(window).width())
  //})
})