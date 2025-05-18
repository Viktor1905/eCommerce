var Ap = (n) => {
  throw TypeError(n);
};
var Bd = (n, t, r) => t.has(n) || Ap('Cannot ' + r);
var $ = (n, t, r) => (Bd(n, t, 'read from private field'), r ? r.call(n) : t.get(n)),
  Ke = (n, t, r) =>
    t.has(n)
      ? Ap('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(n)
        : t.set(n, r),
  ze = (n, t, r, i) => (Bd(n, t, 'write to private field'), i ? i.call(n, r) : t.set(n, r), r),
  Pt = (n, t, r) => (Bd(n, t, 'access private method'), r);
var Ao = (n, t, r, i) => ({
  set _(l) {
    ze(n, t, l, r);
  },
  get _() {
    return $(n, t, i);
  },
});
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const f of o.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = r(l);
    fetch(l.href, o);
  }
})();
function pS(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Hd = { exports: {} },
  xl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kp;
function vS() {
  if (kp) return xl;
  kp = 1;
  var n = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.fragment');
  function r(i, l, o) {
    var f = null;
    if ((o !== void 0 && (f = '' + o), l.key !== void 0 && (f = '' + l.key), 'key' in l)) {
      o = {};
      for (var h in l) h !== 'key' && (o[h] = l[h]);
    } else o = l;
    return (l = o.ref), { $$typeof: n, type: i, key: f, ref: l !== void 0 ? l : null, props: o };
  }
  return (xl.Fragment = t), (xl.jsx = r), (xl.jsxs = r), xl;
}
var Rp;
function bS() {
  return Rp || ((Rp = 1), (Hd.exports = vS())), Hd.exports;
}
var x = bS(),
  Vd = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp;
function _S() {
  if (jp) return Le;
  jp = 1;
  var n = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    o = Symbol.for('react.consumer'),
    f = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function b(T) {
    return T === null || typeof T != 'object'
      ? null
      : ((T = (v && T[v]) || T['@@iterator']), typeof T == 'function' ? T : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    D = {};
  function C(T, G, le) {
    (this.props = T), (this.context = G), (this.refs = D), (this.updater = le || w);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (T, G) {
      if (typeof T != 'object' && typeof T != 'function' && T != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, T, G, 'setState');
    }),
    (C.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, 'forceUpdate');
    });
  function N() {}
  N.prototype = C.prototype;
  function O(T, G, le) {
    (this.props = T), (this.context = G), (this.refs = D), (this.updater = le || w);
  }
  var k = (O.prototype = new N());
  (k.constructor = O), S(k, C.prototype), (k.isPureReactComponent = !0);
  var Y = Array.isArray,
    q = { H: null, A: null, T: null, S: null, V: null },
    K = Object.prototype.hasOwnProperty;
  function W(T, G, le, re, ve, Ve) {
    return (
      (le = Ve.ref), { $$typeof: n, type: T, key: G, ref: le !== void 0 ? le : null, props: Ve }
    );
  }
  function ie(T, G) {
    return W(T.type, G, void 0, void 0, void 0, T.props);
  }
  function te(T) {
    return typeof T == 'object' && T !== null && T.$$typeof === n;
  }
  function _e(T) {
    var G = { '=': '=0', ':': '=2' };
    return (
      '$' +
      T.replace(/[=:]/g, function (le) {
        return G[le];
      })
    );
  }
  var be = /\/+/g;
  function se(T, G) {
    return typeof T == 'object' && T !== null && T.key != null ? _e('' + T.key) : G.toString(36);
  }
  function Se() {}
  function Re(T) {
    switch (T.status) {
      case 'fulfilled':
        return T.value;
      case 'rejected':
        throw T.reason;
      default:
        switch (
          (typeof T.status == 'string'
            ? T.then(Se, Se)
            : ((T.status = 'pending'),
              T.then(
                function (G) {
                  T.status === 'pending' && ((T.status = 'fulfilled'), (T.value = G));
                },
                function (G) {
                  T.status === 'pending' && ((T.status = 'rejected'), (T.reason = G));
                }
              )),
          T.status)
        ) {
          case 'fulfilled':
            return T.value;
          case 'rejected':
            throw T.reason;
        }
    }
    throw T;
  }
  function Me(T, G, le, re, ve) {
    var Ve = typeof T;
    (Ve === 'undefined' || Ve === 'boolean') && (T = null);
    var we = !1;
    if (T === null) we = !0;
    else
      switch (Ve) {
        case 'bigint':
        case 'string':
        case 'number':
          we = !0;
          break;
        case 'object':
          switch (T.$$typeof) {
            case n:
            case t:
              we = !0;
              break;
            case y:
              return (we = T._init), Me(we(T._payload), G, le, re, ve);
          }
      }
    if (we)
      return (
        (ve = ve(T)),
        (we = re === '' ? '.' + se(T, 0) : re),
        Y(ve)
          ? ((le = ''),
            we != null && (le = we.replace(be, '$&/') + '/'),
            Me(ve, G, le, '', function (rn) {
              return rn;
            }))
          : ve != null &&
            (te(ve) &&
              (ve = ie(
                ve,
                le +
                  (ve.key == null || (T && T.key === ve.key)
                    ? ''
                    : ('' + ve.key).replace(be, '$&/') + '/') +
                  we
              )),
            G.push(ve)),
        1
      );
    we = 0;
    var kt = re === '' ? '.' : re + ':';
    if (Y(T))
      for (var at = 0; at < T.length; at++)
        (re = T[at]), (Ve = kt + se(re, at)), (we += Me(re, G, le, Ve, ve));
    else if (((at = b(T)), typeof at == 'function'))
      for (T = at.call(T), at = 0; !(re = T.next()).done; )
        (re = re.value), (Ve = kt + se(re, at++)), (we += Me(re, G, le, Ve, ve));
    else if (Ve === 'object') {
      if (typeof T.then == 'function') return Me(Re(T), G, le, re, ve);
      throw (
        ((G = String(T)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (G === '[object Object]' ? 'object with keys {' + Object.keys(T).join(', ') + '}' : G) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return we;
  }
  function V(T, G, le) {
    if (T == null) return T;
    var re = [],
      ve = 0;
    return (
      Me(T, re, '', '', function (Ve) {
        return G.call(le, Ve, ve++);
      }),
      re
    );
  }
  function I(T) {
    if (T._status === -1) {
      var G = T._result;
      (G = G()),
        G.then(
          function (le) {
            (T._status === 0 || T._status === -1) && ((T._status = 1), (T._result = le));
          },
          function (le) {
            (T._status === 0 || T._status === -1) && ((T._status = 2), (T._result = le));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = G));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var me =
    typeof reportError == 'function'
      ? reportError
      : function (T) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var G = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == 'object' && T !== null && typeof T.message == 'string'
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(G)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', T);
            return;
          }
          console.error(T);
        };
  function xe() {}
  return (
    (Le.Children = {
      map: V,
      forEach: function (T, G, le) {
        V(
          T,
          function () {
            G.apply(this, arguments);
          },
          le
        );
      },
      count: function (T) {
        var G = 0;
        return (
          V(T, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (T) {
        return (
          V(T, function (G) {
            return G;
          }) || []
        );
      },
      only: function (T) {
        if (!te(T))
          throw Error('React.Children.only expected to receive a single React element child.');
        return T;
      },
    }),
    (Le.Component = C),
    (Le.Fragment = r),
    (Le.Profiler = l),
    (Le.PureComponent = O),
    (Le.StrictMode = i),
    (Le.Suspense = m),
    (Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q),
    (Le.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return q.H.useMemoCache(T);
      },
    }),
    (Le.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Le.cloneElement = function (T, G, le) {
      if (T == null) throw Error('The argument must be a React element, but you passed ' + T + '.');
      var re = S({}, T.props),
        ve = T.key,
        Ve = void 0;
      if (G != null)
        for (we in (G.ref !== void 0 && (Ve = void 0), G.key !== void 0 && (ve = '' + G.key), G))
          !K.call(G, we) ||
            we === 'key' ||
            we === '__self' ||
            we === '__source' ||
            (we === 'ref' && G.ref === void 0) ||
            (re[we] = G[we]);
      var we = arguments.length - 2;
      if (we === 1) re.children = le;
      else if (1 < we) {
        for (var kt = Array(we), at = 0; at < we; at++) kt[at] = arguments[at + 2];
        re.children = kt;
      }
      return W(T.type, ve, void 0, void 0, Ve, re);
    }),
    (Le.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: o, _context: T }),
        T
      );
    }),
    (Le.createElement = function (T, G, le) {
      var re,
        ve = {},
        Ve = null;
      if (G != null)
        for (re in (G.key !== void 0 && (Ve = '' + G.key), G))
          K.call(G, re) && re !== 'key' && re !== '__self' && re !== '__source' && (ve[re] = G[re]);
      var we = arguments.length - 2;
      if (we === 1) ve.children = le;
      else if (1 < we) {
        for (var kt = Array(we), at = 0; at < we; at++) kt[at] = arguments[at + 2];
        ve.children = kt;
      }
      if (T && T.defaultProps)
        for (re in ((we = T.defaultProps), we)) ve[re] === void 0 && (ve[re] = we[re]);
      return W(T, Ve, void 0, void 0, null, ve);
    }),
    (Le.createRef = function () {
      return { current: null };
    }),
    (Le.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (Le.isValidElement = te),
    (Le.lazy = function (T) {
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: I };
    }),
    (Le.memo = function (T, G) {
      return { $$typeof: g, type: T, compare: G === void 0 ? null : G };
    }),
    (Le.startTransition = function (T) {
      var G = q.T,
        le = {};
      q.T = le;
      try {
        var re = T(),
          ve = q.S;
        ve !== null && ve(le, re),
          typeof re == 'object' && re !== null && typeof re.then == 'function' && re.then(xe, me);
      } catch (Ve) {
        me(Ve);
      } finally {
        q.T = G;
      }
    }),
    (Le.unstable_useCacheRefresh = function () {
      return q.H.useCacheRefresh();
    }),
    (Le.use = function (T) {
      return q.H.use(T);
    }),
    (Le.useActionState = function (T, G, le) {
      return q.H.useActionState(T, G, le);
    }),
    (Le.useCallback = function (T, G) {
      return q.H.useCallback(T, G);
    }),
    (Le.useContext = function (T) {
      return q.H.useContext(T);
    }),
    (Le.useDebugValue = function () {}),
    (Le.useDeferredValue = function (T, G) {
      return q.H.useDeferredValue(T, G);
    }),
    (Le.useEffect = function (T, G, le) {
      var re = q.H;
      if (typeof le == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return re.useEffect(T, G);
    }),
    (Le.useId = function () {
      return q.H.useId();
    }),
    (Le.useImperativeHandle = function (T, G, le) {
      return q.H.useImperativeHandle(T, G, le);
    }),
    (Le.useInsertionEffect = function (T, G) {
      return q.H.useInsertionEffect(T, G);
    }),
    (Le.useLayoutEffect = function (T, G) {
      return q.H.useLayoutEffect(T, G);
    }),
    (Le.useMemo = function (T, G) {
      return q.H.useMemo(T, G);
    }),
    (Le.useOptimistic = function (T, G) {
      return q.H.useOptimistic(T, G);
    }),
    (Le.useReducer = function (T, G, le) {
      return q.H.useReducer(T, G, le);
    }),
    (Le.useRef = function (T) {
      return q.H.useRef(T);
    }),
    (Le.useState = function (T) {
      return q.H.useState(T);
    }),
    (Le.useSyncExternalStore = function (T, G, le) {
      return q.H.useSyncExternalStore(T, G, le);
    }),
    (Le.useTransition = function () {
      return q.H.useTransition();
    }),
    (Le.version = '19.1.0'),
    Le
  );
}
var zp;
function mc() {
  return zp || ((zp = 1), (Vd.exports = _S())), Vd.exports;
}
var R = mc();
const ee = pS(R);
var qd = { exports: {} },
  wl = {},
  Yd = { exports: {} },
  Zd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Up;
function SS() {
  return (
    Up ||
      ((Up = 1),
      (function (n) {
        function t(V, I) {
          var me = V.length;
          V.push(I);
          e: for (; 0 < me; ) {
            var xe = (me - 1) >>> 1,
              T = V[xe];
            if (0 < l(T, I)) (V[xe] = I), (V[me] = T), (me = xe);
            else break e;
          }
        }
        function r(V) {
          return V.length === 0 ? null : V[0];
        }
        function i(V) {
          if (V.length === 0) return null;
          var I = V[0],
            me = V.pop();
          if (me !== I) {
            V[0] = me;
            e: for (var xe = 0, T = V.length, G = T >>> 1; xe < G; ) {
              var le = 2 * (xe + 1) - 1,
                re = V[le],
                ve = le + 1,
                Ve = V[ve];
              if (0 > l(re, me))
                ve < T && 0 > l(Ve, re)
                  ? ((V[xe] = Ve), (V[ve] = me), (xe = ve))
                  : ((V[xe] = re), (V[le] = me), (xe = le));
              else if (ve < T && 0 > l(Ve, me)) (V[xe] = Ve), (V[ve] = me), (xe = ve);
              else break e;
            }
          }
          return I;
        }
        function l(V, I) {
          var me = V.sortIndex - I.sortIndex;
          return me !== 0 ? me : V.id - I.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var o = performance;
          n.unstable_now = function () {
            return o.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var m = [],
          g = [],
          y = 1,
          v = null,
          b = 3,
          w = !1,
          S = !1,
          D = !1,
          C = !1,
          N = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          k = typeof setImmediate < 'u' ? setImmediate : null;
        function Y(V) {
          for (var I = r(g); I !== null; ) {
            if (I.callback === null) i(g);
            else if (I.startTime <= V) i(g), (I.sortIndex = I.expirationTime), t(m, I);
            else break;
            I = r(g);
          }
        }
        function q(V) {
          if (((D = !1), Y(V), !S))
            if (r(m) !== null) (S = !0), K || ((K = !0), se());
            else {
              var I = r(g);
              I !== null && Me(q, I.startTime - V);
            }
        }
        var K = !1,
          W = -1,
          ie = 5,
          te = -1;
        function _e() {
          return C ? !0 : !(n.unstable_now() - te < ie);
        }
        function be() {
          if (((C = !1), K)) {
            var V = n.unstable_now();
            te = V;
            var I = !0;
            try {
              e: {
                (S = !1), D && ((D = !1), O(W), (W = -1)), (w = !0);
                var me = b;
                try {
                  t: {
                    for (Y(V), v = r(m); v !== null && !(v.expirationTime > V && _e()); ) {
                      var xe = v.callback;
                      if (typeof xe == 'function') {
                        (v.callback = null), (b = v.priorityLevel);
                        var T = xe(v.expirationTime <= V);
                        if (((V = n.unstable_now()), typeof T == 'function')) {
                          (v.callback = T), Y(V), (I = !0);
                          break t;
                        }
                        v === r(m) && i(m), Y(V);
                      } else i(m);
                      v = r(m);
                    }
                    if (v !== null) I = !0;
                    else {
                      var G = r(g);
                      G !== null && Me(q, G.startTime - V), (I = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (b = me), (w = !1);
                }
                I = void 0;
              }
            } finally {
              I ? se() : (K = !1);
            }
          }
        }
        var se;
        if (typeof k == 'function')
          se = function () {
            k(be);
          };
        else if (typeof MessageChannel < 'u') {
          var Se = new MessageChannel(),
            Re = Se.port2;
          (Se.port1.onmessage = be),
            (se = function () {
              Re.postMessage(null);
            });
        } else
          se = function () {
            N(be, 0);
          };
        function Me(V, I) {
          W = N(function () {
            V(n.unstable_now());
          }, I);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (n.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ie = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_next = function (V) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = b;
            }
            var me = b;
            b = I;
            try {
              return V();
            } finally {
              b = me;
            }
          }),
          (n.unstable_requestPaint = function () {
            C = !0;
          }),
          (n.unstable_runWithPriority = function (V, I) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var me = b;
            b = V;
            try {
              return I();
            } finally {
              b = me;
            }
          }),
          (n.unstable_scheduleCallback = function (V, I, me) {
            var xe = n.unstable_now();
            switch (
              (typeof me == 'object' && me !== null
                ? ((me = me.delay), (me = typeof me == 'number' && 0 < me ? xe + me : xe))
                : (me = xe),
              V)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = me + T),
              (V = {
                id: y++,
                callback: I,
                priorityLevel: V,
                startTime: me,
                expirationTime: T,
                sortIndex: -1,
              }),
              me > xe
                ? ((V.sortIndex = me),
                  t(g, V),
                  r(m) === null && V === r(g) && (D ? (O(W), (W = -1)) : (D = !0), Me(q, me - xe)))
                : ((V.sortIndex = T), t(m, V), S || w || ((S = !0), K || ((K = !0), se()))),
              V
            );
          }),
          (n.unstable_shouldYield = _e),
          (n.unstable_wrapCallback = function (V) {
            var I = b;
            return function () {
              var me = b;
              b = I;
              try {
                return V.apply(this, arguments);
              } finally {
                b = me;
              }
            };
          });
      })(Zd)),
    Zd
  );
}
var Lp;
function xS() {
  return Lp || ((Lp = 1), (Yd.exports = SS())), Yd.exports;
}
var Fd = { exports: {} },
  $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp;
function wS() {
  if (Bp) return $t;
  Bp = 1;
  var n = mc();
  function t(m) {
    var g = 'https://react.dev/errors/' + m;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++) g += '&args[]=' + encodeURIComponent(arguments[y]);
    }
    return (
      'Minified React error #' +
      m +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for('react.portal');
  function o(m, g, y) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : '' + v,
      children: m,
      containerInfo: g,
      implementation: y,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, g) {
    if (m === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    ($t.createPortal = function (m, g) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(t(299));
      return o(m, g, null, y);
    }),
    ($t.flushSync = function (m) {
      var g = f.T,
        y = i.p;
      try {
        if (((f.T = null), (i.p = 2), m)) return m();
      } finally {
        (f.T = g), (i.p = y), i.d.f();
      }
    }),
    ($t.preconnect = function (m, g) {
      typeof m == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        i.d.C(m, g));
    }),
    ($t.prefetchDNS = function (m) {
      typeof m == 'string' && i.d.D(m);
    }),
    ($t.preinit = function (m, g) {
      if (typeof m == 'string' && g && typeof g.as == 'string') {
        var y = g.as,
          v = h(y, g.crossOrigin),
          b = typeof g.integrity == 'string' ? g.integrity : void 0,
          w = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        y === 'style'
          ? i.d.S(m, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: w,
            })
          : y === 'script' &&
            i.d.X(m, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: w,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (m, g) {
      if (typeof m == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var y = h(g.as, g.crossOrigin);
            i.d.M(m, {
              crossOrigin: y,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && i.d.M(m);
    }),
    ($t.preload = function (m, g) {
      if (typeof m == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var y = g.as,
          v = h(y, g.crossOrigin);
        i.d.L(m, y, {
          crossOrigin: v,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (m, g) {
      if (typeof m == 'string')
        if (g) {
          var y = h(g.as, g.crossOrigin);
          i.d.m(m, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: y,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else i.d.m(m);
    }),
    ($t.requestFormReset = function (m) {
      i.d.r(m);
    }),
    ($t.unstable_batchedUpdates = function (m, g) {
      return m(g);
    }),
    ($t.useFormState = function (m, g, y) {
      return f.H.useFormState(m, g, y);
    }),
    ($t.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    ($t.version = '19.1.0'),
    $t
  );
}
var Hp;
function OS() {
  if (Hp) return Fd.exports;
  Hp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return n(), (Fd.exports = wS()), Fd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp;
function ES() {
  if (Vp) return wl;
  Vp = 1;
  var n = xS(),
    t = mc(),
    r = OS();
  function i(e) {
    var a = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      a += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++) a += '&args[]=' + encodeURIComponent(arguments[s]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      a +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function o(e) {
    var a = e,
      s = e;
    if (e.alternate) for (; a.return; ) a = a.return;
    else {
      e = a;
      do (a = e), (a.flags & 4098) !== 0 && (s = a.return), (e = a.return);
      while (e);
    }
    return a.tag === 3 ? s : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if ((a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)), a !== null))
        return a.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (o(e) !== e) throw Error(i(188));
  }
  function m(e) {
    var a = e.alternate;
    if (!a) {
      if (((a = o(e)), a === null)) throw Error(i(188));
      return a !== e ? null : e;
    }
    for (var s = e, u = a; ; ) {
      var c = s.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((u = c.return), u !== null)) {
          s = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === s) return h(c), e;
          if (d === u) return h(c), a;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== u.return) (s = c), (u = d);
      else {
        for (var p = !1, _ = c.child; _; ) {
          if (_ === s) {
            (p = !0), (s = c), (u = d);
            break;
          }
          if (_ === u) {
            (p = !0), (u = c), (s = d);
            break;
          }
          _ = _.sibling;
        }
        if (!p) {
          for (_ = d.child; _; ) {
            if (_ === s) {
              (p = !0), (s = d), (u = c);
              break;
            }
            if (_ === u) {
              (p = !0), (u = d), (s = c);
              break;
            }
            _ = _.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (s.alternate !== u) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : a;
  }
  function g(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((a = g(e)), a !== null)) return a;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    v = Symbol.for('react.element'),
    b = Symbol.for('react.transitional.element'),
    w = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    D = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    N = Symbol.for('react.provider'),
    O = Symbol.for('react.consumer'),
    k = Symbol.for('react.context'),
    Y = Symbol.for('react.forward_ref'),
    q = Symbol.for('react.suspense'),
    K = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    ie = Symbol.for('react.lazy'),
    te = Symbol.for('react.activity'),
    _e = Symbol.for('react.memo_cache_sentinel'),
    be = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (be && e[be]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var Se = Symbol.for('react.client.reference');
  function Re(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === Se ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case S:
        return 'Fragment';
      case C:
        return 'Profiler';
      case D:
        return 'StrictMode';
      case q:
        return 'Suspense';
      case K:
        return 'SuspenseList';
      case te:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case w:
          return 'Portal';
        case k:
          return (e.displayName || 'Context') + '.Provider';
        case O:
          return (e._context.displayName || 'Context') + '.Consumer';
        case Y:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case W:
          return (a = e.displayName || null), a !== null ? a : Re(e.type) || 'Memo';
        case ie:
          (a = e._payload), (e = e._init);
          try {
            return Re(e(a));
          } catch {}
      }
    return null;
  }
  var Me = Array.isArray,
    V = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    me = { pending: !1, data: null, method: null, action: null },
    xe = [],
    T = -1;
  function G(e) {
    return { current: e };
  }
  function le(e) {
    0 > T || ((e.current = xe[T]), (xe[T] = null), T--);
  }
  function re(e, a) {
    T++, (xe[T] = e.current), (e.current = a);
  }
  var ve = G(null),
    Ve = G(null),
    we = G(null),
    kt = G(null);
  function at(e, a) {
    switch ((re(we, a), re(Ve, e), re(ve, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? ip(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI))) (a = ip(a)), (e = sp(a, e));
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
    le(ve), re(ve, e);
  }
  function rn() {
    le(ve), le(Ve), le(we);
  }
  function Pa(e) {
    e.memoizedState !== null && re(kt, e);
    var a = ve.current,
      s = sp(a, e.type);
    a !== s && (re(Ve, e), re(ve, s));
  }
  function $n(e) {
    Ve.current === e && (le(ve), le(Ve)), kt.current === e && (le(kt), (pl._currentValue = me));
  }
  var $a = Object.prototype.hasOwnProperty,
    Nr = n.unstable_scheduleCallback,
    Qa = n.unstable_cancelCallback,
    Os = n.unstable_shouldYield,
    fi = n.unstable_requestPaint,
    Yt = n.unstable_now,
    Es = n.unstable_getCurrentPriorityLevel,
    di = n.unstable_ImmediatePriority,
    Ts = n.unstable_UserBlockingPriority,
    ma = n.unstable_NormalPriority,
    M = n.unstable_LowPriority,
    B = n.unstable_IdlePriority,
    Z = n.log,
    fe = n.unstable_setDisableYieldValue,
    ae = null,
    X = null;
  function ce(e) {
    if ((typeof Z == 'function' && fe(e), X && typeof X.setStrictMode == 'function'))
      try {
        X.setStrictMode(ae, e);
      } catch {}
  }
  var De = Math.clz32 ? Math.clz32 : Cs,
    ct = Math.log,
    bt = Math.LN2;
  function Cs(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ct(e) / bt) | 0)) | 0;
  }
  var je = 256,
    Ie = 4194304;
  function Fe(e) {
    var a = e & 42;
    if (a !== 0) return a;
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
  function Zt(e, a, s) {
    var u = e.pendingLanes;
    if (u === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var _ = u & 134217727;
    return (
      _ !== 0
        ? ((u = _ & ~d),
          u !== 0
            ? (c = Fe(u))
            : ((p &= _), p !== 0 ? (c = Fe(p)) : s || ((s = _ & ~e), s !== 0 && (c = Fe(s)))))
        : ((_ = u & ~d),
          _ !== 0
            ? (c = Fe(_))
            : p !== 0
              ? (c = Fe(p))
              : s || ((s = u & ~e), s !== 0 && (c = Fe(s)))),
      c === 0
        ? 0
        : a !== 0 &&
            a !== c &&
            (a & d) === 0 &&
            ((d = c & -c), (s = a & -a), d >= s || (d === 32 && (s & 4194048) !== 0))
          ? a
          : c
    );
  }
  function Tt(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function ga(e, a) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
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
        return a + 5e3;
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
  function Ct() {
    var e = je;
    return (je <<= 1), (je & 4194048) === 0 && (je = 256), e;
  }
  function fn() {
    var e = Ie;
    return (Ie <<= 1), (Ie & 62914560) === 0 && (Ie = 4194304), e;
  }
  function $e(e) {
    for (var a = [], s = 0; 31 > s; s++) a.push(e);
    return a;
  }
  function Ar(e, a) {
    (e.pendingLanes |= a),
      a !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Cc(e, a, s, u, c, d) {
    var p = e.pendingLanes;
    (e.pendingLanes = s),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= s),
      (e.entangledLanes &= s),
      (e.errorRecoveryDisabledLanes &= s),
      (e.shellSuspendCounter = 0);
    var _ = e.entanglements,
      E = e.expirationTimes,
      U = e.hiddenUpdates;
    for (s = p & ~s; 0 < s; ) {
      var F = 31 - De(s),
        Q = 1 << F;
      (_[F] = 0), (E[F] = -1);
      var L = U[F];
      if (L !== null)
        for (U[F] = null, F = 0; F < L.length; F++) {
          var H = L[F];
          H !== null && (H.lane &= -536870913);
        }
      s &= ~Q;
    }
    u !== 0 && bu(e, u, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(p & ~a));
  }
  function bu(e, a, s) {
    (e.pendingLanes |= a), (e.suspendedLanes &= ~a);
    var u = 31 - De(a);
    (e.entangledLanes |= a), (e.entanglements[u] = e.entanglements[u] | 1073741824 | (s & 4194090));
  }
  function hi(e, a) {
    var s = (e.entangledLanes |= a);
    for (e = e.entanglements; s; ) {
      var u = 31 - De(s),
        c = 1 << u;
      (c & a) | (e[u] & a) && (e[u] |= a), (s &= ~c);
    }
  }
  function kr(e) {
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
  function Mc(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Ph() {
    var e = I.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ep(e.type));
  }
  function s1(e, a) {
    var s = I.p;
    try {
      return (I.p = e), a();
    } finally {
      I.p = s;
    }
  }
  var Ka = Math.random().toString(36).slice(2),
    Ft = '__reactFiber$' + Ka,
    sn = '__reactProps$' + Ka,
    mi = '__reactContainer$' + Ka,
    Dc = '__reactEvents$' + Ka,
    l1 = '__reactListeners$' + Ka,
    u1 = '__reactHandles$' + Ka,
    $h = '__reactResources$' + Ka,
    Ms = '__reactMarker$' + Ka;
  function Nc(e) {
    delete e[Ft], delete e[sn], delete e[Dc], delete e[l1], delete e[u1];
  }
  function gi(e) {
    var a = e[Ft];
    if (a) return a;
    for (var s = e.parentNode; s; ) {
      if ((a = s[mi] || s[Ft])) {
        if (((s = a.alternate), a.child !== null || (s !== null && s.child !== null)))
          for (e = cp(e); e !== null; ) {
            if ((s = e[Ft])) return s;
            e = cp(e);
          }
        return a;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function yi(e) {
    if ((e = e[Ft] || e[mi])) {
      var a = e.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3) return e;
    }
    return null;
  }
  function Ds(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(i(33));
  }
  function pi(e) {
    var a = e[$h];
    return a || (a = e[$h] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), a;
  }
  function Rt(e) {
    e[Ms] = !0;
  }
  var Qh = new Set(),
    Kh = {};
  function Rr(e, a) {
    vi(e, a), vi(e + 'Capture', a);
  }
  function vi(e, a) {
    for (Kh[e] = a, e = 0; e < a.length; e++) Qh.add(a[e]);
  }
  var o1 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Wh = {},
    Xh = {};
  function c1(e) {
    return $a.call(Xh, e)
      ? !0
      : $a.call(Wh, e)
        ? !1
        : o1.test(e)
          ? (Xh[e] = !0)
          : ((Wh[e] = !0), !1);
  }
  function _u(e, a, s) {
    if (c1(a))
      if (s === null) e.removeAttribute(a);
      else {
        switch (typeof s) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(a);
            return;
          case 'boolean':
            var u = a.toLowerCase().slice(0, 5);
            if (u !== 'data-' && u !== 'aria-') {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, '' + s);
      }
  }
  function Su(e, a, s) {
    if (s === null) e.removeAttribute(a);
    else {
      switch (typeof s) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(a);
          return;
      }
      e.setAttribute(a, '' + s);
    }
  }
  function ya(e, a, s, u) {
    if (u === null) e.removeAttribute(s);
    else {
      switch (typeof u) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(s);
          return;
      }
      e.setAttributeNS(a, s, '' + u);
    }
  }
  var Ac, Ih;
  function bi(e) {
    if (Ac === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        (Ac = (a && a[1]) || ''),
          (Ih =
            -1 <
            s.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < s.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Ac +
      e +
      Ih
    );
  }
  var kc = !1;
  function Rc(e, a) {
    if (!e || kc) return '';
    kc = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (H) {
                  var L = H;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (H) {
                  L = H;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                L = H;
              }
              (Q = e()) && typeof Q.catch == 'function' && Q.catch(function () {});
            }
          } catch (H) {
            if (H && L && typeof H.stack == 'string') return [H.stack, L.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var c = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, 'name');
      c &&
        c.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var d = u.DetermineComponentFrameRoot(),
        p = d[0],
        _ = d[1];
      if (p && _) {
        var E = p.split(`
`),
          U = _.split(`
`);
        for (c = u = 0; u < E.length && !E[u].includes('DetermineComponentFrameRoot'); ) u++;
        for (; c < U.length && !U[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (u === E.length || c === U.length)
          for (u = E.length - 1, c = U.length - 1; 1 <= u && 0 <= c && E[u] !== U[c]; ) c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (E[u] !== U[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || E[u] !== U[c])) {
                  var F =
                    `
` + E[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      F.includes('<anonymous>') &&
                      (F = F.replace('<anonymous>', e.displayName)),
                    F
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (kc = !1), (Error.prepareStackTrace = s);
    }
    return (s = e ? e.displayName || e.name : '') ? bi(s) : '';
  }
  function f1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return bi(e.type);
      case 16:
        return bi('Lazy');
      case 13:
        return bi('Suspense');
      case 19:
        return bi('SuspenseList');
      case 0:
      case 15:
        return Rc(e.type, !1);
      case 11:
        return Rc(e.type.render, !1);
      case 1:
        return Rc(e.type, !0);
      case 31:
        return bi('Activity');
      default:
        return '';
    }
  }
  function Jh(e) {
    try {
      var a = '';
      do (a += f1(e)), (e = e.return);
      while (e);
      return a;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function On(e) {
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
  function em(e) {
    var a = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (a === 'checkbox' || a === 'radio');
  }
  function d1(e) {
    var a = em(e) ? 'checked' : 'value',
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, a),
      u = '' + e[a];
    if (
      !e.hasOwnProperty(a) &&
      typeof s < 'u' &&
      typeof s.get == 'function' &&
      typeof s.set == 'function'
    ) {
      var c = s.get,
        d = s.set;
      return (
        Object.defineProperty(e, a, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (p) {
            (u = '' + p), d.call(this, p);
          },
        }),
        Object.defineProperty(e, a, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (p) {
            u = '' + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[a];
          },
        }
      );
    }
  }
  function xu(e) {
    e._valueTracker || (e._valueTracker = d1(e));
  }
  function tm(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var s = a.getValue(),
      u = '';
    return (
      e && (u = em(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = u),
      e !== s ? (a.setValue(e), !0) : !1
    );
  }
  function wu(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var h1 = /[\n"\\]/g;
  function En(e) {
    return e.replace(h1, function (a) {
      return '\\' + a.charCodeAt(0).toString(16) + ' ';
    });
  }
  function jc(e, a, s, u, c, d, p, _) {
    (e.name = ''),
      p != null && typeof p != 'function' && typeof p != 'symbol' && typeof p != 'boolean'
        ? (e.type = p)
        : e.removeAttribute('type'),
      a != null
        ? p === 'number'
          ? ((a === 0 && e.value === '') || e.value != a) && (e.value = '' + On(a))
          : e.value !== '' + On(a) && (e.value = '' + On(a))
        : (p !== 'submit' && p !== 'reset') || e.removeAttribute('value'),
      a != null
        ? zc(e, p, On(a))
        : s != null
          ? zc(e, p, On(s))
          : u != null && e.removeAttribute('value'),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      _ != null && typeof _ != 'function' && typeof _ != 'symbol' && typeof _ != 'boolean'
        ? (e.name = '' + On(_))
        : e.removeAttribute('name');
  }
  function nm(e, a, s, u, c, d, p, _) {
    if (
      (d != null &&
        typeof d != 'function' &&
        typeof d != 'symbol' &&
        typeof d != 'boolean' &&
        (e.type = d),
      a != null || s != null)
    ) {
      if (!((d !== 'submit' && d !== 'reset') || a != null)) return;
      (s = s != null ? '' + On(s) : ''),
        (a = a != null ? '' + On(a) : s),
        _ || a === e.value || (e.value = a),
        (e.defaultValue = a);
    }
    (u = u ?? c),
      (u = typeof u != 'function' && typeof u != 'symbol' && !!u),
      (e.checked = _ ? e.checked : !!u),
      (e.defaultChecked = !!u),
      p != null &&
        typeof p != 'function' &&
        typeof p != 'symbol' &&
        typeof p != 'boolean' &&
        (e.name = p);
  }
  function zc(e, a, s) {
    (a === 'number' && wu(e.ownerDocument) === e) ||
      e.defaultValue === '' + s ||
      (e.defaultValue = '' + s);
  }
  function _i(e, a, s, u) {
    if (((e = e.options), a)) {
      a = {};
      for (var c = 0; c < s.length; c++) a['$' + s[c]] = !0;
      for (s = 0; s < e.length; s++)
        (c = a.hasOwnProperty('$' + e[s].value)),
          e[s].selected !== c && (e[s].selected = c),
          c && u && (e[s].defaultSelected = !0);
    } else {
      for (s = '' + On(s), a = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          (e[c].selected = !0), u && (e[c].defaultSelected = !0);
          return;
        }
        a !== null || e[c].disabled || (a = e[c]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function am(e, a, s) {
    if (a != null && ((a = '' + On(a)), a !== e.value && (e.value = a), s == null)) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = s != null ? '' + On(s) : '';
  }
  function rm(e, a, s, u) {
    if (a == null) {
      if (u != null) {
        if (s != null) throw Error(i(92));
        if (Me(u)) {
          if (1 < u.length) throw Error(i(93));
          u = u[0];
        }
        s = u;
      }
      s == null && (s = ''), (a = s);
    }
    (s = On(a)),
      (e.defaultValue = s),
      (u = e.textContent),
      u === s && u !== '' && u !== null && (e.value = u);
  }
  function Si(e, a) {
    if (a) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var m1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function im(e, a, s) {
    var u = a.indexOf('--') === 0;
    s == null || typeof s == 'boolean' || s === ''
      ? u
        ? e.setProperty(a, '')
        : a === 'float'
          ? (e.cssFloat = '')
          : (e[a] = '')
      : u
        ? e.setProperty(a, s)
        : typeof s != 'number' || s === 0 || m1.has(a)
          ? a === 'float'
            ? (e.cssFloat = s)
            : (e[a] = ('' + s).trim())
          : (e[a] = s + 'px');
  }
  function sm(e, a, s) {
    if (a != null && typeof a != 'object') throw Error(i(62));
    if (((e = e.style), s != null)) {
      for (var u in s)
        !s.hasOwnProperty(u) ||
          (a != null && a.hasOwnProperty(u)) ||
          (u.indexOf('--') === 0
            ? e.setProperty(u, '')
            : u === 'float'
              ? (e.cssFloat = '')
              : (e[u] = ''));
      for (var c in a) (u = a[c]), a.hasOwnProperty(c) && s[c] !== u && im(e, c, u);
    } else for (var d in a) a.hasOwnProperty(d) && im(e, d, a[d]);
  }
  function Uc(e) {
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
  var g1 = new Map([
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
    y1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ou(e) {
    return y1.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Lc = null;
  function Bc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var xi = null,
    wi = null;
  function lm(e) {
    var a = yi(e);
    if (a && (e = a.stateNode)) {
      var s = e[sn] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case 'input':
          if (
            (jc(
              e,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name
            ),
            (a = s.name),
            s.type === 'radio' && a != null)
          ) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll('input[name="' + En('' + a) + '"][type="radio"]'), a = 0;
              a < s.length;
              a++
            ) {
              var u = s[a];
              if (u !== e && u.form === e.form) {
                var c = u[sn] || null;
                if (!c) throw Error(i(90));
                jc(
                  u,
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
            for (a = 0; a < s.length; a++) (u = s[a]), u.form === e.form && tm(u);
          }
          break e;
        case 'textarea':
          am(e, s.value, s.defaultValue);
          break e;
        case 'select':
          (a = s.value), a != null && _i(e, !!s.multiple, a, !1);
      }
    }
  }
  var Hc = !1;
  function um(e, a, s) {
    if (Hc) return e(a, s);
    Hc = !0;
    try {
      var u = e(a);
      return u;
    } finally {
      if (
        ((Hc = !1),
        (xi !== null || wi !== null) &&
          (oo(), xi && ((a = xi), (e = wi), (wi = xi = null), lm(a), e)))
      )
        for (a = 0; a < e.length; a++) lm(e[a]);
    }
  }
  function Ns(e, a) {
    var s = e.stateNode;
    if (s === null) return null;
    var u = s[sn] || null;
    if (u === null) return null;
    s = u[a];
    e: switch (a) {
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
        (u = !u.disabled) ||
          ((e = e.type),
          (u = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !u);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != 'function') throw Error(i(231, a, typeof s));
    return s;
  }
  var pa = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Vc = !1;
  if (pa)
    try {
      var As = {};
      Object.defineProperty(As, 'passive', {
        get: function () {
          Vc = !0;
        },
      }),
        window.addEventListener('test', As, As),
        window.removeEventListener('test', As, As);
    } catch {
      Vc = !1;
    }
  var Wa = null,
    qc = null,
    Eu = null;
  function om() {
    if (Eu) return Eu;
    var e,
      a = qc,
      s = a.length,
      u,
      c = 'value' in Wa ? Wa.value : Wa.textContent,
      d = c.length;
    for (e = 0; e < s && a[e] === c[e]; e++);
    var p = s - e;
    for (u = 1; u <= p && a[s - u] === c[d - u]; u++);
    return (Eu = c.slice(e, 1 < u ? 1 - u : void 0));
  }
  function Tu(e) {
    var a = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && a === 13 && (e = 13)) : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cu() {
    return !0;
  }
  function cm() {
    return !1;
  }
  function ln(e) {
    function a(s, u, c, d, p) {
      (this._reactName = s),
        (this._targetInst = c),
        (this.type = u),
        (this.nativeEvent = d),
        (this.target = p),
        (this.currentTarget = null);
      for (var _ in e) e.hasOwnProperty(_) && ((s = e[_]), (this[_] = s ? s(d) : d[_]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Cu
          : cm),
        (this.isPropagationStopped = cm),
        this
      );
    }
    return (
      y(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != 'unknown' && (s.returnValue = !1),
            (this.isDefaultPrevented = Cu));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != 'unknown' && (s.cancelBubble = !0),
            (this.isPropagationStopped = Cu));
        },
        persist: function () {},
        isPersistent: Cu,
      }),
      a
    );
  }
  var jr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mu = ln(jr),
    ks = y({}, jr, { view: 0, detail: 0 }),
    p1 = ln(ks),
    Yc,
    Zc,
    Rs,
    Du = y({}, ks, {
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
      getModifierState: Gc,
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
          : (e !== Rs &&
              (Rs && e.type === 'mousemove'
                ? ((Yc = e.screenX - Rs.screenX), (Zc = e.screenY - Rs.screenY))
                : (Zc = Yc = 0),
              (Rs = e)),
            Yc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Zc;
      },
    }),
    fm = ln(Du),
    v1 = y({}, Du, { dataTransfer: 0 }),
    b1 = ln(v1),
    _1 = y({}, ks, { relatedTarget: 0 }),
    Fc = ln(_1),
    S1 = y({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    x1 = ln(S1),
    w1 = y({}, jr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    O1 = ln(w1),
    E1 = y({}, jr, { data: 0 }),
    dm = ln(E1),
    T1 = {
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
    C1 = {
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
    M1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function D1(e) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(e) : (e = M1[e]) ? !!a[e] : !1;
  }
  function Gc() {
    return D1;
  }
  var N1 = y({}, ks, {
      key: function (e) {
        if (e.key) {
          var a = T1[e.key] || e.key;
          if (a !== 'Unidentified') return a;
        }
        return e.type === 'keypress'
          ? ((e = Tu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? C1[e.keyCode] || 'Unidentified'
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
      getModifierState: Gc,
      charCode: function (e) {
        return e.type === 'keypress' ? Tu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Tu(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    A1 = ln(N1),
    k1 = y({}, Du, {
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
    hm = ln(k1),
    R1 = y({}, ks, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gc,
    }),
    j1 = ln(R1),
    z1 = y({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    U1 = ln(z1),
    L1 = y({}, Du, {
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
    B1 = ln(L1),
    H1 = y({}, jr, { newState: 0, oldState: 0 }),
    V1 = ln(H1),
    q1 = [9, 13, 27, 32],
    Pc = pa && 'CompositionEvent' in window,
    js = null;
  pa && 'documentMode' in document && (js = document.documentMode);
  var Y1 = pa && 'TextEvent' in window && !js,
    mm = pa && (!Pc || (js && 8 < js && 11 >= js)),
    gm = ' ',
    ym = !1;
  function pm(e, a) {
    switch (e) {
      case 'keyup':
        return q1.indexOf(a.keyCode) !== -1;
      case 'keydown':
        return a.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function vm(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Oi = !1;
  function Z1(e, a) {
    switch (e) {
      case 'compositionend':
        return vm(a);
      case 'keypress':
        return a.which !== 32 ? null : ((ym = !0), gm);
      case 'textInput':
        return (e = a.data), e === gm && ym ? null : e;
      default:
        return null;
    }
  }
  function F1(e, a) {
    if (Oi)
      return e === 'compositionend' || (!Pc && pm(e, a))
        ? ((e = om()), (Eu = qc = Wa = null), (Oi = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case 'compositionend':
        return mm && a.locale !== 'ko' ? null : a.data;
      default:
        return null;
    }
  }
  var G1 = {
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
  function bm(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === 'input' ? !!G1[e.type] : a === 'textarea';
  }
  function _m(e, a, s, u) {
    xi ? (wi ? wi.push(u) : (wi = [u])) : (xi = u),
      (a = yo(a, 'onChange')),
      0 < a.length &&
        ((s = new Mu('onChange', 'change', null, s, u)), e.push({ event: s, listeners: a }));
  }
  var zs = null,
    Us = null;
  function P1(e) {
    ep(e, 0);
  }
  function Nu(e) {
    var a = Ds(e);
    if (tm(a)) return e;
  }
  function Sm(e, a) {
    if (e === 'change') return a;
  }
  var xm = !1;
  if (pa) {
    var $c;
    if (pa) {
      var Qc = 'oninput' in document;
      if (!Qc) {
        var wm = document.createElement('div');
        wm.setAttribute('oninput', 'return;'), (Qc = typeof wm.oninput == 'function');
      }
      $c = Qc;
    } else $c = !1;
    xm = $c && (!document.documentMode || 9 < document.documentMode);
  }
  function Om() {
    zs && (zs.detachEvent('onpropertychange', Em), (Us = zs = null));
  }
  function Em(e) {
    if (e.propertyName === 'value' && Nu(Us)) {
      var a = [];
      _m(a, Us, e, Bc(e)), um(P1, a);
    }
  }
  function $1(e, a, s) {
    e === 'focusin'
      ? (Om(), (zs = a), (Us = s), zs.attachEvent('onpropertychange', Em))
      : e === 'focusout' && Om();
  }
  function Q1(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Nu(Us);
  }
  function K1(e, a) {
    if (e === 'click') return Nu(a);
  }
  function W1(e, a) {
    if (e === 'input' || e === 'change') return Nu(a);
  }
  function X1(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var dn = typeof Object.is == 'function' ? Object.is : X1;
  function Ls(e, a) {
    if (dn(e, a)) return !0;
    if (typeof e != 'object' || e === null || typeof a != 'object' || a === null) return !1;
    var s = Object.keys(e),
      u = Object.keys(a);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var c = s[u];
      if (!$a.call(a, c) || !dn(e[c], a[c])) return !1;
    }
    return !0;
  }
  function Tm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Cm(e, a) {
    var s = Tm(e);
    e = 0;
    for (var u; s; ) {
      if (s.nodeType === 3) {
        if (((u = e + s.textContent.length), e <= a && u >= a)) return { node: s, offset: a - e };
        e = u;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Tm(s);
    }
  }
  function Mm(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? Mm(e, a.parentNode)
            : 'contains' in e
              ? e.contains(a)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function Dm(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = wu(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof a.contentWindow.location.href == 'string';
      } catch {
        s = !1;
      }
      if (s) e = a.contentWindow;
      else break;
      a = wu(e.document);
    }
    return a;
  }
  function Kc(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      a &&
      ((a === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        a === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var I1 = pa && 'documentMode' in document && 11 >= document.documentMode,
    Ei = null,
    Wc = null,
    Bs = null,
    Xc = !1;
  function Nm(e, a, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Xc ||
      Ei == null ||
      Ei !== wu(u) ||
      ((u = Ei),
      'selectionStart' in u && Kc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = ((u.ownerDocument && u.ownerDocument.defaultView) || window).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Bs && Ls(Bs, u)) ||
        ((Bs = u),
        (u = yo(Wc, 'onSelect')),
        0 < u.length &&
          ((a = new Mu('onSelect', 'select', null, a, s)),
          e.push({ event: a, listeners: u }),
          (a.target = Ei))));
  }
  function zr(e, a) {
    var s = {};
    return (
      (s[e.toLowerCase()] = a.toLowerCase()),
      (s['Webkit' + e] = 'webkit' + a),
      (s['Moz' + e] = 'moz' + a),
      s
    );
  }
  var Ti = {
      animationend: zr('Animation', 'AnimationEnd'),
      animationiteration: zr('Animation', 'AnimationIteration'),
      animationstart: zr('Animation', 'AnimationStart'),
      transitionrun: zr('Transition', 'TransitionRun'),
      transitionstart: zr('Transition', 'TransitionStart'),
      transitioncancel: zr('Transition', 'TransitionCancel'),
      transitionend: zr('Transition', 'TransitionEnd'),
    },
    Ic = {},
    Am = {};
  pa &&
    ((Am = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ti.animationend.animation,
      delete Ti.animationiteration.animation,
      delete Ti.animationstart.animation),
    'TransitionEvent' in window || delete Ti.transitionend.transition);
  function Ur(e) {
    if (Ic[e]) return Ic[e];
    if (!Ti[e]) return e;
    var a = Ti[e],
      s;
    for (s in a) if (a.hasOwnProperty(s) && s in Am) return (Ic[e] = a[s]);
    return e;
  }
  var km = Ur('animationend'),
    Rm = Ur('animationiteration'),
    jm = Ur('animationstart'),
    J1 = Ur('transitionrun'),
    e_ = Ur('transitionstart'),
    t_ = Ur('transitioncancel'),
    zm = Ur('transitionend'),
    Um = new Map(),
    Jc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Jc.push('scrollEnd');
  function jn(e, a) {
    Um.set(e, a), Rr(a, [e]);
  }
  var Lm = new WeakMap();
  function Tn(e, a) {
    if (typeof e == 'object' && e !== null) {
      var s = Lm.get(e);
      return s !== void 0 ? s : ((a = { value: e, source: a, stack: Jh(a) }), Lm.set(e, a), a);
    }
    return { value: e, source: a, stack: Jh(a) };
  }
  var Cn = [],
    Ci = 0,
    ef = 0;
  function Au() {
    for (var e = Ci, a = (ef = Ci = 0); a < e; ) {
      var s = Cn[a];
      Cn[a++] = null;
      var u = Cn[a];
      Cn[a++] = null;
      var c = Cn[a];
      Cn[a++] = null;
      var d = Cn[a];
      if (((Cn[a++] = null), u !== null && c !== null)) {
        var p = u.pending;
        p === null ? (c.next = c) : ((c.next = p.next), (p.next = c)), (u.pending = c);
      }
      d !== 0 && Bm(s, c, d);
    }
  }
  function ku(e, a, s, u) {
    (Cn[Ci++] = e),
      (Cn[Ci++] = a),
      (Cn[Ci++] = s),
      (Cn[Ci++] = u),
      (ef |= u),
      (e.lanes |= u),
      (e = e.alternate),
      e !== null && (e.lanes |= u);
  }
  function tf(e, a, s, u) {
    return ku(e, a, s, u), Ru(e);
  }
  function Mi(e, a) {
    return ku(e, null, null, a), Ru(e);
  }
  function Bm(e, a, s) {
    e.lanes |= s;
    var u = e.alternate;
    u !== null && (u.lanes |= s);
    for (var c = !1, d = e.return; d !== null; )
      (d.childLanes |= s),
        (u = d.alternate),
        u !== null && (u.childLanes |= s),
        d.tag === 22 && ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        c &&
          a !== null &&
          ((c = 31 - De(s)),
          (e = d.hiddenUpdates),
          (u = e[c]),
          u === null ? (e[c] = [a]) : u.push(a),
          (a.lane = s | 536870912)),
        d)
      : null;
  }
  function Ru(e) {
    if (50 < ol) throw ((ol = 0), (ud = null), Error(i(185)));
    for (var a = e.return; a !== null; ) (e = a), (a = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Di = {};
  function n_(e, a, s, u) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function hn(e, a, s, u) {
    return new n_(e, a, s, u);
  }
  function nf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function va(e, a) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = hn(e.tag, a, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = a),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 65011712),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (a = e.dependencies),
      (s.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      (s.refCleanup = e.refCleanup),
      s
    );
  }
  function Hm(e, a) {
    e.flags &= 65011714;
    var s = e.alternate;
    return (
      s === null
        ? ((e.childLanes = 0),
          (e.lanes = a),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = s.childLanes),
          (e.lanes = s.lanes),
          (e.child = s.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = s.memoizedProps),
          (e.memoizedState = s.memoizedState),
          (e.updateQueue = s.updateQueue),
          (e.type = s.type),
          (a = s.dependencies),
          (e.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext })),
      e
    );
  }
  function ju(e, a, s, u, c, d) {
    var p = 0;
    if (((u = e), typeof e == 'function')) nf(e) && (p = 1);
    else if (typeof e == 'string')
      p = rS(e, s, ve.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case te:
          return (e = hn(31, s, a, c)), (e.elementType = te), (e.lanes = d), e;
        case S:
          return Lr(s.children, c, d, a);
        case D:
          (p = 8), (c |= 24);
          break;
        case C:
          return (e = hn(12, s, a, c | 2)), (e.elementType = C), (e.lanes = d), e;
        case q:
          return (e = hn(13, s, a, c)), (e.elementType = q), (e.lanes = d), e;
        case K:
          return (e = hn(19, s, a, c)), (e.elementType = K), (e.lanes = d), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case N:
              case k:
                p = 10;
                break e;
              case O:
                p = 9;
                break e;
              case Y:
                p = 11;
                break e;
              case W:
                p = 14;
                break e;
              case ie:
                (p = 16), (u = null);
                break e;
            }
          (p = 29), (s = Error(i(130, e === null ? 'null' : typeof e, ''))), (u = null);
      }
    return (a = hn(p, s, a, c)), (a.elementType = e), (a.type = u), (a.lanes = d), a;
  }
  function Lr(e, a, s, u) {
    return (e = hn(7, e, u, a)), (e.lanes = s), e;
  }
  function af(e, a, s) {
    return (e = hn(6, e, null, a)), (e.lanes = s), e;
  }
  function rf(e, a, s) {
    return (
      (a = hn(4, e.children !== null ? e.children : [], e.key, a)),
      (a.lanes = s),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    );
  }
  var Ni = [],
    Ai = 0,
    zu = null,
    Uu = 0,
    Mn = [],
    Dn = 0,
    Br = null,
    ba = 1,
    _a = '';
  function Hr(e, a) {
    (Ni[Ai++] = Uu), (Ni[Ai++] = zu), (zu = e), (Uu = a);
  }
  function Vm(e, a, s) {
    (Mn[Dn++] = ba), (Mn[Dn++] = _a), (Mn[Dn++] = Br), (Br = e);
    var u = ba;
    e = _a;
    var c = 32 - De(u) - 1;
    (u &= ~(1 << c)), (s += 1);
    var d = 32 - De(a) + c;
    if (30 < d) {
      var p = c - (c % 5);
      (d = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (c -= p),
        (ba = (1 << (32 - De(a) + c)) | (s << c) | u),
        (_a = d + e);
    } else (ba = (1 << d) | (s << c) | u), (_a = e);
  }
  function sf(e) {
    e.return !== null && (Hr(e, 1), Vm(e, 1, 0));
  }
  function lf(e) {
    for (; e === zu; ) (zu = Ni[--Ai]), (Ni[Ai] = null), (Uu = Ni[--Ai]), (Ni[Ai] = null);
    for (; e === Br; )
      (Br = Mn[--Dn]),
        (Mn[Dn] = null),
        (_a = Mn[--Dn]),
        (Mn[Dn] = null),
        (ba = Mn[--Dn]),
        (Mn[Dn] = null);
  }
  var Xt = null,
    yt = null,
    Xe = !1,
    Vr = null,
    Qn = !1,
    uf = Error(i(519));
  function qr(e) {
    var a = Error(i(418, ''));
    throw (qs(Tn(a, e)), uf);
  }
  function qm(e) {
    var a = e.stateNode,
      s = e.type,
      u = e.memoizedProps;
    switch (((a[Ft] = e), (a[sn] = u), s)) {
      case 'dialog':
        Ze('cancel', a), Ze('close', a);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ze('load', a);
        break;
      case 'video':
      case 'audio':
        for (s = 0; s < fl.length; s++) Ze(fl[s], a);
        break;
      case 'source':
        Ze('error', a);
        break;
      case 'img':
      case 'image':
      case 'link':
        Ze('error', a), Ze('load', a);
        break;
      case 'details':
        Ze('toggle', a);
        break;
      case 'input':
        Ze('invalid', a),
          nm(a, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0),
          xu(a);
        break;
      case 'select':
        Ze('invalid', a);
        break;
      case 'textarea':
        Ze('invalid', a), rm(a, u.value, u.defaultValue, u.children), xu(a);
    }
    (s = u.children),
      (typeof s != 'string' && typeof s != 'number' && typeof s != 'bigint') ||
      a.textContent === '' + s ||
      u.suppressHydrationWarning === !0 ||
      rp(a.textContent, s)
        ? (u.popover != null && (Ze('beforetoggle', a), Ze('toggle', a)),
          u.onScroll != null && Ze('scroll', a),
          u.onScrollEnd != null && Ze('scrollend', a),
          u.onClick != null && (a.onclick = po),
          (a = !0))
        : (a = !1),
      a || qr(e);
  }
  function Ym(e) {
    for (Xt = e.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 13:
          Qn = !1;
          return;
        case 27:
        case 3:
          Qn = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function Hs(e) {
    if (e !== Xt) return !1;
    if (!Xe) return Ym(e), (Xe = !0), !1;
    var a = e.tag,
      s;
    if (
      ((s = a !== 3 && a !== 27) &&
        ((s = a === 5) &&
          ((s = e.type), (s = !(s !== 'form' && s !== 'button') || Od(e.type, e.memoizedProps))),
        (s = !s)),
      s && yt && qr(e),
      Ym(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, a = 0; e; ) {
          if (e.nodeType === 8)
            if (((s = e.data), s === '/$')) {
              if (a === 0) {
                yt = Un(e.nextSibling);
                break e;
              }
              a--;
            } else (s !== '$' && s !== '$!' && s !== '$?') || a++;
          e = e.nextSibling;
        }
        yt = null;
      }
    } else
      a === 27
        ? ((a = yt), dr(e.type) ? ((e = Md), (Md = null), (yt = e)) : (yt = a))
        : (yt = Xt ? Un(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Vs() {
    (yt = Xt = null), (Xe = !1);
  }
  function Zm() {
    var e = Vr;
    return e !== null && (cn === null ? (cn = e) : cn.push.apply(cn, e), (Vr = null)), e;
  }
  function qs(e) {
    Vr === null ? (Vr = [e]) : Vr.push(e);
  }
  var of = G(null),
    Yr = null,
    Sa = null;
  function Xa(e, a, s) {
    re(of, a._currentValue), (a._currentValue = s);
  }
  function xa(e) {
    (e._currentValue = of.current), le(of);
  }
  function cf(e, a, s) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & a) !== a
          ? ((e.childLanes |= a), u !== null && (u.childLanes |= a))
          : u !== null && (u.childLanes & a) !== a && (u.childLanes |= a),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function ff(e, a, s, u) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var p = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var _ = d;
          d = c;
          for (var E = 0; E < a.length; E++)
            if (_.context === a[E]) {
              (d.lanes |= s),
                (_ = d.alternate),
                _ !== null && (_.lanes |= s),
                cf(d.return, s, e),
                u || (p = null);
              break e;
            }
          d = _.next;
        }
      } else if (c.tag === 18) {
        if (((p = c.return), p === null)) throw Error(i(341));
        (p.lanes |= s), (d = p.alternate), d !== null && (d.lanes |= s), cf(p, s, e), (p = null);
      } else p = c.child;
      if (p !== null) p.return = c;
      else
        for (p = c; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((c = p.sibling), c !== null)) {
            (c.return = p.return), (p = c);
            break;
          }
          p = p.return;
        }
      c = p;
    }
  }
  function Ys(e, a, s, u) {
    e = null;
    for (var c = a, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var p = c.alternate;
        if (p === null) throw Error(i(387));
        if (((p = p.memoizedProps), p !== null)) {
          var _ = c.type;
          dn(c.pendingProps.value, p.value) || (e !== null ? e.push(_) : (e = [_]));
        }
      } else if (c === kt.current) {
        if (((p = c.alternate), p === null)) throw Error(i(387));
        p.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(pl) : (e = [pl]));
      }
      c = c.return;
    }
    e !== null && ff(a, e, s, u), (a.flags |= 262144);
  }
  function Lu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Zr(e) {
    (Yr = e), (Sa = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function Gt(e) {
    return Fm(Yr, e);
  }
  function Bu(e, a) {
    return Yr === null && Zr(e), Fm(e, a);
  }
  function Fm(e, a) {
    var s = a._currentValue;
    if (((a = { context: a, memoizedValue: s, next: null }), Sa === null)) {
      if (e === null) throw Error(i(308));
      (Sa = a), (e.dependencies = { lanes: 0, firstContext: a }), (e.flags |= 524288);
    } else Sa = Sa.next = a;
    return s;
  }
  var a_ =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (s, u) {
                  e.push(u);
                },
              });
            this.abort = function () {
              (a.aborted = !0),
                e.forEach(function (s) {
                  return s();
                });
            };
          },
    r_ = n.unstable_scheduleCallback,
    i_ = n.unstable_NormalPriority,
    Mt = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function df() {
    return { controller: new a_(), data: new Map(), refCount: 0 };
  }
  function Zs(e) {
    e.refCount--,
      e.refCount === 0 &&
        r_(i_, function () {
          e.controller.abort();
        });
  }
  var Fs = null,
    hf = 0,
    ki = 0,
    Ri = null;
  function s_(e, a) {
    if (Fs === null) {
      var s = (Fs = []);
      (hf = 0),
        (ki = gd()),
        (Ri = {
          status: 'pending',
          value: void 0,
          then: function (u) {
            s.push(u);
          },
        });
    }
    return hf++, a.then(Gm, Gm), a;
  }
  function Gm() {
    if (--hf === 0 && Fs !== null) {
      Ri !== null && (Ri.status = 'fulfilled');
      var e = Fs;
      (Fs = null), (ki = 0), (Ri = null);
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function l_(e, a) {
    var s = [],
      u = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (c) {
          s.push(c);
        },
      };
    return (
      e.then(
        function () {
          (u.status = 'fulfilled'), (u.value = a);
          for (var c = 0; c < s.length; c++) (0, s[c])(a);
        },
        function (c) {
          for (u.status = 'rejected', u.reason = c, c = 0; c < s.length; c++) (0, s[c])(void 0);
        }
      ),
      u
    );
  }
  var Pm = V.S;
  V.S = function (e, a) {
    typeof a == 'object' && a !== null && typeof a.then == 'function' && s_(e, a),
      Pm !== null && Pm(e, a);
  };
  var Fr = G(null);
  function mf() {
    var e = Fr.current;
    return e !== null ? e : ot.pooledCache;
  }
  function Hu(e, a) {
    a === null ? re(Fr, Fr.current) : re(Fr, a.pool);
  }
  function $m() {
    var e = mf();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var Gs = Error(i(460)),
    Qm = Error(i(474)),
    Vu = Error(i(542)),
    gf = { then: function () {} };
  function Km(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function qu() {}
  function Wm(e, a, s) {
    switch (
      ((s = e[s]), s === void 0 ? e.push(a) : s !== a && (a.then(qu, qu), (a = s)), a.status)
    ) {
      case 'fulfilled':
        return a.value;
      case 'rejected':
        throw ((e = a.reason), Im(e), e);
      default:
        if (typeof a.status == 'string') a.then(qu, qu);
        else {
          if (((e = ot), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
          (e = a),
            (e.status = 'pending'),
            e.then(
              function (u) {
                if (a.status === 'pending') {
                  var c = a;
                  (c.status = 'fulfilled'), (c.value = u);
                }
              },
              function (u) {
                if (a.status === 'pending') {
                  var c = a;
                  (c.status = 'rejected'), (c.reason = u);
                }
              }
            );
        }
        switch (a.status) {
          case 'fulfilled':
            return a.value;
          case 'rejected':
            throw ((e = a.reason), Im(e), e);
        }
        throw ((Ps = a), Gs);
    }
  }
  var Ps = null;
  function Xm() {
    if (Ps === null) throw Error(i(459));
    var e = Ps;
    return (Ps = null), e;
  }
  function Im(e) {
    if (e === Gs || e === Vu) throw Error(i(483));
  }
  var Ia = !1;
  function yf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function pf(e, a) {
    (e = e.updateQueue),
      a.updateQueue === e &&
        (a.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Ja(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function er(e, a, s) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (et & 2) !== 0)) {
      var c = u.pending;
      return (
        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
        (u.pending = a),
        (a = Ru(e)),
        Bm(e, null, s),
        a
      );
    }
    return ku(e, u, a, s), Ru(e);
  }
  function $s(e, a, s) {
    if (((a = a.updateQueue), a !== null && ((a = a.shared), (s & 4194048) !== 0))) {
      var u = a.lanes;
      (u &= e.pendingLanes), (s |= u), (a.lanes = s), hi(e, s);
    }
  }
  function vf(e, a) {
    var s = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), s === u)) {
      var c = null,
        d = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var p = { lane: s.lane, tag: s.tag, payload: s.payload, callback: null, next: null };
          d === null ? (c = d = p) : (d = d.next = p), (s = s.next);
        } while (s !== null);
        d === null ? (c = d = a) : (d = d.next = a);
      } else c = d = a;
      (s = {
        baseState: u.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = a) : (e.next = a),
      (s.lastBaseUpdate = a);
  }
  var bf = !1;
  function Qs() {
    if (bf) {
      var e = Ri;
      if (e !== null) throw e;
    }
  }
  function Ks(e, a, s, u) {
    bf = !1;
    var c = e.updateQueue;
    Ia = !1;
    var d = c.firstBaseUpdate,
      p = c.lastBaseUpdate,
      _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var E = _,
        U = E.next;
      (E.next = null), p === null ? (d = U) : (p.next = U), (p = E);
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (_ = F.lastBaseUpdate),
        _ !== p && (_ === null ? (F.firstBaseUpdate = U) : (_.next = U), (F.lastBaseUpdate = E)));
    }
    if (d !== null) {
      var Q = c.baseState;
      (p = 0), (F = U = E = null), (_ = d);
      do {
        var L = _.lane & -536870913,
          H = L !== _.lane;
        if (H ? (Ge & L) === L : (u & L) === L) {
          L !== 0 && L === ki && (bf = !0),
            F !== null &&
              (F = F.next =
                { lane: 0, tag: _.tag, payload: _.payload, callback: null, next: null });
          e: {
            var Ne = e,
              Oe = _;
            L = a;
            var st = s;
            switch (Oe.tag) {
              case 1:
                if (((Ne = Oe.payload), typeof Ne == 'function')) {
                  Q = Ne.call(st, Q, L);
                  break e;
                }
                Q = Ne;
                break e;
              case 3:
                Ne.flags = (Ne.flags & -65537) | 128;
              case 0:
                if (
                  ((Ne = Oe.payload),
                  (L = typeof Ne == 'function' ? Ne.call(st, Q, L) : Ne),
                  L == null)
                )
                  break e;
                Q = y({}, Q, L);
                break e;
              case 2:
                Ia = !0;
            }
          }
          (L = _.callback),
            L !== null &&
              ((e.flags |= 64),
              H && (e.flags |= 8192),
              (H = c.callbacks),
              H === null ? (c.callbacks = [L]) : H.push(L));
        } else
          (H = { lane: L, tag: _.tag, payload: _.payload, callback: _.callback, next: null }),
            F === null ? ((U = F = H), (E = Q)) : (F = F.next = H),
            (p |= L);
        if (((_ = _.next), _ === null)) {
          if (((_ = c.shared.pending), _ === null)) break;
          (H = _), (_ = H.next), (H.next = null), (c.lastBaseUpdate = H), (c.shared.pending = null);
        }
      } while (!0);
      F === null && (E = Q),
        (c.baseState = E),
        (c.firstBaseUpdate = U),
        (c.lastBaseUpdate = F),
        d === null && (c.shared.lanes = 0),
        (ur |= p),
        (e.lanes = p),
        (e.memoizedState = Q);
    }
  }
  function Jm(e, a) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(a);
  }
  function eg(e, a) {
    var s = e.callbacks;
    if (s !== null) for (e.callbacks = null, e = 0; e < s.length; e++) Jm(s[e], a);
  }
  var ji = G(null),
    Yu = G(0);
  function tg(e, a) {
    (e = Da), re(Yu, e), re(ji, a), (Da = e | a.baseLanes);
  }
  function _f() {
    re(Yu, Da), re(ji, ji.current);
  }
  function Sf() {
    (Da = Yu.current), le(ji), le(Yu);
  }
  var tr = 0,
    He = null,
    rt = null,
    Ot = null,
    Zu = !1,
    zi = !1,
    Gr = !1,
    Fu = 0,
    Ws = 0,
    Ui = null,
    u_ = 0;
  function _t() {
    throw Error(i(321));
  }
  function xf(e, a) {
    if (a === null) return !1;
    for (var s = 0; s < a.length && s < e.length; s++) if (!dn(e[s], a[s])) return !1;
    return !0;
  }
  function wf(e, a, s, u, c, d) {
    return (
      (tr = d),
      (He = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Bg : Hg),
      (Gr = !1),
      (d = s(u, c)),
      (Gr = !1),
      zi && (d = ag(a, s, u, c)),
      ng(e),
      d
    );
  }
  function ng(e) {
    V.H = Wu;
    var a = rt !== null && rt.next !== null;
    if (((tr = 0), (Ot = rt = He = null), (Zu = !1), (Ws = 0), (Ui = null), a)) throw Error(i(300));
    e === null || jt || ((e = e.dependencies), e !== null && Lu(e) && (jt = !0));
  }
  function ag(e, a, s, u) {
    He = e;
    var c = 0;
    do {
      if ((zi && (Ui = null), (Ws = 0), (zi = !1), 25 <= c)) throw Error(i(301));
      if (((c += 1), (Ot = rt = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (V.H = g_), (d = a(s, u));
    } while (zi);
    return d;
  }
  function o_() {
    var e = V.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == 'function' ? Xs(a) : a),
      (e = e.useState()[0]),
      (rt !== null ? rt.memoizedState : null) !== e && (He.flags |= 1024),
      a
    );
  }
  function Of() {
    var e = Fu !== 0;
    return (Fu = 0), e;
  }
  function Ef(e, a, s) {
    (a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~s);
  }
  function Tf(e) {
    if (Zu) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        a !== null && (a.pending = null), (e = e.next);
      }
      Zu = !1;
    }
    (tr = 0), (Ot = rt = He = null), (zi = !1), (Ws = Fu = 0), (Ui = null);
  }
  function un() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ot === null ? (He.memoizedState = Ot = e) : (Ot = Ot.next = e), Ot;
  }
  function Et() {
    if (rt === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var a = Ot === null ? He.memoizedState : Ot.next;
    if (a !== null) (Ot = a), (rt = e);
    else {
      if (e === null) throw He.alternate === null ? Error(i(467)) : Error(i(310));
      (rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null,
        }),
        Ot === null ? (He.memoizedState = Ot = e) : (Ot = Ot.next = e);
    }
    return Ot;
  }
  function Cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xs(e) {
    var a = Ws;
    return (
      (Ws += 1),
      Ui === null && (Ui = []),
      (e = Wm(Ui, e, a)),
      (a = He),
      (Ot === null ? a.memoizedState : Ot.next) === null &&
        ((a = a.alternate), (V.H = a === null || a.memoizedState === null ? Bg : Hg)),
      e
    );
  }
  function Gu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Xs(e);
      if (e.$$typeof === k) return Gt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Mf(e) {
    var a = null,
      s = He.updateQueue;
    if ((s !== null && (a = s.memoCache), a == null)) {
      var u = He.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (a = {
              data: u.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      s === null && ((s = Cf()), (He.updateQueue = s)),
      (s.memoCache = a),
      (s = a.data[a.index]),
      s === void 0)
    )
      for (s = a.data[a.index] = Array(e), u = 0; u < e; u++) s[u] = _e;
    return a.index++, s;
  }
  function wa(e, a) {
    return typeof a == 'function' ? a(e) : a;
  }
  function Pu(e) {
    var a = Et();
    return Df(a, rt, e);
  }
  function Df(e, a, s) {
    var u = e.queue;
    if (u === null) throw Error(i(311));
    u.lastRenderedReducer = s;
    var c = e.baseQueue,
      d = u.pending;
    if (d !== null) {
      if (c !== null) {
        var p = c.next;
        (c.next = d.next), (d.next = p);
      }
      (a.baseQueue = c = d), (u.pending = null);
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      a = c.next;
      var _ = (p = null),
        E = null,
        U = a,
        F = !1;
      do {
        var Q = U.lane & -536870913;
        if (Q !== U.lane ? (Ge & Q) === Q : (tr & Q) === Q) {
          var L = U.revertLane;
          if (L === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              Q === ki && (F = !0);
          else if ((tr & L) === L) {
            (U = U.next), L === ki && (F = !0);
            continue;
          } else
            (Q = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            }),
              E === null ? ((_ = E = Q), (p = d)) : (E = E.next = Q),
              (He.lanes |= L),
              (ur |= L);
          (Q = U.action), Gr && s(d, Q), (d = U.hasEagerState ? U.eagerState : s(d, Q));
        } else
          (L = {
            lane: Q,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            E === null ? ((_ = E = L), (p = d)) : (E = E.next = L),
            (He.lanes |= Q),
            (ur |= Q);
        U = U.next;
      } while (U !== null && U !== a);
      if (
        (E === null ? (p = d) : (E.next = _),
        !dn(d, e.memoizedState) && ((jt = !0), F && ((s = Ri), s !== null)))
      )
        throw s;
      (e.memoizedState = d), (e.baseState = p), (e.baseQueue = E), (u.lastRenderedState = d);
    }
    return c === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function Nf(e) {
    var a = Et(),
      s = a.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var u = s.dispatch,
      c = s.pending,
      d = a.memoizedState;
    if (c !== null) {
      s.pending = null;
      var p = (c = c.next);
      do (d = e(d, p.action)), (p = p.next);
      while (p !== c);
      dn(d, a.memoizedState) || (jt = !0),
        (a.memoizedState = d),
        a.baseQueue === null && (a.baseState = d),
        (s.lastRenderedState = d);
    }
    return [d, u];
  }
  function rg(e, a, s) {
    var u = He,
      c = Et(),
      d = Xe;
    if (d) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = a();
    var p = !dn((rt || c).memoizedState, s);
    p && ((c.memoizedState = s), (jt = !0)), (c = c.queue);
    var _ = lg.bind(null, u, c, e);
    if (
      (Is(2048, 8, _, [e]), c.getSnapshot !== a || p || (Ot !== null && Ot.memoizedState.tag & 1))
    ) {
      if (((u.flags |= 2048), Li(9, $u(), sg.bind(null, u, c, s, a), null), ot === null))
        throw Error(i(349));
      d || (tr & 124) !== 0 || ig(u, a, s);
    }
    return s;
  }
  function ig(e, a, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: a, value: s }),
      (a = He.updateQueue),
      a === null
        ? ((a = Cf()), (He.updateQueue = a), (a.stores = [e]))
        : ((s = a.stores), s === null ? (a.stores = [e]) : s.push(e));
  }
  function sg(e, a, s, u) {
    (a.value = s), (a.getSnapshot = u), ug(a) && og(e);
  }
  function lg(e, a, s) {
    return s(function () {
      ug(a) && og(e);
    });
  }
  function ug(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var s = a();
      return !dn(e, s);
    } catch {
      return !0;
    }
  }
  function og(e) {
    var a = Mi(e, 2);
    a !== null && vn(a, e, 2);
  }
  function Af(e) {
    var a = un();
    if (typeof e == 'function') {
      var s = e;
      if (((e = s()), Gr)) {
        ce(!0);
        try {
          s();
        } finally {
          ce(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = e),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: e,
      }),
      a
    );
  }
  function cg(e, a, s, u) {
    return (e.baseState = s), Df(e, rt, typeof u == 'function' ? u : wa);
  }
  function c_(e, a, s, u, c) {
    if (Ku(e)) throw Error(i(485));
    if (((e = a.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          d.listeners.push(p);
        },
      };
      V.T !== null ? s(!0) : (d.isTransition = !1),
        u(d),
        (s = a.pending),
        s === null
          ? ((d.next = a.pending = d), fg(a, d))
          : ((d.next = s.next), (a.pending = s.next = d));
    }
  }
  function fg(e, a) {
    var s = a.action,
      u = a.payload,
      c = e.state;
    if (a.isTransition) {
      var d = V.T,
        p = {};
      V.T = p;
      try {
        var _ = s(c, u),
          E = V.S;
        E !== null && E(p, _), dg(e, a, _);
      } catch (U) {
        kf(e, a, U);
      } finally {
        V.T = d;
      }
    } else
      try {
        (d = s(c, u)), dg(e, a, d);
      } catch (U) {
        kf(e, a, U);
      }
  }
  function dg(e, a, s) {
    s !== null && typeof s == 'object' && typeof s.then == 'function'
      ? s.then(
          function (u) {
            hg(e, a, u);
          },
          function (u) {
            return kf(e, a, u);
          }
        )
      : hg(e, a, s);
  }
  function hg(e, a, s) {
    (a.status = 'fulfilled'),
      (a.value = s),
      mg(a),
      (e.state = s),
      (a = e.pending),
      a !== null &&
        ((s = a.next), s === a ? (e.pending = null) : ((s = s.next), (a.next = s), fg(e, s)));
  }
  function kf(e, a, s) {
    var u = e.pending;
    if (((e.pending = null), u !== null)) {
      u = u.next;
      do (a.status = 'rejected'), (a.reason = s), mg(a), (a = a.next);
      while (a !== u);
    }
    e.action = null;
  }
  function mg(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function gg(e, a) {
    return a;
  }
  function yg(e, a) {
    if (Xe) {
      var s = ot.formState;
      if (s !== null) {
        e: {
          var u = He;
          if (Xe) {
            if (yt) {
              t: {
                for (var c = yt, d = Qn; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = Un(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === 'F!' || d === 'F' ? c : null);
              }
              if (c) {
                (yt = Un(c.nextSibling)), (u = c.data === 'F!');
                break e;
              }
            }
            qr(u);
          }
          u = !1;
        }
        u && (a = s[0]);
      }
    }
    return (
      (s = un()),
      (s.memoizedState = s.baseState = a),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gg,
        lastRenderedState: a,
      }),
      (s.queue = u),
      (s = zg.bind(null, He, u)),
      (u.dispatch = s),
      (u = Af(!1)),
      (d = Lf.bind(null, He, !1, u.queue)),
      (u = un()),
      (c = { state: a, dispatch: null, action: e, pending: null }),
      (u.queue = c),
      (s = c_.bind(null, He, c, d, s)),
      (c.dispatch = s),
      (u.memoizedState = e),
      [a, s, !1]
    );
  }
  function pg(e) {
    var a = Et();
    return vg(a, rt, e);
  }
  function vg(e, a, s) {
    if (
      ((a = Df(e, a, gg)[0]),
      (e = Pu(wa)[0]),
      typeof a == 'object' && a !== null && typeof a.then == 'function')
    )
      try {
        var u = Xs(a);
      } catch (p) {
        throw p === Gs ? Vu : p;
      }
    else u = a;
    a = Et();
    var c = a.queue,
      d = c.dispatch;
    return (
      s !== a.memoizedState && ((He.flags |= 2048), Li(9, $u(), f_.bind(null, c, s), null)),
      [u, d, e]
    );
  }
  function f_(e, a) {
    e.action = a;
  }
  function bg(e) {
    var a = Et(),
      s = rt;
    if (s !== null) return vg(a, s, e);
    Et(), (a = a.memoizedState), (s = Et());
    var u = s.queue.dispatch;
    return (s.memoizedState = e), [a, u, !1];
  }
  function Li(e, a, s, u) {
    return (
      (e = { tag: e, create: s, deps: u, inst: a, next: null }),
      (a = He.updateQueue),
      a === null && ((a = Cf()), (He.updateQueue = a)),
      (s = a.lastEffect),
      s === null
        ? (a.lastEffect = e.next = e)
        : ((u = s.next), (s.next = e), (e.next = u), (a.lastEffect = e)),
      e
    );
  }
  function $u() {
    return { destroy: void 0, resource: void 0 };
  }
  function _g() {
    return Et().memoizedState;
  }
  function Qu(e, a, s, u) {
    var c = un();
    (u = u === void 0 ? null : u), (He.flags |= e), (c.memoizedState = Li(1 | a, $u(), s, u));
  }
  function Is(e, a, s, u) {
    var c = Et();
    u = u === void 0 ? null : u;
    var d = c.memoizedState.inst;
    rt !== null && u !== null && xf(u, rt.memoizedState.deps)
      ? (c.memoizedState = Li(a, d, s, u))
      : ((He.flags |= e), (c.memoizedState = Li(1 | a, d, s, u)));
  }
  function Sg(e, a) {
    Qu(8390656, 8, e, a);
  }
  function xg(e, a) {
    Is(2048, 8, e, a);
  }
  function wg(e, a) {
    return Is(4, 2, e, a);
  }
  function Og(e, a) {
    return Is(4, 4, e, a);
  }
  function Eg(e, a) {
    if (typeof a == 'function') {
      e = e();
      var s = a(e);
      return function () {
        typeof s == 'function' ? s() : a(null);
      };
    }
    if (a != null)
      return (
        (e = e()),
        (a.current = e),
        function () {
          a.current = null;
        }
      );
  }
  function Tg(e, a, s) {
    (s = s != null ? s.concat([e]) : null), Is(4, 4, Eg.bind(null, a, e), s);
  }
  function Rf() {}
  function Cg(e, a) {
    var s = Et();
    a = a === void 0 ? null : a;
    var u = s.memoizedState;
    return a !== null && xf(a, u[1]) ? u[0] : ((s.memoizedState = [e, a]), e);
  }
  function Mg(e, a) {
    var s = Et();
    a = a === void 0 ? null : a;
    var u = s.memoizedState;
    if (a !== null && xf(a, u[1])) return u[0];
    if (((u = e()), Gr)) {
      ce(!0);
      try {
        e();
      } finally {
        ce(!1);
      }
    }
    return (s.memoizedState = [u, a]), u;
  }
  function jf(e, a, s) {
    return s === void 0 || (tr & 1073741824) !== 0
      ? (e.memoizedState = a)
      : ((e.memoizedState = s), (e = Ay()), (He.lanes |= e), (ur |= e), s);
  }
  function Dg(e, a, s, u) {
    return dn(s, a)
      ? s
      : ji.current !== null
        ? ((e = jf(e, s, u)), dn(e, a) || (jt = !0), e)
        : (tr & 42) === 0
          ? ((jt = !0), (e.memoizedState = s))
          : ((e = Ay()), (He.lanes |= e), (ur |= e), a);
  }
  function Ng(e, a, s, u, c) {
    var d = I.p;
    I.p = d !== 0 && 8 > d ? d : 8;
    var p = V.T,
      _ = {};
    (V.T = _), Lf(e, !1, a, s);
    try {
      var E = c(),
        U = V.S;
      if (
        (U !== null && U(_, E), E !== null && typeof E == 'object' && typeof E.then == 'function')
      ) {
        var F = l_(E, u);
        Js(e, a, F, pn(e));
      } else Js(e, a, u, pn(e));
    } catch (Q) {
      Js(e, a, { then: function () {}, status: 'rejected', reason: Q }, pn());
    } finally {
      (I.p = d), (V.T = p);
    }
  }
  function d_() {}
  function zf(e, a, s, u) {
    if (e.tag !== 5) throw Error(i(476));
    var c = Ag(e).queue;
    Ng(
      e,
      c,
      a,
      me,
      s === null
        ? d_
        : function () {
            return kg(e), s(u);
          }
    );
  }
  function Ag(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: me,
      baseState: me,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: me,
      },
      next: null,
    };
    var s = {};
    return (
      (a.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wa,
          lastRenderedState: s,
        },
        next: null,
      }),
      (e.memoizedState = a),
      (e = e.alternate),
      e !== null && (e.memoizedState = a),
      a
    );
  }
  function kg(e) {
    var a = Ag(e).next.queue;
    Js(e, a, {}, pn());
  }
  function Uf() {
    return Gt(pl);
  }
  function Rg() {
    return Et().memoizedState;
  }
  function jg() {
    return Et().memoizedState;
  }
  function h_(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var s = pn();
          e = Ja(s);
          var u = er(a, e, s);
          u !== null && (vn(u, a, s), $s(u, a, s)), (a = { cache: df() }), (e.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function m_(e, a, s) {
    var u = pn();
    (s = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null }),
      Ku(e) ? Ug(a, s) : ((s = tf(e, a, s, u)), s !== null && (vn(s, e, u), Lg(s, a, u)));
  }
  function zg(e, a, s) {
    var u = pn();
    Js(e, a, s, u);
  }
  function Js(e, a, s, u) {
    var c = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Ku(e)) Ug(a, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = a.lastRenderedReducer), d !== null)
      )
        try {
          var p = a.lastRenderedState,
            _ = d(p, s);
          if (((c.hasEagerState = !0), (c.eagerState = _), dn(_, p)))
            return ku(e, a, c, 0), ot === null && Au(), !1;
        } catch {
        } finally {
        }
      if (((s = tf(e, a, c, u)), s !== null)) return vn(s, e, u), Lg(s, a, u), !0;
    }
    return !1;
  }
  function Lf(e, a, s, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: gd(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ku(e))
    ) {
      if (a) throw Error(i(479));
    } else (a = tf(e, s, u, 2)), a !== null && vn(a, e, 2);
  }
  function Ku(e) {
    var a = e.alternate;
    return e === He || (a !== null && a === He);
  }
  function Ug(e, a) {
    zi = Zu = !0;
    var s = e.pending;
    s === null ? (a.next = a) : ((a.next = s.next), (s.next = a)), (e.pending = a);
  }
  function Lg(e, a, s) {
    if ((s & 4194048) !== 0) {
      var u = a.lanes;
      (u &= e.pendingLanes), (s |= u), (a.lanes = s), hi(e, s);
    }
  }
  var Wu = {
      readContext: Gt,
      use: Gu,
      useCallback: _t,
      useContext: _t,
      useEffect: _t,
      useImperativeHandle: _t,
      useLayoutEffect: _t,
      useInsertionEffect: _t,
      useMemo: _t,
      useReducer: _t,
      useRef: _t,
      useState: _t,
      useDebugValue: _t,
      useDeferredValue: _t,
      useTransition: _t,
      useSyncExternalStore: _t,
      useId: _t,
      useHostTransitionStatus: _t,
      useFormState: _t,
      useActionState: _t,
      useOptimistic: _t,
      useMemoCache: _t,
      useCacheRefresh: _t,
    },
    Bg = {
      readContext: Gt,
      use: Gu,
      useCallback: function (e, a) {
        return (un().memoizedState = [e, a === void 0 ? null : a]), e;
      },
      useContext: Gt,
      useEffect: Sg,
      useImperativeHandle: function (e, a, s) {
        (s = s != null ? s.concat([e]) : null), Qu(4194308, 4, Eg.bind(null, a, e), s);
      },
      useLayoutEffect: function (e, a) {
        return Qu(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Qu(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var s = un();
        a = a === void 0 ? null : a;
        var u = e();
        if (Gr) {
          ce(!0);
          try {
            e();
          } finally {
            ce(!1);
          }
        }
        return (s.memoizedState = [u, a]), u;
      },
      useReducer: function (e, a, s) {
        var u = un();
        if (s !== void 0) {
          var c = s(a);
          if (Gr) {
            ce(!0);
            try {
              s(a);
            } finally {
              ce(!1);
            }
          }
        } else c = a;
        return (
          (u.memoizedState = u.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (u.queue = e),
          (e = e.dispatch = m_.bind(null, He, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = un();
        return (e = { current: e }), (a.memoizedState = e);
      },
      useState: function (e) {
        e = Af(e);
        var a = e.queue,
          s = zg.bind(null, He, a);
        return (a.dispatch = s), [e.memoizedState, s];
      },
      useDebugValue: Rf,
      useDeferredValue: function (e, a) {
        var s = un();
        return jf(s, e, a);
      },
      useTransition: function () {
        var e = Af(!1);
        return (e = Ng.bind(null, He, e.queue, !0, !1)), (un().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, a, s) {
        var u = He,
          c = un();
        if (Xe) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = a()), ot === null)) throw Error(i(349));
          (Ge & 124) !== 0 || ig(u, a, s);
        }
        c.memoizedState = s;
        var d = { value: s, getSnapshot: a };
        return (
          (c.queue = d),
          Sg(lg.bind(null, u, d, e), [e]),
          (u.flags |= 2048),
          Li(9, $u(), sg.bind(null, u, d, s, a), null),
          s
        );
      },
      useId: function () {
        var e = un(),
          a = ot.identifierPrefix;
        if (Xe) {
          var s = _a,
            u = ba;
          (s = (u & ~(1 << (32 - De(u) - 1))).toString(32) + s),
            (a = '«' + a + 'R' + s),
            (s = Fu++),
            0 < s && (a += 'H' + s.toString(32)),
            (a += '»');
        } else (s = u_++), (a = '«' + a + 'r' + s.toString(32) + '»');
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: Uf,
      useFormState: yg,
      useActionState: yg,
      useOptimistic: function (e) {
        var a = un();
        a.memoizedState = a.baseState = e;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (a.queue = s), (a = Lf.bind(null, He, !0, s)), (s.dispatch = a), [e, a];
      },
      useMemoCache: Mf,
      useCacheRefresh: function () {
        return (un().memoizedState = h_.bind(null, He));
      },
    },
    Hg = {
      readContext: Gt,
      use: Gu,
      useCallback: Cg,
      useContext: Gt,
      useEffect: xg,
      useImperativeHandle: Tg,
      useInsertionEffect: wg,
      useLayoutEffect: Og,
      useMemo: Mg,
      useReducer: Pu,
      useRef: _g,
      useState: function () {
        return Pu(wa);
      },
      useDebugValue: Rf,
      useDeferredValue: function (e, a) {
        var s = Et();
        return Dg(s, rt.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Pu(wa)[0],
          a = Et().memoizedState;
        return [typeof e == 'boolean' ? e : Xs(e), a];
      },
      useSyncExternalStore: rg,
      useId: Rg,
      useHostTransitionStatus: Uf,
      useFormState: pg,
      useActionState: pg,
      useOptimistic: function (e, a) {
        var s = Et();
        return cg(s, rt, e, a);
      },
      useMemoCache: Mf,
      useCacheRefresh: jg,
    },
    g_ = {
      readContext: Gt,
      use: Gu,
      useCallback: Cg,
      useContext: Gt,
      useEffect: xg,
      useImperativeHandle: Tg,
      useInsertionEffect: wg,
      useLayoutEffect: Og,
      useMemo: Mg,
      useReducer: Nf,
      useRef: _g,
      useState: function () {
        return Nf(wa);
      },
      useDebugValue: Rf,
      useDeferredValue: function (e, a) {
        var s = Et();
        return rt === null ? jf(s, e, a) : Dg(s, rt.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Nf(wa)[0],
          a = Et().memoizedState;
        return [typeof e == 'boolean' ? e : Xs(e), a];
      },
      useSyncExternalStore: rg,
      useId: Rg,
      useHostTransitionStatus: Uf,
      useFormState: bg,
      useActionState: bg,
      useOptimistic: function (e, a) {
        var s = Et();
        return rt !== null ? cg(s, rt, e, a) : ((s.baseState = e), [e, s.queue.dispatch]);
      },
      useMemoCache: Mf,
      useCacheRefresh: jg,
    },
    Bi = null,
    el = 0;
  function Xu(e) {
    var a = el;
    return (el += 1), Bi === null && (Bi = []), Wm(Bi, e, a);
  }
  function tl(e, a) {
    (a = a.props.ref), (e.ref = a !== void 0 ? a : null);
  }
  function Iu(e, a) {
    throw a.$$typeof === v
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(a)),
        Error(
          i(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(a).join(', ') + '}' : e
          )
        ));
  }
  function Vg(e) {
    var a = e._init;
    return a(e._payload);
  }
  function qg(e) {
    function a(j, A) {
      if (e) {
        var z = j.deletions;
        z === null ? ((j.deletions = [A]), (j.flags |= 16)) : z.push(A);
      }
    }
    function s(j, A) {
      if (!e) return null;
      for (; A !== null; ) a(j, A), (A = A.sibling);
      return null;
    }
    function u(j) {
      for (var A = new Map(); j !== null; )
        j.key !== null ? A.set(j.key, j) : A.set(j.index, j), (j = j.sibling);
      return A;
    }
    function c(j, A) {
      return (j = va(j, A)), (j.index = 0), (j.sibling = null), j;
    }
    function d(j, A, z) {
      return (
        (j.index = z),
        e
          ? ((z = j.alternate),
            z !== null
              ? ((z = z.index), z < A ? ((j.flags |= 67108866), A) : z)
              : ((j.flags |= 67108866), A))
          : ((j.flags |= 1048576), A)
      );
    }
    function p(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function _(j, A, z, P) {
      return A === null || A.tag !== 6
        ? ((A = af(z, j.mode, P)), (A.return = j), A)
        : ((A = c(A, z)), (A.return = j), A);
    }
    function E(j, A, z, P) {
      var ge = z.type;
      return ge === S
        ? F(j, A, z.props.children, P, z.key)
        : A !== null &&
            (A.elementType === ge ||
              (typeof ge == 'object' && ge !== null && ge.$$typeof === ie && Vg(ge) === A.type))
          ? ((A = c(A, z.props)), tl(A, z), (A.return = j), A)
          : ((A = ju(z.type, z.key, z.props, null, j.mode, P)), tl(A, z), (A.return = j), A);
    }
    function U(j, A, z, P) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== z.containerInfo ||
        A.stateNode.implementation !== z.implementation
        ? ((A = rf(z, j.mode, P)), (A.return = j), A)
        : ((A = c(A, z.children || [])), (A.return = j), A);
    }
    function F(j, A, z, P, ge) {
      return A === null || A.tag !== 7
        ? ((A = Lr(z, j.mode, P, ge)), (A.return = j), A)
        : ((A = c(A, z)), (A.return = j), A);
    }
    function Q(j, A, z) {
      if ((typeof A == 'string' && A !== '') || typeof A == 'number' || typeof A == 'bigint')
        return (A = af('' + A, j.mode, z)), (A.return = j), A;
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case b:
            return (z = ju(A.type, A.key, A.props, null, j.mode, z)), tl(z, A), (z.return = j), z;
          case w:
            return (A = rf(A, j.mode, z)), (A.return = j), A;
          case ie:
            var P = A._init;
            return (A = P(A._payload)), Q(j, A, z);
        }
        if (Me(A) || se(A)) return (A = Lr(A, j.mode, z, null)), (A.return = j), A;
        if (typeof A.then == 'function') return Q(j, Xu(A), z);
        if (A.$$typeof === k) return Q(j, Bu(j, A), z);
        Iu(j, A);
      }
      return null;
    }
    function L(j, A, z, P) {
      var ge = A !== null ? A.key : null;
      if ((typeof z == 'string' && z !== '') || typeof z == 'number' || typeof z == 'bigint')
        return ge !== null ? null : _(j, A, '' + z, P);
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case b:
            return z.key === ge ? E(j, A, z, P) : null;
          case w:
            return z.key === ge ? U(j, A, z, P) : null;
          case ie:
            return (ge = z._init), (z = ge(z._payload)), L(j, A, z, P);
        }
        if (Me(z) || se(z)) return ge !== null ? null : F(j, A, z, P, null);
        if (typeof z.then == 'function') return L(j, A, Xu(z), P);
        if (z.$$typeof === k) return L(j, A, Bu(j, z), P);
        Iu(j, z);
      }
      return null;
    }
    function H(j, A, z, P, ge) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return (j = j.get(z) || null), _(A, j, '' + P, ge);
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case b:
            return (j = j.get(P.key === null ? z : P.key) || null), E(A, j, P, ge);
          case w:
            return (j = j.get(P.key === null ? z : P.key) || null), U(A, j, P, ge);
          case ie:
            var qe = P._init;
            return (P = qe(P._payload)), H(j, A, z, P, ge);
        }
        if (Me(P) || se(P)) return (j = j.get(z) || null), F(A, j, P, ge, null);
        if (typeof P.then == 'function') return H(j, A, z, Xu(P), ge);
        if (P.$$typeof === k) return H(j, A, z, Bu(A, P), ge);
        Iu(A, P);
      }
      return null;
    }
    function Ne(j, A, z, P) {
      for (
        var ge = null, qe = null, pe = A, Ee = (A = 0), Ut = null;
        pe !== null && Ee < z.length;
        Ee++
      ) {
        pe.index > Ee ? ((Ut = pe), (pe = null)) : (Ut = pe.sibling);
        var Qe = L(j, pe, z[Ee], P);
        if (Qe === null) {
          pe === null && (pe = Ut);
          break;
        }
        e && pe && Qe.alternate === null && a(j, pe),
          (A = d(Qe, A, Ee)),
          qe === null ? (ge = Qe) : (qe.sibling = Qe),
          (qe = Qe),
          (pe = Ut);
      }
      if (Ee === z.length) return s(j, pe), Xe && Hr(j, Ee), ge;
      if (pe === null) {
        for (; Ee < z.length; Ee++)
          (pe = Q(j, z[Ee], P)),
            pe !== null &&
              ((A = d(pe, A, Ee)), qe === null ? (ge = pe) : (qe.sibling = pe), (qe = pe));
        return Xe && Hr(j, Ee), ge;
      }
      for (pe = u(pe); Ee < z.length; Ee++)
        (Ut = H(pe, j, Ee, z[Ee], P)),
          Ut !== null &&
            (e && Ut.alternate !== null && pe.delete(Ut.key === null ? Ee : Ut.key),
            (A = d(Ut, A, Ee)),
            qe === null ? (ge = Ut) : (qe.sibling = Ut),
            (qe = Ut));
      return (
        e &&
          pe.forEach(function (pr) {
            return a(j, pr);
          }),
        Xe && Hr(j, Ee),
        ge
      );
    }
    function Oe(j, A, z, P) {
      if (z == null) throw Error(i(151));
      for (
        var ge = null, qe = null, pe = A, Ee = (A = 0), Ut = null, Qe = z.next();
        pe !== null && !Qe.done;
        Ee++, Qe = z.next()
      ) {
        pe.index > Ee ? ((Ut = pe), (pe = null)) : (Ut = pe.sibling);
        var pr = L(j, pe, Qe.value, P);
        if (pr === null) {
          pe === null && (pe = Ut);
          break;
        }
        e && pe && pr.alternate === null && a(j, pe),
          (A = d(pr, A, Ee)),
          qe === null ? (ge = pr) : (qe.sibling = pr),
          (qe = pr),
          (pe = Ut);
      }
      if (Qe.done) return s(j, pe), Xe && Hr(j, Ee), ge;
      if (pe === null) {
        for (; !Qe.done; Ee++, Qe = z.next())
          (Qe = Q(j, Qe.value, P)),
            Qe !== null &&
              ((A = d(Qe, A, Ee)), qe === null ? (ge = Qe) : (qe.sibling = Qe), (qe = Qe));
        return Xe && Hr(j, Ee), ge;
      }
      for (pe = u(pe); !Qe.done; Ee++, Qe = z.next())
        (Qe = H(pe, j, Ee, Qe.value, P)),
          Qe !== null &&
            (e && Qe.alternate !== null && pe.delete(Qe.key === null ? Ee : Qe.key),
            (A = d(Qe, A, Ee)),
            qe === null ? (ge = Qe) : (qe.sibling = Qe),
            (qe = Qe));
      return (
        e &&
          pe.forEach(function (yS) {
            return a(j, yS);
          }),
        Xe && Hr(j, Ee),
        ge
      );
    }
    function st(j, A, z, P) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === S &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case b:
            e: {
              for (var ge = z.key; A !== null; ) {
                if (A.key === ge) {
                  if (((ge = z.type), ge === S)) {
                    if (A.tag === 7) {
                      s(j, A.sibling), (P = c(A, z.props.children)), (P.return = j), (j = P);
                      break e;
                    }
                  } else if (
                    A.elementType === ge ||
                    (typeof ge == 'object' &&
                      ge !== null &&
                      ge.$$typeof === ie &&
                      Vg(ge) === A.type)
                  ) {
                    s(j, A.sibling), (P = c(A, z.props)), tl(P, z), (P.return = j), (j = P);
                    break e;
                  }
                  s(j, A);
                  break;
                } else a(j, A);
                A = A.sibling;
              }
              z.type === S
                ? ((P = Lr(z.props.children, j.mode, P, z.key)), (P.return = j), (j = P))
                : ((P = ju(z.type, z.key, z.props, null, j.mode, P)),
                  tl(P, z),
                  (P.return = j),
                  (j = P));
            }
            return p(j);
          case w:
            e: {
              for (ge = z.key; A !== null; ) {
                if (A.key === ge)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === z.containerInfo &&
                    A.stateNode.implementation === z.implementation
                  ) {
                    s(j, A.sibling), (P = c(A, z.children || [])), (P.return = j), (j = P);
                    break e;
                  } else {
                    s(j, A);
                    break;
                  }
                else a(j, A);
                A = A.sibling;
              }
              (P = rf(z, j.mode, P)), (P.return = j), (j = P);
            }
            return p(j);
          case ie:
            return (ge = z._init), (z = ge(z._payload)), st(j, A, z, P);
        }
        if (Me(z)) return Ne(j, A, z, P);
        if (se(z)) {
          if (((ge = se(z)), typeof ge != 'function')) throw Error(i(150));
          return (z = ge.call(z)), Oe(j, A, z, P);
        }
        if (typeof z.then == 'function') return st(j, A, Xu(z), P);
        if (z.$$typeof === k) return st(j, A, Bu(j, z), P);
        Iu(j, z);
      }
      return (typeof z == 'string' && z !== '') || typeof z == 'number' || typeof z == 'bigint'
        ? ((z = '' + z),
          A !== null && A.tag === 6
            ? (s(j, A.sibling), (P = c(A, z)), (P.return = j), (j = P))
            : (s(j, A), (P = af(z, j.mode, P)), (P.return = j), (j = P)),
          p(j))
        : s(j, A);
    }
    return function (j, A, z, P) {
      try {
        el = 0;
        var ge = st(j, A, z, P);
        return (Bi = null), ge;
      } catch (pe) {
        if (pe === Gs || pe === Vu) throw pe;
        var qe = hn(29, pe, null, j.mode);
        return (qe.lanes = P), (qe.return = j), qe;
      } finally {
      }
    };
  }
  var Hi = qg(!0),
    Yg = qg(!1),
    Nn = G(null),
    Kn = null;
  function nr(e) {
    var a = e.alternate;
    re(Dt, Dt.current & 1),
      re(Nn, e),
      Kn === null && (a === null || ji.current !== null || a.memoizedState !== null) && (Kn = e);
  }
  function Zg(e) {
    if (e.tag === 22) {
      if ((re(Dt, Dt.current), re(Nn, e), Kn === null)) {
        var a = e.alternate;
        a !== null && a.memoizedState !== null && (Kn = e);
      }
    } else ar();
  }
  function ar() {
    re(Dt, Dt.current), re(Nn, Nn.current);
  }
  function Oa(e) {
    le(Nn), Kn === e && (Kn = null), le(Dt);
  }
  var Dt = G(0);
  function Ju(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var s = a.memoizedState;
        if (s !== null && ((s = s.dehydrated), s === null || s.data === '$?' || Cd(s))) return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === e) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return null;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
    return null;
  }
  function Bf(e, a, s, u) {
    (a = e.memoizedState),
      (s = s(u, a)),
      (s = s == null ? a : y({}, a, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Hf = {
    enqueueSetState: function (e, a, s) {
      e = e._reactInternals;
      var u = pn(),
        c = Ja(u);
      (c.payload = a),
        s != null && (c.callback = s),
        (a = er(e, c, u)),
        a !== null && (vn(a, e, u), $s(a, e, u));
    },
    enqueueReplaceState: function (e, a, s) {
      e = e._reactInternals;
      var u = pn(),
        c = Ja(u);
      (c.tag = 1),
        (c.payload = a),
        s != null && (c.callback = s),
        (a = er(e, c, u)),
        a !== null && (vn(a, e, u), $s(a, e, u));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var s = pn(),
        u = Ja(s);
      (u.tag = 2),
        a != null && (u.callback = a),
        (a = er(e, u, s)),
        a !== null && (vn(a, e, s), $s(a, e, s));
    },
  };
  function Fg(e, a, s, u, c, d, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(u, d, p)
        : a.prototype && a.prototype.isPureReactComponent
          ? !Ls(s, u) || !Ls(c, d)
          : !0
    );
  }
  function Gg(e, a, s, u) {
    (e = a.state),
      typeof a.componentWillReceiveProps == 'function' && a.componentWillReceiveProps(s, u),
      typeof a.UNSAFE_componentWillReceiveProps == 'function' &&
        a.UNSAFE_componentWillReceiveProps(s, u),
      a.state !== e && Hf.enqueueReplaceState(a, a.state, null);
  }
  function Pr(e, a) {
    var s = a;
    if ('ref' in a) {
      s = {};
      for (var u in a) u !== 'ref' && (s[u] = a[u]);
    }
    if ((e = e.defaultProps)) {
      s === a && (s = y({}, s));
      for (var c in e) s[c] === void 0 && (s[c] = e[c]);
    }
    return s;
  }
  var eo =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var a = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(a)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function Pg(e) {
    eo(e);
  }
  function $g(e) {
    console.error(e);
  }
  function Qg(e) {
    eo(e);
  }
  function to(e, a) {
    try {
      var s = e.onUncaughtError;
      s(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Kg(e, a, s) {
    try {
      var u = e.onCaughtError;
      u(s.value, { componentStack: s.stack, errorBoundary: a.tag === 1 ? a.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Vf(e, a, s) {
    return (
      (s = Ja(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        to(e, a);
      }),
      s
    );
  }
  function Wg(e) {
    return (e = Ja(e)), (e.tag = 3), e;
  }
  function Xg(e, a, s, u) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var d = u.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          Kg(a, s, u);
        });
    }
    var p = s.stateNode;
    p !== null &&
      typeof p.componentDidCatch == 'function' &&
      (e.callback = function () {
        Kg(a, s, u),
          typeof c != 'function' && (or === null ? (or = new Set([this])) : or.add(this));
        var _ = u.stack;
        this.componentDidCatch(u.value, { componentStack: _ !== null ? _ : '' });
      });
  }
  function y_(e, a, s, u, c) {
    if (((s.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
      if (((a = s.alternate), a !== null && Ys(a, s, c, !0), (s = Nn.current), s !== null)) {
        switch (s.tag) {
          case 13:
            return (
              Kn === null ? cd() : s.alternate === null && pt === 0 && (pt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = c),
              u === gf
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null ? (s.updateQueue = new Set([u])) : a.add(u),
                  dd(e, u, c)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              u === gf
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null
                    ? ((a = { transitions: null, markerInstances: null, retryQueue: new Set([u]) }),
                      (s.updateQueue = a))
                    : ((s = a.retryQueue), s === null ? (a.retryQueue = new Set([u])) : s.add(u)),
                  dd(e, u, c)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return dd(e, u, c), cd(), !1;
    }
    if (Xe)
      return (
        (a = Nn.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = c),
            u !== uf && ((e = Error(i(422), { cause: u })), qs(Tn(e, s))))
          : (u !== uf && ((a = Error(i(423), { cause: u })), qs(Tn(a, s))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (u = Tn(u, s)),
            (c = Vf(e.stateNode, u, c)),
            vf(e, c),
            pt !== 4 && (pt = 2)),
        !1
      );
    var d = Error(i(520), { cause: u });
    if (((d = Tn(d, s)), ul === null ? (ul = [d]) : ul.push(d), pt !== 4 && (pt = 2), a === null))
      return !0;
    (u = Tn(u, s)), (s = a);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (e = c & -c),
            (s.lanes |= e),
            (e = Vf(s.stateNode, u, e)),
            vf(s, e),
            !1
          );
        case 1:
          if (
            ((a = s.type),
            (d = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == 'function' ||
                (d !== null &&
                  typeof d.componentDidCatch == 'function' &&
                  (or === null || !or.has(d)))))
          )
            return (
              (s.flags |= 65536),
              (c &= -c),
              (s.lanes |= c),
              (c = Wg(c)),
              Xg(c, e, s, u),
              vf(s, c),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var Ig = Error(i(461)),
    jt = !1;
  function Lt(e, a, s, u) {
    a.child = e === null ? Yg(a, null, s, u) : Hi(a, e.child, s, u);
  }
  function Jg(e, a, s, u, c) {
    s = s.render;
    var d = a.ref;
    if ('ref' in u) {
      var p = {};
      for (var _ in u) _ !== 'ref' && (p[_] = u[_]);
    } else p = u;
    return (
      Zr(a),
      (u = wf(e, a, s, p, d, c)),
      (_ = Of()),
      e !== null && !jt
        ? (Ef(e, a, c), Ea(e, a, c))
        : (Xe && _ && sf(a), (a.flags |= 1), Lt(e, a, u, c), a.child)
    );
  }
  function ey(e, a, s, u, c) {
    if (e === null) {
      var d = s.type;
      return typeof d == 'function' && !nf(d) && d.defaultProps === void 0 && s.compare === null
        ? ((a.tag = 15), (a.type = d), ty(e, a, d, u, c))
        : ((e = ju(s.type, null, u, a, a.mode, c)), (e.ref = a.ref), (e.return = a), (a.child = e));
    }
    if (((d = e.child), !Qf(e, c))) {
      var p = d.memoizedProps;
      if (((s = s.compare), (s = s !== null ? s : Ls), s(p, u) && e.ref === a.ref))
        return Ea(e, a, c);
    }
    return (a.flags |= 1), (e = va(d, u)), (e.ref = a.ref), (e.return = a), (a.child = e);
  }
  function ty(e, a, s, u, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Ls(d, u) && e.ref === a.ref)
        if (((jt = !1), (a.pendingProps = u = d), Qf(e, c))) (e.flags & 131072) !== 0 && (jt = !0);
        else return (a.lanes = e.lanes), Ea(e, a, c);
    }
    return qf(e, a, s, u, c);
  }
  function ny(e, a, s) {
    var u = a.pendingProps,
      c = u.children,
      d = e !== null ? e.memoizedState : null;
    if (u.mode === 'hidden') {
      if ((a.flags & 128) !== 0) {
        if (((u = d !== null ? d.baseLanes | s : s), e !== null)) {
          for (c = a.child = e.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          a.childLanes = d & ~u;
        } else (a.childLanes = 0), (a.child = null);
        return ay(e, a, u, s);
      }
      if ((s & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Hu(a, d !== null ? d.cachePool : null),
          d !== null ? tg(a, d) : _f(),
          Zg(a);
      else
        return (a.lanes = a.childLanes = 536870912), ay(e, a, d !== null ? d.baseLanes | s : s, s);
    } else
      d !== null
        ? (Hu(a, d.cachePool), tg(a, d), ar(), (a.memoizedState = null))
        : (e !== null && Hu(a, null), _f(), ar());
    return Lt(e, a, c, s), a.child;
  }
  function ay(e, a, s, u) {
    var c = mf();
    return (
      (c = c === null ? null : { parent: Mt._currentValue, pool: c }),
      (a.memoizedState = { baseLanes: s, cachePool: c }),
      e !== null && Hu(a, null),
      _f(),
      Zg(a),
      e !== null && Ys(e, a, u, !0),
      null
    );
  }
  function no(e, a) {
    var s = a.ref;
    if (s === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof s != 'function' && typeof s != 'object') throw Error(i(284));
      (e === null || e.ref !== s) && (a.flags |= 4194816);
    }
  }
  function qf(e, a, s, u, c) {
    return (
      Zr(a),
      (s = wf(e, a, s, u, void 0, c)),
      (u = Of()),
      e !== null && !jt
        ? (Ef(e, a, c), Ea(e, a, c))
        : (Xe && u && sf(a), (a.flags |= 1), Lt(e, a, s, c), a.child)
    );
  }
  function ry(e, a, s, u, c, d) {
    return (
      Zr(a),
      (a.updateQueue = null),
      (s = ag(a, u, s, c)),
      ng(e),
      (u = Of()),
      e !== null && !jt
        ? (Ef(e, a, d), Ea(e, a, d))
        : (Xe && u && sf(a), (a.flags |= 1), Lt(e, a, s, d), a.child)
    );
  }
  function iy(e, a, s, u, c) {
    if ((Zr(a), a.stateNode === null)) {
      var d = Di,
        p = s.contextType;
      typeof p == 'object' && p !== null && (d = Gt(p)),
        (d = new s(u, d)),
        (a.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Hf),
        (a.stateNode = d),
        (d._reactInternals = a),
        (d = a.stateNode),
        (d.props = u),
        (d.state = a.memoizedState),
        (d.refs = {}),
        yf(a),
        (p = s.contextType),
        (d.context = typeof p == 'object' && p !== null ? Gt(p) : Di),
        (d.state = a.memoizedState),
        (p = s.getDerivedStateFromProps),
        typeof p == 'function' && (Bf(a, s, p, u), (d.state = a.memoizedState)),
        typeof s.getDerivedStateFromProps == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function' ||
          (typeof d.UNSAFE_componentWillMount != 'function' &&
            typeof d.componentWillMount != 'function') ||
          ((p = d.state),
          typeof d.componentWillMount == 'function' && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == 'function' && d.UNSAFE_componentWillMount(),
          p !== d.state && Hf.enqueueReplaceState(d, d.state, null),
          Ks(a, u, d, c),
          Qs(),
          (d.state = a.memoizedState)),
        typeof d.componentDidMount == 'function' && (a.flags |= 4194308),
        (u = !0);
    } else if (e === null) {
      d = a.stateNode;
      var _ = a.memoizedProps,
        E = Pr(s, _);
      d.props = E;
      var U = d.context,
        F = s.contextType;
      (p = Di), typeof F == 'object' && F !== null && (p = Gt(F));
      var Q = s.getDerivedStateFromProps;
      (F = typeof Q == 'function' || typeof d.getSnapshotBeforeUpdate == 'function'),
        (_ = a.pendingProps !== _),
        F ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((_ || U !== p) && Gg(a, d, u, p)),
        (Ia = !1);
      var L = a.memoizedState;
      (d.state = L),
        Ks(a, u, d, c),
        Qs(),
        (U = a.memoizedState),
        _ || L !== U || Ia
          ? (typeof Q == 'function' && (Bf(a, s, Q, u), (U = a.memoizedState)),
            (E = Ia || Fg(a, s, E, u, L, U, p))
              ? (F ||
                  (typeof d.UNSAFE_componentWillMount != 'function' &&
                    typeof d.componentWillMount != 'function') ||
                  (typeof d.componentWillMount == 'function' && d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == 'function' &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == 'function' && (a.flags |= 4194308))
              : (typeof d.componentDidMount == 'function' && (a.flags |= 4194308),
                (a.memoizedProps = u),
                (a.memoizedState = U)),
            (d.props = u),
            (d.state = U),
            (d.context = p),
            (u = E))
          : (typeof d.componentDidMount == 'function' && (a.flags |= 4194308), (u = !1));
    } else {
      (d = a.stateNode),
        pf(e, a),
        (p = a.memoizedProps),
        (F = Pr(s, p)),
        (d.props = F),
        (Q = a.pendingProps),
        (L = d.context),
        (U = s.contextType),
        (E = Di),
        typeof U == 'object' && U !== null && (E = Gt(U)),
        (_ = s.getDerivedStateFromProps),
        (U = typeof _ == 'function' || typeof d.getSnapshotBeforeUpdate == 'function') ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((p !== Q || L !== E) && Gg(a, d, u, E)),
        (Ia = !1),
        (L = a.memoizedState),
        (d.state = L),
        Ks(a, u, d, c),
        Qs();
      var H = a.memoizedState;
      p !== Q || L !== H || Ia || (e !== null && e.dependencies !== null && Lu(e.dependencies))
        ? (typeof _ == 'function' && (Bf(a, s, _, u), (H = a.memoizedState)),
          (F =
            Ia ||
            Fg(a, s, F, u, L, H, E) ||
            (e !== null && e.dependencies !== null && Lu(e.dependencies)))
            ? (U ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' && d.componentWillUpdate(u, H, E),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(u, H, E)),
              typeof d.componentDidUpdate == 'function' && (a.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == 'function' && (a.flags |= 1024))
            : (typeof d.componentDidUpdate != 'function' ||
                (p === e.memoizedProps && L === e.memoizedState) ||
                (a.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != 'function' ||
                (p === e.memoizedProps && L === e.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = u),
              (a.memoizedState = H)),
          (d.props = u),
          (d.state = H),
          (d.context = E),
          (u = F))
        : (typeof d.componentDidUpdate != 'function' ||
            (p === e.memoizedProps && L === e.memoizedState) ||
            (a.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (p === e.memoizedProps && L === e.memoizedState) ||
            (a.flags |= 1024),
          (u = !1));
    }
    return (
      (d = u),
      no(e, a),
      (u = (a.flags & 128) !== 0),
      d || u
        ? ((d = a.stateNode),
          (s = u && typeof s.getDerivedStateFromError != 'function' ? null : d.render()),
          (a.flags |= 1),
          e !== null && u
            ? ((a.child = Hi(a, e.child, null, c)), (a.child = Hi(a, null, s, c)))
            : Lt(e, a, s, c),
          (a.memoizedState = d.state),
          (e = a.child))
        : (e = Ea(e, a, c)),
      e
    );
  }
  function sy(e, a, s, u) {
    return Vs(), (a.flags |= 256), Lt(e, a, s, u), a.child;
  }
  var Yf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Zf(e) {
    return { baseLanes: e, cachePool: $m() };
  }
  function Ff(e, a, s) {
    return (e = e !== null ? e.childLanes & ~s : 0), a && (e |= An), e;
  }
  function ly(e, a, s) {
    var u = a.pendingProps,
      c = !1,
      d = (a.flags & 128) !== 0,
      p;
    if (
      ((p = d) || (p = e !== null && e.memoizedState === null ? !1 : (Dt.current & 2) !== 0),
      p && ((c = !0), (a.flags &= -129)),
      (p = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (Xe) {
        if ((c ? nr(a) : ar(), Xe)) {
          var _ = yt,
            E;
          if ((E = _)) {
            e: {
              for (E = _, _ = Qn; E.nodeType !== 8; ) {
                if (!_) {
                  _ = null;
                  break e;
                }
                if (((E = Un(E.nextSibling)), E === null)) {
                  _ = null;
                  break e;
                }
              }
              _ = E;
            }
            _ !== null
              ? ((a.memoizedState = {
                  dehydrated: _,
                  treeContext: Br !== null ? { id: ba, overflow: _a } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = hn(18, null, null, 0)),
                (E.stateNode = _),
                (E.return = a),
                (a.child = E),
                (Xt = a),
                (yt = null),
                (E = !0))
              : (E = !1);
          }
          E || qr(a);
        }
        if (((_ = a.memoizedState), _ !== null && ((_ = _.dehydrated), _ !== null)))
          return Cd(_) ? (a.lanes = 32) : (a.lanes = 536870912), null;
        Oa(a);
      }
      return (
        (_ = u.children),
        (u = u.fallback),
        c
          ? (ar(),
            (c = a.mode),
            (_ = ao({ mode: 'hidden', children: _ }, c)),
            (u = Lr(u, c, s, null)),
            (_.return = a),
            (u.return = a),
            (_.sibling = u),
            (a.child = _),
            (c = a.child),
            (c.memoizedState = Zf(s)),
            (c.childLanes = Ff(e, p, s)),
            (a.memoizedState = Yf),
            u)
          : (nr(a), Gf(a, _))
      );
    }
    if (((E = e.memoizedState), E !== null && ((_ = E.dehydrated), _ !== null))) {
      if (d)
        a.flags & 256
          ? (nr(a), (a.flags &= -257), (a = Pf(e, a, s)))
          : a.memoizedState !== null
            ? (ar(), (a.child = e.child), (a.flags |= 128), (a = null))
            : (ar(),
              (c = u.fallback),
              (_ = a.mode),
              (u = ao({ mode: 'visible', children: u.children }, _)),
              (c = Lr(c, _, s, null)),
              (c.flags |= 2),
              (u.return = a),
              (c.return = a),
              (u.sibling = c),
              (a.child = u),
              Hi(a, e.child, null, s),
              (u = a.child),
              (u.memoizedState = Zf(s)),
              (u.childLanes = Ff(e, p, s)),
              (a.memoizedState = Yf),
              (a = c));
      else if ((nr(a), Cd(_))) {
        if (((p = _.nextSibling && _.nextSibling.dataset), p)) var U = p.dgst;
        (p = U),
          (u = Error(i(419))),
          (u.stack = ''),
          (u.digest = p),
          qs({ value: u, source: null, stack: null }),
          (a = Pf(e, a, s));
      } else if ((jt || Ys(e, a, s, !1), (p = (s & e.childLanes) !== 0), jt || p)) {
        if (
          ((p = ot),
          p !== null &&
            ((u = s & -s),
            (u = (u & 42) !== 0 ? 1 : kr(u)),
            (u = (u & (p.suspendedLanes | s)) !== 0 ? 0 : u),
            u !== 0 && u !== E.retryLane))
        )
          throw ((E.retryLane = u), Mi(e, u), vn(p, e, u), Ig);
        _.data === '$?' || cd(), (a = Pf(e, a, s));
      } else
        _.data === '$?'
          ? ((a.flags |= 192), (a.child = e.child), (a = null))
          : ((e = E.treeContext),
            (yt = Un(_.nextSibling)),
            (Xt = a),
            (Xe = !0),
            (Vr = null),
            (Qn = !1),
            e !== null &&
              ((Mn[Dn++] = ba),
              (Mn[Dn++] = _a),
              (Mn[Dn++] = Br),
              (ba = e.id),
              (_a = e.overflow),
              (Br = a)),
            (a = Gf(a, u.children)),
            (a.flags |= 4096));
      return a;
    }
    return c
      ? (ar(),
        (c = u.fallback),
        (_ = a.mode),
        (E = e.child),
        (U = E.sibling),
        (u = va(E, { mode: 'hidden', children: u.children })),
        (u.subtreeFlags = E.subtreeFlags & 65011712),
        U !== null ? (c = va(U, c)) : ((c = Lr(c, _, s, null)), (c.flags |= 2)),
        (c.return = a),
        (u.return = a),
        (u.sibling = c),
        (a.child = u),
        (u = c),
        (c = a.child),
        (_ = e.child.memoizedState),
        _ === null
          ? (_ = Zf(s))
          : ((E = _.cachePool),
            E !== null
              ? ((U = Mt._currentValue), (E = E.parent !== U ? { parent: U, pool: U } : E))
              : (E = $m()),
            (_ = { baseLanes: _.baseLanes | s, cachePool: E })),
        (c.memoizedState = _),
        (c.childLanes = Ff(e, p, s)),
        (a.memoizedState = Yf),
        u)
      : (nr(a),
        (s = e.child),
        (e = s.sibling),
        (s = va(s, { mode: 'visible', children: u.children })),
        (s.return = a),
        (s.sibling = null),
        e !== null &&
          ((p = a.deletions), p === null ? ((a.deletions = [e]), (a.flags |= 16)) : p.push(e)),
        (a.child = s),
        (a.memoizedState = null),
        s);
  }
  function Gf(e, a) {
    return (a = ao({ mode: 'visible', children: a }, e.mode)), (a.return = e), (e.child = a);
  }
  function ao(e, a) {
    return (
      (e = hn(22, e, null, a)),
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
  function Pf(e, a, s) {
    return (
      Hi(a, e.child, null, s),
      (e = Gf(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function uy(e, a, s) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a), cf(e.return, a, s);
  }
  function $f(e, a, s, u, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: s,
          tailMode: c,
        })
      : ((d.isBackwards = a),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = u),
        (d.tail = s),
        (d.tailMode = c));
  }
  function oy(e, a, s) {
    var u = a.pendingProps,
      c = u.revealOrder,
      d = u.tail;
    if ((Lt(e, a, u.children, s), (u = Dt.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (a.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = a.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && uy(e, s, a);
          else if (e.tag === 19) uy(e, s, a);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === a) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === a) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      u &= 1;
    }
    switch ((re(Dt, u), c)) {
      case 'forwards':
        for (s = a.child, c = null; s !== null; )
          (e = s.alternate), e !== null && Ju(e) === null && (c = s), (s = s.sibling);
        (s = c),
          s === null ? ((c = a.child), (a.child = null)) : ((c = s.sibling), (s.sibling = null)),
          $f(a, !1, c, s, d);
        break;
      case 'backwards':
        for (s = null, c = a.child, a.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Ju(e) === null)) {
            a.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = s), (s = c), (c = e);
        }
        $f(a, !0, s, null, d);
        break;
      case 'together':
        $f(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Ea(e, a, s) {
    if (
      (e !== null && (a.dependencies = e.dependencies), (ur |= a.lanes), (s & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ys(e, a, s, !1), (s & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(i(153));
    if (a.child !== null) {
      for (e = a.child, s = va(e, e.pendingProps), a.child = s, s.return = a; e.sibling !== null; )
        (e = e.sibling), (s = s.sibling = va(e, e.pendingProps)), (s.return = a);
      s.sibling = null;
    }
    return a.child;
  }
  function Qf(e, a) {
    return (e.lanes & a) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Lu(e)));
  }
  function p_(e, a, s) {
    switch (a.tag) {
      case 3:
        at(a, a.stateNode.containerInfo), Xa(a, Mt, e.memoizedState.cache), Vs();
        break;
      case 27:
      case 5:
        Pa(a);
        break;
      case 4:
        at(a, a.stateNode.containerInfo);
        break;
      case 10:
        Xa(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (nr(a), (a.flags |= 128), null)
            : (s & a.child.childLanes) !== 0
              ? ly(e, a, s)
              : (nr(a), (e = Ea(e, a, s)), e !== null ? e.sibling : null);
        nr(a);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((u = (s & a.childLanes) !== 0),
          u || (Ys(e, a, s, !1), (u = (s & a.childLanes) !== 0)),
          c)
        ) {
          if (u) return oy(e, a, s);
          a.flags |= 128;
        }
        if (
          ((c = a.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          re(Dt, Dt.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), ny(e, a, s);
      case 24:
        Xa(a, Mt, e.memoizedState.cache);
    }
    return Ea(e, a, s);
  }
  function cy(e, a, s) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps) jt = !0;
      else {
        if (!Qf(e, s) && (a.flags & 128) === 0) return (jt = !1), p_(e, a, s);
        jt = (e.flags & 131072) !== 0;
      }
    else (jt = !1), Xe && (a.flags & 1048576) !== 0 && Vm(a, Uu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          e = a.pendingProps;
          var u = a.elementType,
            c = u._init;
          if (((u = c(u._payload)), (a.type = u), typeof u == 'function'))
            nf(u)
              ? ((e = Pr(u, e)), (a.tag = 1), (a = iy(null, a, u, e, s)))
              : ((a.tag = 0), (a = qf(null, a, u, e, s)));
          else {
            if (u != null) {
              if (((c = u.$$typeof), c === Y)) {
                (a.tag = 11), (a = Jg(null, a, u, e, s));
                break e;
              } else if (c === W) {
                (a.tag = 14), (a = ey(null, a, u, e, s));
                break e;
              }
            }
            throw ((a = Re(u) || u), Error(i(306, a, '')));
          }
        }
        return a;
      case 0:
        return qf(e, a, a.type, a.pendingProps, s);
      case 1:
        return (u = a.type), (c = Pr(u, a.pendingProps)), iy(e, a, u, c, s);
      case 3:
        e: {
          if ((at(a, a.stateNode.containerInfo), e === null)) throw Error(i(387));
          u = a.pendingProps;
          var d = a.memoizedState;
          (c = d.element), pf(e, a), Ks(a, u, null, s);
          var p = a.memoizedState;
          if (
            ((u = p.cache),
            Xa(a, Mt, u),
            u !== d.cache && ff(a, [Mt], s, !0),
            Qs(),
            (u = p.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: u, isDehydrated: !1, cache: p.cache }),
              (a.updateQueue.baseState = d),
              (a.memoizedState = d),
              a.flags & 256)
            ) {
              a = sy(e, a, u, s);
              break e;
            } else if (u !== c) {
              (c = Tn(Error(i(424)), a)), qs(c), (a = sy(e, a, u, s));
              break e;
            } else {
              switch (((e = a.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                yt = Un(e.firstChild),
                  Xt = a,
                  Xe = !0,
                  Vr = null,
                  Qn = !0,
                  s = Yg(a, null, u, s),
                  a.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((Vs(), u === c)) {
              a = Ea(e, a, s);
              break e;
            }
            Lt(e, a, u, s);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          no(e, a),
          e === null
            ? (s = mp(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = s)
              : Xe ||
                ((s = a.type),
                (e = a.pendingProps),
                (u = vo(we.current).createElement(s)),
                (u[Ft] = a),
                (u[sn] = e),
                Ht(u, s, e),
                Rt(u),
                (a.stateNode = u))
            : (a.memoizedState = mp(a.type, e.memoizedProps, a.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Pa(a),
          e === null &&
            Xe &&
            ((u = a.stateNode = fp(a.type, a.pendingProps, we.current)),
            (Xt = a),
            (Qn = !0),
            (c = yt),
            dr(a.type) ? ((Md = c), (yt = Un(u.firstChild))) : (yt = c)),
          Lt(e, a, a.pendingProps.children, s),
          no(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            Xe &&
            ((c = u = yt) &&
              ((u = G_(u, a.type, a.pendingProps, Qn)),
              u !== null
                ? ((a.stateNode = u), (Xt = a), (yt = Un(u.firstChild)), (Qn = !1), (c = !0))
                : (c = !1)),
            c || qr(a)),
          Pa(a),
          (c = a.type),
          (d = a.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (u = d.children),
          Od(c, d) ? (u = null) : p !== null && Od(c, p) && (a.flags |= 32),
          a.memoizedState !== null && ((c = wf(e, a, o_, null, null, s)), (pl._currentValue = c)),
          no(e, a),
          Lt(e, a, u, s),
          a.child
        );
      case 6:
        return (
          e === null &&
            Xe &&
            ((e = s = yt) &&
              ((s = P_(s, a.pendingProps, Qn)),
              s !== null ? ((a.stateNode = s), (Xt = a), (yt = null), (e = !0)) : (e = !1)),
            e || qr(a)),
          null
        );
      case 13:
        return ly(e, a, s);
      case 4:
        return (
          at(a, a.stateNode.containerInfo),
          (u = a.pendingProps),
          e === null ? (a.child = Hi(a, null, u, s)) : Lt(e, a, u, s),
          a.child
        );
      case 11:
        return Jg(e, a, a.type, a.pendingProps, s);
      case 7:
        return Lt(e, a, a.pendingProps, s), a.child;
      case 8:
        return Lt(e, a, a.pendingProps.children, s), a.child;
      case 12:
        return Lt(e, a, a.pendingProps.children, s), a.child;
      case 10:
        return (u = a.pendingProps), Xa(a, a.type, u.value), Lt(e, a, u.children, s), a.child;
      case 9:
        return (
          (c = a.type._context),
          (u = a.pendingProps.children),
          Zr(a),
          (c = Gt(c)),
          (u = u(c)),
          (a.flags |= 1),
          Lt(e, a, u, s),
          a.child
        );
      case 14:
        return ey(e, a, a.type, a.pendingProps, s);
      case 15:
        return ty(e, a, a.type, a.pendingProps, s);
      case 19:
        return oy(e, a, s);
      case 31:
        return (
          (u = a.pendingProps),
          (s = a.mode),
          (u = { mode: u.mode, children: u.children }),
          e === null
            ? ((s = ao(u, s)), (s.ref = a.ref), (a.child = s), (s.return = a), (a = s))
            : ((s = va(e.child, u)), (s.ref = a.ref), (a.child = s), (s.return = a), (a = s)),
          a
        );
      case 22:
        return ny(e, a, s);
      case 24:
        return (
          Zr(a),
          (u = Gt(Mt)),
          e === null
            ? ((c = mf()),
              c === null &&
                ((c = ot),
                (d = df()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= s),
                (c = d)),
              (a.memoizedState = { parent: u, cache: c }),
              yf(a),
              Xa(a, Mt, c))
            : ((e.lanes & s) !== 0 && (pf(e, a), Ks(a, null, null, s), Qs()),
              (c = e.memoizedState),
              (d = a.memoizedState),
              c.parent !== u
                ? ((c = { parent: u, cache: u }),
                  (a.memoizedState = c),
                  a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = c),
                  Xa(a, Mt, u))
                : ((u = d.cache), Xa(a, Mt, u), u !== c.cache && ff(a, [Mt], s, !0))),
          Lt(e, a, a.pendingProps.children, s),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(i(156, a.tag));
  }
  function Ta(e) {
    e.flags |= 4;
  }
  function fy(e, a) {
    if (a.type !== 'stylesheet' || (a.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !bp(a))) {
      if (
        ((a = Nn.current),
        a !== null &&
          ((Ge & 4194048) === Ge
            ? Kn !== null
            : ((Ge & 62914560) !== Ge && (Ge & 536870912) === 0) || a !== Kn))
      )
        throw ((Ps = gf), Qm);
      e.flags |= 8192;
    }
  }
  function ro(e, a) {
    a !== null && (e.flags |= 4),
      e.flags & 16384 && ((a = e.tag !== 22 ? fn() : 536870912), (e.lanes |= a), (Zi |= a));
  }
  function nl(e, a) {
    if (!Xe)
      switch (e.tailMode) {
        case 'hidden':
          a = e.tail;
          for (var s = null; a !== null; ) a.alternate !== null && (s = a), (a = a.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case 'collapsed':
          s = e.tail;
          for (var u = null; s !== null; ) s.alternate !== null && (u = s), (s = s.sibling);
          u === null
            ? a || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function dt(e) {
    var a = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      u = 0;
    if (a)
      for (var c = e.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (u |= c.subtreeFlags & 65011712),
          (u |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (u |= c.subtreeFlags),
          (u |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= u), (e.childLanes = s), a;
  }
  function v_(e, a, s) {
    var u = a.pendingProps;
    switch ((lf(a), a.tag)) {
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
        return dt(a), null;
      case 1:
        return dt(a), null;
      case 3:
        return (
          (s = a.stateNode),
          (u = null),
          e !== null && (u = e.memoizedState.cache),
          a.memoizedState.cache !== u && (a.flags |= 2048),
          xa(Mt),
          rn(),
          s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Hs(a)
              ? Ta(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), Zm())),
          dt(a),
          null
        );
      case 26:
        return (
          (s = a.memoizedState),
          e === null
            ? (Ta(a), s !== null ? (dt(a), fy(a, s)) : (dt(a), (a.flags &= -16777217)))
            : s
              ? s !== e.memoizedState
                ? (Ta(a), dt(a), fy(a, s))
                : (dt(a), (a.flags &= -16777217))
              : (e.memoizedProps !== u && Ta(a), dt(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        $n(a), (s = we.current);
        var c = a.type;
        if (e !== null && a.stateNode != null) e.memoizedProps !== u && Ta(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return dt(a), null;
          }
          (e = ve.current), Hs(a) ? qm(a) : ((e = fp(c, u, s)), (a.stateNode = e), Ta(a));
        }
        return dt(a), null;
      case 5:
        if (($n(a), (s = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== u && Ta(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return dt(a), null;
          }
          if (((e = ve.current), Hs(a))) qm(a);
          else {
            switch (((c = vo(we.current)), e)) {
              case 1:
                e = c.createElementNS('http://www.w3.org/2000/svg', s);
                break;
              case 2:
                e = c.createElementNS('http://www.w3.org/1998/Math/MathML', s);
                break;
              default:
                switch (s) {
                  case 'svg':
                    e = c.createElementNS('http://www.w3.org/2000/svg', s);
                    break;
                  case 'math':
                    e = c.createElementNS('http://www.w3.org/1998/Math/MathML', s);
                    break;
                  case 'script':
                    (e = c.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof u.is == 'string'
                        ? c.createElement('select', { is: u.is })
                        : c.createElement('select')),
                      u.multiple ? (e.multiple = !0) : u.size && (e.size = u.size);
                    break;
                  default:
                    e =
                      typeof u.is == 'string'
                        ? c.createElement(s, { is: u.is })
                        : c.createElement(s);
                }
            }
            (e[Ft] = a), (e[sn] = u);
            e: for (c = a.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === a) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === a) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            a.stateNode = e;
            e: switch ((Ht(e, s, u), s)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!u.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ta(a);
          }
        }
        return dt(a), (a.flags &= -16777217), null;
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== u && Ta(a);
        else {
          if (typeof u != 'string' && a.stateNode === null) throw Error(i(166));
          if (((e = we.current), Hs(a))) {
            if (((e = a.stateNode), (s = a.memoizedProps), (u = null), (c = Xt), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  u = c.memoizedProps;
              }
            (e[Ft] = a),
              (e = !!(
                e.nodeValue === s ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                rp(e.nodeValue, s)
              )),
              e || qr(a);
          } else (e = vo(e).createTextNode(u)), (e[Ft] = a), (a.stateNode = e);
        }
        return dt(a), null;
      case 13:
        if (
          ((u = a.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = Hs(a)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (((c = a.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(i(317));
              c[Ft] = a;
            } else Vs(), (a.flags & 128) === 0 && (a.memoizedState = null), (a.flags |= 4);
            dt(a), (c = !1);
          } else
            (c = Zm()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return a.flags & 256 ? (Oa(a), a) : (Oa(a), null);
        }
        if ((Oa(a), (a.flags & 128) !== 0)) return (a.lanes = s), a;
        if (((s = u !== null), (e = e !== null && e.memoizedState !== null), s)) {
          (u = a.child),
            (c = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (c = u.alternate.memoizedState.cachePool.pool);
          var d = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (d = u.memoizedState.cachePool.pool),
            d !== c && (u.flags |= 2048);
        }
        return s !== e && s && (a.child.flags |= 8192), ro(a, a.updateQueue), dt(a), null;
      case 4:
        return rn(), e === null && bd(a.stateNode.containerInfo), dt(a), null;
      case 10:
        return xa(a.type), dt(a), null;
      case 19:
        if ((le(Dt), (c = a.memoizedState), c === null)) return dt(a), null;
        if (((u = (a.flags & 128) !== 0), (d = c.rendering), d === null))
          if (u) nl(c, !1);
          else {
            if (pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null; ) {
                if (((d = Ju(e)), d !== null)) {
                  for (
                    a.flags |= 128,
                      nl(c, !1),
                      e = d.updateQueue,
                      a.updateQueue = e,
                      ro(a, e),
                      a.subtreeFlags = 0,
                      e = s,
                      s = a.child;
                    s !== null;

                  )
                    Hm(s, e), (s = s.sibling);
                  return re(Dt, (Dt.current & 1) | 2), a.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Yt() > lo &&
              ((a.flags |= 128), (u = !0), nl(c, !1), (a.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Ju(d)), e !== null)) {
              if (
                ((a.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                ro(a, e),
                nl(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !d.alternate && !Xe)
              )
                return dt(a), null;
            } else
              2 * Yt() - c.renderingStartTime > lo &&
                s !== 536870912 &&
                ((a.flags |= 128), (u = !0), nl(c, !1), (a.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = a.child), (a.child = d))
            : ((e = c.last), e !== null ? (e.sibling = d) : (a.child = d), (c.last = d));
        }
        return c.tail !== null
          ? ((a = c.tail),
            (c.rendering = a),
            (c.tail = a.sibling),
            (c.renderingStartTime = Yt()),
            (a.sibling = null),
            (e = Dt.current),
            re(Dt, u ? (e & 1) | 2 : e & 1),
            a)
          : (dt(a), null);
      case 22:
      case 23:
        return (
          Oa(a),
          Sf(),
          (u = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== u && (a.flags |= 8192)
            : u && (a.flags |= 8192),
          u
            ? (s & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (dt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : dt(a),
          (s = a.updateQueue),
          s !== null && ro(a, s.retryQueue),
          (s = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          (u = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
          u !== s && (a.flags |= 2048),
          e !== null && le(Fr),
          null
        );
      case 24:
        return (
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          a.memoizedState.cache !== s && (a.flags |= 2048),
          xa(Mt),
          dt(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, a.tag));
  }
  function b_(e, a) {
    switch ((lf(a), a.tag)) {
      case 1:
        return (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null;
      case 3:
        return (
          xa(Mt),
          rn(),
          (e = a.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 26:
      case 27:
      case 5:
        return $n(a), null;
      case 13:
        if ((Oa(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)) {
          if (a.alternate === null) throw Error(i(340));
          Vs();
        }
        return (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null;
      case 19:
        return le(Dt), null;
      case 4:
        return rn(), null;
      case 10:
        return xa(a.type), null;
      case 22:
      case 23:
        return (
          Oa(a),
          Sf(),
          e !== null && le(Fr),
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 24:
        return xa(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dy(e, a) {
    switch ((lf(a), a.tag)) {
      case 3:
        xa(Mt), rn();
        break;
      case 26:
      case 27:
      case 5:
        $n(a);
        break;
      case 4:
        rn();
        break;
      case 13:
        Oa(a);
        break;
      case 19:
        le(Dt);
        break;
      case 10:
        xa(a.type);
        break;
      case 22:
      case 23:
        Oa(a), Sf(), e !== null && le(Fr);
        break;
      case 24:
        xa(Mt);
    }
  }
  function al(e, a) {
    try {
      var s = a.updateQueue,
        u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        s = c;
        do {
          if ((s.tag & e) === e) {
            u = void 0;
            var d = s.create,
              p = s.inst;
            (u = d()), (p.destroy = u);
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (_) {
      ut(a, a.return, _);
    }
  }
  function rr(e, a, s) {
    try {
      var u = a.updateQueue,
        c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        u = d;
        do {
          if ((u.tag & e) === e) {
            var p = u.inst,
              _ = p.destroy;
            if (_ !== void 0) {
              (p.destroy = void 0), (c = a);
              var E = s,
                U = _;
              try {
                U();
              } catch (F) {
                ut(c, E, F);
              }
            }
          }
          u = u.next;
        } while (u !== d);
      }
    } catch (F) {
      ut(a, a.return, F);
    }
  }
  function hy(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var s = e.stateNode;
      try {
        eg(a, s);
      } catch (u) {
        ut(e, e.return, u);
      }
    }
  }
  function my(e, a, s) {
    (s.props = Pr(e.type, e.memoizedProps)), (s.state = e.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (u) {
      ut(e, a, u);
    }
  }
  function rl(e, a) {
    try {
      var s = e.ref;
      if (s !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = e.stateNode;
            break;
          case 30:
            u = e.stateNode;
            break;
          default:
            u = e.stateNode;
        }
        typeof s == 'function' ? (e.refCleanup = s(u)) : (s.current = u);
      }
    } catch (c) {
      ut(e, a, c);
    }
  }
  function Wn(e, a) {
    var s = e.ref,
      u = e.refCleanup;
    if (s !== null)
      if (typeof u == 'function')
        try {
          u();
        } catch (c) {
          ut(e, a, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof s == 'function')
        try {
          s(null);
        } catch (c) {
          ut(e, a, c);
        }
      else s.current = null;
  }
  function gy(e) {
    var a = e.type,
      s = e.memoizedProps,
      u = e.stateNode;
    try {
      e: switch (a) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          s.autoFocus && u.focus();
          break e;
        case 'img':
          s.src ? (u.src = s.src) : s.srcSet && (u.srcset = s.srcSet);
      }
    } catch (c) {
      ut(e, e.return, c);
    }
  }
  function Kf(e, a, s) {
    try {
      var u = e.stateNode;
      V_(u, e.type, s, a), (u[sn] = a);
    } catch (c) {
      ut(e, e.return, c);
    }
  }
  function yy(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && dr(e.type)) || e.tag === 4
    );
  }
  function Wf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || yy(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && dr(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xf(e, a, s) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode),
        a
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === 'HTML'
                ? s.ownerDocument.body
                : s
            ).insertBefore(e, a)
          : ((a = s.nodeType === 9 ? s.body : s.nodeName === 'HTML' ? s.ownerDocument.body : s),
            a.appendChild(e),
            (s = s._reactRootContainer),
            s != null || a.onclick !== null || (a.onclick = po));
    else if (
      u !== 4 &&
      (u === 27 && dr(e.type) && ((s = e.stateNode), (a = null)), (e = e.child), e !== null)
    )
      for (Xf(e, a, s), e = e.sibling; e !== null; ) Xf(e, a, s), (e = e.sibling);
  }
  function io(e, a, s) {
    var u = e.tag;
    if (u === 5 || u === 6) (e = e.stateNode), a ? s.insertBefore(e, a) : s.appendChild(e);
    else if (u !== 4 && (u === 27 && dr(e.type) && (s = e.stateNode), (e = e.child), e !== null))
      for (io(e, a, s), e = e.sibling; e !== null; ) io(e, a, s), (e = e.sibling);
  }
  function py(e) {
    var a = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var u = e.type, c = a.attributes; c.length; ) a.removeAttributeNode(c[0]);
      Ht(a, u, s), (a[Ft] = e), (a[sn] = s);
    } catch (d) {
      ut(e, e.return, d);
    }
  }
  var Ca = !1,
    St = !1,
    If = !1,
    vy = typeof WeakSet == 'function' ? WeakSet : Set,
    zt = null;
  function __(e, a) {
    if (((e = e.containerInfo), (xd = Oo), (e = Dm(e)), Kc(e))) {
      if ('selectionStart' in e) var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var u = s.getSelection && s.getSelection();
          if (u && u.rangeCount !== 0) {
            s = u.anchorNode;
            var c = u.anchorOffset,
              d = u.focusNode;
            u = u.focusOffset;
            try {
              s.nodeType, d.nodeType;
            } catch {
              s = null;
              break e;
            }
            var p = 0,
              _ = -1,
              E = -1,
              U = 0,
              F = 0,
              Q = e,
              L = null;
            t: for (;;) {
              for (
                var H;
                Q !== s || (c !== 0 && Q.nodeType !== 3) || (_ = p + c),
                  Q !== d || (u !== 0 && Q.nodeType !== 3) || (E = p + u),
                  Q.nodeType === 3 && (p += Q.nodeValue.length),
                  (H = Q.firstChild) !== null;

              )
                (L = Q), (Q = H);
              for (;;) {
                if (Q === e) break t;
                if (
                  (L === s && ++U === c && (_ = p),
                  L === d && ++F === u && (E = p),
                  (H = Q.nextSibling) !== null)
                )
                  break;
                (Q = L), (L = Q.parentNode);
              }
              Q = H;
            }
            s = _ === -1 || E === -1 ? null : { start: _, end: E };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (wd = { focusedElem: e, selectionRange: s }, Oo = !1, zt = a; zt !== null; )
      if (((a = zt), (e = a.child), (a.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = a), (zt = e);
      else
        for (; zt !== null; ) {
          switch (((a = zt), (d = a.alternate), (e = a.flags), a.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (s = a),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (u = s.stateNode);
                try {
                  var Ne = Pr(s.type, c, s.elementType === s.type);
                  (e = u.getSnapshotBeforeUpdate(Ne, d)),
                    (u.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Oe) {
                  ut(s, s.return, Oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = a.stateNode.containerInfo), (s = e.nodeType), s === 9)) Td(e);
                else if (s === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Td(e);
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
          if (((e = a.sibling), e !== null)) {
            (e.return = a.return), (zt = e);
            break;
          }
          zt = a.return;
        }
  }
  function by(e, a, s) {
    var u = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        ir(e, s), u & 4 && al(5, s);
        break;
      case 1:
        if ((ir(e, s), u & 4))
          if (((e = s.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (p) {
              ut(s, s.return, p);
            }
          else {
            var c = Pr(s.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(c, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              ut(s, s.return, p);
            }
          }
        u & 64 && hy(s), u & 512 && rl(s, s.return);
        break;
      case 3:
        if ((ir(e, s), u & 64 && ((e = s.updateQueue), e !== null))) {
          if (((a = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                a = s.child.stateNode;
                break;
              case 1:
                a = s.child.stateNode;
            }
          try {
            eg(e, a);
          } catch (p) {
            ut(s, s.return, p);
          }
        }
        break;
      case 27:
        a === null && u & 4 && py(s);
      case 26:
      case 5:
        ir(e, s), a === null && u & 4 && gy(s), u & 512 && rl(s, s.return);
        break;
      case 12:
        ir(e, s);
        break;
      case 13:
        ir(e, s),
          u & 4 && xy(e, s),
          u & 64 &&
            ((e = s.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((s = D_.bind(null, s)), $_(e, s))));
        break;
      case 22:
        if (((u = s.memoizedState !== null || Ca), !u)) {
          (a = (a !== null && a.memoizedState !== null) || St), (c = Ca);
          var d = St;
          (Ca = u),
            (St = a) && !d ? sr(e, s, (s.subtreeFlags & 8772) !== 0) : ir(e, s),
            (Ca = c),
            (St = d);
        }
        break;
      case 30:
        break;
      default:
        ir(e, s);
    }
  }
  function _y(e) {
    var a = e.alternate;
    a !== null && ((e.alternate = null), _y(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && Nc(a)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ft = null,
    on = !1;
  function Ma(e, a, s) {
    for (s = s.child; s !== null; ) Sy(e, a, s), (s = s.sibling);
  }
  function Sy(e, a, s) {
    if (X && typeof X.onCommitFiberUnmount == 'function')
      try {
        X.onCommitFiberUnmount(ae, s);
      } catch {}
    switch (s.tag) {
      case 26:
        St || Wn(s, a),
          Ma(e, a, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        St || Wn(s, a);
        var u = ft,
          c = on;
        dr(s.type) && ((ft = s.stateNode), (on = !1)),
          Ma(e, a, s),
          hl(s.stateNode),
          (ft = u),
          (on = c);
        break;
      case 5:
        St || Wn(s, a);
      case 6:
        if (((u = ft), (c = on), (ft = null), Ma(e, a, s), (ft = u), (on = c), ft !== null))
          if (on)
            try {
              (ft.nodeType === 9
                ? ft.body
                : ft.nodeName === 'HTML'
                  ? ft.ownerDocument.body
                  : ft
              ).removeChild(s.stateNode);
            } catch (d) {
              ut(s, a, d);
            }
          else
            try {
              ft.removeChild(s.stateNode);
            } catch (d) {
              ut(s, a, d);
            }
        break;
      case 18:
        ft !== null &&
          (on
            ? ((e = ft),
              op(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                s.stateNode
              ),
              Sl(e))
            : op(ft, s.stateNode));
        break;
      case 4:
        (u = ft),
          (c = on),
          (ft = s.stateNode.containerInfo),
          (on = !0),
          Ma(e, a, s),
          (ft = u),
          (on = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        St || rr(2, s, a), St || rr(4, s, a), Ma(e, a, s);
        break;
      case 1:
        St ||
          (Wn(s, a), (u = s.stateNode), typeof u.componentWillUnmount == 'function' && my(s, a, u)),
          Ma(e, a, s);
        break;
      case 21:
        Ma(e, a, s);
        break;
      case 22:
        (St = (u = St) || s.memoizedState !== null), Ma(e, a, s), (St = u);
        break;
      default:
        Ma(e, a, s);
    }
  }
  function xy(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Sl(e);
      } catch (s) {
        ut(a, a.return, s);
      }
  }
  function S_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var a = e.stateNode;
        return a === null && (a = e.stateNode = new vy()), a;
      case 22:
        return (
          (e = e.stateNode), (a = e._retryCache), a === null && (a = e._retryCache = new vy()), a
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Jf(e, a) {
    var s = S_(e);
    a.forEach(function (u) {
      var c = N_.bind(null, e, u);
      s.has(u) || (s.add(u), u.then(c, c));
    });
  }
  function mn(e, a) {
    var s = a.deletions;
    if (s !== null)
      for (var u = 0; u < s.length; u++) {
        var c = s[u],
          d = e,
          p = a,
          _ = p;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (dr(_.type)) {
                (ft = _.stateNode), (on = !1);
                break e;
              }
              break;
            case 5:
              (ft = _.stateNode), (on = !1);
              break e;
            case 3:
            case 4:
              (ft = _.stateNode.containerInfo), (on = !0);
              break e;
          }
          _ = _.return;
        }
        if (ft === null) throw Error(i(160));
        Sy(d, p, c),
          (ft = null),
          (on = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (a.subtreeFlags & 13878) for (a = a.child; a !== null; ) wy(a, e), (a = a.sibling);
  }
  var zn = null;
  function wy(e, a) {
    var s = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mn(a, e), gn(e), u & 4 && (rr(3, e, e.return), al(3, e), rr(5, e, e.return));
        break;
      case 1:
        mn(a, e),
          gn(e),
          u & 512 && (St || s === null || Wn(s, s.return)),
          u & 64 &&
            Ca &&
            ((e = e.updateQueue),
            e !== null &&
              ((u = e.callbacks),
              u !== null &&
                ((s = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = s === null ? u : s.concat(u)))));
        break;
      case 26:
        var c = zn;
        if ((mn(a, e), gn(e), u & 512 && (St || s === null || Wn(s, s.return)), u & 4)) {
          var d = s !== null ? s.memoizedState : null;
          if (((u = e.memoizedState), s === null))
            if (u === null)
              if (e.stateNode === null) {
                e: {
                  (u = e.type), (s = e.memoizedProps), (c = c.ownerDocument || c);
                  t: switch (u) {
                    case 'title':
                      (d = c.getElementsByTagName('title')[0]),
                        (!d ||
                          d[Ms] ||
                          d[Ft] ||
                          d.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          d.hasAttribute('itemprop')) &&
                          ((d = c.createElement(u)),
                          c.head.insertBefore(d, c.querySelector('head > title'))),
                        Ht(d, u, s),
                        (d[Ft] = e),
                        Rt(d),
                        (u = d);
                      break e;
                    case 'link':
                      var p = pp('link', 'href', c).get(u + (s.href || ''));
                      if (p) {
                        for (var _ = 0; _ < p.length; _++)
                          if (
                            ((d = p[_]),
                            d.getAttribute('href') ===
                              (s.href == null || s.href === '' ? null : s.href) &&
                              d.getAttribute('rel') === (s.rel == null ? null : s.rel) &&
                              d.getAttribute('title') === (s.title == null ? null : s.title) &&
                              d.getAttribute('crossorigin') ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            p.splice(_, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(u)), Ht(d, u, s), c.head.appendChild(d);
                      break;
                    case 'meta':
                      if ((p = pp('meta', 'content', c).get(u + (s.content || '')))) {
                        for (_ = 0; _ < p.length; _++)
                          if (
                            ((d = p[_]),
                            d.getAttribute('content') ===
                              (s.content == null ? null : '' + s.content) &&
                              d.getAttribute('name') === (s.name == null ? null : s.name) &&
                              d.getAttribute('property') ===
                                (s.property == null ? null : s.property) &&
                              d.getAttribute('http-equiv') ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              d.getAttribute('charset') === (s.charSet == null ? null : s.charSet))
                          ) {
                            p.splice(_, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(u)), Ht(d, u, s), c.head.appendChild(d);
                      break;
                    default:
                      throw Error(i(468, u));
                  }
                  (d[Ft] = e), Rt(d), (u = d);
                }
                e.stateNode = u;
              } else vp(c, e.type, e.stateNode);
            else e.stateNode = yp(c, u, e.memoizedProps);
          else
            d !== u
              ? (d === null
                  ? s.stateNode !== null && ((s = s.stateNode), s.parentNode.removeChild(s))
                  : d.count--,
                u === null ? vp(c, e.type, e.stateNode) : yp(c, u, e.memoizedProps))
              : u === null && e.stateNode !== null && Kf(e, e.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        mn(a, e),
          gn(e),
          u & 512 && (St || s === null || Wn(s, s.return)),
          s !== null && u & 4 && Kf(e, e.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if ((mn(a, e), gn(e), u & 512 && (St || s === null || Wn(s, s.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            Si(c, '');
          } catch (H) {
            ut(e, e.return, H);
          }
        }
        u & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), Kf(e, c, s !== null ? s.memoizedProps : c)),
          u & 1024 && (If = !0);
        break;
      case 6:
        if ((mn(a, e), gn(e), u & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.memoizedProps), (s = e.stateNode);
          try {
            s.nodeValue = u;
          } catch (H) {
            ut(e, e.return, H);
          }
        }
        break;
      case 3:
        if (
          ((So = null),
          (c = zn),
          (zn = bo(a.containerInfo)),
          mn(a, e),
          (zn = c),
          gn(e),
          u & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Sl(a.containerInfo);
          } catch (H) {
            ut(e, e.return, H);
          }
        If && ((If = !1), Oy(e));
        break;
      case 4:
        (u = zn), (zn = bo(e.stateNode.containerInfo)), mn(a, e), gn(e), (zn = u);
        break;
      case 12:
        mn(a, e), gn(e);
        break;
      case 13:
        mn(a, e),
          gn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (s !== null && s.memoizedState !== null) &&
            (id = Yt()),
          u & 4 && ((u = e.updateQueue), u !== null && ((e.updateQueue = null), Jf(e, u)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var E = s !== null && s.memoizedState !== null,
          U = Ca,
          F = St;
        if (((Ca = U || c), (St = F || E), mn(a, e), (St = F), (Ca = U), gn(e), u & 8192))
          e: for (
            a = e.stateNode,
              a._visibility = c ? a._visibility & -2 : a._visibility | 1,
              c && (s === null || E || Ca || St || $r(e)),
              s = null,
              a = e;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (s === null) {
                E = s = a;
                try {
                  if (((d = E.stateNode), c))
                    (p = d.style),
                      typeof p.setProperty == 'function'
                        ? p.setProperty('display', 'none', 'important')
                        : (p.display = 'none');
                  else {
                    _ = E.stateNode;
                    var Q = E.memoizedProps.style,
                      L = Q != null && Q.hasOwnProperty('display') ? Q.display : null;
                    _.style.display = L == null || typeof L == 'boolean' ? '' : ('' + L).trim();
                  }
                } catch (H) {
                  ut(E, E.return, H);
                }
              }
            } else if (a.tag === 6) {
              if (s === null) {
                E = a;
                try {
                  E.stateNode.nodeValue = c ? '' : E.memoizedProps;
                } catch (H) {
                  ut(E, E.return, H);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) || a.memoizedState === null || a === e) &&
              a.child !== null
            ) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break e;
              s === a && (s = null), (a = a.return);
            }
            s === a && (s = null), (a.sibling.return = a.return), (a = a.sibling);
          }
        u & 4 &&
          ((u = e.updateQueue),
          u !== null && ((s = u.retryQueue), s !== null && ((u.retryQueue = null), Jf(e, s))));
        break;
      case 19:
        mn(a, e),
          gn(e),
          u & 4 && ((u = e.updateQueue), u !== null && ((e.updateQueue = null), Jf(e, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        mn(a, e), gn(e);
    }
  }
  function gn(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var s, u = e.return; u !== null; ) {
          if (yy(u)) {
            s = u;
            break;
          }
          u = u.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var c = s.stateNode,
              d = Wf(e);
            io(e, d, c);
            break;
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (Si(p, ''), (s.flags &= -33));
            var _ = Wf(e);
            io(e, _, p);
            break;
          case 3:
          case 4:
            var E = s.stateNode.containerInfo,
              U = Wf(e);
            Xf(e, U, E);
            break;
          default:
            throw Error(i(161));
        }
      } catch (F) {
        ut(e, e.return, F);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function Oy(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        Oy(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), (e = e.sibling);
      }
  }
  function ir(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) by(e, a.alternate, a), (a = a.sibling);
  }
  function $r(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          rr(4, a, a.return), $r(a);
          break;
        case 1:
          Wn(a, a.return);
          var s = a.stateNode;
          typeof s.componentWillUnmount == 'function' && my(a, a.return, s), $r(a);
          break;
        case 27:
          hl(a.stateNode);
        case 26:
        case 5:
          Wn(a, a.return), $r(a);
          break;
        case 22:
          a.memoizedState === null && $r(a);
          break;
        case 30:
          $r(a);
          break;
        default:
          $r(a);
      }
      e = e.sibling;
    }
  }
  function sr(e, a, s) {
    for (s = s && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate,
        c = e,
        d = a,
        p = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          sr(c, d, s), al(4, d);
          break;
        case 1:
          if ((sr(c, d, s), (u = d), (c = u.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (U) {
              ut(u, u.return, U);
            }
          if (((u = d), (c = u.updateQueue), c !== null)) {
            var _ = u.stateNode;
            try {
              var E = c.shared.hiddenCallbacks;
              if (E !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < E.length; c++) Jm(E[c], _);
            } catch (U) {
              ut(u, u.return, U);
            }
          }
          s && p & 64 && hy(d), rl(d, d.return);
          break;
        case 27:
          py(d);
        case 26:
        case 5:
          sr(c, d, s), s && u === null && p & 4 && gy(d), rl(d, d.return);
          break;
        case 12:
          sr(c, d, s);
          break;
        case 13:
          sr(c, d, s), s && p & 4 && xy(c, d);
          break;
        case 22:
          d.memoizedState === null && sr(c, d, s), rl(d, d.return);
          break;
        case 30:
          break;
        default:
          sr(c, d, s);
      }
      a = a.sibling;
    }
  }
  function ed(e, a) {
    var s = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (s = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== s && (e != null && e.refCount++, s != null && Zs(s));
  }
  function td(e, a) {
    (e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && Zs(e));
  }
  function Xn(e, a, s, u) {
    if (a.subtreeFlags & 10256) for (a = a.child; a !== null; ) Ey(e, a, s, u), (a = a.sibling);
  }
  function Ey(e, a, s, u) {
    var c = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Xn(e, a, s, u), c & 2048 && al(9, a);
        break;
      case 1:
        Xn(e, a, s, u);
        break;
      case 3:
        Xn(e, a, s, u),
          c & 2048 &&
            ((e = null),
            a.alternate !== null && (e = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== e && (a.refCount++, e != null && Zs(e)));
        break;
      case 12:
        if (c & 2048) {
          Xn(e, a, s, u), (e = a.stateNode);
          try {
            var d = a.memoizedProps,
              p = d.id,
              _ = d.onPostCommit;
            typeof _ == 'function' &&
              _(p, a.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (E) {
            ut(a, a.return, E);
          }
        } else Xn(e, a, s, u);
        break;
      case 13:
        Xn(e, a, s, u);
        break;
      case 23:
        break;
      case 22:
        (d = a.stateNode),
          (p = a.alternate),
          a.memoizedState !== null
            ? d._visibility & 2
              ? Xn(e, a, s, u)
              : il(e, a)
            : d._visibility & 2
              ? Xn(e, a, s, u)
              : ((d._visibility |= 2), Vi(e, a, s, u, (a.subtreeFlags & 10256) !== 0)),
          c & 2048 && ed(p, a);
        break;
      case 24:
        Xn(e, a, s, u), c & 2048 && td(a.alternate, a);
        break;
      default:
        Xn(e, a, s, u);
    }
  }
  function Vi(e, a, s, u, c) {
    for (c = c && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var d = e,
        p = a,
        _ = s,
        E = u,
        U = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Vi(d, p, _, E, c), al(8, p);
          break;
        case 23:
          break;
        case 22:
          var F = p.stateNode;
          p.memoizedState !== null
            ? F._visibility & 2
              ? Vi(d, p, _, E, c)
              : il(d, p)
            : ((F._visibility |= 2), Vi(d, p, _, E, c)),
            c && U & 2048 && ed(p.alternate, p);
          break;
        case 24:
          Vi(d, p, _, E, c), c && U & 2048 && td(p.alternate, p);
          break;
        default:
          Vi(d, p, _, E, c);
      }
      a = a.sibling;
    }
  }
  function il(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var s = e,
          u = a,
          c = u.flags;
        switch (u.tag) {
          case 22:
            il(s, u), c & 2048 && ed(u.alternate, u);
            break;
          case 24:
            il(s, u), c & 2048 && td(u.alternate, u);
            break;
          default:
            il(s, u);
        }
        a = a.sibling;
      }
  }
  var sl = 8192;
  function qi(e) {
    if (e.subtreeFlags & sl) for (e = e.child; e !== null; ) Ty(e), (e = e.sibling);
  }
  function Ty(e) {
    switch (e.tag) {
      case 26:
        qi(e), e.flags & sl && e.memoizedState !== null && sS(zn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        qi(e);
        break;
      case 3:
      case 4:
        var a = zn;
        (zn = bo(e.stateNode.containerInfo)), qi(e), (zn = a);
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = sl), (sl = 16777216), qi(e), (sl = a))
            : qi(e));
        break;
      default:
        qi(e);
    }
  }
  function Cy(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do (a = e.sibling), (e.sibling = null), (e = a);
      while (e !== null);
    }
  }
  function ll(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          (zt = u), Dy(u, e);
        }
      Cy(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) My(e), (e = e.sibling);
  }
  function My(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ll(e), e.flags & 2048 && rr(9, e, e.return);
        break;
      case 3:
        ll(e);
        break;
      case 12:
        ll(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), so(e))
          : ll(e);
        break;
      default:
        ll(e);
    }
  }
  function so(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          (zt = u), Dy(u, e);
        }
      Cy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          rr(8, a, a.return), so(a);
          break;
        case 22:
          (s = a.stateNode), s._visibility & 2 && ((s._visibility &= -3), so(a));
          break;
        default:
          so(a);
      }
      e = e.sibling;
    }
  }
  function Dy(e, a) {
    for (; zt !== null; ) {
      var s = zt;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          rr(8, s, a);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var u = s.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Zs(s.memoizedState.cache);
      }
      if (((u = s.child), u !== null)) (u.return = s), (zt = u);
      else
        e: for (s = e; zt !== null; ) {
          u = zt;
          var c = u.sibling,
            d = u.return;
          if ((_y(u), u === s)) {
            zt = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (zt = c);
            break e;
          }
          zt = d;
        }
    }
  }
  var x_ = {
      getCacheForType: function (e) {
        var a = Gt(Mt),
          s = a.data.get(e);
        return s === void 0 && ((s = e()), a.data.set(e, s)), s;
      },
    },
    w_ = typeof WeakMap == 'function' ? WeakMap : Map,
    et = 0,
    ot = null,
    Ye = null,
    Ge = 0,
    tt = 0,
    yn = null,
    lr = !1,
    Yi = !1,
    nd = !1,
    Da = 0,
    pt = 0,
    ur = 0,
    Qr = 0,
    ad = 0,
    An = 0,
    Zi = 0,
    ul = null,
    cn = null,
    rd = !1,
    id = 0,
    lo = 1 / 0,
    uo = null,
    or = null,
    Bt = 0,
    cr = null,
    Fi = null,
    Gi = 0,
    sd = 0,
    ld = null,
    Ny = null,
    ol = 0,
    ud = null;
  function pn() {
    if ((et & 2) !== 0 && Ge !== 0) return Ge & -Ge;
    if (V.T !== null) {
      var e = ki;
      return e !== 0 ? e : gd();
    }
    return Ph();
  }
  function Ay() {
    An === 0 && (An = (Ge & 536870912) === 0 || Xe ? Ct() : 536870912);
    var e = Nn.current;
    return e !== null && (e.flags |= 32), An;
  }
  function vn(e, a, s) {
    ((e === ot && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null) &&
      (Pi(e, 0), fr(e, Ge, An, !1)),
      Ar(e, s),
      ((et & 2) === 0 || e !== ot) &&
        (e === ot && ((et & 2) === 0 && (Qr |= s), pt === 4 && fr(e, Ge, An, !1)), In(e));
  }
  function ky(e, a, s) {
    if ((et & 6) !== 0) throw Error(i(327));
    var u = (!s && (a & 124) === 0 && (a & e.expiredLanes) === 0) || Tt(e, a),
      c = u ? T_(e, a) : fd(e, a, !0),
      d = u;
    do {
      if (c === 0) {
        Yi && !u && fr(e, a, 0, !1);
        break;
      } else {
        if (((s = e.current.alternate), d && !O_(s))) {
          (c = fd(e, a, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = a), e.errorRecoveryDisabledLanes & d)) var p = 0;
          else (p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            a = p;
            e: {
              var _ = e;
              c = ul;
              var E = _.current.memoizedState.isDehydrated;
              if ((E && (Pi(_, p).flags |= 256), (p = fd(_, p, !1)), p !== 2)) {
                if (nd && !E) {
                  (_.errorRecoveryDisabledLanes |= d), (Qr |= d), (c = 4);
                  break e;
                }
                (d = cn), (cn = c), d !== null && (cn === null ? (cn = d) : cn.push.apply(cn, d));
              }
              c = p;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Pi(e, 0), fr(e, a, 0, !0);
          break;
        }
        e: {
          switch (((u = e), (d = c), d)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              fr(u, a, An, !lr);
              break e;
            case 2:
              cn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((a & 62914560) === a && ((c = id + 300 - Yt()), 10 < c)) {
            if ((fr(u, a, An, !lr), Zt(u, 0, !0) !== 0)) break e;
            u.timeoutHandle = lp(
              Ry.bind(null, u, s, cn, uo, rd, a, An, Qr, Zi, lr, d, 2, -0, 0),
              c
            );
            break e;
          }
          Ry(u, s, cn, uo, rd, a, An, Qr, Zi, lr, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    In(e);
  }
  function Ry(e, a, s, u, c, d, p, _, E, U, F, Q, L, H) {
    if (
      ((e.timeoutHandle = -1),
      (Q = a.subtreeFlags),
      (Q & 8192 || (Q & 16785408) === 16785408) &&
        ((yl = { stylesheets: null, count: 0, unsuspend: iS }), Ty(a), (Q = lS()), Q !== null))
    ) {
      (e.cancelPendingCommit = Q(Vy.bind(null, e, a, d, s, u, c, p, _, E, F, 1, L, H))),
        fr(e, d, p, !U);
      return;
    }
    Vy(e, a, d, s, u, c, p, _, E);
  }
  function O_(e) {
    for (var a = e; ; ) {
      var s = a.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        a.flags & 16384 &&
        ((s = a.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var u = 0; u < s.length; u++) {
          var c = s[u],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!dn(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = a.child), a.subtreeFlags & 16384 && s !== null)) (s.return = a), (a = s);
      else {
        if (a === e) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) return !0;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    return !0;
  }
  function fr(e, a, s, u) {
    (a &= ~ad),
      (a &= ~Qr),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      u && (e.warmLanes |= a),
      (u = e.expirationTimes);
    for (var c = a; 0 < c; ) {
      var d = 31 - De(c),
        p = 1 << d;
      (u[d] = -1), (c &= ~p);
    }
    s !== 0 && bu(e, s, a);
  }
  function oo() {
    return (et & 6) === 0 ? (cl(0), !1) : !0;
  }
  function od() {
    if (Ye !== null) {
      if (tt === 0) var e = Ye.return;
      else (e = Ye), (Sa = Yr = null), Tf(e), (Bi = null), (el = 0), (e = Ye);
      for (; e !== null; ) dy(e.alternate, e), (e = e.return);
      Ye = null;
    }
  }
  function Pi(e, a) {
    var s = e.timeoutHandle;
    s !== -1 && ((e.timeoutHandle = -1), Y_(s)),
      (s = e.cancelPendingCommit),
      s !== null && ((e.cancelPendingCommit = null), s()),
      od(),
      (ot = e),
      (Ye = s = va(e.current, null)),
      (Ge = a),
      (tt = 0),
      (yn = null),
      (lr = !1),
      (Yi = Tt(e, a)),
      (nd = !1),
      (Zi = An = ad = Qr = ur = pt = 0),
      (cn = ul = null),
      (rd = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= a; 0 < u; ) {
        var c = 31 - De(u),
          d = 1 << c;
        (a |= e[c]), (u &= ~d);
      }
    return (Da = a), Au(), s;
  }
  function jy(e, a) {
    (He = null),
      (V.H = Wu),
      a === Gs || a === Vu
        ? ((a = Xm()), (tt = 3))
        : a === Qm
          ? ((a = Xm()), (tt = 4))
          : (tt =
              a === Ig
                ? 8
                : a !== null && typeof a == 'object' && typeof a.then == 'function'
                  ? 6
                  : 1),
      (yn = a),
      Ye === null && ((pt = 1), to(e, Tn(a, e.current)));
  }
  function zy() {
    var e = V.H;
    return (V.H = Wu), e === null ? Wu : e;
  }
  function Uy() {
    var e = V.A;
    return (V.A = x_), e;
  }
  function cd() {
    (pt = 4),
      lr || ((Ge & 4194048) !== Ge && Nn.current !== null) || (Yi = !0),
      ((ur & 134217727) === 0 && (Qr & 134217727) === 0) || ot === null || fr(ot, Ge, An, !1);
  }
  function fd(e, a, s) {
    var u = et;
    et |= 2;
    var c = zy(),
      d = Uy();
    (ot !== e || Ge !== a) && ((uo = null), Pi(e, a)), (a = !1);
    var p = pt;
    e: do
      try {
        if (tt !== 0 && Ye !== null) {
          var _ = Ye,
            E = yn;
          switch (tt) {
            case 8:
              od(), (p = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nn.current === null && (a = !0);
              var U = tt;
              if (((tt = 0), (yn = null), $i(e, _, E, U), s && Yi)) {
                p = 0;
                break e;
              }
              break;
            default:
              (U = tt), (tt = 0), (yn = null), $i(e, _, E, U);
          }
        }
        E_(), (p = pt);
        break;
      } catch (F) {
        jy(e, F);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (Sa = Yr = null),
      (et = u),
      (V.H = c),
      (V.A = d),
      Ye === null && ((ot = null), (Ge = 0), Au()),
      p
    );
  }
  function E_() {
    for (; Ye !== null; ) Ly(Ye);
  }
  function T_(e, a) {
    var s = et;
    et |= 2;
    var u = zy(),
      c = Uy();
    ot !== e || Ge !== a ? ((uo = null), (lo = Yt() + 500), Pi(e, a)) : (Yi = Tt(e, a));
    e: do
      try {
        if (tt !== 0 && Ye !== null) {
          a = Ye;
          var d = yn;
          t: switch (tt) {
            case 1:
              (tt = 0), (yn = null), $i(e, a, d, 1);
              break;
            case 2:
            case 9:
              if (Km(d)) {
                (tt = 0), (yn = null), By(a);
                break;
              }
              (a = function () {
                (tt !== 2 && tt !== 9) || ot !== e || (tt = 7), In(e);
              }),
                d.then(a, a);
              break e;
            case 3:
              tt = 7;
              break e;
            case 4:
              tt = 5;
              break e;
            case 7:
              Km(d) ? ((tt = 0), (yn = null), By(a)) : ((tt = 0), (yn = null), $i(e, a, d, 7));
              break;
            case 5:
              var p = null;
              switch (Ye.tag) {
                case 26:
                  p = Ye.memoizedState;
                case 5:
                case 27:
                  var _ = Ye;
                  if (!p || bp(p)) {
                    (tt = 0), (yn = null);
                    var E = _.sibling;
                    if (E !== null) Ye = E;
                    else {
                      var U = _.return;
                      U !== null ? ((Ye = U), co(U)) : (Ye = null);
                    }
                    break t;
                  }
              }
              (tt = 0), (yn = null), $i(e, a, d, 5);
              break;
            case 6:
              (tt = 0), (yn = null), $i(e, a, d, 6);
              break;
            case 8:
              od(), (pt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        C_();
        break;
      } catch (F) {
        jy(e, F);
      }
    while (!0);
    return (
      (Sa = Yr = null),
      (V.H = u),
      (V.A = c),
      (et = s),
      Ye !== null ? 0 : ((ot = null), (Ge = 0), Au(), pt)
    );
  }
  function C_() {
    for (; Ye !== null && !Os(); ) Ly(Ye);
  }
  function Ly(e) {
    var a = cy(e.alternate, e, Da);
    (e.memoizedProps = e.pendingProps), a === null ? co(e) : (Ye = a);
  }
  function By(e) {
    var a = e,
      s = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = ry(s, a, a.pendingProps, a.type, void 0, Ge);
        break;
      case 11:
        a = ry(s, a, a.pendingProps, a.type.render, a.ref, Ge);
        break;
      case 5:
        Tf(a);
      default:
        dy(s, a), (a = Ye = Hm(a, Da)), (a = cy(s, a, Da));
    }
    (e.memoizedProps = e.pendingProps), a === null ? co(e) : (Ye = a);
  }
  function $i(e, a, s, u) {
    (Sa = Yr = null), Tf(a), (Bi = null), (el = 0);
    var c = a.return;
    try {
      if (y_(e, c, a, s, Ge)) {
        (pt = 1), to(e, Tn(s, e.current)), (Ye = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((Ye = c), d);
      (pt = 1), to(e, Tn(s, e.current)), (Ye = null);
      return;
    }
    a.flags & 32768
      ? (Xe || u === 1
          ? (e = !0)
          : Yi || (Ge & 536870912) !== 0
            ? (e = !1)
            : ((lr = e = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = Nn.current), u !== null && u.tag === 13 && (u.flags |= 16384))),
        Hy(a, e))
      : co(a);
  }
  function co(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        Hy(a, lr);
        return;
      }
      e = a.return;
      var s = v_(a.alternate, a, Da);
      if (s !== null) {
        Ye = s;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        Ye = a;
        return;
      }
      Ye = a = e;
    } while (a !== null);
    pt === 0 && (pt = 5);
  }
  function Hy(e, a) {
    do {
      var s = b_(e.alternate, e);
      if (s !== null) {
        (s.flags &= 32767), (Ye = s);
        return;
      }
      if (
        ((s = e.return),
        s !== null && ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !a && ((e = e.sibling), e !== null))
      ) {
        Ye = e;
        return;
      }
      Ye = e = s;
    } while (e !== null);
    (pt = 6), (Ye = null);
  }
  function Vy(e, a, s, u, c, d, p, _, E) {
    e.cancelPendingCommit = null;
    do fo();
    while (Bt !== 0);
    if ((et & 6) !== 0) throw Error(i(327));
    if (a !== null) {
      if (a === e.current) throw Error(i(177));
      if (
        ((d = a.lanes | a.childLanes),
        (d |= ef),
        Cc(e, s, d, p, _, E),
        e === ot && ((Ye = ot = null), (Ge = 0)),
        (Fi = a),
        (cr = e),
        (Gi = s),
        (sd = d),
        (ld = c),
        (Ny = u),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            A_(ma, function () {
              return Gy(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (u = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = V.T), (V.T = null), (c = I.p), (I.p = 2), (p = et), (et |= 4);
        try {
          __(e, a, s);
        } finally {
          (et = p), (I.p = c), (V.T = u);
        }
      }
      (Bt = 1), qy(), Yy(), Zy();
    }
  }
  function qy() {
    if (Bt === 1) {
      Bt = 0;
      var e = cr,
        a = Fi,
        s = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || s) {
        (s = V.T), (V.T = null);
        var u = I.p;
        I.p = 2;
        var c = et;
        et |= 4;
        try {
          wy(a, e);
          var d = wd,
            p = Dm(e.containerInfo),
            _ = d.focusedElem,
            E = d.selectionRange;
          if (p !== _ && _ && _.ownerDocument && Mm(_.ownerDocument.documentElement, _)) {
            if (E !== null && Kc(_)) {
              var U = E.start,
                F = E.end;
              if ((F === void 0 && (F = U), 'selectionStart' in _))
                (_.selectionStart = U), (_.selectionEnd = Math.min(F, _.value.length));
              else {
                var Q = _.ownerDocument || document,
                  L = (Q && Q.defaultView) || window;
                if (L.getSelection) {
                  var H = L.getSelection(),
                    Ne = _.textContent.length,
                    Oe = Math.min(E.start, Ne),
                    st = E.end === void 0 ? Oe : Math.min(E.end, Ne);
                  !H.extend && Oe > st && ((p = st), (st = Oe), (Oe = p));
                  var j = Cm(_, Oe),
                    A = Cm(_, st);
                  if (
                    j &&
                    A &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== j.node ||
                      H.anchorOffset !== j.offset ||
                      H.focusNode !== A.node ||
                      H.focusOffset !== A.offset)
                  ) {
                    var z = Q.createRange();
                    z.setStart(j.node, j.offset),
                      H.removeAllRanges(),
                      Oe > st
                        ? (H.addRange(z), H.extend(A.node, A.offset))
                        : (z.setEnd(A.node, A.offset), H.addRange(z));
                  }
                }
              }
            }
            for (Q = [], H = _; (H = H.parentNode); )
              H.nodeType === 1 && Q.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (typeof _.focus == 'function' && _.focus(), _ = 0; _ < Q.length; _++) {
              var P = Q[_];
              (P.element.scrollLeft = P.left), (P.element.scrollTop = P.top);
            }
          }
          (Oo = !!xd), (wd = xd = null);
        } finally {
          (et = c), (I.p = u), (V.T = s);
        }
      }
      (e.current = a), (Bt = 2);
    }
  }
  function Yy() {
    if (Bt === 2) {
      Bt = 0;
      var e = cr,
        a = Fi,
        s = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || s) {
        (s = V.T), (V.T = null);
        var u = I.p;
        I.p = 2;
        var c = et;
        et |= 4;
        try {
          by(e, a.alternate, a);
        } finally {
          (et = c), (I.p = u), (V.T = s);
        }
      }
      Bt = 3;
    }
  }
  function Zy() {
    if (Bt === 4 || Bt === 3) {
      (Bt = 0), fi();
      var e = cr,
        a = Fi,
        s = Gi,
        u = Ny;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Bt = 5)
        : ((Bt = 0), (Fi = cr = null), Fy(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (or = null),
        Mc(s),
        (a = a.stateNode),
        X && typeof X.onCommitFiberRoot == 'function')
      )
        try {
          X.onCommitFiberRoot(ae, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (a = V.T), (c = I.p), (I.p = 2), (V.T = null);
        try {
          for (var d = e.onRecoverableError, p = 0; p < u.length; p++) {
            var _ = u[p];
            d(_.value, { componentStack: _.stack });
          }
        } finally {
          (V.T = a), (I.p = c);
        }
      }
      (Gi & 3) !== 0 && fo(),
        In(e),
        (c = e.pendingLanes),
        (s & 4194090) !== 0 && (c & 42) !== 0 ? (e === ud ? ol++ : ((ol = 0), (ud = e))) : (ol = 0),
        cl(0);
    }
  }
  function Fy(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), Zs(a)));
  }
  function fo(e) {
    return qy(), Yy(), Zy(), Gy();
  }
  function Gy() {
    if (Bt !== 5) return !1;
    var e = cr,
      a = sd;
    sd = 0;
    var s = Mc(Gi),
      u = V.T,
      c = I.p;
    try {
      (I.p = 32 > s ? 32 : s), (V.T = null), (s = ld), (ld = null);
      var d = cr,
        p = Gi;
      if (((Bt = 0), (Fi = cr = null), (Gi = 0), (et & 6) !== 0)) throw Error(i(331));
      var _ = et;
      if (
        ((et |= 4),
        My(d.current),
        Ey(d, d.current, p, s),
        (et = _),
        cl(0, !1),
        X && typeof X.onPostCommitFiberRoot == 'function')
      )
        try {
          X.onPostCommitFiberRoot(ae, d);
        } catch {}
      return !0;
    } finally {
      (I.p = c), (V.T = u), Fy(e, a);
    }
  }
  function Py(e, a, s) {
    (a = Tn(s, a)), (a = Vf(e.stateNode, a, 2)), (e = er(e, a, 2)), e !== null && (Ar(e, 2), In(e));
  }
  function ut(e, a, s) {
    if (e.tag === 3) Py(e, e, s);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Py(a, e, s);
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == 'function' ||
            (typeof u.componentDidCatch == 'function' && (or === null || !or.has(u)))
          ) {
            (e = Tn(s, e)),
              (s = Wg(2)),
              (u = er(a, s, 2)),
              u !== null && (Xg(s, u, a, e), Ar(u, 2), In(u));
            break;
          }
        }
        a = a.return;
      }
  }
  function dd(e, a, s) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new w_();
      var c = new Set();
      u.set(a, c);
    } else (c = u.get(a)), c === void 0 && ((c = new Set()), u.set(a, c));
    c.has(s) || ((nd = !0), c.add(s), (e = M_.bind(null, e, a, s)), a.then(e, e));
  }
  function M_(e, a, s) {
    var u = e.pingCache;
    u !== null && u.delete(a),
      (e.pingedLanes |= e.suspendedLanes & s),
      (e.warmLanes &= ~s),
      ot === e &&
        (Ge & s) === s &&
        (pt === 4 || (pt === 3 && (Ge & 62914560) === Ge && 300 > Yt() - id)
          ? (et & 2) === 0 && Pi(e, 0)
          : (ad |= s),
        Zi === Ge && (Zi = 0)),
      In(e);
  }
  function $y(e, a) {
    a === 0 && (a = fn()), (e = Mi(e, a)), e !== null && (Ar(e, a), In(e));
  }
  function D_(e) {
    var a = e.memoizedState,
      s = 0;
    a !== null && (s = a.retryLane), $y(e, s);
  }
  function N_(e, a) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          c = e.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    u !== null && u.delete(a), $y(e, s);
  }
  function A_(e, a) {
    return Nr(e, a);
  }
  var ho = null,
    Qi = null,
    hd = !1,
    mo = !1,
    md = !1,
    Kr = 0;
  function In(e) {
    e !== Qi && e.next === null && (Qi === null ? (ho = Qi = e) : (Qi = Qi.next = e)),
      (mo = !0),
      hd || ((hd = !0), R_());
  }
  function cl(e, a) {
    if (!md && mo) {
      md = !0;
      do
        for (var s = !1, u = ho; u !== null; ) {
          if (e !== 0) {
            var c = u.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var p = u.suspendedLanes,
                _ = u.pingedLanes;
              (d = (1 << (31 - De(42 | e) + 1)) - 1),
                (d &= c & ~(p & ~_)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((s = !0), Xy(u, d));
          } else
            (d = Ge),
              (d = Zt(
                u,
                u === ot ? d : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (d & 3) === 0 || Tt(u, d) || ((s = !0), Xy(u, d));
          u = u.next;
        }
      while (s);
      md = !1;
    }
  }
  function k_() {
    Qy();
  }
  function Qy() {
    mo = hd = !1;
    var e = 0;
    Kr !== 0 && (q_() && (e = Kr), (Kr = 0));
    for (var a = Yt(), s = null, u = ho; u !== null; ) {
      var c = u.next,
        d = Ky(u, a);
      d === 0
        ? ((u.next = null), s === null ? (ho = c) : (s.next = c), c === null && (Qi = s))
        : ((s = u), (e !== 0 || (d & 3) !== 0) && (mo = !0)),
        (u = c);
    }
    cl(e);
  }
  function Ky(e, a) {
    for (
      var s = e.suspendedLanes,
        u = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var p = 31 - De(d),
        _ = 1 << p,
        E = c[p];
      E === -1
        ? ((_ & s) === 0 || (_ & u) !== 0) && (c[p] = ga(_, a))
        : E <= a && (e.expiredLanes |= _),
        (d &= ~_);
    }
    if (
      ((a = ot),
      (s = Ge),
      (s = Zt(e, e === a ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (u = e.callbackNode),
      s === 0 || (e === a && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null)
    )
      return u !== null && u !== null && Qa(u), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((s & 3) === 0 || Tt(e, s)) {
      if (((a = s & -s), a === e.callbackPriority)) return a;
      switch ((u !== null && Qa(u), Mc(s))) {
        case 2:
        case 8:
          s = Ts;
          break;
        case 32:
          s = ma;
          break;
        case 268435456:
          s = B;
          break;
        default:
          s = ma;
      }
      return (
        (u = Wy.bind(null, e)), (s = Nr(s, u)), (e.callbackPriority = a), (e.callbackNode = s), a
      );
    }
    return u !== null && u !== null && Qa(u), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function Wy(e, a) {
    if (Bt !== 0 && Bt !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var s = e.callbackNode;
    if (fo() && e.callbackNode !== s) return null;
    var u = Ge;
    return (
      (u = Zt(e, e === ot ? u : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      u === 0
        ? null
        : (ky(e, u, a),
          Ky(e, Yt()),
          e.callbackNode != null && e.callbackNode === s ? Wy.bind(null, e) : null)
    );
  }
  function Xy(e, a) {
    if (fo()) return null;
    ky(e, a, !0);
  }
  function R_() {
    Z_(function () {
      (et & 6) !== 0 ? Nr(di, k_) : Qy();
    });
  }
  function gd() {
    return Kr === 0 && (Kr = Ct()), Kr;
  }
  function Iy(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ou('' + e);
  }
  function Jy(e, a) {
    var s = a.ownerDocument.createElement('input');
    return (
      (s.name = a.name),
      (s.value = a.value),
      e.id && s.setAttribute('form', e.id),
      a.parentNode.insertBefore(s, a),
      (e = new FormData(e)),
      s.parentNode.removeChild(s),
      e
    );
  }
  function j_(e, a, s, u, c) {
    if (a === 'submit' && s && s.stateNode === c) {
      var d = Iy((c[sn] || null).action),
        p = u.submitter;
      p &&
        ((a = (a = p[sn] || null) ? Iy(a.formAction) : p.getAttribute('formAction')),
        a !== null && ((d = a), (p = null)));
      var _ = new Mu('action', 'action', null, u, c);
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Kr !== 0) {
                  var E = p ? Jy(c, p) : new FormData(c);
                  zf(s, { pending: !0, data: E, method: c.method, action: d }, null, E);
                }
              } else
                typeof d == 'function' &&
                  (_.preventDefault(),
                  (E = p ? Jy(c, p) : new FormData(c)),
                  zf(s, { pending: !0, data: E, method: c.method, action: d }, d, E));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var yd = 0; yd < Jc.length; yd++) {
    var pd = Jc[yd],
      z_ = pd.toLowerCase(),
      U_ = pd[0].toUpperCase() + pd.slice(1);
    jn(z_, 'on' + U_);
  }
  jn(km, 'onAnimationEnd'),
    jn(Rm, 'onAnimationIteration'),
    jn(jm, 'onAnimationStart'),
    jn('dblclick', 'onDoubleClick'),
    jn('focusin', 'onFocus'),
    jn('focusout', 'onBlur'),
    jn(J1, 'onTransitionRun'),
    jn(e_, 'onTransitionStart'),
    jn(t_, 'onTransitionCancel'),
    jn(zm, 'onTransitionEnd'),
    vi('onMouseEnter', ['mouseout', 'mouseover']),
    vi('onMouseLeave', ['mouseout', 'mouseover']),
    vi('onPointerEnter', ['pointerout', 'pointerover']),
    vi('onPointerLeave', ['pointerout', 'pointerover']),
    Rr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Rr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Rr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Rr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Rr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Rr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var fl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    L_ = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(fl)
    );
  function ep(e, a) {
    a = (a & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var u = e[s],
        c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (a)
          for (var p = u.length - 1; 0 <= p; p--) {
            var _ = u[p],
              E = _.instance,
              U = _.currentTarget;
            if (((_ = _.listener), E !== d && c.isPropagationStopped())) break e;
            (d = _), (c.currentTarget = U);
            try {
              d(c);
            } catch (F) {
              eo(F);
            }
            (c.currentTarget = null), (d = E);
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((_ = u[p]),
              (E = _.instance),
              (U = _.currentTarget),
              (_ = _.listener),
              E !== d && c.isPropagationStopped())
            )
              break e;
            (d = _), (c.currentTarget = U);
            try {
              d(c);
            } catch (F) {
              eo(F);
            }
            (c.currentTarget = null), (d = E);
          }
      }
    }
  }
  function Ze(e, a) {
    var s = a[Dc];
    s === void 0 && (s = a[Dc] = new Set());
    var u = e + '__bubble';
    s.has(u) || (tp(a, e, 2, !1), s.add(u));
  }
  function vd(e, a, s) {
    var u = 0;
    a && (u |= 4), tp(s, e, u, a);
  }
  var go = '_reactListening' + Math.random().toString(36).slice(2);
  function bd(e) {
    if (!e[go]) {
      (e[go] = !0),
        Qh.forEach(function (s) {
          s !== 'selectionchange' && (L_.has(s) || vd(s, !1, e), vd(s, !0, e));
        });
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[go] || ((a[go] = !0), vd('selectionchange', !1, a));
    }
  }
  function tp(e, a, s, u) {
    switch (Ep(a)) {
      case 2:
        var c = cS;
        break;
      case 8:
        c = fS;
        break;
      default:
        c = Rd;
    }
    (s = c.bind(null, a, s, e)),
      (c = void 0),
      !Vc || (a !== 'touchstart' && a !== 'touchmove' && a !== 'wheel') || (c = !0),
      u
        ? c !== void 0
          ? e.addEventListener(a, s, { capture: !0, passive: c })
          : e.addEventListener(a, s, !0)
        : c !== void 0
          ? e.addEventListener(a, s, { passive: c })
          : e.addEventListener(a, s, !1);
  }
  function _d(e, a, s, u, c) {
    var d = u;
    if ((a & 1) === 0 && (a & 2) === 0 && u !== null)
      e: for (;;) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var _ = u.stateNode.containerInfo;
          if (_ === c) break;
          if (p === 4)
            for (p = u.return; p !== null; ) {
              var E = p.tag;
              if ((E === 3 || E === 4) && p.stateNode.containerInfo === c) return;
              p = p.return;
            }
          for (; _ !== null; ) {
            if (((p = gi(_)), p === null)) return;
            if (((E = p.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              u = d = p;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        u = u.return;
      }
    um(function () {
      var U = d,
        F = Bc(s),
        Q = [];
      e: {
        var L = Um.get(e);
        if (L !== void 0) {
          var H = Mu,
            Ne = e;
          switch (e) {
            case 'keypress':
              if (Tu(s) === 0) break e;
            case 'keydown':
            case 'keyup':
              H = A1;
              break;
            case 'focusin':
              (Ne = 'focus'), (H = Fc);
              break;
            case 'focusout':
              (Ne = 'blur'), (H = Fc);
              break;
            case 'beforeblur':
            case 'afterblur':
              H = Fc;
              break;
            case 'click':
              if (s.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              H = fm;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              H = b1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              H = j1;
              break;
            case km:
            case Rm:
            case jm:
              H = x1;
              break;
            case zm:
              H = U1;
              break;
            case 'scroll':
            case 'scrollend':
              H = p1;
              break;
            case 'wheel':
              H = B1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              H = O1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              H = hm;
              break;
            case 'toggle':
            case 'beforetoggle':
              H = V1;
          }
          var Oe = (a & 4) !== 0,
            st = !Oe && (e === 'scroll' || e === 'scrollend'),
            j = Oe ? (L !== null ? L + 'Capture' : null) : L;
          Oe = [];
          for (var A = U, z; A !== null; ) {
            var P = A;
            if (
              ((z = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                z === null ||
                j === null ||
                ((P = Ns(A, j)), P != null && Oe.push(dl(A, P, z))),
              st)
            )
              break;
            A = A.return;
          }
          0 < Oe.length && ((L = new H(L, Ne, null, s, F)), Q.push({ event: L, listeners: Oe }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (H = e === 'mouseout' || e === 'pointerout'),
            L && s !== Lc && (Ne = s.relatedTarget || s.fromElement) && (gi(Ne) || Ne[mi]))
          )
            break e;
          if (
            (H || L) &&
            ((L =
              F.window === F
                ? F
                : (L = F.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            H
              ? ((Ne = s.relatedTarget || s.toElement),
                (H = U),
                (Ne = Ne ? gi(Ne) : null),
                Ne !== null &&
                  ((st = o(Ne)), (Oe = Ne.tag), Ne !== st || (Oe !== 5 && Oe !== 27 && Oe !== 6)) &&
                  (Ne = null))
              : ((H = null), (Ne = U)),
            H !== Ne)
          ) {
            if (
              ((Oe = fm),
              (P = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (A = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Oe = hm), (P = 'onPointerLeave'), (j = 'onPointerEnter'), (A = 'pointer')),
              (st = H == null ? L : Ds(H)),
              (z = Ne == null ? L : Ds(Ne)),
              (L = new Oe(P, A + 'leave', H, s, F)),
              (L.target = st),
              (L.relatedTarget = z),
              (P = null),
              gi(F) === U &&
                ((Oe = new Oe(j, A + 'enter', Ne, s, F)),
                (Oe.target = z),
                (Oe.relatedTarget = st),
                (P = Oe)),
              (st = P),
              H && Ne)
            )
              t: {
                for (Oe = H, j = Ne, A = 0, z = Oe; z; z = Ki(z)) A++;
                for (z = 0, P = j; P; P = Ki(P)) z++;
                for (; 0 < A - z; ) (Oe = Ki(Oe)), A--;
                for (; 0 < z - A; ) (j = Ki(j)), z--;
                for (; A--; ) {
                  if (Oe === j || (j !== null && Oe === j.alternate)) break t;
                  (Oe = Ki(Oe)), (j = Ki(j));
                }
                Oe = null;
              }
            else Oe = null;
            H !== null && np(Q, L, H, Oe, !1), Ne !== null && st !== null && np(Q, st, Ne, Oe, !0);
          }
        }
        e: {
          if (
            ((L = U ? Ds(U) : window),
            (H = L.nodeName && L.nodeName.toLowerCase()),
            H === 'select' || (H === 'input' && L.type === 'file'))
          )
            var ge = Sm;
          else if (bm(L))
            if (xm) ge = W1;
            else {
              ge = Q1;
              var qe = $1;
            }
          else
            (H = L.nodeName),
              !H || H.toLowerCase() !== 'input' || (L.type !== 'checkbox' && L.type !== 'radio')
                ? U && Uc(U.elementType) && (ge = Sm)
                : (ge = K1);
          if (ge && (ge = ge(e, U))) {
            _m(Q, ge, s, F);
            break e;
          }
          qe && qe(e, L, U),
            e === 'focusout' &&
              U &&
              L.type === 'number' &&
              U.memoizedProps.value != null &&
              zc(L, 'number', L.value);
        }
        switch (((qe = U ? Ds(U) : window), e)) {
          case 'focusin':
            (bm(qe) || qe.contentEditable === 'true') && ((Ei = qe), (Wc = U), (Bs = null));
            break;
          case 'focusout':
            Bs = Wc = Ei = null;
            break;
          case 'mousedown':
            Xc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Xc = !1), Nm(Q, s, F);
            break;
          case 'selectionchange':
            if (I1) break;
          case 'keydown':
          case 'keyup':
            Nm(Q, s, F);
        }
        var pe;
        if (Pc)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ee = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ee = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ee = 'onCompositionUpdate';
                break e;
            }
            Ee = void 0;
          }
        else
          Oi
            ? pm(e, s) && (Ee = 'onCompositionEnd')
            : e === 'keydown' && s.keyCode === 229 && (Ee = 'onCompositionStart');
        Ee &&
          (mm &&
            s.locale !== 'ko' &&
            (Oi || Ee !== 'onCompositionStart'
              ? Ee === 'onCompositionEnd' && Oi && (pe = om())
              : ((Wa = F), (qc = 'value' in Wa ? Wa.value : Wa.textContent), (Oi = !0))),
          (qe = yo(U, Ee)),
          0 < qe.length &&
            ((Ee = new dm(Ee, e, null, s, F)),
            Q.push({ event: Ee, listeners: qe }),
            pe ? (Ee.data = pe) : ((pe = vm(s)), pe !== null && (Ee.data = pe)))),
          (pe = Y1 ? Z1(e, s) : F1(e, s)) &&
            ((Ee = yo(U, 'onBeforeInput')),
            0 < Ee.length &&
              ((qe = new dm('onBeforeInput', 'beforeinput', null, s, F)),
              Q.push({ event: qe, listeners: Ee }),
              (qe.data = pe))),
          j_(Q, e, U, s, F);
      }
      ep(Q, a);
    });
  }
  function dl(e, a, s) {
    return { instance: e, listener: a, currentTarget: s };
  }
  function yo(e, a) {
    for (var s = a + 'Capture', u = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = Ns(e, s)),
          c != null && u.unshift(dl(e, c, d)),
          (c = Ns(e, a)),
          c != null && u.push(dl(e, c, d))),
        e.tag === 3)
      )
        return u;
      e = e.return;
    }
    return [];
  }
  function Ki(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function np(e, a, s, u, c) {
    for (var d = a._reactName, p = []; s !== null && s !== u; ) {
      var _ = s,
        E = _.alternate,
        U = _.stateNode;
      if (((_ = _.tag), E !== null && E === u)) break;
      (_ !== 5 && _ !== 26 && _ !== 27) ||
        U === null ||
        ((E = U),
        c
          ? ((U = Ns(s, d)), U != null && p.unshift(dl(s, U, E)))
          : c || ((U = Ns(s, d)), U != null && p.push(dl(s, U, E)))),
        (s = s.return);
    }
    p.length !== 0 && e.push({ event: a, listeners: p });
  }
  var B_ = /\r\n?/g,
    H_ = /\u0000|\uFFFD/g;
  function ap(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        B_,
        `
`
      )
      .replace(H_, '');
  }
  function rp(e, a) {
    return (a = ap(a)), ap(e) === a;
  }
  function po() {}
  function it(e, a, s, u, c, d) {
    switch (s) {
      case 'children':
        typeof u == 'string'
          ? a === 'body' || (a === 'textarea' && u === '') || Si(e, u)
          : (typeof u == 'number' || typeof u == 'bigint') && a !== 'body' && Si(e, '' + u);
        break;
      case 'className':
        Su(e, 'class', u);
        break;
      case 'tabIndex':
        Su(e, 'tabindex', u);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Su(e, s, u);
        break;
      case 'style':
        sm(e, u, d);
        break;
      case 'data':
        if (a !== 'object') {
          Su(e, 'data', u);
          break;
        }
      case 'src':
      case 'href':
        if (u === '' && (a !== 'a' || s !== 'href')) {
          e.removeAttribute(s);
          break;
        }
        if (u == null || typeof u == 'function' || typeof u == 'symbol' || typeof u == 'boolean') {
          e.removeAttribute(s);
          break;
        }
        (u = Ou('' + u)), e.setAttribute(s, u);
        break;
      case 'action':
      case 'formAction':
        if (typeof u == 'function') {
          e.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == 'function' &&
            (s === 'formAction'
              ? (a !== 'input' && it(e, a, 'name', c.name, c, null),
                it(e, a, 'formEncType', c.formEncType, c, null),
                it(e, a, 'formMethod', c.formMethod, c, null),
                it(e, a, 'formTarget', c.formTarget, c, null))
              : (it(e, a, 'encType', c.encType, c, null),
                it(e, a, 'method', c.method, c, null),
                it(e, a, 'target', c.target, c, null)));
        if (u == null || typeof u == 'symbol' || typeof u == 'boolean') {
          e.removeAttribute(s);
          break;
        }
        (u = Ou('' + u)), e.setAttribute(s, u);
        break;
      case 'onClick':
        u != null && (e.onclick = po);
        break;
      case 'onScroll':
        u != null && Ze('scroll', e);
        break;
      case 'onScrollEnd':
        u != null && Ze('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (u != null) {
          if (typeof u != 'object' || !('__html' in u)) throw Error(i(61));
          if (((s = u.__html), s != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = s;
          }
        }
        break;
      case 'multiple':
        e.multiple = u && typeof u != 'function' && typeof u != 'symbol';
        break;
      case 'muted':
        e.muted = u && typeof u != 'function' && typeof u != 'symbol';
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
        if (u == null || typeof u == 'function' || typeof u == 'boolean' || typeof u == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (s = Ou('' + u)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', s);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        u != null && typeof u != 'function' && typeof u != 'symbol'
          ? e.setAttribute(s, '' + u)
          : e.removeAttribute(s);
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
        u && typeof u != 'function' && typeof u != 'symbol'
          ? e.setAttribute(s, '')
          : e.removeAttribute(s);
        break;
      case 'capture':
      case 'download':
        u === !0
          ? e.setAttribute(s, '')
          : u !== !1 && u != null && typeof u != 'function' && typeof u != 'symbol'
            ? e.setAttribute(s, u)
            : e.removeAttribute(s);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        u != null && typeof u != 'function' && typeof u != 'symbol' && !isNaN(u) && 1 <= u
          ? e.setAttribute(s, u)
          : e.removeAttribute(s);
        break;
      case 'rowSpan':
      case 'start':
        u == null || typeof u == 'function' || typeof u == 'symbol' || isNaN(u)
          ? e.removeAttribute(s)
          : e.setAttribute(s, u);
        break;
      case 'popover':
        Ze('beforetoggle', e), Ze('toggle', e), _u(e, 'popover', u);
        break;
      case 'xlinkActuate':
        ya(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', u);
        break;
      case 'xlinkArcrole':
        ya(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', u);
        break;
      case 'xlinkRole':
        ya(e, 'http://www.w3.org/1999/xlink', 'xlink:role', u);
        break;
      case 'xlinkShow':
        ya(e, 'http://www.w3.org/1999/xlink', 'xlink:show', u);
        break;
      case 'xlinkTitle':
        ya(e, 'http://www.w3.org/1999/xlink', 'xlink:title', u);
        break;
      case 'xlinkType':
        ya(e, 'http://www.w3.org/1999/xlink', 'xlink:type', u);
        break;
      case 'xmlBase':
        ya(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', u);
        break;
      case 'xmlLang':
        ya(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', u);
        break;
      case 'xmlSpace':
        ya(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', u);
        break;
      case 'is':
        _u(e, 'is', u);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < s.length) || (s[0] !== 'o' && s[0] !== 'O') || (s[1] !== 'n' && s[1] !== 'N')) &&
          ((s = g1.get(s) || s), _u(e, s, u));
    }
  }
  function Sd(e, a, s, u, c, d) {
    switch (s) {
      case 'style':
        sm(e, u, d);
        break;
      case 'dangerouslySetInnerHTML':
        if (u != null) {
          if (typeof u != 'object' || !('__html' in u)) throw Error(i(61));
          if (((s = u.__html), s != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = s;
          }
        }
        break;
      case 'children':
        typeof u == 'string'
          ? Si(e, u)
          : (typeof u == 'number' || typeof u == 'bigint') && Si(e, '' + u);
        break;
      case 'onScroll':
        u != null && Ze('scroll', e);
        break;
      case 'onScrollEnd':
        u != null && Ze('scrollend', e);
        break;
      case 'onClick':
        u != null && (e.onclick = po);
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
        if (!Kh.hasOwnProperty(s))
          e: {
            if (
              s[0] === 'o' &&
              s[1] === 'n' &&
              ((c = s.endsWith('Capture')),
              (a = s.slice(2, c ? s.length - 7 : void 0)),
              (d = e[sn] || null),
              (d = d != null ? d[s] : null),
              typeof d == 'function' && e.removeEventListener(a, d, c),
              typeof u == 'function')
            ) {
              typeof d != 'function' &&
                d !== null &&
                (s in e ? (e[s] = null) : e.hasAttribute(s) && e.removeAttribute(s)),
                e.addEventListener(a, u, c);
              break e;
            }
            s in e ? (e[s] = u) : u === !0 ? e.setAttribute(s, '') : _u(e, s, u);
          }
    }
  }
  function Ht(e, a, s) {
    switch (a) {
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
        Ze('error', e), Ze('load', e);
        var u = !1,
          c = !1,
          d;
        for (d in s)
          if (s.hasOwnProperty(d)) {
            var p = s[d];
            if (p != null)
              switch (d) {
                case 'src':
                  u = !0;
                  break;
                case 'srcSet':
                  c = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(i(137, a));
                default:
                  it(e, a, d, p, s, null);
              }
          }
        c && it(e, a, 'srcSet', s.srcSet, s, null), u && it(e, a, 'src', s.src, s, null);
        return;
      case 'input':
        Ze('invalid', e);
        var _ = (d = p = c = null),
          E = null,
          U = null;
        for (u in s)
          if (s.hasOwnProperty(u)) {
            var F = s[u];
            if (F != null)
              switch (u) {
                case 'name':
                  c = F;
                  break;
                case 'type':
                  p = F;
                  break;
                case 'checked':
                  E = F;
                  break;
                case 'defaultChecked':
                  U = F;
                  break;
                case 'value':
                  d = F;
                  break;
                case 'defaultValue':
                  _ = F;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (F != null) throw Error(i(137, a));
                  break;
                default:
                  it(e, a, u, F, s, null);
              }
          }
        nm(e, d, _, E, U, p, c, !1), xu(e);
        return;
      case 'select':
        Ze('invalid', e), (u = p = d = null);
        for (c in s)
          if (s.hasOwnProperty(c) && ((_ = s[c]), _ != null))
            switch (c) {
              case 'value':
                d = _;
                break;
              case 'defaultValue':
                p = _;
                break;
              case 'multiple':
                u = _;
              default:
                it(e, a, c, _, s, null);
            }
        (a = d),
          (s = p),
          (e.multiple = !!u),
          a != null ? _i(e, !!u, a, !1) : s != null && _i(e, !!u, s, !0);
        return;
      case 'textarea':
        Ze('invalid', e), (d = c = u = null);
        for (p in s)
          if (s.hasOwnProperty(p) && ((_ = s[p]), _ != null))
            switch (p) {
              case 'value':
                u = _;
                break;
              case 'defaultValue':
                c = _;
                break;
              case 'children':
                d = _;
                break;
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(i(91));
                break;
              default:
                it(e, a, p, _, s, null);
            }
        rm(e, u, c, d), xu(e);
        return;
      case 'option':
        for (E in s)
          if (s.hasOwnProperty(E) && ((u = s[E]), u != null))
            switch (E) {
              case 'selected':
                e.selected = u && typeof u != 'function' && typeof u != 'symbol';
                break;
              default:
                it(e, a, E, u, s, null);
            }
        return;
      case 'dialog':
        Ze('beforetoggle', e), Ze('toggle', e), Ze('cancel', e), Ze('close', e);
        break;
      case 'iframe':
      case 'object':
        Ze('load', e);
        break;
      case 'video':
      case 'audio':
        for (u = 0; u < fl.length; u++) Ze(fl[u], e);
        break;
      case 'image':
        Ze('error', e), Ze('load', e);
        break;
      case 'details':
        Ze('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Ze('error', e), Ze('load', e);
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
        for (U in s)
          if (s.hasOwnProperty(U) && ((u = s[U]), u != null))
            switch (U) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, a));
              default:
                it(e, a, U, u, s, null);
            }
        return;
      default:
        if (Uc(a)) {
          for (F in s)
            s.hasOwnProperty(F) && ((u = s[F]), u !== void 0 && Sd(e, a, F, u, s, void 0));
          return;
        }
    }
    for (_ in s) s.hasOwnProperty(_) && ((u = s[_]), u != null && it(e, a, _, u, s, null));
  }
  function V_(e, a, s, u) {
    switch (a) {
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
          d = null,
          p = null,
          _ = null,
          E = null,
          U = null,
          F = null;
        for (H in s) {
          var Q = s[H];
          if (s.hasOwnProperty(H) && Q != null)
            switch (H) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                E = Q;
              default:
                u.hasOwnProperty(H) || it(e, a, H, null, u, Q);
            }
        }
        for (var L in u) {
          var H = u[L];
          if (((Q = s[L]), u.hasOwnProperty(L) && (H != null || Q != null)))
            switch (L) {
              case 'type':
                d = H;
                break;
              case 'name':
                c = H;
                break;
              case 'checked':
                U = H;
                break;
              case 'defaultChecked':
                F = H;
                break;
              case 'value':
                p = H;
                break;
              case 'defaultValue':
                _ = H;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (H != null) throw Error(i(137, a));
                break;
              default:
                H !== Q && it(e, a, L, H, u, Q);
            }
        }
        jc(e, p, _, E, U, F, d, c);
        return;
      case 'select':
        H = p = _ = L = null;
        for (d in s)
          if (((E = s[d]), s.hasOwnProperty(d) && E != null))
            switch (d) {
              case 'value':
                break;
              case 'multiple':
                H = E;
              default:
                u.hasOwnProperty(d) || it(e, a, d, null, u, E);
            }
        for (c in u)
          if (((d = u[c]), (E = s[c]), u.hasOwnProperty(c) && (d != null || E != null)))
            switch (c) {
              case 'value':
                L = d;
                break;
              case 'defaultValue':
                _ = d;
                break;
              case 'multiple':
                p = d;
              default:
                d !== E && it(e, a, c, d, u, E);
            }
        (a = _),
          (s = p),
          (u = H),
          L != null
            ? _i(e, !!s, L, !1)
            : !!u != !!s && (a != null ? _i(e, !!s, a, !0) : _i(e, !!s, s ? [] : '', !1));
        return;
      case 'textarea':
        H = L = null;
        for (_ in s)
          if (((c = s[_]), s.hasOwnProperty(_) && c != null && !u.hasOwnProperty(_)))
            switch (_) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                it(e, a, _, null, u, c);
            }
        for (p in u)
          if (((c = u[p]), (d = s[p]), u.hasOwnProperty(p) && (c != null || d != null)))
            switch (p) {
              case 'value':
                L = c;
                break;
              case 'defaultValue':
                H = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== d && it(e, a, p, c, u, d);
            }
        am(e, L, H);
        return;
      case 'option':
        for (var Ne in s)
          if (((L = s[Ne]), s.hasOwnProperty(Ne) && L != null && !u.hasOwnProperty(Ne)))
            switch (Ne) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                it(e, a, Ne, null, u, L);
            }
        for (E in u)
          if (((L = u[E]), (H = s[E]), u.hasOwnProperty(E) && L !== H && (L != null || H != null)))
            switch (E) {
              case 'selected':
                e.selected = L && typeof L != 'function' && typeof L != 'symbol';
                break;
              default:
                it(e, a, E, L, u, H);
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
        for (var Oe in s)
          (L = s[Oe]),
            s.hasOwnProperty(Oe) && L != null && !u.hasOwnProperty(Oe) && it(e, a, Oe, null, u, L);
        for (U in u)
          if (((L = u[U]), (H = s[U]), u.hasOwnProperty(U) && L !== H && (L != null || H != null)))
            switch (U) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (L != null) throw Error(i(137, a));
                break;
              default:
                it(e, a, U, L, u, H);
            }
        return;
      default:
        if (Uc(a)) {
          for (var st in s)
            (L = s[st]),
              s.hasOwnProperty(st) &&
                L !== void 0 &&
                !u.hasOwnProperty(st) &&
                Sd(e, a, st, void 0, u, L);
          for (F in u)
            (L = u[F]),
              (H = s[F]),
              !u.hasOwnProperty(F) ||
                L === H ||
                (L === void 0 && H === void 0) ||
                Sd(e, a, F, L, u, H);
          return;
        }
    }
    for (var j in s)
      (L = s[j]),
        s.hasOwnProperty(j) && L != null && !u.hasOwnProperty(j) && it(e, a, j, null, u, L);
    for (Q in u)
      (L = u[Q]),
        (H = s[Q]),
        !u.hasOwnProperty(Q) || L === H || (L == null && H == null) || it(e, a, Q, L, u, H);
  }
  var xd = null,
    wd = null;
  function vo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ip(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function sp(e, a) {
    if (e === 0)
      switch (a) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && a === 'foreignObject' ? 0 : e;
  }
  function Od(e, a) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof a.children == 'string' ||
      typeof a.children == 'number' ||
      typeof a.children == 'bigint' ||
      (typeof a.dangerouslySetInnerHTML == 'object' &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ed = null;
  function q_() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Ed ? !1 : ((Ed = e), !0)) : ((Ed = null), !1);
  }
  var lp = typeof setTimeout == 'function' ? setTimeout : void 0,
    Y_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    up = typeof Promise == 'function' ? Promise : void 0,
    Z_ =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof up < 'u'
          ? function (e) {
              return up.resolve(null).then(e).catch(F_);
            }
          : lp;
  function F_(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function dr(e) {
    return e === 'head';
  }
  function op(e, a) {
    var s = a,
      u = 0,
      c = 0;
    do {
      var d = s.nextSibling;
      if ((e.removeChild(s), d && d.nodeType === 8))
        if (((s = d.data), s === '/$')) {
          if (0 < u && 8 > u) {
            s = u;
            var p = e.ownerDocument;
            if ((s & 1 && hl(p.documentElement), s & 2 && hl(p.body), s & 4))
              for (s = p.head, hl(s), p = s.firstChild; p; ) {
                var _ = p.nextSibling,
                  E = p.nodeName;
                p[Ms] ||
                  E === 'SCRIPT' ||
                  E === 'STYLE' ||
                  (E === 'LINK' && p.rel.toLowerCase() === 'stylesheet') ||
                  s.removeChild(p),
                  (p = _);
              }
          }
          if (c === 0) {
            e.removeChild(d), Sl(a);
            return;
          }
          c--;
        } else s === '$' || s === '$?' || s === '$!' ? c++ : (u = s.charCodeAt(0) - 48);
      else u = 0;
      s = d;
    } while (s);
    Sl(a);
  }
  function Td(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var s = a;
      switch (((a = a.nextSibling), s.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Td(s), Nc(s);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (s.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(s);
    }
  }
  function G_(e, a, s, u) {
    for (; e.nodeType === 1; ) {
      var c = s;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (u) {
        if (!e[Ms])
          switch (a) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((d = e.getAttribute('rel')),
                d === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute('href') !== (c.href == null || c.href === '' ? null : c.href) ||
                e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute('title') !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((d = e.getAttribute('src')),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (a === 'input' && e.type === 'hidden') {
        var d = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === d) return e;
      } else return e;
      if (((e = Un(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function P_(e, a, s) {
    if (a === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !s) ||
        ((e = Un(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Cd(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function $_(e, a) {
    var s = e.ownerDocument;
    if (e.data !== '$?' || s.readyState === 'complete') a();
    else {
      var u = function () {
        a(), s.removeEventListener('DOMContentLoaded', u);
      };
      s.addEventListener('DOMContentLoaded', u), (e._reactRetry = u);
    }
  }
  function Un(e) {
    for (; e != null; e = e.nextSibling) {
      var a = e.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (((a = e.data), a === '$' || a === '$!' || a === '$?' || a === 'F!' || a === 'F')) break;
        if (a === '/$') return null;
      }
    }
    return e;
  }
  var Md = null;
  function cp(e) {
    e = e.previousSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === '$' || s === '$!' || s === '$?') {
          if (a === 0) return e;
          a--;
        } else s === '/$' && a++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function fp(e, a, s) {
    switch (((a = vo(s)), e)) {
      case 'html':
        if (((e = a.documentElement), !e)) throw Error(i(452));
        return e;
      case 'head':
        if (((e = a.head), !e)) throw Error(i(453));
        return e;
      case 'body':
        if (((e = a.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function hl(e) {
    for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
    Nc(e);
  }
  var kn = new Map(),
    dp = new Set();
  function bo(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Na = I.d;
  I.d = { f: Q_, r: K_, D: W_, C: X_, L: I_, m: J_, X: tS, S: eS, M: nS };
  function Q_() {
    var e = Na.f(),
      a = oo();
    return e || a;
  }
  function K_(e) {
    var a = yi(e);
    a !== null && a.tag === 5 && a.type === 'form' ? kg(a) : Na.r(e);
  }
  var Wi = typeof document > 'u' ? null : document;
  function hp(e, a, s) {
    var u = Wi;
    if (u && typeof a == 'string' && a) {
      var c = En(a);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof s == 'string' && (c += '[crossorigin="' + s + '"]'),
        dp.has(c) ||
          (dp.add(c),
          (e = { rel: e, crossOrigin: s, href: a }),
          u.querySelector(c) === null &&
            ((a = u.createElement('link')), Ht(a, 'link', e), Rt(a), u.head.appendChild(a)));
    }
  }
  function W_(e) {
    Na.D(e), hp('dns-prefetch', e, null);
  }
  function X_(e, a) {
    Na.C(e, a), hp('preconnect', e, a);
  }
  function I_(e, a, s) {
    Na.L(e, a, s);
    var u = Wi;
    if (u && e && a) {
      var c = 'link[rel="preload"][as="' + En(a) + '"]';
      a === 'image' && s && s.imageSrcSet
        ? ((c += '[imagesrcset="' + En(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == 'string' && (c += '[imagesizes="' + En(s.imageSizes) + '"]'))
        : (c += '[href="' + En(e) + '"]');
      var d = c;
      switch (a) {
        case 'style':
          d = Xi(e);
          break;
        case 'script':
          d = Ii(e);
      }
      kn.has(d) ||
        ((e = y(
          { rel: 'preload', href: a === 'image' && s && s.imageSrcSet ? void 0 : e, as: a },
          s
        )),
        kn.set(d, e),
        u.querySelector(c) !== null ||
          (a === 'style' && u.querySelector(ml(d))) ||
          (a === 'script' && u.querySelector(gl(d))) ||
          ((a = u.createElement('link')), Ht(a, 'link', e), Rt(a), u.head.appendChild(a)));
    }
  }
  function J_(e, a) {
    Na.m(e, a);
    var s = Wi;
    if (s && e) {
      var u = a && typeof a.as == 'string' ? a.as : 'script',
        c = 'link[rel="modulepreload"][as="' + En(u) + '"][href="' + En(e) + '"]',
        d = c;
      switch (u) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          d = Ii(e);
      }
      if (
        !kn.has(d) &&
        ((e = y({ rel: 'modulepreload', href: e }, a)), kn.set(d, e), s.querySelector(c) === null)
      ) {
        switch (u) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (s.querySelector(gl(d))) return;
        }
        (u = s.createElement('link')), Ht(u, 'link', e), Rt(u), s.head.appendChild(u);
      }
    }
  }
  function eS(e, a, s) {
    Na.S(e, a, s);
    var u = Wi;
    if (u && e) {
      var c = pi(u).hoistableStyles,
        d = Xi(e);
      a = a || 'default';
      var p = c.get(d);
      if (!p) {
        var _ = { loading: 0, preload: null };
        if ((p = u.querySelector(ml(d)))) _.loading = 5;
        else {
          (e = y({ rel: 'stylesheet', href: e, 'data-precedence': a }, s)),
            (s = kn.get(d)) && Dd(e, s);
          var E = (p = u.createElement('link'));
          Rt(E),
            Ht(E, 'link', e),
            (E._p = new Promise(function (U, F) {
              (E.onload = U), (E.onerror = F);
            })),
            E.addEventListener('load', function () {
              _.loading |= 1;
            }),
            E.addEventListener('error', function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            _o(p, a, u);
        }
        (p = { type: 'stylesheet', instance: p, count: 1, state: _ }), c.set(d, p);
      }
    }
  }
  function tS(e, a) {
    Na.X(e, a);
    var s = Wi;
    if (s && e) {
      var u = pi(s).hoistableScripts,
        c = Ii(e),
        d = u.get(c);
      d ||
        ((d = s.querySelector(gl(c))),
        d ||
          ((e = y({ src: e, async: !0 }, a)),
          (a = kn.get(c)) && Nd(e, a),
          (d = s.createElement('script')),
          Rt(d),
          Ht(d, 'link', e),
          s.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        u.set(c, d));
    }
  }
  function nS(e, a) {
    Na.M(e, a);
    var s = Wi;
    if (s && e) {
      var u = pi(s).hoistableScripts,
        c = Ii(e),
        d = u.get(c);
      d ||
        ((d = s.querySelector(gl(c))),
        d ||
          ((e = y({ src: e, async: !0, type: 'module' }, a)),
          (a = kn.get(c)) && Nd(e, a),
          (d = s.createElement('script')),
          Rt(d),
          Ht(d, 'link', e),
          s.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        u.set(c, d));
    }
  }
  function mp(e, a, s, u) {
    var c = (c = we.current) ? bo(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof s.precedence == 'string' && typeof s.href == 'string'
          ? ((a = Xi(s.href)),
            (s = pi(c).hoistableStyles),
            (u = s.get(a)),
            u || ((u = { type: 'style', instance: null, count: 0, state: null }), s.set(a, u)),
            u)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          s.rel === 'stylesheet' &&
          typeof s.href == 'string' &&
          typeof s.precedence == 'string'
        ) {
          e = Xi(s.href);
          var d = pi(c).hoistableStyles,
            p = d.get(e);
          if (
            (p ||
              ((c = c.ownerDocument || c),
              (p = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, p),
              (d = c.querySelector(ml(e))) && !d._p && ((p.instance = d), (p.state.loading = 5)),
              kn.has(e) ||
                ((s = {
                  rel: 'preload',
                  as: 'style',
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                kn.set(e, s),
                d || aS(c, e, s, p.state))),
            a && u === null)
          )
            throw Error(i(528, ''));
          return p;
        }
        if (a && u !== null) throw Error(i(529, ''));
        return null;
      case 'script':
        return (
          (a = s.async),
          (s = s.src),
          typeof s == 'string' && a && typeof a != 'function' && typeof a != 'symbol'
            ? ((a = Ii(s)),
              (s = pi(c).hoistableScripts),
              (u = s.get(a)),
              u || ((u = { type: 'script', instance: null, count: 0, state: null }), s.set(a, u)),
              u)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Xi(e) {
    return 'href="' + En(e) + '"';
  }
  function ml(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function gp(e) {
    return y({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function aS(e, a, s, u) {
    e.querySelector('link[rel="preload"][as="style"][' + a + ']')
      ? (u.loading = 1)
      : ((a = e.createElement('link')),
        (u.preload = a),
        a.addEventListener('load', function () {
          return (u.loading |= 1);
        }),
        a.addEventListener('error', function () {
          return (u.loading |= 2);
        }),
        Ht(a, 'link', s),
        Rt(a),
        e.head.appendChild(a));
  }
  function Ii(e) {
    return '[src="' + En(e) + '"]';
  }
  function gl(e) {
    return 'script[async]' + e;
  }
  function yp(e, a, s) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case 'style':
          var u = e.querySelector('style[data-href~="' + En(s.href) + '"]');
          if (u) return (a.instance = u), Rt(u), u;
          var c = y({}, s, {
            'data-href': s.href,
            'data-precedence': s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (e.ownerDocument || e).createElement('style')),
            Rt(u),
            Ht(u, 'style', c),
            _o(u, s.precedence, e),
            (a.instance = u)
          );
        case 'stylesheet':
          c = Xi(s.href);
          var d = e.querySelector(ml(c));
          if (d) return (a.state.loading |= 4), (a.instance = d), Rt(d), d;
          (u = gp(s)),
            (c = kn.get(c)) && Dd(u, c),
            (d = (e.ownerDocument || e).createElement('link')),
            Rt(d);
          var p = d;
          return (
            (p._p = new Promise(function (_, E) {
              (p.onload = _), (p.onerror = E);
            })),
            Ht(d, 'link', u),
            (a.state.loading |= 4),
            _o(d, s.precedence, e),
            (a.instance = d)
          );
        case 'script':
          return (
            (d = Ii(s.src)),
            (c = e.querySelector(gl(d)))
              ? ((a.instance = c), Rt(c), c)
              : ((u = s),
                (c = kn.get(d)) && ((u = y({}, s)), Nd(u, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                Rt(c),
                Ht(c, 'link', u),
                e.head.appendChild(c),
                (a.instance = c))
          );
        case 'void':
          return null;
        default:
          throw Error(i(443, a.type));
      }
    else
      a.type === 'stylesheet' &&
        (a.state.loading & 4) === 0 &&
        ((u = a.instance), (a.state.loading |= 4), _o(u, s.precedence, e));
    return a.instance;
  }
  function _o(e, a, s) {
    for (
      var u = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        c = u.length ? u[u.length - 1] : null,
        d = c,
        p = 0;
      p < u.length;
      p++
    ) {
      var _ = u[p];
      if (_.dataset.precedence === a) d = _;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((a = s.nodeType === 9 ? s.head : s), a.insertBefore(e, a.firstChild));
  }
  function Dd(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title);
  }
  function Nd(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity);
  }
  var So = null;
  function pp(e, a, s) {
    if (So === null) {
      var u = new Map(),
        c = (So = new Map());
      c.set(s, u);
    } else (c = So), (u = c.get(s)), u || ((u = new Map()), c.set(s, u));
    if (u.has(e)) return u;
    for (u.set(e, null), s = s.getElementsByTagName(e), c = 0; c < s.length; c++) {
      var d = s[c];
      if (
        !(d[Ms] || d[Ft] || (e === 'link' && d.getAttribute('rel') === 'stylesheet')) &&
        d.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var p = d.getAttribute(a) || '';
        p = e + p;
        var _ = u.get(p);
        _ ? _.push(d) : u.set(p, [d]);
      }
    }
    return u;
  }
  function vp(e, a, s) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(s, a === 'title' ? e.querySelector('head > title') : null);
  }
  function rS(e, a, s) {
    if (s === 1 || a.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof a.precedence != 'string' || typeof a.href != 'string' || a.href === '') break;
        return !0;
      case 'link':
        if (
          typeof a.rel != 'string' ||
          typeof a.href != 'string' ||
          a.href === '' ||
          a.onLoad ||
          a.onError
        )
          break;
        switch (a.rel) {
          case 'stylesheet':
            return (e = a.disabled), typeof a.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          a.async &&
          typeof a.async != 'function' &&
          typeof a.async != 'symbol' &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function bp(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var yl = null;
  function iS() {}
  function sS(e, a, s) {
    if (yl === null) throw Error(i(475));
    var u = yl;
    if (
      a.type === 'stylesheet' &&
      (typeof s.media != 'string' || matchMedia(s.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var c = Xi(s.href),
          d = e.querySelector(ml(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (u.count++, (u = xo.bind(u)), e.then(u, u)),
            (a.state.loading |= 4),
            (a.instance = d),
            Rt(d);
          return;
        }
        (d = e.ownerDocument || e),
          (s = gp(s)),
          (c = kn.get(c)) && Dd(s, c),
          (d = d.createElement('link')),
          Rt(d);
        var p = d;
        (p._p = new Promise(function (_, E) {
          (p.onload = _), (p.onerror = E);
        })),
          Ht(d, 'link', s),
          (a.instance = d);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (u.count++,
          (a = xo.bind(u)),
          e.addEventListener('load', a),
          e.addEventListener('error', a));
    }
  }
  function lS() {
    if (yl === null) throw Error(i(475));
    var e = yl;
    return (
      e.stylesheets && e.count === 0 && Ad(e, e.stylesheets),
      0 < e.count
        ? function (a) {
            var s = setTimeout(function () {
              if ((e.stylesheets && Ad(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (e.unsuspend = a),
              function () {
                (e.unsuspend = null), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function xo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ad(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var wo = null;
  function Ad(e, a) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (wo = new Map()), a.forEach(uS, e), (wo = null), xo.call(e));
  }
  function uS(e, a) {
    if (!(a.state.loading & 4)) {
      var s = wo.get(e);
      if (s) var u = s.get(null);
      else {
        (s = new Map()), wo.set(e, s);
        for (
          var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), d = 0;
          d < c.length;
          d++
        ) {
          var p = c[d];
          (p.nodeName === 'LINK' || p.getAttribute('media') !== 'not all') &&
            (s.set(p.dataset.precedence, p), (u = p));
        }
        u && s.set(null, u);
      }
      (c = a.instance),
        (p = c.getAttribute('data-precedence')),
        (d = s.get(p) || u),
        d === u && s.set(null, c),
        s.set(p, c),
        this.count++,
        (u = xo.bind(this)),
        c.addEventListener('load', u),
        c.addEventListener('error', u),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var pl = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: me,
    _currentValue2: me,
    _threadCount: 0,
  };
  function oS(e, a, s, u, c, d, p, _) {
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
      (this.expirationTimes = $e(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $e(0)),
      (this.hiddenUpdates = $e(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = _),
      (this.incompleteTransitions = new Map());
  }
  function _p(e, a, s, u, c, d, p, _, E, U, F, Q) {
    return (
      (e = new oS(e, a, s, p, _, E, U, Q)),
      (a = 1),
      d === !0 && (a |= 24),
      (d = hn(3, null, null, a)),
      (e.current = d),
      (d.stateNode = e),
      (a = df()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (d.memoizedState = { element: u, isDehydrated: s, cache: a }),
      yf(d),
      e
    );
  }
  function Sp(e) {
    return e ? ((e = Di), e) : Di;
  }
  function xp(e, a, s, u, c, d) {
    (c = Sp(c)),
      u.context === null ? (u.context = c) : (u.pendingContext = c),
      (u = Ja(a)),
      (u.payload = { element: s }),
      (d = d === void 0 ? null : d),
      d !== null && (u.callback = d),
      (s = er(e, u, a)),
      s !== null && (vn(s, e, a), $s(s, e, a));
  }
  function wp(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < a ? s : a;
    }
  }
  function kd(e, a) {
    wp(e, a), (e = e.alternate) && wp(e, a);
  }
  function Op(e) {
    if (e.tag === 13) {
      var a = Mi(e, 67108864);
      a !== null && vn(a, e, 67108864), kd(e, 67108864);
    }
  }
  var Oo = !0;
  function cS(e, a, s, u) {
    var c = V.T;
    V.T = null;
    var d = I.p;
    try {
      (I.p = 2), Rd(e, a, s, u);
    } finally {
      (I.p = d), (V.T = c);
    }
  }
  function fS(e, a, s, u) {
    var c = V.T;
    V.T = null;
    var d = I.p;
    try {
      (I.p = 8), Rd(e, a, s, u);
    } finally {
      (I.p = d), (V.T = c);
    }
  }
  function Rd(e, a, s, u) {
    if (Oo) {
      var c = jd(u);
      if (c === null) _d(e, a, u, Eo, s), Tp(e, u);
      else if (hS(c, e, a, s, u)) u.stopPropagation();
      else if ((Tp(e, u), a & 4 && -1 < dS.indexOf(e))) {
        for (; c !== null; ) {
          var d = yi(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var p = Fe(d.pendingLanes);
                  if (p !== 0) {
                    var _ = d;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; p; ) {
                      var E = 1 << (31 - De(p));
                      (_.entanglements[1] |= E), (p &= ~E);
                    }
                    In(d), (et & 6) === 0 && ((lo = Yt() + 500), cl(0));
                  }
                }
                break;
              case 13:
                (_ = Mi(d, 2)), _ !== null && vn(_, d, 2), oo(), kd(d, 2);
            }
          if (((d = jd(u)), d === null && _d(e, a, u, Eo, s), d === c)) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else _d(e, a, u, null, s);
    }
  }
  function jd(e) {
    return (e = Bc(e)), zd(e);
  }
  var Eo = null;
  function zd(e) {
    if (((Eo = null), (e = gi(e)), e !== null)) {
      var a = o(e);
      if (a === null) e = null;
      else {
        var s = a.tag;
        if (s === 13) {
          if (((e = f(a)), e !== null)) return e;
          e = null;
        } else if (s === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return (Eo = e), null;
  }
  function Ep(e) {
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
        switch (Es()) {
          case di:
            return 2;
          case Ts:
            return 8;
          case ma:
          case M:
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
  var Ud = !1,
    hr = null,
    mr = null,
    gr = null,
    vl = new Map(),
    bl = new Map(),
    yr = [],
    dS =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Tp(e, a) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        hr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        mr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        gr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        vl.delete(a.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        bl.delete(a.pointerId);
    }
  }
  function _l(e, a, s, u, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: a,
          domEventName: s,
          eventSystemFlags: u,
          nativeEvent: d,
          targetContainers: [c],
        }),
        a !== null && ((a = yi(a)), a !== null && Op(a)),
        e)
      : ((e.eventSystemFlags |= u),
        (a = e.targetContainers),
        c !== null && a.indexOf(c) === -1 && a.push(c),
        e);
  }
  function hS(e, a, s, u, c) {
    switch (a) {
      case 'focusin':
        return (hr = _l(hr, e, a, s, u, c)), !0;
      case 'dragenter':
        return (mr = _l(mr, e, a, s, u, c)), !0;
      case 'mouseover':
        return (gr = _l(gr, e, a, s, u, c)), !0;
      case 'pointerover':
        var d = c.pointerId;
        return vl.set(d, _l(vl.get(d) || null, e, a, s, u, c)), !0;
      case 'gotpointercapture':
        return (d = c.pointerId), bl.set(d, _l(bl.get(d) || null, e, a, s, u, c)), !0;
    }
    return !1;
  }
  function Cp(e) {
    var a = gi(e.target);
    if (a !== null) {
      var s = o(a);
      if (s !== null) {
        if (((a = s.tag), a === 13)) {
          if (((a = f(s)), a !== null)) {
            (e.blockedOn = a),
              s1(e.priority, function () {
                if (s.tag === 13) {
                  var u = pn();
                  u = kr(u);
                  var c = Mi(s, u);
                  c !== null && vn(c, s, u), kd(s, u);
                }
              });
            return;
          }
        } else if (a === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function To(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var s = jd(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var u = new s.constructor(s.type, s);
        (Lc = u), s.target.dispatchEvent(u), (Lc = null);
      } else return (a = yi(s)), a !== null && Op(a), (e.blockedOn = s), !1;
      a.shift();
    }
    return !0;
  }
  function Mp(e, a, s) {
    To(e) && s.delete(a);
  }
  function mS() {
    (Ud = !1),
      hr !== null && To(hr) && (hr = null),
      mr !== null && To(mr) && (mr = null),
      gr !== null && To(gr) && (gr = null),
      vl.forEach(Mp),
      bl.forEach(Mp);
  }
  function Co(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      Ud || ((Ud = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, mS)));
  }
  var Mo = null;
  function Dp(e) {
    Mo !== e &&
      ((Mo = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Mo === e && (Mo = null);
        for (var a = 0; a < e.length; a += 3) {
          var s = e[a],
            u = e[a + 1],
            c = e[a + 2];
          if (typeof u != 'function') {
            if (zd(u || s) === null) continue;
            break;
          }
          var d = yi(s);
          d !== null &&
            (e.splice(a, 3),
            (a -= 3),
            zf(d, { pending: !0, data: c, method: s.method, action: u }, u, c));
        }
      }));
  }
  function Sl(e) {
    function a(E) {
      return Co(E, e);
    }
    hr !== null && Co(hr, e),
      mr !== null && Co(mr, e),
      gr !== null && Co(gr, e),
      vl.forEach(a),
      bl.forEach(a);
    for (var s = 0; s < yr.length; s++) {
      var u = yr[s];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < yr.length && ((s = yr[0]), s.blockedOn === null); )
      Cp(s), s.blockedOn === null && yr.shift();
    if (((s = (e.ownerDocument || e).$$reactFormReplay), s != null))
      for (u = 0; u < s.length; u += 3) {
        var c = s[u],
          d = s[u + 1],
          p = c[sn] || null;
        if (typeof d == 'function') p || Dp(s);
        else if (p) {
          var _ = null;
          if (d && d.hasAttribute('formAction')) {
            if (((c = d), (p = d[sn] || null))) _ = p.formAction;
            else if (zd(c) !== null) continue;
          } else _ = p.action;
          typeof _ == 'function' ? (s[u + 1] = _) : (s.splice(u, 3), (u -= 3)), Dp(s);
        }
      }
  }
  function Ld(e) {
    this._internalRoot = e;
  }
  (Do.prototype.render = Ld.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(i(409));
      var s = a.current,
        u = pn();
      xp(s, u, e, a, null, null);
    }),
    (Do.prototype.unmount = Ld.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          xp(e.current, 2, null, e, null, null), oo(), (a[mi] = null);
        }
      });
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = Ph();
      e = { blockedOn: null, target: e, priority: a };
      for (var s = 0; s < yr.length && a !== 0 && a < yr[s].priority; s++);
      yr.splice(s, 0, e), s === 0 && Cp(e);
    }
  };
  var Np = t.version;
  if (Np !== '19.1.0') throw Error(i(527, Np, '19.1.0'));
  I.findDOMNode = function (e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == 'function'
        ? Error(i(188))
        : ((e = Object.keys(e).join(',')), Error(i(268, e)));
    return (e = m(a)), (e = e !== null ? g(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var gS = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: V,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber)
      try {
        (ae = No.inject(gS)), (X = No);
      } catch {}
  }
  return (
    (wl.createRoot = function (e, a) {
      if (!l(e)) throw Error(i(299));
      var s = !1,
        u = '',
        c = Pg,
        d = $g,
        p = Qg,
        _ = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (p = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (_ = a.unstable_transitionCallbacks)),
        (a = _p(e, 1, !1, null, null, s, u, c, d, p, _, null)),
        (e[mi] = a.current),
        bd(e),
        new Ld(a)
      );
    }),
    (wl.hydrateRoot = function (e, a, s) {
      if (!l(e)) throw Error(i(299));
      var u = !1,
        c = '',
        d = Pg,
        p = $g,
        _ = Qg,
        E = null,
        U = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (d = s.onUncaughtError),
          s.onCaughtError !== void 0 && (p = s.onCaughtError),
          s.onRecoverableError !== void 0 && (_ = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 && (E = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (U = s.formState)),
        (a = _p(e, 1, !0, a, s ?? null, u, c, d, p, _, E, U)),
        (a.context = Sp(null)),
        (s = a.current),
        (u = pn()),
        (u = kr(u)),
        (c = Ja(u)),
        (c.callback = null),
        er(s, c, u),
        (s = u),
        (a.current.lanes = s),
        Ar(a, s),
        In(a),
        (e[mi] = a.current),
        bd(e),
        new Do(a)
      );
    }),
    (wl.version = '19.1.0'),
    wl
  );
}
var qp;
function TS() {
  if (qp) return qd.exports;
  qp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return n(), (qd.exports = ES()), qd.exports;
}
var CS = TS(),
  Ol = {},
  Yp;
function MS() {
  if (Yp) return Ol;
  (Yp = 1),
    Object.defineProperty(Ol, '__esModule', { value: !0 }),
    (Ol.parse = f),
    (Ol.serialize = g);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    l = Object.prototype.toString,
    o = (() => {
      const b = function () {};
      return (b.prototype = Object.create(null)), b;
    })();
  function f(b, w) {
    const S = new o(),
      D = b.length;
    if (D < 2) return S;
    const C = (w == null ? void 0 : w.decode) || y;
    let N = 0;
    do {
      const O = b.indexOf('=', N);
      if (O === -1) break;
      const k = b.indexOf(';', N),
        Y = k === -1 ? D : k;
      if (O > Y) {
        N = b.lastIndexOf(';', O - 1) + 1;
        continue;
      }
      const q = h(b, N, O),
        K = m(b, O, q),
        W = b.slice(q, K);
      if (S[W] === void 0) {
        let ie = h(b, O + 1, Y),
          te = m(b, Y, ie);
        const _e = C(b.slice(ie, te));
        S[W] = _e;
      }
      N = Y + 1;
    } while (N < D);
    return S;
  }
  function h(b, w, S) {
    do {
      const D = b.charCodeAt(w);
      if (D !== 32 && D !== 9) return w;
    } while (++w < S);
    return S;
  }
  function m(b, w, S) {
    for (; w > S; ) {
      const D = b.charCodeAt(--w);
      if (D !== 32 && D !== 9) return w + 1;
    }
    return S;
  }
  function g(b, w, S) {
    const D = (S == null ? void 0 : S.encode) || encodeURIComponent;
    if (!n.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const C = D(w);
    if (!t.test(C)) throw new TypeError(`argument val is invalid: ${w}`);
    let N = b + '=' + C;
    if (!S) return N;
    if (S.maxAge !== void 0) {
      if (!Number.isInteger(S.maxAge)) throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);
      N += '; Max-Age=' + S.maxAge;
    }
    if (S.domain) {
      if (!r.test(S.domain)) throw new TypeError(`option domain is invalid: ${S.domain}`);
      N += '; Domain=' + S.domain;
    }
    if (S.path) {
      if (!i.test(S.path)) throw new TypeError(`option path is invalid: ${S.path}`);
      N += '; Path=' + S.path;
    }
    if (S.expires) {
      if (!v(S.expires) || !Number.isFinite(S.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${S.expires}`);
      N += '; Expires=' + S.expires.toUTCString();
    }
    if (
      (S.httpOnly && (N += '; HttpOnly'),
      S.secure && (N += '; Secure'),
      S.partitioned && (N += '; Partitioned'),
      S.priority)
    )
      switch (typeof S.priority == 'string' ? S.priority.toLowerCase() : void 0) {
        case 'low':
          N += '; Priority=Low';
          break;
        case 'medium':
          N += '; Priority=Medium';
          break;
        case 'high':
          N += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${S.priority}`);
      }
    if (S.sameSite)
      switch (typeof S.sameSite == 'string' ? S.sameSite.toLowerCase() : S.sameSite) {
        case !0:
        case 'strict':
          N += '; SameSite=Strict';
          break;
        case 'lax':
          N += '; SameSite=Lax';
          break;
        case 'none':
          N += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${S.sameSite}`);
      }
    return N;
  }
  function y(b) {
    if (b.indexOf('%') === -1) return b;
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }
  function v(b) {
    return l.call(b) === '[object Date]';
  }
  return Ol;
}
MS();
var Zp = 'popstate';
function DS(n = {}) {
  function t(i, l) {
    let { pathname: o, search: f, hash: h } = i.location;
    return ch(
      '',
      { pathname: o, search: f, hash: h },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function r(i, l) {
    return typeof l == 'string' ? l : ql(l);
  }
  return AS(t, r, null, n);
}
function gt(n, t) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(t);
}
function ua(n, t) {
  if (!n) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function NS() {
  return Math.random().toString(36).substring(2, 10);
}
function Fp(n, t) {
  return { usr: n.state, key: n.key, idx: t };
}
function ch(n, t, r = null, i) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? Ss(t) : t),
    state: r,
    key: (t && t.key) || i || NS(),
  };
}
function ql({ pathname: n = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (n += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (n += r.charAt(0) === '#' ? r : '#' + r),
    n
  );
}
function Ss(n) {
  let t = {};
  if (n) {
    let r = n.indexOf('#');
    r >= 0 && ((t.hash = n.substring(r)), (n = n.substring(0, r)));
    let i = n.indexOf('?');
    i >= 0 && ((t.search = n.substring(i)), (n = n.substring(0, i))), n && (t.pathname = n);
  }
  return t;
}
function AS(n, t, r, i = {}) {
  let { window: l = document.defaultView, v5Compat: o = !1 } = i,
    f = l.history,
    h = 'POP',
    m = null,
    g = y();
  g == null && ((g = 0), f.replaceState({ ...f.state, idx: g }, ''));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    h = 'POP';
    let C = y(),
      N = C == null ? null : C - g;
    (g = C), m && m({ action: h, location: D.location, delta: N });
  }
  function b(C, N) {
    h = 'PUSH';
    let O = ch(D.location, C, N);
    g = y() + 1;
    let k = Fp(O, g),
      Y = D.createHref(O);
    try {
      f.pushState(k, '', Y);
    } catch (q) {
      if (q instanceof DOMException && q.name === 'DataCloneError') throw q;
      l.location.assign(Y);
    }
    o && m && m({ action: h, location: D.location, delta: 1 });
  }
  function w(C, N) {
    h = 'REPLACE';
    let O = ch(D.location, C, N);
    g = y();
    let k = Fp(O, g),
      Y = D.createHref(O);
    f.replaceState(k, '', Y), o && m && m({ action: h, location: D.location, delta: 0 });
  }
  function S(C) {
    let N = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      O = typeof C == 'string' ? C : ql(C);
    return (
      (O = O.replace(/ $/, '%20')),
      gt(N, `No window.location.(origin|href) available to create URL for href: ${O}`),
      new URL(O, N)
    );
  }
  let D = {
    get action() {
      return h;
    },
    get location() {
      return n(l, f);
    },
    listen(C) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Zp, v),
        (m = C),
        () => {
          l.removeEventListener(Zp, v), (m = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: S,
    encodeLocation(C) {
      let N = S(C);
      return { pathname: N.pathname, search: N.search, hash: N.hash };
    },
    push: b,
    replace: w,
    go(C) {
      return f.go(C);
    },
  };
  return D;
}
function d0(n, t, r = '/') {
  return kS(n, t, r, !1);
}
function kS(n, t, r, i) {
  let l = typeof t == 'string' ? Ss(t) : t,
    o = qa(l.pathname || '/', r);
  if (o == null) return null;
  let f = h0(n);
  RS(f);
  let h = null;
  for (let m = 0; h == null && m < f.length; ++m) {
    let g = FS(o);
    h = YS(f[m], g, i);
  }
  return h;
}
function h0(n, t = [], r = [], i = '') {
  let l = (o, f, h) => {
    let m = {
      relativePath: h === void 0 ? o.path || '' : h,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: f,
      route: o,
    };
    m.relativePath.startsWith('/') &&
      (gt(
        m.relativePath.startsWith(i),
        `Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(i.length)));
    let g = Ha([i, m.relativePath]),
      y = r.concat(m);
    o.children &&
      o.children.length > 0 &&
      (gt(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      h0(o.children, t, y, g)),
      !(o.path == null && !o.index) && t.push({ path: g, score: VS(g, o.index), routesMeta: y });
  };
  return (
    n.forEach((o, f) => {
      var h;
      if (o.path === '' || !((h = o.path) != null && h.includes('?'))) l(o, f);
      else for (let m of m0(o.path)) l(o, f, m);
    }),
    t
  );
}
function m0(n) {
  let t = n.split('/');
  if (t.length === 0) return [];
  let [r, ...i] = t,
    l = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (i.length === 0) return l ? [o, ''] : [o];
  let f = m0(i.join('/')),
    h = [];
  return (
    h.push(...f.map((m) => (m === '' ? o : [o, m].join('/')))),
    l && h.push(...f),
    h.map((m) => (n.startsWith('/') && m === '' ? '/' : m))
  );
}
function RS(n) {
  n.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : qS(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var jS = /^:[\w-]+$/,
  zS = 3,
  US = 2,
  LS = 1,
  BS = 10,
  HS = -2,
  Gp = (n) => n === '*';
function VS(n, t) {
  let r = n.split('/'),
    i = r.length;
  return (
    r.some(Gp) && (i += HS),
    t && (i += US),
    r.filter((l) => !Gp(l)).reduce((l, o) => l + (jS.test(o) ? zS : o === '' ? LS : BS), i)
  );
}
function qS(n, t) {
  return n.length === t.length && n.slice(0, -1).every((i, l) => i === t[l])
    ? n[n.length - 1] - t[t.length - 1]
    : 0;
}
function YS(n, t, r = !1) {
  let { routesMeta: i } = n,
    l = {},
    o = '/',
    f = [];
  for (let h = 0; h < i.length; ++h) {
    let m = i[h],
      g = h === i.length - 1,
      y = o === '/' ? t : t.slice(o.length) || '/',
      v = Po({ path: m.relativePath, caseSensitive: m.caseSensitive, end: g }, y),
      b = m.route;
    if (
      (!v &&
        g &&
        r &&
        !i[i.length - 1].route.index &&
        (v = Po({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, y)),
      !v)
    )
      return null;
    Object.assign(l, v.params),
      f.push({
        params: l,
        pathname: Ha([o, v.pathname]),
        pathnameBase: QS(Ha([o, v.pathnameBase])),
        route: b,
      }),
      v.pathnameBase !== '/' && (o = Ha([o, v.pathnameBase]));
  }
  return f;
}
function Po(n, t) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [r, i] = ZS(n.path, n.caseSensitive, n.end),
    l = t.match(r);
  if (!l) return null;
  let o = l[0],
    f = o.replace(/(.)\/+$/, '$1'),
    h = l.slice(1);
  return {
    params: i.reduce((g, { paramName: y, isOptional: v }, b) => {
      if (y === '*') {
        let S = h[b] || '';
        f = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const w = h[b];
      return v && !w ? (g[y] = void 0) : (g[y] = (w || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: o,
    pathnameBase: f,
    pattern: n,
  };
}
function ZS(n, t = !1, r = !0) {
  ua(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`
  );
  let i = [],
    l =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, h, m) => (
            i.push({ paramName: h, isOptional: m != null }), m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    n.endsWith('*')
      ? (i.push({ paramName: '*' }), (l += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (l += '\\/*$')
        : n !== '' && n !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), i]
  );
}
function FS(n) {
  try {
    return n
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ua(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      n
    );
  }
}
function qa(n, t) {
  if (t === '/') return n;
  if (!n.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    i = n.charAt(r);
  return i && i !== '/' ? null : n.slice(r) || '/';
}
function GS(n, t = '/') {
  let { pathname: r, search: i = '', hash: l = '' } = typeof n == 'string' ? Ss(n) : n;
  return { pathname: r ? (r.startsWith('/') ? r : PS(r, t)) : t, search: KS(i), hash: WS(l) };
}
function PS(n, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((l) => {
      l === '..' ? r.length > 1 && r.pop() : l !== '.' && r.push(l);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Gd(n, t, r, i) {
  return `Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $S(n) {
  return n.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function g0(n) {
  let t = $S(n);
  return t.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase));
}
function y0(n, t, r, i = !1) {
  let l;
  typeof n == 'string'
    ? (l = Ss(n))
    : ((l = { ...n }),
      gt(!l.pathname || !l.pathname.includes('?'), Gd('?', 'pathname', 'search', l)),
      gt(!l.pathname || !l.pathname.includes('#'), Gd('#', 'pathname', 'hash', l)),
      gt(!l.search || !l.search.includes('#'), Gd('#', 'search', 'hash', l)));
  let o = n === '' || l.pathname === '',
    f = o ? '/' : l.pathname,
    h;
  if (f == null) h = r;
  else {
    let v = t.length - 1;
    if (!i && f.startsWith('..')) {
      let b = f.split('/');
      for (; b[0] === '..'; ) b.shift(), (v -= 1);
      l.pathname = b.join('/');
    }
    h = v >= 0 ? t[v] : '/';
  }
  let m = GS(l, h),
    g = f && f !== '/' && f.endsWith('/'),
    y = (o || f === '.') && r.endsWith('/');
  return !m.pathname.endsWith('/') && (g || y) && (m.pathname += '/'), m;
}
var Ha = (n) => n.join('/').replace(/\/\/+/g, '/'),
  QS = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  KS = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  WS = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function XS(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var p0 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(p0);
var IS = ['GET', ...p0];
new Set(IS);
var xs = R.createContext(null);
xs.displayName = 'DataRouter';
var gc = R.createContext(null);
gc.displayName = 'DataRouterState';
var v0 = R.createContext({ isTransitioning: !1 });
v0.displayName = 'ViewTransition';
var JS = R.createContext(new Map());
JS.displayName = 'Fetchers';
var ex = R.createContext(null);
ex.displayName = 'Await';
var da = R.createContext(null);
da.displayName = 'Navigation';
var fu = R.createContext(null);
fu.displayName = 'Location';
var ha = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ha.displayName = 'Route';
var Ch = R.createContext(null);
Ch.displayName = 'RouteError';
function tx(n, { relative: t } = {}) {
  gt(du(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: i } = R.useContext(da),
    { hash: l, pathname: o, search: f } = hu(n, { relative: t }),
    h = o;
  return (
    r !== '/' && (h = o === '/' ? r : Ha([r, o])), i.createHref({ pathname: h, search: f, hash: l })
  );
}
function du() {
  return R.useContext(fu) != null;
}
function ci() {
  return (
    gt(du(), 'useLocation() may be used only in the context of a <Router> component.'),
    R.useContext(fu).location
  );
}
var b0 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function _0(n) {
  R.useContext(da).static || R.useLayoutEffect(n);
}
function an() {
  let { isDataRoute: n } = R.useContext(ha);
  return n ? yx() : nx();
}
function nx() {
  gt(du(), 'useNavigate() may be used only in the context of a <Router> component.');
  let n = R.useContext(xs),
    { basename: t, navigator: r } = R.useContext(da),
    { matches: i } = R.useContext(ha),
    { pathname: l } = ci(),
    o = JSON.stringify(g0(i)),
    f = R.useRef(!1);
  return (
    _0(() => {
      f.current = !0;
    }),
    R.useCallback(
      (m, g = {}) => {
        if ((ua(f.current, b0), !f.current)) return;
        if (typeof m == 'number') {
          r.go(m);
          return;
        }
        let y = y0(m, JSON.parse(o), l, g.relative === 'path');
        n == null && t !== '/' && (y.pathname = y.pathname === '/' ? t : Ha([t, y.pathname])),
          (g.replace ? r.replace : r.push)(y, g.state, g);
      },
      [t, r, o, l, n]
    )
  );
}
var ax = R.createContext(null);
function rx(n) {
  let t = R.useContext(ha).outlet;
  return t && R.createElement(ax.Provider, { value: n }, t);
}
function hu(n, { relative: t } = {}) {
  let { matches: r } = R.useContext(ha),
    { pathname: i } = ci(),
    l = JSON.stringify(g0(r));
  return R.useMemo(() => y0(n, JSON.parse(l), i, t === 'path'), [n, l, i, t]);
}
function ix(n, t) {
  return S0(n, t);
}
function S0(n, t, r, i) {
  var O;
  gt(du(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: l, static: o } = R.useContext(da),
    { matches: f } = R.useContext(ha),
    h = f[f.length - 1],
    m = h ? h.params : {},
    g = h ? h.pathname : '/',
    y = h ? h.pathnameBase : '/',
    v = h && h.route;
  {
    let k = (v && v.path) || '';
    x0(
      g,
      !v || k.endsWith('*') || k.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === '/' ? '*' : `${k}/*`}">.`
    );
  }
  let b = ci(),
    w;
  if (t) {
    let k = typeof t == 'string' ? Ss(t) : t;
    gt(
      y === '/' || ((O = k.pathname) == null ? void 0 : O.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${k.pathname}" was given in the \`location\` prop.`
    ),
      (w = k);
  } else w = b;
  let S = w.pathname || '/',
    D = S;
  if (y !== '/') {
    let k = y.replace(/^\//, '').split('/');
    D = '/' + S.replace(/^\//, '').split('/').slice(k.length).join('/');
  }
  let C = !o && r && r.matches && r.matches.length > 0 ? r.matches : d0(n, { pathname: D });
  ua(v || C != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    ua(
      C == null ||
        C[C.length - 1].route.element !== void 0 ||
        C[C.length - 1].route.Component !== void 0 ||
        C[C.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let N = cx(
    C &&
      C.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, m, k.params),
          pathname: Ha([y, l.encodeLocation ? l.encodeLocation(k.pathname).pathname : k.pathname]),
          pathnameBase:
            k.pathnameBase === '/'
              ? y
              : Ha([
                  y,
                  l.encodeLocation ? l.encodeLocation(k.pathnameBase).pathname : k.pathnameBase,
                ]),
        })
      ),
    f,
    r,
    i
  );
  return t && N
    ? R.createElement(
        fu.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...w },
            navigationType: 'POP',
          },
        },
        N
      )
    : N;
}
function sx() {
  let n = gx(),
    t = XS(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n),
    r = n instanceof Error ? n.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: i },
    o = { padding: '2px 4px', backgroundColor: i },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (f = R.createElement(
      R.Fragment,
      null,
      R.createElement('p', null, '💿 Hey developer 👋'),
      R.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        R.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        R.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement('h2', null, 'Unexpected Application Error!'),
      R.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? R.createElement('pre', { style: l }, r) : null,
      f
    )
  );
}
var lx = R.createElement(sx, null),
  ux = class extends R.Component {
    constructor(n) {
      super(n),
        (this.state = { location: n.location, revalidation: n.revalidation, error: n.error });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, t) {
      return t.location !== n.location || (t.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : t.error,
            location: t.location,
            revalidation: n.revalidation || t.revalidation,
          };
    }
    componentDidCatch(n, t) {
      console.error('React Router caught the following error during render', n, t);
    }
    render() {
      return this.state.error !== void 0
        ? R.createElement(
            ha.Provider,
            { value: this.props.routeContext },
            R.createElement(Ch.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function ox({ routeContext: n, match: t, children: r }) {
  let i = R.useContext(xs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    R.createElement(ha.Provider, { value: n }, r)
  );
}
function cx(n, t = [], r = null, i = null) {
  if (n == null) {
    if (!r) return null;
    if (r.errors) n = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0) n = r.matches;
    else return null;
  }
  let l = n,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let m = l.findIndex((g) => g.route.id && (o == null ? void 0 : o[g.route.id]) !== void 0);
    gt(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`
    ),
      (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  let f = !1,
    h = -1;
  if (r)
    for (let m = 0; m < l.length; m++) {
      let g = l[m];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = m), g.route.id)) {
        let { loaderData: y, errors: v } = r,
          b = g.route.loader && !y.hasOwnProperty(g.route.id) && (!v || v[g.route.id] === void 0);
        if (g.route.lazy || b) {
          (f = !0), h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((m, g, y) => {
    let v,
      b = !1,
      w = null,
      S = null;
    r &&
      ((v = o && g.route.id ? o[g.route.id] : void 0),
      (w = g.route.errorElement || lx),
      f &&
        (h < 0 && y === 0
          ? (x0(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (b = !0),
            (S = null))
          : h === y && ((b = !0), (S = g.route.hydrateFallbackElement || null))));
    let D = t.concat(l.slice(0, y + 1)),
      C = () => {
        let N;
        return (
          v
            ? (N = w)
            : b
              ? (N = S)
              : g.route.Component
                ? (N = R.createElement(g.route.Component, null))
                : g.route.element
                  ? (N = g.route.element)
                  : (N = m),
          R.createElement(ox, {
            match: g,
            routeContext: { outlet: m, matches: D, isDataRoute: r != null },
            children: N,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || y === 0)
      ? R.createElement(ux, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: v,
          children: C(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
        })
      : C();
  }, null);
}
function Mh(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fx(n) {
  let t = R.useContext(xs);
  return gt(t, Mh(n)), t;
}
function dx(n) {
  let t = R.useContext(gc);
  return gt(t, Mh(n)), t;
}
function hx(n) {
  let t = R.useContext(ha);
  return gt(t, Mh(n)), t;
}
function Dh(n) {
  let t = hx(n),
    r = t.matches[t.matches.length - 1];
  return gt(r.route.id, `${n} can only be used on routes that contain a unique "id"`), r.route.id;
}
function mx() {
  return Dh('useRouteId');
}
function gx() {
  var i;
  let n = R.useContext(Ch),
    t = dx('useRouteError'),
    r = Dh('useRouteError');
  return n !== void 0 ? n : (i = t.errors) == null ? void 0 : i[r];
}
function yx() {
  let { router: n } = fx('useNavigate'),
    t = Dh('useNavigate'),
    r = R.useRef(!1);
  return (
    _0(() => {
      r.current = !0;
    }),
    R.useCallback(
      async (l, o = {}) => {
        ua(r.current, b0),
          r.current &&
            (typeof l == 'number' ? n.navigate(l) : await n.navigate(l, { fromRouteId: t, ...o }));
      },
      [n, t]
    )
  );
}
var Pp = {};
function x0(n, t, r) {
  !t && !Pp[n] && ((Pp[n] = !0), ua(!1, r));
}
R.memo(px);
function px({ routes: n, future: t, state: r }) {
  return S0(n, void 0, r, t);
}
function vx(n) {
  return rx(n.context);
}
function Jn(n) {
  gt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function bx({
  basename: n = '/',
  children: t = null,
  location: r,
  navigationType: i = 'POP',
  navigator: l,
  static: o = !1,
}) {
  gt(
    !du(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = n.replace(/^\/*/, '/'),
    h = R.useMemo(() => ({ basename: f, navigator: l, static: o, future: {} }), [f, l, o]);
  typeof r == 'string' && (r = Ss(r));
  let { pathname: m = '/', search: g = '', hash: y = '', state: v = null, key: b = 'default' } = r,
    w = R.useMemo(() => {
      let S = qa(m, f);
      return S == null
        ? null
        : { location: { pathname: S, search: g, hash: y, state: v, key: b }, navigationType: i };
    }, [f, m, g, y, v, b, i]);
  return (
    ua(
      w != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : R.createElement(
          da.Provider,
          { value: h },
          R.createElement(fu.Provider, { children: t, value: w })
        )
  );
}
function _x({ children: n, location: t }) {
  return ix(fh(n), t);
}
function fh(n, t = []) {
  let r = [];
  return (
    R.Children.forEach(n, (i, l) => {
      if (!R.isValidElement(i)) return;
      let o = [...t, l];
      if (i.type === R.Fragment) {
        r.push.apply(r, fh(i.props.children, o));
        return;
      }
      gt(
        i.type === Jn,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        gt(!i.props.index || !i.props.children, 'An index route cannot have child routes.');
      let f = {
        id: i.props.id || o.join('-'),
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
      i.props.children && (f.children = fh(i.props.children, o)), r.push(f);
    }),
    r
  );
}
var Yo = 'get',
  Zo = 'application/x-www-form-urlencoded';
function yc(n) {
  return n != null && typeof n.tagName == 'string';
}
function Sx(n) {
  return yc(n) && n.tagName.toLowerCase() === 'button';
}
function xx(n) {
  return yc(n) && n.tagName.toLowerCase() === 'form';
}
function wx(n) {
  return yc(n) && n.tagName.toLowerCase() === 'input';
}
function Ox(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Ex(n, t) {
  return n.button === 0 && (!t || t === '_self') && !Ox(n);
}
var ko = null;
function Tx() {
  if (ko === null)
    try {
      new FormData(document.createElement('form'), 0), (ko = !1);
    } catch {
      ko = !0;
    }
  return ko;
}
var Cx = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Pd(n) {
  return n != null && !Cx.has(n)
    ? (ua(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zo}"`
      ),
      null)
    : n;
}
function Mx(n, t) {
  let r, i, l, o, f;
  if (xx(n)) {
    let h = n.getAttribute('action');
    (i = h ? qa(h, t) : null),
      (r = n.getAttribute('method') || Yo),
      (l = Pd(n.getAttribute('enctype')) || Zo),
      (o = new FormData(n));
  } else if (Sx(n) || (wx(n) && (n.type === 'submit' || n.type === 'image'))) {
    let h = n.form;
    if (h == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let m = n.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((i = m ? qa(m, t) : null),
      (r = n.getAttribute('formmethod') || h.getAttribute('method') || Yo),
      (l = Pd(n.getAttribute('formenctype')) || Pd(h.getAttribute('enctype')) || Zo),
      (o = new FormData(h, n)),
      !Tx())
    ) {
      let { name: g, type: y, value: v } = n;
      if (y === 'image') {
        let b = g ? `${g}.` : '';
        o.append(`${b}x`, '0'), o.append(`${b}y`, '0');
      } else g && o.append(g, v);
    }
  } else {
    if (yc(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Yo), (i = null), (l = Zo), (f = n);
  }
  return (
    o && l === 'text/plain' && ((f = o), (o = void 0)),
    { action: i, method: r.toLowerCase(), encType: l, formData: o, body: f }
  );
}
function Nh(n, t) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(t);
}
async function Dx(n, t) {
  if (n.id in t) return t[n.id];
  try {
    let r = await import(n.module);
    return (t[n.id] = r), r;
  } catch (r) {
    return (
      console.error(`Error loading route module \`${n.module}\`, reloading page...`),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Nx(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' && typeof n.imageSrcSet == 'string' && typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function Ax(n, t, r) {
  let i = await Promise.all(
    n.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let f = await Dx(o, r);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return zx(
    i
      .flat(1)
      .filter(Nx)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet' ? { ...l, rel: 'prefetch', as: 'style' } : { ...l, rel: 'prefetch' }
      )
  );
}
function $p(n, t, r, i, l, o) {
  let f = (m, g) => (r[g] ? m.route.id !== r[g].route.id : !0),
    h = (m, g) => {
      var y;
      return (
        r[g].pathname !== m.pathname ||
        (((y = r[g].route.path) == null ? void 0 : y.endsWith('*')) &&
          r[g].params['*'] !== m.params['*'])
      );
    };
  return o === 'assets'
    ? t.filter((m, g) => f(m, g) || h(m, g))
    : o === 'data'
      ? t.filter((m, g) => {
          var v;
          let y = i.routes[m.route.id];
          if (!y || !y.hasLoader) return !1;
          if (f(m, g) || h(m, g)) return !0;
          if (m.route.shouldRevalidate) {
            let b = m.route.shouldRevalidate({
              currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
              currentParams: ((v = r[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == 'boolean') return b;
          }
          return !0;
        })
      : [];
}
function kx(n, t, { includeHydrateFallback: r } = {}) {
  return Rx(
    n
      .map((i) => {
        let l = t.routes[i.route.id];
        if (!l) return [];
        let o = [l.module];
        return (
          l.clientActionModule && (o = o.concat(l.clientActionModule)),
          l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)),
          r && l.hydrateFallbackModule && (o = o.concat(l.hydrateFallbackModule)),
          l.imports && (o = o.concat(l.imports)),
          o
        );
      })
      .flat(1)
  );
}
function Rx(n) {
  return [...new Set(n)];
}
function jx(n) {
  let t = {},
    r = Object.keys(n).sort();
  for (let i of r) t[i] = n[i];
  return t;
}
function zx(n, t) {
  let r = new Set();
  return (
    new Set(t),
    n.reduce((i, l) => {
      let o = JSON.stringify(jx(l));
      return r.has(o) || (r.add(o), i.push({ key: o, link: l })), i;
    }, [])
  );
}
var Ux = new Set([100, 101, 204, 205]);
function Lx(n, t) {
  let r =
    typeof n == 'string'
      ? new URL(n, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : n;
  return (
    r.pathname === '/'
      ? (r.pathname = '_root.data')
      : t && qa(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
    r
  );
}
function w0() {
  let n = R.useContext(xs);
  return Nh(n, 'You must render this element inside a <DataRouterContext.Provider> element'), n;
}
function Bx() {
  let n = R.useContext(gc);
  return (
    Nh(n, 'You must render this element inside a <DataRouterStateContext.Provider> element'), n
  );
}
var Ah = R.createContext(void 0);
Ah.displayName = 'FrameworkContext';
function O0() {
  let n = R.useContext(Ah);
  return Nh(n, 'You must render this element inside a <HydratedRouter> element'), n;
}
function Hx(n, t) {
  let r = R.useContext(Ah),
    [i, l] = R.useState(!1),
    [o, f] = R.useState(!1),
    { onFocus: h, onBlur: m, onMouseEnter: g, onMouseLeave: y, onTouchStart: v } = t,
    b = R.useRef(null);
  R.useEffect(() => {
    if ((n === 'render' && f(!0), n === 'viewport')) {
      let D = (N) => {
          N.forEach((O) => {
            f(O.isIntersecting);
          });
        },
        C = new IntersectionObserver(D, { threshold: 0.5 });
      return (
        b.current && C.observe(b.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [n]),
    R.useEffect(() => {
      if (i) {
        let D = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(D);
        };
      }
    }, [i]);
  let w = () => {
      l(!0);
    },
    S = () => {
      l(!1), f(!1);
    };
  return r
    ? n !== 'intent'
      ? [o, b, {}]
      : [
          o,
          b,
          {
            onFocus: El(h, w),
            onBlur: El(m, S),
            onMouseEnter: El(g, w),
            onMouseLeave: El(y, S),
            onTouchStart: El(v, w),
          },
        ]
    : [!1, b, {}];
}
function El(n, t) {
  return (r) => {
    n && n(r), r.defaultPrevented || t(r);
  };
}
function Vx({ page: n, ...t }) {
  let { router: r } = w0(),
    i = R.useMemo(() => d0(r.routes, n, r.basename), [r.routes, n, r.basename]);
  return i ? R.createElement(Yx, { page: n, matches: i, ...t }) : null;
}
function qx(n) {
  let { manifest: t, routeModules: r } = O0(),
    [i, l] = R.useState([]);
  return (
    R.useEffect(() => {
      let o = !1;
      return (
        Ax(n, t, r).then((f) => {
          o || l(f);
        }),
        () => {
          o = !0;
        }
      );
    }, [n, t, r]),
    i
  );
}
function Yx({ page: n, matches: t, ...r }) {
  let i = ci(),
    { manifest: l, routeModules: o } = O0(),
    { basename: f } = w0(),
    { loaderData: h, matches: m } = Bx(),
    g = R.useMemo(() => $p(n, t, m, l, i, 'data'), [n, t, m, l, i]),
    y = R.useMemo(() => $p(n, t, m, l, i, 'assets'), [n, t, m, l, i]),
    v = R.useMemo(() => {
      if (n === i.pathname + i.search + i.hash) return [];
      let S = new Set(),
        D = !1;
      if (
        (t.forEach((N) => {
          var k;
          let O = l.routes[N.route.id];
          !O ||
            !O.hasLoader ||
            ((!g.some((Y) => Y.route.id === N.route.id) &&
              N.route.id in h &&
              (k = o[N.route.id]) != null &&
              k.shouldRevalidate) ||
            O.hasClientLoader
              ? (D = !0)
              : S.add(N.route.id));
        }),
        S.size === 0)
      )
        return [];
      let C = Lx(n, f);
      return (
        D &&
          S.size > 0 &&
          C.searchParams.set(
            '_routes',
            t
              .filter((N) => S.has(N.route.id))
              .map((N) => N.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [f, h, i, l, g, t, n, o]),
    b = R.useMemo(() => kx(y, l), [y, l]),
    w = qx(y);
  return R.createElement(
    R.Fragment,
    null,
    v.map((S) => R.createElement('link', { key: S, rel: 'prefetch', as: 'fetch', href: S, ...r })),
    b.map((S) => R.createElement('link', { key: S, rel: 'modulepreload', href: S, ...r })),
    w.map(({ key: S, link: D }) => R.createElement('link', { key: S, ...D }))
  );
}
function Zx(...n) {
  return (t) => {
    n.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var E0 =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  E0 && (window.__reactRouterVersion = '7.5.3');
} catch {}
function Fx({ basename: n, children: t, window: r }) {
  let i = R.useRef();
  i.current == null && (i.current = DS({ window: r, v5Compat: !0 }));
  let l = i.current,
    [o, f] = R.useState({ action: l.action, location: l.location }),
    h = R.useCallback(
      (m) => {
        R.startTransition(() => f(m));
      },
      [f]
    );
  return (
    R.useLayoutEffect(() => l.listen(h), [l, h]),
    R.createElement(bx, {
      basename: n,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
var T0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  C0 = R.forwardRef(function (
    {
      onClick: t,
      discover: r = 'render',
      prefetch: i = 'none',
      relative: l,
      reloadDocument: o,
      replace: f,
      state: h,
      target: m,
      to: g,
      preventScrollReset: y,
      viewTransition: v,
      ...b
    },
    w
  ) {
    let { basename: S } = R.useContext(da),
      D = typeof g == 'string' && T0.test(g),
      C,
      N = !1;
    if (typeof g == 'string' && D && ((C = g), E0))
      try {
        let te = new URL(window.location.href),
          _e = g.startsWith('//') ? new URL(te.protocol + g) : new URL(g),
          be = qa(_e.pathname, S);
        _e.origin === te.origin && be != null ? (g = be + _e.search + _e.hash) : (N = !0);
      } catch {
        ua(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let O = tx(g, { relative: l }),
      [k, Y, q] = Hx(i, b),
      K = Qx(g, {
        replace: f,
        state: h,
        target: m,
        preventScrollReset: y,
        relative: l,
        viewTransition: v,
      });
    function W(te) {
      t && t(te), te.defaultPrevented || K(te);
    }
    let ie = R.createElement('a', {
      ...b,
      ...q,
      href: C || O,
      onClick: N || o ? t : W,
      ref: Zx(w, Y),
      target: m,
      'data-discover': !D && r === 'render' ? 'true' : void 0,
    });
    return k && !D ? R.createElement(R.Fragment, null, ie, R.createElement(Vx, { page: O })) : ie;
  });
C0.displayName = 'Link';
var Gx = R.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: r = !1,
    className: i = '',
    end: l = !1,
    style: o,
    to: f,
    viewTransition: h,
    children: m,
    ...g
  },
  y
) {
  let v = hu(f, { relative: g.relative }),
    b = ci(),
    w = R.useContext(gc),
    { navigator: S, basename: D } = R.useContext(da),
    C = w != null && Jx(v) && h === !0,
    N = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname,
    O = b.pathname,
    k = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  r || ((O = O.toLowerCase()), (k = k ? k.toLowerCase() : null), (N = N.toLowerCase())),
    k && D && (k = qa(k, D) || k);
  const Y = N !== '/' && N.endsWith('/') ? N.length - 1 : N.length;
  let q = O === N || (!l && O.startsWith(N) && O.charAt(Y) === '/'),
    K = k != null && (k === N || (!l && k.startsWith(N) && k.charAt(N.length) === '/')),
    W = { isActive: q, isPending: K, isTransitioning: C },
    ie = q ? t : void 0,
    te;
  typeof i == 'function'
    ? (te = i(W))
    : (te = [i, q ? 'active' : null, K ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let _e = typeof o == 'function' ? o(W) : o;
  return R.createElement(
    C0,
    { ...g, 'aria-current': ie, className: te, ref: y, style: _e, to: f, viewTransition: h },
    typeof m == 'function' ? m(W) : m
  );
});
Gx.displayName = 'NavLink';
var Px = R.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: i,
      replace: l,
      state: o,
      method: f = Yo,
      action: h,
      onSubmit: m,
      relative: g,
      preventScrollReset: y,
      viewTransition: v,
      ...b
    },
    w
  ) => {
    let S = Xx(),
      D = Ix(h, { relative: g }),
      C = f.toLowerCase() === 'get' ? 'get' : 'post',
      N = typeof h == 'string' && T0.test(h),
      O = (k) => {
        if ((m && m(k), k.defaultPrevented)) return;
        k.preventDefault();
        let Y = k.nativeEvent.submitter,
          q = (Y == null ? void 0 : Y.getAttribute('formmethod')) || f;
        S(Y || k.currentTarget, {
          fetcherKey: t,
          method: q,
          navigate: r,
          replace: l,
          state: o,
          relative: g,
          preventScrollReset: y,
          viewTransition: v,
        });
      };
    return R.createElement('form', {
      ref: w,
      method: C,
      action: D,
      onSubmit: i ? m : O,
      ...b,
      'data-discover': !N && n === 'render' ? 'true' : void 0,
    });
  }
);
Px.displayName = 'Form';
function $x(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function M0(n) {
  let t = R.useContext(xs);
  return gt(t, $x(n)), t;
}
function Qx(
  n,
  { target: t, replace: r, state: i, preventScrollReset: l, relative: o, viewTransition: f } = {}
) {
  let h = an(),
    m = ci(),
    g = hu(n, { relative: o });
  return R.useCallback(
    (y) => {
      if (Ex(y, t)) {
        y.preventDefault();
        let v = r !== void 0 ? r : ql(m) === ql(g);
        h(n, { replace: v, state: i, preventScrollReset: l, relative: o, viewTransition: f });
      }
    },
    [m, h, g, r, i, t, n, l, o, f]
  );
}
var Kx = 0,
  Wx = () => `__${String(++Kx)}__`;
function Xx() {
  let { router: n } = M0('useSubmit'),
    { basename: t } = R.useContext(da),
    r = mx();
  return R.useCallback(
    async (i, l = {}) => {
      let { action: o, method: f, encType: h, formData: m, body: g } = Mx(i, t);
      if (l.navigate === !1) {
        let y = l.fetcherKey || Wx();
        await n.fetch(y, r, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: g,
          formMethod: l.method || f,
          formEncType: l.encType || h,
          flushSync: l.flushSync,
        });
      } else
        await n.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: g,
          formMethod: l.method || f,
          formEncType: l.encType || h,
          replace: l.replace,
          state: l.state,
          fromRouteId: r,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [n, t, r]
  );
}
function Ix(n, { relative: t } = {}) {
  let { basename: r } = R.useContext(da),
    i = R.useContext(ha);
  gt(i, 'useFormAction must be used inside a RouteContext');
  let [l] = i.matches.slice(-1),
    o = { ...hu(n || '.', { relative: t }) },
    f = ci();
  if (n == null) {
    o.search = f.search;
    let h = new URLSearchParams(o.search),
      m = h.getAll('index');
    if (m.some((y) => y === '')) {
      h.delete('index'), m.filter((v) => v).forEach((v) => h.append('index', v));
      let y = h.toString();
      o.search = y ? `?${y}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Ha([r, o.pathname])),
    ql(o)
  );
}
function Jx(n, t = {}) {
  let r = R.useContext(v0);
  gt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = M0('useViewTransitionState'),
    l = hu(n, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = qa(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    f = qa(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Po(l.pathname, f) != null || Po(l.pathname, o) != null;
}
new TextEncoder();
[...Ux];
const ew = '_header_18lk3_1',
  tw = '_logo_18lk3_111',
  nw = '_list_18lk3_149',
  aw = '_search_18lk3_157',
  rw = '_menu_18lk3_149',
  iw = '_hint_18lk3_357',
  he = {
    'header-wrapper': '_header-wrapper_18lk3_1',
    header: ew,
    'add-header-menu': '_add-header-menu_18lk3_47',
    'header-case': '_header-case_18lk3_55',
    'header-inner': '_header-inner_18lk3_79',
    'home-link-wrapper': '_home-link-wrapper_18lk3_95',
    'logo-header': '_logo-header_18lk3_111',
    logo: tw,
    'menu-search': '_menu-search_18lk3_149',
    list: nw,
    search: aw,
    menu: rw,
    'input-search': '_input-search_18lk3_211',
    'menu-list': '_menu-list_18lk3_229',
    'home-link': '_home-link_18lk3_95',
    'counter-cart': '_counter-cart_18lk3_273',
    'sing-up-menu': '_sing-up-menu_18lk3_305',
    'list-sing-up': '_list-sing-up_18lk3_341',
    'button-login': '_button-login_18lk3_349',
    'button-sing-up': '_button-sing-up_18lk3_349',
    hint: iw,
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
  sw = '/assets/logo-BIzYF2SY.png',
  Yl = R.createContext(null),
  D0 = R.createContext(() => {});
function lw() {
  const [n, t] = R.useState(!1),
    [, r] = R.useState(0);
  function i() {
    t(!n);
  }
  const l = localStorage.getItem('firstName');
  let o = 'Guest';
  if (l) {
    const f = l;
    typeof f == 'string' && (o = f);
  }
  return x.jsx('div', {
    className: he['header-wrapper'],
    children: x.jsxs(Yl.Provider, {
      value: o,
      children: [
        x.jsx(mw, { isOpen: n, toggleMenu: i }),
        x.jsx('header', {
          className: he.header,
          children: x.jsxs('div', {
            className: he['header-case'],
            children: [
              x.jsxs('div', {
                className: he['header-inner'],
                children: [
                  x.jsxs('div', {
                    className: he['home-link-wrapper'],
                    children: [x.jsx(A0, {}), x.jsx(N0, {})],
                  }),
                  x.jsx(uw, {}),
                ],
              }),
              x.jsx(D0.Provider, {
                value: () => {
                  r((f) => f + 1);
                },
                children: x.jsx(ow, {}),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function N0() {
  const n = an();
  return x.jsx('div', {
    className: he['home-link'],
    children: x.jsx('span', {
      onClick: () => void n('/'),
      className: `material-symbols-outlined ${he['main-home-icon']}`,
      children: 'home',
    }),
  });
}
function A0() {
  return x.jsx('div', {
    className: he['logo-header'],
    children: x.jsx('img', { className: he.logo, src: sw, alt: 'logo' }),
  });
}
function uw() {
  return x.jsxs('div', {
    className: he.search,
    children: [
      x.jsx('div', { className: he['menu-search'], children: 'Search in ▾' }),
      x.jsx('input', {
        type: 'search',
        className: he['input-search'],
        placeholder: 'Search products… 🔍',
      }),
    ],
  });
}
function ow() {
  return x.jsxs('nav', {
    className: he.menu,
    children: [
      x.jsxs('div', {
        className: he['nav-home-link-wrapper'],
        children: [x.jsx(A0, {}), x.jsx(N0, {})],
      }),
      x.jsxs('ul', {
        className: he['menu-list'],
        children: [x.jsx(cw, {}), x.jsx(fw, {}), x.jsx(dw, {}), x.jsx(hw, {})],
      }),
    ],
  });
}
function cw() {
  const n = an(),
    t = R.useContext(Yl) ?? '',
    r = R.useContext(D0);
  let i = t,
    l = 'LOG OUT',
    o = 'View Profile',
    f = 'PROFILE';
  return (
    R.useContext(Yl) === 'Guest' &&
      ((i = 'Guest'), (l = 'LOG IN'), (o = "Don't have an account?"), (f = 'Sing Up')),
    x.jsxs('li', {
      className: `${he.list} ${he['list-sing-up']}`,
      children: [
        x.jsx('div', {
          className: he['img-list'],
          children: x.jsx('span', {
            className: `material-symbols-outlined ${he['person-icon']}`,
            children: 'person',
          }),
        }),
        x.jsx('div', { className: he['text-list'], children: i }),
        x.jsxs('div', {
          className: he['sing-up-menu'],
          children: [
            x.jsx('div', {
              onClick: () => {
                l === 'LOG IN' ? n('/login') : (localStorage.removeItem('firstName'), r());
              },
              className: he['button-login'],
              children: l,
            }),
            x.jsx('span', { className: he.hint, children: o }),
            ' ',
            x.jsx('div', {
              onClick: () => {
                n(l === 'LOG IN' ? '/registration' : '/profile');
              },
              className: he['button-sing-up'],
              children: f,
            }),
          ],
        }),
      ],
    })
  );
}
function fw() {
  const n = an();
  return x.jsxs('li', {
    onClick: () => void n('/orders'),
    className: `${he.list} ${he['list-order']}`,
    children: [
      x.jsx('div', {
        className: he['img-list'],
        children: x.jsx('span', {
          className: `material-symbols-outlined ${he['order-icon']}`,
          children: 'package_2',
        }),
      }),
      x.jsx('div', { className: he['text-list'], children: 'Orders' }),
    ],
  });
}
function dw() {
  const n = an();
  return x.jsxs('li', {
    onClick: () => void n('/favorites'),
    className: `${he.list} ${he['list-favorite']}`,
    children: [
      ' ',
      x.jsx('div', {
        className: he['img-list'],
        children: x.jsx('span', {
          className: `material-symbols-outlined ${he['favorite-icon']}`,
          children: 'favorite',
        }),
      }),
      x.jsx('div', { className: he['text-list'], children: 'Favorites' }),
    ],
  });
}
function hw() {
  const n = an();
  return x.jsxs('li', {
    onClick: () => void n('/cart'),
    className: `${he.list} ${he['list-counter']}`,
    children: [
      x.jsx('div', { className: he['counter-cart'], children: '0' }),
      x.jsx('div', {
        className: he['img-list'],
        children: x.jsx('span', {
          className: `material-symbols-outlined ${he['cart-icon']}`,
          children: 'shopping_cart',
        }),
      }),
      x.jsx('div', { className: he['text-list'], children: 'Cart' }),
    ],
  });
}
function mw({ isOpen: n, toggleMenu: t }) {
  return (
    R.useEffect(() => {
      document.body.style.overflow = n ? 'hidden' : '';
    }, [n]),
    x.jsxs(x.Fragment, {
      children: [
        x.jsx('div', {
          onClick: t,
          className: `${he['canvas-aside-menu']} ${n ? he['visible-canvas-aside-menu'] : he['hidden-canvas-aside-menu']}`,
        }),
        x.jsx(gw, { isOpen: n, toggleMenu: t }),
        x.jsx(vw, { toggleMenu: t }),
      ],
    })
  );
}
function gw({ isOpen: n, toggleMenu: t }) {
  return x.jsxs('div', {
    className: `${he['aside-add-menu']} ${n ? he['open-aside-add-menu'] : he['close-aside-add-menu']}`,
    children: [
      x.jsx('div', {
        onClick: t,
        className: he['button-close-aside-menu'],
        children: x.jsx('span', {
          className: `material-symbols-outlined ${he['aside-close-icon']}`,
          children: 'close',
        }),
      }),
      x.jsx(yw, { toggleMenu: t }),
      x.jsx(pw, { toggleMenu: t }),
    ],
  });
}
function yw({ toggleMenu: n }) {
  const t = an(),
    r = R.useContext(Yl) ?? '',
    i = R.useContext(Yl) === 'Guest' ? 'Guest' : r;
  return x.jsxs('div', {
    onClick: () => {
      n(), t('/profile');
    },
    className: he['aside-menu-header'],
    children: [
      x.jsx('span', {
        className: `material-symbols-outlined ${he['aside-person-icon']}`,
        children: 'manage_accounts',
      }),
      x.jsxs('span', { className: he['user-name'], children: ['Hello, ', i] }),
      x.jsx('span', { className: he['select-dot'] }),
    ],
  });
}
function pw({ toggleMenu: n }) {
  const t = an();
  return x.jsxs('div', {
    onClick: () => {
      n(), t('/team');
    },
    className: he['aside-menu-team'],
    children: [
      x.jsx('span', { className: he['about-team'], children: 'Our Friendly Team' }),
      x.jsx('span', {
        className: `material-symbols-outlined ${he['aside-menu-arrow']}`,
        children: 'arrow_forward_ios',
      }),
    ],
  });
}
function vw({ toggleMenu: n }) {
  const t = an();
  return x.jsx('div', {
    className: he['add-header-menu'],
    children: x.jsxs('div', {
      className: he['wrapper-add-header-menu'],
      children: [
        x.jsxs('div', {
          onClick: n,
          className: he['add-menu-button-all'],
          children: [
            x.jsx('span', { className: 'material-symbols-outlined', children: 'menu' }),
            'All',
          ],
        }),
        x.jsx('div', {
          className: he['add-menu-list'],
          children: x.jsx('div', {
            onClick: () => void t('/catalog'),
            className: he['add-menu-catalog'],
            children: 'Catalog',
          }),
        }),
        x.jsx('div', {
          className: he['add-menu-list'],
          children: x.jsx('div', { className: he['add-menu-pet-food'], children: 'Pet food' }),
        }),
        x.jsx('div', {
          className: he['add-menu-list'],
          children: x.jsx('div', {
            className: he['add-menu-accessories'],
            children: 'Accessories',
          }),
        }),
        x.jsx('div', {
          className: he['add-menu-list'],
          children: x.jsx('div', { className: he['add-menu-promotions'], children: 'Promotions' }),
        }),
      ],
    }),
  });
}
const bw = '_footer_fr6pe_1',
  oa = {
    footer: bw,
    'footer-case': '_footer-case_fr6pe_21',
    'about-link': '_about-link_fr6pe_41',
    'shop-link': '_shop-link_fr6pe_41',
    'sticker-link': '_sticker-link_fr6pe_41',
    'help-link': '_help-link_fr6pe_41',
  };
function _w() {
  return x.jsx('footer', {
    className: oa.footer,
    children: x.jsxs('div', {
      className: oa['footer-case'],
      children: [x.jsx(xw, {}), x.jsx(Ow, {}), x.jsx(ww, {}), x.jsx(Sw, {})],
    }),
  });
}
function Sw() {
  const n = an();
  return x.jsx('div', {
    onClick: () => void n('/about'),
    className: `${oa.about} ${oa['about-link']}`,
    children: 'ABOUT US',
  });
}
function xw() {
  return x.jsx('div', { className: `${oa.shop} ${oa['shop-link']}`, children: 'OUR SHOPS' });
}
function ww() {
  return x.jsx('div', {
    className: `${oa.sticker} ${oa['sticker-link']}`,
    children: 'Our Telegram Stickers',
  });
}
function Ow() {
  return x.jsx('div', {
    className: `${oa.help} ${oa['help-link']}`,
    children: 'Help Homeless Animals',
  });
}
function Ew() {
  return x.jsxs(x.Fragment, { children: [x.jsx(lw, {}), x.jsx(vx, {}), x.jsx(_w, {})] });
}
const Tw = '_main_dq78l_1',
  Cw = '_recommend_dq78l_215',
  Mw = '_brands_dq78l_217',
  Dw = '_img0_dq78l_343',
  Nw = '_img1_dq78l_343',
  Aw = '_img2_dq78l_343',
  kw = '_img3_dq78l_343',
  Rw = '_img4_dq78l_343',
  jw = '_img5_dq78l_343',
  zw = '_img6_dq78l_415',
  Uw = '_img7_dq78l_415',
  Lw = '_img8_dq78l_415',
  Bw = '_img9_dq78l_415',
  Hw = '_img10_dq78l_415',
  Vw = '_img11_dq78l_415',
  qw = '_img12_dq78l_415',
  Yw = '_img13_dq78l_415',
  We = {
    main: Tw,
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
    recommend: Cw,
    brands: Mw,
    'list-recommend': '_list-recommend_dq78l_231',
    'list-brands': '_list-brands_dq78l_313',
    img0: Dw,
    img1: Nw,
    img2: Aw,
    img3: kw,
    img4: Rw,
    img5: jw,
    img6: zw,
    img7: Uw,
    img8: Lw,
    img9: Bw,
    img10: Hw,
    img11: Vw,
    img12: qw,
    img13: Yw,
    'pets-logo-icon': '_pets-logo-icon_dq78l_503',
  };
function Zw() {
  return x.jsxs('h1', {
    className: We['title-main'],
    children: [
      'PET ',
      x.jsx('span', {
        className: `material-symbols-outlined ${We['pets-logo-icon']}`,
        children: 'pets',
      }),
      ' ',
      'SUPPLIES',
    ],
  });
}
function Fw() {
  return x.jsxs('div', {
    className: We['main-info-block'],
    children: [
      x.jsx('span', {
        className: `material-symbols-outlined ${We['left-arrow']}`,
        children: 'pets',
      }),
      x.jsx('span', {
        className: `material-symbols-outlined ${We['right-arrow']}`,
        children: 'pets',
      }),
    ],
  });
}
function Gw() {
  return x.jsxs('aside', {
    className: We['aside-info-block'],
    children: [
      x.jsx('div', { className: We['aside-up-block'] }),
      x.jsx('div', { className: We['aside-down-block'] }),
    ],
  });
}
function Pw() {
  return x.jsx('h2', { className: We.recommend, children: 'Our Recommendations' });
}
function $w() {
  return x.jsxs('div', {
    className: We['list-recommend'],
    children: [
      x.jsx(Qw, {}),
      x.jsx('span', {
        className: `material-symbols-outlined ${We['small-left-arrow']}`,
        children: 'play_circle',
      }),
      x.jsx('span', {
        className: `material-symbols-outlined ${We['small-right-arrow']}`,
        children: 'play_circle',
      }),
    ],
  });
}
function Qw() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('div', { className: We.img0 }),
      x.jsx('div', { className: We.img1 }),
      x.jsx('div', { className: We.img2 }),
      x.jsx('div', { className: We.img3 }),
      x.jsx('div', { className: We.img4 }),
      x.jsx('div', { className: We.img5 }),
    ],
  });
}
function Kw() {
  return x.jsx('h2', { className: We.brands, children: 'Brands' });
}
function Ww() {
  return x.jsxs('div', {
    className: We['list-brands'],
    children: [
      x.jsx(Xw, {}),
      x.jsx('span', {
        className: `material-symbols-outlined ${We['brand-left-arrow']}`,
        children: 'play_circle',
      }),
      x.jsx('span', {
        className: `material-symbols-outlined ${We['brand-right-arrow']}`,
        children: 'play_circle',
      }),
    ],
  });
}
function Xw() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('div', { className: We.img6 }),
      x.jsx('div', { className: We.img7 }),
      x.jsx('div', { className: We.img8 }),
      x.jsx('div', { className: We.img9 }),
      x.jsx('div', { className: We.img10 }),
      x.jsx('div', { className: We.img11 }),
      x.jsx('div', { className: We.img12 }),
      x.jsx('div', { className: We.img13 }),
    ],
  });
}
function Iw() {
  return (
    R.useEffect(() => {
      document.title = 'Home | Zoo Shop | Pet Supplies';
    }, []),
    x.jsxs('main', {
      className: We.main,
      children: [
        x.jsx(Zw, {}),
        x.jsxs('div', { className: We['info-blocks'], children: [x.jsx(Fw, {}), x.jsx(Gw, {})] }),
        x.jsx(Pw, {}),
        x.jsx($w, {}),
        x.jsx(Kw, {}),
        x.jsx(Ww, {}),
      ],
    })
  );
}
const Jw =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%208L3.07945%204.30466C4.29638%202.84434%206.09909%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208L12.9206%2011.6953C11.7036%2013.1557%209.90091%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208ZM8%2011C9.65685%2011%2011%209.65685%2011%208C11%206.34315%209.65685%205%208%205C6.34315%205%205%206.34315%205%208C5%209.65685%206.34315%2011%208%2011Z'%20fill='%23000000'/%3e%3c/svg%3e",
  eO =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2016H13L10.8368%2013.3376C9.96488%2013.7682%208.99592%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208L3.07945%204.30466C3.14989%204.22013%203.22229%204.13767%203.29656%204.05731L0%200H3L16%2016ZM5.35254%206.58774C5.12755%207.00862%205%207.48941%205%208C5%209.65685%206.34315%2011%208%2011C8.29178%2011%208.57383%2010.9583%208.84053%2010.8807L5.35254%206.58774Z'%20fill='%23000000'/%3e%3cpath%20d='M16%208L14.2278%2010.1266L7.63351%202.01048C7.75518%202.00351%207.87739%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208Z'%20fill='%23000000'/%3e%3c/svg%3e";
function Qp({ register: n, errorMessage: t, type: r, label: i, placeholder: l, required: o }) {
  const [f, h] = R.useState(!1),
    m = r === 'password',
    g = m ? (f ? 'text' : 'password') : r,
    y = r;
  return x.jsxs('div', {
    className: 'flex flex-col w-full',
    children: [
      x.jsxs('label', {
        htmlFor: y,
        children: [i, x.jsx('span', { className: 'text-red-700', children: '*' })],
      }),
      x.jsxs('div', {
        className: 'relative',
        children: [
          x.jsx('input', {
            ...n,
            id: y,
            className:
              'w-full bg-khaki p-3 rounded focus:outline-none text-olive focus:border-goldenrod border-[2px] border-transparent box-border font-bold text-xl',
            placeholder: l,
            type: g,
            required: o ?? void 0,
            autoComplete: r,
          }),
          m &&
            x.jsx('div', {
              className: 'absolute right-[1%] top-1/2 -translate-y-1/2 cursor-pointer opacity-50',
              onClick: () => {
                h((v) => !v);
              },
              children: x.jsx('img', {
                className: 'w-[20px]',
                src: f ? eO : Jw,
                alt: 'Toggle password visibility',
              }),
            }),
        ],
      }),
      x.jsx('p', {
        className: 'text-sm h-fit font-main-bd text-red-500 h-5 mt-1',
        children: t ?? ' ',
      }),
    ],
  });
}
var mu = (n) => n.type === 'checkbox',
  Ir = (n) => n instanceof Date,
  en = (n) => n == null;
const k0 = (n) => typeof n == 'object';
var wt = (n) => !en(n) && !Array.isArray(n) && k0(n) && !Ir(n),
  R0 = (n) => (wt(n) && n.target ? (mu(n.target) ? n.target.checked : n.target.value) : n),
  tO = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  j0 = (n, t) => n.has(tO(t)),
  nO = (n) => {
    const t = n.constructor && n.constructor.prototype;
    return wt(t) && t.hasOwnProperty('isPrototypeOf');
  },
  kh = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Vt(n) {
  let t;
  const r = Array.isArray(n),
    i = typeof FileList < 'u' ? n instanceof FileList : !1;
  if (n instanceof Date) t = new Date(n);
  else if (n instanceof Set) t = new Set(n);
  else if (!(kh && (n instanceof Blob || i)) && (r || wt(n)))
    if (((t = r ? [] : {}), !r && !nO(n))) t = n;
    else for (const l in n) n.hasOwnProperty(l) && (t[l] = Vt(n[l]));
  else return n;
  return t;
}
var pc = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  xt = (n) => n === void 0,
  ue = (n, t, r) => {
    if (!t || !wt(n)) return r;
    const i = pc(t.split(/[,[\].]+?/)).reduce((l, o) => (en(l) ? l : l[o]), n);
    return xt(i) || i === n ? (xt(n[t]) ? r : n[t]) : i;
  },
  _n = (n) => typeof n == 'boolean',
  Rh = (n) => /^\w*$/.test(n),
  z0 = (n) => pc(n.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Je = (n, t, r) => {
    let i = -1;
    const l = Rh(t) ? [t] : z0(t),
      o = l.length,
      f = o - 1;
    for (; ++i < o; ) {
      const h = l[i];
      let m = r;
      if (i !== f) {
        const g = n[h];
        m = wt(g) || Array.isArray(g) ? g : isNaN(+l[i + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (n[h] = m), (n = n[h]);
    }
  };
const $o = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Vn = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Aa = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  aO = ee.createContext(null),
  jh = () => ee.useContext(aO);
var U0 = (n, t, r, i = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const o in n)
      Object.defineProperty(l, o, {
        get: () => {
          const f = o;
          return (
            t._proxyFormState[f] !== Vn.all && (t._proxyFormState[f] = !i || Vn.all),
            r && (r[f] = !0),
            n[f]
          );
        },
      });
    return l;
  },
  dh = (n) => en(n) || !k0(n);
function Ua(n, t) {
  if (dh(n) || dh(t)) return n === t;
  if (Ir(n) && Ir(t)) return n.getTime() === t.getTime();
  const r = Object.keys(n),
    i = Object.keys(t);
  if (r.length !== i.length) return !1;
  for (const l of r) {
    const o = n[l];
    if (!i.includes(l)) return !1;
    if (l !== 'ref') {
      const f = t[l];
      if (
        (Ir(o) && Ir(f)) || (wt(o) && wt(f)) || (Array.isArray(o) && Array.isArray(f))
          ? !Ua(o, f)
          : o !== f
      )
        return !1;
    }
  }
  return !0;
}
const L0 = (n, t) => {
  const r = R.useRef(t);
  Ua(t, r.current) || (r.current = t), R.useEffect(n, r.current);
};
function rO(n) {
  const t = jh(),
    { control: r = t.control, disabled: i, name: l, exact: o } = n || {},
    [f, h] = ee.useState(r._formState),
    m = ee.useRef({
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
    L0(
      () =>
        r._subscribe({
          name: l,
          formState: m.current,
          exact: o,
          callback: (g) => {
            !i && h({ ...r._formState, ...g });
          },
        }),
      [l, i, o]
    ),
    ee.useEffect(() => {
      m.current.isValid && r._setValid(!0);
    }, [r]),
    ee.useMemo(() => U0(f, r, m.current, !1), [f, r])
  );
}
var ra = (n) => typeof n == 'string',
  B0 = (n, t, r, i, l) =>
    ra(n)
      ? (i && t.watch.add(n), ue(r, n, l))
      : Array.isArray(n)
        ? n.map((o) => (i && t.watch.add(o), ue(r, o)))
        : (i && (t.watchAll = !0), r);
function H0(n) {
  const t = jh(),
    { control: r = t.control, name: i, defaultValue: l, disabled: o, exact: f } = n || {},
    [h, m] = ee.useState(r._getWatch(i, l));
  return (
    L0(
      () =>
        r._subscribe({
          name: i,
          formState: { values: !0 },
          exact: f,
          callback: (g) => !o && m(B0(i, r._names, g.values || r._formValues, !1, l)),
        }),
      [i, l, o, f]
    ),
    ee.useEffect(() => r._removeUnmounted()),
    h
  );
}
function iO(n) {
  const t = jh(),
    { name: r, disabled: i, control: l = t.control, shouldUnregister: o } = n,
    f = j0(l._names.array, r),
    h = H0({
      control: l,
      name: r,
      defaultValue: ue(l._formValues, r, ue(l._defaultValues, r, n.defaultValue)),
      exact: !0,
    }),
    m = rO({ control: l, name: r, exact: !0 }),
    g = ee.useRef(n),
    y = ee.useRef(
      l.register(r, { ...n.rules, value: h, ...(_n(n.disabled) ? { disabled: n.disabled } : {}) })
    ),
    v = ee.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ue(m.errors, r) },
            isDirty: { enumerable: !0, get: () => !!ue(m.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!ue(m.touchedFields, r) },
            isValidating: { enumerable: !0, get: () => !!ue(m.validatingFields, r) },
            error: { enumerable: !0, get: () => ue(m.errors, r) },
          }
        ),
      [m, r]
    ),
    b = ee.useCallback(
      (C) => y.current.onChange({ target: { value: R0(C), name: r }, type: $o.CHANGE }),
      [r]
    ),
    w = ee.useCallback(
      () => y.current.onBlur({ target: { value: ue(l._formValues, r), name: r }, type: $o.BLUR }),
      [r, l._formValues]
    ),
    S = ee.useCallback(
      (C) => {
        const N = ue(l._fields, r);
        N &&
          C &&
          (N._f.ref = {
            focus: () => C.focus(),
            select: () => C.select(),
            setCustomValidity: (O) => C.setCustomValidity(O),
            reportValidity: () => C.reportValidity(),
          });
      },
      [l._fields, r]
    ),
    D = ee.useMemo(
      () => ({
        name: r,
        value: h,
        ...(_n(i) || m.disabled ? { disabled: m.disabled || i } : {}),
        onChange: b,
        onBlur: w,
        ref: S,
      }),
      [r, i, m.disabled, b, w, S, h]
    );
  return (
    ee.useEffect(() => {
      const C = l._options.shouldUnregister || o;
      l.register(r, {
        ...g.current.rules,
        ...(_n(g.current.disabled) ? { disabled: g.current.disabled } : {}),
      });
      const N = (O, k) => {
        const Y = ue(l._fields, O);
        Y && Y._f && (Y._f.mount = k);
      };
      if ((N(r, !0), C)) {
        const O = Vt(ue(l._options.defaultValues, r));
        Je(l._defaultValues, r, O), xt(ue(l._formValues, r)) && Je(l._formValues, r, O);
      }
      return (
        !f && l.register(r),
        () => {
          (f ? C && !l._state.action : C) ? l.unregister(r) : N(r, !1);
        }
      );
    }, [r, l, f, o]),
    ee.useEffect(() => {
      l._setDisabledField({ disabled: i, name: r });
    }, [i, r, l]),
    ee.useMemo(() => ({ field: D, formState: m, fieldState: v }), [D, m, v])
  );
}
const sO = (n) => n.render(iO(n));
var V0 = (n, t, r, i, l) =>
    t ? { ...r[n], types: { ...(r[n] && r[n].types ? r[n].types : {}), [i]: l || !0 } } : {},
  Ll = (n) => (Array.isArray(n) ? n : [n]),
  Kp = () => {
    let n = [];
    return {
      get observers() {
        return n;
      },
      next: (l) => {
        for (const o of n) o.next && o.next(l);
      },
      subscribe: (l) => (
        n.push(l),
        {
          unsubscribe: () => {
            n = n.filter((o) => o !== l);
          },
        }
      ),
      unsubscribe: () => {
        n = [];
      },
    };
  },
  Jt = (n) => wt(n) && !Object.keys(n).length,
  zh = (n) => n.type === 'file',
  qn = (n) => typeof n == 'function',
  Qo = (n) => {
    if (!kh) return !1;
    const t = n ? n.ownerDocument : 0;
    return n instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  q0 = (n) => n.type === 'select-multiple',
  Uh = (n) => n.type === 'radio',
  lO = (n) => Uh(n) || mu(n),
  $d = (n) => Qo(n) && n.isConnected;
function uO(n, t) {
  const r = t.slice(0, -1).length;
  let i = 0;
  for (; i < r; ) n = xt(n) ? i++ : n[t[i++]];
  return n;
}
function oO(n) {
  for (const t in n) if (n.hasOwnProperty(t) && !xt(n[t])) return !1;
  return !0;
}
function Nt(n, t) {
  const r = Array.isArray(t) ? t : Rh(t) ? [t] : z0(t),
    i = r.length === 1 ? n : uO(n, r),
    l = r.length - 1,
    o = r[l];
  return (
    i && delete i[o],
    l !== 0 && ((wt(i) && Jt(i)) || (Array.isArray(i) && oO(i))) && Nt(n, r.slice(0, -1)),
    n
  );
}
var Y0 = (n) => {
  for (const t in n) if (qn(n[t])) return !0;
  return !1;
};
function Ko(n, t = {}) {
  const r = Array.isArray(n);
  if (wt(n) || r)
    for (const i in n)
      Array.isArray(n[i]) || (wt(n[i]) && !Y0(n[i]))
        ? ((t[i] = Array.isArray(n[i]) ? [] : {}), Ko(n[i], t[i]))
        : en(n[i]) || (t[i] = !0);
  return t;
}
function Z0(n, t, r) {
  const i = Array.isArray(n);
  if (wt(n) || i)
    for (const l in n)
      Array.isArray(n[l]) || (wt(n[l]) && !Y0(n[l]))
        ? xt(t) || dh(r[l])
          ? (r[l] = Array.isArray(n[l]) ? Ko(n[l], []) : { ...Ko(n[l]) })
          : Z0(n[l], en(t) ? {} : t[l], r[l])
        : (r[l] = !Ua(n[l], t[l]));
  return r;
}
var Tl = (n, t) => Z0(n, t, Ko(t));
const Wp = { value: !1, isValid: !1 },
  Xp = { value: !0, isValid: !0 };
var F0 = (n) => {
    if (Array.isArray(n)) {
      if (n.length > 1) {
        const t = n.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
        return { value: t, isValid: !!t.length };
      }
      return n[0].checked && !n[0].disabled
        ? n[0].attributes && !xt(n[0].attributes.value)
          ? xt(n[0].value) || n[0].value === ''
            ? Xp
            : { value: n[0].value, isValid: !0 }
          : Xp
        : Wp;
    }
    return Wp;
  },
  G0 = (n, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
    xt(n) ? n : t ? (n === '' ? NaN : n && +n) : r && ra(n) ? new Date(n) : i ? i(n) : n;
const Ip = { isValid: !1, value: null };
var P0 = (n) =>
  Array.isArray(n)
    ? n.reduce((t, r) => (r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t), Ip)
    : Ip;
function Jp(n) {
  const t = n.ref;
  return zh(t)
    ? t.files
    : Uh(t)
      ? P0(n.refs).value
      : q0(t)
        ? [...t.selectedOptions].map(({ value: r }) => r)
        : mu(t)
          ? F0(n.refs).value
          : G0(xt(t.value) ? n.ref.value : t.value, n);
}
var cO = (n, t, r, i) => {
    const l = {};
    for (const o of n) {
      const f = ue(t, o);
      f && Je(l, o, f._f);
    }
    return { criteriaMode: r, names: [...n], fields: l, shouldUseNativeValidation: i };
  },
  Wo = (n) => n instanceof RegExp,
  Cl = (n) => (xt(n) ? n : Wo(n) ? n.source : wt(n) ? (Wo(n.value) ? n.value.source : n.value) : n),
  ev = (n) => ({
    isOnSubmit: !n || n === Vn.onSubmit,
    isOnBlur: n === Vn.onBlur,
    isOnChange: n === Vn.onChange,
    isOnAll: n === Vn.all,
    isOnTouch: n === Vn.onTouched,
  });
const tv = 'AsyncFunction';
var fO = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (qn(n.validate) && n.validate.constructor.name === tv) ||
      (wt(n.validate) && Object.values(n.validate).find((t) => t.constructor.name === tv))
    ),
  dO = (n) =>
    n.mount &&
    (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate),
  nv = (n, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(n) ||
      [...t.watch].some((i) => n.startsWith(i) && /^\.\w+/.test(n.slice(i.length))));
const Bl = (n, t, r, i) => {
  for (const l of r || Object.keys(n)) {
    const o = ue(n, l);
    if (o) {
      const { _f: f, ...h } = o;
      if (f) {
        if (f.refs && f.refs[0] && t(f.refs[0], l) && !i) return !0;
        if (f.ref && t(f.ref, f.name) && !i) return !0;
        if (Bl(h, t)) break;
      } else if (wt(h) && Bl(h, t)) break;
    }
  }
};
function av(n, t, r) {
  const i = ue(n, r);
  if (i || Rh(r)) return { error: i, name: r };
  const l = r.split('.');
  for (; l.length; ) {
    const o = l.join('.'),
      f = ue(t, o),
      h = ue(n, o);
    if (f && !Array.isArray(f) && r !== o) return { name: r };
    if (h && h.type) return { name: o, error: h };
    l.pop();
  }
  return { name: r };
}
var hO = (n, t, r, i) => {
    r(n);
    const { name: l, ...o } = n;
    return (
      Jt(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((f) => t[f] === (!i || Vn.all))
    );
  },
  mO = (n, t, r) =>
    !n ||
    !t ||
    n === t ||
    Ll(n).some((i) => i && (r ? i === t : i.startsWith(t) || t.startsWith(i))),
  gO = (n, t, r, i, l) =>
    l.isOnAll
      ? !1
      : !r && l.isOnTouch
        ? !(t || n)
        : (r ? i.isOnBlur : l.isOnBlur)
          ? !n
          : (r ? i.isOnChange : l.isOnChange)
            ? n
            : !0,
  yO = (n, t) => !pc(ue(n, t)).length && Nt(n, t),
  pO = (n, t, r) => {
    const i = Ll(ue(n, r));
    return Je(i, 'root', t[r]), Je(n, r, i), n;
  },
  Fo = (n) => ra(n);
function rv(n, t, r = 'validate') {
  if (Fo(n) || (Array.isArray(n) && n.every(Fo)) || (_n(n) && !n))
    return { type: r, message: Fo(n) ? n : '', ref: t };
}
var Ji = (n) => (wt(n) && !Wo(n) ? n : { value: n, message: '' }),
  iv = async (n, t, r, i, l, o) => {
    const {
        ref: f,
        refs: h,
        required: m,
        maxLength: g,
        minLength: y,
        min: v,
        max: b,
        pattern: w,
        validate: S,
        name: D,
        valueAsNumber: C,
        mount: N,
      } = n._f,
      O = ue(r, D);
    if (!N || t.has(D)) return {};
    const k = h ? h[0] : f,
      Y = (se) => {
        l && k.reportValidity && (k.setCustomValidity(_n(se) ? '' : se || ''), k.reportValidity());
      },
      q = {},
      K = Uh(f),
      W = mu(f),
      ie = K || W,
      te =
        ((C || zh(f)) && xt(f.value) && xt(O)) ||
        (Qo(f) && f.value === '') ||
        O === '' ||
        (Array.isArray(O) && !O.length),
      _e = V0.bind(null, D, i, q),
      be = (se, Se, Re, Me = Aa.maxLength, V = Aa.minLength) => {
        const I = se ? Se : Re;
        q[D] = { type: se ? Me : V, message: I, ref: f, ..._e(se ? Me : V, I) };
      };
    if (
      o
        ? !Array.isArray(O) || !O.length
        : m &&
          ((!ie && (te || en(O))) ||
            (_n(O) && !O) ||
            (W && !F0(h).isValid) ||
            (K && !P0(h).isValid))
    ) {
      const { value: se, message: Se } = Fo(m) ? { value: !!m, message: m } : Ji(m);
      if (se && ((q[D] = { type: Aa.required, message: Se, ref: k, ..._e(Aa.required, Se) }), !i))
        return Y(Se), q;
    }
    if (!te && (!en(v) || !en(b))) {
      let se, Se;
      const Re = Ji(b),
        Me = Ji(v);
      if (!en(O) && !isNaN(O)) {
        const V = f.valueAsNumber || (O && +O);
        en(Re.value) || (se = V > Re.value), en(Me.value) || (Se = V < Me.value);
      } else {
        const V = f.valueAsDate || new Date(O),
          I = (T) => new Date(new Date().toDateString() + ' ' + T),
          me = f.type == 'time',
          xe = f.type == 'week';
        ra(Re.value) &&
          O &&
          (se = me ? I(O) > I(Re.value) : xe ? O > Re.value : V > new Date(Re.value)),
          ra(Me.value) &&
            O &&
            (Se = me ? I(O) < I(Me.value) : xe ? O < Me.value : V < new Date(Me.value));
      }
      if ((se || Se) && (be(!!se, Re.message, Me.message, Aa.max, Aa.min), !i))
        return Y(q[D].message), q;
    }
    if ((g || y) && !te && (ra(O) || (o && Array.isArray(O)))) {
      const se = Ji(g),
        Se = Ji(y),
        Re = !en(se.value) && O.length > +se.value,
        Me = !en(Se.value) && O.length < +Se.value;
      if ((Re || Me) && (be(Re, se.message, Se.message), !i)) return Y(q[D].message), q;
    }
    if (w && !te && ra(O)) {
      const { value: se, message: Se } = Ji(w);
      if (
        Wo(se) &&
        !O.match(se) &&
        ((q[D] = { type: Aa.pattern, message: Se, ref: f, ..._e(Aa.pattern, Se) }), !i)
      )
        return Y(Se), q;
    }
    if (S) {
      if (qn(S)) {
        const se = await S(O, r),
          Se = rv(se, k);
        if (Se && ((q[D] = { ...Se, ..._e(Aa.validate, Se.message) }), !i)) return Y(Se.message), q;
      } else if (wt(S)) {
        let se = {};
        for (const Se in S) {
          if (!Jt(se) && !i) break;
          const Re = rv(await S[Se](O, r), k, Se);
          Re && ((se = { ...Re, ..._e(Se, Re.message) }), Y(Re.message), i && (q[D] = se));
        }
        if (!Jt(se) && ((q[D] = { ref: k, ...se }), !i)) return q;
      }
    }
    return Y(!0), q;
  };
const vO = { mode: Vn.onSubmit, reValidateMode: Vn.onChange, shouldFocusError: !0 };
function bO(n = {}) {
  let t = { ...vO, ...n },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: qn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    };
  const i = {};
  let l = wt(t.defaultValues) || wt(t.values) ? Vt(t.values || t.defaultValues) || {} : {},
    o = t.shouldUnregister ? {} : Vt(l),
    f = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    m,
    g = 0;
  const y = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let v = { ...y };
  const b = { array: Kp(), state: Kp() },
    w = ev(t.mode),
    S = ev(t.reValidateMode),
    D = t.criteriaMode === Vn.all,
    C = (M) => (B) => {
      clearTimeout(g), (g = setTimeout(M, B));
    },
    N = async (M) => {
      if (!t.disabled && (y.isValid || v.isValid || M)) {
        const B = t.resolver ? Jt((await te()).errors) : await be(i, !0);
        B !== r.isValid && b.state.next({ isValid: B });
      }
    },
    O = (M, B) => {
      !t.disabled &&
        (y.isValidating || y.validatingFields || v.isValidating || v.validatingFields) &&
        ((M || Array.from(h.mount)).forEach((Z) => {
          Z && (B ? Je(r.validatingFields, Z, B) : Nt(r.validatingFields, Z));
        }),
        b.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Jt(r.validatingFields),
        }));
    },
    k = (M, B = [], Z, fe, ae = !0, X = !0) => {
      if (fe && Z && !t.disabled) {
        if (((f.action = !0), X && Array.isArray(ue(i, M)))) {
          const ce = Z(ue(i, M), fe.argA, fe.argB);
          ae && Je(i, M, ce);
        }
        if (X && Array.isArray(ue(r.errors, M))) {
          const ce = Z(ue(r.errors, M), fe.argA, fe.argB);
          ae && Je(r.errors, M, ce), yO(r.errors, M);
        }
        if ((y.touchedFields || v.touchedFields) && X && Array.isArray(ue(r.touchedFields, M))) {
          const ce = Z(ue(r.touchedFields, M), fe.argA, fe.argB);
          ae && Je(r.touchedFields, M, ce);
        }
        (y.dirtyFields || v.dirtyFields) && (r.dirtyFields = Tl(l, o)),
          b.state.next({
            name: M,
            isDirty: Se(M, B),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else Je(o, M, B);
    },
    Y = (M, B) => {
      Je(r.errors, M, B), b.state.next({ errors: r.errors });
    },
    q = (M) => {
      (r.errors = M), b.state.next({ errors: r.errors, isValid: !1 });
    },
    K = (M, B, Z, fe) => {
      const ae = ue(i, M);
      if (ae) {
        const X = ue(o, M, xt(Z) ? ue(l, M) : Z);
        xt(X) || (fe && fe.defaultChecked) || B ? Je(o, M, B ? X : Jp(ae._f)) : V(M, X),
          f.mount && N();
      }
    },
    W = (M, B, Z, fe, ae) => {
      let X = !1,
        ce = !1;
      const De = { name: M };
      if (!t.disabled) {
        if (!Z || fe) {
          (y.isDirty || v.isDirty) &&
            ((ce = r.isDirty), (r.isDirty = De.isDirty = Se()), (X = ce !== De.isDirty));
          const ct = Ua(ue(l, M), B);
          (ce = !!ue(r.dirtyFields, M)),
            ct ? Nt(r.dirtyFields, M) : Je(r.dirtyFields, M, !0),
            (De.dirtyFields = r.dirtyFields),
            (X = X || ((y.dirtyFields || v.dirtyFields) && ce !== !ct));
        }
        if (Z) {
          const ct = ue(r.touchedFields, M);
          ct ||
            (Je(r.touchedFields, M, Z),
            (De.touchedFields = r.touchedFields),
            (X = X || ((y.touchedFields || v.touchedFields) && ct !== Z)));
        }
        X && ae && b.state.next(De);
      }
      return X ? De : {};
    },
    ie = (M, B, Z, fe) => {
      const ae = ue(r.errors, M),
        X = (y.isValid || v.isValid) && _n(B) && r.isValid !== B;
      if (
        (t.delayError && Z
          ? ((m = C(() => Y(M, Z))), m(t.delayError))
          : (clearTimeout(g), (m = null), Z ? Je(r.errors, M, Z) : Nt(r.errors, M)),
        (Z ? !Ua(ae, Z) : ae) || !Jt(fe) || X)
      ) {
        const ce = { ...fe, ...(X && _n(B) ? { isValid: B } : {}), errors: r.errors, name: M };
        (r = { ...r, ...ce }), b.state.next(ce);
      }
    },
    te = async (M) => {
      O(M, !0);
      const B = await t.resolver(
        o,
        t.context,
        cO(M || h.mount, i, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return O(M), B;
    },
    _e = async (M) => {
      const { errors: B } = await te(M);
      if (M)
        for (const Z of M) {
          const fe = ue(B, Z);
          fe ? Je(r.errors, Z, fe) : Nt(r.errors, Z);
        }
      else r.errors = B;
      return B;
    },
    be = async (M, B, Z = { valid: !0 }) => {
      for (const fe in M) {
        const ae = M[fe];
        if (ae) {
          const { _f: X, ...ce } = ae;
          if (X) {
            const De = h.array.has(X.name),
              ct = ae._f && fO(ae._f);
            ct && y.validatingFields && O([fe], !0);
            const bt = await iv(ae, h.disabled, o, D, t.shouldUseNativeValidation && !B, De);
            if ((ct && y.validatingFields && O([fe]), bt[X.name] && ((Z.valid = !1), B))) break;
            !B &&
              (ue(bt, X.name)
                ? De
                  ? pO(r.errors, bt, X.name)
                  : Je(r.errors, X.name, bt[X.name])
                : Nt(r.errors, X.name));
          }
          !Jt(ce) && (await be(ce, B, Z));
        }
      }
      return Z.valid;
    },
    se = () => {
      for (const M of h.unMount) {
        const B = ue(i, M);
        B && (B._f.refs ? B._f.refs.every((Z) => !$d(Z)) : !$d(B._f.ref)) && rn(M);
      }
      h.unMount = new Set();
    },
    Se = (M, B) => !t.disabled && (M && B && Je(o, M, B), !Ua(le(), l)),
    Re = (M, B, Z) => B0(M, h, { ...(f.mount ? o : xt(B) ? l : ra(M) ? { [M]: B } : B) }, Z, B),
    Me = (M) => pc(ue(f.mount ? o : l, M, t.shouldUnregister ? ue(l, M, []) : [])),
    V = (M, B, Z = {}) => {
      const fe = ue(i, M);
      let ae = B;
      if (fe) {
        const X = fe._f;
        X &&
          (!X.disabled && Je(o, M, G0(B, X)),
          (ae = Qo(X.ref) && en(B) ? '' : B),
          q0(X.ref)
            ? [...X.ref.options].forEach((ce) => (ce.selected = ae.includes(ce.value)))
            : X.refs
              ? mu(X.ref)
                ? X.refs.length > 1
                  ? X.refs.forEach(
                      (ce) =>
                        (!ce.defaultChecked || !ce.disabled) &&
                        (ce.checked = Array.isArray(ae)
                          ? !!ae.find((De) => De === ce.value)
                          : ae === ce.value)
                    )
                  : X.refs[0] && (X.refs[0].checked = !!ae)
                : X.refs.forEach((ce) => (ce.checked = ce.value === ae))
              : zh(X.ref)
                ? (X.ref.value = '')
                : ((X.ref.value = ae), X.ref.type || b.state.next({ name: M, values: Vt(o) })));
      }
      (Z.shouldDirty || Z.shouldTouch) && W(M, ae, Z.shouldTouch, Z.shouldDirty, !0),
        Z.shouldValidate && G(M);
    },
    I = (M, B, Z) => {
      for (const fe in B) {
        const ae = B[fe],
          X = `${M}.${fe}`,
          ce = ue(i, X);
        (h.array.has(M) || wt(ae) || (ce && !ce._f)) && !Ir(ae) ? I(X, ae, Z) : V(X, ae, Z);
      }
    },
    me = (M, B, Z = {}) => {
      const fe = ue(i, M),
        ae = h.array.has(M),
        X = Vt(B);
      Je(o, M, X),
        ae
          ? (b.array.next({ name: M, values: Vt(o) }),
            (y.isDirty || y.dirtyFields || v.isDirty || v.dirtyFields) &&
              Z.shouldDirty &&
              b.state.next({ name: M, dirtyFields: Tl(l, o), isDirty: Se(M, X) }))
          : fe && !fe._f && !en(X)
            ? I(M, X, Z)
            : V(M, X, Z),
        nv(M, h) && b.state.next({ ...r }),
        b.state.next({ name: f.mount ? M : void 0, values: Vt(o) });
    },
    xe = async (M) => {
      f.mount = !0;
      const B = M.target;
      let Z = B.name,
        fe = !0;
      const ae = ue(i, Z),
        X = (ce) => {
          fe = Number.isNaN(ce) || (Ir(ce) && isNaN(ce.getTime())) || Ua(ce, ue(o, Z, ce));
        };
      if (ae) {
        let ce, De;
        const ct = B.type ? Jp(ae._f) : R0(M),
          bt = M.type === $o.BLUR || M.type === $o.FOCUS_OUT,
          Cs =
            (!dO(ae._f) && !t.resolver && !ue(r.errors, Z) && !ae._f.deps) ||
            gO(bt, ue(r.touchedFields, Z), r.isSubmitted, S, w),
          je = nv(Z, h, bt);
        Je(o, Z, ct),
          bt ? (ae._f.onBlur && ae._f.onBlur(M), m && m(0)) : ae._f.onChange && ae._f.onChange(M);
        const Ie = W(Z, ct, bt),
          Fe = !Jt(Ie) || je;
        if ((!bt && b.state.next({ name: Z, type: M.type, values: Vt(o) }), Cs))
          return (
            (y.isValid || v.isValid) && (t.mode === 'onBlur' ? bt && N() : bt || N()),
            Fe && b.state.next({ name: Z, ...(je ? {} : Ie) })
          );
        if ((!bt && je && b.state.next({ ...r }), t.resolver)) {
          const { errors: Zt } = await te([Z]);
          if ((X(ct), fe)) {
            const Tt = av(r.errors, i, Z),
              ga = av(Zt, i, Tt.name || Z);
            (ce = ga.error), (Z = ga.name), (De = Jt(Zt));
          }
        } else
          O([Z], !0),
            (ce = (await iv(ae, h.disabled, o, D, t.shouldUseNativeValidation))[Z]),
            O([Z]),
            X(ct),
            fe && (ce ? (De = !1) : (y.isValid || v.isValid) && (De = await be(i, !0)));
        fe && (ae._f.deps && G(ae._f.deps), ie(Z, De, ce, Ie));
      }
    },
    T = (M, B) => {
      if (ue(r.errors, B) && M.focus) return M.focus(), 1;
    },
    G = async (M, B = {}) => {
      let Z, fe;
      const ae = Ll(M);
      if (t.resolver) {
        const X = await _e(xt(M) ? M : ae);
        (Z = Jt(X)), (fe = M ? !ae.some((ce) => ue(X, ce)) : Z);
      } else
        M
          ? ((fe = (
              await Promise.all(
                ae.map(async (X) => {
                  const ce = ue(i, X);
                  return await be(ce && ce._f ? { [X]: ce } : ce);
                })
              )
            ).every(Boolean)),
            !(!fe && !r.isValid) && N())
          : (fe = Z = await be(i));
      return (
        b.state.next({
          ...(!ra(M) || ((y.isValid || v.isValid) && Z !== r.isValid) ? {} : { name: M }),
          ...(t.resolver || !M ? { isValid: Z } : {}),
          errors: r.errors,
        }),
        B.shouldFocus && !fe && Bl(i, T, M ? ae : h.mount),
        fe
      );
    },
    le = (M) => {
      const B = { ...(f.mount ? o : l) };
      return xt(M) ? B : ra(M) ? ue(B, M) : M.map((Z) => ue(B, Z));
    },
    re = (M, B) => ({
      invalid: !!ue((B || r).errors, M),
      isDirty: !!ue((B || r).dirtyFields, M),
      error: ue((B || r).errors, M),
      isValidating: !!ue(r.validatingFields, M),
      isTouched: !!ue((B || r).touchedFields, M),
    }),
    ve = (M) => {
      M && Ll(M).forEach((B) => Nt(r.errors, B)), b.state.next({ errors: M ? r.errors : {} });
    },
    Ve = (M, B, Z) => {
      const fe = (ue(i, M, { _f: {} })._f || {}).ref,
        ae = ue(r.errors, M) || {},
        { ref: X, message: ce, type: De, ...ct } = ae;
      Je(r.errors, M, { ...ct, ...B, ref: fe }),
        b.state.next({ name: M, errors: r.errors, isValid: !1 }),
        Z && Z.shouldFocus && fe && fe.focus && fe.focus();
    },
    we = (M, B) => (qn(M) ? b.state.subscribe({ next: (Z) => M(Re(void 0, B), Z) }) : Re(M, B, !0)),
    kt = (M) =>
      b.state.subscribe({
        next: (B) => {
          mO(M.name, B.name, M.exact) &&
            hO(B, M.formState || y, di, M.reRenderRoot) &&
            M.callback({ values: { ...o }, ...r, ...B });
        },
      }).unsubscribe,
    at = (M) => ((f.mount = !0), (v = { ...v, ...M.formState }), kt({ ...M, formState: v })),
    rn = (M, B = {}) => {
      for (const Z of M ? Ll(M) : h.mount)
        h.mount.delete(Z),
          h.array.delete(Z),
          B.keepValue || (Nt(i, Z), Nt(o, Z)),
          !B.keepError && Nt(r.errors, Z),
          !B.keepDirty && Nt(r.dirtyFields, Z),
          !B.keepTouched && Nt(r.touchedFields, Z),
          !B.keepIsValidating && Nt(r.validatingFields, Z),
          !t.shouldUnregister && !B.keepDefaultValue && Nt(l, Z);
      b.state.next({ values: Vt(o) }),
        b.state.next({ ...r, ...(B.keepDirty ? { isDirty: Se() } : {}) }),
        !B.keepIsValid && N();
    },
    Pa = ({ disabled: M, name: B }) => {
      ((_n(M) && f.mount) || M || h.disabled.has(B)) &&
        (M ? h.disabled.add(B) : h.disabled.delete(B));
    },
    $n = (M, B = {}) => {
      let Z = ue(i, M);
      const fe = _n(B.disabled) || _n(t.disabled);
      return (
        Je(i, M, {
          ...(Z || {}),
          _f: { ...(Z && Z._f ? Z._f : { ref: { name: M } }), name: M, mount: !0, ...B },
        }),
        h.mount.add(M),
        Z ? Pa({ disabled: _n(B.disabled) ? B.disabled : t.disabled, name: M }) : K(M, !0, B.value),
        {
          ...(fe ? { disabled: B.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!B.required,
                min: Cl(B.min),
                max: Cl(B.max),
                minLength: Cl(B.minLength),
                maxLength: Cl(B.maxLength),
                pattern: Cl(B.pattern),
              }
            : {}),
          name: M,
          onChange: xe,
          onBlur: xe,
          ref: (ae) => {
            if (ae) {
              $n(M, B), (Z = ue(i, M));
              const X =
                  (xt(ae.value) &&
                    ae.querySelectorAll &&
                    ae.querySelectorAll('input,select,textarea')[0]) ||
                  ae,
                ce = lO(X),
                De = Z._f.refs || [];
              if (ce ? De.find((ct) => ct === X) : X === Z._f.ref) return;
              Je(i, M, {
                _f: {
                  ...Z._f,
                  ...(ce
                    ? {
                        refs: [...De.filter($d), X, ...(Array.isArray(ue(l, M)) ? [{}] : [])],
                        ref: { type: X.type, name: M },
                      }
                    : { ref: X }),
                },
              }),
                K(M, !1, void 0, X);
            } else
              (Z = ue(i, M, {})),
                Z._f && (Z._f.mount = !1),
                (t.shouldUnregister || B.shouldUnregister) &&
                  !(j0(h.array, M) && f.action) &&
                  h.unMount.add(M);
          },
        }
      );
    },
    $a = () => t.shouldFocusError && Bl(i, T, h.mount),
    Nr = (M) => {
      _n(M) &&
        (b.state.next({ disabled: M }),
        Bl(
          i,
          (B, Z) => {
            const fe = ue(i, Z);
            fe &&
              ((B.disabled = fe._f.disabled || M),
              Array.isArray(fe._f.refs) &&
                fe._f.refs.forEach((ae) => {
                  ae.disabled = fe._f.disabled || M;
                }));
          },
          0,
          !1
        ));
    },
    Qa = (M, B) => async (Z) => {
      let fe;
      Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
      let ae = Vt(o);
      if ((b.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: X, values: ce } = await te();
        (r.errors = X), (ae = ce);
      } else await be(i);
      if (h.disabled.size) for (const X of h.disabled) Je(ae, X, void 0);
      if ((Nt(r.errors, 'root'), Jt(r.errors))) {
        b.state.next({ errors: {} });
        try {
          await M(ae, Z);
        } catch (X) {
          fe = X;
        }
      } else B && (await B({ ...r.errors }, Z)), $a(), setTimeout($a);
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Jt(r.errors) && !fe,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        fe)
      )
        throw fe;
    },
    Os = (M, B = {}) => {
      ue(i, M) &&
        (xt(B.defaultValue)
          ? me(M, Vt(ue(l, M)))
          : (me(M, B.defaultValue), Je(l, M, Vt(B.defaultValue))),
        B.keepTouched || Nt(r.touchedFields, M),
        B.keepDirty ||
          (Nt(r.dirtyFields, M), (r.isDirty = B.defaultValue ? Se(M, Vt(ue(l, M))) : Se())),
        B.keepError || (Nt(r.errors, M), y.isValid && N()),
        b.state.next({ ...r }));
    },
    fi = (M, B = {}) => {
      const Z = M ? Vt(M) : l,
        fe = Vt(Z),
        ae = Jt(M),
        X = ae ? l : fe;
      if ((B.keepDefaultValues || (l = Z), !B.keepValues)) {
        if (B.keepDirtyValues) {
          const ce = new Set([...h.mount, ...Object.keys(Tl(l, o))]);
          for (const De of Array.from(ce))
            ue(r.dirtyFields, De) ? Je(X, De, ue(o, De)) : me(De, ue(X, De));
        } else {
          if (kh && xt(M))
            for (const ce of h.mount) {
              const De = ue(i, ce);
              if (De && De._f) {
                const ct = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
                if (Qo(ct)) {
                  const bt = ct.closest('form');
                  if (bt) {
                    bt.reset();
                    break;
                  }
                }
              }
            }
          for (const ce of h.mount) me(ce, ue(X, ce));
        }
        (o = Vt(X)), b.array.next({ values: { ...X } }), b.state.next({ values: { ...X } });
      }
      (h = {
        mount: B.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (f.mount = !y.isValid || !!B.keepIsValid || !!B.keepDirtyValues),
        (f.watch = !!t.shouldUnregister),
        b.state.next({
          submitCount: B.keepSubmitCount ? r.submitCount : 0,
          isDirty: ae ? !1 : B.keepDirty ? r.isDirty : !!(B.keepDefaultValues && !Ua(M, l)),
          isSubmitted: B.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: ae
            ? {}
            : B.keepDirtyValues
              ? B.keepDefaultValues && o
                ? Tl(l, o)
                : r.dirtyFields
              : B.keepDefaultValues && M
                ? Tl(l, M)
                : B.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: B.keepTouched ? r.touchedFields : {},
          errors: B.keepErrors ? r.errors : {},
          isSubmitSuccessful: B.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    Yt = (M, B) => fi(qn(M) ? M(o) : M, B),
    Es = (M, B = {}) => {
      const Z = ue(i, M),
        fe = Z && Z._f;
      if (fe) {
        const ae = fe.refs ? fe.refs[0] : fe.ref;
        ae.focus && (ae.focus(), B.shouldSelect && qn(ae.select) && ae.select());
      }
    },
    di = (M) => {
      r = { ...r, ...M };
    },
    ma = {
      control: {
        register: $n,
        unregister: rn,
        getFieldState: re,
        handleSubmit: Qa,
        setError: Ve,
        _subscribe: kt,
        _runSchema: te,
        _getWatch: Re,
        _getDirty: Se,
        _setValid: N,
        _setFieldArray: k,
        _setDisabledField: Pa,
        _setErrors: q,
        _getFieldArray: Me,
        _reset: fi,
        _resetDefaultValues: () =>
          qn(t.defaultValues) &&
          t.defaultValues().then((M) => {
            Yt(M, t.resetOptions), b.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: se,
        _disableForm: Nr,
        _subjects: b,
        _proxyFormState: y,
        get _fields() {
          return i;
        },
        get _formValues() {
          return o;
        },
        get _state() {
          return f;
        },
        set _state(M) {
          f = M;
        },
        get _defaultValues() {
          return l;
        },
        get _names() {
          return h;
        },
        set _names(M) {
          h = M;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return t;
        },
        set _options(M) {
          t = { ...t, ...M };
        },
      },
      subscribe: at,
      trigger: G,
      register: $n,
      handleSubmit: Qa,
      watch: we,
      setValue: me,
      getValues: le,
      reset: Yt,
      resetField: Os,
      clearErrors: ve,
      unregister: rn,
      setError: Ve,
      setFocus: Es,
      getFieldState: re,
    };
  return { ...ma, formControl: ma };
}
const _O = typeof window < 'u' ? ee.useLayoutEffect : ee.useEffect;
function $0(n = {}) {
  const t = ee.useRef(void 0),
    r = ee.useRef(void 0),
    [i, l] = ee.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: qn(n.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
      isReady: !1,
      defaultValues: qn(n.defaultValues) ? void 0 : n.defaultValues,
    });
  t.current ||
    ((t.current = { ...(n.formControl ? n.formControl : bO(n)), formState: i }),
    n.formControl &&
      n.defaultValues &&
      !qn(n.defaultValues) &&
      n.formControl.reset(n.defaultValues, n.resetOptions));
  const o = t.current.control;
  return (
    (o._options = n),
    _O(() => {
      const f = o._subscribe({
        formState: o._proxyFormState,
        callback: () => l({ ...o._formState }),
        reRenderRoot: !0,
      });
      return l((h) => ({ ...h, isReady: !0 })), (o._formState.isReady = !0), f;
    }, [o]),
    ee.useEffect(() => o._disableForm(n.disabled), [o, n.disabled]),
    ee.useEffect(() => {
      n.mode && (o._options.mode = n.mode),
        n.reValidateMode && (o._options.reValidateMode = n.reValidateMode),
        n.errors && !Jt(n.errors) && o._setErrors(n.errors);
    }, [o, n.errors, n.mode, n.reValidateMode]),
    ee.useEffect(() => {
      n.shouldUnregister && o._subjects.state.next({ values: o._getWatch() });
    }, [o, n.shouldUnregister]),
    ee.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const f = o._getDirty();
        f !== i.isDirty && o._subjects.state.next({ isDirty: f });
      }
    }, [o, i.isDirty]),
    ee.useEffect(() => {
      n.values && !Ua(n.values, r.current)
        ? (o._reset(n.values, o._options.resetOptions),
          (r.current = n.values),
          l((f) => ({ ...f })))
        : o._resetDefaultValues();
    }, [o, n.values]),
    ee.useEffect(() => {
      o._state.mount || (o._setValid(), (o._state.mount = !0)),
        o._state.watch && ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    (t.current.formState = U0(i, o)),
    t.current
  );
}
const sv = (n, t, r) => {
    if (n && 'reportValidity' in n) {
      const i = ue(r, t);
      n.setCustomValidity((i && i.message) || ''), n.reportValidity();
    }
  },
  Q0 = (n, t) => {
    for (const r in t.fields) {
      const i = t.fields[r];
      i && i.ref && 'reportValidity' in i.ref
        ? sv(i.ref, r, n)
        : i && i.refs && i.refs.forEach((l) => sv(l, r, n));
    }
  },
  SO = (n, t) => {
    t.shouldUseNativeValidation && Q0(n, t);
    const r = {};
    for (const i in n) {
      const l = ue(t.fields, i),
        o = Object.assign(n[i] || {}, { ref: l && l.ref });
      if (xO(t.names || Object.keys(n), i)) {
        const f = Object.assign({}, ue(r, i));
        Je(f, 'root', o), Je(r, i, f);
      } else Je(r, i, o);
    }
    return r;
  },
  xO = (n, t) => {
    const r = lv(t);
    return n.some((i) => lv(i).match(`^${r}\\.\\d+`));
  };
function lv(n) {
  return n.replace(/\]|\[/g, '');
}
function wO(n, t) {
  for (var r = {}; n.length; ) {
    var i = n[0],
      l = i.code,
      o = i.message,
      f = i.path.join('.');
    if (!r[f])
      if ('unionErrors' in i) {
        var h = i.unionErrors[0].errors[0];
        r[f] = { message: h.message, type: h.code };
      } else r[f] = { message: o, type: l };
    if (
      ('unionErrors' in i &&
        i.unionErrors.forEach(function (y) {
          return y.errors.forEach(function (v) {
            return n.push(v);
          });
        }),
      t)
    ) {
      var m = r[f].types,
        g = m && m[i.code];
      r[f] = V0(f, t, r, l, g ? [].concat(g, i.message) : i.message);
    }
    n.shift();
  }
  return r;
}
function K0(n, t, r) {
  return (
    r === void 0 && (r = {}),
    function (i, l, o) {
      try {
        return Promise.resolve(
          (function (f, h) {
            try {
              var m = Promise.resolve(n[r.mode === 'sync' ? 'parse' : 'parseAsync'](i, t)).then(
                function (g) {
                  return (
                    o.shouldUseNativeValidation && Q0({}, o),
                    { errors: {}, values: r.raw ? Object.assign({}, i) : g }
                  );
                }
              );
            } catch (g) {
              return h(g);
            }
            return m && m.then ? m.then(void 0, h) : m;
          })(0, function (f) {
            if (
              (function (h) {
                return Array.isArray(h == null ? void 0 : h.errors);
              })(f)
            )
              return {
                values: {},
                errors: SO(
                  wO(f.errors, !o.shouldUseNativeValidation && o.criteriaMode === 'all'),
                  o
                ),
              };
            throw f;
          })
        );
      } catch (f) {
        return Promise.reject(f);
      }
    }
  );
}
var Pe;
(function (n) {
  n.assertEqual = (l) => l;
  function t(l) {}
  n.assertIs = t;
  function r(l) {
    throw new Error();
  }
  (n.assertNever = r),
    (n.arrayToEnum = (l) => {
      const o = {};
      for (const f of l) o[f] = f;
      return o;
    }),
    (n.getValidEnumValues = (l) => {
      const o = n.objectKeys(l).filter((h) => typeof l[l[h]] != 'number'),
        f = {};
      for (const h of o) f[h] = l[h];
      return n.objectValues(f);
    }),
    (n.objectValues = (l) =>
      n.objectKeys(l).map(function (o) {
        return l[o];
      })),
    (n.objectKeys =
      typeof Object.keys == 'function'
        ? (l) => Object.keys(l)
        : (l) => {
            const o = [];
            for (const f in l) Object.prototype.hasOwnProperty.call(l, f) && o.push(f);
            return o;
          }),
    (n.find = (l, o) => {
      for (const f of l) if (o(f)) return f;
    }),
    (n.isInteger =
      typeof Number.isInteger == 'function'
        ? (l) => Number.isInteger(l)
        : (l) => typeof l == 'number' && isFinite(l) && Math.floor(l) === l);
  function i(l, o = ' | ') {
    return l.map((f) => (typeof f == 'string' ? `'${f}'` : f)).join(o);
  }
  (n.joinValues = i),
    (n.jsonStringifyReplacer = (l, o) => (typeof o == 'bigint' ? o.toString() : o));
})(Pe || (Pe = {}));
var hh;
(function (n) {
  n.mergeShapes = (t, r) => ({ ...t, ...r });
})(hh || (hh = {}));
const de = Pe.arrayToEnum([
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
  ja = (n) => {
    switch (typeof n) {
      case 'undefined':
        return de.undefined;
      case 'string':
        return de.string;
      case 'number':
        return isNaN(n) ? de.nan : de.number;
      case 'boolean':
        return de.boolean;
      case 'function':
        return de.function;
      case 'bigint':
        return de.bigint;
      case 'symbol':
        return de.symbol;
      case 'object':
        return Array.isArray(n)
          ? de.array
          : n === null
            ? de.null
            : n.then && typeof n.then == 'function' && n.catch && typeof n.catch == 'function'
              ? de.promise
              : typeof Map < 'u' && n instanceof Map
                ? de.map
                : typeof Set < 'u' && n instanceof Set
                  ? de.set
                  : typeof Date < 'u' && n instanceof Date
                    ? de.date
                    : de.object;
      default:
        return de.unknown;
    }
  },
  J = Pe.arrayToEnum([
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
  OO = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, '$1:');
class Sn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r),
      (this.name = 'ZodError'),
      (this.issues = t);
  }
  format(t) {
    const r =
        t ||
        function (o) {
          return o.message;
        },
      i = { _errors: [] },
      l = (o) => {
        for (const f of o.issues)
          if (f.code === 'invalid_union') f.unionErrors.map(l);
          else if (f.code === 'invalid_return_type') l(f.returnTypeError);
          else if (f.code === 'invalid_arguments') l(f.argumentsError);
          else if (f.path.length === 0) i._errors.push(r(f));
          else {
            let h = i,
              m = 0;
            for (; m < f.path.length; ) {
              const g = f.path[m];
              m === f.path.length - 1
                ? ((h[g] = h[g] || { _errors: [] }), h[g]._errors.push(r(f)))
                : (h[g] = h[g] || { _errors: [] }),
                (h = h[g]),
                m++;
            }
          }
      };
    return l(this), i;
  }
  static assert(t) {
    if (!(t instanceof Sn)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Pe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {},
      i = [];
    for (const l of this.issues)
      l.path.length > 0
        ? ((r[l.path[0]] = r[l.path[0]] || []), r[l.path[0]].push(t(l)))
        : i.push(t(l));
    return { formErrors: i, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Sn.create = (n) => new Sn(n);
const ys = (n, t) => {
  let r;
  switch (n.code) {
    case J.invalid_type:
      n.received === de.undefined
        ? (r = 'Required')
        : (r = `Expected ${n.expected}, received ${n.received}`);
      break;
    case J.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(n.expected, Pe.jsonStringifyReplacer)}`;
      break;
    case J.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Pe.joinValues(n.keys, ', ')}`;
      break;
    case J.invalid_union:
      r = 'Invalid input';
      break;
    case J.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Pe.joinValues(n.options)}`;
      break;
    case J.invalid_enum_value:
      r = `Invalid enum value. Expected ${Pe.joinValues(n.options)}, received '${n.received}'`;
      break;
    case J.invalid_arguments:
      r = 'Invalid function arguments';
      break;
    case J.invalid_return_type:
      r = 'Invalid function return type';
      break;
    case J.invalid_date:
      r = 'Invalid date';
      break;
    case J.invalid_string:
      typeof n.validation == 'object'
        ? 'includes' in n.validation
          ? ((r = `Invalid input: must include "${n.validation.includes}"`),
            typeof n.validation.position == 'number' &&
              (r = `${r} at one or more positions greater than or equal to ${n.validation.position}`))
          : 'startsWith' in n.validation
            ? (r = `Invalid input: must start with "${n.validation.startsWith}"`)
            : 'endsWith' in n.validation
              ? (r = `Invalid input: must end with "${n.validation.endsWith}"`)
              : Pe.assertNever(n.validation)
        : n.validation !== 'regex'
          ? (r = `Invalid ${n.validation}`)
          : (r = 'Invalid');
      break;
    case J.too_small:
      n.type === 'array'
        ? (r = `Array must contain ${n.exact ? 'exactly' : n.inclusive ? 'at least' : 'more than'} ${n.minimum} element(s)`)
        : n.type === 'string'
          ? (r = `String must contain ${n.exact ? 'exactly' : n.inclusive ? 'at least' : 'over'} ${n.minimum} character(s)`)
          : n.type === 'number'
            ? (r = `Number must be ${n.exact ? 'exactly equal to ' : n.inclusive ? 'greater than or equal to ' : 'greater than '}${n.minimum}`)
            : n.type === 'date'
              ? (r = `Date must be ${n.exact ? 'exactly equal to ' : n.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(n.minimum))}`)
              : (r = 'Invalid input');
      break;
    case J.too_big:
      n.type === 'array'
        ? (r = `Array must contain ${n.exact ? 'exactly' : n.inclusive ? 'at most' : 'less than'} ${n.maximum} element(s)`)
        : n.type === 'string'
          ? (r = `String must contain ${n.exact ? 'exactly' : n.inclusive ? 'at most' : 'under'} ${n.maximum} character(s)`)
          : n.type === 'number'
            ? (r = `Number must be ${n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'} ${n.maximum}`)
            : n.type === 'bigint'
              ? (r = `BigInt must be ${n.exact ? 'exactly' : n.inclusive ? 'less than or equal to' : 'less than'} ${n.maximum}`)
              : n.type === 'date'
                ? (r = `Date must be ${n.exact ? 'exactly' : n.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(n.maximum))}`)
                : (r = 'Invalid input');
      break;
    case J.custom:
      r = 'Invalid input';
      break;
    case J.invalid_intersection_types:
      r = 'Intersection results could not be merged';
      break;
    case J.not_multiple_of:
      r = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case J.not_finite:
      r = 'Number must be finite';
      break;
    default:
      (r = t.defaultError), Pe.assertNever(n);
  }
  return { message: r };
};
let W0 = ys;
function EO(n) {
  W0 = n;
}
function Xo() {
  return W0;
}
const Io = (n) => {
    const { data: t, path: r, errorMaps: i, issueData: l } = n,
      o = [...r, ...(l.path || [])],
      f = { ...l, path: o };
    if (l.message !== void 0) return { ...l, path: o, message: l.message };
    let h = '';
    const m = i
      .filter((g) => !!g)
      .slice()
      .reverse();
    for (const g of m) h = g(f, { data: t, defaultError: h }).message;
    return { ...l, path: o, message: h };
  },
  TO = [];
function oe(n, t) {
  const r = Xo(),
    i = Io({
      issueData: t,
      data: n.data,
      path: n.path,
      errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, r, r === ys ? void 0 : ys].filter(
        (l) => !!l
      ),
    });
  n.common.issues.push(i);
}
class Kt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(t, r) {
    const i = [];
    for (const l of r) {
      if (l.status === 'aborted') return Ae;
      l.status === 'dirty' && t.dirty(), i.push(l.value);
    }
    return { status: t.value, value: i };
  }
  static async mergeObjectAsync(t, r) {
    const i = [];
    for (const l of r) {
      const o = await l.key,
        f = await l.value;
      i.push({ key: o, value: f });
    }
    return Kt.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, r) {
    const i = {};
    for (const l of r) {
      const { key: o, value: f } = l;
      if (o.status === 'aborted' || f.status === 'aborted') return Ae;
      o.status === 'dirty' && t.dirty(),
        f.status === 'dirty' && t.dirty(),
        o.value !== '__proto__' && (typeof f.value < 'u' || l.alwaysSet) && (i[o.value] = f.value);
    }
    return { status: t.value, value: i };
  }
}
const Ae = Object.freeze({ status: 'aborted' }),
  rs = (n) => ({ status: 'dirty', value: n }),
  nn = (n) => ({ status: 'valid', value: n }),
  mh = (n) => n.status === 'aborted',
  gh = (n) => n.status === 'dirty',
  ii = (n) => n.status === 'valid',
  Zl = (n) => typeof Promise < 'u' && n instanceof Promise;
function Jo(n, t, r, i) {
  if (typeof t == 'function' ? n !== t || !0 : !t.has(n))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return t.get(n);
}
function X0(n, t, r, i, l) {
  if (typeof t == 'function' ? n !== t || !0 : !t.has(n))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return t.set(n, r), r;
}
var ye;
(function (n) {
  (n.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (n.toString = (t) => (typeof t == 'string' ? t : t == null ? void 0 : t.message));
})(ye || (ye = {}));
var Rl, jl;
class ca {
  constructor(t, r, i, l) {
    (this._cachedPath = []), (this.parent = t), (this.data = r), (this._path = i), (this._key = l);
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
const uv = (n, t) => {
  if (ii(t)) return { success: !0, data: t.value };
  if (!n.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new Sn(n.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function Ue(n) {
  if (!n) return {};
  const { errorMap: t, invalid_type_error: r, required_error: i, description: l } = n;
  if (t && (r || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: l }
    : {
        errorMap: (f, h) => {
          var m, g;
          const { message: y } = n;
          return f.code === 'invalid_enum_value'
            ? { message: y ?? h.defaultError }
            : typeof h.data > 'u'
              ? { message: (m = y ?? i) !== null && m !== void 0 ? m : h.defaultError }
              : f.code !== 'invalid_type'
                ? { message: h.defaultError }
                : { message: (g = y ?? r) !== null && g !== void 0 ? g : h.defaultError };
        },
        description: l,
      };
}
class Be {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ja(t.data);
  }
  _getOrReturnCtx(t, r) {
    return (
      r || {
        common: t.parent.common,
        data: t.data,
        parsedType: ja(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Kt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ja(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Zl(r)) throw new Error('Synchronous parse encountered promise.');
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const i = this.safeParse(t, r);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(t, r) {
    var i;
    const l = {
        common: {
          issues: [],
          async: (i = r == null ? void 0 : r.async) !== null && i !== void 0 ? i : !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: ja(t),
      },
      o = this._parseSync({ data: t, path: l.path, parent: l });
    return uv(l, o);
  }
  '~validate'(t) {
    var r, i;
    const l = {
      common: { issues: [], async: !!this['~standard'].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ja(t),
    };
    if (!this['~standard'].async)
      try {
        const o = this._parseSync({ data: t, path: [], parent: l });
        return ii(o) ? { value: o.value } : { issues: l.common.issues };
      } catch (o) {
        !(
          (i =
            (r = o == null ? void 0 : o.message) === null || r === void 0
              ? void 0
              : r.toLowerCase()) === null || i === void 0
        ) &&
          i.includes('encountered') &&
          (this['~standard'].async = !0),
          (l.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: l }).then((o) =>
      ii(o) ? { value: o.value } : { issues: l.common.issues }
    );
  }
  async parseAsync(t, r) {
    const i = await this.safeParseAsync(t, r);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(t, r) {
    const i = {
        common: { issues: [], contextualErrorMap: r == null ? void 0 : r.errorMap, async: !0 },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: ja(t),
      },
      l = this._parse({ data: t, path: i.path, parent: i }),
      o = await (Zl(l) ? l : Promise.resolve(l));
    return uv(i, o);
  }
  refine(t, r) {
    const i = (l) =>
      typeof r == 'string' || typeof r > 'u' ? { message: r } : typeof r == 'function' ? r(l) : r;
    return this._refinement((l, o) => {
      const f = t(l),
        h = () => o.addIssue({ code: J.custom, ...i(l) });
      return typeof Promise < 'u' && f instanceof Promise
        ? f.then((m) => (m ? !0 : (h(), !1)))
        : f
          ? !0
          : (h(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((i, l) =>
      t(i) ? !0 : (l.addIssue(typeof r == 'function' ? r(i, l) : r), !1)
    );
  }
  _refinement(t) {
    return new Pn({
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: 'refinement', refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
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
      (this['~standard'] = { version: 1, vendor: 'zod', validate: (r) => this['~validate'](r) });
  }
  optional() {
    return la.create(this, this._def);
  }
  nullable() {
    return Dr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Gn.create(this);
  }
  promise() {
    return vs.create(this, this._def);
  }
  or(t) {
    return $l.create([this, t], this._def);
  }
  and(t) {
    return Ql.create(this, t, this._def);
  }
  transform(t) {
    return new Pn({
      ...Ue(this._def),
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: 'transform', transform: t },
    });
  }
  default(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new Jl({ ...Ue(this._def), innerType: this, defaultValue: r, typeName: Ce.ZodDefault });
  }
  brand() {
    return new Lh({ typeName: Ce.ZodBranded, type: this, ...Ue(this._def) });
  }
  catch(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new eu({ ...Ue(this._def), innerType: this, catchValue: r, typeName: Ce.ZodCatch });
  }
  describe(t) {
    const r = this.constructor;
    return new r({ ...this._def, description: t });
  }
  pipe(t) {
    return gu.create(this, t);
  }
  readonly() {
    return tu.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const CO = /^c[^\s-]{8,}$/i,
  MO = /^[0-9a-z]+$/,
  DO = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  NO = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  AO = /^[a-z0-9_-]{21}$/i,
  kO = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  RO =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  jO = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  zO = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let Qd;
const UO =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  LO =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  BO =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  HO =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  VO = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  qO = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  I0 =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  YO = new RegExp(`^${I0}$`);
function J0(n) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    n.precision
      ? (t = `${t}\\.\\d{${n.precision}}`)
      : n.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function ZO(n) {
  return new RegExp(`^${J0(n)}$`);
}
function eb(n) {
  let t = `${I0}T${J0(n)}`;
  const r = [];
  return (
    r.push(n.local ? 'Z?' : 'Z'),
    n.offset && r.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${r.join('|')})`),
    new RegExp(`^${t}$`)
  );
}
function FO(n, t) {
  return !!(((t === 'v4' || !t) && UO.test(n)) || ((t === 'v6' || !t) && BO.test(n)));
}
function GO(n, t) {
  if (!kO.test(n)) return !1;
  try {
    const [r] = n.split('.'),
      i = r
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), '='),
      l = JSON.parse(atob(i));
    return !(typeof l != 'object' || l === null || !l.typ || !l.alg || (t && l.alg !== t));
  } catch {
    return !1;
  }
}
function PO(n, t) {
  return !!(((t === 'v4' || !t) && LO.test(n)) || ((t === 'v6' || !t) && HO.test(n)));
}
class Zn extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== de.string)) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_type, expected: de.string, received: o.parsedType }), Ae;
    }
    const i = new Kt();
    let l;
    for (const o of this._def.checks)
      if (o.kind === 'min')
        t.data.length < o.value &&
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, {
            code: J.too_small,
            minimum: o.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          i.dirty());
      else if (o.kind === 'max')
        t.data.length > o.value &&
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, {
            code: J.too_big,
            maximum: o.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          i.dirty());
      else if (o.kind === 'length') {
        const f = t.data.length > o.value,
          h = t.data.length < o.value;
        (f || h) &&
          ((l = this._getOrReturnCtx(t, l)),
          f
            ? oe(l, {
                code: J.too_big,
                maximum: o.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : h &&
              oe(l, {
                code: J.too_small,
                minimum: o.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          i.dirty());
      } else if (o.kind === 'email')
        jO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'email', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'emoji')
        Qd || (Qd = new RegExp(zO, 'u')),
          Qd.test(t.data) ||
            ((l = this._getOrReturnCtx(t, l)),
            oe(l, { validation: 'emoji', code: J.invalid_string, message: o.message }),
            i.dirty());
      else if (o.kind === 'uuid')
        NO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'uuid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'nanoid')
        AO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'nanoid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'cuid')
        CO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'cuid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'cuid2')
        MO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'cuid2', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'ulid')
        DO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'ulid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'url')
        try {
          new URL(t.data);
        } catch {
          (l = this._getOrReturnCtx(t, l)),
            oe(l, { validation: 'url', code: J.invalid_string, message: o.message }),
            i.dirty();
        }
      else
        o.kind === 'regex'
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((l = this._getOrReturnCtx(t, l)),
              oe(l, { validation: 'regex', code: J.invalid_string, message: o.message }),
              i.dirty()))
          : o.kind === 'trim'
            ? (t.data = t.data.trim())
            : o.kind === 'includes'
              ? t.data.includes(o.value, o.position) ||
                ((l = this._getOrReturnCtx(t, l)),
                oe(l, {
                  code: J.invalid_string,
                  validation: { includes: o.value, position: o.position },
                  message: o.message,
                }),
                i.dirty())
              : o.kind === 'toLowerCase'
                ? (t.data = t.data.toLowerCase())
                : o.kind === 'toUpperCase'
                  ? (t.data = t.data.toUpperCase())
                  : o.kind === 'startsWith'
                    ? t.data.startsWith(o.value) ||
                      ((l = this._getOrReturnCtx(t, l)),
                      oe(l, {
                        code: J.invalid_string,
                        validation: { startsWith: o.value },
                        message: o.message,
                      }),
                      i.dirty())
                    : o.kind === 'endsWith'
                      ? t.data.endsWith(o.value) ||
                        ((l = this._getOrReturnCtx(t, l)),
                        oe(l, {
                          code: J.invalid_string,
                          validation: { endsWith: o.value },
                          message: o.message,
                        }),
                        i.dirty())
                      : o.kind === 'datetime'
                        ? eb(o).test(t.data) ||
                          ((l = this._getOrReturnCtx(t, l)),
                          oe(l, {
                            code: J.invalid_string,
                            validation: 'datetime',
                            message: o.message,
                          }),
                          i.dirty())
                        : o.kind === 'date'
                          ? YO.test(t.data) ||
                            ((l = this._getOrReturnCtx(t, l)),
                            oe(l, {
                              code: J.invalid_string,
                              validation: 'date',
                              message: o.message,
                            }),
                            i.dirty())
                          : o.kind === 'time'
                            ? ZO(o).test(t.data) ||
                              ((l = this._getOrReturnCtx(t, l)),
                              oe(l, {
                                code: J.invalid_string,
                                validation: 'time',
                                message: o.message,
                              }),
                              i.dirty())
                            : o.kind === 'duration'
                              ? RO.test(t.data) ||
                                ((l = this._getOrReturnCtx(t, l)),
                                oe(l, {
                                  validation: 'duration',
                                  code: J.invalid_string,
                                  message: o.message,
                                }),
                                i.dirty())
                              : o.kind === 'ip'
                                ? FO(t.data, o.version) ||
                                  ((l = this._getOrReturnCtx(t, l)),
                                  oe(l, {
                                    validation: 'ip',
                                    code: J.invalid_string,
                                    message: o.message,
                                  }),
                                  i.dirty())
                                : o.kind === 'jwt'
                                  ? GO(t.data, o.alg) ||
                                    ((l = this._getOrReturnCtx(t, l)),
                                    oe(l, {
                                      validation: 'jwt',
                                      code: J.invalid_string,
                                      message: o.message,
                                    }),
                                    i.dirty())
                                  : o.kind === 'cidr'
                                    ? PO(t.data, o.version) ||
                                      ((l = this._getOrReturnCtx(t, l)),
                                      oe(l, {
                                        validation: 'cidr',
                                        code: J.invalid_string,
                                        message: o.message,
                                      }),
                                      i.dirty())
                                    : o.kind === 'base64'
                                      ? VO.test(t.data) ||
                                        ((l = this._getOrReturnCtx(t, l)),
                                        oe(l, {
                                          validation: 'base64',
                                          code: J.invalid_string,
                                          message: o.message,
                                        }),
                                        i.dirty())
                                      : o.kind === 'base64url'
                                        ? qO.test(t.data) ||
                                          ((l = this._getOrReturnCtx(t, l)),
                                          oe(l, {
                                            validation: 'base64url',
                                            code: J.invalid_string,
                                            message: o.message,
                                          }),
                                          i.dirty())
                                        : Pe.assertNever(o);
    return { status: i.value, value: t.data };
  }
  _regex(t, r, i) {
    return this.refinement((l) => t.test(l), {
      validation: r,
      code: J.invalid_string,
      ...ye.errToObj(i),
    });
  }
  _addCheck(t) {
    return new Zn({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...ye.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...ye.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...ye.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...ye.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...ye.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...ye.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...ye.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...ye.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...ye.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: 'base64url', ...ye.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: 'jwt', ...ye.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...ye.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: 'cidr', ...ye.errToObj(t) });
  }
  datetime(t) {
    var r, i;
    return typeof t == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: t })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
                ? void 0
                : t.precision,
          offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
          local: (i = t == null ? void 0 : t.local) !== null && i !== void 0 ? i : !1,
          ...ye.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: 'date', message: t });
  }
  time(t) {
    return typeof t == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: t })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
                ? void 0
                : t.precision,
          ...ye.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...ye.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({ kind: 'regex', regex: t, ...ye.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: r == null ? void 0 : r.position,
      ...ye.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: 'startsWith', value: t, ...ye.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: 'endsWith', value: t, ...ye.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: 'min', value: t, ...ye.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: 'max', value: t, ...ye.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: 'length', value: t, ...ye.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, ye.errToObj(t));
  }
  trim() {
    return new Zn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new Zn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new Zn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === 'ip');
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === 'cidr');
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === 'base64');
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === 'base64url');
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Zn.create = (n) => {
  var t;
  return new Zn({
    checks: [],
    typeName: Ce.ZodString,
    coerce: (t = n == null ? void 0 : n.coerce) !== null && t !== void 0 ? t : !1,
    ...Ue(n),
  });
};
function $O(n, t) {
  const r = (n.toString().split('.')[1] || '').length,
    i = (t.toString().split('.')[1] || '').length,
    l = r > i ? r : i,
    o = parseInt(n.toFixed(l).replace('.', '')),
    f = parseInt(t.toFixed(l).replace('.', ''));
  return (o % f) / Math.pow(10, l);
}
class Tr extends Be {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== de.number)) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_type, expected: de.number, received: o.parsedType }), Ae;
    }
    let i;
    const l = new Kt();
    for (const o of this._def.checks)
      o.kind === 'int'
        ? Pe.isInteger(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: J.invalid_type,
            expected: 'integer',
            received: 'float',
            message: o.message,
          }),
          l.dirty())
        : o.kind === 'min'
          ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
            ((i = this._getOrReturnCtx(t, i)),
            oe(i, {
              code: J.too_small,
              minimum: o.value,
              type: 'number',
              inclusive: o.inclusive,
              exact: !1,
              message: o.message,
            }),
            l.dirty())
          : o.kind === 'max'
            ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
              ((i = this._getOrReturnCtx(t, i)),
              oe(i, {
                code: J.too_big,
                maximum: o.value,
                type: 'number',
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              l.dirty())
            : o.kind === 'multipleOf'
              ? $O(t.data, o.value) !== 0 &&
                ((i = this._getOrReturnCtx(t, i)),
                oe(i, { code: J.not_multiple_of, multipleOf: o.value, message: o.message }),
                l.dirty())
              : o.kind === 'finite'
                ? Number.isFinite(t.data) ||
                  ((i = this._getOrReturnCtx(t, i)),
                  oe(i, { code: J.not_finite, message: o.message }),
                  l.dirty())
                : Pe.assertNever(o);
    return { status: l.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, ye.toString(r));
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, ye.toString(r));
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, ye.toString(r));
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, ye.toString(r));
  }
  setLimit(t, r, i, l) {
    return new Tr({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: i, message: ye.toString(l) }],
    });
  }
  _addCheck(t) {
    return new Tr({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: ye.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: ye.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: ye.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: ye.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: ye.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: ye.toString(r) });
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: ye.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ye.toString(t),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ye.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) => t.kind === 'int' || (t.kind === 'multipleOf' && Pe.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      r = null;
    for (const i of this._def.checks) {
      if (i.kind === 'finite' || i.kind === 'int' || i.kind === 'multipleOf') return !0;
      i.kind === 'min'
        ? (r === null || i.value > r) && (r = i.value)
        : i.kind === 'max' && (t === null || i.value < t) && (t = i.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
Tr.create = (n) =>
  new Tr({
    checks: [],
    typeName: Ce.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...Ue(n),
  });
class Cr extends Be {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== de.bigint) return this._getInvalidInput(t);
    let i;
    const l = new Kt();
    for (const o of this._def.checks)
      o.kind === 'min'
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: J.too_small,
            type: 'bigint',
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          l.dirty())
        : o.kind === 'max'
          ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
            ((i = this._getOrReturnCtx(t, i)),
            oe(i, {
              code: J.too_big,
              type: 'bigint',
              maximum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            l.dirty())
          : o.kind === 'multipleOf'
            ? t.data % o.value !== BigInt(0) &&
              ((i = this._getOrReturnCtx(t, i)),
              oe(i, { code: J.not_multiple_of, multipleOf: o.value, message: o.message }),
              l.dirty())
            : Pe.assertNever(o);
    return { status: l.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return oe(r, { code: J.invalid_type, expected: de.bigint, received: r.parsedType }), Ae;
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, ye.toString(r));
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, ye.toString(r));
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, ye.toString(r));
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, ye.toString(r));
  }
  setLimit(t, r, i, l) {
    return new Cr({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: i, message: ye.toString(l) }],
    });
  }
  _addCheck(t) {
    return new Cr({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: ye.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: ye.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: ye.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: ye.toString(t),
    });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: ye.toString(r) });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Cr.create = (n) => {
  var t;
  return new Cr({
    checks: [],
    typeName: Ce.ZodBigInt,
    coerce: (t = n == null ? void 0 : n.coerce) !== null && t !== void 0 ? t : !1,
    ...Ue(n),
  });
};
class Fl extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== de.boolean)) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.boolean, received: i.parsedType }), Ae;
    }
    return nn(t.data);
  }
}
Fl.create = (n) =>
  new Fl({ typeName: Ce.ZodBoolean, coerce: (n == null ? void 0 : n.coerce) || !1, ...Ue(n) });
class si extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== de.date)) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_type, expected: de.date, received: o.parsedType }), Ae;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_date }), Ae;
    }
    const i = new Kt();
    let l;
    for (const o of this._def.checks)
      o.kind === 'min'
        ? t.data.getTime() < o.value &&
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, {
            code: J.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: 'date',
          }),
          i.dirty())
        : o.kind === 'max'
          ? t.data.getTime() > o.value &&
            ((l = this._getOrReturnCtx(t, l)),
            oe(l, {
              code: J.too_big,
              message: o.message,
              inclusive: !0,
              exact: !1,
              maximum: o.value,
              type: 'date',
            }),
            i.dirty())
          : Pe.assertNever(o);
    return { status: i.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new si({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({ kind: 'min', value: t.getTime(), message: ye.toString(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: 'max', value: t.getTime(), message: ye.toString(r) });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
si.create = (n) =>
  new si({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: Ce.ZodDate,
    ...Ue(n),
  });
class ec extends Be {
  _parse(t) {
    if (this._getType(t) !== de.symbol) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.symbol, received: i.parsedType }), Ae;
    }
    return nn(t.data);
  }
}
ec.create = (n) => new ec({ typeName: Ce.ZodSymbol, ...Ue(n) });
class Gl extends Be {
  _parse(t) {
    if (this._getType(t) !== de.undefined) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.undefined, received: i.parsedType }), Ae;
    }
    return nn(t.data);
  }
}
Gl.create = (n) => new Gl({ typeName: Ce.ZodUndefined, ...Ue(n) });
class Pl extends Be {
  _parse(t) {
    if (this._getType(t) !== de.null) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.null, received: i.parsedType }), Ae;
    }
    return nn(t.data);
  }
}
Pl.create = (n) => new Pl({ typeName: Ce.ZodNull, ...Ue(n) });
class ps extends Be {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return nn(t.data);
  }
}
ps.create = (n) => new ps({ typeName: Ce.ZodAny, ...Ue(n) });
class ri extends Be {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return nn(t.data);
  }
}
ri.create = (n) => new ri({ typeName: Ce.ZodUnknown, ...Ue(n) });
class Ya extends Be {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return oe(r, { code: J.invalid_type, expected: de.never, received: r.parsedType }), Ae;
  }
}
Ya.create = (n) => new Ya({ typeName: Ce.ZodNever, ...Ue(n) });
class tc extends Be {
  _parse(t) {
    if (this._getType(t) !== de.undefined) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.void, received: i.parsedType }), Ae;
    }
    return nn(t.data);
  }
}
tc.create = (n) => new tc({ typeName: Ce.ZodVoid, ...Ue(n) });
class Gn extends Be {
  _parse(t) {
    const { ctx: r, status: i } = this._processInputParams(t),
      l = this._def;
    if (r.parsedType !== de.array)
      return oe(r, { code: J.invalid_type, expected: de.array, received: r.parsedType }), Ae;
    if (l.exactLength !== null) {
      const f = r.data.length > l.exactLength.value,
        h = r.data.length < l.exactLength.value;
      (f || h) &&
        (oe(r, {
          code: f ? J.too_big : J.too_small,
          minimum: h ? l.exactLength.value : void 0,
          maximum: f ? l.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: l.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (l.minLength !== null &&
        r.data.length < l.minLength.value &&
        (oe(r, {
          code: J.too_small,
          minimum: l.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: l.minLength.message,
        }),
        i.dirty()),
      l.maxLength !== null &&
        r.data.length > l.maxLength.value &&
        (oe(r, {
          code: J.too_big,
          maximum: l.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: l.maxLength.message,
        }),
        i.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((f, h) => l.type._parseAsync(new ca(r, f, r.path, h)))
      ).then((f) => Kt.mergeArray(i, f));
    const o = [...r.data].map((f, h) => l.type._parseSync(new ca(r, f, r.path, h)));
    return Kt.mergeArray(i, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Gn({ ...this._def, minLength: { value: t, message: ye.toString(r) } });
  }
  max(t, r) {
    return new Gn({ ...this._def, maxLength: { value: t, message: ye.toString(r) } });
  }
  length(t, r) {
    return new Gn({ ...this._def, exactLength: { value: t, message: ye.toString(r) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Gn.create = (n, t) =>
  new Gn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ce.ZodArray,
    ...Ue(t),
  });
function as(n) {
  if (n instanceof ht) {
    const t = {};
    for (const r in n.shape) {
      const i = n.shape[r];
      t[r] = la.create(as(i));
    }
    return new ht({ ...n._def, shape: () => t });
  } else
    return n instanceof Gn
      ? new Gn({ ...n._def, type: as(n.element) })
      : n instanceof la
        ? la.create(as(n.unwrap()))
        : n instanceof Dr
          ? Dr.create(as(n.unwrap()))
          : n instanceof fa
            ? fa.create(n.items.map((t) => as(t)))
            : n;
}
class ht extends Be {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      r = Pe.objectKeys(t);
    return (this._cached = { shape: t, keys: r });
  }
  _parse(t) {
    if (this._getType(t) !== de.object) {
      const g = this._getOrReturnCtx(t);
      return oe(g, { code: J.invalid_type, expected: de.object, received: g.parsedType }), Ae;
    }
    const { status: i, ctx: l } = this._processInputParams(t),
      { shape: o, keys: f } = this._getCached(),
      h = [];
    if (!(this._def.catchall instanceof Ya && this._def.unknownKeys === 'strip'))
      for (const g in l.data) f.includes(g) || h.push(g);
    const m = [];
    for (const g of f) {
      const y = o[g],
        v = l.data[g];
      m.push({
        key: { status: 'valid', value: g },
        value: y._parse(new ca(l, v, l.path, g)),
        alwaysSet: g in l.data,
      });
    }
    if (this._def.catchall instanceof Ya) {
      const g = this._def.unknownKeys;
      if (g === 'passthrough')
        for (const y of h)
          m.push({
            key: { status: 'valid', value: y },
            value: { status: 'valid', value: l.data[y] },
          });
      else if (g === 'strict')
        h.length > 0 && (oe(l, { code: J.unrecognized_keys, keys: h }), i.dirty());
      else if (g !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const g = this._def.catchall;
      for (const y of h) {
        const v = l.data[y];
        m.push({
          key: { status: 'valid', value: y },
          value: g._parse(new ca(l, v, l.path, y)),
          alwaysSet: y in l.data,
        });
      }
    }
    return l.common.async
      ? Promise.resolve()
          .then(async () => {
            const g = [];
            for (const y of m) {
              const v = await y.key,
                b = await y.value;
              g.push({ key: v, value: b, alwaysSet: y.alwaysSet });
            }
            return g;
          })
          .then((g) => Kt.mergeObjectSync(i, g))
      : Kt.mergeObjectSync(i, m);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      ye.errToObj,
      new ht({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (r, i) => {
                var l, o, f, h;
                const m =
                  (f =
                    (o = (l = this._def).errorMap) === null || o === void 0
                      ? void 0
                      : o.call(l, r, i).message) !== null && f !== void 0
                    ? f
                    : i.defaultError;
                return r.code === 'unrecognized_keys'
                  ? { message: (h = ye.errToObj(t).message) !== null && h !== void 0 ? h : m }
                  : { message: m };
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
  extend(t) {
    return new ht({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new ht({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: Ce.ZodObject,
    });
  }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  catchall(t) {
    return new ht({ ...this._def, catchall: t });
  }
  pick(t) {
    const r = {};
    return (
      Pe.objectKeys(t).forEach((i) => {
        t[i] && this.shape[i] && (r[i] = this.shape[i]);
      }),
      new ht({ ...this._def, shape: () => r })
    );
  }
  omit(t) {
    const r = {};
    return (
      Pe.objectKeys(this.shape).forEach((i) => {
        t[i] || (r[i] = this.shape[i]);
      }),
      new ht({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return as(this);
  }
  partial(t) {
    const r = {};
    return (
      Pe.objectKeys(this.shape).forEach((i) => {
        const l = this.shape[i];
        t && !t[i] ? (r[i] = l) : (r[i] = l.optional());
      }),
      new ht({ ...this._def, shape: () => r })
    );
  }
  required(t) {
    const r = {};
    return (
      Pe.objectKeys(this.shape).forEach((i) => {
        if (t && !t[i]) r[i] = this.shape[i];
        else {
          let o = this.shape[i];
          for (; o instanceof la; ) o = o._def.innerType;
          r[i] = o;
        }
      }),
      new ht({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return tb(Pe.objectKeys(this.shape));
  }
}
ht.create = (n, t) =>
  new ht({
    shape: () => n,
    unknownKeys: 'strip',
    catchall: Ya.create(),
    typeName: Ce.ZodObject,
    ...Ue(t),
  });
ht.strictCreate = (n, t) =>
  new ht({
    shape: () => n,
    unknownKeys: 'strict',
    catchall: Ya.create(),
    typeName: Ce.ZodObject,
    ...Ue(t),
  });
ht.lazycreate = (n, t) =>
  new ht({
    shape: n,
    unknownKeys: 'strip',
    catchall: Ya.create(),
    typeName: Ce.ZodObject,
    ...Ue(t),
  });
class $l extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = this._def.options;
    function l(o) {
      for (const h of o) if (h.result.status === 'valid') return h.result;
      for (const h of o)
        if (h.result.status === 'dirty')
          return r.common.issues.push(...h.ctx.common.issues), h.result;
      const f = o.map((h) => new Sn(h.ctx.common.issues));
      return oe(r, { code: J.invalid_union, unionErrors: f }), Ae;
    }
    if (r.common.async)
      return Promise.all(
        i.map(async (o) => {
          const f = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return { result: await o._parseAsync({ data: r.data, path: r.path, parent: f }), ctx: f };
        })
      ).then(l);
    {
      let o;
      const f = [];
      for (const m of i) {
        const g = { ...r, common: { ...r.common, issues: [] }, parent: null },
          y = m._parseSync({ data: r.data, path: r.path, parent: g });
        if (y.status === 'valid') return y;
        y.status === 'dirty' && !o && (o = { result: y, ctx: g }),
          g.common.issues.length && f.push(g.common.issues);
      }
      if (o) return r.common.issues.push(...o.ctx.common.issues), o.result;
      const h = f.map((m) => new Sn(m));
      return oe(r, { code: J.invalid_union, unionErrors: h }), Ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
$l.create = (n, t) => new $l({ options: n, typeName: Ce.ZodUnion, ...Ue(t) });
const ka = (n) =>
  n instanceof Wl
    ? ka(n.schema)
    : n instanceof Pn
      ? ka(n.innerType())
      : n instanceof Xl
        ? [n.value]
        : n instanceof Mr
          ? n.options
          : n instanceof Il
            ? Pe.objectValues(n.enum)
            : n instanceof Jl
              ? ka(n._def.innerType)
              : n instanceof Gl
                ? [void 0]
                : n instanceof Pl
                  ? [null]
                  : n instanceof la
                    ? [void 0, ...ka(n.unwrap())]
                    : n instanceof Dr
                      ? [null, ...ka(n.unwrap())]
                      : n instanceof Lh || n instanceof tu
                        ? ka(n.unwrap())
                        : n instanceof eu
                          ? ka(n._def.innerType)
                          : [];
class vc extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== de.object)
      return oe(r, { code: J.invalid_type, expected: de.object, received: r.parsedType }), Ae;
    const i = this.discriminator,
      l = r.data[i],
      o = this.optionsMap.get(l);
    return o
      ? r.common.async
        ? o._parseAsync({ data: r.data, path: r.path, parent: r })
        : o._parseSync({ data: r.data, path: r.path, parent: r })
      : (oe(r, {
          code: J.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [i],
        }),
        Ae);
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
  static create(t, r, i) {
    const l = new Map();
    for (const o of r) {
      const f = ka(o.shape[t]);
      if (!f.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const h of f) {
        if (l.has(h))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(h)}`);
        l.set(h, o);
      }
    }
    return new vc({
      typeName: Ce.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: l,
      ...Ue(i),
    });
  }
}
function yh(n, t) {
  const r = ja(n),
    i = ja(t);
  if (n === t) return { valid: !0, data: n };
  if (r === de.object && i === de.object) {
    const l = Pe.objectKeys(t),
      o = Pe.objectKeys(n).filter((h) => l.indexOf(h) !== -1),
      f = { ...n, ...t };
    for (const h of o) {
      const m = yh(n[h], t[h]);
      if (!m.valid) return { valid: !1 };
      f[h] = m.data;
    }
    return { valid: !0, data: f };
  } else if (r === de.array && i === de.array) {
    if (n.length !== t.length) return { valid: !1 };
    const l = [];
    for (let o = 0; o < n.length; o++) {
      const f = n[o],
        h = t[o],
        m = yh(f, h);
      if (!m.valid) return { valid: !1 };
      l.push(m.data);
    }
    return { valid: !0, data: l };
  } else return r === de.date && i === de.date && +n == +t ? { valid: !0, data: n } : { valid: !1 };
}
class Ql extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t),
      l = (o, f) => {
        if (mh(o) || mh(f)) return Ae;
        const h = yh(o.value, f.value);
        return h.valid
          ? ((gh(o) || gh(f)) && r.dirty(), { status: r.value, value: h.data })
          : (oe(i, { code: J.invalid_intersection_types }), Ae);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({ data: i.data, path: i.path, parent: i }),
        ]).then(([o, f]) => l(o, f))
      : l(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
Ql.create = (n, t, r) => new Ql({ left: n, right: t, typeName: Ce.ZodIntersection, ...Ue(r) });
class fa extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== de.array)
      return oe(i, { code: J.invalid_type, expected: de.array, received: i.parsedType }), Ae;
    if (i.data.length < this._def.items.length)
      return (
        oe(i, {
          code: J.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        Ae
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (oe(i, {
        code: J.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      r.dirty());
    const o = [...i.data]
      .map((f, h) => {
        const m = this._def.items[h] || this._def.rest;
        return m ? m._parse(new ca(i, f, i.path, h)) : null;
      })
      .filter((f) => !!f);
    return i.common.async ? Promise.all(o).then((f) => Kt.mergeArray(r, f)) : Kt.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new fa({ ...this._def, rest: t });
  }
}
fa.create = (n, t) => {
  if (!Array.isArray(n)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new fa({ items: n, typeName: Ce.ZodTuple, rest: null, ...Ue(t) });
};
class Kl extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== de.object)
      return oe(i, { code: J.invalid_type, expected: de.object, received: i.parsedType }), Ae;
    const l = [],
      o = this._def.keyType,
      f = this._def.valueType;
    for (const h in i.data)
      l.push({
        key: o._parse(new ca(i, h, i.path, h)),
        value: f._parse(new ca(i, i.data[h], i.path, h)),
        alwaysSet: h in i.data,
      });
    return i.common.async ? Kt.mergeObjectAsync(r, l) : Kt.mergeObjectSync(r, l);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, i) {
    return r instanceof Be
      ? new Kl({ keyType: t, valueType: r, typeName: Ce.ZodRecord, ...Ue(i) })
      : new Kl({ keyType: Zn.create(), valueType: t, typeName: Ce.ZodRecord, ...Ue(r) });
  }
}
class nc extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== de.map)
      return oe(i, { code: J.invalid_type, expected: de.map, received: i.parsedType }), Ae;
    const l = this._def.keyType,
      o = this._def.valueType,
      f = [...i.data.entries()].map(([h, m], g) => ({
        key: l._parse(new ca(i, h, i.path, [g, 'key'])),
        value: o._parse(new ca(i, m, i.path, [g, 'value'])),
      }));
    if (i.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const m of f) {
          const g = await m.key,
            y = await m.value;
          if (g.status === 'aborted' || y.status === 'aborted') return Ae;
          (g.status === 'dirty' || y.status === 'dirty') && r.dirty(), h.set(g.value, y.value);
        }
        return { status: r.value, value: h };
      });
    } else {
      const h = new Map();
      for (const m of f) {
        const g = m.key,
          y = m.value;
        if (g.status === 'aborted' || y.status === 'aborted') return Ae;
        (g.status === 'dirty' || y.status === 'dirty') && r.dirty(), h.set(g.value, y.value);
      }
      return { status: r.value, value: h };
    }
  }
}
nc.create = (n, t, r) => new nc({ valueType: t, keyType: n, typeName: Ce.ZodMap, ...Ue(r) });
class li extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== de.set)
      return oe(i, { code: J.invalid_type, expected: de.set, received: i.parsedType }), Ae;
    const l = this._def;
    l.minSize !== null &&
      i.data.size < l.minSize.value &&
      (oe(i, {
        code: J.too_small,
        minimum: l.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: l.minSize.message,
      }),
      r.dirty()),
      l.maxSize !== null &&
        i.data.size > l.maxSize.value &&
        (oe(i, {
          code: J.too_big,
          maximum: l.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: l.maxSize.message,
        }),
        r.dirty());
    const o = this._def.valueType;
    function f(m) {
      const g = new Set();
      for (const y of m) {
        if (y.status === 'aborted') return Ae;
        y.status === 'dirty' && r.dirty(), g.add(y.value);
      }
      return { status: r.value, value: g };
    }
    const h = [...i.data.values()].map((m, g) => o._parse(new ca(i, m, i.path, g)));
    return i.common.async ? Promise.all(h).then((m) => f(m)) : f(h);
  }
  min(t, r) {
    return new li({ ...this._def, minSize: { value: t, message: ye.toString(r) } });
  }
  max(t, r) {
    return new li({ ...this._def, maxSize: { value: t, message: ye.toString(r) } });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
li.create = (n, t) =>
  new li({ valueType: n, minSize: null, maxSize: null, typeName: Ce.ZodSet, ...Ue(t) });
class is extends Be {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== de.function)
      return oe(r, { code: J.invalid_type, expected: de.function, received: r.parsedType }), Ae;
    function i(h, m) {
      return Io({
        data: h,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Xo(), ys].filter((g) => !!g),
        issueData: { code: J.invalid_arguments, argumentsError: m },
      });
    }
    function l(h, m) {
      return Io({
        data: h,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Xo(), ys].filter((g) => !!g),
        issueData: { code: J.invalid_return_type, returnTypeError: m },
      });
    }
    const o = { errorMap: r.common.contextualErrorMap },
      f = r.data;
    if (this._def.returns instanceof vs) {
      const h = this;
      return nn(async function (...m) {
        const g = new Sn([]),
          y = await h._def.args.parseAsync(m, o).catch((w) => {
            throw (g.addIssue(i(m, w)), g);
          }),
          v = await Reflect.apply(f, this, y);
        return await h._def.returns._def.type.parseAsync(v, o).catch((w) => {
          throw (g.addIssue(l(v, w)), g);
        });
      });
    } else {
      const h = this;
      return nn(function (...m) {
        const g = h._def.args.safeParse(m, o);
        if (!g.success) throw new Sn([i(m, g.error)]);
        const y = Reflect.apply(f, this, g.data),
          v = h._def.returns.safeParse(y, o);
        if (!v.success) throw new Sn([l(y, v.error)]);
        return v.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new is({ ...this._def, args: fa.create(t).rest(ri.create()) });
  }
  returns(t) {
    return new is({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, i) {
    return new is({
      args: t || fa.create([]).rest(ri.create()),
      returns: r || ri.create(),
      typeName: Ce.ZodFunction,
      ...Ue(i),
    });
  }
}
class Wl extends Be {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Wl.create = (n, t) => new Wl({ getter: n, typeName: Ce.ZodLazy, ...Ue(t) });
class Xl extends Be {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return oe(r, { received: r.data, code: J.invalid_literal, expected: this._def.value }), Ae;
    }
    return { status: 'valid', value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Xl.create = (n, t) => new Xl({ value: n, typeName: Ce.ZodLiteral, ...Ue(t) });
function tb(n, t) {
  return new Mr({ values: n, typeName: Ce.ZodEnum, ...Ue(t) });
}
class Mr extends Be {
  constructor() {
    super(...arguments), Rl.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const r = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        oe(r, { expected: Pe.joinValues(i), received: r.parsedType, code: J.invalid_type }), Ae
      );
    }
    if ((Jo(this, Rl) || X0(this, Rl, new Set(this._def.values)), !Jo(this, Rl).has(t.data))) {
      const r = this._getOrReturnCtx(t),
        i = this._def.values;
      return oe(r, { received: r.data, code: J.invalid_enum_value, options: i }), Ae;
    }
    return nn(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return Mr.create(t, { ...this._def, ...r });
  }
  exclude(t, r = this._def) {
    return Mr.create(
      this.options.filter((i) => !t.includes(i)),
      { ...this._def, ...r }
    );
  }
}
Rl = new WeakMap();
Mr.create = tb;
class Il extends Be {
  constructor() {
    super(...arguments), jl.set(this, void 0);
  }
  _parse(t) {
    const r = Pe.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(t);
    if (i.parsedType !== de.string && i.parsedType !== de.number) {
      const l = Pe.objectValues(r);
      return (
        oe(i, { expected: Pe.joinValues(l), received: i.parsedType, code: J.invalid_type }), Ae
      );
    }
    if (
      (Jo(this, jl) || X0(this, jl, new Set(Pe.getValidEnumValues(this._def.values))),
      !Jo(this, jl).has(t.data))
    ) {
      const l = Pe.objectValues(r);
      return oe(i, { received: i.data, code: J.invalid_enum_value, options: l }), Ae;
    }
    return nn(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
jl = new WeakMap();
Il.create = (n, t) => new Il({ values: n, typeName: Ce.ZodNativeEnum, ...Ue(t) });
class vs extends Be {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== de.promise && r.common.async === !1)
      return oe(r, { code: J.invalid_type, expected: de.promise, received: r.parsedType }), Ae;
    const i = r.parsedType === de.promise ? r.data : Promise.resolve(r.data);
    return nn(
      i.then((l) =>
        this._def.type.parseAsync(l, { path: r.path, errorMap: r.common.contextualErrorMap })
      )
    );
  }
}
vs.create = (n, t) => new vs({ type: n, typeName: Ce.ZodPromise, ...Ue(t) });
class Pn extends Be {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ce.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t),
      l = this._def.effect || null,
      o = {
        addIssue: (f) => {
          oe(i, f), f.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), l.type === 'preprocess')) {
      const f = l.transform(i.data, o);
      if (i.common.async)
        return Promise.resolve(f).then(async (h) => {
          if (r.value === 'aborted') return Ae;
          const m = await this._def.schema._parseAsync({ data: h, path: i.path, parent: i });
          return m.status === 'aborted'
            ? Ae
            : m.status === 'dirty' || r.value === 'dirty'
              ? rs(m.value)
              : m;
        });
      {
        if (r.value === 'aborted') return Ae;
        const h = this._def.schema._parseSync({ data: f, path: i.path, parent: i });
        return h.status === 'aborted'
          ? Ae
          : h.status === 'dirty' || r.value === 'dirty'
            ? rs(h.value)
            : h;
      }
    }
    if (l.type === 'refinement') {
      const f = (h) => {
        const m = l.refinement(h, o);
        if (i.common.async) return Promise.resolve(m);
        if (m instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return h;
      };
      if (i.common.async === !1) {
        const h = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
        return h.status === 'aborted'
          ? Ae
          : (h.status === 'dirty' && r.dirty(), f(h.value), { status: r.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((h) =>
            h.status === 'aborted'
              ? Ae
              : (h.status === 'dirty' && r.dirty(),
                f(h.value).then(() => ({ status: r.value, value: h.value })))
          );
    }
    if (l.type === 'transform')
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
        if (!ii(f)) return f;
        const h = l.transform(f.value, o);
        if (h instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return { status: r.value, value: h };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((f) =>
          ii(f)
            ? Promise.resolve(l.transform(f.value, o)).then((h) => ({
                status: r.value,
                value: h,
              }))
            : f
        );
    Pe.assertNever(l);
  }
}
Pn.create = (n, t, r) => new Pn({ schema: n, typeName: Ce.ZodEffects, effect: t, ...Ue(r) });
Pn.createWithPreprocess = (n, t, r) =>
  new Pn({
    schema: t,
    effect: { type: 'preprocess', transform: n },
    typeName: Ce.ZodEffects,
    ...Ue(r),
  });
class la extends Be {
  _parse(t) {
    return this._getType(t) === de.undefined ? nn(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
la.create = (n, t) => new la({ innerType: n, typeName: Ce.ZodOptional, ...Ue(t) });
class Dr extends Be {
  _parse(t) {
    return this._getType(t) === de.null ? nn(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dr.create = (n, t) => new Dr({ innerType: n, typeName: Ce.ZodNullable, ...Ue(t) });
class Jl extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let i = r.data;
    return (
      r.parsedType === de.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Jl.create = (n, t) =>
  new Jl({
    innerType: n,
    typeName: Ce.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...Ue(t),
  });
class eu extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = { ...r, common: { ...r.common, issues: [] } },
      l = this._def.innerType._parse({ data: i.data, path: i.path, parent: { ...i } });
    return Zl(l)
      ? l.then((o) => ({
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Sn(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            l.status === 'valid'
              ? l.value
              : this._def.catchValue({
                  get error() {
                    return new Sn(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
eu.create = (n, t) =>
  new eu({
    innerType: n,
    typeName: Ce.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...Ue(t),
  });
class ac extends Be {
  _parse(t) {
    if (this._getType(t) !== de.nan) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.nan, received: i.parsedType }), Ae;
    }
    return { status: 'valid', value: t.data };
  }
}
ac.create = (n) => new ac({ typeName: Ce.ZodNaN, ...Ue(n) });
const QO = Symbol('zod_brand');
class Lh extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = r.data;
    return this._def.type._parse({ data: i, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class gu extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({ data: i.data, path: i.path, parent: i });
        return o.status === 'aborted'
          ? Ae
          : o.status === 'dirty'
            ? (r.dirty(), rs(o.value))
            : this._def.out._parseAsync({ data: o.value, path: i.path, parent: i });
      })();
    {
      const l = this._def.in._parseSync({ data: i.data, path: i.path, parent: i });
      return l.status === 'aborted'
        ? Ae
        : l.status === 'dirty'
          ? (r.dirty(), { status: 'dirty', value: l.value })
          : this._def.out._parseSync({ data: l.value, path: i.path, parent: i });
    }
  }
  static create(t, r) {
    return new gu({ in: t, out: r, typeName: Ce.ZodPipeline });
  }
}
class tu extends Be {
  _parse(t) {
    const r = this._def.innerType._parse(t),
      i = (l) => (ii(l) && (l.value = Object.freeze(l.value)), l);
    return Zl(r) ? r.then((l) => i(l)) : i(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tu.create = (n, t) => new tu({ innerType: n, typeName: Ce.ZodReadonly, ...Ue(t) });
function ov(n, t) {
  const r = typeof n == 'function' ? n(t) : typeof n == 'string' ? { message: n } : n;
  return typeof r == 'string' ? { message: r } : r;
}
function nb(n, t = {}, r) {
  return n
    ? ps.create().superRefine((i, l) => {
        var o, f;
        const h = n(i);
        if (h instanceof Promise)
          return h.then((m) => {
            var g, y;
            if (!m) {
              const v = ov(t, i),
                b =
                  (y = (g = v.fatal) !== null && g !== void 0 ? g : r) !== null && y !== void 0
                    ? y
                    : !0;
              l.addIssue({ code: 'custom', ...v, fatal: b });
            }
          });
        if (!h) {
          const m = ov(t, i),
            g =
              (f = (o = m.fatal) !== null && o !== void 0 ? o : r) !== null && f !== void 0
                ? f
                : !0;
          l.addIssue({ code: 'custom', ...m, fatal: g });
        }
      })
    : ps.create();
}
const KO = { object: ht.lazycreate };
var Ce;
(function (n) {
  (n.ZodString = 'ZodString'),
    (n.ZodNumber = 'ZodNumber'),
    (n.ZodNaN = 'ZodNaN'),
    (n.ZodBigInt = 'ZodBigInt'),
    (n.ZodBoolean = 'ZodBoolean'),
    (n.ZodDate = 'ZodDate'),
    (n.ZodSymbol = 'ZodSymbol'),
    (n.ZodUndefined = 'ZodUndefined'),
    (n.ZodNull = 'ZodNull'),
    (n.ZodAny = 'ZodAny'),
    (n.ZodUnknown = 'ZodUnknown'),
    (n.ZodNever = 'ZodNever'),
    (n.ZodVoid = 'ZodVoid'),
    (n.ZodArray = 'ZodArray'),
    (n.ZodObject = 'ZodObject'),
    (n.ZodUnion = 'ZodUnion'),
    (n.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (n.ZodIntersection = 'ZodIntersection'),
    (n.ZodTuple = 'ZodTuple'),
    (n.ZodRecord = 'ZodRecord'),
    (n.ZodMap = 'ZodMap'),
    (n.ZodSet = 'ZodSet'),
    (n.ZodFunction = 'ZodFunction'),
    (n.ZodLazy = 'ZodLazy'),
    (n.ZodLiteral = 'ZodLiteral'),
    (n.ZodEnum = 'ZodEnum'),
    (n.ZodEffects = 'ZodEffects'),
    (n.ZodNativeEnum = 'ZodNativeEnum'),
    (n.ZodOptional = 'ZodOptional'),
    (n.ZodNullable = 'ZodNullable'),
    (n.ZodDefault = 'ZodDefault'),
    (n.ZodCatch = 'ZodCatch'),
    (n.ZodPromise = 'ZodPromise'),
    (n.ZodBranded = 'ZodBranded'),
    (n.ZodPipeline = 'ZodPipeline'),
    (n.ZodReadonly = 'ZodReadonly');
})(Ce || (Ce = {}));
const WO = (n, t = { message: `Input not instance of ${n.name}` }) => nb((r) => r instanceof n, t),
  ab = Zn.create,
  rb = Tr.create,
  XO = ac.create,
  IO = Cr.create,
  ib = Fl.create,
  JO = si.create,
  eE = ec.create,
  tE = Gl.create,
  nE = Pl.create,
  aE = ps.create,
  rE = ri.create,
  iE = Ya.create,
  sE = tc.create,
  lE = Gn.create,
  uE = ht.create,
  oE = ht.strictCreate,
  cE = $l.create,
  fE = vc.create,
  dE = Ql.create,
  hE = fa.create,
  mE = Kl.create,
  gE = nc.create,
  yE = li.create,
  pE = is.create,
  vE = Wl.create,
  bE = Xl.create,
  _E = Mr.create,
  SE = Il.create,
  xE = vs.create,
  cv = Pn.create,
  wE = la.create,
  OE = Dr.create,
  EE = Pn.createWithPreprocess,
  TE = gu.create,
  CE = () => ab().optional(),
  ME = () => rb().optional(),
  DE = () => ib().optional(),
  NE = {
    string: (n) => Zn.create({ ...n, coerce: !0 }),
    number: (n) => Tr.create({ ...n, coerce: !0 }),
    boolean: (n) => Fl.create({ ...n, coerce: !0 }),
    bigint: (n) => Cr.create({ ...n, coerce: !0 }),
    date: (n) => si.create({ ...n, coerce: !0 }),
  },
  AE = Ae;
var ne = Object.freeze({
  __proto__: null,
  defaultErrorMap: ys,
  setErrorMap: EO,
  getErrorMap: Xo,
  makeIssue: Io,
  EMPTY_PATH: TO,
  addIssueToContext: oe,
  ParseStatus: Kt,
  INVALID: Ae,
  DIRTY: rs,
  OK: nn,
  isAborted: mh,
  isDirty: gh,
  isValid: ii,
  isAsync: Zl,
  get util() {
    return Pe;
  },
  get objectUtil() {
    return hh;
  },
  ZodParsedType: de,
  getParsedType: ja,
  ZodType: Be,
  datetimeRegex: eb,
  ZodString: Zn,
  ZodNumber: Tr,
  ZodBigInt: Cr,
  ZodBoolean: Fl,
  ZodDate: si,
  ZodSymbol: ec,
  ZodUndefined: Gl,
  ZodNull: Pl,
  ZodAny: ps,
  ZodUnknown: ri,
  ZodNever: Ya,
  ZodVoid: tc,
  ZodArray: Gn,
  ZodObject: ht,
  ZodUnion: $l,
  ZodDiscriminatedUnion: vc,
  ZodIntersection: Ql,
  ZodTuple: fa,
  ZodRecord: Kl,
  ZodMap: nc,
  ZodSet: li,
  ZodFunction: is,
  ZodLazy: Wl,
  ZodLiteral: Xl,
  ZodEnum: Mr,
  ZodNativeEnum: Il,
  ZodPromise: vs,
  ZodEffects: Pn,
  ZodTransformer: Pn,
  ZodOptional: la,
  ZodNullable: Dr,
  ZodDefault: Jl,
  ZodCatch: eu,
  ZodNaN: ac,
  BRAND: QO,
  ZodBranded: Lh,
  ZodPipeline: gu,
  ZodReadonly: tu,
  custom: nb,
  Schema: Be,
  ZodSchema: Be,
  late: KO,
  get ZodFirstPartyTypeKind() {
    return Ce;
  },
  coerce: NE,
  any: aE,
  array: lE,
  bigint: IO,
  boolean: ib,
  date: JO,
  discriminatedUnion: fE,
  effect: cv,
  enum: _E,
  function: pE,
  instanceof: WO,
  intersection: dE,
  lazy: vE,
  literal: bE,
  map: gE,
  nan: XO,
  nativeEnum: SE,
  never: iE,
  null: nE,
  nullable: OE,
  number: rb,
  object: uE,
  oboolean: DE,
  onumber: ME,
  optional: wE,
  ostring: CE,
  pipeline: TE,
  preprocess: EE,
  promise: xE,
  record: mE,
  set: yE,
  strictObject: oE,
  string: ab,
  symbol: eE,
  transformer: cv,
  tuple: hE,
  undefined: tE,
  union: cE,
  unknown: rE,
  void: sE,
  NEVER: AE,
  ZodIssueCode: J,
  quotelessJson: OO,
  ZodError: Sn,
});
const kE = ne.object({
  email: ne
    .string()
    .min(1, 'Email is required')
    .superRefine((n, t) => {
      n !== n.trim() &&
        t.addIssue({
          code: ne.ZodIssueCode.custom,
          message: 'Email must not have leading or trailing spaces',
        }),
        n.includes('@') ||
          t.addIssue({ code: ne.ZodIssueCode.custom, message: "Email must contain an '@' symbol" }),
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(n) ||
          t.addIssue({
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
    .refine((n) => !/\s/.test(n), { message: 'Password must not contain spaces' }),
});
function RE(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    'customer' in n &&
    typeof n.customer == 'object' &&
    n.customer !== null &&
    'id' in n.customer &&
    typeof n.customer.id == 'string' &&
    'email' in n.customer &&
    typeof n.customer.email == 'string'
  );
}
function jE(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    'access_token' in n &&
    typeof n.access_token == 'string' &&
    'expires_in' in n &&
    typeof n.expires_in == 'number' &&
    'refresh_token' in n &&
    typeof n.refresh_token == 'string' &&
    'scope' in n &&
    typeof n.scope == 'string' &&
    'token_type' in n &&
    typeof n.token_type == 'string'
  );
}
async function zE() {
  const n = `${Ro.clientId}:${Ro.secretId}`,
    t = btoa(n);
  try {
    const r = await fetch(`https://auth.${Ro.region}.commercetools.com/oauth/token`, {
      method: 'POST',
      headers: { Authorization: `Basic ${t}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&scope=manage_customers:${Ro.projectKey}`,
    });
    if (!r.ok) {
      const l = await r.json().catch(() => ({}));
      throw new Error(
        typeof l == 'object' && l !== null && 'message' in l && typeof l.message == 'string'
          ? l.message
          : 'Login failed'
      );
    }
    const i = await r.json();
    if (!i || typeof i != 'object' || !('access_token' in i) || typeof i.access_token != 'string')
      throw new Error('Unknown error occurred during getting token');
    return i.access_token;
  } catch (r) {
    const i = r instanceof Error ? r.message : 'Unknown error occurred';
    throw new Error(i);
  }
}
const Ro = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function UE(n, t) {
  const r = `${n.clientId}:${n.secretId}`,
    i = btoa(r);
  try {
    const l = await fetch(
      `https://auth.${n.region}.commercetools.com/oauth/${n.projectKey}/customers/token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${i}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: t.email,
          password: t.password,
          scope: `manage_customers:${n.projectKey}`,
        }).toString(),
      }
    );
    if (!l.ok) {
      const f = await l.json().catch(() => ({}));
      throw new Error(
        typeof f == 'object' && f !== null && 'message' in f && typeof f.message == 'string'
          ? f.message
          : 'Login failed'
      );
    }
    const o = await l.json();
    if (!jE(o)) throw new Error('Unknown error occurred during getting token');
    return o;
  } catch (l) {
    const o = l instanceof Error ? l.message : 'Unknown error occurred';
    throw new Error(o);
  }
}
const Kd = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function LE(n) {
  const t = await zE();
  if (!t) throw new Error('Failed to get login token');
  try {
    const r = await fetch(`https://api.${Kd.region}.commercetools.com/${Kd.projectKey}/login`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(n),
    });
    if (!r.ok) {
      const o = await r.json();
      throw new Error(
        typeof o == 'object' && o !== null && 'message' in o && typeof o.message == 'string'
          ? o.message
          : 'Login failed'
      );
    }
    const i = await r.json();
    if (!RE(i)) throw new Error('Invalid login response format');
    const l = await UE(Kd, n);
    return (
      localStorage.setItem('firstName', i.customer.firstName),
      localStorage.setItem('refreshToken', l.refresh_token),
      i
    );
  } catch (r) {
    const i = r instanceof Error ? r.message : 'Unknown error occurred';
    throw new Error(i);
  }
}
function BE() {
  var h, m;
  const {
      register: n,
      handleSubmit: t,
      formState: { errors: r, isValid: i },
      setError: l,
    } = $0({ mode: 'onChange', resolver: K0(kE) }),
    o = an(),
    f = async (g) => {
      try {
        'customer' in (await LE(g))
          ? await o('/')
          : l('root', { type: 'manual', message: 'Invalid email or password' });
      } catch (y) {
        const v = y instanceof Error ? y.message : 'Something went wrong';
        l('root', { type: 'manual', message: v });
      }
    };
  return x.jsxs('section', {
    className:
      'w-[35%] p-[10px] font-main rounded-[20px] text-xl min-w-[300px] !text-goldenrod max-[400px]:p-[3px], max-[400px]:min-w-[250px]',
    children: [
      x.jsxs('form', {
        className: 'flex flex-col gap-6',
        onSubmit: (g) => {
          g.preventDefault(), t(f)(g);
        },
        children: [
          x.jsx('h1', {
            className: 'font-additional self-center text-3xl font-bold',
            children: ' Login ',
          }),
          x.jsx(Qp, {
            register: n('email'),
            errorMessage: (h = r.email) == null ? void 0 : h.message,
            type: 'text',
            label: 'Email',
            placeholder: 'Enter you email',
            required: !0,
          }),
          x.jsx(Qp, {
            register: n('password'),
            errorMessage: (m = r.password) == null ? void 0 : m.message,
            type: 'password',
            label: 'Password',
            placeholder: 'Enter you password',
            required: !0,
          }),
          x.jsx('button', {
            type: 'submit',
            className:
              'w-[100%] m-auto !border-[2px] rounded-lg border-goldenrod !bg-goldenrod text-white hover:!bg-goldenrod/70 hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-olive focus:!outline-0',
            disabled: !i,
            children: 'Login',
          }),
        ],
      }),
      r.root && x.jsx('p', { className: 'text-red-500 text-xl mt-2', children: r.root.message }),
      x.jsxs('div', {
        children: [
          x.jsx('p', { children: "Don't have an account?" }),
          x.jsx('a', {
            onClick: () => void o('/registration'),
            className: '!text-olive hover:!text-goldenrod cursor-pointer',
            children: 'Sign Up!',
          }),
        ],
      }),
    ],
  });
}
function HE() {
  const n = an(),
    t = !!localStorage.getItem('firstName');
  return (
    R.useEffect(() => {
      t && n('/', { replace: !0 });
    }, [t, n]),
    x.jsx('section', {
      className: 'w-screen flex justify-center max-w-[1440px] m-auto items-center mw',
      children: x.jsx(BE, {}),
    })
  );
}
const sb = [
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
function VE({ error: n, id: t, register: r }) {
  return x.jsxs('div', {
    className: 'relative flex flex-wrap w-[300px]',
    children: [
      x.jsx('label', {
        className: 'p-1 capitalize text-goldenrod font-medium w-[300px] font-main',
        htmlFor: t,
        children: 'Country',
      }),
      x.jsxs('select', {
        className:
          'capitalize p-1 bg-khaki rounded-lg text-olive min-w-[300px] inline-block hover:cursor-pointer',
        defaultValue: '',
        id: t,
        name: t,
        ...r,
        children: [
          x.jsx('option', { value: '', disabled: !0, hidden: !0, children: 'Select a country' }),
          sb.map(({ code: i, name: l }) =>
            x.jsx('option', { value: i, className: 'text-olive', children: l }, i)
          ),
        ],
      }),
      x.jsx('p', {
        className: 'text-sm text-coral h-5 p-1 w-[300px] break-words whitespace-normal',
        children: n ?? ' ',
      }),
    ],
  });
}
const lb = 6048e5,
  qE = 864e5,
  fv = Symbol.for('constructDateFrom');
function At(n, t) {
  return typeof n == 'function'
    ? n(t)
    : n && typeof n == 'object' && fv in n
      ? n[fv](t)
      : n instanceof Date
        ? new n.constructor(t)
        : new Date(t);
}
function lt(n, t) {
  return At(t || n, n);
}
function ub(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in);
  return isNaN(t) ? At(n, NaN) : (t && i.setDate(i.getDate() + t), i);
}
function ob(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in);
  if (isNaN(t)) return At(n, NaN);
  if (!t) return i;
  const l = i.getDate(),
    o = At(n, i.getTime());
  o.setMonth(i.getMonth() + t + 1, 0);
  const f = o.getDate();
  return l >= f ? o : (i.setFullYear(o.getFullYear(), o.getMonth(), l), i);
}
let YE = {};
function yu() {
  return YE;
}
function bs(n, t) {
  var h, m, g, y;
  const r = yu(),
    i =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.weekStartsOn) ??
      r.weekStartsOn ??
      ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ??
      0,
    l = lt(n, t == null ? void 0 : t.in),
    o = l.getDay(),
    f = (o < i ? 7 : 0) + o - i;
  return l.setDate(l.getDate() - f), l.setHours(0, 0, 0, 0), l;
}
function nu(n, t) {
  return bs(n, { ...t, weekStartsOn: 1 });
}
function cb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = At(r, 0);
  l.setFullYear(i + 1, 0, 4), l.setHours(0, 0, 0, 0);
  const o = nu(l),
    f = At(r, 0);
  f.setFullYear(i, 0, 4), f.setHours(0, 0, 0, 0);
  const h = nu(f);
  return r.getTime() >= o.getTime() ? i + 1 : r.getTime() >= h.getTime() ? i : i - 1;
}
function dv(n) {
  const t = lt(n),
    r = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return r.setUTCFullYear(t.getFullYear()), +n - +r;
}
function ws(n, ...t) {
  const r = At.bind(
    null,
    t.find((i) => typeof i == 'object')
  );
  return t.map(r);
}
function au(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function fb(n, t, r) {
  const [i, l] = ws(r == null ? void 0 : r.in, n, t),
    o = au(i),
    f = au(l),
    h = +o - dv(o),
    m = +f - dv(f);
  return Math.round((h - m) / qE);
}
function ZE(n, t) {
  const r = cb(n, t),
    i = At(n, 0);
  return i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0), nu(i);
}
function FE(n, t, r) {
  return ub(n, t * 7, r);
}
function GE(n, t, r) {
  return ob(n, t * 12, r);
}
function PE(n, t) {
  let r,
    i = t == null ? void 0 : t.in;
  return (
    n.forEach((l) => {
      !i && typeof l == 'object' && (i = At.bind(null, l));
      const o = lt(l, i);
      (!r || r < o || isNaN(+o)) && (r = o);
    }),
    At(i, r || NaN)
  );
}
function $E(n, t) {
  let r,
    i = t == null ? void 0 : t.in;
  return (
    n.forEach((l) => {
      !i && typeof l == 'object' && (i = At.bind(null, l));
      const o = lt(l, i);
      (!r || r > o || isNaN(+o)) && (r = o);
    }),
    At(i, r || NaN)
  );
}
function QE(n, t, r) {
  const [i, l] = ws(r == null ? void 0 : r.in, n, t);
  return +au(i) == +au(l);
}
function db(n) {
  return (
    n instanceof Date ||
    (typeof n == 'object' && Object.prototype.toString.call(n) === '[object Date]')
  );
}
function KE(n) {
  return !((!db(n) && typeof n != 'number') || isNaN(+lt(n)));
}
function WE(n, t, r) {
  const [i, l] = ws(r == null ? void 0 : r.in, n, t),
    o = i.getFullYear() - l.getFullYear(),
    f = i.getMonth() - l.getMonth();
  return o * 12 + f;
}
function XE(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getMonth();
  return r.setFullYear(r.getFullYear(), i + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function IE(n, t) {
  const [r, i] = ws(n, t.start, t.end);
  return { start: r, end: i };
}
function JE(n, t) {
  const { start: r, end: i } = IE(t == null ? void 0 : t.in, n);
  let l = +r > +i;
  const o = l ? +r : +i,
    f = l ? i : r;
  f.setHours(0, 0, 0, 0), f.setDate(1);
  let h = 1;
  const m = [];
  for (; +f <= o; ) m.push(At(r, f)), f.setMonth(f.getMonth() + h);
  return l ? m.reverse() : m;
}
function e2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function t2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear();
  return r.setFullYear(i + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function hb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function mb(n, t) {
  var h, m, g, y;
  const r = yu(),
    i =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.weekStartsOn) ??
      r.weekStartsOn ??
      ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ??
      0,
    l = lt(n, t == null ? void 0 : t.in),
    o = l.getDay(),
    f = (o < i ? -7 : 0) + 6 - (o - i);
  return l.setDate(l.getDate() + f), l.setHours(23, 59, 59, 999), l;
}
function n2(n, t) {
  return mb(n, { ...t, weekStartsOn: 1 });
}
const a2 = {
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
  r2 = (n, t, r) => {
    let i;
    const l = a2[n];
    return (
      typeof l == 'string'
        ? (i = l)
        : t === 1
          ? (i = l.one)
          : (i = l.other.replace('{{count}}', t.toString())),
      r != null && r.addSuffix ? (r.comparison && r.comparison > 0 ? 'in ' + i : i + ' ago') : i
    );
  };
function Wd(n) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[r] || n.formats[n.defaultWidth];
  };
}
const i2 = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  s2 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  l2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  u2 = {
    date: Wd({ formats: i2, defaultWidth: 'full' }),
    time: Wd({ formats: s2, defaultWidth: 'full' }),
    dateTime: Wd({ formats: l2, defaultWidth: 'full' }),
  },
  o2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  c2 = (n, t, r, i) => o2[n];
function Ml(n) {
  return (t, r) => {
    const i = r != null && r.context ? String(r.context) : 'standalone';
    let l;
    if (i === 'formatting' && n.formattingValues) {
      const f = n.defaultFormattingWidth || n.defaultWidth,
        h = r != null && r.width ? String(r.width) : f;
      l = n.formattingValues[h] || n.formattingValues[f];
    } else {
      const f = n.defaultWidth,
        h = r != null && r.width ? String(r.width) : n.defaultWidth;
      l = n.values[h] || n.values[f];
    }
    const o = n.argumentCallback ? n.argumentCallback(t) : t;
    return l[o];
  };
}
const f2 = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  d2 = {
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
  m2 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  g2 = {
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
  y2 = {
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
  p2 = (n, t) => {
    const r = Number(n),
      i = r % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return r + 'st';
        case 2:
          return r + 'nd';
        case 3:
          return r + 'rd';
      }
    return r + 'th';
  },
  v2 = {
    ordinalNumber: p2,
    era: Ml({ values: f2, defaultWidth: 'wide' }),
    quarter: Ml({ values: d2, defaultWidth: 'wide', argumentCallback: (n) => n - 1 }),
    month: Ml({ values: h2, defaultWidth: 'wide' }),
    day: Ml({ values: m2, defaultWidth: 'wide' }),
    dayPeriod: Ml({
      values: g2,
      defaultWidth: 'wide',
      formattingValues: y2,
      defaultFormattingWidth: 'wide',
    }),
  };
function Dl(n) {
  return (t, r = {}) => {
    const i = r.width,
      l = (i && n.matchPatterns[i]) || n.matchPatterns[n.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const f = o[0],
      h = (i && n.parsePatterns[i]) || n.parsePatterns[n.defaultParseWidth],
      m = Array.isArray(h) ? _2(h, (v) => v.test(f)) : b2(h, (v) => v.test(f));
    let g;
    (g = n.valueCallback ? n.valueCallback(m) : m), (g = r.valueCallback ? r.valueCallback(g) : g);
    const y = t.slice(f.length);
    return { value: g, rest: y };
  };
}
function b2(n, t) {
  for (const r in n) if (Object.prototype.hasOwnProperty.call(n, r) && t(n[r])) return r;
}
function _2(n, t) {
  for (let r = 0; r < n.length; r++) if (t(n[r])) return r;
}
function S2(n) {
  return (t, r = {}) => {
    const i = t.match(n.matchPattern);
    if (!i) return null;
    const l = i[0],
      o = t.match(n.parsePattern);
    if (!o) return null;
    let f = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    f = r.valueCallback ? r.valueCallback(f) : f;
    const h = t.slice(l.length);
    return { value: f, rest: h };
  };
}
const x2 = /^(\d+)(th|st|nd|rd)?/i,
  w2 = /\d+/i,
  O2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  E2 = { any: [/^b/i, /^(a|c)/i] },
  T2 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  C2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  M2 = {
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
  N2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  A2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  k2 = {
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
    ordinalNumber: S2({
      matchPattern: x2,
      parsePattern: w2,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: Dl({
      matchPatterns: O2,
      defaultMatchWidth: 'wide',
      parsePatterns: E2,
      defaultParseWidth: 'any',
    }),
    quarter: Dl({
      matchPatterns: T2,
      defaultMatchWidth: 'wide',
      parsePatterns: C2,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: Dl({
      matchPatterns: M2,
      defaultMatchWidth: 'wide',
      parsePatterns: D2,
      defaultParseWidth: 'any',
    }),
    day: Dl({
      matchPatterns: N2,
      defaultMatchWidth: 'wide',
      parsePatterns: A2,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Dl({
      matchPatterns: k2,
      defaultMatchWidth: 'any',
      parsePatterns: R2,
      defaultParseWidth: 'any',
    }),
  },
  Bh = {
    code: 'en-US',
    formatDistance: r2,
    formatLong: u2,
    formatRelative: c2,
    localize: v2,
    match: j2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function z2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return fb(r, hb(r)) + 1;
}
function gb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = +nu(r) - +ZE(r);
  return Math.round(i / lb) + 1;
}
function yb(n, t) {
  var y, v, b, w;
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = yu(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((v = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((w = (b = l.locale) == null ? void 0 : b.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    f = At((t == null ? void 0 : t.in) || n, 0);
  f.setFullYear(i + 1, 0, o), f.setHours(0, 0, 0, 0);
  const h = bs(f, t),
    m = At((t == null ? void 0 : t.in) || n, 0);
  m.setFullYear(i, 0, o), m.setHours(0, 0, 0, 0);
  const g = bs(m, t);
  return +r >= +h ? i + 1 : +r >= +g ? i : i - 1;
}
function U2(n, t) {
  var h, m, g, y;
  const r = yu(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((y = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : y.firstWeekContainsDate) ??
      1,
    l = yb(n, t),
    o = At((t == null ? void 0 : t.in) || n, 0);
  return o.setFullYear(l, 0, i), o.setHours(0, 0, 0, 0), bs(o, t);
}
function pb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = +bs(r, t) - +U2(r, t);
  return Math.round(i / lb) + 1;
}
function nt(n, t) {
  const r = n < 0 ? '-' : '',
    i = Math.abs(n).toString().padStart(t, '0');
  return r + i;
}
const vr = {
    y(n, t) {
      const r = n.getFullYear(),
        i = r > 0 ? r : 1 - r;
      return nt(t === 'yy' ? i % 100 : i, t.length);
    },
    M(n, t) {
      const r = n.getMonth();
      return t === 'M' ? String(r + 1) : nt(r + 1, 2);
    },
    d(n, t) {
      return nt(n.getDate(), t.length);
    },
    a(n, t) {
      const r = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return r.toUpperCase();
        case 'aaa':
          return r;
        case 'aaaaa':
          return r[0];
        case 'aaaa':
        default:
          return r === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(n, t) {
      return nt(n.getHours() % 12 || 12, t.length);
    },
    H(n, t) {
      return nt(n.getHours(), t.length);
    },
    m(n, t) {
      return nt(n.getMinutes(), t.length);
    },
    s(n, t) {
      return nt(n.getSeconds(), t.length);
    },
    S(n, t) {
      const r = t.length,
        i = n.getMilliseconds(),
        l = Math.trunc(i * Math.pow(10, r - 3));
      return nt(l, t.length);
    },
  },
  es = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  hv = {
    G: function (n, t, r) {
      const i = n.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case 'G':
        case 'GG':
        case 'GGG':
          return r.era(i, { width: 'abbreviated' });
        case 'GGGGG':
          return r.era(i, { width: 'narrow' });
        case 'GGGG':
        default:
          return r.era(i, { width: 'wide' });
      }
    },
    y: function (n, t, r) {
      if (t === 'yo') {
        const i = n.getFullYear(),
          l = i > 0 ? i : 1 - i;
        return r.ordinalNumber(l, { unit: 'year' });
      }
      return vr.y(n, t);
    },
    Y: function (n, t, r, i) {
      const l = yb(n, i),
        o = l > 0 ? l : 1 - l;
      if (t === 'YY') {
        const f = o % 100;
        return nt(f, 2);
      }
      return t === 'Yo' ? r.ordinalNumber(o, { unit: 'year' }) : nt(o, t.length);
    },
    R: function (n, t) {
      const r = cb(n);
      return nt(r, t.length);
    },
    u: function (n, t) {
      const r = n.getFullYear();
      return nt(r, t.length);
    },
    Q: function (n, t, r) {
      const i = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(i);
        case 'QQ':
          return nt(i, 2);
        case 'Qo':
          return r.ordinalNumber(i, { unit: 'quarter' });
        case 'QQQ':
          return r.quarter(i, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return r.quarter(i, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return r.quarter(i, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (n, t, r) {
      const i = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'q':
          return String(i);
        case 'qq':
          return nt(i, 2);
        case 'qo':
          return r.ordinalNumber(i, { unit: 'quarter' });
        case 'qqq':
          return r.quarter(i, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return r.quarter(i, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return r.quarter(i, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (n, t, r) {
      const i = n.getMonth();
      switch (t) {
        case 'M':
        case 'MM':
          return vr.M(n, t);
        case 'Mo':
          return r.ordinalNumber(i + 1, { unit: 'month' });
        case 'MMM':
          return r.month(i, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return r.month(i, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return r.month(i, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (n, t, r) {
      const i = n.getMonth();
      switch (t) {
        case 'L':
          return String(i + 1);
        case 'LL':
          return nt(i + 1, 2);
        case 'Lo':
          return r.ordinalNumber(i + 1, { unit: 'month' });
        case 'LLL':
          return r.month(i, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return r.month(i, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return r.month(i, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (n, t, r, i) {
      const l = pb(n, i);
      return t === 'wo' ? r.ordinalNumber(l, { unit: 'week' }) : nt(l, t.length);
    },
    I: function (n, t, r) {
      const i = gb(n);
      return t === 'Io' ? r.ordinalNumber(i, { unit: 'week' }) : nt(i, t.length);
    },
    d: function (n, t, r) {
      return t === 'do' ? r.ordinalNumber(n.getDate(), { unit: 'date' }) : vr.d(n, t);
    },
    D: function (n, t, r) {
      const i = z2(n);
      return t === 'Do' ? r.ordinalNumber(i, { unit: 'dayOfYear' }) : nt(i, t.length);
    },
    E: function (n, t, r) {
      const i = n.getDay();
      switch (t) {
        case 'E':
        case 'EE':
        case 'EEE':
          return r.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return r.day(i, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return r.day(i, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return r.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (n, t, r, i) {
      const l = n.getDay(),
        o = (l - i.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'e':
          return String(o);
        case 'ee':
          return nt(o, 2);
        case 'eo':
          return r.ordinalNumber(o, { unit: 'day' });
        case 'eee':
          return r.day(l, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return r.day(l, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return r.day(l, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return r.day(l, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (n, t, r, i) {
      const l = n.getDay(),
        o = (l - i.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'c':
          return String(o);
        case 'cc':
          return nt(o, t.length);
        case 'co':
          return r.ordinalNumber(o, { unit: 'day' });
        case 'ccc':
          return r.day(l, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return r.day(l, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return r.day(l, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return r.day(l, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (n, t, r) {
      const i = n.getDay(),
        l = i === 0 ? 7 : i;
      switch (t) {
        case 'i':
          return String(l);
        case 'ii':
          return nt(l, t.length);
        case 'io':
          return r.ordinalNumber(l, { unit: 'day' });
        case 'iii':
          return r.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return r.day(i, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return r.day(i, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return r.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (n, t, r) {
      const l = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return r.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return r.dayPeriod(l, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return r.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return r.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (n, t, r) {
      const i = n.getHours();
      let l;
      switch (
        (i === 12 ? (l = es.noon) : i === 0 ? (l = es.midnight) : (l = i / 12 >= 1 ? 'pm' : 'am'),
        t)
      ) {
        case 'b':
        case 'bb':
          return r.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return r.dayPeriod(l, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return r.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return r.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (n, t, r) {
      const i = n.getHours();
      let l;
      switch (
        (i >= 17
          ? (l = es.evening)
          : i >= 12
            ? (l = es.afternoon)
            : i >= 4
              ? (l = es.morning)
              : (l = es.night),
        t)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return r.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return r.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return r.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (n, t, r) {
      if (t === 'ho') {
        let i = n.getHours() % 12;
        return i === 0 && (i = 12), r.ordinalNumber(i, { unit: 'hour' });
      }
      return vr.h(n, t);
    },
    H: function (n, t, r) {
      return t === 'Ho' ? r.ordinalNumber(n.getHours(), { unit: 'hour' }) : vr.H(n, t);
    },
    K: function (n, t, r) {
      const i = n.getHours() % 12;
      return t === 'Ko' ? r.ordinalNumber(i, { unit: 'hour' }) : nt(i, t.length);
    },
    k: function (n, t, r) {
      let i = n.getHours();
      return (
        i === 0 && (i = 24), t === 'ko' ? r.ordinalNumber(i, { unit: 'hour' }) : nt(i, t.length)
      );
    },
    m: function (n, t, r) {
      return t === 'mo' ? r.ordinalNumber(n.getMinutes(), { unit: 'minute' }) : vr.m(n, t);
    },
    s: function (n, t, r) {
      return t === 'so' ? r.ordinalNumber(n.getSeconds(), { unit: 'second' }) : vr.s(n, t);
    },
    S: function (n, t) {
      return vr.S(n, t);
    },
    X: function (n, t, r) {
      const i = n.getTimezoneOffset();
      if (i === 0) return 'Z';
      switch (t) {
        case 'X':
          return gv(i);
        case 'XXXX':
        case 'XX':
          return Wr(i);
        case 'XXXXX':
        case 'XXX':
        default:
          return Wr(i, ':');
      }
    },
    x: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'x':
          return gv(i);
        case 'xxxx':
        case 'xx':
          return Wr(i);
        case 'xxxxx':
        case 'xxx':
        default:
          return Wr(i, ':');
      }
    },
    O: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + mv(i, ':');
        case 'OOOO':
        default:
          return 'GMT' + Wr(i, ':');
      }
    },
    z: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + mv(i, ':');
        case 'zzzz':
        default:
          return 'GMT' + Wr(i, ':');
      }
    },
    t: function (n, t, r) {
      const i = Math.trunc(+n / 1e3);
      return nt(i, t.length);
    },
    T: function (n, t, r) {
      return nt(+n, t.length);
    },
  };
function mv(n, t = '') {
  const r = n > 0 ? '-' : '+',
    i = Math.abs(n),
    l = Math.trunc(i / 60),
    o = i % 60;
  return o === 0 ? r + String(l) : r + String(l) + t + nt(o, 2);
}
function gv(n, t) {
  return n % 60 === 0 ? (n > 0 ? '-' : '+') + nt(Math.abs(n) / 60, 2) : Wr(n, t);
}
function Wr(n, t = '') {
  const r = n > 0 ? '-' : '+',
    i = Math.abs(n),
    l = nt(Math.trunc(i / 60), 2),
    o = nt(i % 60, 2);
  return r + l + t + o;
}
const yv = (n, t) => {
    switch (n) {
      case 'P':
        return t.date({ width: 'short' });
      case 'PP':
        return t.date({ width: 'medium' });
      case 'PPP':
        return t.date({ width: 'long' });
      case 'PPPP':
      default:
        return t.date({ width: 'full' });
    }
  },
  vb = (n, t) => {
    switch (n) {
      case 'p':
        return t.time({ width: 'short' });
      case 'pp':
        return t.time({ width: 'medium' });
      case 'ppp':
        return t.time({ width: 'long' });
      case 'pppp':
      default:
        return t.time({ width: 'full' });
    }
  },
  L2 = (n, t) => {
    const r = n.match(/(P+)(p+)?/) || [],
      i = r[1],
      l = r[2];
    if (!l) return yv(n, t);
    let o;
    switch (i) {
      case 'P':
        o = t.dateTime({ width: 'short' });
        break;
      case 'PP':
        o = t.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        o = t.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        o = t.dateTime({ width: 'full' });
        break;
    }
    return o.replace('{{date}}', yv(i, t)).replace('{{time}}', vb(l, t));
  },
  B2 = { p: vb, P: L2 },
  H2 = /^D+$/,
  V2 = /^Y+$/,
  q2 = ['D', 'DD', 'YY', 'YYYY'];
function Y2(n) {
  return H2.test(n);
}
function Z2(n) {
  return V2.test(n);
}
function F2(n, t, r) {
  const i = G2(n, t, r);
  if ((console.warn(i), q2.includes(n))) throw new RangeError(i);
}
function G2(n, t, r) {
  const i = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const P2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  $2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Q2 = /^'([^]*?)'?$/,
  K2 = /''/g,
  W2 = /[a-zA-Z]/;
function Go(n, t, r) {
  var y, v, b, w, S, D, C, N;
  const i = yu(),
    l = (r == null ? void 0 : r.locale) ?? i.locale ?? Bh,
    o =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((v = (y = r == null ? void 0 : r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((w = (b = i.locale) == null ? void 0 : b.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    f =
      (r == null ? void 0 : r.weekStartsOn) ??
      ((D = (S = r == null ? void 0 : r.locale) == null ? void 0 : S.options) == null
        ? void 0
        : D.weekStartsOn) ??
      i.weekStartsOn ??
      ((N = (C = i.locale) == null ? void 0 : C.options) == null ? void 0 : N.weekStartsOn) ??
      0,
    h = lt(n, r == null ? void 0 : r.in);
  if (!KE(h)) throw new RangeError('Invalid time value');
  let m = t
    .match($2)
    .map((O) => {
      const k = O[0];
      if (k === 'p' || k === 'P') {
        const Y = B2[k];
        return Y(O, l.formatLong);
      }
      return O;
    })
    .join('')
    .match(P2)
    .map((O) => {
      if (O === "''") return { isToken: !1, value: "'" };
      const k = O[0];
      if (k === "'") return { isToken: !1, value: X2(O) };
      if (hv[k]) return { isToken: !0, value: O };
      if (k.match(W2))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + k + '`'
        );
      return { isToken: !1, value: O };
    });
  l.localize.preprocessor && (m = l.localize.preprocessor(h, m));
  const g = { firstWeekContainsDate: o, weekStartsOn: f, locale: l };
  return m
    .map((O) => {
      if (!O.isToken) return O.value;
      const k = O.value;
      ((!(r != null && r.useAdditionalWeekYearTokens) && Z2(k)) ||
        (!(r != null && r.useAdditionalDayOfYearTokens) && Y2(k))) &&
        F2(k, t, String(n));
      const Y = hv[k[0]];
      return Y(h, k, l.localize, g);
    })
    .join('');
}
function X2(n) {
  const t = n.match(Q2);
  return t ? t[1].replace(K2, "'") : n;
}
function I2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = r.getMonth(),
    o = At(r, 0);
  return o.setFullYear(i, l + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function J2(n, t) {
  return lt(n, t == null ? void 0 : t.in).getMonth();
}
function eT(n, t) {
  return lt(n, t == null ? void 0 : t.in).getFullYear();
}
function tT(n, t) {
  return +lt(n) > +lt(t);
}
function nT(n, t) {
  return +lt(n) < +lt(t);
}
function aT(n, t, r) {
  const [i, l] = ws(r == null ? void 0 : r.in, n, t);
  return i.getFullYear() === l.getFullYear() && i.getMonth() === l.getMonth();
}
function rT(n, t, r) {
  const [i, l] = ws(r == null ? void 0 : r.in, n, t);
  return i.getFullYear() === l.getFullYear();
}
function iT(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in),
    l = i.getFullYear(),
    o = i.getDate(),
    f = At(n, 0);
  f.setFullYear(l, t, 15), f.setHours(0, 0, 0, 0);
  const h = I2(f);
  return i.setMonth(t, Math.min(o, h)), i;
}
function sT(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in);
  return isNaN(+i) ? At(n, NaN) : (i.setFullYear(t), i);
}
var Te;
(function (n) {
  (n.Root = 'root'),
    (n.Chevron = 'chevron'),
    (n.Day = 'day'),
    (n.DayButton = 'day_button'),
    (n.CaptionLabel = 'caption_label'),
    (n.Dropdowns = 'dropdowns'),
    (n.Dropdown = 'dropdown'),
    (n.DropdownRoot = 'dropdown_root'),
    (n.Footer = 'footer'),
    (n.MonthGrid = 'month_grid'),
    (n.MonthCaption = 'month_caption'),
    (n.MonthsDropdown = 'months_dropdown'),
    (n.Month = 'month'),
    (n.Months = 'months'),
    (n.Nav = 'nav'),
    (n.NextMonthButton = 'button_next'),
    (n.PreviousMonthButton = 'button_previous'),
    (n.Week = 'week'),
    (n.Weeks = 'weeks'),
    (n.Weekday = 'weekday'),
    (n.Weekdays = 'weekdays'),
    (n.WeekNumber = 'week_number'),
    (n.WeekNumberHeader = 'week_number_header'),
    (n.YearsDropdown = 'years_dropdown');
})(Te || (Te = {}));
var mt;
(function (n) {
  (n.disabled = 'disabled'),
    (n.hidden = 'hidden'),
    (n.outside = 'outside'),
    (n.focused = 'focused'),
    (n.today = 'today');
})(mt || (mt = {}));
var Fn;
(function (n) {
  (n.range_end = 'range_end'),
    (n.range_middle = 'range_middle'),
    (n.range_start = 'range_start'),
    (n.selected = 'selected');
})(Fn || (Fn = {}));
var bn;
(function (n) {
  (n.weeks_before_enter = 'weeks_before_enter'),
    (n.weeks_before_exit = 'weeks_before_exit'),
    (n.weeks_after_enter = 'weeks_after_enter'),
    (n.weeks_after_exit = 'weeks_after_exit'),
    (n.caption_after_enter = 'caption_after_enter'),
    (n.caption_after_exit = 'caption_after_exit'),
    (n.caption_before_enter = 'caption_before_enter'),
    (n.caption_before_exit = 'caption_before_exit');
})(bn || (bn = {}));
const Xd = {},
  zl = {};
function Hl(n, t) {
  try {
    const i =
      (
        Xd[n] ||
        (Xd[n] = new Intl.DateTimeFormat('en-GB', {
          timeZone: n,
          hour: 'numeric',
          timeZoneName: 'longOffset',
        }).format)
      )(t).split('GMT')[1] || '';
    return i in zl ? zl[i] : pv(i, i.split(':'));
  } catch {
    if (n in zl) return zl[n];
    const r = n == null ? void 0 : n.match(lT);
    return r ? pv(n, r.slice(1)) : NaN;
  }
}
const lT = /([+-]\d\d):?(\d\d)?/;
function pv(n, t) {
  const r = +t[0],
    i = +(t[1] || 0);
  return (zl[n] = r > 0 ? r * 60 + i : r * 60 - i);
}
class ia extends Date {
  constructor(...t) {
    super(),
      t.length > 1 && typeof t[t.length - 1] == 'string' && (this.timeZone = t.pop()),
      (this.internal = new Date()),
      isNaN(Hl(this.timeZone, this))
        ? this.setTime(NaN)
        : t.length
          ? typeof t[0] == 'number' &&
            (t.length === 1 || (t.length === 2 && typeof t[1] != 'number'))
            ? this.setTime(t[0])
            : typeof t[0] == 'string'
              ? this.setTime(+new Date(t[0]))
              : t[0] instanceof Date
                ? this.setTime(+t[0])
                : (this.setTime(+new Date(...t)), bb(this), ph(this))
          : this.setTime(Date.now());
  }
  static tz(t, ...r) {
    return r.length ? new ia(...r, t) : new ia(Date.now(), t);
  }
  withTimeZone(t) {
    return new ia(+this, t);
  }
  getTimezoneOffset() {
    return -Hl(this.timeZone, this);
  }
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), ph(this), +this;
  }
  [Symbol.for('constructDateFrom')](t) {
    return new ia(+new Date(t), this.timeZone);
  }
}
const vv = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!vv.test(n)) return;
  const t = n.replace(vv, '$1UTC');
  ia.prototype[t] &&
    (n.startsWith('get')
      ? (ia.prototype[n] = function () {
          return this.internal[t]();
        })
      : ((ia.prototype[n] = function () {
          return Date.prototype[t].apply(this.internal, arguments), uT(this), +this;
        }),
        (ia.prototype[t] = function () {
          return Date.prototype[t].apply(this, arguments), ph(this), +this;
        })));
});
function ph(n) {
  n.internal.setTime(+n),
    n.internal.setUTCMinutes(n.internal.getUTCMinutes() - n.getTimezoneOffset());
}
function uT(n) {
  Date.prototype.setFullYear.call(
    n,
    n.internal.getUTCFullYear(),
    n.internal.getUTCMonth(),
    n.internal.getUTCDate()
  ),
    Date.prototype.setHours.call(
      n,
      n.internal.getUTCHours(),
      n.internal.getUTCMinutes(),
      n.internal.getUTCSeconds(),
      n.internal.getUTCMilliseconds()
    ),
    bb(n);
}
function bb(n) {
  const t = Hl(n.timeZone, n),
    r = new Date(+n);
  r.setUTCHours(r.getUTCHours() - 1);
  const i = -new Date(+n).getTimezoneOffset(),
    l = -new Date(+r).getTimezoneOffset(),
    o = i - l,
    f = Date.prototype.getHours.apply(n) !== n.internal.getUTCHours();
  o && f && n.internal.setUTCMinutes(n.internal.getUTCMinutes() + o);
  const h = i - t;
  h && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + h);
  const m = Hl(n.timeZone, n),
    y = -new Date(+n).getTimezoneOffset() - m,
    v = m !== t,
    b = y - h;
  if (v && b) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + b);
    const w = Hl(n.timeZone, n),
      S = m - w;
    S &&
      (n.internal.setUTCMinutes(n.internal.getUTCMinutes() + S),
      Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + S));
  }
}
class Er extends ia {
  static tz(t, ...r) {
    return r.length ? new Er(...r, t) : new Er(Date.now(), t);
  }
  toISOString() {
    const [t, r, i] = this.tzComponents(),
      l = `${t}${r}:${i}`;
    return this.internal.toISOString().slice(0, -1) + l;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, r, i, l] = this.internal.toUTCString().split(' ');
    return `${t == null ? void 0 : t.slice(0, -1)} ${i} ${r} ${l}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(' ')[4],
      [r, i, l] = this.tzComponents();
    return `${t} GMT${r}${i}${l} (${oT(this.timeZone, this)})`;
  }
  toLocaleString(t, r) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...r,
      timeZone: (r == null ? void 0 : r.timeZone) || this.timeZone,
    });
  }
  toLocaleDateString(t, r) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...r,
      timeZone: (r == null ? void 0 : r.timeZone) || this.timeZone,
    });
  }
  toLocaleTimeString(t, r) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...r,
      timeZone: (r == null ? void 0 : r.timeZone) || this.timeZone,
    });
  }
  tzComponents() {
    const t = this.getTimezoneOffset(),
      r = t > 0 ? '-' : '+',
      i = String(Math.floor(Math.abs(t) / 60)).padStart(2, '0'),
      l = String(Math.abs(t) % 60).padStart(2, '0');
    return [r, i, l];
  }
  withTimeZone(t) {
    return new Er(+this, t);
  }
  [Symbol.for('constructDateFrom')](t) {
    return new Er(+new Date(t), this.timeZone);
  }
}
function oT(n, t) {
  return new Intl.DateTimeFormat('en-GB', { timeZone: n, timeZoneName: 'long' })
    .format(t)
    .slice(12);
}
const bv = 5,
  cT = 4;
function fT(n, t) {
  const r = t.startOfMonth(n),
    i = r.getDay() > 0 ? r.getDay() : 7,
    l = t.addDays(n, -i + 1),
    o = t.addDays(l, bv * 7 - 1);
  return t.getMonth(n) === t.getMonth(o) ? bv : cT;
}
function _b(n, t) {
  const r = t.startOfMonth(n),
    i = r.getDay();
  return i === 1 ? r : i === 0 ? t.addDays(r, -1 * 6) : t.addDays(r, -1 * (i - 1));
}
function dT(n, t) {
  const r = _b(n, t),
    i = fT(n, t);
  return t.addDays(r, i * 7 - 1);
}
class Fa {
  constructor(t, r) {
    (this.Date = Date),
      (this.today = () => {
        var i;
        return (i = this.overrides) != null && i.today
          ? this.overrides.today()
          : this.options.timeZone
            ? Er.tz(this.options.timeZone)
            : new this.Date();
      }),
      (this.newDate = (i, l, o) => {
        var f;
        return (f = this.overrides) != null && f.newDate
          ? this.overrides.newDate(i, l, o)
          : this.options.timeZone
            ? new Er(i, l, o, this.options.timeZone)
            : new Date(i, l, o);
      }),
      (this.addDays = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addDays ? this.overrides.addDays(i, l) : ub(i, l);
      }),
      (this.addMonths = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addMonths
          ? this.overrides.addMonths(i, l)
          : ob(i, l);
      }),
      (this.addWeeks = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addWeeks
          ? this.overrides.addWeeks(i, l)
          : FE(i, l);
      }),
      (this.addYears = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addYears
          ? this.overrides.addYears(i, l)
          : GE(i, l);
      }),
      (this.differenceInCalendarDays = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.differenceInCalendarDays
          ? this.overrides.differenceInCalendarDays(i, l)
          : fb(i, l);
      }),
      (this.differenceInCalendarMonths = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.differenceInCalendarMonths
          ? this.overrides.differenceInCalendarMonths(i, l)
          : WE(i, l);
      }),
      (this.eachMonthOfInterval = (i) => {
        var l;
        return (l = this.overrides) != null && l.eachMonthOfInterval
          ? this.overrides.eachMonthOfInterval(i)
          : JE(i);
      }),
      (this.endOfBroadcastWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfBroadcastWeek
          ? this.overrides.endOfBroadcastWeek(i, this)
          : dT(i, this);
      }),
      (this.endOfISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfISOWeek
          ? this.overrides.endOfISOWeek(i)
          : n2(i);
      }),
      (this.endOfMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfMonth ? this.overrides.endOfMonth(i) : XE(i);
      }),
      (this.endOfWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfWeek
          ? this.overrides.endOfWeek(i, this.options)
          : mb(i, this.options);
      }),
      (this.endOfYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfYear ? this.overrides.endOfYear(i) : t2(i);
      }),
      (this.format = (i, l) => {
        var f;
        const o =
          (f = this.overrides) != null && f.format
            ? this.overrides.format(i, l, this.options)
            : Go(i, l, this.options);
        return this.options.numerals && this.options.numerals !== 'latn'
          ? this.replaceDigits(o)
          : o;
      }),
      (this.getISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.getISOWeek ? this.overrides.getISOWeek(i) : gb(i);
      }),
      (this.getMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.getMonth
          ? this.overrides.getMonth(i, this.options)
          : J2(i, this.options);
      }),
      (this.getYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.getYear
          ? this.overrides.getYear(i, this.options)
          : eT(i, this.options);
      }),
      (this.getWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.getWeek
          ? this.overrides.getWeek(i, this.options)
          : pb(i, this.options);
      }),
      (this.isAfter = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isAfter ? this.overrides.isAfter(i, l) : tT(i, l);
      }),
      (this.isBefore = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isBefore
          ? this.overrides.isBefore(i, l)
          : nT(i, l);
      }),
      (this.isDate = (i) => {
        var l;
        return (l = this.overrides) != null && l.isDate ? this.overrides.isDate(i) : db(i);
      }),
      (this.isSameDay = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameDay
          ? this.overrides.isSameDay(i, l)
          : QE(i, l);
      }),
      (this.isSameMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameMonth
          ? this.overrides.isSameMonth(i, l)
          : aT(i, l);
      }),
      (this.isSameYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameYear
          ? this.overrides.isSameYear(i, l)
          : rT(i, l);
      }),
      (this.max = (i) => {
        var l;
        return (l = this.overrides) != null && l.max ? this.overrides.max(i) : PE(i);
      }),
      (this.min = (i) => {
        var l;
        return (l = this.overrides) != null && l.min ? this.overrides.min(i) : $E(i);
      }),
      (this.setMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.setMonth
          ? this.overrides.setMonth(i, l)
          : iT(i, l);
      }),
      (this.setYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.setYear ? this.overrides.setYear(i, l) : sT(i, l);
      }),
      (this.startOfBroadcastWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfBroadcastWeek
          ? this.overrides.startOfBroadcastWeek(i, this)
          : _b(i, this);
      }),
      (this.startOfDay = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfDay ? this.overrides.startOfDay(i) : au(i);
      }),
      (this.startOfISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfISOWeek
          ? this.overrides.startOfISOWeek(i)
          : nu(i);
      }),
      (this.startOfMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfMonth
          ? this.overrides.startOfMonth(i)
          : e2(i);
      }),
      (this.startOfWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfWeek
          ? this.overrides.startOfWeek(i, this.options)
          : bs(i, this.options);
      }),
      (this.startOfYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfYear
          ? this.overrides.startOfYear(i)
          : hb(i);
      }),
      (this.options = { locale: Bh, ...t }),
      (this.overrides = r);
  }
  getDigitMap() {
    const { numerals: t = 'latn' } = this.options,
      r = new Intl.NumberFormat('en-US', { numberingSystem: t }),
      i = {};
    for (let l = 0; l < 10; l++) i[l.toString()] = r.format(l);
    return i;
  }
  replaceDigits(t) {
    const r = this.getDigitMap();
    return t.replace(/\d/g, (i) => r[i] || i);
  }
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
}
const Ga = new Fa();
function hT(n, t, r = {}) {
  return Object.entries(n)
    .filter(([, l]) => l === !0)
    .reduce(
      (l, [o]) => (
        r[o] ? l.push(r[o]) : t[mt[o]] ? l.push(t[mt[o]]) : t[Fn[o]] && l.push(t[Fn[o]]), l
      ),
      [t[Te.Day]]
    );
}
function mT(n) {
  return ee.createElement('button', { ...n });
}
function gT(n) {
  return ee.createElement('span', { ...n });
}
function yT(n) {
  const { size: t = 24, orientation: r = 'left', className: i } = n;
  return ee.createElement(
    'svg',
    { className: i, width: t, height: t, viewBox: '0 0 24 24' },
    r === 'up' &&
      ee.createElement('polygon', {
        points: '6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28',
      }),
    r === 'down' &&
      ee.createElement('polygon', { points: '6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72' }),
    r === 'left' &&
      ee.createElement('polygon', {
        points: '16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20',
      }),
    r === 'right' &&
      ee.createElement('polygon', {
        points: '8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20',
      })
  );
}
function pT(n) {
  const { day: t, modifiers: r, ...i } = n;
  return ee.createElement('td', { ...i });
}
function vT(n) {
  const { day: t, modifiers: r, ...i } = n,
    l = ee.useRef(null);
  return (
    ee.useEffect(() => {
      var o;
      r.focused && ((o = l.current) == null || o.focus());
    }, [r.focused]),
    ee.createElement('button', { ref: l, ...i })
  );
}
function bT(n) {
  const { options: t, className: r, components: i, classNames: l, ...o } = n,
    f = [l[Te.Dropdown], r].join(' '),
    h = t == null ? void 0 : t.find(({ value: m }) => m === o.value);
  return ee.createElement(
    'span',
    { 'data-disabled': o.disabled, className: l[Te.DropdownRoot] },
    ee.createElement(
      i.Select,
      { className: f, ...o },
      t == null
        ? void 0
        : t.map(({ value: m, label: g, disabled: y }) =>
            ee.createElement(i.Option, { key: m, value: m, disabled: y }, g)
          )
    ),
    ee.createElement(
      'span',
      { className: l[Te.CaptionLabel], 'aria-hidden': !0 },
      h == null ? void 0 : h.label,
      ee.createElement(i.Chevron, { orientation: 'down', size: 18, className: l[Te.Chevron] })
    )
  );
}
function _T(n) {
  return ee.createElement('div', { ...n });
}
function ST(n) {
  return ee.createElement('div', { ...n });
}
function xT(n) {
  const { calendarMonth: t, displayIndex: r, ...i } = n;
  return ee.createElement('div', { ...i }, n.children);
}
function wT(n) {
  const { calendarMonth: t, displayIndex: r, ...i } = n;
  return ee.createElement('div', { ...i });
}
function OT(n) {
  return ee.createElement('table', { ...n });
}
function ET(n) {
  return ee.createElement('div', { ...n });
}
const Sb = R.createContext(void 0);
function pu() {
  const n = R.useContext(Sb);
  if (n === void 0) throw new Error('useDayPicker() must be used within a custom component.');
  return n;
}
function TT(n) {
  const { components: t } = pu();
  return ee.createElement(t.Dropdown, { ...n });
}
function CT(n) {
  const { onPreviousClick: t, onNextClick: r, previousMonth: i, nextMonth: l, ...o } = n,
    {
      components: f,
      classNames: h,
      labels: { labelPrevious: m, labelNext: g },
    } = pu(),
    y = R.useCallback(
      (b) => {
        l && (r == null || r(b));
      },
      [l, r]
    ),
    v = R.useCallback(
      (b) => {
        i && (t == null || t(b));
      },
      [i, t]
    );
  return ee.createElement(
    'nav',
    { ...o },
    ee.createElement(
      f.PreviousMonthButton,
      {
        type: 'button',
        className: h[Te.PreviousMonthButton],
        tabIndex: i ? void 0 : -1,
        'aria-disabled': i ? void 0 : !0,
        'aria-label': m(i),
        onClick: v,
      },
      ee.createElement(f.Chevron, {
        disabled: i ? void 0 : !0,
        className: h[Te.Chevron],
        orientation: 'left',
      })
    ),
    ee.createElement(
      f.NextMonthButton,
      {
        type: 'button',
        className: h[Te.NextMonthButton],
        tabIndex: l ? void 0 : -1,
        'aria-disabled': l ? void 0 : !0,
        'aria-label': g(l),
        onClick: y,
      },
      ee.createElement(f.Chevron, {
        disabled: l ? void 0 : !0,
        orientation: 'right',
        className: h[Te.Chevron],
      })
    )
  );
}
function MT(n) {
  const { components: t } = pu();
  return ee.createElement(t.Button, { ...n });
}
function DT(n) {
  return ee.createElement('option', { ...n });
}
function NT(n) {
  const { components: t } = pu();
  return ee.createElement(t.Button, { ...n });
}
function AT(n) {
  const { rootRef: t, ...r } = n;
  return ee.createElement('div', { ...r, ref: t });
}
function kT(n) {
  return ee.createElement('select', { ...n });
}
function RT(n) {
  const { week: t, ...r } = n;
  return ee.createElement('tr', { ...r });
}
function jT(n) {
  return ee.createElement('th', { ...n });
}
function zT(n) {
  return ee.createElement('thead', { 'aria-hidden': !0 }, ee.createElement('tr', { ...n }));
}
function UT(n) {
  const { week: t, ...r } = n;
  return ee.createElement('th', { ...r });
}
function LT(n) {
  return ee.createElement('th', { ...n });
}
function BT(n) {
  return ee.createElement('tbody', { ...n });
}
function HT(n) {
  const { components: t } = pu();
  return ee.createElement(t.Dropdown, { ...n });
}
const VT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Button: mT,
      CaptionLabel: gT,
      Chevron: yT,
      Day: pT,
      DayButton: vT,
      Dropdown: bT,
      DropdownNav: _T,
      Footer: ST,
      Month: xT,
      MonthCaption: wT,
      MonthGrid: OT,
      Months: ET,
      MonthsDropdown: TT,
      Nav: CT,
      NextMonthButton: MT,
      Option: DT,
      PreviousMonthButton: NT,
      Root: AT,
      Select: kT,
      Week: RT,
      WeekNumber: UT,
      WeekNumberHeader: LT,
      Weekday: jT,
      Weekdays: zT,
      Weeks: BT,
      YearsDropdown: HT,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function qT(n) {
  return { ...VT, ...n };
}
function YT(n) {
  const t = {
    'data-mode': n.mode ?? void 0,
    'data-required': 'required' in n ? n.required : void 0,
    'data-multiple-months': (n.numberOfMonths && n.numberOfMonths > 1) || void 0,
    'data-week-numbers': n.showWeekNumber || void 0,
    'data-broadcast-calendar': n.broadcastCalendar || void 0,
  };
  return (
    Object.entries(n).forEach(([r, i]) => {
      r.startsWith('data-') && (t[r] = i);
    }),
    t
  );
}
function xb() {
  const n = {};
  for (const t in Te) n[Te[t]] = `rdp-${Te[t]}`;
  for (const t in mt) n[mt[t]] = `rdp-${mt[t]}`;
  for (const t in Fn) n[Fn[t]] = `rdp-${Fn[t]}`;
  for (const t in bn) n[bn[t]] = `rdp-${bn[t]}`;
  return n;
}
function wb(n, t, r) {
  return (r ?? new Fa(t)).format(n, 'LLLL y');
}
const ZT = wb;
function FT(n, t, r) {
  return (r ?? new Fa(t)).format(n, 'd');
}
function GT(n, t = Ga) {
  return t.format(n, 'LLLL');
}
function PT(n) {
  return n < 10 ? `0${n.toLocaleString()}` : `${n.toLocaleString()}`;
}
function $T() {
  return '';
}
function QT(n, t, r) {
  return (r ?? new Fa(t)).format(n, 'cccccc');
}
function Ob(n, t = Ga) {
  return t.format(n, 'yyyy');
}
const KT = Ob,
  WT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        formatCaption: wb,
        formatDay: FT,
        formatMonthCaption: ZT,
        formatMonthDropdown: GT,
        formatWeekNumber: PT,
        formatWeekNumberHeader: $T,
        formatWeekdayName: QT,
        formatYearCaption: KT,
        formatYearDropdown: Ob,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function XT(n) {
  return (
    n != null &&
      n.formatMonthCaption &&
      !n.formatCaption &&
      (n.formatCaption = n.formatMonthCaption),
    n != null &&
      n.formatYearCaption &&
      !n.formatYearDropdown &&
      (n.formatYearDropdown = n.formatYearCaption),
    { ...WT, ...n }
  );
}
function IT(n, t, r, i, l) {
  const { startOfMonth: o, startOfYear: f, endOfYear: h, eachMonthOfInterval: m, getMonth: g } = l;
  return m({ start: f(n), end: h(n) }).map((b) => {
    const w = i.formatMonthDropdown(b, l),
      S = g(b),
      D = (t && b < o(t)) || (r && b > o(r)) || !1;
    return { value: S, label: w, disabled: D };
  });
}
function JT(n, t = {}, r = {}) {
  let i = { ...(t == null ? void 0 : t[Te.Day]) };
  return (
    Object.entries(n)
      .filter(([, l]) => l === !0)
      .forEach(([l]) => {
        i = { ...i, ...(r == null ? void 0 : r[l]) };
      }),
    i
  );
}
function eC(n, t, r) {
  const i = n.today(),
    l = t ? n.startOfISOWeek(i) : n.startOfWeek(i),
    o = [];
  for (let f = 0; f < 7; f++) {
    const h = n.addDays(l, f);
    o.push(h);
  }
  return o;
}
function tC(n, t, r, i) {
  if (!n || !t) return;
  const { startOfYear: l, endOfYear: o, addYears: f, getYear: h, isBefore: m, isSameYear: g } = i,
    y = l(n),
    v = o(t),
    b = [];
  let w = y;
  for (; m(w, v) || g(w, v); ) b.push(w), (w = f(w, 1));
  return b.map((S) => {
    const D = r.formatYearDropdown(S, i);
    return { value: h(S), label: D, disabled: !1 };
  });
}
function Eb(n, t, r) {
  return (r ?? new Fa(t)).format(n, 'LLLL y');
}
const nC = Eb;
function aC(n, t, r, i) {
  let l = (i ?? new Fa(r)).format(n, 'PPPP');
  return t != null && t.today && (l = `Today, ${l}`), l;
}
function Tb(n, t, r, i) {
  let l = (i ?? new Fa(r)).format(n, 'PPPP');
  return t.today && (l = `Today, ${l}`), t.selected && (l = `${l}, selected`), l;
}
const rC = Tb;
function iC() {
  return '';
}
function sC(n) {
  return 'Choose the Month';
}
function lC(n) {
  return 'Go to the Next Month';
}
function uC(n) {
  return 'Go to the Previous Month';
}
function oC(n, t, r) {
  return (r ?? new Fa(t)).format(n, 'cccc');
}
function cC(n, t) {
  return `Week ${n}`;
}
function fC(n) {
  return 'Week Number';
}
function dC(n) {
  return 'Choose the Year';
}
const hC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        labelCaption: nC,
        labelDay: rC,
        labelDayButton: Tb,
        labelGrid: Eb,
        labelGridcell: aC,
        labelMonthDropdown: sC,
        labelNav: iC,
        labelNext: lC,
        labelPrevious: uC,
        labelWeekNumber: cC,
        labelWeekNumberHeader: fC,
        labelWeekday: oC,
        labelYearDropdown: dC,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  vu = (n) => (n instanceof HTMLElement ? n : null),
  Id = (n) => [...(n.querySelectorAll('[data-animated-month]') ?? [])],
  mC = (n) => vu(n.querySelector('[data-animated-month]')),
  Jd = (n) => vu(n.querySelector('[data-animated-caption]')),
  eh = (n) => vu(n.querySelector('[data-animated-weeks]')),
  gC = (n) => vu(n.querySelector('[data-animated-nav]')),
  yC = (n) => vu(n.querySelector('[data-animated-weekdays]'));
function pC(n, t, { classNames: r, months: i, focused: l, dateLib: o }) {
  const f = R.useRef(null),
    h = R.useRef(i),
    m = R.useRef(!1);
  R.useLayoutEffect(() => {
    const g = h.current;
    if (
      ((h.current = i),
      !t ||
        !n.current ||
        !(n.current instanceof HTMLElement) ||
        i.length === 0 ||
        g.length === 0 ||
        i.length !== g.length)
    )
      return;
    const y = o.isSameMonth(i[0].date, g[0].date),
      v = o.isAfter(i[0].date, g[0].date),
      b = v ? r[bn.caption_after_enter] : r[bn.caption_before_enter],
      w = v ? r[bn.weeks_after_enter] : r[bn.weeks_before_enter],
      S = f.current,
      D = n.current.cloneNode(!0);
    if (
      (D instanceof HTMLElement
        ? (Id(D).forEach((k) => {
            if (!(k instanceof HTMLElement)) return;
            const Y = mC(k);
            Y && k.contains(Y) && k.removeChild(Y);
            const q = Jd(k);
            q && q.classList.remove(b);
            const K = eh(k);
            K && K.classList.remove(w);
          }),
          (f.current = D))
        : (f.current = null),
      m.current || y || l)
    )
      return;
    const C = S instanceof HTMLElement ? Id(S) : [],
      N = Id(n.current);
    if (
      N &&
      N.every((O) => O instanceof HTMLElement) &&
      C &&
      C.every((O) => O instanceof HTMLElement)
    ) {
      (m.current = !0), (n.current.style.isolation = 'isolate');
      const O = gC(n.current);
      O && (O.style.zIndex = '1'),
        N.forEach((k, Y) => {
          const q = C[Y];
          if (!q) return;
          (k.style.position = 'relative'), (k.style.overflow = 'hidden');
          const K = Jd(k);
          K && K.classList.add(b);
          const W = eh(k);
          W && W.classList.add(w);
          const ie = () => {
            (m.current = !1),
              n.current && (n.current.style.isolation = ''),
              O && (O.style.zIndex = ''),
              K && K.classList.remove(b),
              W && W.classList.remove(w),
              (k.style.position = ''),
              (k.style.overflow = ''),
              k.contains(q) && k.removeChild(q);
          };
          (q.style.pointerEvents = 'none'),
            (q.style.position = 'absolute'),
            (q.style.overflow = 'hidden'),
            q.setAttribute('aria-hidden', 'true');
          const te = yC(q);
          te && (te.style.opacity = '0');
          const _e = Jd(q);
          _e &&
            (_e.classList.add(v ? r[bn.caption_before_exit] : r[bn.caption_after_exit]),
            _e.addEventListener('animationend', ie));
          const be = eh(q);
          be && be.classList.add(v ? r[bn.weeks_before_exit] : r[bn.weeks_after_exit]),
            k.insertBefore(q, k.firstChild);
        });
    }
  });
}
function vC(n, t, r, i) {
  const l = n[0],
    o = n[n.length - 1],
    { ISOWeek: f, fixedWeeks: h, broadcastCalendar: m } = r ?? {},
    {
      addDays: g,
      differenceInCalendarDays: y,
      differenceInCalendarMonths: v,
      endOfBroadcastWeek: b,
      endOfISOWeek: w,
      endOfMonth: S,
      endOfWeek: D,
      isAfter: C,
      startOfBroadcastWeek: N,
      startOfISOWeek: O,
      startOfWeek: k,
    } = i,
    Y = m ? N(l, i) : f ? O(l) : k(l),
    q = m ? b(o, i) : f ? w(S(o)) : D(S(o)),
    K = y(q, Y),
    W = v(o, l) + 1,
    ie = [];
  for (let be = 0; be <= K; be++) {
    const se = g(Y, be);
    if (t && C(se, t)) break;
    ie.push(se);
  }
  const _e = (m ? 35 : 42) * W;
  if (h && ie.length < _e) {
    const be = _e - ie.length;
    for (let se = 0; se < be; se++) {
      const Se = g(ie[ie.length - 1], 1);
      ie.push(Se);
    }
  }
  return ie;
}
function bC(n) {
  const t = [];
  return n.reduce((r, i) => {
    const l = [],
      o = i.weeks.reduce((f, h) => [...f, ...h.days], l);
    return [...r, ...o];
  }, t);
}
function _C(n, t, r, i) {
  const { numberOfMonths: l = 1 } = r,
    o = [];
  for (let f = 0; f < l; f++) {
    const h = i.addMonths(n, f);
    if (t && h > t) break;
    o.push(h);
  }
  return o;
}
function _v(n, t) {
  const {
    month: r,
    defaultMonth: i,
    today: l = t.today(),
    numberOfMonths: o = 1,
    endMonth: f,
    startMonth: h,
    timeZone: m,
  } = n;
  let g = r || i || l;
  const { differenceInCalendarMonths: y, addMonths: v, startOfMonth: b } = t;
  if (f && y(f, g) < 0) {
    const w = -1 * (o - 1);
    g = v(f, w);
  }
  return h && y(g, h) < 0 && (g = h), (g = m ? new Er(g, m) : g), b(g);
}
class Cb {
  constructor(t, r, i = Ga) {
    (this.date = t),
      (this.displayMonth = r),
      (this.outside = !!(r && !i.isSameMonth(t, r))),
      (this.dateLib = i);
  }
  isEqualTo(t) {
    return (
      this.dateLib.isSameDay(t.date, this.date) &&
      this.dateLib.isSameMonth(t.displayMonth, this.displayMonth)
    );
  }
}
class SC {
  constructor(t, r) {
    (this.date = t), (this.weeks = r);
  }
}
class xC {
  constructor(t, r) {
    (this.days = r), (this.weekNumber = t);
  }
}
function wC(n, t, r, i) {
  const {
      addDays: l,
      endOfBroadcastWeek: o,
      endOfISOWeek: f,
      endOfMonth: h,
      endOfWeek: m,
      getISOWeek: g,
      getWeek: y,
      startOfBroadcastWeek: v,
      startOfISOWeek: b,
      startOfWeek: w,
    } = i,
    S = n.reduce((D, C) => {
      const N = r.broadcastCalendar ? v(C, i) : r.ISOWeek ? b(C) : w(C),
        O = r.broadcastCalendar ? o(C, i) : r.ISOWeek ? f(h(C)) : m(h(C)),
        k = t.filter((W) => W >= N && W <= O),
        Y = r.broadcastCalendar ? 35 : 42;
      if (r.fixedWeeks && k.length < Y) {
        const W = t.filter((ie) => {
          const te = Y - k.length;
          return ie > O && ie <= l(O, te);
        });
        k.push(...W);
      }
      const q = k.reduce((W, ie) => {
          const te = r.ISOWeek ? g(ie) : y(ie),
            _e = W.find((se) => se.weekNumber === te),
            be = new Cb(ie, C, i);
          return _e ? _e.days.push(be) : W.push(new xC(te, [be])), W;
        }, []),
        K = new SC(C, q);
      return D.push(K), D;
    }, []);
  return r.reverseMonths ? S.reverse() : S;
}
function OC(n, t) {
  let { startMonth: r, endMonth: i } = n;
  const {
      startOfYear: l,
      startOfDay: o,
      startOfMonth: f,
      endOfMonth: h,
      addYears: m,
      endOfYear: g,
      newDate: y,
      today: v,
    } = t,
    { fromYear: b, toYear: w, fromMonth: S, toMonth: D } = n;
  !r && S && (r = S),
    !r && b && (r = t.newDate(b, 0, 1)),
    !i && D && (i = D),
    !i && w && (i = y(w, 11, 31));
  const C = n.captionLayout === 'dropdown' || n.captionLayout === 'dropdown-years';
  return (
    r ? (r = f(r)) : b ? (r = y(b, 0, 1)) : !r && C && (r = l(m(n.today ?? v(), -100))),
    i ? (i = h(i)) : w ? (i = y(w, 11, 31)) : !i && C && (i = g(n.today ?? v())),
    [r && o(r), i && o(i)]
  );
}
function EC(n, t, r, i) {
  if (r.disableNavigation) return;
  const { pagedNavigation: l, numberOfMonths: o = 1 } = r,
    { startOfMonth: f, addMonths: h, differenceInCalendarMonths: m } = i,
    g = l ? o : 1,
    y = f(n);
  if (!t) return h(y, g);
  if (!(m(t, n) < o)) return h(y, g);
}
function TC(n, t, r, i) {
  if (r.disableNavigation) return;
  const { pagedNavigation: l, numberOfMonths: o } = r,
    { startOfMonth: f, addMonths: h, differenceInCalendarMonths: m } = i,
    g = l ? (o ?? 1) : 1,
    y = f(n);
  if (!t) return h(y, -g);
  if (!(m(y, t) <= 0)) return h(y, -g);
}
function CC(n) {
  const t = [];
  return n.reduce((r, i) => [...r, ...i.weeks], t);
}
function bc(n, t) {
  const [r, i] = R.useState(n);
  return [t === void 0 ? r : t, i];
}
function MC(n, t) {
  const [r, i] = OC(n, t),
    { startOfMonth: l, endOfMonth: o } = t,
    f = _v(n, t),
    [h, m] = bc(f, n.month ? f : void 0);
  R.useEffect(() => {
    const K = _v(n, t);
    m(K);
  }, [n.timeZone]);
  const g = _C(h, i, n, t),
    y = vC(g, n.endMonth ? o(n.endMonth) : void 0, n, t),
    v = wC(g, y, n, t),
    b = CC(v),
    w = bC(v),
    S = TC(h, r, n, t),
    D = EC(h, i, n, t),
    { disableNavigation: C, onMonthChange: N } = n,
    O = (K) => b.some((W) => W.days.some((ie) => ie.isEqualTo(K))),
    k = (K) => {
      if (C) return;
      let W = l(K);
      r && W < l(r) && (W = l(r)), i && W > l(i) && (W = l(i)), m(W), N == null || N(W);
    };
  return {
    months: v,
    weeks: b,
    days: w,
    navStart: r,
    navEnd: i,
    previousMonth: S,
    nextMonth: D,
    goToMonth: k,
    goToDay: (K) => {
      O(K) || k(K.date);
    },
  };
}
var ea;
(function (n) {
  (n[(n.Today = 0)] = 'Today'),
    (n[(n.Selected = 1)] = 'Selected'),
    (n[(n.LastFocused = 2)] = 'LastFocused'),
    (n[(n.FocusedModifier = 3)] = 'FocusedModifier');
})(ea || (ea = {}));
function Sv(n) {
  return !n[mt.disabled] && !n[mt.hidden] && !n[mt.outside];
}
function DC(n, t, r, i) {
  let l,
    o = -1;
  for (const f of n) {
    const h = t(f);
    Sv(h) &&
      (h[mt.focused] && o < ea.FocusedModifier
        ? ((l = f), (o = ea.FocusedModifier))
        : i != null && i.isEqualTo(f) && o < ea.LastFocused
          ? ((l = f), (o = ea.LastFocused))
          : r(f.date) && o < ea.Selected
            ? ((l = f), (o = ea.Selected))
            : h[mt.today] && o < ea.Today && ((l = f), (o = ea.Today)));
  }
  return l || (l = n.find((f) => Sv(t(f)))), l;
}
function La(n, t, r = !1, i = Ga) {
  let { from: l, to: o } = n;
  const { differenceInCalendarDays: f, isSameDay: h } = i;
  return l && o
    ? (f(o, l) < 0 && ([l, o] = [o, l]), f(t, l) >= (r ? 1 : 0) && f(o, t) >= (r ? 1 : 0))
    : !r && o
      ? h(o, t)
      : !r && l
        ? h(l, t)
        : !1;
}
function Mb(n) {
  return !!(n && typeof n == 'object' && 'before' in n && 'after' in n);
}
function Hh(n) {
  return !!(n && typeof n == 'object' && 'from' in n);
}
function Db(n) {
  return !!(n && typeof n == 'object' && 'after' in n);
}
function Nb(n) {
  return !!(n && typeof n == 'object' && 'before' in n);
}
function Ab(n) {
  return !!(n && typeof n == 'object' && 'dayOfWeek' in n);
}
function kb(n, t) {
  return Array.isArray(n) && n.every(t.isDate);
}
function Ba(n, t, r = Ga) {
  const i = Array.isArray(t) ? t : [t],
    { isSameDay: l, differenceInCalendarDays: o, isAfter: f } = r;
  return i.some((h) => {
    if (typeof h == 'boolean') return h;
    if (r.isDate(h)) return l(n, h);
    if (kb(h, r)) return h.includes(n);
    if (Hh(h)) return La(h, n, !1, r);
    if (Ab(h))
      return Array.isArray(h.dayOfWeek)
        ? h.dayOfWeek.includes(n.getDay())
        : h.dayOfWeek === n.getDay();
    if (Mb(h)) {
      const m = o(h.before, n),
        g = o(h.after, n),
        y = m > 0,
        v = g < 0;
      return f(h.before, h.after) ? v && y : y || v;
    }
    return Db(h)
      ? o(n, h.after) > 0
      : Nb(h)
        ? o(h.before, n) > 0
        : typeof h == 'function'
          ? h(n)
          : !1;
  });
}
function NC(n, t, r, i, l, o, f) {
  const { ISOWeek: h, broadcastCalendar: m } = o,
    {
      addDays: g,
      addMonths: y,
      addWeeks: v,
      addYears: b,
      endOfBroadcastWeek: w,
      endOfISOWeek: S,
      endOfWeek: D,
      max: C,
      min: N,
      startOfBroadcastWeek: O,
      startOfISOWeek: k,
      startOfWeek: Y,
    } = f;
  let K = {
    day: g,
    week: v,
    month: y,
    year: b,
    startOfWeek: (W) => (m ? O(W, f) : h ? k(W) : Y(W)),
    endOfWeek: (W) => (m ? w(W, f) : h ? S(W) : D(W)),
  }[n](r, t === 'after' ? 1 : -1);
  return t === 'before' && i ? (K = C([i, K])) : t === 'after' && l && (K = N([l, K])), K;
}
function Rb(n, t, r, i, l, o, f, h = 0) {
  if (h > 365) return;
  const m = NC(n, t, r.date, i, l, o, f),
    g = !!(o.disabled && Ba(m, o.disabled, f)),
    y = !!(o.hidden && Ba(m, o.hidden, f)),
    v = m,
    b = new Cb(m, v, f);
  return !g && !y ? b : Rb(n, t, b, i, l, o, f, h + 1);
}
function AC(n, t, r, i, l) {
  const { autoFocus: o } = n,
    [f, h] = R.useState(),
    m = DC(t.days, r, i || (() => !1), f),
    [g, y] = R.useState(o ? m : void 0);
  return {
    isFocusTarget: (D) => !!(m != null && m.isEqualTo(D)),
    setFocused: y,
    focused: g,
    blur: () => {
      h(g), y(void 0);
    },
    moveFocus: (D, C) => {
      if (!g) return;
      const N = Rb(D, C, g, t.navStart, t.navEnd, n, l);
      N && (t.goToDay(N), y(N));
    },
  };
}
function kC(n, t, r) {
  const {
      disabled: i,
      hidden: l,
      modifiers: o,
      showOutsideDays: f,
      broadcastCalendar: h,
      today: m,
    } = t,
    { isSameDay: g, isSameMonth: y, startOfMonth: v, isBefore: b, endOfMonth: w, isAfter: S } = r,
    D = t.startMonth && v(t.startMonth),
    C = t.endMonth && w(t.endMonth),
    N = { [mt.focused]: [], [mt.outside]: [], [mt.disabled]: [], [mt.hidden]: [], [mt.today]: [] },
    O = {};
  for (const k of n) {
    const { date: Y, displayMonth: q } = k,
      K = !!(q && !y(Y, q)),
      W = !!(D && b(Y, D)),
      ie = !!(C && S(Y, C)),
      te = !!(i && Ba(Y, i, r)),
      _e = !!(l && Ba(Y, l, r)) || W || ie || (!h && !f && K) || (h && f === !1 && K),
      be = g(Y, m ?? r.today());
    K && N.outside.push(k),
      te && N.disabled.push(k),
      _e && N.hidden.push(k),
      be && N.today.push(k),
      o &&
        Object.keys(o).forEach((se) => {
          const Se = o == null ? void 0 : o[se];
          Se && Ba(Y, Se, r) && (O[se] ? O[se].push(k) : (O[se] = [k]));
        });
  }
  return (k) => {
    const Y = {
        [mt.focused]: !1,
        [mt.disabled]: !1,
        [mt.hidden]: !1,
        [mt.outside]: !1,
        [mt.today]: !1,
      },
      q = {};
    for (const K in N) {
      const W = N[K];
      Y[K] = W.some((ie) => ie === k);
    }
    for (const K in O) q[K] = O[K].some((W) => W === k);
    return { ...Y, ...q };
  };
}
function RC(n, t) {
  const { selected: r, required: i, onSelect: l } = n,
    [o, f] = bc(r, l ? r : void 0),
    h = l ? r : o,
    { isSameDay: m } = t,
    g = (w) => (h == null ? void 0 : h.some((S) => m(S, w))) ?? !1,
    { min: y, max: v } = n;
  return {
    selected: h,
    select: (w, S, D) => {
      let C = [...(h ?? [])];
      if (g(w)) {
        if ((h == null ? void 0 : h.length) === y || (i && (h == null ? void 0 : h.length) === 1))
          return;
        C = h == null ? void 0 : h.filter((N) => !m(N, w));
      } else (h == null ? void 0 : h.length) === v ? (C = [w]) : (C = [...C, w]);
      return l || f(C), l == null || l(C, w, S, D), C;
    },
    isSelected: g,
  };
}
function jC(n, t, r = 0, i = 0, l = !1, o = Ga) {
  const { from: f, to: h } = t || {},
    { isSameDay: m, isAfter: g, isBefore: y } = o;
  let v;
  if (!f && !h) v = { from: n, to: r > 0 ? void 0 : n };
  else if (f && !h)
    m(f, n)
      ? l
        ? (v = { from: f, to: void 0 })
        : (v = void 0)
      : y(n, f)
        ? (v = { from: n, to: f })
        : (v = { from: f, to: n });
  else if (f && h)
    if (m(f, n) && m(h, n)) l ? (v = { from: f, to: h }) : (v = void 0);
    else if (m(f, n)) v = { from: f, to: r > 0 ? void 0 : n };
    else if (m(h, n)) v = { from: n, to: r > 0 ? void 0 : n };
    else if (y(n, f)) v = { from: n, to: h };
    else if (g(n, f)) v = { from: f, to: n };
    else if (g(n, h)) v = { from: f, to: n };
    else throw new Error('Invalid range');
  if (v != null && v.from && v != null && v.to) {
    const b = o.differenceInCalendarDays(v.to, v.from);
    i > 0 && b > i
      ? (v = { from: n, to: void 0 })
      : r > 1 && b < r && (v = { from: n, to: void 0 });
  }
  return v;
}
function zC(n, t, r = Ga) {
  const i = Array.isArray(t) ? t : [t];
  let l = n.from;
  const o = r.differenceInCalendarDays(n.to, n.from),
    f = Math.min(o, 6);
  for (let h = 0; h <= f; h++) {
    if (i.includes(l.getDay())) return !0;
    l = r.addDays(l, 1);
  }
  return !1;
}
function xv(n, t, r = Ga) {
  return La(n, t.from, !1, r) || La(n, t.to, !1, r) || La(t, n.from, !1, r) || La(t, n.to, !1, r);
}
function UC(n, t, r = Ga) {
  const i = Array.isArray(t) ? t : [t];
  if (
    i
      .filter((h) => typeof h != 'function')
      .some((h) =>
        typeof h == 'boolean'
          ? h
          : r.isDate(h)
            ? La(n, h, !1, r)
            : kb(h, r)
              ? h.some((m) => La(n, m, !1, r))
              : Hh(h)
                ? h.from && h.to
                  ? xv(n, { from: h.from, to: h.to }, r)
                  : !1
                : Ab(h)
                  ? zC(n, h.dayOfWeek, r)
                  : Mb(h)
                    ? r.isAfter(h.before, h.after)
                      ? xv(n, { from: r.addDays(h.after, 1), to: r.addDays(h.before, -1) }, r)
                      : Ba(n.from, h, r) || Ba(n.to, h, r)
                    : Db(h) || Nb(h)
                      ? Ba(n.from, h, r) || Ba(n.to, h, r)
                      : !1
      )
  )
    return !0;
  const f = i.filter((h) => typeof h == 'function');
  if (f.length) {
    let h = n.from;
    const m = r.differenceInCalendarDays(n.to, n.from);
    for (let g = 0; g <= m; g++) {
      if (f.some((y) => y(h))) return !0;
      h = r.addDays(h, 1);
    }
  }
  return !1;
}
function LC(n, t) {
  const { disabled: r, excludeDisabled: i, selected: l, required: o, onSelect: f } = n,
    [h, m] = bc(l, f ? l : void 0),
    g = f ? l : h;
  return {
    selected: g,
    select: (b, w, S) => {
      const { min: D, max: C } = n,
        N = b ? jC(b, g, D, C, o, t) : void 0;
      return (
        i &&
          r &&
          N != null &&
          N.from &&
          N.to &&
          UC({ from: N.from, to: N.to }, r, t) &&
          ((N.from = b), (N.to = void 0)),
        f || m(N),
        f == null || f(N, b, w, S),
        N
      );
    },
    isSelected: (b) => g && La(g, b, !1, t),
  };
}
function BC(n, t) {
  const { selected: r, required: i, onSelect: l } = n,
    [o, f] = bc(r, l ? r : void 0),
    h = l ? r : o,
    { isSameDay: m } = t;
  return {
    selected: h,
    select: (v, b, w) => {
      let S = v;
      return !i && h && h && m(v, h) && (S = void 0), l || f(S), l == null || l(S, v, b, w), S;
    },
    isSelected: (v) => (h ? m(h, v) : !1),
  };
}
function HC(n, t) {
  const r = BC(n, t),
    i = RC(n, t),
    l = LC(n, t);
  switch (n.mode) {
    case 'single':
      return r;
    case 'multiple':
      return i;
    case 'range':
      return l;
    default:
      return;
  }
}
function VC(n) {
  const {
      components: t,
      formatters: r,
      labels: i,
      dateLib: l,
      locale: o,
      classNames: f,
    } = R.useMemo(() => {
      const je = { ...Bh, ...n.locale };
      return {
        dateLib: new Fa(
          {
            locale: je,
            weekStartsOn: n.broadcastCalendar ? 1 : n.weekStartsOn,
            firstWeekContainsDate: n.firstWeekContainsDate,
            useAdditionalWeekYearTokens: n.useAdditionalWeekYearTokens,
            useAdditionalDayOfYearTokens: n.useAdditionalDayOfYearTokens,
            timeZone: n.timeZone,
            numerals: n.numerals,
          },
          n.dateLib
        ),
        components: qT(n.components),
        formatters: XT(n.formatters),
        labels: { ...hC, ...n.labels },
        locale: je,
        classNames: { ...xb(), ...n.classNames },
      };
    }, [
      n.locale,
      n.broadcastCalendar,
      n.weekStartsOn,
      n.firstWeekContainsDate,
      n.useAdditionalWeekYearTokens,
      n.useAdditionalDayOfYearTokens,
      n.timeZone,
      n.numerals,
      n.dateLib,
      n.components,
      n.formatters,
      n.labels,
      n.classNames,
    ]),
    {
      captionLayout: h,
      mode: m,
      onDayBlur: g,
      onDayClick: y,
      onDayFocus: v,
      onDayKeyDown: b,
      onDayMouseEnter: w,
      onDayMouseLeave: S,
      onNextClick: D,
      onPrevClick: C,
      showWeekNumber: N,
      styles: O,
    } = n,
    {
      formatCaption: k,
      formatDay: Y,
      formatMonthDropdown: q,
      formatWeekNumber: K,
      formatWeekNumberHeader: W,
      formatWeekdayName: ie,
      formatYearDropdown: te,
    } = r,
    _e = MC(n, l),
    {
      days: be,
      months: se,
      navStart: Se,
      navEnd: Re,
      previousMonth: Me,
      nextMonth: V,
      goToMonth: I,
    } = _e,
    me = kC(be, n, l),
    { isSelected: xe, select: T, selected: G } = HC(n, l) ?? {},
    {
      blur: le,
      focused: re,
      isFocusTarget: ve,
      moveFocus: Ve,
      setFocused: we,
    } = AC(n, _e, me, xe ?? (() => !1), l),
    {
      labelDayButton: kt,
      labelGridcell: at,
      labelGrid: rn,
      labelMonthDropdown: Pa,
      labelNav: $n,
      labelWeekday: $a,
      labelWeekNumber: Nr,
      labelWeekNumberHeader: Qa,
      labelYearDropdown: Os,
    } = i,
    fi = R.useMemo(() => eC(l, n.ISOWeek), [l, n.ISOWeek]),
    Yt = m !== void 0 || y !== void 0,
    Es = R.useCallback(() => {
      Me && (I(Me), C == null || C(Me));
    }, [Me, I, C]),
    di = R.useCallback(() => {
      V && (I(V), D == null || D(V));
    }, [I, V, D]),
    Ts = R.useCallback(
      (je, Ie) => (Fe) => {
        Fe.preventDefault(),
          Fe.stopPropagation(),
          we(je),
          T == null || T(je.date, Ie, Fe),
          y == null || y(je.date, Ie, Fe);
      },
      [T, y, we]
    ),
    ma = R.useCallback(
      (je, Ie) => (Fe) => {
        we(je), v == null || v(je.date, Ie, Fe);
      },
      [v, we]
    ),
    M = R.useCallback(
      (je, Ie) => (Fe) => {
        le(), g == null || g(je.date, Ie, Fe);
      },
      [le, g]
    ),
    B = R.useCallback(
      (je, Ie) => (Fe) => {
        const Zt = {
          ArrowLeft: ['day', n.dir === 'rtl' ? 'after' : 'before'],
          ArrowRight: ['day', n.dir === 'rtl' ? 'before' : 'after'],
          ArrowDown: ['week', 'after'],
          ArrowUp: ['week', 'before'],
          PageUp: [Fe.shiftKey ? 'year' : 'month', 'before'],
          PageDown: [Fe.shiftKey ? 'year' : 'month', 'after'],
          Home: ['startOfWeek', 'before'],
          End: ['endOfWeek', 'after'],
        };
        if (Zt[Fe.key]) {
          Fe.preventDefault(), Fe.stopPropagation();
          const [Tt, ga] = Zt[Fe.key];
          Ve(Tt, ga);
        }
        b == null || b(je.date, Ie, Fe);
      },
      [Ve, b, n.dir]
    ),
    Z = R.useCallback(
      (je, Ie) => (Fe) => {
        w == null || w(je.date, Ie, Fe);
      },
      [w]
    ),
    fe = R.useCallback(
      (je, Ie) => (Fe) => {
        S == null || S(je.date, Ie, Fe);
      },
      [S]
    ),
    ae = R.useCallback(
      (je) => (Ie) => {
        const Fe = Number(Ie.target.value),
          Zt = l.setMonth(l.startOfMonth(je), Fe);
        I(Zt);
      },
      [l, I]
    ),
    X = R.useCallback(
      (je) => (Ie) => {
        const Fe = Number(Ie.target.value),
          Zt = l.setYear(l.startOfMonth(je), Fe);
        I(Zt);
      },
      [l, I]
    ),
    { className: ce, style: De } = R.useMemo(
      () => ({
        className: [f[Te.Root], n.className].filter(Boolean).join(' '),
        style: { ...(O == null ? void 0 : O[Te.Root]), ...n.style },
      }),
      [f, n.className, n.style, O]
    ),
    ct = YT(n),
    bt = R.useRef(null);
  pC(bt, !!n.animate, { classNames: f, months: se, focused: re, dateLib: l });
  const Cs = {
    dayPickerProps: n,
    selected: G,
    select: T,
    isSelected: xe,
    months: se,
    nextMonth: V,
    previousMonth: Me,
    goToMonth: I,
    getModifiers: me,
    components: t,
    classNames: f,
    styles: O,
    labels: i,
    formatters: r,
  };
  return ee.createElement(
    Sb.Provider,
    { value: Cs },
    ee.createElement(
      t.Root,
      {
        rootRef: n.animate ? bt : void 0,
        className: ce,
        style: De,
        dir: n.dir,
        id: n.id,
        lang: n.lang,
        nonce: n.nonce,
        title: n.title,
        role: n.role,
        'aria-label': n['aria-label'],
        ...ct,
      },
      ee.createElement(
        t.Months,
        { className: f[Te.Months], style: O == null ? void 0 : O[Te.Months] },
        !n.hideNavigation &&
          ee.createElement(t.Nav, {
            'data-animated-nav': n.animate ? 'true' : void 0,
            className: f[Te.Nav],
            style: O == null ? void 0 : O[Te.Nav],
            'aria-label': $n(),
            onPreviousClick: Es,
            onNextClick: di,
            previousMonth: Me,
            nextMonth: V,
          }),
        se.map((je, Ie) => {
          const Fe = IT(je.date, Se, Re, r, l),
            Zt = tC(Se, Re, r, l);
          return ee.createElement(
            t.Month,
            {
              'data-animated-month': n.animate ? 'true' : void 0,
              className: f[Te.Month],
              style: O == null ? void 0 : O[Te.Month],
              key: Ie,
              displayIndex: Ie,
              calendarMonth: je,
            },
            ee.createElement(
              t.MonthCaption,
              {
                'data-animated-caption': n.animate ? 'true' : void 0,
                className: f[Te.MonthCaption],
                style: O == null ? void 0 : O[Te.MonthCaption],
                calendarMonth: je,
                displayIndex: Ie,
              },
              h != null && h.startsWith('dropdown')
                ? ee.createElement(
                    t.DropdownNav,
                    { className: f[Te.Dropdowns], style: O == null ? void 0 : O[Te.Dropdowns] },
                    h === 'dropdown' || h === 'dropdown-months'
                      ? ee.createElement(t.MonthsDropdown, {
                          className: f[Te.MonthsDropdown],
                          'aria-label': Pa(),
                          classNames: f,
                          components: t,
                          disabled: !!n.disableNavigation,
                          onChange: ae(je.date),
                          options: Fe,
                          style: O == null ? void 0 : O[Te.Dropdown],
                          value: l.getMonth(je.date),
                        })
                      : ee.createElement('span', null, q(je.date, l)),
                    h === 'dropdown' || h === 'dropdown-years'
                      ? ee.createElement(t.YearsDropdown, {
                          className: f[Te.YearsDropdown],
                          'aria-label': Os(l.options),
                          classNames: f,
                          components: t,
                          disabled: !!n.disableNavigation,
                          onChange: X(je.date),
                          options: Zt,
                          style: O == null ? void 0 : O[Te.Dropdown],
                          value: l.getYear(je.date),
                        })
                      : ee.createElement('span', null, te(je.date, l)),
                    ee.createElement(
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
                      k(je.date, l.options, l)
                    )
                  )
                : ee.createElement(
                    t.CaptionLabel,
                    { className: f[Te.CaptionLabel], role: 'status', 'aria-live': 'polite' },
                    k(je.date, l.options, l)
                  )
            ),
            ee.createElement(
              t.MonthGrid,
              {
                role: 'grid',
                'aria-multiselectable': m === 'multiple' || m === 'range',
                'aria-label': rn(je.date, l.options, l) || void 0,
                className: f[Te.MonthGrid],
                style: O == null ? void 0 : O[Te.MonthGrid],
              },
              !n.hideWeekdays &&
                ee.createElement(
                  t.Weekdays,
                  {
                    'data-animated-weekdays': n.animate ? 'true' : void 0,
                    className: f[Te.Weekdays],
                    style: O == null ? void 0 : O[Te.Weekdays],
                  },
                  N &&
                    ee.createElement(
                      t.WeekNumberHeader,
                      {
                        'aria-label': Qa(l.options),
                        className: f[Te.WeekNumberHeader],
                        style: O == null ? void 0 : O[Te.WeekNumberHeader],
                        scope: 'col',
                      },
                      W()
                    ),
                  fi.map((Tt, ga) =>
                    ee.createElement(
                      t.Weekday,
                      {
                        'aria-label': $a(Tt, l.options, l),
                        className: f[Te.Weekday],
                        key: ga,
                        style: O == null ? void 0 : O[Te.Weekday],
                        scope: 'col',
                      },
                      ie(Tt, l.options, l)
                    )
                  )
                ),
              ee.createElement(
                t.Weeks,
                {
                  'data-animated-weeks': n.animate ? 'true' : void 0,
                  className: f[Te.Weeks],
                  style: O == null ? void 0 : O[Te.Weeks],
                },
                je.weeks.map((Tt, ga) =>
                  ee.createElement(
                    t.Week,
                    {
                      className: f[Te.Week],
                      key: Tt.weekNumber,
                      style: O == null ? void 0 : O[Te.Week],
                      week: Tt,
                    },
                    N &&
                      ee.createElement(
                        t.WeekNumber,
                        {
                          week: Tt,
                          style: O == null ? void 0 : O[Te.WeekNumber],
                          'aria-label': Nr(Tt.weekNumber, { locale: o }),
                          className: f[Te.WeekNumber],
                          scope: 'row',
                          role: 'rowheader',
                        },
                        K(Tt.weekNumber)
                      ),
                    Tt.days.map((Ct) => {
                      const { date: fn } = Ct,
                        $e = me(Ct);
                      if (
                        (($e[mt.focused] = !$e.hidden && !!(re != null && re.isEqualTo(Ct))),
                        ($e[Fn.selected] = (xe == null ? void 0 : xe(fn)) || $e.selected),
                        Hh(G))
                      ) {
                        const { from: hi, to: kr } = G;
                        ($e[Fn.range_start] = !!(hi && kr && l.isSameDay(fn, hi))),
                          ($e[Fn.range_end] = !!(hi && kr && l.isSameDay(fn, kr))),
                          ($e[Fn.range_middle] = La(G, fn, !0, l));
                      }
                      const Ar = JT($e, O, n.modifiersStyles),
                        Cc = hT($e, f, n.modifiersClassNames),
                        bu = !Yt && !$e.hidden ? at(fn, $e, l.options, l) : void 0;
                      return ee.createElement(
                        t.Day,
                        {
                          key: `${l.format(fn, 'yyyy-MM-dd')}_${l.format(Ct.displayMonth, 'yyyy-MM')}`,
                          day: Ct,
                          modifiers: $e,
                          className: Cc.join(' '),
                          style: Ar,
                          role: 'gridcell',
                          'aria-selected': $e.selected || void 0,
                          'aria-label': bu,
                          'data-day': l.format(fn, 'yyyy-MM-dd'),
                          'data-month': Ct.outside ? l.format(fn, 'yyyy-MM') : void 0,
                          'data-selected': $e.selected || void 0,
                          'data-disabled': $e.disabled || void 0,
                          'data-hidden': $e.hidden || void 0,
                          'data-outside': Ct.outside || void 0,
                          'data-focused': $e.focused || void 0,
                          'data-today': $e.today || void 0,
                        },
                        !$e.hidden && Yt
                          ? ee.createElement(
                              t.DayButton,
                              {
                                className: f[Te.DayButton],
                                style: O == null ? void 0 : O[Te.DayButton],
                                type: 'button',
                                day: Ct,
                                modifiers: $e,
                                disabled: $e.disabled || void 0,
                                tabIndex: ve(Ct) ? 0 : -1,
                                'aria-label': kt(fn, $e, l.options, l),
                                onClick: Ts(Ct, $e),
                                onBlur: M(Ct, $e),
                                onFocus: ma(Ct, $e),
                                onKeyDown: B(Ct, $e),
                                onMouseEnter: Z(Ct, $e),
                                onMouseLeave: fe(Ct, $e),
                              },
                              Y(fn, l.options, l)
                            )
                          : !$e.hidden && Y(Ct.date, l.options, l)
                      );
                    })
                  )
                )
              )
            )
          );
        })
      ),
      n.footer &&
        ee.createElement(
          t.Footer,
          {
            className: f[Te.Footer],
            style: O == null ? void 0 : O[Te.Footer],
            role: 'status',
            'aria-live': 'polite',
          },
          n.footer
        )
    )
  );
}
function qC({ title: n, id: t, error: r, type: i, register: l, control: o }) {
  const [f, h] = R.useState(void 0),
    m = xb(),
    [g, y] = R.useState(!1),
    v = R.useRef(null);
  return (
    R.useEffect(() => {
      const b = (w) => {
        v.current && !v.current.contains(w.target) && y(!1);
      };
      return (
        document.addEventListener('mousedown', b),
        () => {
          document.removeEventListener('mousedown', b);
        }
      );
    }, []),
    x.jsxs('div', {
      className: 'relative ',
      children: [
        x.jsx('label', {
          htmlFor: t,
          className: 'font-medium text-goldenrod capitalize p-1 font-main flex flex-col',
          children: n,
        }),
        x.jsx('input', {
          ...l,
          name: t,
          type: i,
          id: t,
          value: f ? Go(f, 'yyyy-MM-dd') : '',
          readOnly: !0,
          className: 'hidden',
        }),
        x.jsx(sO, {
          name: t,
          control: o,
          render: ({ field: b }) =>
            x.jsxs(x.Fragment, {
              children: [
                x.jsx('div', {
                  className:
                    'rounded-lg text-olive font-main p-1 w-[300px] hover:cursor-pointer focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki',
                  onClick: () => {
                    y(!g);
                  },
                  children: f ? Go(f, 'dd MMMM, yyyy') : 'Pick a date',
                }),
                g &&
                  x.jsx('div', {
                    tabIndex: 0,
                    ref: v,
                    className: 'absolute z-10 w-fit h-fit outline-none mt-1 -translate-y-1',
                    children: x.jsx(VC, {
                      mode: 'single',
                      disabled: { before: new Date(1930, 1, 1), after: new Date() },
                      selected: f,
                      onSelect: (w) => {
                        h(w), w && b.onChange(Go(w, 'yyyy-MM-dd')), y(!1);
                      },
                      onDayBlur: () => {
                        y(!g);
                      },
                      onDayClick: () => {
                        y(!g);
                      },
                      captionLayout: 'dropdown-years',
                      className: 'text-olive bg-khaki rounded-lg font-main w-[300px]',
                      classNames: {
                        today: 'border-goldenrod font-main-bd rounded-full outline-goldenrod',
                        selected: 'bg-goldenrod outline-olive outline-2 font-main-bd text-olive',
                        root: `${m.root} shadow-xl p-1`,
                        chevron: `${m.chevron} fill-olive`,
                        day: ` w-10 h-10 rounded-full text-center ${m.day}`,
                        disabled: 'opacity-50',
                        day_button: 'w-full h-full rounded-full cursor-pointer',
                        caption_label: 'hidden',
                        years_dropdown: `${m.years_dropdown} hover:cursor-pointer bg-khaki outline-0 `,
                        nav: `${m.nav} hover:cursor-pointer absolute left-2`,
                        month_caption: `${m.month_caption} flex justify-end pr-2`,
                        month_grid: `${m.month_caption} w-full`,
                        button_previous: `${m.button_previous} hover:cursor-pointer`,
                        button_next: `${m.button_next} hover:cursor-pointer`,
                      },
                    }),
                  }),
              ],
            }),
        }),
        x.jsx('p', {
          className: 'text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]',
          children: r ?? ' ',
        }),
      ],
    })
  );
}
function vh({ title: n, id: t, type: r, error: i, register: l }) {
  const [o, f] = R.useState(!1),
    h = r === 'password',
    m = r === 'checkbox',
    g = r === 'email',
    y = h ? (o ? 'text' : 'password') : r;
  return x.jsxs('div', {
    className: `relative ${m ? 'flex flex-wrap w-[300px] ' : ''}`,
    children: [
      x.jsx('label', {
        htmlFor: t,
        className: `font-medium text-goldenrod capitalize p-1 font-main ${m ? '' : 'flex flex-col'}`,
        children: n,
      }),
      x.jsx('input', {
        type: y,
        id: t,
        placeholder: 'Start typing...',
        className:
          'rounded-lg text-olive font-main ' +
          (m
            ? 'w-fit m-1 p-2 cursor-pointer accent-goldenrod mx-1 hover:accent-goldenrod'
            : 'p-1 w-[300px] focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki'),
        ...l,
        name: t,
        autoComplete: g ? 'on' : 'off',
      }),
      h &&
        x.jsx('button', {
          type: 'button',
          className: 'absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer pt-3',
          onClick: () => {
            f((v) => !v);
          },
          'aria-label': o ? 'Hide password' : 'Show password',
          children: o ? '🙉' : '🙈',
        }),
      x.jsx('p', {
        className: 'text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]',
        children: i ?? ' ',
      }),
    ],
  });
}
function wv({ title: n, content: t, register: r, errors: i, hint: l, control: o }) {
  var f;
  return x.jsxs('fieldset', {
    className: 'flex flex-row gap-4 p-2 flex-wrap justify-center',
    children: [
      x.jsxs('legend', {
        className: 'text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main',
        children: [n, l && x.jsx('p', { className: 'text-base text-goldenrod', children: l })],
      }),
      t.map((h) => {
        var y, v;
        const m = h.id;
        return String(m).toLowerCase().includes('date')
          ? x.jsx(
              qC,
              {
                title: h.title,
                error: (y = i[m]) == null ? void 0 : y.message,
                id: m,
                type: h.type,
                control: o,
                register: r(m),
              },
              String(m)
            )
          : x.jsx(
              vh,
              {
                title: h.title,
                id: String(m),
                type: h.type,
                register: r(m),
                error: (v = i[m]) == null ? void 0 : v.message,
              },
              String(m)
            );
      }),
      n.includes('address') &&
        x.jsx(VE, {
          id: `${n.split(' ')[0]}Country`,
          register: r(`${n.split(' ')[0]}Country`),
          error: (f = i[`${n.split(' ')[0]}Country`]) == null ? void 0 : f.message,
        }),
    ],
  });
}
const ss = new Date(),
  Vh = ne
    .string()
    .refine((n) => sb.some((t) => t.code === n), { message: 'Please select a country' }),
  YC = ne.object({
    firstName: ne
      .string()
      .min(2, 'First name must be at least 2 characters')
      .max(20, 'First name must be no longer than characters'),
    lastName: ne
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name must be no longer than characters'),
    dateOfBirth: ne.string().refine((n) => {
      const t = new Date(n);
      let r = ss.getFullYear() - t.getFullYear();
      const i = ss.getMonth() - t.getMonth(),
        l = ss.getDate() - t.getDate();
      return (i < 0 || (i === 0 && l < 0)) && r--, r >= 13;
    }, 'You must be at least 13 years old'),
  }),
  ZC = ne.object({
    email: ne
      .string()
      .min(1, 'Email is required')
      .superRefine((n, t) => {
        n !== n.trim() &&
          t.addIssue({
            code: ne.ZodIssueCode.custom,
            message: 'Email must not have leading or trailing spaces',
          }),
          n.includes('@') ||
            t.addIssue({
              code: ne.ZodIssueCode.custom,
              message: "Email must contain an '@' symbol",
            }),
          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(n) ||
            t.addIssue({
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
      .refine((n) => !/\s/.test(n), { message: 'Password must not contain spaces' }),
  }),
  FC = ne.object({
    petName: ne.string().min(2, 'First name must be at least 2 characters').max(20),
    petBirthDate: ne.string().refine((n) => {
      const t = new Date(n);
      let r = ss.getFullYear() - t.getFullYear();
      const i = ss.getMonth() - t.getMonth(),
        l = ss.getDate() - t.getDate();
      return (i < 0 || (i === 0 && l < 0)) && r--, r <= 35;
    }, 'Your pet must be very old... Try applying for Guinness World Records'),
  }),
  jb = /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/,
  GC = ne.object({
    shippingStreetName: ne.string().min(5, 'Please enter a valid street name'),
    shippingCity: ne.string().min(2, 'City name must be at least 2 characters').max(50),
    shippingPostalCode: ne.string().regex(jb, 'Postal code must be valid (e.g., 12345)'),
    shippingCountry: Vh,
  }),
  PC = ne.object({
    billingStreetName: ne.string().min(5, 'Please enter a valid street name').optional(),
    billingCity: ne.string().min(2, 'City name must be at least 2 characters').max(50).optional(),
    billingPostalCode: ne.string().regex(jb, 'Postal code must be valid (e.g., 12345)').optional(),
    billingCountry: Vh.optional(),
  }),
  Nl = YC.merge(ZC)
    .merge(FC)
    .merge(GC)
    .merge(PC)
    .extend({ defaultAddress: ne.boolean().optional() }),
  $C = Nl.extend({ sameAsShipping: ne.boolean().optional() }).refine(
    (n) => {
      if (n.sameAsShipping) return !0;
      const { billingStreetName: t, billingCity: r, billingPostalCode: i, billingCountry: l } = n;
      return ne
        .object({
          billingStreetName: Nl.shape.billingStreetName,
          billingCity: Nl.shape.billingCity,
          billingPostalCode: Nl.shape.billingPostalCode,
          billingCountry: Nl.shape.billingCountry,
        })
        .safeParse({
          billingStreetName: t,
          billingCity: r,
          billingPostalCode: i,
          billingCountry: l,
        }).success;
    },
    { message: 'Please fill billing address', path: ['sameAsShipping'] }
  );
async function QC(n, t, r) {
  var S, D, C, N;
  const i = Bb.safeParse(n),
    l = (S = i.data) == null ? void 0 : S.customer.version,
    o = (D = i.data) == null ? void 0 : D.customer.id,
    f = (C = i.data) == null ? void 0 : C.customer.addresses[0].id,
    h = (N = i.data) != null && N.customer.addresses[1] ? i.data.customer.addresses[1].id : f,
    m = [
      { action: 'addShippingAddressId', addressId: f },
      { action: 'addBillingAddressId', addressId: h },
    ],
    g = r
      ? [
          { action: 'setDefaultShippingAddress', addressId: f },
          { action: 'setDefaultBillingAddress', addressId: h },
        ]
      : [],
    y = { version: l ?? 1, actions: [...m, ...g] },
    b = await (
      await fetch(Ub + `/${o ?? ''}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(y),
      })
    ).json(),
    w = Lb.safeParse(b);
  if (!w.success)
    throw (
      (console.error('Invalid response structure:', w.error),
      console.log('Raw response:', b),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return w.data;
}
const KC = 'QMdMW3dn2QFBIFpoFRm_yfE0',
  WC = 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  XC = 'ecommerce2v',
  zb = 'europe-west1.gcp',
  IC = `https://api.${zb}.commercetools.com/${XC}`,
  Ub = `${IC}/customers`,
  JC = ne.object({
    error: ne.string(),
    error_description: ne.string().optional(),
    message: ne.string().optional(),
  }),
  eM = ne.object({ access_token: ne.string(), expires_in: ne.number(), token_type: ne.string() });
async function tM() {
  const n = KC,
    t = WC,
    r = `https://auth.${zb}.commercetools.com/oauth/token`,
    i = btoa(`${n}:${t}`),
    l = await fetch(r, {
      method: 'POST',
      headers: { Authorization: `Basic ${i}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials',
    }),
    o = await l.json();
  if (!l.ok) {
    const h = JC.safeParse(o);
    throw h.success
      ? new Error(
          `Token fetch failed: ${h.data.error_description ?? h.data.message ?? h.data.error}`
        )
      : new Error('Token fetch failed: Unknown error response');
  }
  const f = eM.safeParse(o);
  if (!f.success) throw new Error('Token fetch failed: Invalid response format');
  return console.log(f.data.access_token), f.data.access_token;
}
const nM = ne.object({ clientId: ne.string(), isPlatformClient: ne.boolean() }),
  aM = ne.object({
    clientId: ne.string().optional(),
    isPlatformClient: ne.boolean(),
    user: ne.object({ typeId: ne.string().optional(), id: ne.string().optional() }).optional(),
  }),
  Lb = ne
    .object({
      id: ne.string(),
      version: ne.number(),
      versionModifiedAt: ne.string(),
      lastMessageSequenceNumber: ne.number(),
      createdAt: ne.string(),
      lastModifiedAt: ne.string(),
      lastModifiedBy: aM,
      createdBy: nM,
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
          country: Vh,
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
  Bb = ne.object({ customer: Lb });
async function rM(n, t) {
  const r = await fetch(Ub, {
      method: 'POST',
      headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(n),
    }),
    i = await r.json();
  if (!r.ok) {
    const o = i.message ?? r.statusText;
    throw new Error(`Sign-up failed: ${o}`);
  }
  const l = Bb.safeParse(i);
  if (!l.success)
    throw (
      (console.error('Invalid response structure:', l.error.format()),
      console.log('Raw response:', i),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return l.data;
}
function iM(n) {
  const {
      register: t,
      handleSubmit: r,
      setValue: i,
      control: l,
      trigger: o,
      formState: { errors: f, isValid: h, isSubmitting: m },
    } = $0({ mode: 'all', resolver: K0($C) }),
    [g, y] = R.useState(null),
    v = H0({ name: 'sameAsShipping', control: l });
  return (
    R.useEffect(() => {
      i('defaultAddress', !1, { shouldValidate: !0 }),
        v &&
          (i('defaultAddress', !1, { shouldValidate: !0 }),
          i('billingStreetName', void 0, { shouldValidate: !1 }),
          i('billingCity', void 0, { shouldValidate: !1 }),
          i('billingPostalCode', void 0, { shouldValidate: !1 }),
          i('billingCountry', void 0, { shouldValidate: !1 }),
          o(['billingStreetName', 'billingCity', 'billingPostalCode', 'billingCountry'])),
        o(['defaultAddress']);
    }, [v, i, o]),
    {
      register: t,
      control: l,
      handleValidSubmit: async (w) => {
        const S = {
            firstName: w.firstName,
            lastName: w.lastName,
            streetName: w.shippingStreetName,
            city: w.shippingCity,
            postalCode: w.shippingPostalCode,
            country: w.shippingCountry,
          },
          D = w.sameAsShipping
            ? S
            : {
                firstName: w.firstName,
                lastName: w.lastName,
                streetName: w.billingStreetName ?? '',
                city: w.billingCity ?? '',
                postalCode: w.billingPostalCode ?? '',
                country: w.billingCountry,
              },
          C = w.sameAsShipping ? [S] : [S, D],
          N = {
            ...w,
            addresses: C,
            custom: {
              type: { key: 'customerCustomFields' },
              fields: { petName: w.petName, petBirthDate: w.petBirthDate },
            },
          };
        try {
          y('');
          const O = await tM(),
            k = await rM(N, O);
          console.log('Sign-up successful:', k);
          const Y = await QC(k, O, w.defaultAddress ?? !1);
          console.log('Addresses successful:', Y), n(w.firstName);
        } catch (O) {
          const k = O instanceof Error ? O.message : 'Something went wrong. Please try again.';
          console.log(O), y(k);
        }
      },
      handleSubmit: r,
      errors: f,
      isValid: h,
      isSubmitting: m,
      sameAsShipping: v,
      submitError: g,
    }
  );
}
const sM = [
    { title: 'first name', id: 'firstName', type: 'text' },
    { title: 'last name', id: 'lastName', type: 'text' },
    { title: 'date of birth', id: 'dateOfBirth', type: 'date' },
  ],
  lM = [
    { title: 'email', id: 'email', type: 'text' },
    { title: 'password', id: 'password', type: 'password' },
  ],
  uM = [
    { title: 'Pet name', id: 'petName', type: 'text' },
    { title: "pet's date of birth", id: 'petBirthDate', type: 'date' },
  ],
  oM = [
    { title: 'Street', id: 'shippingStreetName', type: 'text' },
    { title: 'City', id: 'shippingCity', type: 'text' },
    { title: 'Postal Code', id: 'shippingPostalCode', type: 'text' },
  ],
  cM = [
    { title: 'Street', id: 'billingStreetName', type: 'text' },
    { title: 'City', id: 'billingCity', type: 'text' },
    { title: 'Postal Code', id: 'billingPostalCode', type: 'text' },
  ],
  fM = [
    { title: 'user information', content: sM },
    { title: 'login information', content: lM },
    {
      title: 'pet information',
      content: uM,
      hint: "Fill the pet info to get a discount for your pet's birthday!",
    },
    { title: 'shipping address', content: oM },
  ];
function dM({ title: n, message: t, buttonText: r, closeModal: i }) {
  R.useEffect(
    () => (
      (document.body.style.overflow = 'hidden'),
      () => {
        document.body.style.overflow = '';
      }
    ),
    []
  );
  function l(o) {
    o.target === o.currentTarget && i();
  }
  return x.jsx('div', {
    className:
      'fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50',
    onClick: l,
    children: x.jsxs('div', {
      className:
        'bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center',
      children: [
        x.jsx('h2', {
          className: 'text-2xl font-bold text-goldenrod font-additional',
          children: n,
        }),
        x.jsx('p', { className: 'font-main text-lg text-olive pt-4 pb-4', children: t }),
        x.jsx('button', {
          onClick: i,
          className:
            'w-fit min-w-3xs bg-jungle text-white px-4 py-2 rounded-xl text-lg font-main hover:bg-opacity-90 hover:cursor-pointer',
          children: r,
        }),
      ],
    }),
  });
}
const hM = 'firstName';
function mM() {
  var C;
  const [n, t] = R.useState(!1),
    [r, i] = R.useState(''),
    l = an(),
    {
      register: o,
      control: f,
      handleValidSubmit: h,
      handleSubmit: m,
      errors: g,
      isValid: y,
      isSubmitting: v,
      sameAsShipping: b,
      submitError: w,
    } = iM((N) => {
      i(N), t(!0);
    });
  function S() {
    t(!1), localStorage.setItem(hM, r), l('/');
  }
  return x.jsxs('section', {
    className: 'w-fit flex flex-col items-center justify-center font-additional ',
    children: [
      x.jsx('h2', {
        className: 'text-3xl p-2 text-center text-jungle font-main-bd ',
        children: 'Registration',
      }),
      n &&
        x.jsx(dM, {
          title: 'Account created',
          message: x.jsxs(x.Fragment, {
            children: [
              'Welcome, ',
              r,
              '!',
              x.jsx('br', {}),
              'Your account has been created. You will be redirected to the main page.',
            ],
          }),
          buttonText: 'Confirm',
          closeModal: S,
        }),
      ';',
      x.jsxs('form', {
        className: 'flex flex-col gap-2 p-2 items-center',
        onSubmit: (N) => {
          N.preventDefault(), m(h)(N);
        },
        children: [
          fM.map(({ title: N, content: O, hint: k }) =>
            x.jsx(wv, { title: N, content: O, register: o, errors: g, control: f, hint: k }, N)
          ),
          x.jsx(vh, {
            type: 'checkbox',
            title: 'Billing address same as shipping',
            id: 'sameAsShipping',
            register: o('sameAsShipping'),
            error: (C = g.sameAsShipping) == null ? void 0 : C.message,
          }),
          b
            ? x.jsx(vh, {
                type: 'checkbox',
                title: 'Set as default address',
                id: 'defaultAddress',
                register: o('defaultAddress'),
              })
            : x.jsx(wv, { title: 'billing address', content: cM, register: o, errors: g }),
          x.jsx('button', {
            disabled: !y || v,
            type: 'submit',
            className:
              'w-fit p-1 px-3 text-white min-w-3xs bg-jungle rounded-xl m-2 text-2xl capitalize font-main font-medium hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
            children: v ? 'Loading...' : 'Submit!',
          }),
          w &&
            x.jsx('p', { className: 'text-coral text-sm p-1 w-[300px] text-center', children: w }),
        ],
      }),
    ],
  });
}
function gM({ additionalText: n, linkText: t, redirectTo: r }) {
  const i = an();
  function l() {
    i('/' + r);
  }
  return x.jsxs('div', {
    className: 'flex gap-2 bg-white items-center p-2 justify-center font-additional',
    children: [
      x.jsx('span', { className: 'text-jungle', children: n }),
      x.jsx('div', {
        onClick: l,
        className: 'text-jungle m-2 font-bold hover:cursor-pointer font-main',
        children: t,
      }),
    ],
  });
}
function yM() {
  return x.jsxs('section', {
    className: 'w-fit m-auto flex flex-col justify-center items-center rounded-lg bg-white',
    children: [
      x.jsx(gM, {
        additionalText: 'Already have an account?',
        linkText: 'Sign in →',
        redirectTo: 'login',
      }),
      x.jsx(mM, {}),
    ],
  });
}
const jo = {
    'canvas-page': '_canvas-page_1ox40_1',
    'catalog-title': '_catalog-title_1ox40_21',
    'catalog-background': '_catalog-background_1ox40_33',
    'catalog-img': '_catalog-img_1ox40_41',
  },
  pM = '/assets/corgiPaint-CeW47dEF.png';
function vM() {
  return (
    R.useEffect(() => {
      document.title = 'Catalog | Zoo Shop | Pet Supplies';
    }, []),
    x.jsxs('div', {
      className: jo['canvas-page'],
      children: [
        x.jsx('h2', { className: jo['catalog-title'], children: 'Catalog page coming soon”' }),
        x.jsx('div', {
          className: jo['catalog-background'],
          children: x.jsx('img', { className: jo['catalog-img'], src: pM, alt: 'catalog' }),
        }),
      ],
    })
  );
}
const Al = {
    'canvas-page': '_canvas-page_1iazc_1',
    'cart-background': '_cart-background_1iazc_19',
    'empty-img': '_empty-img_1iazc_31',
    'cart-title-empty': '_cart-title-empty_1iazc_39',
    'cart-text-empty': '_cart-text-empty_1iazc_51',
  },
  bM = '/assets/cartEmptyCorgi-Dd1WEbPa.png';
function _M() {
  return (
    R.useEffect(() => {
      document.title = 'Cart | Zoo Shop | Pet Supplies';
    }, []),
    x.jsxs('div', {
      className: Al['canvas-page'],
      children: [
        x.jsx('h2', {
          className: Al['cart-title-empty'],
          children: "It's time to start shopping!",
        }),
        x.jsx('span', {
          className: Al['cart-text-empty'],
          children: 'Fill it with discounts from our popular departments',
        }),
        x.jsx('div', {
          className: Al['cart-background'],
          children: x.jsx('img', { className: Al['empty-img'], src: bM, alt: 'empty' }),
        }),
      ],
    })
  );
}
const zo = {
    'canvas-page': '_canvas-page_16aco_1',
    'favorites-title': '_favorites-title_16aco_21',
    'favorites-background': '_favorites-background_16aco_33',
    'favorites-img': '_favorites-img_16aco_41',
  },
  SM = '/assets/corgiPaint-CeW47dEF.png';
function xM() {
  return (
    R.useEffect(() => {
      document.title = 'Favorites | Zoo Shop | Pet Supplies';
    }, []),
    x.jsxs('div', {
      className: zo['canvas-page'],
      children: [
        x.jsx('h2', { className: zo['favorites-title'], children: 'Favorites page coming soon”' }),
        x.jsx('div', {
          className: zo['favorites-background'],
          children: x.jsx('img', { className: zo['favorites-img'], src: SM, alt: 'favorites' }),
        }),
      ],
    })
  );
}
const Uo = {
    'canvas-page': '_canvas-page_vp1ul_1',
    'orders-title': '_orders-title_vp1ul_21',
    'orders-background': '_orders-background_vp1ul_33',
    'orders-img': '_orders-img_vp1ul_41',
  },
  wM = '/assets/corgiPaint-CeW47dEF.png';
function OM() {
  return (
    R.useEffect(() => {
      document.title = 'Order | Zoo Shop | Pet Supplies';
    }, []),
    x.jsxs('div', {
      className: Uo['canvas-page'],
      children: [
        x.jsx('h2', { className: Uo['orders-title'], children: 'Orders page coming soon”' }),
        x.jsx('div', {
          className: Uo['orders-background'],
          children: x.jsx('img', { className: Uo['orders-img'], src: wM, alt: 'orders' }),
        }),
      ],
    })
  );
}
const EM = '/assets/pageNotFound-CtxT6sMr.png',
  Lo = {
    'main-wrapper-404': '_main-wrapper-404_18x8j_1',
    'not-found-pages': '_not-found-pages_18x8j_17',
    'back-home-button': '_back-home-button_18x8j_31',
  };
function TM() {
  R.useEffect(() => {
    document.title = '404 | Zoo Shop | Pet Supplies';
  }, []);
  const n = an();
  function t() {
    n('/');
  }
  return x.jsx('main', {
    className: Lo.main,
    children: x.jsxs('div', {
      className: Lo['main-wrapper-404'],
      children: [
        x.jsx('button', { onClick: t, className: Lo['back-home-button'], children: 'Back Home' }),
        x.jsx('img', { className: Lo['not-found-pages'], src: EM, alt: '404 Page Not Found' }),
      ],
    }),
  });
}
function CM() {
  return x.jsx(_x, {
    children: x.jsxs(Jn, {
      path: '/',
      element: x.jsx(Ew, {}),
      children: [
        x.jsx(Jn, { index: !0, element: x.jsx(Iw, {}) }),
        x.jsx(Jn, { path: 'login', element: x.jsx(HE, {}) }),
        x.jsx(Jn, { path: '/registration', element: x.jsx(yM, {}) }),
        x.jsx(Jn, { path: 'catalog', element: x.jsx(vM, {}) }),
        x.jsx(Jn, { path: 'cart', element: x.jsx(_M, {}) }),
        x.jsx(Jn, { path: 'favorites', element: x.jsx(xM, {}) }),
        x.jsx(Jn, { path: 'orders', element: x.jsx(OM, {}) }),
        x.jsx(Jn, { path: '*', element: x.jsx(TM, {}) }),
      ],
    }),
  });
}
var th = { exports: {} },
  nh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ov;
function MM() {
  if (Ov) return nh;
  Ov = 1;
  var n = mc();
  function t(m, g) {
    return (m === g && (m !== 0 || 1 / m === 1 / g)) || (m !== m && g !== g);
  }
  var r = typeof Object.is == 'function' ? Object.is : t,
    i = n.useSyncExternalStore,
    l = n.useRef,
    o = n.useEffect,
    f = n.useMemo,
    h = n.useDebugValue;
  return (
    (nh.useSyncExternalStoreWithSelector = function (m, g, y, v, b) {
      var w = l(null);
      if (w.current === null) {
        var S = { hasValue: !1, value: null };
        w.current = S;
      } else S = w.current;
      w = f(
        function () {
          function C(q) {
            if (!N) {
              if (((N = !0), (O = q), (q = v(q)), b !== void 0 && S.hasValue)) {
                var K = S.value;
                if (b(K, q)) return (k = K);
              }
              return (k = q);
            }
            if (((K = k), r(O, q))) return K;
            var W = v(q);
            return b !== void 0 && b(K, W) ? ((O = q), K) : ((O = q), (k = W));
          }
          var N = !1,
            O,
            k,
            Y = y === void 0 ? null : y;
          return [
            function () {
              return C(g());
            },
            Y === null
              ? void 0
              : function () {
                  return C(Y());
                },
          ];
        },
        [g, y, v, b]
      );
      var D = i(m, w[0], w[1]);
      return (
        o(
          function () {
            (S.hasValue = !0), (S.value = D);
          },
          [D]
        ),
        h(D),
        D
      );
    }),
    nh
  );
}
var Ev;
function DM() {
  return Ev || ((Ev = 1), (th.exports = MM())), th.exports;
}
DM();
function NM(n) {
  n();
}
function AM() {
  let n = null,
    t = null;
  return {
    clear() {
      (n = null), (t = null);
    },
    notify() {
      NM(() => {
        let r = n;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let i = n;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0;
      const l = (t = { callback: r, next: null, prev: t });
      return (
        l.prev ? (l.prev.next = l) : (n = l),
        function () {
          !i ||
            n === null ||
            ((i = !1),
            l.next ? (l.next.prev = l.prev) : (t = l.prev),
            l.prev ? (l.prev.next = l.next) : (n = l.next));
        }
      );
    },
  };
}
var Tv = { notify() {}, get: () => [] };
function kM(n, t) {
  let r,
    i = Tv,
    l = 0,
    o = !1;
  function f(D) {
    y();
    const C = i.subscribe(D);
    let N = !1;
    return () => {
      N || ((N = !0), C(), v());
    };
  }
  function h() {
    i.notify();
  }
  function m() {
    S.onStateChange && S.onStateChange();
  }
  function g() {
    return o;
  }
  function y() {
    l++, r || ((r = n.subscribe(m)), (i = AM()));
  }
  function v() {
    l--, r && l === 0 && (r(), (r = void 0), i.clear(), (i = Tv));
  }
  function b() {
    o || ((o = !0), y());
  }
  function w() {
    o && ((o = !1), v());
  }
  const S = {
    addNestedSub: f,
    notifyNestedSubs: h,
    handleChangeWrapper: m,
    isSubscribed: g,
    trySubscribe: b,
    tryUnsubscribe: w,
    getListeners: () => i,
  };
  return S;
}
var RM = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jM = RM(),
  zM = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  UM = zM(),
  LM = () => (jM || UM ? R.useLayoutEffect : R.useEffect),
  BM = LM(),
  ah = Symbol.for('react-redux-context'),
  rh = typeof globalThis < 'u' ? globalThis : {};
function HM() {
  if (!R.createContext) return {};
  const n = rh[ah] ?? (rh[ah] = new Map());
  let t = n.get(R.createContext);
  return t || ((t = R.createContext(null)), n.set(R.createContext, t)), t;
}
var VM = HM();
function qM(n) {
  const { children: t, context: r, serverState: i, store: l } = n,
    o = R.useMemo(() => {
      const m = kM(l);
      return { store: l, subscription: m, getServerState: i ? () => i : void 0 };
    }, [l, i]),
    f = R.useMemo(() => l.getState(), [l]);
  BM(() => {
    const { subscription: m } = o;
    return (
      (m.onStateChange = m.notifyNestedSubs),
      m.trySubscribe(),
      f !== l.getState() && m.notifyNestedSubs(),
      () => {
        m.tryUnsubscribe(), (m.onStateChange = void 0);
      }
    );
  }, [o, f]);
  const h = r || VM;
  return R.createElement(h.Provider, { value: o }, t);
}
var YM = qM;
function qt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var ZM = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Cv = ZM,
  ih = () => Math.random().toString(36).substring(7).split('').join('.'),
  FM = {
    INIT: `@@redux/INIT${ih()}`,
    REPLACE: `@@redux/REPLACE${ih()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ih()}`,
  },
  rc = FM;
function qh(n) {
  if (typeof n != 'object' || n === null) return !1;
  let t = n;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(n) === t || Object.getPrototypeOf(n) === null;
}
function Hb(n, t, r) {
  if (typeof n != 'function') throw new Error(qt(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(qt(0));
  if ((typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)), typeof r < 'u')) {
    if (typeof r != 'function') throw new Error(qt(1));
    return r(Hb)(n, t);
  }
  let i = n,
    l = t,
    o = new Map(),
    f = o,
    h = 0,
    m = !1;
  function g() {
    f === o &&
      ((f = new Map()),
      o.forEach((C, N) => {
        f.set(N, C);
      }));
  }
  function y() {
    if (m) throw new Error(qt(3));
    return l;
  }
  function v(C) {
    if (typeof C != 'function') throw new Error(qt(4));
    if (m) throw new Error(qt(5));
    let N = !0;
    g();
    const O = h++;
    return (
      f.set(O, C),
      function () {
        if (N) {
          if (m) throw new Error(qt(6));
          (N = !1), g(), f.delete(O), (o = null);
        }
      }
    );
  }
  function b(C) {
    if (!qh(C)) throw new Error(qt(7));
    if (typeof C.type > 'u') throw new Error(qt(8));
    if (typeof C.type != 'string') throw new Error(qt(17));
    if (m) throw new Error(qt(9));
    try {
      (m = !0), (l = i(l, C));
    } finally {
      m = !1;
    }
    return (
      (o = f).forEach((O) => {
        O();
      }),
      C
    );
  }
  function w(C) {
    if (typeof C != 'function') throw new Error(qt(10));
    (i = C), b({ type: rc.REPLACE });
  }
  function S() {
    const C = v;
    return {
      subscribe(N) {
        if (typeof N != 'object' || N === null) throw new Error(qt(11));
        function O() {
          const Y = N;
          Y.next && Y.next(y());
        }
        return O(), { unsubscribe: C(O) };
      },
      [Cv]() {
        return this;
      },
    };
  }
  return (
    b({ type: rc.INIT }), { dispatch: b, subscribe: v, getState: y, replaceReducer: w, [Cv]: S }
  );
}
function GM(n) {
  Object.keys(n).forEach((t) => {
    const r = n[t];
    if (typeof r(void 0, { type: rc.INIT }) > 'u') throw new Error(qt(12));
    if (typeof r(void 0, { type: rc.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(qt(13));
  });
}
function PM(n) {
  const t = Object.keys(n),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const f = t[o];
    typeof n[f] == 'function' && (r[f] = n[f]);
  }
  const i = Object.keys(r);
  let l;
  try {
    GM(r);
  } catch (o) {
    l = o;
  }
  return function (f = {}, h) {
    if (l) throw l;
    let m = !1;
    const g = {};
    for (let y = 0; y < i.length; y++) {
      const v = i[y],
        b = r[v],
        w = f[v],
        S = b(w, h);
      if (typeof S > 'u') throw (h && h.type, new Error(qt(14)));
      (g[v] = S), (m = m || S !== w);
    }
    return (m = m || i.length !== Object.keys(f).length), m ? g : f;
  };
}
function ic(...n) {
  return n.length === 0
    ? (t) => t
    : n.length === 1
      ? n[0]
      : n.reduce(
          (t, r) =>
            (...i) =>
              t(r(...i))
        );
}
function $M(...n) {
  return (t) => (r, i) => {
    const l = t(r, i);
    let o = () => {
      throw new Error(qt(15));
    };
    const f = { getState: l.getState, dispatch: (m, ...g) => o(m, ...g) },
      h = n.map((m) => m(f));
    return (o = ic(...h)(l.dispatch)), { ...l, dispatch: o };
  };
}
function QM(n) {
  return qh(n) && 'type' in n && typeof n.type == 'string';
}
var Vb = Symbol.for('immer-nothing'),
  Mv = Symbol.for('immer-draftable'),
  xn = Symbol.for('immer-state');
function Yn(n, ...t) {
  throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`);
}
var _s = Object.getPrototypeOf;
function ui(n) {
  return !!n && !!n[xn];
}
function Za(n) {
  var t;
  return n
    ? qb(n) ||
        Array.isArray(n) ||
        !!n[Mv] ||
        !!((t = n.constructor) != null && t[Mv]) ||
        Sc(n) ||
        xc(n)
    : !1;
}
var KM = Object.prototype.constructor.toString();
function qb(n) {
  if (!n || typeof n != 'object') return !1;
  const t = _s(n);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object ? !0 : typeof r == 'function' && Function.toString.call(r) === KM;
}
function sc(n, t) {
  _c(n) === 0
    ? Reflect.ownKeys(n).forEach((r) => {
        t(r, n[r], n);
      })
    : n.forEach((r, i) => t(i, r, n));
}
function _c(n) {
  const t = n[xn];
  return t ? t.type_ : Array.isArray(n) ? 1 : Sc(n) ? 2 : xc(n) ? 3 : 0;
}
function bh(n, t) {
  return _c(n) === 2 ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}
function Yb(n, t, r) {
  const i = _c(n);
  i === 2 ? n.set(t, r) : i === 3 ? n.add(r) : (n[t] = r);
}
function WM(n, t) {
  return n === t ? n !== 0 || 1 / n === 1 / t : n !== n && t !== t;
}
function Sc(n) {
  return n instanceof Map;
}
function xc(n) {
  return n instanceof Set;
}
function Xr(n) {
  return n.copy_ || n.base_;
}
function _h(n, t) {
  if (Sc(n)) return new Map(n);
  if (xc(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const r = qb(n);
  if (t === !0 || (t === 'class_only' && !r)) {
    const i = Object.getOwnPropertyDescriptors(n);
    delete i[xn];
    let l = Reflect.ownKeys(i);
    for (let o = 0; o < l.length; o++) {
      const f = l[o],
        h = i[f];
      h.writable === !1 && ((h.writable = !0), (h.configurable = !0)),
        (h.get || h.set) &&
          (i[f] = { configurable: !0, writable: !0, enumerable: h.enumerable, value: n[f] });
    }
    return Object.create(_s(n), i);
  } else {
    const i = _s(n);
    if (i !== null && r) return { ...n };
    const l = Object.create(i);
    return Object.assign(l, n);
  }
}
function Yh(n, t = !1) {
  return (
    wc(n) ||
      ui(n) ||
      !Za(n) ||
      (_c(n) > 1 && (n.set = n.add = n.clear = n.delete = XM),
      Object.freeze(n),
      t && Object.entries(n).forEach(([r, i]) => Yh(i, !0))),
    n
  );
}
function XM() {
  Yn(2);
}
function wc(n) {
  return Object.isFrozen(n);
}
var IM = {};
function oi(n) {
  const t = IM[n];
  return t || Yn(0, n), t;
}
var ru;
function Zb() {
  return ru;
}
function JM(n, t) {
  return { drafts_: [], parent_: n, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Dv(n, t) {
  t && (oi('Patches'), (n.patches_ = []), (n.inversePatches_ = []), (n.patchListener_ = t));
}
function Sh(n) {
  xh(n), n.drafts_.forEach(eD), (n.drafts_ = null);
}
function xh(n) {
  n === ru && (ru = n.parent_);
}
function Nv(n) {
  return (ru = JM(ru, n));
}
function eD(n) {
  const t = n[xn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Av(n, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    n !== void 0 && n !== r
      ? (r[xn].modified_ && (Sh(t), Yn(4)),
        Za(n) && ((n = lc(t, n)), t.parent_ || uc(t, n)),
        t.patches_ &&
          oi('Patches').generateReplacementPatches_(r[xn].base_, n, t.patches_, t.inversePatches_))
      : (n = lc(t, r, [])),
    Sh(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    n !== Vb ? n : void 0
  );
}
function lc(n, t, r) {
  if (wc(t)) return t;
  const i = t[xn];
  if (!i) return sc(t, (l, o) => kv(n, i, t, l, o, r)), t;
  if (i.scope_ !== n) return t;
  if (!i.modified_) return uc(n, i.base_, !0), i.base_;
  if (!i.finalized_) {
    (i.finalized_ = !0), i.scope_.unfinalizedDrafts_--;
    const l = i.copy_;
    let o = l,
      f = !1;
    i.type_ === 3 && ((o = new Set(l)), l.clear(), (f = !0)),
      sc(o, (h, m) => kv(n, i, l, h, m, r, f)),
      uc(n, l, !1),
      r && n.patches_ && oi('Patches').generatePatches_(i, r, n.patches_, n.inversePatches_);
  }
  return i.copy_;
}
function kv(n, t, r, i, l, o, f) {
  if (ui(l)) {
    const h = o && t && t.type_ !== 3 && !bh(t.assigned_, i) ? o.concat(i) : void 0,
      m = lc(n, l, h);
    if ((Yb(r, i, m), ui(m))) n.canAutoFreeze_ = !1;
    else return;
  } else f && r.add(l);
  if (Za(l) && !wc(l)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    lc(n, l),
      (!t || !t.scope_.parent_) &&
        typeof i != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, i) &&
        uc(n, l);
  }
}
function uc(n, t, r = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Yh(t, r);
}
function tD(n, t) {
  const r = Array.isArray(n),
    i = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : Zb(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let l = i,
    o = Zh;
  r && ((l = [i]), (o = iu));
  const { revoke: f, proxy: h } = Proxy.revocable(l, o);
  return (i.draft_ = h), (i.revoke_ = f), h;
}
var Zh = {
    get(n, t) {
      if (t === xn) return n;
      const r = Xr(n);
      if (!bh(r, t)) return nD(n, r, t);
      const i = r[t];
      return n.finalized_ || !Za(i)
        ? i
        : i === sh(n.base_, t)
          ? (lh(n), (n.copy_[t] = Oh(i, n)))
          : i;
    },
    has(n, t) {
      return t in Xr(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(Xr(n));
    },
    set(n, t, r) {
      const i = Fb(Xr(n), t);
      if (i != null && i.set) return i.set.call(n.draft_, r), !0;
      if (!n.modified_) {
        const l = sh(Xr(n), t),
          o = l == null ? void 0 : l[xn];
        if (o && o.base_ === r) return (n.copy_[t] = r), (n.assigned_[t] = !1), !0;
        if (WM(r, l) && (r !== void 0 || bh(n.base_, t))) return !0;
        lh(n), wh(n);
      }
      return (
        (n.copy_[t] === r && (r !== void 0 || t in n.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(n.copy_[t])) ||
          ((n.copy_[t] = r), (n.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(n, t) {
      return (
        sh(n.base_, t) !== void 0 || t in n.base_
          ? ((n.assigned_[t] = !1), lh(n), wh(n))
          : delete n.assigned_[t],
        n.copy_ && delete n.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(n, t) {
      const r = Xr(n),
        i = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        i && {
          writable: !0,
          configurable: n.type_ !== 1 || t !== 'length',
          enumerable: i.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      Yn(11);
    },
    getPrototypeOf(n) {
      return _s(n.base_);
    },
    setPrototypeOf() {
      Yn(12);
    },
  },
  iu = {};
sc(Zh, (n, t) => {
  iu[n] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
iu.deleteProperty = function (n, t) {
  return iu.set.call(this, n, t, void 0);
};
iu.set = function (n, t, r) {
  return Zh.set.call(this, n[0], t, r, n[0]);
};
function sh(n, t) {
  const r = n[xn];
  return (r ? Xr(r) : n)[t];
}
function nD(n, t, r) {
  var l;
  const i = Fb(t, r);
  return i ? ('value' in i ? i.value : (l = i.get) == null ? void 0 : l.call(n.draft_)) : void 0;
}
function Fb(n, t) {
  if (!(t in n)) return;
  let r = _s(n);
  for (; r; ) {
    const i = Object.getOwnPropertyDescriptor(r, t);
    if (i) return i;
    r = _s(r);
  }
}
function wh(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && wh(n.parent_));
}
function lh(n) {
  n.copy_ || (n.copy_ = _h(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var aD = class {
  constructor(n) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, i) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const o = r;
          r = t;
          const f = this;
          return function (m = o, ...g) {
            return f.produce(m, (y) => r.call(this, y, ...g));
          };
        }
        typeof r != 'function' && Yn(6), i !== void 0 && typeof i != 'function' && Yn(7);
        let l;
        if (Za(t)) {
          const o = Nv(this),
            f = Oh(t, void 0);
          let h = !0;
          try {
            (l = r(f)), (h = !1);
          } finally {
            h ? Sh(o) : xh(o);
          }
          return Dv(o, i), Av(l, o);
        } else if (!t || typeof t != 'object') {
          if (
            ((l = r(t)),
            l === void 0 && (l = t),
            l === Vb && (l = void 0),
            this.autoFreeze_ && Yh(l, !0),
            i)
          ) {
            const o = [],
              f = [];
            oi('Patches').generateReplacementPatches_(t, l, o, f), i(o, f);
          }
          return l;
        } else Yn(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (f, ...h) => this.produceWithPatches(f, (m) => t(m, ...h));
        let i, l;
        return [
          this.produce(t, r, (f, h) => {
            (i = f), (l = h);
          }),
          i,
          l,
        ];
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' && this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Za(n) || Yn(8), ui(n) && (n = rD(n));
    const t = Nv(this),
      r = Oh(n, void 0);
    return (r[xn].isManual_ = !0), xh(t), r;
  }
  finishDraft(n, t) {
    const r = n && n[xn];
    (!r || !r.isManual_) && Yn(9);
    const { scope_: i } = r;
    return Dv(i, t), Av(void 0, i);
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const l = t[r];
      if (l.path.length === 0 && l.op === 'replace') {
        n = l.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const i = oi('Patches').applyPatches_;
    return ui(n) ? i(n, t) : this.produce(n, (l) => i(l, t));
  }
};
function Oh(n, t) {
  const r = Sc(n) ? oi('MapSet').proxyMap_(n, t) : xc(n) ? oi('MapSet').proxySet_(n, t) : tD(n, t);
  return (t ? t.scope_ : Zb()).drafts_.push(r), r;
}
function rD(n) {
  return ui(n) || Yn(10, n), Gb(n);
}
function Gb(n) {
  if (!Za(n) || wc(n)) return n;
  const t = n[xn];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = _h(n, t.scope_.immer_.useStrictShallowCopy_));
  } else r = _h(n, !0);
  return (
    sc(r, (i, l) => {
      Yb(r, i, Gb(l));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var wn = new aD(),
  Pb = wn.produce;
wn.produceWithPatches.bind(wn);
wn.setAutoFreeze.bind(wn);
wn.setUseStrictShallowCopy.bind(wn);
wn.applyPatches.bind(wn);
wn.createDraft.bind(wn);
wn.finishDraft.bind(wn);
function $b(n) {
  return ({ dispatch: r, getState: i }) =>
    (l) =>
    (o) =>
      typeof o == 'function' ? o(r, i, n) : l(o);
}
var iD = $b(),
  sD = $b,
  lD =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? ic : ic.apply(null, arguments);
        };
function Rv(n, t) {
  function r(...i) {
    if (t) {
      let l = t(...i);
      if (!l) throw new Error(Va(0));
      return {
        type: n,
        payload: l.payload,
        ...('meta' in l && { meta: l.meta }),
        ...('error' in l && { error: l.error }),
      };
    }
    return { type: n, payload: i[0] };
  }
  return (r.toString = () => `${n}`), (r.type = n), (r.match = (i) => QM(i) && i.type === n), r;
}
var Qb = class Ul extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ul.prototype);
  }
  static get [Symbol.species]() {
    return Ul;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Ul(...t[0].concat(this))
      : new Ul(...t.concat(this));
  }
};
function jv(n) {
  return Za(n) ? Pb(n, () => {}) : n;
}
function Bo(n, t, r) {
  return n.has(t) ? n.get(t) : n.set(t, r(t)).get(t);
}
function uD(n) {
  return typeof n == 'boolean';
}
var oD = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: i = !0,
        serializableCheck: l = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let f = new Qb();
      return r && (uD(r) ? f.push(iD) : f.push(sD(r.extraArgument))), f;
    },
  cD = 'RTK_autoBatch',
  zv = (n) => (t) => {
    setTimeout(t, n);
  },
  fD =
    (n = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const i = t(...r);
      let l = !0,
        o = !1,
        f = !1;
      const h = new Set(),
        m =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : zv(10)
              : n.type === 'callback'
                ? n.queueNotification
                : zv(n.timeout),
        g = () => {
          (f = !1), o && ((o = !1), h.forEach((y) => y()));
        };
      return Object.assign({}, i, {
        subscribe(y) {
          const v = () => l && y(),
            b = i.subscribe(v);
          return (
            h.add(y),
            () => {
              b(), h.delete(y);
            }
          );
        },
        dispatch(y) {
          var v;
          try {
            return (
              (l = !((v = y == null ? void 0 : y.meta) != null && v[cD])),
              (o = !l),
              o && (f || ((f = !0), m(g))),
              i.dispatch(y)
            );
          } finally {
            l = !0;
          }
        },
      });
    },
  dD = (n) =>
    function (r) {
      const { autoBatch: i = !0 } = r ?? {};
      let l = new Qb(n);
      return i && l.push(fD(typeof i == 'object' ? i : void 0)), l;
    };
function hD(n) {
  const t = oD(),
    {
      reducer: r = void 0,
      middleware: i,
      devTools: l = !0,
      preloadedState: o = void 0,
      enhancers: f = void 0,
    } = n || {};
  let h;
  if (typeof r == 'function') h = r;
  else if (qh(r)) h = PM(r);
  else throw new Error(Va(1));
  let m;
  typeof i == 'function' ? (m = i(t)) : (m = t());
  let g = ic;
  l && (g = lD({ trace: !1, ...(typeof l == 'object' && l) }));
  const y = $M(...m),
    v = dD(y);
  let b = typeof f == 'function' ? f(v) : v();
  const w = g(...b);
  return Hb(h, o, w);
}
function Kb(n) {
  const t = {},
    r = [];
  let i;
  const l = {
    addCase(o, f) {
      const h = typeof o == 'string' ? o : o.type;
      if (!h) throw new Error(Va(28));
      if (h in t) throw new Error(Va(29));
      return (t[h] = f), l;
    },
    addMatcher(o, f) {
      return r.push({ matcher: o, reducer: f }), l;
    },
    addDefaultCase(o) {
      return (i = o), l;
    },
  };
  return n(l), [t, r, i];
}
function mD(n) {
  return typeof n == 'function';
}
function gD(n, t) {
  let [r, i, l] = Kb(t),
    o;
  if (mD(n)) o = () => jv(n());
  else {
    const h = jv(n);
    o = () => h;
  }
  function f(h = o(), m) {
    let g = [r[m.type], ...i.filter(({ matcher: y }) => y(m)).map(({ reducer: y }) => y)];
    return (
      g.filter((y) => !!y).length === 0 && (g = [l]),
      g.reduce((y, v) => {
        if (v)
          if (ui(y)) {
            const w = v(y, m);
            return w === void 0 ? y : w;
          } else {
            if (Za(y)) return Pb(y, (b) => v(b, m));
            {
              const b = v(y, m);
              if (b === void 0) {
                if (y === null) return y;
                throw Error('A case reducer on a non-draftable value must not return undefined');
              }
              return b;
            }
          }
        return y;
      }, h)
    );
  }
  return (f.getInitialState = o), f;
}
var yD = Symbol.for('rtk-slice-createasyncthunk');
function pD(n, t) {
  return `${n}/${t}`;
}
function vD({ creators: n } = {}) {
  var r;
  const t = (r = n == null ? void 0 : n.asyncThunk) == null ? void 0 : r[yD];
  return function (l) {
    const { name: o, reducerPath: f = o } = l;
    if (!o) throw new Error(Va(11));
    const h = (typeof l.reducers == 'function' ? l.reducers(SD()) : l.reducers) || {},
      m = Object.keys(h),
      g = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      y = {
        addCase(Y, q) {
          const K = typeof Y == 'string' ? Y : Y.type;
          if (!K) throw new Error(Va(12));
          if (K in g.sliceCaseReducersByType) throw new Error(Va(13));
          return (g.sliceCaseReducersByType[K] = q), y;
        },
        addMatcher(Y, q) {
          return g.sliceMatchers.push({ matcher: Y, reducer: q }), y;
        },
        exposeAction(Y, q) {
          return (g.actionCreators[Y] = q), y;
        },
        exposeCaseReducer(Y, q) {
          return (g.sliceCaseReducersByName[Y] = q), y;
        },
      };
    m.forEach((Y) => {
      const q = h[Y],
        K = { reducerName: Y, type: pD(o, Y), createNotation: typeof l.reducers == 'function' };
      wD(q) ? ED(K, q, y, t) : xD(K, q, y);
    });
    function v() {
      const [Y = {}, q = [], K = void 0] =
          typeof l.extraReducers == 'function' ? Kb(l.extraReducers) : [l.extraReducers],
        W = { ...Y, ...g.sliceCaseReducersByType };
      return gD(l.initialState, (ie) => {
        for (let te in W) ie.addCase(te, W[te]);
        for (let te of g.sliceMatchers) ie.addMatcher(te.matcher, te.reducer);
        for (let te of q) ie.addMatcher(te.matcher, te.reducer);
        K && ie.addDefaultCase(K);
      });
    }
    const b = (Y) => Y,
      w = new Map(),
      S = new WeakMap();
    let D;
    function C(Y, q) {
      return D || (D = v()), D(Y, q);
    }
    function N() {
      return D || (D = v()), D.getInitialState();
    }
    function O(Y, q = !1) {
      function K(ie) {
        let te = ie[Y];
        return typeof te > 'u' && q && (te = Bo(S, K, N)), te;
      }
      function W(ie = b) {
        const te = Bo(w, q, () => new WeakMap());
        return Bo(te, ie, () => {
          const _e = {};
          for (const [be, se] of Object.entries(l.selectors ?? {}))
            _e[be] = bD(se, ie, () => Bo(S, ie, N), q);
          return _e;
        });
      }
      return {
        reducerPath: Y,
        getSelectors: W,
        get selectors() {
          return W(K);
        },
        selectSlice: K,
      };
    }
    const k = {
      name: o,
      reducer: C,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: N,
      ...O(f),
      injectInto(Y, { reducerPath: q, ...K } = {}) {
        const W = q ?? f;
        return Y.inject({ reducerPath: W, reducer: C }, K), { ...k, ...O(W, !0) };
      },
    };
    return k;
  };
}
function bD(n, t, r, i) {
  function l(o, ...f) {
    let h = t(o);
    return typeof h > 'u' && i && (h = r()), n(h, ...f);
  }
  return (l.unwrapped = n), l;
}
var _D = vD();
function SD() {
  function n(t, r) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...r };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(t, r) {
        return { _reducerDefinitionType: 'reducerWithPrepare', prepare: t, reducer: r };
      },
      asyncThunk: n,
    }
  );
}
function xD({ type: n, reducerName: t, createNotation: r }, i, l) {
  let o, f;
  if ('reducer' in i) {
    if (r && !OD(i)) throw new Error(Va(17));
    (o = i.reducer), (f = i.prepare);
  } else o = i;
  l.addCase(n, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, f ? Rv(n, f) : Rv(n));
}
function wD(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function OD(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function ED({ type: n, reducerName: t }, r, i, l) {
  if (!l) throw new Error(Va(18));
  const { payloadCreator: o, fulfilled: f, pending: h, rejected: m, settled: g, options: y } = r,
    v = l(n, o, y);
  i.exposeAction(t, v),
    f && i.addCase(v.fulfilled, f),
    h && i.addCase(v.pending, h),
    m && i.addCase(v.rejected, m),
    g && i.addMatcher(v.settled, g),
    i.exposeCaseReducer(t, {
      fulfilled: f || Ho,
      pending: h || Ho,
      rejected: m || Ho,
      settled: g || Ho,
    });
}
function Ho() {}
function Va(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const TD = { value: 0 },
  Wb = _D({
    name: 'counter',
    initialState: TD,
    reducers: {
      increment: (n) => {
        n.value += 1;
      },
      decrement: (n) => {
        n.value -= 1;
      },
      incrementByAmount: (n, t) => {
        n.value += t.payload;
      },
    },
  }),
  { increment: RN, decrement: jN, incrementByAmount: zN } = Wb.actions,
  CD = Wb.reducer,
  MD = hD({ reducer: { counter: CD } });
var Oc = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ec = typeof window > 'u' || 'Deno' in globalThis;
function Ln() {}
function DD(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function ND(n) {
  return typeof n == 'number' && n >= 0 && n !== 1 / 0;
}
function AD(n, t) {
  return Math.max(n + (t || 0) - Date.now(), 0);
}
function Uv(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function kD(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function Lv(n, t) {
  const { type: r = 'all', exact: i, fetchStatus: l, predicate: o, queryKey: f, stale: h } = n;
  if (f) {
    if (i) {
      if (t.queryHash !== Fh(f, t.options)) return !1;
    } else if (!lu(t.queryKey, f)) return !1;
  }
  if (r !== 'all') {
    const m = t.isActive();
    if ((r === 'active' && !m) || (r === 'inactive' && m)) return !1;
  }
  return !(
    (typeof h == 'boolean' && t.isStale() !== h) ||
    (l && l !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Bv(n, t) {
  const { exact: r, status: i, predicate: l, mutationKey: o } = n;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (su(t.options.mutationKey) !== su(o)) return !1;
    } else if (!lu(t.options.mutationKey, o)) return !1;
  }
  return !((i && t.state.status !== i) || (l && !l(t)));
}
function Fh(n, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || su)(n);
}
function su(n) {
  return JSON.stringify(n, (t, r) =>
    Eh(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, l) => ((i[l] = r[l]), i), {})
      : r
  );
}
function lu(n, t) {
  return n === t
    ? !0
    : typeof n != typeof t
      ? !1
      : n && t && typeof n == 'object' && typeof t == 'object'
        ? Object.keys(t).every((r) => lu(n[r], t[r]))
        : !1;
}
function Xb(n, t) {
  if (n === t) return n;
  const r = Hv(n) && Hv(t);
  if (r || (Eh(n) && Eh(t))) {
    const i = r ? n : Object.keys(n),
      l = i.length,
      o = r ? t : Object.keys(t),
      f = o.length,
      h = r ? [] : {};
    let m = 0;
    for (let g = 0; g < f; g++) {
      const y = r ? g : o[g];
      ((!r && i.includes(y)) || r) && n[y] === void 0 && t[y] === void 0
        ? ((h[y] = void 0), m++)
        : ((h[y] = Xb(n[y], t[y])), h[y] === n[y] && n[y] !== void 0 && m++);
    }
    return l === f && m === l ? n : h;
  }
  return t;
}
function Hv(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Eh(n) {
  if (!Vv(n)) return !1;
  const t = n.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Vv(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function Vv(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
function RD(n) {
  return new Promise((t) => {
    setTimeout(t, n);
  });
}
function jD(n, t, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(n, t)
    : r.structuralSharing !== !1
      ? Xb(n, t)
      : t;
}
function zD(n, t, r = 0) {
  const i = [...n, t];
  return r && i.length > r ? i.slice(1) : i;
}
function UD(n, t, r = 0) {
  const i = [t, ...n];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var Gh = Symbol();
function Ib(n, t) {
  return !n.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !n.queryFn || n.queryFn === Gh
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
var Jr,
  _r,
  ls,
  r0,
  LD =
    ((r0 = class extends Oc {
      constructor() {
        super();
        Ke(this, Jr);
        Ke(this, _r);
        Ke(this, ls);
        ze(this, ls, (t) => {
          if (!Ec && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener('visibilitychange', r, !1),
              () => {
                window.removeEventListener('visibilitychange', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        $(this, _r) || this.setEventListener($(this, ls));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = $(this, _r)) == null || t.call(this), ze(this, _r, void 0));
      }
      setEventListener(t) {
        var r;
        ze(this, ls, t),
          (r = $(this, _r)) == null || r.call(this),
          ze(
            this,
            _r,
            t((i) => {
              typeof i == 'boolean' ? this.setFocused(i) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        $(this, Jr) !== t && (ze(this, Jr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof $(this, Jr) == 'boolean'
          ? $(this, Jr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (Jr = new WeakMap()),
    (_r = new WeakMap()),
    (ls = new WeakMap()),
    r0),
  Jb = new LD(),
  us,
  Sr,
  os,
  i0,
  BD =
    ((i0 = class extends Oc {
      constructor() {
        super();
        Ke(this, us, !0);
        Ke(this, Sr);
        Ke(this, os);
        ze(this, os, (t) => {
          if (!Ec && window.addEventListener) {
            const r = () => t(!0),
              i = () => t(!1);
            return (
              window.addEventListener('online', r, !1),
              window.addEventListener('offline', i, !1),
              () => {
                window.removeEventListener('online', r), window.removeEventListener('offline', i);
              }
            );
          }
        });
      }
      onSubscribe() {
        $(this, Sr) || this.setEventListener($(this, os));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = $(this, Sr)) == null || t.call(this), ze(this, Sr, void 0));
      }
      setEventListener(t) {
        var r;
        ze(this, os, t),
          (r = $(this, Sr)) == null || r.call(this),
          ze(this, Sr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        $(this, us) !== t &&
          (ze(this, us, t),
          this.listeners.forEach((i) => {
            i(t);
          }));
      }
      isOnline() {
        return $(this, us);
      }
    }),
    (us = new WeakMap()),
    (Sr = new WeakMap()),
    (os = new WeakMap()),
    i0),
  oc = new BD();
function HD() {
  let n, t;
  const r = new Promise((l, o) => {
    (n = l), (t = o);
  });
  (r.status = 'pending'), r.catch(() => {});
  function i(l) {
    Object.assign(r, l), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (l) => {
      i({ status: 'fulfilled', value: l }), n(l);
    }),
    (r.reject = (l) => {
      i({ status: 'rejected', reason: l }), t(l);
    }),
    r
  );
}
function VD(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function e1(n) {
  return (n ?? 'online') === 'online' ? oc.isOnline() : !0;
}
var t1 = class extends Error {
  constructor(n) {
    super('CancelledError'),
      (this.revert = n == null ? void 0 : n.revert),
      (this.silent = n == null ? void 0 : n.silent);
  }
};
function uh(n) {
  return n instanceof t1;
}
function n1(n) {
  let t = !1,
    r = 0,
    i = !1,
    l;
  const o = HD(),
    f = (D) => {
      var C;
      i || (b(new t1(D)), (C = n.abort) == null || C.call(n));
    },
    h = () => {
      t = !0;
    },
    m = () => {
      t = !1;
    },
    g = () => Jb.isFocused() && (n.networkMode === 'always' || oc.isOnline()) && n.canRun(),
    y = () => e1(n.networkMode) && n.canRun(),
    v = (D) => {
      var C;
      i || ((i = !0), (C = n.onSuccess) == null || C.call(n, D), l == null || l(), o.resolve(D));
    },
    b = (D) => {
      var C;
      i || ((i = !0), (C = n.onError) == null || C.call(n, D), l == null || l(), o.reject(D));
    },
    w = () =>
      new Promise((D) => {
        var C;
        (l = (N) => {
          (i || g()) && D(N);
        }),
          (C = n.onPause) == null || C.call(n);
      }).then(() => {
        var D;
        (l = void 0), i || (D = n.onContinue) == null || D.call(n);
      }),
    S = () => {
      if (i) return;
      let D;
      const C = r === 0 ? n.initialPromise : void 0;
      try {
        D = C ?? n.fn();
      } catch (N) {
        D = Promise.reject(N);
      }
      Promise.resolve(D)
        .then(v)
        .catch((N) => {
          var K;
          if (i) return;
          const O = n.retry ?? (Ec ? 0 : 3),
            k = n.retryDelay ?? VD,
            Y = typeof k == 'function' ? k(r, N) : k,
            q = O === !0 || (typeof O == 'number' && r < O) || (typeof O == 'function' && O(r, N));
          if (t || !q) {
            b(N);
            return;
          }
          r++,
            (K = n.onFail) == null || K.call(n, r, N),
            RD(Y)
              .then(() => (g() ? void 0 : w()))
              .then(() => {
                t ? b(N) : S();
              });
        });
    };
  return {
    promise: o,
    cancel: f,
    continue: () => (l == null || l(), o),
    cancelRetry: h,
    continueRetry: m,
    canStart: y,
    start: () => (y() ? S() : w().then(S), o),
  };
}
var qD = (n) => setTimeout(n, 0);
function YD() {
  let n = [],
    t = 0,
    r = (h) => {
      h();
    },
    i = (h) => {
      h();
    },
    l = qD;
  const o = (h) => {
      t
        ? n.push(h)
        : l(() => {
            r(h);
          });
    },
    f = () => {
      const h = n;
      (n = []),
        h.length &&
          l(() => {
            i(() => {
              h.forEach((m) => {
                r(m);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let m;
      t++;
      try {
        m = h();
      } finally {
        t--, t || f();
      }
      return m;
    },
    batchCalls:
      (h) =>
      (...m) => {
        o(() => {
          h(...m);
        });
      },
    schedule: o,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      i = h;
    },
    setScheduler: (h) => {
      l = h;
    },
  };
}
var tn = YD(),
  ei,
  s0,
  a1 =
    ((s0 = class {
      constructor() {
        Ke(this, ei);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          ND(this.gcTime) &&
            ze(
              this,
              ei,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (Ec ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        $(this, ei) && (clearTimeout($(this, ei)), ze(this, ei, void 0));
      }
    }),
    (ei = new WeakMap()),
    s0),
  cs,
  fs,
  Rn,
  ti,
  Qt,
  ou,
  ni,
  Bn,
  Ra,
  l0,
  ZD =
    ((l0 = class extends a1 {
      constructor(t) {
        super();
        Ke(this, Bn);
        Ke(this, cs);
        Ke(this, fs);
        Ke(this, Rn);
        Ke(this, ti);
        Ke(this, Qt);
        Ke(this, ou);
        Ke(this, ni);
        ze(this, ni, !1),
          ze(this, ou, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          ze(this, ti, t.client),
          ze(this, Rn, $(this, ti).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          ze(this, cs, GD(this.options)),
          (this.state = t.state ?? $(this, cs)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = $(this, Qt)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...$(this, ou), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && $(this, Rn).remove(this);
      }
      setData(t, r) {
        const i = jD(this.state.data, t, this.options);
        return (
          Pt(this, Bn, Ra).call(this, {
            data: i,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          i
        );
      }
      setState(t, r) {
        Pt(this, Bn, Ra).call(this, { type: 'setState', state: t, setStateOptions: r });
      }
      cancel(t) {
        var i, l;
        const r = (i = $(this, Qt)) == null ? void 0 : i.promise;
        return (
          (l = $(this, Qt)) == null || l.cancel(t), r ? r.then(Ln).catch(Ln) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState($(this, cs));
      }
      isActive() {
        return this.observers.some((t) => kD(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Gh ||
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
          this.state.isInvalidated || this.state.data === void 0 || !AD(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = $(this, Qt)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = $(this, Qt)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          $(this, Rn).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            ($(this, Qt) &&
              ($(this, ni) ? $(this, Qt).cancel({ revert: !0 }) : $(this, Qt).cancelRetry()),
            this.scheduleGc()),
          $(this, Rn).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || Pt(this, Bn, Ra).call(this, { type: 'invalidate' });
      }
      fetch(t, r) {
        var m, g, y;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if ($(this, Qt)) return $(this, Qt).continueRetry(), $(this, Qt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const v = this.observers.find((b) => b.options.queryFn);
          v && this.setOptions(v.options);
        }
        const i = new AbortController(),
          l = (v) => {
            Object.defineProperty(v, 'signal', {
              enumerable: !0,
              get: () => (ze(this, ni, !0), i.signal),
            });
          },
          o = () => {
            const v = Ib(this.options, r),
              b = { client: $(this, ti), queryKey: this.queryKey, meta: this.meta };
            return (
              l(b),
              ze(this, ni, !1),
              this.options.persister ? this.options.persister(v, b, this) : v(b)
            );
          },
          f = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: $(this, ti),
            state: this.state,
            fetchFn: o,
          };
        l(f),
          (m = this.options.behavior) == null || m.onFetch(f, this),
          ze(this, fs, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) &&
            Pt(this, Bn, Ra).call(this, {
              type: 'fetch',
              meta: (y = f.fetchOptions) == null ? void 0 : y.meta,
            });
        const h = (v) => {
          var b, w, S, D;
          (uh(v) && v.silent) || Pt(this, Bn, Ra).call(this, { type: 'error', error: v }),
            uh(v) ||
              ((w = (b = $(this, Rn).config).onError) == null || w.call(b, v, this),
              (D = (S = $(this, Rn).config).onSettled) == null ||
                D.call(S, this.state.data, v, this)),
            this.scheduleGc();
        };
        return (
          ze(
            this,
            Qt,
            n1({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: f.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (v) => {
                var b, w, S, D;
                if (v === void 0) {
                  h(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(v);
                } catch (C) {
                  h(C);
                  return;
                }
                (w = (b = $(this, Rn).config).onSuccess) == null || w.call(b, v, this),
                  (D = (S = $(this, Rn).config).onSettled) == null ||
                    D.call(S, v, this.state.error, this),
                  this.scheduleGc();
              },
              onError: h,
              onFail: (v, b) => {
                Pt(this, Bn, Ra).call(this, { type: 'failed', failureCount: v, error: b });
              },
              onPause: () => {
                Pt(this, Bn, Ra).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Pt(this, Bn, Ra).call(this, { type: 'continue' });
              },
              retry: f.options.retry,
              retryDelay: f.options.retryDelay,
              networkMode: f.options.networkMode,
              canRun: () => !0,
            })
          ),
          $(this, Qt).start()
        );
      }
    }),
    (cs = new WeakMap()),
    (fs = new WeakMap()),
    (Rn = new WeakMap()),
    (ti = new WeakMap()),
    (Qt = new WeakMap()),
    (ou = new WeakMap()),
    (ni = new WeakMap()),
    (Bn = new WeakSet()),
    (Ra = function (t) {
      const r = (i) => {
        switch (t.type) {
          case 'failed':
            return { ...i, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case 'pause':
            return { ...i, fetchStatus: 'paused' };
          case 'continue':
            return { ...i, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...i, ...FD(i.data, this.options), fetchMeta: t.meta ?? null };
          case 'success':
            return {
              ...i,
              data: t.data,
              dataUpdateCount: i.dataUpdateCount + 1,
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
            const l = t.error;
            return uh(l) && l.revert && $(this, fs)
              ? { ...$(this, fs), fetchStatus: 'idle' }
              : {
                  ...i,
                  error: l,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: l,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...i, isInvalidated: !0 };
          case 'setState':
            return { ...i, ...t.state };
        }
      };
      (this.state = r(this.state)),
        tn.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            $(this, Rn).notify({ query: this, type: 'updated', action: t });
        });
    }),
    l0);
function FD(n, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: e1(t.networkMode) ? 'fetching' : 'paused',
    ...(n === void 0 && { error: null, status: 'pending' }),
  };
}
function GD(n) {
  const t = typeof n.initialData == 'function' ? n.initialData() : n.initialData,
    r = t !== void 0,
    i = r
      ? typeof n.initialDataUpdatedAt == 'function'
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var ta,
  u0,
  PD =
    ((u0 = class extends Oc {
      constructor(t = {}) {
        super();
        Ke(this, ta);
        (this.config = t), ze(this, ta, new Map());
      }
      build(t, r, i) {
        const l = r.queryKey,
          o = r.queryHash ?? Fh(l, r);
        let f = this.get(o);
        return (
          f ||
            ((f = new ZD({
              client: t,
              queryKey: l,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: i,
              defaultOptions: t.getQueryDefaults(l),
            })),
            this.add(f)),
          f
        );
      }
      add(t) {
        $(this, ta).has(t.queryHash) ||
          ($(this, ta).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const r = $(this, ta).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && $(this, ta).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        tn.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return $(this, ta).get(t);
      }
      getAll() {
        return [...$(this, ta).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Lv(r, i));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((i) => Lv(t, i)) : r;
      }
      notify(t) {
        tn.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        tn.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        tn.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (ta = new WeakMap()),
    u0),
  na,
  It,
  ai,
  aa,
  br,
  o0,
  $D =
    ((o0 = class extends a1 {
      constructor(t) {
        super();
        Ke(this, aa);
        Ke(this, na);
        Ke(this, It);
        Ke(this, ai);
        (this.mutationId = t.mutationId),
          ze(this, It, t.mutationCache),
          ze(this, na, []),
          (this.state = t.state || QD()),
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
        $(this, na).includes(t) ||
          ($(this, na).push(t),
          this.clearGcTimeout(),
          $(this, It).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        ze(
          this,
          na,
          $(this, na).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          $(this, It).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        $(this, na).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : $(this, It).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = $(this, ai)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, f, h, m, g, y, v, b, w, S, D, C, N, O, k, Y, q, K, W, ie;
        const r = () => {
          Pt(this, aa, br).call(this, { type: 'continue' });
        };
        ze(
          this,
          ai,
          n1({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (te, _e) => {
              Pt(this, aa, br).call(this, { type: 'failed', failureCount: te, error: _e });
            },
            onPause: () => {
              Pt(this, aa, br).call(this, { type: 'pause' });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => $(this, It).canRun(this),
          })
        );
        const i = this.state.status === 'pending',
          l = !$(this, ai).canStart();
        try {
          if (i) r();
          else {
            Pt(this, aa, br).call(this, { type: 'pending', variables: t, isPaused: l }),
              await ((f = (o = $(this, It).config).onMutate) == null ? void 0 : f.call(o, t, this));
            const _e = await ((m = (h = this.options).onMutate) == null ? void 0 : m.call(h, t));
            _e !== this.state.context &&
              Pt(this, aa, br).call(this, {
                type: 'pending',
                context: _e,
                variables: t,
                isPaused: l,
              });
          }
          const te = await $(this, ai).start();
          return (
            await ((y = (g = $(this, It).config).onSuccess) == null
              ? void 0
              : y.call(g, te, t, this.state.context, this)),
            await ((b = (v = this.options).onSuccess) == null
              ? void 0
              : b.call(v, te, t, this.state.context)),
            await ((S = (w = $(this, It).config).onSettled) == null
              ? void 0
              : S.call(w, te, null, this.state.variables, this.state.context, this)),
            await ((C = (D = this.options).onSettled) == null
              ? void 0
              : C.call(D, te, null, t, this.state.context)),
            Pt(this, aa, br).call(this, { type: 'success', data: te }),
            te
          );
        } catch (te) {
          try {
            throw (
              (await ((O = (N = $(this, It).config).onError) == null
                ? void 0
                : O.call(N, te, t, this.state.context, this)),
              await ((Y = (k = this.options).onError) == null
                ? void 0
                : Y.call(k, te, t, this.state.context)),
              await ((K = (q = $(this, It).config).onSettled) == null
                ? void 0
                : K.call(q, void 0, te, this.state.variables, this.state.context, this)),
              await ((ie = (W = this.options).onSettled) == null
                ? void 0
                : ie.call(W, void 0, te, t, this.state.context)),
              te)
            );
          } finally {
            Pt(this, aa, br).call(this, { type: 'error', error: te });
          }
        } finally {
          $(this, It).runNext(this);
        }
      }
    }),
    (na = new WeakMap()),
    (It = new WeakMap()),
    (ai = new WeakMap()),
    (aa = new WeakSet()),
    (br = function (t) {
      const r = (i) => {
        switch (t.type) {
          case 'failed':
            return { ...i, failureCount: t.failureCount, failureReason: t.error };
          case 'pause':
            return { ...i, isPaused: !0 };
          case 'continue':
            return { ...i, isPaused: !1 };
          case 'pending':
            return {
              ...i,
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
              ...i,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...i,
              data: void 0,
              error: t.error,
              failureCount: i.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = r(this.state)),
        tn.batch(() => {
          $(this, na).forEach((i) => {
            i.onMutationUpdate(t);
          }),
            $(this, It).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    o0);
function QD() {
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
var za,
  Hn,
  cu,
  c0,
  KD =
    ((c0 = class extends Oc {
      constructor(t = {}) {
        super();
        Ke(this, za);
        Ke(this, Hn);
        Ke(this, cu);
        (this.config = t), ze(this, za, new Set()), ze(this, Hn, new Map()), ze(this, cu, 0);
      }
      build(t, r, i) {
        const l = new $D({
          mutationCache: this,
          mutationId: ++Ao(this, cu)._,
          options: t.defaultMutationOptions(r),
          state: i,
        });
        return this.add(l), l;
      }
      add(t) {
        $(this, za).add(t);
        const r = Vo(t);
        if (typeof r == 'string') {
          const i = $(this, Hn).get(r);
          i ? i.push(t) : $(this, Hn).set(r, [t]);
        }
        this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        if ($(this, za).delete(t)) {
          const r = Vo(t);
          if (typeof r == 'string') {
            const i = $(this, Hn).get(r);
            if (i)
              if (i.length > 1) {
                const l = i.indexOf(t);
                l !== -1 && i.splice(l, 1);
              } else i[0] === t && $(this, Hn).delete(r);
          }
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        const r = Vo(t);
        if (typeof r == 'string') {
          const i = $(this, Hn).get(r),
            l = i == null ? void 0 : i.find((o) => o.state.status === 'pending');
          return !l || l === t;
        } else return !0;
      }
      runNext(t) {
        var i;
        const r = Vo(t);
        if (typeof r == 'string') {
          const l =
            (i = $(this, Hn).get(r)) == null ? void 0 : i.find((o) => o !== t && o.state.isPaused);
          return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        tn.batch(() => {
          $(this, za).forEach((t) => {
            this.notify({ type: 'removed', mutation: t });
          }),
            $(this, za).clear(),
            $(this, Hn).clear();
        });
      }
      getAll() {
        return Array.from($(this, za));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Bv(r, i));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Bv(t, r));
      }
      notify(t) {
        tn.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return tn.batch(() => Promise.all(t.map((r) => r.continue().catch(Ln))));
      }
    }),
    (za = new WeakMap()),
    (Hn = new WeakMap()),
    (cu = new WeakMap()),
    c0);
function Vo(n) {
  var t;
  return (t = n.options.scope) == null ? void 0 : t.id;
}
function qv(n) {
  return {
    onFetch: (t, r) => {
      var y, v, b, w, S;
      const i = t.options,
        l =
          (b =
            (v = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : v.fetchMore) ==
          null
            ? void 0
            : b.direction,
        o = ((w = t.state.data) == null ? void 0 : w.pages) || [],
        f = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        m = 0;
      const g = async () => {
        let D = !1;
        const C = (k) => {
            Object.defineProperty(k, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (D = !0)
                  : t.signal.addEventListener('abort', () => {
                      D = !0;
                    }),
                t.signal
              ),
            });
          },
          N = Ib(t.options, t.fetchOptions),
          O = async (k, Y, q) => {
            if (D) return Promise.reject();
            if (Y == null && k.pages.length) return Promise.resolve(k);
            const K = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: Y,
              direction: q ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            C(K);
            const W = await N(K),
              { maxPages: ie } = t.options,
              te = q ? UD : zD;
            return { pages: te(k.pages, W, ie), pageParams: te(k.pageParams, Y, ie) };
          };
        if (l && o.length) {
          const k = l === 'backward',
            Y = k ? WD : Yv,
            q = { pages: o, pageParams: f },
            K = Y(i, q);
          h = await O(q, K, k);
        } else {
          const k = n ?? o.length;
          do {
            const Y = m === 0 ? (f[0] ?? i.initialPageParam) : Yv(i, h);
            if (m > 0 && Y == null) break;
            (h = await O(h, Y)), m++;
          } while (m < k);
        }
        return h;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var D, C;
            return (C = (D = t.options).persister) == null
              ? void 0
              : C.call(
                  D,
                  g,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r
                );
          })
        : (t.fetchFn = g);
    },
  };
}
function Yv(n, { pages: t, pageParams: r }) {
  const i = t.length - 1;
  return t.length > 0 ? n.getNextPageParam(t[i], t, r[i], r) : void 0;
}
function WD(n, { pages: t, pageParams: r }) {
  var i;
  return t.length > 0
    ? (i = n.getPreviousPageParam) == null
      ? void 0
      : i.call(n, t[0], t, r[0], r)
    : void 0;
}
var vt,
  xr,
  wr,
  ds,
  hs,
  Or,
  ms,
  gs,
  f0,
  XD =
    ((f0 = class {
      constructor(n = {}) {
        Ke(this, vt);
        Ke(this, xr);
        Ke(this, wr);
        Ke(this, ds);
        Ke(this, hs);
        Ke(this, Or);
        Ke(this, ms);
        Ke(this, gs);
        ze(this, vt, n.queryCache || new PD()),
          ze(this, xr, n.mutationCache || new KD()),
          ze(this, wr, n.defaultOptions || {}),
          ze(this, ds, new Map()),
          ze(this, hs, new Map()),
          ze(this, Or, 0);
      }
      mount() {
        Ao(this, Or)._++,
          $(this, Or) === 1 &&
            (ze(
              this,
              ms,
              Jb.subscribe(async (n) => {
                n && (await this.resumePausedMutations(), $(this, vt).onFocus());
              })
            ),
            ze(
              this,
              gs,
              oc.subscribe(async (n) => {
                n && (await this.resumePausedMutations(), $(this, vt).onOnline());
              })
            ));
      }
      unmount() {
        var n, t;
        Ao(this, Or)._--,
          $(this, Or) === 0 &&
            ((n = $(this, ms)) == null || n.call(this),
            ze(this, ms, void 0),
            (t = $(this, gs)) == null || t.call(this),
            ze(this, gs, void 0));
      }
      isFetching(n) {
        return $(this, vt).findAll({ ...n, fetchStatus: 'fetching' }).length;
      }
      isMutating(n) {
        return $(this, xr).findAll({ ...n, status: 'pending' }).length;
      }
      getQueryData(n) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: n });
        return (r = $(this, vt).get(t.queryHash)) == null ? void 0 : r.state.data;
      }
      ensureQueryData(n) {
        const t = this.defaultQueryOptions(n),
          r = $(this, vt).build(this, t),
          i = r.state.data;
        return i === void 0
          ? this.fetchQuery(n)
          : (n.revalidateIfStale && r.isStaleByTime(Uv(t.staleTime, r)) && this.prefetchQuery(t),
            Promise.resolve(i));
      }
      getQueriesData(n) {
        return $(this, vt)
          .findAll(n)
          .map(({ queryKey: t, state: r }) => {
            const i = r.data;
            return [t, i];
          });
      }
      setQueryData(n, t, r) {
        const i = this.defaultQueryOptions({ queryKey: n }),
          l = $(this, vt).get(i.queryHash),
          o = l == null ? void 0 : l.state.data,
          f = DD(t, o);
        if (f !== void 0)
          return $(this, vt)
            .build(this, i)
            .setData(f, { ...r, manual: !0 });
      }
      setQueriesData(n, t, r) {
        return tn.batch(() =>
          $(this, vt)
            .findAll(n)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, t, r)])
        );
      }
      getQueryState(n) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: n });
        return (r = $(this, vt).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(n) {
        const t = $(this, vt);
        tn.batch(() => {
          t.findAll(n).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(n, t) {
        const r = $(this, vt);
        return tn.batch(
          () => (
            r.findAll(n).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries({ type: 'active', ...n }, t)
          )
        );
      }
      cancelQueries(n, t = {}) {
        const r = { revert: !0, ...t },
          i = tn.batch(() =>
            $(this, vt)
              .findAll(n)
              .map((l) => l.cancel(r))
          );
        return Promise.all(i).then(Ln).catch(Ln);
      }
      invalidateQueries(n, t = {}) {
        return tn.batch(
          () => (
            $(this, vt)
              .findAll(n)
              .forEach((r) => {
                r.invalidate();
              }),
            (n == null ? void 0 : n.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...n,
                    type:
                      (n == null ? void 0 : n.refetchType) ??
                      (n == null ? void 0 : n.type) ??
                      'active',
                  },
                  t
                )
          )
        );
      }
      refetchQueries(n, t = {}) {
        const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          i = tn.batch(() =>
            $(this, vt)
              .findAll(n)
              .filter((l) => !l.isDisabled())
              .map((l) => {
                let o = l.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(Ln)),
                  l.state.fetchStatus === 'paused' ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(i).then(Ln);
      }
      fetchQuery(n) {
        const t = this.defaultQueryOptions(n);
        t.retry === void 0 && (t.retry = !1);
        const r = $(this, vt).build(this, t);
        return r.isStaleByTime(Uv(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
      }
      prefetchQuery(n) {
        return this.fetchQuery(n).then(Ln).catch(Ln);
      }
      fetchInfiniteQuery(n) {
        return (n.behavior = qv(n.pages)), this.fetchQuery(n);
      }
      prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(Ln).catch(Ln);
      }
      ensureInfiniteQueryData(n) {
        return (n.behavior = qv(n.pages)), this.ensureQueryData(n);
      }
      resumePausedMutations() {
        return oc.isOnline() ? $(this, xr).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return $(this, vt);
      }
      getMutationCache() {
        return $(this, xr);
      }
      getDefaultOptions() {
        return $(this, wr);
      }
      setDefaultOptions(n) {
        ze(this, wr, n);
      }
      setQueryDefaults(n, t) {
        $(this, ds).set(su(n), { queryKey: n, defaultOptions: t });
      }
      getQueryDefaults(n) {
        const t = [...$(this, ds).values()],
          r = {};
        return (
          t.forEach((i) => {
            lu(n, i.queryKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(n, t) {
        $(this, hs).set(su(n), { mutationKey: n, defaultOptions: t });
      }
      getMutationDefaults(n) {
        const t = [...$(this, hs).values()],
          r = {};
        return (
          t.forEach((i) => {
            lu(n, i.mutationKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(n) {
        if (n._defaulted) return n;
        const t = {
          ...$(this, wr).queries,
          ...this.getQueryDefaults(n.queryKey),
          ...n,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Fh(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === Gh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(n) {
        return n != null && n._defaulted
          ? n
          : {
              ...$(this, wr).mutations,
              ...((n == null ? void 0 : n.mutationKey) && this.getMutationDefaults(n.mutationKey)),
              ...n,
              _defaulted: !0,
            };
      }
      clear() {
        $(this, vt).clear(), $(this, xr).clear();
      }
    }),
    (vt = new WeakMap()),
    (xr = new WeakMap()),
    (wr = new WeakMap()),
    (ds = new WeakMap()),
    (hs = new WeakMap()),
    (Or = new WeakMap()),
    (ms = new WeakMap()),
    (gs = new WeakMap()),
    f0),
  ID = R.createContext(void 0),
  JD = ({ client: n, children: t }) => (
    R.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    x.jsx(ID.Provider, { value: n, children: t })
  );
const eN = new XD(),
  ke = (n) => typeof n == 'string',
  kl = () => {
    let n, t;
    const r = new Promise((i, l) => {
      (n = i), (t = l);
    });
    return (r.resolve = n), (r.reject = t), r;
  },
  Zv = (n) => (n == null ? '' : '' + n),
  tN = (n, t, r) => {
    n.forEach((i) => {
      t[i] && (r[i] = t[i]);
    });
  },
  nN = /###/g,
  Fv = (n) => (n && n.indexOf('###') > -1 ? n.replace(nN, '.') : n),
  Gv = (n) => !n || ke(n),
  Vl = (n, t, r) => {
    const i = ke(t) ? t.split('.') : t;
    let l = 0;
    for (; l < i.length - 1; ) {
      if (Gv(n)) return {};
      const o = Fv(i[l]);
      !n[o] && r && (n[o] = new r()),
        Object.prototype.hasOwnProperty.call(n, o) ? (n = n[o]) : (n = {}),
        ++l;
    }
    return Gv(n) ? {} : { obj: n, k: Fv(i[l]) };
  },
  Pv = (n, t, r) => {
    const { obj: i, k: l } = Vl(n, t, Object);
    if (i !== void 0 || t.length === 1) {
      i[l] = r;
      return;
    }
    let o = t[t.length - 1],
      f = t.slice(0, t.length - 1),
      h = Vl(n, f, Object);
    for (; h.obj === void 0 && f.length; )
      (o = `${f[f.length - 1]}.${o}`),
        (f = f.slice(0, f.length - 1)),
        (h = Vl(n, f, Object)),
        h != null && h.obj && typeof h.obj[`${h.k}.${o}`] < 'u' && (h.obj = void 0);
    h.obj[`${h.k}.${o}`] = r;
  },
  aN = (n, t, r, i) => {
    const { obj: l, k: o } = Vl(n, t, Object);
    (l[o] = l[o] || []), l[o].push(r);
  },
  cc = (n, t) => {
    const { obj: r, k: i } = Vl(n, t);
    if (r && Object.prototype.hasOwnProperty.call(r, i)) return r[i];
  },
  rN = (n, t, r) => {
    const i = cc(n, r);
    return i !== void 0 ? i : cc(t, r);
  },
  r1 = (n, t, r) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in n
          ? ke(n[i]) || n[i] instanceof String || ke(t[i]) || t[i] instanceof String
            ? r && (n[i] = t[i])
            : r1(n[i], t[i], r)
          : (n[i] = t[i]));
    return n;
  },
  ts = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var iN = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const sN = (n) => (ke(n) ? n.replace(/[&<>"'\/]/g, (t) => iN[t]) : n);
class lN {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const r = this.regExpMap.get(t);
    if (r !== void 0) return r;
    const i = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, i),
      this.regExpQueue.push(t),
      i
    );
  }
}
const uN = [' ', ',', '?', '!', ';'],
  oN = new lN(20),
  cN = (n, t, r) => {
    (t = t || ''), (r = r || '');
    const i = uN.filter((f) => t.indexOf(f) < 0 && r.indexOf(f) < 0);
    if (i.length === 0) return !0;
    const l = oN.getRegExp(`(${i.map((f) => (f === '?' ? '\\?' : f)).join('|')})`);
    let o = !l.test(n);
    if (!o) {
      const f = n.indexOf(r);
      f > 0 && !l.test(n.substring(0, f)) && (o = !0);
    }
    return o;
  },
  Th = function (n, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!n) return;
    if (n[t]) return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : void 0;
    const i = t.split(r);
    let l = n;
    for (let o = 0; o < i.length; ) {
      if (!l || typeof l != 'object') return;
      let f,
        h = '';
      for (let m = o; m < i.length; ++m)
        if ((m !== o && (h += r), (h += i[m]), (f = l[h]), f !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof f) > -1 && m < i.length - 1) continue;
          o += m - o + 1;
          break;
        }
      l = f;
    }
    return l;
  },
  fc = (n) => (n == null ? void 0 : n.replace('_', '-')),
  fN = {
    type: 'logger',
    log(n) {
      this.output('log', n);
    },
    warn(n) {
      this.output('warn', n);
    },
    error(n) {
      this.output('error', n);
    },
    output(n, t) {
      var r, i;
      (i = (r = console == null ? void 0 : console[n]) == null ? void 0 : r.apply) == null ||
        i.call(r, console, t);
    },
  };
class dc {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, r);
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = r.prefix || 'i18next:'),
      (this.logger = t || fN),
      (this.options = r),
      (this.debug = r.debug);
  }
  log() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return this.forward(r, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return this.forward(r, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return this.forward(r, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return this.forward(r, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, r, i, l) {
    return l && !this.debug
      ? null
      : (ke(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[r](t));
  }
  create(t) {
    return new dc(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new dc(this.logger, t);
  }
}
var sa = new dc();
class Tc {
  constructor() {
    this.observers = {};
  }
  on(t, r) {
    return (
      t.split(' ').forEach((i) => {
        this.observers[i] || (this.observers[i] = new Map());
        const l = this.observers[i].get(r) || 0;
        this.observers[i].set(r, l + 1);
      }),
      this
    );
  }
  off(t, r) {
    if (this.observers[t]) {
      if (!r) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(r);
    }
  }
  emit(t) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      i[l - 1] = arguments[l];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((f) => {
        let [h, m] = f;
        for (let g = 0; g < m; g++) h(...i);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((f) => {
          let [h, m] = f;
          for (let g = 0; g < m; g++) h.apply(h, [t, ...i]);
        });
  }
}
class $v extends Tc {
  constructor(t) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const r = this.options.ns.indexOf(t);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(t, r, i) {
    var g, y;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      f =
        l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let h;
    t.indexOf('.') > -1
      ? (h = t.split('.'))
      : ((h = [t, r]),
        i && (Array.isArray(i) ? h.push(...i) : ke(i) && o ? h.push(...i.split(o)) : h.push(i)));
    const m = cc(this.data, h);
    return (
      !m && !r && !i && t.indexOf('.') > -1 && ((t = h[0]), (r = h[1]), (i = h.slice(2).join('.'))),
      m || !f || !ke(i)
        ? m
        : Th((y = (g = this.data) == null ? void 0 : g[t]) == null ? void 0 : y[r], i, o)
    );
  }
  addResource(t, r, i, l) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const f = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let h = [t, r];
    i && (h = h.concat(f ? i.split(f) : i)),
      t.indexOf('.') > -1 && ((h = t.split('.')), (l = r), (r = h[1])),
      this.addNamespaces(r),
      Pv(this.data, h, l),
      o.silent || this.emit('added', t, r, i, l);
  }
  addResources(t, r, i) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const o in i)
      (ke(i[o]) || Array.isArray(i[o])) && this.addResource(t, r, o, i[o], { silent: !0 });
    l.silent || this.emit('added', t, r, i);
  }
  addResourceBundle(t, r, i, l, o) {
    let f =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      h = [t, r];
    t.indexOf('.') > -1 && ((h = t.split('.')), (l = i), (i = r), (r = h[1])),
      this.addNamespaces(r);
    let m = cc(this.data, h) || {};
    f.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      l ? r1(m, i, o) : (m = { ...m, ...i }),
      Pv(this.data, h, m),
      f.silent || this.emit('added', t, r, i);
  }
  removeResourceBundle(t, r) {
    this.hasResourceBundle(t, r) && delete this.data[t][r],
      this.removeNamespaces(r),
      this.emit('removed', t, r);
  }
  hasResourceBundle(t, r) {
    return this.getResource(t, r) !== void 0;
  }
  getResourceBundle(t, r) {
    return r || (r = this.options.defaultNS), this.getResource(t, r);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const r = this.getDataByLanguage(t);
    return !!((r && Object.keys(r)) || []).find((l) => r[l] && Object.keys(r[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var i1 = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, t, r, i, l) {
    return (
      n.forEach((o) => {
        var f;
        t = ((f = this.processors[o]) == null ? void 0 : f.process(t, r, i, l)) ?? t;
      }),
      t
    );
  },
};
const Qv = {},
  Kv = (n) => !ke(n) && typeof n != 'boolean' && typeof n != 'number';
class hc extends Tc {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      tN(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = sa.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (t == null) return !1;
    const i = this.resolve(t, r);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(t, r) {
    let i = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ':');
    const l = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = r.ns || this.options.defaultNS || [];
    const f = i && t.indexOf(i) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !cN(t, i, l);
    if (f && !h) {
      const m = t.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return { key: t, namespaces: ke(o) ? [o] : o };
      const g = t.split(i);
      (i !== l || (i === l && this.options.ns.indexOf(g[0]) > -1)) && (o = g.shift()),
        (t = g.join(l));
    }
    return { key: t, namespaces: ke(o) ? [o] : o };
  }
  translate(t, r, i) {
    if (
      (typeof r != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (r = this.options.overloadTranslationOptionHandler(arguments)),
      typeof options == 'object' && (r = { ...r }),
      r || (r = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const l = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails,
      o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      { key: f, namespaces: h } = this.extractFromKey(t[t.length - 1], r),
      m = h[h.length - 1],
      g = r.lng || this.language,
      y = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((g == null ? void 0 : g.toLowerCase()) === 'cimode') {
      if (y) {
        const be = r.nsSeparator || this.options.nsSeparator;
        return l
          ? {
              res: `${m}${be}${f}`,
              usedKey: f,
              exactUsedKey: f,
              usedLng: g,
              usedNS: m,
              usedParams: this.getUsedParamsDetails(r),
            }
          : `${m}${be}${f}`;
      }
      return l
        ? {
            res: f,
            usedKey: f,
            exactUsedKey: f,
            usedLng: g,
            usedNS: m,
            usedParams: this.getUsedParamsDetails(r),
          }
        : f;
    }
    const v = this.resolve(t, r);
    let b = v == null ? void 0 : v.res;
    const w = (v == null ? void 0 : v.usedKey) || f,
      S = (v == null ? void 0 : v.exactUsedKey) || f,
      D = ['[object Number]', '[object Function]', '[object RegExp]'],
      C = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      N = !this.i18nFormat || this.i18nFormat.handleAsObject,
      O = r.count !== void 0 && !ke(r.count),
      k = hc.hasDefaultValue(r),
      Y = O ? this.pluralResolver.getSuffix(g, r.count, r) : '',
      q = r.ordinal && O ? this.pluralResolver.getSuffix(g, r.count, { ordinal: !1 }) : '',
      K = O && !r.ordinal && r.count === 0,
      W =
        (K && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
        r[`defaultValue${Y}`] ||
        r[`defaultValue${q}`] ||
        r.defaultValue;
    let ie = b;
    N && !b && k && (ie = W);
    const te = Kv(ie),
      _e = Object.prototype.toString.apply(ie);
    if (N && ie && te && D.indexOf(_e) < 0 && !(ke(C) && Array.isArray(ie))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const be = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, ie, { ...r, ns: h })
          : `key '${f} (${this.language})' returned an object instead of string.`;
        return l ? ((v.res = be), (v.usedParams = this.getUsedParamsDetails(r)), v) : be;
      }
      if (o) {
        const be = Array.isArray(ie),
          se = be ? [] : {},
          Se = be ? S : w;
        for (const Re in ie)
          if (Object.prototype.hasOwnProperty.call(ie, Re)) {
            const Me = `${Se}${o}${Re}`;
            k && !b
              ? (se[Re] = this.translate(Me, {
                  ...r,
                  defaultValue: Kv(W) ? W[Re] : void 0,
                  joinArrays: !1,
                  ns: h,
                }))
              : (se[Re] = this.translate(Me, { ...r, joinArrays: !1, ns: h })),
              se[Re] === Me && (se[Re] = ie[Re]);
          }
        b = se;
      }
    } else if (N && ke(C) && Array.isArray(b))
      (b = b.join(C)), b && (b = this.extendTranslation(b, t, r, i));
    else {
      let be = !1,
        se = !1;
      !this.isValidLookup(b) && k && ((be = !0), (b = W)),
        this.isValidLookup(b) || ((se = !0), (b = f));
      const Re =
          (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && se
            ? void 0
            : b,
        Me = k && W !== b && this.options.updateMissing;
      if (se || be || Me) {
        if ((this.logger.log(Me ? 'updateKey' : 'missingKey', g, m, f, Me ? W : b), o)) {
          const xe = this.resolve(f, { ...r, keySeparator: !1 });
          xe &&
            xe.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let V = [];
        const I = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          r.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && I && I[0])
          for (let xe = 0; xe < I.length; xe++) V.push(I[xe]);
        else
          this.options.saveMissingTo === 'all'
            ? (V = this.languageUtils.toResolveHierarchy(r.lng || this.language))
            : V.push(r.lng || this.language);
        const me = (xe, T, G) => {
          var re;
          const le = k && G !== b ? G : Re;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(xe, m, T, le, Me, r)
            : (re = this.backendConnector) != null &&
              re.saveMissing &&
              this.backendConnector.saveMissing(xe, m, T, le, Me, r),
            this.emit('missingKey', xe, m, T, b);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && O
            ? V.forEach((xe) => {
                const T = this.pluralResolver.getSuffixes(xe, r);
                K &&
                  r[`defaultValue${this.options.pluralSeparator}zero`] &&
                  T.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  T.push(`${this.options.pluralSeparator}zero`),
                  T.forEach((G) => {
                    me([xe], f + G, r[`defaultValue${G}`] || W);
                  });
              })
            : me(V, f, W));
      }
      (b = this.extendTranslation(b, t, r, v, i)),
        se && b === f && this.options.appendNamespaceToMissingKey && (b = `${m}:${f}`),
        (se || be) &&
          this.options.parseMissingKeyHandler &&
          (b = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${m}:${f}` : f,
            be ? b : void 0
          ));
    }
    return l ? ((v.res = b), (v.usedParams = this.getUsedParamsDetails(r)), v) : b;
  }
  extendTranslation(t, r, i, l, o) {
    var g, y;
    var f = this;
    if ((g = this.i18nFormat) != null && g.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...i },
        i.lng || this.language || l.usedLng,
        l.usedNS,
        l.usedKey,
        { resolved: l }
      );
    else if (!i.skipInterpolation) {
      i.interpolation &&
        this.interpolator.init({
          ...i,
          interpolation: { ...this.options.interpolation, ...i.interpolation },
        });
      const v =
        ke(t) &&
        (((y = i == null ? void 0 : i.interpolation) == null ? void 0 : y.skipOnVariables) !==
        void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let b;
      if (v) {
        const S = t.match(this.interpolator.nestingRegexp);
        b = S && S.length;
      }
      let w = i.replace && !ke(i.replace) ? i.replace : i;
      if (
        (this.options.interpolation.defaultVariables &&
          (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (t = this.interpolator.interpolate(t, w, i.lng || this.language || l.usedLng, i)),
        v)
      ) {
        const S = t.match(this.interpolator.nestingRegexp),
          D = S && S.length;
        b < D && (i.nest = !1);
      }
      !i.lng && l && l.res && (i.lng = this.language || l.usedLng),
        i.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (var S = arguments.length, D = new Array(S), C = 0; C < S; C++)
                D[C] = arguments[C];
              return (o == null ? void 0 : o[0]) === D[0] && !i.context
                ? (f.logger.warn(
                    `It seems you are nesting recursively key: ${D[0]} in key: ${r[0]}`
                  ),
                  null)
                : f.translate(...D, r);
            },
            i
          )),
        i.interpolation && this.interpolator.reset();
    }
    const h = i.postProcess || this.options.postProcess,
      m = ke(h) ? [h] : h;
    return (
      t != null &&
        m != null &&
        m.length &&
        i.applyPostProcessor !== !1 &&
        (t = i1.handle(
          m,
          t,
          r,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...l, usedParams: this.getUsedParamsDetails(i) }, ...i }
            : i,
          this
        )),
      t
    );
  }
  resolve(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i,
      l,
      o,
      f,
      h;
    return (
      ke(t) && (t = [t]),
      t.forEach((m) => {
        if (this.isValidLookup(i)) return;
        const g = this.extractFromKey(m, r),
          y = g.key;
        l = y;
        let v = g.namespaces;
        this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
        const b = r.count !== void 0 && !ke(r.count),
          w = b && !r.ordinal && r.count === 0,
          S =
            r.context !== void 0 &&
            (ke(r.context) || typeof r.context == 'number') &&
            r.context !== '',
          D = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
        v.forEach((C) => {
          var N, O;
          this.isValidLookup(i) ||
            ((h = C),
            !Qv[`${D[0]}-${C}`] &&
              (N = this.utils) != null &&
              N.hasLoadedNamespace &&
              !((O = this.utils) != null && O.hasLoadedNamespace(h)) &&
              ((Qv[`${D[0]}-${C}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${D.join(', ')}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            D.forEach((k) => {
              var K;
              if (this.isValidLookup(i)) return;
              f = k;
              const Y = [y];
              if ((K = this.i18nFormat) != null && K.addLookupKeys)
                this.i18nFormat.addLookupKeys(Y, y, k, C, r);
              else {
                let W;
                b && (W = this.pluralResolver.getSuffix(k, r.count, r));
                const ie = `${this.options.pluralSeparator}zero`,
                  te = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (b &&
                    (Y.push(y + W),
                    r.ordinal &&
                      W.indexOf(te) === 0 &&
                      Y.push(y + W.replace(te, this.options.pluralSeparator)),
                    w && Y.push(y + ie)),
                  S)
                ) {
                  const _e = `${y}${this.options.contextSeparator}${r.context}`;
                  Y.push(_e),
                    b &&
                      (Y.push(_e + W),
                      r.ordinal &&
                        W.indexOf(te) === 0 &&
                        Y.push(_e + W.replace(te, this.options.pluralSeparator)),
                      w && Y.push(_e + ie));
                }
              }
              let q;
              for (; (q = Y.pop()); )
                this.isValidLookup(i) || ((o = q), (i = this.getResource(k, C, q, r)));
            }));
        });
      }),
      { res: i, usedKey: l, exactUsedKey: o, usedLng: f, usedNS: h }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, r, i) {
    var o;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (o = this.i18nFormat) != null && o.getResource
      ? this.i18nFormat.getResource(t, r, i, l)
      : this.resourceStore.getResource(t, r, i, l);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = [
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
      i = t.replace && !ke(t.replace);
    let l = i ? t.replace : t;
    if (
      (i && typeof t.count < 'u' && (l.count = t.count),
      this.options.interpolation.defaultVariables &&
        (l = { ...this.options.interpolation.defaultVariables, ...l }),
      !i)
    ) {
      l = { ...l };
      for (const o of r) delete l[o];
    }
    return l;
  }
  static hasDefaultValue(t) {
    const r = 'defaultValue';
    for (const i in t)
      if (
        Object.prototype.hasOwnProperty.call(t, i) &&
        r === i.substring(0, r.length) &&
        t[i] !== void 0
      )
        return !0;
    return !1;
  }
}
class Wv {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = sa.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = fc(t)), !t || t.indexOf('-') < 0)) return null;
    const r = t.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = fc(t)), !t || t.indexOf('-') < 0)) return t;
    const r = t.split('-');
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(t) {
    if (ke(t) && t.indexOf('-') > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(t)[0];
      } catch {}
      return (
        r && this.options.lowerCaseLng && (r = r.toLowerCase()),
        r || (this.options.lowerCaseLng ? t.toLowerCase() : t)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let r;
    return (
      t.forEach((i) => {
        if (r) return;
        const l = this.formatLanguageCode(i);
        (!this.options.supportedLngs || this.isSupportedCode(l)) && (r = l);
      }),
      !r &&
        this.options.supportedLngs &&
        t.forEach((i) => {
          if (r) return;
          const l = this.getScriptPartFromCode(i);
          if (this.isSupportedCode(l)) return (r = l);
          const o = this.getLanguagePartFromCode(i);
          if (this.isSupportedCode(o)) return (r = o);
          r = this.options.supportedLngs.find((f) => {
            if (f === o) return f;
            if (
              !(f.indexOf('-') < 0 && o.indexOf('-') < 0) &&
              ((f.indexOf('-') > 0 && o.indexOf('-') < 0 && f.substring(0, f.indexOf('-')) === o) ||
                (f.indexOf(o) === 0 && o.length > 1))
            )
              return f;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(t, r) {
    if (!t) return [];
    if ((typeof t == 'function' && (t = t(r)), ke(t) && (t = [t]), Array.isArray(t))) return t;
    if (!r) return t.default || [];
    let i = t[r];
    return (
      i || (i = t[this.getScriptPartFromCode(r)]),
      i || (i = t[this.formatLanguageCode(r)]),
      i || (i = t[this.getLanguagePartFromCode(r)]),
      i || (i = t.default),
      i || []
    );
  }
  toResolveHierarchy(t, r) {
    const i = this.getFallbackCodes(r || this.options.fallbackLng || [], t),
      l = [],
      o = (f) => {
        f &&
          (this.isSupportedCode(f)
            ? l.push(f)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`));
      };
    return (
      ke(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && o(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' && o(this.getLanguagePartFromCode(t)))
        : ke(t) && o(this.formatLanguageCode(t)),
      i.forEach((f) => {
        l.indexOf(f) < 0 && o(this.formatLanguageCode(f));
      }),
      l
    );
  }
}
const Xv = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Iv = {
    select: (n) => (n === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class dN {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = r),
      (this.logger = sa.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(t, r) {
    this.rules[t] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = fc(t === 'dev' ? 'en' : t),
      l = r.ordinal ? 'ordinal' : 'cardinal',
      o = JSON.stringify({ cleanedCode: i, type: l });
    if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
    let f;
    try {
      f = new Intl.PluralRules(i, { type: l });
    } catch {
      if (!Intl) return this.logger.error('No Intl support, please use an Intl polyfill!'), Iv;
      if (!t.match(/-|_/)) return Iv;
      const m = this.languageUtils.getLanguagePartFromCode(t);
      f = this.getRule(m, r);
    }
    return (this.pluralRulesCache[o] = f), f;
  }
  needsPlural(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = this.getRule(t, r);
    return (
      i || (i = this.getRule('dev', r)),
      (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, i).map((l) => `${r}${l}`);
  }
  getSuffixes(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = this.getRule(t, r);
    return (
      i || (i = this.getRule('dev', r)),
      i
        ? i
            .resolvedOptions()
            .pluralCategories.sort((l, o) => Xv[l] - Xv[o])
            .map(
              (l) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${l}`
            )
        : []
    );
  }
  getSuffix(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(t, i);
    return l
      ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ''}${l.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix('dev', r, i));
  }
}
const Jv = function (n, t, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = rN(n, t, r);
    return !o && l && ke(r) && ((o = Th(n, r, i)), o === void 0 && (o = Th(t, r, i))), o;
  },
  oh = (n) => n.replace(/\$/g, '$$$$');
class hN {
  constructor() {
    var r;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = sa.create('interpolator')),
      (this.options = t),
      (this.format =
        ((r = t == null ? void 0 : t.interpolation) == null ? void 0 : r.format) || ((i) => i)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: r,
      escapeValue: i,
      useRawValueToEscape: l,
      prefix: o,
      prefixEscaped: f,
      suffix: h,
      suffixEscaped: m,
      formatSeparator: g,
      unescapeSuffix: y,
      unescapePrefix: v,
      nestingPrefix: b,
      nestingPrefixEscaped: w,
      nestingSuffix: S,
      nestingSuffixEscaped: D,
      nestingOptionsSeparator: C,
      maxReplaces: N,
      alwaysFormat: O,
    } = t.interpolation;
    (this.escape = r !== void 0 ? r : sN),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = o ? ts(o) : f || '{{'),
      (this.suffix = h ? ts(h) : m || '}}'),
      (this.formatSeparator = g || ','),
      (this.unescapePrefix = y ? '' : v || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : y || ''),
      (this.nestingPrefix = b ? ts(b) : w || ts('$t(')),
      (this.nestingSuffix = S ? ts(S) : D || ts(')')),
      (this.nestingOptionsSeparator = C || ','),
      (this.maxReplaces = N || 1e3),
      (this.alwaysFormat = O !== void 0 ? O : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (r, i) =>
      (r == null ? void 0 : r.source) === i ? ((r.lastIndex = 0), r) : new RegExp(i, 'g');
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, r, i, l) {
    var w;
    let o, f, h;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (S) => {
        if (S.indexOf(this.formatSeparator) < 0) {
          const O = Jv(r, m, S, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(O, void 0, i, { ...l, ...r, interpolationkey: S })
            : O;
        }
        const D = S.split(this.formatSeparator),
          C = D.shift().trim(),
          N = D.join(this.formatSeparator).trim();
        return this.format(
          Jv(r, m, C, this.options.keySeparator, this.options.ignoreJSONStructure),
          N,
          i,
          { ...l, ...r, interpolationkey: C }
        );
      };
    this.resetRegExp();
    const y =
        (l == null ? void 0 : l.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      v =
        ((w = l == null ? void 0 : l.interpolation) == null ? void 0 : w.skipOnVariables) !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (S) => oh(S) },
        { regex: this.regexp, safeValue: (S) => (this.escapeValue ? oh(this.escape(S)) : oh(S)) },
      ].forEach((S) => {
        for (h = 0; (o = S.regex.exec(t)); ) {
          const D = o[1].trim();
          if (((f = g(D)), f === void 0))
            if (typeof y == 'function') {
              const N = y(t, o, l);
              f = ke(N) ? N : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, D)) f = '';
            else if (v) {
              f = o[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${D} for interpolating ${t}`), (f = '');
          else !ke(f) && !this.useRawValueToEscape && (f = Zv(f));
          const C = S.safeValue(f);
          if (
            ((t = t.replace(o[0], C)),
            v
              ? ((S.regex.lastIndex += f.length), (S.regex.lastIndex -= o[0].length))
              : (S.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l,
      o,
      f;
    const h = (m, g) => {
      const y = this.nestingOptionsSeparator;
      if (m.indexOf(y) < 0) return m;
      const v = m.split(new RegExp(`${y}[ ]*{`));
      let b = `{${v[1]}`;
      (m = v[0]), (b = this.interpolate(b, f));
      const w = b.match(/'/g),
        S = b.match(/"/g);
      ((((w == null ? void 0 : w.length) ?? 0) % 2 === 0 && !S) || S.length % 2 !== 0) &&
        (b = b.replace(/'/g, '"'));
      try {
        (f = JSON.parse(b)), g && (f = { ...g, ...f });
      } catch (D) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${m}`, D),
          `${m}${y}${b}`
        );
      }
      return f.defaultValue && f.defaultValue.indexOf(this.prefix) > -1 && delete f.defaultValue, m;
    };
    for (; (l = this.nestingRegexp.exec(t)); ) {
      let m = [];
      (f = { ...i }),
        (f = f.replace && !ke(f.replace) ? f.replace : f),
        (f.applyPostProcessor = !1),
        delete f.defaultValue;
      let g = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const y = l[1].split(this.formatSeparator).map((v) => v.trim());
        (l[1] = y.shift()), (m = y), (g = !0);
      }
      if (((o = r(h.call(this, l[1].trim(), f), f)), o && l[0] === t && !ke(o))) return o;
      ke(o) || (o = Zv(o)),
        o || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${t}`), (o = '')),
        g &&
          (o = m.reduce(
            (y, v) => this.format(y, v, i.lng, { ...i, interpolationkey: l[1].trim() }),
            o.trim()
          )),
        (t = t.replace(l[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const mN = (n) => {
    let t = n.toLowerCase().trim();
    const r = {};
    if (n.indexOf('(') > -1) {
      const i = n.split('(');
      t = i[0].toLowerCase().trim();
      const l = i[1].substring(0, i[1].length - 1);
      t === 'currency' && l.indexOf(':') < 0
        ? r.currency || (r.currency = l.trim())
        : t === 'relativetime' && l.indexOf(':') < 0
          ? r.range || (r.range = l.trim())
          : l.split(';').forEach((f) => {
              if (f) {
                const [h, ...m] = f.split(':'),
                  g = m
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  y = h.trim();
                r[y] || (r[y] = g),
                  g === 'false' && (r[y] = !1),
                  g === 'true' && (r[y] = !0),
                  isNaN(g) || (r[y] = parseInt(g, 10));
              }
            });
    }
    return { formatName: t, formatOptions: r };
  },
  ns = (n) => {
    const t = {};
    return (r, i, l) => {
      let o = l;
      l &&
        l.interpolationkey &&
        l.formatParams &&
        l.formatParams[l.interpolationkey] &&
        l[l.interpolationkey] &&
        (o = { ...o, [l.interpolationkey]: void 0 });
      const f = i + JSON.stringify(o);
      let h = t[f];
      return h || ((h = n(fc(i), l)), (t[f] = h)), h(r);
    };
  };
class gN {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = sa.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: ns((r, i) => {
          const l = new Intl.NumberFormat(r, { ...i });
          return (o) => l.format(o);
        }),
        currency: ns((r, i) => {
          const l = new Intl.NumberFormat(r, { ...i, style: 'currency' });
          return (o) => l.format(o);
        }),
        datetime: ns((r, i) => {
          const l = new Intl.DateTimeFormat(r, { ...i });
          return (o) => l.format(o);
        }),
        relativetime: ns((r, i) => {
          const l = new Intl.RelativeTimeFormat(r, { ...i });
          return (o) => l.format(o, i.range || 'day');
        }),
        list: ns((r, i) => {
          const l = new Intl.ListFormat(r, { ...i });
          return (o) => l.format(o);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    this.formatSeparator = r.interpolation.formatSeparator || ',';
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r;
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = ns(r);
  }
  format(t, r, i) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = r.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf('(') > 1 &&
      o[0].indexOf(')') < 0 &&
      o.find((h) => h.indexOf(')') > -1)
    ) {
      const h = o.findIndex((m) => m.indexOf(')') > -1);
      o[0] = [o[0], ...o.splice(1, h)].join(this.formatSeparator);
    }
    return o.reduce((h, m) => {
      var v;
      const { formatName: g, formatOptions: y } = mN(m);
      if (this.formats[g]) {
        let b = h;
        try {
          const w =
              ((v = l == null ? void 0 : l.formatParams) == null
                ? void 0
                : v[l.interpolationkey]) || {},
            S = w.locale || w.lng || l.locale || l.lng || i;
          b = this.formats[g](h, S, { ...y, ...l, ...w });
        } catch (w) {
          this.logger.warn(w);
        }
        return b;
      } else this.logger.warn(`there was no format function for ${g}`);
      return h;
    }, t);
  }
}
const yN = (n, t) => {
  n.pending[t] !== void 0 && (delete n.pending[t], n.pendingCount--);
};
class pN extends Tc {
  constructor(t, r, i) {
    var o, f;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = r),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = l),
      (this.logger = sa.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (f = (o = this.backend) == null ? void 0 : o.init) == null || f.call(o, i, l.backend, l);
  }
  queueLoad(t, r, i, l) {
    const o = {},
      f = {},
      h = {},
      m = {};
    return (
      t.forEach((g) => {
        let y = !0;
        r.forEach((v) => {
          const b = `${g}|${v}`;
          !i.reload && this.store.hasResourceBundle(g, v)
            ? (this.state[b] = 2)
            : this.state[b] < 0 ||
              (this.state[b] === 1
                ? f[b] === void 0 && (f[b] = !0)
                : ((this.state[b] = 1),
                  (y = !1),
                  f[b] === void 0 && (f[b] = !0),
                  o[b] === void 0 && (o[b] = !0),
                  m[v] === void 0 && (m[v] = !0)));
        }),
          y || (h[g] = !0);
      }),
      (Object.keys(o).length || Object.keys(f).length) &&
        this.queue.push({
          pending: f,
          pendingCount: Object.keys(f).length,
          loaded: {},
          errors: [],
          callback: l,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(m),
      }
    );
  }
  loaded(t, r, i) {
    const l = t.split('|'),
      o = l[0],
      f = l[1];
    r && this.emit('failedLoading', o, f, r),
      !r && i && this.store.addResourceBundle(o, f, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = r ? -1 : 2),
      r && i && (this.state[t] = 0);
    const h = {};
    this.queue.forEach((m) => {
      aN(m.loaded, [o], f),
        yN(m, t),
        r && m.errors.push(r),
        m.pendingCount === 0 &&
          !m.done &&
          (Object.keys(m.loaded).forEach((g) => {
            h[g] || (h[g] = {});
            const y = m.loaded[g];
            y.length &&
              y.forEach((v) => {
                h[g][v] === void 0 && (h[g][v] = !0);
              });
          }),
          (m.done = !0),
          m.errors.length ? m.callback(m.errors) : m.callback());
    }),
      this.emit('loaded', h),
      (this.queue = this.queue.filter((m) => !m.done));
  }
  read(t, r, i) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      f = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return f(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: t, ns: r, fcName: i, tried: l, wait: o, callback: f });
      return;
    }
    this.readingCalls++;
    const h = (g, y) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const v = this.waitingReads.shift();
          this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (g && y && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, r, i, l + 1, o * 2, f);
          }, o);
          return;
        }
        f(g, y);
      },
      m = this.backend[i].bind(this.backend);
    if (m.length === 2) {
      try {
        const g = m(t, r);
        g && typeof g.then == 'function' ? g.then((y) => h(null, y)).catch(h) : h(null, g);
      } catch (g) {
        h(g);
      }
      return;
    }
    return m(t, r, h);
  }
  prepareLoading(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), l && l()
      );
    ke(t) && (t = this.languageUtils.toResolveHierarchy(t)), ke(r) && (r = [r]);
    const o = this.queueLoad(t, r, i, l);
    if (!o.toLoad.length) return o.pending.length || l(), null;
    o.toLoad.forEach((f) => {
      this.loadOne(f);
    });
  }
  load(t, r, i) {
    this.prepareLoading(t, r, {}, i);
  }
  reload(t, r, i) {
    this.prepareLoading(t, r, { reload: !0 }, i);
  }
  loadOne(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const i = t.split('|'),
      l = i[0],
      o = i[1];
    this.read(l, o, 'read', void 0, void 0, (f, h) => {
      f && this.logger.warn(`${r}loading namespace ${o} for language ${l} failed`, f),
        !f && h && this.logger.log(`${r}loaded namespace ${o} for language ${l}`, h),
        this.loaded(t, f, h);
    });
  }
  saveMissing(t, r, i, l, o) {
    var m, g, y, v, b;
    let f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (
      (g = (m = this.services) == null ? void 0 : m.utils) != null &&
      g.hasLoadedNamespace &&
      !((v = (y = this.services) == null ? void 0 : y.utils) != null && v.hasLoadedNamespace(r))
    ) {
      this.logger.warn(
        `did not save key "${i}" as the namespace "${r}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(i == null || i === '')) {
      if ((b = this.backend) != null && b.create) {
        const w = { ...f, isUpdate: o },
          S = this.backend.create.bind(this.backend);
        if (S.length < 6)
          try {
            let D;
            S.length === 5 ? (D = S(t, r, i, l, w)) : (D = S(t, r, i, l)),
              D && typeof D.then == 'function' ? D.then((C) => h(null, C)).catch(h) : h(null, D);
          } catch (D) {
            h(D);
          }
        else S(t, r, i, l, h, w);
      }
      !t || !t[0] || this.store.addResource(t[0], r, i, l);
    }
  }
}
const e0 = () => ({
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
    overloadTranslationOptionHandler: (n) => {
      let t = {};
      if (
        (typeof n[1] == 'object' && (t = n[1]),
        ke(n[1]) && (t.defaultValue = n[1]),
        ke(n[2]) && (t.tDescription = n[2]),
        typeof n[2] == 'object' || typeof n[3] == 'object')
      ) {
        const r = n[3] || n[2];
        Object.keys(r).forEach((i) => {
          t[i] = r[i];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
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
  t0 = (n) => {
    var t, r;
    return (
      ke(n.ns) && (n.ns = [n.ns]),
      ke(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]),
      ke(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]),
      ((r = (t = n.supportedLngs) == null ? void 0 : t.indexOf) == null
        ? void 0
        : r.call(t, 'cimode')) < 0 && (n.supportedLngs = n.supportedLngs.concat(['cimode'])),
      typeof n.initImmediate == 'boolean' && (n.initAsync = n.initImmediate),
      n
    );
  },
  qo = () => {},
  vN = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((r) => {
      typeof n[r] == 'function' && (n[r] = n[r].bind(n));
    });
  };
class uu extends Tc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = t0(t)),
      (this.services = {}),
      (this.logger = sa),
      (this.modules = { external: [] }),
      vN(this),
      r && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initAsync) return this.init(t, r), this;
      setTimeout(() => {
        this.init(t, r);
      }, 0);
    }
  }
  init() {
    var t = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      i = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof r == 'function' && ((i = r), (r = {})),
      r.defaultNS == null &&
        r.ns &&
        (ke(r.ns)
          ? (r.defaultNS = r.ns)
          : r.ns.indexOf('translation') < 0 && (r.defaultNS = r.ns[0]));
    const l = e0();
    (this.options = { ...l, ...this.options, ...t0(r) }),
      (this.options.interpolation = { ...l.interpolation, ...this.options.interpolation }),
      r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator),
      r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
    const o = (y) => (y ? (typeof y == 'function' ? new y() : y) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? sa.init(o(this.modules.logger), this.options)
        : sa.init(null, this.options);
      let y;
      this.modules.formatter ? (y = this.modules.formatter) : (y = gN);
      const v = new Wv(this.options);
      this.store = new $v(this.options.resources, this.options);
      const b = this.services;
      (b.logger = sa),
        (b.resourceStore = this.store),
        (b.languageUtils = v),
        (b.pluralResolver = new dN(v, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        y &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === l.interpolation.format) &&
          ((b.formatter = o(y)),
          b.formatter.init(b, this.options),
          (this.options.interpolation.format = b.formatter.format.bind(b.formatter))),
        (b.interpolator = new hN(this.options)),
        (b.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (b.backendConnector = new pN(o(this.modules.backend), b.resourceStore, b, this.options)),
        b.backendConnector.on('*', function (w) {
          for (var S = arguments.length, D = new Array(S > 1 ? S - 1 : 0), C = 1; C < S; C++)
            D[C - 1] = arguments[C];
          t.emit(w, ...D);
        }),
        this.modules.languageDetector &&
          ((b.languageDetector = o(this.modules.languageDetector)),
          b.languageDetector.init &&
            b.languageDetector.init(b, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((b.i18nFormat = o(this.modules.i18nFormat)),
          b.i18nFormat.init && b.i18nFormat.init(this)),
        (this.translator = new hc(this.services, this.options)),
        this.translator.on('*', function (w) {
          for (var S = arguments.length, D = new Array(S > 1 ? S - 1 : 0), C = 1; C < S; C++)
            D[C - 1] = arguments[C];
          t.emit(w, ...D);
        }),
        this.modules.external.forEach((w) => {
          w.init && w.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = qo),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const y = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      y.length > 0 && y[0] !== 'dev' && (this.options.lng = y[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (y) => {
          this[y] = function () {
            return t.store[y](...arguments);
          };
        }
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((y) => {
        this[y] = function () {
          return t.store[y](...arguments), t;
        };
      });
    const m = kl(),
      g = () => {
        const y = (v, b) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            m.resolve(b),
            i(v, b);
        };
        if (this.languages && !this.isInitialized) return y(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, y);
      };
    return this.options.resources || !this.options.initAsync ? g() : setTimeout(g, 0), m;
  }
  loadResources(t) {
    var o, f;
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qo;
    const l = ke(t) ? t : this.language;
    if (
      (typeof t == 'function' && (i = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (l == null ? void 0 : l.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return i();
      const h = [],
        m = (g) => {
          if (!g || g === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(g).forEach((v) => {
            v !== 'cimode' && h.indexOf(v) < 0 && h.push(v);
          });
        };
      l
        ? m(l)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((y) => m(y)),
        (f = (o = this.options.preload) == null ? void 0 : o.forEach) == null ||
          f.call(o, (g) => m(g)),
        this.services.backendConnector.load(h, this.options.ns, (g) => {
          !g && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            i(g);
        });
    } else i(null);
  }
  reloadResources(t, r, i) {
    const l = kl();
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof r == 'function' && ((i = r), (r = void 0)),
      t || (t = this.languages),
      r || (r = this.options.ns),
      i || (i = qo),
      this.services.backendConnector.reload(t, r, (o) => {
        l.resolve(), i(o);
      }),
      l
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) && (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && i1.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const i = this.languages[r];
        if (!(['cimode', 'dev'].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(t) < 0 &&
        this.store.hasLanguageSomeTranslations(t) &&
        ((this.resolvedLanguage = t), this.languages.unshift(t));
    }
  }
  changeLanguage(t, r) {
    var i = this;
    this.isLanguageChangingTo = t;
    const l = kl();
    this.emit('languageChanging', t);
    const o = (m) => {
        (this.language = m),
          (this.languages = this.services.languageUtils.toResolveHierarchy(m)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(m);
      },
      f = (m, g) => {
        g
          ? this.isLanguageChangingTo === t &&
            (o(g),
            this.translator.changeLanguage(g),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', g),
            this.logger.log('languageChanged', g))
          : (this.isLanguageChangingTo = void 0),
          l.resolve(function () {
            return i.t(...arguments);
          }),
          r &&
            r(m, function () {
              return i.t(...arguments);
            });
      },
      h = (m) => {
        var v, b;
        !t && !m && this.services.languageDetector && (m = []);
        const g = ke(m) ? m : m && m[0],
          y = this.store.hasLanguageSomeTranslations(g)
            ? g
            : this.services.languageUtils.getBestMatchFromCodes(ke(m) ? [m] : m);
        y &&
          (this.language || o(y),
          this.translator.language || this.translator.changeLanguage(y),
          (b = (v = this.services.languageDetector) == null ? void 0 : v.cacheUserLanguage) ==
            null || b.call(v, y)),
          this.loadResources(y, (w) => {
            f(w, y);
          });
      };
    return (
      !t && this.services.languageDetector && !this.services.languageDetector.async
        ? h(this.services.languageDetector.detect())
        : !t && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(h)
            : this.services.languageDetector.detect(h)
          : h(t),
      l
    );
  }
  getFixedT(t, r, i) {
    var l = this;
    const o = function (f, h) {
      let m;
      if (typeof h != 'object') {
        for (var g = arguments.length, y = new Array(g > 2 ? g - 2 : 0), v = 2; v < g; v++)
          y[v - 2] = arguments[v];
        m = l.options.overloadTranslationOptionHandler([f, h].concat(y));
      } else m = { ...h };
      (m.lng = m.lng || o.lng),
        (m.lngs = m.lngs || o.lngs),
        (m.ns = m.ns || o.ns),
        m.keyPrefix !== '' && (m.keyPrefix = m.keyPrefix || i || o.keyPrefix);
      const b = l.options.keySeparator || '.';
      let w;
      return (
        m.keyPrefix && Array.isArray(f)
          ? (w = f.map((S) => `${m.keyPrefix}${b}${S}`))
          : (w = m.keyPrefix ? `${m.keyPrefix}${b}${f}` : f),
        l.t(w, m)
      );
    };
    return ke(t) ? (o.lng = t) : (o.lngs = t), (o.ns = r), (o.keyPrefix = i), o;
  }
  t() {
    var l;
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return (l = this.translator) == null ? void 0 : l.translate(...r);
  }
  exists() {
    var l;
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return (l = this.translator) == null ? void 0 : l.exists(...r);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
    const i = r.lng || this.resolvedLanguage || this.languages[0],
      l = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === 'cimode') return !0;
    const f = (h, m) => {
      const g = this.services.backendConnector.state[`${h}|${m}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (r.precheck) {
      const h = r.precheck(this, f);
      if (h !== void 0) return h;
    }
    return !!(
      this.hasResourceBundle(i, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (f(i, t) && (!l || f(o, t)))
    );
  }
  loadNamespaces(t, r) {
    const i = kl();
    return this.options.ns
      ? (ke(t) && (t = [t]),
        t.forEach((l) => {
          this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
        }),
        this.loadResources((l) => {
          i.resolve(), r && r(l);
        }),
        i)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(t, r) {
    const i = kl();
    ke(t) && (t = [t]);
    const l = this.options.preload || [],
      o = t.filter((f) => l.indexOf(f) < 0 && this.services.languageUtils.isSupportedCode(f));
    return o.length
      ? ((this.options.preload = l.concat(o)),
        this.loadResources((f) => {
          i.resolve(), r && r(f);
        }),
        i)
      : (r && r(), Promise.resolve());
  }
  dir(t) {
    var l, o;
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (((l = this.languages) == null ? void 0 : l.length) > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl';
    const r = [
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
      i = ((o = this.services) == null ? void 0 : o.languageUtils) || new Wv(e0());
    return r.indexOf(i.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    return new uu(t, r);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qo;
    const i = t.forkResourceStore;
    i && delete t.forkResourceStore;
    const l = { ...this.options, ...t, isClone: !0 },
      o = new uu(l);
    if (
      ((t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)),
      ['store', 'services', 'language'].forEach((h) => {
        o[h] = this[h];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      i)
    ) {
      const h = Object.keys(this.store.data).reduce(
        (m, g) => (
          (m[g] = { ...this.store.data[g] }),
          (m[g] = Object.keys(m[g]).reduce((y, v) => ((y[v] = { ...m[g][v] }), y), m[g])),
          m
        ),
        {}
      );
      (o.store = new $v(h, l)), (o.services.resourceStore = o.store);
    }
    return (
      (o.translator = new hc(o.services, l)),
      o.translator.on('*', function (h) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
          g[y - 1] = arguments[y];
        o.emit(h, ...g);
      }),
      o.init(l, r),
      (o.translator.options = l),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
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
const Wt = uu.createInstance();
Wt.createInstance = uu.createInstance;
Wt.createInstance;
Wt.dir;
Wt.init;
Wt.loadResources;
Wt.reloadResources;
Wt.use;
Wt.changeLanguage;
Wt.getFixedT;
Wt.t;
Wt.exists;
Wt.setDefaultNamespace;
Wt.hasLoadedNamespace;
Wt.loadNamespaces;
Wt.loadLanguages;
const bN =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  _N = {
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
  SN = (n) => _N[n],
  xN = (n) => n.replace(bN, SN);
let n0 = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: xN,
};
const wN = (n = {}) => {
    n0 = { ...n0, ...n };
  },
  ON = {
    type: '3rdParty',
    init(n) {
      wN(n.options.react);
    },
  },
  EN = 'Welcome to React',
  TN = 'This is demo to show i18n. (aka translation from src/locales/en.json)',
  CN = { welcome: EN, description: TN },
  MN = 'Добро пожаловать в Реактик',
  DN = 'Это дэмо для i18n. (то есть перевода из src/locales/ru.json)',
  NN = { welcome: MN, description: DN };
Wt.use(ON).init({
  resources: { en: { translation: CN }, ru: { translation: NN } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: !1 },
});
function AN(n) {
  CS.createRoot(n).render(
    x.jsx(R.StrictMode, {
      children: x.jsx(JD, {
        client: eN,
        children: x.jsx(YM, { store: MD, children: x.jsx(Fx, { children: x.jsx(CM, {}) }) }),
      }),
    })
  );
}
const a0 = document.getElementById('root');
a0 && AN(a0);
