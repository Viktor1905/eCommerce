(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === 'childList')
        for (const d of u.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = a(s);
    fetch(s.href, u);
  }
})();
var db = (t) => {
    throw TypeError(t);
  },
  vh = (t, n, a) => n.has(t) || db('Cannot ' + a),
  q = (t, n, a) => (vh(t, n, 'read from private field'), a ? a.call(t) : n.get(t)),
  Je = (t, n, a) =>
    n.has(t)
      ? db('Cannot add the same private member more than once')
      : n instanceof WeakSet
        ? n.add(t)
        : n.set(t, a),
  Ae = (t, n, a, i) => (vh(t, n, 'write to private field'), n.set(t, a), a),
  Jt = (t, n, a) => (vh(t, n, 'access private method'), a),
  eh = (t, n, a, i) => ({
    set _(s) {
      Ae(t, n, s);
    },
    get _() {
      return q(t, n, i);
    },
  });
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const u of s.addedNodes) u.tagName === 'LINK' && u.rel === 'modulepreload' && a(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function yx(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var Sy = { exports: {} },
  hs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _y;
function vx() {
  if (_y) return hs;
  _y = 1;
  var t = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.fragment');
  function a(i, s, u) {
    var d = null;
    if ((u !== void 0 && (d = '' + u), s.key !== void 0 && (d = '' + s.key), 'key' in s)) {
      u = {};
      for (var h in s) h !== 'key' && (u[h] = s[h]);
    } else u = s;
    return (s = u.ref), { $$typeof: t, type: i, key: d, ref: s !== void 0 ? s : null, props: u };
  }
  return (hs.Fragment = n), (hs.jsx = a), (hs.jsxs = a), hs;
}
var Cy;
function bx() {
  return Cy || ((Cy = 1), (Sy.exports = vx())), Sy.exports;
}
var k = bx(),
  Ny = { exports: {} },
  Fe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oy;
function wx() {
  if (Oy) return Fe;
  Oy = 1;
  var t = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    b = Symbol.iterator;
  function v(C) {
    return C === null || typeof C != 'object'
      ? null
      : ((C = (b && C[b]) || C['@@iterator']), typeof C == 'function' ? C : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    N = {};
  function D(C, Y, se) {
    (this.props = C), (this.context = Y), (this.refs = N), (this.updater = se || E);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (C, Y) {
      if (typeof C != 'object' && typeof C != 'function' && C != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, C, Y, 'setState');
    }),
    (D.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, 'forceUpdate');
    });
  function j() {}
  j.prototype = D.prototype;
  function _(C, Y, se) {
    (this.props = C), (this.context = Y), (this.refs = N), (this.updater = se || E);
  }
  var M = (_.prototype = new j());
  (M.constructor = _), x(M, D.prototype), (M.isPureReactComponent = !0);
  var V = Array.isArray,
    A = { H: null, A: null, T: null, S: null, V: null },
    ee = Object.prototype.hasOwnProperty;
  function te(C, Y, se, re, ve, We) {
    return (
      (se = We.ref), { $$typeof: t, type: C, key: Y, ref: se !== void 0 ? se : null, props: We }
    );
  }
  function H(C, Y) {
    return te(C.type, Y, void 0, void 0, void 0, C.props);
  }
  function me(C) {
    return typeof C == 'object' && C !== null && C.$$typeof === t;
  }
  function Pe(C) {
    var Y = { '=': '=0', ':': '=2' };
    return (
      '$' +
      C.replace(/[=:]/g, function (se) {
        return Y[se];
      })
    );
  }
  var we = /\/+/g;
  function ce(C, Y) {
    return typeof C == 'object' && C !== null && C.key != null ? Pe('' + C.key) : Y.toString(36);
  }
  function be() {}
  function Ee(C) {
    switch (C.status) {
      case 'fulfilled':
        return C.value;
      case 'rejected':
        throw C.reason;
      default:
        switch (
          (typeof C.status == 'string'
            ? C.then(be, be)
            : ((C.status = 'pending'),
              C.then(
                function (Y) {
                  C.status === 'pending' && ((C.status = 'fulfilled'), (C.value = Y));
                },
                function (Y) {
                  C.status === 'pending' && ((C.status = 'rejected'), (C.reason = Y));
                }
              )),
          C.status)
        ) {
          case 'fulfilled':
            return C.value;
          case 'rejected':
            throw C.reason;
        }
    }
    throw C;
  }
  function Ne(C, Y, se, re, ve) {
    var We = typeof C;
    (We === 'undefined' || We === 'boolean') && (C = null);
    var ke = !1;
    if (C === null) ke = !0;
    else
      switch (We) {
        case 'bigint':
        case 'string':
        case 'number':
          ke = !0;
          break;
        case 'object':
          switch (C.$$typeof) {
            case t:
            case n:
              ke = !0;
              break;
            case g:
              return (ke = C._init), Ne(ke(C._payload), Y, se, re, ve);
          }
      }
    if (ke)
      return (
        (ve = ve(C)),
        (ke = re === '' ? '.' + ce(C, 0) : re),
        V(ve)
          ? ((se = ''),
            ke != null && (se = ke.replace(we, '$&/') + '/'),
            Ne(ve, Y, se, '', function (rn) {
              return rn;
            }))
          : ve != null &&
            (me(ve) &&
              (ve = H(
                ve,
                se +
                  (ve.key == null || (C && C.key === ve.key)
                    ? ''
                    : ('' + ve.key).replace(we, '$&/') + '/') +
                  ke
              )),
            Y.push(ve)),
        1
      );
    ke = 0;
    var Tt = re === '' ? '.' : re + ':';
    if (V(C))
      for (var rt = 0; rt < C.length; rt++)
        (re = C[rt]), (We = Tt + ce(re, rt)), (ke += Ne(re, Y, se, We, ve));
    else if (((rt = v(C)), typeof rt == 'function'))
      for (C = rt.call(C), rt = 0; !(re = C.next()).done; )
        (re = re.value), (We = Tt + ce(re, rt++)), (ke += Ne(re, Y, se, We, ve));
    else if (We === 'object') {
      if (typeof C.then == 'function') return Ne(Ee(C), Y, se, re, ve);
      throw (
        ((Y = String(C)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Y === '[object Object]' ? 'object with keys {' + Object.keys(C).join(', ') + '}' : Y) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return ke;
  }
  function z(C, Y, se) {
    if (C == null) return C;
    var re = [],
      ve = 0;
    return (
      Ne(C, re, '', '', function (We) {
        return Y.call(se, We, ve++);
      }),
      re
    );
  }
  function G(C) {
    if (C._status === -1) {
      var Y = C._result;
      (Y = Y()),
        Y.then(
          function (se) {
            (C._status === 0 || C._status === -1) && ((C._status = 1), (C._result = se));
          },
          function (se) {
            (C._status === 0 || C._status === -1) && ((C._status = 2), (C._result = se));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = Y));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var oe =
    typeof reportError == 'function'
      ? reportError
      : function (C) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var Y = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof C == 'object' && C !== null && typeof C.message == 'string'
                  ? String(C.message)
                  : String(C),
              error: C,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', C);
            return;
          }
          console.error(C);
        };
  function Me() {}
  return (
    (Fe.Children = {
      map: z,
      forEach: function (C, Y, se) {
        z(
          C,
          function () {
            Y.apply(this, arguments);
          },
          se
        );
      },
      count: function (C) {
        var Y = 0;
        return (
          z(C, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (C) {
        return (
          z(C, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (C) {
        if (!me(C))
          throw Error('React.Children.only expected to receive a single React element child.');
        return C;
      },
    }),
    (Fe.Component = D),
    (Fe.Fragment = a),
    (Fe.Profiler = s),
    (Fe.PureComponent = _),
    (Fe.StrictMode = i),
    (Fe.Suspense = p),
    (Fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A),
    (Fe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (C) {
        return A.H.useMemoCache(C);
      },
    }),
    (Fe.cache = function (C) {
      return function () {
        return C.apply(null, arguments);
      };
    }),
    (Fe.cloneElement = function (C, Y, se) {
      if (C == null) throw Error('The argument must be a React element, but you passed ' + C + '.');
      var re = x({}, C.props),
        ve = C.key,
        We = void 0;
      if (Y != null)
        for (ke in (Y.ref !== void 0 && (We = void 0), Y.key !== void 0 && (ve = '' + Y.key), Y))
          !ee.call(Y, ke) ||
            ke === 'key' ||
            ke === '__self' ||
            ke === '__source' ||
            (ke === 'ref' && Y.ref === void 0) ||
            (re[ke] = Y[ke]);
      var ke = arguments.length - 2;
      if (ke === 1) re.children = se;
      else if (1 < ke) {
        for (var Tt = Array(ke), rt = 0; rt < ke; rt++) Tt[rt] = arguments[rt + 2];
        re.children = Tt;
      }
      return te(C.type, ve, void 0, void 0, We, re);
    }),
    (Fe.createContext = function (C) {
      return (
        (C = {
          $$typeof: d,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (C.Provider = C),
        (C.Consumer = { $$typeof: u, _context: C }),
        C
      );
    }),
    (Fe.createElement = function (C, Y, se) {
      var re,
        ve = {},
        We = null;
      if (Y != null)
        for (re in (Y.key !== void 0 && (We = '' + Y.key), Y))
          ee.call(Y, re) &&
            re !== 'key' &&
            re !== '__self' &&
            re !== '__source' &&
            (ve[re] = Y[re]);
      var ke = arguments.length - 2;
      if (ke === 1) ve.children = se;
      else if (1 < ke) {
        for (var Tt = Array(ke), rt = 0; rt < ke; rt++) Tt[rt] = arguments[rt + 2];
        ve.children = Tt;
      }
      if (C && C.defaultProps)
        for (re in ((ke = C.defaultProps), ke)) ve[re] === void 0 && (ve[re] = ke[re]);
      return te(C, We, void 0, void 0, null, ve);
    }),
    (Fe.createRef = function () {
      return { current: null };
    }),
    (Fe.forwardRef = function (C) {
      return { $$typeof: h, render: C };
    }),
    (Fe.isValidElement = me),
    (Fe.lazy = function (C) {
      return { $$typeof: g, _payload: { _status: -1, _result: C }, _init: G };
    }),
    (Fe.memo = function (C, Y) {
      return { $$typeof: m, type: C, compare: Y === void 0 ? null : Y };
    }),
    (Fe.startTransition = function (C) {
      var Y = A.T,
        se = {};
      A.T = se;
      try {
        var re = C(),
          ve = A.S;
        ve !== null && ve(se, re),
          typeof re == 'object' && re !== null && typeof re.then == 'function' && re.then(Me, oe);
      } catch (We) {
        oe(We);
      } finally {
        A.T = Y;
      }
    }),
    (Fe.unstable_useCacheRefresh = function () {
      return A.H.useCacheRefresh();
    }),
    (Fe.use = function (C) {
      return A.H.use(C);
    }),
    (Fe.useActionState = function (C, Y, se) {
      return A.H.useActionState(C, Y, se);
    }),
    (Fe.useCallback = function (C, Y) {
      return A.H.useCallback(C, Y);
    }),
    (Fe.useContext = function (C) {
      return A.H.useContext(C);
    }),
    (Fe.useDebugValue = function () {}),
    (Fe.useDeferredValue = function (C, Y) {
      return A.H.useDeferredValue(C, Y);
    }),
    (Fe.useEffect = function (C, Y, se) {
      var re = A.H;
      if (typeof se == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return re.useEffect(C, Y);
    }),
    (Fe.useId = function () {
      return A.H.useId();
    }),
    (Fe.useImperativeHandle = function (C, Y, se) {
      return A.H.useImperativeHandle(C, Y, se);
    }),
    (Fe.useInsertionEffect = function (C, Y) {
      return A.H.useInsertionEffect(C, Y);
    }),
    (Fe.useLayoutEffect = function (C, Y) {
      return A.H.useLayoutEffect(C, Y);
    }),
    (Fe.useMemo = function (C, Y) {
      return A.H.useMemo(C, Y);
    }),
    (Fe.useOptimistic = function (C, Y) {
      return A.H.useOptimistic(C, Y);
    }),
    (Fe.useReducer = function (C, Y, se) {
      return A.H.useReducer(C, Y, se);
    }),
    (Fe.useRef = function (C) {
      return A.H.useRef(C);
    }),
    (Fe.useState = function (C) {
      return A.H.useState(C);
    }),
    (Fe.useSyncExternalStore = function (C, Y, se) {
      return A.H.useSyncExternalStore(C, Y, se);
    }),
    (Fe.useTransition = function () {
      return A.H.useTransition();
    }),
    (Fe.version = '19.1.0'),
    Fe
  );
}
var Ey;
function hc() {
  return Ey || ((Ey = 1), (Ny.exports = wx())), Ny.exports;
}
var T = hc();
const Q = yx(T);
var Af = { exports: {} },
  ps = {},
  Dy = { exports: {} },
  Py = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var My;
function kx() {
  return (
    My ||
      ((My = 1),
      (function (t) {
        function n(z, G) {
          var oe = z.length;
          z.push(G);
          e: for (; 0 < oe; ) {
            var Me = (oe - 1) >>> 1,
              C = z[Me];
            if (0 < s(C, G)) (z[Me] = G), (z[oe] = C), (oe = Me);
            else break e;
          }
        }
        function a(z) {
          return z.length === 0 ? null : z[0];
        }
        function i(z) {
          if (z.length === 0) return null;
          var G = z[0],
            oe = z.pop();
          if (oe !== G) {
            z[0] = oe;
            e: for (var Me = 0, C = z.length, Y = C >>> 1; Me < Y; ) {
              var se = 2 * (Me + 1) - 1,
                re = z[se],
                ve = se + 1,
                We = z[ve];
              if (0 > s(re, oe))
                ve < C && 0 > s(We, re)
                  ? ((z[Me] = We), (z[ve] = oe), (Me = ve))
                  : ((z[Me] = re), (z[se] = oe), (Me = se));
              else if (ve < C && 0 > s(We, oe)) (z[Me] = We), (z[ve] = oe), (Me = ve);
              else break e;
            }
          }
          return G;
        }
        function s(z, G) {
          var oe = z.sortIndex - G.sortIndex;
          return oe !== 0 ? oe : z.id - G.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            h = d.now();
          t.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          m = [],
          g = 1,
          b = null,
          v = 3,
          E = !1,
          x = !1,
          N = !1,
          D = !1,
          j = typeof setTimeout == 'function' ? setTimeout : null,
          _ = typeof clearTimeout == 'function' ? clearTimeout : null,
          M = typeof setImmediate < 'u' ? setImmediate : null;
        function V(z) {
          for (var G = a(m); G !== null; ) {
            if (G.callback === null) i(m);
            else if (G.startTime <= z) i(m), (G.sortIndex = G.expirationTime), n(p, G);
            else break;
            G = a(m);
          }
        }
        function A(z) {
          if (((N = !1), V(z), !x))
            if (a(p) !== null) (x = !0), ee || ((ee = !0), ce());
            else {
              var G = a(m);
              G !== null && Ne(A, G.startTime - z);
            }
        }
        var ee = !1,
          te = -1,
          H = 5,
          me = -1;
        function Pe() {
          return D ? !0 : !(t.unstable_now() - me < H);
        }
        function we() {
          if (((D = !1), ee)) {
            var z = t.unstable_now();
            me = z;
            var G = !0;
            try {
              e: {
                (x = !1), N && ((N = !1), _(te), (te = -1)), (E = !0);
                var oe = v;
                try {
                  t: {
                    for (V(z), b = a(p); b !== null && !(b.expirationTime > z && Pe()); ) {
                      var Me = b.callback;
                      if (typeof Me == 'function') {
                        (b.callback = null), (v = b.priorityLevel);
                        var C = Me(b.expirationTime <= z);
                        if (((z = t.unstable_now()), typeof C == 'function')) {
                          (b.callback = C), V(z), (G = !0);
                          break t;
                        }
                        b === a(p) && i(p), V(z);
                      } else i(p);
                      b = a(p);
                    }
                    if (b !== null) G = !0;
                    else {
                      var Y = a(m);
                      Y !== null && Ne(A, Y.startTime - z), (G = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (v = oe), (E = !1);
                }
                G = void 0;
              }
            } finally {
              G ? ce() : (ee = !1);
            }
          }
        }
        var ce;
        if (typeof M == 'function')
          ce = function () {
            M(we);
          };
        else if (typeof MessageChannel < 'u') {
          var be = new MessageChannel(),
            Ee = be.port2;
          (be.port1.onmessage = we),
            (ce = function () {
              Ee.postMessage(null);
            });
        } else
          ce = function () {
            j(we, 0);
          };
        function Ne(z, G) {
          te = j(function () {
            z(t.unstable_now());
          }, G);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (t.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (H = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (t.unstable_next = function (z) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = v;
            }
            var oe = v;
            v = G;
            try {
              return z();
            } finally {
              v = oe;
            }
          }),
          (t.unstable_requestPaint = function () {
            D = !0;
          }),
          (t.unstable_runWithPriority = function (z, G) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var oe = v;
            v = z;
            try {
              return G();
            } finally {
              v = oe;
            }
          }),
          (t.unstable_scheduleCallback = function (z, G, oe) {
            var Me = t.unstable_now();
            switch (
              (typeof oe == 'object' && oe !== null
                ? ((oe = oe.delay), (oe = typeof oe == 'number' && 0 < oe ? Me + oe : Me))
                : (oe = Me),
              z)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = oe + C),
              (z = {
                id: g++,
                callback: G,
                priorityLevel: z,
                startTime: oe,
                expirationTime: C,
                sortIndex: -1,
              }),
              oe > Me
                ? ((z.sortIndex = oe),
                  n(m, z),
                  a(p) === null &&
                    z === a(m) &&
                    (N ? (_(te), (te = -1)) : (N = !0), Ne(A, oe - Me)))
                : ((z.sortIndex = C), n(p, z), x || E || ((x = !0), ee || ((ee = !0), ce()))),
              z
            );
          }),
          (t.unstable_shouldYield = Pe),
          (t.unstable_wrapCallback = function (z) {
            var G = v;
            return function () {
              var oe = v;
              v = G;
              try {
                return z.apply(this, arguments);
              } finally {
                v = oe;
              }
            };
          });
      })(Py)),
    Py
  );
}
var Ty;
function xx() {
  return Ty || ((Ty = 1), (Dy.exports = kx())), Dy.exports;
}
var $f = { exports: {} },
  Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ry;
function Sx() {
  if (Ry) return Zt;
  Ry = 1;
  var t = hc();
  function n(p) {
    var m = 'https://react.dev/errors/' + p;
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++) m += '&args[]=' + encodeURIComponent(arguments[g]);
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for('react.portal');
  function u(p, m, g) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : '' + b,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var d = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Zt.createPortal = function (p, m) {
      var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(n(299));
      return u(p, m, null, g);
    }),
    (Zt.flushSync = function (p) {
      var m = d.T,
        g = i.p;
      try {
        if (((d.T = null), (i.p = 2), p)) return p();
      } finally {
        (d.T = m), (i.p = g), i.d.f();
      }
    }),
    (Zt.preconnect = function (p, m) {
      typeof p == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        i.d.C(p, m));
    }),
    (Zt.prefetchDNS = function (p) {
      typeof p == 'string' && i.d.D(p);
    }),
    (Zt.preinit = function (p, m) {
      if (typeof p == 'string' && m && typeof m.as == 'string') {
        var g = m.as,
          b = h(g, m.crossOrigin),
          v = typeof m.integrity == 'string' ? m.integrity : void 0,
          E = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        g === 'style'
          ? i.d.S(p, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: v,
              fetchPriority: E,
            })
          : g === 'script' &&
            i.d.X(p, {
              crossOrigin: b,
              integrity: v,
              fetchPriority: E,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (Zt.preinitModule = function (p, m) {
      if (typeof p == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var g = h(m.as, m.crossOrigin);
            i.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(p);
    }),
    (Zt.preload = function (p, m) {
      if (typeof p == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var g = m.as,
          b = h(g, m.crossOrigin);
        i.d.L(p, g, {
          crossOrigin: b,
          integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          type: typeof m.type == 'string' ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
          media: typeof m.media == 'string' ? m.media : void 0,
        });
      }
    }),
    (Zt.preloadModule = function (p, m) {
      if (typeof p == 'string')
        if (m) {
          var g = h(m.as, m.crossOrigin);
          i.d.m(p, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (Zt.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (Zt.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Zt.useFormState = function (p, m, g) {
      return d.H.useFormState(p, m, g);
    }),
    (Zt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Zt.version = '19.1.0'),
    Zt
  );
}
var jy;
function _x() {
  if (jy) return $f.exports;
  jy = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), ($f.exports = Sx()), $f.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ly;
function Cx() {
  if (Ly) return ps;
  Ly = 1;
  var t = xx(),
    n = hc(),
    a = _x();
  function i(e) {
    var r = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      r += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++) r += '&args[]=' + encodeURIComponent(arguments[o]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      r +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var r = e,
      o = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do (r = e), (r.flags & 4098) !== 0 && (o = r.return), (e = r.return);
      while (e);
    }
    return r.tag === 3 ? o : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if ((r === null && ((e = e.alternate), e !== null && (r = e.memoizedState)), r !== null))
        return r.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e) throw Error(i(188));
  }
  function p(e) {
    var r = e.alternate;
    if (!r) {
      if (((r = u(e)), r === null)) throw Error(i(188));
      return r !== e ? null : e;
    }
    for (var o = e, l = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((l = c.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === o) return h(c), e;
          if (f === l) return h(c), r;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== l.return) (o = c), (l = f);
      else {
        for (var y = !1, w = c.child; w; ) {
          if (w === o) {
            (y = !0), (o = c), (l = f);
            break;
          }
          if (w === l) {
            (y = !0), (l = c), (o = f);
            break;
          }
          w = w.sibling;
        }
        if (!y) {
          for (w = f.child; w; ) {
            if (w === o) {
              (y = !0), (o = f), (l = c);
              break;
            }
            if (w === l) {
              (y = !0), (l = f), (o = c);
              break;
            }
            w = w.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (o.alternate !== l) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? e : r;
  }
  function m(e) {
    var r = e.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((r = m(e)), r !== null)) return r;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for('react.element'),
    v = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.portal'),
    x = Symbol.for('react.fragment'),
    N = Symbol.for('react.strict_mode'),
    D = Symbol.for('react.profiler'),
    j = Symbol.for('react.provider'),
    _ = Symbol.for('react.consumer'),
    M = Symbol.for('react.context'),
    V = Symbol.for('react.forward_ref'),
    A = Symbol.for('react.suspense'),
    ee = Symbol.for('react.suspense_list'),
    te = Symbol.for('react.memo'),
    H = Symbol.for('react.lazy'),
    me = Symbol.for('react.activity'),
    Pe = Symbol.for('react.memo_cache_sentinel'),
    we = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (we && e[we]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var be = Symbol.for('react.client.reference');
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === be ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case x:
        return 'Fragment';
      case D:
        return 'Profiler';
      case N:
        return 'StrictMode';
      case A:
        return 'Suspense';
      case ee:
        return 'SuspenseList';
      case me:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case E:
          return 'Portal';
        case M:
          return (e.displayName || 'Context') + '.Provider';
        case _:
          return (e._context.displayName || 'Context') + '.Consumer';
        case V:
          var r = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = r.displayName || r.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case te:
          return (r = e.displayName || null), r !== null ? r : Ee(e.type) || 'Memo';
        case H:
          (r = e._payload), (e = e._init);
          try {
            return Ee(e(r));
          } catch {}
      }
    return null;
  }
  var Ne = Array.isArray,
    z = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    oe = { pending: !1, data: null, method: null, action: null },
    Me = [],
    C = -1;
  function Y(e) {
    return { current: e };
  }
  function se(e) {
    0 > C || ((e.current = Me[C]), (Me[C] = null), C--);
  }
  function re(e, r) {
    C++, (Me[C] = e.current), (e.current = r);
  }
  var ve = Y(null),
    We = Y(null),
    ke = Y(null),
    Tt = Y(null);
  function rt(e, r) {
    switch ((re(ke, r), re(We, e), re(ve, null), r.nodeType)) {
      case 9:
      case 11:
        e = (e = r.documentElement) && (e = e.namespaceURI) ? Xg(e) : 0;
        break;
      default:
        if (((e = r.tagName), (r = r.namespaceURI))) (r = Xg(r)), (e = Jg(r, e));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    se(ve), re(ve, e);
  }
  function rn() {
    se(ve), se(We), se(ke);
  }
  function Vr(e) {
    e.memoizedState !== null && re(Tt, e);
    var r = ve.current,
      o = Jg(r, e.type);
    r !== o && (re(We, e), re(ve, o));
  }
  function Zn(e) {
    We.current === e && (se(ve), se(We)), Tt.current === e && (se(Tt), (ls._currentValue = oe));
  }
  var Br = Object.prototype.hasOwnProperty,
    Sa = t.unstable_scheduleCallback,
    Ur = t.unstable_cancelCallback,
    yo = t.unstable_shouldYield,
    oi = t.unstable_requestPaint,
    Vt = t.unstable_now,
    vo = t.unstable_getCurrentPriorityLevel,
    si = t.unstable_ImmediatePriority,
    _a = t.unstable_UserBlockingPriority,
    O = t.unstable_NormalPriority,
    I = t.unstable_LowPriority,
    B = t.unstable_IdlePriority,
    de = t.log,
    ae = t.unstable_setDisableYieldValue,
    J = null,
    ie = null;
  function je(e) {
    if ((typeof de == 'function' && ae(e), ie && typeof ie.setStrictMode == 'function'))
      try {
        ie.setStrictMode(J, e);
      } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : Ca,
    St = Math.log,
    li = Math.LN2;
  function Ca(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((St(e) / li) | 0)) | 0;
  }
  var Re = 256,
    lt = 4194304;
  function Ve(e) {
    var r = e & 42;
    if (r !== 0) return r;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Kt(e, r, o) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      f = e.suspendedLanes,
      y = e.pingedLanes;
    e = e.warmLanes;
    var w = l & 134217727;
    return (
      w !== 0
        ? ((l = w & ~f),
          l !== 0
            ? (c = Ve(l))
            : ((y &= w), y !== 0 ? (c = Ve(y)) : o || ((o = w & ~e), o !== 0 && (c = Ve(o)))))
        : ((w = l & ~f),
          w !== 0
            ? (c = Ve(w))
            : y !== 0
              ? (c = Ve(y))
              : o || ((o = l & ~e), o !== 0 && (c = Ve(o)))),
      c === 0
        ? 0
        : r !== 0 &&
            r !== c &&
            (r & f) === 0 &&
            ((f = c & -c), (o = r & -r), f >= o || (f === 32 && (o & 4194048) !== 0))
          ? r
          : c
    );
  }
  function _t(e, r) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & r) === 0;
  }
  function ui(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ot() {
    var e = Re;
    return (Re <<= 1), (Re & 4194048) === 0 && (Re = 256), e;
  }
  function dn() {
    var e = lt;
    return (lt <<= 1), (lt & 62914560) === 0 && (lt = 4194304), e;
  }
  function Ke(e) {
    for (var r = [], o = 0; 31 > o; o++) r.push(e);
    return r;
  }
  function Na(e, r) {
    (e.pendingLanes |= r),
      r !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Nc(e, r, o, l, c, f) {
    var y = e.pendingLanes;
    (e.pendingLanes = o),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= o),
      (e.entangledLanes &= o),
      (e.errorRecoveryDisabledLanes &= o),
      (e.shellSuspendCounter = 0);
    var w = e.entanglements,
      S = e.expirationTimes,
      F = e.hiddenUpdates;
    for (o = y & ~o; 0 < o; ) {
      var U = 31 - Ze(o),
        K = 1 << U;
      (w[U] = 0), (S[U] = -1);
      var $ = F[U];
      if ($ !== null)
        for (F[U] = null, U = 0; U < $.length; U++) {
          var W = $[U];
          W !== null && (W.lane &= -536870913);
        }
      o &= ~K;
    }
    l !== 0 && yl(e, l, 0),
      f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~r));
  }
  function yl(e, r, o) {
    (e.pendingLanes |= r), (e.suspendedLanes &= ~r);
    var l = 31 - Ze(r);
    (e.entangledLanes |= r), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (o & 4194090));
  }
  function ci(e, r) {
    var o = (e.entangledLanes |= r);
    for (e = e.entanglements; o; ) {
      var l = 31 - Ze(o),
        c = 1 << l;
      (c & r) | (e[l] & r) && (e[l] |= r), (o &= ~c);
    }
  }
  function Oa(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Oc(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function $h() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : yy(e.type));
  }
  function ow(e, r) {
    var o = G.p;
    try {
      return (G.p = e), r();
    } finally {
      G.p = o;
    }
  }
  var Zr = Math.random().toString(36).slice(2),
    Bt = '__reactFiber$' + Zr,
    an = '__reactProps$' + Zr,
    di = '__reactContainer$' + Zr,
    Ec = '__reactEvents$' + Zr,
    sw = '__reactListeners$' + Zr,
    lw = '__reactHandles$' + Zr,
    Ih = '__reactResources$' + Zr,
    bo = '__reactMarker$' + Zr;
  function Dc(e) {
    delete e[Bt], delete e[an], delete e[Ec], delete e[sw], delete e[lw];
  }
  function fi(e) {
    var r = e[Bt];
    if (r) return r;
    for (var o = e.parentNode; o; ) {
      if ((r = o[di] || o[Bt])) {
        if (((o = r.alternate), r.child !== null || (o !== null && o.child !== null)))
          for (e = ny(e); e !== null; ) {
            if ((o = e[Bt])) return o;
            e = ny(e);
          }
        return r;
      }
      (e = o), (o = e.parentNode);
    }
    return null;
  }
  function hi(e) {
    if ((e = e[Bt] || e[di])) {
      var r = e.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3) return e;
    }
    return null;
  }
  function wo(e) {
    var r = e.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return e.stateNode;
    throw Error(i(33));
  }
  function pi(e) {
    var r = e[Ih];
    return r || (r = e[Ih] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), r;
  }
  function Rt(e) {
    e[bo] = !0;
  }
  var Wh = new Set(),
    zh = {};
  function Ea(e, r) {
    mi(e, r), mi(e + 'Capture', r);
  }
  function mi(e, r) {
    for (zh[e] = r, e = 0; e < r.length; e++) Wh.add(r[e]);
  }
  var uw = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Vh = {},
    Bh = {};
  function cw(e) {
    return Br.call(Bh, e)
      ? !0
      : Br.call(Vh, e)
        ? !1
        : uw.test(e)
          ? (Bh[e] = !0)
          : ((Vh[e] = !0), !1);
  }
  function vl(e, r, o) {
    if (cw(r))
      if (o === null) e.removeAttribute(r);
      else {
        switch (typeof o) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(r);
            return;
          case 'boolean':
            var l = r.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(r);
              return;
            }
        }
        e.setAttribute(r, '' + o);
      }
  }
  function bl(e, r, o) {
    if (o === null) e.removeAttribute(r);
    else {
      switch (typeof o) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(r);
          return;
      }
      e.setAttribute(r, '' + o);
    }
  }
  function cr(e, r, o, l) {
    if (l === null) e.removeAttribute(o);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(o);
          return;
      }
      e.setAttributeNS(r, o, '' + l);
    }
  }
  var Pc, Uh;
  function gi(e) {
    if (Pc === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        (Pc = (r && r[1]) || ''),
          (Uh =
            -1 <
            o.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < o.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Pc +
      e +
      Uh
    );
  }
  var Mc = !1;
  function Tc(e, r) {
    if (!e || Mc) return '';
    Mc = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (W) {
                  var $ = W;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (W) {
                  $ = W;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                $ = W;
              }
              (K = e()) && typeof K.catch == 'function' && K.catch(function () {});
            }
          } catch (W) {
            if (W && $ && typeof W.stack == 'string') return [W.stack, $.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var f = l.DetermineComponentFrameRoot(),
        y = f[0],
        w = f[1];
      if (y && w) {
        var S = y.split(`
`),
          F = w.split(`
`);
        for (c = l = 0; l < S.length && !S[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; c < F.length && !F[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (l === S.length || c === F.length)
          for (l = S.length - 1, c = F.length - 1; 1 <= l && 0 <= c && S[l] !== F[c]; ) c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (S[l] !== F[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || S[l] !== F[c])) {
                  var U =
                    `
` + S[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      U.includes('<anonymous>') &&
                      (U = U.replace('<anonymous>', e.displayName)),
                    U
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (Mc = !1), (Error.prepareStackTrace = o);
    }
    return (o = e ? e.displayName || e.name : '') ? gi(o) : '';
  }
  function dw(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return gi(e.type);
      case 16:
        return gi('Lazy');
      case 13:
        return gi('Suspense');
      case 19:
        return gi('SuspenseList');
      case 0:
      case 15:
        return Tc(e.type, !1);
      case 11:
        return Tc(e.type.render, !1);
      case 1:
        return Tc(e.type, !0);
      case 31:
        return gi('Activity');
      default:
        return '';
    }
  }
  function Zh(e) {
    try {
      var r = '';
      do (r += dw(e)), (e = e.return);
      while (e);
      return r;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  function _n(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function qh(e) {
    var r = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (r === 'checkbox' || r === 'radio');
  }
  function fw(e) {
    var r = qh(e) ? 'checked' : 'value',
      o = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
      l = '' + e[r];
    if (
      !e.hasOwnProperty(r) &&
      typeof o < 'u' &&
      typeof o.get == 'function' &&
      typeof o.set == 'function'
    ) {
      var c = o.get,
        f = o.set;
      return (
        Object.defineProperty(e, r, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (l = '' + y), f.call(this, y);
          },
        }),
        Object.defineProperty(e, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = '' + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[r];
          },
        }
      );
    }
  }
  function wl(e) {
    e._valueTracker || (e._valueTracker = fw(e));
  }
  function Yh(e) {
    if (!e) return !1;
    var r = e._valueTracker;
    if (!r) return !0;
    var o = r.getValue(),
      l = '';
    return (
      e && (l = qh(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== o ? (r.setValue(e), !0) : !1
    );
  }
  function kl(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var hw = /[\n"\\]/g;
  function Tn(e) {
    return e.replace(hw, function (r) {
      return '\\' + r.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Rc(e, r, o, l, c, f, y, w) {
    (e.name = ''),
      y != null && typeof y != 'function' && typeof y != 'symbol' && typeof y != 'boolean'
        ? (e.type = y)
        : e.removeAttribute('type'),
      r != null
        ? y === 'number'
          ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + _n(r))
          : e.value !== '' + _n(r) && (e.value = '' + _n(r))
        : (y !== 'submit' && y !== 'reset') || e.removeAttribute('value'),
      r != null
        ? jc(e, y, _n(r))
        : o != null
          ? jc(e, y, _n(o))
          : l != null && e.removeAttribute('value'),
      c == null && f != null && (e.defaultChecked = !!f),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      w != null && typeof w != 'function' && typeof w != 'symbol' && typeof w != 'boolean'
        ? (e.name = '' + _n(w))
        : e.removeAttribute('name');
  }
  function Kh(e, r, o, l, c, f, y, w) {
    if (
      (f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (e.type = f),
      r != null || o != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || r != null)) return;
      (o = o != null ? '' + _n(o) : ''),
        (r = r != null ? '' + _n(r) : o),
        w || r === e.value || (e.value = r),
        (e.defaultValue = r);
    }
    (l = l ?? c),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = w ? e.checked : !!l),
      (e.defaultChecked = !!l),
      y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean' &&
        (e.name = y);
  }
  function jc(e, r, o) {
    (r === 'number' && kl(e.ownerDocument) === e) ||
      e.defaultValue === '' + o ||
      (e.defaultValue = '' + o);
  }
  function yi(e, r, o, l) {
    if (((e = e.options), r)) {
      r = {};
      for (var c = 0; c < o.length; c++) r['$' + o[c]] = !0;
      for (o = 0; o < e.length; o++)
        (c = r.hasOwnProperty('$' + e[o].value)),
          e[o].selected !== c && (e[o].selected = c),
          c && l && (e[o].defaultSelected = !0);
    } else {
      for (o = '' + _n(o), r = null, c = 0; c < e.length; c++) {
        if (e[c].value === o) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        r !== null || e[c].disabled || (r = e[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Hh(e, r, o) {
    if (r != null && ((r = '' + _n(r)), r !== e.value && (e.value = r), o == null)) {
      e.defaultValue !== r && (e.defaultValue = r);
      return;
    }
    e.defaultValue = o != null ? '' + _n(o) : '';
  }
  function Gh(e, r, o, l) {
    if (r == null) {
      if (l != null) {
        if (o != null) throw Error(i(92));
        if (Ne(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        o = l;
      }
      o == null && (o = ''), (r = o);
    }
    (o = _n(r)),
      (e.defaultValue = o),
      (l = e.textContent),
      l === o && l !== '' && l !== null && (e.value = l);
  }
  function vi(e, r) {
    if (r) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    e.textContent = r;
  }
  var pw = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Xh(e, r, o) {
    var l = r.indexOf('--') === 0;
    o == null || typeof o == 'boolean' || o === ''
      ? l
        ? e.setProperty(r, '')
        : r === 'float'
          ? (e.cssFloat = '')
          : (e[r] = '')
      : l
        ? e.setProperty(r, o)
        : typeof o != 'number' || o === 0 || pw.has(r)
          ? r === 'float'
            ? (e.cssFloat = o)
            : (e[r] = ('' + o).trim())
          : (e[r] = o + 'px');
  }
  function Jh(e, r, o) {
    if (r != null && typeof r != 'object') throw Error(i(62));
    if (((e = e.style), o != null)) {
      for (var l in o)
        !o.hasOwnProperty(l) ||
          (r != null && r.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var c in r) (l = r[c]), r.hasOwnProperty(c) && o[c] !== l && Xh(e, c, l);
    } else for (var f in r) r.hasOwnProperty(f) && Xh(e, f, r[f]);
  }
  function Lc(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var mw = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    gw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xl(e) {
    return gw.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Fc = null;
  function Ac(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var bi = null,
    wi = null;
  function Qh(e) {
    var r = hi(e);
    if (r && (e = r.stateNode)) {
      var o = e[an] || null;
      e: switch (((e = r.stateNode), r.type)) {
        case 'input':
          if (
            (Rc(
              e,
              o.value,
              o.defaultValue,
              o.defaultValue,
              o.checked,
              o.defaultChecked,
              o.type,
              o.name
            ),
            (r = o.name),
            o.type === 'radio' && r != null)
          ) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll('input[name="' + Tn('' + r) + '"][type="radio"]'), r = 0;
              r < o.length;
              r++
            ) {
              var l = o[r];
              if (l !== e && l.form === e.form) {
                var c = l[an] || null;
                if (!c) throw Error(i(90));
                Rc(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (r = 0; r < o.length; r++) (l = o[r]), l.form === e.form && Yh(l);
          }
          break e;
        case 'textarea':
          Hh(e, o.value, o.defaultValue);
          break e;
        case 'select':
          (r = o.value), r != null && yi(e, !!o.multiple, r, !1);
      }
    }
  }
  var $c = !1;
  function ep(e, r, o) {
    if ($c) return e(r, o);
    $c = !0;
    try {
      var l = e(r);
      return l;
    } finally {
      if (
        (($c = !1),
        (bi !== null || wi !== null) &&
          (su(), bi && ((r = bi), (e = wi), (wi = bi = null), Qh(r), e)))
      )
        for (r = 0; r < e.length; r++) Qh(e[r]);
    }
  }
  function ko(e, r) {
    var o = e.stateNode;
    if (o === null) return null;
    var l = o[an] || null;
    if (l === null) return null;
    o = l[r];
    e: switch (r) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (o && typeof o != 'function') throw Error(i(231, r, typeof o));
    return o;
  }
  var dr = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Ic = !1;
  if (dr)
    try {
      var xo = {};
      Object.defineProperty(xo, 'passive', {
        get: function () {
          Ic = !0;
        },
      }),
        window.addEventListener('test', xo, xo),
        window.removeEventListener('test', xo, xo);
    } catch {
      Ic = !1;
    }
  var qr = null,
    Wc = null,
    Sl = null;
  function tp() {
    if (Sl) return Sl;
    var e,
      r = Wc,
      o = r.length,
      l,
      c = 'value' in qr ? qr.value : qr.textContent,
      f = c.length;
    for (e = 0; e < o && r[e] === c[e]; e++);
    var y = o - e;
    for (l = 1; l <= y && r[o - l] === c[f - l]; l++);
    return (Sl = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function _l(e) {
    var r = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && r === 13 && (e = 13)) : (e = r),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cl() {
    return !0;
  }
  function np() {
    return !1;
  }
  function on(e) {
    function r(o, l, c, f, y) {
      (this._reactName = o),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var w in e) e.hasOwnProperty(w) && ((o = e[w]), (this[w] = o ? o(f) : f[w]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Cl
          : np),
        (this.isPropagationStopped = np),
        this
      );
    }
    return (
      g(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != 'unknown' && (o.returnValue = !1),
            (this.isDefaultPrevented = Cl));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != 'unknown' && (o.cancelBubble = !0),
            (this.isPropagationStopped = Cl));
        },
        persist: function () {},
        isPersistent: Cl,
      }),
      r
    );
  }
  var Da = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Nl = on(Da),
    So = g({}, Da, { view: 0, detail: 0 }),
    yw = on(So),
    zc,
    Vc,
    _o,
    Ol = g({}, So, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Uc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== _o &&
              (_o && e.type === 'mousemove'
                ? ((zc = e.screenX - _o.screenX), (Vc = e.screenY - _o.screenY))
                : (Vc = zc = 0),
              (_o = e)),
            zc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Vc;
      },
    }),
    rp = on(Ol),
    vw = g({}, Ol, { dataTransfer: 0 }),
    bw = on(vw),
    ww = g({}, So, { relatedTarget: 0 }),
    Bc = on(ww),
    kw = g({}, Da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xw = on(kw),
    Sw = g({}, Da, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _w = on(Sw),
    Cw = g({}, Da, { data: 0 }),
    ap = on(Cw),
    Nw = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Ow = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Ew = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Dw(e) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(e) : (e = Ew[e]) ? !!r[e] : !1;
  }
  function Uc() {
    return Dw;
  }
  var Pw = g({}, So, {
      key: function (e) {
        if (e.key) {
          var r = Nw[e.key] || e.key;
          if (r !== 'Unidentified') return r;
        }
        return e.type === 'keypress'
          ? ((e = _l(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Ow[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Uc,
      charCode: function (e) {
        return e.type === 'keypress' ? _l(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? _l(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Mw = on(Pw),
    Tw = g({}, Ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ip = on(Tw),
    Rw = g({}, So, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Uc,
    }),
    jw = on(Rw),
    Lw = g({}, Da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fw = on(Lw),
    Aw = g({}, Ol, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    $w = on(Aw),
    Iw = g({}, Da, { newState: 0, oldState: 0 }),
    Ww = on(Iw),
    zw = [9, 13, 27, 32],
    Zc = dr && 'CompositionEvent' in window,
    Co = null;
  dr && 'documentMode' in document && (Co = document.documentMode);
  var Vw = dr && 'TextEvent' in window && !Co,
    op = dr && (!Zc || (Co && 8 < Co && 11 >= Co)),
    sp = ' ',
    lp = !1;
  function up(e, r) {
    switch (e) {
      case 'keyup':
        return zw.indexOf(r.keyCode) !== -1;
      case 'keydown':
        return r.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function cp(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var ki = !1;
  function Bw(e, r) {
    switch (e) {
      case 'compositionend':
        return cp(r);
      case 'keypress':
        return r.which !== 32 ? null : ((lp = !0), sp);
      case 'textInput':
        return (e = r.data), e === sp && lp ? null : e;
      default:
        return null;
    }
  }
  function Uw(e, r) {
    if (ki)
      return e === 'compositionend' || (!Zc && up(e, r))
        ? ((e = tp()), (Sl = Wc = qr = null), (ki = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case 'compositionend':
        return op && r.locale !== 'ko' ? null : r.data;
      default:
        return null;
    }
  }
  var Zw = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function dp(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === 'input' ? !!Zw[e.type] : r === 'textarea';
  }
  function fp(e, r, o, l) {
    bi ? (wi ? wi.push(l) : (wi = [l])) : (bi = l),
      (r = hu(r, 'onChange')),
      0 < r.length &&
        ((o = new Nl('onChange', 'change', null, o, l)), e.push({ event: o, listeners: r }));
  }
  var No = null,
    Oo = null;
  function qw(e) {
    qg(e, 0);
  }
  function El(e) {
    var r = wo(e);
    if (Yh(r)) return e;
  }
  function hp(e, r) {
    if (e === 'change') return r;
  }
  var pp = !1;
  if (dr) {
    var qc;
    if (dr) {
      var Yc = 'oninput' in document;
      if (!Yc) {
        var mp = document.createElement('div');
        mp.setAttribute('oninput', 'return;'), (Yc = typeof mp.oninput == 'function');
      }
      qc = Yc;
    } else qc = !1;
    pp = qc && (!document.documentMode || 9 < document.documentMode);
  }
  function gp() {
    No && (No.detachEvent('onpropertychange', yp), (Oo = No = null));
  }
  function yp(e) {
    if (e.propertyName === 'value' && El(Oo)) {
      var r = [];
      fp(r, Oo, e, Ac(e)), ep(qw, r);
    }
  }
  function Yw(e, r, o) {
    e === 'focusin'
      ? (gp(), (No = r), (Oo = o), No.attachEvent('onpropertychange', yp))
      : e === 'focusout' && gp();
  }
  function Kw(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return El(Oo);
  }
  function Hw(e, r) {
    if (e === 'click') return El(r);
  }
  function Gw(e, r) {
    if (e === 'input' || e === 'change') return El(r);
  }
  function Xw(e, r) {
    return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
  }
  var fn = typeof Object.is == 'function' ? Object.is : Xw;
  function Eo(e, r) {
    if (fn(e, r)) return !0;
    if (typeof e != 'object' || e === null || typeof r != 'object' || r === null) return !1;
    var o = Object.keys(e),
      l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var c = o[l];
      if (!Br.call(r, c) || !fn(e[c], r[c])) return !1;
    }
    return !0;
  }
  function vp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bp(e, r) {
    var o = vp(e);
    e = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = e + o.textContent.length), e <= r && l >= r)) return { node: o, offset: r - e };
        e = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = vp(o);
    }
  }
  function wp(e, r) {
    return e && r
      ? e === r
        ? !0
        : e && e.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? wp(e, r.parentNode)
            : 'contains' in e
              ? e.contains(r)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function kp(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var r = kl(e.document); r instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == 'string';
      } catch {
        o = !1;
      }
      if (o) e = r.contentWindow;
      else break;
      r = kl(e.document);
    }
    return r;
  }
  function Kc(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      r &&
      ((r === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        r === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Jw = dr && 'documentMode' in document && 11 >= document.documentMode,
    xi = null,
    Hc = null,
    Do = null,
    Gc = !1;
  function xp(e, r, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Gc ||
      xi == null ||
      xi !== kl(l) ||
      ((l = xi),
      'selectionStart' in l && Kc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Do && Eo(Do, l)) ||
        ((Do = l),
        (l = hu(Hc, 'onSelect')),
        0 < l.length &&
          ((r = new Nl('onSelect', 'select', null, r, o)),
          e.push({ event: r, listeners: l }),
          (r.target = xi))));
  }
  function Pa(e, r) {
    var o = {};
    return (
      (o[e.toLowerCase()] = r.toLowerCase()),
      (o['Webkit' + e] = 'webkit' + r),
      (o['Moz' + e] = 'moz' + r),
      o
    );
  }
  var Si = {
      animationend: Pa('Animation', 'AnimationEnd'),
      animationiteration: Pa('Animation', 'AnimationIteration'),
      animationstart: Pa('Animation', 'AnimationStart'),
      transitionrun: Pa('Transition', 'TransitionRun'),
      transitionstart: Pa('Transition', 'TransitionStart'),
      transitioncancel: Pa('Transition', 'TransitionCancel'),
      transitionend: Pa('Transition', 'TransitionEnd'),
    },
    Xc = {},
    Sp = {};
  dr &&
    ((Sp = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Si.animationend.animation,
      delete Si.animationiteration.animation,
      delete Si.animationstart.animation),
    'TransitionEvent' in window || delete Si.transitionend.transition);
  function Ma(e) {
    if (Xc[e]) return Xc[e];
    if (!Si[e]) return e;
    var r = Si[e],
      o;
    for (o in r) if (r.hasOwnProperty(o) && o in Sp) return (Xc[e] = r[o]);
    return e;
  }
  var _p = Ma('animationend'),
    Cp = Ma('animationiteration'),
    Np = Ma('animationstart'),
    Qw = Ma('transitionrun'),
    ek = Ma('transitionstart'),
    tk = Ma('transitioncancel'),
    Op = Ma('transitionend'),
    Ep = new Map(),
    Jc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Jc.push('scrollEnd');
  function Rn(e, r) {
    Ep.set(e, r), Ea(r, [e]);
  }
  var Dp = new WeakMap();
  function Cn(e, r) {
    if (typeof e == 'object' && e !== null) {
      var o = Dp.get(e);
      return o !== void 0 ? o : ((r = { value: e, source: r, stack: Zh(r) }), Dp.set(e, r), r);
    }
    return { value: e, source: r, stack: Zh(r) };
  }
  var Nn = [],
    _i = 0,
    Qc = 0;
  function Dl() {
    for (var e = _i, r = (Qc = _i = 0); r < e; ) {
      var o = Nn[r];
      Nn[r++] = null;
      var l = Nn[r];
      Nn[r++] = null;
      var c = Nn[r];
      Nn[r++] = null;
      var f = Nn[r];
      if (((Nn[r++] = null), l !== null && c !== null)) {
        var y = l.pending;
        y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)), (l.pending = c);
      }
      f !== 0 && Pp(o, c, f);
    }
  }
  function Pl(e, r, o, l) {
    (Nn[_i++] = e),
      (Nn[_i++] = r),
      (Nn[_i++] = o),
      (Nn[_i++] = l),
      (Qc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function ed(e, r, o, l) {
    return Pl(e, r, o, l), Ml(e);
  }
  function Ci(e, r) {
    return Pl(e, null, null, r), Ml(e);
  }
  function Pp(e, r, o) {
    e.lanes |= o;
    var l = e.alternate;
    l !== null && (l.lanes |= o);
    for (var c = !1, f = e.return; f !== null; )
      (f.childLanes |= o),
        (l = f.alternate),
        l !== null && (l.childLanes |= o),
        f.tag === 22 && ((e = f.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = f),
        (f = f.return);
    return e.tag === 3
      ? ((f = e.stateNode),
        c &&
          r !== null &&
          ((c = 31 - Ze(o)),
          (e = f.hiddenUpdates),
          (l = e[c]),
          l === null ? (e[c] = [r]) : l.push(r),
          (r.lane = o | 536870912)),
        f)
      : null;
  }
  function Ml(e) {
    if (50 < es) throw ((es = 0), (sf = null), Error(i(185)));
    for (var r = e.return; r !== null; ) (e = r), (r = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ni = {};
  function nk(e, r, o, l) {
    (this.tag = e),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = r),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function hn(e, r, o, l) {
    return new nk(e, r, o, l);
  }
  function td(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function fr(e, r) {
    var o = e.alternate;
    return (
      o === null
        ? ((o = hn(e.tag, r, e.key, e.mode)),
          (o.elementType = e.elementType),
          (o.type = e.type),
          (o.stateNode = e.stateNode),
          (o.alternate = e),
          (e.alternate = o))
        : ((o.pendingProps = r),
          (o.type = e.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = e.flags & 65011712),
      (o.childLanes = e.childLanes),
      (o.lanes = e.lanes),
      (o.child = e.child),
      (o.memoizedProps = e.memoizedProps),
      (o.memoizedState = e.memoizedState),
      (o.updateQueue = e.updateQueue),
      (r = e.dependencies),
      (o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (o.sibling = e.sibling),
      (o.index = e.index),
      (o.ref = e.ref),
      (o.refCleanup = e.refCleanup),
      o
    );
  }
  function Mp(e, r) {
    e.flags &= 65011714;
    var o = e.alternate;
    return (
      o === null
        ? ((e.childLanes = 0),
          (e.lanes = r),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = o.childLanes),
          (e.lanes = o.lanes),
          (e.child = o.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = o.memoizedProps),
          (e.memoizedState = o.memoizedState),
          (e.updateQueue = o.updateQueue),
          (e.type = o.type),
          (r = o.dependencies),
          (e.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext })),
      e
    );
  }
  function Tl(e, r, o, l, c, f) {
    var y = 0;
    if (((l = e), typeof e == 'function')) td(e) && (y = 1);
    else if (typeof e == 'string')
      y = ax(e, o, ve.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case me:
          return (e = hn(31, o, r, c)), (e.elementType = me), (e.lanes = f), e;
        case x:
          return Ta(o.children, c, f, r);
        case N:
          (y = 8), (c |= 24);
          break;
        case D:
          return (e = hn(12, o, r, c | 2)), (e.elementType = D), (e.lanes = f), e;
        case A:
          return (e = hn(13, o, r, c)), (e.elementType = A), (e.lanes = f), e;
        case ee:
          return (e = hn(19, o, r, c)), (e.elementType = ee), (e.lanes = f), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case j:
              case M:
                y = 10;
                break e;
              case _:
                y = 9;
                break e;
              case V:
                y = 11;
                break e;
              case te:
                y = 14;
                break e;
              case H:
                (y = 16), (l = null);
                break e;
            }
          (y = 29), (o = Error(i(130, e === null ? 'null' : typeof e, ''))), (l = null);
      }
    return (r = hn(y, o, r, c)), (r.elementType = e), (r.type = l), (r.lanes = f), r;
  }
  function Ta(e, r, o, l) {
    return (e = hn(7, e, l, r)), (e.lanes = o), e;
  }
  function nd(e, r, o) {
    return (e = hn(6, e, null, r)), (e.lanes = o), e;
  }
  function rd(e, r, o) {
    return (
      (r = hn(4, e.children !== null ? e.children : [], e.key, r)),
      (r.lanes = o),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  var Oi = [],
    Ei = 0,
    Rl = null,
    jl = 0,
    On = [],
    En = 0,
    Ra = null,
    hr = 1,
    pr = '';
  function ja(e, r) {
    (Oi[Ei++] = jl), (Oi[Ei++] = Rl), (Rl = e), (jl = r);
  }
  function Tp(e, r, o) {
    (On[En++] = hr), (On[En++] = pr), (On[En++] = Ra), (Ra = e);
    var l = hr;
    e = pr;
    var c = 32 - Ze(l) - 1;
    (l &= ~(1 << c)), (o += 1);
    var f = 32 - Ze(r) + c;
    if (30 < f) {
      var y = c - (c % 5);
      (f = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (c -= y),
        (hr = (1 << (32 - Ze(r) + c)) | (o << c) | l),
        (pr = f + e);
    } else (hr = (1 << f) | (o << c) | l), (pr = e);
  }
  function ad(e) {
    e.return !== null && (ja(e, 1), Tp(e, 1, 0));
  }
  function id(e) {
    for (; e === Rl; ) (Rl = Oi[--Ei]), (Oi[Ei] = null), (jl = Oi[--Ei]), (Oi[Ei] = null);
    for (; e === Ra; )
      (Ra = On[--En]),
        (On[En] = null),
        (pr = On[--En]),
        (On[En] = null),
        (hr = On[--En]),
        (On[En] = null);
  }
  var Ht = null,
    gt = null,
    Xe = !1,
    La = null,
    qn = !1,
    od = Error(i(519));
  function Fa(e) {
    var r = Error(i(418, ''));
    throw (To(Cn(r, e)), od);
  }
  function Rp(e) {
    var r = e.stateNode,
      o = e.type,
      l = e.memoizedProps;
    switch (((r[Bt] = e), (r[an] = l), o)) {
      case 'dialog':
        Ue('cancel', r), Ue('close', r);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ue('load', r);
        break;
      case 'video':
      case 'audio':
        for (o = 0; o < ns.length; o++) Ue(ns[o], r);
        break;
      case 'source':
        Ue('error', r);
        break;
      case 'img':
      case 'image':
      case 'link':
        Ue('error', r), Ue('load', r);
        break;
      case 'details':
        Ue('toggle', r);
        break;
      case 'input':
        Ue('invalid', r),
          Kh(r, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          wl(r);
        break;
      case 'select':
        Ue('invalid', r);
        break;
      case 'textarea':
        Ue('invalid', r), Gh(r, l.value, l.defaultValue, l.children), wl(r);
    }
    (o = l.children),
      (typeof o != 'string' && typeof o != 'number' && typeof o != 'bigint') ||
      r.textContent === '' + o ||
      l.suppressHydrationWarning === !0 ||
      Gg(r.textContent, o)
        ? (l.popover != null && (Ue('beforetoggle', r), Ue('toggle', r)),
          l.onScroll != null && Ue('scroll', r),
          l.onScrollEnd != null && Ue('scrollend', r),
          l.onClick != null && (r.onclick = pu),
          (r = !0))
        : (r = !1),
      r || Fa(e);
  }
  function jp(e) {
    for (Ht = e.return; Ht; )
      switch (Ht.tag) {
        case 5:
        case 13:
          qn = !1;
          return;
        case 27:
        case 3:
          qn = !0;
          return;
        default:
          Ht = Ht.return;
      }
  }
  function Po(e) {
    if (e !== Ht) return !1;
    if (!Xe) return jp(e), (Xe = !0), !1;
    var r = e.tag,
      o;
    if (
      ((o = r !== 3 && r !== 27) &&
        ((o = r === 5) &&
          ((o = e.type), (o = !(o !== 'form' && o !== 'button') || Sf(e.type, e.memoizedProps))),
        (o = !o)),
      o && gt && Fa(e),
      jp(e),
      r === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8)
            if (((o = e.data), o === '/$')) {
              if (r === 0) {
                gt = Ln(e.nextSibling);
                break e;
              }
              r--;
            } else (o !== '$' && o !== '$!' && o !== '$?') || r++;
          e = e.nextSibling;
        }
        gt = null;
      }
    } else
      r === 27
        ? ((r = gt), la(e.type) ? ((e = Of), (Of = null), (gt = e)) : (gt = r))
        : (gt = Ht ? Ln(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Mo() {
    (gt = Ht = null), (Xe = !1);
  }
  function Lp() {
    var e = La;
    return e !== null && (un === null ? (un = e) : un.push.apply(un, e), (La = null)), e;
  }
  function To(e) {
    La === null ? (La = [e]) : La.push(e);
  }
  var sd = Y(null),
    Aa = null,
    mr = null;
  function Yr(e, r, o) {
    re(sd, r._currentValue), (r._currentValue = o);
  }
  function gr(e) {
    (e._currentValue = sd.current), se(sd);
  }
  function ld(e, r, o) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & r) !== r
          ? ((e.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        e === o)
      )
        break;
      e = e.return;
    }
  }
  function ud(e, r, o, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var y = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var w = f;
          f = c;
          for (var S = 0; S < r.length; S++)
            if (w.context === r[S]) {
              (f.lanes |= o),
                (w = f.alternate),
                w !== null && (w.lanes |= o),
                ld(f.return, o, e),
                l || (y = null);
              break e;
            }
          f = w.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(i(341));
        (y.lanes |= o), (f = y.alternate), f !== null && (f.lanes |= o), ld(y, o, e), (y = null);
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            (c.return = y.return), (y = c);
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Ro(e, r, o, l) {
    e = null;
    for (var c = r, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(i(387));
        if (((y = y.memoizedProps), y !== null)) {
          var w = c.type;
          fn(c.pendingProps.value, y.value) || (e !== null ? e.push(w) : (e = [w]));
        }
      } else if (c === Tt.current) {
        if (((y = c.alternate), y === null)) throw Error(i(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(ls) : (e = [ls]));
      }
      c = c.return;
    }
    e !== null && ud(r, e, o, l), (r.flags |= 262144);
  }
  function Ll(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!fn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function $a(e) {
    (Aa = e), (mr = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return Fp(Aa, e);
  }
  function Fl(e, r) {
    return Aa === null && $a(e), Fp(e, r);
  }
  function Fp(e, r) {
    var o = r._currentValue;
    if (((r = { context: r, memoizedValue: o, next: null }), mr === null)) {
      if (e === null) throw Error(i(308));
      (mr = r), (e.dependencies = { lanes: 0, firstContext: r }), (e.flags |= 524288);
    } else mr = mr.next = r;
    return o;
  }
  var rk =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (o, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (r.aborted = !0),
                e.forEach(function (o) {
                  return o();
                });
            };
          },
    ak = t.unstable_scheduleCallback,
    ik = t.unstable_NormalPriority,
    Et = {
      $$typeof: M,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function cd() {
    return { controller: new rk(), data: new Map(), refCount: 0 };
  }
  function jo(e) {
    e.refCount--,
      e.refCount === 0 &&
        ak(ik, function () {
          e.controller.abort();
        });
  }
  var Lo = null,
    dd = 0,
    Di = 0,
    Pi = null;
  function ok(e, r) {
    if (Lo === null) {
      var o = (Lo = []);
      (dd = 0),
        (Di = pf()),
        (Pi = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            o.push(l);
          },
        });
    }
    return dd++, r.then(Ap, Ap), r;
  }
  function Ap() {
    if (--dd === 0 && Lo !== null) {
      Pi !== null && (Pi.status = 'fulfilled');
      var e = Lo;
      (Lo = null), (Di = 0), (Pi = null);
      for (var r = 0; r < e.length; r++) (0, e[r])();
    }
  }
  function sk(e, r) {
    var o = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (c) {
          o.push(c);
        },
      };
    return (
      e.then(
        function () {
          (l.status = 'fulfilled'), (l.value = r);
          for (var c = 0; c < o.length; c++) (0, o[c])(r);
        },
        function (c) {
          for (l.status = 'rejected', l.reason = c, c = 0; c < o.length; c++) (0, o[c])(void 0);
        }
      ),
      l
    );
  }
  var $p = z.S;
  z.S = function (e, r) {
    typeof r == 'object' && r !== null && typeof r.then == 'function' && ok(e, r),
      $p !== null && $p(e, r);
  };
  var Ia = Y(null);
  function fd() {
    var e = Ia.current;
    return e !== null ? e : ct.pooledCache;
  }
  function Al(e, r) {
    r === null ? re(Ia, Ia.current) : re(Ia, r.pool);
  }
  function Ip() {
    var e = fd();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var Fo = Error(i(460)),
    Wp = Error(i(474)),
    $l = Error(i(542)),
    hd = { then: function () {} };
  function zp(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Il() {}
  function Vp(e, r, o) {
    switch (
      ((o = e[o]), o === void 0 ? e.push(r) : o !== r && (r.then(Il, Il), (r = o)), r.status)
    ) {
      case 'fulfilled':
        return r.value;
      case 'rejected':
        throw ((e = r.reason), Up(e), e);
      default:
        if (typeof r.status == 'string') r.then(Il, Il);
        else {
          if (((e = ct), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
          (e = r),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (r.status === 'pending') {
                  var c = r;
                  (c.status = 'fulfilled'), (c.value = l);
                }
              },
              function (l) {
                if (r.status === 'pending') {
                  var c = r;
                  (c.status = 'rejected'), (c.reason = l);
                }
              }
            );
        }
        switch (r.status) {
          case 'fulfilled':
            return r.value;
          case 'rejected':
            throw ((e = r.reason), Up(e), e);
        }
        throw ((Ao = r), Fo);
    }
  }
  var Ao = null;
  function Bp() {
    if (Ao === null) throw Error(i(459));
    var e = Ao;
    return (Ao = null), e;
  }
  function Up(e) {
    if (e === Fo || e === $l) throw Error(i(483));
  }
  var Kr = !1;
  function pd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function md(e, r) {
    (e = e.updateQueue),
      r.updateQueue === e &&
        (r.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Hr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Gr(e, r, o) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (et & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)),
        (l.pending = r),
        (r = Ml(e)),
        Pp(e, null, o),
        r
      );
    }
    return Pl(e, l, r, o), Ml(e);
  }
  function $o(e, r, o) {
    if (((r = r.updateQueue), r !== null && ((r = r.shared), (o & 4194048) !== 0))) {
      var l = r.lanes;
      (l &= e.pendingLanes), (o |= l), (r.lanes = o), ci(e, o);
    }
  }
  function gd(e, r) {
    var o = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
      var c = null,
        f = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var y = { lane: o.lane, tag: o.tag, payload: o.payload, callback: null, next: null };
          f === null ? (c = f = y) : (f = f.next = y), (o = o.next);
        } while (o !== null);
        f === null ? (c = f = r) : (f = f.next = r);
      } else c = f = r;
      (o = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = o);
      return;
    }
    (e = o.lastBaseUpdate),
      e === null ? (o.firstBaseUpdate = r) : (e.next = r),
      (o.lastBaseUpdate = r);
  }
  var yd = !1;
  function Io() {
    if (yd) {
      var e = Pi;
      if (e !== null) throw e;
    }
  }
  function Wo(e, r, o, l) {
    yd = !1;
    var c = e.updateQueue;
    Kr = !1;
    var f = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var S = w,
        F = S.next;
      (S.next = null), y === null ? (f = F) : (y.next = F), (y = S);
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (w = U.lastBaseUpdate),
        w !== y && (w === null ? (U.firstBaseUpdate = F) : (w.next = F), (U.lastBaseUpdate = S)));
    }
    if (f !== null) {
      var K = c.baseState;
      (y = 0), (U = F = S = null), (w = f);
      do {
        var $ = w.lane & -536870913,
          W = $ !== w.lane;
        if (W ? (qe & $) === $ : (l & $) === $) {
          $ !== 0 && $ === Di && (yd = !0),
            U !== null &&
              (U = U.next =
                { lane: 0, tag: w.tag, payload: w.payload, callback: null, next: null });
          e: {
            var Oe = e,
              xe = w;
            $ = r;
            var ot = o;
            switch (xe.tag) {
              case 1:
                if (((Oe = xe.payload), typeof Oe == 'function')) {
                  K = Oe.call(ot, K, $);
                  break e;
                }
                K = Oe;
                break e;
              case 3:
                Oe.flags = (Oe.flags & -65537) | 128;
              case 0:
                if (
                  ((Oe = xe.payload),
                  ($ = typeof Oe == 'function' ? Oe.call(ot, K, $) : Oe),
                  $ == null)
                )
                  break e;
                K = g({}, K, $);
                break e;
              case 2:
                Kr = !0;
            }
          }
          ($ = w.callback),
            $ !== null &&
              ((e.flags |= 64),
              W && (e.flags |= 8192),
              (W = c.callbacks),
              W === null ? (c.callbacks = [$]) : W.push($));
        } else
          (W = { lane: $, tag: w.tag, payload: w.payload, callback: w.callback, next: null }),
            U === null ? ((F = U = W), (S = K)) : (U = U.next = W),
            (y |= $);
        if (((w = w.next), w === null)) {
          if (((w = c.shared.pending), w === null)) break;
          (W = w), (w = W.next), (W.next = null), (c.lastBaseUpdate = W), (c.shared.pending = null);
        }
      } while (!0);
      U === null && (S = K),
        (c.baseState = S),
        (c.firstBaseUpdate = F),
        (c.lastBaseUpdate = U),
        f === null && (c.shared.lanes = 0),
        (aa |= y),
        (e.lanes = y),
        (e.memoizedState = K);
    }
  }
  function Zp(e, r) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(r);
  }
  function qp(e, r) {
    var o = e.callbacks;
    if (o !== null) for (e.callbacks = null, e = 0; e < o.length; e++) Zp(o[e], r);
  }
  var Mi = Y(null),
    Wl = Y(0);
  function Yp(e, r) {
    (e = _r), re(Wl, e), re(Mi, r), (_r = e | r.baseLanes);
  }
  function vd() {
    re(Wl, _r), re(Mi, Mi.current);
  }
  function bd() {
    (_r = Wl.current), se(Mi), se(Wl);
  }
  var Xr = 0,
    Ie = null,
    at = null,
    Ct = null,
    zl = !1,
    Ti = !1,
    Wa = !1,
    Vl = 0,
    zo = 0,
    Ri = null,
    lk = 0;
  function vt() {
    throw Error(i(321));
  }
  function wd(e, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < e.length; o++) if (!fn(e[o], r[o])) return !1;
    return !0;
  }
  function kd(e, r, o, l, c, f) {
    return (
      (Xr = f),
      (Ie = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? Pm : Mm),
      (Wa = !1),
      (f = o(l, c)),
      (Wa = !1),
      Ti && (f = Hp(r, o, l, c)),
      Kp(e),
      f
    );
  }
  function Kp(e) {
    z.H = Kl;
    var r = at !== null && at.next !== null;
    if (((Xr = 0), (Ct = at = Ie = null), (zl = !1), (zo = 0), (Ri = null), r)) throw Error(i(300));
    e === null || jt || ((e = e.dependencies), e !== null && Ll(e) && (jt = !0));
  }
  function Hp(e, r, o, l) {
    Ie = e;
    var c = 0;
    do {
      if ((Ti && (Ri = null), (zo = 0), (Ti = !1), 25 <= c)) throw Error(i(301));
      if (((c += 1), (Ct = at = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (z.H = mk), (f = r(o, l));
    } while (Ti);
    return f;
  }
  function uk() {
    var e = z.H,
      r = e.useState()[0];
    return (
      (r = typeof r.then == 'function' ? Vo(r) : r),
      (e = e.useState()[0]),
      (at !== null ? at.memoizedState : null) !== e && (Ie.flags |= 1024),
      r
    );
  }
  function xd() {
    var e = Vl !== 0;
    return (Vl = 0), e;
  }
  function Sd(e, r, o) {
    (r.updateQueue = e.updateQueue), (r.flags &= -2053), (e.lanes &= ~o);
  }
  function _d(e) {
    if (zl) {
      for (e = e.memoizedState; e !== null; ) {
        var r = e.queue;
        r !== null && (r.pending = null), (e = e.next);
      }
      zl = !1;
    }
    (Xr = 0), (Ct = at = Ie = null), (Ti = !1), (zo = Vl = 0), (Ri = null);
  }
  function sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ct === null ? (Ie.memoizedState = Ct = e) : (Ct = Ct.next = e), Ct;
  }
  function Nt() {
    if (at === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = at.next;
    var r = Ct === null ? Ie.memoizedState : Ct.next;
    if (r !== null) (Ct = r), (at = e);
    else {
      if (e === null) throw Ie.alternate === null ? Error(i(467)) : Error(i(310));
      (at = e),
        (e = {
          memoizedState: at.memoizedState,
          baseState: at.baseState,
          baseQueue: at.baseQueue,
          queue: at.queue,
          next: null,
        }),
        Ct === null ? (Ie.memoizedState = Ct = e) : (Ct = Ct.next = e);
    }
    return Ct;
  }
  function Cd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vo(e) {
    var r = zo;
    return (
      (zo += 1),
      Ri === null && (Ri = []),
      (e = Vp(Ri, e, r)),
      (r = Ie),
      (Ct === null ? r.memoizedState : Ct.next) === null &&
        ((r = r.alternate), (z.H = r === null || r.memoizedState === null ? Pm : Mm)),
      e
    );
  }
  function Bl(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Vo(e);
      if (e.$$typeof === M) return Ut(e);
    }
    throw Error(i(438, String(e)));
  }
  function Nd(e) {
    var r = null,
      o = Ie.updateQueue;
    if ((o !== null && (r = o.memoCache), r == null)) {
      var l = Ie.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (r = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      o === null && ((o = Cd()), (Ie.updateQueue = o)),
      (o.memoCache = r),
      (o = r.data[r.index]),
      o === void 0)
    )
      for (o = r.data[r.index] = Array(e), l = 0; l < e; l++) o[l] = Pe;
    return r.index++, o;
  }
  function yr(e, r) {
    return typeof r == 'function' ? r(e) : r;
  }
  function Ul(e) {
    var r = Nt();
    return Od(r, at, e);
  }
  function Od(e, r, o) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = o;
    var c = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = f.next), (f.next = y);
      }
      (r.baseQueue = c = f), (l.pending = null);
    }
    if (((f = e.baseState), c === null)) e.memoizedState = f;
    else {
      r = c.next;
      var w = (y = null),
        S = null,
        F = r,
        U = !1;
      do {
        var K = F.lane & -536870913;
        if (K !== F.lane ? (qe & K) === K : (Xr & K) === K) {
          var $ = F.revertLane;
          if ($ === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: F.action,
                  hasEagerState: F.hasEagerState,
                  eagerState: F.eagerState,
                  next: null,
                }),
              K === Di && (U = !0);
          else if ((Xr & $) === $) {
            (F = F.next), $ === Di && (U = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: F.revertLane,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null,
            }),
              S === null ? ((w = S = K), (y = f)) : (S = S.next = K),
              (Ie.lanes |= $),
              (aa |= $);
          (K = F.action), Wa && o(f, K), (f = F.hasEagerState ? F.eagerState : o(f, K));
        } else
          ($ = {
            lane: K,
            revertLane: F.revertLane,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          }),
            S === null ? ((w = S = $), (y = f)) : (S = S.next = $),
            (Ie.lanes |= K),
            (aa |= K);
        F = F.next;
      } while (F !== null && F !== r);
      if (
        (S === null ? (y = f) : (S.next = w),
        !fn(f, e.memoizedState) && ((jt = !0), U && ((o = Pi), o !== null)))
      )
        throw o;
      (e.memoizedState = f), (e.baseState = y), (e.baseQueue = S), (l.lastRenderedState = f);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ed(e) {
    var r = Nt(),
      o = r.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = e;
    var l = o.dispatch,
      c = o.pending,
      f = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var y = (c = c.next);
      do (f = e(f, y.action)), (y = y.next);
      while (y !== c);
      fn(f, r.memoizedState) || (jt = !0),
        (r.memoizedState = f),
        r.baseQueue === null && (r.baseState = f),
        (o.lastRenderedState = f);
    }
    return [f, l];
  }
  function Gp(e, r, o) {
    var l = Ie,
      c = Nt(),
      f = Xe;
    if (f) {
      if (o === void 0) throw Error(i(407));
      o = o();
    } else o = r();
    var y = !fn((at || c).memoizedState, o);
    y && ((c.memoizedState = o), (jt = !0)), (c = c.queue);
    var w = Qp.bind(null, l, c, e);
    if (
      (Bo(2048, 8, w, [e]), c.getSnapshot !== r || y || (Ct !== null && Ct.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), ji(9, Zl(), Jp.bind(null, l, c, o, r), null), ct === null))
        throw Error(i(349));
      f || (Xr & 124) !== 0 || Xp(l, r, o);
    }
    return o;
  }
  function Xp(e, r, o) {
    (e.flags |= 16384),
      (e = { getSnapshot: r, value: o }),
      (r = Ie.updateQueue),
      r === null
        ? ((r = Cd()), (Ie.updateQueue = r), (r.stores = [e]))
        : ((o = r.stores), o === null ? (r.stores = [e]) : o.push(e));
  }
  function Jp(e, r, o, l) {
    (r.value = o), (r.getSnapshot = l), em(r) && tm(e);
  }
  function Qp(e, r, o) {
    return o(function () {
      em(r) && tm(e);
    });
  }
  function em(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var o = r();
      return !fn(e, o);
    } catch {
      return !0;
    }
  }
  function tm(e) {
    var r = Ci(e, 2);
    r !== null && vn(r, e, 2);
  }
  function Dd(e) {
    var r = sn();
    if (typeof e == 'function') {
      var o = e;
      if (((e = o()), Wa)) {
        je(!0);
        try {
          o();
        } finally {
          je(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = e),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yr,
        lastRenderedState: e,
      }),
      r
    );
  }
  function nm(e, r, o, l) {
    return (e.baseState = o), Od(e, at, typeof l == 'function' ? l : yr);
  }
  function ck(e, r, o, l, c) {
    if (Yl(e)) throw Error(i(485));
    if (((e = r.action), e !== null)) {
      var f = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          f.listeners.push(y);
        },
      };
      z.T !== null ? o(!0) : (f.isTransition = !1),
        l(f),
        (o = r.pending),
        o === null
          ? ((f.next = r.pending = f), rm(r, f))
          : ((f.next = o.next), (r.pending = o.next = f));
    }
  }
  function rm(e, r) {
    var o = r.action,
      l = r.payload,
      c = e.state;
    if (r.isTransition) {
      var f = z.T,
        y = {};
      z.T = y;
      try {
        var w = o(c, l),
          S = z.S;
        S !== null && S(y, w), am(e, r, w);
      } catch (F) {
        Pd(e, r, F);
      } finally {
        z.T = f;
      }
    } else
      try {
        (f = o(c, l)), am(e, r, f);
      } catch (F) {
        Pd(e, r, F);
      }
  }
  function am(e, r, o) {
    o !== null && typeof o == 'object' && typeof o.then == 'function'
      ? o.then(
          function (l) {
            im(e, r, l);
          },
          function (l) {
            return Pd(e, r, l);
          }
        )
      : im(e, r, o);
  }
  function im(e, r, o) {
    (r.status = 'fulfilled'),
      (r.value = o),
      om(r),
      (e.state = o),
      (r = e.pending),
      r !== null &&
        ((o = r.next), o === r ? (e.pending = null) : ((o = o.next), (r.next = o), rm(e, o)));
  }
  function Pd(e, r, o) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (r.status = 'rejected'), (r.reason = o), om(r), (r = r.next);
      while (r !== l);
    }
    e.action = null;
  }
  function om(e) {
    e = e.listeners;
    for (var r = 0; r < e.length; r++) (0, e[r])();
  }
  function sm(e, r) {
    return r;
  }
  function lm(e, r) {
    if (Xe) {
      var o = ct.formState;
      if (o !== null) {
        e: {
          var l = Ie;
          if (Xe) {
            if (gt) {
              t: {
                for (var c = gt, f = qn; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (((c = Ln(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (f = c.data), (c = f === 'F!' || f === 'F' ? c : null);
              }
              if (c) {
                (gt = Ln(c.nextSibling)), (l = c.data === 'F!');
                break e;
              }
            }
            Fa(l);
          }
          l = !1;
        }
        l && (r = o[0]);
      }
    }
    return (
      (o = sn()),
      (o.memoizedState = o.baseState = r),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sm,
        lastRenderedState: r,
      }),
      (o.queue = l),
      (o = Om.bind(null, Ie, l)),
      (l.dispatch = o),
      (l = Dd(!1)),
      (f = Ld.bind(null, Ie, !1, l.queue)),
      (l = sn()),
      (c = { state: r, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (o = ck.bind(null, Ie, c, f, o)),
      (c.dispatch = o),
      (l.memoizedState = e),
      [r, o, !1]
    );
  }
  function um(e) {
    var r = Nt();
    return cm(r, at, e);
  }
  function cm(e, r, o) {
    if (
      ((r = Od(e, r, sm)[0]),
      (e = Ul(yr)[0]),
      typeof r == 'object' && r !== null && typeof r.then == 'function')
    )
      try {
        var l = Vo(r);
      } catch (y) {
        throw y === Fo ? $l : y;
      }
    else l = r;
    r = Nt();
    var c = r.queue,
      f = c.dispatch;
    return (
      o !== r.memoizedState && ((Ie.flags |= 2048), ji(9, Zl(), dk.bind(null, c, o), null)),
      [l, f, e]
    );
  }
  function dk(e, r) {
    e.action = r;
  }
  function dm(e) {
    var r = Nt(),
      o = at;
    if (o !== null) return cm(r, o, e);
    Nt(), (r = r.memoizedState), (o = Nt());
    var l = o.queue.dispatch;
    return (o.memoizedState = e), [r, l, !1];
  }
  function ji(e, r, o, l) {
    return (
      (e = { tag: e, create: o, deps: l, inst: r, next: null }),
      (r = Ie.updateQueue),
      r === null && ((r = Cd()), (Ie.updateQueue = r)),
      (o = r.lastEffect),
      o === null
        ? (r.lastEffect = e.next = e)
        : ((l = o.next), (o.next = e), (e.next = l), (r.lastEffect = e)),
      e
    );
  }
  function Zl() {
    return { destroy: void 0, resource: void 0 };
  }
  function fm() {
    return Nt().memoizedState;
  }
  function ql(e, r, o, l) {
    var c = sn();
    (l = l === void 0 ? null : l), (Ie.flags |= e), (c.memoizedState = ji(1 | r, Zl(), o, l));
  }
  function Bo(e, r, o, l) {
    var c = Nt();
    l = l === void 0 ? null : l;
    var f = c.memoizedState.inst;
    at !== null && l !== null && wd(l, at.memoizedState.deps)
      ? (c.memoizedState = ji(r, f, o, l))
      : ((Ie.flags |= e), (c.memoizedState = ji(1 | r, f, o, l)));
  }
  function hm(e, r) {
    ql(8390656, 8, e, r);
  }
  function pm(e, r) {
    Bo(2048, 8, e, r);
  }
  function mm(e, r) {
    return Bo(4, 2, e, r);
  }
  function gm(e, r) {
    return Bo(4, 4, e, r);
  }
  function ym(e, r) {
    if (typeof r == 'function') {
      e = e();
      var o = r(e);
      return function () {
        typeof o == 'function' ? o() : r(null);
      };
    }
    if (r != null)
      return (
        (e = e()),
        (r.current = e),
        function () {
          r.current = null;
        }
      );
  }
  function vm(e, r, o) {
    (o = o != null ? o.concat([e]) : null), Bo(4, 4, ym.bind(null, r, e), o);
  }
  function Md() {}
  function bm(e, r) {
    var o = Nt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return r !== null && wd(r, l[1]) ? l[0] : ((o.memoizedState = [e, r]), e);
  }
  function wm(e, r) {
    var o = Nt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    if (r !== null && wd(r, l[1])) return l[0];
    if (((l = e()), Wa)) {
      je(!0);
      try {
        e();
      } finally {
        je(!1);
      }
    }
    return (o.memoizedState = [l, r]), l;
  }
  function Td(e, r, o) {
    return o === void 0 || (Xr & 1073741824) !== 0
      ? (e.memoizedState = r)
      : ((e.memoizedState = o), (e = Sg()), (Ie.lanes |= e), (aa |= e), o);
  }
  function km(e, r, o, l) {
    return fn(o, r)
      ? o
      : Mi.current !== null
        ? ((e = Td(e, o, l)), fn(e, r) || (jt = !0), e)
        : (Xr & 42) === 0
          ? ((jt = !0), (e.memoizedState = o))
          : ((e = Sg()), (Ie.lanes |= e), (aa |= e), r);
  }
  function xm(e, r, o, l, c) {
    var f = G.p;
    G.p = f !== 0 && 8 > f ? f : 8;
    var y = z.T,
      w = {};
    (z.T = w), Ld(e, !1, r, o);
    try {
      var S = c(),
        F = z.S;
      if (
        (F !== null && F(w, S), S !== null && typeof S == 'object' && typeof S.then == 'function')
      ) {
        var U = sk(S, l);
        Uo(e, r, U, yn(e));
      } else Uo(e, r, l, yn(e));
    } catch (K) {
      Uo(e, r, { then: function () {}, status: 'rejected', reason: K }, yn());
    } finally {
      (G.p = f), (z.T = y);
    }
  }
  function fk() {}
  function Rd(e, r, o, l) {
    if (e.tag !== 5) throw Error(i(476));
    var c = Sm(e).queue;
    xm(
      e,
      c,
      r,
      oe,
      o === null
        ? fk
        : function () {
            return _m(e), o(l);
          }
    );
  }
  function Sm(e) {
    var r = e.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: oe,
      baseState: oe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yr,
        lastRenderedState: oe,
      },
      next: null,
    };
    var o = {};
    return (
      (r.next = {
        memoizedState: o,
        baseState: o,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yr,
          lastRenderedState: o,
        },
        next: null,
      }),
      (e.memoizedState = r),
      (e = e.alternate),
      e !== null && (e.memoizedState = r),
      r
    );
  }
  function _m(e) {
    var r = Sm(e).next.queue;
    Uo(e, r, {}, yn());
  }
  function jd() {
    return Ut(ls);
  }
  function Cm() {
    return Nt().memoizedState;
  }
  function Nm() {
    return Nt().memoizedState;
  }
  function hk(e) {
    for (var r = e.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var o = yn();
          e = Hr(o);
          var l = Gr(r, e, o);
          l !== null && (vn(l, r, o), $o(l, r, o)), (r = { cache: cd() }), (e.payload = r);
          return;
      }
      r = r.return;
    }
  }
  function pk(e, r, o) {
    var l = yn();
    (o = { lane: l, revertLane: 0, action: o, hasEagerState: !1, eagerState: null, next: null }),
      Yl(e) ? Em(r, o) : ((o = ed(e, r, o, l)), o !== null && (vn(o, e, l), Dm(o, r, l)));
  }
  function Om(e, r, o) {
    var l = yn();
    Uo(e, r, o, l);
  }
  function Uo(e, r, o, l) {
    var c = { lane: l, revertLane: 0, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Yl(e)) Em(r, c);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = r.lastRenderedReducer), f !== null)
      )
        try {
          var y = r.lastRenderedState,
            w = f(y, o);
          if (((c.hasEagerState = !0), (c.eagerState = w), fn(w, y)))
            return Pl(e, r, c, 0), ct === null && Dl(), !1;
        } catch {
        } finally {
        }
      if (((o = ed(e, r, c, l)), o !== null)) return vn(o, e, l), Dm(o, r, l), !0;
    }
    return !1;
  }
  function Ld(e, r, o, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: pf(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Yl(e))
    ) {
      if (r) throw Error(i(479));
    } else (r = ed(e, o, l, 2)), r !== null && vn(r, e, 2);
  }
  function Yl(e) {
    var r = e.alternate;
    return e === Ie || (r !== null && r === Ie);
  }
  function Em(e, r) {
    Ti = zl = !0;
    var o = e.pending;
    o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)), (e.pending = r);
  }
  function Dm(e, r, o) {
    if ((o & 4194048) !== 0) {
      var l = r.lanes;
      (l &= e.pendingLanes), (o |= l), (r.lanes = o), ci(e, o);
    }
  }
  var Kl = {
      readContext: Ut,
      use: Bl,
      useCallback: vt,
      useContext: vt,
      useEffect: vt,
      useImperativeHandle: vt,
      useLayoutEffect: vt,
      useInsertionEffect: vt,
      useMemo: vt,
      useReducer: vt,
      useRef: vt,
      useState: vt,
      useDebugValue: vt,
      useDeferredValue: vt,
      useTransition: vt,
      useSyncExternalStore: vt,
      useId: vt,
      useHostTransitionStatus: vt,
      useFormState: vt,
      useActionState: vt,
      useOptimistic: vt,
      useMemoCache: vt,
      useCacheRefresh: vt,
    },
    Pm = {
      readContext: Ut,
      use: Bl,
      useCallback: function (e, r) {
        return (sn().memoizedState = [e, r === void 0 ? null : r]), e;
      },
      useContext: Ut,
      useEffect: hm,
      useImperativeHandle: function (e, r, o) {
        (o = o != null ? o.concat([e]) : null), ql(4194308, 4, ym.bind(null, r, e), o);
      },
      useLayoutEffect: function (e, r) {
        return ql(4194308, 4, e, r);
      },
      useInsertionEffect: function (e, r) {
        ql(4, 2, e, r);
      },
      useMemo: function (e, r) {
        var o = sn();
        r = r === void 0 ? null : r;
        var l = e();
        if (Wa) {
          je(!0);
          try {
            e();
          } finally {
            je(!1);
          }
        }
        return (o.memoizedState = [l, r]), l;
      },
      useReducer: function (e, r, o) {
        var l = sn();
        if (o !== void 0) {
          var c = o(r);
          if (Wa) {
            je(!0);
            try {
              o(r);
            } finally {
              je(!1);
            }
          }
        } else c = r;
        return (
          (l.memoizedState = l.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (l.queue = e),
          (e = e.dispatch = pk.bind(null, Ie, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var r = sn();
        return (e = { current: e }), (r.memoizedState = e);
      },
      useState: function (e) {
        e = Dd(e);
        var r = e.queue,
          o = Om.bind(null, Ie, r);
        return (r.dispatch = o), [e.memoizedState, o];
      },
      useDebugValue: Md,
      useDeferredValue: function (e, r) {
        var o = sn();
        return Td(o, e, r);
      },
      useTransition: function () {
        var e = Dd(!1);
        return (e = xm.bind(null, Ie, e.queue, !0, !1)), (sn().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, r, o) {
        var l = Ie,
          c = sn();
        if (Xe) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (((o = r()), ct === null)) throw Error(i(349));
          (qe & 124) !== 0 || Xp(l, r, o);
        }
        c.memoizedState = o;
        var f = { value: o, getSnapshot: r };
        return (
          (c.queue = f),
          hm(Qp.bind(null, l, f, e), [e]),
          (l.flags |= 2048),
          ji(9, Zl(), Jp.bind(null, l, f, o, r), null),
          o
        );
      },
      useId: function () {
        var e = sn(),
          r = ct.identifierPrefix;
        if (Xe) {
          var o = pr,
            l = hr;
          (o = (l & ~(1 << (32 - Ze(l) - 1))).toString(32) + o),
            (r = '«' + r + 'R' + o),
            (o = Vl++),
            0 < o && (r += 'H' + o.toString(32)),
            (r += '»');
        } else (o = lk++), (r = '«' + r + 'r' + o.toString(32) + '»');
        return (e.memoizedState = r);
      },
      useHostTransitionStatus: jd,
      useFormState: lm,
      useActionState: lm,
      useOptimistic: function (e) {
        var r = sn();
        r.memoizedState = r.baseState = e;
        var o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (r.queue = o), (r = Ld.bind(null, Ie, !0, o)), (o.dispatch = r), [e, r];
      },
      useMemoCache: Nd,
      useCacheRefresh: function () {
        return (sn().memoizedState = hk.bind(null, Ie));
      },
    },
    Mm = {
      readContext: Ut,
      use: Bl,
      useCallback: bm,
      useContext: Ut,
      useEffect: pm,
      useImperativeHandle: vm,
      useInsertionEffect: mm,
      useLayoutEffect: gm,
      useMemo: wm,
      useReducer: Ul,
      useRef: fm,
      useState: function () {
        return Ul(yr);
      },
      useDebugValue: Md,
      useDeferredValue: function (e, r) {
        var o = Nt();
        return km(o, at.memoizedState, e, r);
      },
      useTransition: function () {
        var e = Ul(yr)[0],
          r = Nt().memoizedState;
        return [typeof e == 'boolean' ? e : Vo(e), r];
      },
      useSyncExternalStore: Gp,
      useId: Cm,
      useHostTransitionStatus: jd,
      useFormState: um,
      useActionState: um,
      useOptimistic: function (e, r) {
        var o = Nt();
        return nm(o, at, e, r);
      },
      useMemoCache: Nd,
      useCacheRefresh: Nm,
    },
    mk = {
      readContext: Ut,
      use: Bl,
      useCallback: bm,
      useContext: Ut,
      useEffect: pm,
      useImperativeHandle: vm,
      useInsertionEffect: mm,
      useLayoutEffect: gm,
      useMemo: wm,
      useReducer: Ed,
      useRef: fm,
      useState: function () {
        return Ed(yr);
      },
      useDebugValue: Md,
      useDeferredValue: function (e, r) {
        var o = Nt();
        return at === null ? Td(o, e, r) : km(o, at.memoizedState, e, r);
      },
      useTransition: function () {
        var e = Ed(yr)[0],
          r = Nt().memoizedState;
        return [typeof e == 'boolean' ? e : Vo(e), r];
      },
      useSyncExternalStore: Gp,
      useId: Cm,
      useHostTransitionStatus: jd,
      useFormState: dm,
      useActionState: dm,
      useOptimistic: function (e, r) {
        var o = Nt();
        return at !== null ? nm(o, at, e, r) : ((o.baseState = e), [e, o.queue.dispatch]);
      },
      useMemoCache: Nd,
      useCacheRefresh: Nm,
    },
    Li = null,
    Zo = 0;
  function Hl(e) {
    var r = Zo;
    return (Zo += 1), Li === null && (Li = []), Vp(Li, e, r);
  }
  function qo(e, r) {
    (r = r.props.ref), (e.ref = r !== void 0 ? r : null);
  }
  function Gl(e, r) {
    throw r.$$typeof === b
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(r)),
        Error(
          i(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(r).join(', ') + '}' : e
          )
        ));
  }
  function Tm(e) {
    var r = e._init;
    return r(e._payload);
  }
  function Rm(e) {
    function r(R, P) {
      if (e) {
        var L = R.deletions;
        L === null ? ((R.deletions = [P]), (R.flags |= 16)) : L.push(P);
      }
    }
    function o(R, P) {
      if (!e) return null;
      for (; P !== null; ) r(R, P), (P = P.sibling);
      return null;
    }
    function l(R) {
      for (var P = new Map(); R !== null; )
        R.key !== null ? P.set(R.key, R) : P.set(R.index, R), (R = R.sibling);
      return P;
    }
    function c(R, P) {
      return (R = fr(R, P)), (R.index = 0), (R.sibling = null), R;
    }
    function f(R, P, L) {
      return (
        (R.index = L),
        e
          ? ((L = R.alternate),
            L !== null
              ? ((L = L.index), L < P ? ((R.flags |= 67108866), P) : L)
              : ((R.flags |= 67108866), P))
          : ((R.flags |= 1048576), P)
      );
    }
    function y(R) {
      return e && R.alternate === null && (R.flags |= 67108866), R;
    }
    function w(R, P, L, Z) {
      return P === null || P.tag !== 6
        ? ((P = nd(L, R.mode, Z)), (P.return = R), P)
        : ((P = c(P, L)), (P.return = R), P);
    }
    function S(R, P, L, Z) {
      var pe = L.type;
      return pe === x
        ? U(R, P, L.props.children, Z, L.key)
        : P !== null &&
            (P.elementType === pe ||
              (typeof pe == 'object' && pe !== null && pe.$$typeof === H && Tm(pe) === P.type))
          ? ((P = c(P, L.props)), qo(P, L), (P.return = R), P)
          : ((P = Tl(L.type, L.key, L.props, null, R.mode, Z)), qo(P, L), (P.return = R), P);
    }
    function F(R, P, L, Z) {
      return P === null ||
        P.tag !== 4 ||
        P.stateNode.containerInfo !== L.containerInfo ||
        P.stateNode.implementation !== L.implementation
        ? ((P = rd(L, R.mode, Z)), (P.return = R), P)
        : ((P = c(P, L.children || [])), (P.return = R), P);
    }
    function U(R, P, L, Z, pe) {
      return P === null || P.tag !== 7
        ? ((P = Ta(L, R.mode, Z, pe)), (P.return = R), P)
        : ((P = c(P, L)), (P.return = R), P);
    }
    function K(R, P, L) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return (P = nd('' + P, R.mode, L)), (P.return = R), P;
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case v:
            return (L = Tl(P.type, P.key, P.props, null, R.mode, L)), qo(L, P), (L.return = R), L;
          case E:
            return (P = rd(P, R.mode, L)), (P.return = R), P;
          case H:
            var Z = P._init;
            return (P = Z(P._payload)), K(R, P, L);
        }
        if (Ne(P) || ce(P)) return (P = Ta(P, R.mode, L, null)), (P.return = R), P;
        if (typeof P.then == 'function') return K(R, Hl(P), L);
        if (P.$$typeof === M) return K(R, Fl(R, P), L);
        Gl(R, P);
      }
      return null;
    }
    function $(R, P, L, Z) {
      var pe = P !== null ? P.key : null;
      if ((typeof L == 'string' && L !== '') || typeof L == 'number' || typeof L == 'bigint')
        return pe !== null ? null : w(R, P, '' + L, Z);
      if (typeof L == 'object' && L !== null) {
        switch (L.$$typeof) {
          case v:
            return L.key === pe ? S(R, P, L, Z) : null;
          case E:
            return L.key === pe ? F(R, P, L, Z) : null;
          case H:
            return (pe = L._init), (L = pe(L._payload)), $(R, P, L, Z);
        }
        if (Ne(L) || ce(L)) return pe !== null ? null : U(R, P, L, Z, null);
        if (typeof L.then == 'function') return $(R, P, Hl(L), Z);
        if (L.$$typeof === M) return $(R, P, Fl(R, L), Z);
        Gl(R, L);
      }
      return null;
    }
    function W(R, P, L, Z, pe) {
      if ((typeof Z == 'string' && Z !== '') || typeof Z == 'number' || typeof Z == 'bigint')
        return (R = R.get(L) || null), w(P, R, '' + Z, pe);
      if (typeof Z == 'object' && Z !== null) {
        switch (Z.$$typeof) {
          case v:
            return (R = R.get(Z.key === null ? L : Z.key) || null), S(P, R, Z, pe);
          case E:
            return (R = R.get(Z.key === null ? L : Z.key) || null), F(P, R, Z, pe);
          case H:
            var ze = Z._init;
            return (Z = ze(Z._payload)), W(R, P, L, Z, pe);
        }
        if (Ne(Z) || ce(Z)) return (R = R.get(L) || null), U(P, R, Z, pe, null);
        if (typeof Z.then == 'function') return W(R, P, L, Hl(Z), pe);
        if (Z.$$typeof === M) return W(R, P, L, Fl(P, Z), pe);
        Gl(P, Z);
      }
      return null;
    }
    function Oe(R, P, L, Z) {
      for (
        var pe = null, ze = null, ye = P, Se = (P = 0), Ft = null;
        ye !== null && Se < L.length;
        Se++
      ) {
        ye.index > Se ? ((Ft = ye), (ye = null)) : (Ft = ye.sibling);
        var He = $(R, ye, L[Se], Z);
        if (He === null) {
          ye === null && (ye = Ft);
          break;
        }
        e && ye && He.alternate === null && r(R, ye),
          (P = f(He, P, Se)),
          ze === null ? (pe = He) : (ze.sibling = He),
          (ze = He),
          (ye = Ft);
      }
      if (Se === L.length) return o(R, ye), Xe && ja(R, Se), pe;
      if (ye === null) {
        for (; Se < L.length; Se++)
          (ye = K(R, L[Se], Z)),
            ye !== null &&
              ((P = f(ye, P, Se)), ze === null ? (pe = ye) : (ze.sibling = ye), (ze = ye));
        return Xe && ja(R, Se), pe;
      }
      for (ye = l(ye); Se < L.length; Se++)
        (Ft = W(ye, R, Se, L[Se], Z)),
          Ft !== null &&
            (e && Ft.alternate !== null && ye.delete(Ft.key === null ? Se : Ft.key),
            (P = f(Ft, P, Se)),
            ze === null ? (pe = Ft) : (ze.sibling = Ft),
            (ze = Ft));
      return (
        e &&
          ye.forEach(function (ha) {
            return r(R, ha);
          }),
        Xe && ja(R, Se),
        pe
      );
    }
    function xe(R, P, L, Z) {
      if (L == null) throw Error(i(151));
      for (
        var pe = null, ze = null, ye = P, Se = (P = 0), Ft = null, He = L.next();
        ye !== null && !He.done;
        Se++, He = L.next()
      ) {
        ye.index > Se ? ((Ft = ye), (ye = null)) : (Ft = ye.sibling);
        var ha = $(R, ye, He.value, Z);
        if (ha === null) {
          ye === null && (ye = Ft);
          break;
        }
        e && ye && ha.alternate === null && r(R, ye),
          (P = f(ha, P, Se)),
          ze === null ? (pe = ha) : (ze.sibling = ha),
          (ze = ha),
          (ye = Ft);
      }
      if (He.done) return o(R, ye), Xe && ja(R, Se), pe;
      if (ye === null) {
        for (; !He.done; Se++, He = L.next())
          (He = K(R, He.value, Z)),
            He !== null &&
              ((P = f(He, P, Se)), ze === null ? (pe = He) : (ze.sibling = He), (ze = He));
        return Xe && ja(R, Se), pe;
      }
      for (ye = l(ye); !He.done; Se++, He = L.next())
        (He = W(ye, R, Se, He.value, Z)),
          He !== null &&
            (e && He.alternate !== null && ye.delete(He.key === null ? Se : He.key),
            (P = f(He, P, Se)),
            ze === null ? (pe = He) : (ze.sibling = He),
            (ze = He));
      return (
        e &&
          ye.forEach(function (gx) {
            return r(R, gx);
          }),
        Xe && ja(R, Se),
        pe
      );
    }
    function ot(R, P, L, Z) {
      if (
        (typeof L == 'object' &&
          L !== null &&
          L.type === x &&
          L.key === null &&
          (L = L.props.children),
        typeof L == 'object' && L !== null)
      ) {
        switch (L.$$typeof) {
          case v:
            e: {
              for (var pe = L.key; P !== null; ) {
                if (P.key === pe) {
                  if (((pe = L.type), pe === x)) {
                    if (P.tag === 7) {
                      o(R, P.sibling), (Z = c(P, L.props.children)), (Z.return = R), (R = Z);
                      break e;
                    }
                  } else if (
                    P.elementType === pe ||
                    (typeof pe == 'object' && pe !== null && pe.$$typeof === H && Tm(pe) === P.type)
                  ) {
                    o(R, P.sibling), (Z = c(P, L.props)), qo(Z, L), (Z.return = R), (R = Z);
                    break e;
                  }
                  o(R, P);
                  break;
                } else r(R, P);
                P = P.sibling;
              }
              L.type === x
                ? ((Z = Ta(L.props.children, R.mode, Z, L.key)), (Z.return = R), (R = Z))
                : ((Z = Tl(L.type, L.key, L.props, null, R.mode, Z)),
                  qo(Z, L),
                  (Z.return = R),
                  (R = Z));
            }
            return y(R);
          case E:
            e: {
              for (pe = L.key; P !== null; ) {
                if (P.key === pe)
                  if (
                    P.tag === 4 &&
                    P.stateNode.containerInfo === L.containerInfo &&
                    P.stateNode.implementation === L.implementation
                  ) {
                    o(R, P.sibling), (Z = c(P, L.children || [])), (Z.return = R), (R = Z);
                    break e;
                  } else {
                    o(R, P);
                    break;
                  }
                else r(R, P);
                P = P.sibling;
              }
              (Z = rd(L, R.mode, Z)), (Z.return = R), (R = Z);
            }
            return y(R);
          case H:
            return (pe = L._init), (L = pe(L._payload)), ot(R, P, L, Z);
        }
        if (Ne(L)) return Oe(R, P, L, Z);
        if (ce(L)) {
          if (((pe = ce(L)), typeof pe != 'function')) throw Error(i(150));
          return (L = pe.call(L)), xe(R, P, L, Z);
        }
        if (typeof L.then == 'function') return ot(R, P, Hl(L), Z);
        if (L.$$typeof === M) return ot(R, P, Fl(R, L), Z);
        Gl(R, L);
      }
      return (typeof L == 'string' && L !== '') || typeof L == 'number' || typeof L == 'bigint'
        ? ((L = '' + L),
          P !== null && P.tag === 6
            ? (o(R, P.sibling), (Z = c(P, L)), (Z.return = R), (R = Z))
            : (o(R, P), (Z = nd(L, R.mode, Z)), (Z.return = R), (R = Z)),
          y(R))
        : o(R, P);
    }
    return function (R, P, L, Z) {
      try {
        Zo = 0;
        var pe = ot(R, P, L, Z);
        return (Li = null), pe;
      } catch (ye) {
        if (ye === Fo || ye === $l) throw ye;
        var ze = hn(29, ye, null, R.mode);
        return (ze.lanes = Z), (ze.return = R), ze;
      } finally {
      }
    };
  }
  var Fi = Rm(!0),
    jm = Rm(!1),
    Dn = Y(null),
    vr = null;
  function Jr(e) {
    var r = e.alternate;
    re(Dt, Dt.current & 1),
      re(Dn, e),
      vr === null && (r === null || Mi.current !== null || r.memoizedState !== null) && (vr = e);
  }
  function Lm(e) {
    if (e.tag === 22) {
      if ((re(Dt, Dt.current), re(Dn, e), vr === null)) {
        var r = e.alternate;
        r !== null && r.memoizedState !== null && (vr = e);
      }
    } else Qr();
  }
  function Qr() {
    re(Dt, Dt.current), re(Dn, Dn.current);
  }
  function br(e) {
    se(Dn), vr === e && (vr = null), se(Dt);
  }
  var Dt = Y(0);
  function Xl(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && ((o = o.dehydrated), o === null || o.data === '$?' || Nf(o))) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  function Fd(e, r, o, l) {
    (r = e.memoizedState),
      (o = o(l, r)),
      (o = o == null ? r : g({}, r, o)),
      (e.memoizedState = o),
      e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var Ad = {
    enqueueSetState: function (e, r, o) {
      e = e._reactInternals;
      var l = yn(),
        c = Hr(l);
      (c.payload = r),
        o != null && (c.callback = o),
        (r = Gr(e, c, l)),
        r !== null && (vn(r, e, l), $o(r, e, l));
    },
    enqueueReplaceState: function (e, r, o) {
      e = e._reactInternals;
      var l = yn(),
        c = Hr(l);
      (c.tag = 1),
        (c.payload = r),
        o != null && (c.callback = o),
        (r = Gr(e, c, l)),
        r !== null && (vn(r, e, l), $o(r, e, l));
    },
    enqueueForceUpdate: function (e, r) {
      e = e._reactInternals;
      var o = yn(),
        l = Hr(o);
      (l.tag = 2),
        r != null && (l.callback = r),
        (r = Gr(e, l, o)),
        r !== null && (vn(r, e, o), $o(r, e, o));
    },
  };
  function Fm(e, r, o, l, c, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, f, y)
        : r.prototype && r.prototype.isPureReactComponent
          ? !Eo(o, l) || !Eo(c, f)
          : !0
    );
  }
  function Am(e, r, o, l) {
    (e = r.state),
      typeof r.componentWillReceiveProps == 'function' && r.componentWillReceiveProps(o, l),
      typeof r.UNSAFE_componentWillReceiveProps == 'function' &&
        r.UNSAFE_componentWillReceiveProps(o, l),
      r.state !== e && Ad.enqueueReplaceState(r, r.state, null);
  }
  function za(e, r) {
    var o = r;
    if ('ref' in r) {
      o = {};
      for (var l in r) l !== 'ref' && (o[l] = r[l]);
    }
    if ((e = e.defaultProps)) {
      o === r && (o = g({}, o));
      for (var c in e) o[c] === void 0 && (o[c] = e[c]);
    }
    return o;
  }
  var Jl =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var r = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(r)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function $m(e) {
    Jl(e);
  }
  function Im(e) {
    console.error(e);
  }
  function Wm(e) {
    Jl(e);
  }
  function Ql(e, r) {
    try {
      var o = e.onUncaughtError;
      o(r.value, { componentStack: r.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function zm(e, r, o) {
    try {
      var l = e.onCaughtError;
      l(o.value, { componentStack: o.stack, errorBoundary: r.tag === 1 ? r.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function $d(e, r, o) {
    return (
      (o = Hr(o)),
      (o.tag = 3),
      (o.payload = { element: null }),
      (o.callback = function () {
        Ql(e, r);
      }),
      o
    );
  }
  function Vm(e) {
    return (e = Hr(e)), (e.tag = 3), e;
  }
  function Bm(e, r, o, l) {
    var c = o.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var f = l.value;
      (e.payload = function () {
        return c(f);
      }),
        (e.callback = function () {
          zm(r, o, l);
        });
    }
    var y = o.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (e.callback = function () {
        zm(r, o, l),
          typeof c != 'function' && (ia === null ? (ia = new Set([this])) : ia.add(this));
        var w = l.stack;
        this.componentDidCatch(l.value, { componentStack: w !== null ? w : '' });
      });
  }
  function gk(e, r, o, l, c) {
    if (((o.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((r = o.alternate), r !== null && Ro(r, o, c, !0), (o = Dn.current), o !== null)) {
        switch (o.tag) {
          case 13:
            return (
              vr === null ? uf() : o.alternate === null && yt === 0 && (yt = 3),
              (o.flags &= -257),
              (o.flags |= 65536),
              (o.lanes = c),
              l === hd
                ? (o.flags |= 16384)
                : ((r = o.updateQueue),
                  r === null ? (o.updateQueue = new Set([l])) : r.add(l),
                  df(e, l, c)),
              !1
            );
          case 22:
            return (
              (o.flags |= 65536),
              l === hd
                ? (o.flags |= 16384)
                : ((r = o.updateQueue),
                  r === null
                    ? ((r = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (o.updateQueue = r))
                    : ((o = r.retryQueue), o === null ? (r.retryQueue = new Set([l])) : o.add(l)),
                  df(e, l, c)),
              !1
            );
        }
        throw Error(i(435, o.tag));
      }
      return df(e, l, c), uf(), !1;
    }
    if (Xe)
      return (
        (r = Dn.current),
        r !== null
          ? ((r.flags & 65536) === 0 && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = c),
            l !== od && ((e = Error(i(422), { cause: l })), To(Cn(e, o))))
          : (l !== od && ((r = Error(i(423), { cause: l })), To(Cn(r, o))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = Cn(l, o)),
            (c = $d(e.stateNode, l, c)),
            gd(e, c),
            yt !== 4 && (yt = 2)),
        !1
      );
    var f = Error(i(520), { cause: l });
    if (((f = Cn(f, o)), Qo === null ? (Qo = [f]) : Qo.push(f), yt !== 4 && (yt = 2), r === null))
      return !0;
    (l = Cn(l, o)), (o = r);
    do {
      switch (o.tag) {
        case 3:
          return (
            (o.flags |= 65536),
            (e = c & -c),
            (o.lanes |= e),
            (e = $d(o.stateNode, l, e)),
            gd(o, e),
            !1
          );
        case 1:
          if (
            ((r = o.type),
            (f = o.stateNode),
            (o.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == 'function' ||
                (f !== null &&
                  typeof f.componentDidCatch == 'function' &&
                  (ia === null || !ia.has(f)))))
          )
            return (
              (o.flags |= 65536),
              (c &= -c),
              (o.lanes |= c),
              (c = Vm(c)),
              Bm(c, e, o, l),
              gd(o, c),
              !1
            );
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var Um = Error(i(461)),
    jt = !1;
  function At(e, r, o, l) {
    r.child = e === null ? jm(r, null, o, l) : Fi(r, e.child, o, l);
  }
  function Zm(e, r, o, l, c) {
    o = o.render;
    var f = r.ref;
    if ('ref' in l) {
      var y = {};
      for (var w in l) w !== 'ref' && (y[w] = l[w]);
    } else y = l;
    return (
      $a(r),
      (l = kd(e, r, o, y, f, c)),
      (w = xd()),
      e !== null && !jt
        ? (Sd(e, r, c), wr(e, r, c))
        : (Xe && w && ad(r), (r.flags |= 1), At(e, r, l, c), r.child)
    );
  }
  function qm(e, r, o, l, c) {
    if (e === null) {
      var f = o.type;
      return typeof f == 'function' && !td(f) && f.defaultProps === void 0 && o.compare === null
        ? ((r.tag = 15), (r.type = f), Ym(e, r, f, l, c))
        : ((e = Tl(o.type, null, l, r, r.mode, c)), (e.ref = r.ref), (e.return = r), (r.child = e));
    }
    if (((f = e.child), !qd(e, c))) {
      var y = f.memoizedProps;
      if (((o = o.compare), (o = o !== null ? o : Eo), o(y, l) && e.ref === r.ref))
        return wr(e, r, c);
    }
    return (r.flags |= 1), (e = fr(f, l)), (e.ref = r.ref), (e.return = r), (r.child = e);
  }
  function Ym(e, r, o, l, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Eo(f, l) && e.ref === r.ref)
        if (((jt = !1), (r.pendingProps = l = f), qd(e, c))) (e.flags & 131072) !== 0 && (jt = !0);
        else return (r.lanes = e.lanes), wr(e, r, c);
    }
    return Id(e, r, o, l, c);
  }
  function Km(e, r, o) {
    var l = r.pendingProps,
      c = l.children,
      f = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((r.flags & 128) !== 0) {
        if (((l = f !== null ? f.baseLanes | o : o), e !== null)) {
          for (c = r.child = e.child, f = 0; c !== null; )
            (f = f | c.lanes | c.childLanes), (c = c.sibling);
          r.childLanes = f & ~l;
        } else (r.childLanes = 0), (r.child = null);
        return Hm(e, r, l, o);
      }
      if ((o & 536870912) !== 0)
        (r.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Al(r, f !== null ? f.cachePool : null),
          f !== null ? Yp(r, f) : vd(),
          Lm(r);
      else
        return (r.lanes = r.childLanes = 536870912), Hm(e, r, f !== null ? f.baseLanes | o : o, o);
    } else
      f !== null
        ? (Al(r, f.cachePool), Yp(r, f), Qr(), (r.memoizedState = null))
        : (e !== null && Al(r, null), vd(), Qr());
    return At(e, r, c, o), r.child;
  }
  function Hm(e, r, o, l) {
    var c = fd();
    return (
      (c = c === null ? null : { parent: Et._currentValue, pool: c }),
      (r.memoizedState = { baseLanes: o, cachePool: c }),
      e !== null && Al(r, null),
      vd(),
      Lm(r),
      e !== null && Ro(e, r, l, !0),
      null
    );
  }
  function eu(e, r) {
    var o = r.ref;
    if (o === null) e !== null && e.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof o != 'function' && typeof o != 'object') throw Error(i(284));
      (e === null || e.ref !== o) && (r.flags |= 4194816);
    }
  }
  function Id(e, r, o, l, c) {
    return (
      $a(r),
      (o = kd(e, r, o, l, void 0, c)),
      (l = xd()),
      e !== null && !jt
        ? (Sd(e, r, c), wr(e, r, c))
        : (Xe && l && ad(r), (r.flags |= 1), At(e, r, o, c), r.child)
    );
  }
  function Gm(e, r, o, l, c, f) {
    return (
      $a(r),
      (r.updateQueue = null),
      (o = Hp(r, l, o, c)),
      Kp(e),
      (l = xd()),
      e !== null && !jt
        ? (Sd(e, r, f), wr(e, r, f))
        : (Xe && l && ad(r), (r.flags |= 1), At(e, r, o, f), r.child)
    );
  }
  function Xm(e, r, o, l, c) {
    if (($a(r), r.stateNode === null)) {
      var f = Ni,
        y = o.contextType;
      typeof y == 'object' && y !== null && (f = Ut(y)),
        (f = new o(l, f)),
        (r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Ad),
        (r.stateNode = f),
        (f._reactInternals = r),
        (f = r.stateNode),
        (f.props = l),
        (f.state = r.memoizedState),
        (f.refs = {}),
        pd(r),
        (y = o.contextType),
        (f.context = typeof y == 'object' && y !== null ? Ut(y) : Ni),
        (f.state = r.memoizedState),
        (y = o.getDerivedStateFromProps),
        typeof y == 'function' && (Fd(r, o, y, l), (f.state = r.memoizedState)),
        typeof o.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' &&
            typeof f.componentWillMount != 'function') ||
          ((y = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' && f.UNSAFE_componentWillMount(),
          y !== f.state && Ad.enqueueReplaceState(f, f.state, null),
          Wo(r, l, f, c),
          Io(),
          (f.state = r.memoizedState)),
        typeof f.componentDidMount == 'function' && (r.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      f = r.stateNode;
      var w = r.memoizedProps,
        S = za(o, w);
      f.props = S;
      var F = f.context,
        U = o.contextType;
      (y = Ni), typeof U == 'object' && U !== null && (y = Ut(U));
      var K = o.getDerivedStateFromProps;
      (U = typeof K == 'function' || typeof f.getSnapshotBeforeUpdate == 'function'),
        (w = r.pendingProps !== w),
        U ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((w || F !== y) && Am(r, f, l, y)),
        (Kr = !1);
      var $ = r.memoizedState;
      (f.state = $),
        Wo(r, l, f, c),
        Io(),
        (F = r.memoizedState),
        w || $ !== F || Kr
          ? (typeof K == 'function' && (Fd(r, o, K, l), (F = r.memoizedState)),
            (S = Kr || Fm(r, o, S, l, $, F, y))
              ? (U ||
                  (typeof f.UNSAFE_componentWillMount != 'function' &&
                    typeof f.componentWillMount != 'function') ||
                  (typeof f.componentWillMount == 'function' && f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == 'function' && (r.flags |= 4194308))
              : (typeof f.componentDidMount == 'function' && (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = F)),
            (f.props = l),
            (f.state = F),
            (f.context = y),
            (l = S))
          : (typeof f.componentDidMount == 'function' && (r.flags |= 4194308), (l = !1));
    } else {
      (f = r.stateNode),
        md(e, r),
        (y = r.memoizedProps),
        (U = za(o, y)),
        (f.props = U),
        (K = r.pendingProps),
        ($ = f.context),
        (F = o.contextType),
        (S = Ni),
        typeof F == 'object' && F !== null && (S = Ut(F)),
        (w = o.getDerivedStateFromProps),
        (F = typeof w == 'function' || typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((y !== K || $ !== S) && Am(r, f, l, S)),
        (Kr = !1),
        ($ = r.memoizedState),
        (f.state = $),
        Wo(r, l, f, c),
        Io();
      var W = r.memoizedState;
      y !== K || $ !== W || Kr || (e !== null && e.dependencies !== null && Ll(e.dependencies))
        ? (typeof w == 'function' && (Fd(r, o, w, l), (W = r.memoizedState)),
          (U =
            Kr ||
            Fm(r, o, U, l, $, W, S) ||
            (e !== null && e.dependencies !== null && Ll(e.dependencies)))
            ? (F ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                  typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' && f.componentWillUpdate(l, W, S),
                typeof f.UNSAFE_componentWillUpdate == 'function' &&
                  f.UNSAFE_componentWillUpdate(l, W, S)),
              typeof f.componentDidUpdate == 'function' && (r.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' && (r.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && $ === e.memoizedState) ||
                (r.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && $ === e.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = W)),
          (f.props = l),
          (f.state = W),
          (f.context = S),
          (l = U))
        : (typeof f.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && $ === e.memoizedState) ||
            (r.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && $ === e.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      eu(e, r),
      (l = (r.flags & 128) !== 0),
      f || l
        ? ((f = r.stateNode),
          (o = l && typeof o.getDerivedStateFromError != 'function' ? null : f.render()),
          (r.flags |= 1),
          e !== null && l
            ? ((r.child = Fi(r, e.child, null, c)), (r.child = Fi(r, null, o, c)))
            : At(e, r, o, c),
          (r.memoizedState = f.state),
          (e = r.child))
        : (e = wr(e, r, c)),
      e
    );
  }
  function Jm(e, r, o, l) {
    return Mo(), (r.flags |= 256), At(e, r, o, l), r.child;
  }
  var Wd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function zd(e) {
    return { baseLanes: e, cachePool: Ip() };
  }
  function Vd(e, r, o) {
    return (e = e !== null ? e.childLanes & ~o : 0), r && (e |= Pn), e;
  }
  function Qm(e, r, o) {
    var l = r.pendingProps,
      c = !1,
      f = (r.flags & 128) !== 0,
      y;
    if (
      ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (Dt.current & 2) !== 0),
      y && ((c = !0), (r.flags &= -129)),
      (y = (r.flags & 32) !== 0),
      (r.flags &= -33),
      e === null)
    ) {
      if (Xe) {
        if ((c ? Jr(r) : Qr(), Xe)) {
          var w = gt,
            S;
          if ((S = w)) {
            e: {
              for (S = w, w = qn; S.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (((S = Ln(S.nextSibling)), S === null)) {
                  w = null;
                  break e;
                }
              }
              w = S;
            }
            w !== null
              ? ((r.memoizedState = {
                  dehydrated: w,
                  treeContext: Ra !== null ? { id: hr, overflow: pr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = hn(18, null, null, 0)),
                (S.stateNode = w),
                (S.return = r),
                (r.child = S),
                (Ht = r),
                (gt = null),
                (S = !0))
              : (S = !1);
          }
          S || Fa(r);
        }
        if (((w = r.memoizedState), w !== null && ((w = w.dehydrated), w !== null)))
          return Nf(w) ? (r.lanes = 32) : (r.lanes = 536870912), null;
        br(r);
      }
      return (
        (w = l.children),
        (l = l.fallback),
        c
          ? (Qr(),
            (c = r.mode),
            (w = tu({ mode: 'hidden', children: w }, c)),
            (l = Ta(l, c, o, null)),
            (w.return = r),
            (l.return = r),
            (w.sibling = l),
            (r.child = w),
            (c = r.child),
            (c.memoizedState = zd(o)),
            (c.childLanes = Vd(e, y, o)),
            (r.memoizedState = Wd),
            l)
          : (Jr(r), Bd(r, w))
      );
    }
    if (((S = e.memoizedState), S !== null && ((w = S.dehydrated), w !== null))) {
      if (f)
        r.flags & 256
          ? (Jr(r), (r.flags &= -257), (r = Ud(e, r, o)))
          : r.memoizedState !== null
            ? (Qr(), (r.child = e.child), (r.flags |= 128), (r = null))
            : (Qr(),
              (c = l.fallback),
              (w = r.mode),
              (l = tu({ mode: 'visible', children: l.children }, w)),
              (c = Ta(c, w, o, null)),
              (c.flags |= 2),
              (l.return = r),
              (c.return = r),
              (l.sibling = c),
              (r.child = l),
              Fi(r, e.child, null, o),
              (l = r.child),
              (l.memoizedState = zd(o)),
              (l.childLanes = Vd(e, y, o)),
              (r.memoizedState = Wd),
              (r = c));
      else if ((Jr(r), Nf(w))) {
        if (((y = w.nextSibling && w.nextSibling.dataset), y)) var F = y.dgst;
        (y = F),
          (l = Error(i(419))),
          (l.stack = ''),
          (l.digest = y),
          To({ value: l, source: null, stack: null }),
          (r = Ud(e, r, o));
      } else if ((jt || Ro(e, r, o, !1), (y = (o & e.childLanes) !== 0), jt || y)) {
        if (
          ((y = ct),
          y !== null &&
            ((l = o & -o),
            (l = (l & 42) !== 0 ? 1 : Oa(l)),
            (l = (l & (y.suspendedLanes | o)) !== 0 ? 0 : l),
            l !== 0 && l !== S.retryLane))
        )
          throw ((S.retryLane = l), Ci(e, l), vn(y, e, l), Um);
        w.data === '$?' || uf(), (r = Ud(e, r, o));
      } else
        w.data === '$?'
          ? ((r.flags |= 192), (r.child = e.child), (r = null))
          : ((e = S.treeContext),
            (gt = Ln(w.nextSibling)),
            (Ht = r),
            (Xe = !0),
            (La = null),
            (qn = !1),
            e !== null &&
              ((On[En++] = hr),
              (On[En++] = pr),
              (On[En++] = Ra),
              (hr = e.id),
              (pr = e.overflow),
              (Ra = r)),
            (r = Bd(r, l.children)),
            (r.flags |= 4096));
      return r;
    }
    return c
      ? (Qr(),
        (c = l.fallback),
        (w = r.mode),
        (S = e.child),
        (F = S.sibling),
        (l = fr(S, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        F !== null ? (c = fr(F, c)) : ((c = Ta(c, w, o, null)), (c.flags |= 2)),
        (c.return = r),
        (l.return = r),
        (l.sibling = c),
        (r.child = l),
        (l = c),
        (c = r.child),
        (w = e.child.memoizedState),
        w === null
          ? (w = zd(o))
          : ((S = w.cachePool),
            S !== null
              ? ((F = Et._currentValue), (S = S.parent !== F ? { parent: F, pool: F } : S))
              : (S = Ip()),
            (w = { baseLanes: w.baseLanes | o, cachePool: S })),
        (c.memoizedState = w),
        (c.childLanes = Vd(e, y, o)),
        (r.memoizedState = Wd),
        l)
      : (Jr(r),
        (o = e.child),
        (e = o.sibling),
        (o = fr(o, { mode: 'visible', children: l.children })),
        (o.return = r),
        (o.sibling = null),
        e !== null &&
          ((y = r.deletions), y === null ? ((r.deletions = [e]), (r.flags |= 16)) : y.push(e)),
        (r.child = o),
        (r.memoizedState = null),
        o);
  }
  function Bd(e, r) {
    return (r = tu({ mode: 'visible', children: r }, e.mode)), (r.return = e), (e.child = r);
  }
  function tu(e, r) {
    return (
      (e = hn(22, e, null, r)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ud(e, r, o) {
    return (
      Fi(r, e.child, null, o),
      (e = Bd(r, r.pendingProps.children)),
      (e.flags |= 2),
      (r.memoizedState = null),
      e
    );
  }
  function eg(e, r, o) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r), ld(e.return, r, o);
  }
  function Zd(e, r, o, l, c) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: c,
        })
      : ((f.isBackwards = r),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = o),
        (f.tailMode = c));
  }
  function tg(e, r, o) {
    var l = r.pendingProps,
      c = l.revealOrder,
      f = l.tail;
    if ((At(e, r, l.children, o), (l = Dt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = r.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && eg(e, o, r);
          else if (e.tag === 19) eg(e, o, r);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === r) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === r) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((re(Dt, l), c)) {
      case 'forwards':
        for (o = r.child, c = null; o !== null; )
          (e = o.alternate), e !== null && Xl(e) === null && (c = o), (o = o.sibling);
        (o = c),
          o === null ? ((c = r.child), (r.child = null)) : ((c = o.sibling), (o.sibling = null)),
          Zd(r, !1, c, o, f);
        break;
      case 'backwards':
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Xl(e) === null)) {
            r.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = o), (o = c), (c = e);
        }
        Zd(r, !0, o, null, f);
        break;
      case 'together':
        Zd(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function wr(e, r, o) {
    if (
      (e !== null && (r.dependencies = e.dependencies), (aa |= r.lanes), (o & r.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ro(e, r, o, !1), (o & r.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && r.child !== e.child) throw Error(i(153));
    if (r.child !== null) {
      for (e = r.child, o = fr(e, e.pendingProps), r.child = o, o.return = r; e.sibling !== null; )
        (e = e.sibling), (o = o.sibling = fr(e, e.pendingProps)), (o.return = r);
      o.sibling = null;
    }
    return r.child;
  }
  function qd(e, r) {
    return (e.lanes & r) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Ll(e)));
  }
  function yk(e, r, o) {
    switch (r.tag) {
      case 3:
        rt(r, r.stateNode.containerInfo), Yr(r, Et, e.memoizedState.cache), Mo();
        break;
      case 27:
      case 5:
        Vr(r);
        break;
      case 4:
        rt(r, r.stateNode.containerInfo);
        break;
      case 10:
        Yr(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var l = r.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Jr(r), (r.flags |= 128), null)
            : (o & r.child.childLanes) !== 0
              ? Qm(e, r, o)
              : (Jr(r), (e = wr(e, r, o)), e !== null ? e.sibling : null);
        Jr(r);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((l = (o & r.childLanes) !== 0),
          l || (Ro(e, r, o, !1), (l = (o & r.childLanes) !== 0)),
          c)
        ) {
          if (l) return tg(e, r, o);
          r.flags |= 128;
        }
        if (
          ((c = r.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          re(Dt, Dt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), Km(e, r, o);
      case 24:
        Yr(r, Et, e.memoizedState.cache);
    }
    return wr(e, r, o);
  }
  function ng(e, r, o) {
    if (e !== null)
      if (e.memoizedProps !== r.pendingProps) jt = !0;
      else {
        if (!qd(e, o) && (r.flags & 128) === 0) return (jt = !1), yk(e, r, o);
        jt = (e.flags & 131072) !== 0;
      }
    else (jt = !1), Xe && (r.flags & 1048576) !== 0 && Tp(r, jl, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          e = r.pendingProps;
          var l = r.elementType,
            c = l._init;
          if (((l = c(l._payload)), (r.type = l), typeof l == 'function'))
            td(l)
              ? ((e = za(l, e)), (r.tag = 1), (r = Xm(null, r, l, e, o)))
              : ((r.tag = 0), (r = Id(null, r, l, e, o)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === V)) {
                (r.tag = 11), (r = Zm(null, r, l, e, o));
                break e;
              } else if (c === te) {
                (r.tag = 14), (r = qm(null, r, l, e, o));
                break e;
              }
            }
            throw ((r = Ee(l) || l), Error(i(306, r, '')));
          }
        }
        return r;
      case 0:
        return Id(e, r, r.type, r.pendingProps, o);
      case 1:
        return (l = r.type), (c = za(l, r.pendingProps)), Xm(e, r, l, c, o);
      case 3:
        e: {
          if ((rt(r, r.stateNode.containerInfo), e === null)) throw Error(i(387));
          l = r.pendingProps;
          var f = r.memoizedState;
          (c = f.element), md(e, r), Wo(r, l, null, o);
          var y = r.memoizedState;
          if (
            ((l = y.cache),
            Yr(r, Et, l),
            l !== f.cache && ud(r, [Et], o, !0),
            Io(),
            (l = y.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: l, isDehydrated: !1, cache: y.cache }),
              (r.updateQueue.baseState = f),
              (r.memoizedState = f),
              r.flags & 256)
            ) {
              r = Jm(e, r, l, o);
              break e;
            } else if (l !== c) {
              (c = Cn(Error(i(424)), r)), To(c), (r = Jm(e, r, l, o));
              break e;
            } else {
              switch (((e = r.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                gt = Ln(e.firstChild),
                  Ht = r,
                  Xe = !0,
                  La = null,
                  qn = !0,
                  o = jm(r, null, l, o),
                  r.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
            }
          else {
            if ((Mo(), l === c)) {
              r = wr(e, r, o);
              break e;
            }
            At(e, r, l, o);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          eu(e, r),
          e === null
            ? (o = oy(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = o)
              : Xe ||
                ((o = r.type),
                (e = r.pendingProps),
                (l = mu(ke.current).createElement(o)),
                (l[Bt] = r),
                (l[an] = e),
                It(l, o, e),
                Rt(l),
                (r.stateNode = l))
            : (r.memoizedState = oy(r.type, e.memoizedProps, r.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Vr(r),
          e === null &&
            Xe &&
            ((l = r.stateNode = ry(r.type, r.pendingProps, ke.current)),
            (Ht = r),
            (qn = !0),
            (c = gt),
            la(r.type) ? ((Of = c), (gt = Ln(l.firstChild))) : (gt = c)),
          At(e, r, r.pendingProps.children, o),
          eu(e, r),
          e === null && (r.flags |= 4194304),
          r.child
        );
      case 5:
        return (
          e === null &&
            Xe &&
            ((c = l = gt) &&
              ((l = Zk(l, r.type, r.pendingProps, qn)),
              l !== null
                ? ((r.stateNode = l), (Ht = r), (gt = Ln(l.firstChild)), (qn = !1), (c = !0))
                : (c = !1)),
            c || Fa(r)),
          Vr(r),
          (c = r.type),
          (f = r.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (l = f.children),
          Sf(c, f) ? (l = null) : y !== null && Sf(c, y) && (r.flags |= 32),
          r.memoizedState !== null && ((c = kd(e, r, uk, null, null, o)), (ls._currentValue = c)),
          eu(e, r),
          At(e, r, l, o),
          r.child
        );
      case 6:
        return (
          e === null &&
            Xe &&
            ((e = o = gt) &&
              ((o = qk(o, r.pendingProps, qn)),
              o !== null ? ((r.stateNode = o), (Ht = r), (gt = null), (e = !0)) : (e = !1)),
            e || Fa(r)),
          null
        );
      case 13:
        return Qm(e, r, o);
      case 4:
        return (
          rt(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          e === null ? (r.child = Fi(r, null, l, o)) : At(e, r, l, o),
          r.child
        );
      case 11:
        return Zm(e, r, r.type, r.pendingProps, o);
      case 7:
        return At(e, r, r.pendingProps, o), r.child;
      case 8:
        return At(e, r, r.pendingProps.children, o), r.child;
      case 12:
        return At(e, r, r.pendingProps.children, o), r.child;
      case 10:
        return (l = r.pendingProps), Yr(r, r.type, l.value), At(e, r, l.children, o), r.child;
      case 9:
        return (
          (c = r.type._context),
          (l = r.pendingProps.children),
          $a(r),
          (c = Ut(c)),
          (l = l(c)),
          (r.flags |= 1),
          At(e, r, l, o),
          r.child
        );
      case 14:
        return qm(e, r, r.type, r.pendingProps, o);
      case 15:
        return Ym(e, r, r.type, r.pendingProps, o);
      case 19:
        return tg(e, r, o);
      case 31:
        return (
          (l = r.pendingProps),
          (o = r.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((o = tu(l, o)), (o.ref = r.ref), (r.child = o), (o.return = r), (r = o))
            : ((o = fr(e.child, l)), (o.ref = r.ref), (r.child = o), (o.return = r), (r = o)),
          r
        );
      case 22:
        return Km(e, r, o);
      case 24:
        return (
          $a(r),
          (l = Ut(Et)),
          e === null
            ? ((c = fd()),
              c === null &&
                ((c = ct),
                (f = cd()),
                (c.pooledCache = f),
                f.refCount++,
                f !== null && (c.pooledCacheLanes |= o),
                (c = f)),
              (r.memoizedState = { parent: l, cache: c }),
              pd(r),
              Yr(r, Et, c))
            : ((e.lanes & o) !== 0 && (md(e, r), Wo(r, null, null, o), Io()),
              (c = e.memoizedState),
              (f = r.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (r.memoizedState = c),
                  r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = c),
                  Yr(r, Et, l))
                : ((l = f.cache), Yr(r, Et, l), l !== c.cache && ud(r, [Et], o, !0))),
          At(e, r, r.pendingProps.children, o),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  function kr(e) {
    e.flags |= 4;
  }
  function rg(e, r) {
    if (r.type !== 'stylesheet' || (r.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !dy(r))) {
      if (
        ((r = Dn.current),
        r !== null &&
          ((qe & 4194048) === qe
            ? vr !== null
            : ((qe & 62914560) !== qe && (qe & 536870912) === 0) || r !== vr))
      )
        throw ((Ao = hd), Wp);
      e.flags |= 8192;
    }
  }
  function nu(e, r) {
    r !== null && (e.flags |= 4),
      e.flags & 16384 && ((r = e.tag !== 22 ? dn() : 536870912), (e.lanes |= r), (Wi |= r));
  }
  function Yo(e, r) {
    if (!Xe)
      switch (e.tailMode) {
        case 'hidden':
          r = e.tail;
          for (var o = null; r !== null; ) r.alternate !== null && (o = r), (r = r.sibling);
          o === null ? (e.tail = null) : (o.sibling = null);
          break;
        case 'collapsed':
          o = e.tail;
          for (var l = null; o !== null; ) o.alternate !== null && (l = o), (o = o.sibling);
          l === null
            ? r || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function ft(e) {
    var r = e.alternate !== null && e.alternate.child === e.child,
      o = 0,
      l = 0;
    if (r)
      for (var c = e.child; c !== null; )
        (o |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (o |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = o), r;
  }
  function vk(e, r, o) {
    var l = r.pendingProps;
    switch ((id(r), r.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(r), null;
      case 1:
        return ft(r), null;
      case 3:
        return (
          (o = r.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          r.memoizedState.cache !== l && (r.flags |= 2048),
          gr(Et),
          rn(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Po(r)
              ? kr(r)
              : e === null ||
                (e.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), Lp())),
          ft(r),
          null
        );
      case 26:
        return (
          (o = r.memoizedState),
          e === null
            ? (kr(r), o !== null ? (ft(r), rg(r, o)) : (ft(r), (r.flags &= -16777217)))
            : o
              ? o !== e.memoizedState
                ? (kr(r), ft(r), rg(r, o))
                : (ft(r), (r.flags &= -16777217))
              : (e.memoizedProps !== l && kr(r), ft(r), (r.flags &= -16777217)),
          null
        );
      case 27:
        Zn(r), (o = ke.current);
        var c = r.type;
        if (e !== null && r.stateNode != null) e.memoizedProps !== l && kr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return ft(r), null;
          }
          (e = ve.current), Po(r) ? Rp(r) : ((e = ry(c, l, o)), (r.stateNode = e), kr(r));
        }
        return ft(r), null;
      case 5:
        if ((Zn(r), (o = r.type), e !== null && r.stateNode != null))
          e.memoizedProps !== l && kr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return ft(r), null;
          }
          if (((e = ve.current), Po(r))) Rp(r);
          else {
            switch (((c = mu(ke.current)), e)) {
              case 1:
                e = c.createElementNS('http://www.w3.org/2000/svg', o);
                break;
              case 2:
                e = c.createElementNS('http://www.w3.org/1998/Math/MathML', o);
                break;
              default:
                switch (o) {
                  case 'svg':
                    e = c.createElementNS('http://www.w3.org/2000/svg', o);
                    break;
                  case 'math':
                    e = c.createElementNS('http://www.w3.org/1998/Math/MathML', o);
                    break;
                  case 'script':
                    (e = c.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof l.is == 'string'
                        ? c.createElement('select', { is: l.is })
                        : c.createElement('select')),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == 'string'
                        ? c.createElement(o, { is: l.is })
                        : c.createElement(o);
                }
            }
            (e[Bt] = r), (e[an] = l);
            e: for (c = r.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === r) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === r) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            r.stateNode = e;
            e: switch ((It(e, o, l), o)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && kr(r);
          }
        }
        return ft(r), (r.flags &= -16777217), null;
      case 6:
        if (e && r.stateNode != null) e.memoizedProps !== l && kr(r);
        else {
          if (typeof l != 'string' && r.stateNode === null) throw Error(i(166));
          if (((e = ke.current), Po(r))) {
            if (((e = r.stateNode), (o = r.memoizedProps), (l = null), (c = Ht), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[Bt] = r),
              (e = !!(
                e.nodeValue === o ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Gg(e.nodeValue, o)
              )),
              e || Fa(r);
          } else (e = mu(e).createTextNode(l)), (e[Bt] = r), (r.stateNode = e);
        }
        return ft(r), null;
      case 13:
        if (
          ((l = r.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = Po(r)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (((c = r.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(i(317));
              c[Bt] = r;
            } else Mo(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4);
            ft(r), (c = !1);
          } else
            (c = Lp()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return r.flags & 256 ? (br(r), r) : (br(r), null);
        }
        if ((br(r), (r.flags & 128) !== 0)) return (r.lanes = o), r;
        if (((o = l !== null), (e = e !== null && e.memoizedState !== null), o)) {
          (l = r.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var f = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (f = l.memoizedState.cachePool.pool),
            f !== c && (l.flags |= 2048);
        }
        return o !== e && o && (r.child.flags |= 8192), nu(r, r.updateQueue), ft(r), null;
      case 4:
        return rn(), e === null && vf(r.stateNode.containerInfo), ft(r), null;
      case 10:
        return gr(r.type), ft(r), null;
      case 19:
        if ((se(Dt), (c = r.memoizedState), c === null)) return ft(r), null;
        if (((l = (r.flags & 128) !== 0), (f = c.rendering), f === null))
          if (l) Yo(c, !1);
          else {
            if (yt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = r.child; e !== null; ) {
                if (((f = Xl(e)), f !== null)) {
                  for (
                    r.flags |= 128,
                      Yo(c, !1),
                      e = f.updateQueue,
                      r.updateQueue = e,
                      nu(r, e),
                      r.subtreeFlags = 0,
                      e = o,
                      o = r.child;
                    o !== null;

                  )
                    Mp(o, e), (o = o.sibling);
                  return re(Dt, (Dt.current & 1) | 2), r.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Vt() > iu &&
              ((r.flags |= 128), (l = !0), Yo(c, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Xl(f)), e !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (r.updateQueue = e),
                nu(r, e),
                Yo(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !f.alternate && !Xe)
              )
                return ft(r), null;
            } else
              2 * Vt() - c.renderingStartTime > iu &&
                o !== 536870912 &&
                ((r.flags |= 128), (l = !0), Yo(c, !1), (r.lanes = 4194304));
          c.isBackwards
            ? ((f.sibling = r.child), (r.child = f))
            : ((e = c.last), e !== null ? (e.sibling = f) : (r.child = f), (c.last = f));
        }
        return c.tail !== null
          ? ((r = c.tail),
            (c.rendering = r),
            (c.tail = r.sibling),
            (c.renderingStartTime = Vt()),
            (r.sibling = null),
            (e = Dt.current),
            re(Dt, l ? (e & 1) | 2 : e & 1),
            r)
          : (ft(r), null);
      case 22:
      case 23:
        return (
          br(r),
          bd(),
          (l = r.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (r.flags |= 8192)
            : l && (r.flags |= 8192),
          l
            ? (o & 536870912) !== 0 &&
              (r.flags & 128) === 0 &&
              (ft(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : ft(r),
          (o = r.updateQueue),
          o !== null && nu(r, o.retryQueue),
          (o = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (o = e.memoizedState.cachePool.pool),
          (l = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (l = r.memoizedState.cachePool.pool),
          l !== o && (r.flags |= 2048),
          e !== null && se(Ia),
          null
        );
      case 24:
        return (
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          r.memoizedState.cache !== o && (r.flags |= 2048),
          gr(Et),
          ft(r),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function bk(e, r) {
    switch ((id(r), r.tag)) {
      case 1:
        return (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null;
      case 3:
        return (
          gr(Et),
          rn(),
          (e = r.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 26:
      case 27:
      case 5:
        return Zn(r), null;
      case 13:
        if ((br(r), (e = r.memoizedState), e !== null && e.dehydrated !== null)) {
          if (r.alternate === null) throw Error(i(340));
          Mo();
        }
        return (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null;
      case 19:
        return se(Dt), null;
      case 4:
        return rn(), null;
      case 10:
        return gr(r.type), null;
      case 22:
      case 23:
        return (
          br(r),
          bd(),
          e !== null && se(Ia),
          (e = r.flags),
          e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 24:
        return gr(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ag(e, r) {
    switch ((id(r), r.tag)) {
      case 3:
        gr(Et), rn();
        break;
      case 26:
      case 27:
      case 5:
        Zn(r);
        break;
      case 4:
        rn();
        break;
      case 13:
        br(r);
        break;
      case 19:
        se(Dt);
        break;
      case 10:
        gr(r.type);
        break;
      case 22:
      case 23:
        br(r), bd(), e !== null && se(Ia);
        break;
      case 24:
        gr(Et);
    }
  }
  function Ko(e, r) {
    try {
      var o = r.updateQueue,
        l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        o = c;
        do {
          if ((o.tag & e) === e) {
            l = void 0;
            var f = o.create,
              y = o.inst;
            (l = f()), (y.destroy = l);
          }
          o = o.next;
        } while (o !== c);
      }
    } catch (w) {
      ut(r, r.return, w);
    }
  }
  function ea(e, r, o) {
    try {
      var l = r.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst,
              w = y.destroy;
            if (w !== void 0) {
              (y.destroy = void 0), (c = r);
              var S = o,
                F = w;
              try {
                F();
              } catch (U) {
                ut(c, S, U);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (U) {
      ut(r, r.return, U);
    }
  }
  function ig(e) {
    var r = e.updateQueue;
    if (r !== null) {
      var o = e.stateNode;
      try {
        qp(r, o);
      } catch (l) {
        ut(e, e.return, l);
      }
    }
  }
  function og(e, r, o) {
    (o.props = za(e.type, e.memoizedProps)), (o.state = e.memoizedState);
    try {
      o.componentWillUnmount();
    } catch (l) {
      ut(e, r, l);
    }
  }
  function Ho(e, r) {
    try {
      var o = e.ref;
      if (o !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof o == 'function' ? (e.refCleanup = o(l)) : (o.current = l);
      }
    } catch (c) {
      ut(e, r, c);
    }
  }
  function Yn(e, r) {
    var o = e.ref,
      l = e.refCleanup;
    if (o !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (c) {
          ut(e, r, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof o == 'function')
        try {
          o(null);
        } catch (c) {
          ut(e, r, c);
        }
      else o.current = null;
  }
  function sg(e) {
    var r = e.type,
      o = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (r) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          o.autoFocus && l.focus();
          break e;
        case 'img':
          o.src ? (l.src = o.src) : o.srcSet && (l.srcset = o.srcSet);
      }
    } catch (c) {
      ut(e, e.return, c);
    }
  }
  function Yd(e, r, o) {
    try {
      var l = e.stateNode;
      Wk(l, e.type, o, r), (l[an] = r);
    } catch (c) {
      ut(e, e.return, c);
    }
  }
  function lg(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && la(e.type)) || e.tag === 4
    );
  }
  function Kd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && la(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Hd(e, r, o) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        r
          ? (o.nodeType === 9
              ? o.body
              : o.nodeName === 'HTML'
                ? o.ownerDocument.body
                : o
            ).insertBefore(e, r)
          : ((r = o.nodeType === 9 ? o.body : o.nodeName === 'HTML' ? o.ownerDocument.body : o),
            r.appendChild(e),
            (o = o._reactRootContainer),
            o != null || r.onclick !== null || (r.onclick = pu));
    else if (
      l !== 4 &&
      (l === 27 && la(e.type) && ((o = e.stateNode), (r = null)), (e = e.child), e !== null)
    )
      for (Hd(e, r, o), e = e.sibling; e !== null; ) Hd(e, r, o), (e = e.sibling);
  }
  function ru(e, r, o) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), r ? o.insertBefore(e, r) : o.appendChild(e);
    else if (l !== 4 && (l === 27 && la(e.type) && (o = e.stateNode), (e = e.child), e !== null))
      for (ru(e, r, o), e = e.sibling; e !== null; ) ru(e, r, o), (e = e.sibling);
  }
  function ug(e) {
    var r = e.stateNode,
      o = e.memoizedProps;
    try {
      for (var l = e.type, c = r.attributes; c.length; ) r.removeAttributeNode(c[0]);
      It(r, l, o), (r[Bt] = e), (r[an] = o);
    } catch (f) {
      ut(e, e.return, f);
    }
  }
  var xr = !1,
    bt = !1,
    Gd = !1,
    cg = typeof WeakSet == 'function' ? WeakSet : Set,
    Lt = null;
  function wk(e, r) {
    if (((e = e.containerInfo), (kf = ku), (e = kp(e)), Kc(e))) {
      if ('selectionStart' in e) var o = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          o = ((o = e.ownerDocument) && o.defaultView) || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var c = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              o.nodeType, f.nodeType;
            } catch {
              o = null;
              break e;
            }
            var y = 0,
              w = -1,
              S = -1,
              F = 0,
              U = 0,
              K = e,
              $ = null;
            t: for (;;) {
              for (
                var W;
                K !== o || (c !== 0 && K.nodeType !== 3) || (w = y + c),
                  K !== f || (l !== 0 && K.nodeType !== 3) || (S = y + l),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (W = K.firstChild) !== null;

              )
                ($ = K), (K = W);
              for (;;) {
                if (K === e) break t;
                if (
                  ($ === o && ++F === c && (w = y),
                  $ === f && ++U === l && (S = y),
                  (W = K.nextSibling) !== null)
                )
                  break;
                (K = $), ($ = K.parentNode);
              }
              K = W;
            }
            o = w === -1 || S === -1 ? null : { start: w, end: S };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (xf = { focusedElem: e, selectionRange: o }, ku = !1, Lt = r; Lt !== null; )
      if (((r = Lt), (e = r.child), (r.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = r), (Lt = e);
      else
        for (; Lt !== null; ) {
          switch (((r = Lt), (f = r.alternate), (e = r.flags), r.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0),
                  (o = r),
                  (c = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = o.stateNode);
                try {
                  var Oe = za(o.type, c, o.elementType === o.type);
                  (e = l.getSnapshotBeforeUpdate(Oe, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (xe) {
                  ut(o, o.return, xe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = r.stateNode.containerInfo), (o = e.nodeType), o === 9)) Cf(e);
                else if (o === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Cf(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = r.sibling), e !== null)) {
            (e.return = r.return), (Lt = e);
            break;
          }
          Lt = r.return;
        }
  }
  function dg(e, r, o) {
    var l = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        ta(e, o), l & 4 && Ko(5, o);
        break;
      case 1:
        if ((ta(e, o), l & 4))
          if (((e = o.stateNode), r === null))
            try {
              e.componentDidMount();
            } catch (y) {
              ut(o, o.return, y);
            }
          else {
            var c = za(o.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              e.componentDidUpdate(c, r, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              ut(o, o.return, y);
            }
          }
        l & 64 && ig(o), l & 512 && Ho(o, o.return);
        break;
      case 3:
        if ((ta(e, o), l & 64 && ((e = o.updateQueue), e !== null))) {
          if (((r = null), o.child !== null))
            switch (o.child.tag) {
              case 27:
              case 5:
                r = o.child.stateNode;
                break;
              case 1:
                r = o.child.stateNode;
            }
          try {
            qp(e, r);
          } catch (y) {
            ut(o, o.return, y);
          }
        }
        break;
      case 27:
        r === null && l & 4 && ug(o);
      case 26:
      case 5:
        ta(e, o), r === null && l & 4 && sg(o), l & 512 && Ho(o, o.return);
        break;
      case 12:
        ta(e, o);
        break;
      case 13:
        ta(e, o),
          l & 4 && pg(e, o),
          l & 64 &&
            ((e = o.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((o = Dk.bind(null, o)), Yk(e, o))));
        break;
      case 22:
        if (((l = o.memoizedState !== null || xr), !l)) {
          (r = (r !== null && r.memoizedState !== null) || bt), (c = xr);
          var f = bt;
          (xr = l),
            (bt = r) && !f ? na(e, o, (o.subtreeFlags & 8772) !== 0) : ta(e, o),
            (xr = c),
            (bt = f);
        }
        break;
      case 30:
        break;
      default:
        ta(e, o);
    }
  }
  function fg(e) {
    var r = e.alternate;
    r !== null && ((e.alternate = null), fg(r)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((r = e.stateNode), r !== null && Dc(r)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var dt = null,
    ln = !1;
  function Sr(e, r, o) {
    for (o = o.child; o !== null; ) hg(e, r, o), (o = o.sibling);
  }
  function hg(e, r, o) {
    if (ie && typeof ie.onCommitFiberUnmount == 'function')
      try {
        ie.onCommitFiberUnmount(J, o);
      } catch {}
    switch (o.tag) {
      case 26:
        bt || Yn(o, r),
          Sr(e, r, o),
          o.memoizedState
            ? o.memoizedState.count--
            : o.stateNode && ((o = o.stateNode), o.parentNode.removeChild(o));
        break;
      case 27:
        bt || Yn(o, r);
        var l = dt,
          c = ln;
        la(o.type) && ((dt = o.stateNode), (ln = !1)),
          Sr(e, r, o),
          as(o.stateNode),
          (dt = l),
          (ln = c);
        break;
      case 5:
        bt || Yn(o, r);
      case 6:
        if (((l = dt), (c = ln), (dt = null), Sr(e, r, o), (dt = l), (ln = c), dt !== null))
          if (ln)
            try {
              (dt.nodeType === 9
                ? dt.body
                : dt.nodeName === 'HTML'
                  ? dt.ownerDocument.body
                  : dt
              ).removeChild(o.stateNode);
            } catch (f) {
              ut(o, r, f);
            }
          else
            try {
              dt.removeChild(o.stateNode);
            } catch (f) {
              ut(o, r, f);
            }
        break;
      case 18:
        dt !== null &&
          (ln
            ? ((e = dt),
              ty(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                o.stateNode
              ),
              fs(e))
            : ty(dt, o.stateNode));
        break;
      case 4:
        (l = dt),
          (c = ln),
          (dt = o.stateNode.containerInfo),
          (ln = !0),
          Sr(e, r, o),
          (dt = l),
          (ln = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || ea(2, o, r), bt || ea(4, o, r), Sr(e, r, o);
        break;
      case 1:
        bt ||
          (Yn(o, r), (l = o.stateNode), typeof l.componentWillUnmount == 'function' && og(o, r, l)),
          Sr(e, r, o);
        break;
      case 21:
        Sr(e, r, o);
        break;
      case 22:
        (bt = (l = bt) || o.memoizedState !== null), Sr(e, r, o), (bt = l);
        break;
      default:
        Sr(e, r, o);
    }
  }
  function pg(e, r) {
    if (
      r.memoizedState === null &&
      ((e = r.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        fs(e);
      } catch (o) {
        ut(r, r.return, o);
      }
  }
  function kk(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var r = e.stateNode;
        return r === null && (r = e.stateNode = new cg()), r;
      case 22:
        return (
          (e = e.stateNode), (r = e._retryCache), r === null && (r = e._retryCache = new cg()), r
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Xd(e, r) {
    var o = kk(e);
    r.forEach(function (l) {
      var c = Pk.bind(null, e, l);
      o.has(l) || (o.add(l), l.then(c, c));
    });
  }
  function pn(e, r) {
    var o = r.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var c = o[l],
          f = e,
          y = r,
          w = y;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (la(w.type)) {
                (dt = w.stateNode), (ln = !1);
                break e;
              }
              break;
            case 5:
              (dt = w.stateNode), (ln = !1);
              break e;
            case 3:
            case 4:
              (dt = w.stateNode.containerInfo), (ln = !0);
              break e;
          }
          w = w.return;
        }
        if (dt === null) throw Error(i(160));
        hg(f, y, c),
          (dt = null),
          (ln = !1),
          (f = c.alternate),
          f !== null && (f.return = null),
          (c.return = null);
      }
    if (r.subtreeFlags & 13878) for (r = r.child; r !== null; ) mg(r, e), (r = r.sibling);
  }
  var jn = null;
  function mg(e, r) {
    var o = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pn(r, e), mn(e), l & 4 && (ea(3, e, e.return), Ko(3, e), ea(5, e, e.return));
        break;
      case 1:
        pn(r, e),
          mn(e),
          l & 512 && (bt || o === null || Yn(o, o.return)),
          l & 64 &&
            xr &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((o = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = o === null ? l : o.concat(l)))));
        break;
      case 26:
        var c = jn;
        if ((pn(r, e), mn(e), l & 512 && (bt || o === null || Yn(o, o.return)), l & 4)) {
          var f = o !== null ? o.memoizedState : null;
          if (((l = e.memoizedState), o === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type), (o = e.memoizedProps), (c = c.ownerDocument || c);
                  t: switch (l) {
                    case 'title':
                      (f = c.getElementsByTagName('title')[0]),
                        (!f ||
                          f[bo] ||
                          f[Bt] ||
                          f.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          f.hasAttribute('itemprop')) &&
                          ((f = c.createElement(l)),
                          c.head.insertBefore(f, c.querySelector('head > title'))),
                        It(f, l, o),
                        (f[Bt] = e),
                        Rt(f),
                        (l = f);
                      break e;
                    case 'link':
                      var y = uy('link', 'href', c).get(l + (o.href || ''));
                      if (y) {
                        for (var w = 0; w < y.length; w++)
                          if (
                            ((f = y[w]),
                            f.getAttribute('href') ===
                              (o.href == null || o.href === '' ? null : o.href) &&
                              f.getAttribute('rel') === (o.rel == null ? null : o.rel) &&
                              f.getAttribute('title') === (o.title == null ? null : o.title) &&
                              f.getAttribute('crossorigin') ===
                                (o.crossOrigin == null ? null : o.crossOrigin))
                          ) {
                            y.splice(w, 1);
                            break t;
                          }
                      }
                      (f = c.createElement(l)), It(f, l, o), c.head.appendChild(f);
                      break;
                    case 'meta':
                      if ((y = uy('meta', 'content', c).get(l + (o.content || '')))) {
                        for (w = 0; w < y.length; w++)
                          if (
                            ((f = y[w]),
                            f.getAttribute('content') ===
                              (o.content == null ? null : '' + o.content) &&
                              f.getAttribute('name') === (o.name == null ? null : o.name) &&
                              f.getAttribute('property') ===
                                (o.property == null ? null : o.property) &&
                              f.getAttribute('http-equiv') ===
                                (o.httpEquiv == null ? null : o.httpEquiv) &&
                              f.getAttribute('charset') === (o.charSet == null ? null : o.charSet))
                          ) {
                            y.splice(w, 1);
                            break t;
                          }
                      }
                      (f = c.createElement(l)), It(f, l, o), c.head.appendChild(f);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (f[Bt] = e), Rt(f), (l = f);
                }
                e.stateNode = l;
              } else cy(c, e.type, e.stateNode);
            else e.stateNode = ly(c, l, e.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? o.stateNode !== null && ((o = o.stateNode), o.parentNode.removeChild(o))
                  : f.count--,
                l === null ? cy(c, e.type, e.stateNode) : ly(c, l, e.memoizedProps))
              : l === null && e.stateNode !== null && Yd(e, e.memoizedProps, o.memoizedProps);
        }
        break;
      case 27:
        pn(r, e),
          mn(e),
          l & 512 && (bt || o === null || Yn(o, o.return)),
          o !== null && l & 4 && Yd(e, e.memoizedProps, o.memoizedProps);
        break;
      case 5:
        if ((pn(r, e), mn(e), l & 512 && (bt || o === null || Yn(o, o.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            vi(c, '');
          } catch (W) {
            ut(e, e.return, W);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), Yd(e, c, o !== null ? o.memoizedProps : c)),
          l & 1024 && (Gd = !0);
        break;
      case 6:
        if ((pn(r, e), mn(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.memoizedProps), (o = e.stateNode);
          try {
            o.nodeValue = l;
          } catch (W) {
            ut(e, e.return, W);
          }
        }
        break;
      case 3:
        if (
          ((vu = null),
          (c = jn),
          (jn = gu(r.containerInfo)),
          pn(r, e),
          (jn = c),
          mn(e),
          l & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            fs(r.containerInfo);
          } catch (W) {
            ut(e, e.return, W);
          }
        Gd && ((Gd = !1), gg(e));
        break;
      case 4:
        (l = jn), (jn = gu(e.stateNode.containerInfo)), pn(r, e), mn(e), (jn = l);
        break;
      case 12:
        pn(r, e), mn(e);
        break;
      case 13:
        pn(r, e),
          mn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (o !== null && o.memoizedState !== null) &&
            (rf = Vt()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Xd(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var S = o !== null && o.memoizedState !== null,
          F = xr,
          U = bt;
        if (((xr = F || c), (bt = U || S), pn(r, e), (bt = U), (xr = F), mn(e), l & 8192))
          e: for (
            r = e.stateNode,
              r._visibility = c ? r._visibility & -2 : r._visibility | 1,
              c && (o === null || S || xr || bt || Va(e)),
              o = null,
              r = e;
            ;

          ) {
            if (r.tag === 5 || r.tag === 26) {
              if (o === null) {
                S = o = r;
                try {
                  if (((f = S.stateNode), c))
                    (y = f.style),
                      typeof y.setProperty == 'function'
                        ? y.setProperty('display', 'none', 'important')
                        : (y.display = 'none');
                  else {
                    w = S.stateNode;
                    var K = S.memoizedProps.style,
                      $ = K != null && K.hasOwnProperty('display') ? K.display : null;
                    w.style.display = $ == null || typeof $ == 'boolean' ? '' : ('' + $).trim();
                  }
                } catch (W) {
                  ut(S, S.return, W);
                }
              }
            } else if (r.tag === 6) {
              if (o === null) {
                S = r;
                try {
                  S.stateNode.nodeValue = c ? '' : S.memoizedProps;
                } catch (W) {
                  ut(S, S.return, W);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) || r.memoizedState === null || r === e) &&
              r.child !== null
            ) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === e) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === e) break e;
              o === r && (o = null), (r = r.return);
            }
            o === r && (o = null), (r.sibling.return = r.return), (r = r.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null && ((o = l.retryQueue), o !== null && ((l.retryQueue = null), Xd(e, o))));
        break;
      case 19:
        pn(r, e),
          mn(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Xd(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pn(r, e), mn(e);
    }
  }
  function mn(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        for (var o, l = e.return; l !== null; ) {
          if (lg(l)) {
            o = l;
            break;
          }
          l = l.return;
        }
        if (o == null) throw Error(i(160));
        switch (o.tag) {
          case 27:
            var c = o.stateNode,
              f = Kd(e);
            ru(e, f, c);
            break;
          case 5:
            var y = o.stateNode;
            o.flags & 32 && (vi(y, ''), (o.flags &= -33));
            var w = Kd(e);
            ru(e, w, y);
            break;
          case 3:
          case 4:
            var S = o.stateNode.containerInfo,
              F = Kd(e);
            Hd(e, F, S);
            break;
          default:
            throw Error(i(161));
        }
      } catch (U) {
        ut(e, e.return, U);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function gg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var r = e;
        gg(r), r.tag === 5 && r.flags & 1024 && r.stateNode.reset(), (e = e.sibling);
      }
  }
  function ta(e, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) dg(e, r.alternate, r), (r = r.sibling);
  }
  function Va(e) {
    for (e = e.child; e !== null; ) {
      var r = e;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, r, r.return), Va(r);
          break;
        case 1:
          Yn(r, r.return);
          var o = r.stateNode;
          typeof o.componentWillUnmount == 'function' && og(r, r.return, o), Va(r);
          break;
        case 27:
          as(r.stateNode);
        case 26:
        case 5:
          Yn(r, r.return), Va(r);
          break;
        case 22:
          r.memoizedState === null && Va(r);
          break;
        case 30:
          Va(r);
          break;
        default:
          Va(r);
      }
      e = e.sibling;
    }
  }
  function na(e, r, o) {
    for (o = o && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var l = r.alternate,
        c = e,
        f = r,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          na(c, f, o), Ko(4, f);
          break;
        case 1:
          if ((na(c, f, o), (l = f), (c = l.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (F) {
              ut(l, l.return, F);
            }
          if (((l = f), (c = l.updateQueue), c !== null)) {
            var w = l.stateNode;
            try {
              var S = c.shared.hiddenCallbacks;
              if (S !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < S.length; c++) Zp(S[c], w);
            } catch (F) {
              ut(l, l.return, F);
            }
          }
          o && y & 64 && ig(f), Ho(f, f.return);
          break;
        case 27:
          ug(f);
        case 26:
        case 5:
          na(c, f, o), o && l === null && y & 4 && sg(f), Ho(f, f.return);
          break;
        case 12:
          na(c, f, o);
          break;
        case 13:
          na(c, f, o), o && y & 4 && pg(c, f);
          break;
        case 22:
          f.memoizedState === null && na(c, f, o), Ho(f, f.return);
          break;
        case 30:
          break;
        default:
          na(c, f, o);
      }
      r = r.sibling;
    }
  }
  function Jd(e, r) {
    var o = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (o = e.memoizedState.cachePool.pool),
      (e = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (e = r.memoizedState.cachePool.pool),
      e !== o && (e != null && e.refCount++, o != null && jo(o));
  }
  function Qd(e, r) {
    (e = null),
      r.alternate !== null && (e = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== e && (r.refCount++, e != null && jo(e));
  }
  function Kn(e, r, o, l) {
    if (r.subtreeFlags & 10256) for (r = r.child; r !== null; ) yg(e, r, o, l), (r = r.sibling);
  }
  function yg(e, r, o, l) {
    var c = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, r, o, l), c & 2048 && Ko(9, r);
        break;
      case 1:
        Kn(e, r, o, l);
        break;
      case 3:
        Kn(e, r, o, l),
          c & 2048 &&
            ((e = null),
            r.alternate !== null && (e = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== e && (r.refCount++, e != null && jo(e)));
        break;
      case 12:
        if (c & 2048) {
          Kn(e, r, o, l), (e = r.stateNode);
          try {
            var f = r.memoizedProps,
              y = f.id,
              w = f.onPostCommit;
            typeof w == 'function' &&
              w(y, r.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (S) {
            ut(r, r.return, S);
          }
        } else Kn(e, r, o, l);
        break;
      case 13:
        Kn(e, r, o, l);
        break;
      case 23:
        break;
      case 22:
        (f = r.stateNode),
          (y = r.alternate),
          r.memoizedState !== null
            ? f._visibility & 2
              ? Kn(e, r, o, l)
              : Go(e, r)
            : f._visibility & 2
              ? Kn(e, r, o, l)
              : ((f._visibility |= 2), Ai(e, r, o, l, (r.subtreeFlags & 10256) !== 0)),
          c & 2048 && Jd(y, r);
        break;
      case 24:
        Kn(e, r, o, l), c & 2048 && Qd(r.alternate, r);
        break;
      default:
        Kn(e, r, o, l);
    }
  }
  function Ai(e, r, o, l, c) {
    for (c = c && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var f = e,
        y = r,
        w = o,
        S = l,
        F = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ai(f, y, w, S, c), Ko(8, y);
          break;
        case 23:
          break;
        case 22:
          var U = y.stateNode;
          y.memoizedState !== null
            ? U._visibility & 2
              ? Ai(f, y, w, S, c)
              : Go(f, y)
            : ((U._visibility |= 2), Ai(f, y, w, S, c)),
            c && F & 2048 && Jd(y.alternate, y);
          break;
        case 24:
          Ai(f, y, w, S, c), c && F & 2048 && Qd(y.alternate, y);
          break;
        default:
          Ai(f, y, w, S, c);
      }
      r = r.sibling;
    }
  }
  function Go(e, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var o = e,
          l = r,
          c = l.flags;
        switch (l.tag) {
          case 22:
            Go(o, l), c & 2048 && Jd(l.alternate, l);
            break;
          case 24:
            Go(o, l), c & 2048 && Qd(l.alternate, l);
            break;
          default:
            Go(o, l);
        }
        r = r.sibling;
      }
  }
  var Xo = 8192;
  function $i(e) {
    if (e.subtreeFlags & Xo) for (e = e.child; e !== null; ) vg(e), (e = e.sibling);
  }
  function vg(e) {
    switch (e.tag) {
      case 26:
        $i(e), e.flags & Xo && e.memoizedState !== null && ox(jn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        $i(e);
        break;
      case 3:
      case 4:
        var r = jn;
        (jn = gu(e.stateNode.containerInfo)), $i(e), (jn = r);
        break;
      case 22:
        e.memoizedState === null &&
          ((r = e.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = Xo), (Xo = 16777216), $i(e), (Xo = r))
            : $i(e));
        break;
      default:
        $i(e);
    }
  }
  function bg(e) {
    var r = e.alternate;
    if (r !== null && ((e = r.child), e !== null)) {
      r.child = null;
      do (r = e.sibling), (e.sibling = null), (e = r);
      while (e !== null);
    }
  }
  function Jo(e) {
    var r = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (r !== null)
        for (var o = 0; o < r.length; o++) {
          var l = r[o];
          (Lt = l), kg(l, e);
        }
      bg(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) wg(e), (e = e.sibling);
  }
  function wg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Jo(e), e.flags & 2048 && ea(9, e, e.return);
        break;
      case 3:
        Jo(e);
        break;
      case 12:
        Jo(e);
        break;
      case 22:
        var r = e.stateNode;
        e.memoizedState !== null && r._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((r._visibility &= -3), au(e))
          : Jo(e);
        break;
      default:
        Jo(e);
    }
  }
  function au(e) {
    var r = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (r !== null)
        for (var o = 0; o < r.length; o++) {
          var l = r[o];
          (Lt = l), kg(l, e);
        }
      bg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((r = e), r.tag)) {
        case 0:
        case 11:
        case 15:
          ea(8, r, r.return), au(r);
          break;
        case 22:
          (o = r.stateNode), o._visibility & 2 && ((o._visibility &= -3), au(r));
          break;
        default:
          au(r);
      }
      e = e.sibling;
    }
  }
  function kg(e, r) {
    for (; Lt !== null; ) {
      var o = Lt;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, o, r);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var l = o.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          jo(o.memoizedState.cache);
      }
      if (((l = o.child), l !== null)) (l.return = o), (Lt = l);
      else
        e: for (o = e; Lt !== null; ) {
          l = Lt;
          var c = l.sibling,
            f = l.return;
          if ((fg(l), l === o)) {
            Lt = null;
            break e;
          }
          if (c !== null) {
            (c.return = f), (Lt = c);
            break e;
          }
          Lt = f;
        }
    }
  }
  var xk = {
      getCacheForType: function (e) {
        var r = Ut(Et),
          o = r.data.get(e);
        return o === void 0 && ((o = e()), r.data.set(e, o)), o;
      },
    },
    Sk = typeof WeakMap == 'function' ? WeakMap : Map,
    et = 0,
    ct = null,
    Be = null,
    qe = 0,
    tt = 0,
    gn = null,
    ra = !1,
    Ii = !1,
    ef = !1,
    _r = 0,
    yt = 0,
    aa = 0,
    Ba = 0,
    tf = 0,
    Pn = 0,
    Wi = 0,
    Qo = null,
    un = null,
    nf = !1,
    rf = 0,
    iu = 1 / 0,
    ou = null,
    ia = null,
    $t = 0,
    oa = null,
    zi = null,
    Vi = 0,
    af = 0,
    of = null,
    xg = null,
    es = 0,
    sf = null;
  function yn() {
    if ((et & 2) !== 0 && qe !== 0) return qe & -qe;
    if (z.T !== null) {
      var e = Di;
      return e !== 0 ? e : pf();
    }
    return $h();
  }
  function Sg() {
    Pn === 0 && (Pn = (qe & 536870912) === 0 || Xe ? Ot() : 536870912);
    var e = Dn.current;
    return e !== null && (e.flags |= 32), Pn;
  }
  function vn(e, r, o) {
    ((e === ct && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null) &&
      (Bi(e, 0), sa(e, qe, Pn, !1)),
      Na(e, o),
      ((et & 2) === 0 || e !== ct) &&
        (e === ct && ((et & 2) === 0 && (Ba |= o), yt === 4 && sa(e, qe, Pn, !1)), Hn(e));
  }
  function _g(e, r, o) {
    if ((et & 6) !== 0) throw Error(i(327));
    var l = (!o && (r & 124) === 0 && (r & e.expiredLanes) === 0) || _t(e, r),
      c = l ? Nk(e, r) : cf(e, r, !0),
      f = l;
    do {
      if (c === 0) {
        Ii && !l && sa(e, r, 0, !1);
        break;
      } else {
        if (((o = e.current.alternate), f && !_k(o))) {
          (c = cf(e, r, !1)), (f = !1);
          continue;
        }
        if (c === 2) {
          if (((f = r), e.errorRecoveryDisabledLanes & f)) var y = 0;
          else (y = e.pendingLanes & -536870913), (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            r = y;
            e: {
              var w = e;
              c = Qo;
              var S = w.current.memoizedState.isDehydrated;
              if ((S && (Bi(w, y).flags |= 256), (y = cf(w, y, !1)), y !== 2)) {
                if (ef && !S) {
                  (w.errorRecoveryDisabledLanes |= f), (Ba |= f), (c = 4);
                  break e;
                }
                (f = un), (un = c), f !== null && (un === null ? (un = f) : un.push.apply(un, f));
              }
              c = y;
            }
            if (((f = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Bi(e, 0), sa(e, r, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (f = c), f)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              sa(l, r, Pn, !ra);
              break e;
            case 2:
              un = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((r & 62914560) === r && ((c = rf + 300 - Vt()), 10 < c)) {
            if ((sa(l, r, Pn, !ra), Kt(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Qg(
              Cg.bind(null, l, o, un, ou, nf, r, Pn, Ba, Wi, ra, f, 2, -0, 0),
              c
            );
            break e;
          }
          Cg(l, o, un, ou, nf, r, Pn, Ba, Wi, ra, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Hn(e);
  }
  function Cg(e, r, o, l, c, f, y, w, S, F, U, K, $, W) {
    if (
      ((e.timeoutHandle = -1),
      (K = r.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        ((ss = { stylesheets: null, count: 0, unsuspend: ix }), vg(r), (K = sx()), K !== null))
    ) {
      (e.cancelPendingCommit = K(Tg.bind(null, e, r, f, o, l, c, y, w, S, U, 1, $, W))),
        sa(e, f, y, !F);
      return;
    }
    Tg(e, r, f, o, l, c, y, w, S);
  }
  function _k(e) {
    for (var r = e; ; ) {
      var o = r.tag;
      if (
        (o === 0 || o === 11 || o === 15) &&
        r.flags & 16384 &&
        ((o = r.updateQueue), o !== null && ((o = o.stores), o !== null))
      )
        for (var l = 0; l < o.length; l++) {
          var c = o[l],
            f = c.getSnapshot;
          c = c.value;
          try {
            if (!fn(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((o = r.child), r.subtreeFlags & 16384 && o !== null)) (o.return = r), (r = o);
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function sa(e, r, o, l) {
    (r &= ~tf),
      (r &= ~Ba),
      (e.suspendedLanes |= r),
      (e.pingedLanes &= ~r),
      l && (e.warmLanes |= r),
      (l = e.expirationTimes);
    for (var c = r; 0 < c; ) {
      var f = 31 - Ze(c),
        y = 1 << f;
      (l[f] = -1), (c &= ~y);
    }
    o !== 0 && yl(e, o, r);
  }
  function su() {
    return (et & 6) === 0 ? (ts(0), !1) : !0;
  }
  function lf() {
    if (Be !== null) {
      if (tt === 0) var e = Be.return;
      else (e = Be), (mr = Aa = null), _d(e), (Li = null), (Zo = 0), (e = Be);
      for (; e !== null; ) ag(e.alternate, e), (e = e.return);
      Be = null;
    }
  }
  function Bi(e, r) {
    var o = e.timeoutHandle;
    o !== -1 && ((e.timeoutHandle = -1), Vk(o)),
      (o = e.cancelPendingCommit),
      o !== null && ((e.cancelPendingCommit = null), o()),
      lf(),
      (ct = e),
      (Be = o = fr(e.current, null)),
      (qe = r),
      (tt = 0),
      (gn = null),
      (ra = !1),
      (Ii = _t(e, r)),
      (ef = !1),
      (Wi = Pn = tf = Ba = aa = yt = 0),
      (un = Qo = null),
      (nf = !1),
      (r & 8) !== 0 && (r |= r & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= r; 0 < l; ) {
        var c = 31 - Ze(l),
          f = 1 << c;
        (r |= e[c]), (l &= ~f);
      }
    return (_r = r), Dl(), o;
  }
  function Ng(e, r) {
    (Ie = null),
      (z.H = Kl),
      r === Fo || r === $l
        ? ((r = Bp()), (tt = 3))
        : r === Wp
          ? ((r = Bp()), (tt = 4))
          : (tt =
              r === Um
                ? 8
                : r !== null && typeof r == 'object' && typeof r.then == 'function'
                  ? 6
                  : 1),
      (gn = r),
      Be === null && ((yt = 1), Ql(e, Cn(r, e.current)));
  }
  function Og() {
    var e = z.H;
    return (z.H = Kl), e === null ? Kl : e;
  }
  function Eg() {
    var e = z.A;
    return (z.A = xk), e;
  }
  function uf() {
    (yt = 4),
      ra || ((qe & 4194048) !== qe && Dn.current !== null) || (Ii = !0),
      ((aa & 134217727) === 0 && (Ba & 134217727) === 0) || ct === null || sa(ct, qe, Pn, !1);
  }
  function cf(e, r, o) {
    var l = et;
    et |= 2;
    var c = Og(),
      f = Eg();
    (ct !== e || qe !== r) && ((ou = null), Bi(e, r)), (r = !1);
    var y = yt;
    e: do
      try {
        if (tt !== 0 && Be !== null) {
          var w = Be,
            S = gn;
          switch (tt) {
            case 8:
              lf(), (y = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dn.current === null && (r = !0);
              var F = tt;
              if (((tt = 0), (gn = null), Ui(e, w, S, F), o && Ii)) {
                y = 0;
                break e;
              }
              break;
            default:
              (F = tt), (tt = 0), (gn = null), Ui(e, w, S, F);
          }
        }
        Ck(), (y = yt);
        break;
      } catch (U) {
        Ng(e, U);
      }
    while (!0);
    return (
      r && e.shellSuspendCounter++,
      (mr = Aa = null),
      (et = l),
      (z.H = c),
      (z.A = f),
      Be === null && ((ct = null), (qe = 0), Dl()),
      y
    );
  }
  function Ck() {
    for (; Be !== null; ) Dg(Be);
  }
  function Nk(e, r) {
    var o = et;
    et |= 2;
    var l = Og(),
      c = Eg();
    ct !== e || qe !== r ? ((ou = null), (iu = Vt() + 500), Bi(e, r)) : (Ii = _t(e, r));
    e: do
      try {
        if (tt !== 0 && Be !== null) {
          r = Be;
          var f = gn;
          t: switch (tt) {
            case 1:
              (tt = 0), (gn = null), Ui(e, r, f, 1);
              break;
            case 2:
            case 9:
              if (zp(f)) {
                (tt = 0), (gn = null), Pg(r);
                break;
              }
              (r = function () {
                (tt !== 2 && tt !== 9) || ct !== e || (tt = 7), Hn(e);
              }),
                f.then(r, r);
              break e;
            case 3:
              tt = 7;
              break e;
            case 4:
              tt = 5;
              break e;
            case 7:
              zp(f) ? ((tt = 0), (gn = null), Pg(r)) : ((tt = 0), (gn = null), Ui(e, r, f, 7));
              break;
            case 5:
              var y = null;
              switch (Be.tag) {
                case 26:
                  y = Be.memoizedState;
                case 5:
                case 27:
                  var w = Be;
                  if (!y || dy(y)) {
                    (tt = 0), (gn = null);
                    var S = w.sibling;
                    if (S !== null) Be = S;
                    else {
                      var F = w.return;
                      F !== null ? ((Be = F), lu(F)) : (Be = null);
                    }
                    break t;
                  }
              }
              (tt = 0), (gn = null), Ui(e, r, f, 5);
              break;
            case 6:
              (tt = 0), (gn = null), Ui(e, r, f, 6);
              break;
            case 8:
              lf(), (yt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        Ok();
        break;
      } catch (U) {
        Ng(e, U);
      }
    while (!0);
    return (
      (mr = Aa = null),
      (z.H = l),
      (z.A = c),
      (et = o),
      Be !== null ? 0 : ((ct = null), (qe = 0), Dl(), yt)
    );
  }
  function Ok() {
    for (; Be !== null && !yo(); ) Dg(Be);
  }
  function Dg(e) {
    var r = ng(e.alternate, e, _r);
    (e.memoizedProps = e.pendingProps), r === null ? lu(e) : (Be = r);
  }
  function Pg(e) {
    var r = e,
      o = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = Gm(o, r, r.pendingProps, r.type, void 0, qe);
        break;
      case 11:
        r = Gm(o, r, r.pendingProps, r.type.render, r.ref, qe);
        break;
      case 5:
        _d(r);
      default:
        ag(o, r), (r = Be = Mp(r, _r)), (r = ng(o, r, _r));
    }
    (e.memoizedProps = e.pendingProps), r === null ? lu(e) : (Be = r);
  }
  function Ui(e, r, o, l) {
    (mr = Aa = null), _d(r), (Li = null), (Zo = 0);
    var c = r.return;
    try {
      if (gk(e, c, r, o, qe)) {
        (yt = 1), Ql(e, Cn(o, e.current)), (Be = null);
        return;
      }
    } catch (f) {
      if (c !== null) throw ((Be = c), f);
      (yt = 1), Ql(e, Cn(o, e.current)), (Be = null);
      return;
    }
    r.flags & 32768
      ? (Xe || l === 1
          ? (e = !0)
          : Ii || (qe & 536870912) !== 0
            ? (e = !1)
            : ((ra = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Dn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Mg(r, e))
      : lu(r);
  }
  function lu(e) {
    var r = e;
    do {
      if ((r.flags & 32768) !== 0) {
        Mg(r, ra);
        return;
      }
      e = r.return;
      var o = vk(r.alternate, r, _r);
      if (o !== null) {
        Be = o;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Be = r;
        return;
      }
      Be = r = e;
    } while (r !== null);
    yt === 0 && (yt = 5);
  }
  function Mg(e, r) {
    do {
      var o = bk(e.alternate, e);
      if (o !== null) {
        (o.flags &= 32767), (Be = o);
        return;
      }
      if (
        ((o = e.return),
        o !== null && ((o.flags |= 32768), (o.subtreeFlags = 0), (o.deletions = null)),
        !r && ((e = e.sibling), e !== null))
      ) {
        Be = e;
        return;
      }
      Be = e = o;
    } while (e !== null);
    (yt = 6), (Be = null);
  }
  function Tg(e, r, o, l, c, f, y, w, S) {
    e.cancelPendingCommit = null;
    do uu();
    while ($t !== 0);
    if ((et & 6) !== 0) throw Error(i(327));
    if (r !== null) {
      if (r === e.current) throw Error(i(177));
      if (
        ((f = r.lanes | r.childLanes),
        (f |= Qc),
        Nc(e, o, f, y, w, S),
        e === ct && ((Be = ct = null), (qe = 0)),
        (zi = r),
        (oa = e),
        (Vi = o),
        (af = f),
        (of = c),
        (xg = l),
        (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Mk(O, function () {
              return Ag(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (r.flags & 13878) !== 0),
        (r.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = z.T), (z.T = null), (c = G.p), (G.p = 2), (y = et), (et |= 4);
        try {
          wk(e, r, o);
        } finally {
          (et = y), (G.p = c), (z.T = l);
        }
      }
      ($t = 1), Rg(), jg(), Lg();
    }
  }
  function Rg() {
    if ($t === 1) {
      $t = 0;
      var e = oa,
        r = zi,
        o = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || o) {
        (o = z.T), (z.T = null);
        var l = G.p;
        G.p = 2;
        var c = et;
        et |= 4;
        try {
          mg(r, e);
          var f = xf,
            y = kp(e.containerInfo),
            w = f.focusedElem,
            S = f.selectionRange;
          if (y !== w && w && w.ownerDocument && wp(w.ownerDocument.documentElement, w)) {
            if (S !== null && Kc(w)) {
              var F = S.start,
                U = S.end;
              if ((U === void 0 && (U = F), 'selectionStart' in w))
                (w.selectionStart = F), (w.selectionEnd = Math.min(U, w.value.length));
              else {
                var K = w.ownerDocument || document,
                  $ = (K && K.defaultView) || window;
                if ($.getSelection) {
                  var W = $.getSelection(),
                    Oe = w.textContent.length,
                    xe = Math.min(S.start, Oe),
                    ot = S.end === void 0 ? xe : Math.min(S.end, Oe);
                  !W.extend && xe > ot && ((y = ot), (ot = xe), (xe = y));
                  var R = bp(w, xe),
                    P = bp(w, ot);
                  if (
                    R &&
                    P &&
                    (W.rangeCount !== 1 ||
                      W.anchorNode !== R.node ||
                      W.anchorOffset !== R.offset ||
                      W.focusNode !== P.node ||
                      W.focusOffset !== P.offset)
                  ) {
                    var L = K.createRange();
                    L.setStart(R.node, R.offset),
                      W.removeAllRanges(),
                      xe > ot
                        ? (W.addRange(L), W.extend(P.node, P.offset))
                        : (L.setEnd(P.node, P.offset), W.addRange(L));
                  }
                }
              }
            }
            for (K = [], W = w; (W = W.parentNode); )
              W.nodeType === 1 && K.push({ element: W, left: W.scrollLeft, top: W.scrollTop });
            for (typeof w.focus == 'function' && w.focus(), w = 0; w < K.length; w++) {
              var Z = K[w];
              (Z.element.scrollLeft = Z.left), (Z.element.scrollTop = Z.top);
            }
          }
          (ku = !!kf), (xf = kf = null);
        } finally {
          (et = c), (G.p = l), (z.T = o);
        }
      }
      (e.current = r), ($t = 2);
    }
  }
  function jg() {
    if ($t === 2) {
      $t = 0;
      var e = oa,
        r = zi,
        o = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || o) {
        (o = z.T), (z.T = null);
        var l = G.p;
        G.p = 2;
        var c = et;
        et |= 4;
        try {
          dg(e, r.alternate, r);
        } finally {
          (et = c), (G.p = l), (z.T = o);
        }
      }
      $t = 3;
    }
  }
  function Lg() {
    if ($t === 4 || $t === 3) {
      ($t = 0), oi();
      var e = oa,
        r = zi,
        o = Vi,
        l = xg;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
        ? ($t = 5)
        : (($t = 0), (zi = oa = null), Fg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (ia = null),
        Oc(o),
        (r = r.stateNode),
        ie && typeof ie.onCommitFiberRoot == 'function')
      )
        try {
          ie.onCommitFiberRoot(J, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (r = z.T), (c = G.p), (G.p = 2), (z.T = null);
        try {
          for (var f = e.onRecoverableError, y = 0; y < l.length; y++) {
            var w = l[y];
            f(w.value, { componentStack: w.stack });
          }
        } finally {
          (z.T = r), (G.p = c);
        }
      }
      (Vi & 3) !== 0 && uu(),
        Hn(e),
        (c = e.pendingLanes),
        (o & 4194090) !== 0 && (c & 42) !== 0 ? (e === sf ? es++ : ((es = 0), (sf = e))) : (es = 0),
        ts(0);
    }
  }
  function Fg(e, r) {
    (e.pooledCacheLanes &= r) === 0 &&
      ((r = e.pooledCache), r != null && ((e.pooledCache = null), jo(r)));
  }
  function uu(e) {
    return Rg(), jg(), Lg(), Ag();
  }
  function Ag() {
    if ($t !== 5) return !1;
    var e = oa,
      r = af;
    af = 0;
    var o = Oc(Vi),
      l = z.T,
      c = G.p;
    try {
      (G.p = 32 > o ? 32 : o), (z.T = null), (o = of), (of = null);
      var f = oa,
        y = Vi;
      if ((($t = 0), (zi = oa = null), (Vi = 0), (et & 6) !== 0)) throw Error(i(331));
      var w = et;
      if (
        ((et |= 4),
        wg(f.current),
        yg(f, f.current, y, o),
        (et = w),
        ts(0, !1),
        ie && typeof ie.onPostCommitFiberRoot == 'function')
      )
        try {
          ie.onPostCommitFiberRoot(J, f);
        } catch {}
      return !0;
    } finally {
      (G.p = c), (z.T = l), Fg(e, r);
    }
  }
  function $g(e, r, o) {
    (r = Cn(o, r)), (r = $d(e.stateNode, r, 2)), (e = Gr(e, r, 2)), e !== null && (Na(e, 2), Hn(e));
  }
  function ut(e, r, o) {
    if (e.tag === 3) $g(e, e, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          $g(r, e, o);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (ia === null || !ia.has(l)))
          ) {
            (e = Cn(o, e)),
              (o = Vm(2)),
              (l = Gr(r, o, 2)),
              l !== null && (Bm(o, l, r, e), Na(l, 2), Hn(l));
            break;
          }
        }
        r = r.return;
      }
  }
  function df(e, r, o) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Sk();
      var c = new Set();
      l.set(r, c);
    } else (c = l.get(r)), c === void 0 && ((c = new Set()), l.set(r, c));
    c.has(o) || ((ef = !0), c.add(o), (e = Ek.bind(null, e, r, o)), r.then(e, e));
  }
  function Ek(e, r, o) {
    var l = e.pingCache;
    l !== null && l.delete(r),
      (e.pingedLanes |= e.suspendedLanes & o),
      (e.warmLanes &= ~o),
      ct === e &&
        (qe & o) === o &&
        (yt === 4 || (yt === 3 && (qe & 62914560) === qe && 300 > Vt() - rf)
          ? (et & 2) === 0 && Bi(e, 0)
          : (tf |= o),
        Wi === qe && (Wi = 0)),
      Hn(e);
  }
  function Ig(e, r) {
    r === 0 && (r = dn()), (e = Ci(e, r)), e !== null && (Na(e, r), Hn(e));
  }
  function Dk(e) {
    var r = e.memoizedState,
      o = 0;
    r !== null && (o = r.retryLane), Ig(e, o);
  }
  function Pk(e, r) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(r), Ig(e, o);
  }
  function Mk(e, r) {
    return Sa(e, r);
  }
  var cu = null,
    Zi = null,
    ff = !1,
    du = !1,
    hf = !1,
    Ua = 0;
  function Hn(e) {
    e !== Zi && e.next === null && (Zi === null ? (cu = Zi = e) : (Zi = Zi.next = e)),
      (du = !0),
      ff || ((ff = !0), Rk());
  }
  function ts(e, r) {
    if (!hf && du) {
      hf = !0;
      do
        for (var o = !1, l = cu; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var y = l.suspendedLanes,
                w = l.pingedLanes;
              (f = (1 << (31 - Ze(42 | e) + 1)) - 1),
                (f &= c & ~(y & ~w)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((o = !0), Bg(l, f));
          } else
            (f = qe),
              (f = Kt(
                l,
                l === ct ? f : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (f & 3) === 0 || _t(l, f) || ((o = !0), Bg(l, f));
          l = l.next;
        }
      while (o);
      hf = !1;
    }
  }
  function Tk() {
    Wg();
  }
  function Wg() {
    du = ff = !1;
    var e = 0;
    Ua !== 0 && (zk() && (e = Ua), (Ua = 0));
    for (var r = Vt(), o = null, l = cu; l !== null; ) {
      var c = l.next,
        f = zg(l, r);
      f === 0
        ? ((l.next = null), o === null ? (cu = c) : (o.next = c), c === null && (Zi = o))
        : ((o = l), (e !== 0 || (f & 3) !== 0) && (du = !0)),
        (l = c);
    }
    ts(e);
  }
  function zg(e, r) {
    for (
      var o = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var y = 31 - Ze(f),
        w = 1 << y,
        S = c[y];
      S === -1
        ? ((w & o) === 0 || (w & l) !== 0) && (c[y] = ui(w, r))
        : S <= r && (e.expiredLanes |= w),
        (f &= ~w);
    }
    if (
      ((r = ct),
      (o = qe),
      (o = Kt(e, e === r ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      o === 0 || (e === r && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null)
    )
      return l !== null && l !== null && Ur(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((o & 3) === 0 || _t(e, o)) {
      if (((r = o & -o), r === e.callbackPriority)) return r;
      switch ((l !== null && Ur(l), Oc(o))) {
        case 2:
        case 8:
          o = _a;
          break;
        case 32:
          o = O;
          break;
        case 268435456:
          o = B;
          break;
        default:
          o = O;
      }
      return (
        (l = Vg.bind(null, e)), (o = Sa(o, l)), (e.callbackPriority = r), (e.callbackNode = o), r
      );
    }
    return l !== null && l !== null && Ur(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function Vg(e, r) {
    if ($t !== 0 && $t !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var o = e.callbackNode;
    if (uu() && e.callbackNode !== o) return null;
    var l = qe;
    return (
      (l = Kt(e, e === ct ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : (_g(e, l, r),
          zg(e, Vt()),
          e.callbackNode != null && e.callbackNode === o ? Vg.bind(null, e) : null)
    );
  }
  function Bg(e, r) {
    if (uu()) return null;
    _g(e, r, !0);
  }
  function Rk() {
    Bk(function () {
      (et & 6) !== 0 ? Sa(si, Tk) : Wg();
    });
  }
  function pf() {
    return Ua === 0 && (Ua = Ot()), Ua;
  }
  function Ug(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : xl('' + e);
  }
  function Zg(e, r) {
    var o = r.ownerDocument.createElement('input');
    return (
      (o.name = r.name),
      (o.value = r.value),
      e.id && o.setAttribute('form', e.id),
      r.parentNode.insertBefore(o, r),
      (e = new FormData(e)),
      o.parentNode.removeChild(o),
      e
    );
  }
  function jk(e, r, o, l, c) {
    if (r === 'submit' && o && o.stateNode === c) {
      var f = Ug((c[an] || null).action),
        y = l.submitter;
      y &&
        ((r = (r = y[an] || null) ? Ug(r.formAction) : y.getAttribute('formAction')),
        r !== null && ((f = r), (y = null)));
      var w = new Nl('action', 'action', null, l, c);
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ua !== 0) {
                  var S = y ? Zg(c, y) : new FormData(c);
                  Rd(o, { pending: !0, data: S, method: c.method, action: f }, null, S);
                }
              } else
                typeof f == 'function' &&
                  (w.preventDefault(),
                  (S = y ? Zg(c, y) : new FormData(c)),
                  Rd(o, { pending: !0, data: S, method: c.method, action: f }, f, S));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var mf = 0; mf < Jc.length; mf++) {
    var gf = Jc[mf],
      Lk = gf.toLowerCase(),
      Fk = gf[0].toUpperCase() + gf.slice(1);
    Rn(Lk, 'on' + Fk);
  }
  Rn(_p, 'onAnimationEnd'),
    Rn(Cp, 'onAnimationIteration'),
    Rn(Np, 'onAnimationStart'),
    Rn('dblclick', 'onDoubleClick'),
    Rn('focusin', 'onFocus'),
    Rn('focusout', 'onBlur'),
    Rn(Qw, 'onTransitionRun'),
    Rn(ek, 'onTransitionStart'),
    Rn(tk, 'onTransitionCancel'),
    Rn(Op, 'onTransitionEnd'),
    mi('onMouseEnter', ['mouseout', 'mouseover']),
    mi('onMouseLeave', ['mouseout', 'mouseover']),
    mi('onPointerEnter', ['pointerout', 'pointerover']),
    mi('onPointerLeave', ['pointerout', 'pointerover']),
    Ea('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ea(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Ea('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ea('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ea(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Ea(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var ns =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ak = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(ns)
    );
  function qg(e, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var l = e[o],
        c = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (r)
          for (var y = l.length - 1; 0 <= y; y--) {
            var w = l[y],
              S = w.instance,
              F = w.currentTarget;
            if (((w = w.listener), S !== f && c.isPropagationStopped())) break e;
            (f = w), (c.currentTarget = F);
            try {
              f(c);
            } catch (U) {
              Jl(U);
            }
            (c.currentTarget = null), (f = S);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((w = l[y]),
              (S = w.instance),
              (F = w.currentTarget),
              (w = w.listener),
              S !== f && c.isPropagationStopped())
            )
              break e;
            (f = w), (c.currentTarget = F);
            try {
              f(c);
            } catch (U) {
              Jl(U);
            }
            (c.currentTarget = null), (f = S);
          }
      }
    }
  }
  function Ue(e, r) {
    var o = r[Ec];
    o === void 0 && (o = r[Ec] = new Set());
    var l = e + '__bubble';
    o.has(l) || (Yg(r, e, 2, !1), o.add(l));
  }
  function yf(e, r, o) {
    var l = 0;
    r && (l |= 4), Yg(o, e, l, r);
  }
  var fu = '_reactListening' + Math.random().toString(36).slice(2);
  function vf(e) {
    if (!e[fu]) {
      (e[fu] = !0),
        Wh.forEach(function (o) {
          o !== 'selectionchange' && (Ak.has(o) || yf(o, !1, e), yf(o, !0, e));
        });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[fu] || ((r[fu] = !0), yf('selectionchange', !1, r));
    }
  }
  function Yg(e, r, o, l) {
    switch (yy(r)) {
      case 2:
        var c = cx;
        break;
      case 8:
        c = dx;
        break;
      default:
        c = Tf;
    }
    (o = c.bind(null, r, o, e)),
      (c = void 0),
      !Ic || (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') || (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(r, o, { capture: !0, passive: c })
          : e.addEventListener(r, o, !0)
        : c !== void 0
          ? e.addEventListener(r, o, { passive: c })
          : e.addEventListener(r, o, !1);
  }
  function bf(e, r, o, l, c) {
    var f = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var w = l.stateNode.containerInfo;
          if (w === c) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === c) return;
              y = y.return;
            }
          for (; w !== null; ) {
            if (((y = fi(w)), y === null)) return;
            if (((S = y.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = f = y;
              continue e;
            }
            w = w.parentNode;
          }
        }
        l = l.return;
      }
    ep(function () {
      var F = f,
        U = Ac(o),
        K = [];
      e: {
        var $ = Ep.get(e);
        if ($ !== void 0) {
          var W = Nl,
            Oe = e;
          switch (e) {
            case 'keypress':
              if (_l(o) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = Mw;
              break;
            case 'focusin':
              (Oe = 'focus'), (W = Bc);
              break;
            case 'focusout':
              (Oe = 'blur'), (W = Bc);
              break;
            case 'beforeblur':
            case 'afterblur':
              W = Bc;
              break;
            case 'click':
              if (o.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              W = rp;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = bw;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = jw;
              break;
            case _p:
            case Cp:
            case Np:
              W = xw;
              break;
            case Op:
              W = Fw;
              break;
            case 'scroll':
            case 'scrollend':
              W = yw;
              break;
            case 'wheel':
              W = $w;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = _w;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = ip;
              break;
            case 'toggle':
            case 'beforetoggle':
              W = Ww;
          }
          var xe = (r & 4) !== 0,
            ot = !xe && (e === 'scroll' || e === 'scrollend'),
            R = xe ? ($ !== null ? $ + 'Capture' : null) : $;
          xe = [];
          for (var P = F, L; P !== null; ) {
            var Z = P;
            if (
              ((L = Z.stateNode),
              (Z = Z.tag),
              (Z !== 5 && Z !== 26 && Z !== 27) ||
                L === null ||
                R === null ||
                ((Z = ko(P, R)), Z != null && xe.push(rs(P, Z, L))),
              ot)
            )
              break;
            P = P.return;
          }
          0 < xe.length && (($ = new W($, Oe, null, o, U)), K.push({ event: $, listeners: xe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            (($ = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            $ && o !== Fc && (Oe = o.relatedTarget || o.fromElement) && (fi(Oe) || Oe[di]))
          )
            break e;
          if (
            (W || $) &&
            (($ =
              U.window === U
                ? U
                : ($ = U.ownerDocument)
                  ? $.defaultView || $.parentWindow
                  : window),
            W
              ? ((Oe = o.relatedTarget || o.toElement),
                (W = F),
                (Oe = Oe ? fi(Oe) : null),
                Oe !== null &&
                  ((ot = u(Oe)), (xe = Oe.tag), Oe !== ot || (xe !== 5 && xe !== 27 && xe !== 6)) &&
                  (Oe = null))
              : ((W = null), (Oe = F)),
            W !== Oe)
          ) {
            if (
              ((xe = rp),
              (Z = 'onMouseLeave'),
              (R = 'onMouseEnter'),
              (P = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((xe = ip), (Z = 'onPointerLeave'), (R = 'onPointerEnter'), (P = 'pointer')),
              (ot = W == null ? $ : wo(W)),
              (L = Oe == null ? $ : wo(Oe)),
              ($ = new xe(Z, P + 'leave', W, o, U)),
              ($.target = ot),
              ($.relatedTarget = L),
              (Z = null),
              fi(U) === F &&
                ((xe = new xe(R, P + 'enter', Oe, o, U)),
                (xe.target = L),
                (xe.relatedTarget = ot),
                (Z = xe)),
              (ot = Z),
              W && Oe)
            )
              t: {
                for (xe = W, R = Oe, P = 0, L = xe; L; L = qi(L)) P++;
                for (L = 0, Z = R; Z; Z = qi(Z)) L++;
                for (; 0 < P - L; ) (xe = qi(xe)), P--;
                for (; 0 < L - P; ) (R = qi(R)), L--;
                for (; P--; ) {
                  if (xe === R || (R !== null && xe === R.alternate)) break t;
                  (xe = qi(xe)), (R = qi(R));
                }
                xe = null;
              }
            else xe = null;
            W !== null && Kg(K, $, W, xe, !1), Oe !== null && ot !== null && Kg(K, ot, Oe, xe, !0);
          }
        }
        e: {
          if (
            (($ = F ? wo(F) : window),
            (W = $.nodeName && $.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && $.type === 'file'))
          )
            var pe = hp;
          else if (dp($))
            if (pp) pe = Gw;
            else {
              pe = Kw;
              var ze = Yw;
            }
          else
            (W = $.nodeName),
              !W || W.toLowerCase() !== 'input' || ($.type !== 'checkbox' && $.type !== 'radio')
                ? F && Lc(F.elementType) && (pe = hp)
                : (pe = Hw);
          if (pe && (pe = pe(e, F))) {
            fp(K, pe, o, U);
            break e;
          }
          ze && ze(e, $, F),
            e === 'focusout' &&
              F &&
              $.type === 'number' &&
              F.memoizedProps.value != null &&
              jc($, 'number', $.value);
        }
        switch (((ze = F ? wo(F) : window), e)) {
          case 'focusin':
            (dp(ze) || ze.contentEditable === 'true') && ((xi = ze), (Hc = F), (Do = null));
            break;
          case 'focusout':
            Do = Hc = xi = null;
            break;
          case 'mousedown':
            Gc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Gc = !1), xp(K, o, U);
            break;
          case 'selectionchange':
            if (Jw) break;
          case 'keydown':
          case 'keyup':
            xp(K, o, U);
        }
        var ye;
        if (Zc)
          e: {
            switch (e) {
              case 'compositionstart':
                var Se = 'onCompositionStart';
                break e;
              case 'compositionend':
                Se = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Se = 'onCompositionUpdate';
                break e;
            }
            Se = void 0;
          }
        else
          ki
            ? up(e, o) && (Se = 'onCompositionEnd')
            : e === 'keydown' && o.keyCode === 229 && (Se = 'onCompositionStart');
        Se &&
          (op &&
            o.locale !== 'ko' &&
            (ki || Se !== 'onCompositionStart'
              ? Se === 'onCompositionEnd' && ki && (ye = tp())
              : ((qr = U), (Wc = 'value' in qr ? qr.value : qr.textContent), (ki = !0))),
          (ze = hu(F, Se)),
          0 < ze.length &&
            ((Se = new ap(Se, e, null, o, U)),
            K.push({ event: Se, listeners: ze }),
            ye ? (Se.data = ye) : ((ye = cp(o)), ye !== null && (Se.data = ye)))),
          (ye = Vw ? Bw(e, o) : Uw(e, o)) &&
            ((Se = hu(F, 'onBeforeInput')),
            0 < Se.length &&
              ((ze = new ap('onBeforeInput', 'beforeinput', null, o, U)),
              K.push({ event: ze, listeners: Se }),
              (ze.data = ye))),
          jk(K, e, F, o, U);
      }
      qg(K, r);
    });
  }
  function rs(e, r, o) {
    return { instance: e, listener: r, currentTarget: o };
  }
  function hu(e, r) {
    for (var o = r + 'Capture', l = []; e !== null; ) {
      var c = e,
        f = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          f === null ||
          ((c = ko(e, o)),
          c != null && l.unshift(rs(e, c, f)),
          (c = ko(e, r)),
          c != null && l.push(rs(e, c, f))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function qi(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Kg(e, r, o, l, c) {
    for (var f = r._reactName, y = []; o !== null && o !== l; ) {
      var w = o,
        S = w.alternate,
        F = w.stateNode;
      if (((w = w.tag), S !== null && S === l)) break;
      (w !== 5 && w !== 26 && w !== 27) ||
        F === null ||
        ((S = F),
        c
          ? ((F = ko(o, f)), F != null && y.unshift(rs(o, F, S)))
          : c || ((F = ko(o, f)), F != null && y.push(rs(o, F, S)))),
        (o = o.return);
    }
    y.length !== 0 && e.push({ event: r, listeners: y });
  }
  var $k = /\r\n?/g,
    Ik = /\u0000|\uFFFD/g;
  function Hg(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        $k,
        `
`
      )
      .replace(Ik, '');
  }
  function Gg(e, r) {
    return (r = Hg(r)), Hg(e) === r;
  }
  function pu() {}
  function it(e, r, o, l, c, f) {
    switch (o) {
      case 'children':
        typeof l == 'string'
          ? r === 'body' || (r === 'textarea' && l === '') || vi(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && r !== 'body' && vi(e, '' + l);
        break;
      case 'className':
        bl(e, 'class', l);
        break;
      case 'tabIndex':
        bl(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        bl(e, o, l);
        break;
      case 'style':
        Jh(e, l, f);
        break;
      case 'data':
        if (r !== 'object') {
          bl(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (r !== 'a' || o !== 'href')) {
          e.removeAttribute(o);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(o);
          break;
        }
        (l = xl('' + l)), e.setAttribute(o, l);
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == 'function' &&
            (o === 'formAction'
              ? (r !== 'input' && it(e, r, 'name', c.name, c, null),
                it(e, r, 'formEncType', c.formEncType, c, null),
                it(e, r, 'formMethod', c.formMethod, c, null),
                it(e, r, 'formTarget', c.formTarget, c, null))
              : (it(e, r, 'encType', c.encType, c, null),
                it(e, r, 'method', c.method, c, null),
                it(e, r, 'target', c.target, c, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(o);
          break;
        }
        (l = xl('' + l)), e.setAttribute(o, l);
        break;
      case 'onClick':
        l != null && (e.onclick = pu);
        break;
      case 'onScroll':
        l != null && Ue('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ue('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(i(61));
          if (((o = l.__html), o != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = o;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (o = xl('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', o);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(o, '' + l)
          : e.removeAttribute(o);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(o, '')
          : e.removeAttribute(o);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(o, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(o, l)
            : e.removeAttribute(o);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? e.setAttribute(o, l)
          : e.removeAttribute(o);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(o)
          : e.setAttribute(o, l);
        break;
      case 'popover':
        Ue('beforetoggle', e), Ue('toggle', e), vl(e, 'popover', l);
        break;
      case 'xlinkActuate':
        cr(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        cr(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        cr(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        cr(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        cr(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        cr(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        cr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        cr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        cr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        vl(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < o.length) || (o[0] !== 'o' && o[0] !== 'O') || (o[1] !== 'n' && o[1] !== 'N')) &&
          ((o = mw.get(o) || o), vl(e, o, l));
    }
  }
  function wf(e, r, o, l, c, f) {
    switch (o) {
      case 'style':
        Jh(e, l, f);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(i(61));
          if (((o = l.__html), o != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = o;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? vi(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && vi(e, '' + l);
        break;
      case 'onScroll':
        l != null && Ue('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ue('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = pu);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!zh.hasOwnProperty(o))
          e: {
            if (
              o[0] === 'o' &&
              o[1] === 'n' &&
              ((c = o.endsWith('Capture')),
              (r = o.slice(2, c ? o.length - 7 : void 0)),
              (f = e[an] || null),
              (f = f != null ? f[o] : null),
              typeof f == 'function' && e.removeEventListener(r, f, c),
              typeof l == 'function')
            ) {
              typeof f != 'function' &&
                f !== null &&
                (o in e ? (e[o] = null) : e.hasAttribute(o) && e.removeAttribute(o)),
                e.addEventListener(r, l, c);
              break e;
            }
            o in e ? (e[o] = l) : l === !0 ? e.setAttribute(o, '') : vl(e, o, l);
          }
    }
  }
  function It(e, r, o) {
    switch (r) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        Ue('error', e), Ue('load', e);
        var l = !1,
          c = !1,
          f;
        for (f in o)
          if (o.hasOwnProperty(f)) {
            var y = o[f];
            if (y != null)
              switch (f) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  c = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(i(137, r));
                default:
                  it(e, r, f, y, o, null);
              }
          }
        c && it(e, r, 'srcSet', o.srcSet, o, null), l && it(e, r, 'src', o.src, o, null);
        return;
      case 'input':
        Ue('invalid', e);
        var w = (f = y = c = null),
          S = null,
          F = null;
        for (l in o)
          if (o.hasOwnProperty(l)) {
            var U = o[l];
            if (U != null)
              switch (l) {
                case 'name':
                  c = U;
                  break;
                case 'type':
                  y = U;
                  break;
                case 'checked':
                  S = U;
                  break;
                case 'defaultChecked':
                  F = U;
                  break;
                case 'value':
                  f = U;
                  break;
                case 'defaultValue':
                  w = U;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (U != null) throw Error(i(137, r));
                  break;
                default:
                  it(e, r, l, U, o, null);
              }
          }
        Kh(e, f, w, S, F, y, c, !1), wl(e);
        return;
      case 'select':
        Ue('invalid', e), (l = y = f = null);
        for (c in o)
          if (o.hasOwnProperty(c) && ((w = o[c]), w != null))
            switch (c) {
              case 'value':
                f = w;
                break;
              case 'defaultValue':
                y = w;
                break;
              case 'multiple':
                l = w;
              default:
                it(e, r, c, w, o, null);
            }
        (r = f),
          (o = y),
          (e.multiple = !!l),
          r != null ? yi(e, !!l, r, !1) : o != null && yi(e, !!l, o, !0);
        return;
      case 'textarea':
        Ue('invalid', e), (f = c = l = null);
        for (y in o)
          if (o.hasOwnProperty(y) && ((w = o[y]), w != null))
            switch (y) {
              case 'value':
                l = w;
                break;
              case 'defaultValue':
                c = w;
                break;
              case 'children':
                f = w;
                break;
              case 'dangerouslySetInnerHTML':
                if (w != null) throw Error(i(91));
                break;
              default:
                it(e, r, y, w, o, null);
            }
        Gh(e, l, c, f), wl(e);
        return;
      case 'option':
        for (S in o)
          if (o.hasOwnProperty(S) && ((l = o[S]), l != null))
            switch (S) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                it(e, r, S, l, o, null);
            }
        return;
      case 'dialog':
        Ue('beforetoggle', e), Ue('toggle', e), Ue('cancel', e), Ue('close', e);
        break;
      case 'iframe':
      case 'object':
        Ue('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < ns.length; l++) Ue(ns[l], e);
        break;
      case 'image':
        Ue('error', e), Ue('load', e);
        break;
      case 'details':
        Ue('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Ue('error', e), Ue('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (F in o)
          if (o.hasOwnProperty(F) && ((l = o[F]), l != null))
            switch (F) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, r));
              default:
                it(e, r, F, l, o, null);
            }
        return;
      default:
        if (Lc(r)) {
          for (U in o)
            o.hasOwnProperty(U) && ((l = o[U]), l !== void 0 && wf(e, r, U, l, o, void 0));
          return;
        }
    }
    for (w in o) o.hasOwnProperty(w) && ((l = o[w]), l != null && it(e, r, w, l, o, null));
  }
  function Wk(e, r, o, l) {
    switch (r) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var c = null,
          f = null,
          y = null,
          w = null,
          S = null,
          F = null,
          U = null;
        for (W in o) {
          var K = o[W];
          if (o.hasOwnProperty(W) && K != null)
            switch (W) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                S = K;
              default:
                l.hasOwnProperty(W) || it(e, r, W, null, l, K);
            }
        }
        for (var $ in l) {
          var W = l[$];
          if (((K = o[$]), l.hasOwnProperty($) && (W != null || K != null)))
            switch ($) {
              case 'type':
                f = W;
                break;
              case 'name':
                c = W;
                break;
              case 'checked':
                F = W;
                break;
              case 'defaultChecked':
                U = W;
                break;
              case 'value':
                y = W;
                break;
              case 'defaultValue':
                w = W;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (W != null) throw Error(i(137, r));
                break;
              default:
                W !== K && it(e, r, $, W, l, K);
            }
        }
        Rc(e, y, w, S, F, U, f, c);
        return;
      case 'select':
        W = y = w = $ = null;
        for (f in o)
          if (((S = o[f]), o.hasOwnProperty(f) && S != null))
            switch (f) {
              case 'value':
                break;
              case 'multiple':
                W = S;
              default:
                l.hasOwnProperty(f) || it(e, r, f, null, l, S);
            }
        for (c in l)
          if (((f = l[c]), (S = o[c]), l.hasOwnProperty(c) && (f != null || S != null)))
            switch (c) {
              case 'value':
                $ = f;
                break;
              case 'defaultValue':
                w = f;
                break;
              case 'multiple':
                y = f;
              default:
                f !== S && it(e, r, c, f, l, S);
            }
        (r = w),
          (o = y),
          (l = W),
          $ != null
            ? yi(e, !!o, $, !1)
            : !!l != !!o && (r != null ? yi(e, !!o, r, !0) : yi(e, !!o, o ? [] : '', !1));
        return;
      case 'textarea':
        W = $ = null;
        for (w in o)
          if (((c = o[w]), o.hasOwnProperty(w) && c != null && !l.hasOwnProperty(w)))
            switch (w) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                it(e, r, w, null, l, c);
            }
        for (y in l)
          if (((c = l[y]), (f = o[y]), l.hasOwnProperty(y) && (c != null || f != null)))
            switch (y) {
              case 'value':
                $ = c;
                break;
              case 'defaultValue':
                W = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== f && it(e, r, y, c, l, f);
            }
        Hh(e, $, W);
        return;
      case 'option':
        for (var Oe in o)
          if ((($ = o[Oe]), o.hasOwnProperty(Oe) && $ != null && !l.hasOwnProperty(Oe)))
            switch (Oe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                it(e, r, Oe, null, l, $);
            }
        for (S in l)
          if ((($ = l[S]), (W = o[S]), l.hasOwnProperty(S) && $ !== W && ($ != null || W != null)))
            switch (S) {
              case 'selected':
                e.selected = $ && typeof $ != 'function' && typeof $ != 'symbol';
                break;
              default:
                it(e, r, S, $, l, W);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var xe in o)
          ($ = o[xe]),
            o.hasOwnProperty(xe) && $ != null && !l.hasOwnProperty(xe) && it(e, r, xe, null, l, $);
        for (F in l)
          if ((($ = l[F]), (W = o[F]), l.hasOwnProperty(F) && $ !== W && ($ != null || W != null)))
            switch (F) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if ($ != null) throw Error(i(137, r));
                break;
              default:
                it(e, r, F, $, l, W);
            }
        return;
      default:
        if (Lc(r)) {
          for (var ot in o)
            ($ = o[ot]),
              o.hasOwnProperty(ot) &&
                $ !== void 0 &&
                !l.hasOwnProperty(ot) &&
                wf(e, r, ot, void 0, l, $);
          for (U in l)
            ($ = l[U]),
              (W = o[U]),
              !l.hasOwnProperty(U) ||
                $ === W ||
                ($ === void 0 && W === void 0) ||
                wf(e, r, U, $, l, W);
          return;
        }
    }
    for (var R in o)
      ($ = o[R]),
        o.hasOwnProperty(R) && $ != null && !l.hasOwnProperty(R) && it(e, r, R, null, l, $);
    for (K in l)
      ($ = l[K]),
        (W = o[K]),
        !l.hasOwnProperty(K) || $ === W || ($ == null && W == null) || it(e, r, K, $, l, W);
  }
  var kf = null,
    xf = null;
  function mu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xg(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Jg(e, r) {
    if (e === 0)
      switch (r) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && r === 'foreignObject' ? 0 : e;
  }
  function Sf(e, r) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof r.children == 'string' ||
      typeof r.children == 'number' ||
      typeof r.children == 'bigint' ||
      (typeof r.dangerouslySetInnerHTML == 'object' &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _f = null;
  function zk() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === _f ? !1 : ((_f = e), !0)) : ((_f = null), !1);
  }
  var Qg = typeof setTimeout == 'function' ? setTimeout : void 0,
    Vk = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ey = typeof Promise == 'function' ? Promise : void 0,
    Bk =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ey < 'u'
          ? function (e) {
              return ey.resolve(null).then(e).catch(Uk);
            }
          : Qg;
  function Uk(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function la(e) {
    return e === 'head';
  }
  function ty(e, r) {
    var o = r,
      l = 0,
      c = 0;
    do {
      var f = o.nextSibling;
      if ((e.removeChild(o), f && f.nodeType === 8))
        if (((o = f.data), o === '/$')) {
          if (0 < l && 8 > l) {
            o = l;
            var y = e.ownerDocument;
            if ((o & 1 && as(y.documentElement), o & 2 && as(y.body), o & 4))
              for (o = y.head, as(o), y = o.firstChild; y; ) {
                var w = y.nextSibling,
                  S = y.nodeName;
                y[bo] ||
                  S === 'SCRIPT' ||
                  S === 'STYLE' ||
                  (S === 'LINK' && y.rel.toLowerCase() === 'stylesheet') ||
                  o.removeChild(y),
                  (y = w);
              }
          }
          if (c === 0) {
            e.removeChild(f), fs(r);
            return;
          }
          c--;
        } else o === '$' || o === '$?' || o === '$!' ? c++ : (l = o.charCodeAt(0) - 48);
      else l = 0;
      o = f;
    } while (o);
    fs(r);
  }
  function Cf(e) {
    var r = e.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var o = r;
      switch (((r = r.nextSibling), o.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Cf(o), Dc(o);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (o.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(o);
    }
  }
  function Zk(e, r, o, l) {
    for (; e.nodeType === 1; ) {
      var c = o;
      if (e.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[bo])
          switch (r) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((f = e.getAttribute('rel')),
                (f === 'stylesheet' && e.hasAttribute('data-precedence')) ||
                  f !== c.rel ||
                  e.getAttribute('href') !== (c.href == null || c.href === '' ? null : c.href) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin) ||
                  e.getAttribute('title') !== (c.title == null ? null : c.title))
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((f = e.getAttribute('src')),
                (f !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  f &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (r === 'input' && e.type === 'hidden') {
        var f = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === f) return e;
      } else return e;
      if (((e = Ln(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function qk(e, r, o) {
    if (r === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !o) ||
        ((e = Ln(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Nf(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function Yk(e, r) {
    var o = e.ownerDocument;
    if (e.data !== '$?' || o.readyState === 'complete') r();
    else {
      var l = function () {
        r(), o.removeEventListener('DOMContentLoaded', l);
      };
      o.addEventListener('DOMContentLoaded', l), (e._reactRetry = l);
    }
  }
  function Ln(e) {
    for (; e != null; e = e.nextSibling) {
      var r = e.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = e.data), r === '$' || r === '$!' || r === '$?' || r === 'F!' || r === 'F')) break;
        if (r === '/$') return null;
      }
    }
    return e;
  }
  var Of = null;
  function ny(e) {
    e = e.previousSibling;
    for (var r = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === '$' || o === '$!' || o === '$?') {
          if (r === 0) return e;
          r--;
        } else o === '/$' && r++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ry(e, r, o) {
    switch (((r = mu(o)), e)) {
      case 'html':
        if (((e = r.documentElement), !e)) throw Error(i(452));
        return e;
      case 'head':
        if (((e = r.head), !e)) throw Error(i(453));
        return e;
      case 'body':
        if (((e = r.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function as(e) {
    for (var r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
    Dc(e);
  }
  var Mn = new Map(),
    ay = new Set();
  function gu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Cr = G.d;
  G.d = { f: Kk, r: Hk, D: Gk, C: Xk, L: Jk, m: Qk, X: tx, S: ex, M: nx };
  function Kk() {
    var e = Cr.f(),
      r = su();
    return e || r;
  }
  function Hk(e) {
    var r = hi(e);
    r !== null && r.tag === 5 && r.type === 'form' ? _m(r) : Cr.r(e);
  }
  var Yi = typeof document > 'u' ? null : document;
  function iy(e, r, o) {
    var l = Yi;
    if (l && typeof r == 'string' && r) {
      var c = Tn(r);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof o == 'string' && (c += '[crossorigin="' + o + '"]'),
        ay.has(c) ||
          (ay.add(c),
          (e = { rel: e, crossOrigin: o, href: r }),
          l.querySelector(c) === null &&
            ((r = l.createElement('link')), It(r, 'link', e), Rt(r), l.head.appendChild(r)));
    }
  }
  function Gk(e) {
    Cr.D(e), iy('dns-prefetch', e, null);
  }
  function Xk(e, r) {
    Cr.C(e, r), iy('preconnect', e, r);
  }
  function Jk(e, r, o) {
    Cr.L(e, r, o);
    var l = Yi;
    if (l && e && r) {
      var c = 'link[rel="preload"][as="' + Tn(r) + '"]';
      r === 'image' && o && o.imageSrcSet
        ? ((c += '[imagesrcset="' + Tn(o.imageSrcSet) + '"]'),
          typeof o.imageSizes == 'string' && (c += '[imagesizes="' + Tn(o.imageSizes) + '"]'))
        : (c += '[href="' + Tn(e) + '"]');
      var f = c;
      switch (r) {
        case 'style':
          f = Ki(e);
          break;
        case 'script':
          f = Hi(e);
      }
      Mn.has(f) ||
        ((e = g(
          { rel: 'preload', href: r === 'image' && o && o.imageSrcSet ? void 0 : e, as: r },
          o
        )),
        Mn.set(f, e),
        l.querySelector(c) !== null ||
          (r === 'style' && l.querySelector(is(f))) ||
          (r === 'script' && l.querySelector(os(f))) ||
          ((r = l.createElement('link')), It(r, 'link', e), Rt(r), l.head.appendChild(r)));
    }
  }
  function Qk(e, r) {
    Cr.m(e, r);
    var o = Yi;
    if (o && e) {
      var l = r && typeof r.as == 'string' ? r.as : 'script',
        c = 'link[rel="modulepreload"][as="' + Tn(l) + '"][href="' + Tn(e) + '"]',
        f = c;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = Hi(e);
      }
      if (
        !Mn.has(f) &&
        ((e = g({ rel: 'modulepreload', href: e }, r)), Mn.set(f, e), o.querySelector(c) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (o.querySelector(os(f))) return;
        }
        (l = o.createElement('link')), It(l, 'link', e), Rt(l), o.head.appendChild(l);
      }
    }
  }
  function ex(e, r, o) {
    Cr.S(e, r, o);
    var l = Yi;
    if (l && e) {
      var c = pi(l).hoistableStyles,
        f = Ki(e);
      r = r || 'default';
      var y = c.get(f);
      if (!y) {
        var w = { loading: 0, preload: null };
        if ((y = l.querySelector(is(f)))) w.loading = 5;
        else {
          (e = g({ rel: 'stylesheet', href: e, 'data-precedence': r }, o)),
            (o = Mn.get(f)) && Ef(e, o);
          var S = (y = l.createElement('link'));
          Rt(S),
            It(S, 'link', e),
            (S._p = new Promise(function (F, U) {
              (S.onload = F), (S.onerror = U);
            })),
            S.addEventListener('load', function () {
              w.loading |= 1;
            }),
            S.addEventListener('error', function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            yu(y, r, l);
        }
        (y = { type: 'stylesheet', instance: y, count: 1, state: w }), c.set(f, y);
      }
    }
  }
  function tx(e, r) {
    Cr.X(e, r);
    var o = Yi;
    if (o && e) {
      var l = pi(o).hoistableScripts,
        c = Hi(e),
        f = l.get(c);
      f ||
        ((f = o.querySelector(os(c))),
        f ||
          ((e = g({ src: e, async: !0 }, r)),
          (r = Mn.get(c)) && Df(e, r),
          (f = o.createElement('script')),
          Rt(f),
          It(f, 'link', e),
          o.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        l.set(c, f));
    }
  }
  function nx(e, r) {
    Cr.M(e, r);
    var o = Yi;
    if (o && e) {
      var l = pi(o).hoistableScripts,
        c = Hi(e),
        f = l.get(c);
      f ||
        ((f = o.querySelector(os(c))),
        f ||
          ((e = g({ src: e, async: !0, type: 'module' }, r)),
          (r = Mn.get(c)) && Df(e, r),
          (f = o.createElement('script')),
          Rt(f),
          It(f, 'link', e),
          o.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        l.set(c, f));
    }
  }
  function oy(e, r, o, l) {
    var c = (c = ke.current) ? gu(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof o.precedence == 'string' && typeof o.href == 'string'
          ? ((r = Ki(o.href)),
            (o = pi(c).hoistableStyles),
            (l = o.get(r)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), o.set(r, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          o.rel === 'stylesheet' &&
          typeof o.href == 'string' &&
          typeof o.precedence == 'string'
        ) {
          e = Ki(o.href);
          var f = pi(c).hoistableStyles,
            y = f.get(e);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, y),
              (f = c.querySelector(is(e))) && !f._p && ((y.instance = f), (y.state.loading = 5)),
              Mn.has(e) ||
                ((o = {
                  rel: 'preload',
                  as: 'style',
                  href: o.href,
                  crossOrigin: o.crossOrigin,
                  integrity: o.integrity,
                  media: o.media,
                  hrefLang: o.hrefLang,
                  referrerPolicy: o.referrerPolicy,
                }),
                Mn.set(e, o),
                f || rx(c, e, o, y.state))),
            r && l === null)
          )
            throw Error(i(528, ''));
          return y;
        }
        if (r && l !== null) throw Error(i(529, ''));
        return null;
      case 'script':
        return (
          (r = o.async),
          (o = o.src),
          typeof o == 'string' && r && typeof r != 'function' && typeof r != 'symbol'
            ? ((r = Hi(o)),
              (o = pi(c).hoistableScripts),
              (l = o.get(r)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), o.set(r, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Ki(e) {
    return 'href="' + Tn(e) + '"';
  }
  function is(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function sy(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function rx(e, r, o, l) {
    e.querySelector('link[rel="preload"][as="style"][' + r + ']')
      ? (l.loading = 1)
      : ((r = e.createElement('link')),
        (l.preload = r),
        r.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        r.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        It(r, 'link', o),
        Rt(r),
        e.head.appendChild(r));
  }
  function Hi(e) {
    return '[src="' + Tn(e) + '"]';
  }
  function os(e) {
    return 'script[async]' + e;
  }
  function ly(e, r, o) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Tn(o.href) + '"]');
          if (l) return (r.instance = l), Rt(l), l;
          var c = g({}, o, {
            'data-href': o.href,
            'data-precedence': o.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Rt(l),
            It(l, 'style', c),
            yu(l, o.precedence, e),
            (r.instance = l)
          );
        case 'stylesheet':
          c = Ki(o.href);
          var f = e.querySelector(is(c));
          if (f) return (r.state.loading |= 4), (r.instance = f), Rt(f), f;
          (l = sy(o)),
            (c = Mn.get(c)) && Ef(l, c),
            (f = (e.ownerDocument || e).createElement('link')),
            Rt(f);
          var y = f;
          return (
            (y._p = new Promise(function (w, S) {
              (y.onload = w), (y.onerror = S);
            })),
            It(f, 'link', l),
            (r.state.loading |= 4),
            yu(f, o.precedence, e),
            (r.instance = f)
          );
        case 'script':
          return (
            (f = Hi(o.src)),
            (c = e.querySelector(os(f)))
              ? ((r.instance = c), Rt(c), c)
              : ((l = o),
                (c = Mn.get(f)) && ((l = g({}, o)), Df(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                Rt(c),
                It(c, 'link', l),
                e.head.appendChild(c),
                (r.instance = c))
          );
        case 'void':
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === 'stylesheet' &&
        (r.state.loading & 4) === 0 &&
        ((l = r.instance), (r.state.loading |= 4), yu(l, o.precedence, e));
    return r.instance;
  }
  function yu(e, r, o) {
    for (
      var l = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        c = l.length ? l[l.length - 1] : null,
        f = c,
        y = 0;
      y < l.length;
      y++
    ) {
      var w = l[y];
      if (w.dataset.precedence === r) f = w;
      else if (f !== c) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((r = o.nodeType === 9 ? o.head : o), r.insertBefore(e, r.firstChild));
  }
  function Ef(e, r) {
    e.crossOrigin == null && (e.crossOrigin = r.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = r.referrerPolicy),
      e.title == null && (e.title = r.title);
  }
  function Df(e, r) {
    e.crossOrigin == null && (e.crossOrigin = r.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = r.referrerPolicy),
      e.integrity == null && (e.integrity = r.integrity);
  }
  var vu = null;
  function uy(e, r, o) {
    if (vu === null) {
      var l = new Map(),
        c = (vu = new Map());
      c.set(o, l);
    } else (c = vu), (l = c.get(o)), l || ((l = new Map()), c.set(o, l));
    if (l.has(e)) return l;
    for (l.set(e, null), o = o.getElementsByTagName(e), c = 0; c < o.length; c++) {
      var f = o[c];
      if (
        !(f[bo] || f[Bt] || (e === 'link' && f.getAttribute('rel') === 'stylesheet')) &&
        f.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var y = f.getAttribute(r) || '';
        y = e + y;
        var w = l.get(y);
        w ? w.push(f) : l.set(y, [f]);
      }
    }
    return l;
  }
  function cy(e, r, o) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(o, r === 'title' ? e.querySelector('head > title') : null);
  }
  function ax(e, r, o) {
    if (o === 1 || r.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof r.precedence != 'string' || typeof r.href != 'string' || r.href === '') break;
        return !0;
      case 'link':
        if (
          typeof r.rel != 'string' ||
          typeof r.href != 'string' ||
          r.href === '' ||
          r.onLoad ||
          r.onError
        )
          break;
        switch (r.rel) {
          case 'stylesheet':
            return (e = r.disabled), typeof r.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          r.async &&
          typeof r.async != 'function' &&
          typeof r.async != 'symbol' &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function dy(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var ss = null;
  function ix() {}
  function ox(e, r, o) {
    if (ss === null) throw Error(i(475));
    var l = ss;
    if (
      r.type === 'stylesheet' &&
      (typeof o.media != 'string' || matchMedia(o.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var c = Ki(o.href),
          f = e.querySelector(is(c));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = bu.bind(l)), e.then(l, l)),
            (r.state.loading |= 4),
            (r.instance = f),
            Rt(f);
          return;
        }
        (f = e.ownerDocument || e),
          (o = sy(o)),
          (c = Mn.get(c)) && Ef(o, c),
          (f = f.createElement('link')),
          Rt(f);
        var y = f;
        (y._p = new Promise(function (w, S) {
          (y.onload = w), (y.onerror = S);
        })),
          It(f, 'link', o),
          (r.instance = f);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(r, e),
        (e = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (l.count++,
          (r = bu.bind(l)),
          e.addEventListener('load', r),
          e.addEventListener('error', r));
    }
  }
  function sx() {
    if (ss === null) throw Error(i(475));
    var e = ss;
    return (
      e.stylesheets && e.count === 0 && Pf(e, e.stylesheets),
      0 < e.count
        ? function (r) {
            var o = setTimeout(function () {
              if ((e.stylesheets && Pf(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = r),
              function () {
                (e.unsuspend = null), clearTimeout(o);
              }
            );
          }
        : null
    );
  }
  function bu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Pf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var wu = null;
  function Pf(e, r) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (wu = new Map()), r.forEach(lx, e), (wu = null), bu.call(e));
  }
  function lx(e, r) {
    if (!(r.state.loading & 4)) {
      var o = wu.get(e);
      if (o) var l = o.get(null);
      else {
        (o = new Map()), wu.set(e, o);
        for (
          var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), f = 0;
          f < c.length;
          f++
        ) {
          var y = c[f];
          (y.nodeName === 'LINK' || y.getAttribute('media') !== 'not all') &&
            (o.set(y.dataset.precedence, y), (l = y));
        }
        l && o.set(null, l);
      }
      (c = r.instance),
        (y = c.getAttribute('data-precedence')),
        (f = o.get(y) || l),
        f === l && o.set(null, c),
        o.set(y, c),
        this.count++,
        (l = bu.bind(this)),
        c.addEventListener('load', l),
        c.addEventListener('error', l),
        f
          ? f.parentNode.insertBefore(c, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (r.state.loading |= 4);
    }
  }
  var ls = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: oe,
    _currentValue2: oe,
    _threadCount: 0,
  };
  function ux(e, r, o, l, c, f, y, w) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ke(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ke(0)),
      (this.hiddenUpdates = Ke(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map());
  }
  function fy(e, r, o, l, c, f, y, w, S, F, U, K) {
    return (
      (e = new ux(e, r, o, y, w, S, F, K)),
      (r = 1),
      f === !0 && (r |= 24),
      (f = hn(3, null, null, r)),
      (e.current = f),
      (f.stateNode = e),
      (r = cd()),
      r.refCount++,
      (e.pooledCache = r),
      r.refCount++,
      (f.memoizedState = { element: l, isDehydrated: o, cache: r }),
      pd(f),
      e
    );
  }
  function hy(e) {
    return e ? ((e = Ni), e) : Ni;
  }
  function py(e, r, o, l, c, f) {
    (c = hy(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = Hr(r)),
      (l.payload = { element: o }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (o = Gr(e, l, r)),
      o !== null && (vn(o, e, r), $o(o, e, r));
  }
  function my(e, r) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Mf(e, r) {
    my(e, r), (e = e.alternate) && my(e, r);
  }
  function gy(e) {
    if (e.tag === 13) {
      var r = Ci(e, 67108864);
      r !== null && vn(r, e, 67108864), Mf(e, 67108864);
    }
  }
  var ku = !0;
  function cx(e, r, o, l) {
    var c = z.T;
    z.T = null;
    var f = G.p;
    try {
      (G.p = 2), Tf(e, r, o, l);
    } finally {
      (G.p = f), (z.T = c);
    }
  }
  function dx(e, r, o, l) {
    var c = z.T;
    z.T = null;
    var f = G.p;
    try {
      (G.p = 8), Tf(e, r, o, l);
    } finally {
      (G.p = f), (z.T = c);
    }
  }
  function Tf(e, r, o, l) {
    if (ku) {
      var c = Rf(l);
      if (c === null) bf(e, r, l, xu, o), vy(e, l);
      else if (hx(c, e, r, o, l)) l.stopPropagation();
      else if ((vy(e, l), r & 4 && -1 < fx.indexOf(e))) {
        for (; c !== null; ) {
          var f = hi(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = Ve(f.pendingLanes);
                  if (y !== 0) {
                    var w = f;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; y; ) {
                      var S = 1 << (31 - Ze(y));
                      (w.entanglements[1] |= S), (y &= ~S);
                    }
                    Hn(f), (et & 6) === 0 && ((iu = Vt() + 500), ts(0));
                  }
                }
                break;
              case 13:
                (w = Ci(f, 2)), w !== null && vn(w, f, 2), su(), Mf(f, 2);
            }
          if (((f = Rf(l)), f === null && bf(e, r, l, xu, o), f === c)) break;
          c = f;
        }
        c !== null && l.stopPropagation();
      } else bf(e, r, l, null, o);
    }
  }
  function Rf(e) {
    return (e = Ac(e)), jf(e);
  }
  var xu = null;
  function jf(e) {
    if (((xu = null), (e = fi(e)), e !== null)) {
      var r = u(e);
      if (r === null) e = null;
      else {
        var o = r.tag;
        if (o === 13) {
          if (((e = d(r)), e !== null)) return e;
          e = null;
        } else if (o === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          e = null;
        } else r !== e && (e = null);
      }
    }
    return (xu = e), null;
  }
  function yy(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (vo()) {
          case si:
            return 2;
          case _a:
            return 8;
          case O:
          case I:
            return 32;
          case B:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lf = !1,
    ua = null,
    ca = null,
    da = null,
    us = new Map(),
    cs = new Map(),
    fa = [],
    fx =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function vy(e, r) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ua = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ca = null;
        break;
      case 'mouseover':
      case 'mouseout':
        da = null;
        break;
      case 'pointerover':
      case 'pointerout':
        us.delete(r.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        cs.delete(r.pointerId);
    }
  }
  function ds(e, r, o, l, c, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: r,
          domEventName: o,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [c],
        }),
        r !== null && ((r = hi(r)), r !== null && gy(r)),
        e)
      : ((e.eventSystemFlags |= l),
        (r = e.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        e);
  }
  function hx(e, r, o, l, c) {
    switch (r) {
      case 'focusin':
        return (ua = ds(ua, e, r, o, l, c)), !0;
      case 'dragenter':
        return (ca = ds(ca, e, r, o, l, c)), !0;
      case 'mouseover':
        return (da = ds(da, e, r, o, l, c)), !0;
      case 'pointerover':
        var f = c.pointerId;
        return us.set(f, ds(us.get(f) || null, e, r, o, l, c)), !0;
      case 'gotpointercapture':
        return (f = c.pointerId), cs.set(f, ds(cs.get(f) || null, e, r, o, l, c)), !0;
    }
    return !1;
  }
  function by(e) {
    var r = fi(e.target);
    if (r !== null) {
      var o = u(r);
      if (o !== null) {
        if (((r = o.tag), r === 13)) {
          if (((r = d(o)), r !== null)) {
            (e.blockedOn = r),
              ow(e.priority, function () {
                if (o.tag === 13) {
                  var l = yn();
                  l = Oa(l);
                  var c = Ci(o, l);
                  c !== null && vn(c, o, l), Mf(o, l);
                }
              });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Su(e) {
    if (e.blockedOn !== null) return !1;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var o = Rf(e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var l = new o.constructor(o.type, o);
        (Fc = l), o.target.dispatchEvent(l), (Fc = null);
      } else return (r = hi(o)), r !== null && gy(r), (e.blockedOn = o), !1;
      r.shift();
    }
    return !0;
  }
  function wy(e, r, o) {
    Su(e) && o.delete(r);
  }
  function px() {
    (Lf = !1),
      ua !== null && Su(ua) && (ua = null),
      ca !== null && Su(ca) && (ca = null),
      da !== null && Su(da) && (da = null),
      us.forEach(wy),
      cs.forEach(wy);
  }
  function _u(e, r) {
    e.blockedOn === r &&
      ((e.blockedOn = null),
      Lf || ((Lf = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, px)));
  }
  var Cu = null;
  function ky(e) {
    Cu !== e &&
      ((Cu = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Cu === e && (Cu = null);
        for (var r = 0; r < e.length; r += 3) {
          var o = e[r],
            l = e[r + 1],
            c = e[r + 2];
          if (typeof l != 'function') {
            if (jf(l || o) === null) continue;
            break;
          }
          var f = hi(o);
          f !== null &&
            (e.splice(r, 3),
            (r -= 3),
            Rd(f, { pending: !0, data: c, method: o.method, action: l }, l, c));
        }
      }));
  }
  function fs(e) {
    function r(S) {
      return _u(S, e);
    }
    ua !== null && _u(ua, e),
      ca !== null && _u(ca, e),
      da !== null && _u(da, e),
      us.forEach(r),
      cs.forEach(r);
    for (var o = 0; o < fa.length; o++) {
      var l = fa[o];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < fa.length && ((o = fa[0]), o.blockedOn === null); )
      by(o), o.blockedOn === null && fa.shift();
    if (((o = (e.ownerDocument || e).$$reactFormReplay), o != null))
      for (l = 0; l < o.length; l += 3) {
        var c = o[l],
          f = o[l + 1],
          y = c[an] || null;
        if (typeof f == 'function') y || ky(o);
        else if (y) {
          var w = null;
          if (f && f.hasAttribute('formAction')) {
            if (((c = f), (y = f[an] || null))) w = y.formAction;
            else if (jf(c) !== null) continue;
          } else w = y.action;
          typeof w == 'function' ? (o[l + 1] = w) : (o.splice(l, 3), (l -= 3)), ky(o);
        }
      }
  }
  function Ff(e) {
    this._internalRoot = e;
  }
  (Nu.prototype.render = Ff.prototype.render =
    function (e) {
      var r = this._internalRoot;
      if (r === null) throw Error(i(409));
      var o = r.current,
        l = yn();
      py(o, l, e, r, null, null);
    }),
    (Nu.prototype.unmount = Ff.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var r = e.containerInfo;
          py(e.current, 2, null, e, null, null), su(), (r[di] = null);
        }
      });
  function Nu(e) {
    this._internalRoot = e;
  }
  Nu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var r = $h();
      e = { blockedOn: null, target: e, priority: r };
      for (var o = 0; o < fa.length && r !== 0 && r < fa[o].priority; o++);
      fa.splice(o, 0, e), o === 0 && by(e);
    }
  };
  var xy = n.version;
  if (xy !== '19.1.0') throw Error(i(527, xy, '19.1.0'));
  G.findDOMNode = function (e) {
    var r = e._reactInternals;
    if (r === void 0)
      throw typeof e.render == 'function'
        ? Error(i(188))
        : ((e = Object.keys(e).join(',')), Error(i(268, e)));
    return (e = p(r)), (e = e !== null ? m(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var mx = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: z,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ou.isDisabled && Ou.supportsFiber)
      try {
        (J = Ou.inject(mx)), (ie = Ou);
      } catch {}
  }
  return (
    (ps.createRoot = function (e, r) {
      if (!s(e)) throw Error(i(299));
      var o = !1,
        l = '',
        c = $m,
        f = Im,
        y = Wm,
        w = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (c = r.onUncaughtError),
          r.onCaughtError !== void 0 && (f = r.onCaughtError),
          r.onRecoverableError !== void 0 && (y = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 && (w = r.unstable_transitionCallbacks)),
        (r = fy(e, 1, !1, null, null, o, l, c, f, y, w, null)),
        (e[di] = r.current),
        vf(e),
        new Ff(r)
      );
    }),
    (ps.hydrateRoot = function (e, r, o) {
      if (!s(e)) throw Error(i(299));
      var l = !1,
        c = '',
        f = $m,
        y = Im,
        w = Wm,
        S = null,
        F = null;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (l = !0),
          o.identifierPrefix !== void 0 && (c = o.identifierPrefix),
          o.onUncaughtError !== void 0 && (f = o.onUncaughtError),
          o.onCaughtError !== void 0 && (y = o.onCaughtError),
          o.onRecoverableError !== void 0 && (w = o.onRecoverableError),
          o.unstable_transitionCallbacks !== void 0 && (S = o.unstable_transitionCallbacks),
          o.formState !== void 0 && (F = o.formState)),
        (r = fy(e, 1, !0, r, o ?? null, l, c, f, y, w, S, F)),
        (r.context = hy(null)),
        (o = r.current),
        (l = yn()),
        (l = Oa(l)),
        (c = Hr(l)),
        (c.callback = null),
        Gr(o, c, l),
        (o = l),
        (r.current.lanes = o),
        Na(r, o),
        Hn(r),
        (e[di] = r.current),
        vf(e),
        new Nu(r)
      );
    }),
    (ps.version = '19.1.0'),
    ps
  );
}
var Fy;
function Nx() {
  if (Fy) return Af.exports;
  Fy = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (Af.exports = Cx()), Af.exports;
}
var Ox = Nx(),
  ms = {},
  Ay;
function Ex() {
  if (Ay) return ms;
  (Ay = 1),
    Object.defineProperty(ms, '__esModule', { value: !0 }),
    (ms.parse = d),
    (ms.serialize = m);
  const t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    u = (() => {
      const v = function () {};
      return (v.prototype = Object.create(null)), v;
    })();
  function d(v, E) {
    const x = new u(),
      N = v.length;
    if (N < 2) return x;
    const D = (E == null ? void 0 : E.decode) || g;
    let j = 0;
    do {
      const _ = v.indexOf('=', j);
      if (_ === -1) break;
      const M = v.indexOf(';', j),
        V = M === -1 ? N : M;
      if (_ > V) {
        j = v.lastIndexOf(';', _ - 1) + 1;
        continue;
      }
      const A = h(v, j, _),
        ee = p(v, _, A),
        te = v.slice(A, ee);
      if (x[te] === void 0) {
        let H = h(v, _ + 1, V),
          me = p(v, V, H);
        const Pe = D(v.slice(H, me));
        x[te] = Pe;
      }
      j = V + 1;
    } while (j < N);
    return x;
  }
  function h(v, E, x) {
    do {
      const N = v.charCodeAt(E);
      if (N !== 32 && N !== 9) return E;
    } while (++E < x);
    return x;
  }
  function p(v, E, x) {
    for (; E > x; ) {
      const N = v.charCodeAt(--E);
      if (N !== 32 && N !== 9) return E + 1;
    }
    return x;
  }
  function m(v, E, x) {
    const N = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!t.test(v)) throw new TypeError(`argument name is invalid: ${v}`);
    const D = N(E);
    if (!n.test(D)) throw new TypeError(`argument val is invalid: ${E}`);
    let j = v + '=' + D;
    if (!x) return j;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge)) throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      j += '; Max-Age=' + x.maxAge;
    }
    if (x.domain) {
      if (!a.test(x.domain)) throw new TypeError(`option domain is invalid: ${x.domain}`);
      j += '; Domain=' + x.domain;
    }
    if (x.path) {
      if (!i.test(x.path)) throw new TypeError(`option path is invalid: ${x.path}`);
      j += '; Path=' + x.path;
    }
    if (x.expires) {
      if (!b(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      j += '; Expires=' + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (j += '; HttpOnly'),
      x.secure && (j += '; Secure'),
      x.partitioned && (j += '; Partitioned'),
      x.priority)
    )
      switch (typeof x.priority == 'string' ? x.priority.toLowerCase() : void 0) {
        case 'low':
          j += '; Priority=Low';
          break;
        case 'medium':
          j += '; Priority=Medium';
          break;
        case 'high':
          j += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == 'string' ? x.sameSite.toLowerCase() : x.sameSite) {
        case !0:
        case 'strict':
          j += '; SameSite=Strict';
          break;
        case 'lax':
          j += '; SameSite=Lax';
          break;
        case 'none':
          j += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return j;
  }
  function g(v) {
    if (v.indexOf('%') === -1) return v;
    try {
      return decodeURIComponent(v);
    } catch {
      return v;
    }
  }
  function b(v) {
    return s.call(v) === '[object Date]';
  }
  return ms;
}
Ex();
var $y = 'popstate';
function Dx(t = {}) {
  function n(i, s) {
    let { pathname: u, search: d, hash: h } = i.location;
    return th(
      '',
      { pathname: u, search: d, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    );
  }
  function a(i, s) {
    return typeof s == 'string' ? s : zs(s);
  }
  return Mx(n, a, null, t);
}
function mt(t, n) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(n);
}
function ar(t, n) {
  if (!t) {
    typeof console < 'u' && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function Px() {
  return Math.random().toString(36).substring(2, 10);
}
function Iy(t, n) {
  return { usr: t.state, key: t.key, idx: n };
}
function th(t, n, a = null, i) {
  return {
    pathname: typeof t == 'string' ? t : t.pathname,
    search: '',
    hash: '',
    ...(typeof n == 'string' ? po(n) : n),
    state: a,
    key: (n && n.key) || i || Px(),
  };
}
function zs({ pathname: t = '/', search: n = '', hash: a = '' }) {
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    a && a !== '#' && (t += a.charAt(0) === '#' ? a : '#' + a),
    t
  );
}
function po(t) {
  let n = {};
  if (t) {
    let a = t.indexOf('#');
    a >= 0 && ((n.hash = t.substring(a)), (t = t.substring(0, a)));
    let i = t.indexOf('?');
    i >= 0 && ((n.search = t.substring(i)), (t = t.substring(0, i))), t && (n.pathname = t);
  }
  return n;
}
function Mx(t, n, a, i = {}) {
  let { window: s = document.defaultView, v5Compat: u = !1 } = i,
    d = s.history,
    h = 'POP',
    p = null,
    m = g();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ''));
  function g() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    h = 'POP';
    let D = g(),
      j = D == null ? null : D - m;
    (m = D), p && p({ action: h, location: N.location, delta: j });
  }
  function v(D, j) {
    h = 'PUSH';
    let _ = th(N.location, D, j);
    m = g() + 1;
    let M = Iy(_, m),
      V = N.createHref(_);
    try {
      d.pushState(M, '', V);
    } catch (A) {
      if (A instanceof DOMException && A.name === 'DataCloneError') throw A;
      s.location.assign(V);
    }
    u && p && p({ action: h, location: N.location, delta: 1 });
  }
  function E(D, j) {
    h = 'REPLACE';
    let _ = th(N.location, D, j);
    m = g();
    let M = Iy(_, m),
      V = N.createHref(_);
    d.replaceState(M, '', V), u && p && p({ action: h, location: N.location, delta: 0 });
  }
  function x(D) {
    let j = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      _ = typeof D == 'string' ? D : zs(D);
    return (
      (_ = _.replace(/ $/, '%20')),
      mt(j, `No window.location.(origin|href) available to create URL for href: ${_}`),
      new URL(_, j)
    );
  }
  let N = {
    get action() {
      return h;
    },
    get location() {
      return t(s, d);
    },
    listen(D) {
      if (p) throw new Error('A history only accepts one active listener');
      return (
        s.addEventListener($y, b),
        (p = D),
        () => {
          s.removeEventListener($y, b), (p = null);
        }
      );
    },
    createHref(D) {
      return n(s, D);
    },
    createURL: x,
    encodeLocation(D) {
      let j = x(D);
      return { pathname: j.pathname, search: j.search, hash: j.hash };
    },
    push: v,
    replace: E,
    go(D) {
      return d.go(D);
    },
  };
  return N;
}
function fb(t, n, a = '/') {
  return Tx(t, n, a, !1);
}
function Tx(t, n, a, i) {
  let s = typeof n == 'string' ? po(n) : n,
    u = Ar(s.pathname || '/', a);
  if (u == null) return null;
  let d = hb(t);
  Rx(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let m = Ux(u);
    h = Vx(d[p], m, i);
  }
  return h;
}
function hb(t, n = [], a = [], i = '') {
  let s = (u, d, h) => {
    let p = {
      relativePath: h === void 0 ? u.path || '' : h,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: d,
      route: u,
    };
    p.relativePath.startsWith('/') &&
      (mt(
        p.relativePath.startsWith(i),
        `Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(i.length)));
    let m = Lr([i, p.relativePath]),
      g = a.concat(p);
    u.children &&
      u.children.length > 0 &&
      (mt(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      hb(u.children, n, g, m)),
      !(u.path == null && !u.index) && n.push({ path: m, score: Wx(m, u.index), routesMeta: g });
  };
  return (
    t.forEach((u, d) => {
      var h;
      if (u.path === '' || !((h = u.path) != null && h.includes('?'))) s(u, d);
      else for (let p of pb(u.path)) s(u, d, p);
    }),
    n
  );
}
function pb(t) {
  let n = t.split('/');
  if (n.length === 0) return [];
  let [a, ...i] = n,
    s = a.endsWith('?'),
    u = a.replace(/\?$/, '');
  if (i.length === 0) return s ? [u, ''] : [u];
  let d = pb(i.join('/')),
    h = [];
  return (
    h.push(...d.map((p) => (p === '' ? u : [u, p].join('/')))),
    s && h.push(...d),
    h.map((p) => (t.startsWith('/') && p === '' ? '/' : p))
  );
}
function Rx(t) {
  t.sort((n, a) =>
    n.score !== a.score
      ? a.score - n.score
      : zx(
          n.routesMeta.map((i) => i.childrenIndex),
          a.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var jx = /^:[\w-]+$/,
  Lx = 3,
  Fx = 2,
  Ax = 1,
  $x = 10,
  Ix = -2,
  Wy = (t) => t === '*';
function Wx(t, n) {
  let a = t.split('/'),
    i = a.length;
  return (
    a.some(Wy) && (i += Ix),
    n && (i += Fx),
    a.filter((s) => !Wy(s)).reduce((s, u) => s + (jx.test(u) ? Lx : u === '' ? Ax : $x), i)
  );
}
function zx(t, n) {
  return t.length === n.length && t.slice(0, -1).every((a, i) => a === n[i])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function Vx(t, n, a = !1) {
  let { routesMeta: i } = t,
    s = {},
    u = '/',
    d = [];
  for (let h = 0; h < i.length; ++h) {
    let p = i[h],
      m = h === i.length - 1,
      g = u === '/' ? n : n.slice(u.length) || '/',
      b = Uu({ path: p.relativePath, caseSensitive: p.caseSensitive, end: m }, g),
      v = p.route;
    if (
      (!b &&
        m &&
        a &&
        !i[i.length - 1].route.index &&
        (b = Uu({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, g)),
      !b)
    )
      return null;
    Object.assign(s, b.params),
      d.push({
        params: s,
        pathname: Lr([u, b.pathname]),
        pathnameBase: Kx(Lr([u, b.pathnameBase])),
        route: v,
      }),
      b.pathnameBase !== '/' && (u = Lr([u, b.pathnameBase]));
  }
  return d;
}
function Uu(t, n) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [a, i] = Bx(t.path, t.caseSensitive, t.end),
    s = n.match(a);
  if (!s) return null;
  let u = s[0],
    d = u.replace(/(.)\/+$/, '$1'),
    h = s.slice(1);
  return {
    params: i.reduce((p, { paramName: m, isOptional: g }, b) => {
      if (m === '*') {
        let E = h[b] || '';
        d = u.slice(0, u.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const v = h[b];
      return g && !v ? (p[m] = void 0) : (p[m] = (v || '').replace(/%2F/g, '/')), p;
    }, {}),
    pathname: u,
    pathnameBase: d,
    pattern: t,
  };
}
function Bx(t, n = !1, a = !0) {
  ar(
    t === '*' || !t.endsWith('*') || t.endsWith('/*'),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, '/*')}".`
  );
  let i = [],
    s =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, d, h) => (
            i.push({ paramName: d, isOptional: h != null }), h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    t.endsWith('*')
      ? (i.push({ paramName: '*' }), (s += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
        ? (s += '\\/*$')
        : t !== '' && t !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, n ? void 0 : 'i'), i]
  );
}
function Ux(t) {
  try {
    return t
      .split('/')
      .map((n) => decodeURIComponent(n).replace(/\//g, '%2F'))
      .join('/');
  } catch (n) {
    return (
      ar(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      t
    );
  }
}
function Ar(t, n) {
  if (n === '/') return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let a = n.endsWith('/') ? n.length - 1 : n.length,
    i = t.charAt(a);
  return i && i !== '/' ? null : t.slice(a) || '/';
}
function Zx(t, n = '/') {
  let { pathname: a, search: i = '', hash: s = '' } = typeof t == 'string' ? po(t) : t;
  return { pathname: a ? (a.startsWith('/') ? a : qx(a, n)) : n, search: Hx(i), hash: Gx(s) };
}
function qx(t, n) {
  let a = n.replace(/\/+$/, '').split('/');
  return (
    t.split('/').forEach((i) => {
      i === '..' ? a.length > 1 && a.pop() : i !== '.' && a.push(i);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function If(t, n, a, i) {
  return `Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Yx(t) {
  return t.filter((n, a) => a === 0 || (n.route.path && n.route.path.length > 0));
}
function mb(t) {
  let n = Yx(t);
  return n.map((a, i) => (i === n.length - 1 ? a.pathname : a.pathnameBase));
}
function gb(t, n, a, i = !1) {
  let s;
  typeof t == 'string'
    ? (s = po(t))
    : ((s = { ...t }),
      mt(!s.pathname || !s.pathname.includes('?'), If('?', 'pathname', 'search', s)),
      mt(!s.pathname || !s.pathname.includes('#'), If('#', 'pathname', 'hash', s)),
      mt(!s.search || !s.search.includes('#'), If('#', 'search', 'hash', s)));
  let u = t === '' || s.pathname === '',
    d = u ? '/' : s.pathname,
    h;
  if (d == null) h = a;
  else {
    let b = n.length - 1;
    if (!i && d.startsWith('..')) {
      let v = d.split('/');
      for (; v[0] === '..'; ) v.shift(), (b -= 1);
      s.pathname = v.join('/');
    }
    h = b >= 0 ? n[b] : '/';
  }
  let p = Zx(s, h),
    m = d && d !== '/' && d.endsWith('/'),
    g = (u || d === '.') && a.endsWith('/');
  return !p.pathname.endsWith('/') && (m || g) && (p.pathname += '/'), p;
}
var Lr = (t) => t.join('/').replace(/\/\/+/g, '/'),
  Kx = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Hx = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
  Gx = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t);
function Xx(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
var yb = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(yb);
var Jx = ['GET', ...yb];
new Set(Jx);
var mo = T.createContext(null);
mo.displayName = 'DataRouter';
var pc = T.createContext(null);
pc.displayName = 'DataRouterState';
var vb = T.createContext({ isTransitioning: !1 });
vb.displayName = 'ViewTransition';
var Qx = T.createContext(new Map());
Qx.displayName = 'Fetchers';
var e1 = T.createContext(null);
e1.displayName = 'Await';
var lr = T.createContext(null);
lr.displayName = 'Navigation';
var ul = T.createContext(null);
ul.displayName = 'Location';
var ur = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ur.displayName = 'Route';
var bh = T.createContext(null);
bh.displayName = 'RouteError';
function t1(t, { relative: n } = {}) {
  mt(cl(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: a, navigator: i } = T.useContext(lr),
    { hash: s, pathname: u, search: d } = dl(t, { relative: n }),
    h = u;
  return (
    a !== '/' && (h = u === '/' ? a : Lr([a, u])), i.createHref({ pathname: h, search: d, hash: s })
  );
}
function cl() {
  return T.useContext(ul) != null;
}
function ii() {
  return (
    mt(cl(), 'useLocation() may be used only in the context of a <Router> component.'),
    T.useContext(ul).location
  );
}
var bb =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function wb(t) {
  T.useContext(lr).static || T.useLayoutEffect(t);
}
function nn() {
  let { isDataRoute: t } = T.useContext(ur);
  return t ? g1() : n1();
}
function n1() {
  mt(cl(), 'useNavigate() may be used only in the context of a <Router> component.');
  let t = T.useContext(mo),
    { basename: n, navigator: a } = T.useContext(lr),
    { matches: i } = T.useContext(ur),
    { pathname: s } = ii(),
    u = JSON.stringify(mb(i)),
    d = T.useRef(!1);
  return (
    wb(() => {
      d.current = !0;
    }),
    T.useCallback(
      (h, p = {}) => {
        if ((ar(d.current, bb), !d.current)) return;
        if (typeof h == 'number') {
          a.go(h);
          return;
        }
        let m = gb(h, JSON.parse(u), s, p.relative === 'path');
        t == null && n !== '/' && (m.pathname = m.pathname === '/' ? n : Lr([n, m.pathname])),
          (p.replace ? a.replace : a.push)(m, p.state, p);
      },
      [n, a, u, s, t]
    )
  );
}
var r1 = T.createContext(null);
function a1(t) {
  let n = T.useContext(ur).outlet;
  return n && T.createElement(r1.Provider, { value: t }, n);
}
function dl(t, { relative: n } = {}) {
  let { matches: a } = T.useContext(ur),
    { pathname: i } = ii(),
    s = JSON.stringify(mb(a));
  return T.useMemo(() => gb(t, JSON.parse(s), i, n === 'path'), [t, s, i, n]);
}
function i1(t, n) {
  return kb(t, n);
}
function kb(t, n, a, i) {
  var s;
  mt(cl(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: u, static: d } = T.useContext(lr),
    { matches: h } = T.useContext(ur),
    p = h[h.length - 1],
    m = p ? p.params : {},
    g = p ? p.pathname : '/',
    b = p ? p.pathnameBase : '/',
    v = p && p.route;
  {
    let M = (v && v.path) || '';
    xb(
      g,
      !v || M.endsWith('*') || M.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === '/' ? '*' : `${M}/*`}">.`
    );
  }
  let E = ii(),
    x;
  if (n) {
    let M = typeof n == 'string' ? po(n) : n;
    mt(
      b === '/' || ((s = M.pathname) == null ? void 0 : s.startsWith(b)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ),
      (x = M);
  } else x = E;
  let N = x.pathname || '/',
    D = N;
  if (b !== '/') {
    let M = b.replace(/^\//, '').split('/');
    D = '/' + N.replace(/^\//, '').split('/').slice(M.length).join('/');
  }
  let j = !d && a && a.matches && a.matches.length > 0 ? a.matches : fb(t, { pathname: D });
  ar(v || j != null, `No routes matched location "${x.pathname}${x.search}${x.hash}" `),
    ar(
      j == null ||
        j[j.length - 1].route.element !== void 0 ||
        j[j.length - 1].route.Component !== void 0 ||
        j[j.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let _ = c1(
    j &&
      j.map((M) =>
        Object.assign({}, M, {
          params: Object.assign({}, m, M.params),
          pathname: Lr([b, u.encodeLocation ? u.encodeLocation(M.pathname).pathname : M.pathname]),
          pathnameBase:
            M.pathnameBase === '/'
              ? b
              : Lr([
                  b,
                  u.encodeLocation ? u.encodeLocation(M.pathnameBase).pathname : M.pathnameBase,
                ]),
        })
      ),
    h,
    a,
    i
  );
  return n && _
    ? T.createElement(
        ul.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...x },
            navigationType: 'POP',
          },
        },
        _
      )
    : _;
}
function o1() {
  let t = m1(),
    n = Xx(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t),
    a = t instanceof Error ? t.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: i },
    u = { padding: '2px 4px', backgroundColor: i },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', t),
    (d = T.createElement(
      T.Fragment,
      null,
      T.createElement('p', null, '💿 Hey developer 👋'),
      T.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        T.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        T.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement('h2', null, 'Unexpected Application Error!'),
      T.createElement('h3', { style: { fontStyle: 'italic' } }, n),
      a ? T.createElement('pre', { style: s }, a) : null,
      d
    )
  );
}
var s1 = T.createElement(o1, null),
  l1 = class extends T.Component {
    constructor(t) {
      super(t),
        (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error('React Router caught the following error during render', t, n);
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            ur.Provider,
            { value: this.props.routeContext },
            T.createElement(bh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function u1({ routeContext: t, match: n, children: a }) {
  let i = T.useContext(mo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(ur.Provider, { value: t }, a)
  );
}
function c1(t, n = [], a = null, i = null) {
  if (t == null) {
    if (!a) return null;
    if (a.errors) t = a.matches;
    else if (n.length === 0 && !a.initialized && a.matches.length > 0) t = a.matches;
    else return null;
  }
  let s = t,
    u = a == null ? void 0 : a.errors;
  if (u != null) {
    let p = s.findIndex((m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0);
    mt(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(',')}`
    ),
      (s = s.slice(0, Math.min(s.length, p + 1)));
  }
  let d = !1,
    h = -1;
  if (a)
    for (let p = 0; p < s.length; p++) {
      let m = s[p];
      if (((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = p), m.route.id)) {
        let { loaderData: g, errors: b } = a,
          v = m.route.loader && !g.hasOwnProperty(m.route.id) && (!b || b[m.route.id] === void 0);
        if (m.route.lazy || v) {
          (d = !0), h >= 0 ? (s = s.slice(0, h + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((p, m, g) => {
    let b,
      v = !1,
      E = null,
      x = null;
    a &&
      ((b = u && m.route.id ? u[m.route.id] : void 0),
      (E = m.route.errorElement || s1),
      d &&
        (h < 0 && g === 0
          ? (xb(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (v = !0),
            (x = null))
          : h === g && ((v = !0), (x = m.route.hydrateFallbackElement || null))));
    let N = n.concat(s.slice(0, g + 1)),
      D = () => {
        let j;
        return (
          b
            ? (j = E)
            : v
              ? (j = x)
              : m.route.Component
                ? (j = T.createElement(m.route.Component, null))
                : m.route.element
                  ? (j = m.route.element)
                  : (j = p),
          T.createElement(u1, {
            match: m,
            routeContext: { outlet: p, matches: N, isDataRoute: a != null },
            children: j,
          })
        );
      };
    return a && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? T.createElement(l1, {
          location: a.location,
          revalidation: a.revalidation,
          component: E,
          error: b,
          children: D(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
        })
      : D();
  }, null);
}
function wh(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function d1(t) {
  let n = T.useContext(mo);
  return mt(n, wh(t)), n;
}
function f1(t) {
  let n = T.useContext(pc);
  return mt(n, wh(t)), n;
}
function h1(t) {
  let n = T.useContext(ur);
  return mt(n, wh(t)), n;
}
function kh(t) {
  let n = h1(t),
    a = n.matches[n.matches.length - 1];
  return mt(a.route.id, `${t} can only be used on routes that contain a unique "id"`), a.route.id;
}
function p1() {
  return kh('useRouteId');
}
function m1() {
  var t;
  let n = T.useContext(bh),
    a = f1('useRouteError'),
    i = kh('useRouteError');
  return n !== void 0 ? n : (t = a.errors) == null ? void 0 : t[i];
}
function g1() {
  let { router: t } = d1('useNavigate'),
    n = kh('useNavigate'),
    a = T.useRef(!1);
  return (
    wb(() => {
      a.current = !0;
    }),
    T.useCallback(
      async (i, s = {}) => {
        ar(a.current, bb),
          a.current &&
            (typeof i == 'number' ? t.navigate(i) : await t.navigate(i, { fromRouteId: n, ...s }));
      },
      [t, n]
    )
  );
}
var zy = {};
function xb(t, n, a) {
  !n && !zy[t] && ((zy[t] = !0), ar(!1, a));
}
T.memo(y1);
function y1({ routes: t, future: n, state: a }) {
  return kb(t, void 0, a, n);
}
function v1(t) {
  return a1(t.context);
}
function Jn(t) {
  mt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function b1({
  basename: t = '/',
  children: n = null,
  location: a,
  navigationType: i = 'POP',
  navigator: s,
  static: u = !1,
}) {
  mt(
    !cl(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = t.replace(/^\/*/, '/'),
    h = T.useMemo(() => ({ basename: d, navigator: s, static: u, future: {} }), [d, s, u]);
  typeof a == 'string' && (a = po(a));
  let { pathname: p = '/', search: m = '', hash: g = '', state: b = null, key: v = 'default' } = a,
    E = T.useMemo(() => {
      let x = Ar(p, d);
      return x == null
        ? null
        : { location: { pathname: x, search: m, hash: g, state: b, key: v }, navigationType: i };
    }, [d, p, m, g, b, v, i]);
  return (
    ar(
      E != null,
      `<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    E == null
      ? null
      : T.createElement(
          lr.Provider,
          { value: h },
          T.createElement(ul.Provider, { children: n, value: E })
        )
  );
}
function w1({ children: t, location: n }) {
  return i1(nh(t), n);
}
function nh(t, n = []) {
  let a = [];
  return (
    T.Children.forEach(t, (i, s) => {
      if (!T.isValidElement(i)) return;
      let u = [...n, s];
      if (i.type === T.Fragment) {
        a.push.apply(a, nh(i.props.children, u));
        return;
      }
      mt(
        i.type === Jn,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        mt(!i.props.index || !i.props.children, 'An index route cannot have child routes.');
      let d = {
        id: i.props.id || u.join('-'),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (d.children = nh(i.props.children, u)), a.push(d);
    }),
    a
  );
}
var Wu = 'get',
  zu = 'application/x-www-form-urlencoded';
function mc(t) {
  return t != null && typeof t.tagName == 'string';
}
function k1(t) {
  return mc(t) && t.tagName.toLowerCase() === 'button';
}
function x1(t) {
  return mc(t) && t.tagName.toLowerCase() === 'form';
}
function S1(t) {
  return mc(t) && t.tagName.toLowerCase() === 'input';
}
function _1(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function C1(t, n) {
  return t.button === 0 && (!n || n === '_self') && !_1(t);
}
var Eu = null;
function N1() {
  if (Eu === null)
    try {
      new FormData(document.createElement('form'), 0), (Eu = !1);
    } catch {
      Eu = !0;
    }
  return Eu;
}
var O1 = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Wf(t) {
  return t != null && !O1.has(t)
    ? (ar(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zu}"`
      ),
      null)
    : t;
}
function E1(t, n) {
  let a, i, s, u, d;
  if (x1(t)) {
    let h = t.getAttribute('action');
    (i = h ? Ar(h, n) : null),
      (a = t.getAttribute('method') || Wu),
      (s = Wf(t.getAttribute('enctype')) || zu),
      (u = new FormData(t));
  } else if (k1(t) || (S1(t) && (t.type === 'submit' || t.type === 'image'))) {
    let h = t.form;
    if (h == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p = t.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((i = p ? Ar(p, n) : null),
      (a = t.getAttribute('formmethod') || h.getAttribute('method') || Wu),
      (s = Wf(t.getAttribute('formenctype')) || Wf(h.getAttribute('enctype')) || zu),
      (u = new FormData(h, t)),
      !N1())
    ) {
      let { name: m, type: g, value: b } = t;
      if (g === 'image') {
        let v = m ? `${m}.` : '';
        u.append(`${v}x`, '0'), u.append(`${v}y`, '0');
      } else m && u.append(m, b);
    }
  } else {
    if (mc(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Wu), (i = null), (s = zu), (d = t);
  }
  return (
    u && s === 'text/plain' && ((d = u), (u = void 0)),
    { action: i, method: a.toLowerCase(), encType: s, formData: u, body: d }
  );
}
function xh(t, n) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(n);
}
async function D1(t, n) {
  if (t.id in n) return n[t.id];
  try {
    let a = await import(t.module);
    return (n[t.id] = a), a;
  } catch (a) {
    return (
      console.error(`Error loading route module \`${t.module}\`, reloading page...`),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function P1(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === 'preload' && typeof t.imageSrcSet == 'string' && typeof t.imageSizes == 'string'
      : typeof t.rel == 'string' && typeof t.href == 'string';
}
async function M1(t, n, a) {
  let i = await Promise.all(
    t.map(async (s) => {
      let u = n.routes[s.route.id];
      if (u) {
        let d = await D1(u, a);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return L1(
    i
      .flat(1)
      .filter(P1)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) =>
        s.rel === 'stylesheet' ? { ...s, rel: 'prefetch', as: 'style' } : { ...s, rel: 'prefetch' }
      )
  );
}
function Vy(t, n, a, i, s, u) {
  let d = (p, m) => (a[m] ? p.route.id !== a[m].route.id : !0),
    h = (p, m) => {
      var g;
      return (
        a[m].pathname !== p.pathname ||
        (((g = a[m].route.path) == null ? void 0 : g.endsWith('*')) &&
          a[m].params['*'] !== p.params['*'])
      );
    };
  return u === 'assets'
    ? n.filter((p, m) => d(p, m) || h(p, m))
    : u === 'data'
      ? n.filter((p, m) => {
          var g;
          let b = i.routes[p.route.id];
          if (!b || !b.hasLoader) return !1;
          if (d(p, m) || h(p, m)) return !0;
          if (p.route.shouldRevalidate) {
            let v = p.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: ((g = a[0]) == null ? void 0 : g.params) || {},
              nextUrl: new URL(t, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == 'boolean') return v;
          }
          return !0;
        })
      : [];
}
function T1(t, n, { includeHydrateFallback: a } = {}) {
  return R1(
    t
      .map((i) => {
        let s = n.routes[i.route.id];
        if (!s) return [];
        let u = [s.module];
        return (
          s.clientActionModule && (u = u.concat(s.clientActionModule)),
          s.clientLoaderModule && (u = u.concat(s.clientLoaderModule)),
          a && s.hydrateFallbackModule && (u = u.concat(s.hydrateFallbackModule)),
          s.imports && (u = u.concat(s.imports)),
          u
        );
      })
      .flat(1)
  );
}
function R1(t) {
  return [...new Set(t)];
}
function j1(t) {
  let n = {},
    a = Object.keys(t).sort();
  for (let i of a) n[i] = t[i];
  return n;
}
function L1(t, n) {
  let a = new Set();
  return (
    new Set(n),
    t.reduce((i, s) => {
      let u = JSON.stringify(j1(s));
      return a.has(u) || (a.add(u), i.push({ key: u, link: s })), i;
    }, [])
  );
}
var F1 = new Set([100, 101, 204, 205]);
function A1(t, n) {
  let a =
    typeof t == 'string'
      ? new URL(t, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : t;
  return (
    a.pathname === '/'
      ? (a.pathname = '_root.data')
      : n && Ar(a.pathname, n) === '/'
        ? (a.pathname = `${n.replace(/\/$/, '')}/_root.data`)
        : (a.pathname = `${a.pathname.replace(/\/$/, '')}.data`),
    a
  );
}
function Sb() {
  let t = T.useContext(mo);
  return xh(t, 'You must render this element inside a <DataRouterContext.Provider> element'), t;
}
function $1() {
  let t = T.useContext(pc);
  return (
    xh(t, 'You must render this element inside a <DataRouterStateContext.Provider> element'), t
  );
}
var Sh = T.createContext(void 0);
Sh.displayName = 'FrameworkContext';
function _b() {
  let t = T.useContext(Sh);
  return xh(t, 'You must render this element inside a <HydratedRouter> element'), t;
}
function I1(t, n) {
  let a = T.useContext(Sh),
    [i, s] = T.useState(!1),
    [u, d] = T.useState(!1),
    { onFocus: h, onBlur: p, onMouseEnter: m, onMouseLeave: g, onTouchStart: b } = n,
    v = T.useRef(null);
  T.useEffect(() => {
    if ((t === 'render' && d(!0), t === 'viewport')) {
      let N = (j) => {
          j.forEach((_) => {
            d(_.isIntersecting);
          });
        },
        D = new IntersectionObserver(N, { threshold: 0.5 });
      return (
        v.current && D.observe(v.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [t]),
    T.useEffect(() => {
      if (i) {
        let N = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(N);
        };
      }
    }, [i]);
  let E = () => {
      s(!0);
    },
    x = () => {
      s(!1), d(!1);
    };
  return a
    ? t !== 'intent'
      ? [u, v, {}]
      : [
          u,
          v,
          {
            onFocus: gs(h, E),
            onBlur: gs(p, x),
            onMouseEnter: gs(m, E),
            onMouseLeave: gs(g, x),
            onTouchStart: gs(b, E),
          },
        ]
    : [!1, v, {}];
}
function gs(t, n) {
  return (a) => {
    t && t(a), a.defaultPrevented || n(a);
  };
}
function W1({ page: t, ...n }) {
  let { router: a } = Sb(),
    i = T.useMemo(() => fb(a.routes, t, a.basename), [a.routes, t, a.basename]);
  return i ? T.createElement(V1, { page: t, matches: i, ...n }) : null;
}
function z1(t) {
  let { manifest: n, routeModules: a } = _b(),
    [i, s] = T.useState([]);
  return (
    T.useEffect(() => {
      let u = !1;
      return (
        M1(t, n, a).then((d) => {
          u || s(d);
        }),
        () => {
          u = !0;
        }
      );
    }, [t, n, a]),
    i
  );
}
function V1({ page: t, matches: n, ...a }) {
  let i = ii(),
    { manifest: s, routeModules: u } = _b(),
    { basename: d } = Sb(),
    { loaderData: h, matches: p } = $1(),
    m = T.useMemo(() => Vy(t, n, p, s, i, 'data'), [t, n, p, s, i]),
    g = T.useMemo(() => Vy(t, n, p, s, i, 'assets'), [t, n, p, s, i]),
    b = T.useMemo(() => {
      if (t === i.pathname + i.search + i.hash) return [];
      let x = new Set(),
        N = !1;
      if (
        (n.forEach((j) => {
          var _;
          let M = s.routes[j.route.id];
          !M ||
            !M.hasLoader ||
            ((!m.some((V) => V.route.id === j.route.id) &&
              j.route.id in h &&
              (_ = u[j.route.id]) != null &&
              _.shouldRevalidate) ||
            M.hasClientLoader
              ? (N = !0)
              : x.add(j.route.id));
        }),
        x.size === 0)
      )
        return [];
      let D = A1(t, d);
      return (
        N &&
          x.size > 0 &&
          D.searchParams.set(
            '_routes',
            n
              .filter((j) => x.has(j.route.id))
              .map((j) => j.route.id)
              .join(',')
          ),
        [D.pathname + D.search]
      );
    }, [d, h, i, s, m, n, t, u]),
    v = T.useMemo(() => T1(g, s), [g, s]),
    E = z1(g);
  return T.createElement(
    T.Fragment,
    null,
    b.map((x) => T.createElement('link', { key: x, rel: 'prefetch', as: 'fetch', href: x, ...a })),
    v.map((x) => T.createElement('link', { key: x, rel: 'modulepreload', href: x, ...a })),
    E.map(({ key: x, link: N }) => T.createElement('link', { key: x, ...N }))
  );
}
function B1(...t) {
  return (n) => {
    t.forEach((a) => {
      typeof a == 'function' ? a(n) : a != null && (a.current = n);
    });
  };
}
var Cb =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Cb && (window.__reactRouterVersion = '7.5.3');
} catch {}
function U1({ basename: t, children: n, window: a }) {
  let i = T.useRef();
  i.current == null && (i.current = Dx({ window: a, v5Compat: !0 }));
  let s = i.current,
    [u, d] = T.useState({ action: s.action, location: s.location }),
    h = T.useCallback(
      (p) => {
        T.startTransition(() => d(p));
      },
      [d]
    );
  return (
    T.useLayoutEffect(() => s.listen(h), [s, h]),
    T.createElement(b1, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: s,
    })
  );
}
var Nb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ob = T.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: a = 'none',
      relative: i,
      reloadDocument: s,
      replace: u,
      state: d,
      target: h,
      to: p,
      preventScrollReset: m,
      viewTransition: g,
      ...b
    },
    v
  ) {
    let { basename: E } = T.useContext(lr),
      x = typeof p == 'string' && Nb.test(p),
      N,
      D = !1;
    if (typeof p == 'string' && x && ((N = p), Cb))
      try {
        let H = new URL(window.location.href),
          me = p.startsWith('//') ? new URL(H.protocol + p) : new URL(p),
          Pe = Ar(me.pathname, E);
        me.origin === H.origin && Pe != null ? (p = Pe + me.search + me.hash) : (D = !0);
      } catch {
        ar(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let j = t1(p, { relative: i }),
      [_, M, V] = I1(a, b),
      A = K1(p, {
        replace: u,
        state: d,
        target: h,
        preventScrollReset: m,
        relative: i,
        viewTransition: g,
      });
    function ee(H) {
      t && t(H), H.defaultPrevented || A(H);
    }
    let te = T.createElement('a', {
      ...b,
      ...V,
      href: N || j,
      onClick: D || s ? t : ee,
      ref: B1(v, M),
      target: h,
      'data-discover': !x && n === 'render' ? 'true' : void 0,
    });
    return _ && !x ? T.createElement(T.Fragment, null, te, T.createElement(W1, { page: j })) : te;
  });
Ob.displayName = 'Link';
var Z1 = T.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: a = '',
    end: i = !1,
    style: s,
    to: u,
    viewTransition: d,
    children: h,
    ...p
  },
  m
) {
  let g = dl(u, { relative: p.relative }),
    b = ii(),
    v = T.useContext(pc),
    { navigator: E, basename: x } = T.useContext(lr),
    N = v != null && Q1(g) && d === !0,
    D = E.encodeLocation ? E.encodeLocation(g).pathname : g.pathname,
    j = b.pathname,
    _ = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
  n || ((j = j.toLowerCase()), (_ = _ ? _.toLowerCase() : null), (D = D.toLowerCase())),
    _ && x && (_ = Ar(_, x) || _);
  const M = D !== '/' && D.endsWith('/') ? D.length - 1 : D.length;
  let V = j === D || (!i && j.startsWith(D) && j.charAt(M) === '/'),
    A = _ != null && (_ === D || (!i && _.startsWith(D) && _.charAt(D.length) === '/')),
    ee = { isActive: V, isPending: A, isTransitioning: N },
    te = V ? t : void 0,
    H;
  typeof a == 'function'
    ? (H = a(ee))
    : (H = [a, V ? 'active' : null, A ? 'pending' : null, N ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let me = typeof s == 'function' ? s(ee) : s;
  return T.createElement(
    Ob,
    { ...p, 'aria-current': te, className: H, ref: m, style: me, to: u, viewTransition: d },
    typeof h == 'function' ? h(ee) : h
  );
});
Z1.displayName = 'NavLink';
var q1 = T.forwardRef(
  (
    {
      discover: t = 'render',
      fetcherKey: n,
      navigate: a,
      reloadDocument: i,
      replace: s,
      state: u,
      method: d = Wu,
      action: h,
      onSubmit: p,
      relative: m,
      preventScrollReset: g,
      viewTransition: b,
      ...v
    },
    E
  ) => {
    let x = X1(),
      N = J1(h, { relative: m }),
      D = d.toLowerCase() === 'get' ? 'get' : 'post',
      j = typeof h == 'string' && Nb.test(h),
      _ = (M) => {
        if ((p && p(M), M.defaultPrevented)) return;
        M.preventDefault();
        let V = M.nativeEvent.submitter,
          A = (V == null ? void 0 : V.getAttribute('formmethod')) || d;
        x(V || M.currentTarget, {
          fetcherKey: n,
          method: A,
          navigate: a,
          replace: s,
          state: u,
          relative: m,
          preventScrollReset: g,
          viewTransition: b,
        });
      };
    return T.createElement('form', {
      ref: E,
      method: D,
      action: N,
      onSubmit: i ? p : _,
      ...v,
      'data-discover': !j && t === 'render' ? 'true' : void 0,
    });
  }
);
q1.displayName = 'Form';
function Y1(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Eb(t) {
  let n = T.useContext(mo);
  return mt(n, Y1(t)), n;
}
function K1(
  t,
  { target: n, replace: a, state: i, preventScrollReset: s, relative: u, viewTransition: d } = {}
) {
  let h = nn(),
    p = ii(),
    m = dl(t, { relative: u });
  return T.useCallback(
    (g) => {
      if (C1(g, n)) {
        g.preventDefault();
        let b = a !== void 0 ? a : zs(p) === zs(m);
        h(t, { replace: b, state: i, preventScrollReset: s, relative: u, viewTransition: d });
      }
    },
    [p, h, m, a, i, n, t, s, u, d]
  );
}
var H1 = 0,
  G1 = () => `__${String(++H1)}__`;
function X1() {
  let { router: t } = Eb('useSubmit'),
    { basename: n } = T.useContext(lr),
    a = p1();
  return T.useCallback(
    async (i, s = {}) => {
      let { action: u, method: d, encType: h, formData: p, body: m } = E1(i, n);
      if (s.navigate === !1) {
        let g = s.fetcherKey || G1();
        await t.fetch(g, a, s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: m,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          flushSync: s.flushSync,
        });
      } else
        await t.navigate(s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: m,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          replace: s.replace,
          state: s.state,
          fromRouteId: a,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [t, n, a]
  );
}
function J1(t, { relative: n } = {}) {
  let { basename: a } = T.useContext(lr),
    i = T.useContext(ur);
  mt(i, 'useFormAction must be used inside a RouteContext');
  let [s] = i.matches.slice(-1),
    u = { ...dl(t || '.', { relative: n }) },
    d = ii();
  if (t == null) {
    u.search = d.search;
    let h = new URLSearchParams(u.search),
      p = h.getAll('index');
    if (p.some((m) => m === '')) {
      h.delete('index'), p.filter((g) => g).forEach((g) => h.append('index', g));
      let m = h.toString();
      u.search = m ? `?${m}` : '';
    }
  }
  return (
    (!t || t === '.') &&
      s.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    a !== '/' && (u.pathname = u.pathname === '/' ? a : Lr([a, u.pathname])),
    zs(u)
  );
}
function Q1(t, n = {}) {
  let a = T.useContext(vb);
  mt(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = Eb('useViewTransitionState'),
    s = dl(t, { relative: n.relative });
  if (!a.isTransitioning) return !1;
  let u = Ar(a.currentLocation.pathname, i) || a.currentLocation.pathname,
    d = Ar(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return Uu(s.pathname, d) != null || Uu(s.pathname, u) != null;
}
new TextEncoder();
[...F1];
const eS = '_header_18lk3_1',
  tS = '_logo_18lk3_111',
  nS = '_list_18lk3_149',
  rS = '_search_18lk3_157',
  aS = '_menu_18lk3_149',
  iS = '_hint_18lk3_357',
  he = {
    'header-wrapper': '_header-wrapper_18lk3_1',
    header: eS,
    'add-header-menu': '_add-header-menu_18lk3_47',
    'header-case': '_header-case_18lk3_55',
    'header-inner': '_header-inner_18lk3_79',
    'home-link-wrapper': '_home-link-wrapper_18lk3_95',
    'logo-header': '_logo-header_18lk3_111',
    logo: tS,
    'menu-search': '_menu-search_18lk3_149',
    list: nS,
    search: rS,
    menu: aS,
    'input-search': '_input-search_18lk3_211',
    'menu-list': '_menu-list_18lk3_229',
    'home-link': '_home-link_18lk3_95',
    'counter-cart': '_counter-cart_18lk3_273',
    'sing-up-menu': '_sing-up-menu_18lk3_305',
    'list-sing-up': '_list-sing-up_18lk3_341',
    'button-login': '_button-login_18lk3_349',
    'button-sing-up': '_button-sing-up_18lk3_349',
    hint: iS,
    'nav-home-link-wrapper': '_nav-home-link-wrapper_18lk3_397',
    'main-home-icon': '_main-home-icon_18lk3_407',
    'img-list': '_img-list_18lk3_431',
    'text-list': '_text-list_18lk3_433',
    'person-icon': '_person-icon_18lk3_441',
    'order-icon': '_order-icon_18lk3_445',
    'favorite-icon': '_favorite-icon_18lk3_447',
    'cart-icon': '_cart-icon_18lk3_449',
    'wrapper-add-header-menu': '_wrapper-add-header-menu_18lk3_487',
    'add-menu-button-all': '_add-menu-button-all_18lk3_509',
    'add-menu-catalog': '_add-menu-catalog_18lk3_511',
    'add-menu-pet-food': '_add-menu-pet-food_18lk3_513',
    'add-menu-accessories': '_add-menu-accessories_18lk3_515',
    'add-menu-promotions': '_add-menu-promotions_18lk3_517',
    'add-menu-list': '_add-menu-list_18lk3_553',
    'canvas-aside-menu': '_canvas-aside-menu_18lk3_565',
    'visible-canvas-aside-menu': '_visible-canvas-aside-menu_18lk3_581',
    'hidden-canvas-aside-menu': '_hidden-canvas-aside-menu_18lk3_591',
    'aside-add-menu': '_aside-add-menu_18lk3_601',
    'open-aside-add-menu': '_open-aside-add-menu_18lk3_623',
    'close-aside-add-menu': '_close-aside-add-menu_18lk3_631',
    'aside-menu-header': '_aside-menu-header_18lk3_639',
    'aside-menu-team': '_aside-menu-team_18lk3_641',
    'aside-menu-arrow': '_aside-menu-arrow_18lk3_685',
    'select-dot': '_select-dot_18lk3_697',
    'button-close-aside-menu': '_button-close-aside-menu_18lk3_723',
  },
  oS = '/assets/logo-BIzYF2SY.png',
  Vs = T.createContext(null),
  Db = T.createContext(() => {});
function sS() {
  const [t, n] = T.useState(!1),
    [, a] = T.useState(0);
  function i() {
    n(!t);
  }
  const s = localStorage.getItem('firstName');
  let u = 'Guest';
  if (s) {
    const d = s;
    typeof d == 'string' && (u = d);
  }
  return k.jsx('div', {
    className: he['header-wrapper'],
    children: k.jsxs(Vs.Provider, {
      value: u,
      children: [
        k.jsx(pS, { isOpen: t, toggleMenu: i }),
        k.jsx('header', {
          className: he.header,
          children: k.jsxs('div', {
            className: he['header-case'],
            children: [
              k.jsxs('div', {
                className: he['header-inner'],
                children: [
                  k.jsxs('div', {
                    className: he['home-link-wrapper'],
                    children: [k.jsx(Mb, {}), k.jsx(Pb, {})],
                  }),
                  k.jsx(lS, {}),
                ],
              }),
              k.jsx(Db.Provider, {
                value: () => {
                  a((d) => d + 1);
                },
                children: k.jsx(uS, {}),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Pb() {
  const t = nn();
  return k.jsx('div', {
    className: he['home-link'],
    children: k.jsx('span', {
      onClick: () => void t('/'),
      className: `material-symbols-outlined ${he['main-home-icon']}`,
      children: 'home',
    }),
  });
}
function Mb() {
  return k.jsx('div', {
    className: he['logo-header'],
    children: k.jsx('img', { className: he.logo, src: oS, alt: 'logo' }),
  });
}
function lS() {
  return k.jsxs('div', {
    className: he.search,
    children: [
      k.jsx('div', { className: he['menu-search'], children: 'Search in ▾' }),
      k.jsx('input', {
        type: 'search',
        className: he['input-search'],
        placeholder: 'Search products… 🔍',
      }),
    ],
  });
}
function uS() {
  return k.jsxs('nav', {
    className: he.menu,
    children: [
      k.jsxs('div', {
        className: he['nav-home-link-wrapper'],
        children: [k.jsx(Mb, {}), k.jsx(Pb, {})],
      }),
      k.jsxs('ul', {
        className: he['menu-list'],
        children: [k.jsx(cS, {}), k.jsx(dS, {}), k.jsx(fS, {}), k.jsx(hS, {})],
      }),
    ],
  });
}
function cS() {
  const t = nn(),
    n = T.useContext(Vs) ?? '',
    a = T.useContext(Db);
  let i = n,
    s = 'LOG OUT',
    u = 'View Profile',
    d = 'PROFILE';
  return (
    T.useContext(Vs) === 'Guest' &&
      ((i = 'Guest'), (s = 'LOG IN'), (u = "Don't have an account?"), (d = 'Sing Up')),
    k.jsxs('li', {
      className: `${he.list} ${he['list-sing-up']}`,
      children: [
        k.jsx('div', {
          className: he['img-list'],
          children: k.jsx('span', {
            className: `material-symbols-outlined ${he['person-icon']}`,
            children: 'person',
          }),
        }),
        k.jsx('div', { className: he['text-list'], children: i }),
        k.jsxs('div', {
          className: he['sing-up-menu'],
          children: [
            k.jsx('div', {
              onClick: () => {
                s === 'LOG IN' ? t('/login') : (localStorage.removeItem('firstName'), a());
              },
              className: he['button-login'],
              children: s,
            }),
            k.jsx('span', { className: he.hint, children: u }),
            ' ',
            k.jsx('div', {
              onClick: () => {
                t(s === 'LOG IN' ? '/registration' : '/profile');
              },
              className: he['button-sing-up'],
              children: d,
            }),
          ],
        }),
      ],
    })
  );
}
function dS() {
  const t = nn();
  return k.jsxs('li', {
    onClick: () => void t('/orders'),
    className: `${he.list} ${he['list-order']}`,
    children: [
      k.jsx('div', {
        className: he['img-list'],
        children: k.jsx('span', {
          className: `material-symbols-outlined ${he['order-icon']}`,
          children: 'package_2',
        }),
      }),
      k.jsx('div', { className: he['text-list'], children: 'Orders' }),
    ],
  });
}
function fS() {
  const t = nn();
  return k.jsxs('li', {
    onClick: () => void t('/favorites'),
    className: `${he.list} ${he['list-favorite']}`,
    children: [
      ' ',
      k.jsx('div', {
        className: he['img-list'],
        children: k.jsx('span', {
          className: `material-symbols-outlined ${he['favorite-icon']}`,
          children: 'favorite',
        }),
      }),
      k.jsx('div', { className: he['text-list'], children: 'Favorites' }),
    ],
  });
}
function hS() {
  const t = nn();
  return k.jsxs('li', {
    onClick: () => void t('/cart'),
    className: `${he.list} ${he['list-counter']}`,
    children: [
      k.jsx('div', { className: he['counter-cart'], children: '0' }),
      k.jsx('div', {
        className: he['img-list'],
        children: k.jsx('span', {
          className: `material-symbols-outlined ${he['cart-icon']}`,
          children: 'shopping_cart',
        }),
      }),
      k.jsx('div', { className: he['text-list'], children: 'Cart' }),
    ],
  });
}
function pS({ isOpen: t, toggleMenu: n }) {
  return (
    T.useEffect(() => {
      document.body.style.overflow = t ? 'hidden' : '';
    }, [t]),
    k.jsxs(k.Fragment, {
      children: [
        k.jsx('div', {
          onClick: n,
          className: `${he['canvas-aside-menu']} ${t ? he['visible-canvas-aside-menu'] : he['hidden-canvas-aside-menu']}`,
        }),
        k.jsx(mS, { isOpen: t, toggleMenu: n }),
        k.jsx(vS, { toggleMenu: n }),
      ],
    })
  );
}
function mS({ isOpen: t, toggleMenu: n }) {
  return k.jsxs('div', {
    className: `${he['aside-add-menu']} ${t ? he['open-aside-add-menu'] : he['close-aside-add-menu']}`,
    children: [
      k.jsx('div', {
        onClick: n,
        className: he['button-close-aside-menu'],
        children: k.jsx('span', {
          className: `material-symbols-outlined ${he['aside-close-icon']}`,
          children: 'close',
        }),
      }),
      k.jsx(gS, { toggleMenu: n }),
      k.jsx(yS, { toggleMenu: n }),
    ],
  });
}
function gS({ toggleMenu: t }) {
  const n = nn(),
    a = T.useContext(Vs) ?? '',
    i = T.useContext(Vs) === 'Guest' ? 'Guest' : a;
  return k.jsxs('div', {
    onClick: () => {
      t(), n('/profile');
    },
    className: he['aside-menu-header'],
    children: [
      k.jsx('span', {
        className: `material-symbols-outlined ${he['aside-person-icon']}`,
        children: 'manage_accounts',
      }),
      k.jsxs('span', { className: he['user-name'], children: ['Hello, ', i] }),
      k.jsx('span', { className: he['select-dot'] }),
    ],
  });
}
function yS({ toggleMenu: t }) {
  const n = nn();
  return k.jsxs('div', {
    onClick: () => {
      t(), n('/team');
    },
    className: he['aside-menu-team'],
    children: [
      k.jsx('span', { className: he['about-team'], children: 'Our Friendly Team' }),
      k.jsx('span', {
        className: `material-symbols-outlined ${he['aside-menu-arrow']}`,
        children: 'arrow_forward_ios',
      }),
    ],
  });
}
function vS({ toggleMenu: t }) {
  const n = nn();
  return k.jsx('div', {
    className: he['add-header-menu'],
    children: k.jsxs('div', {
      className: he['wrapper-add-header-menu'],
      children: [
        k.jsxs('div', {
          onClick: t,
          className: he['add-menu-button-all'],
          children: [
            k.jsx('span', { className: 'material-symbols-outlined', children: 'menu' }),
            'All',
          ],
        }),
        k.jsx('div', {
          className: he['add-menu-list'],
          children: k.jsx('div', {
            onClick: () => void n('/catalog'),
            className: he['add-menu-catalog'],
            children: 'Catalog',
          }),
        }),
        k.jsx('div', {
          className: he['add-menu-list'],
          children: k.jsx('div', { className: he['add-menu-pet-food'], children: 'Pet food' }),
        }),
        k.jsx('div', {
          className: he['add-menu-list'],
          children: k.jsx('div', {
            className: he['add-menu-accessories'],
            children: 'Accessories',
          }),
        }),
        k.jsx('div', {
          className: he['add-menu-list'],
          children: k.jsx('div', { className: he['add-menu-promotions'], children: 'Promotions' }),
        }),
      ],
    }),
  });
}
const bS = '_footer_fr6pe_1',
  ir = {
    footer: bS,
    'footer-case': '_footer-case_fr6pe_21',
    'about-link': '_about-link_fr6pe_41',
    'shop-link': '_shop-link_fr6pe_41',
    'sticker-link': '_sticker-link_fr6pe_41',
    'help-link': '_help-link_fr6pe_41',
  };
function wS() {
  return k.jsx('footer', {
    className: ir.footer,
    children: k.jsxs('div', {
      className: ir['footer-case'],
      children: [k.jsx(xS, {}), k.jsx(_S, {}), k.jsx(SS, {}), k.jsx(kS, {})],
    }),
  });
}
function kS() {
  const t = nn();
  return k.jsx('div', {
    onClick: () => void t('/about'),
    className: `${ir.about} ${ir['about-link']}`,
    children: 'ABOUT US',
  });
}
function xS() {
  return k.jsx('div', { className: `${ir.shop} ${ir['shop-link']}`, children: 'OUR SHOPS' });
}
function SS() {
  return k.jsx('div', {
    className: `${ir.sticker} ${ir['sticker-link']}`,
    children: 'Our Telegram Stickers',
  });
}
function _S() {
  return k.jsx('div', {
    className: `${ir.help} ${ir['help-link']}`,
    children: 'Help Homeless Animals',
  });
}
function CS() {
  return k.jsxs(k.Fragment, { children: [k.jsx(sS, {}), k.jsx(v1, {}), k.jsx(wS, {})] });
}
const NS = '_main_dq78l_1',
  OS = '_recommend_dq78l_215',
  ES = '_brands_dq78l_217',
  DS = '_img0_dq78l_343',
  PS = '_img1_dq78l_343',
  MS = '_img2_dq78l_343',
  TS = '_img3_dq78l_343',
  RS = '_img4_dq78l_343',
  jS = '_img5_dq78l_343',
  LS = '_img6_dq78l_415',
  FS = '_img7_dq78l_415',
  AS = '_img8_dq78l_415',
  $S = '_img9_dq78l_415',
  IS = '_img10_dq78l_415',
  WS = '_img11_dq78l_415',
  zS = '_img12_dq78l_415',
  VS = '_img13_dq78l_415',
  Ge = {
    main: NS,
    'title-main': '_title-main_dq78l_19',
    'info-blocks': '_info-blocks_dq78l_59',
    'main-info-block': '_main-info-block_dq78l_73',
    'aside-info-block': '_aside-info-block_dq78l_97',
    'aside-up-block': '_aside-up-block_dq78l_113',
    'aside-down-block': '_aside-down-block_dq78l_115',
    'left-arrow': '_left-arrow_dq78l_161',
    'right-arrow': '_right-arrow_dq78l_163',
    'small-left-arrow': '_small-left-arrow_dq78l_203',
    'small-right-arrow': '_small-right-arrow_dq78l_205',
    'brand-left-arrow': '_brand-left-arrow_dq78l_205',
    'brand-right-arrow': '_brand-right-arrow_dq78l_207',
    recommend: OS,
    brands: ES,
    'list-recommend': '_list-recommend_dq78l_231',
    'list-brands': '_list-brands_dq78l_313',
    img0: DS,
    img1: PS,
    img2: MS,
    img3: TS,
    img4: RS,
    img5: jS,
    img6: LS,
    img7: FS,
    img8: AS,
    img9: $S,
    img10: IS,
    img11: WS,
    img12: zS,
    img13: VS,
    'pets-logo-icon': '_pets-logo-icon_dq78l_503',
  };
function BS() {
  return k.jsxs('h1', {
    className: Ge['title-main'],
    children: [
      'PET ',
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['pets-logo-icon']}`,
        children: 'pets',
      }),
      ' ',
      'SUPPLIES',
    ],
  });
}
function US() {
  return k.jsxs('div', {
    className: Ge['main-info-block'],
    children: [
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['left-arrow']}`,
        children: 'pets',
      }),
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['right-arrow']}`,
        children: 'pets',
      }),
    ],
  });
}
function ZS() {
  return k.jsxs('aside', {
    className: Ge['aside-info-block'],
    children: [
      k.jsx('div', { className: Ge['aside-up-block'] }),
      k.jsx('div', { className: Ge['aside-down-block'] }),
    ],
  });
}
function qS() {
  return k.jsx('h2', { className: Ge.recommend, children: 'Our Recommendations' });
}
function YS() {
  return k.jsxs('div', {
    className: Ge['list-recommend'],
    children: [
      k.jsx(KS, {}),
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['small-left-arrow']}`,
        children: 'play_circle',
      }),
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['small-right-arrow']}`,
        children: 'play_circle',
      }),
    ],
  });
}
function KS() {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx('div', { className: Ge.img0 }),
      k.jsx('div', { className: Ge.img1 }),
      k.jsx('div', { className: Ge.img2 }),
      k.jsx('div', { className: Ge.img3 }),
      k.jsx('div', { className: Ge.img4 }),
      k.jsx('div', { className: Ge.img5 }),
    ],
  });
}
function HS() {
  return k.jsx('h2', { className: Ge.brands, children: 'Brands' });
}
function GS() {
  return k.jsxs('div', {
    className: Ge['list-brands'],
    children: [
      k.jsx(XS, {}),
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['brand-left-arrow']}`,
        children: 'play_circle',
      }),
      k.jsx('span', {
        className: `material-symbols-outlined ${Ge['brand-right-arrow']}`,
        children: 'play_circle',
      }),
    ],
  });
}
function XS() {
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx('div', { className: Ge.img6 }),
      k.jsx('div', { className: Ge.img7 }),
      k.jsx('div', { className: Ge.img8 }),
      k.jsx('div', { className: Ge.img9 }),
      k.jsx('div', { className: Ge.img10 }),
      k.jsx('div', { className: Ge.img11 }),
      k.jsx('div', { className: Ge.img12 }),
      k.jsx('div', { className: Ge.img13 }),
    ],
  });
}
function JS() {
  return (
    T.useEffect(() => {
      document.title = 'Home | Zoo Shop | Pet Supplies';
    }, []),
    k.jsxs('main', {
      className: Ge.main,
      children: [
        k.jsx(BS, {}),
        k.jsxs('div', { className: Ge['info-blocks'], children: [k.jsx(US, {}), k.jsx(ZS, {})] }),
        k.jsx(qS, {}),
        k.jsx(YS, {}),
        k.jsx(HS, {}),
        k.jsx(GS, {}),
      ],
    })
  );
}
const QS =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%208L3.07945%204.30466C4.29638%202.84434%206.09909%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208L12.9206%2011.6953C11.7036%2013.1557%209.90091%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208ZM8%2011C9.65685%2011%2011%209.65685%2011%208C11%206.34315%209.65685%205%208%205C6.34315%205%205%206.34315%205%208C5%209.65685%206.34315%2011%208%2011Z'%20fill='%23000000'/%3e%3c/svg%3e",
  e_ =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2016H13L10.8368%2013.3376C9.96488%2013.7682%208.99592%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208L3.07945%204.30466C3.14989%204.22013%203.22229%204.13767%203.29656%204.05731L0%200H3L16%2016ZM5.35254%206.58774C5.12755%207.00862%205%207.48941%205%208C5%209.65685%206.34315%2011%208%2011C8.29178%2011%208.57383%2010.9583%208.84053%2010.8807L5.35254%206.58774Z'%20fill='%23000000'/%3e%3cpath%20d='M16%208L14.2278%2010.1266L7.63351%202.01048C7.75518%202.00351%207.87739%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208Z'%20fill='%23000000'/%3e%3c/svg%3e";
function By({ register: t, errorMessage: n, type: a, label: i, placeholder: s, required: u }) {
  const [d, h] = T.useState(!1),
    p = a === 'password',
    m = p ? (d ? 'text' : 'password') : a,
    g = a;
  return k.jsxs('div', {
    className: 'flex flex-col w-full',
    children: [
      k.jsxs('label', {
        htmlFor: g,
        children: [i, k.jsx('span', { className: 'text-red-700', children: '*' })],
      }),
      k.jsxs('div', {
        className: 'relative',
        children: [
          k.jsx('input', {
            ...t,
            id: g,
            className:
              'w-full bg-khaki p-3 rounded focus:outline-none text-olive focus:border-goldenrod border-[2px] border-transparent box-border font-bold text-xl',
            placeholder: s,
            type: m,
            required: u ?? void 0,
            autoComplete: a,
          }),
          p &&
            k.jsx('div', {
              className: 'absolute right-[1%] top-1/2 -translate-y-1/2 cursor-pointer opacity-50',
              onClick: () => {
                h((b) => !b);
              },
              children: k.jsx('img', {
                className: 'w-[20px]',
                src: d ? e_ : QS,
                alt: 'Toggle password visibility',
              }),
            }),
        ],
      }),
      k.jsx('p', {
        className: 'text-sm h-fit font-main-bd text-red-500 h-5 mt-1',
        children: n ?? ' ',
      }),
    ],
  });
}
var fl = (t) => t.type === 'checkbox',
  Ja = (t) => t instanceof Date,
  Qt = (t) => t == null;
const Tb = (t) => typeof t == 'object';
var xt = (t) => !Qt(t) && !Array.isArray(t) && Tb(t) && !Ja(t),
  Rb = (t) => (xt(t) && t.target ? (fl(t.target) ? t.target.checked : t.target.value) : t),
  t_ = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
  jb = (t, n) => t.has(t_(n)),
  n_ = (t) => {
    const n = t.constructor && t.constructor.prototype;
    return xt(n) && n.hasOwnProperty('isPrototypeOf');
  },
  _h = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Wt(t) {
  let n;
  const a = Array.isArray(t),
    i = typeof FileList < 'u' ? t instanceof FileList : !1;
  if (t instanceof Date) n = new Date(t);
  else if (t instanceof Set) n = new Set(t);
  else if (!(_h && (t instanceof Blob || i)) && (a || xt(t)))
    if (((n = a ? [] : {}), !a && !n_(t))) n = t;
    else for (const s in t) t.hasOwnProperty(s) && (n[s] = Wt(t[s]));
  else return t;
  return n;
}
var gc = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
  kt = (t) => t === void 0,
  le = (t, n, a) => {
    if (!n || !xt(t)) return a;
    const i = gc(n.split(/[,[\].]+?/)).reduce((s, u) => (Qt(s) ? s : s[u]), t);
    return kt(i) || i === t ? (kt(t[n]) ? a : t[n]) : i;
  },
  wn = (t) => typeof t == 'boolean',
  Ch = (t) => /^\w*$/.test(t),
  Lb = (t) => gc(t.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Qe = (t, n, a) => {
    let i = -1;
    const s = Ch(n) ? [n] : Lb(n),
      u = s.length,
      d = u - 1;
    for (; ++i < u; ) {
      const h = s[i];
      let p = a;
      if (i !== d) {
        const m = t[h];
        p = xt(m) || Array.isArray(m) ? m : isNaN(+s[i + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (t[h] = p), (t = t[h]);
    }
  };
const Zu = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  $n = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Nr = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  r_ = Q.createContext(null),
  Nh = () => Q.useContext(r_);
var Fb = (t, n, a, i = !0) => {
    const s = { defaultValues: n._defaultValues };
    for (const u in t)
      Object.defineProperty(s, u, {
        get: () => {
          const d = u;
          return (
            n._proxyFormState[d] !== $n.all && (n._proxyFormState[d] = !i || $n.all),
            a && (a[d] = !0),
            t[d]
          );
        },
      });
    return s;
  },
  rh = (t) => Qt(t) || !Tb(t);
function Tr(t, n) {
  if (rh(t) || rh(n)) return t === n;
  if (Ja(t) && Ja(n)) return t.getTime() === n.getTime();
  const a = Object.keys(t),
    i = Object.keys(n);
  if (a.length !== i.length) return !1;
  for (const s of a) {
    const u = t[s];
    if (!i.includes(s)) return !1;
    if (s !== 'ref') {
      const d = n[s];
      if (
        (Ja(u) && Ja(d)) || (xt(u) && xt(d)) || (Array.isArray(u) && Array.isArray(d))
          ? !Tr(u, d)
          : u !== d
      )
        return !1;
    }
  }
  return !0;
}
const Ab = (t, n) => {
  const a = T.useRef(n);
  Tr(n, a.current) || (a.current = n), T.useEffect(t, a.current);
};
function a_(t) {
  const n = Nh(),
    { control: a = n.control, disabled: i, name: s, exact: u } = t || {},
    [d, h] = Q.useState(a._formState),
    p = Q.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    Ab(
      () =>
        a._subscribe({
          name: s,
          formState: p.current,
          exact: u,
          callback: (m) => {
            !i && h({ ...a._formState, ...m });
          },
        }),
      [s, i, u]
    ),
    Q.useEffect(() => {
      p.current.isValid && a._setValid(!0);
    }, [a]),
    Q.useMemo(() => Fb(d, a, p.current, !1), [d, a])
  );
}
var er = (t) => typeof t == 'string',
  $b = (t, n, a, i, s) =>
    er(t)
      ? (i && n.watch.add(t), le(a, t, s))
      : Array.isArray(t)
        ? t.map((u) => (i && n.watch.add(u), le(a, u)))
        : (i && (n.watchAll = !0), a);
function Ib(t) {
  const n = Nh(),
    { control: a = n.control, name: i, defaultValue: s, disabled: u, exact: d } = t || {},
    [h, p] = Q.useState(a._getWatch(i, s));
  return (
    Ab(
      () =>
        a._subscribe({
          name: i,
          formState: { values: !0 },
          exact: d,
          callback: (m) => !u && p($b(i, a._names, m.values || a._formValues, !1, s)),
        }),
      [i, s, u, d]
    ),
    Q.useEffect(() => a._removeUnmounted()),
    h
  );
}
function i_(t) {
  const n = Nh(),
    { name: a, disabled: i, control: s = n.control, shouldUnregister: u } = t,
    d = jb(s._names.array, a),
    h = Ib({
      control: s,
      name: a,
      defaultValue: le(s._formValues, a, le(s._defaultValues, a, t.defaultValue)),
      exact: !0,
    }),
    p = a_({ control: s, name: a, exact: !0 }),
    m = Q.useRef(t),
    g = Q.useRef(
      s.register(a, { ...t.rules, value: h, ...(wn(t.disabled) ? { disabled: t.disabled } : {}) })
    ),
    b = Q.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!le(p.errors, a) },
            isDirty: { enumerable: !0, get: () => !!le(p.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!le(p.touchedFields, a) },
            isValidating: { enumerable: !0, get: () => !!le(p.validatingFields, a) },
            error: { enumerable: !0, get: () => le(p.errors, a) },
          }
        ),
      [p, a]
    ),
    v = Q.useCallback(
      (D) => g.current.onChange({ target: { value: Rb(D), name: a }, type: Zu.CHANGE }),
      [a]
    ),
    E = Q.useCallback(
      () => g.current.onBlur({ target: { value: le(s._formValues, a), name: a }, type: Zu.BLUR }),
      [a, s._formValues]
    ),
    x = Q.useCallback(
      (D) => {
        const j = le(s._fields, a);
        j &&
          D &&
          (j._f.ref = {
            focus: () => D.focus(),
            select: () => D.select(),
            setCustomValidity: (_) => D.setCustomValidity(_),
            reportValidity: () => D.reportValidity(),
          });
      },
      [s._fields, a]
    ),
    N = Q.useMemo(
      () => ({
        name: a,
        value: h,
        ...(wn(i) || p.disabled ? { disabled: p.disabled || i } : {}),
        onChange: v,
        onBlur: E,
        ref: x,
      }),
      [a, i, p.disabled, v, E, x, h]
    );
  return (
    Q.useEffect(() => {
      const D = s._options.shouldUnregister || u;
      s.register(a, {
        ...m.current.rules,
        ...(wn(m.current.disabled) ? { disabled: m.current.disabled } : {}),
      });
      const j = (_, M) => {
        const V = le(s._fields, _);
        V && V._f && (V._f.mount = M);
      };
      if ((j(a, !0), D)) {
        const _ = Wt(le(s._options.defaultValues, a));
        Qe(s._defaultValues, a, _), kt(le(s._formValues, a)) && Qe(s._formValues, a, _);
      }
      return (
        !d && s.register(a),
        () => {
          (d ? D && !s._state.action : D) ? s.unregister(a) : j(a, !1);
        }
      );
    }, [a, s, d, u]),
    Q.useEffect(() => {
      s._setDisabledField({ disabled: i, name: a });
    }, [i, a, s]),
    Q.useMemo(() => ({ field: N, formState: p, fieldState: b }), [N, p, b])
  );
}
const o_ = (t) => t.render(i_(t));
var Wb = (t, n, a, i, s) =>
    n ? { ...a[t], types: { ...(a[t] && a[t].types ? a[t].types : {}), [i]: s || !0 } } : {},
  As = (t) => (Array.isArray(t) ? t : [t]),
  Uy = () => {
    let t = [];
    return {
      get observers() {
        return t;
      },
      next: (n) => {
        for (const a of t) a.next && a.next(n);
      },
      subscribe: (n) => (
        t.push(n),
        {
          unsubscribe: () => {
            t = t.filter((a) => a !== n);
          },
        }
      ),
      unsubscribe: () => {
        t = [];
      },
    };
  },
  Xt = (t) => xt(t) && !Object.keys(t).length,
  Oh = (t) => t.type === 'file',
  In = (t) => typeof t == 'function',
  qu = (t) => {
    if (!_h) return !1;
    const n = t ? t.ownerDocument : 0;
    return t instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
  },
  zb = (t) => t.type === 'select-multiple',
  Eh = (t) => t.type === 'radio',
  s_ = (t) => Eh(t) || fl(t),
  zf = (t) => qu(t) && t.isConnected;
function l_(t, n) {
  const a = n.slice(0, -1).length;
  let i = 0;
  for (; i < a; ) t = kt(t) ? i++ : t[n[i++]];
  return t;
}
function u_(t) {
  for (const n in t) if (t.hasOwnProperty(n) && !kt(t[n])) return !1;
  return !0;
}
function Pt(t, n) {
  const a = Array.isArray(n) ? n : Ch(n) ? [n] : Lb(n),
    i = a.length === 1 ? t : l_(t, a),
    s = a.length - 1,
    u = a[s];
  return (
    i && delete i[u],
    s !== 0 && ((xt(i) && Xt(i)) || (Array.isArray(i) && u_(i))) && Pt(t, a.slice(0, -1)),
    t
  );
}
var Vb = (t) => {
  for (const n in t) if (In(t[n])) return !0;
  return !1;
};
function Yu(t, n = {}) {
  const a = Array.isArray(t);
  if (xt(t) || a)
    for (const i in t)
      Array.isArray(t[i]) || (xt(t[i]) && !Vb(t[i]))
        ? ((n[i] = Array.isArray(t[i]) ? [] : {}), Yu(t[i], n[i]))
        : Qt(t[i]) || (n[i] = !0);
  return n;
}
function Bb(t, n, a) {
  const i = Array.isArray(t);
  if (xt(t) || i)
    for (const s in t)
      Array.isArray(t[s]) || (xt(t[s]) && !Vb(t[s]))
        ? kt(n) || rh(a[s])
          ? (a[s] = Array.isArray(t[s]) ? Yu(t[s], []) : { ...Yu(t[s]) })
          : Bb(t[s], Qt(n) ? {} : n[s], a[s])
        : (a[s] = !Tr(t[s], n[s]));
  return a;
}
var ys = (t, n) => Bb(t, n, Yu(n));
const Zy = { value: !1, isValid: !1 },
  qy = { value: !0, isValid: !0 };
var Ub = (t) => {
    if (Array.isArray(t)) {
      if (t.length > 1) {
        const n = t.filter((a) => a && a.checked && !a.disabled).map((a) => a.value);
        return { value: n, isValid: !!n.length };
      }
      return t[0].checked && !t[0].disabled
        ? t[0].attributes && !kt(t[0].attributes.value)
          ? kt(t[0].value) || t[0].value === ''
            ? qy
            : { value: t[0].value, isValid: !0 }
          : qy
        : Zy;
    }
    return Zy;
  },
  Zb = (t, { valueAsNumber: n, valueAsDate: a, setValueAs: i }) =>
    kt(t) ? t : n ? (t === '' ? NaN : t && +t) : a && er(t) ? new Date(t) : i ? i(t) : t;
const Yy = { isValid: !1, value: null };
var qb = (t) =>
  Array.isArray(t)
    ? t.reduce((n, a) => (a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : n), Yy)
    : Yy;
function Ky(t) {
  const n = t.ref;
  return Oh(n)
    ? n.files
    : Eh(n)
      ? qb(t.refs).value
      : zb(n)
        ? [...n.selectedOptions].map(({ value: a }) => a)
        : fl(n)
          ? Ub(t.refs).value
          : Zb(kt(n.value) ? t.ref.value : n.value, t);
}
var c_ = (t, n, a, i) => {
    const s = {};
    for (const u of t) {
      const d = le(n, u);
      d && Qe(s, u, d._f);
    }
    return { criteriaMode: a, names: [...t], fields: s, shouldUseNativeValidation: i };
  },
  Ku = (t) => t instanceof RegExp,
  vs = (t) => (kt(t) ? t : Ku(t) ? t.source : xt(t) ? (Ku(t.value) ? t.value.source : t.value) : t),
  Hy = (t) => ({
    isOnSubmit: !t || t === $n.onSubmit,
    isOnBlur: t === $n.onBlur,
    isOnChange: t === $n.onChange,
    isOnAll: t === $n.all,
    isOnTouch: t === $n.onTouched,
  });
const Gy = 'AsyncFunction';
var d_ = (t) =>
    !!t &&
    !!t.validate &&
    !!(
      (In(t.validate) && t.validate.constructor.name === Gy) ||
      (xt(t.validate) && Object.values(t.validate).find((n) => n.constructor.name === Gy))
    ),
  f_ = (t) =>
    t.mount &&
    (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate),
  Xy = (t, n, a) =>
    !a &&
    (n.watchAll ||
      n.watch.has(t) ||
      [...n.watch].some((i) => t.startsWith(i) && /^\.\w+/.test(t.slice(i.length))));
const $s = (t, n, a, i) => {
  for (const s of a || Object.keys(t)) {
    const u = le(t, s);
    if (u) {
      const { _f: d, ...h } = u;
      if (d) {
        if ((d.refs && d.refs[0] && n(d.refs[0], s) && !i) || (d.ref && n(d.ref, d.name) && !i))
          return !0;
        if ($s(h, n)) break;
      } else if (xt(h) && $s(h, n)) break;
    }
  }
};
function Jy(t, n, a) {
  const i = le(t, a);
  if (i || Ch(a)) return { error: i, name: a };
  const s = a.split('.');
  for (; s.length; ) {
    const u = s.join('.'),
      d = le(n, u),
      h = le(t, u);
    if (d && !Array.isArray(d) && a !== u) return { name: a };
    if (h && h.type) return { name: u, error: h };
    s.pop();
  }
  return { name: a };
}
var h_ = (t, n, a, i) => {
    a(t);
    const { name: s, ...u } = t;
    return (
      Xt(u) ||
      Object.keys(u).length >= Object.keys(n).length ||
      Object.keys(u).find((d) => n[d] === (!i || $n.all))
    );
  },
  p_ = (t, n, a) =>
    !t ||
    !n ||
    t === n ||
    As(t).some((i) => i && (a ? i === n : i.startsWith(n) || n.startsWith(i))),
  m_ = (t, n, a, i, s) =>
    s.isOnAll
      ? !1
      : !a && s.isOnTouch
        ? !(n || t)
        : (a ? i.isOnBlur : s.isOnBlur)
          ? !t
          : (a ? i.isOnChange : s.isOnChange)
            ? t
            : !0,
  g_ = (t, n) => !gc(le(t, n)).length && Pt(t, n),
  y_ = (t, n, a) => {
    const i = As(le(t, a));
    return Qe(i, 'root', n[a]), Qe(t, a, i), t;
  },
  Vu = (t) => er(t);
function Qy(t, n, a = 'validate') {
  if (Vu(t) || (Array.isArray(t) && t.every(Vu)) || (wn(t) && !t))
    return { type: a, message: Vu(t) ? t : '', ref: n };
}
var Gi = (t) => (xt(t) && !Ku(t) ? t : { value: t, message: '' }),
  ev = async (t, n, a, i, s, u) => {
    const {
        ref: d,
        refs: h,
        required: p,
        maxLength: m,
        minLength: g,
        min: b,
        max: v,
        pattern: E,
        validate: x,
        name: N,
        valueAsNumber: D,
        mount: j,
      } = t._f,
      _ = le(a, N);
    if (!j || n.has(N)) return {};
    const M = h ? h[0] : d,
      V = (ce) => {
        s && M.reportValidity && (M.setCustomValidity(wn(ce) ? '' : ce || ''), M.reportValidity());
      },
      A = {},
      ee = Eh(d),
      te = fl(d),
      H = ee || te,
      me =
        ((D || Oh(d)) && kt(d.value) && kt(_)) ||
        (qu(d) && d.value === '') ||
        _ === '' ||
        (Array.isArray(_) && !_.length),
      Pe = Wb.bind(null, N, i, A),
      we = (ce, be, Ee, Ne = Nr.maxLength, z = Nr.minLength) => {
        const G = ce ? be : Ee;
        A[N] = { type: ce ? Ne : z, message: G, ref: d, ...Pe(ce ? Ne : z, G) };
      };
    if (
      u
        ? !Array.isArray(_) || !_.length
        : p &&
          ((!H && (me || Qt(_))) ||
            (wn(_) && !_) ||
            (te && !Ub(h).isValid) ||
            (ee && !qb(h).isValid))
    ) {
      const { value: ce, message: be } = Vu(p) ? { value: !!p, message: p } : Gi(p);
      if (ce && ((A[N] = { type: Nr.required, message: be, ref: M, ...Pe(Nr.required, be) }), !i))
        return V(be), A;
    }
    if (!me && (!Qt(b) || !Qt(v))) {
      let ce, be;
      const Ee = Gi(v),
        Ne = Gi(b);
      if (!Qt(_) && !isNaN(_)) {
        const z = d.valueAsNumber || (_ && +_);
        Qt(Ee.value) || (ce = z > Ee.value), Qt(Ne.value) || (be = z < Ne.value);
      } else {
        const z = d.valueAsDate || new Date(_),
          G = (C) => new Date(new Date().toDateString() + ' ' + C),
          oe = d.type == 'time',
          Me = d.type == 'week';
        er(Ee.value) &&
          _ &&
          (ce = oe ? G(_) > G(Ee.value) : Me ? _ > Ee.value : z > new Date(Ee.value)),
          er(Ne.value) &&
            _ &&
            (be = oe ? G(_) < G(Ne.value) : Me ? _ < Ne.value : z < new Date(Ne.value));
      }
      if ((ce || be) && (we(!!ce, Ee.message, Ne.message, Nr.max, Nr.min), !i))
        return V(A[N].message), A;
    }
    if ((m || g) && !me && (er(_) || (u && Array.isArray(_)))) {
      const ce = Gi(m),
        be = Gi(g),
        Ee = !Qt(ce.value) && _.length > +ce.value,
        Ne = !Qt(be.value) && _.length < +be.value;
      if ((Ee || Ne) && (we(Ee, ce.message, be.message), !i)) return V(A[N].message), A;
    }
    if (E && !me && er(_)) {
      const { value: ce, message: be } = Gi(E);
      if (
        Ku(ce) &&
        !_.match(ce) &&
        ((A[N] = { type: Nr.pattern, message: be, ref: d, ...Pe(Nr.pattern, be) }), !i)
      )
        return V(be), A;
    }
    if (x) {
      if (In(x)) {
        const ce = await x(_, a),
          be = Qy(ce, M);
        if (be && ((A[N] = { ...be, ...Pe(Nr.validate, be.message) }), !i)) return V(be.message), A;
      } else if (xt(x)) {
        let ce = {};
        for (const be in x) {
          if (!Xt(ce) && !i) break;
          const Ee = Qy(await x[be](_, a), M, be);
          Ee && ((ce = { ...Ee, ...Pe(be, Ee.message) }), V(Ee.message), i && (A[N] = ce));
        }
        if (!Xt(ce) && ((A[N] = { ref: M, ...ce }), !i)) return A;
      }
    }
    return V(!0), A;
  };
const v_ = { mode: $n.onSubmit, reValidateMode: $n.onChange, shouldFocusError: !0 };
function b_(t = {}) {
  let n = { ...v_, ...t },
    a = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: In(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    };
  const i = {};
  let s = xt(n.defaultValues) || xt(n.values) ? Wt(n.values || n.defaultValues) || {} : {},
    u = n.shouldUnregister ? {} : Wt(s),
    d = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    p,
    m = 0;
  const g = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let b = { ...g };
  const v = { array: Uy(), state: Uy() },
    E = Hy(n.mode),
    x = Hy(n.reValidateMode),
    N = n.criteriaMode === $n.all,
    D = (O) => (I) => {
      clearTimeout(m), (m = setTimeout(O, I));
    },
    j = async (O) => {
      if (!n.disabled && (g.isValid || b.isValid || O)) {
        const I = n.resolver ? Xt((await me()).errors) : await we(i, !0);
        I !== a.isValid && v.state.next({ isValid: I });
      }
    },
    _ = (O, I) => {
      !n.disabled &&
        (g.isValidating || g.validatingFields || b.isValidating || b.validatingFields) &&
        ((O || Array.from(h.mount)).forEach((B) => {
          B && (I ? Qe(a.validatingFields, B, I) : Pt(a.validatingFields, B));
        }),
        v.state.next({
          validatingFields: a.validatingFields,
          isValidating: !Xt(a.validatingFields),
        }));
    },
    M = (O, I = [], B, de, ae = !0, J = !0) => {
      if (de && B && !n.disabled) {
        if (((d.action = !0), J && Array.isArray(le(i, O)))) {
          const ie = B(le(i, O), de.argA, de.argB);
          ae && Qe(i, O, ie);
        }
        if (J && Array.isArray(le(a.errors, O))) {
          const ie = B(le(a.errors, O), de.argA, de.argB);
          ae && Qe(a.errors, O, ie), g_(a.errors, O);
        }
        if ((g.touchedFields || b.touchedFields) && J && Array.isArray(le(a.touchedFields, O))) {
          const ie = B(le(a.touchedFields, O), de.argA, de.argB);
          ae && Qe(a.touchedFields, O, ie);
        }
        (g.dirtyFields || b.dirtyFields) && (a.dirtyFields = ys(s, u)),
          v.state.next({
            name: O,
            isDirty: be(O, I),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          });
      } else Qe(u, O, I);
    },
    V = (O, I) => {
      Qe(a.errors, O, I), v.state.next({ errors: a.errors });
    },
    A = (O) => {
      (a.errors = O), v.state.next({ errors: a.errors, isValid: !1 });
    },
    ee = (O, I, B, de) => {
      const ae = le(i, O);
      if (ae) {
        const J = le(u, O, kt(B) ? le(s, O) : B);
        kt(J) || (de && de.defaultChecked) || I ? Qe(u, O, I ? J : Ky(ae._f)) : z(O, J),
          d.mount && j();
      }
    },
    te = (O, I, B, de, ae) => {
      let J = !1,
        ie = !1;
      const je = { name: O };
      if (!n.disabled) {
        if (!B || de) {
          (g.isDirty || b.isDirty) &&
            ((ie = a.isDirty), (a.isDirty = je.isDirty = be()), (J = ie !== je.isDirty));
          const Ze = Tr(le(s, O), I);
          (ie = !!le(a.dirtyFields, O)),
            Ze ? Pt(a.dirtyFields, O) : Qe(a.dirtyFields, O, !0),
            (je.dirtyFields = a.dirtyFields),
            (J = J || ((g.dirtyFields || b.dirtyFields) && ie !== !Ze));
        }
        if (B) {
          const Ze = le(a.touchedFields, O);
          Ze ||
            (Qe(a.touchedFields, O, B),
            (je.touchedFields = a.touchedFields),
            (J = J || ((g.touchedFields || b.touchedFields) && Ze !== B)));
        }
        J && ae && v.state.next(je);
      }
      return J ? je : {};
    },
    H = (O, I, B, de) => {
      const ae = le(a.errors, O),
        J = (g.isValid || b.isValid) && wn(I) && a.isValid !== I;
      if (
        (n.delayError && B
          ? ((p = D(() => V(O, B))), p(n.delayError))
          : (clearTimeout(m), (p = null), B ? Qe(a.errors, O, B) : Pt(a.errors, O)),
        (B ? !Tr(ae, B) : ae) || !Xt(de) || J)
      ) {
        const ie = { ...de, ...(J && wn(I) ? { isValid: I } : {}), errors: a.errors, name: O };
        (a = { ...a, ...ie }), v.state.next(ie);
      }
    },
    me = async (O) => {
      _(O, !0);
      const I = await n.resolver(
        u,
        n.context,
        c_(O || h.mount, i, n.criteriaMode, n.shouldUseNativeValidation)
      );
      return _(O), I;
    },
    Pe = async (O) => {
      const { errors: I } = await me(O);
      if (O)
        for (const B of O) {
          const de = le(I, B);
          de ? Qe(a.errors, B, de) : Pt(a.errors, B);
        }
      else a.errors = I;
      return I;
    },
    we = async (O, I, B = { valid: !0 }) => {
      for (const de in O) {
        const ae = O[de];
        if (ae) {
          const { _f: J, ...ie } = ae;
          if (J) {
            const je = h.array.has(J.name),
              Ze = ae._f && d_(ae._f);
            Ze && g.validatingFields && _([de], !0);
            const St = await ev(ae, h.disabled, u, N, n.shouldUseNativeValidation && !I, je);
            if ((Ze && g.validatingFields && _([de]), St[J.name] && ((B.valid = !1), I))) break;
            !I &&
              (le(St, J.name)
                ? je
                  ? y_(a.errors, St, J.name)
                  : Qe(a.errors, J.name, St[J.name])
                : Pt(a.errors, J.name));
          }
          !Xt(ie) && (await we(ie, I, B));
        }
      }
      return B.valid;
    },
    ce = () => {
      for (const O of h.unMount) {
        const I = le(i, O);
        I && (I._f.refs ? I._f.refs.every((B) => !zf(B)) : !zf(I._f.ref)) && rn(O);
      }
      h.unMount = new Set();
    },
    be = (O, I) => !n.disabled && (O && I && Qe(u, O, I), !Tr(se(), s)),
    Ee = (O, I, B) => $b(O, h, { ...(d.mount ? u : kt(I) ? s : er(O) ? { [O]: I } : I) }, B, I),
    Ne = (O) => gc(le(d.mount ? u : s, O, n.shouldUnregister ? le(s, O, []) : [])),
    z = (O, I, B = {}) => {
      const de = le(i, O);
      let ae = I;
      if (de) {
        const J = de._f;
        J &&
          (!J.disabled && Qe(u, O, Zb(I, J)),
          (ae = qu(J.ref) && Qt(I) ? '' : I),
          zb(J.ref)
            ? [...J.ref.options].forEach((ie) => (ie.selected = ae.includes(ie.value)))
            : J.refs
              ? fl(J.ref)
                ? J.refs.length > 1
                  ? J.refs.forEach(
                      (ie) =>
                        (!ie.defaultChecked || !ie.disabled) &&
                        (ie.checked = Array.isArray(ae)
                          ? !!ae.find((je) => je === ie.value)
                          : ae === ie.value)
                    )
                  : J.refs[0] && (J.refs[0].checked = !!ae)
                : J.refs.forEach((ie) => (ie.checked = ie.value === ae))
              : Oh(J.ref)
                ? (J.ref.value = '')
                : ((J.ref.value = ae), J.ref.type || v.state.next({ name: O, values: Wt(u) })));
      }
      (B.shouldDirty || B.shouldTouch) && te(O, ae, B.shouldTouch, B.shouldDirty, !0),
        B.shouldValidate && Y(O);
    },
    G = (O, I, B) => {
      for (const de in I) {
        const ae = I[de],
          J = `${O}.${de}`,
          ie = le(i, J);
        (h.array.has(O) || xt(ae) || (ie && !ie._f)) && !Ja(ae) ? G(J, ae, B) : z(J, ae, B);
      }
    },
    oe = (O, I, B = {}) => {
      const de = le(i, O),
        ae = h.array.has(O),
        J = Wt(I);
      Qe(u, O, J),
        ae
          ? (v.array.next({ name: O, values: Wt(u) }),
            (g.isDirty || g.dirtyFields || b.isDirty || b.dirtyFields) &&
              B.shouldDirty &&
              v.state.next({ name: O, dirtyFields: ys(s, u), isDirty: be(O, J) }))
          : de && !de._f && !Qt(J)
            ? G(O, J, B)
            : z(O, J, B),
        Xy(O, h) && v.state.next({ ...a }),
        v.state.next({ name: d.mount ? O : void 0, values: Wt(u) });
    },
    Me = async (O) => {
      d.mount = !0;
      const I = O.target;
      let B = I.name,
        de = !0;
      const ae = le(i, B),
        J = (ie) => {
          de = Number.isNaN(ie) || (Ja(ie) && isNaN(ie.getTime())) || Tr(ie, le(u, B, ie));
        };
      if (ae) {
        let ie, je;
        const Ze = I.type ? Ky(ae._f) : Rb(O),
          St = O.type === Zu.BLUR || O.type === Zu.FOCUS_OUT,
          li =
            (!f_(ae._f) && !n.resolver && !le(a.errors, B) && !ae._f.deps) ||
            m_(St, le(a.touchedFields, B), a.isSubmitted, x, E),
          Ca = Xy(B, h, St);
        Qe(u, B, Ze),
          St ? (ae._f.onBlur && ae._f.onBlur(O), p && p(0)) : ae._f.onChange && ae._f.onChange(O);
        const Re = te(B, Ze, St),
          lt = !Xt(Re) || Ca;
        if ((!St && v.state.next({ name: B, type: O.type, values: Wt(u) }), li))
          return (
            (g.isValid || b.isValid) && (n.mode === 'onBlur' ? St && j() : St || j()),
            lt && v.state.next({ name: B, ...(Ca ? {} : Re) })
          );
        if ((!St && Ca && v.state.next({ ...a }), n.resolver)) {
          const { errors: Ve } = await me([B]);
          if ((J(Ze), de)) {
            const Kt = Jy(a.errors, i, B),
              _t = Jy(Ve, i, Kt.name || B);
            (ie = _t.error), (B = _t.name), (je = Xt(Ve));
          }
        } else
          _([B], !0),
            (ie = (await ev(ae, h.disabled, u, N, n.shouldUseNativeValidation))[B]),
            _([B]),
            J(Ze),
            de && (ie ? (je = !1) : (g.isValid || b.isValid) && (je = await we(i, !0)));
        de && (ae._f.deps && Y(ae._f.deps), H(B, je, ie, Re));
      }
    },
    C = (O, I) => {
      if (le(a.errors, I) && O.focus) return O.focus(), 1;
    },
    Y = async (O, I = {}) => {
      let B, de;
      const ae = As(O);
      if (n.resolver) {
        const J = await Pe(kt(O) ? O : ae);
        (B = Xt(J)), (de = O ? !ae.some((ie) => le(J, ie)) : B);
      } else
        O
          ? ((de = (
              await Promise.all(
                ae.map(async (J) => {
                  const ie = le(i, J);
                  return await we(ie && ie._f ? { [J]: ie } : ie);
                })
              )
            ).every(Boolean)),
            !(!de && !a.isValid) && j())
          : (de = B = await we(i));
      return (
        v.state.next({
          ...(!er(O) || ((g.isValid || b.isValid) && B !== a.isValid) ? {} : { name: O }),
          ...(n.resolver || !O ? { isValid: B } : {}),
          errors: a.errors,
        }),
        I.shouldFocus && !de && $s(i, C, O ? ae : h.mount),
        de
      );
    },
    se = (O) => {
      const I = { ...(d.mount ? u : s) };
      return kt(O) ? I : er(O) ? le(I, O) : O.map((B) => le(I, B));
    },
    re = (O, I) => ({
      invalid: !!le((I || a).errors, O),
      isDirty: !!le((I || a).dirtyFields, O),
      error: le((I || a).errors, O),
      isValidating: !!le(a.validatingFields, O),
      isTouched: !!le((I || a).touchedFields, O),
    }),
    ve = (O) => {
      O && As(O).forEach((I) => Pt(a.errors, I)), v.state.next({ errors: O ? a.errors : {} });
    },
    We = (O, I, B) => {
      const de = (le(i, O, { _f: {} })._f || {}).ref,
        ae = le(a.errors, O) || {},
        { ref: J, message: ie, type: je, ...Ze } = ae;
      Qe(a.errors, O, { ...Ze, ...I, ref: de }),
        v.state.next({ name: O, errors: a.errors, isValid: !1 }),
        B && B.shouldFocus && de && de.focus && de.focus();
    },
    ke = (O, I) => (In(O) ? v.state.subscribe({ next: (B) => O(Ee(void 0, I), B) }) : Ee(O, I, !0)),
    Tt = (O) =>
      v.state.subscribe({
        next: (I) => {
          p_(O.name, I.name, O.exact) &&
            h_(I, O.formState || g, si, O.reRenderRoot) &&
            O.callback({ values: { ...u }, ...a, ...I });
        },
      }).unsubscribe,
    rt = (O) => ((d.mount = !0), (b = { ...b, ...O.formState }), Tt({ ...O, formState: b })),
    rn = (O, I = {}) => {
      for (const B of O ? As(O) : h.mount)
        h.mount.delete(B),
          h.array.delete(B),
          I.keepValue || (Pt(i, B), Pt(u, B)),
          !I.keepError && Pt(a.errors, B),
          !I.keepDirty && Pt(a.dirtyFields, B),
          !I.keepTouched && Pt(a.touchedFields, B),
          !I.keepIsValidating && Pt(a.validatingFields, B),
          !n.shouldUnregister && !I.keepDefaultValue && Pt(s, B);
      v.state.next({ values: Wt(u) }),
        v.state.next({ ...a, ...(I.keepDirty ? { isDirty: be() } : {}) }),
        !I.keepIsValid && j();
    },
    Vr = ({ disabled: O, name: I }) => {
      ((wn(O) && d.mount) || O || h.disabled.has(I)) &&
        (O ? h.disabled.add(I) : h.disabled.delete(I));
    },
    Zn = (O, I = {}) => {
      let B = le(i, O);
      const de = wn(I.disabled) || wn(n.disabled);
      return (
        Qe(i, O, {
          ...(B || {}),
          _f: { ...(B && B._f ? B._f : { ref: { name: O } }), name: O, mount: !0, ...I },
        }),
        h.mount.add(O),
        B
          ? Vr({ disabled: wn(I.disabled) ? I.disabled : n.disabled, name: O })
          : ee(O, !0, I.value),
        {
          ...(de ? { disabled: I.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!I.required,
                min: vs(I.min),
                max: vs(I.max),
                minLength: vs(I.minLength),
                maxLength: vs(I.maxLength),
                pattern: vs(I.pattern),
              }
            : {}),
          name: O,
          onChange: Me,
          onBlur: Me,
          ref: (ae) => {
            if (ae) {
              Zn(O, I), (B = le(i, O));
              const J =
                  (kt(ae.value) &&
                    ae.querySelectorAll &&
                    ae.querySelectorAll('input,select,textarea')[0]) ||
                  ae,
                ie = s_(J),
                je = B._f.refs || [];
              if (ie ? je.find((Ze) => Ze === J) : J === B._f.ref) return;
              Qe(i, O, {
                _f: {
                  ...B._f,
                  ...(ie
                    ? {
                        refs: [...je.filter(zf), J, ...(Array.isArray(le(s, O)) ? [{}] : [])],
                        ref: { type: J.type, name: O },
                      }
                    : { ref: J }),
                },
              }),
                ee(O, !1, void 0, J);
            } else
              (B = le(i, O, {})),
                B._f && (B._f.mount = !1),
                (n.shouldUnregister || I.shouldUnregister) &&
                  !(jb(h.array, O) && d.action) &&
                  h.unMount.add(O);
          },
        }
      );
    },
    Br = () => n.shouldFocusError && $s(i, C, h.mount),
    Sa = (O) => {
      wn(O) &&
        (v.state.next({ disabled: O }),
        $s(
          i,
          (I, B) => {
            const de = le(i, B);
            de &&
              ((I.disabled = de._f.disabled || O),
              Array.isArray(de._f.refs) &&
                de._f.refs.forEach((ae) => {
                  ae.disabled = de._f.disabled || O;
                }));
          },
          0,
          !1
        ));
    },
    Ur = (O, I) => async (B) => {
      let de;
      B && (B.preventDefault && B.preventDefault(), B.persist && B.persist());
      let ae = Wt(u);
      if ((v.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: J, values: ie } = await me();
        (a.errors = J), (ae = ie);
      } else await we(i);
      if (h.disabled.size) for (const J of h.disabled) Qe(ae, J, void 0);
      if ((Pt(a.errors, 'root'), Xt(a.errors))) {
        v.state.next({ errors: {} });
        try {
          await O(ae, B);
        } catch (J) {
          de = J;
        }
      } else I && (await I({ ...a.errors }, B)), Br(), setTimeout(Br);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Xt(a.errors) && !de,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        de)
      )
        throw de;
    },
    yo = (O, I = {}) => {
      le(i, O) &&
        (kt(I.defaultValue)
          ? oe(O, Wt(le(s, O)))
          : (oe(O, I.defaultValue), Qe(s, O, Wt(I.defaultValue))),
        I.keepTouched || Pt(a.touchedFields, O),
        I.keepDirty ||
          (Pt(a.dirtyFields, O), (a.isDirty = I.defaultValue ? be(O, Wt(le(s, O))) : be())),
        I.keepError || (Pt(a.errors, O), g.isValid && j()),
        v.state.next({ ...a }));
    },
    oi = (O, I = {}) => {
      const B = O ? Wt(O) : s,
        de = Wt(B),
        ae = Xt(O),
        J = ae ? s : de;
      if ((I.keepDefaultValues || (s = B), !I.keepValues)) {
        if (I.keepDirtyValues) {
          const ie = new Set([...h.mount, ...Object.keys(ys(s, u))]);
          for (const je of Array.from(ie))
            le(a.dirtyFields, je) ? Qe(J, je, le(u, je)) : oe(je, le(J, je));
        } else {
          if (_h && kt(O))
            for (const ie of h.mount) {
              const je = le(i, ie);
              if (je && je._f) {
                const Ze = Array.isArray(je._f.refs) ? je._f.refs[0] : je._f.ref;
                if (qu(Ze)) {
                  const St = Ze.closest('form');
                  if (St) {
                    St.reset();
                    break;
                  }
                }
              }
            }
          for (const ie of h.mount) oe(ie, le(J, ie));
        }
        (u = Wt(J)), v.array.next({ values: { ...J } }), v.state.next({ values: { ...J } });
      }
      (h = {
        mount: I.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (d.mount = !g.isValid || !!I.keepIsValid || !!I.keepDirtyValues),
        (d.watch = !!n.shouldUnregister),
        v.state.next({
          submitCount: I.keepSubmitCount ? a.submitCount : 0,
          isDirty: ae ? !1 : I.keepDirty ? a.isDirty : !!(I.keepDefaultValues && !Tr(O, s)),
          isSubmitted: I.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: ae
            ? {}
            : I.keepDirtyValues
              ? I.keepDefaultValues && u
                ? ys(s, u)
                : a.dirtyFields
              : I.keepDefaultValues && O
                ? ys(s, O)
                : I.keepDirty
                  ? a.dirtyFields
                  : {},
          touchedFields: I.keepTouched ? a.touchedFields : {},
          errors: I.keepErrors ? a.errors : {},
          isSubmitSuccessful: I.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    Vt = (O, I) => oi(In(O) ? O(u) : O, I),
    vo = (O, I = {}) => {
      const B = le(i, O),
        de = B && B._f;
      if (de) {
        const ae = de.refs ? de.refs[0] : de.ref;
        ae.focus && (ae.focus(), I.shouldSelect && In(ae.select) && ae.select());
      }
    },
    si = (O) => {
      a = { ...a, ...O };
    },
    _a = {
      control: {
        register: Zn,
        unregister: rn,
        getFieldState: re,
        handleSubmit: Ur,
        setError: We,
        _subscribe: Tt,
        _runSchema: me,
        _getWatch: Ee,
        _getDirty: be,
        _setValid: j,
        _setFieldArray: M,
        _setDisabledField: Vr,
        _setErrors: A,
        _getFieldArray: Ne,
        _reset: oi,
        _resetDefaultValues: () =>
          In(n.defaultValues) &&
          n.defaultValues().then((O) => {
            Vt(O, n.resetOptions), v.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: ce,
        _disableForm: Sa,
        _subjects: v,
        _proxyFormState: g,
        get _fields() {
          return i;
        },
        get _formValues() {
          return u;
        },
        get _state() {
          return d;
        },
        set _state(O) {
          d = O;
        },
        get _defaultValues() {
          return s;
        },
        get _names() {
          return h;
        },
        set _names(O) {
          h = O;
        },
        get _formState() {
          return a;
        },
        get _options() {
          return n;
        },
        set _options(O) {
          n = { ...n, ...O };
        },
      },
      subscribe: rt,
      trigger: Y,
      register: Zn,
      handleSubmit: Ur,
      watch: ke,
      setValue: oe,
      getValues: se,
      reset: Vt,
      resetField: yo,
      clearErrors: ve,
      unregister: rn,
      setError: We,
      setFocus: vo,
      getFieldState: re,
    };
  return { ..._a, formControl: _a };
}
const w_ = typeof window < 'u' ? Q.useLayoutEffect : Q.useEffect;
function Yb(t = {}) {
  const n = Q.useRef(void 0),
    a = Q.useRef(void 0),
    [i, s] = Q.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: In(t.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
      isReady: !1,
      defaultValues: In(t.defaultValues) ? void 0 : t.defaultValues,
    });
  n.current ||
    ((n.current = { ...(t.formControl ? t.formControl : b_(t)), formState: i }),
    t.formControl &&
      t.defaultValues &&
      !In(t.defaultValues) &&
      t.formControl.reset(t.defaultValues, t.resetOptions));
  const u = n.current.control;
  return (
    (u._options = t),
    w_(() => {
      const d = u._subscribe({
        formState: u._proxyFormState,
        callback: () => s({ ...u._formState }),
        reRenderRoot: !0,
      });
      return s((h) => ({ ...h, isReady: !0 })), (u._formState.isReady = !0), d;
    }, [u]),
    Q.useEffect(() => u._disableForm(t.disabled), [u, t.disabled]),
    Q.useEffect(() => {
      t.mode && (u._options.mode = t.mode),
        t.reValidateMode && (u._options.reValidateMode = t.reValidateMode),
        t.errors && !Xt(t.errors) && u._setErrors(t.errors);
    }, [u, t.errors, t.mode, t.reValidateMode]),
    Q.useEffect(() => {
      t.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
    }, [u, t.shouldUnregister]),
    Q.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const d = u._getDirty();
        d !== i.isDirty && u._subjects.state.next({ isDirty: d });
      }
    }, [u, i.isDirty]),
    Q.useEffect(() => {
      t.values && !Tr(t.values, a.current)
        ? (u._reset(t.values, u._options.resetOptions),
          (a.current = t.values),
          s((d) => ({ ...d })))
        : u._resetDefaultValues();
    }, [u, t.values]),
    Q.useEffect(() => {
      u._state.mount || (u._setValid(), (u._state.mount = !0)),
        u._state.watch && ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    (n.current.formState = Fb(i, u)),
    n.current
  );
}
const tv = (t, n, a) => {
    if (t && 'reportValidity' in t) {
      const i = le(a, n);
      t.setCustomValidity((i && i.message) || ''), t.reportValidity();
    }
  },
  Kb = (t, n) => {
    for (const a in n.fields) {
      const i = n.fields[a];
      i && i.ref && 'reportValidity' in i.ref
        ? tv(i.ref, a, t)
        : i && i.refs && i.refs.forEach((s) => tv(s, a, t));
    }
  },
  k_ = (t, n) => {
    n.shouldUseNativeValidation && Kb(t, n);
    const a = {};
    for (const i in t) {
      const s = le(n.fields, i),
        u = Object.assign(t[i] || {}, { ref: s && s.ref });
      if (x_(n.names || Object.keys(t), i)) {
        const d = Object.assign({}, le(a, i));
        Qe(d, 'root', u), Qe(a, i, d);
      } else Qe(a, i, u);
    }
    return a;
  },
  x_ = (t, n) => {
    const a = nv(n);
    return t.some((i) => nv(i).match(`^${a}\\.\\d+`));
  };
function nv(t) {
  return t.replace(/\]|\[/g, '');
}
function S_(t, n) {
  for (var a = {}; t.length; ) {
    var i = t[0],
      s = i.code,
      u = i.message,
      d = i.path.join('.');
    if (!a[d])
      if ('unionErrors' in i) {
        var h = i.unionErrors[0].errors[0];
        a[d] = { message: h.message, type: h.code };
      } else a[d] = { message: u, type: s };
    if (
      ('unionErrors' in i &&
        i.unionErrors.forEach(function (g) {
          return g.errors.forEach(function (b) {
            return t.push(b);
          });
        }),
      n)
    ) {
      var p = a[d].types,
        m = p && p[i.code];
      a[d] = Wb(d, n, a, s, m ? [].concat(m, i.message) : i.message);
    }
    t.shift();
  }
  return a;
}
function Hb(t, n, a) {
  return (
    a === void 0 && (a = {}),
    function (i, s, u) {
      try {
        return Promise.resolve(
          (function (d, h) {
            try {
              var p = Promise.resolve(t[a.mode === 'sync' ? 'parse' : 'parseAsync'](i, n)).then(
                function (m) {
                  return (
                    u.shouldUseNativeValidation && Kb({}, u),
                    { errors: {}, values: a.raw ? Object.assign({}, i) : m }
                  );
                }
              );
            } catch (m) {
              return h(m);
            }
            return p && p.then ? p.then(void 0, h) : p;
          })(0, function (d) {
            if (
              (function (h) {
                return Array.isArray(h == null ? void 0 : h.errors);
              })(d)
            )
              return {
                values: {},
                errors: k_(
                  S_(d.errors, !u.shouldUseNativeValidation && u.criteriaMode === 'all'),
                  u
                ),
              };
            throw d;
          })
        );
      } catch (d) {
        return Promise.reject(d);
      }
    }
  );
}
var Ye;
(function (t) {
  t.assertEqual = (s) => s;
  function n(s) {}
  t.assertIs = n;
  function a(s) {
    throw new Error();
  }
  (t.assertNever = a),
    (t.arrayToEnum = (s) => {
      const u = {};
      for (const d of s) u[d] = d;
      return u;
    }),
    (t.getValidEnumValues = (s) => {
      const u = t.objectKeys(s).filter((h) => typeof s[s[h]] != 'number'),
        d = {};
      for (const h of u) d[h] = s[h];
      return t.objectValues(d);
    }),
    (t.objectValues = (s) =>
      t.objectKeys(s).map(function (u) {
        return s[u];
      })),
    (t.objectKeys =
      typeof Object.keys == 'function'
        ? (s) => Object.keys(s)
        : (s) => {
            const u = [];
            for (const d in s) Object.prototype.hasOwnProperty.call(s, d) && u.push(d);
            return u;
          }),
    (t.find = (s, u) => {
      for (const d of s) if (u(d)) return d;
    }),
    (t.isInteger =
      typeof Number.isInteger == 'function'
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == 'number' && isFinite(s) && Math.floor(s) === s);
  function i(s, u = ' | ') {
    return s.map((d) => (typeof d == 'string' ? `'${d}'` : d)).join(u);
  }
  (t.joinValues = i),
    (t.jsonStringifyReplacer = (s, u) => (typeof u == 'bigint' ? u.toString() : u));
})(Ye || (Ye = {}));
var ah;
(function (t) {
  t.mergeShapes = (n, a) => ({ ...n, ...a });
})(ah || (ah = {}));
const fe = Ye.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  Mr = (t) => {
    switch (typeof t) {
      case 'undefined':
        return fe.undefined;
      case 'string':
        return fe.string;
      case 'number':
        return isNaN(t) ? fe.nan : fe.number;
      case 'boolean':
        return fe.boolean;
      case 'function':
        return fe.function;
      case 'bigint':
        return fe.bigint;
      case 'symbol':
        return fe.symbol;
      case 'object':
        return Array.isArray(t)
          ? fe.array
          : t === null
            ? fe.null
            : t.then && typeof t.then == 'function' && t.catch && typeof t.catch == 'function'
              ? fe.promise
              : typeof Map < 'u' && t instanceof Map
                ? fe.map
                : typeof Set < 'u' && t instanceof Set
                  ? fe.set
                  : typeof Date < 'u' && t instanceof Date
                    ? fe.date
                    : fe.object;
      default:
        return fe.unknown;
    }
  },
  X = Ye.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  __ = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, '$1:');
class kn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(n) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      });
    const a = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, a) : (this.__proto__ = a),
      (this.name = 'ZodError'),
      (this.issues = n);
  }
  format(n) {
    const a =
        n ||
        function (u) {
          return u.message;
        },
      i = { _errors: [] },
      s = (u) => {
        for (const d of u.issues)
          if (d.code === 'invalid_union') d.unionErrors.map(s);
          else if (d.code === 'invalid_return_type') s(d.returnTypeError);
          else if (d.code === 'invalid_arguments') s(d.argumentsError);
          else if (d.path.length === 0) i._errors.push(a(d));
          else {
            let h = i,
              p = 0;
            for (; p < d.path.length; ) {
              const m = d.path[p];
              p === d.path.length - 1
                ? ((h[m] = h[m] || { _errors: [] }), h[m]._errors.push(a(d)))
                : (h[m] = h[m] || { _errors: [] }),
                (h = h[m]),
                p++;
            }
          }
      };
    return s(this), i;
  }
  static assert(n) {
    if (!(n instanceof kn)) throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ye.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(n = (a) => a.message) {
    const a = {},
      i = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((a[s.path[0]] = a[s.path[0]] || []), a[s.path[0]].push(n(s)))
        : i.push(n(s));
    return { formErrors: i, fieldErrors: a };
  }
  get formErrors() {
    return this.flatten();
  }
}
kn.create = (t) => new kn(t);
const lo = (t, n) => {
  let a;
  switch (t.code) {
    case X.invalid_type:
      t.received === fe.undefined
        ? (a = 'Required')
        : (a = `Expected ${t.expected}, received ${t.received}`);
      break;
    case X.invalid_literal:
      a = `Invalid literal value, expected ${JSON.stringify(t.expected, Ye.jsonStringifyReplacer)}`;
      break;
    case X.unrecognized_keys:
      a = `Unrecognized key(s) in object: ${Ye.joinValues(t.keys, ', ')}`;
      break;
    case X.invalid_union:
      a = 'Invalid input';
      break;
    case X.invalid_union_discriminator:
      a = `Invalid discriminator value. Expected ${Ye.joinValues(t.options)}`;
      break;
    case X.invalid_enum_value:
      a = `Invalid enum value. Expected ${Ye.joinValues(t.options)}, received '${t.received}'`;
      break;
    case X.invalid_arguments:
      a = 'Invalid function arguments';
      break;
    case X.invalid_return_type:
      a = 'Invalid function return type';
      break;
    case X.invalid_date:
      a = 'Invalid date';
      break;
    case X.invalid_string:
      typeof t.validation == 'object'
        ? 'includes' in t.validation
          ? ((a = `Invalid input: must include "${t.validation.includes}"`),
            typeof t.validation.position == 'number' &&
              (a = `${a} at one or more positions greater than or equal to ${t.validation.position}`))
          : 'startsWith' in t.validation
            ? (a = `Invalid input: must start with "${t.validation.startsWith}"`)
            : 'endsWith' in t.validation
              ? (a = `Invalid input: must end with "${t.validation.endsWith}"`)
              : Ye.assertNever(t.validation)
        : t.validation !== 'regex'
          ? (a = `Invalid ${t.validation}`)
          : (a = 'Invalid');
      break;
    case X.too_small:
      t.type === 'array'
        ? (a = `Array must contain ${t.exact ? 'exactly' : t.inclusive ? 'at least' : 'more than'} ${t.minimum} element(s)`)
        : t.type === 'string'
          ? (a = `String must contain ${t.exact ? 'exactly' : t.inclusive ? 'at least' : 'over'} ${t.minimum} character(s)`)
          : t.type === 'number'
            ? (a = `Number must be ${t.exact ? 'exactly equal to ' : t.inclusive ? 'greater than or equal to ' : 'greater than '}${t.minimum}`)
            : t.type === 'date'
              ? (a = `Date must be ${t.exact ? 'exactly equal to ' : t.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(t.minimum))}`)
              : (a = 'Invalid input');
      break;
    case X.too_big:
      t.type === 'array'
        ? (a = `Array must contain ${t.exact ? 'exactly' : t.inclusive ? 'at most' : 'less than'} ${t.maximum} element(s)`)
        : t.type === 'string'
          ? (a = `String must contain ${t.exact ? 'exactly' : t.inclusive ? 'at most' : 'under'} ${t.maximum} character(s)`)
          : t.type === 'number'
            ? (a = `Number must be ${t.exact ? 'exactly' : t.inclusive ? 'less than or equal to' : 'less than'} ${t.maximum}`)
            : t.type === 'bigint'
              ? (a = `BigInt must be ${t.exact ? 'exactly' : t.inclusive ? 'less than or equal to' : 'less than'} ${t.maximum}`)
              : t.type === 'date'
                ? (a = `Date must be ${t.exact ? 'exactly' : t.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(t.maximum))}`)
                : (a = 'Invalid input');
      break;
    case X.custom:
      a = 'Invalid input';
      break;
    case X.invalid_intersection_types:
      a = 'Intersection results could not be merged';
      break;
    case X.not_multiple_of:
      a = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case X.not_finite:
      a = 'Number must be finite';
      break;
    default:
      (a = n.defaultError), Ye.assertNever(t);
  }
  return { message: a };
};
let Gb = lo;
function C_(t) {
  Gb = t;
}
function Hu() {
  return Gb;
}
const Gu = (t) => {
    const { data: n, path: a, errorMaps: i, issueData: s } = t,
      u = [...a, ...(s.path || [])],
      d = { ...s, path: u };
    if (s.message !== void 0) return { ...s, path: u, message: s.message };
    let h = '';
    const p = i
      .filter((m) => !!m)
      .slice()
      .reverse();
    for (const m of p) h = m(d, { data: n, defaultError: h }).message;
    return { ...s, path: u, message: h };
  },
  N_ = [];
function ue(t, n) {
  const a = Hu(),
    i = Gu({
      issueData: n,
      data: t.data,
      path: t.path,
      errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, a, a === lo ? void 0 : lo].filter(
        (s) => !!s
      ),
    });
  t.common.issues.push(i);
}
class qt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(n, a) {
    const i = [];
    for (const s of a) {
      if (s.status === 'aborted') return De;
      s.status === 'dirty' && n.dirty(), i.push(s.value);
    }
    return { status: n.value, value: i };
  }
  static async mergeObjectAsync(n, a) {
    const i = [];
    for (const s of a) {
      const u = await s.key,
        d = await s.value;
      i.push({ key: u, value: d });
    }
    return qt.mergeObjectSync(n, i);
  }
  static mergeObjectSync(n, a) {
    const i = {};
    for (const s of a) {
      const { key: u, value: d } = s;
      if (u.status === 'aborted' || d.status === 'aborted') return De;
      u.status === 'dirty' && n.dirty(),
        d.status === 'dirty' && n.dirty(),
        u.value !== '__proto__' && (typeof d.value < 'u' || s.alwaysSet) && (i[u.value] = d.value);
    }
    return { status: n.value, value: i };
  }
}
const De = Object.freeze({ status: 'aborted' }),
  Xu = (t) => ({ status: 'dirty', value: t }),
  tn = (t) => ({ status: 'valid', value: t }),
  ih = (t) => t.status === 'aborted',
  oh = (t) => t.status === 'dirty',
  ei = (t) => t.status === 'valid',
  Bs = (t) => typeof Promise < 'u' && t instanceof Promise;
function Ju(t, n, a, i) {
  if (typeof n == 'function' ? t !== n || !0 : !n.has(t))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return n.get(t);
}
function Xb(t, n, a, i, s) {
  if (typeof n == 'function' ? t !== n || !0 : !n.has(t))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return n.set(t, a), a;
}
var ge;
(function (t) {
  (t.errToObj = (n) => (typeof n == 'string' ? { message: n } : n || {})),
    (t.toString = (n) => (typeof n == 'string' ? n : n == null ? void 0 : n.message));
})(ge || (ge = {}));
var Rs, js;
class or {
  constructor(n, a, i, s) {
    (this._cachedPath = []), (this.parent = n), (this.data = a), (this._path = i), (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const rv = (t, n) => {
  if (ei(n)) return { success: !0, data: n.value };
  if (!t.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const a = new kn(t.common.issues);
      return (this._error = a), this._error;
    },
  };
};
function Le(t) {
  if (!t) return {};
  const { errorMap: n, invalid_type_error: a, required_error: i, description: s } = t;
  if (n && (a || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return n
    ? { errorMap: n, description: s }
    : {
        errorMap: (u, d) => {
          var h, p;
          const { message: m } = t;
          return u.code === 'invalid_enum_value'
            ? { message: m ?? d.defaultError }
            : typeof d.data > 'u'
              ? { message: (h = m ?? i) !== null && h !== void 0 ? h : d.defaultError }
              : u.code !== 'invalid_type'
                ? { message: d.defaultError }
                : { message: (p = m ?? a) !== null && p !== void 0 ? p : d.defaultError };
        },
        description: s,
      };
}
class $e {
  get description() {
    return this._def.description;
  }
  _getType(n) {
    return Mr(n.data);
  }
  _getOrReturnCtx(n, a) {
    return (
      a || {
        common: n.parent.common,
        data: n.data,
        parsedType: Mr(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      }
    );
  }
  _processInputParams(n) {
    return {
      status: new qt(),
      ctx: {
        common: n.parent.common,
        data: n.data,
        parsedType: Mr(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      },
    };
  }
  _parseSync(n) {
    const a = this._parse(n);
    if (Bs(a)) throw new Error('Synchronous parse encountered promise.');
    return a;
  }
  _parseAsync(n) {
    const a = this._parse(n);
    return Promise.resolve(a);
  }
  parse(n, a) {
    const i = this.safeParse(n, a);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(n, a) {
    var i;
    const s = {
        common: {
          issues: [],
          async: (i = a == null ? void 0 : a.async) !== null && i !== void 0 ? i : !1,
          contextualErrorMap: a == null ? void 0 : a.errorMap,
        },
        path: (a == null ? void 0 : a.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Mr(n),
      },
      u = this._parseSync({ data: n, path: s.path, parent: s });
    return rv(s, u);
  }
  '~validate'(n) {
    var a, i;
    const s = {
      common: { issues: [], async: !!this['~standard'].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: n,
      parsedType: Mr(n),
    };
    if (!this['~standard'].async)
      try {
        const u = this._parseSync({ data: n, path: [], parent: s });
        return ei(u) ? { value: u.value } : { issues: s.common.issues };
      } catch (u) {
        !(
          (i =
            (a = u == null ? void 0 : u.message) === null || a === void 0
              ? void 0
              : a.toLowerCase()) === null || i === void 0
        ) &&
          i.includes('encountered') &&
          (this['~standard'].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: n, path: [], parent: s }).then((u) =>
      ei(u) ? { value: u.value } : { issues: s.common.issues }
    );
  }
  async parseAsync(n, a) {
    const i = await this.safeParseAsync(n, a);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(n, a) {
    const i = {
        common: { issues: [], contextualErrorMap: a == null ? void 0 : a.errorMap, async: !0 },
        path: (a == null ? void 0 : a.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Mr(n),
      },
      s = this._parse({ data: n, path: i.path, parent: i }),
      u = await (Bs(s) ? s : Promise.resolve(s));
    return rv(i, u);
  }
  refine(n, a) {
    const i = (s) =>
      typeof a == 'string' || typeof a > 'u' ? { message: a } : typeof a == 'function' ? a(s) : a;
    return this._refinement((s, u) => {
      const d = n(s),
        h = () => u.addIssue({ code: X.custom, ...i(s) });
      return typeof Promise < 'u' && d instanceof Promise
        ? d.then((p) => (p ? !0 : (h(), !1)))
        : d
          ? !0
          : (h(), !1);
    });
  }
  refinement(n, a) {
    return this._refinement((i, s) =>
      n(i) ? !0 : (s.addIssue(typeof a == 'function' ? a(i, s) : a), !1)
    );
  }
  _refinement(n) {
    return new Un({
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: 'refinement', refinement: n },
    });
  }
  superRefine(n) {
    return this._refinement(n);
  }
  constructor(n) {
    (this.spa = this.safeParseAsync),
      (this._def = n),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this['~standard'] = { version: 1, vendor: 'zod', validate: (a) => this['~validate'](a) });
  }
  optional() {
    return rr.create(this, this._def);
  }
  nullable() {
    return xa.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Bn.create(this);
  }
  promise() {
    return co.create(this, this._def);
  }
  or(n) {
    return Ys.create([this, n], this._def);
  }
  and(n) {
    return Ks.create(this, n, this._def);
  }
  transform(n) {
    return new Un({
      ...Le(this._def),
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: 'transform', transform: n },
    });
  }
  default(n) {
    const a = typeof n == 'function' ? n : () => n;
    return new Qs({ ...Le(this._def), innerType: this, defaultValue: a, typeName: Ce.ZodDefault });
  }
  brand() {
    return new Dh({ typeName: Ce.ZodBranded, type: this, ...Le(this._def) });
  }
  catch(n) {
    const a = typeof n == 'function' ? n : () => n;
    return new el({ ...Le(this._def), innerType: this, catchValue: a, typeName: Ce.ZodCatch });
  }
  describe(n) {
    const a = this.constructor;
    return new a({ ...this._def, description: n });
  }
  pipe(n) {
    return hl.create(this, n);
  }
  readonly() {
    return tl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const O_ = /^c[^\s-]{8,}$/i,
  E_ = /^[0-9a-z]+$/,
  D_ = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  P_ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  M_ = /^[a-z0-9_-]{21}$/i,
  T_ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  R_ =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  j_ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  L_ = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let Vf;
const F_ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  A_ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  $_ =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  I_ =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  W_ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  z_ = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Jb =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  V_ = new RegExp(`^${Jb}$`);
function Qb(t) {
  let n = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    t.precision
      ? (n = `${n}\\.\\d{${t.precision}}`)
      : t.precision == null && (n = `${n}(\\.\\d+)?`),
    n
  );
}
function B_(t) {
  return new RegExp(`^${Qb(t)}$`);
}
function e0(t) {
  let n = `${Jb}T${Qb(t)}`;
  const a = [];
  return (
    a.push(t.local ? 'Z?' : 'Z'),
    t.offset && a.push('([+-]\\d{2}:?\\d{2})'),
    (n = `${n}(${a.join('|')})`),
    new RegExp(`^${n}$`)
  );
}
function U_(t, n) {
  return !!(((n === 'v4' || !n) && F_.test(t)) || ((n === 'v6' || !n) && $_.test(t)));
}
function Z_(t, n) {
  if (!T_.test(t)) return !1;
  try {
    const [a] = t.split('.'),
      i = a
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(a.length + ((4 - (a.length % 4)) % 4), '='),
      s = JSON.parse(atob(i));
    return !(typeof s != 'object' || s === null || !s.typ || !s.alg || (n && s.alg !== n));
  } catch {
    return !1;
  }
}
function q_(t, n) {
  return !!(((n === 'v4' || !n) && A_.test(t)) || ((n === 'v6' || !n) && I_.test(t)));
}
class zn extends $e {
  _parse(n) {
    if ((this._def.coerce && (n.data = String(n.data)), this._getType(n) !== fe.string)) {
      const s = this._getOrReturnCtx(n);
      return ue(s, { code: X.invalid_type, expected: fe.string, received: s.parsedType }), De;
    }
    const a = new qt();
    let i;
    for (const s of this._def.checks)
      if (s.kind === 'min')
        n.data.length < s.value &&
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, {
            code: X.too_small,
            minimum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === 'max')
        n.data.length > s.value &&
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, {
            code: X.too_big,
            maximum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === 'length') {
        const u = n.data.length > s.value,
          d = n.data.length < s.value;
        (u || d) &&
          ((i = this._getOrReturnCtx(n, i)),
          u
            ? ue(i, {
                code: X.too_big,
                maximum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : d &&
              ue(i, {
                code: X.too_small,
                minimum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          a.dirty());
      } else if (s.kind === 'email')
        j_.test(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, { validation: 'email', code: X.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === 'emoji')
        Vf || (Vf = new RegExp(L_, 'u')),
          Vf.test(n.data) ||
            ((i = this._getOrReturnCtx(n, i)),
            ue(i, { validation: 'emoji', code: X.invalid_string, message: s.message }),
            a.dirty());
      else if (s.kind === 'uuid')
        P_.test(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, { validation: 'uuid', code: X.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === 'nanoid')
        M_.test(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, { validation: 'nanoid', code: X.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === 'cuid')
        O_.test(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, { validation: 'cuid', code: X.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === 'cuid2')
        E_.test(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, { validation: 'cuid2', code: X.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === 'ulid')
        D_.test(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, { validation: 'ulid', code: X.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === 'url')
        try {
          new URL(n.data);
        } catch {
          (i = this._getOrReturnCtx(n, i)),
            ue(i, { validation: 'url', code: X.invalid_string, message: s.message }),
            a.dirty();
        }
      else
        s.kind === 'regex'
          ? ((s.regex.lastIndex = 0),
            s.regex.test(n.data) ||
              ((i = this._getOrReturnCtx(n, i)),
              ue(i, { validation: 'regex', code: X.invalid_string, message: s.message }),
              a.dirty()))
          : s.kind === 'trim'
            ? (n.data = n.data.trim())
            : s.kind === 'includes'
              ? n.data.includes(s.value, s.position) ||
                ((i = this._getOrReturnCtx(n, i)),
                ue(i, {
                  code: X.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                a.dirty())
              : s.kind === 'toLowerCase'
                ? (n.data = n.data.toLowerCase())
                : s.kind === 'toUpperCase'
                  ? (n.data = n.data.toUpperCase())
                  : s.kind === 'startsWith'
                    ? n.data.startsWith(s.value) ||
                      ((i = this._getOrReturnCtx(n, i)),
                      ue(i, {
                        code: X.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      a.dirty())
                    : s.kind === 'endsWith'
                      ? n.data.endsWith(s.value) ||
                        ((i = this._getOrReturnCtx(n, i)),
                        ue(i, {
                          code: X.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        a.dirty())
                      : s.kind === 'datetime'
                        ? e0(s).test(n.data) ||
                          ((i = this._getOrReturnCtx(n, i)),
                          ue(i, {
                            code: X.invalid_string,
                            validation: 'datetime',
                            message: s.message,
                          }),
                          a.dirty())
                        : s.kind === 'date'
                          ? V_.test(n.data) ||
                            ((i = this._getOrReturnCtx(n, i)),
                            ue(i, {
                              code: X.invalid_string,
                              validation: 'date',
                              message: s.message,
                            }),
                            a.dirty())
                          : s.kind === 'time'
                            ? B_(s).test(n.data) ||
                              ((i = this._getOrReturnCtx(n, i)),
                              ue(i, {
                                code: X.invalid_string,
                                validation: 'time',
                                message: s.message,
                              }),
                              a.dirty())
                            : s.kind === 'duration'
                              ? R_.test(n.data) ||
                                ((i = this._getOrReturnCtx(n, i)),
                                ue(i, {
                                  validation: 'duration',
                                  code: X.invalid_string,
                                  message: s.message,
                                }),
                                a.dirty())
                              : s.kind === 'ip'
                                ? U_(n.data, s.version) ||
                                  ((i = this._getOrReturnCtx(n, i)),
                                  ue(i, {
                                    validation: 'ip',
                                    code: X.invalid_string,
                                    message: s.message,
                                  }),
                                  a.dirty())
                                : s.kind === 'jwt'
                                  ? Z_(n.data, s.alg) ||
                                    ((i = this._getOrReturnCtx(n, i)),
                                    ue(i, {
                                      validation: 'jwt',
                                      code: X.invalid_string,
                                      message: s.message,
                                    }),
                                    a.dirty())
                                  : s.kind === 'cidr'
                                    ? q_(n.data, s.version) ||
                                      ((i = this._getOrReturnCtx(n, i)),
                                      ue(i, {
                                        validation: 'cidr',
                                        code: X.invalid_string,
                                        message: s.message,
                                      }),
                                      a.dirty())
                                    : s.kind === 'base64'
                                      ? W_.test(n.data) ||
                                        ((i = this._getOrReturnCtx(n, i)),
                                        ue(i, {
                                          validation: 'base64',
                                          code: X.invalid_string,
                                          message: s.message,
                                        }),
                                        a.dirty())
                                      : s.kind === 'base64url'
                                        ? z_.test(n.data) ||
                                          ((i = this._getOrReturnCtx(n, i)),
                                          ue(i, {
                                            validation: 'base64url',
                                            code: X.invalid_string,
                                            message: s.message,
                                          }),
                                          a.dirty())
                                        : Ye.assertNever(s);
    return { status: a.value, value: n.data };
  }
  _regex(n, a, i) {
    return this.refinement((s) => n.test(s), {
      validation: a,
      code: X.invalid_string,
      ...ge.errToObj(i),
    });
  }
  _addCheck(n) {
    return new zn({ ...this._def, checks: [...this._def.checks, n] });
  }
  email(n) {
    return this._addCheck({ kind: 'email', ...ge.errToObj(n) });
  }
  url(n) {
    return this._addCheck({ kind: 'url', ...ge.errToObj(n) });
  }
  emoji(n) {
    return this._addCheck({ kind: 'emoji', ...ge.errToObj(n) });
  }
  uuid(n) {
    return this._addCheck({ kind: 'uuid', ...ge.errToObj(n) });
  }
  nanoid(n) {
    return this._addCheck({ kind: 'nanoid', ...ge.errToObj(n) });
  }
  cuid(n) {
    return this._addCheck({ kind: 'cuid', ...ge.errToObj(n) });
  }
  cuid2(n) {
    return this._addCheck({ kind: 'cuid2', ...ge.errToObj(n) });
  }
  ulid(n) {
    return this._addCheck({ kind: 'ulid', ...ge.errToObj(n) });
  }
  base64(n) {
    return this._addCheck({ kind: 'base64', ...ge.errToObj(n) });
  }
  base64url(n) {
    return this._addCheck({ kind: 'base64url', ...ge.errToObj(n) });
  }
  jwt(n) {
    return this._addCheck({ kind: 'jwt', ...ge.errToObj(n) });
  }
  ip(n) {
    return this._addCheck({ kind: 'ip', ...ge.errToObj(n) });
  }
  cidr(n) {
    return this._addCheck({ kind: 'cidr', ...ge.errToObj(n) });
  }
  datetime(n) {
    var a, i;
    return typeof n == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: n })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (n == null ? void 0 : n.precision) > 'u'
              ? null
              : n == null
                ? void 0
                : n.precision,
          offset: (a = n == null ? void 0 : n.offset) !== null && a !== void 0 ? a : !1,
          local: (i = n == null ? void 0 : n.local) !== null && i !== void 0 ? i : !1,
          ...ge.errToObj(n == null ? void 0 : n.message),
        });
  }
  date(n) {
    return this._addCheck({ kind: 'date', message: n });
  }
  time(n) {
    return typeof n == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: n })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (n == null ? void 0 : n.precision) > 'u'
              ? null
              : n == null
                ? void 0
                : n.precision,
          ...ge.errToObj(n == null ? void 0 : n.message),
        });
  }
  duration(n) {
    return this._addCheck({ kind: 'duration', ...ge.errToObj(n) });
  }
  regex(n, a) {
    return this._addCheck({ kind: 'regex', regex: n, ...ge.errToObj(a) });
  }
  includes(n, a) {
    return this._addCheck({
      kind: 'includes',
      value: n,
      position: a == null ? void 0 : a.position,
      ...ge.errToObj(a == null ? void 0 : a.message),
    });
  }
  startsWith(n, a) {
    return this._addCheck({ kind: 'startsWith', value: n, ...ge.errToObj(a) });
  }
  endsWith(n, a) {
    return this._addCheck({ kind: 'endsWith', value: n, ...ge.errToObj(a) });
  }
  min(n, a) {
    return this._addCheck({ kind: 'min', value: n, ...ge.errToObj(a) });
  }
  max(n, a) {
    return this._addCheck({ kind: 'max', value: n, ...ge.errToObj(a) });
  }
  length(n, a) {
    return this._addCheck({ kind: 'length', value: n, ...ge.errToObj(a) });
  }
  nonempty(n) {
    return this.min(1, ge.errToObj(n));
  }
  trim() {
    return new zn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new zn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new zn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((n) => n.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((n) => n.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((n) => n.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((n) => n.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((n) => n.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((n) => n.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((n) => n.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((n) => n.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((n) => n.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((n) => n.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((n) => n.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((n) => n.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((n) => n.kind === 'ip');
  }
  get isCIDR() {
    return !!this._def.checks.find((n) => n.kind === 'cidr');
  }
  get isBase64() {
    return !!this._def.checks.find((n) => n.kind === 'base64');
  }
  get isBase64url() {
    return !!this._def.checks.find((n) => n.kind === 'base64url');
  }
  get minLength() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'min' && (n === null || a.value > n) && (n = a.value);
    return n;
  }
  get maxLength() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'max' && (n === null || a.value < n) && (n = a.value);
    return n;
  }
}
zn.create = (t) => {
  var n;
  return new zn({
    checks: [],
    typeName: Ce.ZodString,
    coerce: (n = t == null ? void 0 : t.coerce) !== null && n !== void 0 ? n : !1,
    ...Le(t),
  });
};
function Y_(t, n) {
  const a = (t.toString().split('.')[1] || '').length,
    i = (n.toString().split('.')[1] || '').length,
    s = a > i ? a : i,
    u = parseInt(t.toFixed(s).replace('.', '')),
    d = parseInt(n.toFixed(s).replace('.', ''));
  return (u % d) / Math.pow(10, s);
}
class ba extends $e {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(n) {
    if ((this._def.coerce && (n.data = Number(n.data)), this._getType(n) !== fe.number)) {
      const s = this._getOrReturnCtx(n);
      return ue(s, { code: X.invalid_type, expected: fe.number, received: s.parsedType }), De;
    }
    let a;
    const i = new qt();
    for (const s of this._def.checks)
      s.kind === 'int'
        ? Ye.isInteger(n.data) ||
          ((a = this._getOrReturnCtx(n, a)),
          ue(a, {
            code: X.invalid_type,
            expected: 'integer',
            received: 'float',
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'min'
          ? (s.inclusive ? n.data < s.value : n.data <= s.value) &&
            ((a = this._getOrReturnCtx(n, a)),
            ue(a, {
              code: X.too_small,
              minimum: s.value,
              type: 'number',
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            i.dirty())
          : s.kind === 'max'
            ? (s.inclusive ? n.data > s.value : n.data >= s.value) &&
              ((a = this._getOrReturnCtx(n, a)),
              ue(a, {
                code: X.too_big,
                maximum: s.value,
                type: 'number',
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              i.dirty())
            : s.kind === 'multipleOf'
              ? Y_(n.data, s.value) !== 0 &&
                ((a = this._getOrReturnCtx(n, a)),
                ue(a, { code: X.not_multiple_of, multipleOf: s.value, message: s.message }),
                i.dirty())
              : s.kind === 'finite'
                ? Number.isFinite(n.data) ||
                  ((a = this._getOrReturnCtx(n, a)),
                  ue(a, { code: X.not_finite, message: s.message }),
                  i.dirty())
                : Ye.assertNever(s);
    return { status: i.value, value: n.data };
  }
  gte(n, a) {
    return this.setLimit('min', n, !0, ge.toString(a));
  }
  gt(n, a) {
    return this.setLimit('min', n, !1, ge.toString(a));
  }
  lte(n, a) {
    return this.setLimit('max', n, !0, ge.toString(a));
  }
  lt(n, a) {
    return this.setLimit('max', n, !1, ge.toString(a));
  }
  setLimit(n, a, i, s) {
    return new ba({
      ...this._def,
      checks: [...this._def.checks, { kind: n, value: a, inclusive: i, message: ge.toString(s) }],
    });
  }
  _addCheck(n) {
    return new ba({ ...this._def, checks: [...this._def.checks, n] });
  }
  int(n) {
    return this._addCheck({ kind: 'int', message: ge.toString(n) });
  }
  positive(n) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: ge.toString(n) });
  }
  negative(n) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: ge.toString(n) });
  }
  nonpositive(n) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: ge.toString(n) });
  }
  nonnegative(n) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: ge.toString(n) });
  }
  multipleOf(n, a) {
    return this._addCheck({ kind: 'multipleOf', value: n, message: ge.toString(a) });
  }
  finite(n) {
    return this._addCheck({ kind: 'finite', message: ge.toString(n) });
  }
  safe(n) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ge.toString(n),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ge.toString(n),
    });
  }
  get minValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'min' && (n === null || a.value > n) && (n = a.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'max' && (n === null || a.value < n) && (n = a.value);
    return n;
  }
  get isInt() {
    return !!this._def.checks.find(
      (n) => n.kind === 'int' || (n.kind === 'multipleOf' && Ye.isInteger(n.value))
    );
  }
  get isFinite() {
    let n = null,
      a = null;
    for (const i of this._def.checks) {
      if (i.kind === 'finite' || i.kind === 'int' || i.kind === 'multipleOf') return !0;
      i.kind === 'min'
        ? (a === null || i.value > a) && (a = i.value)
        : i.kind === 'max' && (n === null || i.value < n) && (n = i.value);
    }
    return Number.isFinite(a) && Number.isFinite(n);
  }
}
ba.create = (t) =>
  new ba({
    checks: [],
    typeName: Ce.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...Le(t),
  });
class wa extends $e {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(n) {
    if (this._def.coerce)
      try {
        n.data = BigInt(n.data);
      } catch {
        return this._getInvalidInput(n);
      }
    if (this._getType(n) !== fe.bigint) return this._getInvalidInput(n);
    let a;
    const i = new qt();
    for (const s of this._def.checks)
      s.kind === 'min'
        ? (s.inclusive ? n.data < s.value : n.data <= s.value) &&
          ((a = this._getOrReturnCtx(n, a)),
          ue(a, {
            code: X.too_small,
            type: 'bigint',
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'max'
          ? (s.inclusive ? n.data > s.value : n.data >= s.value) &&
            ((a = this._getOrReturnCtx(n, a)),
            ue(a, {
              code: X.too_big,
              type: 'bigint',
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            i.dirty())
          : s.kind === 'multipleOf'
            ? n.data % s.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(n, a)),
              ue(a, { code: X.not_multiple_of, multipleOf: s.value, message: s.message }),
              i.dirty())
            : Ye.assertNever(s);
    return { status: i.value, value: n.data };
  }
  _getInvalidInput(n) {
    const a = this._getOrReturnCtx(n);
    return ue(a, { code: X.invalid_type, expected: fe.bigint, received: a.parsedType }), De;
  }
  gte(n, a) {
    return this.setLimit('min', n, !0, ge.toString(a));
  }
  gt(n, a) {
    return this.setLimit('min', n, !1, ge.toString(a));
  }
  lte(n, a) {
    return this.setLimit('max', n, !0, ge.toString(a));
  }
  lt(n, a) {
    return this.setLimit('max', n, !1, ge.toString(a));
  }
  setLimit(n, a, i, s) {
    return new wa({
      ...this._def,
      checks: [...this._def.checks, { kind: n, value: a, inclusive: i, message: ge.toString(s) }],
    });
  }
  _addCheck(n) {
    return new wa({ ...this._def, checks: [...this._def.checks, n] });
  }
  positive(n) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: ge.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: ge.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: ge.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: ge.toString(n),
    });
  }
  multipleOf(n, a) {
    return this._addCheck({ kind: 'multipleOf', value: n, message: ge.toString(a) });
  }
  get minValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'min' && (n === null || a.value > n) && (n = a.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'max' && (n === null || a.value < n) && (n = a.value);
    return n;
  }
}
wa.create = (t) => {
  var n;
  return new wa({
    checks: [],
    typeName: Ce.ZodBigInt,
    coerce: (n = t == null ? void 0 : t.coerce) !== null && n !== void 0 ? n : !1,
    ...Le(t),
  });
};
class Us extends $e {
  _parse(n) {
    if ((this._def.coerce && (n.data = !!n.data), this._getType(n) !== fe.boolean)) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { code: X.invalid_type, expected: fe.boolean, received: a.parsedType }), De;
    }
    return tn(n.data);
  }
}
Us.create = (t) =>
  new Us({ typeName: Ce.ZodBoolean, coerce: (t == null ? void 0 : t.coerce) || !1, ...Le(t) });
class ti extends $e {
  _parse(n) {
    if ((this._def.coerce && (n.data = new Date(n.data)), this._getType(n) !== fe.date)) {
      const s = this._getOrReturnCtx(n);
      return ue(s, { code: X.invalid_type, expected: fe.date, received: s.parsedType }), De;
    }
    if (isNaN(n.data.getTime())) {
      const s = this._getOrReturnCtx(n);
      return ue(s, { code: X.invalid_date }), De;
    }
    const a = new qt();
    let i;
    for (const s of this._def.checks)
      s.kind === 'min'
        ? n.data.getTime() < s.value &&
          ((i = this._getOrReturnCtx(n, i)),
          ue(i, {
            code: X.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: 'date',
          }),
          a.dirty())
        : s.kind === 'max'
          ? n.data.getTime() > s.value &&
            ((i = this._getOrReturnCtx(n, i)),
            ue(i, {
              code: X.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: 'date',
            }),
            a.dirty())
          : Ye.assertNever(s);
    return { status: a.value, value: new Date(n.data.getTime()) };
  }
  _addCheck(n) {
    return new ti({ ...this._def, checks: [...this._def.checks, n] });
  }
  min(n, a) {
    return this._addCheck({ kind: 'min', value: n.getTime(), message: ge.toString(a) });
  }
  max(n, a) {
    return this._addCheck({ kind: 'max', value: n.getTime(), message: ge.toString(a) });
  }
  get minDate() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'min' && (n === null || a.value > n) && (n = a.value);
    return n != null ? new Date(n) : null;
  }
  get maxDate() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === 'max' && (n === null || a.value < n) && (n = a.value);
    return n != null ? new Date(n) : null;
  }
}
ti.create = (t) =>
  new ti({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: Ce.ZodDate,
    ...Le(t),
  });
class Qu extends $e {
  _parse(n) {
    if (this._getType(n) !== fe.symbol) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { code: X.invalid_type, expected: fe.symbol, received: a.parsedType }), De;
    }
    return tn(n.data);
  }
}
Qu.create = (t) => new Qu({ typeName: Ce.ZodSymbol, ...Le(t) });
class Zs extends $e {
  _parse(n) {
    if (this._getType(n) !== fe.undefined) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { code: X.invalid_type, expected: fe.undefined, received: a.parsedType }), De;
    }
    return tn(n.data);
  }
}
Zs.create = (t) => new Zs({ typeName: Ce.ZodUndefined, ...Le(t) });
class qs extends $e {
  _parse(n) {
    if (this._getType(n) !== fe.null) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { code: X.invalid_type, expected: fe.null, received: a.parsedType }), De;
    }
    return tn(n.data);
  }
}
qs.create = (t) => new qs({ typeName: Ce.ZodNull, ...Le(t) });
class uo extends $e {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(n) {
    return tn(n.data);
  }
}
uo.create = (t) => new uo({ typeName: Ce.ZodAny, ...Le(t) });
class Qa extends $e {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(n) {
    return tn(n.data);
  }
}
Qa.create = (t) => new Qa({ typeName: Ce.ZodUnknown, ...Le(t) });
class $r extends $e {
  _parse(n) {
    const a = this._getOrReturnCtx(n);
    return ue(a, { code: X.invalid_type, expected: fe.never, received: a.parsedType }), De;
  }
}
$r.create = (t) => new $r({ typeName: Ce.ZodNever, ...Le(t) });
class ec extends $e {
  _parse(n) {
    if (this._getType(n) !== fe.undefined) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { code: X.invalid_type, expected: fe.void, received: a.parsedType }), De;
    }
    return tn(n.data);
  }
}
ec.create = (t) => new ec({ typeName: Ce.ZodVoid, ...Le(t) });
class Bn extends $e {
  _parse(n) {
    const { ctx: a, status: i } = this._processInputParams(n),
      s = this._def;
    if (a.parsedType !== fe.array)
      return ue(a, { code: X.invalid_type, expected: fe.array, received: a.parsedType }), De;
    if (s.exactLength !== null) {
      const d = a.data.length > s.exactLength.value,
        h = a.data.length < s.exactLength.value;
      (d || h) &&
        (ue(a, {
          code: d ? X.too_big : X.too_small,
          minimum: h ? s.exactLength.value : void 0,
          maximum: d ? s.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (s.minLength !== null &&
        a.data.length < s.minLength.value &&
        (ue(a, {
          code: X.too_small,
          minimum: s.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        i.dirty()),
      s.maxLength !== null &&
        a.data.length > s.maxLength.value &&
        (ue(a, {
          code: X.too_big,
          maximum: s.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        i.dirty()),
      a.common.async)
    )
      return Promise.all(
        [...a.data].map((d, h) => s.type._parseAsync(new or(a, d, a.path, h)))
      ).then((d) => qt.mergeArray(i, d));
    const u = [...a.data].map((d, h) => s.type._parseSync(new or(a, d, a.path, h)));
    return qt.mergeArray(i, u);
  }
  get element() {
    return this._def.type;
  }
  min(n, a) {
    return new Bn({ ...this._def, minLength: { value: n, message: ge.toString(a) } });
  }
  max(n, a) {
    return new Bn({ ...this._def, maxLength: { value: n, message: ge.toString(a) } });
  }
  length(n, a) {
    return new Bn({ ...this._def, exactLength: { value: n, message: ge.toString(a) } });
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Bn.create = (t, n) =>
  new Bn({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ce.ZodArray,
    ...Le(n),
  });
function io(t) {
  if (t instanceof ht) {
    const n = {};
    for (const a in t.shape) {
      const i = t.shape[a];
      n[a] = rr.create(io(i));
    }
    return new ht({ ...t._def, shape: () => n });
  } else
    return t instanceof Bn
      ? new Bn({ ...t._def, type: io(t.element) })
      : t instanceof rr
        ? rr.create(io(t.unwrap()))
        : t instanceof xa
          ? xa.create(io(t.unwrap()))
          : t instanceof sr
            ? sr.create(t.items.map((n) => io(n)))
            : t;
}
class ht extends $e {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const n = this._def.shape(),
      a = Ye.objectKeys(n);
    return (this._cached = { shape: n, keys: a });
  }
  _parse(n) {
    if (this._getType(n) !== fe.object) {
      const p = this._getOrReturnCtx(n);
      return ue(p, { code: X.invalid_type, expected: fe.object, received: p.parsedType }), De;
    }
    const { status: a, ctx: i } = this._processInputParams(n),
      { shape: s, keys: u } = this._getCached(),
      d = [];
    if (!(this._def.catchall instanceof $r && this._def.unknownKeys === 'strip'))
      for (const p in i.data) u.includes(p) || d.push(p);
    const h = [];
    for (const p of u) {
      const m = s[p],
        g = i.data[p];
      h.push({
        key: { status: 'valid', value: p },
        value: m._parse(new or(i, g, i.path, p)),
        alwaysSet: p in i.data,
      });
    }
    if (this._def.catchall instanceof $r) {
      const p = this._def.unknownKeys;
      if (p === 'passthrough')
        for (const m of d)
          h.push({
            key: { status: 'valid', value: m },
            value: { status: 'valid', value: i.data[m] },
          });
      else if (p === 'strict')
        d.length > 0 && (ue(i, { code: X.unrecognized_keys, keys: d }), a.dirty());
      else if (p !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const p = this._def.catchall;
      for (const m of d) {
        const g = i.data[m];
        h.push({
          key: { status: 'valid', value: m },
          value: p._parse(new or(i, g, i.path, m)),
          alwaysSet: m in i.data,
        });
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const p = [];
            for (const m of h) {
              const g = await m.key,
                b = await m.value;
              p.push({ key: g, value: b, alwaysSet: m.alwaysSet });
            }
            return p;
          })
          .then((p) => qt.mergeObjectSync(a, p))
      : qt.mergeObjectSync(a, h);
  }
  get shape() {
    return this._def.shape();
  }
  strict(n) {
    return (
      ge.errToObj,
      new ht({
        ...this._def,
        unknownKeys: 'strict',
        ...(n !== void 0
          ? {
              errorMap: (a, i) => {
                var s, u, d, h;
                const p =
                  (d =
                    (u = (s = this._def).errorMap) === null || u === void 0
                      ? void 0
                      : u.call(s, a, i).message) !== null && d !== void 0
                    ? d
                    : i.defaultError;
                return a.code === 'unrecognized_keys'
                  ? { message: (h = ge.errToObj(n).message) !== null && h !== void 0 ? h : p }
                  : { message: p };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new ht({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new ht({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(n) {
    return new ht({ ...this._def, shape: () => ({ ...this._def.shape(), ...n }) });
  }
  merge(n) {
    return new ht({
      unknownKeys: n._def.unknownKeys,
      catchall: n._def.catchall,
      shape: () => ({ ...this._def.shape(), ...n._def.shape() }),
      typeName: Ce.ZodObject,
    });
  }
  setKey(n, a) {
    return this.augment({ [n]: a });
  }
  catchall(n) {
    return new ht({ ...this._def, catchall: n });
  }
  pick(n) {
    const a = {};
    return (
      Ye.objectKeys(n).forEach((i) => {
        n[i] && this.shape[i] && (a[i] = this.shape[i]);
      }),
      new ht({ ...this._def, shape: () => a })
    );
  }
  omit(n) {
    const a = {};
    return (
      Ye.objectKeys(this.shape).forEach((i) => {
        n[i] || (a[i] = this.shape[i]);
      }),
      new ht({ ...this._def, shape: () => a })
    );
  }
  deepPartial() {
    return io(this);
  }
  partial(n) {
    const a = {};
    return (
      Ye.objectKeys(this.shape).forEach((i) => {
        const s = this.shape[i];
        n && !n[i] ? (a[i] = s) : (a[i] = s.optional());
      }),
      new ht({ ...this._def, shape: () => a })
    );
  }
  required(n) {
    const a = {};
    return (
      Ye.objectKeys(this.shape).forEach((i) => {
        if (n && !n[i]) a[i] = this.shape[i];
        else {
          let s = this.shape[i];
          for (; s instanceof rr; ) s = s._def.innerType;
          a[i] = s;
        }
      }),
      new ht({ ...this._def, shape: () => a })
    );
  }
  keyof() {
    return t0(Ye.objectKeys(this.shape));
  }
}
ht.create = (t, n) =>
  new ht({
    shape: () => t,
    unknownKeys: 'strip',
    catchall: $r.create(),
    typeName: Ce.ZodObject,
    ...Le(n),
  });
ht.strictCreate = (t, n) =>
  new ht({
    shape: () => t,
    unknownKeys: 'strict',
    catchall: $r.create(),
    typeName: Ce.ZodObject,
    ...Le(n),
  });
ht.lazycreate = (t, n) =>
  new ht({
    shape: t,
    unknownKeys: 'strip',
    catchall: $r.create(),
    typeName: Ce.ZodObject,
    ...Le(n),
  });
class Ys extends $e {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n),
      i = this._def.options;
    function s(u) {
      for (const h of u) if (h.result.status === 'valid') return h.result;
      for (const h of u)
        if (h.result.status === 'dirty')
          return a.common.issues.push(...h.ctx.common.issues), h.result;
      const d = u.map((h) => new kn(h.ctx.common.issues));
      return ue(a, { code: X.invalid_union, unionErrors: d }), De;
    }
    if (a.common.async)
      return Promise.all(
        i.map(async (u) => {
          const d = { ...a, common: { ...a.common, issues: [] }, parent: null };
          return { result: await u._parseAsync({ data: a.data, path: a.path, parent: d }), ctx: d };
        })
      ).then(s);
    {
      let u;
      const d = [];
      for (const p of i) {
        const m = { ...a, common: { ...a.common, issues: [] }, parent: null },
          g = p._parseSync({ data: a.data, path: a.path, parent: m });
        if (g.status === 'valid') return g;
        g.status === 'dirty' && !u && (u = { result: g, ctx: m }),
          m.common.issues.length && d.push(m.common.issues);
      }
      if (u) return a.common.issues.push(...u.ctx.common.issues), u.result;
      const h = d.map((p) => new kn(p));
      return ue(a, { code: X.invalid_union, unionErrors: h }), De;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ys.create = (t, n) => new Ys({ options: t, typeName: Ce.ZodUnion, ...Le(n) });
const ya = (t) =>
  t instanceof Gs
    ? ya(t.schema)
    : t instanceof Un
      ? ya(t.innerType())
      : t instanceof Xs
        ? [t.value]
        : t instanceof ka
          ? t.options
          : t instanceof Js
            ? Ye.objectValues(t.enum)
            : t instanceof Qs
              ? ya(t._def.innerType)
              : t instanceof Zs
                ? [void 0]
                : t instanceof qs
                  ? [null]
                  : t instanceof rr
                    ? [void 0, ...ya(t.unwrap())]
                    : t instanceof xa
                      ? [null, ...ya(t.unwrap())]
                      : t instanceof Dh || t instanceof tl
                        ? ya(t.unwrap())
                        : t instanceof el
                          ? ya(t._def.innerType)
                          : [];
class yc extends $e {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    if (a.parsedType !== fe.object)
      return ue(a, { code: X.invalid_type, expected: fe.object, received: a.parsedType }), De;
    const i = this.discriminator,
      s = a.data[i],
      u = this.optionsMap.get(s);
    return u
      ? a.common.async
        ? u._parseAsync({ data: a.data, path: a.path, parent: a })
        : u._parseSync({ data: a.data, path: a.path, parent: a })
      : (ue(a, {
          code: X.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [i],
        }),
        De);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(n, a, i) {
    const s = new Map();
    for (const u of a) {
      const d = ya(u.shape[n]);
      if (!d.length)
        throw new Error(
          `A discriminator value for key \`${n}\` could not be extracted from all schema options`
        );
      for (const h of d) {
        if (s.has(h))
          throw new Error(`Discriminator property ${String(n)} has duplicate value ${String(h)}`);
        s.set(h, u);
      }
    }
    return new yc({
      typeName: Ce.ZodDiscriminatedUnion,
      discriminator: n,
      options: a,
      optionsMap: s,
      ...Le(i),
    });
  }
}
function sh(t, n) {
  const a = Mr(t),
    i = Mr(n);
  if (t === n) return { valid: !0, data: t };
  if (a === fe.object && i === fe.object) {
    const s = Ye.objectKeys(n),
      u = Ye.objectKeys(t).filter((h) => s.indexOf(h) !== -1),
      d = { ...t, ...n };
    for (const h of u) {
      const p = sh(t[h], n[h]);
      if (!p.valid) return { valid: !1 };
      d[h] = p.data;
    }
    return { valid: !0, data: d };
  } else if (a === fe.array && i === fe.array) {
    if (t.length !== n.length) return { valid: !1 };
    const s = [];
    for (let u = 0; u < t.length; u++) {
      const d = t[u],
        h = n[u],
        p = sh(d, h);
      if (!p.valid) return { valid: !1 };
      s.push(p.data);
    }
    return { valid: !0, data: s };
  } else return a === fe.date && i === fe.date && +t == +n ? { valid: !0, data: t } : { valid: !1 };
}
class Ks extends $e {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n),
      s = (u, d) => {
        if (ih(u) || ih(d)) return De;
        const h = sh(u.value, d.value);
        return h.valid
          ? ((oh(u) || oh(d)) && a.dirty(), { status: a.value, value: h.data })
          : (ue(i, { code: X.invalid_intersection_types }), De);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({ data: i.data, path: i.path, parent: i }),
        ]).then(([u, d]) => s(u, d))
      : s(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
Ks.create = (t, n, a) => new Ks({ left: t, right: n, typeName: Ce.ZodIntersection, ...Le(a) });
class sr extends $e {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== fe.array)
      return ue(i, { code: X.invalid_type, expected: fe.array, received: i.parsedType }), De;
    if (i.data.length < this._def.items.length)
      return (
        ue(i, {
          code: X.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        De
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (ue(i, {
        code: X.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      a.dirty());
    const s = [...i.data]
      .map((u, d) => {
        const h = this._def.items[d] || this._def.rest;
        return h ? h._parse(new or(i, u, i.path, d)) : null;
      })
      .filter((u) => !!u);
    return i.common.async ? Promise.all(s).then((u) => qt.mergeArray(a, u)) : qt.mergeArray(a, s);
  }
  get items() {
    return this._def.items;
  }
  rest(n) {
    return new sr({ ...this._def, rest: n });
  }
}
sr.create = (t, n) => {
  if (!Array.isArray(t)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new sr({ items: t, typeName: Ce.ZodTuple, rest: null, ...Le(n) });
};
class Hs extends $e {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== fe.object)
      return ue(i, { code: X.invalid_type, expected: fe.object, received: i.parsedType }), De;
    const s = [],
      u = this._def.keyType,
      d = this._def.valueType;
    for (const h in i.data)
      s.push({
        key: u._parse(new or(i, h, i.path, h)),
        value: d._parse(new or(i, i.data[h], i.path, h)),
        alwaysSet: h in i.data,
      });
    return i.common.async ? qt.mergeObjectAsync(a, s) : qt.mergeObjectSync(a, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(n, a, i) {
    return a instanceof $e
      ? new Hs({ keyType: n, valueType: a, typeName: Ce.ZodRecord, ...Le(i) })
      : new Hs({ keyType: zn.create(), valueType: n, typeName: Ce.ZodRecord, ...Le(a) });
  }
}
class tc extends $e {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== fe.map)
      return ue(i, { code: X.invalid_type, expected: fe.map, received: i.parsedType }), De;
    const s = this._def.keyType,
      u = this._def.valueType,
      d = [...i.data.entries()].map(([h, p], m) => ({
        key: s._parse(new or(i, h, i.path, [m, 'key'])),
        value: u._parse(new or(i, p, i.path, [m, 'value'])),
      }));
    if (i.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const p of d) {
          const m = await p.key,
            g = await p.value;
          if (m.status === 'aborted' || g.status === 'aborted') return De;
          (m.status === 'dirty' || g.status === 'dirty') && a.dirty(), h.set(m.value, g.value);
        }
        return { status: a.value, value: h };
      });
    } else {
      const h = new Map();
      for (const p of d) {
        const m = p.key,
          g = p.value;
        if (m.status === 'aborted' || g.status === 'aborted') return De;
        (m.status === 'dirty' || g.status === 'dirty') && a.dirty(), h.set(m.value, g.value);
      }
      return { status: a.value, value: h };
    }
  }
}
tc.create = (t, n, a) => new tc({ valueType: n, keyType: t, typeName: Ce.ZodMap, ...Le(a) });
class ni extends $e {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== fe.set)
      return ue(i, { code: X.invalid_type, expected: fe.set, received: i.parsedType }), De;
    const s = this._def;
    s.minSize !== null &&
      i.data.size < s.minSize.value &&
      (ue(i, {
        code: X.too_small,
        minimum: s.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      a.dirty()),
      s.maxSize !== null &&
        i.data.size > s.maxSize.value &&
        (ue(i, {
          code: X.too_big,
          maximum: s.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        a.dirty());
    const u = this._def.valueType;
    function d(p) {
      const m = new Set();
      for (const g of p) {
        if (g.status === 'aborted') return De;
        g.status === 'dirty' && a.dirty(), m.add(g.value);
      }
      return { status: a.value, value: m };
    }
    const h = [...i.data.values()].map((p, m) => u._parse(new or(i, p, i.path, m)));
    return i.common.async ? Promise.all(h).then((p) => d(p)) : d(h);
  }
  min(n, a) {
    return new ni({ ...this._def, minSize: { value: n, message: ge.toString(a) } });
  }
  max(n, a) {
    return new ni({ ...this._def, maxSize: { value: n, message: ge.toString(a) } });
  }
  size(n, a) {
    return this.min(n, a).max(n, a);
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
ni.create = (t, n) =>
  new ni({ valueType: t, minSize: null, maxSize: null, typeName: Ce.ZodSet, ...Le(n) });
class oo extends $e {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    if (a.parsedType !== fe.function)
      return ue(a, { code: X.invalid_type, expected: fe.function, received: a.parsedType }), De;
    function i(h, p) {
      return Gu({
        data: h,
        path: a.path,
        errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, Hu(), lo].filter((m) => !!m),
        issueData: { code: X.invalid_arguments, argumentsError: p },
      });
    }
    function s(h, p) {
      return Gu({
        data: h,
        path: a.path,
        errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, Hu(), lo].filter((m) => !!m),
        issueData: { code: X.invalid_return_type, returnTypeError: p },
      });
    }
    const u = { errorMap: a.common.contextualErrorMap },
      d = a.data;
    if (this._def.returns instanceof co) {
      const h = this;
      return tn(async function (...p) {
        const m = new kn([]),
          g = await h._def.args.parseAsync(p, u).catch((v) => {
            throw (m.addIssue(i(p, v)), m);
          }),
          b = await Reflect.apply(d, this, g);
        return await h._def.returns._def.type.parseAsync(b, u).catch((v) => {
          throw (m.addIssue(s(b, v)), m);
        });
      });
    } else {
      const h = this;
      return tn(function (...p) {
        const m = h._def.args.safeParse(p, u);
        if (!m.success) throw new kn([i(p, m.error)]);
        const g = Reflect.apply(d, this, m.data),
          b = h._def.returns.safeParse(g, u);
        if (!b.success) throw new kn([s(g, b.error)]);
        return b.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...n) {
    return new oo({ ...this._def, args: sr.create(n).rest(Qa.create()) });
  }
  returns(n) {
    return new oo({ ...this._def, returns: n });
  }
  implement(n) {
    return this.parse(n);
  }
  strictImplement(n) {
    return this.parse(n);
  }
  static create(n, a, i) {
    return new oo({
      args: n || sr.create([]).rest(Qa.create()),
      returns: a || Qa.create(),
      typeName: Ce.ZodFunction,
      ...Le(i),
    });
  }
}
class Gs extends $e {
  get schema() {
    return this._def.getter();
  }
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    return this._def.getter()._parse({ data: a.data, path: a.path, parent: a });
  }
}
Gs.create = (t, n) => new Gs({ getter: t, typeName: Ce.ZodLazy, ...Le(n) });
class Xs extends $e {
  _parse(n) {
    if (n.data !== this._def.value) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { received: a.data, code: X.invalid_literal, expected: this._def.value }), De;
    }
    return { status: 'valid', value: n.data };
  }
  get value() {
    return this._def.value;
  }
}
Xs.create = (t, n) => new Xs({ value: t, typeName: Ce.ZodLiteral, ...Le(n) });
function t0(t, n) {
  return new ka({ values: t, typeName: Ce.ZodEnum, ...Le(n) });
}
class ka extends $e {
  constructor() {
    super(...arguments), Rs.set(this, void 0);
  }
  _parse(n) {
    if (typeof n.data != 'string') {
      const a = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        ue(a, { expected: Ye.joinValues(i), received: a.parsedType, code: X.invalid_type }), De
      );
    }
    if ((Ju(this, Rs) || Xb(this, Rs, new Set(this._def.values)), !Ju(this, Rs).has(n.data))) {
      const a = this._getOrReturnCtx(n),
        i = this._def.values;
      return ue(a, { received: a.data, code: X.invalid_enum_value, options: i }), De;
    }
    return tn(n.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const n = {};
    for (const a of this._def.values) n[a] = a;
    return n;
  }
  get Values() {
    const n = {};
    for (const a of this._def.values) n[a] = a;
    return n;
  }
  get Enum() {
    const n = {};
    for (const a of this._def.values) n[a] = a;
    return n;
  }
  extract(n, a = this._def) {
    return ka.create(n, { ...this._def, ...a });
  }
  exclude(n, a = this._def) {
    return ka.create(
      this.options.filter((i) => !n.includes(i)),
      { ...this._def, ...a }
    );
  }
}
Rs = new WeakMap();
ka.create = t0;
class Js extends $e {
  constructor() {
    super(...arguments), js.set(this, void 0);
  }
  _parse(n) {
    const a = Ye.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(n);
    if (i.parsedType !== fe.string && i.parsedType !== fe.number) {
      const s = Ye.objectValues(a);
      return (
        ue(i, { expected: Ye.joinValues(s), received: i.parsedType, code: X.invalid_type }), De
      );
    }
    if (
      (Ju(this, js) || Xb(this, js, new Set(Ye.getValidEnumValues(this._def.values))),
      !Ju(this, js).has(n.data))
    ) {
      const s = Ye.objectValues(a);
      return ue(i, { received: i.data, code: X.invalid_enum_value, options: s }), De;
    }
    return tn(n.data);
  }
  get enum() {
    return this._def.values;
  }
}
js = new WeakMap();
Js.create = (t, n) => new Js({ values: t, typeName: Ce.ZodNativeEnum, ...Le(n) });
class co extends $e {
  unwrap() {
    return this._def.type;
  }
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    if (a.parsedType !== fe.promise && a.common.async === !1)
      return ue(a, { code: X.invalid_type, expected: fe.promise, received: a.parsedType }), De;
    const i = a.parsedType === fe.promise ? a.data : Promise.resolve(a.data);
    return tn(
      i.then((s) =>
        this._def.type.parseAsync(s, { path: a.path, errorMap: a.common.contextualErrorMap })
      )
    );
  }
}
co.create = (t, n) => new co({ type: t, typeName: Ce.ZodPromise, ...Le(n) });
class Un extends $e {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ce.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n),
      s = this._def.effect || null,
      u = {
        addIssue: (d) => {
          ue(i, d), d.fatal ? a.abort() : a.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((u.addIssue = u.addIssue.bind(u)), s.type === 'preprocess')) {
      const d = s.transform(i.data, u);
      if (i.common.async)
        return Promise.resolve(d).then(async (h) => {
          if (a.value === 'aborted') return De;
          const p = await this._def.schema._parseAsync({ data: h, path: i.path, parent: i });
          return p.status === 'aborted'
            ? De
            : p.status === 'dirty' || a.value === 'dirty'
              ? Xu(p.value)
              : p;
        });
      {
        if (a.value === 'aborted') return De;
        const h = this._def.schema._parseSync({ data: d, path: i.path, parent: i });
        return h.status === 'aborted'
          ? De
          : h.status === 'dirty' || a.value === 'dirty'
            ? Xu(h.value)
            : h;
      }
    }
    if (s.type === 'refinement') {
      const d = (h) => {
        const p = s.refinement(h, u);
        if (i.common.async) return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return h;
      };
      if (i.common.async === !1) {
        const h = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
        return h.status === 'aborted'
          ? De
          : (h.status === 'dirty' && a.dirty(), d(h.value), { status: a.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((h) =>
            h.status === 'aborted'
              ? De
              : (h.status === 'dirty' && a.dirty(),
                d(h.value).then(() => ({ status: a.value, value: h.value })))
          );
    }
    if (s.type === 'transform')
      if (i.common.async === !1) {
        const d = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
        if (!ei(d)) return d;
        const h = s.transform(d.value, u);
        if (h instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return { status: a.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((d) =>
            ei(d)
              ? Promise.resolve(s.transform(d.value, u)).then((h) => ({
                  status: a.value,
                  value: h,
                }))
              : d
          );
    Ye.assertNever(s);
  }
}
Un.create = (t, n, a) => new Un({ schema: t, typeName: Ce.ZodEffects, effect: n, ...Le(a) });
Un.createWithPreprocess = (t, n, a) =>
  new Un({
    schema: n,
    effect: { type: 'preprocess', transform: t },
    typeName: Ce.ZodEffects,
    ...Le(a),
  });
class rr extends $e {
  _parse(n) {
    return this._getType(n) === fe.undefined ? tn(void 0) : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rr.create = (t, n) => new rr({ innerType: t, typeName: Ce.ZodOptional, ...Le(n) });
class xa extends $e {
  _parse(n) {
    return this._getType(n) === fe.null ? tn(null) : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
xa.create = (t, n) => new xa({ innerType: t, typeName: Ce.ZodNullable, ...Le(n) });
class Qs extends $e {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    let i = a.data;
    return (
      a.parsedType === fe.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: a.path, parent: a })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Qs.create = (t, n) =>
  new Qs({
    innerType: t,
    typeName: Ce.ZodDefault,
    defaultValue: typeof n.default == 'function' ? n.default : () => n.default,
    ...Le(n),
  });
class el extends $e {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n),
      i = { ...a, common: { ...a.common, issues: [] } },
      s = this._def.innerType._parse({ data: i.data, path: i.path, parent: { ...i } });
    return Bs(s)
      ? s.then((u) => ({
          status: 'valid',
          value:
            u.status === 'valid'
              ? u.value
              : this._def.catchValue({
                  get error() {
                    return new kn(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            s.status === 'valid'
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new kn(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
el.create = (t, n) =>
  new el({
    innerType: t,
    typeName: Ce.ZodCatch,
    catchValue: typeof n.catch == 'function' ? n.catch : () => n.catch,
    ...Le(n),
  });
class nc extends $e {
  _parse(n) {
    if (this._getType(n) !== fe.nan) {
      const a = this._getOrReturnCtx(n);
      return ue(a, { code: X.invalid_type, expected: fe.nan, received: a.parsedType }), De;
    }
    return { status: 'valid', value: n.data };
  }
}
nc.create = (t) => new nc({ typeName: Ce.ZodNaN, ...Le(t) });
const K_ = Symbol('zod_brand');
class Dh extends $e {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n),
      i = a.data;
    return this._def.type._parse({ data: i, path: a.path, parent: a });
  }
  unwrap() {
    return this._def.type;
  }
}
class hl extends $e {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({ data: i.data, path: i.path, parent: i });
        return s.status === 'aborted'
          ? De
          : s.status === 'dirty'
            ? (a.dirty(), Xu(s.value))
            : this._def.out._parseAsync({ data: s.value, path: i.path, parent: i });
      })();
    {
      const s = this._def.in._parseSync({ data: i.data, path: i.path, parent: i });
      return s.status === 'aborted'
        ? De
        : s.status === 'dirty'
          ? (a.dirty(), { status: 'dirty', value: s.value })
          : this._def.out._parseSync({ data: s.value, path: i.path, parent: i });
    }
  }
  static create(n, a) {
    return new hl({ in: n, out: a, typeName: Ce.ZodPipeline });
  }
}
class tl extends $e {
  _parse(n) {
    const a = this._def.innerType._parse(n),
      i = (s) => (ei(s) && (s.value = Object.freeze(s.value)), s);
    return Bs(a) ? a.then((s) => i(s)) : i(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tl.create = (t, n) => new tl({ innerType: t, typeName: Ce.ZodReadonly, ...Le(n) });
function av(t, n) {
  const a = typeof t == 'function' ? t(n) : typeof t == 'string' ? { message: t } : t;
  return typeof a == 'string' ? { message: a } : a;
}
function n0(t, n = {}, a) {
  return t
    ? uo.create().superRefine((i, s) => {
        var u, d;
        const h = t(i);
        if (h instanceof Promise)
          return h.then((p) => {
            var m, g;
            if (!p) {
              const b = av(n, i),
                v =
                  (g = (m = b.fatal) !== null && m !== void 0 ? m : a) !== null && g !== void 0
                    ? g
                    : !0;
              s.addIssue({ code: 'custom', ...b, fatal: v });
            }
          });
        if (!h) {
          const p = av(n, i),
            m =
              (d = (u = p.fatal) !== null && u !== void 0 ? u : a) !== null && d !== void 0
                ? d
                : !0;
          s.addIssue({ code: 'custom', ...p, fatal: m });
        }
      })
    : uo.create();
}
const H_ = { object: ht.lazycreate };
var Ce;
(function (t) {
  (t.ZodString = 'ZodString'),
    (t.ZodNumber = 'ZodNumber'),
    (t.ZodNaN = 'ZodNaN'),
    (t.ZodBigInt = 'ZodBigInt'),
    (t.ZodBoolean = 'ZodBoolean'),
    (t.ZodDate = 'ZodDate'),
    (t.ZodSymbol = 'ZodSymbol'),
    (t.ZodUndefined = 'ZodUndefined'),
    (t.ZodNull = 'ZodNull'),
    (t.ZodAny = 'ZodAny'),
    (t.ZodUnknown = 'ZodUnknown'),
    (t.ZodNever = 'ZodNever'),
    (t.ZodVoid = 'ZodVoid'),
    (t.ZodArray = 'ZodArray'),
    (t.ZodObject = 'ZodObject'),
    (t.ZodUnion = 'ZodUnion'),
    (t.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (t.ZodIntersection = 'ZodIntersection'),
    (t.ZodTuple = 'ZodTuple'),
    (t.ZodRecord = 'ZodRecord'),
    (t.ZodMap = 'ZodMap'),
    (t.ZodSet = 'ZodSet'),
    (t.ZodFunction = 'ZodFunction'),
    (t.ZodLazy = 'ZodLazy'),
    (t.ZodLiteral = 'ZodLiteral'),
    (t.ZodEnum = 'ZodEnum'),
    (t.ZodEffects = 'ZodEffects'),
    (t.ZodNativeEnum = 'ZodNativeEnum'),
    (t.ZodOptional = 'ZodOptional'),
    (t.ZodNullable = 'ZodNullable'),
    (t.ZodDefault = 'ZodDefault'),
    (t.ZodCatch = 'ZodCatch'),
    (t.ZodPromise = 'ZodPromise'),
    (t.ZodBranded = 'ZodBranded'),
    (t.ZodPipeline = 'ZodPipeline'),
    (t.ZodReadonly = 'ZodReadonly');
})(Ce || (Ce = {}));
const G_ = (t, n = { message: `Input not instance of ${t.name}` }) => n0((a) => a instanceof t, n),
  r0 = zn.create,
  a0 = ba.create,
  X_ = nc.create,
  J_ = wa.create,
  i0 = Us.create,
  Q_ = ti.create,
  eC = Qu.create,
  tC = Zs.create,
  nC = qs.create,
  rC = uo.create,
  aC = Qa.create,
  iC = $r.create,
  oC = ec.create,
  sC = Bn.create,
  lC = ht.create,
  uC = ht.strictCreate,
  cC = Ys.create,
  dC = yc.create,
  fC = Ks.create,
  hC = sr.create,
  pC = Hs.create,
  mC = tc.create,
  gC = ni.create,
  yC = oo.create,
  vC = Gs.create,
  bC = Xs.create,
  wC = ka.create,
  kC = Js.create,
  xC = co.create,
  iv = Un.create,
  SC = rr.create,
  _C = xa.create,
  CC = Un.createWithPreprocess,
  NC = hl.create,
  OC = () => r0().optional(),
  EC = () => a0().optional(),
  DC = () => i0().optional(),
  PC = {
    string: (t) => zn.create({ ...t, coerce: !0 }),
    number: (t) => ba.create({ ...t, coerce: !0 }),
    boolean: (t) => Us.create({ ...t, coerce: !0 }),
    bigint: (t) => wa.create({ ...t, coerce: !0 }),
    date: (t) => ti.create({ ...t, coerce: !0 }),
  },
  MC = De;
var ne = Object.freeze({
  __proto__: null,
  defaultErrorMap: lo,
  setErrorMap: C_,
  getErrorMap: Hu,
  makeIssue: Gu,
  EMPTY_PATH: N_,
  addIssueToContext: ue,
  ParseStatus: qt,
  INVALID: De,
  DIRTY: Xu,
  OK: tn,
  isAborted: ih,
  isDirty: oh,
  isValid: ei,
  isAsync: Bs,
  get util() {
    return Ye;
  },
  get objectUtil() {
    return ah;
  },
  ZodParsedType: fe,
  getParsedType: Mr,
  ZodType: $e,
  datetimeRegex: e0,
  ZodString: zn,
  ZodNumber: ba,
  ZodBigInt: wa,
  ZodBoolean: Us,
  ZodDate: ti,
  ZodSymbol: Qu,
  ZodUndefined: Zs,
  ZodNull: qs,
  ZodAny: uo,
  ZodUnknown: Qa,
  ZodNever: $r,
  ZodVoid: ec,
  ZodArray: Bn,
  ZodObject: ht,
  ZodUnion: Ys,
  ZodDiscriminatedUnion: yc,
  ZodIntersection: Ks,
  ZodTuple: sr,
  ZodRecord: Hs,
  ZodMap: tc,
  ZodSet: ni,
  ZodFunction: oo,
  ZodLazy: Gs,
  ZodLiteral: Xs,
  ZodEnum: ka,
  ZodNativeEnum: Js,
  ZodPromise: co,
  ZodEffects: Un,
  ZodTransformer: Un,
  ZodOptional: rr,
  ZodNullable: xa,
  ZodDefault: Qs,
  ZodCatch: el,
  ZodNaN: nc,
  BRAND: K_,
  ZodBranded: Dh,
  ZodPipeline: hl,
  ZodReadonly: tl,
  custom: n0,
  Schema: $e,
  ZodSchema: $e,
  late: H_,
  get ZodFirstPartyTypeKind() {
    return Ce;
  },
  coerce: PC,
  any: rC,
  array: sC,
  bigint: J_,
  boolean: i0,
  date: Q_,
  discriminatedUnion: dC,
  effect: iv,
  enum: wC,
  function: yC,
  instanceof: G_,
  intersection: fC,
  lazy: vC,
  literal: bC,
  map: mC,
  nan: X_,
  nativeEnum: kC,
  never: iC,
  null: nC,
  nullable: _C,
  number: a0,
  object: lC,
  oboolean: DC,
  onumber: EC,
  optional: SC,
  ostring: OC,
  pipeline: NC,
  preprocess: CC,
  promise: xC,
  record: pC,
  set: gC,
  strictObject: uC,
  string: r0,
  symbol: eC,
  transformer: iv,
  tuple: hC,
  undefined: tC,
  union: cC,
  unknown: aC,
  void: oC,
  NEVER: MC,
  ZodIssueCode: X,
  quotelessJson: __,
  ZodError: kn,
});
const TC = ne.object({
  email: ne
    .string()
    .min(1, 'Email is required')
    .superRefine((t, n) => {
      t !== t.trim() &&
        n.addIssue({
          code: ne.ZodIssueCode.custom,
          message: 'Email must not have leading or trailing spaces',
        }),
        t.includes('@') ||
          n.addIssue({ code: ne.ZodIssueCode.custom, message: "Email must contain an '@' symbol" }),
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t) ||
          n.addIssue({
            code: ne.ZodIssueCode.custom,
            message: 'Email must contain a domain name (e.g., example.com)',
          });
    }),
  password: ne
    .string()
    .regex(/\d+/gi, { message: 'Password must contain at least one digit' })
    .regex(/[A-ZА-Я]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-zа-я]/, { message: 'Password must contain at least one lowercase letter' })
    .min(8, { message: 'Password must be longer than 8 characters' })
    .refine((t) => !/\s/.test(t), { message: 'Password must not contain spaces' }),
});
function RC(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    'customer' in t &&
    typeof t.customer == 'object' &&
    t.customer !== null &&
    'id' in t.customer &&
    typeof t.customer.id == 'string' &&
    'email' in t.customer &&
    typeof t.customer.email == 'string'
  );
}
function jC(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    'access_token' in t &&
    typeof t.access_token == 'string' &&
    'expires_in' in t &&
    typeof t.expires_in == 'number' &&
    'refresh_token' in t &&
    typeof t.refresh_token == 'string' &&
    'scope' in t &&
    typeof t.scope == 'string' &&
    'token_type' in t &&
    typeof t.token_type == 'string'
  );
}
async function LC() {
  const t = `${Du.clientId}:${Du.secretId}`,
    n = btoa(t);
  try {
    const a = await fetch(`https://auth.${Du.region}.commercetools.com/oauth/token`, {
      method: 'POST',
      headers: { Authorization: `Basic ${n}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&scope=manage_customers:${Du.projectKey}`,
    });
    if (!a.ok) {
      const s = await a.json().catch(() => ({}));
      throw new Error(
        typeof s == 'object' && s !== null && 'message' in s && typeof s.message == 'string'
          ? s.message
          : 'Login failed'
      );
    }
    const i = await a.json();
    if (!i || typeof i != 'object' || !('access_token' in i) || typeof i.access_token != 'string')
      throw new Error('Unknown error occurred during getting token');
    return i.access_token;
  } catch (a) {
    const i = a instanceof Error ? a.message : 'Unknown error occurred';
    throw new Error(i);
  }
}
const Du = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function FC(t, n) {
  const a = `${t.clientId}:${t.secretId}`,
    i = btoa(a);
  try {
    const s = await fetch(
      `https://auth.${t.region}.commercetools.com/oauth/${t.projectKey}/customers/token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${i}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: n.email,
          password: n.password,
          scope: `manage_customers:${t.projectKey}`,
        }).toString(),
      }
    );
    if (!s.ok) {
      const d = await s.json().catch(() => ({}));
      throw new Error(
        typeof d == 'object' && d !== null && 'message' in d && typeof d.message == 'string'
          ? d.message
          : 'Login failed'
      );
    }
    const u = await s.json();
    if (!jC(u)) throw new Error('Unknown error occurred during getting token');
    return u;
  } catch (s) {
    const u = s instanceof Error ? s.message : 'Unknown error occurred';
    throw new Error(u);
  }
}
const Bf = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function AC(t) {
  const n = await LC();
  if (!n) throw new Error('Failed to get login token');
  try {
    const a = await fetch(`https://api.${Bf.region}.commercetools.com/${Bf.projectKey}/login`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${n}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(t),
    });
    if (!a.ok) {
      const u = await a.json();
      throw new Error(
        typeof u == 'object' && u !== null && 'message' in u && typeof u.message == 'string'
          ? u.message
          : 'Login failed'
      );
    }
    const i = await a.json();
    if (!RC(i)) throw new Error('Invalid login response format');
    const s = await FC(Bf, t);
    return (
      localStorage.setItem('firstName', i.customer.firstName),
      localStorage.setItem('refreshToken', s.refresh_token),
      i
    );
  } catch (a) {
    const i = a instanceof Error ? a.message : 'Unknown error occurred';
    throw new Error(i);
  }
}
function $C() {
  var t, n;
  const {
      register: a,
      handleSubmit: i,
      formState: { errors: s, isValid: u },
      setError: d,
    } = Yb({ mode: 'onChange', resolver: Hb(TC) }),
    h = nn(),
    p = async (m) => {
      try {
        'customer' in (await AC(m))
          ? await h('/')
          : d('root', { type: 'manual', message: 'Invalid email or password' });
      } catch (g) {
        const b = g instanceof Error ? g.message : 'Something went wrong';
        d('root', { type: 'manual', message: b });
      }
    };
  return k.jsxs('section', {
    className:
      'w-[35%] p-[10px] font-main rounded-[20px] text-xl min-w-[300px] !text-goldenrod max-[400px]:p-[3px], max-[400px]:min-w-[250px]',
    children: [
      k.jsxs('form', {
        className: 'flex flex-col gap-6',
        onSubmit: (m) => {
          m.preventDefault(), i(p)(m);
        },
        children: [
          k.jsx('h1', {
            className: 'font-additional self-center text-3xl font-bold',
            children: ' Login ',
          }),
          k.jsx(By, {
            register: a('email'),
            errorMessage: (t = s.email) == null ? void 0 : t.message,
            type: 'text',
            label: 'Email',
            placeholder: 'Enter you email',
            required: !0,
          }),
          k.jsx(By, {
            register: a('password'),
            errorMessage: (n = s.password) == null ? void 0 : n.message,
            type: 'password',
            label: 'Password',
            placeholder: 'Enter you password',
            required: !0,
          }),
          k.jsx('button', {
            type: 'submit',
            className:
              'w-[100%] m-auto !border-[2px] rounded-lg border-goldenrod !bg-goldenrod text-white hover:!bg-goldenrod/70 hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-olive focus:!outline-0',
            disabled: !u,
            children: 'Login',
          }),
        ],
      }),
      s.root && k.jsx('p', { className: 'text-red-500 text-xl mt-2', children: s.root.message }),
      k.jsxs('div', {
        children: [
          k.jsx('p', { children: "Don't have an account?" }),
          k.jsx('a', {
            onClick: () => void h('/registration'),
            className: '!text-olive hover:!text-goldenrod cursor-pointer',
            children: 'Sign Up!',
          }),
        ],
      }),
    ],
  });
}
function IC() {
  const t = nn(),
    n = !!localStorage.getItem('firstName');
  return (
    T.useEffect(() => {
      n && t('/', { replace: !0 });
    }, [n, t]),
    k.jsx('section', {
      className: 'w-screen flex justify-center max-w-[1440px] m-auto items-center mw',
      children: k.jsx($C, {}),
    })
  );
}
const o0 = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Virgin Islands', code: 'VG' },
  { name: 'Brunei', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cape Verde', code: 'CV' },
  { name: 'Cayman Islands', code: 'KY' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Columbia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Cook Islands', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Curacao', code: 'CW' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Democratic Republic of the Congo', code: 'CD' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'East Timor', code: 'TL' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Faroe Islands', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Ivory Coast', code: 'CI' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'Kosovo', code: 'XK' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Laos', code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macau', code: 'MO' },
  { name: 'Macedonia', code: 'MK' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia', code: 'FM' },
  { name: 'Moldova', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montenegro', code: 'ME' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Netherlands Antilles', code: 'AN' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'North Korea', code: 'KP' },
  { name: 'Northern Mariana Islands', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palestine', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Republic of the Congo', code: 'CG' },
  { name: 'Reunion', code: 'RE' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russia', code: 'RU' },
  { name: 'Rwanda', code: 'RW' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Martin', code: 'MF' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia', code: 'RS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Sint Maarten', code: 'SX' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Korea', code: 'KR' },
  { name: 'South Sudan', code: 'SS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Swaziland', code: 'SZ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syria', code: 'SY' },
  { name: 'Taiwan', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'U.S. Virgin Islands', code: 'VI' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Vietnam', code: 'VN' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' },
];
function WC({ error: t, id: n, register: a }) {
  return k.jsxs('div', {
    className: 'relative flex flex-wrap w-[300px]',
    children: [
      k.jsx('label', {
        className: 'p-1 capitalize text-goldenrod font-medium w-[300px] font-main',
        htmlFor: n,
        children: 'Country',
      }),
      k.jsxs('select', {
        className:
          'capitalize p-1 bg-khaki rounded-lg text-olive min-w-[300px] inline-block hover:cursor-pointer',
        defaultValue: '',
        id: n,
        name: n,
        ...a,
        children: [
          k.jsx('option', { value: '', disabled: !0, hidden: !0, children: 'Select a country' }),
          o0.map(({ code: i, name: s }) =>
            k.jsx('option', { value: i, className: 'text-olive', children: s }, i)
          ),
        ],
      }),
      k.jsx('p', {
        className: 'text-sm text-coral h-5 p-1 w-[300px] break-words whitespace-normal',
        children: t ?? ' ',
      }),
    ],
  });
}
const s0 = 6048e5,
  zC = 864e5,
  ov = Symbol.for('constructDateFrom');
function Mt(t, n) {
  return typeof t == 'function'
    ? t(n)
    : t && typeof t == 'object' && ov in t
      ? t[ov](n)
      : t instanceof Date
        ? new t.constructor(n)
        : new Date(n);
}
function st(t, n) {
  return Mt(n || t, t);
}
function l0(t, n, a) {
  const i = st(t, void 0);
  return isNaN(n) ? Mt(t, NaN) : (n && i.setDate(i.getDate() + n), i);
}
function u0(t, n, a) {
  const i = st(t, void 0);
  if (isNaN(n)) return Mt(t, NaN);
  if (!n) return i;
  const s = i.getDate(),
    u = Mt(t, i.getTime());
  u.setMonth(i.getMonth() + n + 1, 0);
  const d = u.getDate();
  return s >= d ? u : (i.setFullYear(u.getFullYear(), u.getMonth(), s), i);
}
let VC = {};
function pl() {
  return VC;
}
function fo(t, n) {
  var a, i, s, u;
  const d = pl(),
    h =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((i = (a = n == null ? void 0 : n.locale) == null ? void 0 : a.options) == null
        ? void 0
        : i.weekStartsOn) ??
      d.weekStartsOn ??
      ((u = (s = d.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ??
      0,
    p = st(t, n == null ? void 0 : n.in),
    m = p.getDay(),
    g = (m < h ? 7 : 0) + m - h;
  return p.setDate(p.getDate() - g), p.setHours(0, 0, 0, 0), p;
}
function nl(t, n) {
  return fo(t, { ...n, weekStartsOn: 1 });
}
function c0(t, n) {
  const a = st(t, void 0),
    i = a.getFullYear(),
    s = Mt(a, 0);
  s.setFullYear(i + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const u = nl(s),
    d = Mt(a, 0);
  d.setFullYear(i, 0, 4), d.setHours(0, 0, 0, 0);
  const h = nl(d);
  return a.getTime() >= u.getTime() ? i + 1 : a.getTime() >= h.getTime() ? i : i - 1;
}
function sv(t) {
  const n = st(t),
    a = new Date(
      Date.UTC(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        n.getMinutes(),
        n.getSeconds(),
        n.getMilliseconds()
      )
    );
  return a.setUTCFullYear(n.getFullYear()), +t - +a;
}
function go(t, ...n) {
  const a = Mt.bind(
    null,
    n.find((i) => typeof i == 'object')
  );
  return n.map(a);
}
function rl(t, n) {
  const a = st(t, void 0);
  return a.setHours(0, 0, 0, 0), a;
}
function d0(t, n, a) {
  const [i, s] = go(void 0, t, n),
    u = rl(i),
    d = rl(s),
    h = +u - sv(u),
    p = +d - sv(d);
  return Math.round((h - p) / zC);
}
function BC(t, n) {
  const a = c0(t),
    i = Mt(t, 0);
  return i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), nl(i);
}
function UC(t, n, a) {
  return l0(t, n * 7);
}
function ZC(t, n, a) {
  return u0(t, n * 12);
}
function qC(t, n) {
  let a, i;
  return (
    t.forEach((s) => {
      !i && typeof s == 'object' && (i = Mt.bind(null, s));
      const u = st(s, i);
      (!a || a < u || isNaN(+u)) && (a = u);
    }),
    Mt(i, a || NaN)
  );
}
function YC(t, n) {
  let a, i;
  return (
    t.forEach((s) => {
      !i && typeof s == 'object' && (i = Mt.bind(null, s));
      const u = st(s, i);
      (!a || a > u || isNaN(+u)) && (a = u);
    }),
    Mt(i, a || NaN)
  );
}
function KC(t, n, a) {
  const [i, s] = go(void 0, t, n);
  return +rl(i) == +rl(s);
}
function f0(t) {
  return (
    t instanceof Date ||
    (typeof t == 'object' && Object.prototype.toString.call(t) === '[object Date]')
  );
}
function HC(t) {
  return !((!f0(t) && typeof t != 'number') || isNaN(+st(t)));
}
function GC(t, n, a) {
  const [i, s] = go(void 0, t, n),
    u = i.getFullYear() - s.getFullYear(),
    d = i.getMonth() - s.getMonth();
  return u * 12 + d;
}
function XC(t, n) {
  const a = st(t, void 0),
    i = a.getMonth();
  return a.setFullYear(a.getFullYear(), i + 1, 0), a.setHours(23, 59, 59, 999), a;
}
function JC(t, n) {
  const [a, i] = go(t, n.start, n.end);
  return { start: a, end: i };
}
function QC(t, n) {
  const { start: a, end: i } = JC(void 0, t);
  let s = +a > +i;
  const u = s ? +a : +i,
    d = s ? i : a;
  d.setHours(0, 0, 0, 0), d.setDate(1);
  let h = 1;
  const p = [];
  for (; +d <= u; ) p.push(Mt(a, d)), d.setMonth(d.getMonth() + h);
  return s ? p.reverse() : p;
}
function e2(t, n) {
  const a = st(t, void 0);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function t2(t, n) {
  const a = st(t, void 0),
    i = a.getFullYear();
  return a.setFullYear(i + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function h0(t, n) {
  const a = st(t, void 0);
  return a.setFullYear(a.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function p0(t, n) {
  var a, i, s, u;
  const d = pl(),
    h =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((i = (a = n == null ? void 0 : n.locale) == null ? void 0 : a.options) == null
        ? void 0
        : i.weekStartsOn) ??
      d.weekStartsOn ??
      ((u = (s = d.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ??
      0,
    p = st(t, n == null ? void 0 : n.in),
    m = p.getDay(),
    g = (m < h ? -7 : 0) + 6 - (m - h);
  return p.setDate(p.getDate() + g), p.setHours(23, 59, 59, 999), p;
}
function n2(t, n) {
  return p0(t, { ...n, weekStartsOn: 1 });
}
const r2 = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  a2 = (t, n, a) => {
    let i;
    const s = r2[t];
    return (
      typeof s == 'string'
        ? (i = s)
        : n === 1
          ? (i = s.one)
          : (i = s.other.replace('{{count}}', n.toString())),
      a != null && a.addSuffix ? (a.comparison && a.comparison > 0 ? 'in ' + i : i + ' ago') : i
    );
  };
function Uf(t) {
  return (n = {}) => {
    const a = n.width ? String(n.width) : t.defaultWidth;
    return t.formats[a] || t.formats[t.defaultWidth];
  };
}
const i2 = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  o2 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  s2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  l2 = {
    date: Uf({ formats: i2, defaultWidth: 'full' }),
    time: Uf({ formats: o2, defaultWidth: 'full' }),
    dateTime: Uf({ formats: s2, defaultWidth: 'full' }),
  },
  u2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  c2 = (t, n, a, i) => u2[t];
function bs(t) {
  return (n, a) => {
    const i = a != null && a.context ? String(a.context) : 'standalone';
    let s;
    if (i === 'formatting' && t.formattingValues) {
      const d = t.defaultFormattingWidth || t.defaultWidth,
        h = a != null && a.width ? String(a.width) : d;
      s = t.formattingValues[h] || t.formattingValues[d];
    } else {
      const d = t.defaultWidth,
        h = a != null && a.width ? String(a.width) : t.defaultWidth;
      s = t.values[h] || t.values[d];
    }
    const u = t.argumentCallback ? t.argumentCallback(n) : n;
    return s[u];
  };
}
const d2 = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  f2 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  h2 = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  p2 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  m2 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  g2 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  y2 = (t, n) => {
    const a = Number(t),
      i = a % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return a + 'st';
        case 2:
          return a + 'nd';
        case 3:
          return a + 'rd';
      }
    return a + 'th';
  },
  v2 = {
    ordinalNumber: y2,
    era: bs({ values: d2, defaultWidth: 'wide' }),
    quarter: bs({ values: f2, defaultWidth: 'wide', argumentCallback: (t) => t - 1 }),
    month: bs({ values: h2, defaultWidth: 'wide' }),
    day: bs({ values: p2, defaultWidth: 'wide' }),
    dayPeriod: bs({
      values: m2,
      defaultWidth: 'wide',
      formattingValues: g2,
      defaultFormattingWidth: 'wide',
    }),
  };
function ws(t) {
  return (n, a = {}) => {
    const i = a.width,
      s = (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
      u = n.match(s);
    if (!u) return null;
    const d = u[0],
      h = (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth],
      p = Array.isArray(h) ? w2(h, (b) => b.test(d)) : b2(h, (b) => b.test(d));
    let m;
    (m = t.valueCallback ? t.valueCallback(p) : p), (m = a.valueCallback ? a.valueCallback(m) : m);
    const g = n.slice(d.length);
    return { value: m, rest: g };
  };
}
function b2(t, n) {
  for (const a in t) if (Object.prototype.hasOwnProperty.call(t, a) && n(t[a])) return a;
}
function w2(t, n) {
  for (let a = 0; a < t.length; a++) if (n(t[a])) return a;
}
function k2(t) {
  return (n, a = {}) => {
    const i = n.match(t.matchPattern);
    if (!i) return null;
    const s = i[0],
      u = n.match(t.parsePattern);
    if (!u) return null;
    let d = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    d = a.valueCallback ? a.valueCallback(d) : d;
    const h = n.slice(s.length);
    return { value: d, rest: h };
  };
}
const x2 = /^(\d+)(th|st|nd|rd)?/i,
  S2 = /\d+/i,
  _2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  C2 = { any: [/^b/i, /^(a|c)/i] },
  N2 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  O2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  E2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  D2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
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
      /^d/i,
    ],
  },
  P2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  M2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  T2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  R2 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  j2 = {
    ordinalNumber: k2({
      matchPattern: x2,
      parsePattern: S2,
      valueCallback: (t) => parseInt(t, 10),
    }),
    era: ws({
      matchPatterns: _2,
      defaultMatchWidth: 'wide',
      parsePatterns: C2,
      defaultParseWidth: 'any',
    }),
    quarter: ws({
      matchPatterns: N2,
      defaultMatchWidth: 'wide',
      parsePatterns: O2,
      defaultParseWidth: 'any',
      valueCallback: (t) => t + 1,
    }),
    month: ws({
      matchPatterns: E2,
      defaultMatchWidth: 'wide',
      parsePatterns: D2,
      defaultParseWidth: 'any',
    }),
    day: ws({
      matchPatterns: P2,
      defaultMatchWidth: 'wide',
      parsePatterns: M2,
      defaultParseWidth: 'any',
    }),
    dayPeriod: ws({
      matchPatterns: T2,
      defaultMatchWidth: 'any',
      parsePatterns: R2,
      defaultParseWidth: 'any',
    }),
  },
  Ph = {
    code: 'en-US',
    formatDistance: a2,
    formatLong: l2,
    formatRelative: c2,
    localize: v2,
    match: j2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function L2(t, n) {
  const a = st(t, void 0);
  return d0(a, h0(a)) + 1;
}
function m0(t, n) {
  const a = st(t, void 0),
    i = +nl(a) - +BC(a);
  return Math.round(i / s0) + 1;
}
function g0(t, n) {
  var a, i, s, u;
  const d = st(t, n == null ? void 0 : n.in),
    h = d.getFullYear(),
    p = pl(),
    m =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((i = (a = n == null ? void 0 : n.locale) == null ? void 0 : a.options) == null
        ? void 0
        : i.firstWeekContainsDate) ??
      p.firstWeekContainsDate ??
      ((u = (s = p.locale) == null ? void 0 : s.options) == null
        ? void 0
        : u.firstWeekContainsDate) ??
      1,
    g = Mt((n == null ? void 0 : n.in) || t, 0);
  g.setFullYear(h + 1, 0, m), g.setHours(0, 0, 0, 0);
  const b = fo(g, n),
    v = Mt((n == null ? void 0 : n.in) || t, 0);
  v.setFullYear(h, 0, m), v.setHours(0, 0, 0, 0);
  const E = fo(v, n);
  return +d >= +b ? h + 1 : +d >= +E ? h : h - 1;
}
function F2(t, n) {
  var a, i, s, u;
  const d = pl(),
    h =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((i = (a = n == null ? void 0 : n.locale) == null ? void 0 : a.options) == null
        ? void 0
        : i.firstWeekContainsDate) ??
      d.firstWeekContainsDate ??
      ((u = (s = d.locale) == null ? void 0 : s.options) == null
        ? void 0
        : u.firstWeekContainsDate) ??
      1,
    p = g0(t, n),
    m = Mt((n == null ? void 0 : n.in) || t, 0);
  return m.setFullYear(p, 0, h), m.setHours(0, 0, 0, 0), fo(m, n);
}
function y0(t, n) {
  const a = st(t, n == null ? void 0 : n.in),
    i = +fo(a, n) - +F2(a, n);
  return Math.round(i / s0) + 1;
}
function nt(t, n) {
  const a = t < 0 ? '-' : '',
    i = Math.abs(t).toString().padStart(n, '0');
  return a + i;
}
const pa = {
    y(t, n) {
      const a = t.getFullYear(),
        i = a > 0 ? a : 1 - a;
      return nt(n === 'yy' ? i % 100 : i, n.length);
    },
    M(t, n) {
      const a = t.getMonth();
      return n === 'M' ? String(a + 1) : nt(a + 1, 2);
    },
    d(t, n) {
      return nt(t.getDate(), n.length);
    },
    a(t, n) {
      const a = t.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (n) {
        case 'a':
        case 'aa':
          return a.toUpperCase();
        case 'aaa':
          return a;
        case 'aaaaa':
          return a[0];
        case 'aaaa':
        default:
          return a === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(t, n) {
      return nt(t.getHours() % 12 || 12, n.length);
    },
    H(t, n) {
      return nt(t.getHours(), n.length);
    },
    m(t, n) {
      return nt(t.getMinutes(), n.length);
    },
    s(t, n) {
      return nt(t.getSeconds(), n.length);
    },
    S(t, n) {
      const a = n.length,
        i = t.getMilliseconds(),
        s = Math.trunc(i * Math.pow(10, a - 3));
      return nt(s, n.length);
    },
  },
  Xi = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  lv = {
    G: function (t, n, a) {
      const i = t.getFullYear() > 0 ? 1 : 0;
      switch (n) {
        case 'G':
        case 'GG':
        case 'GGG':
          return a.era(i, { width: 'abbreviated' });
        case 'GGGGG':
          return a.era(i, { width: 'narrow' });
        case 'GGGG':
        default:
          return a.era(i, { width: 'wide' });
      }
    },
    y: function (t, n, a) {
      if (n === 'yo') {
        const i = t.getFullYear(),
          s = i > 0 ? i : 1 - i;
        return a.ordinalNumber(s, { unit: 'year' });
      }
      return pa.y(t, n);
    },
    Y: function (t, n, a, i) {
      const s = g0(t, i),
        u = s > 0 ? s : 1 - s;
      if (n === 'YY') {
        const d = u % 100;
        return nt(d, 2);
      }
      return n === 'Yo' ? a.ordinalNumber(u, { unit: 'year' }) : nt(u, n.length);
    },
    R: function (t, n) {
      const a = c0(t);
      return nt(a, n.length);
    },
    u: function (t, n) {
      const a = t.getFullYear();
      return nt(a, n.length);
    },
    Q: function (t, n, a) {
      const i = Math.ceil((t.getMonth() + 1) / 3);
      switch (n) {
        case 'Q':
          return String(i);
        case 'QQ':
          return nt(i, 2);
        case 'Qo':
          return a.ordinalNumber(i, { unit: 'quarter' });
        case 'QQQ':
          return a.quarter(i, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return a.quarter(i, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return a.quarter(i, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (t, n, a) {
      const i = Math.ceil((t.getMonth() + 1) / 3);
      switch (n) {
        case 'q':
          return String(i);
        case 'qq':
          return nt(i, 2);
        case 'qo':
          return a.ordinalNumber(i, { unit: 'quarter' });
        case 'qqq':
          return a.quarter(i, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return a.quarter(i, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return a.quarter(i, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (t, n, a) {
      const i = t.getMonth();
      switch (n) {
        case 'M':
        case 'MM':
          return pa.M(t, n);
        case 'Mo':
          return a.ordinalNumber(i + 1, { unit: 'month' });
        case 'MMM':
          return a.month(i, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return a.month(i, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return a.month(i, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (t, n, a) {
      const i = t.getMonth();
      switch (n) {
        case 'L':
          return String(i + 1);
        case 'LL':
          return nt(i + 1, 2);
        case 'Lo':
          return a.ordinalNumber(i + 1, { unit: 'month' });
        case 'LLL':
          return a.month(i, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return a.month(i, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return a.month(i, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (t, n, a, i) {
      const s = y0(t, i);
      return n === 'wo' ? a.ordinalNumber(s, { unit: 'week' }) : nt(s, n.length);
    },
    I: function (t, n, a) {
      const i = m0(t);
      return n === 'Io' ? a.ordinalNumber(i, { unit: 'week' }) : nt(i, n.length);
    },
    d: function (t, n, a) {
      return n === 'do' ? a.ordinalNumber(t.getDate(), { unit: 'date' }) : pa.d(t, n);
    },
    D: function (t, n, a) {
      const i = L2(t);
      return n === 'Do' ? a.ordinalNumber(i, { unit: 'dayOfYear' }) : nt(i, n.length);
    },
    E: function (t, n, a) {
      const i = t.getDay();
      switch (n) {
        case 'E':
        case 'EE':
        case 'EEE':
          return a.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return a.day(i, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return a.day(i, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return a.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (t, n, a, i) {
      const s = t.getDay(),
        u = (s - i.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case 'e':
          return String(u);
        case 'ee':
          return nt(u, 2);
        case 'eo':
          return a.ordinalNumber(u, { unit: 'day' });
        case 'eee':
          return a.day(s, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return a.day(s, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return a.day(s, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return a.day(s, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (t, n, a, i) {
      const s = t.getDay(),
        u = (s - i.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case 'c':
          return String(u);
        case 'cc':
          return nt(u, n.length);
        case 'co':
          return a.ordinalNumber(u, { unit: 'day' });
        case 'ccc':
          return a.day(s, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return a.day(s, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return a.day(s, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return a.day(s, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (t, n, a) {
      const i = t.getDay(),
        s = i === 0 ? 7 : i;
      switch (n) {
        case 'i':
          return String(s);
        case 'ii':
          return nt(s, n.length);
        case 'io':
          return a.ordinalNumber(s, { unit: 'day' });
        case 'iii':
          return a.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return a.day(i, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return a.day(i, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return a.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (t, n, a) {
      const i = t.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (n) {
        case 'a':
        case 'aa':
          return a.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return a.dayPeriod(i, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return a.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return a.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (t, n, a) {
      const i = t.getHours();
      let s;
      switch (
        (i === 12 ? (s = Xi.noon) : i === 0 ? (s = Xi.midnight) : (s = i / 12 >= 1 ? 'pm' : 'am'),
        n)
      ) {
        case 'b':
        case 'bb':
          return a.dayPeriod(s, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return a.dayPeriod(s, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return a.dayPeriod(s, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return a.dayPeriod(s, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (t, n, a) {
      const i = t.getHours();
      let s;
      switch (
        (i >= 17
          ? (s = Xi.evening)
          : i >= 12
            ? (s = Xi.afternoon)
            : i >= 4
              ? (s = Xi.morning)
              : (s = Xi.night),
        n)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return a.dayPeriod(s, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return a.dayPeriod(s, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return a.dayPeriod(s, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (t, n, a) {
      if (n === 'ho') {
        let i = t.getHours() % 12;
        return i === 0 && (i = 12), a.ordinalNumber(i, { unit: 'hour' });
      }
      return pa.h(t, n);
    },
    H: function (t, n, a) {
      return n === 'Ho' ? a.ordinalNumber(t.getHours(), { unit: 'hour' }) : pa.H(t, n);
    },
    K: function (t, n, a) {
      const i = t.getHours() % 12;
      return n === 'Ko' ? a.ordinalNumber(i, { unit: 'hour' }) : nt(i, n.length);
    },
    k: function (t, n, a) {
      let i = t.getHours();
      return (
        i === 0 && (i = 24), n === 'ko' ? a.ordinalNumber(i, { unit: 'hour' }) : nt(i, n.length)
      );
    },
    m: function (t, n, a) {
      return n === 'mo' ? a.ordinalNumber(t.getMinutes(), { unit: 'minute' }) : pa.m(t, n);
    },
    s: function (t, n, a) {
      return n === 'so' ? a.ordinalNumber(t.getSeconds(), { unit: 'second' }) : pa.s(t, n);
    },
    S: function (t, n) {
      return pa.S(t, n);
    },
    X: function (t, n, a) {
      const i = t.getTimezoneOffset();
      if (i === 0) return 'Z';
      switch (n) {
        case 'X':
          return cv(i);
        case 'XXXX':
        case 'XX':
          return Ga(i);
        case 'XXXXX':
        case 'XXX':
        default:
          return Ga(i, ':');
      }
    },
    x: function (t, n, a) {
      const i = t.getTimezoneOffset();
      switch (n) {
        case 'x':
          return cv(i);
        case 'xxxx':
        case 'xx':
          return Ga(i);
        case 'xxxxx':
        case 'xxx':
        default:
          return Ga(i, ':');
      }
    },
    O: function (t, n, a) {
      const i = t.getTimezoneOffset();
      switch (n) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + uv(i, ':');
        case 'OOOO':
        default:
          return 'GMT' + Ga(i, ':');
      }
    },
    z: function (t, n, a) {
      const i = t.getTimezoneOffset();
      switch (n) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + uv(i, ':');
        case 'zzzz':
        default:
          return 'GMT' + Ga(i, ':');
      }
    },
    t: function (t, n, a) {
      const i = Math.trunc(+t / 1e3);
      return nt(i, n.length);
    },
    T: function (t, n, a) {
      return nt(+t, n.length);
    },
  };
function uv(t, n = '') {
  const a = t > 0 ? '-' : '+',
    i = Math.abs(t),
    s = Math.trunc(i / 60),
    u = i % 60;
  return u === 0 ? a + String(s) : a + String(s) + n + nt(u, 2);
}
function cv(t, n) {
  return t % 60 === 0 ? (t > 0 ? '-' : '+') + nt(Math.abs(t) / 60, 2) : Ga(t, n);
}
function Ga(t, n = '') {
  const a = t > 0 ? '-' : '+',
    i = Math.abs(t),
    s = nt(Math.trunc(i / 60), 2),
    u = nt(i % 60, 2);
  return a + s + n + u;
}
const dv = (t, n) => {
    switch (t) {
      case 'P':
        return n.date({ width: 'short' });
      case 'PP':
        return n.date({ width: 'medium' });
      case 'PPP':
        return n.date({ width: 'long' });
      case 'PPPP':
      default:
        return n.date({ width: 'full' });
    }
  },
  v0 = (t, n) => {
    switch (t) {
      case 'p':
        return n.time({ width: 'short' });
      case 'pp':
        return n.time({ width: 'medium' });
      case 'ppp':
        return n.time({ width: 'long' });
      case 'pppp':
      default:
        return n.time({ width: 'full' });
    }
  },
  A2 = (t, n) => {
    const a = t.match(/(P+)(p+)?/) || [],
      i = a[1],
      s = a[2];
    if (!s) return dv(t, n);
    let u;
    switch (i) {
      case 'P':
        u = n.dateTime({ width: 'short' });
        break;
      case 'PP':
        u = n.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        u = n.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        u = n.dateTime({ width: 'full' });
        break;
    }
    return u.replace('{{date}}', dv(i, n)).replace('{{time}}', v0(s, n));
  },
  $2 = { p: v0, P: A2 },
  I2 = /^D+$/,
  W2 = /^Y+$/,
  z2 = ['D', 'DD', 'YY', 'YYYY'];
function V2(t) {
  return I2.test(t);
}
function B2(t) {
  return W2.test(t);
}
function U2(t, n, a) {
  const i = Z2(t, n, a);
  if ((console.warn(i), z2.includes(t))) throw new RangeError(i);
}
function Z2(t, n, a) {
  const i = t[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${i} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const q2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Y2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  K2 = /^'([^]*?)'?$/,
  H2 = /''/g,
  G2 = /[a-zA-Z]/;
function Bu(t, n, a) {
  var i, s, u, d, h, p, m, g;
  const b = pl(),
    v = (a == null ? void 0 : a.locale) ?? b.locale ?? Ph,
    E =
      (a == null ? void 0 : a.firstWeekContainsDate) ??
      ((s = (i = a == null ? void 0 : a.locale) == null ? void 0 : i.options) == null
        ? void 0
        : s.firstWeekContainsDate) ??
      b.firstWeekContainsDate ??
      ((d = (u = b.locale) == null ? void 0 : u.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    x =
      (a == null ? void 0 : a.weekStartsOn) ??
      ((p = (h = a == null ? void 0 : a.locale) == null ? void 0 : h.options) == null
        ? void 0
        : p.weekStartsOn) ??
      b.weekStartsOn ??
      ((g = (m = b.locale) == null ? void 0 : m.options) == null ? void 0 : g.weekStartsOn) ??
      0,
    N = st(t, a == null ? void 0 : a.in);
  if (!HC(N)) throw new RangeError('Invalid time value');
  let D = n
    .match(Y2)
    .map((_) => {
      const M = _[0];
      if (M === 'p' || M === 'P') {
        const V = $2[M];
        return V(_, v.formatLong);
      }
      return _;
    })
    .join('')
    .match(q2)
    .map((_) => {
      if (_ === "''") return { isToken: !1, value: "'" };
      const M = _[0];
      if (M === "'") return { isToken: !1, value: X2(_) };
      if (lv[M]) return { isToken: !0, value: _ };
      if (M.match(G2))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + M + '`'
        );
      return { isToken: !1, value: _ };
    });
  v.localize.preprocessor && (D = v.localize.preprocessor(N, D));
  const j = { firstWeekContainsDate: E, weekStartsOn: x, locale: v };
  return D.map((_) => {
    if (!_.isToken) return _.value;
    const M = _.value;
    ((!(a != null && a.useAdditionalWeekYearTokens) && B2(M)) ||
      (!(a != null && a.useAdditionalDayOfYearTokens) && V2(M))) &&
      U2(M, n, String(t));
    const V = lv[M[0]];
    return V(N, M, v.localize, j);
  }).join('');
}
function X2(t) {
  const n = t.match(K2);
  return n ? n[1].replace(H2, "'") : t;
}
function J2(t, n) {
  const a = st(t, void 0),
    i = a.getFullYear(),
    s = a.getMonth(),
    u = Mt(a, 0);
  return u.setFullYear(i, s + 1, 0), u.setHours(0, 0, 0, 0), u.getDate();
}
function Q2(t, n) {
  return st(t, n == null ? void 0 : n.in).getMonth();
}
function eN(t, n) {
  return st(t, n == null ? void 0 : n.in).getFullYear();
}
function tN(t, n) {
  return +st(t) > +st(n);
}
function nN(t, n) {
  return +st(t) < +st(n);
}
function rN(t, n, a) {
  const [i, s] = go(void 0, t, n);
  return i.getFullYear() === s.getFullYear() && i.getMonth() === s.getMonth();
}
function aN(t, n, a) {
  const [i, s] = go(void 0, t, n);
  return i.getFullYear() === s.getFullYear();
}
function iN(t, n, a) {
  const i = st(t, void 0),
    s = i.getFullYear(),
    u = i.getDate(),
    d = Mt(t, 0);
  d.setFullYear(s, n, 15), d.setHours(0, 0, 0, 0);
  const h = J2(d);
  return i.setMonth(n, Math.min(u, h)), i;
}
function oN(t, n, a) {
  const i = st(t, void 0);
  return isNaN(+i) ? Mt(t, NaN) : (i.setFullYear(n), i);
}
var _e;
(function (t) {
  (t.Root = 'root'),
    (t.Chevron = 'chevron'),
    (t.Day = 'day'),
    (t.DayButton = 'day_button'),
    (t.CaptionLabel = 'caption_label'),
    (t.Dropdowns = 'dropdowns'),
    (t.Dropdown = 'dropdown'),
    (t.DropdownRoot = 'dropdown_root'),
    (t.Footer = 'footer'),
    (t.MonthGrid = 'month_grid'),
    (t.MonthCaption = 'month_caption'),
    (t.MonthsDropdown = 'months_dropdown'),
    (t.Month = 'month'),
    (t.Months = 'months'),
    (t.Nav = 'nav'),
    (t.NextMonthButton = 'button_next'),
    (t.PreviousMonthButton = 'button_previous'),
    (t.Week = 'week'),
    (t.Weeks = 'weeks'),
    (t.Weekday = 'weekday'),
    (t.Weekdays = 'weekdays'),
    (t.WeekNumber = 'week_number'),
    (t.WeekNumberHeader = 'week_number_header'),
    (t.YearsDropdown = 'years_dropdown');
})(_e || (_e = {}));
var pt;
(function (t) {
  (t.disabled = 'disabled'),
    (t.hidden = 'hidden'),
    (t.outside = 'outside'),
    (t.focused = 'focused'),
    (t.today = 'today');
})(pt || (pt = {}));
var Vn;
(function (t) {
  (t.range_end = 'range_end'),
    (t.range_middle = 'range_middle'),
    (t.range_start = 'range_start'),
    (t.selected = 'selected');
})(Vn || (Vn = {}));
var bn;
(function (t) {
  (t.weeks_before_enter = 'weeks_before_enter'),
    (t.weeks_before_exit = 'weeks_before_exit'),
    (t.weeks_after_enter = 'weeks_after_enter'),
    (t.weeks_after_exit = 'weeks_after_exit'),
    (t.caption_after_enter = 'caption_after_enter'),
    (t.caption_after_exit = 'caption_after_exit'),
    (t.caption_before_enter = 'caption_before_enter'),
    (t.caption_before_exit = 'caption_before_exit');
})(bn || (bn = {}));
const fv = {},
  Ls = {};
function Is(t, n) {
  try {
    const a =
      (
        fv[t] ||
        (fv[t] = new Intl.DateTimeFormat('en-GB', {
          timeZone: t,
          hour: 'numeric',
          timeZoneName: 'longOffset',
        }).format)
      )(n).split('GMT')[1] || '';
    return a in Ls ? Ls[a] : hv(a, a.split(':'));
  } catch {
    if (t in Ls) return Ls[t];
    const a = t == null ? void 0 : t.match(sN);
    return a ? hv(t, a.slice(1)) : NaN;
  }
}
const sN = /([+-]\d\d):?(\d\d)?/;
function hv(t, n) {
  const a = +n[0],
    i = +(n[1] || 0);
  return (Ls[t] = a > 0 ? a * 60 + i : a * 60 - i);
}
class tr extends Date {
  constructor(...n) {
    super(),
      n.length > 1 && typeof n[n.length - 1] == 'string' && (this.timeZone = n.pop()),
      (this.internal = new Date()),
      isNaN(Is(this.timeZone, this))
        ? this.setTime(NaN)
        : n.length
          ? typeof n[0] == 'number' &&
            (n.length === 1 || (n.length === 2 && typeof n[1] != 'number'))
            ? this.setTime(n[0])
            : typeof n[0] == 'string'
              ? this.setTime(+new Date(n[0]))
              : n[0] instanceof Date
                ? this.setTime(+n[0])
                : (this.setTime(+new Date(...n)), b0(this), lh(this))
          : this.setTime(Date.now());
  }
  static tz(n, ...a) {
    return a.length ? new tr(...a, n) : new tr(Date.now(), n);
  }
  withTimeZone(n) {
    return new tr(+this, n);
  }
  getTimezoneOffset() {
    return -Is(this.timeZone, this);
  }
  setTime(n) {
    return Date.prototype.setTime.apply(this, arguments), lh(this), +this;
  }
  [Symbol.for('constructDateFrom')](n) {
    return new tr(+new Date(n), this.timeZone);
  }
}
const pv = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((t) => {
  if (!pv.test(t)) return;
  const n = t.replace(pv, '$1UTC');
  tr.prototype[n] &&
    (t.startsWith('get')
      ? (tr.prototype[t] = function () {
          return this.internal[n]();
        })
      : ((tr.prototype[t] = function () {
          return Date.prototype[n].apply(this.internal, arguments), lN(this), +this;
        }),
        (tr.prototype[n] = function () {
          return Date.prototype[n].apply(this, arguments), lh(this), +this;
        })));
});
function lh(t) {
  t.internal.setTime(+t),
    t.internal.setUTCMinutes(t.internal.getUTCMinutes() - t.getTimezoneOffset());
}
function lN(t) {
  Date.prototype.setFullYear.call(
    t,
    t.internal.getUTCFullYear(),
    t.internal.getUTCMonth(),
    t.internal.getUTCDate()
  ),
    Date.prototype.setHours.call(
      t,
      t.internal.getUTCHours(),
      t.internal.getUTCMinutes(),
      t.internal.getUTCSeconds(),
      t.internal.getUTCMilliseconds()
    ),
    b0(t);
}
function b0(t) {
  const n = Is(t.timeZone, t),
    a = new Date(+t);
  a.setUTCHours(a.getUTCHours() - 1);
  const i = -new Date(+t).getTimezoneOffset(),
    s = -new Date(+a).getTimezoneOffset(),
    u = i - s,
    d = Date.prototype.getHours.apply(t) !== t.internal.getUTCHours();
  u && d && t.internal.setUTCMinutes(t.internal.getUTCMinutes() + u);
  const h = i - n;
  h && Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + h);
  const p = Is(t.timeZone, t),
    m = -new Date(+t).getTimezoneOffset() - p,
    g = p !== n,
    b = m - h;
  if (g && b) {
    Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + b);
    const v = Is(t.timeZone, t),
      E = p - v;
    E &&
      (t.internal.setUTCMinutes(t.internal.getUTCMinutes() + E),
      Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + E));
  }
}
class va extends tr {
  static tz(n, ...a) {
    return a.length ? new va(...a, n) : new va(Date.now(), n);
  }
  toISOString() {
    const [n, a, i] = this.tzComponents(),
      s = `${n}${a}:${i}`;
    return this.internal.toISOString().slice(0, -1) + s;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [n, a, i, s] = this.internal.toUTCString().split(' ');
    return `${n == null ? void 0 : n.slice(0, -1)} ${i} ${a} ${s}`;
  }
  toTimeString() {
    const n = this.internal.toUTCString().split(' ')[4],
      [a, i, s] = this.tzComponents();
    return `${n} GMT${a}${i}${s} (${uN(this.timeZone, this)})`;
  }
  toLocaleString(n, a) {
    return Date.prototype.toLocaleString.call(this, n, {
      ...a,
      timeZone: (a == null ? void 0 : a.timeZone) || this.timeZone,
    });
  }
  toLocaleDateString(n, a) {
    return Date.prototype.toLocaleDateString.call(this, n, {
      ...a,
      timeZone: (a == null ? void 0 : a.timeZone) || this.timeZone,
    });
  }
  toLocaleTimeString(n, a) {
    return Date.prototype.toLocaleTimeString.call(this, n, {
      ...a,
      timeZone: (a == null ? void 0 : a.timeZone) || this.timeZone,
    });
  }
  tzComponents() {
    const n = this.getTimezoneOffset(),
      a = n > 0 ? '-' : '+',
      i = String(Math.floor(Math.abs(n) / 60)).padStart(2, '0'),
      s = String(Math.abs(n) % 60).padStart(2, '0');
    return [a, i, s];
  }
  withTimeZone(n) {
    return new va(+this, n);
  }
  [Symbol.for('constructDateFrom')](n) {
    return new va(+new Date(n), this.timeZone);
  }
}
function uN(t, n) {
  return new Intl.DateTimeFormat('en-GB', { timeZone: t, timeZoneName: 'long' })
    .format(n)
    .slice(12);
}
const mv = 5,
  cN = 4;
function dN(t, n) {
  const a = n.startOfMonth(t),
    i = a.getDay() > 0 ? a.getDay() : 7,
    s = n.addDays(t, -i + 1),
    u = n.addDays(s, mv * 7 - 1);
  return n.getMonth(t) === n.getMonth(u) ? mv : cN;
}
function w0(t, n) {
  const a = n.startOfMonth(t),
    i = a.getDay();
  return i === 1 ? a : i === 0 ? n.addDays(a, -1 * 6) : n.addDays(a, -1 * (i - 1));
}
function fN(t, n) {
  const a = w0(t, n),
    i = dN(t, n);
  return n.addDays(a, i * 7 - 1);
}
class Wr {
  constructor(n, a) {
    (this.Date = Date),
      (this.today = () => {
        var i;
        return (i = this.overrides) != null && i.today
          ? this.overrides.today()
          : this.options.timeZone
            ? va.tz(this.options.timeZone)
            : new this.Date();
      }),
      (this.newDate = (i, s, u) => {
        var d;
        return (d = this.overrides) != null && d.newDate
          ? this.overrides.newDate(i, s, u)
          : this.options.timeZone
            ? new va(i, s, u, this.options.timeZone)
            : new Date(i, s, u);
      }),
      (this.addDays = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.addDays ? this.overrides.addDays(i, s) : l0(i, s);
      }),
      (this.addMonths = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.addMonths
          ? this.overrides.addMonths(i, s)
          : u0(i, s);
      }),
      (this.addWeeks = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.addWeeks
          ? this.overrides.addWeeks(i, s)
          : UC(i, s);
      }),
      (this.addYears = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.addYears
          ? this.overrides.addYears(i, s)
          : ZC(i, s);
      }),
      (this.differenceInCalendarDays = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.differenceInCalendarDays
          ? this.overrides.differenceInCalendarDays(i, s)
          : d0(i, s);
      }),
      (this.differenceInCalendarMonths = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.differenceInCalendarMonths
          ? this.overrides.differenceInCalendarMonths(i, s)
          : GC(i, s);
      }),
      (this.eachMonthOfInterval = (i) => {
        var s;
        return (s = this.overrides) != null && s.eachMonthOfInterval
          ? this.overrides.eachMonthOfInterval(i)
          : QC(i);
      }),
      (this.endOfBroadcastWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.endOfBroadcastWeek
          ? this.overrides.endOfBroadcastWeek(i, this)
          : fN(i, this);
      }),
      (this.endOfISOWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.endOfISOWeek
          ? this.overrides.endOfISOWeek(i)
          : n2(i);
      }),
      (this.endOfMonth = (i) => {
        var s;
        return (s = this.overrides) != null && s.endOfMonth ? this.overrides.endOfMonth(i) : XC(i);
      }),
      (this.endOfWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.endOfWeek
          ? this.overrides.endOfWeek(i, this.options)
          : p0(i, this.options);
      }),
      (this.endOfYear = (i) => {
        var s;
        return (s = this.overrides) != null && s.endOfYear ? this.overrides.endOfYear(i) : t2(i);
      }),
      (this.format = (i, s) => {
        var u;
        const d =
          (u = this.overrides) != null && u.format
            ? this.overrides.format(i, s, this.options)
            : Bu(i, s, this.options);
        return this.options.numerals && this.options.numerals !== 'latn'
          ? this.replaceDigits(d)
          : d;
      }),
      (this.getISOWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.getISOWeek ? this.overrides.getISOWeek(i) : m0(i);
      }),
      (this.getMonth = (i) => {
        var s;
        return (s = this.overrides) != null && s.getMonth
          ? this.overrides.getMonth(i, this.options)
          : Q2(i, this.options);
      }),
      (this.getYear = (i) => {
        var s;
        return (s = this.overrides) != null && s.getYear
          ? this.overrides.getYear(i, this.options)
          : eN(i, this.options);
      }),
      (this.getWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.getWeek
          ? this.overrides.getWeek(i, this.options)
          : y0(i, this.options);
      }),
      (this.isAfter = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.isAfter ? this.overrides.isAfter(i, s) : tN(i, s);
      }),
      (this.isBefore = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.isBefore
          ? this.overrides.isBefore(i, s)
          : nN(i, s);
      }),
      (this.isDate = (i) => {
        var s;
        return (s = this.overrides) != null && s.isDate ? this.overrides.isDate(i) : f0(i);
      }),
      (this.isSameDay = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.isSameDay
          ? this.overrides.isSameDay(i, s)
          : KC(i, s);
      }),
      (this.isSameMonth = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.isSameMonth
          ? this.overrides.isSameMonth(i, s)
          : rN(i, s);
      }),
      (this.isSameYear = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.isSameYear
          ? this.overrides.isSameYear(i, s)
          : aN(i, s);
      }),
      (this.max = (i) => {
        var s;
        return (s = this.overrides) != null && s.max ? this.overrides.max(i) : qC(i);
      }),
      (this.min = (i) => {
        var s;
        return (s = this.overrides) != null && s.min ? this.overrides.min(i) : YC(i);
      }),
      (this.setMonth = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.setMonth
          ? this.overrides.setMonth(i, s)
          : iN(i, s);
      }),
      (this.setYear = (i, s) => {
        var u;
        return (u = this.overrides) != null && u.setYear ? this.overrides.setYear(i, s) : oN(i, s);
      }),
      (this.startOfBroadcastWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.startOfBroadcastWeek
          ? this.overrides.startOfBroadcastWeek(i, this)
          : w0(i, this);
      }),
      (this.startOfDay = (i) => {
        var s;
        return (s = this.overrides) != null && s.startOfDay ? this.overrides.startOfDay(i) : rl(i);
      }),
      (this.startOfISOWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.startOfISOWeek
          ? this.overrides.startOfISOWeek(i)
          : nl(i);
      }),
      (this.startOfMonth = (i) => {
        var s;
        return (s = this.overrides) != null && s.startOfMonth
          ? this.overrides.startOfMonth(i)
          : e2(i);
      }),
      (this.startOfWeek = (i) => {
        var s;
        return (s = this.overrides) != null && s.startOfWeek
          ? this.overrides.startOfWeek(i, this.options)
          : fo(i, this.options);
      }),
      (this.startOfYear = (i) => {
        var s;
        return (s = this.overrides) != null && s.startOfYear
          ? this.overrides.startOfYear(i)
          : h0(i);
      }),
      (this.options = { locale: Ph, ...n }),
      (this.overrides = a);
  }
  getDigitMap() {
    const { numerals: n = 'latn' } = this.options,
      a = new Intl.NumberFormat('en-US', { numberingSystem: n }),
      i = {};
    for (let s = 0; s < 10; s++) i[s.toString()] = a.format(s);
    return i;
  }
  replaceDigits(n) {
    const a = this.getDigitMap();
    return n.replace(/\d/g, (i) => a[i] || i);
  }
  formatNumber(n) {
    return this.replaceDigits(n.toString());
  }
}
const zr = new Wr();
function hN(t, n, a = {}) {
  return Object.entries(t)
    .filter(([, i]) => i === !0)
    .reduce(
      (i, [s]) => (
        a[s] ? i.push(a[s]) : n[pt[s]] ? i.push(n[pt[s]]) : n[Vn[s]] && i.push(n[Vn[s]]), i
      ),
      [n[_e.Day]]
    );
}
function pN(t) {
  return Q.createElement('button', { ...t });
}
function mN(t) {
  return Q.createElement('span', { ...t });
}
function gN(t) {
  const { size: n = 24, orientation: a = 'left', className: i } = t;
  return Q.createElement(
    'svg',
    { className: i, width: n, height: n, viewBox: '0 0 24 24' },
    a === 'up' &&
      Q.createElement('polygon', { points: '6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28' }),
    a === 'down' &&
      Q.createElement('polygon', { points: '6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72' }),
    a === 'left' &&
      Q.createElement('polygon', {
        points: '16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20',
      }),
    a === 'right' &&
      Q.createElement('polygon', {
        points: '8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20',
      })
  );
}
function yN(t) {
  const { day: n, modifiers: a, ...i } = t;
  return Q.createElement('td', { ...i });
}
function vN(t) {
  const { day: n, modifiers: a, ...i } = t,
    s = Q.useRef(null);
  return (
    Q.useEffect(() => {
      var u;
      a.focused && ((u = s.current) == null || u.focus());
    }, [a.focused]),
    Q.createElement('button', { ref: s, ...i })
  );
}
function bN(t) {
  const { options: n, className: a, components: i, classNames: s, ...u } = t,
    d = [s[_e.Dropdown], a].join(' '),
    h = n == null ? void 0 : n.find(({ value: p }) => p === u.value);
  return Q.createElement(
    'span',
    { 'data-disabled': u.disabled, className: s[_e.DropdownRoot] },
    Q.createElement(
      i.Select,
      { className: d, ...u },
      n == null
        ? void 0
        : n.map(({ value: p, label: m, disabled: g }) =>
            Q.createElement(i.Option, { key: p, value: p, disabled: g }, m)
          )
    ),
    Q.createElement(
      'span',
      { className: s[_e.CaptionLabel], 'aria-hidden': !0 },
      h == null ? void 0 : h.label,
      Q.createElement(i.Chevron, { orientation: 'down', size: 18, className: s[_e.Chevron] })
    )
  );
}
function wN(t) {
  return Q.createElement('div', { ...t });
}
function kN(t) {
  return Q.createElement('div', { ...t });
}
function xN(t) {
  const { calendarMonth: n, displayIndex: a, ...i } = t;
  return Q.createElement('div', { ...i }, t.children);
}
function SN(t) {
  const { calendarMonth: n, displayIndex: a, ...i } = t;
  return Q.createElement('div', { ...i });
}
function _N(t) {
  return Q.createElement('table', { ...t });
}
function CN(t) {
  return Q.createElement('div', { ...t });
}
const k0 = T.createContext(void 0);
function ml() {
  const t = T.useContext(k0);
  if (t === void 0) throw new Error('useDayPicker() must be used within a custom component.');
  return t;
}
function NN(t) {
  const { components: n } = ml();
  return Q.createElement(n.Dropdown, { ...t });
}
function ON(t) {
  const { onPreviousClick: n, onNextClick: a, previousMonth: i, nextMonth: s, ...u } = t,
    {
      components: d,
      classNames: h,
      labels: { labelPrevious: p, labelNext: m },
    } = ml(),
    g = T.useCallback(
      (v) => {
        s && (a == null || a(v));
      },
      [s, a]
    ),
    b = T.useCallback(
      (v) => {
        i && (n == null || n(v));
      },
      [i, n]
    );
  return Q.createElement(
    'nav',
    { ...u },
    Q.createElement(
      d.PreviousMonthButton,
      {
        type: 'button',
        className: h[_e.PreviousMonthButton],
        tabIndex: i ? void 0 : -1,
        'aria-disabled': i ? void 0 : !0,
        'aria-label': p(i),
        onClick: b,
      },
      Q.createElement(d.Chevron, {
        disabled: i ? void 0 : !0,
        className: h[_e.Chevron],
        orientation: 'left',
      })
    ),
    Q.createElement(
      d.NextMonthButton,
      {
        type: 'button',
        className: h[_e.NextMonthButton],
        tabIndex: s ? void 0 : -1,
        'aria-disabled': s ? void 0 : !0,
        'aria-label': m(s),
        onClick: g,
      },
      Q.createElement(d.Chevron, {
        disabled: s ? void 0 : !0,
        orientation: 'right',
        className: h[_e.Chevron],
      })
    )
  );
}
function EN(t) {
  const { components: n } = ml();
  return Q.createElement(n.Button, { ...t });
}
function DN(t) {
  return Q.createElement('option', { ...t });
}
function PN(t) {
  const { components: n } = ml();
  return Q.createElement(n.Button, { ...t });
}
function MN(t) {
  const { rootRef: n, ...a } = t;
  return Q.createElement('div', { ...a, ref: n });
}
function TN(t) {
  return Q.createElement('select', { ...t });
}
function RN(t) {
  const { week: n, ...a } = t;
  return Q.createElement('tr', { ...a });
}
function jN(t) {
  return Q.createElement('th', { ...t });
}
function LN(t) {
  return Q.createElement('thead', { 'aria-hidden': !0 }, Q.createElement('tr', { ...t }));
}
function FN(t) {
  const { week: n, ...a } = t;
  return Q.createElement('th', { ...a });
}
function AN(t) {
  return Q.createElement('th', { ...t });
}
function $N(t) {
  return Q.createElement('tbody', { ...t });
}
function IN(t) {
  const { components: n } = ml();
  return Q.createElement(n.Dropdown, { ...t });
}
const WN = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Button: pN,
      CaptionLabel: mN,
      Chevron: gN,
      Day: yN,
      DayButton: vN,
      Dropdown: bN,
      DropdownNav: wN,
      Footer: kN,
      Month: xN,
      MonthCaption: SN,
      MonthGrid: _N,
      Months: CN,
      MonthsDropdown: NN,
      Nav: ON,
      NextMonthButton: EN,
      Option: DN,
      PreviousMonthButton: PN,
      Root: MN,
      Select: TN,
      Week: RN,
      WeekNumber: FN,
      WeekNumberHeader: AN,
      Weekday: jN,
      Weekdays: LN,
      Weeks: $N,
      YearsDropdown: IN,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function zN(t) {
  return { ...WN, ...t };
}
function VN(t) {
  const n = {
    'data-mode': t.mode ?? void 0,
    'data-required': 'required' in t ? t.required : void 0,
    'data-multiple-months': (t.numberOfMonths && t.numberOfMonths > 1) || void 0,
    'data-week-numbers': t.showWeekNumber || void 0,
    'data-broadcast-calendar': t.broadcastCalendar || void 0,
  };
  return (
    Object.entries(t).forEach(([a, i]) => {
      a.startsWith('data-') && (n[a] = i);
    }),
    n
  );
}
function x0() {
  const t = {};
  for (const n in _e) t[_e[n]] = `rdp-${_e[n]}`;
  for (const n in pt) t[pt[n]] = `rdp-${pt[n]}`;
  for (const n in Vn) t[Vn[n]] = `rdp-${Vn[n]}`;
  for (const n in bn) t[bn[n]] = `rdp-${bn[n]}`;
  return t;
}
function S0(t, n, a) {
  return (a ?? new Wr(n)).format(t, 'LLLL y');
}
const BN = S0;
function UN(t, n, a) {
  return (a ?? new Wr(n)).format(t, 'd');
}
function ZN(t, n = zr) {
  return n.format(t, 'LLLL');
}
function qN(t) {
  return t < 10 ? `0${t.toLocaleString()}` : `${t.toLocaleString()}`;
}
function YN() {
  return '';
}
function KN(t, n, a) {
  return (a ?? new Wr(n)).format(t, 'cccccc');
}
function _0(t, n = zr) {
  return n.format(t, 'yyyy');
}
const HN = _0,
  GN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        formatCaption: S0,
        formatDay: UN,
        formatMonthCaption: BN,
        formatMonthDropdown: ZN,
        formatWeekNumber: qN,
        formatWeekNumberHeader: YN,
        formatWeekdayName: KN,
        formatYearCaption: HN,
        formatYearDropdown: _0,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function XN(t) {
  return (
    t != null &&
      t.formatMonthCaption &&
      !t.formatCaption &&
      (t.formatCaption = t.formatMonthCaption),
    t != null &&
      t.formatYearCaption &&
      !t.formatYearDropdown &&
      (t.formatYearDropdown = t.formatYearCaption),
    { ...GN, ...t }
  );
}
function JN(t, n, a, i, s) {
  const { startOfMonth: u, startOfYear: d, endOfYear: h, eachMonthOfInterval: p, getMonth: m } = s;
  return p({ start: d(t), end: h(t) }).map((g) => {
    const b = i.formatMonthDropdown(g, s),
      v = m(g),
      E = (n && g < u(n)) || (a && g > u(a)) || !1;
    return { value: v, label: b, disabled: E };
  });
}
function QN(t, n = {}, a = {}) {
  let i = { ...(n == null ? void 0 : n[_e.Day]) };
  return (
    Object.entries(t)
      .filter(([, s]) => s === !0)
      .forEach(([s]) => {
        i = { ...i, ...(a == null ? void 0 : a[s]) };
      }),
    i
  );
}
function eO(t, n, a) {
  const i = t.today(),
    s = n ? t.startOfISOWeek(i) : t.startOfWeek(i),
    u = [];
  for (let d = 0; d < 7; d++) {
    const h = t.addDays(s, d);
    u.push(h);
  }
  return u;
}
function tO(t, n, a, i) {
  if (!t || !n) return;
  const { startOfYear: s, endOfYear: u, addYears: d, getYear: h, isBefore: p, isSameYear: m } = i,
    g = s(t),
    b = u(n),
    v = [];
  let E = g;
  for (; p(E, b) || m(E, b); ) v.push(E), (E = d(E, 1));
  return v.map((x) => {
    const N = a.formatYearDropdown(x, i);
    return { value: h(x), label: N, disabled: !1 };
  });
}
function C0(t, n, a) {
  return (a ?? new Wr(n)).format(t, 'LLLL y');
}
const nO = C0;
function rO(t, n, a, i) {
  let s = (i ?? new Wr(a)).format(t, 'PPPP');
  return n != null && n.today && (s = `Today, ${s}`), s;
}
function N0(t, n, a, i) {
  let s = (i ?? new Wr(a)).format(t, 'PPPP');
  return n.today && (s = `Today, ${s}`), n.selected && (s = `${s}, selected`), s;
}
const aO = N0;
function iO() {
  return '';
}
function oO(t) {
  return 'Choose the Month';
}
function sO(t) {
  return 'Go to the Next Month';
}
function lO(t) {
  return 'Go to the Previous Month';
}
function uO(t, n, a) {
  return (a ?? new Wr(n)).format(t, 'cccc');
}
function cO(t, n) {
  return `Week ${t}`;
}
function dO(t) {
  return 'Week Number';
}
function fO(t) {
  return 'Choose the Year';
}
const hO = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        labelCaption: nO,
        labelDay: aO,
        labelDayButton: N0,
        labelGrid: C0,
        labelGridcell: rO,
        labelMonthDropdown: oO,
        labelNav: iO,
        labelNext: sO,
        labelPrevious: lO,
        labelWeekNumber: cO,
        labelWeekNumberHeader: dO,
        labelWeekday: uO,
        labelYearDropdown: fO,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  gl = (t) => (t instanceof HTMLElement ? t : null),
  Zf = (t) => [...(t.querySelectorAll('[data-animated-month]') ?? [])],
  pO = (t) => gl(t.querySelector('[data-animated-month]')),
  qf = (t) => gl(t.querySelector('[data-animated-caption]')),
  Yf = (t) => gl(t.querySelector('[data-animated-weeks]')),
  mO = (t) => gl(t.querySelector('[data-animated-nav]')),
  gO = (t) => gl(t.querySelector('[data-animated-weekdays]'));
function yO(t, n, { classNames: a, months: i, focused: s, dateLib: u }) {
  const d = T.useRef(null),
    h = T.useRef(i),
    p = T.useRef(!1);
  T.useLayoutEffect(() => {
    const m = h.current;
    if (
      ((h.current = i),
      !n ||
        !t.current ||
        !(t.current instanceof HTMLElement) ||
        i.length === 0 ||
        m.length === 0 ||
        i.length !== m.length)
    )
      return;
    const g = u.isSameMonth(i[0].date, m[0].date),
      b = u.isAfter(i[0].date, m[0].date),
      v = b ? a[bn.caption_after_enter] : a[bn.caption_before_enter],
      E = b ? a[bn.weeks_after_enter] : a[bn.weeks_before_enter],
      x = d.current,
      N = t.current.cloneNode(!0);
    if (
      (N instanceof HTMLElement
        ? (Zf(N).forEach((_) => {
            if (!(_ instanceof HTMLElement)) return;
            const M = pO(_);
            M && _.contains(M) && _.removeChild(M);
            const V = qf(_);
            V && V.classList.remove(v);
            const A = Yf(_);
            A && A.classList.remove(E);
          }),
          (d.current = N))
        : (d.current = null),
      p.current || g || s)
    )
      return;
    const D = x instanceof HTMLElement ? Zf(x) : [],
      j = Zf(t.current);
    if (
      j &&
      j.every((_) => _ instanceof HTMLElement) &&
      D &&
      D.every((_) => _ instanceof HTMLElement)
    ) {
      (p.current = !0), (t.current.style.isolation = 'isolate');
      const _ = mO(t.current);
      _ && (_.style.zIndex = '1'),
        j.forEach((M, V) => {
          const A = D[V];
          if (!A) return;
          (M.style.position = 'relative'), (M.style.overflow = 'hidden');
          const ee = qf(M);
          ee && ee.classList.add(v);
          const te = Yf(M);
          te && te.classList.add(E);
          const H = () => {
            (p.current = !1),
              t.current && (t.current.style.isolation = ''),
              _ && (_.style.zIndex = ''),
              ee && ee.classList.remove(v),
              te && te.classList.remove(E),
              (M.style.position = ''),
              (M.style.overflow = ''),
              M.contains(A) && M.removeChild(A);
          };
          (A.style.pointerEvents = 'none'),
            (A.style.position = 'absolute'),
            (A.style.overflow = 'hidden'),
            A.setAttribute('aria-hidden', 'true');
          const me = gO(A);
          me && (me.style.opacity = '0');
          const Pe = qf(A);
          Pe &&
            (Pe.classList.add(b ? a[bn.caption_before_exit] : a[bn.caption_after_exit]),
            Pe.addEventListener('animationend', H));
          const we = Yf(A);
          we && we.classList.add(b ? a[bn.weeks_before_exit] : a[bn.weeks_after_exit]),
            M.insertBefore(A, M.firstChild);
        });
    }
  });
}
function vO(t, n, a, i) {
  const s = t[0],
    u = t[t.length - 1],
    { ISOWeek: d, fixedWeeks: h, broadcastCalendar: p } = a ?? {},
    {
      addDays: m,
      differenceInCalendarDays: g,
      differenceInCalendarMonths: b,
      endOfBroadcastWeek: v,
      endOfISOWeek: E,
      endOfMonth: x,
      endOfWeek: N,
      isAfter: D,
      startOfBroadcastWeek: j,
      startOfISOWeek: _,
      startOfWeek: M,
    } = i,
    V = p ? j(s, i) : d ? _(s) : M(s),
    A = p ? v(u, i) : d ? E(x(u)) : N(x(u)),
    ee = g(A, V),
    te = b(u, s) + 1,
    H = [];
  for (let Pe = 0; Pe <= ee; Pe++) {
    const we = m(V, Pe);
    if (n && D(we, n)) break;
    H.push(we);
  }
  const me = (p ? 35 : 42) * te;
  if (h && H.length < me) {
    const Pe = me - H.length;
    for (let we = 0; we < Pe; we++) {
      const ce = m(H[H.length - 1], 1);
      H.push(ce);
    }
  }
  return H;
}
function bO(t) {
  const n = [];
  return t.reduce((a, i) => {
    const s = [],
      u = i.weeks.reduce((d, h) => [...d, ...h.days], s);
    return [...a, ...u];
  }, n);
}
function wO(t, n, a, i) {
  const { numberOfMonths: s = 1 } = a,
    u = [];
  for (let d = 0; d < s; d++) {
    const h = i.addMonths(t, d);
    if (n && h > n) break;
    u.push(h);
  }
  return u;
}
function gv(t, n) {
  const {
    month: a,
    defaultMonth: i,
    today: s = n.today(),
    numberOfMonths: u = 1,
    endMonth: d,
    startMonth: h,
    timeZone: p,
  } = t;
  let m = a || i || s;
  const { differenceInCalendarMonths: g, addMonths: b, startOfMonth: v } = n;
  if (d && g(d, m) < 0) {
    const E = -1 * (u - 1);
    m = b(d, E);
  }
  return h && g(m, h) < 0 && (m = h), (m = p ? new va(m, p) : m), v(m);
}
class O0 {
  constructor(n, a, i = zr) {
    (this.date = n),
      (this.displayMonth = a),
      (this.outside = !!(a && !i.isSameMonth(n, a))),
      (this.dateLib = i);
  }
  isEqualTo(n) {
    return (
      this.dateLib.isSameDay(n.date, this.date) &&
      this.dateLib.isSameMonth(n.displayMonth, this.displayMonth)
    );
  }
}
class kO {
  constructor(n, a) {
    (this.date = n), (this.weeks = a);
  }
}
class xO {
  constructor(n, a) {
    (this.days = a), (this.weekNumber = n);
  }
}
function SO(t, n, a, i) {
  const {
      addDays: s,
      endOfBroadcastWeek: u,
      endOfISOWeek: d,
      endOfMonth: h,
      endOfWeek: p,
      getISOWeek: m,
      getWeek: g,
      startOfBroadcastWeek: b,
      startOfISOWeek: v,
      startOfWeek: E,
    } = i,
    x = t.reduce((N, D) => {
      const j = a.broadcastCalendar ? b(D, i) : a.ISOWeek ? v(D) : E(D),
        _ = a.broadcastCalendar ? u(D, i) : a.ISOWeek ? d(h(D)) : p(h(D)),
        M = n.filter((te) => te >= j && te <= _),
        V = a.broadcastCalendar ? 35 : 42;
      if (a.fixedWeeks && M.length < V) {
        const te = n.filter((H) => {
          const me = V - M.length;
          return H > _ && H <= s(_, me);
        });
        M.push(...te);
      }
      const A = M.reduce((te, H) => {
          const me = a.ISOWeek ? m(H) : g(H),
            Pe = te.find((ce) => ce.weekNumber === me),
            we = new O0(H, D, i);
          return Pe ? Pe.days.push(we) : te.push(new xO(me, [we])), te;
        }, []),
        ee = new kO(D, A);
      return N.push(ee), N;
    }, []);
  return a.reverseMonths ? x.reverse() : x;
}
function _O(t, n) {
  let { startMonth: a, endMonth: i } = t;
  const {
      startOfYear: s,
      startOfDay: u,
      startOfMonth: d,
      endOfMonth: h,
      addYears: p,
      endOfYear: m,
      newDate: g,
      today: b,
    } = n,
    { fromYear: v, toYear: E, fromMonth: x, toMonth: N } = t;
  !a && x && (a = x),
    !a && v && (a = n.newDate(v, 0, 1)),
    !i && N && (i = N),
    !i && E && (i = g(E, 11, 31));
  const D = t.captionLayout === 'dropdown' || t.captionLayout === 'dropdown-years';
  return (
    a ? (a = d(a)) : v ? (a = g(v, 0, 1)) : !a && D && (a = s(p(t.today ?? b(), -100))),
    i ? (i = h(i)) : E ? (i = g(E, 11, 31)) : !i && D && (i = m(t.today ?? b())),
    [a && u(a), i && u(i)]
  );
}
function CO(t, n, a, i) {
  if (a.disableNavigation) return;
  const { pagedNavigation: s, numberOfMonths: u = 1 } = a,
    { startOfMonth: d, addMonths: h, differenceInCalendarMonths: p } = i,
    m = s ? u : 1,
    g = d(t);
  if (!n || !(p(n, t) < u)) return h(g, m);
}
function NO(t, n, a, i) {
  if (a.disableNavigation) return;
  const { pagedNavigation: s, numberOfMonths: u } = a,
    { startOfMonth: d, addMonths: h, differenceInCalendarMonths: p } = i,
    m = s ? (u ?? 1) : 1,
    g = d(t);
  if (!n || !(p(g, n) <= 0)) return h(g, -m);
}
function OO(t) {
  const n = [];
  return t.reduce((a, i) => [...a, ...i.weeks], n);
}
function vc(t, n) {
  const [a, i] = T.useState(t);
  return [n === void 0 ? a : n, i];
}
function EO(t, n) {
  const [a, i] = _O(t, n),
    { startOfMonth: s, endOfMonth: u } = n,
    d = gv(t, n),
    [h, p] = vc(d, t.month ? d : void 0);
  T.useEffect(() => {
    const V = gv(t, n);
    p(V);
  }, [t.timeZone]);
  const m = wO(h, i, t, n),
    g = vO(m, t.endMonth ? u(t.endMonth) : void 0, t, n),
    b = SO(m, g, t, n),
    v = OO(b),
    E = bO(b),
    x = NO(h, a, t, n),
    N = CO(h, i, t, n),
    { disableNavigation: D, onMonthChange: j } = t,
    _ = (V) => v.some((A) => A.days.some((ee) => ee.isEqualTo(V))),
    M = (V) => {
      if (D) return;
      let A = s(V);
      a && A < s(a) && (A = s(a)), i && A > s(i) && (A = s(i)), p(A), j == null || j(A);
    };
  return {
    months: b,
    weeks: v,
    days: E,
    navStart: a,
    navEnd: i,
    previousMonth: x,
    nextMonth: N,
    goToMonth: M,
    goToDay: (V) => {
      _(V) || M(V.date);
    },
  };
}
var Qn;
(function (t) {
  (t[(t.Today = 0)] = 'Today'),
    (t[(t.Selected = 1)] = 'Selected'),
    (t[(t.LastFocused = 2)] = 'LastFocused'),
    (t[(t.FocusedModifier = 3)] = 'FocusedModifier');
})(Qn || (Qn = {}));
function yv(t) {
  return !t[pt.disabled] && !t[pt.hidden] && !t[pt.outside];
}
function DO(t, n, a, i) {
  let s,
    u = -1;
  for (const d of t) {
    const h = n(d);
    yv(h) &&
      (h[pt.focused] && u < Qn.FocusedModifier
        ? ((s = d), (u = Qn.FocusedModifier))
        : i != null && i.isEqualTo(d) && u < Qn.LastFocused
          ? ((s = d), (u = Qn.LastFocused))
          : a(d.date) && u < Qn.Selected
            ? ((s = d), (u = Qn.Selected))
            : h[pt.today] && u < Qn.Today && ((s = d), (u = Qn.Today)));
  }
  return s || (s = t.find((d) => yv(n(d)))), s;
}
function Rr(t, n, a = !1, i = zr) {
  let { from: s, to: u } = t;
  const { differenceInCalendarDays: d, isSameDay: h } = i;
  return s && u
    ? (d(u, s) < 0 && ([s, u] = [u, s]), d(n, s) >= (a ? 1 : 0) && d(u, n) >= (a ? 1 : 0))
    : !a && u
      ? h(u, n)
      : !a && s
        ? h(s, n)
        : !1;
}
function E0(t) {
  return !!(t && typeof t == 'object' && 'before' in t && 'after' in t);
}
function Mh(t) {
  return !!(t && typeof t == 'object' && 'from' in t);
}
function D0(t) {
  return !!(t && typeof t == 'object' && 'after' in t);
}
function P0(t) {
  return !!(t && typeof t == 'object' && 'before' in t);
}
function M0(t) {
  return !!(t && typeof t == 'object' && 'dayOfWeek' in t);
}
function T0(t, n) {
  return Array.isArray(t) && t.every(n.isDate);
}
function jr(t, n, a = zr) {
  const i = Array.isArray(n) ? n : [n],
    { isSameDay: s, differenceInCalendarDays: u, isAfter: d } = a;
  return i.some((h) => {
    if (typeof h == 'boolean') return h;
    if (a.isDate(h)) return s(t, h);
    if (T0(h, a)) return h.includes(t);
    if (Mh(h)) return Rr(h, t, !1, a);
    if (M0(h))
      return Array.isArray(h.dayOfWeek)
        ? h.dayOfWeek.includes(t.getDay())
        : h.dayOfWeek === t.getDay();
    if (E0(h)) {
      const p = u(h.before, t),
        m = u(h.after, t),
        g = p > 0,
        b = m < 0;
      return d(h.before, h.after) ? b && g : g || b;
    }
    return D0(h)
      ? u(t, h.after) > 0
      : P0(h)
        ? u(h.before, t) > 0
        : typeof h == 'function'
          ? h(t)
          : !1;
  });
}
function PO(t, n, a, i, s, u, d) {
  const { ISOWeek: h, broadcastCalendar: p } = u,
    {
      addDays: m,
      addMonths: g,
      addWeeks: b,
      addYears: v,
      endOfBroadcastWeek: E,
      endOfISOWeek: x,
      endOfWeek: N,
      max: D,
      min: j,
      startOfBroadcastWeek: _,
      startOfISOWeek: M,
      startOfWeek: V,
    } = d;
  let A = {
    day: m,
    week: b,
    month: g,
    year: v,
    startOfWeek: (ee) => (p ? _(ee, d) : h ? M(ee) : V(ee)),
    endOfWeek: (ee) => (p ? E(ee, d) : h ? x(ee) : N(ee)),
  }[t](a, n === 'after' ? 1 : -1);
  return n === 'before' && i ? (A = D([i, A])) : n === 'after' && s && (A = j([s, A])), A;
}
function R0(t, n, a, i, s, u, d, h = 0) {
  if (h > 365) return;
  const p = PO(t, n, a.date, i, s, u, d),
    m = !!(u.disabled && jr(p, u.disabled, d)),
    g = !!(u.hidden && jr(p, u.hidden, d)),
    b = p,
    v = new O0(p, b, d);
  return !m && !g ? v : R0(t, n, v, i, s, u, d, h + 1);
}
function MO(t, n, a, i, s) {
  const { autoFocus: u } = t,
    [d, h] = T.useState(),
    p = DO(n.days, a, i || (() => !1), d),
    [m, g] = T.useState(u ? p : void 0);
  return {
    isFocusTarget: (b) => !!(p != null && p.isEqualTo(b)),
    setFocused: g,
    focused: m,
    blur: () => {
      h(m), g(void 0);
    },
    moveFocus: (b, v) => {
      if (!m) return;
      const E = R0(b, v, m, n.navStart, n.navEnd, t, s);
      E && (n.goToDay(E), g(E));
    },
  };
}
function TO(t, n, a) {
  const {
      disabled: i,
      hidden: s,
      modifiers: u,
      showOutsideDays: d,
      broadcastCalendar: h,
      today: p,
    } = n,
    { isSameDay: m, isSameMonth: g, startOfMonth: b, isBefore: v, endOfMonth: E, isAfter: x } = a,
    N = n.startMonth && b(n.startMonth),
    D = n.endMonth && E(n.endMonth),
    j = { [pt.focused]: [], [pt.outside]: [], [pt.disabled]: [], [pt.hidden]: [], [pt.today]: [] },
    _ = {};
  for (const M of t) {
    const { date: V, displayMonth: A } = M,
      ee = !!(A && !g(V, A)),
      te = !!(N && v(V, N)),
      H = !!(D && x(V, D)),
      me = !!(i && jr(V, i, a)),
      Pe = !!(s && jr(V, s, a)) || te || H || (!h && !d && ee) || (h && d === !1 && ee),
      we = m(V, p ?? a.today());
    ee && j.outside.push(M),
      me && j.disabled.push(M),
      Pe && j.hidden.push(M),
      we && j.today.push(M),
      u &&
        Object.keys(u).forEach((ce) => {
          const be = u == null ? void 0 : u[ce];
          be && jr(V, be, a) && (_[ce] ? _[ce].push(M) : (_[ce] = [M]));
        });
  }
  return (M) => {
    const V = {
        [pt.focused]: !1,
        [pt.disabled]: !1,
        [pt.hidden]: !1,
        [pt.outside]: !1,
        [pt.today]: !1,
      },
      A = {};
    for (const ee in j) {
      const te = j[ee];
      V[ee] = te.some((H) => H === M);
    }
    for (const ee in _) A[ee] = _[ee].some((te) => te === M);
    return { ...V, ...A };
  };
}
function RO(t, n) {
  const { selected: a, required: i, onSelect: s } = t,
    [u, d] = vc(a, s ? a : void 0),
    h = s ? a : u,
    { isSameDay: p } = n,
    m = (v) => (h == null ? void 0 : h.some((E) => p(E, v))) ?? !1,
    { min: g, max: b } = t;
  return {
    selected: h,
    select: (v, E, x) => {
      let N = [...(h ?? [])];
      if (m(v)) {
        if ((h == null ? void 0 : h.length) === g || (i && (h == null ? void 0 : h.length) === 1))
          return;
        N = h == null ? void 0 : h.filter((D) => !p(D, v));
      } else (h == null ? void 0 : h.length) === b ? (N = [v]) : (N = [...N, v]);
      return s || d(N), s == null || s(N, v, E, x), N;
    },
    isSelected: m,
  };
}
function jO(t, n, a = 0, i = 0, s = !1, u = zr) {
  const { from: d, to: h } = n || {},
    { isSameDay: p, isAfter: m, isBefore: g } = u;
  let b;
  if (!d && !h) b = { from: t, to: a > 0 ? void 0 : t };
  else if (d && !h)
    p(d, t)
      ? s
        ? (b = { from: d, to: void 0 })
        : (b = void 0)
      : g(t, d)
        ? (b = { from: t, to: d })
        : (b = { from: d, to: t });
  else if (d && h)
    if (p(d, t) && p(h, t)) s ? (b = { from: d, to: h }) : (b = void 0);
    else if (p(d, t)) b = { from: d, to: a > 0 ? void 0 : t };
    else if (p(h, t)) b = { from: t, to: a > 0 ? void 0 : t };
    else if (g(t, d)) b = { from: t, to: h };
    else if (m(t, d)) b = { from: d, to: t };
    else if (m(t, h)) b = { from: d, to: t };
    else throw new Error('Invalid range');
  if (b != null && b.from && b != null && b.to) {
    const v = u.differenceInCalendarDays(b.to, b.from);
    i > 0 && v > i
      ? (b = { from: t, to: void 0 })
      : a > 1 && v < a && (b = { from: t, to: void 0 });
  }
  return b;
}
function LO(t, n, a = zr) {
  const i = Array.isArray(n) ? n : [n];
  let s = t.from;
  const u = a.differenceInCalendarDays(t.to, t.from),
    d = Math.min(u, 6);
  for (let h = 0; h <= d; h++) {
    if (i.includes(s.getDay())) return !0;
    s = a.addDays(s, 1);
  }
  return !1;
}
function vv(t, n, a = zr) {
  return Rr(t, n.from, !1, a) || Rr(t, n.to, !1, a) || Rr(n, t.from, !1, a) || Rr(n, t.to, !1, a);
}
function FO(t, n, a = zr) {
  const i = Array.isArray(n) ? n : [n];
  if (
    i
      .filter((u) => typeof u != 'function')
      .some((u) =>
        typeof u == 'boolean'
          ? u
          : a.isDate(u)
            ? Rr(t, u, !1, a)
            : T0(u, a)
              ? u.some((d) => Rr(t, d, !1, a))
              : Mh(u)
                ? u.from && u.to
                  ? vv(t, { from: u.from, to: u.to }, a)
                  : !1
                : M0(u)
                  ? LO(t, u.dayOfWeek, a)
                  : E0(u)
                    ? a.isAfter(u.before, u.after)
                      ? vv(t, { from: a.addDays(u.after, 1), to: a.addDays(u.before, -1) }, a)
                      : jr(t.from, u, a) || jr(t.to, u, a)
                    : D0(u) || P0(u)
                      ? jr(t.from, u, a) || jr(t.to, u, a)
                      : !1
      )
  )
    return !0;
  const s = i.filter((u) => typeof u == 'function');
  if (s.length) {
    let u = t.from;
    const d = a.differenceInCalendarDays(t.to, t.from);
    for (let h = 0; h <= d; h++) {
      if (s.some((p) => p(u))) return !0;
      u = a.addDays(u, 1);
    }
  }
  return !1;
}
function AO(t, n) {
  const { disabled: a, excludeDisabled: i, selected: s, required: u, onSelect: d } = t,
    [h, p] = vc(s, d ? s : void 0),
    m = d ? s : h;
  return {
    selected: m,
    select: (g, b, v) => {
      const { min: E, max: x } = t,
        N = g ? jO(g, m, E, x, u, n) : void 0;
      return (
        i &&
          a &&
          N != null &&
          N.from &&
          N.to &&
          FO({ from: N.from, to: N.to }, a, n) &&
          ((N.from = g), (N.to = void 0)),
        d || p(N),
        d == null || d(N, g, b, v),
        N
      );
    },
    isSelected: (g) => m && Rr(m, g, !1, n),
  };
}
function $O(t, n) {
  const { selected: a, required: i, onSelect: s } = t,
    [u, d] = vc(a, s ? a : void 0),
    h = s ? a : u,
    { isSameDay: p } = n;
  return {
    selected: h,
    select: (m, g, b) => {
      let v = m;
      return !i && h && h && p(m, h) && (v = void 0), s || d(v), s == null || s(v, m, g, b), v;
    },
    isSelected: (m) => (h ? p(h, m) : !1),
  };
}
function IO(t, n) {
  const a = $O(t, n),
    i = RO(t, n),
    s = AO(t, n);
  switch (t.mode) {
    case 'single':
      return a;
    case 'multiple':
      return i;
    case 'range':
      return s;
    default:
      return;
  }
}
function WO(t) {
  const {
      components: n,
      formatters: a,
      labels: i,
      dateLib: s,
      locale: u,
      classNames: d,
    } = T.useMemo(() => {
      const Re = { ...Ph, ...t.locale };
      return {
        dateLib: new Wr(
          {
            locale: Re,
            weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
            firstWeekContainsDate: t.firstWeekContainsDate,
            useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
            useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
            timeZone: t.timeZone,
            numerals: t.numerals,
          },
          t.dateLib
        ),
        components: zN(t.components),
        formatters: XN(t.formatters),
        labels: { ...hO, ...t.labels },
        locale: Re,
        classNames: { ...x0(), ...t.classNames },
      };
    }, [
      t.locale,
      t.broadcastCalendar,
      t.weekStartsOn,
      t.firstWeekContainsDate,
      t.useAdditionalWeekYearTokens,
      t.useAdditionalDayOfYearTokens,
      t.timeZone,
      t.numerals,
      t.dateLib,
      t.components,
      t.formatters,
      t.labels,
      t.classNames,
    ]),
    {
      captionLayout: h,
      mode: p,
      onDayBlur: m,
      onDayClick: g,
      onDayFocus: b,
      onDayKeyDown: v,
      onDayMouseEnter: E,
      onDayMouseLeave: x,
      onNextClick: N,
      onPrevClick: D,
      showWeekNumber: j,
      styles: _,
    } = t,
    {
      formatCaption: M,
      formatDay: V,
      formatMonthDropdown: A,
      formatWeekNumber: ee,
      formatWeekNumberHeader: te,
      formatWeekdayName: H,
      formatYearDropdown: me,
    } = a,
    Pe = EO(t, s),
    {
      days: we,
      months: ce,
      navStart: be,
      navEnd: Ee,
      previousMonth: Ne,
      nextMonth: z,
      goToMonth: G,
    } = Pe,
    oe = TO(we, t, s),
    { isSelected: Me, select: C, selected: Y } = IO(t, s) ?? {},
    {
      blur: se,
      focused: re,
      isFocusTarget: ve,
      moveFocus: We,
      setFocused: ke,
    } = MO(t, Pe, oe, Me ?? (() => !1), s),
    {
      labelDayButton: Tt,
      labelGridcell: rt,
      labelGrid: rn,
      labelMonthDropdown: Vr,
      labelNav: Zn,
      labelWeekday: Br,
      labelWeekNumber: Sa,
      labelWeekNumberHeader: Ur,
      labelYearDropdown: yo,
    } = i,
    oi = T.useMemo(() => eO(s, t.ISOWeek), [s, t.ISOWeek]),
    Vt = p !== void 0 || g !== void 0,
    vo = T.useCallback(() => {
      Ne && (G(Ne), D == null || D(Ne));
    }, [Ne, G, D]),
    si = T.useCallback(() => {
      z && (G(z), N == null || N(z));
    }, [G, z, N]),
    _a = T.useCallback(
      (Re, lt) => (Ve) => {
        Ve.preventDefault(),
          Ve.stopPropagation(),
          ke(Re),
          C == null || C(Re.date, lt, Ve),
          g == null || g(Re.date, lt, Ve);
      },
      [C, g, ke]
    ),
    O = T.useCallback(
      (Re, lt) => (Ve) => {
        ke(Re), b == null || b(Re.date, lt, Ve);
      },
      [b, ke]
    ),
    I = T.useCallback(
      (Re, lt) => (Ve) => {
        se(), m == null || m(Re.date, lt, Ve);
      },
      [se, m]
    ),
    B = T.useCallback(
      (Re, lt) => (Ve) => {
        const Kt = {
          ArrowLeft: ['day', t.dir === 'rtl' ? 'after' : 'before'],
          ArrowRight: ['day', t.dir === 'rtl' ? 'before' : 'after'],
          ArrowDown: ['week', 'after'],
          ArrowUp: ['week', 'before'],
          PageUp: [Ve.shiftKey ? 'year' : 'month', 'before'],
          PageDown: [Ve.shiftKey ? 'year' : 'month', 'after'],
          Home: ['startOfWeek', 'before'],
          End: ['endOfWeek', 'after'],
        };
        if (Kt[Ve.key]) {
          Ve.preventDefault(), Ve.stopPropagation();
          const [_t, ui] = Kt[Ve.key];
          We(_t, ui);
        }
        v == null || v(Re.date, lt, Ve);
      },
      [We, v, t.dir]
    ),
    de = T.useCallback(
      (Re, lt) => (Ve) => {
        E == null || E(Re.date, lt, Ve);
      },
      [E]
    ),
    ae = T.useCallback(
      (Re, lt) => (Ve) => {
        x == null || x(Re.date, lt, Ve);
      },
      [x]
    ),
    J = T.useCallback(
      (Re) => (lt) => {
        const Ve = Number(lt.target.value),
          Kt = s.setMonth(s.startOfMonth(Re), Ve);
        G(Kt);
      },
      [s, G]
    ),
    ie = T.useCallback(
      (Re) => (lt) => {
        const Ve = Number(lt.target.value),
          Kt = s.setYear(s.startOfMonth(Re), Ve);
        G(Kt);
      },
      [s, G]
    ),
    { className: je, style: Ze } = T.useMemo(
      () => ({
        className: [d[_e.Root], t.className].filter(Boolean).join(' '),
        style: { ...(_ == null ? void 0 : _[_e.Root]), ...t.style },
      }),
      [d, t.className, t.style, _]
    ),
    St = VN(t),
    li = T.useRef(null);
  yO(li, !!t.animate, { classNames: d, months: ce, focused: re, dateLib: s });
  const Ca = {
    dayPickerProps: t,
    selected: Y,
    select: C,
    isSelected: Me,
    months: ce,
    nextMonth: z,
    previousMonth: Ne,
    goToMonth: G,
    getModifiers: oe,
    components: n,
    classNames: d,
    styles: _,
    labels: i,
    formatters: a,
  };
  return Q.createElement(
    k0.Provider,
    { value: Ca },
    Q.createElement(
      n.Root,
      {
        rootRef: t.animate ? li : void 0,
        className: je,
        style: Ze,
        dir: t.dir,
        id: t.id,
        lang: t.lang,
        nonce: t.nonce,
        title: t.title,
        role: t.role,
        'aria-label': t['aria-label'],
        ...St,
      },
      Q.createElement(
        n.Months,
        { className: d[_e.Months], style: _ == null ? void 0 : _[_e.Months] },
        !t.hideNavigation &&
          Q.createElement(n.Nav, {
            'data-animated-nav': t.animate ? 'true' : void 0,
            className: d[_e.Nav],
            style: _ == null ? void 0 : _[_e.Nav],
            'aria-label': Zn(),
            onPreviousClick: vo,
            onNextClick: si,
            previousMonth: Ne,
            nextMonth: z,
          }),
        ce.map((Re, lt) => {
          const Ve = JN(Re.date, be, Ee, a, s),
            Kt = tO(be, Ee, a, s);
          return Q.createElement(
            n.Month,
            {
              'data-animated-month': t.animate ? 'true' : void 0,
              className: d[_e.Month],
              style: _ == null ? void 0 : _[_e.Month],
              key: lt,
              displayIndex: lt,
              calendarMonth: Re,
            },
            Q.createElement(
              n.MonthCaption,
              {
                'data-animated-caption': t.animate ? 'true' : void 0,
                className: d[_e.MonthCaption],
                style: _ == null ? void 0 : _[_e.MonthCaption],
                calendarMonth: Re,
                displayIndex: lt,
              },
              h != null && h.startsWith('dropdown')
                ? Q.createElement(
                    n.DropdownNav,
                    { className: d[_e.Dropdowns], style: _ == null ? void 0 : _[_e.Dropdowns] },
                    h === 'dropdown' || h === 'dropdown-months'
                      ? Q.createElement(n.MonthsDropdown, {
                          className: d[_e.MonthsDropdown],
                          'aria-label': Vr(),
                          classNames: d,
                          components: n,
                          disabled: !!t.disableNavigation,
                          onChange: J(Re.date),
                          options: Ve,
                          style: _ == null ? void 0 : _[_e.Dropdown],
                          value: s.getMonth(Re.date),
                        })
                      : Q.createElement('span', null, A(Re.date, s)),
                    h === 'dropdown' || h === 'dropdown-years'
                      ? Q.createElement(n.YearsDropdown, {
                          className: d[_e.YearsDropdown],
                          'aria-label': yo(s.options),
                          classNames: d,
                          components: n,
                          disabled: !!t.disableNavigation,
                          onChange: ie(Re.date),
                          options: Kt,
                          style: _ == null ? void 0 : _[_e.Dropdown],
                          value: s.getYear(Re.date),
                        })
                      : Q.createElement('span', null, me(Re.date, s)),
                    Q.createElement(
                      'span',
                      {
                        role: 'status',
                        'aria-live': 'polite',
                        style: {
                          border: 0,
                          clip: 'rect(0 0 0 0)',
                          height: '1px',
                          margin: '-1px',
                          overflow: 'hidden',
                          padding: 0,
                          position: 'absolute',
                          width: '1px',
                          whiteSpace: 'nowrap',
                          wordWrap: 'normal',
                        },
                      },
                      M(Re.date, s.options, s)
                    )
                  )
                : Q.createElement(
                    n.CaptionLabel,
                    { className: d[_e.CaptionLabel], role: 'status', 'aria-live': 'polite' },
                    M(Re.date, s.options, s)
                  )
            ),
            Q.createElement(
              n.MonthGrid,
              {
                role: 'grid',
                'aria-multiselectable': p === 'multiple' || p === 'range',
                'aria-label': rn(Re.date, s.options, s) || void 0,
                className: d[_e.MonthGrid],
                style: _ == null ? void 0 : _[_e.MonthGrid],
              },
              !t.hideWeekdays &&
                Q.createElement(
                  n.Weekdays,
                  {
                    'data-animated-weekdays': t.animate ? 'true' : void 0,
                    className: d[_e.Weekdays],
                    style: _ == null ? void 0 : _[_e.Weekdays],
                  },
                  j &&
                    Q.createElement(
                      n.WeekNumberHeader,
                      {
                        'aria-label': Ur(s.options),
                        className: d[_e.WeekNumberHeader],
                        style: _ == null ? void 0 : _[_e.WeekNumberHeader],
                        scope: 'col',
                      },
                      te()
                    ),
                  oi.map((_t, ui) =>
                    Q.createElement(
                      n.Weekday,
                      {
                        'aria-label': Br(_t, s.options, s),
                        className: d[_e.Weekday],
                        key: ui,
                        style: _ == null ? void 0 : _[_e.Weekday],
                        scope: 'col',
                      },
                      H(_t, s.options, s)
                    )
                  )
                ),
              Q.createElement(
                n.Weeks,
                {
                  'data-animated-weeks': t.animate ? 'true' : void 0,
                  className: d[_e.Weeks],
                  style: _ == null ? void 0 : _[_e.Weeks],
                },
                Re.weeks.map((_t, ui) =>
                  Q.createElement(
                    n.Week,
                    {
                      className: d[_e.Week],
                      key: _t.weekNumber,
                      style: _ == null ? void 0 : _[_e.Week],
                      week: _t,
                    },
                    j &&
                      Q.createElement(
                        n.WeekNumber,
                        {
                          week: _t,
                          style: _ == null ? void 0 : _[_e.WeekNumber],
                          'aria-label': Sa(_t.weekNumber, { locale: u }),
                          className: d[_e.WeekNumber],
                          scope: 'row',
                          role: 'rowheader',
                        },
                        ee(_t.weekNumber)
                      ),
                    _t.days.map((Ot) => {
                      const { date: dn } = Ot,
                        Ke = oe(Ot);
                      if (
                        ((Ke[pt.focused] = !Ke.hidden && !!(re != null && re.isEqualTo(Ot))),
                        (Ke[Vn.selected] = (Me == null ? void 0 : Me(dn)) || Ke.selected),
                        Mh(Y))
                      ) {
                        const { from: ci, to: Oa } = Y;
                        (Ke[Vn.range_start] = !!(ci && Oa && s.isSameDay(dn, ci))),
                          (Ke[Vn.range_end] = !!(ci && Oa && s.isSameDay(dn, Oa))),
                          (Ke[Vn.range_middle] = Rr(Y, dn, !0, s));
                      }
                      const Na = QN(Ke, _, t.modifiersStyles),
                        Nc = hN(Ke, d, t.modifiersClassNames),
                        yl = !Vt && !Ke.hidden ? rt(dn, Ke, s.options, s) : void 0;
                      return Q.createElement(
                        n.Day,
                        {
                          key: `${s.format(dn, 'yyyy-MM-dd')}_${s.format(Ot.displayMonth, 'yyyy-MM')}`,
                          day: Ot,
                          modifiers: Ke,
                          className: Nc.join(' '),
                          style: Na,
                          role: 'gridcell',
                          'aria-selected': Ke.selected || void 0,
                          'aria-label': yl,
                          'data-day': s.format(dn, 'yyyy-MM-dd'),
                          'data-month': Ot.outside ? s.format(dn, 'yyyy-MM') : void 0,
                          'data-selected': Ke.selected || void 0,
                          'data-disabled': Ke.disabled || void 0,
                          'data-hidden': Ke.hidden || void 0,
                          'data-outside': Ot.outside || void 0,
                          'data-focused': Ke.focused || void 0,
                          'data-today': Ke.today || void 0,
                        },
                        !Ke.hidden && Vt
                          ? Q.createElement(
                              n.DayButton,
                              {
                                className: d[_e.DayButton],
                                style: _ == null ? void 0 : _[_e.DayButton],
                                type: 'button',
                                day: Ot,
                                modifiers: Ke,
                                disabled: Ke.disabled || void 0,
                                tabIndex: ve(Ot) ? 0 : -1,
                                'aria-label': Tt(dn, Ke, s.options, s),
                                onClick: _a(Ot, Ke),
                                onBlur: I(Ot, Ke),
                                onFocus: O(Ot, Ke),
                                onKeyDown: B(Ot, Ke),
                                onMouseEnter: de(Ot, Ke),
                                onMouseLeave: ae(Ot, Ke),
                              },
                              V(dn, s.options, s)
                            )
                          : !Ke.hidden && V(Ot.date, s.options, s)
                      );
                    })
                  )
                )
              )
            )
          );
        })
      ),
      t.footer &&
        Q.createElement(
          n.Footer,
          {
            className: d[_e.Footer],
            style: _ == null ? void 0 : _[_e.Footer],
            role: 'status',
            'aria-live': 'polite',
          },
          t.footer
        )
    )
  );
}
function zO({ title: t, id: n, error: a, type: i, register: s, control: u }) {
  const [d, h] = T.useState(void 0),
    p = x0(),
    [m, g] = T.useState(!1),
    b = T.useRef(null);
  return (
    T.useEffect(() => {
      const v = (E) => {
        b.current && !b.current.contains(E.target) && g(!1);
      };
      return (
        document.addEventListener('mousedown', v),
        () => {
          document.removeEventListener('mousedown', v);
        }
      );
    }, []),
    k.jsxs('div', {
      className: 'relative ',
      children: [
        k.jsx('label', {
          htmlFor: n,
          className: 'font-medium text-goldenrod capitalize p-1 font-main flex flex-col',
          children: t,
        }),
        k.jsx('input', {
          ...s,
          name: n,
          type: i,
          id: n,
          value: d ? Bu(d, 'yyyy-MM-dd') : '',
          readOnly: !0,
          className: 'hidden',
        }),
        k.jsx(o_, {
          name: n,
          control: u,
          render: ({ field: v }) =>
            k.jsxs(k.Fragment, {
              children: [
                k.jsx('div', {
                  className:
                    'rounded-lg text-olive font-main p-1 w-[300px] hover:cursor-pointer focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki',
                  onClick: () => {
                    g(!m);
                  },
                  children: d ? Bu(d, 'dd MMMM, yyyy') : 'Pick a date',
                }),
                m &&
                  k.jsx('div', {
                    tabIndex: 0,
                    ref: b,
                    className: 'absolute z-10 w-fit h-fit outline-none mt-1 -translate-y-1',
                    children: k.jsx(WO, {
                      mode: 'single',
                      disabled: { before: new Date(1930, 1, 1), after: new Date() },
                      selected: d,
                      onSelect: (E) => {
                        h(E), E && v.onChange(Bu(E, 'yyyy-MM-dd')), g(!1);
                      },
                      onDayBlur: () => {
                        g(!m);
                      },
                      onDayClick: () => {
                        g(!m);
                      },
                      captionLayout: 'dropdown-years',
                      className: 'text-olive bg-khaki rounded-lg font-main w-[300px]',
                      classNames: {
                        today: 'border-goldenrod font-main-bd rounded-full outline-goldenrod',
                        selected: 'bg-goldenrod outline-olive outline-2 font-main-bd text-olive',
                        root: `${p.root} shadow-xl p-1`,
                        chevron: `${p.chevron} fill-olive`,
                        day: ` w-10 h-10 rounded-full text-center ${p.day}`,
                        disabled: 'opacity-50',
                        day_button: 'w-full h-full rounded-full cursor-pointer',
                        caption_label: 'hidden',
                        years_dropdown: `${p.years_dropdown} hover:cursor-pointer bg-khaki outline-0 `,
                        nav: `${p.nav} hover:cursor-pointer absolute left-2`,
                        month_caption: `${p.month_caption} flex justify-end pr-2`,
                        month_grid: `${p.month_caption} w-full`,
                        button_previous: `${p.button_previous} hover:cursor-pointer`,
                        button_next: `${p.button_next} hover:cursor-pointer`,
                      },
                    }),
                  }),
              ],
            }),
        }),
        k.jsx('p', {
          className: 'text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]',
          children: a ?? ' ',
        }),
      ],
    })
  );
}
function uh({ title: t, id: n, type: a, error: i, register: s }) {
  const [u, d] = T.useState(!1),
    h = a === 'password',
    p = a === 'checkbox',
    m = a === 'email',
    g = h ? (u ? 'text' : 'password') : a;
  return k.jsxs('div', {
    className: `relative ${p ? 'flex flex-wrap w-[300px] ' : ''}`,
    children: [
      k.jsx('label', {
        htmlFor: n,
        className: `font-medium text-goldenrod capitalize p-1 font-main ${p ? '' : 'flex flex-col'}`,
        children: t,
      }),
      k.jsx('input', {
        type: g,
        id: n,
        placeholder: 'Start typing...',
        className:
          'rounded-lg text-olive font-main ' +
          (p
            ? 'w-fit m-1 p-2 cursor-pointer accent-goldenrod mx-1 hover:accent-goldenrod'
            : 'p-1 w-[300px] focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki'),
        ...s,
        name: n,
        autoComplete: m ? 'on' : 'off',
      }),
      h &&
        k.jsx('button', {
          type: 'button',
          className: 'absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer pt-3',
          onClick: () => {
            d((b) => !b);
          },
          'aria-label': u ? 'Hide password' : 'Show password',
          children: u ? '🙉' : '🙈',
        }),
      k.jsx('p', {
        className: 'text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]',
        children: i ?? ' ',
      }),
    ],
  });
}
function bv({ title: t, content: n, register: a, errors: i, hint: s, control: u }) {
  var d;
  return k.jsxs('fieldset', {
    className: 'flex flex-row gap-4 p-2 flex-wrap justify-center',
    children: [
      k.jsxs('legend', {
        className: 'text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main',
        children: [t, s && k.jsx('p', { className: 'text-base text-goldenrod', children: s })],
      }),
      n.map((h) => {
        var p, m;
        const g = h.id;
        return String(g).toLowerCase().includes('date')
          ? k.jsx(
              zO,
              {
                title: h.title,
                error: (p = i[g]) == null ? void 0 : p.message,
                id: g,
                type: h.type,
                control: u,
                register: a(g),
              },
              String(g)
            )
          : k.jsx(
              uh,
              {
                title: h.title,
                id: String(g),
                type: h.type,
                register: a(g),
                error: (m = i[g]) == null ? void 0 : m.message,
              },
              String(g)
            );
      }),
      t.includes('address') &&
        k.jsx(WC, {
          id: `${t.split(' ')[0]}Country`,
          register: a(`${t.split(' ')[0]}Country`),
          error: (d = i[`${t.split(' ')[0]}Country`]) == null ? void 0 : d.message,
        }),
    ],
  });
}
const so = new Date(),
  Th = ne
    .string()
    .refine((t) => o0.some((n) => n.code === t), { message: 'Please select a country' }),
  VO = ne.object({
    firstName: ne
      .string()
      .min(2, 'First name must be at least 2 characters')
      .max(20, 'First name must be no longer than characters'),
    lastName: ne
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name must be no longer than characters'),
    dateOfBirth: ne.string().refine((t) => {
      const n = new Date(t);
      let a = so.getFullYear() - n.getFullYear();
      const i = so.getMonth() - n.getMonth(),
        s = so.getDate() - n.getDate();
      return (i < 0 || (i === 0 && s < 0)) && a--, a >= 13;
    }, 'You must be at least 13 years old'),
  }),
  BO = ne.object({
    email: ne
      .string()
      .min(1, 'Email is required')
      .superRefine((t, n) => {
        t !== t.trim() &&
          n.addIssue({
            code: ne.ZodIssueCode.custom,
            message: 'Email must not have leading or trailing spaces',
          }),
          t.includes('@') ||
            n.addIssue({
              code: ne.ZodIssueCode.custom,
              message: "Email must contain an '@' symbol",
            }),
          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t) ||
            n.addIssue({
              code: ne.ZodIssueCode.custom,
              message: 'Email must contain a domain name (e.g., example.com)',
            });
      }),
    password: ne
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must include an uppercase letter')
      .regex(/[a-z]/, 'Must include a lowercase letter')
      .regex(/[0-9]/, 'Must include a number')
      .refine((t) => !/\s/.test(t), { message: 'Password must not contain spaces' }),
  }),
  UO = ne.object({
    petName: ne.string().min(2, 'First name must be at least 2 characters').max(20),
    petBirthDate: ne.string().refine((t) => {
      const n = new Date(t);
      let a = so.getFullYear() - n.getFullYear();
      const i = so.getMonth() - n.getMonth(),
        s = so.getDate() - n.getDate();
      return (i < 0 || (i === 0 && s < 0)) && a--, a <= 35;
    }, 'Your pet must be very old... Try applying for Guinness World Records'),
  }),
  j0 = /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/,
  ZO = ne.object({
    shippingStreetName: ne.string().min(5, 'Please enter a valid street name'),
    shippingCity: ne.string().min(2, 'City name must be at least 2 characters').max(50),
    shippingPostalCode: ne.string().regex(j0, 'Postal code must be valid (e.g., 12345)'),
    shippingCountry: Th,
  }),
  qO = ne.object({
    billingStreetName: ne.string().min(5, 'Please enter a valid street name').optional(),
    billingCity: ne.string().min(2, 'City name must be at least 2 characters').max(50).optional(),
    billingPostalCode: ne.string().regex(j0, 'Postal code must be valid (e.g., 12345)').optional(),
    billingCountry: Th.optional(),
  }),
  ks = VO.merge(BO)
    .merge(UO)
    .merge(ZO)
    .merge(qO)
    .extend({ defaultAddress: ne.boolean().optional() }),
  YO = ks.extend({ sameAsShipping: ne.boolean().optional() }).refine(
    (t) => {
      if (t.sameAsShipping) return !0;
      const { billingStreetName: n, billingCity: a, billingPostalCode: i, billingCountry: s } = t;
      return ne
        .object({
          billingStreetName: ks.shape.billingStreetName,
          billingCity: ks.shape.billingCity,
          billingPostalCode: ks.shape.billingPostalCode,
          billingCountry: ks.shape.billingCountry,
        })
        .safeParse({
          billingStreetName: n,
          billingCity: a,
          billingPostalCode: i,
          billingCountry: s,
        }).success;
    },
    { message: 'Please fill billing address', path: ['sameAsShipping'] }
  );
async function KO(t, n, a) {
  var i, s, u, d;
  const h = $0.safeParse(t),
    p = (i = h.data) == null ? void 0 : i.customer.version,
    m = (s = h.data) == null ? void 0 : s.customer.id,
    g = (u = h.data) == null ? void 0 : u.customer.addresses[0].id,
    b = (d = h.data) != null && d.customer.addresses[1] ? h.data.customer.addresses[1].id : g,
    v = [
      { action: 'addShippingAddressId', addressId: g },
      { action: 'addBillingAddressId', addressId: b },
    ],
    E = a
      ? [
          { action: 'setDefaultShippingAddress', addressId: g },
          { action: 'setDefaultBillingAddress', addressId: b },
        ]
      : [],
    x = { version: p ?? 1, actions: [...v, ...E] },
    N = await (
      await fetch(F0 + `/${m ?? ''}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${n}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(x),
      })
    ).json(),
    D = A0.safeParse(N);
  if (!D.success)
    throw (
      (console.error('Invalid response structure:', D.error),
      console.log('Raw response:', N),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return D.data;
}
const HO = 'QMdMW3dn2QFBIFpoFRm_yfE0',
  GO = 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  XO = 'ecommerce2v',
  L0 = 'europe-west1.gcp',
  JO = `https://api.${L0}.commercetools.com/${XO}`,
  F0 = `${JO}/customers`,
  QO = ne.object({
    error: ne.string(),
    error_description: ne.string().optional(),
    message: ne.string().optional(),
  }),
  eE = ne.object({ access_token: ne.string(), expires_in: ne.number(), token_type: ne.string() });
async function tE() {
  const t = HO,
    n = GO,
    a = `https://auth.${L0}.commercetools.com/oauth/token`,
    i = btoa(`${t}:${n}`),
    s = await fetch(a, {
      method: 'POST',
      headers: { Authorization: `Basic ${i}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials',
    }),
    u = await s.json();
  if (!s.ok) {
    const h = QO.safeParse(u);
    throw h.success
      ? new Error(
          `Token fetch failed: ${h.data.error_description ?? h.data.message ?? h.data.error}`
        )
      : new Error('Token fetch failed: Unknown error response');
  }
  const d = eE.safeParse(u);
  if (!d.success) throw new Error('Token fetch failed: Invalid response format');
  return console.log(d.data.access_token), d.data.access_token;
}
const nE = ne.object({ clientId: ne.string(), isPlatformClient: ne.boolean() }),
  rE = ne.object({
    clientId: ne.string().optional(),
    isPlatformClient: ne.boolean(),
    user: ne.object({ typeId: ne.string().optional(), id: ne.string().optional() }).optional(),
  }),
  A0 = ne
    .object({
      id: ne.string(),
      version: ne.number(),
      versionModifiedAt: ne.string(),
      lastMessageSequenceNumber: ne.number(),
      createdAt: ne.string(),
      lastModifiedAt: ne.string(),
      lastModifiedBy: rE,
      createdBy: nE,
      email: ne.string(),
      firstName: ne.string(),
      lastName: ne.string(),
      dateOfBirth: ne.string(),
      addresses: ne.array(
        ne.object({
          id: ne.string().optional(),
          firstName: ne.string().optional(),
          lastName: ne.string().optional(),
          streetName: ne.string(),
          postalCode: ne.string(),
          city: ne.string(),
          country: Th,
        })
      ),
      defaultShippingAddressId: ne.string().optional(),
      defaultBillingAddressId: ne.string().optional(),
      shippingAddressIds: ne.array(ne.string()),
      billingAddressIds: ne.array(ne.string()),
      isEmailVerified: ne.boolean(),
      customerGroupAssignments: ne.array(ne.unknown()),
      custom: ne.object({
        type: ne.object({ typeId: ne.string(), id: ne.string() }),
        fields: ne.object({ petName: ne.string(), petBirthDate: ne.string() }),
      }),
      stores: ne.array(ne.unknown()),
      authenticationMode: ne.string(),
    })
    .passthrough(),
  $0 = ne.object({ customer: A0 });
async function aE(t, n) {
  const a = await fetch(F0, {
      method: 'POST',
      headers: { Authorization: `Bearer ${n}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(t),
    }),
    i = await a.json();
  if (!a.ok) {
    const u = i.message ?? a.statusText;
    throw new Error(`Sign-up failed: ${u}`);
  }
  const s = $0.safeParse(i);
  if (!s.success)
    throw (
      (console.error('Invalid response structure:', s.error.format()),
      console.log('Raw response:', i),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return s.data;
}
function iE(t) {
  const {
      register: n,
      handleSubmit: a,
      setValue: i,
      control: s,
      trigger: u,
      formState: { errors: d, isValid: h, isSubmitting: p },
    } = Yb({ mode: 'all', resolver: Hb(YO) }),
    [m, g] = T.useState(null),
    b = Ib({ name: 'sameAsShipping', control: s });
  return (
    T.useEffect(() => {
      i('defaultAddress', !1, { shouldValidate: !0 }),
        b &&
          (i('defaultAddress', !1, { shouldValidate: !0 }),
          i('billingStreetName', void 0, { shouldValidate: !1 }),
          i('billingCity', void 0, { shouldValidate: !1 }),
          i('billingPostalCode', void 0, { shouldValidate: !1 }),
          i('billingCountry', void 0, { shouldValidate: !1 }),
          u(['billingStreetName', 'billingCity', 'billingPostalCode', 'billingCountry'])),
        u(['defaultAddress']);
    }, [b, i, u]),
    {
      register: n,
      control: s,
      handleValidSubmit: async (v) => {
        const E = {
            firstName: v.firstName,
            lastName: v.lastName,
            streetName: v.shippingStreetName,
            city: v.shippingCity,
            postalCode: v.shippingPostalCode,
            country: v.shippingCountry,
          },
          x = v.sameAsShipping
            ? E
            : {
                firstName: v.firstName,
                lastName: v.lastName,
                streetName: v.billingStreetName ?? '',
                city: v.billingCity ?? '',
                postalCode: v.billingPostalCode ?? '',
                country: v.billingCountry,
              },
          N = v.sameAsShipping ? [E] : [E, x],
          D = {
            ...v,
            addresses: N,
            custom: {
              type: { key: 'customerCustomFields' },
              fields: { petName: v.petName, petBirthDate: v.petBirthDate },
            },
          };
        try {
          g('');
          const j = await tE(),
            _ = await aE(D, j);
          console.log('Sign-up successful:', _);
          const M = await KO(_, j, v.defaultAddress ?? !1);
          console.log('Addresses successful:', M), t(v.firstName);
        } catch (j) {
          const _ = j instanceof Error ? j.message : 'Something went wrong. Please try again.';
          console.log(j), g(_);
        }
      },
      handleSubmit: a,
      errors: d,
      isValid: h,
      isSubmitting: p,
      sameAsShipping: b,
      submitError: m,
    }
  );
}
const oE = [
    { title: 'first name', id: 'firstName', type: 'text' },
    { title: 'last name', id: 'lastName', type: 'text' },
    { title: 'date of birth', id: 'dateOfBirth', type: 'date' },
  ],
  sE = [
    { title: 'email', id: 'email', type: 'text' },
    { title: 'password', id: 'password', type: 'password' },
  ],
  lE = [
    { title: 'Pet name', id: 'petName', type: 'text' },
    { title: "pet's date of birth", id: 'petBirthDate', type: 'date' },
  ],
  uE = [
    { title: 'Street', id: 'shippingStreetName', type: 'text' },
    { title: 'City', id: 'shippingCity', type: 'text' },
    { title: 'Postal Code', id: 'shippingPostalCode', type: 'text' },
  ],
  cE = [
    { title: 'Street', id: 'billingStreetName', type: 'text' },
    { title: 'City', id: 'billingCity', type: 'text' },
    { title: 'Postal Code', id: 'billingPostalCode', type: 'text' },
  ],
  dE = [
    { title: 'user information', content: oE },
    { title: 'login information', content: sE },
    {
      title: 'pet information',
      content: lE,
      hint: "Fill the pet info to get a discount for your pet's birthday!",
    },
    { title: 'shipping address', content: uE },
  ];
function fE({ title: t, message: n, buttonText: a, closeModal: i }) {
  T.useEffect(
    () => (
      (document.body.style.overflow = 'hidden'),
      () => {
        document.body.style.overflow = '';
      }
    ),
    []
  );
  function s(u) {
    u.target === u.currentTarget && i();
  }
  return k.jsx('div', {
    className:
      'fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50',
    onClick: s,
    children: k.jsxs('div', {
      className:
        'bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center',
      children: [
        k.jsx('h2', {
          className: 'text-2xl font-bold text-goldenrod font-additional',
          children: t,
        }),
        k.jsx('p', { className: 'font-main text-lg text-olive pt-4 pb-4', children: n }),
        k.jsx('button', {
          onClick: i,
          className:
            'w-fit min-w-3xs bg-jungle text-white px-4 py-2 rounded-xl text-lg font-main hover:bg-opacity-90 hover:cursor-pointer',
          children: a,
        }),
      ],
    }),
  });
}
const hE = 'firstName';
function pE() {
  var t;
  const [n, a] = T.useState(!1),
    [i, s] = T.useState(''),
    u = nn(),
    {
      register: d,
      control: h,
      handleValidSubmit: p,
      handleSubmit: m,
      errors: g,
      isValid: b,
      isSubmitting: v,
      sameAsShipping: E,
      submitError: x,
    } = iE((D) => {
      s(D), a(!0);
    });
  function N() {
    a(!1), localStorage.setItem(hE, i), u('/');
  }
  return k.jsxs('section', {
    className: 'w-fit flex flex-col items-center justify-center font-additional ',
    children: [
      k.jsx('h2', {
        className: 'text-3xl p-2 text-center text-jungle font-main-bd ',
        children: 'Registration',
      }),
      n &&
        k.jsx(fE, {
          title: 'Account created',
          message: k.jsxs(k.Fragment, {
            children: [
              'Welcome, ',
              i,
              '!',
              k.jsx('br', {}),
              'Your account has been created. You will be redirected to the main page.',
            ],
          }),
          buttonText: 'Confirm',
          closeModal: N,
        }),
      ';',
      k.jsxs('form', {
        className: 'flex flex-col gap-2 p-2 items-center',
        onSubmit: (D) => {
          D.preventDefault(), m(p)(D);
        },
        children: [
          dE.map(({ title: D, content: j, hint: _ }) =>
            k.jsx(bv, { title: D, content: j, register: d, errors: g, control: h, hint: _ }, D)
          ),
          k.jsx(uh, {
            type: 'checkbox',
            title: 'Billing address same as shipping',
            id: 'sameAsShipping',
            register: d('sameAsShipping'),
            error: (t = g.sameAsShipping) == null ? void 0 : t.message,
          }),
          E
            ? k.jsx(uh, {
                type: 'checkbox',
                title: 'Set as default address',
                id: 'defaultAddress',
                register: d('defaultAddress'),
              })
            : k.jsx(bv, { title: 'billing address', content: cE, register: d, errors: g }),
          k.jsx('button', {
            disabled: !b || v,
            type: 'submit',
            className:
              'w-fit p-1 px-3 text-white min-w-3xs bg-jungle rounded-xl m-2 text-2xl capitalize font-main font-medium hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
            children: v ? 'Loading...' : 'Submit!',
          }),
          x &&
            k.jsx('p', { className: 'text-coral text-sm p-1 w-[300px] text-center', children: x }),
        ],
      }),
    ],
  });
}
function mE({ additionalText: t, linkText: n, redirectTo: a }) {
  const i = nn();
  function s() {
    i('/' + a);
  }
  return k.jsxs('div', {
    className: 'flex gap-2 bg-white items-center p-2 justify-center font-additional',
    children: [
      k.jsx('span', { className: 'text-jungle', children: t }),
      k.jsx('div', {
        onClick: s,
        className: 'text-jungle m-2 font-bold hover:cursor-pointer font-main',
        children: n,
      }),
    ],
  });
}
function gE() {
  return k.jsxs('section', {
    className: 'w-fit m-auto flex flex-col justify-center items-center rounded-lg bg-white',
    children: [
      k.jsx(mE, {
        additionalText: 'Already have an account?',
        linkText: 'Sign in →',
        redirectTo: 'login',
      }),
      k.jsx(pE, {}),
    ],
  });
}
const Pu = {
    'canvas-page': '_canvas-page_1ox40_1',
    'catalog-title': '_catalog-title_1ox40_21',
    'catalog-background': '_catalog-background_1ox40_33',
    'catalog-img': '_catalog-img_1ox40_41',
  },
  yE = '/assets/corgiPaint-CeW47dEF.png';
function vE() {
  return (
    T.useEffect(() => {
      document.title = 'Catalog | Zoo Shop | Pet Supplies';
    }, []),
    k.jsxs('div', {
      className: Pu['canvas-page'],
      children: [
        k.jsx('h2', { className: Pu['catalog-title'], children: 'Catalog page coming soon”' }),
        k.jsx('div', {
          className: Pu['catalog-background'],
          children: k.jsx('img', { className: Pu['catalog-img'], src: yE, alt: 'catalog' }),
        }),
      ],
    })
  );
}
const xs = {
    'canvas-page': '_canvas-page_1iazc_1',
    'cart-background': '_cart-background_1iazc_19',
    'empty-img': '_empty-img_1iazc_31',
    'cart-title-empty': '_cart-title-empty_1iazc_39',
    'cart-text-empty': '_cart-text-empty_1iazc_51',
  },
  bE = '/assets/cartEmptyCorgi-Dd1WEbPa.png';
function wE() {
  return (
    T.useEffect(() => {
      document.title = 'Cart | Zoo Shop | Pet Supplies';
    }, []),
    k.jsxs('div', {
      className: xs['canvas-page'],
      children: [
        k.jsx('h2', {
          className: xs['cart-title-empty'],
          children: "It's time to start shopping!",
        }),
        k.jsx('span', {
          className: xs['cart-text-empty'],
          children: 'Fill it with discounts from our popular departments',
        }),
        k.jsx('div', {
          className: xs['cart-background'],
          children: k.jsx('img', { className: xs['empty-img'], src: bE, alt: 'empty' }),
        }),
      ],
    })
  );
}
const Mu = {
    'canvas-page': '_canvas-page_16aco_1',
    'favorites-title': '_favorites-title_16aco_21',
    'favorites-background': '_favorites-background_16aco_33',
    'favorites-img': '_favorites-img_16aco_41',
  },
  kE = '/assets/corgiPaint-CeW47dEF.png';
function xE() {
  return (
    T.useEffect(() => {
      document.title = 'Favorites | Zoo Shop | Pet Supplies';
    }, []),
    k.jsxs('div', {
      className: Mu['canvas-page'],
      children: [
        k.jsx('h2', { className: Mu['favorites-title'], children: 'Favorites page coming soon”' }),
        k.jsx('div', {
          className: Mu['favorites-background'],
          children: k.jsx('img', { className: Mu['favorites-img'], src: kE, alt: 'favorites' }),
        }),
      ],
    })
  );
}
const Tu = {
    'canvas-page': '_canvas-page_vp1ul_1',
    'orders-title': '_orders-title_vp1ul_21',
    'orders-background': '_orders-background_vp1ul_33',
    'orders-img': '_orders-img_vp1ul_41',
  },
  SE = '/assets/corgiPaint-CeW47dEF.png';
function _E() {
  return (
    T.useEffect(() => {
      document.title = 'Order | Zoo Shop | Pet Supplies';
    }, []),
    k.jsxs('div', {
      className: Tu['canvas-page'],
      children: [
        k.jsx('h2', { className: Tu['orders-title'], children: 'Orders page coming soon”' }),
        k.jsx('div', {
          className: Tu['orders-background'],
          children: k.jsx('img', { className: Tu['orders-img'], src: SE, alt: 'orders' }),
        }),
      ],
    })
  );
}
const CE = '/assets/pageNotFound-CtxT6sMr.png',
  Ru = {
    'main-wrapper-404': '_main-wrapper-404_18x8j_1',
    'not-found-pages': '_not-found-pages_18x8j_17',
    'back-home-button': '_back-home-button_18x8j_31',
  };
function NE() {
  T.useEffect(() => {
    document.title = '404 | Zoo Shop | Pet Supplies';
  }, []);
  const t = nn();
  function n() {
    t('/');
  }
  return k.jsx('main', {
    className: Ru.main,
    children: k.jsxs('div', {
      className: Ru['main-wrapper-404'],
      children: [
        k.jsx('button', { onClick: n, className: Ru['back-home-button'], children: 'Back Home' }),
        k.jsx('img', { className: Ru['not-found-pages'], src: CE, alt: '404 Page Not Found' }),
      ],
    }),
  });
}
function OE() {
  return k.jsx(w1, {
    children: k.jsxs(Jn, {
      path: '/',
      element: k.jsx(CS, {}),
      children: [
        k.jsx(Jn, { index: !0, element: k.jsx(JS, {}) }),
        k.jsx(Jn, { path: 'login', element: k.jsx(IC, {}) }),
        k.jsx(Jn, { path: '/registration', element: k.jsx(gE, {}) }),
        k.jsx(Jn, { path: 'catalog', element: k.jsx(vE, {}) }),
        k.jsx(Jn, { path: 'cart', element: k.jsx(wE, {}) }),
        k.jsx(Jn, { path: 'favorites', element: k.jsx(xE, {}) }),
        k.jsx(Jn, { path: 'orders', element: k.jsx(_E, {}) }),
        k.jsx(Jn, { path: '*', element: k.jsx(NE, {}) }),
      ],
    }),
  });
}
var wv = { exports: {} },
  Kf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kv;
function EE() {
  if (kv) return Kf;
  kv = 1;
  var t = hc();
  function n(p, m) {
    return (p === m && (p !== 0 || 1 / p === 1 / m)) || (p !== p && m !== m);
  }
  var a = typeof Object.is == 'function' ? Object.is : n,
    i = t.useSyncExternalStore,
    s = t.useRef,
    u = t.useEffect,
    d = t.useMemo,
    h = t.useDebugValue;
  return (
    (Kf.useSyncExternalStoreWithSelector = function (p, m, g, b, v) {
      var E = s(null);
      if (E.current === null) {
        var x = { hasValue: !1, value: null };
        E.current = x;
      } else x = E.current;
      E = d(
        function () {
          function D(A) {
            if (!j) {
              if (((j = !0), (_ = A), (A = b(A)), v !== void 0 && x.hasValue)) {
                var ee = x.value;
                if (v(ee, A)) return (M = ee);
              }
              return (M = A);
            }
            if (((ee = M), a(_, A))) return ee;
            var te = b(A);
            return v !== void 0 && v(ee, te) ? ((_ = A), ee) : ((_ = A), (M = te));
          }
          var j = !1,
            _,
            M,
            V = g === void 0 ? null : g;
          return [
            function () {
              return D(m());
            },
            V === null
              ? void 0
              : function () {
                  return D(V());
                },
          ];
        },
        [m, g, b, v]
      );
      var N = i(p, E[0], E[1]);
      return (
        u(
          function () {
            (x.hasValue = !0), (x.value = N);
          },
          [N]
        ),
        h(N),
        N
      );
    }),
    Kf
  );
}
var xv;
function DE() {
  return xv || ((xv = 1), (wv.exports = EE())), wv.exports;
}
DE();
function PE(t) {
  t();
}
function ME() {
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      PE(() => {
        let a = t;
        for (; a; ) a.callback(), (a = a.next);
      });
    },
    get() {
      const a = [];
      let i = t;
      for (; i; ) a.push(i), (i = i.next);
      return a;
    },
    subscribe(a) {
      let i = !0;
      const s = (n = { callback: a, next: null, prev: n });
      return (
        s.prev ? (s.prev.next = s) : (t = s),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            s.next ? (s.next.prev = s.prev) : (n = s.prev),
            s.prev ? (s.prev.next = s.next) : (t = s.next));
        }
      );
    },
  };
}
var Sv = { notify() {}, get: () => [] };
function TE(t, n) {
  let a,
    i = Sv,
    s = 0,
    u = !1;
  function d(N) {
    g();
    const D = i.subscribe(N);
    let j = !1;
    return () => {
      j || ((j = !0), D(), b());
    };
  }
  function h() {
    i.notify();
  }
  function p() {
    x.onStateChange && x.onStateChange();
  }
  function m() {
    return u;
  }
  function g() {
    s++, a || ((a = t.subscribe(p)), (i = ME()));
  }
  function b() {
    s--, a && s === 0 && (a(), (a = void 0), i.clear(), (i = Sv));
  }
  function v() {
    u || ((u = !0), g());
  }
  function E() {
    u && ((u = !1), b());
  }
  const x = {
    addNestedSub: d,
    notifyNestedSubs: h,
    handleChangeWrapper: p,
    isSubscribed: m,
    trySubscribe: v,
    tryUnsubscribe: E,
    getListeners: () => i,
  };
  return x;
}
var RE = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jE = RE(),
  LE = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  FE = LE(),
  AE = () => (jE || FE ? T.useLayoutEffect : T.useEffect),
  $E = AE(),
  _v = Symbol.for('react-redux-context'),
  Cv = typeof globalThis < 'u' ? globalThis : {};
function IE() {
  if (!T.createContext) return {};
  const t = Cv[_v] ?? (Cv[_v] = new Map());
  let n = t.get(T.createContext);
  return n || ((n = T.createContext(null)), t.set(T.createContext, n)), n;
}
var WE = IE();
function zE(t) {
  const { children: n, context: a, serverState: i, store: s } = t,
    u = T.useMemo(() => {
      const p = TE(s);
      return { store: s, subscription: p, getServerState: i ? () => i : void 0 };
    }, [s, i]),
    d = T.useMemo(() => s.getState(), [s]);
  $E(() => {
    const { subscription: p } = u;
    return (
      (p.onStateChange = p.notifyNestedSubs),
      p.trySubscribe(),
      d !== s.getState() && p.notifyNestedSubs(),
      () => {
        p.tryUnsubscribe(), (p.onStateChange = void 0);
      }
    );
  }, [u, d]);
  const h = a || WE;
  return T.createElement(h.Provider, { value: u }, n);
}
var VE = zE;
function zt(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var BE = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Nv = BE,
  Hf = () => Math.random().toString(36).substring(7).split('').join('.'),
  UE = {
    INIT: `@@redux/INIT${Hf()}`,
    REPLACE: `@@redux/REPLACE${Hf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Hf()}`,
  },
  rc = UE;
function Rh(t) {
  if (typeof t != 'object' || t === null) return !1;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(t) === n || Object.getPrototypeOf(t) === null;
}
function I0(t, n, a) {
  if (typeof t != 'function') throw new Error(zt(2));
  if (
    (typeof n == 'function' && typeof a == 'function') ||
    (typeof a == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(zt(0));
  if ((typeof n == 'function' && typeof a > 'u' && ((a = n), (n = void 0)), typeof a < 'u')) {
    if (typeof a != 'function') throw new Error(zt(1));
    return a(I0)(t, n);
  }
  let i = t,
    s = n,
    u = new Map(),
    d = u,
    h = 0,
    p = !1;
  function m() {
    d === u &&
      ((d = new Map()),
      u.forEach((N, D) => {
        d.set(D, N);
      }));
  }
  function g() {
    if (p) throw new Error(zt(3));
    return s;
  }
  function b(N) {
    if (typeof N != 'function') throw new Error(zt(4));
    if (p) throw new Error(zt(5));
    let D = !0;
    m();
    const j = h++;
    return (
      d.set(j, N),
      function () {
        if (D) {
          if (p) throw new Error(zt(6));
          (D = !1), m(), d.delete(j), (u = null);
        }
      }
    );
  }
  function v(N) {
    if (!Rh(N)) throw new Error(zt(7));
    if (typeof N.type > 'u') throw new Error(zt(8));
    if (typeof N.type != 'string') throw new Error(zt(17));
    if (p) throw new Error(zt(9));
    try {
      (p = !0), (s = i(s, N));
    } finally {
      p = !1;
    }
    return (
      (u = d).forEach((D) => {
        D();
      }),
      N
    );
  }
  function E(N) {
    if (typeof N != 'function') throw new Error(zt(10));
    (i = N), v({ type: rc.REPLACE });
  }
  function x() {
    const N = b;
    return {
      subscribe(D) {
        if (typeof D != 'object' || D === null) throw new Error(zt(11));
        function j() {
          const _ = D;
          _.next && _.next(g());
        }
        return j(), { unsubscribe: N(j) };
      },
      [Nv]() {
        return this;
      },
    };
  }
  return (
    v({ type: rc.INIT }), { dispatch: v, subscribe: b, getState: g, replaceReducer: E, [Nv]: x }
  );
}
function ZE(t) {
  Object.keys(t).forEach((n) => {
    const a = t[n];
    if (typeof a(void 0, { type: rc.INIT }) > 'u') throw new Error(zt(12));
    if (typeof a(void 0, { type: rc.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(zt(13));
  });
}
function qE(t) {
  const n = Object.keys(t),
    a = {};
  for (let u = 0; u < n.length; u++) {
    const d = n[u];
    typeof t[d] == 'function' && (a[d] = t[d]);
  }
  const i = Object.keys(a);
  let s;
  try {
    ZE(a);
  } catch (u) {
    s = u;
  }
  return function (u = {}, d) {
    if (s) throw s;
    let h = !1;
    const p = {};
    for (let m = 0; m < i.length; m++) {
      const g = i[m],
        b = a[g],
        v = u[g],
        E = b(v, d);
      if (typeof E > 'u') throw (d && d.type, new Error(zt(14)));
      (p[g] = E), (h = h || E !== v);
    }
    return (h = h || i.length !== Object.keys(u).length), h ? p : u;
  };
}
function ac(...t) {
  return t.length === 0
    ? (n) => n
    : t.length === 1
      ? t[0]
      : t.reduce(
          (n, a) =>
            (...i) =>
              n(a(...i))
        );
}
function YE(...t) {
  return (n) => (a, i) => {
    const s = n(a, i);
    let u = () => {
      throw new Error(zt(15));
    };
    const d = { getState: s.getState, dispatch: (p, ...m) => u(p, ...m) },
      h = t.map((p) => p(d));
    return (u = ac(...h)(s.dispatch)), { ...s, dispatch: u };
  };
}
function KE(t) {
  return Rh(t) && 'type' in t && typeof t.type == 'string';
}
var W0 = Symbol.for('immer-nothing'),
  Ov = Symbol.for('immer-draftable'),
  xn = Symbol.for('immer-state');
function Wn(t, ...n) {
  throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`);
}
var ho = Object.getPrototypeOf;
function ri(t) {
  return !!t && !!t[xn];
}
function Ir(t) {
  var n;
  return t
    ? z0(t) ||
        Array.isArray(t) ||
        !!t[Ov] ||
        !!((n = t.constructor) != null && n[Ov]) ||
        wc(t) ||
        kc(t)
    : !1;
}
var HE = Object.prototype.constructor.toString();
function z0(t) {
  if (!t || typeof t != 'object') return !1;
  const n = ho(t);
  if (n === null) return !0;
  const a = Object.hasOwnProperty.call(n, 'constructor') && n.constructor;
  return a === Object ? !0 : typeof a == 'function' && Function.toString.call(a) === HE;
}
function ic(t, n) {
  bc(t) === 0
    ? Reflect.ownKeys(t).forEach((a) => {
        n(a, t[a], t);
      })
    : t.forEach((a, i) => n(i, a, t));
}
function bc(t) {
  const n = t[xn];
  return n ? n.type_ : Array.isArray(t) ? 1 : wc(t) ? 2 : kc(t) ? 3 : 0;
}
function ch(t, n) {
  return bc(t) === 2 ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
}
function V0(t, n, a) {
  const i = bc(t);
  i === 2 ? t.set(n, a) : i === 3 ? t.add(a) : (t[n] = a);
}
function GE(t, n) {
  return t === n ? t !== 0 || 1 / t === 1 / n : t !== t && n !== n;
}
function wc(t) {
  return t instanceof Map;
}
function kc(t) {
  return t instanceof Set;
}
function Xa(t) {
  return t.copy_ || t.base_;
}
function dh(t, n) {
  if (wc(t)) return new Map(t);
  if (kc(t)) return new Set(t);
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  const a = z0(t);
  if (n === !0 || (n === 'class_only' && !a)) {
    const i = Object.getOwnPropertyDescriptors(t);
    delete i[xn];
    let s = Reflect.ownKeys(i);
    for (let u = 0; u < s.length; u++) {
      const d = s[u],
        h = i[d];
      h.writable === !1 && ((h.writable = !0), (h.configurable = !0)),
        (h.get || h.set) &&
          (i[d] = { configurable: !0, writable: !0, enumerable: h.enumerable, value: t[d] });
    }
    return Object.create(ho(t), i);
  } else {
    const i = ho(t);
    if (i !== null && a) return { ...t };
    const s = Object.create(i);
    return Object.assign(s, t);
  }
}
function jh(t, n = !1) {
  return (
    xc(t) ||
      ri(t) ||
      !Ir(t) ||
      (bc(t) > 1 && (t.set = t.add = t.clear = t.delete = XE),
      Object.freeze(t),
      n && Object.entries(t).forEach(([a, i]) => jh(i, !0))),
    t
  );
}
function XE() {
  Wn(2);
}
function xc(t) {
  return Object.isFrozen(t);
}
var JE = {};
function ai(t) {
  const n = JE[t];
  return n || Wn(0, t), n;
}
var al;
function B0() {
  return al;
}
function QE(t, n) {
  return { drafts_: [], parent_: t, immer_: n, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Ev(t, n) {
  n && (ai('Patches'), (t.patches_ = []), (t.inversePatches_ = []), (t.patchListener_ = n));
}
function fh(t) {
  hh(t), t.drafts_.forEach(eD), (t.drafts_ = null);
}
function hh(t) {
  t === al && (al = t.parent_);
}
function Dv(t) {
  return (al = QE(al, t));
}
function eD(t) {
  const n = t[xn];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : (n.revoked_ = !0);
}
function Pv(t, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const a = n.drafts_[0];
  return (
    t !== void 0 && t !== a
      ? (a[xn].modified_ && (fh(n), Wn(4)),
        Ir(t) && ((t = oc(n, t)), n.parent_ || sc(n, t)),
        n.patches_ &&
          ai('Patches').generateReplacementPatches_(a[xn].base_, t, n.patches_, n.inversePatches_))
      : (t = oc(n, a, [])),
    fh(n),
    n.patches_ && n.patchListener_(n.patches_, n.inversePatches_),
    t !== W0 ? t : void 0
  );
}
function oc(t, n, a) {
  if (xc(n)) return n;
  const i = n[xn];
  if (!i) return ic(n, (s, u) => Mv(t, i, n, s, u, a)), n;
  if (i.scope_ !== t) return n;
  if (!i.modified_) return sc(t, i.base_, !0), i.base_;
  if (!i.finalized_) {
    (i.finalized_ = !0), i.scope_.unfinalizedDrafts_--;
    const s = i.copy_;
    let u = s,
      d = !1;
    i.type_ === 3 && ((u = new Set(s)), s.clear(), (d = !0)),
      ic(u, (h, p) => Mv(t, i, s, h, p, a, d)),
      sc(t, s, !1),
      a && t.patches_ && ai('Patches').generatePatches_(i, a, t.patches_, t.inversePatches_);
  }
  return i.copy_;
}
function Mv(t, n, a, i, s, u, d) {
  if (ri(s)) {
    const h = u && n && n.type_ !== 3 && !ch(n.assigned_, i) ? u.concat(i) : void 0,
      p = oc(t, s, h);
    if ((V0(a, i, p), ri(p))) t.canAutoFreeze_ = !1;
    else return;
  } else d && a.add(s);
  if (Ir(s) && !xc(s)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
    oc(t, s),
      (!n || !n.scope_.parent_) &&
        typeof i != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(a, i) &&
        sc(t, s);
  }
}
function sc(t, n, a = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && jh(n, a);
}
function tD(t, n) {
  const a = Array.isArray(t),
    i = {
      type_: a ? 1 : 0,
      scope_: n ? n.scope_ : B0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: n,
      base_: t,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let s = i,
    u = Lh;
  a && ((s = [i]), (u = il));
  const { revoke: d, proxy: h } = Proxy.revocable(s, u);
  return (i.draft_ = h), (i.revoke_ = d), h;
}
var Lh = {
    get(t, n) {
      if (n === xn) return t;
      const a = Xa(t);
      if (!ch(a, n)) return nD(t, a, n);
      const i = a[n];
      return t.finalized_ || !Ir(i)
        ? i
        : i === Gf(t.base_, n)
          ? (Xf(t), (t.copy_[n] = mh(i, t)))
          : i;
    },
    has(t, n) {
      return n in Xa(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(Xa(t));
    },
    set(t, n, a) {
      const i = U0(Xa(t), n);
      if (i != null && i.set) return i.set.call(t.draft_, a), !0;
      if (!t.modified_) {
        const s = Gf(Xa(t), n),
          u = s == null ? void 0 : s[xn];
        if (u && u.base_ === a) return (t.copy_[n] = a), (t.assigned_[n] = !1), !0;
        if (GE(a, s) && (a !== void 0 || ch(t.base_, n))) return !0;
        Xf(t), ph(t);
      }
      return (
        (t.copy_[n] === a && (a !== void 0 || n in t.copy_)) ||
          (Number.isNaN(a) && Number.isNaN(t.copy_[n])) ||
          ((t.copy_[n] = a), (t.assigned_[n] = !0)),
        !0
      );
    },
    deleteProperty(t, n) {
      return (
        Gf(t.base_, n) !== void 0 || n in t.base_
          ? ((t.assigned_[n] = !1), Xf(t), ph(t))
          : delete t.assigned_[n],
        t.copy_ && delete t.copy_[n],
        !0
      );
    },
    getOwnPropertyDescriptor(t, n) {
      const a = Xa(t),
        i = Reflect.getOwnPropertyDescriptor(a, n);
      return (
        i && {
          writable: !0,
          configurable: t.type_ !== 1 || n !== 'length',
          enumerable: i.enumerable,
          value: a[n],
        }
      );
    },
    defineProperty() {
      Wn(11);
    },
    getPrototypeOf(t) {
      return ho(t.base_);
    },
    setPrototypeOf() {
      Wn(12);
    },
  },
  il = {};
ic(Lh, (t, n) => {
  il[t] = function () {
    return (arguments[0] = arguments[0][0]), n.apply(this, arguments);
  };
});
il.deleteProperty = function (t, n) {
  return il.set.call(this, t, n, void 0);
};
il.set = function (t, n, a) {
  return Lh.set.call(this, t[0], n, a, t[0]);
};
function Gf(t, n) {
  const a = t[xn];
  return (a ? Xa(a) : t)[n];
}
function nD(t, n, a) {
  var i;
  const s = U0(n, a);
  return s ? ('value' in s ? s.value : (i = s.get) == null ? void 0 : i.call(t.draft_)) : void 0;
}
function U0(t, n) {
  if (!(n in t)) return;
  let a = ho(t);
  for (; a; ) {
    const i = Object.getOwnPropertyDescriptor(a, n);
    if (i) return i;
    a = ho(a);
  }
}
function ph(t) {
  t.modified_ || ((t.modified_ = !0), t.parent_ && ph(t.parent_));
}
function Xf(t) {
  t.copy_ || (t.copy_ = dh(t.base_, t.scope_.immer_.useStrictShallowCopy_));
}
var rD = class {
  constructor(t) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (n, a, i) => {
        if (typeof n == 'function' && typeof a != 'function') {
          const u = a;
          a = n;
          const d = this;
          return function (h = u, ...p) {
            return d.produce(h, (m) => a.call(this, m, ...p));
          };
        }
        typeof a != 'function' && Wn(6), i !== void 0 && typeof i != 'function' && Wn(7);
        let s;
        if (Ir(n)) {
          const u = Dv(this),
            d = mh(n, void 0);
          let h = !0;
          try {
            (s = a(d)), (h = !1);
          } finally {
            h ? fh(u) : hh(u);
          }
          return Ev(u, i), Pv(s, u);
        } else if (!n || typeof n != 'object') {
          if (
            ((s = a(n)),
            s === void 0 && (s = n),
            s === W0 && (s = void 0),
            this.autoFreeze_ && jh(s, !0),
            i)
          ) {
            const u = [],
              d = [];
            ai('Patches').generateReplacementPatches_(n, s, u, d), i(u, d);
          }
          return s;
        } else Wn(1, n);
      }),
      (this.produceWithPatches = (n, a) => {
        if (typeof n == 'function')
          return (u, ...d) => this.produceWithPatches(u, (h) => n(h, ...d));
        let i, s;
        return [
          this.produce(n, a, (u, d) => {
            (i = u), (s = d);
          }),
          i,
          s,
        ];
      }),
      typeof (t == null ? void 0 : t.autoFreeze) == 'boolean' && this.setAutoFreeze(t.autoFreeze),
      typeof (t == null ? void 0 : t.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Ir(t) || Wn(8), ri(t) && (t = aD(t));
    const n = Dv(this),
      a = mh(t, void 0);
    return (a[xn].isManual_ = !0), hh(n), a;
  }
  finishDraft(t, n) {
    const a = t && t[xn];
    (!a || !a.isManual_) && Wn(9);
    const { scope_: i } = a;
    return Ev(i, n), Pv(void 0, i);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, n) {
    let a;
    for (a = n.length - 1; a >= 0; a--) {
      const s = n[a];
      if (s.path.length === 0 && s.op === 'replace') {
        t = s.value;
        break;
      }
    }
    a > -1 && (n = n.slice(a + 1));
    const i = ai('Patches').applyPatches_;
    return ri(t) ? i(t, n) : this.produce(t, (s) => i(s, n));
  }
};
function mh(t, n) {
  const a = wc(t) ? ai('MapSet').proxyMap_(t, n) : kc(t) ? ai('MapSet').proxySet_(t, n) : tD(t, n);
  return (n ? n.scope_ : B0()).drafts_.push(a), a;
}
function aD(t) {
  return ri(t) || Wn(10, t), Z0(t);
}
function Z0(t) {
  if (!Ir(t) || xc(t)) return t;
  const n = t[xn];
  let a;
  if (n) {
    if (!n.modified_) return n.base_;
    (n.finalized_ = !0), (a = dh(t, n.scope_.immer_.useStrictShallowCopy_));
  } else a = dh(t, !0);
  return (
    ic(a, (i, s) => {
      V0(a, i, Z0(s));
    }),
    n && (n.finalized_ = !1),
    a
  );
}
var Sn = new rD(),
  q0 = Sn.produce;
Sn.produceWithPatches.bind(Sn);
Sn.setAutoFreeze.bind(Sn);
Sn.setUseStrictShallowCopy.bind(Sn);
Sn.applyPatches.bind(Sn);
Sn.createDraft.bind(Sn);
Sn.finishDraft.bind(Sn);
function Y0(t) {
  return ({ dispatch: n, getState: a }) =>
    (i) =>
    (s) =>
      typeof s == 'function' ? s(n, a, t) : i(s);
}
var iD = Y0(),
  oD = Y0,
  sD =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? ac : ac.apply(null, arguments);
        };
function Tv(t, n) {
  function a(...i) {
    if (n) {
      let s = n(...i);
      if (!s) throw new Error(Fr(0));
      return {
        type: t,
        payload: s.payload,
        ...('meta' in s && { meta: s.meta }),
        ...('error' in s && { error: s.error }),
      };
    }
    return { type: t, payload: i[0] };
  }
  return (a.toString = () => `${t}`), (a.type = t), (a.match = (i) => KE(i) && i.type === t), a;
}
var K0 = class Fs extends Array {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, Fs.prototype);
  }
  static get [Symbol.species]() {
    return Fs;
  }
  concat(...n) {
    return super.concat.apply(this, n);
  }
  prepend(...n) {
    return n.length === 1 && Array.isArray(n[0])
      ? new Fs(...n[0].concat(this))
      : new Fs(...n.concat(this));
  }
};
function Rv(t) {
  return Ir(t) ? q0(t, () => {}) : t;
}
function ju(t, n, a) {
  return t.has(n) ? t.get(n) : t.set(n, a(n)).get(n);
}
function lD(t) {
  return typeof t == 'boolean';
}
var uD = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: a = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let u = new K0();
      return n && (lD(n) ? u.push(iD) : u.push(oD(n.extraArgument))), u;
    },
  cD = 'RTK_autoBatch',
  jv = (t) => (n) => {
    setTimeout(n, t);
  },
  dD =
    (t = { type: 'raf' }) =>
    (n) =>
    (...a) => {
      const i = n(...a);
      let s = !0,
        u = !1,
        d = !1;
      const h = new Set(),
        p =
          t.type === 'tick'
            ? queueMicrotask
            : t.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : jv(10)
              : t.type === 'callback'
                ? t.queueNotification
                : jv(t.timeout),
        m = () => {
          (d = !1), u && ((u = !1), h.forEach((g) => g()));
        };
      return Object.assign({}, i, {
        subscribe(g) {
          const b = () => s && g(),
            v = i.subscribe(b);
          return (
            h.add(g),
            () => {
              v(), h.delete(g);
            }
          );
        },
        dispatch(g) {
          var b;
          try {
            return (
              (s = !((b = g == null ? void 0 : g.meta) != null && b[cD])),
              (u = !s),
              u && (d || ((d = !0), p(m))),
              i.dispatch(g)
            );
          } finally {
            s = !0;
          }
        },
      });
    },
  fD = (t) =>
    function (n) {
      const { autoBatch: a = !0 } = n ?? {};
      let i = new K0(t);
      return a && i.push(dD(typeof a == 'object' ? a : void 0)), i;
    };
function hD(t) {
  const n = uD(),
    {
      reducer: a = void 0,
      middleware: i,
      devTools: s = !0,
      preloadedState: u = void 0,
      enhancers: d = void 0,
    } = t || {};
  let h;
  if (typeof a == 'function') h = a;
  else if (Rh(a)) h = qE(a);
  else throw new Error(Fr(1));
  let p;
  typeof i == 'function' ? (p = i(n)) : (p = n());
  let m = ac;
  s && (m = sD({ trace: !1, ...(typeof s == 'object' && s) }));
  const g = YE(...p),
    b = fD(g);
  let v = typeof d == 'function' ? d(b) : b();
  const E = m(...v);
  return I0(h, u, E);
}
function H0(t) {
  const n = {},
    a = [];
  let i;
  const s = {
    addCase(u, d) {
      const h = typeof u == 'string' ? u : u.type;
      if (!h) throw new Error(Fr(28));
      if (h in n) throw new Error(Fr(29));
      return (n[h] = d), s;
    },
    addMatcher(u, d) {
      return a.push({ matcher: u, reducer: d }), s;
    },
    addDefaultCase(u) {
      return (i = u), s;
    },
  };
  return t(s), [n, a, i];
}
function pD(t) {
  return typeof t == 'function';
}
function mD(t, n) {
  let [a, i, s] = H0(n),
    u;
  if (pD(t)) u = () => Rv(t());
  else {
    const h = Rv(t);
    u = () => h;
  }
  function d(h = u(), p) {
    let m = [a[p.type], ...i.filter(({ matcher: g }) => g(p)).map(({ reducer: g }) => g)];
    return (
      m.filter((g) => !!g).length === 0 && (m = [s]),
      m.reduce((g, b) => {
        if (b)
          if (ri(g)) {
            const v = b(g, p);
            return v === void 0 ? g : v;
          } else {
            if (Ir(g)) return q0(g, (v) => b(v, p));
            {
              const v = b(g, p);
              if (v === void 0) {
                if (g === null) return g;
                throw Error('A case reducer on a non-draftable value must not return undefined');
              }
              return v;
            }
          }
        return g;
      }, h)
    );
  }
  return (d.getInitialState = u), d;
}
var gD = Symbol.for('rtk-slice-createasyncthunk');
function yD(t, n) {
  return `${t}/${n}`;
}
function vD({ creators: t } = {}) {
  var n;
  const a = (n = t == null ? void 0 : t.asyncThunk) == null ? void 0 : n[gD];
  return function (i) {
    const { name: s, reducerPath: u = s } = i;
    if (!s) throw new Error(Fr(11));
    const d = (typeof i.reducers == 'function' ? i.reducers(kD()) : i.reducers) || {},
      h = Object.keys(d),
      p = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      m = {
        addCase(M, V) {
          const A = typeof M == 'string' ? M : M.type;
          if (!A) throw new Error(Fr(12));
          if (A in p.sliceCaseReducersByType) throw new Error(Fr(13));
          return (p.sliceCaseReducersByType[A] = V), m;
        },
        addMatcher(M, V) {
          return p.sliceMatchers.push({ matcher: M, reducer: V }), m;
        },
        exposeAction(M, V) {
          return (p.actionCreators[M] = V), m;
        },
        exposeCaseReducer(M, V) {
          return (p.sliceCaseReducersByName[M] = V), m;
        },
      };
    h.forEach((M) => {
      const V = d[M],
        A = { reducerName: M, type: yD(s, M), createNotation: typeof i.reducers == 'function' };
      SD(V) ? CD(A, V, m, a) : xD(A, V, m);
    });
    function g() {
      const [M = {}, V = [], A = void 0] =
          typeof i.extraReducers == 'function' ? H0(i.extraReducers) : [i.extraReducers],
        ee = { ...M, ...p.sliceCaseReducersByType };
      return mD(i.initialState, (te) => {
        for (let H in ee) te.addCase(H, ee[H]);
        for (let H of p.sliceMatchers) te.addMatcher(H.matcher, H.reducer);
        for (let H of V) te.addMatcher(H.matcher, H.reducer);
        A && te.addDefaultCase(A);
      });
    }
    const b = (M) => M,
      v = new Map(),
      E = new WeakMap();
    let x;
    function N(M, V) {
      return x || (x = g()), x(M, V);
    }
    function D() {
      return x || (x = g()), x.getInitialState();
    }
    function j(M, V = !1) {
      function A(te) {
        let H = te[M];
        return typeof H > 'u' && V && (H = ju(E, A, D)), H;
      }
      function ee(te = b) {
        const H = ju(v, V, () => new WeakMap());
        return ju(H, te, () => {
          const me = {};
          for (const [Pe, we] of Object.entries(i.selectors ?? {}))
            me[Pe] = bD(we, te, () => ju(E, te, D), V);
          return me;
        });
      }
      return {
        reducerPath: M,
        getSelectors: ee,
        get selectors() {
          return ee(A);
        },
        selectSlice: A,
      };
    }
    const _ = {
      name: s,
      reducer: N,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: D,
      ...j(u),
      injectInto(M, { reducerPath: V, ...A } = {}) {
        const ee = V ?? u;
        return M.inject({ reducerPath: ee, reducer: N }, A), { ..._, ...j(ee, !0) };
      },
    };
    return _;
  };
}
function bD(t, n, a, i) {
  function s(u, ...d) {
    let h = n(u);
    return typeof h > 'u' && i && (h = a()), t(h, ...d);
  }
  return (s.unwrapped = t), s;
}
var wD = vD();
function kD() {
  function t(n, a) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: n, ...a };
  }
  return (
    (t.withTypes = () => t),
    {
      reducer(n) {
        return Object.assign(
          {
            [n.name](...a) {
              return n(...a);
            },
          }[n.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(n, a) {
        return { _reducerDefinitionType: 'reducerWithPrepare', prepare: n, reducer: a };
      },
      asyncThunk: t,
    }
  );
}
function xD({ type: t, reducerName: n, createNotation: a }, i, s) {
  let u, d;
  if ('reducer' in i) {
    if (a && !_D(i)) throw new Error(Fr(17));
    (u = i.reducer), (d = i.prepare);
  } else u = i;
  s.addCase(t, u)
    .exposeCaseReducer(n, u)
    .exposeAction(n, d ? Tv(t, d) : Tv(t));
}
function SD(t) {
  return t._reducerDefinitionType === 'asyncThunk';
}
function _D(t) {
  return t._reducerDefinitionType === 'reducerWithPrepare';
}
function CD({ type: t, reducerName: n }, a, i, s) {
  if (!s) throw new Error(Fr(18));
  const { payloadCreator: u, fulfilled: d, pending: h, rejected: p, settled: m, options: g } = a,
    b = s(t, u, g);
  i.exposeAction(n, b),
    d && i.addCase(b.fulfilled, d),
    h && i.addCase(b.pending, h),
    p && i.addCase(b.rejected, p),
    m && i.addMatcher(b.settled, m),
    i.exposeCaseReducer(n, {
      fulfilled: d || Lu,
      pending: h || Lu,
      rejected: p || Lu,
      settled: m || Lu,
    });
}
function Lu() {}
function Fr(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const ND = { value: 0 },
  G0 = wD({
    name: 'counter',
    initialState: ND,
    reducers: {
      increment: (t) => {
        t.value += 1;
      },
      decrement: (t) => {
        t.value -= 1;
      },
      incrementByAmount: (t, n) => {
        t.value += n.payload;
      },
    },
  }),
  { increment: TP, decrement: RP, incrementByAmount: jP } = G0.actions,
  OD = G0.reducer,
  ED = hD({ reducer: { counter: OD } });
var Sc = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _c = typeof window > 'u' || 'Deno' in globalThis;
function An() {}
function DD(t, n) {
  return typeof t == 'function' ? t(n) : t;
}
function PD(t) {
  return typeof t == 'number' && t >= 0 && t !== 1 / 0;
}
function MD(t, n) {
  return Math.max(t + (n || 0) - Date.now(), 0);
}
function Lv(t, n) {
  return typeof t == 'function' ? t(n) : t;
}
function TD(t, n) {
  return typeof t == 'function' ? t(n) : t;
}
function Fv(t, n) {
  const { type: a = 'all', exact: i, fetchStatus: s, predicate: u, queryKey: d, stale: h } = t;
  if (d) {
    if (i) {
      if (n.queryHash !== Fh(d, n.options)) return !1;
    } else if (!sl(n.queryKey, d)) return !1;
  }
  if (a !== 'all') {
    const p = n.isActive();
    if ((a === 'active' && !p) || (a === 'inactive' && p)) return !1;
  }
  return !(
    (typeof h == 'boolean' && n.isStale() !== h) ||
    (s && s !== n.state.fetchStatus) ||
    (u && !u(n))
  );
}
function Av(t, n) {
  const { exact: a, status: i, predicate: s, mutationKey: u } = t;
  if (u) {
    if (!n.options.mutationKey) return !1;
    if (a) {
      if (ol(n.options.mutationKey) !== ol(u)) return !1;
    } else if (!sl(n.options.mutationKey, u)) return !1;
  }
  return !((i && n.state.status !== i) || (s && !s(n)));
}
function Fh(t, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || ol)(t);
}
function ol(t) {
  return JSON.stringify(t, (n, a) =>
    gh(a)
      ? Object.keys(a)
          .sort()
          .reduce((i, s) => ((i[s] = a[s]), i), {})
      : a
  );
}
function sl(t, n) {
  return t === n
    ? !0
    : typeof t != typeof n
      ? !1
      : t && n && typeof t == 'object' && typeof n == 'object'
        ? Object.keys(n).every((a) => sl(t[a], n[a]))
        : !1;
}
function X0(t, n) {
  if (t === n) return t;
  const a = $v(t) && $v(n);
  if (a || (gh(t) && gh(n))) {
    const i = a ? t : Object.keys(t),
      s = i.length,
      u = a ? n : Object.keys(n),
      d = u.length,
      h = a ? [] : {};
    let p = 0;
    for (let m = 0; m < d; m++) {
      const g = a ? m : u[m];
      ((!a && i.includes(g)) || a) && t[g] === void 0 && n[g] === void 0
        ? ((h[g] = void 0), p++)
        : ((h[g] = X0(t[g], n[g])), h[g] === t[g] && t[g] !== void 0 && p++);
    }
    return s === d && p === s ? t : h;
  }
  return n;
}
function $v(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function gh(t) {
  if (!Iv(t)) return !1;
  const n = t.constructor;
  if (n === void 0) return !0;
  const a = n.prototype;
  return !(
    !Iv(a) ||
    !a.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function Iv(t) {
  return Object.prototype.toString.call(t) === '[object Object]';
}
function RD(t) {
  return new Promise((n) => {
    setTimeout(n, t);
  });
}
function jD(t, n, a) {
  return typeof a.structuralSharing == 'function'
    ? a.structuralSharing(t, n)
    : a.structuralSharing !== !1
      ? X0(t, n)
      : n;
}
function LD(t, n, a = 0) {
  const i = [...t, n];
  return a && i.length > a ? i.slice(1) : i;
}
function FD(t, n, a = 0) {
  const i = [n, ...t];
  return a && i.length > a ? i.slice(0, -1) : i;
}
var Ah = Symbol();
function J0(t, n) {
  return !t.queryFn && n != null && n.initialPromise
    ? () => n.initialPromise
    : !t.queryFn || t.queryFn === Ah
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
var Ji,
  Za,
  Ss,
  Wv,
  AD =
    ((Wv = class extends Sc {
      constructor() {
        super(),
          Je(this, Ji),
          Je(this, Za),
          Je(this, Ss),
          Ae(this, Ss, (t) => {
            if (!_c && window.addEventListener) {
              const n = () => t();
              return (
                window.addEventListener('visibilitychange', n, !1),
                () => {
                  window.removeEventListener('visibilitychange', n);
                }
              );
            }
          });
      }
      onSubscribe() {
        q(this, Za) || this.setEventListener(q(this, Ss));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = q(this, Za)) == null || t.call(this), Ae(this, Za, void 0));
      }
      setEventListener(t) {
        var n;
        Ae(this, Ss, t),
          (n = q(this, Za)) == null || n.call(this),
          Ae(
            this,
            Za,
            t((a) => {
              typeof a == 'boolean' ? this.setFocused(a) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        q(this, Ji) !== t && (Ae(this, Ji, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof q(this, Ji) == 'boolean'
          ? q(this, Ji)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (Ji = new WeakMap()),
    (Za = new WeakMap()),
    (Ss = new WeakMap()),
    Wv),
  Q0 = new AD(),
  _s,
  qa,
  Cs,
  zv,
  $D =
    ((zv = class extends Sc {
      constructor() {
        super(),
          Je(this, _s, !0),
          Je(this, qa),
          Je(this, Cs),
          Ae(this, Cs, (t) => {
            if (!_c && window.addEventListener) {
              const n = () => t(!0),
                a = () => t(!1);
              return (
                window.addEventListener('online', n, !1),
                window.addEventListener('offline', a, !1),
                () => {
                  window.removeEventListener('online', n), window.removeEventListener('offline', a);
                }
              );
            }
          });
      }
      onSubscribe() {
        q(this, qa) || this.setEventListener(q(this, Cs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = q(this, qa)) == null || t.call(this), Ae(this, qa, void 0));
      }
      setEventListener(t) {
        var n;
        Ae(this, Cs, t),
          (n = q(this, qa)) == null || n.call(this),
          Ae(this, qa, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        q(this, _s) !== t &&
          (Ae(this, _s, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return q(this, _s);
      }
    }),
    (_s = new WeakMap()),
    (qa = new WeakMap()),
    (Cs = new WeakMap()),
    zv),
  lc = new $D();
function ID() {
  let t, n;
  const a = new Promise((s, u) => {
    (t = s), (n = u);
  });
  (a.status = 'pending'), a.catch(() => {});
  function i(s) {
    Object.assign(a, s), delete a.resolve, delete a.reject;
  }
  return (
    (a.resolve = (s) => {
      i({ status: 'fulfilled', value: s }), t(s);
    }),
    (a.reject = (s) => {
      i({ status: 'rejected', reason: s }), n(s);
    }),
    a
  );
}
function WD(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function ew(t) {
  return (t ?? 'online') === 'online' ? lc.isOnline() : !0;
}
var tw = class extends Error {
  constructor(t) {
    super('CancelledError'),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
};
function Jf(t) {
  return t instanceof tw;
}
function nw(t) {
  let n = !1,
    a = 0,
    i = !1,
    s;
  const u = ID(),
    d = (N) => {
      var D;
      i || (v(new tw(N)), (D = t.abort) == null || D.call(t));
    },
    h = () => {
      n = !0;
    },
    p = () => {
      n = !1;
    },
    m = () => Q0.isFocused() && (t.networkMode === 'always' || lc.isOnline()) && t.canRun(),
    g = () => ew(t.networkMode) && t.canRun(),
    b = (N) => {
      var D;
      i || ((i = !0), (D = t.onSuccess) == null || D.call(t, N), s == null || s(), u.resolve(N));
    },
    v = (N) => {
      var D;
      i || ((i = !0), (D = t.onError) == null || D.call(t, N), s == null || s(), u.reject(N));
    },
    E = () =>
      new Promise((N) => {
        var D;
        (s = (j) => {
          (i || m()) && N(j);
        }),
          (D = t.onPause) == null || D.call(t);
      }).then(() => {
        var N;
        (s = void 0), i || (N = t.onContinue) == null || N.call(t);
      }),
    x = () => {
      if (i) return;
      let N;
      const D = a === 0 ? t.initialPromise : void 0;
      try {
        N = D ?? t.fn();
      } catch (j) {
        N = Promise.reject(j);
      }
      Promise.resolve(N)
        .then(b)
        .catch((j) => {
          var _;
          if (i) return;
          const M = t.retry ?? (_c ? 0 : 3),
            V = t.retryDelay ?? WD,
            A = typeof V == 'function' ? V(a, j) : V,
            ee = M === !0 || (typeof M == 'number' && a < M) || (typeof M == 'function' && M(a, j));
          if (n || !ee) {
            v(j);
            return;
          }
          a++,
            (_ = t.onFail) == null || _.call(t, a, j),
            RD(A)
              .then(() => (m() ? void 0 : E()))
              .then(() => {
                n ? v(j) : x();
              });
        });
    };
  return {
    promise: u,
    cancel: d,
    continue: () => (s == null || s(), u),
    cancelRetry: h,
    continueRetry: p,
    canStart: g,
    start: () => (g() ? x() : E().then(x), u),
  };
}
var zD = (t) => setTimeout(t, 0);
function VD() {
  let t = [],
    n = 0,
    a = (h) => {
      h();
    },
    i = (h) => {
      h();
    },
    s = zD;
  const u = (h) => {
      n
        ? t.push(h)
        : s(() => {
            a(h);
          });
    },
    d = () => {
      const h = t;
      (t = []),
        h.length &&
          s(() => {
            i(() => {
              h.forEach((p) => {
                a(p);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let p;
      n++;
      try {
        p = h();
      } finally {
        n--, n || d();
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        u(() => {
          h(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (h) => {
      a = h;
    },
    setBatchNotifyFunction: (h) => {
      i = h;
    },
    setScheduler: (h) => {
      s = h;
    },
  };
}
var en = VD(),
  Qi,
  Vv,
  rw =
    ((Vv = class {
      constructor() {
        Je(this, Qi);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          PD(this.gcTime) &&
            Ae(
              this,
              Qi,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (_c ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        q(this, Qi) && (clearTimeout(q(this, Qi)), Ae(this, Qi, void 0));
      }
    }),
    (Qi = new WeakMap()),
    Vv),
  Ns,
  Os,
  Fn,
  eo,
  Gt,
  Fu,
  to,
  Gn,
  Or,
  Bv,
  BD =
    ((Bv = class extends rw {
      constructor(t) {
        super(),
          Je(this, Gn),
          Je(this, Ns),
          Je(this, Os),
          Je(this, Fn),
          Je(this, eo),
          Je(this, Gt),
          Je(this, Fu),
          Je(this, to),
          Ae(this, to, !1),
          Ae(this, Fu, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Ae(this, eo, t.client),
          Ae(this, Fn, q(this, eo).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Ae(this, Ns, ZD(this.options)),
          (this.state = t.state ?? q(this, Ns)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = q(this, Gt)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...q(this, Fu), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && q(this, Fn).remove(this);
      }
      setData(t, n) {
        const a = jD(this.state.data, t, this.options);
        return (
          Jt(this, Gn, Or).call(this, {
            data: a,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          a
        );
      }
      setState(t, n) {
        Jt(this, Gn, Or).call(this, { type: 'setState', state: t, setStateOptions: n });
      }
      cancel(t) {
        var n, a;
        const i = (n = q(this, Gt)) == null ? void 0 : n.promise;
        return (
          (a = q(this, Gt)) == null || a.cancel(t), i ? i.then(An).catch(An) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(q(this, Ns));
      }
      isActive() {
        return this.observers.some((t) => TD(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Ah ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated || this.state.data === void 0 || !MD(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var t;
        const n = this.observers.find((a) => a.shouldFetchOnWindowFocus());
        n == null || n.refetch({ cancelRefetch: !1 }), (t = q(this, Gt)) == null || t.continue();
      }
      onOnline() {
        var t;
        const n = this.observers.find((a) => a.shouldFetchOnReconnect());
        n == null || n.refetch({ cancelRefetch: !1 }), (t = q(this, Gt)) == null || t.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          q(this, Fn).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (q(this, Gt) &&
              (q(this, to) ? q(this, Gt).cancel({ revert: !0 }) : q(this, Gt).cancelRetry()),
            this.scheduleGc()),
          q(this, Fn).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || Jt(this, Gn, Or).call(this, { type: 'invalidate' });
      }
      fetch(t, n) {
        var a, i, s;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (q(this, Gt)) return q(this, Gt).continueRetry(), q(this, Gt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const g = this.observers.find((b) => b.options.queryFn);
          g && this.setOptions(g.options);
        }
        const u = new AbortController(),
          d = (g) => {
            Object.defineProperty(g, 'signal', {
              enumerable: !0,
              get: () => (Ae(this, to, !0), u.signal),
            });
          },
          h = () => {
            const g = J0(this.options, n),
              b = { client: q(this, eo), queryKey: this.queryKey, meta: this.meta };
            return (
              d(b),
              Ae(this, to, !1),
              this.options.persister ? this.options.persister(g, b, this) : g(b)
            );
          },
          p = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: q(this, eo),
            state: this.state,
            fetchFn: h,
          };
        d(p),
          (a = this.options.behavior) == null || a.onFetch(p, this),
          Ae(this, Os, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((i = p.fetchOptions) == null ? void 0 : i.meta)) &&
            Jt(this, Gn, Or).call(this, {
              type: 'fetch',
              meta: (s = p.fetchOptions) == null ? void 0 : s.meta,
            });
        const m = (g) => {
          var b, v, E, x;
          (Jf(g) && g.silent) || Jt(this, Gn, Or).call(this, { type: 'error', error: g }),
            Jf(g) ||
              ((v = (b = q(this, Fn).config).onError) == null || v.call(b, g, this),
              (x = (E = q(this, Fn).config).onSettled) == null ||
                x.call(E, this.state.data, g, this)),
            this.scheduleGc();
        };
        return (
          Ae(
            this,
            Gt,
            nw({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: p.fetchFn,
              abort: u.abort.bind(u),
              onSuccess: (g) => {
                var b, v, E, x;
                if (g === void 0) {
                  m(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(g);
                } catch (N) {
                  m(N);
                  return;
                }
                (v = (b = q(this, Fn).config).onSuccess) == null || v.call(b, g, this),
                  (x = (E = q(this, Fn).config).onSettled) == null ||
                    x.call(E, g, this.state.error, this),
                  this.scheduleGc();
              },
              onError: m,
              onFail: (g, b) => {
                Jt(this, Gn, Or).call(this, { type: 'failed', failureCount: g, error: b });
              },
              onPause: () => {
                Jt(this, Gn, Or).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Jt(this, Gn, Or).call(this, { type: 'continue' });
              },
              retry: p.options.retry,
              retryDelay: p.options.retryDelay,
              networkMode: p.options.networkMode,
              canRun: () => !0,
            })
          ),
          q(this, Gt).start()
        );
      }
    }),
    (Ns = new WeakMap()),
    (Os = new WeakMap()),
    (Fn = new WeakMap()),
    (eo = new WeakMap()),
    (Gt = new WeakMap()),
    (Fu = new WeakMap()),
    (to = new WeakMap()),
    (Gn = new WeakSet()),
    (Or = function (t) {
      const n = (a) => {
        switch (t.type) {
          case 'failed':
            return { ...a, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case 'pause':
            return { ...a, fetchStatus: 'paused' };
          case 'continue':
            return { ...a, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...a, ...UD(a.data, this.options), fetchMeta: t.meta ?? null };
          case 'success':
            return {
              ...a,
              data: t.data,
              dataUpdateCount: a.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!t.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const i = t.error;
            return Jf(i) && i.revert && q(this, Os)
              ? { ...q(this, Os), fetchStatus: 'idle' }
              : {
                  ...a,
                  error: i,
                  errorUpdateCount: a.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: a.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...a, isInvalidated: !0 };
          case 'setState':
            return { ...a, ...t.state };
        }
      };
      (this.state = n(this.state)),
        en.batch(() => {
          this.observers.forEach((a) => {
            a.onQueryUpdate();
          }),
            q(this, Fn).notify({ query: this, type: 'updated', action: t });
        });
    }),
    Bv);
function UD(t, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ew(n.networkMode) ? 'fetching' : 'paused',
    ...(t === void 0 && { error: null, status: 'pending' }),
  };
}
function ZD(t) {
  const n = typeof t.initialData == 'function' ? t.initialData() : t.initialData,
    a = n !== void 0,
    i = a
      ? typeof t.initialDataUpdatedAt == 'function'
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var Er,
  Uv,
  qD =
    ((Uv = class extends Sc {
      constructor(t = {}) {
        super(), Je(this, Er), (this.config = t), Ae(this, Er, new Map());
      }
      build(t, n, a) {
        const i = n.queryKey,
          s = n.queryHash ?? Fh(i, n);
        let u = this.get(s);
        return (
          u ||
            ((u = new BD({
              client: t,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: a,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(u)),
          u
        );
      }
      add(t) {
        q(this, Er).has(t.queryHash) ||
          (q(this, Er).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const n = q(this, Er).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && q(this, Er).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        en.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return q(this, Er).get(t);
      }
      getAll() {
        return [...q(this, Er).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((a) => Fv(n, a));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((a) => Fv(t, a)) : n;
      }
      notify(t) {
        en.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        en.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        en.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Er = new WeakMap()),
    Uv),
  Dr,
  cn,
  no,
  Pr,
  ma,
  Zv,
  YD =
    ((Zv = class extends rw {
      constructor(t) {
        super(),
          Je(this, Pr),
          Je(this, Dr),
          Je(this, cn),
          Je(this, no),
          (this.mutationId = t.mutationId),
          Ae(this, cn, t.mutationCache),
          Ae(this, Dr, []),
          (this.state = t.state || KD()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        q(this, Dr).includes(t) ||
          (q(this, Dr).push(t),
          this.clearGcTimeout(),
          q(this, cn).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        Ae(
          this,
          Dr,
          q(this, Dr).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          q(this, cn).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        q(this, Dr).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : q(this, cn).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = q(this, no)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var n, a, i, s, u, d, h, p, m, g, b, v, E, x, N, D, j, _, M, V;
        const A = () => {
          Jt(this, Pr, ma).call(this, { type: 'continue' });
        };
        Ae(
          this,
          no,
          nw({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (H, me) => {
              Jt(this, Pr, ma).call(this, { type: 'failed', failureCount: H, error: me });
            },
            onPause: () => {
              Jt(this, Pr, ma).call(this, { type: 'pause' });
            },
            onContinue: A,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => q(this, cn).canRun(this),
          })
        );
        const ee = this.state.status === 'pending',
          te = !q(this, no).canStart();
        try {
          if (ee) A();
          else {
            Jt(this, Pr, ma).call(this, { type: 'pending', variables: t, isPaused: te }),
              await ((a = (n = q(this, cn).config).onMutate) == null ? void 0 : a.call(n, t, this));
            const me = await ((s = (i = this.options).onMutate) == null ? void 0 : s.call(i, t));
            me !== this.state.context &&
              Jt(this, Pr, ma).call(this, {
                type: 'pending',
                context: me,
                variables: t,
                isPaused: te,
              });
          }
          const H = await q(this, no).start();
          return (
            await ((d = (u = q(this, cn).config).onSuccess) == null
              ? void 0
              : d.call(u, H, t, this.state.context, this)),
            await ((p = (h = this.options).onSuccess) == null
              ? void 0
              : p.call(h, H, t, this.state.context)),
            await ((g = (m = q(this, cn).config).onSettled) == null
              ? void 0
              : g.call(m, H, null, this.state.variables, this.state.context, this)),
            await ((v = (b = this.options).onSettled) == null
              ? void 0
              : v.call(b, H, null, t, this.state.context)),
            Jt(this, Pr, ma).call(this, { type: 'success', data: H }),
            H
          );
        } catch (H) {
          try {
            throw (
              (await ((x = (E = q(this, cn).config).onError) == null
                ? void 0
                : x.call(E, H, t, this.state.context, this)),
              await ((D = (N = this.options).onError) == null
                ? void 0
                : D.call(N, H, t, this.state.context)),
              await ((_ = (j = q(this, cn).config).onSettled) == null
                ? void 0
                : _.call(j, void 0, H, this.state.variables, this.state.context, this)),
              await ((V = (M = this.options).onSettled) == null
                ? void 0
                : V.call(M, void 0, H, t, this.state.context)),
              H)
            );
          } finally {
            Jt(this, Pr, ma).call(this, { type: 'error', error: H });
          }
        } finally {
          q(this, cn).runNext(this);
        }
      }
    }),
    (Dr = new WeakMap()),
    (cn = new WeakMap()),
    (no = new WeakMap()),
    (Pr = new WeakSet()),
    (ma = function (t) {
      const n = (a) => {
        switch (t.type) {
          case 'failed':
            return { ...a, failureCount: t.failureCount, failureReason: t.error };
          case 'pause':
            return { ...a, isPaused: !0 };
          case 'continue':
            return { ...a, isPaused: !1 };
          case 'pending':
            return {
              ...a,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...a,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...a,
              data: void 0,
              error: t.error,
              failureCount: a.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = n(this.state)),
        en.batch(() => {
          q(this, Dr).forEach((a) => {
            a.onMutationUpdate(t);
          }),
            q(this, cn).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    Zv);
function KD() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var ga,
  Xn,
  Au,
  qv,
  HD =
    ((qv = class extends Sc {
      constructor(t = {}) {
        super(),
          Je(this, ga),
          Je(this, Xn),
          Je(this, Au),
          (this.config = t),
          Ae(this, ga, new Set()),
          Ae(this, Xn, new Map()),
          Ae(this, Au, 0);
      }
      build(t, n, a) {
        const i = new YD({
          mutationCache: this,
          mutationId: ++eh(this, Au)._,
          options: t.defaultMutationOptions(n),
          state: a,
        });
        return this.add(i), i;
      }
      add(t) {
        q(this, ga).add(t);
        const n = $u(t);
        if (typeof n == 'string') {
          const a = q(this, Xn).get(n);
          a ? a.push(t) : q(this, Xn).set(n, [t]);
        }
        this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        if (q(this, ga).delete(t)) {
          const n = $u(t);
          if (typeof n == 'string') {
            const a = q(this, Xn).get(n);
            if (a)
              if (a.length > 1) {
                const i = a.indexOf(t);
                i !== -1 && a.splice(i, 1);
              } else a[0] === t && q(this, Xn).delete(n);
          }
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        const n = $u(t);
        if (typeof n == 'string') {
          const a = q(this, Xn).get(n),
            i = a == null ? void 0 : a.find((s) => s.state.status === 'pending');
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var n;
        const a = $u(t);
        if (typeof a == 'string') {
          const i =
            (n = q(this, Xn).get(a)) == null ? void 0 : n.find((s) => s !== t && s.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        en.batch(() => {
          q(this, ga).forEach((t) => {
            this.notify({ type: 'removed', mutation: t });
          }),
            q(this, ga).clear(),
            q(this, Xn).clear();
        });
      }
      getAll() {
        return Array.from(q(this, ga));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((a) => Av(n, a));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Av(t, n));
      }
      notify(t) {
        en.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return en.batch(() => Promise.all(t.map((n) => n.continue().catch(An))));
      }
    }),
    (ga = new WeakMap()),
    (Xn = new WeakMap()),
    (Au = new WeakMap()),
    qv);
function $u(t) {
  var n;
  return (n = t.options.scope) == null ? void 0 : n.id;
}
function Yv(t) {
  return {
    onFetch: (n, a) => {
      var i, s, u, d, h;
      const p = n.options,
        m =
          (u =
            (s = (i = n.fetchOptions) == null ? void 0 : i.meta) == null ? void 0 : s.fetchMore) ==
          null
            ? void 0
            : u.direction,
        g = ((d = n.state.data) == null ? void 0 : d.pages) || [],
        b = ((h = n.state.data) == null ? void 0 : h.pageParams) || [];
      let v = { pages: [], pageParams: [] },
        E = 0;
      const x = async () => {
        let N = !1;
        const D = (M) => {
            Object.defineProperty(M, 'signal', {
              enumerable: !0,
              get: () => (
                n.signal.aborted
                  ? (N = !0)
                  : n.signal.addEventListener('abort', () => {
                      N = !0;
                    }),
                n.signal
              ),
            });
          },
          j = J0(n.options, n.fetchOptions),
          _ = async (M, V, A) => {
            if (N) return Promise.reject();
            if (V == null && M.pages.length) return Promise.resolve(M);
            const ee = {
              client: n.client,
              queryKey: n.queryKey,
              pageParam: V,
              direction: A ? 'backward' : 'forward',
              meta: n.options.meta,
            };
            D(ee);
            const te = await j(ee),
              { maxPages: H } = n.options,
              me = A ? FD : LD;
            return { pages: me(M.pages, te, H), pageParams: me(M.pageParams, V, H) };
          };
        if (m && g.length) {
          const M = m === 'backward',
            V = M ? GD : Kv,
            A = { pages: g, pageParams: b },
            ee = V(p, A);
          v = await _(A, ee, M);
        } else {
          const M = t ?? g.length;
          do {
            const V = E === 0 ? (b[0] ?? p.initialPageParam) : Kv(p, v);
            if (E > 0 && V == null) break;
            (v = await _(v, V)), E++;
          } while (E < M);
        }
        return v;
      };
      n.options.persister
        ? (n.fetchFn = () => {
            var N, D;
            return (D = (N = n.options).persister) == null
              ? void 0
              : D.call(
                  N,
                  x,
                  {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal,
                  },
                  a
                );
          })
        : (n.fetchFn = x);
    },
  };
}
function Kv(t, { pages: n, pageParams: a }) {
  const i = n.length - 1;
  return n.length > 0 ? t.getNextPageParam(n[i], n, a[i], a) : void 0;
}
function GD(t, { pages: n, pageParams: a }) {
  var i;
  return n.length > 0
    ? (i = t.getPreviousPageParam) == null
      ? void 0
      : i.call(t, n[0], n, a[0], a)
    : void 0;
}
var wt,
  Ya,
  Ka,
  Es,
  Ds,
  Ha,
  Ps,
  Ms,
  Hv,
  XD =
    ((Hv = class {
      constructor(t = {}) {
        Je(this, wt),
          Je(this, Ya),
          Je(this, Ka),
          Je(this, Es),
          Je(this, Ds),
          Je(this, Ha),
          Je(this, Ps),
          Je(this, Ms),
          Ae(this, wt, t.queryCache || new qD()),
          Ae(this, Ya, t.mutationCache || new HD()),
          Ae(this, Ka, t.defaultOptions || {}),
          Ae(this, Es, new Map()),
          Ae(this, Ds, new Map()),
          Ae(this, Ha, 0);
      }
      mount() {
        eh(this, Ha)._++,
          q(this, Ha) === 1 &&
            (Ae(
              this,
              Ps,
              Q0.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), q(this, wt).onFocus());
              })
            ),
            Ae(
              this,
              Ms,
              lc.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), q(this, wt).onOnline());
              })
            ));
      }
      unmount() {
        var t, n;
        eh(this, Ha)._--,
          q(this, Ha) === 0 &&
            ((t = q(this, Ps)) == null || t.call(this),
            Ae(this, Ps, void 0),
            (n = q(this, Ms)) == null || n.call(this),
            Ae(this, Ms, void 0));
      }
      isFetching(t) {
        return q(this, wt).findAll({ ...t, fetchStatus: 'fetching' }).length;
      }
      isMutating(t) {
        return q(this, Ya).findAll({ ...t, status: 'pending' }).length;
      }
      getQueryData(t) {
        var n;
        const a = this.defaultQueryOptions({ queryKey: t });
        return (n = q(this, wt).get(a.queryHash)) == null ? void 0 : n.state.data;
      }
      ensureQueryData(t) {
        const n = this.defaultQueryOptions(t),
          a = q(this, wt).build(this, n),
          i = a.state.data;
        return i === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale && a.isStaleByTime(Lv(n.staleTime, a)) && this.prefetchQuery(n),
            Promise.resolve(i));
      }
      getQueriesData(t) {
        return q(this, wt)
          .findAll(t)
          .map(({ queryKey: n, state: a }) => {
            const i = a.data;
            return [n, i];
          });
      }
      setQueryData(t, n, a) {
        const i = this.defaultQueryOptions({ queryKey: t }),
          s = q(this, wt).get(i.queryHash),
          u = s == null ? void 0 : s.state.data,
          d = DD(n, u);
        if (d !== void 0)
          return q(this, wt)
            .build(this, i)
            .setData(d, { ...a, manual: !0 });
      }
      setQueriesData(t, n, a) {
        return en.batch(() =>
          q(this, wt)
            .findAll(t)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, n, a)])
        );
      }
      getQueryState(t) {
        var n;
        const a = this.defaultQueryOptions({ queryKey: t });
        return (n = q(this, wt).get(a.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(t) {
        const n = q(this, wt);
        en.batch(() => {
          n.findAll(t).forEach((a) => {
            n.remove(a);
          });
        });
      }
      resetQueries(t, n) {
        const a = q(this, wt);
        return en.batch(
          () => (
            a.findAll(t).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries({ type: 'active', ...t }, n)
          )
        );
      }
      cancelQueries(t, n = {}) {
        const a = { revert: !0, ...n },
          i = en.batch(() =>
            q(this, wt)
              .findAll(t)
              .map((s) => s.cancel(a))
          );
        return Promise.all(i).then(An).catch(An);
      }
      invalidateQueries(t, n = {}) {
        return en.batch(
          () => (
            q(this, wt)
              .findAll(t)
              .forEach((a) => {
                a.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...t,
                    type:
                      (t == null ? void 0 : t.refetchType) ??
                      (t == null ? void 0 : t.type) ??
                      'active',
                  },
                  n
                )
          )
        );
      }
      refetchQueries(t, n = {}) {
        const a = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
          i = en.batch(() =>
            q(this, wt)
              .findAll(t)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let u = s.fetch(void 0, a);
                return (
                  a.throwOnError || (u = u.catch(An)),
                  s.state.fetchStatus === 'paused' ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(i).then(An);
      }
      fetchQuery(t) {
        const n = this.defaultQueryOptions(t);
        n.retry === void 0 && (n.retry = !1);
        const a = q(this, wt).build(this, n);
        return a.isStaleByTime(Lv(n.staleTime, a)) ? a.fetch(n) : Promise.resolve(a.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(An).catch(An);
      }
      fetchInfiniteQuery(t) {
        return (t.behavior = Yv(t.pages)), this.fetchQuery(t);
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(An).catch(An);
      }
      ensureInfiniteQueryData(t) {
        return (t.behavior = Yv(t.pages)), this.ensureQueryData(t);
      }
      resumePausedMutations() {
        return lc.isOnline() ? q(this, Ya).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return q(this, wt);
      }
      getMutationCache() {
        return q(this, Ya);
      }
      getDefaultOptions() {
        return q(this, Ka);
      }
      setDefaultOptions(t) {
        Ae(this, Ka, t);
      }
      setQueryDefaults(t, n) {
        q(this, Es).set(ol(t), { queryKey: t, defaultOptions: n });
      }
      getQueryDefaults(t) {
        const n = [...q(this, Es).values()],
          a = {};
        return (
          n.forEach((i) => {
            sl(t, i.queryKey) && Object.assign(a, i.defaultOptions);
          }),
          a
        );
      }
      setMutationDefaults(t, n) {
        q(this, Ds).set(ol(t), { mutationKey: t, defaultOptions: n });
      }
      getMutationDefaults(t) {
        const n = [...q(this, Ds).values()],
          a = {};
        return (
          n.forEach((i) => {
            sl(t, i.mutationKey) && Object.assign(a, i.defaultOptions);
          }),
          a
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const n = {
          ...q(this, Ka).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          n.queryHash || (n.queryHash = Fh(n.queryKey, n)),
          n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== 'always'),
          n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
          !n.networkMode && n.persister && (n.networkMode = 'offlineFirst'),
          n.queryFn === Ah && (n.enabled = !1),
          n
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...q(this, Ka).mutations,
              ...((t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        q(this, wt).clear(), q(this, Ya).clear();
      }
    }),
    (wt = new WeakMap()),
    (Ya = new WeakMap()),
    (Ka = new WeakMap()),
    (Es = new WeakMap()),
    (Ds = new WeakMap()),
    (Ha = new WeakMap()),
    (Ps = new WeakMap()),
    (Ms = new WeakMap()),
    Hv),
  JD = T.createContext(void 0),
  QD = ({ client: t, children: n }) => (
    T.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    k.jsx(JD.Provider, { value: t, children: n })
  );
const eP = new XD(),
  Te = (t) => typeof t == 'string',
  Ts = () => {
    let t, n;
    const a = new Promise((i, s) => {
      (t = i), (n = s);
    });
    return (a.resolve = t), (a.reject = n), a;
  },
  Gv = (t) => (t == null ? '' : '' + t),
  tP = (t, n, a) => {
    t.forEach((i) => {
      n[i] && (a[i] = n[i]);
    });
  },
  nP = /###/g,
  Xv = (t) => (t && t.indexOf('###') > -1 ? t.replace(nP, '.') : t),
  Jv = (t) => !t || Te(t),
  Ws = (t, n, a) => {
    const i = Te(n) ? n.split('.') : n;
    let s = 0;
    for (; s < i.length - 1; ) {
      if (Jv(t)) return {};
      const u = Xv(i[s]);
      !t[u] && a && (t[u] = new a()),
        Object.prototype.hasOwnProperty.call(t, u) ? (t = t[u]) : (t = {}),
        ++s;
    }
    return Jv(t) ? {} : { obj: t, k: Xv(i[s]) };
  },
  Qv = (t, n, a) => {
    const { obj: i, k: s } = Ws(t, n, Object);
    if (i !== void 0 || n.length === 1) {
      i[s] = a;
      return;
    }
    let u = n[n.length - 1],
      d = n.slice(0, n.length - 1),
      h = Ws(t, d, Object);
    for (; h.obj === void 0 && d.length; )
      (u = `${d[d.length - 1]}.${u}`),
        (d = d.slice(0, d.length - 1)),
        (h = Ws(t, d, Object)),
        h != null && h.obj && typeof h.obj[`${h.k}.${u}`] < 'u' && (h.obj = void 0);
    h.obj[`${h.k}.${u}`] = a;
  },
  rP = (t, n, a, i) => {
    const { obj: s, k: u } = Ws(t, n, Object);
    (s[u] = s[u] || []), s[u].push(a);
  },
  uc = (t, n) => {
    const { obj: a, k: i } = Ws(t, n);
    if (a && Object.prototype.hasOwnProperty.call(a, i)) return a[i];
  },
  aP = (t, n, a) => {
    const i = uc(t, a);
    return i !== void 0 ? i : uc(n, a);
  },
  aw = (t, n, a) => {
    for (const i in n)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in t
          ? Te(t[i]) || t[i] instanceof String || Te(n[i]) || n[i] instanceof String
            ? a && (t[i] = n[i])
            : aw(t[i], n[i], a)
          : (t[i] = n[i]));
    return t;
  },
  ro = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var iP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const oP = (t) => (Te(t) ? t.replace(/[&<>"'\/]/g, (n) => iP[n]) : t);
class sP {
  constructor(n) {
    (this.capacity = n), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(n) {
    const a = this.regExpMap.get(n);
    if (a !== void 0) return a;
    const i = new RegExp(n);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(n, i),
      this.regExpQueue.push(n),
      i
    );
  }
}
const lP = [' ', ',', '?', '!', ';'],
  uP = new sP(20),
  cP = (t, n, a) => {
    (n = n || ''), (a = a || '');
    const i = lP.filter((d) => n.indexOf(d) < 0 && a.indexOf(d) < 0);
    if (i.length === 0) return !0;
    const s = uP.getRegExp(`(${i.map((d) => (d === '?' ? '\\?' : d)).join('|')})`);
    let u = !s.test(t);
    if (!u) {
      const d = t.indexOf(a);
      d > 0 && !s.test(t.substring(0, d)) && (u = !0);
    }
    return u;
  },
  yh = function (t, n) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!t) return;
    if (t[n]) return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : void 0;
    const i = n.split(a);
    let s = t;
    for (let u = 0; u < i.length; ) {
      if (!s || typeof s != 'object') return;
      let d,
        h = '';
      for (let p = u; p < i.length; ++p)
        if ((p !== u && (h += a), (h += i[p]), (d = s[h]), d !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof d) > -1 && p < i.length - 1) continue;
          u += p - u + 1;
          break;
        }
      s = d;
    }
    return s;
  },
  cc = (t) => (t == null ? void 0 : t.replace('_', '-')),
  dP = {
    type: 'logger',
    log(t) {
      this.output('log', t);
    },
    warn(t) {
      this.output('warn', t);
    },
    error(t) {
      this.output('error', t);
    },
    output(t, n) {
      var a, i;
      (i = (a = console == null ? void 0 : console[t]) == null ? void 0 : a.apply) == null ||
        i.call(a, console, n);
    },
  };
class dc {
  constructor(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(n, a);
  }
  init(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = a.prefix || 'i18next:'),
      (this.logger = n || dP),
      (this.options = a),
      (this.debug = a.debug);
  }
  log() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return this.forward(a, 'log', '', !0);
  }
  warn() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return this.forward(a, 'warn', '', !0);
  }
  error() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return this.forward(a, 'error', '');
  }
  deprecate() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return this.forward(a, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(n, a, i, s) {
    return s && !this.debug
      ? null
      : (Te(n[0]) && (n[0] = `${i}${this.prefix} ${n[0]}`), this.logger[a](n));
  }
  create(n) {
    return new dc(this.logger, { prefix: `${this.prefix}:${n}:`, ...this.options });
  }
  clone(n) {
    return (n = n || this.options), (n.prefix = n.prefix || this.prefix), new dc(this.logger, n);
  }
}
var nr = new dc();
class Cc {
  constructor() {
    this.observers = {};
  }
  on(n, a) {
    return (
      n.split(' ').forEach((i) => {
        this.observers[i] || (this.observers[i] = new Map());
        const s = this.observers[i].get(a) || 0;
        this.observers[i].set(a, s + 1);
      }),
      this
    );
  }
  off(n, a) {
    if (this.observers[n]) {
      if (!a) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(a);
    }
  }
  emit(n) {
    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
      i[s - 1] = arguments[s];
    this.observers[n] &&
      Array.from(this.observers[n].entries()).forEach((u) => {
        let [d, h] = u;
        for (let p = 0; p < h; p++) d(...i);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((u) => {
          let [d, h] = u;
          for (let p = 0; p < h; p++) d.apply(d, [n, ...i]);
        });
  }
}
class eb extends Cc {
  constructor(n) {
    let a =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = n || {}),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const a = this.options.ns.indexOf(n);
    a > -1 && this.options.ns.splice(a, 1);
  }
  getResource(n, a, i) {
    var s, u;
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const h = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator,
      p =
        d.ignoreJSONStructure !== void 0 ? d.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let m;
    n.indexOf('.') > -1
      ? (m = n.split('.'))
      : ((m = [n, a]),
        i && (Array.isArray(i) ? m.push(...i) : Te(i) && h ? m.push(...i.split(h)) : m.push(i)));
    const g = uc(this.data, m);
    return (
      !g && !a && !i && n.indexOf('.') > -1 && ((n = m[0]), (a = m[1]), (i = m.slice(2).join('.'))),
      g || !p || !Te(i)
        ? g
        : yh((u = (s = this.data) == null ? void 0 : s[n]) == null ? void 0 : u[a], i, h)
    );
  }
  addResource(n, a, i, s) {
    let u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const d = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let h = [n, a];
    i && (h = h.concat(d ? i.split(d) : i)),
      n.indexOf('.') > -1 && ((h = n.split('.')), (s = a), (a = h[1])),
      this.addNamespaces(a),
      Qv(this.data, h, s),
      u.silent || this.emit('added', n, a, i, s);
  }
  addResources(n, a, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const u in i)
      (Te(i[u]) || Array.isArray(i[u])) && this.addResource(n, a, u, i[u], { silent: !0 });
    s.silent || this.emit('added', n, a, i);
  }
  addResourceBundle(n, a, i, s, u) {
    let d =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      h = [n, a];
    n.indexOf('.') > -1 && ((h = n.split('.')), (s = i), (i = a), (a = h[1])),
      this.addNamespaces(a);
    let p = uc(this.data, h) || {};
    d.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      s ? aw(p, i, u) : (p = { ...p, ...i }),
      Qv(this.data, h, p),
      d.silent || this.emit('added', n, a, i);
  }
  removeResourceBundle(n, a) {
    this.hasResourceBundle(n, a) && delete this.data[n][a],
      this.removeNamespaces(a),
      this.emit('removed', n, a);
  }
  hasResourceBundle(n, a) {
    return this.getResource(n, a) !== void 0;
  }
  getResourceBundle(n, a) {
    return a || (a = this.options.defaultNS), this.getResource(n, a);
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const a = this.getDataByLanguage(n);
    return !!((a && Object.keys(a)) || []).find((i) => a[i] && Object.keys(a[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var iw = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, n, a, i, s) {
    return (
      t.forEach((u) => {
        var d;
        n = ((d = this.processors[u]) == null ? void 0 : d.process(n, a, i, s)) ?? n;
      }),
      n
    );
  },
};
const tb = {},
  nb = (t) => !Te(t) && typeof t != 'boolean' && typeof t != 'number';
class fc extends Cc {
  constructor(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      tP(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        n,
        this
      ),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = nr.create('translator'));
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (n == null) return !1;
    const i = this.resolve(n, a);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(n, a) {
    let i = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ':');
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let u = a.ns || this.options.defaultNS || [];
    const d = i && n.indexOf(i) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !a.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !a.nsSeparator &&
        !cP(n, i, s);
    if (d && !h) {
      const p = n.match(this.interpolator.nestingRegexp);
      if (p && p.length > 0) return { key: n, namespaces: Te(u) ? [u] : u };
      const m = n.split(i);
      (i !== s || (i === s && this.options.ns.indexOf(m[0]) > -1)) && (u = m.shift()),
        (n = m.join(s));
    }
    return { key: n, namespaces: Te(u) ? [u] : u };
  }
  translate(n, a, i) {
    if (
      (typeof a != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (a = this.options.overloadTranslationOptionHandler(arguments)),
      typeof options == 'object' && (a = { ...a }),
      a || (a = {}),
      n == null)
    )
      return '';
    Array.isArray(n) || (n = [String(n)]);
    const s = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails,
      u = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      { key: d, namespaces: h } = this.extractFromKey(n[n.length - 1], a),
      p = h[h.length - 1],
      m = a.lng || this.language,
      g = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((m == null ? void 0 : m.toLowerCase()) === 'cimode') {
      if (g) {
        const we = a.nsSeparator || this.options.nsSeparator;
        return s
          ? {
              res: `${p}${we}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: m,
              usedNS: p,
              usedParams: this.getUsedParamsDetails(a),
            }
          : `${p}${we}${d}`;
      }
      return s
        ? {
            res: d,
            usedKey: d,
            exactUsedKey: d,
            usedLng: m,
            usedNS: p,
            usedParams: this.getUsedParamsDetails(a),
          }
        : d;
    }
    const b = this.resolve(n, a);
    let v = b == null ? void 0 : b.res;
    const E = (b == null ? void 0 : b.usedKey) || d,
      x = (b == null ? void 0 : b.exactUsedKey) || d,
      N = ['[object Number]', '[object Function]', '[object RegExp]'],
      D = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
      j = !this.i18nFormat || this.i18nFormat.handleAsObject,
      _ = a.count !== void 0 && !Te(a.count),
      M = fc.hasDefaultValue(a),
      V = _ ? this.pluralResolver.getSuffix(m, a.count, a) : '',
      A = a.ordinal && _ ? this.pluralResolver.getSuffix(m, a.count, { ordinal: !1 }) : '',
      ee = _ && !a.ordinal && a.count === 0,
      te =
        (ee && a[`defaultValue${this.options.pluralSeparator}zero`]) ||
        a[`defaultValue${V}`] ||
        a[`defaultValue${A}`] ||
        a.defaultValue;
    let H = v;
    j && !v && M && (H = te);
    const me = nb(H),
      Pe = Object.prototype.toString.apply(H);
    if (j && H && me && N.indexOf(Pe) < 0 && !(Te(D) && Array.isArray(H))) {
      if (!a.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const we = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(E, H, { ...a, ns: h })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return s ? ((b.res = we), (b.usedParams = this.getUsedParamsDetails(a)), b) : we;
      }
      if (u) {
        const we = Array.isArray(H),
          ce = we ? [] : {},
          be = we ? x : E;
        for (const Ee in H)
          if (Object.prototype.hasOwnProperty.call(H, Ee)) {
            const Ne = `${be}${u}${Ee}`;
            M && !v
              ? (ce[Ee] = this.translate(Ne, {
                  ...a,
                  defaultValue: nb(te) ? te[Ee] : void 0,
                  joinArrays: !1,
                  ns: h,
                }))
              : (ce[Ee] = this.translate(Ne, { ...a, joinArrays: !1, ns: h })),
              ce[Ee] === Ne && (ce[Ee] = H[Ee]);
          }
        v = ce;
      }
    } else if (j && Te(D) && Array.isArray(v))
      (v = v.join(D)), v && (v = this.extendTranslation(v, n, a, i));
    else {
      let we = !1,
        ce = !1;
      !this.isValidLookup(v) && M && ((we = !0), (v = te)),
        this.isValidLookup(v) || ((ce = !0), (v = d));
      const be =
          (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && ce
            ? void 0
            : v,
        Ee = M && te !== v && this.options.updateMissing;
      if (ce || we || Ee) {
        if ((this.logger.log(Ee ? 'updateKey' : 'missingKey', m, p, d, Ee ? te : v), u)) {
          const oe = this.resolve(d, { ...a, keySeparator: !1 });
          oe &&
            oe.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let Ne = [];
        const z = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          a.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && z && z[0])
          for (let oe = 0; oe < z.length; oe++) Ne.push(z[oe]);
        else
          this.options.saveMissingTo === 'all'
            ? (Ne = this.languageUtils.toResolveHierarchy(a.lng || this.language))
            : Ne.push(a.lng || this.language);
        const G = (oe, Me, C) => {
          var Y;
          const se = M && C !== v ? C : be;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(oe, p, Me, se, Ee, a)
            : (Y = this.backendConnector) != null &&
              Y.saveMissing &&
              this.backendConnector.saveMissing(oe, p, Me, se, Ee, a),
            this.emit('missingKey', oe, p, Me, v);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && _
            ? Ne.forEach((oe) => {
                const Me = this.pluralResolver.getSuffixes(oe, a);
                ee &&
                  a[`defaultValue${this.options.pluralSeparator}zero`] &&
                  Me.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  Me.push(`${this.options.pluralSeparator}zero`),
                  Me.forEach((C) => {
                    G([oe], d + C, a[`defaultValue${C}`] || te);
                  });
              })
            : G(Ne, d, te));
      }
      (v = this.extendTranslation(v, n, a, b, i)),
        ce && v === d && this.options.appendNamespaceToMissingKey && (v = `${p}:${d}`),
        (ce || we) &&
          this.options.parseMissingKeyHandler &&
          (v = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${p}:${d}` : d,
            we ? v : void 0
          ));
    }
    return s ? ((b.res = v), (b.usedParams = this.getUsedParamsDetails(a)), b) : v;
  }
  extendTranslation(n, a, i, s, u) {
    var d,
      h,
      p = this;
    if ((d = this.i18nFormat) != null && d.parse)
      n = this.i18nFormat.parse(
        n,
        { ...this.options.interpolation.defaultVariables, ...i },
        i.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s }
      );
    else if (!i.skipInterpolation) {
      i.interpolation &&
        this.interpolator.init({
          ...i,
          interpolation: { ...this.options.interpolation, ...i.interpolation },
        });
      const b =
        Te(n) &&
        (((h = i == null ? void 0 : i.interpolation) == null ? void 0 : h.skipOnVariables) !==
        void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (b) {
        const x = n.match(this.interpolator.nestingRegexp);
        v = x && x.length;
      }
      let E = i.replace && !Te(i.replace) ? i.replace : i;
      if (
        (this.options.interpolation.defaultVariables &&
          (E = { ...this.options.interpolation.defaultVariables, ...E }),
        (n = this.interpolator.interpolate(n, E, i.lng || this.language || s.usedLng, i)),
        b)
      ) {
        const x = n.match(this.interpolator.nestingRegexp),
          N = x && x.length;
        v < N && (i.nest = !1);
      }
      !i.lng && s && s.res && (i.lng = this.language || s.usedLng),
        i.nest !== !1 &&
          (n = this.interpolator.nest(
            n,
            function () {
              for (var x = arguments.length, N = new Array(x), D = 0; D < x; D++)
                N[D] = arguments[D];
              return (u == null ? void 0 : u[0]) === N[0] && !i.context
                ? (p.logger.warn(
                    `It seems you are nesting recursively key: ${N[0]} in key: ${a[0]}`
                  ),
                  null)
                : p.translate(...N, a);
            },
            i
          )),
        i.interpolation && this.interpolator.reset();
    }
    const m = i.postProcess || this.options.postProcess,
      g = Te(m) ? [m] : m;
    return (
      n != null &&
        g != null &&
        g.length &&
        i.applyPostProcessor !== !1 &&
        (n = iw.handle(
          g,
          n,
          a,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...s, usedParams: this.getUsedParamsDetails(i) }, ...i }
            : i,
          this
        )),
      n
    );
  }
  resolve(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i,
      s,
      u,
      d,
      h;
    return (
      Te(n) && (n = [n]),
      n.forEach((p) => {
        if (this.isValidLookup(i)) return;
        const m = this.extractFromKey(p, a),
          g = m.key;
        s = g;
        let b = m.namespaces;
        this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
        const v = a.count !== void 0 && !Te(a.count),
          E = v && !a.ordinal && a.count === 0,
          x =
            a.context !== void 0 &&
            (Te(a.context) || typeof a.context == 'number') &&
            a.context !== '',
          N = a.lngs
            ? a.lngs
            : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
        b.forEach((D) => {
          var j, _;
          this.isValidLookup(i) ||
            ((h = D),
            !tb[`${N[0]}-${D}`] &&
              (j = this.utils) != null &&
              j.hasLoadedNamespace &&
              !((_ = this.utils) != null && _.hasLoadedNamespace(h)) &&
              ((tb[`${N[0]}-${D}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${N.join(', ')}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            N.forEach((M) => {
              var V;
              if (this.isValidLookup(i)) return;
              d = M;
              const A = [g];
              if ((V = this.i18nFormat) != null && V.addLookupKeys)
                this.i18nFormat.addLookupKeys(A, g, M, D, a);
              else {
                let te;
                v && (te = this.pluralResolver.getSuffix(M, a.count, a));
                const H = `${this.options.pluralSeparator}zero`,
                  me = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (v &&
                    (A.push(g + te),
                    a.ordinal &&
                      te.indexOf(me) === 0 &&
                      A.push(g + te.replace(me, this.options.pluralSeparator)),
                    E && A.push(g + H)),
                  x)
                ) {
                  const Pe = `${g}${this.options.contextSeparator}${a.context}`;
                  A.push(Pe),
                    v &&
                      (A.push(Pe + te),
                      a.ordinal &&
                        te.indexOf(me) === 0 &&
                        A.push(Pe + te.replace(me, this.options.pluralSeparator)),
                      E && A.push(Pe + H));
                }
              }
              let ee;
              for (; (ee = A.pop()); )
                this.isValidLookup(i) || ((u = ee), (i = this.getResource(M, D, ee, a)));
            }));
        });
      }),
      { res: i, usedKey: s, exactUsedKey: u, usedLng: d, usedNS: h }
    );
  }
  isValidLookup(n) {
    return (
      n !== void 0 &&
      !(!this.options.returnNull && n === null) &&
      !(!this.options.returnEmptyString && n === '')
    );
  }
  getResource(n, a, i) {
    var s;
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (s = this.i18nFormat) != null && s.getResource
      ? this.i18nFormat.getResource(n, a, i, u)
      : this.resourceStore.getResource(n, a, i, u);
  }
  getUsedParamsDetails() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const a = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      i = n.replace && !Te(n.replace);
    let s = i ? n.replace : n;
    if (
      (i && typeof n.count < 'u' && (s.count = n.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !i)
    ) {
      s = { ...s };
      for (const u of a) delete s[u];
    }
    return s;
  }
  static hasDefaultValue(n) {
    const a = 'defaultValue';
    for (const i in n)
      if (
        Object.prototype.hasOwnProperty.call(n, i) &&
        a === i.substring(0, a.length) &&
        n[i] !== void 0
      )
        return !0;
    return !1;
  }
}
class rb {
  constructor(n) {
    (this.options = n),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = nr.create('languageUtils'));
  }
  getScriptPartFromCode(n) {
    if (((n = cc(n)), !n || n.indexOf('-') < 0)) return null;
    const a = n.split('-');
    return a.length === 2 || (a.pop(), a[a.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(a.join('-'));
  }
  getLanguagePartFromCode(n) {
    if (((n = cc(n)), !n || n.indexOf('-') < 0)) return n;
    const a = n.split('-');
    return this.formatLanguageCode(a[0]);
  }
  formatLanguageCode(n) {
    if (Te(n) && n.indexOf('-') > -1) {
      let a;
      try {
        a = Intl.getCanonicalLocales(n)[0];
      } catch {}
      return (
        a && this.options.lowerCaseLng && (a = a.toLowerCase()),
        a || (this.options.lowerCaseLng ? n.toLowerCase() : n)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
  }
  isSupportedCode(n) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (n = this.getLanguagePartFromCode(n)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1
    );
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let a;
    return (
      n.forEach((i) => {
        if (a) return;
        const s = this.formatLanguageCode(i);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (a = s);
      }),
      !a &&
        this.options.supportedLngs &&
        n.forEach((i) => {
          if (a) return;
          const s = this.getScriptPartFromCode(i);
          if (this.isSupportedCode(s)) return (a = s);
          const u = this.getLanguagePartFromCode(i);
          if (this.isSupportedCode(u)) return (a = u);
          a = this.options.supportedLngs.find((d) => {
            if (
              d === u ||
              (!(d.indexOf('-') < 0 && u.indexOf('-') < 0) &&
                ((d.indexOf('-') > 0 &&
                  u.indexOf('-') < 0 &&
                  d.substring(0, d.indexOf('-')) === u) ||
                  (d.indexOf(u) === 0 && u.length > 1)))
            )
              return d;
          });
        }),
      a || (a = this.getFallbackCodes(this.options.fallbackLng)[0]),
      a
    );
  }
  getFallbackCodes(n, a) {
    if (!n) return [];
    if ((typeof n == 'function' && (n = n(a)), Te(n) && (n = [n]), Array.isArray(n))) return n;
    if (!a) return n.default || [];
    let i = n[a];
    return (
      i || (i = n[this.getScriptPartFromCode(a)]),
      i || (i = n[this.formatLanguageCode(a)]),
      i || (i = n[this.getLanguagePartFromCode(a)]),
      i || (i = n.default),
      i || []
    );
  }
  toResolveHierarchy(n, a) {
    const i = this.getFallbackCodes(a || this.options.fallbackLng || [], n),
      s = [],
      u = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? s.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      Te(n) && (n.indexOf('-') > -1 || n.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && u(this.formatLanguageCode(n)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            u(this.getScriptPartFromCode(n)),
          this.options.load !== 'currentOnly' && u(this.getLanguagePartFromCode(n)))
        : Te(n) && u(this.formatLanguageCode(n)),
      i.forEach((d) => {
        s.indexOf(d) < 0 && u(this.formatLanguageCode(d));
      }),
      s
    );
  }
}
const ab = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  ib = {
    select: (t) => (t === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class fP {
  constructor(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = n),
      (this.options = a),
      (this.logger = nr.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(n, a) {
    this.rules[n] = a;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = cc(n === 'dev' ? 'en' : n),
      s = a.ordinal ? 'ordinal' : 'cardinal',
      u = JSON.stringify({ cleanedCode: i, type: s });
    if (u in this.pluralRulesCache) return this.pluralRulesCache[u];
    let d;
    try {
      d = new Intl.PluralRules(i, { type: s });
    } catch {
      if (!Intl) return this.logger.error('No Intl support, please use an Intl polyfill!'), ib;
      if (!n.match(/-|_/)) return ib;
      const h = this.languageUtils.getLanguagePartFromCode(n);
      d = this.getRule(h, a);
    }
    return (this.pluralRulesCache[u] = d), d;
  }
  needsPlural(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = this.getRule(n, a);
    return (
      i || (i = this.getRule('dev', a)),
      (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(n, a) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(n, i).map((s) => `${a}${s}`);
  }
  getSuffixes(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = this.getRule(n, a);
    return (
      i || (i = this.getRule('dev', a)),
      i
        ? i
            .resolvedOptions()
            .pluralCategories.sort((s, u) => ab[s] - ab[u])
            .map(
              (s) =>
                `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ''}${s}`
            )
        : []
    );
  }
  getSuffix(n, a) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(n, i);
    return s
      ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ''}${s.select(a)}`
      : (this.logger.warn(`no plural rule found for: ${n}`), this.getSuffix('dev', a, i));
  }
}
const ob = function (t, n, a) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      u = aP(t, n, a);
    return !u && s && Te(a) && ((u = yh(t, a, i)), u === void 0 && (u = yh(n, a, i))), u;
  },
  Qf = (t) => t.replace(/\$/g, '$$$$');
class hP {
  constructor() {
    var n;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = nr.create('interpolator')),
      (this.options = a),
      (this.format =
        ((n = a == null ? void 0 : a.interpolation) == null ? void 0 : n.format) || ((i) => i)),
      this.init(a);
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n.interpolation || (n.interpolation = { escapeValue: !0 });
    const {
      escape: a,
      escapeValue: i,
      useRawValueToEscape: s,
      prefix: u,
      prefixEscaped: d,
      suffix: h,
      suffixEscaped: p,
      formatSeparator: m,
      unescapeSuffix: g,
      unescapePrefix: b,
      nestingPrefix: v,
      nestingPrefixEscaped: E,
      nestingSuffix: x,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: D,
      maxReplaces: j,
      alwaysFormat: _,
    } = n.interpolation;
    (this.escape = a !== void 0 ? a : oP),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = u ? ro(u) : d || '{{'),
      (this.suffix = h ? ro(h) : p || '}}'),
      (this.formatSeparator = m || ','),
      (this.unescapePrefix = g ? '' : b || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : g || ''),
      (this.nestingPrefix = v ? ro(v) : E || ro('$t(')),
      (this.nestingSuffix = x ? ro(x) : N || ro(')')),
      (this.nestingOptionsSeparator = D || ','),
      (this.maxReplaces = j || 1e3),
      (this.alwaysFormat = _ !== void 0 ? _ : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (a, i) =>
      (a == null ? void 0 : a.source) === i ? ((a.lastIndex = 0), a) : new RegExp(i, 'g');
    (this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = n(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = n(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(n, a, i, s) {
    var u;
    let d, h, p;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (E) => {
        if (E.indexOf(this.formatSeparator) < 0) {
          const j = ob(a, m, E, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(j, void 0, i, { ...s, ...a, interpolationkey: E })
            : j;
        }
        const x = E.split(this.formatSeparator),
          N = x.shift().trim(),
          D = x.join(this.formatSeparator).trim();
        return this.format(
          ob(a, m, N, this.options.keySeparator, this.options.ignoreJSONStructure),
          D,
          i,
          { ...s, ...a, interpolationkey: N }
        );
      };
    this.resetRegExp();
    const b =
        (s == null ? void 0 : s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      v =
        ((u = s == null ? void 0 : s.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (E) => Qf(E) },
        { regex: this.regexp, safeValue: (E) => (this.escapeValue ? Qf(this.escape(E)) : Qf(E)) },
      ].forEach((E) => {
        for (p = 0; (d = E.regex.exec(n)); ) {
          const x = d[1].trim();
          if (((h = g(x)), h === void 0))
            if (typeof b == 'function') {
              const D = b(n, d, s);
              h = Te(D) ? D : '';
            } else if (s && Object.prototype.hasOwnProperty.call(s, x)) h = '';
            else if (v) {
              h = d[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${x} for interpolating ${n}`), (h = '');
          else !Te(h) && !this.useRawValueToEscape && (h = Gv(h));
          const N = E.safeValue(h);
          if (
            ((n = n.replace(d[0], N)),
            v
              ? ((E.regex.lastIndex += h.length), (E.regex.lastIndex -= d[0].length))
              : (E.regex.lastIndex = 0),
            p++,
            p >= this.maxReplaces)
          )
            break;
        }
      }),
      n
    );
  }
  nest(n, a) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s,
      u,
      d;
    const h = (p, m) => {
      const g = this.nestingOptionsSeparator;
      if (p.indexOf(g) < 0) return p;
      const b = p.split(new RegExp(`${g}[ ]*{`));
      let v = `{${b[1]}`;
      (p = b[0]), (v = this.interpolate(v, d));
      const E = v.match(/'/g),
        x = v.match(/"/g);
      ((((E == null ? void 0 : E.length) ?? 0) % 2 === 0 && !x) || x.length % 2 !== 0) &&
        (v = v.replace(/'/g, '"'));
      try {
        (d = JSON.parse(v)), m && (d = { ...m, ...d });
      } catch (N) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${p}`, N),
          `${p}${g}${v}`
        );
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, p;
    };
    for (; (s = this.nestingRegexp.exec(n)); ) {
      let p = [];
      (d = { ...i }),
        (d = d.replace && !Te(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let m = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const g = s[1].split(this.formatSeparator).map((b) => b.trim());
        (s[1] = g.shift()), (p = g), (m = !0);
      }
      if (((u = a(h.call(this, s[1].trim(), d), d)), u && s[0] === n && !Te(u))) return u;
      Te(u) || (u = Gv(u)),
        u || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${n}`), (u = '')),
        m &&
          (u = p.reduce(
            (g, b) => this.format(g, b, i.lng, { ...i, interpolationkey: s[1].trim() }),
            u.trim()
          )),
        (n = n.replace(s[0], u)),
        (this.regexp.lastIndex = 0);
    }
    return n;
  }
}
const pP = (t) => {
    let n = t.toLowerCase().trim();
    const a = {};
    if (t.indexOf('(') > -1) {
      const i = t.split('(');
      n = i[0].toLowerCase().trim();
      const s = i[1].substring(0, i[1].length - 1);
      n === 'currency' && s.indexOf(':') < 0
        ? a.currency || (a.currency = s.trim())
        : n === 'relativetime' && s.indexOf(':') < 0
          ? a.range || (a.range = s.trim())
          : s.split(';').forEach((u) => {
              if (u) {
                const [d, ...h] = u.split(':'),
                  p = h
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  m = d.trim();
                a[m] || (a[m] = p),
                  p === 'false' && (a[m] = !1),
                  p === 'true' && (a[m] = !0),
                  isNaN(p) || (a[m] = parseInt(p, 10));
              }
            });
    }
    return { formatName: n, formatOptions: a };
  },
  ao = (t) => {
    const n = {};
    return (a, i, s) => {
      let u = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (u = { ...u, [s.interpolationkey]: void 0 });
      const d = i + JSON.stringify(u);
      let h = n[d];
      return h || ((h = t(cc(i), s)), (n[d] = h)), h(a);
    };
  };
class mP {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = nr.create('formatter')),
      (this.options = n),
      (this.formats = {
        number: ao((a, i) => {
          const s = new Intl.NumberFormat(a, { ...i });
          return (u) => s.format(u);
        }),
        currency: ao((a, i) => {
          const s = new Intl.NumberFormat(a, { ...i, style: 'currency' });
          return (u) => s.format(u);
        }),
        datetime: ao((a, i) => {
          const s = new Intl.DateTimeFormat(a, { ...i });
          return (u) => s.format(u);
        }),
        relativetime: ao((a, i) => {
          const s = new Intl.RelativeTimeFormat(a, { ...i });
          return (u) => s.format(u, i.range || 'day');
        }),
        list: ao((a, i) => {
          const s = new Intl.ListFormat(a, { ...i });
          return (u) => s.format(u);
        }),
      }),
      this.init(n);
  }
  init(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    this.formatSeparator = a.interpolation.formatSeparator || ',';
  }
  add(n, a) {
    this.formats[n.toLowerCase().trim()] = a;
  }
  addCached(n, a) {
    this.formats[n.toLowerCase().trim()] = ao(a);
  }
  format(n, a, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const u = a.split(this.formatSeparator);
    if (
      u.length > 1 &&
      u[0].indexOf('(') > 1 &&
      u[0].indexOf(')') < 0 &&
      u.find((d) => d.indexOf(')') > -1)
    ) {
      const d = u.findIndex((h) => h.indexOf(')') > -1);
      u[0] = [u[0], ...u.splice(1, d)].join(this.formatSeparator);
    }
    return u.reduce((d, h) => {
      var p;
      const { formatName: m, formatOptions: g } = pP(h);
      if (this.formats[m]) {
        let b = d;
        try {
          const v =
              ((p = s == null ? void 0 : s.formatParams) == null
                ? void 0
                : p[s.interpolationkey]) || {},
            E = v.locale || v.lng || s.locale || s.lng || i;
          b = this.formats[m](d, E, { ...g, ...s, ...v });
        } catch (v) {
          this.logger.warn(v);
        }
        return b;
      } else this.logger.warn(`there was no format function for ${m}`);
      return d;
    }, n);
  }
}
const gP = (t, n) => {
  t.pending[n] !== void 0 && (delete t.pending[n], t.pendingCount--);
};
class yP extends Cc {
  constructor(n, a, i) {
    var s, u;
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = n),
      (this.store = a),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = d),
      (this.logger = nr.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = d.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5),
      (this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (u = (s = this.backend) == null ? void 0 : s.init) == null || u.call(s, i, d.backend, d);
  }
  queueLoad(n, a, i, s) {
    const u = {},
      d = {},
      h = {},
      p = {};
    return (
      n.forEach((m) => {
        let g = !0;
        a.forEach((b) => {
          const v = `${m}|${b}`;
          !i.reload && this.store.hasResourceBundle(m, b)
            ? (this.state[v] = 2)
            : this.state[v] < 0 ||
              (this.state[v] === 1
                ? d[v] === void 0 && (d[v] = !0)
                : ((this.state[v] = 1),
                  (g = !1),
                  d[v] === void 0 && (d[v] = !0),
                  u[v] === void 0 && (u[v] = !0),
                  p[b] === void 0 && (p[b] = !0)));
        }),
          g || (h[m] = !0);
      }),
      (Object.keys(u).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(u),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(p),
      }
    );
  }
  loaded(n, a, i) {
    const s = n.split('|'),
      u = s[0],
      d = s[1];
    a && this.emit('failedLoading', u, d, a),
      !a && i && this.store.addResourceBundle(u, d, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[n] = a ? -1 : 2),
      a && i && (this.state[n] = 0);
    const h = {};
    this.queue.forEach((p) => {
      rP(p.loaded, [u], d),
        gP(p, n),
        a && p.errors.push(a),
        p.pendingCount === 0 &&
          !p.done &&
          (Object.keys(p.loaded).forEach((m) => {
            h[m] || (h[m] = {});
            const g = p.loaded[m];
            g.length &&
              g.forEach((b) => {
                h[m][b] === void 0 && (h[m][b] = !0);
              });
          }),
          (p.done = !0),
          p.errors.length ? p.callback(p.errors) : p.callback());
    }),
      this.emit('loaded', h),
      (this.queue = this.queue.filter((p) => !p.done));
  }
  read(n, a, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!n.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: n, ns: a, fcName: i, tried: s, wait: u, callback: d });
      return;
    }
    this.readingCalls++;
    const h = (m, g) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const b = this.waitingReads.shift();
          this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback);
        }
        if (m && g && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, n, a, i, s + 1, u * 2, d);
          }, u);
          return;
        }
        d(m, g);
      },
      p = this.backend[i].bind(this.backend);
    if (p.length === 2) {
      try {
        const m = p(n, a);
        m && typeof m.then == 'function' ? m.then((g) => h(null, g)).catch(h) : h(null, m);
      } catch (m) {
        h(m);
      }
      return;
    }
    return p(n, a, h);
  }
  prepareLoading(n, a) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), s && s()
      );
    Te(n) && (n = this.languageUtils.toResolveHierarchy(n)), Te(a) && (a = [a]);
    const u = this.queueLoad(n, a, i, s);
    if (!u.toLoad.length) return u.pending.length || s(), null;
    u.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(n, a, i) {
    this.prepareLoading(n, a, {}, i);
  }
  reload(n, a, i) {
    this.prepareLoading(n, a, { reload: !0 }, i);
  }
  loadOne(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const i = n.split('|'),
      s = i[0],
      u = i[1];
    this.read(s, u, 'read', void 0, void 0, (d, h) => {
      d && this.logger.warn(`${a}loading namespace ${u} for language ${s} failed`, d),
        !d && h && this.logger.log(`${a}loaded namespace ${u} for language ${s}`, h),
        this.loaded(n, d, h);
    });
  }
  saveMissing(n, a, i, s, u) {
    var d, h, p, m, g;
    let b = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      v = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (
      (h = (d = this.services) == null ? void 0 : d.utils) != null &&
      h.hasLoadedNamespace &&
      !((m = (p = this.services) == null ? void 0 : p.utils) != null && m.hasLoadedNamespace(a))
    ) {
      this.logger.warn(
        `did not save key "${i}" as the namespace "${a}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(i == null || i === '')) {
      if ((g = this.backend) != null && g.create) {
        const E = { ...b, isUpdate: u },
          x = this.backend.create.bind(this.backend);
        if (x.length < 6)
          try {
            let N;
            x.length === 5 ? (N = x(n, a, i, s, E)) : (N = x(n, a, i, s)),
              N && typeof N.then == 'function' ? N.then((D) => v(null, D)).catch(v) : v(null, N);
          } catch (N) {
            v(N);
          }
        else x(n, a, i, s, v, E);
      }
      !n || !n[0] || this.store.addResource(n[0], a, i, s);
    }
  }
}
const sb = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (t) => {
      let n = {};
      if (
        (typeof t[1] == 'object' && (n = t[1]),
        Te(t[1]) && (n.defaultValue = t[1]),
        Te(t[2]) && (n.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const a = t[3] || t[2];
        Object.keys(a).forEach((i) => {
          n[i] = a[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (t) => t,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  lb = (t) => {
    var n, a;
    return (
      Te(t.ns) && (t.ns = [t.ns]),
      Te(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
      Te(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
      ((a = (n = t.supportedLngs) == null ? void 0 : n.indexOf) == null
        ? void 0
        : a.call(n, 'cimode')) < 0 && (t.supportedLngs = t.supportedLngs.concat(['cimode'])),
      typeof t.initImmediate == 'boolean' && (t.initAsync = t.initImmediate),
      t
    );
  },
  Iu = () => {},
  vP = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
      typeof t[n] == 'function' && (t[n] = t[n].bind(t));
    });
  };
class ll extends Cc {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = lb(n)),
      (this.services = {}),
      (this.logger = nr),
      (this.modules = { external: [] }),
      vP(this),
      a && !this.isInitialized && !n.isClone)
    ) {
      if (!this.options.initAsync) return this.init(n, a), this;
      setTimeout(() => {
        this.init(n, a);
      }, 0);
    }
  }
  init() {
    var n = this;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      i = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof a == 'function' && ((i = a), (a = {})),
      a.defaultNS == null &&
        a.ns &&
        (Te(a.ns)
          ? (a.defaultNS = a.ns)
          : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0]));
    const s = sb();
    (this.options = { ...s, ...this.options, ...lb(a) }),
      (this.options.interpolation = { ...s.interpolation, ...this.options.interpolation }),
      a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
      a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
    const u = (p) => (p ? (typeof p == 'function' ? new p() : p) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? nr.init(u(this.modules.logger), this.options)
        : nr.init(null, this.options);
      let p;
      this.modules.formatter ? (p = this.modules.formatter) : (p = mP);
      const m = new rb(this.options);
      this.store = new eb(this.options.resources, this.options);
      const g = this.services;
      (g.logger = nr),
        (g.resourceStore = this.store),
        (g.languageUtils = m),
        (g.pluralResolver = new fP(m, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        p &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((g.formatter = u(p)),
          g.formatter.init(g, this.options),
          (this.options.interpolation.format = g.formatter.format.bind(g.formatter))),
        (g.interpolator = new hP(this.options)),
        (g.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (g.backendConnector = new yP(u(this.modules.backend), g.resourceStore, g, this.options)),
        g.backendConnector.on('*', function (b) {
          for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), x = 1; x < v; x++)
            E[x - 1] = arguments[x];
          n.emit(b, ...E);
        }),
        this.modules.languageDetector &&
          ((g.languageDetector = u(this.modules.languageDetector)),
          g.languageDetector.init &&
            g.languageDetector.init(g, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((g.i18nFormat = u(this.modules.i18nFormat)),
          g.i18nFormat.init && g.i18nFormat.init(this)),
        (this.translator = new fc(this.services, this.options)),
        this.translator.on('*', function (b) {
          for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), x = 1; x < v; x++)
            E[x - 1] = arguments[x];
          n.emit(b, ...E);
        }),
        this.modules.external.forEach((b) => {
          b.init && b.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = Iu),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      p.length > 0 && p[0] !== 'dev' && (this.options.lng = p[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (p) => {
          this[p] = function () {
            return n.store[p](...arguments);
          };
        }
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((p) => {
        this[p] = function () {
          return n.store[p](...arguments), n;
        };
      });
    const d = Ts(),
      h = () => {
        const p = (m, g) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            d.resolve(g),
            i(m, g);
        };
        if (this.languages && !this.isInitialized) return p(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, p);
      };
    return this.options.resources || !this.options.initAsync ? h() : setTimeout(h, 0), d;
  }
  loadResources(n) {
    var a, i;
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Iu;
    const u = Te(n) ? n : this.language;
    if (
      (typeof n == 'function' && (s = n),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (u == null ? void 0 : u.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const d = [],
        h = (p) => {
          !p ||
            p === 'cimode' ||
            this.services.languageUtils.toResolveHierarchy(p).forEach((m) => {
              m !== 'cimode' && d.indexOf(m) < 0 && d.push(m);
            });
        };
      u
        ? h(u)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((p) => h(p)),
        (i = (a = this.options.preload) == null ? void 0 : a.forEach) == null ||
          i.call(a, (p) => h(p)),
        this.services.backendConnector.load(d, this.options.ns, (p) => {
          !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            s(p);
        });
    } else s(null);
  }
  reloadResources(n, a, i) {
    const s = Ts();
    return (
      typeof n == 'function' && ((i = n), (n = void 0)),
      typeof a == 'function' && ((i = a), (a = void 0)),
      n || (n = this.languages),
      a || (a = this.options.ns),
      i || (i = Iu),
      this.services.backendConnector.reload(n, a, (u) => {
        s.resolve(), i(u);
      }),
      s
    );
  }
  use(n) {
    if (!n)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!n.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      n.type === 'backend' && (this.modules.backend = n),
      (n.type === 'logger' || (n.log && n.warn && n.error)) && (this.modules.logger = n),
      n.type === 'languageDetector' && (this.modules.languageDetector = n),
      n.type === 'i18nFormat' && (this.modules.i18nFormat = n),
      n.type === 'postProcessor' && iw.addPostProcessor(n),
      n.type === 'formatter' && (this.modules.formatter = n),
      n.type === '3rdParty' && this.modules.external.push(n),
      this
    );
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(['cimode', 'dev'].indexOf(n) > -1)) {
      for (let a = 0; a < this.languages.length; a++) {
        const i = this.languages[a];
        if (!(['cimode', 'dev'].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(n) < 0 &&
        this.store.hasLanguageSomeTranslations(n) &&
        ((this.resolvedLanguage = n), this.languages.unshift(n));
    }
  }
  changeLanguage(n, a) {
    var i = this;
    this.isLanguageChangingTo = n;
    const s = Ts();
    this.emit('languageChanging', n);
    const u = (p) => {
        (this.language = p),
          (this.languages = this.services.languageUtils.toResolveHierarchy(p)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(p);
      },
      d = (p, m) => {
        m
          ? this.isLanguageChangingTo === n &&
            (u(m),
            this.translator.changeLanguage(m),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', m),
            this.logger.log('languageChanged', m))
          : (this.isLanguageChangingTo = void 0),
          s.resolve(function () {
            return i.t(...arguments);
          }),
          a &&
            a(p, function () {
              return i.t(...arguments);
            });
      },
      h = (p) => {
        var m, g;
        !n && !p && this.services.languageDetector && (p = []);
        const b = Te(p) ? p : p && p[0],
          v = this.store.hasLanguageSomeTranslations(b)
            ? b
            : this.services.languageUtils.getBestMatchFromCodes(Te(p) ? [p] : p);
        v &&
          (this.language || u(v),
          this.translator.language || this.translator.changeLanguage(v),
          (g = (m = this.services.languageDetector) == null ? void 0 : m.cacheUserLanguage) ==
            null || g.call(m, v)),
          this.loadResources(v, (E) => {
            d(E, v);
          });
      };
    return (
      !n && this.services.languageDetector && !this.services.languageDetector.async
        ? h(this.services.languageDetector.detect())
        : !n && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(h)
            : this.services.languageDetector.detect(h)
          : h(n),
      s
    );
  }
  getFixedT(n, a, i) {
    var s = this;
    const u = function (d, h) {
      let p;
      if (typeof h != 'object') {
        for (var m = arguments.length, g = new Array(m > 2 ? m - 2 : 0), b = 2; b < m; b++)
          g[b - 2] = arguments[b];
        p = s.options.overloadTranslationOptionHandler([d, h].concat(g));
      } else p = { ...h };
      (p.lng = p.lng || u.lng),
        (p.lngs = p.lngs || u.lngs),
        (p.ns = p.ns || u.ns),
        p.keyPrefix !== '' && (p.keyPrefix = p.keyPrefix || i || u.keyPrefix);
      const v = s.options.keySeparator || '.';
      let E;
      return (
        p.keyPrefix && Array.isArray(d)
          ? (E = d.map((x) => `${p.keyPrefix}${v}${x}`))
          : (E = p.keyPrefix ? `${p.keyPrefix}${v}${d}` : d),
        s.t(E, p)
      );
    };
    return Te(n) ? (u.lng = n) : (u.lngs = n), (u.ns = a), (u.keyPrefix = i), u;
  }
  t() {
    for (var n, a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
    return (n = this.translator) == null ? void 0 : n.translate(...i);
  }
  exists() {
    for (var n, a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
    return (n = this.translator) == null ? void 0 : n.exists(...i);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const i = a.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      u = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === 'cimode') return !0;
    const d = (h, p) => {
      const m = this.services.backendConnector.state[`${h}|${p}`];
      return m === -1 || m === 0 || m === 2;
    };
    if (a.precheck) {
      const h = a.precheck(this, d);
      if (h !== void 0) return h;
    }
    return !!(
      this.hasResourceBundle(i, n) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(i, n) && (!s || d(u, n)))
    );
  }
  loadNamespaces(n, a) {
    const i = Ts();
    return this.options.ns
      ? (Te(n) && (n = [n]),
        n.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          i.resolve(), a && a(s);
        }),
        i)
      : (a && a(), Promise.resolve());
  }
  loadLanguages(n, a) {
    const i = Ts();
    Te(n) && (n = [n]);
    const s = this.options.preload || [],
      u = n.filter((d) => s.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return u.length
      ? ((this.options.preload = s.concat(u)),
        this.loadResources((d) => {
          i.resolve(), a && a(d);
        }),
        i)
      : (a && a(), Promise.resolve());
  }
  dir(n) {
    var a, i;
    if (
      (n ||
        (n =
          this.resolvedLanguage ||
          (((a = this.languages) == null ? void 0 : a.length) > 0
            ? this.languages[0]
            : this.language)),
      !n)
    )
      return 'rtl';
    const s = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      u = ((i = this.services) == null ? void 0 : i.languageUtils) || new rb(sb());
    return s.indexOf(u.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    return new ll(n, a);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Iu;
    const i = n.forkResourceStore;
    i && delete n.forkResourceStore;
    const s = { ...this.options, ...n, isClone: !0 },
      u = new ll(s);
    if (
      ((n.debug !== void 0 || n.prefix !== void 0) && (u.logger = u.logger.clone(n)),
      ['store', 'services', 'language'].forEach((d) => {
        u[d] = this[d];
      }),
      (u.services = { ...this.services }),
      (u.services.utils = { hasLoadedNamespace: u.hasLoadedNamespace.bind(u) }),
      i)
    ) {
      const d = Object.keys(this.store.data).reduce(
        (h, p) => (
          (h[p] = { ...this.store.data[p] }),
          (h[p] = Object.keys(h[p]).reduce((m, g) => ((m[g] = { ...h[p][g] }), m), h[p])),
          h
        ),
        {}
      );
      (u.store = new eb(d, s)), (u.services.resourceStore = u.store);
    }
    return (
      (u.translator = new fc(u.services, s)),
      u.translator.on('*', function (d) {
        for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          p[m - 1] = arguments[m];
        u.emit(d, ...p);
      }),
      u.init(s, a),
      (u.translator.options = s),
      (u.translator.backendConnector.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
      }),
      u
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Yt = ll.createInstance();
Yt.createInstance = ll.createInstance;
Yt.createInstance;
Yt.dir;
Yt.init;
Yt.loadResources;
Yt.reloadResources;
Yt.use;
Yt.changeLanguage;
Yt.getFixedT;
Yt.t;
Yt.exists;
Yt.setDefaultNamespace;
Yt.hasLoadedNamespace;
Yt.loadNamespaces;
Yt.loadLanguages;
const bP =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  wP = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  kP = (t) => wP[t],
  xP = (t) => t.replace(bP, kP);
let ub = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: xP,
};
const SP = (t = {}) => {
    ub = { ...ub, ...t };
  },
  _P = {
    type: '3rdParty',
    init(t) {
      SP(t.options.react);
    },
  },
  CP = 'Welcome to React',
  NP = 'This is demo to show i18n. (aka translation from src/locales/en.json)',
  OP = { welcome: CP, description: NP },
  EP = 'Добро пожаловать в Реактик',
  DP = 'Это дэмо для i18n. (то есть перевода из src/locales/ru.json)',
  PP = { welcome: EP, description: DP };
Yt.use(_P).init({
  resources: { en: { translation: OP }, ru: { translation: PP } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: !1 },
});
function MP(t) {
  Ox.createRoot(t).render(
    k.jsx(T.StrictMode, {
      children: k.jsx(QD, {
        client: eP,
        children: k.jsx(VE, { store: ED, children: k.jsx(U1, { children: k.jsx(OE, {}) }) }),
      }),
    })
  );
}
const cb = document.getElementById('root');
cb && MP(cb);
