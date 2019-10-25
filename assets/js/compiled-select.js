! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        h = d.toString,
        f = h.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, o, a = (n = n || i).createElement("script");
        if (a.text = e, t)
            for (r in v)(o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = "3.4.1",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: w,
        constructor: _,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = e[t], "__proto__" !== t && a !== i && (c && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}, r = !1, a[t] = _.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, _.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || h.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                s = [];
            if (x(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return a.apply([], s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var S = function(e) {
        var t, n, i, r, o, a, s, l, c, u, d, h, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            _ = e.document,
            C = 0,
            x = 0,
            S = le(),
            T = le(),
            k = le(),
            E = le(),
            O = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            D = [],
            P = D.pop,
            I = D.push,
            L = D.push,
            N = D.slice,
            $ = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
            R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(j + "+", "g"),
            q = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            B = new RegExp("^" + j + "*," + j + "*"),
            V = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            X = new RegExp(j + "|>"),
            Y = new RegExp(R),
            U = new RegExp("^" + H + "$"),
            z = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                h()
            },
            ae = we(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(D = N.call(_.childNodes), _.childNodes), D[_.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: D.length ? function(e, t) {
                    I.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, i, r) {
            var o, s, c, u, d, p, v, y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;
            if (!r && ((t ? t.ownerDocument || t : _) !== f && h(t), t = t || f, g)) {
                if (11 !== C && (d = J.exec(e)))
                    if (o = d[1]) {
                        if (9 === C) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === C && X.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = w), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + be(p[s]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, i, r)
        }

        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce(function(t) {
                return t = +t, ce(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Q.test(t || n && n.nodeName || "HTML")
            }, h = se.setDocument = function(e) {
                var t, r, a = e ? e.ownerDocument || e : _;
                return a !== f && 9 === a.nodeType && a.documentElement && (p = (f = a).documentElement, g = !o(f), _ !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ue(function(e) {
                    return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ue(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, O = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === _ && b(_, e) ? -1 : t === f || t.ownerDocument === _ && b(_, t) ? 1 : u ? $(u, e) - $(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? $(u, e) - $(u, t) : 0;
                    if (r === o) return he(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? he(a[i], s[i]) : a[i] === _ ? -1 : s[i] === _ ? 1 : 0
                }), f
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && h(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    E(t, !0)
                }
                return 0 < se(t, f, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && h(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== f && h(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(ie, re)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(O), d) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = se.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var r = se.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(F, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, h, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (f = (c = (u = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [C, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b)
                                    for (;
                                        (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]), h !== t)););
                                return (b -= r) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : 1 < r.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) e[i = $(e, o[a])] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var t = [],
                            n = [],
                            i = s(e.replace(q, "$1"));
                        return i[w] ? ce(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ce(function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    }),
                    contains: ce(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || r(t)).indexOf(e)
                            }
                    }),
                    lang: ce(function(e) {
                        return U.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function we(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = x++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, d, h = [C, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === C && c[1] === s) return h[2] = c[2];
                                if ((u[o] = h)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function _e(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function xe(e, t, n, i, r, o) {
            return i && !i[w] && (i = xe(i)), r && !r[w] && (r = xe(r, o)), ce(function(o, a, s, l) {
                var c, u, d, h = [],
                    f = [],
                    p = a.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : Ce(g, h, e, s, l),
                    v = n ? r || (o ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i)
                    for (c = Ce(v, f), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && -1 < (c = r ? $(o, d) : h[u]) && (o[c] = !(a[c] = d))
                    }
                } else v = Ce(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : L.apply(a, v)
            })
        }

        function Se(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = we(function(e) {
                    return e === t
                }, s, !0), d = we(function(e) {
                    return -1 < $(t, e)
                }, s, !0), h = [function(e, n, i) {
                    var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) h = [we(_e(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return xe(1 < l && _e(h), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < r && Se(e.slice(l, r)), r < o && Se(e = e.slice(r)), r < o && be(e))
                    }
                    h.push(n)
                }
            return _e(h)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, r, o, a, s, l, c, u = T[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s;) {
                for (a in n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(q, " ")
                    }), s = s.slice(n.length)), i.filter) !(r = z[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : T(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, r, o, s, l, u, d = [],
                p = [],
                m = k[e + " "];
            if (!m) {
                for (t || (t = a(e)), n = t.length; n--;)(m = Se(t[n]))[w] ? d.push(m) : p.push(m);
                (m = k(e, (r = p, s = 0 < (o = d).length, l = 0 < r.length, u = function(e, t, n, a, u) {
                    var d, p, m, v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        _ = c,
                        x = e || l && i.find.TAG("*", u),
                        S = C += null == _ ? 1 : Math.random() || .1,
                        T = x.length;
                    for (u && (c = t === f || t || u); y !== T && null != (d = x[y]); y++) {
                        if (l && d) {
                            for (p = 0, t || d.ownerDocument === f || (h(d), n = !g); m = r[p++];)
                                if (m(d, t || f, n)) {
                                    a.push(d);
                                    break
                                }
                            u && (C = S)
                        }
                        s && ((d = !m && d) && v--, e && b.push(d))
                    }
                    if (v += y, s && y !== v) {
                        for (p = 0; m = o[p++];) m(b, w, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || w[y] || (w[y] = P.call(a));
                            w = Ce(w)
                        }
                        L.apply(a, w), u && !e && 0 < w.length && 1 < v + o.length && se.uniqueSort(a)
                    }
                    return u && (C = S, c = _), b
                }, s ? ce(u) : u))).selector = e
            }
            return m
        }, l = se.select = function(e, t, n, r) {
            var o, l, c, u, d, h = "function" == typeof e && e,
                f = !r && a(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = z.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                    if ((d = i.find[u]) && (r = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && be(l))) return L.apply(n, r), n;
                        break
                    }
            }
            return (h || s(e, f))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(M, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), se
    }(e);
    _.find = S, _.expr = S.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = S.uniqueSort, _.text = S.getText, _.isXMLDoc = S.isXML, _.contains = S.contains, _.escapeSelector = S.escape;
    var T = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && _(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        E = _.expr.match.needsContext;

    function O(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return g(t) ? _.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return -1 < l.call(t, e) !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (_.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
            return 1 < i ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && E.test(e) ? _(e) : e || [], !1).length
        }
    });
    var P, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || P, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && _.isPlainObject(t))
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, P = _(i);
    var L = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && _(e);
            if (!E.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (O(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, i) {
            var r = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), 1 < this.length && (N[e] || _.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function W(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, _.each(t.match(M) || [], function(e, t) {
            n[t] = !0
        }), n) : _.extend({}, e);
        var i, r, o, a, s = [],
            l = [],
            c = -1,
            u = function() {
                for (a = a || e.once, o = i = !0; l.length; c = -1)
                    for (r = l.shift(); ++c < s.length;) !1 === s[c].apply(r[0], r[1]) && e.stopOnFalse && (c = s.length, r = !1);
                e.memory || (r = !1), i = !1, a && (s = r ? [] : "")
            },
            d = {
                add: function() {
                    return s && (r && !i && (c = s.length - 1, l.push(r)), function t(n) {
                        _.each(n, function(n, i) {
                            g(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== b(i) && t(i)
                        })
                    }(arguments), r && !i && u()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = _.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < _.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = l = [], s = r = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = l = [], r || i || (s = r = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, _.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(n, function(n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;

                        function a(t, n, i, r) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? r ? c.call(e, a(o, n, j, r), a(o, n, H, r)) : (o++, c.call(e, a(o, n, j, r), a(o, n, H, r), a(o, n, j, n.notifyWith))) : (i !== j && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), o <= t + 1 && (i !== H && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return _.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(r) ? r : j, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : j)), n[2][3].add(a(0, e, g(i) ? i : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, r) : r
                    }
                },
                o = {};
            return _.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                a = _.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = 1 < arguments.length ? o.call(arguments) : n, --t || a.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (W(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(r[n] && r[n].then))) return a.then();
            for (; n--;) W(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = _.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), _.ready()
    }
    _.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || F.resolveWith(i, [_])
        }
    }), _.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
    var B = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (s in r = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, g(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(_(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        V = /^-ms-/,
        X = /-([a-z])/g;

    function Y(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(V, "ms-").replace(X, Y)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = _.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[U(t)] = n;
            else
                for (i in t) r[U(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(M) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var K = new Q,
        G = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return G.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = G.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = U(i.slice(5)), ee(o, i, r[i]));
                    K.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function() {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, _.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                _.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = _.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = i.documentElement,
        oe = function(e) {
            return _.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    re.getRootNode && (oe = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === _.css(e, "display")
        },
        le = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
            return r
        };

    function ce(e, t, n, i) {
        var r, o, a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (_.cssNumber[t] || "px" !== c && +l) && ne.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) _.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, _.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var ue = {};

    function de(e, t) {
        for (var n, i, r, o, a, s, l, c = [], u = 0, d = e.length; u < d; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = K.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = a = o = void 0, a = (r = i).ownerDocument, s = r.nodeName, (l = ue[s]) || (o = a.body.appendChild(a.createElement(s)), l = _.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[s] = l)))) : "none" !== n && (c[u] = "none", K.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    _.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? _.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, we = /<|&#?\w+;/;

    function _e(e, t, n, i, r) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === b(o)) _.merge(h, o.nodeType ? [o] : o);
                else if (we.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (fe.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            _.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; o = h[f++];)
            if (i && -1 < _.inArray(o, i)) r && r.push(o);
            else if (c = oe(o), a = me(d.appendChild(o), "script"), c && ve(a), n)
            for (u = 0; o = a[u++];) pe.test(o.type || "") && n.push(o);
        return d
    }
    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function ke() {
        return !1
    }

    function Ee(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Oe(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) Oe(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ke;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function(e) {
            return _().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, r, i, n)
        })
    }

    function Ae(e, t, n) {
        n ? (K.set(e, t, !1), _.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, a = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments), K.set(this, t, a), i = n(this, t), this[t](), a !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : r = {}, a !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                } else a.length && (K.set(this, t, {
                    value: _.event.trigger(_.extend(a[0], _.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, t) && _.event.add(e, t, Te)
    }
    _.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, h, f, p, g, m = K.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(re, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(M) || [""]).length; c--;) f = g = (s = Se.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, u = _.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && _.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, h, f, p, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--;)
                    if (f = g = (s = Se.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                        for (d = _.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) u = h[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || _.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) _.event.remove(e, f + t[c], n, i, !0);
                _.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = _.event.fix(e),
                l = new Array(arguments.length),
                c = (K.get(this, "events") || {})[s.type] || [],
                u = _.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = _.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < _(r, this).index(c) : _.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && O(t, "input") && Ae(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && O(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && O(t, "input") && K.get(t, "click") || O(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        _.event.special[e] = {
            setup: function() {
                return Ae(this, e, Ee), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || _.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, i) {
            return Oe(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Oe(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), c = o.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) _.event.add(t, r, c[r][n]);
            G.hasData(e) && (s = G.access(e), l = _.extend({}, s), G.set(t, l))
        }
    }

    function He(e, t, n, i) {
        t = a.apply([], t);
        var r, o, s, l, c, u, d = 0,
            h = e.length,
            f = h - 1,
            m = t[0],
            v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && Ie.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), He(o, t, n, i)
        });
        if (h && (o = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (s = _.map(me(r, "script"), $e)).length; d < h; d++) c = r, d !== f && (c = _.clone(c, !0, !0), l && _.merge(s, me(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, _.map(s, Me), d = 0; d < l; d++) c = s[d], pe.test(c.type || "") && !K.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : y(c.textContent.replace(Le, ""), c, u))
        }
        return e
    }

    function We(e, t, n) {
        for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(me(i)), i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l, c, u = e.cloneNode(!0),
                d = oe(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (a = me(u), i = 0, r = (o = me(e)).length; i < r; i++) s = o[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && he.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(u), i = 0, r = o.length; i < r; i++) je(o[i], a[i]);
                else je(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !d && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return He(this, arguments, function(t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, i = [], r = _(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), _(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        qe = new RegExp(ie.join("|"), "i");

    function Be(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = _.style(e, t)), !p.pixelBoxStyles() && Re.test(a) && qe.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ve(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", a = 12 === n(u.offsetWidth / 3), re.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, a, s, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var Xe = ["Webkit", "Moz", "ms"],
        Ye = i.createElement("div").style,
        Ue = {};

    function ze(e) {
        return _.cssProps[e] || Ue[e] || (e in Ye ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ye) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + ie[a], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ie[a], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ie[a] + "Width", !0, r))) : (l += _.css(e, "padding" + ie[a], !0, r), "padding" !== n ? l += _.css(e, "border" + ie[a] + "Width", !0, r) : s += _.css(e, "border" + ie[a] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = Fe(e),
            r = (!p.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
            o = r,
            a = Be(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === _.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
    }

    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = U(t),
                    l = Ke.test(t),
                    c = e.style;
                if (l || (t = ze(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (_.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = U(t);
            return Ke.test(t) || (t = ze(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in Ze && (r = Ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Qe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : le(e, Ge, function() {
                    return tt(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = Fe(e),
                    a = !p.scrollboxSize() && "absolute" === o.position,
                    s = (a || i) && "border-box" === _.css(e, "boxSizing", !1, o),
                    l = i ? et(e, t, i, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Je(0, n, l)
            }
        }
    }), _.cssHooks.marginLeft = Ve(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Je)
    }), _.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e), r = t.length; a < r; a++) o[t[a]] = _.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((_.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = nt.prototype.init, _.fx.step = {};
    var it, rt, ot, at, st = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ct() {
        rt && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, _.fx.interval), _.fx.tick())
    }

    function ut() {
        return e.setTimeout(function() {
            it = void 0
        }), it = Date.now()
    }

    function dt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ht(e, t, n) {
        for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function ft(e, t, n) {
        var i, r, o = 0,
            a = ft.prefilters.length,
            s = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = it || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (r = t[i = U(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = _.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); o < a; o++)
            if (i = ft.prefilters[o].call(c, e, u, c.opts)) return g(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(u, ht, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t,
                h = this,
                f = {},
                p = e.style,
                g = e.nodeType && se(e),
                m = K.get(e, "fxshow");
            for (i in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, h.always(function() {
                    h.always(function() {
                        a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (r = t[i], st.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || _.style(e, i)
                }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = _.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && de([e], !0), h.done(function() {
                    for (i in g || de([e]), K.remove(e, "fxshow"), f) _.style(e, i, f[i])
                })), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), _.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            g(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = _.isEmptyObject(e),
                o = _.speed(t, n, i),
                a = function() {
                    var t = ft(this, _.extend({}, e), o);
                    (r || K.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = _.timers,
                    a = K.get(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a) a[r] && a[r].stop && lt.test(r) && i(a[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || _.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = K.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = _.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(e, t) {
        var n = _.fn[t];
        _.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r)
        }
    }), _.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        _.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), _.timers = [], _.fx.tick = function() {
        var e, t = 0,
            n = _.timers;
        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), it = void 0
    }, _.fx.timer = function(e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        rt || (rt = !0, ct())
    }, _.fx.stop = function() {
        rt = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(t, n) {
        return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }, ot = i.createElement("input"), at = i.createElement("select").appendChild(i.createElement("option")), ot.type = "checkbox", p.checkOn = "" !== ot.value, p.optSelected = at.selected, (ot = i.createElement("input")).value = "t", ot.type = "radio", p.radioValue = "t" === ot.value;
    var pt, gt = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return B(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && O(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(M);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || _.find.attr;
        gt[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = gt[a], gt[a] = r, r = null != n(e, t, i) ? a : null, gt[a] = o), r
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(M) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return B(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = yt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = yt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, bt(this), t), t)
            }) : this.each(function() {
                var t, r, o, a;
                if (i)
                    for (r = 0, o = _(this), a = wt(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : yt(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = _.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < _.inArray(_.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        }, p.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(t, n, r, o) {
            var a, s, l, c, u, h, f, p, v = [r || i],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), f = _.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !m(r)) {
                    for (c = f.delegateType || y, Ct.test(c + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = 1 < a ? c : f.bindType || y, (h = (K.get(s, "events") || {})[t.type] && K.get(s, "handle")) && h.apply(s, n), (h = u && s[u]) && h.apply && z(s) && (t.result = h.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !z(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, xt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, xt), _.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(i, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), p.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = K.access(i, t);
                r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = K.access(i, t) - 1;
                r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    });
    var St = e.location,
        Tt = Date.now(),
        kt = /\?/;
    _.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n
    };
    var Et = /\[\]$/,
        Ot = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function Pt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) _.each(t, function(t, r) {
            n || Et.test(e) ? i(e, r) : Pt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) Pt(e + "[" + r + "]", t[r], n, i)
    }
    _.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Pt(n, e[n], t, r);
        return i.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        Lt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ht = {},
        Wt = {},
        Rt = "*/".concat("*"),
        Ft = i.createElement("a");

    function qt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Bt(e, t, n, i) {
        var r = {},
            o = e === Wt;

        function a(s) {
            var l;
            return r[s] = !0, _.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Vt(e, t) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e
    }
    Ft.href = St.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, _.ajaxSettings), t) : Vt(_.ajaxSettings, e)
        },
        ajaxPrefilter: qt(Ht),
        ajaxTransport: qt(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, u, d, h, f, p = _.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = p.statusCode || {},
                w = {},
                C = {},
                x = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = $t.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), T(0, t), this
                    }
                };
            if (v.promise(S), p.url = ((t || p.url || St.href) + "").replace(jt, St.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Bt(Ht, p, n, S), u) return S;
            for (h in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Mt.test(p.type), o = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (kt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Nt, "$1"), f = (kt.test(o) ? "&" : "?") + "_=" + Tt++ + f), p.url = o + f), p.ifModified && (_.lastModified[o] && S.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && S.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || u)) return S.abort();
            if (x = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = Bt(Wt, p, n, S)) {
                if (S.readyState = 1, d && m.trigger("ajaxSend", [S, p]), u) return S;
                p.async && 0 < p.timeout && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(w, T)
                } catch (t) {
                    if (u) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(t, n, i, s) {
                var c, h, f, w, C, x = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", S.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, i && (w = function(e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, S, i)), w = function(e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, S, c), c ? (p.ifModified && ((C = S.getResponseHeader("Last-Modified")) && (_.lastModified[o] = C), (C = S.getResponseHeader("etag")) && (_.etag[o] = C)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state, h = w.data, c = !(f = w.error))) : (f = x, !t && x || (x = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || x) + "", c ? v.resolveWith(g, [h, x, S]) : v.rejectWith(g, [S, x, f]), S.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, p, c ? h : f]), y.fireWith(g, [S, x]), d && (m.trigger("ajaxComplete", [S, p]), --_.active || _.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function(e, t) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                _.globalEval(e, t)
            }
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Xt = {
            0: 200,
            1223: 204
        },
        Yt = _.ajaxSettings.xhr();
    p.cors = !!Yt && "withCredentials" in Yt, p.ajax = Yt = !!Yt, _.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Yt && !t.crossDomain) return {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Xt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (r) {
                    if (n) throw r
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, o) {
                t = _("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ut, zt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || _.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || _.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Ut = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = _e([e], t, a), a && a.length && _(a).remove(), _.merge([], o.childNodes)));
        var r, o, a
    }, _.fn.load = function(e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = yt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c = _.css(e, "position"),
                u = _(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - _.css(i, "marginTop", !0),
                    left: t.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(i) {
            return B(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = Ve(p.pixelPosition, function(e, n) {
            if (n) return n = Be(e, t), Re.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            _.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return B(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, s) : _.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, r
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = O, _.isFunction = g, _.isWindow = m, _.camelCase = U, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kt = e.jQuery,
        Gt = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = Gt), t && e.jQuery === _ && (e.jQuery = Kt), _
    }, t || (e.jQuery = e.$ = _), _
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var r = t(e),
            o = r.overflow,
            a = r.overflowX,
            s = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(n(e))
    }

    function r(e) {
        return 11 === e ? U : 10 === e ? z : U || z
    }

    function o(e) {
        if (!e) return document.documentElement;
        for (var n = r(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var a = i && i.nodeName;
        return a && "BODY" !== a && "HTML" !== a ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }

    function s(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(r, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || i.contains(r)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(c) ? c : o(c);
        var u = a(e);
        return u.host ? s(u.host, t) : s(e, a(t).host)
    }

    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = l(t, "top"),
            r = l(t, "left"),
            o = n ? -1 : 1;
        return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function d(e, t, n, i) {
        return F(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function h(e) {
        var t = e.body,
            n = e.documentElement,
            i = r(10) && getComputedStyle(n);
        return {
            height: d("Height", t, n, i),
            width: d("Width", t, n, i)
        }
    }

    function f(e) {
        return Z({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function p(e) {
        var n = {};
        try {
            if (r(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top"),
                    o = l(e, "left");
                n.top += i, n.left += o, n.bottom += i, n.right += o
            } else n = e.getBoundingClientRect()
        } catch (e) {}
        var a = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            s = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
            c = s.width || e.clientWidth || a.right - a.left,
            d = s.height || e.clientHeight || a.bottom - a.top,
            p = e.offsetWidth - c,
            g = e.offsetHeight - d;
        if (p || g) {
            var m = t(e);
            p -= u(m, "x"), g -= u(m, "y"), a.width -= p, a.height -= g
        }
        return f(a)
    }

    function g(e, n) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            a = r(10),
            s = "HTML" === n.nodeName,
            l = p(e),
            u = p(n),
            d = i(e),
            h = t(n),
            g = parseFloat(h.borderTopWidth, 10),
            m = parseFloat(h.borderLeftWidth, 10);
        o && s && (u.top = F(u.top, 0), u.left = F(u.left, 0));
        var v = f({
            top: l.top - u.top - g,
            left: l.left - u.left - m,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0, v.marginLeft = 0, !a && s) {
            var y = parseFloat(h.marginTop, 10),
                b = parseFloat(h.marginLeft, 10);
            v.top -= g - y, v.bottom -= g - y, v.left -= m - b, v.right -= m - b, v.marginTop = y, v.marginLeft = b
        }
        return (a && !o ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = c(v, n)), v
    }

    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = g(e, n),
            r = F(n.clientWidth, window.innerWidth || 0),
            o = F(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : l(n),
            s = t ? 0 : l(n, "left");
        return f({
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: r,
            height: o
        })
    }

    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }

    function y(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(e, t, r, o) {
        var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            l = {
                top: 0,
                left: 0
            },
            c = a ? y(e) : s(e, t);
        if ("viewport" === o) l = m(c, a);
        else {
            var u;
            "scrollParent" === o ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === o ? e.ownerDocument.documentElement : o;
            var d = g(u, c, a);
            if ("HTML" !== u.nodeName || v(c)) l = d;
            else {
                var f = h(e.ownerDocument),
                    p = f.height,
                    b = f.width;
                l.top += d.top - d.marginTop, l.bottom = p + d.top, l.left += d.left - d.marginLeft, l.right = b + d.left
            }
        }
        var w = "number" == typeof(r = r || 0);
        return l.left += w ? r : r.left || 0, l.top += w ? r : r.top || 0, l.right -= w ? r : r.right || 0, l.bottom -= w ? r : r.bottom || 0, l
    }

    function w(e) {
        return e.width * e.height
    }

    function _(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = b(n, i, o, r),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map(function(e) {
                return Z({
                    key: e
                }, s[e], {
                    area: w(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function C(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return g(n, i ? y(t) : s(t, n), i)
    }

    function x(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function S(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, n) {
        n = n.split("-")[0];
        var i = x(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[S(s)], r
    }

    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function E(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = k(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
        }), n
    }

    function O(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function A(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function D(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function P(e, t, n, r) {
        n.updateBound = r, D(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return function e(t, n, r, o) {
            var a = "BODY" === t.nodeName,
                s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, r, {
                passive: !0
            }), a || e(i(s.parentNode), n, r, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function I() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, D(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function L(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function N(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && L(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function $(e, t, n) {
        var i = k(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function M(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = ee.indexOf(e),
            i = ee.slice(n + 1).concat(ee.slice(0, n));
        return t ? i.reverse() : i
    }

    function j(e, t, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            a = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = a.indexOf(k(a, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return (c = c.map(function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                a = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        a = r[2];
                    if (!o) return e;
                    if (0 === a.indexOf("%")) {
                        var s;
                        switch (a) {
                            case "%p":
                                s = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = i
                        }
                        return f(s)[t] / 100 * o
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? F(document.documentElement.clientHeight, window.innerHeight || 0) : F(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                L(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }
    for (var H = Math.min, W = Math.round, R = Math.floor, F = Math.max, q = "undefined" != typeof window && "undefined" != typeof document, B = ["Edge", "Trident", "Firefox"], V = 0, X = 0; X < B.length; X += 1)
        if (q && 0 <= navigator.userAgent.indexOf(B[X])) {
            V = 1;
            break
        }
    var Y = q && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, V))
            }
        },
        U = q && !(!window.MSInputMethodContext || !document.documentMode),
        z = q && /MSIE 10/.test(navigator.userAgent),
        Q = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        K = function() {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        G = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Z = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ee = J.slice(3),
        te = "flip",
        ne = "clockwise",
        ie = "counterclockwise",
        re = function() {
            function t(n, i) {
                var r = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Q(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = Y(this.update.bind(this)), this.options = Z({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Z({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                    r.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return Z({
                        name: e
                    }, r.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }
            return K(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = _(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[A("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return I.call(this)
                }
            }]), t
        }();
    return re.Utils = ("undefined" == typeof window ? global : window).PopperUtils, re.placements = J, re.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            a = r.popper,
                            s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top",
                            c = s ? "width" : "height",
                            u = {
                                start: G({}, l, o[l]),
                                end: G({}, l, o[l] + o[c] - a[c])
                            };
                        e.offsets.popper = Z({}, a, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        a = o.popper,
                        s = o.reference,
                        l = r.split("-")[0];
                    return n = L(+i) ? [+i, 0] : j(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var i = A("transform"),
                        r = e.instance.popper.style,
                        a = r.top,
                        s = r.left,
                        l = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var c = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = a, r.left = s, r[i] = l, t.boundaries = c;
                    var u = t.priority,
                        d = e.offsets.popper,
                        h = {
                            primary: function(e) {
                                var n = d[e];
                                return d[e] < c[e] && !t.escapeWithReference && (n = F(d[e], c[e])), G({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    i = d[n];
                                return d[e] > c[e] && !t.escapeWithReference && (i = H(d[n], c[e] - ("right" === e ? d.width : d.height))), G({}, n, i)
                            }
                        };
                    return u.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = Z({}, d, h[t](e))
                    }), e.offsets.popper = d, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = R,
                        a = -1 !== ["top", "bottom"].indexOf(r),
                        s = a ? "right" : "bottom",
                        l = a ? "left" : "top",
                        c = a ? "width" : "height";
                    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var i;
                    if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r))) return e
                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0],
                        a = e.offsets,
                        s = a.popper,
                        l = a.reference,
                        c = -1 !== ["left", "right"].indexOf(o),
                        u = c ? "height" : "width",
                        d = c ? "Top" : "Left",
                        h = d.toLowerCase(),
                        p = c ? "left" : "top",
                        g = c ? "bottom" : "right",
                        m = x(r)[u];
                    l[g] - m < s[h] && (e.offsets.popper[h] -= s[h] - (l[g] - m)), l[h] + m > s[g] && (e.offsets.popper[h] += l[h] + m - s[g]), e.offsets.popper = f(e.offsets.popper);
                    var v = l[h] + l[u] / 2 - m / 2,
                        y = t(e.instance.popper),
                        b = parseFloat(y["margin" + d], 10),
                        w = parseFloat(y["border" + d + "Width"], 10),
                        _ = v - e.offsets.popper[h] - b - w;
                    return _ = F(H(s[u] - m, _), 0), e.arrowElement = r, e.offsets.arrow = (G(i = {}, h, W(_)), G(i, p, ""), i), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (O(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0],
                        r = S(i),
                        o = e.placement.split("-")[1] || "",
                        a = [];
                    switch (t.behavior) {
                        case te:
                            a = [i, r];
                            break;
                        case ne:
                            a = M(i);
                            break;
                        case ie:
                            a = M(i, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function(s, l) {
                        if (i !== s || a.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = S(i);
                        var c = e.offsets.popper,
                            u = e.offsets.reference,
                            d = R,
                            h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                            f = d(c.left) < d(n.left),
                            p = d(c.right) > d(n.right),
                            g = d(c.top) < d(n.top),
                            m = d(c.bottom) > d(n.bottom),
                            v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                        (h || v || b) && (e.flipped = !0, (h || v) && (i = a[l + 1]), b && (o = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = Z({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"))
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        a = -1 !== ["left", "right"].indexOf(n),
                        s = -1 === ["top", "left"].indexOf(n);
                    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = S(t), e.offsets.popper = f(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = k(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        a = k(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, l, c = void 0 === a ? t.gpuAcceleration : a,
                        u = o(e.instance.popper),
                        d = p(u),
                        h = {
                            position: r.position
                        },
                        f = {
                            left: R(r.left),
                            top: W(r.top),
                            bottom: W(r.bottom),
                            right: R(r.right)
                        },
                        g = "bottom" === n ? "top" : "bottom",
                        m = "right" === i ? "left" : "right",
                        v = A("transform");
                    if (l = "bottom" == g ? "HTML" === u.nodeName ? -u.clientHeight + f.bottom : -d.height + f.bottom : f.top, s = "right" == m ? "HTML" === u.nodeName ? -u.clientWidth + f.right : -d.width + f.right : f.left, c && v) h[v] = "translate3d(" + s + "px, " + l + "px, 0)", h[g] = 0, h[m] = 0, h.willChange = "transform";
                    else {
                        var y = "bottom" == g ? -1 : 1,
                            b = "right" == m ? -1 : 1;
                        h[g] = l * y, h[m] = s * b, h.willChange = g + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Z({}, w, e.attributes), e.styles = Z({}, h, e.styles), e.arrowStyles = Z({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return N(e.instance.popper, e.styles),
                        function(e, t) {
                            Object.keys(t).forEach(function(n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && N(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = C(r, t, e, n.positionFixed),
                        a = _(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), N(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, re
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";

    function l(e) {
        var n = this,
            i = !1;
        return t(this).one(c.TRANSITION_END, function() {
            i = !0
        }), setTimeout(function() {
            i || c.triggerTransitionEnd(n)
        }, e), this
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        a = o && c.isElement(o) ? "element" : (s = o, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                }
            var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
        }
    };
    t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var u = t.fn.alert,
        d = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        },
        h = "alert",
        f = "fade",
        p = "show",
        g = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function(e) {
                var n = c.getSelectorFromElement(e),
                    i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + h)[0]), i
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(d.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass(p), t(e).hasClass(f)) {
                    var i = c.getTransitionDurationFromElement(e);
                    t(e).one(c.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.alert");
                    r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), t.fn.alert = g._jQueryInterface, t.fn.alert.Constructor = g, t.fn.alert.noConflict = function() {
        return t.fn.alert = u, g._jQueryInterface
    };
    var m = t.fn.button,
        v = "active",
        y = "btn",
        b = "focus",
        w = '[data-toggle^="button"]',
        _ = '[data-toggle="buttons"]',
        C = 'input:not([type="hidden"])',
        x = ".active",
        S = ".btn",
        T = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        },
        k = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    i = t(this._element).closest(_)[0];
                if (i) {
                    var r = this._element.querySelector(C);
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains(v)) e = !1;
                            else {
                                var o = i.querySelector(x);
                                o && t(o).removeClass(v)
                            }
                        if (e) {
                            if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            r.checked = !this._element.classList.contains(v), t(r).trigger("change")
                        }
                        r.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && t(this._element).toggleClass(v)
            }, n.dispose = function() {
                t.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.button");
                    i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(T.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(y) || (n = t(n).closest(S)), k._jQueryInterface.call(t(n), "toggle")
    }).on(T.FOCUS_BLUR_DATA_API, w, function(e) {
        var n = t(e.target).closest(S)[0];
        t(n).toggleClass(b, /^focus(in)?$/.test(e.type))
    }), t.fn.button = k._jQueryInterface, t.fn.button.Constructor = k, t.fn.button.noConflict = function() {
        return t.fn.button = m, k._jQueryInterface
    };
    var E = "carousel",
        O = ".bs.carousel",
        A = t.fn[E],
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        P = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        I = "next",
        L = "prev",
        N = "left",
        $ = "right",
        M = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        j = "carousel",
        H = "active",
        W = "slide",
        R = "carousel-item-right",
        F = "carousel-item-left",
        q = "carousel-item-next",
        B = "carousel-item-prev",
        V = "pointer-event",
        X = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        Y = {
            TOUCH: "touch",
            PEN: "pen"
        },
        U = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(X.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(I)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(L)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(X.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(X.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(M.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = e > i ? I : L;
                        this._slide(r, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(O), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = a({}, D, e), c.typeCheckConfig(E, e, P), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    t > 0 && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(M.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(M.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(M.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(X.ITEM_IMG)).on(M.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(M.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(M.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add(V)) : (t(this._element).on(M.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(M.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), t(this._element).on(M.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(X.ITEM)) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === I,
                    i = e === L,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var a = (r + (e === L ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, n._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(X.ACTIVE_ITEM)),
                    o = t.Event(M.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i
                    });
                return t(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(X.ACTIVE));
                    t(n).removeClass(H);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(H)
                }
            }, n._slide = function(e, n) {
                var i, r, o, a = this,
                    s = this._element.querySelector(X.ACTIVE_ITEM),
                    l = this._getItemIndex(s),
                    u = n || s && this._getItemByDirection(e, s),
                    d = this._getItemIndex(u),
                    h = Boolean(this._interval);
                if (e === I ? (i = F, r = q, o = N) : (i = R, r = B, o = $), u && t(u).hasClass(H)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                    var f = t.Event(M.SLID, {
                        relatedTarget: u,
                        direction: o,
                        from: l,
                        to: d
                    });
                    if (t(this._element).hasClass(W)) {
                        t(u).addClass(r), c.reflow(u), t(s).addClass(i), t(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = c.getTransitionDurationFromElement(s);
                        t(s).one(c.TRANSITION_END, function() {
                            t(u).removeClass(i + " " + r).addClass(H), t(s).removeClass(H + " " + r + " " + i), a._isSliding = !1, setTimeout(function() {
                                return t(a._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(s).removeClass(H), t(u).addClass(H), this._isSliding = !1, t(this._element).trigger(f);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.carousel"),
                        r = a({}, D, t(this).data());
                    "object" == typeof n && (r = a({}, r, n));
                    var o = "string" == typeof n ? n : r.slide;
                    if (i || (i = new e(this, r), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof o) {
                        if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                        i[o]()
                    } else r.interval && r.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var i = c.getSelectorFromElement(this);
                if (i) {
                    var r = t(i)[0];
                    if (r && t(r).hasClass(j)) {
                        var o = a({}, t(r).data(), t(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (o.interval = !1), e._jQueryInterface.call(t(r), o), s && t(r).data("bs.carousel").to(s), n.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return D
                }
            }]), e
        }();
    t(document).on(M.CLICK_DATA_API, X.DATA_SLIDE, U._dataApiClickHandler), t(window).on(M.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(X.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            U._jQueryInterface.call(r, r.data())
        }
    }), t.fn[E] = U._jQueryInterface, t.fn[E].Constructor = U, t.fn[E].noConflict = function() {
        return t.fn[E] = A, U._jQueryInterface
    };
    var z = "collapse",
        Q = t.fn[z],
        K = {
            toggle: !0,
            parent: ""
        },
        G = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Z = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        J = "show",
        ee = "collapse",
        te = "collapsing",
        ne = "collapsed",
        ie = "width",
        re = "height",
        oe = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        ae = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(oe.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        a = c.getSelectorFromElement(o),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                            return t === e
                        });
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(J) ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, r = this;
                if (!this._isTransitioning && !t(this._element).hasClass(J) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(oe.ACTIVES)).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(ee)
                    })).length && (n = null), !(n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                    var o = t.Event(Z.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                        var a = this._getDimension();
                        t(this._element).removeClass(ee).addClass(te), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            l = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, function() {
                            t(r._element).removeClass(te).addClass(ee).addClass(J), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(Z.SHOWN)
                        }).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(J)) {
                    var n = t.Event(Z.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass(te).removeClass(ee).removeClass(J);
                        var r = this._triggerArray.length;
                        if (r > 0)
                            for (var o = 0; o < r; o++) {
                                var a = this._triggerArray[o],
                                    s = c.getSelectorFromElement(a);
                                if (null !== s) t([].slice.call(document.querySelectorAll(s))).hasClass(J) || t(a).addClass(ne).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var l = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(te).addClass(ee).trigger(Z.HIDDEN)
                        }).emulateTransitionEnd(l)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = a({}, K, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(z, e, G), e
            }, n._getDimension = function() {
                return t(this._element).hasClass(ie) ? ie : re
            }, n._getParent = function() {
                var n, i = this;
                c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(r));
                return t(o).each(function(t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var i = t(e).hasClass(J);
                n.length && t(n).toggleClass(ne, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function(e) {
                var t = c.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.collapse"),
                        o = a({}, K, i.data(), "object" == typeof n && n ? n : {});
                    if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data("bs.collapse", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return K
                }
            }]), e
        }();
    t(document).on(Z.CLICK_DATA_API, oe.DATA_TOGGLE, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            i = c.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function() {
            var e = t(this),
                i = e.data("bs.collapse") ? "toggle" : n.data();
            ae._jQueryInterface.call(e, i)
        })
    }), t.fn[z] = ae._jQueryInterface, t.fn[z].Constructor = ae, t.fn[z].noConflict = function() {
        return t.fn[z] = Q, ae._jQueryInterface
    };
    var se = "dropdown",
        le = t.fn[se],
        ce = new RegExp("38|40|27"),
        ue = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        },
        de = "disabled",
        he = "show",
        fe = "dropup",
        pe = "dropright",
        ge = "dropleft",
        me = "dropdown-menu-right",
        ve = "position-static",
        ye = '[data-toggle="dropdown"]',
        be = ".dropdown form",
        we = ".dropdown-menu",
        _e = ".navbar-nav",
        Ce = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        xe = "top-start",
        Se = "top-end",
        Te = "bottom-start",
        ke = "bottom-end",
        Ee = "right-start",
        Oe = "left-start",
        Ae = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        De = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Pe = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = e.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(de)) {
                    var i = e._getParentFromElement(this._element),
                        r = t(this._menu).hasClass(he);
                    if (e._clearMenus(), !r) {
                        var o = {
                                relatedTarget: this._element
                            },
                            a = t.Event(ue.SHOW, o);
                        if (t(i).trigger(a), !a.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = i : c.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass(ve), this._popper = new n(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(i).closest(_e).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(he), t(i).toggleClass(he).trigger(t.Event(ue.SHOWN, o))
                        }
                    }
                }
            }, i.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(de) || t(this._menu).hasClass(he))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(ue.SHOW, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(r).toggleClass(he).trigger(t.Event(ue.SHOWN, n)))
                }
            }, i.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(de) && t(this._menu).hasClass(he)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(ue.HIDE, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(r).toggleClass(he).trigger(t.Event(ue.HIDDEN, n)))
                }
            }, i.dispose = function() {
                t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var e = this;
                t(this._element).on(ue.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function(e) {
                return e = a({}, this.constructor.Default, t(this._element).data(), e), c.typeCheckConfig(se, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(we))
                }
                return this._menu
            }, i._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = Te;
                return e.hasClass(fe) ? (n = xe, t(this._menu).hasClass(me) && (n = Se)) : e.hasClass(pe) ? n = Ee : e.hasClass(ge) ? n = Oe : t(this._menu).hasClass(me) && (n = ke), n
            }, i._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.dropdown");
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(ye)), r = 0, o = i.length; r < o; r++) {
                        var a = e._getParentFromElement(i[r]),
                            s = t(i[r]).data("bs.dropdown"),
                            l = {
                                relatedTarget: i[r]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), s) {
                            var c = s._menu;
                            if (t(a).hasClass(he) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                                var u = t.Event(ue.HIDE, l);
                                t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(c).removeClass(he), t(a).removeClass(he).trigger(t.Event(ue.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = c.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(we).length)) : ce.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(de))) {
                    var i = e._getParentFromElement(this),
                        r = t(i).hasClass(he);
                    if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                        var o = [].slice.call(i.querySelectorAll(Ce));
                        if (0 !== o.length) {
                            var a = o.indexOf(n.target);
                            38 === n.which && a > 0 && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var s = i.querySelector(ye);
                            t(s).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ae
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return De
                }
            }]), e
        }();
    t(document).on(ue.KEYDOWN_DATA_API, ye, Pe._dataApiKeydownHandler).on(ue.KEYDOWN_DATA_API, we, Pe._dataApiKeydownHandler).on(ue.CLICK_DATA_API + " " + ue.KEYUP_DATA_API, Pe._clearMenus).on(ue.CLICK_DATA_API, ye, function(e) {
        e.preventDefault(), e.stopPropagation(), Pe._jQueryInterface.call(t(this), "toggle")
    }).on(ue.CLICK_DATA_API, be, function(e) {
        e.stopPropagation()
    }), t.fn[se] = Pe._jQueryInterface, t.fn[se].Constructor = Pe, t.fn[se].noConflict = function() {
        return t.fn[se] = le, Pe._jQueryInterface
    };
    var Ie = t.fn.modal,
        Le = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        Ne = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        $e = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        },
        Me = "modal-dialog-scrollable",
        je = "modal-scrollbar-measure",
        He = "modal-backdrop",
        We = "modal-open",
        Re = "fade",
        Fe = "show",
        qe = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        },
        Be = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(qe.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(Re) && (this._isTransitioning = !0);
                    var i = t.Event($e.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on($e.CLICK_DISMISS, qe.DATA_DISMISS, function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on($e.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one($e.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event($e.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = t(this._element).hasClass(Re);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off($e.FOCUSIN), t(this._element).removeClass(Fe), t(this._element).off($e.CLICK_DISMISS), t(this._dialog).off($e.MOUSEDOWN_DISMISS), r) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            t(this._element).one(c.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(".bs.modal")
                }), t(document).off($e.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = a({}, Le, e), c.typeCheckConfig("modal", e, Ne), e
            }, n._showElement = function(e) {
                var n = this,
                    i = t(this._element).hasClass(Re);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(Me) ? this._dialog.querySelector(qe.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass(Fe), this._config.focus && this._enforceFocus();
                var r = t.Event($e.SHOWN, {
                        relatedTarget: e
                    }),
                    o = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                    };
                if (i) {
                    var a = c.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off($e.FOCUSIN).on($e.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on($e.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off($e.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on($e.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off($e.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(We), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger($e.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    i = t(this._element).hasClass(Re) ? Re : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = He, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on($e.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), i && c.reflow(this._backdrop), t(this._backdrop).addClass(Fe), !e) return;
                    if (!i) return void e();
                    var r = c.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Fe);
                    var o = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(Re)) {
                        var a = c.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(qe.FIXED_CONTENT)),
                        i = [].slice.call(document.querySelectorAll(qe.STICKY_CONTENT));
                    t(n).each(function(n, i) {
                        var r = i.style.paddingRight,
                            o = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(i).each(function(n, i) {
                        var r = i.style.marginRight,
                            o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(We)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(qe.FIXED_CONTENT));
                t(e).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + qe.STICKY_CONTENT));
                t(n).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = je, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var r = t(this).data("bs.modal"),
                        o = a({}, Le, t(this).data(), "object" == typeof n && n ? n : {});
                    if (r || (r = new e(this, o), t(this).data("bs.modal", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](i)
                    } else o.show && r.show(i)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Le
                }
            }]), e
        }();
    t(document).on($e.CLICK_DATA_API, qe.DATA_TOGGLE, function(e) {
        var n, i = this,
            r = c.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var o = t(n).data("bs.modal") ? "toggle" : a({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = t(n).one($e.SHOW, function(e) {
            e.isDefaultPrevented() || s.one($e.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        Be._jQueryInterface.call(t(n), o, this)
    }), t.fn.modal = Be._jQueryInterface, t.fn.modal.Constructor = Be, t.fn.modal.noConflict = function() {
        return t.fn.modal = Ie, Be._jQueryInterface
    };
    var Ve = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Xe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Ue = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function ze(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), a = function(e, n) {
                var i = o[e],
                    a = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var s = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[a] || []);
                s.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Ve.indexOf(n) || Boolean(e.nodeValue.match(Ye) || e.nodeValue.match(Ue));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                })
            }, s = 0, l = o.length; s < l; s++) a(s);
        return i.body.innerHTML
    }
    var Qe = "tooltip",
        Ke = t.fn.tooltip,
        Ge = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ze = ["sanitize", "whiteList", "sanitizeFn"],
        Je = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        et = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        tt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Xe
        },
        nt = "show",
        it = "out",
        rt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        ot = "fade",
        at = "show",
        st = ".tooltip-inner",
        lt = ".arrow",
        ct = "hover",
        ut = "focus",
        dt = "click",
        ht = "manual",
        ft = function() {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var i = e.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(at)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var r = c.findShadowRoot(this.element),
                        o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !o) return;
                    var a = this.getTipElement(),
                        s = c.getUID(this.constructor.NAME);
                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(a).addClass(ot);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: lt
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(a).addClass(at), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === it && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(ot)) {
                        var f = c.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(c.TRANSITION_END, h).emulateTransitionEnd(f)
                    } else h()
                }
            }, i.hide = function(e) {
                var n = this,
                    i = this.getTipElement(),
                    r = t.Event(this.constructor.Event.HIDE),
                    o = function() {
                        n._hoverState !== nt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (t(i).removeClass(at), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[dt] = !1, this._activeTrigger[ut] = !1, this._activeTrigger[ct] = !1, t(this.tip).hasClass(ot)) {
                        var a = c.getTransitionDurationFromElement(i);
                        t(i).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(st)), this.getTitle()), t(e).removeClass(ot + " " + at)
            }, i.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = ze(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function(e) {
                return et[e.toUpperCase()]
            }, i._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if (n !== ht) {
                        var i = n === ct ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = n === ct ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ut : ct] = !0), t(n.getTipElement()).hasClass(at) || n._hoverState === nt ? n._hoverState = nt : (clearTimeout(n._timeout), n._hoverState = nt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === nt && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ut : ct] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = it, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === it && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== Ze.indexOf(e) && delete n[e]
                }), "number" == typeof(e = a({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(Qe, e, this.constructor.DefaultType), e.sanitize && (e.template = ze(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Ge);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(ot), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.tooltip"),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return tt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Qe
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return rt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Je
                }
            }]), e
        }();
    t.fn.tooltip = ft._jQueryInterface, t.fn.tooltip.Constructor = ft, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = Ke, ft._jQueryInterface
    };
    var pt = "popover",
        gt = t.fn.popover,
        mt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        vt = a({}, ft.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        yt = a({}, ft.DefaultType, {
            content: "(string|element|function)"
        }),
        bt = "fade",
        wt = "show",
        _t = ".popover-header",
        Ct = ".popover-body",
        xt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        St = function(e) {
            var n, i;

            function o() {
                return e.apply(this, arguments) || this
            }
            i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var a = o.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(_t), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(Ct), n), e.removeClass(bt + " " + wt)
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(mt);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, o._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data("bs.popover"),
                        i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return vt
                }
            }, {
                key: "NAME",
                get: function() {
                    return pt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return xt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return yt
                }
            }]), o
        }(ft);
    t.fn.popover = St._jQueryInterface, t.fn.popover.Constructor = St, t.fn.popover.noConflict = function() {
        return t.fn.popover = gt, St._jQueryInterface
    };
    var Tt = "scrollspy",
        kt = t.fn[Tt],
        Et = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Ot = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        At = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        },
        Dt = "dropdown-item",
        Pt = "active",
        It = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        Lt = "offset",
        Nt = "position",
        $t = function() {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + It.NAV_LINKS + "," + this._config.target + " " + It.LIST_ITEMS + "," + this._config.target + " " + It.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(At.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? Lt : Nt,
                    i = "auto" === this._config.method ? n : this._config.method,
                    r = i === Nt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, o = c.getSelectorFromElement(e);
                    if (o && (n = document.querySelector(o)), n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height) return [t(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = a({}, Et, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = c.getUID(Tt), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return c.typeCheckConfig(Tt, e, Ot), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass(Dt) ? (i.closest(It.DROPDOWN).find(It.DROPDOWN_TOGGLE).addClass(Pt), i.addClass(Pt)) : (i.addClass(Pt), i.parents(It.NAV_LIST_GROUP).prev(It.NAV_LINKS + ", " + It.LIST_ITEMS).addClass(Pt), i.parents(It.NAV_LIST_GROUP).prev(It.NAV_ITEMS).children(It.NAV_LINKS).addClass(Pt)), t(this._scrollElement).trigger(At.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(Pt)
                }).forEach(function(e) {
                    return e.classList.remove(Pt)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.scrollspy");
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Et
                }
            }]), e
        }();
    t(window).on(At.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(It.DATA_SPY)), n = e.length; n--;) {
            var i = t(e[n]);
            $t._jQueryInterface.call(i, i.data())
        }
    }), t.fn[Tt] = $t._jQueryInterface, t.fn[Tt].Constructor = $t, t.fn[Tt].noConflict = function() {
        return t.fn[Tt] = kt, $t._jQueryInterface
    };
    var Mt = t.fn.tab,
        jt = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        },
        Ht = "dropdown-menu",
        Wt = "active",
        Rt = "disabled",
        Ft = "fade",
        qt = "show",
        Bt = ".dropdown",
        Vt = ".nav, .list-group",
        Xt = ".active",
        Yt = "> li > .active",
        Ut = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        zt = ".dropdown-toggle",
        Qt = "> .dropdown-menu .active",
        Kt = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Wt) || t(this._element).hasClass(Rt))) {
                    var n, i, r = t(this._element).closest(Vt)[0],
                        o = c.getSelectorFromElement(this._element);
                    if (r) {
                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? Yt : Xt;
                        i = (i = t.makeArray(t(r).find(a)))[i.length - 1]
                    }
                    var s = t.Event(jt.HIDE, {
                            relatedTarget: this._element
                        }),
                        l = t.Event(jt.SHOW, {
                            relatedTarget: i
                        });
                    if (i && t(i).trigger(s), t(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, r);
                        var u = function() {
                            var n = t.Event(jt.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                r = t.Event(jt.SHOWN, {
                                    relatedTarget: i
                                });
                            t(i).trigger(n), t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, n._activate = function(e, n, i) {
                var r = this,
                    o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Xt) : t(n).find(Yt))[0],
                    a = i && o && t(o).hasClass(Ft),
                    s = function() {
                        return r._transitionComplete(e, o, i)
                    };
                if (o && a) {
                    var l = c.getTransitionDurationFromElement(o);
                    t(o).removeClass(qt).one(c.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, n._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(Wt);
                    var r = t(n.parentNode).find(Qt)[0];
                    r && t(r).removeClass(Wt), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(Wt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains(Ft) && e.classList.add(qt), e.parentNode && t(e.parentNode).hasClass(Ht)) {
                    var o = t(e).closest(Bt)[0];
                    if (o) {
                        var a = [].slice.call(o.querySelectorAll(zt));
                        t(a).addClass(Wt)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.tab");
                    if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(jt.CLICK_DATA_API, Ut, function(e) {
        e.preventDefault(), Kt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = Kt._jQueryInterface, t.fn.tab.Constructor = Kt, t.fn.tab.noConflict = function() {
        return t.fn.tab = Mt, Kt._jQueryInterface
    };
    var Gt = t.fn.toast,
        Zt = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast"
        },
        Jt = "fade",
        en = "hide",
        tn = "show",
        nn = "showing",
        rn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        on = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        an = '[data-dismiss="toast"]',
        sn = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                t(this._element).trigger(Zt.SHOW), this._config.animation && this._element.classList.add(Jt);
                var n = function() {
                    e._element.classList.remove(nn), e._element.classList.add(tn), t(e._element).trigger(Zt.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove(en), this._element.classList.add(nn), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function(e) {
                var n = this;
                this._element.classList.contains(tn) && (t(this._element).trigger(Zt.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(tn) && this._element.classList.remove(tn), t(this._element).off(Zt.CLICK_DISMISS), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = a({}, on, t(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(Zt.CLICK_DISMISS, an, function() {
                    return e.hide(!0)
                })
            }, n._close = function() {
                var e = this,
                    n = function() {
                        e._element.classList.add(en), t(e._element).trigger(Zt.HIDDEN)
                    };
                if (this._element.classList.remove(tn), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.toast");
                    if (r || (r = new e(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return rn
                }
            }, {
                key: "Default",
                get: function() {
                    return on
                }
            }]), e
        }();
    t.fn.toast = sn._jQueryInterface, t.fn.toast.Constructor = sn, t.fn.toast.noConflict = function() {
            return t.fn.toast = Gt, sn._jQueryInterface
        },
        function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = c, e.Alert = g, e.Button = k, e.Carousel = U, e.Collapse = ae, e.Dropdown = Pe, e.Modal = Be, e.Popover = St, e.Scrollspy = $t, e.Tab = Kt, e.Toast = sn, e.Tooltip = ft, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, r, o) {
            return null == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, i, r, o) {
            return null == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, r, o) {
            return null == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return null != e && e == e.window
            }, n.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || o.call(e, t)
            }, n.each = function(e, n, i) {
                var r = 0,
                    o = e.length,
                    a = t(e);
                if (i) {
                    if (a)
                        for (; o > r && !1 !== n.apply(e[r], i); r++);
                    else
                        for (r in e)
                            if (!1 === n.apply(e[r], i)) break
                } else if (a)
                    for (; o > r && !1 !== n.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === n.call(e[r], r, e[r])) break; return e
            }, n.data = function(e, t, r) {
                if (void 0 === r) {
                    var o = (a = e[n.expando]) && i[a];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t]
                } else if (void 0 !== t) {
                    var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[a] = i[a] || {}, i[a][t] = r, r
                }
            }, n.removeData = function(e, t) {
                var r = e[n.expando],
                    o = r && i[r];
                o && n.each(t, function(e, t) {
                    delete o[t]
                })
            }, n.extend = function() {
                var e, t, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) e = s[r], s !== (i = o[r]) && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(u, a, i)) : void 0 !== i && (s[r] = i));
                return s
            }, n.queue = function(e, i, r) {
                if (e) {
                    i = (i || "fx") + "queue";
                    var o = n.data(e, i);
                    return r ? (!o || n.isArray(r) ? o = n.data(e, i, function(e, n) {
                        var i = n || [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                            if (n != n)
                                for (; void 0 !== t[i];) e[r++] = t[i++];
                            e.length = r
                        }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                    }(r)) : o.push(r), o) : o || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var r = n.queue(i, t),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        i = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: i.top - r.top,
                        left: i.left - r.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, n, i) {
            function r(e) {
                return f.isWrapped(e) ? e = [].slice.call(e) : f.isNode(e) && (e = [e]), e
            }

            function o(e) {
                var t = u.data(e, "velocity");
                return null === t ? i : t
            }

            function a(e, n, i, r) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
                }

                function c(e, t, n) {
                    return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
                }

                function u(t, n) {
                    for (var r = 0; f > r; ++r) {
                        var o = c(n, e, i);
                        if (0 === o) return n;
                        n -= (l(n, e, i) - t) / o
                    }
                    return n
                }

                function d(t, n, r) {
                    var o, a, s = 0;
                    do {
                        (o = l(a = n + (r - n) / 2, e, i) - t) > 0 ? r = a : n = a
                    } while (Math.abs(o) > g && ++s < m);
                    return a
                }

                function h() {
                    C = !0, (e != n || i != r) && function() {
                        for (var t = 0; v > t; ++t) _[t] = l(t * y, e, i)
                    }()
                }
                var f = 4,
                    p = .001,
                    g = 1e-7,
                    m = 10,
                    v = 11,
                    y = 1 / (v - 1),
                    b = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var _ = b ? new Float32Array(v) : new Array(v),
                    C = !1,
                    x = function(t) {
                        return C || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                            for (var n = 0, r = 1, o = v - 1; r != o && _[r] <= t; ++r) n += y;
                            var a = n + (t - _[--r]) / (_[r + 1] - _[r]) * y,
                                s = c(a, e, i);
                            return s >= p ? u(t, a) : 0 == s ? a : d(t, n, n + y)
                        }(t), n, r)
                    };
                x.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var S = "generateBezier(" + [e, n, i, r] + ")";
                return x.toString = function() {
                    return S
                }, x
            }

            function s(e, t) {
                var n = e;
                return f.isString(e) ? v.Easings[e] || (n = !1) : n = f.isArray(e) && 1 === e.length ? function(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }.apply(null, e) : f.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!f.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m), n
            }

            function l(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = v.State.calls.length;
                    n > 1e4 && (v.State.calls = function(e) {
                        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                            var r = e[t];
                            r && i.push(r)
                        }
                        return i
                    }(v.State.calls));
                    for (var r = 0; n > r; r++)
                        if (v.State.calls[r]) {
                            var a = v.State.calls[r],
                                s = a[0],
                                d = a[2],
                                h = a[3],
                                p = !!h,
                                g = null;
                            h || (h = v.State.calls[r][3] = t - 16);
                            for (var m = Math.min((t - h) / d.duration, 1), y = 0, w = s.length; w > y; y++) {
                                var C = s[y],
                                    x = C.element;
                                if (o(x)) {
                                    var S = !1;
                                    if (d.display !== i && null !== d.display && "none" !== d.display) {
                                        if ("flex" === d.display) {
                                            u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                b.setPropertyValue(x, "display", t)
                                            })
                                        }
                                        b.setPropertyValue(x, "display", d.display)
                                    }
                                    for (var T in d.visibility !== i && "hidden" !== d.visibility && b.setPropertyValue(x, "visibility", d.visibility), C)
                                        if ("element" !== T) {
                                            var k, E = C[T],
                                                O = f.isString(E.easing) ? v.Easings[E.easing] : E.easing;
                                            if (1 === m) k = E.endValue;
                                            else {
                                                var A = E.endValue - E.startValue;
                                                if (k = E.startValue + A * O(m, d, A), !p && k === E.currentValue) continue
                                            }
                                            if (E.currentValue = k, "tween" === T) g = k;
                                            else {
                                                if (b.Hooks.registered[T]) {
                                                    var D = b.Hooks.getRoot(T),
                                                        P = o(x).rootPropertyValueCache[D];
                                                    P && (E.rootPropertyValue = P)
                                                }
                                                var I = b.setPropertyValue(x, T, E.currentValue + (0 === parseFloat(k) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
                                                b.Hooks.registered[T] && (o(x).rootPropertyValueCache[D] = b.Normalizations.registered[D] ? b.Normalizations.registered[D]("extract", null, I[1]) : I[1]), "transform" === I[0] && (S = !0)
                                            }
                                        }
                                    d.mobileHA && o(x).transformCache.translate3d === i && (o(x).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && b.flushTransformCache(x)
                                }
                            }
                            d.display !== i && "none" !== d.display && (v.State.calls[r][2].display = !1), d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[r][2].visibility = !1), d.progress && d.progress.call(a[1], a[1], m, Math.max(0, h + d.duration - t), h, g), 1 === m && c(r)
                        }
                }
                v.State.isTicking && _(l)
            }

            function c(e, t) {
                if (!v.State.calls[e]) return !1;
                for (var n = v.State.calls[e][0], r = v.State.calls[e][1], a = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, c = 0, d = n.length; d > c; c++) {
                    var h = n[c].element;
                    if (t || a.loop || ("none" === a.display && b.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(h, "visibility", a.visibility)), !0 !== a.loop && (u.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(u.queue(h)[1])) && o(h)) {
                        o(h).isAnimating = !1, o(h).rootPropertyValueCache = {};
                        var f = !1;
                        u.each(b.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                r = o(h).transformCache[t];
                            o(h).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (f = !0, delete o(h).transformCache[t])
                        }), a.mobileHA && (f = !0, delete o(h).transformCache.translate3d), f && b.flushTransformCache(h), b.Values.removeClass(h, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && c === d - 1) try {
                        a.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    s && !0 !== a.loop && s(r), o(h) && !0 === a.loop && !t && (u.each(o(h).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), v(h, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), !1 !== a.queue && u.dequeue(h, a.queue)
                }
                v.State.calls[e] = !1;
                for (var p = 0, g = v.State.calls.length; g > p; p++)
                    if (!1 !== v.State.calls[p]) {
                        l = !0;
                        break
                    }!1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
            }
            var u, d = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                h = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                f = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                p = !1;
            if (e.fn && e.fn.jquery ? (u = e, p = !0) : u = t.Velocity.Utilities, 8 >= d && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= d)) {
                var g = 400,
                    m = "swing",
                    v = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: n.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: u,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: g,
                            easing: m,
                            begin: i,
                            complete: i,
                            progress: i,
                            display: i,
                            visibility: i,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            u.data(e, "velocity", {
                                isSVG: f.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== i ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
                var y = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, n, i) {
                        var r = {
                            x: t.x + i.dx * n,
                            v: t.v + i.dv * n,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: r.v,
                            dv: e(r)
                        }
                    }

                    function n(n, i) {
                        var r = {
                                dx: n.v,
                                dv: e(n)
                            },
                            o = t(n, .5 * i, r),
                            a = t(n, .5 * i, o),
                            s = t(n, i, a),
                            l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                            c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                        return n.x = n.x + l * i, n.v = n.v + c * i, n
                    }
                    return function e(t, i, r) {
                        var o, a, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0;
                        for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, (o = null !== r) ? a = (u = e(t, i)) / r * .016 : a = .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return o ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                v.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, u.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    v.Easings[t[0]] = a.apply(null, t[1])
                });
                var b = v.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < b.Lists.colors.length; e++) {
                                var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var n, i, r;
                            if (d)
                                for (n in b.Hooks.templates) {
                                    r = (i = b.Hooks.templates[n])[0].split(" ");
                                    var o = i[1].match(b.RegEx.valueSplit);
                                    "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), b.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                                }
                            for (n in b.Hooks.templates)
                                for (var e in r = (i = b.Hooks.templates[n])[0].split(" ")) {
                                    var a = n + r[e],
                                        s = e;
                                    b.Hooks.registered[a] = [n, s]
                                }
                        },
                        getRoot: function(e) {
                            var t = b.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var n = b.Hooks.registered[e];
                            if (n) {
                                var i = n[0],
                                    r = n[1];
                                return (t = b.Hooks.cleanRootPropertyValue(i, t)).toString().match(b.RegEx.valueSplit)[r]
                            }
                            return t
                        },
                        injectValue: function(e, t, n) {
                            var i = b.Hooks.registered[e];
                            if (i) {
                                var r, o = i[0],
                                    a = i[1];
                                return (r = (n = b.Hooks.cleanRootPropertyValue(o, n)).toString().match(b.RegEx.valueSplit))[a] = t, r.join(" ")
                            }
                            return n
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var i;
                                        return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(b.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                                    case "inject":
                                        return "rect(" + n + ")"
                                }
                            },
                            blur: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return v.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var i = parseFloat(n);
                                        if (!i && 0 !== i) {
                                            var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            i = r ? r[1] : 0
                                        }
                                        return i;
                                    case "inject":
                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                }
                            },
                            opacity: function(e, t, n) {
                                if (8 >= d) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i ? i[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return n
                                }
                            }
                        },
                        register: function() {
                            9 >= d || v.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                            for (var e = 0; e < b.Lists.transformsBase.length; e++) ! function() {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function(e, n, r) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return o(n) === i || o(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var a = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && o(n).transformCache[t] === i && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                                    break;
                                                case "skew":
                                                    a = !/(deg|\d)$/i.test(r);
                                                    break;
                                                case "rotate":
                                                    a = !/(deg|\d)$/i.test(r)
                                            }
                                            return a || (o(n).transformCache[t] = "(" + r + ")"), o(n).transformCache[t]
                                    }
                                }
                            }();
                            for (e = 0; e < b.Lists.colors.length; e++) ! function() {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function(e, n, r) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var o;
                                            if (b.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                            else {
                                                var a, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : b.RegEx.isHex.test(r) ? a = "rgb(" + b.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;
                                        case "inject":
                                            return 8 >= d ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                                var r;
                                if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), f.isString(v.State.prefixElement.style[r])) return v.State.prefixMatches[e] = r, [r, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                                return t + t + n + n + i + i
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, n, r, a) {
                        function s(e, n) {
                            function r() {
                                h && b.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = u.css(e, n);
                            else {
                                var c, h = !1;
                                if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(e, "display") && (h = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !a) {
                                    if ("height" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var f = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                        return r(), f
                                    }
                                    if ("width" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var p = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                        return r(), p
                                    }
                                }
                                c = o(e) === i ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === d && "filter" === n ? c.getPropertyValue(n) : c[n]) || null === l) && (l = e.style[n]), r()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                var g = s(e, "position");
                                ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = u(e).position()[n] + "px")
                            }
                            return l
                        }
                        var l;
                        if (b.Hooks.registered[n]) {
                            var c = n,
                                h = b.Hooks.getRoot(c);
                            r === i && (r = b.getPropertyValue(e, b.Names.prefixCheck(h)[0])), b.Normalizations.registered[h] && (r = b.Normalizations.registered[h]("extract", e, r)), l = b.Hooks.extractValue(c, r)
                        } else if (b.Normalizations.registered[n]) {
                            var f, p;
                            "transform" !== (f = b.Normalizations.registered[n]("name", e)) && (p = s(e, b.Names.prefixCheck(f)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), l = b.Normalizations.registered[n]("extract", e, p)
                        }
                        if (!/^[\d-]/.test(l))
                            if (o(e) && o(e).isSVG && b.Names.SVGAttribute(n))
                                if (/^(height|width)$/i.test(n)) try {
                                    l = e.getBBox()[n]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(n);
                                else l = s(e, b.Names.prefixCheck(n)[0]);
                        return b.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                    },
                    setPropertyValue: function(e, n, i, r, a) {
                        var s = n;
                        if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i);
                        else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", e)) b.Normalizations.registered[n]("inject", e, i), s = "transform", i = o(e).transformCache[n];
                        else {
                            if (b.Hooks.registered[n]) {
                                var l = n,
                                    c = b.Hooks.getRoot(n);
                                r = r || b.getPropertyValue(e, c), i = b.Hooks.injectValue(l, i, r), n = c
                            }
                            if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", e, i), n = b.Normalizations.registered[n]("name", e)), s = b.Names.prefixCheck(n)[0], 8 >= d) try {
                                e.style[s] = i
                            } catch (e) {
                                v.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                            } else o(e) && o(e).isSVG && b.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                            v.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                        }
                        return [s, i]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(b.getPropertyValue(e, t))
                        }
                        var n = "";
                        if ((d || v.State.isAndroid && !v.State.isChrome) && o(e).isSVG) {
                            var i = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            u.each(o(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                            })
                        } else {
                            var r, a;
                            u.each(o(e).transformCache, function(t) {
                                return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                            }), a && (n = "perspective" + a + " " + n)
                        }
                        b.setPropertyValue(e, "transform", n)
                    }
                };
                b.Hooks.register(), b.Normalizations.register(), v.hook = function(e, t, n) {
                    var a = i;
                    return e = r(e), u.each(e, function(e, r) {
                        if (o(r) === i && v.init(r), n === i) a === i && (a = v.CSS.getPropertyValue(r, t));
                        else {
                            var s = v.CSS.setPropertyValue(r, t, n);
                            "transform" === s[0] && v.CSS.flushTransformCache(r), a = s
                        }
                    }), a
                };
                var w = function() {
                    function e() {
                        return d ? E.promise || null : h
                    }

                    function a() {
                        function e(e) {
                            function h(e, t) {
                                var n = i,
                                    r = i,
                                    o = i;
                                return f.isArray(e) ? (n = e[0], !f.isArray(e[1]) && /^[\d-]/.test(e[1]) || f.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? o = e[1] : (f.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || f.isArray(e[1])) && (r = t ? e[1] : s(e[1], c.duration), e[2] !== i && (o = e[2]))) : n = e, t || (r = r || c.easing), f.isFunction(n) && (n = n.call(a, S, x)), f.isFunction(o) && (o = o.call(a, S, x)), [n || 0, r, o]
                            }

                            function p(e, t) {
                                var n, i;
                                return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                    return n = e, ""
                                }), n || (n = b.Values.getUnitType(e)), [i, n]
                            }

                            function g() {
                                var e = {
                                        myParent: a.parentNode || n.body,
                                        position: b.getPropertyValue(a, "position"),
                                        fontSize: b.getPropertyValue(a, "fontSize")
                                    },
                                    i = e.position === N.lastPosition && e.myParent === N.lastParent,
                                    r = e.fontSize === N.lastFontSize;
                                N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                                var s = 100,
                                    l = {};
                                if (r && i) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                                else {
                                    var c = o(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                    v.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                        v.CSS.setPropertyValue(c, t, "hidden")
                                    }), v.CSS.setPropertyValue(c, "position", e.position), v.CSS.setPropertyValue(c, "fontSize", e.fontSize), v.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                        v.CSS.setPropertyValue(c, t, s + "%")
                                    }), v.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                }
                                return null === N.remToPx && (N.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                            }
                            if (c.begin && 0 === S) try {
                                c.begin.call(m, m)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                            if ("scroll" === k) {
                                var w, C, T, O = /^x$/i.test(c.axis) ? "Left" : "Top",
                                    A = parseFloat(c.offset) || 0;
                                c.container ? f.isWrapped(c.container) || f.isNode(c.container) ? (c.container = c.container[0] || c.container, T = (w = c.container["scroll" + O]) + u(a).position()[O.toLowerCase()] + A) : c.container = null : (w = v.State.scrollAnchor[v.State["scrollProperty" + O]], C = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === O ? "Top" : "Left")]], T = u(a).offset()[O.toLowerCase()] + A), d = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: w,
                                        currentValue: w,
                                        endValue: T,
                                        unitType: "",
                                        easing: c.easing,
                                        scrollData: {
                                            container: c.container,
                                            direction: O,
                                            alternateValue: C
                                        }
                                    },
                                    element: a
                                }, v.debug && console.log("tweensContainer (scroll): ", d.scroll, a)
                            } else if ("reverse" === k) {
                                if (!o(a).tweensContainer) return void u.dequeue(a, c.queue);
                                "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, _.easing || delete c.easing, _.duration || delete c.duration, c = u.extend({}, o(a).opts, c);
                                var D = u.extend(!0, {}, o(a).tweensContainer);
                                for (var P in D)
                                    if ("element" !== P) {
                                        var I = D[P].startValue;
                                        D[P].startValue = D[P].currentValue = D[P].endValue, D[P].endValue = I, f.isEmptyObject(_) || (D[P].easing = c.easing), v.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(D[P]), a)
                                    }
                                d = D
                            } else if ("start" === k) {
                                for (var L in o(a).tweensContainer && !0 === o(a).isAnimating && (D = o(a).tweensContainer), u.each(y, function(e, t) {
                                        if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                            var n = h(t, !0),
                                                r = n[0],
                                                o = n[1],
                                                a = n[2];
                                            if (b.RegEx.isHex.test(r)) {
                                                for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(r), c = a ? b.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                                                    var d = [l[u]];
                                                    o && d.push(o), c !== i && d.push(c[u]), y[e + s[u]] = d
                                                }
                                                delete y[e]
                                            }
                                        }
                                    }), y) {
                                    var M = h(y[L]),
                                        j = M[0],
                                        H = M[1],
                                        W = M[2];
                                    L = b.Names.camelCase(L);
                                    var R = b.Hooks.getRoot(L),
                                        F = !1;
                                    if (o(a).isSVG || "tween" === R || !1 !== b.Names.prefixCheck(R)[1] || b.Normalizations.registered[R] !== i) {
                                        (c.display !== i && null !== c.display && "none" !== c.display || c.visibility !== i && "hidden" !== c.visibility) && /opacity|filter/.test(L) && !W && 0 !== j && (W = 0), c._cacheValues && D && D[L] ? (W === i && (W = D[L].endValue + D[L].unitType), F = o(a).rootPropertyValueCache[R]) : b.Hooks.registered[L] ? W === i ? (F = b.getPropertyValue(a, R), W = b.getPropertyValue(a, L, F)) : F = b.Hooks.templates[R][1] : W === i && (W = b.getPropertyValue(a, L));
                                        var q, B, V, X = !1;
                                        if (W = (q = p(L, W))[0], V = q[1], j = (q = p(L, j))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return X = t, ""
                                            }), B = q[1], W = parseFloat(W) || 0, j = parseFloat(j) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(L) ? (j /= 100, B = "em") : /^scale/.test(L) ? (j /= 100, B = "") : /(Red|Green|Blue)$/i.test(L) && (j = j / 100 * 255, B = "")), /[\/*]/.test(X)) B = V;
                                        else if (V !== B && 0 !== W)
                                            if (0 === j) B = V;
                                            else {
                                                r = r || g();
                                                var Y = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                                switch (V) {
                                                    case "%":
                                                        W *= "x" === Y ? r.percentToPxWidth : r.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        W *= r[V + "ToPx"]
                                                }
                                                switch (B) {
                                                    case "%":
                                                        W *= 1 / ("x" === Y ? r.percentToPxWidth : r.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        W *= 1 / r[B + "ToPx"]
                                                }
                                            }
                                        switch (X) {
                                            case "+":
                                                j = W + j;
                                                break;
                                            case "-":
                                                j = W - j;
                                                break;
                                            case "*":
                                                j *= W;
                                                break;
                                            case "/":
                                                j = W / j
                                        }
                                        d[L] = {
                                            rootPropertyValue: F,
                                            startValue: W,
                                            currentValue: W,
                                            endValue: j,
                                            unitType: B,
                                            easing: H
                                        }, v.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(d[L]), a)
                                    } else v.debug && console.log("Skipping [" + R + "] due to a lack of browser support.")
                                }
                                d.element = a
                            }
                            d.element && (b.Values.addClass(a, "velocity-animating"), $.push(d), "" === c.queue && (o(a).tweensContainer = d, o(a).opts = c), o(a).isAnimating = !0, S === x - 1 ? (v.State.calls.push([$, m, c, null, E.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : S++)
                        }
                        var r, a = this,
                            c = u.extend({}, v.defaults, _),
                            d = {};
                        switch (o(a) === i && v.init(a), parseFloat(c.delay) && !1 !== c.queue && u.queue(a, c.queue, function(e) {
                            v.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(c.delay)),
                                next: e
                            }
                        }), c.duration.toString().toLowerCase()) {
                            case "fast":
                                c.duration = 200;
                                break;
                            case "normal":
                                c.duration = g;
                                break;
                            case "slow":
                                c.duration = 600;
                                break;
                            default:
                                c.duration = parseFloat(c.duration) || 1
                        }!1 !== v.mock && (!0 === v.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(v.mock) || 1, c.delay *= parseFloat(v.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !f.isFunction(c.begin) && (c.begin = null), c.progress && !f.isFunction(c.progress) && (c.progress = null), c.complete && !f.isFunction(c.complete) && (c.complete = null), c.display !== i && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = v.CSS.Values.getDisplayType(a))), c.visibility !== i && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(a, c.queue, function(t, n) {
                            return !0 === n ? (E.promise && E.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e())
                        }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(a)[0] || u.dequeue(a)
                    }
                    var d, h, p, m, y, _, C = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                    if (f.isWrapped(this) ? (d = !1, p = 0, m = this, h = this) : (d = !0, p = 1, m = C ? arguments[0].elements || arguments[0].e : arguments[0]), m = r(m)) {
                        C ? (y = arguments[0].properties || arguments[0].p, _ = arguments[0].options || arguments[0].o) : (y = arguments[p], _ = arguments[p + 1]);
                        var x = m.length,
                            S = 0;
                        if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(_)) {
                            _ = {};
                            for (var T = p + 1; T < arguments.length; T++) f.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? f.isString(arguments[T]) || f.isArray(arguments[T]) ? _.easing = arguments[T] : f.isFunction(arguments[T]) && (_.complete = arguments[T]) : _.duration = arguments[T]
                        }
                        var k, E = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (d && v.Promise && (E.promise = new v.Promise(function(e, t) {
                            E.resolver = e, E.rejecter = t
                        })), y) {
                            case "scroll":
                                k = "scroll";
                                break;
                            case "reverse":
                                k = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                u.each(m, function(e, t) {
                                    o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                                });
                                var O = [];
                                return u.each(v.State.calls, function(e, t) {
                                    t && u.each(t[1], function(n, r) {
                                        var a = _ === i ? "" : _;
                                        return !0 !== a && t[2].queue !== a && (_ !== i || !1 !== t[2].queue) || void u.each(m, function(n, i) {
                                            i === r && ((!0 === _ || f.isString(_)) && (u.each(u.queue(i, f.isString(_) ? _ : ""), function(e, t) {
                                                f.isFunction(t) && t(null, !0)
                                            }), u.queue(i, f.isString(_) ? _ : "", [])), "stop" === y ? (o(i) && o(i).tweensContainer && !1 !== a && u.each(o(i).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), O.push(e)) : "finish" === y && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === y && (u.each(O, function(e, t) {
                                    c(t, !0)
                                }), E.promise && E.resolver(m)), e();
                            default:
                                if (!u.isPlainObject(y) || f.isEmptyObject(y)) {
                                    if (f.isString(y) && v.Redirects[y]) {
                                        var A = (L = u.extend({}, _)).duration,
                                            D = L.delay || 0;
                                        return !0 === L.backwards && (m = u.extend(!0, [], m).reverse()), u.each(m, function(e, t) {
                                            parseFloat(L.stagger) ? L.delay = D + parseFloat(L.stagger) * e : f.isFunction(L.stagger) && (L.delay = D + L.stagger.call(t, e, x)), L.drag && (L.duration = parseFloat(A) || (/^(callout|transition)/.test(y) ? 1e3 : g), L.duration = Math.max(L.duration * (L.backwards ? 1 - e / x : (e + 1) / x), .75 * L.duration, 200)), v.Redirects[y].call(t, t, L || {}, e, x, m, E.promise ? E : i)
                                        }), e()
                                    }
                                    var P = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return E.promise ? E.rejecter(new Error(P)) : console.log(P), e()
                                }
                                k = "start"
                        }
                        var I, L, N = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            $ = [];
                        if (u.each(m, function(e, t) {
                                f.isNode(t) && a.call(t)
                            }), (L = u.extend({}, v.defaults, _)).loop = parseInt(L.loop), I = 2 * L.loop - 1, L.loop)
                            for (var M = 0; I > M; M++) {
                                var j = {
                                    delay: L.delay,
                                    progress: L.progress
                                };
                                M === I - 1 && (j.display = L.display, j.visibility = L.visibility, j.complete = L.complete), w(m, "reverse", j)
                            }
                        return e()
                    }
                };
                (v = u.extend(w, v)).animate = w;
                var _ = t.requestAnimationFrame || h;
                return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                    n.hidden ? (_ = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, l()) : _ = t.requestAnimationFrame || h
                }), e.Velocity = v, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = v.defaults), u.each(["Down", "Up"], function(e, t) {
                    v.Redirects["slide" + t] = function(e, n, r, o, a, s) {
                        var l = u.extend({}, n),
                            c = l.begin,
                            d = l.complete,
                            h = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            f = {};
                        l.display === i && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            for (var n in c && c.call(a, a), h) {
                                f[n] = e.style[n];
                                var i = v.CSS.getPropertyValue(e, n);
                                h[n] = "Down" === t ? [i, 0] : [0, i]
                            }
                            f.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in f) e.style[t] = f[t];
                            d && d.call(a, a), s && s.resolver(a)
                        }, v(e, h, l)
                    }
                }), u.each(["In", "Out"], function(e, t) {
                    v.Redirects["fade" + t] = function(e, n, r, o, a, s) {
                        var l = u.extend({}, n),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            d = l.complete;
                        l.complete = r !== o - 1 ? l.begin = null : function() {
                            d && d.call(a, a), s && s.resolver(a)
                        }, l.display === i && (l.display = "In" === t ? "auto" : "none"), v(this, c, l)
                    }
                }), v
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function(e) {
        WOW = function() {
            return {
                init: function() {
                    var t = [],
                        n = 1;

                    function i() {
                        var n = window.innerHeight,
                            i = window.scrollY;
                        e(".wow").each(function() {
                            if ("visible" != e(this).css("visibility") && (n + i - 100 > r(this) && i < r(this) || n + i - 100 > r(this) + e(this).height() && i < r(this) + e(this).height() || n + i == e(document).height() && r(this) + 100 > e(document).height())) {
                                var o = e(this).index(".wow"),
                                    a = e(this).attr("data-wow-delay");
                                if (a) {
                                    a = e(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(a);
                                    e(s).addClass("animated"), e(s).css({
                                        visibility: "visible"
                                    }), e(s).css({
                                        "animation-delay": a
                                    }), e(s).css({
                                        "animation-name": t[o]
                                    });
                                    var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                    e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                } else {
                                    e(this).addClass("animated"), e(this).css({
                                        visibility: "visible"
                                    }), e(this).css({
                                        "animation-name": t[o]
                                    });
                                    l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function r(e) {
                        var t = e.getBoundingClientRect(),
                            n = document.body,
                            i = document.documentElement,
                            r = window.pageYOffset || i.scrollTop || n.scrollTop,
                            o = i.clientTop || n.clientTop || 0,
                            a = t.top + r - o;
                        return Math.round(a)
                    }
                    e(".wow").each(function() {
                        e(this).css({
                            visibility: "hidden"
                        }), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({
                            "animation-name": "none"
                        })
                    }), e(window).scroll(function() {
                        var t, o;
                        n ? (t = window.innerHeight, o = window.scrollY, e(".wow.animated").each(function() {
                            if (t + o - 100 > r(this) && o > r(this) + 100 || t + o - 100 < r(this) && o < r(this) + 100 || r(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({
                                "animation-name": "none"
                            }), e(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var n = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (n += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                var i = this;
                                setTimeout(function() {
                                    e(i).removeClass("animated")
                                }, n)
                            }
                        }), i(), n--) : i()
                    }), e(".wow").each(function() {
                        var n = e(this).index(".wow"),
                            i = e(this).attr("data-wow-delay");
                        i ? (i = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(i), e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-delay": i + "s"
                        }), e(this).css({
                            "animation-name": t[n]
                        })) : (e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-name": t[n]
                        }))
                    })
                }
            }
        }
    }(jQuery),
    function(e) {
        e(window).on("scroll", function() {
            var t = e(".navbar");
            t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
        })
    }(jQuery),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.Waves = t.call(e), e.Waves
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof window ? window : this, function() {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            n = Object.prototype.toString,
            i = "ontouchstart" in window;

        function r(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function o(e) {
            var i, o = n.call(e);
            return "[object String]" === o ? t(e) : r(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(o) && e.hasOwnProperty("length") ? e : r(i = e) && i.nodeType > 0 ? [e] : []
        }

        function a(e) {
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument;
            return t = r.documentElement, void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()), n = function(e) {
                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                var t
            }(r), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }
        }

        function s(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function(e, t, n) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", t.appendChild(i);
                    var r = a(t),
                        o = 0,
                        c = 0;
                    "touches" in e && e.touches.length ? (o = e.touches[0].pageY - r.top, c = e.touches[0].pageX - r.left) : (o = e.pageY - r.top, c = e.pageX - r.left), c = c >= 0 ? c : 0, o = o >= 0 ? o : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    n && (d = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", c), i.setAttribute("data-y", o), i.setAttribute("data-scale", u), i.setAttribute("data-translate", d);
                    var h = {
                        top: o + "px",
                        left: c + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", s(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = u + " " + d, h["-moz-transform"] = u + " " + d, h["-ms-transform"] = u + " " + d, h["-o-transform"] = u + " " + d, h.transform = u + " " + d, h.opacity = "1";
                    var f = "mousemove" === e.type ? 2500 : l.duration;
                    h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", i.setAttribute("style", s(h))
                },
                hide: function(e, t) {
                    for (var n = (t = t || this).getElementsByClassName("waves-rippling"), r = 0, o = n.length; r < o; r++) u(e, t, n[r]);
                    i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
                }
            },
            c = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("span");
                        n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e)
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        t.replaceChild(n, e), n.appendChild(e)
                    }
                }
            };

        function u(e, t, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"),
                    r = n.getAttribute("data-y"),
                    o = n.getAttribute("data-scale"),
                    a = n.getAttribute("data-translate"),
                    c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
                var u = "mousemove" === e.type ? 2500 : l.duration;
                setTimeout(function() {
                    var e = {
                        top: r + "px",
                        left: i + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": o + " " + a,
                        "-moz-transform": o + " " + a,
                        "-ms-transform": o + " " + a,
                        "-o-transform": o + " " + a,
                        transform: o + " " + a
                    };
                    n.setAttribute("style", s(e)), setTimeout(function() {
                        try {
                            t.removeChild(n)
                        } catch (e) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function(e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
            },
            registerEvent: function(e) {
                var t = e.type;
                "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function h(e) {
            var t = function(e) {
                if (!1 === d.allowEvent(e)) return null;
                for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        t = n;
                        break
                    }
                    n = n.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                    var n = !1,
                        r = setTimeout(function() {
                            r = null, l.show(e, t)
                        }, l.delay),
                        o = function(i) {
                            r && (clearTimeout(r), r = null, l.show(e, t)), n || (n = !0, l.hide(i, t)), s()
                        },
                        a = function(e) {
                            r && (clearTimeout(r), r = null), o(e), s()
                        };
                    t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1);
                    var s = function() {
                        t.removeEventListener("touchmove", a), t.removeEventListener("touchend", o), t.removeEventListener("touchcancel", o)
                    }
                } else l.show(e, t), i && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return e.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), i && (t.addEventListener("touchstart", h, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", h, !1)
        }, e.attach = function(e, t) {
            var i, r;
            e = o(e), "[object Array]" === n.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var a = 0, s = e.length; a < s; a++) r = (i = e[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(r) && (c[r](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
        }, e.ripple = function(e, t) {
            var n = (e = o(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n)
                for (var i, r, s, c = {}, u = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, h = function(e, t) {
                        return function() {
                            l.hide(e, t)
                        }
                    }; u < n; u++)
                    if (i = e[u], r = t.position || {
                            x: i.clientWidth / 2,
                            y: i.clientHeight / 2
                        }, s = a(i), c.x = s.left + r.x, c.y = s.top + r.y, d.pageX = c.x, d.pageY = c.y, l.show(d, i), t.wait >= 0 && null !== t.wait) {
                        setTimeout(h({
                            type: "mouseup",
                            button: 1
                        }, i), t.wait)
                    }
        }, e.calm = function(e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = (e = o(e)).length; n < i; n++) l.hide(t, e[n])
        }, e.displayEffect = function(t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
        }, e
    }), $(document).ready(function() {
        Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
    });
var _this = void 0;
! function(e) {
    var t, n, i = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
            return "input[type=".concat(e, "]")
        }).join(", "), ", textarea"),
        r = function(e) {
            var t = e.siblings("label, i"),
                n = e.val().length,
                i = e.attr("placeholder");
            t["".concat(n || i ? "add" : "remove", "Class")]("active")
        },
        o = function(e) {
            if (e.hasClass("validate")) {
                var t = e.val(),
                    n = !t.length,
                    i = !e[0].validity.badInput;
                if (n && i) e.removeClass("valid").removeClass("invalid");
                else {
                    var r = e.is(":valid"),
                        o = Number(e.attr("length")) || 0;
                    r && (!o || o > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                }
            }
        },
        a = function() {
            var t = e(_this);
            if (t.val().length) {
                var n = e(".hiddendiv"),
                    i = t.css("font-family"),
                    r = t.css("font-size");
                r && n.css("font-size", r), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(t.val(), "\n"));
                var o = n.html().replace(/\n/g, "<br>");
                n.html(o), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
            }
        };
    e(i).each(function(t, n) {
        var i = e(n),
            o = i.siblings("label, i");
        r(i), n.validity.badInput && o.addClass("active")
    }), e(document).on("focus", i, function(t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", i, function(t) {
        var n = e(t.target),
            i = !n.val(),
            r = !t.target.validity.badInput,
            a = void 0 === n.attr("placeholder");
        i && r && a && n.siblings("label, i").removeClass("active"), o(n)
    }), e(document).on("change", i, function(t) {
        var n = e(t.target);
        r(n), o(n)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function(t) {
        var n = e(t.target);
        n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid").each(function(t, n) {
            var i = e(n),
                r = !i.val(),
                o = !i.attr("placeholder");
            r && o && i.siblings("label, i").removeClass("active")
        }), n.find("select.initialized").each(function(t, n) {
            var i = e(n),
                r = i.siblings("input.select-dropdown"),
                o = i.children("[selected]").val();
            i.val(o), r.val(o)
        }))
    }), (n = e(".md-textarea-auto")).length && (t = window.attachEvent ? function(e, t, n) {
        e.attachEvent("on".concat(t), n)
    } : function(e, t, n) {
        e.addEventListener(t, n, !1)
    }, n.each(function() {
        var e = this;

        function n() {
            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
        }

        function i() {
            window.setTimeout(n, 0)
        }
        t(e, "change", n), t(e, "cut", i), t(e, "paste", i), t(e, "drop", i), t(e, "keydown", i), n()
    }));
    var s = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        s.append(l)
    }
    e(".materialize-textarea").each(a), s.on("keyup keydown", ".materialize-textarea", a)
}(jQuery);
var loader_path = "../dev/dist/mdb-addons/preloader.html",
    windowLoaded = !1;
$(window).on("load", function() {
        windowLoaded = !0
    }), $(document).ready(function() {
        $("body").attr("aria-busy", !0), $("#preloader-markup").load(loader_path, function() {
            windowLoaded ? ($("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")) : $(window).on("load", function() {
                $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
            })
        })
    }),
    function(e) {
        e(document).on("click.card", ".card", function(t) {
            if (e(this).find(".card-reveal").length) {
                var n = e(t.target),
                    i = n.is(".card-reveal .card-title"),
                    r = n.is(".card-reveal .card-title i"),
                    o = n.is(".card .activator"),
                    a = n.is(".card .activator i");
                i || r ? e(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        e(this).css({
                            display: "none"
                        })
                    }
                }) : (o || a) && e(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                })
            }
        }), e(".rotate-btn").on("click", function() {
            var t = e(this).attr("data-card");
            e("#".concat(t)).toggleClass("flipped")
        }), e(window).on("load", function() {
            var t = e(".front").outerHeight(),
                n = e(".back").outerHeight();
            t > n ? e(".card-wrapper, .back").height(t) : t > n ? e(".card-wrapper, .front").height(n) : e(".card-wrapper").height(n)
        }), e(".card-share > a").on("click", function(t) {
            t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
        })
    }(jQuery), $(".map-card").click(function() {
        $(".card-body").toggleClass("closed")
    }),
    function(e) {
        function t() {
            var t = Number(e(this).attr("length")),
                n = Number(e(this).val().length),
                i = n <= t;
            e(this).parent().find('span[class="character-counter"]').html("".concat(n, "/").concat(t)),
                function(e, t) {
                    var n = t.hasClass("invalid");
                    e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
                }(i, e(this))
        }

        function n() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }
        e.fn.characterCounter = function() {
            return this.each(function() {
                var i, r;
                void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", n), i = e(this), r = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), i.parent().append(r))
            })
        }, e(document).ready(function() {
            e("input, textarea").characterCounter()
        })
    }(jQuery),
    function(e) {
        e(["jquery"], function(e) {
            return function() {
                var t, n, i, r = 0,
                    o = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    a = {
                        clear: function(n, i) {
                            var r = d();
                            t || s(r);
                            l(n, r, i) || function(n) {
                                for (var i = t.children(), r = i.length - 1; r >= 0; r--) l(e(i[r]), n)
                            }(r)
                        },
                        remove: function(n) {
                            var i = d();
                            t || s(i);
                            if (n && 0 === e(":focus", n).length) return void h(n);
                            t.children().length && t.remove()
                        },
                        error: function(e, t, n) {
                            return u({
                                type: o.error,
                                iconClass: d().iconClasses.error,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        getContainer: s,
                        info: function(e, t, n) {
                            return u({
                                type: o.info,
                                iconClass: d().iconClasses.info,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        options: {},
                        subscribe: function(e) {
                            n = e
                        },
                        success: function(e, t, n) {
                            return u({
                                type: o.success,
                                iconClass: d().iconClasses.success,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        version: "2.1.1",
                        warning: function(e, t, n) {
                            return u({
                                type: o.warning,
                                iconClass: d().iconClasses.warning,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        }
                    };
                return a;

                function s(n, i) {
                    return n || (n = d()), (t = e("#" + n.containerId)).length ? t : (i && (t = function(n) {
                        return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)), t
                    }(n)), t)
                }

                function l(t, n, i) {
                    var r = !(!i || !i.force) && i.force;
                    return !(!t || !r && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                        duration: n.hideDuration,
                        easing: n.hideEasing,
                        complete: function() {
                            h(t)
                        }
                    }), !0)
                }

                function c(e) {
                    n && n(e)
                }

                function u(n) {
                    var o = d(),
                        a = n.iconClass || o.iconClass;
                    if (void 0 !== n.optionsOverride && (o = e.extend(o, n.optionsOverride), a = n.optionsOverride.iconClass || a), ! function(e, t) {
                            if (e.preventDuplicates) {
                                if (t.message === i) return !0;
                                i = t.message
                            }
                            return !1
                        }(o, n)) {
                        r++, t = s(o, !0);
                        var l = null,
                            u = e("<div/>"),
                            f = e("<div/>"),
                            p = e("<div/>"),
                            g = e("<div/>"),
                            m = e(o.closeHtml),
                            v = {
                                intervalId: null,
                                hideEta: null,
                                maxHideTime: null
                            },
                            y = {
                                toastId: r,
                                state: "visible",
                                startTime: new Date,
                                options: o,
                                map: n
                            };
                        return n.iconClass && u.addClass(o.toastClass).addClass(a), n.title && (f.append(n.title).addClass(o.titleClass), u.append(f)), n.message && (p.append(n.message).addClass(o.messageClass), u.append(p)), o.closeButton && (m.addClass("md-toast-close-button").attr("role", "button"), u.prepend(m)), o.progressBar && (g.addClass("md-toast-progress"), u.prepend(g)), o.newestOnTop ? t.prepend(u) : t.append(u), u.hide(), u[o.showMethod]({
                                duration: o.showDuration,
                                easing: o.showEasing,
                                complete: o.onShown
                            }), o.timeOut > 0 && (l = setTimeout(b, o.timeOut), v.maxHideTime = parseFloat(o.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, o.progressBar && (v.intervalId = setInterval(C, 10))),
                            function() {
                                u.hover(_, w), !o.onclick && o.tapToDismiss && u.click(b);
                                o.closeButton && m && m.click(function(e) {
                                    e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), b(!0)
                                });
                                o.onclick && u.click(function() {
                                    o.onclick(), b()
                                })
                            }(), c(y), o.debug && console && console.log(y), u
                    }

                    function b(t) {
                        if (!e(":focus", u).length || t) return clearTimeout(v.intervalId), u[o.hideMethod]({
                            duration: o.hideDuration,
                            easing: o.hideEasing,
                            complete: function() {
                                h(u), o.onHidden && "hidden" !== y.state && o.onHidden(), y.state = "hidden", y.endTime = new Date, c(y)
                            }
                        })
                    }

                    function w() {
                        (o.timeOut > 0 || o.extendedTimeOut > 0) && (l = setTimeout(b, o.extendedTimeOut), v.maxHideTime = parseFloat(o.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                    }

                    function _() {
                        clearTimeout(l), v.hideEta = 0, u.stop(!0, !0)[o.showMethod]({
                            duration: o.showDuration,
                            easing: o.showEasing
                        })
                    }

                    function C() {
                        var e = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                        g.width(e + "%")
                    }
                }

                function d() {
                    return e.extend({}, {
                        tapToDismiss: !0,
                        toastClass: "md-toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "md-toast-error",
                            info: "md-toast-info",
                            success: "md-toast-success",
                            warning: "md-toast-warning"
                        },
                        iconClass: "md-toast-info",
                        positionClass: "md-toast-top-right",
                        timeOut: 5e3,
                        titleClass: "md-toast-title",
                        messageClass: "md-toast-message",
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }, a.options)
                }

                function h(e) {
                    t || (t = s()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
                }
            }()
        })
    }("function" == typeof define && define.amd ? define : function(e, t) {
        "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
    });
var SMOOTH_SCROLL_DURATION = 700;

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            _defineProperty(e, t, n[t])
        })
    }
    return e
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
$(".smooth-scroll").on("click", "a", function() {
        var e = $(this).attr("href");
        if (void 0 !== e && 0 === e.indexOf("#")) {
            var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
                n = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
            return $("body,html").animate({
                scrollTop: $(e).offset().top - t
            }, SMOOTH_SCROLL_DURATION), void 0 !== n && !1 !== n && history.replaceState(null, null, e), !1
        }
    }),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var n = e.extend({}, e.fn.dropdown.defaults, t);

            function i(t, i) {
                var r = window.innerHeight,
                    o = t.innerHeight(),
                    a = t.offset().left,
                    s = t.offset().top - e(window).scrollTop(),
                    l = n.alignment,
                    c = 0,
                    u = 0,
                    d = 0;
                !0 === n.belowOrigin && (d = o);
                var h = 0,
                    f = t.parent();
                if (!f.is("body") && f[0].scrollHeight > f[0].clientHeight && (h = f[0].scrollTop), a + i.innerWidth() > e(window).width() ? l = "right" : a - i.innerWidth() + t.innerWidth() < 0 && (l = "left"), s + i.innerHeight() > r)
                    if (s + o - i.innerHeight() < 0) {
                        var p = r - s - d;
                        i.css("max-height", p)
                    } else d || (d += o), d -= i.innerHeight();
                if ("left" === l) c = n.gutter, u = t.position().left + c;
                else if ("right" === l) {
                    u = t.position().left + t.outerWidth() - i.outerWidth() + (c = -n.gutter)
                }
                i.css({
                    position: "absolute",
                    top: t.position().top + d + h,
                    left: u
                })
            }
            return this.each(function() {
                var t = e(this),
                    r = !1,
                    o = e("#".concat(t.attr("data-activates")));

                function a() {
                    void 0 !== t.data("induration") && (n.inDuration = t.data("inDuration")), void 0 !== t.data("outduration") && (n.outDuration = t.data("outDuration")), void 0 !== t.data("constrainwidth") && (n.constrain_width = t.data("constrainwidth")), void 0 !== t.data("hover") && (n.hover = t.data("hover")), void 0 !== t.data("gutter") && (n.gutter = t.data("gutter")), void 0 !== t.data("beloworigin") && (n.belowOrigin = t.data("beloworigin")), void 0 !== t.data("alignment") && (n.alignment = t.data("alignment")), void 0 !== t.data("maxheight") && (n.maxHeight = t.data("maxheight")), void 0 !== t.data("resetscroll") && (n.resetScroll = "true" === t.data("resetscroll"))
                }

                function s(s) {
                    "focus" === s && (r = !0), a(), o.addClass("active"), t.addClass("active"), !0 === n.constrain_width ? o.css("width", t.outerWidth()) : o.css("white-space", "nowrap"), i(t, o), o.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: n.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate(_objectSpread({
                        opacity: 1
                    }, n.resetScroll && {
                        scrollTop: 0
                    }), {
                        queue: !1,
                        duration: n.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function l() {
                    r = !1, o.fadeOut(n.outDuration), o.removeClass("active"), t.removeClass("active"), setTimeout(function() {
                        o.css("max-height", n.maxHeight)
                    }, n.outDuration)
                }
                if (a(), t.after(o), n.hover) {
                    var c = !1;
                    t.unbind("click.".concat(t.attr("id"))), t.on("mouseenter", function() {
                        !1 === c && (s(), c = !0)
                    }), t.on("mouseleave", function(t) {
                        var n = t.toElement || t.relatedTarget;
                        e(n).closest(".dropdown-content").is(o) || (o.stop(!0, !0), l(), c = !1)
                    }), o.on("mouseleave", function(n) {
                        var i = n.toElement || n.relatedTarget;
                        e(i).closest(".dropdown-button").is(t) || (o.stop(!0, !0), l(), c = !1)
                    })
                } else t.unbind("click.".concat(t.attr("id"))), t.bind("click.".concat(t.attr("id")), function(n) {
                    r || (t[0] !== n.currentTarget || t.hasClass("active") || 0 !== e(n.target).closest(".dropdown-content").length ? t.hasClass("active") && (l(), e(document).unbind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id")))) : (n.preventDefault(), s("click")), o.hasClass("active") && e(document).bind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id")), function(n) {
                        o.is(n.target) || t.is(n.target) || t.find(n.target).length || (l(), e(document).unbind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id"))))
                    }))
                });
                t.on("open", function(e, t) {
                    s(t)
                }), t.on("close", l)
            }), {
                updatePosition: i
            }
        }, e.fn.dropdown.defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left",
            maxHeight: "",
            resetScroll: !0
        }, e(".dropdown-button").dropdown(), e.fn.mdbDropSearch = function(t) {
            var n = e(this).find("input");
            this.filter(function(t, i) {
                e(i).on("keyup", function() {
                    for (var e = n.closest("div[id]").find("a, li"), t = 0; t < e.length; t++) e.eq(t).html().toUpperCase().indexOf(n.val().toUpperCase()) > -1 ? e.eq(t).css({
                        display: ""
                    }) : e.eq(t).css({
                        display: "none"
                    })
                })
            });
            var i = e.extend({
                color: "#000",
                backgroundColor: "",
                fontSize: ".9rem",
                fontWeight: "400",
                borderRadius: "",
                borderColor: ""
            }, t);
            return this.css({
                color: i.color,
                backgroundColor: i.backgroundColor,
                fontSize: i.fontSize,
                fontWeight: i.fontWeight,
                borderRadius: i.borderRadius,
                border: i.border,
                margin: i.margin
            })
        }
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn",
        n = "fadeOut",
        i = $(e),
        r = $(".dropdown-menu", e),
        o = i.parents("ul.nav");
    return o.height > 0 && (t = o.data("dropdown-in") || null, n = o.data("dropdown-out") || null), {
        target: e,
        dropdown: i,
        dropdownMenu: r,
        effectIn: r.data("dropdown-in") || t,
        effectOut: r.data("dropdown-out") || n
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e)
        },
        "hide.bs.dropdown": function(e) {
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
                t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
            }))
        }
    }), $(".multi-level-dropdown .dropdown-submenu > a").on("mouseenter", function(e) {
        var t = $(this);
        $(".multi-level-dropdown .dropdown-submenu .dropdown-menu").removeClass("show"), t.next(".dropdown-menu").addClass("show"), e.stopPropagation()
    }), $(".multi-level-dropdown .dropdown").on("hidden.bs.dropdown", function() {
        $(".multi-level-dropdown .dropdown-menu.show").removeClass("show")
    }),
    function(e) {
        var t = this;
        e(document).ready(function() {
            e(document).on("mouseenter", ".fixed-action-btn", function() {
                var t = e(this);
                n(t)
            }), e(document).on("mouseleave", ".fixed-action-btn", function() {
                var t = e(this);
                i(t)
            }), e(document).on("click", ".fixed-action-btn > a", function() {
                var t = e(this).parent();
                t.hasClass("active") ? n(t) : i(t), t.hasClass("active") ? i(t) : n(t)
            })
        }), e.fn.extend({
            openFAB: function() {
                n(e(this))
            },
            closeFAB: function() {
                i(e(this))
            }
        });
        var n = function(e) {
                var t = e;
                t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.add("shown")
                }))
            },
            i = function(e) {
                e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.remove("shown")
                })
            };
        e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function(r) {
            if (!e(t).hasClass("smooth-scroll")) return r.preventDefault(), o = e(".fixed-action-btn"), (a = o).hasClass("active") ? i(a) : n(a), !1;
            var o, a
        })
    }(jQuery),
    function(e) {
        var t = 240,
            n = 1440,
            i = 300,
            r = 200,
            o = 50,
            a = 200,
            s = "easeOutQuad",
            l = "easeOutCubic",
            c = !0,
            u = !1,
            d = function() {
                function d(h, f) {
                    _classCallCheck(this, d), this.defaults = {
                        MENU_WIDTH: t,
                        edge: "left",
                        closeOnClick: !1,
                        breakpoint: n,
                        timeDurationOpen: i,
                        timeDurationClose: r,
                        timeDurationOverlayOpen: o,
                        timeDurationOverlayClose: a,
                        easingOpen: s,
                        easingClose: l,
                        showOverlay: c,
                        showCloseButton: u
                    }, this.$element = h, this.$elementCloned = h.clone().css({
                        display: "inline-block",
                        lineHeight: "24px"
                    }), this.options = this.assignOptions(f), this.menuOut = !1, this.lastTouchVelocity = {
                        x: {
                            startPosition: 0,
                            startTime: 0,
                            endPosition: 0,
                            endTime: 0
                        }
                    }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function() {
                        this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick()
                    }
                }, {
                    key: "bindTouchEvents",
                    value: function() {
                        var e = this;
                        this.$dragTarget.on("click", function() {
                            return e.removeMenu()
                        }), this.$elementCloned.on("click", function() {
                            return e.removeMenu()
                        }), this.$dragTarget.on("touchstart", function(t) {
                            e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                        }), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                    }
                }, {
                    key: "touchmoveEventHandler",
                    value: function(e) {
                        if ("touchmove" === e.type) {
                            var t = e.touches[0],
                                n = t.clientX;
                            Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (n > this.options.MENU_WIDTH ? n = this.options.MENU_WIDTH : n < 0 && (n = 0)), this.translateSidenavX(n), this.updateOverlayOpacity(n)
                        }
                    }
                }, {
                    key: "panEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.center.x;
                            this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (t > this.options.MENU_WIDTH ? t = this.options.MENU_WIDTH : t < 0 && (t = 0)), this.translateSidenavX(t), this.updateOverlayOpacity(t)
                        }
                    }
                }, {
                    key: "translateSidenavX",
                    value: function(e) {
                        if ("left" === this.options.edge) {
                            var t = e >= this.options.MENU_WIDTH / 2;
                            this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.MENU_WIDTH, "px)"))
                        } else {
                            var n = e < window.innerWidth - this.options.MENU_WIDTH / 2;
                            this.menuOut = n;
                            var i = e - this.options.MENU_WIDTH / 2;
                            i < 0 && (i = 0), this.$menu.css("transform", "translateX(".concat(i, "px)"))
                        }
                    }
                }, {
                    key: "updateOverlayOpacity",
                    value: function(e) {
                        var t;
                        t = "left" === this.options.edge ? e / this.options.MENU_WIDTH : Math.abs((e - window.innerWidth) / this.options.MENU_WIDTH), this.$sidenavOverlay.velocity({
                            opacity: t
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "buildSidenavOverlay",
                    value: function() {
                        var t = this;
                        !0 === this.options.showOverlay && (this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function() {
                            return t.removeMenu()
                        }), this.$body.append(this.$sidenavOverlay))
                    }
                }, {
                    key: "disableScrolling",
                    value: function() {
                        var e = this.$body.innerWidth();
                        this.$body.css("overflow", "hidden"), this.$body.width(e)
                    }
                }, {
                    key: "touchendEventHandler",
                    value: function(e) {
                        if ("touchend" === e.type) {
                            var t = e.changedTouches[0];
                            this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                            var n = this.calculateTouchVelocityX(),
                                i = t.clientX,
                                r = i - this.options.MENU_WIDTH,
                                o = i - this.options.MENU_WIDTH / 2;
                            r > 0 && (r = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && n <= .3 || n < -.5 ? (0 !== r && this.translateMenuX([0, r], "300"), this.showSidenavOverlay()) : (!this.menuOut || n > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, r], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && n >= -.3 || n > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || n < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "calculateTouchVelocityX",
                    value: function() {
                        return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                    }
                }, {
                    key: "panendEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.velocityX,
                                n = e.gesture.center.x,
                                i = n - this.options.MENU_WIDTH,
                                r = n - this.options.MENU_WIDTH / 2;
                            i > 0 && (i = 0), r < 0 && (r = 0), "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== i && this.translateMenuX([0, i], "300"), this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, i], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, r], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || t < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, r], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "translateMenuX",
                    value: function(e, t) {
                        this.$menu.velocity({
                            translateX: e
                        }, {
                            duration: "string" == typeof t ? Number(t) : t,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "hideSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 0
                        }, {
                            duration: this.options.timeDurationOverlayClose,
                            queue: !1,
                            easing: this.options.easingOpen,
                            complete: function() {
                                e(this).remove()
                            }
                        })
                    }
                }, {
                    key: "showSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 1
                        }, {
                            duration: this.options.timeDurationOverlayOpen,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "enableScrolling",
                    value: function() {
                        this.$body.css({
                            overflow: "",
                            width: ""
                        })
                    }
                }, {
                    key: "openOnClick",
                    value: function() {
                        var t = this;
                        this.$element.on("click", function(n) {
                            if (n.preventDefault(), !0 === t.menuOut) t.removeMenu();
                            else {
                                t.menuOut = !0, !0 === t.options.showOverlay ? e("#sidenav-overlay").length || (t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), t.$body.append(t.$sidenavOverlay)) : t.showCloseButton();
                                var i = [];
                                i = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH], "matrix(1, 0, 0, 1, 0, 0)" !== t.$menu.css("transform") && t.$menu.velocity({
                                    translateX: i
                                }, {
                                    duration: t.options.timeDurationOpen,
                                    queue: !1,
                                    easing: t.options.easingOpen
                                }), t.$sidenavOverlay.on("click", function() {
                                    return t.removeMenu()
                                }), t.$sidenavOverlay.on("touchmove", t.touchmoveEventHandler.bind(t)), t.$menu.on("touchmove", function(e) {
                                    e.preventDefault(), t.$menu.find(".custom-scrollbar").css("padding-bottom", "30px")
                                }), t.menuOut = !0
                            }
                        })
                    }
                }, {
                    key: "closeOnClick",
                    value: function() {
                        var e = this;
                        !0 === this.options.closeOnClick && (this.$menu.on("click", "a:not(.collapsible-header)", function() {
                            return e.removeMenu()
                        }), "translateX(0)" === this.$menu.css("transform") && this.click(function() {
                            return e.removeMenu()
                        }))
                    }
                }, {
                    key: "showCloseButton",
                    value: function() {
                        !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
                            borderTop: "1px solid rgba(153,153,153,.3)"
                        }))
                    }
                }, {
                    key: "setMenuTranslation",
                    value: function() {
                        var t = this;
                        "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                            left: 0
                        })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                            right: 0
                        })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), this.$menu.find("input[type=text]").on("touchstart", function() {
                            t.$menu.addClass("transform-fix-input")
                        }), e(window).resize(function() {
                            if (window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)");
                            else if (!1 === t.menuOut) {
                                var e = "left" === t.options.edge ? "-100" : "100";
                                t.$menu.css("transform", "translateX(".concat(e, "%)"))
                            }
                        }))
                    }
                }, {
                    key: "setMenuWidth",
                    value: function() {
                        var n = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                        this.options.MENU_WIDTH !== t && (this.$menu.css("width", this.options.MENU_WIDTH), n.css("width", this.options.MENU_WIDTH))
                    }
                }, {
                    key: "inputOnClick",
                    value: function() {
                        var e = this;
                        this.$menu.find("input[type=text]").on("touchstart", function() {
                            return e.$menu.css("transform", "translateX(0)")
                        })
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "removeMenu",
                    value: function(e) {
                        var t = this;
                        this.$body.css({
                            overflow: "",
                            width: ""
                        }), this.$menu.velocity({
                            translateX: "left" === this.options.edge ? "-100%" : "100%"
                        }, {
                            duration: this.options.timeDurationClose,
                            queue: !1,
                            easing: this.options.easingClose,
                            complete: function() {
                                !0 === e && (t.$menu.removeAttr("style"), t.$menu.css("width", t.options.MENU_WIDTH))
                            }
                        }), this.$menu.hasClass("transform-fix-input") && this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay(), this.menuOut = !1
                    }
                }]), d
            }();
        e.fn.sideNav = function(t) {
            return this.each(function() {
                new d(e(this), t)
            })
        }
    }(jQuery), $(function(e) {
        e("#toggle").click(function() {
            e("#slide-out").hasClass("slim") ? (e("#slide-out").removeClass("slim"), e(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), e(".fixed-sn .double-nav").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15.9rem"
            }), e(".fixed-sn main").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15rem"
            }), e(".fixed-sn footer").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15rem"
            })) : (e("#slide-out").addClass("slim"), e(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), e(".fixed-sn .double-nav").css("padding-left", "4.6rem"), e(".fixed-sn main").css("padding-left", "3.7rem"), e(".fixed-sn footer").css("padding-left", "3.7rem"))
        })
    }),
    function(e) {
        e.fn.collapsible = function(t) {
            var n = {
                accordion: void 0
            };

            function i(t, n) {
                $panelHeaders = t.find("> li > .collapsible-header"), n.hasClass("active") ? n.parent().addClass("active") : n.parent().removeClass("active"), n.parent().hasClass("active") ? n.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : n.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }), $panelHeaders.not(n).removeClass("active").parent().removeClass("active"), $panelHeaders.not(n).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function r(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function o(e) {
                return a(e).length > 0
            }

            function a(e) {
                return e.closest("li > .collapsible-header")
            }
            return t = e.extend(n, t), this.each(function() {
                var n = e(this),
                    s = e(this).find("> li > .collapsible-header"),
                    l = n.data("collapsible");
                n.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = n.find("> li > .collapsible-header")).on("click.collapse", function(t) {
                    var r = e(t.target);
                    o(r) && (r = a(r)), r.toggleClass("active"), i(n, r)
                }), i(n, s.filter(".active").first())) : s.each(function() {
                    e(this).on("click.collapse", function(t) {
                        var n = e(t.target);
                        o(n) && (n = a(n)), n.toggleClass("active"), r(n)
                    }), e(this).hasClass("active") && r(e(this))
                })
            })
        }, e(".collapsible").collapsible()
    }(jQuery),
    function(e) {
        var t, n = "input[type=range]:not(.custom-range):not(.multi-range)",
            i = '<span class="thumb"><span class="value"></span></span>',
            r = !1;
        e(document).on("change", n, function() {
            var t = e(this);
            t.siblings(".thumb").find(".value").html(t.val())
        }), e(document).on("input mousedown touchstart", n, function(o) {
            var a = e(this),
                s = a.siblings(".thumb"),
                l = a.outerWidth();
            if (!s.length && function() {
                    var t = e(i);
                    e(n).after(t)
                }(), s.find(".value").html(a.val()), r = !0, a.addClass("active"), s.hasClass("active") || s.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== o.type) {
                var c = void 0 === o.pageX || null === o.pageX;
                (t = c ? o.originalEvent.touches[0].pageX - e(this).offset().left : o.pageX - e(this).offset().left) < 0 ? t = 0 : t > l && (t = l), s.addClass("active").css("left", t)
            }
            s.find(".value").html(a.val())
        }), e(document).on("mouseup touchend", ".range-field", function() {
            r = !1, e(this).removeClass("active")
        }), e(document).on("mousemove touchmove", ".range-field", function(t) {
            var i, o = e(this).children(".thumb");
            if (r) {
                o.hasClass("active") || o.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), i = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                var a = e(this).outerWidth();
                i < 0 ? i = 0 : i > a && (i = a), o.addClass("active").css("left", i), o.find(".value").html(o.siblings(n).val())
            }
        }), e(document).on("mouseout touchleave", ".range-field", function() {
            if (!r) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), t.removeClass("active")
            }
        })
    }(jQuery),
    function(e) {
        e(document).on("change", '.file-field input[type="file"]', function(t) {
            var n = e(t.target),
                i = n.closest(".file-field").find("input.file-path"),
                r = n[0].files,
                o = [];
            Array.isArray(r) ? r.forEach(function(e) {
                return o.push(e.name)
            }) : Object.keys(r).forEach(function(e) {
                o.push(r[e].name)
            }), i.val(o.join(", ")), i.trigger("change")
        })
    }(jQuery);
var MaterialSelectViewRenderer = function() {
    function e(t) {
        _classCallCheck(this, e), this.view = t
    }
    return _createClass(e, [{
        key: "destroy",
        value: function() {
            var e = this.view.$nativeSelect.data("select-id");
            this.view.$nativeSelect.data("select-id", null).removeClass("initialized"), this.view.$nativeSelect.parent().find("span.caret").remove(), this.view.$nativeSelect.parent().find("input").remove(), this.view.$nativeSelect.unwrap(), $("ul#select-options-".concat(e)).remove()
        }
    }, {
        key: "render",
        value: function() {
            this.setWrapperClasses(), this.setMaterialSelectInitialValue(), this.view.$nativeSelect.data("select-id", this.view.properties.id), this.view.$nativeSelect.before(this.view.$selectWrapper), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSelectLabel(), this.appendCustomTemplateParts(), this.shouldValidate && this.appendValidationFeedbackElements(), this.isRequired && this.enableValidation(), this.isDisabled || (this.setMaterialOptionsListMaxHeight(), this.view.dropdown = this.view.$materialSelect.dropdown({
                hover: !1,
                closeOnClick: !1,
                resetScroll: !1
            })), this.shouldInheritTabindex && this.view.$materialSelect.attr("tabindex", this.view.$nativeSelect.attr("tabindex")), this.isDefaultMaterialInput && this.view.$mainLabel.css("top", "-7px"), this.isCustomSelect && this.view.$materialSelect.css({
                display: "inline-block",
                width: "100%",
                height: "calc(1.5em + .75rem + 2px)",
                padding: ".375rem 1.75rem .375rem .75rem",
                fontSize: "1rem",
                lineHeight: "1.5",
                backgroundColor: "#fff",
                border: "1px solid #ced4da"
            }), this.addAccessibilityAttributes(), this.markInitialized()
        }
    }, {
        key: "setWrapperClasses",
        value: function() {
            this.isDefaultMaterialInput ? this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class").split(" ").filter(function(e) {
                return "md-form" !== e
            }).join(" ")).css({
                marginTop: "1.5rem",
                marginBottom: "1.5rem"
            }) : this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class"))
        }
    }, {
        key: "setMaterialSelectInitialValue",
        value: function() {
            if (this.view.options.placeholder) this.view.$materialSelect.attr("placeholder", this.view.options.placeholder), this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length || this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');
            else {
                var e = this.view.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
                this.view.$materialSelect.val(e)
            }
        }
    }, {
        key: "appendDropdownIcon",
        value: function() {
            this.isDisabled && this.view.$dropdownIcon.addClass("disabled"), this.view.$selectWrapper.append(this.view.$dropdownIcon)
        }
    }, {
        key: "appendMaterialSelect",
        value: function() {
            this.view.$selectWrapper.append(this.view.$materialSelect)
        }
    }, {
        key: "appendMaterialOptionsList",
        value: function() {
            this.isSearchable && this.appendSearchInputOption(), this.isEditable && this.isSearchable && this.appendAddOptionBtn(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.view.$selectWrapper.append(this.view.$materialOptionsList)
        }
    }, {
        key: "appendNativeSelect",
        value: function() {
            this.view.$nativeSelect.appendTo(this.view.$selectWrapper)
        }
    }, {
        key: "appendSelectLabel",
        value: function() {
            (this.view.$materialSelect.val() || this.view.options.placeholder) && this.view.$mainLabel.addClass("active"), this.view.$mainLabel[this.isDisabled ? "addClass" : "removeClass"]("disabled"), this.view.$mainLabel.appendTo(this.view.$selectWrapper)
        }
    }, {
        key: "appendCustomTemplateParts",
        value: function() {
            var e = this;
            this.view.$customTemplateParts.each(function(t, n) {
                $(n).appendTo(e.view.$materialOptionsList).wrap("<li></li>")
            }), this.view.$btnSave.appendTo(this.view.$materialOptionsList)
        }
    }, {
        key: "appendValidationFeedbackElements",
        value: function() {
            this.view.$validFeedback.insertAfter(this.view.$selectWrapper), this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper)
        }
    }, {
        key: "enableValidation",
        value: function() {
            this.view.$nativeSelect.css({
                position: "absolute",
                top: "1rem",
                left: "0",
                height: "0",
                width: "0",
                opacity: "0",
                padding: "0",
                "pointer-events": "none"
            }), -1 === this.view.$nativeSelect.attr("style").indexOf("inline!important") && this.view.$nativeSelect.attr("style", "".concat(this.view.$nativeSelect.attr("style"), " display: inline!important;")), this.view.$nativeSelect.attr("tabindex", -1), this.view.$nativeSelect.data("inherit-tabindex", !1)
        }
    }, {
        key: "setMaterialOptionsListMaxHeight",
        value: function() {
            var e = this.view.options.visibleOptions,
                t = 0;
            this.view.$materialOptionsList.show();
            var n = this.view.$materialOptionsList.find("li").not(".disabled"),
                i = n.first().height(),
                r = n.length;
            if (this.isSearchable && (t += this.view.$searchInput.height()), this.isMultiple && (t += this.view.$toggleAll.height()), this.view.$materialOptionsList.hide(), e >= 0 && e < r) {
                var o = i * e + t;
                this.view.$materialOptionsList.css("max-height", o), this.view.$materialSelect.data("maxheight", o)
            }
        }
    }, {
        key: "addAccessibilityAttributes",
        value: function() {
            this.view.$materialSelect.attr({
                role: this.isSearchable ? "combobox" : "listbox",
                "aria-multiselectable": this.isMultiple,
                "aria-disabled": this.isDisabled,
                "aria-required": this.isRequired,
                "aria-labelledby": this.view.$mainLabel.attr("id"),
                "aria-haspopup": !0,
                "aria-expanded": !1
            }), this.view.$searchInput && this.view.$searchInput.attr("role", "searchbox"), this.view.$materialOptionsList.find("li").each(function() {
                var e = $(this);
                e.attr({
                    role: "option",
                    "aria-selected": e.hasClass("active"),
                    "aria-disabled": e.hasClass("disabled")
                })
            })
        }
    }, {
        key: "markInitialized",
        value: function() {
            this.view.$nativeSelect.addClass("initialized")
        }
    }, {
        key: "appendSearchInputOption",
        value: function() {
            var e = this.view.$nativeSelect.attr("searchable"),
                t = this.isDefaultMaterialInput ? "" : "md-form",
                n = this.isDefaultMaterialInput ? "select-default mb-2" : "";
            this.view.$searchInput = $('<span class="search-wrap ml-2"><div class="'.concat(t, ' mt-0"><input type="text" class="search w-100 d-block ').concat(n, '" tabindex="-1" placeholder="').concat(e, '"></div></span>')), this.view.$materialOptionsList.append(this.view.$searchInput), this.view.$searchInput.on("click", function(e) {
                return e.stopPropagation()
            })
        }
    }, {
        key: "appendAddOptionBtn",
        value: function() {
            this.view.$searchInput.append(this.view.$addOptionBtn), this.view.$addOptionBtn.on("click", this.addNewOption.bind(this))
        }
    }, {
        key: "buildMaterialOptions",
        value: function() {
            var e = this;
            this.view.$nativeSelectChildren.each(function(t, n) {
                var i = $(n);
                if (i.is("option")) e.buildSingleOption(i, e.isMultiple ? "multiple" : "");
                else if (i.is("optgroup")) {
                    var r = $('<li class="optgroup"><span>'.concat(i.attr("label"), "</span></li>"));
                    e.view.$materialOptionsList.append(r), i.children("option").each(function(t, n) {
                        e.buildSingleOption($(n), "optgroup-option")
                    })
                }
            })
        }
    }, {
        key: "appendToggleAllCheckbox",
        value: function() {
            var e = this.view.$materialOptionsList.find("li").first();
            e.hasClass("disabled") && e.find("input").prop("disabled") ? e.after(this.view.$toggleAll) : this.view.$materialOptionsList.find("li").first().before(this.view.$toggleAll)
        }
    }, {
        key: "addNewOption",
        value: function() {
            var e = this.view.$searchInput.find("input").val(),
                t = $('<option value="'.concat(e.toLowerCase(), '" selected>').concat(e, "</option>")).prop("selected", !0);
            this.isMultiple || this.view.$nativeSelectChildren.each(function(e, t) {
                $(t).attr("selected", !1)
            }), this.view.$nativeSelect.append(t)
        }
    }, {
        key: "buildSingleOption",
        value: function(e, t) {
            var n = e.is(":disabled") ? "disabled" : "",
                i = e.is(":selected") ? "active" : "",
                r = "optgroup-option" === t ? "optgroup-option" : "",
                o = e.data("icon"),
                a = e.data("fas") ? '<i class="fa-pull-right m-2 fas fa-'.concat(e.data("fas"), " ").concat(this.view.options.fasClasses, '"></i> ') : "",
                s = e.data("far") ? '<i class="fa-pull-right m-2 far fa-'.concat(e.data("far"), " ").concat(this.view.options.farClasses, '"></i> ') : "",
                l = e.data("fab") ? '<i class="fa-pull-right m-2 fab fa-'.concat(e.data("fab"), " ").concat(this.view.options.fabClasses, '"></i> ') : "",
                c = e.attr("class"),
                u = o ? '<img alt="" src="'.concat(o, '" class="').concat(c, '">') : "",
                d = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(n, "/><label></label>") : "";
            this.view.$materialOptionsList.append($('<li class="'.concat(n, " ").concat(i, " ").concat(r, " ").concat(this.view.options.copyClassesOption ? c : "", ' ">').concat(u, '<span class="filtrable">').concat(d, " ").concat(e.html(), " ").concat(a, " ").concat(s, " ").concat(l, "</span></li>")))
        }
    }, {
        key: "shouldValidate",
        get: function() {
            return this.view.options.validate
        }
    }, {
        key: "shouldInheritTabindex",
        get: function() {
            return !1 !== this.view.$nativeSelect.data("inherit-tabindex")
        }
    }, {
        key: "isMultiple",
        get: function() {
            return this.view.isMultiple
        }
    }, {
        key: "isSearchable",
        get: function() {
            return this.view.isSearchable
        }
    }, {
        key: "isRequired",
        get: function() {
            return this.view.isRequired
        }
    }, {
        key: "isEditable",
        get: function() {
            return this.view.isEditable
        }
    }, {
        key: "isDisabled",
        get: function() {
            return this.view.isDisabled
        }
    }, {
        key: "isDefaultMaterialInput",
        get: function() {
            return this.view.options.defaultMaterialInput
        }
    }, {
        key: "isCustomSelect",
        get: function() {
            return this.view.$materialSelect.hasClass("custom-select") && this.view.$materialSelect.hasClass("select-dropdown")
        }
    }]), e
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var MaterialSelectView = function() {
    function e(t, n) {
        var {
            options: i,
            properties: {
                id: r
            }
        } = n;
        _classCallCheck(this, e), this.properties = {
            id: r,
            isMultiple: Boolean(t.attr("multiple")),
            isSearchable: Boolean(t.attr("searchable")),
            isRequired: Boolean(t.attr("required")),
            isEditable: Boolean(t.attr("editable"))
        }, this.options = this._copyOptions(i), this.$nativeSelect = t, this.$selectWrapper = $('<div class="select-wrapper"></div>'), this.$materialOptionsList = $('<ul id="select-options-'.concat(this.properties.id, '" class="dropdown-content select-dropdown w-100 ').concat(this.properties.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = t.find("option:selected").text() || t.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = $('<input type="text" class="'.concat(this.options.defaultMaterialInput ? "browser-default custom-select multi-bs-select select-dropdown form-control" : "select-dropdown form-control", '" ').concat(!this.options.validate && 'readonly="true"', ' required="').concat(this.options.validate ? "true" : "false", '" ').concat(this.$nativeSelect.is(" :disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.properties.id, '" value=""/>')), this.$dropdownIcon = this.options.defaultMaterialInput ? "" : $('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$noSearchResultsInfo = $("<li><span><i>".concat(this.options.labels.noSearchResults, "</i></span></li>")), this.$toggleAll = $('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.options.labels.selectAll, "</label></span></li>")), this.$addOptionBtn = $('<i class="select-add-option fas fa-plus"></i>'), this.$mainLabel = this._jQueryFallback(this.$nativeSelect.next("label.mdb-main-label"), $("label[for='".concat(this.properties.id, "']"))), this.$customTemplateParts = this._jQueryFallback(this.$nativeSelect.nextUntil("select", ".mdb-select-template-part"), $("[data-mdb-select-template-part-for='".concat(this.properties.id, "']"))), this.$btnSave = this.$nativeSelect.nextUntil("select", ".btn-save"), this.$validFeedback = $('<div class="valid-feedback">'.concat(this.options.labels.validFeedback, "</div>")), this.$invalidFeedback = $('<div class="invalid-feedback">'.concat(this.options.labels.invalidFeedback, "</div>")), this.keyCodes = {
            tab: 9,
            esc: 27,
            enter: 13,
            arrowUp: 38,
            arrowDown: 40
        }, this.renderer = new MaterialSelectViewRenderer(this), this.dropdown = null
    }
    return _createClass(e, [{
        key: "destroy",
        value: function() {
            this.renderer.destroy()
        }
    }, {
        key: "render",
        value: function() {
            this.renderer.render()
        }
    }, {
        key: "selectPreselectedOptions",
        value: function(e) {
            var t = this;
            if (this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function(n, i) {
                var r = i.index;
                t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(r).addClass("selected active").find(":checkbox").prop("checked", !0), e(r)
            });
            else {
                var n = this.$nativeSelect.find("option:selected").first(),
                    i = this.$nativeSelect.find("option").index(n.get(0));
                n.get(0) && "disabled" !== n.attr("disabled") && e(i)
            }
        }
    }, {
        key: "bindMaterialSelectFocus",
        value: function() {
            var e = this;
            this.$materialSelect.on("focus", function(t) {
                var n = $(t.target);
                if ($("ul.select-dropdown").not(e.$materialOptionsList.get(0)).is(":visible") && $("input.select-dropdown").trigger("close"), e.$mainLabel.addClass("active"), !e.$materialOptionsList.is(":visible")) {
                    n.trigger("open", ["focus"]);
                    var i = n.val(),
                        r = e.$materialOptionsList.find("li").filter(function() {
                            return $(this).text().toLowerCase() === i.toLowerCase()
                        }).get(0);
                    e._selectSingleOption(r), e._updateDropdownScrollTop()
                }
                e.isMultiple || e.$mainLabel.addClass("active")
            })
        }
    }, {
        key: "bindMaterialSelectClick",
        value: function() {
            var e = this;
            this.$materialSelect.on("mousedown", function(e) {
                3 === e.which && e.preventDefault()
            }), this.$materialSelect.on("click", function(t) {
                e.$mainLabel.addClass("active"), t.stopPropagation()
            })
        }
    }, {
        key: "bindMaterialSelectBlur",
        value: function() {
            var e = this;
            this.$materialSelect.on("blur", function(t) {
                var n = $(t);
                e.isMultiple || e.isSearchable || n.trigger("close"), e.$materialOptionsList.find("li.selected").removeClass("selected")
            })
        }
    }, {
        key: "bindMaterialSelectKeydown",
        value: function() {
            var e = this;
            this.$materialSelect.on("keydown", function(t) {
                var n = $(t.target),
                    i = t.which === e.keyCodes.tab,
                    r = t.which === e.keyCodes.esc,
                    o = t.which === e.keyCodes.enter,
                    a = o && t.shiftKey,
                    s = t.which === e.keyCodes.arrowUp,
                    l = t.which === e.keyCodes.arrowDown,
                    c = e.$materialOptionsList.is(":visible");
                if (i) e._handleTabKey(n);
                else if (!l || c) {
                    if (!o || c) switch (t.preventDefault(), !0) {
                        case a:
                            return e._handleEnterWithShiftKey(n);
                        case o:
                            return e._handleEnterKey(n);
                        case l || s:
                            return e._handleArrowUpDownKey(t.which);
                        case r:
                            return e._handleEscKey(n);
                        default:
                            return e._handleLetterKey(t)
                    }
                } else n.trigger("open")
            })
        }
    }, {
        key: "bindMaterialSelectDropdownToggle",
        value: function() {
            var e = this;
            this.$materialSelect.on("open", function() {
                return e.$materialSelect.attr("aria-expanded", "true")
            }), this.$materialSelect.on("close", function() {
                return e.$materialSelect.attr("aria-expanded", "false")
            })
        }
    }, {
        key: "bindToggleAllClick",
        value: function(e) {
            var t = this;
            this.$toggleAll.on("click", function(n) {
                var i = $(t.$toggleAll).find('input[type="checkbox"]').first(),
                    r = Boolean($(i).prop("checked")),
                    o = !r;
                $(i).prop("checked", !r), t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each(function(n, i) {
                    var r = $(i),
                        a = r.find('input[type="checkbox"]');
                    r.attr("aria-selected", o), o && a.is(":checked") || !o && !a.is(":checked") || $(i).is(":hidden") || $(i).is(".disabled") || (a.prop("checked", o), t.$nativeSelect.find("option").eq(n).prop("selected", o), r.toggleClass("active"), t._selectOption(i), e(n))
                }), t.$nativeSelect.data("stop-refresh", !0), t._triggerChangeOnNativeSelect(), t.$nativeSelect.removeData("stop-refresh"), n.stopPropagation()
            })
        }
    }, {
        key: "bindMaterialOptionMousedown",
        value: function() {
            var e = this;
            this.$materialOptionsList.on("mousedown", function(t) {
                var n = t.target;
                $(".modal-content").find(e.$materialOptionsList).length && n.scrollHeight > n.offsetHeight && t.preventDefault()
            })
        }
    }, {
        key: "bindMaterialOptionClick",
        value: function(e) {
            var t = this;
            this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(n, i) {
                $(i).on("click", function(r) {
                    r.stopPropagation();
                    var o = $(i);
                    if (!o.hasClass("disabled") && !o.hasClass("optgroup")) {
                        var a = !0;
                        if (t.isMultiple) {
                            o.find('input[type="checkbox"]').prop("checked", function(e, t) {
                                return !t
                            });
                            var s = Boolean(t.$nativeSelect.find("optgroup").length),
                                l = t._isToggleAllPresent() ? o.index() - 1 : o.index();
                            switch (!0) {
                                case t.isSearchable && s:
                                    a = e(l - o.prevAll(".optgroup").length - 1);
                                    break;
                                case t.isSearchable:
                                    a = e(l - 1);
                                    break;
                                case s:
                                    a = e(l - o.prevAll(".optgroup").length);
                                    break;
                                default:
                                    a = e(l)
                            }
                            t._isToggleAllPresent() && t._updateToggleAllOption(), t.$materialSelect.trigger("focus")
                        } else t.$materialOptionsList.find("li").removeClass("active").attr("aria-selected", "false"), t.$materialSelect.val(o.text().replace(/  +/g, " ").trim()), t.$materialSelect.trigger("close");
                        o.toggleClass("active");
                        var c = o.attr("aria-selected");
                        o.attr("aria-selected", "true" === c ? "false" : "true"), t._selectSingleOption(o), t.$nativeSelect.data("stop-refresh", !0), t.$nativeSelect.find("option").eq(n).prop("selected", a), t.$nativeSelect.removeData("stop-refresh"), t._triggerChangeOnNativeSelect(), t.$materialSelect.val() && t.$mainLabel.addClass("active"), o.hasClass("li-added") && t.renderer.buildSingleOption(o, "")
                    }
                })
            })
        }
    }, {
        key: "bindSingleMaterialOptionClick",
        value: function() {
            var e = this;
            this.$materialOptionsList.find("li").on("click", function() {
                e.$materialSelect.trigger("close")
            })
        }
    }, {
        key: "bindSearchInputKeyup",
        value: function() {
            var e = this;
            this.$searchInput.find(".search").on("keyup", function(t) {
                var n = $(t.target),
                    i = t.which === e.keyCodes.tab,
                    r = t.which === e.keyCodes.esc,
                    o = t.which === e.keyCodes.enter,
                    a = o && t.shiftKey,
                    s = t.which === e.keyCodes.arrowUp;
                if (t.which === e.keyCodes.arrowDown || i || r || s) return e.$materialSelect.focus(), void e._handleArrowUpDownKey(t.which);
                var l = n.closest("ul"),
                    c = n.val(),
                    u = l.find("li span.filtrable"),
                    d = !1;
                if (u.each(function() {
                        var e = $(this);
                        if ("string" == typeof this.outerHTML) {
                            var t = this.textContent.toLowerCase();
                            t.includes(c.toLowerCase()) ? e.show().parent().show() : e.hide().parent().hide(), t.trim() === c.toLowerCase() && (d = !0)
                        }
                    }), o) return e.isEditable && !d ? void e.renderer.addNewOption() : (a && e._handleEnterWithShiftKey(n), void e.$materialSelect.trigger("open"));
                e.$addOptionBtn[c && e.isEditable && !d ? "show" : "hide"](), 0 !== u.filter(function(e, t) {
                    return $(t).is(":visible") && !$(t).parent().hasClass("disabled")
                }).length ? (e.$toggleAll.show(), e.$materialOptionsList.find(e.$noSearchResultsInfo).remove(), e._updateToggleAllOption()) : (e.$toggleAll.hide(), e.$materialOptionsList.append(e.$noSearchResultsInfo)), e.dropdown.updatePosition(e.$materialSelect, e.$materialOptionsList)
            })
        }
    }, {
        key: "bindHtmlClick",
        value: function() {
            var e = this;
            $("html").on("click", function(t) {
                $(t.target).closest("#select-options-".concat(e.properties.id)).length || $(t.target).hasClass("mdb-select") || !$("#select-options-".concat(e.properties.id)).hasClass("active") || (e.$materialSelect.trigger("close"), e.$materialSelect.val() || e.options.placeholder || e.$mainLabel.removeClass("active")), e.isSearchable && null !== e.$searchInput && e.$materialOptionsList.hasClass("active") && e.$materialOptionsList.find(".search-wrap input.search").focus()
            })
        }
    }, {
        key: "bindMobileDevicesMousedown",
        value: function() {
            $("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", function(t) {
                e.isMobileDevice && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault()
            })
        }
    }, {
        key: "bindSaveBtnClick",
        value: function() {
            var e = this;
            this.$btnSave.on("click", function() {
                e.$materialSelect.trigger("close")
            })
        }
    }, {
        key: "_isToggleAllPresent",
        value: function() {
            return this.$materialOptionsList.find(this.$toggleAll).length
        }
    }, {
        key: "_updateToggleAllOption",
        value: function() {
            var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),
                t = e.filter(":checked"),
                n = this.$toggleAll.find("[type=checkbox]").is(":checked");
            t.length !== e.length || n ? t.length < e.length && n && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
        }
    }, {
        key: "_handleTabKey",
        value: function(e) {
            this._handleEscKey(e)
        }
    }, {
        key: "_handleEnterWithShiftKey",
        value: function(e) {
            this.isMultiple ? this.$toggleAll.trigger("click") : this._handleEnterKey(e)
        }
    }, {
        key: "_handleEnterKey",
        value: function(e) {
            this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this.isMultiple || e.trigger("close")
        }
    }, {
        key: "_handleArrowUpDownKey",
        value: function(e) {
            var t = this,
                n = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all"),
                i = n.first(),
                r = n.last(),
                o = this.$materialOptionsList.find("li.selected").length > 0,
                a = null,
                s = null;
            if (e === this.keyCodes.arrowUp) {
                var l = o ? this.$materialOptionsList.find("li.selected").first() : r,
                    c = l.prev("li:visible:not(.disabled, .select-toggle-all)");
                s = c, n.each(function(e, i) {
                    $(i).hasClass(t.options.keyboardActiveClass) && (c = n.eq(e - 1), s = n.eq(e))
                }), a = l.is(i) || !o ? l : c
            } else {
                var u = o ? this.$materialOptionsList.find("li.selected").first() : i,
                    d = u.next("li:visible:not(.disabled, .select-toggle-all)");
                s = d, n.each(function(e, i) {
                    $(i).hasClass(t.options.keyboardActiveClass) && (d = n.eq(e + 1), s = n.eq(e))
                }), a = u.is(r) || !o ? u : d
            }
            this._selectSingleOption(a), this._removeKeyboardActiveClass(), a.find("input").is(":checked") || a.removeClass(this.options.keyboardActiveClass), s.hasClass("selected") || s.find("input").is(":checked") || !this.isMultiple || s.removeClass("active", this.options.keyboardActiveClass), a.addClass(this.options.keyboardActiveClass), a.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + a.position().top)
        }
    }, {
        key: "_handleEscKey",
        value: function(e) {
            this._removeKeyboardActiveClass(), e.trigger("close")
        }
    }, {
        key: "_handleLetterKey",
        value: function(e) {
            var t = this;
            if (this._removeKeyboardActiveClass(), this.isSearchable) {
                var n = e.which > 46 && e.which < 91,
                    i = e.which > 93 && e.which < 106,
                    r = 8 === e.which;
                (n || i) && this.$searchInput.find("input").val(e.key).focus(), r && this.$searchInput.find("input").val("").focus()
            } else {
                var o = "",
                    a = String.fromCharCode(e.which).toLowerCase(),
                    s = Object.keys(this.keyCodes).map(function(e) {
                        return t.keyCodes[e]
                    });
                if (a && -1 === s.indexOf(e.which)) {
                    o += a;
                    var l = this.$materialOptionsList.find("li").filter(function(e, t) {
                        return $(t).text().toLowerCase().includes(o)
                    }).first();
                    this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), l.addClass("active"), this._selectSingleOption(l)
                }
            }
        }
    }, {
        key: "_removeKeyboardActiveClass",
        value: function() {
            this.$materialOptionsList.find("li").removeClass(this.options.keyboardActiveClass)
        }
    }, {
        key: "_triggerChangeOnNativeSelect",
        value: function() {
            var e = new KeyboardEvent("change", {
                bubbles: !0,
                cancelable: !0
            });
            this.$nativeSelect.get(0).dispatchEvent(e)
        }
    }, {
        key: "_selectSingleOption",
        value: function(e) {
            this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
        }
    }, {
        key: "_updateDropdownScrollTop",
        value: function() {
            var e = this.$materialOptionsList.find("li.active").first();
            e.length ? this.$materialOptionsList.scrollTo(e) : this.$materialOptionsList.scrollTop(0)
        }
    }, {
        key: "_selectOption",
        value: function(e) {
            $(e).addClass("selected")
        }
    }, {
        key: "_copyOptions",
        value: function(e) {
            return $.extend({}, e)
        }
    }, {
        key: "_jQueryFallback",
        value: function() {
            for (var e = null, t = 0; t < arguments.length; t++)
                if ((e = t < 0 || arguments.length <= t ? void 0 : arguments[t]).length) return e;
            return e
        }
    }, {
        key: "isMultiple",
        get: function() {
            return this.properties.isMultiple
        }
    }, {
        key: "isSearchable",
        get: function() {
            return this.properties.isSearchable
        }
    }, {
        key: "isRequired",
        get: function() {
            return this.properties.isRequired
        }
    }, {
        key: "isEditable",
        get: function() {
            return this.properties.isEditable
        }
    }, {
        key: "isDisabled",
        get: function() {
            return this.$nativeSelect.is(":disabled")
        }
    }], [{
        key: "isMobileDevice",
        get: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }
    }]), e
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
jQuery(function(e) {
        var t, n = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, t), this.options = {
                    destroy: this.fallback().or(n.destroy).or(!1).value(),
                    validate: this.fallback().or(e.attr("data-validate")).or(n.validate).or(!1).value(),
                    selectId: this.fallback().or(e.attr("data-native-id")).or(n.selectId).or(null).value(),
                    defaultMaterialInput: this.fallback().or(e.attr("data-default-material-input")).or(n.defaultMaterialInput).or(!1).value(),
                    fasClasses: this.fallback().or(e.attr("data-fas-classes")).or(n.fasClasses).or("").value(),
                    farClasses: this.fallback().or(e.attr("data-far-classes")).or(n.farClasses).or("").value(),
                    fabClasses: this.fallback().or(e.attr("data-fab-classes")).or(n.fabClasses).or("").value(),
                    copyClassesOption: this.fallback().or(e.attr("data-copy-classes-option")).or(n.copyClassesOption).or(!1).value(),
                    labels: {
                        selectAll: this.fallback().or(e.attr("data-label-select-all")).or((n.labels || {}).selectAll).or("Select all").value(),
                        optionsSelected: this.fallback().or(e.attr("data-label-options-selected")).or((n.labels || {}).optionsSelected).or("options selected").value(),
                        validFeedback: this.fallback().or(e.attr("data-label-valid-feedback")).or((n.labels || {}).validFeedback).or("Ok").value(),
                        invalidFeedback: this.fallback().or(e.attr("data-label-invalid-feedback")).or((n.labels || {}).invalidFeedback).or("Incorrect value").value(),
                        noSearchResults: this.fallback().or(e.attr("data-label-no-search-results")).or((n.labels || {}).noSearchResults).or("No results").value()
                    },
                    keyboardActiveClass: this.fallback().or(e.attr("data-keyboard-active-class")).or(n.keyboardActiveClass).or("heavy-rain-gradient").value(),
                    placeholder: this.fallback().or(e.attr("data-placeholder")).or(n.placeholder).or(null).value(),
                    visibleOptions: this.fallback().or(e.attr("data-visible-options")).or(n.visibleOptions).or(5).value(),
                    maxSelectedOptions: this.fallback().or(e.attr("data-max-selected-options")).or(n.maxSelectedOptions).or(5).value()
                }, this.uuid = e.attr("id") || this.options.selectId || this._randomUUID(), this.view = new MaterialSelectView(e, {
                    options: this.options,
                    properties: {
                        id: this.uuid
                    }
                }), this.selectedOptionsIndexes = [], t.mutationObservers = []
            }
            return _createClass(t, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.options.destroy ? this.view.destroy() : (this.isInitialized && this.view.destroy(), this.view.render(), this.view.selectPreselectedOptions(function(t) {
                        return e._toggleSelectedValue(t)
                    }), this.bindEvents())
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var e = this;
                    this.bindMutationObserverChange(), this.view.bindMaterialSelectFocus(), this.view.bindMaterialSelectClick(), this.view.bindMaterialSelectBlur(), this.view.bindMaterialSelectKeydown(), this.view.bindMaterialSelectDropdownToggle(), this.view.bindToggleAllClick(function(t) {
                        return e._toggleSelectedValue(t)
                    }), this.view.bindMaterialOptionMousedown(), this.view.bindMaterialOptionClick(function(t) {
                        return e._toggleSelectedValue(t)
                    }), !this.view.isMultiple && this.view.isSearchable && this.view.bindSingleMaterialOptionClick(), this.view.isSearchable && this.view.bindSearchInputKeyup(), this.view.bindHtmlClick(), this.view.bindMobileDevicesMousedown(), this.view.bindSaveBtnClick()
                }
            }, {
                key: "bindMutationObserverChange",
                value: function() {
                    var e = new MutationObserver(this._onMutationObserverChange.bind(this));
                    e.observe(this.view.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), e.customId = this.uuid, e.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(e)
                }
            }, {
                key: "_onMutationObserverChange",
                value: function(n) {
                    n.forEach(function(n) {
                        var i = e(n.target).closest("select");
                        !0 !== i.data("stop-refresh") && ("childList" === n.type || "attributes" === n.type && e(n.target).is("option")) && (t.clearMutationObservers(), i.materialSelect({
                            destroy: !0
                        }), i.materialSelect())
                    })
                }
            }, {
                key: "_toggleSelectedValue",
                value: function(e) {
                    var t = this.selectedOptionsIndexes.indexOf(e),
                        n = -1 !== t;
                    return n ? this.selectedOptionsIndexes.splice(t, 1) : this.selectedOptionsIndexes.push(e), this.view.$nativeSelect.find("option").eq(e).prop("selected", !n), this._setValueToMaterialSelect(), !n
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function() {
                    var e = this,
                        t = "",
                        n = this.selectedOptionsIndexes.length;
                    this.selectedOptionsIndexes.forEach(function(n) {
                        return t += ", ".concat(e.view.$nativeSelect.find("option").eq(n).text().replace(/  +/g, " ").trim())
                    }), 0 === (t = this.options.maxSelectedOptions >= 0 && n > this.options.maxSelectedOptions ? "".concat(n, " ").concat(this.options.labels.optionsSelected) : t.substring(2)).length && (t = this.view.$nativeSelect.find("option:disabled").eq(0).text()), this.view.$nativeSelect.siblings("".concat(this.options.defaultMaterialInput ? "input.multi-bs-select" : "input.select-dropdown")).val(t)
                }
            }, {
                key: "_randomUUID",
                value: function() {
                    var e = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var n = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                    })
                }
            }, {
                key: "fallback",
                value: function() {
                    return {
                        _value: void 0,
                        or: function(e) {
                            return void 0 !== e && void 0 === this._value && (this._value = e), this
                        },
                        value: function() {
                            return this._value
                        }
                    }
                }
            }, {
                key: "isInitialized",
                get: function() {
                    return Boolean(this.view.$nativeSelect.data("select-id")) && this.view.$nativeSelect.hasClass("initialized")
                }
            }], [{
                key: "clearMutationObservers",
                value: function() {
                    t.mutationObservers.forEach(function(e) {
                        e.disconnect(), e.customStatus = "stopped"
                    })
                }
            }]), t
        }();
        e.fn.materialSelect = function(t) {
            e(this).not(".browser-default").not(".custom-select").each(function() {
                new n(e(this), t).init()
            })
        }, t = e.fn.val, e.fn.val = function(e) {
            if (!arguments.length) return t.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
                n.clearMutationObservers(), this.materialSelect({
                    destroy: !0
                });
                var i = t.call(this, e);
                return this.materialSelect(), i
            }
            return t.call(this, e)
        }
    }),
    function(e) {
        var t = 0,
            n = function() {
                function n(i, r) {
                    _classCallCheck(this, n), this.defaults = {
                        topSpacing: t,
                        zIndex: !1,
                        stopper: "#footer",
                        stickyClass: !1,
                        startScrolling: "top",
                        minWidth: !1
                    }, this.$element = i, this.options = this.assignOptions(r), this.$window = e(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.$placeholder = e('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
                }
                return _createClass(n, [{
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
                    }
                }, {
                    key: "hasZIndex",
                    value: function() {
                        return "number" == typeof this.options.zIndex
                    }
                }, {
                    key: "hasStopper",
                    value: function() {
                        return e(this.options.stopper).length || "number" == typeof this.options.stopper
                    }
                }, {
                    key: "isScreenHeightEnough",
                    value: function() {
                        return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
                    }
                }, {
                    key: "setStopperPosition",
                    value: function() {
                        "string" == typeof this.options.stopper ? this.stopPoint = e(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
                    }
                }, {
                    key: "setPushPoint",
                    value: function() {
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.$element.offset().top - this.options.topSpacing : this.$pushPoint = this.$element.offset().top + this.$element.outerHeight(!0) - this.$window.height()
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
                    }
                }, {
                    key: "appendPlaceholder",
                    value: function() {
                        this.$element.after(this.$placeholder), this.$placeholder.css({
                            width: this.elementWidth,
                            height: this.elementHeight
                        })
                    }
                }, {
                    key: "stickyStart",
                    value: function() {
                        this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
                        var e = this.$element.get(0).scrollHeight;
                        this.$element.get(0).style.overflow = "", this.$element.css({
                            position: "fixed",
                            width: this.elementWidth,
                            height: e
                        }), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({
                            top: this.options.topSpacing
                        }) : this.$element.css({
                            bottom: 0,
                            top: ""
                        }), this.hasZIndex() && this.$element.css({
                            zIndex: this.options.zIndex
                        })
                    }
                }, {
                    key: "stickyEnd",
                    value: function() {
                        this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
                            position: "static",
                            top: t
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.stopPoint < e(this.$element).offset().top + this.$element.outerHeight(!0) && this.$element.css({
                            position: "absolute",
                            bottom: 0,
                            top: ""
                        })
                    }
                }]), n
            }();
        e.fn.sticky = function(t) {
            return this.each(function() {
                var i = e(this);
                e(window).on("load", function() {
                    new n(i, t).init()
                })
            })
        }
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return getComputedStyle(e)
        }

        function t(e, t) {
            for (var n in t) {
                var i = t[n];
                "number" == typeof i && (i += "px"), e.style[n] = i
            }
            return e
        }

        function n(e) {
            var t = document.createElement("div");
            return t.className = e, t
        }

        function i(e, t) {
            if (!g) throw new Error("No element matching method supported");
            return g.call(e, t)
        }

        function r(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }

        function o(e, t) {
            return Array.prototype.filter.call(e.children, function(e) {
                return i(e, t)
            })
        }

        function a(e, t) {
            var n = e.element.classList,
                i = m.state.scrolling(t);
            n.contains(i) ? clearTimeout(v[t]) : n.add(i)
        }

        function s(e, t) {
            v[t] = setTimeout(function() {
                return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
            }, e.settings.scrollingThreshold)
        }

        function l(e, t) {
            a(e, t), s(e, t)
        }

        function c(e) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, void 0), t
        }

        function u(e) {
            return parseInt(e, 10) || 0
        }

        function d(e) {
            return i(e, "input,[contenteditable]") || i(e, "select,[contenteditable]") || i(e, "textarea,[contenteditable]") || i(e, "button,[contenteditable]")
        }

        function h(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        function f(e, n) {
            var i = {
                    width: n.railXWidth
                },
                r = Math.floor(e.scrollTop);
            n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - r : i.top = n.scrollbarXTop + r, t(n.scrollbarXRail, i);
            var o = {
                top: r,
                height: n.railYHeight
            };
            n.isScrollbarYUsingRight ? n.isRtl ? o.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : o.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? o.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : o.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, o), t(n.scrollbarX, {
                left: n.scrollbarXLeft,
                width: n.scrollbarXWidth - n.railBorderXWidth
            }), t(n.scrollbarY, {
                top: n.scrollbarYTop,
                height: n.scrollbarYHeight - n.railBorderYWidth
            })
        }

        function p(e, t) {
            function n(t) {
                g[h] = v + b * (t[l] - y), a(e, f), x(e), t.stopPropagation(), t.preventDefault()
            }

            function i() {
                s(e, f), e[p].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
            }
            var r = t[0],
                o = t[1],
                l = t[2],
                c = t[3],
                u = t[4],
                d = t[5],
                h = t[6],
                f = t[7],
                p = t[8],
                g = e.element,
                v = null,
                y = null,
                b = null;
            e.event.bind(e[u], "mousedown", function(t) {
                v = g[h], y = t[l], b = (e[o] - e[r]) / (e[c] - e[d]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), e[p].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
            })
        }
        var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            m = {
                main: "ps",
                element: {
                    thumb: function(e) {
                        return "ps__thumb-" + e
                    },
                    rail: function(e) {
                        return "ps__rail-" + e
                    },
                    consuming: "ps__child--consume"
                },
                state: {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function(e) {
                        return "ps--active-" + e
                    },
                    scrolling: function(e) {
                        return "ps--scrolling-" + e
                    }
                }
            },
            v = {
                x: null,
                y: null
            },
            y = function(e) {
                this.element = e, this.handlers = {}
            },
            b = {
                isEmpty: {
                    configurable: !0
                }
            };
        y.prototype.bind = function(e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
        }, y.prototype.unbind = function(e, t) {
            var n = this;
            this.handlers[e] = this.handlers[e].filter(function(i) {
                return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
            })
        }, y.prototype.unbindAll = function() {
            for (var e in this.handlers) this.unbind(e)
        }, b.isEmpty.get = function() {
            var e = this;
            return Object.keys(this.handlers).every(function(t) {
                return 0 === e.handlers[t].length
            })
        }, Object.defineProperties(y.prototype, b);
        var w = function() {
            this.eventElements = []
        };
        w.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return t || (t = new y(e), this.eventElements.push(t)), t
        }, w.prototype.bind = function(e, t, n) {
            this.eventElement(e).bind(t, n)
        }, w.prototype.unbind = function(e, t, n) {
            var i = this.eventElement(e);
            i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
        }, w.prototype.unbindAll = function() {
            this.eventElements.forEach(function(e) {
                return e.unbindAll()
            }), this.eventElements = []
        }, w.prototype.once = function(e, t, n) {
            var i = this.eventElement(e),
                r = function(e) {
                    i.unbind(t, r), n(e)
                };
            i.bind(t, r)
        };
        var _ = function(e, t, n, i, r) {
                var o;
                if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== t) throw new Error("A proper axis should be provided");
                    o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                }! function(e, t, n, i, r) {
                    var o = n[0],
                        a = n[1],
                        s = n[2],
                        u = n[3],
                        d = n[4],
                        h = n[5];
                    void 0 === i && (i = !0), void 0 === r && (r = !1);
                    var f = e.element;
                    e.reach[u] = null, f[s] < 1 && (e.reach[u] = "start"), f[s] > e[o] - e[a] - 1 && (e.reach[u] = "end"), t && (f.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? f.dispatchEvent(c("ps-scroll-" + d)) : t > 0 && f.dispatchEvent(c("ps-scroll-" + h)), i && l(e, u)), e.reach[u] && (t || r) && f.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
                }(e, n, o, i, r)
            },
            C = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            },
            x = function(e) {
                var t = e.element,
                    n = Math.floor(t.scrollTop);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (o(t, m.element.rail("x")).forEach(function(e) {
                    return r(e)
                }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (o(t, m.element.rail("y")).forEach(function(e) {
                    return r(e)
                }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = h(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = h(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), f(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
            },
            S = {
                "click-rail": function(e) {
                    e.event.bind(e.scrollbarY, "mousedown", function(e) {
                        return e.stopPropagation()
                    }), e.event.bind(e.scrollbarYRail, "mousedown", function(t) {
                        var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                        e.element.scrollTop += n * e.containerHeight, x(e), t.stopPropagation()
                    }), e.event.bind(e.scrollbarX, "mousedown", function(e) {
                        return e.stopPropagation()
                    }), e.event.bind(e.scrollbarXRail, "mousedown", function(t) {
                        var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                        e.element.scrollLeft += n * e.containerWidth, x(e), t.stopPropagation()
                    })
                },
                "drag-thumb": function(e) {
                    p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                },
                keyboard: function(e) {
                    var t = e.element,
                        n = function() {
                            return i(t, ":hover")
                        },
                        r = function() {
                            return i(e.scrollbarX, ":focus") || i(e.scrollbarY, ":focus")
                        };
                    e.event.bind(e.ownerDocument, "keydown", function(i) {
                        if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (n() || r())) {
                            var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (o) {
                                if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                                else
                                    for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                                if (d(o)) return
                            }
                            var a = 0,
                                s = 0;
                            switch (i.which) {
                                case 37:
                                    a = i.metaKey ? -e.contentWidth : i.altKey ? -e.containerWidth : -30;
                                    break;
                                case 38:
                                    s = i.metaKey ? e.contentHeight : i.altKey ? e.containerHeight : 30;
                                    break;
                                case 39:
                                    a = i.metaKey ? e.contentWidth : i.altKey ? e.containerWidth : 30;
                                    break;
                                case 40:
                                    s = i.metaKey ? -e.contentHeight : i.altKey ? -e.containerHeight : -30;
                                    break;
                                case 32:
                                    s = i.shiftKey ? e.containerHeight : -e.containerHeight;
                                    break;
                                case 33:
                                    s = e.containerHeight;
                                    break;
                                case 34:
                                    s = -e.containerHeight;
                                    break;
                                case 36:
                                    s = e.contentHeight;
                                    break;
                                case 35:
                                    s = -e.contentHeight;
                                    break;
                                default:
                                    return
                            }
                            e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += a, x(e), function(n, i) {
                                var r = Math.floor(t.scrollTop);
                                if (0 === n) {
                                    if (!e.scrollbarYActive) return !1;
                                    if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                                }
                                var o = t.scrollLeft;
                                if (0 === i) {
                                    if (!e.scrollbarXActive) return !1;
                                    if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                                }
                                return !0
                            }(a, s) && i.preventDefault())
                        }
                    })
                },
                wheel: function(t) {
                    function n(t, n, i) {
                        if (!C.isWebKit && r.querySelector("select:focus")) return !0;
                        if (!r.contains(t)) return !1;
                        for (var o = t; o && o !== r;) {
                            if (o.classList.contains(m.element.consuming)) return !0;
                            var a = e(o);
                            if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                var s = o.scrollHeight - o.clientHeight;
                                if (s > 0 && !(0 === o.scrollTop && i > 0 || o.scrollTop === s && i < 0)) return !0;
                                var l = o.scrollWidth - o.clientWidth;
                                if (l > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === l && n > 0)) return !0
                            }
                            o = o.parentNode
                        }
                        return !1
                    }

                    function i(e) {
                        var i = function(e) {
                                var t = e.deltaX,
                                    n = -1 * e.deltaY;
                                return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                            }(e),
                            o = i[0],
                            a = i[1];
                        if (!n(e.target, o, a)) {
                            var s = !1;
                            t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a ? r.scrollTop -= a * t.settings.wheelSpeed : r.scrollTop += o * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? r.scrollLeft += o * t.settings.wheelSpeed : r.scrollLeft -= a * t.settings.wheelSpeed, s = !0) : (r.scrollTop -= a * t.settings.wheelSpeed, r.scrollLeft += o * t.settings.wheelSpeed), x(t), (s = s || function(e, n) {
                                var i = Math.floor(r.scrollTop),
                                    o = 0 === r.scrollTop,
                                    a = i + r.offsetHeight === r.scrollHeight,
                                    s = 0 === r.scrollLeft,
                                    l = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                                return !(Math.abs(n) > Math.abs(e) ? o || a : s || l) || !t.settings.wheelPropagation
                            }(o, a)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                        }
                    }
                    var r = t.element;
                    void 0 !== window.onwheel ? t.event.bind(r, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(r, "mousewheel", i)
                },
                touch: function(t) {
                    function n(e, n) {
                        var i = Math.floor(u.scrollTop),
                            r = u.scrollLeft,
                            o = Math.abs(e),
                            a = Math.abs(n);
                        if (a > o) {
                            if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && 0 === i) return 0 === window.scrollY && n > 0 && C.isChrome
                        } else if (o > a && (e < 0 && r === t.contentWidth - t.containerWidth || e > 0 && 0 === r)) return !0;
                        return !0
                    }

                    function i(e, n) {
                        u.scrollTop -= n, u.scrollLeft -= e, x(t)
                    }

                    function r(e) {
                        return e.targetTouches ? e.targetTouches[0] : e
                    }

                    function o(e) {
                        return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                    }

                    function a(e) {
                        if (o(e)) {
                            var t = r(e);
                            d.pageX = t.pageX, d.pageY = t.pageY, h = (new Date).getTime(), null !== p && clearInterval(p)
                        }
                    }

                    function s(t, n, i) {
                        if (!u.contains(t)) return !1;
                        for (var r = t; r && r !== u;) {
                            if (r.classList.contains(m.element.consuming)) return !0;
                            var o = e(r);
                            if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                                var a = r.scrollHeight - r.clientHeight;
                                if (a > 0 && !(0 === r.scrollTop && i > 0 || r.scrollTop === a && i < 0)) return !0;
                                var s = r.scrollLeft - r.clientWidth;
                                if (s > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === s && n > 0)) return !0
                            }
                            r = r.parentNode
                        }
                        return !1
                    }

                    function l(e) {
                        if (o(e)) {
                            var t = r(e),
                                a = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                },
                                l = a.pageX - d.pageX,
                                c = a.pageY - d.pageY;
                            if (s(e.target, l, c)) return;
                            i(l, c), d = a;
                            var u = (new Date).getTime(),
                                p = u - h;
                            p > 0 && (f.x = l / p, f.y = c / p, h = u), n(l, c) && e.preventDefault()
                        }
                    }

                    function c() {
                        t.settings.swipeEasing && (clearInterval(p), p = setInterval(function() {
                            t.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (i(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p)
                        }, 10))
                    }
                    if (C.supportsTouch || C.supportsIePointer) {
                        var u = t.element,
                            d = {},
                            h = 0,
                            f = {},
                            p = null;
                        C.supportsTouch ? (t.event.bind(u, "touchstart", a), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : C.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", a), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", a), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
                    }
                }
            },
            T = function(i, r) {
                var o = this;
                if (void 0 === r && (r = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                for (var a in this.element = i, i.classList.add(m.main), this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1
                    }, r) o.settings[a] = r[a];
                this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                var s = function() {
                        return i.classList.add(m.state.focus)
                    },
                    l = function() {
                        return i.classList.remove(m.state.focus)
                    };
                this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = function() {
                    var e, t = i.scrollLeft;
                    return i.scrollLeft = -1, e = i.scrollLeft < 0, i.scrollLeft = t, e
                }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new w, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                var c = e(this.scrollbarXRail);
                this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {
                    display: "block"
                }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {
                    display: ""
                }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                var d = e(this.scrollbarYRail);
                this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                    var n = e(t);
                    return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
                }(this.scrollbarY) : null, this.railBorderYWidth = u(d.borderTopWidth) + u(d.borderBottomWidth), t(this.scrollbarYRail, {
                    display: "block"
                }), this.railYMarginHeight = u(d.marginTop) + u(d.marginBottom), t(this.scrollbarYRail, {
                    display: ""
                }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                    x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                }, this.isAlive = !0, this.settings.handlers.forEach(function(e) {
                    return S[e](o)
                }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function(e) {
                    return o.onScroll(e)
                }), x(this)
            };
        return T.prototype.update = function() {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
                display: "block"
            }), t(this.scrollbarYRail, {
                display: "block"
            }), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
                display: "none"
            }), t(this.scrollbarYRail, {
                display: "none"
            }), x(this), _(this, "top", 0, !1, !0), _(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
                display: ""
            }), t(this.scrollbarYRail, {
                display: ""
            }))
        }, T.prototype.onScroll = function(e) {
            this.isAlive && (x(this), _(this, "top", this.element.scrollTop - this.lastScrollTop), _(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
        }, T.prototype.destroy = function() {
            this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
        }, T.prototype.removePsClasses = function() {
            this.element.className = this.element.className.split(" ").filter(function(e) {
                return !e.match(/^ps([-_].+|)$/)
            }).join(" ")
        }, T
    }),
    function(e) {
        var t = {},
            n = "",
            i = "",
            r = "#ced4da",
            o = "1px solid #4285f4",
            a = "1px solid #ced4da",
            s = "0 1px 0 0 #4285f4",
            l = "",
            c = -1,
            u = -45,
            d = function() {
                function d(c, u) {
                    _classCallCheck(this, d), this.defaults = {
                        data: t,
                        dataColor: n,
                        closeColor: i,
                        closeBlurColor: r,
                        inputFocus: o,
                        inputBlur: a,
                        inputFocusShadow: s,
                        inputBlurShadow: l
                    }, this.$input = c, this.options = this.assignOptions(u), this.$clearButton = e(".mdb-autocomplete-clear"), this.$autocompleteWrap = e('<ul class="mdb-autocomplete-wrap"></ul>'), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function() {
                        this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete()
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "setData",
                    value: function() {
                        Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                    }
                }, {
                    key: "inputFocus",
                    value: function() {
                        var e = this;
                        this.$input.on("focus", function() {
                            e.$input.css("border-bottom", e.options.inputFocus), e.$input.css("box-shadow", e.options.inputFocusShadow)
                        })
                    }
                }, {
                    key: "inputBlur",
                    value: function() {
                        var e = this;
                        this.$input.on("blur", function() {
                            e.$input.css("border-bottom", e.options.inputBlur), e.$input.css("box-shadow", e.options.inputBlurShadow)
                        })
                    }
                }, {
                    key: "inputKeyupData",
                    value: function() {
                        var t = this;
                        this.$input.on("keyup", function(n) {
                            if (13 === n.which) return t.options.data.includes(t.$input.val()) || t.options.data.push(t.$input.val()), t.$autocompleteWrap.find(".selected").trigger("click"), t.$autocompleteWrap.empty(), t.inputBlur(), u = -45, c = -1;
                            var i = t.$input.val();
                            if (t.$autocompleteWrap.empty(), i.length) {
                                for (var r in t.options.data)
                                    if (-1 !== t.options.data[r].toLowerCase().indexOf(i.toLowerCase())) {
                                        var o = e("<li>".concat(t.options.data[r], "</li>"));
                                        t.$autocompleteWrap.append(o)
                                    }
                                var a = t.$autocompleteWrap,
                                    s = t.$autocompleteWrap.find("li"),
                                    l = s.eq(c).outerHeight(),
                                    d = s.eq(c - 1).outerHeight();
                                if (40 === n.which) {
                                    if (c > s.length - 2) return c = -1, s.scrollTop(0), void(u = -45);
                                    c++, u += l, a.scrollTop(u), s.eq(c).addClass("selected")
                                } else 38 === n.which && (c < 1 ? (c = s.length, a.scrollTop(a.prop("scrollHeight")), u = a.prop("scrollHeight") - l) : c--, u -= d, a.scrollTop(u), s.eq(c).addClass("selected"));
                                0 === i.length ? t.$clearButton.css("visibility", "hidden") : t.$clearButton.css("visibility", "visible"), t.$autocompleteWrap.children().css("color", t.options.dataColor)
                            } else t.$clearButton.css("visibility", "hidden")
                        })
                    }
                }, {
                    key: "inputLiClick",
                    value: function() {
                        var t = this;
                        this.$autocompleteWrap.on("click", "li", function(n) {
                            n.preventDefault(), t.$input.val(e(n.target).text()), t.$autocompleteWrap.empty()
                        })
                    }
                }, {
                    key: "clearAutocomplete",
                    value: function() {
                        var t = this;
                        this.$clearButton.on("click", function(n) {
                            c = -1, u = -45, n.preventDefault();
                            var i = e(n.currentTarget);
                            i.parent().find(".mdb-autocomplete").val(""), i.css("visibility", "hidden"), t.$autocompleteWrap.empty(), i.parent().find("label").removeClass("active")
                        })
                    }
                }, {
                    key: "changeSVGcolors",
                    value: function() {
                        var t = this;
                        this.$input.hasClass("mdb-autocomplete") && (this.$input.on("click keyup", function(n) {
                            n.preventDefault(), e(n.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", t.options.closeColor)
                        }), this.$input.on("blur", function(n) {
                            n.preventDefault(), e(n.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", t.options.closeBlurColor)
                        }))
                    }
                }]), d
            }();
        e.fn.mdbAutocomplete = function(t) {
            return this.each(function() {
                new d(e(this), t)
            })
        }
    }(jQuery),
    function(e) {
        e("body").on("shown.bs.modal", ".modal", function() {
            e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
        }), e("body").on("hidden.bs.modal", ".modal", function() {
            e("body").removeClass("scrollable")
        })
    }(jQuery),
    function(e) {
        e.fn.mdbTreeview = function() {
            var t = e(this);
            if (t.hasClass("treeview")) {
                var n = t.find(".rotate");
                e.each(n, function(t) {
                    e(n[t]).off("click"), e(n[t]).on("click", function() {
                        var t = e(this);
                        t.siblings(".nested").toggleClass("active"), t.toggleClass("down")
                    })
                })
            }
            if (t.hasClass("treeview-animated")) {
                var i = t.find(".treeview-animated-element"),
                    r = t.find(".closed");
                t.find(".nested").hide(), r.off("click"), r.on("click", function() {
                    var t = e(this),
                        n = t.siblings(".nested"),
                        i = t.children(".fa-angle-right");
                    return t.toggleClass("open"), i.toggleClass("down"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown(), !1
                }), i.off("click"), i.on("click", function() {
                    var t = e(this);
                    t.hasClass("opened") ? t.removeClass("opened") : (i.removeClass("opened"), t.addClass("opened"))
                })
            }
            if (t.hasClass("treeview-colorful")) {
                var o = t.find(".treeview-colorful-element"),
                    a = t.find(".treeview-colorful-items-header");
                t.find(".nested").hide(), a.off("click"), a.on("click", function() {
                    var t = e(this),
                        n = t.siblings(".nested"),
                        i = t.children(".fa-plus-circle"),
                        r = t.children(".fa-minus-circle");
                    t.toggleClass("open"), i.removeClass("fa-plus-circle"), i.addClass("fa-minus-circle"), r.removeClass("fa-minus-circle"), r.addClass("fa-plus-circle"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown()
                }), o.off("click"), o.on("click", function() {
                    var t = e(this);
                    t.hasClass("opened") ? o.removeClass("opened") : (o.removeClass("opened"), t.addClass("opened"))
                })
            }
        }
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).bsCustomFileInput = t()
    }(this, function() {
        "use strict";
        var e = {
                CUSTOMFILE: '.custom-file input[type="file"]',
                CUSTOMFILELABEL: ".custom-file-label",
                FORM: "form",
                INPUT: "input"
            },
            t = function(t) {
                var n = "",
                    i = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                return i && (n = i.innerHTML), n
            },
            n = function(e) {
                if (e.childNodes.length > 0)
                    for (var t = [].slice.call(e.childNodes), n = 0; n < t.length; n++) {
                        var i = t[n];
                        if (3 !== i.nodeType) return i
                    }
                return e
            },
            i = function(t) {
                var i = t.bsCustomFileInput.defaultText,
                    r = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                r && (n(r).innerHTML = i)
            },
            r = !!window.File,
            o = function(e) {
                if (e.hasAttribute("multiple") && r) return [].slice.call(e.files).map(function(e) {
                    return e.name
                }).join(", ");
                if (-1 !== e.value.indexOf("fakepath")) {
                    var t = e.value.split("\\");
                    return t[t.length - 1]
                }
                return e.value
            };

        function a() {
            var t = this.parentNode.querySelector(e.CUSTOMFILELABEL);
            if (t) {
                var r = n(t),
                    a = o(this);
                a.length ? r.innerHTML = a : i(this)
            }
        }

        function s() {
            for (var t = [].slice.call(this.querySelectorAll(e.INPUT)).filter(function(e) {
                    return !!e.bsCustomFileInput
                }), n = 0, r = t.length; n < r; n++) i(t[n])
        }
        var l = "reset",
            c = "change";
        return {
            init: function(n, i) {
                void 0 === n && (n = e.CUSTOMFILE), void 0 === i && (i = e.FORM);
                for (var r = [].slice.call(document.querySelectorAll(n)), o = [].slice.call(document.querySelectorAll(i)), u = 0, d = r.length; u < d; u++) {
                    var h = r[u];
                    Object.defineProperty(h, "bsCustomFileInput", {
                        value: {
                            defaultText: t(h)
                        },
                        writable: !0
                    }), a.call(h), h.addEventListener(c, a)
                }
                for (var f = 0, p = o.length; f < p; f++) o[f].addEventListener(l, s), Object.defineProperty(o[f], "bsCustomFileInput", {
                    value: !0,
                    writable: !0
                })
            },
            destroy: function() {
                for (var t = [].slice.call(document.querySelectorAll(e.FORM)).filter(function(e) {
                        return !!e.bsCustomFileInput
                    }), n = [].slice.call(document.querySelectorAll(e.INPUT)).filter(function(e) {
                        return !!e.bsCustomFileInput
                    }), r = 0, o = n.length; r < o; r++) {
                    var u = n[r];
                    i(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, a)
                }
                for (var d = 0, h = t.length; d < h; d++) t[d].removeEventListener(l, s), t[d].bsCustomFileInput = void 0
            }
        }
    }), document.addEventListener("DOMContentLoaded", function() {
        bsCustomFileInput.init()
    });
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-([\w-]+)\b/i,
            t = 0,
            n = _self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(e) {
                        return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function(e, t) {
                        var i = n.util.type(e);
                        switch (t = t || {}, i) {
                            case "Object":
                                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                var r = {};
                                for (var o in t[n.util.objId(e)] = r, e) e.hasOwnProperty(o) && (r[o] = n.util.clone(e[o], t));
                                return r;
                            case "Array":
                                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                r = [];
                                return t[n.util.objId(e)] = r, e.forEach(function(e, i) {
                                    r[i] = n.util.clone(e, t)
                                }), r
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var i = n.util.clone(n.languages[e]);
                        for (var r in t) i[r] = t[r];
                        return i
                    },
                    insertBefore: function(e, t, i, r) {
                        var o = (r = r || n.languages)[e];
                        if (2 == arguments.length) {
                            for (var a in i = arguments[1]) i.hasOwnProperty(a) && (o[a] = i[a]);
                            return o
                        }
                        var s = {};
                        for (var l in o)
                            if (o.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                s[l] = o[l]
                            }
                        return n.languages.DFS(n.languages, function(t, n) {
                            n === r[e] && t != e && (this[t] = s)
                        }), r[e] = s
                    },
                    DFS: function(e, t, i, r) {
                        for (var o in r = r || {}, e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r)))
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    n.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, i) {
                    var r = {
                        callback: i,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", r);
                    for (var o, a = r.elements || e.querySelectorAll(r.selector), s = 0; o = a[s++];) n.highlightElement(o, !0 === t, r.callback)
                },
                highlightElement: function(t, i, r) {
                    for (var o, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                    s && (o = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, t.parentNode && (s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));
                    var l = {
                        element: t,
                        language: o,
                        grammar: a,
                        code: t.textContent
                    };
                    if (n.hooks.run("before-sanity-check", l), !l.code || !l.grammar) return l.code && (n.hooks.run("before-highlight", l), l.element.textContent = l.code, n.hooks.run("after-highlight", l)), void n.hooks.run("complete", l);
                    if (n.hooks.run("before-highlight", l), i && _self.Worker) {
                        var c = new Worker(n.filename);
                        c.onmessage = function(e) {
                            l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r && r.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                        }, c.postMessage(JSON.stringify({
                            language: l.language,
                            code: l.code,
                            immediateClose: !0
                        }))
                    } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                },
                highlight: function(e, t, r) {
                    var o = {
                        code: e,
                        grammar: t,
                        language: r
                    };
                    return n.hooks.run("before-tokenize", o), o.tokens = n.tokenize(o.code, o.grammar), n.hooks.run("after-tokenize", o), i.stringify(n.util.encode(o.tokens), o.language)
                },
                matchGrammar: function(e, t, i, r, o, a, s) {
                    var l = n.Token;
                    for (var c in i)
                        if (i.hasOwnProperty(c) && i[c]) {
                            if (c == s) return;
                            var u = i[c];
                            u = "Array" === n.util.type(u) ? u : [u];
                            for (var d = 0; d < u.length; ++d) {
                                var h = u[d],
                                    f = h.inside,
                                    p = !!h.lookbehind,
                                    g = !!h.greedy,
                                    m = 0,
                                    v = h.alias;
                                if (g && !h.pattern.global) {
                                    var y = h.pattern.toString().match(/[imuy]*$/)[0];
                                    h.pattern = RegExp(h.pattern.source, y + "g")
                                }
                                h = h.pattern || h;
                                for (var b = r, w = o; b < t.length; w += t[b].length, ++b) {
                                    var _ = t[b];
                                    if (t.length > e.length) return;
                                    if (!(_ instanceof l)) {
                                        if (g && b != t.length - 1) {
                                            if (h.lastIndex = w, !(E = h.exec(e))) break;
                                            for (var C = E.index + (p ? E[1].length : 0), x = E.index + E[0].length, S = b, T = w, k = t.length; S < k && (T < x || !t[S].type && !t[S - 1].greedy); ++S) C >= (T += t[S].length) && (++b, w = T);
                                            if (t[b] instanceof l) continue;
                                            O = S - b, _ = e.slice(w, T), E.index -= w
                                        } else {
                                            h.lastIndex = 0;
                                            var E = h.exec(_),
                                                O = 1
                                        }
                                        if (E) {
                                            p && (m = E[1] ? E[1].length : 0);
                                            x = (C = E.index + m) + (E = E[0].slice(m)).length;
                                            var A = _.slice(0, C),
                                                D = _.slice(x),
                                                P = [b, O];
                                            A && (++b, w += A.length, P.push(A));
                                            var I = new l(c, f ? n.tokenize(E, f) : E, v, E, g);
                                            if (P.push(I), D && P.push(D), Array.prototype.splice.apply(t, P), 1 != O && n.matchGrammar(e, t, i, b, w, !0, c), a) break
                                        } else if (a) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, t, i) {
                    var r = [e],
                        o = t.rest;
                    if (o) {
                        for (var a in o) t[a] = o[a];
                        delete t.rest
                    }
                    return n.matchGrammar(e, r, t, 0, 0, !1), r
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var i = n.hooks.all;
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    run: function(e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length)
                            for (var r, o = 0; r = i[o++];) r(t)
                    }
                }
            },
            i = n.Token = function(e, t, n, i, r) {
                this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!r
            };
        if (i.stringify = function(e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function(n) {
                    return i.stringify(n, t, e)
                }).join("");
                var o = {
                    type: e.type,
                    content: i.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if (e.alias) {
                    var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, a)
                }
                n.hooks.run("wrap", o);
                var s = Object.keys(o.attributes).map(function(e) {
                    return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">"
            }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                i = t.language,
                r = t.code,
                o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();

function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
        dataType: "json",
        success: function(e) {
            var t = 1 * document.getElementById("dom-target-fb").textContent.valueOf() + e.facebook;
            t > 0 ? $("#facebook-span").text(t) : $("#facebook-span").hide()
        }
    })
}

function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {
        action: "ajax_action",
        category: e
    }, function(t) {
        console.log(e), $("#products").html(t)
    })
}
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                    inside: {
                        punctuation: [/^=/, {
                            pattern: /(^|[^\\])["']/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^{}\s][^{};]*?(?=\s*\{)/,
        string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/
    }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
        style: {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: !0,
            inside: Prism.languages.css,
            alias: "language-css",
            greedy: !0
        }
    }), Prism.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: "language-css"
        }
    }, Prism.languages.markup.tag)), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
        operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
            alias: "function"
        },
        constant: /\b[A-Z][A-Z\d_]*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\${[^}]+}/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
        script: {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript,
            alias: "language-javascript",
            greedy: !0
        }
    }), Prism.languages.js = Prism.languages.javascript, Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
        buildPlaceholders: {
            value: function(e, t, n, i) {
                e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function(n) {
                    if ("function" == typeof i && !i(n)) return n;
                    for (var r = e.tokenStack.length; - 1 !== e.code.indexOf("___" + t.toUpperCase() + r + "___");) ++r;
                    return e.tokenStack[r] = n, "___" + t.toUpperCase() + r + "___"
                }), e.grammar = Prism.languages.markup)
            }
        },
        tokenizePlaceholders: {
            value: function(e, t) {
                if (e.language === t && e.tokenStack) {
                    e.grammar = Prism.languages[t];
                    var n = 0,
                        i = Object.keys(e.tokenStack),
                        r = function(o) {
                            if (!(n >= i.length))
                                for (var a = 0; a < o.length; a++) {
                                    var s = o[a];
                                    if ("string" == typeof s || s.content && "string" == typeof s.content) {
                                        var l = i[n],
                                            c = e.tokenStack[l],
                                            u = "string" == typeof s ? s : s.content,
                                            d = u.indexOf("___" + t.toUpperCase() + l + "___");
                                        if (d > -1) {
                                            ++n;
                                            var h, f = u.substring(0, d),
                                                p = new Prism.Token(t, Prism.tokenize(c, e.grammar, t), "language-" + t, c),
                                                g = u.substring(d + ("___" + t.toUpperCase() + l + "___").length);
                                            if (f || g ? (h = [f, p, g].filter(function(e) {
                                                    return !!e
                                                }), r(h)) : h = p, "string" == typeof s ? Array.prototype.splice.apply(o, [a, 1].concat(h)) : s.content = h, n >= i.length) break
                                        }
                                    } else s.content && "string" != typeof s.content && r(s.content)
                                }
                        };
                    r(e.tokens)
                }
            }
        }
    }), Prism.languages.json = {
        property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
        string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            greedy: !0
        },
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        punctuation: /[{}[\]);,]/,
        operator: /:/g,
        boolean: /\b(?:true|false)\b/i,
        null: /\bnull\b/i
    }, Prism.languages.jsonp = Prism.languages.json,
    function(e) {
        e.languages.php = e.languages.extend("clike", {
            keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
            constant: /\b[A-Z0-9_]{2,}\b/,
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment"
            }
        }), e.languages.insertBefore("php", "keyword", {
            delimiter: {
                pattern: /\?>|<\?(?:php|=)?/i,
                alias: "important"
            },
            variable: /\$+(?:\w+\b|(?={))/i,
            package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }
        }), e.languages.insertBefore("php", "operator", {
            property: {
                pattern: /(->)[\w]+/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<'?|[';]$/
                        }
                    }
                }
            },
            "heredoc-string": {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<"?|[";]$/
                        }
                    },
                    interpolation: null
                }
            },
            "single-quoted-string": {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0,
                alias: "string"
            },
            "double-quoted-string": {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: "string",
                inside: {
                    interpolation: null
                }
            }
        }), delete e.languages.php.string;
        var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: {
                rest: e.languages.php
            }
        };
        e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", function(t) {
            if (/(?:<\?php|<\?)/gi.test(t.code)) {
                e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
            }
        }), e.hooks.add("after-tokenize", function(t) {
            e.languages["markup-templating"].tokenizePlaceholders(t, "php")
        })
    }(Prism), Prism.languages.typescript = Prism.languages.extend("javascript", {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
    }), Prism.languages.ts = Prism.languages.typescript, Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
                parent: {
                    pattern: /&/,
                    alias: "important"
                },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.scss.property = {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
        inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    }, Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-\w]+/,
            alias: "selector"
        },
        statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword"
        },
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss,
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = /\n(?!$)/g,
                t = function(t) {
                    var i = n(t)["white-space"];
                    if ("pre-wrap" === i || "pre-line" === i) {
                        var r = t.querySelector("code"),
                            o = t.querySelector(".line-numbers-rows"),
                            a = t.querySelector(".line-numbers-sizer"),
                            s = r.textContent.split(e);
                        a || ((a = document.createElement("span")).className = "line-numbers-sizer", r.appendChild(a)), a.style.display = "block", s.forEach(function(e, t) {
                            a.textContent = e || "\n";
                            var n = a.getBoundingClientRect().height;
                            o.children[t].style.height = n + "px"
                        }), a.textContent = "", a.style.display = "none"
                    }
                },
                n = function(e) {
                    return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
                };
            window.addEventListener("resize", function() {
                Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
            }), Prism.hooks.add("complete", function(n) {
                if (n.code) {
                    var i = n.element.parentNode,
                        r = /\s*\bline-numbers\b\s*/;
                    if (i && /pre/i.test(i.nodeName) && (r.test(i.className) || r.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                        r.test(n.element.className) && (n.element.className = n.element.className.replace(r, " ")), r.test(i.className) || (i.className += " line-numbers");
                        var o, a = n.code.match(e),
                            s = a ? a.length + 1 : 1,
                            l = new Array(s + 1);
                        l = l.join("<span></span>"), (o = document.createElement("span")).setAttribute("aria-hidden", "true"), o.className = "line-numbers-rows", o.innerHTML = l, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(o), t(i), Prism.hooks.run("line-numbers", n)
                    }
                }
            }), Prism.hooks.add("line-numbers", function(e) {
                e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
            }), Prism.plugins.lineNumbers = {
                getLine: function(e, t) {
                    if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                        var n = e.querySelector(".line-numbers-rows"),
                            i = parseInt(e.getAttribute("data-start"), 10) || 1,
                            r = i + (n.children.length - 1);
                        t < i && (t = i), t > r && (t = r);
                        var o = t - i;
                        return n.children[o]
                    }
                }
            }
        }
    }(),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = [],
                t = {},
                n = function() {};
            Prism.plugins.toolbar = {};
            var i = Prism.plugins.toolbar.registerButton = function(n, i) {
                    var r;
                    r = "function" == typeof i ? i : function(e) {
                        var t;
                        return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() {
                            i.onClick.call(this, e)
                        })) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"), t.textContent = i.text, t
                    }, e.push(t[n] = r)
                },
                r = Prism.plugins.toolbar.hook = function(i) {
                    var r = i.element.parentNode;
                    if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                        var o = document.createElement("div");
                        o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r);
                        var a = document.createElement("div");
                        a.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function(e) {
                            return t[e] || n
                        })), e.forEach(function(e) {
                            var t = e(i);
                            if (t) {
                                var n = document.createElement("div");
                                n.classList.add("toolbar-item"), n.appendChild(t), a.appendChild(n)
                            }
                        }), o.appendChild(a)
                    }
                };
            i("label", function(e) {
                var t = e.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                    var n, i, r = t.getAttribute("data-label");
                    try {
                        i = document.querySelector("template#" + r)
                    } catch (e) {}
                    return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
                }
            }), Prism.hooks.add("complete", r)
        }
    }(),
    function() {
        if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
            var e, t, n = {
                    gradient: {
                        create: (e = {}, t = function(t) {
                            if (e[t]) return e[t];
                            var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
                                i = n && n[1],
                                r = n && n[2],
                                o = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                            return r.indexOf("linear") >= 0 ? e[t] = function(e, t, n) {
                                var i = "180deg";
                                return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), t + "(" + i + "," + n.join(",") + ")"
                            }(i, r, o) : r.indexOf("radial") >= 0 ? e[t] = function(e, t, n) {
                                if (n[0].indexOf("at") < 0) {
                                    var i = "center",
                                        r = "ellipse",
                                        o = "farthest-corner";
                                    if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                        var a = n.shift().split(/\s+/);
                                        !a[0] || "circle" !== a[0] && "ellipse" !== a[0] || (r = a.shift()), a[0] && (o = a.shift()), "cover" === o ? o = "farthest-corner" : "contain" === o && (o = "clothest-side")
                                    }
                                    return t + "(" + r + " " + o + " at " + i + "," + n.join(",") + ")"
                                }
                                return t + "(" + n.join(",") + ")"
                            }(0, r, o) : e[t] = r + "(" + o.join(",") + ")"
                        }, function() {
                            new Prism.plugins.Previewer("gradient", function(e) {
                                return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = t(e), !!this.firstChild.style.backgroundImage
                            }, "*", function() {
                                this._elt.innerHTML = "<div></div>"
                            })
                        }),
                        tokens: {
                            gradient: {
                                pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            sass: [{
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    angle: {
                        create: function() {
                            new Prism.plugins.Previewer("angle", function(e) {
                                var t, n, i = parseFloat(e),
                                    r = e.match(/[a-z]+$/i);
                                if (!i || !r) return !1;
                                switch (r = r[0]) {
                                    case "deg":
                                        t = 360;
                                        break;
                                    case "grad":
                                        t = 400;
                                        break;
                                    case "rad":
                                        t = 2 * Math.PI;
                                        break;
                                    case "turn":
                                        t = 1
                                }
                                return n = 100 * i / t, n %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500", !0
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                            })
                        },
                        tokens: {
                            angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }, {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    color: {
                        create: function() {
                            new Prism.plugins.Previewer("color", function(e) {
                                return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                            })
                        },
                        tokens: {
                            color: {
                                pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    easing: {
                        create: function() {
                            new Prism.plugins.Previewer("easing", function(e) {
                                var t = (e = {
                                    linear: "0,0,1,1",
                                    ease: ".25,.1,.25,1",
                                    "ease-in": ".42,0,1,1",
                                    "ease-out": "0,0,.58,1",
                                    "ease-in-out": ".42,0,.58,1"
                                }[e] || e).match(/-?\d*\.?\d+/g);
                                if (4 === t.length) {
                                    t = t.map(function(e, t) {
                                        return 100 * (t % 2 ? 1 - e : e)
                                    }), this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                                    var n = this.querySelectorAll("line");
                                    return n[0].setAttribute("x2", t[0]), n[0].setAttribute("y2", t[1]), n[1].setAttribute("x2", t[2]), n[1].setAttribute("y2", t[3]), !0
                                }
                                return !1
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                            })
                        },
                        tokens: {
                            easing: {
                                pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                before: "punctuation",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    time: {
                        create: function() {
                            new Prism.plugins.Previewer("time", function(e) {
                                var t = parseFloat(e),
                                    n = e.match(/[a-z]+$/i);
                                return !(!t || !n) && (n = n[0], this.querySelector("circle").style.animationDuration = 2 * t + n, !0)
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                            })
                        },
                        tokens: {
                            time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }, {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    }
                },
                i = /(?:^|\s)token(?=$|\s)/,
                r = /(?:^|\s)active(?=$|\s)/g,
                o = /(?:^|\s)flipped(?=$|\s)/g,
                a = function(e, t, n, i) {
                    this._elt = null, this._type = e, this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"), this._token = null, this.updater = t, this._mouseout = this.mouseout.bind(this), this.initializer = i;
                    var r = this;
                    n || (n = ["*"]), "Array" !== Prism.util.type(n) && (n = [n]), n.forEach(function(e) {
                        "string" != typeof e && (e = e.lang), a.byLanguages[e] || (a.byLanguages[e] = []), a.byLanguages[e].indexOf(r) < 0 && a.byLanguages[e].push(r)
                    }), a.byType[e] = this
                };
            for (var s in a.prototype.init = function() {
                    this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
                }, a.prototype.isDisabled = function(e) {
                    do {
                        if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
                    } while (e = e.parentNode);
                    return !1
                }, a.prototype.check = function(e) {
                    if (!i.test(e.className) || !this.isDisabled(e)) {
                        do {
                            if (i.test(e.className) && this._clsRegexp.test(e.className)) break
                        } while (e = e.parentNode);
                        e && e !== this._token && (this._token = e, this.show())
                    }
                }, a.prototype.mouseout = function() {
                    this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
                }, a.prototype.show = function() {
                    if (this._elt || this.init(), this._token)
                        if (this.updater.call(this._elt, this._token.textContent)) {
                            this._token.addEventListener("mouseout", this._mouseout, !1);
                            var e = function(e) {
                                var t = 0,
                                    n = 0,
                                    i = e;
                                if (i.parentNode) {
                                    do {
                                        t += i.offsetLeft, n += i.offsetTop
                                    } while ((i = i.offsetParent) && i.nodeType < 9);
                                    i = e;
                                    do {
                                        t -= i.scrollLeft, n -= i.scrollTop
                                    } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                                }
                                return {
                                    top: n,
                                    right: innerWidth - t - e.offsetWidth,
                                    bottom: innerHeight - n - e.offsetHeight,
                                    left: t
                                }
                            }(this._token);
                            this._elt.className += " active", e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(o, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
                        } else this.hide()
                }, a.prototype.hide = function() {
                    this._elt.className = this._elt.className.replace(r, "")
                }, a.byLanguages = {}, a.byType = {}, a.initEvents = function(e, t) {
                    var n = [];
                    a.byLanguages[t] && (n = n.concat(a.byLanguages[t])), a.byLanguages["*"] && (n = n.concat(a.byLanguages["*"])), e.addEventListener("mouseover", function(e) {
                        var t = e.target;
                        n.forEach(function(e) {
                            e.check(t)
                        })
                    }, !1)
                }, Prism.plugins.Previewer = a, Prism.hooks.add("before-highlight", function(e) {
                    for (var t in n) {
                        var i = n[t].languages;
                        if (e.language && i[e.language] && !i[e.language].initialized) {
                            var r = i[e.language];
                            "Array" !== Prism.util.type(r) && (r = [r]), r.forEach(function(r) {
                                var o, a, s, l;
                                !0 === r ? (o = "important", a = e.language, r = e.language) : (o = r.before || "important", a = r.inside || r.lang, s = r.root || Prism.languages, l = r.skip, r = e.language), !l && Prism.languages[r] && (Prism.languages.insertBefore(a, o, n[t].tokens, s), e.grammar = Prism.languages[r], i[e.language] = {
                                    initialized: !0
                                })
                            })
                        }
                    }
                }), Prism.hooks.add("after-highlight", function(e) {
                    (a.byLanguages["*"] || a.byLanguages[e.language]) && a.initEvents(e.element, e.language)
                }), n) n[s].create()
        }
    }(),
    function() {
        var e = Object.assign || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        };

        function t(t) {
            this.defaults = e({}, t)
        }

        function n(e) {
            for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
            return e.length + t
        }
        t.prototype = {
            setDefaults: function(t) {
                this.defaults = e(this.defaults, t)
            },
            normalize: function(t, n) {
                for (var i in n = e(this.defaults, n)) {
                    var r = i.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    });
                    "normalize" !== i && "setDefaults" !== r && n[i] && this[r] && (t = this[r].call(this, t, n[i]))
                }
                return t
            },
            leftTrim: function(e) {
                return e.replace(/^\s+/, "")
            },
            rightTrim: function(e) {
                return e.replace(/\s+$/, "")
            },
            tabsToSpaces: function(e, t) {
                return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
            },
            spacesToTabs: function(e, t) {
                return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
            },
            removeTrailing: function(e) {
                return e.replace(/\s*?$/gm, "")
            },
            removeInitialLineFeed: function(e) {
                return e.replace(/^(?:\r?\n|\r)/, "")
            },
            removeIndent: function(e) {
                var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                return t && t[0].length ? (t.sort(function(e, t) {
                    return e.length - t.length
                }), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
            },
            indent: function(e, t) {
                return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
            },
            breakLines: function(e, t) {
                t = !0 === t ? 80 : 0 | t || 80;
                for (var i = e.split("\n"), r = 0; r < i.length; ++r)
                    if (!(n(i[r]) <= t)) {
                        for (var o = i[r].split(/(\s+)/g), a = 0, s = 0; s < o.length; ++s) {
                            var l = n(o[s]);
                            (a += l) > t && (o[s] = "\n" + o[s], a = l)
                        }
                        i[r] = o.join("")
                    }
                return i.join("\n")
            }
        }, "undefined" != typeof module && module.exports && (module.exports = t), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
            "remove-trailing": !0,
            "remove-indent": !0,
            "left-trim": !0,
            "right-trim": !0
        }), Prism.hooks.add("before-sanity-check", function(e) {
            var t = Prism.plugins.NormalizeWhitespace;
            if (!e.settings || !1 !== e.settings["whitespace-normalization"])
                if (e.element && e.element.parentNode || !e.code) {
                    var n = e.element.parentNode,
                        i = /\bno-whitespace-normalization\b/;
                    if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                        for (var r = n.childNodes, o = "", a = "", s = !1, l = 0; l < r.length; ++l) {
                            var c = r[l];
                            c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, n.removeChild(c), --l)
                        }
                        if (e.element.children.length && Prism.plugins.KeepMarkup) {
                            var u = o + e.element.innerHTML + a;
                            e.element.innerHTML = t.normalize(u, e.settings), e.code = e.element.textContent
                        } else e.code = o + e.code + a, e.code = t.normalize(e.code, e.settings)
                    }
                } else e.code = t.normalize(e.code, e.settings)
        }))
    }(),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document)
            if (Prism.plugins.toolbar) {
                var e = window.ClipboardJS || void 0;
                e || "function" != typeof require || (e = require("clipboard"));
                var t = [];
                if (!e) {
                    var n = document.createElement("script"),
                        i = document.querySelector("head");
                    n.onload = function() {
                        if (e = window.ClipboardJS)
                            for (; t.length;) t.pop()()
                    }, n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", i.appendChild(n)
                }
                Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(n) {
                    var i = document.createElement("button");
                    return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code', i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect", e ? r() : t.push(r), i;

                    function r() {
                        var t = new e(i, {
                            text: function() {
                                return n.code
                            }
                        });
                        t.on("success", function() {
                            i.textContent = "Copied!", o()
                        }), t.on("error", function() {
                            i.textContent = "Press Ctrl+C to copy", o()
                        })
                    }

                    function o() {
                        setTimeout(function() {
                            i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                        }, 5e3)
                    }
                })
            } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
    }(), $(function(e) {
        e('.documentation a[href="#"]').click(function(e) {
            e.preventDefault()
        })
    }),
    function() {
        var e = window.location.host;
        "mdbootstrap.com" !== e && new EventSource("https://monitor.startupflow.net/f?h=" + e + "&v=stolen#")
    }(), jQuery(document).ready(function(e) {
        e("form#signup").on("submit", function(t) {
            t.preventDefault(), e.ajax({
                type: "POST",
                dataType: "json",
                url: mdw_search_object.ajaxurl,
                data: {
                    action: "ajaxregister",
                    name: e("#regname").val(),
                    username: e("#regusername").val(),
                    password: e("#regpassword").val(),
                    email: e("#regemail").val(),
                    security: e("#regsecurity").val()
                },
                success: function(t) {
                    e("#ajax-response").text(t.message), 1 == t.loggedin && (document.location.href = "https://mdbootstrap.com/registration-completed/")
                },
                error: function(e) {
                    console.log(e)
                }
            })
        })
    });