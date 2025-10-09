var ec = Object.defineProperty;
var tc = (n, r, t) => r in n ? ec(n, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[r] = t;
var G = (n, r, t) => (tc(n, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as F, jsxs as fe, Fragment as Ha } from "react/jsx-runtime";
import * as E from "react";
import S, { useRef as Ae, useContext as St, useLayoutEffect as Rr, useMemo as $t, useDebugValue as vo, createElement as Hi, createContext as zi, useState as Ie, useCallback as Ve, useEffect as Ee, forwardRef as nc, cloneElement as Vi, Component as Te, createRef as Lt } from "react";
import * as rc from "react-dom";
import ac from "react-dom";
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fn = {}, oc = {
  get exports() {
    return Fn;
  },
  set exports(n) {
    Fn = n;
  }
}, ve = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function ic() {
  if (go)
    return ve;
  go = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case n:
          switch (p = p.type, p) {
            case t:
            case a:
            case e:
            case c:
            case l:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case s:
                case d:
                case u:
                  return p;
                case o:
                  return p;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  return ve.ContextConsumer = o, ve.ContextProvider = i, ve.Element = n, ve.ForwardRef = s, ve.Fragment = t, ve.Lazy = d, ve.Memo = u, ve.Portal = r, ve.Profiler = a, ve.StrictMode = e, ve.Suspense = c, ve.SuspenseList = l, ve.isContextConsumer = function(p) {
    return m(p) === o;
  }, ve.isContextProvider = function(p) {
    return m(p) === i;
  }, ve.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, ve.isForwardRef = function(p) {
    return m(p) === s;
  }, ve.isFragment = function(p) {
    return m(p) === t;
  }, ve.isLazy = function(p) {
    return m(p) === d;
  }, ve.isMemo = function(p) {
    return m(p) === u;
  }, ve.isPortal = function(p) {
    return m(p) === r;
  }, ve.isProfiler = function(p) {
    return m(p) === a;
  }, ve.isStrictMode = function(p) {
    return m(p) === e;
  }, ve.isSuspense = function(p) {
    return m(p) === c;
  }, ve.isSuspenseList = function(p) {
    return m(p) === l;
  }, ve.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === a || p === e || p === c || p === l || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === u || p.$$typeof === i || p.$$typeof === o || p.$$typeof === s || p.$$typeof === h || p.getModuleId !== void 0);
  }, ve.typeOf = m, ve;
}
var ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function sc() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && function() {
    function n(p) {
      if (typeof p == "object" && p !== null) {
        var v = p.$$typeof;
        switch (v) {
          case r:
            switch (p = p.type, p) {
              case e:
              case o:
              case a:
              case l:
              case u:
              case h:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case s:
                  case c:
                  case f:
                  case d:
                    return p;
                  case i:
                    return p;
                  default:
                    return v;
                }
            }
          case t:
            return v;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
    ge.ContextConsumer = i, ge.ContextProvider = s, ge.Element = r, ge.ForwardRef = c, ge.Fragment = e, ge.Lazy = f, ge.Memo = d, ge.Portal = t, ge.Profiler = o, ge.StrictMode = a, ge.Suspense = l, ge.SuspenseList = u, ge.isContextConsumer = function(p) {
      return n(p) === i;
    }, ge.isContextProvider = function(p) {
      return n(p) === s;
    }, ge.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }, ge.isForwardRef = function(p) {
      return n(p) === c;
    }, ge.isFragment = function(p) {
      return n(p) === e;
    }, ge.isLazy = function(p) {
      return n(p) === f;
    }, ge.isMemo = function(p) {
      return n(p) === d;
    }, ge.isPortal = function(p) {
      return n(p) === t;
    }, ge.isProfiler = function(p) {
      return n(p) === o;
    }, ge.isStrictMode = function(p) {
      return n(p) === a;
    }, ge.isSuspense = function(p) {
      return n(p) === l;
    }, ge.isSuspenseList = function(p) {
      return n(p) === u;
    }, ge.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === e || p === o || p === a || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === s || p.$$typeof === i || p.$$typeof === c || p.$$typeof === m || p.getModuleId !== void 0);
    }, ge.typeOf = n;
  }()), ge;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = ic() : n.exports = sc();
})(oc);
function cc(n) {
  function r(A, W, B, H, k) {
    for (var K = 0, L = 0, J = 0, te = 0, re, Y, _e = 0, Ce = 0, oe, Ye = oe = re = 0, le = 0, Ne = 0, Pn = 0, $e = 0, Un = B.length, En = Un - 1, rt, ne = "", xe = "", Br = "", jr = "", Et; le < Un; ) {
      if (Y = B.charCodeAt(le), le === En && L + te + J + K !== 0 && (L !== 0 && (Y = L === 47 ? 10 : 47), te = J = K = 0, Un++, En++), L + te + J + K === 0) {
        if (le === En && (0 < Ne && (ne = ne.replace(f, "")), 0 < ne.trim().length)) {
          switch (Y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ne += B.charAt(le);
          }
          Y = 59;
        }
        switch (Y) {
          case 123:
            for (ne = ne.trim(), re = ne.charCodeAt(0), oe = 1, $e = ++le; le < Un; ) {
              switch (Y = B.charCodeAt(le)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch (Y = B.charCodeAt(le + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Ye = le + 1; Ye < En; ++Ye)
                          switch (B.charCodeAt(Ye)) {
                            case 47:
                              if (Y === 42 && B.charCodeAt(Ye - 1) === 42 && le + 2 !== Ye) {
                                le = Ye + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Y === 47) {
                                le = Ye + 1;
                                break e;
                              }
                          }
                        le = Ye;
                      }
                  }
                  break;
                case 91:
                  Y++;
                case 40:
                  Y++;
                case 34:
                case 39:
                  for (; le++ < En && B.charCodeAt(le) !== Y; )
                    ;
              }
              if (oe === 0)
                break;
              le++;
            }
            switch (oe = B.substring($e, le), re === 0 && (re = (ne = ne.replace(d, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < Ne && (ne = ne.replace(f, "")), Y = ne.charCodeAt(1), Y) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ne = W;
                    break;
                  default:
                    Ne = N;
                }
                if (oe = r(W, Ne, oe, Y, k + 1), $e = oe.length, 0 < $ && (Ne = t(N, ne, Pn), Et = s(3, oe, Ne, W, R, Z, $e, Y, k, H), ne = Ne.join(""), Et !== void 0 && ($e = (oe = Et.trim()).length) === 0 && (Y = 0, oe = "")), 0 < $e)
                  switch (Y) {
                    case 115:
                      ne = ne.replace(x, i);
                    case 100:
                    case 109:
                    case 45:
                      oe = ne + "{" + oe + "}";
                      break;
                    case 107:
                      ne = ne.replace(b, "$1 $2"), oe = ne + "{" + oe + "}", oe = C === 1 || C === 2 && o("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                      break;
                    default:
                      oe = ne + oe, H === 112 && (oe = (xe += oe, ""));
                  }
                else
                  oe = "";
                break;
              default:
                oe = r(W, t(W, ne, Pn), oe, H, k + 1);
            }
            Br += oe, oe = Pn = Ne = Ye = re = 0, ne = "", Y = B.charCodeAt(++le);
            break;
          case 125:
          case 59:
            if (ne = (0 < Ne ? ne.replace(f, "") : ne).trim(), 1 < ($e = ne.length))
              switch (Ye === 0 && (re = ne.charCodeAt(0), re === 45 || 96 < re && 123 > re) && ($e = (ne = ne.replace(" ", ":")).length), 0 < $ && (Et = s(1, ne, W, A, R, Z, xe.length, H, k, H)) !== void 0 && ($e = (ne = Et.trim()).length) === 0 && (ne = "\0\0"), re = ne.charCodeAt(0), Y = ne.charCodeAt(1), re) {
                case 0:
                  break;
                case 64:
                  if (Y === 105 || Y === 99) {
                    jr += ne + B.charAt(le);
                    break;
                  }
                default:
                  ne.charCodeAt($e - 1) !== 58 && (xe += a(ne, re, Y, ne.charCodeAt(2)));
              }
            Pn = Ne = Ye = re = 0, ne = "", Y = B.charCodeAt(++le);
        }
      }
      switch (Y) {
        case 13:
        case 10:
          L === 47 ? L = 0 : 1 + re === 0 && H !== 107 && 0 < ne.length && (Ne = 1, ne += "\0"), 0 < $ * X && s(0, ne, W, A, R, Z, xe.length, H, k, H), Z = 1, R++;
          break;
        case 59:
        case 125:
          if (L + te + J + K === 0) {
            Z++;
            break;
          }
        default:
          switch (Z++, rt = B.charAt(le), Y) {
            case 9:
            case 32:
              if (te + K + L === 0)
                switch (_e) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    rt = "";
                    break;
                  default:
                    Y !== 32 && (rt = " ");
                }
              break;
            case 0:
              rt = "\\0";
              break;
            case 12:
              rt = "\\f";
              break;
            case 11:
              rt = "\\v";
              break;
            case 38:
              te + L + K === 0 && (Ne = Pn = 1, rt = "\f" + rt);
              break;
            case 108:
              if (te + L + K + O === 0 && 0 < Ye)
                switch (le - Ye) {
                  case 2:
                    _e === 112 && B.charCodeAt(le - 3) === 58 && (O = _e);
                  case 8:
                    Ce === 111 && (O = Ce);
                }
              break;
            case 58:
              te + L + K === 0 && (Ye = le);
              break;
            case 44:
              L + J + te + K === 0 && (Ne = 1, rt += "\r");
              break;
            case 34:
            case 39:
              L === 0 && (te = te === Y ? 0 : te === 0 ? Y : te);
              break;
            case 91:
              te + L + J === 0 && K++;
              break;
            case 93:
              te + L + J === 0 && K--;
              break;
            case 41:
              te + L + K === 0 && J--;
              break;
            case 40:
              if (te + L + K === 0) {
                if (re === 0)
                  switch (2 * _e + 3 * Ce) {
                    case 533:
                      break;
                    default:
                      re = 1;
                  }
                J++;
              }
              break;
            case 64:
              L + J + te + K + Ye + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + K + J))
                switch (L) {
                  case 0:
                    switch (2 * Y + 3 * B.charCodeAt(le + 1)) {
                      case 235:
                        L = 47;
                        break;
                      case 220:
                        $e = le, L = 42;
                    }
                    break;
                  case 42:
                    Y === 47 && _e === 42 && $e + 2 !== le && (B.charCodeAt($e + 2) === 33 && (xe += B.substring($e, le + 1)), rt = "", L = 0);
                }
          }
          L === 0 && (ne += rt);
      }
      Ce = _e, _e = Y, le++;
    }
    if ($e = xe.length, 0 < $e) {
      if (Ne = W, 0 < $ && (Et = s(2, xe, Ne, A, R, Z, $e, H, k, H), Et !== void 0 && (xe = Et).length === 0))
        return jr + xe + Br;
      if (xe = Ne.join(",") + "{" + xe + "}", C * O !== 0) {
        switch (C !== 2 || o(xe, 2) || (O = 0), O) {
          case 111:
            xe = xe.replace(M, ":-moz-$1") + xe;
            break;
          case 112:
            xe = xe.replace(D, "::-webkit-input-$1") + xe.replace(D, "::-moz-$1") + xe.replace(D, ":-ms-input-$1") + xe;
        }
        O = 0;
      }
    }
    return jr + xe + Br;
  }
  function t(A, W, B) {
    var H = W.trim().split(v);
    W = H;
    var k = H.length, K = A.length;
    switch (K) {
      case 0:
      case 1:
        var L = 0;
        for (A = K === 0 ? "" : A[0] + " "; L < k; ++L)
          W[L] = e(A, W[L], B).trim();
        break;
      default:
        var J = L = 0;
        for (W = []; L < k; ++L)
          for (var te = 0; te < K; ++te)
            W[J++] = e(A[te] + " ", H[L], B).trim();
    }
    return W;
  }
  function e(A, W, B) {
    var H = W.charCodeAt(0);
    switch (33 > H && (H = (W = W.trim()).charCodeAt(0)), H) {
      case 38:
        return W.replace(y, "$1" + A.trim());
      case 58:
        return A.trim() + W.replace(y, "$1" + A.trim());
      default:
        if (0 < 1 * B && 0 < W.indexOf("\f"))
          return W.replace(y, (A.charCodeAt(0) === 58 ? "" : "$1") + A.trim());
    }
    return A + W;
  }
  function a(A, W, B, H) {
    var k = A + ";", K = 2 * W + 3 * B + 4 * H;
    if (K === 944) {
      A = k.indexOf(":", 9) + 1;
      var L = k.substring(A, k.length - 1).trim();
      return L = k.substring(0, A).trim() + L + ";", C === 1 || C === 2 && o(L, 1) ? "-webkit-" + L + L : L;
    }
    if (C === 0 || C === 2 && !o(k, 1))
      return k;
    switch (K) {
      case 1015:
        return k.charCodeAt(10) === 97 ? "-webkit-" + k + k : k;
      case 951:
        return k.charCodeAt(3) === 116 ? "-webkit-" + k + k : k;
      case 963:
        return k.charCodeAt(5) === 110 ? "-webkit-" + k + k : k;
      case 1009:
        if (k.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + k + k;
      case 978:
        return "-webkit-" + k + "-moz-" + k + k;
      case 1019:
      case 983:
        return "-webkit-" + k + "-moz-" + k + "-ms-" + k + k;
      case 883:
        if (k.charCodeAt(8) === 45)
          return "-webkit-" + k + k;
        if (0 < k.indexOf("image-set(", 11))
          return k.replace(Q, "$1-webkit-$2") + k;
        break;
      case 932:
        if (k.charCodeAt(4) === 45)
          switch (k.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + k.replace("-grow", "") + "-webkit-" + k + "-ms-" + k.replace("grow", "positive") + k;
            case 115:
              return "-webkit-" + k + "-ms-" + k.replace("shrink", "negative") + k;
            case 98:
              return "-webkit-" + k + "-ms-" + k.replace("basis", "preferred-size") + k;
          }
        return "-webkit-" + k + "-ms-" + k + k;
      case 964:
        return "-webkit-" + k + "-ms-flex-" + k + k;
      case 1023:
        if (k.charCodeAt(8) !== 99)
          break;
        return L = k.substring(k.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + L + "-webkit-" + k + "-ms-flex-pack" + L + k;
      case 1005:
        return m.test(k) ? k.replace(h, ":-webkit-") + k.replace(h, ":-moz-") + k : k;
      case 1e3:
        switch (L = k.substring(13).trim(), W = L.indexOf("-") + 1, L.charCodeAt(0) + L.charCodeAt(W)) {
          case 226:
            L = k.replace(g, "tb");
            break;
          case 232:
            L = k.replace(g, "tb-rl");
            break;
          case 220:
            L = k.replace(g, "lr");
            break;
          default:
            return k;
        }
        return "-webkit-" + k + "-ms-" + L + k;
      case 1017:
        if (k.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (W = (k = A).length - 10, L = (k.charCodeAt(W) === 33 ? k.substring(0, W) : k).substring(A.indexOf(":", 7) + 1).trim(), K = L.charCodeAt(0) + (L.charCodeAt(7) | 0)) {
          case 203:
            if (111 > L.charCodeAt(8))
              break;
          case 115:
            k = k.replace(L, "-webkit-" + L) + ";" + k;
            break;
          case 207:
          case 102:
            k = k.replace(L, "-webkit-" + (102 < K ? "inline-" : "") + "box") + ";" + k.replace(L, "-webkit-" + L) + ";" + k.replace(L, "-ms-" + L + "box") + ";" + k;
        }
        return k + ";";
      case 938:
        if (k.charCodeAt(5) === 45)
          switch (k.charCodeAt(6)) {
            case 105:
              return L = k.replace("-items", ""), "-webkit-" + k + "-webkit-box-" + L + "-ms-flex-" + L + k;
            case 115:
              return "-webkit-" + k + "-ms-flex-item-" + k.replace(P, "") + k;
            default:
              return "-webkit-" + k + "-ms-flex-line-pack" + k.replace("align-content", "").replace(P, "") + k;
          }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (I.test(A) === !0)
          return (L = A.substring(A.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(A.replace("stretch", "fill-available"), W, B, H).replace(":fill-available", ":stretch") : k.replace(L, "-webkit-" + L) + k.replace(L, "-moz-" + L.replace("fill-", "")) + k;
        break;
      case 962:
        if (k = "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k, B + H === 211 && k.charCodeAt(13) === 105 && 0 < k.indexOf("transform", 10))
          return k.substring(0, k.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + k;
    }
    return k;
  }
  function o(A, W) {
    var B = A.indexOf(W === 1 ? ":" : "{"), H = A.substring(0, W !== 3 ? B : 10);
    return B = A.substring(B + 1, A.length - 1), V(W !== 2 ? H : H.replace(T, "$1"), B, W);
  }
  function i(A, W) {
    var B = a(W, W.charCodeAt(0), W.charCodeAt(1), W.charCodeAt(2));
    return B !== W + ";" ? B.replace(w, " or ($1)").substring(4) : "(" + W + ")";
  }
  function s(A, W, B, H, k, K, L, J, te, re) {
    for (var Y = 0, _e = W, Ce; Y < $; ++Y)
      switch (Ce = _[Y].call(u, A, _e, B, H, k, K, L, J, te, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          _e = Ce;
      }
    if (_e !== W)
      return _e;
  }
  function c(A) {
    switch (A) {
      case void 0:
      case null:
        $ = _.length = 0;
        break;
      default:
        if (typeof A == "function")
          _[$++] = A;
        else if (typeof A == "object")
          for (var W = 0, B = A.length; W < B; ++W)
            c(A[W]);
        else
          X = !!A | 0;
    }
    return c;
  }
  function l(A) {
    return A = A.prefix, A !== void 0 && (V = null, A ? typeof A != "function" ? C = 1 : (C = 2, V = A) : C = 0), l;
  }
  function u(A, W) {
    var B = A;
    if (33 > B.charCodeAt(0) && (B = B.trim()), ee = B, B = [ee], 0 < $) {
      var H = s(-1, W, B, B, R, Z, 0, 0, 0, 0);
      H !== void 0 && typeof H == "string" && (W = H);
    }
    var k = r(N, B, W, 0, 0);
    return 0 < $ && (H = s(-2, k, B, B, R, Z, k.length, 0, 0, 0), H !== void 0 && (k = H)), ee = "", O = 0, Z = R = 1, k;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, h = /: */g, m = /zoo|gra/, p = /([,: ])(transform)/g, v = /,\r+?/g, y = /([\t\r\n ])*\f?&/g, b = /@(k\w+)\s*(\S*)\s*/, D = /::(place)/g, M = /:(read-only)/g, g = /[svh]\w+-[tblr]{2}/, x = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, P = /-self|flex-/g, T = /[^]*?(:[rp][el]a[\w-]+)[^]*/, I = /stretch|:\s*\w+\-(?:conte|avail)/, Q = /([^-])(image-set\()/, Z = 1, R = 1, O = 0, C = 1, N = [], _ = [], $ = 0, V = null, X = 0, ee = "";
  return u.use = c, u.set = l, n !== void 0 && l(n), u;
}
var lc = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function uc(n) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = n(t)), r[t];
  };
}
var dc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wo = /* @__PURE__ */ uc(
  function(n) {
    return dc.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
), sa = {}, fc = {
  get exports() {
    return sa;
  },
  set exports(n) {
    sa = n;
  }
}, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function pc() {
  if (bo)
    return ue;
  bo = 1;
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, e = n ? Symbol.for("react.fragment") : 60107, a = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, s = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, f = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115, m = n ? Symbol.for("react.lazy") : 60116, p = n ? Symbol.for("react.block") : 60121, v = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
  function D(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case r:
          switch (g = g.type, g) {
            case c:
            case l:
            case e:
            case o:
            case a:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case u:
                case m:
                case h:
                case i:
                  return g;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  function M(g) {
    return D(g) === l;
  }
  return ue.AsyncMode = c, ue.ConcurrentMode = l, ue.ContextConsumer = s, ue.ContextProvider = i, ue.Element = r, ue.ForwardRef = u, ue.Fragment = e, ue.Lazy = m, ue.Memo = h, ue.Portal = t, ue.Profiler = o, ue.StrictMode = a, ue.Suspense = d, ue.isAsyncMode = function(g) {
    return M(g) || D(g) === c;
  }, ue.isConcurrentMode = M, ue.isContextConsumer = function(g) {
    return D(g) === s;
  }, ue.isContextProvider = function(g) {
    return D(g) === i;
  }, ue.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }, ue.isForwardRef = function(g) {
    return D(g) === u;
  }, ue.isFragment = function(g) {
    return D(g) === e;
  }, ue.isLazy = function(g) {
    return D(g) === m;
  }, ue.isMemo = function(g) {
    return D(g) === h;
  }, ue.isPortal = function(g) {
    return D(g) === t;
  }, ue.isProfiler = function(g) {
    return D(g) === o;
  }, ue.isStrictMode = function(g) {
    return D(g) === a;
  }, ue.isSuspense = function(g) {
    return D(g) === d;
  }, ue.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === e || g === l || g === o || g === a || g === d || g === f || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === h || g.$$typeof === i || g.$$typeof === s || g.$$typeof === u || g.$$typeof === v || g.$$typeof === y || g.$$typeof === b || g.$$typeof === p);
  }, ue.typeOf = D, ue;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function hc() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, e = n ? Symbol.for("react.fragment") : 60107, a = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, s = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, f = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115, m = n ? Symbol.for("react.lazy") : 60116, p = n ? Symbol.for("react.block") : 60121, v = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
    function D(Y) {
      return typeof Y == "string" || typeof Y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Y === e || Y === l || Y === o || Y === a || Y === d || Y === f || typeof Y == "object" && Y !== null && (Y.$$typeof === m || Y.$$typeof === h || Y.$$typeof === i || Y.$$typeof === s || Y.$$typeof === u || Y.$$typeof === v || Y.$$typeof === y || Y.$$typeof === b || Y.$$typeof === p);
    }
    function M(Y) {
      if (typeof Y == "object" && Y !== null) {
        var _e = Y.$$typeof;
        switch (_e) {
          case r:
            var Ce = Y.type;
            switch (Ce) {
              case c:
              case l:
              case e:
              case o:
              case a:
              case d:
                return Ce;
              default:
                var oe = Ce && Ce.$$typeof;
                switch (oe) {
                  case s:
                  case u:
                  case m:
                  case h:
                  case i:
                    return oe;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var g = c, x = l, w = s, P = i, T = r, I = u, Q = e, Z = m, R = h, O = t, C = o, N = a, _ = d, $ = !1;
    function V(Y) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(Y) || M(Y) === c;
    }
    function X(Y) {
      return M(Y) === l;
    }
    function ee(Y) {
      return M(Y) === s;
    }
    function A(Y) {
      return M(Y) === i;
    }
    function W(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === r;
    }
    function B(Y) {
      return M(Y) === u;
    }
    function H(Y) {
      return M(Y) === e;
    }
    function k(Y) {
      return M(Y) === m;
    }
    function K(Y) {
      return M(Y) === h;
    }
    function L(Y) {
      return M(Y) === t;
    }
    function J(Y) {
      return M(Y) === o;
    }
    function te(Y) {
      return M(Y) === a;
    }
    function re(Y) {
      return M(Y) === d;
    }
    de.AsyncMode = g, de.ConcurrentMode = x, de.ContextConsumer = w, de.ContextProvider = P, de.Element = T, de.ForwardRef = I, de.Fragment = Q, de.Lazy = Z, de.Memo = R, de.Portal = O, de.Profiler = C, de.StrictMode = N, de.Suspense = _, de.isAsyncMode = V, de.isConcurrentMode = X, de.isContextConsumer = ee, de.isContextProvider = A, de.isElement = W, de.isForwardRef = B, de.isFragment = H, de.isLazy = k, de.isMemo = K, de.isPortal = L, de.isProfiler = J, de.isStrictMode = te, de.isSuspense = re, de.isValidElementType = D, de.typeOf = M;
  }()), de;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = pc() : n.exports = hc();
})(fc);
var za = sa, mc = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, vc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, gc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Va = {};
Va[za.ForwardRef] = gc;
Va[za.Memo] = Bi;
function Do(n) {
  return za.isMemo(n) ? Bi : Va[n.$$typeof] || mc;
}
var yc = Object.defineProperty, wc = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, bc = Object.getOwnPropertyDescriptor, kc = Object.getPrototypeOf, xo = Object.prototype;
function ji(n, r, t) {
  if (typeof r != "string") {
    if (xo) {
      var e = kc(r);
      e && e !== xo && ji(n, e, t);
    }
    var a = wc(r);
    _o && (a = a.concat(_o(r)));
    for (var o = Do(n), i = Do(r), s = 0; s < a.length; ++s) {
      var c = a[s];
      if (!vc[c] && !(t && t[c]) && !(i && i[c]) && !(o && o[c])) {
        var l = bc(r, c);
        try {
          yc(n, c, l);
        } catch {
        }
      }
    }
  }
  return n;
}
var Dc = ji;
function at() {
  return (at = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
  }).apply(this, arguments);
}
var Mo = function(n, r) {
  for (var t = [n[0]], e = 0, a = r.length; e < a; e += 1)
    t.push(r[e], n[e + 1]);
  return t;
}, ca = function(n) {
  return n !== null && typeof n == "object" && (n.toString ? n.toString() : Object.prototype.toString.call(n)) === "[object Object]" && !Fn.typeOf(n);
}, mr = Object.freeze([]), Yt = Object.freeze({});
function fn(n) {
  return typeof n == "function";
}
function la(n) {
  return process.env.NODE_ENV !== "production" && typeof n == "string" && n || n.displayName || n.name || "Component";
}
function Ba(n) {
  return n && typeof n.styledComponentId == "string";
}
var pn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ja = typeof window < "u" && "HTMLElement" in window, _c = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), xc = {}, Mc = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Sc() {
  for (var n = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, e = arguments.length; t < e; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function bt(n) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)
    t[e - 1] = arguments[e];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + n + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Sc.apply(void 0, [Mc[n]].concat(t)).trim());
}
var Cc = function() {
  function n(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = n.prototype;
  return r.indexOfGroup = function(t) {
    for (var e = 0, a = 0; a < t; a++)
      e += this.groupSizes[a];
    return e;
  }, r.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, i = o; t >= i; )
        (i <<= 1) < 0 && bt(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(a), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), l = 0, u = e.length; l < u; l++)
      this.tag.insertRule(c, e[l]) && (this.groupSizes[t]++, c++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], a = this.indexOfGroup(t), o = a + e;
      this.groupSizes[t] = 0;
      for (var i = a; i < o; i++)
        this.tag.deleteRule(a);
    }
  }, r.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return e;
    for (var a = this.groupSizes[t], o = this.indexOfGroup(t), i = o + a, s = o; s < i; s++)
      e += this.tag.getRule(s) + `/*!sc*/
`;
    return e;
  }, n;
}(), sr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), An = 1, Xn = function(n) {
  if (sr.has(n))
    return sr.get(n);
  for (; vr.has(An); )
    An++;
  var r = An++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && bt(16, "" + r), sr.set(n, r), vr.set(r, n), r;
}, Pc = function(n) {
  return vr.get(n);
}, Ec = function(n, r) {
  r >= An && (An = r + 1), sr.set(n, r), vr.set(r, n);
}, Tc = "style[" + pn + '][data-styled-version="5.3.8"]', Oc = new RegExp("^" + pn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Nc = function(n, r, t) {
  for (var e, a = t.split(","), o = 0, i = a.length; o < i; o++)
    (e = a[o]) && n.registerName(r, e);
}, $c = function(n, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), e = [], a = 0, o = t.length; a < o; a++) {
    var i = t[a].trim();
    if (i) {
      var s = i.match(Oc);
      if (s) {
        var c = 0 | parseInt(s[1], 10), l = s[2];
        c !== 0 && (Ec(l, c), Nc(n, l, s[3]), n.getTag().insertRules(c, e)), e.length = 0;
      } else
        e.push(i);
    }
  }
}, Rc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Zi = function(n) {
  var r = document.head, t = n || r, e = document.createElement("style"), a = function(s) {
    for (var c = s.childNodes, l = c.length; l >= 0; l--) {
      var u = c[l];
      if (u && u.nodeType === 1 && u.hasAttribute(pn))
        return u;
    }
  }(t), o = a !== void 0 ? a.nextSibling : null;
  e.setAttribute(pn, "active"), e.setAttribute("data-styled-version", "5.3.8");
  var i = Rc();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, o), e;
}, Yc = function() {
  function n(t) {
    var e = this.element = Zi(t);
    e.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var o = document.styleSheets, i = 0, s = o.length; i < s; i++) {
        var c = o[i];
        if (c.ownerNode === a)
          return c;
      }
      bt(17);
    }(e), this.length = 0;
  }
  var r = n.prototype;
  return r.insertRule = function(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var e = this.sheet.cssRules[t];
    return e !== void 0 && typeof e.cssText == "string" ? e.cssText : "";
  }, n;
}(), Ic = function() {
  function n(t) {
    var e = this.element = Zi(t);
    this.nodes = e.childNodes, this.length = 0;
  }
  var r = n.prototype;
  return r.insertRule = function(t, e) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(e), o = this.nodes[t];
      return this.element.insertBefore(a, o || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, n;
}(), Lc = function() {
  function n(t) {
    this.rules = [], this.length = 0;
  }
  var r = n.prototype;
  return r.insertRule = function(t, e) {
    return t <= this.length && (this.rules.splice(t, 0, e), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, n;
}(), So = ja, Ac = { isServer: !ja, useCSSOMInjection: !_c }, gr = function() {
  function n(t, e, a) {
    t === void 0 && (t = Yt), e === void 0 && (e = {}), this.options = at({}, Ac, {}, t), this.gs = e, this.names = new Map(a), this.server = !!t.isServer, !this.server && ja && So && (So = !1, function(o) {
      for (var i = document.querySelectorAll(Tc), s = 0, c = i.length; s < c; s++) {
        var l = i[s];
        l && l.getAttribute(pn) !== "active" && ($c(o, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this));
  }
  n.registerId = function(t) {
    return Xn(t);
  };
  var r = n.prototype;
  return r.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new n(at({}, this.options, {}, t), this.gs, e && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (a = (e = this.options).isServer, o = e.useCSSOMInjection, i = e.target, t = a ? new Lc(i) : o ? new Yc(i) : new Ic(i), new Cc(t)));
    var t, e, a, o, i;
  }, r.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, r.registerName = function(t, e) {
    if (Xn(t), this.names.has(t))
      this.names.get(t).add(e);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(e), this.names.set(t, a);
    }
  }, r.insertRules = function(t, e, a) {
    this.registerName(t, e), this.getTag().insertRules(Xn(t), a);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Xn(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var e = t.getTag(), a = e.length, o = "", i = 0; i < a; i++) {
        var s = Pc(i);
        if (s !== void 0) {
          var c = t.names.get(s), l = e.getGroup(i);
          if (c && l && c.size) {
            var u = pn + ".g" + i + '[id="' + s + '"]', d = "";
            c !== void 0 && c.forEach(function(f) {
              f.length > 0 && (d += f + ",");
            }), o += "" + l + u + '{content:"' + d + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, n;
}(), Wc = /(a)(d)/gi, Co = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function ua(n) {
  var r, t = "";
  for (r = Math.abs(n); r > 52; r = r / 52 | 0)
    t = Co(r % 52) + t;
  return (Co(r % 52) + t).replace(Wc, "$1-$2");
}
var zt = function(n, r) {
  for (var t = r.length; t; )
    n = 33 * n ^ r.charCodeAt(--t);
  return n;
}, Qi = function(n) {
  return zt(5381, n);
};
function Gi(n) {
  for (var r = 0; r < n.length; r += 1) {
    var t = n[r];
    if (fn(t) && !Ba(t))
      return !1;
  }
  return !0;
}
var Fc = Qi("5.3.8"), Hc = function() {
  function n(r, t, e) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (e === void 0 || e.isStatic) && Gi(r), this.componentId = t, this.baseHash = zt(Fc, t), this.baseStyle = e, gr.registerId(t);
  }
  return n.prototype.generateAndInjectStyles = function(r, t, e) {
    var a = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(r, t, e)), this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(a, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var i = Ut(this.rules, r, t, e).join(""), s = ua(zt(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(a, s)) {
          var c = e(i, "." + s, void 0, a);
          t.insertRules(a, s, c);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var l = this.rules.length, u = zt(this.baseHash, e.hash), d = "", f = 0; f < l; f++) {
        var h = this.rules[f];
        if (typeof h == "string")
          d += h, process.env.NODE_ENV !== "production" && (u = zt(u, h + f));
        else if (h) {
          var m = Ut(h, r, t, e), p = Array.isArray(m) ? m.join("") : m;
          u = zt(u, p + f), d += p;
        }
      }
      if (d) {
        var v = ua(u >>> 0);
        if (!t.hasNameForId(a, v)) {
          var y = e(d, "." + v, void 0, a);
          t.insertRules(a, v, y);
        }
        o.push(v);
      }
    }
    return o.join(" ");
  }, n;
}(), zc = /^\s*\/\/.*$/gm, Vc = [":", "[", ".", "#"];
function Bc(n) {
  var r, t, e, a, o = n === void 0 ? Yt : n, i = o.options, s = i === void 0 ? Yt : i, c = o.plugins, l = c === void 0 ? mr : c, u = new cc(s), d = [], f = function(p) {
    function v(y) {
      if (y)
        try {
          p(y + "}");
        } catch {
        }
    }
    return function(y, b, D, M, g, x, w, P, T, I) {
      switch (y) {
        case 1:
          if (T === 0 && b.charCodeAt(0) === 64)
            return p(b + ";"), "";
          break;
        case 2:
          if (P === 0)
            return b + "/*|*/";
          break;
        case 3:
          switch (P) {
            case 102:
            case 112:
              return p(D[0] + b), "";
            default:
              return b + (I === 0 ? "/*|*/" : "");
          }
        case -2:
          b.split("/*|*/}").forEach(v);
      }
    };
  }(function(p) {
    d.push(p);
  }), h = function(p, v, y) {
    return v === 0 && Vc.indexOf(y[t.length]) !== -1 || y.match(a) ? p : "." + r;
  };
  function m(p, v, y, b) {
    b === void 0 && (b = "&");
    var D = p.replace(zc, ""), M = v && y ? y + " " + v + " { " + D + " }" : D;
    return r = b, t = v, e = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), u(y || !v ? "" : v, M);
  }
  return u.use([].concat(l, [function(p, v, y) {
    p === 2 && y.length && y[0].lastIndexOf(t) > 0 && (y[0] = y[0].replace(e, h));
  }, f, function(p) {
    if (p === -2) {
      var v = d;
      return d = [], v;
    }
  }])), m.hash = l.length ? l.reduce(function(p, v) {
    return v.name || bt(15), zt(p, v.name);
  }, 5381).toString() : "", m;
}
var qi = S.createContext();
qi.Consumer;
var Ui = S.createContext(), jc = (Ui.Consumer, new gr()), da = Bc();
function Xi() {
  return St(qi) || jc;
}
function Ki() {
  return St(Ui) || da;
}
var Ji = function() {
  function n(r, t) {
    var e = this;
    this.inject = function(a, o) {
      o === void 0 && (o = da);
      var i = e.name + o.hash;
      a.hasNameForId(e.id, i) || a.insertRules(e.id, i, o(e.rules, i, "@keyframes"));
    }, this.toString = function() {
      return bt(12, String(e.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return n.prototype.getName = function(r) {
    return r === void 0 && (r = da), this.name + r.hash;
  }, n;
}(), Zc = /([A-Z])/, Qc = /([A-Z])/g, Gc = /^ms-/, qc = function(n) {
  return "-" + n.toLowerCase();
};
function Po(n) {
  return Zc.test(n) ? n.replace(Qc, qc).replace(Gc, "-ms-") : n;
}
var Eo = function(n) {
  return n == null || n === !1 || n === "";
};
function Ut(n, r, t, e) {
  if (Array.isArray(n)) {
    for (var a, o = [], i = 0, s = n.length; i < s; i += 1)
      (a = Ut(n[i], r, t, e)) !== "" && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
    return o;
  }
  if (Eo(n))
    return "";
  if (Ba(n))
    return "." + n.styledComponentId;
  if (fn(n)) {
    if (typeof (l = n) != "function" || l.prototype && l.prototype.isReactComponent || !r)
      return n;
    var c = n(r);
    return process.env.NODE_ENV !== "production" && Fn.isElement(c) && console.warn(la(n) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ut(c, r, t, e);
  }
  var l;
  return n instanceof Ji ? t ? (n.inject(t, e), n.getName(e)) : n : ca(n) ? function u(d, f) {
    var h, m, p = [];
    for (var v in d)
      d.hasOwnProperty(v) && !Eo(d[v]) && (Array.isArray(d[v]) && d[v].isCss || fn(d[v]) ? p.push(Po(v) + ":", d[v], ";") : ca(d[v]) ? p.push.apply(p, u(d[v], v)) : p.push(Po(v) + ": " + (h = v, (m = d[v]) == null || typeof m == "boolean" || m === "" ? "" : typeof m != "number" || m === 0 || h in lc ? String(m).trim() : m + "px") + ";"));
    return f ? [f + " {"].concat(p, ["}"]) : p;
  }(n) : n.toString();
}
var To = function(n) {
  return Array.isArray(n) && (n.isCss = !0), n;
};
function Za(n) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)
    t[e - 1] = arguments[e];
  return fn(n) || ca(n) ? To(Ut(Mo(mr, [n].concat(t)))) : t.length === 0 && n.length === 1 && typeof n[0] == "string" ? n : To(Ut(Mo(n, t)));
}
var Oo = /invalid hook call/i, Kn = /* @__PURE__ */ new Set(), es = function(n, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + n + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var a = !0;
      console.error = function(o) {
        if (Oo.test(o))
          a = !1, Kn.delete(t);
        else {
          for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
            s[c - 1] = arguments[c];
          e.apply(void 0, [o].concat(s));
        }
      }, Ae(), a && !Kn.has(t) && (console.warn(t), Kn.add(t));
    } catch (o) {
      Oo.test(o.message) && Kn.delete(t);
    } finally {
      console.error = e;
    }
  }
}, ts = function(n, r, t) {
  return t === void 0 && (t = Yt), n.theme !== t.theme && n.theme || r || t.theme;
}, Uc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xc = /(^-|-$)/g;
function Zr(n) {
  return n.replace(Uc, "-").replace(Xc, "");
}
var Qa = function(n) {
  return ua(Qi(n) >>> 0);
};
function Jn(n) {
  return typeof n == "string" && (process.env.NODE_ENV === "production" || n.charAt(0) === n.charAt(0).toLowerCase());
}
var fa = function(n) {
  return typeof n == "function" || typeof n == "object" && n !== null && !Array.isArray(n);
}, Kc = function(n) {
  return n !== "__proto__" && n !== "constructor" && n !== "prototype";
};
function Jc(n, r, t) {
  var e = n[t];
  fa(r) && fa(e) ? ns(e, r) : n[t] = r;
}
function ns(n) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)
    t[e - 1] = arguments[e];
  for (var a = 0, o = t; a < o.length; a++) {
    var i = o[a];
    if (fa(i))
      for (var s in i)
        Kc(s) && Jc(n, i[s], s);
  }
  return n;
}
var hn = S.createContext();
hn.Consumer;
function el(n) {
  var r = St(hn), t = $t(function() {
    return function(e, a) {
      if (!e)
        return bt(14);
      if (fn(e)) {
        var o = e(a);
        return process.env.NODE_ENV === "production" || o !== null && !Array.isArray(o) && typeof o == "object" ? o : bt(7);
      }
      return Array.isArray(e) || typeof e != "object" ? bt(8) : a ? at({}, a, {}, e) : e;
    }(n.theme, r);
  }, [n.theme, r]);
  return n.children ? S.createElement(hn.Provider, { value: t }, n.children) : null;
}
var Qr = {};
function rs(n, r, t) {
  var e = Ba(n), a = !Jn(n), o = r.attrs, i = o === void 0 ? mr : o, s = r.componentId, c = s === void 0 ? function(b, D) {
    var M = typeof b != "string" ? "sc" : Zr(b);
    Qr[M] = (Qr[M] || 0) + 1;
    var g = M + "-" + Qa("5.3.8" + M + Qr[M]);
    return D ? D + "-" + g : g;
  }(r.displayName, r.parentComponentId) : s, l = r.displayName, u = l === void 0 ? function(b) {
    return Jn(b) ? "styled." + b : "Styled(" + la(b) + ")";
  }(n) : l, d = r.displayName && r.componentId ? Zr(r.displayName) + "-" + r.componentId : r.componentId || c, f = e && n.attrs ? Array.prototype.concat(n.attrs, i).filter(Boolean) : i, h = r.shouldForwardProp;
  e && n.shouldForwardProp && (h = r.shouldForwardProp ? function(b, D, M) {
    return n.shouldForwardProp(b, D, M) && r.shouldForwardProp(b, D, M);
  } : n.shouldForwardProp);
  var m, p = new Hc(t, d, e ? n.componentStyle : void 0), v = p.isStatic && i.length === 0, y = function(b, D) {
    return function(M, g, x, w) {
      var P = M.attrs, T = M.componentStyle, I = M.defaultProps, Q = M.foldedComponentIds, Z = M.shouldForwardProp, R = M.styledComponentId, O = M.target;
      process.env.NODE_ENV !== "production" && vo(R);
      var C = function(H, k, K) {
        H === void 0 && (H = Yt);
        var L = at({}, k, { theme: H }), J = {};
        return K.forEach(function(te) {
          var re, Y, _e, Ce = te;
          for (re in fn(Ce) && (Ce = Ce(L)), Ce)
            L[re] = J[re] = re === "className" ? (Y = J[re], _e = Ce[re], Y && _e ? Y + " " + _e : Y || _e) : Ce[re];
        }), [L, J];
      }(ts(g, St(hn), I) || Yt, g, P), N = C[0], _ = C[1], $ = function(H, k, K, L) {
        var J = Xi(), te = Ki(), re = k ? H.generateAndInjectStyles(Yt, J, te) : H.generateAndInjectStyles(K, J, te);
        return process.env.NODE_ENV !== "production" && vo(re), process.env.NODE_ENV !== "production" && !k && L && L(re), re;
      }(T, w, N, process.env.NODE_ENV !== "production" ? M.warnTooManyClasses : void 0), V = x, X = _.$as || g.$as || _.as || g.as || O, ee = Jn(X), A = _ !== g ? at({}, g, {}, _) : g, W = {};
      for (var B in A)
        B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? W.as = A[B] : (Z ? Z(B, wo, X) : !ee || wo(B)) && (W[B] = A[B]));
      return g.style && _.style !== g.style && (W.style = at({}, g.style, {}, _.style)), W.className = Array.prototype.concat(Q, R, $ !== R ? $ : null, g.className, _.className).filter(Boolean).join(" "), W.ref = V, Hi(X, W);
    }(m, b, D, v);
  };
  return y.displayName = u, (m = S.forwardRef(y)).attrs = f, m.componentStyle = p, m.displayName = u, m.shouldForwardProp = h, m.foldedComponentIds = e ? Array.prototype.concat(n.foldedComponentIds, n.styledComponentId) : mr, m.styledComponentId = d, m.target = e ? n.target : n, m.withComponent = function(b) {
    var D = r.componentId, M = function(x, w) {
      if (x == null)
        return {};
      var P, T, I = {}, Q = Object.keys(x);
      for (T = 0; T < Q.length; T++)
        P = Q[T], w.indexOf(P) >= 0 || (I[P] = x[P]);
      return I;
    }(r, ["componentId"]), g = D && D + "-" + (Jn(b) ? b : Zr(la(b)));
    return rs(b, at({}, M, { attrs: f, componentId: g }), t);
  }, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = e ? ns({}, n.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (es(u, d), m.warnTooManyClasses = function(b, D) {
    var M = {}, g = !1;
    return function(x) {
      if (!g && (M[x] = !0, Object.keys(M).length >= 200)) {
        var w = D ? ' with the id of "' + D + '"' : "";
        console.warn("Over 200 classes were generated for component " + b + w + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, M = {};
      }
    };
  }(u, d)), m.toString = function() {
    return "." + m.styledComponentId;
  }, a && Dc(m, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), m;
}
var pa = function(n) {
  return function r(t, e, a) {
    if (a === void 0 && (a = Yt), !Fn.isValidElementType(e))
      return bt(1, String(e));
    var o = function() {
      return t(e, a, Za.apply(void 0, arguments));
    };
    return o.withConfig = function(i) {
      return r(t, e, at({}, a, {}, i));
    }, o.attrs = function(i) {
      return r(t, e, at({}, a, { attrs: Array.prototype.concat(a.attrs, i).filter(Boolean) }));
    }, o;
  }(rs, n);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(n) {
  pa[n] = pa(n);
});
var tl = function() {
  function n(t, e) {
    this.rules = t, this.componentId = e, this.isStatic = Gi(t), gr.registerId(this.componentId + 1);
  }
  var r = n.prototype;
  return r.createStyles = function(t, e, a, o) {
    var i = o(Ut(this.rules, e, a, o).join(""), ""), s = this.componentId + t;
    a.insertRules(s, s, i);
  }, r.removeStyles = function(t, e) {
    e.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, e, a, o) {
    t > 2 && gr.registerId(this.componentId + t), this.removeStyles(t, a), this.createStyles(t, e, a, o);
  }, n;
}();
function nl(n) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)
    t[e - 1] = arguments[e];
  var a = Za.apply(void 0, [n].concat(t)), o = "sc-global-" + Qa(JSON.stringify(a)), i = new tl(a, o);
  function s(l) {
    var u = Xi(), d = Ki(), f = St(hn), h = Ae(u.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && S.Children.count(l.children) && console.warn("The global style component " + o + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && a.some(function(m) {
      return typeof m == "string" && m.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.server && c(h, l, u, f, d), Rr(function() {
      if (!u.server)
        return c(h, l, u, f, d), function() {
          return i.removeStyles(h, u);
        };
    }, [h, l, u, f, d]), null;
  }
  function c(l, u, d, f, h) {
    if (i.isStatic)
      i.renderStyles(l, xc, d, h);
    else {
      var m = at({}, u, { theme: ts(u, f, s.defaultProps) });
      i.renderStyles(l, m, d, h);
    }
  }
  return process.env.NODE_ENV !== "production" && es(o), S.memo(s);
}
function rl(n) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)
    t[e - 1] = arguments[e];
  var a = Za.apply(void 0, [n].concat(t)).join(""), o = Qa(a);
  return new Ji(o, a);
}
var nn = function() {
  return St(hn);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const U = pa, Yn = "reactSchedulerOutsideWrapper", al = nl`

  #${Yn} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Yn} *,
 #${Yn} *:before,
 #${Yn} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ol = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB"
  }
}, il = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2"
  }
}, _n = `
margin: 0;
padding: 0;
`, as = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
U.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Ge = 50, Ct = 24, xn = 16, jt = 40, mn = jt + xn + Ct, At = 84, Xe = 80, tt = 250, wt = 12, je = 50, vn = 24, Hn = 16, ha = 40, sl = vn + Hn + ha, No = 1, it = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, ln = 3, cl = 1.6, ll = 4.5, ma = 12, yr = 24, ul = "reactSchedulerCanvasHeaderWrapper", os = "reactSchedulerCanvasWrapper", Xt = Yn, dl = 4, fl = 48, Tt = 5, pl = 40, $o = 8, Ga = Ct / 2 + 2, is = xn / 2 + Ct + 1, Ro = 2, ze = 60;
var Kt = {}, hl = {
  get exports() {
    return Kt;
  },
  set exports(n) {
    Kt = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    var t = 1e3, e = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", c = "hour", l = "day", u = "week", d = "month", f = "quarter", h = "year", m = "date", p = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var O = ["th", "st", "nd", "rd"], C = R % 100;
      return "[" + R + (O[(C - 20) % 10] || O[C] || O[0]) + "]";
    } }, D = function(R, O, C) {
      var N = String(R);
      return !N || N.length >= O ? R : "" + Array(O + 1 - N.length).join(C) + R;
    }, M = { s: D, z: function(R) {
      var O = -R.utcOffset(), C = Math.abs(O), N = Math.floor(C / 60), _ = C % 60;
      return (O <= 0 ? "+" : "-") + D(N, 2, "0") + ":" + D(_, 2, "0");
    }, m: function R(O, C) {
      if (O.date() < C.date())
        return -R(C, O);
      var N = 12 * (C.year() - O.year()) + (C.month() - O.month()), _ = O.clone().add(N, d), $ = C - _ < 0, V = O.clone().add(N + ($ ? -1 : 1), d);
      return +(-(N + (C - _) / ($ ? _ - V : V - _)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: d, y: h, w: u, d: l, D: m, h: c, m: s, s: i, ms: o, Q: f }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, g = "en", x = {};
    x[g] = b;
    var w = function(R) {
      return R instanceof Q;
    }, P = function R(O, C, N) {
      var _;
      if (!O)
        return g;
      if (typeof O == "string") {
        var $ = O.toLowerCase();
        x[$] && (_ = $), C && (x[$] = C, _ = $);
        var V = O.split("-");
        if (!_ && V.length > 1)
          return R(V[0]);
      } else {
        var X = O.name;
        x[X] = O, _ = X;
      }
      return !N && _ && (g = _), _ || !N && g;
    }, T = function(R, O) {
      if (w(R))
        return R.clone();
      var C = typeof O == "object" ? O : {};
      return C.date = R, C.args = arguments, new Q(C);
    }, I = M;
    I.l = P, I.i = w, I.w = function(R, O) {
      return T(R, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
    };
    var Q = function() {
      function R(C) {
        this.$L = P(C.locale, null, !0), this.parse(C);
      }
      var O = R.prototype;
      return O.parse = function(C) {
        this.$d = function(N) {
          var _ = N.date, $ = N.utc;
          if (_ === null)
            return new Date(NaN);
          if (I.u(_))
            return new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var V = _.match(v);
            if (V) {
              var X = V[2] - 1 || 0, ee = (V[7] || "0").substring(0, 3);
              return $ ? new Date(Date.UTC(V[1], X, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, ee)) : new Date(V[1], X, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, ee);
            }
          }
          return new Date(_);
        }(C), this.$x = C.x || {}, this.init();
      }, O.init = function() {
        var C = this.$d;
        this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
      }, O.$utils = function() {
        return I;
      }, O.isValid = function() {
        return this.$d.toString() !== p;
      }, O.isSame = function(C, N) {
        var _ = T(C);
        return this.startOf(N) <= _ && _ <= this.endOf(N);
      }, O.isAfter = function(C, N) {
        return T(C) < this.startOf(N);
      }, O.isBefore = function(C, N) {
        return this.endOf(N) < T(C);
      }, O.$g = function(C, N, _) {
        return I.u(C) ? this[N] : this.set(_, C);
      }, O.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, O.valueOf = function() {
        return this.$d.getTime();
      }, O.startOf = function(C, N) {
        var _ = this, $ = !!I.u(N) || N, V = I.p(C), X = function(L, J) {
          var te = I.w(_.$u ? Date.UTC(_.$y, J, L) : new Date(_.$y, J, L), _);
          return $ ? te : te.endOf(l);
        }, ee = function(L, J) {
          return I.w(_.toDate()[L].apply(_.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), _);
        }, A = this.$W, W = this.$M, B = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (V) {
          case h:
            return $ ? X(1, 0) : X(31, 11);
          case d:
            return $ ? X(1, W) : X(0, W + 1);
          case u:
            var k = this.$locale().weekStart || 0, K = (A < k ? A + 7 : A) - k;
            return X($ ? B - K : B + (6 - K), W);
          case l:
          case m:
            return ee(H + "Hours", 0);
          case c:
            return ee(H + "Minutes", 1);
          case s:
            return ee(H + "Seconds", 2);
          case i:
            return ee(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, O.endOf = function(C) {
        return this.startOf(C, !1);
      }, O.$set = function(C, N) {
        var _, $ = I.p(C), V = "set" + (this.$u ? "UTC" : ""), X = (_ = {}, _[l] = V + "Date", _[m] = V + "Date", _[d] = V + "Month", _[h] = V + "FullYear", _[c] = V + "Hours", _[s] = V + "Minutes", _[i] = V + "Seconds", _[o] = V + "Milliseconds", _)[$], ee = $ === l ? this.$D + (N - this.$W) : N;
        if ($ === d || $ === h) {
          var A = this.clone().set(m, 1);
          A.$d[X](ee), A.init(), this.$d = A.set(m, Math.min(this.$D, A.daysInMonth())).$d;
        } else
          X && this.$d[X](ee);
        return this.init(), this;
      }, O.set = function(C, N) {
        return this.clone().$set(C, N);
      }, O.get = function(C) {
        return this[I.p(C)]();
      }, O.add = function(C, N) {
        var _, $ = this;
        C = Number(C);
        var V = I.p(N), X = function(W) {
          var B = T($);
          return I.w(B.date(B.date() + Math.round(W * C)), $);
        };
        if (V === d)
          return this.set(d, this.$M + C);
        if (V === h)
          return this.set(h, this.$y + C);
        if (V === l)
          return X(1);
        if (V === u)
          return X(7);
        var ee = (_ = {}, _[s] = e, _[c] = a, _[i] = t, _)[V] || 1, A = this.$d.getTime() + C * ee;
        return I.w(A, this);
      }, O.subtract = function(C, N) {
        return this.add(-1 * C, N);
      }, O.format = function(C) {
        var N = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || p;
        var $ = C || "YYYY-MM-DDTHH:mm:ssZ", V = I.z(this), X = this.$H, ee = this.$m, A = this.$M, W = _.weekdays, B = _.months, H = function(J, te, re, Y) {
          return J && (J[te] || J(N, $)) || re[te].slice(0, Y);
        }, k = function(J) {
          return I.s(X % 12 || 12, J, "0");
        }, K = _.meridiem || function(J, te, re) {
          var Y = J < 12 ? "AM" : "PM";
          return re ? Y.toLowerCase() : Y;
        }, L = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: A + 1, MM: I.s(A + 1, 2, "0"), MMM: H(_.monthsShort, A, B, 3), MMMM: H(B, A), D: this.$D, DD: I.s(this.$D, 2, "0"), d: String(this.$W), dd: H(_.weekdaysMin, this.$W, W, 2), ddd: H(_.weekdaysShort, this.$W, W, 3), dddd: W[this.$W], H: String(X), HH: I.s(X, 2, "0"), h: k(1), hh: k(2), a: K(X, ee, !0), A: K(X, ee, !1), m: String(ee), mm: I.s(ee, 2, "0"), s: String(this.$s), ss: I.s(this.$s, 2, "0"), SSS: I.s(this.$ms, 3, "0"), Z: V };
        return $.replace(y, function(J, te) {
          return te || L[J] || V.replace(":", "");
        });
      }, O.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, O.diff = function(C, N, _) {
        var $, V = I.p(N), X = T(C), ee = (X.utcOffset() - this.utcOffset()) * e, A = this - X, W = I.m(this, X);
        return W = ($ = {}, $[h] = W / 12, $[d] = W, $[f] = W / 3, $[u] = (A - ee) / 6048e5, $[l] = (A - ee) / 864e5, $[c] = A / a, $[s] = A / e, $[i] = A / t, $)[V] || A, _ ? W : I.a(W);
      }, O.daysInMonth = function() {
        return this.endOf(d).$D;
      }, O.$locale = function() {
        return x[this.$L];
      }, O.locale = function(C, N) {
        if (!C)
          return this.$L;
        var _ = this.clone(), $ = P(C, N, !0);
        return $ && (_.$L = $), _;
      }, O.clone = function() {
        return I.w(this.$d, this);
      }, O.toDate = function() {
        return new Date(this.valueOf());
      }, O.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, O.toISOString = function() {
        return this.$d.toISOString();
      }, O.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), Z = Q.prototype;
    return T.prototype = Z, [["$ms", o], ["$s", i], ["$m", s], ["$H", c], ["$W", l], ["$M", d], ["$y", h], ["$D", m]].forEach(function(R) {
      Z[R[1]] = function(O) {
        return this.$g(O, R[0], R[1]);
      };
    }), T.extend = function(R, O) {
      return R.$i || (R(O, Q, T), R.$i = !0), T;
    }, T.locale = P, T.isDayjs = w, T.unix = function(R) {
      return T(1e3 * R);
    }, T.en = x[g], T.Ls = x, T.p = {}, T;
  });
})(hl);
const z = Kt, Yo = (n) => n % 4 === 0 && n % 100 > 0 || n % 400 === 0 ? 366 : 365, qa = (n) => {
  const r = n.day();
  return r !== 0 && r !== 6;
}, ss = (n, r) => z(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(r, "months").daysInMonth(), cs = (n) => ({
  hour: n.hour(),
  dayName: n.format("ddd"),
  dayOfMonth: n.date(),
  weekOfYear: n.week(),
  month: n.month(),
  monthName: n.format("MMMM"),
  isBusinessDay: qa(n),
  isCurrentDay: n.isSame(z(), "day"),
  year: parseInt(n.format("YYYY"))
}), Ua = (n, r, t, e, a, o, i) => {
  n.strokeStyle = i.colors.border, o ? n.fillStyle = i.colors.secondary : a ? n.fillStyle = "transparent" : n.fillStyle = i.colors.primary, n.beginPath(), n.setLineDash([]), n.fillRect(r, t, e, Xe), n.strokeRect(r + 0.5, t + 0.5, e, Xe);
}, ml = (n, r, t, e, a) => {
  for (let o = 0; o < r; o++)
    for (let i = 0; i <= t; i++) {
      const s = z(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
        i,
        "days"
      ), c = s.isSame(z(), "day");
      Ua(
        n,
        i * Ge,
        o * Xe,
        Ge,
        qa(s),
        c,
        a
      );
    }
}, vl = (n, r, t, e) => {
  n.setLineDash([5, 5]), n.strokeStyle = e.colors.border, n.moveTo(r + 0.5, 0.5), n.lineTo(r + 0.5, t + 0.5), n.stroke();
}, gl = (n, r, t, e, a) => {
  let o = 0, i = -(e.dayOfMonth - 1) * wt;
  for (let s = 0; s <= t; s++) {
    const l = z(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
      s,
      "weeks"
    ).isSame(z(), "week");
    for (let u = 0; u < r; u++)
      Ua(n, o, u * Xe, At, !0, l, a);
    o += At;
  }
  for (let s = 0; s < t; s++) {
    const c = ss(e, s) * wt;
    vl(n, i, r * Xe, a), i += c;
  }
}, yl = (n, r, t, e, a) => {
  const o = z(`${e.year}-${e.month + 1}-${e.dayOfMonth + 1}`);
  for (let i = 0; i < r; i++)
    for (let s = 0; s <= t; s++) {
      let c;
      s === Math.floor(t / 2) ? c = z() : s > Math.floor(t / 2) ? c = z().add(s - Math.floor(t / 2), "hours") : c = z().subtract(Math.floor(t / 2) - i, "hours");
      const l = o.isSame(z(), "day") && c.isSame(z(), "hour");
      Ua(
        n,
        s * je + je / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        i * Xe,
        je,
        qa(c),
        l,
        a
      );
    }
}, wl = (n, r, t, e, a, o) => {
  if (n.clearRect(0, 0, n.canvas.width, n.canvas.height), !!document.getElementById(os))
    switch (r) {
      case 0:
        gl(n, t, e, a, o);
        break;
      case 1:
        ml(n, t, e, a, o);
        break;
      case 2:
        yl(n, t, e, a, o);
        break;
    }
};
var va = {}, bl = {
  get exports() {
    return va;
  },
  set exports(n) {
    va = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    var t = "week", e = "year";
    return function(a, o, i) {
      var s = o.prototype;
      s.week = function(c) {
        if (c === void 0 && (c = null), c !== null)
          return this.add(7 * (c - this.week()), "day");
        var l = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = i(this).startOf(e).add(1, e).date(l), d = i(this).endOf(t);
          if (u.isBefore(d))
            return 1;
        }
        var f = i(this).startOf(e).date(l).startOf(t).subtract(1, "millisecond"), h = this.diff(f, t, !0);
        return h < 0 ? i(this).startOf("week").week() : Math.ceil(h);
      }, s.weeks = function(c) {
        return c === void 0 && (c = null), this.week(c);
      };
    };
  });
})(bl);
const kl = va;
var ga = {}, Dl = {
  get exports() {
    return ga;
  },
  set exports(n) {
    ga = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return function(t, e, a) {
      e.prototype.dayOfYear = function(o) {
        var i = Math.round((a(this).startOf("day") - a(this).startOf("year")) / 864e5) + 1;
        return o == null ? i : this.add(o - i, "day");
      };
    };
  });
})(Dl);
const _l = ga;
var ya = {}, xl = {
  get exports() {
    return ya;
  },
  set exports(n) {
    ya = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    var t = "day";
    return function(e, a, o) {
      var i = function(l) {
        return l.add(4 - l.isoWeekday(), t);
      }, s = a.prototype;
      s.isoWeekYear = function() {
        return i(this).year();
      }, s.isoWeek = function(l) {
        if (!this.$utils().u(l))
          return this.add(7 * (l - this.isoWeek()), t);
        var u, d, f, h, m = i(this), p = (u = this.isoWeekYear(), d = this.$u, f = (d ? o.utc : o)().year(u).startOf("year"), h = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (h += 7), f.add(h, t));
        return m.diff(p, "week") + 1;
      }, s.isoWeekday = function(l) {
        return this.$utils().u(l) ? this.day() || 7 : this.day(this.day() % 7 ? l : l - 7);
      };
      var c = s.startOf;
      s.startOf = function(l, u) {
        var d = this.$utils(), f = !!d.u(u) || u;
        return d.p(l) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : c.bind(this)(l, u);
      };
    };
  });
})(xl);
const Ml = ya;
var wa = {}, Sl = {
  get exports() {
    return wa;
  },
  set exports(n) {
    wa = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return function(t, e, a) {
      e.prototype.isBetween = function(o, i, s, c) {
        var l = a(o), u = a(i), d = (c = c || "()")[0] === "(", f = c[1] === ")";
        return (d ? this.isAfter(l, s) : !this.isBefore(l, s)) && (f ? this.isBefore(u, s) : !this.isAfter(u, s)) || (d ? this.isBefore(l, s) : !this.isAfter(l, s)) && (f ? this.isAfter(u, s) : !this.isBefore(u, s));
      };
    };
  });
})(Sl);
const Cl = wa;
var ba = {}, Pl = {
  get exports() {
    return ba;
  },
  set exports(n) {
    ba = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    var t, e, a = 1e3, o = 6e4, i = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, l = 31536e6, u = 2592e6, d = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: l, months: u, days: s, hours: i, minutes: o, seconds: a, milliseconds: 1, weeks: 6048e5 }, h = function(g) {
      return g instanceof M;
    }, m = function(g, x, w) {
      return new M(g, w, x.$l);
    }, p = function(g) {
      return e.p(g) + "s";
    }, v = function(g) {
      return g < 0;
    }, y = function(g) {
      return v(g) ? Math.ceil(g) : Math.floor(g);
    }, b = function(g) {
      return Math.abs(g);
    }, D = function(g, x) {
      return g ? v(g) ? { negative: !0, format: "" + b(g) + x } : { negative: !1, format: "" + g + x } : { negative: !1, format: "" };
    }, M = function() {
      function g(w, P, T) {
        var I = this;
        if (this.$d = {}, this.$l = T, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), P)
          return m(w * f[p(P)], this);
        if (typeof w == "number")
          return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object")
          return Object.keys(w).forEach(function(R) {
            I.$d[p(R)] = w[R];
          }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var Q = w.match(d);
          if (Q) {
            var Z = Q.slice(2).map(function(R) {
              return R != null ? Number(R) : 0;
            });
            return this.$d.years = Z[0], this.$d.months = Z[1], this.$d.weeks = Z[2], this.$d.days = Z[3], this.$d.hours = Z[4], this.$d.minutes = Z[5], this.$d.seconds = Z[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var x = g.prototype;
      return x.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(P, T) {
          return P + (w.$d[T] || 0) * f[T];
        }, 0);
      }, x.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = y(w / l), w %= l, this.$d.months = y(w / u), w %= u, this.$d.days = y(w / s), w %= s, this.$d.hours = y(w / i), w %= i, this.$d.minutes = y(w / o), w %= o, this.$d.seconds = y(w / a), w %= a, this.$d.milliseconds = w;
      }, x.toISOString = function() {
        var w = D(this.$d.years, "Y"), P = D(this.$d.months, "M"), T = +this.$d.days || 0;
        this.$d.weeks && (T += 7 * this.$d.weeks);
        var I = D(T, "D"), Q = D(this.$d.hours, "H"), Z = D(this.$d.minutes, "M"), R = this.$d.seconds || 0;
        this.$d.milliseconds && (R += this.$d.milliseconds / 1e3);
        var O = D(R, "S"), C = w.negative || P.negative || I.negative || Q.negative || Z.negative || O.negative, N = Q.format || Z.format || O.format ? "T" : "", _ = (C ? "-" : "") + "P" + w.format + P.format + I.format + N + Q.format + Z.format + O.format;
        return _ === "P" || _ === "-P" ? "P0D" : _;
      }, x.toJSON = function() {
        return this.toISOString();
      }, x.format = function(w) {
        var P = w || "YYYY-MM-DDTHH:mm:ss", T = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return P.replace(c, function(I, Q) {
          return Q || String(T[I]);
        });
      }, x.as = function(w) {
        return this.$ms / f[p(w)];
      }, x.get = function(w) {
        var P = this.$ms, T = p(w);
        return T === "milliseconds" ? P %= 1e3 : P = T === "weeks" ? y(P / f[T]) : this.$d[T], P === 0 ? 0 : P;
      }, x.add = function(w, P, T) {
        var I;
        return I = P ? w * f[p(P)] : h(w) ? w.$ms : m(w, this).$ms, m(this.$ms + I * (T ? -1 : 1), this);
      }, x.subtract = function(w, P) {
        return this.add(w, P, !0);
      }, x.locale = function(w) {
        var P = this.clone();
        return P.$l = w, P;
      }, x.clone = function() {
        return m(this.$ms, this);
      }, x.humanize = function(w) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, x.milliseconds = function() {
        return this.get("milliseconds");
      }, x.asMilliseconds = function() {
        return this.as("milliseconds");
      }, x.seconds = function() {
        return this.get("seconds");
      }, x.asSeconds = function() {
        return this.as("seconds");
      }, x.minutes = function() {
        return this.get("minutes");
      }, x.asMinutes = function() {
        return this.as("minutes");
      }, x.hours = function() {
        return this.get("hours");
      }, x.asHours = function() {
        return this.as("hours");
      }, x.days = function() {
        return this.get("days");
      }, x.asDays = function() {
        return this.as("days");
      }, x.weeks = function() {
        return this.get("weeks");
      }, x.asWeeks = function() {
        return this.as("weeks");
      }, x.months = function() {
        return this.get("months");
      }, x.asMonths = function() {
        return this.as("months");
      }, x.years = function() {
        return this.get("years");
      }, x.asYears = function() {
        return this.as("years");
      }, g;
    }();
    return function(g, x, w) {
      t = w, e = w().$utils(), w.duration = function(I, Q) {
        var Z = w.locale();
        return m(I, { $l: Z }, Q);
      }, w.isDuration = h;
      var P = x.prototype.add, T = x.prototype.subtract;
      x.prototype.add = function(I, Q) {
        return h(I) && (I = I.asMilliseconds()), P.bind(this)(I, Q);
      }, x.prototype.subtract = function(I, Q) {
        return h(I) && (I = I.asMilliseconds()), T.bind(this)(I, Q);
      };
    };
  });
})(Pl);
const El = ba;
var ka = {}, Tl = {
  get exports() {
    return ka;
  },
  set exports(n) {
    ka = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return function(t, e) {
      e.prototype.isoWeeksInYear = function() {
        var a = this.isLeapYear(), o = this.endOf("y").day();
        return o === 4 || a && o === 5 ? 53 : 52;
      };
    };
  });
})(Tl);
const Ol = ka;
var Da = {}, Nl = {
  get exports() {
    return Da;
  },
  set exports(n) {
    Da = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return function(t, e) {
      e.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})(Nl);
const $l = Da;
var Rl = "Expected a function", Io = 0 / 0, Yl = "[object Symbol]", Il = /^\s+|\s+$/g, Ll = /^[-+]0x[0-9a-f]+$/i, Al = /^0b[01]+$/i, Wl = /^0o[0-7]+$/i, Fl = parseInt, Hl = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, zl = typeof self == "object" && self && self.Object === Object && self, Vl = Hl || zl || Function("return this")(), Bl = Object.prototype, jl = Bl.toString, Zl = Math.max, Ql = Math.min, Gr = function() {
  return Vl.Date.now();
};
function Gl(n, r, t) {
  var e, a, o, i, s, c, l = 0, u = !1, d = !1, f = !0;
  if (typeof n != "function")
    throw new TypeError(Rl);
  r = Lo(r) || 0, _a(t) && (u = !!t.leading, d = "maxWait" in t, o = d ? Zl(Lo(t.maxWait) || 0, r) : o, f = "trailing" in t ? !!t.trailing : f);
  function h(x) {
    var w = e, P = a;
    return e = a = void 0, l = x, i = n.apply(P, w), i;
  }
  function m(x) {
    return l = x, s = setTimeout(y, r), u ? h(x) : i;
  }
  function p(x) {
    var w = x - c, P = x - l, T = r - w;
    return d ? Ql(T, o - P) : T;
  }
  function v(x) {
    var w = x - c, P = x - l;
    return c === void 0 || w >= r || w < 0 || d && P >= o;
  }
  function y() {
    var x = Gr();
    if (v(x))
      return b(x);
    s = setTimeout(y, p(x));
  }
  function b(x) {
    return s = void 0, f && e ? h(x) : (e = a = void 0, i);
  }
  function D() {
    s !== void 0 && clearTimeout(s), l = 0, e = c = a = s = void 0;
  }
  function M() {
    return s === void 0 ? i : b(Gr());
  }
  function g() {
    var x = Gr(), w = v(x);
    if (e = arguments, a = this, c = x, w) {
      if (s === void 0)
        return m(c);
      if (d)
        return s = setTimeout(y, r), h(c);
    }
    return s === void 0 && (s = setTimeout(y, r)), i;
  }
  return g.cancel = D, g.flush = M, g;
}
function _a(n) {
  var r = typeof n;
  return !!n && (r == "object" || r == "function");
}
function ql(n) {
  return !!n && typeof n == "object";
}
function Ul(n) {
  return typeof n == "symbol" || ql(n) && jl.call(n) == Yl;
}
function Lo(n) {
  if (typeof n == "number")
    return n;
  if (Ul(n))
    return Io;
  if (_a(n)) {
    var r = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = _a(r) ? r + "" : r;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(Il, "");
  var t = Al.test(n);
  return t || Wl.test(n) ? Fl(n.slice(2), t ? 2 : 8) : Ll.test(n) ? Io : +n;
}
var sn = Gl, xa = {}, Xl = {
  get exports() {
    return xa;
  },
  set exports(n) {
    xa = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return function(t, e) {
      e.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(Xl);
const Kl = xa;
var Ma = {}, Jl = {
  get exports() {
    return Ma;
  },
  set exports(n) {
    Ma = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return function(t, e) {
      e.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(Jl);
const eu = Ma, cr = [0, 1, 2], tu = (n) => cr.includes(n), cn = (n) => {
  var a;
  const t = (((a = document.getElementById(Xt)) == null ? void 0 : a.clientWidth) || 0) - tt;
  let e = 0;
  switch (n) {
    case 1:
      return Math.ceil(t / Ge) * ln;
    case 2:
      return Math.ceil(t / je) * ln;
    default:
      return e = Math.ceil(t / At * ln), e % 2 === 0 ? e : e + 1;
  }
}, nu = (n) => cn(n) / ln, Xa = (n, r) => {
  const t = cn(r) / 2;
  let e, a;
  switch (r) {
    case 1:
      e = n.subtract(t, "days");
      break;
    case 2:
      e = n.subtract(t, "hours");
      break;
    default:
      a = (n.day() + 6) % 7, e = n.subtract(t, "weeks").subtract(a, "days");
      break;
  }
  let o;
  switch (r) {
    case 1:
      o = n.add(t, "days");
      break;
    case 2:
      o = n.add(t, "hours");
      break;
    default:
      o = n.add(t, "weeks");
      break;
  }
  return {
    startDate: e,
    endDate: o
  };
}, ru = (n, r) => {
  const t = Xa(n, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Ka = () => {
  var t;
  return ((((t = document.getElementById(Xt)) == null ? void 0 : t.clientWidth) || 0) - tt) * ln;
}, ls = zi({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  handleGoDate: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: z(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
z.extend(kl);
z.extend(_l);
z.extend(Ml);
z.extend(Cl);
z.extend(El);
z.extend(Kl);
z.extend(eu);
z.extend(Ol);
z.extend($l);
const au = ({
  data: n,
  children: r,
  isLoading: t,
  config: e,
  defaultStartDate: a = z(),
  onRangeChange: o,
  onFilterData: i,
  onClearFilterData: s
}) => {
  const { zoom: c, maxRecordsPerPage: l = 50 } = e, [u, d] = Ie(c), [f, h] = Ie(z()), [m, p] = Ie(!1), [v, y] = Ie(cn(u)), b = cr[u] !== cr[cr.length - 1], D = u !== 0, M = $t(() => ru(f, u), [f, u]), g = Xa(f, u).startDate, x = z(g).dayOfYear(), w = cs(g), P = Ae(null), [T, I] = Ie([{ x: 0, y: 0 }]), Q = Ve(
    (H, k = "auto") => {
      var L, J, te, re;
      const K = Ka();
      switch (H) {
        case "back":
          return (L = P.current) == null ? void 0 : L.scrollTo({
            behavior: k,
            left: K / 3
          });
        case "forward":
          return (J = P.current) == null ? void 0 : J.scrollTo({
            behavior: k,
            left: K / 3
          });
        case "middle": {
          const Y = K / ln / 4;
          return (te = P.current) == null ? void 0 : te.scrollTo({
            behavior: k,
            left: K / 2 - Y
          });
        }
        default:
          return (re = P.current) == null ? void 0 : re.scrollTo({
            behavior: k,
            left: K / 2
          });
      }
    },
    []
  ), Z = (H) => {
    I(H);
  }, R = Ve(
    (H) => {
      const k = nu(u);
      let K;
      switch (u) {
        case 0:
          K = k * 7;
          break;
        case 1:
          K = k;
          break;
        case 2:
          K = Math.ceil(k / yr);
          break;
      }
      sn(() => {
        switch (H) {
          case "back":
            h((J) => J.subtract(K, "days"));
            break;
          case "forward":
            h((J) => J.add(K, "days"));
            break;
          case "middle":
            h(z());
            break;
        }
        o == null || o(M);
      }, 300)();
    },
    [o, M, u]
  );
  Ee(() => {
    P.current = document.getElementById(Xt), y(cn(u));
  }, [u]), Ee(() => {
    const H = () => y(cn(u));
    return window.addEventListener("resize", H), () => window.removeEventListener("resize", H);
  }, [u]), Ee(() => {
    o == null || o(M);
  }, [o, M]), Ee(() => {
    p(!1);
  }, [a]), Ee(() => {
    m || (Q("middle"), p(!0), h(a));
  }, [a, m, Q]);
  const O = () => {
    t || (h(
      (H) => u === 2 ? H.add(No, "hours") : H.add(Ro, "weeks")
    ), o == null || o(M));
  }, C = Ve(() => {
    t || (R("forward"), sn(() => {
      Q("forward");
    }, 300)());
  }, [t, R, Q]), N = () => {
    t || (h(
      (H) => u === 2 ? H.subtract(No, "hours") : H.subtract(Ro, "weeks")
    ), o == null || o(M));
  }, _ = Ve(() => {
    !m || t || (R("back"), sn(() => {
      Q("back");
    }, 300)());
  }, [m, t, R, Q]), $ = Ve(() => {
    t || (R("middle"), sn(() => {
      Q("middle", "smooth");
    }, 300)());
  }, [t, R, Q]), V = Ve(
    (H) => {
      t || (h(H), o == null || o(M));
    },
    [t, o, M]
  ), X = () => A(u + 1), ee = () => A(u - 1), A = (H) => {
    tu(H) && (d(H), y(cn(H)), o == null || o(M));
  }, W = () => i == null ? void 0 : i(), { Provider: B } = ls;
  return /* @__PURE__ */ F(
    B,
    {
      value: {
        data: n,
        config: e,
        handleGoNext: O,
        handleScrollNext: C,
        handleGoPrev: N,
        handleScrollPrev: _,
        handleGoToday: $,
        handleGoDate: V,
        zoomIn: X,
        zoomOut: ee,
        zoom: u,
        isNextZoom: b,
        isPrevZoom: D,
        date: f,
        isLoading: t,
        cols: v,
        startDate: w,
        dayOfYear: x,
        handleFilterData: W,
        tilesCoords: T,
        updateTilesCoords: Z,
        recordsThreshold: l,
        onClearFilterData: s
      },
      children: r
    }
  );
}, Mn = () => St(ls), us = (n, r, t) => {
  n.canvas.width = r * window.devicePixelRatio, n.canvas.height = t * window.devicePixelRatio, n.canvas.style.width = r + "px", n.canvas.style.height = t + "px", n.scale(window.devicePixelRatio, window.devicePixelRatio);
}, ou = U.div`
  height: calc(100vh - headerHeight);
`, iu = U.div`
  position: relative;
`, su = U.canvas``;
U.canvas``;
const Ao = U.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: n }) => n === "left" ? 0 : "auto"};
  right: ${({ position: n }) => n === "right" ? 0 : "auto"};
`, cu = nc(function({ zoom: r, rows: t, data: e, onTileClick: a }, o) {
  const { handleScrollNext: i, handleScrollPrev: s, date: c, isLoading: l, cols: u, startDate: d } = Mn(), f = Ae(null), h = Ae(null), m = Ae(null), p = nn(), v = Ve(
    (y) => {
      const b = Ka(), D = t * Xe + 1;
      us(y, b, D), wl(y, r, t, u, d, p);
    },
    [u, d, t, r, p]
  );
  return Ee(() => {
    if (!f.current)
      return;
    const y = f.current.getContext("2d");
    if (!y)
      return;
    const b = () => v(y);
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, [v]), Ee(() => {
    const y = f.current;
    if (!y)
      return;
    y.style.letterSpacing = "1px";
    const b = y.getContext("2d");
    b && v(b);
  }, [c, t, r, v]), Ee(() => {
    if (!h.current)
      return;
    const y = new IntersectionObserver(
      (b) => b[0].isIntersecting ? i() : null,
      { root: document.getElementById(Xt) }
    );
    return y.observe(h.current), () => y.disconnect();
  }, [i]), Ee(() => {
    if (!m.current)
      return;
    const y = new IntersectionObserver(
      (b) => b[0].isIntersecting ? s() : null,
      {
        root: document.getElementById(Xt),
        rootMargin: `0px 0px 0px -${tt}px`
      }
    );
    return y.observe(m.current), () => y.disconnect();
  }, [s]), /* @__PURE__ */ F(ou, { id: os, children: /* @__PURE__ */ fe(iu, { ref: o, children: [
    /* @__PURE__ */ F(Ao, { position: "left", ref: m }),
    /* @__PURE__ */ F(Ii, { isLoading: l, position: "left" }),
    /* @__PURE__ */ F(su, { ref: f }),
    /* @__PURE__ */ F(ay, { data: e, zoom: r, onTileClick: a }),
    /* @__PURE__ */ F(Ao, { ref: h, position: "right" }),
    /* @__PURE__ */ F(Ii, { isLoading: l, position: "right" })
  ] }) });
}), ds = (n) => {
  const r = z.duration(n, "seconds"), t = r.hours(), e = r.minutes();
  return { hours: t, minutes: e };
}, fs = (n) => {
  let r = 0, t = 0, e = 0;
  return n.forEach((a) => {
    r += a.minutes;
    const o = Math.floor(r / ze);
    t += a.hours + o, e += r % ze, e >= ze && (t++, e -= ze);
  }), { hours: t, minutes: e };
}, ps = (n, r) => {
  let t = $o;
  switch (r) {
    case 0:
      t = pl;
      break;
    case 1:
      t = $o;
      break;
    case 2:
      t = 1;
      break;
  }
  const e = () => {
    let o = t - n.hours - 1, i = ze - n.minutes;
    return i === ze && (o++, i = 0), { hours: Math.max(0, o), minutes: o < 0 ? 0 : i };
  }, a = () => {
    const o = n.hours - t, i = n.minutes;
    return { hours: Math.max(0, o), minutes: o < 0 ? 0 : i };
  };
  return {
    free: e(),
    overtime: a()
  };
}, lu = (n, r, t) => {
  const e = r.isoWeek(), a = n.map((l) => {
    const u = z(l.startDate).isoWeek(), d = z(l.startDate).isoWeekday(), f = z(l.endDate).isoWeek(), h = z(l.endDate).isoWeekday(), { hours: m, minutes: p } = ds(l.occupancy);
    if (e === u) {
      const v = (Tt + 1 - d) * m, y = (Tt + 1 - d) * p;
      return { hours: Math.max(0, v), minutes: y };
    } else if (e === f) {
      const v = h > Tt ? Tt * m : h * m, y = h > Tt ? Tt * p : h * p;
      return { hours: v, minutes: y };
    } else if (z(r).isBetween(l.startDate, l.endDate))
      return { hours: Tt * m, minutes: Tt * p };
    return { hours: 0, minutes: 0 };
  }), { hours: o, minutes: i } = fs(a), { free: s, overtime: c } = ps({ hours: o, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, o), minutes: Math.max(0, i) },
    free: s,
    overtime: c
  };
}, uu = (n, r, t, e) => {
  const a = r.isoWeekday(), o = n.map((u) => {
    const { hours: d, minutes: f } = ds(u.occupancy);
    return a <= (e ? 7 : 5) ? { hours: d, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: s } = fs(o), { free: c, overtime: l } = ps({ hours: i, minutes: s }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, s) },
    free: c,
    overtime: l
  };
}, du = (n, r) => {
  let t = 0;
  n.forEach((s) => {
    const c = z(s.startDate).hour(), l = z(s.endDate).hour(), u = r.hour(), d = z(s.endDate).minute(), f = z(s.startDate).minute();
    c < u && l > u ? t += ze : c === u && l === u && f && d ? t += d ? d - f : ze - f : c === u && l >= u ? t += f ? ze - f : ze : l === u && d && (t += d);
  });
  const e = Math.floor(t / ze), a = t % ze, o = e || a ? 0 : 1, i = e ? 0 : a ? ze - a : 0;
  return {
    taken: { hours: e, minutes: a },
    free: { hours: o, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, fu = (n, r, t, e, a = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const o = n.flat(2).filter((i) => e === 1 ? z(t).isBetween(i.startDate, i.endDate, "day", "[]") : e === 2 ? z(t).isBetween(i.startDate, i.endDate, "hour", "[]") : z(i.startDate).isBetween(
    z(t),
    z(t).add(6, "days"),
    "day",
    "[]"
  ) || z(t).isBetween(z(i.startDate), z(i.endDate), "day", "[]"));
  switch (e) {
    case 1:
      return uu(o, t, e, a);
    case 2:
      return du(o, t);
    default:
      return lu(o, t, e);
  }
}, pu = (n, r, t, e, a, o = !1) => {
  let i = "weeks", s;
  switch (a) {
    case 0:
      i = "weeks", s = At;
      break;
    case 1:
      i = "days", s = Ge;
      break;
    case 2:
      i = "hours", s = je;
      break;
  }
  const c = Math.ceil(a === 2 ? (r.x - 0.5 * s) / s : r.x / s), l = z(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).add(c - 1, i), u = Math.ceil(r.y / Xe), d = t.findIndex((p, v, y) => y.slice(0, v + 1).reduce((D, M) => D + M, 0) >= u), f = a === 2 ? (c + 1) * s : c * s, h = (u - 1) * Xe + Xe, m = fu(
    e[d],
    d,
    l,
    a,
    o
  );
  return { coords: { x: f, y: h }, resourceIndex: d, disposition: m };
}, hu = (n, r, t, e) => {
  const a = [];
  let o = 0, i = [], s = 0;
  return r.length > e ? (r.forEach((c, l) => {
    const u = { id: n[l].id, label: n[l].label, data: c };
    s >= e && (a.push(i), o += i.length, i = [], s = 0), s++, i.push(u);
  }), t.slice(o).length <= e && (i = [], r.slice(o).forEach((c, l) => {
    const u = {
      id: n[l + o].id,
      label: n[l + o].label,
      data: c
    };
    i.push(u), l === r.length - o - 1 && a.push(i);
  })), a) : (r.forEach((c, l) => {
    const u = { id: n[l].id, label: n[l].label, data: c };
    i.push(u);
  }), a.push(i), a);
}, Wo = {
  0: "day",
  1: "day",
  2: void 0
}, mu = (n, r) => {
  const t = [];
  for (const e of n) {
    let a = !1;
    if (t.length)
      for (const o of t) {
        let i = !1;
        for (let s = 0; s < o.length; s++)
          if (z(e.startDate).isSameOrBefore(
            z(o[s].endDate),
            Wo[r || 0]
          ) && z(e.endDate).isSameOrAfter(
            z(o[s].startDate),
            Wo[r || 0]
          )) {
            i = !0;
            break;
          }
        if (!i) {
          o.push(e), a = !0;
          break;
        }
      }
    a || t.push([e]);
  }
  return t;
}, vu = (n, r) => {
  const t = [[], []], [e, a] = n.reduce((o, i) => {
    const s = mu(i.data, r);
    return o[0].push(s), o[1].push(Math.max(s.length, 1)), o;
  }, t);
  return { projectsPerPerson: e, rowsPerPerson: a };
}, gu = (n) => n ? n.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, yu = (n) => {
  const { recordsThreshold: r, zoom: t } = Mn(), [e, a] = Ie(0), [o, i] = Ie(0), s = Ae(null);
  Ee(() => {
    s.current = document.getElementById(Xt);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = $t(
    () => vu(n, t),
    [n, t]
  ), u = $t(
    () => hu(n, c, l, r),
    [n, c, r, l]
  ), d = Ve(() => {
    u[o].length && s.current && (s.current.scroll({ top: 0 }), a((y) => y + u[Math.max(o, 0)].length), i((y) => Math.min(y + 1, u.length - 1)), window.scroll({ top: 0 }));
  }, [o, u]), f = Ve(() => {
    u[o].length && (a((y) => Math.max(y - u[o - 1].length, 0)), i((y) => Math.max(y - 1, 0)));
  }, [o, u]), h = Ve(() => {
    a(0), i(0);
  }, []), m = e + u[o].length, p = $t(
    () => l.slice(e, m),
    [m, l, e]
  ), v = $t(
    () => c.slice(e, m),
    [m, c, e]
  );
  return {
    page: u[o],
    currentPageNum: o,
    pagesAmount: u.length,
    projectsPerPerson: v,
    rowsPerItem: p,
    totalRowsPerPage: gu(u[o]),
    next: d,
    previous: f,
    reset: h
  };
};
var Sa = {}, wu = {
  get exports() {
    return Sa;
  },
  set exports(n) {
    Sa = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Pe, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var e = ["th", "st", "nd", "rd"], a = t % 100;
      return "[" + t + (e[(a - 20) % 10] || e[a] || e[0]) + "]";
    } };
  });
})(wu);
const bu = Sa;
var Ca = {}, ku = {
  get exports() {
    return Ca;
  },
  set exports(n) {
    Ca = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e(Kt);
  })(Pe, function(t) {
    function e(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var a = e(t);
    function o(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function i(f, h, m) {
      var p = f + " ";
      switch (m) {
        case "m":
          return h ? "minuta" : "minutę";
        case "mm":
          return p + (o(f) ? "minuty" : "minut");
        case "h":
          return h ? "godzina" : "godzinę";
        case "hh":
          return p + (o(f) ? "godziny" : "godzin");
        case "MM":
          return p + (o(f) ? "miesiące" : "miesięcy");
        case "yy":
          return p + (o(f) ? "lata" : "lat");
      }
    }
    var s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), c = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), l = /D MMMM/, u = function(f, h) {
      return l.test(h) ? s[f.month()] : c[f.month()];
    };
    u.s = c, u.f = s;
    var d = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return a.default.locale(d, null, !0), d;
  });
})(ku);
const Du = Ca;
var Pa = {}, _u = {
  get exports() {
    return Pa;
  },
  set exports(n) {
    Pa = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e(Kt);
  })(Pe, function(t) {
    function e(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var a = e(t), o = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(c, l, u) {
      var d = o[u];
      return Array.isArray(d) && (d = d[l ? 0 : 1]), d.replace("%d", c);
    }
    var s = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(c) {
      return c + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return a.default.locale(s, null, !0), s;
  });
})(_u);
const xu = Pa;
var Ea = {}, Mu = {
  get exports() {
    return Ea;
  },
  set exports(n) {
    Ea = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e(Kt);
  })(Pe, function(t) {
    function e(u) {
      return u && typeof u == "object" && "default" in u ? u : { default: u };
    }
    var a = e(t), o = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), s = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, c = function(u, d) {
      return s.test(d) ? o[u.month()] : i[u.month()];
    };
    c.s = i, c.f = o;
    var l = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: c, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(u) {
      return u + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return a.default.locale(l, null, !0), l;
  });
})(Mu);
const Su = Ea;
var Ta = {}, Cu = {
  get exports() {
    return Ta;
  },
  set exports(n) {
    Ta = n;
  }
};
(function(n, r) {
  (function(t, e) {
    n.exports = e(Kt);
  })(Pe, function(t) {
    function e(m) {
      return m && typeof m == "object" && "default" in m ? m : { default: m };
    }
    var a = e(t), o = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), i = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), s = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), c = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), l = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function u(m, p, v) {
      var y, b;
      return v === "m" ? p ? "минута" : "минуту" : m + " " + (y = +m, b = { mm: p ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[v].split("_"), y % 10 == 1 && y % 100 != 11 ? b[0] : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? b[1] : b[2]);
    }
    var d = function(m, p) {
      return l.test(p) ? o[m.month()] : i[m.month()];
    };
    d.s = i, d.f = o;
    var f = function(m, p) {
      return l.test(p) ? s[m.month()] : c[m.month()];
    };
    f.s = c, f.f = s;
    var h = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: d, monthsShort: f, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: u, mm: u, h: "час", hh: u, d: "день", dd: u, M: "месяц", MM: u, y: "год", yy: u }, ordinal: function(m) {
      return m;
    }, meridiem: function(m) {
      return m < 4 ? "ночи" : m < 12 ? "утра" : m < 17 ? "дня" : "вечера";
    } };
    return a.default.locale(h, null, !0), h;
  });
})(Cu);
const Pu = Ta, Eu = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Tu = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, Ou = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche"
}, Nu = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė"
}, $u = {
  feelingEmpty: "Нет данных для отображения",
  free: "Свободно",
  loadNext: "Далее",
  loadPrevious: "Назад",
  over: "завершено",
  taken: "Занято",
  topbar: {
    filters: "Фильтры",
    next: "вперёд",
    prev: "назад",
    today: "Сегодня",
    view: "Вид"
  },
  search: "Поиск",
  week: "Неделя"
}, Ru = [
  {
    id: "en",
    lang: Tu,
    translateCode: "en-GB",
    dayjsTranslations: bu
  },
  {
    id: "pl",
    lang: Eu,
    translateCode: "pl-PL",
    dayjsTranslations: Du
  },
  {
    id: "lt",
    lang: Nu,
    translateCode: "lt-LT",
    dayjsTranslations: Su
  },
  {
    id: "de",
    lang: Ou,
    translateCode: "de-DE",
    dayjsTranslations: xu
  },
  {
    id: "ru",
    lang: $u,
    translateCode: "ru-RU",
    dayjsTranslations: Pu
  }
];
class Yu {
  constructor() {
    G(this, "locales", Ru);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const wr = new Yu(), Ja = zi({
  localesData: wr.getLocales(),
  currentLocale: wr.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Iu = ({ children: n, lang: r, translations: t }) => {
  const [e, a] = Ie("en"), o = wr.getLocales(), i = Ve(() => {
    const d = o.find((f) => f.id === e);
    return typeof (d == null ? void 0 : d.dayjsTranslations) == "object" && z.locale(d.dayjsTranslations), d || o[0];
  }, [e, o]), [s, c] = Ie(i()), l = (d) => {
    localStorage.setItem("locale", d.translateCode), c(d);
  };
  Ee(() => {
    t == null || t.forEach((d) => {
      o.find((h) => h.id === d.id) || wr.addLocales(d);
    });
  }, [o, t]), Ee(() => {
    const d = localStorage.getItem("locale"), f = r ?? d ?? "en";
    localStorage.setItem("locale", f), a(f), c(i());
  }, [i, r]);
  const { Provider: u } = Ja;
  return /* @__PURE__ */ F(u, { value: { currentLocale: s, localesData: o, setCurrentLocale: l }, children: n });
}, Sn = () => St(Ja).currentLocale.lang, Lu = (n) => /* @__PURE__ */ E.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...n }, /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ E.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ E.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ E.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ E.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ E.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ E.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ E.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ E.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Au = U.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Wu = U.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: n }) => n.colors.textPrimary};
`, Fu = () => {
  const { feelingEmpty: n } = Sn();
  return /* @__PURE__ */ fe(Au, { children: [
    /* @__PURE__ */ F(Lu, {}),
    /* @__PURE__ */ F(Wu, { children: n })
  ] });
}, Hu = U.div`
  position: relative;
  display: flex;
