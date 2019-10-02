!function (e, r) {
    var t = function (e) {
        var r = {};

        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {i: n, l: !1, exports: {}};
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        return t.m = e, t.c = r, t.d = function (e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: n})
        }, t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, t.t = function (e, r) {
            if (1 & r && (e = t(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e) for (var o in e) t.d(n, o, function (r) {
                return e[r]
            }.bind(null, o));
            return n
        }, t.n = function (e) {
            var r = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, t.p = "", t(t.s = 457)
    }({
        186: function (e, r, t) {
            e.exports = function (e) {
                function r(n) {
                    if (t[n]) return t[n].exports;
                    var o = t[n] = {exports: {}, id: n, loaded: !1};
                    return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
                }

                var t = {};
                return r.m = e, r.c = t, r.p = "", r(0)
            }([function (e, r, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function o(e) {
                    var r = e.inputElement, t = (0, u.default)(e), n = function (e) {
                        var r = e.target.value;
                        return t.update(r)
                    };
                    return r.addEventListener("input", n), t.update(r.value), {
                        textMaskInputElement: t,
                        destroy: function () {
                            r.removeEventListener("input", n)
                        }
                    }
                }

                Object.defineProperty(r, "__esModule", {value: !0}), r.conformToMask = void 0, r.maskInput = o;
                var i = t(2);
                Object.defineProperty(r, "conformToMask", {
                    enumerable: !0, get: function () {
                        return n(i).default
                    }
                });
                var a = t(5), u = n(a);
                r.default = o
            }, function (e, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.placeholderChar = "_", r.strFunction = "function"
            }, function (e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.default = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!(0, o.isArray)(r)) {
                        if ((void 0 === r ? "undefined" : n(r)) !== i.strFunction) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
                        r = r(e, t), r = (0, o.processCaretTraps)(r).maskWithoutCaretTraps
                    }
                    var l = t.guide, s = void 0 === l || l, f = t.previousConformedValue, d = void 0 === f ? u : f,
                        c = t.placeholderChar, v = void 0 === c ? i.placeholderChar : c, p = t.placeholder,
                        h = void 0 === p ? (0, o.convertMaskToPlaceholder)(r, v) : p, m = t.currentCaretPosition,
                        y = t.keepCharPositions, g = !1 === s && void 0 !== d, b = e.length, C = d.length, P = h.length,
                        x = r.length, k = b - C, O = k > 0, T = m + (O ? -k : 0), w = T + Math.abs(k);
                    if (!0 === y && !O) {
                        for (var M = u, S = T; S < w; S++) h[S] === v && (M += v);
                        e = e.slice(0, T) + M + e.slice(T, b)
                    }
                    for (var _ = e.split(u).map(function (e, r) {
                        return {char: e, isNew: r >= T && r < w}
                    }), j = b - 1; j >= 0; j--) {
                        var V = _[j].char;
                        if (V !== v) {
                            var A = j >= T && C === x;
                            V === h[A ? j - k : j] && _.splice(j, 1)
                        }
                    }
                    var E = u, N = !1;
                    e:for (var F = 0; F < P; F++) {
                        var I = h[F];
                        if (I === v) {
                            if (_.length > 0) for (; _.length > 0;) {
                                var L = _.shift(), R = L.char, J = L.isNew;
                                if (R === v && !0 !== g) {
                                    E += v;
                                    continue e
                                }
                                if (r[F].test(R)) {
                                    if (!0 === y && !1 !== J && d !== u && !1 !== s && O) {
                                        for (var W = _.length, q = null, z = 0; z < W; z++) {
                                            var B = _[z];
                                            if (B.char !== v && !1 === B.isNew) break;
                                            if (B.char === v) {
                                                q = z;
                                                break
                                            }
                                        }
                                        null !== q ? (E += R, _.splice(q, 1)) : F--
                                    } else E += R;
                                    continue e
                                }
                                N = !0
                            }
                            !1 === g && (E += h.substr(F, P));
                            break
                        }
                        E += I
                    }
                    if (g && !1 === O) {
                        for (var D = null, G = 0; G < E.length; G++) h[G] === v && (D = G);
                        E = null !== D ? E.substr(0, D + 1) : u
                    }
                    return {conformedValue: E, meta: {someCharsRejected: N}}
                };
                var o = t(3), i = t(1), a = [], u = ""
            }, function (e, r, t) {
                "use strict";

                function n(e) {
                    return Array.isArray && Array.isArray(e) || e instanceof Array
                }

                Object.defineProperty(r, "__esModule", {value: !0}), r.convertMaskToPlaceholder = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.placeholderChar;
                    if (!n(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
                    if (-1 !== e.indexOf(r)) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " + JSON.stringify(r) + "\n\nThe mask that was received is: " + JSON.stringify(e));
                    return e.map(function (e) {
                        return e instanceof RegExp ? r : e
                    }).join("")
                }, r.isArray = n, r.isString = function (e) {
                    return "string" == typeof e || e instanceof String
                }, r.isNumber = function (e) {
                    return "number" == typeof e && void 0 === e.length && !isNaN(e)
                }, r.processCaretTraps = function (e) {
                    for (var r = [], t = void 0; -1 !== (t = e.indexOf(a));) r.push(t), e.splice(t, 1);
                    return {maskWithoutCaretTraps: e, indexes: r}
                };
                var o = t(1), i = [], a = "[]"
            }, function (e, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.default = function (e) {
                    var r = e.previousConformedValue, o = void 0 === r ? n : r, i = e.previousPlaceholder,
                        a = void 0 === i ? n : i, u = e.currentCaretPosition, l = void 0 === u ? 0 : u,
                        s = e.conformedValue, f = e.rawValue, d = e.placeholderChar, c = e.placeholder,
                        v = e.indexesOfPipedChars, p = void 0 === v ? t : v, h = e.caretTrapIndexes,
                        m = void 0 === h ? t : h;
                    if (0 === l || !f.length) return 0;
                    var y = f.length, g = o.length, b = c.length, C = s.length, P = y - g, x = P > 0;
                    if (P > 1 && !x && 0 !== g) return l;
                    var k = 0, O = void 0, T = void 0;
                    if (!x || o !== s && s !== c) {
                        var w = s.toLowerCase(), M = f.toLowerCase(), S = M.substr(0, l).split(n),
                            _ = S.filter(function (e) {
                                return -1 !== w.indexOf(e)
                            });
                        T = _[_.length - 1];
                        var j = a.substr(0, _.length).split(n).filter(function (e) {
                                return e !== d
                            }).length, V = c.substr(0, _.length).split(n).filter(function (e) {
                                return e !== d
                            }).length, A = V !== j,
                            E = void 0 !== a[_.length - 1] && void 0 !== c[_.length - 2] && a[_.length - 1] !== d && a[_.length - 1] !== c[_.length - 1] && a[_.length - 1] === c[_.length - 2];
                        !x && (A || E) && j > 0 && c.indexOf(T) > -1 && void 0 !== f[l] && (O = !0, T = f[l]);
                        for (var N = p.map(function (e) {
                            return w[e]
                        }), F = N.filter(function (e) {
                            return e === T
                        }).length, I = _.filter(function (e) {
                            return e === T
                        }).length, L = c.substr(0, c.indexOf(d)).split(n).filter(function (e, r) {
                            return e === T && f[r] !== e
                        }).length, R = L + I + F + (O ? 1 : 0), J = 0, W = 0; W < C; W++) {
                            var q = w[W];
                            if (k = W + 1, q === T && J++, J >= R) break
                        }
                    } else k = l - P;
                    if (x) {
                        for (var z = k, B = k; B <= b; B++) if (c[B] === d && (z = B), c[B] === d || -1 !== m.indexOf(B) || B === b) return z
                    } else if (O) {
                        for (var D = k - 1; D >= 0; D--) if (s[D] === T || -1 !== m.indexOf(D) || 0 === D) return D
                    } else for (var G = k; G >= 0; G--) if (c[G - 1] === d || -1 !== m.indexOf(G) || 0 === G) return G
                };
                var t = [], n = ""
            }, function (e, r, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function o(e, r) {
                    document.activeElement === e && (m ? y(function () {
                        return e.setSelectionRange(r, r, p)
                    }, 0) : e.setSelectionRange(r, r, p))
                }

                Object.defineProperty(r, "__esModule", {value: !0});
                var i = Object.assign || function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.default = function (e) {
                    var r = {previousConformedValue: void 0, previousPlaceholder: void 0};
                    return {
                        state: r, update: function (t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                                u = n.inputElement, s = n.mask, p = n.guide, m = n.pipe, y = n.placeholderChar,
                                g = void 0 === y ? c.placeholderChar : y, b = n.keepCharPositions,
                                C = void 0 !== b && b, P = n.showMask, x = void 0 !== P && P;
                            if (void 0 === t && (t = u.value), t !== r.previousConformedValue) {
                                (void 0 === s ? "undefined" : a(s)) === h && void 0 !== s.pipe && void 0 !== s.mask && (m = s.pipe, s = s.mask);
                                var k = void 0, O = void 0;
                                if (s instanceof Array && (k = (0, d.convertMaskToPlaceholder)(s, g)), !1 !== s) {
                                    var T = function (e) {
                                            if ((0, d.isString)(e)) return e;
                                            if ((0, d.isNumber)(e)) return String(e);
                                            if (void 0 === e || null === e) return v;
                                            throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e))
                                        }(t), w = u.selectionEnd, M = r.previousConformedValue, S = r.previousPlaceholder,
                                        _ = void 0;
                                    if ((void 0 === s ? "undefined" : a(s)) === c.strFunction) {
                                        if (!1 === (O = s(T, {
                                            currentCaretPosition: w,
                                            previousConformedValue: M,
                                            placeholderChar: g
                                        }))) return;
                                        var j = (0, d.processCaretTraps)(O), V = j.maskWithoutCaretTraps, A = j.indexes;
                                        O = V, _ = A, k = (0, d.convertMaskToPlaceholder)(O, g)
                                    } else O = s;
                                    var E = {
                                            previousConformedValue: M,
                                            guide: p,
                                            placeholderChar: g,
                                            pipe: m,
                                            placeholder: k,
                                            currentCaretPosition: w,
                                            keepCharPositions: C
                                        }, N = (0, f.default)(T, O, E), F = N.conformedValue,
                                        I = (void 0 === m ? "undefined" : a(m)) === c.strFunction, L = {};
                                    I && (!1 === (L = m(F, i({rawValue: T}, E))) ? L = {
                                        value: M,
                                        rejected: !0
                                    } : (0, d.isString)(L) && (L = {value: L}));
                                    var R = I ? L.value : F, J = (0, l.default)({
                                        previousConformedValue: M,
                                        previousPlaceholder: S,
                                        conformedValue: R,
                                        placeholder: k,
                                        rawValue: T,
                                        currentCaretPosition: w,
                                        placeholderChar: g,
                                        indexesOfPipedChars: L.indexesOfPipedChars,
                                        caretTrapIndexes: _
                                    }), W = R === k && 0 === J, q = x ? k : v, z = W ? q : R;
                                    r.previousConformedValue = z, r.previousPlaceholder = k, u.value !== z && (u.value = z, o(u, J))
                                }
                            }
                        }
                    }
                };
                var u = t(4), l = n(u), s = t(2), f = n(s), d = t(3), c = t(1), v = "", p = "none", h = "object",
                    m = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                    y = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout
            }])
        }, 457: function (e, r, t) {
            "use strict";
            t.r(r);
            var n = t(186);
            t.n(n), t.d(r, "vanillaTextMask", function () {
                return n
            })
        }
    });
    if ("object" == typeof t) {
        var n = ["object" == typeof module && "object" == typeof module.exports ? module.exports : null, "undefined" != typeof window ? window : null, e && e !== window ? e : null];
        for (var o in t) n[0] && (n[0][o] = t[o]), n[1] && "__esModule" !== o && (n[1][o] = t[o]), n[2] && (n[2][o] = t[o])
    }
}(this);