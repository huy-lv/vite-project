"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperties(exports, _defineProperty({
  __esModule: {
    value: !0
  }
}, Symbol.toStringTag, {
  value: "Module"
}));
var we = require("react"),
  fr = require("@mui/material");
var Z = {
    exports: {}
  },
  D = {}; /**
          * @license React
          * react-jsx-runtime.production.min.js
          *
          * Copyright (c) Facebook, Inc. and its affiliates.
          *
          * This source code is licensed under the MIT license found in the
          * LICENSE file in the root directory of this source tree.
          */
var Oe;
function cr() {
  if (Oe) return D;
  Oe = 1;
  var U = we,
    P = Symbol["for"]("react.element"),
    V = Symbol["for"]("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    A = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function C(h, c, T) {
    var p,
      b = {},
      _ = null,
      W = null;
    T !== void 0 && (_ = "" + T), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (p in c) m.call(c, p) && !I.hasOwnProperty(p) && (b[p] = c[p]);
    if (h && h.defaultProps) for (p in c = h.defaultProps, c) b[p] === void 0 && (b[p] = c[p]);
    return {
      $$typeof: P,
      type: h,
      key: _,
      ref: W,
      props: b,
      _owner: A.current
    };
  }
  return D.Fragment = V, D.jsx = C, D.jsxs = C, D;
}
var F = {}; /**
            * @license React
            * react-jsx-runtime.development.js
            *
            * Copyright (c) Facebook, Inc. and its affiliates.
            *
            * This source code is licensed under the MIT license found in the
            * LICENSE file in the root directory of this source tree.
            */
