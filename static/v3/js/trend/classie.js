window.Modernizr=function(q,f,E){function B(b,d){for(var C in b){var e=b[C];if(!~(""+e).indexOf("-")&&I[e]!==E)return"pfx"==d?e:!0}return!1}function r(b,d,C){var e=b.charAt(0).toUpperCase()+b.slice(1),g=(b+" "+J.join(e+" ")+e).split(" ");if("string"===typeof d||"undefined"===typeof d)d=B(g,d);else a:{g=(b+" "+F.join(e+" ")+e).split(" "),b=g;for(var f in b)if(e=d[b[f]],e!==E){d=!1===C?b[f]:"function"===typeof e?e.bind(C||d):e;break a}d=!1}return d}var g={},v=f.documentElement,h=f.createElement("modernizr"),
I=h.style,J=["Webkit","Moz","O","ms"],F=["webkit","moz","o","ms"],h={};q=[];var n=q.slice,x,y=function(b,d,g,e){var h,q,n,t,w=f.createElement("div"),r=f.body,p=r||f.createElement("body");if(parseInt(g,10))for(;g--;)n=f.createElement("div"),n.id=e?e[g]:"modernizr"+(g+1),w.appendChild(n);return h=['&#173;<style id="smodernizr">',b,"</style>"].join(""),w.id="modernizr",(r?w:p).innerHTML+=h,p.appendChild(w),r||(p.style.background="",p.style.overflow="hidden",t=v.style.overflow,v.style.overflow="hidden",
v.appendChild(p)),q=d(w,b),r?w.parentNode.removeChild(w):(p.parentNode.removeChild(p),v.style.overflow=t),!!q},D={}.hasOwnProperty,z;"undefined"===typeof D||"undefined"===typeof D.call?z=function(b,d){return d in b&&"undefined"===typeof b.constructor.prototype[d]}:z=function(b,d){return D.call(b,d)};Function.prototype.bind||(Function.prototype.bind=function(b){var d=this;if("function"!=typeof d)throw new TypeError;var g=n.call(arguments,1),e=function(){if(this instanceof e){var f=function(){};f.prototype=
d.prototype;var f=new f,h=d.apply(f,g.concat(n.call(arguments)));return Object(h)===h?h:f}return d.apply(b,g.concat(n.call(arguments)))};return e});h.csstransforms3d=function(){var b=!!r("perspective");return b&&"webkitPerspective"in v.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(d,g){b=9===d.offsetLeft&&3===d.offsetHeight}),b};h.csstransitions=function(){return r("transition")};for(var A in h)z(h,A)&&(x=A.toLowerCase(),g[x]=
h[A](),q.push((g[x]?"":"no-")+x));g.addTest=function(b,d){if("object"==typeof b)for(var f in b)z(b,f)&&g.addTest(f,b[f]);else{b=b.toLowerCase();if(g[b]!==E)return g;d="function"==typeof d?d():d;v.className+=" "+(d?"":"no-")+b;g[b]=d}return g};I.cssText="";return h=null,function(b,d){function g(){var a=G.elements;return"string"==typeof a?a.split(" "):a}function f(N){var c=O[N[a]];return c||(c={},H++,N[a]=H,O[H]=c),c}function h(a,c,l){c||(c=d);if(u)return c.createElement(a);l||(l=f(c));var k;return l.cache[a]?
k=l.cache[a].cloneNode():v.test(a)?k=(l.cache[a]=l.createElem(a)).cloneNode():k=l.createElem(a),!k.canHaveChildren||n.test(a)||k.tagUrn?k:l.frag.appendChild(k)}function r(a,c){c.cache||(c.cache={},c.createElem=a.createElement,c.createFrag=a.createDocumentFragment,c.frag=c.createFrag());a.createElement=function(l){return G.shivMethods?h(l,a,c):c.createElem(l)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+g().join().replace(/[\w\-]+/g,
function(a){return c.createElem(a),c.frag.createElement(a),'c("'+a+'")'})+");return n}")(G,c.frag)}function q(a){a||(a=d);var c=f(a);if(G.shivCSS&&!p&&!c.hasCSS){var l,k=a;l=k.createElement("p");k=k.getElementsByTagName("head")[0]||k.documentElement;l=(l.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",k.insertBefore(l.lastChild,k.firstChild));c.hasCSS=!!l}return u||r(a,c),
a}var t=b.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,a="_html5shiv",H=0,O={},u;(function(){try{var a=d.createElement("a");a.innerHTML="<xyz></xyz>";p="hidden"in a;var c;if(!(c=1==a.childNodes.length)){d.createElement("a");var l=d.createDocumentFragment();c="undefined"==typeof l.cloneNode||"undefined"==typeof l.createDocumentFragment||"undefined"==typeof l.createElement}u=
c}catch(k){u=p=!0}})();var G={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==t.shivCSS,supportsUnknownElements:u,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:q,createElement:h,createDocumentFragment:function(a,c){a||(a=d);if(u)return a.createDocumentFragment();c=c||f(a);for(var l=c.frag.cloneNode(),k=0,b=
g(),H=b.length;k<H;k++)l.createElement(b[k]);return l}};b.html5=G;q(d)}(this,f),g._version="2.7.1",g._prefixes=" -webkit- -moz- -o- -ms- ".split(" "),g._domPrefixes=F,g._cssomPrefixes=J,g.testProp=function(b){return B([b])},g.testAllProps=r,g.testStyles=y,g.prefixed=function(b,d,f){return d?r(b,d,f):r(b,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+q.join(" ")),g}(this,this.document);
(function(q,f,E){function B(a){return"[object Function]"==D.call(a)}function r(a){return"string"==typeof a}function g(){}function v(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=z.shift();A=1;a?a.t?x(function(){("c"==a.t?p.injectCss:p.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):A=0}function I(a,b,g,u,e,q,c){function l(c){if(!r&&v(k.readyState)&&(P.r=r=1,!A&&h(),k.onload=k.onreadystatechange=null,c)){"img"!=a&&x(function(){C.removeChild(k)},50);for(var l in t[b])t[b].hasOwnProperty(l)&&
t[b][l].onload()}}c=c||p.errorTimeout;var k=f.createElement(a),r=0,n=0,P={t:g,s:b,e:e,a:q,x:c};1===t[b]&&(n=1,t[b]=[]);"object"==a?k.data=b:(k.src=b,k.type=a);k.width=k.height="0";k.onerror=k.onload=k.onreadystatechange=function(){l.call(this,n)};z.splice(u,0,P);"img"!=a&&(n||2===t[b]?(C.insertBefore(k,d?null:y),x(l,c)):t[b].push(k))}function J(a,b,d,f,g){return A=0,b=b||"j",r(a)?I("c"==b?Q:e,a,b,this.i++,d,f,g):(z.splice(this.i++,0,a),1==z.length&&h()),this}function F(){var a=p;return a.loader={load:J,
i:0},a}var n=f.documentElement,x=q.setTimeout,y=f.getElementsByTagName("script")[0],D={}.toString,z=[],A=0,b="MozAppearance"in n.style,d=b&&!!f.createRange().compareNode,C=d?n:y.parentNode,n=q.opera&&"[object Opera]"==D.call(q.opera),n=!!f.attachEvent&&!n,e=b?"object":n?"script":"img",Q=n?"script":e,L=Array.isArray||function(a){return"[object Array]"==D.call(a)},K=[],t={},w={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},M,p;p=function(a){function b(a){a=a.split("!");var c=K.length,d=
a.pop(),f=a.length,d={url:d,origUrl:d,prefixes:a},g,m,e;for(m=0;m<f;m++)e=a[m].split("="),(g=w[e.shift()])&&(d=g(d,e));for(m=0;m<c;m++)d=K[m](d);return d}function d(a,c,f,g,e){var m=b(a),h=m.autoCallback;m.url.split(".").pop().split("?").shift();m.bypass||(c&&(c=B(c)?c:c[a]||c[g]||c[a.split("/").pop().split("?")[0]]),m.instead?m.instead(a,c,f,g,e):(t[m.url]?m.noexec=!0:t[m.url]=1,f.load(m.url,m.forceCSS||!m.forceJS&&"css"==m.url.split(".").pop().split("?").shift()?"c":E,m.noexec,m.attrs,m.timeout),
(B(c)||B(h))&&f.load(function(){F();c&&c(m.origUrl,e,g);h&&h(m.origUrl,e,g);t[m.url]=2})))}function f(a,c){function b(a,f){if(a)if(r(a))f||(m=function(){var a=[].slice.call(arguments);p.apply(this,a);n()}),d(a,m,c,0,e);else{if(Object(a)===a)for(u in q=function(){var c=0,b;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(u)&&(!f&&!--q&&(B(m)?m=function(){var a=[].slice.call(arguments);p.apply(this,a);n()}:m[u]=function(a){return function(){var c=[].slice.call(arguments);a&&a.apply(this,
c);n()}}(p[u])),d(a[u],m,c,u,e))}else!f&&n()}var e=!!a.test,h=a.load||a.both,m=a.callback||g,p=m,n=a.complete||g,q,u;b(e?a.yep:a.nope,!!h);h&&b(h)}var h,e,c=this.yepnope.loader;if(r(a))d(a,0,c,0);else if(L(a))for(h=0;h<a.length;h++)e=a[h],r(e)?d(e,0,c,0):L(e)?p(e):Object(e)===e&&f(e,c);else Object(a)===a&&f(a,c)};p.addPrefix=function(a,b){w[a]=b};p.addFilter=function(a){K.push(a)};p.errorTimeout=1E4;null==f.readyState&&f.addEventListener&&(f.readyState="loading",f.addEventListener("DOMContentLoaded",
M=function(){f.removeEventListener("DOMContentLoaded",M,0);f.readyState="complete"},0));q.yepnope=F();q.yepnope.executeStack=h;q.yepnope.injectJs=function(a,b,d,e,n,q){var c=f.createElement("script"),l,k;e=e||p.errorTimeout;c.src=a;for(k in d)c.setAttribute(k,d[k]);b=q?h:b||g;c.onreadystatechange=c.onload=function(){!l&&v(c.readyState)&&(l=1,b(),c.onload=c.onreadystatechange=null)};x(function(){l||(l=1,b(1))},e);n?c.onload():y.parentNode.insertBefore(c,y)};q.yepnope.injectCss=function(a,b,d,e,n,p){e=
f.createElement("link");var c;b=p?h:b||g;e.href=a;e.rel="stylesheet";e.type="text/css";for(c in d)e.setAttribute(c,d[c]);n||(y.parentNode.insertBefore(e,y),x(b,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};