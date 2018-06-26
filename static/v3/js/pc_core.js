/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0,
            x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice,
            K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q),
            W = new RegExp("^" + O + "$"), X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a)) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                } else {
                    if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }

        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: nb(function () {
                    return [0]
                }), last: nb(function (a, b) {
                    return [b - 1]
                }), eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = lb(b);
        for (b in{submit: !0, reset: !0}) d.pseudos[b] = mb(b);

        function pb() {
        }

        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                return a === b
            }, h, !0), l = rb(function (a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [rb(sb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                }
                m.push(c)
            }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }

        return h = fb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + Math.random()
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                j = 0;
                while (e = f[j++]) fb.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {position: "absolute", visibility: "hidden", display: "block"},
        Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--) if (b = Eb[e] + c, b in a) return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Jb(this, !0)
        }, hide: function () {
            return Jb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }

    n.Tween = Kb, Kb.prototype = {
        constructor: Kb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/, Qb = [Vb], Rb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sb() {
        return setTimeout(function () {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++) if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xb, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];

    function rc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function sc(a, b, c, d) {
        var e = {}, f = a === oc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(),
                p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = ic.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v;
            i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1}) v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;

    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Bc(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(yc, "\r\n")}
                }) : {name: b.name, value: c.replace(yc, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function () {
        for (var a in Dc) Dc[a]()
    }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Fc && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Ic = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;

    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Jc;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Jc
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
// Moment.js 2.10.6
!function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
    "use strict";

    function a() {
        return Hc.apply(null, arguments)
    }

    function b(a) {
        Hc = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return Ca(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Jc.length > 0) for (c in Jc) d = Jc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
        return a
    }

    function n(b) {
        m(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Kc === !1 && (Kc = !0, a.updateOffset(this), Kc = !1)
    }

    function o(a) {
        return a instanceof n || null != a && null != a._isAMomentObject
    }

    function p(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function q(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = p(b)), c
    }

    function r(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
        return g + f
    }

    function s() {
    }

    function t(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function u(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = t(a[f]).split("-"), b = e.length, c = t(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = v(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && r(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function v(a) {
        var b = null;
        if (!Lc[a] && "undefined" != typeof module && module && module.exports) try {
            b = Ic._abbr, require("./locale/" + a), w(b)
        } catch (c) {
        }
        return Lc[a]
    }

    function w(a, b) {
        var c;
        return a && (c = "undefined" == typeof b ? y(a) : x(a, b), c && (Ic = c)), Ic._abbr
    }

    function x(a, b) {
        return null !== b ? (b.abbr = a, Lc[a] = Lc[a] || new s, Lc[a].set(b), w(a), Lc[a]) : (delete Lc[a], null)
    }

    function y(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ic;
        if (!c(a)) {
            if (b = v(a)) return b;
            a = [a]
        }
        return u(a)
    }

    function z(a, b) {
        var c = a.toLowerCase();
        Mc[c] = Mc[c + "s"] = Mc[b] = a
    }

    function A(a) {
        return "string" == typeof a ? Mc[a] || Mc[a.toLowerCase()] : void 0
    }

    function B(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = A(c), b && (d[b] = a[c]));
        return d
    }

    function C(b, c) {
        return function (d) {
            return null != d ? (E(this, b, d), a.updateOffset(this, c), this) : D(this, b)
        }
    }

    function D(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function E(a, b, c) {
        return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function F(a, b) {
        var c;
        if ("object" == typeof a) for (c in a) this.set(c, a[c]); else if (a = A(a), "function" == typeof this[a]) return this[a](b);
        return this
    }

    function G(a, b, c) {
        var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function H(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function () {
            return this[d]()
        }), a && (Qc[a] = e), b && (Qc[b[0]] = function () {
            return G(e.apply(this, arguments), b[1], b[2])
        }), c && (Qc[c] = function () {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function I(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function J(a) {
        var b, c, d = a.match(Nc);
        for (b = 0, c = d.length; c > b; b++) Qc[d[b]] ? d[b] = Qc[d[b]] : d[b] = I(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function K(a, b) {
        return a.isValid() ? (b = L(b, a.localeData()), Pc[b] = Pc[b] || J(b), Pc[b](a)) : a.localeData().invalidDate()
    }

    function L(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }

        var d = 5;
        for (Oc.lastIndex = 0; d >= 0 && Oc.test(a);) a = a.replace(Oc, c), Oc.lastIndex = 0, d -= 1;
        return a
    }

    function M(a) {
        return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a)
    }

    function N(a, b, c) {
        dd[a] = M(b) ? b : function (a) {
            return a && c ? c : b
        }
    }

    function O(a, b) {
        return f(dd, a) ? dd[a](b._strict, b._locale) : new RegExp(P(a))
    }

    function P(a) {
        return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Q(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
            c[b] = q(a)
        }), c = 0; c < a.length; c++) ed[a[c]] = d
    }

    function R(a, b) {
        Q(a, function (a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function S(a, b, c) {
        null != b && f(ed, a) && ed[a](b, c._a, c, a)
    }

    function T(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function U(a) {
        return this._months[a.month()]
    }

    function V(a) {
        return this._monthsShort[a.month()]
    }

    function W(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function X(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), T(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function Y(b) {
        return null != b ? (X(this, b), a.updateOffset(this, !0), this) : D(this, "Month")
    }

    function Z() {
        return T(this.year(), this.month())
    }

    function $(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[gd] < 0 || c[gd] > 11 ? gd : c[hd] < 1 || c[hd] > T(c[fd], c[gd]) ? hd : c[id] < 0 || c[id] > 24 || 24 === c[id] && (0 !== c[jd] || 0 !== c[kd] || 0 !== c[ld]) ? id : c[jd] < 0 || c[jd] > 59 ? jd : c[kd] < 0 || c[kd] > 59 ? kd : c[ld] < 0 || c[ld] > 999 ? ld : -1, j(a)._overflowDayOfYear && (fd > b || b > hd) && (b = hd), j(a).overflow = b), a
    }

    function _(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function aa(a, b) {
        var c = !0;
        return g(function () {
            return c && (_(a + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
        }, b)
    }

    function ba(a, b) {
        od[a] || (_(b), od[a] = !0)
    }

    function ca(a) {
        var b, c, d = a._i, e = pd.exec(d);
        if (e) {
            for (j(a).iso = !0, b = 0, c = qd.length; c > b; b++) if (qd[b][1].exec(d)) {
                a._f = qd[b][0];
                break
            }
            for (b = 0, c = rd.length; c > b; b++) if (rd[b][1].exec(d)) {
                a._f += (e[6] || " ") + rd[b][0];
                break
            }
            d.match(ad) && (a._f += "Z"), va(a)
        } else a._isValid = !1
    }

    function da(b) {
        var c = sd.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (ca(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ea(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function fa(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function ga(a) {
        return ha(a) ? 366 : 365
    }

    function ha(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ia() {
        return ha(this.year())
    }

    function ja(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = Da(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function ka(a) {
        return ja(a, this._week.dow, this._week.doy).week
    }

    function la() {
        return this._week.dow
    }

    function ma() {
        return this._week.doy
    }

    function na(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function oa(a) {
        var b = ja(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function pa(a, b, c, d, e) {
        var f, g = 6 + e - d, h = fa(a, 0, 1 + g), i = h.getUTCDay();
        return e > i && (i += 7), c = null != c ? 1 * c : e, f = 1 + g + 7 * (b - 1) - i + c, {
            year: f > 0 ? a : a - 1,
            dayOfYear: f > 0 ? f : ga(a - 1) + f
        }
    }

    function qa(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function ra(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function sa(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function ta(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = sa(a), a._w && null == a._a[hd] && null == a._a[gd] && ua(a), a._dayOfYear && (e = ra(a._a[fd], d[fd]), a._dayOfYear > ga(e) && (j(a)._overflowDayOfYear = !0), c = fa(e, 0, a._dayOfYear), a._a[gd] = c.getUTCMonth(), a._a[hd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[id] && 0 === a._a[jd] && 0 === a._a[kd] && 0 === a._a[ld] && (a._nextDay = !0, a._a[id] = 0), a._d = (a._useUTC ? fa : ea).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[id] = 24)
        }
    }

    function ua(a) {
        var b, c, d, e, f, g, h;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ra(b.GG, a._a[fd], ja(Da(), 1, 4).year), d = ra(b.W, 1), e = ra(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ra(b.gg, a._a[fd], ja(Da(), f, g).year), d = ra(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = pa(c, d, e, g, f), a._a[fd] = h.year, a._dayOfYear = h.dayOfYear
    }

    function va(b) {
        if (b._f === a.ISO_8601) return void ca(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, k = 0;
        for (e = L(b._f, b._locale).match(Nc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(O(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Qc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), S(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[id] <= 12 && b._a[id] > 0 && (j(b).bigHour = void 0), b._a[id] = wa(b._locale, b._a[id], b._meridiem), ta(b), $(b)
    }

    function wa(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function xa(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], va(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function ya(a) {
        if (!a._d) {
            var b = B(a._i);
            a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ta(a)
        }
    }

    function za(a) {
        var b = new n($(Aa(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function Aa(a) {
        var b = a._i, e = a._f;
        return a._locale = a._locale || y(a._l), null === b || void 0 === e && "" === b ? l({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), o(b) ? new n($(b)) : (c(e) ? xa(a) : e ? va(a) : d(b) ? a._d = b : Ba(a), a))
    }

    function Ba(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? da(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
            return parseInt(a, 10)
        }), ta(b)) : "object" == typeof f ? ya(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function Ca(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, za(f)
    }

    function Da(a, b, c, d) {
        return Ca(a, b, c, d, !1)
    }

    function Ea(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Da();
        for (d = b[0], e = 1; e < b.length; ++e) (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }

    function Fa() {
        var a = [].slice.call(arguments, 0);
        return Ea("isBefore", a)
    }

    function Ga() {
        var a = [].slice.call(arguments, 0);
        return Ea("isAfter", a)
    }

    function Ha(a) {
        var b = B(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0,
            h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = y(), this._bubble()
    }

    function Ia(a) {
        return a instanceof Ha
    }

    function Ja(a, b) {
        H(a, 0, 0, function () {
            var a = this.utcOffset(), c = "+";
            return 0 > a && (a = -a, c = "-"), c + G(~~(a / 60), 2) + b + G(~~a % 60, 2)
        })
    }

    function Ka(a) {
        var b = (a || "").match(ad) || [], c = b[b.length - 1] || [], d = (c + "").match(xd) || ["-", 0, 0],
            e = +(60 * d[1]) + q(d[2]);
        return "+" === d[0] ? e : -e
    }

    function La(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Da(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Da(b).local()
    }

    function Ma(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Na(b, c) {
        var d, e = this._offset || 0;
        return null != b ? ("string" == typeof b && (b = Ka(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ma(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? bb(this, Ya(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ma(this)
    }

    function Oa(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Pa(a) {
        return this.utcOffset(0, a)
    }

    function Qa(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ma(this), "m")), this
    }

    function Ra() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ka(this._i)), this
    }

    function Sa(a) {
        return a = a ? Da(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
    }

    function Ta() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ua() {
        if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
        var a = {};
        if (m(a, this), a = Aa(a), a._a) {
            var b = a._isUTC ? h(a._a) : Da(a._a);
            this._isDSTShifted = this.isValid() && r(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Va() {
        return !this._isUTC
    }

    function Wa() {
        return this._isUTC
    }

    function Xa() {
        return this._isUTC && 0 === this._offset
    }

    function Ya(a, b) {
        var c, d, e, g = a, h = null;
        return Ia(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = yd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: q(h[hd]) * c,
            h: q(h[id]) * c,
            m: q(h[jd]) * c,
            s: q(h[kd]) * c,
            ms: q(h[ld]) * c
        }) : (h = zd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: Za(h[2], c),
            M: Za(h[3], c),
            d: Za(h[4], c),
            h: Za(h[5], c),
            m: Za(h[6], c),
            s: Za(h[7], c),
            w: Za(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = _a(Da(g.from), Da(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ha(g), Ia(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function Za(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function $a(a, b) {
        var c = {milliseconds: 0, months: 0};
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function _a(a, b) {
        var c;
        return b = La(b, a), a.isBefore(b) ? c = $a(a, b) : (c = $a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function ab(a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ba(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ya(c, d), bb(this, e, a), this
        }
    }

    function bb(b, c, d, e) {
        var f = c._milliseconds, g = c._days, h = c._months;
        e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && E(b, "Date", D(b, "Date") + g * d), h && X(b, D(b, "Month") + h * d), e && a.updateOffset(b, g || h)
    }

    function cb(a, b) {
        var c = a || Da(), d = La(c, this).startOf("day"), e = this.diff(d, "days", !0),
            f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
        return this.format(b && b[f] || this.localeData().calendar(f, this, Da(c)))
    }

    function db() {
        return new n(this)
    }

    function eb(a, b) {
        var c;
        return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this > +a) : (c = o(a) ? +a : +Da(a), c < +this.clone().startOf(b))
    }

    function fb(a, b) {
        var c;
        return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +a > +this) : (c = o(a) ? +a : +Da(a), +this.clone().endOf(b) < c)
    }

    function gb(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function hb(a, b) {
        var c;
        return b = A(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this === +a) : (c = +Da(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
    }

    function ib(a, b, c) {
        var d, e, f = La(a, this), g = 6e4 * (f.utcOffset() - this.utcOffset());
        return b = A(b), "year" === b || "month" === b || "quarter" === b ? (e = jb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : p(e)
    }

    function jb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function kb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function lb() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : K(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function mb(b) {
        var c = K(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function nb(a, b) {
        return this.isValid() ? Ya({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function ob(a) {
        return this.from(Da(), a)
    }

    function pb(a, b) {
        return this.isValid() ? Ya({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function qb(a) {
        return this.to(Da(), a)
    }

    function rb(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = y(a), null != b && (this._locale = b), this)
    }

    function sb() {
        return this._locale
    }

    function tb(a) {
        switch (a = A(a)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function ub(a) {
        return a = A(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function vb() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function wb() {
        return Math.floor(+this / 1e3)
    }

    function xb() {
        return this._offset ? new Date(+this) : this._d
    }

    function yb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function zb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function Ab() {
        return k(this)
    }

    function Bb() {
        return g({}, j(this))
    }

    function Cb() {
        return j(this).overflow
    }

    function Db(a, b) {
        H(0, [a, a.length], 0, b)
    }

    function Eb(a, b, c) {
        return ja(Da([a, 11, 31 + b - c]), b, c).week
    }

    function Fb(a) {
        var b = ja(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == a ? b : this.add(a - b, "y")
    }

    function Gb(a) {
        var b = ja(this, 1, 4).year;
        return null == a ? b : this.add(a - b, "y")
    }

    function Hb() {
        return Eb(this.year(), 1, 4)
    }

    function Ib() {
        var a = this.localeData()._week;
        return Eb(this.year(), a.dow, a.doy)
    }

    function Jb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Kb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Lb(a) {
        return this._weekdays[a.day()]
    }

    function Mb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Nb(a) {
        return this._weekdaysMin[a.day()]
    }

    function Ob(a) {
        var b, c, d;
        for (this._weekdaysParse = this._weekdaysParse || [], b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = Da([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
    }

    function Pb(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Kb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function Qb(a) {
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Rb(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    }

    function Sb(a, b) {
        H(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Tb(a, b) {
        return b._meridiemParse
    }

    function Ub(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Vb(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Wb(a, b) {
        b[ld] = q(1e3 * ("0." + a))
    }

    function Xb() {
        return this._isUTC ? "UTC" : ""
    }

    function Yb() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Zb(a) {
        return Da(1e3 * a)
    }

    function $b() {
        return Da.apply(null, arguments).parseZone()
    }

    function _b(a, b, c) {
        var d = this._calendar[a];
        return "function" == typeof d ? d.call(b, c) : d
    }

    function ac(a) {
        var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function bc() {
        return this._invalidDate
    }

    function cc(a) {
        return this._ordinal.replace("%d", a)
    }

    function dc(a) {
        return a
    }

    function ec(a, b, c, d) {
        var e = this._relativeTime[c];
        return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function fc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }

    function gc(a) {
        var b, c;
        for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function hc(a, b, c, d) {
        var e = y(), f = h().set(d, b);
        return e[c](f, a)
    }

    function ic(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return hc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = hc(a, f, c, e);
        return g
    }

    function jc(a, b) {
        return ic(a, b, "months", 12, "month")
    }

    function kc(a, b) {
        return ic(a, b, "monthsShort", 12, "month")
    }

    function lc(a, b) {
        return ic(a, b, "weekdays", 7, "day")
    }

    function mc(a, b) {
        return ic(a, b, "weekdaysShort", 7, "day")
    }

    function nc(a, b) {
        return ic(a, b, "weekdaysMin", 7, "day")
    }

    function oc() {
        var a = this._data;
        return this._milliseconds = Wd(this._milliseconds), this._days = Wd(this._days), this._months = Wd(this._months), a.milliseconds = Wd(a.milliseconds), a.seconds = Wd(a.seconds), a.minutes = Wd(a.minutes), a.hours = Wd(a.hours), a.months = Wd(a.months), a.years = Wd(a.years), this
    }

    function pc(a, b, c, d) {
        var e = Ya(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function qc(a, b) {
        return pc(this, a, b, 1)
    }

    function rc(a, b) {
        return pc(this, a, b, -1)
    }

    function sc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function tc() {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * sc(vc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = p(f / 1e3), i.seconds = a % 60, b = p(a / 60), i.minutes = b % 60, c = p(b / 60), i.hours = c % 24, g += p(c / 24), e = p(uc(g)), h += e, g -= sc(vc(e)), d = p(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function uc(a) {
        return 4800 * a / 146097
    }

    function vc(a) {
        return 146097 * a / 4800
    }

    function wc(a) {
        var b, c, d = this._milliseconds;
        if (a = A(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + uc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(vc(this._months)), a) {
            case"week":
                return b / 7 + d / 6048e5;
            case"day":
                return b + d / 864e5;
            case"hour":
                return 24 * b + d / 36e5;
            case"minute":
                return 1440 * b + d / 6e4;
            case"second":
                return 86400 * b + d / 1e3;
            case"millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function xc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12)
    }

    function yc(a) {
        return function () {
            return this.as(a)
        }
    }

    function zc(a) {
        return a = A(a), this[a + "s"]()
    }

    function Ac(a) {
        return function () {
            return this._data[a]
        }
    }

    function Bc() {
        return p(this.days() / 7)
    }

    function Cc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Dc(a, b, c) {
        var d = Ya(a).abs(), e = ke(d.as("s")), f = ke(d.as("m")), g = ke(d.as("h")), h = ke(d.as("d")),
            i = ke(d.as("M")), j = ke(d.as("y")),
            k = e < le.s && ["s", e] || 1 === f && ["m"] || f < le.m && ["mm", f] || 1 === g && ["h"] || g < le.h && ["hh", g] || 1 === h && ["d"] || h < le.d && ["dd", h] || 1 === i && ["M"] || i < le.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Cc.apply(null, k)
    }

    function Ec(a, b) {
        return void 0 === le[a] ? !1 : void 0 === b ? le[a] : (le[a] = b, !0)
    }

    function Fc(a) {
        var b = this.localeData(), c = Dc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Gc() {
        var a, b, c, d = me(this._milliseconds) / 1e3, e = me(this._days), f = me(this._months);
        a = p(d / 60), b = p(a / 60), d %= 60, a %= 60, c = p(f / 12), f %= 12;
        var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }

    var Hc, Ic, Jc = a.momentProperties = [], Kc = !1, Lc = {}, Mc = {},
        Nc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Oc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Pc = {}, Qc = {}, Rc = /\d/, Sc = /\d\d/, Tc = /\d{3}/,
        Uc = /\d{4}/, Vc = /[+-]?\d{6}/, Wc = /\d\d?/, Xc = /\d{1,3}/, Yc = /\d{1,4}/, Zc = /[+-]?\d{1,6}/, $c = /\d+/,
        _c = /[+-]?\d+/, ad = /Z|[+-]\d\d:?\d\d/gi, bd = /[+-]?\d+(\.\d{1,3})?/,
        cd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        dd = {}, ed = {}, fd = 0, gd = 1, hd = 2, id = 3, jd = 4, kd = 5, ld = 6;
    H("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), H("MMM", 0, 0, function (a) {
        return this.localeData().monthsShort(this, a)
    }), H("MMMM", 0, 0, function (a) {
        return this.localeData().months(this, a)
    }), z("month", "M"), N("M", Wc), N("MM", Wc, Sc), N("MMM", cd), N("MMMM", cd), Q(["M", "MM"], function (a, b) {
        b[gd] = q(a) - 1
    }), Q(["MMM", "MMMM"], function (a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[gd] = e : j(c).invalidMonth = a
    });
    var md = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        nd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), od = {};
    a.suppressDeprecationWarnings = !1;
    var pd = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        qd = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
        rd = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
        sd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), H(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), N("Y", _c), N("YY", Wc, Sc), N("YYYY", Yc, Uc), N("YYYYY", Zc, Vc), N("YYYYYY", Zc, Vc), Q(["YYYYY", "YYYYYY"], fd), Q("YYYY", function (b, c) {
        c[fd] = 2 === b.length ? a.parseTwoDigitYear(b) : q(b)
    }), Q("YY", function (b, c) {
        c[fd] = a.parseTwoDigitYear(b)
    }), a.parseTwoDigitYear = function (a) {
        return q(a) + (q(a) > 68 ? 1900 : 2e3)
    };
    var td = C("FullYear", !1);
    H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), N("w", Wc), N("ww", Wc, Sc), N("W", Wc), N("WW", Wc, Sc), R(["w", "ww", "W", "WW"], function (a, b, c, d) {
        b[d.substr(0, 1)] = q(a)
    });
    var ud = {dow: 0, doy: 6};
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), N("DDD", Xc), N("DDDD", Tc), Q(["DDD", "DDDD"], function (a, b, c) {
        c._dayOfYear = q(a)
    }), a.ISO_8601 = function () {
    };
    var vd = aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
            var a = Da.apply(null, arguments);
            return this > a ? this : a
        }),
        wd = aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
            var a = Da.apply(null, arguments);
            return a > this ? this : a
        });
    Ja("Z", ":"), Ja("ZZ", ""), N("Z", ad), N("ZZ", ad), Q(["Z", "ZZ"], function (a, b, c) {
        c._useUTC = !0, c._tzm = Ka(a)
    });
    var xd = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () {
    };
    var yd = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        zd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ya.fn = Ha.prototype;
    var Ad = ab(1, "add"), Bd = ab(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Cd = aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    H(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), H(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Db("gggg", "weekYear"), Db("ggggg", "weekYear"), Db("GGGG", "isoWeekYear"), Db("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), N("G", _c), N("g", _c), N("GG", Wc, Sc), N("gg", Wc, Sc), N("GGGG", Yc, Uc), N("gggg", Yc, Uc), N("GGGGG", Zc, Vc), N("ggggg", Zc, Vc), R(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
        b[d.substr(0, 2)] = q(a)
    }), R(["gg", "GG"], function (b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), H("Q", 0, 0, "quarter"), z("quarter", "Q"), N("Q", Rc), Q("Q", function (a, b) {
        b[gd] = 3 * (q(a) - 1)
    }), H("D", ["DD", 2], "Do", "date"), z("date", "D"), N("D", Wc), N("DD", Wc, Sc), N("Do", function (a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), Q(["D", "DD"], hd), Q("Do", function (a, b) {
        b[hd] = q(a.match(Wc)[0], 10)
    });
    var Dd = C("Date", !0);
    H("d", 0, "do", "day"), H("dd", 0, 0, function (a) {
        return this.localeData().weekdaysMin(this, a)
    }), H("ddd", 0, 0, function (a) {
        return this.localeData().weekdaysShort(this, a)
    }), H("dddd", 0, 0, function (a) {
        return this.localeData().weekdays(this, a)
    }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), N("d", Wc), N("e", Wc), N("E", Wc), N("dd", cd), N("ddd", cd), N("dddd", cd), R(["dd", "ddd", "dddd"], function (a, b, c) {
        var d = c._locale.weekdaysParse(a);
        null != d ? b.d = d : j(c).invalidWeekday = a
    }), R(["d", "e", "E"], function (a, b, c, d) {
        b[d] = q(a)
    });
    var Ed = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Fd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Gd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, function () {
        return this.hours() % 12 || 12
    }), Sb("a", !0), Sb("A", !1), z("hour", "h"), N("a", Tb), N("A", Tb), N("H", Wc), N("h", Wc), N("HH", Wc, Sc), N("hh", Wc, Sc), Q(["H", "HH"], id), Q(["a", "A"], function (a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), Q(["h", "hh"], function (a, b, c) {
        b[id] = q(a), j(c).bigHour = !0
    });
    var Hd = /[ap]\.?m?\.?/i, Id = C("Hours", !0);
    H("m", ["mm", 2], 0, "minute"), z("minute", "m"), N("m", Wc), N("mm", Wc, Sc), Q(["m", "mm"], jd);
    var Jd = C("Minutes", !1);
    H("s", ["ss", 2], 0, "second"), z("second", "s"), N("s", Wc), N("ss", Wc, Sc), Q(["s", "ss"], kd);
    var Kd = C("Seconds", !1);
    H("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), H(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), H(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), H(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), H(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), H(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), H(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), z("millisecond", "ms"), N("S", Xc, Rc), N("SS", Xc, Sc), N("SSS", Xc, Tc);
    var Ld;
    for (Ld = "SSSS"; Ld.length <= 9; Ld += "S") N(Ld, $c);
    for (Ld = "S"; Ld.length <= 9; Ld += "S") Q(Ld, Wb);
    var Md = C("Milliseconds", !1);
    H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
    var Nd = n.prototype;
    Nd.add = Ad, Nd.calendar = cb, Nd.clone = db, Nd.diff = ib, Nd.endOf = ub, Nd.format = mb, Nd.from = nb, Nd.fromNow = ob, Nd.to = pb, Nd.toNow = qb, Nd.get = F, Nd.invalidAt = Cb, Nd.isAfter = eb, Nd.isBefore = fb, Nd.isBetween = gb, Nd.isSame = hb, Nd.isValid = Ab, Nd.lang = Cd, Nd.locale = rb, Nd.localeData = sb, Nd.max = wd, Nd.min = vd, Nd.parsingFlags = Bb, Nd.set = F, Nd.startOf = tb, Nd.subtract = Bd, Nd.toArray = yb, Nd.toObject = zb, Nd.toDate = xb, Nd.toISOString = lb, Nd.toJSON = lb, Nd.toString = kb, Nd.unix = wb, Nd.valueOf = vb, Nd.year = td, Nd.isLeapYear = ia, Nd.weekYear = Fb, Nd.isoWeekYear = Gb, Nd.quarter = Nd.quarters = Jb, Nd.month = Y, Nd.daysInMonth = Z, Nd.week = Nd.weeks = na, Nd.isoWeek = Nd.isoWeeks = oa, Nd.weeksInYear = Ib, Nd.isoWeeksInYear = Hb, Nd.date = Dd, Nd.day = Nd.days = Pb, Nd.weekday = Qb, Nd.isoWeekday = Rb, Nd.dayOfYear = qa, Nd.hour = Nd.hours = Id, Nd.minute = Nd.minutes = Jd, Nd.second = Nd.seconds = Kd, Nd.millisecond = Nd.milliseconds = Md, Nd.utcOffset = Na, Nd.utc = Pa, Nd.local = Qa, Nd.parseZone = Ra, Nd.hasAlignedHourOffset = Sa, Nd.isDST = Ta, Nd.isDSTShifted = Ua, Nd.isLocal = Va, Nd.isUtcOffset = Wa, Nd.isUtc = Xa, Nd.isUTC = Xa, Nd.zoneAbbr = Xb, Nd.zoneName = Yb, Nd.dates = aa("dates accessor is deprecated. Use date instead.", Dd), Nd.months = aa("months accessor is deprecated. Use month instead", Y), Nd.years = aa("years accessor is deprecated. Use year instead", td), Nd.zone = aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Oa);
    var Od = Nd, Pd = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Qd = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Rd = "Invalid date", Sd = "%d", Td = /\d{1,2}/, Ud = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Vd = s.prototype;
    Vd._calendar = Pd, Vd.calendar = _b, Vd._longDateFormat = Qd, Vd.longDateFormat = ac, Vd._invalidDate = Rd, Vd.invalidDate = bc, Vd._ordinal = Sd, Vd.ordinal = cc, Vd._ordinalParse = Td, Vd.preparse = dc, Vd.postformat = dc, Vd._relativeTime = Ud, Vd.relativeTime = ec, Vd.pastFuture = fc, Vd.set = gc, Vd.months = U, Vd._months = md, Vd.monthsShort = V, Vd._monthsShort = nd, Vd.monthsParse = W, Vd.week = ka, Vd._week = ud, Vd.firstDayOfYear = ma, Vd.firstDayOfWeek = la, Vd.weekdays = Lb, Vd._weekdays = Ed, Vd.weekdaysMin = Nb, Vd._weekdaysMin = Gd, Vd.weekdaysShort = Mb, Vd._weekdaysShort = Fd, Vd.weekdaysParse = Ob, Vd.isPM = Ub, Vd._meridiemParse = Hd, Vd.meridiem = Vb, w("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
            var b = a % 10, c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = aa("moment.lang is deprecated. Use moment.locale instead.", w), a.langData = aa("moment.langData is deprecated. Use moment.localeData instead.", y);
    var Wd = Math.abs, Xd = yc("ms"), Yd = yc("s"), Zd = yc("m"), $d = yc("h"), _d = yc("d"), ae = yc("w"),
        be = yc("M"), ce = yc("y"), de = Ac("milliseconds"), ee = Ac("seconds"), fe = Ac("minutes"), ge = Ac("hours"),
        he = Ac("days"), ie = Ac("months"), je = Ac("years"), ke = Math.round, le = {s: 45, m: 45, h: 22, d: 26, M: 11},
        me = Math.abs, ne = Ha.prototype;
    ne.abs = oc, ne.add = qc, ne.subtract = rc, ne.as = wc, ne.asMilliseconds = Xd, ne.asSeconds = Yd, ne.asMinutes = Zd, ne.asHours = $d, ne.asDays = _d, ne.asWeeks = ae, ne.asMonths = be, ne.asYears = ce, ne.valueOf = xc, ne._bubble = tc, ne.get = zc, ne.milliseconds = de, ne.seconds = ee, ne.minutes = fe, ne.hours = ge, ne.days = he, ne.weeks = Bc, ne.months = ie, ne.years = je, ne.humanize = Fc, ne.toISOString = Gc, ne.toString = Gc, ne.toJSON = Gc, ne.locale = rb, ne.localeData = sb, ne.toIsoString = aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gc), ne.lang = Cd, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), N("x", _c), N("X", bd), Q("X", function (a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), Q("x", function (a, b, c) {
        c._d = new Date(q(a))
    }), a.version = "2.10.6", b(Da), a.fn = Od, a.min = Fa, a.max = Ga, a.utc = h, a.unix = Zb, a.months = jc, a.isDate = d, a.locale = w, a.invalid = l, a.duration = Ya, a.isMoment = o, a.weekdays = lc, a.parseZone = $b, a.localeData = y, a.isDuration = Ia, a.monthsShort = kc, a.weekdaysMin = nc, a.defineLocale = x, a.weekdaysShort = mc, a.normalizeUnits = A, a.relativeTimeThreshold = Ec;
    var oe = a;
    return oe
});

// jBox v0.3.2
function jBox(type, options) {
    this.options = {
        id: null,
        width: "auto",
        height: "auto",
        minWidth: null,
        maxHeight: null,
        minWidth: null,
        maxHeight: null,
        attach: null,
        trigger: "click",
        preventDefault: !1,
        title: null,
        content: null,
        getTitle: null,
        getContent: null,
        ajax: {url: null, data: "", reload: !1, getData: "data-ajax", setContent: !0, spinner: !0},
        target: null,
        position: {x: "center", y: "center"},
        outside: null,
        offset: 0,
        attributes: {x: "left", y: "top"},
        adjustPosition: !1,
        adjustTracker: !1,
        adjustDistance: 5,
        fixed: !1,
        reposition: !1,
        repositionOnOpen: !0,
        repositionOnContent: !0,
        pointer: !1,
        pointTo: "target",
        fade: 180,
        animation: null,
        theme: "Default",
        addClass: "",
        overlay: !1,
        zIndex: 1e4,
        delayOpen: 0,
        delayClose: 0,
        closeOnEsc: !1,
        closeOnClick: !1,
        closeOnMouseleave: !1,
        closeButton: !1,
        constructOnInit: !1,
        blockScroll: !1,
        appendTo: jQuery("body"),
        draggable: null,
        dragOver: !0,
        onInit: function () {
        },
        onCreated: function () {
        },
        onOpen: function () {
        },
        onClose: function () {
        },
        onCloseComplete: function () {
        },
        confirmButton: "Submit",
        cancelButton: "Cancel",
        confirm: null,
        cancel: null,
        autoClose: 7e3,
        color: null,
        stack: !0,
        audio: !1,
        volume: 100,
        src: "href",
        gallery: "data-jbox-image",
        imageLabel: "title",
        imageFade: 600,
        imageSize: "contain"
    }, this.defaultOptions = {
        Tooltip: {
            getContent: "title",
            trigger: "mouseenter",
            position: {x: "center", y: "top"},
            outside: "y",
            pointer: !0,
            adjustPosition: !0,
            reposition: !0
        },
        Mouse: {
            target: "mouse",
            position: {x: "right", y: "bottom"},
            offset: 15,
            trigger: "mouseenter",
            adjustPosition: "flip"
        },
        Modal: {
            target: jQuery(window),
            fixed: !0,
            blockScroll: !0,
            closeOnEsc: !0,
            closeOnClick: "overlay",
            closeButton: !0,
            overlay: !0,
            animation: "zoomOut"
        },
        Confirm: {
            target: jQuery(window),
            fixed: !0,
            attach: jQuery("[data-confirm]"),
            getContent: "data-confirm",
            content: "Do you really want to do this?",
            minWidth: 320,
            maxWidth: 460,
            blockScroll: !0,
            closeOnEsc: !0,
            closeOnClick: "overlay",
            closeButton: !0,
            overlay: !0,
            animation: "zoomOut",
            preventDefault: !0,
            _onAttach: function (t) {
                if (!this.options.confirm) {
                    var i = t.attr("onclick") ? t.attr("onclick") : t.attr("href") ? t.attr("target") ? 'window.open("' + t.attr("href") + '", "' + t.attr("target") + '");' : 'window.location.href = "' + t.attr("href") + '";' : "";
                    t.prop("onclick", null).data("jBox-Confirm-submit", i)
                }
            },
            _onCreated: function () {
                this.footer = jQuery('<div class="jBox-Confirm-footer"/>'), jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).click(function () {
                    this.options.cancel && this.options.cancel(), this.close()
                }.bind(this)).appendTo(this.footer), this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer), this.footer.appendTo(this.container)
            },
            _onOpen: function () {
                this.submitButton.off("click.jBox-Confirm" + this.id).on("click.jBox-Confirm" + this.id, function () {
                    this.options.confirm ? this.options.confirm() : eval(this.source.data("jBox-Confirm-submit")), this.close()
                }.bind(this))
            }
        },
        Notice: {
            target: jQuery(window),
            fixed: !0,
            position: {x: 20, y: 20},
            attributes: {x: "right", y: "top"},
            animation: "zoomIn",
            closeOnClick: "box",
            _onInit: function () {
                this.open(), this.options.delayClose = this.options.autoClose, this.options.delayClose && this.close()
            },
            _onCreated: function () {
                this.options.color && this.wrapper.addClass("jBox-Notice-color jBox-Notice-" + this.options.color), this.wrapper.data("jBox-Notice-position", this.options.attributes.x + "-" + this.options.attributes.y)
            },
            _onOpen: function () {
                jQuery.each(jQuery(".jBox-Notice"), function (t, i) {
                    return i = jQuery(i), i.attr("id") != this.id && i.data("jBox-Notice-position") == this.options.attributes.x + "-" + this.options.attributes.y ? this.options.stack ? void i.css("margin-" + this.options.attributes.y, parseInt(i.css("margin-" + this.options.attributes.y)) + this.wrapper.outerHeight() + 10) : void i.data("jBox").close({ignoreDelay: !0}) : void 0
                }.bind(this)), this.options.audio && this.audio({url: this.options.audio, valume: this.options.volume})
            },
            _onCloseComplete: function () {
                this.destroy()
            }
        },
        Image: {
            target: jQuery(window),
            fixed: !0,
            blockScroll: !0,
            closeOnEsc: !0,
            closeOnClick: "overlay",
            closeButton: !0,
            overlay: !0,
            animation: "zoomOut",
            width: 800,
            height: 533,
            attach: jQuery("[data-jbox-image]"),
            preventDefault: !0,
            _onInit: function () {
                this.images = this.currentImage = {}, this.imageZIndex = 1, this.attachedElements && jQuery.each(this.attachedElements, function (t, i) {
                    if (i = jQuery(i), !i.data("jBox-image-gallery")) {
                        var s = i.attr(this.options.gallery) || "default";
                        !this.images[s] && (this.images[s] = []), this.images[s].push({
                            src: i.attr(this.options.src),
                            label: i.attr(this.options.imageLabel) || ""
                        }), "title" == this.options.imageLabel && i.removeAttr("title"), i.data("jBox-image-gallery", s), i.data("jBox-image-id", this.images[s].length - 1)
                    }
                }.bind(this));
                var t = function (t, i, s, o) {
                    if (!jQuery("#jBox-image-" + t + "-" + i).length) {
                        {
                            var e = jQuery("<div/>", {
                                id: "jBox-image-" + t + "-" + i,
                                "class": "jBox-image-container"
                            }).css({
                                backgroundImage: "url(" + this.images[t][i].src + ")",
                                backgroundSize: this.options.imageSize,
                                opacity: o ? 1 : 0,
                                zIndex: s ? 0 : this.imageZIndex++
                            }).appendTo(this.content);
                            jQuery("<div/>", {
                                id: "jBox-image-label-" + t + "-" + i,
                                "class": "jBox-image-label" + (o ? " active" : "")
                            }).html(this.images[t][i].label).appendTo(this.imageLabel)
                        }
                        !o && !s && e.animate({opacity: 1}, this.options.imageFade)
                    }
                }.bind(this), i = function (t, i) {
                    jQuery(".jBox-image-label.active").removeClass("active"), jQuery("#jBox-image-label-" + t + "-" + i).addClass("active")
                };
                this.showImage = function (s) {
                    if ("open" != s) {
                        var o = this.currentImage.gallery, e = this.currentImage.id + (1 * ("prev" == s) ? -1 : 1);
                        e = e > this.images[o].length - 1 ? 0 : 0 > e ? this.images[o].length - 1 : e
                    } else {
                        var o = this.source.data("jBox-image-gallery"), e = this.source.data("jBox-image-id");
                        jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display: this.images[o].length > 1 ? "block" : "none"})
                    }
                    if (this.currentImage = {
                            gallery: o,
                            id: e
                        }, jQuery("#jBox-image-" + o + "-" + e).length) jQuery("#jBox-image-" + o + "-" + e).css({
                        zIndex: this.imageZIndex++,
                        opacity: 0
                    }).animate({opacity: 1}, "open" == s ? 0 : this.options.imageFade), i(o, e); else {
                        this.wrapper.addClass("jBox-loading");
                        {
                            jQuery('<img src="' + this.images[o][e].src + '">').load(function () {
                                t(o, e, !1), i(o, e), this.wrapper.removeClass("jBox-loading")
                            }.bind(this))
                        }
                    }
                    var n = e + 1;
                    n = n > this.images[o].length - 1 ? 0 : 0 > n ? this.images[o].length - 1 : n, !jQuery("#jBox-image-" + o + "-" + n).length && jQuery('<img src="' + this.images[o][n].src + '">').load(function () {
                        t(o, n, !0)
                    })
                }
            },
            _onCreated: function () {
                this.imageLabel = jQuery("<div/>", {id: "jBox-image-label"}).appendTo(this.wrapper), this.wrapper.append(jQuery("<div/>", {
                    "class": "jBox-image-pointer-prev",
                    click: function () {
                        this.showImage("prev")
                    }.bind(this)
                })).append(jQuery("<div/>", {
                    "class": "jBox-image-pointer-next", click: function () {
                        this.showImage("next")
                    }.bind(this)
                }))
            },
            _onOpen: function () {
                jQuery("body").addClass("jBox-image-open"), jQuery(document).on("keyup.jBox-" + this.id, function (t) {
                    37 == t.keyCode && this.showImage("prev"), 39 == t.keyCode && this.showImage("next")
                }.bind(this)), this.showImage("open")
            },
            _onClose: function () {
                jQuery("body").removeClass("jBox-image-open"), jQuery(document).off("keyup.jBox-" + this.id)
            },
            _onCloseComplete: function () {
                this.wrapper.find(".jBox-image-container").css("opacity", 0)
            }
        }
    }, "string" == jQuery.type(type) && (this.type = type, type = this.defaultOptions[type]), this.options = jQuery.extend(!0, this.options, type, options), null === this.options.id && (this.options.id = "jBoxID" + jBox._getUniqueID()), this.id = this.options.id, ("center" == this.options.position.x && "x" == this.options.outside || "center" == this.options.position.y && "y" == this.options.outside) && (this.options.outside = !1), (!this.options.outside || "xy" == this.options.outside) && (this.options.pointer = !1), "object" != jQuery.type(this.options.offset) && (this.options.offset = {
        x: this.options.offset,
        y: this.options.offset
    }), this.options.offset.x || (this.options.offset.x = 0), this.options.offset.y || (this.options.offset.y = 0), this.options.adjustDistance = "object" != jQuery.type(this.options.adjustDistance) ? {
        top: this.options.adjustDistance,
        right: this.options.adjustDistance,
        bottom: this.options.adjustDistance,
        left: this.options.adjustDistance
    } : jQuery.extend({
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    }, this.options.adjustDistance), this.align = this.options.outside && "xy" != this.options.outside ? this.options.position[this.options.outside] : "center" != this.options.position.y && "number" != jQuery.type(this.options.position.y) ? this.options.position.x : "center" != this.options.position.x && "number" != jQuery.type(this.options.position.x) ? this.options.position.y : this.options.attributes.x, this.options.outside && "xy" != this.options.outside && (this.outside = this.options.position[this.options.outside]);
    var userAgent = navigator.userAgent.toLowerCase();
    return this.IE8 = -1 != userAgent.indexOf("msie") && 8 == parseInt(userAgent.split("msie")[1]), this.prefix = -1 != userAgent.indexOf("webkit") ? "-webkit-" : "", this._getOpp = function (t) {
        return {left: "right", right: "left", top: "bottom", bottom: "top", x: "y", y: "x"}[t]
    }, this._getXY = function (t) {
        return {left: "x", right: "x", top: "y", bottom: "y", center: "x"}[t]
    }, this._getTL = function (t) {
        return {left: "left", right: "left", top: "top", bottom: "top", center: "left", x: "left", y: "top"}[t]
    }, this._supportsSVG = function () {
        return document.createElement("svg").getAttributeNS
    }, this._createSVG = function (t, i) {
        var s = document.createElementNS("http://www.w3.org/2000/svg", t);
        return jQuery.each(i, function (t, i) {
            s.setAttribute(i[0], i[1] || "")
        }), s
    }, this._appendSVG = function (t, i) {
        return i.appendChild(t)
    }, this._create = function () {
        if (!this.wrapper) {
            if (this.wrapper = jQuery("<div/>", {
                    id: this.id,
                    "class": "jBox-wrapper" + (this.type ? " jBox-" + this.type : "") + (this.options.theme ? " jBox-" + this.options.theme : "") + (this.options.addClass ? " " + this.options.addClass : "") + (this.IE8 ? " jBox-IE8" : "")
                }).css({
                    position: this.options.fixed ? "fixed" : "absolute",
                    display: "none",
                    opacity: 0,
                    zIndex: this.options.zIndex
                }).data("jBox", this), this.options.closeOnMouseleave && this.wrapper.mouseleave(function (t) {
                    !this.source || !(t.relatedTarget == this.source[0] || -1 !== jQuery.inArray(this.source[0], jQuery(t.relatedTarget).parents("*"))) && this.close()
                }.bind(this)), "box" == this.options.closeOnClick && this.wrapper.on("touchend click", function () {
                    this.close({ignoreDelay: !0})
                }.bind(this)), this.container = jQuery("<div/>", {"class": "jBox-container"}).appendTo(this.wrapper), this.content = jQuery("<div/>", {"class": "jBox-content"}).css({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: this.options.minWidth,
                    minHeight: this.options.minHeight,
                    maxWidth: this.options.maxWidth,
                    maxHeight: this.options.maxHeight
                }).appendTo(this.container), this.options.closeButton) {
                if (this.closeButton = jQuery("<div/>", {"class": "jBox-closeButton jBox-noDrag"}).on("touchend click", function () {
                        this.isOpen && this.close({ignoreDelay: !0})
                    }.bind(this)), this._supportsSVG()) {
                    var t = this._createSVG("svg", [["viewBox", "0 0 24 24"]]);
                    this._appendSVG(this._createSVG("path", [["d", "M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]]), t), this.closeButton.append(t)
                } else this.wrapper.addClass("jBox-nosvg");
                ("box" == this.options.closeButton || this.options.closeButton === !0 && !this.options.overlay && !this.options.title) && (this.wrapper.addClass("jBox-closeButton-box"), this.closeButton.appendTo(this.container))
            }
            if (this.wrapper.appendTo(this.options.appendTo), this.options.pointer) {
                if (this.pointer = {
                        position: "target" != this.options.pointTo ? this.options.pointTo : this._getOpp(this.outside),
                        xy: this._getXY("target" != this.options.pointTo ? this.options.pointTo : this.outside),
                        align: "center",
                        offset: 0
                    }, this.pointer.element = jQuery("<div/>", {"class": "jBox-pointer jBox-pointer-" + this.pointer.position}).appendTo(this.wrapper), this.pointer.dimensions = {
                        x: this.pointer.element.outerWidth(),
                        y: this.pointer.element.outerHeight()
                    }, "string" == jQuery.type(this.options.pointer)) {
                    var i = this.options.pointer.split(":");
                    i[0] && (this.pointer.align = i[0]), i[1] && (this.pointer.offset = parseInt(i[1]))
                }
                this.pointer.alignAttribute = "x" == this.pointer.xy ? "bottom" == this.pointer.align ? "bottom" : "top" : "right" == this.pointer.align ? "right" : "left", this.wrapper.css("padding-" + this.pointer.position, this.pointer.dimensions[this.pointer.xy]), this.pointer.element.css(this.pointer.alignAttribute, "center" == this.pointer.align ? "50%" : 0).css("margin-" + this.pointer.alignAttribute, this.pointer.offset), this.pointer.margin = {}, this.pointer.margin["margin-" + this.pointer.alignAttribute] = this.pointer.offset, "center" == this.pointer.align && this.pointer.element.css(this.prefix + "transform", "translate(" + ("y" == this.pointer.xy ? this.pointer.dimensions.x * -.5 + "px" : 0) + ", " + ("x" == this.pointer.xy ? this.pointer.dimensions.y * -.5 + "px" : 0) + ")"), this.pointer.element.css("x" == this.pointer.xy ? "width" : "height", parseInt(this.pointer.dimensions[this.pointer.xy]) + parseInt(this.container.css("border-" + this.pointer.alignAttribute + "-width"))), this.wrapper.addClass("jBox-pointerPosition-" + this.pointer.position)
            }
            if (this.setContent(this.options.content, !0), this.setTitle(this.options.title, !0), this.options.draggable) {
                var s = "title" == this.options.draggable ? this.titleContainer : this.options.draggable.length > 0 ? this.options.draggable : this.options.draggable.selector ? jQuery(this.options.draggable.selector) : this.wrapper;
                s.addClass("jBox-draggable").on("mousedown", function (t) {
                    if (2 != t.button && !jQuery(t.target).hasClass("jBox-noDrag") && !jQuery(t.target).parents(".jBox-noDrag").length) {
                        this.options.dragOver && this.wrapper.css("zIndex") <= jBox.zIndexMax && (jBox.zIndexMax += 1, this.wrapper.css("zIndex", jBox.zIndexMax));
                        var i = this.wrapper.outerHeight(), s = this.wrapper.outerWidth(),
                            o = this.wrapper.offset().top + i - t.pageY, e = this.wrapper.offset().left + s - t.pageX;
                        jQuery(document).on("mousemove.jBox-draggable-" + this.id, function (t) {
                            this.wrapper.offset({top: t.pageY + o - i, left: t.pageX + e - s})
                        }.bind(this)), t.preventDefault()
                    }
                }.bind(this)).on("mouseup", function () {
                    jQuery(document).off("mousemove.jBox-draggable-" + this.id)
                }.bind(this)), jBox.zIndexMax = jBox.zIndexMax ? Math.max(jBox.zIndexMax, this.options.zIndex) : this.options.zIndex
            }
            this.options.onCreated.bind(this)(), this.options._onCreated && this.options._onCreated.bind(this)()
        }
    }, this.options.constructOnInit && this._create(), this.options.attach && this.attach(), this._positionMouse = function (t) {
        this.pos = {left: t.pageX, top: t.pageY};
        var i = function (t, i) {
            return "center" == this.options.position[i] ? void(this.pos[t] -= Math.ceil(this.dimensions[i] / 2)) : (this.pos[t] += t == this.options.position[i] ? -1 * this.dimensions[i] - this.options.offset[i] : this.options.offset[i], this.pos[t])
        }.bind(this);
        this.wrapper.css({left: i("left", "x"), top: i("top", "y")}), this.targetDimensions = {
            x: 0,
            y: 0,
            left: t.pageX,
            top: t.pageY
        }, this._adjustPosition()
    }, this._attachEvents = function () {
        if (this.options.closeOnEsc && jQuery(document).on("keyup.jBox-" + this.id, function (t) {
                27 == t.keyCode && this.close({ignoreDelay: !0})
            }.bind(this)), (this.options.closeOnClick === !0 || "body" == this.options.closeOnClick) && jQuery(document).on("touchend.jBox-" + this.id + " click.jBox-" + this.id, function (t) {
                this.blockBodyClick || "body" == this.options.closeOnClick && (t.target == this.wrapper[0] || this.wrapper.has(t.target).length) || this.close({ignoreDelay: !0})
            }.bind(this)), (this.options.adjustPosition && this.options.adjustTracker || this.options.reposition) && !this.fixed && this.outside) {
            var t, i = 0, s = 150, o = function () {
                var o = (new Date).getTime();
                t || (o - i > s && (this.options.reposition && this.position(), this.options.adjustTracker && this._adjustPosition(), i = o), t = setTimeout(function () {
                    t = null, i = (new Date).getTime(), this.options.reposition && this.position(), this.options.adjustTracker && this._adjustPosition()
                }.bind(this), s))
            }.bind(this);
            this.options.adjustTracker && "resize" != this.options.adjustTracker && jQuery(window).on("scroll.jBox-" + this.id, function () {
                o()
            }.bind(this)), (this.options.adjustTracker && "scroll" != this.options.adjustTracker || this.options.reposition) && jQuery(window).on("resize.jBox-" + this.id, function () {
                o()
            }.bind(this))
        }
        "mouse" == this.options.target && jQuery("body").on("mousemove.jBox-" + this.id, function (t) {
            this._positionMouse(t)
        }.bind(this))
    }, this._detachEvents = function () {
        this.options.closeOnEsc && jQuery(document).off("keyup.jBox-" + this.id), (this.options.closeOnClick === !0 || "body" == this.options.closeOnClick) && jQuery(document).off("touchend.jBox-" + this.id + " click.jBox-" + this.id), (this.options.adjustPosition && this.options.adjustTracker || this.options.reposition) && (jQuery(window).off("scroll.jBox-" + this.id), jQuery(window).off("resize.jBox-" + this.id)), "mouse" == this.options.target && jQuery("body").off("mousemove.jBox-" + this.id)
    }, this._addOverlay = function () {
        this.overlay || (this.overlay = jQuery("#jBox-overlay").length ? jQuery("#jBox-overlay").css({zIndex: Math.min(jQuery("#jBox-overlay").css("z-index"), this.options.zIndex - 1)}) : jQuery("<div/>", {id: "jBox-overlay"}).css({
            display: "none",
            opacity: 0,
            zIndex: this.options.zIndex - 1
        }).appendTo(jQuery("body")), ("overlay" == this.options.closeButton || this.options.closeButton === !0) && (jQuery("#jBox-overlay .jBox-closeButton").length > 0 ? jQuery("#jBox-overlay .jBox-closeButton").on("touchend click", function () {
            this.isOpen && this.close({ignoreDelay: !0})
        }.bind(this)) : this.overlay.append(this.closeButton)), "overlay" == this.options.closeOnClick && this.overlay.on("touchend click", function () {
            this.isOpen && this.close({ignoreDelay: !0})
        }.bind(this)));
        var t = this.overlay.data("jBox") || {};
        t["jBox-" + this.id] = !0, this.overlay.data("jBox", t), "block" != this.overlay.css("display") && (this.options.fade ? this.overlay.stop() && this.overlay.animate({opacity: 1}, {
            queue: !1,
            duration: this.options.fade,
            start: function () {
                this.overlay.css({display: "block"})
            }.bind(this)
        }) : this.overlay.css({display: "block", opacity: 1}))
    }, this._removeOverlay = function () {
        if (this.overlay) {
            var t = this.overlay.data("jBox");
            delete t["jBox-" + this.id], this.overlay.data("jBox", t), jQuery.isEmptyObject(t) && (this.options.fade ? this.overlay.stop() && this.overlay.animate({opacity: 0}, {
                queue: !1,
                duration: this.options.fade,
                complete: function () {
                    this.overlay.css({display: "none"})
                }.bind(this)
            }) : this.overlay.css({display: "none", opacity: 0}))
        }
    }, this._generateCSS = function () {
        if (!this.IE8) {
            "object" != jQuery.type(this.options.animation) && (this.options.animation = {
                pulse: {
                    open: "pulse",
                    close: "zoomOut"
                },
                zoomIn: {open: "zoomIn", close: "zoomIn"},
                zoomOut: {open: "zoomOut", close: "zoomOut"},
                move: {open: "move", close: "move"},
                slide: {open: "slide", close: "slide"},
                flip: {open: "flip", close: "flip"},
                tada: {open: "tada", close: "zoomOut"}
            }[this.options.animation]), this.options.animation.open && (this.options.animation.open = this.options.animation.open.split(":")), this.options.animation.close && (this.options.animation.close = this.options.animation.close.split(":")), this.options.animation.openDirection = this.options.animation.open ? this.options.animation.open[1] : null, this.options.animation.closeDirection = this.options.animation.close ? this.options.animation.close[1] : null, this.options.animation.open && (this.options.animation.open = this.options.animation.open[0]), this.options.animation.close && (this.options.animation.close = this.options.animation.close[0]), this.options.animation.open && (this.options.animation.open += "Open"), this.options.animation.close && (this.options.animation.close += "Close");
            var t = {
                pulse: {duration: 350, css: [["0%", "scale(1)"], ["50%", "scale(1.1)"], ["100%", "scale(1)"]]},
                zoomInOpen: {duration: this.options.fade || 180, css: [["0%", "scale(0.9)"], ["100%", "scale(1)"]]},
                zoomInClose: {duration: this.options.fade || 180, css: [["0%", "scale(1)"], ["100%", "scale(0.9)"]]},
                zoomOutOpen: {duration: this.options.fade || 180, css: [["0%", "scale(1.1)"], ["100%", "scale(1)"]]},
                zoomOutClose: {duration: this.options.fade || 180, css: [["0%", "scale(1)"], ["100%", "scale(1.1)"]]},
                moveOpen: {
                    duration: this.options.fade || 180,
                    positions: {top: {"0%": -12}, right: {"0%": 12}, bottom: {"0%": 12}, left: {"0%": -12}},
                    css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
                },
                moveClose: {
                    duration: this.options.fade || 180,
                    timing: "ease-in",
                    positions: {top: {"100%": -12}, right: {"100%": 12}, bottom: {"100%": 12}, left: {"100%": -12}},
                    css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
                },
                slideOpen: {
                    duration: 400,
                    positions: {top: {"0%": -400}, right: {"0%": 400}, bottom: {"0%": 400}, left: {"0%": -400}},
                    css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
                },
                slideClose: {
                    duration: 400,
                    timing: "ease-in",
                    positions: {top: {"100%": -400}, right: {"100%": 400}, bottom: {"100%": 400}, left: {"100%": -400}},
                    css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
                },
                flipOpen: {
                    duration: 600,
                    css: [["0%", "perspective(400px) rotateX(90deg)"], ["40%", "perspective(400px) rotateX(-15deg)"], ["70%", "perspective(400px) rotateX(15deg)"], ["100%", "perspective(400px) rotateX(0deg)"]]
                },
                flipClose: {
                    duration: this.options.fade || 300,
                    css: [["0%", "perspective(400px) rotateX(0deg)"], ["100%", "perspective(400px) rotateX(90deg)"]]
                },
                tada: {
                    duration: 800,
                    css: [["0%", "scale(1)"], ["10%, 20%", "scale(0.9) rotate(-3deg)"], ["30%, 50%, 70%, 90%", "scale(1.1) rotate(3deg)"], ["40%, 60%, 80%", "scale(1.1) rotate(-3deg)"], ["100%", "scale(1) rotate(0)"]]
                }
            };
            jQuery.each(["pulse", "tada"], function (i, s) {
                t[s + "Open"] = t[s + "Close"] = t[s]
            });
            var i = function (i, s) {
                return keyframe_css = "@" + this.prefix + "keyframes jBox-animation-" + this.options.animation[i] + "-" + i + (s ? "-" + s : "") + " {", jQuery.each(t[this.options.animation[i]].css, function (o, e) {
                    var n = s ? e[1].replace("%XY", this._getXY(s).toUpperCase()) : e[1];
                    t[this.options.animation[i]].positions && (n = n.replace("%V", t[this.options.animation[i]].positions[s][e[0]])), keyframe_css += e[0] + " {" + this.prefix + "transform:" + n + ";}"
                }.bind(this)), keyframe_css += "}", keyframe_css += ".jBox-animation-" + this.options.animation[i] + "-" + i + (s ? "-" + s : "") + " {", keyframe_css += this.prefix + "animation-duration: " + t[this.options.animation[i]].duration + "ms;", keyframe_css += this.prefix + "animation-name: jBox-animation-" + this.options.animation[i] + "-" + i + (s ? "-" + s : "") + ";", keyframe_css += t[this.options.animation[i]].timing ? this.prefix + "animation-timing-function: " + t[this.options.animation[i]].timing + ";" : "", keyframe_css += "}"
            }.bind(this), s = "";
            jQuery.each(["open", "close"], function (o, e) {
                return this.options.animation[e] && t[this.options.animation[e]] && ("close" != e || this.options.fade) ? void(t[this.options.animation[e]].positions ? jQuery.each(["top", "right", "bottom", "left"], function (t, o) {
                    s += i(e, o)
                }) : s += i(e)) : ""
            }.bind(this)), jQuery("<style/>").append(s).appendTo(jQuery("head"))
        }
    }, this._blockBodyClick = function () {
        this.blockBodyClick = !0, setTimeout(function () {
            this.blockBodyClick = !1
        }.bind(this), 10)
    }, this.options.animation && this._generateCSS(), this._animate = function (t) {
        if (!this.IE8) {
            if (t || (t = this.isOpen ? "open" : "close"), !this.options.fade && "close" == t) return null;
            var i = this.options.animation[t + "Direction"] || ("center" != this.align ? this.align : this.options.attributes.x);
            this.flipped && this._getXY(i) == this._getXY(this.align) && (i = this._getOpp(i));
            var s = "jBox-animation-" + this.options.animation[t] + "-" + t + " jBox-animation-" + this.options.animation[t] + "-" + t + "-" + i;
            this.wrapper.addClass(s);
            var o = 1e3 * parseFloat(this.wrapper.css(this.prefix + "animation-duration"));
            "close" == t && (o = Math.min(o, this.options.fade)), setTimeout(function () {
                this.wrapper.removeClass(s)
            }.bind(this), o)
        }
    }, this._abortAnimation = function () {
        if (!this.IE8) {
            var t = "jBox-animation", i = this.wrapper.attr("class").split(" ").filter(function (i) {
                return 0 !== i.lastIndexOf(t, 0)
            });
            this.wrapper.attr("class", i.join(" "))
        }
    }, this._adjustPosition = function () {
        if (!this.options.adjustPosition) return null;
        this.positionAdjusted && (this.wrapper.css(this.pos), this.pointer && this.wrapper.css("padding", 0).css("padding-" + this._getOpp(this.outside), this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-" + this.pointer.position), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this._getOpp(this.outside)).css(this.pointer.margin), this.positionAdjusted = !1, this.flipped = !1);
        var t = jQuery(window), i = {
            x: t.width(),
            y: t.height(),
            top: this.options.fixed && this.target.data("jBox-fixed") ? 0 : t.scrollTop(),
            left: this.options.fixed && this.target.data("jBox-fixed") ? 0 : t.scrollLeft()
        };
        i.bottom = i.top + i.y, i.right = i.left + i.x;
        var s = i.top > this.pos.top - (this.options.adjustDistance.top || 0),
            o = i.right < this.pos.left + this.dimensions.x + (this.options.adjustDistance.right || 0),
            e = i.bottom < this.pos.top + this.dimensions.y + (this.options.adjustDistance.bottom || 0),
            n = i.left > this.pos.left - (this.options.adjustDistance.left || 0), a = n ? "left" : o ? "right" : null,
            h = s ? "top" : e ? "bottom" : null, p = a || h;
        if (p) {
            "move" == this.options.adjustPosition || a != this.outside && h != this.outside || ("mouse" == this.target && (this.outside = "right"), ("top" == this.outside || "left" == this.outside ? i[this._getXY(this.outside)] - (this.targetDimensions[this._getTL(this.outside)] - i[this._getTL(this.outside)]) - this.targetDimensions[this._getXY(this.outside)] + this.options.offset[this._getXY(this.outside)] : this.targetDimensions[this._getTL(this.outside)] - i[this._getTL(this.outside)] - this.options.offset[this._getXY(this.outside)]) > this.dimensions[this._getXY(this.outside)] + parseInt(this.options.adjustDistance[this._getOpp(this.outside)]) && (this.wrapper.css(this._getTL(this.outside), this.pos[this._getTL(this.outside)] + (this.dimensions[this._getXY(this.outside)] + this.options.offset[this._getXY(this.outside)] * ("top" == this.outside || "left" == this.outside ? -2 : 2) + this.targetDimensions[this._getXY(this.outside)]) * ("top" == this.outside || "left" == this.outside ? 1 : -1)), this.pointer && this.wrapper.removeClass("jBox-pointerPosition-" + this.pointer.position).addClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).css("padding", 0).css("padding-" + this.outside, this.pointer.dimensions[this._getXY(this.outside)]), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this.outside), this.positionAdjusted = !0, this.flipped = !0));
            var r = "x" == this._getXY(this.outside) ? h : a;
            if (this.pointer && "flip" != this.options.adjustPosition && this._getXY(r) == this._getOpp(this._getXY(this.outside))) {
                if ("center" == this.pointer.align) var l = this.dimensions[this._getXY(r)] / 2 - this.pointer.dimensions[this._getOpp(this.pointer.xy)] / 2 - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) * (r != this._getTL(r) ? -1 : 1); else var l = r == this.pointer.alignAttribute ? parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) : this.dimensions[this._getXY(r)] - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - this.pointer.dimensions[this._getXY(r)];
                spaceDiff = r == this._getTL(r) ? i[this._getTL(r)] - this.pos[this._getTL(r)] + this.options.adjustDistance[r] : -1 * (i[this._getOpp(this._getTL(r))] - this.pos[this._getTL(r)] - this.options.adjustDistance[r] - this.dimensions[this._getXY(r)]), r == this._getOpp(this._getTL(r)) && this.pos[this._getTL(r)] - spaceDiff < i[this._getTL(r)] + this.options.adjustDistance[this._getTL(r)] && (spaceDiff -= i[this._getTL(r)] + this.options.adjustDistance[this._getTL(r)] - (this.pos[this._getTL(r)] - spaceDiff)), spaceDiff = Math.min(spaceDiff, l), l >= spaceDiff && spaceDiff > 0 && (this.pointer.element.css("margin-" + this.pointer.alignAttribute, parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - spaceDiff * (r != this.pointer.alignAttribute ? -1 : 1)), this.wrapper.css(this._getTL(r), this.pos[this._getTL(r)] + spaceDiff * (r != this._getTL(r) ? -1 : 1)), this.positionAdjusted = !0)
            }
        }
    }, this.options.onInit.bind(this)(), this.options._onInit && this.options._onInit.bind(this)(), this
}

jBox.prototype.attach = function (t, i) {
    return t || (t = jQuery(this.options.attach.selector || this.options.attach)), i || (i = this.options.trigger), t && t.length && jQuery.each(t, function (t, s) {
        s = jQuery(s), s.data("jBox-attached-" + this.id) || ("title" == this.options.getContent && void 0 != s.attr("title") && s.data("jBox-getContent", s.attr("title")).removeAttr("title"), this.attachedElements || (this.attachedElements = []), this.attachedElements.push(s[0]), s.on(i + ".jBox-attach-" + this.id, function (t) {
            if (this.timer && clearTimeout(this.timer), "mouseenter" != i || !this.isOpen || this.source[0] != s[0]) {
                if (this.isOpen && this.source && this.source[0] != s[0]) var o = !0;
                this.source = s, !this.options.target && (this.target = s), "click" == i && this.options.preventDefault && t.preventDefault(), this["click" != i || o ? "open" : "toggle"]()
            }
        }.bind(this)), "mouseenter" == this.options.trigger && s.on("mouseleave", function (t) {
            (!this.options.closeOnMouseleave || t.relatedTarget != this.wrapper[0] && !jQuery(t.relatedTarget).parents("#" + this.id).length) && this.close()
        }.bind(this)), s.data("jBox-attached-" + this.id, i), this.options._onAttach && this.options._onAttach.bind(this)(s))
    }.bind(this)), this
}, jBox.prototype.detach = function (t) {
    return t || (t = this.attachedElements || []), t && t.length && jQuery.each(t, function (t, i) {
        i = jQuery(i), i.data("jBox-attached-" + this.id) && (i.off(i.data("jBox-attached-" + this.id) + ".jBox-attach-" + this.id), i.data("jBox-attached-" + this.id, null)), this.attachedElements = jQuery.grep(this.attachedElements, function (t) {
            return t != i[0]
        })
    }.bind(this)), this
}, jBox.prototype.setTitle = function (t, i) {
    var s = this.wrapper.height(), o = this.wrapper.width();
    return null == t || void 0 == t ? this : (!this.wrapper && this._create(), this.title || (this.titleContainer = jQuery("<div/>", {"class": "jBox-title"}), this.title = jQuery("<div/>").appendTo(this.titleContainer), this.wrapper.addClass("jBox-hasTitle"), ("title" == this.options.closeButton || this.options.closeButton === !0 && !this.options.overlay) && (this.wrapper.addClass("jBox-closeButton-title"), this.closeButton.appendTo(this.titleContainer)), this.titleContainer.insertBefore(this.content)), this.title.html(t), !i && this.options.repositionOnContent && (s != this.wrapper.height() || o != this.wrapper.width()) && this.position(), this)
}, jBox.prototype.setContent = function (t, i) {
    if (null == t) return this;
    !this.wrapper && this._create();
    var s = this.wrapper.height(), o = this.wrapper.width(), e = jQuery("body").height(), n = jQuery("body").width();
    switch (this.content.children("[data-jbox-content-appended]").appendTo("body").css({display: "none"}), jQuery.type(t)) {
        case"string":
            this.content.html(t);
            break;
        case"object":
            this.content.html(""), t.attr("data-jbox-content-appended", 1).appendTo(this.content).css({display: "block"})
    }
    var a = {x: n - jQuery("body").width(), y: e - jQuery("body").height()};
    return !i && this.options.repositionOnContent && (s != this.wrapper.height() || o != this.wrapper.width()) && this.position({adjustOffset: a}), this
}, jBox.prototype.setDimensions = function (t, i, s) {
    !this.wrapper && this._create(), this.content.css(t, i), (void 0 == s || s) && this.position()
}, jBox.prototype.setWidth = function (t, i) {
    this.setDimensions("width", t, i)
}, jBox.prototype.setHeight = function (t, i) {
    this.setDimensions("height", t, i)
}, jBox.prototype.position = function (t) {
    if (t || (t = {}), this.target = t.target || this.target || this.options.target || jQuery(window), this.dimensions = {
            x: this.wrapper.outerWidth(),
            y: this.wrapper.outerHeight()
        }, "mouse" != this.target) {
        if ("center" == this.options.position.x && "center" == this.options.position.y) return this.wrapper.css({
            left: "50%",
            top: "50%",
            marginLeft: this.dimensions.x * -.5 + this.options.offset.x,
            marginTop: this.dimensions.y * -.5 + this.options.offset.y
        }), this;
        var i = this.target.offset();
        !this.target.data("jBox-fixed") && this.target.data("jBox-fixed", this.target[0] == jQuery(window)[0] || "fixed" != this.target.css("position") && this.target.parents().filter(function () {
            return "fixed" == jQuery(this).css("position")
        }).length <= 0 ? "static" : "fixed"), "fixed" == this.target.data("jBox-fixed") && this.options.fixed && (i.top = i.top - jQuery(window).scrollTop(), i.left = i.left - jQuery(window).scrollLeft()), this.targetDimensions = {
            x: this.target.outerWidth(),
            y: this.target.outerHeight(),
            top: i ? i.top : 0,
            left: i ? i.left : 0
        }, this.pos = {};
        var s = function (t) {
            if (-1 == jQuery.inArray(this.options.position[t], ["top", "right", "bottom", "left", "center"])) return void(this.pos[this.options.attributes[t]] = this.options.position[t]);
            var i = this.options.attributes[t] = "x" == t ? "left" : "top";
            return this.pos[i] = this.targetDimensions[i], "center" == this.options.position[t] ? void(this.pos[i] += Math.ceil((this.targetDimensions[t] - this.dimensions[t]) / 2)) : (i != this.options.position[t] && (this.pos[i] += this.targetDimensions[t] - this.dimensions[t]), void((this.options.outside == t || "xy" == this.options.outside) && (this.pos[i] += this.dimensions[t] * (i != this.options.position[t] ? 1 : -1))))
        }.bind(this);
        if (s("x"), s("y"), this.options.pointer && "number" != jQuery.type(this.options.position.x) && "number" != jQuery.type(this.options.position.y)) {
            var o = 0;
            switch (this.pointer.align) {
                case"center":
                    "center" != this.options.position[this._getOpp(this.options.outside)] && (o += this.dimensions[this._getOpp(this.options.outside)] / 2);
                    break;
                default:
                    switch (this.options.position[this._getOpp(this.options.outside)]) {
                        case"center":
                            o += (this.dimensions[this._getOpp(this.options.outside)] / 2 - this.pointer.dimensions[this._getOpp(this.options.outside)] / 2) * (this.pointer.align == this._getTL(this.pointer.align) ? 1 : -1);
                            break;
                        default:
                            o += this.pointer.align != this.options.position[this._getOpp(this.options.outside)] ? this.dimensions[this._getOpp(this.options.outside)] * (-1 !== jQuery.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1) + this.pointer.dimensions[this._getOpp(this.options.outside)] / 2 * (-1 !== jQuery.inArray(this.pointer.align, ["top", "left"]) ? -1 : 1) : this.pointer.dimensions[this._getOpp(this.options.outside)] / 2 * (-1 !== jQuery.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1)
                    }
            }
            o *= this.options.position[this._getOpp(this.options.outside)] == this.pointer.alignAttribute ? -1 : 1, o += this.pointer.offset * (this.pointer.align == this._getOpp(this._getTL(this.pointer.align)) ? 1 : -1), this.pos[this._getTL(this._getOpp(this.pointer.xy))] += o
        }
        return t.adjustOffset && t.adjustOffset.x && (this.pos[this.options.attributes.x] += parseInt(t.adjustOffset.x) * ("left" == this.options.attributes.x ? 1 : -1)), t.adjustOffset && t.adjustOffset.y && (this.pos[this.options.attributes.y] += parseInt(t.adjustOffset.y) * ("top" == this.options.attributes.y ? 1 : -1)), this.pos[this.options.attributes.x] += this.options.offset.x, this.pos[this.options.attributes.y] += this.options.offset.y, this.wrapper.css(this.pos), this._adjustPosition(), this
    }
}, jBox.prototype.open = function (t) {
    if (t || (t = {}), this.isDestroyed) return !1;
    if (!this.wrapper && this._create(), this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
    var i = function () {
        this.source && this.options.getTitle && (this.source.attr(this.options.getTitle) && this.setTitle(this.source.attr(this.options.getTitle)), !0), this.source && this.options.getContent && (this.source.data("jBox-getContent") ? this.setContent(this.source.data("jBox-getContent"), !0) : this.source.attr(this.options.getContent) ? this.setContent(this.source.attr(this.options.getContent), !0) : null), this.options.onOpen.bind(this)(), this.options._onOpen && this.options._onOpen.bind(this)(), (this.options.ajax && this.options.ajax.url && (!this.ajaxLoaded || this.options.ajax.reload) || t.ajax && t.ajax.url) && this.ajax(t.ajax || null), (!this.positionedOnOpen || this.options.repositionOnOpen) && this.position({target: t.target}) && (this.positionedOnOpen = !0), this.isClosing && this._abortAnimation(), this.isOpen || (this.isOpen = !0, this._attachEvents(), this.options.blockScroll && jQuery("body").addClass("jBox-blockScroll-" + this.id), this.options.overlay && this._addOverlay(), this.options.animation && !this.isClosing && this._animate("open"), this.options.fade ? this.wrapper.stop().animate({opacity: 1}, {
            queue: !1,
            duration: this.options.fade,
            start: function () {
                this.isOpening = !0, this.wrapper.css({display: "block"})
            }.bind(this),
            always: function () {
                this.isOpening = !1
            }.bind(this)
        }) : this.wrapper.css({display: "block", opacity: 1}))
    }.bind(this);
    return !this.options.delayOpen || this.isOpen || this.isClosing || t.ignoreDelay ? i() : this.timer = setTimeout(i, this.options.delayOpen), this
}, jBox.prototype.close = function (t) {
    if (t || (t = {}), this.isDestroyed) return !1;
    if (this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
    var i = function () {
        this.options.onClose.bind(this)(), this.options._onClose && this.options._onClose.bind(this)(), this.isOpen && (this.isOpen = !1, this._detachEvents(), this.options.blockScroll && jQuery("body").removeClass("jBox-blockScroll-" + this.id), this.options.overlay && this._removeOverlay(), this.options.animation && !this.isOpening && this._animate("close"), this.options.fade ? this.wrapper.stop().animate({opacity: 0}, {
            queue: !1,
            duration: this.options.fade,
            start: function () {
                this.isClosing = !0
            }.bind(this),
            complete: function () {
                this.wrapper.css({display: "none"}), this.options.onCloseComplete && this.options.onCloseComplete.bind(this)(), this.options._onCloseComplete && this.options._onCloseComplete.bind(this)()
            }.bind(this),
            always: function () {
                this.isClosing = !1
            }.bind(this)
        }) : (this.wrapper.css({
            display: "none",
            opacity: 0
        }), this.options._onCloseComplete && this.options._onCloseComplete.bind(this)()))
    }.bind(this);
    return t.ignoreDelay ? i() : this.timer = setTimeout(i, Math.max(this.options.delayClose, 10)), this
}, jBox.prototype.toggle = function (t) {
    return this[this.isOpen ? "close" : "open"](t), this
}, jBox.prototype.disable = function () {
    return this.isDisabled = !0, this
}, jBox.prototype.enable = function () {
    return this.isDisabled = !1, this
}, jBox.prototype.ajax = function (t) {
    t || (t = {}), this.options.ajax.getData && !t.data && this.source && void 0 != this.source.attr(this.options.ajax.getData) && (t.data = this.source.attr(this.options.ajax.getData) || "");
    var i = jQuery.extend(!0, {}, this.options.ajax);
    this.ajaxRequest && this.ajaxRequest.abort();
    var s = t.beforeSend || i.beforeSend || function () {
    }, o = t.complete || i.complete || function () {
    }, e = jQuery.extend(!0, i, t);
    return e.beforeSend = function () {
        e.spinner && (this.wrapper.addClass("jBox-loading"), this.spinner = jQuery(e.spinner !== !0 ? e.spinner : '<div class="jBox-spinner"></div>').appendTo(this.container)), s.bind(this)()
    }.bind(this), e.complete = function (t) {
        this.wrapper.removeClass("jBox-loading"), this.spinner && this.spinner.remove(), e.setContent && this.setContent(t.responseText), this.ajaxLoaded = !0, o.bind(this)(t)
    }.bind(this), this.ajaxRequest = jQuery.ajax(e), this
}, jBox.prototype.audio = function (t) {
    if (t || (t = {}), jBox._audio || (jBox._audio = {}), !t.url || this.IE8) return this;
    if (!jBox._audio[t.url]) {
        var i = jQuery("<audio/>");
        jQuery("<source/>", {src: t.url + ".mp3"}).appendTo(i), jQuery("<source/>", {src: t.url + ".ogg"}).appendTo(i), jBox._audio[t.url] = i[0]
    }
    jBox._audio[t.url].volume = Math.min(void 0 != t.volume ? t.volume : (void 0 != this.options.volume ? this.options.volume : 100) / 100, 1), jBox._audio[t.url].pause();
    try {
        jBox._audio[t.url].currentTime = 0
    } catch (s) {
    }
    return jBox._audio[t.url].play(), this
}, jBox.prototype.destroy = function () {
    return this.detach().close({ignoreDelay: !0}), this.wrapper && this.wrapper.remove(), this.isDestroyed = !0, this
}, jBox._getUniqueID = function () {
    var t = 1;
    return function () {
        return t++
    }
}(), jQuery.fn.jBox = function (t, i) {
    return t || (t = {}), i || (i = {}), new jBox(t, jQuery.extend(i, {attach: this}))
}, Function.prototype.bind || (Function.prototype.bind = function (t) {
    var i = Array.prototype.slice.call(arguments, 1), s = this, o = function () {
    }, e = function () {
        return s.apply(this instanceof o && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
    };
    return o.prototype = this.prototype, e.prototype = new o, e
});
// jQuery Cookie Plugin v1.4.1
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function (f) {
    var a = /\+/g;

    function d(i) {
        return b.raw ? i : encodeURIComponent(i)
    }

    function g(i) {
        return b.raw ? i : decodeURIComponent(i)
    }

    function h(i) {
        return d(b.json ? JSON.stringify(i) : String(i))
    }

    function c(i) {
        if (i.indexOf('"') === 0) {
            i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            i = decodeURIComponent(i.replace(a, " "));
            return b.json ? JSON.parse(i) : i
        } catch (j) {
        }
    }

    function e(j, i) {
        var k = b.raw ? j : c(j);
        return f.isFunction(i) ? i(k) : k
    }

    var b = f.cookie = function (q, p, v) {
        if (p !== undefined && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires, u = v.expires = new Date();
                u.setTime(+u + r * 86400000)
            }
            return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {};
        var s = document.cookie ? document.cookie.split("; ") : [];
        for (var o = 0, m = s.length; o < m; o++) {
            var n = s[o].split("=");
            var j = g(n.shift());
            var k = n.join("=");
            if (q && q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    };
    b.defaults = {};
    f.removeCookie = function (j, i) {
        if (f.cookie(j) === undefined) {
            return false
        }
        f.cookie(j, "", f.extend({}, i, {expires: -1}));
        return !f.cookie(j)
    }
}));
// noUiSlider v7.0.10
!function (a) {
    "use strict";

    function b(a, b) {
        return Math.round(a / b) * b
    }

    function c(a) {
        return "number" == typeof a && !isNaN(a) && isFinite(a)
    }

    function d(a) {
        var b = Math.pow(10, 7);
        return Number((Math.round(a * b) / b).toFixed(7))
    }

    function e(a, b, c) {
        a.addClass(b), setTimeout(function () {
            a.removeClass(b)
        }, c)
    }

    function f(a) {
        return Math.max(Math.min(a, 100), 0)
    }

    function g(b) {
        return a.isArray(b) ? b : [b]
    }

    function h(a) {
        var b = a.split(".");
        return b.length > 1 ? b[1].length : 0
    }

    function i(a, b) {
        return 100 / (b - a)
    }

    function j(a, b) {
        return 100 * b / (a[1] - a[0])
    }

    function k(a, b) {
        return j(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0])
    }

    function l(a, b) {
        return b * (a[1] - a[0]) / 100 + a[0]
    }

    function m(a, b) {
        for (var c = 1; a >= b[c];) c += 1;
        return c
    }

    function n(a, b, c) {
        if (c >= a.slice(-1)[0]) return 100;
        var d, e, f, g, h = m(c, a);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + k([d, e], c) / i(f, g)
    }

    function o(a, b, c) {
        if (c >= 100) return a.slice(-1)[0];
        var d, e, f, g, h = m(c, b);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], l([d, e], (c - f) * i(f, g))
    }

    function p(a, c, d, e) {
        if (100 === e) return e;
        var f, g, h = m(e, a);
        return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e
    }

    function q(a, b, d) {
        var e;
        if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !c(e) || !c(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        d.xPct.push(e), d.xVal.push(b[0]), e ? d.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (d.xSteps[0] = b[1])
    }

    function r(a, b, c) {
        return b ? void(c.xSteps[a] = j([c.xVal[a], c.xVal[a + 1]], b) / i(c.xPct[a], c.xPct[a + 1])) : !0
    }

    function s(a, b, c, d) {
        this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c;
        var e, f = [];
        for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
        for (f.sort(function (a, b) {
            return a[0] - b[0]
        }), e = 0; e < f.length; e++) q(f[e][1], f[e][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) r(e, this.xNumSteps[e], this)
    }

    function t(a, b) {
        if (!c(b)) throw new Error("noUiSlider: 'step' is not numeric.");
        a.singleStep = b
    }

    function u(b, c) {
        if ("object" != typeof c || a.isArray(c)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === c.min || void 0 === c.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        b.spectrum = new s(c, b.snap, b.dir, b.singleStep)
    }

    function v(b, c) {
        if (c = g(c), !a.isArray(c) || !c.length || c.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
        b.handles = c.length, b.start = c
    }

    function w(a, b) {
        if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function x(a, b) {
        if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function y(a, b) {
        if ("lower" === b && 1 === a.handles) a.connect = 1; else if ("upper" === b && 1 === a.handles) a.connect = 2; else if (b === !0 && 2 === a.handles) a.connect = 3; else {
            if (b !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            a.connect = 0
        }
    }

    function z(a, b) {
        switch (b) {
            case"horizontal":
                a.ort = 0;
                break;
            case"vertical":
                a.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function A(a, b) {
        if (!c(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (a.margin = a.spectrum.getMargin(b), !a.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function B(a, b) {
        if (!c(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (a.limit = a.spectrum.getMargin(b), !a.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }

    function C(a, b) {
        switch (b) {
            case"ltr":
                a.dir = 0;
                break;
            case"rtl":
                a.dir = 1, a.connect = [0, 2, 1, 3][a.connect];
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function D(a, b) {
        if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = b.indexOf("tap") >= 0, d = b.indexOf("drag") >= 0, e = b.indexOf("fixed") >= 0,
            f = b.indexOf("snap") >= 0;
        a.events = {tap: c || f, drag: d, fixed: e, snap: f}
    }

    function E(a, b) {
        if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function F(b) {
        var c, d = {margin: 0, limit: 0, animate: !0, format: V};
        return c = {
            step: {r: !1, t: t},
            start: {r: !0, t: v},
            connect: {r: !0, t: y},
            direction: {r: !0, t: C},
            snap: {r: !1, t: w},
            animate: {r: !1, t: x},
            range: {r: !0, t: u},
            orientation: {r: !1, t: z},
            margin: {r: !1, t: A},
            limit: {r: !1, t: B},
            behaviour: {r: !0, t: D},
            format: {r: !1, t: E}
        }, b = a.extend({
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        }, b), a.each(c, function (a, c) {
            if (void 0 === b[a]) {
                if (c.r) throw new Error("noUiSlider: '" + a + "' is required.");
                return !0
            }
            c.t(d, b[a])
        }), d.style = d.ort ? "top" : "left", d
    }

    function G(a, b, c) {
        var d = a + b[0], e = a + b[1];
        return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [f(d), f(e)]) : [d, e]
    }

    function H(a) {
        a.preventDefault();
        var b, c, d = 0 === a.type.indexOf("touch"), e = 0 === a.type.indexOf("mouse"),
            f = 0 === a.type.indexOf("pointer"), g = a;
        return 0 === a.type.indexOf("MSPointer") && (f = !0), a.originalEvent && (a = a.originalEvent), d && (b = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY), (e || f) && (f || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), b = a.clientX + window.pageXOffset, c = a.clientY + window.pageYOffset), g.points = [b, c], g.cursor = e, g
    }

    function I(b, c) {
        var d = a("<div><div/></div>").addClass(U[2]), e = ["-lower", "-upper"];
        return b && e.reverse(), d.children().addClass(U[3] + " " + U[3] + e[c]), d
    }

    function J(a, b, c) {
        switch (a) {
            case 1:
                b.addClass(U[7]), c[0].addClass(U[6]);
                break;
            case 3:
                c[1].addClass(U[6]);
            case 2:
                c[0].addClass(U[7]);
            case 0:
                b.addClass(U[6])
        }
    }

    function K(a, b, c) {
        var d, e = [];
        for (d = 0; a > d; d += 1) e.push(I(b, d).appendTo(c));
        return e
    }

    function L(b, c, d) {
        return d.addClass([U[0], U[8 + b], U[4 + c]].join(" ")), a("<div/>").appendTo(d).addClass(U[1])
    }

    function M(b, c, d) {
        function i() {
            return C[["width", "height"][c.ort]]()
        }

        function j(a) {
            var b, c = [E.val()];
            for (b = 0; b < a.length; b += 1) E.trigger(a[b], c)
        }

        function k(a) {
            return 1 === a.length ? a[0] : c.dir ? a.reverse() : a
        }

        function l(a) {
            return function (b, c) {
                E.val([a ? null : c, a ? c : null], !0)
            }
        }

        function m(b) {
            var c = a.inArray(b, N);
            E[0].linkAPI && E[0].linkAPI[b] && E[0].linkAPI[b].change(M[c], D[c].children(), E)
        }

        function n(b, d) {
            var e = a.inArray(b, N);
            return d && d.appendTo(D[e].children()), c.dir && c.handles > 1 && (e = 1 === e ? 0 : 1), l(e)
        }

        function o() {
            var a, b;
            for (a = 0; a < N.length; a += 1) this.linkAPI && this.linkAPI[b = N[a]] && this.linkAPI[b].reconfirm(b)
        }

        function p(a, b, d, e) {
            return a = a.replace(/\s/g, S + " ") + S, b.on(a, function (a) {
                return E.attr("disabled") ? !1 : E.hasClass(U[14]) ? !1 : (a = H(a), a.calcPoint = a.points[c.ort], void d(a, e))
            })
        }

        function q(a, b) {
            var c, d = b.handles || D, e = !1, f = 100 * (a.calcPoint - b.start) / i(), g = d[0][0] !== D[0][0] ? 1 : 0;
            c = G(f, b.positions, d.length > 1), e = v(d[0], c[g], 1 === d.length), d.length > 1 && (e = v(d[1], c[g ? 0 : 1], !1) || e), e && j(["slide"])
        }

        function r(b) {
            a("." + U[15]).removeClass(U[15]), b.cursor && a("body").css("cursor", "").off(S), Q.off(S), E.removeClass(U[12]), j(["set", "change"])
        }

        function s(b, c) {
            1 === c.handles.length && c.handles[0].children().addClass(U[15]), b.stopPropagation(), p(T.move, Q, q, {
                start: b.calcPoint,
                handles: c.handles,
                positions: [F[0], F[D.length - 1]]
            }), p(T.end, Q, r, null), b.cursor && (a("body").css("cursor", a(b.target).css("cursor")), D.length > 1 && E.addClass(U[12]), a("body").on("selectstart" + S, !1))
        }

        function t(b) {
            var d, f = b.calcPoint, g = 0;
            b.stopPropagation(), a.each(D, function () {
                g += this.offset()[c.style]
            }), g = g / 2 > f || 1 === D.length ? 0 : 1, f -= C.offset()[c.style], d = 100 * f / i(), c.events.snap || e(E, U[14], 300), v(D[g], d), j(["slide", "set", "change"]), c.events.snap && s(b, {handles: [D[g]]})
        }

        function u(a) {
            var b, c;
            if (!a.fixed) for (b = 0; b < D.length; b += 1) p(T.start, D[b].children(), s, {handles: [D[b]]});
            a.tap && p(T.start, C, t, {handles: D}), a.drag && (c = C.find("." + U[7]).addClass(U[10]), a.fixed && (c = c.add(C.children().not(c).children())), p(T.start, c, s, {handles: D}))
        }

        function v(a, b, d) {
            var e = a[0] !== D[0][0] ? 1 : 0, g = F[0] + c.margin, h = F[1] - c.margin, i = F[0] + c.limit,
                j = F[1] - c.limit;
            return D.length > 1 && (b = e ? Math.max(b, g) : Math.min(b, h)), d !== !1 && c.limit && D.length > 1 && (b = e ? Math.min(b, i) : Math.max(b, j)), b = I.getStep(b), b = f(parseFloat(b.toFixed(7))), b === F[e] ? !1 : (a.css(c.style, b + "%"), a.is(":first-child") && a.toggleClass(U[17], b > 50), F[e] = b, M[e] = I.fromStepping(b), m(N[e]), !0)
        }

        function w(a, b) {
            var d, e, f;
            for (c.limit && (a += 1), d = 0; a > d; d += 1) e = d % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = c.format.from(f), (f === !1 || isNaN(f) || v(D[e], I.toStepping(f), d === 3 - c.dir) === !1) && m(N[e]))
        }

        function x(a) {
            if (E[0].LinkIsEmitting) return this;
            var b, d = g(a);
            return c.dir && c.handles > 1 && d.reverse(), c.animate && -1 !== F[0] && e(E, U[14], 300), b = D.length > 1 ? 3 : 1, 1 === d.length && (b = 1), w(b, d), j(["set"]), this
        }

        function y() {
            var a, b = [];
            for (a = 0; a < c.handles; a += 1) b[a] = c.format.to(M[a]);
            return k(b)
        }

        function z() {
            return a(this).off(S).removeClass(U.join(" ")).empty(), delete this.LinkUpdate, delete this.LinkConfirm, delete this.LinkDefaultFormatter, delete this.LinkDefaultFlag, delete this.reappend, delete this.vGet, delete this.vSet, delete this.getCurrentStep, delete this.getInfo, delete this.destroy, d
        }

        function A() {
            var b = a.map(F, function (a, b) {
                var c = I.getApplicableStep(a), d = h(String(c[2])), e = M[b], f = 100 === a ? null : c[2],
                    g = Number((e - c[2]).toFixed(d)), i = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
                return [[i, f]]
            });
            return k(b)
        }

        function B() {
            return d
        }

        var C, D, E = a(b), F = [-1, -1], I = c.spectrum, M = [], N = ["lower", "upper"].slice(0, c.handles);
        if (c.dir && N.reverse(), b.LinkUpdate = m, b.LinkConfirm = n, b.LinkDefaultFormatter = c.format, b.LinkDefaultFlag = "lower", b.reappend = o, E.hasClass(U[0])) throw new Error("Slider was already initialized.");
        C = L(c.dir, c.ort, E), D = K(c.handles, c.dir, C), J(c.connect, E, D), u(c.events), b.vSet = x, b.vGet = y, b.destroy = z, b.getCurrentStep = A, b.getOriginalOptions = B, b.getInfo = function () {
            return [I, c.style, c.ort]
        }, E.val(c.start)
    }

    function N(a) {
        var b = F(a, this);
        return this.each(function () {
            M(this, b, a)
        })
    }

    function O(b) {
        return this.each(function () {
            if (!this.destroy) return void a(this).noUiSlider(b);
            var c = a(this).val(), d = this.destroy(), e = a.extend({}, d, b);
            a(this).noUiSlider(e), this.reappend(), d.start === e.start && a(this).val(c)
        })
    }

    function P() {
        return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
    }

    var Q = a(document), R = a.fn.val, S = ".nui", T = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend"},
        U = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
    s.prototype.getMargin = function (a) {
        return 2 === this.xPct.length ? j(this.xVal, a) : !1
    }, s.prototype.toStepping = function (a) {
        return a = n(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a
    }, s.prototype.fromStepping = function (a) {
        return this.direction && (a = 100 - a), d(o(this.xVal, this.xPct, a))
    }, s.prototype.getStep = function (a) {
        return this.direction && (a = 100 - a), a = p(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a
    }, s.prototype.getApplicableStep = function (a) {
        var b = m(a, this.xPct), c = 100 === a ? 2 : 1;
        return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]]
    }, s.prototype.convert = function (a) {
        return this.getStep(this.toStepping(a))
    };
    var V = {
        to: function (a) {
            return a.toFixed(2)
        }, from: Number
    };
    a.fn.val = function (b) {
        function c(a) {
            return a.hasClass(U[0]) ? P : R
        }

        if (!arguments.length) {
            var d = a(this[0]);
            return c(d).call(d)
        }
        var e = a.isFunction(b);
        return this.each(function (d) {
            var f = b, g = a(this);
            e && (f = b.call(this, d, g.val())), c(g).call(g, f)
        })
    }, a.fn.noUiSlider = function (a, b) {
        switch (a) {
            case"step":
                return this[0].getCurrentStep();
            case"options":
                return this[0].getOriginalOptions()
        }
        return (b ? O : N).call(this, a)
    }
}(window.jQuery || window.Zepto);
// jQuery JSON plugin v2.5.1
!function ($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
        hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function (a) {
        if (null === a) return "null";
        var b, c, d, e, f = $.type(a);
        if ("undefined" === f) return void 0;
        if ("number" === f || "boolean" === f) return String(a);
        if ("string" === f) return $.quoteString(a);
        if ("function" == typeof a.toJSON) return $.toJSON(a.toJSON());
        if ("date" === f) {
            var g = a.getUTCMonth() + 1, h = a.getUTCDate(), i = a.getUTCFullYear(), j = a.getUTCHours(),
                k = a.getUTCMinutes(), l = a.getUTCSeconds(), m = a.getUTCMilliseconds();
            return 10 > g && (g = "0" + g), 10 > h && (h = "0" + h), 10 > j && (j = "0" + j), 10 > k && (k = "0" + k), 10 > l && (l = "0" + l), 100 > m && (m = "0" + m), 10 > m && (m = "0" + m), '"' + i + "-" + g + "-" + h + "T" + j + ":" + k + ":" + l + "." + m + 'Z"'
        }
        if (b = [], $.isArray(a)) {
            for (c = 0; c < a.length; c++) b.push($.toJSON(a[c]) || "null");
            return "[" + b.join(",") + "]"
        }
        if ("object" == typeof a) {
            for (c in a) if (hasOwn.call(a, c)) {
                if (f = typeof c, "number" === f) d = '"' + c + '"'; else {
                    if ("string" !== f) continue;
                    d = $.quoteString(c)
                }
                f = typeof a[c], "function" !== f && "undefined" !== f && (e = $.toJSON(a[c]), b.push(d + ":" + e))
            }
            return "{" + b.join(",") + "}"
        }
    }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (str) {
        return eval("(" + str + ")")
    }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (str) {
        var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    }, $.quoteString = function (a) {
        return a.match(escape) ? '"' + a.replace(escape, function (a) {
            var b = meta[a];
            return "string" == typeof b ? b : (b = a.charCodeAt(), "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
        }) + '"' : '"' + a + '"'
    }
}(jQuery);

// jQuery blockUI
!function () {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window, y = n && void 0 !== n.message ? n.message : void 0;
            if (n = e.extend({}, e.blockUI.defaults, n || {}), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = void 0 === y ? n.message : y, k && p && o(window, {fadeOut: 0}), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y, v = {};
                    e(t).data("blockUI.history", v), v.el = m, v.parent = m.parentNode, v.display = m.style.display, v.position = m.style.position, v.parent && v.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var g, I, w, U, x = n.baseZ;
                g = r || n.forceIframe ? e('<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>') : e('<div class="blockUI" style="display:none"></div>'), I = n.theme ? e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>') : e('<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && g.css("opacity", 0);
                var C = [g, I, w], S = k ? e("body") : e(t);
                e.each(C, function () {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(t, "borderTopWidth"),
                        T = d(t, "borderLeftWidth"), M = E ? "(0 - " + E + ")" : 0, B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", 2 > e) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M); else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0; else if (!n.centerY && k) {
                            var i = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                                s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';
                            o.setExpression("top", s)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && g.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c, H = n.showOverlay && !y ? j : c, z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : a(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window, a = e(t), d = a.data("blockUI.history"), c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
                0 === --s && n(r, d, o, t)
            })) : n(r, d, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function () {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body), a = l.width(), d = l[0].style.width;
                l.width(a - 1).width(a), l[0].style.width = d
            }
        }

        function i(t, o, n) {
            var i = o == window, l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(a, n, s) : e(document).unbind(a, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b, n = !t.shiftKey && t.target === o[o.length - 1], i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function () {
                    l(i)
                }, 10), !1
            }
            var s = t.data, a = e(t.target);
            return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[e === !0 ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function a(e, t, o) {
            var n = e.parentNode, i = e.style, s = (n.offsetWidth - e.offsetWidth) / 2 - d(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - d(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function d(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }

        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {
            }, r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function (e) {
            t(window, e)
        }, e.unblockUI = function (e) {
            o(window, e)
        }, e.growlUI = function (t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), void 0 === n && (n = 3e3);
            var l = function (t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function () {
                l({fadeIn: 0, timeout: 3e4});
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function (o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function () {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({fadeOut: 0})
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                o(this, t)
            })
        }, e.blockUI.version = 2.66, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {width: "30%", top: "40%", left: "35%"},
            overlayCSS: {backgroundColor: "#000", opacity: .6, cursor: "wait"},
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null, b = []
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
// DateRangePicker from bootstrap
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["moment", "jquery", "exports"], function (momentjs, $, exports) {
            root.daterangepicker = factory(root, exports, momentjs, $)
        })
    } else {
        if (typeof exports !== "undefined") {
            var momentjs = require("moment");
            var jQuery;
            try {
                jQuery = require("jquery")
            } catch (err) {
                jQuery = window.jQuery;
                if (!jQuery) {
                    throw new Error("jQuery dependency not found")
                }
            }
            factory(root, exports, momentjs, jQuery)
        } else {
            root.daterangepicker = factory(root, {}, root.moment, (root.jQuery || root.Zepto || root.ender || root.$))
        }
    }
}(this, function (root, daterangepicker, moment, $) {
    var DateRangePicker = function (element, options, cb) {
        this.parentEl = "body";
        this.element = $(element);
        this.isShowing = false;
        var DRPTemplate = '<div class="daterangepicker dropdown-menu">' + '<div class="ranges">' + '<div class="range_inputs">' + '<div class="daterangepicker_start_input">' + '<label for="daterangepicker_start"></label>' + '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' + "</div>" + '<div class="daterangepicker_end_input">' + '<label for="daterangepicker_end"></label>' + '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' + "</div>" + '<button class="applyBtn" disabled="disabled"></button>&nbsp;' + '<button class="cancelBtn"></button>' + "</div>" + "</div>" + '<div class="calendar first left"></div>' + '<div class="calendar second right"></div>' + "</div>";
        if (typeof options !== "object" || options === null) {
            options = {}
        }
        this.parentEl = (typeof options === "object" && options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(DRPTemplate).appendTo(this.parentEl);
        this.setOptions(options, cb);
        this.container.find(".calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", $.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.updateTime, this));
        this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this)).on("click.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.showCalendars, this)).on("change.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.inputsChanged, this)).on("keydown.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.inputsKeydown, this)).on("click.daterangepicker", "li", $.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", $.proxy(this.enterRange, this)).on("mouseleave.daterangepicker", "li", $.proxy(this.updateFormInputs, this));
        if (this.element.is("input")) {
            this.element.on({
                "click.daterangepicker": $.proxy(this.show, this),
                "focus.daterangepicker": $.proxy(this.show, this),
                "keyup.daterangepicker": $.proxy(this.updateFromControl, this),
                "keydown.daterangepicker": $.proxy(this.keydown, this)
            })
        } else {
            this.element.on("click.daterangepicker", $.proxy(this.toggle, this))
        }
    };
    DateRangePicker.prototype = {
        constructor: DateRangePicker, setOptions: function (options, callback) {
            this.startDate = moment().startOf("day");
            this.endDate = moment().endOf("day");
            this.timeZone = moment().utcOffset();
            this.minDate = false;
            this.maxDate = false;
            this.dateLimit = false;
            this.showDropdowns = false;
            this.showWeekNumbers = false;
            this.timePicker = false;
            this.timePickerSeconds = false;
            this.timePickerIncrement = 30;
            this.timePicker12Hour = true;
            this.singleDatePicker = false;
            this.ranges = {};
            this.opens = "right";
            if (this.element.hasClass("pull-right")) {
                this.opens = "left"
            }
            this.drops = "down";
            if (this.element.hasClass("dropup")) {
                this.drops = "up"
            }
            this.buttonClasses = ["btn", "btn-small btn-sm"];
            this.applyClass = "btn-success";
            this.cancelClass = "btn-default";
            this.format = "YYYY-MM-DD";
            this.separator = " - ";
            this.locale = {
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                fromLabel: "From",
                toLabel: "To",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: moment.weekdaysMin(),
                monthNames: moment.monthsShort(),
                firstDay: moment.localeData()._week.dow
            };
            this.cb = function () {
            };
            if (typeof options.format === "string") {
                this.format = options.format
            }
            if (typeof options.separator === "string") {
                this.separator = options.separator
            }
            if (typeof options.startDate === "string") {
                this.startDate = moment(options.startDate, this.format)
            }
            if (typeof options.endDate === "string") {
                this.endDate = moment(options.endDate, this.format)
            }
            if (typeof options.minDate === "string") {
                this.minDate = moment(options.minDate, this.format)
            }
            if (typeof options.maxDate === "string") {
                this.maxDate = moment(options.maxDate, this.format)
            }
            if (typeof options.startDate === "object") {
                this.startDate = moment(options.startDate)
            }
            if (typeof options.endDate === "object") {
                this.endDate = moment(options.endDate)
            }
            if (typeof options.minDate === "object") {
                this.minDate = moment(options.minDate)
            }
            if (typeof options.maxDate === "object") {
                this.maxDate = moment(options.maxDate)
            }
            if (typeof options.applyClass === "string") {
                this.applyClass = options.applyClass
            }
            if (typeof options.cancelClass === "string") {
                this.cancelClass = options.cancelClass
            }
            if (typeof options.dateLimit === "object") {
                this.dateLimit = options.dateLimit
            }
            if (typeof options.locale === "object") {
                if (typeof options.locale.daysOfWeek === "object") {
                    this.locale.daysOfWeek = options.locale.daysOfWeek.slice()
                }
                if (typeof options.locale.monthNames === "object") {
                    this.locale.monthNames = options.locale.monthNames.slice()
                }
                if (typeof options.locale.firstDay === "number") {
                    this.locale.firstDay = options.locale.firstDay
                }
                if (typeof options.locale.applyLabel === "string") {
                    this.locale.applyLabel = options.locale.applyLabel
                }
                if (typeof options.locale.cancelLabel === "string") {
                    this.locale.cancelLabel = options.locale.cancelLabel
                }
                if (typeof options.locale.fromLabel === "string") {
                    this.locale.fromLabel = options.locale.fromLabel
                }
                if (typeof options.locale.toLabel === "string") {
                    this.locale.toLabel = options.locale.toLabel
                }
                if (typeof options.locale.weekLabel === "string") {
                    this.locale.weekLabel = options.locale.weekLabel
                }
                if (typeof options.locale.customRangeLabel === "string") {
                    this.locale.customRangeLabel = options.locale.customRangeLabel
                }
            }
            if (typeof options.opens === "string") {
                this.opens = options.opens
            }
            if (typeof options.drops === "string") {
                this.drops = options.drops
            }
            if (typeof options.showWeekNumbers === "boolean") {
                this.showWeekNumbers = options.showWeekNumbers
            }
            if (typeof options.buttonClasses === "string") {
                this.buttonClasses = [options.buttonClasses]
            }
            if (typeof options.buttonClasses === "object") {
                this.buttonClasses = options.buttonClasses
            }
            if (typeof options.showDropdowns === "boolean") {
                this.showDropdowns = options.showDropdowns
            }
            if (typeof options.singleDatePicker === "boolean") {
                this.singleDatePicker = options.singleDatePicker;
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone()
                }
            }
            if (typeof options.timePicker === "boolean") {
                this.timePicker = options.timePicker
            }
            if (typeof options.timePickerSeconds === "boolean") {
                this.timePickerSeconds = options.timePickerSeconds
            }
            if (typeof options.timePickerIncrement === "number") {
                this.timePickerIncrement = options.timePickerIncrement
            }
            if (typeof options.timePicker12Hour === "boolean") {
                this.timePicker12Hour = options.timePicker12Hour
            }
            if (this.locale.firstDay != 0) {
                var iterator = this.locale.firstDay;
                while (iterator > 0) {
                    this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                    iterator--
                }
            }
            var start, end, range;
            if (typeof options.startDate === "undefined" && typeof options.endDate === "undefined") {
                if ($(this.element).is("input[type=text]")) {
                    var val = $(this.element).val(), split = val.split(this.separator);
                    start = end = null;
                    if (split.length == 2) {
                        start = moment(split[0], this.format);
                        end = moment(split[1], this.format)
                    } else {
                        if (this.singleDatePicker && val !== "") {
                            start = moment(val, this.format);
                            end = moment(val, this.format)
                        }
                    }
                    if (start !== null && end !== null) {
                        this.startDate = start;
                        this.endDate = end
                    }
                }
            }
            if (typeof options.timeZone === "string" || typeof options.timeZone === "number") {
                if (typeof options.timeZone === "string" && typeof moment.tz !== "undefined") {
                    this.timeZone = moment.tz.zone(options.timeZone).parse(new Date) * -1
                } else {
                    this.timeZone = options.timeZone
                }
                this.startDate.utcOffset(this.timeZone);
                this.endDate.utcOffset(this.timeZone)
            } else {
                this.timeZone = moment(this.startDate).utcOffset()
            }
            if (typeof options.ranges === "object") {
                for (range in options.ranges) {
                    if (typeof options.ranges[range][0] === "string") {
                        start = moment(options.ranges[range][0], this.format)
                    } else {
                        start = moment(options.ranges[range][0])
                    }
                    if (typeof options.ranges[range][1] === "string") {
                        end = moment(options.ranges[range][1], this.format)
                    } else {
                        end = moment(options.ranges[range][1])
                    }
                    if (this.minDate && start.isBefore(this.minDate)) {
                        start = moment(this.minDate)
                    }
                    if (this.maxDate && end.isAfter(this.maxDate)) {
                        end = moment(this.maxDate)
                    }
                    if ((this.minDate && end.isBefore(this.minDate)) || (this.maxDate && start.isAfter(this.maxDate))) {
                        continue
                    }
                    this.ranges[range] = [start, end]
                }
                var list = "<ul>";
                for (range in this.ranges) {
                    list += "<li>" + range + "</li>"
                }
                list += "<li>" + this.locale.customRangeLabel + "</li>";
                list += "</ul>";
                this.container.find(".ranges ul").remove();
                this.container.find(".ranges").prepend(list)
            }
            if (typeof callback === "function") {
                this.cb = callback
            }
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf("day");
                this.endDate = this.endDate.endOf("day")
            }
            if (this.singleDatePicker) {
                this.opens = "right";
                this.container.addClass("single");
                this.container.find(".calendar.right").show();
                this.container.find(".calendar.left").hide();
                if (!this.timePicker) {
                    this.container.find(".ranges").hide()
                } else {
                    this.container.find(".ranges .daterangepicker_start_input, .ranges .daterangepicker_end_input").hide()
                }
                if (!this.container.find(".calendar.right").hasClass("single")) {
                    this.container.find(".calendar.right").addClass("single")
                }
            } else {
                this.container.removeClass("single");
                this.container.find(".calendar.right").removeClass("single");
                this.container.find(".ranges").show()
            }
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.oldChosenLabel = this.chosenLabel;
            this.leftCalendar = {
                month: moment([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute(), this.startDate.second()]),
                calendar: []
            };
            this.rightCalendar = {
                month: moment([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute(), this.endDate.second()]),
                calendar: []
            };
            if (this.opens == "right" || this.opens == "center") {
                var first = this.container.find(".calendar.first");
                var second = this.container.find(".calendar.second");
                if (second.hasClass("single")) {
                    second.removeClass("single");
                    first.addClass("single")
                }
                first.removeClass("left").addClass("right");
                second.removeClass("right").addClass("left");
                if (this.singleDatePicker) {
                    first.show();
                    second.hide()
                }
            }
            if (typeof options.ranges === "undefined" && !this.singleDatePicker) {
                this.container.addClass("show-calendar")
            }
            this.container.removeClass("opensleft opensright").addClass("opens" + this.opens);
            this.updateView();
            this.updateCalendars();
            var c = this.container;
            $.each(this.buttonClasses, function (idx, val) {
                c.find("button").addClass(val)
            });
            this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel);
            this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel);
            if (this.applyClass.length) {
                this.container.find(".applyBtn").addClass(this.applyClass)
            }
            if (this.cancelClass.length) {
                this.container.find(".cancelBtn").addClass(this.cancelClass)
            }
            this.container.find(".applyBtn").html(this.locale.applyLabel);
            this.container.find(".cancelBtn").html(this.locale.cancelLabel)
        }, setStartDate: function (startDate) {
            if (typeof startDate === "string") {
                this.startDate = moment(startDate, this.format).utcOffset(this.timeZone)
            }
            if (typeof startDate === "object") {
                this.startDate = moment(startDate)
            }
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf("day")
            }
            this.oldStartDate = this.startDate.clone();
            this.updateView();
            this.updateCalendars();
            this.updateInputText()
        }, setEndDate: function (endDate) {
            if (typeof endDate === "string") {
                this.endDate = moment(endDate, this.format).utcOffset(this.timeZone)
            }
            if (typeof endDate === "object") {
                this.endDate = moment(endDate)
            }
            if (!this.timePicker) {
                this.endDate = this.endDate.endOf("day")
            }
            this.oldEndDate = this.endDate.clone();
            this.updateView();
            this.updateCalendars();
            this.updateInputText()
        }, updateView: function () {
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
            this.updateFormInputs()
        }, updateFormInputs: function () {
            this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format));
            this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format));
            if (this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate)) {
                this.container.find("button.applyBtn").removeAttr("disabled")
            } else {
                this.container.find("button.applyBtn").attr("disabled", "disabled")
            }
        }, updateFromControl: function () {
            if (!this.element.is("input")) {
                return
            }
            if (!this.element.val().length) {
                return
            }
            var dateString = this.element.val().split(this.separator), start = null, end = null;
            if (dateString.length === 2) {
                start = moment(dateString[0], this.format).utcOffset(this.timeZone);
                end = moment(dateString[1], this.format).utcOffset(this.timeZone)
            }
            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.format).utcOffset(this.timeZone);
                end = start
            }
            if (end.isBefore(start)) {
                return
            }
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.startDate = start;
            this.endDate = end;
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) {
                this.notify()
            }
            this.updateCalendars()
        }, keydown: function (e) {
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide()
            }
        }, notify: function () {
            this.updateView();
            this.cb(this.startDate, this.endDate, this.chosenLabel)
        }, move: function () {
            var parentOffset = {top: 0, left: 0}, containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is("body")) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left
            }
            if (this.drops == "up") {
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top
            } else {
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top
            }
            this.container[this.drops == "up" ? "addClass" : "removeClass"]("dropup");
            if (this.opens == "left") {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: "auto"
                });
                if (this.container.offset().left < 0) {
                    this.container.css({right: "auto", left: 9})
                }
            } else {
                if (this.opens == "center") {
                    this.container.css({
                        top: containerTop,
                        left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                        right: "auto"
                    });
                    if (this.container.offset().left < 0) {
                        this.container.css({right: "auto", left: 9})
                    }
                } else {
                    this.container.css({
                        top: containerTop,
                        left: this.element.offset().left - parentOffset.left,
                        right: "auto"
                    });
                    if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                        this.container.css({left: "auto", right: 0})
                    }
                }
            }
        }, toggle: function (e) {
            if (this.element.hasClass("active")) {
                this.hide()
            } else {
                this.show()
            }
        }, show: function (e) {
            if (this.isShowing) {
                return
            }
            this.element.addClass("active");
            this.container.show();
            this.move();
            this._outsideClickProxy = $.proxy(function (e) {
                this.outsideClick(e)
            }, this);
            $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy);
            this.isShowing = true;
            this.element.trigger("show.daterangepicker", this)
        }, outsideClick: function (e) {
            var target = $(e.target);
            if (e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest(".calendar-date").length) {
                return
            }
            this.hide()
        }, hide: function (e) {
            if (!this.isShowing) {
                return
            }
            $(document).off(".daterangepicker");
            this.element.removeClass("active");
            this.container.hide();
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) {
                this.notify()
            }
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.isShowing = false;
            this.element.trigger("hide.daterangepicker", this)
        }, enterRange: function (e) {
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView()
            } else {
                var dates = this.ranges[label];
                this.container.find("input[name=daterangepicker_start]").val(dates[0].format(this.format));
                this.container.find("input[name=daterangepicker_end]").val(dates[1].format(this.format))
            }
        }, showCalendars: function () {
            this.container.addClass("show-calendar");
            this.move();
            this.element.trigger("showCalendar.daterangepicker", this)
        }, hideCalendars: function () {
            this.container.removeClass("show-calendar");
            this.element.trigger("hideCalendar.daterangepicker", this)
        }, inputsChanged: function (e) {
            var el = $(e.target);
            var date = moment(el.val(), this.format);
            if (!date.isValid()) {
                return
            }
            var startDate, endDate;
            if (el.attr("name") === "daterangepicker_start") {
                startDate = (false !== this.minDate && date.isBefore(this.minDate)) ? this.minDate : date;
                endDate = this.endDate
            } else {
                startDate = this.startDate;
                endDate = (false !== this.maxDate && date.isAfter(this.maxDate)) ? this.maxDate : date
            }
            this.setCustomDates(startDate, endDate)
        }, inputsKeydown: function (e) {
            if (e.keyCode === 13) {
                this.inputsChanged(e);
                this.notify()
            }
        }, updateInputText: function () {
            if (this.element.is("input") && !this.singleDatePicker) {
                this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format));
                this.element.trigger("change")
            } else {
                if (this.element.is("input")) {
                    this.element.val(this.endDate.format(this.format));
                    this.element.trigger("change")
                }
            }
        }, clickRange: function (e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars()
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];
                if (!this.timePicker) {
                    this.startDate.startOf("day");
                    this.endDate.endOf("day")
                }
                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
                this.updateCalendars();
                this.updateInputText();
                this.hideCalendars();
                this.hide();
                this.element.trigger("apply.daterangepicker", this)
            }
        }, clickPrev: function (e) {
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.subtract(1, "month")
            } else {
                this.rightCalendar.month.subtract(1, "month")
            }
            this.updateCalendars()
        }, clickNext: function (e) {
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.add(1, "month")
            } else {
                this.rightCalendar.month.add(1, "month")
            }
            this.updateCalendars()
        }, hoverDate: function (e) {
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[row][col].format(this.format))
            } else {
                this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[row][col].format(this.format))
            }
        }, setCustomDates: function (startDate, endDate) {
            this.chosenLabel = this.locale.customRangeLabel;
            if (startDate.isAfter(endDate)) {
                var difference = this.endDate.diff(this.startDate);
                endDate = moment(startDate).add(difference, "ms");
                if (this.maxDate && endDate.isAfter(this.maxDate)) {
                    endDate = this.maxDate.clone()
                }
            }
            this.startDate = startDate;
            this.endDate = endDate;
            this.updateView();
            this.updateCalendars()
        }, clickDate: function (e) {
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".calendar");
            var startDate, endDate;
            if (cal.hasClass("left")) {
                startDate = this.leftCalendar.calendar[row][col];
                endDate = this.endDate;
                if (typeof this.dateLimit === "object") {
                    var maxDate = moment(startDate).add(this.dateLimit).startOf("day");
                    if (endDate.isAfter(maxDate)) {
                        endDate = maxDate
                    }
                }
            } else {
                startDate = this.startDate;
                endDate = this.rightCalendar.calendar[row][col];
                if (typeof this.dateLimit === "object") {
                    var minDate = moment(endDate).subtract(this.dateLimit).startOf("day");
                    if (startDate.isBefore(minDate)) {
                        startDate = minDate
                    }
                }
            }
            if (this.singleDatePicker && cal.hasClass("left")) {
                endDate = startDate.clone()
            } else {
                if (this.singleDatePicker && cal.hasClass("right")) {
                    startDate = endDate.clone()
                }
            }
            cal.find("td").removeClass("active");
            $(e.target).addClass("active");
            this.setCustomDates(startDate, endDate);
            if (!this.timePicker) {
                endDate.endOf("day")
            }
            if (this.singleDatePicker && !this.timePicker) {
                this.clickApply()
            }
        }, clickApply: function (e) {
            this.updateInputText();
            this.hide();
            this.element.trigger("apply.daterangepicker", this)
        }, clickCancel: function (e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.chosenLabel = this.oldChosenLabel;
            this.updateView();
            this.updateCalendars();
            this.hide();
            this.element.trigger("cancel.daterangepicker", this)
        }, updateMonthYear: function (e) {
            var isLeft = $(e.target).closest(".calendar").hasClass("left"), leftOrRight = isLeft ? "left" : "right",
                cal = this.container.find(".calendar." + leftOrRight);
            var month = parseInt(cal.find(".monthselect").val(), 10);
            var year = cal.find(".yearselect").val();
            if (!isLeft && !this.singleDatePicker) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year()
                }
            }
            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year()
                }
            }
            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year()
                }
            }
            this[leftOrRight + "Calendar"].month.month(month).year(year);
            this.updateCalendars()
        }, updateTime: function (e) {
            var cal = $(e.target).closest(".calendar"), isLeft = cal.hasClass("left");
            var hour = parseInt(cal.find(".hourselect").val(), 10);
            var minute = parseInt(cal.find(".minuteselect").val(), 10);
            var second = 0;
            if (this.timePickerSeconds) {
                second = parseInt(cal.find(".secondselect").val(), 10)
            }
            if (this.timePicker12Hour) {
                var ampm = cal.find(".ampmselect").val();
                if (ampm === "PM" && hour < 12) {
                    hour += 12
                }
                if (ampm === "AM" && hour === 12) {
                    hour = 0
                }
            }
            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.startDate = start;
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                if (this.singleDatePicker) {
                    this.endDate = start.clone()
                }
            } else {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.endDate = end;
                if (this.singleDatePicker) {
                    this.startDate = end.clone()
                }
                this.rightCalendar.month.hour(hour).minute(minute).second(second)
            }
            this.updateView();
            this.updateCalendars()
        }, updateCalendars: function () {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), this.leftCalendar.month.second(), "left");
            this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), this.rightCalendar.month.second(), "right");
            this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate, "left"));
            this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.singleDatePicker ? this.minDate : this.startDate, this.maxDate, "right"));
            this.container.find(".ranges li").removeClass("active");
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").html()
                    }
                } else {
                    if (this.startDate.format("YYYY-MM-DD") == this.ranges[range][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[range][1].format("YYYY-MM-DD")) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").html()
                    }
                }
                i++
            }
            if (customRange) {
                this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html();
                this.showCalendars()
            }
        }, buildCalendar: function (month, year, hour, minute, second, side) {
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, "month").month();
            var lastYear = moment(firstDay).subtract(1, "month").year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();
            var i;
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;
            for (i = 0; i < 6; i++) {
                calendar[i] = []
            }
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth) {
                startDay -= 7
            }
            if (dayOfWeek == this.locale.firstDay) {
                startDay = daysInLastMonth - 6
            }
            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]).utcOffset(this.timeZone);
            var col, row;
            for (i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, "hour")) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++
                }
                calendar[row][col] = curDate.clone().hour(hour);
                curDate.hour(12);
                if (this.minDate && calendar[row][col].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && calendar[row][col].isBefore(this.minDate) && side == "left") {
                    calendar[row][col] = this.minDate.clone()
                }
                if (this.maxDate && calendar[row][col].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && calendar[row][col].isAfter(this.maxDate) && side == "right") {
                    calendar[row][col] = this.maxDate.clone()
                }
            }
            return calendar
        }, renderDropdowns: function (selected, minDate, maxDate) {
            var currentMonth = selected.month();
            var currentYear = selected.year();
            var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
            var minYear = (minDate && minDate.year()) || (currentYear - 50);
            var monthHtml = '<select class="monthselect">';
            var inMinYear = currentYear == minYear;
            var inMaxYear = currentYear == maxYear;
            for (var m = 0; m < 12; m++) {
                if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                    monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>"
                }
            }
            monthHtml += "</select>";
            var yearHtml = '<select class="yearselect">';
            for (var y = minYear; y <= maxYear; y++) {
                yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : "") + ">" + y + "</option>"
            }
            yearHtml += "</select>";
            return monthHtml + yearHtml
        }, renderCalendar: function (calendar, selected, minDate, maxDate, side) {
            var html = '<div class="calendar-date">';
            html += '<table class="table-condensed">';
            html += "<thead>";
            html += "<tr>";
            if (this.showWeekNumbers) {
                html += "<th></th>"
            }
            if (!minDate || minDate.isBefore(calendar.firstDay)) {
                html += '<th class="prev available">&lt;</th>'
            } else {
                html += "<th></th>"
            }
            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
            if (this.showDropdowns) {
                dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate)
            }
            html += '<th colspan="5" class="month">' + dateHtml + "</th>";
            if (!maxDate || maxDate.isAfter(calendar.lastDay)) {
                html += '<th class="next available">&gt;</th>'
            } else {
                html += "<th></th>"
            }
            html += "</tr>";
            html += "<tr>";
            if (this.showWeekNumbers) {
                html += '<th class="week">' + this.locale.weekLabel + "</th>"
            }
            $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
                html += "<th>" + dayOfWeek + "</th>"
            });
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            for (var row = 0; row < 6; row++) {
                html += "<tr>";
                if (this.showWeekNumbers) {
                    html += '<td class="week">' + calendar[row][0].week() + "</td>"
                }
                for (var col = 0; col < 7; col++) {
                    var cname = "available ";
                    cname += (calendar[row][col].month() == calendar[1][1].month()) ? "" : "off";
                    if ((minDate && calendar[row][col].isBefore(minDate, "day")) || (maxDate && calendar[row][col].isAfter(maxDate, "day"))) {
                        cname = " off disabled "
                    } else {
                        if (calendar[row][col].format("YYYY-MM-DD") == selected.format("YYYY-MM-DD")) {
                            cname += " active ";
                            if (calendar[row][col].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD")) {
                                cname += " start-date "
                            }
                            if (calendar[row][col].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD")) {
                                cname += " end-date "
                            }
                        } else {
                            if (calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate) {
                                cname += " in-range ";
                                if (calendar[row][col].isSame(this.startDate)) {
                                    cname += " start-date "
                                }
                                if (calendar[row][col].isSame(this.endDate)) {
                                    cname += " end-date "
                                }
                            }
                        }
                    }
                    var title = "r" + row + "c" + col;
                    html += '<td class="' + cname.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + title + '">' + calendar[row][col].date() + "</td>"
                }
                html += "</tr>"
            }
            html += "</tbody>";
            html += "</table>";
            html += "</div>";
            var i;
            if (this.timePicker) {
                html += '<div class="calendar-time">';
                html += '<select class="hourselect">';
                var min_hour = 0;
                var max_hour = 23;
                if (minDate && (side == "left" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == minDate.format("YYYY-MM-DD")) {
                    min_hour = minDate.hour();
                    if (selected.hour() < min_hour) {
                        selected.hour(min_hour)
                    }
                    if (this.timePicker12Hour && min_hour >= 12 && selected.hour() >= 12) {
                        min_hour -= 12
                    }
                    if (this.timePicker12Hour && min_hour == 12) {
                        min_hour = 1
                    }
                }
                if (maxDate && (side == "right" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == maxDate.format("YYYY-MM-DD")) {
                    max_hour = maxDate.hour();
                    if (selected.hour() > max_hour) {
                        selected.hour(max_hour)
                    }
                    if (this.timePicker12Hour && max_hour >= 12 && selected.hour() >= 12) {
                        max_hour -= 12
                    }
                }
                var start = 0;
                var end = 23;
                var selected_hour = selected.hour();
                if (this.timePicker12Hour) {
                    start = 1;
                    end = 12;
                    if (selected_hour >= 12) {
                        selected_hour -= 12
                    }
                    if (selected_hour === 0) {
                        selected_hour = 12
                    }
                }
                for (i = start; i <= end; i++) {
                    if (i == selected_hour) {
                        html += '<option value="' + i + '" selected="selected">' + i + "</option>"
                    } else {
                        if (i < min_hour || i > max_hour) {
                            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + "</option>"
                        } else {
                            html += '<option value="' + i + '">' + i + "</option>"
                        }
                    }
                }
                html += "</select> : ";
                html += '<select class="minuteselect">';
                var min_minute = 0;
                var max_minute = 59;
                if (minDate && (side == "left" || this.singleDatePicker) && selected.format("YYYY-MM-DD h A") == minDate.format("YYYY-MM-DD h A")) {
                    min_minute = minDate.minute();
                    if (selected.minute() < min_minute) {
                        selected.minute(min_minute)
                    }
                }
                if (maxDate && (side == "right" || this.singleDatePicker) && selected.format("YYYY-MM-DD h A") == maxDate.format("YYYY-MM-DD h A")) {
                    max_minute = maxDate.minute();
                    if (selected.minute() > max_minute) {
                        selected.minute(max_minute)
                    }
                }
                for (i = 0; i < 60; i += this.timePickerIncrement) {
                    var num = i;
                    if (num < 10) {
                        num = "0" + num
                    }
                    if (i == selected.minute()) {
                        html += '<option value="' + i + '" selected="selected">' + num + "</option>"
                    } else {
                        if (i < min_minute || i > max_minute) {
                            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + num + "</option>"
                        } else {
                            html += '<option value="' + i + '">' + num + "</option>"
                        }
                    }
                }
                html += "</select> ";
                if (this.timePickerSeconds) {
                    html += ': <select class="secondselect">';
                    for (i = 0; i < 60; i += this.timePickerIncrement) {
                        var num = i;
                        if (num < 10) {
                            num = "0" + num
                        }
                        if (i == selected.second()) {
                            html += '<option value="' + i + '" selected="selected">' + num + "</option>"
                        } else {
                            html += '<option value="' + i + '">' + num + "</option>"
                        }
                    }
                    html += "</select>"
                }
                if (this.timePicker12Hour) {
                    html += '<select class="ampmselect">';
                    var am_html = "";
                    var pm_html = "";
                    if (minDate && (side == "left" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == minDate.format("YYYY-MM-DD") && minDate.hour() >= 12) {
                        am_html = ' disabled="disabled" class="disabled"'
                    }
                    if (maxDate && (side == "right" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == maxDate.format("YYYY-MM-DD") && maxDate.hour() < 12) {
                        pm_html = ' disabled="disabled" class="disabled"'
                    }
                    if (selected.hour() >= 12) {
                        html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + ">PM</option>"
                    } else {
                        html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + ">PM</option>"
                    }
                    html += "</select>"
                }
                html += "</div>"
            }
            return html
        }, remove: function () {
            this.container.remove();
            this.element.off(".daterangepicker");
            this.element.removeData("daterangepicker")
        }
    };
    $.fn.daterangepicker = function (options, cb) {
        this.each(function () {
            var el = $(this);
            if (el.data("daterangepicker")) {
                el.data("daterangepicker").remove()
            }
            el.data("daterangepicker", new DateRangePicker(el, options, cb))
        });
        return this
    }
}));
// DatePicker from bootstrap
(function ($, undefined) {
    var $window = $(window);

    function UTCDate() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function UTCToday() {
        var today = new Date();
        return UTCDate(today.getFullYear(), today.getMonth(), today.getDate())
    }

    function alias(method) {
        return function () {
            return this[method].apply(this, arguments)
        }
    }

    var DateArray = (function () {
        var extras = {
            get: function (i) {
                return this.slice(i)[0]
            }, contains: function (d) {
                var val = d && d.valueOf();
                for (var i = 0, l = this.length; i < l; i++) {
                    if (this[i].valueOf() === val) {
                        return i
                    }
                }
                return -1
            }, remove: function (i) {
                this.splice(i, 1)
            }, replace: function (new_array) {
                if (!new_array) {
                    return
                }
                if (!$.isArray(new_array)) {
                    new_array = [new_array]
                }
                this.clear();
                this.push.apply(this, new_array)
            }, clear: function () {
                this.splice(0)
            }, copy: function () {
                var a = new DateArray();
                a.replace(this);
                return a
            }
        };
        return function () {
            var a = [];
            a.push.apply(a, arguments);
            $.extend(a, extras);
            return a
        }
    })();
    var Datepicker = function (element, options) {
        this.dates = new DateArray();
        this.viewDate = UTCToday();
        this.focusDate = null;
        this._process_options(options);
        this.element = $(element);
        this.isInline = false;
        this.isInput = this.element.is("input");
        this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : false;
        this.hasInput = this.component && this.element.find("input").length;
        if (this.component && this.component.length === 0) {
            this.component = false
        }
        this.picker = $(DPGlobal.template);
        this._buildEvents();
        this._attachEvents();
        if (this.isInline) {
            this.picker.addClass("datepicker-inline").appendTo(this.element)
        } else {
            this.picker.addClass("datepicker-dropdown dropdown-menu")
        }
        if (this.o.rtl) {
            this.picker.addClass("datepicker-rtl");
            this.picker.find(".prev i, .next i").toggleClass("fa-angle-left fa-angle-right")
        }
        this.viewMode = this.o.startView;
        if (this.o.calendarWeeks) {
            this.picker.find("tfoot th.today").attr("colspan", function (i, val) {
                return parseInt(val) + 1
            })
        }
        this._allow_update = false;
        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
        this.fillDow();
        this.fillMonths();
        this._allow_update = true;
        this.update();
        this.showMode();
        if (this.isInline) {
            this.show()
        }
    };
    Datepicker.prototype = {
        constructor: Datepicker, _process_options: function (opts) {
            this._o = $.extend({}, this._o, opts);
            var o = this.o = $.extend({}, this._o);
            var lang = o.language;
            if (!dates[lang]) {
                lang = lang.split("-")[0];
                if (!dates[lang]) {
                    lang = defaults.language
                }
            }
            o.language = lang;
            switch (o.startView) {
                case 2:
                case"decade":
                    o.startView = 2;
                    break;
                case 1:
                case"year":
                    o.startView = 1;
                    break;
                default:
                    o.startView = 0
            }
            switch (o.minViewMode) {
                case 1:
                case"months":
                    o.minViewMode = 1;
                    break;
                case 2:
                case"years":
                    o.minViewMode = 2;
                    break;
                default:
                    o.minViewMode = 0
            }
            o.startView = Math.max(o.startView, o.minViewMode);
            if (o.multidate !== true) {
                o.multidate = Number(o.multidate) || false;
                if (o.multidate !== false) {
                    o.multidate = Math.max(0, o.multidate)
                } else {
                    o.multidate = 1
                }
            }
            o.multidateSeparator = String(o.multidateSeparator);
            o.weekStart %= 7;
            o.weekEnd = ((o.weekStart + 6) % 7);
            var format = DPGlobal.parseFormat(o.format);
            if (o.startDate !== -Infinity) {
                if (!!o.startDate) {
                    if (o.startDate instanceof Date) {
                        o.startDate = this._local_to_utc(this._zero_time(o.startDate))
                    } else {
                        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language)
                    }
                } else {
                    o.startDate = -Infinity
                }
            }
            if (o.endDate !== Infinity) {
                if (!!o.endDate) {
                    if (o.endDate instanceof Date) {
                        o.endDate = this._local_to_utc(this._zero_time(o.endDate))
                    } else {
                        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language)
                    }
                } else {
                    o.endDate = Infinity
                }
            }
            o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
            if (!$.isArray(o.daysOfWeekDisabled)) {
                o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)
            }
            o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
                return parseInt(d, 10)
            });
            var plc = String(o.orientation).toLowerCase().split(/\s+/g), _plc = o.orientation.toLowerCase();
            plc = $.grep(plc, function (word) {
                return (/^auto|left|right|top|bottom$/).test(word)
            });
            o.orientation = {x: "auto", y: "auto"};
            if (!_plc || _plc === "auto") {
            } else {
                if (plc.length === 1) {
                    switch (plc[0]) {
                        case"top":
                        case"bottom":
                            o.orientation.y = plc[0];
                            break;
                        case"left":
                        case"right":
                            o.orientation.x = plc[0];
                            break
                    }
                } else {
                    _plc = $.grep(plc, function (word) {
                        return (/^left|right$/).test(word)
                    });
                    o.orientation.x = _plc[0] || "auto";
                    _plc = $.grep(plc, function (word) {
                        return (/^top|bottom$/).test(word)
                    });
                    o.orientation.y = _plc[0] || "auto"
                }
            }
        }, _events: [], _secondaryEvents: [], _applyEvents: function (evs) {
            for (var i = 0, el, ch, ev; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1]
                } else {
                    if (evs[i].length === 3) {
                        ch = evs[i][1];
                        ev = evs[i][2]
                    }
                }
                el.on(ev, ch)
            }
        }, _unapplyEvents: function (evs) {
            for (var i = 0, el, ev, ch; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1]
                } else {
                    if (evs[i].length === 3) {
                        ch = evs[i][1];
                        ev = evs[i][2]
                    }
                }
                el.off(ev, ch)
            }
        }, _buildEvents: function () {
            if (this.isInput) {
                this._events = [[this.element, {
                    focus: $.proxy(this.show, this), keyup: $.proxy(function (e) {
                        if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) {
                            this.update()
                        }
                    }, this), keydown: $.proxy(this.keydown, this)
                }]]
            } else {
                if (this.component && this.hasInput) {
                    this._events = [[this.element.find("input"), {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(function (e) {
                            if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) {
                                this.update()
                            }
                        }, this),
                        keydown: $.proxy(this.keydown, this)
                    }], [this.component, {click: $.proxy(this.show, this)}]]
                } else {
                    if (this.element.is("div")) {
                        this.isInline = true
                    } else {
                        this._events = [[this.element, {click: $.proxy(this.show, this)}]]
                    }
                }
            }
            this._events.push([this.element, "*", {
                blur: $.proxy(function (e) {
                    this._focused_from = e.target
                }, this)
            }], [this.element, {
                blur: $.proxy(function (e) {
                    this._focused_from = e.target
                }, this)
            }]);
            this._secondaryEvents = [[this.picker, {click: $.proxy(this.click, this)}], [$(window), {resize: $.proxy(this.place, this)}], [$(document), {
                "mousedown touchstart": $.proxy(function (e) {
                    if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length)) {
                        this.hide()
                    }
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents();
            this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (event, altdate) {
            var date = altdate || this.dates.get(-1), local_date = this._utc_to_local(date);
            this.element.trigger({
                type: event,
                date: local_date,
                dates: $.map(this.dates, this._utc_to_local),
                format: $.proxy(function (ix, format) {
                    if (arguments.length === 0) {
                        ix = this.dates.length - 1;
                        format = this.o.format
                    } else {
                        if (typeof ix === "string") {
                            format = ix;
                            ix = this.dates.length - 1
                        }
                    }
                    format = format || this.o.format;
                    var date = this.dates.get(ix);
                    return DPGlobal.formatDate(date, format, this.o.language)
                }, this)
            })
        }, show: function () {
            if (!this.isInline) {
                this.picker.appendTo("body")
            }
            this.picker.show();
            this.place();
            this._attachSecondaryEvents();
            this._trigger("show")
        }, hide: function () {
            if (this.isInline) {
                return
            }
            if (!this.picker.is(":visible")) {
                return
            }
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();
            if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) {
                this.setValue()
            }
            this._trigger("hide")
        }, remove: function () {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date
            }
        }, _utc_to_local: function (utc) {
            return utc && new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000))
        }, _local_to_utc: function (local) {
            return local && new Date(local.getTime() - (local.getTimezoneOffset() * 60000))
        }, _zero_time: function (local) {
            return local && new Date(local.getFullYear(), local.getMonth(), local.getDate())
        }, _zero_utc_time: function (utc) {
            return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()))
        }, getDates: function () {
            return $.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return $.map(this.dates, function (d) {
                return new Date(d)
            })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            return new Date(this.dates.get(-1))
        }, setDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, args);
            this._trigger("changeDate");
            this.setValue()
        }, setUTCDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, $.map(args, this._utc_to_local));
            this._trigger("changeDate");
            this.setValue()
        }, setDate: alias("setDates"), setUTCDate: alias("setUTCDates"), setValue: function () {
            var formatted = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component) {
                    this.element.find("input").val(formatted).change()
                }
            } else {
                this.element.val(formatted).change()
            }
        }, getFormattedDate: function (format) {
            if (format === undefined) {
                format = this.o.format
            }
            var lang = this.o.language;
            return $.map(this.dates, function (d) {
                return DPGlobal.formatDate(d, format, lang)
            }).join(this.o.multidateSeparator)
        }, setStartDate: function (startDate) {
            this._process_options({startDate: startDate});
            this.update();
            this.updateNavArrows()
        }, setEndDate: function (endDate) {
            this._process_options({endDate: endDate});
            this.update();
            this.updateNavArrows()
        }, setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
            this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
            this.update();
            this.updateNavArrows()
        }, place: function () {
            if (this.isInline) {
                return
            }
            var calendarWidth = this.picker.outerWidth(), calendarHeight = this.picker.outerHeight(),
                visualPadding = 10, windowWidth = $window.width(), windowHeight = $window.height(),
                scrollTop = $window.scrollTop();
            var zIndex = parseInt(this.element.parents().filter(function () {
                return $(this).css("z-index") !== "auto"
            }).first().css("z-index")) + 10;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var left = offset.left, top = offset.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom " + "datepicker-orient-right datepicker-orient-left");
            if (this.o.orientation.x !== "auto") {
                this.picker.addClass("datepicker-orient-" + this.o.orientation.x);
                if (this.o.orientation.x === "right") {
                    left -= calendarWidth - width
                }
            } else {
                this.picker.addClass("datepicker-orient-left");
                if (offset.left < 0) {
                    left -= offset.left - visualPadding
                } else {
                    if (offset.left + calendarWidth > windowWidth) {
                        left = windowWidth - calendarWidth - visualPadding
                    }
                }
            }
            var yorient = this.o.orientation.y, top_overflow, bottom_overflow;
            if (yorient === "auto") {
                top_overflow = -scrollTop + offset.top - calendarHeight;
                bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
                if (Math.max(top_overflow, bottom_overflow) === bottom_overflow) {
                    yorient = "top"
                } else {
                    yorient = "bottom"
                }
            }
            this.picker.addClass("datepicker-orient-" + yorient);
            if (yorient === "top") {
                top += height
            } else {
                top -= calendarHeight + parseInt(this.picker.css("padding-top"))
            }
            this.picker.css({top: top, left: left, zIndex: zIndex})
        }, _allow_update: true, update: function () {
            if (!this._allow_update) {
                return
            }
            var oldDates = this.dates.copy(), dates = [], fromArgs = false;
            if (arguments.length) {
                $.each(arguments, $.proxy(function (i, date) {
                    if (date instanceof Date) {
                        date = this._local_to_utc(date)
                    }
                    dates.push(date)
                }, this));
                fromArgs = true
            } else {
                dates = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
                if (dates && this.o.multidate) {
                    dates = dates.split(this.o.multidateSeparator)
                } else {
                    dates = [dates]
                }
                delete this.element.data().date
            }
            dates = $.map(dates, $.proxy(function (date) {
                return DPGlobal.parseDate(date, this.o.format, this.o.language)
            }, this));
            dates = $.grep(dates, $.proxy(function (date) {
                return (date < this.o.startDate || date > this.o.endDate || !date)
            }, this), true);
            this.dates.replace(dates);
            if (this.dates.length) {
                this.viewDate = new Date(this.dates.get(-1))
            } else {
                if (this.viewDate < this.o.startDate) {
                    this.viewDate = new Date(this.o.startDate)
                } else {
                    if (this.viewDate > this.o.endDate) {
                        this.viewDate = new Date(this.o.endDate)
                    }
                }
            }
            if (fromArgs) {
                this.setValue()
            } else {
                if (dates.length) {
                    if (String(oldDates) !== String(this.dates)) {
                        this._trigger("changeDate")
                    }
                }
            }
            if (!this.dates.length && oldDates.length) {
                this._trigger("clearDate")
            }
            this.fill()
        }, fillDow: function () {
            var dowCnt = this.o.weekStart, html = "<tr>";
            if (this.o.calendarWeeks) {
                var cell = '<th class="cw">&nbsp;</th>';
                html += cell;
                this.picker.find(".datepicker-days thead tr:first-child").prepend(cell)
            }
            while (dowCnt < this.o.weekStart + 7) {
                html += '<th class="dow">' + dates[this.o.language].daysMin[(dowCnt++) % 7] + "</th>"
            }
            html += "</tr>";
            this.picker.find(".datepicker-days thead").append(html)
        }, fillMonths: function () {
            var html = "", i = 0;
            while (i < 12) {
                html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(html)
        }, setRange: function (range) {
            if (!range || !range.length) {
                delete this.range
            } else {
                this.range = $.map(range, function (d) {
                    return d.valueOf()
                })
            }
            this.fill()
        }, getClassNames: function (date) {
            var cls = [], year = this.viewDate.getUTCFullYear(), month = this.viewDate.getUTCMonth(),
                today = new Date();
            if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)) {
                cls.push("old")
            } else {
                if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)) {
                    cls.push("new")
                }
            }
            if (this.focusDate && date.valueOf() === this.focusDate.valueOf()) {
                cls.push("focused")
            }
            if (this.o.todayHighlight && date.getUTCFullYear() === today.getFullYear() && date.getUTCMonth() === today.getMonth() && date.getUTCDate() === today.getDate()) {
                cls.push("today")
            }
            if (this.dates.contains(date) !== -1) {
                cls.push("active")
            }
            if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate || $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
                cls.push("disabled")
            }
            if (this.range) {
                if (date > this.range[0] && date < this.range[this.range.length - 1]) {
                    cls.push("range")
                }
                if ($.inArray(date.valueOf(), this.range) !== -1) {
                    cls.push("selected")
                }
            }
            return cls
        }, fill: function () {
            var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth(),
                startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                todaytxt = dates[this.o.language].today || dates["en"].today || "",
                cleartxt = dates[this.o.language].clear || dates["en"].clear || "", tooltip;
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(dates[this.o.language].months[month] + " " + year);
            this.picker.find("tfoot th.today").text(todaytxt).toggle(this.o.todayBtn !== false);
            this.picker.find("tfoot th.clear").text(cleartxt).toggle(this.o.clearBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month - 1, 28),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
            var nextMonth = new Date(prevMonth);
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while (prevMonth.valueOf() < nextMonth) {
                if (prevMonth.getUTCDay() === this.o.weekStart) {
                    html.push("<tr>");
                    if (this.o.calendarWeeks) {
                        var ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 86400000),
                            th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 86400000),
                            yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 86400000),
                            calWeek = (th - yth) / 86400000 / 7 + 1;
                        html.push('<td class="cw">' + calWeek + "</td>")
                    }
                }
                clsName = this.getClassNames(prevMonth);
                clsName.push("day");
                if (this.o.beforeShowDay !== $.noop) {
                    var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                    if (before === undefined) {
                        before = {}
                    } else {
                        if (typeof(before) === "boolean") {
                            before = {enabled: before}
                        } else {
                            if (typeof(before) === "string") {
                                before = {classes: before}
                            }
                        }
                    }
                    if (before.enabled === false) {
                        clsName.push("disabled")
                    }
                    if (before.classes) {
                        clsName = clsName.concat(before.classes.split(/\s+/))
                    }
                    if (before.tooltip) {
                        tooltip = before.tooltip
                    }
                }
                clsName = $.unique(clsName);
                html.push('<td class="' + clsName.join(" ") + '"' + (tooltip ? ' title="' + tooltip + '"' : "") + ">" + prevMonth.getUTCDate() + "</td>");
                if (prevMonth.getUTCDay() === this.o.weekEnd) {
                    html.push("</tr>")
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(html.join(""));
            var months = this.picker.find(".datepicker-months").find("th:eq(1)").text(year).end().find("span").removeClass("active");
            $.each(this.dates, function (i, d) {
                if (d.getUTCFullYear() === year) {
                    months.eq(d.getUTCMonth()).addClass("active")
                }
            });
            if (year < startYear || year > endYear) {
                months.addClass("disabled")
            }
            if (year === startYear) {
                months.slice(0, startMonth).addClass("disabled")
            }
            if (year === endYear) {
                months.slice(endMonth + 1).addClass("disabled")
            }
            html = "";
            year = parseInt(year / 10, 10) * 10;
            var yearCont = this.picker.find(".datepicker-years").find("th:eq(1)").text(year + "-" + (year + 9)).end().find("td");
            year -= 1;
            var years = $.map(this.dates, function (d) {
                return d.getUTCFullYear()
            }), classes;
            for (var i = -1; i < 11; i++) {
                classes = ["year"];
                if (i === -1) {
                    classes.push("old")
                } else {
                    if (i === 10) {
                        classes.push("new")
                    }
                }
                if ($.inArray(year, years) !== -1) {
                    classes.push("active")
                }
                if (year < startYear || year > endYear) {
                    classes.push("disabled")
                }
                html += '<span class="' + classes.join(" ") + '">' + year + "</span>";
                year += 1
            }
            yearCont.html(html)
        }, updateNavArrows: function () {
            if (!this._allow_update) {
                return
            }
            var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
                        this.picker.find(".prev").css({visibility: "hidden"})
                    } else {
                        this.picker.find(".prev").css({visibility: "visible"})
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
                        this.picker.find(".next").css({visibility: "hidden"})
                    } else {
                        this.picker.find(".next").css({visibility: "visible"})
                    }
                    break;
                case 1:
                case 2:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
                        this.picker.find(".prev").css({visibility: "hidden"})
                    } else {
                        this.picker.find(".prev").css({visibility: "visible"})
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
                        this.picker.find(".next").css({visibility: "hidden"})
                    } else {
                        this.picker.find(".next").css({visibility: "visible"})
                    }
                    break
            }
        }, click: function (e) {
            e.preventDefault();
            var target = $(e.target).closest("span, td, th"), year, month, day;
            if (target.length === 1) {
                switch (target[0].nodeName.toLowerCase()) {
                    case"th":
                        switch (target[0].className) {
                            case"datepicker-switch":
                                this.showMode(1);
                                break;
                            case"prev":
                            case"next":
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === "prev" ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        if (this.viewMode === 1) {
                                            this._trigger("changeYear", this.viewDate)
                                        }
                                        break
                                }
                                this.fill();
                                break;
                            case"today":
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                                this.showMode(-2);
                                var which = this.o.todayBtn === "linked" ? null : "view";
                                this._setDate(date, which);
                                break;
                            case"clear":
                                var element;
                                if (this.isInput) {
                                    element = this.element
                                } else {
                                    if (this.component) {
                                        element = this.element.find("input")
                                    }
                                }
                                if (element) {
                                    element.val("").change()
                                }
                                this.update();
                                this._trigger("changeDate");
                                if (this.o.autoclose) {
                                    this.hide()
                                }
                                break
                        }
                        break;
                    case"span":
                        if (!target.is(".disabled")) {
                            this.viewDate.setUTCDate(1);
                            if (target.is(".month")) {
                                day = 1;
                                month = target.parent().find("span").index(target);
                                year = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(month);
                                this._trigger("changeMonth", this.viewDate);
                                if (this.o.minViewMode === 1) {
                                    this._setDate(UTCDate(year, month, day))
                                }
                            } else {
                                day = 1;
                                month = 0;
                                year = parseInt(target.text(), 10) || 0;
                                this.viewDate.setUTCFullYear(year);
                                this._trigger("changeYear", this.viewDate);
                                if (this.o.minViewMode === 2) {
                                    this._setDate(UTCDate(year, month, day))
                                }
                            }
                            this.showMode(-1);
                            this.fill()
                        }
                        break;
                    case"td":
                        if (target.is(".day") && !target.is(".disabled")) {
                            day = parseInt(target.text(), 10) || 1;
                            year = this.viewDate.getUTCFullYear();
                            month = this.viewDate.getUTCMonth();
                            if (target.is(".old")) {
                                if (month === 0) {
                                    month = 11;
                                    year -= 1
                                } else {
                                    month -= 1
                                }
                            } else {
                                if (target.is(".new")) {
                                    if (month === 11) {
                                        month = 0;
                                        year += 1
                                    } else {
                                        month += 1
                                    }
                                }
                            }
                            this._setDate(UTCDate(year, month, day))
                        }
                        break
                }
            }
            if (this.picker.is(":visible") && this._focused_from) {
                $(this._focused_from).focus()
            }
            delete this._focused_from
        }, _toggle_multidate: function (date) {
            var ix = this.dates.contains(date);
            if (!date) {
                this.dates.clear()
            } else {
                if (ix !== -1) {
                    this.dates.remove(ix)
                } else {
                    this.dates.push(date)
                }
            }
            if (typeof this.o.multidate === "number") {
                while (this.dates.length > this.o.multidate) {
                    this.dates.remove(0)
                }
            }
        }, _setDate: function (date, which) {
            if (!which || which === "date") {
                this._toggle_multidate(date && new Date(date))
            }
            if (!which || which === "view") {
                this.viewDate = date && new Date(date)
            }
            this.fill();
            this.setValue();
            this._trigger("changeDate");
            var element;
            if (this.isInput) {
                element = this.element
            } else {
                if (this.component) {
                    element = this.element.find("input")
                }
            }
            if (element) {
                element.change()
            }
            if (this.o.autoclose && (!which || which === "date")) {
                this.hide()
            }
        }, moveMonth: function (date, dir) {
            if (!date) {
                return undefined
            }
            if (!dir) {
                return date
            }
            var new_date = new Date(date.valueOf()), day = new_date.getUTCDate(), month = new_date.getUTCMonth(),
                mag = Math.abs(dir), new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag === 1) {
                test = dir === -1 ? function () {
                    return new_date.getUTCMonth() === month
                } : function () {
                    return new_date.getUTCMonth() !== new_month
                };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                if (new_month < 0 || new_month > 11) {
                    new_month = (new_month + 12) % 12
                }
            } else {
                for (var i = 0; i < mag; i++) {
                    new_date = this.moveMonth(new_date, dir)
                }
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function () {
                    return new_month !== new_date.getUTCMonth()
                }
            }
            while (test()) {
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month)
            }
            return new_date
        }, moveYear: function (date, dir) {
            return this.moveMonth(date, dir * 12)
        }, dateWithinRange: function (date) {
            return date >= this.o.startDate && date <= this.o.endDate
        }, keydown: function (e) {
            if (this.picker.is(":not(:visible)")) {
                if (e.keyCode === 27) {
                    this.show()
                }
                return
            }
            var dateChanged = false, dir, newDate, newViewDate, focusDate = this.focusDate || this.viewDate;
            switch (e.keyCode) {
                case 27:
                    if (this.focusDate) {
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.fill()
                    } else {
                        this.hide()
                    }
                    e.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) {
                        break
                    }
                    dir = e.keyCode === 37 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveYear(focusDate, dir);
                        this._trigger("changeYear", this.viewDate)
                    } else {
                        if (e.shiftKey) {
                            newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                            newViewDate = this.moveMonth(focusDate, dir);
                            this._trigger("changeMonth", this.viewDate)
                        } else {
                            newDate = new Date(this.dates.get(-1) || UTCToday());
                            newDate.setUTCDate(newDate.getUTCDate() + dir);
                            newViewDate = new Date(focusDate);
                            newViewDate.setUTCDate(focusDate.getUTCDate() + dir)
                        }
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault()
                    }
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) {
                        break
                    }
                    dir = e.keyCode === 38 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveYear(focusDate, dir);
                        this._trigger("changeYear", this.viewDate)
                    } else {
                        if (e.shiftKey) {
                            newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                            newViewDate = this.moveMonth(focusDate, dir);
                            this._trigger("changeMonth", this.viewDate)
                        } else {
                            newDate = new Date(this.dates.get(-1) || UTCToday());
                            newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
                            newViewDate = new Date(focusDate);
                            newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7)
                        }
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault()
                    }
                    break;
                case 32:
                    break;
                case 13:
                    focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
                    this._toggle_multidate(focusDate);
                    dateChanged = true;
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(":visible")) {
                        e.preventDefault();
                        if (this.o.autoclose) {
                            this.hide()
                        }
                    }
                    break;
                case 9:
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break
            }
            if (dateChanged) {
                if (this.dates.length) {
                    this._trigger("changeDate")
                } else {
                    this._trigger("clearDate")
                }
                var element;
                if (this.isInput) {
                    element = this.element
                } else {
                    if (this.component) {
                        element = this.element.find("input")
                    }
                }
                if (element) {
                    element.change()
                }
            }
        }, showMode: function (dir) {
            if (dir) {
                this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir))
            }
            this.picker.find(">div").hide().filter(".datepicker-" + DPGlobal.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows()
        }
    };
    var DateRangePicker = function (element, options) {
        this.element = $(element);
        this.inputs = $.map(options.inputs, function (i) {
            return i.jquery ? i[0] : i
        });
        delete options.inputs;
        $(this.inputs).datepicker(options).bind("changeDate", $.proxy(this.dateUpdated, this));
        this.pickers = $.map(this.inputs, function (i) {
            return $(i).data("datepicker")
        });
        this.updateDates()
    };
    DateRangePicker.prototype = {
        updateDates: function () {
            this.dates = $.map(this.pickers, function (i) {
                return i.getUTCDate()
            });
            this.updateRanges()
        }, updateRanges: function () {
            var range = $.map(this.dates, function (d) {
                return d.valueOf()
            });
            $.each(this.pickers, function (i, p) {
                p.setRange(range)
            })
        }, dateUpdated: function (e) {
            if (this.updating) {
                return
            }
            this.updating = true;
            var dp = $(e.target).data("datepicker"), new_date = dp.getUTCDate(), i = $.inArray(e.target, this.inputs),
                l = this.inputs.length;
            if (i === -1) {
                return
            }
            $.each(this.pickers, function (i, p) {
                if (!p.getUTCDate()) {
                    p.setUTCDate(new_date)
                }
            });
            if (new_date < this.dates[i]) {
                while (i >= 0 && new_date < this.dates[i]) {
                    this.pickers[i--].setUTCDate(new_date)
                }
            } else {
                if (new_date > this.dates[i]) {
                    while (i < l && new_date > this.dates[i]) {
                        this.pickers[i++].setUTCDate(new_date)
                    }
                }
            }
            this.updateDates();
            delete this.updating
        }, remove: function () {
            $.map(this.pickers, function (p) {
                p.remove()
            });
            delete this.element.data().datepicker
        }
    };

    function opts_from_el(el, prefix) {
        var data = $(el).data(), out = {}, inkey, replace = new RegExp("^" + prefix.toLowerCase() + "([A-Z])");
        prefix = new RegExp("^" + prefix.toLowerCase());

        function re_lower(_, a) {
            return a.toLowerCase()
        }

        for (var key in data) {
            if (prefix.test(key)) {
                inkey = key.replace(replace, re_lower);
                out[inkey] = data[key]
            }
        }
        return out
    }

    function opts_from_locale(lang) {
        var out = {};
        if (!dates[lang]) {
            lang = lang.split("-")[0];
            if (!dates[lang]) {
                return
            }
        }
        var d = dates[lang];
        $.each(locale_opts, function (i, k) {
            if (k in d) {
                out[k] = d[k]
            }
        });
        return out
    }

    var old = $.fn.datepicker;
    $.fn.datepicker = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        var internal_return;
        this.each(function () {
            var $this = $(this), data = $this.data("datepicker"), options = typeof option === "object" && option;
            if (!data) {
                var elopts = opts_from_el(this, "date"), xopts = $.extend({}, defaults, elopts, options),
                    locopts = opts_from_locale(xopts.language), opts = $.extend({}, defaults, locopts, elopts, options);
                if ($this.is(".input-daterange") || opts.inputs) {
                    var ropts = {inputs: opts.inputs || $this.find("input").toArray()};
                    $this.data("datepicker", (data = new DateRangePicker(this, $.extend(opts, ropts))))
                } else {
                    $this.data("datepicker", (data = new Datepicker(this, opts)))
                }
            }
            if (typeof option === "string" && typeof data[option] === "function") {
                internal_return = data[option].apply(data, args);
                if (internal_return !== undefined) {
                    return false
                }
            }
        });
        if (internal_return !== undefined) {
            return internal_return
        } else {
            return this
        }
    };
    var defaults = $.fn.datepicker.defaults = {
        autoclose: false,
        beforeShowDay: $.noop,
        calendarWeeks: false,
        clearBtn: false,
        daysOfWeekDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: "yyyy-mm-dd",
        keyboardNavigation: true,
        language: "en",
        minViewMode: 0,
        multidate: false,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    };
    var locale_opts = $.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    var DPGlobal = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
        isLeapYear: function (year) {
            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
        },
        getDaysInMonth: function (year, month) {
            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function (format) {
            var separators = format.replace(this.validParts, "\0").split("\0"), parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0) {
                throw new Error("Invalid date format.")
            }
            return {separators: separators, parts: parts}
        },
        parseDate: function (date, format, language) {
            if (!date) {
                return undefined
            }
            if (date instanceof Date) {
                return date
            }
            if (typeof format === "string") {
                format = DPGlobal.parseFormat(format)
            }
            var part_re = /([\-+]\d+)([dmwy])/, parts = date.match(/([\-+]\d+)([dmwy])/g), part, dir, i;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
                date = new Date();
                for (i = 0; i < parts.length; i++) {
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch (part[2]) {
                        case"d":
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case"m":
                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                            break;
                        case"w":
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case"y":
                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                            break
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)
            }
            parts = date && date.match(this.nonpunctuation) || [];
            date = new Date();
            var parsed = {}, setters_order = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], setters_map = {
                yyyy: function (d, v) {
                    return d.setUTCFullYear(v)
                }, yy: function (d, v) {
                    return d.setUTCFullYear(2000 + v)
                }, m: function (d, v) {
                    if (isNaN(d)) {
                        return d
                    }
                    v -= 1;
                    while (v < 0) {
                        v += 12
                    }
                    v %= 12;
                    d.setUTCMonth(v);
                    while (d.getUTCMonth() !== v) {
                        d.setUTCDate(d.getUTCDate() - 1)
                    }
                    return d
                }, d: function (d, v) {
                    return d.setUTCDate(v)
                }
            }, val, filtered;
            setters_map["M"] = setters_map["MM"] = setters_map["mm"] = setters_map["m"];
            setters_map["dd"] = setters_map["d"];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            var fparts = format.parts.slice();
            if (parts.length !== fparts.length) {
                fparts = $(fparts).filter(function (i, p) {
                    return $.inArray(p, setters_order) !== -1
                }).toArray()
            }

            function match_part() {
                var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
                return m === p
            }

            if (parts.length === fparts.length) {
                var cnt;
                for (i = 0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch (part) {
                            case"MM":
                                filtered = $(dates[language].months).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case"M":
                                filtered = $(dates[language].monthsShort).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break
                        }
                    }
                    parsed[part] = val
                }
                var _date, s;
                for (i = 0; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])) {
                        _date = new Date(date);
                        setters_map[s](_date, parsed[s]);
                        if (!isNaN(_date)) {
                            date = _date
                        }
                    }
                }
            }
            return date
        },
        formatDate: function (date, format, language) {
            if (!date) {
                return ""
            }
            if (typeof format === "string") {
                format = DPGlobal.parseFormat(format)
            }
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? "0" : "") + val.d;
            val.mm = (val.m < 10 ? "0" : "") + val.m;
            date = [];
            var seps = $.extend([], format.separators);
            for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
                if (seps.length) {
                    date.push(seps.shift())
                }
                date.push(val[format.parts[i]])
            }
            return date.join("")
        },
        headTemplate: "<thead>" + "<tr>" + '<th class="prev">&lt;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&gt;</th>' + "</tr>" + "</thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: "<tfoot>" + "<tr>" + '<th colspan="7" class="today"></th>' + "</tr>" + "<tr>" + '<th colspan="7" class="clear"></th>' + "</tr>" + "</tfoot>"
    };
    DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + "<tbody></tbody>" + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + "</div>";
    $.fn.datepicker.DPGlobal = DPGlobal;
    $.fn.datepicker.noConflict = function () {
        $.fn.datepicker = old;
        return this
    };
    $(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
        var $this = $(this);
        if ($this.data("datepicker")) {
            return
        }
        e.preventDefault();
        $this.datepicker("show")
    });
    $(function () {
        $('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery));
(function ($) {
    $.fn.datepicker.dates["zh-CN"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今日",
        format: "yyyy年mm月dd日",
        weekStart: 1
    }
}(jQuery));
// lodash
;(function () {
    function n(n, t) {
        if (n !== t) {
            var r = null === n, e = n === w, u = n === n, o = null === t, i = t === w, f = t === t;
            if (n > t && !o || !u || r && !i && f || e && f) return 1;
            if (n < t && !r || !f || o && !e && u || i && u) return -1
        }
        return 0
    }

    function t(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;) if (t(n[u], u, n)) return u;
        return -1
    }

    function r(n, t, r) {
        if (t !== t) return p(n, r);
        r -= 1;
        for (var e = n.length; ++r < e;) if (n[r] === t) return r;
        return -1
    }

    function e(n) {
        return typeof n == "function" || false
    }

    function u(n) {
        return null == n ? "" : n + ""
    }

    function o(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r));) ;
        return r
    }

    function i(n, t) {
        for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r));) ;
        return r
    }

    function f(t, r) {
        return n(t.a, r.a) || t.b - r.b
    }

    function a(n) {
        return Nn[n]
    }

    function c(n) {
        return Tn[n]
    }

    function l(n, t, r) {
        return t ? n = Bn[n] : r && (n = Dn[n]), "\\" + n
    }

    function s(n) {
        return "\\" + Dn[n]
    }

    function p(n, t, r) {
        var e = n.length;
        for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];
            if (u !== u) return t
        }
        return -1
    }

    function h(n) {
        return !!n && typeof n == "object"
    }

    function _(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n);
    }

    function v(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) n[r] === t && (n[r] = z, o[++u] = r);
        return o
    }

    function g(n) {
        for (var t = -1, r = n.length; ++t < r && _(n.charCodeAt(t));) ;
        return t
    }

    function y(n) {
        for (var t = n.length; t-- && _(n.charCodeAt(t));) ;
        return t
    }

    function d(n) {
        return Ln[n]
    }

    function m(_) {
        function Nn(n) {
            if (h(n) && !(Oo(n) || n instanceof zn)) {
                if (n instanceof Ln) return n;
                if (nu.call(n, "__chain__") && nu.call(n, "__wrapped__")) return Mr(n)
            }
            return new Ln(n)
        }

        function Tn() {
        }

        function Ln(n, t, r) {
            this.__wrapped__ = n, this.__actions__ = r || [],
                this.__chain__ = !!t
        }

        function zn(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Ru, this.__views__ = []
        }

        function Bn() {
            this.__data__ = {}
        }

        function Dn(n) {
            var t = n ? n.length : 0;
            for (this.data = {hash: gu(null), set: new lu}; t--;) this.push(n[t])
        }

        function Mn(n, t) {
            var r = n.data;
            return (typeof t == "string" || ge(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1
        }

        function qn(n, t) {
            var r = -1, e = n.length;
            for (t || (t = Be(e)); ++r < e;) t[r] = n[r];
            return t
        }

        function Pn(n, t) {
            for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n);) ;
            return n
        }

        function Kn(n, t) {
            for (var r = -1, e = n.length; ++r < e;) if (!t(n[r], r, n)) return false;
            return true
        }

        function Vn(n, t) {
            for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) {
                var i = n[r];
                t(i, r, n) && (o[++u] = i)
            }
            return o
        }

        function Gn(n, t) {
            for (var r = -1, e = n.length, u = Be(e); ++r < e;) u[r] = t(n[r], r, n);
            return u
        }

        function Jn(n, t) {
            for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
            return n
        }

        function Xn(n, t, r, e) {
            var u = -1, o = n.length;
            for (e && o && (r = n[++u]); ++u < o;) r = t(r, n[u], u, n);
            return r
        }

        function Hn(n, t) {
            for (var r = -1, e = n.length; ++r < e;) if (t(n[r], r, n)) return true;
            return false
        }

        function Qn(n, t, r, e) {
            return n !== w && nu.call(e, r) ? n : t
        }

        function nt(n, t, r) {
            for (var e = -1, u = zo(t), o = u.length; ++e < o;) {
                var i = u[e], f = n[i], a = r(f, t[i], i, n, t);
                (a === a ? a === f : f !== f) && (f !== w || i in n) || (n[i] = a)
            }
            return n
        }

        function tt(n, t) {
            return null == t ? n : et(t, zo(t), n)
        }

        function rt(n, t) {
            for (var r = -1, e = null == n, u = !e && Er(n), o = u ? n.length : 0, i = t.length, f = Be(i); ++r < i;) {
                var a = t[r];
                f[r] = u ? Cr(a, o) ? n[a] : w : e ? w : n[a]
            }
            return f
        }

        function et(n, t, r) {
            r || (r = {});
            for (var e = -1, u = t.length; ++e < u;) {
                var o = t[e];
                r[o] = n[o]
            }
            return r
        }

        function ut(n, t, r) {
            var e = typeof n;
            return "function" == e ? t === w ? n : Bt(n, t, r) : null == n ? Fe : "object" == e ? bt(n) : t === w ? ze(n) : xt(n, t)
        }

        function ot(n, t, r, e, u, o, i) {
            var f;
            if (r && (f = u ? r(n, e, u) : r(n)), f !== w) return f;
            if (!ge(n)) return n;
            if (e = Oo(n)) {
                if (f = kr(n), !t) return qn(n, f)
            } else {
                var a = ru.call(n), c = a == K;
                if (a != Z && a != B && (!c || u)) return Fn[a] ? Rr(n, a, t) : u ? n : {};
                if (f = Ir(c ? {} : n), !t) return tt(f, n)
            }
            for (o || (o = []), i || (i = []), u = o.length; u--;) if (o[u] == n) return i[u];
            return o.push(n), i.push(f), (e ? Pn : _t)(n, function (e, u) {
                f[u] = ot(e, t, r, u, n, o, i)
            }), f
        }

        function it(n, t, r) {
            if (typeof n != "function") throw new Ge(L);
            return su(function () {
                n.apply(w, r)
            }, t)
        }

        function ft(n, t) {
            var e = n ? n.length : 0, u = [];
            if (!e) return u;
            var o = -1, i = xr(), f = i === r, a = f && t.length >= F && gu && lu ? new Dn(t) : null, c = t.length;
            a && (i = Mn, f = false, t = a);
            n:for (; ++o < e;) if (a = n[o], f && a === a) {
                for (var l = c; l--;) if (t[l] === a) continue n;
                u.push(a)
            } else 0 > i(t, a, 0) && u.push(a);
            return u
        }

        function at(n, t) {
            var r = true;
            return Su(n, function (n, e, u) {
                return r = !!t(n, e, u)
            }), r
        }

        function ct(n, t, r, e) {
            var u = e, o = u;
            return Su(n, function (n, i, f) {
                i = +t(n, i, f), (r(i, u) || i === e && i === o) && (u = i,
                    o = n)
            }), o
        }

        function lt(n, t) {
            var r = [];
            return Su(n, function (n, e, u) {
                t(n, e, u) && r.push(n)
            }), r
        }

        function st(n, t, r, e) {
            var u;
            return r(n, function (n, r, o) {
                return t(n, r, o) ? (u = e ? r : n, false) : void 0
            }), u
        }

        function pt(n, t, r, e) {
            e || (e = []);
            for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u];
                h(i) && Er(i) && (r || Oo(i) || pe(i)) ? t ? pt(i, t, r, e) : Jn(e, i) : r || (e[e.length] = i)
            }
            return e
        }

        function ht(n, t) {
            Nu(n, t, Re)
        }

        function _t(n, t) {
            return Nu(n, t, zo)
        }

        function vt(n, t) {
            return Tu(n, t, zo)
        }

        function gt(n, t) {
            for (var r = -1, e = t.length, u = -1, o = []; ++r < e;) {
                var i = t[r];
                ve(n[i]) && (o[++u] = i)
            }
            return o
        }

        function yt(n, t, r) {
            if (null != n) {
                r !== w && r in Br(n) && (t = [r]), r = 0;
                for (var e = t.length; null != n && r < e;) n = n[t[r++]];
                return r && r == e ? n : w
            }
        }

        function dt(n, t, r, e, u, o) {
            if (n === t) n = true; else if (null == n || null == t || !ge(n) && !h(t)) n = n !== n && t !== t; else n:{
                var i = dt, f = Oo(n), a = Oo(t), c = D, l = D;
                f || (c = ru.call(n), c == B ? c = Z : c != Z && (f = xe(n))), a || (l = ru.call(t), l == B ? l = Z : l != Z && xe(t));
                var s = c == Z, a = l == Z, l = c == l;
                if (!l || f || s) {
                    if (!e && (c = s && nu.call(n, "__wrapped__"), a = a && nu.call(t, "__wrapped__"), c || a)) {
                        n = i(c ? n.value() : n, a ? t.value() : t, r, e, u, o);
                        break n
                    }
                    if (l) {
                        for (u || (u = []), o || (o = []), c = u.length; c--;) if (u[c] == n) {
                            n = o[c] == t;
                            break n
                        }
                        u.push(n), o.push(t), n = (f ? yr : mr)(n, t, i, r, e, u, o), u.pop(), o.pop()
                    } else n = false
                } else n = dr(n, t, c)
            }
            return n
        }

        function mt(n, t, r) {
            var e = t.length, u = e, o = !r;
            if (null == n) return !u;
            for (n = Br(n); e--;) {
                var i = t[e];
                if (o && i[2] ? i[1] !== n[i[0]] : !(i[0] in n)) return false
            }
            for (; ++e < u;) {
                var i = t[e], f = i[0], a = n[f], c = i[1];
                if (o && i[2]) {
                    if (a === w && !(f in n)) return false
                } else if (i = r ? r(a, c, f) : w, i === w ? !dt(c, a, r, true) : !i) return false
            }
            return true
        }

        function wt(n, t) {
            var r = -1, e = Er(n) ? Be(n.length) : [];
            return Su(n, function (n, u, o) {
                e[++r] = t(n, u, o)
            }), e
        }

        function bt(n) {
            var t = Ar(n);
            if (1 == t.length && t[0][2]) {
                var r = t[0][0], e = t[0][1];
                return function (n) {
                    return null == n ? false : n[r] === e && (e !== w || r in Br(n))
                }
            }
            return function (n) {
                return mt(n, t)
            }
        }

        function xt(n, t) {
            var r = Oo(n), e = Wr(n) && t === t && !ge(t), u = n + "";
            return n = Dr(n), function (o) {
                if (null == o) return false;
                var i = u;
                if (o = Br(o), !(!r && e || i in o)) {
                    if (o = 1 == n.length ? o : yt(o, Et(n, 0, -1)), null == o) return false;
                    i = Zr(n), o = Br(o)
                }
                return o[i] === t ? t !== w || i in o : dt(t, o[i], w, true)
            }
        }

        function At(n, t, r, e, u) {
            if (!ge(n)) return n;
            var o = Er(t) && (Oo(t) || xe(t)), i = o ? w : zo(t);
            return Pn(i || t, function (f, a) {
                if (i && (a = f, f = t[a]), h(f)) {
                    e || (e = []), u || (u = []);
                    n:{
                        for (var c = a, l = e, s = u, p = l.length, _ = t[c]; p--;) if (l[p] == _) {
                            n[c] = s[p];
                            break n
                        }
                        var p = n[c], v = r ? r(p, _, c, n, t) : w, g = v === w;
                        g && (v = _, Er(_) && (Oo(_) || xe(_)) ? v = Oo(p) ? p : Er(p) ? qn(p) : [] : me(_) || pe(_) ? v = pe(p) ? ke(p) : me(p) ? p : {} : g = false), l.push(_), s.push(v), g ? n[c] = At(v, _, r, l, s) : (v === v ? v !== p : p === p) && (n[c] = v)
                    }
                } else c = n[a], l = r ? r(c, f, a, n, t) : w, (s = l === w) && (l = f), l === w && (!o || a in n) || !s && (l === l ? l === c : c !== c) || (n[a] = l);
            }), n
        }

        function jt(n) {
            return function (t) {
                return null == t ? w : t[n]
            }
        }

        function kt(n) {
            var t = n + "";
            return n = Dr(n), function (r) {
                return yt(r, n, t)
            }
        }

        function It(n, t) {
            for (var r = n ? t.length : 0; r--;) {
                var e = t[r];
                if (e != u && Cr(e)) {
                    var u = e;
                    pu.call(n, e, 1)
                }
            }
        }

        function Rt(n, t) {
            return n + yu(ku() * (t - n + 1))
        }

        function Ot(n, t, r, e, u) {
            return u(n, function (n, u, o) {
                r = e ? (e = false, n) : t(r, n, u, o)
            }), r
        }

        function Et(n, t, r) {
            var e = -1, u = n.length;
            for (t = null == t ? 0 : +t || 0, 0 > t && (t = -t > u ? 0 : u + t), r = r === w || r > u ? u : +r || 0, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Be(u); ++e < u;) r[e] = n[e + t];
            return r
        }

        function Ct(n, t) {
            var r;
            return Su(n, function (n, e, u) {
                return r = t(n, e, u), !r
            }), !!r
        }

        function Ut(n, t) {
            var r = n.length;
            for (n.sort(t); r--;) n[r] = n[r].c;
            return n
        }

        function Wt(t, r, e) {
            var u = wr(), o = -1;
            return r = Gn(r, function (n) {
                return u(n)
            }), t = wt(t, function (n) {
                return {
                    a: Gn(r, function (t) {
                        return t(n)
                    }), b: ++o, c: n
                }
            }), Ut(t, function (t, r) {
                var u;
                n:{
                    for (var o = -1, i = t.a, f = r.a, a = i.length, c = e.length; ++o < a;) if (u = n(i[o], f[o])) {
                        if (o >= c) break n;
                        o = e[o], u *= "asc" === o || true === o ? 1 : -1;
                        break n
                    }
                    u = t.b - r.b
                }
                return u
            })
        }

        function $t(n, t) {
            var r = 0;
            return Su(n, function (n, e, u) {
                r += +t(n, e, u) || 0
            }), r
        }

        function St(n, t) {
            var e = -1, u = xr(), o = n.length, i = u === r, f = i && o >= F, a = f && gu && lu ? new Dn(void 0) : null,
                c = [];
            a ? (u = Mn, i = false) : (f = false, a = t ? [] : c);
            n:for (; ++e < o;) {
                var l = n[e], s = t ? t(l, e, n) : l;
                if (i && l === l) {
                    for (var p = a.length; p--;) if (a[p] === s) continue n;
                    t && a.push(s), c.push(l)
                } else 0 > u(a, s, 0) && ((t || f) && a.push(s), c.push(l))
            }
            return c
        }

        function Ft(n, t) {
            for (var r = -1, e = t.length, u = Be(e); ++r < e;) u[r] = n[t[r]];
            return u
        }

        function Nt(n, t, r, e) {
            for (var u = n.length, o = e ? u : -1; (e ? o-- : ++o < u) && t(n[o], o, n);) ;
            return r ? Et(n, e ? 0 : o, e ? o + 1 : u) : Et(n, e ? o + 1 : 0, e ? u : o)
        }

        function Tt(n, t) {
            var r = n;
            r instanceof zn && (r = r.value());
            for (var e = -1, u = t.length; ++e < u;) var o = t[e], r = o.func.apply(o.thisArg, Jn([r], o.args));
            return r
        }

        function Lt(n, t, r) {
            var e = 0, u = n ? n.length : e;
            if (typeof t == "number" && t === t && u <= Eu) {
                for (; e < u;) {
                    var o = e + u >>> 1, i = n[o];
                    (r ? i <= t : i < t) && null !== i ? e = o + 1 : u = o
                }
                return u
            }
            return zt(n, t, Fe, r)
        }

        function zt(n, t, r, e) {
            t = r(t);
            for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, a = t === w; u < o;) {
                var c = yu((u + o) / 2), l = r(n[c]), s = l !== w, p = l === l;
                (i ? p || e : f ? p && s && (e || null != l) : a ? p && (e || s) : null == l ? 0 : e ? l <= t : l < t) ? u = c + 1 : o = c
            }
            return xu(o, Ou)
        }

        function Bt(n, t, r) {
            if (typeof n != "function") return Fe;
            if (t === w) return n;
            switch (r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 3:
                    return function (r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function (r, e, u, o) {
                        return n.call(t, r, e, u, o)
                    };
                case 5:
                    return function (r, e, u, o, i) {
                        return n.call(t, r, e, u, o, i)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }

        function Dt(n) {
            var t = new ou(n.byteLength);
            return new hu(t).set(new hu(n)),
                t
        }

        function Mt(n, t, r) {
            for (var e = r.length, u = -1, o = bu(n.length - e, 0), i = -1, f = t.length, a = Be(f + o); ++i < f;) a[i] = t[i];
            for (; ++u < e;) a[r[u]] = n[u];
            for (; o--;) a[i++] = n[u++];
            return a
        }

        function qt(n, t, r) {
            for (var e = -1, u = r.length, o = -1, i = bu(n.length - u, 0), f = -1, a = t.length, c = Be(i + a); ++o < i;) c[o] = n[o];
            for (i = o; ++f < a;) c[i + f] = t[f];
            for (; ++e < u;) c[i + r[e]] = n[o++];
            return c
        }

        function Pt(n, t) {
            return function (r, e, u) {
                var o = t ? t() : {};
                if (e = wr(e, u, 3), Oo(r)) {
                    u = -1;
                    for (var i = r.length; ++u < i;) {
                        var f = r[u];
                        n(o, f, e(f, u, r), r)
                    }
                } else Su(r, function (t, r, u) {
                    n(o, t, e(t, r, u), u)
                });
                return o
            }
        }

        function Kt(n) {
            return le(function (t, r) {
                var e = -1, u = null == t ? 0 : r.length, o = 2 < u ? r[u - 2] : w, i = 2 < u ? r[2] : w,
                    f = 1 < u ? r[u - 1] : w;
                for (typeof o == "function" ? (o = Bt(o, f, 5), u -= 2) : (o = typeof f == "function" ? f : w, u -= o ? 1 : 0), i && Ur(r[0], r[1], i) && (o = 3 > u ? w : o, u = 1); ++e < u;) (i = r[e]) && n(t, i, o);
                return t
            })
        }

        function Vt(n, t) {
            return function (r, e) {
                var u = r ? Bu(r) : 0;
                if (!Sr(u)) return n(r, e);
                for (var o = t ? u : -1, i = Br(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i);) ;
                return r
            }
        }

        function Zt(n) {
            return function (t, r, e) {
                var u = Br(t);
                e = e(t);
                for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;) {
                    var f = e[i];
                    if (false === r(u[f], f, u)) break
                }
                return t
            }
        }

        function Yt(n, t) {
            function r() {
                return (this && this !== Zn && this instanceof r ? e : n).apply(t, arguments)
            }

            var e = Jt(n);
            return r
        }

        function Gt(n) {
            return function (t) {
                var r = -1;
                t = $e(Ce(t));
                for (var e = t.length, u = ""; ++r < e;) u = n(u, t[r], r);
                return u
            }
        }

        function Jt(n) {
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new n;
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = $u(n.prototype), t = n.apply(r, t);
                return ge(t) ? t : r
            }
        }

        function Xt(n) {
            function t(r, e, u) {
                return u && Ur(r, e, u) && (e = w), r = gr(r, n, w, w, w, w, w, e), r.placeholder = t.placeholder, r
            }

            return t
        }

        function Ht(n, t) {
            return le(function (r) {
                var e = r[0];
                return null == e ? e : (r.push(t), n.apply(w, r))
            })
        }

        function Qt(n, t) {
            return function (r, e, u) {
                if (u && Ur(r, e, u) && (e = w), e = wr(e, u, 3), 1 == e.length) {
                    u = r = Oo(r) ? r : zr(r);
                    for (var o = e, i = -1, f = u.length, a = t, c = a; ++i < f;) {
                        var l = u[i], s = +o(l);
                        n(s, a) && (a = s, c = l)
                    }
                    if (u = c, !r.length || u !== t) return u
                }
                return ct(r, e, n, t)
            }
        }

        function nr(n, r) {
            return function (e, u, o) {
                return u = wr(u, o, 3), Oo(e) ? (u = t(e, u, r), -1 < u ? e[u] : w) : st(e, u, n)
            }
        }

        function tr(n) {
            return function (r, e, u) {
                return r && r.length ? (e = wr(e, u, 3), t(r, e, n)) : -1
            }
        }

        function rr(n) {
            return function (t, r, e) {
                return r = wr(r, e, 3), st(t, r, n, true)
            }
        }

        function er(n) {
            return function () {
                for (var t, r = arguments.length, e = n ? r : -1, u = 0, o = Be(r); n ? e-- : ++e < r;) {
                    var i = o[u++] = arguments[e];
                    if (typeof i != "function") throw new Ge(L);
                    !t && Ln.prototype.thru && "wrapper" == br(i) && (t = new Ln([], true))
                }
                for (e = t ? -1 : r; ++e < r;) {
                    var i = o[e], u = br(i), f = "wrapper" == u ? zu(i) : w;
                    t = f && $r(f[0]) && f[1] == (E | k | R | C) && !f[4].length && 1 == f[9] ? t[br(f[0])].apply(t, f[3]) : 1 == i.length && $r(i) ? t[u]() : t.thru(i)
                }
                return function () {
                    var n = arguments, e = n[0];
                    if (t && 1 == n.length && Oo(e) && e.length >= F) return t.plant(e).value();
                    for (var u = 0, n = r ? o[u].apply(this, n) : e; ++u < r;) n = o[u].call(this, n);
                    return n
                }
            }
        }

        function ur(n, t) {
            return function (r, e, u) {
                return typeof e == "function" && u === w && Oo(r) ? n(r, e) : t(r, Bt(e, u, 3))
            }
        }

        function or(n) {
            return function (t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Bt(r, e, 3)), n(t, r, Re)
            }
        }

        function ir(n) {
            return function (t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Bt(r, e, 3)), n(t, r)
            }
        }

        function fr(n) {
            return function (t, r, e) {
                var u = {};
                return r = wr(r, e, 3), _t(t, function (t, e, o) {
                    o = r(t, e, o), e = n ? o : e, t = n ? t : o, u[e] = t
                }), u
            }
        }

        function ar(n) {
            return function (t, r, e) {
                return t = u(t), (n ? t : "") + pr(t, r, e) + (n ? "" : t)
            }
        }

        function cr(n) {
            var t = le(function (r, e) {
                var u = v(e, t.placeholder);
                return gr(r, n, w, e, u)
            });
            return t
        }

        function lr(n, t) {
            return function (r, e, u, o) {
                var i = 3 > arguments.length;
                return typeof e == "function" && o === w && Oo(r) ? n(r, e, u, i) : Ot(r, wr(e, o, 4), u, i, t)
            }
        }

        function sr(n, t, r, e, u, o, i, f, a, c) {
            function l() {
                for (var m = arguments.length, b = m, j = Be(m); b--;) j[b] = arguments[b];
                if (e && (j = Mt(j, e, u)), o && (j = qt(j, o, i)), _ || y) {
                    var b = l.placeholder, k = v(j, b), m = m - k.length;
                    if (m < c) {
                        var I = f ? qn(f) : w, m = bu(c - m, 0), E = _ ? k : w, k = _ ? w : k, C = _ ? j : w,
                            j = _ ? w : j;
                        return t |= _ ? R : O, t &= ~(_ ? O : R),
                        g || (t &= ~(x | A)), j = [n, t, r, C, E, j, k, I, a, m], I = sr.apply(w, j), $r(n) && Du(I, j), I.placeholder = b, I
                    }
                }
                if (b = p ? r : this, I = h ? b[n] : n, f) for (m = j.length, E = xu(f.length, m), k = qn(j); E--;) C = f[E], j[E] = Cr(C, m) ? k[C] : w;
                return s && a < j.length && (j.length = a), this && this !== Zn && this instanceof l && (I = d || Jt(n)), I.apply(b, j)
            }

            var s = t & E, p = t & x, h = t & A, _ = t & k, g = t & j, y = t & I, d = h ? w : Jt(n);
            return l
        }

        function pr(n, t, r) {
            return n = n.length, t = +t, n < t && mu(t) ? (t -= n, r = null == r ? " " : r + "", Ue(r, vu(t / r.length)).slice(0, t)) : ""
        }

        function hr(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, a = -1, c = e.length, l = Be(c + f); ++a < c;) l[a] = e[a];
                for (; f--;) l[a++] = arguments[++t];
                return (this && this !== Zn && this instanceof u ? i : n).apply(o ? r : this, l)
            }

            var o = t & x, i = Jt(n);
            return u
        }

        function _r(n) {
            var t = Pe[n];
            return function (n, r) {
                return (r = r === w ? 0 : +r || 0) ? (r = au(10, r), t(n * r) / r) : t(n)
            }
        }

        function vr(n) {
            return function (t, r, e, u) {
                var o = wr(e);
                return null == e && o === ut ? Lt(t, r, n) : zt(t, r, o(e, u, 1), n)
            }
        }

        function gr(n, t, r, e, u, o, i, f) {
            var a = t & A;
            if (!a && typeof n != "function") throw new Ge(L);
            var c = e ? e.length : 0;
            if (c || (t &= ~(R | O), e = u = w), c -= u ? u.length : 0, t & O) {
                var l = e, s = u;
                e = u = w
            }
            var p = a ? w : zu(n);
            return r = [n, t, r, e, u, l, s, o, i, f], p && (e = r[1], t = p[1], f = e | t, u = t == E && e == k || t == E && e == C && r[7].length <= p[8] || t == (E | C) && e == k, (f < E || u) && (t & x && (r[2] = p[2], f |= e & x ? 0 : j), (e = p[3]) && (u = r[3], r[3] = u ? Mt(u, e, p[4]) : qn(e), r[4] = u ? v(r[3], z) : qn(p[4])), (e = p[5]) && (u = r[5], r[5] = u ? qt(u, e, p[6]) : qn(e), r[6] = u ? v(r[5], z) : qn(p[6])), (e = p[7]) && (r[7] = qn(e)), t & E && (r[8] = null == r[8] ? p[8] : xu(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = f), t = r[1], f = r[9]), r[9] = null == f ? a ? 0 : n.length : bu(f - c, 0) || 0, (p ? Lu : Du)(t == x ? Yt(r[0], r[2]) : t != R && t != (x | R) || r[4].length ? sr.apply(w, r) : hr.apply(w, r), r);
        }

        function yr(n, t, r, e, u, o, i) {
            var f = -1, a = n.length, c = t.length;
            if (a != c && (!u || c <= a)) return false;
            for (; ++f < a;) {
                var l = n[f], c = t[f], s = e ? e(u ? c : l, u ? l : c, f) : w;
                if (s !== w) {
                    if (s) continue;
                    return false
                }
                if (u) {
                    if (!Hn(t, function (n) {
                            return l === n || r(l, n, e, u, o, i)
                        })) return false
                } else if (l !== c && !r(l, c, e, u, o, i)) return false
            }
            return true
        }

        function dr(n, t, r) {
            switch (r) {
                case M:
                case q:
                    return +n == +t;
                case P:
                    return n.name == t.name && n.message == t.message;
                case V:
                    return n != +n ? t != +t : n == +t;
                case Y:
                case G:
                    return n == t + ""
            }
            return false
        }

        function mr(n, t, r, e, u, o, i) {
            var f = zo(n), a = f.length, c = zo(t).length;
            if (a != c && !u) return false;
            for (c = a; c--;) {
                var l = f[c];
                if (!(u ? l in t : nu.call(t, l))) return false
            }
            for (var s = u; ++c < a;) {
                var l = f[c], p = n[l], h = t[l], _ = e ? e(u ? h : p, u ? p : h, l) : w;
                if (_ === w ? !r(p, h, e, u, o, i) : !_) return false;
                s || (s = "constructor" == l)
            }
            return s || (r = n.constructor, e = t.constructor, !(r != e && "constructor" in n && "constructor" in t) || typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) ? true : false
        }

        function wr(n, t, r) {
            var e = Nn.callback || Se, e = e === Se ? ut : e;
            return r ? e(n, t, r) : e
        }

        function br(n) {
            for (var t = n.name + "", r = Wu[t], e = r ? r.length : 0; e--;) {
                var u = r[e], o = u.func;
                if (null == o || o == n) return u.name
            }
            return t
        }

        function xr(n, t, e) {
            var u = Nn.indexOf || Vr, u = u === Vr ? r : u;
            return n ? u(n, t, e) : u
        }

        function Ar(n) {
            n = Oe(n);
            for (var t = n.length; t--;) {
                var r = n[t][1];
                n[t][2] = r === r && !ge(r)
            }
            return n
        }

        function jr(n, t) {
            var r = null == n ? w : n[t];
            return ye(r) ? r : w
        }

        function kr(n) {
            var t = n.length, r = new n.constructor(t);
            return t && "string" == typeof n[0] && nu.call(n, "index") && (r.index = n.index, r.input = n.input), r
        }

        function Ir(n) {
            return n = n.constructor, typeof n == "function" && n instanceof n || (n = Ve),
                new n
        }

        function Rr(n, t, r) {
            var e = n.constructor;
            switch (t) {
                case J:
                    return Dt(n);
                case M:
                case q:
                    return new e(+n);
                case X:
                case H:
                case Q:
                case nn:
                case tn:
                case rn:
                case en:
                case un:
                case on:
                    return t = n.buffer, new e(r ? Dt(t) : t, n.byteOffset, n.length);
                case V:
                case G:
                    return new e(n);
                case Y:
                    var u = new e(n.source, kn.exec(n));
                    u.lastIndex = n.lastIndex
            }
            return u
        }

        function Or(n, t, r) {
            return null == n || Wr(t, n) || (t = Dr(t), n = 1 == t.length ? n : yt(n, Et(t, 0, -1)), t = Zr(t)), t = null == n ? n : n[t], null == t ? w : t.apply(n, r)
        }

        function Er(n) {
            return null != n && Sr(Bu(n));
        }

        function Cr(n, t) {
            return n = typeof n == "number" || On.test(n) ? +n : -1, t = null == t ? Cu : t, -1 < n && 0 == n % 1 && n < t
        }

        function Ur(n, t, r) {
            if (!ge(r)) return false;
            var e = typeof t;
            return ("number" == e ? Er(r) && Cr(t, r.length) : "string" == e && t in r) ? (t = r[t], n === n ? n === t : t !== t) : false
        }

        function Wr(n, t) {
            var r = typeof n;
            return "string" == r && dn.test(n) || "number" == r ? true : Oo(n) ? false : !yn.test(n) || null != t && n in Br(t)
        }

        function $r(n) {
            var t = br(n), r = Nn[t];
            return typeof r == "function" && t in zn.prototype ? n === r ? true : (t = zu(r), !!t && n === t[0]) : false
        }

        function Sr(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= Cu;
        }

        function Fr(n, t) {
            return n === w ? t : Eo(n, t, Fr)
        }

        function Nr(n, t) {
            n = Br(n);
            for (var r = -1, e = t.length, u = {}; ++r < e;) {
                var o = t[r];
                o in n && (u[o] = n[o])
            }
            return u
        }

        function Tr(n, t) {
            var r = {};
            return ht(n, function (n, e, u) {
                t(n, e, u) && (r[e] = n)
            }), r
        }

        function Lr(n) {
            for (var t = Re(n), r = t.length, e = r && n.length, u = !!e && Sr(e) && (Oo(n) || pe(n)), o = -1, i = []; ++o < r;) {
                var f = t[o];
                (u && Cr(f, e) || nu.call(n, f)) && i.push(f)
            }
            return i
        }

        function zr(n) {
            return null == n ? [] : Er(n) ? ge(n) ? n : Ve(n) : Ee(n)
        }

        function Br(n) {
            return ge(n) ? n : Ve(n)
        }

        function Dr(n) {
            if (Oo(n)) return n;
            var t = [];
            return u(n).replace(mn, function (n, r, e, u) {
                t.push(e ? u.replace(An, "$1") : r || n)
            }), t
        }

        function Mr(n) {
            return n instanceof zn ? n.clone() : new Ln(n.__wrapped__, n.__chain__, qn(n.__actions__))
        }

        function qr(n, t, r) {
            return n && n.length ? ((r ? Ur(n, t, r) : null == t) && (t = 1), Et(n, 0 > t ? 0 : t)) : []
        }

        function Pr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? Ur(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), Et(n, 0, 0 > t ? 0 : t)) : []
        }

        function Kr(n) {
            return n ? n[0] : w
        }

        function Vr(n, t, e) {
            var u = n ? n.length : 0;
            if (!u) return -1;
            if (typeof e == "number") e = 0 > e ? bu(u + e, 0) : e; else if (e) return e = Lt(n, t),
                e < u && (t === t ? t === n[e] : n[e] !== n[e]) ? e : -1;
            return r(n, t, e || 0)
        }

        function Zr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : w
        }

        function Yr(n) {
            return qr(n, 1)
        }

        function Gr(n, t, e, u) {
            if (!n || !n.length) return [];
            null != t && typeof t != "boolean" && (u = e, e = Ur(n, t, u) ? w : t, t = false);
            var o = wr();
            if ((null != e || o !== ut) && (e = o(e, u, 3)), t && xr() === r) {
                t = e;
                var i;
                e = -1, u = n.length;
                for (var o = -1, f = []; ++e < u;) {
                    var a = n[e], c = t ? t(a, e, n) : a;
                    e && i === c || (i = c, f[++o] = a)
                }
                n = f
            } else n = St(n, e);
            return n
        }

        function Jr(n) {
            if (!n || !n.length) return [];
            var t = -1, r = 0;
            n = Vn(n, function (n) {
                return Er(n) ? (r = bu(n.length, r), true) : void 0
            });
            for (var e = Be(r); ++t < r;) e[t] = Gn(n, jt(t));
            return e
        }

        function Xr(n, t, r) {
            return n && n.length ? (n = Jr(n), null == t ? n : (t = Bt(t, r, 4), Gn(n, function (n) {
                return Xn(n, t, w, true)
            }))) : []
        }

        function Hr(n, t) {
            var r = -1, e = n ? n.length : 0, u = {};
            for (!e || t || Oo(n[0]) || (t = []); ++r < e;) {
                var o = n[r];
                t ? u[o] = t[r] : o && (u[o[0]] = o[1])
            }
            return u
        }

        function Qr(n) {
            return n = Nn(n), n.__chain__ = true, n
        }

        function ne(n, t, r) {
            return t.call(r, n)
        }

        function te(n, t, r) {
            var e = Oo(n) ? Kn : at;
            return r && Ur(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = wr(t, r, 3)),
                e(n, t)
        }

        function re(n, t, r) {
            var e = Oo(n) ? Vn : lt;
            return t = wr(t, r, 3), e(n, t)
        }

        function ee(n, t, r, e) {
            var u = n ? Bu(n) : 0;
            return Sr(u) || (n = Ee(n), u = n.length), r = typeof r != "number" || e && Ur(t, r, e) ? 0 : 0 > r ? bu(u + r, 0) : r || 0, typeof n == "string" || !Oo(n) && be(n) ? r <= u && -1 < n.indexOf(t, r) : !!u && -1 < xr(n, t, r)
        }

        function ue(n, t, r) {
            var e = Oo(n) ? Gn : wt;
            return t = wr(t, r, 3), e(n, t)
        }

        function oe(n, t, r) {
            if (r ? Ur(n, t, r) : null == t) {
                n = zr(n);
                var e = n.length;
                return 0 < e ? n[Rt(0, e - 1)] : w
            }
            r = -1, n = je(n);
            var e = n.length, u = e - 1;
            for (t = xu(0 > t ? 0 : +t || 0, e); ++r < t;) {
                var e = Rt(r, u), o = n[e];
                n[e] = n[r], n[r] = o
            }
            return n.length = t, n
        }

        function ie(n, t, r) {
            var e = Oo(n) ? Hn : Ct;
            return r && Ur(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = wr(t, r, 3)), e(n, t)
        }

        function fe(n, t) {
            var r;
            if (typeof t != "function") {
                if (typeof n != "function") throw new Ge(L);
                var e = n;
                n = t, t = e
            }
            return function () {
                return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = w), r
            }
        }

        function ae(n, t, r) {
            function e(t, r) {
                r && iu(r), a = p = h = w, t && (_ = ho(), c = n.apply(s, f), p || a || (f = s = w))
            }

            function u() {
                var n = t - (ho() - l);
                0 >= n || n > t ? e(h, a) : p = su(u, n)
            }

            function o() {
                e(g, p);
            }

            function i() {
                if (f = arguments, l = ho(), s = this, h = g && (p || !y), false === v) var r = y && !p; else {
                    a || y || (_ = l);
                    var e = v - (l - _), i = 0 >= e || e > v;
                    i ? (a && (a = iu(a)), _ = l, c = n.apply(s, f)) : a || (a = su(o, e))
                }
                return i && p ? p = iu(p) : p || t === v || (p = su(u, t)), r && (i = true, c = n.apply(s, f)), !i || p || a || (f = s = w), c
            }

            var f, a, c, l, s, p, h, _ = 0, v = false, g = true;
            if (typeof n != "function") throw new Ge(L);
            if (t = 0 > t ? 0 : +t || 0, true === r) var y = true,
                g = false; else ge(r) && (y = !!r.leading, v = "maxWait" in r && bu(+r.maxWait || 0, t), g = "trailing" in r ? !!r.trailing : g);
            return i.cancel = function () {
                p && iu(p), a && iu(a),
                    _ = 0, a = p = h = w
            }, i
        }

        function ce(n, t) {
            function r() {
                var e = arguments, u = t ? t.apply(this, e) : e[0], o = r.cache;
                return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e)
            }

            if (typeof n != "function" || t && typeof t != "function") throw new Ge(L);
            return r.cache = new ce.Cache, r
        }

        function le(n, t) {
            if (typeof n != "function") throw new Ge(L);
            return t = bu(t === w ? n.length - 1 : +t || 0, 0), function () {
                for (var r = arguments, e = -1, u = bu(r.length - t, 0), o = Be(u); ++e < u;) o[e] = r[t + e];
                switch (t) {
                    case 0:
                        return n.call(this, o);
                    case 1:
                        return n.call(this, r[0], o);
                    case 2:
                        return n.call(this, r[0], r[1], o)
                }
                for (u = Be(t + 1), e = -1; ++e < t;) u[e] = r[e];
                return u[t] = o, n.apply(this, u)
            }
        }

        function se(n, t) {
            return n > t
        }

        function pe(n) {
            return h(n) && Er(n) && nu.call(n, "callee") && !cu.call(n, "callee")
        }

        function he(n, t, r, e) {
            return e = (r = typeof r == "function" ? Bt(r, e, 3) : w) ? r(n, t) : w, e === w ? dt(n, t, r) : !!e
        }

        function _e(n) {
            return h(n) && typeof n.message == "string" && ru.call(n) == P
        }

        function ve(n) {
            return ge(n) && ru.call(n) == K
        }

        function ge(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t)
        }

        function ye(n) {
            return null == n ? false : ve(n) ? uu.test(Qe.call(n)) : h(n) && Rn.test(n)
        }

        function de(n) {
            return typeof n == "number" || h(n) && ru.call(n) == V
        }

        function me(n) {
            var t;
            if (!h(n) || ru.call(n) != Z || pe(n) || !(nu.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t))) return false;
            var r;
            return ht(n, function (n, t) {
                r = t
            }), r === w || nu.call(n, r)
        }

        function we(n) {
            return ge(n) && ru.call(n) == Y
        }

        function be(n) {
            return typeof n == "string" || h(n) && ru.call(n) == G
        }

        function xe(n) {
            return h(n) && Sr(n.length) && !!Sn[ru.call(n)]
        }

        function Ae(n, t) {
            return n < t
        }

        function je(n) {
            var t = n ? Bu(n) : 0;
            return Sr(t) ? t ? qn(n) : [] : Ee(n)
        }

        function ke(n) {
            return et(n, Re(n))
        }

        function Ie(n) {
            return gt(n, Re(n))
        }

        function Re(n) {
            if (null == n) return [];
            ge(n) || (n = Ve(n));
            for (var t = n.length, t = t && Sr(t) && (Oo(n) || pe(n)) && t || 0, r = n.constructor, e = -1, r = typeof r == "function" && r.prototype === n, u = Be(t), o = 0 < t; ++e < t;) u[e] = e + "";
            for (var i in n) o && Cr(i, t) || "constructor" == i && (r || !nu.call(n, i)) || u.push(i);
            return u
        }

        function Oe(n) {
            n = Br(n);
            for (var t = -1, r = zo(n), e = r.length, u = Be(e); ++t < e;) {
                var o = r[t];
                u[t] = [o, n[o]]
            }
            return u
        }

        function Ee(n) {
            return Ft(n, zo(n))
        }

        function Ce(n) {
            return (n = u(n)) && n.replace(En, a).replace(xn, "")
        }

        function Ue(n, t) {
            var r = "";
            if (n = u(n), t = +t, 1 > t || !n || !mu(t)) return r;
            do t % 2 && (r += n), t = yu(t / 2), n += n; while (t);
            return r
        }

        function We(n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? Ur(e, t, r) : null == t) ? n.slice(g(n), y(n) + 1) : (t += "", n.slice(o(n, t), i(n, t) + 1)) : n
        }

        function $e(n, t, r) {
            return r && Ur(n, t, r) && (t = w), n = u(n), n.match(t || Wn) || []
        }

        function Se(n, t, r) {
            return r && Ur(n, t, r) && (t = w), h(n) ? Ne(n) : ut(n, t)
        }

        function Fe(n) {
            return n
        }

        function Ne(n) {
            return bt(ot(n, true))
        }

        function Te(n, t, r) {
            if (null == r) {
                var e = ge(t), u = e ? zo(t) : w;
                ((u = u && u.length ? gt(t, u) : w) ? u.length : e) || (u = false, r = t, t = n, n = this)
            }
            u || (u = gt(t, zo(t)));
            var o = true, e = -1, i = ve(n), f = u.length;
            false === r ? o = false : ge(r) && "chain" in r && (o = r.chain);
            for (; ++e < f;) {
                r = u[e];
                var a = t[r];
                n[r] = a, i && (n.prototype[r] = function (t) {
                    return function () {
                        var r = this.__chain__;
                        if (o || r) {
                            var e = n(this.__wrapped__);
                            return (e.__actions__ = qn(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }), e.__chain__ = r, e
                        }
                        return t.apply(n, Jn([this.value()], arguments));
                    }
                }(a))
            }
            return n
        }

        function Le() {
        }

        function ze(n) {
            return Wr(n) ? jt(n) : kt(n)
        }

        _ = _ ? Yn.defaults(Zn.Object(), _, Yn.pick(Zn, $n)) : Zn;
        var Be = _.Array, De = _.Date, Me = _.Error, qe = _.Function, Pe = _.Math, Ke = _.Number, Ve = _.Object,
            Ze = _.RegExp, Ye = _.String, Ge = _.TypeError, Je = Be.prototype, Xe = Ve.prototype, He = Ye.prototype,
            Qe = qe.prototype.toString, nu = Xe.hasOwnProperty, tu = 0, ru = Xe.toString, eu = Zn._,
            uu = Ze("^" + Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            ou = _.ArrayBuffer, iu = _.clearTimeout, fu = _.parseFloat, au = Pe.pow, cu = Xe.propertyIsEnumerable,
            lu = jr(_, "Set"), su = _.setTimeout, pu = Je.splice, hu = _.Uint8Array, _u = jr(_, "WeakMap"),
            vu = Pe.ceil, gu = jr(Ve, "create"), yu = Pe.floor, du = jr(Be, "isArray"), mu = _.isFinite,
            wu = jr(Ve, "keys"), bu = Pe.max, xu = Pe.min, Au = jr(De, "now"), ju = _.parseInt, ku = Pe.random,
            Iu = Ke.NEGATIVE_INFINITY, Ru = Ke.POSITIVE_INFINITY, Ou = 4294967294, Eu = 2147483647,
            Cu = 9007199254740991, Uu = _u && new _u, Wu = {};
        Nn.support = {}, Nn.templateSettings = {
            escape: _n,
            evaluate: vn,
            interpolate: gn,
            variable: "",
            imports: {_: Nn}
        };
        var $u = function () {
                function n() {
                }

                return function (t) {
                    if (ge(t)) {
                        n.prototype = t;
                        var r = new n;
                        n.prototype = w
                    }
                    return r || {}
                }
            }(), Su = Vt(_t), Fu = Vt(vt, true), Nu = Zt(), Tu = Zt(true), Lu = Uu ? function (n, t) {
                return Uu.set(n, t), n
            } : Fe, zu = Uu ? function (n) {
                return Uu.get(n)
            } : Le, Bu = jt("length"), Du = function () {
                var n = 0, t = 0;
                return function (r, e) {
                    var u = ho(), o = S - (u - t);
                    if (t = u, 0 < o) {
                        if (++n >= $) return r
                    } else n = 0;
                    return Lu(r, e)
                }
            }(), Mu = le(function (n, t) {
                return h(n) && Er(n) ? ft(n, pt(t, false, true)) : []
            }), qu = tr(), Pu = tr(true), Ku = le(function (n) {
                for (var t = n.length, e = t, u = Be(l), o = xr(), i = o === r, f = []; e--;) {
                    var a = n[e] = Er(a = n[e]) ? a : [];
                    u[e] = i && 120 <= a.length && gu && lu ? new Dn(e && a) : null
                }
                var i = n[0], c = -1, l = i ? i.length : 0, s = u[0];
                n:for (; ++c < l;) if (a = i[c], 0 > (s ? Mn(s, a) : o(f, a, 0))) {
                    for (e = t; --e;) {
                        var p = u[e];
                        if (0 > (p ? Mn(p, a) : o(n[e], a, 0))) continue n
                    }
                    s && s.push(a), f.push(a)
                }
                return f
            }), Vu = le(function (t, r) {
                r = pt(r);
                var e = rt(t, r);
                return It(t, r.sort(n)), e
            }), Zu = vr(), Yu = vr(true), Gu = le(function (n) {
                return St(pt(n, false, true));
            }), Ju = le(function (n, t) {
                return Er(n) ? ft(n, t) : []
            }), Xu = le(Jr), Hu = le(function (n) {
                var t = n.length, r = 2 < t ? n[t - 2] : w, e = 1 < t ? n[t - 1] : w;
                return 2 < t && typeof r == "function" ? t -= 2 : (r = 1 < t && typeof e == "function" ? (--t, e) : w, e = w), n.length = t, Xr(n, r, e)
            }), Qu = le(function (n) {
                return n = pt(n), this.thru(function (t) {
                    t = Oo(t) ? t : [Br(t)];
                    for (var r = n, e = -1, u = t.length, o = -1, i = r.length, f = Be(u + i); ++e < u;) f[e] = t[e];
                    for (; ++o < i;) f[e++] = r[o];
                    return f
                })
            }), no = le(function (n, t) {
                return rt(n, pt(t))
            }), to = Pt(function (n, t, r) {
                nu.call(n, r) ? ++n[r] : n[r] = 1
            }), ro = nr(Su), eo = nr(Fu, true), uo = ur(Pn, Su), oo = ur(function (n, t) {
                for (var r = n.length; r-- && false !== t(n[r], r, n);) ;
                return n
            }, Fu), io = Pt(function (n, t, r) {
                nu.call(n, r) ? n[r].push(t) : n[r] = [t]
            }), fo = Pt(function (n, t, r) {
                n[r] = t
            }), ao = le(function (n, t, r) {
                var e = -1, u = typeof t == "function", o = Wr(t), i = Er(n) ? Be(n.length) : [];
                return Su(n, function (n) {
                    var f = u ? t : o && null != n ? n[t] : w;
                    i[++e] = f ? f.apply(n, r) : Or(n, t, r)
                }), i
            }), co = Pt(function (n, t, r) {
                n[r ? 0 : 1].push(t)
            }, function () {
                return [[], []]
            }), lo = lr(Xn, Su), so = lr(function (n, t, r, e) {
                var u = n.length;
                for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
                return r
            }, Fu), po = le(function (n, t) {
                if (null == n) return [];
                var r = t[2];
                return r && Ur(t[0], t[1], r) && (t.length = 1), Wt(n, pt(t), [])
            }), ho = Au || function () {
                return (new De).getTime()
            }, _o = le(function (n, t, r) {
                var e = x;
                if (r.length) var u = v(r, _o.placeholder), e = e | R;
                return gr(n, e, t, r, u)
            }), vo = le(function (n, t) {
                t = t.length ? pt(t) : Ie(n);
                for (var r = -1, e = t.length; ++r < e;) {
                    var u = t[r];
                    n[u] = gr(n[u], x, n)
                }
                return n
            }), go = le(function (n, t, r) {
                var e = x | A;
                if (r.length) var u = v(r, go.placeholder), e = e | R;
                return gr(t, e, n, r, u)
            }), yo = Xt(k), mo = Xt(I), wo = le(function (n, t) {
                return it(n, 1, t)
            }), bo = le(function (n, t, r) {
                return it(n, t, r)
            }), xo = er(), Ao = er(true), jo = le(function (n, t) {
                if (t = pt(t), typeof n != "function" || !Kn(t, e)) throw new Ge(L);
                var r = t.length;
                return le(function (e) {
                    for (var u = xu(e.length, r); u--;) e[u] = t[u](e[u]);
                    return n.apply(this, e)
                })
            }), ko = cr(R), Io = cr(O), Ro = le(function (n, t) {
                return gr(n, C, w, w, w, pt(t))
            }), Oo = du || function (n) {
                return h(n) && Sr(n.length) && ru.call(n) == D
            }, Eo = Kt(At), Co = Kt(function (n, t, r) {
                return r ? nt(n, t, r) : tt(n, t)
            }), Uo = Ht(Co, function (n, t) {
                return n === w ? t : n
            }), Wo = Ht(Eo, Fr), $o = rr(_t), So = rr(vt), Fo = or(Nu), No = or(Tu), To = ir(_t), Lo = ir(vt),
            zo = wu ? function (n) {
                var t = null == n ? w : n.constructor;
                return typeof t == "function" && t.prototype === n || typeof n != "function" && Er(n) ? Lr(n) : ge(n) ? wu(n) : []
            } : Lr, Bo = fr(true), Do = fr(), Mo = le(function (n, t) {
                if (null == n) return {};
                if ("function" != typeof t[0]) return t = Gn(pt(t), Ye), Nr(n, ft(Re(n), t));
                var r = Bt(t[0], t[1], 3);
                return Tr(n, function (n, t, e) {
                    return !r(n, t, e)
                })
            }), qo = le(function (n, t) {
                return null == n ? {} : "function" == typeof t[0] ? Tr(n, Bt(t[0], t[1], 3)) : Nr(n, pt(t))
            }), Po = Gt(function (n, t, r) {
                return t = t.toLowerCase(), n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t);
            }), Ko = Gt(function (n, t, r) {
                return n + (r ? "-" : "") + t.toLowerCase()
            }), Vo = ar(), Zo = ar(true), Yo = Gt(function (n, t, r) {
                return n + (r ? "_" : "") + t.toLowerCase()
            }), Go = Gt(function (n, t, r) {
                return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
            }), Jo = le(function (n, t) {
                try {
                    return n.apply(w, t)
                } catch (r) {
                    return _e(r) ? r : new Me(r)
                }
            }), Xo = le(function (n, t) {
                return function (r) {
                    return Or(r, n, t)
                }
            }), Ho = le(function (n, t) {
                return function (r) {
                    return Or(n, r, t)
                }
            }), Qo = _r("ceil"), ni = _r("floor"), ti = Qt(se, Iu), ri = Qt(Ae, Ru), ei = _r("round");
        return Nn.prototype = Tn.prototype,
            Ln.prototype = $u(Tn.prototype), Ln.prototype.constructor = Ln, zn.prototype = $u(Tn.prototype), zn.prototype.constructor = zn, Bn.prototype["delete"] = function (n) {
            return this.has(n) && delete this.__data__[n]
        }, Bn.prototype.get = function (n) {
            return "__proto__" == n ? w : this.__data__[n]
        }, Bn.prototype.has = function (n) {
            return "__proto__" != n && nu.call(this.__data__, n)
        }, Bn.prototype.set = function (n, t) {
            return "__proto__" != n && (this.__data__[n] = t), this
        }, Dn.prototype.push = function (n) {
            var t = this.data;
            typeof n == "string" || ge(n) ? t.set.add(n) : t.hash[n] = true;
        }, ce.Cache = Bn, Nn.after = function (n, t) {
            if (typeof t != "function") {
                if (typeof n != "function") throw new Ge(L);
                var r = n;
                n = t, t = r
            }
            return n = mu(n = +n) ? n : 0, function () {
                return 1 > --n ? t.apply(this, arguments) : void 0
            }
        }, Nn.ary = function (n, t, r) {
            return r && Ur(n, t, r) && (t = w), t = n && null == t ? n.length : bu(+t || 0, 0), gr(n, E, w, w, w, w, t)
        }, Nn.assign = Co, Nn.at = no, Nn.before = fe, Nn.bind = _o, Nn.bindAll = vo, Nn.bindKey = go, Nn.callback = Se, Nn.chain = Qr, Nn.chunk = function (n, t, r) {
            t = (r ? Ur(n, t, r) : null == t) ? 1 : bu(yu(t) || 1, 1), r = 0;
            for (var e = n ? n.length : 0, u = -1, o = Be(vu(e / t)); r < e;) o[++u] = Et(n, r, r += t);
            return o
        }, Nn.compact = function (n) {
            for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                var o = n[t];
                o && (u[++e] = o)
            }
            return u
        }, Nn.constant = function (n) {
            return function () {
                return n
            }
        }, Nn.countBy = to, Nn.create = function (n, t, r) {
            var e = $u(n);
            return r && Ur(n, t, r) && (t = w), t ? tt(e, t) : e
        }, Nn.curry = yo, Nn.curryRight = mo, Nn.debounce = ae, Nn.defaults = Uo, Nn.defaultsDeep = Wo, Nn.defer = wo, Nn.delay = bo, Nn.difference = Mu, Nn.drop = qr, Nn.dropRight = Pr, Nn.dropRightWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3), true, true) : []
        }, Nn.dropWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3), true) : []
        }, Nn.fill = function (n, t, r, e) {
            var u = n ? n.length : 0;
            if (!u) return [];
            for (r && typeof r != "number" && Ur(n, t, r) && (r = 0, e = u), u = n.length, r = null == r ? 0 : +r || 0, 0 > r && (r = -r > u ? 0 : u + r), e = e === w || e > u ? u : +e || 0, 0 > e && (e += u), u = r > e ? 0 : e >>> 0, r >>>= 0; r < u;) n[r++] = t;
            return n
        }, Nn.filter = re, Nn.flatten = function (n, t, r) {
            var e = n ? n.length : 0;
            return r && Ur(n, t, r) && (t = false), e ? pt(n, t) : []
        }, Nn.flattenDeep = function (n) {
            return n && n.length ? pt(n, true) : []
        }, Nn.flow = xo, Nn.flowRight = Ao, Nn.forEach = uo, Nn.forEachRight = oo, Nn.forIn = Fo,
            Nn.forInRight = No, Nn.forOwn = To, Nn.forOwnRight = Lo, Nn.functions = Ie, Nn.groupBy = io, Nn.indexBy = fo, Nn.initial = function (n) {
            return Pr(n, 1)
        }, Nn.intersection = Ku, Nn.invert = function (n, t, r) {
            r && Ur(n, t, r) && (t = w), r = -1;
            for (var e = zo(n), u = e.length, o = {}; ++r < u;) {
                var i = e[r], f = n[i];
                t ? nu.call(o, f) ? o[f].push(i) : o[f] = [i] : o[f] = i
            }
            return o
        }, Nn.invoke = ao, Nn.keys = zo, Nn.keysIn = Re, Nn.map = ue, Nn.mapKeys = Bo, Nn.mapValues = Do, Nn.matches = Ne, Nn.matchesProperty = function (n, t) {
            return xt(n, ot(t, true))
        }, Nn.memoize = ce, Nn.merge = Eo, Nn.method = Xo, Nn.methodOf = Ho,
            Nn.mixin = Te, Nn.modArgs = jo, Nn.negate = function (n) {
            if (typeof n != "function") throw new Ge(L);
            return function () {
                return !n.apply(this, arguments)
            }
        }, Nn.omit = Mo, Nn.once = function (n) {
            return fe(2, n)
        }, Nn.pairs = Oe, Nn.partial = ko, Nn.partialRight = Io, Nn.partition = co, Nn.pick = qo, Nn.pluck = function (n, t) {
            return ue(n, ze(t))
        }, Nn.property = ze, Nn.propertyOf = function (n) {
            return function (t) {
                return yt(n, Dr(t), t + "")
            }
        }, Nn.pull = function () {
            var n = arguments, t = n[0];
            if (!t || !t.length) return t;
            for (var r = 0, e = xr(), u = n.length; ++r < u;) for (var o = 0, i = n[r]; -1 < (o = e(t, i, o));) pu.call(t, o, 1);
            return t
        }, Nn.pullAt = Vu, Nn.range = function (n, t, r) {
            r && Ur(n, t, r) && (t = r = w), n = +n || 0, r = null == r ? 1 : +r || 0, null == t ? (t = n, n = 0) : t = +t || 0;
            var e = -1;
            t = bu(vu((t - n) / (r || 1)), 0);
            for (var u = Be(t); ++e < t;) u[e] = n, n += r;
            return u
        }, Nn.rearg = Ro, Nn.reject = function (n, t, r) {
            var e = Oo(n) ? Vn : lt;
            return t = wr(t, r, 3), e(n, function (n, r, e) {
                return !t(n, r, e)
            })
        }, Nn.remove = function (n, t, r) {
            var e = [];
            if (!n || !n.length) return e;
            var u = -1, o = [], i = n.length;
            for (t = wr(t, r, 3); ++u < i;) r = n[u], t(r, u, n) && (e.push(r), o.push(u));
            return It(n, o), e
        }, Nn.rest = Yr, Nn.restParam = le,
            Nn.set = function (n, t, r) {
                if (null == n) return n;
                var e = t + "";
                t = null != n[e] || Wr(t, n) ? [e] : Dr(t);
                for (var e = -1, u = t.length, o = u - 1, i = n; null != i && ++e < u;) {
                    var f = t[e];
                    ge(i) && (e == o ? i[f] = r : null == i[f] && (i[f] = Cr(t[e + 1]) ? [] : {})), i = i[f]
                }
                return n
            }, Nn.shuffle = function (n) {
            return oe(n, Ru)
        }, Nn.slice = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? (r && typeof r != "number" && Ur(n, t, r) && (t = 0, r = e), Et(n, t, r)) : []
        }, Nn.sortBy = function (n, t, r) {
            if (null == n) return [];
            r && Ur(n, t, r) && (t = w);
            var e = -1;
            return t = wr(t, r, 3), n = wt(n, function (n, r, u) {
                return {
                    a: t(n, r, u),
                    b: ++e, c: n
                }
            }), Ut(n, f)
        }, Nn.sortByAll = po, Nn.sortByOrder = function (n, t, r, e) {
            return null == n ? [] : (e && Ur(t, r, e) && (r = w), Oo(t) || (t = null == t ? [] : [t]), Oo(r) || (r = null == r ? [] : [r]), Wt(n, t, r))
        }, Nn.spread = function (n) {
            if (typeof n != "function") throw new Ge(L);
            return function (t) {
                return n.apply(this, t)
            }
        }, Nn.take = function (n, t, r) {
            return n && n.length ? ((r ? Ur(n, t, r) : null == t) && (t = 1), Et(n, 0, 0 > t ? 0 : t)) : []
        }, Nn.takeRight = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? Ur(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), Et(n, 0 > t ? 0 : t)) : []
        }, Nn.takeRightWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3), false, true) : []
        }, Nn.takeWhile = function (n, t, r) {
            return n && n.length ? Nt(n, wr(t, r, 3)) : []
        }, Nn.tap = function (n, t, r) {
            return t.call(r, n), n
        },Nn.throttle = function (n, t, r) {
            var e = true, u = true;
            if (typeof n != "function") throw new Ge(L);
            return false === r ? e = false : ge(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), ae(n, t, {
                leading: e,
                maxWait: +t,
                trailing: u
            })
        },Nn.thru = ne,Nn.times = function (n, t, r) {
            if (n = yu(n), 1 > n || !mu(n)) return [];
            var e = -1, u = Be(xu(n, 4294967295));
            for (t = Bt(t, r, 1); ++e < n;) 4294967295 > e ? u[e] = t(e) : t(e);
            return u
        },Nn.toArray = je,Nn.toPlainObject = ke,Nn.transform = function (n, t, r, e) {
            var u = Oo(n) || xe(n);
            return t = wr(t, e, 4), null == r && (u || ge(n) ? (e = n.constructor, r = u ? Oo(n) ? new e : [] : $u(ve(e) ? e.prototype : w)) : r = {}), (u ? Pn : _t)(n, function (n, e, u) {
                return t(r, n, e, u)
            }), r
        },Nn.union = Gu,Nn.uniq = Gr,Nn.unzip = Jr,Nn.unzipWith = Xr,Nn.values = Ee,Nn.valuesIn = function (n) {
            return Ft(n, Re(n))
        },Nn.where = function (n, t) {
            return re(n, bt(t))
        },Nn.without = Ju,Nn.wrap = function (n, t) {
            return t = null == t ? Fe : t, gr(t, R, w, [n], [])
        },Nn.xor = function () {
            for (var n = -1, t = arguments.length; ++n < t;) {
                var r = arguments[n];
                if (Er(r)) var e = e ? Jn(ft(e, r), ft(r, e)) : r
            }
            return e ? St(e) : []
        },Nn.zip = Xu,Nn.zipObject = Hr,Nn.zipWith = Hu,Nn.backflow = Ao,Nn.collect = ue,Nn.compose = Ao,Nn.each = uo,Nn.eachRight = oo,Nn.extend = Co,Nn.iteratee = Se,Nn.methods = Ie,Nn.object = Hr,Nn.select = re,Nn.tail = Yr,Nn.unique = Gr,Te(Nn, Nn),Nn.add = function (n, t) {
            return (+n || 0) + (+t || 0)
        },Nn.attempt = Jo,Nn.camelCase = Po,Nn.capitalize = function (n) {
            return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1)
        },Nn.ceil = Qo,Nn.clone = function (n, t, r, e) {
            return t && typeof t != "boolean" && Ur(n, t, r) ? t = false : typeof t == "function" && (e = r,
                r = t, t = false), typeof r == "function" ? ot(n, t, Bt(r, e, 3)) : ot(n, t)
        },Nn.cloneDeep = function (n, t, r) {
            return typeof t == "function" ? ot(n, true, Bt(t, r, 3)) : ot(n, true)
        },Nn.deburr = Ce,Nn.endsWith = function (n, t, r) {
            n = u(n), t += "";
            var e = n.length;
            return r = r === w ? e : xu(0 > r ? 0 : +r || 0, e), r -= t.length, 0 <= r && n.indexOf(t, r) == r
        },Nn.escape = function (n) {
            return (n = u(n)) && hn.test(n) ? n.replace(sn, c) : n
        },Nn.escapeRegExp = function (n) {
            return (n = u(n)) && bn.test(n) ? n.replace(wn, l) : n || "(?:)"
        },Nn.every = te,Nn.find = ro,Nn.findIndex = qu,Nn.findKey = $o,Nn.findLast = eo,
            Nn.findLastIndex = Pu,Nn.findLastKey = So,Nn.findWhere = function (n, t) {
            return ro(n, bt(t))
        },Nn.first = Kr,Nn.floor = ni,Nn.get = function (n, t, r) {
            return n = null == n ? w : yt(n, Dr(t), t + ""), n === w ? r : n
        },Nn.gt = se,Nn.gte = function (n, t) {
            return n >= t
        },Nn.has = function (n, t) {
            if (null == n) return false;
            var r = nu.call(n, t);
            if (!r && !Wr(t)) {
                if (t = Dr(t), n = 1 == t.length ? n : yt(n, Et(t, 0, -1)), null == n) return false;
                t = Zr(t), r = nu.call(n, t)
            }
            return r || Sr(n.length) && Cr(t, n.length) && (Oo(n) || pe(n))
        },Nn.identity = Fe,Nn.includes = ee,Nn.indexOf = Vr,Nn.inRange = function (n, t, r) {
            return t = +t || 0, r === w ? (r = t, t = 0) : r = +r || 0, n >= xu(t, r) && n < bu(t, r)
        },Nn.isArguments = pe,Nn.isArray = Oo,Nn.isBoolean = function (n) {
            return true === n || false === n || h(n) && ru.call(n) == M
        },Nn.isDate = function (n) {
            return h(n) && ru.call(n) == q
        },Nn.isElement = function (n) {
            return !!n && 1 === n.nodeType && h(n) && !me(n)
        },Nn.isEmpty = function (n) {
            return null == n ? true : Er(n) && (Oo(n) || be(n) || pe(n) || h(n) && ve(n.splice)) ? !n.length : !zo(n).length
        },Nn.isEqual = he,Nn.isError = _e,Nn.isFinite = function (n) {
            return typeof n == "number" && mu(n)
        },Nn.isFunction = ve,Nn.isMatch = function (n, t, r, e) {
            return r = typeof r == "function" ? Bt(r, e, 3) : w, mt(n, Ar(t), r)
        },Nn.isNaN = function (n) {
            return de(n) && n != +n
        },Nn.isNative = ye,Nn.isNull = function (n) {
            return null === n
        },Nn.isNumber = de,Nn.isObject = ge,Nn.isPlainObject = me,Nn.isRegExp = we,Nn.isString = be,Nn.isTypedArray = xe,Nn.isUndefined = function (n) {
            return n === w
        },Nn.kebabCase = Ko,Nn.last = Zr,Nn.lastIndexOf = function (n, t, r) {
            var e = n ? n.length : 0;
            if (!e) return -1;
            var u = e;
            if (typeof r == "number") u = (0 > r ? bu(e + r, 0) : xu(r || 0, e - 1)) + 1; else if (r) return u = Lt(n, t, true) - 1, n = n[u], (t === t ? t === n : n !== n) ? u : -1;
            if (t !== t) return p(n, u, true);
            for (; u--;) if (n[u] === t) return u;
            return -1
        },Nn.lt = Ae,Nn.lte = function (n, t) {
            return n <= t
        },Nn.max = ti,Nn.min = ri,Nn.noConflict = function () {
            return Zn._ = eu, this
        },Nn.noop = Le,Nn.now = ho,Nn.pad = function (n, t, r) {
            n = u(n), t = +t;
            var e = n.length;
            return e < t && mu(t) ? (e = (t - e) / 2, t = yu(e), e = vu(e), r = pr("", e, r), r.slice(0, t) + n + r) : n
        },Nn.padLeft = Vo,Nn.padRight = Zo,Nn.parseInt = function (n, t, r) {
            return (r ? Ur(n, t, r) : null == t) ? t = 0 : t && (t = +t), n = We(n), ju(n, t || (In.test(n) ? 16 : 10))
        },Nn.random = function (n, t, r) {
            r && Ur(n, t, r) && (t = r = w);
            var e = null == n, u = null == t;
            return null == r && (u && typeof n == "boolean" ? (r = n, n = 1) : typeof t == "boolean" && (r = t, u = true)), e && u && (t = 1, u = false), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, r || n % 1 || t % 1 ? (r = ku(), xu(n + r * (t - n + fu("1e-" + ((r + "").length - 1))), t)) : Rt(n, t)
        },Nn.reduce = lo,Nn.reduceRight = so,Nn.repeat = Ue,Nn.result = function (n, t, r) {
            var e = null == n ? w : n[t];
            return e === w && (null == n || Wr(t, n) || (t = Dr(t), n = 1 == t.length ? n : yt(n, Et(t, 0, -1)), e = null == n ? w : n[Zr(t)]), e = e === w ? r : e), ve(e) ? e.call(n) : e
        },Nn.round = ei,Nn.runInContext = m,Nn.size = function (n) {
            var t = n ? Bu(n) : 0;
            return Sr(t) ? t : zo(n).length
        },Nn.snakeCase = Yo,Nn.some = ie,Nn.sortedIndex = Zu,Nn.sortedLastIndex = Yu,Nn.startCase = Go,Nn.startsWith = function (n, t, r) {
            return n = u(n), r = null == r ? 0 : xu(0 > r ? 0 : +r || 0, n.length), n.lastIndexOf(t, r) == r
        },Nn.sum = function (n, t, r) {
            if (r && Ur(n, t, r) && (t = w), t = wr(t, r, 3), 1 == t.length) {
                n = Oo(n) ? n : zr(n), r = n.length;
                for (var e = 0; r--;) e += +t(n[r]) || 0;
                n = e
            } else n = $t(n, t);
            return n
        },Nn.template = function (n, t, r) {
            var e = Nn.templateSettings;
            r && Ur(n, t, r) && (t = r = w), n = u(n), t = nt(tt({}, r || t), e, Qn), r = nt(tt({}, t.imports), e.imports, Qn);
            var o, i, f = zo(r), a = Ft(r, f), c = 0;
            r = t.interpolate || Cn;
            var l = "__p+='";
            r = Ze((t.escape || Cn).source + "|" + r.source + "|" + (r === gn ? jn : Cn).source + "|" + (t.evaluate || Cn).source + "|$", "g");
            var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
            if (n.replace(r, function (t, r, e, u, f, a) {
                    return e || (e = u), l += n.slice(c, a).replace(Un, s), r && (o = true, l += "'+__e(" + r + ")+'"), f && (i = true, l += "';" + f + ";\n__p+='"), e && (l += "'+((__t=(" + e + "))==null?'':__t)+'"), c = a + t.length, t
                }), l += "';", (t = t.variable) || (l = "with(obj){" + l + "}"), l = (i ? l.replace(fn, "") : l).replace(an, "$1").replace(cn, "$1;"),
                    l = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", t = Jo(function () {
                    return qe(f, p + "return " + l).apply(w, a)
                }), t.source = l, _e(t)) throw t;
            return t
        },Nn.trim = We,Nn.trimLeft = function (n, t, r) {
            var e = n;
            return (n = u(n)) ? n.slice((r ? Ur(e, t, r) : null == t) ? g(n) : o(n, t + "")) : n
        },Nn.trimRight = function (n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? Ur(e, t, r) : null == t) ? n.slice(0, y(n) + 1) : n.slice(0, i(n, t + "") + 1) : n;
        },Nn.trunc = function (n, t, r) {
            r && Ur(n, t, r) && (t = w);
            var e = U;
            if (r = W, null != t) if (ge(t)) {
                var o = "separator" in t ? t.separator : o, e = "length" in t ? +t.length || 0 : e;
                r = "omission" in t ? u(t.omission) : r
            } else e = +t || 0;
            if (n = u(n), e >= n.length) return n;
            if (e -= r.length, 1 > e) return r;
            if (t = n.slice(0, e), null == o) return t + r;
            if (we(o)) {
                if (n.slice(e).search(o)) {
                    var i, f = n.slice(0, e);
                    for (o.global || (o = Ze(o.source, (kn.exec(o) || "") + "g")), o.lastIndex = 0; n = o.exec(f);) i = n.index;
                    t = t.slice(0, null == i ? e : i)
                }
            } else n.indexOf(o, e) != e && (o = t.lastIndexOf(o),
            -1 < o && (t = t.slice(0, o)));
            return t + r
        },Nn.unescape = function (n) {
            return (n = u(n)) && pn.test(n) ? n.replace(ln, d) : n
        },Nn.uniqueId = function (n) {
            var t = ++tu;
            return u(n) + t
        },Nn.words = $e,Nn.all = te,Nn.any = ie,Nn.contains = ee,Nn.eq = he,Nn.detect = ro,Nn.foldl = lo,Nn.foldr = so,Nn.head = Kr,Nn.include = ee,Nn.inject = lo,Te(Nn, function () {
            var n = {};
            return _t(Nn, function (t, r) {
                Nn.prototype[r] || (n[r] = t)
            }), n
        }(), false),Nn.sample = oe,Nn.prototype.sample = function (n) {
            return this.__chain__ || null != n ? this.thru(function (t) {
                return oe(t, n)
            }) : oe(this.value());
        },Nn.VERSION = b,Pn("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
            Nn[n].placeholder = Nn
        }),Pn(["drop", "take"], function (n, t) {
            zn.prototype[n] = function (r) {
                var e = this.__filtered__;
                if (e && !t) return new zn(this);
                r = null == r ? 1 : bu(yu(r) || 0, 0);
                var u = this.clone();
                return e ? u.__takeCount__ = xu(u.__takeCount__, r) : u.__views__.push({
                    size: r,
                    type: n + (0 > u.__dir__ ? "Right" : "")
                }), u
            }, zn.prototype[n + "Right"] = function (t) {
                return this.reverse()[n](t).reverse()
            }
        }),Pn(["filter", "map", "takeWhile"], function (n, t) {
            var r = t + 1, e = r != T;
            zn.prototype[n] = function (n, t) {
                var u = this.clone();
                return u.__iteratees__.push({iteratee: wr(n, t, 1), type: r}), u.__filtered__ = u.__filtered__ || e, u
            }
        }),Pn(["first", "last"], function (n, t) {
            var r = "take" + (t ? "Right" : "");
            zn.prototype[n] = function () {
                return this[r](1).value()[0]
            }
        }),Pn(["initial", "rest"], function (n, t) {
            var r = "drop" + (t ? "" : "Right");
            zn.prototype[n] = function () {
                return this.__filtered__ ? new zn(this) : this[r](1)
            }
        }),Pn(["pluck", "where"], function (n, t) {
            var r = t ? "filter" : "map", e = t ? bt : ze;
            zn.prototype[n] = function (n) {
                return this[r](e(n))
            }
        }),zn.prototype.compact = function () {
            return this.filter(Fe)
        },zn.prototype.reject = function (n, t) {
            return n = wr(n, t, 1), this.filter(function (t) {
                return !n(t)
            })
        },zn.prototype.slice = function (n, t) {
            n = null == n ? 0 : +n || 0;
            var r = this;
            return r.__filtered__ && (0 < n || 0 > t) ? new zn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== w && (t = +t || 0, r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r)
        },zn.prototype.takeRightWhile = function (n, t) {
            return this.reverse().takeWhile(n, t).reverse()
        },zn.prototype.toArray = function () {
            return this.take(Ru);
        },_t(zn.prototype, function (n, t) {
            var r = /^(?:filter|map|reject)|While$/.test(t), e = /^(?:first|last)$/.test(t),
                u = Nn[e ? "take" + ("last" == t ? "Right" : "") : t];
            u && (Nn.prototype[t] = function () {
                function t(n) {
                    return e && i ? u(n, 1)[0] : u.apply(w, Jn([n], o))
                }

                var o = e ? [1] : arguments, i = this.__chain__, f = this.__wrapped__, a = !!this.__actions__.length,
                    c = f instanceof zn, l = o[0], s = c || Oo(f);
                return s && r && typeof l == "function" && 1 != l.length && (c = s = false), l = {
                    func: ne,
                    args: [t],
                    thisArg: w
                }, a = c && !a, e && !i ? a ? (f = f.clone(), f.__actions__.push(l), n.call(f)) : u.call(w, this.value())[0] : !e && s ? (f = a ? f : new zn(this),
                    f = n.apply(f, o), f.__actions__.push(l), new Ln(f, i)) : this.thru(t)
            })
        }),Pn("join pop push replace shift sort splice split unshift".split(" "), function (n) {
            var t = (/^(?:replace|split)$/.test(n) ? He : Je)[n],
                r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:join|pop|replace|shift)$/.test(n);
            Nn.prototype[n] = function () {
                var n = arguments;
                return e && !this.__chain__ ? t.apply(this.value(), n) : this[r](function (r) {
                    return t.apply(r, n)
                })
            }
        }),_t(zn.prototype, function (n, t) {
            var r = Nn[t];
            if (r) {
                var e = r.name + "";
                (Wu[e] || (Wu[e] = [])).push({
                    name: t, func: r
                })
            }
        }),Wu[sr(w, A).name] = [{name: "wrapper", func: w}],zn.prototype.clone = function () {
            var n = new zn(this.__wrapped__);
            return n.__actions__ = qn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = qn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = qn(this.__views__), n
        },zn.prototype.reverse = function () {
            if (this.__filtered__) {
                var n = new zn(this);
                n.__dir__ = -1, n.__filtered__ = true
            } else n = this.clone(), n.__dir__ *= -1;
            return n
        },zn.prototype.value = function () {
            var n, t = this.__wrapped__.value(), r = this.__dir__, e = Oo(t), u = 0 > r, o = e ? t.length : 0;
            n = o;
            for (var i = this.__views__, f = 0, a = -1, c = i.length; ++a < c;) {
                var l = i[a], s = l.size;
                switch (l.type) {
                    case"drop":
                        f += s;
                        break;
                    case"dropRight":
                        n -= s;
                        break;
                    case"take":
                        n = xu(n, f + s);
                        break;
                    case"takeRight":
                        f = bu(f, n - s)
                }
            }
            if (n = {
                    start: f,
                    end: n
                }, i = n.start, f = n.end, n = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, a = 0, c = xu(n, this.__takeCount__), !e || o < F || o == n && c == n) return Tt(t, this.__actions__);
            e = [];
            n:for (; n-- && a < c;) {
                for (u += r, o = -1, l = t[u]; ++o < f;) {
                    var p = i[o], s = p.type, p = p.iteratee(l);
                    if (s == T) l = p; else if (!p) {
                        if (s == N) continue n;
                        break n
                    }
                }
                e[a++] = l
            }
            return e
        },Nn.prototype.chain = function () {
            return Qr(this)
        },Nn.prototype.commit = function () {
            return new Ln(this.value(), this.__chain__)
        },Nn.prototype.concat = Qu,Nn.prototype.plant = function (n) {
            for (var t, r = this; r instanceof Tn;) {
                var e = Mr(r);
                t ? u.__wrapped__ = e : t = e;
                var u = e, r = r.__wrapped__
            }
            return u.__wrapped__ = n, t
        },Nn.prototype.reverse = function () {
            function n(n) {
                return n.reverse()
            }

            var t = this.__wrapped__;
            return t instanceof zn ? (this.__actions__.length && (t = new zn(this)),
                t = t.reverse(), t.__actions__.push({
                func: ne,
                args: [n],
                thisArg: w
            }), new Ln(t, this.__chain__)) : this.thru(n)
        },Nn.prototype.toString = function () {
            return this.value() + ""
        },Nn.prototype.run = Nn.prototype.toJSON = Nn.prototype.valueOf = Nn.prototype.value = function () {
            return Tt(this.__wrapped__, this.__actions__)
        },Nn.prototype.collect = Nn.prototype.map,Nn.prototype.head = Nn.prototype.first,Nn.prototype.select = Nn.prototype.filter,Nn.prototype.tail = Nn.prototype.rest,Nn
    }

    var w, b = "3.10.1", x = 1, A = 2, j = 4, k = 8, I = 16, R = 32, O = 64, E = 128, C = 256, U = 30, W = "...",
        $ = 150, S = 16, F = 200, N = 1, T = 2, L = "Expected a function", z = "__lodash_placeholder__",
        B = "[object Arguments]", D = "[object Array]", M = "[object Boolean]", q = "[object Date]",
        P = "[object Error]", K = "[object Function]", V = "[object Number]", Z = "[object Object]",
        Y = "[object RegExp]", G = "[object String]", J = "[object ArrayBuffer]", X = "[object Float32Array]",
        H = "[object Float64Array]", Q = "[object Int8Array]", nn = "[object Int16Array]", tn = "[object Int32Array]",
        rn = "[object Uint8Array]", en = "[object Uint8ClampedArray]", un = "[object Uint16Array]",
        on = "[object Uint32Array]", fn = /\b__p\+='';/g, an = /\b(__p\+=)''\+/g, cn = /(__e\(.*?\)|\b__t\))\+'';/g,
        ln = /&(?:amp|lt|gt|quot|#39|#96);/g, sn = /[&<>"'`]/g, pn = RegExp(ln.source), hn = RegExp(sn.source),
        _n = /<%-([\s\S]+?)%>/g, vn = /<%([\s\S]+?)%>/g, gn = /<%=([\s\S]+?)%>/g,
        yn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, dn = /^\w*$/,
        mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        wn = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, bn = RegExp(wn.source),
        xn = /[\u0300-\u036f\ufe20-\ufe23]/g, An = /\\(\\)?/g, jn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, kn = /\w*$/,
        In = /^0[xX]/, Rn = /^\[object .+?Constructor\]$/, On = /^\d+$/, En = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Cn = /($^)/, Un = /['\n\r\u2028\u2029\\]/g,
        Wn = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        $n = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),
        Sn = {};
    Sn[X] = Sn[H] = Sn[Q] = Sn[nn] = Sn[tn] = Sn[rn] = Sn[en] = Sn[un] = Sn[on] = true, Sn[B] = Sn[D] = Sn[J] = Sn[M] = Sn[q] = Sn[P] = Sn[K] = Sn["[object Map]"] = Sn[V] = Sn[Z] = Sn[Y] = Sn["[object Set]"] = Sn[G] = Sn["[object WeakMap]"] = false;
    var Fn = {};
    Fn[B] = Fn[D] = Fn[J] = Fn[M] = Fn[q] = Fn[X] = Fn[H] = Fn[Q] = Fn[nn] = Fn[tn] = Fn[V] = Fn[Z] = Fn[Y] = Fn[G] = Fn[rn] = Fn[en] = Fn[un] = Fn[on] = true, Fn[P] = Fn[K] = Fn["[object Map]"] = Fn["[object Set]"] = Fn["[object WeakMap]"] = false;
    var Nn = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss"
        }, Tn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"},
        Ln = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`"},
        zn = {"function": true, object: true}, Bn = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        }, Dn = {
            "\\": "\\",
            "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"
        }, Mn = zn[typeof exports] && exports && !exports.nodeType && exports,
        qn = zn[typeof module] && module && !module.nodeType && module,
        Pn = zn[typeof self] && self && self.Object && self,
        Kn = zn[typeof window] && window && window.Object && window, Vn = qn && qn.exports === Mn && Mn,
        Zn = Mn && qn && typeof global == "object" && global && global.Object && global || Kn !== (this && this.window) && Kn || Pn || this,
        Yn = m();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Zn._ = Yn, define(function () {
        return Yn
    })) : Mn && qn ? Vn ? (qn.exports = Yn)._ = Yn : Mn._ = Yn : Zn._ = Yn
}).call(this);


var LZString = function () {
    function o(o, r) {
        if (!t[o]) {
            t[o] = {};
            for (var n = 0; n < o.length; n++) t[o][o.charAt(n)] = n
        }
        return t[o][r]
    }

    var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", t = {}, i = {
            compressToBase64: function (o) {
                if (null == o) return "";
                var r = i._compress(o, 6, function (o) {
                    return n.charAt(o)
                });
                switch (r.length % 4) {
                    default:
                    case 0:
                        return r;
                    case 1:
                        return r + "===";
                    case 2:
                        return r + "==";
                    case 3:
                        return r + "="
                }
            }, decompressFromBase64: function (r) {
                return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function (e) {
                    return o(n, r.charAt(e))
                })
            }, compressToUTF16: function (o) {
                return null == o ? "" : i._compress(o, 15, function (o) {
                    return r(o + 32)
                }) + " "
            }, decompressFromUTF16: function (o) {
                return null == o ? "" : "" == o ? null : i._decompress(o.length, 16384, function (r) {
                    return o.charCodeAt(r) - 32
                })
            }, compressToUint8Array: function (o) {
                for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) {
                    var s = r.charCodeAt(e);
                    n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256
                }
                return n
            }, decompressFromUint8Array: function (o) {
                if (null === o || void 0 === o) return i.decompress(o);
                for (var n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++) n[e] = 256 * o[2 * e] + o[2 * e + 1];
                var s = [];
                return n.forEach(function (o) {
                    s.push(r(o))
                }), i.decompress(s.join(""))
            }, compressToEncodedURIComponent: function (o) {
                return null == o ? "" : i._compress(o, 6, function (o) {
                    return e.charAt(o)
                })
            }, decompressFromEncodedURIComponent: function (r) {
                return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function (n) {
                    return o(e, r.charAt(n))
                }))
            }, compress: function (o) {
                return i._compress(o, 16, function (o) {
                    return r(o)
                })
            }, _compress: function (o, r, n) {
                if (null == o) return "";
                var e, t, i, s = {}, p = {}, u = "", c = "", a = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0;
                for (i = 0; i < o.length; i += 1) if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) a = c; else {
                    if (Object.prototype.hasOwnProperty.call(p, a)) {
                        if (a.charCodeAt(0) < 256) {
                            for (e = 0; h > e; e++) m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                            for (t = a.charCodeAt(0), e = 0; 8 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        } else {
                            for (t = 1, e = 0; h > e; e++) m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
                            for (t = a.charCodeAt(0), e = 0; 16 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        }
                        l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a]
                    } else for (t = s[a], e = 0; h > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                    l--, 0 == l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u)
                }
                if ("" !== a) {
                    if (Object.prototype.hasOwnProperty.call(p, a)) {
                        if (a.charCodeAt(0) < 256) {
                            for (e = 0; h > e; e++) m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                            for (t = a.charCodeAt(0), e = 0; 8 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        } else {
                            for (t = 1, e = 0; h > e; e++) m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
                            for (t = a.charCodeAt(0), e = 0; 16 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        }
                        l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a]
                    } else for (t = s[a], e = 0; h > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                    l--, 0 == l && (l = Math.pow(2, h), h++)
                }
                for (t = 2, e = 0; h > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                for (; ;) {
                    if (m <<= 1, v == r - 1) {
                        d.push(n(m));
                        break
                    }
                    v++
                }
                return d.join("")
            }, decompress: function (o) {
                return null == o ? "" : "" == o ? null : i._decompress(o.length, 32768, function (r) {
                    return o.charCodeAt(r)
                })
            }, _decompress: function (o, n, e) {
                var t, i, s, p, u, c, a, l, f = [], h = 4, d = 4, m = 3, v = "", w = [],
                    A = {val: e(0), position: n, index: 1};
                for (i = 0; 3 > i; i += 1) f[i] = i;
                for (p = 0, c = Math.pow(2, 2), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
                switch (t = p) {
                    case 0:
                        for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
                        l = r(p);
                        break;
                    case 1:
                        for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
                        l = r(p);
                        break;
                    case 2:
                        return ""
                }
                for (f[3] = l, s = l, w.push(l); ;) {
                    if (A.index > o) return "";
                    for (p = 0, c = Math.pow(2, m), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
                    switch (l = p) {
                        case 0:
                            for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
                            f[d++] = r(p), l = d - 1, h--;
                            break;
                        case 1:
                            for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
                            f[d++] = r(p), l = d - 1, h--;
                            break;
                        case 2:
                            return w.join("")
                    }
                    if (0 == h && (h = Math.pow(2, m), m++), f[l]) v = f[l]; else {
                        if (l !== d) return null;
                        v = s + s.charAt(0)
                    }
                    w.push(v), f[d++] = s + v.charAt(0), h--, s = v, 0 == h && (h = Math.pow(2, m), m++)
                }
            }
        };
    return i
}();
"function" == typeof define && define.amd ? define(function () {
    return LZString
}) : "undefined" != typeof module && null != module && (module.exports = LZString);


/* Bootstrap.min.js v3.3.6 */
if ("undefined" === typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery");
+function (c) {
    c = c.fn.jquery.split(" ")[0].split(".");
    if (2 > c[0] && 9 > c[1] || 1 == c[0] && 9 == c[1] && 1 > c[2] || 2 < c[0]) throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery);
+function (c) {
    c.fn.emulateTransitionEnd = function (d) {
        var e = !1, b = this;
        c(this).one("bsTransitionEnd", function () {
            e = !0
        });
        setTimeout(function () {
            e || c(b).trigger(c.support.transition.end)
        }, d);
        return this
    };
    c(function () {
        var d = c.support, e;
        a:{
            e = document.createElement("bootstrap");
            var b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            }, a;
            for (a in b) if (void 0 !== e.style[a]) {
                e = {end: b[a]};
                break a
            }
            e = !1
        }
        d.transition = e;
        c.support.transition && (c.event.special.bsTransitionEnd = {
            bindType: c.support.transition.end,
            delegateType: c.support.transition.end,
            handle: function (a) {
                if (c(a.target).is(this)) return a.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
+function (c) {
    var d = function (b) {
        c(b).on("click", '[data-dismiss="alert"]', this.close)
    };
    d.VERSION = "3.3.6";
    d.TRANSITION_DURATION = 150;
    d.prototype.close = function (b) {
        function a() {
            h.detach().trigger("closed.bs.alert").remove()
        }

        var g = c(this), f = g.attr("data-target");
        f || (f = (f = g.attr("href")) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var h = c(f);
        b && b.preventDefault();
        h.length || (h = g.closest(".alert"));
        h.trigger(b = c.Event("close.bs.alert"));
        b.isDefaultPrevented() || (h.removeClass("in"), c.support.transition && h.hasClass("fade") ? h.one("bsTransitionEnd", a).emulateTransitionEnd(d.TRANSITION_DURATION) : a())
    };
    var e = c.fn.alert;
    c.fn.alert = function (b) {
        return this.each(function () {
            var a = c(this), g = a.data("bs.alert");
            g || a.data("bs.alert", g = new d(this));
            "string" == typeof b && g[b].call(a)
        })
    };
    c.fn.alert.Constructor = d;
    c.fn.alert.noConflict = function () {
        c.fn.alert = e;
        return this
    };
    c(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d.prototype.close)
}(jQuery);
+function (c) {
    function d(a) {
        return this.each(function () {
            var g = c(this), b = g.data("bs.button"), h = "object" == typeof a && a;
            b || g.data("bs.button", b = new e(this, h));
            "toggle" == a ? b.toggle() : a && b.setState(a)
        })
    }

    var e = function (a, g) {
        this.$element = c(a);
        this.options = c.extend({}, e.DEFAULTS, g);
        this.isLoading = !1
    };
    e.VERSION = "3.3.6";
    e.DEFAULTS = {loadingText: "loading..."};
    e.prototype.setState = function (a) {
        var g = this.$element, b = g.is("input") ? "val" : "html", h = g.data(), a = a + "Text";
        null == h.resetText && g.data("resetText", g[b]());
        setTimeout(c.proxy(function () {
            g[b](null == h[a] ? this.options[a] : h[a]);
            "loadingText" == a ? (this.isLoading = !0, g.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, g.removeClass("disabled").removeAttr("disabled"))
        }, this), 0)
    };
    e.prototype.toggle = function () {
        var a = !0, g = this.$element.closest('[data-toggle="buttons"]');
        if (g.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), g.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active"));
            c.prop("checked", this.$element.hasClass("active"));
            a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var b = c.fn.button;
    c.fn.button = d;
    c.fn.button.Constructor = e;
    c.fn.button.noConflict = function () {
        c.fn.button = b;
        return this
    };
    c(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (a) {
        var g = c(a.target);
        g.hasClass("btn") || (g = g.closest(".btn"));
        d.call(g, "toggle");
        !c(a.target).is('input[type="radio"]') && !c(a.target).is('input[type="checkbox"]') && a.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (a) {
        c(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery);
+function (c) {
    function d(a) {
        return this.each(function () {
            var b = c(this), h = b.data("bs.carousel"),
                j = c.extend({}, e.DEFAULTS, b.data(), "object" == typeof a && a),
                d = "string" == typeof a ? a : j.slide;
            h || b.data("bs.carousel", h = new e(this, j));
            if ("number" == typeof a) h.to(a); else if (d) h[d](); else j.interval && h.pause().cycle()
        })
    }

    var e = function (a, b) {
        this.$element = c(a);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = b;
        this.$items = this.$active = this.interval = this.sliding = this.paused = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", c.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", c.proxy(this.pause, this)).on("mouseleave.bs.carousel", c.proxy(this.cycle, this))
    };
    e.VERSION = "3.3.6";
    e.TRANSITION_DURATION = 600;
    e.DEFAULTS = {interval: 5E3, pause: "hover", wrap: !0, keyboard: !0};
    e.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    };
    e.prototype.cycle = function (a) {
        a || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval));
        return this
    };
    e.prototype.getItemIndex = function (a) {
        this.$items = a.parent().children(".item");
        return this.$items.index(a || this.$active)
    };
    e.prototype.getItemForDirection = function (a, c) {
        var b = this.getItemIndex(c);
        return ("prev" == a && 0 === b || "next" == a && b == this.$items.length - 1) && !this.options.wrap ? c : this.$items.eq((b + ("prev" == a ? -1 : 1)) % this.$items.length)
    };
    e.prototype.to = function (a) {
        var c = this, b = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || 0 > a)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            c.to(a)
        }) : b == a ? this.pause().cycle() : this.slide(a > b ? "next" : "prev", this.$items.eq(a))
    };
    e.prototype.pause = function (a) {
        a || (this.paused = !0);
        this.$element.find(".next, .prev").length && c.support.transition && (this.$element.trigger(c.support.transition.end), this.cycle(!0));
        this.interval = clearInterval(this.interval);
        return this
    };
    e.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    };
    e.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    };
    e.prototype.slide = function (a, b) {
        var h = this.$element.find(".item.active"), j = b || this.getItemForDirection(a, h), d = this.interval,
            i = "next" == a ? "left" : "right", l = this;
        if (j.hasClass("active")) return this.sliding = !1;
        var n = j[0], m = c.Event("slide.bs.carousel", {relatedTarget: n, direction: i});
        this.$element.trigger(m);
        if (!m.isDefaultPrevented()) {
            this.sliding = !0;
            d && this.pause();
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), (m = c(this.$indicators.children()[this.getItemIndex(j)])) && m.addClass("active"));
            var p = c.Event("slid.bs.carousel", {relatedTarget: n, direction: i});
            c.support.transition && this.$element.hasClass("slide") ? (j.addClass(a), j[0].offsetWidth, h.addClass(i), j.addClass(i), h.one("bsTransitionEnd", function () {
                j.removeClass([a, i].join(" ")).addClass("active");
                h.removeClass(["active", i].join(" "));
                l.sliding = !1;
                setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (h.removeClass("active"), j.addClass("active"), this.sliding = !1, this.$element.trigger(p));
            d && this.cycle();
            return this
        }
    };
    var b = c.fn.carousel;
    c.fn.carousel = d;
    c.fn.carousel.Constructor = e;
    c.fn.carousel.noConflict = function () {
        c.fn.carousel = b;
        return this
    };
    var a = function (a) {
        var b, h = c(this), j = c(h.attr("data-target") || (b = h.attr("href")) && b.replace(/.*(?=#[^\s]+$)/, ""));
        if (j.hasClass("carousel")) {
            b = c.extend({}, j.data(), h.data());
            if (h = h.attr("data-slide-to")) b.interval = !1;
            d.call(j, b);
            h && j.data("bs.carousel").to(h);
            a.preventDefault()
        }
    };
    c(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a);
    c(window).on("load", function () {
        c('[data-ride="carousel"]').each(function () {
            var a = c(this);
            d.call(a, a.data())
        })
    })
}(jQuery);
+function (c) {
    function d(a) {
        var b, a = a.attr("data-target") || (b = a.attr("href")) && b.replace(/.*(?=#[^\s]+$)/, "");
        return c(a)
    }

    function e(a) {
        return this.each(function () {
            var f = c(this), h = f.data("bs.collapse"),
                j = c.extend({}, b.DEFAULTS, f.data(), "object" == typeof a && a);
            !h && (j.toggle && /show|hide/.test(a)) && (j.toggle = !1);
            h || f.data("bs.collapse", h = new b(this, j));
            if ("string" == typeof a) h[a]()
        })
    }

    var b = function (a, f) {
        this.$element = c(a);
        this.options = c.extend({}, b.DEFAULTS, f);
        this.$trigger = c('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };
    b.VERSION = "3.3.6";
    b.TRANSITION_DURATION = 350;
    b.DEFAULTS = {toggle: !0};
    b.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, f = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (f && f.length && (a = f.data("bs.collapse")) && a.transitioning) return;
            var h = c.Event("show.bs.collapse");
            this.$element.trigger(h);
            if (!h.isDefaultPrevented()) {
                f && f.length && (e.call(f, "hide"), a || f.data("bs.collapse", null));
                var j = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[j](0).attr("aria-expanded", !0);
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                this.transitioning = 1;
                a = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[j]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!c.support.transition) return a.call(this);
                f = c.camelCase(["scroll", j].join("-"));
                this.$element.one("bsTransitionEnd", c.proxy(a, this)).emulateTransitionEnd(b.TRANSITION_DURATION)[j](this.$element[0][f])
            }
        }
    };
    b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = c.Event("hide.bs.collapse");
            this.$element.trigger(a);
            if (!a.isDefaultPrevented()) {
                a = this.dimension();
                this.$element[a](this.$element[a]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var f = function () {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!c.support.transition) return f.call(this);
                this.$element[a](0).one("bsTransitionEnd", c.proxy(f, this)).emulateTransitionEnd(b.TRANSITION_DURATION)
            }
        }
    };
    b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    b.prototype.getParent = function () {
        return c(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(c.proxy(function (a, b) {
            var h = c(b);
            this.addAriaAndCollapsedClass(d(h), h)
        }, this)).end()
    };
    b.prototype.addAriaAndCollapsedClass = function (a, c) {
        var b = a.hasClass("in");
        a.attr("aria-expanded", b);
        c.toggleClass("collapsed", !b).attr("aria-expanded", b)
    };
    var a = c.fn.collapse;
    c.fn.collapse = e;
    c.fn.collapse.Constructor = b;
    c.fn.collapse.noConflict = function () {
        c.fn.collapse = a;
        return this
    };
    c(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (a) {
        var b = c(this);
        b.attr("data-target") || a.preventDefault();
        a = d(b);
        b = a.data("bs.collapse") ? "toggle" : b.data();
        e.call(a, b)
    })
}(jQuery);
+function (c) {
    function d(a) {
        var b = a.attr("data-target");
        b || (b = (b = a.attr("href")) && /#[A-Za-z]/.test(b) && b.replace(/.*(?=#[^\s]*$)/, ""));
        return (b = b && c(b)) && b.length ? b : a.parent()
    }

    function e(g) {
        g && 3 === g.which || (c(b).remove(), c(a).each(function () {
            var a = c(this), b = d(a), f = {relatedTarget: this};
            if (b.hasClass("open") && (!g || !("click" == g.type && /input|textarea/i.test(g.target.tagName) && c.contains(b[0], g.target)))) b.trigger(g = c.Event("hide.bs.dropdown", f)), g.isDefaultPrevented() || (a.attr("aria-expanded", "false"), b.removeClass("open").trigger(c.Event("hidden.bs.dropdown", f)))
        }))
    }

    var b = ".dropdown-backdrop", a = '[data-toggle="dropdown"]', g = function (a) {
        c(a).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.6";
    g.prototype.toggle = function (a) {
        var b = c(this);
        if (!b.is(".disabled, :disabled")) {
            var g = d(b), a = g.hasClass("open");
            e();
            if (!a) {
                if ("ontouchstart" in document.documentElement && !g.closest(".navbar-nav").length) c(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(c(this)).on("click", e);
                var f = {relatedTarget: this};
                g.trigger(a = c.Event("show.bs.dropdown", f));
                if (a.isDefaultPrevented()) return;
                b.trigger("focus").attr("aria-expanded", "true");
                g.toggleClass("open").trigger(c.Event("shown.bs.dropdown", f))
            }
            return !1
        }
    };
    g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var g = c(this);
            b.preventDefault();
            b.stopPropagation();
            if (!g.is(".disabled, :disabled")) {
                var f = d(g), e = f.hasClass("open");
                if (!e && 27 != b.which || e && 27 == b.which) return 27 == b.which && f.find(a).trigger("focus"), g.trigger("click");
                g = f.find(".dropdown-menu li:not(.disabled):visible a");
                g.length && (f = g.index(b.target), 38 == b.which && 0 < f && f--, 40 == b.which && f < g.length - 1 && f++, ~f || (f = 0), g.eq(f).trigger("focus"))
            }
        }
    };
    var f = c.fn.dropdown;
    c.fn.dropdown = function (a) {
        return this.each(function () {
            var b = c(this), f = b.data("bs.dropdown");
            f || b.data("bs.dropdown", f = new g(this));
            "string" == typeof a && f[a].call(b)
        })
    };
    c.fn.dropdown.Constructor = g;
    c.fn.dropdown.noConflict = function () {
        c.fn.dropdown = f;
        return this
    };
    c(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, g.prototype.toggle).on("keydown.bs.dropdown.data-api", a, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery);
+function (c) {
    function d(a, b) {
        return this.each(function () {
            var f = c(this), h = f.data("bs.modal"), d = c.extend({}, e.DEFAULTS, f.data(), "object" == typeof a && a);
            h || f.data("bs.modal", h = new e(this, d));
            if ("string" == typeof a) h[a](b); else d.show && h.show(b)
        })
    }

    var e = function (a, b) {
        this.options = b;
        this.$body = c(document.body);
        this.$element = c(a);
        this.$dialog = this.$element.find(".modal-dialog");
        this.originalBodyPad = this.isShown = this.$backdrop = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, c.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.VERSION = "3.3.6";
    e.TRANSITION_DURATION = 300;
    e.BACKDROP_TRANSITION_DURATION = 150;
    e.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
    e.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    };
    e.prototype.show = function (a) {
        var b = this, f = c.Event("show.bs.modal", {relatedTarget: a});
        this.$element.trigger(f);
        !this.isShown && !f.isDefaultPrevented() && (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', c.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            b.$element.one("mouseup.dismiss.bs.modal", function (a) {
                c(a.target).is(b.$element) && (b.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var f = c.support.transition && b.$element.hasClass("fade");
            b.$element.parent().length || b.$element.appendTo(b.$body);
            b.$element.show().scrollTop(0);
            b.adjustDialog();
            f && b.$element[0].offsetWidth;
            b.$element.addClass("in");
            b.enforceFocus();
            var d = c.Event("shown.bs.modal", {relatedTarget: a});
            f ? b.$dialog.one("bsTransitionEnd", function () {
                b.$element.trigger("focus").trigger(d)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : b.$element.trigger("focus").trigger(d)
        }))
    };
    e.prototype.hide = function (a) {
        a && a.preventDefault();
        a = c.Event("hide.bs.modal");
        this.$element.trigger(a);
        this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), c(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), c.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", c.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    };
    e.prototype.enforceFocus = function () {
        c(document).off("focusin.bs.modal").on("focusin.bs.modal", c.proxy(function (a) {
            this.$element[0] !== a.target && !this.$element.has(a.target).length && this.$element.trigger("focus")
        }, this))
    };
    e.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", c.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)); else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    e.prototype.resize = function () {
        if (this.isShown) c(window).on("resize.bs.modal", c.proxy(this.handleUpdate, this)); else c(window).off("resize.bs.modal")
    };
    e.prototype.hideModal = function () {
        var a = this;
        this.$element.hide();
        this.backdrop(function () {
            a.$body.removeClass("modal-open");
            a.resetAdjustments();
            a.resetScrollbar();
            a.$element.trigger("hidden.bs.modal")
        })
    };
    e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    e.prototype.backdrop = function (a) {
        var b = this, f = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var h = c.support.transition && f;
            this.$backdrop = c(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", c.proxy(function (a) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this));
            h && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            a && (h ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a())
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), f = function () {
            b.removeBackdrop();
            a && a()
        }, c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : f()) : a && a()
    };
    e.prototype.handleUpdate = function () {
        this.adjustDialog()
    };
    e.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        });
        a = c(this.$element[0]).find(".modal-dialog");
        a.css({"margin-left": -a.width() / 2 + "px"});
        a.css({"margin-top": -a.height() / 2 + "px"})
    };
    e.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    };
    e.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        a || (a = document.documentElement.getBoundingClientRect(), a = a.right - Math.abs(a.left));
        this.bodyIsOverflowing = document.body.clientWidth < a;
        this.scrollbarWidth = this.measureScrollbar()
    };
    e.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", "")
    };
    e.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    };
    e.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure";
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        this.$body[0].removeChild(a);
        return b
    };
    var b = c.fn.modal;
    c.fn.modal = d;
    c.fn.modal.Constructor = e;
    c.fn.modal.noConflict = function () {
        c.fn.modal = b;
        return this
    };
    c(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (a) {
        var b = c(this), f = b.attr("href"), h = c(b.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            f = h.data("bs.modal") ? "toggle" : c.extend({remote: !/#/.test(f) && f}, h.data(), b.data());
        b.is("a") && a.preventDefault();
        h.one("show.bs.modal", function (a) {
            if (!a.isDefaultPrevented()) h.one("hidden.bs.modal", function () {
                b.is(":visible") && b.trigger("focus")
            })
        });
        d.call(h, f, this)
    })
}(jQuery);
+function (c) {
    var d = function (b, a) {
        this.inState = this.$element = this.hoverState = this.timeout = this.enabled = this.options = this.type = null;
        this.init("tooltip", b, a)
    };
    d.VERSION = "3.3.6";
    d.TRANSITION_DURATION = 150;
    d.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    };
    d.prototype.init = function (b, a, g) {
        this.enabled = !0;
        this.type = b;
        this.$element = c(a);
        this.options = this.getOptions(g);
        this.$viewport = this.options.viewport && c(c.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {click: !1, hover: !1, focus: !1};
        if (this.$element[0] instanceof document.constructor && !this.options.selector) throw Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        b = this.options.trigger.split(" ");
        for (a = b.length; a--;) if (g = b[a], "click" == g) this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this)); else if ("manual" != g) {
            var f = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(("hover" == g ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, c.proxy(this.enter, this));
            this.$element.on(f + "." + this.type, this.options.selector, c.proxy(this.leave, this))
        }
        this.options.selector ? this._options = c.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    d.prototype.getDefaults = function () {
        return d.DEFAULTS
    };
    d.prototype.getOptions = function (b) {
        b = c.extend({}, this.getDefaults(), this.$element.data(), b);
        b.delay && "number" == typeof b.delay && (b.delay = {show: b.delay, hide: b.delay});
        return b
    };
    d.prototype.getDelegateOptions = function () {
        var b = {}, a = this.getDefaults();
        this._options && c.each(this._options, function (c, f) {
            a[c] != f && (b[c] = f)
        });
        return b
    };
    d.prototype.enter = function (b) {
        var a = b instanceof this.constructor ? b : c(b.currentTarget).data("bs." + this.type);
        a || (a = new this.constructor(b.currentTarget, this.getDelegateOptions()), c(b.currentTarget).data("bs." + this.type, a));
        b instanceof c.Event && (a.inState["focusin" == b.type ? "focus" : "hover"] = !0);
        if (a.tip().hasClass("in") || "in" == a.hoverState) a.hoverState = "in"; else {
            clearTimeout(a.timeout);
            a.hoverState = "in";
            if (!a.options.delay || !a.options.delay.show) return a.show();
            a.timeout = setTimeout(function () {
                "in" == a.hoverState && a.show()
            }, a.options.delay.show)
        }
    };
    d.prototype.isInStateTrue = function () {
        for (var b in this.inState) if (this.inState[b]) return !0;
        return !1
    };
    d.prototype.leave = function (b) {
        var a = b instanceof this.constructor ? b : c(b.currentTarget).data("bs." + this.type);
        a || (a = new this.constructor(b.currentTarget, this.getDelegateOptions()), c(b.currentTarget).data("bs." + this.type, a));
        b instanceof c.Event && (a.inState["focusout" == b.type ? "focus" : "hover"] = !1);
        if (!a.isInStateTrue()) {
            clearTimeout(a.timeout);
            a.hoverState = "out";
            if (!a.options.delay || !a.options.delay.hide) return a.hide();
            a.timeout = setTimeout(function () {
                "out" == a.hoverState && a.hide()
            }, a.options.delay.hide)
        }
    };
    d.prototype.show = function () {
        var b = c.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var a = c.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (!b.isDefaultPrevented() && a) {
                var g = this, b = this.tip(), a = this.getUID(this.type);
                this.setContent();
                b.attr("id", a);
                this.$element.attr("aria-describedby", a);
                this.options.animation && b.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement,
                    f = /\s?auto?\s?/i, h = f.test(a);
                h && (a = a.replace(f, "") || "top");
                b.detach().css({top: 0, left: 0, display: "block"}).addClass(a).data("bs." + this.type, this);
                this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element);
                this.$element.trigger("inserted.bs." + this.type);
                var f = this.getPosition(), e = b[0].offsetWidth, k = b[0].offsetHeight;
                if (h) {
                    var h = a, i = this.getPosition(this.$viewport),
                        a = "bottom" == a && f.bottom + k > i.bottom ? "top" : "top" == a && f.top - k < i.top ? "bottom" : "right" == a && f.right + e > i.width ? "left" : "left" == a && f.left - e < i.left ? "right" : a;
                    b.removeClass(h).addClass(a)
                }
                f = this.getCalculatedOffset(a, f, e, k);
                this.applyPlacement(f, a);
                a = function () {
                    var a = g.hoverState;
                    g.$element.trigger("shown.bs." + g.type);
                    g.hoverState = null;
                    "out" == a && g.leave(g)
                };
                c.support.transition && this.$tip.hasClass("fade") ? b.one("bsTransitionEnd", a).emulateTransitionEnd(d.TRANSITION_DURATION) : a()
            }
        }
    };
    d.prototype.applyPlacement = function (b, a) {
        var g = this.tip(), f = g[0].offsetWidth, h = g[0].offsetHeight, d = parseInt(g.css("margin-top"), 10),
            e = parseInt(g.css("margin-left"), 10);
        isNaN(d) && (d = 0);
        isNaN(e) && (e = 0);
        b.top += d;
        b.left += e;
        c.offset.setOffset(g[0], c.extend({
            using: function (a) {
                g.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0);
        g.addClass("in");
        var e = g[0].offsetWidth, i = g[0].offsetHeight;
        "top" == a && i != h && (b.top = b.top + h - i);
        var l = this.getViewportAdjustedDelta(a, b, e, i);
        l.left ? b.left += l.left : b.top += l.top;
        f = (d = /top|bottom/.test(a)) ? 2 * l.left - f + e : 2 * l.top - h + i;
        h = d ? "offsetWidth" : "offsetHeight";
        g.offset(b);
        this.replaceArrow(f, g[0][h], d)
    };
    d.prototype.replaceArrow = function (b, a, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - b / a) + "%").css(c ? "top" : "left", "")
    };
    d.prototype.setContent = function () {
        var b = this.tip(), a = this.getTitle();
        b.find(".tooltip-inner")[this.options.html ? "html" : "text"](a);
        b.removeClass("fade in top bottom left right")
    };
    d.prototype.hide = function (b) {
        function a() {
            "in" != g.hoverState && f.detach();
            g.$element.removeAttr("aria-describedby").trigger("hidden.bs." + g.type);
            b && b()
        }

        var g = this, f = c(this.$tip), h = c.Event("hide.bs." + this.type);
        this.$element.trigger(h);
        if (!h.isDefaultPrevented()) return f.removeClass("in"), c.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", a).emulateTransitionEnd(d.TRANSITION_DURATION) : a(), this.hoverState = null, this
    };
    d.prototype.fixTitle = function () {
        var b = this.$element;
        if (b.attr("title") || "string" != typeof b.attr("data-original-title")) b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    };
    d.prototype.hasContent = function () {
        return this.getTitle()
    };
    d.prototype.getPosition = function (b) {
        var b = b || this.$element, a = b[0], g = "BODY" == a.tagName, a = a.getBoundingClientRect();
        null == a.width && (a = c.extend({}, a, {width: a.right - a.left, height: a.bottom - a.top}));
        var f = g ? {top: 0, left: 0} : b.offset(),
            b = {scroll: g ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
            g = g ? {width: c(window).width(), height: c(window).height()} : null;
        return c.extend({}, a, b, g, f)
    };
    d.prototype.getCalculatedOffset = function (b, a, c, f) {
        return "bottom" == b ? {
            top: a.top + a.height,
            left: a.left + a.width / 2 - c / 2
        } : "top" == b ? {
            top: a.top - f,
            left: a.left + a.width / 2 - c / 2
        } : "left" == b ? {top: a.top + a.height / 2 - f / 2, left: a.left - c} : {
            top: a.top + a.height / 2 - f / 2,
            left: a.left + a.width
        }
    };
    d.prototype.getViewportAdjustedDelta = function (b, a, c, f) {
        var h = {top: 0, left: 0};
        if (!this.$viewport) return h;
        var d = this.options.viewport && this.options.viewport.padding || 0, e = this.getPosition(this.$viewport);
        /right|left/.test(b) ? (c = a.top - d - e.scroll, a = a.top + d - e.scroll + f, c < e.top ? h.top = e.top - c : a > e.top + e.height && (h.top = e.top + e.height - a)) : (f = a.left - d, a = a.left + d + c, f < e.left ? h.left = e.left - f : a > e.right && (h.left = e.left + e.width - a));
        return h
    };
    d.prototype.getTitle = function () {
        var b = this.$element, a = this.options;
        return b.attr("data-original-title") || ("function" == typeof a.title ? a.title.call(b[0]) : a.title)
    };
    d.prototype.getUID = function (b) {
        do b += ~~(1E6 * Math.random()); while (document.getElementById(b));
        return b
    };
    d.prototype.tip = function () {
        if (!this.$tip && (this.$tip = c(this.options.template), 1 != this.$tip.length)) throw Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    d.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    d.prototype.enable = function () {
        this.enabled = !0
    };
    d.prototype.disable = function () {
        this.enabled = !1
    };
    d.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    };
    d.prototype.toggle = function (b) {
        var a = this;
        b && (a = c(b.currentTarget).data("bs." + this.type), a || (a = new this.constructor(b.currentTarget, this.getDelegateOptions()), c(b.currentTarget).data("bs." + this.type, a)));
        b ? (a.inState.click = !a.inState.click, a.isInStateTrue() ? a.enter(a) : a.leave(a)) : a.tip().hasClass("in") ? a.leave(a) : a.enter(a)
    };
    d.prototype.destroy = function () {
        var b = this;
        clearTimeout(this.timeout);
        this.hide(function () {
            b.$element.off("." + b.type).removeData("bs." + b.type);
            b.$tip && b.$tip.detach();
            b.$tip = null;
            b.$arrow = null;
            b.$viewport = null
        })
    };
    var e = c.fn.tooltip;
    c.fn.tooltip = function (b) {
        return this.each(function () {
            var a = c(this), g = a.data("bs.tooltip"), f = "object" == typeof b && b;
            if (g || !/destroy|hide/.test(b)) if (g || a.data("bs.tooltip", g = new d(this, f)), "string" == typeof b) g[b]()
        })
    };
    c.fn.tooltip.Constructor = d;
    c.fn.tooltip.noConflict = function () {
        c.fn.tooltip = e;
        return this
    }
}(jQuery);
+function (c) {
    var d = function (b, a) {
        this.init("popover", b, a)
    };
    if (!c.fn.tooltip) throw Error("Popover requires tooltip.js");
    d.VERSION = "3.3.6";
    d.DEFAULTS = c.extend({}, c.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    d.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype);
    d.prototype.constructor = d;
    d.prototype.getDefaults = function () {
        return d.DEFAULTS
    };
    d.prototype.setContent = function () {
        var b = this.tip(), a = this.getTitle(), c = this.getContent();
        b.find(".popover-title")[this.options.html ? "html" : "text"](a);
        b.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c);
        b.removeClass("fade top bottom left right in");
        b.find(".popover-title").html() || b.find(".popover-title").hide()
    };
    d.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    };
    d.prototype.getContent = function () {
        var b = this.$element, a = this.options;
        return b.attr("data-content") || ("function" == typeof a.content ? a.content.call(b[0]) : a.content)
    };
    d.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var e = c.fn.popover;
    c.fn.popover = function (b) {
        return this.each(function () {
            var a = c(this), g = a.data("bs.popover"), f = "object" == typeof b && b;
            if (g || !/destroy|hide/.test(b)) if (g || a.data("bs.popover", g = new d(this, f)), "string" == typeof b) g[b]()
        })
    };
    c.fn.popover.Constructor = d;
    c.fn.popover.noConflict = function () {
        c.fn.popover = e;
        return this
    }
}(jQuery);
+function (c) {
    function d(a, b) {
        this.$body = c(document.body);
        this.$scrollElement = c(a).is(document.body) ? c(window) : c(a);
        this.options = c.extend({}, d.DEFAULTS, b);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", c.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function e(a) {
        return this.each(function () {
            var b = c(this), f = b.data("bs.scrollspy"), e = "object" == typeof a && a;
            f || b.data("bs.scrollspy", f = new d(this, e));
            if ("string" == typeof a) f[a]()
        })
    }

    d.VERSION = "3.3.6";
    d.DEFAULTS = {offset: 10};
    d.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    d.prototype.refresh = function () {
        var a = this, b = "offset", f = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        c.isWindow(this.$scrollElement[0]) || (b = "position", f = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function () {
            var a = c(this), a = a.data("target") || a.attr("href"), e = /^#./.test(a) && c(a);
            return e && e.length && e.is(":visible") && [[e[b]().top + f, a]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            a.offsets.push(this[0]);
            a.targets.push(this[1])
        })
    };
    d.prototype.process = function () {
        var a = this.$scrollElement.scrollTop() + this.options.offset, b = this.getScrollHeight(),
            c = this.options.offset + b - this.$scrollElement.height(), e = this.offsets, d = this.targets,
            k = this.activeTarget, i;
        this.scrollHeight != b && this.refresh();
        if (a >= c) return k != (i = d[d.length - 1]) && this.activate(i);
        if (k && a < e[0]) return this.activeTarget = null, this.clear();
        for (i = e.length; i--;) k != d[i] && a >= e[i] && (void 0 === e[i + 1] || a < e[i + 1]) && this.activate(d[i])
    };
    d.prototype.activate = function (a) {
        this.activeTarget = a;
        this.clear();
        a = c(this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]').parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active"));
        a.trigger("activate.bs.scrollspy")
    };
    d.prototype.clear = function () {
        c(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var b = c.fn.scrollspy;
    c.fn.scrollspy = e;
    c.fn.scrollspy.Constructor = d;
    c.fn.scrollspy.noConflict = function () {
        c.fn.scrollspy = b;
        return this
    };
    c(window).on("load.bs.scrollspy.data-api", function () {
        c('[data-spy="scroll"]').each(function () {
            var a = c(this);
            e.call(a, a.data())
        })
    })
}(jQuery);
+function (c) {
    function d(a) {
        return this.each(function () {
            var b = c(this), d = b.data("bs.tab");
            d || b.data("bs.tab", d = new e(this));
            if ("string" == typeof a) d[a]()
        })
    }

    var e = function (a) {
        this.element = c(a)
    };
    e.VERSION = "3.3.6";
    e.TRANSITION_DURATION = 150;
    e.prototype.show = function () {
        var a = this.element, b = a.closest("ul:not(.dropdown-menu)"), e = a.data("target");
        e || (e = (e = a.attr("href")) && e.replace(/.*(?=#[^\s]*$)/, ""));
        if (!a.parent("li").hasClass("active")) {
            var d = b.find(".active:last a"), k = c.Event("hide.bs.tab", {relatedTarget: a[0]}),
                i = c.Event("show.bs.tab", {relatedTarget: d[0]});
            d.trigger(k);
            a.trigger(i);
            !i.isDefaultPrevented() && !k.isDefaultPrevented() && (e = c(e), this.activate(a.closest("li"), b), this.activate(e, e.parent(), function () {
                d.trigger({type: "hidden.bs.tab", relatedTarget: a[0]});
                a.trigger({type: "shown.bs.tab", relatedTarget: d[0]})
            }))
        }
    };
    e.prototype.activate = function (a, b, d) {
        function j() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            i ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade");
            a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            d && d()
        }

        var k = b.find("> .active"),
            i = d && c.support.transition && (k.length && k.hasClass("fade") || !!b.find("> .fade").length);
        k.length && i ? k.one("bsTransitionEnd", j).emulateTransitionEnd(e.TRANSITION_DURATION) : j();
        k.removeClass("in")
    };
    var b = c.fn.tab;
    c.fn.tab = d;
    c.fn.tab.Constructor = e;
    c.fn.tab.noConflict = function () {
        c.fn.tab = b;
        return this
    };
    var a = function (a) {
        a.preventDefault();
        d.call(c(this), "show")
    };
    c(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery);
+function (c) {
    function d(a) {
        return this.each(function () {
            var b = c(this), f = b.data("bs.affix"), d = "object" == typeof a && a;
            f || b.data("bs.affix", f = new e(this, d));
            if ("string" == typeof a) f[a]()
        })
    }

    var e = function (a, b) {
        this.options = c.extend({}, e.DEFAULTS, b);
        this.$target = c(this.options.target).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this));
        this.$element = c(a);
        this.pinnedOffset = this.unpin = this.affixed = null;
        this.checkPosition()
    };
    e.VERSION = "3.3.6";
    e.RESET = "affix affix-top affix-bottom";
    e.DEFAULTS = {offset: 0, target: window};
    e.prototype.getState = function (a, b, c, e) {
        var d = this.$target.scrollTop(), k = this.$element.offset(), i = this.$target.height();
        if (null != c && "top" == this.affixed) return d < c ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? d + this.unpin <= k.top ? !1 : "bottom" : d + i <= a - e ? !1 : "bottom";
        var l = null == this.affixed, k = l ? d : k.top;
        return null != c && d <= c ? "top" : null != e && k + (l ? i : b) >= a - e ? "bottom" : !1
    };
    e.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var a = this.$target.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - a
    };
    e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(c.proxy(this.checkPosition, this), 1)
    };
    e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(), b = this.options.offset, d = b.top, h = b.bottom,
                j = Math.max(c(document).height(), c(document.body).height());
            "object" != typeof b && (h = d = b);
            "function" == typeof d && (d = b.top(this.$element));
            "function" == typeof h && (h = b.bottom(this.$element));
            b = this.getState(j, a, d, h);
            if (this.affixed != b) {
                null != this.unpin && this.$element.css("top", "");
                var d = "affix" + (b ? "-" + b : ""), k = c.Event(d + ".bs.affix");
                this.$element.trigger(k);
                if (k.isDefaultPrevented()) return;
                this.affixed = b;
                this.unpin = "bottom" == b ? this.getPinnedOffset() : null;
                this.$element.removeClass(e.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == b && this.$element.offset({top: j - a - h})
        }
    };
    var b = c.fn.affix;
    c.fn.affix = d;
    c.fn.affix.Constructor = e;
    c.fn.affix.noConflict = function () {
        c.fn.affix = b;
        return this
    };
    c(window).on("load", function () {
        c('[data-spy="affix"]').each(function () {
            var a = c(this), b = a.data();
            b.offset = b.offset || {};
            null != b.offsetBottom && (b.offset.bottom = b.offsetBottom);
            null != b.offsetTop && (b.offset.top = b.offsetTop);
            d.call(a, b)
        })
    })
}(jQuery);

/* bootstrap-dialog.min.js */
!function (t, e) {
    "use strict";
    if ("undefined" != typeof module && module.exports) {
        var n = "undefined" != typeof process,
            o = n && "electron" in process.versions;
        o ? t.BootstrapDialog = e(t.jQuery) : module.exports = e(require("jquery"), require("bootstrap"))
    } else "function" == typeof define && define.amd ? define("bootstrap-dialog", ["jquery", "bootstrap"], function (t) {
        return e(t)
    }) : t.BootstrapDialog = e(t.jQuery)
}(this, function (t) {
    "use strict";
    var e = t.fn.modal.Constructor,
        n = function (t, n) {
            e.call(this, t, n)
        };
    n.getModalVersion = function () {
        var e = null;
        return e = "undefined" == typeof t.fn.modal.Constructor.VERSION ? "v3.1" : /3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION) ? "v3.2" : /3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION) ? "v3.3" : "v3.3.4"
    }, n.ORIGINAL_BODY_PADDING = parseInt(t("body").css("padding-right") || 0, 10), n.METHODS_TO_OVERRIDE = {}, n.METHODS_TO_OVERRIDE["v3.1"] = {}, n.METHODS_TO_OVERRIDE["v3.2"] = {
        hide: function (e) {
            if (e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented()) {
                this.isShown = !1;
                var n = this.getGlobalOpenedDialogs();
                0 === n.length && this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
            }
        }
    }, n.METHODS_TO_OVERRIDE["v3.3"] = {
        setScrollbar: function () {
            var t = n.ORIGINAL_BODY_PADDING;
            this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        },
        resetScrollbar: function () {
            var t = this.getGlobalOpenedDialogs();
            0 === t.length && this.$body.css("padding-right", n.ORIGINAL_BODY_PADDING)
        },
        hideModal: function () {
            this.$element.hide(), this.backdrop(t.proxy(function () {
                var t = this.getGlobalOpenedDialogs();
                0 === t.length && this.$body.removeClass("modal-open"), this.resetAdjustments(), this.resetScrollbar(), this.$element.trigger("hidden.bs.modal")
            }, this))
        }
    }, n.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, n.METHODS_TO_OVERRIDE["v3.3"]), n.prototype = {
        constructor: n,
        getGlobalOpenedDialogs: function () {
            var e = [];
            return t.each(o.dialogs, function (t, n) {
                n.isRealized() && n.isOpened() && e.push(n)
            }), e
        }
    }, n.prototype = t.extend(n.prototype, e.prototype, n.METHODS_TO_OVERRIDE[n.getModalVersion()]);
    var o = function (e) {
        this.defaultOptions = t.extend(!0, {
            id: o.newGuid(),
            buttons: [],
            data: {},
            onshow: null,
            onshown: null,
            onhide: null,
            onhidden: null
        }, o.defaultOptions), this.indexedButtons = {}, this.registeredButtonHotkeys = {}, this.draggableData = {
            isMouseDown: !1,
            mouseOffset: {}
        }, this.realized = !1, this.opened = !1, this.initOptions(e), this.holdThisInstance()
    };
    return o.BootstrapDialogModal = n, o.NAMESPACE = "bootstrap-dialog", o.TYPE_DEFAULT = "type-default", o.TYPE_INFO = "type-info", o.TYPE_PRIMARY = "type-primary", o.TYPE_SUCCESS = "type-success", o.TYPE_WARNING = "type-warning", o.TYPE_DANGER = "type-danger", o.DEFAULT_TEXTS = {}, o.DEFAULT_TEXTS[o.TYPE_DEFAULT] = "Information", o.DEFAULT_TEXTS[o.TYPE_INFO] = "Information", o.DEFAULT_TEXTS[o.TYPE_PRIMARY] = "Information", o.DEFAULT_TEXTS[o.TYPE_SUCCESS] = "Success", o.DEFAULT_TEXTS[o.TYPE_WARNING] = "Warning", o.DEFAULT_TEXTS[o.TYPE_DANGER] = "Danger", o.DEFAULT_TEXTS.OK = "OK", o.DEFAULT_TEXTS.CANCEL = "Cancel", o.DEFAULT_TEXTS.CONFIRM = "Confirmation", o.SIZE_NORMAL = "size-normal", o.SIZE_SMALL = "size-small", o.SIZE_WIDE = "size-wide", o.SIZE_LARGE = "size-large", o.BUTTON_SIZES = {}, o.BUTTON_SIZES[o.SIZE_NORMAL] = "", o.BUTTON_SIZES[o.SIZE_SMALL] = "", o.BUTTON_SIZES[o.SIZE_WIDE] = "", o.BUTTON_SIZES[o.SIZE_LARGE] = "btn-lg", o.ICON_SPINNER = "glyphicon glyphicon-asterisk", o.defaultOptions = {
        type: o.TYPE_PRIMARY,
        size: o.SIZE_NORMAL,
        cssClass: "",
        title: null,
        message: null,
        nl2br: !0,
        closable: !0,
        closeByBackdrop: !0,
        closeByKeyboard: !0,
        spinicon: o.ICON_SPINNER,
        autodestroy: !0,
        draggable: !1,
        animate: !0,
        description: "",
        tabindex: -1
    }, o.configDefaultOptions = function (e) {
        o.defaultOptions = t.extend(!0, o.defaultOptions, e)
    }, o.dialogs = {}, o.openAll = function () {
        t.each(o.dialogs, function (t, e) {
            e.open()
        })
    }, o.closeAll = function () {
        t.each(o.dialogs, function (t, e) {
            e.close()
        })
    }, o.getDialog = function (t) {
        var e = null;
        return "undefined" != typeof o.dialogs[t] && (e = o.dialogs[t]), e
    }, o.setDialog = function (t) {
        return o.dialogs[t.getId()] = t, t
    }, o.addDialog = function (t) {
        return o.setDialog(t)
    }, o.moveFocus = function () {
        var e = null;
        t.each(o.dialogs, function (t, n) {
            e = n
        }), null !== e && e.isRealized() && e.getModal().focus()
    }, o.METHODS_TO_OVERRIDE = {}, o.METHODS_TO_OVERRIDE["v3.1"] = {
        handleModalBackdropEvent: function () {
            return this.getModal().on("click", {
                dialog: this
            }, function (t) {
                t.target === this && t.data.dialog.isClosable() && t.data.dialog.canCloseByBackdrop() && t.data.dialog.close()
            }), this
        },
        updateZIndex: function () {
            var e = 1040,
                n = 1050,
                i = 0;
            t.each(o.dialogs, function (t, e) {
                i++
            });
            var s = this.getModal(),
                a = s.data("bs.modal").$backdrop;
            return s.css("z-index", n + 20 * (i - 1)), a.css("z-index", e + 20 * (i - 1)), this
        },
        open: function () {
            return !this.isRealized() && this.realize(), this.getModal().modal("show"), this.updateZIndex(), this
        }
    }, o.METHODS_TO_OVERRIDE["v3.2"] = {
        handleModalBackdropEvent: o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,
        updateZIndex: o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,
        open: o.METHODS_TO_OVERRIDE["v3.1"].open
    }, o.METHODS_TO_OVERRIDE["v3.3"] = {}, o.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, o.METHODS_TO_OVERRIDE["v3.1"]), o.prototype = {
        constructor: o,
        initOptions: function (e) {
            return this.options = t.extend(!0, this.defaultOptions, e), this
        },
        holdThisInstance: function () {
            return o.addDialog(this), this
        },
        initModalStuff: function () {
            return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()), this.getModal().append(this.getModalDialog()), this.getModalDialog().append(this.getModalContent()), this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()), this
        },
        createModal: function () {
            var e = t('<div class="modal" role="dialog" aria-hidden="true"></div>');
            return e.prop("id", this.getId()), e.attr("aria-labelledby", this.getId() + "_title"), e
        },
        getModal: function () {
            return this.$modal
        },
        setModal: function (t) {
            return this.$modal = t, this
        },
        createModalDialog: function () {
            return t('<div class="modal-dialog"></div>')
        },
        getModalDialog: function () {
            return this.$modalDialog
        },
        setModalDialog: function (t) {
            return this.$modalDialog = t, this
        },
        createModalContent: function () {
            return t('<div class="modal-content"></div>')
        },
        getModalContent: function () {
            return this.$modalContent
        },
        setModalContent: function (t) {
            return this.$modalContent = t, this
        },
        createModalHeader: function () {
            return t('<div class="modal-header"></div>')
        },
        getModalHeader: function () {
            return this.$modalHeader
        },
        setModalHeader: function (t) {
            return this.$modalHeader = t, this
        },
        createModalBody: function () {
            return t('<div class="modal-body"></div>')
        },
        getModalBody: function () {
            return this.$modalBody
        },
        setModalBody: function (t) {
            return this.$modalBody = t, this
        },
        createModalFooter: function () {
            return t('<div class="modal-footer"></div>')
        },
        getModalFooter: function () {
            return this.$modalFooter
        },
        setModalFooter: function (t) {
            return this.$modalFooter = t, this
        },
        createDynamicContent: function (t) {
            var e = null;
            return e = "function" == typeof t ? t.call(t, this) : t, "string" == typeof e && (e = this.formatStringContent(e)), e
        },
        formatStringContent: function (t) {
            return this.options.nl2br ? t.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />") : t
        },
        setData: function (t, e) {
            return this.options.data[t] = e, this
        },
        getData: function (t) {
            return this.options.data[t]
        },
        setId: function (t) {
            return this.options.id = t, this
        },
        getId: function () {
            return this.options.id
        },
        getType: function () {
            return this.options.type
        },
        setType: function (t) {
            return this.options.type = t, this.updateType(), this
        },
        updateType: function () {
            if (this.isRealized()) {
                var t = [o.TYPE_DEFAULT, o.TYPE_INFO, o.TYPE_PRIMARY, o.TYPE_SUCCESS, o.TYPE_WARNING, o.TYPE_DANGER];
                this.getModal().removeClass(t.join(" ")).addClass(this.getType())
            }
            return this
        },
        getSize: function () {
            return this.options.size
        },
        setSize: function (t) {
            return this.options.size = t, this.updateSize(), this
        },
        updateSize: function () {
            if (this.isRealized()) {
                var e = this;
                this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE), this.getModal().addClass(this.getSize()), this.getModalDialog().removeClass("modal-sm"), this.getSize() === o.SIZE_SMALL && this.getModalDialog().addClass("modal-sm"), this.getModalDialog().removeClass("modal-lg"), this.getSize() === o.SIZE_WIDE && this.getModalDialog().addClass("modal-lg"), t.each(this.options.buttons, function (n, o) {
                    var i = e.getButton(o.id),
                        s = ["btn-lg", "btn-sm", "btn-xs"],
                        a = !1;
                    if ("string" == typeof o.cssClass) {
                        var d = o.cssClass.split(" ");
                        t.each(d, function (e, n) {
                            -1 !== t.inArray(n, s) && (a = !0)
                        })
                    }
                    a || (i.removeClass(s.join(" ")), i.addClass(e.getButtonSize()))
                })
            }
            return this
        },
        getCssClass: function () {
            return this.options.cssClass
        },
        setCssClass: function (t) {
            return this.options.cssClass = t, this
        },
        getTitle: function () {
            return this.options.title
        },
        setTitle: function (t) {
            return this.options.title = t, this.updateTitle(), this
        },
        updateTitle: function () {
            if (this.isRealized()) {
                var t = null !== this.getTitle() ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
                this.getModalHeader().find("." + this.getNamespace("title")).html("").append(t).prop("id", this.getId() + "_title")
            }
            return this
        },
        getMessage: function () {
            return this.options.message
        },
        setMessage: function (t) {
            return this.options.message = t, this.updateMessage(), this
        },
        updateMessage: function () {
            if (this.isRealized()) {
                var t = this.createDynamicContent(this.getMessage());
                this.getModalBody().find("." + this.getNamespace("message")).html("").append(t)
            }
            return this
        },
        isClosable: function () {
            return this.options.closable
        },
        setClosable: function (t) {
            return this.options.closable = t, this.updateClosable(), this
        },
        setCloseByBackdrop: function (t) {
            return this.options.closeByBackdrop = t, this
        },
        canCloseByBackdrop: function () {
            return this.options.closeByBackdrop
        },
        setCloseByKeyboard: function (t) {
            return this.options.closeByKeyboard = t, this
        },
        canCloseByKeyboard: function () {
            return this.options.closeByKeyboard
        },
        isAnimate: function () {
            return this.options.animate
        },
        setAnimate: function (t) {
            return this.options.animate = t, this
        },
        updateAnimate: function () {
            return this.isRealized() && this.getModal().toggleClass("fade", this.isAnimate()), this
        },
        getSpinicon: function () {
            return this.options.spinicon
        },
        setSpinicon: function (t) {
            return this.options.spinicon = t, this
        },
        addButton: function (t) {
            return this.options.buttons.push(t), this
        },
        addButtons: function (e) {
            var n = this;
            return t.each(e, function (t, e) {
                n.addButton(e)
            }), this
        },
        getButtons: function () {
            return this.options.buttons
        },
        setButtons: function (t) {
            return this.options.buttons = t, this.updateButtons(), this
        },
        getButton: function (t) {
            return "undefined" != typeof this.indexedButtons[t] ? this.indexedButtons[t] : null
        },
        getButtonSize: function () {
            return "undefined" != typeof o.BUTTON_SIZES[this.getSize()] ? o.BUTTON_SIZES[this.getSize()] : ""
        },
        updateButtons: function () {
            return this.isRealized() && (0 === this.getButtons().length ? this.getModalFooter().hide() : this.getModalFooter().show().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())), this
        },
        isAutodestroy: function () {
            return this.options.autodestroy
        },
        setAutodestroy: function (t) {
            this.options.autodestroy = t
        },
        getDescription: function () {
            return this.options.description
        },
        setDescription: function (t) {
            return this.options.description = t, this
        },
        setTabindex: function (t) {
            return this.options.tabindex = t, this
        },
        getTabindex: function () {
            return this.options.tabindex
        },
        updateTabindex: function () {
            return this.isRealized() && this.getModal().attr("tabindex", this.getTabindex()), this
        },
        getDefaultText: function () {
            return o.DEFAULT_TEXTS[this.getType()]
        },
        getNamespace: function (t) {
            return o.NAMESPACE + "-" + t
        },
        createHeaderContent: function () {
            var e = t("<div></div>");
            return e.addClass(this.getNamespace("header")), e.append(this.createTitleContent()), e.prepend(this.createCloseButton()), e
        },
        createTitleContent: function () {
            var e = t("<div></div>");
            return e.addClass(this.getNamespace("title")), e
        },
        createCloseButton: function () {
            var e = t("<div></div>");
            e.addClass(this.getNamespace("close-button"));
            var n = t('<button class="close">&times;</button>');
            return e.append(n), e.on("click", {
                dialog: this
            }, function (t) {
                t.data.dialog.close()
            }), e
        },
        createBodyContent: function () {
            var e = t("<div></div>");
            return e.addClass(this.getNamespace("body")), e.append(this.createMessageContent()), e
        },
        createMessageContent: function () {
            var e = t("<div></div>");
            return e.addClass(this.getNamespace("message")), e
        },
        createFooterContent: function () {
            var e = t("<div></div>");
            return e.addClass(this.getNamespace("footer")), e
        },
        createFooterButtons: function () {
            var e = this,
                n = t("<div></div>");
            return n.addClass(this.getNamespace("footer-buttons")), this.indexedButtons = {}, t.each(this.options.buttons, function (t, i) {
                i.id || (i.id = o.newGuid());
                var s = e.createButton(i);
                e.indexedButtons[i.id] = s, n.append(s)
            }), n
        },
        createButton: function (e) {
            var n = t('<button class="btn"></button>');
            return n.prop("id", e.id), n.data("button", e), "undefined" != typeof e.icon && "" !== t.trim(e.icon) && n.append(this.createButtonIcon(e.icon)), "undefined" != typeof e.label && n.append(e.label), n.addClass("undefined" != typeof e.cssClass && "" !== t.trim(e.cssClass) ? e.cssClass : "btn-default"), "undefined" != typeof e.hotkey && (this.registeredButtonHotkeys[e.hotkey] = n), n.on("click", {
                dialog: this,
                $button: n,
                button: e
            }, function (t) {
                var e = t.data.dialog,
                    n = t.data.$button,
                    o = n.data("button");
                return o.autospin && n.toggleSpin(!0), "function" == typeof o.action ? o.action.call(n, e, t) : void 0
            }), this.enhanceButton(n), "undefined" != typeof e.enabled && n.toggleEnable(e.enabled), n
        },
        enhanceButton: function (t) {
            return t.dialog = this, t.toggleEnable = function (t) {
                var e = this;
                return "undefined" != typeof t ? e.prop("disabled", !t).toggleClass("disabled", !t) : e.prop("disabled", !e.prop("disabled")), e
            }, t.enable = function () {
                var t = this;
                return t.toggleEnable(!0), t
            }, t.disable = function () {
                var t = this;
                return t.toggleEnable(!1), t
            }, t.toggleSpin = function (e) {
                var n = this,
                    o = n.dialog,
                    i = n.find("." + o.getNamespace("button-icon"));
                return "undefined" == typeof e && (e = !(t.find(".icon-spin").length > 0)), e ? (i.hide(), t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))) : (i.show(), t.find(".icon-spin").remove()), n
            }, t.spin = function () {
                var t = this;
                return t.toggleSpin(!0), t
            }, t.stopSpin = function () {
                var t = this;
                return t.toggleSpin(!1), t
            }, this
        },
        createButtonIcon: function (e) {
            var n = t("<span></span>");
            return n.addClass(this.getNamespace("button-icon")).addClass(e), n
        },
        enableButtons: function (e) {
            return t.each(this.indexedButtons, function (t, n) {
                n.toggleEnable(e)
            }), this
        },
        updateClosable: function () {
            return this.isRealized() && this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable()), this
        },
        onShow: function (t) {
            return this.options.onshow = t, this
        },
        onShown: function (t) {
            return this.options.onshown = t, this
        },
        onHide: function (t) {
            return this.options.onhide = t, this
        },
        onHidden: function (t) {
            return this.options.onhidden = t, this
        },
        isRealized: function () {
            return this.realized
        },
        setRealized: function (t) {
            return this.realized = t, this
        },
        isOpened: function () {
            return this.opened
        },
        setOpened: function (t) {
            return this.opened = t, this
        },
        handleModalEvents: function () {
            return this.getModal().on("show.bs.modal", {
                dialog: this
            }, function (t) {
                var e = t.data.dialog;
                if (e.setOpened(!0), e.isModalEvent(t) && "function" == typeof e.options.onshow) {
                    var n = e.options.onshow(e);
                    return n === !1 && e.setOpened(!1), n
                }
            }), this.getModal().on("shown.bs.modal", {
                dialog: this
            }, function (t) {
                var e = t.data.dialog;
                e.isModalEvent(t) && "function" == typeof e.options.onshown && e.options.onshown(e)
            }), this.getModal().on("hide.bs.modal", {
                dialog: this
            }, function (t) {
                var e = t.data.dialog;
                if (e.setOpened(!1), e.isModalEvent(t) && "function" == typeof e.options.onhide) {
                    var n = e.options.onhide(e);
                    return n === !1 && e.setOpened(!0), n
                }
            }), this.getModal().on("hidden.bs.modal", {
                dialog: this
            }, function (e) {
                var n = e.data.dialog;
                n.isModalEvent(e) && "function" == typeof n.options.onhidden && n.options.onhidden(n), n.isAutodestroy() && (n.setRealized(!1), delete o.dialogs[n.getId()], t(this).remove()), o.moveFocus()
            }), this.handleModalBackdropEvent(), this.getModal().on("keyup", {
                dialog: this
            }, function (t) {
                27 === t.which && t.data.dialog.isClosable() && t.data.dialog.canCloseByKeyboard() && t.data.dialog.close()
            }), this.getModal().on("keyup", {
                dialog: this
            }, function (e) {
                var n = e.data.dialog;
                if ("undefined" != typeof n.registeredButtonHotkeys[e.which]) {
                    var o = t(n.registeredButtonHotkeys[e.which]);
                    !o.prop("disabled") && o.focus().trigger("click")
                }
            }), this
        },
        handleModalBackdropEvent: function () {
            return this.getModal().on("click", {
                dialog: this
            }, function (e) {
                t(e.target).hasClass("modal-backdrop") && e.data.dialog.isClosable() && e.data.dialog.canCloseByBackdrop() && e.data.dialog.close()
            }), this
        },
        isModalEvent: function (t) {
            return "undefined" != typeof t.namespace && "bs.modal" === t.namespace
        },
        makeModalDraggable: function () {
            return this.options.draggable && (this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
                dialog: this
            }, function (t) {
                var e = t.data.dialog;
                e.draggableData.isMouseDown = !0;
                var n = e.getModalDialog().offset();
                e.draggableData.mouseOffset = {
                    top: t.clientY - n.top,
                    left: t.clientX - n.left
                }
            }), this.getModal().on("mouseup mouseleave", {
                dialog: this
            }, function (t) {
                t.data.dialog.draggableData.isMouseDown = !1
            }), t("body").on("mousemove", {
                dialog: this
            }, function (t) {
                var e = t.data.dialog;
                e.draggableData.isMouseDown && e.getModalDialog().offset({
                    top: t.clientY - e.draggableData.mouseOffset.top,
                    left: t.clientX - e.draggableData.mouseOffset.left
                })
            })), this
        },
        realize: function () {
            return this.initModalStuff(), this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()), this.updateSize(), this.getDescription() && this.getModal().attr("aria-describedby", this.getDescription()), this.getModalFooter().append(this.createFooterContent()), this.getModalHeader().append(this.createHeaderContent()), this.getModalBody().append(this.createBodyContent()), this.getModal().data("bs.modal", new n(this.getModal(), {
                backdrop: "static",
                keyboard: !1,
                show: !1
            })), this.makeModalDraggable(), this.handleModalEvents(), this.setRealized(!0), this.updateButtons(), this.updateType(), this.updateTitle(), this.updateMessage(), this.updateClosable(), this.updateAnimate(), this.updateSize(), this.updateTabindex(), this
        },
        open: function () {
            return !this.isRealized() && this.realize(), this.getModal().modal("show"), this
        },
        close: function () {
            return !this.isRealized() && this.realize(), this.getModal().modal("hide"), this
        }
    }, o.prototype = t.extend(o.prototype, o.METHODS_TO_OVERRIDE[n.getModalVersion()]), o.newGuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var e = 16 * Math.random() | 0,
                n = "x" === t ? e : 3 & e | 8;
            return n.toString(16)
        })
    }, o.show = function (t) {
        return new o(t).open()
    }, o.alert = function () {
        var e = {},
            n = {
                type: o.TYPE_PRIMARY,
                title: null,
                message: null,
                closable: !1,
                draggable: !1,
                buttonLabel: o.DEFAULT_TEXTS.OK,
                callback: null
            };
        return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
            message: arguments[0],
            callback: "undefined" != typeof arguments[1] ? arguments[1] : null
        }), new o({
            type: e.type,
            title: e.title,
            message: e.message,
            closable: e.closable,
            draggable: e.draggable,
            data: {
                callback: e.callback
            },
            onhide: function (t) {
                !t.getData("btnClicked") && t.isClosable() && "function" == typeof t.getData("callback") && t.getData("callback")(!1)
            },
            buttons: [{
                label: e.buttonLabel,
                action: function (t) {
                    return t.setData("btnClicked", !0), "function" == typeof t.getData("callback") && t.getData("callback").call(this, !0) === !1 ? !1 : t.close()
                }
            }]
        }).open()
    }, o.confirm = function () {
        var e = {},
            n = {
                type: o.TYPE_PRIMARY,
                title: null,
                message: null,
                closable: !1,
                draggable: !1,
                btnCancelLabel: o.DEFAULT_TEXTS.CANCEL,
                btnOKLabel: o.DEFAULT_TEXTS.OK,
                btnOKClass: null,
                callback: null
            };
        return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
            message: arguments[0],
            closable: !1,
            buttonLabel: o.DEFAULT_TEXTS.OK,
            callback: "undefined" != typeof arguments[1] ? arguments[1] : null
        }), null === e.btnOKClass && (e.btnOKClass = ["btn", e.type.split("-")[1]].join("-")), new o({
            type: e.type,
            title: e.title,
            message: e.message,
            closable: e.closable,
            draggable: e.draggable,
            data: {
                callback: e.callback
            },
            buttons: [{
                label: e.btnCancelLabel,
                action: function (t) {
                    return "function" == typeof t.getData("callback") && t.getData("callback").call(this, !1) === !1 ? !1 : t.close()
                }
            }, {
                label: e.btnOKLabel,
                cssClass: e.btnOKClass,
                action: function (t) {
                    return "function" == typeof t.getData("callback") && t.getData("callback").call(this, !0) === !1 ? !1 : t.close()
                }
            }]
        }).open()
    }, o.warning = function (t, e) {
        return new o({
            type: o.TYPE_WARNING,
            message: t
        }).open()
    }, o.danger = function (t, e) {
        return new o({
            type: o.TYPE_DANGER,
            message: t
        }).open()
    }, o.success = function (t, e) {
        return new o({
            type: o.TYPE_SUCCESS,
            message: t
        }).open()
    }, o
});

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Combinatorics = factory();
    }
}(this, function () {
    'use strict';
    var version = "0.5.2";
    /* combinatory arithmetics */
    var P = function (m, n) {
        var p = 1;
        while (n--) p *= m--;
        return p;
    };
    var C = function (m, n) {
        if (n > m) {
            return 0;
        }
        return P(m, n) / P(n, n);
    };
    var factorial = function (n) {
        return P(n, n);
    };
    var factoradic = function (n, d) {
        var f = 1;
        if (!d) {
            for (d = 1; f < n; f *= ++d) ;
            if (f > n) f /= d--;
        } else {
            f = factorial(d);
        }
        var result = [0];
        for (; d; f /= d--) {
            result[d] = Math.floor(n / f);
            n %= f;
        }
        return result;
    };
    /* common methods */
    var addProperties = function (dst, src) {
        Object.keys(src).forEach(function (p) {
            Object.defineProperty(dst, p, {
                value: src[p],
                configurable: p == 'next'
            });
        });
    };
    var hideProperty = function (o, p) {
        Object.defineProperty(o, p, {
            writable: true
        });
    };
    var toArray = function (f) {
        var e, result = [];
        this.init();
        while (e = this.next()) result.push(f ? f(e) : e);
        this.init();
        return result;
    };
    var toArrayStr = function (f) {
        var e, result = [];
        this.init();
        while (e = this.next()) result.push(f ? f(e).join('') : e.join(''));
        this.init();
        return result;
    };
    var toArraySumLast = function (f, isjoin, sums, kuadu, total, daxiao, lianxu) {
        function sum(arr, s, k, t, dx, lx) {
            var sumlast = parseInt(eval(arr.join("+")), 10) % 10;
            var totallast = parseInt(eval(arr.join("+")), 10);
            var kualast = Math.abs(parseInt(eval(arr.join("-")), 10));
            var firstnum = arr[0];
            var secnum = arr[1];
            var chkzuthree = function (a) {
                if (a.length != 3) {
                    return true;
                }
                if (a.length == 3) {
                    if (a[0] == a[1] || a[0] == a[2] || a[1] == a[2]) {
                        return true;
                    }
                }
                return false
            }
            var chkzusix = function (a) {
                if (a.length != 3) {
                    return true;
                }
                if (a.length == 3) {
                    if (a[0] != a[1] && a[0] != a[2] && a[1] != a[2]) {
                        return true;
                    }
                }
                return false
            }
            var chksanlian = function (a) {
                if (a.length != 3) {
                    return true;
                }
                if (a.length == 3) {
                    if ((a[1] - a[0] == 1 && a[2] - a[0] == 2) || (a[1] - a[0] == 1 && a[2] - a[1] == -9) || (a[1] - a[0] == -9 && a[2] - a[1] == 1)) {
                        return true;
                    }
                }
                return false
            }
            //console.log(sumlast,s,_.indexOf(s,sumlast),'sumlast');
            if (lx.length > 0) {
                for (i = 0; i < lx.length; i++) {
                    var lxline = lx[i];
                    if (lxline == '01' && kualast != 1 && kualast != 9) {
                        return false;
                    }
                    if (lxline == '02' && (kualast == 1 || kualast == 9)) {
                        return false;
                    }
                    if (lxline == '03' && (arr.join('-') == [arr[0], arr[0], arr[0]].join('-'))) {
                        return false;
                    }
                    if (lxline == '04' && chkzuthree(arr)) {
                        return false;
                    }
                    if (lxline == '05' && chkzusix(arr)) {
                        return false;
                    }
                    if (lxline == '06' && chksanlian(arr)) {
                        return false;
                    }
                    //散号
                    if (lxline == '07' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '08' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '09' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '10' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '11' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '12' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '13' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '14' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '15' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '16' && chksanlian(arr)) {
                        return false;
                    }
                    if (lxline == '17' && chksanlian(arr)) {
                        return false;
                    }
                }
                //console.log(kualast,'kualast',k);
            }
            if (dx.length > 0) {
                for (i = 0; i < dx.length; i++) {
                    var dxline = dx[i].split('|');
                    if (dxline[0] == '1' && firstnum > 4 && dxline[1] == '1' && secnum > 4) {
                        return false;
                    }
                    if (dxline[0] == '0' && firstnum < 5 && dxline[1] == '0' && secnum < 5) {
                        return false;
                    }
                    if (dxline[0] == '0' && firstnum < 5 && dxline[1] == '1' && secnum > 4) {
                        return false;
                    }
                    if (dxline[0] == '1' && firstnum > 4 && dxline[1] == '0' && secnum < 5) {
                        return false;
                    }
                }
            }
            if (t.length > 0) {
                if (_.indexOf(t, totallast) > -1) {
                    return false;
                }
            }
            if (s.length > 0) {
                if (_.indexOf(s, sumlast) > -1) {
                    return false;
                }
            }
            if (k.length > 0) {
                if (_.indexOf(k, kualast) > -1) {
                    return false;
                }
            }
            //console.log('falsefalsefalsefalse');
            return true;
        }

        var e, result = [];
        this.init();
        while (e = this.next()) {
            if (!sum(e, sums, kuadu, total, daxiao, lianxu)) {
                continue;
            }
            result.push(f ? f(e).join('') : e.join(''));
        }

        //console.log(this.length,'lenlenlenlen',result,'resultresult');
        this.reallen = result.length
        this.init();
        if (isjoin) {
            return result.join(isjoin);
        } else {
            return result;
        }

    };
    var resLen = function () {
        return this.reallen;
    }
    var toArraySum = function (f, sums) {
        function sum(arr, s) {
            return eval(arr.join("+"));
        }

        var e, result = [];
        this.init();
        while (e = this.next()) result.push(f ? f(e).join('') : (sum(e, sums), e.join('')));
        this.init();
        return result.join(' ');
    };
    var common = {
        toArray: toArray,
        toArrayStr: toArrayStr,
        toArraySumLast: toArraySumLast,
        toArraySum: toArraySum,
        resLen: resLen,
        map: toArray,
        forEach: function (f) {
            var e;
            this.init();
            while (e = this.next()) f(e);
            this.init();
        },
        filter: function (f) {
            var e, result = [];
            this.init();
            while (e = this.next()) if (f(e)) result.push(e);
            this.init();
            return result;
        },
        lazyMap: function (f) {
            this._lazyMap = f;
            return this;
        },
        lazyFilter: function (f) {
            Object.defineProperty(this, 'next', {
                writable: true
            });
            if (typeof f !== 'function') {
                this.next = this._next;
            } else {
                if (typeof (this._next) !== 'function') {
                    this._next = this.next;
                }
                var _next = this._next.bind(this);
                this.next = (function () {
                    var e;
                    while (e = _next()) {
                        if (f(e))
                            return e;
                    }
                    return e;
                }).bind(this);
            }
            Object.defineProperty(this, 'next', {
                writable: false
            });
            return this;
        }

    };
    /* power set */
    var power = function (ary, fun) {
        var size = 1 << ary.length,
            sizeOf = function () {
                return size;
            },
            that = Object.create(ary.slice(), {
                length: {
                    get: sizeOf
                }
            });
        hideProperty(that, 'index');
        addProperties(that, {
            valueOf: sizeOf,
            init: function () {
                that.index = 0;
            },
            nth: function (n) {
                if (n >= size) return;
                var i = 0,
                    result = [];
                for (; n; n >>>= 1, i++) if (n & 1) result.push(this[i]);
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            },
            next: function () {
                return this.nth(this.index++);
            }
        });
        addProperties(that, common);
        that.init();
        return (typeof (fun) === 'function') ? that.map(fun) : that;
    };
    /* combination */
    var nextIndex = function (n) {
        var smallest = n & -n,
            ripple = n + smallest,
            new_smallest = ripple & -ripple,
            ones = ((new_smallest / smallest) >> 1) - 1;
        return ripple | ones;
    };
    var combination = function (ary, nelem, fun) {
        if (!nelem) nelem = ary.length;
        if (nelem < 1) throw new RangeError;
        if (nelem > ary.length) throw new RangeError;
        var first = (1 << nelem) - 1,
            size = C(ary.length, nelem),
            maxIndex = 1 << ary.length,
            sizeOf = function () {
                return size;
            },
            that = Object.create(ary.slice(), {
                length: {
                    get: sizeOf
                }
            });
        hideProperty(that, 'index');
        addProperties(that, {
            valueOf: sizeOf,
            init: function () {
                this.index = first;
            },
            next: function () {
                if (this.index >= maxIndex) return;
                var i = 0,
                    n = this.index,
                    result = [];
                for (; n; n >>>= 1, i++) {
                    if (n & 1) result[result.length] = this[i];
                }

                this.index = nextIndex(this.index);
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            }
        });
        addProperties(that, common);
        that.init();
        return (typeof (fun) === 'function') ? that.map(fun) : that;
    };
    /* bigcombination */
    var bigNextIndex = function (n, nelem) {

        var result = n;
        var j = nelem;
        var i = 0;
        for (i = result.length - 1; i >= 0; i--) {
            if (result[i] == 1) {
                j--;
            } else {
                break;
            }
        }
        if (j == 0) {
            // Overflow
            result[result.length] = 1;
            for (var k = result.length - 2; k >= 0; k--) {
                result[k] = (k < nelem - 1) ? 1 : 0;
            }
        } else {
            // Normal

            // first zero after 1
            var i1 = -1;
            var i0 = -1;
            for (var i = 0; i < result.length; i++) {
                if (result[i] == 0 && i1 != -1) {
                    i0 = i;
                }
                if (result[i] == 1) {
                    i1 = i;
                }
                if (i0 != -1 && i1 != -1) {
                    result[i0] = 1;
                    result[i1] = 0;
                    break;
                }
            }

            j = nelem;
            for (var i = result.length - 1; i >= i1; i--) {
                if (result[i] == 1)
                    j--;
            }
            for (var i = 0; i < i1; i++) {
                result[i] = (i < j) ? 1 : 0;
            }
        }

        return result;

    };
    var buildFirst = function (nelem) {
        var result = [];
        for (var i = 0; i < nelem; i++) {
            result[i] = 1;
        }
        result[0] = 1;
        return result;
    };
    var bigCombination = function (ary, nelem, fun) {
        if (!nelem) nelem = ary.length;
        if (nelem < 1) throw new RangeError;
        if (nelem > ary.length) throw new RangeError;
        var first = buildFirst(nelem),
            size = C(ary.length, nelem),
            maxIndex = ary.length,
            sizeOf = function () {
                return size;
            },
            that = Object.create(ary.slice(), {
                length: {
                    get: sizeOf
                }
            });
        hideProperty(that, 'index');
        addProperties(that, {
            valueOf: sizeOf,
            init: function () {
                this.index = first.concat();
            },
            next: function () {
                if (this.index.length > maxIndex) return;
                var i = 0,
                    n = this.index,
                    result = [];
                for (var j = 0; j < n.length; j++, i++) {
                    if (n[j])
                        result[result.length] = this[i];
                }
                bigNextIndex(this.index, nelem);
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            }
        });
        addProperties(that, common);
        that.init();
        return (typeof (fun) === 'function') ? that.map(fun) : that;
    };
    /* permutation */
    var _permutation = function (ary) {
        var that = ary.slice(),
            size = factorial(that.length);
        that.index = 0;
        that.next = function () {
            if (this.index >= size) return;
            var copy = this.slice(),
                digits = factoradic(this.index, this.length),
                result = [],
                i = this.length - 1;
            for (; i >= 0; --i) result.push(copy.splice(digits[i], 1)[0]);
            this.index++;
            return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
        };
        return that;
    };
    // which is really a permutation of combination
    var permutation = function (ary, nelem, fun) {
        if (!nelem) nelem = ary.length;
        if (nelem < 1) throw new RangeError;
        if (nelem > ary.length) throw new RangeError;
        var size = P(ary.length, nelem),
            sizeOf = function () {
                return size;
            },
            that = Object.create(ary.slice(), {
                length: {
                    get: sizeOf
                }
            });
        hideProperty(that, 'cmb');
        hideProperty(that, 'per');
        addProperties(that, {
            valueOf: function () {
                return size;
            },
            init: function () {
                /* combination can only be used for less than 31 elements */
                if (ary.length < 31) {
                    this.cmb = combination(ary, nelem);
                } else {
                    this.cmb = bigCombination(ary, nelem);
                }

                this.per = _permutation(this.cmb.next());
            },
            next: function () {
                var result = this.per.next();
                if (!result) {
                    var cmb = this.cmb.next();
                    if (!cmb) return;
                    this.per = _permutation(cmb);
                    return this.next();
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            }
        });
        addProperties(that, common);
        that.init();
        return (typeof (fun) === 'function') ? that.map(fun) : that;
    };

    var PC = function (m) {
        var total = 0;
        for (var n = 1; n <= m; n++) {
            var p = P(m, n);
            total += p;
        }
        ;
        return total;
    };
    // which is really a permutation of combination
    var permutationCombination = function (ary, fun) {
        // if (!nelem) nelem = ary.length;
        // if (nelem < 1) throw new RangeError;
        // if (nelem > ary.length) throw new RangeError;
        var size = PC(ary.length),
            sizeOf = function () {
                return size;
            },
            that = Object.create(ary.slice(), {
                length: {
                    get: sizeOf
                }
            });
        hideProperty(that, 'cmb');
        hideProperty(that, 'per');
        hideProperty(that, 'nelem');
        addProperties(that, {
            valueOf: function () {
                return size;
            },
            init: function () {
                this.nelem = 1;
                // console.log("Starting nelem: " + this.nelem);
                this.cmb = combination(ary, this.nelem);
                this.per = _permutation(this.cmb.next());
            },
            next: function () {
                var result = this.per.next();
                if (!result) {
                    var cmb = this.cmb.next();
                    if (!cmb) {
                        this.nelem++;
                        // console.log("increment nelem: " + this.nelem + " vs " + ary.length);
                        if (this.nelem > ary.length) return;
                        this.cmb = combination(ary, this.nelem);
                        cmb = this.cmb.next();
                        if (!cmb) return;
                    }
                    this.per = _permutation(cmb);
                    return this.next();
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            }
        });
        addProperties(that, common);
        that.init();
        return (typeof (fun) === 'function') ? that.map(fun) : that;
    };
    /* Cartesian Product */
    var arraySlice = Array.prototype.slice;
    var cartesianProduct = function () {
        if (!arguments.length) throw new RangeError;
        var args = arraySlice.call(arguments),
            size = args.reduce(function (p, a) {
                return p * a.length;
            }, 1),
            sizeOf = function () {
                return size;
            },
            dim = args.length,
            that = Object.create(args, {
                length: {
                    get: sizeOf
                }
            });
        if (!size) throw new RangeError;
        hideProperty(that, 'index');
        addProperties(that, {
            valueOf: sizeOf,
            dim: dim,
            init: function () {
                this.index = 0;
            },
            get: function () {
                if (arguments.length !== this.length) return;
                var result = [],
                    d = 0;
                for (; d < dim; d++) {
                    var i = arguments[d];
                    if (i >= this[d].length) return;
                    result.push(this[d][i]);
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            },
            nth: function (n) {
                var result = [],
                    d = 0;
                for (; d < dim; d++) {
                    var l = this[d].length;
                    var i = n % l;
                    result.push(this[d][i]);
                    n -= i;
                    n /= l;
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            },
            next: function () {
                if (this.index >= size) return;
                var result = this.nth(this.index);
                this.index++;
                return result;
            }
        });
        addProperties(that, common);
        that.init();
        //console.log(that,'thatthatthat');
        return that;
    };
    var cartesianProductPk = function () {
        console.log('pkkkk');
        if (!arguments.length) throw new RangeError;
        var args = arraySlice.call(arguments),
            size = args.reduce(function (p, a) {
                console.log(p * a.length, p, a);
                return p * a.length;
            }, 1),
            sizeOf = function () {
                return size;
            },
            dim = args.length,
            that = Object.create(args, {
                length: {
                    get: sizeOf
                }
            });
        if (!size) throw new RangeError;
        hideProperty(that, 'index');
        addProperties(that, {
            valueOf: sizeOf,
            dim: dim,
            init: function () {
                this.index = 0;
            },
            get: function () {
                if (arguments.length !== this.length) return;
                var result = [],
                    d = 0;
                for (; d < dim; d++) {
                    var i = arguments[d];
                    if (i >= this[d].length) return;
                    result.push(this[d][i]);
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            },
            nth: function (n) {
                var result = [],
                    d = 0;
                for (; d < dim; d++) {
                    var l = this[d].length;
                    var i = n % l;
                    result.push(this[d][i]);
                    n -= i;
                    n /= l;
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            },
            next: function () {
                if (this.index >= size) return;
                var result = this.nth(this.index);
                this.index++;
                return result;
            }
        });
        addProperties(that, common);
        that.init();
        //console.log(that,'thatthatthat');
        return that;
    };
    /* baseN */
    var baseN = function (ary, nelem, fun) {
        if (!nelem) nelem = ary.length;
        if (nelem < 1) throw new RangeError;
        var base = ary.length,
            size = Math.pow(base, nelem);
        var sizeOf = function () {
                return size;
            },
            that = Object.create(ary.slice(), {
                length: {
                    get: sizeOf
                }
            });
        hideProperty(that, 'index');
        addProperties(that, {
            valueOf: sizeOf,
            init: function () {
                that.index = 0;
            },
            nth: function (n) {
                if (n >= size) return;
                var result = [];
                for (var i = 0; i < nelem; i++) {
                    var d = n % base;
                    result.push(ary[d])
                    n -= d;
                    n /= base
                }
                return (typeof (that._lazyMap) === 'function') ? that._lazyMap(result) : result;
            },
            next: function () {
                return this.nth(this.index++);
            }
        });
        addProperties(that, common);
        that.init();
        return (typeof (fun) === 'function') ? that.map(fun) : that;
    };

    /* export */
    var Combinatorics = Object.create(null);
    addProperties(Combinatorics, {
        C: C,
        P: P,
        factorial: factorial,
        factoradic: factoradic,
        cartesianProduct: cartesianProduct,
        cartesianProductPk: cartesianProductPk,
        combination: combination,
        bigCombination: bigCombination,
        permutation: permutation,
        permutationCombination: permutationCombination,
        power: power,
        baseN: baseN,
        VERSION: version
    });
    return Combinatorics;
}));

//这个页面放所有公共的JS
(function ($) {
    $.pagination = function (options) {
        var language = $.extend({}, $.pagination.language, options.language);
        var opts = $.extend({}, $.pagination.defaults, options);
        var render = $(opts.render);
        var page = 1, size = opts.pageSize;
        var load = function () {
            var data = opts.ajaxData;
            if ($.isFunction(data)) {
                data = data();
            }
            data = $.extend({}, data, {page: (page - 1), size: size});
            $.ajax({
                type: opts.ajaxType,
                url: typeof opts.ajaxUrl == 'string' ? opts.ajaxUrl : (Route.PATH + opts.ajaxUrl.attr('url')),
                data: data,
                dataType: 'json',
                beforeSend: opts.beforeSend,
                complete: opts.complete,
                success: function (response) {
                    if (String(response) == '-1') {
                        window.location.href = "/yx/login/sign.html";
                        return false;
                    }
                    //console.log(response,'responseresponseresponse');
                    if (response.error != 0) {
                        if (response.code == '0-1' || response.code == '0-4') {
                            if (window.location.pathname == "/index.html") return;
                            App.alert('warning', '提示消息', response.message);
                            setTimeout(function () {
                                var domain = window.location.protocol + '//' + window.location.host;
                                window.location.href = domain + '/index.html';
                            }, 1000);
                            return;
                        } else {
                            App.alert('warning', '提示消息', response.message);
                        }
                    }
                    if (response.error == 0) {
                        if (response.data.totalCount && response.data.totalCount > 0) {
                            update(response.data.totalCount);
                            if (response.data.list && response.data.list.length > 0) {
                                opts.success(response.data.list);
                            } else {
                                if (page > 1) {
                                    page--;
                                    load();
                                }
                            }
                        } else {
                            opts.emptyData();
                            render.empty();
                        }
                    } else {
                        opts.pageError(response);
                    }
                }
            });
        };
        var update = function (totalCount) {
            if (totalCount == 0) return;
            var pageCount = Math.ceil(totalCount / size);
            var pagination = $('<div class="easyweb-pagination">');
            var infos = $('<div class="infos">');
            infos.append(language.infos.replace('${currPage}', '<span class="p">' + page + '</span>').replace('${totalPage}', '<span class="p">' + pageCount + '</span>').replace('${start}', '<span class="s">' + ((page - 1) * size + 1) + '</span>').replace('${end}', '<span class="e">' + (page * size > totalCount ? totalCount : page * size) + '</span>').replace('${total}', '<span class="t">' + totalCount + '</span>'));
            var pages = $('<div class="pages">');
            pages.append($('<a class="top">').html(language.top));
            pages.append($('<a class="prev">').html(language.prev));
            var pageLength = opts.pageLength;
            if (pageCount < pageLength) {
                pageLength = pageCount;
            }
            var startPage = page - (Math.ceil(pageLength / 2) - 1);
            var endPage = page + Math.floor(pageLength / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = pageLength;
            } else if (endPage > pageCount) {
                startPage = pageCount - pageLength + 1;
                endPage = pageCount;
            }
            for (var i = startPage; i <= endPage; i++) {
                var thisPage = $('<a class="page">').html(i);
                if (i == page) {
                    thisPage.addClass('selected');
                }
                pages.append(thisPage);
            }
            pages.append($('<a class="next">').html(language.next));
            pages.append($('<a class="end">').html(language.end));
            pages.find('.page').click(function () {
                var idx = $(this).html();
                idx = parseInt(idx);
                if (idx != page) {
                    page = idx;
                    load();
                }
            });
            pages.find('.top').click(function () {
                if (page > 1) {
                    page = 1;
                    load();
                }
            });
            pages.find('.prev').click(function () {
                if (page > 1) {
                    page--;
                    load();
                }
            });
            pages.find('.end').click(function () {
                if (page < pageCount) {
                    page = pageCount;
                    load();
                }
            });
            pages.find('.next').click(function () {
                if (page < pageCount) {
                    page++;
                    load();
                }
            });
            var go = $('<div class="go">').append($('<input type="text" />').val(page)).append($('<a class="btn-go">').html(language.go));
            go.find('.btn-go').click(function () {
                var idx = go.find('input[type="text"]').val();
                idx = parseInt(idx);
                if (idx > 0 && idx <= pageCount) {
                    if (idx != page) {
                        page = idx;
                        load();
                    }
                } else {
                    opts.pageError(language.msg);
                }
            });
            if (!opts.hideInfos) {
                pagination.append(infos);
            }
            pagination.append(pages);
            if (!opts.hideGo) {
                pagination.append(go);
            }
            render.html(pagination);
        };
        var init = function () {
            page = 1;
            load();
        };
        return {
            init: init,
            reload: load
        };
    };

    $.pagination.language = {
        //infos: '当前第${currPage}/${totalPage}页，显示${start}至${end}条数据，总计${total}条数据。',
        infos: '记录总数：${total}，页数：${currPage}/${totalPage}',
        top: '首页',
        end: '尾页',
        prev: '上一页',
        next: '下一页',
        go: '搜索',
        msg: '请输入正确的页数。'
    };

    $.pagination.defaults = {
        render: '.pagination',
        hideInfos: false,
        hideGo: false,
        pageLength: 6,
        pageSize: 10,
        ajaxType: 'post',
        ajaxUrl: '',
        ajaxData: {},
        beforeSend: function () {
        },
        complete: function () {
        },
        success: function (list) {
        },
        pageError: function (response) {
            alert(response.message);
        },
        emptyData: function () {

        }
    };
})(jQuery);

// select beauty
(function (a) {
    if (!a.browser) {
        a.browser = {};
        a.browser.mozilla = !1;
        a.browser.webkit = !1;
        a.browser.opera = !1;
        a.browser.msie = !1;
        var b = navigator.userAgent;
        a.browser.name = navigator.appName;
        a.browser.fullVersion = "" + parseFloat(navigator.appVersion);
        a.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var d, c;
        if (-1 != (c = b.indexOf("Opera"))) {
            if (a.browser.opera = !0, a.browser.name = "Opera", a.browser.fullVersion = b.substring(c + 6), -1 != (c = b.indexOf("Version"))) a.browser.fullVersion = b.substring(c + 8)
        } else if (-1 != (c = b.indexOf("MSIE"))) a.browser.msie = !0, a.browser.name = "Microsoft Internet Explorer", a.browser.fullVersion = b.substring(c + 5);
        else if (-1 != (c = b.indexOf("Chrome"))) a.browser.webkit = !0, a.browser.name = "Chrome", a.browser.fullVersion = b.substring(c + 7);
        else if (-1 != (c = b.indexOf("Safari"))) {
            if (a.browser.webkit = !0, a.browser.name = "Safari", a.browser.fullVersion = b.substring(c + 7), -1 != (c = b.indexOf("Version"))) a.browser.fullVersion = b.substring(c + 8)
        } else if (-1 != (c = b.indexOf("Firefox"))) a.browser.mozilla = !0, a.browser.name = "Firefox", a.browser.fullVersion = b.substring(c + 8);
        else if ((d = b.lastIndexOf(" ") + 1) < (c = b.lastIndexOf("/"))) a.browser.name = b.substring(d, c), a.browser.fullVersion = b.substring(c + 1), a.browser.name.toLowerCase() == a.browser.name.toUpperCase() && (a.browser.name = navigator.appName);
        if (-1 != (b = a.browser.fullVersion.indexOf(";"))) a.browser.fullVersion = a.browser.fullVersion.substring(0, b);
        if (-1 != (b = a.browser.fullVersion.indexOf(" "))) a.browser.fullVersion = a.browser.fullVersion.substring(0, b);
        a.browser.majorVersion = parseInt("" + a.browser.fullVersion, 10);
        isNaN(a.browser.majorVersion) && (a.browser.fullVersion = "" + parseFloat(navigator.appVersion), a.browser.majorVersion = parseInt(navigator.appVersion, 10));
        a.browser.version = a.browser.majorVersion
    }
})(jQuery);
(function (f, s, h) {
    function p(b, a, e) {
        var d, c;
        d = b.attr("data-dk-dropdown-value");
        b = b.text();
        c = a.data("dropkick");
        $select = c.$select;
        $select.val(d);
        $select.trigger("change");
        a.find(".dk_label").text(b);
        c.settings.change && !e && c.settings.change.call($select, d, b)
    }

    function j(b, a) {
        a.find(".dk_option_current").removeClass("dk_option_current");
        b.addClass("dk_option_current");
        var e = b.prevAll("li").outerHeight() * b.prevAll("li").length;
        a.find(".dk_options_inner").animate({
            scrollTop: e + "px"
        }, 0)
    }

    function k(b) {
        b.data("dropkick");
        b.find(".dk_options").css({
            top: b.find(".dk_toggle").outerHeight() - 1
        });
        b.toggleClass("dk_open")
    }

    function q(b) {
        return 0 < f.trim(b).length ? b : !1
    }

    var r = !1;
    f.browser.msie && 7 > f.browser.version.substr(0, 1) ? r = !0 : h.documentElement.className += " dk_fouc";
    var g = {},
        n = [],
        t = {
            startSpeed: 1E3,
            theme: !1,
            change: !1
        };
    g.init = function (b) {
        b = f.extend({}, t, b);
        return this.each(function () {
            var a = f(this),
                e = a.find(":selected").first(),
                d = a.find("option"),
                c = a.data("dropkick") || {},
                m = a.attr("id") || a.attr("name"),
                j = b.width || a.outerWidth(),
                g = a.attr("tabindex") ? a.attr("tabindex") : "",
                i = !1;
            if (c.id) return a;
            c.settings = b;
            c.tabindex = g;
            c.id = m;
            c.$original = e;
            c.$select = a;
            c.value = q(a.val()) || q(e.attr("value"));
            c.label = e.text();
            c.options = d;
            e = [];
            d = '<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}"><a class="dk_toggle"><span class="dk_label">{{ label }}</span><em class="icon">&#xe6bb;</em></a><div class="dk_options"><ul class="dk_options_inner"></ul></div></div>'.replace("{{ id }}", c.id);
            d = d.replace("{{ label }}", c.label);
            d = d.replace("{{ tabindex }}", c.tabindex);
            if (c.options && c.options.length)
                for (var g = 0, h = c.options.length; g < h; g++) {
                    var k = f(c.options[g]),
                        l = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',
                        l = l.replace("{{ value }}", k.val()),
                        l = l.replace("{{ current }}", q(k.val()) === c.value ? "dk_option_current" : ""),
                        l = l.replace("{{ text }}", k.text());
                    e[e.length] = l
                }
            d = f(d);
            d.find(".dk_options_inner").html(e.join(""));
            i = d;
            i.find(".dk_toggle").css({
                width: j + "px"
            });
            a.before(i);
            i = f("#dk_container_" + m).fadeIn(b.startSpeed);
            m = b.theme ? b.theme : "default";
            i.addClass("dk_theme_" + m);
            c.theme = m;
            c.$dk = i;
            a.data("dropkick", c);
            i.data("dropkick", c);
            n[n.length] = a;
            i.bind("focus.dropkick", function () {
                i.addClass("dk_focus")
            }).bind("blur.dropkick", function () {
                i.removeClass("dk_open dk_focus")
            });
            setTimeout(function () {
                a.hide()
            }, 0)
        })
    };
    g.theme = function (b) {
        var a = f(this).data("dropkick");
        a.$dk.removeClass("dk_theme_" + a.theme).addClass("dk_theme_" + b);
        a.theme = b
    };
    g.reset = function () {
        for (var b = 0, a = n.length; b < a; b++) {
            var e = n[b].data("dropkick"),
                d = e.$dk,
                c = d.find("li").first();
            d.find(".dk_label").text(e.label);
            d.find(".dk_options_inner").animate({
                scrollTop: 0
            }, 0);
            j(c, d);
            p(c, d, !0)
        }
    };
    f.fn.dropkick = function (b) {
        if (!r) {
            if (g[b]) return g[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" === typeof b || !b) return g.init.apply(this, arguments)
        }
    };
    f(function () {
        f(h).on("click", ".dk_toggle", function (b) {
            var a = f(this).parents(".dk_container").first();
            k(a);
            "ontouchstart" in s && (a.addClass("dk_touch"), a.find(".dk_options_inner").addClass("scrollable vertical"));
            b.preventDefault();
            return !1
        });
        f(h).on(f.browser.msie ? "mousedown" : "click", ".dk_options a", function (b) {
            var a = f(this),
                e = a.parents(".dk_container").first();
            e.data("dropkick");
            e.removeClass("dk_open");
            p(a, e);
            j(a.parent(), e);
            b.preventDefault();
            return !1
        });
        f(h).bind("keydown.dk_nav", function (b) {
            var a = f(".dk_container.dk_open"),
                e = f(".dk_container.dk_focus"),
                d = null;
            a.length ? d = a : e.length && !a.length && (d = e);
            if (d) {
                var a = d,
                    c = b.keyCode;
                a.data("dropkick");
                var g = a.find(".dk_options"),
                    e = a.hasClass("dk_open"),
                    h = a.find(".dk_option_current"),
                    d = g.find("li").first(),
                    g = g.find("li").last();
                switch (c) {
                    case 13:
                        e ? (p(h.find("a"), a), a.removeClass("dk_open")) : k(a);
                        b.preventDefault();
                        break;
                    case 38:
                        d = h.prev("li");
                        e ? d.length ? j(d, a) : j(g, a) : k(a);
                        b.preventDefault();
                        break;
                    case 40:
                        e ? (e = h.next("li").first(), e.length ? j(e, a) : j(d, a)) : k(a), b.preventDefault()
                }
            }
        })
    })
})(jQuery, window, document);

var DataFormat = function () {

    var formatAmount = function (amount) {
        if (amount < 1) {
            return amount.toFixed(5);
        }
        if (amount < 100) {
            return amount.toFixed(3);
        }
        return amount.toFixed(3);
    }

    var formatAccountType = function (code) {
        if (code == 1) {
            return '彩票账户';
        }
        if (code == 2) {
            return '百家乐账户';
        }
    }

    var greeting = function () {
        var hour = moment().hour();
        if (hour >= 6 && hour < 11) {
            return '早上好';
        }
        if (hour >= 11 && hour < 13) {
            return '中午好';
        }
        if (hour >= 13 && hour < 19) {
            return '下午好';
        }
        if (hour >= 19 || hour < 6) {
            return '晚上好';
        }
    }

    var formatUserType = function (type) {
        if (type == 0) {
            return '玩家';
        }
        if (type == 1) {
            return '代理';
        }
    }

    var formatUserVipLevel = function (level) {
        if (level == 0) {
            return '普通会员';
        }
        if (level == 1) {
            return '青铜 VIP';
        }
        if (level == 2) {
            return '紫晶 VIP';
        }
        if (level == 3) {
            return '白金 VIP';
        }
        if (level == 4) {
            return '黄金 VIP';
        }
        if (level == 5) {
            return '钻石 VIP';
        }
        if (level == 6) {
            return '至尊 VIP';
        }
    }

    var formatLevelUsers = function (thisUser, list) {
        $.each(list, function (i, val) {
            thisUser += ' &gt; ' + val;
        });
        return thisUser;
    }

    var formatUserOnlineStatus = function (status) {
        if (status == 0) {
            return '离线';
        }
        if (status == 1) {
            return '在线';
        }
    }

    var formatUserPlanLevel = function (level) {
        if (level == 0) {
            return '菜鸟';
        }
        if (level == 1) {
            return '学徒';
        }
        if (level == 2) {
            return '出师';
        }
        if (level == 3) {
            return '操盘';
        }
        if (level == 4) {
            return '大师';
        }
        if (level == 5) {
            return '宗师';
        }
        if (level == 6) {
            return '大神';
        }
    }

    var formatUserCardStatus = function (status) {
        if (status == 0) {
            return '正常';
        }
        if (status == -1) {
            return '资料无效';
        }
        if (status == -2) {
            return '已锁定';
        }
    }

    var formatUserRechargeType = function (type) {
        if (type == 0) {
            return '网银充值';
        }
        if (type == 1) {
            return '转账汇款';
        }
        if (type == 3) {
            return '系统充值';
        }
    }

    var formatUserRechargeStatus = function (type) {
        if (type == 0) {
            return '成功';
        }
        if (type == 6 || type == 7) {
            return '失败';
        }
        if (type != 0 && type != 6 && type != 7) {
            return '待处理';
        }
    }

    var formatUserStatus = function (type) {
        if (!type) {
            return '会员';
        }
        if (type == 0) {
            return '会员';
        }
        return '代理';
    }

    var formatUserWithdrawalsStatus = function (status) {
        /*if(status == 0) {
			return '待处理';
		}
		if(status == 1) {
			return '已完成';
		}
		if(status == -1) {
			return '已拒绝';
		}*/
        if (status == 0) {
            return '成功';
        }
        if (status == 6 || status == 7 || status == 2) {
            return '失败';
        }
        if (status != 0 && status != 6 && status != 7) {
            return '待处理';
        }
    }

    var formatUserTransferStatus = function (type) {
        if (type == 0) {
            return '处理中';
        }
        if (type == 1) {
            return '成功';
        }
        if (type == 2) {
            return '失败';
        }
    }

    var formatUserBetsModel = function (model) {
        if (model == 'yuan') {
            return '元';
        }
        if (model == 'jiao') {
            return '角';
        }
        if (model == 'fen') {
            return '分';
        }
        if (model == 'li') {
            return '厘';
        }
    }
    //NORMAL(0, "未开奖"), NON_WIN(1, "未中奖"), AWARDED(2, "已派奖"), WAIT_AWARD(3, "等待派奖"), CANCELED(4, "个人撤单"), CANCELD_SYSTEM(
    //5, "系统撤单"), ORDER_REFUND(6, "已退款"), WIN(7, "已中奖"), UNKNOWN(8, "异常状态");
    var formatUserBetsStatus = function (status) {
        if (status == 0) {
            return '未开奖';
        }
        if (status == 1) {
            return '未中奖';
        }
        if (status == 2) {
            return '已派奖';
        }
        if (status == 3) {
            return '等待派奖';
        }
        if (status == 4) {
            return '个人撤单';
        }
        if (status == 5) {
            return '系统撤单';
        }
        if (status == 6) {
            return '已退款';
        }
        if (status == 7) {
            return '已中奖';
        }
        if (status == 8) {
            return '异常状态';
        }
        return '异常状态';
    }

    var formatUserChaseStatus = function (status) {
        if (status == 0) {
            return '未开始';
        }
        if (status == 1) {
            return '进行中';
        }
        if (status == 2) {
            return '已完成';
        }
        if (status == -1) {
            return '已撤单';
        }
    }

    var formatUserBillType = function (code) {
        if (code == 1000) {
            return '存款';
        }
        if (code == 1001) {
            return '取款';
        }
        if (code == 1002) {
            return '取款退回';
        }
        if (code == 1100) {
            return '转入';
        }
        if (code == 1101) {
            return '转出'
        }
        if (code == 1102) {
            return '上下级转账';
        }
        if (code == 1200) {
            return '优惠活动';
        }
        if (code == 1300) {
            return '消费';
        }
        if (code == 1301) {
            return '派奖';
        }
        if (code == 1302) {
            return '消费返点';
        }
        if (code == 1303) {
            return '取消订单';
        }
        if (code == 1400) {
            return '代理返点';
        }
        if (code == 1500) {
            return '分红';
        }
        if (code == 1600) {
            return '管理员增';
        }
        if (code == 1601) {
            return '管理员减';
        }
        if (code == 1700) {
            return '积分兑换';
        }
        if (code == 1800) {
            return '支付佣金';
        }
        if (code == 1801) {
            return '获得佣金';
        }
        if (code == 1900) {
            return '会员返水';
        }
    }

    var formatUserMessageType = function (type) {
        if (type == 0) {
            return '建议反馈';
        }
        if (type == 1) {
            return '已收消息';
        }
        if (type == 2) {
            return '已发消息';
        }
    }

    var formatUserMessageStatus = function (status, type) {
        if (status == 0) {
            return '正常';
        }
        if (status == 1) {
            return '已读';
        }
        if (status == -1) {
            return '已删除';
        }
    }

    var formatUserSysMessageType = function (type) {
        if (type == 0) {
            return '系统通知';
        }
        if (type == 1) {
            return '站内消息';
        }
        if (type == 2) {
            return '提现通知';
        }
        if (type == 3) {
            return '到账通知';
        }
        if (type == 4) {
            return '中奖通知';
        }
    }

    var formatLotteryPaymentThridType = function (type) {
        if (type == 'ips') {
            return '环讯支付';
        }
        if (type == 'baofoo') {
            return '宝付支付';
        }
        if (type == 'newpay') {
            return '新生支付';
        }
        if (type == 'ecpss') {
            return '汇潮支付';
        }
        if (type == 'yeepay') {
            return '易宝支付';
        }
        if (type == 'mobao') {
            return '摩宝支付';
        }
        if (type == 'gopay') {
            return '国付宝支付';
        }
        if (type == 'pay41') {
            return '通汇支付';
        }
    }

    return {
        formatAmount: formatAmount,
        formatAccountType: formatAccountType,
        greeting: greeting,
        // 用户类型
        formatUserType: formatUserType,
        // 用户 VIP等级
        formatUserVipLevel: formatUserVipLevel,
        // 用户层级关系
        formatLevelUsers: formatLevelUsers,
        // 用户在线状态
        formatUserOnlineStatus: formatUserOnlineStatus,
        // 计划等级
        formatUserPlanLevel: formatUserPlanLevel,
        // 用户银行卡状态
        formatUserCardStatus: formatUserCardStatus,
        // 充值类型
        formatUserRechargeType: formatUserRechargeType,
        // 取款状态
        formatUserWithdrawalsStatus: formatUserWithdrawalsStatus,
        // 账户转账状态
        formatUserTransferStatus: formatUserTransferStatus,
        // 投注模式
        formatUserBetsModel: formatUserBetsModel,
        // 订单状态
        formatUserBetsStatus: formatUserBetsStatus,
        // 账单类别
        formatUserBillType: formatUserBillType,
        // 消息类型
        formatUserMessageType: formatUserMessageType,
        // 消息状态
        formatUserMessageStatus: formatUserMessageStatus,
        // 系统消息类型
        formatUserSysMessageType: formatUserSysMessageType,
        // 第三方支付类别
        formatLotteryPaymentThridType: formatLotteryPaymentThridType,
        formatUserChaseStatus: formatUserChaseStatus,
        //充值状态
        formatUserRechargeStatus: formatUserRechargeStatus,
        formatUserStatus: formatUserStatus
    }
}();

var QueryString = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();

/**
 * 加载彩票列表
 */
var loadLottery = function (callback) {
    Will.ajax({}, Route.PATH + '/game-lottery/static-info', function (data, response) {
        if ($.isFunction(callback)) {
            callback(data);
        }
    });
}
/**
 * 初始化选项卡
 */
var initTabs = function () {
    $('.tabs').each(function () {
        var tabs = $(this).find('a');
        var panels = $(this).parent().find('.panels > .section');
        tabs.each(function (i) {
            $(this).click(function () {
                if (!$(this).hasClass('active')) {
                    tabs.removeClass('active');
                    $(this).addClass('active');
                    panels.removeClass('active');
                    panels.eq(i).addClass('active');
                }
            });
        })
    });
}

/**
 * 初始化日期控件
 */
var initDatePicker = function () {
    if ($('.d-range-picker').size() == 0 && $('.date-picker').size() == 0) return;
    var opts = {
        format: 'YYYY-MM-DD',
        separator: ' 至 ',
        ranges: {
            '今天': [moment(), moment().add(1, 'days')],
            '最近三天': [moment().subtract(2, 'days'), moment().add(1, 'days')],
            '最近七天': [moment().subtract(6, 'days'), moment().add(1, 'days')]
        },
        locale: {
            applyLabel: '确认',
            cancelLabel: '清除',
            fromLabel: '开始',
            toLabel: '结束',
            customRangeLabel: '自定义日期',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    }
    $('.d-range-picker').each(function () {
        var opens = $(this).attr('data-time-opens');
        opts.opens = opens ? opens : 'left';
        var init = $(this).attr('data-time-init');
        if (init) {
            if (init > 0) {
                $(this).val(moment().format('YYYY-MM-DD') + ' 至 ' + moment().add(init, 'days').format('YYYY-MM-DD'));
            } else {
                $(this).val(moment().add(init, 'days').format('YYYY-MM-DD') + ' 至 ' + moment().add(0, 'days').format('YYYY-MM-DD'));
            }
        }
        $(this).daterangepicker(opts);
    });

    if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            orientation: 'left',
            autoclose: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        });
    }
}

//各种通用的函数
var Will = function () {
    var callbacks = [];

    return {
        ajax: ajax,
        initBox: initBox,
        getBox: getBox,
        page: page,
        getPage: getPage,
        tabs: tabs,
        changeTab: changeTab,
        changeTabs: changeTabs,
        addHashChange: addHashChange
    }

    function addHashChange(callback) {
        callbacks.push(callback);
    }

    function changeTabs(initPages, callback) {
        if (callback) {
            addHashChange(callback);
        }
        var manager = $(".manager .nav > a");
        var content = $('[data-init="content"]');
        var hindex = App.getHash('page');
        var hpage = hindex.split('_')[1];
        //console.log(hindex,'hindexhindexhindex');
        manager.each(function (idx, ele) {
            if (!$(ele).hasClass('fixed') && !$(ele).hasClass('disabled')) {
                $(ele).attr('href', '#page=' + idx + '_' + hpage);
            }
        });

        //console.log(callback,callback==null,hindex);
        if ($(".manager .nav > a:eq(" + hindex + ")").hasClass('disabled')) {
            //console.log($(".manager .nav > a:not(.disabled)").first().attr('href'));
            window.location.hash = $(".manager .nav > a:not(.disabled)").first().attr('href');
        }
        var change = function () {
            var index = App.getHash('page'), pagetag = '';
            if (String(index).indexOf('_') > -1) {
                index = String(index).split('_')[0];
                pagetag = String(index).split('_')[1];
            }
            //console.log(index,'indexindexindex');
            if (index && typeof initPages[index] == 'function') {
                var page = $(".manager .nav > a").eq(index);

                initPages[index]();
                page.addClass('active').siblings().removeClass('active');
                if (typeof content.eq(index).attr('manually-hide') == 'undefined') {
                    content.eq(index).show();
                }
                content.eq(index).siblings('[data-init="content"]').hide();

                if (callbacks.length > 0) {
                    for (idx in callbacks) {
                        var callback = callbacks[idx];

                        if ($.isFunction(callback)) callback();
                    }
                }
            }
        };
        change();
        //alert('111');
        window.onhashchange = change;
    }

    //带参数的URL查询,refresh,page必填 deprecated
    function changeTab(callback) {
        var change = function () {
            if (window.location.hash == '' || !App.getHash('refresh')) return;
            var index = App.getHash('page');
            if (index) {
                $(".manager .nav > a").eq(index).click();
                // 			}else{
                if ($.isFunction(callback)) callback();
            }
        };
        // 		change();
        window.onhashchange = change;
    }

    //manager五个页面的tab切换 deprecated
    function tabs(initPages) {
        var manager = $(".manager .nav > a");
        var content = $('[data-init="content"]');
        var index = App.getHash('page');
        manager.each(function (idx, ele) {
            if (idx == 2) $(ele).attr('href', '#page=' + idx + '&refresh=1');
            else $(ele).attr('href', '#page=' + idx);
        });
        manager.click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var i = $(this).index();
            content.eq(i).show();
            content.eq(index).siblings('[data-init="content"]').hide();
            // 			 if(!$(this).data('initialized')) {
            // 			 	initPages[i]=initPages[i]();
            initPages[i]();
            // 				$(this).data('initialized',true);
            // 			 }
        }).eq((index ? index : 0)).click();
    };

    //分页插件的封装
    function page(thisContent, data, url, emptyInfo, successCallback) {
        var thisContent = thisContent;
        //console.log(url,'urlurlurlurlurlurlurl');
        // 		var params = thisContent.find('.params');
        var thisResultTable = thisContent.find('.result > table');
        //console.log(thisContent.find('.result').size());

        if (thisContent.find('.result').size() > 1) {
            thisResultTable = thisContent.find('.result:eq(1) > table');
        }
        if (thisContent.find('.result').size() > 2) {
            thisResultTable = thisContent.find('.result:eq(2) > table');
        }
        var searching = url + '/searching';
        // 		!thisContent.data(searching)
        var pagination = $.pagination({
            render: thisContent.find('.page-list'),
            pageSize: 10,
            ajaxType: (typeof data.posttype != 'undefined' ? data.posttype : 'post'),
            ajaxUrl: url,
            ajaxData: data,
            beforeSend: function () {
                thisContent.data(searching, true);
                App.blockUI({
                    target: thisContent,
                    boxed: true
                });
            },
            complete: function () {
                thisContent.data(searching, false);
                App.unblockUI(thisContent);
            },
            success: function (list) {
                successCallback(list);
            },
            pageError: function (response) {
                thisContent.data(searching, false);
            },
            emptyData: function () {
                //console.log('emptyData',thisContent,thisResultTable);
                thisContent.data(searching, false);
                var emptyHtml = '<tr class="nodata"><td colspan="20">' + emptyInfo + '</td></tr>';
                thisResultTable.find('tbody').html(emptyHtml);
            }
        });
        thisContent.data('pagination', pagination);
    }

    function getPage(thisContent) {
        return thisContent.data('pagination');
    }

    //ajax的封装
    function ajax(data, url, successCallback, errorCallback, isAsync) {
        var asyncc = isAsync === 0 ? false : true
        var thisContent = $('[data-init="content"]');
        var datadom = $('body');
        var loading = url + '/loading';
        if (!datadom.data(loading)) {
            datadom.data(loading, true);
            App.blockUI({
                target: thisContent,
                boxed: true
            });
            $.ajax({
                type: 'post',
                url: url,
                data: data,
                timeout: 10000,
                dataType: 'json',
                async: asyncc,
                success: function (response) {
                    datadom.data(loading, false);
                    App.unblockUI(thisContent);
                    if ((typeof(response.error) == "undefined")) { //没有error,code,message的返回情况
                        if ($.isFunction(successCallback)) successCallback(response);
                        return;
                    }
                    if (response.error != 0) {
                        if (response.code == '0-1' || response.code == '0-4') {
                            if (window.location.pathname == "/index.html") return;
                            App.alert('warning', '提示消息', response.message, 5000);
                            setTimeout(function () {
                                var domain = window.location.protocol + '//' + window.location.host;
                                window.location.href = domain + '/index.html';
                            }, 3000);
                            return;
                        } else {
                            if (String(url).indexOf('zj-bonus') > -1) {
                                App.alert('warning', '提示消息', (response.message == '服务异常' ? '分红未配置' : response.message), 5000);
                            } else {
                                App.alert('warning', '提示消息', (response.message != '' ? response.message : '失败，原因未知'), 5000);
                            }
                            if (String(window.location.pathname).indexOf('manager-finance') > -1) {
                                setTimeout(function () {
                                    window.location.reload();
                                }, 3000);
                            }
                        }
                        if ($.isFunction(errorCallback)) errorCallback(response.data, response);
                    }
                    if (response.error == 0) {
                        if ($.isFunction(successCallback)) successCallback(response.data, response);
                    }
                },
                error: function () {
                    //App.alert('warning', '提示消息', '连接失败，请稍候重试！');
                    datadom.data(loading, false);
                    App.unblockUI(thisContent);
                }
            });
        }
    }

    //详情弹出框的封装
    function initBox(title, content, width, height, onInitCallback, clz) {
        var box = $('body').data('box');
        if (box == undefined) {
            box = new jBox('Modal', {
                width: width,
                height: height,
                title: title,
                overlay: true,
                closeOnClick: false,
                blockScroll: false,
                animation: {open: 'zoomIn'},
                closeButton: 'title',
                draggable: 'title',
                content: content,
                addClass: (clz ? clz : 'common-modal grey'),
                onOpen: function (a) {
                    //console.log(a,,'aaaaaaaaaa');
                    //App.initScroll('.scroller');
                },
                onInit: function () {
                    this.open();
                    //initEvent(thisContent, callback);
                    if ($.isFunction(onInitCallback)) onInitCallback(this);
                    App.initScroll();
                },
                onCloseComplete: function () {
                    this.destroy();
                    $('body').removeData('box');
                }
            });
            $('body').data('box', box);
        } else {
            box.toggle();
        }
        return box;
    }

    function getBox() {
        return $('body').data('box')
    }
}();

var App = function () {

    var getGlobalImgPath = function () {
        return '/img';
    }

    var location = function () {
        return window.location.protocol + '//' + window.location.host;
    }

    var initScroll = function (el) {
        if (!el) el = '.scroller';
        $(el).each(function () {
            if ($(this).attr('data-initialized')) return;
            var color = $(this).attr('data-handle-color') ? $(this).attr('data-handle-color') : '#2AC1CA';
            var distance = $(this).attr('data-handle-distance') ? $(this).attr('data-handle-distance') : '0px';
            var alwaysVisible = $(this).attr('data-always-visible') ? true : false;
            var railVisible = $(this).attr('data-rail-visible') ? true : false;
            if (typeof $.slimScroll !== 'undefined') {
                $(this).slimScroll({
                    allowPageScroll: false,
                    size: '7px',
                    borderRadius: '0px',
                    color: color,
                    wrapperClass: 'slim-scroll',
                    distance: distance,
                    position: 'right',
                    height: 'auto',
                    alwaysVisible: alwaysVisible,
                    railVisible: railVisible,
                    disableFadeOut: true
                });
            }
            $(this).attr('data-initialized', 1);
        });
    }
    var destroyScroll = function (el) {
        $(el).each(function () {
            // destroy existing instance before updating the height
            if ($(this).attr("data-initialized") === "1") {
                $(this).removeAttr("data-initialized");
                $(this).removeAttr("style");
                var attrList = {};
                // store the custom attribures so later we will reassign.
                if ($(this).attr("data-handle-color")) {
                    attrList["data-handle-color"] = $(this).attr("data-handle-color");
                }
                if ($(this).attr("data-handle-distance")) {
                    attrList["data-handle-distance"] = $(this).attr("data-handle-distance");
                }
                if ($(this).attr("data-always-visible")) {
                    attrList["data-always-visible"] = $(this).attr("data-always-visible");
                }
                if ($(this).attr("data-rail-visible")) {
                    attrList["data-rail-visible"] = $(this).attr("data-rail-visible");
                }
                $(this).slimScroll({
                    wrapperClass: 'slim-scroll',
                    destroy: true
                });
                var the = $(this);
                // reassign custom attributes
                $.each(attrList, function (key, value) {
                    the.attr(key, value);
                });
            }
        });
    }
    var blockUI = function (options) {
        options = $.extend(true, {}, options);
        var html = '';
        if (options.animate) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
        } else if (options.iconOnly) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">Loading</div>';
        } else if (options.textOnly) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
        } else {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : '正在加载中...') + '</span></div>';
        }
        //console.log(html,'htmlhth');
        if (options.target) { // element blocking
            var el = $(options.target);
            if (el.height() <= ($(window).height())) {
                options.cenrerY = true;
            }
            //console.log('herer');
            var hobj = {
                message: html,
                baseZ: options.zIndex ? options.zIndex : 1000,
                centerY: options.cenrerY !== undefined ? options.cenrerY : false,
                css: {
                    top: '10%',
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                    opacity: options.boxed ? 0.05 : 0.1,
                    cursor: 'wait'
                }
            };
            //console.log(JSON.stringify(hobj),el);
            if (el.length > 0) {
                el.block({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    centerY: options.cenrerY !== undefined ? options.cenrerY : false,
                    css: {
                        top: '10%',
                        border: '0',
                        padding: '0',
                        width: '100%',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            }

        } else { // page blocking
            $.blockUI({
                message: html,
                baseZ: options.zIndex ? options.zIndex : 1000,
                css: {
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                    opacity: options.boxed ? 0.05 : 0.1,
                    cursor: 'wait'
                }
            });
        }
    }
    var unblockUI = function (target) {
        if (target.length > 0) {
            $(target).unblock({
                onUnblock: function () {
                    $(target).css('position', '');
                    $(target).css('zoom', '');
                }
            });
        } else {
            if (typeof $.unblockUI !== 'undefined') {
                $.unblockUI();
            }
        }
    }
    var getUrl = function (key, isHash) {
        var path = window.location.search;
        if (isHash) path = window.location.hash;
        var search = path.substring(1), i, val, params = search.split("&");
        for (i = 0; i < params.length; i++) {
            val = params[i].split("=");
            if (val[0] == key) {
                return unescape(val[1]);
            }
        }
    }
    var getHash = function (key) {
        return getUrl(key, 1);
    }
    var confirm = function (type, title, content, autoClose, button1, button2, fn1, fn2) {
        if (title == undefined) title = '确认消息';
        if (autoClose == undefined) autoClose = 0;
        if (button1 == undefined) {
            button1 = '确定<i class="icon ok"></i>';
        }
        if (button2 == undefined) {
            button2 = '取消<i class="icon close"></i>';
        }
        if (fn1 == undefined) fn1 = function () {
        };
        if (fn2 == undefined) fn2 = function () {
        };
        content = '<div class="msg">' + content + '</div>';
        if (type == 'warning') {
            title = '<i class="icon warning"></i>' + title;
            content = '<i class="icon warning"></i>' + content;
        }
        if (type == 'info') {
            title = '<i class="icon info"></i>' + title;
            content = '<i class="icon info"></i>' + content;
        }
        if (type == 'question') {
            title = '<i class="icon question"></i>' + title;
            content = '<i class="icon question"></i>' + content;
        }
        if (type == 'success') {
            title = '<i class="icon success"></i>' + title;
            content = '<i class="icon success"></i>' + content;
        }
        var box = new jBox('Confirm', {
            title: title,
            content: content,
            confirmButton: button1,
            cancelButton: button2,
            overlay: true,
            blockScroll: false,
            closeOnClick: false,
            closeButton: 'title',
            confirm: fn1,
            cancel: fn2,
            addClass: 'common-confirm',
            zIndex: 20000,
            onInit: function () {
                this.open();
            },
            onCloseComplete: function () {
                this.destroy();
                box = undefined;
            }
        });
        if (autoClose && autoClose != 0) {
            setTimeout(function () {
                if (box) box.close();
            }, autoClose);
        }
    }
    var alert = function (type, title, content, autoClose, button, fn, callback) {
        if (title == undefined) title = '提示消息';
        if (autoClose == undefined) autoClose = 0;
        if (button == undefined) {
            button = '关闭<i class="icon ft12 close" style="position:relative;top:-5px;">╳</i>';
        }
        if (fn == undefined) fn = function () {
        }
        content = '<div class="msg">' + content + '</div>';
        if (type == 'warning') {
            title = '<i class="icon warning"></i>' + title;
            content = '<i class="icon warning"></i>' + content;
        }
        if (type == 'info') {
            title = '<i class="icon info"></i>' + title;
            content = '<i class="icon info"></i>' + content;
        }
        if (type == 'question') {
            title = '<i class="icon question"></i>' + title;
            content = '<i class="icon question"></i>' + content;
        }
        if (type == 'success') {
            title = '<i class="icon success"></i>' + title;
            content = '<i class="icon success"></i>' + content;
        }
        var jOpt = {
            title: title,
            content: content,
            confirmButton: button,
            overlay: true,
            closeOnClick: false,
            blockScroll: false,
            closeButton: 'title',
            confirm: fn,
            addClass: 'common-alert' + (button == '' ? ' noconfirm' : ''),
            zIndex: 20000,
            onInit: function () {
                this.open();
            },
            onCloseComplete: function () {
                this.destroy();
                box = undefined;
                if (callback != null && $.isFunction(callback)) {
                    callback();
                }

            }
        }

        if (typeof QueryString.iframe != 'undefined') {
            jOpt.position = {
                x: 'center',
                y: $('lottery #lottery-frame', window.parent.document).scrollTop() + window.parent.document.body.clientHeight / 2
            };
            //jOpt.fixed = true
            jOpt.offset = {
                x: 0,
                y: -180
            };
        }
        var box = new jBox('Confirm', jOpt);
        if (autoClose && autoClose != 0) {
            setTimeout(function () {
                if (box) box.close();
            }, autoClose);
        }
    }

    var alertLimit = function (boxid, type, title, content, autoClose, opened, button, fn, callback) {
        if (title == undefined) title = '提示消息';
        if (autoClose == undefined) autoClose = 0;
        if (button == undefined) {
            button = '关闭<i class="icon ft12 close" style="position:relative;top:-5px;">╳</i>';
        }
        if (fn == undefined) fn = function () {
        }
        content = '<div class="msg">' + content + '</div>';
        if (type == 'warning') {
            title = '<i class="icon warning"></i>' + title;
            content = '<i class="icon warning"></i>' + content;
        }
        if (type == 'info') {
            title = '<i class="icon info"></i>' + title;
            content = '<i class="icon info"></i>' + content;
        }
        if (type == 'question') {
            title = '<i class="icon question"></i>' + title;
            content = '<i class="icon question"></i>' + content;
        }
        if (type == 'success') {
            title = '<i class="icon success"></i>' + title;
            content = '<i class="icon success"></i>' + content;
        }
        var jOpt = {
            id: boxid,
            title: title,
            content: content,
            confirmButton: button,
            overlay: true,
            closeOnClick: false,
            blockScroll: false,
            closeButton: 'title',
            confirm: fn,
            addClass: 'common-alert',
            zIndex: 20000,
            onOpen: function (t) {
                if (opened != null && $.isFunction(opened)) {
                    opened(t);
                }
            },
            onInit: function () {
                this.open();
            },
            onCloseComplete: function () {
                this.destroy();
                box = undefined;
                if (callback != null && $.isFunction(callback)) {
                    callback();
                }

            }
        }

        if (typeof QueryString.iframe != 'undefined') {
            jOpt.position = {
                x: 'center',
                y: $('lottery #lottery-frame', window.parent.document).scrollTop() + window.parent.document.body.clientHeight / 2
            };
            //jOpt.fixed = true
            jOpt.offset = {
                x: 0,
                y: -180
            };
        }
        var box = new jBox('Confirm', jOpt);
        if (autoClose && autoClose != 0) {
            setTimeout(function () {
                if (box) box.close();
            }, autoClose);
        }
    }
    var notice = function (content, autoClose) {
        if (autoClose == undefined) autoClose = 3000;
        var noticeBox = new jBox('Notice', {
            content: content,
            autoClose: autoClose,
            addClass: 'common-notice'
        });
    }
    var tips = function (title, content, autoClose) {
        $('.message-tips').remove();
        var messageTips = $('<div class="message-tips">');
        messageTips.append('<div class="title">' + title + '</div>');
        messageTips.append('<div class="content">' + content + '</div>');
        $('body').append(messageTips);
        var width = messageTips.width();
        var height = messageTips.height();
        var winWidth = $(window).width();
        messageTips.css({
            bottom: -height,
            right: ((winWidth - 1050) / 2 - width) / 2
        }).stop().animate({bottom: 202}, 1000, 'easeOutExpo');
        if (autoClose) {
            setTimeout(function () {
                messageTips.stop().animate({bottom: -height,}, 1000, 'easeOutExpo', function () {
                    messageTips.remove();
                });
            }, autoClose);
        }
    }
    return {
        location: location,
        initScroll: initScroll,
        destroyScroll: destroyScroll,
        blockUI: blockUI,
        unblockUI: unblockUI,
        getUrl: getUrl,
        getHash: getHash,
        confirm: confirm,
        alert: alert,
        alertLimit: alertLimit,
        notice: notice,
        tips: tips
    }
}();

/**
 * 路由器设置
 */
var Route = {
    ROOTPATH: "/yx",
    PATH: "/yx/u/api",
    // 用户登录
    LOGIN: "/login",
    // 用户退出
    LOGOUT: "/logout",
    Account: {
        PATH: "/account",
        // 列出完整的用户信息
        LIST_FULL_INFO: "/list-full-info",
        // 检查用户名是否存在
        CHECK_USERNAME_EXIST: "/check-username-exist",
        // 修改用户昵称
        MODIFY_NICKNAME: "/modify-nickname",
        // 修改用户密码
        MODIFY_PASSWORD: "/modify-password",
        // 修改头像
        MODIFY_AVATAR: "/modify-avatar",
        // 修改用户资金密码
        MODIFY_WITHDRAW_PASSWORD: "/modify-withdraw-password",
        // 准备绑定
        PREPARE_BIND: "/prepare-bind",
        // 请求绑定
        APPLY_BIND: "/apply-bind",
        // 列出卡片
        LIST_CARD: "/list-card",
        // 准备绑定卡片
        PREPARE_BIND_CARD: "/prepare-bind-card",
        // 绑定卡片
        BIND_CARD: "/bind-card",
        // 设置默认卡片
        SET_DEFAULT_CARD: "/set-default-card",
        // 获取随机密保问题
        GET_RANDOM_SECURITY: "/get-random-security",
        // 绑定密保问题
        BIND_SECURITY: "/bind-security",
        // 搜索账单
        SEARCH_BILL: "/search-bill",
        // 获取账单详情
        GET_BILL_DETAILS: "/get-bill-details",
        // 搜索充值
        SEARCH_RECHARGE: "/search-recharge",
        // 准备提现
        PREPARE_WITHDRAW: "/prepare-withdraw",
        // 提现申请
        APPLY_WITHDRAW: "/apply-withdraw",
        // 搜索提现
        SEARCH_WITHDRAW: "/search-withdraw",
        // 同账户转账
        APPLY_SELF_TRANSFER: "/apply-self-transfer",
        // 上下级转账
        APPLY_ACCOUNT_TRANSFER: "/apply-account-transfer",
        // 彩票账户报表
        REPORT_GAME_LOTTERY: "/report-game-lottery",
        // 百家乐账户报表
        REPORT_GAME_BACCARAT: "/report-game-baccarat",
        // 获取消息列表
        LIST_MESSAGE: "/list-message",
        // 获取消息详情
        GET_MESSAGE_DETAILS: "/get-message-details",
        // 发送消息
        SEND_MESSAGE: "/send-message",
        // 读取消息
        READ_MESSAGE: "/read-message",
        // 删除消息
        DELETE_MESSAGE: "/delete-message",
        // 列出系统消息
        LIST_SYSTEM_MESSAGE: "/list-system-message",
        // 清空系统消息
        CLEAR_SYSTEM_MESSAGE: "/clear-system-message",
    },
    Agent: {
        PATH: "/agent",
        // 添加新的用户
        ADD_NEW_ACCOUNT: "/add-new-account",
        // 列出来账号配额
        LIST_CODE_QUOTA: "/list-code-quota",
        // 列出来团队账号
        LIST_TEAM_ACCOUNT: "/list-team-account",
        // 列出在线用户
        LIST_ONLINE_ACCOUNT: "/list-online-account",
        // 搜索彩票游戏订单
        SEARCH_GAME_LOTTERY_ORDER: "/search-game-lottery-order",
        // 搜索账户账单
        SEARCH_ACCOUNT_BILL: "/search-account-bill",
        // 彩票账户报表
        REPORT_GAME_LOTTERY: "/report-game-lottery",
        // 百家乐账户报表
        REPORT_GAME_BACCARAT: "/report-game-baccarat"
    },
    GameLottery: {
        PATH: "/game-lottery",
        // 彩票游戏信息
        STATIC_INFO: "/static-info",
        // 彩票游戏追号时间
        STATIC_CHASE_TIME: "/static-chase-time",
        // 彩票游戏开奖号码
        STATIC_OPEN_CODE: "/static-open-code",
        // 彩票游戏开奖时间
        STATIC_OPEN_TIME: "/static-open-time",
        // 添加订单
        ADD_ORDER: "/add-order",
        // 撤销订单
        CANCEL_ORDER: "/cancel-order",
        // 获取订单
        GET_ORDER: "/get-order",
        // 搜索订单
        SEARCH_ORDER: "/search-order",
        // 拉取开奖通知
        PULL_OPEN_NOTICE: "/pull-open-notice"
    },
    GameBaccarat: {
        PATH: "/game-baccarat",
    },
    Payment: {
        PATH: "/payment",
        // 列出银行
        STATIC_LIST_BANK: "/static-list-bank",
        // 列出所有可用支付方式
        REQUEST_ALL_METHOD: "/request-all-method",
        // 请求第三方支付
        REQUEST_THRID_PAY: "/request-thrid-pay",
    },
    System: {
        PATH: "/system",
        // 列出系统公告
        LIST_NOTICE: "/list-notice",
        // 获取公告详情
        GET_NOTICE_DETAILS: "/get-notice-details",
    },
    WebAjax: {
        PATH: "/game-lottery",
        // 初始化页面
        INIT_PAGE: "/init-page",
        // 循环
        LOOP: "/loop",
        // 初始化彩票页面
        INIT_GAME_LOTTERY: "/init-game-lottery",
    },
    LotteryGroups: {
        'ssc': [11, 18, 15, 16, 19, 911],
        'pk10': [43, 204],
        '11y': [24, 21, 23, 22, 26, 28],
        '3d': [41, 42],
        'k3': [33, 35, 36, 31, 32],
        'kl8': [7, 8]
    },
    LotteryBonusGroups: [100000, 200000, 400000],
    LotteryBonusTip: function (id) {
        var ltgroups = Route.LotteryGroups;
        var limitnum = Route.LotteryBonusGroups[2];
        $.inArray(id, Route.LotteryGroups['pk10']) > -1 ? limitnum = Route.LotteryBonusGroups[1] : true;
        $.inArray(id, Route.LotteryGroups['11y']) > -1 ? limitnum = Route.LotteryBonusGroups[1] : true;
        $.inArray(id, Route.LotteryGroups['3d']) > -1 ? limitnum = Route.LotteryBonusGroups[0] : true;
        $.inArray(id, Route.LotteryGroups['k3']) > -1 ? limitnum = Route.LotteryBonusGroups[1] : true;
        $.inArray(id, Route.LotteryGroups['kl8']) > -1 ? limitnum = Route.LotteryBonusGroups[1] : true;
        return limitnum;
    }
};
/**
 * HTTP请求
 */
var LoopManager = {};
var HttpRequest = function (options) {
    var defaults = {
        type: 'post',
        data: {},
        dataType: 'json',
        async: true,
        cache: false,
        beforeSend: null,
        success: null,
        complete: null
    };
    var o = $.extend({}, defaults, options);
    $.ajax({
        type: 'post',
        url: o.url,
        data: o.data,
        dataType: 'json',
        async: o.async,
        beforeSend: function () {
            o.beforeSend && o.beforeSend();
        },
        success: function (response) {
            o.success && o.success(response);
        },
        complete: function () {
            o.complete && o.complete();
        }
    });
};

var PaymentCtrl = function () {
    var thisScope = 'Payment';
    var getScopeUrl = function (key) {
        return Route.PATH + Route[thisScope].PATH + Route[thisScope][key];
    }
    var requestAllMethod = function (options) {
        options.url = getScopeUrl('REQUEST_ALL_METHOD');
        //console.log(options);
        HttpRequest(options);
    }
    var requestThridPay = function (options) {
        options.url = getScopeUrl('REQUEST_THRID_PAY');
        HttpRequest(options);
    }
    return {
        requestAllMethod: requestAllMethod,
        requestThridPay: requestThridPay
    }
}();

/**
 * 数据工厂
 */
var AppData = function () {

    var isLogin = false; // 是否登录
    var mainAccount; // 主账户
    var lotteryAccount; // 彩票账户
    var baccaratAccount; // 百家乐账户
    var info; // 信息
    var msgCount;

    var init = function (options) {
        if (options === undefined) {
            options = {};
        }
        options.url = Route.ROOTPATH + Route.WebAjax.PATH + Route.WebAjax.INIT_PAGE;
        options.async = false;
        options.success = function (response) {
            if (response.error == 0) {
                var data = response.data;
                isLogin = data.isLogin;
                if (isLogin) {
                    mainAccount = data.main;
                    lotteryAccount = data.lottery;
                    info = data.info;
                    msgCount = data.msgCount;
                }
                //console.log(mainAccount.type=='0');
                if (mainAccount.type == '0') {
                    $('#agent-top-nav').hide()
                } else {
                    $('#agent-top-nav').show()
                }

                setTimeout(function () {
                    //console.log(parseInt(lotteryAccount.code,10)<1701,$('#bonuspage').size(),$('.nav').size());
                    if (parseInt(lotteryAccount.code, 10) < 1701) {
                        $('a[data-dk-dropdown-value="91"]').parent().remove();
                        $('#bonuspage').remove();
                    } else {
                        $('#bonuspage').show();
                    }
                }, 1000);
            }
        };
        HttpRequest(options);
    };

    return {
        init: init,
        isLogin: function () {
            return isLogin;
        },
        getMainAccount: function () {
            return mainAccount;
        },
        getLotteryAccount: function () {
            return lotteryAccount;
        },
        getBaccaratAccount: function () {
            return baccaratAccount;
        },
        getInfo: function () {
            return info;
        },
        getMsgCount: function () {
            return msgCount;
        }
    }

}();


// imgscroll
(function ($) {
  $.fn.imgscroll = function(o) {
    var defaults = {
      speed: 40,
      amount: 0,
      width: 1,
      dir: "left"
    };
    o = $.extend(defaults, o);
    return this.each(function() {
      var _li = $("li", this);
      _li.parent().parent().css({
        overflow: "hidden",
        position: "relative"
      }); //div
      _li.parent().css({
        margin: "0",
        padding: "0",
        overflow: "hidden",
        position: "relative",
        "list-style": "none"
      }); //ul
      _li.css({
        position: "relative",
        overflow: "hidden"
      }); //li
      if (o.dir == "left") _li.css({
        float: "left"
      });
      //初始大小
      var _li_size = 0;
      for (var i = 0; i < _li.size(); i++)
        _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
      //循环所需要的元素
      if (o.dir == "left") _li.parent().css({
        width: (_li_size * 3) + "px"
      });
      _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
      _li = $("li", this);

      //滚动
      var _li_scroll = 0;

      function goto() {
        _li_scroll += o.width;
        if (_li_scroll > _li_size) {
          _li_scroll = 0;
          _li.parent().css(o.dir == "left" ? {
            left: -_li_scroll
          } : {
            top: -_li_scroll
          });
          _li_scroll += o.width;
        }
        _li.parent().animate(o.dir == "left" ? {
          left: -_li_scroll
        } : {
          top: -_li_scroll
        }, o.amount);
      }
      //开始
      var move = setInterval(function() {
        goto();
      }, o.speed);
      _li.parent().hover(function() {
        clearInterval(move);
      }, function() {
        clearInterval(move);
        move = setInterval(function() {
          goto();
        }, o.speed);
      });
    });
  };
})(jQuery);