`, zu = U.div`
  position: relative;
  margin-left: ${tt};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Vu = U.div`
  width: calc(${({ width: n }) => n}px - ${tt}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${tt}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Fo = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, Bu = ({
  data: n,
  onTileClick: r,
  onItemClick: t,
  toggleTheme: e,
  topBarWidth: a
}) => {
  const [o, i] = Ie(Fo), [s, c] = Ie(n), [l, u] = Ie(!1), [d, f] = Ie(""), {
    zoom: h,
    startDate: m,
    config: { includeTakenHoursOnWeekendsInDayView: p, showTooltip: v, showThemeToggle: y }
  } = Mn(), b = Ae(null), {
    page: D,
    projectsPerPerson: M,
    totalRowsPerPage: g,
    rowsPerItem: x,
    currentPageNum: w,
    pagesAmount: P,
    next: T,
    previous: I,
    reset: Q
  } = yu(s), Z = Ae(
    sn(
      (N, _, $, V, X) => {
        if (!b.current)
          return;
        const { left: ee, top: A } = b.current.getBoundingClientRect(), W = { x: N.clientX - ee, y: N.clientY - A }, {
          coords: { x: B, y: H },
          resourceIndex: k,
          disposition: K
        } = pu(
          _,
          W,
          $,
          V,
          X,
          p
        );
        i({ coords: { x: B, y: H }, resourceIndex: k, disposition: K }), u(!0);
      },
      300
    )
  ), R = Ae(
    sn((N, _) => {
      Q(), c(
        N.filter(
          ($) => $.label.title.toLowerCase().includes(_.toLowerCase())
        )
      );
    }, 500)
  ), O = (N) => {
    const _ = N.target.value;
    f(_), R.current.cancel(), R.current(n, _);
  }, C = Ve(() => {
    Z.current.cancel(), u(!1), i(Fo);
  }, []);
  return Ee(() => {
    const N = ($) => Z.current($, m, x, M, h), _ = b.current;
    if (_)
      return _.addEventListener("mousemove", N), _.addEventListener("mouseleave", C), () => {
        _.removeEventListener("mousemove", N), _.removeEventListener("mouseleave", C);
      };
  }, [Z, C, M, x, m, h]), Ee(() => {
    d || c(n);
  }, [n, d]), /* @__PURE__ */ fe(Hu, { children: [
    /* @__PURE__ */ F(
      Tg,
      {
        data: D,
        pageNum: w,
        pagesAmount: P,
        rows: x,
        onLoadNext: T,
        onLoadPrevious: I,
        searchInputValue: d,
        onSearchInputChange: O,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ fe(zu, { children: [
      /* @__PURE__ */ F(
        Gg,
        {
          zoom: h,
          topBarWidth: a,
          showThemeToggle: y,
          toggleTheme: e
        }
      ),
      n.length ? /* @__PURE__ */ F(
        cu,
        {
          data: D,
          zoom: h,
          rows: g,
          ref: b,
          onTileClick: r
        }
      ) : /* @__PURE__ */ F(Vu, { width: a, children: /* @__PURE__ */ F(Fu, {}) }),
      v && l && (o == null ? void 0 : o.resourceIndex) > -1 && /* @__PURE__ */ F(uy, { tooltipData: o, zoom: h })
    ] })
  ] });
};
function hs(n) {
  var r, t, e = "";
  if (typeof n == "string" || typeof n == "number")
    e += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var a = n.length;
      for (r = 0; r < a; r++)
        n[r] && (t = hs(n[r])) && (e && (e += " "), e += t);
    } else
      for (t in n)
        n[t] && (e && (e += " "), e += t);
  return e;
}
function Re() {
  for (var n, r, t = 0, e = "", a = arguments.length; t < a; t++)
    (n = arguments[t]) && (r = hs(n)) && (e && (e += " "), e += r);
  return e;
}
function q(n) {
  const r = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && r === "[object Date]" ? new n.constructor(+n) : typeof n == "number" || r === "[object Number]" || typeof n == "string" || r === "[object String]" ? new Date(n) : new Date(NaN);
}
function he(n, r) {
  return n instanceof Date ? new n.constructor(r) : new Date(r);
}
function ot(n, r) {
  const t = q(n);
  return isNaN(r) ? he(n, NaN) : (r && t.setDate(t.getDate() + r), t);
}
function st(n, r) {
  const t = q(n);
  if (isNaN(r))
    return he(n, NaN);
  if (!r)
    return t;
  const e = t.getDate(), a = he(n, t.getTime());
  a.setMonth(t.getMonth() + r + 1, 0);
  const o = a.getDate();
  return e >= o ? a : (t.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    e
  ), t);
}
function eo(n, r) {
  const t = +q(n);
  return he(n, t + r);
}
const ms = 6048e5, ju = 864e5, Yr = 6e4, Ir = 36e5, Zu = 1e3;
function Qu(n, r) {
  return eo(n, r * Ir);
}
let Gu = {};
function rn() {
  return Gu;
}
function Mt(n, r) {
  var s, c, l, u;
  const t = rn(), e = (r == null ? void 0 : r.weekStartsOn) ?? ((c = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = q(n), o = a.getDay(), i = (o < e ? 7 : 0) + o - e;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function gn(n) {
  return Mt(n, { weekStartsOn: 1 });
}
function vs(n) {
  const r = q(n), t = r.getFullYear(), e = he(n, 0);
  e.setFullYear(t + 1, 0, 4), e.setHours(0, 0, 0, 0);
  const a = gn(e), o = he(n, 0);
  o.setFullYear(t, 0, 4), o.setHours(0, 0, 0, 0);
  const i = gn(o);
  return r.getTime() >= a.getTime() ? t + 1 : r.getTime() >= i.getTime() ? t : t - 1;
}
function Jt(n) {
  const r = q(n);
  return r.setHours(0, 0, 0, 0), r;
}
function br(n) {
  const r = q(n), t = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return t.setUTCFullYear(r.getFullYear()), +n - +t;
}
function yn(n, r) {
  const t = Jt(n), e = Jt(r), a = +t - br(t), o = +e - br(e);
  return Math.round((a - o) / ju);
}
function qu(n) {
  const r = vs(n), t = he(n, 0);
  return t.setFullYear(r, 0, 4), t.setHours(0, 0, 0, 0), gn(t);
}
function Oa(n, r) {
  return eo(n, r * Yr);
}
function to(n, r) {
  const t = r * 3;
  return st(n, t);
}
function Uu(n, r) {
  return eo(n, r * 1e3);
}
function kr(n, r) {
  const t = r * 7;
  return ot(n, t);
}
function kt(n, r) {
  return st(n, r * 12);
}
function Ho(n) {
  let r;
  return n.forEach(function(t) {
    const e = q(t);
    (r === void 0 || r < e || isNaN(Number(e))) && (r = e);
  }), r || new Date(NaN);
}
function zo(n) {
  let r;
  return n.forEach((t) => {
    const e = q(t);
    (!r || r > e || isNaN(+e)) && (r = e);
  }), r || new Date(NaN);
}
function Xu(n, r) {
  const t = Jt(n), e = Jt(r);
  return +t == +e;
}
function Dt(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Dr(n) {
  if (!Dt(n) && typeof n != "number")
    return !1;
  const r = q(n);
  return !isNaN(Number(r));
}
function _r(n, r) {
  const t = q(n), e = q(r), a = t.getFullYear() - e.getFullYear(), o = t.getMonth() - e.getMonth();
  return a * 12 + o;
}
function Zt(n) {
  const r = q(n);
  return Math.trunc(r.getMonth() / 3) + 1;
}
function xr(n, r) {
  const t = q(n), e = q(r), a = t.getFullYear() - e.getFullYear(), o = Zt(t) - Zt(e);
  return a * 4 + o;
}
function Mr(n, r) {
  const t = q(n), e = q(r);
  return t.getFullYear() - e.getFullYear();
}
function Ku(n, r) {
  const t = q(n), e = q(r), a = Vo(t, e), o = Math.abs(yn(t, e));
  t.setDate(t.getDate() - a * o);
  const i = Number(
    Vo(t, e) === -a
  ), s = a * (o - i);
  return s === 0 ? 0 : s;
}
function Vo(n, r) {
  const t = n.getFullYear() - r.getFullYear() || n.getMonth() - r.getMonth() || n.getDate() - r.getDate() || n.getHours() - r.getHours() || n.getMinutes() - r.getMinutes() || n.getSeconds() - r.getSeconds() || n.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function gs(n) {
  const r = q(n);
  return r.setHours(23, 59, 59, 999), r;
}
function ys(n) {
  const r = q(n), t = r.getMonth();
  return r.setFullYear(r.getFullYear(), t + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function Na(n) {
  const r = q(n), t = r.getMonth(), e = t - t % 3;
  return r.setMonth(e, 1), r.setHours(0, 0, 0, 0), r;
}
function ws(n) {
  const r = q(n);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function bs(n) {
  const r = q(n), t = r.getFullYear();
  return r.setFullYear(t + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function Lr(n) {
  const r = q(n), t = he(n, 0);
  return t.setFullYear(r.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Ju(n, r) {
  var s, c, l, u;
  const t = rn(), e = (r == null ? void 0 : r.weekStartsOn) ?? ((c = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = q(n), o = a.getDay(), i = (o < e ? -7 : 0) + 6 - (o - e);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
const ed = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, td = (n, r, t) => {
  let e;
  const a = ed[n];
  return typeof a == "string" ? e = a : r === 1 ? e = a.one : e = a.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function qr(n) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const nd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rd = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ad = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, od = {
  date: qr({
    formats: nd,
    defaultWidth: "full"
  }),
  time: qr({
    formats: rd,
    defaultWidth: "full"
  }),
  dateTime: qr({
    formats: ad,
    defaultWidth: "full"
  })
}, id = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, sd = (n, r, t, e) => id[n];
function Tn(n) {
  return (r, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (e === "formatting" && n.formattingValues) {
      const i = n.defaultFormattingWidth || n.defaultWidth, s = t != null && t.width ? String(t.width) : i;
      a = n.formattingValues[s] || n.formattingValues[i];
    } else {
      const i = n.defaultWidth, s = t != null && t.width ? String(t.width) : n.defaultWidth;
      a = n.values[s] || n.values[i];
    }
    const o = n.argumentCallback ? n.argumentCallback(r) : r;
    return a[o];
  };
}
const cd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ld = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ud = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, dd = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, fd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, pd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, hd = (n, r) => {
  const t = Number(n), e = t % 100;
  if (e > 20 || e < 10)
    switch (e % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, md = {
  ordinalNumber: hd,
  era: Tn({
    values: cd,
    defaultWidth: "wide"
  }),
  quarter: Tn({
    values: ld,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Tn({
    values: ud,
    defaultWidth: "wide"
  }),
  day: Tn({
    values: dd,
    defaultWidth: "wide"
  }),
  dayPeriod: Tn({
    values: fd,
    defaultWidth: "wide",
    formattingValues: pd,
    defaultFormattingWidth: "wide"
  })
};
function On(n) {
  return (r, t = {}) => {
    const e = t.width, a = e && n.matchPatterns[e] || n.matchPatterns[n.defaultMatchWidth], o = r.match(a);
    if (!o)
      return null;
    const i = o[0], s = e && n.parsePatterns[e] || n.parsePatterns[n.defaultParseWidth], c = Array.isArray(s) ? gd(s, (d) => d.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      vd(s, (d) => d.test(i))
    );
    let l;
    l = n.valueCallback ? n.valueCallback(c) : c, l = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = r.slice(i.length);
    return { value: l, rest: u };
  };
}
function vd(n, r) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && r(n[t]))
      return t;
}
function gd(n, r) {
  for (let t = 0; t < n.length; t++)
    if (r(n[t]))
      return t;
}
function yd(n) {
  return (r, t = {}) => {
    const e = r.match(n.matchPattern);
    if (!e)
      return null;
    const a = e[0], o = r.match(n.parsePattern);
    if (!o)
      return null;
    let i = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = r.slice(a.length);
    return { value: i, rest: s };
  };
}
const wd = /^(\d+)(th|st|nd|rd)?/i, bd = /\d+/i, kd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Dd = {
  any: [/^b/i, /^(a|c)/i]
}, _d = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, xd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Md = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Sd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Cd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Pd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ed = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Td = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Od = {
  ordinalNumber: yd({
    matchPattern: wd,
    parsePattern: bd,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: On({
    matchPatterns: kd,
    defaultMatchWidth: "wide",
    parsePatterns: Dd,
    defaultParseWidth: "any"
  }),
  quarter: On({
    matchPatterns: _d,
    defaultMatchWidth: "wide",
    parsePatterns: xd,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: On({
    matchPatterns: Md,
    defaultMatchWidth: "wide",
    parsePatterns: Sd,
    defaultParseWidth: "any"
  }),
  day: On({
    matchPatterns: Cd,
    defaultMatchWidth: "wide",
    parsePatterns: Pd,
    defaultParseWidth: "any"
  }),
  dayPeriod: On({
    matchPatterns: Ed,
    defaultMatchWidth: "any",
    parsePatterns: Td,
    defaultParseWidth: "any"
  })
}, ks = {
  code: "en-US",
  formatDistance: td,
  formatLong: od,
  formatRelative: sd,
  localize: md,
  match: Od,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Nd(n) {
  const r = q(n);
  return yn(r, Lr(r)) + 1;
}
function no(n) {
  const r = q(n), t = +gn(r) - +qu(r);
  return Math.round(t / ms) + 1;
}
function ro(n, r) {
  var u, d, f, h;
  const t = q(n), e = t.getFullYear(), a = rn(), o = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((d = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((h = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = he(n, 0);
  i.setFullYear(e + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = Mt(i, r), c = he(n, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = Mt(c, r);
  return t.getTime() >= s.getTime() ? e + 1 : t.getTime() >= l.getTime() ? e : e - 1;
}
function $d(n, r) {
  var s, c, l, u;
  const t = rn(), e = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((c = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = ro(n, r), o = he(n, 0);
  return o.setFullYear(a, 0, e), o.setHours(0, 0, 0, 0), Mt(o, r);
}
function Ds(n, r) {
  const t = q(n), e = +Mt(t, r) - +$d(t, r);
  return Math.round(e / ms) + 1;
}
function pe(n, r) {
  const t = n < 0 ? "-" : "", e = Math.abs(n).toString().padStart(r, "0");
  return t + e;
}
const Ot = {
  // Year
  y(n, r) {
    const t = n.getFullYear(), e = t > 0 ? t : 1 - t;
    return pe(r === "yy" ? e % 100 : e, r.length);
  },
  // Month
  M(n, r) {
    const t = n.getMonth();
    return r === "M" ? String(t + 1) : pe(t + 1, 2);
  },
  // Day of the month
  d(n, r) {
    return pe(n.getDate(), r.length);
  },
  // AM or PM
  a(n, r) {
    const t = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, r) {
    return pe(n.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(n, r) {
    return pe(n.getHours(), r.length);
  },
  // Minute
  m(n, r) {
    return pe(n.getMinutes(), r.length);
  },
  // Second
  s(n, r) {
    return pe(n.getSeconds(), r.length);
  },
  // Fraction of second
  S(n, r) {
    const t = r.length, e = n.getMilliseconds(), a = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return pe(a, r.length);
  }
}, an = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Bo = {
  // Era
  G: function(n, r, t) {
    const e = n.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(e, { width: "abbreviated" });
      case "GGGGG":
        return t.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(e, { width: "wide" });
    }
  },
  // Year
  y: function(n, r, t) {
    if (r === "yo") {
      const e = n.getFullYear(), a = e > 0 ? e : 1 - e;
      return t.ordinalNumber(a, { unit: "year" });
    }
    return Ot.y(n, r);
  },
  // Local week-numbering year
  Y: function(n, r, t, e) {
    const a = ro(n, e), o = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const i = o % 100;
      return pe(i, 2);
    }
    return r === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : pe(o, r.length);
  },
  // ISO week-numbering year
  R: function(n, r) {
    const t = vs(n);
    return pe(t, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, r) {
    const t = n.getFullYear();
    return pe(t, r.length);
  },
  // Quarter
  Q: function(n, r, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(e);
      case "QQ":
        return pe(e, 2);
      case "Qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return t.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, r, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(e);
      case "qq":
        return pe(e, 2);
      case "qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return t.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, r, t) {
    const e = n.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return Ot.M(n, r);
      case "Mo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "MMM":
        return t.month(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(e, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, r, t) {
    const e = n.getMonth();
    switch (r) {
      case "L":
        return String(e + 1);
      case "LL":
        return pe(e + 1, 2);
      case "Lo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, r, t, e) {
    const a = Ds(n, e);
    return r === "wo" ? t.ordinalNumber(a, { unit: "week" }) : pe(a, r.length);
  },
  // ISO week of year
  I: function(n, r, t) {
    const e = no(n);
    return r === "Io" ? t.ordinalNumber(e, { unit: "week" }) : pe(e, r.length);
  },
  // Day of the month
  d: function(n, r, t) {
    return r === "do" ? t.ordinalNumber(n.getDate(), { unit: "date" }) : Ot.d(n, r);
  },
  // Day of year
  D: function(n, r, t) {
    const e = Nd(n);
    return r === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : pe(e, r.length);
  },
  // Day of week
  E: function(n, r, t) {
    const e = n.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, r, t, e) {
    const a = n.getDay(), o = (a - e.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(o);
      case "ee":
        return pe(o, 2);
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, r, t, e) {
    const a = n.getDay(), o = (a - e.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(o);
      case "cc":
        return pe(o, r.length);
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, r, t) {
    const e = n.getDay(), a = e === 0 ? 7 : e;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return pe(a, r.length);
      case "io":
        return t.ordinalNumber(a, { unit: "day" });
      case "iii":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, r, t) {
    const a = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, r, t) {
    const e = n.getHours();
    let a;
    switch (e === 12 ? a = an.noon : e === 0 ? a = an.midnight : a = e / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, r, t) {
    const e = n.getHours();
    let a;
    switch (e >= 17 ? a = an.evening : e >= 12 ? a = an.afternoon : e >= 4 ? a = an.morning : a = an.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, r, t) {
    if (r === "ho") {
      let e = n.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return Ot.h(n, r);
  },
  // Hour [0-23]
  H: function(n, r, t) {
    return r === "Ho" ? t.ordinalNumber(n.getHours(), { unit: "hour" }) : Ot.H(n, r);
  },
  // Hour [0-11]
  K: function(n, r, t) {
    const e = n.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : pe(e, r.length);
  },
  // Hour [1-24]
  k: function(n, r, t) {
    let e = n.getHours();
    return e === 0 && (e = 24), r === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : pe(e, r.length);
  },
  // Minute
  m: function(n, r, t) {
    return r === "mo" ? t.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Ot.m(n, r);
  },
  // Second
  s: function(n, r, t) {
    return r === "so" ? t.ordinalNumber(n.getSeconds(), { unit: "second" }) : Ot.s(n, r);
  },
  // Fraction of second
  S: function(n, r) {
    return Ot.S(n, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, r, t) {
    const e = n.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (r) {
      case "X":
        return Zo(e);
      case "XXXX":
      case "XX":
        return Ht(e);
      case "XXXXX":
      case "XXX":
      default:
        return Ht(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, r, t) {
    const e = n.getTimezoneOffset();
    switch (r) {
      case "x":
        return Zo(e);
      case "xxxx":
      case "xx":
        return Ht(e);
      case "xxxxx":
      case "xxx":
      default:
        return Ht(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, r, t) {
    const e = n.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + jo(e, ":");
      case "OOOO":
      default:
        return "GMT" + Ht(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, r, t) {
    const e = n.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + jo(e, ":");
      case "zzzz":
      default:
        return "GMT" + Ht(e, ":");
    }
  },
  // Seconds timestamp
  t: function(n, r, t) {
    const e = Math.trunc(n.getTime() / 1e3);
    return pe(e, r.length);
  },
  // Milliseconds timestamp
  T: function(n, r, t) {
    const e = n.getTime();
    return pe(e, r.length);
  }
};
function jo(n, r = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), a = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(a) : t + String(a) + r + pe(o, 2);
}
function Zo(n, r) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + pe(Math.abs(n) / 60, 2) : Ht(n, r);
}
function Ht(n, r = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), a = pe(Math.trunc(e / 60), 2), o = pe(e % 60, 2);
  return t + a + r + o;
}
const Qo = (n, r) => {
  switch (n) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, _s = (n, r) => {
  switch (n) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, Rd = (n, r) => {
  const t = n.match(/(P+)(p+)?/) || [], e = t[1], a = t[2];
  if (!a)
    return Qo(n, r);
  let o;
  switch (e) {
    case "P":
      o = r.dateTime({ width: "short" });
      break;
    case "PP":
      o = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = r.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Qo(e, r)).replace("{{time}}", _s(a, r));
}, Sr = {
  p: _s,
  P: Rd
}, Yd = /^D+$/, Id = /^Y+$/, Ld = ["D", "DD", "YY", "YYYY"];
function xs(n) {
  return Yd.test(n);
}
function Ms(n) {
  return Id.test(n);
}
function $a(n, r, t) {
  const e = Ad(n, r, t);
  if (console.warn(e), Ld.includes(n))
    throw new RangeError(e);
}
function Ad(n, r, t) {
  const e = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Wd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Hd = /^'([^]*?)'?$/, zd = /''/g, Vd = /[a-zA-Z]/;
function Go(n, r, t) {
  var u, d, f, h, m, p, v, y;
  const e = rn(), a = (t == null ? void 0 : t.locale) ?? e.locale ?? ks, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((h = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((p = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : p.weekStartsOn) ?? e.weekStartsOn ?? ((y = (v = e.locale) == null ? void 0 : v.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = q(n);
  if (!Dr(s))
    throw new RangeError("Invalid time value");
  let c = r.match(Fd).map((b) => {
    const D = b[0];
    if (D === "p" || D === "P") {
      const M = Sr[D];
      return M(b, a.formatLong);
    }
    return b;
  }).join("").match(Wd).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const D = b[0];
    if (D === "'")
      return { isToken: !1, value: Bd(b) };
    if (Bo[D])
      return { isToken: !0, value: b };
    if (D.match(Vd))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: b };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return c.map((b) => {
    if (!b.isToken)
      return b.value;
    const D = b.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Ms(D) || !(t != null && t.useAdditionalDayOfYearTokens) && xs(D)) && $a(D, r, String(n));
    const M = Bo[D[0]];
    return M(s, D, a.localize, l);
  }).join("");
}
function Bd(n) {
  const r = n.match(Hd);
  return r ? r[1].replace(zd, "'") : n;
}
function qo(n) {
  return q(n).getDate();
}
function jd(n) {
  return q(n).getDay();
}
function Zd(n) {
  const r = q(n), t = r.getFullYear(), e = r.getMonth(), a = he(n, 0);
  return a.setFullYear(t, e + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Qd() {
  return Object.assign({}, rn());
}
function pt(n) {
  return q(n).getHours();
}
function Gd(n) {
  let t = q(n).getDay();
  return t === 0 && (t = 7), t;
}
function ht(n) {
  return q(n).getMinutes();
}
function Be(n) {
  return q(n).getMonth();
}
function _t(n) {
  return q(n).getSeconds();
}
function Ra(n) {
  return q(n).getTime();
}
function ae(n) {
  return q(n).getFullYear();
}
function Wt(n, r) {
  const t = q(n), e = q(r);
  return t.getTime() > e.getTime();
}
function en(n, r) {
  const t = q(n), e = q(r);
  return +t < +e;
}
function qd(n, r) {
  const t = q(n), e = q(r);
  return +t == +e;
}
function Ud(n, r) {
  const t = r instanceof Date ? he(r, 0) : new r(0);
  return t.setFullYear(
    n.getFullYear(),
    n.getMonth(),
    n.getDate()
  ), t.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), t;
}
const Xd = 10;
class Ss {
  constructor() {
    G(this, "subPriority", 0);
  }
  validate(r, t) {
    return !0;
  }
}
class Kd extends Ss {
  constructor(r, t, e, a, o) {
    super(), this.value = r, this.validateValue = t, this.setValue = e, this.priority = a, o && (this.subPriority = o);
  }
  validate(r, t) {
    return this.validateValue(r, this.value, t);
  }
  set(r, t, e) {
    return this.setValue(r, t, this.value, e);
  }
}
class Jd extends Ss {
  constructor() {
    super(...arguments);
    G(this, "priority", Xd);
    G(this, "subPriority", -1);
  }
  set(t, e) {
    return e.timestampIsSet ? t : he(t, Ud(t, Date));
  }
}
class ce {
  run(r, t, e, a) {
    const o = this.parse(r, t, e, a);
    return o ? {
      setter: new Kd(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(r, t, e) {
    return !0;
  }
}
class ef extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 140);
    G(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(t, { width: "abbreviated" }) || a.era(t, { width: "narrow" });
      case "GGGGG":
        return a.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(t, { width: "wide" }) || a.era(t, { width: "abbreviated" }) || a.era(t, { width: "narrow" });
    }
  }
  set(t, e, a) {
    return e.era = a, t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const Me = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, ut = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Se(n, r) {
  return n && {
    value: r(n.value),
    rest: n.rest
  };
}
function ke(n, r) {
  const t = r.match(n);
  return t ? {
    value: parseInt(t[0], 10),
    rest: r.slice(t[0].length)
  } : null;
}
function dt(n, r) {
  const t = r.match(n);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: r.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, a = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, i = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (a * Ir + o * Yr + i * Zu),
    rest: r.slice(t[0].length)
  };
}
function Cs(n) {
  return ke(Me.anyDigitsSigned, n);
}
function De(n, r) {
  switch (n) {
    case 1:
      return ke(Me.singleDigit, r);
    case 2:
      return ke(Me.twoDigits, r);
    case 3:
      return ke(Me.threeDigits, r);
    case 4:
      return ke(Me.fourDigits, r);
    default:
      return ke(new RegExp("^\\d{1," + n + "}"), r);
  }
}
function Cr(n, r) {
  switch (n) {
    case 1:
      return ke(Me.singleDigitSigned, r);
    case 2:
      return ke(Me.twoDigitsSigned, r);
    case 3:
      return ke(Me.threeDigitsSigned, r);
    case 4:
      return ke(Me.fourDigitsSigned, r);
    default:
      return ke(new RegExp("^-?\\d{1," + n + "}"), r);
  }
}
function ao(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ps(n, r) {
  const t = r > 0, e = t ? r : 1 - r;
  let a;
  if (e <= 50)
    a = n || 100;
  else {
    const o = e + 50, i = Math.trunc(o / 100) * 100, s = n >= o % 100;
    a = n + i - (s ? 100 : 0);
  }
  return t ? a : 1 - a;
}
function Es(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class tf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 130);
    G(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return Se(De(4, t), o);
      case "yo":
        return Se(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Se(De(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a) {
    const o = t.getFullYear();
    if (a.isTwoDigitYear) {
      const s = Ps(
        a.year,
        o
      );
      return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class nf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 130);
    G(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return Se(De(4, t), o);
      case "Yo":
        return Se(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Se(De(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a, o) {
    const i = ro(t, o);
    if (a.isTwoDigitYear) {
      const c = Ps(
        a.year,
        i
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Mt(t, o);
    }
    const s = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(s, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Mt(t, o);
  }
}
class rf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 130);
    G(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e) {
    return Cr(e === "R" ? 4 : e.length, t);
  }
  set(t, e, a) {
    const o = he(t, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), gn(o);
  }
}
class af extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 130);
    G(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return Cr(e === "u" ? 4 : e.length, t);
  }
  set(t, e, a) {
    return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class of extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 120);
    G(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "Q":
      case "QQ":
        return De(e.length, t);
      case "Qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, a) {
    return t.setMonth((a - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class sf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 120);
    G(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "q":
      case "qq":
        return De(e.length, t);
      case "qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, a) {
    return t.setMonth((a - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class cf extends ce {
  constructor() {
    super(...arguments);
    G(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    G(this, "priority", 110);
  }
  parse(t, e, a) {
    const o = (i) => i - 1;
    switch (e) {
      case "M":
        return Se(
          ke(Me.month, t),
          o
        );
      case "MM":
        return Se(De(2, t), o);
      case "Mo":
        return Se(
          a.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return a.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(t, { width: "wide", context: "formatting" }) || a.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class lf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 110);
    G(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (i) => i - 1;
    switch (e) {
      case "L":
        return Se(
          ke(Me.month, t),
          o
        );
      case "LL":
        return Se(De(2, t), o);
      case "Lo":
        return Se(
          a.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return a.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(t, { width: "wide", context: "standalone" }) || a.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function uf(n, r, t) {
  const e = q(n), a = Ds(e, t) - r;
  return e.setDate(e.getDate() - a * 7), e;
}
class df extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 100);
    G(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "w":
        return ke(Me.week, t);
      case "wo":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a, o) {
    return Mt(uf(t, a, o), o);
  }
}
function ff(n, r) {
  const t = q(n), e = no(t) - r;
  return t.setDate(t.getDate() - e * 7), t;
}
class pf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 100);
    G(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "I":
        return ke(Me.week, t);
      case "Io":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a) {
    return gn(ff(t, a));
  }
}
const hf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mf = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class vf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 90);
    G(this, "subPriority", 1);
    G(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "d":
        return ke(Me.date, t);
      case "do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear(), o = Es(a), i = t.getMonth();
    return o ? e >= 1 && e <= mf[i] : e >= 1 && e <= hf[i];
  }
  set(t, e, a) {
    return t.setDate(a), t.setHours(0, 0, 0, 0), t;
  }
}
class gf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 90);
    G(this, "subpriority", 1);
    G(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "D":
      case "DD":
        return ke(Me.dayOfYear, t);
      case "Do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear();
    return Es(a) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, a) {
    return t.setMonth(0, a), t.setHours(0, 0, 0, 0), t;
  }
}
function oo(n, r, t) {
  var d, f, h, m;
  const e = rn(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? e.weekStartsOn ?? ((m = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = q(n), i = o.getDay(), c = (r % 7 + 7) % 7, l = 7 - a, u = r < 0 || r > 6 ? r - (i + l) % 7 : (c + l) % 7 - (i + l) % 7;
  return ot(o, u);
}
class yf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 90);
    G(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(t, { width: "wide", context: "formatting" }) || a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = oo(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class wf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 90);
    G(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "e":
      case "ee":
        return Se(De(e.length, t), i);
      case "eo":
        return Se(
          a.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(t, { width: "wide", context: "formatting" }) || a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = oo(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class bf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 90);
    G(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, e, a, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "c":
      case "cc":
        return Se(De(e.length, t), i);
      case "co":
        return Se(
          a.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return a.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(t, { width: "wide", context: "standalone" }) || a.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = oo(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
function kf(n, r) {
  const t = q(n), e = Gd(t), a = r - e;
  return ot(t, a);
}
class Df extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 90);
    G(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (i) => i === 0 ? 7 : i;
    switch (e) {
      case "i":
      case "ii":
        return De(e.length, t);
      case "io":
        return a.ordinalNumber(t, { unit: "day" });
      case "iii":
        return Se(
          a.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return Se(
          a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return Se(
          a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return Se(
          a.day(t, {
            width: "wide",
            context: "formatting"
          }) || a.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 7;
  }
  set(t, e, a) {
    return t = kf(t, a), t.setHours(0, 0, 0, 0), t;
  }
}
class _f extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 80);
    G(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(ao(a), 0, 0, 0), t;
  }
}
class xf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 80);
    G(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(ao(a), 0, 0, 0), t;
  }
}
class Mf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 80);
    G(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(ao(a), 0, 0, 0), t;
  }
}
class Sf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 70);
    G(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "h":
        return ke(Me.hour12h, t);
      case "ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, a) {
    const o = t.getHours() >= 12;
    return o && a < 12 ? t.setHours(a + 12, 0, 0, 0) : !o && a === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class Cf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 70);
    G(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "H":
        return ke(Me.hour23h, t);
      case "Ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, a) {
    return t.setHours(a, 0, 0, 0), t;
  }
}
class Pf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 70);
    G(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "K":
        return ke(Me.hour11h, t);
      case "Ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.getHours() >= 12 && a < 12 ? t.setHours(a + 12, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class Ef extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 70);
    G(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "k":
        return ke(Me.hour24h, t);
      case "ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, a) {
    const o = a <= 24 ? a % 24 : a;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class Tf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 60);
    G(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "m":
        return ke(Me.minute, t);
      case "mo":
        return a.ordinalNumber(t, { unit: "minute" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setMinutes(a, 0, 0), t;
  }
}
class Of extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 50);
    G(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "s":
        return ke(Me.second, t);
      case "so":
        return a.ordinalNumber(t, { unit: "second" });
      default:
        return De(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setSeconds(a, 0), t;
  }
}
class Nf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 30);
    G(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const a = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return Se(De(e.length, t), a);
  }
  set(t, e, a) {
    return t.setMilliseconds(a), t;
  }
}
class $f extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 10);
    G(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return dt(
          ut.basicOptionalMinutes,
          t
        );
      case "XX":
        return dt(ut.basic, t);
      case "XXXX":
        return dt(
          ut.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return dt(
          ut.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return dt(ut.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : he(
      t,
      t.getTime() - br(t) - a
    );
  }
}
class Rf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 10);
    G(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return dt(
          ut.basicOptionalMinutes,
          t
        );
      case "xx":
        return dt(ut.basic, t);
      case "xxxx":
        return dt(
          ut.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return dt(
          ut.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return dt(ut.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : he(
      t,
      t.getTime() - br(t) - a
    );
  }
}
class Yf extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 40);
    G(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Cs(t);
  }
  set(t, e, a) {
    return [he(t, a * 1e3), { timestampIsSet: !0 }];
  }
}
class If extends ce {
  constructor() {
    super(...arguments);
    G(this, "priority", 20);
    G(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Cs(t);
  }
  set(t, e, a) {
    return [he(t, a), { timestampIsSet: !0 }];
  }
}
const Lf = {
  G: new ef(),
  y: new tf(),
  Y: new nf(),
  R: new rf(),
  u: new af(),
  Q: new of(),
  q: new sf(),
  M: new cf(),
  L: new lf(),
  w: new df(),
  I: new pf(),
  d: new vf(),
  D: new gf(),
  E: new yf(),
  e: new wf(),
  c: new bf(),
  i: new Df(),
  a: new _f(),
  b: new xf(),
  B: new Mf(),
  h: new Sf(),
  H: new Cf(),
  K: new Pf(),
  k: new Ef(),
  m: new Tf(),
  s: new Of(),
  S: new Nf(),
  X: new $f(),
  x: new Rf(),
  t: new Yf(),
  T: new If()
}, Af = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Wf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ff = /^'([^]*?)'?$/, Hf = /''/g, zf = /\S/, Vf = /[a-zA-Z]/;
function Ur(n, r, t, e) {
  var p, v, y, b, D, M, g, x;
  const a = Qd(), o = (e == null ? void 0 : e.locale) ?? a.locale ?? ks, i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((v = (p = e == null ? void 0 : e.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (y = a.locale) == null ? void 0 : y.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = (e == null ? void 0 : e.weekStartsOn) ?? ((M = (D = e == null ? void 0 : e.locale) == null ? void 0 : D.options) == null ? void 0 : M.weekStartsOn) ?? a.weekStartsOn ?? ((x = (g = a.locale) == null ? void 0 : g.options) == null ? void 0 : x.weekStartsOn) ?? 0;
  if (r === "")
    return n === "" ? q(t) : he(t, NaN);
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: o
  }, l = [new Jd()], u = r.match(Wf).map((w) => {
    const P = w[0];
    if (P in Sr) {
      const T = Sr[P];
      return T(w, o.formatLong);
    }
    return w;
  }).join("").match(Af), d = [];
  for (let w of u) {
    !(e != null && e.useAdditionalWeekYearTokens) && Ms(w) && $a(w, r, n), !(e != null && e.useAdditionalDayOfYearTokens) && xs(w) && $a(w, r, n);
    const P = w[0], T = Lf[P];
    if (T) {
      const { incompatibleTokens: I } = T;
      if (Array.isArray(I)) {
        const Z = d.find(
          (R) => I.includes(R.token) || R.token === P
        );
        if (Z)
          throw new RangeError(
            `The format string mustn't contain \`${Z.fullToken}\` and \`${w}\` at the same time`
          );
      } else if (T.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${w}\` and any other token at the same time`
        );
      d.push({ token: P, fullToken: w });
      const Q = T.run(
        n,
        w,
        o.match,
        c
      );
      if (!Q)
        return he(t, NaN);
      l.push(Q.setter), n = Q.rest;
    } else {
      if (P.match(Vf))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (w === "''" ? w = "'" : P === "'" && (w = Bf(w)), n.indexOf(w) === 0)
        n = n.slice(w.length);
      else
        return he(t, NaN);
    }
  }
  if (n.length > 0 && zf.test(n))
    return he(t, NaN);
  const f = l.map((w) => w.priority).sort((w, P) => P - w).filter((w, P, T) => T.indexOf(w) === P).map(
    (w) => l.filter((P) => P.priority === w).sort((P, T) => T.subPriority - P.subPriority)
  ).map((w) => w[0]);
  let h = q(t);
  if (isNaN(h.getTime()))
    return he(t, NaN);
  const m = {};
  for (const w of f) {
    if (!w.validate(h, c))
      return he(t, NaN);
    const P = w.set(h, m, c);
    Array.isArray(P) ? (h = P[0], Object.assign(m, P[1])) : h = P;
  }
  return he(t, h);
}
function Bf(n) {
  return n.match(Ff)[1].replace(Hf, "'");
}
function jf(n, r) {
  const t = q(n), e = q(r);
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
}
function Zf(n, r) {
  const t = Na(n), e = Na(r);
  return +t == +e;
}
function Qf(n, r) {
  const t = q(n), e = q(r);
  return t.getFullYear() === e.getFullYear();
}
function zn(n, r) {
  const t = +q(n), [e, a] = [
    +q(r.start),
    +q(r.end)
  ].sort((o, i) => o - i);
  return t >= e && t <= a;
}
function Gf(n, r) {
  return ot(n, -r);
}
function qf(n, r) {
  const t = (r == null ? void 0 : r.additionalDigits) ?? 2, e = Jf(n);
  let a;
  if (e.date) {
    const c = ep(e.date, t);
    a = tp(c.restDateString, c.year);
  }
  if (!a || isNaN(a.getTime()))
    return new Date(NaN);
  const o = a.getTime();
  let i = 0, s;
  if (e.time && (i = np(e.time), isNaN(i)))
    return new Date(NaN);
  if (e.timezone) {
    if (s = rp(e.timezone), isNaN(s))
      return new Date(NaN);
  } else {
    const c = new Date(o + i), l = new Date(0);
    return l.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), l.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), l;
  }
  return new Date(o + i + s);
}
const er = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Uf = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Xf = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Kf = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Jf(n) {
  const r = {}, t = n.split(er.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return r;
  if (/:/.test(t[0]) ? e = t[0] : (r.date = t[0], e = t[1], er.timeZoneDelimiter.test(r.date) && (r.date = n.split(er.timeZoneDelimiter)[0], e = n.substr(
    r.date.length,
    n.length
  ))), e) {
    const a = er.timezone.exec(e);
    a ? (r.time = e.replace(a[1], ""), r.timezone = a[1]) : r.time = e;
  }
  return r;
}
function ep(n, r) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + r) + "})|(\\d{2}|[+-]\\d{" + (2 + r) + "})$)"
  ), e = n.match(t);
  if (!e)
    return { year: NaN, restDateString: "" };
  const a = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: n.slice((e[1] || e[2]).length)
  };
}
function tp(n, r) {
  if (r === null)
    return new Date(NaN);
  const t = n.match(Uf);
  if (!t)
    return new Date(NaN);
  const e = !!t[4], a = Nn(t[1]), o = Nn(t[2]) - 1, i = Nn(t[3]), s = Nn(t[4]), c = Nn(t[5]) - 1;
  if (e)
    return cp(r, s, c) ? ap(r, s, c) : new Date(NaN);
  {
    const l = new Date(0);
    return !ip(r, o, i) || !sp(r, a) ? new Date(NaN) : (l.setUTCFullYear(r, o, Math.max(a, i)), l);
  }
}
function Nn(n) {
  return n ? parseInt(n) : 1;
}
function np(n) {
  const r = n.match(Xf);
  if (!r)
    return NaN;
  const t = Xr(r[1]), e = Xr(r[2]), a = Xr(r[3]);
  return lp(t, e, a) ? t * Ir + e * Yr + a * 1e3 : NaN;
}
function Xr(n) {
  return n && parseFloat(n.replace(",", ".")) || 0;
}
function rp(n) {
  if (n === "Z")
    return 0;
  const r = n.match(Kf);
  if (!r)
    return 0;
  const t = r[1] === "+" ? -1 : 1, e = parseInt(r[2]), a = r[3] && parseInt(r[3]) || 0;
  return up(e, a) ? t * (e * Ir + a * Yr) : NaN;
}
function ap(n, r, t) {
  const e = new Date(0);
  e.setUTCFullYear(n, 0, 4);
  const a = e.getUTCDay() || 7, o = (r - 1) * 7 + t + 1 - a;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const op = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ts(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
function ip(n, r, t) {
  return r >= 0 && r <= 11 && t >= 1 && t <= (op[r] || (Ts(n) ? 29 : 28));
}
function sp(n, r) {
  return r >= 1 && r <= (Ts(n) ? 366 : 365);
}
function cp(n, r, t) {
  return r >= 1 && r <= 53 && t >= 0 && t <= 6;
}
function lp(n, r, t) {
  return n === 24 ? r === 0 && t === 0 : t >= 0 && t < 60 && r >= 0 && r < 60 && n >= 0 && n < 25;
}
function up(n, r) {
  return r >= 0 && r <= 59;
}
function qe(n, r) {
  const t = q(n), e = t.getFullYear(), a = t.getDate(), o = he(n, 0);
  o.setFullYear(e, r, 15), o.setHours(0, 0, 0, 0);
  const i = Zd(o);
  return t.setMonth(r, Math.min(a, i)), t;
}
function dp(n, r) {
  let t = q(n);
  return isNaN(+t) ? he(n, NaN) : (r.year != null && t.setFullYear(r.year), r.month != null && (t = qe(t, r.month)), r.date != null && t.setDate(r.date), r.hours != null && t.setHours(r.hours), r.minutes != null && t.setMinutes(r.minutes), r.seconds != null && t.setSeconds(r.seconds), r.milliseconds != null && t.setMilliseconds(r.milliseconds), t);
}
function lr(n, r) {
  const t = q(n);
  return t.setHours(r), t;
}
function ur(n, r) {
  const t = q(n);
  return t.setMinutes(r), t;
}
function on(n, r) {
  const t = q(n), e = Math.trunc(t.getMonth() / 3) + 1, a = r - e;
  return qe(t, t.getMonth() + a * 3);
}
function dr(n, r) {
  const t = q(n);
  return t.setSeconds(r), t;
}
function ct(n, r) {
  const t = q(n);
  return isNaN(+t) ? he(n, NaN) : (t.setFullYear(r), t);
}
function Qt(n, r) {
  return st(n, -r);
}
function Os(n, r) {
  return to(n, -r);
}
function Uo(n, r) {
  return kr(n, -r);
}
function wn(n, r) {
  return kt(n, -r);
}
function Ar() {
  return typeof window < "u";
}
function Cn(n) {
  return Ns(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Ke(n) {
  var r;
  return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function gt(n) {
  var r;
  return (r = (Ns(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement;
}
function Ns(n) {
  return Ar() ? n instanceof Node || n instanceof Ke(n).Node : !1;
}
function Le(n) {
  return Ar() ? n instanceof Element || n instanceof Ke(n).Element : !1;
}
function vt(n) {
  return Ar() ? n instanceof HTMLElement || n instanceof Ke(n).HTMLElement : !1;
}
function Xo(n) {
  return !Ar() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Ke(n).ShadowRoot;
}
const fp = /* @__PURE__ */ new Set(["inline", "contents"]);
function jn(n) {
  const {
    overflow: r,
    overflowX: t,
    overflowY: e,
    display: a
  } = nt(n);
  return /auto|scroll|overlay|hidden|clip/.test(r + e + t) && !fp.has(a);
}
const pp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function hp(n) {
  return pp.has(Cn(n));
}
const mp = [":popover-open", ":modal"];
function Wr(n) {
  return mp.some((r) => {
    try {
      return n.matches(r);
    } catch {
      return !1;
    }
  });
}
const vp = ["transform", "translate", "scale", "rotate", "perspective"], gp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], yp = ["paint", "layout", "strict", "content"];
function io(n) {
  const r = so(), t = Le(n) ? nt(n) : n;
  return vp.some((e) => t[e] ? t[e] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !r && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !r && (t.filter ? t.filter !== "none" : !1) || gp.some((e) => (t.willChange || "").includes(e)) || yp.some((e) => (t.contain || "").includes(e));
}
function wp(n) {
  let r = Ft(n);
  for (; vt(r) && !bn(r); ) {
    if (io(r))
      return r;
    if (Wr(r))
      return null;
    r = Ft(r);
  }
  return null;
}
function so() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const bp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function bn(n) {
  return bp.has(Cn(n));
}
function nt(n) {
  return Ke(n).getComputedStyle(n);
}
function Fr(n) {
  return Le(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Ft(n) {
  if (Cn(n) === "html")
    return n;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Xo(n) && n.host || // Fallback.
    gt(n)
  );
  return Xo(r) ? r.host : r;
}
function $s(n) {
  const r = Ft(n);
  return bn(r) ? n.ownerDocument ? n.ownerDocument.body : n.body : vt(r) && jn(r) ? r : $s(r);
}
function Vn(n, r, t) {
  var e;
  r === void 0 && (r = []), t === void 0 && (t = !0);
  const a = $s(n), o = a === ((e = n.ownerDocument) == null ? void 0 : e.body), i = Ke(a);
  if (o) {
    const s = Ya(i);
    return r.concat(i, i.visualViewport || [], jn(a) ? a : [], s && t ? Vn(s) : []);
  }
  return r.concat(a, Vn(a, [], t));
}
function Ya(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
const kn = Math.min, Gt = Math.max, Pr = Math.round, tr = Math.floor, mt = (n) => ({
  x: n,
  y: n
}), kp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dp = {
  start: "end",
  end: "start"
};
function _p(n, r, t) {
  return Gt(n, kn(r, t));
}
function Hr(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Dn(n) {
  return n.split("-")[0];
}
function Zn(n) {
  return n.split("-")[1];
}
function xp(n) {
  return n === "x" ? "y" : "x";
}
function co(n) {
  return n === "y" ? "height" : "width";
}
const Mp = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vt(n) {
  return Mp.has(Dn(n)) ? "y" : "x";
}
function lo(n) {
  return xp(Vt(n));
}
function Sp(n, r, t) {
  t === void 0 && (t = !1);
  const e = Zn(n), a = lo(n), o = co(a);
  let i = a === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return r.reference[o] > r.floating[o] && (i = Er(i)), [i, Er(i)];
}
function Cp(n) {
  const r = Er(n);
  return [Ia(n), r, Ia(r)];
}
function Ia(n) {
  return n.replace(/start|end/g, (r) => Dp[r]);
}
const Ko = ["left", "right"], Jo = ["right", "left"], Pp = ["top", "bottom"], Ep = ["bottom", "top"];
function Tp(n, r, t) {
  switch (n) {
    case "top":
    case "bottom":
      return t ? r ? Jo : Ko : r ? Ko : Jo;
    case "left":
    case "right":
      return r ? Pp : Ep;
    default:
      return [];
  }
}
function Op(n, r, t, e) {
  const a = Zn(n);
  let o = Tp(Dn(n), t === "start", e);
  return a && (o = o.map((i) => i + "-" + a), r && (o = o.concat(o.map(Ia)))), o;
}
function Er(n) {
  return n.replace(/left|right|bottom|top/g, (r) => kp[r]);
}
function Np(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Rs(n) {
  return typeof n != "number" ? Np(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Tr(n) {
  const {
    x: r,
    y: t,
    width: e,
    height: a
  } = n;
  return {
    width: e,
    height: a,
    top: t,
    left: r,
    right: r + e,
    bottom: t + a,
    x: r,
    y: t
  };
}
var $p = typeof document < "u", Rp = function() {
}, Or = $p ? Rr : Rp;
const Yp = {
  ...E
}, Ip = Yp.useInsertionEffect, Lp = Ip || ((n) => n());
function Ap(n) {
  const r = E.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Lp(() => {
    r.current = n;
  }), E.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
      e[a] = arguments[a];
    return r.current == null ? void 0 : r.current(...e);
  }, []);
}
function ei(n, r, t) {
  let {
    reference: e,
    floating: a
  } = n;
  const o = Vt(r), i = lo(r), s = co(i), c = Dn(r), l = o === "y", u = e.x + e.width / 2 - a.width / 2, d = e.y + e.height / 2 - a.height / 2, f = e[s] / 2 - a[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: e.y - a.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: e.y + e.height
      };
      break;
    case "right":
      h = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: e.x - a.width,
        y: d
      };
      break;
    default:
      h = {
        x: e.x,
        y: e.y
      };
  }
  switch (Zn(r)) {
    case "start":
      h[i] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      h[i] += f * (t && l ? -1 : 1);
      break;
  }
  return h;
}
const Wp = async (n, r, t) => {
  const {
    placement: e = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: i
  } = t, s = o.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(r));
  let l = await i.getElementRects({
    reference: n,
    floating: r,
    strategy: a
  }), {
    x: u,
    y: d
  } = ei(l, e, c), f = e, h = {}, m = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: v,
      fn: y
    } = s[p], {
      x: b,
      y: D,
      data: M,
      reset: g
    } = await y({
      x: u,
      y: d,
      initialPlacement: e,
      placement: f,
      strategy: a,
      middlewareData: h,
      rects: l,
      platform: i,
      elements: {
        reference: n,
        floating: r
      }
    });
    u = b ?? u, d = D ?? d, h = {
      ...h,
      [v]: {
        ...h[v],
        ...M
      }
    }, g && m <= 50 && (m++, typeof g == "object" && (g.placement && (f = g.placement), g.rects && (l = g.rects === !0 ? await i.getElementRects({
      reference: n,
      floating: r,
      strategy: a
    }) : g.rects), {
      x: u,
      y: d
    } = ei(l, f, c)), p = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: a,
    middlewareData: h
  };
};
async function Fp(n, r) {
  var t;
  r === void 0 && (r = {});
  const {
    x: e,
    y: a,
    platform: o,
    rects: i,
    elements: s,
    strategy: c
  } = n, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Hr(r, n), m = Rs(h), v = s[f ? d === "floating" ? "reference" : "floating" : d], y = Tr(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(v))) == null || t ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    x: e,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), M = await (o.isElement == null ? void 0 : o.isElement(D)) ? await (o.getScale == null ? void 0 : o.getScale(D)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = Tr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: D,
    strategy: c
  }) : b);
  return {
    top: (y.top - g.top + m.top) / M.y,
    bottom: (g.bottom - y.bottom + m.bottom) / M.y,
    left: (y.left - g.left + m.left) / M.x,
    right: (g.right - y.right + m.right) / M.x
  };
}
const Hp = (n) => ({
  name: "arrow",
  options: n,
  async fn(r) {
    const {
      x: t,
      y: e,
      placement: a,
      rects: o,
      platform: i,
      elements: s,
      middlewareData: c
    } = r, {
      element: l,
      padding: u = 0
    } = Hr(n, r) || {};
    if (l == null)
      return {};
    const d = Rs(u), f = {
      x: t,
      y: e
    }, h = lo(a), m = co(h), p = await i.getDimensions(l), v = h === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", D = v ? "clientHeight" : "clientWidth", M = o.reference[m] + o.reference[h] - f[h] - o.floating[m], g = f[h] - o.reference[h], x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let w = x ? x[D] : 0;
    (!w || !await (i.isElement == null ? void 0 : i.isElement(x))) && (w = s.floating[D] || o.floating[m]);
    const P = M / 2 - g / 2, T = w / 2 - p[m] / 2 - 1, I = kn(d[y], T), Q = kn(d[b], T), Z = I, R = w - p[m] - Q, O = w / 2 - p[m] / 2 + P, C = _p(Z, O, R), N = !c.arrow && Zn(a) != null && O !== C && o.reference[m] / 2 - (O < Z ? I : Q) - p[m] / 2 < 0, _ = N ? O < Z ? O - Z : O - R : 0;
    return {
      [h]: f[h] + _,
      data: {
        [h]: C,
        centerOffset: O - C - _,
        ...N && {
          alignmentOffset: _
        }
      },
      reset: N
    };
  }
}), zp = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(r) {
      var t, e;
      const {
        placement: a,
        middlewareData: o,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = r, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...v
      } = Hr(n, r);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const y = Dn(a), b = Vt(s), D = Dn(s) === s, M = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), g = f || (D || !p ? [Er(s)] : Cp(s)), x = m !== "none";
      !f && x && g.push(...Op(s, p, m, M));
      const w = [s, ...g], P = await Fp(r, v), T = [];
      let I = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && T.push(P[y]), d) {
        const O = Sp(a, i, M);
        T.push(P[O[0]], P[O[1]]);
      }
      if (I = [...I, {
        placement: a,
        overflows: T
      }], !T.every((O) => O <= 0)) {
        var Q, Z;
        const O = (((Q = o.flip) == null ? void 0 : Q.index) || 0) + 1, C = w[O];
        if (C && (!(d === "alignment" ? b !== Vt(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every(($) => $.overflows[0] > 0 && Vt($.placement) === b)))
          return {
            data: {
              index: O,
              overflows: I
            },
            reset: {
              placement: C
            }
          };
        let N = (Z = I.filter((_) => _.overflows[0] <= 0).sort((_, $) => _.overflows[1] - $.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var R;
              const _ = (R = I.filter(($) => {
                if (x) {
                  const V = Vt($.placement);
                  return V === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((V) => V > 0).reduce((V, X) => V + X, 0)]).sort(($, V) => $[1] - V[1])[0]) == null ? void 0 : R[0];
              _ && (N = _);
              break;
            }
            case "initialPlacement":
              N = s;
              break;
          }
        if (a !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
}, Vp = /* @__PURE__ */ new Set(["left", "top"]);
async function Bp(n, r) {
  const {
    placement: t,
    platform: e,
    elements: a
  } = n, o = await (e.isRTL == null ? void 0 : e.isRTL(a.floating)), i = Dn(t), s = Zn(t), c = Vt(t) === "y", l = Vp.has(i) ? -1 : 1, u = o && c ? -1 : 1, d = Hr(r, n);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof m == "number" && (h = s === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: f * l
  } : {
    x: f * l,
    y: h * u
  };
}
const jp = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(r) {
      var t, e;
      const {
        x: a,
        y: o,
        placement: i,
        middlewareData: s
      } = r, c = await Bp(r, n);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : {
        x: a + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
};
function Ys(n) {
  const r = nt(n);
  let t = parseFloat(r.width) || 0, e = parseFloat(r.height) || 0;
  const a = vt(n), o = a ? n.offsetWidth : t, i = a ? n.offsetHeight : e, s = Pr(t) !== o || Pr(e) !== i;
  return s && (t = o, e = i), {
    width: t,
    height: e,
    $: s
  };
}
function uo(n) {
  return Le(n) ? n : n.contextElement;
}
function un(n) {
  const r = uo(n);
  if (!vt(r))
    return mt(1);
  const t = r.getBoundingClientRect(), {
    width: e,
    height: a,
    $: o
  } = Ys(r);
  let i = (o ? Pr(t.width) : t.width) / e, s = (o ? Pr(t.height) : t.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Zp = /* @__PURE__ */ mt(0);
function Is(n) {
  const r = Ke(n);
  return !so() || !r.visualViewport ? Zp : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function Qp(n, r, t) {
  return r === void 0 && (r = !1), !t || r && t !== Ke(n) ? !1 : r;
}
function tn(n, r, t, e) {
  r === void 0 && (r = !1), t === void 0 && (t = !1);
  const a = n.getBoundingClientRect(), o = uo(n);
  let i = mt(1);
  r && (e ? Le(e) && (i = un(e)) : i = un(n));
  const s = Qp(o, t, e) ? Is(o) : mt(0);
  let c = (a.left + s.x) / i.x, l = (a.top + s.y) / i.y, u = a.width / i.x, d = a.height / i.y;
  if (o) {
    const f = Ke(o), h = e && Le(e) ? Ke(e) : e;
    let m = f, p = Ya(m);
    for (; p && e && h !== m; ) {
      const v = un(p), y = p.getBoundingClientRect(), b = nt(p), D = y.left + (p.clientLeft + parseFloat(b.paddingLeft)) * v.x, M = y.top + (p.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += D, l += M, m = Ke(p), p = Ya(m);
    }
  }
  return Tr({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function fo(n, r) {
  const t = Fr(n).scrollLeft;
  return r ? r.left + t : tn(gt(n)).left + t;
}
function Ls(n, r, t) {
  t === void 0 && (t = !1);
  const e = n.getBoundingClientRect(), a = e.left + r.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    fo(n, e)
  )), o = e.top + r.scrollTop;
  return {
    x: a,
    y: o
  };
}
function Gp(n) {
  let {
    elements: r,
    rect: t,
    offsetParent: e,
    strategy: a
  } = n;
  const o = a === "fixed", i = gt(e), s = r ? Wr(r.floating) : !1;
  if (e === i || s && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = mt(1);
  const u = mt(0), d = vt(e);
  if ((d || !d && !o) && ((Cn(e) !== "body" || jn(i)) && (c = Fr(e)), vt(e))) {
    const h = tn(e);
    l = un(e), u.x = h.x + e.clientLeft, u.y = h.y + e.clientTop;
  }
  const f = i && !d && !o ? Ls(i, c, !0) : mt(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + f.y
  };
}
function qp(n) {
  return Array.from(n.getClientRects());
}
function Up(n) {
  const r = gt(n), t = Fr(n), e = n.ownerDocument.body, a = Gt(r.scrollWidth, r.clientWidth, e.scrollWidth, e.clientWidth), o = Gt(r.scrollHeight, r.clientHeight, e.scrollHeight, e.clientHeight);
  let i = -t.scrollLeft + fo(n);
  const s = -t.scrollTop;
  return nt(e).direction === "rtl" && (i += Gt(r.clientWidth, e.clientWidth) - a), {
    width: a,
    height: o,
    x: i,
    y: s
  };
}
function Xp(n, r) {
  const t = Ke(n), e = gt(n), a = t.visualViewport;
  let o = e.clientWidth, i = e.clientHeight, s = 0, c = 0;
  if (a) {
    o = a.width, i = a.height;
    const l = so();
    (!l || l && r === "fixed") && (s = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
const Kp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Jp(n, r) {
  const t = tn(n, !0, r === "fixed"), e = t.top + n.clientTop, a = t.left + n.clientLeft, o = vt(n) ? un(n) : mt(1), i = n.clientWidth * o.x, s = n.clientHeight * o.y, c = a * o.x, l = e * o.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function ti(n, r, t) {
  let e;
  if (r === "viewport")
    e = Xp(n, t);
  else if (r === "document")
    e = Up(gt(n));
  else if (Le(r))
    e = Jp(r, t);
  else {
    const a = Is(n);
    e = {
      x: r.x - a.x,
      y: r.y - a.y,
      width: r.width,
      height: r.height
    };
  }
  return Tr(e);
}
function As(n, r) {
  const t = Ft(n);
  return t === r || !Le(t) || bn(t) ? !1 : nt(t).position === "fixed" || As(t, r);
}
function eh(n, r) {
  const t = r.get(n);
  if (t)
    return t;
  let e = Vn(n, [], !1).filter((s) => Le(s) && Cn(s) !== "body"), a = null;
  const o = nt(n).position === "fixed";
  let i = o ? Ft(n) : n;
  for (; Le(i) && !bn(i); ) {
    const s = nt(i), c = io(i);
    !c && s.position === "fixed" && (a = null), (o ? !c && !a : !c && s.position === "static" && !!a && Kp.has(a.position) || jn(i) && !c && As(n, i)) ? e = e.filter((u) => u !== i) : a = s, i = Ft(i);
  }
  return r.set(n, e), e;
}
function th(n) {
  let {
    element: r,
    boundary: t,
    rootBoundary: e,
    strategy: a
  } = n;
  const i = [...t === "clippingAncestors" ? Wr(r) ? [] : eh(r, this._c) : [].concat(t), e], s = i[0], c = i.reduce((l, u) => {
    const d = ti(r, u, a);
    return l.top = Gt(d.top, l.top), l.right = kn(d.right, l.right), l.bottom = kn(d.bottom, l.bottom), l.left = Gt(d.left, l.left), l;
  }, ti(r, s, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function nh(n) {
  const {
    width: r,
    height: t
  } = Ys(n);
  return {
    width: r,
    height: t
  };
}
function rh(n, r, t) {
  const e = vt(r), a = gt(r), o = t === "fixed", i = tn(n, !0, o, r);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = mt(0);
  function l() {
    c.x = fo(a);
  }
  if (e || !e && !o)
    if ((Cn(r) !== "body" || jn(a)) && (s = Fr(r)), e) {
      const h = tn(r, !0, o, r);
      c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
    } else
      a && l();
  o && !e && a && l();
  const u = a && !e && !o ? Ls(a, s) : mt(0), d = i.left + s.scrollLeft - c.x - u.x, f = i.top + s.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function Kr(n) {
  return nt(n).position === "static";
}
function ni(n, r) {
  if (!vt(n) || nt(n).position === "fixed")
    return null;
  if (r)
    return r(n);
  let t = n.offsetParent;
  return gt(n) === t && (t = t.ownerDocument.body), t;
}
function Ws(n, r) {
  const t = Ke(n);
  if (Wr(n))
    return t;
  if (!vt(n)) {
    let a = Ft(n);
    for (; a && !bn(a); ) {
      if (Le(a) && !Kr(a))
        return a;
      a = Ft(a);
    }
    return t;
  }
  let e = ni(n, r);
  for (; e && hp(e) && Kr(e); )
    e = ni(e, r);
  return e && bn(e) && Kr(e) && !io(e) ? t : e || wp(n) || t;
}
const ah = async function(n) {
  const r = this.getOffsetParent || Ws, t = this.getDimensions, e = await t(n.floating);
  return {
    reference: rh(n.reference, await r(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function oh(n) {
  return nt(n).direction === "rtl";
}
const ih = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gp,
  getDocumentElement: gt,
  getClippingRect: th,
  getOffsetParent: Ws,
  getElementRects: ah,
  getClientRects: qp,
  getDimensions: nh,
  getScale: un,
  isElement: Le,
  isRTL: oh
};
function Fs(n, r) {
  return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height;
}
function sh(n, r) {
  let t = null, e;
  const a = gt(n);
  function o() {
    var s;
    clearTimeout(e), (s = t) == null || s.disconnect(), t = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), o();
    const l = n.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: h
    } = l;
    if (s || r(), !f || !h)
      return;
    const m = tr(d), p = tr(a.clientWidth - (u + f)), v = tr(a.clientHeight - (d + h)), y = tr(u), D = {
      rootMargin: -m + "px " + -p + "px " + -v + "px " + -y + "px",
      threshold: Gt(0, kn(1, c)) || 1
    };
    let M = !0;
    function g(x) {
      const w = x[0].intersectionRatio;
      if (w !== c) {
        if (!M)
          return i();
        w ? i(!1, w) : e = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      w === 1 && !Fs(l, n.getBoundingClientRect()) && i(), M = !1;
    }
    try {
      t = new IntersectionObserver(g, {
        ...D,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(g, D);
    }
    t.observe(n);
  }
  return i(!0), o;
}
function ch(n, r, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = uo(n), u = a || o ? [...l ? Vn(l) : [], ...Vn(r)] : [];
  u.forEach((y) => {
    a && y.addEventListener("scroll", t, {
      passive: !0
    }), o && y.addEventListener("resize", t);
  });
  const d = l && s ? sh(l, t) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === l && h && (h.unobserve(r), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var D;
      (D = h) == null || D.observe(r);
    })), t();
  }), l && !c && h.observe(l), h.observe(r));
  let m, p = c ? tn(n) : null;
  c && v();
  function v() {
    const y = tn(n);
    p && !Fs(p, y) && t(), p = y, m = requestAnimationFrame(v);
  }
  return t(), () => {
    var y;
    u.forEach((b) => {
      a && b.removeEventListener("scroll", t), o && b.removeEventListener("resize", t);
    }), d == null || d(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const lh = jp, uh = zp, ri = Hp, dh = (n, r, t) => {
  const e = /* @__PURE__ */ new Map(), a = {
    platform: ih,
    ...t
  }, o = {
    ...a.platform,
    _c: e
  };
  return Wp(n, r, {
    ...a,
    platform: o
  });
};
var fh = typeof document < "u", ph = function() {
}, fr = fh ? Rr : ph;
function Nr(n, r) {
  if (n === r)
    return !0;
  if (typeof n != typeof r)
    return !1;
  if (typeof n == "function" && n.toString() === r.toString())
    return !0;
  let t, e, a;
  if (n && r && typeof n == "object") {
    if (Array.isArray(n)) {
      if (t = n.length, t !== r.length)
        return !1;
      for (e = t; e-- !== 0; )
        if (!Nr(n[e], r[e]))
          return !1;
      return !0;
    }
    if (a = Object.keys(n), t = a.length, t !== Object.keys(r).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(r, a[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = a[e];
      if (!(o === "_owner" && n.$$typeof) && !Nr(n[o], r[o]))
        return !1;
    }
    return !0;
  }
  return n !== n && r !== r;
}
function Hs(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ai(n, r) {
  const t = Hs(n);
  return Math.round(r * t) / t;
}
function Jr(n) {
  const r = E.useRef(n);
  return fr(() => {
    r.current = n;
  }), r;
}
function hh(n) {
  n === void 0 && (n = {});
  const {
    placement: r = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: a,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = n, [u, d] = E.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = E.useState(e);
  Nr(f, e) || h(e);
  const [m, p] = E.useState(null), [v, y] = E.useState(null), b = E.useCallback(($) => {
    $ !== x.current && (x.current = $, p($));
  }, []), D = E.useCallback(($) => {
    $ !== w.current && (w.current = $, y($));
  }, []), M = o || m, g = i || v, x = E.useRef(null), w = E.useRef(null), P = E.useRef(u), T = c != null, I = Jr(c), Q = Jr(a), Z = Jr(l), R = E.useCallback(() => {
    if (!x.current || !w.current)
      return;
    const $ = {
      placement: r,
      strategy: t,
      middleware: f
    };
    Q.current && ($.platform = Q.current), dh(x.current, w.current, $).then((V) => {
      const X = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Z.current !== !1
      };
      O.current && !Nr(P.current, X) && (P.current = X, rc.flushSync(() => {
        d(X);
      }));
    });
  }, [f, r, t, Q, Z]);
  fr(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, d(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [l]);
  const O = E.useRef(!1);
  fr(() => (O.current = !0, () => {
    O.current = !1;
  }), []), fr(() => {
    if (M && (x.current = M), g && (w.current = g), M && g) {
      if (I.current)
        return I.current(M, g, R);
      R();
    }
  }, [M, g, R, I, T]);
  const C = E.useMemo(() => ({
    reference: x,
    floating: w,
    setReference: b,
    setFloating: D
  }), [b, D]), N = E.useMemo(() => ({
    reference: M,
    floating: g
  }), [M, g]), _ = E.useMemo(() => {
    const $ = {
      position: t,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return $;
    const V = ai(N.floating, u.x), X = ai(N.floating, u.y);
    return s ? {
      ...$,
      transform: "translate(" + V + "px, " + X + "px)",
      ...Hs(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: V,
      top: X
    };
  }, [t, s, N.floating, u.x, u.y]);
  return E.useMemo(() => ({
    ...u,
    update: R,
    refs: C,
    elements: N,
    floatingStyles: _
  }), [u, R, C, N, _]);
}
const mh = (n) => {
  function r(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const {
        element: e,
        padding: a
      } = typeof n == "function" ? n(t) : n;
      return e && r(e) ? e.current != null ? ri({
        element: e.current,
        padding: a
      }).fn(t) : {} : e ? ri({
        element: e,
        padding: a
      }).fn(t) : {};
    }
  };
}, vh = (n, r) => ({
  ...lh(n),
  options: [n, r]
}), gh = (n, r) => ({
  ...uh(n),
  options: [n, r]
}), yh = (n, r) => ({
  ...mh(n),
  options: [n, r]
}), wh = {
  ...E
};
let oi = !1, bh = 0;
const ii = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + bh++
);
function kh() {
  const [n, r] = E.useState(() => oi ? ii() : void 0);
  return Or(() => {
    n == null && r(ii());
  }, []), E.useEffect(() => {
    oi = !0;
  }, []), n;
}
const Dh = wh.useId, zs = Dh || kh;
let Bn;
process.env.NODE_ENV !== "production" && (Bn = /* @__PURE__ */ new Set());
function _h() {
  for (var n, r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((n = Bn) != null && n.has(a))) {
    var o;
    (o = Bn) == null || o.add(a), console.warn(a);
  }
}
function xh() {
  for (var n, r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((n = Bn) != null && n.has(a))) {
    var o;
    (o = Bn) == null || o.add(a), console.error(a);
  }
}
const Mh = /* @__PURE__ */ E.forwardRef(function(r, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: a
      },
      middlewareData: {
        arrow: o,
        shift: i
      }
    },
    width: s = 14,
    height: c = 7,
    tipRadius: l = 0,
    strokeWidth: u = 0,
    staticOffset: d,
    stroke: f,
    d: h,
    style: {
      transform: m,
      ...p
    } = {},
    ...v
  } = r;
  process.env.NODE_ENV !== "production" && (t || _h("The `ref` prop is required for `FloatingArrow`."));
  const y = zs(), [b, D] = E.useState(!1);
  if (Or(() => {
    if (!a)
      return;
    nt(a).direction === "rtl" && D(!0);
  }, [a]), !a)
    return null;
  const [M, g] = e.split("-"), x = M === "top" || M === "bottom";
  let w = d;
  (x && i != null && i.x || !x && i != null && i.y) && (w = null);
  const P = u * 2, T = P / 2, I = s / 2 * (l / -8 + 1), Q = c / 2 * l / 4, Z = !!h, R = w && g === "end" ? "bottom" : "top";
  let O = w && g === "end" ? "right" : "left";
  w && b && (O = g === "end" ? "left" : "right");
  const C = (o == null ? void 0 : o.x) != null ? w || o.x : "", N = (o == null ? void 0 : o.y) != null ? w || o.y : "", _ = h || "M0,0" + (" H" + s) + (" L" + (s - I) + "," + (c - Q)) + (" Q" + s / 2 + "," + c + " " + I + "," + (c - Q)) + " Z", $ = {
    top: Z ? "rotate(180deg)" : "",
    left: Z ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: Z ? "" : "rotate(180deg)",
    right: Z ? "rotate(-90deg)" : "rotate(90deg)"
  }[M];
  return /* @__PURE__ */ fe("svg", {
    ...v,
    "aria-hidden": !0,
    ref: t,
    width: Z ? s : s + P,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [O]: C,
      [R]: N,
      [M]: x || Z ? "100%" : "calc(100% - " + P / 2 + "px)",
      transform: [$, m].filter((V) => !!V).join(" "),
      ...p
    },
    children: [P > 0 && /* @__PURE__ */ F("path", {
      clipPath: "url(#" + y + ")",
      fill: "none",
      stroke: f,
      strokeWidth: P + (h ? 0 : 1),
      d: _
    }), /* @__PURE__ */ F("path", {
      stroke: P && !h ? v.fill : "none",
      d: _
    }), /* @__PURE__ */ F("clipPath", {
      id: y,
      children: /* @__PURE__ */ F("rect", {
        x: -T,
        y: T * (Z ? -1 : 1),
        width: s + P,
        height: s
      })
    })]
  });
});
function Sh() {
  const n = /* @__PURE__ */ new Map();
  return {
    emit(r, t) {
      var e;
      (e = n.get(r)) == null || e.forEach((a) => a(t));
    },
    on(r, t) {
      n.has(r) || n.set(r, /* @__PURE__ */ new Set()), n.get(r).add(t);
    },
    off(r, t) {
      var e;
      (e = n.get(r)) == null || e.delete(t);
    }
  };
}
const Ch = /* @__PURE__ */ E.createContext(null), Ph = /* @__PURE__ */ E.createContext(null), Eh = () => {
  var n;
  return ((n = E.useContext(Ch)) == null ? void 0 : n.id) || null;
}, Th = () => E.useContext(Ph);
function Oh(n) {
  const {
    open: r = !1,
    onOpenChange: t,
    elements: e
  } = n, a = zs(), o = E.useRef({}), [i] = E.useState(() => Sh()), s = Eh() != null;
  if (process.env.NODE_ENV !== "production") {
    const h = e.reference;
    h && !Le(h) && xh("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = E.useState(e.reference), u = Ap((h, m, p) => {
    o.current.openEvent = h ? m : void 0, i.emit("openchange", {
      open: h,
      event: m,
      reason: p,
      nested: s
    }), t == null || t(h, m, p);
  }), d = E.useMemo(() => ({
    setPositionReference: l
  }), []), f = E.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return E.useMemo(() => ({
    dataRef: o,
    open: r,
    onOpenChange: u,
    elements: f,
    events: i,
    floatingId: a,
    refs: d
  }), [r, u, f, i, a, d]);
}
function Nh(n) {
  n === void 0 && (n = {});
  const {
    nodeId: r
  } = n, t = Oh({
    ...n,
    elements: {
      reference: null,
      floating: null,
      ...n.elements
    }
  }), e = n.rootContext || t, a = e.elements, [o, i] = E.useState(null), [s, c] = E.useState(null), u = (a == null ? void 0 : a.domReference) || o, d = E.useRef(null), f = Th();
  Or(() => {
    u && (d.current = u);
  }, [u]);
  const h = hh({
    ...n,
    elements: {
      ...a,
      ...s && {
        reference: s
      }
    }
  }), m = E.useCallback((D) => {
    const M = Le(D) ? {
      getBoundingClientRect: () => D.getBoundingClientRect(),
      getClientRects: () => D.getClientRects(),
      contextElement: D
    } : D;
    c(M), h.refs.setReference(M);
  }, [h.refs]), p = E.useCallback((D) => {
    (Le(D) || D === null) && (d.current = D, i(D)), (Le(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    D !== null && !Le(D)) && h.refs.setReference(D);
  }, [h.refs]), v = E.useMemo(() => ({
    ...h.refs,
    setReference: p,
    setPositionReference: m,
    domReference: d
  }), [h.refs, p, m]), y = E.useMemo(() => ({
    ...h.elements,
    domReference: u
  }), [h.elements, u]), b = E.useMemo(() => ({
    ...h,
    ...e,
    refs: v,
    elements: y,
    nodeId: r
  }), [h, v, y, r, e]);
  return Or(() => {
    e.dataRef.current.floatingContext = b;
    const D = f == null ? void 0 : f.nodesRef.current.find((M) => M.id === r);
    D && (D.context = b);
  }), E.useMemo(() => ({
    ...h,
    context: b,
    refs: v,
    elements: y
  }), [h, v, y, b]);
}
/*!
  react-datepicker v7.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var La = function(r, t) {
  return La = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, a) {
    e.__proto__ = a;
  } || function(e, a) {
    for (var o in a)
      Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
  }, La(r, t);
};
function Oe(n, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  La(n, r);
  function t() {
    this.constructor = n;
  }
  n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var se = function() {
  return se = Object.assign || function(t) {
    for (var e, a = 1, o = arguments.length; a < o; a++) {
      e = arguments[a];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, se.apply(this, arguments);
};
function ft(n, r, t) {
  if (t || arguments.length === 2)
    for (var e = 0, a = r.length, o; e < a; e++)
      (o || !(e in r)) && (o || (o = Array.prototype.slice.call(r, 0, e)), o[e] = r[e]);
  return n.concat(o || Array.prototype.slice.call(r));
}
var $h = function(n) {
  var r = n.showTimeSelectOnly, t = r === void 0 ? !1 : r, e = n.showTime, a = e === void 0 ? !1 : e, o = n.className, i = n.children, s = t ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return S.createElement("div", { className: o, role: "dialog", "aria-label": s, "aria-modal": "true" }, i);
}, Rh = function(n, r) {
  var t = Ae(null), e = Ae(n);
  e.current = n;
  var a = Ve(function(o) {
    var i;
    t.current && !t.current.contains(o.target) && (r && o.target instanceof HTMLElement && o.target.classList.contains(r) || (i = e.current) === null || i === void 0 || i.call(e, o));
  }, [r]);
  return Ee(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), t;
}, zr = function(n) {
  var r = n.children, t = n.onClickOutside, e = n.className, a = n.containerRef, o = n.style, i = n.ignoreClass, s = Rh(t, i);
  return S.createElement("div", { className: e, style: o, ref: function(c) {
    s.current = c, a && (a.current = c);
  } }, r);
}, j;
(function(n) {
  n.ArrowUp = "ArrowUp", n.ArrowDown = "ArrowDown", n.ArrowLeft = "ArrowLeft", n.ArrowRight = "ArrowRight", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Home = "Home", n.End = "End", n.Enter = "Enter", n.Space = " ", n.Tab = "Tab", n.Escape = "Escape", n.Backspace = "Backspace", n.X = "x";
})(j || (j = {}));
function Vs() {
  var n = typeof window < "u" ? window : globalThis;
  return n;
}
var Qn = 12, Yh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function me(n) {
  if (n == null)
    return new Date();
  var r = typeof n == "string" ? qf(n) : q(n);
  return yt(r) ? r : new Date();
}
function ea(n, r, t, e, a) {
  var o, i = null, s = qt(t) || qt(Wn()), c = !0;
  if (Array.isArray(r))
    return r.forEach(function(u) {
      var d = Ur(n, u, new Date(), {
        locale: s,
        useAdditionalWeekYearTokens: !0,
        useAdditionalDayOfYearTokens: !0
      });
      e && (c = yt(d, a) && n === be(d, u, t)), yt(d, a) && c && (i = d);
    }), i;
  if (i = Ur(n, r, new Date(), {
    locale: s,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  }), e)
    c = yt(i) && n === be(i, r, t);
  else if (!yt(i)) {
    var l = ((o = r.match(Yh)) !== null && o !== void 0 ? o : []).map(function(u) {
      var d = u[0];
      if (d === "p" || d === "P") {
        var f = Sr[d];
        return s ? f(u, s.formatLong) : d;
      }
      return u;
    }).join("");
    n.length > 0 && (i = Ur(n, l.slice(0, n.length), new Date(), {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    })), yt(i) || (i = new Date(n));
  }
  return yt(i) && c ? i : null;
}
function yt(n, r) {
  return Dr(n) && !en(n, r ?? new Date("1/1/1800"));
}
function be(n, r, t) {
  if (t === "en")
    return Go(n, r, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? qt(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), !e && Wn() && qt(Wn()) && (e = qt(Wn())), Go(n, r, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Je(n, r) {
  var t = r.dateFormat, e = r.locale, a = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return n && be(n, a, e) || "";
}
function Ih(n, r, t) {
  if (!n)
    return "";
  var e = Je(n, t), a = r ? Je(r, t) : "";
  return "".concat(e, " - ").concat(a);
}
function Lh(n, r) {
  if (!(n != null && n.length))
    return "";
  var t = n[0] ? Je(n[0], r) : "";
  if (n.length === 1)
    return t;
  if (n.length === 2 && n[1]) {
    var e = Je(n[1], r);
    return "".concat(t, ", ").concat(e);
  }
  var a = n.length - 1;
  return "".concat(t, " (+").concat(a, ")");
}
function ta(n, r) {
  var t = r.hour, e = t === void 0 ? 0 : t, a = r.minute, o = a === void 0 ? 0 : a, i = r.second, s = i === void 0 ? 0 : i;
  return lr(ur(dr(n, s), o), e);
}
function Ah(n) {
  return no(n);
}
function Wh(n, r) {
  return be(n, "ddd", r);
}
function pr(n) {
  return Jt(n);
}
function It(n, r, t) {
  var e = qt(r || Wn());
  return Mt(n, {
    locale: e,
    weekStartsOn: t
  });
}
function xt(n) {
  return ws(n);
}
function In(n) {
  return Lr(n);
}
function si(n) {
  return Na(n);
}
function ci() {
  return Jt(me());
}
function li(n) {
  return gs(n);
}
function Fh(n) {
  return Ju(n);
}
function Hh(n) {
  return ys(n);
}
function lt(n, r) {
  return n && r ? Qf(n, r) : !n && !r;
}
function He(n, r) {
  return n && r ? jf(n, r) : !n && !r;
}
function $r(n, r) {
  return n && r ? Zf(n, r) : !n && !r;
}
function ie(n, r) {
  return n && r ? Xu(n, r) : !n && !r;
}
function Bt(n, r) {
  return n && r ? qd(n, r) : !n && !r;
}
function Ln(n, r, t) {
  var e, a = Jt(r), o = gs(t);
  try {
    e = zn(n, { start: a, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function Wn() {
  var n = Vs();
  return n.__localeId__;
}
function qt(n) {
  if (typeof n == "string") {
    var r = Vs();
    return r.__localeData__ ? r.__localeData__[n] : void 0;
  } else
    return n;
}
function zh(n, r, t) {
  return r(be(n, "EEEE", t));
}
function Vh(n, r) {
  return be(n, "EEEEEE", r);
}
function Bh(n, r) {
  return be(n, "EEE", r);
}
function po(n, r) {
  return be(qe(me(), n), "LLLL", r);
}
function Bs(n, r) {
  return be(qe(me(), n), "LLL", r);
}
function jh(n, r) {
  return be(on(me(), n), "QQQ", r);
}
function et(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.excludeDateIntervals, s = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Gn(n, { minDate: e, maxDate: a }) || o && o.some(function(u) {
    return u instanceof Date ? ie(n, u) : ie(n, u.date);
  }) || i && i.some(function(u) {
    var d = u.start, f = u.end;
    return zn(n, { start: d, end: f });
  }) || s && !s.some(function(u) {
    return ie(n, u);
  }) || c && !c.some(function(u) {
    var d = u.start, f = u.end;
    return zn(n, { start: d, end: f });
  }) || l && !l(me(n)) || !1;
}
function ho(n, r) {
  var t = r === void 0 ? {} : r, e = t.excludeDates, a = t.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(o) {
    var i = o.start, s = o.end;
    return zn(n, { start: i, end: s });
  }) : e && e.some(function(o) {
    var i;
    return o instanceof Date ? ie(n, o) : ie(n, (i = o.date) !== null && i !== void 0 ? i : new Date());
  }) || !1;
}
function js(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Gn(n, {
    minDate: e ? ws(e) : void 0,
    maxDate: a ? ys(a) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return He(n, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return He(n, c);
  }) || s && !s(me(n)) || !1;
}
function nr(n, r, t, e) {
  var a = ae(n), o = Be(n), i = ae(r), s = Be(r), c = ae(e);
  return a === i && a === c ? o <= t && t <= s : a < i ? c === a && o <= t || c === i && s >= t || c < i && c > a : !1;
}
function Zh(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates;
  return Gn(n, { minDate: e, maxDate: a }) || o && o.some(function(s) {
    return He(s instanceof Date ? s : s.date, n);
  }) || i && !i.some(function(s) {
    return He(s, n);
  }) || !1;
}
function rr(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Gn(n, { minDate: e, maxDate: a }) || (o == null ? void 0 : o.some(function(c) {
    return $r(n, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return $r(n, c);
  }) || s && !s(me(n)) || !1;
}
function ar(n, r, t) {
  if (!r || !t || !Dr(r) || !Dr(t))
    return !1;
  var e = ae(r), a = ae(t);
  return e <= n && a >= n;
}
function hr(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate, c = new Date(n, 0, 1);
  return Gn(c, {
    minDate: e ? Lr(e) : void 0,
    maxDate: a ? bs(a) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return lt(c, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return lt(c, l);
  }) || s && !s(me(c)) || !1;
}
function or(n, r, t, e) {
  var a = ae(n), o = Zt(n), i = ae(r), s = Zt(r), c = ae(e);
  return a === i && a === c ? o <= t && t <= s : a < i ? c === a && o <= t || c === i && s >= t || c < i && c > a : !1;
}
function Gn(n, r) {
  var t, e = r === void 0 ? {} : r, a = e.minDate, o = e.maxDate;
  return (t = a && yn(n, a) < 0 || o && yn(n, o) > 0) !== null && t !== void 0 ? t : !1;
}
function ui(n, r) {
  return r.some(function(t) {
    return pt(t) === pt(n) && ht(t) === ht(n) && _t(t) === _t(n);
  });
}
function di(n, r) {
  var t = r === void 0 ? {} : r, e = t.excludeTimes, a = t.includeTimes, o = t.filterTime;
  return e && ui(n, e) || a && !ui(n, a) || o && !o(n) || !1;
}
function fi(n, r) {
  var t = r.minTime, e = r.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var a = me();
  a = lr(a, pt(n)), a = ur(a, ht(n)), a = dr(a, _t(n));
  var o = me();
  o = lr(o, pt(t)), o = ur(o, ht(t)), o = dr(o, _t(t));
  var i = me();
  i = lr(i, pt(e)), i = ur(i, ht(e)), i = dr(i, _t(e));
  var s;
  try {
    s = !zn(a, { start: o, end: i });
  } catch {
    s = !1;
  }
  return s;
}
function pi(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.includeDates, o = Qt(n, 1);
  return e && _r(e, o) > 0 || a && a.every(function(i) {
    return _r(i, o) > 0;
  }) || !1;
}
function hi(n, r) {
  var t = r === void 0 ? {} : r, e = t.maxDate, a = t.includeDates, o = st(n, 1);
  return e && _r(o, e) > 0 || a && a.every(function(i) {
    return _r(o, i) > 0;
  }) || !1;
}
function Qh(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.includeDates, o = Lr(n), i = Os(o, 1);
  return e && xr(e, i) > 0 || a && a.every(function(s) {
    return xr(s, i) > 0;
  }) || !1;
}
function Gh(n, r) {
  var t = r === void 0 ? {} : r, e = t.maxDate, a = t.includeDates, o = bs(n), i = to(o, 1);
  return e && xr(i, e) > 0 || a && a.every(function(s) {
    return xr(i, s) > 0;
  }) || !1;
}
function mi(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.includeDates, o = wn(n, 1);
  return e && Mr(e, o) > 0 || a && a.every(function(i) {
    return Mr(i, o) > 0;
  }) || !1;
}
function qh(n, r) {
  var t = r === void 0 ? {} : r, e = t.minDate, a = t.yearItemNumber, o = a === void 0 ? Qn : a, i = In(wn(n, o)), s = Rt(i, o).endPeriod, c = e && ae(e);
  return c && c > s || !1;
}
function vi(n, r) {
  var t = r === void 0 ? {} : r, e = t.maxDate, a = t.includeDates, o = kt(n, 1);
  return e && Mr(o, e) > 0 || a && a.every(function(i) {
    return Mr(o, i) > 0;
  }) || !1;
}
function Uh(n, r) {
  var t = r === void 0 ? {} : r, e = t.maxDate, a = t.yearItemNumber, o = a === void 0 ? Qn : a, i = kt(n, o), s = Rt(i, o).startPeriod, c = e && ae(e);
  return c && c < s || !1;
}
function Zs(n) {
  var r = n.minDate, t = n.includeDates;
  if (t && r) {
    var e = t.filter(function(a) {
      return yn(a, r) >= 0;
    });
    return zo(e);
  } else
    return t ? zo(t) : r;
}
function Qs(n) {
  var r = n.maxDate, t = n.includeDates;
  if (t && r) {
    var e = t.filter(function(a) {
      return yn(a, r) <= 0;
    });
    return Ho(e);
  } else
    return t ? Ho(t) : r;
}
function gi(n, r) {
  var t;
  n === void 0 && (n = []), r === void 0 && (r = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), a = 0, o = n.length; a < o; a++) {
    var i = n[a];
    if (Dt(i)) {
      var s = be(i, "MM.dd.yyyy"), c = e.get(s) || [];
      c.includes(r) || (c.push(r), e.set(s, c));
    } else if (typeof i == "object") {
      var l = Object.keys(i), u = (t = l[0]) !== null && t !== void 0 ? t : "", d = i[u];
      if (typeof u == "string" && Array.isArray(d))
        for (var f = 0, h = d.length; f < h; f++) {
          var m = d[f];
          if (m) {
            var s = be(m, "MM.dd.yyyy"), c = e.get(s) || [];
            c.includes(u) || (c.push(u), e.set(s, c));
          }
        }
    }
  }
  return e;
}
function Xh(n, r) {
  return n.length !== r.length ? !1 : n.every(function(t, e) {
    return t === r[e];
  });
}
function Kh(n, r) {
  n === void 0 && (n = []), r === void 0 && (r = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return n.forEach(function(e) {
    var a = e.date, o = e.holidayName;
    if (Dt(a)) {
      var i = be(a, "MM.dd.yyyy"), s = t.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === r && Xh(s.holidayNames, [o]))) {
        s.className = r;
        var c = s.holidayNames;
        s.holidayNames = c ? ft(ft([], c, !0), [o], !1) : [o], t.set(i, s);
      }
    }
  }), t;
}
function Jh(n, r, t, e, a) {
  for (var o = a.length, i = [], s = 0; s < o; s++) {
    var c = n, l = a[s];
    l && (c = Qu(c, pt(l)), c = Oa(c, ht(l)), c = Uu(c, _t(l)));
    var u = Oa(n, (t + 1) * e);
    Wt(c, r) && en(c, u) && l != null && i.push(l);
  }
  return i;
}
function yi(n) {
  return n < 10 ? "0".concat(n) : "".concat(n);
}
function Rt(n, r) {
  r === void 0 && (r = Qn);
  var t = Math.ceil(ae(n) / r) * r, e = t - (r - 1);
  return { startPeriod: e, endPeriod: t };
}
function em(n) {
  var r = new Date(n.getFullYear(), n.getMonth(), n.getDate()), t = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 24);
  return Math.round((+t - +r) / 36e5);
}
function wi(n) {
  var r = n.getSeconds(), t = n.getMilliseconds();
  return q(n.getTime() - r * 1e3 - t);
}
function tm(n, r) {
  return wi(n).getTime() === wi(r).getTime();
}
function bi(n) {
  if (!Dt(n))
    throw new Error("Invalid date");
  var r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}
function ki(n, r) {
  if (!Dt(n) || !Dt(r))
    throw new Error("Invalid date received");
  var t = bi(n), e = bi(r);
  return en(t, e);
}
function Gs(n) {
  return n.key === j.Space;
}
var nm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.inputRef = S.createRef(), e.onTimeChange = function(a) {
        var o, i;
        e.setState({ time: a });
        var s = e.props.date, c = s instanceof Date && !isNaN(+s), l = c ? s : new Date();
        if (a != null && a.includes(":")) {
          var u = a.split(":"), d = u[0], f = u[1];
          l.setHours(Number(d)), l.setMinutes(Number(f));
        }
        (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, l);
      }, e.renderTimeInput = function() {
        var a = e.state.time, o = e.props, i = o.date, s = o.timeString, c = o.customTimeInput;
        return c ? Vi(c, {
          date: i,
          value: a,
          onChange: e.onTimeChange
        }) : S.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var l;
          (l = e.inputRef.current) === null || l === void 0 || l.focus();
        }, required: !0, value: a, onChange: function(l) {
          e.onTimeChange(l.target.value || s);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return r.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, r.prototype.render = function() {
      return S.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        S.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        S.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          S.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, r;
  }(Te)
), rm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.dayEl = Lt(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, i = e.key;
        i === j.Space && (e.preventDefault(), e.key = j.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isSameDay = function(e) {
        return ie(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var a = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !a && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), et(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return ho(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return ie(t.props.day, It(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && ie(e, It(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, a = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var i = be(a, "MM.dd.yyyy");
        return o.get(i);
      }, t.getHolidaysClass = function() {
        var e, a = t.props, o = a.day, i = a.holidays;
        if (!i)
          return [void 0];
        var s = be(o, "MM.dd.yyyy");
        return i.has(s) ? [(e = i.get(s)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : Ln(a, o, i);
      }, t.isInSelectingRange = function() {
        var e, a = t.props, o = a.day, i = a.selectsStart, s = a.selectsEnd, c = a.selectsRange, l = a.selectsDisabledDaysInRange, u = a.startDate, d = a.endDate, f = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(i || s || c) || !f || !l && t.isDisabled() ? !1 : i && d && (en(f, d) || Bt(f, d)) ? Ln(o, f, d) : s && u && (Wt(f, u) || Bt(f, u)) || c && u && !d && (Wt(f, u) || Bt(f, u)) ? Ln(o, u, f) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, i = a.startDate, s = a.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? ie(o, c) : ie(o, i);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, i = a.endDate, s = a.selectsEnd, c = a.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s || c ? ie(o, l) : ie(o, i);
      }, t.isRangeStart = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : ie(o, a);
      }, t.isRangeEnd = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : ie(i, a);
      }, t.isWeekend = function() {
        var e = jd(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === Be(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (Be(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(me());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(a) {
          return t.isSameDayOrWeek(a);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var a = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return Re("react-datepicker__day", a, "react-datepicker__day--" + Wh(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var e = t.props, a = e.day, o = e.ariaLabelPrefixWhenEnabled, i = o === void 0 ? "Choose" : o, s = e.ariaLabelPrefixWhenDisabled, c = s === void 0 ? "Not available" : s, l = t.isDisabled() || t.isExcluded() ? c : i;
        return "".concat(l, " ").concat(be(a, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, a = e.day, o = e.holidays, i = o === void 0 ? /* @__PURE__ */ new Map() : o, s = e.excludeDates, c = be(a, "MM.dd.yyyy"), l = [];
        return i.has(c) && l.push.apply(l, i.get(c).holidayNames), t.isExcluded() && l.push(s == null ? void 0 : s.filter(function(u) {
          return u instanceof Date ? ie(u, a) : ie(u == null ? void 0 : u.date, a);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, a = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && ie(a, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(qo(t.props.day), t.props.day) : qo(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          S.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && S.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return r.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, r.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, r.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, r.prototype.isDayActiveElement = function() {
      var t, e, a;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((a = document.activeElement) === null || a === void 0 ? void 0 : a.classList.contains("react-datepicker__day"));
    }, r.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, r;
  }(Te)
), am = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.weekNumberEl = Lt(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, i = e.key;
        i === j.Space && (e.preventDefault(), e.key = j.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !ie(t.props.date, t.props.selected) && ie(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || ie(t.props.date, t.props.selected) && ie(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var a = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && ie(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), t.props.inline && !t.props.shouldFocusDayInline && (a = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(r, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, r.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, r.prototype.render = function() {
      var t = this.props, e = t.weekNumber, a = t.isWeekDisabled, o = t.ariaLabelPrefix, i = o === void 0 ? r.defaultProps.ariaLabelPrefix : o, s = t.onClick, c = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!s && !a,
        "react-datepicker__week-number--selected": !!s && ie(this.props.date, this.props.selected)
      };
      return S.createElement("div", { ref: this.weekNumberEl, className: Re(c), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, r;
  }(Te)
), om = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return et(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, a) {
        t.props.onDayClick && t.props.onDayClick(e, a);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, a, o) {
        for (var i, s, c, l = new Date(e), u = 0; u < 7; u++) {
          var d = new Date(e);
          d.setDate(d.getDate() + u);
          var f = !t.isDisabled(d);
          if (f) {
            l = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, a, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((i = t.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : r.defaultProps.shouldCloseOnSelect) && ((c = (s = t.props).setOpen) === null || c === void 0 || c.call(s, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Ah(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), a = ot(e, 6), o = new Date(e); o <= a; ) {
          if (!t.isDisabled(o))
            return !1;
          o = ot(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), a = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var i = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          a.push(S.createElement(am, se({ key: "W" }, r.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: i })));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = ot(e, s);
          return S.createElement(rm, se({}, r.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return It(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !ie(t.startOfWeek(), t.props.selected) && ie(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(r, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": ie(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return S.createElement("div", { className: Re(t) }, this.renderDays());
    }, r;
  }(Te)
), $n, im = 6, dn = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, na = ($n = {}, $n[dn.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, $n[dn.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, $n[dn.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, $n), ir = 1;
function Di(n, r) {
  return n ? dn.FOUR_COLUMNS : r ? dn.TWO_COLUMNS : dn.THREE_COLUMNS;
}
var sm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.MONTH_REFS = ft([], Array(12), !0).map(function() {
        return Lt();
      }), t.QUARTER_REFS = ft([], Array(4), !0).map(function() {
        return Lt();
      }), t.isDisabled = function(e) {
        return et(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return ho(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, a) {
        var o, i;
        (i = (o = t.props).onDayClick) === null || i === void 0 || i.call(o, e, a, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var a, o;
        (o = (a = t.props).onDayMouseEnter) === null || o === void 0 || o.call(a, e);
      }, t.handleMouseLeave = function() {
        var e, a;
        (a = (e = t.props).onMouseLeave) === null || a === void 0 || a.call(e);
      }, t.isRangeStartMonth = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : He(qe(o, e), i);
      }, t.isRangeStartQuarter = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : $r(on(o, e), i);
      }, t.isRangeEndMonth = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : He(qe(o, e), s);
      }, t.isRangeEndQuarter = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : $r(on(o, e), s);
      }, t.isInSelectingRangeMonth = function(e) {
        var a, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(s || c || l) || !f ? !1 : s && d ? nr(f, d, e, i) : c && u || l && u && !d ? nr(u, f, e, i) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.startDate, c = o.selectsStart, l = qe(i, e), u = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c ? He(l, u) : He(l, s);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = qe(i, e), d = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c || l ? He(u, d) : He(u, s);
      }, t.isInSelectingRangeQuarter = function(e) {
        var a, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(s || c || l) || !f ? !1 : s && d ? or(f, d, e, i) : c && u || l && u && !d ? or(u, f, e, i) : !1;
      }, t.isWeekInMonth = function(e) {
        var a = t.props.day, o = ot(e, 6);
        return He(e, a) || He(o, a);
      }, t.isCurrentMonth = function(e, a) {
        return ae(e) === ae(me()) && a === Be(me());
      }, t.isCurrentQuarter = function(e, a) {
        return ae(e) === ae(me()) && a === Zt(me());
      }, t.isSelectedMonth = function(e, a, o) {
        return Be(o) === a && ae(e) === ae(o);
      }, t.isSelectMonthInList = function(e, a, o) {
        return o.some(function(i) {
          return t.isSelectedMonth(e, a, i);
        });
      }, t.isSelectedQuarter = function(e, a, o) {
        return Zt(e) === a && ae(e) === ae(o);
      }, t.renderWeeks = function() {
        for (var e = [], a = t.props.fixedHeight, o = 0, i = !1, s = It(xt(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(m) {
          return t.props.showWeekPicker ? It(m, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(m) {
          return t.props.showWeekPicker ? It(m, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(S.createElement(om, se({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: s, month: Be(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !i; ) {
          o++, s = kr(s, 1);
          var f = a && o >= im, h = !a && !t.isWeekInMonth(s);
          if (f || h)
            if (t.props.peekNextMonth)
              i = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, a) {
        var o = t.isMonthDisabledForLabelDate(a), i = o.isDisabled, s = o.labelDate;
        i || t.handleDayClick(xt(s), e);
      }, t.onMonthMouseEnter = function(e) {
        var a = t.isMonthDisabledForLabelDate(e), o = a.isDisabled, i = a.labelDate;
        o || t.handleDayMouseEnter(xt(i));
      }, t.handleMonthNavigation = function(e, a) {
        var o, i, s, c;
        (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, a), (c = (s = t.MONTH_REFS[e]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, a, o) {
        var i, s = t.props, c = s.selected, l = s.preSelection, u = s.setPreSelection, d = s.minDate, f = s.maxDate, h = s.showFourColumnMonthYearPicker, m = s.showTwoColumnMonthYearPicker;
        if (l) {
          var p = Di(h, m), v = t.getVerticalOffset(p), y = (i = na[p]) === null || i === void 0 ? void 0 : i.grid, b = function(w, P, T) {
            var I, Q, Z = P, R = T;
            switch (w) {
              case j.ArrowRight:
                Z = st(P, ir), R = T === 11 ? 0 : T + ir;
                break;
              case j.ArrowLeft:
                Z = Qt(P, ir), R = T === 0 ? 11 : T - ir;
                break;
              case j.ArrowUp:
                Z = Qt(P, v), R = !((I = y == null ? void 0 : y[0]) === null || I === void 0) && I.includes(T) ? T + 12 - v : T - v;
                break;
              case j.ArrowDown:
                Z = st(P, v), R = !((Q = y == null ? void 0 : y[y.length - 1]) === null || Q === void 0) && Q.includes(T) ? T - 12 + v : T + v;
                break;
            }
            return { newCalculatedDate: Z, newCalculatedMonth: R };
          }, D = function(w, P, T) {
            for (var I = 40, Q = w, Z = !1, R = 0, O = b(Q, P, T), C = O.newCalculatedDate, N = O.newCalculatedMonth; !Z; ) {
              if (R >= I) {
                C = P, N = T;
                break;
              }
              if (d && C < d) {
                Q = j.ArrowRight;
                var _ = b(Q, C, N);
                C = _.newCalculatedDate, N = _.newCalculatedMonth;
              }
              if (f && C > f) {
                Q = j.ArrowLeft;
                var _ = b(Q, C, N);
                C = _.newCalculatedDate, N = _.newCalculatedMonth;
              }
              if (Zh(C, t.props)) {
                var _ = b(Q, C, N);
                C = _.newCalculatedDate, N = _.newCalculatedMonth;
              } else
                Z = !0;
              R++;
            }
            return { newCalculatedDate: C, newCalculatedMonth: N };
          };
          if (a === j.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var M = D(a, l, o), g = M.newCalculatedDate, x = M.newCalculatedMonth;
          switch (a) {
            case j.ArrowRight:
            case j.ArrowLeft:
            case j.ArrowUp:
            case j.ArrowDown:
              t.handleMonthNavigation(x, g);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var a, o;
        return (o = (a = na[e]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, a) {
        var o = t.props, i = o.disabledKeyboardNavigation, s = o.handleOnMonthKeyDown, c = e.key;
        c !== j.Tab && e.preventDefault(), i || t.handleKeyboardNavigation(e, c, a), s && s(e);
      }, t.onQuarterClick = function(e, a) {
        var o = on(t.props.day, a);
        rr(o, t.props) || t.handleDayClick(si(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var a = on(t.props.day, e);
        rr(a, t.props) || t.handleDayMouseEnter(si(a));
      }, t.handleQuarterNavigation = function(e, a) {
        var o, i, s, c;
        t.isDisabled(a) || t.isExcluded(a) || ((i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, a), (c = (s = t.QUARTER_REFS[e - 1]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, a) {
        var o, i, s = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case j.Enter:
              t.onQuarterClick(e, a), (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, t.props.selected);
              break;
            case j.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 4 ? 1 : a + 1, to(t.props.preSelection, 1));
              break;
            case j.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 1 ? 4 : a - 1, Os(t.props.preSelection, 1));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var a, o = t.props, i = o.day, s = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = qe(i, e);
        return {
          isDisabled: (a = (s || c || l || u) && js(d, t.props)) !== null && a !== void 0 ? a : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var a = t.isMonthDisabledForLabelDate(e).isDisabled;
        return a;
      }, t.getMonthClassNames = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate, c = a.preSelection, l = a.monthClassName, u = l ? l(qe(o, e)) : void 0, d = t.getSelection();
        return Re("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": i && s ? nr(i, s, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Be(t.props.preSelection), o = t.isMonthDisabledForLabelDate(a).isDisabled, i = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Zt(t.props.preSelection), o = rr(t.props.day, t.props), i = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getAriaLabel = function(e) {
        var a = t.props, o = a.chooseDayAriaLabelPrefix, i = o === void 0 ? "Choose" : o, s = a.disabledDayAriaLabelPrefix, c = s === void 0 ? "Not available" : s, l = a.day, u = a.locale, d = qe(l, e), f = t.isDisabled(d) || t.isExcluded(d) ? c : i;
        return "".concat(f, " ").concat(be(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate, c = a.selected, l = a.minDate, u = a.maxDate, d = a.excludeDates, f = a.includeDates, h = a.filterDate, m = a.preSelection, p = a.disabledKeyboardNavigation, v = (l || u || d || f || h) && rr(on(o, e), t.props);
        return Re("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": v,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !p && m && t.isSelectedQuarter(o, e, m) && !v,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": i && s ? or(i, s, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e)
        });
      }, t.getMonthContent = function(e) {
        var a = t.props, o = a.showFullMonthYearPicker, i = a.renderMonthContent, s = a.locale, c = a.day, l = Bs(e, s), u = po(e, s);
        return i ? i(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var a, o = t.props, i = o.renderQuarterContent, s = o.locale, c = jh(e, s);
        return (a = i == null ? void 0 : i(e, c)) !== null && a !== void 0 ? a : c;
      }, t.renderMonths = function() {
        var e, a = t.props, o = a.showTwoColumnMonthYearPicker, i = a.showFourColumnMonthYearPicker, s = a.day, c = a.selected, l = (e = na[Di(i, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return S.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(f, h) {
            return S.createElement("div", { ref: t.MONTH_REFS[f], key: h, onClick: function(m) {
              t.onMonthClick(m, f);
            }, onKeyDown: function(m) {
              Gs(m) && (m.preventDefault(), m.key = j.Enter), t.onMonthKeyDown(m, f);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(f);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(f);
            } : void 0, tabIndex: Number(t.getTabIndex(f)), className: t.getMonthClassNames(f), "aria-disabled": t.isMonthDisabled(f), role: "option", "aria-label": t.getAriaLabel(f), "aria-current": t.isCurrentMonth(s, f) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(s, f, c) : void 0 }, t.getMonthContent(f));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, a = e.day, o = e.selected, i = [1, 2, 3, 4];
        return S.createElement("div", { className: "react-datepicker__quarter-wrapper" }, i.map(function(s, c) {
          return S.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
            t.onQuarterClick(l, s);
          }, onKeyDown: function(l) {
            t.onQuarterKeyDown(l, s);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(s);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(s);
          } : void 0, className: t.getQuarterClassNames(s), "aria-selected": o ? t.isSelectedQuarter(a, s, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(s)), "aria-current": t.isCurrentQuarter(a, s) ? "date" : void 0 }, t.getQuarterContent(s));
        }));
      }, t.getClassNames = function() {
        var e = t.props, a = e.selectingDate, o = e.selectsStart, i = e.selectsEnd, s = e.showMonthYearPicker, c = e.showQuarterYearPicker, l = e.showWeekPicker;
        return Re("react-datepicker__month", {
          "react-datepicker__month--selecting-range": a && (o || i)
        }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": l });
      }, t;
    }
    return r.prototype.getSelection = function() {
      var t = this.props, e = t.selected, a = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return a;
      if (e)
        return [e];
    }, r.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, a = t.showQuarterYearPicker, o = t.day, i = t.ariaLabelPrefix, s = i === void 0 ? "Month " : i, c = s ? s.trim() + " " : "";
      return S.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(be(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : a ? this.renderQuarters() : this.renderWeeks());
    }, r;
  }(Te)
), cm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, a) {
          return S.createElement(
            "div",
            { className: t.isSelectedMonth(a) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, a), "aria-selected": t.isSelectedMonth(a) ? "true" : void 0 },
            t.isSelectedMonth(a) ? S.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return r.prototype.render = function() {
      return S.createElement(zr, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, r;
  }(Te)
), lm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(a, o) {
          return S.createElement("option", { key: a, value: o }, a);
        });
      }, t.renderSelectMode = function(e) {
        return S.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(a) {
          return t.onChange(parseInt(a.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, a) {
        return S.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          S.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          S.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, a[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return S.createElement(cm, se({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var a = t.state.dropdownVisible, o = [t.renderReadView(!a, e)];
        return a && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return r.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return Bs(o, t.props.locale);
      } : function(o) {
        return po(o, t.props.locale);
      }), a;
      switch (this.props.dropdownMode) {
        case "scroll":
          a = this.renderScrollMode(e);
          break;
        case "select":
          a = this.renderSelectMode(e);
          break;
      }
      return S.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, a);
    }, r;
  }(Te)
);
function um(n, r) {
  for (var t = [], e = xt(n), a = xt(r); !Wt(e, a); )
    t.push(me(e)), e = st(e, 1);
  return t;
}
var dm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(a) {
          var o = Ra(a), i = lt(e.props.date, a) && He(e.props.date, a);
          return S.createElement(
            "div",
            { className: i ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": i ? "true" : void 0 },
            i ? S.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            be(a, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(a) {
        return e.props.onChange(a);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: um(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return r.prototype.render = function() {
      var t = Re({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return S.createElement(zr, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, r;
  }(Te)
), fm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = xt(t.props.minDate), a = xt(t.props.maxDate), o = []; !Wt(e, a); ) {
          var i = Ra(e);
          o.push(S.createElement("option", { key: i, value: i }, be(e, t.props.dateFormat, t.props.locale))), e = st(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return S.createElement("select", { value: Ra(xt(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var a = be(t.props.date, t.props.dateFormat, t.props.locale);
        return S.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          S.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          S.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, a)
        );
      }, t.renderDropdown = function() {
        return S.createElement(dm, se({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var a = me(e);
        lt(t.props.date, a) && He(t.props.date, a) || t.props.onChange(a);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return r.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return S.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, r;
  }(Te)
), pm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, a, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && r.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((a = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && a !== void 0 ? a : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var a, o;
        (t.props.minTime || t.props.maxTime) && fi(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && di(e, t.props) || (o = (a = t.props).onChange) === null || o === void 0 || o.call(a, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && tm(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && fi(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && di(e, t.props);
      }, t.liClasses = function(e) {
        var a, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (pt(e) * 3600 + ht(e) * 60 + _t(e)) % (((a = t.props.intervals) !== null && a !== void 0 ? a : r.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, a) {
        var o, i;
        e.key === j.Space && (e.preventDefault(), e.key = j.Enter), (e.key === j.ArrowUp || e.key === j.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === j.ArrowDown || e.key === j.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === j.Enter && t.handleClick(a), (i = (o = t.props).handleOnKeyDown) === null || i === void 0 || i.call(o, e);
      }, t.renderTimes = function() {
        for (var e, a = [], o = typeof t.props.format == "string" ? t.props.format : "p", i = (e = t.props.intervals) !== null && e !== void 0 ? e : r.defaultProps.intervals, s = t.props.selected || t.props.openToDate || me(), c = pr(s), l = t.props.injectTimes && t.props.injectTimes.sort(function(v, y) {
          return v.getTime() - y.getTime();
        }), u = 60 * em(s), d = u / i, f = 0; f < d; f++) {
          var h = Oa(c, f * i);
          if (a.push(h), l) {
            var m = Jh(c, h, f, i, l);
            a = a.concat(m);
          }
        }
        var p = a.reduce(function(v, y) {
          return y.getTime() <= s.getTime() ? y : v;
        }, a[0]);
        return a.map(function(v) {
          return S.createElement("li", { key: v.valueOf(), onClick: t.handleClick.bind(t, v), className: t.liClasses(v), ref: function(y) {
            v === p && (t.centerLi = y);
          }, onKeyDown: function(y) {
            t.handleOnKeyDown(y, v);
          }, tabIndex: v === p ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(v) ? "true" : void 0, "aria-disabled": t.isDisabledTime(v) ? "true" : void 0 }, be(v, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? S.createElement(S.Fragment, null) : S.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          S.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(r, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, r.prototype.render = function() {
      var t = this, e, a = this.state.height;
      return S.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : r.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        S.createElement(
          "div",
          { className: "react-datepicker__time" },
          S.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            S.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: a ? { height: a } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, r.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, r;
  }(Te)
), _i = 3, hm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.YEAR_REFS = ft([], Array(e.props.yearItemNumber), !0).map(function() {
        return Lt();
      }), e.isDisabled = function(a) {
        return et(a, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(a) {
        return ho(a, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var a;
        return (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(a) {
        var o = function() {
          var i, s;
          (s = (i = e.YEAR_REFS[a]) === null || i === void 0 ? void 0 : i.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(a, o) {
        e.props.onDayClick && e.props.onDayClick(a, o);
      }, e.handleYearNavigation = function(a, o) {
        var i, s, c, l, u = e.props, d = u.date, f = u.yearItemNumber;
        if (!(d === void 0 || f === void 0)) {
          var h = Rt(d, f).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, o), a - h < 0 ? e.updateFocusOnPaginate(f - (h - a)) : a - h >= f ? e.updateFocusOnPaginate(Math.abs(f - (a - h))) : (l = (c = e.YEAR_REFS[a - h]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(a, o) {
        return ie(a, o);
      }, e.isCurrentYear = function(a) {
        return a === ae(me());
      }, e.isRangeStart = function(a) {
        return e.props.startDate && e.props.endDate && lt(ct(me(), a), e.props.startDate);
      }, e.isRangeEnd = function(a) {
        return e.props.startDate && e.props.endDate && lt(ct(me(), a), e.props.endDate);
      }, e.isInRange = function(a) {
        return ar(a, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(a) {
        var o = e.props, i = o.selectsStart, s = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(i || s || c) || !e.selectingDate() ? !1 : i && u ? ar(a, e.selectingDate(), u) : s && l || c && l && !u ? ar(a, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var i = e.props, s = i.startDate, c = i.selectsStart, l = ct(me(), a);
        return c ? lt(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : lt(l, s ?? null);
      }, e.isSelectingRangeEnd = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var i = e.props, s = i.endDate, c = i.selectsEnd, l = i.selectsRange, u = ct(me(), a);
        return c || l ? lt(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : lt(u, s ?? null);
      }, e.isKeyboardSelected = function(a) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, i = o.minDate, s = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = In(ct(e.props.date, a)), f = (i || s || c || l || u) && hr(a, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !ie(d, In(e.props.selected)) && ie(d, In(e.props.preSelection)) && !f;
        }
      }, e.onYearClick = function(a, o) {
        var i = e.props.date;
        i !== void 0 && e.handleYearClick(In(ct(i, o)), a);
      }, e.onYearKeyDown = function(a, o) {
        var i, s, c = a.key, l = e.props, u = l.date, d = l.yearItemNumber, f = l.handleOnKeyDown;
        if (c !== j.Tab && a.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case j.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(a, o), (s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, e.props.selected);
              break;
            case j.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, kt(e.props.preSelection, 1));
              break;
            case j.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, wn(e.props.preSelection, 1));
              break;
            case j.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var h = Rt(u, d).startPeriod, m = _i, p = o - m;
              if (p < h) {
                var v = d % m;
                o >= h && o < h + v ? m = v : m += v, p = o - m;
              }
              e.handleYearNavigation(p, wn(e.props.preSelection, m));
              break;
            }
            case j.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var y = Rt(u, d).endPeriod, m = _i, p = o + m;
              if (p > y) {
                var v = d % m;
                o <= y && o > y - v ? m = v : m += v, p = o + m;
              }
              e.handleYearNavigation(p, kt(e.props.preSelection, m));
              break;
            }
          }
        f && f(a);
      }, e.getYearClassNames = function(a) {
        var o = e.props, i = o.date, s = o.minDate, c = o.maxDate, l = o.selected, u = o.excludeDates, d = o.includeDates, f = o.filterDate, h = o.yearClassName;
        return Re("react-datepicker__year-text", "react-datepicker__year-".concat(a), i ? h == null ? void 0 : h(ct(i, a)) : void 0, {
          "react-datepicker__year-text--selected": l ? a === ae(l) : void 0,
          "react-datepicker__year-text--disabled": (s || c || u || d || f) && hr(a, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(a),
          "react-datepicker__year-text--range-start": e.isRangeStart(a),
          "react-datepicker__year-text--range-end": e.isRangeEnd(a),
          "react-datepicker__year-text--in-range": e.isInRange(a),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(a),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(a),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(a),
          "react-datepicker__year-text--today": e.isCurrentYear(a)
        });
      }, e.getYearTabIndex = function(a) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = ae(e.props.preSelection), i = hr(a, e.props);
        return a === o && !i ? "0" : "-1";
      }, e.getYearContent = function(a) {
        return e.props.renderYearContent ? e.props.renderYearContent(a) : a;
      }, e;
    }
    return r.prototype.render = function() {
      var t = this, e = [], a = this.props, o = a.date, i = a.yearItemNumber, s = a.onYearMouseEnter, c = a.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = Rt(o, i), u = l.startPeriod, d = l.endPeriod, f = function(p) {
        e.push(S.createElement("div", { ref: h.YEAR_REFS[p - u], onClick: function(v) {
          t.onYearClick(v, p);
        }, onKeyDown: function(v) {
          Gs(v) && (v.preventDefault(), v.key = j.Enter), t.onYearKeyDown(v, p);
        }, tabIndex: Number(h.getYearTabIndex(p)), className: h.getYearClassNames(p), onMouseEnter: h.props.usePointerEvent ? void 0 : function(v) {
          return s(v, p);
        }, onPointerEnter: h.props.usePointerEvent ? function(v) {
          return s(v, p);
        } : void 0, onMouseLeave: h.props.usePointerEvent ? void 0 : function(v) {
          return c(v, p);
        }, onPointerLeave: h.props.usePointerEvent ? function(v) {
          return c(v, p);
        } : void 0, key: p, "aria-current": h.isCurrentYear(p) ? "date" : void 0 }, h.getYearContent(p)));
      }, h = this, m = u; m <= d; m++)
        f(m);
      return S.createElement(
        "div",
        { className: "react-datepicker__year" },
        S.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, r;
  }(Te)
);
function mm(n, r, t, e) {
  for (var a = [], o = 0; o < 2 * r + 1; o++) {
    var i = n + r - o, s = !0;
    t && (s = ae(t) <= i), e && s && (s = ae(e) >= i), s && a.push(i);
  }
  return a;
}
var vm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      e.renderOptions = function() {
        var s = e.props.year, c = e.state.yearsList.map(function(d) {
          return S.createElement(
            "div",
            { className: s === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": s === d ? "true" : void 0 },
            s === d ? S.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), l = e.props.minDate ? ae(e.props.minDate) : null, u = e.props.maxDate ? ae(e.props.maxDate) : null;
        return (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.unshift(S.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          S.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.push(S.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          S.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), c;
      }, e.onChange = function(s) {
        e.props.onChange(s);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(s) {
        var c = e.state.yearsList.map(function(l) {
          return l + s;
        });
        e.setState({
          yearsList: c
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var a = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, i = a || (o ? 10 : 5);
      return e.state = {
        yearsList: mm(e.props.year, i, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = Lt(), e;
    }
    return r.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, a = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = a && a instanceof HTMLElement ? a.offsetTop + (a.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, r.prototype.render = function() {
      var t = Re({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return S.createElement(zr, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, r;
  }(Te)
), gm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? ae(t.props.minDate) : 1900, a = t.props.maxDate ? ae(t.props.maxDate) : 2100, o = [], i = e; i <= a; i++)
          o.push(S.createElement("option", { key: i, value: i }, i));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return S.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return S.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(a) {
            return t.toggleDropdown(a);
          } },
          S.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          S.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return S.createElement(vm, se({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, a) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, a), t.setOpen();
      }, t.onSelect = function(e, a) {
        var o, i;
        (i = (o = t.props).onSelect) === null || i === void 0 || i.call(o, e, a);
      }, t.setOpen = function() {
        var e, a;
        (a = (e = t.props).setOpen) === null || a === void 0 || a.call(e, !0);
      }, t;
    }
    return r.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return S.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, r;
  }(Te)
), ym = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], wm = function(n) {
  var r = (n.className || "").split(/\s+/);
  return ym.some(function(t) {
    return r.indexOf(t) >= 0;
  });
}, bm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(a) {
        e.props.onClickOutside(a);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(a) {
        var o, i;
        wm(a.target) && ((i = (o = e.props).onDropdownFocus) === null || i === void 0 || i.call(o, a));
      }, e.getDateInView = function() {
        var a = e.props, o = a.preSelection, i = a.selected, s = a.openToDate, c = Zs(e.props), l = Qs(e.props), u = me(), d = s || i || o;
        return d || (c && en(u, c) ? c : l && Wt(u, l) ? l : u);
      }, e.increaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: st(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: Qt(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(a, o, i) {
        e.props.onSelect(a, o, i), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.handleDayMouseEnter = function(a) {
        e.setState({ selectingDate: a }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(a);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(a, o) {
        e.setState({ selectingDate: ct(me(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(a, o);
      }, e.handleYearMouseLeave = function(a, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(a, o);
      }, e.handleYearChange = function(a) {
        var o, i, s, c;
        (i = (o = e.props).onYearChange) === null || i === void 0 || i.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(a), (c = (s = e.props).setOpen) === null || c === void 0 || c.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.getEnabledPreSelectionDateForMonth = function(a) {
        if (!et(a, e.props))
          return a;
        for (var o = xt(a), i = Hh(a), s = Ku(i, o), c = null, l = 0; l <= s; l++) {
          var u = ot(o, l);
          if (!et(u, e.props)) {
            c = u;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(a) {
        var o, i, s, c = (o = e.getEnabledPreSelectionDateForMonth(a)) !== null && o !== void 0 ? o : a;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (s = (i = e.props).setOpen) === null || s === void 0 || s.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(a) {
        var o, i;
        (i = (o = e.props).onMonthChange) === null || i === void 0 || i.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(a) {
        e.handleYearChange(a), e.handleMonthChange(a);
      }, e.changeYear = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: ct(i, Number(a))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: qe(i, Number(a))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: ct(qe(i, Be(a)), ae(a))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(a) {
        a === void 0 && (a = e.state.date);
        var o = It(a, e.props.locale, e.props.calendarStartDay), i = [];
        return e.props.showWeekNumbers && i.push(S.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), i.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = ot(o, s), l = e.formatWeekday(c, e.props.locale), u = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return S.createElement("div", { key: s, "aria-label": be(c, "EEEE", e.props.locale), className: Re("react-datepicker__day-name", u) }, l);
        }));
      }, e.formatWeekday = function(a, o) {
        return e.props.formatWeekDay ? zh(a, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? Bh(a, o) : Vh(a, o);
      }, e.decreaseYear = function() {
        e.setState(function(a) {
          var o, i = a.date;
          return {
            date: wn(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : r.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var a, o, i;
        if (!e.props.renderCustomHeader) {
          var s = (a = e.props.monthsShown) !== null && a !== void 0 ? a : r.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, u = Qt(e.state.date, l), d;
          switch (!0) {
            case e.props.showMonthYearPicker:
              d = mi(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = qh(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = Qh(e.state.date, e.props);
              break;
            default:
              d = pi(u, e.props);
              break;
          }
          if (!(!((i = e.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : r.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && d || e.props.showTimeSelectOnly)) {
            var f = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], h = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], m = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (m = e.decreaseYear), d && e.props.showDisabledMonthNavigation && (h.push("react-datepicker__navigation--previous--disabled"), m = void 0);
            var p = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, v = e.props, y = v.previousMonthButtonLabel, b = y === void 0 ? r.defaultProps.previousMonthButtonLabel : y, D = v.previousYearButtonLabel, M = D === void 0 ? r.defaultProps.previousYearButtonLabel : D, g = e.props, x = g.previousMonthAriaLabel, w = x === void 0 ? typeof b == "string" ? b : "Previous Month" : x, P = g.previousYearAriaLabel, T = P === void 0 ? typeof M == "string" ? M : "Previous Year" : P;
            return S.createElement(
              "button",
              { type: "button", className: h.join(" "), onClick: m, onKeyDown: e.props.handleOnKeyDown, "aria-label": p ? T : w },
              S.createElement("span", { className: f.join(" ") }, p ? M : b)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(a) {
          var o, i = a.date;
          return {
            date: kt(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : r.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var a;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = vi(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = Uh(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = Gh(e.state.date, e.props);
              break;
            default:
              o = hi(e.state.date, e.props);
              break;
          }
          if (!(!((a = e.props.forceShowMonthNavigation) !== null && a !== void 0 ? a : r.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var i = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], s = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && i.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && i.push("react-datepicker__navigation--next--with-today-button");
            var c = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.increaseYear), o && e.props.showDisabledMonthNavigation && (i.push("react-datepicker__navigation--next--disabled"), c = void 0);
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, f = d === void 0 ? r.defaultProps.nextMonthButtonLabel : d, h = u.nextYearButtonLabel, m = h === void 0 ? r.defaultProps.nextYearButtonLabel : h, p = e.props, v = p.nextMonthAriaLabel, y = v === void 0 ? typeof f == "string" ? f : "Next Month" : v, b = p.nextYearAriaLabel, D = b === void 0 ? typeof m == "string" ? m : "Next Year" : b;
            return S.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? D : y },
              S.createElement("span", { className: s.join(" ") }, l ? m : f)
            );
          }
        }
      }, e.renderCurrentMonth = function(a) {
        a === void 0 && (a = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), S.createElement("h2", { className: o.join(" ") }, be(a, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showYearDropdown || a))
          return S.createElement(gm, se({}, r.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: ae(e.state.date) }));
      }, e.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthDropdown || a))
          return S.createElement(lm, se({}, r.defaultProps, e.props, { month: Be(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthYearDropdown || a))
          return S.createElement(fm, se({}, r.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(a) {
        e.props.onSelect(ci(), a), e.props.setPreSelection && e.props.setPreSelection(ci());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return S.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(a) {
        var o = a.monthDate, i = a.i;
        return S.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          S.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(i !== 0),
            e.renderMonthYearDropdown(i !== 0),
            e.renderYearDropdown(i !== 0)
          ),
          S.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(a) {
        var o, i, s = a.monthDate, c = a.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = pi(e.state.date, e.props), u = hi(e.state.date, e.props), d = mi(e.state.date, e.props), f = vi(e.state.date, e.props), h = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return S.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (i = (o = e.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(o, se(se({}, e.state), { customHeaderCount: c, monthDate: s, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: f })),
          h && S.createElement("div", { className: "react-datepicker__day-names" }, e.header(s))
        );
      }, e.renderYearHeader = function(a) {
        var o = a.monthDate, i = e.props, s = i.showYearPicker, c = i.yearItemNumber, l = c === void 0 ? r.defaultProps.yearItemNumber : c, u = Rt(o, l), d = u.startPeriod, f = u.endPeriod;
        return S.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(d, " - ").concat(f) : ae(o));
      }, e.renderHeader = function(a) {
        var o = a.monthDate, i = a.i, s = i === void 0 ? 0 : i, c = { monthDate: o, i: s };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var a, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var i = [], s = (a = e.props.monthsShown) !== null && a !== void 0 ? a : r.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? kt(e.state.date, c) : Qt(e.state.date, c), u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < s; ++d) {
            var f = d - u + c, h = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? kt(l, f) : st(l, f), m = "month-".concat(d), p = d < s - 1, v = d > 0;
            i.push(S.createElement(
              "div",
              { key: m, ref: function(y) {
                e.monthContainer = y ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: h, i: d }),
              S.createElement(sm, se({}, r.defaultProps, e.props, { ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: h, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: p, monthShowsDuplicateDaysStart: v }))
            ));
          }
          return i;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return S.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            S.createElement(hm, se({}, r.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return S.createElement(pm, se({}, r.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var a = e.props.selected ? new Date(e.props.selected) : void 0, o = a && yt(a) && Boolean(e.props.selected), i = o ? "".concat(yi(a.getHours()), ":").concat(yi(a.getMinutes())) : "";
        if (e.props.showTimeInput)
          return S.createElement(nm, se({}, r.defaultProps, e.props, { date: a, timeString: i, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var a, o = Rt(e.state.date, (a = e.props.yearItemNumber) !== null && a !== void 0 ? a : r.defaultProps.yearItemNumber), i = o.startPeriod, s = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(i, " - ").concat(s) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = ae(e.state.date) : c = "".concat(po(Be(e.state.date), e.props.locale), " ").concat(ae(e.state.date)), S.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return S.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = Lt(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(r, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Qn
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, r.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!ie(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var a = !He(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return a && e.handleCustomMonthChange(e.state.date);
        });
      } else
        this.props.openToDate && !ie(this.props.openToDate, t.openToDate) && this.setState({
          date: this.props.openToDate
        });
    }, r.prototype.render = function() {
      var t = this.props.container || $h;
      return S.createElement(
        zr,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, containerRef: this.containerRef, ignoreClass: this.props.outsideClickIgnoreClass },
        S.createElement(
          t,
          { className: Re("react-datepicker", this.props.className, {
            "react-datepicker--time-only": this.props.showTimeSelectOnly
          }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
          this.renderAriaLiveRegion(),
          this.renderPreviousButton(),
          this.renderNextButton(),
          this.renderMonths(),
          this.renderYears(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.renderInputTimeSection(),
          this.renderChildren()
        )
      );
    }, r;
  }(Te)
), km = function(n) {
  var r = n.icon, t = n.className, e = t === void 0 ? "" : t, a = n.onClick, o = "react-datepicker__calendar-icon";
  return typeof r == "string" ? S.createElement("i", { className: "".concat(o, " ").concat(r, " ").concat(e), "aria-hidden": "true", onClick: a }) : S.isValidElement(r) ? S.cloneElement(r, {
    className: "".concat(r.props.className || "", " ").concat(o, " ").concat(e),
    onClick: function(i) {
      typeof r.props.onClick == "function" && r.props.onClick(i), typeof a == "function" && a(i);
    }
  }) : S.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a },
    S.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, qs = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return r.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, r.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, r.prototype.render = function() {
      return ac.createPortal(this.props.children, this.el);
    }, r;
  }(Te)
), Dm = "[tabindex], a, button, input, select, textarea", _m = function(n) {
  return (n instanceof HTMLAnchorElement || !n.disabled) && n.tabIndex !== -1;
}, Us = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = e.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(Dm), 1, -1).filter(_m);
      }, e.handleFocusStart = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[a.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[0].focus();
      }, e.tabLoopRef = Lt(), e;
    }
    return r.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : r.defaultProps.enableTabLoop) ? S.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        S.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        S.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, r.defaultProps = {
      enableTabLoop: !0
    }, r;
  }(Te)
);
function xm(n) {
  var r = function(t) {
    var e, a = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Ae(null), i = Nh(se({ open: !a, whileElementsMounted: ch, placement: t.popperPlacement, middleware: ft([
      gh({ padding: 15 }),
      vh(10),
      yh({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), s = se(se({}, t), { hidePopper: a, popperProps: se(se({}, i), { arrowRef: o }) });
    return S.createElement(n, se({}, s));
  };
  return r;
}
var Mm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return Object.defineProperty(r, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.render = function() {
      var t = this.props, e = t.className, a = t.wrapperClassName, o = t.hidePopper, i = o === void 0 ? r.defaultProps.hidePopper : o, s = t.popperComponent, c = t.targetComponent, l = t.enableTabLoop, u = t.popperOnKeyDown, d = t.portalId, f = t.portalHost, h = t.popperProps, m = t.showArrow, p = void 0;
      if (!i) {
        var v = Re("react-datepicker-popper", e);
        p = S.createElement(
          Us,
          { enableTabLoop: l },
          S.createElement(
            "div",
            { ref: h.refs.setFloating, style: h.floatingStyles, className: v, "data-placement": h.placement, onKeyDown: u },
            s,
            m && S.createElement(Mh, { ref: h.arrowRef, context: h.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (p = Hi(this.props.popperContainer, {}, p)), d && !i && (p = S.createElement(qs, { portalId: d, portalHost: f }, p));
      var y = Re("react-datepicker-wrapper", a);
      return S.createElement(
        S.Fragment,
        null,
        S.createElement("div", { ref: h.refs.setReference, className: y }, c),
        p
      );
    }, r;
  }(Te)
), Sm = xm(Mm), xi = "react-datepicker-ignore-onclickoutside";
function Cm(n, r) {
  return n && r ? Be(n) !== Be(r) || ae(n) !== ae(r) : n !== r;
}
var ra = "Date input not valid.", Pm = (
  /** @class */
  function(n) {
    Oe(r, n);
    function r(t) {
      var e = n.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : me();
      }, e.modifyHolidays = function() {
        var a;
        return (a = e.props.holidays) === null || a === void 0 ? void 0 : a.reduce(function(o, i) {
          var s = new Date(i.date);
          return yt(s) ? ft(ft([], o, !0), [se(se({}, i), { date: s })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var a, o = e.getPreSelection(), i = Zs(e.props), s = Qs(e.props), c = i && en(o, pr(i)) ? i : s && Wt(o, li(s)) ? s : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && a !== void 0 ? a : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: gi(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(se(se({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(se(se({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.safeFocus = function() {
        setTimeout(function() {
          var a, o;
          (o = (a = e.input) === null || a === void 0 ? void 0 : a.focus) === null || o === void 0 || o.call(a, { preventScroll: !0 });
        }, 0);
      }, e.safeBlur = function() {
        setTimeout(function() {
          var a, o;
          (o = (a = e.input) === null || a === void 0 ? void 0 : a.blur) === null || o === void 0 || o.call(a);
        }, 0);
      }, e.setFocus = function() {
        e.safeFocus();
      }, e.setBlur = function() {
        e.safeBlur(), e.cancelFocusInput();
      }, e.setOpen = function(a, o) {
        o === void 0 && (o = !1), e.setState({
          open: a,
          preSelection: a && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: aa
        }, function() {
          a || e.setState(function(i) {
            return {
              focused: o ? i.focused : !1
            };
          }, function() {
            !o && e.setBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return Dt(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(a) {
        var o, i, s = e.state.wasHidden, c = s ? e.state.open : !0;
        s && e.resetHiddenStatus(), !e.state.preventFocus && c && ((i = (o = e.props).onFocus) === null || i === void 0 || i.call(o, a), !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
      }, e.sendFocusBackToInput = function() {
        e.preventFocusTimeout && e.clearPreventFocusTimeout(), e.setState({ preventFocus: !0 }, function() {
          e.preventFocusTimeout = setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        });
      }, e.cancelFocusInput = function() {
        clearTimeout(e.inputFocusTimeout), e.inputFocusTimeout = void 0;
      }, e.deferFocusInput = function() {
        e.cancelFocusInput(), e.inputFocusTimeout = setTimeout(function() {
          return e.setFocus();
        }, 1);
      }, e.handleDropdownFocus = function() {
        e.cancelFocusInput();
      }, e.handleBlur = function(a) {
        var o, i;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((i = (o = e.props).onBlur) === null || i === void 0 || i.call(o, a)), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(a) {
        var o, i;
        e.props.inline || e.setOpen(!1), (i = (o = e.props).onClickOutside) === null || i === void 0 || i.call(o, a), e.props.withPortal && a.preventDefault();
      }, e.handleChange = function() {
        for (var a, o, i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        var c = i[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, i), !c || typeof c.isDefaultPrevented != "function" || c.isDefaultPrevented()))) {
          e.setState({
            inputValue: (c == null ? void 0 : c.target) instanceof HTMLInputElement ? c.target.value : null,
            lastPreSelectChange: Em
          });
          var l = e.props, u = l.dateFormat, d = u === void 0 ? r.defaultProps.dateFormat : u, f = l.strictParsing, h = f === void 0 ? r.defaultProps.strictParsing : f, m = l.selectsRange, p = l.startDate, v = l.endDate, y = (c == null ? void 0 : c.target) instanceof HTMLInputElement ? c.target.value : "";
          if (m) {
            var b = y.split("-", 2).map(function(I) {
              return I.trim();
            }), D = b[0], M = b[1], g = ea(D ?? "", d, e.props.locale, h), x = ea(M ?? "", d, e.props.locale, h), w = (p == null ? void 0 : p.getTime()) !== (g == null ? void 0 : g.getTime()), P = (v == null ? void 0 : v.getTime()) !== (x == null ? void 0 : x.getTime());
            if (!w && !P || g && et(g, e.props) || x && et(x, e.props))
              return;
            (o = (a = e.props).onChange) === null || o === void 0 || o.call(a, [g, x], c);
          } else {
            var T = ea(y, d, e.props.locale, h, e.props.minDate);
            e.props.showTimeSelectOnly && e.props.selected && T && !ie(T, e.props.selected) && (T = dp(e.props.selected, {
              hours: pt(T),
              minutes: ht(T),
              seconds: _t(T)
            })), (T || !y) && e.setSelected(T, c, !0);
          }
        }
      }, e.handleSelect = function(a, o, i) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(a, o, !1, i), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(a);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var s = e.props, c = s.startDate, l = s.endDate;
          c && !l && (e.props.swapRange || !ki(a, c)) && e.setOpen(!1);
        }
      }, e.setSelected = function(a, o, i, s) {
        var c, l, u = a;
        if (e.props.showYearPicker) {
          if (u !== null && hr(ae(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && js(u, e.props))
            return;
        } else if (u !== null && et(u, e.props))
          return;
        var d = e.props, f = d.onChange, h = d.selectsRange, m = d.startDate, p = d.endDate, v = d.selectsMultiple, y = d.selectedDates, b = d.minTime, D = d.swapRange;
        if (!Bt(e.props.selected, u) || e.props.allowSameDay || h || v)
          if (u !== null && (e.props.selected && (!i || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = ta(u, {
            hour: pt(e.props.selected),
            minute: ht(e.props.selected),
            second: _t(e.props.selected)
          })), !i && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && b && (u = ta(u, {
            hour: b.getHours(),
            minute: b.getMinutes(),
            second: b.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: s })), h) {
            var M = !m && !p, g = m && !p, x = m && p;
            M ? f == null || f([u, null], o) : g && (u === null ? f == null || f([null, null], o) : ki(u, m) ? D ? f == null || f([u, m], o) : f == null || f([u, null], o) : f == null || f([m, u], o)), x && (f == null || f([u, null], o));
          } else if (v) {
            if (u !== null)
              if (!(y != null && y.length))
                f == null || f([u], o);
              else {
                var w = y.some(function(T) {
                  return ie(T, u);
                });
                if (w) {
                  var P = y.filter(function(T) {
                    return !ie(T, u);
                  });
                  f == null || f(P, o);
                } else
                  f == null || f(ft(ft([], y, !0), [u], !1), o);
              }
          } else
            f == null || f(u, o);
        i || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(a) {
        var o = Dt(e.props.minDate), i = Dt(e.props.maxDate), s = !0;
        if (a) {
          var c = pr(a);
          if (o && i)
            s = Ln(a, e.props.minDate, e.props.maxDate);
          else if (o) {
            var l = pr(e.props.minDate);
            s = Wt(a, l) || Bt(c, l);
          } else if (i) {
            var u = li(e.props.maxDate);
            s = en(a, u) || Bt(c, u);
          }
        }
        s && e.setState({
          preSelection: a
        });
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(a) {
        var o, i;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var s = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? a : ta(s, {
            hour: pt(a),
            minute: ht(a)
          });
          e.setState({
            preSelection: c
          }), (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, c), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var a, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (a = e.props).onInputClick) === null || o === void 0 || o.call(a);
      }, e.onInputKeyDown = function(a) {
        var o, i, s, c, l, u;
        (i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, a);
        var d = a.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (d === j.ArrowDown || d === j.ArrowUp || d === j.Enter) && ((s = e.onInputClick) === null || s === void 0 || s.call(e));
          return;
        }
        if (e.state.open) {
          if (d === j.ArrowDown || d === j.ArrowUp) {
            a.preventDefault();
            var f = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', h = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(f);
            h instanceof HTMLElement && h.focus({ preventScroll: !0 });
            return;
          }
          var m = me(e.state.preSelection);
          d === j.Enter ? (a.preventDefault(), a.target.blur(), e.inputOk() && e.state.lastPreSelectChange === aa ? (e.handleSelect(m, a), !e.props.shouldCloseOnSelect && e.setPreSelection(m)) : e.setOpen(!1)) : d === j.Escape ? (a.preventDefault(), a.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === j.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ra });
        }
      }, e.onPortalKeyDown = function(a) {
        var o = a.key;
        o === j.Escape && (a.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(a) {
        var o, i, s, c, l, u, d = e.props, f = d.minDate, h = d.maxDate, m = d.disabledKeyboardNavigation, p = d.showWeekPicker, v = d.shouldCloseOnSelect, y = d.locale, b = d.calendarStartDay, D = d.adjustDateOnChange, M = d.inline;
        if ((i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, a), !m) {
          var g = a.key, x = a.shiftKey, w = me(e.state.preSelection), P = function(C, N) {
            var _ = N;
            switch (C) {
              case j.ArrowRight:
                _ = p ? kr(N, 1) : ot(N, 1);
                break;
              case j.ArrowLeft:
                _ = p ? Uo(N, 1) : Gf(N, 1);
                break;
              case j.ArrowUp:
                _ = Uo(N, 1);
                break;
              case j.ArrowDown:
                _ = kr(N, 1);
                break;
              case j.PageUp:
                _ = x ? wn(N, 1) : Qt(N, 1);
                break;
              case j.PageDown:
                _ = x ? kt(N, 1) : st(N, 1);
                break;
              case j.Home:
                _ = It(N, y, b);
                break;
              case j.End:
                _ = Fh(N);
                break;
            }
            return _;
          }, T = function(C, N) {
            for (var _ = 40, $ = C, V = !1, X = 0, ee = P(C, N); !V; ) {
              if (X >= _) {
                ee = N;
                break;
              }
              f && ee < f && ($ = j.ArrowRight, ee = et(f, e.props) ? P($, ee) : f), h && ee > h && ($ = j.ArrowLeft, ee = et(h, e.props) ? P($, ee) : h), et(ee, e.props) ? (($ === j.PageUp || $ === j.Home) && ($ = j.ArrowRight), ($ === j.PageDown || $ === j.End) && ($ = j.ArrowLeft), ee = P($, ee)) : V = !0, X++;
            }
            return ee;
          };
          if (g === j.Enter) {
            a.preventDefault(), e.handleSelect(w, a), !v && e.setPreSelection(w);
            return;
          } else if (g === j.Escape) {
            a.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (s = e.props).onInputError) === null || c === void 0 || c.call(s, { code: 1, msg: ra });
            return;
          }
          var I = null;
          switch (g) {
            case j.ArrowLeft:
            case j.ArrowRight:
            case j.ArrowUp:
            case j.ArrowDown:
            case j.PageUp:
            case j.PageDown:
            case j.Home:
            case j.End:
              I = T(g, w);
              break;
          }
          if (!I) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ra });
            return;
          }
          if (a.preventDefault(), e.setState({ lastPreSelectChange: aa }), D && e.setSelected(I), e.setPreSelection(I), M) {
            var Q = Be(w), Z = Be(I), R = ae(w), O = ae(I);
            Q !== Z || R !== O ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(a) {
        var o = a.key;
        o === j.Escape && (a.preventDefault(), e.sendFocusBackToInput());
      }, e.onClearClick = function(a) {
        a && a.preventDefault && a.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, i = o.selectsRange, s = o.onChange;
        i ? s == null || s([null, null], a) : s == null || s(null, a), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(a) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (a.target === document || a.target === document.documentElement || a.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(a) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var a, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : S.createElement(bm, se({ showMonthYearDropdown: void 0, ref: function(i) {
          e.calendar = i;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (a = e.props.dateFormatCalendar) !== null && a !== void 0 ? a : r.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Kh(e.modifyHolidays()), outsideClickIgnoreClass: xi, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : r.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var a = e.props, o = a.dateFormat, i = o === void 0 ? r.defaultProps.dateFormat : o, s = a.locale, c = e.props.showTimeInput || e.props.showTimeSelect, l = c ? "PPPPp" : "PPPP", u;
        return e.props.selectsRange ? u = "Selected start date: ".concat(Je(e.props.startDate, {
          dateFormat: l,
          locale: s
        }), ". ").concat(e.props.endDate ? "End date: " + Je(e.props.endDate, {
          dateFormat: l,
          locale: s
        }) : "") : e.props.showTimeSelectOnly ? u = "Selected time: ".concat(Je(e.props.selected, { dateFormat: i, locale: s })) : e.props.showYearPicker ? u = "Selected year: ".concat(Je(e.props.selected, { dateFormat: "yyyy", locale: s })) : e.props.showMonthYearPicker ? u = "Selected month: ".concat(Je(e.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : e.props.showQuarterYearPicker ? u = "Selected quarter: ".concat(Je(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : u = "Selected date: ".concat(Je(e.props.selected, {
          dateFormat: l,
          locale: s
        })), S.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var a, o, i, s = Re(e.props.className, (a = {}, a[xi] = e.state.open, a)), c = e.props.customInput || S.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, f = d === void 0 ? r.defaultProps.dateFormat : d, h = u.locale, m = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? Ih(e.props.startDate, e.props.endDate, {
          dateFormat: f,
          locale: h
        }) : e.props.selectsMultiple ? Lh((i = e.props.selectedDates) !== null && i !== void 0 ? i : [], {
          dateFormat: f,
          locale: h
        }) : Je(e.props.selected, {
          dateFormat: f,
          locale: h
        });
        return Vi(c, (o = {}, o[l] = function(p) {
          e.input = p;
        }, o.value = m, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = Re(c.props.className, s), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var a = e.props, o = a.isClearable, i = a.disabled, s = a.selected, c = a.startDate, l = a.endDate, u = a.clearButtonTitle, d = a.clearButtonClassName, f = d === void 0 ? "" : d, h = a.ariaLabelClose, m = h === void 0 ? "Close" : h, p = a.selectedDates;
        return o && (s != null || c != null || l != null || p != null && p.length) ? S.createElement("button", { type: "button", className: Re("react-datepicker__close-icon", f, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": m, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(r, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          readOnly: !1,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: Qn,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, r.prototype.componentDidUpdate = function(t, e) {
      var a, o, i, s;
      t.inline && Cm(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: gi(this.props.highlightDates)
      }), !e.focused && !Bt(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (a = this.props).onCalendarOpen) === null || o === void 0 || o.call(a)), e.open === !0 && this.state.open === !1 && ((s = (i = this.props).onCalendarClose) === null || s === void 0 || s.call(i)));
    }, r.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, r.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, a = t.icon, o = t.calendarIconClassname, i = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), S.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && S.createElement(km, se({ icon: a, className: Re(i, !i && o, c && "react-datepicker-ignore-onclickoutside") }, s ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, r.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? S.createElement(
          Us,
          { enableTabLoop: this.props.enableTabLoop },
          S.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = S.createElement(qs, se({ portalId: this.props.portalId }, this.props), e)), S.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return S.createElement(Sm, se({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, r;
  }(Te)
), Em = "input", aa = "navigate";
const Tm = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Om = (n, r, t) => {
  let e;
  const a = Tm[n];
  return typeof a == "string" ? e = a : r === 1 ? e = a.one : e = a.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
}, Nm = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $m = (n, r, t, e) => Nm[n];
function ye(n) {
  return (r, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (e === "formatting" && n.formattingValues) {
      const i = n.defaultFormattingWidth || n.defaultWidth, s = t != null && t.width ? String(t.width) : i;
      a = n.formattingValues[s] || n.formattingValues[i];
    } else {
      const i = n.defaultWidth, s = t != null && t.width ? String(t.width) : n.defaultWidth;
      a = n.values[s] || n.values[i];
    }
    const o = n.argumentCallback ? n.argumentCallback(r) : r;
    return a[o];
  };
}
const Rm = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ym = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Im = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Lm = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Am = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Wm = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Fm = (n, r) => {
  const t = Number(n), e = t % 100;
  if (e > 20 || e < 10)
    switch (e % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Hm = {
  ordinalNumber: Fm,
  era: ye({
    values: Rm,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: Ym,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: ye({
    values: Im,
    defaultWidth: "wide"
  }),
  day: ye({
    values: Lm,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: Am,
    defaultWidth: "wide",
    formattingValues: Wm,
    defaultFormattingWidth: "wide"
  })
};
function we(n) {
  return (r, t = {}) => {
    const e = t.width, a = e && n.matchPatterns[e] || n.matchPatterns[n.defaultMatchWidth], o = r.match(a);
    if (!o)
      return null;
    const i = o[0], s = e && n.parsePatterns[e] || n.parsePatterns[n.defaultParseWidth], c = Array.isArray(s) ? Vm(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      zm(s, (d) => d.test(i))
    );
    let l;
    l = n.valueCallback ? n.valueCallback(c) : c, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = r.slice(i.length);
    return { value: l, rest: u };
  };
}
function zm(n, r) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && r(n[t]))
      return t;
}
function Vm(n, r) {
  for (let t = 0; t < n.length; t++)
    if (r(n[t]))
      return t;
}
function qn(n) {
  return (r, t = {}) => {
    const e = r.match(n.matchPattern);
    if (!e)
      return null;
    const a = e[0], o = r.match(n.parsePattern);
    if (!o)
      return null;
    let i = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = r.slice(a.length);
    return { value: i, rest: s };
  };
}
const Bm = /^(\d+)(th|st|nd|rd)?/i, jm = /\d+/i, Zm = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qm = {
  any: [/^b/i, /^(a|c)/i]
}, Gm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Um = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Xm = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Km = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jm = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, e1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, t1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, n1 = {
  ordinalNumber: qn({
    matchPattern: Bm,
    parsePattern: jm,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: we({
    matchPatterns: Zm,
    defaultMatchWidth: "wide",
    parsePatterns: Qm,
    defaultParseWidth: "any"
  }),
  quarter: we({
    matchPatterns: Gm,
    defaultMatchWidth: "wide",
    parsePatterns: qm,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: we({
    matchPatterns: Um,
    defaultMatchWidth: "wide",
    parsePatterns: Xm,
    defaultParseWidth: "any"
  }),
  day: we({
    matchPatterns: Km,
    defaultMatchWidth: "wide",
    parsePatterns: Jm,
    defaultParseWidth: "any"
  }),
  dayPeriod: we({
    matchPatterns: e1,
    defaultMatchWidth: "any",
    parsePatterns: t1,
    defaultParseWidth: "any"
  })
};
function Ze(n) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const r1 = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd/MM/yyyy"
}, a1 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, o1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, i1 = {
  date: Ze({
    formats: r1,
    defaultWidth: "full"
  }),
  time: Ze({
    formats: a1,
    defaultWidth: "full"
  }),
  dateTime: Ze({
    formats: o1,
    defaultWidth: "full"
  })
}, s1 = {
  code: "en-GB",
  formatDistance: Om,
  formatLong: i1,
  formatRelative: $m,
  localize: Hm,
  match: n1,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, c1 = s1, l1 = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę"
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę"
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę"
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy"
  },
  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy"
  },
  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};
function u1(n, r) {
  if (r === 1)
    return n.one;
  const t = r % 100;
  if (t <= 20 && t > 10)
    return n.other;
  const e = t % 10;
  return e >= 2 && e <= 4 ? n.twoFour : n.other;
}
function oa(n, r, t) {
  const e = u1(n, r);
  return (typeof e == "string" ? e : e[t]).replace("{{count}}", String(r));
}
const d1 = (n, r, t) => {
  const e = l1[n];
  return t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "za " + oa(e, r, "future") : oa(e, r, "past") + " temu" : oa(e, r, "regular");
}, f1 = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.y"
}, p1 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, h1 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, m1 = {
  date: Ze({
    formats: f1,
    defaultWidth: "full"
  }),
  time: Ze({
    formats: p1,
    defaultWidth: "full"
  }),
  dateTime: Ze({
    formats: h1,
    defaultWidth: "full"
  })
}, Mi = Symbol.for("constructDateFrom");
function Xs(n, r) {
  return typeof n == "function" ? n(r) : n && typeof n == "object" && Mi in n ? n[Mi](r) : n instanceof Date ? new n.constructor(r) : new Date(r);
}
function v1(n, ...r) {
  const t = Xs.bind(
    null,
    n || r.find((e) => typeof e == "object")
  );
  return r.map(t);
}
let g1 = {};
function y1() {
  return g1;
}
function w1(n, r) {
  return Xs(r || n, n);
}
function Si(n, r) {
  var s, c, l, u;
  const t = y1(), e = (r == null ? void 0 : r.weekStartsOn) ?? ((c = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = w1(n, r == null ? void 0 : r.in), o = a.getDay(), i = (o < e ? 7 : 0) + o - e;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function Aa(n, r, t) {
  const [e, a] = v1(
    t == null ? void 0 : t.in,
    n,
    r
  );
  return +Si(e, t) == +Si(a, t);
}
const b1 = {
  masculine: "ostatni",
  feminine: "ostatnia"
}, k1 = {
  masculine: "ten",
  feminine: "ta"
}, D1 = {
  masculine: "następny",
  feminine: "następna"
}, _1 = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
function Ci(n, r, t, e) {
  let a;
  if (Aa(r, t, e))
    a = k1;
  else if (n === "lastWeek")
    a = b1;
  else if (n === "nextWeek")
    a = D1;
  else
    throw new Error(`Cannot determine adjectives for token ${n}`);
  const o = r.getDay(), i = _1[o];
  return `'${a[i]}' eeee 'o' p`;
}
const x1 = {
  lastWeek: Ci,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: Ci,
  other: "P"
}, M1 = (n, r, t, e) => {
  const a = x1[n];
  return typeof a == "function" ? a(n, r, t, e) : a;
}, S1 = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed naszą erą", "naszej ery"]
}, C1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
}, P1 = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień"
  ]
}, E1 = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia"
  ]
}, T1 = {
  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, O1 = {
  narrow: ["n", "p", "w", "ś", "c", "p", "s"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, N1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "półn.",
    noon: "poł",
    morning: "rano",
    afternoon: "popoł.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  }
}, $1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o półn.",
    noon: "w poł.",
    morning: "rano",
    afternoon: "po poł.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  }
}, R1 = (n, r) => String(n), Y1 = {
  ordinalNumber: R1,
  era: ye({
    values: S1,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: C1,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: ye({
    values: P1,
    defaultWidth: "wide",
    formattingValues: E1,
    defaultFormattingWidth: "wide"
  }),
  day: ye({
    values: T1,
    defaultWidth: "wide",
    formattingValues: O1,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: ye({
    values: N1,
    defaultWidth: "wide",
    formattingValues: $1,
    defaultFormattingWidth: "wide"
  })
}, I1 = /^(\d+)?/i, L1 = /\d+/i, A1 = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
}, W1 = {
  any: [/^p/i, /^n/i]
}, F1 = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
}, H1 = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
}, z1 = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
}, V1 = {
  narrow: [
    /^s/i,
    /^l/i,
    /^m/i,
    /^k/i,
    /^m/i,
    /^c/i,
    /^l/i,
    /^s/i,
    /^w/i,
    /^p/i,
    /^l/i,
    /^g/i
  ],
  any: [
    /^st/i,
    /^lu/i,
    /^mar/i,
    /^k/i,
    /^maj/i,
    /^c/i,
    /^lip/i,
    /^si/i,
    /^w/i,
    /^p/i,
    /^lis/i,
    /^g/i
  ]
}, B1 = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
}, j1 = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
}, Z1 = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
}, Q1 = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  }
}, G1 = {
  ordinalNumber: qn({
    matchPattern: I1,
    parsePattern: L1,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: we({
    matchPatterns: A1,
    defaultMatchWidth: "wide",
    parsePatterns: W1,
    defaultParseWidth: "any"
  }),
  quarter: we({
    matchPatterns: F1,
    defaultMatchWidth: "wide",
    parsePatterns: H1,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: we({
    matchPatterns: z1,
    defaultMatchWidth: "wide",
    parsePatterns: V1,
    defaultParseWidth: "any"
  }),
  day: we({
    matchPatterns: B1,
    defaultMatchWidth: "wide",
    parsePatterns: j1,
    defaultParseWidth: "any"
  }),
  dayPeriod: we({
    matchPatterns: Z1,
    defaultMatchWidth: "any",
    parsePatterns: Q1,
    defaultParseWidth: "any"
  })
}, q1 = {
  code: "pl",
  formatDistance: d1,
  formatLong: m1,
  formatRelative: M1,
  localize: Y1,
  match: G1,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, U1 = q1, Pi = {
  lessThanXSeconds: {
    standalone: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    },
    withPreposition: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    }
  },
  xSeconds: {
    standalone: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    },
    withPreposition: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    }
  },
  halfAMinute: {
    standalone: "eine halbe Minute",
    withPreposition: "einer halben Minute"
  },
  lessThanXMinutes: {
    standalone: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    },
    withPreposition: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    }
  },
  xMinutes: {
    standalone: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    },
    withPreposition: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    },
    withPreposition: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    }
  },
  xHours: {
    standalone: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    },
    withPreposition: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    }
  },
  xDays: {
    standalone: {
      one: "1 Tag",
      other: "{{count}} Tage"
    },
    withPreposition: {
      one: "1 Tag",
      other: "{{count}} Tagen"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    },
    withPreposition: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monate"
    },
    withPreposition: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monaten"
    }
  },
  xMonths: {
    standalone: {
      one: "1 Monat",
      other: "{{count}} Monate"
    },
    withPreposition: {
      one: "1 Monat",
      other: "{{count}} Monaten"
    }
  },
  aboutXYears: {
    standalone: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahre"
    },
    withPreposition: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahren"
    }
  },
  xYears: {
    standalone: {
      one: "1 Jahr",
      other: "{{count}} Jahre"
    },
    withPreposition: {
      one: "1 Jahr",
      other: "{{count}} Jahren"
    }
  },
  overXYears: {
    standalone: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahre"
    },
    withPreposition: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahren"
    }
  },
  almostXYears: {
    standalone: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahre"
    },
    withPreposition: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahren"
    }
  }
}, X1 = (n, r, t) => {
  let e;
  const a = t != null && t.addSuffix ? Pi[n].withPreposition : Pi[n].standalone;
  return typeof a == "string" ? e = a : r === 1 ? e = a.one : e = a.other.replace("{{count}}", String(r)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : "vor " + e : e;
}, K1 = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, J1 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, e0 = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, t0 = {
  date: Ze({
    formats: K1,
    defaultWidth: "full"
  }),
  time: Ze({
    formats: J1,
    defaultWidth: "full"
  }),
  dateTime: Ze({
    formats: e0,
    defaultWidth: "full"
  })
}, n0 = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, r0 = (n, r, t, e) => n0[n], a0 = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, o0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, Wa = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  wide: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ]
}, i0 = {
  narrow: Wa.narrow,
  abbreviated: [
    "Jan.",
    "Feb.",
    "März",
    "Apr.",
    "Mai",
    "Juni",
    "Juli",
    "Aug.",
    "Sep.",
    "Okt.",
    "Nov.",
    "Dez."
  ],
  wide: Wa.wide
}, s0 = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
  wide: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ]
}, c0 = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachm.",
    evening: "Abend",
    night: "Nacht"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  }
}, l0 = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachm.",
    evening: "abends",
    night: "nachts"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  }
}, u0 = (n) => Number(n) + ".", d0 = {
  ordinalNumber: u0,
  era: ye({
    values: a0,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: o0,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: ye({
    values: Wa,
    formattingValues: i0,
    defaultWidth: "wide"
  }),
  day: ye({
    values: s0,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: c0,
    defaultWidth: "wide",
    formattingValues: l0,
    defaultFormattingWidth: "wide"
  })
}, f0 = /^(\d+)(\.)?/i, p0 = /\d+/i, h0 = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, m0 = {
  any: [/^v/i, /^n/i]
}, v0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, g0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, y0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, w0 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^j[aä]/i,
    /^f/i,
    /^mär/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, b0 = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, k0 = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, D0 = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, _0 = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i
    // will never be matched. Night is matched by `pm`
  }
}, x0 = {
  ordinalNumber: qn({
    matchPattern: f0,
    parsePattern: p0,
    valueCallback: (n) => parseInt(n)
  }),
  era: we({
    matchPatterns: h0,
    defaultMatchWidth: "wide",
    parsePatterns: m0,
    defaultParseWidth: "any"
  }),
  quarter: we({
    matchPatterns: v0,
    defaultMatchWidth: "wide",
    parsePatterns: g0,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: we({
    matchPatterns: y0,
    defaultMatchWidth: "wide",
    parsePatterns: w0,
    defaultParseWidth: "any"
  }),
  day: we({
    matchPatterns: b0,
    defaultMatchWidth: "wide",
    parsePatterns: k0,
    defaultParseWidth: "any"
  }),
  dayPeriod: we({
    matchPatterns: D0,
    defaultMatchWidth: "wide",
    parsePatterns: _0,
    defaultParseWidth: "any"
  })
}, M0 = {
  code: "de",
  formatDistance: X1,
  formatLong: t0,
  formatRelative: r0,
  localize: d0,
  match: x0,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, S0 = M0, Ks = {
  xseconds_other: "sekundė_sekundžių_sekundes",
  xminutes_one: "minutė_minutės_minutę",
  xminutes_other: "minutės_minučių_minutes",
  xhours_one: "valanda_valandos_valandą",
  xhours_other: "valandos_valandų_valandas",
  xdays_one: "diena_dienos_dieną",
  xdays_other: "dienos_dienų_dienas",
  xweeks_one: "savaitė_savaitės_savaitę",
  xweeks_other: "savaitės_savaičių_savaites",
  xmonths_one: "mėnuo_mėnesio_mėnesį",
  xmonths_other: "mėnesiai_mėnesių_mėnesius",
  xyears_one: "metai_metų_metus",
  xyears_other: "metai_metų_metus",
  about: "apie",
  over: "daugiau nei",
  almost: "beveik",
  lessthan: "mažiau nei"
}, Ei = (n, r, t, e) => r ? e ? "kelių sekundžių" : "kelias sekundes" : "kelios sekundės", Qe = (n, r, t, e) => r ? e ? Nt(t)[1] : Nt(t)[2] : Nt(t)[0], We = (n, r, t, e) => {
  const a = n + " ";
  return n === 1 ? a + Qe(n, r, t, e) : r ? e ? a + Nt(t)[1] : a + (Ti(n) ? Nt(t)[1] : Nt(t)[2]) : a + (Ti(n) ? Nt(t)[1] : Nt(t)[0]);
};
function Ti(n) {
  return n % 10 === 0 || n > 10 && n < 20;
}
function Nt(n) {
  return Ks[n].split("_");
}
const C0 = {
  lessThanXSeconds: {
    one: Ei,
    other: We
  },
  xSeconds: {
    one: Ei,
    other: We
  },
  halfAMinute: "pusė minutės",
  lessThanXMinutes: {
    one: Qe,
    other: We
  },
  xMinutes: {
    one: Qe,
    other: We
  },
  aboutXHours: {
    one: Qe,
    other: We
  },
  xHours: {
    one: Qe,
    other: We
  },
  xDays: {
    one: Qe,
    other: We
  },
  aboutXWeeks: {
    one: Qe,
    other: We
  },
  xWeeks: {
    one: Qe,
    other: We
  },
  aboutXMonths: {
    one: Qe,
    other: We
  },
  xMonths: {
    one: Qe,
    other: We
  },
  aboutXYears: {
    one: Qe,
    other: We
  },
  xYears: {
    one: Qe,
    other: We
  },
  overXYears: {
    one: Qe,
    other: We
  },
  almostXYears: {
    one: Qe,
    other: We
  }
}, P0 = (n, r, t) => {
  const e = n.match(/about|over|almost|lessthan/i), a = e ? n.replace(e[0], "") : n, o = (t == null ? void 0 : t.comparison) !== void 0 && t.comparison > 0;
  let i;
  const s = C0[n];
  if (typeof s == "string" ? i = s : r === 1 ? i = s.one(
    r,
    (t == null ? void 0 : t.addSuffix) === !0,
    a.toLowerCase() + "_one",
    o
  ) : i = s.other(
    r,
    (t == null ? void 0 : t.addSuffix) === !0,
    a.toLowerCase() + "_other",
    o
  ), e) {
    const c = e[0].toLowerCase();
    i = Ks[c] + " " + i;
  }
  return t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "po " + i : "prieš " + i : i;
}, E0 = {
  full: "y 'm'. MMMM d 'd'., EEEE",
  long: "y 'm'. MMMM d 'd'.",
  medium: "y-MM-dd",
  short: "y-MM-dd"
}, T0 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, O0 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, N0 = {
  date: Ze({
    formats: E0,
    defaultWidth: "full"
  }),
  time: Ze({
    formats: T0,
    defaultWidth: "full"
  }),
  dateTime: Ze({
    formats: O0,
    defaultWidth: "full"
  })
}, $0 = {
  lastWeek: "'Praėjusį' eeee p",
  yesterday: "'Vakar' p",
  today: "'Šiandien' p",
  tomorrow: "'Rytoj' p",
  nextWeek: "eeee p",
  other: "P"
}, R0 = (n, r, t, e) => $0[n], Y0 = {
  narrow: ["pr. Kr.", "po Kr."],
  abbreviated: ["pr. Kr.", "po Kr."],
  wide: ["prieš Kristų", "po Kristaus"]
}, I0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
}, L0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I k.", "II k.", "III k.", "IV k."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
}, A0 = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod."
  ],
  wide: [
    "sausis",
    "vasaris",
    "kovas",
    "balandis",
    "gegužė",
    "birželis",
    "liepa",
    "rugpjūtis",
    "rugsėjis",
    "spalis",
    "lapkritis",
    "gruodis"
  ]
}, W0 = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod."
  ],
  wide: [
    "sausio",
    "vasario",
    "kovo",
    "balandžio",
    "gegužės",
    "birželio",
    "liepos",
    "rugpjūčio",
    "rugsėjo",
    "spalio",
    "lapkričio",
    "gruodžio"
  ]
}, F0 = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
  wide: [
    "sekmadienis",
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis"
  ]
}, H0 = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
  wide: [
    "sekmadienį",
    "pirmadienį",
    "antradienį",
    "trečiadienį",
    "ketvirtadienį",
    "penktadienį",
    "šeštadienį"
  ]
}, z0 = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  }
}, V0 = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis"
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis"
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis"
  }
}, B0 = (n, r) => Number(n) + "-oji", j0 = {
  ordinalNumber: B0,
  era: ye({
    values: Y0,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: I0,
    defaultWidth: "wide",
    formattingValues: L0,
    defaultFormattingWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: ye({
    values: A0,
    defaultWidth: "wide",
    formattingValues: W0,
    defaultFormattingWidth: "wide"
  }),
  day: ye({
    values: F0,
    defaultWidth: "wide",
    formattingValues: H0,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: ye({
    values: z0,
    defaultWidth: "wide",
    formattingValues: V0,
    defaultFormattingWidth: "wide"
  })
}, Z0 = /^(\d+)(-oji)?/i, Q0 = /\d+/i, G0 = {
  narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
  abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
  wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i
}, q0 = {
  wide: [/prieš/i, /(po|mūsų)/i],
  any: [/^pr/i, /^(po|m)/i]
}, U0 = {
  narrow: /^([1234])/i,
  abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
  wide: /^(I|II|III|IV)\s?ketvirtis/i
}, X0 = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/I$/i, /II$/i, /III/i, /IV/i]
}, K0 = {
  narrow: /^[svkbglr]/i,
  abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
  wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i
}, J0 = {
  narrow: [
    /^s/i,
    /^v/i,
    /^k/i,
    /^b/i,
    /^g/i,
    /^b/i,
    /^l/i,
    /^r/i,
    /^r/i,
    /^s/i,
    /^l/i,
    /^g/i
  ],
  any: [
    /^saus/i,
    /^vas/i,
    /^kov/i,
    /^bal/i,
    /^geg/i,
    /^birž/i,
    /^liep/i,
    /^rugp/i,
    /^rugs/i,
    /^spal/i,
    /^lapkr/i,
    /^gruod/i
  ]
}, ev = {
  narrow: /^[spatkš]/i,
  short: /^(sk|pr|an|tr|kt|pn|št)/i,
  abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
  wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i
}, tv = {
  narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i],
  wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i],
  any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i]
}, nv = {
  narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
  any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i
}, rv = {
  narrow: {
    am: /^pr/i,
    pm: /^pop./i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i
  },
  any: {
    am: /^pr/i,
    pm: /^popiet$/i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i
  }
}, av = {
  ordinalNumber: qn({
    matchPattern: Z0,
    parsePattern: Q0,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: we({
    matchPatterns: G0,
    defaultMatchWidth: "wide",
    parsePatterns: q0,
    defaultParseWidth: "any"
  }),
  quarter: we({
    matchPatterns: U0,
    defaultMatchWidth: "wide",
    parsePatterns: X0,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: we({
    matchPatterns: K0,
    defaultMatchWidth: "wide",
    parsePatterns: J0,
    defaultParseWidth: "any"
  }),
  day: we({
    matchPatterns: ev,
    defaultMatchWidth: "wide",
    parsePatterns: tv,
    defaultParseWidth: "any"
  }),
  dayPeriod: we({
    matchPatterns: nv,
    defaultMatchWidth: "any",
    parsePatterns: rv,
    defaultParseWidth: "any"
  })
}, ov = {
  code: "lt",
  formatDistance: P0,
  formatLong: N0,
  formatRelative: R0,
  localize: j0,
  match: av,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, iv = ov;
function Rn(n, r) {
  if (n.one !== void 0 && r === 1)
    return n.one;
  const t = r % 10, e = r % 100;
  return t === 1 && e !== 11 ? n.singularNominative.replace("{{count}}", String(r)) : t >= 2 && t <= 4 && (e < 10 || e > 20) ? n.singularGenitive.replace("{{count}}", String(r)) : n.pluralGenitive.replace("{{count}}", String(r));
}
function Fe(n) {
  return (r, t) => t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n.future ? Rn(n.future, r) : "через " + Rn(n.regular, r) : n.past ? Rn(n.past, r) : Rn(n.regular, r) + " назад" : Rn(n.regular, r);
}
const sv = {
  lessThanXSeconds: Fe({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: Fe({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: (n, r) => r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты",
  lessThanXMinutes: Fe({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: Fe({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: Fe({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: Fe({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: Fe({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: Fe({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: Fe({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: Fe({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: Fe({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: Fe({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: Fe({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: Fe({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: Fe({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, cv = (n, r, t) => sv[n](r, t), lv = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, uv = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, dv = {
  any: "{{date}}, {{time}}"
}, fv = {
  date: Ze({
    formats: lv,
    defaultWidth: "full"
  }),
  time: Ze({
    formats: uv,
    defaultWidth: "full"
  }),
  dateTime: Ze({
    formats: dv,
    defaultWidth: "any"
  })
}, mo = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];
function pv(n) {
  const r = mo[n];
  switch (n) {
    case 0:
      return "'в прошлое " + r + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + r + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + r + " в' p";
  }
}
function Oi(n) {
  const r = mo[n];
  return n === 2 ? "'во " + r + " в' p" : "'в " + r + " в' p";
}
function hv(n) {
  const r = mo[n];
  switch (n) {
    case 0:
      return "'в следующее " + r + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + r + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + r + " в' p";
  }
}
const mv = {
  lastWeek: (n, r, t) => {
    const e = n.getDay();
    return Aa(n, r, t) ? Oi(e) : pv(e);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: (n, r, t) => {
    const e = n.getDay();
    return Aa(n, r, t) ? Oi(e) : hv(e);
  },
  other: "P"
}, vv = (n, r, t, e) => {
  const a = mv[n];
  return typeof a == "function" ? a(r, t, e) : a;
}, gv = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, yv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, wv = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ]
}, bv = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]
}, kv = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
}, Dv = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, _v = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, xv = (n, r) => {
  const t = Number(n), e = r == null ? void 0 : r.unit;
  let a;
  return e === "date" ? a = "-е" : e === "week" || e === "minute" || e === "second" ? a = "-я" : a = "-й", t + a;
}, Mv = {
  ordinalNumber: xv,
  era: ye({
    values: gv,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: yv,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: ye({
    values: wv,
    defaultWidth: "wide",
    formattingValues: bv,
    defaultFormattingWidth: "wide"
  }),
  day: ye({
    values: kv,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: Dv,
    defaultWidth: "any",
    formattingValues: _v,
    defaultFormattingWidth: "wide"
  })
}, Sv = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, Cv = /\d+/i, Pv = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, Ev = {
  any: [/^д/i, /^н/i]
}, Tv = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, Ov = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Nv = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, $v = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
}, Rv = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, Yv = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, Iv = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, Lv = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, Av = {
  ordinalNumber: qn({
    matchPattern: Sv,
    parsePattern: Cv,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: we({
    matchPatterns: Pv,
    defaultMatchWidth: "wide",
    parsePatterns: Ev,
    defaultParseWidth: "any"
  }),
  quarter: we({
    matchPatterns: Tv,
    defaultMatchWidth: "wide",
    parsePatterns: Ov,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: we({
    matchPatterns: Nv,
    defaultMatchWidth: "wide",
    parsePatterns: $v,
    defaultParseWidth: "any"
  }),
  day: we({
    matchPatterns: Rv,
    defaultMatchWidth: "wide",
    parsePatterns: Yv,
    defaultParseWidth: "any"
  }),
  dayPeriod: we({
    matchPatterns: Iv,
    defaultMatchWidth: "wide",
    parsePatterns: Lv,
    defaultParseWidth: "any"
  })
}, Wv = {
  code: "ru",
  formatDistance: cv,
  formatLong: fv,
  formatRelative: vv,
  localize: Mv,
  match: Av,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, Fv = Wv, Ni = {
  en: c1,
  pl: U1,
  de: S0,
  lt: iv,
  ru: Fv
}, Vr = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
`, Hv = U.div`
  width: calc(${({ width: n }) => n}px - ${tt}px);
  position: sticky;
  top: 0;
  left: ${tt}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: n }) => n.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: n }) => n.colors.background};
  z-index: 3;
`, zv = U.div`
  ${Vr};
  display: flex;
  align-items: center;
  position: relative;

  .react-datepicker-wrapper {
    margin-top: 3px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: n }) => n.colors.textPrimary};
  }

  &::before {
    left: -1.125rem;
  }

  &::after {
    right: -1.125rem;
  }
`, Vv = U.div`
  display: flex;
  gap: 1.875rem;
`, $i = U.button`
  ${Vr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: n }) => n.colors.textPrimary};

  :not(:disabled) {
    cursor: pointer;
  }
`, Bv = U.button`
  ${Vr};
  display: flex;
  align-items: center;
  cursor: pointer;
`, jv = U.button`
  ${Vr};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  padding-right: 0.625rem;
  color: ${({ theme: n }) => n.colors.textPrimary};
`, Zv = U.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: n }) => n.colors.textPrimary};
`, Qv = U.div`
  display: flex;
`, Gv = U.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`, qv = ({ width: n, showThemeToggle: r, toggleTheme: t }) => {
  const { topbar: e } = Sn(), { currentLocale: a } = St(Ja), o = Ni[a.id] || Ni.en, {
    data: i,
    config: s,
    handleGoNext: c,
    handleGoPrev: l,
    handleGoToday: u,
    handleGoDate: d,
    zoomIn: f,
    zoomOut: h,
    isNextZoom: m,
    isPrevZoom: p,
    handleFilterData: v,
    onClearFilterData: y
  } = Mn(), { colors: b } = nn(), { filterButtonState: D = -1 } = s, M = (g) => {
    g.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ fe(Hv, { width: n, children: [
    /* @__PURE__ */ F(Qv, { children: D >= 0 && /* @__PURE__ */ fe(
      ia,
      {
        variant: D ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          e.filters,
          !!D && /* @__PURE__ */ F("span", { onClick: M, children: /* @__PURE__ */ F(Ue, { iconName: "close", height: "16", width: "16", fill: b.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ fe(Vv, { children: [
      /* @__PURE__ */ fe($i, { disabled: !(i != null && i.length), onClick: l, children: [
        /* @__PURE__ */ F(Ue, { iconName: "arrowLeft", height: "15", fill: b.textPrimary }),
        e.prev
      ] }),
      /* @__PURE__ */ fe(zv, { children: [
        /* @__PURE__ */ F(jv, { onClick: u, children: e.today }),
        /* @__PURE__ */ F(
          Pm,
          {
            locale: o,
            selected: new Date(),
            onSelect: (g) => d(z(g)),
            customInput: /* @__PURE__ */ F(Bv, { children: /* @__PURE__ */ F(Ue, { iconName: "calendar", height: "15", fill: b.textPrimary }) })
          }
        )
      ] }),
      /* @__PURE__ */ fe($i, { disabled: !(i != null && i.length), onClick: c, children: [
        e.next,
        /* @__PURE__ */ F(Ue, { iconName: "arrowRight", height: "15", fill: b.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ fe(Gv, { children: [
      r && /* @__PURE__ */ F(hy, { toggleTheme: t }),
      /* @__PURE__ */ fe(Zv, { children: [
        e.view,
        /* @__PURE__ */ F(
          ia,
          {
            isDisabled: !p,
            onClick: h,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ F(
          ia,
          {
            isDisabled: !m,
            onClick: f,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, Uv = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Xv = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Kv = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Jv = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), eg = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), tg = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ng = (n) => /* @__PURE__ */ E.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), rg = (n) => /* @__PURE__ */ E.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ag = (n) => /* @__PURE__ */ E.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), og = (n) => /* @__PURE__ */ E.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), ig = (n) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), sg = (n) => /* @__PURE__ */ E.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), cg = (n) => /* @__PURE__ */ E.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), lg = (n) => /* @__PURE__ */ E.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ E.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ug = (n) => /* @__PURE__ */ E.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("line", { x1: 1.75, y1: 6.5, x2: 12.25, y2: 6.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 1.75, y1: 8.5, x2: 12.25, y2: 8.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 1.75, y1: 10.5, x2: 12.25, y2: 10.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 4.25, y1: 5.5, x2: 4.25, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 7, y1: 5.5, x2: 7, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 9.75, y1: 5.5, x2: 9.75, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 })), dg = {
  add: Uv,
  subtract: Xv,
  filter: Kv,
  arrowLeft: Jv,
  arrowRight: eg,
  defaultAvatar: tg,
  calendarWarning: ng,
  calendarFree: rg,
  arrowDown: og,
  arrowUp: ag,
  search: ig,
  close: sg,
  moon: cg,
  sun: lg,
  calendar: ug
}, Ue = ({ iconName: n, width: r, height: t, fill: e, className: a }) => {
  const { colors: o } = nn(), i = dg[n];
  return i ? /* @__PURE__ */ F(
    i,
    {
      style: { transition: ".5s ease" },
      fill: e ?? o.accent,
      width: r,
      height: t,
      className: a
    }
  ) : null;
}, fg = (n, r, t) => ({
  outlined: {
    color: t ? n.colors.disabled : n.colors.accent,
    border: `1px solid ${t ? n.colors.disabled : n.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? n.colors.primary : n.colors.textSecondary,
    background: t ? n.colors.disabled : n.colors.accent,
    border: "1px solid transparent"
  }
})[r], pg = U.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded: n }) => n ? "50%" : "4px"};
  cursor: ${({ disabled: n }) => n ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: n }) => n ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: n, variant: r, disabled: t }) => fg(n, r, t)}
`, ia = ({
  iconName: n,
  width: r,
  height: t,
  fill: e,
  className: a,
  onClick: o,
  children: i,
  isFullRounded: s,
  isDisabled: c,
  variant: l = "outlined"
}) => {
  const { colors: u } = nn();
  return /* @__PURE__ */ fe(
    pg,
    {
      onClick: o,
      isFullRounded: s,
      hasChildren: !!i,
      disabled: c,
      variant: l,
      children: [
        /* @__PURE__ */ F(
          Ue,
          {
            iconName: n,
            width: r,
            height: t,
            fill: c ? u.disabled : e,
            className: a
          }
        ),
        i
      ]
    }
  );
}, hg = U.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: n }) => n ? "scroll" : "hidden"};
  background-color: ${({ theme: n }) => n.colors.gridBackground};
`, mg = U.div`
  position: relative;
`, wy = ({
  data: n,
  config: r,
  startDate: t,
  onRangeChange: e,
  onTileClick: a,
  onFilterData: o,
  onClearFilterData: i,
  onItemClick: s,
  isLoading: c
}) => {
  var M;
  const l = $t(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      dateFormat: "dddd DD.MM.YYYY",
      timeFormat: "HH:00",
      ...r
    }),
    [r]
  ), u = Ae(null), [d, f] = Ie((M = u.current) == null ? void 0 : M.clientWidth), h = $t(() => z(t), [t]), [m, p] = Ie(l.defaultTheme ?? "light"), v = () => {
    p(m === "light" ? "dark" : "light");
  }, y = m === "light" ? ol : il, b = l.theme ? l.theme[y.mode] : {}, D = {
    ...y,
    colors: {
      ...y.colors,
      ...b
    }
  };
  return Ee(() => {
    const g = () => {
      u.current && f(u.current.clientWidth);
    };
    return g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, []), u.current, /* @__PURE__ */ fe(Ha, { children: [
    /* @__PURE__ */ F(al, {}),
    /* @__PURE__ */ F(el, { theme: D, children: /* @__PURE__ */ F(Iu, { lang: l.lang, translations: l.translations, children: /* @__PURE__ */ F(
      au,
      {
        data: n,
        isLoading: !!c,
        config: l,
        onRangeChange: e,
        defaultStartDate: h,
        onFilterData: o,
        onClearFilterData: i,
        children: /* @__PURE__ */ F(
          hg,
          {
            showScroll: !!n.length,
            id: Xt,
            ref: u,
            children: /* @__PURE__ */ F(mg, { children: /* @__PURE__ */ F(
              Bu,
              {
                data: n,
                onTileClick: a,
                topBarWidth: d ?? 0,
                onItemClick: s,
                toggleTheme: v
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, vg = U.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: n, theme: r }) => n === "next" ? `1px solid ${r.colors.border}` : "none"};
`, gg = U.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: n }) => n.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: n }) => n.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: n }) => n ? "1" : "0"};
  pointer-events: ${({ isVisible: n }) => n ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: n }) => n.colors.hover};
  }
`, yg = U.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, wg = U.p`
  ${_n}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Ri = ({
  intent: n,
  onClick: r,
  icon: t,
  isVisible: e,
  pageNum: a,
  pagesAmount: o
}) => {
  const { loadNext: i, loadPrevious: s } = Sn(), c = n === "next" ? `${i} ${a + 2}/${o}` : `${s} ${a}/${o}`;
  return /* @__PURE__ */ F(vg, { intent: n, children: /* @__PURE__ */ fe(gg, { onClick: r, isVisible: e, children: [
    t && /* @__PURE__ */ F(yg, { children: t }),
    /* @__PURE__ */ F(wg, { children: c })
  ] }) });
}, bg = U.div`
  min-width: ${tt + "px"};
  max-width: ${tt + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: n }) => n.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, kg = U.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${tt}px;
  background-color: ${({ theme: n }) => n.colors.background};
  z-index: 3;
`, Dg = U.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: n }) => n.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: n }) => n.colors.placeholder};
  }
`, _g = U.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: n }) => n.colors.primary};
  border: 1px solid
    ${({ theme: n, isFocused: r }) => r ? n.colors.accent : n.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, xg = U.div`
  display: flex;
  align-items: ${({ rows: n }) => n > 1 ? "start" : "center"};
  padding: 0.813rem 1rem;
  width: 100%;
  min-height: ${Xe}px;
  height: calc(${Xe}px * ${({ rows: n }) => n});
  border-top: 1px solid ${({ theme: n }) => n.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable: n }) => n ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: n }) => n.colors.hover};
  }
`, Mg = U.div`
  display: flex;
  align-items: center;
`, Sg = U.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Cg = U.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Pg = U.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
`, Yi = U.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: n }) => n ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: n }) => n ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: n }) => n ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: n, theme: r }) => n ? r.colors.textPrimary : r.colors.placeholder};
  max-width: 100%;
  width: 100%;
  text-align: left;

  /* string */
  ${(n) => typeof n.children == "string" ? `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  ` : ""}

  /* React-component */
  & > * {
    max-width: 100%;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  /* inside flex-container */
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    align-items: center;
  }
`, Eg = ({ id: n, item: r, rows: t, onItemClick: e }) => /* @__PURE__ */ F(
  xg,
  {
    title: r.title + " | " + (typeof r.subtitle == "string" ? r.subtitle : ""),
    clickable: typeof e == "function",
    rows: t,
    onClick: () => e == null ? void 0 : e({ id: n, label: r }),
    children: /* @__PURE__ */ fe(Mg, { children: [
      /* @__PURE__ */ F(Sg, { children: r.icon ? /* @__PURE__ */ F(Cg, { src: r.icon, alt: "Icon" }) : /* @__PURE__ */ F(Ue, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ fe(Pg, { children: [
        /* @__PURE__ */ F(Yi, { isMain: !0, children: r.title }),
        /* @__PURE__ */ F(Yi, { children: r.subtitle })
      ] })
    ] })
  }
), Tg = ({
  data: n,
  rows: r,
  onLoadNext: t,
  onLoadPrevious: e,
  pageNum: a,
  pagesAmount: o,
  searchInputValue: i,
  onSearchInputChange: s,
  onItemClick: c
}) => {
  const [l, u] = Ie(!1), { search: d } = Sn(), f = () => u((h) => !h);
  return /* @__PURE__ */ fe(bg, { children: [
    /* @__PURE__ */ fe(kg, { children: [
      /* @__PURE__ */ fe(_g, { isFocused: l, children: [
        /* @__PURE__ */ F(
          Dg,
          {
            placeholder: d,
            value: i,
            onChange: s,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ F(Ue, { iconName: "search" })
      ] }),
      /* @__PURE__ */ F(
        Ri,
        {
          intent: "previous",
          isVisible: a !== 0,
          onClick: e,
          icon: /* @__PURE__ */ F(Ue, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: a,
          pagesAmount: o
        }
      )
    ] }),
    n.map((h, m) => /* @__PURE__ */ F(
      Eg,
      {
        id: h.id,
        item: h.label,
        rows: r[m],
        onItemClick: c
      },
      h.id
    )),
    /* @__PURE__ */ F(
      Ri,
      {
        intent: "next",
        isVisible: a !== o - 1,
        onClick: t,
        icon: /* @__PURE__ */ F(Ue, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: a,
        pagesAmount: o
      }
    )
  ] });
}, Og = U.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: n }) => n === "left" ? 0 : "auto"};
  right: ${({ position: n }) => n === "right" ? 0 : "auto"};
  background-color: ${({ theme: n }) => n.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Ng = rl`
from{
    left: -100%;
}
to{
    left: 100%;
}`, $g = U.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ng} 1s infinite;
`, Rg = ({ isLoading: n, position: r }) => n ? /* @__PURE__ */ F(Og, { position: r, children: /* @__PURE__ */ F($g, {}) }) : null, Ii = Rg, Pt = (n, r) => {
  const {
    ctx: t,
    x: e,
    y: a,
    width: o,
    height: i,
    textYPos: s,
    label: c,
    font: l,
    isBottomRow: u,
    fillStyle: d,
    topText: f,
    bottomText: h,
    labelBetweenCells: m
  } = n;
  if (t.beginPath(), t.strokeStyle = r.colors.border, t.setLineDash([]), c && l && s) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(e, a, o, i), m ? (t.moveTo(e, a), t.lineTo(e + o, a), t.stroke(), t.moveTo(e, a + i), t.lineTo(e + o, a + i), t.stroke(), t.moveTo(e + o / 2, a + i), t.lineTo(e + o / 2, a + i - 5), t.stroke()) : t.strokeRect(e + 0.5, a + 0.5, o, i), t.font = l;
    const p = e + o / 2 - t.measureText(c).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.placeholder, t.fillText(c, p, s);
  }
  if (u && d && f && h) {
    t.fillStyle = d, t.fillRect(e, a, o, i), t.strokeRect(e + 0.5, a + 0.5, o, i), t.font = f.font;
    const p = e + o / 2 - t.measureText(f.label).width / 2;
    t.fillStyle = f.color, t.fillText(f.label, p, f.y), t.font = h.font;
    const v = e + o / 2 - t.measureText(h.label).width / 2;
    t.fillStyle = h.color, t.fillText(h.label, v, h.y);
  }
}, Js = (n, r) => {
  const { isCurrent: t, isBusinessDay: e, variant: a } = n;
  return a === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t || !e ? r.colors.secondary : r.colors.primary;
}, Fa = (n, r) => {
  const { isCurrent: t, isBusinessDay: e, variant: a } = n;
  return t ? a === "bottomRow" ? r.colors.placeholder : r.colors.accent : e ? a === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Yg = (n, r, t, e) => {
  const a = mn - jt / cl, o = mn - jt / ll, i = Ct + xn;
  let s = 0;
  for (let c = 0; c < r; c++) {
    const l = cs(
      z(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(c, "days")
    );
    Pt(
      {
        ctx: n,
        x: s,
        y: i,
        width: Ge,
        height: jt,
        isBottomRow: !0,
        fillStyle: Js(
          {
            isCurrent: l.isCurrentDay,
            isBusinessDay: l.isBusinessDay
          },
          e
        ),
        topText: {
          y: a,
          label: l.dayName.toUpperCase(),
          font: it.bottomRow.name,
          color: Fa(
            { isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay },
            e
          )
        },
        bottomText: {
          y: o,
          label: `${l.dayOfMonth}`,
          font: it.bottomRow.number,
          color: Fa(
            {
              isCurrent: l.isCurrentDay,
              isBusinessDay: l.isBusinessDay,
              variant: "bottomRow"
            },
            e
          )
        }
      },
      e
    ), s += Ge;
  }
}, Ig = (n, r, t, e) => {
  let a = -(t.dayOfMonth - 1) * wt;
  const o = Ct;
  let s = t.month;
  for (let c = 0; c < r; c++) {
    s >= ma && (s = 0);
    const l = ss(t, c) * wt;
    Pt(
      {
        ctx: n,
        x: a,
        y: o,
        width: l,
        height: xn,
        textYPos: is,
        label: z().month(s).format("MMMM").toUpperCase(),
        font: it.bottomRow.number
      },
      e
    ), a += l, s++;
  }
}, Lg = (n, r, t) => {
  let a = 0, o = 0, i = 0, s = z(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  a = -r.dayOfMonth * Ge + Ge;
  for (let c = 0; c < ma; c++)
    s > ma - 1 && (s = 0, i++), o = z(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(c, "months").daysInMonth() * Ge, Pt(
      {
        ctx: n,
        x: a,
        y: 0,
        width: o,
        height: Ct,
        textYPos: Ga,
        label: z(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(s).format("MMMM").toUpperCase() + ` ${z(`${r.year + i}-${r.month + 1}-${r.dayOfMonth}`).month(s).format("YYYY")}`,
        font: it.topRow
      },
      t
    ), a += o, s++;
}, Ag = (n, r, t, e) => {
  const a = 7 * Ge, o = Ct, i = n.canvas.width / a + a, s = r.weekOfYear;
  let c = 0;
  for (let l = 0; l < i; l++) {
    const u = `${r.year}-${r.month + 1}-${r.dayOfMonth}`, d = z(u).day(), f = z(u).isoWeeksInYear();
    let h = (s + l) % f;
    h <= 0 && (h += f), d !== 1 && l === 0 && (c = -d * Ge + Ge), Pt(
      {
        ctx: n,
        x: c,
        y: o,
        width: a,
        height: xn,
        textYPos: is,
        label: `${t.toUpperCase()} ${h}`,
        font: it.middleRow
      },
      e
    ), c += a;
  }
}, Wg = (n, r, t, e, a) => {
  const o = mn - jt / 1.6, i = mn - jt / 4.5, s = Ct + xn;
  let c = 0;
  for (let l = 0; l < r; l++) {
    const u = z(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), d = u.isSame(z(), "week");
    Pt(
      {
        ctx: n,
        x: c,
        y: s,
        width: At,
        height: jt,
        isBottomRow: !0,
        fillStyle: Js({ isCurrent: d, variant: "yearView" }, a),
        topText: {
          y: o,
          label: u.isoWeek().toString(),
          font: it.bottomRow.name,
          color: Fa({ isCurrent: d }, a)
        },
        bottomText: {
          y: i,
          label: e.toUpperCase(),
          font: it.middleRow,
          color: a.colors.placeholder
        }
      },
      a
    ), c += At;
  }
}, Fg = (n, r, t, e) => {
  const o = r.year, i = n.canvas.width * 2;
  let s = 0, c = 0, l = (Yo(o) - t + 1) * wt, u = 0;
  for (; s + u <= i; )
    c > 0 && (l = Yo(o + c) * wt), u + l > i && c > 0 && (l = Math.ceil((i - u) / wt) * wt), Pt(
      {
        ctx: n,
        x: s,
        y: 0,
        width: l,
        height: Ct,
        textYPos: Ga,
        label: (o + c).toString(),
        font: it.topRow
      },
      e
    ), s += l, u += l, c++;
}, Hg = (n, r, t, e, a) => {
  const o = Math.floor(r / yr) + 2, i = yr * je;
  let l = -z(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * je + 0.5 * je;
  for (let u = 0; u < o; u++) {
    const d = z(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(u, "day").format(a).toUpperCase();
    Pt(
      {
        ctx: n,
        x: l,
        y: vn,
        width: i,
        height: Hn,
        textYPos: vn + Hn / 2 + 2,
        label: d,
        font: it.bottomRow.number
      },
      e
    ), l += i;
  }
}, zg = (n, r, t, e) => {
  const a = Math.ceil(r / yr), o = z(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = o.add(a - 1, "days"), s = o.month(), c = i.add(1, "day").month(), l = s === c ? 1 : 2;
  let u = 0.5 * je;
  for (let d = 0; d < l; d++) {
    const f = z(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), m = z(`${t.year}-${t.month + d + 1}-01T:23:59:59`).endOf("month"), p = m.format("MMMM").toUpperCase(), v = m.diff(f, "hour") + 1, y = d === 0 ? v * je : r * je;
    Pt(
      {
        ctx: n,
        x: u,
        y: 0,
        width: y,
        height: vn,
        textYPos: Ga,
        label: p,
        font: it.topRow
      },
      e
    ), u += y;
  }
}, Vg = (n, r, t, e, a) => {
  let o = 0;
  const i = vn + Hn, s = z(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = je;
  for (let l = 0; l < r; l++) {
    const u = s.add(l, "hours").format(a).toUpperCase();
    Pt(
      {
        ctx: n,
        x: o,
        y: i,
        width: c,
        height: ha,
        label: u,
        font: it.bottomRow.number,
        textYPos: vn + Hn + ha / 2 + 2,
        labelBetweenCells: !0
      },
      e
    ), o += je;
  }
}, Bg = (n, r, t, e, a, o, i, s = "dddd DD.MM.YYYY", c = "HH:00") => {
  switch (r) {
    case 0:
      Fg(n, e, o, i), Ig(n, t, e, i), Wg(n, t, e, a, i);
      break;
    case 1:
      Lg(n, e, i), Ag(n, e, a, i), Yg(n, t, e, i);
      break;
    case 2:
      zg(n, t, e, i), Hg(n, t, e, i, s), Vg(n, t, e, i, c);
      break;
  }
}, jg = U.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Zg = U.div`
  height: ${mn}px;
  display: block;
`, Qg = U.canvas``, Gg = ({ zoom: n, topBarWidth: r, showThemeToggle: t, toggleTheme: e }) => {
  const { week: a } = Sn(), { date: o, cols: i, dayOfYear: s, startDate: c, config: l } = Mn(), { dateFormat: u, timeFormat: d } = l, f = Ae(null), h = nn(), m = Ve(
    (p) => {
      const v = Ka(), b = (n === 2 ? sl : mn) + 1;
      us(p, v, b), Bg(p, n, i, c, a, s, h, u, d);
    },
    [i, s, c, a, n, h, u, d]
  );
  return Ee(() => {
    if (!f.current)
      return;
    const p = f.current.getContext("2d");
    if (!p)
      return;
    const v = () => m(p);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [m]), Ee(() => {
    const p = f.current;
    if (!p)
      return;
    p.style.letterSpacing = "1px";
    const v = p.getContext("2d");
    v && m(v);
  }, [o, n, m]), /* @__PURE__ */ fe(jg, { children: [
    /* @__PURE__ */ F(qv, { width: r, showThemeToggle: t, toggleTheme: e }),
    /* @__PURE__ */ F(Zg, { id: ul, children: /* @__PURE__ */ F(Qg, { ref: f }) })
  ] });
}, qg = (n, r, t) => {
  const e = t === 0 ? wt : t === 2 ? je : Ge, a = n.startDate.isBefore(r.startDate) ? r.startDate : n.startDate, o = n.endDate.isAfter(r.endDate) ? r.endDate : n.endDate;
  if (a.isSameOrAfter(o))
    return { x: 0, width: 0 };
  let i = 0, s = 0;
  if (t === 2) {
    const c = a.diff(r.startDate, "minute"), l = o.diff(a, "minute");
    i = (c / ze + 1) * e - e / 2, s = l / ze * e;
  } else {
    const c = a.diff(r.startDate, "day"), l = o.startOf("day").diff(a.startOf("day"), "day"), u = o.diff(o.clone().startOf("day"), "minute") > 0, d = l + (u ? 1 : 0);
    i = c * e, s = d * e;
  }
  return {
    x: Math.max(0, i),
    width: s
  };
}, Ug = (n, r, t, e, a, o) => {
  const i = n * Xe + dl, s = r.hour(), c = t.hour();
  let l, u, d, f;
  switch (o) {
    case 2: {
      l = z(e), u = z(a), d = z(r).hour(s).minute(0), f = z(t).hour(c).minute(0);
      break;
    }
    default: {
      l = z(e).hour(0).minute(0), u = z(a).hour(23).minute(59), d = r, f = t;
      break;
    }
  }
  return {
    ...qg(
      { startDate: l, endDate: u },
      { startDate: d, endDate: f },
      o
    ),
    y: i
  };
}, Xg = (n) => {
  if (!n)
    return "white";
  const r = [];
  for (let a = 1; a < 6; a += 2)
    r.push(parseInt(n.slice(a, a + 2), 16) / 255);
  const t = r.map(
    (a) => a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Kg = U.button`
  ${_n}
  height: ${fl}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: n }) => n.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, Jg = U.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Li = U.p`
  ${_n}
  ${as}
  display: inline;
  font-weight: ${({ bold: n }) => n ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, ey = U.p`
  ${_n}
  ${as}
`, ty = U.div`
  position: sticky;
  left: ${tt + 16}px;
  overflow: hidden;
`, ny = ({ row: n, data: r, zoom: t, onTileClick: e }) => {
  const { date: a } = Mn(), o = Xa(a, t), { y: i, x: s, width: c } = Ug(
    n,
    o.startDate,
    o.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: l } = nn();
  return /* @__PURE__ */ F(
    Kg,
    {
      style: {
        left: `${s}px`,
        top: `${i}px`,
        backgroundColor: `${r.bgColor ?? l.defaultTile}`,
        width: `${c}px`,
        color: Xg(r.bgColor ?? "")
      },
      onClick: () => e == null ? void 0 : e(r),
      children: /* @__PURE__ */ F(Jg, { children: /* @__PURE__ */ fe(ty, { children: [
        /* @__PURE__ */ F(Li, { bold: !0, children: r.title }),
        /* @__PURE__ */ F(Li, { children: r.subtitle }),
        /* @__PURE__ */ F(ey, { children: r.description })
      ] }) })
    }
  );
}, ry = ({ data: n, zoom: r, onTileClick: t }) => {
  const e = Ve(() => {
    let a = 0;
    return n.map((o, i) => (i > 0 && (a += Math.max(n[i - 1].data.length, 1)), o.data.map(
      (s, c) => s.map((l) => /* @__PURE__ */ F(
        ny,
        {
          row: c + a,
          data: l,
          zoom: r,
          onTileClick: t
        },
        l.id
      ))
    ))).flat(2);
  }, [n, t, r]);
  return /* @__PURE__ */ F(Ha, { children: e() });
}, ay = ry;
U.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: n }) => n ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
U.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
U.label`
  font-size: 14px;
`;
U.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
U.input`
  height: 18px;
  width: 18px;
`;
U.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
U.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const oy = U.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: n }) => n.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, iy = U.div`
  width: 100%;
`, sy = U.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: n }) => n.colors.tooltip};
`, cy = U.div``, Ai = U.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Wi = U.div`
  ${_n}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: n }) => n.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Fi = U.p`
  ${_n}
  margin-left: 4px;
  color: ${({ theme: n }) => n.colors.textSecondary};
`, ly = U.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: n }) => n.colors.warning};
`, uy = ({ tooltipData: n, zoom: r }) => {
  const { taken: t, free: e, over: a } = Sn(), { coords: o, disposition: i } = n, s = Ae(null);
  let c = At;
  switch (r) {
    case 0:
      c = At;
      break;
    case 1:
      c = Ge;
      break;
    case 2:
      c = je;
      break;
  }
  return Rr(() => {
    if (!s.current)
      return;
    const { width: l } = s.current.getBoundingClientRect();
    let u;
    switch (r) {
      case 2:
        u = l / 2 + c;
        break;
      default:
        u = l / 2 + c / 2;
        break;
    }
    s.current.style.left = `${o.x - u}px`, s.current.style.top = `${o.y + 8}px`;
  }, [o.x, c, i.overtime, o.y, r]), /* @__PURE__ */ fe(oy, { ref: s, children: [
    /* @__PURE__ */ F(iy, { children: /* @__PURE__ */ fe(cy, { children: [
      /* @__PURE__ */ fe(Ai, { children: [
        /* @__PURE__ */ F(Ue, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ fe(Wi, { children: [
          /* @__PURE__ */ F(Fi, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ fe(Ha, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ F(ly, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${a}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ fe(Ai, { children: [
        /* @__PURE__ */ F(Ue, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ F(Wi, { children: /* @__PURE__ */ F(Fi, { children: `${e}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ F(sy, {})
  ] });
}, dy = U.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: n }) => n.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, fy = U.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: n }) => n.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: n }) => n.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, py = U.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: n }) => n.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, hy = ({ toggleTheme: n }) => {
  const r = nn();
  return /* @__PURE__ */ fe(dy, { onClick: n, children: [
    /* @__PURE__ */ F(fy, {}),
    /* @__PURE__ */ F(py, { children: r.mode === "light" ? /* @__PURE__ */ F(Ue, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ F(Ue, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  wy as Scheduler
};
