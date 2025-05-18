var Up = (n) => {
  throw TypeError(n);
};
var qd = (n, t, r) => t.has(n) || Up('Cannot ' + r);
var $ = (n, t, r) => (qd(n, t, 'read from private field'), r ? r.call(n) : t.get(n)),
  Ke = (n, t, r) =>
    t.has(n)
      ? Up('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(n)
        : t.set(n, r),
  ze = (n, t, r, i) => (qd(n, t, 'write to private field'), i ? i.call(n, r) : t.set(n, r), r),
  $t = (n, t, r) => (qd(n, t, 'access private method'), r);
var ko = (n, t, r, i) => ({
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
function SS(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var Yd = { exports: {} },
  El = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lp;
function xS() {
  if (Lp) return El;
  Lp = 1;
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
  return (El.Fragment = t), (El.jsx = r), (El.jsxs = r), El;
}
var Bp;
function wS() {
  return Bp || ((Bp = 1), (Yd.exports = xS())), Yd.exports;
}
var S = wS(),
  Zd = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hp;
function ES() {
  if (Hp) return Le;
  Hp = 1;
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
    x = Object.assign,
    N = {};
  function C(T, P, le) {
    (this.props = T), (this.context = P), (this.refs = N), (this.updater = le || w);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (T, P) {
      if (typeof T != 'object' && typeof T != 'function' && T != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, T, P, 'setState');
    }),
    (C.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, 'forceUpdate');
    });
  function D() {}
  D.prototype = C.prototype;
  function E(T, P, le) {
    (this.props = T), (this.context = P), (this.refs = N), (this.updater = le || w);
  }
  var R = (E.prototype = new D());
  (R.constructor = E), x(R, C.prototype), (R.isPureReactComponent = !0);
  var Y = Array.isArray,
    q = { H: null, A: null, T: null, S: null, V: null },
    K = Object.prototype.hasOwnProperty;
  function W(T, P, le, re, ve, Ve) {
    return (
      (le = Ve.ref), { $$typeof: n, type: T, key: P, ref: le !== void 0 ? le : null, props: Ve }
    );
  }
  function ie(T, P) {
    return W(T.type, P, void 0, void 0, void 0, T.props);
  }
  function te(T) {
    return typeof T == 'object' && T !== null && T.$$typeof === n;
  }
  function _e(T) {
    var P = { '=': '=0', ':': '=2' };
    return (
      '$' +
      T.replace(/[=:]/g, function (le) {
        return P[le];
      })
    );
  }
  var be = /\/+/g;
  function se(T, P) {
    return typeof T == 'object' && T !== null && T.key != null ? _e('' + T.key) : P.toString(36);
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
                function (P) {
                  T.status === 'pending' && ((T.status = 'fulfilled'), (T.value = P));
                },
                function (P) {
                  T.status === 'pending' && ((T.status = 'rejected'), (T.reason = P));
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
  function Me(T, P, le, re, ve) {
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
              return (we = T._init), Me(we(T._payload), P, le, re, ve);
          }
      }
    if (we)
      return (
        (ve = ve(T)),
        (we = re === '' ? '.' + se(T, 0) : re),
        Y(ve)
          ? ((le = ''),
            we != null && (le = we.replace(be, '$&/') + '/'),
            Me(ve, P, le, '', function (rn) {
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
            P.push(ve)),
        1
      );
    we = 0;
    var kt = re === '' ? '.' : re + ':';
    if (Y(T))
      for (var at = 0; at < T.length; at++)
        (re = T[at]), (Ve = kt + se(re, at)), (we += Me(re, P, le, Ve, ve));
    else if (((at = b(T)), typeof at == 'function'))
      for (T = at.call(T), at = 0; !(re = T.next()).done; )
        (re = re.value), (Ve = kt + se(re, at++)), (we += Me(re, P, le, Ve, ve));
    else if (Ve === 'object') {
      if (typeof T.then == 'function') return Me(Re(T), P, le, re, ve);
      throw (
        ((P = String(T)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (P === '[object Object]' ? 'object with keys {' + Object.keys(T).join(', ') + '}' : P) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return we;
  }
  function V(T, P, le) {
    if (T == null) return T;
    var re = [],
      ve = 0;
    return (
      Me(T, re, '', '', function (Ve) {
        return P.call(le, Ve, ve++);
      }),
      re
    );
  }
  function I(T) {
    if (T._status === -1) {
      var P = T._result;
      (P = P()),
        P.then(
          function (le) {
            (T._status === 0 || T._status === -1) && ((T._status = 1), (T._result = le));
          },
          function (le) {
            (T._status === 0 || T._status === -1) && ((T._status = 2), (T._result = le));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = P));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var me =
    typeof reportError == 'function'
      ? reportError
      : function (T) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var P = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == 'object' && T !== null && typeof T.message == 'string'
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(P)) return;
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
      forEach: function (T, P, le) {
        V(
          T,
          function () {
            P.apply(this, arguments);
          },
          le
        );
      },
      count: function (T) {
        var P = 0;
        return (
          V(T, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (T) {
        return (
          V(T, function (P) {
            return P;
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
    (Le.PureComponent = E),
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
    (Le.cloneElement = function (T, P, le) {
      if (T == null) throw Error('The argument must be a React element, but you passed ' + T + '.');
      var re = x({}, T.props),
        ve = T.key,
        Ve = void 0;
      if (P != null)
        for (we in (P.ref !== void 0 && (Ve = void 0), P.key !== void 0 && (ve = '' + P.key), P))
          !K.call(P, we) ||
            we === 'key' ||
            we === '__self' ||
            we === '__source' ||
            (we === 'ref' && P.ref === void 0) ||
            (re[we] = P[we]);
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
    (Le.createElement = function (T, P, le) {
      var re,
        ve = {},
        Ve = null;
      if (P != null)
        for (re in (P.key !== void 0 && (Ve = '' + P.key), P))
          K.call(P, re) && re !== 'key' && re !== '__self' && re !== '__source' && (ve[re] = P[re]);
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
    (Le.memo = function (T, P) {
      return { $$typeof: g, type: T, compare: P === void 0 ? null : P };
    }),
    (Le.startTransition = function (T) {
      var P = q.T,
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
        q.T = P;
      }
    }),
    (Le.unstable_useCacheRefresh = function () {
      return q.H.useCacheRefresh();
    }),
    (Le.use = function (T) {
      return q.H.use(T);
    }),
    (Le.useActionState = function (T, P, le) {
      return q.H.useActionState(T, P, le);
    }),
    (Le.useCallback = function (T, P) {
      return q.H.useCallback(T, P);
    }),
    (Le.useContext = function (T) {
      return q.H.useContext(T);
    }),
    (Le.useDebugValue = function () {}),
    (Le.useDeferredValue = function (T, P) {
      return q.H.useDeferredValue(T, P);
    }),
    (Le.useEffect = function (T, P, le) {
      var re = q.H;
      if (typeof le == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return re.useEffect(T, P);
    }),
    (Le.useId = function () {
      return q.H.useId();
    }),
    (Le.useImperativeHandle = function (T, P, le) {
      return q.H.useImperativeHandle(T, P, le);
    }),
    (Le.useInsertionEffect = function (T, P) {
      return q.H.useInsertionEffect(T, P);
    }),
    (Le.useLayoutEffect = function (T, P) {
      return q.H.useLayoutEffect(T, P);
    }),
    (Le.useMemo = function (T, P) {
      return q.H.useMemo(T, P);
    }),
    (Le.useOptimistic = function (T, P) {
      return q.H.useOptimistic(T, P);
    }),
    (Le.useReducer = function (T, P, le) {
      return q.H.useReducer(T, P, le);
    }),
    (Le.useRef = function (T) {
      return q.H.useRef(T);
    }),
    (Le.useState = function (T) {
      return q.H.useState(T);
    }),
    (Le.useSyncExternalStore = function (T, P, le) {
      return q.H.useSyncExternalStore(T, P, le);
    }),
    (Le.useTransition = function () {
      return q.H.useTransition();
    }),
    (Le.version = '19.1.0'),
    Le
  );
}
var Vp;
function pc() {
  return Vp || ((Vp = 1), (Zd.exports = ES())), Zd.exports;
}
var k = pc();
const ee = SS(k);
var Fd = { exports: {} },
  Ol = {},
  Pd = { exports: {} },
  Gd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qp;
function OS() {
  return (
    qp ||
      ((qp = 1),
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
            e: for (var xe = 0, T = V.length, P = T >>> 1; xe < P; ) {
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
          x = !1,
          N = !1,
          C = !1,
          D = typeof setTimeout == 'function' ? setTimeout : null,
          E = typeof clearTimeout == 'function' ? clearTimeout : null,
          R = typeof setImmediate < 'u' ? setImmediate : null;
        function Y(V) {
          for (var I = r(g); I !== null; ) {
            if (I.callback === null) i(g);
            else if (I.startTime <= V) i(g), (I.sortIndex = I.expirationTime), t(m, I);
            else break;
            I = r(g);
          }
        }
        function q(V) {
          if (((N = !1), Y(V), !x))
            if (r(m) !== null) (x = !0), K || ((K = !0), se());
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
                (x = !1), N && ((N = !1), E(W), (W = -1)), (w = !0);
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
                      var P = r(g);
                      P !== null && Me(q, P.startTime - V), (I = !1);
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
        if (typeof R == 'function')
          se = function () {
            R(be);
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
            D(be, 0);
          };
        function Me(V, I) {
          W = D(function () {
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
                  r(m) === null && V === r(g) && (N ? (E(W), (W = -1)) : (N = !0), Me(q, me - xe)))
                : ((V.sortIndex = T), t(m, V), x || w || ((x = !0), K || ((K = !0), se()))),
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
      })(Gd)),
    Gd
  );
}
var Yp;
function TS() {
  return Yp || ((Yp = 1), (Pd.exports = OS())), Pd.exports;
}
var $d = { exports: {} },
  Qt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zp;
function CS() {
  if (Zp) return Qt;
  Zp = 1;
  var n = pc();
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
    (Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Qt.createPortal = function (m, g) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(t(299));
      return o(m, g, null, y);
    }),
    (Qt.flushSync = function (m) {
      var g = f.T,
        y = i.p;
      try {
        if (((f.T = null), (i.p = 2), m)) return m();
      } finally {
        (f.T = g), (i.p = y), i.d.f();
      }
    }),
    (Qt.preconnect = function (m, g) {
      typeof m == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        i.d.C(m, g));
    }),
    (Qt.prefetchDNS = function (m) {
      typeof m == 'string' && i.d.D(m);
    }),
    (Qt.preinit = function (m, g) {
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
    (Qt.preinitModule = function (m, g) {
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
    (Qt.preload = function (m, g) {
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
    (Qt.preloadModule = function (m, g) {
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
    (Qt.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (Qt.unstable_batchedUpdates = function (m, g) {
      return m(g);
    }),
    (Qt.useFormState = function (m, g, y) {
      return f.H.useFormState(m, g, y);
    }),
    (Qt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Qt.version = '19.1.0'),
    Qt
  );
}
var Fp;
function MS() {
  if (Fp) return $d.exports;
  Fp = 1;
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
  return n(), ($d.exports = CS()), $d.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp;
function NS() {
  if (Pp) return Ol;
  Pp = 1;
  var n = TS(),
    t = pc(),
    r = MS();
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
    x = Symbol.for('react.fragment'),
    N = Symbol.for('react.strict_mode'),
    C = Symbol.for('react.profiler'),
    D = Symbol.for('react.provider'),
    E = Symbol.for('react.consumer'),
    R = Symbol.for('react.context'),
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
      case x:
        return 'Fragment';
      case C:
        return 'Profiler';
      case N:
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
        case R:
          return (e.displayName || 'Context') + '.Provider';
        case E:
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
  function P(e) {
    return { current: e };
  }
  function le(e) {
    0 > T || ((e.current = xe[T]), (xe[T] = null), T--);
  }
  function re(e, a) {
    T++, (xe[T] = e.current), (e.current = a);
  }
  var ve = P(null),
    Ve = P(null),
    we = P(null),
    kt = P(null);
  function at(e, a) {
    switch ((re(we, a), re(Ve, e), re(ve, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? cp(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI))) (a = cp(a)), (e = fp(a, e));
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
  function $a(e) {
    e.memoizedState !== null && re(kt, e);
    var a = ve.current,
      s = fp(a, e.type);
    a !== s && (re(Ve, e), re(ve, s));
  }
  function Xn(e) {
    Ve.current === e && (le(ve), le(Ve)), kt.current === e && (le(kt), (bl._currentValue = me));
  }
  var Qa = Object.prototype.hasOwnProperty,
    kr = n.unstable_scheduleCallback,
    Ka = n.unstable_cancelCallback,
    Ts = n.unstable_shouldYield,
    di = n.unstable_requestPaint,
    Zt = n.unstable_now,
    Cs = n.unstable_getCurrentPriorityLevel,
    hi = n.unstable_ImmediatePriority,
    Ms = n.unstable_UserBlockingPriority,
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
  var Ne = Math.clz32 ? Math.clz32 : Ns,
    ct = Math.log,
    bt = Math.LN2;
  function Ns(e) {
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
  function Ft(e, a, s) {
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
  function Rr(e, a) {
    (e.pendingLanes |= a),
      a !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Dc(e, a, s, u, c, d) {
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
      O = e.expirationTimes,
      U = e.hiddenUpdates;
    for (s = p & ~s; 0 < s; ) {
      var F = 31 - Ne(s),
        Q = 1 << F;
      (_[F] = 0), (O[F] = -1);
      var L = U[F];
      if (L !== null)
        for (U[F] = null, F = 0; F < L.length; F++) {
          var H = L[F];
          H !== null && (H.lane &= -536870913);
        }
      s &= ~Q;
    }
    u !== 0 && _u(e, u, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(p & ~a));
  }
  function _u(e, a, s) {
    (e.pendingLanes |= a), (e.suspendedLanes &= ~a);
    var u = 31 - Ne(a);
    (e.entangledLanes |= a), (e.entanglements[u] = e.entanglements[u] | 1073741824 | (s & 4194090));
  }
  function mi(e, a) {
    var s = (e.entangledLanes |= a);
    for (e = e.entanglements; s; ) {
      var u = 31 - Ne(s),
        c = 1 << u;
      (c & a) | (e[u] & a) && (e[u] |= a), (s &= ~c);
    }
  }
  function jr(e) {
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
  function Ac(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Xh() {
    var e = I.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Dp(e.type));
  }
  function c1(e, a) {
    var s = I.p;
    try {
      return (I.p = e), a();
    } finally {
      I.p = s;
    }
  }
  var Wa = Math.random().toString(36).slice(2),
    Pt = '__reactFiber$' + Wa,
    sn = '__reactProps$' + Wa,
    gi = '__reactContainer$' + Wa,
    kc = '__reactEvents$' + Wa,
    f1 = '__reactListeners$' + Wa,
    d1 = '__reactHandles$' + Wa,
    Ih = '__reactResources$' + Wa,
    Ds = '__reactMarker$' + Wa;
  function Rc(e) {
    delete e[Pt], delete e[sn], delete e[kc], delete e[f1], delete e[d1];
  }
  function yi(e) {
    var a = e[Pt];
    if (a) return a;
    for (var s = e.parentNode; s; ) {
      if ((a = s[gi] || s[Pt])) {
        if (((s = a.alternate), a.child !== null || (s !== null && s.child !== null)))
          for (e = gp(e); e !== null; ) {
            if ((s = e[Pt])) return s;
            e = gp(e);
          }
        return a;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function pi(e) {
    if ((e = e[Pt] || e[gi])) {
      var a = e.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3) return e;
    }
    return null;
  }
  function As(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(i(33));
  }
  function vi(e) {
    var a = e[Ih];
    return a || (a = e[Ih] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), a;
  }
  function Rt(e) {
    e[Ds] = !0;
  }
  var Jh = new Set(),
    em = {};
  function zr(e, a) {
    bi(e, a), bi(e + 'Capture', a);
  }
  function bi(e, a) {
    for (em[e] = a, e = 0; e < a.length; e++) Jh.add(a[e]);
  }
  var h1 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    tm = {},
    nm = {};
  function m1(e) {
    return Qa.call(nm, e)
      ? !0
      : Qa.call(tm, e)
        ? !1
        : h1.test(e)
          ? (nm[e] = !0)
          : ((tm[e] = !0), !1);
  }
  function Su(e, a, s) {
    if (m1(a))
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
  function xu(e, a, s) {
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
  var jc, am;
  function _i(e) {
    if (jc === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        (jc = (a && a[1]) || ''),
          (am =
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
      jc +
      e +
      am
    );
  }
  var zc = !1;
  function Uc(e, a) {
    if (!e || zc) return '';
    zc = !0;
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
        var O = p.split(`
`),
          U = _.split(`
`);
        for (c = u = 0; u < O.length && !O[u].includes('DetermineComponentFrameRoot'); ) u++;
        for (; c < U.length && !U[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (u === O.length || c === U.length)
          for (u = O.length - 1, c = U.length - 1; 1 <= u && 0 <= c && O[u] !== U[c]; ) c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (O[u] !== U[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || O[u] !== U[c])) {
                  var F =
                    `
` + O[u].replace(' at new ', ' at ');
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
      (zc = !1), (Error.prepareStackTrace = s);
    }
    return (s = e ? e.displayName || e.name : '') ? _i(s) : '';
  }
  function g1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return _i(e.type);
      case 16:
        return _i('Lazy');
      case 13:
        return _i('Suspense');
      case 19:
        return _i('SuspenseList');
      case 0:
      case 15:
        return Uc(e.type, !1);
      case 11:
        return Uc(e.type.render, !1);
      case 1:
        return Uc(e.type, !0);
      case 31:
        return _i('Activity');
      default:
        return '';
    }
  }
  function rm(e) {
    try {
      var a = '';
      do (a += g1(e)), (e = e.return);
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
  function im(e) {
    var a = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (a === 'checkbox' || a === 'radio');
  }
  function y1(e) {
    var a = im(e) ? 'checked' : 'value',
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
  function wu(e) {
    e._valueTracker || (e._valueTracker = y1(e));
  }
  function sm(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var s = a.getValue(),
      u = '';
    return (
      e && (u = im(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = u),
      e !== s ? (a.setValue(e), !0) : !1
    );
  }
  function Eu(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var p1 = /[\n"\\]/g;
  function Tn(e) {
    return e.replace(p1, function (a) {
      return '\\' + a.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Lc(e, a, s, u, c, d, p, _) {
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
        ? Bc(e, p, On(a))
        : s != null
          ? Bc(e, p, On(s))
          : u != null && e.removeAttribute('value'),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      _ != null && typeof _ != 'function' && typeof _ != 'symbol' && typeof _ != 'boolean'
        ? (e.name = '' + On(_))
        : e.removeAttribute('name');
  }
  function lm(e, a, s, u, c, d, p, _) {
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
  function Bc(e, a, s) {
    (a === 'number' && Eu(e.ownerDocument) === e) ||
      e.defaultValue === '' + s ||
      (e.defaultValue = '' + s);
  }
  function Si(e, a, s, u) {
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
  function um(e, a, s) {
    if (a != null && ((a = '' + On(a)), a !== e.value && (e.value = a), s == null)) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = s != null ? '' + On(s) : '';
  }
  function om(e, a, s, u) {
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
  function xi(e, a) {
    if (a) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var v1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function cm(e, a, s) {
    var u = a.indexOf('--') === 0;
    s == null || typeof s == 'boolean' || s === ''
      ? u
        ? e.setProperty(a, '')
        : a === 'float'
          ? (e.cssFloat = '')
          : (e[a] = '')
      : u
        ? e.setProperty(a, s)
        : typeof s != 'number' || s === 0 || v1.has(a)
          ? a === 'float'
            ? (e.cssFloat = s)
            : (e[a] = ('' + s).trim())
          : (e[a] = s + 'px');
  }
  function fm(e, a, s) {
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
      for (var c in a) (u = a[c]), a.hasOwnProperty(c) && s[c] !== u && cm(e, c, u);
    } else for (var d in a) a.hasOwnProperty(d) && cm(e, d, a[d]);
  }
  function Hc(e) {
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
  var b1 = new Map([
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
    _1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ou(e) {
    return _1.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Vc = null;
  function qc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var wi = null,
    Ei = null;
  function dm(e) {
    var a = pi(e);
    if (a && (e = a.stateNode)) {
      var s = e[sn] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case 'input':
          if (
            (Lc(
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
              s = s.querySelectorAll('input[name="' + Tn('' + a) + '"][type="radio"]'), a = 0;
              a < s.length;
              a++
            ) {
              var u = s[a];
              if (u !== e && u.form === e.form) {
                var c = u[sn] || null;
                if (!c) throw Error(i(90));
                Lc(
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
            for (a = 0; a < s.length; a++) (u = s[a]), u.form === e.form && sm(u);
          }
          break e;
        case 'textarea':
          um(e, s.value, s.defaultValue);
          break e;
        case 'select':
          (a = s.value), a != null && Si(e, !!s.multiple, a, !1);
      }
    }
  }
  var Yc = !1;
  function hm(e, a, s) {
    if (Yc) return e(a, s);
    Yc = !0;
    try {
      var u = e(a);
      return u;
    } finally {
      if (
        ((Yc = !1),
        (wi !== null || Ei !== null) &&
          (co(), wi && ((a = wi), (e = Ei), (Ei = wi = null), dm(a), e)))
      )
        for (a = 0; a < e.length; a++) dm(e[a]);
    }
  }
  function ks(e, a) {
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
    Zc = !1;
  if (pa)
    try {
      var Rs = {};
      Object.defineProperty(Rs, 'passive', {
        get: function () {
          Zc = !0;
        },
      }),
        window.addEventListener('test', Rs, Rs),
        window.removeEventListener('test', Rs, Rs);
    } catch {
      Zc = !1;
    }
  var Xa = null,
    Fc = null,
    Tu = null;
  function mm() {
    if (Tu) return Tu;
    var e,
      a = Fc,
      s = a.length,
      u,
      c = 'value' in Xa ? Xa.value : Xa.textContent,
      d = c.length;
    for (e = 0; e < s && a[e] === c[e]; e++);
    var p = s - e;
    for (u = 1; u <= p && a[s - u] === c[d - u]; u++);
    return (Tu = c.slice(e, 1 < u ? 1 - u : void 0));
  }
  function Cu(e) {
    var a = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && a === 13 && (e = 13)) : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mu() {
    return !0;
  }
  function gm() {
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
          ? Mu
          : gm),
        (this.isPropagationStopped = gm),
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
            (this.isDefaultPrevented = Mu));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != 'unknown' && (s.cancelBubble = !0),
            (this.isPropagationStopped = Mu));
        },
        persist: function () {},
        isPersistent: Mu,
      }),
      a
    );
  }
  var Ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Nu = ln(Ur),
    js = y({}, Ur, { view: 0, detail: 0 }),
    S1 = ln(js),
    Pc,
    Gc,
    zs,
    Du = y({}, js, {
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
      getModifierState: Qc,
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
          : (e !== zs &&
              (zs && e.type === 'mousemove'
                ? ((Pc = e.screenX - zs.screenX), (Gc = e.screenY - zs.screenY))
                : (Gc = Pc = 0),
              (zs = e)),
            Pc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Gc;
      },
    }),
    ym = ln(Du),
    x1 = y({}, Du, { dataTransfer: 0 }),
    w1 = ln(x1),
    E1 = y({}, js, { relatedTarget: 0 }),
    $c = ln(E1),
    O1 = y({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    T1 = ln(O1),
    C1 = y({}, Ur, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    M1 = ln(C1),
    N1 = y({}, Ur, { data: 0 }),
    pm = ln(N1),
    D1 = {
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
    A1 = {
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
    k1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function R1(e) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(e) : (e = k1[e]) ? !!a[e] : !1;
  }
  function Qc() {
    return R1;
  }
  var j1 = y({}, js, {
      key: function (e) {
        if (e.key) {
          var a = D1[e.key] || e.key;
          if (a !== 'Unidentified') return a;
        }
        return e.type === 'keypress'
          ? ((e = Cu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? A1[e.keyCode] || 'Unidentified'
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
      getModifierState: Qc,
      charCode: function (e) {
        return e.type === 'keypress' ? Cu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Cu(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    z1 = ln(j1),
    U1 = y({}, Du, {
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
    vm = ln(U1),
    L1 = y({}, js, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Qc,
    }),
    B1 = ln(L1),
    H1 = y({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V1 = ln(H1),
    q1 = y({}, Du, {
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
    Y1 = ln(q1),
    Z1 = y({}, Ur, { newState: 0, oldState: 0 }),
    F1 = ln(Z1),
    P1 = [9, 13, 27, 32],
    Kc = pa && 'CompositionEvent' in window,
    Us = null;
  pa && 'documentMode' in document && (Us = document.documentMode);
  var G1 = pa && 'TextEvent' in window && !Us,
    bm = pa && (!Kc || (Us && 8 < Us && 11 >= Us)),
    _m = ' ',
    Sm = !1;
  function xm(e, a) {
    switch (e) {
      case 'keyup':
        return P1.indexOf(a.keyCode) !== -1;
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
  function wm(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Oi = !1;
  function $1(e, a) {
    switch (e) {
      case 'compositionend':
        return wm(a);
      case 'keypress':
        return a.which !== 32 ? null : ((Sm = !0), _m);
      case 'textInput':
        return (e = a.data), e === _m && Sm ? null : e;
      default:
        return null;
    }
  }
  function Q1(e, a) {
    if (Oi)
      return e === 'compositionend' || (!Kc && xm(e, a))
        ? ((e = mm()), (Tu = Fc = Xa = null), (Oi = !1), e)
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
        return bm && a.locale !== 'ko' ? null : a.data;
      default:
        return null;
    }
  }
  var K1 = {
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
  function Em(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === 'input' ? !!K1[e.type] : a === 'textarea';
  }
  function Om(e, a, s, u) {
    wi ? (Ei ? Ei.push(u) : (Ei = [u])) : (wi = u),
      (a = po(a, 'onChange')),
      0 < a.length &&
        ((s = new Nu('onChange', 'change', null, s, u)), e.push({ event: s, listeners: a }));
  }
  var Ls = null,
    Bs = null;
  function W1(e) {
    ip(e, 0);
  }
  function Au(e) {
    var a = As(e);
    if (sm(a)) return e;
  }
  function Tm(e, a) {
    if (e === 'change') return a;
  }
  var Cm = !1;
  if (pa) {
    var Wc;
    if (pa) {
      var Xc = 'oninput' in document;
      if (!Xc) {
        var Mm = document.createElement('div');
        Mm.setAttribute('oninput', 'return;'), (Xc = typeof Mm.oninput == 'function');
      }
      Wc = Xc;
    } else Wc = !1;
    Cm = Wc && (!document.documentMode || 9 < document.documentMode);
  }
  function Nm() {
    Ls && (Ls.detachEvent('onpropertychange', Dm), (Bs = Ls = null));
  }
  function Dm(e) {
    if (e.propertyName === 'value' && Au(Bs)) {
      var a = [];
      Om(a, Bs, e, qc(e)), hm(W1, a);
    }
  }
  function X1(e, a, s) {
    e === 'focusin'
      ? (Nm(), (Ls = a), (Bs = s), Ls.attachEvent('onpropertychange', Dm))
      : e === 'focusout' && Nm();
  }
  function I1(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Au(Bs);
  }
  function J1(e, a) {
    if (e === 'click') return Au(a);
  }
  function e_(e, a) {
    if (e === 'input' || e === 'change') return Au(a);
  }
  function t_(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var dn = typeof Object.is == 'function' ? Object.is : t_;
  function Hs(e, a) {
    if (dn(e, a)) return !0;
    if (typeof e != 'object' || e === null || typeof a != 'object' || a === null) return !1;
    var s = Object.keys(e),
      u = Object.keys(a);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var c = s[u];
      if (!Qa.call(a, c) || !dn(e[c], a[c])) return !1;
    }
    return !0;
  }
  function Am(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function km(e, a) {
    var s = Am(e);
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
      s = Am(s);
    }
  }
  function Rm(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? Rm(e, a.parentNode)
            : 'contains' in e
              ? e.contains(a)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function jm(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = Eu(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof a.contentWindow.location.href == 'string';
      } catch {
        s = !1;
      }
      if (s) e = a.contentWindow;
      else break;
      a = Eu(e.document);
    }
    return a;
  }
  function Ic(e) {
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
  var n_ = pa && 'documentMode' in document && 11 >= document.documentMode,
    Ti = null,
    Jc = null,
    Vs = null,
    ef = !1;
  function zm(e, a, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    ef ||
      Ti == null ||
      Ti !== Eu(u) ||
      ((u = Ti),
      'selectionStart' in u && Ic(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = ((u.ownerDocument && u.ownerDocument.defaultView) || window).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Vs && Hs(Vs, u)) ||
        ((Vs = u),
        (u = po(Jc, 'onSelect')),
        0 < u.length &&
          ((a = new Nu('onSelect', 'select', null, a, s)),
          e.push({ event: a, listeners: u }),
          (a.target = Ti))));
  }
  function Lr(e, a) {
    var s = {};
    return (
      (s[e.toLowerCase()] = a.toLowerCase()),
      (s['Webkit' + e] = 'webkit' + a),
      (s['Moz' + e] = 'moz' + a),
      s
    );
  }
  var Ci = {
      animationend: Lr('Animation', 'AnimationEnd'),
      animationiteration: Lr('Animation', 'AnimationIteration'),
      animationstart: Lr('Animation', 'AnimationStart'),
      transitionrun: Lr('Transition', 'TransitionRun'),
      transitionstart: Lr('Transition', 'TransitionStart'),
      transitioncancel: Lr('Transition', 'TransitionCancel'),
      transitionend: Lr('Transition', 'TransitionEnd'),
    },
    tf = {},
    Um = {};
  pa &&
    ((Um = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ci.animationend.animation,
      delete Ci.animationiteration.animation,
      delete Ci.animationstart.animation),
    'TransitionEvent' in window || delete Ci.transitionend.transition);
  function Br(e) {
    if (tf[e]) return tf[e];
    if (!Ci[e]) return e;
    var a = Ci[e],
      s;
    for (s in a) if (a.hasOwnProperty(s) && s in Um) return (tf[e] = a[s]);
    return e;
  }
  var Lm = Br('animationend'),
    Bm = Br('animationiteration'),
    Hm = Br('animationstart'),
    a_ = Br('transitionrun'),
    r_ = Br('transitionstart'),
    i_ = Br('transitioncancel'),
    Vm = Br('transitionend'),
    qm = new Map(),
    nf =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  nf.push('scrollEnd');
  function zn(e, a) {
    qm.set(e, a), zr(a, [e]);
  }
  var Ym = new WeakMap();
  function Cn(e, a) {
    if (typeof e == 'object' && e !== null) {
      var s = Ym.get(e);
      return s !== void 0 ? s : ((a = { value: e, source: a, stack: rm(a) }), Ym.set(e, a), a);
    }
    return { value: e, source: a, stack: rm(a) };
  }
  var Mn = [],
    Mi = 0,
    af = 0;
  function ku() {
    for (var e = Mi, a = (af = Mi = 0); a < e; ) {
      var s = Mn[a];
      Mn[a++] = null;
      var u = Mn[a];
      Mn[a++] = null;
      var c = Mn[a];
      Mn[a++] = null;
      var d = Mn[a];
      if (((Mn[a++] = null), u !== null && c !== null)) {
        var p = u.pending;
        p === null ? (c.next = c) : ((c.next = p.next), (p.next = c)), (u.pending = c);
      }
      d !== 0 && Zm(s, c, d);
    }
  }
  function Ru(e, a, s, u) {
    (Mn[Mi++] = e),
      (Mn[Mi++] = a),
      (Mn[Mi++] = s),
      (Mn[Mi++] = u),
      (af |= u),
      (e.lanes |= u),
      (e = e.alternate),
      e !== null && (e.lanes |= u);
  }
  function rf(e, a, s, u) {
    return Ru(e, a, s, u), ju(e);
  }
  function Ni(e, a) {
    return Ru(e, null, null, a), ju(e);
  }
  function Zm(e, a, s) {
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
          ((c = 31 - Ne(s)),
          (e = d.hiddenUpdates),
          (u = e[c]),
          u === null ? (e[c] = [a]) : u.push(a),
          (a.lane = s | 536870912)),
        d)
      : null;
  }
  function ju(e) {
    if (50 < fl) throw ((fl = 0), (fd = null), Error(i(185)));
    for (var a = e.return; a !== null; ) (e = a), (a = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Di = {};
  function s_(e, a, s, u) {
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
    return new s_(e, a, s, u);
  }
  function sf(e) {
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
  function Fm(e, a) {
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
  function zu(e, a, s, u, c, d) {
    var p = 0;
    if (((u = e), typeof e == 'function')) sf(e) && (p = 1);
    else if (typeof e == 'string')
      p = uS(e, s, ve.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case te:
          return (e = hn(31, s, a, c)), (e.elementType = te), (e.lanes = d), e;
        case x:
          return Hr(s.children, c, d, a);
        case N:
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
              case D:
              case R:
                p = 10;
                break e;
              case E:
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
  function Hr(e, a, s, u) {
    return (e = hn(7, e, u, a)), (e.lanes = s), e;
  }
  function lf(e, a, s) {
    return (e = hn(6, e, null, a)), (e.lanes = s), e;
  }
  function uf(e, a, s) {
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
  var Ai = [],
    ki = 0,
    Uu = null,
    Lu = 0,
    Nn = [],
    Dn = 0,
    Vr = null,
    ba = 1,
    _a = '';
  function qr(e, a) {
    (Ai[ki++] = Lu), (Ai[ki++] = Uu), (Uu = e), (Lu = a);
  }
  function Pm(e, a, s) {
    (Nn[Dn++] = ba), (Nn[Dn++] = _a), (Nn[Dn++] = Vr), (Vr = e);
    var u = ba;
    e = _a;
    var c = 32 - Ne(u) - 1;
    (u &= ~(1 << c)), (s += 1);
    var d = 32 - Ne(a) + c;
    if (30 < d) {
      var p = c - (c % 5);
      (d = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (c -= p),
        (ba = (1 << (32 - Ne(a) + c)) | (s << c) | u),
        (_a = d + e);
    } else (ba = (1 << d) | (s << c) | u), (_a = e);
  }
  function of(e) {
    e.return !== null && (qr(e, 1), Pm(e, 1, 0));
  }
  function cf(e) {
    for (; e === Uu; ) (Uu = Ai[--ki]), (Ai[ki] = null), (Lu = Ai[--ki]), (Ai[ki] = null);
    for (; e === Vr; )
      (Vr = Nn[--Dn]),
        (Nn[Dn] = null),
        (_a = Nn[--Dn]),
        (Nn[Dn] = null),
        (ba = Nn[--Dn]),
        (Nn[Dn] = null);
  }
  var It = null,
    yt = null,
    Xe = !1,
    Yr = null,
    In = !1,
    ff = Error(i(519));
  function Zr(e) {
    var a = Error(i(418, ''));
    throw (Zs(Cn(a, e)), ff);
  }
  function Gm(e) {
    var a = e.stateNode,
      s = e.type,
      u = e.memoizedProps;
    switch (((a[Pt] = e), (a[sn] = u), s)) {
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
        for (s = 0; s < hl.length; s++) Ze(hl[s], a);
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
          lm(a, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0),
          wu(a);
        break;
      case 'select':
        Ze('invalid', a);
        break;
      case 'textarea':
        Ze('invalid', a), om(a, u.value, u.defaultValue, u.children), wu(a);
    }
    (s = u.children),
      (typeof s != 'string' && typeof s != 'number' && typeof s != 'bigint') ||
      a.textContent === '' + s ||
      u.suppressHydrationWarning === !0 ||
      op(a.textContent, s)
        ? (u.popover != null && (Ze('beforetoggle', a), Ze('toggle', a)),
          u.onScroll != null && Ze('scroll', a),
          u.onScrollEnd != null && Ze('scrollend', a),
          u.onClick != null && (a.onclick = vo),
          (a = !0))
        : (a = !1),
      a || Zr(e);
  }
  function $m(e) {
    for (It = e.return; It; )
      switch (It.tag) {
        case 5:
        case 13:
          In = !1;
          return;
        case 27:
        case 3:
          In = !0;
          return;
        default:
          It = It.return;
      }
  }
  function qs(e) {
    if (e !== It) return !1;
    if (!Xe) return $m(e), (Xe = !0), !1;
    var a = e.tag,
      s;
    if (
      ((s = a !== 3 && a !== 27) &&
        ((s = a === 5) &&
          ((s = e.type), (s = !(s !== 'form' && s !== 'button') || Cd(e.type, e.memoizedProps))),
        (s = !s)),
      s && yt && Zr(e),
      $m(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, a = 0; e; ) {
          if (e.nodeType === 8)
            if (((s = e.data), s === '/$')) {
              if (a === 0) {
                yt = Ln(e.nextSibling);
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
        ? ((a = yt), hr(e.type) ? ((e = Ad), (Ad = null), (yt = e)) : (yt = a))
        : (yt = It ? Ln(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ys() {
    (yt = It = null), (Xe = !1);
  }
  function Qm() {
    var e = Yr;
    return e !== null && (cn === null ? (cn = e) : cn.push.apply(cn, e), (Yr = null)), e;
  }
  function Zs(e) {
    Yr === null ? (Yr = [e]) : Yr.push(e);
  }
  var df = P(null),
    Fr = null,
    Sa = null;
  function Ia(e, a, s) {
    re(df, a._currentValue), (a._currentValue = s);
  }
  function xa(e) {
    (e._currentValue = df.current), le(df);
  }
  function hf(e, a, s) {
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
  function mf(e, a, s, u) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var p = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var _ = d;
          d = c;
          for (var O = 0; O < a.length; O++)
            if (_.context === a[O]) {
              (d.lanes |= s),
                (_ = d.alternate),
                _ !== null && (_.lanes |= s),
                hf(d.return, s, e),
                u || (p = null);
              break e;
            }
          d = _.next;
        }
      } else if (c.tag === 18) {
        if (((p = c.return), p === null)) throw Error(i(341));
        (p.lanes |= s), (d = p.alternate), d !== null && (d.lanes |= s), hf(p, s, e), (p = null);
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
  function Fs(e, a, s, u) {
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
          (e !== null ? e.push(bl) : (e = [bl]));
      }
      c = c.return;
    }
    e !== null && mf(a, e, s, u), (a.flags |= 262144);
  }
  function Bu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Pr(e) {
    (Fr = e), (Sa = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function Gt(e) {
    return Km(Fr, e);
  }
  function Hu(e, a) {
    return Fr === null && Pr(e), Km(e, a);
  }
  function Km(e, a) {
    var s = a._currentValue;
    if (((a = { context: a, memoizedValue: s, next: null }), Sa === null)) {
      if (e === null) throw Error(i(308));
      (Sa = a), (e.dependencies = { lanes: 0, firstContext: a }), (e.flags |= 524288);
    } else Sa = Sa.next = a;
    return s;
  }
  var l_ =
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
    u_ = n.unstable_scheduleCallback,
    o_ = n.unstable_NormalPriority,
    Mt = {
      $$typeof: R,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function gf() {
    return { controller: new l_(), data: new Map(), refCount: 0 };
  }
  function Ps(e) {
    e.refCount--,
      e.refCount === 0 &&
        u_(o_, function () {
          e.controller.abort();
        });
  }
  var Gs = null,
    yf = 0,
    Ri = 0,
    ji = null;
  function c_(e, a) {
    if (Gs === null) {
      var s = (Gs = []);
      (yf = 0),
        (Ri = vd()),
        (ji = {
          status: 'pending',
          value: void 0,
          then: function (u) {
            s.push(u);
          },
        });
    }
    return yf++, a.then(Wm, Wm), a;
  }
  function Wm() {
    if (--yf === 0 && Gs !== null) {
      ji !== null && (ji.status = 'fulfilled');
      var e = Gs;
      (Gs = null), (Ri = 0), (ji = null);
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function f_(e, a) {
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
  var Xm = V.S;
  V.S = function (e, a) {
    typeof a == 'object' && a !== null && typeof a.then == 'function' && c_(e, a),
      Xm !== null && Xm(e, a);
  };
  var Gr = P(null);
  function pf() {
    var e = Gr.current;
    return e !== null ? e : ot.pooledCache;
  }
  function Vu(e, a) {
    a === null ? re(Gr, Gr.current) : re(Gr, a.pool);
  }
  function Im() {
    var e = pf();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var $s = Error(i(460)),
    Jm = Error(i(474)),
    qu = Error(i(542)),
    vf = { then: function () {} };
  function eg(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Yu() {}
  function tg(e, a, s) {
    switch (
      ((s = e[s]), s === void 0 ? e.push(a) : s !== a && (a.then(Yu, Yu), (a = s)), a.status)
    ) {
      case 'fulfilled':
        return a.value;
      case 'rejected':
        throw ((e = a.reason), ag(e), e);
      default:
        if (typeof a.status == 'string') a.then(Yu, Yu);
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
            throw ((e = a.reason), ag(e), e);
        }
        throw ((Qs = a), $s);
    }
  }
  var Qs = null;
  function ng() {
    if (Qs === null) throw Error(i(459));
    var e = Qs;
    return (Qs = null), e;
  }
  function ag(e) {
    if (e === $s || e === qu) throw Error(i(483));
  }
  var Ja = !1;
  function bf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function _f(e, a) {
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
  function er(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function tr(e, a, s) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (et & 2) !== 0)) {
      var c = u.pending;
      return (
        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
        (u.pending = a),
        (a = ju(e)),
        Zm(e, null, s),
        a
      );
    }
    return Ru(e, u, a, s), ju(e);
  }
  function Ks(e, a, s) {
    if (((a = a.updateQueue), a !== null && ((a = a.shared), (s & 4194048) !== 0))) {
      var u = a.lanes;
      (u &= e.pendingLanes), (s |= u), (a.lanes = s), mi(e, s);
    }
  }
  function Sf(e, a) {
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
  var xf = !1;
  function Ws() {
    if (xf) {
      var e = ji;
      if (e !== null) throw e;
    }
  }
  function Xs(e, a, s, u) {
    xf = !1;
    var c = e.updateQueue;
    Ja = !1;
    var d = c.firstBaseUpdate,
      p = c.lastBaseUpdate,
      _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var O = _,
        U = O.next;
      (O.next = null), p === null ? (d = U) : (p.next = U), (p = O);
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (_ = F.lastBaseUpdate),
        _ !== p && (_ === null ? (F.firstBaseUpdate = U) : (_.next = U), (F.lastBaseUpdate = O)));
    }
    if (d !== null) {
      var Q = c.baseState;
      (p = 0), (F = U = O = null), (_ = d);
      do {
        var L = _.lane & -536870913,
          H = L !== _.lane;
        if (H ? (Pe & L) === L : (u & L) === L) {
          L !== 0 && L === Ri && (xf = !0),
            F !== null &&
              (F = F.next =
                { lane: 0, tag: _.tag, payload: _.payload, callback: null, next: null });
          e: {
            var De = e,
              Ee = _;
            L = a;
            var st = s;
            switch (Ee.tag) {
              case 1:
                if (((De = Ee.payload), typeof De == 'function')) {
                  Q = De.call(st, Q, L);
                  break e;
                }
                Q = De;
                break e;
              case 3:
                De.flags = (De.flags & -65537) | 128;
              case 0:
                if (
                  ((De = Ee.payload),
                  (L = typeof De == 'function' ? De.call(st, Q, L) : De),
                  L == null)
                )
                  break e;
                Q = y({}, Q, L);
                break e;
              case 2:
                Ja = !0;
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
            F === null ? ((U = F = H), (O = Q)) : (F = F.next = H),
            (p |= L);
        if (((_ = _.next), _ === null)) {
          if (((_ = c.shared.pending), _ === null)) break;
          (H = _), (_ = H.next), (H.next = null), (c.lastBaseUpdate = H), (c.shared.pending = null);
        }
      } while (!0);
      F === null && (O = Q),
        (c.baseState = O),
        (c.firstBaseUpdate = U),
        (c.lastBaseUpdate = F),
        d === null && (c.shared.lanes = 0),
        (or |= p),
        (e.lanes = p),
        (e.memoizedState = Q);
    }
  }
  function rg(e, a) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(a);
  }
  function ig(e, a) {
    var s = e.callbacks;
    if (s !== null) for (e.callbacks = null, e = 0; e < s.length; e++) rg(s[e], a);
  }
  var zi = P(null),
    Zu = P(0);
  function sg(e, a) {
    (e = Na), re(Zu, e), re(zi, a), (Na = e | a.baseLanes);
  }
  function wf() {
    re(Zu, Na), re(zi, zi.current);
  }
  function Ef() {
    (Na = Zu.current), le(zi), le(Zu);
  }
  var nr = 0,
    He = null,
    rt = null,
    Et = null,
    Fu = !1,
    Ui = !1,
    $r = !1,
    Pu = 0,
    Is = 0,
    Li = null,
    d_ = 0;
  function _t() {
    throw Error(i(321));
  }
  function Of(e, a) {
    if (a === null) return !1;
    for (var s = 0; s < a.length && s < e.length; s++) if (!dn(e[s], a[s])) return !1;
    return !0;
  }
  function Tf(e, a, s, u, c, d) {
    return (
      (nr = d),
      (He = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Zg : Fg),
      ($r = !1),
      (d = s(u, c)),
      ($r = !1),
      Ui && (d = ug(a, s, u, c)),
      lg(e),
      d
    );
  }
  function lg(e) {
    V.H = Xu;
    var a = rt !== null && rt.next !== null;
    if (((nr = 0), (Et = rt = He = null), (Fu = !1), (Is = 0), (Li = null), a)) throw Error(i(300));
    e === null || jt || ((e = e.dependencies), e !== null && Bu(e) && (jt = !0));
  }
  function ug(e, a, s, u) {
    He = e;
    var c = 0;
    do {
      if ((Ui && (Li = null), (Is = 0), (Ui = !1), 25 <= c)) throw Error(i(301));
      if (((c += 1), (Et = rt = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (V.H = b_), (d = a(s, u));
    } while (Ui);
    return d;
  }
  function h_() {
    var e = V.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == 'function' ? Js(a) : a),
      (e = e.useState()[0]),
      (rt !== null ? rt.memoizedState : null) !== e && (He.flags |= 1024),
      a
    );
  }
  function Cf() {
    var e = Pu !== 0;
    return (Pu = 0), e;
  }
  function Mf(e, a, s) {
    (a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~s);
  }
  function Nf(e) {
    if (Fu) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        a !== null && (a.pending = null), (e = e.next);
      }
      Fu = !1;
    }
    (nr = 0), (Et = rt = He = null), (Ui = !1), (Is = Pu = 0), (Li = null);
  }
  function un() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? (He.memoizedState = Et = e) : (Et = Et.next = e), Et;
  }
  function Ot() {
    if (rt === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var a = Et === null ? He.memoizedState : Et.next;
    if (a !== null) (Et = a), (rt = e);
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
        Et === null ? (He.memoizedState = Et = e) : (Et = Et.next = e);
    }
    return Et;
  }
  function Df() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Js(e) {
    var a = Is;
    return (
      (Is += 1),
      Li === null && (Li = []),
      (e = tg(Li, e, a)),
      (a = He),
      (Et === null ? a.memoizedState : Et.next) === null &&
        ((a = a.alternate), (V.H = a === null || a.memoizedState === null ? Zg : Fg)),
      e
    );
  }
  function Gu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Js(e);
      if (e.$$typeof === R) return Gt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Af(e) {
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
      s === null && ((s = Df()), (He.updateQueue = s)),
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
  function $u(e) {
    var a = Ot();
    return kf(a, rt, e);
  }
  function kf(e, a, s) {
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
        O = null,
        U = a,
        F = !1;
      do {
        var Q = U.lane & -536870913;
        if (Q !== U.lane ? (Pe & Q) === Q : (nr & Q) === Q) {
          var L = U.revertLane;
          if (L === 0)
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              Q === Ri && (F = !0);
          else if ((nr & L) === L) {
            (U = U.next), L === Ri && (F = !0);
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
              O === null ? ((_ = O = Q), (p = d)) : (O = O.next = Q),
              (He.lanes |= L),
              (or |= L);
          (Q = U.action), $r && s(d, Q), (d = U.hasEagerState ? U.eagerState : s(d, Q));
        } else
          (L = {
            lane: Q,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            O === null ? ((_ = O = L), (p = d)) : (O = O.next = L),
            (He.lanes |= Q),
            (or |= Q);
        U = U.next;
      } while (U !== null && U !== a);
      if (
        (O === null ? (p = d) : (O.next = _),
        !dn(d, e.memoizedState) && ((jt = !0), F && ((s = ji), s !== null)))
      )
        throw s;
      (e.memoizedState = d), (e.baseState = p), (e.baseQueue = O), (u.lastRenderedState = d);
    }
    return c === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function Rf(e) {
    var a = Ot(),
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
  function og(e, a, s) {
    var u = He,
      c = Ot(),
      d = Xe;
    if (d) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = a();
    var p = !dn((rt || c).memoizedState, s);
    p && ((c.memoizedState = s), (jt = !0)), (c = c.queue);
    var _ = dg.bind(null, u, c, e);
    if (
      (el(2048, 8, _, [e]), c.getSnapshot !== a || p || (Et !== null && Et.memoizedState.tag & 1))
    ) {
      if (((u.flags |= 2048), Bi(9, Qu(), fg.bind(null, u, c, s, a), null), ot === null))
        throw Error(i(349));
      d || (nr & 124) !== 0 || cg(u, a, s);
    }
    return s;
  }
  function cg(e, a, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: a, value: s }),
      (a = He.updateQueue),
      a === null
        ? ((a = Df()), (He.updateQueue = a), (a.stores = [e]))
        : ((s = a.stores), s === null ? (a.stores = [e]) : s.push(e));
  }
  function fg(e, a, s, u) {
    (a.value = s), (a.getSnapshot = u), hg(a) && mg(e);
  }
  function dg(e, a, s) {
    return s(function () {
      hg(a) && mg(e);
    });
  }
  function hg(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var s = a();
      return !dn(e, s);
    } catch {
      return !0;
    }
  }
  function mg(e) {
    var a = Ni(e, 2);
    a !== null && vn(a, e, 2);
  }
  function jf(e) {
    var a = un();
    if (typeof e == 'function') {
      var s = e;
      if (((e = s()), $r)) {
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
  function gg(e, a, s, u) {
    return (e.baseState = s), kf(e, rt, typeof u == 'function' ? u : wa);
  }
  function m_(e, a, s, u, c) {
    if (Wu(e)) throw Error(i(485));
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
          ? ((d.next = a.pending = d), yg(a, d))
          : ((d.next = s.next), (a.pending = s.next = d));
    }
  }
  function yg(e, a) {
    var s = a.action,
      u = a.payload,
      c = e.state;
    if (a.isTransition) {
      var d = V.T,
        p = {};
      V.T = p;
      try {
        var _ = s(c, u),
          O = V.S;
        O !== null && O(p, _), pg(e, a, _);
      } catch (U) {
        zf(e, a, U);
      } finally {
        V.T = d;
      }
    } else
      try {
        (d = s(c, u)), pg(e, a, d);
      } catch (U) {
        zf(e, a, U);
      }
  }
  function pg(e, a, s) {
    s !== null && typeof s == 'object' && typeof s.then == 'function'
      ? s.then(
          function (u) {
            vg(e, a, u);
          },
          function (u) {
            return zf(e, a, u);
          }
        )
      : vg(e, a, s);
  }
  function vg(e, a, s) {
    (a.status = 'fulfilled'),
      (a.value = s),
      bg(a),
      (e.state = s),
      (a = e.pending),
      a !== null &&
        ((s = a.next), s === a ? (e.pending = null) : ((s = s.next), (a.next = s), yg(e, s)));
  }
  function zf(e, a, s) {
    var u = e.pending;
    if (((e.pending = null), u !== null)) {
      u = u.next;
      do (a.status = 'rejected'), (a.reason = s), bg(a), (a = a.next);
      while (a !== u);
    }
    e.action = null;
  }
  function bg(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function _g(e, a) {
    return a;
  }
  function Sg(e, a) {
    if (Xe) {
      var s = ot.formState;
      if (s !== null) {
        e: {
          var u = He;
          if (Xe) {
            if (yt) {
              t: {
                for (var c = yt, d = In; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = Ln(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === 'F!' || d === 'F' ? c : null);
              }
              if (c) {
                (yt = Ln(c.nextSibling)), (u = c.data === 'F!');
                break e;
              }
            }
            Zr(u);
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
        lastRenderedReducer: _g,
        lastRenderedState: a,
      }),
      (s.queue = u),
      (s = Vg.bind(null, He, u)),
      (u.dispatch = s),
      (u = jf(!1)),
      (d = Vf.bind(null, He, !1, u.queue)),
      (u = un()),
      (c = { state: a, dispatch: null, action: e, pending: null }),
      (u.queue = c),
      (s = m_.bind(null, He, c, d, s)),
      (c.dispatch = s),
      (u.memoizedState = e),
      [a, s, !1]
    );
  }
  function xg(e) {
    var a = Ot();
    return wg(a, rt, e);
  }
  function wg(e, a, s) {
    if (
      ((a = kf(e, a, _g)[0]),
      (e = $u(wa)[0]),
      typeof a == 'object' && a !== null && typeof a.then == 'function')
    )
      try {
        var u = Js(a);
      } catch (p) {
        throw p === $s ? qu : p;
      }
    else u = a;
    a = Ot();
    var c = a.queue,
      d = c.dispatch;
    return (
      s !== a.memoizedState && ((He.flags |= 2048), Bi(9, Qu(), g_.bind(null, c, s), null)),
      [u, d, e]
    );
  }
  function g_(e, a) {
    e.action = a;
  }
  function Eg(e) {
    var a = Ot(),
      s = rt;
    if (s !== null) return wg(a, s, e);
    Ot(), (a = a.memoizedState), (s = Ot());
    var u = s.queue.dispatch;
    return (s.memoizedState = e), [a, u, !1];
  }
  function Bi(e, a, s, u) {
    return (
      (e = { tag: e, create: s, deps: u, inst: a, next: null }),
      (a = He.updateQueue),
      a === null && ((a = Df()), (He.updateQueue = a)),
      (s = a.lastEffect),
      s === null
        ? (a.lastEffect = e.next = e)
        : ((u = s.next), (s.next = e), (e.next = u), (a.lastEffect = e)),
      e
    );
  }
  function Qu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Og() {
    return Ot().memoizedState;
  }
  function Ku(e, a, s, u) {
    var c = un();
    (u = u === void 0 ? null : u), (He.flags |= e), (c.memoizedState = Bi(1 | a, Qu(), s, u));
  }
  function el(e, a, s, u) {
    var c = Ot();
    u = u === void 0 ? null : u;
    var d = c.memoizedState.inst;
    rt !== null && u !== null && Of(u, rt.memoizedState.deps)
      ? (c.memoizedState = Bi(a, d, s, u))
      : ((He.flags |= e), (c.memoizedState = Bi(1 | a, d, s, u)));
  }
  function Tg(e, a) {
    Ku(8390656, 8, e, a);
  }
  function Cg(e, a) {
    el(2048, 8, e, a);
  }
  function Mg(e, a) {
    return el(4, 2, e, a);
  }
  function Ng(e, a) {
    return el(4, 4, e, a);
  }
  function Dg(e, a) {
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
  function Ag(e, a, s) {
    (s = s != null ? s.concat([e]) : null), el(4, 4, Dg.bind(null, a, e), s);
  }
  function Uf() {}
  function kg(e, a) {
    var s = Ot();
    a = a === void 0 ? null : a;
    var u = s.memoizedState;
    return a !== null && Of(a, u[1]) ? u[0] : ((s.memoizedState = [e, a]), e);
  }
  function Rg(e, a) {
    var s = Ot();
    a = a === void 0 ? null : a;
    var u = s.memoizedState;
    if (a !== null && Of(a, u[1])) return u[0];
    if (((u = e()), $r)) {
      ce(!0);
      try {
        e();
      } finally {
        ce(!1);
      }
    }
    return (s.memoizedState = [u, a]), u;
  }
  function Lf(e, a, s) {
    return s === void 0 || (nr & 1073741824) !== 0
      ? (e.memoizedState = a)
      : ((e.memoizedState = s), (e = Uy()), (He.lanes |= e), (or |= e), s);
  }
  function jg(e, a, s, u) {
    return dn(s, a)
      ? s
      : zi.current !== null
        ? ((e = Lf(e, s, u)), dn(e, a) || (jt = !0), e)
        : (nr & 42) === 0
          ? ((jt = !0), (e.memoizedState = s))
          : ((e = Uy()), (He.lanes |= e), (or |= e), a);
  }
  function zg(e, a, s, u, c) {
    var d = I.p;
    I.p = d !== 0 && 8 > d ? d : 8;
    var p = V.T,
      _ = {};
    (V.T = _), Vf(e, !1, a, s);
    try {
      var O = c(),
        U = V.S;
      if (
        (U !== null && U(_, O), O !== null && typeof O == 'object' && typeof O.then == 'function')
      ) {
        var F = f_(O, u);
        tl(e, a, F, pn(e));
      } else tl(e, a, u, pn(e));
    } catch (Q) {
      tl(e, a, { then: function () {}, status: 'rejected', reason: Q }, pn());
    } finally {
      (I.p = d), (V.T = p);
    }
  }
  function y_() {}
  function Bf(e, a, s, u) {
    if (e.tag !== 5) throw Error(i(476));
    var c = Ug(e).queue;
    zg(
      e,
      c,
      a,
      me,
      s === null
        ? y_
        : function () {
            return Lg(e), s(u);
          }
    );
  }
  function Ug(e) {
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
  function Lg(e) {
    var a = Ug(e).next.queue;
    tl(e, a, {}, pn());
  }
  function Hf() {
    return Gt(bl);
  }
  function Bg() {
    return Ot().memoizedState;
  }
  function Hg() {
    return Ot().memoizedState;
  }
  function p_(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var s = pn();
          e = er(s);
          var u = tr(a, e, s);
          u !== null && (vn(u, a, s), Ks(u, a, s)), (a = { cache: gf() }), (e.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function v_(e, a, s) {
    var u = pn();
    (s = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null }),
      Wu(e) ? qg(a, s) : ((s = rf(e, a, s, u)), s !== null && (vn(s, e, u), Yg(s, a, u)));
  }
  function Vg(e, a, s) {
    var u = pn();
    tl(e, a, s, u);
  }
  function tl(e, a, s, u) {
    var c = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Wu(e)) qg(a, c);
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
            return Ru(e, a, c, 0), ot === null && ku(), !1;
        } catch {
        } finally {
        }
      if (((s = rf(e, a, c, u)), s !== null)) return vn(s, e, u), Yg(s, a, u), !0;
    }
    return !1;
  }
  function Vf(e, a, s, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: vd(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Wu(e))
    ) {
      if (a) throw Error(i(479));
    } else (a = rf(e, s, u, 2)), a !== null && vn(a, e, 2);
  }
  function Wu(e) {
    var a = e.alternate;
    return e === He || (a !== null && a === He);
  }
  function qg(e, a) {
    Ui = Fu = !0;
    var s = e.pending;
    s === null ? (a.next = a) : ((a.next = s.next), (s.next = a)), (e.pending = a);
  }
  function Yg(e, a, s) {
    if ((s & 4194048) !== 0) {
      var u = a.lanes;
      (u &= e.pendingLanes), (s |= u), (a.lanes = s), mi(e, s);
    }
  }
  var Xu = {
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
    Zg = {
      readContext: Gt,
      use: Gu,
      useCallback: function (e, a) {
        return (un().memoizedState = [e, a === void 0 ? null : a]), e;
      },
      useContext: Gt,
      useEffect: Tg,
      useImperativeHandle: function (e, a, s) {
        (s = s != null ? s.concat([e]) : null), Ku(4194308, 4, Dg.bind(null, a, e), s);
      },
      useLayoutEffect: function (e, a) {
        return Ku(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Ku(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var s = un();
        a = a === void 0 ? null : a;
        var u = e();
        if ($r) {
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
          if ($r) {
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
          (e = e.dispatch = v_.bind(null, He, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = un();
        return (e = { current: e }), (a.memoizedState = e);
      },
      useState: function (e) {
        e = jf(e);
        var a = e.queue,
          s = Vg.bind(null, He, a);
        return (a.dispatch = s), [e.memoizedState, s];
      },
      useDebugValue: Uf,
      useDeferredValue: function (e, a) {
        var s = un();
        return Lf(s, e, a);
      },
      useTransition: function () {
        var e = jf(!1);
        return (e = zg.bind(null, He, e.queue, !0, !1)), (un().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, a, s) {
        var u = He,
          c = un();
        if (Xe) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = a()), ot === null)) throw Error(i(349));
          (Pe & 124) !== 0 || cg(u, a, s);
        }
        c.memoizedState = s;
        var d = { value: s, getSnapshot: a };
        return (
          (c.queue = d),
          Tg(dg.bind(null, u, d, e), [e]),
          (u.flags |= 2048),
          Bi(9, Qu(), fg.bind(null, u, d, s, a), null),
          s
        );
      },
      useId: function () {
        var e = un(),
          a = ot.identifierPrefix;
        if (Xe) {
          var s = _a,
            u = ba;
          (s = (u & ~(1 << (32 - Ne(u) - 1))).toString(32) + s),
            (a = '«' + a + 'R' + s),
            (s = Pu++),
            0 < s && (a += 'H' + s.toString(32)),
            (a += '»');
        } else (s = d_++), (a = '«' + a + 'r' + s.toString(32) + '»');
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: Hf,
      useFormState: Sg,
      useActionState: Sg,
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
        return (a.queue = s), (a = Vf.bind(null, He, !0, s)), (s.dispatch = a), [e, a];
      },
      useMemoCache: Af,
      useCacheRefresh: function () {
        return (un().memoizedState = p_.bind(null, He));
      },
    },
    Fg = {
      readContext: Gt,
      use: Gu,
      useCallback: kg,
      useContext: Gt,
      useEffect: Cg,
      useImperativeHandle: Ag,
      useInsertionEffect: Mg,
      useLayoutEffect: Ng,
      useMemo: Rg,
      useReducer: $u,
      useRef: Og,
      useState: function () {
        return $u(wa);
      },
      useDebugValue: Uf,
      useDeferredValue: function (e, a) {
        var s = Ot();
        return jg(s, rt.memoizedState, e, a);
      },
      useTransition: function () {
        var e = $u(wa)[0],
          a = Ot().memoizedState;
        return [typeof e == 'boolean' ? e : Js(e), a];
      },
      useSyncExternalStore: og,
      useId: Bg,
      useHostTransitionStatus: Hf,
      useFormState: xg,
      useActionState: xg,
      useOptimistic: function (e, a) {
        var s = Ot();
        return gg(s, rt, e, a);
      },
      useMemoCache: Af,
      useCacheRefresh: Hg,
    },
    b_ = {
      readContext: Gt,
      use: Gu,
      useCallback: kg,
      useContext: Gt,
      useEffect: Cg,
      useImperativeHandle: Ag,
      useInsertionEffect: Mg,
      useLayoutEffect: Ng,
      useMemo: Rg,
      useReducer: Rf,
      useRef: Og,
      useState: function () {
        return Rf(wa);
      },
      useDebugValue: Uf,
      useDeferredValue: function (e, a) {
        var s = Ot();
        return rt === null ? Lf(s, e, a) : jg(s, rt.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Rf(wa)[0],
          a = Ot().memoizedState;
        return [typeof e == 'boolean' ? e : Js(e), a];
      },
      useSyncExternalStore: og,
      useId: Bg,
      useHostTransitionStatus: Hf,
      useFormState: Eg,
      useActionState: Eg,
      useOptimistic: function (e, a) {
        var s = Ot();
        return rt !== null ? gg(s, rt, e, a) : ((s.baseState = e), [e, s.queue.dispatch]);
      },
      useMemoCache: Af,
      useCacheRefresh: Hg,
    },
    Hi = null,
    nl = 0;
  function Iu(e) {
    var a = nl;
    return (nl += 1), Hi === null && (Hi = []), tg(Hi, e, a);
  }
  function al(e, a) {
    (a = a.props.ref), (e.ref = a !== void 0 ? a : null);
  }
  function Ju(e, a) {
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
  function Pg(e) {
    var a = e._init;
    return a(e._payload);
  }
  function Gg(e) {
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
    function _(j, A, z, G) {
      return A === null || A.tag !== 6
        ? ((A = lf(z, j.mode, G)), (A.return = j), A)
        : ((A = c(A, z)), (A.return = j), A);
    }
    function O(j, A, z, G) {
      var ge = z.type;
      return ge === x
        ? F(j, A, z.props.children, G, z.key)
        : A !== null &&
            (A.elementType === ge ||
              (typeof ge == 'object' && ge !== null && ge.$$typeof === ie && Pg(ge) === A.type))
          ? ((A = c(A, z.props)), al(A, z), (A.return = j), A)
          : ((A = zu(z.type, z.key, z.props, null, j.mode, G)), al(A, z), (A.return = j), A);
    }
    function U(j, A, z, G) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== z.containerInfo ||
        A.stateNode.implementation !== z.implementation
        ? ((A = uf(z, j.mode, G)), (A.return = j), A)
        : ((A = c(A, z.children || [])), (A.return = j), A);
    }
    function F(j, A, z, G, ge) {
      return A === null || A.tag !== 7
        ? ((A = Hr(z, j.mode, G, ge)), (A.return = j), A)
        : ((A = c(A, z)), (A.return = j), A);
    }
    function Q(j, A, z) {
      if ((typeof A == 'string' && A !== '') || typeof A == 'number' || typeof A == 'bigint')
        return (A = lf('' + A, j.mode, z)), (A.return = j), A;
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case b:
            return (z = zu(A.type, A.key, A.props, null, j.mode, z)), al(z, A), (z.return = j), z;
          case w:
            return (A = uf(A, j.mode, z)), (A.return = j), A;
          case ie:
            var G = A._init;
            return (A = G(A._payload)), Q(j, A, z);
        }
        if (Me(A) || se(A)) return (A = Hr(A, j.mode, z, null)), (A.return = j), A;
        if (typeof A.then == 'function') return Q(j, Iu(A), z);
        if (A.$$typeof === R) return Q(j, Hu(j, A), z);
        Ju(j, A);
      }
      return null;
    }
    function L(j, A, z, G) {
      var ge = A !== null ? A.key : null;
      if ((typeof z == 'string' && z !== '') || typeof z == 'number' || typeof z == 'bigint')
        return ge !== null ? null : _(j, A, '' + z, G);
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case b:
            return z.key === ge ? O(j, A, z, G) : null;
          case w:
            return z.key === ge ? U(j, A, z, G) : null;
          case ie:
            return (ge = z._init), (z = ge(z._payload)), L(j, A, z, G);
        }
        if (Me(z) || se(z)) return ge !== null ? null : F(j, A, z, G, null);
        if (typeof z.then == 'function') return L(j, A, Iu(z), G);
        if (z.$$typeof === R) return L(j, A, Hu(j, z), G);
        Ju(j, z);
      }
      return null;
    }
    function H(j, A, z, G, ge) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return (j = j.get(z) || null), _(A, j, '' + G, ge);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case b:
            return (j = j.get(G.key === null ? z : G.key) || null), O(A, j, G, ge);
          case w:
            return (j = j.get(G.key === null ? z : G.key) || null), U(A, j, G, ge);
          case ie:
            var qe = G._init;
            return (G = qe(G._payload)), H(j, A, z, G, ge);
        }
        if (Me(G) || se(G)) return (j = j.get(z) || null), F(A, j, G, ge, null);
        if (typeof G.then == 'function') return H(j, A, z, Iu(G), ge);
        if (G.$$typeof === R) return H(j, A, z, Hu(A, G), ge);
        Ju(A, G);
      }
      return null;
    }
    function De(j, A, z, G) {
      for (
        var ge = null, qe = null, pe = A, Oe = (A = 0), Ut = null;
        pe !== null && Oe < z.length;
        Oe++
      ) {
        pe.index > Oe ? ((Ut = pe), (pe = null)) : (Ut = pe.sibling);
        var Qe = L(j, pe, z[Oe], G);
        if (Qe === null) {
          pe === null && (pe = Ut);
          break;
        }
        e && pe && Qe.alternate === null && a(j, pe),
          (A = d(Qe, A, Oe)),
          qe === null ? (ge = Qe) : (qe.sibling = Qe),
          (qe = Qe),
          (pe = Ut);
      }
      if (Oe === z.length) return s(j, pe), Xe && qr(j, Oe), ge;
      if (pe === null) {
        for (; Oe < z.length; Oe++)
          (pe = Q(j, z[Oe], G)),
            pe !== null &&
              ((A = d(pe, A, Oe)), qe === null ? (ge = pe) : (qe.sibling = pe), (qe = pe));
        return Xe && qr(j, Oe), ge;
      }
      for (pe = u(pe); Oe < z.length; Oe++)
        (Ut = H(pe, j, Oe, z[Oe], G)),
          Ut !== null &&
            (e && Ut.alternate !== null && pe.delete(Ut.key === null ? Oe : Ut.key),
            (A = d(Ut, A, Oe)),
            qe === null ? (ge = Ut) : (qe.sibling = Ut),
            (qe = Ut));
      return (
        e &&
          pe.forEach(function (vr) {
            return a(j, vr);
          }),
        Xe && qr(j, Oe),
        ge
      );
    }
    function Ee(j, A, z, G) {
      if (z == null) throw Error(i(151));
      for (
        var ge = null, qe = null, pe = A, Oe = (A = 0), Ut = null, Qe = z.next();
        pe !== null && !Qe.done;
        Oe++, Qe = z.next()
      ) {
        pe.index > Oe ? ((Ut = pe), (pe = null)) : (Ut = pe.sibling);
        var vr = L(j, pe, Qe.value, G);
        if (vr === null) {
          pe === null && (pe = Ut);
          break;
        }
        e && pe && vr.alternate === null && a(j, pe),
          (A = d(vr, A, Oe)),
          qe === null ? (ge = vr) : (qe.sibling = vr),
          (qe = vr),
          (pe = Ut);
      }
      if (Qe.done) return s(j, pe), Xe && qr(j, Oe), ge;
      if (pe === null) {
        for (; !Qe.done; Oe++, Qe = z.next())
          (Qe = Q(j, Qe.value, G)),
            Qe !== null &&
              ((A = d(Qe, A, Oe)), qe === null ? (ge = Qe) : (qe.sibling = Qe), (qe = Qe));
        return Xe && qr(j, Oe), ge;
      }
      for (pe = u(pe); !Qe.done; Oe++, Qe = z.next())
        (Qe = H(pe, j, Oe, Qe.value, G)),
          Qe !== null &&
            (e && Qe.alternate !== null && pe.delete(Qe.key === null ? Oe : Qe.key),
            (A = d(Qe, A, Oe)),
            qe === null ? (ge = Qe) : (qe.sibling = Qe),
            (qe = Qe));
      return (
        e &&
          pe.forEach(function (_S) {
            return a(j, _S);
          }),
        Xe && qr(j, Oe),
        ge
      );
    }
    function st(j, A, z, G) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === x &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case b:
            e: {
              for (var ge = z.key; A !== null; ) {
                if (A.key === ge) {
                  if (((ge = z.type), ge === x)) {
                    if (A.tag === 7) {
                      s(j, A.sibling), (G = c(A, z.props.children)), (G.return = j), (j = G);
                      break e;
                    }
                  } else if (
                    A.elementType === ge ||
                    (typeof ge == 'object' &&
                      ge !== null &&
                      ge.$$typeof === ie &&
                      Pg(ge) === A.type)
                  ) {
                    s(j, A.sibling), (G = c(A, z.props)), al(G, z), (G.return = j), (j = G);
                    break e;
                  }
                  s(j, A);
                  break;
                } else a(j, A);
                A = A.sibling;
              }
              z.type === x
                ? ((G = Hr(z.props.children, j.mode, G, z.key)), (G.return = j), (j = G))
                : ((G = zu(z.type, z.key, z.props, null, j.mode, G)),
                  al(G, z),
                  (G.return = j),
                  (j = G));
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
                    s(j, A.sibling), (G = c(A, z.children || [])), (G.return = j), (j = G);
                    break e;
                  } else {
                    s(j, A);
                    break;
                  }
                else a(j, A);
                A = A.sibling;
              }
              (G = uf(z, j.mode, G)), (G.return = j), (j = G);
            }
            return p(j);
          case ie:
            return (ge = z._init), (z = ge(z._payload)), st(j, A, z, G);
        }
        if (Me(z)) return De(j, A, z, G);
        if (se(z)) {
          if (((ge = se(z)), typeof ge != 'function')) throw Error(i(150));
          return (z = ge.call(z)), Ee(j, A, z, G);
        }
        if (typeof z.then == 'function') return st(j, A, Iu(z), G);
        if (z.$$typeof === R) return st(j, A, Hu(j, z), G);
        Ju(j, z);
      }
      return (typeof z == 'string' && z !== '') || typeof z == 'number' || typeof z == 'bigint'
        ? ((z = '' + z),
          A !== null && A.tag === 6
            ? (s(j, A.sibling), (G = c(A, z)), (G.return = j), (j = G))
            : (s(j, A), (G = lf(z, j.mode, G)), (G.return = j), (j = G)),
          p(j))
        : s(j, A);
    }
    return function (j, A, z, G) {
      try {
        nl = 0;
        var ge = st(j, A, z, G);
        return (Hi = null), ge;
      } catch (pe) {
        if (pe === $s || pe === qu) throw pe;
        var qe = hn(29, pe, null, j.mode);
        return (qe.lanes = G), (qe.return = j), qe;
      } finally {
      }
    };
  }
  var Vi = Gg(!0),
    $g = Gg(!1),
    An = P(null),
    Jn = null;
  function ar(e) {
    var a = e.alternate;
    re(Nt, Nt.current & 1),
      re(An, e),
      Jn === null && (a === null || zi.current !== null || a.memoizedState !== null) && (Jn = e);
  }
  function Qg(e) {
    if (e.tag === 22) {
      if ((re(Nt, Nt.current), re(An, e), Jn === null)) {
        var a = e.alternate;
        a !== null && a.memoizedState !== null && (Jn = e);
      }
    } else rr();
  }
  function rr() {
    re(Nt, Nt.current), re(An, An.current);
  }
  function Ea(e) {
    le(An), Jn === e && (Jn = null), le(Nt);
  }
  var Nt = P(0);
  function eo(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var s = a.memoizedState;
        if (s !== null && ((s = s.dehydrated), s === null || s.data === '$?' || Dd(s))) return a;
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
  function qf(e, a, s, u) {
    (a = e.memoizedState),
      (s = s(u, a)),
      (s = s == null ? a : y({}, a, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Yf = {
    enqueueSetState: function (e, a, s) {
      e = e._reactInternals;
      var u = pn(),
        c = er(u);
      (c.payload = a),
        s != null && (c.callback = s),
        (a = tr(e, c, u)),
        a !== null && (vn(a, e, u), Ks(a, e, u));
    },
    enqueueReplaceState: function (e, a, s) {
      e = e._reactInternals;
      var u = pn(),
        c = er(u);
      (c.tag = 1),
        (c.payload = a),
        s != null && (c.callback = s),
        (a = tr(e, c, u)),
        a !== null && (vn(a, e, u), Ks(a, e, u));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var s = pn(),
        u = er(s);
      (u.tag = 2),
        a != null && (u.callback = a),
        (a = tr(e, u, s)),
        a !== null && (vn(a, e, s), Ks(a, e, s));
    },
  };
  function Kg(e, a, s, u, c, d, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(u, d, p)
        : a.prototype && a.prototype.isPureReactComponent
          ? !Hs(s, u) || !Hs(c, d)
          : !0
    );
  }
  function Wg(e, a, s, u) {
    (e = a.state),
      typeof a.componentWillReceiveProps == 'function' && a.componentWillReceiveProps(s, u),
      typeof a.UNSAFE_componentWillReceiveProps == 'function' &&
        a.UNSAFE_componentWillReceiveProps(s, u),
      a.state !== e && Yf.enqueueReplaceState(a, a.state, null);
  }
  function Qr(e, a) {
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
  var to =
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
  function Xg(e) {
    to(e);
  }
  function Ig(e) {
    console.error(e);
  }
  function Jg(e) {
    to(e);
  }
  function no(e, a) {
    try {
      var s = e.onUncaughtError;
      s(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ey(e, a, s) {
    try {
      var u = e.onCaughtError;
      u(s.value, { componentStack: s.stack, errorBoundary: a.tag === 1 ? a.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Zf(e, a, s) {
    return (
      (s = er(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        no(e, a);
      }),
      s
    );
  }
  function ty(e) {
    return (e = er(e)), (e.tag = 3), e;
  }
  function ny(e, a, s, u) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var d = u.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          ey(a, s, u);
        });
    }
    var p = s.stateNode;
    p !== null &&
      typeof p.componentDidCatch == 'function' &&
      (e.callback = function () {
        ey(a, s, u),
          typeof c != 'function' && (cr === null ? (cr = new Set([this])) : cr.add(this));
        var _ = u.stack;
        this.componentDidCatch(u.value, { componentStack: _ !== null ? _ : '' });
      });
  }
  function __(e, a, s, u, c) {
    if (((s.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
      if (((a = s.alternate), a !== null && Fs(a, s, c, !0), (s = An.current), s !== null)) {
        switch (s.tag) {
          case 13:
            return (
              Jn === null ? hd() : s.alternate === null && pt === 0 && (pt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = c),
              u === vf
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null ? (s.updateQueue = new Set([u])) : a.add(u),
                  gd(e, u, c)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              u === vf
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null
                    ? ((a = { transitions: null, markerInstances: null, retryQueue: new Set([u]) }),
                      (s.updateQueue = a))
                    : ((s = a.retryQueue), s === null ? (a.retryQueue = new Set([u])) : s.add(u)),
                  gd(e, u, c)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return gd(e, u, c), hd(), !1;
    }
    if (Xe)
      return (
        (a = An.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = c),
            u !== ff && ((e = Error(i(422), { cause: u })), Zs(Cn(e, s))))
          : (u !== ff && ((a = Error(i(423), { cause: u })), Zs(Cn(a, s))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (u = Cn(u, s)),
            (c = Zf(e.stateNode, u, c)),
            Sf(e, c),
            pt !== 4 && (pt = 2)),
        !1
      );
    var d = Error(i(520), { cause: u });
    if (((d = Cn(d, s)), cl === null ? (cl = [d]) : cl.push(d), pt !== 4 && (pt = 2), a === null))
      return !0;
    (u = Cn(u, s)), (s = a);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (e = c & -c),
            (s.lanes |= e),
            (e = Zf(s.stateNode, u, e)),
            Sf(s, e),
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
                  (cr === null || !cr.has(d)))))
          )
            return (
              (s.flags |= 65536),
              (c &= -c),
              (s.lanes |= c),
              (c = ty(c)),
              ny(c, e, s, u),
              Sf(s, c),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var ay = Error(i(461)),
    jt = !1;
  function Lt(e, a, s, u) {
    a.child = e === null ? $g(a, null, s, u) : Vi(a, e.child, s, u);
  }
  function ry(e, a, s, u, c) {
    s = s.render;
    var d = a.ref;
    if ('ref' in u) {
      var p = {};
      for (var _ in u) _ !== 'ref' && (p[_] = u[_]);
    } else p = u;
    return (
      Pr(a),
      (u = Tf(e, a, s, p, d, c)),
      (_ = Cf()),
      e !== null && !jt
        ? (Mf(e, a, c), Oa(e, a, c))
        : (Xe && _ && of(a), (a.flags |= 1), Lt(e, a, u, c), a.child)
    );
  }
  function iy(e, a, s, u, c) {
    if (e === null) {
      var d = s.type;
      return typeof d == 'function' && !sf(d) && d.defaultProps === void 0 && s.compare === null
        ? ((a.tag = 15), (a.type = d), sy(e, a, d, u, c))
        : ((e = zu(s.type, null, u, a, a.mode, c)), (e.ref = a.ref), (e.return = a), (a.child = e));
    }
    if (((d = e.child), !Xf(e, c))) {
      var p = d.memoizedProps;
      if (((s = s.compare), (s = s !== null ? s : Hs), s(p, u) && e.ref === a.ref))
        return Oa(e, a, c);
    }
    return (a.flags |= 1), (e = va(d, u)), (e.ref = a.ref), (e.return = a), (a.child = e);
  }
  function sy(e, a, s, u, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Hs(d, u) && e.ref === a.ref)
        if (((jt = !1), (a.pendingProps = u = d), Xf(e, c))) (e.flags & 131072) !== 0 && (jt = !0);
        else return (a.lanes = e.lanes), Oa(e, a, c);
    }
    return Ff(e, a, s, u, c);
  }
  function ly(e, a, s) {
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
        return uy(e, a, u, s);
      }
      if ((s & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Vu(a, d !== null ? d.cachePool : null),
          d !== null ? sg(a, d) : wf(),
          Qg(a);
      else
        return (a.lanes = a.childLanes = 536870912), uy(e, a, d !== null ? d.baseLanes | s : s, s);
    } else
      d !== null
        ? (Vu(a, d.cachePool), sg(a, d), rr(), (a.memoizedState = null))
        : (e !== null && Vu(a, null), wf(), rr());
    return Lt(e, a, c, s), a.child;
  }
  function uy(e, a, s, u) {
    var c = pf();
    return (
      (c = c === null ? null : { parent: Mt._currentValue, pool: c }),
      (a.memoizedState = { baseLanes: s, cachePool: c }),
      e !== null && Vu(a, null),
      wf(),
      Qg(a),
      e !== null && Fs(e, a, u, !0),
      null
    );
  }
  function ao(e, a) {
    var s = a.ref;
    if (s === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof s != 'function' && typeof s != 'object') throw Error(i(284));
      (e === null || e.ref !== s) && (a.flags |= 4194816);
    }
  }
  function Ff(e, a, s, u, c) {
    return (
      Pr(a),
      (s = Tf(e, a, s, u, void 0, c)),
      (u = Cf()),
      e !== null && !jt
        ? (Mf(e, a, c), Oa(e, a, c))
        : (Xe && u && of(a), (a.flags |= 1), Lt(e, a, s, c), a.child)
    );
  }
  function oy(e, a, s, u, c, d) {
    return (
      Pr(a),
      (a.updateQueue = null),
      (s = ug(a, u, s, c)),
      lg(e),
      (u = Cf()),
      e !== null && !jt
        ? (Mf(e, a, d), Oa(e, a, d))
        : (Xe && u && of(a), (a.flags |= 1), Lt(e, a, s, d), a.child)
    );
  }
  function cy(e, a, s, u, c) {
    if ((Pr(a), a.stateNode === null)) {
      var d = Di,
        p = s.contextType;
      typeof p == 'object' && p !== null && (d = Gt(p)),
        (d = new s(u, d)),
        (a.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Yf),
        (a.stateNode = d),
        (d._reactInternals = a),
        (d = a.stateNode),
        (d.props = u),
        (d.state = a.memoizedState),
        (d.refs = {}),
        bf(a),
        (p = s.contextType),
        (d.context = typeof p == 'object' && p !== null ? Gt(p) : Di),
        (d.state = a.memoizedState),
        (p = s.getDerivedStateFromProps),
        typeof p == 'function' && (qf(a, s, p, u), (d.state = a.memoizedState)),
        typeof s.getDerivedStateFromProps == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function' ||
          (typeof d.UNSAFE_componentWillMount != 'function' &&
            typeof d.componentWillMount != 'function') ||
          ((p = d.state),
          typeof d.componentWillMount == 'function' && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == 'function' && d.UNSAFE_componentWillMount(),
          p !== d.state && Yf.enqueueReplaceState(d, d.state, null),
          Xs(a, u, d, c),
          Ws(),
          (d.state = a.memoizedState)),
        typeof d.componentDidMount == 'function' && (a.flags |= 4194308),
        (u = !0);
    } else if (e === null) {
      d = a.stateNode;
      var _ = a.memoizedProps,
        O = Qr(s, _);
      d.props = O;
      var U = d.context,
        F = s.contextType;
      (p = Di), typeof F == 'object' && F !== null && (p = Gt(F));
      var Q = s.getDerivedStateFromProps;
      (F = typeof Q == 'function' || typeof d.getSnapshotBeforeUpdate == 'function'),
        (_ = a.pendingProps !== _),
        F ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((_ || U !== p) && Wg(a, d, u, p)),
        (Ja = !1);
      var L = a.memoizedState;
      (d.state = L),
        Xs(a, u, d, c),
        Ws(),
        (U = a.memoizedState),
        _ || L !== U || Ja
          ? (typeof Q == 'function' && (qf(a, s, Q, u), (U = a.memoizedState)),
            (O = Ja || Kg(a, s, O, u, L, U, p))
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
            (u = O))
          : (typeof d.componentDidMount == 'function' && (a.flags |= 4194308), (u = !1));
    } else {
      (d = a.stateNode),
        _f(e, a),
        (p = a.memoizedProps),
        (F = Qr(s, p)),
        (d.props = F),
        (Q = a.pendingProps),
        (L = d.context),
        (U = s.contextType),
        (O = Di),
        typeof U == 'object' && U !== null && (O = Gt(U)),
        (_ = s.getDerivedStateFromProps),
        (U = typeof _ == 'function' || typeof d.getSnapshotBeforeUpdate == 'function') ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((p !== Q || L !== O) && Wg(a, d, u, O)),
        (Ja = !1),
        (L = a.memoizedState),
        (d.state = L),
        Xs(a, u, d, c),
        Ws();
      var H = a.memoizedState;
      p !== Q || L !== H || Ja || (e !== null && e.dependencies !== null && Bu(e.dependencies))
        ? (typeof _ == 'function' && (qf(a, s, _, u), (H = a.memoizedState)),
          (F =
            Ja ||
            Kg(a, s, F, u, L, H, O) ||
            (e !== null && e.dependencies !== null && Bu(e.dependencies)))
            ? (U ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' && d.componentWillUpdate(u, H, O),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(u, H, O)),
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
          (d.context = O),
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
      ao(e, a),
      (u = (a.flags & 128) !== 0),
      d || u
        ? ((d = a.stateNode),
          (s = u && typeof s.getDerivedStateFromError != 'function' ? null : d.render()),
          (a.flags |= 1),
          e !== null && u
            ? ((a.child = Vi(a, e.child, null, c)), (a.child = Vi(a, null, s, c)))
            : Lt(e, a, s, c),
          (a.memoizedState = d.state),
          (e = a.child))
        : (e = Oa(e, a, c)),
      e
    );
  }
  function fy(e, a, s, u) {
    return Ys(), (a.flags |= 256), Lt(e, a, s, u), a.child;
  }
  var Pf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Gf(e) {
    return { baseLanes: e, cachePool: Im() };
  }
  function $f(e, a, s) {
    return (e = e !== null ? e.childLanes & ~s : 0), a && (e |= kn), e;
  }
  function dy(e, a, s) {
    var u = a.pendingProps,
      c = !1,
      d = (a.flags & 128) !== 0,
      p;
    if (
      ((p = d) || (p = e !== null && e.memoizedState === null ? !1 : (Nt.current & 2) !== 0),
      p && ((c = !0), (a.flags &= -129)),
      (p = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (Xe) {
        if ((c ? ar(a) : rr(), Xe)) {
          var _ = yt,
            O;
          if ((O = _)) {
            e: {
              for (O = _, _ = In; O.nodeType !== 8; ) {
                if (!_) {
                  _ = null;
                  break e;
                }
                if (((O = Ln(O.nextSibling)), O === null)) {
                  _ = null;
                  break e;
                }
              }
              _ = O;
            }
            _ !== null
              ? ((a.memoizedState = {
                  dehydrated: _,
                  treeContext: Vr !== null ? { id: ba, overflow: _a } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (O = hn(18, null, null, 0)),
                (O.stateNode = _),
                (O.return = a),
                (a.child = O),
                (It = a),
                (yt = null),
                (O = !0))
              : (O = !1);
          }
          O || Zr(a);
        }
        if (((_ = a.memoizedState), _ !== null && ((_ = _.dehydrated), _ !== null)))
          return Dd(_) ? (a.lanes = 32) : (a.lanes = 536870912), null;
        Ea(a);
      }
      return (
        (_ = u.children),
        (u = u.fallback),
        c
          ? (rr(),
            (c = a.mode),
            (_ = ro({ mode: 'hidden', children: _ }, c)),
            (u = Hr(u, c, s, null)),
            (_.return = a),
            (u.return = a),
            (_.sibling = u),
            (a.child = _),
            (c = a.child),
            (c.memoizedState = Gf(s)),
            (c.childLanes = $f(e, p, s)),
            (a.memoizedState = Pf),
            u)
          : (ar(a), Qf(a, _))
      );
    }
    if (((O = e.memoizedState), O !== null && ((_ = O.dehydrated), _ !== null))) {
      if (d)
        a.flags & 256
          ? (ar(a), (a.flags &= -257), (a = Kf(e, a, s)))
          : a.memoizedState !== null
            ? (rr(), (a.child = e.child), (a.flags |= 128), (a = null))
            : (rr(),
              (c = u.fallback),
              (_ = a.mode),
              (u = ro({ mode: 'visible', children: u.children }, _)),
              (c = Hr(c, _, s, null)),
              (c.flags |= 2),
              (u.return = a),
              (c.return = a),
              (u.sibling = c),
              (a.child = u),
              Vi(a, e.child, null, s),
              (u = a.child),
              (u.memoizedState = Gf(s)),
              (u.childLanes = $f(e, p, s)),
              (a.memoizedState = Pf),
              (a = c));
      else if ((ar(a), Dd(_))) {
        if (((p = _.nextSibling && _.nextSibling.dataset), p)) var U = p.dgst;
        (p = U),
          (u = Error(i(419))),
          (u.stack = ''),
          (u.digest = p),
          Zs({ value: u, source: null, stack: null }),
          (a = Kf(e, a, s));
      } else if ((jt || Fs(e, a, s, !1), (p = (s & e.childLanes) !== 0), jt || p)) {
        if (
          ((p = ot),
          p !== null &&
            ((u = s & -s),
            (u = (u & 42) !== 0 ? 1 : jr(u)),
            (u = (u & (p.suspendedLanes | s)) !== 0 ? 0 : u),
            u !== 0 && u !== O.retryLane))
        )
          throw ((O.retryLane = u), Ni(e, u), vn(p, e, u), ay);
        _.data === '$?' || hd(), (a = Kf(e, a, s));
      } else
        _.data === '$?'
          ? ((a.flags |= 192), (a.child = e.child), (a = null))
          : ((e = O.treeContext),
            (yt = Ln(_.nextSibling)),
            (It = a),
            (Xe = !0),
            (Yr = null),
            (In = !1),
            e !== null &&
              ((Nn[Dn++] = ba),
              (Nn[Dn++] = _a),
              (Nn[Dn++] = Vr),
              (ba = e.id),
              (_a = e.overflow),
              (Vr = a)),
            (a = Qf(a, u.children)),
            (a.flags |= 4096));
      return a;
    }
    return c
      ? (rr(),
        (c = u.fallback),
        (_ = a.mode),
        (O = e.child),
        (U = O.sibling),
        (u = va(O, { mode: 'hidden', children: u.children })),
        (u.subtreeFlags = O.subtreeFlags & 65011712),
        U !== null ? (c = va(U, c)) : ((c = Hr(c, _, s, null)), (c.flags |= 2)),
        (c.return = a),
        (u.return = a),
        (u.sibling = c),
        (a.child = u),
        (u = c),
        (c = a.child),
        (_ = e.child.memoizedState),
        _ === null
          ? (_ = Gf(s))
          : ((O = _.cachePool),
            O !== null
              ? ((U = Mt._currentValue), (O = O.parent !== U ? { parent: U, pool: U } : O))
              : (O = Im()),
            (_ = { baseLanes: _.baseLanes | s, cachePool: O })),
        (c.memoizedState = _),
        (c.childLanes = $f(e, p, s)),
        (a.memoizedState = Pf),
        u)
      : (ar(a),
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
  function Qf(e, a) {
    return (a = ro({ mode: 'visible', children: a }, e.mode)), (a.return = e), (e.child = a);
  }
  function ro(e, a) {
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
  function Kf(e, a, s) {
    return (
      Vi(a, e.child, null, s),
      (e = Qf(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function hy(e, a, s) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a), hf(e.return, a, s);
  }
  function Wf(e, a, s, u, c) {
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
  function my(e, a, s) {
    var u = a.pendingProps,
      c = u.revealOrder,
      d = u.tail;
    if ((Lt(e, a, u.children, s), (u = Nt.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (a.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = a.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && hy(e, s, a);
          else if (e.tag === 19) hy(e, s, a);
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
    switch ((re(Nt, u), c)) {
      case 'forwards':
        for (s = a.child, c = null; s !== null; )
          (e = s.alternate), e !== null && eo(e) === null && (c = s), (s = s.sibling);
        (s = c),
          s === null ? ((c = a.child), (a.child = null)) : ((c = s.sibling), (s.sibling = null)),
          Wf(a, !1, c, s, d);
        break;
      case 'backwards':
        for (s = null, c = a.child, a.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && eo(e) === null)) {
            a.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = s), (s = c), (c = e);
        }
        Wf(a, !0, s, null, d);
        break;
      case 'together':
        Wf(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Oa(e, a, s) {
    if (
      (e !== null && (a.dependencies = e.dependencies), (or |= a.lanes), (s & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((Fs(e, a, s, !1), (s & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(i(153));
    if (a.child !== null) {
      for (e = a.child, s = va(e, e.pendingProps), a.child = s, s.return = a; e.sibling !== null; )
        (e = e.sibling), (s = s.sibling = va(e, e.pendingProps)), (s.return = a);
      s.sibling = null;
    }
    return a.child;
  }
  function Xf(e, a) {
    return (e.lanes & a) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Bu(e)));
  }
  function S_(e, a, s) {
    switch (a.tag) {
      case 3:
        at(a, a.stateNode.containerInfo), Ia(a, Mt, e.memoizedState.cache), Ys();
        break;
      case 27:
      case 5:
        $a(a);
        break;
      case 4:
        at(a, a.stateNode.containerInfo);
        break;
      case 10:
        Ia(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ar(a), (a.flags |= 128), null)
            : (s & a.child.childLanes) !== 0
              ? dy(e, a, s)
              : (ar(a), (e = Oa(e, a, s)), e !== null ? e.sibling : null);
        ar(a);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((u = (s & a.childLanes) !== 0),
          u || (Fs(e, a, s, !1), (u = (s & a.childLanes) !== 0)),
          c)
        ) {
          if (u) return my(e, a, s);
          a.flags |= 128;
        }
        if (
          ((c = a.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          re(Nt, Nt.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), ly(e, a, s);
      case 24:
        Ia(a, Mt, e.memoizedState.cache);
    }
    return Oa(e, a, s);
  }
  function gy(e, a, s) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps) jt = !0;
      else {
        if (!Xf(e, s) && (a.flags & 128) === 0) return (jt = !1), S_(e, a, s);
        jt = (e.flags & 131072) !== 0;
      }
    else (jt = !1), Xe && (a.flags & 1048576) !== 0 && Pm(a, Lu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          e = a.pendingProps;
          var u = a.elementType,
            c = u._init;
          if (((u = c(u._payload)), (a.type = u), typeof u == 'function'))
            sf(u)
              ? ((e = Qr(u, e)), (a.tag = 1), (a = cy(null, a, u, e, s)))
              : ((a.tag = 0), (a = Ff(null, a, u, e, s)));
          else {
            if (u != null) {
              if (((c = u.$$typeof), c === Y)) {
                (a.tag = 11), (a = ry(null, a, u, e, s));
                break e;
              } else if (c === W) {
                (a.tag = 14), (a = iy(null, a, u, e, s));
                break e;
              }
            }
            throw ((a = Re(u) || u), Error(i(306, a, '')));
          }
        }
        return a;
      case 0:
        return Ff(e, a, a.type, a.pendingProps, s);
      case 1:
        return (u = a.type), (c = Qr(u, a.pendingProps)), cy(e, a, u, c, s);
      case 3:
        e: {
          if ((at(a, a.stateNode.containerInfo), e === null)) throw Error(i(387));
          u = a.pendingProps;
          var d = a.memoizedState;
          (c = d.element), _f(e, a), Xs(a, u, null, s);
          var p = a.memoizedState;
          if (
            ((u = p.cache),
            Ia(a, Mt, u),
            u !== d.cache && mf(a, [Mt], s, !0),
            Ws(),
            (u = p.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: u, isDehydrated: !1, cache: p.cache }),
              (a.updateQueue.baseState = d),
              (a.memoizedState = d),
              a.flags & 256)
            ) {
              a = fy(e, a, u, s);
              break e;
            } else if (u !== c) {
              (c = Cn(Error(i(424)), a)), Zs(c), (a = fy(e, a, u, s));
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
                yt = Ln(e.firstChild),
                  It = a,
                  Xe = !0,
                  Yr = null,
                  In = !0,
                  s = $g(a, null, u, s),
                  a.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((Ys(), u === c)) {
              a = Oa(e, a, s);
              break e;
            }
            Lt(e, a, u, s);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          ao(e, a),
          e === null
            ? (s = bp(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = s)
              : Xe ||
                ((s = a.type),
                (e = a.pendingProps),
                (u = bo(we.current).createElement(s)),
                (u[Pt] = a),
                (u[sn] = e),
                Ht(u, s, e),
                Rt(u),
                (a.stateNode = u))
            : (a.memoizedState = bp(a.type, e.memoizedProps, a.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          $a(a),
          e === null &&
            Xe &&
            ((u = a.stateNode = yp(a.type, a.pendingProps, we.current)),
            (It = a),
            (In = !0),
            (c = yt),
            hr(a.type) ? ((Ad = c), (yt = Ln(u.firstChild))) : (yt = c)),
          Lt(e, a, a.pendingProps.children, s),
          ao(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            Xe &&
            ((c = u = yt) &&
              ((u = K_(u, a.type, a.pendingProps, In)),
              u !== null
                ? ((a.stateNode = u), (It = a), (yt = Ln(u.firstChild)), (In = !1), (c = !0))
                : (c = !1)),
            c || Zr(a)),
          $a(a),
          (c = a.type),
          (d = a.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (u = d.children),
          Cd(c, d) ? (u = null) : p !== null && Cd(c, p) && (a.flags |= 32),
          a.memoizedState !== null && ((c = Tf(e, a, h_, null, null, s)), (bl._currentValue = c)),
          ao(e, a),
          Lt(e, a, u, s),
          a.child
        );
      case 6:
        return (
          e === null &&
            Xe &&
            ((e = s = yt) &&
              ((s = W_(s, a.pendingProps, In)),
              s !== null ? ((a.stateNode = s), (It = a), (yt = null), (e = !0)) : (e = !1)),
            e || Zr(a)),
          null
        );
      case 13:
        return dy(e, a, s);
      case 4:
        return (
          at(a, a.stateNode.containerInfo),
          (u = a.pendingProps),
          e === null ? (a.child = Vi(a, null, u, s)) : Lt(e, a, u, s),
          a.child
        );
      case 11:
        return ry(e, a, a.type, a.pendingProps, s);
      case 7:
        return Lt(e, a, a.pendingProps, s), a.child;
      case 8:
        return Lt(e, a, a.pendingProps.children, s), a.child;
      case 12:
        return Lt(e, a, a.pendingProps.children, s), a.child;
      case 10:
        return (u = a.pendingProps), Ia(a, a.type, u.value), Lt(e, a, u.children, s), a.child;
      case 9:
        return (
          (c = a.type._context),
          (u = a.pendingProps.children),
          Pr(a),
          (c = Gt(c)),
          (u = u(c)),
          (a.flags |= 1),
          Lt(e, a, u, s),
          a.child
        );
      case 14:
        return iy(e, a, a.type, a.pendingProps, s);
      case 15:
        return sy(e, a, a.type, a.pendingProps, s);
      case 19:
        return my(e, a, s);
      case 31:
        return (
          (u = a.pendingProps),
          (s = a.mode),
          (u = { mode: u.mode, children: u.children }),
          e === null
            ? ((s = ro(u, s)), (s.ref = a.ref), (a.child = s), (s.return = a), (a = s))
            : ((s = va(e.child, u)), (s.ref = a.ref), (a.child = s), (s.return = a), (a = s)),
          a
        );
      case 22:
        return ly(e, a, s);
      case 24:
        return (
          Pr(a),
          (u = Gt(Mt)),
          e === null
            ? ((c = pf()),
              c === null &&
                ((c = ot),
                (d = gf()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= s),
                (c = d)),
              (a.memoizedState = { parent: u, cache: c }),
              bf(a),
              Ia(a, Mt, c))
            : ((e.lanes & s) !== 0 && (_f(e, a), Xs(a, null, null, s), Ws()),
              (c = e.memoizedState),
              (d = a.memoizedState),
              c.parent !== u
                ? ((c = { parent: u, cache: u }),
                  (a.memoizedState = c),
                  a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = c),
                  Ia(a, Mt, u))
                : ((u = d.cache), Ia(a, Mt, u), u !== c.cache && mf(a, [Mt], s, !0))),
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
  function yy(e, a) {
    if (a.type !== 'stylesheet' || (a.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Ep(a))) {
      if (
        ((a = An.current),
        a !== null &&
          ((Pe & 4194048) === Pe
            ? Jn !== null
            : ((Pe & 62914560) !== Pe && (Pe & 536870912) === 0) || a !== Jn))
      )
        throw ((Qs = vf), Jm);
      e.flags |= 8192;
    }
  }
  function io(e, a) {
    a !== null && (e.flags |= 4),
      e.flags & 16384 && ((a = e.tag !== 22 ? fn() : 536870912), (e.lanes |= a), (Fi |= a));
  }
  function rl(e, a) {
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
  function ht(e) {
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
  function x_(e, a, s) {
    var u = a.pendingProps;
    switch ((cf(a), a.tag)) {
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
        return ht(a), null;
      case 1:
        return ht(a), null;
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
            (qs(a)
              ? Ta(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), Qm())),
          ht(a),
          null
        );
      case 26:
        return (
          (s = a.memoizedState),
          e === null
            ? (Ta(a), s !== null ? (ht(a), yy(a, s)) : (ht(a), (a.flags &= -16777217)))
            : s
              ? s !== e.memoizedState
                ? (Ta(a), ht(a), yy(a, s))
                : (ht(a), (a.flags &= -16777217))
              : (e.memoizedProps !== u && Ta(a), ht(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        Xn(a), (s = we.current);
        var c = a.type;
        if (e !== null && a.stateNode != null) e.memoizedProps !== u && Ta(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return ht(a), null;
          }
          (e = ve.current), qs(a) ? Gm(a) : ((e = yp(c, u, s)), (a.stateNode = e), Ta(a));
        }
        return ht(a), null;
      case 5:
        if ((Xn(a), (s = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== u && Ta(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return ht(a), null;
          }
          if (((e = ve.current), qs(a))) Gm(a);
          else {
            switch (((c = bo(we.current)), e)) {
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
            (e[Pt] = a), (e[sn] = u);
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
        return ht(a), (a.flags &= -16777217), null;
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== u && Ta(a);
        else {
          if (typeof u != 'string' && a.stateNode === null) throw Error(i(166));
          if (((e = we.current), qs(a))) {
            if (((e = a.stateNode), (s = a.memoizedProps), (u = null), (c = It), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  u = c.memoizedProps;
              }
            (e[Pt] = a),
              (e = !!(
                e.nodeValue === s ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                op(e.nodeValue, s)
              )),
              e || Zr(a);
          } else (e = bo(e).createTextNode(u)), (e[Pt] = a), (a.stateNode = e);
        }
        return ht(a), null;
      case 13:
        if (
          ((u = a.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = qs(a)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (((c = a.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(i(317));
              c[Pt] = a;
            } else Ys(), (a.flags & 128) === 0 && (a.memoizedState = null), (a.flags |= 4);
            ht(a), (c = !1);
          } else
            (c = Qm()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return a.flags & 256 ? (Ea(a), a) : (Ea(a), null);
        }
        if ((Ea(a), (a.flags & 128) !== 0)) return (a.lanes = s), a;
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
        return s !== e && s && (a.child.flags |= 8192), io(a, a.updateQueue), ht(a), null;
      case 4:
        return rn(), e === null && xd(a.stateNode.containerInfo), ht(a), null;
      case 10:
        return xa(a.type), ht(a), null;
      case 19:
        if ((le(Nt), (c = a.memoizedState), c === null)) return ht(a), null;
        if (((u = (a.flags & 128) !== 0), (d = c.rendering), d === null))
          if (u) rl(c, !1);
          else {
            if (pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null; ) {
                if (((d = eo(e)), d !== null)) {
                  for (
                    a.flags |= 128,
                      rl(c, !1),
                      e = d.updateQueue,
                      a.updateQueue = e,
                      io(a, e),
                      a.subtreeFlags = 0,
                      e = s,
                      s = a.child;
                    s !== null;

                  )
                    Fm(s, e), (s = s.sibling);
                  return re(Nt, (Nt.current & 1) | 2), a.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Zt() > uo &&
              ((a.flags |= 128), (u = !0), rl(c, !1), (a.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = eo(d)), e !== null)) {
              if (
                ((a.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                io(a, e),
                rl(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !d.alternate && !Xe)
              )
                return ht(a), null;
            } else
              2 * Zt() - c.renderingStartTime > uo &&
                s !== 536870912 &&
                ((a.flags |= 128), (u = !0), rl(c, !1), (a.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = a.child), (a.child = d))
            : ((e = c.last), e !== null ? (e.sibling = d) : (a.child = d), (c.last = d));
        }
        return c.tail !== null
          ? ((a = c.tail),
            (c.rendering = a),
            (c.tail = a.sibling),
            (c.renderingStartTime = Zt()),
            (a.sibling = null),
            (e = Nt.current),
            re(Nt, u ? (e & 1) | 2 : e & 1),
            a)
          : (ht(a), null);
      case 22:
      case 23:
        return (
          Ea(a),
          Ef(),
          (u = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== u && (a.flags |= 8192)
            : u && (a.flags |= 8192),
          u
            ? (s & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (ht(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : ht(a),
          (s = a.updateQueue),
          s !== null && io(a, s.retryQueue),
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
          e !== null && le(Gr),
          null
        );
      case 24:
        return (
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          a.memoizedState.cache !== s && (a.flags |= 2048),
          xa(Mt),
          ht(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, a.tag));
  }
  function w_(e, a) {
    switch ((cf(a), a.tag)) {
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
        return Xn(a), null;
      case 13:
        if ((Ea(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)) {
          if (a.alternate === null) throw Error(i(340));
          Ys();
        }
        return (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null;
      case 19:
        return le(Nt), null;
      case 4:
        return rn(), null;
      case 10:
        return xa(a.type), null;
      case 22:
      case 23:
        return (
          Ea(a),
          Ef(),
          e !== null && le(Gr),
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
  function py(e, a) {
    switch ((cf(a), a.tag)) {
      case 3:
        xa(Mt), rn();
        break;
      case 26:
      case 27:
      case 5:
        Xn(a);
        break;
      case 4:
        rn();
        break;
      case 13:
        Ea(a);
        break;
      case 19:
        le(Nt);
        break;
      case 10:
        xa(a.type);
        break;
      case 22:
      case 23:
        Ea(a), Ef(), e !== null && le(Gr);
        break;
      case 24:
        xa(Mt);
    }
  }
  function il(e, a) {
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
  function ir(e, a, s) {
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
              var O = s,
                U = _;
              try {
                U();
              } catch (F) {
                ut(c, O, F);
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
  function vy(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var s = e.stateNode;
      try {
        ig(a, s);
      } catch (u) {
        ut(e, e.return, u);
      }
    }
  }
  function by(e, a, s) {
    (s.props = Qr(e.type, e.memoizedProps)), (s.state = e.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (u) {
      ut(e, a, u);
    }
  }
  function sl(e, a) {
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
  function ea(e, a) {
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
  function _y(e) {
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
  function If(e, a, s) {
    try {
      var u = e.stateNode;
      F_(u, e.type, s, a), (u[sn] = a);
    } catch (c) {
      ut(e, e.return, c);
    }
  }
  function Sy(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && hr(e.type)) || e.tag === 4
    );
  }
  function Jf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sy(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && hr(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ed(e, a, s) {
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
            s != null || a.onclick !== null || (a.onclick = vo));
    else if (
      u !== 4 &&
      (u === 27 && hr(e.type) && ((s = e.stateNode), (a = null)), (e = e.child), e !== null)
    )
      for (ed(e, a, s), e = e.sibling; e !== null; ) ed(e, a, s), (e = e.sibling);
  }
  function so(e, a, s) {
    var u = e.tag;
    if (u === 5 || u === 6) (e = e.stateNode), a ? s.insertBefore(e, a) : s.appendChild(e);
    else if (u !== 4 && (u === 27 && hr(e.type) && (s = e.stateNode), (e = e.child), e !== null))
      for (so(e, a, s), e = e.sibling; e !== null; ) so(e, a, s), (e = e.sibling);
  }
  function xy(e) {
    var a = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var u = e.type, c = a.attributes; c.length; ) a.removeAttributeNode(c[0]);
      Ht(a, u, s), (a[Pt] = e), (a[sn] = s);
    } catch (d) {
      ut(e, e.return, d);
    }
  }
  var Ca = !1,
    St = !1,
    td = !1,
    wy = typeof WeakSet == 'function' ? WeakSet : Set,
    zt = null;
  function E_(e, a) {
    if (((e = e.containerInfo), (Od = Oo), (e = jm(e)), Ic(e))) {
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
              O = -1,
              U = 0,
              F = 0,
              Q = e,
              L = null;
            t: for (;;) {
              for (
                var H;
                Q !== s || (c !== 0 && Q.nodeType !== 3) || (_ = p + c),
                  Q !== d || (u !== 0 && Q.nodeType !== 3) || (O = p + u),
                  Q.nodeType === 3 && (p += Q.nodeValue.length),
                  (H = Q.firstChild) !== null;

              )
                (L = Q), (Q = H);
              for (;;) {
                if (Q === e) break t;
                if (
                  (L === s && ++U === c && (_ = p),
                  L === d && ++F === u && (O = p),
                  (H = Q.nextSibling) !== null)
                )
                  break;
                (Q = L), (L = Q.parentNode);
              }
              Q = H;
            }
            s = _ === -1 || O === -1 ? null : { start: _, end: O };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Td = { focusedElem: e, selectionRange: s }, Oo = !1, zt = a; zt !== null; )
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
                  var De = Qr(s.type, c, s.elementType === s.type);
                  (e = u.getSnapshotBeforeUpdate(De, d)),
                    (u.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Ee) {
                  ut(s, s.return, Ee);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = a.stateNode.containerInfo), (s = e.nodeType), s === 9)) Nd(e);
                else if (s === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Nd(e);
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
  function Ey(e, a, s) {
    var u = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        sr(e, s), u & 4 && il(5, s);
        break;
      case 1:
        if ((sr(e, s), u & 4))
          if (((e = s.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (p) {
              ut(s, s.return, p);
            }
          else {
            var c = Qr(s.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(c, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              ut(s, s.return, p);
            }
          }
        u & 64 && vy(s), u & 512 && sl(s, s.return);
        break;
      case 3:
        if ((sr(e, s), u & 64 && ((e = s.updateQueue), e !== null))) {
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
            ig(e, a);
          } catch (p) {
            ut(s, s.return, p);
          }
        }
        break;
      case 27:
        a === null && u & 4 && xy(s);
      case 26:
      case 5:
        sr(e, s), a === null && u & 4 && _y(s), u & 512 && sl(s, s.return);
        break;
      case 12:
        sr(e, s);
        break;
      case 13:
        sr(e, s),
          u & 4 && Cy(e, s),
          u & 64 &&
            ((e = s.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((s = R_.bind(null, s)), X_(e, s))));
        break;
      case 22:
        if (((u = s.memoizedState !== null || Ca), !u)) {
          (a = (a !== null && a.memoizedState !== null) || St), (c = Ca);
          var d = St;
          (Ca = u),
            (St = a) && !d ? lr(e, s, (s.subtreeFlags & 8772) !== 0) : sr(e, s),
            (Ca = c),
            (St = d);
        }
        break;
      case 30:
        break;
      default:
        sr(e, s);
    }
  }
  function Oy(e) {
    var a = e.alternate;
    a !== null && ((e.alternate = null), Oy(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && Rc(a)),
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
    for (s = s.child; s !== null; ) Ty(e, a, s), (s = s.sibling);
  }
  function Ty(e, a, s) {
    if (X && typeof X.onCommitFiberUnmount == 'function')
      try {
        X.onCommitFiberUnmount(ae, s);
      } catch {}
    switch (s.tag) {
      case 26:
        St || ea(s, a),
          Ma(e, a, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        St || ea(s, a);
        var u = ft,
          c = on;
        hr(s.type) && ((ft = s.stateNode), (on = !1)),
          Ma(e, a, s),
          gl(s.stateNode),
          (ft = u),
          (on = c);
        break;
      case 5:
        St || ea(s, a);
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
              mp(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                s.stateNode
              ),
              wl(e))
            : mp(ft, s.stateNode));
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
        St || ir(2, s, a), St || ir(4, s, a), Ma(e, a, s);
        break;
      case 1:
        St ||
          (ea(s, a), (u = s.stateNode), typeof u.componentWillUnmount == 'function' && by(s, a, u)),
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
  function Cy(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        wl(e);
      } catch (s) {
        ut(a, a.return, s);
      }
  }
  function O_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var a = e.stateNode;
        return a === null && (a = e.stateNode = new wy()), a;
      case 22:
        return (
          (e = e.stateNode), (a = e._retryCache), a === null && (a = e._retryCache = new wy()), a
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function nd(e, a) {
    var s = O_(e);
    a.forEach(function (u) {
      var c = j_.bind(null, e, u);
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
              if (hr(_.type)) {
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
        Ty(d, p, c),
          (ft = null),
          (on = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (a.subtreeFlags & 13878) for (a = a.child; a !== null; ) My(a, e), (a = a.sibling);
  }
  var Un = null;
  function My(e, a) {
    var s = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mn(a, e), gn(e), u & 4 && (ir(3, e, e.return), il(3, e), ir(5, e, e.return));
        break;
      case 1:
        mn(a, e),
          gn(e),
          u & 512 && (St || s === null || ea(s, s.return)),
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
        var c = Un;
        if ((mn(a, e), gn(e), u & 512 && (St || s === null || ea(s, s.return)), u & 4)) {
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
                          d[Ds] ||
                          d[Pt] ||
                          d.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          d.hasAttribute('itemprop')) &&
                          ((d = c.createElement(u)),
                          c.head.insertBefore(d, c.querySelector('head > title'))),
                        Ht(d, u, s),
                        (d[Pt] = e),
                        Rt(d),
                        (u = d);
                      break e;
                    case 'link':
                      var p = xp('link', 'href', c).get(u + (s.href || ''));
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
                      if ((p = xp('meta', 'content', c).get(u + (s.content || '')))) {
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
                  (d[Pt] = e), Rt(d), (u = d);
                }
                e.stateNode = u;
              } else wp(c, e.type, e.stateNode);
            else e.stateNode = Sp(c, u, e.memoizedProps);
          else
            d !== u
              ? (d === null
                  ? s.stateNode !== null && ((s = s.stateNode), s.parentNode.removeChild(s))
                  : d.count--,
                u === null ? wp(c, e.type, e.stateNode) : Sp(c, u, e.memoizedProps))
              : u === null && e.stateNode !== null && If(e, e.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        mn(a, e),
          gn(e),
          u & 512 && (St || s === null || ea(s, s.return)),
          s !== null && u & 4 && If(e, e.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if ((mn(a, e), gn(e), u & 512 && (St || s === null || ea(s, s.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            xi(c, '');
          } catch (H) {
            ut(e, e.return, H);
          }
        }
        u & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), If(e, c, s !== null ? s.memoizedProps : c)),
          u & 1024 && (td = !0);
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
          ((xo = null),
          (c = Un),
          (Un = _o(a.containerInfo)),
          mn(a, e),
          (Un = c),
          gn(e),
          u & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            wl(a.containerInfo);
          } catch (H) {
            ut(e, e.return, H);
          }
        td && ((td = !1), Ny(e));
        break;
      case 4:
        (u = Un), (Un = _o(e.stateNode.containerInfo)), mn(a, e), gn(e), (Un = u);
        break;
      case 12:
        mn(a, e), gn(e);
        break;
      case 13:
        mn(a, e),
          gn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (s !== null && s.memoizedState !== null) &&
            (ud = Zt()),
          u & 4 && ((u = e.updateQueue), u !== null && ((e.updateQueue = null), nd(e, u)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var O = s !== null && s.memoizedState !== null,
          U = Ca,
          F = St;
        if (((Ca = U || c), (St = F || O), mn(a, e), (St = F), (Ca = U), gn(e), u & 8192))
          e: for (
            a = e.stateNode,
              a._visibility = c ? a._visibility & -2 : a._visibility | 1,
              c && (s === null || O || Ca || St || Kr(e)),
              s = null,
              a = e;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (s === null) {
                O = s = a;
                try {
                  if (((d = O.stateNode), c))
                    (p = d.style),
                      typeof p.setProperty == 'function'
                        ? p.setProperty('display', 'none', 'important')
                        : (p.display = 'none');
                  else {
                    _ = O.stateNode;
                    var Q = O.memoizedProps.style,
                      L = Q != null && Q.hasOwnProperty('display') ? Q.display : null;
                    _.style.display = L == null || typeof L == 'boolean' ? '' : ('' + L).trim();
                  }
                } catch (H) {
                  ut(O, O.return, H);
                }
              }
            } else if (a.tag === 6) {
              if (s === null) {
                O = a;
                try {
                  O.stateNode.nodeValue = c ? '' : O.memoizedProps;
                } catch (H) {
                  ut(O, O.return, H);
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
          u !== null && ((s = u.retryQueue), s !== null && ((u.retryQueue = null), nd(e, s))));
        break;
      case 19:
        mn(a, e),
          gn(e),
          u & 4 && ((u = e.updateQueue), u !== null && ((e.updateQueue = null), nd(e, u)));
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
          if (Sy(u)) {
            s = u;
            break;
          }
          u = u.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var c = s.stateNode,
              d = Jf(e);
            so(e, d, c);
            break;
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (xi(p, ''), (s.flags &= -33));
            var _ = Jf(e);
            so(e, _, p);
            break;
          case 3:
          case 4:
            var O = s.stateNode.containerInfo,
              U = Jf(e);
            ed(e, U, O);
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
  function Ny(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        Ny(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), (e = e.sibling);
      }
  }
  function sr(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) Ey(e, a.alternate, a), (a = a.sibling);
  }
  function Kr(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ir(4, a, a.return), Kr(a);
          break;
        case 1:
          ea(a, a.return);
          var s = a.stateNode;
          typeof s.componentWillUnmount == 'function' && by(a, a.return, s), Kr(a);
          break;
        case 27:
          gl(a.stateNode);
        case 26:
        case 5:
          ea(a, a.return), Kr(a);
          break;
        case 22:
          a.memoizedState === null && Kr(a);
          break;
        case 30:
          Kr(a);
          break;
        default:
          Kr(a);
      }
      e = e.sibling;
    }
  }
  function lr(e, a, s) {
    for (s = s && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate,
        c = e,
        d = a,
        p = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          lr(c, d, s), il(4, d);
          break;
        case 1:
          if ((lr(c, d, s), (u = d), (c = u.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (U) {
              ut(u, u.return, U);
            }
          if (((u = d), (c = u.updateQueue), c !== null)) {
            var _ = u.stateNode;
            try {
              var O = c.shared.hiddenCallbacks;
              if (O !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < O.length; c++) rg(O[c], _);
            } catch (U) {
              ut(u, u.return, U);
            }
          }
          s && p & 64 && vy(d), sl(d, d.return);
          break;
        case 27:
          xy(d);
        case 26:
        case 5:
          lr(c, d, s), s && u === null && p & 4 && _y(d), sl(d, d.return);
          break;
        case 12:
          lr(c, d, s);
          break;
        case 13:
          lr(c, d, s), s && p & 4 && Cy(c, d);
          break;
        case 22:
          d.memoizedState === null && lr(c, d, s), sl(d, d.return);
          break;
        case 30:
          break;
        default:
          lr(c, d, s);
      }
      a = a.sibling;
    }
  }
  function ad(e, a) {
    var s = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (s = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== s && (e != null && e.refCount++, s != null && Ps(s));
  }
  function rd(e, a) {
    (e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && Ps(e));
  }
  function ta(e, a, s, u) {
    if (a.subtreeFlags & 10256) for (a = a.child; a !== null; ) Dy(e, a, s, u), (a = a.sibling);
  }
  function Dy(e, a, s, u) {
    var c = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ta(e, a, s, u), c & 2048 && il(9, a);
        break;
      case 1:
        ta(e, a, s, u);
        break;
      case 3:
        ta(e, a, s, u),
          c & 2048 &&
            ((e = null),
            a.alternate !== null && (e = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== e && (a.refCount++, e != null && Ps(e)));
        break;
      case 12:
        if (c & 2048) {
          ta(e, a, s, u), (e = a.stateNode);
          try {
            var d = a.memoizedProps,
              p = d.id,
              _ = d.onPostCommit;
            typeof _ == 'function' &&
              _(p, a.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (O) {
            ut(a, a.return, O);
          }
        } else ta(e, a, s, u);
        break;
      case 13:
        ta(e, a, s, u);
        break;
      case 23:
        break;
      case 22:
        (d = a.stateNode),
          (p = a.alternate),
          a.memoizedState !== null
            ? d._visibility & 2
              ? ta(e, a, s, u)
              : ll(e, a)
            : d._visibility & 2
              ? ta(e, a, s, u)
              : ((d._visibility |= 2), qi(e, a, s, u, (a.subtreeFlags & 10256) !== 0)),
          c & 2048 && ad(p, a);
        break;
      case 24:
        ta(e, a, s, u), c & 2048 && rd(a.alternate, a);
        break;
      default:
        ta(e, a, s, u);
    }
  }
  function qi(e, a, s, u, c) {
    for (c = c && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var d = e,
        p = a,
        _ = s,
        O = u,
        U = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          qi(d, p, _, O, c), il(8, p);
          break;
        case 23:
          break;
        case 22:
          var F = p.stateNode;
          p.memoizedState !== null
            ? F._visibility & 2
              ? qi(d, p, _, O, c)
              : ll(d, p)
            : ((F._visibility |= 2), qi(d, p, _, O, c)),
            c && U & 2048 && ad(p.alternate, p);
          break;
        case 24:
          qi(d, p, _, O, c), c && U & 2048 && rd(p.alternate, p);
          break;
        default:
          qi(d, p, _, O, c);
      }
      a = a.sibling;
    }
  }
  function ll(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var s = e,
          u = a,
          c = u.flags;
        switch (u.tag) {
          case 22:
            ll(s, u), c & 2048 && ad(u.alternate, u);
            break;
          case 24:
            ll(s, u), c & 2048 && rd(u.alternate, u);
            break;
          default:
            ll(s, u);
        }
        a = a.sibling;
      }
  }
  var ul = 8192;
  function Yi(e) {
    if (e.subtreeFlags & ul) for (e = e.child; e !== null; ) Ay(e), (e = e.sibling);
  }
  function Ay(e) {
    switch (e.tag) {
      case 26:
        Yi(e), e.flags & ul && e.memoizedState !== null && cS(Un, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Yi(e);
        break;
      case 3:
      case 4:
        var a = Un;
        (Un = _o(e.stateNode.containerInfo)), Yi(e), (Un = a);
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ul), (ul = 16777216), Yi(e), (ul = a))
            : Yi(e));
        break;
      default:
        Yi(e);
    }
  }
  function ky(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do (a = e.sibling), (e.sibling = null), (e = a);
      while (e !== null);
    }
  }
  function ol(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          (zt = u), jy(u, e);
        }
      ky(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ry(e), (e = e.sibling);
  }
  function Ry(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ol(e), e.flags & 2048 && ir(9, e, e.return);
        break;
      case 3:
        ol(e);
        break;
      case 12:
        ol(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), lo(e))
          : ol(e);
        break;
      default:
        ol(e);
    }
  }
  function lo(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          (zt = u), jy(u, e);
        }
      ky(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          ir(8, a, a.return), lo(a);
          break;
        case 22:
          (s = a.stateNode), s._visibility & 2 && ((s._visibility &= -3), lo(a));
          break;
        default:
          lo(a);
      }
      e = e.sibling;
    }
  }
  function jy(e, a) {
    for (; zt !== null; ) {
      var s = zt;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ir(8, s, a);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var u = s.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Ps(s.memoizedState.cache);
      }
      if (((u = s.child), u !== null)) (u.return = s), (zt = u);
      else
        e: for (s = e; zt !== null; ) {
          u = zt;
          var c = u.sibling,
            d = u.return;
          if ((Oy(u), u === s)) {
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
  var T_ = {
      getCacheForType: function (e) {
        var a = Gt(Mt),
          s = a.data.get(e);
        return s === void 0 && ((s = e()), a.data.set(e, s)), s;
      },
    },
    C_ = typeof WeakMap == 'function' ? WeakMap : Map,
    et = 0,
    ot = null,
    Ye = null,
    Pe = 0,
    tt = 0,
    yn = null,
    ur = !1,
    Zi = !1,
    id = !1,
    Na = 0,
    pt = 0,
    or = 0,
    Wr = 0,
    sd = 0,
    kn = 0,
    Fi = 0,
    cl = null,
    cn = null,
    ld = !1,
    ud = 0,
    uo = 1 / 0,
    oo = null,
    cr = null,
    Bt = 0,
    fr = null,
    Pi = null,
    Gi = 0,
    od = 0,
    cd = null,
    zy = null,
    fl = 0,
    fd = null;
  function pn() {
    if ((et & 2) !== 0 && Pe !== 0) return Pe & -Pe;
    if (V.T !== null) {
      var e = Ri;
      return e !== 0 ? e : vd();
    }
    return Xh();
  }
  function Uy() {
    kn === 0 && (kn = (Pe & 536870912) === 0 || Xe ? Ct() : 536870912);
    var e = An.current;
    return e !== null && (e.flags |= 32), kn;
  }
  function vn(e, a, s) {
    ((e === ot && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null) &&
      ($i(e, 0), dr(e, Pe, kn, !1)),
      Rr(e, s),
      ((et & 2) === 0 || e !== ot) &&
        (e === ot && ((et & 2) === 0 && (Wr |= s), pt === 4 && dr(e, Pe, kn, !1)), na(e));
  }
  function Ly(e, a, s) {
    if ((et & 6) !== 0) throw Error(i(327));
    var u = (!s && (a & 124) === 0 && (a & e.expiredLanes) === 0) || Tt(e, a),
      c = u ? D_(e, a) : md(e, a, !0),
      d = u;
    do {
      if (c === 0) {
        Zi && !u && dr(e, a, 0, !1);
        break;
      } else {
        if (((s = e.current.alternate), d && !M_(s))) {
          (c = md(e, a, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = a), e.errorRecoveryDisabledLanes & d)) var p = 0;
          else (p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            a = p;
            e: {
              var _ = e;
              c = cl;
              var O = _.current.memoizedState.isDehydrated;
              if ((O && ($i(_, p).flags |= 256), (p = md(_, p, !1)), p !== 2)) {
                if (id && !O) {
                  (_.errorRecoveryDisabledLanes |= d), (Wr |= d), (c = 4);
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
          $i(e, 0), dr(e, a, 0, !0);
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
              dr(u, a, kn, !ur);
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
          if ((a & 62914560) === a && ((c = ud + 300 - Zt()), 10 < c)) {
            if ((dr(u, a, kn, !ur), Ft(u, 0, !0) !== 0)) break e;
            u.timeoutHandle = dp(
              By.bind(null, u, s, cn, oo, ld, a, kn, Wr, Fi, ur, d, 2, -0, 0),
              c
            );
            break e;
          }
          By(u, s, cn, oo, ld, a, kn, Wr, Fi, ur, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    na(e);
  }
  function By(e, a, s, u, c, d, p, _, O, U, F, Q, L, H) {
    if (
      ((e.timeoutHandle = -1),
      (Q = a.subtreeFlags),
      (Q & 8192 || (Q & 16785408) === 16785408) &&
        ((vl = { stylesheets: null, count: 0, unsuspend: oS }), Ay(a), (Q = fS()), Q !== null))
    ) {
      (e.cancelPendingCommit = Q(Py.bind(null, e, a, d, s, u, c, p, _, O, F, 1, L, H))),
        dr(e, d, p, !U);
      return;
    }
    Py(e, a, d, s, u, c, p, _, O);
  }
  function M_(e) {
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
  function dr(e, a, s, u) {
    (a &= ~sd),
      (a &= ~Wr),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      u && (e.warmLanes |= a),
      (u = e.expirationTimes);
    for (var c = a; 0 < c; ) {
      var d = 31 - Ne(c),
        p = 1 << d;
      (u[d] = -1), (c &= ~p);
    }
    s !== 0 && _u(e, s, a);
  }
  function co() {
    return (et & 6) === 0 ? (dl(0), !1) : !0;
  }
  function dd() {
    if (Ye !== null) {
      if (tt === 0) var e = Ye.return;
      else (e = Ye), (Sa = Fr = null), Nf(e), (Hi = null), (nl = 0), (e = Ye);
      for (; e !== null; ) py(e.alternate, e), (e = e.return);
      Ye = null;
    }
  }
  function $i(e, a) {
    var s = e.timeoutHandle;
    s !== -1 && ((e.timeoutHandle = -1), G_(s)),
      (s = e.cancelPendingCommit),
      s !== null && ((e.cancelPendingCommit = null), s()),
      dd(),
      (ot = e),
      (Ye = s = va(e.current, null)),
      (Pe = a),
      (tt = 0),
      (yn = null),
      (ur = !1),
      (Zi = Tt(e, a)),
      (id = !1),
      (Fi = kn = sd = Wr = or = pt = 0),
      (cn = cl = null),
      (ld = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= a; 0 < u; ) {
        var c = 31 - Ne(u),
          d = 1 << c;
        (a |= e[c]), (u &= ~d);
      }
    return (Na = a), ku(), s;
  }
  function Hy(e, a) {
    (He = null),
      (V.H = Xu),
      a === $s || a === qu
        ? ((a = ng()), (tt = 3))
        : a === Jm
          ? ((a = ng()), (tt = 4))
          : (tt =
              a === ay
                ? 8
                : a !== null && typeof a == 'object' && typeof a.then == 'function'
                  ? 6
                  : 1),
      (yn = a),
      Ye === null && ((pt = 1), no(e, Cn(a, e.current)));
  }
  function Vy() {
    var e = V.H;
    return (V.H = Xu), e === null ? Xu : e;
  }
  function qy() {
    var e = V.A;
    return (V.A = T_), e;
  }
  function hd() {
    (pt = 4),
      ur || ((Pe & 4194048) !== Pe && An.current !== null) || (Zi = !0),
      ((or & 134217727) === 0 && (Wr & 134217727) === 0) || ot === null || dr(ot, Pe, kn, !1);
  }
  function md(e, a, s) {
    var u = et;
    et |= 2;
    var c = Vy(),
      d = qy();
    (ot !== e || Pe !== a) && ((oo = null), $i(e, a)), (a = !1);
    var p = pt;
    e: do
      try {
        if (tt !== 0 && Ye !== null) {
          var _ = Ye,
            O = yn;
          switch (tt) {
            case 8:
              dd(), (p = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              An.current === null && (a = !0);
              var U = tt;
              if (((tt = 0), (yn = null), Qi(e, _, O, U), s && Zi)) {
                p = 0;
                break e;
              }
              break;
            default:
              (U = tt), (tt = 0), (yn = null), Qi(e, _, O, U);
          }
        }
        N_(), (p = pt);
        break;
      } catch (F) {
        Hy(e, F);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (Sa = Fr = null),
      (et = u),
      (V.H = c),
      (V.A = d),
      Ye === null && ((ot = null), (Pe = 0), ku()),
      p
    );
  }
  function N_() {
    for (; Ye !== null; ) Yy(Ye);
  }
  function D_(e, a) {
    var s = et;
    et |= 2;
    var u = Vy(),
      c = qy();
    ot !== e || Pe !== a ? ((oo = null), (uo = Zt() + 500), $i(e, a)) : (Zi = Tt(e, a));
    e: do
      try {
        if (tt !== 0 && Ye !== null) {
          a = Ye;
          var d = yn;
          t: switch (tt) {
            case 1:
              (tt = 0), (yn = null), Qi(e, a, d, 1);
              break;
            case 2:
            case 9:
              if (eg(d)) {
                (tt = 0), (yn = null), Zy(a);
                break;
              }
              (a = function () {
                (tt !== 2 && tt !== 9) || ot !== e || (tt = 7), na(e);
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
              eg(d) ? ((tt = 0), (yn = null), Zy(a)) : ((tt = 0), (yn = null), Qi(e, a, d, 7));
              break;
            case 5:
              var p = null;
              switch (Ye.tag) {
                case 26:
                  p = Ye.memoizedState;
                case 5:
                case 27:
                  var _ = Ye;
                  if (!p || Ep(p)) {
                    (tt = 0), (yn = null);
                    var O = _.sibling;
                    if (O !== null) Ye = O;
                    else {
                      var U = _.return;
                      U !== null ? ((Ye = U), fo(U)) : (Ye = null);
                    }
                    break t;
                  }
              }
              (tt = 0), (yn = null), Qi(e, a, d, 5);
              break;
            case 6:
              (tt = 0), (yn = null), Qi(e, a, d, 6);
              break;
            case 8:
              dd(), (pt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        A_();
        break;
      } catch (F) {
        Hy(e, F);
      }
    while (!0);
    return (
      (Sa = Fr = null),
      (V.H = u),
      (V.A = c),
      (et = s),
      Ye !== null ? 0 : ((ot = null), (Pe = 0), ku(), pt)
    );
  }
  function A_() {
    for (; Ye !== null && !Ts(); ) Yy(Ye);
  }
  function Yy(e) {
    var a = gy(e.alternate, e, Na);
    (e.memoizedProps = e.pendingProps), a === null ? fo(e) : (Ye = a);
  }
  function Zy(e) {
    var a = e,
      s = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = oy(s, a, a.pendingProps, a.type, void 0, Pe);
        break;
      case 11:
        a = oy(s, a, a.pendingProps, a.type.render, a.ref, Pe);
        break;
      case 5:
        Nf(a);
      default:
        py(s, a), (a = Ye = Fm(a, Na)), (a = gy(s, a, Na));
    }
    (e.memoizedProps = e.pendingProps), a === null ? fo(e) : (Ye = a);
  }
  function Qi(e, a, s, u) {
    (Sa = Fr = null), Nf(a), (Hi = null), (nl = 0);
    var c = a.return;
    try {
      if (__(e, c, a, s, Pe)) {
        (pt = 1), no(e, Cn(s, e.current)), (Ye = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((Ye = c), d);
      (pt = 1), no(e, Cn(s, e.current)), (Ye = null);
      return;
    }
    a.flags & 32768
      ? (Xe || u === 1
          ? (e = !0)
          : Zi || (Pe & 536870912) !== 0
            ? (e = !1)
            : ((ur = e = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = An.current), u !== null && u.tag === 13 && (u.flags |= 16384))),
        Fy(a, e))
      : fo(a);
  }
  function fo(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        Fy(a, ur);
        return;
      }
      e = a.return;
      var s = x_(a.alternate, a, Na);
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
  function Fy(e, a) {
    do {
      var s = w_(e.alternate, e);
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
  function Py(e, a, s, u, c, d, p, _, O) {
    e.cancelPendingCommit = null;
    do ho();
    while (Bt !== 0);
    if ((et & 6) !== 0) throw Error(i(327));
    if (a !== null) {
      if (a === e.current) throw Error(i(177));
      if (
        ((d = a.lanes | a.childLanes),
        (d |= af),
        Dc(e, s, d, p, _, O),
        e === ot && ((Ye = ot = null), (Pe = 0)),
        (Pi = a),
        (fr = e),
        (Gi = s),
        (od = d),
        (cd = c),
        (zy = u),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            z_(ma, function () {
              return Wy(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (u = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = V.T), (V.T = null), (c = I.p), (I.p = 2), (p = et), (et |= 4);
        try {
          E_(e, a, s);
        } finally {
          (et = p), (I.p = c), (V.T = u);
        }
      }
      (Bt = 1), Gy(), $y(), Qy();
    }
  }
  function Gy() {
    if (Bt === 1) {
      Bt = 0;
      var e = fr,
        a = Pi,
        s = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || s) {
        (s = V.T), (V.T = null);
        var u = I.p;
        I.p = 2;
        var c = et;
        et |= 4;
        try {
          My(a, e);
          var d = Td,
            p = jm(e.containerInfo),
            _ = d.focusedElem,
            O = d.selectionRange;
          if (p !== _ && _ && _.ownerDocument && Rm(_.ownerDocument.documentElement, _)) {
            if (O !== null && Ic(_)) {
              var U = O.start,
                F = O.end;
              if ((F === void 0 && (F = U), 'selectionStart' in _))
                (_.selectionStart = U), (_.selectionEnd = Math.min(F, _.value.length));
              else {
                var Q = _.ownerDocument || document,
                  L = (Q && Q.defaultView) || window;
                if (L.getSelection) {
                  var H = L.getSelection(),
                    De = _.textContent.length,
                    Ee = Math.min(O.start, De),
                    st = O.end === void 0 ? Ee : Math.min(O.end, De);
                  !H.extend && Ee > st && ((p = st), (st = Ee), (Ee = p));
                  var j = km(_, Ee),
                    A = km(_, st);
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
                      Ee > st
                        ? (H.addRange(z), H.extend(A.node, A.offset))
                        : (z.setEnd(A.node, A.offset), H.addRange(z));
                  }
                }
              }
            }
            for (Q = [], H = _; (H = H.parentNode); )
              H.nodeType === 1 && Q.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (typeof _.focus == 'function' && _.focus(), _ = 0; _ < Q.length; _++) {
              var G = Q[_];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          (Oo = !!Od), (Td = Od = null);
        } finally {
          (et = c), (I.p = u), (V.T = s);
        }
      }
      (e.current = a), (Bt = 2);
    }
  }
  function $y() {
    if (Bt === 2) {
      Bt = 0;
      var e = fr,
        a = Pi,
        s = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || s) {
        (s = V.T), (V.T = null);
        var u = I.p;
        I.p = 2;
        var c = et;
        et |= 4;
        try {
          Ey(e, a.alternate, a);
        } finally {
          (et = c), (I.p = u), (V.T = s);
        }
      }
      Bt = 3;
    }
  }
  function Qy() {
    if (Bt === 4 || Bt === 3) {
      (Bt = 0), di();
      var e = fr,
        a = Pi,
        s = Gi,
        u = zy;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Bt = 5)
        : ((Bt = 0), (Pi = fr = null), Ky(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (cr = null),
        Ac(s),
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
      (Gi & 3) !== 0 && ho(),
        na(e),
        (c = e.pendingLanes),
        (s & 4194090) !== 0 && (c & 42) !== 0 ? (e === fd ? fl++ : ((fl = 0), (fd = e))) : (fl = 0),
        dl(0);
    }
  }
  function Ky(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), Ps(a)));
  }
  function ho(e) {
    return Gy(), $y(), Qy(), Wy();
  }
  function Wy() {
    if (Bt !== 5) return !1;
    var e = fr,
      a = od;
    od = 0;
    var s = Ac(Gi),
      u = V.T,
      c = I.p;
    try {
      (I.p = 32 > s ? 32 : s), (V.T = null), (s = cd), (cd = null);
      var d = fr,
        p = Gi;
      if (((Bt = 0), (Pi = fr = null), (Gi = 0), (et & 6) !== 0)) throw Error(i(331));
      var _ = et;
      if (
        ((et |= 4),
        Ry(d.current),
        Dy(d, d.current, p, s),
        (et = _),
        dl(0, !1),
        X && typeof X.onPostCommitFiberRoot == 'function')
      )
        try {
          X.onPostCommitFiberRoot(ae, d);
        } catch {}
      return !0;
    } finally {
      (I.p = c), (V.T = u), Ky(e, a);
    }
  }
  function Xy(e, a, s) {
    (a = Cn(s, a)), (a = Zf(e.stateNode, a, 2)), (e = tr(e, a, 2)), e !== null && (Rr(e, 2), na(e));
  }
  function ut(e, a, s) {
    if (e.tag === 3) Xy(e, e, s);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Xy(a, e, s);
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == 'function' ||
            (typeof u.componentDidCatch == 'function' && (cr === null || !cr.has(u)))
          ) {
            (e = Cn(s, e)),
              (s = ty(2)),
              (u = tr(a, s, 2)),
              u !== null && (ny(s, u, a, e), Rr(u, 2), na(u));
            break;
          }
        }
        a = a.return;
      }
  }
  function gd(e, a, s) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new C_();
      var c = new Set();
      u.set(a, c);
    } else (c = u.get(a)), c === void 0 && ((c = new Set()), u.set(a, c));
    c.has(s) || ((id = !0), c.add(s), (e = k_.bind(null, e, a, s)), a.then(e, e));
  }
  function k_(e, a, s) {
    var u = e.pingCache;
    u !== null && u.delete(a),
      (e.pingedLanes |= e.suspendedLanes & s),
      (e.warmLanes &= ~s),
      ot === e &&
        (Pe & s) === s &&
        (pt === 4 || (pt === 3 && (Pe & 62914560) === Pe && 300 > Zt() - ud)
          ? (et & 2) === 0 && $i(e, 0)
          : (sd |= s),
        Fi === Pe && (Fi = 0)),
      na(e);
  }
  function Iy(e, a) {
    a === 0 && (a = fn()), (e = Ni(e, a)), e !== null && (Rr(e, a), na(e));
  }
  function R_(e) {
    var a = e.memoizedState,
      s = 0;
    a !== null && (s = a.retryLane), Iy(e, s);
  }
  function j_(e, a) {
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
    u !== null && u.delete(a), Iy(e, s);
  }
  function z_(e, a) {
    return kr(e, a);
  }
  var mo = null,
    Ki = null,
    yd = !1,
    go = !1,
    pd = !1,
    Xr = 0;
  function na(e) {
    e !== Ki && e.next === null && (Ki === null ? (mo = Ki = e) : (Ki = Ki.next = e)),
      (go = !0),
      yd || ((yd = !0), L_());
  }
  function dl(e, a) {
    if (!pd && go) {
      pd = !0;
      do
        for (var s = !1, u = mo; u !== null; ) {
          if (e !== 0) {
            var c = u.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var p = u.suspendedLanes,
                _ = u.pingedLanes;
              (d = (1 << (31 - Ne(42 | e) + 1)) - 1),
                (d &= c & ~(p & ~_)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((s = !0), np(u, d));
          } else
            (d = Pe),
              (d = Ft(
                u,
                u === ot ? d : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (d & 3) === 0 || Tt(u, d) || ((s = !0), np(u, d));
          u = u.next;
        }
      while (s);
      pd = !1;
    }
  }
  function U_() {
    Jy();
  }
  function Jy() {
    go = yd = !1;
    var e = 0;
    Xr !== 0 && (P_() && (e = Xr), (Xr = 0));
    for (var a = Zt(), s = null, u = mo; u !== null; ) {
      var c = u.next,
        d = ep(u, a);
      d === 0
        ? ((u.next = null), s === null ? (mo = c) : (s.next = c), c === null && (Ki = s))
        : ((s = u), (e !== 0 || (d & 3) !== 0) && (go = !0)),
        (u = c);
    }
    dl(e);
  }
  function ep(e, a) {
    for (
      var s = e.suspendedLanes,
        u = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var p = 31 - Ne(d),
        _ = 1 << p,
        O = c[p];
      O === -1
        ? ((_ & s) === 0 || (_ & u) !== 0) && (c[p] = ga(_, a))
        : O <= a && (e.expiredLanes |= _),
        (d &= ~_);
    }
    if (
      ((a = ot),
      (s = Pe),
      (s = Ft(e, e === a ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (u = e.callbackNode),
      s === 0 || (e === a && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null)
    )
      return u !== null && u !== null && Ka(u), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((s & 3) === 0 || Tt(e, s)) {
      if (((a = s & -s), a === e.callbackPriority)) return a;
      switch ((u !== null && Ka(u), Ac(s))) {
        case 2:
        case 8:
          s = Ms;
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
        (u = tp.bind(null, e)), (s = kr(s, u)), (e.callbackPriority = a), (e.callbackNode = s), a
      );
    }
    return u !== null && u !== null && Ka(u), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function tp(e, a) {
    if (Bt !== 0 && Bt !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var s = e.callbackNode;
    if (ho() && e.callbackNode !== s) return null;
    var u = Pe;
    return (
      (u = Ft(e, e === ot ? u : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      u === 0
        ? null
        : (Ly(e, u, a),
          ep(e, Zt()),
          e.callbackNode != null && e.callbackNode === s ? tp.bind(null, e) : null)
    );
  }
  function np(e, a) {
    if (ho()) return null;
    Ly(e, a, !0);
  }
  function L_() {
    $_(function () {
      (et & 6) !== 0 ? kr(hi, U_) : Jy();
    });
  }
  function vd() {
    return Xr === 0 && (Xr = Ct()), Xr;
  }
  function ap(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ou('' + e);
  }
  function rp(e, a) {
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
  function B_(e, a, s, u, c) {
    if (a === 'submit' && s && s.stateNode === c) {
      var d = ap((c[sn] || null).action),
        p = u.submitter;
      p &&
        ((a = (a = p[sn] || null) ? ap(a.formAction) : p.getAttribute('formAction')),
        a !== null && ((d = a), (p = null)));
      var _ = new Nu('action', 'action', null, u, c);
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Xr !== 0) {
                  var O = p ? rp(c, p) : new FormData(c);
                  Bf(s, { pending: !0, data: O, method: c.method, action: d }, null, O);
                }
              } else
                typeof d == 'function' &&
                  (_.preventDefault(),
                  (O = p ? rp(c, p) : new FormData(c)),
                  Bf(s, { pending: !0, data: O, method: c.method, action: d }, d, O));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var bd = 0; bd < nf.length; bd++) {
    var _d = nf[bd],
      H_ = _d.toLowerCase(),
      V_ = _d[0].toUpperCase() + _d.slice(1);
    zn(H_, 'on' + V_);
  }
  zn(Lm, 'onAnimationEnd'),
    zn(Bm, 'onAnimationIteration'),
    zn(Hm, 'onAnimationStart'),
    zn('dblclick', 'onDoubleClick'),
    zn('focusin', 'onFocus'),
    zn('focusout', 'onBlur'),
    zn(a_, 'onTransitionRun'),
    zn(r_, 'onTransitionStart'),
    zn(i_, 'onTransitionCancel'),
    zn(Vm, 'onTransitionEnd'),
    bi('onMouseEnter', ['mouseout', 'mouseover']),
    bi('onMouseLeave', ['mouseout', 'mouseover']),
    bi('onPointerEnter', ['pointerout', 'pointerover']),
    bi('onPointerLeave', ['pointerout', 'pointerover']),
    zr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    zr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    zr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    zr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    zr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    zr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var hl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    q_ = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(hl)
    );
  function ip(e, a) {
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
              O = _.instance,
              U = _.currentTarget;
            if (((_ = _.listener), O !== d && c.isPropagationStopped())) break e;
            (d = _), (c.currentTarget = U);
            try {
              d(c);
            } catch (F) {
              to(F);
            }
            (c.currentTarget = null), (d = O);
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((_ = u[p]),
              (O = _.instance),
              (U = _.currentTarget),
              (_ = _.listener),
              O !== d && c.isPropagationStopped())
            )
              break e;
            (d = _), (c.currentTarget = U);
            try {
              d(c);
            } catch (F) {
              to(F);
            }
            (c.currentTarget = null), (d = O);
          }
      }
    }
  }
  function Ze(e, a) {
    var s = a[kc];
    s === void 0 && (s = a[kc] = new Set());
    var u = e + '__bubble';
    s.has(u) || (sp(a, e, 2, !1), s.add(u));
  }
  function Sd(e, a, s) {
    var u = 0;
    a && (u |= 4), sp(s, e, u, a);
  }
  var yo = '_reactListening' + Math.random().toString(36).slice(2);
  function xd(e) {
    if (!e[yo]) {
      (e[yo] = !0),
        Jh.forEach(function (s) {
          s !== 'selectionchange' && (q_.has(s) || Sd(s, !1, e), Sd(s, !0, e));
        });
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[yo] || ((a[yo] = !0), Sd('selectionchange', !1, a));
    }
  }
  function sp(e, a, s, u) {
    switch (Dp(a)) {
      case 2:
        var c = mS;
        break;
      case 8:
        c = gS;
        break;
      default:
        c = Ud;
    }
    (s = c.bind(null, a, s, e)),
      (c = void 0),
      !Zc || (a !== 'touchstart' && a !== 'touchmove' && a !== 'wheel') || (c = !0),
      u
        ? c !== void 0
          ? e.addEventListener(a, s, { capture: !0, passive: c })
          : e.addEventListener(a, s, !0)
        : c !== void 0
          ? e.addEventListener(a, s, { passive: c })
          : e.addEventListener(a, s, !1);
  }
  function wd(e, a, s, u, c) {
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
              var O = p.tag;
              if ((O === 3 || O === 4) && p.stateNode.containerInfo === c) return;
              p = p.return;
            }
          for (; _ !== null; ) {
            if (((p = yi(_)), p === null)) return;
            if (((O = p.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              u = d = p;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        u = u.return;
      }
    hm(function () {
      var U = d,
        F = qc(s),
        Q = [];
      e: {
        var L = qm.get(e);
        if (L !== void 0) {
          var H = Nu,
            De = e;
          switch (e) {
            case 'keypress':
              if (Cu(s) === 0) break e;
            case 'keydown':
            case 'keyup':
              H = z1;
              break;
            case 'focusin':
              (De = 'focus'), (H = $c);
              break;
            case 'focusout':
              (De = 'blur'), (H = $c);
              break;
            case 'beforeblur':
            case 'afterblur':
              H = $c;
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
              H = ym;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              H = w1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              H = B1;
              break;
            case Lm:
            case Bm:
            case Hm:
              H = T1;
              break;
            case Vm:
              H = V1;
              break;
            case 'scroll':
            case 'scrollend':
              H = S1;
              break;
            case 'wheel':
              H = Y1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              H = M1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              H = vm;
              break;
            case 'toggle':
            case 'beforetoggle':
              H = F1;
          }
          var Ee = (a & 4) !== 0,
            st = !Ee && (e === 'scroll' || e === 'scrollend'),
            j = Ee ? (L !== null ? L + 'Capture' : null) : L;
          Ee = [];
          for (var A = U, z; A !== null; ) {
            var G = A;
            if (
              ((z = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                z === null ||
                j === null ||
                ((G = ks(A, j)), G != null && Ee.push(ml(A, G, z))),
              st)
            )
              break;
            A = A.return;
          }
          0 < Ee.length && ((L = new H(L, De, null, s, F)), Q.push({ event: L, listeners: Ee }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (H = e === 'mouseout' || e === 'pointerout'),
            L && s !== Vc && (De = s.relatedTarget || s.fromElement) && (yi(De) || De[gi]))
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
              ? ((De = s.relatedTarget || s.toElement),
                (H = U),
                (De = De ? yi(De) : null),
                De !== null &&
                  ((st = o(De)), (Ee = De.tag), De !== st || (Ee !== 5 && Ee !== 27 && Ee !== 6)) &&
                  (De = null))
              : ((H = null), (De = U)),
            H !== De)
          ) {
            if (
              ((Ee = ym),
              (G = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (A = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Ee = vm), (G = 'onPointerLeave'), (j = 'onPointerEnter'), (A = 'pointer')),
              (st = H == null ? L : As(H)),
              (z = De == null ? L : As(De)),
              (L = new Ee(G, A + 'leave', H, s, F)),
              (L.target = st),
              (L.relatedTarget = z),
              (G = null),
              yi(F) === U &&
                ((Ee = new Ee(j, A + 'enter', De, s, F)),
                (Ee.target = z),
                (Ee.relatedTarget = st),
                (G = Ee)),
              (st = G),
              H && De)
            )
              t: {
                for (Ee = H, j = De, A = 0, z = Ee; z; z = Wi(z)) A++;
                for (z = 0, G = j; G; G = Wi(G)) z++;
                for (; 0 < A - z; ) (Ee = Wi(Ee)), A--;
                for (; 0 < z - A; ) (j = Wi(j)), z--;
                for (; A--; ) {
                  if (Ee === j || (j !== null && Ee === j.alternate)) break t;
                  (Ee = Wi(Ee)), (j = Wi(j));
                }
                Ee = null;
              }
            else Ee = null;
            H !== null && lp(Q, L, H, Ee, !1), De !== null && st !== null && lp(Q, st, De, Ee, !0);
          }
        }
        e: {
          if (
            ((L = U ? As(U) : window),
            (H = L.nodeName && L.nodeName.toLowerCase()),
            H === 'select' || (H === 'input' && L.type === 'file'))
          )
            var ge = Tm;
          else if (Em(L))
            if (Cm) ge = e_;
            else {
              ge = I1;
              var qe = X1;
            }
          else
            (H = L.nodeName),
              !H || H.toLowerCase() !== 'input' || (L.type !== 'checkbox' && L.type !== 'radio')
                ? U && Hc(U.elementType) && (ge = Tm)
                : (ge = J1);
          if (ge && (ge = ge(e, U))) {
            Om(Q, ge, s, F);
            break e;
          }
          qe && qe(e, L, U),
            e === 'focusout' &&
              U &&
              L.type === 'number' &&
              U.memoizedProps.value != null &&
              Bc(L, 'number', L.value);
        }
        switch (((qe = U ? As(U) : window), e)) {
          case 'focusin':
            (Em(qe) || qe.contentEditable === 'true') && ((Ti = qe), (Jc = U), (Vs = null));
            break;
          case 'focusout':
            Vs = Jc = Ti = null;
            break;
          case 'mousedown':
            ef = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (ef = !1), zm(Q, s, F);
            break;
          case 'selectionchange':
            if (n_) break;
          case 'keydown':
          case 'keyup':
            zm(Q, s, F);
        }
        var pe;
        if (Kc)
          e: {
            switch (e) {
              case 'compositionstart':
                var Oe = 'onCompositionStart';
                break e;
              case 'compositionend':
                Oe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Oe = 'onCompositionUpdate';
                break e;
            }
            Oe = void 0;
          }
        else
          Oi
            ? xm(e, s) && (Oe = 'onCompositionEnd')
            : e === 'keydown' && s.keyCode === 229 && (Oe = 'onCompositionStart');
        Oe &&
          (bm &&
            s.locale !== 'ko' &&
            (Oi || Oe !== 'onCompositionStart'
              ? Oe === 'onCompositionEnd' && Oi && (pe = mm())
              : ((Xa = F), (Fc = 'value' in Xa ? Xa.value : Xa.textContent), (Oi = !0))),
          (qe = po(U, Oe)),
          0 < qe.length &&
            ((Oe = new pm(Oe, e, null, s, F)),
            Q.push({ event: Oe, listeners: qe }),
            pe ? (Oe.data = pe) : ((pe = wm(s)), pe !== null && (Oe.data = pe)))),
          (pe = G1 ? $1(e, s) : Q1(e, s)) &&
            ((Oe = po(U, 'onBeforeInput')),
            0 < Oe.length &&
              ((qe = new pm('onBeforeInput', 'beforeinput', null, s, F)),
              Q.push({ event: qe, listeners: Oe }),
              (qe.data = pe))),
          B_(Q, e, U, s, F);
      }
      ip(Q, a);
    });
  }
  function ml(e, a, s) {
    return { instance: e, listener: a, currentTarget: s };
  }
  function po(e, a) {
    for (var s = a + 'Capture', u = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = ks(e, s)),
          c != null && u.unshift(ml(e, c, d)),
          (c = ks(e, a)),
          c != null && u.push(ml(e, c, d))),
        e.tag === 3)
      )
        return u;
      e = e.return;
    }
    return [];
  }
  function Wi(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function lp(e, a, s, u, c) {
    for (var d = a._reactName, p = []; s !== null && s !== u; ) {
      var _ = s,
        O = _.alternate,
        U = _.stateNode;
      if (((_ = _.tag), O !== null && O === u)) break;
      (_ !== 5 && _ !== 26 && _ !== 27) ||
        U === null ||
        ((O = U),
        c
          ? ((U = ks(s, d)), U != null && p.unshift(ml(s, U, O)))
          : c || ((U = ks(s, d)), U != null && p.push(ml(s, U, O)))),
        (s = s.return);
    }
    p.length !== 0 && e.push({ event: a, listeners: p });
  }
  var Y_ = /\r\n?/g,
    Z_ = /\u0000|\uFFFD/g;
  function up(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Y_,
        `
`
      )
      .replace(Z_, '');
  }
  function op(e, a) {
    return (a = up(a)), up(e) === a;
  }
  function vo() {}
  function it(e, a, s, u, c, d) {
    switch (s) {
      case 'children':
        typeof u == 'string'
          ? a === 'body' || (a === 'textarea' && u === '') || xi(e, u)
          : (typeof u == 'number' || typeof u == 'bigint') && a !== 'body' && xi(e, '' + u);
        break;
      case 'className':
        xu(e, 'class', u);
        break;
      case 'tabIndex':
        xu(e, 'tabindex', u);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        xu(e, s, u);
        break;
      case 'style':
        fm(e, u, d);
        break;
      case 'data':
        if (a !== 'object') {
          xu(e, 'data', u);
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
        u != null && (e.onclick = vo);
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
        Ze('beforetoggle', e), Ze('toggle', e), Su(e, 'popover', u);
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
        Su(e, 'is', u);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < s.length) || (s[0] !== 'o' && s[0] !== 'O') || (s[1] !== 'n' && s[1] !== 'N')) &&
          ((s = b1.get(s) || s), Su(e, s, u));
    }
  }
  function Ed(e, a, s, u, c, d) {
    switch (s) {
      case 'style':
        fm(e, u, d);
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
          ? xi(e, u)
          : (typeof u == 'number' || typeof u == 'bigint') && xi(e, '' + u);
        break;
      case 'onScroll':
        u != null && Ze('scroll', e);
        break;
      case 'onScrollEnd':
        u != null && Ze('scrollend', e);
        break;
      case 'onClick':
        u != null && (e.onclick = vo);
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
        if (!em.hasOwnProperty(s))
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
            s in e ? (e[s] = u) : u === !0 ? e.setAttribute(s, '') : Su(e, s, u);
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
          O = null,
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
                  O = F;
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
        lm(e, d, _, O, U, p, c, !1), wu(e);
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
          a != null ? Si(e, !!u, a, !1) : s != null && Si(e, !!u, s, !0);
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
        om(e, u, c, d), wu(e);
        return;
      case 'option':
        for (O in s)
          if (s.hasOwnProperty(O) && ((u = s[O]), u != null))
            switch (O) {
              case 'selected':
                e.selected = u && typeof u != 'function' && typeof u != 'symbol';
                break;
              default:
                it(e, a, O, u, s, null);
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
        for (u = 0; u < hl.length; u++) Ze(hl[u], e);
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
        if (Hc(a)) {
          for (F in s)
            s.hasOwnProperty(F) && ((u = s[F]), u !== void 0 && Ed(e, a, F, u, s, void 0));
          return;
        }
    }
    for (_ in s) s.hasOwnProperty(_) && ((u = s[_]), u != null && it(e, a, _, u, s, null));
  }
  function F_(e, a, s, u) {
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
          O = null,
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
                O = Q;
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
        Lc(e, p, _, O, U, F, d, c);
        return;
      case 'select':
        H = p = _ = L = null;
        for (d in s)
          if (((O = s[d]), s.hasOwnProperty(d) && O != null))
            switch (d) {
              case 'value':
                break;
              case 'multiple':
                H = O;
              default:
                u.hasOwnProperty(d) || it(e, a, d, null, u, O);
            }
        for (c in u)
          if (((d = u[c]), (O = s[c]), u.hasOwnProperty(c) && (d != null || O != null)))
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
                d !== O && it(e, a, c, d, u, O);
            }
        (a = _),
          (s = p),
          (u = H),
          L != null
            ? Si(e, !!s, L, !1)
            : !!u != !!s && (a != null ? Si(e, !!s, a, !0) : Si(e, !!s, s ? [] : '', !1));
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
        um(e, L, H);
        return;
      case 'option':
        for (var De in s)
          if (((L = s[De]), s.hasOwnProperty(De) && L != null && !u.hasOwnProperty(De)))
            switch (De) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                it(e, a, De, null, u, L);
            }
        for (O in u)
          if (((L = u[O]), (H = s[O]), u.hasOwnProperty(O) && L !== H && (L != null || H != null)))
            switch (O) {
              case 'selected':
                e.selected = L && typeof L != 'function' && typeof L != 'symbol';
                break;
              default:
                it(e, a, O, L, u, H);
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
        for (var Ee in s)
          (L = s[Ee]),
            s.hasOwnProperty(Ee) && L != null && !u.hasOwnProperty(Ee) && it(e, a, Ee, null, u, L);
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
        if (Hc(a)) {
          for (var st in s)
            (L = s[st]),
              s.hasOwnProperty(st) &&
                L !== void 0 &&
                !u.hasOwnProperty(st) &&
                Ed(e, a, st, void 0, u, L);
          for (F in u)
            (L = u[F]),
              (H = s[F]),
              !u.hasOwnProperty(F) ||
                L === H ||
                (L === void 0 && H === void 0) ||
                Ed(e, a, F, L, u, H);
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
  var Od = null,
    Td = null;
  function bo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function cp(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function fp(e, a) {
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
  function Cd(e, a) {
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
  var Md = null;
  function P_() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Md ? !1 : ((Md = e), !0)) : ((Md = null), !1);
  }
  var dp = typeof setTimeout == 'function' ? setTimeout : void 0,
    G_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    hp = typeof Promise == 'function' ? Promise : void 0,
    $_ =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof hp < 'u'
          ? function (e) {
              return hp.resolve(null).then(e).catch(Q_);
            }
          : dp;
  function Q_(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function hr(e) {
    return e === 'head';
  }
  function mp(e, a) {
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
            if ((s & 1 && gl(p.documentElement), s & 2 && gl(p.body), s & 4))
              for (s = p.head, gl(s), p = s.firstChild; p; ) {
                var _ = p.nextSibling,
                  O = p.nodeName;
                p[Ds] ||
                  O === 'SCRIPT' ||
                  O === 'STYLE' ||
                  (O === 'LINK' && p.rel.toLowerCase() === 'stylesheet') ||
                  s.removeChild(p),
                  (p = _);
              }
          }
          if (c === 0) {
            e.removeChild(d), wl(a);
            return;
          }
          c--;
        } else s === '$' || s === '$?' || s === '$!' ? c++ : (u = s.charCodeAt(0) - 48);
      else u = 0;
      s = d;
    } while (s);
    wl(a);
  }
  function Nd(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var s = a;
      switch (((a = a.nextSibling), s.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Nd(s), Rc(s);
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
  function K_(e, a, s, u) {
    for (; e.nodeType === 1; ) {
      var c = s;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (u) {
        if (!e[Ds])
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
      if (((e = Ln(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function W_(e, a, s) {
    if (a === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !s) ||
        ((e = Ln(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Dd(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function X_(e, a) {
    var s = e.ownerDocument;
    if (e.data !== '$?' || s.readyState === 'complete') a();
    else {
      var u = function () {
        a(), s.removeEventListener('DOMContentLoaded', u);
      };
      s.addEventListener('DOMContentLoaded', u), (e._reactRetry = u);
    }
  }
  function Ln(e) {
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
  var Ad = null;
  function gp(e) {
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
  function yp(e, a, s) {
    switch (((a = bo(s)), e)) {
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
  function gl(e) {
    for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
    Rc(e);
  }
  var Rn = new Map(),
    pp = new Set();
  function _o(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Da = I.d;
  I.d = { f: I_, r: J_, D: eS, C: tS, L: nS, m: aS, X: iS, S: rS, M: sS };
  function I_() {
    var e = Da.f(),
      a = co();
    return e || a;
  }
  function J_(e) {
    var a = pi(e);
    a !== null && a.tag === 5 && a.type === 'form' ? Lg(a) : Da.r(e);
  }
  var Xi = typeof document > 'u' ? null : document;
  function vp(e, a, s) {
    var u = Xi;
    if (u && typeof a == 'string' && a) {
      var c = Tn(a);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof s == 'string' && (c += '[crossorigin="' + s + '"]'),
        pp.has(c) ||
          (pp.add(c),
          (e = { rel: e, crossOrigin: s, href: a }),
          u.querySelector(c) === null &&
            ((a = u.createElement('link')), Ht(a, 'link', e), Rt(a), u.head.appendChild(a)));
    }
  }
  function eS(e) {
    Da.D(e), vp('dns-prefetch', e, null);
  }
  function tS(e, a) {
    Da.C(e, a), vp('preconnect', e, a);
  }
  function nS(e, a, s) {
    Da.L(e, a, s);
    var u = Xi;
    if (u && e && a) {
      var c = 'link[rel="preload"][as="' + Tn(a) + '"]';
      a === 'image' && s && s.imageSrcSet
        ? ((c += '[imagesrcset="' + Tn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == 'string' && (c += '[imagesizes="' + Tn(s.imageSizes) + '"]'))
        : (c += '[href="' + Tn(e) + '"]');
      var d = c;
      switch (a) {
        case 'style':
          d = Ii(e);
          break;
        case 'script':
          d = Ji(e);
      }
      Rn.has(d) ||
        ((e = y(
          { rel: 'preload', href: a === 'image' && s && s.imageSrcSet ? void 0 : e, as: a },
          s
        )),
        Rn.set(d, e),
        u.querySelector(c) !== null ||
          (a === 'style' && u.querySelector(yl(d))) ||
          (a === 'script' && u.querySelector(pl(d))) ||
          ((a = u.createElement('link')), Ht(a, 'link', e), Rt(a), u.head.appendChild(a)));
    }
  }
  function aS(e, a) {
    Da.m(e, a);
    var s = Xi;
    if (s && e) {
      var u = a && typeof a.as == 'string' ? a.as : 'script',
        c = 'link[rel="modulepreload"][as="' + Tn(u) + '"][href="' + Tn(e) + '"]',
        d = c;
      switch (u) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          d = Ji(e);
      }
      if (
        !Rn.has(d) &&
        ((e = y({ rel: 'modulepreload', href: e }, a)), Rn.set(d, e), s.querySelector(c) === null)
      ) {
        switch (u) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (s.querySelector(pl(d))) return;
        }
        (u = s.createElement('link')), Ht(u, 'link', e), Rt(u), s.head.appendChild(u);
      }
    }
  }
  function rS(e, a, s) {
    Da.S(e, a, s);
    var u = Xi;
    if (u && e) {
      var c = vi(u).hoistableStyles,
        d = Ii(e);
      a = a || 'default';
      var p = c.get(d);
      if (!p) {
        var _ = { loading: 0, preload: null };
        if ((p = u.querySelector(yl(d)))) _.loading = 5;
        else {
          (e = y({ rel: 'stylesheet', href: e, 'data-precedence': a }, s)),
            (s = Rn.get(d)) && kd(e, s);
          var O = (p = u.createElement('link'));
          Rt(O),
            Ht(O, 'link', e),
            (O._p = new Promise(function (U, F) {
              (O.onload = U), (O.onerror = F);
            })),
            O.addEventListener('load', function () {
              _.loading |= 1;
            }),
            O.addEventListener('error', function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            So(p, a, u);
        }
        (p = { type: 'stylesheet', instance: p, count: 1, state: _ }), c.set(d, p);
      }
    }
  }
  function iS(e, a) {
    Da.X(e, a);
    var s = Xi;
    if (s && e) {
      var u = vi(s).hoistableScripts,
        c = Ji(e),
        d = u.get(c);
      d ||
        ((d = s.querySelector(pl(c))),
        d ||
          ((e = y({ src: e, async: !0 }, a)),
          (a = Rn.get(c)) && Rd(e, a),
          (d = s.createElement('script')),
          Rt(d),
          Ht(d, 'link', e),
          s.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        u.set(c, d));
    }
  }
  function sS(e, a) {
    Da.M(e, a);
    var s = Xi;
    if (s && e) {
      var u = vi(s).hoistableScripts,
        c = Ji(e),
        d = u.get(c);
      d ||
        ((d = s.querySelector(pl(c))),
        d ||
          ((e = y({ src: e, async: !0, type: 'module' }, a)),
          (a = Rn.get(c)) && Rd(e, a),
          (d = s.createElement('script')),
          Rt(d),
          Ht(d, 'link', e),
          s.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        u.set(c, d));
    }
  }
  function bp(e, a, s, u) {
    var c = (c = we.current) ? _o(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof s.precedence == 'string' && typeof s.href == 'string'
          ? ((a = Ii(s.href)),
            (s = vi(c).hoistableStyles),
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
          e = Ii(s.href);
          var d = vi(c).hoistableStyles,
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
              (d = c.querySelector(yl(e))) && !d._p && ((p.instance = d), (p.state.loading = 5)),
              Rn.has(e) ||
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
                Rn.set(e, s),
                d || lS(c, e, s, p.state))),
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
            ? ((a = Ji(s)),
              (s = vi(c).hoistableScripts),
              (u = s.get(a)),
              u || ((u = { type: 'script', instance: null, count: 0, state: null }), s.set(a, u)),
              u)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Ii(e) {
    return 'href="' + Tn(e) + '"';
  }
  function yl(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function _p(e) {
    return y({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function lS(e, a, s, u) {
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
  function Ji(e) {
    return '[src="' + Tn(e) + '"]';
  }
  function pl(e) {
    return 'script[async]' + e;
  }
  function Sp(e, a, s) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case 'style':
          var u = e.querySelector('style[data-href~="' + Tn(s.href) + '"]');
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
            So(u, s.precedence, e),
            (a.instance = u)
          );
        case 'stylesheet':
          c = Ii(s.href);
          var d = e.querySelector(yl(c));
          if (d) return (a.state.loading |= 4), (a.instance = d), Rt(d), d;
          (u = _p(s)),
            (c = Rn.get(c)) && kd(u, c),
            (d = (e.ownerDocument || e).createElement('link')),
            Rt(d);
          var p = d;
          return (
            (p._p = new Promise(function (_, O) {
              (p.onload = _), (p.onerror = O);
            })),
            Ht(d, 'link', u),
            (a.state.loading |= 4),
            So(d, s.precedence, e),
            (a.instance = d)
          );
        case 'script':
          return (
            (d = Ji(s.src)),
            (c = e.querySelector(pl(d)))
              ? ((a.instance = c), Rt(c), c)
              : ((u = s),
                (c = Rn.get(d)) && ((u = y({}, s)), Rd(u, c)),
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
        ((u = a.instance), (a.state.loading |= 4), So(u, s.precedence, e));
    return a.instance;
  }
  function So(e, a, s) {
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
  function kd(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title);
  }
  function Rd(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity);
  }
  var xo = null;
  function xp(e, a, s) {
    if (xo === null) {
      var u = new Map(),
        c = (xo = new Map());
      c.set(s, u);
    } else (c = xo), (u = c.get(s)), u || ((u = new Map()), c.set(s, u));
    if (u.has(e)) return u;
    for (u.set(e, null), s = s.getElementsByTagName(e), c = 0; c < s.length; c++) {
      var d = s[c];
      if (
        !(d[Ds] || d[Pt] || (e === 'link' && d.getAttribute('rel') === 'stylesheet')) &&
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
  function wp(e, a, s) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(s, a === 'title' ? e.querySelector('head > title') : null);
  }
  function uS(e, a, s) {
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
  function Ep(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var vl = null;
  function oS() {}
  function cS(e, a, s) {
    if (vl === null) throw Error(i(475));
    var u = vl;
    if (
      a.type === 'stylesheet' &&
      (typeof s.media != 'string' || matchMedia(s.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var c = Ii(s.href),
          d = e.querySelector(yl(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (u.count++, (u = wo.bind(u)), e.then(u, u)),
            (a.state.loading |= 4),
            (a.instance = d),
            Rt(d);
          return;
        }
        (d = e.ownerDocument || e),
          (s = _p(s)),
          (c = Rn.get(c)) && kd(s, c),
          (d = d.createElement('link')),
          Rt(d);
        var p = d;
        (p._p = new Promise(function (_, O) {
          (p.onload = _), (p.onerror = O);
        })),
          Ht(d, 'link', s),
          (a.instance = d);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (u.count++,
          (a = wo.bind(u)),
          e.addEventListener('load', a),
          e.addEventListener('error', a));
    }
  }
  function fS() {
    if (vl === null) throw Error(i(475));
    var e = vl;
    return (
      e.stylesheets && e.count === 0 && jd(e, e.stylesheets),
      0 < e.count
        ? function (a) {
            var s = setTimeout(function () {
              if ((e.stylesheets && jd(e, e.stylesheets), e.unsuspend)) {
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
  function wo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) jd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Eo = null;
  function jd(e, a) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Eo = new Map()), a.forEach(dS, e), (Eo = null), wo.call(e));
  }
  function dS(e, a) {
    if (!(a.state.loading & 4)) {
      var s = Eo.get(e);
      if (s) var u = s.get(null);
      else {
        (s = new Map()), Eo.set(e, s);
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
        (u = wo.bind(this)),
        c.addEventListener('load', u),
        c.addEventListener('error', u),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var bl = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: me,
    _currentValue2: me,
    _threadCount: 0,
  };
  function hS(e, a, s, u, c, d, p, _) {
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
  function Op(e, a, s, u, c, d, p, _, O, U, F, Q) {
    return (
      (e = new hS(e, a, s, p, _, O, U, Q)),
      (a = 1),
      d === !0 && (a |= 24),
      (d = hn(3, null, null, a)),
      (e.current = d),
      (d.stateNode = e),
      (a = gf()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (d.memoizedState = { element: u, isDehydrated: s, cache: a }),
      bf(d),
      e
    );
  }
  function Tp(e) {
    return e ? ((e = Di), e) : Di;
  }
  function Cp(e, a, s, u, c, d) {
    (c = Tp(c)),
      u.context === null ? (u.context = c) : (u.pendingContext = c),
      (u = er(a)),
      (u.payload = { element: s }),
      (d = d === void 0 ? null : d),
      d !== null && (u.callback = d),
      (s = tr(e, u, a)),
      s !== null && (vn(s, e, a), Ks(s, e, a));
  }
  function Mp(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < a ? s : a;
    }
  }
  function zd(e, a) {
    Mp(e, a), (e = e.alternate) && Mp(e, a);
  }
  function Np(e) {
    if (e.tag === 13) {
      var a = Ni(e, 67108864);
      a !== null && vn(a, e, 67108864), zd(e, 67108864);
    }
  }
  var Oo = !0;
  function mS(e, a, s, u) {
    var c = V.T;
    V.T = null;
    var d = I.p;
    try {
      (I.p = 2), Ud(e, a, s, u);
    } finally {
      (I.p = d), (V.T = c);
    }
  }
  function gS(e, a, s, u) {
    var c = V.T;
    V.T = null;
    var d = I.p;
    try {
      (I.p = 8), Ud(e, a, s, u);
    } finally {
      (I.p = d), (V.T = c);
    }
  }
  function Ud(e, a, s, u) {
    if (Oo) {
      var c = Ld(u);
      if (c === null) wd(e, a, u, To, s), Ap(e, u);
      else if (pS(c, e, a, s, u)) u.stopPropagation();
      else if ((Ap(e, u), a & 4 && -1 < yS.indexOf(e))) {
        for (; c !== null; ) {
          var d = pi(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var p = Fe(d.pendingLanes);
                  if (p !== 0) {
                    var _ = d;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; p; ) {
                      var O = 1 << (31 - Ne(p));
                      (_.entanglements[1] |= O), (p &= ~O);
                    }
                    na(d), (et & 6) === 0 && ((uo = Zt() + 500), dl(0));
                  }
                }
                break;
              case 13:
                (_ = Ni(d, 2)), _ !== null && vn(_, d, 2), co(), zd(d, 2);
            }
          if (((d = Ld(u)), d === null && wd(e, a, u, To, s), d === c)) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else wd(e, a, u, null, s);
    }
  }
  function Ld(e) {
    return (e = qc(e)), Bd(e);
  }
  var To = null;
  function Bd(e) {
    if (((To = null), (e = yi(e)), e !== null)) {
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
    return (To = e), null;
  }
  function Dp(e) {
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
        switch (Cs()) {
          case hi:
            return 2;
          case Ms:
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
  var Hd = !1,
    mr = null,
    gr = null,
    yr = null,
    _l = new Map(),
    Sl = new Map(),
    pr = [],
    yS =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Ap(e, a) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        mr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        gr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        yr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        _l.delete(a.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Sl.delete(a.pointerId);
    }
  }
  function xl(e, a, s, u, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: a,
          domEventName: s,
          eventSystemFlags: u,
          nativeEvent: d,
          targetContainers: [c],
        }),
        a !== null && ((a = pi(a)), a !== null && Np(a)),
        e)
      : ((e.eventSystemFlags |= u),
        (a = e.targetContainers),
        c !== null && a.indexOf(c) === -1 && a.push(c),
        e);
  }
  function pS(e, a, s, u, c) {
    switch (a) {
      case 'focusin':
        return (mr = xl(mr, e, a, s, u, c)), !0;
      case 'dragenter':
        return (gr = xl(gr, e, a, s, u, c)), !0;
      case 'mouseover':
        return (yr = xl(yr, e, a, s, u, c)), !0;
      case 'pointerover':
        var d = c.pointerId;
        return _l.set(d, xl(_l.get(d) || null, e, a, s, u, c)), !0;
      case 'gotpointercapture':
        return (d = c.pointerId), Sl.set(d, xl(Sl.get(d) || null, e, a, s, u, c)), !0;
    }
    return !1;
  }
  function kp(e) {
    var a = yi(e.target);
    if (a !== null) {
      var s = o(a);
      if (s !== null) {
        if (((a = s.tag), a === 13)) {
          if (((a = f(s)), a !== null)) {
            (e.blockedOn = a),
              c1(e.priority, function () {
                if (s.tag === 13) {
                  var u = pn();
                  u = jr(u);
                  var c = Ni(s, u);
                  c !== null && vn(c, s, u), zd(s, u);
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
  function Co(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var s = Ld(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var u = new s.constructor(s.type, s);
        (Vc = u), s.target.dispatchEvent(u), (Vc = null);
      } else return (a = pi(s)), a !== null && Np(a), (e.blockedOn = s), !1;
      a.shift();
    }
    return !0;
  }
  function Rp(e, a, s) {
    Co(e) && s.delete(a);
  }
  function vS() {
    (Hd = !1),
      mr !== null && Co(mr) && (mr = null),
      gr !== null && Co(gr) && (gr = null),
      yr !== null && Co(yr) && (yr = null),
      _l.forEach(Rp),
      Sl.forEach(Rp);
  }
  function Mo(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      Hd || ((Hd = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, vS)));
  }
  var No = null;
  function jp(e) {
    No !== e &&
      ((No = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        No === e && (No = null);
        for (var a = 0; a < e.length; a += 3) {
          var s = e[a],
            u = e[a + 1],
            c = e[a + 2];
          if (typeof u != 'function') {
            if (Bd(u || s) === null) continue;
            break;
          }
          var d = pi(s);
          d !== null &&
            (e.splice(a, 3),
            (a -= 3),
            Bf(d, { pending: !0, data: c, method: s.method, action: u }, u, c));
        }
      }));
  }
  function wl(e) {
    function a(O) {
      return Mo(O, e);
    }
    mr !== null && Mo(mr, e),
      gr !== null && Mo(gr, e),
      yr !== null && Mo(yr, e),
      _l.forEach(a),
      Sl.forEach(a);
    for (var s = 0; s < pr.length; s++) {
      var u = pr[s];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < pr.length && ((s = pr[0]), s.blockedOn === null); )
      kp(s), s.blockedOn === null && pr.shift();
    if (((s = (e.ownerDocument || e).$$reactFormReplay), s != null))
      for (u = 0; u < s.length; u += 3) {
        var c = s[u],
          d = s[u + 1],
          p = c[sn] || null;
        if (typeof d == 'function') p || jp(s);
        else if (p) {
          var _ = null;
          if (d && d.hasAttribute('formAction')) {
            if (((c = d), (p = d[sn] || null))) _ = p.formAction;
            else if (Bd(c) !== null) continue;
          } else _ = p.action;
          typeof _ == 'function' ? (s[u + 1] = _) : (s.splice(u, 3), (u -= 3)), jp(s);
        }
      }
  }
  function Vd(e) {
    this._internalRoot = e;
  }
  (Do.prototype.render = Vd.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(i(409));
      var s = a.current,
        u = pn();
      Cp(s, u, e, a, null, null);
    }),
    (Do.prototype.unmount = Vd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          Cp(e.current, 2, null, e, null, null), co(), (a[gi] = null);
        }
      });
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = Xh();
      e = { blockedOn: null, target: e, priority: a };
      for (var s = 0; s < pr.length && a !== 0 && a < pr[s].priority; s++);
      pr.splice(s, 0, e), s === 0 && kp(e);
    }
  };
  var zp = t.version;
  if (zp !== '19.1.0') throw Error(i(527, zp, '19.1.0'));
  I.findDOMNode = function (e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == 'function'
        ? Error(i(188))
        : ((e = Object.keys(e).join(',')), Error(i(268, e)));
    return (e = m(a)), (e = e !== null ? g(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var bS = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: V,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ao.isDisabled && Ao.supportsFiber)
      try {
        (ae = Ao.inject(bS)), (X = Ao);
      } catch {}
  }
  return (
    (Ol.createRoot = function (e, a) {
      if (!l(e)) throw Error(i(299));
      var s = !1,
        u = '',
        c = Xg,
        d = Ig,
        p = Jg,
        _ = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (p = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (_ = a.unstable_transitionCallbacks)),
        (a = Op(e, 1, !1, null, null, s, u, c, d, p, _, null)),
        (e[gi] = a.current),
        xd(e),
        new Vd(a)
      );
    }),
    (Ol.hydrateRoot = function (e, a, s) {
      if (!l(e)) throw Error(i(299));
      var u = !1,
        c = '',
        d = Xg,
        p = Ig,
        _ = Jg,
        O = null,
        U = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (d = s.onUncaughtError),
          s.onCaughtError !== void 0 && (p = s.onCaughtError),
          s.onRecoverableError !== void 0 && (_ = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 && (O = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (U = s.formState)),
        (a = Op(e, 1, !0, a, s ?? null, u, c, d, p, _, O, U)),
        (a.context = Tp(null)),
        (s = a.current),
        (u = pn()),
        (u = jr(u)),
        (c = er(u)),
        (c.callback = null),
        tr(s, c, u),
        (s = u),
        (a.current.lanes = s),
        Rr(a, s),
        na(a),
        (e[gi] = a.current),
        xd(e),
        new Do(a)
      );
    }),
    (Ol.version = '19.1.0'),
    Ol
  );
}
var Gp;
function DS() {
  if (Gp) return Fd.exports;
  Gp = 1;
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
  return n(), (Fd.exports = NS()), Fd.exports;
}
var AS = DS(),
  Tl = {},
  $p;
function kS() {
  if ($p) return Tl;
  ($p = 1),
    Object.defineProperty(Tl, '__esModule', { value: !0 }),
    (Tl.parse = f),
    (Tl.serialize = g);
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
    const x = new o(),
      N = b.length;
    if (N < 2) return x;
    const C = (w == null ? void 0 : w.decode) || y;
    let D = 0;
    do {
      const E = b.indexOf('=', D);
      if (E === -1) break;
      const R = b.indexOf(';', D),
        Y = R === -1 ? N : R;
      if (E > Y) {
        D = b.lastIndexOf(';', E - 1) + 1;
        continue;
      }
      const q = h(b, D, E),
        K = m(b, E, q),
        W = b.slice(q, K);
      if (x[W] === void 0) {
        let ie = h(b, E + 1, Y),
          te = m(b, Y, ie);
        const _e = C(b.slice(ie, te));
        x[W] = _e;
      }
      D = Y + 1;
    } while (D < N);
    return x;
  }
  function h(b, w, x) {
    do {
      const N = b.charCodeAt(w);
      if (N !== 32 && N !== 9) return w;
    } while (++w < x);
    return x;
  }
  function m(b, w, x) {
    for (; w > x; ) {
      const N = b.charCodeAt(--w);
      if (N !== 32 && N !== 9) return w + 1;
    }
    return x;
  }
  function g(b, w, x) {
    const N = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!n.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const C = N(w);
    if (!t.test(C)) throw new TypeError(`argument val is invalid: ${w}`);
    let D = b + '=' + C;
    if (!x) return D;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge)) throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      D += '; Max-Age=' + x.maxAge;
    }
    if (x.domain) {
      if (!r.test(x.domain)) throw new TypeError(`option domain is invalid: ${x.domain}`);
      D += '; Domain=' + x.domain;
    }
    if (x.path) {
      if (!i.test(x.path)) throw new TypeError(`option path is invalid: ${x.path}`);
      D += '; Path=' + x.path;
    }
    if (x.expires) {
      if (!v(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      D += '; Expires=' + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (D += '; HttpOnly'),
      x.secure && (D += '; Secure'),
      x.partitioned && (D += '; Partitioned'),
      x.priority)
    )
      switch (typeof x.priority == 'string' ? x.priority.toLowerCase() : void 0) {
        case 'low':
          D += '; Priority=Low';
          break;
        case 'medium':
          D += '; Priority=Medium';
          break;
        case 'high':
          D += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == 'string' ? x.sameSite.toLowerCase() : x.sameSite) {
        case !0:
        case 'strict':
          D += '; SameSite=Strict';
          break;
        case 'lax':
          D += '; SameSite=Lax';
          break;
        case 'none':
          D += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return D;
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
  return Tl;
}
kS();
var Qp = 'popstate';
function RS(n = {}) {
  function t(i, l) {
    let { pathname: o, search: f, hash: h } = i.location;
    return hh(
      '',
      { pathname: o, search: f, hash: h },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function r(i, l) {
    return typeof l == 'string' ? l : Zl(l);
  }
  return zS(t, r, null, n);
}
function dt(n, t) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(t);
}
function $n(n, t) {
  if (!n) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jS() {
  return Math.random().toString(36).substring(2, 10);
}
function Kp(n, t) {
  return { usr: n.state, key: n.key, idx: t };
}
function hh(n, t, r = null, i) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? xs(t) : t),
    state: r,
    key: (t && t.key) || i || jS(),
  };
}
function Zl({ pathname: n = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (n += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (n += r.charAt(0) === '#' ? r : '#' + r),
    n
  );
}
function xs(n) {
  let t = {};
  if (n) {
    let r = n.indexOf('#');
    r >= 0 && ((t.hash = n.substring(r)), (n = n.substring(0, r)));
    let i = n.indexOf('?');
    i >= 0 && ((t.search = n.substring(i)), (n = n.substring(0, i))), n && (t.pathname = n);
  }
  return t;
}
function zS(n, t, r, i = {}) {
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
      D = C == null ? null : C - g;
    (g = C), m && m({ action: h, location: N.location, delta: D });
  }
  function b(C, D) {
    h = 'PUSH';
    let E = hh(N.location, C, D);
    g = y() + 1;
    let R = Kp(E, g),
      Y = N.createHref(E);
    try {
      f.pushState(R, '', Y);
    } catch (q) {
      if (q instanceof DOMException && q.name === 'DataCloneError') throw q;
      l.location.assign(Y);
    }
    o && m && m({ action: h, location: N.location, delta: 1 });
  }
  function w(C, D) {
    h = 'REPLACE';
    let E = hh(N.location, C, D);
    g = y();
    let R = Kp(E, g),
      Y = N.createHref(E);
    f.replaceState(R, '', Y), o && m && m({ action: h, location: N.location, delta: 0 });
  }
  function x(C) {
    let D = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      E = typeof C == 'string' ? C : Zl(C);
    return (
      (E = E.replace(/ $/, '%20')),
      dt(D, `No window.location.(origin|href) available to create URL for href: ${E}`),
      new URL(E, D)
    );
  }
  let N = {
    get action() {
      return h;
    },
    get location() {
      return n(l, f);
    },
    listen(C) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Qp, v),
        (m = C),
        () => {
          l.removeEventListener(Qp, v), (m = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: x,
    encodeLocation(C) {
      let D = x(C);
      return { pathname: D.pathname, search: D.search, hash: D.hash };
    },
    push: b,
    replace: w,
    go(C) {
      return f.go(C);
    },
  };
  return N;
}
function v0(n, t, r = '/') {
  return US(n, t, r, !1);
}
function US(n, t, r, i) {
  let l = typeof t == 'string' ? xs(t) : t,
    o = qa(l.pathname || '/', r);
  if (o == null) return null;
  let f = b0(n);
  LS(f);
  let h = null;
  for (let m = 0; h == null && m < f.length; ++m) {
    let g = QS(o);
    h = GS(f[m], g, i);
  }
  return h;
}
function b0(n, t = [], r = [], i = '') {
  let l = (o, f, h) => {
    let m = {
      relativePath: h === void 0 ? o.path || '' : h,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: f,
      route: o,
    };
    m.relativePath.startsWith('/') &&
      (dt(
        m.relativePath.startsWith(i),
        `Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(i.length)));
    let g = Ha([i, m.relativePath]),
      y = r.concat(m);
    o.children &&
      o.children.length > 0 &&
      (dt(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      b0(o.children, t, y, g)),
      !(o.path == null && !o.index) && t.push({ path: g, score: FS(g, o.index), routesMeta: y });
  };
  return (
    n.forEach((o, f) => {
      var h;
      if (o.path === '' || !((h = o.path) != null && h.includes('?'))) l(o, f);
      else for (let m of _0(o.path)) l(o, f, m);
    }),
    t
  );
}
function _0(n) {
  let t = n.split('/');
  if (t.length === 0) return [];
  let [r, ...i] = t,
    l = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (i.length === 0) return l ? [o, ''] : [o];
  let f = _0(i.join('/')),
    h = [];
  return (
    h.push(...f.map((m) => (m === '' ? o : [o, m].join('/')))),
    l && h.push(...f),
    h.map((m) => (n.startsWith('/') && m === '' ? '/' : m))
  );
}
function LS(n) {
  n.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : PS(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var BS = /^:[\w-]+$/,
  HS = 3,
  VS = 2,
  qS = 1,
  YS = 10,
  ZS = -2,
  Wp = (n) => n === '*';
function FS(n, t) {
  let r = n.split('/'),
    i = r.length;
  return (
    r.some(Wp) && (i += ZS),
    t && (i += VS),
    r.filter((l) => !Wp(l)).reduce((l, o) => l + (BS.test(o) ? HS : o === '' ? qS : YS), i)
  );
}
function PS(n, t) {
  return n.length === t.length && n.slice(0, -1).every((i, l) => i === t[l])
    ? n[n.length - 1] - t[t.length - 1]
    : 0;
}
function GS(n, t, r = !1) {
  let { routesMeta: i } = n,
    l = {},
    o = '/',
    f = [];
  for (let h = 0; h < i.length; ++h) {
    let m = i[h],
      g = h === i.length - 1,
      y = o === '/' ? t : t.slice(o.length) || '/',
      v = Ko({ path: m.relativePath, caseSensitive: m.caseSensitive, end: g }, y),
      b = m.route;
    if (
      (!v &&
        g &&
        r &&
        !i[i.length - 1].route.index &&
        (v = Ko({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, y)),
      !v)
    )
      return null;
    Object.assign(l, v.params),
      f.push({
        params: l,
        pathname: Ha([o, v.pathname]),
        pathnameBase: IS(Ha([o, v.pathnameBase])),
        route: b,
      }),
      v.pathnameBase !== '/' && (o = Ha([o, v.pathnameBase]));
  }
  return f;
}
function Ko(n, t) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [r, i] = $S(n.path, n.caseSensitive, n.end),
    l = t.match(r);
  if (!l) return null;
  let o = l[0],
    f = o.replace(/(.)\/+$/, '$1'),
    h = l.slice(1);
  return {
    params: i.reduce((g, { paramName: y, isOptional: v }, b) => {
      if (y === '*') {
        let x = h[b] || '';
        f = o.slice(0, o.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const w = h[b];
      return v && !w ? (g[y] = void 0) : (g[y] = (w || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: o,
    pathnameBase: f,
    pattern: n,
  };
}
function $S(n, t = !1, r = !0) {
  $n(
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
function QS(n) {
  try {
    return n
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      $n(
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
function KS(n, t = '/') {
  let { pathname: r, search: i = '', hash: l = '' } = typeof n == 'string' ? xs(n) : n;
  return { pathname: r ? (r.startsWith('/') ? r : WS(r, t)) : t, search: JS(i), hash: ex(l) };
}
function WS(n, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((l) => {
      l === '..' ? r.length > 1 && r.pop() : l !== '.' && r.push(l);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Qd(n, t, r, i) {
  return `Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function XS(n) {
  return n.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function Dh(n) {
  let t = XS(n);
  return t.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Ah(n, t, r, i = !1) {
  let l;
  typeof n == 'string'
    ? (l = xs(n))
    : ((l = { ...n }),
      dt(!l.pathname || !l.pathname.includes('?'), Qd('?', 'pathname', 'search', l)),
      dt(!l.pathname || !l.pathname.includes('#'), Qd('#', 'pathname', 'hash', l)),
      dt(!l.search || !l.search.includes('#'), Qd('#', 'search', 'hash', l)));
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
  let m = KS(l, h),
    g = f && f !== '/' && f.endsWith('/'),
    y = (o || f === '.') && r.endsWith('/');
  return !m.pathname.endsWith('/') && (g || y) && (m.pathname += '/'), m;
}
var Ha = (n) => n.join('/').replace(/\/\/+/g, '/'),
  IS = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  JS = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  ex = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function tx(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var S0 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(S0);
var nx = ['GET', ...S0];
new Set(nx);
var ws = k.createContext(null);
ws.displayName = 'DataRouter';
var vc = k.createContext(null);
vc.displayName = 'DataRouterState';
var x0 = k.createContext({ isTransitioning: !1 });
x0.displayName = 'ViewTransition';
var ax = k.createContext(new Map());
ax.displayName = 'Fetchers';
var rx = k.createContext(null);
rx.displayName = 'Await';
var Kn = k.createContext(null);
Kn.displayName = 'Navigation';
var hu = k.createContext(null);
hu.displayName = 'Location';
var Wn = k.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Wn.displayName = 'Route';
var kh = k.createContext(null);
kh.displayName = 'RouteError';
function ix(n, { relative: t } = {}) {
  dt(Es(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: i } = k.useContext(Kn),
    { hash: l, pathname: o, search: f } = mu(n, { relative: t }),
    h = o;
  return (
    r !== '/' && (h = o === '/' ? r : Ha([r, o])), i.createHref({ pathname: h, search: f, hash: l })
  );
}
function Es() {
  return k.useContext(hu) != null;
}
function Fa() {
  return (
    dt(Es(), 'useLocation() may be used only in the context of a <Router> component.'),
    k.useContext(hu).location
  );
}
var w0 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function E0(n) {
  k.useContext(Kn).static || k.useLayoutEffect(n);
}
function Yt() {
  let { isDataRoute: n } = k.useContext(Wn);
  return n ? _x() : sx();
}
function sx() {
  dt(Es(), 'useNavigate() may be used only in the context of a <Router> component.');
  let n = k.useContext(ws),
    { basename: t, navigator: r } = k.useContext(Kn),
    { matches: i } = k.useContext(Wn),
    { pathname: l } = Fa(),
    o = JSON.stringify(Dh(i)),
    f = k.useRef(!1);
  return (
    E0(() => {
      f.current = !0;
    }),
    k.useCallback(
      (m, g = {}) => {
        if (($n(f.current, w0), !f.current)) return;
        if (typeof m == 'number') {
          r.go(m);
          return;
        }
        let y = Ah(m, JSON.parse(o), l, g.relative === 'path');
        n == null && t !== '/' && (y.pathname = y.pathname === '/' ? t : Ha([t, y.pathname])),
          (g.replace ? r.replace : r.push)(y, g.state, g);
      },
      [t, r, o, l, n]
    )
  );
}
var lx = k.createContext(null);
function ux(n) {
  let t = k.useContext(Wn).outlet;
  return t && k.createElement(lx.Provider, { value: n }, t);
}
function mu(n, { relative: t } = {}) {
  let { matches: r } = k.useContext(Wn),
    { pathname: i } = Fa(),
    l = JSON.stringify(Dh(r));
  return k.useMemo(() => Ah(n, JSON.parse(l), i, t === 'path'), [n, l, i, t]);
}
function ox(n, t) {
  return O0(n, t);
}
function O0(n, t, r, i) {
  var E;
  dt(Es(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: l, static: o } = k.useContext(Kn),
    { matches: f } = k.useContext(Wn),
    h = f[f.length - 1],
    m = h ? h.params : {},
    g = h ? h.pathname : '/',
    y = h ? h.pathnameBase : '/',
    v = h && h.route;
  {
    let R = (v && v.path) || '';
    T0(
      g,
      !v || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let b = Fa(),
    w;
  if (t) {
    let R = typeof t == 'string' ? xs(t) : t;
    dt(
      y === '/' || ((E = R.pathname) == null ? void 0 : E.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (w = R);
  } else w = b;
  let x = w.pathname || '/',
    N = x;
  if (y !== '/') {
    let R = y.replace(/^\//, '').split('/');
    N = '/' + x.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let C = !o && r && r.matches && r.matches.length > 0 ? r.matches : v0(n, { pathname: N });
  $n(v || C != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    $n(
      C == null ||
        C[C.length - 1].route.element !== void 0 ||
        C[C.length - 1].route.Component !== void 0 ||
        C[C.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let D = mx(
    C &&
      C.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, m, R.params),
          pathname: Ha([y, l.encodeLocation ? l.encodeLocation(R.pathname).pathname : R.pathname]),
          pathnameBase:
            R.pathnameBase === '/'
              ? y
              : Ha([
                  y,
                  l.encodeLocation ? l.encodeLocation(R.pathnameBase).pathname : R.pathnameBase,
                ]),
        })
      ),
    f,
    r,
    i
  );
  return t && D
    ? k.createElement(
        hu.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...w },
            navigationType: 'POP',
          },
        },
        D
      )
    : D;
}
function cx() {
  let n = bx(),
    t = tx(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n),
    r = n instanceof Error ? n.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: i },
    o = { padding: '2px 4px', backgroundColor: i },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (f = k.createElement(
      k.Fragment,
      null,
      k.createElement('p', null, '💿 Hey developer 👋'),
      k.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        k.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        k.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    k.createElement(
      k.Fragment,
      null,
      k.createElement('h2', null, 'Unexpected Application Error!'),
      k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? k.createElement('pre', { style: l }, r) : null,
      f
    )
  );
}
var fx = k.createElement(cx, null),
  dx = class extends k.Component {
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
        ? k.createElement(
            Wn.Provider,
            { value: this.props.routeContext },
            k.createElement(kh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function hx({ routeContext: n, match: t, children: r }) {
  let i = k.useContext(ws);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    k.createElement(Wn.Provider, { value: n }, r)
  );
}
function mx(n, t = [], r = null, i = null) {
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
    dt(
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
      x = null;
    r &&
      ((v = o && g.route.id ? o[g.route.id] : void 0),
      (w = g.route.errorElement || fx),
      f &&
        (h < 0 && y === 0
          ? (T0(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (b = !0),
            (x = null))
          : h === y && ((b = !0), (x = g.route.hydrateFallbackElement || null))));
    let N = t.concat(l.slice(0, y + 1)),
      C = () => {
        let D;
        return (
          v
            ? (D = w)
            : b
              ? (D = x)
              : g.route.Component
                ? (D = k.createElement(g.route.Component, null))
                : g.route.element
                  ? (D = g.route.element)
                  : (D = m),
          k.createElement(hx, {
            match: g,
            routeContext: { outlet: m, matches: N, isDataRoute: r != null },
            children: D,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || y === 0)
      ? k.createElement(dx, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: v,
          children: C(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
        })
      : C();
  }, null);
}
function Rh(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gx(n) {
  let t = k.useContext(ws);
  return dt(t, Rh(n)), t;
}
function yx(n) {
  let t = k.useContext(vc);
  return dt(t, Rh(n)), t;
}
function px(n) {
  let t = k.useContext(Wn);
  return dt(t, Rh(n)), t;
}
function jh(n) {
  let t = px(n),
    r = t.matches[t.matches.length - 1];
  return dt(r.route.id, `${n} can only be used on routes that contain a unique "id"`), r.route.id;
}
function vx() {
  return jh('useRouteId');
}
function bx() {
  var i;
  let n = k.useContext(kh),
    t = yx('useRouteError'),
    r = jh('useRouteError');
  return n !== void 0 ? n : (i = t.errors) == null ? void 0 : i[r];
}
function _x() {
  let { router: n } = gx('useNavigate'),
    t = jh('useNavigate'),
    r = k.useRef(!1);
  return (
    E0(() => {
      r.current = !0;
    }),
    k.useCallback(
      async (l, o = {}) => {
        $n(r.current, w0),
          r.current &&
            (typeof l == 'number' ? n.navigate(l) : await n.navigate(l, { fromRouteId: t, ...o }));
      },
      [n, t]
    )
  );
}
var Xp = {};
function T0(n, t, r) {
  !t && !Xp[n] && ((Xp[n] = !0), $n(!1, r));
}
k.memo(Sx);
function Sx({ routes: n, future: t, state: r }) {
  return O0(n, void 0, r, t);
}
function Ip({ to: n, replace: t, state: r, relative: i }) {
  dt(Es(), '<Navigate> may be used only in the context of a <Router> component.');
  let { static: l } = k.useContext(Kn);
  $n(
    !l,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: o } = k.useContext(Wn),
    { pathname: f } = Fa(),
    h = Yt(),
    m = Ah(n, Dh(o), f, i === 'path'),
    g = JSON.stringify(m);
  return (
    k.useEffect(() => {
      h(JSON.parse(g), { replace: t, state: r, relative: i });
    }, [h, g, i, t, r]),
    null
  );
}
function xx(n) {
  return ux(n.context);
}
function bn(n) {
  dt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function wx({
  basename: n = '/',
  children: t = null,
  location: r,
  navigationType: i = 'POP',
  navigator: l,
  static: o = !1,
}) {
  dt(
    !Es(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = n.replace(/^\/*/, '/'),
    h = k.useMemo(() => ({ basename: f, navigator: l, static: o, future: {} }), [f, l, o]);
  typeof r == 'string' && (r = xs(r));
  let { pathname: m = '/', search: g = '', hash: y = '', state: v = null, key: b = 'default' } = r,
    w = k.useMemo(() => {
      let x = qa(m, f);
      return x == null
        ? null
        : { location: { pathname: x, search: g, hash: y, state: v, key: b }, navigationType: i };
    }, [f, m, g, y, v, b, i]);
  return (
    $n(
      w != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : k.createElement(
          Kn.Provider,
          { value: h },
          k.createElement(hu.Provider, { children: t, value: w })
        )
  );
}
function Ex({ children: n, location: t }) {
  return ox(mh(n), t);
}
function mh(n, t = []) {
  let r = [];
  return (
    k.Children.forEach(n, (i, l) => {
      if (!k.isValidElement(i)) return;
      let o = [...t, l];
      if (i.type === k.Fragment) {
        r.push.apply(r, mh(i.props.children, o));
        return;
      }
      dt(
        i.type === bn,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        dt(!i.props.index || !i.props.children, 'An index route cannot have child routes.');
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
      i.props.children && (f.children = mh(i.props.children, o)), r.push(f);
    }),
    r
  );
}
var Po = 'get',
  Go = 'application/x-www-form-urlencoded';
function bc(n) {
  return n != null && typeof n.tagName == 'string';
}
function Ox(n) {
  return bc(n) && n.tagName.toLowerCase() === 'button';
}
function Tx(n) {
  return bc(n) && n.tagName.toLowerCase() === 'form';
}
function Cx(n) {
  return bc(n) && n.tagName.toLowerCase() === 'input';
}
function Mx(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Nx(n, t) {
  return n.button === 0 && (!t || t === '_self') && !Mx(n);
}
var Ro = null;
function Dx() {
  if (Ro === null)
    try {
      new FormData(document.createElement('form'), 0), (Ro = !1);
    } catch {
      Ro = !0;
    }
  return Ro;
}
var Ax = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Kd(n) {
  return n != null && !Ax.has(n)
    ? ($n(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Go}"`
      ),
      null)
    : n;
}
function kx(n, t) {
  let r, i, l, o, f;
  if (Tx(n)) {
    let h = n.getAttribute('action');
    (i = h ? qa(h, t) : null),
      (r = n.getAttribute('method') || Po),
      (l = Kd(n.getAttribute('enctype')) || Go),
      (o = new FormData(n));
  } else if (Ox(n) || (Cx(n) && (n.type === 'submit' || n.type === 'image'))) {
    let h = n.form;
    if (h == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let m = n.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((i = m ? qa(m, t) : null),
      (r = n.getAttribute('formmethod') || h.getAttribute('method') || Po),
      (l = Kd(n.getAttribute('formenctype')) || Kd(h.getAttribute('enctype')) || Go),
      (o = new FormData(h, n)),
      !Dx())
    ) {
      let { name: g, type: y, value: v } = n;
      if (y === 'image') {
        let b = g ? `${g}.` : '';
        o.append(`${b}x`, '0'), o.append(`${b}y`, '0');
      } else g && o.append(g, v);
    }
  } else {
    if (bc(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Po), (i = null), (l = Go), (f = n);
  }
  return (
    o && l === 'text/plain' && ((f = o), (o = void 0)),
    { action: i, method: r.toLowerCase(), encType: l, formData: o, body: f }
  );
}
function zh(n, t) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(t);
}
async function Rx(n, t) {
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
function jx(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' && typeof n.imageSrcSet == 'string' && typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function zx(n, t, r) {
  let i = await Promise.all(
    n.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let f = await Rx(o, r);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return Hx(
    i
      .flat(1)
      .filter(jx)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet' ? { ...l, rel: 'prefetch', as: 'style' } : { ...l, rel: 'prefetch' }
      )
  );
}
function Jp(n, t, r, i, l, o) {
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
function Ux(n, t, { includeHydrateFallback: r } = {}) {
  return Lx(
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
function Lx(n) {
  return [...new Set(n)];
}
function Bx(n) {
  let t = {},
    r = Object.keys(n).sort();
  for (let i of r) t[i] = n[i];
  return t;
}
function Hx(n, t) {
  let r = new Set();
  return (
    new Set(t),
    n.reduce((i, l) => {
      let o = JSON.stringify(Bx(l));
      return r.has(o) || (r.add(o), i.push({ key: o, link: l })), i;
    }, [])
  );
}
var Vx = new Set([100, 101, 204, 205]);
function qx(n, t) {
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
function C0() {
  let n = k.useContext(ws);
  return zh(n, 'You must render this element inside a <DataRouterContext.Provider> element'), n;
}
function Yx() {
  let n = k.useContext(vc);
  return (
    zh(n, 'You must render this element inside a <DataRouterStateContext.Provider> element'), n
  );
}
var Uh = k.createContext(void 0);
Uh.displayName = 'FrameworkContext';
function M0() {
  let n = k.useContext(Uh);
  return zh(n, 'You must render this element inside a <HydratedRouter> element'), n;
}
function Zx(n, t) {
  let r = k.useContext(Uh),
    [i, l] = k.useState(!1),
    [o, f] = k.useState(!1),
    { onFocus: h, onBlur: m, onMouseEnter: g, onMouseLeave: y, onTouchStart: v } = t,
    b = k.useRef(null);
  k.useEffect(() => {
    if ((n === 'render' && f(!0), n === 'viewport')) {
      let N = (D) => {
          D.forEach((E) => {
            f(E.isIntersecting);
          });
        },
        C = new IntersectionObserver(N, { threshold: 0.5 });
      return (
        b.current && C.observe(b.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [n]),
    k.useEffect(() => {
      if (i) {
        let N = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(N);
        };
      }
    }, [i]);
  let w = () => {
      l(!0);
    },
    x = () => {
      l(!1), f(!1);
    };
  return r
    ? n !== 'intent'
      ? [o, b, {}]
      : [
          o,
          b,
          {
            onFocus: Cl(h, w),
            onBlur: Cl(m, x),
            onMouseEnter: Cl(g, w),
            onMouseLeave: Cl(y, x),
            onTouchStart: Cl(v, w),
          },
        ]
    : [!1, b, {}];
}
function Cl(n, t) {
  return (r) => {
    n && n(r), r.defaultPrevented || t(r);
  };
}
function Fx({ page: n, ...t }) {
  let { router: r } = C0(),
    i = k.useMemo(() => v0(r.routes, n, r.basename), [r.routes, n, r.basename]);
  return i ? k.createElement(Gx, { page: n, matches: i, ...t }) : null;
}
function Px(n) {
  let { manifest: t, routeModules: r } = M0(),
    [i, l] = k.useState([]);
  return (
    k.useEffect(() => {
      let o = !1;
      return (
        zx(n, t, r).then((f) => {
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
function Gx({ page: n, matches: t, ...r }) {
  let i = Fa(),
    { manifest: l, routeModules: o } = M0(),
    { basename: f } = C0(),
    { loaderData: h, matches: m } = Yx(),
    g = k.useMemo(() => Jp(n, t, m, l, i, 'data'), [n, t, m, l, i]),
    y = k.useMemo(() => Jp(n, t, m, l, i, 'assets'), [n, t, m, l, i]),
    v = k.useMemo(() => {
      if (n === i.pathname + i.search + i.hash) return [];
      let x = new Set(),
        N = !1;
      if (
        (t.forEach((D) => {
          var R;
          let E = l.routes[D.route.id];
          !E ||
            !E.hasLoader ||
            ((!g.some((Y) => Y.route.id === D.route.id) &&
              D.route.id in h &&
              (R = o[D.route.id]) != null &&
              R.shouldRevalidate) ||
            E.hasClientLoader
              ? (N = !0)
              : x.add(D.route.id));
        }),
        x.size === 0)
      )
        return [];
      let C = qx(n, f);
      return (
        N &&
          x.size > 0 &&
          C.searchParams.set(
            '_routes',
            t
              .filter((D) => x.has(D.route.id))
              .map((D) => D.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [f, h, i, l, g, t, n, o]),
    b = k.useMemo(() => Ux(y, l), [y, l]),
    w = Px(y);
  return k.createElement(
    k.Fragment,
    null,
    v.map((x) => k.createElement('link', { key: x, rel: 'prefetch', as: 'fetch', href: x, ...r })),
    b.map((x) => k.createElement('link', { key: x, rel: 'modulepreload', href: x, ...r })),
    w.map(({ key: x, link: N }) => k.createElement('link', { key: x, ...N }))
  );
}
function $x(...n) {
  return (t) => {
    n.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var N0 =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  N0 && (window.__reactRouterVersion = '7.5.3');
} catch {}
function Qx({ basename: n, children: t, window: r }) {
  let i = k.useRef();
  i.current == null && (i.current = RS({ window: r, v5Compat: !0 }));
  let l = i.current,
    [o, f] = k.useState({ action: l.action, location: l.location }),
    h = k.useCallback(
      (m) => {
        k.startTransition(() => f(m));
      },
      [f]
    );
  return (
    k.useLayoutEffect(() => l.listen(h), [l, h]),
    k.createElement(wx, {
      basename: n,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
var D0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  A0 = k.forwardRef(function (
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
    let { basename: x } = k.useContext(Kn),
      N = typeof g == 'string' && D0.test(g),
      C,
      D = !1;
    if (typeof g == 'string' && N && ((C = g), N0))
      try {
        let te = new URL(window.location.href),
          _e = g.startsWith('//') ? new URL(te.protocol + g) : new URL(g),
          be = qa(_e.pathname, x);
        _e.origin === te.origin && be != null ? (g = be + _e.search + _e.hash) : (D = !0);
      } catch {
        $n(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let E = ix(g, { relative: l }),
      [R, Y, q] = Zx(i, b),
      K = Ix(g, {
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
    let ie = k.createElement('a', {
      ...b,
      ...q,
      href: C || E,
      onClick: D || o ? t : W,
      ref: $x(w, Y),
      target: m,
      'data-discover': !N && r === 'render' ? 'true' : void 0,
    });
    return R && !N ? k.createElement(k.Fragment, null, ie, k.createElement(Fx, { page: E })) : ie;
  });
A0.displayName = 'Link';
var Kx = k.forwardRef(function (
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
  let v = mu(f, { relative: g.relative }),
    b = Fa(),
    w = k.useContext(vc),
    { navigator: x, basename: N } = k.useContext(Kn),
    C = w != null && aw(v) && h === !0,
    D = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname,
    E = b.pathname,
    R = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  r || ((E = E.toLowerCase()), (R = R ? R.toLowerCase() : null), (D = D.toLowerCase())),
    R && N && (R = qa(R, N) || R);
  const Y = D !== '/' && D.endsWith('/') ? D.length - 1 : D.length;
  let q = E === D || (!l && E.startsWith(D) && E.charAt(Y) === '/'),
    K = R != null && (R === D || (!l && R.startsWith(D) && R.charAt(D.length) === '/')),
    W = { isActive: q, isPending: K, isTransitioning: C },
    ie = q ? t : void 0,
    te;
  typeof i == 'function'
    ? (te = i(W))
    : (te = [i, q ? 'active' : null, K ? 'pending' : null, C ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let _e = typeof o == 'function' ? o(W) : o;
  return k.createElement(
    A0,
    { ...g, 'aria-current': ie, className: te, ref: y, style: _e, to: f, viewTransition: h },
    typeof m == 'function' ? m(W) : m
  );
});
Kx.displayName = 'NavLink';
var Wx = k.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: i,
      replace: l,
      state: o,
      method: f = Po,
      action: h,
      onSubmit: m,
      relative: g,
      preventScrollReset: y,
      viewTransition: v,
      ...b
    },
    w
  ) => {
    let x = tw(),
      N = nw(h, { relative: g }),
      C = f.toLowerCase() === 'get' ? 'get' : 'post',
      D = typeof h == 'string' && D0.test(h),
      E = (R) => {
        if ((m && m(R), R.defaultPrevented)) return;
        R.preventDefault();
        let Y = R.nativeEvent.submitter,
          q = (Y == null ? void 0 : Y.getAttribute('formmethod')) || f;
        x(Y || R.currentTarget, {
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
    return k.createElement('form', {
      ref: w,
      method: C,
      action: N,
      onSubmit: i ? m : E,
      ...b,
      'data-discover': !D && n === 'render' ? 'true' : void 0,
    });
  }
);
Wx.displayName = 'Form';
function Xx(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function k0(n) {
  let t = k.useContext(ws);
  return dt(t, Xx(n)), t;
}
function Ix(
  n,
  { target: t, replace: r, state: i, preventScrollReset: l, relative: o, viewTransition: f } = {}
) {
  let h = Yt(),
    m = Fa(),
    g = mu(n, { relative: o });
  return k.useCallback(
    (y) => {
      if (Nx(y, t)) {
        y.preventDefault();
        let v = r !== void 0 ? r : Zl(m) === Zl(g);
        h(n, { replace: v, state: i, preventScrollReset: l, relative: o, viewTransition: f });
      }
    },
    [m, h, g, r, i, t, n, l, o, f]
  );
}
var Jx = 0,
  ew = () => `__${String(++Jx)}__`;
function tw() {
  let { router: n } = k0('useSubmit'),
    { basename: t } = k.useContext(Kn),
    r = vx();
  return k.useCallback(
    async (i, l = {}) => {
      let { action: o, method: f, encType: h, formData: m, body: g } = kx(i, t);
      if (l.navigate === !1) {
        let y = l.fetcherKey || ew();
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
function nw(n, { relative: t } = {}) {
  let { basename: r } = k.useContext(Kn),
    i = k.useContext(Wn);
  dt(i, 'useFormAction must be used inside a RouteContext');
  let [l] = i.matches.slice(-1),
    o = { ...mu(n || '.', { relative: t }) },
    f = Fa();
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
    Zl(o)
  );
}
function aw(n, t = {}) {
  let r = k.useContext(x0);
  dt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = k0('useViewTransitionState'),
    l = mu(n, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = qa(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    f = qa(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Ko(l.pathname, f) != null || Ko(l.pathname, o) != null;
}
new TextEncoder();
[...Vx];
const rw = '_header_18lk3_1',
  iw = '_logo_18lk3_111',
  sw = '_list_18lk3_149',
  lw = '_search_18lk3_157',
  uw = '_menu_18lk3_149',
  ow = '_hint_18lk3_357',
  he = {
    'header-wrapper': '_header-wrapper_18lk3_1',
    header: rw,
    'add-header-menu': '_add-header-menu_18lk3_47',
    'header-case': '_header-case_18lk3_55',
    'header-inner': '_header-inner_18lk3_79',
    'home-link-wrapper': '_home-link-wrapper_18lk3_95',
    'logo-header': '_logo-header_18lk3_111',
    logo: iw,
    'menu-search': '_menu-search_18lk3_149',
    list: sw,
    search: lw,
    menu: uw,
    'input-search': '_input-search_18lk3_211',
    'menu-list': '_menu-list_18lk3_229',
    'home-link': '_home-link_18lk3_95',
    'counter-cart': '_counter-cart_18lk3_273',
    'sing-up-menu': '_sing-up-menu_18lk3_305',
    'list-sing-up': '_list-sing-up_18lk3_341',
    'button-login': '_button-login_18lk3_349',
    'button-sing-up': '_button-sing-up_18lk3_349',
    hint: ow,
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
  cw = '/eCommerce/assets/logo-BIzYF2SY.png',
  Fl = k.createContext(null),
  R0 = k.createContext(() => {});
function fw() {
  const n = Fa(),
    [t, r] = k.useState(0);
  k.useEffect(() => {
    r((g) => g + 1);
  }, [n.pathname]);
  const [i, l] = k.useState(!1),
    [, o] = k.useState(0);
  function f() {
    l(!i);
  }
  const h = localStorage.getItem('firstName');
  let m = 'Guest';
  return (
    h && typeof h == 'string' && (m = h),
    S.jsx(
      'div',
      {
        className: he['header-wrapper'],
        children: S.jsxs(Fl.Provider, {
          value: m,
          children: [
            S.jsx(vw, { isOpen: i, toggleMenu: f }),
            S.jsx('header', {
              className: he.header,
              children: S.jsxs('div', {
                className: he['header-case'],
                children: [
                  S.jsxs('div', {
                    className: he['header-inner'],
                    children: [
                      S.jsxs('div', {
                        className: he['home-link-wrapper'],
                        children: [S.jsx(z0, {}), S.jsx(j0, {})],
                      }),
                      S.jsx(dw, {}),
                    ],
                  }),
                  S.jsx(R0.Provider, {
                    value: () => {
                      o((g) => g + 1);
                    },
                    children: S.jsx(hw, {}),
                  }),
                ],
              }),
            }),
          ],
        }),
      },
      t
    )
  );
}
function j0() {
  const n = Yt();
  return S.jsx('div', {
    className: he['home-link'],
    children: S.jsx('span', {
      onClick: () => void n('/'),
      className: `material-symbols-outlined ${he['main-home-icon']}`,
      children: 'home',
    }),
  });
}
function z0() {
  return S.jsx('div', {
    className: he['logo-header'],
    children: S.jsx('img', { className: he.logo, src: cw, alt: 'logo' }),
  });
}
function dw() {
  return S.jsxs('div', {
    className: he.search,
    children: [
      S.jsx('div', { className: he['menu-search'], children: 'Search in ▾' }),
      S.jsx('input', {
        type: 'search',
        className: he['input-search'],
        placeholder: 'Search products… 🔍',
      }),
    ],
  });
}
function hw() {
  return S.jsxs('nav', {
    className: he.menu,
    children: [
      S.jsxs('div', {
        className: he['nav-home-link-wrapper'],
        children: [S.jsx(z0, {}), S.jsx(j0, {})],
      }),
      S.jsxs('ul', {
        className: he['menu-list'],
        children: [S.jsx(mw, {}), S.jsx(gw, {}), S.jsx(yw, {}), S.jsx(pw, {})],
      }),
    ],
  });
}
function mw() {
  const n = Yt(),
    t = k.useContext(Fl) ?? '',
    r = k.useContext(R0);
  let i = t,
    l = 'LOG OUT',
    o = 'View Profile',
    f = 'PROFILE';
  return (
    k.useContext(Fl) === 'Guest' &&
      ((i = 'Guest'), (l = 'LOG IN'), (o = "Don't have an account?"), (f = 'Sing Up')),
    S.jsxs('li', {
      className: `${he.list} ${he['list-sing-up']}`,
      children: [
        S.jsx('div', {
          className: he['img-list'],
          children: S.jsx('span', {
            className: `material-symbols-outlined ${he['person-icon']}`,
            children: 'person',
          }),
        }),
        S.jsx('div', { className: he['text-list'], children: i }),
        S.jsxs('div', {
          className: he['sing-up-menu'],
          children: [
            S.jsx('div', {
              onClick: () => {
                l === 'LOG IN' ? n('/login') : (localStorage.removeItem('firstName'), r());
              },
              className: he['button-login'],
              children: l,
            }),
            S.jsx('span', { className: he.hint, children: o }),
            ' ',
            S.jsx('div', {
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
function gw() {
  const n = Yt();
  return S.jsxs('li', {
    onClick: () => void n('/orders'),
    className: `${he.list} ${he['list-order']}`,
    children: [
      S.jsx('div', {
        className: he['img-list'],
        children: S.jsx('span', {
          className: `material-symbols-outlined ${he['order-icon']}`,
          children: 'package_2',
        }),
      }),
      S.jsx('div', { className: he['text-list'], children: 'Orders' }),
    ],
  });
}
function yw() {
  const n = Yt();
  return S.jsxs('li', {
    onClick: () => void n('/favorites'),
    className: `${he.list} ${he['list-favorite']}`,
    children: [
      ' ',
      S.jsx('div', {
        className: he['img-list'],
        children: S.jsx('span', {
          className: `material-symbols-outlined ${he['favorite-icon']}`,
          children: 'favorite',
        }),
      }),
      S.jsx('div', { className: he['text-list'], children: 'Favorites' }),
    ],
  });
}
function pw() {
  const n = Yt();
  return S.jsxs('li', {
    onClick: () => void n('/cart'),
    className: `${he.list} ${he['list-counter']}`,
    children: [
      S.jsx('div', { className: he['counter-cart'], children: '0' }),
      S.jsx('div', {
        className: he['img-list'],
        children: S.jsx('span', {
          className: `material-symbols-outlined ${he['cart-icon']}`,
          children: 'shopping_cart',
        }),
      }),
      S.jsx('div', { className: he['text-list'], children: 'Cart' }),
    ],
  });
}
function vw({ isOpen: n, toggleMenu: t }) {
  return (
    k.useEffect(() => {
      document.body.style.overflow = n ? 'hidden' : '';
    }, [n]),
    S.jsxs(S.Fragment, {
      children: [
        S.jsx('div', {
          onClick: t,
          className: `${he['canvas-aside-menu']} ${n ? he['visible-canvas-aside-menu'] : he['hidden-canvas-aside-menu']}`,
        }),
        S.jsx(bw, { isOpen: n, toggleMenu: t }),
        S.jsx(xw, { toggleMenu: t }),
      ],
    })
  );
}
function bw({ isOpen: n, toggleMenu: t }) {
  return S.jsxs('div', {
    className: `${he['aside-add-menu']} ${n ? he['open-aside-add-menu'] : he['close-aside-add-menu']}`,
    children: [
      S.jsx('div', {
        onClick: t,
        className: he['button-close-aside-menu'],
        children: S.jsx('span', {
          className: `material-symbols-outlined ${he['aside-close-icon']}`,
          children: 'close',
        }),
      }),
      S.jsx(_w, { toggleMenu: t }),
      S.jsx(Sw, { toggleMenu: t }),
    ],
  });
}
function _w({ toggleMenu: n }) {
  const t = Yt(),
    r = k.useContext(Fl) ?? '',
    i = k.useContext(Fl) === 'Guest' ? 'Guest' : r;
  return S.jsxs('div', {
    onClick: () => {
      n(), i !== 'Guest' && t('/profile');
    },
    className: he['aside-menu-header'],
    children: [
      S.jsx('span', {
        className: `material-symbols-outlined ${he['aside-person-icon']}`,
        children: 'manage_accounts',
      }),
      S.jsxs('span', { className: he['user-name'], children: ['Hello, ', i] }),
      S.jsx('span', { className: he['select-dot'] }),
    ],
  });
}
function Sw({ toggleMenu: n }) {
  const t = Yt();
  return S.jsxs('div', {
    onClick: () => {
      n(), t('/team');
    },
    className: he['aside-menu-team'],
    children: [
      S.jsx('span', { className: he['about-team'], children: 'Our Friendly Team' }),
      S.jsx('span', {
        className: `material-symbols-outlined ${he['aside-menu-arrow']}`,
        children: 'arrow_forward_ios',
      }),
    ],
  });
}
function xw({ toggleMenu: n }) {
  const t = Yt();
  return S.jsx('div', {
    className: he['add-header-menu'],
    children: S.jsxs('div', {
      className: he['wrapper-add-header-menu'],
      children: [
        S.jsxs('div', {
          onClick: n,
          className: he['add-menu-button-all'],
          children: [
            S.jsx('span', { className: 'material-symbols-outlined', children: 'menu' }),
            'All',
          ],
        }),
        S.jsx('div', {
          className: he['add-menu-list'],
          children: S.jsx('div', {
            onClick: () => void t('/catalog'),
            className: he['add-menu-catalog'],
            children: 'Catalog',
          }),
        }),
        S.jsx('div', {
          className: he['add-menu-list'],
          children: S.jsx('div', { className: he['add-menu-pet-food'], children: 'Pet food' }),
        }),
        S.jsx('div', {
          className: he['add-menu-list'],
          children: S.jsx('div', {
            className: he['add-menu-accessories'],
            children: 'Accessories',
          }),
        }),
        S.jsx('div', {
          className: he['add-menu-list'],
          children: S.jsx('div', { className: he['add-menu-promotions'], children: 'Promotions' }),
        }),
      ],
    }),
  });
}
const ww = '_footer_fr6pe_1',
  fa = {
    footer: ww,
    'footer-case': '_footer-case_fr6pe_21',
    'about-link': '_about-link_fr6pe_41',
    'shop-link': '_shop-link_fr6pe_41',
    'sticker-link': '_sticker-link_fr6pe_41',
    'help-link': '_help-link_fr6pe_41',
  };
function Ew() {
  return S.jsx('footer', {
    className: fa.footer,
    children: S.jsxs('div', {
      className: fa['footer-case'],
      children: [S.jsx(Tw, {}), S.jsx(Mw, {}), S.jsx(Cw, {}), S.jsx(Ow, {})],
    }),
  });
}
function Ow() {
  const n = Yt();
  return S.jsx('div', {
    onClick: () => void n('/about'),
    className: `${fa.about} ${fa['about-link']}`,
    children: 'ABOUT US',
  });
}
function Tw() {
  return S.jsx('div', { className: `${fa.shop} ${fa['shop-link']}`, children: 'OUR SHOPS' });
}
function Cw() {
  return S.jsx('div', {
    className: `${fa.sticker} ${fa['sticker-link']}`,
    children: 'Our Telegram Stickers',
  });
}
function Mw() {
  return S.jsx('div', {
    className: `${fa.help} ${fa['help-link']}`,
    children: 'Help Homeless Animals',
  });
}
function Nw() {
  return S.jsxs(S.Fragment, { children: [S.jsx(fw, {}), S.jsx(xx, {}), S.jsx(Ew, {})] });
}
const Dw = '_main_dq78l_1',
  Aw = '_recommend_dq78l_215',
  kw = '_brands_dq78l_217',
  Rw = '_img0_dq78l_343',
  jw = '_img1_dq78l_343',
  zw = '_img2_dq78l_343',
  Uw = '_img3_dq78l_343',
  Lw = '_img4_dq78l_343',
  Bw = '_img5_dq78l_343',
  Hw = '_img6_dq78l_415',
  Vw = '_img7_dq78l_415',
  qw = '_img8_dq78l_415',
  Yw = '_img9_dq78l_415',
  Zw = '_img10_dq78l_415',
  Fw = '_img11_dq78l_415',
  Pw = '_img12_dq78l_415',
  Gw = '_img13_dq78l_415',
  We = {
    main: Dw,
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
    recommend: Aw,
    brands: kw,
    'list-recommend': '_list-recommend_dq78l_231',
    'list-brands': '_list-brands_dq78l_313',
    img0: Rw,
    img1: jw,
    img2: zw,
    img3: Uw,
    img4: Lw,
    img5: Bw,
    img6: Hw,
    img7: Vw,
    img8: qw,
    img9: Yw,
    img10: Zw,
    img11: Fw,
    img12: Pw,
    img13: Gw,
    'pets-logo-icon': '_pets-logo-icon_dq78l_503',
  };
function $w() {
  return S.jsxs('h1', {
    className: We['title-main'],
    children: [
      'PET ',
      S.jsx('span', {
        className: `material-symbols-outlined ${We['pets-logo-icon']}`,
        children: 'pets',
      }),
      ' ',
      'SUPPLIES',
    ],
  });
}
function Qw() {
  return S.jsxs('div', {
    className: We['main-info-block'],
    children: [
      S.jsx('span', {
        className: `material-symbols-outlined ${We['left-arrow']}`,
        children: 'pets',
      }),
      S.jsx('span', {
        className: `material-symbols-outlined ${We['right-arrow']}`,
        children: 'pets',
      }),
    ],
  });
}
function Kw() {
  return S.jsxs('aside', {
    className: We['aside-info-block'],
    children: [
      S.jsx('div', { className: We['aside-up-block'] }),
      S.jsx('div', { className: We['aside-down-block'] }),
    ],
  });
}
function Ww() {
  return S.jsx('h2', { className: We.recommend, children: 'Our Recommendations' });
}
function Xw() {
  return S.jsxs('div', {
    className: We['list-recommend'],
    children: [
      S.jsx(Iw, {}),
      S.jsx('span', {
        className: `material-symbols-outlined ${We['small-left-arrow']}`,
        children: 'play_circle',
      }),
      S.jsx('span', {
        className: `material-symbols-outlined ${We['small-right-arrow']}`,
        children: 'play_circle',
      }),
    ],
  });
}
function Iw() {
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx('div', { className: We.img0 }),
      S.jsx('div', { className: We.img1 }),
      S.jsx('div', { className: We.img2 }),
      S.jsx('div', { className: We.img3 }),
      S.jsx('div', { className: We.img4 }),
      S.jsx('div', { className: We.img5 }),
    ],
  });
}
function Jw() {
  return S.jsx('h2', { className: We.brands, children: 'Brands' });
}
function eE() {
  return S.jsxs('div', {
    className: We['list-brands'],
    children: [
      S.jsx(tE, {}),
      S.jsx('span', {
        className: `material-symbols-outlined ${We['brand-left-arrow']}`,
        children: 'play_circle',
      }),
      S.jsx('span', {
        className: `material-symbols-outlined ${We['brand-right-arrow']}`,
        children: 'play_circle',
      }),
    ],
  });
}
function tE() {
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx('div', { className: We.img6 }),
      S.jsx('div', { className: We.img7 }),
      S.jsx('div', { className: We.img8 }),
      S.jsx('div', { className: We.img9 }),
      S.jsx('div', { className: We.img10 }),
      S.jsx('div', { className: We.img11 }),
      S.jsx('div', { className: We.img12 }),
      S.jsx('div', { className: We.img13 }),
    ],
  });
}
function nE() {
  return (
    k.useEffect(() => {
      document.title = 'Home | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('main', {
      className: We.main,
      children: [
        S.jsx($w, {}),
        S.jsxs('div', { className: We['info-blocks'], children: [S.jsx(Qw, {}), S.jsx(Kw, {})] }),
        S.jsx(Ww, {}),
        S.jsx(Xw, {}),
        S.jsx(Jw, {}),
        S.jsx(eE, {}),
      ],
    })
  );
}
const aE =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%208L3.07945%204.30466C4.29638%202.84434%206.09909%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208L12.9206%2011.6953C11.7036%2013.1557%209.90091%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208ZM8%2011C9.65685%2011%2011%209.65685%2011%208C11%206.34315%209.65685%205%208%205C6.34315%205%205%206.34315%205%208C5%209.65685%206.34315%2011%208%2011Z'%20fill='%23000000'/%3e%3c/svg%3e",
  rE =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2016H13L10.8368%2013.3376C9.96488%2013.7682%208.99592%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208L3.07945%204.30466C3.14989%204.22013%203.22229%204.13767%203.29656%204.05731L0%200H3L16%2016ZM5.35254%206.58774C5.12755%207.00862%205%207.48941%205%208C5%209.65685%206.34315%2011%208%2011C8.29178%2011%208.57383%2010.9583%208.84053%2010.8807L5.35254%206.58774Z'%20fill='%23000000'/%3e%3cpath%20d='M16%208L14.2278%2010.1266L7.63351%202.01048C7.75518%202.00351%207.87739%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208Z'%20fill='%23000000'/%3e%3c/svg%3e";
function ev({ register: n, errorMessage: t, type: r, label: i, placeholder: l, required: o }) {
  const [f, h] = k.useState(!1),
    m = r === 'password',
    g = m ? (f ? 'text' : 'password') : r,
    y = r;
  return S.jsxs('div', {
    className: 'flex flex-col w-full',
    children: [
      S.jsxs('label', {
        htmlFor: y,
        children: [i, S.jsx('span', { className: 'text-red-700', children: '*' })],
      }),
      S.jsxs('div', {
        className: 'relative',
        children: [
          S.jsx('input', {
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
            S.jsx('div', {
              className: 'absolute right-[1%] top-1/2 -translate-y-1/2 cursor-pointer opacity-50',
              onClick: () => {
                h((v) => !v);
              },
              children: S.jsx('img', {
                className: 'w-[20px]',
                src: f ? rE : aE,
                alt: 'Toggle password visibility',
              }),
            }),
        ],
      }),
      S.jsx('p', {
        className: 'text-sm h-fit font-main-bd text-red-500 h-5 mt-1',
        children: t ?? ' ',
      }),
    ],
  });
}
var gu = (n) => n.type === 'checkbox',
  ei = (n) => n instanceof Date,
  tn = (n) => n == null;
const U0 = (n) => typeof n == 'object';
var wt = (n) => !tn(n) && !Array.isArray(n) && U0(n) && !ei(n),
  L0 = (n) => (wt(n) && n.target ? (gu(n.target) ? n.target.checked : n.target.value) : n),
  iE = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  B0 = (n, t) => n.has(iE(t)),
  sE = (n) => {
    const t = n.constructor && n.constructor.prototype;
    return wt(t) && t.hasOwnProperty('isPrototypeOf');
  },
  Lh = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Vt(n) {
  let t;
  const r = Array.isArray(n),
    i = typeof FileList < 'u' ? n instanceof FileList : !1;
  if (n instanceof Date) t = new Date(n);
  else if (n instanceof Set) t = new Set(n);
  else if (!(Lh && (n instanceof Blob || i)) && (r || wt(n)))
    if (((t = r ? [] : {}), !r && !sE(n))) t = n;
    else for (const l in n) n.hasOwnProperty(l) && (t[l] = Vt(n[l]));
  else return n;
  return t;
}
var _c = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  xt = (n) => n === void 0,
  ue = (n, t, r) => {
    if (!t || !wt(n)) return r;
    const i = _c(t.split(/[,[\].]+?/)).reduce((l, o) => (tn(l) ? l : l[o]), n);
    return xt(i) || i === n ? (xt(n[t]) ? r : n[t]) : i;
  },
  Sn = (n) => typeof n == 'boolean',
  Bh = (n) => /^\w*$/.test(n),
  H0 = (n) => _c(n.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Je = (n, t, r) => {
    let i = -1;
    const l = Bh(t) ? [t] : H0(t),
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
const Wo = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  qn = {
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
  lE = ee.createContext(null),
  Hh = () => ee.useContext(lE);
var V0 = (n, t, r, i = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const o in n)
      Object.defineProperty(l, o, {
        get: () => {
          const f = o;
          return (
            t._proxyFormState[f] !== qn.all && (t._proxyFormState[f] = !i || qn.all),
            r && (r[f] = !0),
            n[f]
          );
        },
      });
    return l;
  },
  gh = (n) => tn(n) || !U0(n);
function Ua(n, t) {
  if (gh(n) || gh(t)) return n === t;
  if (ei(n) && ei(t)) return n.getTime() === t.getTime();
  const r = Object.keys(n),
    i = Object.keys(t);
  if (r.length !== i.length) return !1;
  for (const l of r) {
    const o = n[l];
    if (!i.includes(l)) return !1;
    if (l !== 'ref') {
      const f = t[l];
      if (
        (ei(o) && ei(f)) || (wt(o) && wt(f)) || (Array.isArray(o) && Array.isArray(f))
          ? !Ua(o, f)
          : o !== f
      )
        return !1;
    }
  }
  return !0;
}
const q0 = (n, t) => {
  const r = k.useRef(t);
  Ua(t, r.current) || (r.current = t), k.useEffect(n, r.current);
};
function uE(n) {
  const t = Hh(),
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
    q0(
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
    ee.useMemo(() => V0(f, r, m.current, !1), [f, r])
  );
}
var la = (n) => typeof n == 'string',
  Y0 = (n, t, r, i, l) =>
    la(n)
      ? (i && t.watch.add(n), ue(r, n, l))
      : Array.isArray(n)
        ? n.map((o) => (i && t.watch.add(o), ue(r, o)))
        : (i && (t.watchAll = !0), r);
function Z0(n) {
  const t = Hh(),
    { control: r = t.control, name: i, defaultValue: l, disabled: o, exact: f } = n || {},
    [h, m] = ee.useState(r._getWatch(i, l));
  return (
    q0(
      () =>
        r._subscribe({
          name: i,
          formState: { values: !0 },
          exact: f,
          callback: (g) => !o && m(Y0(i, r._names, g.values || r._formValues, !1, l)),
        }),
      [i, l, o, f]
    ),
    ee.useEffect(() => r._removeUnmounted()),
    h
  );
}
function oE(n) {
  const t = Hh(),
    { name: r, disabled: i, control: l = t.control, shouldUnregister: o } = n,
    f = B0(l._names.array, r),
    h = Z0({
      control: l,
      name: r,
      defaultValue: ue(l._formValues, r, ue(l._defaultValues, r, n.defaultValue)),
      exact: !0,
    }),
    m = uE({ control: l, name: r, exact: !0 }),
    g = ee.useRef(n),
    y = ee.useRef(
      l.register(r, { ...n.rules, value: h, ...(Sn(n.disabled) ? { disabled: n.disabled } : {}) })
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
      (C) => y.current.onChange({ target: { value: L0(C), name: r }, type: Wo.CHANGE }),
      [r]
    ),
    w = ee.useCallback(
      () => y.current.onBlur({ target: { value: ue(l._formValues, r), name: r }, type: Wo.BLUR }),
      [r, l._formValues]
    ),
    x = ee.useCallback(
      (C) => {
        const D = ue(l._fields, r);
        D &&
          C &&
          (D._f.ref = {
            focus: () => C.focus(),
            select: () => C.select(),
            setCustomValidity: (E) => C.setCustomValidity(E),
            reportValidity: () => C.reportValidity(),
          });
      },
      [l._fields, r]
    ),
    N = ee.useMemo(
      () => ({
        name: r,
        value: h,
        ...(Sn(i) || m.disabled ? { disabled: m.disabled || i } : {}),
        onChange: b,
        onBlur: w,
        ref: x,
      }),
      [r, i, m.disabled, b, w, x, h]
    );
  return (
    ee.useEffect(() => {
      const C = l._options.shouldUnregister || o;
      l.register(r, {
        ...g.current.rules,
        ...(Sn(g.current.disabled) ? { disabled: g.current.disabled } : {}),
      });
      const D = (E, R) => {
        const Y = ue(l._fields, E);
        Y && Y._f && (Y._f.mount = R);
      };
      if ((D(r, !0), C)) {
        const E = Vt(ue(l._options.defaultValues, r));
        Je(l._defaultValues, r, E), xt(ue(l._formValues, r)) && Je(l._formValues, r, E);
      }
      return (
        !f && l.register(r),
        () => {
          (f ? C && !l._state.action : C) ? l.unregister(r) : D(r, !1);
        }
      );
    }, [r, l, f, o]),
    ee.useEffect(() => {
      l._setDisabledField({ disabled: i, name: r });
    }, [i, r, l]),
    ee.useMemo(() => ({ field: N, formState: m, fieldState: v }), [N, m, v])
  );
}
const cE = (n) => n.render(oE(n));
var F0 = (n, t, r, i, l) =>
    t ? { ...r[n], types: { ...(r[n] && r[n].types ? r[n].types : {}), [i]: l || !0 } } : {},
  Hl = (n) => (Array.isArray(n) ? n : [n]),
  tv = () => {
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
  en = (n) => wt(n) && !Object.keys(n).length,
  Vh = (n) => n.type === 'file',
  Yn = (n) => typeof n == 'function',
  Xo = (n) => {
    if (!Lh) return !1;
    const t = n ? n.ownerDocument : 0;
    return n instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  P0 = (n) => n.type === 'select-multiple',
  qh = (n) => n.type === 'radio',
  fE = (n) => qh(n) || gu(n),
  Wd = (n) => Xo(n) && n.isConnected;
function dE(n, t) {
  const r = t.slice(0, -1).length;
  let i = 0;
  for (; i < r; ) n = xt(n) ? i++ : n[t[i++]];
  return n;
}
function hE(n) {
  for (const t in n) if (n.hasOwnProperty(t) && !xt(n[t])) return !1;
  return !0;
}
function Dt(n, t) {
  const r = Array.isArray(t) ? t : Bh(t) ? [t] : H0(t),
    i = r.length === 1 ? n : dE(n, r),
    l = r.length - 1,
    o = r[l];
  return (
    i && delete i[o],
    l !== 0 && ((wt(i) && en(i)) || (Array.isArray(i) && hE(i))) && Dt(n, r.slice(0, -1)),
    n
  );
}
var G0 = (n) => {
  for (const t in n) if (Yn(n[t])) return !0;
  return !1;
};
function Io(n, t = {}) {
  const r = Array.isArray(n);
  if (wt(n) || r)
    for (const i in n)
      Array.isArray(n[i]) || (wt(n[i]) && !G0(n[i]))
        ? ((t[i] = Array.isArray(n[i]) ? [] : {}), Io(n[i], t[i]))
        : tn(n[i]) || (t[i] = !0);
  return t;
}
function $0(n, t, r) {
  const i = Array.isArray(n);
  if (wt(n) || i)
    for (const l in n)
      Array.isArray(n[l]) || (wt(n[l]) && !G0(n[l]))
        ? xt(t) || gh(r[l])
          ? (r[l] = Array.isArray(n[l]) ? Io(n[l], []) : { ...Io(n[l]) })
          : $0(n[l], tn(t) ? {} : t[l], r[l])
        : (r[l] = !Ua(n[l], t[l]));
  return r;
}
var Ml = (n, t) => $0(n, t, Io(t));
const nv = { value: !1, isValid: !1 },
  av = { value: !0, isValid: !0 };
var Q0 = (n) => {
    if (Array.isArray(n)) {
      if (n.length > 1) {
        const t = n.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
        return { value: t, isValid: !!t.length };
      }
      return n[0].checked && !n[0].disabled
        ? n[0].attributes && !xt(n[0].attributes.value)
          ? xt(n[0].value) || n[0].value === ''
            ? av
            : { value: n[0].value, isValid: !0 }
          : av
        : nv;
    }
    return nv;
  },
  K0 = (n, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
    xt(n) ? n : t ? (n === '' ? NaN : n && +n) : r && la(n) ? new Date(n) : i ? i(n) : n;
const rv = { isValid: !1, value: null };
var W0 = (n) =>
  Array.isArray(n)
    ? n.reduce((t, r) => (r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t), rv)
    : rv;
function iv(n) {
  const t = n.ref;
  return Vh(t)
    ? t.files
    : qh(t)
      ? W0(n.refs).value
      : P0(t)
        ? [...t.selectedOptions].map(({ value: r }) => r)
        : gu(t)
          ? Q0(n.refs).value
          : K0(xt(t.value) ? n.ref.value : t.value, n);
}
var mE = (n, t, r, i) => {
    const l = {};
    for (const o of n) {
      const f = ue(t, o);
      f && Je(l, o, f._f);
    }
    return { criteriaMode: r, names: [...n], fields: l, shouldUseNativeValidation: i };
  },
  Jo = (n) => n instanceof RegExp,
  Nl = (n) => (xt(n) ? n : Jo(n) ? n.source : wt(n) ? (Jo(n.value) ? n.value.source : n.value) : n),
  sv = (n) => ({
    isOnSubmit: !n || n === qn.onSubmit,
    isOnBlur: n === qn.onBlur,
    isOnChange: n === qn.onChange,
    isOnAll: n === qn.all,
    isOnTouch: n === qn.onTouched,
  });
const lv = 'AsyncFunction';
var gE = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (Yn(n.validate) && n.validate.constructor.name === lv) ||
      (wt(n.validate) && Object.values(n.validate).find((t) => t.constructor.name === lv))
    ),
  yE = (n) =>
    n.mount &&
    (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate),
  uv = (n, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(n) ||
      [...t.watch].some((i) => n.startsWith(i) && /^\.\w+/.test(n.slice(i.length))));
const Vl = (n, t, r, i) => {
  for (const l of r || Object.keys(n)) {
    const o = ue(n, l);
    if (o) {
      const { _f: f, ...h } = o;
      if (f) {
        if (f.refs && f.refs[0] && t(f.refs[0], l) && !i) return !0;
        if (f.ref && t(f.ref, f.name) && !i) return !0;
        if (Vl(h, t)) break;
      } else if (wt(h) && Vl(h, t)) break;
    }
  }
};
function ov(n, t, r) {
  const i = ue(n, r);
  if (i || Bh(r)) return { error: i, name: r };
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
var pE = (n, t, r, i) => {
    r(n);
    const { name: l, ...o } = n;
    return (
      en(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((f) => t[f] === (!i || qn.all))
    );
  },
  vE = (n, t, r) =>
    !n ||
    !t ||
    n === t ||
    Hl(n).some((i) => i && (r ? i === t : i.startsWith(t) || t.startsWith(i))),
  bE = (n, t, r, i, l) =>
    l.isOnAll
      ? !1
      : !r && l.isOnTouch
        ? !(t || n)
        : (r ? i.isOnBlur : l.isOnBlur)
          ? !n
          : (r ? i.isOnChange : l.isOnChange)
            ? n
            : !0,
  _E = (n, t) => !_c(ue(n, t)).length && Dt(n, t),
  SE = (n, t, r) => {
    const i = Hl(ue(n, r));
    return Je(i, 'root', t[r]), Je(n, r, i), n;
  },
  $o = (n) => la(n);
function cv(n, t, r = 'validate') {
  if ($o(n) || (Array.isArray(n) && n.every($o)) || (Sn(n) && !n))
    return { type: r, message: $o(n) ? n : '', ref: t };
}
var es = (n) => (wt(n) && !Jo(n) ? n : { value: n, message: '' }),
  fv = async (n, t, r, i, l, o) => {
    const {
        ref: f,
        refs: h,
        required: m,
        maxLength: g,
        minLength: y,
        min: v,
        max: b,
        pattern: w,
        validate: x,
        name: N,
        valueAsNumber: C,
        mount: D,
      } = n._f,
      E = ue(r, N);
    if (!D || t.has(N)) return {};
    const R = h ? h[0] : f,
      Y = (se) => {
        l && R.reportValidity && (R.setCustomValidity(Sn(se) ? '' : se || ''), R.reportValidity());
      },
      q = {},
      K = qh(f),
      W = gu(f),
      ie = K || W,
      te =
        ((C || Vh(f)) && xt(f.value) && xt(E)) ||
        (Xo(f) && f.value === '') ||
        E === '' ||
        (Array.isArray(E) && !E.length),
      _e = F0.bind(null, N, i, q),
      be = (se, Se, Re, Me = Aa.maxLength, V = Aa.minLength) => {
        const I = se ? Se : Re;
        q[N] = { type: se ? Me : V, message: I, ref: f, ..._e(se ? Me : V, I) };
      };
    if (
      o
        ? !Array.isArray(E) || !E.length
        : m &&
          ((!ie && (te || tn(E))) ||
            (Sn(E) && !E) ||
            (W && !Q0(h).isValid) ||
            (K && !W0(h).isValid))
    ) {
      const { value: se, message: Se } = $o(m) ? { value: !!m, message: m } : es(m);
      if (se && ((q[N] = { type: Aa.required, message: Se, ref: R, ..._e(Aa.required, Se) }), !i))
        return Y(Se), q;
    }
    if (!te && (!tn(v) || !tn(b))) {
      let se, Se;
      const Re = es(b),
        Me = es(v);
      if (!tn(E) && !isNaN(E)) {
        const V = f.valueAsNumber || (E && +E);
        tn(Re.value) || (se = V > Re.value), tn(Me.value) || (Se = V < Me.value);
      } else {
        const V = f.valueAsDate || new Date(E),
          I = (T) => new Date(new Date().toDateString() + ' ' + T),
          me = f.type == 'time',
          xe = f.type == 'week';
        la(Re.value) &&
          E &&
          (se = me ? I(E) > I(Re.value) : xe ? E > Re.value : V > new Date(Re.value)),
          la(Me.value) &&
            E &&
            (Se = me ? I(E) < I(Me.value) : xe ? E < Me.value : V < new Date(Me.value));
      }
      if ((se || Se) && (be(!!se, Re.message, Me.message, Aa.max, Aa.min), !i))
        return Y(q[N].message), q;
    }
    if ((g || y) && !te && (la(E) || (o && Array.isArray(E)))) {
      const se = es(g),
        Se = es(y),
        Re = !tn(se.value) && E.length > +se.value,
        Me = !tn(Se.value) && E.length < +Se.value;
      if ((Re || Me) && (be(Re, se.message, Se.message), !i)) return Y(q[N].message), q;
    }
    if (w && !te && la(E)) {
      const { value: se, message: Se } = es(w);
      if (
        Jo(se) &&
        !E.match(se) &&
        ((q[N] = { type: Aa.pattern, message: Se, ref: f, ..._e(Aa.pattern, Se) }), !i)
      )
        return Y(Se), q;
    }
    if (x) {
      if (Yn(x)) {
        const se = await x(E, r),
          Se = cv(se, R);
        if (Se && ((q[N] = { ...Se, ..._e(Aa.validate, Se.message) }), !i)) return Y(Se.message), q;
      } else if (wt(x)) {
        let se = {};
        for (const Se in x) {
          if (!en(se) && !i) break;
          const Re = cv(await x[Se](E, r), R, Se);
          Re && ((se = { ...Re, ..._e(Se, Re.message) }), Y(Re.message), i && (q[N] = se));
        }
        if (!en(se) && ((q[N] = { ref: R, ...se }), !i)) return q;
      }
    }
    return Y(!0), q;
  };
const xE = { mode: qn.onSubmit, reValidateMode: qn.onChange, shouldFocusError: !0 };
function wE(n = {}) {
  let t = { ...xE, ...n },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: Yn(t.defaultValues),
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
  const b = { array: tv(), state: tv() },
    w = sv(t.mode),
    x = sv(t.reValidateMode),
    N = t.criteriaMode === qn.all,
    C = (M) => (B) => {
      clearTimeout(g), (g = setTimeout(M, B));
    },
    D = async (M) => {
      if (!t.disabled && (y.isValid || v.isValid || M)) {
        const B = t.resolver ? en((await te()).errors) : await be(i, !0);
        B !== r.isValid && b.state.next({ isValid: B });
      }
    },
    E = (M, B) => {
      !t.disabled &&
        (y.isValidating || y.validatingFields || v.isValidating || v.validatingFields) &&
        ((M || Array.from(h.mount)).forEach((Z) => {
          Z && (B ? Je(r.validatingFields, Z, B) : Dt(r.validatingFields, Z));
        }),
        b.state.next({
          validatingFields: r.validatingFields,
          isValidating: !en(r.validatingFields),
        }));
    },
    R = (M, B = [], Z, fe, ae = !0, X = !0) => {
      if (fe && Z && !t.disabled) {
        if (((f.action = !0), X && Array.isArray(ue(i, M)))) {
          const ce = Z(ue(i, M), fe.argA, fe.argB);
          ae && Je(i, M, ce);
        }
        if (X && Array.isArray(ue(r.errors, M))) {
          const ce = Z(ue(r.errors, M), fe.argA, fe.argB);
          ae && Je(r.errors, M, ce), _E(r.errors, M);
        }
        if ((y.touchedFields || v.touchedFields) && X && Array.isArray(ue(r.touchedFields, M))) {
          const ce = Z(ue(r.touchedFields, M), fe.argA, fe.argB);
          ae && Je(r.touchedFields, M, ce);
        }
        (y.dirtyFields || v.dirtyFields) && (r.dirtyFields = Ml(l, o)),
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
        xt(X) || (fe && fe.defaultChecked) || B ? Je(o, M, B ? X : iv(ae._f)) : V(M, X),
          f.mount && D();
      }
    },
    W = (M, B, Z, fe, ae) => {
      let X = !1,
        ce = !1;
      const Ne = { name: M };
      if (!t.disabled) {
        if (!Z || fe) {
          (y.isDirty || v.isDirty) &&
            ((ce = r.isDirty), (r.isDirty = Ne.isDirty = Se()), (X = ce !== Ne.isDirty));
          const ct = Ua(ue(l, M), B);
          (ce = !!ue(r.dirtyFields, M)),
            ct ? Dt(r.dirtyFields, M) : Je(r.dirtyFields, M, !0),
            (Ne.dirtyFields = r.dirtyFields),
            (X = X || ((y.dirtyFields || v.dirtyFields) && ce !== !ct));
        }
        if (Z) {
          const ct = ue(r.touchedFields, M);
          ct ||
            (Je(r.touchedFields, M, Z),
            (Ne.touchedFields = r.touchedFields),
            (X = X || ((y.touchedFields || v.touchedFields) && ct !== Z)));
        }
        X && ae && b.state.next(Ne);
      }
      return X ? Ne : {};
    },
    ie = (M, B, Z, fe) => {
      const ae = ue(r.errors, M),
        X = (y.isValid || v.isValid) && Sn(B) && r.isValid !== B;
      if (
        (t.delayError && Z
          ? ((m = C(() => Y(M, Z))), m(t.delayError))
          : (clearTimeout(g), (m = null), Z ? Je(r.errors, M, Z) : Dt(r.errors, M)),
        (Z ? !Ua(ae, Z) : ae) || !en(fe) || X)
      ) {
        const ce = { ...fe, ...(X && Sn(B) ? { isValid: B } : {}), errors: r.errors, name: M };
        (r = { ...r, ...ce }), b.state.next(ce);
      }
    },
    te = async (M) => {
      E(M, !0);
      const B = await t.resolver(
        o,
        t.context,
        mE(M || h.mount, i, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return E(M), B;
    },
    _e = async (M) => {
      const { errors: B } = await te(M);
      if (M)
        for (const Z of M) {
          const fe = ue(B, Z);
          fe ? Je(r.errors, Z, fe) : Dt(r.errors, Z);
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
            const Ne = h.array.has(X.name),
              ct = ae._f && gE(ae._f);
            ct && y.validatingFields && E([fe], !0);
            const bt = await fv(ae, h.disabled, o, N, t.shouldUseNativeValidation && !B, Ne);
            if ((ct && y.validatingFields && E([fe]), bt[X.name] && ((Z.valid = !1), B))) break;
            !B &&
              (ue(bt, X.name)
                ? Ne
                  ? SE(r.errors, bt, X.name)
                  : Je(r.errors, X.name, bt[X.name])
                : Dt(r.errors, X.name));
          }
          !en(ce) && (await be(ce, B, Z));
        }
      }
      return Z.valid;
    },
    se = () => {
      for (const M of h.unMount) {
        const B = ue(i, M);
        B && (B._f.refs ? B._f.refs.every((Z) => !Wd(Z)) : !Wd(B._f.ref)) && rn(M);
      }
      h.unMount = new Set();
    },
    Se = (M, B) => !t.disabled && (M && B && Je(o, M, B), !Ua(le(), l)),
    Re = (M, B, Z) => Y0(M, h, { ...(f.mount ? o : xt(B) ? l : la(M) ? { [M]: B } : B) }, Z, B),
    Me = (M) => _c(ue(f.mount ? o : l, M, t.shouldUnregister ? ue(l, M, []) : [])),
    V = (M, B, Z = {}) => {
      const fe = ue(i, M);
      let ae = B;
      if (fe) {
        const X = fe._f;
        X &&
          (!X.disabled && Je(o, M, K0(B, X)),
          (ae = Xo(X.ref) && tn(B) ? '' : B),
          P0(X.ref)
            ? [...X.ref.options].forEach((ce) => (ce.selected = ae.includes(ce.value)))
            : X.refs
              ? gu(X.ref)
                ? X.refs.length > 1
                  ? X.refs.forEach(
                      (ce) =>
                        (!ce.defaultChecked || !ce.disabled) &&
                        (ce.checked = Array.isArray(ae)
                          ? !!ae.find((Ne) => Ne === ce.value)
                          : ae === ce.value)
                    )
                  : X.refs[0] && (X.refs[0].checked = !!ae)
                : X.refs.forEach((ce) => (ce.checked = ce.value === ae))
              : Vh(X.ref)
                ? (X.ref.value = '')
                : ((X.ref.value = ae), X.ref.type || b.state.next({ name: M, values: Vt(o) })));
      }
      (Z.shouldDirty || Z.shouldTouch) && W(M, ae, Z.shouldTouch, Z.shouldDirty, !0),
        Z.shouldValidate && P(M);
    },
    I = (M, B, Z) => {
      for (const fe in B) {
        const ae = B[fe],
          X = `${M}.${fe}`,
          ce = ue(i, X);
        (h.array.has(M) || wt(ae) || (ce && !ce._f)) && !ei(ae) ? I(X, ae, Z) : V(X, ae, Z);
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
              b.state.next({ name: M, dirtyFields: Ml(l, o), isDirty: Se(M, X) }))
          : fe && !fe._f && !tn(X)
            ? I(M, X, Z)
            : V(M, X, Z),
        uv(M, h) && b.state.next({ ...r }),
        b.state.next({ name: f.mount ? M : void 0, values: Vt(o) });
    },
    xe = async (M) => {
      f.mount = !0;
      const B = M.target;
      let Z = B.name,
        fe = !0;
      const ae = ue(i, Z),
        X = (ce) => {
          fe = Number.isNaN(ce) || (ei(ce) && isNaN(ce.getTime())) || Ua(ce, ue(o, Z, ce));
        };
      if (ae) {
        let ce, Ne;
        const ct = B.type ? iv(ae._f) : L0(M),
          bt = M.type === Wo.BLUR || M.type === Wo.FOCUS_OUT,
          Ns =
            (!yE(ae._f) && !t.resolver && !ue(r.errors, Z) && !ae._f.deps) ||
            bE(bt, ue(r.touchedFields, Z), r.isSubmitted, x, w),
          je = uv(Z, h, bt);
        Je(o, Z, ct),
          bt ? (ae._f.onBlur && ae._f.onBlur(M), m && m(0)) : ae._f.onChange && ae._f.onChange(M);
        const Ie = W(Z, ct, bt),
          Fe = !en(Ie) || je;
        if ((!bt && b.state.next({ name: Z, type: M.type, values: Vt(o) }), Ns))
          return (
            (y.isValid || v.isValid) && (t.mode === 'onBlur' ? bt && D() : bt || D()),
            Fe && b.state.next({ name: Z, ...(je ? {} : Ie) })
          );
        if ((!bt && je && b.state.next({ ...r }), t.resolver)) {
          const { errors: Ft } = await te([Z]);
          if ((X(ct), fe)) {
            const Tt = ov(r.errors, i, Z),
              ga = ov(Ft, i, Tt.name || Z);
            (ce = ga.error), (Z = ga.name), (Ne = en(Ft));
          }
        } else
          E([Z], !0),
            (ce = (await fv(ae, h.disabled, o, N, t.shouldUseNativeValidation))[Z]),
            E([Z]),
            X(ct),
            fe && (ce ? (Ne = !1) : (y.isValid || v.isValid) && (Ne = await be(i, !0)));
        fe && (ae._f.deps && P(ae._f.deps), ie(Z, Ne, ce, Ie));
      }
    },
    T = (M, B) => {
      if (ue(r.errors, B) && M.focus) return M.focus(), 1;
    },
    P = async (M, B = {}) => {
      let Z, fe;
      const ae = Hl(M);
      if (t.resolver) {
        const X = await _e(xt(M) ? M : ae);
        (Z = en(X)), (fe = M ? !ae.some((ce) => ue(X, ce)) : Z);
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
            !(!fe && !r.isValid) && D())
          : (fe = Z = await be(i));
      return (
        b.state.next({
          ...(!la(M) || ((y.isValid || v.isValid) && Z !== r.isValid) ? {} : { name: M }),
          ...(t.resolver || !M ? { isValid: Z } : {}),
          errors: r.errors,
        }),
        B.shouldFocus && !fe && Vl(i, T, M ? ae : h.mount),
        fe
      );
    },
    le = (M) => {
      const B = { ...(f.mount ? o : l) };
      return xt(M) ? B : la(M) ? ue(B, M) : M.map((Z) => ue(B, Z));
    },
    re = (M, B) => ({
      invalid: !!ue((B || r).errors, M),
      isDirty: !!ue((B || r).dirtyFields, M),
      error: ue((B || r).errors, M),
      isValidating: !!ue(r.validatingFields, M),
      isTouched: !!ue((B || r).touchedFields, M),
    }),
    ve = (M) => {
      M && Hl(M).forEach((B) => Dt(r.errors, B)), b.state.next({ errors: M ? r.errors : {} });
    },
    Ve = (M, B, Z) => {
      const fe = (ue(i, M, { _f: {} })._f || {}).ref,
        ae = ue(r.errors, M) || {},
        { ref: X, message: ce, type: Ne, ...ct } = ae;
      Je(r.errors, M, { ...ct, ...B, ref: fe }),
        b.state.next({ name: M, errors: r.errors, isValid: !1 }),
        Z && Z.shouldFocus && fe && fe.focus && fe.focus();
    },
    we = (M, B) => (Yn(M) ? b.state.subscribe({ next: (Z) => M(Re(void 0, B), Z) }) : Re(M, B, !0)),
    kt = (M) =>
      b.state.subscribe({
        next: (B) => {
          vE(M.name, B.name, M.exact) &&
            pE(B, M.formState || y, hi, M.reRenderRoot) &&
            M.callback({ values: { ...o }, ...r, ...B });
        },
      }).unsubscribe,
    at = (M) => ((f.mount = !0), (v = { ...v, ...M.formState }), kt({ ...M, formState: v })),
    rn = (M, B = {}) => {
      for (const Z of M ? Hl(M) : h.mount)
        h.mount.delete(Z),
          h.array.delete(Z),
          B.keepValue || (Dt(i, Z), Dt(o, Z)),
          !B.keepError && Dt(r.errors, Z),
          !B.keepDirty && Dt(r.dirtyFields, Z),
          !B.keepTouched && Dt(r.touchedFields, Z),
          !B.keepIsValidating && Dt(r.validatingFields, Z),
          !t.shouldUnregister && !B.keepDefaultValue && Dt(l, Z);
      b.state.next({ values: Vt(o) }),
        b.state.next({ ...r, ...(B.keepDirty ? { isDirty: Se() } : {}) }),
        !B.keepIsValid && D();
    },
    $a = ({ disabled: M, name: B }) => {
      ((Sn(M) && f.mount) || M || h.disabled.has(B)) &&
        (M ? h.disabled.add(B) : h.disabled.delete(B));
    },
    Xn = (M, B = {}) => {
      let Z = ue(i, M);
      const fe = Sn(B.disabled) || Sn(t.disabled);
      return (
        Je(i, M, {
          ...(Z || {}),
          _f: { ...(Z && Z._f ? Z._f : { ref: { name: M } }), name: M, mount: !0, ...B },
        }),
        h.mount.add(M),
        Z ? $a({ disabled: Sn(B.disabled) ? B.disabled : t.disabled, name: M }) : K(M, !0, B.value),
        {
          ...(fe ? { disabled: B.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!B.required,
                min: Nl(B.min),
                max: Nl(B.max),
                minLength: Nl(B.minLength),
                maxLength: Nl(B.maxLength),
                pattern: Nl(B.pattern),
              }
            : {}),
          name: M,
          onChange: xe,
          onBlur: xe,
          ref: (ae) => {
            if (ae) {
              Xn(M, B), (Z = ue(i, M));
              const X =
                  (xt(ae.value) &&
                    ae.querySelectorAll &&
                    ae.querySelectorAll('input,select,textarea')[0]) ||
                  ae,
                ce = fE(X),
                Ne = Z._f.refs || [];
              if (ce ? Ne.find((ct) => ct === X) : X === Z._f.ref) return;
              Je(i, M, {
                _f: {
                  ...Z._f,
                  ...(ce
                    ? {
                        refs: [...Ne.filter(Wd), X, ...(Array.isArray(ue(l, M)) ? [{}] : [])],
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
                  !(B0(h.array, M) && f.action) &&
                  h.unMount.add(M);
          },
        }
      );
    },
    Qa = () => t.shouldFocusError && Vl(i, T, h.mount),
    kr = (M) => {
      Sn(M) &&
        (b.state.next({ disabled: M }),
        Vl(
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
    Ka = (M, B) => async (Z) => {
      let fe;
      Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
      let ae = Vt(o);
      if ((b.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: X, values: ce } = await te();
        (r.errors = X), (ae = ce);
      } else await be(i);
      if (h.disabled.size) for (const X of h.disabled) Je(ae, X, void 0);
      if ((Dt(r.errors, 'root'), en(r.errors))) {
        b.state.next({ errors: {} });
        try {
          await M(ae, Z);
        } catch (X) {
          fe = X;
        }
      } else B && (await B({ ...r.errors }, Z)), Qa(), setTimeout(Qa);
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: en(r.errors) && !fe,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        fe)
      )
        throw fe;
    },
    Ts = (M, B = {}) => {
      ue(i, M) &&
        (xt(B.defaultValue)
          ? me(M, Vt(ue(l, M)))
          : (me(M, B.defaultValue), Je(l, M, Vt(B.defaultValue))),
        B.keepTouched || Dt(r.touchedFields, M),
        B.keepDirty ||
          (Dt(r.dirtyFields, M), (r.isDirty = B.defaultValue ? Se(M, Vt(ue(l, M))) : Se())),
        B.keepError || (Dt(r.errors, M), y.isValid && D()),
        b.state.next({ ...r }));
    },
    di = (M, B = {}) => {
      const Z = M ? Vt(M) : l,
        fe = Vt(Z),
        ae = en(M),
        X = ae ? l : fe;
      if ((B.keepDefaultValues || (l = Z), !B.keepValues)) {
        if (B.keepDirtyValues) {
          const ce = new Set([...h.mount, ...Object.keys(Ml(l, o))]);
          for (const Ne of Array.from(ce))
            ue(r.dirtyFields, Ne) ? Je(X, Ne, ue(o, Ne)) : me(Ne, ue(X, Ne));
        } else {
          if (Lh && xt(M))
            for (const ce of h.mount) {
              const Ne = ue(i, ce);
              if (Ne && Ne._f) {
                const ct = Array.isArray(Ne._f.refs) ? Ne._f.refs[0] : Ne._f.ref;
                if (Xo(ct)) {
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
                ? Ml(l, o)
                : r.dirtyFields
              : B.keepDefaultValues && M
                ? Ml(l, M)
                : B.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: B.keepTouched ? r.touchedFields : {},
          errors: B.keepErrors ? r.errors : {},
          isSubmitSuccessful: B.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    Zt = (M, B) => di(Yn(M) ? M(o) : M, B),
    Cs = (M, B = {}) => {
      const Z = ue(i, M),
        fe = Z && Z._f;
      if (fe) {
        const ae = fe.refs ? fe.refs[0] : fe.ref;
        ae.focus && (ae.focus(), B.shouldSelect && Yn(ae.select) && ae.select());
      }
    },
    hi = (M) => {
      r = { ...r, ...M };
    },
    ma = {
      control: {
        register: Xn,
        unregister: rn,
        getFieldState: re,
        handleSubmit: Ka,
        setError: Ve,
        _subscribe: kt,
        _runSchema: te,
        _getWatch: Re,
        _getDirty: Se,
        _setValid: D,
        _setFieldArray: R,
        _setDisabledField: $a,
        _setErrors: q,
        _getFieldArray: Me,
        _reset: di,
        _resetDefaultValues: () =>
          Yn(t.defaultValues) &&
          t.defaultValues().then((M) => {
            Zt(M, t.resetOptions), b.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: se,
        _disableForm: kr,
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
      trigger: P,
      register: Xn,
      handleSubmit: Ka,
      watch: we,
      setValue: me,
      getValues: le,
      reset: Zt,
      resetField: Ts,
      clearErrors: ve,
      unregister: rn,
      setError: Ve,
      setFocus: Cs,
      getFieldState: re,
    };
  return { ...ma, formControl: ma };
}
const EE = typeof window < 'u' ? ee.useLayoutEffect : ee.useEffect;
function X0(n = {}) {
  const t = ee.useRef(void 0),
    r = ee.useRef(void 0),
    [i, l] = ee.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Yn(n.defaultValues),
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
      defaultValues: Yn(n.defaultValues) ? void 0 : n.defaultValues,
    });
  t.current ||
    ((t.current = { ...(n.formControl ? n.formControl : wE(n)), formState: i }),
    n.formControl &&
      n.defaultValues &&
      !Yn(n.defaultValues) &&
      n.formControl.reset(n.defaultValues, n.resetOptions));
  const o = t.current.control;
  return (
    (o._options = n),
    EE(() => {
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
        n.errors && !en(n.errors) && o._setErrors(n.errors);
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
    (t.current.formState = V0(i, o)),
    t.current
  );
}
const dv = (n, t, r) => {
    if (n && 'reportValidity' in n) {
      const i = ue(r, t);
      n.setCustomValidity((i && i.message) || ''), n.reportValidity();
    }
  },
  I0 = (n, t) => {
    for (const r in t.fields) {
      const i = t.fields[r];
      i && i.ref && 'reportValidity' in i.ref
        ? dv(i.ref, r, n)
        : i && i.refs && i.refs.forEach((l) => dv(l, r, n));
    }
  },
  OE = (n, t) => {
    t.shouldUseNativeValidation && I0(n, t);
    const r = {};
    for (const i in n) {
      const l = ue(t.fields, i),
        o = Object.assign(n[i] || {}, { ref: l && l.ref });
      if (TE(t.names || Object.keys(n), i)) {
        const f = Object.assign({}, ue(r, i));
        Je(f, 'root', o), Je(r, i, f);
      } else Je(r, i, o);
    }
    return r;
  },
  TE = (n, t) => {
    const r = hv(t);
    return n.some((i) => hv(i).match(`^${r}\\.\\d+`));
  };
function hv(n) {
  return n.replace(/\]|\[/g, '');
}
function CE(n, t) {
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
      r[f] = F0(f, t, r, l, g ? [].concat(g, i.message) : i.message);
    }
    n.shift();
  }
  return r;
}
function J0(n, t, r) {
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
                    o.shouldUseNativeValidation && I0({}, o),
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
                errors: OE(
                  CE(f.errors, !o.shouldUseNativeValidation && o.criteriaMode === 'all'),
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
var Ge;
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
})(Ge || (Ge = {}));
var yh;
(function (n) {
  n.mergeShapes = (t, r) => ({ ...t, ...r });
})(yh || (yh = {}));
const de = Ge.arrayToEnum([
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
  J = Ge.arrayToEnum([
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
  ME = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, '$1:');
class xn extends Error {
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
    if (!(t instanceof xn)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ge.jsonStringifyReplacer, 2);
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
xn.create = (n) => new xn(n);
const ps = (n, t) => {
  let r;
  switch (n.code) {
    case J.invalid_type:
      n.received === de.undefined
        ? (r = 'Required')
        : (r = `Expected ${n.expected}, received ${n.received}`);
      break;
    case J.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(n.expected, Ge.jsonStringifyReplacer)}`;
      break;
    case J.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ge.joinValues(n.keys, ', ')}`;
      break;
    case J.invalid_union:
      r = 'Invalid input';
      break;
    case J.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ge.joinValues(n.options)}`;
      break;
    case J.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ge.joinValues(n.options)}, received '${n.received}'`;
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
              : Ge.assertNever(n.validation)
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
      (r = t.defaultError), Ge.assertNever(n);
  }
  return { message: r };
};
let eb = ps;
function NE(n) {
  eb = n;
}
function ec() {
  return eb;
}
const tc = (n) => {
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
  DE = [];
function oe(n, t) {
  const r = ec(),
    i = tc({
      issueData: t,
      data: n.data,
      path: n.path,
      errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, r, r === ps ? void 0 : ps].filter(
        (l) => !!l
      ),
    });
  n.common.issues.push(i);
}
class Wt {
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
    return Wt.mergeObjectSync(t, i);
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
  is = (n) => ({ status: 'dirty', value: n }),
  an = (n) => ({ status: 'valid', value: n }),
  ph = (n) => n.status === 'aborted',
  vh = (n) => n.status === 'dirty',
  li = (n) => n.status === 'valid',
  Pl = (n) => typeof Promise < 'u' && n instanceof Promise;
function nc(n, t, r, i) {
  if (typeof t == 'function' ? n !== t || !0 : !t.has(n))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return t.get(n);
}
function tb(n, t, r, i, l) {
  if (typeof t == 'function' ? n !== t || !0 : !t.has(n))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return t.set(n, r), r;
}
var ye;
(function (n) {
  (n.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (n.toString = (t) => (typeof t == 'string' ? t : t == null ? void 0 : t.message));
})(ye || (ye = {}));
var zl, Ul;
class da {
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
const mv = (n, t) => {
  if (li(t)) return { success: !0, data: t.value };
  if (!n.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new xn(n.common.issues);
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
      status: new Wt(),
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
    if (Pl(r)) throw new Error('Synchronous parse encountered promise.');
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
    return mv(l, o);
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
        return li(o) ? { value: o.value } : { issues: l.common.issues };
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
      li(o) ? { value: o.value } : { issues: l.common.issues }
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
      o = await (Pl(l) ? l : Promise.resolve(l));
    return mv(i, o);
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
    return new Qn({
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
    return ca.create(this, this._def);
  }
  nullable() {
    return Ar.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Gn.create(this);
  }
  promise() {
    return bs.create(this, this._def);
  }
  or(t) {
    return Kl.create([this, t], this._def);
  }
  and(t) {
    return Wl.create(this, t, this._def);
  }
  transform(t) {
    return new Qn({
      ...Ue(this._def),
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: 'transform', transform: t },
    });
  }
  default(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new tu({ ...Ue(this._def), innerType: this, defaultValue: r, typeName: Ce.ZodDefault });
  }
  brand() {
    return new Yh({ typeName: Ce.ZodBranded, type: this, ...Ue(this._def) });
  }
  catch(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new nu({ ...Ue(this._def), innerType: this, catchValue: r, typeName: Ce.ZodCatch });
  }
  describe(t) {
    const r = this.constructor;
    return new r({ ...this._def, description: t });
  }
  pipe(t) {
    return yu.create(this, t);
  }
  readonly() {
    return au.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const AE = /^c[^\s-]{8,}$/i,
  kE = /^[0-9a-z]+$/,
  RE = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  jE = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  zE = /^[a-z0-9_-]{21}$/i,
  UE = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  LE =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  BE = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  HE = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let Xd;
const VE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  qE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  YE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  ZE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  FE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  PE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nb =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  GE = new RegExp(`^${nb}$`);
function ab(n) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    n.precision
      ? (t = `${t}\\.\\d{${n.precision}}`)
      : n.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function $E(n) {
  return new RegExp(`^${ab(n)}$`);
}
function rb(n) {
  let t = `${nb}T${ab(n)}`;
  const r = [];
  return (
    r.push(n.local ? 'Z?' : 'Z'),
    n.offset && r.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${r.join('|')})`),
    new RegExp(`^${t}$`)
  );
}
function QE(n, t) {
  return !!(((t === 'v4' || !t) && VE.test(n)) || ((t === 'v6' || !t) && YE.test(n)));
}
function KE(n, t) {
  if (!UE.test(n)) return !1;
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
function WE(n, t) {
  return !!(((t === 'v4' || !t) && qE.test(n)) || ((t === 'v6' || !t) && ZE.test(n)));
}
class Fn extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== de.string)) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_type, expected: de.string, received: o.parsedType }), Ae;
    }
    const i = new Wt();
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
        BE.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'email', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'emoji')
        Xd || (Xd = new RegExp(HE, 'u')),
          Xd.test(t.data) ||
            ((l = this._getOrReturnCtx(t, l)),
            oe(l, { validation: 'emoji', code: J.invalid_string, message: o.message }),
            i.dirty());
      else if (o.kind === 'uuid')
        jE.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'uuid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'nanoid')
        zE.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'nanoid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'cuid')
        AE.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'cuid', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'cuid2')
        kE.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          oe(l, { validation: 'cuid2', code: J.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'ulid')
        RE.test(t.data) ||
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
                        ? rb(o).test(t.data) ||
                          ((l = this._getOrReturnCtx(t, l)),
                          oe(l, {
                            code: J.invalid_string,
                            validation: 'datetime',
                            message: o.message,
                          }),
                          i.dirty())
                        : o.kind === 'date'
                          ? GE.test(t.data) ||
                            ((l = this._getOrReturnCtx(t, l)),
                            oe(l, {
                              code: J.invalid_string,
                              validation: 'date',
                              message: o.message,
                            }),
                            i.dirty())
                          : o.kind === 'time'
                            ? $E(o).test(t.data) ||
                              ((l = this._getOrReturnCtx(t, l)),
                              oe(l, {
                                code: J.invalid_string,
                                validation: 'time',
                                message: o.message,
                              }),
                              i.dirty())
                            : o.kind === 'duration'
                              ? LE.test(t.data) ||
                                ((l = this._getOrReturnCtx(t, l)),
                                oe(l, {
                                  validation: 'duration',
                                  code: J.invalid_string,
                                  message: o.message,
                                }),
                                i.dirty())
                              : o.kind === 'ip'
                                ? QE(t.data, o.version) ||
                                  ((l = this._getOrReturnCtx(t, l)),
                                  oe(l, {
                                    validation: 'ip',
                                    code: J.invalid_string,
                                    message: o.message,
                                  }),
                                  i.dirty())
                                : o.kind === 'jwt'
                                  ? KE(t.data, o.alg) ||
                                    ((l = this._getOrReturnCtx(t, l)),
                                    oe(l, {
                                      validation: 'jwt',
                                      code: J.invalid_string,
                                      message: o.message,
                                    }),
                                    i.dirty())
                                  : o.kind === 'cidr'
                                    ? WE(t.data, o.version) ||
                                      ((l = this._getOrReturnCtx(t, l)),
                                      oe(l, {
                                        validation: 'cidr',
                                        code: J.invalid_string,
                                        message: o.message,
                                      }),
                                      i.dirty())
                                    : o.kind === 'base64'
                                      ? FE.test(t.data) ||
                                        ((l = this._getOrReturnCtx(t, l)),
                                        oe(l, {
                                          validation: 'base64',
                                          code: J.invalid_string,
                                          message: o.message,
                                        }),
                                        i.dirty())
                                      : o.kind === 'base64url'
                                        ? PE.test(t.data) ||
                                          ((l = this._getOrReturnCtx(t, l)),
                                          oe(l, {
                                            validation: 'base64url',
                                            code: J.invalid_string,
                                            message: o.message,
                                          }),
                                          i.dirty())
                                        : Ge.assertNever(o);
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
    return new Fn({ ...this._def, checks: [...this._def.checks, t] });
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
    return new Fn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new Fn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new Fn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
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
Fn.create = (n) => {
  var t;
  return new Fn({
    checks: [],
    typeName: Ce.ZodString,
    coerce: (t = n == null ? void 0 : n.coerce) !== null && t !== void 0 ? t : !1,
    ...Ue(n),
  });
};
function XE(n, t) {
  const r = (n.toString().split('.')[1] || '').length,
    i = (t.toString().split('.')[1] || '').length,
    l = r > i ? r : i,
    o = parseInt(n.toFixed(l).replace('.', '')),
    f = parseInt(t.toFixed(l).replace('.', ''));
  return (o % f) / Math.pow(10, l);
}
class Mr extends Be {
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
    const l = new Wt();
    for (const o of this._def.checks)
      o.kind === 'int'
        ? Ge.isInteger(t.data) ||
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
              ? XE(t.data, o.value) !== 0 &&
                ((i = this._getOrReturnCtx(t, i)),
                oe(i, { code: J.not_multiple_of, multipleOf: o.value, message: o.message }),
                l.dirty())
              : o.kind === 'finite'
                ? Number.isFinite(t.data) ||
                  ((i = this._getOrReturnCtx(t, i)),
                  oe(i, { code: J.not_finite, message: o.message }),
                  l.dirty())
                : Ge.assertNever(o);
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
    return new Mr({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: i, message: ye.toString(l) }],
    });
  }
  _addCheck(t) {
    return new Mr({ ...this._def, checks: [...this._def.checks, t] });
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
      (t) => t.kind === 'int' || (t.kind === 'multipleOf' && Ge.isInteger(t.value))
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
Mr.create = (n) =>
  new Mr({
    checks: [],
    typeName: Ce.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...Ue(n),
  });
class Nr extends Be {
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
    const l = new Wt();
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
            : Ge.assertNever(o);
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
    return new Nr({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: i, message: ye.toString(l) }],
    });
  }
  _addCheck(t) {
    return new Nr({ ...this._def, checks: [...this._def.checks, t] });
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
Nr.create = (n) => {
  var t;
  return new Nr({
    checks: [],
    typeName: Ce.ZodBigInt,
    coerce: (t = n == null ? void 0 : n.coerce) !== null && t !== void 0 ? t : !1,
    ...Ue(n),
  });
};
class Gl extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== de.boolean)) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.boolean, received: i.parsedType }), Ae;
    }
    return an(t.data);
  }
}
Gl.create = (n) =>
  new Gl({ typeName: Ce.ZodBoolean, coerce: (n == null ? void 0 : n.coerce) || !1, ...Ue(n) });
class ui extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== de.date)) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_type, expected: de.date, received: o.parsedType }), Ae;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return oe(o, { code: J.invalid_date }), Ae;
    }
    const i = new Wt();
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
          : Ge.assertNever(o);
    return { status: i.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ui({ ...this._def, checks: [...this._def.checks, t] });
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
ui.create = (n) =>
  new ui({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: Ce.ZodDate,
    ...Ue(n),
  });
class ac extends Be {
  _parse(t) {
    if (this._getType(t) !== de.symbol) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.symbol, received: i.parsedType }), Ae;
    }
    return an(t.data);
  }
}
ac.create = (n) => new ac({ typeName: Ce.ZodSymbol, ...Ue(n) });
class $l extends Be {
  _parse(t) {
    if (this._getType(t) !== de.undefined) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.undefined, received: i.parsedType }), Ae;
    }
    return an(t.data);
  }
}
$l.create = (n) => new $l({ typeName: Ce.ZodUndefined, ...Ue(n) });
class Ql extends Be {
  _parse(t) {
    if (this._getType(t) !== de.null) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.null, received: i.parsedType }), Ae;
    }
    return an(t.data);
  }
}
Ql.create = (n) => new Ql({ typeName: Ce.ZodNull, ...Ue(n) });
class vs extends Be {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return an(t.data);
  }
}
vs.create = (n) => new vs({ typeName: Ce.ZodAny, ...Ue(n) });
class si extends Be {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return an(t.data);
  }
}
si.create = (n) => new si({ typeName: Ce.ZodUnknown, ...Ue(n) });
class Ya extends Be {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return oe(r, { code: J.invalid_type, expected: de.never, received: r.parsedType }), Ae;
  }
}
Ya.create = (n) => new Ya({ typeName: Ce.ZodNever, ...Ue(n) });
class rc extends Be {
  _parse(t) {
    if (this._getType(t) !== de.undefined) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.void, received: i.parsedType }), Ae;
    }
    return an(t.data);
  }
}
rc.create = (n) => new rc({ typeName: Ce.ZodVoid, ...Ue(n) });
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
        [...r.data].map((f, h) => l.type._parseAsync(new da(r, f, r.path, h)))
      ).then((f) => Wt.mergeArray(i, f));
    const o = [...r.data].map((f, h) => l.type._parseSync(new da(r, f, r.path, h)));
    return Wt.mergeArray(i, o);
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
function rs(n) {
  if (n instanceof mt) {
    const t = {};
    for (const r in n.shape) {
      const i = n.shape[r];
      t[r] = ca.create(rs(i));
    }
    return new mt({ ...n._def, shape: () => t });
  } else
    return n instanceof Gn
      ? new Gn({ ...n._def, type: rs(n.element) })
      : n instanceof ca
        ? ca.create(rs(n.unwrap()))
        : n instanceof Ar
          ? Ar.create(rs(n.unwrap()))
          : n instanceof ha
            ? ha.create(n.items.map((t) => rs(t)))
            : n;
}
class mt extends Be {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      r = Ge.objectKeys(t);
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
        value: y._parse(new da(l, v, l.path, g)),
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
          value: g._parse(new da(l, v, l.path, y)),
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
          .then((g) => Wt.mergeObjectSync(i, g))
      : Wt.mergeObjectSync(i, m);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      ye.errToObj,
      new mt({
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
    return new mt({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new mt({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(t) {
    return new mt({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new mt({
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
    return new mt({ ...this._def, catchall: t });
  }
  pick(t) {
    const r = {};
    return (
      Ge.objectKeys(t).forEach((i) => {
        t[i] && this.shape[i] && (r[i] = this.shape[i]);
      }),
      new mt({ ...this._def, shape: () => r })
    );
  }
  omit(t) {
    const r = {};
    return (
      Ge.objectKeys(this.shape).forEach((i) => {
        t[i] || (r[i] = this.shape[i]);
      }),
      new mt({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return rs(this);
  }
  partial(t) {
    const r = {};
    return (
      Ge.objectKeys(this.shape).forEach((i) => {
        const l = this.shape[i];
        t && !t[i] ? (r[i] = l) : (r[i] = l.optional());
      }),
      new mt({ ...this._def, shape: () => r })
    );
  }
  required(t) {
    const r = {};
    return (
      Ge.objectKeys(this.shape).forEach((i) => {
        if (t && !t[i]) r[i] = this.shape[i];
        else {
          let o = this.shape[i];
          for (; o instanceof ca; ) o = o._def.innerType;
          r[i] = o;
        }
      }),
      new mt({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return ib(Ge.objectKeys(this.shape));
  }
}
mt.create = (n, t) =>
  new mt({
    shape: () => n,
    unknownKeys: 'strip',
    catchall: Ya.create(),
    typeName: Ce.ZodObject,
    ...Ue(t),
  });
mt.strictCreate = (n, t) =>
  new mt({
    shape: () => n,
    unknownKeys: 'strict',
    catchall: Ya.create(),
    typeName: Ce.ZodObject,
    ...Ue(t),
  });
mt.lazycreate = (n, t) =>
  new mt({
    shape: n,
    unknownKeys: 'strip',
    catchall: Ya.create(),
    typeName: Ce.ZodObject,
    ...Ue(t),
  });
class Kl extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = this._def.options;
    function l(o) {
      for (const h of o) if (h.result.status === 'valid') return h.result;
      for (const h of o)
        if (h.result.status === 'dirty')
          return r.common.issues.push(...h.ctx.common.issues), h.result;
      const f = o.map((h) => new xn(h.ctx.common.issues));
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
      const h = f.map((m) => new xn(m));
      return oe(r, { code: J.invalid_union, unionErrors: h }), Ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
Kl.create = (n, t) => new Kl({ options: n, typeName: Ce.ZodUnion, ...Ue(t) });
const ka = (n) =>
  n instanceof Il
    ? ka(n.schema)
    : n instanceof Qn
      ? ka(n.innerType())
      : n instanceof Jl
        ? [n.value]
        : n instanceof Dr
          ? n.options
          : n instanceof eu
            ? Ge.objectValues(n.enum)
            : n instanceof tu
              ? ka(n._def.innerType)
              : n instanceof $l
                ? [void 0]
                : n instanceof Ql
                  ? [null]
                  : n instanceof ca
                    ? [void 0, ...ka(n.unwrap())]
                    : n instanceof Ar
                      ? [null, ...ka(n.unwrap())]
                      : n instanceof Yh || n instanceof au
                        ? ka(n.unwrap())
                        : n instanceof nu
                          ? ka(n._def.innerType)
                          : [];
class Sc extends Be {
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
    return new Sc({
      typeName: Ce.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: l,
      ...Ue(i),
    });
  }
}
function bh(n, t) {
  const r = ja(n),
    i = ja(t);
  if (n === t) return { valid: !0, data: n };
  if (r === de.object && i === de.object) {
    const l = Ge.objectKeys(t),
      o = Ge.objectKeys(n).filter((h) => l.indexOf(h) !== -1),
      f = { ...n, ...t };
    for (const h of o) {
      const m = bh(n[h], t[h]);
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
        m = bh(f, h);
      if (!m.valid) return { valid: !1 };
      l.push(m.data);
    }
    return { valid: !0, data: l };
  } else return r === de.date && i === de.date && +n == +t ? { valid: !0, data: n } : { valid: !1 };
}
class Wl extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t),
      l = (o, f) => {
        if (ph(o) || ph(f)) return Ae;
        const h = bh(o.value, f.value);
        return h.valid
          ? ((vh(o) || vh(f)) && r.dirty(), { status: r.value, value: h.data })
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
Wl.create = (n, t, r) => new Wl({ left: n, right: t, typeName: Ce.ZodIntersection, ...Ue(r) });
class ha extends Be {
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
        return m ? m._parse(new da(i, f, i.path, h)) : null;
      })
      .filter((f) => !!f);
    return i.common.async ? Promise.all(o).then((f) => Wt.mergeArray(r, f)) : Wt.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ha({ ...this._def, rest: t });
  }
}
ha.create = (n, t) => {
  if (!Array.isArray(n)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new ha({ items: n, typeName: Ce.ZodTuple, rest: null, ...Ue(t) });
};
class Xl extends Be {
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
        key: o._parse(new da(i, h, i.path, h)),
        value: f._parse(new da(i, i.data[h], i.path, h)),
        alwaysSet: h in i.data,
      });
    return i.common.async ? Wt.mergeObjectAsync(r, l) : Wt.mergeObjectSync(r, l);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, i) {
    return r instanceof Be
      ? new Xl({ keyType: t, valueType: r, typeName: Ce.ZodRecord, ...Ue(i) })
      : new Xl({ keyType: Fn.create(), valueType: t, typeName: Ce.ZodRecord, ...Ue(r) });
  }
}
class ic extends Be {
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
        key: l._parse(new da(i, h, i.path, [g, 'key'])),
        value: o._parse(new da(i, m, i.path, [g, 'value'])),
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
ic.create = (n, t, r) => new ic({ valueType: t, keyType: n, typeName: Ce.ZodMap, ...Ue(r) });
class oi extends Be {
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
    const h = [...i.data.values()].map((m, g) => o._parse(new da(i, m, i.path, g)));
    return i.common.async ? Promise.all(h).then((m) => f(m)) : f(h);
  }
  min(t, r) {
    return new oi({ ...this._def, minSize: { value: t, message: ye.toString(r) } });
  }
  max(t, r) {
    return new oi({ ...this._def, maxSize: { value: t, message: ye.toString(r) } });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
oi.create = (n, t) =>
  new oi({ valueType: n, minSize: null, maxSize: null, typeName: Ce.ZodSet, ...Ue(t) });
class ss extends Be {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== de.function)
      return oe(r, { code: J.invalid_type, expected: de.function, received: r.parsedType }), Ae;
    function i(h, m) {
      return tc({
        data: h,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, ec(), ps].filter((g) => !!g),
        issueData: { code: J.invalid_arguments, argumentsError: m },
      });
    }
    function l(h, m) {
      return tc({
        data: h,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, ec(), ps].filter((g) => !!g),
        issueData: { code: J.invalid_return_type, returnTypeError: m },
      });
    }
    const o = { errorMap: r.common.contextualErrorMap },
      f = r.data;
    if (this._def.returns instanceof bs) {
      const h = this;
      return an(async function (...m) {
        const g = new xn([]),
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
      return an(function (...m) {
        const g = h._def.args.safeParse(m, o);
        if (!g.success) throw new xn([i(m, g.error)]);
        const y = Reflect.apply(f, this, g.data),
          v = h._def.returns.safeParse(y, o);
        if (!v.success) throw new xn([l(y, v.error)]);
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
    return new ss({ ...this._def, args: ha.create(t).rest(si.create()) });
  }
  returns(t) {
    return new ss({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, i) {
    return new ss({
      args: t || ha.create([]).rest(si.create()),
      returns: r || si.create(),
      typeName: Ce.ZodFunction,
      ...Ue(i),
    });
  }
}
class Il extends Be {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Il.create = (n, t) => new Il({ getter: n, typeName: Ce.ZodLazy, ...Ue(t) });
class Jl extends Be {
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
Jl.create = (n, t) => new Jl({ value: n, typeName: Ce.ZodLiteral, ...Ue(t) });
function ib(n, t) {
  return new Dr({ values: n, typeName: Ce.ZodEnum, ...Ue(t) });
}
class Dr extends Be {
  constructor() {
    super(...arguments), zl.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const r = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        oe(r, { expected: Ge.joinValues(i), received: r.parsedType, code: J.invalid_type }), Ae
      );
    }
    if ((nc(this, zl) || tb(this, zl, new Set(this._def.values)), !nc(this, zl).has(t.data))) {
      const r = this._getOrReturnCtx(t),
        i = this._def.values;
      return oe(r, { received: r.data, code: J.invalid_enum_value, options: i }), Ae;
    }
    return an(t.data);
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
    return Dr.create(t, { ...this._def, ...r });
  }
  exclude(t, r = this._def) {
    return Dr.create(
      this.options.filter((i) => !t.includes(i)),
      { ...this._def, ...r }
    );
  }
}
zl = new WeakMap();
Dr.create = ib;
class eu extends Be {
  constructor() {
    super(...arguments), Ul.set(this, void 0);
  }
  _parse(t) {
    const r = Ge.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(t);
    if (i.parsedType !== de.string && i.parsedType !== de.number) {
      const l = Ge.objectValues(r);
      return (
        oe(i, { expected: Ge.joinValues(l), received: i.parsedType, code: J.invalid_type }), Ae
      );
    }
    if (
      (nc(this, Ul) || tb(this, Ul, new Set(Ge.getValidEnumValues(this._def.values))),
      !nc(this, Ul).has(t.data))
    ) {
      const l = Ge.objectValues(r);
      return oe(i, { received: i.data, code: J.invalid_enum_value, options: l }), Ae;
    }
    return an(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ul = new WeakMap();
eu.create = (n, t) => new eu({ values: n, typeName: Ce.ZodNativeEnum, ...Ue(t) });
class bs extends Be {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== de.promise && r.common.async === !1)
      return oe(r, { code: J.invalid_type, expected: de.promise, received: r.parsedType }), Ae;
    const i = r.parsedType === de.promise ? r.data : Promise.resolve(r.data);
    return an(
      i.then((l) =>
        this._def.type.parseAsync(l, { path: r.path, errorMap: r.common.contextualErrorMap })
      )
    );
  }
}
bs.create = (n, t) => new bs({ type: n, typeName: Ce.ZodPromise, ...Ue(t) });
class Qn extends Be {
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
              ? is(m.value)
              : m;
        });
      {
        if (r.value === 'aborted') return Ae;
        const h = this._def.schema._parseSync({ data: f, path: i.path, parent: i });
        return h.status === 'aborted'
          ? Ae
          : h.status === 'dirty' || r.value === 'dirty'
            ? is(h.value)
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
        if (!li(f)) return f;
        const h = l.transform(f.value, o);
        if (h instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return { status: r.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((f) =>
            li(f)
              ? Promise.resolve(l.transform(f.value, o)).then((h) => ({
                  status: r.value,
                  value: h,
                }))
              : f
          );
    Ge.assertNever(l);
  }
}
Qn.create = (n, t, r) => new Qn({ schema: n, typeName: Ce.ZodEffects, effect: t, ...Ue(r) });
Qn.createWithPreprocess = (n, t, r) =>
  new Qn({
    schema: t,
    effect: { type: 'preprocess', transform: n },
    typeName: Ce.ZodEffects,
    ...Ue(r),
  });
class ca extends Be {
  _parse(t) {
    return this._getType(t) === de.undefined ? an(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ca.create = (n, t) => new ca({ innerType: n, typeName: Ce.ZodOptional, ...Ue(t) });
class Ar extends Be {
  _parse(t) {
    return this._getType(t) === de.null ? an(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ar.create = (n, t) => new Ar({ innerType: n, typeName: Ce.ZodNullable, ...Ue(t) });
class tu extends Be {
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
tu.create = (n, t) =>
  new tu({
    innerType: n,
    typeName: Ce.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...Ue(t),
  });
class nu extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = { ...r, common: { ...r.common, issues: [] } },
      l = this._def.innerType._parse({ data: i.data, path: i.path, parent: { ...i } });
    return Pl(l)
      ? l.then((o) => ({
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new xn(i.common.issues);
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
                    return new xn(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
nu.create = (n, t) =>
  new nu({
    innerType: n,
    typeName: Ce.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...Ue(t),
  });
class sc extends Be {
  _parse(t) {
    if (this._getType(t) !== de.nan) {
      const i = this._getOrReturnCtx(t);
      return oe(i, { code: J.invalid_type, expected: de.nan, received: i.parsedType }), Ae;
    }
    return { status: 'valid', value: t.data };
  }
}
sc.create = (n) => new sc({ typeName: Ce.ZodNaN, ...Ue(n) });
const IE = Symbol('zod_brand');
class Yh extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = r.data;
    return this._def.type._parse({ data: i, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class yu extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({ data: i.data, path: i.path, parent: i });
        return o.status === 'aborted'
          ? Ae
          : o.status === 'dirty'
            ? (r.dirty(), is(o.value))
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
    return new yu({ in: t, out: r, typeName: Ce.ZodPipeline });
  }
}
class au extends Be {
  _parse(t) {
    const r = this._def.innerType._parse(t),
      i = (l) => (li(l) && (l.value = Object.freeze(l.value)), l);
    return Pl(r) ? r.then((l) => i(l)) : i(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
au.create = (n, t) => new au({ innerType: n, typeName: Ce.ZodReadonly, ...Ue(t) });
function gv(n, t) {
  const r = typeof n == 'function' ? n(t) : typeof n == 'string' ? { message: n } : n;
  return typeof r == 'string' ? { message: r } : r;
}
function sb(n, t = {}, r) {
  return n
    ? vs.create().superRefine((i, l) => {
        var o, f;
        const h = n(i);
        if (h instanceof Promise)
          return h.then((m) => {
            var g, y;
            if (!m) {
              const v = gv(t, i),
                b =
                  (y = (g = v.fatal) !== null && g !== void 0 ? g : r) !== null && y !== void 0
                    ? y
                    : !0;
              l.addIssue({ code: 'custom', ...v, fatal: b });
            }
          });
        if (!h) {
          const m = gv(t, i),
            g =
              (f = (o = m.fatal) !== null && o !== void 0 ? o : r) !== null && f !== void 0
                ? f
                : !0;
          l.addIssue({ code: 'custom', ...m, fatal: g });
        }
      })
    : vs.create();
}
const JE = { object: mt.lazycreate };
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
const eO = (n, t = { message: `Input not instance of ${n.name}` }) => sb((r) => r instanceof n, t),
  lb = Fn.create,
  ub = Mr.create,
  tO = sc.create,
  nO = Nr.create,
  ob = Gl.create,
  aO = ui.create,
  rO = ac.create,
  iO = $l.create,
  sO = Ql.create,
  lO = vs.create,
  uO = si.create,
  oO = Ya.create,
  cO = rc.create,
  fO = Gn.create,
  dO = mt.create,
  hO = mt.strictCreate,
  mO = Kl.create,
  gO = Sc.create,
  yO = Wl.create,
  pO = ha.create,
  vO = Xl.create,
  bO = ic.create,
  _O = oi.create,
  SO = ss.create,
  xO = Il.create,
  wO = Jl.create,
  EO = Dr.create,
  OO = eu.create,
  TO = bs.create,
  yv = Qn.create,
  CO = ca.create,
  MO = Ar.create,
  NO = Qn.createWithPreprocess,
  DO = yu.create,
  AO = () => lb().optional(),
  kO = () => ub().optional(),
  RO = () => ob().optional(),
  jO = {
    string: (n) => Fn.create({ ...n, coerce: !0 }),
    number: (n) => Mr.create({ ...n, coerce: !0 }),
    boolean: (n) => Gl.create({ ...n, coerce: !0 }),
    bigint: (n) => Nr.create({ ...n, coerce: !0 }),
    date: (n) => ui.create({ ...n, coerce: !0 }),
  },
  zO = Ae;
var ne = Object.freeze({
  __proto__: null,
  defaultErrorMap: ps,
  setErrorMap: NE,
  getErrorMap: ec,
  makeIssue: tc,
  EMPTY_PATH: DE,
  addIssueToContext: oe,
  ParseStatus: Wt,
  INVALID: Ae,
  DIRTY: is,
  OK: an,
  isAborted: ph,
  isDirty: vh,
  isValid: li,
  isAsync: Pl,
  get util() {
    return Ge;
  },
  get objectUtil() {
    return yh;
  },
  ZodParsedType: de,
  getParsedType: ja,
  ZodType: Be,
  datetimeRegex: rb,
  ZodString: Fn,
  ZodNumber: Mr,
  ZodBigInt: Nr,
  ZodBoolean: Gl,
  ZodDate: ui,
  ZodSymbol: ac,
  ZodUndefined: $l,
  ZodNull: Ql,
  ZodAny: vs,
  ZodUnknown: si,
  ZodNever: Ya,
  ZodVoid: rc,
  ZodArray: Gn,
  ZodObject: mt,
  ZodUnion: Kl,
  ZodDiscriminatedUnion: Sc,
  ZodIntersection: Wl,
  ZodTuple: ha,
  ZodRecord: Xl,
  ZodMap: ic,
  ZodSet: oi,
  ZodFunction: ss,
  ZodLazy: Il,
  ZodLiteral: Jl,
  ZodEnum: Dr,
  ZodNativeEnum: eu,
  ZodPromise: bs,
  ZodEffects: Qn,
  ZodTransformer: Qn,
  ZodOptional: ca,
  ZodNullable: Ar,
  ZodDefault: tu,
  ZodCatch: nu,
  ZodNaN: sc,
  BRAND: IE,
  ZodBranded: Yh,
  ZodPipeline: yu,
  ZodReadonly: au,
  custom: sb,
  Schema: Be,
  ZodSchema: Be,
  late: JE,
  get ZodFirstPartyTypeKind() {
    return Ce;
  },
  coerce: jO,
  any: lO,
  array: fO,
  bigint: nO,
  boolean: ob,
  date: aO,
  discriminatedUnion: gO,
  effect: yv,
  enum: EO,
  function: SO,
  instanceof: eO,
  intersection: yO,
  lazy: xO,
  literal: wO,
  map: bO,
  nan: tO,
  nativeEnum: OO,
  never: oO,
  null: sO,
  nullable: MO,
  number: ub,
  object: dO,
  oboolean: RO,
  onumber: kO,
  optional: CO,
  ostring: AO,
  pipeline: DO,
  preprocess: NO,
  promise: TO,
  record: vO,
  set: _O,
  strictObject: hO,
  string: lb,
  symbol: rO,
  transformer: yv,
  tuple: pO,
  undefined: iO,
  union: mO,
  unknown: uO,
  void: cO,
  NEVER: zO,
  ZodIssueCode: J,
  quotelessJson: ME,
  ZodError: xn,
});
const UO = ne.object({
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
function LO(n) {
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
function BO(n) {
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
async function HO() {
  const n = `${jo.clientId}:${jo.secretId}`,
    t = btoa(n);
  try {
    const r = await fetch(`https://auth.${jo.region}.commercetools.com/oauth/token`, {
      method: 'POST',
      headers: { Authorization: `Basic ${t}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&scope=manage_customers:${jo.projectKey}`,
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
const jo = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function VO(n, t) {
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
    if (!BO(o)) throw new Error('Unknown error occurred during getting token');
    return o;
  } catch (l) {
    const o = l instanceof Error ? l.message : 'Unknown error occurred';
    throw new Error(o);
  }
}
const Id = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function qO(n) {
  const t = await HO();
  if (!t) throw new Error('Failed to get login token');
  try {
    const r = await fetch(`https://api.${Id.region}.commercetools.com/${Id.projectKey}/login`, {
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
    if (!LO(i)) throw new Error('Invalid login response format');
    const l = await VO(Id, n);
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
function YO() {
  var h, m;
  const {
      register: n,
      handleSubmit: t,
      formState: { errors: r, isValid: i },
      setError: l,
    } = X0({ mode: 'onChange', resolver: J0(UO) }),
    o = Yt(),
    f = async (g) => {
      try {
        'customer' in (await qO(g))
          ? await o('/')
          : l('root', { type: 'manual', message: 'Invalid email or password' });
      } catch (y) {
        const v = y instanceof Error ? y.message : 'Something went wrong';
        l('root', { type: 'manual', message: v });
      }
    };
  return S.jsxs('section', {
    className:
      'w-[35%] p-[10px] font-main rounded-[20px] text-xl min-w-[300px] !text-goldenrod max-[400px]:p-[3px], max-[400px]:min-w-[250px]',
    children: [
      S.jsxs('form', {
        className: 'flex flex-col gap-6',
        onSubmit: (g) => {
          g.preventDefault(), t(f)(g);
        },
        children: [
          S.jsx('h1', {
            className: 'font-additional self-center text-3xl font-bold',
            children: ' Login ',
          }),
          S.jsx(ev, {
            register: n('email'),
            errorMessage: (h = r.email) == null ? void 0 : h.message,
            type: 'text',
            label: 'Email',
            placeholder: 'Enter you email',
            required: !0,
          }),
          S.jsx(ev, {
            register: n('password'),
            errorMessage: (m = r.password) == null ? void 0 : m.message,
            type: 'password',
            label: 'Password',
            placeholder: 'Enter you password',
            required: !0,
          }),
          S.jsx('button', {
            type: 'submit',
            className:
              'w-[100%] m-auto !border-[2px] rounded-lg border-goldenrod !bg-goldenrod text-white hover:!bg-goldenrod/70 hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-olive focus:!outline-0',
            disabled: !i,
            children: 'Login',
          }),
        ],
      }),
      r.root && S.jsx('p', { className: 'text-red-500 text-xl mt-2', children: r.root.message }),
      S.jsxs('div', {
        children: [
          S.jsx('p', { children: "Don't have an account?" }),
          S.jsx('a', {
            onClick: () => void o('/registration'),
            className: '!text-olive hover:!text-goldenrod cursor-pointer',
            children: 'Sign Up!',
          }),
        ],
      }),
    ],
  });
}
function ZO() {
  const n = Yt(),
    t = !!localStorage.getItem('firstName');
  return (
    k.useEffect(() => {
      t && n('/', { replace: !0 });
    }, [t, n]),
    S.jsx('section', {
      className: 'w-screen flex justify-center max-w-[1440px] m-auto items-center mw',
      children: S.jsx(YO, {}),
    })
  );
}
const cb = [
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
function FO({ error: n, id: t, register: r }) {
  return S.jsxs('div', {
    className: 'relative flex flex-wrap w-[300px]',
    children: [
      S.jsx('label', {
        className: 'p-1 capitalize text-goldenrod font-medium w-[300px] font-main',
        htmlFor: t,
        children: 'Country',
      }),
      S.jsxs('select', {
        className:
          'capitalize p-1 bg-khaki rounded-lg text-olive min-w-[300px] inline-block hover:cursor-pointer',
        defaultValue: '',
        id: t,
        name: t,
        ...r,
        children: [
          S.jsx('option', { value: '', disabled: !0, hidden: !0, children: 'Select a country' }),
          cb.map(({ code: i, name: l }) =>
            S.jsx('option', { value: i, className: 'text-olive', children: l }, i)
          ),
        ],
      }),
      S.jsx('p', {
        className: 'text-sm text-coral h-5 p-1 w-[300px] break-words whitespace-normal',
        children: n ?? ' ',
      }),
    ],
  });
}
const fb = 6048e5,
  PO = 864e5,
  pv = Symbol.for('constructDateFrom');
function At(n, t) {
  return typeof n == 'function'
    ? n(t)
    : n && typeof n == 'object' && pv in n
      ? n[pv](t)
      : n instanceof Date
        ? new n.constructor(t)
        : new Date(t);
}
function lt(n, t) {
  return At(t || n, n);
}
function db(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in);
  return isNaN(t) ? At(n, NaN) : (t && i.setDate(i.getDate() + t), i);
}
function hb(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in);
  if (isNaN(t)) return At(n, NaN);
  if (!t) return i;
  const l = i.getDate(),
    o = At(n, i.getTime());
  o.setMonth(i.getMonth() + t + 1, 0);
  const f = o.getDate();
  return l >= f ? o : (i.setFullYear(o.getFullYear(), o.getMonth(), l), i);
}
let GO = {};
function pu() {
  return GO;
}
function _s(n, t) {
  var h, m, g, y;
  const r = pu(),
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
function ru(n, t) {
  return _s(n, { ...t, weekStartsOn: 1 });
}
function mb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = At(r, 0);
  l.setFullYear(i + 1, 0, 4), l.setHours(0, 0, 0, 0);
  const o = ru(l),
    f = At(r, 0);
  f.setFullYear(i, 0, 4), f.setHours(0, 0, 0, 0);
  const h = ru(f);
  return r.getTime() >= o.getTime() ? i + 1 : r.getTime() >= h.getTime() ? i : i - 1;
}
function vv(n) {
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
function Os(n, ...t) {
  const r = At.bind(
    null,
    t.find((i) => typeof i == 'object')
  );
  return t.map(r);
}
function iu(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function gb(n, t, r) {
  const [i, l] = Os(r == null ? void 0 : r.in, n, t),
    o = iu(i),
    f = iu(l),
    h = +o - vv(o),
    m = +f - vv(f);
  return Math.round((h - m) / PO);
}
function $O(n, t) {
  const r = mb(n, t),
    i = At(n, 0);
  return i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0), ru(i);
}
function QO(n, t, r) {
  return db(n, t * 7, r);
}
function KO(n, t, r) {
  return hb(n, t * 12, r);
}
function WO(n, t) {
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
function XO(n, t) {
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
function IO(n, t, r) {
  const [i, l] = Os(r == null ? void 0 : r.in, n, t);
  return +iu(i) == +iu(l);
}
function yb(n) {
  return (
    n instanceof Date ||
    (typeof n == 'object' && Object.prototype.toString.call(n) === '[object Date]')
  );
}
function JO(n) {
  return !((!yb(n) && typeof n != 'number') || isNaN(+lt(n)));
}
function e2(n, t, r) {
  const [i, l] = Os(r == null ? void 0 : r.in, n, t),
    o = i.getFullYear() - l.getFullYear(),
    f = i.getMonth() - l.getMonth();
  return o * 12 + f;
}
function t2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getMonth();
  return r.setFullYear(r.getFullYear(), i + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function n2(n, t) {
  const [r, i] = Os(n, t.start, t.end);
  return { start: r, end: i };
}
function a2(n, t) {
  const { start: r, end: i } = n2(t == null ? void 0 : t.in, n);
  let l = +r > +i;
  const o = l ? +r : +i,
    f = l ? i : r;
  f.setHours(0, 0, 0, 0), f.setDate(1);
  let h = 1;
  const m = [];
  for (; +f <= o; ) m.push(At(r, f)), f.setMonth(f.getMonth() + h);
  return l ? m.reverse() : m;
}
function r2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function i2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear();
  return r.setFullYear(i + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function pb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function vb(n, t) {
  var h, m, g, y;
  const r = pu(),
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
function s2(n, t) {
  return vb(n, { ...t, weekStartsOn: 1 });
}
const l2 = {
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
  u2 = (n, t, r) => {
    let i;
    const l = l2[n];
    return (
      typeof l == 'string'
        ? (i = l)
        : t === 1
          ? (i = l.one)
          : (i = l.other.replace('{{count}}', t.toString())),
      r != null && r.addSuffix ? (r.comparison && r.comparison > 0 ? 'in ' + i : i + ' ago') : i
    );
  };
function Jd(n) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[r] || n.formats[n.defaultWidth];
  };
}
const o2 = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  c2 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  f2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  d2 = {
    date: Jd({ formats: o2, defaultWidth: 'full' }),
    time: Jd({ formats: c2, defaultWidth: 'full' }),
    dateTime: Jd({ formats: f2, defaultWidth: 'full' }),
  },
  h2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  m2 = (n, t, r, i) => h2[n];
function Dl(n) {
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
const g2 = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  y2 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  p2 = {
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
  v2 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  b2 = {
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
  _2 = {
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
  S2 = (n, t) => {
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
  x2 = {
    ordinalNumber: S2,
    era: Dl({ values: g2, defaultWidth: 'wide' }),
    quarter: Dl({ values: y2, defaultWidth: 'wide', argumentCallback: (n) => n - 1 }),
    month: Dl({ values: p2, defaultWidth: 'wide' }),
    day: Dl({ values: v2, defaultWidth: 'wide' }),
    dayPeriod: Dl({
      values: b2,
      defaultWidth: 'wide',
      formattingValues: _2,
      defaultFormattingWidth: 'wide',
    }),
  };
function Al(n) {
  return (t, r = {}) => {
    const i = r.width,
      l = (i && n.matchPatterns[i]) || n.matchPatterns[n.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const f = o[0],
      h = (i && n.parsePatterns[i]) || n.parsePatterns[n.defaultParseWidth],
      m = Array.isArray(h) ? E2(h, (v) => v.test(f)) : w2(h, (v) => v.test(f));
    let g;
    (g = n.valueCallback ? n.valueCallback(m) : m), (g = r.valueCallback ? r.valueCallback(g) : g);
    const y = t.slice(f.length);
    return { value: g, rest: y };
  };
}
function w2(n, t) {
  for (const r in n) if (Object.prototype.hasOwnProperty.call(n, r) && t(n[r])) return r;
}
function E2(n, t) {
  for (let r = 0; r < n.length; r++) if (t(n[r])) return r;
}
function O2(n) {
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
const T2 = /^(\d+)(th|st|nd|rd)?/i,
  C2 = /\d+/i,
  M2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  N2 = { any: [/^b/i, /^(a|c)/i] },
  D2 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  A2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  k2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  R2 = {
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
  j2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  z2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  U2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  L2 = {
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
  B2 = {
    ordinalNumber: O2({
      matchPattern: T2,
      parsePattern: C2,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: Al({
      matchPatterns: M2,
      defaultMatchWidth: 'wide',
      parsePatterns: N2,
      defaultParseWidth: 'any',
    }),
    quarter: Al({
      matchPatterns: D2,
      defaultMatchWidth: 'wide',
      parsePatterns: A2,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: Al({
      matchPatterns: k2,
      defaultMatchWidth: 'wide',
      parsePatterns: R2,
      defaultParseWidth: 'any',
    }),
    day: Al({
      matchPatterns: j2,
      defaultMatchWidth: 'wide',
      parsePatterns: z2,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Al({
      matchPatterns: U2,
      defaultMatchWidth: 'any',
      parsePatterns: L2,
      defaultParseWidth: 'any',
    }),
  },
  Zh = {
    code: 'en-US',
    formatDistance: u2,
    formatLong: d2,
    formatRelative: m2,
    localize: x2,
    match: B2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function H2(n, t) {
  const r = lt(n, t == null ? void 0 : t.in);
  return gb(r, pb(r)) + 1;
}
function bb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = +ru(r) - +$O(r);
  return Math.round(i / fb) + 1;
}
function _b(n, t) {
  var y, v, b, w;
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = pu(),
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
  const h = _s(f, t),
    m = At((t == null ? void 0 : t.in) || n, 0);
  m.setFullYear(i, 0, o), m.setHours(0, 0, 0, 0);
  const g = _s(m, t);
  return +r >= +h ? i + 1 : +r >= +g ? i : i - 1;
}
function V2(n, t) {
  var h, m, g, y;
  const r = pu(),
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
    l = _b(n, t),
    o = At((t == null ? void 0 : t.in) || n, 0);
  return o.setFullYear(l, 0, i), o.setHours(0, 0, 0, 0), _s(o, t);
}
function Sb(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = +_s(r, t) - +V2(r, t);
  return Math.round(i / fb) + 1;
}
function nt(n, t) {
  const r = n < 0 ? '-' : '',
    i = Math.abs(n).toString().padStart(t, '0');
  return r + i;
}
const br = {
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
  ts = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  bv = {
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
      return br.y(n, t);
    },
    Y: function (n, t, r, i) {
      const l = _b(n, i),
        o = l > 0 ? l : 1 - l;
      if (t === 'YY') {
        const f = o % 100;
        return nt(f, 2);
      }
      return t === 'Yo' ? r.ordinalNumber(o, { unit: 'year' }) : nt(o, t.length);
    },
    R: function (n, t) {
      const r = mb(n);
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
          return br.M(n, t);
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
      const l = Sb(n, i);
      return t === 'wo' ? r.ordinalNumber(l, { unit: 'week' }) : nt(l, t.length);
    },
    I: function (n, t, r) {
      const i = bb(n);
      return t === 'Io' ? r.ordinalNumber(i, { unit: 'week' }) : nt(i, t.length);
    },
    d: function (n, t, r) {
      return t === 'do' ? r.ordinalNumber(n.getDate(), { unit: 'date' }) : br.d(n, t);
    },
    D: function (n, t, r) {
      const i = H2(n);
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
        (i === 12 ? (l = ts.noon) : i === 0 ? (l = ts.midnight) : (l = i / 12 >= 1 ? 'pm' : 'am'),
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
          ? (l = ts.evening)
          : i >= 12
            ? (l = ts.afternoon)
            : i >= 4
              ? (l = ts.morning)
              : (l = ts.night),
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
      return br.h(n, t);
    },
    H: function (n, t, r) {
      return t === 'Ho' ? r.ordinalNumber(n.getHours(), { unit: 'hour' }) : br.H(n, t);
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
      return t === 'mo' ? r.ordinalNumber(n.getMinutes(), { unit: 'minute' }) : br.m(n, t);
    },
    s: function (n, t, r) {
      return t === 'so' ? r.ordinalNumber(n.getSeconds(), { unit: 'second' }) : br.s(n, t);
    },
    S: function (n, t) {
      return br.S(n, t);
    },
    X: function (n, t, r) {
      const i = n.getTimezoneOffset();
      if (i === 0) return 'Z';
      switch (t) {
        case 'X':
          return Sv(i);
        case 'XXXX':
        case 'XX':
          return Ir(i);
        case 'XXXXX':
        case 'XXX':
        default:
          return Ir(i, ':');
      }
    },
    x: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'x':
          return Sv(i);
        case 'xxxx':
        case 'xx':
          return Ir(i);
        case 'xxxxx':
        case 'xxx':
        default:
          return Ir(i, ':');
      }
    },
    O: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + _v(i, ':');
        case 'OOOO':
        default:
          return 'GMT' + Ir(i, ':');
      }
    },
    z: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + _v(i, ':');
        case 'zzzz':
        default:
          return 'GMT' + Ir(i, ':');
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
function _v(n, t = '') {
  const r = n > 0 ? '-' : '+',
    i = Math.abs(n),
    l = Math.trunc(i / 60),
    o = i % 60;
  return o === 0 ? r + String(l) : r + String(l) + t + nt(o, 2);
}
function Sv(n, t) {
  return n % 60 === 0 ? (n > 0 ? '-' : '+') + nt(Math.abs(n) / 60, 2) : Ir(n, t);
}
function Ir(n, t = '') {
  const r = n > 0 ? '-' : '+',
    i = Math.abs(n),
    l = nt(Math.trunc(i / 60), 2),
    o = nt(i % 60, 2);
  return r + l + t + o;
}
const xv = (n, t) => {
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
  xb = (n, t) => {
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
  q2 = (n, t) => {
    const r = n.match(/(P+)(p+)?/) || [],
      i = r[1],
      l = r[2];
    if (!l) return xv(n, t);
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
    return o.replace('{{date}}', xv(i, t)).replace('{{time}}', xb(l, t));
  },
  Y2 = { p: xb, P: q2 },
  Z2 = /^D+$/,
  F2 = /^Y+$/,
  P2 = ['D', 'DD', 'YY', 'YYYY'];
function G2(n) {
  return Z2.test(n);
}
function $2(n) {
  return F2.test(n);
}
function Q2(n, t, r) {
  const i = K2(n, t, r);
  if ((console.warn(i), P2.includes(n))) throw new RangeError(i);
}
function K2(n, t, r) {
  const i = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const W2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  X2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  I2 = /^'([^]*?)'?$/,
  J2 = /''/g,
  eT = /[a-zA-Z]/;
function Qo(n, t, r) {
  var y, v, b, w, x, N, C, D;
  const i = pu(),
    l = (r == null ? void 0 : r.locale) ?? i.locale ?? Zh,
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
      ((N = (x = r == null ? void 0 : r.locale) == null ? void 0 : x.options) == null
        ? void 0
        : N.weekStartsOn) ??
      i.weekStartsOn ??
      ((D = (C = i.locale) == null ? void 0 : C.options) == null ? void 0 : D.weekStartsOn) ??
      0,
    h = lt(n, r == null ? void 0 : r.in);
  if (!JO(h)) throw new RangeError('Invalid time value');
  let m = t
    .match(X2)
    .map((E) => {
      const R = E[0];
      if (R === 'p' || R === 'P') {
        const Y = Y2[R];
        return Y(E, l.formatLong);
      }
      return E;
    })
    .join('')
    .match(W2)
    .map((E) => {
      if (E === "''") return { isToken: !1, value: "'" };
      const R = E[0];
      if (R === "'") return { isToken: !1, value: tT(E) };
      if (bv[R]) return { isToken: !0, value: E };
      if (R.match(eT))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + R + '`'
        );
      return { isToken: !1, value: E };
    });
  l.localize.preprocessor && (m = l.localize.preprocessor(h, m));
  const g = { firstWeekContainsDate: o, weekStartsOn: f, locale: l };
  return m
    .map((E) => {
      if (!E.isToken) return E.value;
      const R = E.value;
      ((!(r != null && r.useAdditionalWeekYearTokens) && $2(R)) ||
        (!(r != null && r.useAdditionalDayOfYearTokens) && G2(R))) &&
        Q2(R, t, String(n));
      const Y = bv[R[0]];
      return Y(h, R, l.localize, g);
    })
    .join('');
}
function tT(n) {
  const t = n.match(I2);
  return t ? t[1].replace(J2, "'") : n;
}
function nT(n, t) {
  const r = lt(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = r.getMonth(),
    o = At(r, 0);
  return o.setFullYear(i, l + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function aT(n, t) {
  return lt(n, t == null ? void 0 : t.in).getMonth();
}
function rT(n, t) {
  return lt(n, t == null ? void 0 : t.in).getFullYear();
}
function iT(n, t) {
  return +lt(n) > +lt(t);
}
function sT(n, t) {
  return +lt(n) < +lt(t);
}
function lT(n, t, r) {
  const [i, l] = Os(r == null ? void 0 : r.in, n, t);
  return i.getFullYear() === l.getFullYear() && i.getMonth() === l.getMonth();
}
function uT(n, t, r) {
  const [i, l] = Os(r == null ? void 0 : r.in, n, t);
  return i.getFullYear() === l.getFullYear();
}
function oT(n, t, r) {
  const i = lt(n, r == null ? void 0 : r.in),
    l = i.getFullYear(),
    o = i.getDate(),
    f = At(n, 0);
  f.setFullYear(l, t, 15), f.setHours(0, 0, 0, 0);
  const h = nT(f);
  return i.setMonth(t, Math.min(o, h)), i;
}
function cT(n, t, r) {
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
var gt;
(function (n) {
  (n.disabled = 'disabled'),
    (n.hidden = 'hidden'),
    (n.outside = 'outside'),
    (n.focused = 'focused'),
    (n.today = 'today');
})(gt || (gt = {}));
var Pn;
(function (n) {
  (n.range_end = 'range_end'),
    (n.range_middle = 'range_middle'),
    (n.range_start = 'range_start'),
    (n.selected = 'selected');
})(Pn || (Pn = {}));
var _n;
(function (n) {
  (n.weeks_before_enter = 'weeks_before_enter'),
    (n.weeks_before_exit = 'weeks_before_exit'),
    (n.weeks_after_enter = 'weeks_after_enter'),
    (n.weeks_after_exit = 'weeks_after_exit'),
    (n.caption_after_enter = 'caption_after_enter'),
    (n.caption_after_exit = 'caption_after_exit'),
    (n.caption_before_enter = 'caption_before_enter'),
    (n.caption_before_exit = 'caption_before_exit');
})(_n || (_n = {}));
const eh = {},
  Ll = {};
function ql(n, t) {
  try {
    const i =
      (
        eh[n] ||
        (eh[n] = new Intl.DateTimeFormat('en-GB', {
          timeZone: n,
          hour: 'numeric',
          timeZoneName: 'longOffset',
        }).format)
      )(t).split('GMT')[1] || '';
    return i in Ll ? Ll[i] : wv(i, i.split(':'));
  } catch {
    if (n in Ll) return Ll[n];
    const r = n == null ? void 0 : n.match(fT);
    return r ? wv(n, r.slice(1)) : NaN;
  }
}
const fT = /([+-]\d\d):?(\d\d)?/;
function wv(n, t) {
  const r = +t[0],
    i = +(t[1] || 0);
  return (Ll[n] = r > 0 ? r * 60 + i : r * 60 - i);
}
class ua extends Date {
  constructor(...t) {
    super(),
      t.length > 1 && typeof t[t.length - 1] == 'string' && (this.timeZone = t.pop()),
      (this.internal = new Date()),
      isNaN(ql(this.timeZone, this))
        ? this.setTime(NaN)
        : t.length
          ? typeof t[0] == 'number' &&
            (t.length === 1 || (t.length === 2 && typeof t[1] != 'number'))
            ? this.setTime(t[0])
            : typeof t[0] == 'string'
              ? this.setTime(+new Date(t[0]))
              : t[0] instanceof Date
                ? this.setTime(+t[0])
                : (this.setTime(+new Date(...t)), wb(this), _h(this))
          : this.setTime(Date.now());
  }
  static tz(t, ...r) {
    return r.length ? new ua(...r, t) : new ua(Date.now(), t);
  }
  withTimeZone(t) {
    return new ua(+this, t);
  }
  getTimezoneOffset() {
    return -ql(this.timeZone, this);
  }
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), _h(this), +this;
  }
  [Symbol.for('constructDateFrom')](t) {
    return new ua(+new Date(t), this.timeZone);
  }
}
const Ev = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!Ev.test(n)) return;
  const t = n.replace(Ev, '$1UTC');
  ua.prototype[t] &&
    (n.startsWith('get')
      ? (ua.prototype[n] = function () {
          return this.internal[t]();
        })
      : ((ua.prototype[n] = function () {
          return Date.prototype[t].apply(this.internal, arguments), dT(this), +this;
        }),
        (ua.prototype[t] = function () {
          return Date.prototype[t].apply(this, arguments), _h(this), +this;
        })));
});
function _h(n) {
  n.internal.setTime(+n),
    n.internal.setUTCMinutes(n.internal.getUTCMinutes() - n.getTimezoneOffset());
}
function dT(n) {
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
    wb(n);
}
function wb(n) {
  const t = ql(n.timeZone, n),
    r = new Date(+n);
  r.setUTCHours(r.getUTCHours() - 1);
  const i = -new Date(+n).getTimezoneOffset(),
    l = -new Date(+r).getTimezoneOffset(),
    o = i - l,
    f = Date.prototype.getHours.apply(n) !== n.internal.getUTCHours();
  o && f && n.internal.setUTCMinutes(n.internal.getUTCMinutes() + o);
  const h = i - t;
  h && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + h);
  const m = ql(n.timeZone, n),
    y = -new Date(+n).getTimezoneOffset() - m,
    v = m !== t,
    b = y - h;
  if (v && b) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + b);
    const w = ql(n.timeZone, n),
      x = m - w;
    x &&
      (n.internal.setUTCMinutes(n.internal.getUTCMinutes() + x),
      Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + x));
  }
}
class Cr extends ua {
  static tz(t, ...r) {
    return r.length ? new Cr(...r, t) : new Cr(Date.now(), t);
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
    return `${t} GMT${r}${i}${l} (${hT(this.timeZone, this)})`;
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
    return new Cr(+this, t);
  }
  [Symbol.for('constructDateFrom')](t) {
    return new Cr(+new Date(t), this.timeZone);
  }
}
function hT(n, t) {
  return new Intl.DateTimeFormat('en-GB', { timeZone: n, timeZoneName: 'long' })
    .format(t)
    .slice(12);
}
const Ov = 5,
  mT = 4;
function gT(n, t) {
  const r = t.startOfMonth(n),
    i = r.getDay() > 0 ? r.getDay() : 7,
    l = t.addDays(n, -i + 1),
    o = t.addDays(l, Ov * 7 - 1);
  return t.getMonth(n) === t.getMonth(o) ? Ov : mT;
}
function Eb(n, t) {
  const r = t.startOfMonth(n),
    i = r.getDay();
  return i === 1 ? r : i === 0 ? t.addDays(r, -1 * 6) : t.addDays(r, -1 * (i - 1));
}
function yT(n, t) {
  const r = Eb(n, t),
    i = gT(n, t);
  return t.addDays(r, i * 7 - 1);
}
class Pa {
  constructor(t, r) {
    (this.Date = Date),
      (this.today = () => {
        var i;
        return (i = this.overrides) != null && i.today
          ? this.overrides.today()
          : this.options.timeZone
            ? Cr.tz(this.options.timeZone)
            : new this.Date();
      }),
      (this.newDate = (i, l, o) => {
        var f;
        return (f = this.overrides) != null && f.newDate
          ? this.overrides.newDate(i, l, o)
          : this.options.timeZone
            ? new Cr(i, l, o, this.options.timeZone)
            : new Date(i, l, o);
      }),
      (this.addDays = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addDays ? this.overrides.addDays(i, l) : db(i, l);
      }),
      (this.addMonths = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addMonths
          ? this.overrides.addMonths(i, l)
          : hb(i, l);
      }),
      (this.addWeeks = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addWeeks
          ? this.overrides.addWeeks(i, l)
          : QO(i, l);
      }),
      (this.addYears = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addYears
          ? this.overrides.addYears(i, l)
          : KO(i, l);
      }),
      (this.differenceInCalendarDays = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.differenceInCalendarDays
          ? this.overrides.differenceInCalendarDays(i, l)
          : gb(i, l);
      }),
      (this.differenceInCalendarMonths = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.differenceInCalendarMonths
          ? this.overrides.differenceInCalendarMonths(i, l)
          : e2(i, l);
      }),
      (this.eachMonthOfInterval = (i) => {
        var l;
        return (l = this.overrides) != null && l.eachMonthOfInterval
          ? this.overrides.eachMonthOfInterval(i)
          : a2(i);
      }),
      (this.endOfBroadcastWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfBroadcastWeek
          ? this.overrides.endOfBroadcastWeek(i, this)
          : yT(i, this);
      }),
      (this.endOfISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfISOWeek
          ? this.overrides.endOfISOWeek(i)
          : s2(i);
      }),
      (this.endOfMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfMonth ? this.overrides.endOfMonth(i) : t2(i);
      }),
      (this.endOfWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfWeek
          ? this.overrides.endOfWeek(i, this.options)
          : vb(i, this.options);
      }),
      (this.endOfYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfYear ? this.overrides.endOfYear(i) : i2(i);
      }),
      (this.format = (i, l) => {
        var f;
        const o =
          (f = this.overrides) != null && f.format
            ? this.overrides.format(i, l, this.options)
            : Qo(i, l, this.options);
        return this.options.numerals && this.options.numerals !== 'latn'
          ? this.replaceDigits(o)
          : o;
      }),
      (this.getISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.getISOWeek ? this.overrides.getISOWeek(i) : bb(i);
      }),
      (this.getMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.getMonth
          ? this.overrides.getMonth(i, this.options)
          : aT(i, this.options);
      }),
      (this.getYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.getYear
          ? this.overrides.getYear(i, this.options)
          : rT(i, this.options);
      }),
      (this.getWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.getWeek
          ? this.overrides.getWeek(i, this.options)
          : Sb(i, this.options);
      }),
      (this.isAfter = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isAfter ? this.overrides.isAfter(i, l) : iT(i, l);
      }),
      (this.isBefore = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isBefore
          ? this.overrides.isBefore(i, l)
          : sT(i, l);
      }),
      (this.isDate = (i) => {
        var l;
        return (l = this.overrides) != null && l.isDate ? this.overrides.isDate(i) : yb(i);
      }),
      (this.isSameDay = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameDay
          ? this.overrides.isSameDay(i, l)
          : IO(i, l);
      }),
      (this.isSameMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameMonth
          ? this.overrides.isSameMonth(i, l)
          : lT(i, l);
      }),
      (this.isSameYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameYear
          ? this.overrides.isSameYear(i, l)
          : uT(i, l);
      }),
      (this.max = (i) => {
        var l;
        return (l = this.overrides) != null && l.max ? this.overrides.max(i) : WO(i);
      }),
      (this.min = (i) => {
        var l;
        return (l = this.overrides) != null && l.min ? this.overrides.min(i) : XO(i);
      }),
      (this.setMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.setMonth
          ? this.overrides.setMonth(i, l)
          : oT(i, l);
      }),
      (this.setYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.setYear ? this.overrides.setYear(i, l) : cT(i, l);
      }),
      (this.startOfBroadcastWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfBroadcastWeek
          ? this.overrides.startOfBroadcastWeek(i, this)
          : Eb(i, this);
      }),
      (this.startOfDay = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfDay ? this.overrides.startOfDay(i) : iu(i);
      }),
      (this.startOfISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfISOWeek
          ? this.overrides.startOfISOWeek(i)
          : ru(i);
      }),
      (this.startOfMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfMonth
          ? this.overrides.startOfMonth(i)
          : r2(i);
      }),
      (this.startOfWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfWeek
          ? this.overrides.startOfWeek(i, this.options)
          : _s(i, this.options);
      }),
      (this.startOfYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfYear
          ? this.overrides.startOfYear(i)
          : pb(i);
      }),
      (this.options = { locale: Zh, ...t }),
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
const Ga = new Pa();
function pT(n, t, r = {}) {
  return Object.entries(n)
    .filter(([, l]) => l === !0)
    .reduce(
      (l, [o]) => (
        r[o] ? l.push(r[o]) : t[gt[o]] ? l.push(t[gt[o]]) : t[Pn[o]] && l.push(t[Pn[o]]), l
      ),
      [t[Te.Day]]
    );
}
function vT(n) {
  return ee.createElement('button', { ...n });
}
function bT(n) {
  return ee.createElement('span', { ...n });
}
function _T(n) {
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
function ST(n) {
  const { day: t, modifiers: r, ...i } = n;
  return ee.createElement('td', { ...i });
}
function xT(n) {
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
function wT(n) {
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
function ET(n) {
  return ee.createElement('div', { ...n });
}
function OT(n) {
  return ee.createElement('div', { ...n });
}
function TT(n) {
  const { calendarMonth: t, displayIndex: r, ...i } = n;
  return ee.createElement('div', { ...i }, n.children);
}
function CT(n) {
  const { calendarMonth: t, displayIndex: r, ...i } = n;
  return ee.createElement('div', { ...i });
}
function MT(n) {
  return ee.createElement('table', { ...n });
}
function NT(n) {
  return ee.createElement('div', { ...n });
}
const Ob = k.createContext(void 0);
function vu() {
  const n = k.useContext(Ob);
  if (n === void 0) throw new Error('useDayPicker() must be used within a custom component.');
  return n;
}
function DT(n) {
  const { components: t } = vu();
  return ee.createElement(t.Dropdown, { ...n });
}
function AT(n) {
  const { onPreviousClick: t, onNextClick: r, previousMonth: i, nextMonth: l, ...o } = n,
    {
      components: f,
      classNames: h,
      labels: { labelPrevious: m, labelNext: g },
    } = vu(),
    y = k.useCallback(
      (b) => {
        l && (r == null || r(b));
      },
      [l, r]
    ),
    v = k.useCallback(
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
function kT(n) {
  const { components: t } = vu();
  return ee.createElement(t.Button, { ...n });
}
function RT(n) {
  return ee.createElement('option', { ...n });
}
function jT(n) {
  const { components: t } = vu();
  return ee.createElement(t.Button, { ...n });
}
function zT(n) {
  const { rootRef: t, ...r } = n;
  return ee.createElement('div', { ...r, ref: t });
}
function UT(n) {
  return ee.createElement('select', { ...n });
}
function LT(n) {
  const { week: t, ...r } = n;
  return ee.createElement('tr', { ...r });
}
function BT(n) {
  return ee.createElement('th', { ...n });
}
function HT(n) {
  return ee.createElement('thead', { 'aria-hidden': !0 }, ee.createElement('tr', { ...n }));
}
function VT(n) {
  const { week: t, ...r } = n;
  return ee.createElement('th', { ...r });
}
function qT(n) {
  return ee.createElement('th', { ...n });
}
function YT(n) {
  return ee.createElement('tbody', { ...n });
}
function ZT(n) {
  const { components: t } = vu();
  return ee.createElement(t.Dropdown, { ...n });
}
const FT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Button: vT,
      CaptionLabel: bT,
      Chevron: _T,
      Day: ST,
      DayButton: xT,
      Dropdown: wT,
      DropdownNav: ET,
      Footer: OT,
      Month: TT,
      MonthCaption: CT,
      MonthGrid: MT,
      Months: NT,
      MonthsDropdown: DT,
      Nav: AT,
      NextMonthButton: kT,
      Option: RT,
      PreviousMonthButton: jT,
      Root: zT,
      Select: UT,
      Week: LT,
      WeekNumber: VT,
      WeekNumberHeader: qT,
      Weekday: BT,
      Weekdays: HT,
      Weeks: YT,
      YearsDropdown: ZT,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function PT(n) {
  return { ...FT, ...n };
}
function GT(n) {
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
function Tb() {
  const n = {};
  for (const t in Te) n[Te[t]] = `rdp-${Te[t]}`;
  for (const t in gt) n[gt[t]] = `rdp-${gt[t]}`;
  for (const t in Pn) n[Pn[t]] = `rdp-${Pn[t]}`;
  for (const t in _n) n[_n[t]] = `rdp-${_n[t]}`;
  return n;
}
function Cb(n, t, r) {
  return (r ?? new Pa(t)).format(n, 'LLLL y');
}
const $T = Cb;
function QT(n, t, r) {
  return (r ?? new Pa(t)).format(n, 'd');
}
function KT(n, t = Ga) {
  return t.format(n, 'LLLL');
}
function WT(n) {
  return n < 10 ? `0${n.toLocaleString()}` : `${n.toLocaleString()}`;
}
function XT() {
  return '';
}
function IT(n, t, r) {
  return (r ?? new Pa(t)).format(n, 'cccccc');
}
function Mb(n, t = Ga) {
  return t.format(n, 'yyyy');
}
const JT = Mb,
  eC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        formatCaption: Cb,
        formatDay: QT,
        formatMonthCaption: $T,
        formatMonthDropdown: KT,
        formatWeekNumber: WT,
        formatWeekNumberHeader: XT,
        formatWeekdayName: IT,
        formatYearCaption: JT,
        formatYearDropdown: Mb,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function tC(n) {
  return (
    n != null &&
      n.formatMonthCaption &&
      !n.formatCaption &&
      (n.formatCaption = n.formatMonthCaption),
    n != null &&
      n.formatYearCaption &&
      !n.formatYearDropdown &&
      (n.formatYearDropdown = n.formatYearCaption),
    { ...eC, ...n }
  );
}
function nC(n, t, r, i, l) {
  const { startOfMonth: o, startOfYear: f, endOfYear: h, eachMonthOfInterval: m, getMonth: g } = l;
  return m({ start: f(n), end: h(n) }).map((b) => {
    const w = i.formatMonthDropdown(b, l),
      x = g(b),
      N = (t && b < o(t)) || (r && b > o(r)) || !1;
    return { value: x, label: w, disabled: N };
  });
}
function aC(n, t = {}, r = {}) {
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
function rC(n, t, r) {
  const i = n.today(),
    l = t ? n.startOfISOWeek(i) : n.startOfWeek(i),
    o = [];
  for (let f = 0; f < 7; f++) {
    const h = n.addDays(l, f);
    o.push(h);
  }
  return o;
}
function iC(n, t, r, i) {
  if (!n || !t) return;
  const { startOfYear: l, endOfYear: o, addYears: f, getYear: h, isBefore: m, isSameYear: g } = i,
    y = l(n),
    v = o(t),
    b = [];
  let w = y;
  for (; m(w, v) || g(w, v); ) b.push(w), (w = f(w, 1));
  return b.map((x) => {
    const N = r.formatYearDropdown(x, i);
    return { value: h(x), label: N, disabled: !1 };
  });
}
function Nb(n, t, r) {
  return (r ?? new Pa(t)).format(n, 'LLLL y');
}
const sC = Nb;
function lC(n, t, r, i) {
  let l = (i ?? new Pa(r)).format(n, 'PPPP');
  return t != null && t.today && (l = `Today, ${l}`), l;
}
function Db(n, t, r, i) {
  let l = (i ?? new Pa(r)).format(n, 'PPPP');
  return t.today && (l = `Today, ${l}`), t.selected && (l = `${l}, selected`), l;
}
const uC = Db;
function oC() {
  return '';
}
function cC(n) {
  return 'Choose the Month';
}
function fC(n) {
  return 'Go to the Next Month';
}
function dC(n) {
  return 'Go to the Previous Month';
}
function hC(n, t, r) {
  return (r ?? new Pa(t)).format(n, 'cccc');
}
function mC(n, t) {
  return `Week ${n}`;
}
function gC(n) {
  return 'Week Number';
}
function yC(n) {
  return 'Choose the Year';
}
const pC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        labelCaption: sC,
        labelDay: uC,
        labelDayButton: Db,
        labelGrid: Nb,
        labelGridcell: lC,
        labelMonthDropdown: cC,
        labelNav: oC,
        labelNext: fC,
        labelPrevious: dC,
        labelWeekNumber: mC,
        labelWeekNumberHeader: gC,
        labelWeekday: hC,
        labelYearDropdown: yC,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  bu = (n) => (n instanceof HTMLElement ? n : null),
  th = (n) => [...(n.querySelectorAll('[data-animated-month]') ?? [])],
  vC = (n) => bu(n.querySelector('[data-animated-month]')),
  nh = (n) => bu(n.querySelector('[data-animated-caption]')),
  ah = (n) => bu(n.querySelector('[data-animated-weeks]')),
  bC = (n) => bu(n.querySelector('[data-animated-nav]')),
  _C = (n) => bu(n.querySelector('[data-animated-weekdays]'));
function SC(n, t, { classNames: r, months: i, focused: l, dateLib: o }) {
  const f = k.useRef(null),
    h = k.useRef(i),
    m = k.useRef(!1);
  k.useLayoutEffect(() => {
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
      b = v ? r[_n.caption_after_enter] : r[_n.caption_before_enter],
      w = v ? r[_n.weeks_after_enter] : r[_n.weeks_before_enter],
      x = f.current,
      N = n.current.cloneNode(!0);
    if (
      (N instanceof HTMLElement
        ? (th(N).forEach((R) => {
            if (!(R instanceof HTMLElement)) return;
            const Y = vC(R);
            Y && R.contains(Y) && R.removeChild(Y);
            const q = nh(R);
            q && q.classList.remove(b);
            const K = ah(R);
            K && K.classList.remove(w);
          }),
          (f.current = N))
        : (f.current = null),
      m.current || y || l)
    )
      return;
    const C = x instanceof HTMLElement ? th(x) : [],
      D = th(n.current);
    if (
      D &&
      D.every((E) => E instanceof HTMLElement) &&
      C &&
      C.every((E) => E instanceof HTMLElement)
    ) {
      (m.current = !0), (n.current.style.isolation = 'isolate');
      const E = bC(n.current);
      E && (E.style.zIndex = '1'),
        D.forEach((R, Y) => {
          const q = C[Y];
          if (!q) return;
          (R.style.position = 'relative'), (R.style.overflow = 'hidden');
          const K = nh(R);
          K && K.classList.add(b);
          const W = ah(R);
          W && W.classList.add(w);
          const ie = () => {
            (m.current = !1),
              n.current && (n.current.style.isolation = ''),
              E && (E.style.zIndex = ''),
              K && K.classList.remove(b),
              W && W.classList.remove(w),
              (R.style.position = ''),
              (R.style.overflow = ''),
              R.contains(q) && R.removeChild(q);
          };
          (q.style.pointerEvents = 'none'),
            (q.style.position = 'absolute'),
            (q.style.overflow = 'hidden'),
            q.setAttribute('aria-hidden', 'true');
          const te = _C(q);
          te && (te.style.opacity = '0');
          const _e = nh(q);
          _e &&
            (_e.classList.add(v ? r[_n.caption_before_exit] : r[_n.caption_after_exit]),
            _e.addEventListener('animationend', ie));
          const be = ah(q);
          be && be.classList.add(v ? r[_n.weeks_before_exit] : r[_n.weeks_after_exit]),
            R.insertBefore(q, R.firstChild);
        });
    }
  });
}
function xC(n, t, r, i) {
  const l = n[0],
    o = n[n.length - 1],
    { ISOWeek: f, fixedWeeks: h, broadcastCalendar: m } = r ?? {},
    {
      addDays: g,
      differenceInCalendarDays: y,
      differenceInCalendarMonths: v,
      endOfBroadcastWeek: b,
      endOfISOWeek: w,
      endOfMonth: x,
      endOfWeek: N,
      isAfter: C,
      startOfBroadcastWeek: D,
      startOfISOWeek: E,
      startOfWeek: R,
    } = i,
    Y = m ? D(l, i) : f ? E(l) : R(l),
    q = m ? b(o, i) : f ? w(x(o)) : N(x(o)),
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
function wC(n) {
  const t = [];
  return n.reduce((r, i) => {
    const l = [],
      o = i.weeks.reduce((f, h) => [...f, ...h.days], l);
    return [...r, ...o];
  }, t);
}
function EC(n, t, r, i) {
  const { numberOfMonths: l = 1 } = r,
    o = [];
  for (let f = 0; f < l; f++) {
    const h = i.addMonths(n, f);
    if (t && h > t) break;
    o.push(h);
  }
  return o;
}
function Tv(n, t) {
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
  return h && y(g, h) < 0 && (g = h), (g = m ? new Cr(g, m) : g), b(g);
}
class Ab {
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
class OC {
  constructor(t, r) {
    (this.date = t), (this.weeks = r);
  }
}
class TC {
  constructor(t, r) {
    (this.days = r), (this.weekNumber = t);
  }
}
function CC(n, t, r, i) {
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
    x = n.reduce((N, C) => {
      const D = r.broadcastCalendar ? v(C, i) : r.ISOWeek ? b(C) : w(C),
        E = r.broadcastCalendar ? o(C, i) : r.ISOWeek ? f(h(C)) : m(h(C)),
        R = t.filter((W) => W >= D && W <= E),
        Y = r.broadcastCalendar ? 35 : 42;
      if (r.fixedWeeks && R.length < Y) {
        const W = t.filter((ie) => {
          const te = Y - R.length;
          return ie > E && ie <= l(E, te);
        });
        R.push(...W);
      }
      const q = R.reduce((W, ie) => {
          const te = r.ISOWeek ? g(ie) : y(ie),
            _e = W.find((se) => se.weekNumber === te),
            be = new Ab(ie, C, i);
          return _e ? _e.days.push(be) : W.push(new TC(te, [be])), W;
        }, []),
        K = new OC(C, q);
      return N.push(K), N;
    }, []);
  return r.reverseMonths ? x.reverse() : x;
}
function MC(n, t) {
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
    { fromYear: b, toYear: w, fromMonth: x, toMonth: N } = n;
  !r && x && (r = x),
    !r && b && (r = t.newDate(b, 0, 1)),
    !i && N && (i = N),
    !i && w && (i = y(w, 11, 31));
  const C = n.captionLayout === 'dropdown' || n.captionLayout === 'dropdown-years';
  return (
    r ? (r = f(r)) : b ? (r = y(b, 0, 1)) : !r && C && (r = l(m(n.today ?? v(), -100))),
    i ? (i = h(i)) : w ? (i = y(w, 11, 31)) : !i && C && (i = g(n.today ?? v())),
    [r && o(r), i && o(i)]
  );
}
function NC(n, t, r, i) {
  if (r.disableNavigation) return;
  const { pagedNavigation: l, numberOfMonths: o = 1 } = r,
    { startOfMonth: f, addMonths: h, differenceInCalendarMonths: m } = i,
    g = l ? o : 1,
    y = f(n);
  if (!t) return h(y, g);
  if (!(m(t, n) < o)) return h(y, g);
}
function DC(n, t, r, i) {
  if (r.disableNavigation) return;
  const { pagedNavigation: l, numberOfMonths: o } = r,
    { startOfMonth: f, addMonths: h, differenceInCalendarMonths: m } = i,
    g = l ? (o ?? 1) : 1,
    y = f(n);
  if (!t) return h(y, -g);
  if (!(m(y, t) <= 0)) return h(y, -g);
}
function AC(n) {
  const t = [];
  return n.reduce((r, i) => [...r, ...i.weeks], t);
}
function xc(n, t) {
  const [r, i] = k.useState(n);
  return [t === void 0 ? r : t, i];
}
function kC(n, t) {
  const [r, i] = MC(n, t),
    { startOfMonth: l, endOfMonth: o } = t,
    f = Tv(n, t),
    [h, m] = xc(f, n.month ? f : void 0);
  k.useEffect(() => {
    const K = Tv(n, t);
    m(K);
  }, [n.timeZone]);
  const g = EC(h, i, n, t),
    y = xC(g, n.endMonth ? o(n.endMonth) : void 0, n, t),
    v = CC(g, y, n, t),
    b = AC(v),
    w = wC(v),
    x = DC(h, r, n, t),
    N = NC(h, i, n, t),
    { disableNavigation: C, onMonthChange: D } = n,
    E = (K) => b.some((W) => W.days.some((ie) => ie.isEqualTo(K))),
    R = (K) => {
      if (C) return;
      let W = l(K);
      r && W < l(r) && (W = l(r)), i && W > l(i) && (W = l(i)), m(W), D == null || D(W);
    };
  return {
    months: v,
    weeks: b,
    days: w,
    navStart: r,
    navEnd: i,
    previousMonth: x,
    nextMonth: N,
    goToMonth: R,
    goToDay: (K) => {
      E(K) || R(K.date);
    },
  };
}
var aa;
(function (n) {
  (n[(n.Today = 0)] = 'Today'),
    (n[(n.Selected = 1)] = 'Selected'),
    (n[(n.LastFocused = 2)] = 'LastFocused'),
    (n[(n.FocusedModifier = 3)] = 'FocusedModifier');
})(aa || (aa = {}));
function Cv(n) {
  return !n[gt.disabled] && !n[gt.hidden] && !n[gt.outside];
}
function RC(n, t, r, i) {
  let l,
    o = -1;
  for (const f of n) {
    const h = t(f);
    Cv(h) &&
      (h[gt.focused] && o < aa.FocusedModifier
        ? ((l = f), (o = aa.FocusedModifier))
        : i != null && i.isEqualTo(f) && o < aa.LastFocused
          ? ((l = f), (o = aa.LastFocused))
          : r(f.date) && o < aa.Selected
            ? ((l = f), (o = aa.Selected))
            : h[gt.today] && o < aa.Today && ((l = f), (o = aa.Today)));
  }
  return l || (l = n.find((f) => Cv(t(f)))), l;
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
function kb(n) {
  return !!(n && typeof n == 'object' && 'before' in n && 'after' in n);
}
function Fh(n) {
  return !!(n && typeof n == 'object' && 'from' in n);
}
function Rb(n) {
  return !!(n && typeof n == 'object' && 'after' in n);
}
function jb(n) {
  return !!(n && typeof n == 'object' && 'before' in n);
}
function zb(n) {
  return !!(n && typeof n == 'object' && 'dayOfWeek' in n);
}
function Ub(n, t) {
  return Array.isArray(n) && n.every(t.isDate);
}
function Ba(n, t, r = Ga) {
  const i = Array.isArray(t) ? t : [t],
    { isSameDay: l, differenceInCalendarDays: o, isAfter: f } = r;
  return i.some((h) => {
    if (typeof h == 'boolean') return h;
    if (r.isDate(h)) return l(n, h);
    if (Ub(h, r)) return h.includes(n);
    if (Fh(h)) return La(h, n, !1, r);
    if (zb(h))
      return Array.isArray(h.dayOfWeek)
        ? h.dayOfWeek.includes(n.getDay())
        : h.dayOfWeek === n.getDay();
    if (kb(h)) {
      const m = o(h.before, n),
        g = o(h.after, n),
        y = m > 0,
        v = g < 0;
      return f(h.before, h.after) ? v && y : y || v;
    }
    return Rb(h)
      ? o(n, h.after) > 0
      : jb(h)
        ? o(h.before, n) > 0
        : typeof h == 'function'
          ? h(n)
          : !1;
  });
}
function jC(n, t, r, i, l, o, f) {
  const { ISOWeek: h, broadcastCalendar: m } = o,
    {
      addDays: g,
      addMonths: y,
      addWeeks: v,
      addYears: b,
      endOfBroadcastWeek: w,
      endOfISOWeek: x,
      endOfWeek: N,
      max: C,
      min: D,
      startOfBroadcastWeek: E,
      startOfISOWeek: R,
      startOfWeek: Y,
    } = f;
  let K = {
    day: g,
    week: v,
    month: y,
    year: b,
    startOfWeek: (W) => (m ? E(W, f) : h ? R(W) : Y(W)),
    endOfWeek: (W) => (m ? w(W, f) : h ? x(W) : N(W)),
  }[n](r, t === 'after' ? 1 : -1);
  return t === 'before' && i ? (K = C([i, K])) : t === 'after' && l && (K = D([l, K])), K;
}
function Lb(n, t, r, i, l, o, f, h = 0) {
  if (h > 365) return;
  const m = jC(n, t, r.date, i, l, o, f),
    g = !!(o.disabled && Ba(m, o.disabled, f)),
    y = !!(o.hidden && Ba(m, o.hidden, f)),
    v = m,
    b = new Ab(m, v, f);
  return !g && !y ? b : Lb(n, t, b, i, l, o, f, h + 1);
}
function zC(n, t, r, i, l) {
  const { autoFocus: o } = n,
    [f, h] = k.useState(),
    m = RC(t.days, r, i || (() => !1), f),
    [g, y] = k.useState(o ? m : void 0);
  return {
    isFocusTarget: (N) => !!(m != null && m.isEqualTo(N)),
    setFocused: y,
    focused: g,
    blur: () => {
      h(g), y(void 0);
    },
    moveFocus: (N, C) => {
      if (!g) return;
      const D = Lb(N, C, g, t.navStart, t.navEnd, n, l);
      D && (t.goToDay(D), y(D));
    },
  };
}
function UC(n, t, r) {
  const {
      disabled: i,
      hidden: l,
      modifiers: o,
      showOutsideDays: f,
      broadcastCalendar: h,
      today: m,
    } = t,
    { isSameDay: g, isSameMonth: y, startOfMonth: v, isBefore: b, endOfMonth: w, isAfter: x } = r,
    N = t.startMonth && v(t.startMonth),
    C = t.endMonth && w(t.endMonth),
    D = { [gt.focused]: [], [gt.outside]: [], [gt.disabled]: [], [gt.hidden]: [], [gt.today]: [] },
    E = {};
  for (const R of n) {
    const { date: Y, displayMonth: q } = R,
      K = !!(q && !y(Y, q)),
      W = !!(N && b(Y, N)),
      ie = !!(C && x(Y, C)),
      te = !!(i && Ba(Y, i, r)),
      _e = !!(l && Ba(Y, l, r)) || W || ie || (!h && !f && K) || (h && f === !1 && K),
      be = g(Y, m ?? r.today());
    K && D.outside.push(R),
      te && D.disabled.push(R),
      _e && D.hidden.push(R),
      be && D.today.push(R),
      o &&
        Object.keys(o).forEach((se) => {
          const Se = o == null ? void 0 : o[se];
          Se && Ba(Y, Se, r) && (E[se] ? E[se].push(R) : (E[se] = [R]));
        });
  }
  return (R) => {
    const Y = {
        [gt.focused]: !1,
        [gt.disabled]: !1,
        [gt.hidden]: !1,
        [gt.outside]: !1,
        [gt.today]: !1,
      },
      q = {};
    for (const K in D) {
      const W = D[K];
      Y[K] = W.some((ie) => ie === R);
    }
    for (const K in E) q[K] = E[K].some((W) => W === R);
    return { ...Y, ...q };
  };
}
function LC(n, t) {
  const { selected: r, required: i, onSelect: l } = n,
    [o, f] = xc(r, l ? r : void 0),
    h = l ? r : o,
    { isSameDay: m } = t,
    g = (w) => (h == null ? void 0 : h.some((x) => m(x, w))) ?? !1,
    { min: y, max: v } = n;
  return {
    selected: h,
    select: (w, x, N) => {
      let C = [...(h ?? [])];
      if (g(w)) {
        if ((h == null ? void 0 : h.length) === y || (i && (h == null ? void 0 : h.length) === 1))
          return;
        C = h == null ? void 0 : h.filter((D) => !m(D, w));
      } else (h == null ? void 0 : h.length) === v ? (C = [w]) : (C = [...C, w]);
      return l || f(C), l == null || l(C, w, x, N), C;
    },
    isSelected: g,
  };
}
function BC(n, t, r = 0, i = 0, l = !1, o = Ga) {
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
function HC(n, t, r = Ga) {
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
function Mv(n, t, r = Ga) {
  return La(n, t.from, !1, r) || La(n, t.to, !1, r) || La(t, n.from, !1, r) || La(t, n.to, !1, r);
}
function VC(n, t, r = Ga) {
  const i = Array.isArray(t) ? t : [t];
  if (
    i
      .filter((h) => typeof h != 'function')
      .some((h) =>
        typeof h == 'boolean'
          ? h
          : r.isDate(h)
            ? La(n, h, !1, r)
            : Ub(h, r)
              ? h.some((m) => La(n, m, !1, r))
              : Fh(h)
                ? h.from && h.to
                  ? Mv(n, { from: h.from, to: h.to }, r)
                  : !1
                : zb(h)
                  ? HC(n, h.dayOfWeek, r)
                  : kb(h)
                    ? r.isAfter(h.before, h.after)
                      ? Mv(n, { from: r.addDays(h.after, 1), to: r.addDays(h.before, -1) }, r)
                      : Ba(n.from, h, r) || Ba(n.to, h, r)
                    : Rb(h) || jb(h)
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
function qC(n, t) {
  const { disabled: r, excludeDisabled: i, selected: l, required: o, onSelect: f } = n,
    [h, m] = xc(l, f ? l : void 0),
    g = f ? l : h;
  return {
    selected: g,
    select: (b, w, x) => {
      const { min: N, max: C } = n,
        D = b ? BC(b, g, N, C, o, t) : void 0;
      return (
        i &&
          r &&
          D != null &&
          D.from &&
          D.to &&
          VC({ from: D.from, to: D.to }, r, t) &&
          ((D.from = b), (D.to = void 0)),
        f || m(D),
        f == null || f(D, b, w, x),
        D
      );
    },
    isSelected: (b) => g && La(g, b, !1, t),
  };
}
function YC(n, t) {
  const { selected: r, required: i, onSelect: l } = n,
    [o, f] = xc(r, l ? r : void 0),
    h = l ? r : o,
    { isSameDay: m } = t;
  return {
    selected: h,
    select: (v, b, w) => {
      let x = v;
      return !i && h && h && m(v, h) && (x = void 0), l || f(x), l == null || l(x, v, b, w), x;
    },
    isSelected: (v) => (h ? m(h, v) : !1),
  };
}
function ZC(n, t) {
  const r = YC(n, t),
    i = LC(n, t),
    l = qC(n, t);
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
function FC(n) {
  const {
      components: t,
      formatters: r,
      labels: i,
      dateLib: l,
      locale: o,
      classNames: f,
    } = k.useMemo(() => {
      const je = { ...Zh, ...n.locale };
      return {
        dateLib: new Pa(
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
        components: PT(n.components),
        formatters: tC(n.formatters),
        labels: { ...pC, ...n.labels },
        locale: je,
        classNames: { ...Tb(), ...n.classNames },
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
      onDayMouseLeave: x,
      onNextClick: N,
      onPrevClick: C,
      showWeekNumber: D,
      styles: E,
    } = n,
    {
      formatCaption: R,
      formatDay: Y,
      formatMonthDropdown: q,
      formatWeekNumber: K,
      formatWeekNumberHeader: W,
      formatWeekdayName: ie,
      formatYearDropdown: te,
    } = r,
    _e = kC(n, l),
    {
      days: be,
      months: se,
      navStart: Se,
      navEnd: Re,
      previousMonth: Me,
      nextMonth: V,
      goToMonth: I,
    } = _e,
    me = UC(be, n, l),
    { isSelected: xe, select: T, selected: P } = ZC(n, l) ?? {},
    {
      blur: le,
      focused: re,
      isFocusTarget: ve,
      moveFocus: Ve,
      setFocused: we,
    } = zC(n, _e, me, xe ?? (() => !1), l),
    {
      labelDayButton: kt,
      labelGridcell: at,
      labelGrid: rn,
      labelMonthDropdown: $a,
      labelNav: Xn,
      labelWeekday: Qa,
      labelWeekNumber: kr,
      labelWeekNumberHeader: Ka,
      labelYearDropdown: Ts,
    } = i,
    di = k.useMemo(() => rC(l, n.ISOWeek), [l, n.ISOWeek]),
    Zt = m !== void 0 || y !== void 0,
    Cs = k.useCallback(() => {
      Me && (I(Me), C == null || C(Me));
    }, [Me, I, C]),
    hi = k.useCallback(() => {
      V && (I(V), N == null || N(V));
    }, [I, V, N]),
    Ms = k.useCallback(
      (je, Ie) => (Fe) => {
        Fe.preventDefault(),
          Fe.stopPropagation(),
          we(je),
          T == null || T(je.date, Ie, Fe),
          y == null || y(je.date, Ie, Fe);
      },
      [T, y, we]
    ),
    ma = k.useCallback(
      (je, Ie) => (Fe) => {
        we(je), v == null || v(je.date, Ie, Fe);
      },
      [v, we]
    ),
    M = k.useCallback(
      (je, Ie) => (Fe) => {
        le(), g == null || g(je.date, Ie, Fe);
      },
      [le, g]
    ),
    B = k.useCallback(
      (je, Ie) => (Fe) => {
        const Ft = {
          ArrowLeft: ['day', n.dir === 'rtl' ? 'after' : 'before'],
          ArrowRight: ['day', n.dir === 'rtl' ? 'before' : 'after'],
          ArrowDown: ['week', 'after'],
          ArrowUp: ['week', 'before'],
          PageUp: [Fe.shiftKey ? 'year' : 'month', 'before'],
          PageDown: [Fe.shiftKey ? 'year' : 'month', 'after'],
          Home: ['startOfWeek', 'before'],
          End: ['endOfWeek', 'after'],
        };
        if (Ft[Fe.key]) {
          Fe.preventDefault(), Fe.stopPropagation();
          const [Tt, ga] = Ft[Fe.key];
          Ve(Tt, ga);
        }
        b == null || b(je.date, Ie, Fe);
      },
      [Ve, b, n.dir]
    ),
    Z = k.useCallback(
      (je, Ie) => (Fe) => {
        w == null || w(je.date, Ie, Fe);
      },
      [w]
    ),
    fe = k.useCallback(
      (je, Ie) => (Fe) => {
        x == null || x(je.date, Ie, Fe);
      },
      [x]
    ),
    ae = k.useCallback(
      (je) => (Ie) => {
        const Fe = Number(Ie.target.value),
          Ft = l.setMonth(l.startOfMonth(je), Fe);
        I(Ft);
      },
      [l, I]
    ),
    X = k.useCallback(
      (je) => (Ie) => {
        const Fe = Number(Ie.target.value),
          Ft = l.setYear(l.startOfMonth(je), Fe);
        I(Ft);
      },
      [l, I]
    ),
    { className: ce, style: Ne } = k.useMemo(
      () => ({
        className: [f[Te.Root], n.className].filter(Boolean).join(' '),
        style: { ...(E == null ? void 0 : E[Te.Root]), ...n.style },
      }),
      [f, n.className, n.style, E]
    ),
    ct = GT(n),
    bt = k.useRef(null);
  SC(bt, !!n.animate, { classNames: f, months: se, focused: re, dateLib: l });
  const Ns = {
    dayPickerProps: n,
    selected: P,
    select: T,
    isSelected: xe,
    months: se,
    nextMonth: V,
    previousMonth: Me,
    goToMonth: I,
    getModifiers: me,
    components: t,
    classNames: f,
    styles: E,
    labels: i,
    formatters: r,
  };
  return ee.createElement(
    Ob.Provider,
    { value: Ns },
    ee.createElement(
      t.Root,
      {
        rootRef: n.animate ? bt : void 0,
        className: ce,
        style: Ne,
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
        { className: f[Te.Months], style: E == null ? void 0 : E[Te.Months] },
        !n.hideNavigation &&
          ee.createElement(t.Nav, {
            'data-animated-nav': n.animate ? 'true' : void 0,
            className: f[Te.Nav],
            style: E == null ? void 0 : E[Te.Nav],
            'aria-label': Xn(),
            onPreviousClick: Cs,
            onNextClick: hi,
            previousMonth: Me,
            nextMonth: V,
          }),
        se.map((je, Ie) => {
          const Fe = nC(je.date, Se, Re, r, l),
            Ft = iC(Se, Re, r, l);
          return ee.createElement(
            t.Month,
            {
              'data-animated-month': n.animate ? 'true' : void 0,
              className: f[Te.Month],
              style: E == null ? void 0 : E[Te.Month],
              key: Ie,
              displayIndex: Ie,
              calendarMonth: je,
            },
            ee.createElement(
              t.MonthCaption,
              {
                'data-animated-caption': n.animate ? 'true' : void 0,
                className: f[Te.MonthCaption],
                style: E == null ? void 0 : E[Te.MonthCaption],
                calendarMonth: je,
                displayIndex: Ie,
              },
              h != null && h.startsWith('dropdown')
                ? ee.createElement(
                    t.DropdownNav,
                    { className: f[Te.Dropdowns], style: E == null ? void 0 : E[Te.Dropdowns] },
                    h === 'dropdown' || h === 'dropdown-months'
                      ? ee.createElement(t.MonthsDropdown, {
                          className: f[Te.MonthsDropdown],
                          'aria-label': $a(),
                          classNames: f,
                          components: t,
                          disabled: !!n.disableNavigation,
                          onChange: ae(je.date),
                          options: Fe,
                          style: E == null ? void 0 : E[Te.Dropdown],
                          value: l.getMonth(je.date),
                        })
                      : ee.createElement('span', null, q(je.date, l)),
                    h === 'dropdown' || h === 'dropdown-years'
                      ? ee.createElement(t.YearsDropdown, {
                          className: f[Te.YearsDropdown],
                          'aria-label': Ts(l.options),
                          classNames: f,
                          components: t,
                          disabled: !!n.disableNavigation,
                          onChange: X(je.date),
                          options: Ft,
                          style: E == null ? void 0 : E[Te.Dropdown],
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
                      R(je.date, l.options, l)
                    )
                  )
                : ee.createElement(
                    t.CaptionLabel,
                    { className: f[Te.CaptionLabel], role: 'status', 'aria-live': 'polite' },
                    R(je.date, l.options, l)
                  )
            ),
            ee.createElement(
              t.MonthGrid,
              {
                role: 'grid',
                'aria-multiselectable': m === 'multiple' || m === 'range',
                'aria-label': rn(je.date, l.options, l) || void 0,
                className: f[Te.MonthGrid],
                style: E == null ? void 0 : E[Te.MonthGrid],
              },
              !n.hideWeekdays &&
                ee.createElement(
                  t.Weekdays,
                  {
                    'data-animated-weekdays': n.animate ? 'true' : void 0,
                    className: f[Te.Weekdays],
                    style: E == null ? void 0 : E[Te.Weekdays],
                  },
                  D &&
                    ee.createElement(
                      t.WeekNumberHeader,
                      {
                        'aria-label': Ka(l.options),
                        className: f[Te.WeekNumberHeader],
                        style: E == null ? void 0 : E[Te.WeekNumberHeader],
                        scope: 'col',
                      },
                      W()
                    ),
                  di.map((Tt, ga) =>
                    ee.createElement(
                      t.Weekday,
                      {
                        'aria-label': Qa(Tt, l.options, l),
                        className: f[Te.Weekday],
                        key: ga,
                        style: E == null ? void 0 : E[Te.Weekday],
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
                  style: E == null ? void 0 : E[Te.Weeks],
                },
                je.weeks.map((Tt, ga) =>
                  ee.createElement(
                    t.Week,
                    {
                      className: f[Te.Week],
                      key: Tt.weekNumber,
                      style: E == null ? void 0 : E[Te.Week],
                      week: Tt,
                    },
                    D &&
                      ee.createElement(
                        t.WeekNumber,
                        {
                          week: Tt,
                          style: E == null ? void 0 : E[Te.WeekNumber],
                          'aria-label': kr(Tt.weekNumber, { locale: o }),
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
                        (($e[gt.focused] = !$e.hidden && !!(re != null && re.isEqualTo(Ct))),
                        ($e[Pn.selected] = (xe == null ? void 0 : xe(fn)) || $e.selected),
                        Fh(P))
                      ) {
                        const { from: mi, to: jr } = P;
                        ($e[Pn.range_start] = !!(mi && jr && l.isSameDay(fn, mi))),
                          ($e[Pn.range_end] = !!(mi && jr && l.isSameDay(fn, jr))),
                          ($e[Pn.range_middle] = La(P, fn, !0, l));
                      }
                      const Rr = aC($e, E, n.modifiersStyles),
                        Dc = pT($e, f, n.modifiersClassNames),
                        _u = !Zt && !$e.hidden ? at(fn, $e, l.options, l) : void 0;
                      return ee.createElement(
                        t.Day,
                        {
                          key: `${l.format(fn, 'yyyy-MM-dd')}_${l.format(Ct.displayMonth, 'yyyy-MM')}`,
                          day: Ct,
                          modifiers: $e,
                          className: Dc.join(' '),
                          style: Rr,
                          role: 'gridcell',
                          'aria-selected': $e.selected || void 0,
                          'aria-label': _u,
                          'data-day': l.format(fn, 'yyyy-MM-dd'),
                          'data-month': Ct.outside ? l.format(fn, 'yyyy-MM') : void 0,
                          'data-selected': $e.selected || void 0,
                          'data-disabled': $e.disabled || void 0,
                          'data-hidden': $e.hidden || void 0,
                          'data-outside': Ct.outside || void 0,
                          'data-focused': $e.focused || void 0,
                          'data-today': $e.today || void 0,
                        },
                        !$e.hidden && Zt
                          ? ee.createElement(
                              t.DayButton,
                              {
                                className: f[Te.DayButton],
                                style: E == null ? void 0 : E[Te.DayButton],
                                type: 'button',
                                day: Ct,
                                modifiers: $e,
                                disabled: $e.disabled || void 0,
                                tabIndex: ve(Ct) ? 0 : -1,
                                'aria-label': kt(fn, $e, l.options, l),
                                onClick: Ms(Ct, $e),
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
            style: E == null ? void 0 : E[Te.Footer],
            role: 'status',
            'aria-live': 'polite',
          },
          n.footer
        )
    )
  );
}
function PC({ title: n, id: t, error: r, type: i, register: l, control: o }) {
  const [f, h] = k.useState(void 0),
    m = Tb(),
    [g, y] = k.useState(!1),
    v = k.useRef(null);
  return (
    k.useEffect(() => {
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
    S.jsxs('div', {
      className: 'relative ',
      children: [
        S.jsx('label', {
          htmlFor: t,
          className: 'font-medium text-goldenrod capitalize p-1 font-main flex flex-col',
          children: n,
        }),
        S.jsx('input', {
          ...l,
          name: t,
          type: i,
          id: t,
          value: f ? Qo(f, 'yyyy-MM-dd') : '',
          readOnly: !0,
          className: 'hidden',
        }),
        S.jsx(cE, {
          name: t,
          control: o,
          render: ({ field: b }) =>
            S.jsxs(S.Fragment, {
              children: [
                S.jsx('div', {
                  className:
                    'rounded-lg text-olive font-main p-1 w-[300px] hover:cursor-pointer focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki',
                  onClick: () => {
                    y(!g);
                  },
                  children: f ? Qo(f, 'dd MMMM, yyyy') : 'Pick a date',
                }),
                g &&
                  S.jsx('div', {
                    tabIndex: 0,
                    ref: v,
                    className: 'absolute z-10 w-fit h-fit outline-none mt-1 -translate-y-1',
                    children: S.jsx(FC, {
                      mode: 'single',
                      disabled: { before: new Date(1930, 1, 1), after: new Date() },
                      selected: f,
                      onSelect: (w) => {
                        h(w), w && b.onChange(Qo(w, 'yyyy-MM-dd')), y(!1);
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
        S.jsx('p', {
          className: 'text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]',
          children: r ?? ' ',
        }),
      ],
    })
  );
}
function Sh({ title: n, id: t, type: r, error: i, register: l }) {
  const [o, f] = k.useState(!1),
    h = r === 'password',
    m = r === 'checkbox',
    g = r === 'email',
    y = h ? (o ? 'text' : 'password') : r;
  return S.jsxs('div', {
    className: `relative ${m ? 'flex flex-wrap w-[300px] ' : ''}`,
    children: [
      S.jsx('label', {
        htmlFor: t,
        className: `font-medium text-goldenrod capitalize p-1 font-main ${m ? '' : 'flex flex-col'}`,
        children: n,
      }),
      S.jsx('input', {
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
        S.jsx('button', {
          type: 'button',
          className: 'absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer pt-3',
          onClick: () => {
            f((v) => !v);
          },
          'aria-label': o ? 'Hide' : 'Show',
          children: o ? '🙉' : '🙈',
        }),
      S.jsx('p', {
        className: 'text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]',
        children: i ?? ' ',
      }),
    ],
  });
}
function Nv({ title: n, content: t, register: r, errors: i, hint: l, control: o }) {
  var f;
  return S.jsxs('fieldset', {
    className: 'flex flex-row gap-4 p-2 flex-wrap justify-center',
    children: [
      S.jsxs('legend', {
        className: 'text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main',
        children: [n, l && S.jsx('p', { className: 'text-base text-goldenrod', children: l })],
      }),
      t.map((h) => {
        var y, v;
        const m = h.id;
        return String(m).toLowerCase().includes('date')
          ? S.jsx(
              PC,
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
          : S.jsx(
              Sh,
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
        S.jsx(FO, {
          id: `${n.split(' ')[0]}Country`,
          register: r(`${n.split(' ')[0]}Country`),
          error: (f = i[`${n.split(' ')[0]}Country`]) == null ? void 0 : f.message,
        }),
    ],
  });
}
const ls = new Date(),
  Ph = ne
    .string()
    .refine((n) => cb.some((t) => t.code === n), { message: 'Please select a country' }),
  GC = ne.object({
    firstName: ne
      .string()
      .min(1, 'First name must be at least 1 character')
      .max(20, 'First name must be no longer than 20 characters'),
    lastName: ne
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name must be no longer than 20 characters'),
    dateOfBirth: ne.string().refine((n) => {
      const t = new Date(n);
      let r = ls.getFullYear() - t.getFullYear();
      const i = ls.getMonth() - t.getMonth(),
        l = ls.getDate() - t.getDate();
      return (i < 0 || (i === 0 && l < 0)) && r--, r >= 13;
    }, 'You must be at least 13 years old'),
  }),
  $C = ne.object({
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
      .regex(/[A-Z]/, 'Password must include an uppercase letter')
      .regex(/[a-z]/, 'Password must include a lowercase letter')
      .regex(/[0-9]/, 'Password must include a number')
      .refine((n) => !/\s/.test(n), { message: 'Password must not contain spaces' }),
  }),
  QC = ne.object({
    petName: ne.string().min(2, 'First name must be at least 2 characters').max(20),
    petBirthDate: ne.string().refine((n) => {
      const t = new Date(n);
      let r = ls.getFullYear() - t.getFullYear();
      const i = ls.getMonth() - t.getMonth(),
        l = ls.getDate() - t.getDate();
      return (i < 0 || (i === 0 && l < 0)) && r--, r <= 35;
    }, 'Your pet must be very old... Try applying for Guinness World Records'),
  }),
  Bb = /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/,
  KC = ne.object({
    shippingStreetName: ne.string().min(5, 'Street name must be at least 5 characters'),
    shippingCity: ne.string().min(2, 'City name must be at least 2 characters'),
    shippingPostalCode: ne.string().regex(Bb, 'Postal code must be valid (e.g., 12345)'),
    shippingCountry: Ph,
  }),
  WC = ne.object({
    billingStreetName: ne.string().min(5, 'Street name must be at least 5 characters').optional(),
    billingCity: ne.string().min(2, 'City name must be at least 2 characters').optional(),
    billingPostalCode: ne.string().regex(Bb, 'Postal code must be valid (e.g., 12345)').optional(),
    billingCountry: Ph.optional(),
  }),
  kl = GC.merge($C)
    .merge(QC)
    .merge(KC)
    .merge(WC)
    .extend({ defaultAddress: ne.boolean().optional() }),
  XC = kl.extend({ sameAsShipping: ne.boolean().optional() }).refine(
    (n) => {
      if (n.sameAsShipping) return !0;
      const { billingStreetName: t, billingCity: r, billingPostalCode: i, billingCountry: l } = n;
      return ne
        .object({
          billingStreetName: kl.shape.billingStreetName,
          billingCity: kl.shape.billingCity,
          billingPostalCode: kl.shape.billingPostalCode,
          billingCountry: kl.shape.billingCountry,
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
async function IC(n, t, r) {
  var x, N, C, D;
  const i = Yb.safeParse(n),
    l = (x = i.data) == null ? void 0 : x.customer.version,
    o = (N = i.data) == null ? void 0 : N.customer.id,
    f = (C = i.data) == null ? void 0 : C.customer.addresses[0].id,
    h = (D = i.data) != null && D.customer.addresses[1] ? i.data.customer.addresses[1].id : f,
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
      await fetch(Vb + `/${o ?? ''}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(y),
      })
    ).json(),
    w = qb.safeParse(b);
  if (!w.success)
    throw (
      (console.error('Invalid response structure:', w.error),
      console.log('Raw response:', b),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return w.data;
}
const JC = 'QMdMW3dn2QFBIFpoFRm_yfE0',
  eM = 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  tM = 'ecommerce2v',
  Hb = 'europe-west1.gcp',
  nM = `https://api.${Hb}.commercetools.com/${tM}`,
  Vb = `${nM}/customers`,
  aM = ne.object({
    error: ne.string(),
    error_description: ne.string().optional(),
    message: ne.string().optional(),
  }),
  rM = ne.object({ access_token: ne.string(), expires_in: ne.number(), token_type: ne.string() });
async function iM() {
  const n = JC,
    t = eM,
    r = `https://auth.${Hb}.commercetools.com/oauth/token`,
    i = btoa(`${n}:${t}`),
    l = await fetch(r, {
      method: 'POST',
      headers: { Authorization: `Basic ${i}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials',
    }),
    o = await l.json();
  if (!l.ok) {
    const h = aM.safeParse(o);
    throw h.success
      ? new Error(
          `Token fetch failed: ${h.data.error_description ?? h.data.message ?? h.data.error}`
        )
      : new Error('Token fetch failed: Unknown error response');
  }
  const f = rM.safeParse(o);
  if (!f.success) throw new Error('Token fetch failed: Invalid response format');
  return console.log(f.data.access_token), f.data.access_token;
}
const sM = ne.object({ clientId: ne.string(), isPlatformClient: ne.boolean() }),
  lM = ne.object({
    clientId: ne.string().optional(),
    isPlatformClient: ne.boolean(),
    user: ne.object({ typeId: ne.string().optional(), id: ne.string().optional() }).optional(),
  }),
  qb = ne
    .object({
      id: ne.string(),
      version: ne.number(),
      versionModifiedAt: ne.string(),
      lastMessageSequenceNumber: ne.number(),
      createdAt: ne.string(),
      lastModifiedAt: ne.string(),
      lastModifiedBy: lM,
      createdBy: sM,
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
          country: Ph,
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
  Yb = ne.object({ customer: qb });
async function uM(n, t) {
  const r = await fetch(Vb, {
      method: 'POST',
      headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(n),
    }),
    i = await r.json();
  if (!r.ok) {
    const o = i.message ?? r.statusText;
    throw new Error(`Sign-up failed: ${o}`);
  }
  const l = Yb.safeParse(i);
  if (!l.success)
    throw (
      (console.error('Invalid response structure:', l.error.format()),
      console.log('Raw response:', i),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return l.data;
}
function oM(n) {
  const {
      register: t,
      handleSubmit: r,
      setValue: i,
      control: l,
      trigger: o,
      formState: { errors: f, isValid: h, isSubmitting: m },
    } = X0({ mode: 'all', resolver: J0(XC) }),
    [g, y] = k.useState(null),
    v = Z0({ name: 'sameAsShipping', control: l });
  return (
    k.useEffect(() => {
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
        const x = {
            firstName: w.firstName,
            lastName: w.lastName,
            streetName: w.shippingStreetName,
            city: w.shippingCity,
            postalCode: w.shippingPostalCode,
            country: w.shippingCountry,
          },
          N = w.sameAsShipping
            ? x
            : {
                firstName: w.firstName,
                lastName: w.lastName,
                streetName: w.billingStreetName ?? '',
                city: w.billingCity ?? '',
                postalCode: w.billingPostalCode ?? '',
                country: w.billingCountry,
              },
          C = w.sameAsShipping ? [x] : [x, N],
          D = {
            ...w,
            addresses: C,
            custom: {
              type: { key: 'customerCustomFields' },
              fields: { petName: w.petName, petBirthDate: w.petBirthDate },
            },
          };
        try {
          y('');
          const E = await iM(),
            R = await uM(D, E);
          console.log('Sign-up successful:', R);
          const Y = await IC(R, E, w.defaultAddress ?? !1);
          console.log('Addresses successful:', Y), n(w.firstName);
        } catch (E) {
          const R = E instanceof Error ? E.message : 'Something went wrong. Please try again.';
          console.log(E), y(R);
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
const cM = [
    { title: 'first name', id: 'firstName', type: 'text' },
    { title: 'last name', id: 'lastName', type: 'text' },
    { title: 'date of birth', id: 'dateOfBirth', type: 'date' },
  ],
  fM = [
    { title: 'email', id: 'email', type: 'text' },
    { title: 'password', id: 'password', type: 'password' },
  ],
  dM = [
    { title: 'Pet name', id: 'petName', type: 'text' },
    { title: "pet's date of birth", id: 'petBirthDate', type: 'date' },
  ],
  hM = [
    { title: 'Street', id: 'shippingStreetName', type: 'text' },
    { title: 'City', id: 'shippingCity', type: 'text' },
    { title: 'Postal Code', id: 'shippingPostalCode', type: 'text' },
  ],
  mM = [
    { title: 'Street', id: 'billingStreetName', type: 'text' },
    { title: 'City', id: 'billingCity', type: 'text' },
    { title: 'Postal Code', id: 'billingPostalCode', type: 'text' },
  ],
  gM = [
    { title: 'user information', content: cM },
    { title: 'login information', content: fM },
    {
      title: 'pet information',
      content: dM,
      hint: "Fill the pet info to get a discount for your pet's birthday!",
    },
    { title: 'shipping address', content: hM },
  ];
function yM({ title: n, message: t, buttonText: r, closeModal: i }) {
  k.useEffect(
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
  return S.jsx('div', {
    className:
      'fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50',
    onClick: l,
    children: S.jsxs('div', {
      className:
        'bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center',
      children: [
        S.jsx('h2', {
          className: 'text-2xl font-bold text-goldenrod font-additional',
          children: n,
        }),
        S.jsx('p', { className: 'font-main text-lg text-olive pt-4 pb-4', children: t }),
        S.jsx('button', {
          onClick: i,
          className:
            'w-fit min-w-3xs bg-jungle text-white px-4 py-2 rounded-xl text-lg font-main hover:bg-opacity-90 hover:cursor-pointer',
          children: r,
        }),
      ],
    }),
  });
}
const pM = 'firstName';
function vM() {
  var C;
  const [n, t] = k.useState(!1),
    [r, i] = k.useState(''),
    l = Yt(),
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
    } = oM((D) => {
      i(D), t(!0);
    });
  function x() {
    t(!1), localStorage.setItem(pM, r), l('/');
  }
  return S.jsxs('section', {
    className: 'w-fit flex flex-col items-center justify-center font-additional ',
    children: [
      S.jsx('h2', {
        className: 'text-3xl p-2 text-center text-jungle font-main-bd ',
        children: 'Registration',
      }),
      n &&
        S.jsx(yM, {
          title: 'Account created',
          message: S.jsxs(S.Fragment, {
            children: [
              'Welcome, ',
              r,
              '!',
              S.jsx('br', {}),
              'Your account has been created. You will be redirected to the main page.',
            ],
          }),
          buttonText: 'Confirm',
          closeModal: x,
        }),
      ';',
      S.jsxs('form', {
        className: 'flex flex-col gap-2 p-2 items-center',
        onSubmit: (D) => {
          D.preventDefault(), m(h)(D);
        },
        children: [
          gM.map(({ title: D, content: E, hint: R }) =>
            S.jsx(Nv, { title: D, content: E, register: o, errors: g, control: f, hint: R }, D)
          ),
          S.jsx(Sh, {
            type: 'checkbox',
            title: 'Billing address same as shipping',
            id: 'sameAsShipping',
            register: o('sameAsShipping'),
            error: (C = g.sameAsShipping) == null ? void 0 : C.message,
          }),
          b
            ? S.jsx(Sh, {
                type: 'checkbox',
                title: 'Set as default address',
                id: 'defaultAddress',
                register: o('defaultAddress'),
              })
            : S.jsx(Nv, { title: 'billing address', content: mM, register: o, errors: g }),
          S.jsx('button', {
            disabled: !y || v,
            type: 'submit',
            className:
              'w-fit p-1 px-3 text-white min-w-3xs bg-jungle rounded-xl m-2 text-2xl capitalize font-main font-medium hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
            children: v ? 'Loading...' : 'Submit!',
          }),
          w &&
            S.jsx('p', { className: 'text-coral text-sm p-1 w-[300px] text-center', children: w }),
        ],
      }),
    ],
  });
}
function bM({ additionalText: n, linkText: t, redirectTo: r }) {
  const i = Yt();
  function l() {
    i('/' + r);
  }
  return S.jsxs('div', {
    className: 'flex gap-2 bg-white items-center p-2 justify-center font-additional',
    children: [
      S.jsx('span', { className: 'text-jungle', children: n }),
      S.jsx('div', {
        onClick: l,
        className: 'text-jungle m-2 font-bold hover:cursor-pointer font-main',
        children: t,
      }),
    ],
  });
}
function _M() {
  const n = Yt(),
    t = !!localStorage.getItem('firstName');
  return (
    k.useEffect(() => {
      t && n('/', { replace: !0 });
    }, [t, n]),
    S.jsxs('section', {
      className: 'w-fit m-auto flex flex-col justify-center items-center rounded-lg bg-white',
      children: [
        S.jsx(bM, {
          additionalText: 'Already have an account?',
          linkText: 'Sign in →',
          redirectTo: 'login',
        }),
        S.jsx(vM, {}),
      ],
    })
  );
}
const zo = {
    'canvas-page': '_canvas-page_1ox40_1',
    'catalog-title': '_catalog-title_1ox40_21',
    'catalog-background': '_catalog-background_1ox40_33',
    'catalog-img': '_catalog-img_1ox40_41',
  },
  SM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function xM() {
  return (
    k.useEffect(() => {
      document.title = 'Catalog | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: zo['canvas-page'],
      children: [
        S.jsx('h2', { className: zo['catalog-title'], children: 'Catalog page coming soon”' }),
        S.jsx('div', {
          className: zo['catalog-background'],
          children: S.jsx('img', { className: zo['catalog-img'], src: SM, alt: 'catalog' }),
        }),
      ],
    })
  );
}
const Rl = {
    'canvas-page': '_canvas-page_1iazc_1',
    'cart-background': '_cart-background_1iazc_19',
    'empty-img': '_empty-img_1iazc_31',
    'cart-title-empty': '_cart-title-empty_1iazc_39',
    'cart-text-empty': '_cart-text-empty_1iazc_51',
  },
  wM = '/eCommerce/assets/cartEmptyCorgi-Dd1WEbPa.png';
function EM() {
  return (
    k.useEffect(() => {
      document.title = 'Cart | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Rl['canvas-page'],
      children: [
        S.jsx('h2', {
          className: Rl['cart-title-empty'],
          children: "It's time to start shopping!",
        }),
        S.jsx('span', {
          className: Rl['cart-text-empty'],
          children: 'Fill it with discounts from our popular departments',
        }),
        S.jsx('div', {
          className: Rl['cart-background'],
          children: S.jsx('img', { className: Rl['empty-img'], src: wM, alt: 'empty' }),
        }),
      ],
    })
  );
}
const Uo = {
    'canvas-page': '_canvas-page_16aco_1',
    'favorites-title': '_favorites-title_16aco_21',
    'favorites-background': '_favorites-background_16aco_33',
    'favorites-img': '_favorites-img_16aco_41',
  },
  OM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function TM() {
  return (
    k.useEffect(() => {
      document.title = 'Favorites | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Uo['canvas-page'],
      children: [
        S.jsx('h2', { className: Uo['favorites-title'], children: 'Favorites page coming soon”' }),
        S.jsx('div', {
          className: Uo['favorites-background'],
          children: S.jsx('img', { className: Uo['favorites-img'], src: OM, alt: 'favorites' }),
        }),
      ],
    })
  );
}
const Lo = {
    'canvas-page': '_canvas-page_vp1ul_1',
    'orders-title': '_orders-title_vp1ul_21',
    'orders-background': '_orders-background_vp1ul_33',
    'orders-img': '_orders-img_vp1ul_41',
  },
  CM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function MM() {
  return (
    k.useEffect(() => {
      document.title = 'Order | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Lo['canvas-page'],
      children: [
        S.jsx('h2', { className: Lo['orders-title'], children: 'Orders page coming soon”' }),
        S.jsx('div', {
          className: Lo['orders-background'],
          children: S.jsx('img', { className: Lo['orders-img'], src: CM, alt: 'orders' }),
        }),
      ],
    })
  );
}
const NM = '/eCommerce/assets/pageNotFound-CtxT6sMr.png',
  Bo = {
    'main-wrapper-404': '_main-wrapper-404_18x8j_1',
    'not-found-pages': '_not-found-pages_18x8j_17',
    'back-home-button': '_back-home-button_18x8j_31',
  };
function DM() {
  k.useEffect(() => {
    document.title = '404 | Zoo Shop | Pet Supplies';
  }, []);
  const n = Yt();
  function t() {
    n('/');
  }
  return S.jsx('main', {
    className: Bo.main,
    children: S.jsxs('div', {
      className: Bo['main-wrapper-404'],
      children: [
        S.jsx('button', { onClick: t, className: Bo['back-home-button'], children: 'Back Home' }),
        S.jsx('img', { className: Bo['not-found-pages'], src: NM, alt: '404 Page Not Found' }),
      ],
    }),
  });
}
const Ho = {
    'canvas-page': '_canvas-page_1390v_1',
    'about-title': '_about-title_1390v_21',
    'about-background': '_about-background_1390v_33',
    'about-img': '_about-img_1390v_41',
  },
  AM = '/eCommerce/assets/aboutUs-DLpfez0Q.png';
function kM() {
  return (
    k.useEffect(() => {
      document.title = 'About Us | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Ho['canvas-page'],
      children: [
        S.jsx('h2', { className: Ho['about-title'], children: 'About Us page coming soon”' }),
        S.jsx('div', {
          className: Ho['about-background'],
          children: S.jsx('img', { className: Ho['about-img'], src: AM, alt: 'about' }),
        }),
      ],
    })
  );
}
const Vo = {
    'canvas-page': '_canvas-page_tkqxz_1',
    'profile-title': '_profile-title_tkqxz_21',
    'profile-background': '_profile-background_tkqxz_33',
    'profile-img': '_profile-img_tkqxz_41',
  },
  RM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function jM() {
  return (
    k.useEffect(() => {
      document.title = 'Profile | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Vo['canvas-page'],
      children: [
        S.jsx('h2', { className: Vo['profile-title'], children: 'Profile page coming soon”' }),
        S.jsx('div', {
          className: Vo['profile-background'],
          children: S.jsx('img', { className: Vo['profile-img'], src: RM, alt: 'profile' }),
        }),
      ],
    })
  );
}
const _r = {
    'canvas-page': '_canvas-page_10vfl_1',
    'team-title': '_team-title_10vfl_17',
    'team-background': '_team-background_10vfl_31',
    'team-img': '_team-img_10vfl_47',
    'team-img2': '_team-img2_10vfl_49',
    'team-img3': '_team-img3_10vfl_51',
    'team-img4': '_team-img4_10vfl_53',
    'team-img5': '_team-img5_10vfl_55',
  },
  zM = '/eCommerce/assets/ourTeam-B6nP_dSd.png',
  UM = '/eCommerce/assets/ourTeam2-aebBRySP.png',
  LM = '/eCommerce/assets/ourTeam3-CIqs6-Lm.png',
  BM = '/eCommerce/assets/ourTeam4-BjCnLH0h.png',
  HM = '/eCommerce/assets/ourTeam5-BGF69oHR.png';
function VM() {
  return (
    k.useEffect(() => {
      document.title = 'Team | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: _r['canvas-page'],
      children: [
        S.jsx('h2', {
          className: _r['team-title'],
          children: 'Our friendly team of website developers',
        }),
        S.jsxs('div', {
          className: _r['team-background'],
          children: [
            S.jsx('img', { className: _r['team-img'], src: zM, alt: 'team' }),
            S.jsx('img', { className: _r['team-img2'], src: UM, alt: 'team' }),
            S.jsx('img', { className: _r['team-img3'], src: LM, alt: 'team' }),
            S.jsx('img', { className: _r['team-img4'], src: BM, alt: 'team' }),
            S.jsx('img', { className: _r['team-img5'], src: HM, alt: 'team' }),
          ],
        }),
      ],
    })
  );
}
function qM() {
  const n = localStorage.getItem('firstName');
  return S.jsx(Ex, {
    children: S.jsxs(bn, {
      path: '/',
      element: S.jsx(Nw, {}),
      children: [
        S.jsx(bn, { index: !0, element: S.jsx(nE, {}) }),
        S.jsx(bn, { path: 'login', element: n ? S.jsx(Ip, { to: '/' }) : S.jsx(ZO, {}) }),
        S.jsx(bn, { path: '/registration', element: n ? S.jsx(Ip, { to: '/' }) : S.jsx(_M, {}) }),
        S.jsx(bn, { path: 'catalog', element: S.jsx(xM, {}) }),
        S.jsx(bn, { path: 'cart', element: S.jsx(EM, {}) }),
        S.jsx(bn, { path: 'favorites', element: S.jsx(TM, {}) }),
        S.jsx(bn, { path: 'orders', element: S.jsx(MM, {}) }),
        S.jsx(bn, { path: 'profile', element: S.jsx(jM, {}) }),
        S.jsx(bn, { path: 'about', element: S.jsx(kM, {}) }),
        S.jsx(bn, { path: 'team', element: S.jsx(VM, {}) }),
        S.jsx(bn, { path: '*', element: S.jsx(DM, {}) }),
      ],
    }),
  });
}
var rh = { exports: {} },
  ih = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dv;
function YM() {
  if (Dv) return ih;
  Dv = 1;
  var n = pc();
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
    (ih.useSyncExternalStoreWithSelector = function (m, g, y, v, b) {
      var w = l(null);
      if (w.current === null) {
        var x = { hasValue: !1, value: null };
        w.current = x;
      } else x = w.current;
      w = f(
        function () {
          function C(q) {
            if (!D) {
              if (((D = !0), (E = q), (q = v(q)), b !== void 0 && x.hasValue)) {
                var K = x.value;
                if (b(K, q)) return (R = K);
              }
              return (R = q);
            }
            if (((K = R), r(E, q))) return K;
            var W = v(q);
            return b !== void 0 && b(K, W) ? ((E = q), K) : ((E = q), (R = W));
          }
          var D = !1,
            E,
            R,
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
      var N = i(m, w[0], w[1]);
      return (
        o(
          function () {
            (x.hasValue = !0), (x.value = N);
          },
          [N]
        ),
        h(N),
        N
      );
    }),
    ih
  );
}
var Av;
function ZM() {
  return Av || ((Av = 1), (rh.exports = YM())), rh.exports;
}
ZM();
function FM(n) {
  n();
}
function PM() {
  let n = null,
    t = null;
  return {
    clear() {
      (n = null), (t = null);
    },
    notify() {
      FM(() => {
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
var kv = { notify() {}, get: () => [] };
function GM(n, t) {
  let r,
    i = kv,
    l = 0,
    o = !1;
  function f(N) {
    y();
    const C = i.subscribe(N);
    let D = !1;
    return () => {
      D || ((D = !0), C(), v());
    };
  }
  function h() {
    i.notify();
  }
  function m() {
    x.onStateChange && x.onStateChange();
  }
  function g() {
    return o;
  }
  function y() {
    l++, r || ((r = n.subscribe(m)), (i = PM()));
  }
  function v() {
    l--, r && l === 0 && (r(), (r = void 0), i.clear(), (i = kv));
  }
  function b() {
    o || ((o = !0), y());
  }
  function w() {
    o && ((o = !1), v());
  }
  const x = {
    addNestedSub: f,
    notifyNestedSubs: h,
    handleChangeWrapper: m,
    isSubscribed: g,
    trySubscribe: b,
    tryUnsubscribe: w,
    getListeners: () => i,
  };
  return x;
}
var $M = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  QM = $M(),
  KM = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  WM = KM(),
  XM = () => (QM || WM ? k.useLayoutEffect : k.useEffect),
  IM = XM(),
  sh = Symbol.for('react-redux-context'),
  lh = typeof globalThis < 'u' ? globalThis : {};
function JM() {
  if (!k.createContext) return {};
  const n = lh[sh] ?? (lh[sh] = new Map());
  let t = n.get(k.createContext);
  return t || ((t = k.createContext(null)), n.set(k.createContext, t)), t;
}
var eN = JM();
function tN(n) {
  const { children: t, context: r, serverState: i, store: l } = n,
    o = k.useMemo(() => {
      const m = GM(l);
      return { store: l, subscription: m, getServerState: i ? () => i : void 0 };
    }, [l, i]),
    f = k.useMemo(() => l.getState(), [l]);
  IM(() => {
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
  const h = r || eN;
  return k.createElement(h.Provider, { value: o }, t);
}
var nN = tN;
function qt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var aN = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Rv = aN,
  uh = () => Math.random().toString(36).substring(7).split('').join('.'),
  rN = {
    INIT: `@@redux/INIT${uh()}`,
    REPLACE: `@@redux/REPLACE${uh()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${uh()}`,
  },
  lc = rN;
function Gh(n) {
  if (typeof n != 'object' || n === null) return !1;
  let t = n;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(n) === t || Object.getPrototypeOf(n) === null;
}
function Zb(n, t, r) {
  if (typeof n != 'function') throw new Error(qt(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(qt(0));
  if ((typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)), typeof r < 'u')) {
    if (typeof r != 'function') throw new Error(qt(1));
    return r(Zb)(n, t);
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
      o.forEach((C, D) => {
        f.set(D, C);
      }));
  }
  function y() {
    if (m) throw new Error(qt(3));
    return l;
  }
  function v(C) {
    if (typeof C != 'function') throw new Error(qt(4));
    if (m) throw new Error(qt(5));
    let D = !0;
    g();
    const E = h++;
    return (
      f.set(E, C),
      function () {
        if (D) {
          if (m) throw new Error(qt(6));
          (D = !1), g(), f.delete(E), (o = null);
        }
      }
    );
  }
  function b(C) {
    if (!Gh(C)) throw new Error(qt(7));
    if (typeof C.type > 'u') throw new Error(qt(8));
    if (typeof C.type != 'string') throw new Error(qt(17));
    if (m) throw new Error(qt(9));
    try {
      (m = !0), (l = i(l, C));
    } finally {
      m = !1;
    }
    return (
      (o = f).forEach((E) => {
        E();
      }),
      C
    );
  }
  function w(C) {
    if (typeof C != 'function') throw new Error(qt(10));
    (i = C), b({ type: lc.REPLACE });
  }
  function x() {
    const C = v;
    return {
      subscribe(D) {
        if (typeof D != 'object' || D === null) throw new Error(qt(11));
        function E() {
          const Y = D;
          Y.next && Y.next(y());
        }
        return E(), { unsubscribe: C(E) };
      },
      [Rv]() {
        return this;
      },
    };
  }
  return (
    b({ type: lc.INIT }), { dispatch: b, subscribe: v, getState: y, replaceReducer: w, [Rv]: x }
  );
}
function iN(n) {
  Object.keys(n).forEach((t) => {
    const r = n[t];
    if (typeof r(void 0, { type: lc.INIT }) > 'u') throw new Error(qt(12));
    if (typeof r(void 0, { type: lc.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(qt(13));
  });
}
function sN(n) {
  const t = Object.keys(n),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const f = t[o];
    typeof n[f] == 'function' && (r[f] = n[f]);
  }
  const i = Object.keys(r);
  let l;
  try {
    iN(r);
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
        x = b(w, h);
      if (typeof x > 'u') throw (h && h.type, new Error(qt(14)));
      (g[v] = x), (m = m || x !== w);
    }
    return (m = m || i.length !== Object.keys(f).length), m ? g : f;
  };
}
function uc(...n) {
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
function lN(...n) {
  return (t) => (r, i) => {
    const l = t(r, i);
    let o = () => {
      throw new Error(qt(15));
    };
    const f = { getState: l.getState, dispatch: (m, ...g) => o(m, ...g) },
      h = n.map((m) => m(f));
    return (o = uc(...h)(l.dispatch)), { ...l, dispatch: o };
  };
}
function uN(n) {
  return Gh(n) && 'type' in n && typeof n.type == 'string';
}
var Fb = Symbol.for('immer-nothing'),
  jv = Symbol.for('immer-draftable'),
  wn = Symbol.for('immer-state');
function Zn(n, ...t) {
  throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`);
}
var Ss = Object.getPrototypeOf;
function ci(n) {
  return !!n && !!n[wn];
}
function Za(n) {
  var t;
  return n
    ? Pb(n) ||
        Array.isArray(n) ||
        !!n[jv] ||
        !!((t = n.constructor) != null && t[jv]) ||
        Ec(n) ||
        Oc(n)
    : !1;
}
var oN = Object.prototype.constructor.toString();
function Pb(n) {
  if (!n || typeof n != 'object') return !1;
  const t = Ss(n);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object ? !0 : typeof r == 'function' && Function.toString.call(r) === oN;
}
function oc(n, t) {
  wc(n) === 0
    ? Reflect.ownKeys(n).forEach((r) => {
        t(r, n[r], n);
      })
    : n.forEach((r, i) => t(i, r, n));
}
function wc(n) {
  const t = n[wn];
  return t ? t.type_ : Array.isArray(n) ? 1 : Ec(n) ? 2 : Oc(n) ? 3 : 0;
}
function xh(n, t) {
  return wc(n) === 2 ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}
function Gb(n, t, r) {
  const i = wc(n);
  i === 2 ? n.set(t, r) : i === 3 ? n.add(r) : (n[t] = r);
}
function cN(n, t) {
  return n === t ? n !== 0 || 1 / n === 1 / t : n !== n && t !== t;
}
function Ec(n) {
  return n instanceof Map;
}
function Oc(n) {
  return n instanceof Set;
}
function Jr(n) {
  return n.copy_ || n.base_;
}
function wh(n, t) {
  if (Ec(n)) return new Map(n);
  if (Oc(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const r = Pb(n);
  if (t === !0 || (t === 'class_only' && !r)) {
    const i = Object.getOwnPropertyDescriptors(n);
    delete i[wn];
    let l = Reflect.ownKeys(i);
    for (let o = 0; o < l.length; o++) {
      const f = l[o],
        h = i[f];
      h.writable === !1 && ((h.writable = !0), (h.configurable = !0)),
        (h.get || h.set) &&
          (i[f] = { configurable: !0, writable: !0, enumerable: h.enumerable, value: n[f] });
    }
    return Object.create(Ss(n), i);
  } else {
    const i = Ss(n);
    if (i !== null && r) return { ...n };
    const l = Object.create(i);
    return Object.assign(l, n);
  }
}
function $h(n, t = !1) {
  return (
    Tc(n) ||
      ci(n) ||
      !Za(n) ||
      (wc(n) > 1 && (n.set = n.add = n.clear = n.delete = fN),
      Object.freeze(n),
      t && Object.entries(n).forEach(([r, i]) => $h(i, !0))),
    n
  );
}
function fN() {
  Zn(2);
}
function Tc(n) {
  return Object.isFrozen(n);
}
var dN = {};
function fi(n) {
  const t = dN[n];
  return t || Zn(0, n), t;
}
var su;
function $b() {
  return su;
}
function hN(n, t) {
  return { drafts_: [], parent_: n, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function zv(n, t) {
  t && (fi('Patches'), (n.patches_ = []), (n.inversePatches_ = []), (n.patchListener_ = t));
}
function Eh(n) {
  Oh(n), n.drafts_.forEach(mN), (n.drafts_ = null);
}
function Oh(n) {
  n === su && (su = n.parent_);
}
function Uv(n) {
  return (su = hN(su, n));
}
function mN(n) {
  const t = n[wn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Lv(n, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    n !== void 0 && n !== r
      ? (r[wn].modified_ && (Eh(t), Zn(4)),
        Za(n) && ((n = cc(t, n)), t.parent_ || fc(t, n)),
        t.patches_ &&
          fi('Patches').generateReplacementPatches_(r[wn].base_, n, t.patches_, t.inversePatches_))
      : (n = cc(t, r, [])),
    Eh(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    n !== Fb ? n : void 0
  );
}
function cc(n, t, r) {
  if (Tc(t)) return t;
  const i = t[wn];
  if (!i) return oc(t, (l, o) => Bv(n, i, t, l, o, r)), t;
  if (i.scope_ !== n) return t;
  if (!i.modified_) return fc(n, i.base_, !0), i.base_;
  if (!i.finalized_) {
    (i.finalized_ = !0), i.scope_.unfinalizedDrafts_--;
    const l = i.copy_;
    let o = l,
      f = !1;
    i.type_ === 3 && ((o = new Set(l)), l.clear(), (f = !0)),
      oc(o, (h, m) => Bv(n, i, l, h, m, r, f)),
      fc(n, l, !1),
      r && n.patches_ && fi('Patches').generatePatches_(i, r, n.patches_, n.inversePatches_);
  }
  return i.copy_;
}
function Bv(n, t, r, i, l, o, f) {
  if (ci(l)) {
    const h = o && t && t.type_ !== 3 && !xh(t.assigned_, i) ? o.concat(i) : void 0,
      m = cc(n, l, h);
    if ((Gb(r, i, m), ci(m))) n.canAutoFreeze_ = !1;
    else return;
  } else f && r.add(l);
  if (Za(l) && !Tc(l)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    cc(n, l),
      (!t || !t.scope_.parent_) &&
        typeof i != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, i) &&
        fc(n, l);
  }
}
function fc(n, t, r = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && $h(t, r);
}
function gN(n, t) {
  const r = Array.isArray(n),
    i = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : $b(),
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
    o = Qh;
  r && ((l = [i]), (o = lu));
  const { revoke: f, proxy: h } = Proxy.revocable(l, o);
  return (i.draft_ = h), (i.revoke_ = f), h;
}
var Qh = {
    get(n, t) {
      if (t === wn) return n;
      const r = Jr(n);
      if (!xh(r, t)) return yN(n, r, t);
      const i = r[t];
      return n.finalized_ || !Za(i)
        ? i
        : i === oh(n.base_, t)
          ? (ch(n), (n.copy_[t] = Ch(i, n)))
          : i;
    },
    has(n, t) {
      return t in Jr(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(Jr(n));
    },
    set(n, t, r) {
      const i = Qb(Jr(n), t);
      if (i != null && i.set) return i.set.call(n.draft_, r), !0;
      if (!n.modified_) {
        const l = oh(Jr(n), t),
          o = l == null ? void 0 : l[wn];
        if (o && o.base_ === r) return (n.copy_[t] = r), (n.assigned_[t] = !1), !0;
        if (cN(r, l) && (r !== void 0 || xh(n.base_, t))) return !0;
        ch(n), Th(n);
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
        oh(n.base_, t) !== void 0 || t in n.base_
          ? ((n.assigned_[t] = !1), ch(n), Th(n))
          : delete n.assigned_[t],
        n.copy_ && delete n.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(n, t) {
      const r = Jr(n),
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
      Zn(11);
    },
    getPrototypeOf(n) {
      return Ss(n.base_);
    },
    setPrototypeOf() {
      Zn(12);
    },
  },
  lu = {};
oc(Qh, (n, t) => {
  lu[n] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
lu.deleteProperty = function (n, t) {
  return lu.set.call(this, n, t, void 0);
};
lu.set = function (n, t, r) {
  return Qh.set.call(this, n[0], t, r, n[0]);
};
function oh(n, t) {
  const r = n[wn];
  return (r ? Jr(r) : n)[t];
}
function yN(n, t, r) {
  var l;
  const i = Qb(t, r);
  return i ? ('value' in i ? i.value : (l = i.get) == null ? void 0 : l.call(n.draft_)) : void 0;
}
function Qb(n, t) {
  if (!(t in n)) return;
  let r = Ss(n);
  for (; r; ) {
    const i = Object.getOwnPropertyDescriptor(r, t);
    if (i) return i;
    r = Ss(r);
  }
}
function Th(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && Th(n.parent_));
}
function ch(n) {
  n.copy_ || (n.copy_ = wh(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var pN = class {
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
        typeof r != 'function' && Zn(6), i !== void 0 && typeof i != 'function' && Zn(7);
        let l;
        if (Za(t)) {
          const o = Uv(this),
            f = Ch(t, void 0);
          let h = !0;
          try {
            (l = r(f)), (h = !1);
          } finally {
            h ? Eh(o) : Oh(o);
          }
          return zv(o, i), Lv(l, o);
        } else if (!t || typeof t != 'object') {
          if (
            ((l = r(t)),
            l === void 0 && (l = t),
            l === Fb && (l = void 0),
            this.autoFreeze_ && $h(l, !0),
            i)
          ) {
            const o = [],
              f = [];
            fi('Patches').generateReplacementPatches_(t, l, o, f), i(o, f);
          }
          return l;
        } else Zn(1, t);
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
    Za(n) || Zn(8), ci(n) && (n = vN(n));
    const t = Uv(this),
      r = Ch(n, void 0);
    return (r[wn].isManual_ = !0), Oh(t), r;
  }
  finishDraft(n, t) {
    const r = n && n[wn];
    (!r || !r.isManual_) && Zn(9);
    const { scope_: i } = r;
    return zv(i, t), Lv(void 0, i);
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
    const i = fi('Patches').applyPatches_;
    return ci(n) ? i(n, t) : this.produce(n, (l) => i(l, t));
  }
};
function Ch(n, t) {
  const r = Ec(n) ? fi('MapSet').proxyMap_(n, t) : Oc(n) ? fi('MapSet').proxySet_(n, t) : gN(n, t);
  return (t ? t.scope_ : $b()).drafts_.push(r), r;
}
function vN(n) {
  return ci(n) || Zn(10, n), Kb(n);
}
function Kb(n) {
  if (!Za(n) || Tc(n)) return n;
  const t = n[wn];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = wh(n, t.scope_.immer_.useStrictShallowCopy_));
  } else r = wh(n, !0);
  return (
    oc(r, (i, l) => {
      Gb(r, i, Kb(l));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var En = new pN(),
  Wb = En.produce;
En.produceWithPatches.bind(En);
En.setAutoFreeze.bind(En);
En.setUseStrictShallowCopy.bind(En);
En.applyPatches.bind(En);
En.createDraft.bind(En);
En.finishDraft.bind(En);
function Xb(n) {
  return ({ dispatch: r, getState: i }) =>
    (l) =>
    (o) =>
      typeof o == 'function' ? o(r, i, n) : l(o);
}
var bN = Xb(),
  _N = Xb,
  SN =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? uc : uc.apply(null, arguments);
        };
function Hv(n, t) {
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
  return (r.toString = () => `${n}`), (r.type = n), (r.match = (i) => uN(i) && i.type === n), r;
}
var Ib = class Bl extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Bl.prototype);
  }
  static get [Symbol.species]() {
    return Bl;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Bl(...t[0].concat(this))
      : new Bl(...t.concat(this));
  }
};
function Vv(n) {
  return Za(n) ? Wb(n, () => {}) : n;
}
function qo(n, t, r) {
  return n.has(t) ? n.get(t) : n.set(t, r(t)).get(t);
}
function xN(n) {
  return typeof n == 'boolean';
}
var wN = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: i = !0,
        serializableCheck: l = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let f = new Ib();
      return r && (xN(r) ? f.push(bN) : f.push(_N(r.extraArgument))), f;
    },
  EN = 'RTK_autoBatch',
  qv = (n) => (t) => {
    setTimeout(t, n);
  },
  ON =
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
                : qv(10)
              : n.type === 'callback'
                ? n.queueNotification
                : qv(n.timeout),
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
              (l = !((v = y == null ? void 0 : y.meta) != null && v[EN])),
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
  TN = (n) =>
    function (r) {
      const { autoBatch: i = !0 } = r ?? {};
      let l = new Ib(n);
      return i && l.push(ON(typeof i == 'object' ? i : void 0)), l;
    };
function CN(n) {
  const t = wN(),
    {
      reducer: r = void 0,
      middleware: i,
      devTools: l = !0,
      preloadedState: o = void 0,
      enhancers: f = void 0,
    } = n || {};
  let h;
  if (typeof r == 'function') h = r;
  else if (Gh(r)) h = sN(r);
  else throw new Error(Va(1));
  let m;
  typeof i == 'function' ? (m = i(t)) : (m = t());
  let g = uc;
  l && (g = SN({ trace: !1, ...(typeof l == 'object' && l) }));
  const y = lN(...m),
    v = TN(y);
  let b = typeof f == 'function' ? f(v) : v();
  const w = g(...b);
  return Zb(h, o, w);
}
function Jb(n) {
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
function MN(n) {
  return typeof n == 'function';
}
function NN(n, t) {
  let [r, i, l] = Jb(t),
    o;
  if (MN(n)) o = () => Vv(n());
  else {
    const h = Vv(n);
    o = () => h;
  }
  function f(h = o(), m) {
    let g = [r[m.type], ...i.filter(({ matcher: y }) => y(m)).map(({ reducer: y }) => y)];
    return (
      g.filter((y) => !!y).length === 0 && (g = [l]),
      g.reduce((y, v) => {
        if (v)
          if (ci(y)) {
            const w = v(y, m);
            return w === void 0 ? y : w;
          } else {
            if (Za(y)) return Wb(y, (b) => v(b, m));
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
var DN = Symbol.for('rtk-slice-createasyncthunk');
function AN(n, t) {
  return `${n}/${t}`;
}
function kN({ creators: n } = {}) {
  var r;
  const t = (r = n == null ? void 0 : n.asyncThunk) == null ? void 0 : r[DN];
  return function (l) {
    const { name: o, reducerPath: f = o } = l;
    if (!o) throw new Error(Va(11));
    const h = (typeof l.reducers == 'function' ? l.reducers(zN()) : l.reducers) || {},
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
        K = { reducerName: Y, type: AN(o, Y), createNotation: typeof l.reducers == 'function' };
      LN(q) ? HN(K, q, y, t) : UN(K, q, y);
    });
    function v() {
      const [Y = {}, q = [], K = void 0] =
          typeof l.extraReducers == 'function' ? Jb(l.extraReducers) : [l.extraReducers],
        W = { ...Y, ...g.sliceCaseReducersByType };
      return NN(l.initialState, (ie) => {
        for (let te in W) ie.addCase(te, W[te]);
        for (let te of g.sliceMatchers) ie.addMatcher(te.matcher, te.reducer);
        for (let te of q) ie.addMatcher(te.matcher, te.reducer);
        K && ie.addDefaultCase(K);
      });
    }
    const b = (Y) => Y,
      w = new Map(),
      x = new WeakMap();
    let N;
    function C(Y, q) {
      return N || (N = v()), N(Y, q);
    }
    function D() {
      return N || (N = v()), N.getInitialState();
    }
    function E(Y, q = !1) {
      function K(ie) {
        let te = ie[Y];
        return typeof te > 'u' && q && (te = qo(x, K, D)), te;
      }
      function W(ie = b) {
        const te = qo(w, q, () => new WeakMap());
        return qo(te, ie, () => {
          const _e = {};
          for (const [be, se] of Object.entries(l.selectors ?? {}))
            _e[be] = RN(se, ie, () => qo(x, ie, D), q);
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
    const R = {
      name: o,
      reducer: C,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: D,
      ...E(f),
      injectInto(Y, { reducerPath: q, ...K } = {}) {
        const W = q ?? f;
        return Y.inject({ reducerPath: W, reducer: C }, K), { ...R, ...E(W, !0) };
      },
    };
    return R;
  };
}
function RN(n, t, r, i) {
  function l(o, ...f) {
    let h = t(o);
    return typeof h > 'u' && i && (h = r()), n(h, ...f);
  }
  return (l.unwrapped = n), l;
}
var jN = kN();
function zN() {
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
function UN({ type: n, reducerName: t, createNotation: r }, i, l) {
  let o, f;
  if ('reducer' in i) {
    if (r && !BN(i)) throw new Error(Va(17));
    (o = i.reducer), (f = i.prepare);
  } else o = i;
  l.addCase(n, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, f ? Hv(n, f) : Hv(n));
}
function LN(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function BN(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function HN({ type: n, reducerName: t }, r, i, l) {
  if (!l) throw new Error(Va(18));
  const { payloadCreator: o, fulfilled: f, pending: h, rejected: m, settled: g, options: y } = r,
    v = l(n, o, y);
  i.exposeAction(t, v),
    f && i.addCase(v.fulfilled, f),
    h && i.addCase(v.pending, h),
    m && i.addCase(v.rejected, m),
    g && i.addMatcher(v.settled, g),
    i.exposeCaseReducer(t, {
      fulfilled: f || Yo,
      pending: h || Yo,
      rejected: m || Yo,
      settled: g || Yo,
    });
}
function Yo() {}
function Va(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const VN = { value: 0 },
  e1 = jN({
    name: 'counter',
    initialState: VN,
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
  { increment: $D, decrement: QD, incrementByAmount: KD } = e1.actions,
  qN = e1.reducer,
  YN = CN({ reducer: { counter: qN } });
var Cc = class {
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
  Mc = typeof window > 'u' || 'Deno' in globalThis;
function Bn() {}
function ZN(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function FN(n) {
  return typeof n == 'number' && n >= 0 && n !== 1 / 0;
}
function PN(n, t) {
  return Math.max(n + (t || 0) - Date.now(), 0);
}
function Yv(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function GN(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function Zv(n, t) {
  const { type: r = 'all', exact: i, fetchStatus: l, predicate: o, queryKey: f, stale: h } = n;
  if (f) {
    if (i) {
      if (t.queryHash !== Kh(f, t.options)) return !1;
    } else if (!ou(t.queryKey, f)) return !1;
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
function Fv(n, t) {
  const { exact: r, status: i, predicate: l, mutationKey: o } = n;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (uu(t.options.mutationKey) !== uu(o)) return !1;
    } else if (!ou(t.options.mutationKey, o)) return !1;
  }
  return !((i && t.state.status !== i) || (l && !l(t)));
}
function Kh(n, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || uu)(n);
}
function uu(n) {
  return JSON.stringify(n, (t, r) =>
    Mh(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, l) => ((i[l] = r[l]), i), {})
      : r
  );
}
function ou(n, t) {
  return n === t
    ? !0
    : typeof n != typeof t
      ? !1
      : n && t && typeof n == 'object' && typeof t == 'object'
        ? Object.keys(t).every((r) => ou(n[r], t[r]))
        : !1;
}
function t1(n, t) {
  if (n === t) return n;
  const r = Pv(n) && Pv(t);
  if (r || (Mh(n) && Mh(t))) {
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
        : ((h[y] = t1(n[y], t[y])), h[y] === n[y] && n[y] !== void 0 && m++);
    }
    return l === f && m === l ? n : h;
  }
  return t;
}
function Pv(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Mh(n) {
  if (!Gv(n)) return !1;
  const t = n.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Gv(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function Gv(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
function $N(n) {
  return new Promise((t) => {
    setTimeout(t, n);
  });
}
function QN(n, t, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(n, t)
    : r.structuralSharing !== !1
      ? t1(n, t)
      : t;
}
function KN(n, t, r = 0) {
  const i = [...n, t];
  return r && i.length > r ? i.slice(1) : i;
}
function WN(n, t, r = 0) {
  const i = [t, ...n];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var Wh = Symbol();
function n1(n, t) {
  return !n.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !n.queryFn || n.queryFn === Wh
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
var ti,
  xr,
  us,
  c0,
  XN =
    ((c0 = class extends Cc {
      constructor() {
        super();
        Ke(this, ti);
        Ke(this, xr);
        Ke(this, us);
        ze(this, us, (t) => {
          if (!Mc && window.addEventListener) {
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
        $(this, xr) || this.setEventListener($(this, us));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = $(this, xr)) == null || t.call(this), ze(this, xr, void 0));
      }
      setEventListener(t) {
        var r;
        ze(this, us, t),
          (r = $(this, xr)) == null || r.call(this),
          ze(
            this,
            xr,
            t((i) => {
              typeof i == 'boolean' ? this.setFocused(i) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        $(this, ti) !== t && (ze(this, ti, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof $(this, ti) == 'boolean'
          ? $(this, ti)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (ti = new WeakMap()),
    (xr = new WeakMap()),
    (us = new WeakMap()),
    c0),
  a1 = new XN(),
  os,
  wr,
  cs,
  f0,
  IN =
    ((f0 = class extends Cc {
      constructor() {
        super();
        Ke(this, os, !0);
        Ke(this, wr);
        Ke(this, cs);
        ze(this, cs, (t) => {
          if (!Mc && window.addEventListener) {
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
        $(this, wr) || this.setEventListener($(this, cs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = $(this, wr)) == null || t.call(this), ze(this, wr, void 0));
      }
      setEventListener(t) {
        var r;
        ze(this, cs, t),
          (r = $(this, wr)) == null || r.call(this),
          ze(this, wr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        $(this, os) !== t &&
          (ze(this, os, t),
          this.listeners.forEach((i) => {
            i(t);
          }));
      }
      isOnline() {
        return $(this, os);
      }
    }),
    (os = new WeakMap()),
    (wr = new WeakMap()),
    (cs = new WeakMap()),
    f0),
  dc = new IN();
function JN() {
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
function eD(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function r1(n) {
  return (n ?? 'online') === 'online' ? dc.isOnline() : !0;
}
var i1 = class extends Error {
  constructor(n) {
    super('CancelledError'),
      (this.revert = n == null ? void 0 : n.revert),
      (this.silent = n == null ? void 0 : n.silent);
  }
};
function fh(n) {
  return n instanceof i1;
}
function s1(n) {
  let t = !1,
    r = 0,
    i = !1,
    l;
  const o = JN(),
    f = (N) => {
      var C;
      i || (b(new i1(N)), (C = n.abort) == null || C.call(n));
    },
    h = () => {
      t = !0;
    },
    m = () => {
      t = !1;
    },
    g = () => a1.isFocused() && (n.networkMode === 'always' || dc.isOnline()) && n.canRun(),
    y = () => r1(n.networkMode) && n.canRun(),
    v = (N) => {
      var C;
      i || ((i = !0), (C = n.onSuccess) == null || C.call(n, N), l == null || l(), o.resolve(N));
    },
    b = (N) => {
      var C;
      i || ((i = !0), (C = n.onError) == null || C.call(n, N), l == null || l(), o.reject(N));
    },
    w = () =>
      new Promise((N) => {
        var C;
        (l = (D) => {
          (i || g()) && N(D);
        }),
          (C = n.onPause) == null || C.call(n);
      }).then(() => {
        var N;
        (l = void 0), i || (N = n.onContinue) == null || N.call(n);
      }),
    x = () => {
      if (i) return;
      let N;
      const C = r === 0 ? n.initialPromise : void 0;
      try {
        N = C ?? n.fn();
      } catch (D) {
        N = Promise.reject(D);
      }
      Promise.resolve(N)
        .then(v)
        .catch((D) => {
          var K;
          if (i) return;
          const E = n.retry ?? (Mc ? 0 : 3),
            R = n.retryDelay ?? eD,
            Y = typeof R == 'function' ? R(r, D) : R,
            q = E === !0 || (typeof E == 'number' && r < E) || (typeof E == 'function' && E(r, D));
          if (t || !q) {
            b(D);
            return;
          }
          r++,
            (K = n.onFail) == null || K.call(n, r, D),
            $N(Y)
              .then(() => (g() ? void 0 : w()))
              .then(() => {
                t ? b(D) : x();
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
    start: () => (y() ? x() : w().then(x), o),
  };
}
var tD = (n) => setTimeout(n, 0);
function nD() {
  let n = [],
    t = 0,
    r = (h) => {
      h();
    },
    i = (h) => {
      h();
    },
    l = tD;
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
var nn = nD(),
  ni,
  d0,
  l1 =
    ((d0 = class {
      constructor() {
        Ke(this, ni);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          FN(this.gcTime) &&
            ze(
              this,
              ni,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (Mc ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        $(this, ni) && (clearTimeout($(this, ni)), ze(this, ni, void 0));
      }
    }),
    (ni = new WeakMap()),
    d0),
  fs,
  ds,
  jn,
  ai,
  Kt,
  fu,
  ri,
  Hn,
  Ra,
  h0,
  aD =
    ((h0 = class extends l1 {
      constructor(t) {
        super();
        Ke(this, Hn);
        Ke(this, fs);
        Ke(this, ds);
        Ke(this, jn);
        Ke(this, ai);
        Ke(this, Kt);
        Ke(this, fu);
        Ke(this, ri);
        ze(this, ri, !1),
          ze(this, fu, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          ze(this, ai, t.client),
          ze(this, jn, $(this, ai).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          ze(this, fs, iD(this.options)),
          (this.state = t.state ?? $(this, fs)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = $(this, Kt)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...$(this, fu), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && $(this, jn).remove(this);
      }
      setData(t, r) {
        const i = QN(this.state.data, t, this.options);
        return (
          $t(this, Hn, Ra).call(this, {
            data: i,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          i
        );
      }
      setState(t, r) {
        $t(this, Hn, Ra).call(this, { type: 'setState', state: t, setStateOptions: r });
      }
      cancel(t) {
        var i, l;
        const r = (i = $(this, Kt)) == null ? void 0 : i.promise;
        return (
          (l = $(this, Kt)) == null || l.cancel(t), r ? r.then(Bn).catch(Bn) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState($(this, fs));
      }
      isActive() {
        return this.observers.some((t) => GN(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Wh ||
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
          this.state.isInvalidated || this.state.data === void 0 || !PN(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = $(this, Kt)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = $(this, Kt)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          $(this, jn).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            ($(this, Kt) &&
              ($(this, ri) ? $(this, Kt).cancel({ revert: !0 }) : $(this, Kt).cancelRetry()),
            this.scheduleGc()),
          $(this, jn).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || $t(this, Hn, Ra).call(this, { type: 'invalidate' });
      }
      fetch(t, r) {
        var m, g, y;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if ($(this, Kt)) return $(this, Kt).continueRetry(), $(this, Kt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const v = this.observers.find((b) => b.options.queryFn);
          v && this.setOptions(v.options);
        }
        const i = new AbortController(),
          l = (v) => {
            Object.defineProperty(v, 'signal', {
              enumerable: !0,
              get: () => (ze(this, ri, !0), i.signal),
            });
          },
          o = () => {
            const v = n1(this.options, r),
              b = { client: $(this, ai), queryKey: this.queryKey, meta: this.meta };
            return (
              l(b),
              ze(this, ri, !1),
              this.options.persister ? this.options.persister(v, b, this) : v(b)
            );
          },
          f = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: $(this, ai),
            state: this.state,
            fetchFn: o,
          };
        l(f),
          (m = this.options.behavior) == null || m.onFetch(f, this),
          ze(this, ds, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) &&
            $t(this, Hn, Ra).call(this, {
              type: 'fetch',
              meta: (y = f.fetchOptions) == null ? void 0 : y.meta,
            });
        const h = (v) => {
          var b, w, x, N;
          (fh(v) && v.silent) || $t(this, Hn, Ra).call(this, { type: 'error', error: v }),
            fh(v) ||
              ((w = (b = $(this, jn).config).onError) == null || w.call(b, v, this),
              (N = (x = $(this, jn).config).onSettled) == null ||
                N.call(x, this.state.data, v, this)),
            this.scheduleGc();
        };
        return (
          ze(
            this,
            Kt,
            s1({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: f.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (v) => {
                var b, w, x, N;
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
                (w = (b = $(this, jn).config).onSuccess) == null || w.call(b, v, this),
                  (N = (x = $(this, jn).config).onSettled) == null ||
                    N.call(x, v, this.state.error, this),
                  this.scheduleGc();
              },
              onError: h,
              onFail: (v, b) => {
                $t(this, Hn, Ra).call(this, { type: 'failed', failureCount: v, error: b });
              },
              onPause: () => {
                $t(this, Hn, Ra).call(this, { type: 'pause' });
              },
              onContinue: () => {
                $t(this, Hn, Ra).call(this, { type: 'continue' });
              },
              retry: f.options.retry,
              retryDelay: f.options.retryDelay,
              networkMode: f.options.networkMode,
              canRun: () => !0,
            })
          ),
          $(this, Kt).start()
        );
      }
    }),
    (fs = new WeakMap()),
    (ds = new WeakMap()),
    (jn = new WeakMap()),
    (ai = new WeakMap()),
    (Kt = new WeakMap()),
    (fu = new WeakMap()),
    (ri = new WeakMap()),
    (Hn = new WeakSet()),
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
            return { ...i, ...rD(i.data, this.options), fetchMeta: t.meta ?? null };
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
            return fh(l) && l.revert && $(this, ds)
              ? { ...$(this, ds), fetchStatus: 'idle' }
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
        nn.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            $(this, jn).notify({ query: this, type: 'updated', action: t });
        });
    }),
    h0);
function rD(n, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: r1(t.networkMode) ? 'fetching' : 'paused',
    ...(n === void 0 && { error: null, status: 'pending' }),
  };
}
function iD(n) {
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
var ra,
  m0,
  sD =
    ((m0 = class extends Cc {
      constructor(t = {}) {
        super();
        Ke(this, ra);
        (this.config = t), ze(this, ra, new Map());
      }
      build(t, r, i) {
        const l = r.queryKey,
          o = r.queryHash ?? Kh(l, r);
        let f = this.get(o);
        return (
          f ||
            ((f = new aD({
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
        $(this, ra).has(t.queryHash) ||
          ($(this, ra).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const r = $(this, ra).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && $(this, ra).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        nn.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return $(this, ra).get(t);
      }
      getAll() {
        return [...$(this, ra).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Zv(r, i));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((i) => Zv(t, i)) : r;
      }
      notify(t) {
        nn.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        nn.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        nn.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (ra = new WeakMap()),
    m0),
  ia,
  Jt,
  ii,
  sa,
  Sr,
  g0,
  lD =
    ((g0 = class extends l1 {
      constructor(t) {
        super();
        Ke(this, sa);
        Ke(this, ia);
        Ke(this, Jt);
        Ke(this, ii);
        (this.mutationId = t.mutationId),
          ze(this, Jt, t.mutationCache),
          ze(this, ia, []),
          (this.state = t.state || uD()),
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
        $(this, ia).includes(t) ||
          ($(this, ia).push(t),
          this.clearGcTimeout(),
          $(this, Jt).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        ze(
          this,
          ia,
          $(this, ia).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          $(this, Jt).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        $(this, ia).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : $(this, Jt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = $(this, ii)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, f, h, m, g, y, v, b, w, x, N, C, D, E, R, Y, q, K, W, ie;
        const r = () => {
          $t(this, sa, Sr).call(this, { type: 'continue' });
        };
        ze(
          this,
          ii,
          s1({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (te, _e) => {
              $t(this, sa, Sr).call(this, { type: 'failed', failureCount: te, error: _e });
            },
            onPause: () => {
              $t(this, sa, Sr).call(this, { type: 'pause' });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => $(this, Jt).canRun(this),
          })
        );
        const i = this.state.status === 'pending',
          l = !$(this, ii).canStart();
        try {
          if (i) r();
          else {
            $t(this, sa, Sr).call(this, { type: 'pending', variables: t, isPaused: l }),
              await ((f = (o = $(this, Jt).config).onMutate) == null ? void 0 : f.call(o, t, this));
            const _e = await ((m = (h = this.options).onMutate) == null ? void 0 : m.call(h, t));
            _e !== this.state.context &&
              $t(this, sa, Sr).call(this, {
                type: 'pending',
                context: _e,
                variables: t,
                isPaused: l,
              });
          }
          const te = await $(this, ii).start();
          return (
            await ((y = (g = $(this, Jt).config).onSuccess) == null
              ? void 0
              : y.call(g, te, t, this.state.context, this)),
            await ((b = (v = this.options).onSuccess) == null
              ? void 0
              : b.call(v, te, t, this.state.context)),
            await ((x = (w = $(this, Jt).config).onSettled) == null
              ? void 0
              : x.call(w, te, null, this.state.variables, this.state.context, this)),
            await ((C = (N = this.options).onSettled) == null
              ? void 0
              : C.call(N, te, null, t, this.state.context)),
            $t(this, sa, Sr).call(this, { type: 'success', data: te }),
            te
          );
        } catch (te) {
          try {
            throw (
              (await ((E = (D = $(this, Jt).config).onError) == null
                ? void 0
                : E.call(D, te, t, this.state.context, this)),
              await ((Y = (R = this.options).onError) == null
                ? void 0
                : Y.call(R, te, t, this.state.context)),
              await ((K = (q = $(this, Jt).config).onSettled) == null
                ? void 0
                : K.call(q, void 0, te, this.state.variables, this.state.context, this)),
              await ((ie = (W = this.options).onSettled) == null
                ? void 0
                : ie.call(W, void 0, te, t, this.state.context)),
              te)
            );
          } finally {
            $t(this, sa, Sr).call(this, { type: 'error', error: te });
          }
        } finally {
          $(this, Jt).runNext(this);
        }
      }
    }),
    (ia = new WeakMap()),
    (Jt = new WeakMap()),
    (ii = new WeakMap()),
    (sa = new WeakSet()),
    (Sr = function (t) {
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
        nn.batch(() => {
          $(this, ia).forEach((i) => {
            i.onMutationUpdate(t);
          }),
            $(this, Jt).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    g0);
function uD() {
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
  Vn,
  du,
  y0,
  oD =
    ((y0 = class extends Cc {
      constructor(t = {}) {
        super();
        Ke(this, za);
        Ke(this, Vn);
        Ke(this, du);
        (this.config = t), ze(this, za, new Set()), ze(this, Vn, new Map()), ze(this, du, 0);
      }
      build(t, r, i) {
        const l = new lD({
          mutationCache: this,
          mutationId: ++ko(this, du)._,
          options: t.defaultMutationOptions(r),
          state: i,
        });
        return this.add(l), l;
      }
      add(t) {
        $(this, za).add(t);
        const r = Zo(t);
        if (typeof r == 'string') {
          const i = $(this, Vn).get(r);
          i ? i.push(t) : $(this, Vn).set(r, [t]);
        }
        this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        if ($(this, za).delete(t)) {
          const r = Zo(t);
          if (typeof r == 'string') {
            const i = $(this, Vn).get(r);
            if (i)
              if (i.length > 1) {
                const l = i.indexOf(t);
                l !== -1 && i.splice(l, 1);
              } else i[0] === t && $(this, Vn).delete(r);
          }
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        const r = Zo(t);
        if (typeof r == 'string') {
          const i = $(this, Vn).get(r),
            l = i == null ? void 0 : i.find((o) => o.state.status === 'pending');
          return !l || l === t;
        } else return !0;
      }
      runNext(t) {
        var i;
        const r = Zo(t);
        if (typeof r == 'string') {
          const l =
            (i = $(this, Vn).get(r)) == null ? void 0 : i.find((o) => o !== t && o.state.isPaused);
          return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        nn.batch(() => {
          $(this, za).forEach((t) => {
            this.notify({ type: 'removed', mutation: t });
          }),
            $(this, za).clear(),
            $(this, Vn).clear();
        });
      }
      getAll() {
        return Array.from($(this, za));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Fv(r, i));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Fv(t, r));
      }
      notify(t) {
        nn.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return nn.batch(() => Promise.all(t.map((r) => r.continue().catch(Bn))));
      }
    }),
    (za = new WeakMap()),
    (Vn = new WeakMap()),
    (du = new WeakMap()),
    y0);
function Zo(n) {
  var t;
  return (t = n.options.scope) == null ? void 0 : t.id;
}
function $v(n) {
  return {
    onFetch: (t, r) => {
      var y, v, b, w, x;
      const i = t.options,
        l =
          (b =
            (v = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : v.fetchMore) ==
          null
            ? void 0
            : b.direction,
        o = ((w = t.state.data) == null ? void 0 : w.pages) || [],
        f = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        m = 0;
      const g = async () => {
        let N = !1;
        const C = (R) => {
            Object.defineProperty(R, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (N = !0)
                  : t.signal.addEventListener('abort', () => {
                      N = !0;
                    }),
                t.signal
              ),
            });
          },
          D = n1(t.options, t.fetchOptions),
          E = async (R, Y, q) => {
            if (N) return Promise.reject();
            if (Y == null && R.pages.length) return Promise.resolve(R);
            const K = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: Y,
              direction: q ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            C(K);
            const W = await D(K),
              { maxPages: ie } = t.options,
              te = q ? WN : KN;
            return { pages: te(R.pages, W, ie), pageParams: te(R.pageParams, Y, ie) };
          };
        if (l && o.length) {
          const R = l === 'backward',
            Y = R ? cD : Qv,
            q = { pages: o, pageParams: f },
            K = Y(i, q);
          h = await E(q, K, R);
        } else {
          const R = n ?? o.length;
          do {
            const Y = m === 0 ? (f[0] ?? i.initialPageParam) : Qv(i, h);
            if (m > 0 && Y == null) break;
            (h = await E(h, Y)), m++;
          } while (m < R);
        }
        return h;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var N, C;
            return (C = (N = t.options).persister) == null
              ? void 0
              : C.call(
                  N,
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
function Qv(n, { pages: t, pageParams: r }) {
  const i = t.length - 1;
  return t.length > 0 ? n.getNextPageParam(t[i], t, r[i], r) : void 0;
}
function cD(n, { pages: t, pageParams: r }) {
  var i;
  return t.length > 0
    ? (i = n.getPreviousPageParam) == null
      ? void 0
      : i.call(n, t[0], t, r[0], r)
    : void 0;
}
var vt,
  Er,
  Or,
  hs,
  ms,
  Tr,
  gs,
  ys,
  p0,
  fD =
    ((p0 = class {
      constructor(n = {}) {
        Ke(this, vt);
        Ke(this, Er);
        Ke(this, Or);
        Ke(this, hs);
        Ke(this, ms);
        Ke(this, Tr);
        Ke(this, gs);
        Ke(this, ys);
        ze(this, vt, n.queryCache || new sD()),
          ze(this, Er, n.mutationCache || new oD()),
          ze(this, Or, n.defaultOptions || {}),
          ze(this, hs, new Map()),
          ze(this, ms, new Map()),
          ze(this, Tr, 0);
      }
      mount() {
        ko(this, Tr)._++,
          $(this, Tr) === 1 &&
            (ze(
              this,
              gs,
              a1.subscribe(async (n) => {
                n && (await this.resumePausedMutations(), $(this, vt).onFocus());
              })
            ),
            ze(
              this,
              ys,
              dc.subscribe(async (n) => {
                n && (await this.resumePausedMutations(), $(this, vt).onOnline());
              })
            ));
      }
      unmount() {
        var n, t;
        ko(this, Tr)._--,
          $(this, Tr) === 0 &&
            ((n = $(this, gs)) == null || n.call(this),
            ze(this, gs, void 0),
            (t = $(this, ys)) == null || t.call(this),
            ze(this, ys, void 0));
      }
      isFetching(n) {
        return $(this, vt).findAll({ ...n, fetchStatus: 'fetching' }).length;
      }
      isMutating(n) {
        return $(this, Er).findAll({ ...n, status: 'pending' }).length;
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
          : (n.revalidateIfStale && r.isStaleByTime(Yv(t.staleTime, r)) && this.prefetchQuery(t),
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
          f = ZN(t, o);
        if (f !== void 0)
          return $(this, vt)
            .build(this, i)
            .setData(f, { ...r, manual: !0 });
      }
      setQueriesData(n, t, r) {
        return nn.batch(() =>
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
        nn.batch(() => {
          t.findAll(n).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(n, t) {
        const r = $(this, vt);
        return nn.batch(
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
          i = nn.batch(() =>
            $(this, vt)
              .findAll(n)
              .map((l) => l.cancel(r))
          );
        return Promise.all(i).then(Bn).catch(Bn);
      }
      invalidateQueries(n, t = {}) {
        return nn.batch(
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
          i = nn.batch(() =>
            $(this, vt)
              .findAll(n)
              .filter((l) => !l.isDisabled())
              .map((l) => {
                let o = l.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(Bn)),
                  l.state.fetchStatus === 'paused' ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(i).then(Bn);
      }
      fetchQuery(n) {
        const t = this.defaultQueryOptions(n);
        t.retry === void 0 && (t.retry = !1);
        const r = $(this, vt).build(this, t);
        return r.isStaleByTime(Yv(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
      }
      prefetchQuery(n) {
        return this.fetchQuery(n).then(Bn).catch(Bn);
      }
      fetchInfiniteQuery(n) {
        return (n.behavior = $v(n.pages)), this.fetchQuery(n);
      }
      prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(Bn).catch(Bn);
      }
      ensureInfiniteQueryData(n) {
        return (n.behavior = $v(n.pages)), this.ensureQueryData(n);
      }
      resumePausedMutations() {
        return dc.isOnline() ? $(this, Er).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return $(this, vt);
      }
      getMutationCache() {
        return $(this, Er);
      }
      getDefaultOptions() {
        return $(this, Or);
      }
      setDefaultOptions(n) {
        ze(this, Or, n);
      }
      setQueryDefaults(n, t) {
        $(this, hs).set(uu(n), { queryKey: n, defaultOptions: t });
      }
      getQueryDefaults(n) {
        const t = [...$(this, hs).values()],
          r = {};
        return (
          t.forEach((i) => {
            ou(n, i.queryKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(n, t) {
        $(this, ms).set(uu(n), { mutationKey: n, defaultOptions: t });
      }
      getMutationDefaults(n) {
        const t = [...$(this, ms).values()],
          r = {};
        return (
          t.forEach((i) => {
            ou(n, i.mutationKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(n) {
        if (n._defaulted) return n;
        const t = {
          ...$(this, Or).queries,
          ...this.getQueryDefaults(n.queryKey),
          ...n,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Kh(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === Wh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(n) {
        return n != null && n._defaulted
          ? n
          : {
              ...$(this, Or).mutations,
              ...((n == null ? void 0 : n.mutationKey) && this.getMutationDefaults(n.mutationKey)),
              ...n,
              _defaulted: !0,
            };
      }
      clear() {
        $(this, vt).clear(), $(this, Er).clear();
      }
    }),
    (vt = new WeakMap()),
    (Er = new WeakMap()),
    (Or = new WeakMap()),
    (hs = new WeakMap()),
    (ms = new WeakMap()),
    (Tr = new WeakMap()),
    (gs = new WeakMap()),
    (ys = new WeakMap()),
    p0),
  dD = k.createContext(void 0),
  hD = ({ client: n, children: t }) => (
    k.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    S.jsx(dD.Provider, { value: n, children: t })
  );
const mD = new fD(),
  ke = (n) => typeof n == 'string',
  jl = () => {
    let n, t;
    const r = new Promise((i, l) => {
      (n = i), (t = l);
    });
    return (r.resolve = n), (r.reject = t), r;
  },
  Kv = (n) => (n == null ? '' : '' + n),
  gD = (n, t, r) => {
    n.forEach((i) => {
      t[i] && (r[i] = t[i]);
    });
  },
  yD = /###/g,
  Wv = (n) => (n && n.indexOf('###') > -1 ? n.replace(yD, '.') : n),
  Xv = (n) => !n || ke(n),
  Yl = (n, t, r) => {
    const i = ke(t) ? t.split('.') : t;
    let l = 0;
    for (; l < i.length - 1; ) {
      if (Xv(n)) return {};
      const o = Wv(i[l]);
      !n[o] && r && (n[o] = new r()),
        Object.prototype.hasOwnProperty.call(n, o) ? (n = n[o]) : (n = {}),
        ++l;
    }
    return Xv(n) ? {} : { obj: n, k: Wv(i[l]) };
  },
  Iv = (n, t, r) => {
    const { obj: i, k: l } = Yl(n, t, Object);
    if (i !== void 0 || t.length === 1) {
      i[l] = r;
      return;
    }
    let o = t[t.length - 1],
      f = t.slice(0, t.length - 1),
      h = Yl(n, f, Object);
    for (; h.obj === void 0 && f.length; )
      (o = `${f[f.length - 1]}.${o}`),
        (f = f.slice(0, f.length - 1)),
        (h = Yl(n, f, Object)),
        h != null && h.obj && typeof h.obj[`${h.k}.${o}`] < 'u' && (h.obj = void 0);
    h.obj[`${h.k}.${o}`] = r;
  },
  pD = (n, t, r, i) => {
    const { obj: l, k: o } = Yl(n, t, Object);
    (l[o] = l[o] || []), l[o].push(r);
  },
  hc = (n, t) => {
    const { obj: r, k: i } = Yl(n, t);
    if (r && Object.prototype.hasOwnProperty.call(r, i)) return r[i];
  },
  vD = (n, t, r) => {
    const i = hc(n, r);
    return i !== void 0 ? i : hc(t, r);
  },
  u1 = (n, t, r) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in n
          ? ke(n[i]) || n[i] instanceof String || ke(t[i]) || t[i] instanceof String
            ? r && (n[i] = t[i])
            : u1(n[i], t[i], r)
          : (n[i] = t[i]));
    return n;
  },
  ns = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var bD = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const _D = (n) => (ke(n) ? n.replace(/[&<>"'\/]/g, (t) => bD[t]) : n);
class SD {
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
const xD = [' ', ',', '?', '!', ';'],
  wD = new SD(20),
  ED = (n, t, r) => {
    (t = t || ''), (r = r || '');
    const i = xD.filter((f) => t.indexOf(f) < 0 && r.indexOf(f) < 0);
    if (i.length === 0) return !0;
    const l = wD.getRegExp(`(${i.map((f) => (f === '?' ? '\\?' : f)).join('|')})`);
    let o = !l.test(n);
    if (!o) {
      const f = n.indexOf(r);
      f > 0 && !l.test(n.substring(0, f)) && (o = !0);
    }
    return o;
  },
  Nh = function (n, t) {
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
  mc = (n) => (n == null ? void 0 : n.replace('_', '-')),
  OD = {
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
class gc {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, r);
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = r.prefix || 'i18next:'),
      (this.logger = t || OD),
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
    return new gc(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new gc(this.logger, t);
  }
}
var oa = new gc();
class Nc {
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
class Jv extends Nc {
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
    const m = hc(this.data, h);
    return (
      !m && !r && !i && t.indexOf('.') > -1 && ((t = h[0]), (r = h[1]), (i = h.slice(2).join('.'))),
      m || !f || !ke(i)
        ? m
        : Nh((y = (g = this.data) == null ? void 0 : g[t]) == null ? void 0 : y[r], i, o)
    );
  }
  addResource(t, r, i, l) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const f = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let h = [t, r];
    i && (h = h.concat(f ? i.split(f) : i)),
      t.indexOf('.') > -1 && ((h = t.split('.')), (l = r), (r = h[1])),
      this.addNamespaces(r),
      Iv(this.data, h, l),
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
    let m = hc(this.data, h) || {};
    f.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      l ? u1(m, i, o) : (m = { ...m, ...i }),
      Iv(this.data, h, m),
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
var o1 = {
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
const e0 = {},
  t0 = (n) => !ke(n) && typeof n != 'boolean' && typeof n != 'number';
class yc extends Nc {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      gD(
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
      (this.logger = oa.create('translator'));
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
        !ED(t, i, l);
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
      x = (v == null ? void 0 : v.exactUsedKey) || f,
      N = ['[object Number]', '[object Function]', '[object RegExp]'],
      C = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      D = !this.i18nFormat || this.i18nFormat.handleAsObject,
      E = r.count !== void 0 && !ke(r.count),
      R = yc.hasDefaultValue(r),
      Y = E ? this.pluralResolver.getSuffix(g, r.count, r) : '',
      q = r.ordinal && E ? this.pluralResolver.getSuffix(g, r.count, { ordinal: !1 }) : '',
      K = E && !r.ordinal && r.count === 0,
      W =
        (K && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
        r[`defaultValue${Y}`] ||
        r[`defaultValue${q}`] ||
        r.defaultValue;
    let ie = b;
    D && !b && R && (ie = W);
    const te = t0(ie),
      _e = Object.prototype.toString.apply(ie);
    if (D && ie && te && N.indexOf(_e) < 0 && !(ke(C) && Array.isArray(ie))) {
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
          Se = be ? x : w;
        for (const Re in ie)
          if (Object.prototype.hasOwnProperty.call(ie, Re)) {
            const Me = `${Se}${o}${Re}`;
            R && !b
              ? (se[Re] = this.translate(Me, {
                  ...r,
                  defaultValue: t0(W) ? W[Re] : void 0,
                  joinArrays: !1,
                  ns: h,
                }))
              : (se[Re] = this.translate(Me, { ...r, joinArrays: !1, ns: h })),
              se[Re] === Me && (se[Re] = ie[Re]);
          }
        b = se;
      }
    } else if (D && ke(C) && Array.isArray(b))
      (b = b.join(C)), b && (b = this.extendTranslation(b, t, r, i));
    else {
      let be = !1,
        se = !1;
      !this.isValidLookup(b) && R && ((be = !0), (b = W)),
        this.isValidLookup(b) || ((se = !0), (b = f));
      const Re =
          (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && se
            ? void 0
            : b,
        Me = R && W !== b && this.options.updateMissing;
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
        const me = (xe, T, P) => {
          var re;
          const le = R && P !== b ? P : Re;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(xe, m, T, le, Me, r)
            : (re = this.backendConnector) != null &&
              re.saveMissing &&
              this.backendConnector.saveMissing(xe, m, T, le, Me, r),
            this.emit('missingKey', xe, m, T, b);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && E
            ? V.forEach((xe) => {
                const T = this.pluralResolver.getSuffixes(xe, r);
                K &&
                  r[`defaultValue${this.options.pluralSeparator}zero`] &&
                  T.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  T.push(`${this.options.pluralSeparator}zero`),
                  T.forEach((P) => {
                    me([xe], f + P, r[`defaultValue${P}`] || W);
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
        const x = t.match(this.interpolator.nestingRegexp);
        b = x && x.length;
      }
      let w = i.replace && !ke(i.replace) ? i.replace : i;
      if (
        (this.options.interpolation.defaultVariables &&
          (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (t = this.interpolator.interpolate(t, w, i.lng || this.language || l.usedLng, i)),
        v)
      ) {
        const x = t.match(this.interpolator.nestingRegexp),
          N = x && x.length;
        b < N && (i.nest = !1);
      }
      !i.lng && l && l.res && (i.lng = this.language || l.usedLng),
        i.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (var x = arguments.length, N = new Array(x), C = 0; C < x; C++)
                N[C] = arguments[C];
              return (o == null ? void 0 : o[0]) === N[0] && !i.context
                ? (f.logger.warn(
                    `It seems you are nesting recursively key: ${N[0]} in key: ${r[0]}`
                  ),
                  null)
                : f.translate(...N, r);
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
        (t = o1.handle(
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
          x =
            r.context !== void 0 &&
            (ke(r.context) || typeof r.context == 'number') &&
            r.context !== '',
          N = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
        v.forEach((C) => {
          var D, E;
          this.isValidLookup(i) ||
            ((h = C),
            !e0[`${N[0]}-${C}`] &&
              (D = this.utils) != null &&
              D.hasLoadedNamespace &&
              !((E = this.utils) != null && E.hasLoadedNamespace(h)) &&
              ((e0[`${N[0]}-${C}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${N.join(', ')}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            N.forEach((R) => {
              var K;
              if (this.isValidLookup(i)) return;
              f = R;
              const Y = [y];
              if ((K = this.i18nFormat) != null && K.addLookupKeys)
                this.i18nFormat.addLookupKeys(Y, y, R, C, r);
              else {
                let W;
                b && (W = this.pluralResolver.getSuffix(R, r.count, r));
                const ie = `${this.options.pluralSeparator}zero`,
                  te = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (b &&
                    (Y.push(y + W),
                    r.ordinal &&
                      W.indexOf(te) === 0 &&
                      Y.push(y + W.replace(te, this.options.pluralSeparator)),
                    w && Y.push(y + ie)),
                  x)
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
                this.isValidLookup(i) || ((o = q), (i = this.getResource(R, C, q, r)));
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
class n0 {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = oa.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = mc(t)), !t || t.indexOf('-') < 0)) return null;
    const r = t.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = mc(t)), !t || t.indexOf('-') < 0)) return t;
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
const a0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  r0 = {
    select: (n) => (n === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class TD {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = r),
      (this.logger = oa.create('pluralResolver')),
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
    const i = mc(t === 'dev' ? 'en' : t),
      l = r.ordinal ? 'ordinal' : 'cardinal',
      o = JSON.stringify({ cleanedCode: i, type: l });
    if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
    let f;
    try {
      f = new Intl.PluralRules(i, { type: l });
    } catch {
      if (!Intl) return this.logger.error('No Intl support, please use an Intl polyfill!'), r0;
      if (!t.match(/-|_/)) return r0;
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
            .pluralCategories.sort((l, o) => a0[l] - a0[o])
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
const i0 = function (n, t, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = vD(n, t, r);
    return !o && l && ke(r) && ((o = Nh(n, r, i)), o === void 0 && (o = Nh(t, r, i))), o;
  },
  dh = (n) => n.replace(/\$/g, '$$$$');
class CD {
  constructor() {
    var r;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = oa.create('interpolator')),
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
      nestingSuffix: x,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: C,
      maxReplaces: D,
      alwaysFormat: E,
    } = t.interpolation;
    (this.escape = r !== void 0 ? r : _D),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = o ? ns(o) : f || '{{'),
      (this.suffix = h ? ns(h) : m || '}}'),
      (this.formatSeparator = g || ','),
      (this.unescapePrefix = y ? '' : v || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : y || ''),
      (this.nestingPrefix = b ? ns(b) : w || ns('$t(')),
      (this.nestingSuffix = x ? ns(x) : N || ns(')')),
      (this.nestingOptionsSeparator = C || ','),
      (this.maxReplaces = D || 1e3),
      (this.alwaysFormat = E !== void 0 ? E : !1),
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
      g = (x) => {
        if (x.indexOf(this.formatSeparator) < 0) {
          const E = i0(r, m, x, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(E, void 0, i, { ...l, ...r, interpolationkey: x })
            : E;
        }
        const N = x.split(this.formatSeparator),
          C = N.shift().trim(),
          D = N.join(this.formatSeparator).trim();
        return this.format(
          i0(r, m, C, this.options.keySeparator, this.options.ignoreJSONStructure),
          D,
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
        { regex: this.regexpUnescape, safeValue: (x) => dh(x) },
        { regex: this.regexp, safeValue: (x) => (this.escapeValue ? dh(this.escape(x)) : dh(x)) },
      ].forEach((x) => {
        for (h = 0; (o = x.regex.exec(t)); ) {
          const N = o[1].trim();
          if (((f = g(N)), f === void 0))
            if (typeof y == 'function') {
              const D = y(t, o, l);
              f = ke(D) ? D : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, N)) f = '';
            else if (v) {
              f = o[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${N} for interpolating ${t}`), (f = '');
          else !ke(f) && !this.useRawValueToEscape && (f = Kv(f));
          const C = x.safeValue(f);
          if (
            ((t = t.replace(o[0], C)),
            v
              ? ((x.regex.lastIndex += f.length), (x.regex.lastIndex -= o[0].length))
              : (x.regex.lastIndex = 0),
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
        x = b.match(/"/g);
      ((((w == null ? void 0 : w.length) ?? 0) % 2 === 0 && !x) || x.length % 2 !== 0) &&
        (b = b.replace(/'/g, '"'));
      try {
        (f = JSON.parse(b)), g && (f = { ...g, ...f });
      } catch (N) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${m}`, N),
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
      ke(o) || (o = Kv(o)),
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
const MD = (n) => {
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
  as = (n) => {
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
      return h || ((h = n(mc(i), l)), (t[f] = h)), h(r);
    };
  };
class ND {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = oa.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: as((r, i) => {
          const l = new Intl.NumberFormat(r, { ...i });
          return (o) => l.format(o);
        }),
        currency: as((r, i) => {
          const l = new Intl.NumberFormat(r, { ...i, style: 'currency' });
          return (o) => l.format(o);
        }),
        datetime: as((r, i) => {
          const l = new Intl.DateTimeFormat(r, { ...i });
          return (o) => l.format(o);
        }),
        relativetime: as((r, i) => {
          const l = new Intl.RelativeTimeFormat(r, { ...i });
          return (o) => l.format(o, i.range || 'day');
        }),
        list: as((r, i) => {
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
    this.formats[t.toLowerCase().trim()] = as(r);
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
      const { formatName: g, formatOptions: y } = MD(m);
      if (this.formats[g]) {
        let b = h;
        try {
          const w =
              ((v = l == null ? void 0 : l.formatParams) == null
                ? void 0
                : v[l.interpolationkey]) || {},
            x = w.locale || w.lng || l.locale || l.lng || i;
          b = this.formats[g](h, x, { ...y, ...l, ...w });
        } catch (w) {
          this.logger.warn(w);
        }
        return b;
      } else this.logger.warn(`there was no format function for ${g}`);
      return h;
    }, t);
  }
}
const DD = (n, t) => {
  n.pending[t] !== void 0 && (delete n.pending[t], n.pendingCount--);
};
class AD extends Nc {
  constructor(t, r, i) {
    var o, f;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = r),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = l),
      (this.logger = oa.create('backendConnector')),
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
      pD(m.loaded, [o], f),
        DD(m, t),
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
          x = this.backend.create.bind(this.backend);
        if (x.length < 6)
          try {
            let N;
            x.length === 5 ? (N = x(t, r, i, l, w)) : (N = x(t, r, i, l)),
              N && typeof N.then == 'function' ? N.then((C) => h(null, C)).catch(h) : h(null, N);
          } catch (N) {
            h(N);
          }
        else x(t, r, i, l, h, w);
      }
      !t || !t[0] || this.store.addResource(t[0], r, i, l);
    }
  }
}
const s0 = () => ({
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
  l0 = (n) => {
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
  Fo = () => {},
  kD = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((r) => {
      typeof n[r] == 'function' && (n[r] = n[r].bind(n));
    });
  };
class cu extends Nc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = l0(t)),
      (this.services = {}),
      (this.logger = oa),
      (this.modules = { external: [] }),
      kD(this),
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
    const l = s0();
    (this.options = { ...l, ...this.options, ...l0(r) }),
      (this.options.interpolation = { ...l.interpolation, ...this.options.interpolation }),
      r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator),
      r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
    const o = (y) => (y ? (typeof y == 'function' ? new y() : y) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? oa.init(o(this.modules.logger), this.options)
        : oa.init(null, this.options);
      let y;
      this.modules.formatter ? (y = this.modules.formatter) : (y = ND);
      const v = new n0(this.options);
      this.store = new Jv(this.options.resources, this.options);
      const b = this.services;
      (b.logger = oa),
        (b.resourceStore = this.store),
        (b.languageUtils = v),
        (b.pluralResolver = new TD(v, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        y &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === l.interpolation.format) &&
          ((b.formatter = o(y)),
          b.formatter.init(b, this.options),
          (this.options.interpolation.format = b.formatter.format.bind(b.formatter))),
        (b.interpolator = new CD(this.options)),
        (b.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (b.backendConnector = new AD(o(this.modules.backend), b.resourceStore, b, this.options)),
        b.backendConnector.on('*', function (w) {
          for (var x = arguments.length, N = new Array(x > 1 ? x - 1 : 0), C = 1; C < x; C++)
            N[C - 1] = arguments[C];
          t.emit(w, ...N);
        }),
        this.modules.languageDetector &&
          ((b.languageDetector = o(this.modules.languageDetector)),
          b.languageDetector.init &&
            b.languageDetector.init(b, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((b.i18nFormat = o(this.modules.i18nFormat)),
          b.i18nFormat.init && b.i18nFormat.init(this)),
        (this.translator = new yc(this.services, this.options)),
        this.translator.on('*', function (w) {
          for (var x = arguments.length, N = new Array(x > 1 ? x - 1 : 0), C = 1; C < x; C++)
            N[C - 1] = arguments[C];
          t.emit(w, ...N);
        }),
        this.modules.external.forEach((w) => {
          w.init && w.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = Fo),
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
    const m = jl(),
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
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fo;
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
    const l = jl();
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof r == 'function' && ((i = r), (r = void 0)),
      t || (t = this.languages),
      r || (r = this.options.ns),
      i || (i = Fo),
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
      t.type === 'postProcessor' && o1.addPostProcessor(t),
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
    const l = jl();
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
          ? (w = f.map((x) => `${m.keyPrefix}${b}${x}`))
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
    const i = jl();
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
    const i = jl();
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
      i = ((o = this.services) == null ? void 0 : o.languageUtils) || new n0(s0());
    return r.indexOf(i.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    return new cu(t, r);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fo;
    const i = t.forkResourceStore;
    i && delete t.forkResourceStore;
    const l = { ...this.options, ...t, isClone: !0 },
      o = new cu(l);
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
      (o.store = new Jv(h, l)), (o.services.resourceStore = o.store);
    }
    return (
      (o.translator = new yc(o.services, l)),
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
const Xt = cu.createInstance();
Xt.createInstance = cu.createInstance;
Xt.createInstance;
Xt.dir;
Xt.init;
Xt.loadResources;
Xt.reloadResources;
Xt.use;
Xt.changeLanguage;
Xt.getFixedT;
Xt.t;
Xt.exists;
Xt.setDefaultNamespace;
Xt.hasLoadedNamespace;
Xt.loadNamespaces;
Xt.loadLanguages;
const RD =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  jD = {
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
  zD = (n) => jD[n],
  UD = (n) => n.replace(RD, zD);
let u0 = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: UD,
};
const LD = (n = {}) => {
    u0 = { ...u0, ...n };
  },
  BD = {
    type: '3rdParty',
    init(n) {
      LD(n.options.react);
    },
  },
  HD = 'Welcome to React',
  VD = 'This is demo to show i18n. (aka translation from src/locales/en.json)',
  qD = { welcome: HD, description: VD },
  YD = 'Добро пожаловать в Реактик',
  ZD = 'Это дэмо для i18n. (то есть перевода из src/locales/ru.json)',
  FD = { welcome: YD, description: ZD };
Xt.use(BD).init({
  resources: { en: { translation: qD }, ru: { translation: FD } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: !1 },
});
function PD(n) {
  AS.createRoot(n).render(
    S.jsx(k.StrictMode, {
      children: S.jsx(hD, {
        client: mD,
        children: S.jsx(nN, { store: YN, children: S.jsx(Qx, { children: S.jsx(qM, {}) }) }),
      }),
    })
  );
}
const o0 = document.getElementById('root');
o0 && PD(o0);