var Se;
function dr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function () {
    var U = we,
      P = Symbol["for"]("react.element"),
      V = Symbol["for"]("react.portal"),
      m = Symbol["for"]("react.fragment"),
      A = Symbol["for"]("react.strict_mode"),
      I = Symbol["for"]("react.profiler"),
      C = Symbol["for"]("react.provider"),
      h = Symbol["for"]("react.context"),
      c = Symbol["for"]("react.forward_ref"),
      T = Symbol["for"]("react.suspense"),
      p = Symbol["for"]("react.suspense_list"),
      b = Symbol["for"]("react.memo"),
      _ = Symbol["for"]("react.lazy"),
      W = Symbol["for"]("react.offscreen"),
      Q = Symbol.iterator,
      Pe = "@@iterator";
    function Ce(e) {
      if (e === null || _typeof(e) != "object") return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var O = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame,
          o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function (i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1,
      ke = !1,
      De = !1,
      Fe = !1,
      Ae = !1,
      ee;
    ee = Symbol["for"]("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === I || Ae || e === A || e === T || e === p || Fe || e === W || xe || ke || De || _typeof(e) == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === b || e.$$typeof === C || e.$$typeof === h || e.$$typeof === c || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n) return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null) return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case m:
          return "Fragment";
        case V:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (_typeof(e) == "object") switch (e.$$typeof) {
        case h:
          var r = e;
          return re(r) + ".Consumer";
        case C:
          var t = e;
          return re(t._context) + ".Provider";
        case c:
          return We(e, e.render, "ForwardRef");
        case b:
          var n = e.displayName || null;
          return n !== null ? n : y(e.type) || "Memo";
        case _:
          {
            var o = e,
              u = o._payload,
              i = o._init;
            try {
              return y(i(u));
            } catch (_unused) {
              return null;
            }
          }
      }
      return null;
    }
    var E = Object.assign,
      j = 0,
      te,
      ne,
      ae,
      ie,
      oe,
      ue,
      se;
    function le() {}
    le.__reactDisabledLog = !0;
    function $e() {
      {
        if (j === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        j++;
      }
    }
    function Ye() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: te
            }),
            info: E({}, e, {
              value: ne
            }),
            warn: E({}, e, {
              value: ae
            }),
            error: E({}, e, {
              value: ie
            }),
            group: E({}, e, {
              value: oe
            }),
            groupCollapsed: E({}, e, {
              value: ue
            }),
            groupEnd: E({}, e, {
              value: se
            })
          });
        }
        j < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = O.ReactCurrentDispatcher,
      B;
    function $(e, r, t) {
      {
        if (B === void 0) try {
          throw Error();
        } catch (o) {
          var n = o.stack.trim().match(/\n( *(at )?)/);
          B = n && n[1] || "";
        }
        return "\n" + B + e;
      }
    }
    var q = !1,
      Y;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Le();
    }
    function fe(e, r) {
      if (!e || q) return "";
      {
        var t = Y.get(e);
        if (t !== void 0) return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = N.current, N.current = null, $e();
      try {
        if (r) {
          var i = function i() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function set() {
              throw Error();
            }
          }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split("\n"), d = n.stack.split("\n"), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l];) l--;
          for (; s >= 1 && l >= 0; s--, l--) if (a[s] !== d[l]) {
            if (s !== 1 || l !== 1) do if (s--, l--, l < 0 || a[s] !== d[l]) {
              var g = "\n" + a[s].replace(" at new ", " at ");
              return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, g), g;
            } while (s >= 1 && l >= 0);
            break;
          }
        }
      } finally {
        q = !1, N.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var w = e ? e.displayName || e.name : "",
        R = w ? $(w) : "";
      return typeof e == "function" && Y.set(e, R), R;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null) return "";
      if (typeof e == "function") return fe(e, Ue(e));
      if (typeof e == "string") return $(e);
      switch (e) {
        case T:
          return $("Suspense");
        case p:
          return $("SuspenseList");
      }
      if (_typeof(e) == "object") switch (e.$$typeof) {
        case c:
          return Me(e.render);
        case b:
          return L(e.type, r, t);
        case _:
          {
            var n = e,
              o = n._payload,
              u = n._init;
            try {
              return L(u(o), r, t);
            } catch (_unused2) {}
          }
      }
      return "";
    }
    var x = Object.prototype.hasOwnProperty,
      ce = {},
      de = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner,
          t = L(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else de.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, o) {
      {
        var u = Function.call.bind(x);
        for (var i in e) if (u(e, i)) {
          var a = void 0;
          try {
            if (typeof e[i] != "function") {
              var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _typeof(e[i]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw d.name = "Invariant Violation", d;
            }
            a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (s) {
            a = s;
          }
          a && !(a instanceof Error) && (M(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, _typeof(a)), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(o), f("Failed %s type: %s", t, a.message), M(null));
        }
      }
    }
    var Ne = Array.isArray;
    function J(e) {
      return Ne(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag,
          t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch (_unused3) {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e)) return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ve(e);
    }
    var k = O.ReactCurrentOwner,
      Je = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      },
      ge,
      ye,
      K;
    K = {};
    function Ke(e) {
      if (x.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (x.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var t = y(k.current.type);
        K[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(k.current.type), e.ref), K[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function t() {
          ge || (ge = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function t() {
          ye || (ye = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function Ze(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: P,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, o) {
      {
        var u,
          i = {},
          a = null,
          d = null;
        t !== void 0 && (pe(t), a = "" + t), Ge(r) && (pe(r.key), a = "" + r.key), Ke(r) && (d = r.ref, ze(r, o));
        for (u in r) x.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s) i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, l), d && He(i, l);
        }
        return Ze(e, a, d, o, n, k.current, i);
      }
    }
    var G = O.ReactCurrentOwner,
      be = O.ReactDebugCurrentFrame;
    function S(e) {
      if (e) {
        var r = e._owner,
          t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else be.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return _typeof(e) == "object" && e !== null && e.$$typeof === P;
    }
    function he() {
      {
        if (G.current) {
          var e = y(G.current.type);
          if (e) return "\n\nCheck the render method of `" + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      return "";
    }
    var _e = {};
    function rr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = "\n\nCheck the top-level render call using <" + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null) return;
        e._store.validated = !0;
        var t = rr(r);
        if (_e[t]) return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), S(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), S(null);
      }
    }
    function Re(e, r) {
      {
        if (_typeof(e) != "object") return;
        if (J(e)) for (var t = 0; t < e.length; t++) {
          var n = e[t];
          X(n) && Ee(n, r);
        } else if (X(e)) e._store && (e._store.validated = !0);else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries) for (var u = o.call(e), i; !(i = u.next()).done;) X(i.value) && Ee(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string") return;
        var t;
        if (typeof r == "function") t = r.propTypes;else if (_typeof(r) == "object" && (r.$$typeof === c || r.$$typeof === b)) t = r.propTypes;else return;
        if (t) {
          var n = y(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = y(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            S(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), S(null);
            break;
          }
        }
        e.ref !== null && (S(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    var me = {};
    function Te(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || _typeof(e) == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = er();
          d ? a += d : a += he();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === P ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = _typeof(e), f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Qe(e, r, t, o, u);
        if (l == null) return l;
        if (i) {
          var g = r.children;
          if (g !== void 0) if (n) {
            if (J(g)) {
              for (var w = 0; w < g.length; w++) Re(g[w], e);
              Object.freeze && Object.freeze(g);
            } else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          } else Re(g, e);
        }
        if (x.call(r, "key")) {
          var R = y(e),
            v = Object.keys(r).filter(function (lr) {
              return lr !== "key";
            }),
            H = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!me[R + H]) {
            var sr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", H, R, sr, R), me[R + H] = !0;
          }
        }
        return e === m ? nr(l) : tr(l), l;
      }
    }
    function ar(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Te(e, r, t, !1);
    }
    var or = ir,
      ur = ar;
    F.Fragment = m, F.jsx = or, F.jsxs = ur;
  }()), F;
}
process.env.NODE_ENV === "production" ? Z.exports = cr() : Z.exports = dr();
var vr = Z.exports;
function pr() {
  return vr.jsx(fr.Button, {
    variant: "contained",
    children: "Hello world"
  });
}
exports["default"] = pr;