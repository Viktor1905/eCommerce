var Bp = (n) => {
  throw TypeError(n);
};
var Zd = (n, t, r) => t.has(n) || Bp('Cannot ' + r);
var $ = (n, t, r) => (Zd(n, t, 'read from private field'), r ? r.call(n) : t.get(n)),
  Ke = (n, t, r) =>
    t.has(n)
      ? Bp('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(n)
        : t.set(n, r),
  Re = (n, t, r, i) => (Zd(n, t, 'write to private field'), i ? i.call(n, r) : t.set(n, r), r),
  Gt = (n, t, r) => (Zd(n, t, 'access private method'), r);
var zo = (n, t, r, i) => ({
  set _(l) {
    Re(n, t, l, r);
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
        for (const d of o.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && i(d);
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
var Fd = { exports: {} },
  Cl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hp;
function xS() {
  if (Hp) return Cl;
  Hp = 1;
  var n = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.fragment');
  function r(i, l, o) {
    var d = null;
    if ((o !== void 0 && (d = '' + o), l.key !== void 0 && (d = '' + l.key), 'key' in l)) {
      o = {};
      for (var f in l) f !== 'key' && (o[f] = l[f]);
    } else o = l;
    return (l = o.ref), { $$typeof: n, type: i, key: d, ref: l !== void 0 ? l : null, props: o };
  }
  return (Cl.Fragment = t), (Cl.jsx = r), (Cl.jsxs = r), Cl;
}
var Vp;
function wS() {
  return Vp || ((Vp = 1), (Fd.exports = xS())), Fd.exports;
}
var S = wS(),
  Pd = { exports: {} },
  Ue = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yp;
function OS() {
  if (Yp) return Ue;
  Yp = 1;
  var n = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    o = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    f = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function _(E) {
    return E === null || typeof E != 'object'
      ? null
      : ((E = (v && E[v]) || E['@@iterator']), typeof E == 'function' ? E : null);
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
  function T(E, Z, re) {
    (this.props = E), (this.context = Z), (this.refs = N), (this.updater = re || w);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (E, Z) {
      if (typeof E != 'object' && typeof E != 'function' && E != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, E, Z, 'setState');
    }),
    (T.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
    });
  function A() {}
  A.prototype = T.prototype;
  function j(E, Z, re) {
    (this.props = E), (this.context = Z), (this.refs = N), (this.updater = re || w);
  }
  var R = (j.prototype = new A());
  (R.constructor = j), x(R, T.prototype), (R.isPureReactComponent = !0);
  var q = Array.isArray,
    M = { H: null, A: null, T: null, S: null, V: null },
    K = Object.prototype.hasOwnProperty;
  function W(E, Z, re, te, pe, ze) {
    return (
      (re = ze.ref), { $$typeof: n, type: E, key: Z, ref: re !== void 0 ? re : null, props: ze }
    );
  }
  function oe(E, Z) {
    return W(E.type, Z, void 0, void 0, void 0, E.props);
  }
  function X(E) {
    return typeof E == 'object' && E !== null && E.$$typeof === n;
  }
  function ye(E) {
    var Z = { '=': '=0', ':': '=2' };
    return (
      '$' +
      E.replace(/[=:]/g, function (re) {
        return Z[re];
      })
    );
  }
  var ke = /\/+/g;
  function de(E, Z) {
    return typeof E == 'object' && E !== null && E.key != null ? ye('' + E.key) : Z.toString(36);
  }
  function Se() {}
  function Ae(E) {
    switch (E.status) {
      case 'fulfilled':
        return E.value;
      case 'rejected':
        throw E.reason;
      default:
        switch (
          (typeof E.status == 'string'
            ? E.then(Se, Se)
            : ((E.status = 'pending'),
              E.then(
                function (Z) {
                  E.status === 'pending' && ((E.status = 'fulfilled'), (E.value = Z));
                },
                function (Z) {
                  E.status === 'pending' && ((E.status = 'rejected'), (E.reason = Z));
                }
              )),
          E.status)
        ) {
          case 'fulfilled':
            return E.value;
          case 'rejected':
            throw E.reason;
        }
    }
    throw E;
  }
  function He(E, Z, re, te, pe) {
    var ze = typeof E;
    (ze === 'undefined' || ze === 'boolean') && (E = null);
    var we = !1;
    if (E === null) we = !0;
    else
      switch (ze) {
        case 'bigint':
        case 'string':
        case 'number':
          we = !0;
          break;
        case 'object':
          switch (E.$$typeof) {
            case n:
            case t:
              we = !0;
              break;
            case y:
              return (we = E._init), He(we(E._payload), Z, re, te, pe);
          }
      }
    if (we)
      return (
        (pe = pe(E)),
        (we = te === '' ? '.' + de(E, 0) : te),
        q(pe)
          ? ((re = ''),
            we != null && (re = we.replace(ke, '$&/') + '/'),
            He(pe, Z, re, '', function (Bt) {
              return Bt;
            }))
          : pe != null &&
            (X(pe) &&
              (pe = oe(
                pe,
                re +
                  (pe.key == null || (E && E.key === pe.key)
                    ? ''
                    : ('' + pe.key).replace(ke, '$&/') + '/') +
                  we
              )),
            Z.push(pe)),
        1
      );
    we = 0;
    var Tt = te === '' ? '.' : te + ':';
    if (q(E))
      for (var Ie = 0; Ie < E.length; Ie++)
        (te = E[Ie]), (ze = Tt + de(te, Ie)), (we += He(te, Z, re, ze, pe));
    else if (((Ie = _(E)), typeof Ie == 'function'))
      for (E = Ie.call(E), Ie = 0; !(te = E.next()).done; )
        (te = te.value), (ze = Tt + de(te, Ie++)), (we += He(te, Z, re, ze, pe));
    else if (ze === 'object') {
      if (typeof E.then == 'function') return He(Ae(E), Z, re, te, pe);
      throw (
        ((Z = String(E)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Z === '[object Object]' ? 'object with keys {' + Object.keys(E).join(', ') + '}' : Z) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return we;
  }
  function V(E, Z, re) {
    if (E == null) return E;
    var te = [],
      pe = 0;
    return (
      He(E, te, '', '', function (ze) {
        return Z.call(re, ze, pe++);
      }),
      te
    );
  }
  function J(E) {
    if (E._status === -1) {
      var Z = E._result;
      (Z = Z()),
        Z.then(
          function (re) {
            (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = re));
          },
          function (re) {
            (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = re));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = Z));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ce =
    typeof reportError == 'function'
      ? reportError
      : function (E) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var Z = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == 'object' && E !== null && typeof E.message == 'string'
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(Z)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', E);
            return;
          }
          console.error(E);
        };
  function xe() {}
  return (
    (Ue.Children = {
      map: V,
      forEach: function (E, Z, re) {
        V(
          E,
          function () {
            Z.apply(this, arguments);
          },
          re
        );
      },
      count: function (E) {
        var Z = 0;
        return (
          V(E, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (E) {
        return (
          V(E, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (E) {
        if (!X(E))
          throw Error('React.Children.only expected to receive a single React element child.');
        return E;
      },
    }),
    (Ue.Component = T),
    (Ue.Fragment = r),
    (Ue.Profiler = l),
    (Ue.PureComponent = j),
    (Ue.StrictMode = i),
    (Ue.Suspense = m),
    (Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M),
    (Ue.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return M.H.useMemoCache(E);
      },
    }),
    (Ue.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Ue.cloneElement = function (E, Z, re) {
      if (E == null) throw Error('The argument must be a React element, but you passed ' + E + '.');
      var te = x({}, E.props),
        pe = E.key,
        ze = void 0;
      if (Z != null)
        for (we in (Z.ref !== void 0 && (ze = void 0), Z.key !== void 0 && (pe = '' + Z.key), Z))
          !K.call(Z, we) ||
            we === 'key' ||
            we === '__self' ||
            we === '__source' ||
            (we === 'ref' && Z.ref === void 0) ||
            (te[we] = Z[we]);
      var we = arguments.length - 2;
      if (we === 1) te.children = re;
      else if (1 < we) {
        for (var Tt = Array(we), Ie = 0; Ie < we; Ie++) Tt[Ie] = arguments[Ie + 2];
        te.children = Tt;
      }
      return W(E.type, pe, void 0, void 0, ze, te);
    }),
    (Ue.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: o, _context: E }),
        E
      );
    }),
    (Ue.createElement = function (E, Z, re) {
      var te,
        pe = {},
        ze = null;
      if (Z != null)
        for (te in (Z.key !== void 0 && (ze = '' + Z.key), Z))
          K.call(Z, te) && te !== 'key' && te !== '__self' && te !== '__source' && (pe[te] = Z[te]);
      var we = arguments.length - 2;
      if (we === 1) pe.children = re;
      else if (1 < we) {
        for (var Tt = Array(we), Ie = 0; Ie < we; Ie++) Tt[Ie] = arguments[Ie + 2];
        pe.children = Tt;
      }
      if (E && E.defaultProps)
        for (te in ((we = E.defaultProps), we)) pe[te] === void 0 && (pe[te] = we[te]);
      return W(E, ze, void 0, void 0, null, pe);
    }),
    (Ue.createRef = function () {
      return { current: null };
    }),
    (Ue.forwardRef = function (E) {
      return { $$typeof: f, render: E };
    }),
    (Ue.isValidElement = X),
    (Ue.lazy = function (E) {
      return { $$typeof: y, _payload: { _status: -1, _result: E }, _init: J };
    }),
    (Ue.memo = function (E, Z) {
      return { $$typeof: g, type: E, compare: Z === void 0 ? null : Z };
    }),
    (Ue.startTransition = function (E) {
      var Z = M.T,
        re = {};
      M.T = re;
      try {
        var te = E(),
          pe = M.S;
        pe !== null && pe(re, te),
          typeof te == 'object' && te !== null && typeof te.then == 'function' && te.then(xe, ce);
      } catch (ze) {
        ce(ze);
      } finally {
        M.T = Z;
      }
    }),
    (Ue.unstable_useCacheRefresh = function () {
      return M.H.useCacheRefresh();
    }),
    (Ue.use = function (E) {
      return M.H.use(E);
    }),
    (Ue.useActionState = function (E, Z, re) {
      return M.H.useActionState(E, Z, re);
    }),
    (Ue.useCallback = function (E, Z) {
      return M.H.useCallback(E, Z);
    }),
    (Ue.useContext = function (E) {
      return M.H.useContext(E);
    }),
    (Ue.useDebugValue = function () {}),
    (Ue.useDeferredValue = function (E, Z) {
      return M.H.useDeferredValue(E, Z);
    }),
    (Ue.useEffect = function (E, Z, re) {
      var te = M.H;
      if (typeof re == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return te.useEffect(E, Z);
    }),
    (Ue.useId = function () {
      return M.H.useId();
    }),
    (Ue.useImperativeHandle = function (E, Z, re) {
      return M.H.useImperativeHandle(E, Z, re);
    }),
    (Ue.useInsertionEffect = function (E, Z) {
      return M.H.useInsertionEffect(E, Z);
    }),
    (Ue.useLayoutEffect = function (E, Z) {
      return M.H.useLayoutEffect(E, Z);
    }),
    (Ue.useMemo = function (E, Z) {
      return M.H.useMemo(E, Z);
    }),
    (Ue.useOptimistic = function (E, Z) {
      return M.H.useOptimistic(E, Z);
    }),
    (Ue.useReducer = function (E, Z, re) {
      return M.H.useReducer(E, Z, re);
    }),
    (Ue.useRef = function (E) {
      return M.H.useRef(E);
    }),
    (Ue.useState = function (E) {
      return M.H.useState(E);
    }),
    (Ue.useSyncExternalStore = function (E, Z, re) {
      return M.H.useSyncExternalStore(E, Z, re);
    }),
    (Ue.useTransition = function () {
      return M.H.useTransition();
    }),
    (Ue.version = '19.1.0'),
    Ue
  );
}
var qp;
function _c() {
  return qp || ((qp = 1), (Pd.exports = OS())), Pd.exports;
}
var k = _c();
const I = SS(k);
var Gd = { exports: {} },
  Tl = {},
  $d = { exports: {} },
  Qd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zp;
function ES() {
  return (
    Zp ||
      ((Zp = 1),
      (function (n) {
        function t(V, J) {
          var ce = V.length;
          V.push(J);
          e: for (; 0 < ce; ) {
            var xe = (ce - 1) >>> 1,
              E = V[xe];
            if (0 < l(E, J)) (V[xe] = J), (V[ce] = E), (ce = xe);
            else break e;
          }
        }
        function r(V) {
          return V.length === 0 ? null : V[0];
        }
        function i(V) {
          if (V.length === 0) return null;
          var J = V[0],
            ce = V.pop();
          if (ce !== J) {
            V[0] = ce;
            e: for (var xe = 0, E = V.length, Z = E >>> 1; xe < Z; ) {
              var re = 2 * (xe + 1) - 1,
                te = V[re],
                pe = re + 1,
                ze = V[pe];
              if (0 > l(te, ce))
                pe < E && 0 > l(ze, te)
                  ? ((V[xe] = ze), (V[pe] = ce), (xe = pe))
                  : ((V[xe] = te), (V[re] = ce), (xe = re));
              else if (pe < E && 0 > l(ze, ce)) (V[xe] = ze), (V[pe] = ce), (xe = pe);
              else break e;
            }
          }
          return J;
        }
        function l(V, J) {
          var ce = V.sortIndex - J.sortIndex;
          return ce !== 0 ? ce : V.id - J.id;
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
          var d = Date,
            f = d.now();
          n.unstable_now = function () {
            return d.now() - f;
          };
        }
        var m = [],
          g = [],
          y = 1,
          v = null,
          _ = 3,
          w = !1,
          x = !1,
          N = !1,
          T = !1,
          A = typeof setTimeout == 'function' ? setTimeout : null,
          j = typeof clearTimeout == 'function' ? clearTimeout : null,
          R = typeof setImmediate < 'u' ? setImmediate : null;
        function q(V) {
          for (var J = r(g); J !== null; ) {
            if (J.callback === null) i(g);
            else if (J.startTime <= V) i(g), (J.sortIndex = J.expirationTime), t(m, J);
            else break;
            J = r(g);
          }
        }
        function M(V) {
          if (((N = !1), q(V), !x))
            if (r(m) !== null) (x = !0), K || ((K = !0), de());
            else {
              var J = r(g);
              J !== null && He(M, J.startTime - V);
            }
        }
        var K = !1,
          W = -1,
          oe = 5,
          X = -1;
        function ye() {
          return T ? !0 : !(n.unstable_now() - X < oe);
        }
        function ke() {
          if (((T = !1), K)) {
            var V = n.unstable_now();
            X = V;
            var J = !0;
            try {
              e: {
                (x = !1), N && ((N = !1), j(W), (W = -1)), (w = !0);
                var ce = _;
                try {
                  t: {
                    for (q(V), v = r(m); v !== null && !(v.expirationTime > V && ye()); ) {
                      var xe = v.callback;
                      if (typeof xe == 'function') {
                        (v.callback = null), (_ = v.priorityLevel);
                        var E = xe(v.expirationTime <= V);
                        if (((V = n.unstable_now()), typeof E == 'function')) {
                          (v.callback = E), q(V), (J = !0);
                          break t;
                        }
                        v === r(m) && i(m), q(V);
                      } else i(m);
                      v = r(m);
                    }
                    if (v !== null) J = !0;
                    else {
                      var Z = r(g);
                      Z !== null && He(M, Z.startTime - V), (J = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (_ = ce), (w = !1);
                }
                J = void 0;
              }
            } finally {
              J ? de() : (K = !1);
            }
          }
        }
        var de;
        if (typeof R == 'function')
          de = function () {
            R(ke);
          };
        else if (typeof MessageChannel < 'u') {
          var Se = new MessageChannel(),
            Ae = Se.port2;
          (Se.port1.onmessage = ke),
            (de = function () {
              Ae.postMessage(null);
            });
        } else
          de = function () {
            A(ke, 0);
          };
        function He(V, J) {
          W = A(function () {
            V(n.unstable_now());
          }, J);
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
              : (oe = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (n.unstable_next = function (V) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = _;
            }
            var ce = _;
            _ = J;
            try {
              return V();
            } finally {
              _ = ce;
            }
          }),
          (n.unstable_requestPaint = function () {
            T = !0;
          }),
          (n.unstable_runWithPriority = function (V, J) {
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
            var ce = _;
            _ = V;
            try {
              return J();
            } finally {
              _ = ce;
            }
          }),
          (n.unstable_scheduleCallback = function (V, J, ce) {
            var xe = n.unstable_now();
            switch (
              (typeof ce == 'object' && ce !== null
                ? ((ce = ce.delay), (ce = typeof ce == 'number' && 0 < ce ? xe + ce : xe))
                : (ce = xe),
              V)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = ce + E),
              (V = {
                id: y++,
                callback: J,
                priorityLevel: V,
                startTime: ce,
                expirationTime: E,
                sortIndex: -1,
              }),
              ce > xe
                ? ((V.sortIndex = ce),
                  t(g, V),
                  r(m) === null && V === r(g) && (N ? (j(W), (W = -1)) : (N = !0), He(M, ce - xe)))
                : ((V.sortIndex = E), t(m, V), x || w || ((x = !0), K || ((K = !0), de()))),
              V
            );
          }),
          (n.unstable_shouldYield = ye),
          (n.unstable_wrapCallback = function (V) {
            var J = _;
            return function () {
              var ce = _;
              _ = J;
              try {
                return V.apply(this, arguments);
              } finally {
                _ = ce;
              }
            };
          });
      })(Qd)),
    Qd
  );
}
var Fp;
function CS() {
  return Fp || ((Fp = 1), ($d.exports = ES())), $d.exports;
}
var Kd = { exports: {} },
  $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp;
function TS() {
  if (Pp) return $t;
  Pp = 1;
  var n = _c();
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
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(m, g) {
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
      var g = d.T,
        y = i.p;
      try {
        if (((d.T = null), (i.p = 2), m)) return m();
      } finally {
        (d.T = g), (i.p = y), i.d.f();
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
          v = f(y, g.crossOrigin),
          _ = typeof g.integrity == 'string' ? g.integrity : void 0,
          w = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        y === 'style'
          ? i.d.S(m, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: w,
            })
          : y === 'script' &&
            i.d.X(m, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: w,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (m, g) {
      if (typeof m == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var y = f(g.as, g.crossOrigin);
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
          v = f(y, g.crossOrigin);
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
          var y = f(g.as, g.crossOrigin);
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
      return d.H.useFormState(m, g, y);
    }),
    ($t.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    ($t.version = '19.1.0'),
    $t
  );
}
var Gp;
function MS() {
  if (Gp) return Kd.exports;
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
  return n(), (Kd.exports = TS()), Kd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p;
function NS() {
  if ($p) return Tl;
  $p = 1;
  var n = CS(),
    t = _c(),
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
  function d(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if ((a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)), a !== null))
        return a.dehydrated;
    }
    return null;
  }
  function f(e) {
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
      var h = c.alternate;
      if (h === null) {
        if (((u = c.return), u !== null)) {
          s = u;
          continue;
        }
        break;
      }
      if (c.child === h.child) {
        for (h = c.child; h; ) {
          if (h === s) return f(c), e;
          if (h === u) return f(c), a;
          h = h.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== u.return) (s = c), (u = h);
      else {
        for (var p = !1, b = c.child; b; ) {
          if (b === s) {
            (p = !0), (s = c), (u = h);
            break;
          }
          if (b === u) {
            (p = !0), (u = c), (s = h);
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = h.child; b; ) {
            if (b === s) {
              (p = !0), (s = h), (u = c);
              break;
            }
            if (b === u) {
              (p = !0), (u = h), (s = c);
              break;
            }
            b = b.sibling;
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
    _ = Symbol.for('react.transitional.element'),
    w = Symbol.for('react.portal'),
    x = Symbol.for('react.fragment'),
    N = Symbol.for('react.strict_mode'),
    T = Symbol.for('react.profiler'),
    A = Symbol.for('react.provider'),
    j = Symbol.for('react.consumer'),
    R = Symbol.for('react.context'),
    q = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    K = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    oe = Symbol.for('react.lazy'),
    X = Symbol.for('react.activity'),
    ye = Symbol.for('react.memo_cache_sentinel'),
    ke = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ke && e[ke]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var Se = Symbol.for('react.client.reference');
  function Ae(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === Se ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case x:
        return 'Fragment';
      case T:
        return 'Profiler';
      case N:
        return 'StrictMode';
      case M:
        return 'Suspense';
      case K:
        return 'SuspenseList';
      case X:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case w:
          return 'Portal';
        case R:
          return (e.displayName || 'Context') + '.Provider';
        case j:
          return (e._context.displayName || 'Context') + '.Consumer';
        case q:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case W:
          return (a = e.displayName || null), a !== null ? a : Ae(e.type) || 'Memo';
        case oe:
          (a = e._payload), (e = e._init);
          try {
            return Ae(e(a));
          } catch {}
      }
    return null;
  }
  var He = Array.isArray,
    V = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ce = { pending: !1, data: null, method: null, action: null },
    xe = [],
    E = -1;
  function Z(e) {
    return { current: e };
  }
  function re(e) {
    0 > E || ((e.current = xe[E]), (xe[E] = null), E--);
  }
  function te(e, a) {
    E++, (xe[E] = e.current), (e.current = a);
  }
  var pe = Z(null),
    ze = Z(null),
    we = Z(null),
    Tt = Z(null);
  function Ie(e, a) {
    switch ((te(we, a), te(ze, e), te(pe, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? dp(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI))) (a = dp(a)), (e = hp(a, e));
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
    re(pe), te(pe, e);
  }
  function Bt() {
    re(pe), re(ze), re(we);
  }
  function Ia(e) {
    e.memoizedState !== null && te(Tt, e);
    var a = pe.current,
      s = hp(a, e.type);
    a !== s && (te(ze, e), te(pe, s));
  }
  function Ja(e) {
    ze.current === e && (re(pe), re(ze)), Tt.current === e && (re(Tt), (Sl._currentValue = ce));
  }
  var er = Object.prototype.hasOwnProperty,
    Lr = n.unstable_scheduleCallback,
    Sa = n.unstable_cancelCallback,
    vi = n.unstable_shouldYield,
    Ds = n.unstable_requestPaint,
    rn = n.unstable_now,
    xu = n.unstable_getCurrentPriorityLevel,
    Br = n.unstable_ImmediatePriority,
    C = n.unstable_UserBlockingPriority,
    B = n.unstable_NormalPriority,
    F = n.unstable_LowPriority,
    se = n.unstable_IdlePriority,
    ie = n.log,
    ne = n.unstable_setDisableYieldValue,
    ge = null,
    De = null;
  function qe(e) {
    if ((typeof ie == 'function' && ne(e), De && typeof De.setStrictMode == 'function'))
      try {
        De.setStrictMode(ge, e);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : As,
    tr = Math.log,
    Cn = Math.LN2;
  function As(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((tr(e) / Cn) | 0)) | 0;
  }
  var ea = 256,
    ta = 4194304;
  function Ln(e) {
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
  function na(e, a, s) {
    var u = e.pendingLanes;
    if (u === 0) return 0;
    var c = 0,
      h = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var b = u & 134217727;
    return (
      b !== 0
        ? ((u = b & ~h),
          u !== 0
            ? (c = Ln(u))
            : ((p &= b), p !== 0 ? (c = Ln(p)) : s || ((s = b & ~e), s !== 0 && (c = Ln(s)))))
        : ((b = u & ~h),
          b !== 0
            ? (c = Ln(b))
            : p !== 0
              ? (c = Ln(p))
              : s || ((s = u & ~e), s !== 0 && (c = Ln(s)))),
      c === 0
        ? 0
        : a !== 0 &&
            a !== c &&
            (a & h) === 0 &&
            ((h = c & -c), (s = a & -a), h >= s || (h === 32 && (s & 4194048) !== 0))
          ? a
          : c
    );
  }
  function xa(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function Hr(e, a) {
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
  function Le() {
    var e = ea;
    return (ea <<= 1), (ea & 4194048) === 0 && (ea = 256), e;
  }
  function ot() {
    var e = ta;
    return (ta <<= 1), (ta & 62914560) === 0 && (ta = 4194304), e;
  }
  function Je(e) {
    for (var a = [], s = 0; 31 > s; s++) a.push(e);
    return a;
  }
  function sn(e, a) {
    (e.pendingLanes |= a),
      a !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function dn(e, a, s, u, c, h) {
    var p = e.pendingLanes;
    (e.pendingLanes = s),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= s),
      (e.entangledLanes &= s),
      (e.errorRecoveryDisabledLanes &= s),
      (e.shellSuspendCounter = 0);
    var b = e.entanglements,
      O = e.expirationTimes,
      L = e.hiddenUpdates;
    for (s = p & ~s; 0 < s; ) {
      var P = 31 - rt(s),
        Q = 1 << P;
      (b[P] = 0), (O[P] = -1);
      var H = L[P];
      if (H !== null)
        for (L[P] = null, P = 0; P < H.length; P++) {
          var Y = H[P];
          Y !== null && (Y.lane &= -536870913);
        }
      s &= ~Q;
    }
    u !== 0 && Vr(e, u, 0),
      h !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(p & ~a));
  }
  function Vr(e, a, s) {
    (e.pendingLanes |= a), (e.suspendedLanes &= ~a);
    var u = 31 - rt(a);
    (e.entangledLanes |= a), (e.entanglements[u] = e.entanglements[u] | 1073741824 | (s & 4194090));
  }
  function Mt(e, a) {
    var s = (e.entangledLanes |= a);
    for (e = e.entanglements; s; ) {
      var u = 31 - rt(s),
        c = 1 << u;
      (c & a) | (e[u] & a) && (e[u] |= a), (s &= ~c);
    }
  }
  function ln(e) {
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
  function $e(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function wu() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : kp(e.type));
  }
  function Rc(e, a) {
    var s = J.p;
    try {
      return (J.p = e), a();
    } finally {
      J.p = s;
    }
  }
  var aa = Math.random().toString(36).slice(2),
    Ot = '__reactFiber$' + aa,
    Rt = '__reactProps$' + aa,
    bi = '__reactContainer$' + aa,
    jc = '__reactEvents$' + aa,
    f_ = '__reactListeners$' + aa,
    d_ = '__reactHandles$' + aa,
    em = '__reactResources$' + aa,
    ks = '__reactMarker$' + aa;
  function zc(e) {
    delete e[Ot], delete e[Rt], delete e[jc], delete e[f_], delete e[d_];
  }
  function _i(e) {
    var a = e[Ot];
    if (a) return a;
    for (var s = e.parentNode; s; ) {
      if ((a = s[bi] || s[Ot])) {
        if (((s = a.alternate), a.child !== null || (s !== null && s.child !== null)))
          for (e = pp(e); e !== null; ) {
            if ((s = e[Ot])) return s;
            e = pp(e);
          }
        return a;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function Si(e) {
    if ((e = e[Ot] || e[bi])) {
      var a = e.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3) return e;
    }
    return null;
  }
  function Rs(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(i(33));
  }
  function xi(e) {
    var a = e[em];
    return a || (a = e[em] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), a;
  }
  function jt(e) {
    e[ks] = !0;
  }
  var tm = new Set(),
    nm = {};
  function Yr(e, a) {
    wi(e, a), wi(e + 'Capture', a);
  }
  function wi(e, a) {
    for (nm[e] = a, e = 0; e < a.length; e++) tm.add(a[e]);
  }
  var h_ = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    am = {},
    rm = {};
  function m_(e) {
    return er.call(rm, e)
      ? !0
      : er.call(am, e)
        ? !1
        : h_.test(e)
          ? (rm[e] = !0)
          : ((am[e] = !0), !1);
  }
  function Ou(e, a, s) {
    if (m_(a))
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
  function Eu(e, a, s) {
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
  function wa(e, a, s, u) {
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
  var Uc, im;
  function Oi(e) {
    if (Uc === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        (Uc = (a && a[1]) || ''),
          (im =
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
      Uc +
      e +
      im
    );
  }
  var Lc = !1;
  function Bc(e, a) {
    if (!e || Lc) return '';
    Lc = !0;
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
                } catch (Y) {
                  var H = Y;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (Y) {
                  H = Y;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                H = Y;
              }
              (Q = e()) && typeof Q.catch == 'function' && Q.catch(function () {});
            }
          } catch (Y) {
            if (Y && H && typeof Y.stack == 'string') return [Y.stack, H.stack];
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
      var h = u.DetermineComponentFrameRoot(),
        p = h[0],
        b = h[1];
      if (p && b) {
        var O = p.split(`
`),
          L = b.split(`
`);
        for (c = u = 0; u < O.length && !O[u].includes('DetermineComponentFrameRoot'); ) u++;
        for (; c < L.length && !L[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (u === O.length || c === L.length)
          for (u = O.length - 1, c = L.length - 1; 1 <= u && 0 <= c && O[u] !== L[c]; ) c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (O[u] !== L[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || O[u] !== L[c])) {
                  var P =
                    `
` + O[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      P.includes('<anonymous>') &&
                      (P = P.replace('<anonymous>', e.displayName)),
                    P
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (Lc = !1), (Error.prepareStackTrace = s);
    }
    return (s = e ? e.displayName || e.name : '') ? Oi(s) : '';
  }
  function g_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Oi(e.type);
      case 16:
        return Oi('Lazy');
      case 13:
        return Oi('Suspense');
      case 19:
        return Oi('SuspenseList');
      case 0:
      case 15:
        return Bc(e.type, !1);
      case 11:
        return Bc(e.type.render, !1);
      case 1:
        return Bc(e.type, !0);
      case 31:
        return Oi('Activity');
      default:
        return '';
    }
  }
  function sm(e) {
    try {
      var a = '';
      do (a += g_(e)), (e = e.return);
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
  function Tn(e) {
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
  function lm(e) {
    var a = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (a === 'checkbox' || a === 'radio');
  }
  function y_(e) {
    var a = lm(e) ? 'checked' : 'value',
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, a),
      u = '' + e[a];
    if (
      !e.hasOwnProperty(a) &&
      typeof s < 'u' &&
      typeof s.get == 'function' &&
      typeof s.set == 'function'
    ) {
      var c = s.get,
        h = s.set;
      return (
        Object.defineProperty(e, a, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (p) {
            (u = '' + p), h.call(this, p);
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
  function Cu(e) {
    e._valueTracker || (e._valueTracker = y_(e));
  }
  function um(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var s = a.getValue(),
      u = '';
    return (
      e && (u = lm(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = u),
      e !== s ? (a.setValue(e), !0) : !1
    );
  }
  function Tu(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var p_ = /[\n"\\]/g;
  function Mn(e) {
    return e.replace(p_, function (a) {
      return '\\' + a.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Hc(e, a, s, u, c, h, p, b) {
    (e.name = ''),
      p != null && typeof p != 'function' && typeof p != 'symbol' && typeof p != 'boolean'
        ? (e.type = p)
        : e.removeAttribute('type'),
      a != null
        ? p === 'number'
          ? ((a === 0 && e.value === '') || e.value != a) && (e.value = '' + Tn(a))
          : e.value !== '' + Tn(a) && (e.value = '' + Tn(a))
        : (p !== 'submit' && p !== 'reset') || e.removeAttribute('value'),
      a != null
        ? Vc(e, p, Tn(a))
        : s != null
          ? Vc(e, p, Tn(s))
          : u != null && e.removeAttribute('value'),
      c == null && h != null && (e.defaultChecked = !!h),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      b != null && typeof b != 'function' && typeof b != 'symbol' && typeof b != 'boolean'
        ? (e.name = '' + Tn(b))
        : e.removeAttribute('name');
  }
  function om(e, a, s, u, c, h, p, b) {
    if (
      (h != null &&
        typeof h != 'function' &&
        typeof h != 'symbol' &&
        typeof h != 'boolean' &&
        (e.type = h),
      a != null || s != null)
    ) {
      if (!((h !== 'submit' && h !== 'reset') || a != null)) return;
      (s = s != null ? '' + Tn(s) : ''),
        (a = a != null ? '' + Tn(a) : s),
        b || a === e.value || (e.value = a),
        (e.defaultValue = a);
    }
    (u = u ?? c),
      (u = typeof u != 'function' && typeof u != 'symbol' && !!u),
      (e.checked = b ? e.checked : !!u),
      (e.defaultChecked = !!u),
      p != null &&
        typeof p != 'function' &&
        typeof p != 'symbol' &&
        typeof p != 'boolean' &&
        (e.name = p);
  }
  function Vc(e, a, s) {
    (a === 'number' && Tu(e.ownerDocument) === e) ||
      e.defaultValue === '' + s ||
      (e.defaultValue = '' + s);
  }
  function Ei(e, a, s, u) {
    if (((e = e.options), a)) {
      a = {};
      for (var c = 0; c < s.length; c++) a['$' + s[c]] = !0;
      for (s = 0; s < e.length; s++)
        (c = a.hasOwnProperty('$' + e[s].value)),
          e[s].selected !== c && (e[s].selected = c),
          c && u && (e[s].defaultSelected = !0);
    } else {
      for (s = '' + Tn(s), a = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          (e[c].selected = !0), u && (e[c].defaultSelected = !0);
          return;
        }
        a !== null || e[c].disabled || (a = e[c]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function cm(e, a, s) {
    if (a != null && ((a = '' + Tn(a)), a !== e.value && (e.value = a), s == null)) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = s != null ? '' + Tn(s) : '';
  }
  function fm(e, a, s, u) {
    if (a == null) {
      if (u != null) {
        if (s != null) throw Error(i(92));
        if (He(u)) {
          if (1 < u.length) throw Error(i(93));
          u = u[0];
        }
        s = u;
      }
      s == null && (s = ''), (a = s);
    }
    (s = Tn(a)),
      (e.defaultValue = s),
      (u = e.textContent),
      u === s && u !== '' && u !== null && (e.value = u);
  }
  function Ci(e, a) {
    if (a) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var v_ = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function dm(e, a, s) {
    var u = a.indexOf('--') === 0;
    s == null || typeof s == 'boolean' || s === ''
      ? u
        ? e.setProperty(a, '')
        : a === 'float'
          ? (e.cssFloat = '')
          : (e[a] = '')
      : u
        ? e.setProperty(a, s)
        : typeof s != 'number' || s === 0 || v_.has(a)
          ? a === 'float'
            ? (e.cssFloat = s)
            : (e[a] = ('' + s).trim())
          : (e[a] = s + 'px');
  }
  function hm(e, a, s) {
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
      for (var c in a) (u = a[c]), a.hasOwnProperty(c) && s[c] !== u && dm(e, c, u);
    } else for (var h in a) a.hasOwnProperty(h) && dm(e, h, a[h]);
  }
  function Yc(e) {
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
  var b_ = new Map([
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
    __ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mu(e) {
    return __.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var qc = null;
  function Zc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ti = null,
    Mi = null;
  function mm(e) {
    var a = Si(e);
    if (a && (e = a.stateNode)) {
      var s = e[Rt] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case 'input':
          if (
            (Hc(
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
              s = s.querySelectorAll('input[name="' + Mn('' + a) + '"][type="radio"]'), a = 0;
              a < s.length;
              a++
            ) {
              var u = s[a];
              if (u !== e && u.form === e.form) {
                var c = u[Rt] || null;
                if (!c) throw Error(i(90));
                Hc(
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
            for (a = 0; a < s.length; a++) (u = s[a]), u.form === e.form && um(u);
          }
          break e;
        case 'textarea':
          cm(e, s.value, s.defaultValue);
          break e;
        case 'select':
          (a = s.value), a != null && Ei(e, !!s.multiple, a, !1);
      }
    }
  }
  var Fc = !1;
  function gm(e, a, s) {
    if (Fc) return e(a, s);
    Fc = !0;
    try {
      var u = e(a);
      return u;
    } finally {
      if (
        ((Fc = !1),
        (Ti !== null || Mi !== null) &&
          (mo(), Ti && ((a = Ti), (e = Mi), (Mi = Ti = null), mm(a), e)))
      )
        for (a = 0; a < e.length; a++) mm(e[a]);
    }
  }
  function js(e, a) {
    var s = e.stateNode;
    if (s === null) return null;
    var u = s[Rt] || null;
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
  var Oa = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Pc = !1;
  if (Oa)
    try {
      var zs = {};
      Object.defineProperty(zs, 'passive', {
        get: function () {
          Pc = !0;
        },
      }),
        window.addEventListener('test', zs, zs),
        window.removeEventListener('test', zs, zs);
    } catch {
      Pc = !1;
    }
  var nr = null,
    Gc = null,
    Nu = null;
  function ym() {
    if (Nu) return Nu;
    var e,
      a = Gc,
      s = a.length,
      u,
      c = 'value' in nr ? nr.value : nr.textContent,
      h = c.length;
    for (e = 0; e < s && a[e] === c[e]; e++);
    var p = s - e;
    for (u = 1; u <= p && a[s - u] === c[h - u]; u++);
    return (Nu = c.slice(e, 1 < u ? 1 - u : void 0));
  }
  function Du(e) {
    var a = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && a === 13 && (e = 13)) : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Au() {
    return !0;
  }
  function pm() {
    return !1;
  }
  function un(e) {
    function a(s, u, c, h, p) {
      (this._reactName = s),
        (this._targetInst = c),
        (this.type = u),
        (this.nativeEvent = h),
        (this.target = p),
        (this.currentTarget = null);
      for (var b in e) e.hasOwnProperty(b) && ((s = e[b]), (this[b] = s ? s(h) : h[b]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? Au
          : pm),
        (this.isPropagationStopped = pm),
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
            (this.isDefaultPrevented = Au));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != 'unknown' && (s.cancelBubble = !0),
            (this.isPropagationStopped = Au));
        },
        persist: function () {},
        isPersistent: Au,
      }),
      a
    );
  }
  var qr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ku = un(qr),
    Us = y({}, qr, { view: 0, detail: 0 }),
    S_ = un(Us),
    $c,
    Qc,
    Ls,
    Ru = y({}, Us, {
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
      getModifierState: Wc,
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
          : (e !== Ls &&
              (Ls && e.type === 'mousemove'
                ? (($c = e.screenX - Ls.screenX), (Qc = e.screenY - Ls.screenY))
                : (Qc = $c = 0),
              (Ls = e)),
            $c);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Qc;
      },
    }),
    vm = un(Ru),
    x_ = y({}, Ru, { dataTransfer: 0 }),
    w_ = un(x_),
    O_ = y({}, Us, { relatedTarget: 0 }),
    Kc = un(O_),
    E_ = y({}, qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    C_ = un(E_),
    T_ = y({}, qr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    M_ = un(T_),
    N_ = y({}, qr, { data: 0 }),
    bm = un(N_),
    D_ = {
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
    A_ = {
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
    k_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function R_(e) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(e) : (e = k_[e]) ? !!a[e] : !1;
  }
  function Wc() {
    return R_;
  }
  var j_ = y({}, Us, {
      key: function (e) {
        if (e.key) {
          var a = D_[e.key] || e.key;
          if (a !== 'Unidentified') return a;
        }
        return e.type === 'keypress'
          ? ((e = Du(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? A_[e.keyCode] || 'Unidentified'
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
      getModifierState: Wc,
      charCode: function (e) {
        return e.type === 'keypress' ? Du(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Du(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    z_ = un(j_),
    U_ = y({}, Ru, {
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
    _m = un(U_),
    L_ = y({}, Us, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wc,
    }),
    B_ = un(L_),
    H_ = y({}, qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V_ = un(H_),
    Y_ = y({}, Ru, {
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
    q_ = un(Y_),
    Z_ = y({}, qr, { newState: 0, oldState: 0 }),
    F_ = un(Z_),
    P_ = [9, 13, 27, 32],
    Xc = Oa && 'CompositionEvent' in window,
    Bs = null;
  Oa && 'documentMode' in document && (Bs = document.documentMode);
  var G_ = Oa && 'TextEvent' in window && !Bs,
    Sm = Oa && (!Xc || (Bs && 8 < Bs && 11 >= Bs)),
    xm = ' ',
    wm = !1;
  function Om(e, a) {
    switch (e) {
      case 'keyup':
        return P_.indexOf(a.keyCode) !== -1;
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
  function Em(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Ni = !1;
  function $_(e, a) {
    switch (e) {
      case 'compositionend':
        return Em(a);
      case 'keypress':
        return a.which !== 32 ? null : ((wm = !0), xm);
      case 'textInput':
        return (e = a.data), e === xm && wm ? null : e;
      default:
        return null;
    }
  }
  function Q_(e, a) {
    if (Ni)
      return e === 'compositionend' || (!Xc && Om(e, a))
        ? ((e = ym()), (Nu = Gc = nr = null), (Ni = !1), e)
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
        return Sm && a.locale !== 'ko' ? null : a.data;
      default:
        return null;
    }
  }
  var K_ = {
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
  function Cm(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === 'input' ? !!K_[e.type] : a === 'textarea';
  }
  function Tm(e, a, s, u) {
    Ti ? (Mi ? Mi.push(u) : (Mi = [u])) : (Ti = u),
      (a = _o(a, 'onChange')),
      0 < a.length &&
        ((s = new ku('onChange', 'change', null, s, u)), e.push({ event: s, listeners: a }));
  }
  var Hs = null,
    Vs = null;
  function W_(e) {
    lp(e, 0);
  }
  function ju(e) {
    var a = Rs(e);
    if (um(a)) return e;
  }
  function Mm(e, a) {
    if (e === 'change') return a;
  }
  var Nm = !1;
  if (Oa) {
    var Ic;
    if (Oa) {
      var Jc = 'oninput' in document;
      if (!Jc) {
        var Dm = document.createElement('div');
        Dm.setAttribute('oninput', 'return;'), (Jc = typeof Dm.oninput == 'function');
      }
      Ic = Jc;
    } else Ic = !1;
    Nm = Ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Am() {
    Hs && (Hs.detachEvent('onpropertychange', km), (Vs = Hs = null));
  }
  function km(e) {
    if (e.propertyName === 'value' && ju(Vs)) {
      var a = [];
      Tm(a, Vs, e, Zc(e)), gm(W_, a);
    }
  }
  function X_(e, a, s) {
    e === 'focusin'
      ? (Am(), (Hs = a), (Vs = s), Hs.attachEvent('onpropertychange', km))
      : e === 'focusout' && Am();
  }
  function I_(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ju(Vs);
  }
  function J_(e, a) {
    if (e === 'click') return ju(a);
  }
  function e1(e, a) {
    if (e === 'input' || e === 'change') return ju(a);
  }
  function t1(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var hn = typeof Object.is == 'function' ? Object.is : t1;
  function Ys(e, a) {
    if (hn(e, a)) return !0;
    if (typeof e != 'object' || e === null || typeof a != 'object' || a === null) return !1;
    var s = Object.keys(e),
      u = Object.keys(a);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var c = s[u];
      if (!er.call(a, c) || !hn(e[c], a[c])) return !1;
    }
    return !0;
  }
  function Rm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jm(e, a) {
    var s = Rm(e);
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
      s = Rm(s);
    }
  }
  function zm(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? zm(e, a.parentNode)
            : 'contains' in e
              ? e.contains(a)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function Um(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = Tu(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof a.contentWindow.location.href == 'string';
      } catch {
        s = !1;
      }
      if (s) e = a.contentWindow;
      else break;
      a = Tu(e.document);
    }
    return a;
  }
  function ef(e) {
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
  var n1 = Oa && 'documentMode' in document && 11 >= document.documentMode,
    Di = null,
    tf = null,
    qs = null,
    nf = !1;
  function Lm(e, a, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    nf ||
      Di == null ||
      Di !== Tu(u) ||
      ((u = Di),
      'selectionStart' in u && ef(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = ((u.ownerDocument && u.ownerDocument.defaultView) || window).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (qs && Ys(qs, u)) ||
        ((qs = u),
        (u = _o(tf, 'onSelect')),
        0 < u.length &&
          ((a = new ku('onSelect', 'select', null, a, s)),
          e.push({ event: a, listeners: u }),
          (a.target = Di))));
  }
  function Zr(e, a) {
    var s = {};
    return (
      (s[e.toLowerCase()] = a.toLowerCase()),
      (s['Webkit' + e] = 'webkit' + a),
      (s['Moz' + e] = 'moz' + a),
      s
    );
  }
  var Ai = {
      animationend: Zr('Animation', 'AnimationEnd'),
      animationiteration: Zr('Animation', 'AnimationIteration'),
      animationstart: Zr('Animation', 'AnimationStart'),
      transitionrun: Zr('Transition', 'TransitionRun'),
      transitionstart: Zr('Transition', 'TransitionStart'),
      transitioncancel: Zr('Transition', 'TransitionCancel'),
      transitionend: Zr('Transition', 'TransitionEnd'),
    },
    af = {},
    Bm = {};
  Oa &&
    ((Bm = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ai.animationend.animation,
      delete Ai.animationiteration.animation,
      delete Ai.animationstart.animation),
    'TransitionEvent' in window || delete Ai.transitionend.transition);
  function Fr(e) {
    if (af[e]) return af[e];
    if (!Ai[e]) return e;
    var a = Ai[e],
      s;
    for (s in a) if (a.hasOwnProperty(s) && s in Bm) return (af[e] = a[s]);
    return e;
  }
  var Hm = Fr('animationend'),
    Vm = Fr('animationiteration'),
    Ym = Fr('animationstart'),
    a1 = Fr('transitionrun'),
    r1 = Fr('transitionstart'),
    i1 = Fr('transitioncancel'),
    qm = Fr('transitionend'),
    Zm = new Map(),
    rf =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  rf.push('scrollEnd');
  function Bn(e, a) {
    Zm.set(e, a), Yr(a, [e]);
  }
  var Fm = new WeakMap();
  function Nn(e, a) {
    if (typeof e == 'object' && e !== null) {
      var s = Fm.get(e);
      return s !== void 0 ? s : ((a = { value: e, source: a, stack: sm(a) }), Fm.set(e, a), a);
    }
    return { value: e, source: a, stack: sm(a) };
  }
  var Dn = [],
    ki = 0,
    sf = 0;
  function zu() {
    for (var e = ki, a = (sf = ki = 0); a < e; ) {
      var s = Dn[a];
      Dn[a++] = null;
      var u = Dn[a];
      Dn[a++] = null;
      var c = Dn[a];
      Dn[a++] = null;
      var h = Dn[a];
      if (((Dn[a++] = null), u !== null && c !== null)) {
        var p = u.pending;
        p === null ? (c.next = c) : ((c.next = p.next), (p.next = c)), (u.pending = c);
      }
      h !== 0 && Pm(s, c, h);
    }
  }
  function Uu(e, a, s, u) {
    (Dn[ki++] = e),
      (Dn[ki++] = a),
      (Dn[ki++] = s),
      (Dn[ki++] = u),
      (sf |= u),
      (e.lanes |= u),
      (e = e.alternate),
      e !== null && (e.lanes |= u);
  }
  function lf(e, a, s, u) {
    return Uu(e, a, s, u), Lu(e);
  }
  function Ri(e, a) {
    return Uu(e, null, null, a), Lu(e);
  }
  function Pm(e, a, s) {
    e.lanes |= s;
    var u = e.alternate;
    u !== null && (u.lanes |= s);
    for (var c = !1, h = e.return; h !== null; )
      (h.childLanes |= s),
        (u = h.alternate),
        u !== null && (u.childLanes |= s),
        h.tag === 22 && ((e = h.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = h),
        (h = h.return);
    return e.tag === 3
      ? ((h = e.stateNode),
        c &&
          a !== null &&
          ((c = 31 - rt(s)),
          (e = h.hiddenUpdates),
          (u = e[c]),
          u === null ? (e[c] = [a]) : u.push(a),
          (a.lane = s | 536870912)),
        h)
      : null;
  }
  function Lu(e) {
    if (50 < hl) throw ((hl = 0), (hd = null), Error(i(185)));
    for (var a = e.return; a !== null; ) (e = a), (a = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ji = {};
  function s1(e, a, s, u) {
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
  function mn(e, a, s, u) {
    return new s1(e, a, s, u);
  }
  function uf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ea(e, a) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = mn(e.tag, a, e.key, e.mode)),
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
  function Gm(e, a) {
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
  function Bu(e, a, s, u, c, h) {
    var p = 0;
    if (((u = e), typeof e == 'function')) uf(e) && (p = 1);
    else if (typeof e == 'string')
      p = uS(e, s, pe.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case X:
          return (e = mn(31, s, a, c)), (e.elementType = X), (e.lanes = h), e;
        case x:
          return Pr(s.children, c, h, a);
        case N:
          (p = 8), (c |= 24);
          break;
        case T:
          return (e = mn(12, s, a, c | 2)), (e.elementType = T), (e.lanes = h), e;
        case M:
          return (e = mn(13, s, a, c)), (e.elementType = M), (e.lanes = h), e;
        case K:
          return (e = mn(19, s, a, c)), (e.elementType = K), (e.lanes = h), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case A:
              case R:
                p = 10;
                break e;
              case j:
                p = 9;
                break e;
              case q:
                p = 11;
                break e;
              case W:
                p = 14;
                break e;
              case oe:
                (p = 16), (u = null);
                break e;
            }
          (p = 29), (s = Error(i(130, e === null ? 'null' : typeof e, ''))), (u = null);
      }
    return (a = mn(p, s, a, c)), (a.elementType = e), (a.type = u), (a.lanes = h), a;
  }
  function Pr(e, a, s, u) {
    return (e = mn(7, e, u, a)), (e.lanes = s), e;
  }
  function of(e, a, s) {
    return (e = mn(6, e, null, a)), (e.lanes = s), e;
  }
  function cf(e, a, s) {
    return (
      (a = mn(4, e.children !== null ? e.children : [], e.key, a)),
      (a.lanes = s),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    );
  }
  var zi = [],
    Ui = 0,
    Hu = null,
    Vu = 0,
    An = [],
    kn = 0,
    Gr = null,
    Ca = 1,
    Ta = '';
  function $r(e, a) {
    (zi[Ui++] = Vu), (zi[Ui++] = Hu), (Hu = e), (Vu = a);
  }
  function $m(e, a, s) {
    (An[kn++] = Ca), (An[kn++] = Ta), (An[kn++] = Gr), (Gr = e);
    var u = Ca;
    e = Ta;
    var c = 32 - rt(u) - 1;
    (u &= ~(1 << c)), (s += 1);
    var h = 32 - rt(a) + c;
    if (30 < h) {
      var p = c - (c % 5);
      (h = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (c -= p),
        (Ca = (1 << (32 - rt(a) + c)) | (s << c) | u),
        (Ta = h + e);
    } else (Ca = (1 << h) | (s << c) | u), (Ta = e);
  }
  function ff(e) {
    e.return !== null && ($r(e, 1), $m(e, 1, 0));
  }
  function df(e) {
    for (; e === Hu; ) (Hu = zi[--Ui]), (zi[Ui] = null), (Vu = zi[--Ui]), (zi[Ui] = null);
    for (; e === Gr; )
      (Gr = An[--kn]),
        (An[kn] = null),
        (Ta = An[--kn]),
        (An[kn] = null),
        (Ca = An[--kn]),
        (An[kn] = null);
  }
  var It = null,
    pt = null,
    Xe = !1,
    Qr = null,
    ra = !1,
    hf = Error(i(519));
  function Kr(e) {
    var a = Error(i(418, ''));
    throw (Ps(Nn(a, e)), hf);
  }
  function Qm(e) {
    var a = e.stateNode,
      s = e.type,
      u = e.memoizedProps;
    switch (((a[Ot] = e), (a[Rt] = u), s)) {
      case 'dialog':
        Fe('cancel', a), Fe('close', a);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Fe('load', a);
        break;
      case 'video':
      case 'audio':
        for (s = 0; s < gl.length; s++) Fe(gl[s], a);
        break;
      case 'source':
        Fe('error', a);
        break;
      case 'img':
      case 'image':
      case 'link':
        Fe('error', a), Fe('load', a);
        break;
      case 'details':
        Fe('toggle', a);
        break;
      case 'input':
        Fe('invalid', a),
          om(a, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0),
          Cu(a);
        break;
      case 'select':
        Fe('invalid', a);
        break;
      case 'textarea':
        Fe('invalid', a), fm(a, u.value, u.defaultValue, u.children), Cu(a);
    }
    (s = u.children),
      (typeof s != 'string' && typeof s != 'number' && typeof s != 'bigint') ||
      a.textContent === '' + s ||
      u.suppressHydrationWarning === !0 ||
      fp(a.textContent, s)
        ? (u.popover != null && (Fe('beforetoggle', a), Fe('toggle', a)),
          u.onScroll != null && Fe('scroll', a),
          u.onScrollEnd != null && Fe('scrollend', a),
          u.onClick != null && (a.onclick = So),
          (a = !0))
        : (a = !1),
      a || Kr(e);
  }
  function Km(e) {
    for (It = e.return; It; )
      switch (It.tag) {
        case 5:
        case 13:
          ra = !1;
          return;
        case 27:
        case 3:
          ra = !0;
          return;
        default:
          It = It.return;
      }
  }
  function Zs(e) {
    if (e !== It) return !1;
    if (!Xe) return Km(e), (Xe = !0), !1;
    var a = e.tag,
      s;
    if (
      ((s = a !== 3 && a !== 27) &&
        ((s = a === 5) &&
          ((s = e.type), (s = !(s !== 'form' && s !== 'button') || Nd(e.type, e.memoizedProps))),
        (s = !s)),
      s && pt && Kr(e),
      Km(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, a = 0; e; ) {
          if (e.nodeType === 8)
            if (((s = e.data), s === '/$')) {
              if (a === 0) {
                pt = Vn(e.nextSibling);
                break e;
              }
              a--;
            } else (s !== '$' && s !== '$!' && s !== '$?') || a++;
          e = e.nextSibling;
        }
        pt = null;
      }
    } else
      a === 27
        ? ((a = pt), vr(e.type) ? ((e = Rd), (Rd = null), (pt = e)) : (pt = a))
        : (pt = It ? Vn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Fs() {
    (pt = It = null), (Xe = !1);
  }
  function Wm() {
    var e = Qr;
    return e !== null && (fn === null ? (fn = e) : fn.push.apply(fn, e), (Qr = null)), e;
  }
  function Ps(e) {
    Qr === null ? (Qr = [e]) : Qr.push(e);
  }
  var mf = Z(null),
    Wr = null,
    Ma = null;
  function ar(e, a, s) {
    te(mf, a._currentValue), (a._currentValue = s);
  }
  function Na(e) {
    (e._currentValue = mf.current), re(mf);
  }
  function gf(e, a, s) {
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
  function yf(e, a, s, u) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var h = c.dependencies;
      if (h !== null) {
        var p = c.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var b = h;
          h = c;
          for (var O = 0; O < a.length; O++)
            if (b.context === a[O]) {
              (h.lanes |= s),
                (b = h.alternate),
                b !== null && (b.lanes |= s),
                gf(h.return, s, e),
                u || (p = null);
              break e;
            }
          h = b.next;
        }
      } else if (c.tag === 18) {
        if (((p = c.return), p === null)) throw Error(i(341));
        (p.lanes |= s), (h = p.alternate), h !== null && (h.lanes |= s), gf(p, s, e), (p = null);
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
  function Gs(e, a, s, u) {
    e = null;
    for (var c = a, h = !1; c !== null; ) {
      if (!h) {
        if ((c.flags & 524288) !== 0) h = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var p = c.alternate;
        if (p === null) throw Error(i(387));
        if (((p = p.memoizedProps), p !== null)) {
          var b = c.type;
          hn(c.pendingProps.value, p.value) || (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (c === Tt.current) {
        if (((p = c.alternate), p === null)) throw Error(i(387));
        p.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Sl) : (e = [Sl]));
      }
      c = c.return;
    }
    e !== null && yf(a, e, s, u), (a.flags |= 262144);
  }
  function Yu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!hn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Xr(e) {
    (Wr = e), (Ma = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function Pt(e) {
    return Xm(Wr, e);
  }
  function qu(e, a) {
    return Wr === null && Xr(e), Xm(e, a);
  }
  function Xm(e, a) {
    var s = a._currentValue;
    if (((a = { context: a, memoizedValue: s, next: null }), Ma === null)) {
      if (e === null) throw Error(i(308));
      (Ma = a), (e.dependencies = { lanes: 0, firstContext: a }), (e.flags |= 524288);
    } else Ma = Ma.next = a;
    return s;
  }
  var l1 =
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
    u1 = n.unstable_scheduleCallback,
    o1 = n.unstable_NormalPriority,
    Nt = {
      $$typeof: R,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pf() {
    return { controller: new l1(), data: new Map(), refCount: 0 };
  }
  function $s(e) {
    e.refCount--,
      e.refCount === 0 &&
        u1(o1, function () {
          e.controller.abort();
        });
  }
  var Qs = null,
    vf = 0,
    Li = 0,
    Bi = null;
  function c1(e, a) {
    if (Qs === null) {
      var s = (Qs = []);
      (vf = 0),
        (Li = _d()),
        (Bi = {
          status: 'pending',
          value: void 0,
          then: function (u) {
            s.push(u);
          },
        });
    }
    return vf++, a.then(Im, Im), a;
  }
  function Im() {
    if (--vf === 0 && Qs !== null) {
      Bi !== null && (Bi.status = 'fulfilled');
      var e = Qs;
      (Qs = null), (Li = 0), (Bi = null);
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function f1(e, a) {
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
  var Jm = V.S;
  V.S = function (e, a) {
    typeof a == 'object' && a !== null && typeof a.then == 'function' && c1(e, a),
      Jm !== null && Jm(e, a);
  };
  var Ir = Z(null);
  function bf() {
    var e = Ir.current;
    return e !== null ? e : ft.pooledCache;
  }
  function Zu(e, a) {
    a === null ? te(Ir, Ir.current) : te(Ir, a.pool);
  }
  function eg() {
    var e = bf();
    return e === null ? null : { parent: Nt._currentValue, pool: e };
  }
  var Ks = Error(i(460)),
    tg = Error(i(474)),
    Fu = Error(i(542)),
    _f = { then: function () {} };
  function ng(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Pu() {}
  function ag(e, a, s) {
    switch (
      ((s = e[s]), s === void 0 ? e.push(a) : s !== a && (a.then(Pu, Pu), (a = s)), a.status)
    ) {
      case 'fulfilled':
        return a.value;
      case 'rejected':
        throw ((e = a.reason), ig(e), e);
      default:
        if (typeof a.status == 'string') a.then(Pu, Pu);
        else {
          if (((e = ft), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
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
            throw ((e = a.reason), ig(e), e);
        }
        throw ((Ws = a), Ks);
    }
  }
  var Ws = null;
  function rg() {
    if (Ws === null) throw Error(i(459));
    var e = Ws;
    return (Ws = null), e;
  }
  function ig(e) {
    if (e === Ks || e === Fu) throw Error(i(483));
  }
  var rr = !1;
  function Sf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xf(e, a) {
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
  function ir(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sr(e, a, s) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (tt & 2) !== 0)) {
      var c = u.pending;
      return (
        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
        (u.pending = a),
        (a = Lu(e)),
        Pm(e, null, s),
        a
      );
    }
    return Uu(e, u, a, s), Lu(e);
  }
  function Xs(e, a, s) {
    if (((a = a.updateQueue), a !== null && ((a = a.shared), (s & 4194048) !== 0))) {
      var u = a.lanes;
      (u &= e.pendingLanes), (s |= u), (a.lanes = s), Mt(e, s);
    }
  }
  function wf(e, a) {
    var s = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), s === u)) {
      var c = null,
        h = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var p = { lane: s.lane, tag: s.tag, payload: s.payload, callback: null, next: null };
          h === null ? (c = h = p) : (h = h.next = p), (s = s.next);
        } while (s !== null);
        h === null ? (c = h = a) : (h = h.next = a);
      } else c = h = a;
      (s = {
        baseState: u.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: h,
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
  var Of = !1;
  function Is() {
    if (Of) {
      var e = Bi;
      if (e !== null) throw e;
    }
  }
  function Js(e, a, s, u) {
    Of = !1;
    var c = e.updateQueue;
    rr = !1;
    var h = c.firstBaseUpdate,
      p = c.lastBaseUpdate,
      b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var O = b,
        L = O.next;
      (O.next = null), p === null ? (h = L) : (p.next = L), (p = O);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (b = P.lastBaseUpdate),
        b !== p && (b === null ? (P.firstBaseUpdate = L) : (b.next = L), (P.lastBaseUpdate = O)));
    }
    if (h !== null) {
      var Q = c.baseState;
      (p = 0), (P = L = O = null), (b = h);
      do {
        var H = b.lane & -536870913,
          Y = H !== b.lane;
        if (Y ? (Pe & H) === H : (u & H) === H) {
          H !== 0 && H === Li && (Of = !0),
            P !== null &&
              (P = P.next =
                { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null });
          e: {
            var Te = e,
              Oe = b;
            H = a;
            var lt = s;
            switch (Oe.tag) {
              case 1:
                if (((Te = Oe.payload), typeof Te == 'function')) {
                  Q = Te.call(lt, Q, H);
                  break e;
                }
                Q = Te;
                break e;
              case 3:
                Te.flags = (Te.flags & -65537) | 128;
              case 0:
                if (
                  ((Te = Oe.payload),
                  (H = typeof Te == 'function' ? Te.call(lt, Q, H) : Te),
                  H == null)
                )
                  break e;
                Q = y({}, Q, H);
                break e;
              case 2:
                rr = !0;
            }
          }
          (H = b.callback),
            H !== null &&
              ((e.flags |= 64),
              Y && (e.flags |= 8192),
              (Y = c.callbacks),
              Y === null ? (c.callbacks = [H]) : Y.push(H));
        } else
          (Y = { lane: H, tag: b.tag, payload: b.payload, callback: b.callback, next: null }),
            P === null ? ((L = P = Y), (O = Q)) : (P = P.next = Y),
            (p |= H);
        if (((b = b.next), b === null)) {
          if (((b = c.shared.pending), b === null)) break;
          (Y = b), (b = Y.next), (Y.next = null), (c.lastBaseUpdate = Y), (c.shared.pending = null);
        }
      } while (!0);
      P === null && (O = Q),
        (c.baseState = O),
        (c.firstBaseUpdate = L),
        (c.lastBaseUpdate = P),
        h === null && (c.shared.lanes = 0),
        (mr |= p),
        (e.lanes = p),
        (e.memoizedState = Q);
    }
  }
  function sg(e, a) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(a);
  }
  function lg(e, a) {
    var s = e.callbacks;
    if (s !== null) for (e.callbacks = null, e = 0; e < s.length; e++) sg(s[e], a);
  }
  var Hi = Z(null),
    Gu = Z(0);
  function ug(e, a) {
    (e = Ua), te(Gu, e), te(Hi, a), (Ua = e | a.baseLanes);
  }
  function Ef() {
    te(Gu, Ua), te(Hi, Hi.current);
  }
  function Cf() {
    (Ua = Gu.current), re(Hi), re(Gu);
  }
  var lr = 0,
    Ve = null,
    it = null,
    Et = null,
    $u = !1,
    Vi = !1,
    Jr = !1,
    Qu = 0,
    el = 0,
    Yi = null,
    d1 = 0;
  function _t() {
    throw Error(i(321));
  }
  function Tf(e, a) {
    if (a === null) return !1;
    for (var s = 0; s < a.length && s < e.length; s++) if (!hn(e[s], a[s])) return !1;
    return !0;
  }
  function Mf(e, a, s, u, c, h) {
    return (
      (lr = h),
      (Ve = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Pg : Gg),
      (Jr = !1),
      (h = s(u, c)),
      (Jr = !1),
      Vi && (h = cg(a, s, u, c)),
      og(e),
      h
    );
  }
  function og(e) {
    V.H = eo;
    var a = it !== null && it.next !== null;
    if (((lr = 0), (Et = it = Ve = null), ($u = !1), (el = 0), (Yi = null), a)) throw Error(i(300));
    e === null || zt || ((e = e.dependencies), e !== null && Yu(e) && (zt = !0));
  }
  function cg(e, a, s, u) {
    Ve = e;
    var c = 0;
    do {
      if ((Vi && (Yi = null), (el = 0), (Vi = !1), 25 <= c)) throw Error(i(301));
      if (((c += 1), (Et = it = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (V.H = b1), (h = a(s, u));
    } while (Vi);
    return h;
  }
  function h1() {
    var e = V.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == 'function' ? tl(a) : a),
      (e = e.useState()[0]),
      (it !== null ? it.memoizedState : null) !== e && (Ve.flags |= 1024),
      a
    );
  }
  function Nf() {
    var e = Qu !== 0;
    return (Qu = 0), e;
  }
  function Df(e, a, s) {
    (a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~s);
  }
  function Af(e) {
    if ($u) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        a !== null && (a.pending = null), (e = e.next);
      }
      $u = !1;
    }
    (lr = 0), (Et = it = Ve = null), (Vi = !1), (el = Qu = 0), (Yi = null);
  }
  function on() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? (Ve.memoizedState = Et = e) : (Et = Et.next = e), Et;
  }
  function Ct() {
    if (it === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = it.next;
    var a = Et === null ? Ve.memoizedState : Et.next;
    if (a !== null) (Et = a), (it = e);
    else {
      if (e === null) throw Ve.alternate === null ? Error(i(467)) : Error(i(310));
      (it = e),
        (e = {
          memoizedState: it.memoizedState,
          baseState: it.baseState,
          baseQueue: it.baseQueue,
          queue: it.queue,
          next: null,
        }),
        Et === null ? (Ve.memoizedState = Et = e) : (Et = Et.next = e);
    }
    return Et;
  }
  function kf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tl(e) {
    var a = el;
    return (
      (el += 1),
      Yi === null && (Yi = []),
      (e = ag(Yi, e, a)),
      (a = Ve),
      (Et === null ? a.memoizedState : Et.next) === null &&
        ((a = a.alternate), (V.H = a === null || a.memoizedState === null ? Pg : Gg)),
      e
    );
  }
  function Ku(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return tl(e);
      if (e.$$typeof === R) return Pt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Rf(e) {
    var a = null,
      s = Ve.updateQueue;
    if ((s !== null && (a = s.memoCache), a == null)) {
      var u = Ve.alternate;
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
      s === null && ((s = kf()), (Ve.updateQueue = s)),
      (s.memoCache = a),
      (s = a.data[a.index]),
      s === void 0)
    )
      for (s = a.data[a.index] = Array(e), u = 0; u < e; u++) s[u] = ye;
    return a.index++, s;
  }
  function Da(e, a) {
    return typeof a == 'function' ? a(e) : a;
  }
  function Wu(e) {
    var a = Ct();
    return jf(a, it, e);
  }
  function jf(e, a, s) {
    var u = e.queue;
    if (u === null) throw Error(i(311));
    u.lastRenderedReducer = s;
    var c = e.baseQueue,
      h = u.pending;
    if (h !== null) {
      if (c !== null) {
        var p = c.next;
        (c.next = h.next), (h.next = p);
      }
      (a.baseQueue = c = h), (u.pending = null);
    }
    if (((h = e.baseState), c === null)) e.memoizedState = h;
    else {
      a = c.next;
      var b = (p = null),
        O = null,
        L = a,
        P = !1;
      do {
        var Q = L.lane & -536870913;
        if (Q !== L.lane ? (Pe & Q) === Q : (lr & Q) === Q) {
          var H = L.revertLane;
          if (H === 0)
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              Q === Li && (P = !0);
          else if ((lr & H) === H) {
            (L = L.next), H === Li && (P = !0);
            continue;
          } else
            (Q = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              O === null ? ((b = O = Q), (p = h)) : (O = O.next = Q),
              (Ve.lanes |= H),
              (mr |= H);
          (Q = L.action), Jr && s(h, Q), (h = L.hasEagerState ? L.eagerState : s(h, Q));
        } else
          (H = {
            lane: Q,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            O === null ? ((b = O = H), (p = h)) : (O = O.next = H),
            (Ve.lanes |= Q),
            (mr |= Q);
        L = L.next;
      } while (L !== null && L !== a);
      if (
        (O === null ? (p = h) : (O.next = b),
        !hn(h, e.memoizedState) && ((zt = !0), P && ((s = Bi), s !== null)))
      )
        throw s;
      (e.memoizedState = h), (e.baseState = p), (e.baseQueue = O), (u.lastRenderedState = h);
    }
    return c === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function zf(e) {
    var a = Ct(),
      s = a.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var u = s.dispatch,
      c = s.pending,
      h = a.memoizedState;
    if (c !== null) {
      s.pending = null;
      var p = (c = c.next);
      do (h = e(h, p.action)), (p = p.next);
      while (p !== c);
      hn(h, a.memoizedState) || (zt = !0),
        (a.memoizedState = h),
        a.baseQueue === null && (a.baseState = h),
        (s.lastRenderedState = h);
    }
    return [h, u];
  }
  function fg(e, a, s) {
    var u = Ve,
      c = Ct(),
      h = Xe;
    if (h) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = a();
    var p = !hn((it || c).memoizedState, s);
    p && ((c.memoizedState = s), (zt = !0)), (c = c.queue);
    var b = mg.bind(null, u, c, e);
    if (
      (nl(2048, 8, b, [e]), c.getSnapshot !== a || p || (Et !== null && Et.memoizedState.tag & 1))
    ) {
      if (((u.flags |= 2048), qi(9, Xu(), hg.bind(null, u, c, s, a), null), ft === null))
        throw Error(i(349));
      h || (lr & 124) !== 0 || dg(u, a, s);
    }
    return s;
  }
  function dg(e, a, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: a, value: s }),
      (a = Ve.updateQueue),
      a === null
        ? ((a = kf()), (Ve.updateQueue = a), (a.stores = [e]))
        : ((s = a.stores), s === null ? (a.stores = [e]) : s.push(e));
  }
  function hg(e, a, s, u) {
    (a.value = s), (a.getSnapshot = u), gg(a) && yg(e);
  }
  function mg(e, a, s) {
    return s(function () {
      gg(a) && yg(e);
    });
  }
  function gg(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var s = a();
      return !hn(e, s);
    } catch {
      return !0;
    }
  }
  function yg(e) {
    var a = Ri(e, 2);
    a !== null && bn(a, e, 2);
  }
  function Uf(e) {
    var a = on();
    if (typeof e == 'function') {
      var s = e;
      if (((e = s()), Jr)) {
        qe(!0);
        try {
          s();
        } finally {
          qe(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = e),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Da,
        lastRenderedState: e,
      }),
      a
    );
  }
  function pg(e, a, s, u) {
    return (e.baseState = s), jf(e, it, typeof u == 'function' ? u : Da);
  }
  function m1(e, a, s, u, c) {
    if (Ju(e)) throw Error(i(485));
    if (((e = a.action), e !== null)) {
      var h = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          h.listeners.push(p);
        },
      };
      V.T !== null ? s(!0) : (h.isTransition = !1),
        u(h),
        (s = a.pending),
        s === null
          ? ((h.next = a.pending = h), vg(a, h))
          : ((h.next = s.next), (a.pending = s.next = h));
    }
  }
  function vg(e, a) {
    var s = a.action,
      u = a.payload,
      c = e.state;
    if (a.isTransition) {
      var h = V.T,
        p = {};
      V.T = p;
      try {
        var b = s(c, u),
          O = V.S;
        O !== null && O(p, b), bg(e, a, b);
      } catch (L) {
        Lf(e, a, L);
      } finally {
        V.T = h;
      }
    } else
      try {
        (h = s(c, u)), bg(e, a, h);
      } catch (L) {
        Lf(e, a, L);
      }
  }
  function bg(e, a, s) {
    s !== null && typeof s == 'object' && typeof s.then == 'function'
      ? s.then(
          function (u) {
            _g(e, a, u);
          },
          function (u) {
            return Lf(e, a, u);
          }
        )
      : _g(e, a, s);
  }
  function _g(e, a, s) {
    (a.status = 'fulfilled'),
      (a.value = s),
      Sg(a),
      (e.state = s),
      (a = e.pending),
      a !== null &&
        ((s = a.next), s === a ? (e.pending = null) : ((s = s.next), (a.next = s), vg(e, s)));
  }
  function Lf(e, a, s) {
    var u = e.pending;
    if (((e.pending = null), u !== null)) {
      u = u.next;
      do (a.status = 'rejected'), (a.reason = s), Sg(a), (a = a.next);
      while (a !== u);
    }
    e.action = null;
  }
  function Sg(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function xg(e, a) {
    return a;
  }
  function wg(e, a) {
    if (Xe) {
      var s = ft.formState;
      if (s !== null) {
        e: {
          var u = Ve;
          if (Xe) {
            if (pt) {
              t: {
                for (var c = pt, h = ra; c.nodeType !== 8; ) {
                  if (!h) {
                    c = null;
                    break t;
                  }
                  if (((c = Vn(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (h = c.data), (c = h === 'F!' || h === 'F' ? c : null);
              }
              if (c) {
                (pt = Vn(c.nextSibling)), (u = c.data === 'F!');
                break e;
              }
            }
            Kr(u);
          }
          u = !1;
        }
        u && (a = s[0]);
      }
    }
    return (
      (s = on()),
      (s.memoizedState = s.baseState = a),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xg,
        lastRenderedState: a,
      }),
      (s.queue = u),
      (s = qg.bind(null, Ve, u)),
      (u.dispatch = s),
      (u = Uf(!1)),
      (h = qf.bind(null, Ve, !1, u.queue)),
      (u = on()),
      (c = { state: a, dispatch: null, action: e, pending: null }),
      (u.queue = c),
      (s = m1.bind(null, Ve, c, h, s)),
      (c.dispatch = s),
      (u.memoizedState = e),
      [a, s, !1]
    );
  }
  function Og(e) {
    var a = Ct();
    return Eg(a, it, e);
  }
  function Eg(e, a, s) {
    if (
      ((a = jf(e, a, xg)[0]),
      (e = Wu(Da)[0]),
      typeof a == 'object' && a !== null && typeof a.then == 'function')
    )
      try {
        var u = tl(a);
      } catch (p) {
        throw p === Ks ? Fu : p;
      }
    else u = a;
    a = Ct();
    var c = a.queue,
      h = c.dispatch;
    return (
      s !== a.memoizedState && ((Ve.flags |= 2048), qi(9, Xu(), g1.bind(null, c, s), null)),
      [u, h, e]
    );
  }
  function g1(e, a) {
    e.action = a;
  }
  function Cg(e) {
    var a = Ct(),
      s = it;
    if (s !== null) return Eg(a, s, e);
    Ct(), (a = a.memoizedState), (s = Ct());
    var u = s.queue.dispatch;
    return (s.memoizedState = e), [a, u, !1];
  }
  function qi(e, a, s, u) {
    return (
      (e = { tag: e, create: s, deps: u, inst: a, next: null }),
      (a = Ve.updateQueue),
      a === null && ((a = kf()), (Ve.updateQueue = a)),
      (s = a.lastEffect),
      s === null
        ? (a.lastEffect = e.next = e)
        : ((u = s.next), (s.next = e), (e.next = u), (a.lastEffect = e)),
      e
    );
  }
  function Xu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Tg() {
    return Ct().memoizedState;
  }
  function Iu(e, a, s, u) {
    var c = on();
    (u = u === void 0 ? null : u), (Ve.flags |= e), (c.memoizedState = qi(1 | a, Xu(), s, u));
  }
  function nl(e, a, s, u) {
    var c = Ct();
    u = u === void 0 ? null : u;
    var h = c.memoizedState.inst;
    it !== null && u !== null && Tf(u, it.memoizedState.deps)
      ? (c.memoizedState = qi(a, h, s, u))
      : ((Ve.flags |= e), (c.memoizedState = qi(1 | a, h, s, u)));
  }
  function Mg(e, a) {
    Iu(8390656, 8, e, a);
  }
  function Ng(e, a) {
    nl(2048, 8, e, a);
  }
  function Dg(e, a) {
    return nl(4, 2, e, a);
  }
  function Ag(e, a) {
    return nl(4, 4, e, a);
  }
  function kg(e, a) {
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
  function Rg(e, a, s) {
    (s = s != null ? s.concat([e]) : null), nl(4, 4, kg.bind(null, a, e), s);
  }
  function Bf() {}
  function jg(e, a) {
    var s = Ct();
    a = a === void 0 ? null : a;
    var u = s.memoizedState;
    return a !== null && Tf(a, u[1]) ? u[0] : ((s.memoizedState = [e, a]), e);
  }
  function zg(e, a) {
    var s = Ct();
    a = a === void 0 ? null : a;
    var u = s.memoizedState;
    if (a !== null && Tf(a, u[1])) return u[0];
    if (((u = e()), Jr)) {
      qe(!0);
      try {
        e();
      } finally {
        qe(!1);
      }
    }
    return (s.memoizedState = [u, a]), u;
  }
  function Hf(e, a, s) {
    return s === void 0 || (lr & 1073741824) !== 0
      ? (e.memoizedState = a)
      : ((e.memoizedState = s), (e = By()), (Ve.lanes |= e), (mr |= e), s);
  }
  function Ug(e, a, s, u) {
    return hn(s, a)
      ? s
      : Hi.current !== null
        ? ((e = Hf(e, s, u)), hn(e, a) || (zt = !0), e)
        : (lr & 42) === 0
          ? ((zt = !0), (e.memoizedState = s))
          : ((e = By()), (Ve.lanes |= e), (mr |= e), a);
  }
  function Lg(e, a, s, u, c) {
    var h = J.p;
    J.p = h !== 0 && 8 > h ? h : 8;
    var p = V.T,
      b = {};
    (V.T = b), qf(e, !1, a, s);
    try {
      var O = c(),
        L = V.S;
      if (
        (L !== null && L(b, O), O !== null && typeof O == 'object' && typeof O.then == 'function')
      ) {
        var P = f1(O, u);
        al(e, a, P, vn(e));
      } else al(e, a, u, vn(e));
    } catch (Q) {
      al(e, a, { then: function () {}, status: 'rejected', reason: Q }, vn());
    } finally {
      (J.p = h), (V.T = p);
    }
  }
  function y1() {}
  function Vf(e, a, s, u) {
    if (e.tag !== 5) throw Error(i(476));
    var c = Bg(e).queue;
    Lg(
      e,
      c,
      a,
      ce,
      s === null
        ? y1
        : function () {
            return Hg(e), s(u);
          }
    );
  }
  function Bg(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Da,
        lastRenderedState: ce,
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
          lastRenderedReducer: Da,
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
  function Hg(e) {
    var a = Bg(e).next.queue;
    al(e, a, {}, vn());
  }
  function Yf() {
    return Pt(Sl);
  }
  function Vg() {
    return Ct().memoizedState;
  }
  function Yg() {
    return Ct().memoizedState;
  }
  function p1(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var s = vn();
          e = ir(s);
          var u = sr(a, e, s);
          u !== null && (bn(u, a, s), Xs(u, a, s)), (a = { cache: pf() }), (e.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function v1(e, a, s) {
    var u = vn();
    (s = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null }),
      Ju(e) ? Zg(a, s) : ((s = lf(e, a, s, u)), s !== null && (bn(s, e, u), Fg(s, a, u)));
  }
  function qg(e, a, s) {
    var u = vn();
    al(e, a, s, u);
  }
  function al(e, a, s, u) {
    var c = { lane: u, revertLane: 0, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Ju(e)) Zg(a, c);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = a.lastRenderedReducer), h !== null)
      )
        try {
          var p = a.lastRenderedState,
            b = h(p, s);
          if (((c.hasEagerState = !0), (c.eagerState = b), hn(b, p)))
            return Uu(e, a, c, 0), ft === null && zu(), !1;
        } catch {
        } finally {
        }
      if (((s = lf(e, a, c, u)), s !== null)) return bn(s, e, u), Fg(s, a, u), !0;
    }
    return !1;
  }
  function qf(e, a, s, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: _d(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ju(e))
    ) {
      if (a) throw Error(i(479));
    } else (a = lf(e, s, u, 2)), a !== null && bn(a, e, 2);
  }
  function Ju(e) {
    var a = e.alternate;
    return e === Ve || (a !== null && a === Ve);
  }
  function Zg(e, a) {
    Vi = $u = !0;
    var s = e.pending;
    s === null ? (a.next = a) : ((a.next = s.next), (s.next = a)), (e.pending = a);
  }
  function Fg(e, a, s) {
    if ((s & 4194048) !== 0) {
      var u = a.lanes;
      (u &= e.pendingLanes), (s |= u), (a.lanes = s), Mt(e, s);
    }
  }
  var eo = {
      readContext: Pt,
      use: Ku,
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
    Pg = {
      readContext: Pt,
      use: Ku,
      useCallback: function (e, a) {
        return (on().memoizedState = [e, a === void 0 ? null : a]), e;
      },
      useContext: Pt,
      useEffect: Mg,
      useImperativeHandle: function (e, a, s) {
        (s = s != null ? s.concat([e]) : null), Iu(4194308, 4, kg.bind(null, a, e), s);
      },
      useLayoutEffect: function (e, a) {
        return Iu(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Iu(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var s = on();
        a = a === void 0 ? null : a;
        var u = e();
        if (Jr) {
          qe(!0);
          try {
            e();
          } finally {
            qe(!1);
          }
        }
        return (s.memoizedState = [u, a]), u;
      },
      useReducer: function (e, a, s) {
        var u = on();
        if (s !== void 0) {
          var c = s(a);
          if (Jr) {
            qe(!0);
            try {
              s(a);
            } finally {
              qe(!1);
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
          (e = e.dispatch = v1.bind(null, Ve, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = on();
        return (e = { current: e }), (a.memoizedState = e);
      },
      useState: function (e) {
        e = Uf(e);
        var a = e.queue,
          s = qg.bind(null, Ve, a);
        return (a.dispatch = s), [e.memoizedState, s];
      },
      useDebugValue: Bf,
      useDeferredValue: function (e, a) {
        var s = on();
        return Hf(s, e, a);
      },
      useTransition: function () {
        var e = Uf(!1);
        return (e = Lg.bind(null, Ve, e.queue, !0, !1)), (on().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, a, s) {
        var u = Ve,
          c = on();
        if (Xe) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = a()), ft === null)) throw Error(i(349));
          (Pe & 124) !== 0 || dg(u, a, s);
        }
        c.memoizedState = s;
        var h = { value: s, getSnapshot: a };
        return (
          (c.queue = h),
          Mg(mg.bind(null, u, h, e), [e]),
          (u.flags |= 2048),
          qi(9, Xu(), hg.bind(null, u, h, s, a), null),
          s
        );
      },
      useId: function () {
        var e = on(),
          a = ft.identifierPrefix;
        if (Xe) {
          var s = Ta,
            u = Ca;
          (s = (u & ~(1 << (32 - rt(u) - 1))).toString(32) + s),
            (a = '«' + a + 'R' + s),
            (s = Qu++),
            0 < s && (a += 'H' + s.toString(32)),
            (a += '»');
        } else (s = d1++), (a = '«' + a + 'r' + s.toString(32) + '»');
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: Yf,
      useFormState: wg,
      useActionState: wg,
      useOptimistic: function (e) {
        var a = on();
        a.memoizedState = a.baseState = e;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (a.queue = s), (a = qf.bind(null, Ve, !0, s)), (s.dispatch = a), [e, a];
      },
      useMemoCache: Rf,
      useCacheRefresh: function () {
        return (on().memoizedState = p1.bind(null, Ve));
      },
    },
    Gg = {
      readContext: Pt,
      use: Ku,
      useCallback: jg,
      useContext: Pt,
      useEffect: Ng,
      useImperativeHandle: Rg,
      useInsertionEffect: Dg,
      useLayoutEffect: Ag,
      useMemo: zg,
      useReducer: Wu,
      useRef: Tg,
      useState: function () {
        return Wu(Da);
      },
      useDebugValue: Bf,
      useDeferredValue: function (e, a) {
        var s = Ct();
        return Ug(s, it.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Wu(Da)[0],
          a = Ct().memoizedState;
        return [typeof e == 'boolean' ? e : tl(e), a];
      },
      useSyncExternalStore: fg,
      useId: Vg,
      useHostTransitionStatus: Yf,
      useFormState: Og,
      useActionState: Og,
      useOptimistic: function (e, a) {
        var s = Ct();
        return pg(s, it, e, a);
      },
      useMemoCache: Rf,
      useCacheRefresh: Yg,
    },
    b1 = {
      readContext: Pt,
      use: Ku,
      useCallback: jg,
      useContext: Pt,
      useEffect: Ng,
      useImperativeHandle: Rg,
      useInsertionEffect: Dg,
      useLayoutEffect: Ag,
      useMemo: zg,
      useReducer: zf,
      useRef: Tg,
      useState: function () {
        return zf(Da);
      },
      useDebugValue: Bf,
      useDeferredValue: function (e, a) {
        var s = Ct();
        return it === null ? Hf(s, e, a) : Ug(s, it.memoizedState, e, a);
      },
      useTransition: function () {
        var e = zf(Da)[0],
          a = Ct().memoizedState;
        return [typeof e == 'boolean' ? e : tl(e), a];
      },
      useSyncExternalStore: fg,
      useId: Vg,
      useHostTransitionStatus: Yf,
      useFormState: Cg,
      useActionState: Cg,
      useOptimistic: function (e, a) {
        var s = Ct();
        return it !== null ? pg(s, it, e, a) : ((s.baseState = e), [e, s.queue.dispatch]);
      },
      useMemoCache: Rf,
      useCacheRefresh: Yg,
    },
    Zi = null,
    rl = 0;
  function to(e) {
    var a = rl;
    return (rl += 1), Zi === null && (Zi = []), ag(Zi, e, a);
  }
  function il(e, a) {
    (a = a.props.ref), (e.ref = a !== void 0 ? a : null);
  }
  function no(e, a) {
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
  function $g(e) {
    var a = e._init;
    return a(e._payload);
  }
  function Qg(e) {
    function a(z, D) {
      if (e) {
        var U = z.deletions;
        U === null ? ((z.deletions = [D]), (z.flags |= 16)) : U.push(D);
      }
    }
    function s(z, D) {
      if (!e) return null;
      for (; D !== null; ) a(z, D), (D = D.sibling);
      return null;
    }
    function u(z) {
      for (var D = new Map(); z !== null; )
        z.key !== null ? D.set(z.key, z) : D.set(z.index, z), (z = z.sibling);
      return D;
    }
    function c(z, D) {
      return (z = Ea(z, D)), (z.index = 0), (z.sibling = null), z;
    }
    function h(z, D, U) {
      return (
        (z.index = U),
        e
          ? ((U = z.alternate),
            U !== null
              ? ((U = U.index), U < D ? ((z.flags |= 67108866), D) : U)
              : ((z.flags |= 67108866), D))
          : ((z.flags |= 1048576), D)
      );
    }
    function p(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function b(z, D, U, G) {
      return D === null || D.tag !== 6
        ? ((D = of(U, z.mode, G)), (D.return = z), D)
        : ((D = c(D, U)), (D.return = z), D);
    }
    function O(z, D, U, G) {
      var me = U.type;
      return me === x
        ? P(z, D, U.props.children, G, U.key)
        : D !== null &&
            (D.elementType === me ||
              (typeof me == 'object' && me !== null && me.$$typeof === oe && $g(me) === D.type))
          ? ((D = c(D, U.props)), il(D, U), (D.return = z), D)
          : ((D = Bu(U.type, U.key, U.props, null, z.mode, G)), il(D, U), (D.return = z), D);
    }
    function L(z, D, U, G) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== U.containerInfo ||
        D.stateNode.implementation !== U.implementation
        ? ((D = cf(U, z.mode, G)), (D.return = z), D)
        : ((D = c(D, U.children || [])), (D.return = z), D);
    }
    function P(z, D, U, G, me) {
      return D === null || D.tag !== 7
        ? ((D = Pr(U, z.mode, G, me)), (D.return = z), D)
        : ((D = c(D, U)), (D.return = z), D);
    }
    function Q(z, D, U) {
      if ((typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint')
        return (D = of('' + D, z.mode, U)), (D.return = z), D;
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case _:
            return (U = Bu(D.type, D.key, D.props, null, z.mode, U)), il(U, D), (U.return = z), U;
          case w:
            return (D = cf(D, z.mode, U)), (D.return = z), D;
          case oe:
            var G = D._init;
            return (D = G(D._payload)), Q(z, D, U);
        }
        if (He(D) || de(D)) return (D = Pr(D, z.mode, U, null)), (D.return = z), D;
        if (typeof D.then == 'function') return Q(z, to(D), U);
        if (D.$$typeof === R) return Q(z, qu(z, D), U);
        no(z, D);
      }
      return null;
    }
    function H(z, D, U, G) {
      var me = D !== null ? D.key : null;
      if ((typeof U == 'string' && U !== '') || typeof U == 'number' || typeof U == 'bigint')
        return me !== null ? null : b(z, D, '' + U, G);
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case _:
            return U.key === me ? O(z, D, U, G) : null;
          case w:
            return U.key === me ? L(z, D, U, G) : null;
          case oe:
            return (me = U._init), (U = me(U._payload)), H(z, D, U, G);
        }
        if (He(U) || de(U)) return me !== null ? null : P(z, D, U, G, null);
        if (typeof U.then == 'function') return H(z, D, to(U), G);
        if (U.$$typeof === R) return H(z, D, qu(z, U), G);
        no(z, U);
      }
      return null;
    }
    function Y(z, D, U, G, me) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return (z = z.get(U) || null), b(D, z, '' + G, me);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case _:
            return (z = z.get(G.key === null ? U : G.key) || null), O(D, z, G, me);
          case w:
            return (z = z.get(G.key === null ? U : G.key) || null), L(D, z, G, me);
          case oe:
            var Ye = G._init;
            return (G = Ye(G._payload)), Y(z, D, U, G, me);
        }
        if (He(G) || de(G)) return (z = z.get(U) || null), P(D, z, G, me, null);
        if (typeof G.then == 'function') return Y(z, D, U, to(G), me);
        if (G.$$typeof === R) return Y(z, D, U, qu(D, G), me);
        no(D, G);
      }
      return null;
    }
    function Te(z, D, U, G) {
      for (
        var me = null, Ye = null, be = D, Ee = (D = 0), Lt = null;
        be !== null && Ee < U.length;
        Ee++
      ) {
        be.index > Ee ? ((Lt = be), (be = null)) : (Lt = be.sibling);
        var Qe = H(z, be, U[Ee], G);
        if (Qe === null) {
          be === null && (be = Lt);
          break;
        }
        e && be && Qe.alternate === null && a(z, be),
          (D = h(Qe, D, Ee)),
          Ye === null ? (me = Qe) : (Ye.sibling = Qe),
          (Ye = Qe),
          (be = Lt);
      }
      if (Ee === U.length) return s(z, be), Xe && $r(z, Ee), me;
      if (be === null) {
        for (; Ee < U.length; Ee++)
          (be = Q(z, U[Ee], G)),
            be !== null &&
              ((D = h(be, D, Ee)), Ye === null ? (me = be) : (Ye.sibling = be), (Ye = be));
        return Xe && $r(z, Ee), me;
      }
      for (be = u(be); Ee < U.length; Ee++)
        (Lt = Y(be, z, Ee, U[Ee], G)),
          Lt !== null &&
            (e && Lt.alternate !== null && be.delete(Lt.key === null ? Ee : Lt.key),
            (D = h(Lt, D, Ee)),
            Ye === null ? (me = Lt) : (Ye.sibling = Lt),
            (Ye = Lt));
      return (
        e &&
          be.forEach(function (wr) {
            return a(z, wr);
          }),
        Xe && $r(z, Ee),
        me
      );
    }
    function Oe(z, D, U, G) {
      if (U == null) throw Error(i(151));
      for (
        var me = null, Ye = null, be = D, Ee = (D = 0), Lt = null, Qe = U.next();
        be !== null && !Qe.done;
        Ee++, Qe = U.next()
      ) {
        be.index > Ee ? ((Lt = be), (be = null)) : (Lt = be.sibling);
        var wr = H(z, be, Qe.value, G);
        if (wr === null) {
          be === null && (be = Lt);
          break;
        }
        e && be && wr.alternate === null && a(z, be),
          (D = h(wr, D, Ee)),
          Ye === null ? (me = wr) : (Ye.sibling = wr),
          (Ye = wr),
          (be = Lt);
      }
      if (Qe.done) return s(z, be), Xe && $r(z, Ee), me;
      if (be === null) {
        for (; !Qe.done; Ee++, Qe = U.next())
          (Qe = Q(z, Qe.value, G)),
            Qe !== null &&
              ((D = h(Qe, D, Ee)), Ye === null ? (me = Qe) : (Ye.sibling = Qe), (Ye = Qe));
        return Xe && $r(z, Ee), me;
      }
      for (be = u(be); !Qe.done; Ee++, Qe = U.next())
        (Qe = Y(be, z, Ee, Qe.value, G)),
          Qe !== null &&
            (e && Qe.alternate !== null && be.delete(Qe.key === null ? Ee : Qe.key),
            (D = h(Qe, D, Ee)),
            Ye === null ? (me = Qe) : (Ye.sibling = Qe),
            (Ye = Qe));
      return (
        e &&
          be.forEach(function (_S) {
            return a(z, _S);
          }),
        Xe && $r(z, Ee),
        me
      );
    }
    function lt(z, D, U, G) {
      if (
        (typeof U == 'object' &&
          U !== null &&
          U.type === x &&
          U.key === null &&
          (U = U.props.children),
        typeof U == 'object' && U !== null)
      ) {
        switch (U.$$typeof) {
          case _:
            e: {
              for (var me = U.key; D !== null; ) {
                if (D.key === me) {
                  if (((me = U.type), me === x)) {
                    if (D.tag === 7) {
                      s(z, D.sibling), (G = c(D, U.props.children)), (G.return = z), (z = G);
                      break e;
                    }
                  } else if (
                    D.elementType === me ||
                    (typeof me == 'object' &&
                      me !== null &&
                      me.$$typeof === oe &&
                      $g(me) === D.type)
                  ) {
                    s(z, D.sibling), (G = c(D, U.props)), il(G, U), (G.return = z), (z = G);
                    break e;
                  }
                  s(z, D);
                  break;
                } else a(z, D);
                D = D.sibling;
              }
              U.type === x
                ? ((G = Pr(U.props.children, z.mode, G, U.key)), (G.return = z), (z = G))
                : ((G = Bu(U.type, U.key, U.props, null, z.mode, G)),
                  il(G, U),
                  (G.return = z),
                  (z = G));
            }
            return p(z);
          case w:
            e: {
              for (me = U.key; D !== null; ) {
                if (D.key === me)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === U.containerInfo &&
                    D.stateNode.implementation === U.implementation
                  ) {
                    s(z, D.sibling), (G = c(D, U.children || [])), (G.return = z), (z = G);
                    break e;
                  } else {
                    s(z, D);
                    break;
                  }
                else a(z, D);
                D = D.sibling;
              }
              (G = cf(U, z.mode, G)), (G.return = z), (z = G);
            }
            return p(z);
          case oe:
            return (me = U._init), (U = me(U._payload)), lt(z, D, U, G);
        }
        if (He(U)) return Te(z, D, U, G);
        if (de(U)) {
          if (((me = de(U)), typeof me != 'function')) throw Error(i(150));
          return (U = me.call(U)), Oe(z, D, U, G);
        }
        if (typeof U.then == 'function') return lt(z, D, to(U), G);
        if (U.$$typeof === R) return lt(z, D, qu(z, U), G);
        no(z, U);
      }
      return (typeof U == 'string' && U !== '') || typeof U == 'number' || typeof U == 'bigint'
        ? ((U = '' + U),
          D !== null && D.tag === 6
            ? (s(z, D.sibling), (G = c(D, U)), (G.return = z), (z = G))
            : (s(z, D), (G = of(U, z.mode, G)), (G.return = z), (z = G)),
          p(z))
        : s(z, D);
    }
    return function (z, D, U, G) {
      try {
        rl = 0;
        var me = lt(z, D, U, G);
        return (Zi = null), me;
      } catch (be) {
        if (be === Ks || be === Fu) throw be;
        var Ye = mn(29, be, null, z.mode);
        return (Ye.lanes = G), (Ye.return = z), Ye;
      } finally {
      }
    };
  }
  var Fi = Qg(!0),
    Kg = Qg(!1),
    Rn = Z(null),
    ia = null;
  function ur(e) {
    var a = e.alternate;
    te(Dt, Dt.current & 1),
      te(Rn, e),
      ia === null && (a === null || Hi.current !== null || a.memoizedState !== null) && (ia = e);
  }
  function Wg(e) {
    if (e.tag === 22) {
      if ((te(Dt, Dt.current), te(Rn, e), ia === null)) {
        var a = e.alternate;
        a !== null && a.memoizedState !== null && (ia = e);
      }
    } else or();
  }
  function or() {
    te(Dt, Dt.current), te(Rn, Rn.current);
  }
  function Aa(e) {
    re(Rn), ia === e && (ia = null), re(Dt);
  }
  var Dt = Z(0);
  function ao(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var s = a.memoizedState;
        if (s !== null && ((s = s.dehydrated), s === null || s.data === '$?' || kd(s))) return a;
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
  function Zf(e, a, s, u) {
    (a = e.memoizedState),
      (s = s(u, a)),
      (s = s == null ? a : y({}, a, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Ff = {
    enqueueSetState: function (e, a, s) {
      e = e._reactInternals;
      var u = vn(),
        c = ir(u);
      (c.payload = a),
        s != null && (c.callback = s),
        (a = sr(e, c, u)),
        a !== null && (bn(a, e, u), Xs(a, e, u));
    },
    enqueueReplaceState: function (e, a, s) {
      e = e._reactInternals;
      var u = vn(),
        c = ir(u);
      (c.tag = 1),
        (c.payload = a),
        s != null && (c.callback = s),
        (a = sr(e, c, u)),
        a !== null && (bn(a, e, u), Xs(a, e, u));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var s = vn(),
        u = ir(s);
      (u.tag = 2),
        a != null && (u.callback = a),
        (a = sr(e, u, s)),
        a !== null && (bn(a, e, s), Xs(a, e, s));
    },
  };
  function Xg(e, a, s, u, c, h, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(u, h, p)
        : a.prototype && a.prototype.isPureReactComponent
          ? !Ys(s, u) || !Ys(c, h)
          : !0
    );
  }
  function Ig(e, a, s, u) {
    (e = a.state),
      typeof a.componentWillReceiveProps == 'function' && a.componentWillReceiveProps(s, u),
      typeof a.UNSAFE_componentWillReceiveProps == 'function' &&
        a.UNSAFE_componentWillReceiveProps(s, u),
      a.state !== e && Ff.enqueueReplaceState(a, a.state, null);
  }
  function ei(e, a) {
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
  var ro =
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
  function Jg(e) {
    ro(e);
  }
  function ey(e) {
    console.error(e);
  }
  function ty(e) {
    ro(e);
  }
  function io(e, a) {
    try {
      var s = e.onUncaughtError;
      s(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ny(e, a, s) {
    try {
      var u = e.onCaughtError;
      u(s.value, { componentStack: s.stack, errorBoundary: a.tag === 1 ? a.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Pf(e, a, s) {
    return (
      (s = ir(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        io(e, a);
      }),
      s
    );
  }
  function ay(e) {
    return (e = ir(e)), (e.tag = 3), e;
  }
  function ry(e, a, s, u) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var h = u.value;
      (e.payload = function () {
        return c(h);
      }),
        (e.callback = function () {
          ny(a, s, u);
        });
    }
    var p = s.stateNode;
    p !== null &&
      typeof p.componentDidCatch == 'function' &&
      (e.callback = function () {
        ny(a, s, u),
          typeof c != 'function' && (gr === null ? (gr = new Set([this])) : gr.add(this));
        var b = u.stack;
        this.componentDidCatch(u.value, { componentStack: b !== null ? b : '' });
      });
  }
  function _1(e, a, s, u, c) {
    if (((s.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
      if (((a = s.alternate), a !== null && Gs(a, s, c, !0), (s = Rn.current), s !== null)) {
        switch (s.tag) {
          case 13:
            return (
              ia === null ? gd() : s.alternate === null && vt === 0 && (vt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = c),
              u === _f
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null ? (s.updateQueue = new Set([u])) : a.add(u),
                  pd(e, u, c)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              u === _f
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null
                    ? ((a = { transitions: null, markerInstances: null, retryQueue: new Set([u]) }),
                      (s.updateQueue = a))
                    : ((s = a.retryQueue), s === null ? (a.retryQueue = new Set([u])) : s.add(u)),
                  pd(e, u, c)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return pd(e, u, c), gd(), !1;
    }
    if (Xe)
      return (
        (a = Rn.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = c),
            u !== hf && ((e = Error(i(422), { cause: u })), Ps(Nn(e, s))))
          : (u !== hf && ((a = Error(i(423), { cause: u })), Ps(Nn(a, s))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (u = Nn(u, s)),
            (c = Pf(e.stateNode, u, c)),
            wf(e, c),
            vt !== 4 && (vt = 2)),
        !1
      );
    var h = Error(i(520), { cause: u });
    if (((h = Nn(h, s)), dl === null ? (dl = [h]) : dl.push(h), vt !== 4 && (vt = 2), a === null))
      return !0;
    (u = Nn(u, s)), (s = a);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (e = c & -c),
            (s.lanes |= e),
            (e = Pf(s.stateNode, u, e)),
            wf(s, e),
            !1
          );
        case 1:
          if (
            ((a = s.type),
            (h = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == 'function' ||
                (h !== null &&
                  typeof h.componentDidCatch == 'function' &&
                  (gr === null || !gr.has(h)))))
          )
            return (
              (s.flags |= 65536),
              (c &= -c),
              (s.lanes |= c),
              (c = ay(c)),
              ry(c, e, s, u),
              wf(s, c),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var iy = Error(i(461)),
    zt = !1;
  function Ht(e, a, s, u) {
    a.child = e === null ? Kg(a, null, s, u) : Fi(a, e.child, s, u);
  }
  function sy(e, a, s, u, c) {
    s = s.render;
    var h = a.ref;
    if ('ref' in u) {
      var p = {};
      for (var b in u) b !== 'ref' && (p[b] = u[b]);
    } else p = u;
    return (
      Xr(a),
      (u = Mf(e, a, s, p, h, c)),
      (b = Nf()),
      e !== null && !zt
        ? (Df(e, a, c), ka(e, a, c))
        : (Xe && b && ff(a), (a.flags |= 1), Ht(e, a, u, c), a.child)
    );
  }
  function ly(e, a, s, u, c) {
    if (e === null) {
      var h = s.type;
      return typeof h == 'function' && !uf(h) && h.defaultProps === void 0 && s.compare === null
        ? ((a.tag = 15), (a.type = h), uy(e, a, h, u, c))
        : ((e = Bu(s.type, null, u, a, a.mode, c)), (e.ref = a.ref), (e.return = a), (a.child = e));
    }
    if (((h = e.child), !Jf(e, c))) {
      var p = h.memoizedProps;
      if (((s = s.compare), (s = s !== null ? s : Ys), s(p, u) && e.ref === a.ref))
        return ka(e, a, c);
    }
    return (a.flags |= 1), (e = Ea(h, u)), (e.ref = a.ref), (e.return = a), (a.child = e);
  }
  function uy(e, a, s, u, c) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (Ys(h, u) && e.ref === a.ref)
        if (((zt = !1), (a.pendingProps = u = h), Jf(e, c))) (e.flags & 131072) !== 0 && (zt = !0);
        else return (a.lanes = e.lanes), ka(e, a, c);
    }
    return Gf(e, a, s, u, c);
  }
  function oy(e, a, s) {
    var u = a.pendingProps,
      c = u.children,
      h = e !== null ? e.memoizedState : null;
    if (u.mode === 'hidden') {
      if ((a.flags & 128) !== 0) {
        if (((u = h !== null ? h.baseLanes | s : s), e !== null)) {
          for (c = a.child = e.child, h = 0; c !== null; )
            (h = h | c.lanes | c.childLanes), (c = c.sibling);
          a.childLanes = h & ~u;
        } else (a.childLanes = 0), (a.child = null);
        return cy(e, a, u, s);
      }
      if ((s & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Zu(a, h !== null ? h.cachePool : null),
          h !== null ? ug(a, h) : Ef(),
          Wg(a);
      else
        return (a.lanes = a.childLanes = 536870912), cy(e, a, h !== null ? h.baseLanes | s : s, s);
    } else
      h !== null
        ? (Zu(a, h.cachePool), ug(a, h), or(), (a.memoizedState = null))
        : (e !== null && Zu(a, null), Ef(), or());
    return Ht(e, a, c, s), a.child;
  }
  function cy(e, a, s, u) {
    var c = bf();
    return (
      (c = c === null ? null : { parent: Nt._currentValue, pool: c }),
      (a.memoizedState = { baseLanes: s, cachePool: c }),
      e !== null && Zu(a, null),
      Ef(),
      Wg(a),
      e !== null && Gs(e, a, u, !0),
      null
    );
  }
  function so(e, a) {
    var s = a.ref;
    if (s === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof s != 'function' && typeof s != 'object') throw Error(i(284));
      (e === null || e.ref !== s) && (a.flags |= 4194816);
    }
  }
  function Gf(e, a, s, u, c) {
    return (
      Xr(a),
      (s = Mf(e, a, s, u, void 0, c)),
      (u = Nf()),
      e !== null && !zt
        ? (Df(e, a, c), ka(e, a, c))
        : (Xe && u && ff(a), (a.flags |= 1), Ht(e, a, s, c), a.child)
    );
  }
  function fy(e, a, s, u, c, h) {
    return (
      Xr(a),
      (a.updateQueue = null),
      (s = cg(a, u, s, c)),
      og(e),
      (u = Nf()),
      e !== null && !zt
        ? (Df(e, a, h), ka(e, a, h))
        : (Xe && u && ff(a), (a.flags |= 1), Ht(e, a, s, h), a.child)
    );
  }
  function dy(e, a, s, u, c) {
    if ((Xr(a), a.stateNode === null)) {
      var h = ji,
        p = s.contextType;
      typeof p == 'object' && p !== null && (h = Pt(p)),
        (h = new s(u, h)),
        (a.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Ff),
        (a.stateNode = h),
        (h._reactInternals = a),
        (h = a.stateNode),
        (h.props = u),
        (h.state = a.memoizedState),
        (h.refs = {}),
        Sf(a),
        (p = s.contextType),
        (h.context = typeof p == 'object' && p !== null ? Pt(p) : ji),
        (h.state = a.memoizedState),
        (p = s.getDerivedStateFromProps),
        typeof p == 'function' && (Zf(a, s, p, u), (h.state = a.memoizedState)),
        typeof s.getDerivedStateFromProps == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function' ||
          (typeof h.UNSAFE_componentWillMount != 'function' &&
            typeof h.componentWillMount != 'function') ||
          ((p = h.state),
          typeof h.componentWillMount == 'function' && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == 'function' && h.UNSAFE_componentWillMount(),
          p !== h.state && Ff.enqueueReplaceState(h, h.state, null),
          Js(a, u, h, c),
          Is(),
          (h.state = a.memoizedState)),
        typeof h.componentDidMount == 'function' && (a.flags |= 4194308),
        (u = !0);
    } else if (e === null) {
      h = a.stateNode;
      var b = a.memoizedProps,
        O = ei(s, b);
      h.props = O;
      var L = h.context,
        P = s.contextType;
      (p = ji), typeof P == 'object' && P !== null && (p = Pt(P));
      var Q = s.getDerivedStateFromProps;
      (P = typeof Q == 'function' || typeof h.getSnapshotBeforeUpdate == 'function'),
        (b = a.pendingProps !== b),
        P ||
          (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof h.componentWillReceiveProps != 'function') ||
          ((b || L !== p) && Ig(a, h, u, p)),
        (rr = !1);
      var H = a.memoizedState;
      (h.state = H),
        Js(a, u, h, c),
        Is(),
        (L = a.memoizedState),
        b || H !== L || rr
          ? (typeof Q == 'function' && (Zf(a, s, Q, u), (L = a.memoizedState)),
            (O = rr || Xg(a, s, O, u, H, L, p))
              ? (P ||
                  (typeof h.UNSAFE_componentWillMount != 'function' &&
                    typeof h.componentWillMount != 'function') ||
                  (typeof h.componentWillMount == 'function' && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == 'function' &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == 'function' && (a.flags |= 4194308))
              : (typeof h.componentDidMount == 'function' && (a.flags |= 4194308),
                (a.memoizedProps = u),
                (a.memoizedState = L)),
            (h.props = u),
            (h.state = L),
            (h.context = p),
            (u = O))
          : (typeof h.componentDidMount == 'function' && (a.flags |= 4194308), (u = !1));
    } else {
      (h = a.stateNode),
        xf(e, a),
        (p = a.memoizedProps),
        (P = ei(s, p)),
        (h.props = P),
        (Q = a.pendingProps),
        (H = h.context),
        (L = s.contextType),
        (O = ji),
        typeof L == 'object' && L !== null && (O = Pt(L)),
        (b = s.getDerivedStateFromProps),
        (L = typeof b == 'function' || typeof h.getSnapshotBeforeUpdate == 'function') ||
          (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof h.componentWillReceiveProps != 'function') ||
          ((p !== Q || H !== O) && Ig(a, h, u, O)),
        (rr = !1),
        (H = a.memoizedState),
        (h.state = H),
        Js(a, u, h, c),
        Is();
      var Y = a.memoizedState;
      p !== Q || H !== Y || rr || (e !== null && e.dependencies !== null && Yu(e.dependencies))
        ? (typeof b == 'function' && (Zf(a, s, b, u), (Y = a.memoizedState)),
          (P =
            rr ||
            Xg(a, s, P, u, H, Y, O) ||
            (e !== null && e.dependencies !== null && Yu(e.dependencies)))
            ? (L ||
                (typeof h.UNSAFE_componentWillUpdate != 'function' &&
                  typeof h.componentWillUpdate != 'function') ||
                (typeof h.componentWillUpdate == 'function' && h.componentWillUpdate(u, Y, O),
                typeof h.UNSAFE_componentWillUpdate == 'function' &&
                  h.UNSAFE_componentWillUpdate(u, Y, O)),
              typeof h.componentDidUpdate == 'function' && (a.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == 'function' && (a.flags |= 1024))
            : (typeof h.componentDidUpdate != 'function' ||
                (p === e.memoizedProps && H === e.memoizedState) ||
                (a.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != 'function' ||
                (p === e.memoizedProps && H === e.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = u),
              (a.memoizedState = Y)),
          (h.props = u),
          (h.state = Y),
          (h.context = O),
          (u = P))
        : (typeof h.componentDidUpdate != 'function' ||
            (p === e.memoizedProps && H === e.memoizedState) ||
            (a.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != 'function' ||
            (p === e.memoizedProps && H === e.memoizedState) ||
            (a.flags |= 1024),
          (u = !1));
    }
    return (
      (h = u),
      so(e, a),
      (u = (a.flags & 128) !== 0),
      h || u
        ? ((h = a.stateNode),
          (s = u && typeof s.getDerivedStateFromError != 'function' ? null : h.render()),
          (a.flags |= 1),
          e !== null && u
            ? ((a.child = Fi(a, e.child, null, c)), (a.child = Fi(a, null, s, c)))
            : Ht(e, a, s, c),
          (a.memoizedState = h.state),
          (e = a.child))
        : (e = ka(e, a, c)),
      e
    );
  }
  function hy(e, a, s, u) {
    return Fs(), (a.flags |= 256), Ht(e, a, s, u), a.child;
  }
  var $f = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Qf(e) {
    return { baseLanes: e, cachePool: eg() };
  }
  function Kf(e, a, s) {
    return (e = e !== null ? e.childLanes & ~s : 0), a && (e |= jn), e;
  }
  function my(e, a, s) {
    var u = a.pendingProps,
      c = !1,
      h = (a.flags & 128) !== 0,
      p;
    if (
      ((p = h) || (p = e !== null && e.memoizedState === null ? !1 : (Dt.current & 2) !== 0),
      p && ((c = !0), (a.flags &= -129)),
      (p = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (Xe) {
        if ((c ? ur(a) : or(), Xe)) {
          var b = pt,
            O;
          if ((O = b)) {
            e: {
              for (O = b, b = ra; O.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (((O = Vn(O.nextSibling)), O === null)) {
                  b = null;
                  break e;
                }
              }
              b = O;
            }
            b !== null
              ? ((a.memoizedState = {
                  dehydrated: b,
                  treeContext: Gr !== null ? { id: Ca, overflow: Ta } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (O = mn(18, null, null, 0)),
                (O.stateNode = b),
                (O.return = a),
                (a.child = O),
                (It = a),
                (pt = null),
                (O = !0))
              : (O = !1);
          }
          O || Kr(a);
        }
        if (((b = a.memoizedState), b !== null && ((b = b.dehydrated), b !== null)))
          return kd(b) ? (a.lanes = 32) : (a.lanes = 536870912), null;
        Aa(a);
      }
      return (
        (b = u.children),
        (u = u.fallback),
        c
          ? (or(),
            (c = a.mode),
            (b = lo({ mode: 'hidden', children: b }, c)),
            (u = Pr(u, c, s, null)),
            (b.return = a),
            (u.return = a),
            (b.sibling = u),
            (a.child = b),
            (c = a.child),
            (c.memoizedState = Qf(s)),
            (c.childLanes = Kf(e, p, s)),
            (a.memoizedState = $f),
            u)
          : (ur(a), Wf(a, b))
      );
    }
    if (((O = e.memoizedState), O !== null && ((b = O.dehydrated), b !== null))) {
      if (h)
        a.flags & 256
          ? (ur(a), (a.flags &= -257), (a = Xf(e, a, s)))
          : a.memoizedState !== null
            ? (or(), (a.child = e.child), (a.flags |= 128), (a = null))
            : (or(),
              (c = u.fallback),
              (b = a.mode),
              (u = lo({ mode: 'visible', children: u.children }, b)),
              (c = Pr(c, b, s, null)),
              (c.flags |= 2),
              (u.return = a),
              (c.return = a),
              (u.sibling = c),
              (a.child = u),
              Fi(a, e.child, null, s),
              (u = a.child),
              (u.memoizedState = Qf(s)),
              (u.childLanes = Kf(e, p, s)),
              (a.memoizedState = $f),
              (a = c));
      else if ((ur(a), kd(b))) {
        if (((p = b.nextSibling && b.nextSibling.dataset), p)) var L = p.dgst;
        (p = L),
          (u = Error(i(419))),
          (u.stack = ''),
          (u.digest = p),
          Ps({ value: u, source: null, stack: null }),
          (a = Xf(e, a, s));
      } else if ((zt || Gs(e, a, s, !1), (p = (s & e.childLanes) !== 0), zt || p)) {
        if (
          ((p = ft),
          p !== null &&
            ((u = s & -s),
            (u = (u & 42) !== 0 ? 1 : ln(u)),
            (u = (u & (p.suspendedLanes | s)) !== 0 ? 0 : u),
            u !== 0 && u !== O.retryLane))
        )
          throw ((O.retryLane = u), Ri(e, u), bn(p, e, u), iy);
        b.data === '$?' || gd(), (a = Xf(e, a, s));
      } else
        b.data === '$?'
          ? ((a.flags |= 192), (a.child = e.child), (a = null))
          : ((e = O.treeContext),
            (pt = Vn(b.nextSibling)),
            (It = a),
            (Xe = !0),
            (Qr = null),
            (ra = !1),
            e !== null &&
              ((An[kn++] = Ca),
              (An[kn++] = Ta),
              (An[kn++] = Gr),
              (Ca = e.id),
              (Ta = e.overflow),
              (Gr = a)),
            (a = Wf(a, u.children)),
            (a.flags |= 4096));
      return a;
    }
    return c
      ? (or(),
        (c = u.fallback),
        (b = a.mode),
        (O = e.child),
        (L = O.sibling),
        (u = Ea(O, { mode: 'hidden', children: u.children })),
        (u.subtreeFlags = O.subtreeFlags & 65011712),
        L !== null ? (c = Ea(L, c)) : ((c = Pr(c, b, s, null)), (c.flags |= 2)),
        (c.return = a),
        (u.return = a),
        (u.sibling = c),
        (a.child = u),
        (u = c),
        (c = a.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = Qf(s))
          : ((O = b.cachePool),
            O !== null
              ? ((L = Nt._currentValue), (O = O.parent !== L ? { parent: L, pool: L } : O))
              : (O = eg()),
            (b = { baseLanes: b.baseLanes | s, cachePool: O })),
        (c.memoizedState = b),
        (c.childLanes = Kf(e, p, s)),
        (a.memoizedState = $f),
        u)
      : (ur(a),
        (s = e.child),
        (e = s.sibling),
        (s = Ea(s, { mode: 'visible', children: u.children })),
        (s.return = a),
        (s.sibling = null),
        e !== null &&
          ((p = a.deletions), p === null ? ((a.deletions = [e]), (a.flags |= 16)) : p.push(e)),
        (a.child = s),
        (a.memoizedState = null),
        s);
  }
  function Wf(e, a) {
    return (a = lo({ mode: 'visible', children: a }, e.mode)), (a.return = e), (e.child = a);
  }
  function lo(e, a) {
    return (
      (e = mn(22, e, null, a)),
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
  function Xf(e, a, s) {
    return (
      Fi(a, e.child, null, s),
      (e = Wf(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function gy(e, a, s) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a), gf(e.return, a, s);
  }
  function If(e, a, s, u, c) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: s,
          tailMode: c,
        })
      : ((h.isBackwards = a),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = u),
        (h.tail = s),
        (h.tailMode = c));
  }
  function yy(e, a, s) {
    var u = a.pendingProps,
      c = u.revealOrder,
      h = u.tail;
    if ((Ht(e, a, u.children, s), (u = Dt.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (a.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = a.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gy(e, s, a);
          else if (e.tag === 19) gy(e, s, a);
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
    switch ((te(Dt, u), c)) {
      case 'forwards':
        for (s = a.child, c = null; s !== null; )
          (e = s.alternate), e !== null && ao(e) === null && (c = s), (s = s.sibling);
        (s = c),
          s === null ? ((c = a.child), (a.child = null)) : ((c = s.sibling), (s.sibling = null)),
          If(a, !1, c, s, h);
        break;
      case 'backwards':
        for (s = null, c = a.child, a.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && ao(e) === null)) {
            a.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = s), (s = c), (c = e);
        }
        If(a, !0, s, null, h);
        break;
      case 'together':
        If(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function ka(e, a, s) {
    if (
      (e !== null && (a.dependencies = e.dependencies), (mr |= a.lanes), (s & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((Gs(e, a, s, !1), (s & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(i(153));
    if (a.child !== null) {
      for (e = a.child, s = Ea(e, e.pendingProps), a.child = s, s.return = a; e.sibling !== null; )
        (e = e.sibling), (s = s.sibling = Ea(e, e.pendingProps)), (s.return = a);
      s.sibling = null;
    }
    return a.child;
  }
  function Jf(e, a) {
    return (e.lanes & a) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Yu(e)));
  }
  function S1(e, a, s) {
    switch (a.tag) {
      case 3:
        Ie(a, a.stateNode.containerInfo), ar(a, Nt, e.memoizedState.cache), Fs();
        break;
      case 27:
      case 5:
        Ia(a);
        break;
      case 4:
        Ie(a, a.stateNode.containerInfo);
        break;
      case 10:
        ar(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ur(a), (a.flags |= 128), null)
            : (s & a.child.childLanes) !== 0
              ? my(e, a, s)
              : (ur(a), (e = ka(e, a, s)), e !== null ? e.sibling : null);
        ur(a);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((u = (s & a.childLanes) !== 0),
          u || (Gs(e, a, s, !1), (u = (s & a.childLanes) !== 0)),
          c)
        ) {
          if (u) return yy(e, a, s);
          a.flags |= 128;
        }
        if (
          ((c = a.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          te(Dt, Dt.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), oy(e, a, s);
      case 24:
        ar(a, Nt, e.memoizedState.cache);
    }
    return ka(e, a, s);
  }
  function py(e, a, s) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps) zt = !0;
      else {
        if (!Jf(e, s) && (a.flags & 128) === 0) return (zt = !1), S1(e, a, s);
        zt = (e.flags & 131072) !== 0;
      }
    else (zt = !1), Xe && (a.flags & 1048576) !== 0 && $m(a, Vu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          e = a.pendingProps;
          var u = a.elementType,
            c = u._init;
          if (((u = c(u._payload)), (a.type = u), typeof u == 'function'))
            uf(u)
              ? ((e = ei(u, e)), (a.tag = 1), (a = dy(null, a, u, e, s)))
              : ((a.tag = 0), (a = Gf(null, a, u, e, s)));
          else {
            if (u != null) {
              if (((c = u.$$typeof), c === q)) {
                (a.tag = 11), (a = sy(null, a, u, e, s));
                break e;
              } else if (c === W) {
                (a.tag = 14), (a = ly(null, a, u, e, s));
                break e;
              }
            }
            throw ((a = Ae(u) || u), Error(i(306, a, '')));
          }
        }
        return a;
      case 0:
        return Gf(e, a, a.type, a.pendingProps, s);
      case 1:
        return (u = a.type), (c = ei(u, a.pendingProps)), dy(e, a, u, c, s);
      case 3:
        e: {
          if ((Ie(a, a.stateNode.containerInfo), e === null)) throw Error(i(387));
          u = a.pendingProps;
          var h = a.memoizedState;
          (c = h.element), xf(e, a), Js(a, u, null, s);
          var p = a.memoizedState;
          if (
            ((u = p.cache),
            ar(a, Nt, u),
            u !== h.cache && yf(a, [Nt], s, !0),
            Is(),
            (u = p.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: u, isDehydrated: !1, cache: p.cache }),
              (a.updateQueue.baseState = h),
              (a.memoizedState = h),
              a.flags & 256)
            ) {
              a = hy(e, a, u, s);
              break e;
            } else if (u !== c) {
              (c = Nn(Error(i(424)), a)), Ps(c), (a = hy(e, a, u, s));
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
                pt = Vn(e.firstChild),
                  It = a,
                  Xe = !0,
                  Qr = null,
                  ra = !0,
                  s = Kg(a, null, u, s),
                  a.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((Fs(), u === c)) {
              a = ka(e, a, s);
              break e;
            }
            Ht(e, a, u, s);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          so(e, a),
          e === null
            ? (s = Sp(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = s)
              : Xe ||
                ((s = a.type),
                (e = a.pendingProps),
                (u = xo(we.current).createElement(s)),
                (u[Ot] = a),
                (u[Rt] = e),
                Yt(u, s, e),
                jt(u),
                (a.stateNode = u))
            : (a.memoizedState = Sp(a.type, e.memoizedProps, a.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ia(a),
          e === null &&
            Xe &&
            ((u = a.stateNode = vp(a.type, a.pendingProps, we.current)),
            (It = a),
            (ra = !0),
            (c = pt),
            vr(a.type) ? ((Rd = c), (pt = Vn(u.firstChild))) : (pt = c)),
          Ht(e, a, a.pendingProps.children, s),
          so(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            Xe &&
            ((c = u = pt) &&
              ((u = K1(u, a.type, a.pendingProps, ra)),
              u !== null
                ? ((a.stateNode = u), (It = a), (pt = Vn(u.firstChild)), (ra = !1), (c = !0))
                : (c = !1)),
            c || Kr(a)),
          Ia(a),
          (c = a.type),
          (h = a.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (u = h.children),
          Nd(c, h) ? (u = null) : p !== null && Nd(c, p) && (a.flags |= 32),
          a.memoizedState !== null && ((c = Mf(e, a, h1, null, null, s)), (Sl._currentValue = c)),
          so(e, a),
          Ht(e, a, u, s),
          a.child
        );
      case 6:
        return (
          e === null &&
            Xe &&
            ((e = s = pt) &&
              ((s = W1(s, a.pendingProps, ra)),
              s !== null ? ((a.stateNode = s), (It = a), (pt = null), (e = !0)) : (e = !1)),
            e || Kr(a)),
          null
        );
      case 13:
        return my(e, a, s);
      case 4:
        return (
          Ie(a, a.stateNode.containerInfo),
          (u = a.pendingProps),
          e === null ? (a.child = Fi(a, null, u, s)) : Ht(e, a, u, s),
          a.child
        );
      case 11:
        return sy(e, a, a.type, a.pendingProps, s);
      case 7:
        return Ht(e, a, a.pendingProps, s), a.child;
      case 8:
        return Ht(e, a, a.pendingProps.children, s), a.child;
      case 12:
        return Ht(e, a, a.pendingProps.children, s), a.child;
      case 10:
        return (u = a.pendingProps), ar(a, a.type, u.value), Ht(e, a, u.children, s), a.child;
      case 9:
        return (
          (c = a.type._context),
          (u = a.pendingProps.children),
          Xr(a),
          (c = Pt(c)),
          (u = u(c)),
          (a.flags |= 1),
          Ht(e, a, u, s),
          a.child
        );
      case 14:
        return ly(e, a, a.type, a.pendingProps, s);
      case 15:
        return uy(e, a, a.type, a.pendingProps, s);
      case 19:
        return yy(e, a, s);
      case 31:
        return (
          (u = a.pendingProps),
          (s = a.mode),
          (u = { mode: u.mode, children: u.children }),
          e === null
            ? ((s = lo(u, s)), (s.ref = a.ref), (a.child = s), (s.return = a), (a = s))
            : ((s = Ea(e.child, u)), (s.ref = a.ref), (a.child = s), (s.return = a), (a = s)),
          a
        );
      case 22:
        return oy(e, a, s);
      case 24:
        return (
          Xr(a),
          (u = Pt(Nt)),
          e === null
            ? ((c = bf()),
              c === null &&
                ((c = ft),
                (h = pf()),
                (c.pooledCache = h),
                h.refCount++,
                h !== null && (c.pooledCacheLanes |= s),
                (c = h)),
              (a.memoizedState = { parent: u, cache: c }),
              Sf(a),
              ar(a, Nt, c))
            : ((e.lanes & s) !== 0 && (xf(e, a), Js(a, null, null, s), Is()),
              (c = e.memoizedState),
              (h = a.memoizedState),
              c.parent !== u
                ? ((c = { parent: u, cache: u }),
                  (a.memoizedState = c),
                  a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = c),
                  ar(a, Nt, u))
                : ((u = h.cache), ar(a, Nt, u), u !== c.cache && yf(a, [Nt], s, !0))),
          Ht(e, a, a.pendingProps.children, s),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(i(156, a.tag));
  }
  function Ra(e) {
    e.flags |= 4;
  }
  function vy(e, a) {
    if (a.type !== 'stylesheet' || (a.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Cp(a))) {
      if (
        ((a = Rn.current),
        a !== null &&
          ((Pe & 4194048) === Pe
            ? ia !== null
            : ((Pe & 62914560) !== Pe && (Pe & 536870912) === 0) || a !== ia))
      )
        throw ((Ws = _f), tg);
      e.flags |= 8192;
    }
  }
  function uo(e, a) {
    a !== null && (e.flags |= 4),
      e.flags & 16384 && ((a = e.tag !== 22 ? ot() : 536870912), (e.lanes |= a), (Qi |= a));
  }
  function sl(e, a) {
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
  function mt(e) {
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
  function x1(e, a, s) {
    var u = a.pendingProps;
    switch ((df(a), a.tag)) {
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
        return mt(a), null;
      case 1:
        return mt(a), null;
      case 3:
        return (
          (s = a.stateNode),
          (u = null),
          e !== null && (u = e.memoizedState.cache),
          a.memoizedState.cache !== u && (a.flags |= 2048),
          Na(Nt),
          Bt(),
          s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zs(a)
              ? Ra(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), Wm())),
          mt(a),
          null
        );
      case 26:
        return (
          (s = a.memoizedState),
          e === null
            ? (Ra(a), s !== null ? (mt(a), vy(a, s)) : (mt(a), (a.flags &= -16777217)))
            : s
              ? s !== e.memoizedState
                ? (Ra(a), mt(a), vy(a, s))
                : (mt(a), (a.flags &= -16777217))
              : (e.memoizedProps !== u && Ra(a), mt(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        Ja(a), (s = we.current);
        var c = a.type;
        if (e !== null && a.stateNode != null) e.memoizedProps !== u && Ra(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return mt(a), null;
          }
          (e = pe.current), Zs(a) ? Qm(a) : ((e = vp(c, u, s)), (a.stateNode = e), Ra(a));
        }
        return mt(a), null;
      case 5:
        if ((Ja(a), (s = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== u && Ra(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return mt(a), null;
          }
          if (((e = pe.current), Zs(a))) Qm(a);
          else {
            switch (((c = xo(we.current)), e)) {
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
            (e[Ot] = a), (e[Rt] = u);
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
            e: switch ((Yt(e, s, u), s)) {
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
            e && Ra(a);
          }
        }
        return mt(a), (a.flags &= -16777217), null;
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== u && Ra(a);
        else {
          if (typeof u != 'string' && a.stateNode === null) throw Error(i(166));
          if (((e = we.current), Zs(a))) {
            if (((e = a.stateNode), (s = a.memoizedProps), (u = null), (c = It), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  u = c.memoizedProps;
              }
            (e[Ot] = a),
              (e = !!(
                e.nodeValue === s ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                fp(e.nodeValue, s)
              )),
              e || Kr(a);
          } else (e = xo(e).createTextNode(u)), (e[Ot] = a), (a.stateNode = e);
        }
        return mt(a), null;
      case 13:
        if (
          ((u = a.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = Zs(a)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (((c = a.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(i(317));
              c[Ot] = a;
            } else Fs(), (a.flags & 128) === 0 && (a.memoizedState = null), (a.flags |= 4);
            mt(a), (c = !1);
          } else
            (c = Wm()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return a.flags & 256 ? (Aa(a), a) : (Aa(a), null);
        }
        if ((Aa(a), (a.flags & 128) !== 0)) return (a.lanes = s), a;
        if (((s = u !== null), (e = e !== null && e.memoizedState !== null), s)) {
          (u = a.child),
            (c = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (c = u.alternate.memoizedState.cachePool.pool);
          var h = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (h = u.memoizedState.cachePool.pool),
            h !== c && (u.flags |= 2048);
        }
        return s !== e && s && (a.child.flags |= 8192), uo(a, a.updateQueue), mt(a), null;
      case 4:
        return Bt(), e === null && Od(a.stateNode.containerInfo), mt(a), null;
      case 10:
        return Na(a.type), mt(a), null;
      case 19:
        if ((re(Dt), (c = a.memoizedState), c === null)) return mt(a), null;
        if (((u = (a.flags & 128) !== 0), (h = c.rendering), h === null))
          if (u) sl(c, !1);
          else {
            if (vt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null; ) {
                if (((h = ao(e)), h !== null)) {
                  for (
                    a.flags |= 128,
                      sl(c, !1),
                      e = h.updateQueue,
                      a.updateQueue = e,
                      uo(a, e),
                      a.subtreeFlags = 0,
                      e = s,
                      s = a.child;
                    s !== null;

                  )
                    Gm(s, e), (s = s.sibling);
                  return te(Dt, (Dt.current & 1) | 2), a.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              rn() > fo &&
              ((a.flags |= 128), (u = !0), sl(c, !1), (a.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = ao(h)), e !== null)) {
              if (
                ((a.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                uo(a, e),
                sl(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !h.alternate && !Xe)
              )
                return mt(a), null;
            } else
              2 * rn() - c.renderingStartTime > fo &&
                s !== 536870912 &&
                ((a.flags |= 128), (u = !0), sl(c, !1), (a.lanes = 4194304));
          c.isBackwards
            ? ((h.sibling = a.child), (a.child = h))
            : ((e = c.last), e !== null ? (e.sibling = h) : (a.child = h), (c.last = h));
        }
        return c.tail !== null
          ? ((a = c.tail),
            (c.rendering = a),
            (c.tail = a.sibling),
            (c.renderingStartTime = rn()),
            (a.sibling = null),
            (e = Dt.current),
            te(Dt, u ? (e & 1) | 2 : e & 1),
            a)
          : (mt(a), null);
      case 22:
      case 23:
        return (
          Aa(a),
          Cf(),
          (u = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== u && (a.flags |= 8192)
            : u && (a.flags |= 8192),
          u
            ? (s & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (mt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : mt(a),
          (s = a.updateQueue),
          s !== null && uo(a, s.retryQueue),
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
          e !== null && re(Ir),
          null
        );
      case 24:
        return (
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          a.memoizedState.cache !== s && (a.flags |= 2048),
          Na(Nt),
          mt(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, a.tag));
  }
  function w1(e, a) {
    switch ((df(a), a.tag)) {
      case 1:
        return (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null;
      case 3:
        return (
          Na(Nt),
          Bt(),
          (e = a.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 26:
      case 27:
      case 5:
        return Ja(a), null;
      case 13:
        if ((Aa(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)) {
          if (a.alternate === null) throw Error(i(340));
          Fs();
        }
        return (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null;
      case 19:
        return re(Dt), null;
      case 4:
        return Bt(), null;
      case 10:
        return Na(a.type), null;
      case 22:
      case 23:
        return (
          Aa(a),
          Cf(),
          e !== null && re(Ir),
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 24:
        return Na(Nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function by(e, a) {
    switch ((df(a), a.tag)) {
      case 3:
        Na(Nt), Bt();
        break;
      case 26:
      case 27:
      case 5:
        Ja(a);
        break;
      case 4:
        Bt();
        break;
      case 13:
        Aa(a);
        break;
      case 19:
        re(Dt);
        break;
      case 10:
        Na(a.type);
        break;
      case 22:
      case 23:
        Aa(a), Cf(), e !== null && re(Ir);
        break;
      case 24:
        Na(Nt);
    }
  }
  function ll(e, a) {
    try {
      var s = a.updateQueue,
        u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        s = c;
        do {
          if ((s.tag & e) === e) {
            u = void 0;
            var h = s.create,
              p = s.inst;
            (u = h()), (p.destroy = u);
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (b) {
      ct(a, a.return, b);
    }
  }
  function cr(e, a, s) {
    try {
      var u = a.updateQueue,
        c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var h = c.next;
        u = h;
        do {
          if ((u.tag & e) === e) {
            var p = u.inst,
              b = p.destroy;
            if (b !== void 0) {
              (p.destroy = void 0), (c = a);
              var O = s,
                L = b;
              try {
                L();
              } catch (P) {
                ct(c, O, P);
              }
            }
          }
          u = u.next;
        } while (u !== h);
      }
    } catch (P) {
      ct(a, a.return, P);
    }
  }
  function _y(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var s = e.stateNode;
      try {
        lg(a, s);
      } catch (u) {
        ct(e, e.return, u);
      }
    }
  }
  function Sy(e, a, s) {
    (s.props = ei(e.type, e.memoizedProps)), (s.state = e.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (u) {
      ct(e, a, u);
    }
  }
  function ul(e, a) {
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
      ct(e, a, c);
    }
  }
  function sa(e, a) {
    var s = e.ref,
      u = e.refCleanup;
    if (s !== null)
      if (typeof u == 'function')
        try {
          u();
        } catch (c) {
          ct(e, a, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof s == 'function')
        try {
          s(null);
        } catch (c) {
          ct(e, a, c);
        }
      else s.current = null;
  }
  function xy(e) {
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
      ct(e, e.return, c);
    }
  }
  function ed(e, a, s) {
    try {
      var u = e.stateNode;
      F1(u, e.type, s, a), (u[Rt] = a);
    } catch (c) {
      ct(e, e.return, c);
    }
  }
  function wy(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && vr(e.type)) || e.tag === 4
    );
  }
  function td(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || wy(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && vr(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nd(e, a, s) {
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
            s != null || a.onclick !== null || (a.onclick = So));
    else if (
      u !== 4 &&
      (u === 27 && vr(e.type) && ((s = e.stateNode), (a = null)), (e = e.child), e !== null)
    )
      for (nd(e, a, s), e = e.sibling; e !== null; ) nd(e, a, s), (e = e.sibling);
  }
  function oo(e, a, s) {
    var u = e.tag;
    if (u === 5 || u === 6) (e = e.stateNode), a ? s.insertBefore(e, a) : s.appendChild(e);
    else if (u !== 4 && (u === 27 && vr(e.type) && (s = e.stateNode), (e = e.child), e !== null))
      for (oo(e, a, s), e = e.sibling; e !== null; ) oo(e, a, s), (e = e.sibling);
  }
  function Oy(e) {
    var a = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var u = e.type, c = a.attributes; c.length; ) a.removeAttributeNode(c[0]);
      Yt(a, u, s), (a[Ot] = e), (a[Rt] = s);
    } catch (h) {
      ct(e, e.return, h);
    }
  }
  var ja = !1,
    St = !1,
    ad = !1,
    Ey = typeof WeakSet == 'function' ? WeakSet : Set,
    Ut = null;
  function O1(e, a) {
    if (((e = e.containerInfo), (Td = Mo), (e = Um(e)), ef(e))) {
      if ('selectionStart' in e) var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var u = s.getSelection && s.getSelection();
          if (u && u.rangeCount !== 0) {
            s = u.anchorNode;
            var c = u.anchorOffset,
              h = u.focusNode;
            u = u.focusOffset;
            try {
              s.nodeType, h.nodeType;
            } catch {
              s = null;
              break e;
            }
            var p = 0,
              b = -1,
              O = -1,
              L = 0,
              P = 0,
              Q = e,
              H = null;
            t: for (;;) {
              for (
                var Y;
                Q !== s || (c !== 0 && Q.nodeType !== 3) || (b = p + c),
                  Q !== h || (u !== 0 && Q.nodeType !== 3) || (O = p + u),
                  Q.nodeType === 3 && (p += Q.nodeValue.length),
                  (Y = Q.firstChild) !== null;

              )
                (H = Q), (Q = Y);
              for (;;) {
                if (Q === e) break t;
                if (
                  (H === s && ++L === c && (b = p),
                  H === h && ++P === u && (O = p),
                  (Y = Q.nextSibling) !== null)
                )
                  break;
                (Q = H), (H = Q.parentNode);
              }
              Q = Y;
            }
            s = b === -1 || O === -1 ? null : { start: b, end: O };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Md = { focusedElem: e, selectionRange: s }, Mo = !1, Ut = a; Ut !== null; )
      if (((a = Ut), (e = a.child), (a.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = a), (Ut = e);
      else
        for (; Ut !== null; ) {
          switch (((a = Ut), (h = a.alternate), (e = a.flags), a.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && h !== null) {
                (e = void 0),
                  (s = a),
                  (c = h.memoizedProps),
                  (h = h.memoizedState),
                  (u = s.stateNode);
                try {
                  var Te = ei(s.type, c, s.elementType === s.type);
                  (e = u.getSnapshotBeforeUpdate(Te, h)),
                    (u.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Oe) {
                  ct(s, s.return, Oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = a.stateNode.containerInfo), (s = e.nodeType), s === 9)) Ad(e);
                else if (s === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Ad(e);
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
            (e.return = a.return), (Ut = e);
            break;
          }
          Ut = a.return;
        }
  }
  function Cy(e, a, s) {
    var u = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        fr(e, s), u & 4 && ll(5, s);
        break;
      case 1:
        if ((fr(e, s), u & 4))
          if (((e = s.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (p) {
              ct(s, s.return, p);
            }
          else {
            var c = ei(s.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(c, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              ct(s, s.return, p);
            }
          }
        u & 64 && _y(s), u & 512 && ul(s, s.return);
        break;
      case 3:
        if ((fr(e, s), u & 64 && ((e = s.updateQueue), e !== null))) {
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
            lg(e, a);
          } catch (p) {
            ct(s, s.return, p);
          }
        }
        break;
      case 27:
        a === null && u & 4 && Oy(s);
      case 26:
      case 5:
        fr(e, s), a === null && u & 4 && xy(s), u & 512 && ul(s, s.return);
        break;
      case 12:
        fr(e, s);
        break;
      case 13:
        fr(e, s),
          u & 4 && Ny(e, s),
          u & 64 &&
            ((e = s.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((s = R1.bind(null, s)), X1(e, s))));
        break;
      case 22:
        if (((u = s.memoizedState !== null || ja), !u)) {
          (a = (a !== null && a.memoizedState !== null) || St), (c = ja);
          var h = St;
          (ja = u),
            (St = a) && !h ? dr(e, s, (s.subtreeFlags & 8772) !== 0) : fr(e, s),
            (ja = c),
            (St = h);
        }
        break;
      case 30:
        break;
      default:
        fr(e, s);
    }
  }
  function Ty(e) {
    var a = e.alternate;
    a !== null && ((e.alternate = null), Ty(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && zc(a)),
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
    cn = !1;
  function za(e, a, s) {
    for (s = s.child; s !== null; ) My(e, a, s), (s = s.sibling);
  }
  function My(e, a, s) {
    if (De && typeof De.onCommitFiberUnmount == 'function')
      try {
        De.onCommitFiberUnmount(ge, s);
      } catch {}
    switch (s.tag) {
      case 26:
        St || sa(s, a),
          za(e, a, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        St || sa(s, a);
        var u = dt,
          c = cn;
        vr(s.type) && ((dt = s.stateNode), (cn = !1)),
          za(e, a, s),
          pl(s.stateNode),
          (dt = u),
          (cn = c);
        break;
      case 5:
        St || sa(s, a);
      case 6:
        if (((u = dt), (c = cn), (dt = null), za(e, a, s), (dt = u), (cn = c), dt !== null))
          if (cn)
            try {
              (dt.nodeType === 9
                ? dt.body
                : dt.nodeName === 'HTML'
                  ? dt.ownerDocument.body
                  : dt
              ).removeChild(s.stateNode);
            } catch (h) {
              ct(s, a, h);
            }
          else
            try {
              dt.removeChild(s.stateNode);
            } catch (h) {
              ct(s, a, h);
            }
        break;
      case 18:
        dt !== null &&
          (cn
            ? ((e = dt),
              yp(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                s.stateNode
              ),
              El(e))
            : yp(dt, s.stateNode));
        break;
      case 4:
        (u = dt),
          (c = cn),
          (dt = s.stateNode.containerInfo),
          (cn = !0),
          za(e, a, s),
          (dt = u),
          (cn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        St || cr(2, s, a), St || cr(4, s, a), za(e, a, s);
        break;
      case 1:
        St ||
          (sa(s, a), (u = s.stateNode), typeof u.componentWillUnmount == 'function' && Sy(s, a, u)),
          za(e, a, s);
        break;
      case 21:
        za(e, a, s);
        break;
      case 22:
        (St = (u = St) || s.memoizedState !== null), za(e, a, s), (St = u);
        break;
      default:
        za(e, a, s);
    }
  }
  function Ny(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        El(e);
      } catch (s) {
        ct(a, a.return, s);
      }
  }
  function E1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var a = e.stateNode;
        return a === null && (a = e.stateNode = new Ey()), a;
      case 22:
        return (
          (e = e.stateNode), (a = e._retryCache), a === null && (a = e._retryCache = new Ey()), a
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function rd(e, a) {
    var s = E1(e);
    a.forEach(function (u) {
      var c = j1.bind(null, e, u);
      s.has(u) || (s.add(u), u.then(c, c));
    });
  }
  function gn(e, a) {
    var s = a.deletions;
    if (s !== null)
      for (var u = 0; u < s.length; u++) {
        var c = s[u],
          h = e,
          p = a,
          b = p;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (vr(b.type)) {
                (dt = b.stateNode), (cn = !1);
                break e;
              }
              break;
            case 5:
              (dt = b.stateNode), (cn = !1);
              break e;
            case 3:
            case 4:
              (dt = b.stateNode.containerInfo), (cn = !0);
              break e;
          }
          b = b.return;
        }
        if (dt === null) throw Error(i(160));
        My(h, p, c),
          (dt = null),
          (cn = !1),
          (h = c.alternate),
          h !== null && (h.return = null),
          (c.return = null);
      }
    if (a.subtreeFlags & 13878) for (a = a.child; a !== null; ) Dy(a, e), (a = a.sibling);
  }
  var Hn = null;
  function Dy(e, a) {
    var s = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gn(a, e), yn(e), u & 4 && (cr(3, e, e.return), ll(3, e), cr(5, e, e.return));
        break;
      case 1:
        gn(a, e),
          yn(e),
          u & 512 && (St || s === null || sa(s, s.return)),
          u & 64 &&
            ja &&
            ((e = e.updateQueue),
            e !== null &&
              ((u = e.callbacks),
              u !== null &&
                ((s = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = s === null ? u : s.concat(u)))));
        break;
      case 26:
        var c = Hn;
        if ((gn(a, e), yn(e), u & 512 && (St || s === null || sa(s, s.return)), u & 4)) {
          var h = s !== null ? s.memoizedState : null;
          if (((u = e.memoizedState), s === null))
            if (u === null)
              if (e.stateNode === null) {
                e: {
                  (u = e.type), (s = e.memoizedProps), (c = c.ownerDocument || c);
                  t: switch (u) {
                    case 'title':
                      (h = c.getElementsByTagName('title')[0]),
                        (!h ||
                          h[ks] ||
                          h[Ot] ||
                          h.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          h.hasAttribute('itemprop')) &&
                          ((h = c.createElement(u)),
                          c.head.insertBefore(h, c.querySelector('head > title'))),
                        Yt(h, u, s),
                        (h[Ot] = e),
                        jt(h),
                        (u = h);
                      break e;
                    case 'link':
                      var p = Op('link', 'href', c).get(u + (s.href || ''));
                      if (p) {
                        for (var b = 0; b < p.length; b++)
                          if (
                            ((h = p[b]),
                            h.getAttribute('href') ===
                              (s.href == null || s.href === '' ? null : s.href) &&
                              h.getAttribute('rel') === (s.rel == null ? null : s.rel) &&
                              h.getAttribute('title') === (s.title == null ? null : s.title) &&
                              h.getAttribute('crossorigin') ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      (h = c.createElement(u)), Yt(h, u, s), c.head.appendChild(h);
                      break;
                    case 'meta':
                      if ((p = Op('meta', 'content', c).get(u + (s.content || '')))) {
                        for (b = 0; b < p.length; b++)
                          if (
                            ((h = p[b]),
                            h.getAttribute('content') ===
                              (s.content == null ? null : '' + s.content) &&
                              h.getAttribute('name') === (s.name == null ? null : s.name) &&
                              h.getAttribute('property') ===
                                (s.property == null ? null : s.property) &&
                              h.getAttribute('http-equiv') ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              h.getAttribute('charset') === (s.charSet == null ? null : s.charSet))
                          ) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      (h = c.createElement(u)), Yt(h, u, s), c.head.appendChild(h);
                      break;
                    default:
                      throw Error(i(468, u));
                  }
                  (h[Ot] = e), jt(h), (u = h);
                }
                e.stateNode = u;
              } else Ep(c, e.type, e.stateNode);
            else e.stateNode = wp(c, u, e.memoizedProps);
          else
            h !== u
              ? (h === null
                  ? s.stateNode !== null && ((s = s.stateNode), s.parentNode.removeChild(s))
                  : h.count--,
                u === null ? Ep(c, e.type, e.stateNode) : wp(c, u, e.memoizedProps))
              : u === null && e.stateNode !== null && ed(e, e.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        gn(a, e),
          yn(e),
          u & 512 && (St || s === null || sa(s, s.return)),
          s !== null && u & 4 && ed(e, e.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if ((gn(a, e), yn(e), u & 512 && (St || s === null || sa(s, s.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            Ci(c, '');
          } catch (Y) {
            ct(e, e.return, Y);
          }
        }
        u & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), ed(e, c, s !== null ? s.memoizedProps : c)),
          u & 1024 && (ad = !0);
        break;
      case 6:
        if ((gn(a, e), yn(e), u & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.memoizedProps), (s = e.stateNode);
          try {
            s.nodeValue = u;
          } catch (Y) {
            ct(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((Eo = null),
          (c = Hn),
          (Hn = wo(a.containerInfo)),
          gn(a, e),
          (Hn = c),
          yn(e),
          u & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            El(a.containerInfo);
          } catch (Y) {
            ct(e, e.return, Y);
          }
        ad && ((ad = !1), Ay(e));
        break;
      case 4:
        (u = Hn), (Hn = wo(e.stateNode.containerInfo)), gn(a, e), yn(e), (Hn = u);
        break;
      case 12:
        gn(a, e), yn(e);
        break;
      case 13:
        gn(a, e),
          yn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (s !== null && s.memoizedState !== null) &&
            (cd = rn()),
          u & 4 && ((u = e.updateQueue), u !== null && ((e.updateQueue = null), rd(e, u)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var O = s !== null && s.memoizedState !== null,
          L = ja,
          P = St;
        if (((ja = L || c), (St = P || O), gn(a, e), (St = P), (ja = L), yn(e), u & 8192))
          e: for (
            a = e.stateNode,
              a._visibility = c ? a._visibility & -2 : a._visibility | 1,
              c && (s === null || O || ja || St || ti(e)),
              s = null,
              a = e;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (s === null) {
                O = s = a;
                try {
                  if (((h = O.stateNode), c))
                    (p = h.style),
                      typeof p.setProperty == 'function'
                        ? p.setProperty('display', 'none', 'important')
                        : (p.display = 'none');
                  else {
                    b = O.stateNode;
                    var Q = O.memoizedProps.style,
                      H = Q != null && Q.hasOwnProperty('display') ? Q.display : null;
                    b.style.display = H == null || typeof H == 'boolean' ? '' : ('' + H).trim();
                  }
                } catch (Y) {
                  ct(O, O.return, Y);
                }
              }
            } else if (a.tag === 6) {
              if (s === null) {
                O = a;
                try {
                  O.stateNode.nodeValue = c ? '' : O.memoizedProps;
                } catch (Y) {
                  ct(O, O.return, Y);
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
          u !== null && ((s = u.retryQueue), s !== null && ((u.retryQueue = null), rd(e, s))));
        break;
      case 19:
        gn(a, e),
          yn(e),
          u & 4 && ((u = e.updateQueue), u !== null && ((e.updateQueue = null), rd(e, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        gn(a, e), yn(e);
    }
  }
  function yn(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var s, u = e.return; u !== null; ) {
          if (wy(u)) {
            s = u;
            break;
          }
          u = u.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var c = s.stateNode,
              h = td(e);
            oo(e, h, c);
            break;
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (Ci(p, ''), (s.flags &= -33));
            var b = td(e);
            oo(e, b, p);
            break;
          case 3:
          case 4:
            var O = s.stateNode.containerInfo,
              L = td(e);
            nd(e, L, O);
            break;
          default:
            throw Error(i(161));
        }
      } catch (P) {
        ct(e, e.return, P);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function Ay(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        Ay(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), (e = e.sibling);
      }
  }
  function fr(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) Cy(e, a.alternate, a), (a = a.sibling);
  }
  function ti(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cr(4, a, a.return), ti(a);
          break;
        case 1:
          sa(a, a.return);
          var s = a.stateNode;
          typeof s.componentWillUnmount == 'function' && Sy(a, a.return, s), ti(a);
          break;
        case 27:
          pl(a.stateNode);
        case 26:
        case 5:
          sa(a, a.return), ti(a);
          break;
        case 22:
          a.memoizedState === null && ti(a);
          break;
        case 30:
          ti(a);
          break;
        default:
          ti(a);
      }
      e = e.sibling;
    }
  }
  function dr(e, a, s) {
    for (s = s && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate,
        c = e,
        h = a,
        p = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          dr(c, h, s), ll(4, h);
          break;
        case 1:
          if ((dr(c, h, s), (u = h), (c = u.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (L) {
              ct(u, u.return, L);
            }
          if (((u = h), (c = u.updateQueue), c !== null)) {
            var b = u.stateNode;
            try {
              var O = c.shared.hiddenCallbacks;
              if (O !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < O.length; c++) sg(O[c], b);
            } catch (L) {
              ct(u, u.return, L);
            }
          }
          s && p & 64 && _y(h), ul(h, h.return);
          break;
        case 27:
          Oy(h);
        case 26:
        case 5:
          dr(c, h, s), s && u === null && p & 4 && xy(h), ul(h, h.return);
          break;
        case 12:
          dr(c, h, s);
          break;
        case 13:
          dr(c, h, s), s && p & 4 && Ny(c, h);
          break;
        case 22:
          h.memoizedState === null && dr(c, h, s), ul(h, h.return);
          break;
        case 30:
          break;
        default:
          dr(c, h, s);
      }
      a = a.sibling;
    }
  }
  function id(e, a) {
    var s = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (s = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== s && (e != null && e.refCount++, s != null && $s(s));
  }
  function sd(e, a) {
    (e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && $s(e));
  }
  function la(e, a, s, u) {
    if (a.subtreeFlags & 10256) for (a = a.child; a !== null; ) ky(e, a, s, u), (a = a.sibling);
  }
  function ky(e, a, s, u) {
    var c = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        la(e, a, s, u), c & 2048 && ll(9, a);
        break;
      case 1:
        la(e, a, s, u);
        break;
      case 3:
        la(e, a, s, u),
          c & 2048 &&
            ((e = null),
            a.alternate !== null && (e = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== e && (a.refCount++, e != null && $s(e)));
        break;
      case 12:
        if (c & 2048) {
          la(e, a, s, u), (e = a.stateNode);
          try {
            var h = a.memoizedProps,
              p = h.id,
              b = h.onPostCommit;
            typeof b == 'function' &&
              b(p, a.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (O) {
            ct(a, a.return, O);
          }
        } else la(e, a, s, u);
        break;
      case 13:
        la(e, a, s, u);
        break;
      case 23:
        break;
      case 22:
        (h = a.stateNode),
          (p = a.alternate),
          a.memoizedState !== null
            ? h._visibility & 2
              ? la(e, a, s, u)
              : ol(e, a)
            : h._visibility & 2
              ? la(e, a, s, u)
              : ((h._visibility |= 2), Pi(e, a, s, u, (a.subtreeFlags & 10256) !== 0)),
          c & 2048 && id(p, a);
        break;
      case 24:
        la(e, a, s, u), c & 2048 && sd(a.alternate, a);
        break;
      default:
        la(e, a, s, u);
    }
  }
  function Pi(e, a, s, u, c) {
    for (c = c && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var h = e,
        p = a,
        b = s,
        O = u,
        L = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Pi(h, p, b, O, c), ll(8, p);
          break;
        case 23:
          break;
        case 22:
          var P = p.stateNode;
          p.memoizedState !== null
            ? P._visibility & 2
              ? Pi(h, p, b, O, c)
              : ol(h, p)
            : ((P._visibility |= 2), Pi(h, p, b, O, c)),
            c && L & 2048 && id(p.alternate, p);
          break;
        case 24:
          Pi(h, p, b, O, c), c && L & 2048 && sd(p.alternate, p);
          break;
        default:
          Pi(h, p, b, O, c);
      }
      a = a.sibling;
    }
  }
  function ol(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var s = e,
          u = a,
          c = u.flags;
        switch (u.tag) {
          case 22:
            ol(s, u), c & 2048 && id(u.alternate, u);
            break;
          case 24:
            ol(s, u), c & 2048 && sd(u.alternate, u);
            break;
          default:
            ol(s, u);
        }
        a = a.sibling;
      }
  }
  var cl = 8192;
  function Gi(e) {
    if (e.subtreeFlags & cl) for (e = e.child; e !== null; ) Ry(e), (e = e.sibling);
  }
  function Ry(e) {
    switch (e.tag) {
      case 26:
        Gi(e), e.flags & cl && e.memoizedState !== null && cS(Hn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Gi(e);
        break;
      case 3:
      case 4:
        var a = Hn;
        (Hn = wo(e.stateNode.containerInfo)), Gi(e), (Hn = a);
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = cl), (cl = 16777216), Gi(e), (cl = a))
            : Gi(e));
        break;
      default:
        Gi(e);
    }
  }
  function jy(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do (a = e.sibling), (e.sibling = null), (e = a);
      while (e !== null);
    }
  }
  function fl(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          (Ut = u), Uy(u, e);
        }
      jy(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) zy(e), (e = e.sibling);
  }
  function zy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        fl(e), e.flags & 2048 && cr(9, e, e.return);
        break;
      case 3:
        fl(e);
        break;
      case 12:
        fl(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), co(e))
          : fl(e);
        break;
      default:
        fl(e);
    }
  }
  function co(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          (Ut = u), Uy(u, e);
        }
      jy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          cr(8, a, a.return), co(a);
          break;
        case 22:
          (s = a.stateNode), s._visibility & 2 && ((s._visibility &= -3), co(a));
          break;
        default:
          co(a);
      }
      e = e.sibling;
    }
  }
  function Uy(e, a) {
    for (; Ut !== null; ) {
      var s = Ut;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          cr(8, s, a);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var u = s.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          $s(s.memoizedState.cache);
      }
      if (((u = s.child), u !== null)) (u.return = s), (Ut = u);
      else
        e: for (s = e; Ut !== null; ) {
          u = Ut;
          var c = u.sibling,
            h = u.return;
          if ((Ty(u), u === s)) {
            Ut = null;
            break e;
          }
          if (c !== null) {
            (c.return = h), (Ut = c);
            break e;
          }
          Ut = h;
        }
    }
  }
  var C1 = {
      getCacheForType: function (e) {
        var a = Pt(Nt),
          s = a.data.get(e);
        return s === void 0 && ((s = e()), a.data.set(e, s)), s;
      },
    },
    T1 = typeof WeakMap == 'function' ? WeakMap : Map,
    tt = 0,
    ft = null,
    Ze = null,
    Pe = 0,
    nt = 0,
    pn = null,
    hr = !1,
    $i = !1,
    ld = !1,
    Ua = 0,
    vt = 0,
    mr = 0,
    ni = 0,
    ud = 0,
    jn = 0,
    Qi = 0,
    dl = null,
    fn = null,
    od = !1,
    cd = 0,
    fo = 1 / 0,
    ho = null,
    gr = null,
    Vt = 0,
    yr = null,
    Ki = null,
    Wi = 0,
    fd = 0,
    dd = null,
    Ly = null,
    hl = 0,
    hd = null;
  function vn() {
    if ((tt & 2) !== 0 && Pe !== 0) return Pe & -Pe;
    if (V.T !== null) {
      var e = Li;
      return e !== 0 ? e : _d();
    }
    return wu();
  }
  function By() {
    jn === 0 && (jn = (Pe & 536870912) === 0 || Xe ? Le() : 536870912);
    var e = Rn.current;
    return e !== null && (e.flags |= 32), jn;
  }
  function bn(e, a, s) {
    ((e === ft && (nt === 2 || nt === 9)) || e.cancelPendingCommit !== null) &&
      (Xi(e, 0), pr(e, Pe, jn, !1)),
      sn(e, s),
      ((tt & 2) === 0 || e !== ft) &&
        (e === ft && ((tt & 2) === 0 && (ni |= s), vt === 4 && pr(e, Pe, jn, !1)), ua(e));
  }
  function Hy(e, a, s) {
    if ((tt & 6) !== 0) throw Error(i(327));
    var u = (!s && (a & 124) === 0 && (a & e.expiredLanes) === 0) || xa(e, a),
      c = u ? D1(e, a) : yd(e, a, !0),
      h = u;
    do {
      if (c === 0) {
        $i && !u && pr(e, a, 0, !1);
        break;
      } else {
        if (((s = e.current.alternate), h && !M1(s))) {
          (c = yd(e, a, !1)), (h = !1);
          continue;
        }
        if (c === 2) {
          if (((h = a), e.errorRecoveryDisabledLanes & h)) var p = 0;
          else (p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            a = p;
            e: {
              var b = e;
              c = dl;
              var O = b.current.memoizedState.isDehydrated;
              if ((O && (Xi(b, p).flags |= 256), (p = yd(b, p, !1)), p !== 2)) {
                if (ld && !O) {
                  (b.errorRecoveryDisabledLanes |= h), (ni |= h), (c = 4);
                  break e;
                }
                (h = fn), (fn = c), h !== null && (fn === null ? (fn = h) : fn.push.apply(fn, h));
              }
              c = p;
            }
            if (((h = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Xi(e, 0), pr(e, a, 0, !0);
          break;
        }
        e: {
          switch (((u = e), (h = c), h)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              pr(u, a, jn, !hr);
              break e;
            case 2:
              fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((a & 62914560) === a && ((c = cd + 300 - rn()), 10 < c)) {
            if ((pr(u, a, jn, !hr), na(u, 0, !0) !== 0)) break e;
            u.timeoutHandle = mp(
              Vy.bind(null, u, s, fn, ho, od, a, jn, ni, Qi, hr, h, 2, -0, 0),
              c
            );
            break e;
          }
          Vy(u, s, fn, ho, od, a, jn, ni, Qi, hr, h, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ua(e);
  }
  function Vy(e, a, s, u, c, h, p, b, O, L, P, Q, H, Y) {
    if (
      ((e.timeoutHandle = -1),
      (Q = a.subtreeFlags),
      (Q & 8192 || (Q & 16785408) === 16785408) &&
        ((_l = { stylesheets: null, count: 0, unsuspend: oS }), Ry(a), (Q = fS()), Q !== null))
    ) {
      (e.cancelPendingCommit = Q($y.bind(null, e, a, h, s, u, c, p, b, O, P, 1, H, Y))),
        pr(e, h, p, !L);
      return;
    }
    $y(e, a, h, s, u, c, p, b, O);
  }
  function M1(e) {
    for (var a = e; ; ) {
      var s = a.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        a.flags & 16384 &&
        ((s = a.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var u = 0; u < s.length; u++) {
          var c = s[u],
            h = c.getSnapshot;
          c = c.value;
          try {
            if (!hn(h(), c)) return !1;
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
  function pr(e, a, s, u) {
    (a &= ~ud),
      (a &= ~ni),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      u && (e.warmLanes |= a),
      (u = e.expirationTimes);
    for (var c = a; 0 < c; ) {
      var h = 31 - rt(c),
        p = 1 << h;
      (u[h] = -1), (c &= ~p);
    }
    s !== 0 && Vr(e, s, a);
  }
  function mo() {
    return (tt & 6) === 0 ? (ml(0), !1) : !0;
  }
  function md() {
    if (Ze !== null) {
      if (nt === 0) var e = Ze.return;
      else (e = Ze), (Ma = Wr = null), Af(e), (Zi = null), (rl = 0), (e = Ze);
      for (; e !== null; ) by(e.alternate, e), (e = e.return);
      Ze = null;
    }
  }
  function Xi(e, a) {
    var s = e.timeoutHandle;
    s !== -1 && ((e.timeoutHandle = -1), G1(s)),
      (s = e.cancelPendingCommit),
      s !== null && ((e.cancelPendingCommit = null), s()),
      md(),
      (ft = e),
      (Ze = s = Ea(e.current, null)),
      (Pe = a),
      (nt = 0),
      (pn = null),
      (hr = !1),
      ($i = xa(e, a)),
      (ld = !1),
      (Qi = jn = ud = ni = mr = vt = 0),
      (fn = dl = null),
      (od = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= a; 0 < u; ) {
        var c = 31 - rt(u),
          h = 1 << c;
        (a |= e[c]), (u &= ~h);
      }
    return (Ua = a), zu(), s;
  }
  function Yy(e, a) {
    (Ve = null),
      (V.H = eo),
      a === Ks || a === Fu
        ? ((a = rg()), (nt = 3))
        : a === tg
          ? ((a = rg()), (nt = 4))
          : (nt =
              a === iy
                ? 8
                : a !== null && typeof a == 'object' && typeof a.then == 'function'
                  ? 6
                  : 1),
      (pn = a),
      Ze === null && ((vt = 1), io(e, Nn(a, e.current)));
  }
  function qy() {
    var e = V.H;
    return (V.H = eo), e === null ? eo : e;
  }
  function Zy() {
    var e = V.A;
    return (V.A = C1), e;
  }
  function gd() {
    (vt = 4),
      hr || ((Pe & 4194048) !== Pe && Rn.current !== null) || ($i = !0),
      ((mr & 134217727) === 0 && (ni & 134217727) === 0) || ft === null || pr(ft, Pe, jn, !1);
  }
  function yd(e, a, s) {
    var u = tt;
    tt |= 2;
    var c = qy(),
      h = Zy();
    (ft !== e || Pe !== a) && ((ho = null), Xi(e, a)), (a = !1);
    var p = vt;
    e: do
      try {
        if (nt !== 0 && Ze !== null) {
          var b = Ze,
            O = pn;
          switch (nt) {
            case 8:
              md(), (p = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rn.current === null && (a = !0);
              var L = nt;
              if (((nt = 0), (pn = null), Ii(e, b, O, L), s && $i)) {
                p = 0;
                break e;
              }
              break;
            default:
              (L = nt), (nt = 0), (pn = null), Ii(e, b, O, L);
          }
        }
        N1(), (p = vt);
        break;
      } catch (P) {
        Yy(e, P);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (Ma = Wr = null),
      (tt = u),
      (V.H = c),
      (V.A = h),
      Ze === null && ((ft = null), (Pe = 0), zu()),
      p
    );
  }
  function N1() {
    for (; Ze !== null; ) Fy(Ze);
  }
  function D1(e, a) {
    var s = tt;
    tt |= 2;
    var u = qy(),
      c = Zy();
    ft !== e || Pe !== a ? ((ho = null), (fo = rn() + 500), Xi(e, a)) : ($i = xa(e, a));
    e: do
      try {
        if (nt !== 0 && Ze !== null) {
          a = Ze;
          var h = pn;
          t: switch (nt) {
            case 1:
              (nt = 0), (pn = null), Ii(e, a, h, 1);
              break;
            case 2:
            case 9:
              if (ng(h)) {
                (nt = 0), (pn = null), Py(a);
                break;
              }
              (a = function () {
                (nt !== 2 && nt !== 9) || ft !== e || (nt = 7), ua(e);
              }),
                h.then(a, a);
              break e;
            case 3:
              nt = 7;
              break e;
            case 4:
              nt = 5;
              break e;
            case 7:
              ng(h) ? ((nt = 0), (pn = null), Py(a)) : ((nt = 0), (pn = null), Ii(e, a, h, 7));
              break;
            case 5:
              var p = null;
              switch (Ze.tag) {
                case 26:
                  p = Ze.memoizedState;
                case 5:
                case 27:
                  var b = Ze;
                  if (!p || Cp(p)) {
                    (nt = 0), (pn = null);
                    var O = b.sibling;
                    if (O !== null) Ze = O;
                    else {
                      var L = b.return;
                      L !== null ? ((Ze = L), go(L)) : (Ze = null);
                    }
                    break t;
                  }
              }
              (nt = 0), (pn = null), Ii(e, a, h, 5);
              break;
            case 6:
              (nt = 0), (pn = null), Ii(e, a, h, 6);
              break;
            case 8:
              md(), (vt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        A1();
        break;
      } catch (P) {
        Yy(e, P);
      }
    while (!0);
    return (
      (Ma = Wr = null),
      (V.H = u),
      (V.A = c),
      (tt = s),
      Ze !== null ? 0 : ((ft = null), (Pe = 0), zu(), vt)
    );
  }
  function A1() {
    for (; Ze !== null && !vi(); ) Fy(Ze);
  }
  function Fy(e) {
    var a = py(e.alternate, e, Ua);
    (e.memoizedProps = e.pendingProps), a === null ? go(e) : (Ze = a);
  }
  function Py(e) {
    var a = e,
      s = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = fy(s, a, a.pendingProps, a.type, void 0, Pe);
        break;
      case 11:
        a = fy(s, a, a.pendingProps, a.type.render, a.ref, Pe);
        break;
      case 5:
        Af(a);
      default:
        by(s, a), (a = Ze = Gm(a, Ua)), (a = py(s, a, Ua));
    }
    (e.memoizedProps = e.pendingProps), a === null ? go(e) : (Ze = a);
  }
  function Ii(e, a, s, u) {
    (Ma = Wr = null), Af(a), (Zi = null), (rl = 0);
    var c = a.return;
    try {
      if (_1(e, c, a, s, Pe)) {
        (vt = 1), io(e, Nn(s, e.current)), (Ze = null);
        return;
      }
    } catch (h) {
      if (c !== null) throw ((Ze = c), h);
      (vt = 1), io(e, Nn(s, e.current)), (Ze = null);
      return;
    }
    a.flags & 32768
      ? (Xe || u === 1
          ? (e = !0)
          : $i || (Pe & 536870912) !== 0
            ? (e = !1)
            : ((hr = e = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = Rn.current), u !== null && u.tag === 13 && (u.flags |= 16384))),
        Gy(a, e))
      : go(a);
  }
  function go(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        Gy(a, hr);
        return;
      }
      e = a.return;
      var s = x1(a.alternate, a, Ua);
      if (s !== null) {
        Ze = s;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        Ze = a;
        return;
      }
      Ze = a = e;
    } while (a !== null);
    vt === 0 && (vt = 5);
  }
  function Gy(e, a) {
    do {
      var s = w1(e.alternate, e);
      if (s !== null) {
        (s.flags &= 32767), (Ze = s);
        return;
      }
      if (
        ((s = e.return),
        s !== null && ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !a && ((e = e.sibling), e !== null))
      ) {
        Ze = e;
        return;
      }
      Ze = e = s;
    } while (e !== null);
    (vt = 6), (Ze = null);
  }
  function $y(e, a, s, u, c, h, p, b, O) {
    e.cancelPendingCommit = null;
    do yo();
    while (Vt !== 0);
    if ((tt & 6) !== 0) throw Error(i(327));
    if (a !== null) {
      if (a === e.current) throw Error(i(177));
      if (
        ((h = a.lanes | a.childLanes),
        (h |= sf),
        dn(e, s, h, p, b, O),
        e === ft && ((Ze = ft = null), (Pe = 0)),
        (Ki = a),
        (yr = e),
        (Wi = s),
        (fd = h),
        (dd = c),
        (Ly = u),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            z1(B, function () {
              return Iy(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (u = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = V.T), (V.T = null), (c = J.p), (J.p = 2), (p = tt), (tt |= 4);
        try {
          O1(e, a, s);
        } finally {
          (tt = p), (J.p = c), (V.T = u);
        }
      }
      (Vt = 1), Qy(), Ky(), Wy();
    }
  }
  function Qy() {
    if (Vt === 1) {
      Vt = 0;
      var e = yr,
        a = Ki,
        s = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || s) {
        (s = V.T), (V.T = null);
        var u = J.p;
        J.p = 2;
        var c = tt;
        tt |= 4;
        try {
          Dy(a, e);
          var h = Md,
            p = Um(e.containerInfo),
            b = h.focusedElem,
            O = h.selectionRange;
          if (p !== b && b && b.ownerDocument && zm(b.ownerDocument.documentElement, b)) {
            if (O !== null && ef(b)) {
              var L = O.start,
                P = O.end;
              if ((P === void 0 && (P = L), 'selectionStart' in b))
                (b.selectionStart = L), (b.selectionEnd = Math.min(P, b.value.length));
              else {
                var Q = b.ownerDocument || document,
                  H = (Q && Q.defaultView) || window;
                if (H.getSelection) {
                  var Y = H.getSelection(),
                    Te = b.textContent.length,
                    Oe = Math.min(O.start, Te),
                    lt = O.end === void 0 ? Oe : Math.min(O.end, Te);
                  !Y.extend && Oe > lt && ((p = lt), (lt = Oe), (Oe = p));
                  var z = jm(b, Oe),
                    D = jm(b, lt);
                  if (
                    z &&
                    D &&
                    (Y.rangeCount !== 1 ||
                      Y.anchorNode !== z.node ||
                      Y.anchorOffset !== z.offset ||
                      Y.focusNode !== D.node ||
                      Y.focusOffset !== D.offset)
                  ) {
                    var U = Q.createRange();
                    U.setStart(z.node, z.offset),
                      Y.removeAllRanges(),
                      Oe > lt
                        ? (Y.addRange(U), Y.extend(D.node, D.offset))
                        : (U.setEnd(D.node, D.offset), Y.addRange(U));
                  }
                }
              }
            }
            for (Q = [], Y = b; (Y = Y.parentNode); )
              Y.nodeType === 1 && Q.push({ element: Y, left: Y.scrollLeft, top: Y.scrollTop });
            for (typeof b.focus == 'function' && b.focus(), b = 0; b < Q.length; b++) {
              var G = Q[b];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          (Mo = !!Td), (Md = Td = null);
        } finally {
          (tt = c), (J.p = u), (V.T = s);
        }
      }
      (e.current = a), (Vt = 2);
    }
  }
  function Ky() {
    if (Vt === 2) {
      Vt = 0;
      var e = yr,
        a = Ki,
        s = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || s) {
        (s = V.T), (V.T = null);
        var u = J.p;
        J.p = 2;
        var c = tt;
        tt |= 4;
        try {
          Cy(e, a.alternate, a);
        } finally {
          (tt = c), (J.p = u), (V.T = s);
        }
      }
      Vt = 3;
    }
  }
  function Wy() {
    if (Vt === 4 || Vt === 3) {
      (Vt = 0), Ds();
      var e = yr,
        a = Ki,
        s = Wi,
        u = Ly;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Vt = 5)
        : ((Vt = 0), (Ki = yr = null), Xy(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (gr = null),
        $e(s),
        (a = a.stateNode),
        De && typeof De.onCommitFiberRoot == 'function')
      )
        try {
          De.onCommitFiberRoot(ge, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (a = V.T), (c = J.p), (J.p = 2), (V.T = null);
        try {
          for (var h = e.onRecoverableError, p = 0; p < u.length; p++) {
            var b = u[p];
            h(b.value, { componentStack: b.stack });
          }
        } finally {
          (V.T = a), (J.p = c);
        }
      }
      (Wi & 3) !== 0 && yo(),
        ua(e),
        (c = e.pendingLanes),
        (s & 4194090) !== 0 && (c & 42) !== 0 ? (e === hd ? hl++ : ((hl = 0), (hd = e))) : (hl = 0),
        ml(0);
    }
  }
  function Xy(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), $s(a)));
  }
  function yo(e) {
    return Qy(), Ky(), Wy(), Iy();
  }
  function Iy() {
    if (Vt !== 5) return !1;
    var e = yr,
      a = fd;
    fd = 0;
    var s = $e(Wi),
      u = V.T,
      c = J.p;
    try {
      (J.p = 32 > s ? 32 : s), (V.T = null), (s = dd), (dd = null);
      var h = yr,
        p = Wi;
      if (((Vt = 0), (Ki = yr = null), (Wi = 0), (tt & 6) !== 0)) throw Error(i(331));
      var b = tt;
      if (
        ((tt |= 4),
        zy(h.current),
        ky(h, h.current, p, s),
        (tt = b),
        ml(0, !1),
        De && typeof De.onPostCommitFiberRoot == 'function')
      )
        try {
          De.onPostCommitFiberRoot(ge, h);
        } catch {}
      return !0;
    } finally {
      (J.p = c), (V.T = u), Xy(e, a);
    }
  }
  function Jy(e, a, s) {
    (a = Nn(s, a)), (a = Pf(e.stateNode, a, 2)), (e = sr(e, a, 2)), e !== null && (sn(e, 2), ua(e));
  }
  function ct(e, a, s) {
    if (e.tag === 3) Jy(e, e, s);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Jy(a, e, s);
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == 'function' ||
            (typeof u.componentDidCatch == 'function' && (gr === null || !gr.has(u)))
          ) {
            (e = Nn(s, e)),
              (s = ay(2)),
              (u = sr(a, s, 2)),
              u !== null && (ry(s, u, a, e), sn(u, 2), ua(u));
            break;
          }
        }
        a = a.return;
      }
  }
  function pd(e, a, s) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new T1();
      var c = new Set();
      u.set(a, c);
    } else (c = u.get(a)), c === void 0 && ((c = new Set()), u.set(a, c));
    c.has(s) || ((ld = !0), c.add(s), (e = k1.bind(null, e, a, s)), a.then(e, e));
  }
  function k1(e, a, s) {
    var u = e.pingCache;
    u !== null && u.delete(a),
      (e.pingedLanes |= e.suspendedLanes & s),
      (e.warmLanes &= ~s),
      ft === e &&
        (Pe & s) === s &&
        (vt === 4 || (vt === 3 && (Pe & 62914560) === Pe && 300 > rn() - cd)
          ? (tt & 2) === 0 && Xi(e, 0)
          : (ud |= s),
        Qi === Pe && (Qi = 0)),
      ua(e);
  }
  function ep(e, a) {
    a === 0 && (a = ot()), (e = Ri(e, a)), e !== null && (sn(e, a), ua(e));
  }
  function R1(e) {
    var a = e.memoizedState,
      s = 0;
    a !== null && (s = a.retryLane), ep(e, s);
  }
  function j1(e, a) {
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
    u !== null && u.delete(a), ep(e, s);
  }
  function z1(e, a) {
    return Lr(e, a);
  }
  var po = null,
    Ji = null,
    vd = !1,
    vo = !1,
    bd = !1,
    ai = 0;
  function ua(e) {
    e !== Ji && e.next === null && (Ji === null ? (po = Ji = e) : (Ji = Ji.next = e)),
      (vo = !0),
      vd || ((vd = !0), L1());
  }
  function ml(e, a) {
    if (!bd && vo) {
      bd = !0;
      do
        for (var s = !1, u = po; u !== null; ) {
          if (e !== 0) {
            var c = u.pendingLanes;
            if (c === 0) var h = 0;
            else {
              var p = u.suspendedLanes,
                b = u.pingedLanes;
              (h = (1 << (31 - rt(42 | e) + 1)) - 1),
                (h &= c & ~(p & ~b)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((s = !0), rp(u, h));
          } else
            (h = Pe),
              (h = na(
                u,
                u === ft ? h : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (h & 3) === 0 || xa(u, h) || ((s = !0), rp(u, h));
          u = u.next;
        }
      while (s);
      bd = !1;
    }
  }
  function U1() {
    tp();
  }
  function tp() {
    vo = vd = !1;
    var e = 0;
    ai !== 0 && (P1() && (e = ai), (ai = 0));
    for (var a = rn(), s = null, u = po; u !== null; ) {
      var c = u.next,
        h = np(u, a);
      h === 0
        ? ((u.next = null), s === null ? (po = c) : (s.next = c), c === null && (Ji = s))
        : ((s = u), (e !== 0 || (h & 3) !== 0) && (vo = !0)),
        (u = c);
    }
    ml(e);
  }
  function np(e, a) {
    for (
      var s = e.suspendedLanes,
        u = e.pingedLanes,
        c = e.expirationTimes,
        h = e.pendingLanes & -62914561;
      0 < h;

    ) {
      var p = 31 - rt(h),
        b = 1 << p,
        O = c[p];
      O === -1
        ? ((b & s) === 0 || (b & u) !== 0) && (c[p] = Hr(b, a))
        : O <= a && (e.expiredLanes |= b),
        (h &= ~b);
    }
    if (
      ((a = ft),
      (s = Pe),
      (s = na(e, e === a ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (u = e.callbackNode),
      s === 0 || (e === a && (nt === 2 || nt === 9)) || e.cancelPendingCommit !== null)
    )
      return u !== null && u !== null && Sa(u), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((s & 3) === 0 || xa(e, s)) {
      if (((a = s & -s), a === e.callbackPriority)) return a;
      switch ((u !== null && Sa(u), $e(s))) {
        case 2:
        case 8:
          s = C;
          break;
        case 32:
          s = B;
          break;
        case 268435456:
          s = se;
          break;
        default:
          s = B;
      }
      return (
        (u = ap.bind(null, e)), (s = Lr(s, u)), (e.callbackPriority = a), (e.callbackNode = s), a
      );
    }
    return u !== null && u !== null && Sa(u), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function ap(e, a) {
    if (Vt !== 0 && Vt !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var s = e.callbackNode;
    if (yo() && e.callbackNode !== s) return null;
    var u = Pe;
    return (
      (u = na(e, e === ft ? u : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      u === 0
        ? null
        : (Hy(e, u, a),
          np(e, rn()),
          e.callbackNode != null && e.callbackNode === s ? ap.bind(null, e) : null)
    );
  }
  function rp(e, a) {
    if (yo()) return null;
    Hy(e, a, !0);
  }
  function L1() {
    $1(function () {
      (tt & 6) !== 0 ? Lr(Br, U1) : tp();
    });
  }
  function _d() {
    return ai === 0 && (ai = Le()), ai;
  }
  function ip(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Mu('' + e);
  }
  function sp(e, a) {
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
  function B1(e, a, s, u, c) {
    if (a === 'submit' && s && s.stateNode === c) {
      var h = ip((c[Rt] || null).action),
        p = u.submitter;
      p &&
        ((a = (a = p[Rt] || null) ? ip(a.formAction) : p.getAttribute('formAction')),
        a !== null && ((h = a), (p = null)));
      var b = new ku('action', 'action', null, u, c);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (ai !== 0) {
                  var O = p ? sp(c, p) : new FormData(c);
                  Vf(s, { pending: !0, data: O, method: c.method, action: h }, null, O);
                }
              } else
                typeof h == 'function' &&
                  (b.preventDefault(),
                  (O = p ? sp(c, p) : new FormData(c)),
                  Vf(s, { pending: !0, data: O, method: c.method, action: h }, h, O));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Sd = 0; Sd < rf.length; Sd++) {
    var xd = rf[Sd],
      H1 = xd.toLowerCase(),
      V1 = xd[0].toUpperCase() + xd.slice(1);
    Bn(H1, 'on' + V1);
  }
  Bn(Hm, 'onAnimationEnd'),
    Bn(Vm, 'onAnimationIteration'),
    Bn(Ym, 'onAnimationStart'),
    Bn('dblclick', 'onDoubleClick'),
    Bn('focusin', 'onFocus'),
    Bn('focusout', 'onBlur'),
    Bn(a1, 'onTransitionRun'),
    Bn(r1, 'onTransitionStart'),
    Bn(i1, 'onTransitionCancel'),
    Bn(qm, 'onTransitionEnd'),
    wi('onMouseEnter', ['mouseout', 'mouseover']),
    wi('onMouseLeave', ['mouseout', 'mouseover']),
    wi('onPointerEnter', ['pointerout', 'pointerover']),
    wi('onPointerLeave', ['pointerout', 'pointerover']),
    Yr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Yr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Yr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Yr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Yr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Yr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var gl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Y1 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(gl)
    );
  function lp(e, a) {
    a = (a & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var u = e[s],
        c = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (a)
          for (var p = u.length - 1; 0 <= p; p--) {
            var b = u[p],
              O = b.instance,
              L = b.currentTarget;
            if (((b = b.listener), O !== h && c.isPropagationStopped())) break e;
            (h = b), (c.currentTarget = L);
            try {
              h(c);
            } catch (P) {
              ro(P);
            }
            (c.currentTarget = null), (h = O);
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((b = u[p]),
              (O = b.instance),
              (L = b.currentTarget),
              (b = b.listener),
              O !== h && c.isPropagationStopped())
            )
              break e;
            (h = b), (c.currentTarget = L);
            try {
              h(c);
            } catch (P) {
              ro(P);
            }
            (c.currentTarget = null), (h = O);
          }
      }
    }
  }
  function Fe(e, a) {
    var s = a[jc];
    s === void 0 && (s = a[jc] = new Set());
    var u = e + '__bubble';
    s.has(u) || (up(a, e, 2, !1), s.add(u));
  }
  function wd(e, a, s) {
    var u = 0;
    a && (u |= 4), up(s, e, u, a);
  }
  var bo = '_reactListening' + Math.random().toString(36).slice(2);
  function Od(e) {
    if (!e[bo]) {
      (e[bo] = !0),
        tm.forEach(function (s) {
          s !== 'selectionchange' && (Y1.has(s) || wd(s, !1, e), wd(s, !0, e));
        });
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[bo] || ((a[bo] = !0), wd('selectionchange', !1, a));
    }
  }
  function up(e, a, s, u) {
    switch (kp(a)) {
      case 2:
        var c = mS;
        break;
      case 8:
        c = gS;
        break;
      default:
        c = Bd;
    }
    (s = c.bind(null, a, s, e)),
      (c = void 0),
      !Pc || (a !== 'touchstart' && a !== 'touchmove' && a !== 'wheel') || (c = !0),
      u
        ? c !== void 0
          ? e.addEventListener(a, s, { capture: !0, passive: c })
          : e.addEventListener(a, s, !0)
        : c !== void 0
          ? e.addEventListener(a, s, { passive: c })
          : e.addEventListener(a, s, !1);
  }
  function Ed(e, a, s, u, c) {
    var h = u;
    if ((a & 1) === 0 && (a & 2) === 0 && u !== null)
      e: for (;;) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var b = u.stateNode.containerInfo;
          if (b === c) break;
          if (p === 4)
            for (p = u.return; p !== null; ) {
              var O = p.tag;
              if ((O === 3 || O === 4) && p.stateNode.containerInfo === c) return;
              p = p.return;
            }
          for (; b !== null; ) {
            if (((p = _i(b)), p === null)) return;
            if (((O = p.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              u = h = p;
              continue e;
            }
            b = b.parentNode;
          }
        }
        u = u.return;
      }
    gm(function () {
      var L = h,
        P = Zc(s),
        Q = [];
      e: {
        var H = Zm.get(e);
        if (H !== void 0) {
          var Y = ku,
            Te = e;
          switch (e) {
            case 'keypress':
              if (Du(s) === 0) break e;
            case 'keydown':
            case 'keyup':
              Y = z_;
              break;
            case 'focusin':
              (Te = 'focus'), (Y = Kc);
              break;
            case 'focusout':
              (Te = 'blur'), (Y = Kc);
              break;
            case 'beforeblur':
            case 'afterblur':
              Y = Kc;
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
              Y = vm;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Y = w_;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Y = B_;
              break;
            case Hm:
            case Vm:
            case Ym:
              Y = C_;
              break;
            case qm:
              Y = V_;
              break;
            case 'scroll':
            case 'scrollend':
              Y = S_;
              break;
            case 'wheel':
              Y = q_;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Y = M_;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Y = _m;
              break;
            case 'toggle':
            case 'beforetoggle':
              Y = F_;
          }
          var Oe = (a & 4) !== 0,
            lt = !Oe && (e === 'scroll' || e === 'scrollend'),
            z = Oe ? (H !== null ? H + 'Capture' : null) : H;
          Oe = [];
          for (var D = L, U; D !== null; ) {
            var G = D;
            if (
              ((U = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                U === null ||
                z === null ||
                ((G = js(D, z)), G != null && Oe.push(yl(D, G, U))),
              lt)
            )
              break;
            D = D.return;
          }
          0 < Oe.length && ((H = new Y(H, Te, null, s, P)), Q.push({ event: H, listeners: Oe }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((H = e === 'mouseover' || e === 'pointerover'),
            (Y = e === 'mouseout' || e === 'pointerout'),
            H && s !== qc && (Te = s.relatedTarget || s.fromElement) && (_i(Te) || Te[bi]))
          )
            break e;
          if (
            (Y || H) &&
            ((H =
              P.window === P
                ? P
                : (H = P.ownerDocument)
                  ? H.defaultView || H.parentWindow
                  : window),
            Y
              ? ((Te = s.relatedTarget || s.toElement),
                (Y = L),
                (Te = Te ? _i(Te) : null),
                Te !== null &&
                  ((lt = o(Te)), (Oe = Te.tag), Te !== lt || (Oe !== 5 && Oe !== 27 && Oe !== 6)) &&
                  (Te = null))
              : ((Y = null), (Te = L)),
            Y !== Te)
          ) {
            if (
              ((Oe = vm),
              (G = 'onMouseLeave'),
              (z = 'onMouseEnter'),
              (D = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Oe = _m), (G = 'onPointerLeave'), (z = 'onPointerEnter'), (D = 'pointer')),
              (lt = Y == null ? H : Rs(Y)),
              (U = Te == null ? H : Rs(Te)),
              (H = new Oe(G, D + 'leave', Y, s, P)),
              (H.target = lt),
              (H.relatedTarget = U),
              (G = null),
              _i(P) === L &&
                ((Oe = new Oe(z, D + 'enter', Te, s, P)),
                (Oe.target = U),
                (Oe.relatedTarget = lt),
                (G = Oe)),
              (lt = G),
              Y && Te)
            )
              t: {
                for (Oe = Y, z = Te, D = 0, U = Oe; U; U = es(U)) D++;
                for (U = 0, G = z; G; G = es(G)) U++;
                for (; 0 < D - U; ) (Oe = es(Oe)), D--;
                for (; 0 < U - D; ) (z = es(z)), U--;
                for (; D--; ) {
                  if (Oe === z || (z !== null && Oe === z.alternate)) break t;
                  (Oe = es(Oe)), (z = es(z));
                }
                Oe = null;
              }
            else Oe = null;
            Y !== null && op(Q, H, Y, Oe, !1), Te !== null && lt !== null && op(Q, lt, Te, Oe, !0);
          }
        }
        e: {
          if (
            ((H = L ? Rs(L) : window),
            (Y = H.nodeName && H.nodeName.toLowerCase()),
            Y === 'select' || (Y === 'input' && H.type === 'file'))
          )
            var me = Mm;
          else if (Cm(H))
            if (Nm) me = e1;
            else {
              me = I_;
              var Ye = X_;
            }
          else
            (Y = H.nodeName),
              !Y || Y.toLowerCase() !== 'input' || (H.type !== 'checkbox' && H.type !== 'radio')
                ? L && Yc(L.elementType) && (me = Mm)
                : (me = J_);
          if (me && (me = me(e, L))) {
            Tm(Q, me, s, P);
            break e;
          }
          Ye && Ye(e, H, L),
            e === 'focusout' &&
              L &&
              H.type === 'number' &&
              L.memoizedProps.value != null &&
              Vc(H, 'number', H.value);
        }
        switch (((Ye = L ? Rs(L) : window), e)) {
          case 'focusin':
            (Cm(Ye) || Ye.contentEditable === 'true') && ((Di = Ye), (tf = L), (qs = null));
            break;
          case 'focusout':
            qs = tf = Di = null;
            break;
          case 'mousedown':
            nf = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (nf = !1), Lm(Q, s, P);
            break;
          case 'selectionchange':
            if (n1) break;
          case 'keydown':
          case 'keyup':
            Lm(Q, s, P);
        }
        var be;
        if (Xc)
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
          Ni
            ? Om(e, s) && (Ee = 'onCompositionEnd')
            : e === 'keydown' && s.keyCode === 229 && (Ee = 'onCompositionStart');
        Ee &&
          (Sm &&
            s.locale !== 'ko' &&
            (Ni || Ee !== 'onCompositionStart'
              ? Ee === 'onCompositionEnd' && Ni && (be = ym())
              : ((nr = P), (Gc = 'value' in nr ? nr.value : nr.textContent), (Ni = !0))),
          (Ye = _o(L, Ee)),
          0 < Ye.length &&
            ((Ee = new bm(Ee, e, null, s, P)),
            Q.push({ event: Ee, listeners: Ye }),
            be ? (Ee.data = be) : ((be = Em(s)), be !== null && (Ee.data = be)))),
          (be = G_ ? $_(e, s) : Q_(e, s)) &&
            ((Ee = _o(L, 'onBeforeInput')),
            0 < Ee.length &&
              ((Ye = new bm('onBeforeInput', 'beforeinput', null, s, P)),
              Q.push({ event: Ye, listeners: Ee }),
              (Ye.data = be))),
          B1(Q, e, L, s, P);
      }
      lp(Q, a);
    });
  }
  function yl(e, a, s) {
    return { instance: e, listener: a, currentTarget: s };
  }
  function _o(e, a) {
    for (var s = a + 'Capture', u = []; e !== null; ) {
      var c = e,
        h = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          h === null ||
          ((c = js(e, s)),
          c != null && u.unshift(yl(e, c, h)),
          (c = js(e, a)),
          c != null && u.push(yl(e, c, h))),
        e.tag === 3)
      )
        return u;
      e = e.return;
    }
    return [];
  }
  function es(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function op(e, a, s, u, c) {
    for (var h = a._reactName, p = []; s !== null && s !== u; ) {
      var b = s,
        O = b.alternate,
        L = b.stateNode;
      if (((b = b.tag), O !== null && O === u)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        L === null ||
        ((O = L),
        c
          ? ((L = js(s, h)), L != null && p.unshift(yl(s, L, O)))
          : c || ((L = js(s, h)), L != null && p.push(yl(s, L, O)))),
        (s = s.return);
    }
    p.length !== 0 && e.push({ event: a, listeners: p });
  }
  var q1 = /\r\n?/g,
    Z1 = /\u0000|\uFFFD/g;
  function cp(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        q1,
        `
`
      )
      .replace(Z1, '');
  }
  function fp(e, a) {
    return (a = cp(a)), cp(e) === a;
  }
  function So() {}
  function st(e, a, s, u, c, h) {
    switch (s) {
      case 'children':
        typeof u == 'string'
          ? a === 'body' || (a === 'textarea' && u === '') || Ci(e, u)
          : (typeof u == 'number' || typeof u == 'bigint') && a !== 'body' && Ci(e, '' + u);
        break;
      case 'className':
        Eu(e, 'class', u);
        break;
      case 'tabIndex':
        Eu(e, 'tabindex', u);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Eu(e, s, u);
        break;
      case 'style':
        hm(e, u, h);
        break;
      case 'data':
        if (a !== 'object') {
          Eu(e, 'data', u);
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
        (u = Mu('' + u)), e.setAttribute(s, u);
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
          typeof h == 'function' &&
            (s === 'formAction'
              ? (a !== 'input' && st(e, a, 'name', c.name, c, null),
                st(e, a, 'formEncType', c.formEncType, c, null),
                st(e, a, 'formMethod', c.formMethod, c, null),
                st(e, a, 'formTarget', c.formTarget, c, null))
              : (st(e, a, 'encType', c.encType, c, null),
                st(e, a, 'method', c.method, c, null),
                st(e, a, 'target', c.target, c, null)));
        if (u == null || typeof u == 'symbol' || typeof u == 'boolean') {
          e.removeAttribute(s);
          break;
        }
        (u = Mu('' + u)), e.setAttribute(s, u);
        break;
      case 'onClick':
        u != null && (e.onclick = So);
        break;
      case 'onScroll':
        u != null && Fe('scroll', e);
        break;
      case 'onScrollEnd':
        u != null && Fe('scrollend', e);
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
        (s = Mu('' + u)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', s);
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
        Fe('beforetoggle', e), Fe('toggle', e), Ou(e, 'popover', u);
        break;
      case 'xlinkActuate':
        wa(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', u);
        break;
      case 'xlinkArcrole':
        wa(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', u);
        break;
      case 'xlinkRole':
        wa(e, 'http://www.w3.org/1999/xlink', 'xlink:role', u);
        break;
      case 'xlinkShow':
        wa(e, 'http://www.w3.org/1999/xlink', 'xlink:show', u);
        break;
      case 'xlinkTitle':
        wa(e, 'http://www.w3.org/1999/xlink', 'xlink:title', u);
        break;
      case 'xlinkType':
        wa(e, 'http://www.w3.org/1999/xlink', 'xlink:type', u);
        break;
      case 'xmlBase':
        wa(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', u);
        break;
      case 'xmlLang':
        wa(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', u);
        break;
      case 'xmlSpace':
        wa(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', u);
        break;
      case 'is':
        Ou(e, 'is', u);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < s.length) || (s[0] !== 'o' && s[0] !== 'O') || (s[1] !== 'n' && s[1] !== 'N')) &&
          ((s = b_.get(s) || s), Ou(e, s, u));
    }
  }
  function Cd(e, a, s, u, c, h) {
    switch (s) {
      case 'style':
        hm(e, u, h);
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
          ? Ci(e, u)
          : (typeof u == 'number' || typeof u == 'bigint') && Ci(e, '' + u);
        break;
      case 'onScroll':
        u != null && Fe('scroll', e);
        break;
      case 'onScrollEnd':
        u != null && Fe('scrollend', e);
        break;
      case 'onClick':
        u != null && (e.onclick = So);
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
        if (!nm.hasOwnProperty(s))
          e: {
            if (
              s[0] === 'o' &&
              s[1] === 'n' &&
              ((c = s.endsWith('Capture')),
              (a = s.slice(2, c ? s.length - 7 : void 0)),
              (h = e[Rt] || null),
              (h = h != null ? h[s] : null),
              typeof h == 'function' && e.removeEventListener(a, h, c),
              typeof u == 'function')
            ) {
              typeof h != 'function' &&
                h !== null &&
                (s in e ? (e[s] = null) : e.hasAttribute(s) && e.removeAttribute(s)),
                e.addEventListener(a, u, c);
              break e;
            }
            s in e ? (e[s] = u) : u === !0 ? e.setAttribute(s, '') : Ou(e, s, u);
          }
    }
  }
  function Yt(e, a, s) {
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
        Fe('error', e), Fe('load', e);
        var u = !1,
          c = !1,
          h;
        for (h in s)
          if (s.hasOwnProperty(h)) {
            var p = s[h];
            if (p != null)
              switch (h) {
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
                  st(e, a, h, p, s, null);
              }
          }
        c && st(e, a, 'srcSet', s.srcSet, s, null), u && st(e, a, 'src', s.src, s, null);
        return;
      case 'input':
        Fe('invalid', e);
        var b = (h = p = c = null),
          O = null,
          L = null;
        for (u in s)
          if (s.hasOwnProperty(u)) {
            var P = s[u];
            if (P != null)
              switch (u) {
                case 'name':
                  c = P;
                  break;
                case 'type':
                  p = P;
                  break;
                case 'checked':
                  O = P;
                  break;
                case 'defaultChecked':
                  L = P;
                  break;
                case 'value':
                  h = P;
                  break;
                case 'defaultValue':
                  b = P;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (P != null) throw Error(i(137, a));
                  break;
                default:
                  st(e, a, u, P, s, null);
              }
          }
        om(e, h, b, O, L, p, c, !1), Cu(e);
        return;
      case 'select':
        Fe('invalid', e), (u = p = h = null);
        for (c in s)
          if (s.hasOwnProperty(c) && ((b = s[c]), b != null))
            switch (c) {
              case 'value':
                h = b;
                break;
              case 'defaultValue':
                p = b;
                break;
              case 'multiple':
                u = b;
              default:
                st(e, a, c, b, s, null);
            }
        (a = h),
          (s = p),
          (e.multiple = !!u),
          a != null ? Ei(e, !!u, a, !1) : s != null && Ei(e, !!u, s, !0);
        return;
      case 'textarea':
        Fe('invalid', e), (h = c = u = null);
        for (p in s)
          if (s.hasOwnProperty(p) && ((b = s[p]), b != null))
            switch (p) {
              case 'value':
                u = b;
                break;
              case 'defaultValue':
                c = b;
                break;
              case 'children':
                h = b;
                break;
              case 'dangerouslySetInnerHTML':
                if (b != null) throw Error(i(91));
                break;
              default:
                st(e, a, p, b, s, null);
            }
        fm(e, u, c, h), Cu(e);
        return;
      case 'option':
        for (O in s)
          if (s.hasOwnProperty(O) && ((u = s[O]), u != null))
            switch (O) {
              case 'selected':
                e.selected = u && typeof u != 'function' && typeof u != 'symbol';
                break;
              default:
                st(e, a, O, u, s, null);
            }
        return;
      case 'dialog':
        Fe('beforetoggle', e), Fe('toggle', e), Fe('cancel', e), Fe('close', e);
        break;
      case 'iframe':
      case 'object':
        Fe('load', e);
        break;
      case 'video':
      case 'audio':
        for (u = 0; u < gl.length; u++) Fe(gl[u], e);
        break;
      case 'image':
        Fe('error', e), Fe('load', e);
        break;
      case 'details':
        Fe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Fe('error', e), Fe('load', e);
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
        for (L in s)
          if (s.hasOwnProperty(L) && ((u = s[L]), u != null))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, a));
              default:
                st(e, a, L, u, s, null);
            }
        return;
      default:
        if (Yc(a)) {
          for (P in s)
            s.hasOwnProperty(P) && ((u = s[P]), u !== void 0 && Cd(e, a, P, u, s, void 0));
          return;
        }
    }
    for (b in s) s.hasOwnProperty(b) && ((u = s[b]), u != null && st(e, a, b, u, s, null));
  }
  function F1(e, a, s, u) {
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
          h = null,
          p = null,
          b = null,
          O = null,
          L = null,
          P = null;
        for (Y in s) {
          var Q = s[Y];
          if (s.hasOwnProperty(Y) && Q != null)
            switch (Y) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                O = Q;
              default:
                u.hasOwnProperty(Y) || st(e, a, Y, null, u, Q);
            }
        }
        for (var H in u) {
          var Y = u[H];
          if (((Q = s[H]), u.hasOwnProperty(H) && (Y != null || Q != null)))
            switch (H) {
              case 'type':
                h = Y;
                break;
              case 'name':
                c = Y;
                break;
              case 'checked':
                L = Y;
                break;
              case 'defaultChecked':
                P = Y;
                break;
              case 'value':
                p = Y;
                break;
              case 'defaultValue':
                b = Y;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Y != null) throw Error(i(137, a));
                break;
              default:
                Y !== Q && st(e, a, H, Y, u, Q);
            }
        }
        Hc(e, p, b, O, L, P, h, c);
        return;
      case 'select':
        Y = p = b = H = null;
        for (h in s)
          if (((O = s[h]), s.hasOwnProperty(h) && O != null))
            switch (h) {
              case 'value':
                break;
              case 'multiple':
                Y = O;
              default:
                u.hasOwnProperty(h) || st(e, a, h, null, u, O);
            }
        for (c in u)
          if (((h = u[c]), (O = s[c]), u.hasOwnProperty(c) && (h != null || O != null)))
            switch (c) {
              case 'value':
                H = h;
                break;
              case 'defaultValue':
                b = h;
                break;
              case 'multiple':
                p = h;
              default:
                h !== O && st(e, a, c, h, u, O);
            }
        (a = b),
          (s = p),
          (u = Y),
          H != null
            ? Ei(e, !!s, H, !1)
            : !!u != !!s && (a != null ? Ei(e, !!s, a, !0) : Ei(e, !!s, s ? [] : '', !1));
        return;
      case 'textarea':
        Y = H = null;
        for (b in s)
          if (((c = s[b]), s.hasOwnProperty(b) && c != null && !u.hasOwnProperty(b)))
            switch (b) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                st(e, a, b, null, u, c);
            }
        for (p in u)
          if (((c = u[p]), (h = s[p]), u.hasOwnProperty(p) && (c != null || h != null)))
            switch (p) {
              case 'value':
                H = c;
                break;
              case 'defaultValue':
                Y = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== h && st(e, a, p, c, u, h);
            }
        cm(e, H, Y);
        return;
      case 'option':
        for (var Te in s)
          if (((H = s[Te]), s.hasOwnProperty(Te) && H != null && !u.hasOwnProperty(Te)))
            switch (Te) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                st(e, a, Te, null, u, H);
            }
        for (O in u)
          if (((H = u[O]), (Y = s[O]), u.hasOwnProperty(O) && H !== Y && (H != null || Y != null)))
            switch (O) {
              case 'selected':
                e.selected = H && typeof H != 'function' && typeof H != 'symbol';
                break;
              default:
                st(e, a, O, H, u, Y);
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
          (H = s[Oe]),
            s.hasOwnProperty(Oe) && H != null && !u.hasOwnProperty(Oe) && st(e, a, Oe, null, u, H);
        for (L in u)
          if (((H = u[L]), (Y = s[L]), u.hasOwnProperty(L) && H !== Y && (H != null || Y != null)))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (H != null) throw Error(i(137, a));
                break;
              default:
                st(e, a, L, H, u, Y);
            }
        return;
      default:
        if (Yc(a)) {
          for (var lt in s)
            (H = s[lt]),
              s.hasOwnProperty(lt) &&
                H !== void 0 &&
                !u.hasOwnProperty(lt) &&
                Cd(e, a, lt, void 0, u, H);
          for (P in u)
            (H = u[P]),
              (Y = s[P]),
              !u.hasOwnProperty(P) ||
                H === Y ||
                (H === void 0 && Y === void 0) ||
                Cd(e, a, P, H, u, Y);
          return;
        }
    }
    for (var z in s)
      (H = s[z]),
        s.hasOwnProperty(z) && H != null && !u.hasOwnProperty(z) && st(e, a, z, null, u, H);
    for (Q in u)
      (H = u[Q]),
        (Y = s[Q]),
        !u.hasOwnProperty(Q) || H === Y || (H == null && Y == null) || st(e, a, Q, H, u, Y);
  }
  var Td = null,
    Md = null;
  function xo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function dp(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function hp(e, a) {
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
  function Nd(e, a) {
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
  var Dd = null;
  function P1() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Dd ? !1 : ((Dd = e), !0)) : ((Dd = null), !1);
  }
  var mp = typeof setTimeout == 'function' ? setTimeout : void 0,
    G1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    gp = typeof Promise == 'function' ? Promise : void 0,
    $1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof gp < 'u'
          ? function (e) {
              return gp.resolve(null).then(e).catch(Q1);
            }
          : mp;
  function Q1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function vr(e) {
    return e === 'head';
  }
  function yp(e, a) {
    var s = a,
      u = 0,
      c = 0;
    do {
      var h = s.nextSibling;
      if ((e.removeChild(s), h && h.nodeType === 8))
        if (((s = h.data), s === '/$')) {
          if (0 < u && 8 > u) {
            s = u;
            var p = e.ownerDocument;
            if ((s & 1 && pl(p.documentElement), s & 2 && pl(p.body), s & 4))
              for (s = p.head, pl(s), p = s.firstChild; p; ) {
                var b = p.nextSibling,
                  O = p.nodeName;
                p[ks] ||
                  O === 'SCRIPT' ||
                  O === 'STYLE' ||
                  (O === 'LINK' && p.rel.toLowerCase() === 'stylesheet') ||
                  s.removeChild(p),
                  (p = b);
              }
          }
          if (c === 0) {
            e.removeChild(h), El(a);
            return;
          }
          c--;
        } else s === '$' || s === '$?' || s === '$!' ? c++ : (u = s.charCodeAt(0) - 48);
      else u = 0;
      s = h;
    } while (s);
    El(a);
  }
  function Ad(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var s = a;
      switch (((a = a.nextSibling), s.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Ad(s), zc(s);
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
  function K1(e, a, s, u) {
    for (; e.nodeType === 1; ) {
      var c = s;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (u) {
        if (!e[ks])
          switch (a) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((h = e.getAttribute('rel')),
                h === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                h !== c.rel ||
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
                ((h = e.getAttribute('src')),
                (h !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  h &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (a === 'input' && e.type === 'hidden') {
        var h = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === h) return e;
      } else return e;
      if (((e = Vn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function W1(e, a, s) {
    if (a === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !s) ||
        ((e = Vn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function kd(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function X1(e, a) {
    var s = e.ownerDocument;
    if (e.data !== '$?' || s.readyState === 'complete') a();
    else {
      var u = function () {
        a(), s.removeEventListener('DOMContentLoaded', u);
      };
      s.addEventListener('DOMContentLoaded', u), (e._reactRetry = u);
    }
  }
  function Vn(e) {
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
  var Rd = null;
  function pp(e) {
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
  function vp(e, a, s) {
    switch (((a = xo(s)), e)) {
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
  function pl(e) {
    for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
    zc(e);
  }
  var zn = new Map(),
    bp = new Set();
  function wo(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var La = J.d;
  J.d = { f: I1, r: J1, D: eS, C: tS, L: nS, m: aS, X: iS, S: rS, M: sS };
  function I1() {
    var e = La.f(),
      a = mo();
    return e || a;
  }
  function J1(e) {
    var a = Si(e);
    a !== null && a.tag === 5 && a.type === 'form' ? Hg(a) : La.r(e);
  }
  var ts = typeof document > 'u' ? null : document;
  function _p(e, a, s) {
    var u = ts;
    if (u && typeof a == 'string' && a) {
      var c = Mn(a);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof s == 'string' && (c += '[crossorigin="' + s + '"]'),
        bp.has(c) ||
          (bp.add(c),
          (e = { rel: e, crossOrigin: s, href: a }),
          u.querySelector(c) === null &&
            ((a = u.createElement('link')), Yt(a, 'link', e), jt(a), u.head.appendChild(a)));
    }
  }
  function eS(e) {
    La.D(e), _p('dns-prefetch', e, null);
  }
  function tS(e, a) {
    La.C(e, a), _p('preconnect', e, a);
  }
  function nS(e, a, s) {
    La.L(e, a, s);
    var u = ts;
    if (u && e && a) {
      var c = 'link[rel="preload"][as="' + Mn(a) + '"]';
      a === 'image' && s && s.imageSrcSet
        ? ((c += '[imagesrcset="' + Mn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == 'string' && (c += '[imagesizes="' + Mn(s.imageSizes) + '"]'))
        : (c += '[href="' + Mn(e) + '"]');
      var h = c;
      switch (a) {
        case 'style':
          h = ns(e);
          break;
        case 'script':
          h = as(e);
      }
      zn.has(h) ||
        ((e = y(
          { rel: 'preload', href: a === 'image' && s && s.imageSrcSet ? void 0 : e, as: a },
          s
        )),
        zn.set(h, e),
        u.querySelector(c) !== null ||
          (a === 'style' && u.querySelector(vl(h))) ||
          (a === 'script' && u.querySelector(bl(h))) ||
          ((a = u.createElement('link')), Yt(a, 'link', e), jt(a), u.head.appendChild(a)));
    }
  }
  function aS(e, a) {
    La.m(e, a);
    var s = ts;
    if (s && e) {
      var u = a && typeof a.as == 'string' ? a.as : 'script',
        c = 'link[rel="modulepreload"][as="' + Mn(u) + '"][href="' + Mn(e) + '"]',
        h = c;
      switch (u) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          h = as(e);
      }
      if (
        !zn.has(h) &&
        ((e = y({ rel: 'modulepreload', href: e }, a)), zn.set(h, e), s.querySelector(c) === null)
      ) {
        switch (u) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (s.querySelector(bl(h))) return;
        }
        (u = s.createElement('link')), Yt(u, 'link', e), jt(u), s.head.appendChild(u);
      }
    }
  }
  function rS(e, a, s) {
    La.S(e, a, s);
    var u = ts;
    if (u && e) {
      var c = xi(u).hoistableStyles,
        h = ns(e);
      a = a || 'default';
      var p = c.get(h);
      if (!p) {
        var b = { loading: 0, preload: null };
        if ((p = u.querySelector(vl(h)))) b.loading = 5;
        else {
          (e = y({ rel: 'stylesheet', href: e, 'data-precedence': a }, s)),
            (s = zn.get(h)) && jd(e, s);
          var O = (p = u.createElement('link'));
          jt(O),
            Yt(O, 'link', e),
            (O._p = new Promise(function (L, P) {
              (O.onload = L), (O.onerror = P);
            })),
            O.addEventListener('load', function () {
              b.loading |= 1;
            }),
            O.addEventListener('error', function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            Oo(p, a, u);
        }
        (p = { type: 'stylesheet', instance: p, count: 1, state: b }), c.set(h, p);
      }
    }
  }
  function iS(e, a) {
    La.X(e, a);
    var s = ts;
    if (s && e) {
      var u = xi(s).hoistableScripts,
        c = as(e),
        h = u.get(c);
      h ||
        ((h = s.querySelector(bl(c))),
        h ||
          ((e = y({ src: e, async: !0 }, a)),
          (a = zn.get(c)) && zd(e, a),
          (h = s.createElement('script')),
          jt(h),
          Yt(h, 'link', e),
          s.head.appendChild(h)),
        (h = { type: 'script', instance: h, count: 1, state: null }),
        u.set(c, h));
    }
  }
  function sS(e, a) {
    La.M(e, a);
    var s = ts;
    if (s && e) {
      var u = xi(s).hoistableScripts,
        c = as(e),
        h = u.get(c);
      h ||
        ((h = s.querySelector(bl(c))),
        h ||
          ((e = y({ src: e, async: !0, type: 'module' }, a)),
          (a = zn.get(c)) && zd(e, a),
          (h = s.createElement('script')),
          jt(h),
          Yt(h, 'link', e),
          s.head.appendChild(h)),
        (h = { type: 'script', instance: h, count: 1, state: null }),
        u.set(c, h));
    }
  }
  function Sp(e, a, s, u) {
    var c = (c = we.current) ? wo(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof s.precedence == 'string' && typeof s.href == 'string'
          ? ((a = ns(s.href)),
            (s = xi(c).hoistableStyles),
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
          e = ns(s.href);
          var h = xi(c).hoistableStyles,
            p = h.get(e);
          if (
            (p ||
              ((c = c.ownerDocument || c),
              (p = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(e, p),
              (h = c.querySelector(vl(e))) && !h._p && ((p.instance = h), (p.state.loading = 5)),
              zn.has(e) ||
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
                zn.set(e, s),
                h || lS(c, e, s, p.state))),
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
            ? ((a = as(s)),
              (s = xi(c).hoistableScripts),
              (u = s.get(a)),
              u || ((u = { type: 'script', instance: null, count: 0, state: null }), s.set(a, u)),
              u)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function ns(e) {
    return 'href="' + Mn(e) + '"';
  }
  function vl(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function xp(e) {
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
        Yt(a, 'link', s),
        jt(a),
        e.head.appendChild(a));
  }
  function as(e) {
    return '[src="' + Mn(e) + '"]';
  }
  function bl(e) {
    return 'script[async]' + e;
  }
  function wp(e, a, s) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case 'style':
          var u = e.querySelector('style[data-href~="' + Mn(s.href) + '"]');
          if (u) return (a.instance = u), jt(u), u;
          var c = y({}, s, {
            'data-href': s.href,
            'data-precedence': s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (e.ownerDocument || e).createElement('style')),
            jt(u),
            Yt(u, 'style', c),
            Oo(u, s.precedence, e),
            (a.instance = u)
          );
        case 'stylesheet':
          c = ns(s.href);
          var h = e.querySelector(vl(c));
          if (h) return (a.state.loading |= 4), (a.instance = h), jt(h), h;
          (u = xp(s)),
            (c = zn.get(c)) && jd(u, c),
            (h = (e.ownerDocument || e).createElement('link')),
            jt(h);
          var p = h;
          return (
            (p._p = new Promise(function (b, O) {
              (p.onload = b), (p.onerror = O);
            })),
            Yt(h, 'link', u),
            (a.state.loading |= 4),
            Oo(h, s.precedence, e),
            (a.instance = h)
          );
        case 'script':
          return (
            (h = as(s.src)),
            (c = e.querySelector(bl(h)))
              ? ((a.instance = c), jt(c), c)
              : ((u = s),
                (c = zn.get(h)) && ((u = y({}, s)), zd(u, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                jt(c),
                Yt(c, 'link', u),
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
        ((u = a.instance), (a.state.loading |= 4), Oo(u, s.precedence, e));
    return a.instance;
  }
  function Oo(e, a, s) {
    for (
      var u = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        c = u.length ? u[u.length - 1] : null,
        h = c,
        p = 0;
      p < u.length;
      p++
    ) {
      var b = u[p];
      if (b.dataset.precedence === a) h = b;
      else if (h !== c) break;
    }
    h
      ? h.parentNode.insertBefore(e, h.nextSibling)
      : ((a = s.nodeType === 9 ? s.head : s), a.insertBefore(e, a.firstChild));
  }
  function jd(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title);
  }
  function zd(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity);
  }
  var Eo = null;
  function Op(e, a, s) {
    if (Eo === null) {
      var u = new Map(),
        c = (Eo = new Map());
      c.set(s, u);
    } else (c = Eo), (u = c.get(s)), u || ((u = new Map()), c.set(s, u));
    if (u.has(e)) return u;
    for (u.set(e, null), s = s.getElementsByTagName(e), c = 0; c < s.length; c++) {
      var h = s[c];
      if (
        !(h[ks] || h[Ot] || (e === 'link' && h.getAttribute('rel') === 'stylesheet')) &&
        h.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var p = h.getAttribute(a) || '';
        p = e + p;
        var b = u.get(p);
        b ? b.push(h) : u.set(p, [h]);
      }
    }
    return u;
  }
  function Ep(e, a, s) {
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
  function Cp(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var _l = null;
  function oS() {}
  function cS(e, a, s) {
    if (_l === null) throw Error(i(475));
    var u = _l;
    if (
      a.type === 'stylesheet' &&
      (typeof s.media != 'string' || matchMedia(s.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var c = ns(s.href),
          h = e.querySelector(vl(c));
        if (h) {
          (e = h._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (u.count++, (u = Co.bind(u)), e.then(u, u)),
            (a.state.loading |= 4),
            (a.instance = h),
            jt(h);
          return;
        }
        (h = e.ownerDocument || e),
          (s = xp(s)),
          (c = zn.get(c)) && jd(s, c),
          (h = h.createElement('link')),
          jt(h);
        var p = h;
        (p._p = new Promise(function (b, O) {
          (p.onload = b), (p.onerror = O);
        })),
          Yt(h, 'link', s),
          (a.instance = h);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (u.count++,
          (a = Co.bind(u)),
          e.addEventListener('load', a),
          e.addEventListener('error', a));
    }
  }
  function fS() {
    if (_l === null) throw Error(i(475));
    var e = _l;
    return (
      e.stylesheets && e.count === 0 && Ud(e, e.stylesheets),
      0 < e.count
        ? function (a) {
            var s = setTimeout(function () {
              if ((e.stylesheets && Ud(e, e.stylesheets), e.unsuspend)) {
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
  function Co() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ud(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var To = null;
  function Ud(e, a) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (To = new Map()), a.forEach(dS, e), (To = null), Co.call(e));
  }
  function dS(e, a) {
    if (!(a.state.loading & 4)) {
      var s = To.get(e);
      if (s) var u = s.get(null);
      else {
        (s = new Map()), To.set(e, s);
        for (
          var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), h = 0;
          h < c.length;
          h++
        ) {
          var p = c[h];
          (p.nodeName === 'LINK' || p.getAttribute('media') !== 'not all') &&
            (s.set(p.dataset.precedence, p), (u = p));
        }
        u && s.set(null, u);
      }
      (c = a.instance),
        (p = c.getAttribute('data-precedence')),
        (h = s.get(p) || u),
        h === u && s.set(null, c),
        s.set(p, c),
        this.count++,
        (u = Co.bind(this)),
        c.addEventListener('load', u),
        c.addEventListener('error', u),
        h
          ? h.parentNode.insertBefore(c, h.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var Sl = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0,
  };
  function hS(e, a, s, u, c, h, p, b) {
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
      (this.expirationTimes = Je(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Je(0)),
      (this.hiddenUpdates = Je(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = c),
      (this.onCaughtError = h),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Tp(e, a, s, u, c, h, p, b, O, L, P, Q) {
    return (
      (e = new hS(e, a, s, p, b, O, L, Q)),
      (a = 1),
      h === !0 && (a |= 24),
      (h = mn(3, null, null, a)),
      (e.current = h),
      (h.stateNode = e),
      (a = pf()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (h.memoizedState = { element: u, isDehydrated: s, cache: a }),
      Sf(h),
      e
    );
  }
  function Mp(e) {
    return e ? ((e = ji), e) : ji;
  }
  function Np(e, a, s, u, c, h) {
    (c = Mp(c)),
      u.context === null ? (u.context = c) : (u.pendingContext = c),
      (u = ir(a)),
      (u.payload = { element: s }),
      (h = h === void 0 ? null : h),
      h !== null && (u.callback = h),
      (s = sr(e, u, a)),
      s !== null && (bn(s, e, a), Xs(s, e, a));
  }
  function Dp(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < a ? s : a;
    }
  }
  function Ld(e, a) {
    Dp(e, a), (e = e.alternate) && Dp(e, a);
  }
  function Ap(e) {
    if (e.tag === 13) {
      var a = Ri(e, 67108864);
      a !== null && bn(a, e, 67108864), Ld(e, 67108864);
    }
  }
  var Mo = !0;
  function mS(e, a, s, u) {
    var c = V.T;
    V.T = null;
    var h = J.p;
    try {
      (J.p = 2), Bd(e, a, s, u);
    } finally {
      (J.p = h), (V.T = c);
    }
  }
  function gS(e, a, s, u) {
    var c = V.T;
    V.T = null;
    var h = J.p;
    try {
      (J.p = 8), Bd(e, a, s, u);
    } finally {
      (J.p = h), (V.T = c);
    }
  }
  function Bd(e, a, s, u) {
    if (Mo) {
      var c = Hd(u);
      if (c === null) Ed(e, a, u, No, s), Rp(e, u);
      else if (pS(c, e, a, s, u)) u.stopPropagation();
      else if ((Rp(e, u), a & 4 && -1 < yS.indexOf(e))) {
        for (; c !== null; ) {
          var h = Si(c);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var p = Ln(h.pendingLanes);
                  if (p !== 0) {
                    var b = h;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                      var O = 1 << (31 - rt(p));
                      (b.entanglements[1] |= O), (p &= ~O);
                    }
                    ua(h), (tt & 6) === 0 && ((fo = rn() + 500), ml(0));
                  }
                }
                break;
              case 13:
                (b = Ri(h, 2)), b !== null && bn(b, h, 2), mo(), Ld(h, 2);
            }
          if (((h = Hd(u)), h === null && Ed(e, a, u, No, s), h === c)) break;
          c = h;
        }
        c !== null && u.stopPropagation();
      } else Ed(e, a, u, null, s);
    }
  }
  function Hd(e) {
    return (e = Zc(e)), Vd(e);
  }
  var No = null;
  function Vd(e) {
    if (((No = null), (e = _i(e)), e !== null)) {
      var a = o(e);
      if (a === null) e = null;
      else {
        var s = a.tag;
        if (s === 13) {
          if (((e = d(a)), e !== null)) return e;
          e = null;
        } else if (s === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return (No = e), null;
  }
  function kp(e) {
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
        switch (xu()) {
          case Br:
            return 2;
          case C:
            return 8;
          case B:
          case F:
            return 32;
          case se:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yd = !1,
    br = null,
    _r = null,
    Sr = null,
    xl = new Map(),
    wl = new Map(),
    xr = [],
    yS =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Rp(e, a) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        br = null;
        break;
      case 'dragenter':
      case 'dragleave':
        _r = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Sr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        xl.delete(a.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        wl.delete(a.pointerId);
    }
  }
  function Ol(e, a, s, u, c, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: a,
          domEventName: s,
          eventSystemFlags: u,
          nativeEvent: h,
          targetContainers: [c],
        }),
        a !== null && ((a = Si(a)), a !== null && Ap(a)),
        e)
      : ((e.eventSystemFlags |= u),
        (a = e.targetContainers),
        c !== null && a.indexOf(c) === -1 && a.push(c),
        e);
  }
  function pS(e, a, s, u, c) {
    switch (a) {
      case 'focusin':
        return (br = Ol(br, e, a, s, u, c)), !0;
      case 'dragenter':
        return (_r = Ol(_r, e, a, s, u, c)), !0;
      case 'mouseover':
        return (Sr = Ol(Sr, e, a, s, u, c)), !0;
      case 'pointerover':
        var h = c.pointerId;
        return xl.set(h, Ol(xl.get(h) || null, e, a, s, u, c)), !0;
      case 'gotpointercapture':
        return (h = c.pointerId), wl.set(h, Ol(wl.get(h) || null, e, a, s, u, c)), !0;
    }
    return !1;
  }
  function jp(e) {
    var a = _i(e.target);
    if (a !== null) {
      var s = o(a);
      if (s !== null) {
        if (((a = s.tag), a === 13)) {
          if (((a = d(s)), a !== null)) {
            (e.blockedOn = a),
              Rc(e.priority, function () {
                if (s.tag === 13) {
                  var u = vn();
                  u = ln(u);
                  var c = Ri(s, u);
                  c !== null && bn(c, s, u), Ld(s, u);
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
  function Do(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var s = Hd(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var u = new s.constructor(s.type, s);
        (qc = u), s.target.dispatchEvent(u), (qc = null);
      } else return (a = Si(s)), a !== null && Ap(a), (e.blockedOn = s), !1;
      a.shift();
    }
    return !0;
  }
  function zp(e, a, s) {
    Do(e) && s.delete(a);
  }
  function vS() {
    (Yd = !1),
      br !== null && Do(br) && (br = null),
      _r !== null && Do(_r) && (_r = null),
      Sr !== null && Do(Sr) && (Sr = null),
      xl.forEach(zp),
      wl.forEach(zp);
  }
  function Ao(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      Yd || ((Yd = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, vS)));
  }
  var ko = null;
  function Up(e) {
    ko !== e &&
      ((ko = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        ko === e && (ko = null);
        for (var a = 0; a < e.length; a += 3) {
          var s = e[a],
            u = e[a + 1],
            c = e[a + 2];
          if (typeof u != 'function') {
            if (Vd(u || s) === null) continue;
            break;
          }
          var h = Si(s);
          h !== null &&
            (e.splice(a, 3),
            (a -= 3),
            Vf(h, { pending: !0, data: c, method: s.method, action: u }, u, c));
        }
      }));
  }
  function El(e) {
    function a(O) {
      return Ao(O, e);
    }
    br !== null && Ao(br, e),
      _r !== null && Ao(_r, e),
      Sr !== null && Ao(Sr, e),
      xl.forEach(a),
      wl.forEach(a);
    for (var s = 0; s < xr.length; s++) {
      var u = xr[s];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < xr.length && ((s = xr[0]), s.blockedOn === null); )
      jp(s), s.blockedOn === null && xr.shift();
    if (((s = (e.ownerDocument || e).$$reactFormReplay), s != null))
      for (u = 0; u < s.length; u += 3) {
        var c = s[u],
          h = s[u + 1],
          p = c[Rt] || null;
        if (typeof h == 'function') p || Up(s);
        else if (p) {
          var b = null;
          if (h && h.hasAttribute('formAction')) {
            if (((c = h), (p = h[Rt] || null))) b = p.formAction;
            else if (Vd(c) !== null) continue;
          } else b = p.action;
          typeof b == 'function' ? (s[u + 1] = b) : (s.splice(u, 3), (u -= 3)), Up(s);
        }
      }
  }
  function qd(e) {
    this._internalRoot = e;
  }
  (Ro.prototype.render = qd.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(i(409));
      var s = a.current,
        u = vn();
      Np(s, u, e, a, null, null);
    }),
    (Ro.prototype.unmount = qd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          Np(e.current, 2, null, e, null, null), mo(), (a[bi] = null);
        }
      });
  function Ro(e) {
    this._internalRoot = e;
  }
  Ro.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = wu();
      e = { blockedOn: null, target: e, priority: a };
      for (var s = 0; s < xr.length && a !== 0 && a < xr[s].priority; s++);
      xr.splice(s, 0, e), s === 0 && jp(e);
    }
  };
  var Lp = t.version;
  if (Lp !== '19.1.0') throw Error(i(527, Lp, '19.1.0'));
  J.findDOMNode = function (e) {
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
    var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jo.isDisabled && jo.supportsFiber)
      try {
        (ge = jo.inject(bS)), (De = jo);
      } catch {}
  }
  return (
    (Tl.createRoot = function (e, a) {
      if (!l(e)) throw Error(i(299));
      var s = !1,
        u = '',
        c = Jg,
        h = ey,
        p = ty,
        b = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
          a.onCaughtError !== void 0 && (h = a.onCaughtError),
          a.onRecoverableError !== void 0 && (p = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (b = a.unstable_transitionCallbacks)),
        (a = Tp(e, 1, !1, null, null, s, u, c, h, p, b, null)),
        (e[bi] = a.current),
        Od(e),
        new qd(a)
      );
    }),
    (Tl.hydrateRoot = function (e, a, s) {
      if (!l(e)) throw Error(i(299));
      var u = !1,
        c = '',
        h = Jg,
        p = ey,
        b = ty,
        O = null,
        L = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (h = s.onUncaughtError),
          s.onCaughtError !== void 0 && (p = s.onCaughtError),
          s.onRecoverableError !== void 0 && (b = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 && (O = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (L = s.formState)),
        (a = Tp(e, 1, !0, a, s ?? null, u, c, h, p, b, O, L)),
        (a.context = Mp(null)),
        (s = a.current),
        (u = vn()),
        (u = ln(u)),
        (c = ir(u)),
        (c.callback = null),
        sr(s, c, u),
        (s = u),
        (a.current.lanes = s),
        sn(a, s),
        ua(a),
        (e[bi] = a.current),
        Od(e),
        new Ro(a)
      );
    }),
    (Tl.version = '19.1.0'),
    Tl
  );
}
var Qp;
function DS() {
  if (Qp) return Gd.exports;
  Qp = 1;
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
  return n(), (Gd.exports = NS()), Gd.exports;
}
var AS = DS(),
  Ml = {},
  Kp;
function kS() {
  if (Kp) return Ml;
  (Kp = 1),
    Object.defineProperty(Ml, '__esModule', { value: !0 }),
    (Ml.parse = d),
    (Ml.serialize = g);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    l = Object.prototype.toString,
    o = (() => {
      const _ = function () {};
      return (_.prototype = Object.create(null)), _;
    })();
  function d(_, w) {
    const x = new o(),
      N = _.length;
    if (N < 2) return x;
    const T = (w == null ? void 0 : w.decode) || y;
    let A = 0;
    do {
      const j = _.indexOf('=', A);
      if (j === -1) break;
      const R = _.indexOf(';', A),
        q = R === -1 ? N : R;
      if (j > q) {
        A = _.lastIndexOf(';', j - 1) + 1;
        continue;
      }
      const M = f(_, A, j),
        K = m(_, j, M),
        W = _.slice(M, K);
      if (x[W] === void 0) {
        let oe = f(_, j + 1, q),
          X = m(_, q, oe);
        const ye = T(_.slice(oe, X));
        x[W] = ye;
      }
      A = q + 1;
    } while (A < N);
    return x;
  }
  function f(_, w, x) {
    do {
      const N = _.charCodeAt(w);
      if (N !== 32 && N !== 9) return w;
    } while (++w < x);
    return x;
  }
  function m(_, w, x) {
    for (; w > x; ) {
      const N = _.charCodeAt(--w);
      if (N !== 32 && N !== 9) return w + 1;
    }
    return x;
  }
  function g(_, w, x) {
    const N = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!n.test(_)) throw new TypeError(`argument name is invalid: ${_}`);
    const T = N(w);
    if (!t.test(T)) throw new TypeError(`argument val is invalid: ${w}`);
    let A = _ + '=' + T;
    if (!x) return A;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge)) throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      A += '; Max-Age=' + x.maxAge;
    }
    if (x.domain) {
      if (!r.test(x.domain)) throw new TypeError(`option domain is invalid: ${x.domain}`);
      A += '; Domain=' + x.domain;
    }
    if (x.path) {
      if (!i.test(x.path)) throw new TypeError(`option path is invalid: ${x.path}`);
      A += '; Path=' + x.path;
    }
    if (x.expires) {
      if (!v(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      A += '; Expires=' + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (A += '; HttpOnly'),
      x.secure && (A += '; Secure'),
      x.partitioned && (A += '; Partitioned'),
      x.priority)
    )
      switch (typeof x.priority == 'string' ? x.priority.toLowerCase() : void 0) {
        case 'low':
          A += '; Priority=Low';
          break;
        case 'medium':
          A += '; Priority=Medium';
          break;
        case 'high':
          A += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == 'string' ? x.sameSite.toLowerCase() : x.sameSite) {
        case !0:
        case 'strict':
          A += '; SameSite=Strict';
          break;
        case 'lax':
          A += '; SameSite=Lax';
          break;
        case 'none':
          A += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return A;
  }
  function y(_) {
    if (_.indexOf('%') === -1) return _;
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }
  function v(_) {
    return l.call(_) === '[object Date]';
  }
  return Ml;
}
kS();
var Wp = 'popstate';
function RS(n = {}) {
  function t(i, l) {
    let { pathname: o, search: d, hash: f } = i.location;
    return gh(
      '',
      { pathname: o, search: d, hash: f },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function r(i, l) {
    return typeof l == 'string' ? l : Pl(l);
  }
  return zS(t, r, null, n);
}
function ht(n, t) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(t);
}
function Wn(n, t) {
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
function Xp(n, t) {
  return { usr: n.state, key: n.key, idx: t };
}
function gh(n, t, r = null, i) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? Cs(t) : t),
    state: r,
    key: (t && t.key) || i || jS(),
  };
}
function Pl({ pathname: n = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (n += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (n += r.charAt(0) === '#' ? r : '#' + r),
    n
  );
}
function Cs(n) {
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
    d = l.history,
    f = 'POP',
    m = null,
    g = y();
  g == null && ((g = 0), d.replaceState({ ...d.state, idx: g }, ''));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function v() {
    f = 'POP';
    let T = y(),
      A = T == null ? null : T - g;
    (g = T), m && m({ action: f, location: N.location, delta: A });
  }
  function _(T, A) {
    f = 'PUSH';
    let j = gh(N.location, T, A);
    g = y() + 1;
    let R = Xp(j, g),
      q = N.createHref(j);
    try {
      d.pushState(R, '', q);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      l.location.assign(q);
    }
    o && m && m({ action: f, location: N.location, delta: 1 });
  }
  function w(T, A) {
    f = 'REPLACE';
    let j = gh(N.location, T, A);
    g = y();
    let R = Xp(j, g),
      q = N.createHref(j);
    d.replaceState(R, '', q), o && m && m({ action: f, location: N.location, delta: 0 });
  }
  function x(T) {
    return US(T);
  }
  let N = {
    get action() {
      return f;
    },
    get location() {
      return n(l, d);
    },
    listen(T) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Wp, v),
        (m = T),
        () => {
          l.removeEventListener(Wp, v), (m = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: x,
    encodeLocation(T) {
      let A = x(T);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: _,
    replace: w,
    go(T) {
      return d.go(T);
    },
  };
  return N;
}
function US(n, t = !1) {
  let r = 'http://localhost';
  typeof window < 'u' &&
    (r = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    ht(r, 'No window.location.(origin|href) available to create URL');
  let i = typeof n == 'string' ? n : Pl(n);
  return (i = i.replace(/ $/, '%20')), !t && i.startsWith('//') && (i = r + i), new URL(i, r);
}
function _0(n, t, r = '/') {
  return LS(n, t, r, !1);
}
function LS(n, t, r, i) {
  let l = typeof t == 'string' ? Cs(t) : t,
    o = $a(l.pathname || '/', r);
  if (o == null) return null;
  let d = S0(n);
  BS(d);
  let f = null;
  for (let m = 0; f == null && m < d.length; ++m) {
    let g = KS(o);
    f = $S(d[m], g, i);
  }
  return f;
}
function S0(n, t = [], r = [], i = '') {
  let l = (o, d, f) => {
    let m = {
      relativePath: f === void 0 ? o.path || '' : f,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: d,
      route: o,
    };
    m.relativePath.startsWith('/') &&
      (ht(
        m.relativePath.startsWith(i),
        `Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(i.length)));
    let g = Pa([i, m.relativePath]),
      y = r.concat(m);
    o.children &&
      o.children.length > 0 &&
      (ht(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      S0(o.children, t, y, g)),
      !(o.path == null && !o.index) && t.push({ path: g, score: PS(g, o.index), routesMeta: y });
  };
  return (
    n.forEach((o, d) => {
      var f;
      if (o.path === '' || !((f = o.path) != null && f.includes('?'))) l(o, d);
      else for (let m of x0(o.path)) l(o, d, m);
    }),
    t
  );
}
function x0(n) {
  let t = n.split('/');
  if (t.length === 0) return [];
  let [r, ...i] = t,
    l = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (i.length === 0) return l ? [o, ''] : [o];
  let d = x0(i.join('/')),
    f = [];
  return (
    f.push(...d.map((m) => (m === '' ? o : [o, m].join('/')))),
    l && f.push(...d),
    f.map((m) => (n.startsWith('/') && m === '' ? '/' : m))
  );
}
function BS(n) {
  n.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : GS(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var HS = /^:[\w-]+$/,
  VS = 3,
  YS = 2,
  qS = 1,
  ZS = 10,
  FS = -2,
  Ip = (n) => n === '*';
function PS(n, t) {
  let r = n.split('/'),
    i = r.length;
  return (
    r.some(Ip) && (i += FS),
    t && (i += YS),
    r.filter((l) => !Ip(l)).reduce((l, o) => l + (HS.test(o) ? VS : o === '' ? qS : ZS), i)
  );
}
function GS(n, t) {
  return n.length === t.length && n.slice(0, -1).every((i, l) => i === t[l])
    ? n[n.length - 1] - t[t.length - 1]
    : 0;
}
function $S(n, t, r = !1) {
  let { routesMeta: i } = n,
    l = {},
    o = '/',
    d = [];
  for (let f = 0; f < i.length; ++f) {
    let m = i[f],
      g = f === i.length - 1,
      y = o === '/' ? t : t.slice(o.length) || '/',
      v = Io({ path: m.relativePath, caseSensitive: m.caseSensitive, end: g }, y),
      _ = m.route;
    if (
      (!v &&
        g &&
        r &&
        !i[i.length - 1].route.index &&
        (v = Io({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, y)),
      !v)
    )
      return null;
    Object.assign(l, v.params),
      d.push({
        params: l,
        pathname: Pa([o, v.pathname]),
        pathnameBase: JS(Pa([o, v.pathnameBase])),
        route: _,
      }),
      v.pathnameBase !== '/' && (o = Pa([o, v.pathnameBase]));
  }
  return d;
}
function Io(n, t) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [r, i] = QS(n.path, n.caseSensitive, n.end),
    l = t.match(r);
  if (!l) return null;
  let o = l[0],
    d = o.replace(/(.)\/+$/, '$1'),
    f = l.slice(1);
  return {
    params: i.reduce((g, { paramName: y, isOptional: v }, _) => {
      if (y === '*') {
        let x = f[_] || '';
        d = o.slice(0, o.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const w = f[_];
      return v && !w ? (g[y] = void 0) : (g[y] = (w || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: o,
    pathnameBase: d,
    pattern: n,
  };
}
function QS(n, t = !1, r = !0) {
  Wn(
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
          (d, f, m) => (
            i.push({ paramName: f, isOptional: m != null }), m ? '/?([^\\/]+)?' : '/([^\\/]+)'
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
function KS(n) {
  try {
    return n
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Wn(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      n
    );
  }
}
function $a(n, t) {
  if (t === '/') return n;
  if (!n.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    i = n.charAt(r);
  return i && i !== '/' ? null : n.slice(r) || '/';
}
function WS(n, t = '/') {
  let { pathname: r, search: i = '', hash: l = '' } = typeof n == 'string' ? Cs(n) : n;
  return { pathname: r ? (r.startsWith('/') ? r : XS(r, t)) : t, search: ex(i), hash: tx(l) };
}
function XS(n, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((l) => {
      l === '..' ? r.length > 1 && r.pop() : l !== '.' && r.push(l);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Wd(n, t, r, i) {
  return `Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function IS(n) {
  return n.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function kh(n) {
  let t = IS(n);
  return t.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Rh(n, t, r, i = !1) {
  let l;
  typeof n == 'string'
    ? (l = Cs(n))
    : ((l = { ...n }),
      ht(!l.pathname || !l.pathname.includes('?'), Wd('?', 'pathname', 'search', l)),
      ht(!l.pathname || !l.pathname.includes('#'), Wd('#', 'pathname', 'hash', l)),
      ht(!l.search || !l.search.includes('#'), Wd('#', 'search', 'hash', l)));
  let o = n === '' || l.pathname === '',
    d = o ? '/' : l.pathname,
    f;
  if (d == null) f = r;
  else {
    let v = t.length - 1;
    if (!i && d.startsWith('..')) {
      let _ = d.split('/');
      for (; _[0] === '..'; ) _.shift(), (v -= 1);
      l.pathname = _.join('/');
    }
    f = v >= 0 ? t[v] : '/';
  }
  let m = WS(l, f),
    g = d && d !== '/' && d.endsWith('/'),
    y = (o || d === '.') && r.endsWith('/');
  return !m.pathname.endsWith('/') && (g || y) && (m.pathname += '/'), m;
}
var Pa = (n) => n.join('/').replace(/\/\/+/g, '/'),
  JS = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ex = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  tx = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function nx(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var w0 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(w0);
var ax = ['GET', ...w0];
new Set(ax);
var Ts = k.createContext(null);
Ts.displayName = 'DataRouter';
var Sc = k.createContext(null);
Sc.displayName = 'DataRouterState';
var O0 = k.createContext({ isTransitioning: !1 });
O0.displayName = 'ViewTransition';
var rx = k.createContext(new Map());
rx.displayName = 'Fetchers';
var ix = k.createContext(null);
ix.displayName = 'Await';
var In = k.createContext(null);
In.displayName = 'Navigation';
var gu = k.createContext(null);
gu.displayName = 'Location';
var Jn = k.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Jn.displayName = 'Route';
var jh = k.createContext(null);
jh.displayName = 'RouteError';
function sx(n, { relative: t } = {}) {
  ht(Ms(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: i } = k.useContext(In),
    { hash: l, pathname: o, search: d } = yu(n, { relative: t }),
    f = o;
  return (
    r !== '/' && (f = o === '/' ? r : Pa([r, o])), i.createHref({ pathname: f, search: d, hash: l })
  );
}
function Ms() {
  return k.useContext(gu) != null;
}
function Wa() {
  return (
    ht(Ms(), 'useLocation() may be used only in the context of a <Router> component.'),
    k.useContext(gu).location
  );
}
var E0 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function C0(n) {
  k.useContext(In).static || k.useLayoutEffect(n);
}
function Ft() {
  let { isDataRoute: n } = k.useContext(Jn);
  return n ? Sx() : lx();
}
function lx() {
  ht(Ms(), 'useNavigate() may be used only in the context of a <Router> component.');
  let n = k.useContext(Ts),
    { basename: t, navigator: r } = k.useContext(In),
    { matches: i } = k.useContext(Jn),
    { pathname: l } = Wa(),
    o = JSON.stringify(kh(i)),
    d = k.useRef(!1);
  return (
    C0(() => {
      d.current = !0;
    }),
    k.useCallback(
      (m, g = {}) => {
        if ((Wn(d.current, E0), !d.current)) return;
        if (typeof m == 'number') {
          r.go(m);
          return;
        }
        let y = Rh(m, JSON.parse(o), l, g.relative === 'path');
        n == null && t !== '/' && (y.pathname = y.pathname === '/' ? t : Pa([t, y.pathname])),
          (g.replace ? r.replace : r.push)(y, g.state, g);
      },
      [t, r, o, l, n]
    )
  );
}
var ux = k.createContext(null);
function ox(n) {
  let t = k.useContext(Jn).outlet;
  return t && k.createElement(ux.Provider, { value: n }, t);
}
function yu(n, { relative: t } = {}) {
  let { matches: r } = k.useContext(Jn),
    { pathname: i } = Wa(),
    l = JSON.stringify(kh(r));
  return k.useMemo(() => Rh(n, JSON.parse(l), i, t === 'path'), [n, l, i, t]);
}
function cx(n, t) {
  return T0(n, t);
}
function T0(n, t, r, i) {
  var j;
  ht(Ms(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: l, static: o } = k.useContext(In),
    { matches: d } = k.useContext(Jn),
    f = d[d.length - 1],
    m = f ? f.params : {},
    g = f ? f.pathname : '/',
    y = f ? f.pathnameBase : '/',
    v = f && f.route;
  {
    let R = (v && v.path) || '';
    M0(
      g,
      !v || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let _ = Wa(),
    w;
  if (t) {
    let R = typeof t == 'string' ? Cs(t) : t;
    ht(
      y === '/' || ((j = R.pathname) == null ? void 0 : j.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (w = R);
  } else w = _;
  let x = w.pathname || '/',
    N = x;
  if (y !== '/') {
    let R = y.replace(/^\//, '').split('/');
    N = '/' + x.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let T = !o && r && r.matches && r.matches.length > 0 ? r.matches : _0(n, { pathname: N });
  Wn(v || T != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    Wn(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let A = gx(
    T &&
      T.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, m, R.params),
          pathname: Pa([y, l.encodeLocation ? l.encodeLocation(R.pathname).pathname : R.pathname]),
          pathnameBase:
            R.pathnameBase === '/'
              ? y
              : Pa([
                  y,
                  l.encodeLocation ? l.encodeLocation(R.pathnameBase).pathname : R.pathnameBase,
                ]),
        })
      ),
    d,
    r,
    i
  );
  return t && A
    ? k.createElement(
        gu.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...w },
            navigationType: 'POP',
          },
        },
        A
      )
    : A;
}
function fx() {
  let n = _x(),
    t = nx(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n),
    r = n instanceof Error ? n.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: i },
    o = { padding: '2px 4px', backgroundColor: i },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (d = k.createElement(
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
      d
    )
  );
}
var dx = k.createElement(fx, null),
  hx = class extends k.Component {
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
            Jn.Provider,
            { value: this.props.routeContext },
            k.createElement(jh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function mx({ routeContext: n, match: t, children: r }) {
  let i = k.useContext(Ts);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    k.createElement(Jn.Provider, { value: n }, r)
  );
}
function gx(n, t = [], r = null, i = null) {
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
    ht(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`
    ),
      (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  let d = !1,
    f = -1;
  if (r)
    for (let m = 0; m < l.length; m++) {
      let g = l[m];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (f = m), g.route.id)) {
        let { loaderData: y, errors: v } = r,
          _ = g.route.loader && !y.hasOwnProperty(g.route.id) && (!v || v[g.route.id] === void 0);
        if (g.route.lazy || _) {
          (d = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((m, g, y) => {
    let v,
      _ = !1,
      w = null,
      x = null;
    r &&
      ((v = o && g.route.id ? o[g.route.id] : void 0),
      (w = g.route.errorElement || dx),
      d &&
        (f < 0 && y === 0
          ? (M0(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (_ = !0),
            (x = null))
          : f === y && ((_ = !0), (x = g.route.hydrateFallbackElement || null))));
    let N = t.concat(l.slice(0, y + 1)),
      T = () => {
        let A;
        return (
          v
            ? (A = w)
            : _
              ? (A = x)
              : g.route.Component
                ? (A = k.createElement(g.route.Component, null))
                : g.route.element
                  ? (A = g.route.element)
                  : (A = m),
          k.createElement(mx, {
            match: g,
            routeContext: { outlet: m, matches: N, isDataRoute: r != null },
            children: A,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || y === 0)
      ? k.createElement(hx, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: v,
          children: T(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
        })
      : T();
  }, null);
}
function zh(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yx(n) {
  let t = k.useContext(Ts);
  return ht(t, zh(n)), t;
}
function px(n) {
  let t = k.useContext(Sc);
  return ht(t, zh(n)), t;
}
function vx(n) {
  let t = k.useContext(Jn);
  return ht(t, zh(n)), t;
}
function Uh(n) {
  let t = vx(n),
    r = t.matches[t.matches.length - 1];
  return ht(r.route.id, `${n} can only be used on routes that contain a unique "id"`), r.route.id;
}
function bx() {
  return Uh('useRouteId');
}
function _x() {
  var i;
  let n = k.useContext(jh),
    t = px('useRouteError'),
    r = Uh('useRouteError');
  return n !== void 0 ? n : (i = t.errors) == null ? void 0 : i[r];
}
function Sx() {
  let { router: n } = yx('useNavigate'),
    t = Uh('useNavigate'),
    r = k.useRef(!1);
  return (
    C0(() => {
      r.current = !0;
    }),
    k.useCallback(
      async (l, o = {}) => {
        Wn(r.current, E0),
          r.current &&
            (typeof l == 'number' ? n.navigate(l) : await n.navigate(l, { fromRouteId: t, ...o }));
      },
      [n, t]
    )
  );
}
var Jp = {};
function M0(n, t, r) {
  !t && !Jp[n] && ((Jp[n] = !0), Wn(!1, r));
}
k.memo(xx);
function xx({ routes: n, future: t, state: r }) {
  return T0(n, void 0, r, t);
}
function ev({ to: n, replace: t, state: r, relative: i }) {
  ht(Ms(), '<Navigate> may be used only in the context of a <Router> component.');
  let { static: l } = k.useContext(In);
  Wn(
    !l,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: o } = k.useContext(Jn),
    { pathname: d } = Wa(),
    f = Ft(),
    m = Rh(n, kh(o), d, i === 'path'),
    g = JSON.stringify(m);
  return (
    k.useEffect(() => {
      f(JSON.parse(g), { replace: t, state: r, relative: i });
    }, [f, g, i, t, r]),
    null
  );
}
function wx(n) {
  return ox(n.context);
}
function _n(n) {
  ht(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Ox({
  basename: n = '/',
  children: t = null,
  location: r,
  navigationType: i = 'POP',
  navigator: l,
  static: o = !1,
}) {
  ht(
    !Ms(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = n.replace(/^\/*/, '/'),
    f = k.useMemo(() => ({ basename: d, navigator: l, static: o, future: {} }), [d, l, o]);
  typeof r == 'string' && (r = Cs(r));
  let { pathname: m = '/', search: g = '', hash: y = '', state: v = null, key: _ = 'default' } = r,
    w = k.useMemo(() => {
      let x = $a(m, d);
      return x == null
        ? null
        : { location: { pathname: x, search: g, hash: y, state: v, key: _ }, navigationType: i };
    }, [d, m, g, y, v, _, i]);
  return (
    Wn(
      w != null,
      `<Router basename="${d}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : k.createElement(
          In.Provider,
          { value: f },
          k.createElement(gu.Provider, { children: t, value: w })
        )
  );
}
function Ex({ children: n, location: t }) {
  return cx(yh(n), t);
}
function yh(n, t = []) {
  let r = [];
  return (
    k.Children.forEach(n, (i, l) => {
      if (!k.isValidElement(i)) return;
      let o = [...t, l];
      if (i.type === k.Fragment) {
        r.push.apply(r, yh(i.props.children, o));
        return;
      }
      ht(
        i.type === _n,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ht(!i.props.index || !i.props.children, 'An index route cannot have child routes.');
      let d = {
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
      i.props.children && (d.children = yh(i.props.children, o)), r.push(d);
    }),
    r
  );
}
var Qo = 'get',
  Ko = 'application/x-www-form-urlencoded';
function xc(n) {
  return n != null && typeof n.tagName == 'string';
}
function Cx(n) {
  return xc(n) && n.tagName.toLowerCase() === 'button';
}
function Tx(n) {
  return xc(n) && n.tagName.toLowerCase() === 'form';
}
function Mx(n) {
  return xc(n) && n.tagName.toLowerCase() === 'input';
}
function Nx(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Dx(n, t) {
  return n.button === 0 && (!t || t === '_self') && !Nx(n);
}
var Uo = null;
function Ax() {
  if (Uo === null)
    try {
      new FormData(document.createElement('form'), 0), (Uo = !1);
    } catch {
      Uo = !0;
    }
  return Uo;
}
var kx = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Xd(n) {
  return n != null && !kx.has(n)
    ? (Wn(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ko}"`
      ),
      null)
    : n;
}
function Rx(n, t) {
  let r, i, l, o, d;
  if (Tx(n)) {
    let f = n.getAttribute('action');
    (i = f ? $a(f, t) : null),
      (r = n.getAttribute('method') || Qo),
      (l = Xd(n.getAttribute('enctype')) || Ko),
      (o = new FormData(n));
  } else if (Cx(n) || (Mx(n) && (n.type === 'submit' || n.type === 'image'))) {
    let f = n.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let m = n.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((i = m ? $a(m, t) : null),
      (r = n.getAttribute('formmethod') || f.getAttribute('method') || Qo),
      (l = Xd(n.getAttribute('formenctype')) || Xd(f.getAttribute('enctype')) || Ko),
      (o = new FormData(f, n)),
      !Ax())
    ) {
      let { name: g, type: y, value: v } = n;
      if (y === 'image') {
        let _ = g ? `${g}.` : '';
        o.append(`${_}x`, '0'), o.append(`${_}y`, '0');
      } else g && o.append(g, v);
    }
  } else {
    if (xc(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Qo), (i = null), (l = Ko), (d = n);
  }
  return (
    o && l === 'text/plain' && ((d = o), (o = void 0)),
    { action: i, method: r.toLowerCase(), encType: l, formData: o, body: d }
  );
}
function Lh(n, t) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(t);
}
async function jx(n, t) {
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
function zx(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' && typeof n.imageSrcSet == 'string' && typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function Ux(n, t, r) {
  let i = await Promise.all(
    n.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let d = await jx(o, r);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Vx(
    i
      .flat(1)
      .filter(zx)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet' ? { ...l, rel: 'prefetch', as: 'style' } : { ...l, rel: 'prefetch' }
      )
  );
}
function tv(n, t, r, i, l, o) {
  let d = (m, g) => (r[g] ? m.route.id !== r[g].route.id : !0),
    f = (m, g) => {
      var y;
      return (
        r[g].pathname !== m.pathname ||
        (((y = r[g].route.path) == null ? void 0 : y.endsWith('*')) &&
          r[g].params['*'] !== m.params['*'])
      );
    };
  return o === 'assets'
    ? t.filter((m, g) => d(m, g) || f(m, g))
    : o === 'data'
      ? t.filter((m, g) => {
          var v;
          let y = i.routes[m.route.id];
          if (!y || !y.hasLoader) return !1;
          if (d(m, g) || f(m, g)) return !0;
          if (m.route.shouldRevalidate) {
            let _ = m.route.shouldRevalidate({
              currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
              currentParams: ((v = r[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof _ == 'boolean') return _;
          }
          return !0;
        })
      : [];
}
function Lx(n, t, { includeHydrateFallback: r } = {}) {
  return Bx(
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
function Bx(n) {
  return [...new Set(n)];
}
function Hx(n) {
  let t = {},
    r = Object.keys(n).sort();
  for (let i of r) t[i] = n[i];
  return t;
}
function Vx(n, t) {
  let r = new Set();
  return (
    new Set(t),
    n.reduce((i, l) => {
      let o = JSON.stringify(Hx(l));
      return r.has(o) || (r.add(o), i.push({ key: o, link: l })), i;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Yx = new Set([100, 101, 204, 205]);
function qx(n, t) {
  let r =
    typeof n == 'string'
      ? new URL(n, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : n;
  return (
    r.pathname === '/'
      ? (r.pathname = '_root.data')
      : t && $a(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
    r
  );
}
function N0() {
  let n = k.useContext(Ts);
  return Lh(n, 'You must render this element inside a <DataRouterContext.Provider> element'), n;
}
function Zx() {
  let n = k.useContext(Sc);
  return (
    Lh(n, 'You must render this element inside a <DataRouterStateContext.Provider> element'), n
  );
}
var Bh = k.createContext(void 0);
Bh.displayName = 'FrameworkContext';
function D0() {
  let n = k.useContext(Bh);
  return Lh(n, 'You must render this element inside a <HydratedRouter> element'), n;
}
function Fx(n, t) {
  let r = k.useContext(Bh),
    [i, l] = k.useState(!1),
    [o, d] = k.useState(!1),
    { onFocus: f, onBlur: m, onMouseEnter: g, onMouseLeave: y, onTouchStart: v } = t,
    _ = k.useRef(null);
  k.useEffect(() => {
    if ((n === 'render' && d(!0), n === 'viewport')) {
      let N = (A) => {
          A.forEach((j) => {
            d(j.isIntersecting);
          });
        },
        T = new IntersectionObserver(N, { threshold: 0.5 });
      return (
        _.current && T.observe(_.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [n]),
    k.useEffect(() => {
      if (i) {
        let N = setTimeout(() => {
          d(!0);
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
      l(!1), d(!1);
    };
  return r
    ? n !== 'intent'
      ? [o, _, {}]
      : [
          o,
          _,
          {
            onFocus: Nl(f, w),
            onBlur: Nl(m, x),
            onMouseEnter: Nl(g, w),
            onMouseLeave: Nl(y, x),
            onTouchStart: Nl(v, w),
          },
        ]
    : [!1, _, {}];
}
function Nl(n, t) {
  return (r) => {
    n && n(r), r.defaultPrevented || t(r);
  };
}
function Px({ page: n, ...t }) {
  let { router: r } = N0(),
    i = k.useMemo(() => _0(r.routes, n, r.basename), [r.routes, n, r.basename]);
  return i ? k.createElement($x, { page: n, matches: i, ...t }) : null;
}
function Gx(n) {
  let { manifest: t, routeModules: r } = D0(),
    [i, l] = k.useState([]);
  return (
    k.useEffect(() => {
      let o = !1;
      return (
        Ux(n, t, r).then((d) => {
          o || l(d);
        }),
        () => {
          o = !0;
        }
      );
    }, [n, t, r]),
    i
  );
}
function $x({ page: n, matches: t, ...r }) {
  let i = Wa(),
    { manifest: l, routeModules: o } = D0(),
    { basename: d } = N0(),
    { loaderData: f, matches: m } = Zx(),
    g = k.useMemo(() => tv(n, t, m, l, i, 'data'), [n, t, m, l, i]),
    y = k.useMemo(() => tv(n, t, m, l, i, 'assets'), [n, t, m, l, i]),
    v = k.useMemo(() => {
      if (n === i.pathname + i.search + i.hash) return [];
      let x = new Set(),
        N = !1;
      if (
        (t.forEach((A) => {
          var R;
          let j = l.routes[A.route.id];
          !j ||
            !j.hasLoader ||
            ((!g.some((q) => q.route.id === A.route.id) &&
              A.route.id in f &&
              (R = o[A.route.id]) != null &&
              R.shouldRevalidate) ||
            j.hasClientLoader
              ? (N = !0)
              : x.add(A.route.id));
        }),
        x.size === 0)
      )
        return [];
      let T = qx(n, d);
      return (
        N &&
          x.size > 0 &&
          T.searchParams.set(
            '_routes',
            t
              .filter((A) => x.has(A.route.id))
              .map((A) => A.route.id)
              .join(',')
          ),
        [T.pathname + T.search]
      );
    }, [d, f, i, l, g, t, n, o]),
    _ = k.useMemo(() => Lx(y, l), [y, l]),
    w = Gx(y);
  return k.createElement(
    k.Fragment,
    null,
    v.map((x) => k.createElement('link', { key: x, rel: 'prefetch', as: 'fetch', href: x, ...r })),
    _.map((x) => k.createElement('link', { key: x, rel: 'modulepreload', href: x, ...r })),
    w.map(({ key: x, link: N }) => k.createElement('link', { key: x, ...N }))
  );
}
function Qx(...n) {
  return (t) => {
    n.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var A0 =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  A0 && (window.__reactRouterVersion = '7.6.0');
} catch {}
function Kx({ basename: n, children: t, window: r }) {
  let i = k.useRef();
  i.current == null && (i.current = RS({ window: r, v5Compat: !0 }));
  let l = i.current,
    [o, d] = k.useState({ action: l.action, location: l.location }),
    f = k.useCallback(
      (m) => {
        k.startTransition(() => d(m));
      },
      [d]
    );
  return (
    k.useLayoutEffect(() => l.listen(f), [l, f]),
    k.createElement(Ox, {
      basename: n,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
var k0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R0 = k.forwardRef(function (
    {
      onClick: t,
      discover: r = 'render',
      prefetch: i = 'none',
      relative: l,
      reloadDocument: o,
      replace: d,
      state: f,
      target: m,
      to: g,
      preventScrollReset: y,
      viewTransition: v,
      ..._
    },
    w
  ) {
    let { basename: x } = k.useContext(In),
      N = typeof g == 'string' && k0.test(g),
      T,
      A = !1;
    if (typeof g == 'string' && N && ((T = g), A0))
      try {
        let X = new URL(window.location.href),
          ye = g.startsWith('//') ? new URL(X.protocol + g) : new URL(g),
          ke = $a(ye.pathname, x);
        ye.origin === X.origin && ke != null ? (g = ke + ye.search + ye.hash) : (A = !0);
      } catch {
        Wn(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let j = sx(g, { relative: l }),
      [R, q, M] = Fx(i, _),
      K = Jx(g, {
        replace: d,
        state: f,
        target: m,
        preventScrollReset: y,
        relative: l,
        viewTransition: v,
      });
    function W(X) {
      t && t(X), X.defaultPrevented || K(X);
    }
    let oe = k.createElement('a', {
      ..._,
      ...M,
      href: T || j,
      onClick: A || o ? t : W,
      ref: Qx(w, q),
      target: m,
      'data-discover': !N && r === 'render' ? 'true' : void 0,
    });
    return R && !N ? k.createElement(k.Fragment, null, oe, k.createElement(Px, { page: j })) : oe;
  });
R0.displayName = 'Link';
var Wx = k.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: r = !1,
    className: i = '',
    end: l = !1,
    style: o,
    to: d,
    viewTransition: f,
    children: m,
    ...g
  },
  y
) {
  let v = yu(d, { relative: g.relative }),
    _ = Wa(),
    w = k.useContext(Sc),
    { navigator: x, basename: N } = k.useContext(In),
    T = w != null && rw(v) && f === !0,
    A = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname,
    j = _.pathname,
    R = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  r || ((j = j.toLowerCase()), (R = R ? R.toLowerCase() : null), (A = A.toLowerCase())),
    R && N && (R = $a(R, N) || R);
  const q = A !== '/' && A.endsWith('/') ? A.length - 1 : A.length;
  let M = j === A || (!l && j.startsWith(A) && j.charAt(q) === '/'),
    K = R != null && (R === A || (!l && R.startsWith(A) && R.charAt(A.length) === '/')),
    W = { isActive: M, isPending: K, isTransitioning: T },
    oe = M ? t : void 0,
    X;
  typeof i == 'function'
    ? (X = i(W))
    : (X = [i, M ? 'active' : null, K ? 'pending' : null, T ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let ye = typeof o == 'function' ? o(W) : o;
  return k.createElement(
    R0,
    { ...g, 'aria-current': oe, className: X, ref: y, style: ye, to: d, viewTransition: f },
    typeof m == 'function' ? m(W) : m
  );
});
Wx.displayName = 'NavLink';
var Xx = k.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: i,
      replace: l,
      state: o,
      method: d = Qo,
      action: f,
      onSubmit: m,
      relative: g,
      preventScrollReset: y,
      viewTransition: v,
      ..._
    },
    w
  ) => {
    let x = nw(),
      N = aw(f, { relative: g }),
      T = d.toLowerCase() === 'get' ? 'get' : 'post',
      A = typeof f == 'string' && k0.test(f),
      j = (R) => {
        if ((m && m(R), R.defaultPrevented)) return;
        R.preventDefault();
        let q = R.nativeEvent.submitter,
          M = (q == null ? void 0 : q.getAttribute('formmethod')) || d;
        x(q || R.currentTarget, {
          fetcherKey: t,
          method: M,
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
      method: T,
      action: N,
      onSubmit: i ? m : j,
      ..._,
      'data-discover': !A && n === 'render' ? 'true' : void 0,
    });
  }
);
Xx.displayName = 'Form';
function Ix(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function j0(n) {
  let t = k.useContext(Ts);
  return ht(t, Ix(n)), t;
}
function Jx(
  n,
  { target: t, replace: r, state: i, preventScrollReset: l, relative: o, viewTransition: d } = {}
) {
  let f = Ft(),
    m = Wa(),
    g = yu(n, { relative: o });
  return k.useCallback(
    (y) => {
      if (Dx(y, t)) {
        y.preventDefault();
        let v = r !== void 0 ? r : Pl(m) === Pl(g);
        f(n, { replace: v, state: i, preventScrollReset: l, relative: o, viewTransition: d });
      }
    },
    [m, f, g, r, i, t, n, l, o, d]
  );
}
var ew = 0,
  tw = () => `__${String(++ew)}__`;
function nw() {
  let { router: n } = j0('useSubmit'),
    { basename: t } = k.useContext(In),
    r = bx();
  return k.useCallback(
    async (i, l = {}) => {
      let { action: o, method: d, encType: f, formData: m, body: g } = Rx(i, t);
      if (l.navigate === !1) {
        let y = l.fetcherKey || tw();
        await n.fetch(y, r, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: g,
          formMethod: l.method || d,
          formEncType: l.encType || f,
          flushSync: l.flushSync,
        });
      } else
        await n.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: g,
          formMethod: l.method || d,
          formEncType: l.encType || f,
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
function aw(n, { relative: t } = {}) {
  let { basename: r } = k.useContext(In),
    i = k.useContext(Jn);
  ht(i, 'useFormAction must be used inside a RouteContext');
  let [l] = i.matches.slice(-1),
    o = { ...yu(n || '.', { relative: t }) },
    d = Wa();
  if (n == null) {
    o.search = d.search;
    let f = new URLSearchParams(o.search),
      m = f.getAll('index');
    if (m.some((y) => y === '')) {
      f.delete('index'), m.filter((v) => v).forEach((v) => f.append('index', v));
      let y = f.toString();
      o.search = y ? `?${y}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Pa([r, o.pathname])),
    Pl(o)
  );
}
function rw(n, t = {}) {
  let r = k.useContext(O0);
  ht(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = j0('useViewTransitionState'),
    l = yu(n, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = $a(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    d = $a(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Io(l.pathname, d) != null || Io(l.pathname, o) != null;
}
[...Yx];
const iw = '_header_942z7_1',
  sw = '_logo_942z7_56',
  lw = '_list_942z7_75',
  uw = '_search_942z7_79',
  ow = '_menu_942z7_75',
  cw = '_hint_942z7_179',
  he = {
    'header-wrapper': '_header-wrapper_942z7_1',
    header: iw,
    'add-header-menu': '_add-header-menu_942z7_24',
    'header-case': '_header-case_942z7_28',
    'header-inner': '_header-inner_942z7_40',
    'home-link-wrapper': '_home-link-wrapper_942z7_48',
    'logo-header': '_logo-header_942z7_56',
    logo: sw,
    'menu-search': '_menu-search_942z7_75',
    list: lw,
    search: uw,
    menu: ow,
    'input-search': '_input-search_942z7_106',
    'menu-list': '_menu-list_942z7_115',
    'home-link': '_home-link_942z7_48',
    'counter-cart': '_counter-cart_942z7_137',
    'sing-up-menu': '_sing-up-menu_942z7_153',
    'list-sing-up': '_list-sing-up_942z7_171',
    'button-login': '_button-login_942z7_175',
    'button-sing-up': '_button-sing-up_942z7_175',
    hint: cw,
    'nav-home-link-wrapper': '_nav-home-link-wrapper_942z7_199',
    'main-home-icon': '_main-home-icon_942z7_204',
    'img-list': '_img-list_942z7_216',
    'text-list': '_text-list_942z7_217',
    'person-icon': '_person-icon_942z7_221',
    'order-icon': '_order-icon_942z7_223',
    'favorite-icon': '_favorite-icon_942z7_224',
    'cart-icon': '_cart-icon_942z7_225',
    'wrapper-add-header-menu': '_wrapper-add-header-menu_942z7_244',
    'add-menu-button-all': '_add-menu-button-all_942z7_255',
    'add-menu-catalog': '_add-menu-catalog_942z7_256',
    'add-menu-pet-food': '_add-menu-pet-food_942z7_257',
    'add-menu-accessories': '_add-menu-accessories_942z7_258',
    'add-menu-promotions': '_add-menu-promotions_942z7_259',
    'add-menu-list': '_add-menu-list_942z7_277',
    'canvas-aside-menu': '_canvas-aside-menu_942z7_283',
    'visible-canvas-aside-menu': '_visible-canvas-aside-menu_942z7_291',
    'hidden-canvas-aside-menu': '_hidden-canvas-aside-menu_942z7_296',
    'aside-add-menu': '_aside-add-menu_942z7_301',
    'open-aside-add-menu': '_open-aside-add-menu_942z7_312',
    'close-aside-add-menu': '_close-aside-add-menu_942z7_316',
    'aside-menu-header': '_aside-menu-header_942z7_320',
    'aside-menu-team': '_aside-menu-team_942z7_321',
    'aside-menu-arrow': '_aside-menu-arrow_942z7_343',
    'select-dot': '_select-dot_942z7_349',
    'button-close-aside-menu': '_button-close-aside-menu_942z7_362',
  },
  fw = '/eCommerce/assets/logo-BIzYF2SY.png',
  Gl = k.createContext(null),
  z0 = k.createContext(() => {});
function dw() {
  const n = Wa(),
    [t, r] = k.useState(0);
  k.useEffect(() => {
    r((g) => g + 1);
  }, [n.pathname]);
  const [i, l] = k.useState(!1),
    [, o] = k.useState(0);
  function d() {
    l(!i);
  }
  const f = localStorage.getItem('firstName');
  let m = 'Guest';
  return (
    f && typeof f == 'string' && (m = f),
    S.jsx(
      'div',
      {
        className: he['header-wrapper'],
        children: S.jsxs(Gl.Provider, {
          value: m,
          children: [
            S.jsx(bw, { isOpen: i, toggleMenu: d }),
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
                        children: [S.jsx(L0, {}), S.jsx(U0, {})],
                      }),
                      S.jsx(hw, {}),
                    ],
                  }),
                  S.jsx(z0.Provider, {
                    value: () => {
                      o((g) => g + 1);
                    },
                    children: S.jsx(mw, {}),
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
function U0() {
  const n = Ft();
  return S.jsx('div', {
    className: he['home-link'],
    children: S.jsx('span', {
      onClick: () => void n('/'),
      className: `material-symbols-outlined ${he['main-home-icon']}`,
      children: 'home',
    }),
  });
}
function L0() {
  return S.jsx('div', {
    className: he['logo-header'],
    children: S.jsx('img', { className: he.logo, src: fw, alt: 'logo' }),
  });
}
function hw() {
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
function mw() {
  return S.jsxs('nav', {
    className: he.menu,
    children: [
      S.jsxs('div', {
        className: he['nav-home-link-wrapper'],
        children: [S.jsx(L0, {}), S.jsx(U0, {})],
      }),
      S.jsxs('ul', {
        className: he['menu-list'],
        children: [S.jsx(gw, {}), S.jsx(yw, {}), S.jsx(pw, {}), S.jsx(vw, {})],
      }),
    ],
  });
}
function gw() {
  const n = Ft(),
    t = k.useContext(Gl) ?? '',
    r = k.useContext(z0);
  let i = t,
    l = 'LOG OUT',
    o = 'View Profile',
    d = 'PROFILE';
  return (
    k.useContext(Gl) === 'Guest' &&
      ((i = 'Guest'), (l = 'LOG IN'), (o = "Don't have an account?"), (d = 'Sing Up')),
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
              children: d,
            }),
          ],
        }),
      ],
    })
  );
}
function yw() {
  const n = Ft();
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
function pw() {
  const n = Ft();
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
function vw() {
  const n = Ft();
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
function bw({ isOpen: n, toggleMenu: t }) {
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
        S.jsx(_w, { isOpen: n, toggleMenu: t }),
        S.jsx(ww, { toggleMenu: t }),
      ],
    })
  );
}
function _w({ isOpen: n, toggleMenu: t }) {
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
      S.jsx(Sw, { toggleMenu: t }),
      S.jsx(xw, { toggleMenu: t }),
    ],
  });
}
function Sw({ toggleMenu: n }) {
  const t = Ft(),
    r = k.useContext(Gl) ?? '',
    i = k.useContext(Gl) === 'Guest' ? 'Guest' : r;
  return S.jsxs('div', {
    onClick: () => {
      n(), t('/profile');
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
function xw({ toggleMenu: n }) {
  const t = Ft();
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
function ww({ toggleMenu: n }) {
  const t = Ft();
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
const Ow = '_footer_2q74u_1',
  pa = {
    footer: Ow,
    'footer-case': '_footer-case_2q74u_11',
    'about-link': '_about-link_2q74u_21',
    'shop-link': '_shop-link_2q74u_21',
    'sticker-link': '_sticker-link_2q74u_21',
    'help-link': '_help-link_2q74u_21',
  };
function Ew() {
  return S.jsx('footer', {
    className: pa.footer,
    children: S.jsxs('div', {
      className: pa['footer-case'],
      children: [S.jsx(Tw, {}), S.jsx(Nw, {}), S.jsx(Mw, {}), S.jsx(Cw, {})],
    }),
  });
}
function Cw() {
  const n = Ft();
  return S.jsx('div', {
    onClick: () => void n('/about'),
    className: `${pa.about} ${pa['about-link']}`,
    children: 'ABOUT US',
  });
}
function Tw() {
  return S.jsx('div', { className: `${pa.shop} ${pa['shop-link']}`, children: 'OUR SHOPS' });
}
function Mw() {
  return S.jsx('div', {
    className: `${pa.sticker} ${pa['sticker-link']}`,
    children: 'Our Telegram Stickers',
  });
}
function Nw() {
  return S.jsx('div', {
    className: `${pa.help} ${pa['help-link']}`,
    children: 'Help Homeless Animals',
  });
}
function Dw() {
  return S.jsxs(S.Fragment, { children: [S.jsx(dw, {}), S.jsx(wx, {}), S.jsx(Ew, {})] });
}
const Aw = '_main_1dl0b_1',
  kw = '_recommend_1dl0b_108',
  Rw = '_brands_1dl0b_109',
  jw = '_img0_1dl0b_172',
  zw = '_img1_1dl0b_172',
  Uw = '_img2_1dl0b_172',
  Lw = '_img3_1dl0b_172',
  Bw = '_img4_1dl0b_172',
  Hw = '_img5_1dl0b_172',
  Vw = '_img6_1dl0b_208',
  Yw = '_img7_1dl0b_208',
  qw = '_img8_1dl0b_208',
  Zw = '_img9_1dl0b_208',
  Fw = '_img10_1dl0b_208',
  Pw = '_img11_1dl0b_208',
  Gw = '_img12_1dl0b_208',
  $w = '_img13_1dl0b_208',
  We = {
    main: Aw,
    'title-main': '_title-main_1dl0b_10',
    'info-blocks': '_info-blocks_1dl0b_30',
    'main-info-block': '_main-info-block_1dl0b_37',
    'aside-info-block': '_aside-info-block_1dl0b_49',
    'aside-up-block': '_aside-up-block_1dl0b_57',
    'aside-down-block': '_aside-down-block_1dl0b_58',
    'left-arrow': '_left-arrow_1dl0b_81',
    'right-arrow': '_right-arrow_1dl0b_82',
    'small-left-arrow': '_small-left-arrow_1dl0b_102',
    'small-right-arrow': '_small-right-arrow_1dl0b_103',
    'brand-left-arrow': '_brand-left-arrow_1dl0b_103',
    'brand-right-arrow': '_brand-right-arrow_1dl0b_104',
    recommend: kw,
    brands: Rw,
    'list-recommend': '_list-recommend_1dl0b_116',
    'list-brands': '_list-brands_1dl0b_157',
    img0: jw,
    img1: zw,
    img2: Uw,
    img3: Lw,
    img4: Bw,
    img5: Hw,
    img6: Vw,
    img7: Yw,
    img8: qw,
    img9: Zw,
    img10: Fw,
    img11: Pw,
    img12: Gw,
    img13: $w,
    'pets-logo-icon': '_pets-logo-icon_1dl0b_252',
  };
function Qw() {
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
function Kw() {
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
function Ww() {
  return S.jsxs('aside', {
    className: We['aside-info-block'],
    children: [
      S.jsx('div', { className: We['aside-up-block'] }),
      S.jsx('div', { className: We['aside-down-block'] }),
    ],
  });
}
function Xw() {
  return S.jsx('h2', { className: We.recommend, children: 'Our Recommendations' });
}
function Iw() {
  return S.jsxs('div', {
    className: We['list-recommend'],
    children: [
      S.jsx(Jw, {}),
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
function Jw() {
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
function eO() {
  return S.jsx('h2', { className: We.brands, children: 'Brands' });
}
function tO() {
  return S.jsxs('div', {
    className: We['list-brands'],
    children: [
      S.jsx(nO, {}),
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
function nO() {
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
function aO() {
  return (
    k.useEffect(() => {
      document.title = 'Home | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('main', {
      className: We.main,
      children: [
        S.jsx(Qw, {}),
        S.jsxs('div', { className: We['info-blocks'], children: [S.jsx(Kw, {}), S.jsx(Ww, {})] }),
        S.jsx(Xw, {}),
        S.jsx(Iw, {}),
        S.jsx(eO, {}),
        S.jsx(tO, {}),
      ],
    })
  );
}
const rO =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%208L3.07945%204.30466C4.29638%202.84434%206.09909%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208L12.9206%2011.6953C11.7036%2013.1557%209.90091%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208ZM8%2011C9.65685%2011%2011%209.65685%2011%208C11%206.34315%209.65685%205%208%205C6.34315%205%205%206.34315%205%208C5%209.65685%206.34315%2011%208%2011Z'%20fill='%23000000'/%3e%3c/svg%3e",
  iO =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2016H13L10.8368%2013.3376C9.96488%2013.7682%208.99592%2014%208%2014C6.09909%2014%204.29638%2013.1557%203.07945%2011.6953L0%208L3.07945%204.30466C3.14989%204.22013%203.22229%204.13767%203.29656%204.05731L0%200H3L16%2016ZM5.35254%206.58774C5.12755%207.00862%205%207.48941%205%208C5%209.65685%206.34315%2011%208%2011C8.29178%2011%208.57383%2010.9583%208.84053%2010.8807L5.35254%206.58774Z'%20fill='%23000000'/%3e%3cpath%20d='M16%208L14.2278%2010.1266L7.63351%202.01048C7.75518%202.00351%207.87739%202%208%202C9.90091%202%2011.7036%202.84434%2012.9206%204.30466L16%208Z'%20fill='%23000000'/%3e%3c/svg%3e";
function nv({ register: n, errorMessage: t, type: r, label: i, placeholder: l, required: o }) {
  const [d, f] = k.useState(!1),
    m = r === 'password',
    g = m ? (d ? 'text' : 'password') : r,
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
                f((v) => !v);
              },
              children: S.jsx('img', {
                className: 'w-[20px]',
                src: d ? iO : rO,
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
var pu = (n) => n.type === 'checkbox',
  si = (n) => n instanceof Date,
  tn = (n) => n == null;
const B0 = (n) => typeof n == 'object';
var wt = (n) => !tn(n) && !Array.isArray(n) && B0(n) && !si(n),
  H0 = (n) => (wt(n) && n.target ? (pu(n.target) ? n.target.checked : n.target.value) : n),
  sO = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  V0 = (n, t) => n.has(sO(t)),
  lO = (n) => {
    const t = n.constructor && n.constructor.prototype;
    return wt(t) && t.hasOwnProperty('isPrototypeOf');
  },
  Hh = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function qt(n) {
  let t;
  const r = Array.isArray(n),
    i = typeof FileList < 'u' ? n instanceof FileList : !1;
  if (n instanceof Date) t = new Date(n);
  else if (n instanceof Set) t = new Set(n);
  else if (!(Hh && (n instanceof Blob || i)) && (r || wt(n)))
    if (((t = r ? [] : {}), !r && !lO(n))) t = n;
    else for (const l in n) n.hasOwnProperty(l) && (t[l] = qt(n[l]));
  else return n;
  return t;
}
var wc = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  xt = (n) => n === void 0,
  le = (n, t, r) => {
    if (!t || !wt(n)) return r;
    const i = wc(t.split(/[,[\].]+?/)).reduce((l, o) => (tn(l) ? l : l[o]), n);
    return xt(i) || i === n ? (xt(n[t]) ? r : n[t]) : i;
  },
  xn = (n) => typeof n == 'boolean',
  Vh = (n) => /^\w*$/.test(n),
  Y0 = (n) => wc(n.replace(/["|']|\]/g, '').split(/\.|\[/)),
  et = (n, t, r) => {
    let i = -1;
    const l = Vh(t) ? [t] : Y0(t),
      o = l.length,
      d = o - 1;
    for (; ++i < o; ) {
      const f = l[i];
      let m = r;
      if (i !== d) {
        const g = n[f];
        m = wt(g) || Array.isArray(g) ? g : isNaN(+l[i + 1]) ? {} : [];
      }
      if (f === '__proto__' || f === 'constructor' || f === 'prototype') return;
      (n[f] = m), (n = n[f]);
    }
  };
const Jo = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Fn = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Ba = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  uO = I.createContext(null),
  Yh = () => I.useContext(uO);
var q0 = (n, t, r, i = !0) => {
  const l = { defaultValues: t._defaultValues };
  for (const o in n)
    Object.defineProperty(l, o, {
      get: () => {
        const d = o;
        return (
          t._proxyFormState[d] !== Fn.all && (t._proxyFormState[d] = !i || Fn.all),
          r && (r[d] = !0),
          n[d]
        );
      },
    });
  return l;
};
const qh = typeof window < 'u' ? k.useLayoutEffect : k.useEffect;
function oO(n) {
  const t = Yh(),
    { control: r = t.control, disabled: i, name: l, exact: o } = n || {},
    [d, f] = I.useState(r._formState),
    m = I.useRef({
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
    qh(
      () =>
        r._subscribe({
          name: l,
          formState: m.current,
          exact: o,
          callback: (g) => {
            !i && f({ ...r._formState, ...g });
          },
        }),
      [l, i, o]
    ),
    I.useEffect(() => {
      m.current.isValid && r._setValid(!0);
    }, [r]),
    I.useMemo(() => q0(d, r, m.current, !1), [d, r])
  );
}
var ha = (n) => typeof n == 'string',
  Z0 = (n, t, r, i, l) =>
    ha(n)
      ? (i && t.watch.add(n), le(r, n, l))
      : Array.isArray(n)
        ? n.map((o) => (i && t.watch.add(o), le(r, o)))
        : (i && (t.watchAll = !0), r);
function F0(n) {
  const t = Yh(),
    { control: r = t.control, name: i, defaultValue: l, disabled: o, exact: d } = n || {},
    f = I.useRef(l),
    [m, g] = I.useState(r._getWatch(i, f.current));
  return (
    qh(
      () =>
        r._subscribe({
          name: i,
          formState: { values: !0 },
          exact: d,
          callback: (y) => !o && g(Z0(i, r._names, y.values || r._formValues, !1, f.current)),
        }),
      [i, r, o, d]
    ),
    I.useEffect(() => r._removeUnmounted()),
    m
  );
}
function cO(n) {
  const t = Yh(),
    { name: r, disabled: i, control: l = t.control, shouldUnregister: o } = n,
    d = V0(l._names.array, r),
    f = F0({
      control: l,
      name: r,
      defaultValue: le(l._formValues, r, le(l._defaultValues, r, n.defaultValue)),
      exact: !0,
    }),
    m = oO({ control: l, name: r, exact: !0 }),
    g = I.useRef(n),
    y = I.useRef(
      l.register(r, { ...n.rules, value: f, ...(xn(n.disabled) ? { disabled: n.disabled } : {}) })
    ),
    v = I.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!le(m.errors, r) },
            isDirty: { enumerable: !0, get: () => !!le(m.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!le(m.touchedFields, r) },
            isValidating: { enumerable: !0, get: () => !!le(m.validatingFields, r) },
            error: { enumerable: !0, get: () => le(m.errors, r) },
          }
        ),
      [m, r]
    ),
    _ = I.useCallback(
      (T) => y.current.onChange({ target: { value: H0(T), name: r }, type: Jo.CHANGE }),
      [r]
    ),
    w = I.useCallback(
      () => y.current.onBlur({ target: { value: le(l._formValues, r), name: r }, type: Jo.BLUR }),
      [r, l._formValues]
    ),
    x = I.useCallback(
      (T) => {
        const A = le(l._fields, r);
        A &&
          T &&
          (A._f.ref = {
            focus: () => T.focus(),
            select: () => T.select(),
            setCustomValidity: (j) => T.setCustomValidity(j),
            reportValidity: () => T.reportValidity(),
          });
      },
      [l._fields, r]
    ),
    N = I.useMemo(
      () => ({
        name: r,
        value: f,
        ...(xn(i) || m.disabled ? { disabled: m.disabled || i } : {}),
        onChange: _,
        onBlur: w,
        ref: x,
      }),
      [r, i, m.disabled, _, w, x, f]
    );
  return (
    I.useEffect(() => {
      const T = l._options.shouldUnregister || o;
      l.register(r, {
        ...g.current.rules,
        ...(xn(g.current.disabled) ? { disabled: g.current.disabled } : {}),
      });
      const A = (j, R) => {
        const q = le(l._fields, j);
        q && q._f && (q._f.mount = R);
      };
      if ((A(r, !0), T)) {
        const j = qt(le(l._options.defaultValues, r));
        et(l._defaultValues, r, j), xt(le(l._formValues, r)) && et(l._formValues, r, j);
      }
      return (
        !d && l.register(r),
        () => {
          (d ? T && !l._state.action : T) ? l.unregister(r) : A(r, !1);
        }
      );
    }, [r, l, d, o]),
    I.useEffect(() => {
      l._setDisabledField({ disabled: i, name: r });
    }, [i, r, l]),
    I.useMemo(() => ({ field: N, formState: m, fieldState: v }), [N, m, v])
  );
}
const fO = (n) => n.render(cO(n));
var P0 = (n, t, r, i, l) =>
    t ? { ...r[n], types: { ...(r[n] && r[n].types ? r[n].types : {}), [i]: l || !0 } } : {},
  Yl = (n) => (Array.isArray(n) ? n : [n]),
  av = () => {
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
  ph = (n) => tn(n) || !B0(n);
function Tr(n, t) {
  if (ph(n) || ph(t)) return n === t;
  if (si(n) && si(t)) return n.getTime() === t.getTime();
  const r = Object.keys(n),
    i = Object.keys(t);
  if (r.length !== i.length) return !1;
  for (const l of r) {
    const o = n[l];
    if (!i.includes(l)) return !1;
    if (l !== 'ref') {
      const d = t[l];
      if (
        (si(o) && si(d)) || (wt(o) && wt(d)) || (Array.isArray(o) && Array.isArray(d))
          ? !Tr(o, d)
          : o !== d
      )
        return !1;
    }
  }
  return !0;
}
var en = (n) => wt(n) && !Object.keys(n).length,
  Zh = (n) => n.type === 'file',
  Pn = (n) => typeof n == 'function',
  ec = (n) => {
    if (!Hh) return !1;
    const t = n ? n.ownerDocument : 0;
    return n instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  G0 = (n) => n.type === 'select-multiple',
  Fh = (n) => n.type === 'radio',
  dO = (n) => Fh(n) || pu(n),
  Id = (n) => ec(n) && n.isConnected;
function hO(n, t) {
  const r = t.slice(0, -1).length;
  let i = 0;
  for (; i < r; ) n = xt(n) ? i++ : n[t[i++]];
  return n;
}
function mO(n) {
  for (const t in n) if (n.hasOwnProperty(t) && !xt(n[t])) return !1;
  return !0;
}
function At(n, t) {
  const r = Array.isArray(t) ? t : Vh(t) ? [t] : Y0(t),
    i = r.length === 1 ? n : hO(n, r),
    l = r.length - 1,
    o = r[l];
  return (
    i && delete i[o],
    l !== 0 && ((wt(i) && en(i)) || (Array.isArray(i) && mO(i))) && At(n, r.slice(0, -1)),
    n
  );
}
var $0 = (n) => {
  for (const t in n) if (Pn(n[t])) return !0;
  return !1;
};
function tc(n, t = {}) {
  const r = Array.isArray(n);
  if (wt(n) || r)
    for (const i in n)
      Array.isArray(n[i]) || (wt(n[i]) && !$0(n[i]))
        ? ((t[i] = Array.isArray(n[i]) ? [] : {}), tc(n[i], t[i]))
        : tn(n[i]) || (t[i] = !0);
  return t;
}
function Q0(n, t, r) {
  const i = Array.isArray(n);
  if (wt(n) || i)
    for (const l in n)
      Array.isArray(n[l]) || (wt(n[l]) && !$0(n[l]))
        ? xt(t) || ph(r[l])
          ? (r[l] = Array.isArray(n[l]) ? tc(n[l], []) : { ...tc(n[l]) })
          : Q0(n[l], tn(t) ? {} : t[l], r[l])
        : (r[l] = !Tr(n[l], t[l]));
  return r;
}
var Dl = (n, t) => Q0(n, t, tc(t));
const rv = { value: !1, isValid: !1 },
  iv = { value: !0, isValid: !0 };
var K0 = (n) => {
    if (Array.isArray(n)) {
      if (n.length > 1) {
        const t = n.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
        return { value: t, isValid: !!t.length };
      }
      return n[0].checked && !n[0].disabled
        ? n[0].attributes && !xt(n[0].attributes.value)
          ? xt(n[0].value) || n[0].value === ''
            ? iv
            : { value: n[0].value, isValid: !0 }
          : iv
        : rv;
    }
    return rv;
  },
  W0 = (n, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
    xt(n) ? n : t ? (n === '' ? NaN : n && +n) : r && ha(n) ? new Date(n) : i ? i(n) : n;
const sv = { isValid: !1, value: null };
var X0 = (n) =>
  Array.isArray(n)
    ? n.reduce((t, r) => (r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t), sv)
    : sv;
function lv(n) {
  const t = n.ref;
  return Zh(t)
    ? t.files
    : Fh(t)
      ? X0(n.refs).value
      : G0(t)
        ? [...t.selectedOptions].map(({ value: r }) => r)
        : pu(t)
          ? K0(n.refs).value
          : W0(xt(t.value) ? n.ref.value : t.value, n);
}
var gO = (n, t, r, i) => {
    const l = {};
    for (const o of n) {
      const d = le(t, o);
      d && et(l, o, d._f);
    }
    return { criteriaMode: r, names: [...n], fields: l, shouldUseNativeValidation: i };
  },
  nc = (n) => n instanceof RegExp,
  Al = (n) => (xt(n) ? n : nc(n) ? n.source : wt(n) ? (nc(n.value) ? n.value.source : n.value) : n),
  uv = (n) => ({
    isOnSubmit: !n || n === Fn.onSubmit,
    isOnBlur: n === Fn.onBlur,
    isOnChange: n === Fn.onChange,
    isOnAll: n === Fn.all,
    isOnTouch: n === Fn.onTouched,
  });
const ov = 'AsyncFunction';
var yO = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (Pn(n.validate) && n.validate.constructor.name === ov) ||
      (wt(n.validate) && Object.values(n.validate).find((t) => t.constructor.name === ov))
    ),
  pO = (n) =>
    n.mount &&
    (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate),
  cv = (n, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(n) ||
      [...t.watch].some((i) => n.startsWith(i) && /^\.\w+/.test(n.slice(i.length))));
const ql = (n, t, r, i) => {
  for (const l of r || Object.keys(n)) {
    const o = le(n, l);
    if (o) {
      const { _f: d, ...f } = o;
      if (d) {
        if (d.refs && d.refs[0] && t(d.refs[0], l) && !i) return !0;
        if (d.ref && t(d.ref, d.name) && !i) return !0;
        if (ql(f, t)) break;
      } else if (wt(f) && ql(f, t)) break;
    }
  }
};
function fv(n, t, r) {
  const i = le(n, r);
  if (i || Vh(r)) return { error: i, name: r };
  const l = r.split('.');
  for (; l.length; ) {
    const o = l.join('.'),
      d = le(t, o),
      f = le(n, o);
    if (d && !Array.isArray(d) && r !== o) return { name: r };
    if (f && f.type) return { name: o, error: f };
    l.pop();
  }
  return { name: r };
}
var vO = (n, t, r, i) => {
    r(n);
    const { name: l, ...o } = n;
    return (
      en(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((d) => t[d] === (!i || Fn.all))
    );
  },
  bO = (n, t, r) =>
    !n ||
    !t ||
    n === t ||
    Yl(n).some((i) => i && (r ? i === t : i.startsWith(t) || t.startsWith(i))),
  _O = (n, t, r, i, l) =>
    l.isOnAll
      ? !1
      : !r && l.isOnTouch
        ? !(t || n)
        : (r ? i.isOnBlur : l.isOnBlur)
          ? !n
          : (r ? i.isOnChange : l.isOnChange)
            ? n
            : !0,
  SO = (n, t) => !wc(le(n, t)).length && At(n, t),
  xO = (n, t, r) => {
    const i = Yl(le(n, r));
    return et(i, 'root', t[r]), et(n, r, i), n;
  },
  Wo = (n) => ha(n);
function dv(n, t, r = 'validate') {
  if (Wo(n) || (Array.isArray(n) && n.every(Wo)) || (xn(n) && !n))
    return { type: r, message: Wo(n) ? n : '', ref: t };
}
var rs = (n) => (wt(n) && !nc(n) ? n : { value: n, message: '' }),
  hv = async (n, t, r, i, l, o) => {
    const {
        ref: d,
        refs: f,
        required: m,
        maxLength: g,
        minLength: y,
        min: v,
        max: _,
        pattern: w,
        validate: x,
        name: N,
        valueAsNumber: T,
        mount: A,
      } = n._f,
      j = le(r, N);
    if (!A || t.has(N)) return {};
    const R = f ? f[0] : d,
      q = (de) => {
        l && R.reportValidity && (R.setCustomValidity(xn(de) ? '' : de || ''), R.reportValidity());
      },
      M = {},
      K = Fh(d),
      W = pu(d),
      oe = K || W,
      X =
        ((T || Zh(d)) && xt(d.value) && xt(j)) ||
        (ec(d) && d.value === '') ||
        j === '' ||
        (Array.isArray(j) && !j.length),
      ye = P0.bind(null, N, i, M),
      ke = (de, Se, Ae, He = Ba.maxLength, V = Ba.minLength) => {
        const J = de ? Se : Ae;
        M[N] = { type: de ? He : V, message: J, ref: d, ...ye(de ? He : V, J) };
      };
    if (
      o
        ? !Array.isArray(j) || !j.length
        : m &&
          ((!oe && (X || tn(j))) || (xn(j) && !j) || (W && !K0(f).isValid) || (K && !X0(f).isValid))
    ) {
      const { value: de, message: Se } = Wo(m) ? { value: !!m, message: m } : rs(m);
      if (de && ((M[N] = { type: Ba.required, message: Se, ref: R, ...ye(Ba.required, Se) }), !i))
        return q(Se), M;
    }
    if (!X && (!tn(v) || !tn(_))) {
      let de, Se;
      const Ae = rs(_),
        He = rs(v);
      if (!tn(j) && !isNaN(j)) {
        const V = d.valueAsNumber || (j && +j);
        tn(Ae.value) || (de = V > Ae.value), tn(He.value) || (Se = V < He.value);
      } else {
        const V = d.valueAsDate || new Date(j),
          J = (E) => new Date(new Date().toDateString() + ' ' + E),
          ce = d.type == 'time',
          xe = d.type == 'week';
        ha(Ae.value) &&
          j &&
          (de = ce ? J(j) > J(Ae.value) : xe ? j > Ae.value : V > new Date(Ae.value)),
          ha(He.value) &&
            j &&
            (Se = ce ? J(j) < J(He.value) : xe ? j < He.value : V < new Date(He.value));
      }
      if ((de || Se) && (ke(!!de, Ae.message, He.message, Ba.max, Ba.min), !i))
        return q(M[N].message), M;
    }
    if ((g || y) && !X && (ha(j) || (o && Array.isArray(j)))) {
      const de = rs(g),
        Se = rs(y),
        Ae = !tn(de.value) && j.length > +de.value,
        He = !tn(Se.value) && j.length < +Se.value;
      if ((Ae || He) && (ke(Ae, de.message, Se.message), !i)) return q(M[N].message), M;
    }
    if (w && !X && ha(j)) {
      const { value: de, message: Se } = rs(w);
      if (
        nc(de) &&
        !j.match(de) &&
        ((M[N] = { type: Ba.pattern, message: Se, ref: d, ...ye(Ba.pattern, Se) }), !i)
      )
        return q(Se), M;
    }
    if (x) {
      if (Pn(x)) {
        const de = await x(j, r),
          Se = dv(de, R);
        if (Se && ((M[N] = { ...Se, ...ye(Ba.validate, Se.message) }), !i)) return q(Se.message), M;
      } else if (wt(x)) {
        let de = {};
        for (const Se in x) {
          if (!en(de) && !i) break;
          const Ae = dv(await x[Se](j, r), R, Se);
          Ae && ((de = { ...Ae, ...ye(Se, Ae.message) }), q(Ae.message), i && (M[N] = de));
        }
        if (!en(de) && ((M[N] = { ref: R, ...de }), !i)) return M;
      }
    }
    return q(!0), M;
  };
const wO = { mode: Fn.onSubmit, reValidateMode: Fn.onChange, shouldFocusError: !0 };
function OO(n = {}) {
  let t = { ...wO, ...n },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: Pn(t.defaultValues),
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
  let l = wt(t.defaultValues) || wt(t.values) ? qt(t.defaultValues || t.values) || {} : {},
    o = t.shouldUnregister ? {} : qt(l),
    d = { action: !1, mount: !1, watch: !1 },
    f = {
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
  const _ = { array: av(), state: av() },
    w = t.criteriaMode === Fn.all,
    x = (C) => (B) => {
      clearTimeout(g), (g = setTimeout(C, B));
    },
    N = async (C) => {
      if (!t.disabled && (y.isValid || v.isValid || C)) {
        const B = t.resolver ? en((await W()).errors) : await X(i, !0);
        B !== r.isValid && _.state.next({ isValid: B });
      }
    },
    T = (C, B) => {
      !t.disabled &&
        (y.isValidating || y.validatingFields || v.isValidating || v.validatingFields) &&
        ((C || Array.from(f.mount)).forEach((F) => {
          F && (B ? et(r.validatingFields, F, B) : At(r.validatingFields, F));
        }),
        _.state.next({
          validatingFields: r.validatingFields,
          isValidating: !en(r.validatingFields),
        }));
    },
    A = (C, B = [], F, se, ie = !0, ne = !0) => {
      if (se && F && !t.disabled) {
        if (((d.action = !0), ne && Array.isArray(le(i, C)))) {
          const ge = F(le(i, C), se.argA, se.argB);
          ie && et(i, C, ge);
        }
        if (ne && Array.isArray(le(r.errors, C))) {
          const ge = F(le(r.errors, C), se.argA, se.argB);
          ie && et(r.errors, C, ge), SO(r.errors, C);
        }
        if ((y.touchedFields || v.touchedFields) && ne && Array.isArray(le(r.touchedFields, C))) {
          const ge = F(le(r.touchedFields, C), se.argA, se.argB);
          ie && et(r.touchedFields, C, ge);
        }
        (y.dirtyFields || v.dirtyFields) && (r.dirtyFields = Dl(l, o)),
          _.state.next({
            name: C,
            isDirty: ke(C, B),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else et(o, C, B);
    },
    j = (C, B) => {
      et(r.errors, C, B), _.state.next({ errors: r.errors });
    },
    R = (C) => {
      (r.errors = C), _.state.next({ errors: r.errors, isValid: !1 });
    },
    q = (C, B, F, se) => {
      const ie = le(i, C);
      if (ie) {
        const ne = le(o, C, xt(F) ? le(l, C) : F);
        xt(ne) || (se && se.defaultChecked) || B ? et(o, C, B ? ne : lv(ie._f)) : Ae(C, ne),
          d.mount && N();
      }
    },
    M = (C, B, F, se, ie) => {
      let ne = !1,
        ge = !1;
      const De = { name: C };
      if (!t.disabled) {
        if (!F || se) {
          (y.isDirty || v.isDirty) &&
            ((ge = r.isDirty), (r.isDirty = De.isDirty = ke()), (ne = ge !== De.isDirty));
          const qe = Tr(le(l, C), B);
          (ge = !!le(r.dirtyFields, C)),
            qe ? At(r.dirtyFields, C) : et(r.dirtyFields, C, !0),
            (De.dirtyFields = r.dirtyFields),
            (ne = ne || ((y.dirtyFields || v.dirtyFields) && ge !== !qe));
        }
        if (F) {
          const qe = le(r.touchedFields, C);
          qe ||
            (et(r.touchedFields, C, F),
            (De.touchedFields = r.touchedFields),
            (ne = ne || ((y.touchedFields || v.touchedFields) && qe !== F)));
        }
        ne && ie && _.state.next(De);
      }
      return ne ? De : {};
    },
    K = (C, B, F, se) => {
      const ie = le(r.errors, C),
        ne = (y.isValid || v.isValid) && xn(B) && r.isValid !== B;
      if (
        (t.delayError && F
          ? ((m = x(() => j(C, F))), m(t.delayError))
          : (clearTimeout(g), (m = null), F ? et(r.errors, C, F) : At(r.errors, C)),
        (F ? !Tr(ie, F) : ie) || !en(se) || ne)
      ) {
        const ge = { ...se, ...(ne && xn(B) ? { isValid: B } : {}), errors: r.errors, name: C };
        (r = { ...r, ...ge }), _.state.next(ge);
      }
    },
    W = async (C) => {
      T(C, !0);
      const B = await t.resolver(
        o,
        t.context,
        gO(C || f.mount, i, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return T(C), B;
    },
    oe = async (C) => {
      const { errors: B } = await W(C);
      if (C)
        for (const F of C) {
          const se = le(B, F);
          se ? et(r.errors, F, se) : At(r.errors, F);
        }
      else r.errors = B;
      return B;
    },
    X = async (C, B, F = { valid: !0 }) => {
      for (const se in C) {
        const ie = C[se];
        if (ie) {
          const { _f: ne, ...ge } = ie;
          if (ne) {
            const De = f.array.has(ne.name),
              qe = ie._f && yO(ie._f);
            qe && y.validatingFields && T([se], !0);
            const rt = await hv(ie, f.disabled, o, w, t.shouldUseNativeValidation && !B, De);
            if ((qe && y.validatingFields && T([se]), rt[ne.name] && ((F.valid = !1), B))) break;
            !B &&
              (le(rt, ne.name)
                ? De
                  ? xO(r.errors, rt, ne.name)
                  : et(r.errors, ne.name, rt[ne.name])
                : At(r.errors, ne.name));
          }
          !en(ge) && (await X(ge, B, F));
        }
      }
      return F.valid;
    },
    ye = () => {
      for (const C of f.unMount) {
        const B = le(i, C);
        B && (B._f.refs ? B._f.refs.every((F) => !Id(F)) : !Id(B._f.ref)) && Tt(C);
      }
      f.unMount = new Set();
    },
    ke = (C, B) => !t.disabled && (C && B && et(o, C, B), !Tr(E(), l)),
    de = (C, B, F) => Z0(C, f, { ...(d.mount ? o : xt(B) ? l : ha(C) ? { [C]: B } : B) }, F, B),
    Se = (C) => wc(le(d.mount ? o : l, C, t.shouldUnregister ? le(l, C, []) : [])),
    Ae = (C, B, F = {}) => {
      const se = le(i, C);
      let ie = B;
      if (se) {
        const ne = se._f;
        ne &&
          (!ne.disabled && et(o, C, W0(B, ne)),
          (ie = ec(ne.ref) && tn(B) ? '' : B),
          G0(ne.ref)
            ? [...ne.ref.options].forEach((ge) => (ge.selected = ie.includes(ge.value)))
            : ne.refs
              ? pu(ne.ref)
                ? ne.refs.forEach((ge) => {
                    (!ge.defaultChecked || !ge.disabled) &&
                      (Array.isArray(ie)
                        ? (ge.checked = !!ie.find((De) => De === ge.value))
                        : (ge.checked = ie === ge.value || !!ie));
                  })
                : ne.refs.forEach((ge) => (ge.checked = ge.value === ie))
              : Zh(ne.ref)
                ? (ne.ref.value = '')
                : ((ne.ref.value = ie), ne.ref.type || _.state.next({ name: C, values: qt(o) })));
      }
      (F.shouldDirty || F.shouldTouch) && M(C, ie, F.shouldTouch, F.shouldDirty, !0),
        F.shouldValidate && xe(C);
    },
    He = (C, B, F) => {
      for (const se in B) {
        if (!B.hasOwnProperty(se)) return;
        const ie = B[se],
          ne = `${C}.${se}`,
          ge = le(i, ne);
        (f.array.has(C) || wt(ie) || (ge && !ge._f)) && !si(ie) ? He(ne, ie, F) : Ae(ne, ie, F);
      }
    },
    V = (C, B, F = {}) => {
      const se = le(i, C),
        ie = f.array.has(C),
        ne = qt(B);
      et(o, C, ne),
        ie
          ? (_.array.next({ name: C, values: qt(o) }),
            (y.isDirty || y.dirtyFields || v.isDirty || v.dirtyFields) &&
              F.shouldDirty &&
              _.state.next({ name: C, dirtyFields: Dl(l, o), isDirty: ke(C, ne) }))
          : se && !se._f && !tn(ne)
            ? He(C, ne, F)
            : Ae(C, ne, F),
        cv(C, f) && _.state.next({ ...r }),
        _.state.next({ name: d.mount ? C : void 0, values: qt(o) });
    },
    J = async (C) => {
      d.mount = !0;
      const B = C.target;
      let F = B.name,
        se = !0;
      const ie = le(i, F),
        ne = (qe) => {
          se = Number.isNaN(qe) || (si(qe) && isNaN(qe.getTime())) || Tr(qe, le(o, F, qe));
        },
        ge = uv(t.mode),
        De = uv(t.reValidateMode);
      if (ie) {
        let qe, rt;
        const tr = B.type ? lv(ie._f) : H0(C),
          Cn = C.type === Jo.BLUR || C.type === Jo.FOCUS_OUT,
          As =
            (!pO(ie._f) && !t.resolver && !le(r.errors, F) && !ie._f.deps) ||
            _O(Cn, le(r.touchedFields, F), r.isSubmitted, De, ge),
          ea = cv(F, f, Cn);
        et(o, F, tr),
          Cn ? (ie._f.onBlur && ie._f.onBlur(C), m && m(0)) : ie._f.onChange && ie._f.onChange(C);
        const ta = M(F, tr, Cn),
          Ln = !en(ta) || ea;
        if ((!Cn && _.state.next({ name: F, type: C.type, values: qt(o) }), As))
          return (
            (y.isValid || v.isValid) && (t.mode === 'onBlur' ? Cn && N() : Cn || N()),
            Ln && _.state.next({ name: F, ...(ea ? {} : ta) })
          );
        if ((!Cn && ea && _.state.next({ ...r }), t.resolver)) {
          const { errors: na } = await W([F]);
          if ((ne(tr), se)) {
            const xa = fv(r.errors, i, F),
              Hr = fv(na, i, xa.name || F);
            (qe = Hr.error), (F = Hr.name), (rt = en(na));
          }
        } else
          T([F], !0),
            (qe = (await hv(ie, f.disabled, o, w, t.shouldUseNativeValidation))[F]),
            T([F]),
            ne(tr),
            se && (qe ? (rt = !1) : (y.isValid || v.isValid) && (rt = await X(i, !0)));
        se && (ie._f.deps && xe(ie._f.deps), K(F, rt, qe, ta));
      }
    },
    ce = (C, B) => {
      if (le(r.errors, B) && C.focus) return C.focus(), 1;
    },
    xe = async (C, B = {}) => {
      let F, se;
      const ie = Yl(C);
      if (t.resolver) {
        const ne = await oe(xt(C) ? C : ie);
        (F = en(ne)), (se = C ? !ie.some((ge) => le(ne, ge)) : F);
      } else
        C
          ? ((se = (
              await Promise.all(
                ie.map(async (ne) => {
                  const ge = le(i, ne);
                  return await X(ge && ge._f ? { [ne]: ge } : ge);
                })
              )
            ).every(Boolean)),
            !(!se && !r.isValid) && N())
          : (se = F = await X(i));
      return (
        _.state.next({
          ...(!ha(C) || ((y.isValid || v.isValid) && F !== r.isValid) ? {} : { name: C }),
          ...(t.resolver || !C ? { isValid: F } : {}),
          errors: r.errors,
        }),
        B.shouldFocus && !se && ql(i, ce, C ? ie : f.mount),
        se
      );
    },
    E = (C) => {
      const B = { ...(d.mount ? o : l) };
      return xt(C) ? B : ha(C) ? le(B, C) : C.map((F) => le(B, F));
    },
    Z = (C, B) => ({
      invalid: !!le((B || r).errors, C),
      isDirty: !!le((B || r).dirtyFields, C),
      error: le((B || r).errors, C),
      isValidating: !!le(r.validatingFields, C),
      isTouched: !!le((B || r).touchedFields, C),
    }),
    re = (C) => {
      C && Yl(C).forEach((B) => At(r.errors, B)), _.state.next({ errors: C ? r.errors : {} });
    },
    te = (C, B, F) => {
      const se = (le(i, C, { _f: {} })._f || {}).ref,
        ie = le(r.errors, C) || {},
        { ref: ne, message: ge, type: De, ...qe } = ie;
      et(r.errors, C, { ...qe, ...B, ref: se }),
        _.state.next({ name: C, errors: r.errors, isValid: !1 }),
        F && F.shouldFocus && se && se.focus && se.focus();
    },
    pe = (C, B) => (Pn(C) ? _.state.subscribe({ next: (F) => C(de(void 0, B), F) }) : de(C, B, !0)),
    ze = (C) =>
      _.state.subscribe({
        next: (B) => {
          bO(C.name, B.name, C.exact) &&
            vO(B, C.formState || y, rn, C.reRenderRoot) &&
            C.callback({ values: { ...o }, ...r, ...B });
        },
      }).unsubscribe,
    we = (C) => ((d.mount = !0), (v = { ...v, ...C.formState }), ze({ ...C, formState: v })),
    Tt = (C, B = {}) => {
      for (const F of C ? Yl(C) : f.mount)
        f.mount.delete(F),
          f.array.delete(F),
          B.keepValue || (At(i, F), At(o, F)),
          !B.keepError && At(r.errors, F),
          !B.keepDirty && At(r.dirtyFields, F),
          !B.keepTouched && At(r.touchedFields, F),
          !B.keepIsValidating && At(r.validatingFields, F),
          !t.shouldUnregister && !B.keepDefaultValue && At(l, F);
      _.state.next({ values: qt(o) }),
        _.state.next({ ...r, ...(B.keepDirty ? { isDirty: ke() } : {}) }),
        !B.keepIsValid && N();
    },
    Ie = ({ disabled: C, name: B }) => {
      ((xn(C) && d.mount) || C || f.disabled.has(B)) &&
        (C ? f.disabled.add(B) : f.disabled.delete(B));
    },
    Bt = (C, B = {}) => {
      let F = le(i, C);
      const se = xn(B.disabled) || xn(t.disabled);
      return (
        et(i, C, {
          ...(F || {}),
          _f: { ...(F && F._f ? F._f : { ref: { name: C } }), name: C, mount: !0, ...B },
        }),
        f.mount.add(C),
        F ? Ie({ disabled: xn(B.disabled) ? B.disabled : t.disabled, name: C }) : q(C, !0, B.value),
        {
          ...(se ? { disabled: B.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!B.required,
                min: Al(B.min),
                max: Al(B.max),
                minLength: Al(B.minLength),
                maxLength: Al(B.maxLength),
                pattern: Al(B.pattern),
              }
            : {}),
          name: C,
          onChange: J,
          onBlur: J,
          ref: (ie) => {
            if (ie) {
              Bt(C, B), (F = le(i, C));
              const ne =
                  (xt(ie.value) &&
                    ie.querySelectorAll &&
                    ie.querySelectorAll('input,select,textarea')[0]) ||
                  ie,
                ge = dO(ne),
                De = F._f.refs || [];
              if (ge ? De.find((qe) => qe === ne) : ne === F._f.ref) return;
              et(i, C, {
                _f: {
                  ...F._f,
                  ...(ge
                    ? {
                        refs: [...De.filter(Id), ne, ...(Array.isArray(le(l, C)) ? [{}] : [])],
                        ref: { type: ne.type, name: C },
                      }
                    : { ref: ne }),
                },
              }),
                q(C, !1, void 0, ne);
            } else
              (F = le(i, C, {})),
                F._f && (F._f.mount = !1),
                (t.shouldUnregister || B.shouldUnregister) &&
                  !(V0(f.array, C) && d.action) &&
                  f.unMount.add(C);
          },
        }
      );
    },
    Ia = () => t.shouldFocusError && ql(i, ce, f.mount),
    Ja = (C) => {
      xn(C) &&
        (_.state.next({ disabled: C }),
        ql(
          i,
          (B, F) => {
            const se = le(i, F);
            se &&
              ((B.disabled = se._f.disabled || C),
              Array.isArray(se._f.refs) &&
                se._f.refs.forEach((ie) => {
                  ie.disabled = se._f.disabled || C;
                }));
          },
          0,
          !1
        ));
    },
    er = (C, B) => async (F) => {
      let se;
      F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
      let ie = qt(o);
      if ((_.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: ne, values: ge } = await W();
        (r.errors = ne), (ie = ge);
      } else await X(i);
      if (f.disabled.size) for (const ne of f.disabled) et(ie, ne, void 0);
      if ((At(r.errors, 'root'), en(r.errors))) {
        _.state.next({ errors: {} });
        try {
          await C(ie, F);
        } catch (ne) {
          se = ne;
        }
      } else B && (await B({ ...r.errors }, F)), Ia(), setTimeout(Ia);
      if (
        (_.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: en(r.errors) && !se,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        se)
      )
        throw se;
    },
    Lr = (C, B = {}) => {
      le(i, C) &&
        (xt(B.defaultValue)
          ? V(C, qt(le(l, C)))
          : (V(C, B.defaultValue), et(l, C, qt(B.defaultValue))),
        B.keepTouched || At(r.touchedFields, C),
        B.keepDirty ||
          (At(r.dirtyFields, C), (r.isDirty = B.defaultValue ? ke(C, qt(le(l, C))) : ke())),
        B.keepError || (At(r.errors, C), y.isValid && N()),
        _.state.next({ ...r }));
    },
    Sa = (C, B = {}) => {
      const F = C ? qt(C) : l,
        se = qt(F),
        ie = en(C),
        ne = ie ? l : se;
      if ((B.keepDefaultValues || (l = F), !B.keepValues)) {
        if (B.keepDirtyValues) {
          const ge = new Set([...f.mount, ...Object.keys(Dl(l, o))]);
          for (const De of Array.from(ge))
            le(r.dirtyFields, De) ? et(ne, De, le(o, De)) : V(De, le(ne, De));
        } else {
          if (Hh && xt(C))
            for (const ge of f.mount) {
              const De = le(i, ge);
              if (De && De._f) {
                const qe = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
                if (ec(qe)) {
                  const rt = qe.closest('form');
                  if (rt) {
                    rt.reset();
                    break;
                  }
                }
              }
            }
          for (const ge of f.mount) V(ge, le(ne, ge));
        }
        (o = qt(ne)), _.array.next({ values: { ...ne } }), _.state.next({ values: { ...ne } });
      }
      (f = {
        mount: B.keepDirtyValues ? f.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (d.mount = !y.isValid || !!B.keepIsValid || !!B.keepDirtyValues),
        (d.watch = !!t.shouldUnregister),
        _.state.next({
          submitCount: B.keepSubmitCount ? r.submitCount : 0,
          isDirty: ie ? !1 : B.keepDirty ? r.isDirty : !!(B.keepDefaultValues && !Tr(C, l)),
          isSubmitted: B.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: ie
            ? {}
            : B.keepDirtyValues
              ? B.keepDefaultValues && o
                ? Dl(l, o)
                : r.dirtyFields
              : B.keepDefaultValues && C
                ? Dl(l, C)
                : B.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: B.keepTouched ? r.touchedFields : {},
          errors: B.keepErrors ? r.errors : {},
          isSubmitSuccessful: B.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    vi = (C, B) => Sa(Pn(C) ? C(o) : C, B),
    Ds = (C, B = {}) => {
      const F = le(i, C),
        se = F && F._f;
      if (se) {
        const ie = se.refs ? se.refs[0] : se.ref;
        ie.focus && (ie.focus(), B.shouldSelect && Pn(ie.select) && ie.select());
      }
    },
    rn = (C) => {
      r = { ...r, ...C };
    },
    Br = {
      control: {
        register: Bt,
        unregister: Tt,
        getFieldState: Z,
        handleSubmit: er,
        setError: te,
        _subscribe: ze,
        _runSchema: W,
        _getWatch: de,
        _getDirty: ke,
        _setValid: N,
        _setFieldArray: A,
        _setDisabledField: Ie,
        _setErrors: R,
        _getFieldArray: Se,
        _reset: Sa,
        _resetDefaultValues: () =>
          Pn(t.defaultValues) &&
          t.defaultValues().then((C) => {
            vi(C, t.resetOptions), _.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: ye,
        _disableForm: Ja,
        _subjects: _,
        _proxyFormState: y,
        get _fields() {
          return i;
        },
        get _formValues() {
          return o;
        },
        get _state() {
          return d;
        },
        set _state(C) {
          d = C;
        },
        get _defaultValues() {
          return l;
        },
        get _names() {
          return f;
        },
        set _names(C) {
          f = C;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return t;
        },
        set _options(C) {
          t = { ...t, ...C };
        },
      },
      subscribe: we,
      trigger: xe,
      register: Bt,
      handleSubmit: er,
      watch: pe,
      setValue: V,
      getValues: E,
      reset: vi,
      resetField: Lr,
      clearErrors: re,
      unregister: Tt,
      setError: te,
      setFocus: Ds,
      getFieldState: Z,
    };
  return { ...Br, formControl: Br };
}
function I0(n = {}) {
  const t = I.useRef(void 0),
    r = I.useRef(void 0),
    [i, l] = I.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Pn(n.defaultValues),
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
      defaultValues: Pn(n.defaultValues) ? void 0 : n.defaultValues,
    });
  t.current ||
    ((t.current = { ...(n.formControl ? n.formControl : OO(n)), formState: i }),
    n.formControl &&
      n.defaultValues &&
      !Pn(n.defaultValues) &&
      n.formControl.reset(n.defaultValues, n.resetOptions));
  const o = t.current.control;
  return (
    (o._options = n),
    qh(() => {
      const d = o._subscribe({
        formState: o._proxyFormState,
        callback: () => l({ ...o._formState }),
        reRenderRoot: !0,
      });
      return l((f) => ({ ...f, isReady: !0 })), (o._formState.isReady = !0), d;
    }, [o]),
    I.useEffect(() => o._disableForm(n.disabled), [o, n.disabled]),
    I.useEffect(() => {
      n.mode && (o._options.mode = n.mode),
        n.reValidateMode && (o._options.reValidateMode = n.reValidateMode),
        n.errors && !en(n.errors) && o._setErrors(n.errors);
    }, [o, n.errors, n.mode, n.reValidateMode]),
    I.useEffect(() => {
      n.shouldUnregister && o._subjects.state.next({ values: o._getWatch() });
    }, [o, n.shouldUnregister]),
    I.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const d = o._getDirty();
        d !== i.isDirty && o._subjects.state.next({ isDirty: d });
      }
    }, [o, i.isDirty]),
    I.useEffect(() => {
      n.values && !Tr(n.values, r.current)
        ? (o._reset(n.values, o._options.resetOptions),
          (r.current = n.values),
          l((d) => ({ ...d })))
        : o._resetDefaultValues();
    }, [o, n.values]),
    I.useEffect(() => {
      o._state.mount || (o._setValid(), (o._state.mount = !0)),
        o._state.watch && ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    (t.current.formState = q0(i, o)),
    t.current
  );
}
const mv = (n, t, r) => {
    if (n && 'reportValidity' in n) {
      const i = le(r, t);
      n.setCustomValidity((i && i.message) || ''), n.reportValidity();
    }
  },
  J0 = (n, t) => {
    for (const r in t.fields) {
      const i = t.fields[r];
      i && i.ref && 'reportValidity' in i.ref
        ? mv(i.ref, r, n)
        : i && i.refs && i.refs.forEach((l) => mv(l, r, n));
    }
  },
  EO = (n, t) => {
    t.shouldUseNativeValidation && J0(n, t);
    const r = {};
    for (const i in n) {
      const l = le(t.fields, i),
        o = Object.assign(n[i] || {}, { ref: l && l.ref });
      if (CO(t.names || Object.keys(n), i)) {
        const d = Object.assign({}, le(r, i));
        et(d, 'root', o), et(r, i, d);
      } else et(r, i, o);
    }
    return r;
  },
  CO = (n, t) => {
    const r = gv(t);
    return n.some((i) => gv(i).match(`^${r}\\.\\d+`));
  };
function gv(n) {
  return n.replace(/\]|\[/g, '');
}
function TO(n, t) {
  for (var r = {}; n.length; ) {
    var i = n[0],
      l = i.code,
      o = i.message,
      d = i.path.join('.');
    if (!r[d])
      if ('unionErrors' in i) {
        var f = i.unionErrors[0].errors[0];
        r[d] = { message: f.message, type: f.code };
      } else r[d] = { message: o, type: l };
    if (
      ('unionErrors' in i &&
        i.unionErrors.forEach(function (y) {
          return y.errors.forEach(function (v) {
            return n.push(v);
          });
        }),
      t)
    ) {
      var m = r[d].types,
        g = m && m[i.code];
      r[d] = P0(d, t, r, l, g ? [].concat(g, i.message) : i.message);
    }
    n.shift();
  }
  return r;
}
function eb(n, t, r) {
  return (
    r === void 0 && (r = {}),
    function (i, l, o) {
      try {
        return Promise.resolve(
          (function (d, f) {
            try {
              var m = Promise.resolve(n[r.mode === 'sync' ? 'parse' : 'parseAsync'](i, t)).then(
                function (g) {
                  return (
                    o.shouldUseNativeValidation && J0({}, o),
                    { errors: {}, values: r.raw ? Object.assign({}, i) : g }
                  );
                }
              );
            } catch (g) {
              return f(g);
            }
            return m && m.then ? m.then(void 0, f) : m;
          })(0, function (d) {
            if (
              (function (f) {
                return Array.isArray(f == null ? void 0 : f.errors);
              })(d)
            )
              return {
                values: {},
                errors: EO(
                  TO(d.errors, !o.shouldUseNativeValidation && o.criteriaMode === 'all'),
                  o
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
      for (const d of l) o[d] = d;
      return o;
    }),
    (n.getValidEnumValues = (l) => {
      const o = n.objectKeys(l).filter((f) => typeof l[l[f]] != 'number'),
        d = {};
      for (const f of o) d[f] = l[f];
      return n.objectValues(d);
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
            for (const d in l) Object.prototype.hasOwnProperty.call(l, d) && o.push(d);
            return o;
          }),
    (n.find = (l, o) => {
      for (const d of l) if (o(d)) return d;
    }),
    (n.isInteger =
      typeof Number.isInteger == 'function'
        ? (l) => Number.isInteger(l)
        : (l) => typeof l == 'number' && isFinite(l) && Math.floor(l) === l);
  function i(l, o = ' | ') {
    return l.map((d) => (typeof d == 'string' ? `'${d}'` : d)).join(o);
  }
  (n.joinValues = i),
    (n.jsonStringifyReplacer = (l, o) => (typeof o == 'bigint' ? o.toString() : o));
})(Ge || (Ge = {}));
var vh;
(function (n) {
  n.mergeShapes = (t, r) => ({ ...t, ...r });
})(vh || (vh = {}));
const fe = Ge.arrayToEnum([
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
  Ya = (n) => {
    switch (typeof n) {
      case 'undefined':
        return fe.undefined;
      case 'string':
        return fe.string;
      case 'number':
        return isNaN(n) ? fe.nan : fe.number;
      case 'boolean':
        return fe.boolean;
      case 'function':
        return fe.function;
      case 'bigint':
        return fe.bigint;
      case 'symbol':
        return fe.symbol;
      case 'object':
        return Array.isArray(n)
          ? fe.array
          : n === null
            ? fe.null
            : n.then && typeof n.then == 'function' && n.catch && typeof n.catch == 'function'
              ? fe.promise
              : typeof Map < 'u' && n instanceof Map
                ? fe.map
                : typeof Set < 'u' && n instanceof Set
                  ? fe.set
                  : typeof Date < 'u' && n instanceof Date
                    ? fe.date
                    : fe.object;
      default:
        return fe.unknown;
    }
  },
  ee = Ge.arrayToEnum([
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
  MO = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, '$1:');
class wn extends Error {
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
        for (const d of o.issues)
          if (d.code === 'invalid_union') d.unionErrors.map(l);
          else if (d.code === 'invalid_return_type') l(d.returnTypeError);
          else if (d.code === 'invalid_arguments') l(d.argumentsError);
          else if (d.path.length === 0) i._errors.push(r(d));
          else {
            let f = i,
              m = 0;
            for (; m < d.path.length; ) {
              const g = d.path[m];
              m === d.path.length - 1
                ? ((f[g] = f[g] || { _errors: [] }), f[g]._errors.push(r(d)))
                : (f[g] = f[g] || { _errors: [] }),
                (f = f[g]),
                m++;
            }
          }
      };
    return l(this), i;
  }
  static assert(t) {
    if (!(t instanceof wn)) throw new Error(`Not a ZodError: ${t}`);
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
wn.create = (n) => new wn(n);
const Ss = (n, t) => {
  let r;
  switch (n.code) {
    case ee.invalid_type:
      n.received === fe.undefined
        ? (r = 'Required')
        : (r = `Expected ${n.expected}, received ${n.received}`);
      break;
    case ee.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(n.expected, Ge.jsonStringifyReplacer)}`;
      break;
    case ee.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ge.joinValues(n.keys, ', ')}`;
      break;
    case ee.invalid_union:
      r = 'Invalid input';
      break;
    case ee.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ge.joinValues(n.options)}`;
      break;
    case ee.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ge.joinValues(n.options)}, received '${n.received}'`;
      break;
    case ee.invalid_arguments:
      r = 'Invalid function arguments';
      break;
    case ee.invalid_return_type:
      r = 'Invalid function return type';
      break;
    case ee.invalid_date:
      r = 'Invalid date';
      break;
    case ee.invalid_string:
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
    case ee.too_small:
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
    case ee.too_big:
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
    case ee.custom:
      r = 'Invalid input';
      break;
    case ee.invalid_intersection_types:
      r = 'Intersection results could not be merged';
      break;
    case ee.not_multiple_of:
      r = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case ee.not_finite:
      r = 'Number must be finite';
      break;
    default:
      (r = t.defaultError), Ge.assertNever(n);
  }
  return { message: r };
};
let tb = Ss;
function NO(n) {
  tb = n;
}
function ac() {
  return tb;
}
const rc = (n) => {
    const { data: t, path: r, errorMaps: i, issueData: l } = n,
      o = [...r, ...(l.path || [])],
      d = { ...l, path: o };
    if (l.message !== void 0) return { ...l, path: o, message: l.message };
    let f = '';
    const m = i
      .filter((g) => !!g)
      .slice()
      .reverse();
    for (const g of m) f = g(d, { data: t, defaultError: f }).message;
    return { ...l, path: o, message: f };
  },
  DO = [];
function ue(n, t) {
  const r = ac(),
    i = rc({
      issueData: t,
      data: n.data,
      path: n.path,
      errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, r, r === Ss ? void 0 : Ss].filter(
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
      if (l.status === 'aborted') return Me;
      l.status === 'dirty' && t.dirty(), i.push(l.value);
    }
    return { status: t.value, value: i };
  }
  static async mergeObjectAsync(t, r) {
    const i = [];
    for (const l of r) {
      const o = await l.key,
        d = await l.value;
      i.push({ key: o, value: d });
    }
    return Wt.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, r) {
    const i = {};
    for (const l of r) {
      const { key: o, value: d } = l;
      if (o.status === 'aborted' || d.status === 'aborted') return Me;
      o.status === 'dirty' && t.dirty(),
        d.status === 'dirty' && t.dirty(),
        o.value !== '__proto__' && (typeof d.value < 'u' || l.alwaysSet) && (i[o.value] = d.value);
    }
    return { status: t.value, value: i };
  }
}
const Me = Object.freeze({ status: 'aborted' }),
  os = (n) => ({ status: 'dirty', value: n }),
  an = (n) => ({ status: 'valid', value: n }),
  bh = (n) => n.status === 'aborted',
  _h = (n) => n.status === 'dirty',
  hi = (n) => n.status === 'valid',
  $l = (n) => typeof Promise < 'u' && n instanceof Promise;
function ic(n, t, r, i) {
  if (typeof t == 'function' ? n !== t || !0 : !t.has(n))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return t.get(n);
}
function nb(n, t, r, i, l) {
  if (typeof t == 'function' ? n !== t || !0 : !t.has(n))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return t.set(n, r), r;
}
var ve;
(function (n) {
  (n.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (n.toString = (t) => (typeof t == 'string' ? t : t == null ? void 0 : t.message));
})(ve || (ve = {}));
var Ll, Bl;
class va {
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
const yv = (n, t) => {
  if (hi(t)) return { success: !0, data: t.value };
  if (!n.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new wn(n.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function je(n) {
  if (!n) return {};
  const { errorMap: t, invalid_type_error: r, required_error: i, description: l } = n;
  if (t && (r || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: l }
    : {
        errorMap: (d, f) => {
          var m, g;
          const { message: y } = n;
          return d.code === 'invalid_enum_value'
            ? { message: y ?? f.defaultError }
            : typeof f.data > 'u'
              ? { message: (m = y ?? i) !== null && m !== void 0 ? m : f.defaultError }
              : d.code !== 'invalid_type'
                ? { message: f.defaultError }
                : { message: (g = y ?? r) !== null && g !== void 0 ? g : f.defaultError };
        },
        description: l,
      };
}
class Be {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ya(t.data);
  }
  _getOrReturnCtx(t, r) {
    return (
      r || {
        common: t.parent.common,
        data: t.data,
        parsedType: Ya(t.data),
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
        parsedType: Ya(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if ($l(r)) throw new Error('Synchronous parse encountered promise.');
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
        parsedType: Ya(t),
      },
      o = this._parseSync({ data: t, path: l.path, parent: l });
    return yv(l, o);
  }
  '~validate'(t) {
    var r, i;
    const l = {
      common: { issues: [], async: !!this['~standard'].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Ya(t),
    };
    if (!this['~standard'].async)
      try {
        const o = this._parseSync({ data: t, path: [], parent: l });
        return hi(o) ? { value: o.value } : { issues: l.common.issues };
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
      hi(o) ? { value: o.value } : { issues: l.common.issues }
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
        parsedType: Ya(t),
      },
      l = this._parse({ data: t, path: i.path, parent: i }),
      o = await ($l(l) ? l : Promise.resolve(l));
    return yv(i, o);
  }
  refine(t, r) {
    const i = (l) =>
      typeof r == 'string' || typeof r > 'u' ? { message: r } : typeof r == 'function' ? r(l) : r;
    return this._refinement((l, o) => {
      const d = t(l),
        f = () => o.addIssue({ code: ee.custom, ...i(l) });
      return typeof Promise < 'u' && d instanceof Promise
        ? d.then((m) => (m ? !0 : (f(), !1)))
        : d
          ? !0
          : (f(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((i, l) =>
      t(i) ? !0 : (l.addIssue(typeof r == 'function' ? r(i, l) : r), !1)
    );
  }
  _refinement(t) {
    return new Xn({
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
    return ya.create(this, this._def);
  }
  nullable() {
    return Ur.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Kn.create(this);
  }
  promise() {
    return ws.create(this, this._def);
  }
  or(t) {
    return Xl.create([this, t], this._def);
  }
  and(t) {
    return Il.create(this, t, this._def);
  }
  transform(t) {
    return new Xn({
      ...je(this._def),
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: 'transform', transform: t },
    });
  }
  default(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new au({ ...je(this._def), innerType: this, defaultValue: r, typeName: Ce.ZodDefault });
  }
  brand() {
    return new Ph({ typeName: Ce.ZodBranded, type: this, ...je(this._def) });
  }
  catch(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new ru({ ...je(this._def), innerType: this, catchValue: r, typeName: Ce.ZodCatch });
  }
  describe(t) {
    const r = this.constructor;
    return new r({ ...this._def, description: t });
  }
  pipe(t) {
    return vu.create(this, t);
  }
  readonly() {
    return iu.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const AO = /^c[^\s-]{8,}$/i,
  kO = /^[0-9a-z]+$/,
  RO = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  jO = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  zO = /^[a-z0-9_-]{21}$/i,
  UO = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  LO =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  BO = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  HO = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let Jd;
const VO =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  YO =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  qO =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  ZO =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  FO = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  PO = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  ab =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  GO = new RegExp(`^${ab}$`);
function rb(n) {
  let t = '[0-5]\\d';
  n.precision ? (t = `${t}\\.\\d{${n.precision}}`) : n.precision == null && (t = `${t}(\\.\\d+)?`);
  const r = n.precision ? '+' : '?';
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function $O(n) {
  return new RegExp(`^${rb(n)}$`);
}
function ib(n) {
  let t = `${ab}T${rb(n)}`;
  const r = [];
  return (
    r.push(n.local ? 'Z?' : 'Z'),
    n.offset && r.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${r.join('|')})`),
    new RegExp(`^${t}$`)
  );
}
function QO(n, t) {
  return !!(((t === 'v4' || !t) && VO.test(n)) || ((t === 'v6' || !t) && qO.test(n)));
}
function KO(n, t) {
  if (!UO.test(n)) return !1;
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
function WO(n, t) {
  return !!(((t === 'v4' || !t) && YO.test(n)) || ((t === 'v6' || !t) && ZO.test(n)));
}
class $n extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== fe.string)) {
      const o = this._getOrReturnCtx(t);
      return ue(o, { code: ee.invalid_type, expected: fe.string, received: o.parsedType }), Me;
    }
    const i = new Wt();
    let l;
    for (const o of this._def.checks)
      if (o.kind === 'min')
        t.data.length < o.value &&
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, {
            code: ee.too_small,
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
          ue(l, {
            code: ee.too_big,
            maximum: o.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          i.dirty());
      else if (o.kind === 'length') {
        const d = t.data.length > o.value,
          f = t.data.length < o.value;
        (d || f) &&
          ((l = this._getOrReturnCtx(t, l)),
          d
            ? ue(l, {
                code: ee.too_big,
                maximum: o.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : f &&
              ue(l, {
                code: ee.too_small,
                minimum: o.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          i.dirty());
      } else if (o.kind === 'email')
        BO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, { validation: 'email', code: ee.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'emoji')
        Jd || (Jd = new RegExp(HO, 'u')),
          Jd.test(t.data) ||
            ((l = this._getOrReturnCtx(t, l)),
            ue(l, { validation: 'emoji', code: ee.invalid_string, message: o.message }),
            i.dirty());
      else if (o.kind === 'uuid')
        jO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, { validation: 'uuid', code: ee.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'nanoid')
        zO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, { validation: 'nanoid', code: ee.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'cuid')
        AO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, { validation: 'cuid', code: ee.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'cuid2')
        kO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, { validation: 'cuid2', code: ee.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'ulid')
        RO.test(t.data) ||
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, { validation: 'ulid', code: ee.invalid_string, message: o.message }),
          i.dirty());
      else if (o.kind === 'url')
        try {
          new URL(t.data);
        } catch {
          (l = this._getOrReturnCtx(t, l)),
            ue(l, { validation: 'url', code: ee.invalid_string, message: o.message }),
            i.dirty();
        }
      else
        o.kind === 'regex'
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((l = this._getOrReturnCtx(t, l)),
              ue(l, { validation: 'regex', code: ee.invalid_string, message: o.message }),
              i.dirty()))
          : o.kind === 'trim'
            ? (t.data = t.data.trim())
            : o.kind === 'includes'
              ? t.data.includes(o.value, o.position) ||
                ((l = this._getOrReturnCtx(t, l)),
                ue(l, {
                  code: ee.invalid_string,
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
                      ue(l, {
                        code: ee.invalid_string,
                        validation: { startsWith: o.value },
                        message: o.message,
                      }),
                      i.dirty())
                    : o.kind === 'endsWith'
                      ? t.data.endsWith(o.value) ||
                        ((l = this._getOrReturnCtx(t, l)),
                        ue(l, {
                          code: ee.invalid_string,
                          validation: { endsWith: o.value },
                          message: o.message,
                        }),
                        i.dirty())
                      : o.kind === 'datetime'
                        ? ib(o).test(t.data) ||
                          ((l = this._getOrReturnCtx(t, l)),
                          ue(l, {
                            code: ee.invalid_string,
                            validation: 'datetime',
                            message: o.message,
                          }),
                          i.dirty())
                        : o.kind === 'date'
                          ? GO.test(t.data) ||
                            ((l = this._getOrReturnCtx(t, l)),
                            ue(l, {
                              code: ee.invalid_string,
                              validation: 'date',
                              message: o.message,
                            }),
                            i.dirty())
                          : o.kind === 'time'
                            ? $O(o).test(t.data) ||
                              ((l = this._getOrReturnCtx(t, l)),
                              ue(l, {
                                code: ee.invalid_string,
                                validation: 'time',
                                message: o.message,
                              }),
                              i.dirty())
                            : o.kind === 'duration'
                              ? LO.test(t.data) ||
                                ((l = this._getOrReturnCtx(t, l)),
                                ue(l, {
                                  validation: 'duration',
                                  code: ee.invalid_string,
                                  message: o.message,
                                }),
                                i.dirty())
                              : o.kind === 'ip'
                                ? QO(t.data, o.version) ||
                                  ((l = this._getOrReturnCtx(t, l)),
                                  ue(l, {
                                    validation: 'ip',
                                    code: ee.invalid_string,
                                    message: o.message,
                                  }),
                                  i.dirty())
                                : o.kind === 'jwt'
                                  ? KO(t.data, o.alg) ||
                                    ((l = this._getOrReturnCtx(t, l)),
                                    ue(l, {
                                      validation: 'jwt',
                                      code: ee.invalid_string,
                                      message: o.message,
                                    }),
                                    i.dirty())
                                  : o.kind === 'cidr'
                                    ? WO(t.data, o.version) ||
                                      ((l = this._getOrReturnCtx(t, l)),
                                      ue(l, {
                                        validation: 'cidr',
                                        code: ee.invalid_string,
                                        message: o.message,
                                      }),
                                      i.dirty())
                                    : o.kind === 'base64'
                                      ? FO.test(t.data) ||
                                        ((l = this._getOrReturnCtx(t, l)),
                                        ue(l, {
                                          validation: 'base64',
                                          code: ee.invalid_string,
                                          message: o.message,
                                        }),
                                        i.dirty())
                                      : o.kind === 'base64url'
                                        ? PO.test(t.data) ||
                                          ((l = this._getOrReturnCtx(t, l)),
                                          ue(l, {
                                            validation: 'base64url',
                                            code: ee.invalid_string,
                                            message: o.message,
                                          }),
                                          i.dirty())
                                        : Ge.assertNever(o);
    return { status: i.value, value: t.data };
  }
  _regex(t, r, i) {
    return this.refinement((l) => t.test(l), {
      validation: r,
      code: ee.invalid_string,
      ...ve.errToObj(i),
    });
  }
  _addCheck(t) {
    return new $n({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...ve.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...ve.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...ve.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...ve.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...ve.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...ve.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...ve.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...ve.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...ve.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: 'base64url', ...ve.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: 'jwt', ...ve.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...ve.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: 'cidr', ...ve.errToObj(t) });
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
          ...ve.errToObj(t == null ? void 0 : t.message),
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
          ...ve.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...ve.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({ kind: 'regex', regex: t, ...ve.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: r == null ? void 0 : r.position,
      ...ve.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: 'startsWith', value: t, ...ve.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: 'endsWith', value: t, ...ve.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: 'min', value: t, ...ve.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: 'max', value: t, ...ve.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: 'length', value: t, ...ve.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, ve.errToObj(t));
  }
  trim() {
    return new $n({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new $n({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new $n({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
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
$n.create = (n) => {
  var t;
  return new $n({
    checks: [],
    typeName: Ce.ZodString,
    coerce: (t = n == null ? void 0 : n.coerce) !== null && t !== void 0 ? t : !1,
    ...je(n),
  });
};
function XO(n, t) {
  const r = (n.toString().split('.')[1] || '').length,
    i = (t.toString().split('.')[1] || '').length,
    l = r > i ? r : i,
    o = parseInt(n.toFixed(l).replace('.', '')),
    d = parseInt(t.toFixed(l).replace('.', ''));
  return (o % d) / Math.pow(10, l);
}
class Rr extends Be {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== fe.number)) {
      const o = this._getOrReturnCtx(t);
      return ue(o, { code: ee.invalid_type, expected: fe.number, received: o.parsedType }), Me;
    }
    let i;
    const l = new Wt();
    for (const o of this._def.checks)
      o.kind === 'int'
        ? Ge.isInteger(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          ue(i, {
            code: ee.invalid_type,
            expected: 'integer',
            received: 'float',
            message: o.message,
          }),
          l.dirty())
        : o.kind === 'min'
          ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
            ((i = this._getOrReturnCtx(t, i)),
            ue(i, {
              code: ee.too_small,
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
              ue(i, {
                code: ee.too_big,
                maximum: o.value,
                type: 'number',
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              l.dirty())
            : o.kind === 'multipleOf'
              ? XO(t.data, o.value) !== 0 &&
                ((i = this._getOrReturnCtx(t, i)),
                ue(i, { code: ee.not_multiple_of, multipleOf: o.value, message: o.message }),
                l.dirty())
              : o.kind === 'finite'
                ? Number.isFinite(t.data) ||
                  ((i = this._getOrReturnCtx(t, i)),
                  ue(i, { code: ee.not_finite, message: o.message }),
                  l.dirty())
                : Ge.assertNever(o);
    return { status: l.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, ve.toString(r));
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, ve.toString(r));
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, ve.toString(r));
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, ve.toString(r));
  }
  setLimit(t, r, i, l) {
    return new Rr({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: i, message: ve.toString(l) }],
    });
  }
  _addCheck(t) {
    return new Rr({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: ve.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: ve.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: ve.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: ve.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: ve.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: ve.toString(r) });
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: ve.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ve.toString(t),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ve.toString(t),
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
Rr.create = (n) =>
  new Rr({
    checks: [],
    typeName: Ce.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...je(n),
  });
class jr extends Be {
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
    if (this._getType(t) !== fe.bigint) return this._getInvalidInput(t);
    let i;
    const l = new Wt();
    for (const o of this._def.checks)
      o.kind === 'min'
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          ue(i, {
            code: ee.too_small,
            type: 'bigint',
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          l.dirty())
        : o.kind === 'max'
          ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
            ((i = this._getOrReturnCtx(t, i)),
            ue(i, {
              code: ee.too_big,
              type: 'bigint',
              maximum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            l.dirty())
          : o.kind === 'multipleOf'
            ? t.data % o.value !== BigInt(0) &&
              ((i = this._getOrReturnCtx(t, i)),
              ue(i, { code: ee.not_multiple_of, multipleOf: o.value, message: o.message }),
              l.dirty())
            : Ge.assertNever(o);
    return { status: l.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return ue(r, { code: ee.invalid_type, expected: fe.bigint, received: r.parsedType }), Me;
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, ve.toString(r));
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, ve.toString(r));
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, ve.toString(r));
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, ve.toString(r));
  }
  setLimit(t, r, i, l) {
    return new jr({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: i, message: ve.toString(l) }],
    });
  }
  _addCheck(t) {
    return new jr({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: ve.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: ve.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: ve.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: ve.toString(t),
    });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: ve.toString(r) });
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
jr.create = (n) => {
  var t;
  return new jr({
    checks: [],
    typeName: Ce.ZodBigInt,
    coerce: (t = n == null ? void 0 : n.coerce) !== null && t !== void 0 ? t : !1,
    ...je(n),
  });
};
class Ql extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== fe.boolean)) {
      const i = this._getOrReturnCtx(t);
      return ue(i, { code: ee.invalid_type, expected: fe.boolean, received: i.parsedType }), Me;
    }
    return an(t.data);
  }
}
Ql.create = (n) =>
  new Ql({ typeName: Ce.ZodBoolean, coerce: (n == null ? void 0 : n.coerce) || !1, ...je(n) });
class mi extends Be {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== fe.date)) {
      const o = this._getOrReturnCtx(t);
      return ue(o, { code: ee.invalid_type, expected: fe.date, received: o.parsedType }), Me;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return ue(o, { code: ee.invalid_date }), Me;
    }
    const i = new Wt();
    let l;
    for (const o of this._def.checks)
      o.kind === 'min'
        ? t.data.getTime() < o.value &&
          ((l = this._getOrReturnCtx(t, l)),
          ue(l, {
            code: ee.too_small,
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
            ue(l, {
              code: ee.too_big,
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
    return new mi({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({ kind: 'min', value: t.getTime(), message: ve.toString(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: 'max', value: t.getTime(), message: ve.toString(r) });
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
mi.create = (n) =>
  new mi({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: Ce.ZodDate,
    ...je(n),
  });
class sc extends Be {
  _parse(t) {
    if (this._getType(t) !== fe.symbol) {
      const i = this._getOrReturnCtx(t);
      return ue(i, { code: ee.invalid_type, expected: fe.symbol, received: i.parsedType }), Me;
    }
    return an(t.data);
  }
}
sc.create = (n) => new sc({ typeName: Ce.ZodSymbol, ...je(n) });
class Kl extends Be {
  _parse(t) {
    if (this._getType(t) !== fe.undefined) {
      const i = this._getOrReturnCtx(t);
      return ue(i, { code: ee.invalid_type, expected: fe.undefined, received: i.parsedType }), Me;
    }
    return an(t.data);
  }
}
Kl.create = (n) => new Kl({ typeName: Ce.ZodUndefined, ...je(n) });
class Wl extends Be {
  _parse(t) {
    if (this._getType(t) !== fe.null) {
      const i = this._getOrReturnCtx(t);
      return ue(i, { code: ee.invalid_type, expected: fe.null, received: i.parsedType }), Me;
    }
    return an(t.data);
  }
}
Wl.create = (n) => new Wl({ typeName: Ce.ZodNull, ...je(n) });
class xs extends Be {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return an(t.data);
  }
}
xs.create = (n) => new xs({ typeName: Ce.ZodAny, ...je(n) });
class di extends Be {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return an(t.data);
  }
}
di.create = (n) => new di({ typeName: Ce.ZodUnknown, ...je(n) });
class Qa extends Be {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return ue(r, { code: ee.invalid_type, expected: fe.never, received: r.parsedType }), Me;
  }
}
Qa.create = (n) => new Qa({ typeName: Ce.ZodNever, ...je(n) });
class lc extends Be {
  _parse(t) {
    if (this._getType(t) !== fe.undefined) {
      const i = this._getOrReturnCtx(t);
      return ue(i, { code: ee.invalid_type, expected: fe.void, received: i.parsedType }), Me;
    }
    return an(t.data);
  }
}
lc.create = (n) => new lc({ typeName: Ce.ZodVoid, ...je(n) });
class Kn extends Be {
  _parse(t) {
    const { ctx: r, status: i } = this._processInputParams(t),
      l = this._def;
    if (r.parsedType !== fe.array)
      return ue(r, { code: ee.invalid_type, expected: fe.array, received: r.parsedType }), Me;
    if (l.exactLength !== null) {
      const d = r.data.length > l.exactLength.value,
        f = r.data.length < l.exactLength.value;
      (d || f) &&
        (ue(r, {
          code: d ? ee.too_big : ee.too_small,
          minimum: f ? l.exactLength.value : void 0,
          maximum: d ? l.exactLength.value : void 0,
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
        (ue(r, {
          code: ee.too_small,
          minimum: l.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: l.minLength.message,
        }),
        i.dirty()),
      l.maxLength !== null &&
        r.data.length > l.maxLength.value &&
        (ue(r, {
          code: ee.too_big,
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
        [...r.data].map((d, f) => l.type._parseAsync(new va(r, d, r.path, f)))
      ).then((d) => Wt.mergeArray(i, d));
    const o = [...r.data].map((d, f) => l.type._parseSync(new va(r, d, r.path, f)));
    return Wt.mergeArray(i, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Kn({ ...this._def, minLength: { value: t, message: ve.toString(r) } });
  }
  max(t, r) {
    return new Kn({ ...this._def, maxLength: { value: t, message: ve.toString(r) } });
  }
  length(t, r) {
    return new Kn({ ...this._def, exactLength: { value: t, message: ve.toString(r) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Kn.create = (n, t) =>
  new Kn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ce.ZodArray,
    ...je(t),
  });
function us(n) {
  if (n instanceof gt) {
    const t = {};
    for (const r in n.shape) {
      const i = n.shape[r];
      t[r] = ya.create(us(i));
    }
    return new gt({ ...n._def, shape: () => t });
  } else
    return n instanceof Kn
      ? new Kn({ ...n._def, type: us(n.element) })
      : n instanceof ya
        ? ya.create(us(n.unwrap()))
        : n instanceof Ur
          ? Ur.create(us(n.unwrap()))
          : n instanceof ba
            ? ba.create(n.items.map((t) => us(t)))
            : n;
}
class gt extends Be {
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
    if (this._getType(t) !== fe.object) {
      const g = this._getOrReturnCtx(t);
      return ue(g, { code: ee.invalid_type, expected: fe.object, received: g.parsedType }), Me;
    }
    const { status: i, ctx: l } = this._processInputParams(t),
      { shape: o, keys: d } = this._getCached(),
      f = [];
    if (!(this._def.catchall instanceof Qa && this._def.unknownKeys === 'strip'))
      for (const g in l.data) d.includes(g) || f.push(g);
    const m = [];
    for (const g of d) {
      const y = o[g],
        v = l.data[g];
      m.push({
        key: { status: 'valid', value: g },
        value: y._parse(new va(l, v, l.path, g)),
        alwaysSet: g in l.data,
      });
    }
    if (this._def.catchall instanceof Qa) {
      const g = this._def.unknownKeys;
      if (g === 'passthrough')
        for (const y of f)
          m.push({
            key: { status: 'valid', value: y },
            value: { status: 'valid', value: l.data[y] },
          });
      else if (g === 'strict')
        f.length > 0 && (ue(l, { code: ee.unrecognized_keys, keys: f }), i.dirty());
      else if (g !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const g = this._def.catchall;
      for (const y of f) {
        const v = l.data[y];
        m.push({
          key: { status: 'valid', value: y },
          value: g._parse(new va(l, v, l.path, y)),
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
                _ = await y.value;
              g.push({ key: v, value: _, alwaysSet: y.alwaysSet });
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
      ve.errToObj,
      new gt({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (r, i) => {
                var l, o, d, f;
                const m =
                  (d =
                    (o = (l = this._def).errorMap) === null || o === void 0
                      ? void 0
                      : o.call(l, r, i).message) !== null && d !== void 0
                    ? d
                    : i.defaultError;
                return r.code === 'unrecognized_keys'
                  ? { message: (f = ve.errToObj(t).message) !== null && f !== void 0 ? f : m }
                  : { message: m };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new gt({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new gt({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(t) {
    return new gt({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new gt({
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
    return new gt({ ...this._def, catchall: t });
  }
  pick(t) {
    const r = {};
    return (
      Ge.objectKeys(t).forEach((i) => {
        t[i] && this.shape[i] && (r[i] = this.shape[i]);
      }),
      new gt({ ...this._def, shape: () => r })
    );
  }
  omit(t) {
    const r = {};
    return (
      Ge.objectKeys(this.shape).forEach((i) => {
        t[i] || (r[i] = this.shape[i]);
      }),
      new gt({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return us(this);
  }
  partial(t) {
    const r = {};
    return (
      Ge.objectKeys(this.shape).forEach((i) => {
        const l = this.shape[i];
        t && !t[i] ? (r[i] = l) : (r[i] = l.optional());
      }),
      new gt({ ...this._def, shape: () => r })
    );
  }
  required(t) {
    const r = {};
    return (
      Ge.objectKeys(this.shape).forEach((i) => {
        if (t && !t[i]) r[i] = this.shape[i];
        else {
          let o = this.shape[i];
          for (; o instanceof ya; ) o = o._def.innerType;
          r[i] = o;
        }
      }),
      new gt({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return sb(Ge.objectKeys(this.shape));
  }
}
gt.create = (n, t) =>
  new gt({
    shape: () => n,
    unknownKeys: 'strip',
    catchall: Qa.create(),
    typeName: Ce.ZodObject,
    ...je(t),
  });
gt.strictCreate = (n, t) =>
  new gt({
    shape: () => n,
    unknownKeys: 'strict',
    catchall: Qa.create(),
    typeName: Ce.ZodObject,
    ...je(t),
  });
gt.lazycreate = (n, t) =>
  new gt({
    shape: n,
    unknownKeys: 'strip',
    catchall: Qa.create(),
    typeName: Ce.ZodObject,
    ...je(t),
  });
class Xl extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = this._def.options;
    function l(o) {
      for (const f of o) if (f.result.status === 'valid') return f.result;
      for (const f of o)
        if (f.result.status === 'dirty')
          return r.common.issues.push(...f.ctx.common.issues), f.result;
      const d = o.map((f) => new wn(f.ctx.common.issues));
      return ue(r, { code: ee.invalid_union, unionErrors: d }), Me;
    }
    if (r.common.async)
      return Promise.all(
        i.map(async (o) => {
          const d = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return { result: await o._parseAsync({ data: r.data, path: r.path, parent: d }), ctx: d };
        })
      ).then(l);
    {
      let o;
      const d = [];
      for (const m of i) {
        const g = { ...r, common: { ...r.common, issues: [] }, parent: null },
          y = m._parseSync({ data: r.data, path: r.path, parent: g });
        if (y.status === 'valid') return y;
        y.status === 'dirty' && !o && (o = { result: y, ctx: g }),
          g.common.issues.length && d.push(g.common.issues);
      }
      if (o) return r.common.issues.push(...o.ctx.common.issues), o.result;
      const f = d.map((m) => new wn(m));
      return ue(r, { code: ee.invalid_union, unionErrors: f }), Me;
    }
  }
  get options() {
    return this._def.options;
  }
}
Xl.create = (n, t) => new Xl({ options: n, typeName: Ce.ZodUnion, ...je(t) });
const Ha = (n) =>
  n instanceof eu
    ? Ha(n.schema)
    : n instanceof Xn
      ? Ha(n.innerType())
      : n instanceof tu
        ? [n.value]
        : n instanceof zr
          ? n.options
          : n instanceof nu
            ? Ge.objectValues(n.enum)
            : n instanceof au
              ? Ha(n._def.innerType)
              : n instanceof Kl
                ? [void 0]
                : n instanceof Wl
                  ? [null]
                  : n instanceof ya
                    ? [void 0, ...Ha(n.unwrap())]
                    : n instanceof Ur
                      ? [null, ...Ha(n.unwrap())]
                      : n instanceof Ph || n instanceof iu
                        ? Ha(n.unwrap())
                        : n instanceof ru
                          ? Ha(n._def.innerType)
                          : [];
class Oc extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== fe.object)
      return ue(r, { code: ee.invalid_type, expected: fe.object, received: r.parsedType }), Me;
    const i = this.discriminator,
      l = r.data[i],
      o = this.optionsMap.get(l);
    return o
      ? r.common.async
        ? o._parseAsync({ data: r.data, path: r.path, parent: r })
        : o._parseSync({ data: r.data, path: r.path, parent: r })
      : (ue(r, {
          code: ee.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [i],
        }),
        Me);
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
      const d = Ha(o.shape[t]);
      if (!d.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const f of d) {
        if (l.has(f))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(f)}`);
        l.set(f, o);
      }
    }
    return new Oc({
      typeName: Ce.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: l,
      ...je(i),
    });
  }
}
function Sh(n, t) {
  const r = Ya(n),
    i = Ya(t);
  if (n === t) return { valid: !0, data: n };
  if (r === fe.object && i === fe.object) {
    const l = Ge.objectKeys(t),
      o = Ge.objectKeys(n).filter((f) => l.indexOf(f) !== -1),
      d = { ...n, ...t };
    for (const f of o) {
      const m = Sh(n[f], t[f]);
      if (!m.valid) return { valid: !1 };
      d[f] = m.data;
    }
    return { valid: !0, data: d };
  } else if (r === fe.array && i === fe.array) {
    if (n.length !== t.length) return { valid: !1 };
    const l = [];
    for (let o = 0; o < n.length; o++) {
      const d = n[o],
        f = t[o],
        m = Sh(d, f);
      if (!m.valid) return { valid: !1 };
      l.push(m.data);
    }
    return { valid: !0, data: l };
  } else return r === fe.date && i === fe.date && +n == +t ? { valid: !0, data: n } : { valid: !1 };
}
class Il extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t),
      l = (o, d) => {
        if (bh(o) || bh(d)) return Me;
        const f = Sh(o.value, d.value);
        return f.valid
          ? ((_h(o) || _h(d)) && r.dirty(), { status: r.value, value: f.data })
          : (ue(i, { code: ee.invalid_intersection_types }), Me);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({ data: i.data, path: i.path, parent: i }),
        ]).then(([o, d]) => l(o, d))
      : l(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
Il.create = (n, t, r) => new Il({ left: n, right: t, typeName: Ce.ZodIntersection, ...je(r) });
class ba extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== fe.array)
      return ue(i, { code: ee.invalid_type, expected: fe.array, received: i.parsedType }), Me;
    if (i.data.length < this._def.items.length)
      return (
        ue(i, {
          code: ee.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        Me
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (ue(i, {
        code: ee.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      r.dirty());
    const o = [...i.data]
      .map((d, f) => {
        const m = this._def.items[f] || this._def.rest;
        return m ? m._parse(new va(i, d, i.path, f)) : null;
      })
      .filter((d) => !!d);
    return i.common.async ? Promise.all(o).then((d) => Wt.mergeArray(r, d)) : Wt.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ba({ ...this._def, rest: t });
  }
}
ba.create = (n, t) => {
  if (!Array.isArray(n)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new ba({ items: n, typeName: Ce.ZodTuple, rest: null, ...je(t) });
};
class Jl extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== fe.object)
      return ue(i, { code: ee.invalid_type, expected: fe.object, received: i.parsedType }), Me;
    const l = [],
      o = this._def.keyType,
      d = this._def.valueType;
    for (const f in i.data)
      l.push({
        key: o._parse(new va(i, f, i.path, f)),
        value: d._parse(new va(i, i.data[f], i.path, f)),
        alwaysSet: f in i.data,
      });
    return i.common.async ? Wt.mergeObjectAsync(r, l) : Wt.mergeObjectSync(r, l);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, i) {
    return r instanceof Be
      ? new Jl({ keyType: t, valueType: r, typeName: Ce.ZodRecord, ...je(i) })
      : new Jl({ keyType: $n.create(), valueType: t, typeName: Ce.ZodRecord, ...je(r) });
  }
}
class uc extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== fe.map)
      return ue(i, { code: ee.invalid_type, expected: fe.map, received: i.parsedType }), Me;
    const l = this._def.keyType,
      o = this._def.valueType,
      d = [...i.data.entries()].map(([f, m], g) => ({
        key: l._parse(new va(i, f, i.path, [g, 'key'])),
        value: o._parse(new va(i, m, i.path, [g, 'value'])),
      }));
    if (i.common.async) {
      const f = new Map();
      return Promise.resolve().then(async () => {
        for (const m of d) {
          const g = await m.key,
            y = await m.value;
          if (g.status === 'aborted' || y.status === 'aborted') return Me;
          (g.status === 'dirty' || y.status === 'dirty') && r.dirty(), f.set(g.value, y.value);
        }
        return { status: r.value, value: f };
      });
    } else {
      const f = new Map();
      for (const m of d) {
        const g = m.key,
          y = m.value;
        if (g.status === 'aborted' || y.status === 'aborted') return Me;
        (g.status === 'dirty' || y.status === 'dirty') && r.dirty(), f.set(g.value, y.value);
      }
      return { status: r.value, value: f };
    }
  }
}
uc.create = (n, t, r) => new uc({ valueType: t, keyType: n, typeName: Ce.ZodMap, ...je(r) });
class gi extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== fe.set)
      return ue(i, { code: ee.invalid_type, expected: fe.set, received: i.parsedType }), Me;
    const l = this._def;
    l.minSize !== null &&
      i.data.size < l.minSize.value &&
      (ue(i, {
        code: ee.too_small,
        minimum: l.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: l.minSize.message,
      }),
      r.dirty()),
      l.maxSize !== null &&
        i.data.size > l.maxSize.value &&
        (ue(i, {
          code: ee.too_big,
          maximum: l.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: l.maxSize.message,
        }),
        r.dirty());
    const o = this._def.valueType;
    function d(m) {
      const g = new Set();
      for (const y of m) {
        if (y.status === 'aborted') return Me;
        y.status === 'dirty' && r.dirty(), g.add(y.value);
      }
      return { status: r.value, value: g };
    }
    const f = [...i.data.values()].map((m, g) => o._parse(new va(i, m, i.path, g)));
    return i.common.async ? Promise.all(f).then((m) => d(m)) : d(f);
  }
  min(t, r) {
    return new gi({ ...this._def, minSize: { value: t, message: ve.toString(r) } });
  }
  max(t, r) {
    return new gi({ ...this._def, maxSize: { value: t, message: ve.toString(r) } });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
gi.create = (n, t) =>
  new gi({ valueType: n, minSize: null, maxSize: null, typeName: Ce.ZodSet, ...je(t) });
class cs extends Be {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== fe.function)
      return ue(r, { code: ee.invalid_type, expected: fe.function, received: r.parsedType }), Me;
    function i(f, m) {
      return rc({
        data: f,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, ac(), Ss].filter((g) => !!g),
        issueData: { code: ee.invalid_arguments, argumentsError: m },
      });
    }
    function l(f, m) {
      return rc({
        data: f,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, ac(), Ss].filter((g) => !!g),
        issueData: { code: ee.invalid_return_type, returnTypeError: m },
      });
    }
    const o = { errorMap: r.common.contextualErrorMap },
      d = r.data;
    if (this._def.returns instanceof ws) {
      const f = this;
      return an(async function (...m) {
        const g = new wn([]),
          y = await f._def.args.parseAsync(m, o).catch((w) => {
            throw (g.addIssue(i(m, w)), g);
          }),
          v = await Reflect.apply(d, this, y);
        return await f._def.returns._def.type.parseAsync(v, o).catch((w) => {
          throw (g.addIssue(l(v, w)), g);
        });
      });
    } else {
      const f = this;
      return an(function (...m) {
        const g = f._def.args.safeParse(m, o);
        if (!g.success) throw new wn([i(m, g.error)]);
        const y = Reflect.apply(d, this, g.data),
          v = f._def.returns.safeParse(y, o);
        if (!v.success) throw new wn([l(y, v.error)]);
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
    return new cs({ ...this._def, args: ba.create(t).rest(di.create()) });
  }
  returns(t) {
    return new cs({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, i) {
    return new cs({
      args: t || ba.create([]).rest(di.create()),
      returns: r || di.create(),
      typeName: Ce.ZodFunction,
      ...je(i),
    });
  }
}
class eu extends Be {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
eu.create = (n, t) => new eu({ getter: n, typeName: Ce.ZodLazy, ...je(t) });
class tu extends Be {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return ue(r, { received: r.data, code: ee.invalid_literal, expected: this._def.value }), Me;
    }
    return { status: 'valid', value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
tu.create = (n, t) => new tu({ value: n, typeName: Ce.ZodLiteral, ...je(t) });
function sb(n, t) {
  return new zr({ values: n, typeName: Ce.ZodEnum, ...je(t) });
}
class zr extends Be {
  constructor() {
    super(...arguments), Ll.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const r = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        ue(r, { expected: Ge.joinValues(i), received: r.parsedType, code: ee.invalid_type }), Me
      );
    }
    if ((ic(this, Ll) || nb(this, Ll, new Set(this._def.values)), !ic(this, Ll).has(t.data))) {
      const r = this._getOrReturnCtx(t),
        i = this._def.values;
      return ue(r, { received: r.data, code: ee.invalid_enum_value, options: i }), Me;
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
    return zr.create(t, { ...this._def, ...r });
  }
  exclude(t, r = this._def) {
    return zr.create(
      this.options.filter((i) => !t.includes(i)),
      { ...this._def, ...r }
    );
  }
}
Ll = new WeakMap();
zr.create = sb;
class nu extends Be {
  constructor() {
    super(...arguments), Bl.set(this, void 0);
  }
  _parse(t) {
    const r = Ge.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(t);
    if (i.parsedType !== fe.string && i.parsedType !== fe.number) {
      const l = Ge.objectValues(r);
      return (
        ue(i, { expected: Ge.joinValues(l), received: i.parsedType, code: ee.invalid_type }), Me
      );
    }
    if (
      (ic(this, Bl) || nb(this, Bl, new Set(Ge.getValidEnumValues(this._def.values))),
      !ic(this, Bl).has(t.data))
    ) {
      const l = Ge.objectValues(r);
      return ue(i, { received: i.data, code: ee.invalid_enum_value, options: l }), Me;
    }
    return an(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Bl = new WeakMap();
nu.create = (n, t) => new nu({ values: n, typeName: Ce.ZodNativeEnum, ...je(t) });
class ws extends Be {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== fe.promise && r.common.async === !1)
      return ue(r, { code: ee.invalid_type, expected: fe.promise, received: r.parsedType }), Me;
    const i = r.parsedType === fe.promise ? r.data : Promise.resolve(r.data);
    return an(
      i.then((l) =>
        this._def.type.parseAsync(l, { path: r.path, errorMap: r.common.contextualErrorMap })
      )
    );
  }
}
ws.create = (n, t) => new ws({ type: n, typeName: Ce.ZodPromise, ...je(t) });
class Xn extends Be {
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
        addIssue: (d) => {
          ue(i, d), d.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), l.type === 'preprocess')) {
      const d = l.transform(i.data, o);
      if (i.common.async)
        return Promise.resolve(d).then(async (f) => {
          if (r.value === 'aborted') return Me;
          const m = await this._def.schema._parseAsync({ data: f, path: i.path, parent: i });
          return m.status === 'aborted'
            ? Me
            : m.status === 'dirty' || r.value === 'dirty'
              ? os(m.value)
              : m;
        });
      {
        if (r.value === 'aborted') return Me;
        const f = this._def.schema._parseSync({ data: d, path: i.path, parent: i });
        return f.status === 'aborted'
          ? Me
          : f.status === 'dirty' || r.value === 'dirty'
            ? os(f.value)
            : f;
      }
    }
    if (l.type === 'refinement') {
      const d = (f) => {
        const m = l.refinement(f, o);
        if (i.common.async) return Promise.resolve(m);
        if (m instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return f;
      };
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
        return f.status === 'aborted'
          ? Me
          : (f.status === 'dirty' && r.dirty(), d(f.value), { status: r.value, value: f.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((f) =>
            f.status === 'aborted'
              ? Me
              : (f.status === 'dirty' && r.dirty(),
                d(f.value).then(() => ({ status: r.value, value: f.value })))
          );
    }
    if (l.type === 'transform')
      if (i.common.async === !1) {
        const d = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
        if (!hi(d)) return d;
        const f = l.transform(d.value, o);
        if (f instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return { status: r.value, value: f };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((d) =>
            hi(d)
              ? Promise.resolve(l.transform(d.value, o)).then((f) => ({
                  status: r.value,
                  value: f,
                }))
              : d
          );
    Ge.assertNever(l);
  }
}
Xn.create = (n, t, r) => new Xn({ schema: n, typeName: Ce.ZodEffects, effect: t, ...je(r) });
Xn.createWithPreprocess = (n, t, r) =>
  new Xn({
    schema: t,
    effect: { type: 'preprocess', transform: n },
    typeName: Ce.ZodEffects,
    ...je(r),
  });
class ya extends Be {
  _parse(t) {
    return this._getType(t) === fe.undefined ? an(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ya.create = (n, t) => new ya({ innerType: n, typeName: Ce.ZodOptional, ...je(t) });
class Ur extends Be {
  _parse(t) {
    return this._getType(t) === fe.null ? an(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ur.create = (n, t) => new Ur({ innerType: n, typeName: Ce.ZodNullable, ...je(t) });
class au extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let i = r.data;
    return (
      r.parsedType === fe.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
au.create = (n, t) =>
  new au({
    innerType: n,
    typeName: Ce.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...je(t),
  });
class ru extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = { ...r, common: { ...r.common, issues: [] } },
      l = this._def.innerType._parse({ data: i.data, path: i.path, parent: { ...i } });
    return $l(l)
      ? l.then((o) => ({
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new wn(i.common.issues);
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
                    return new wn(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ru.create = (n, t) =>
  new ru({
    innerType: n,
    typeName: Ce.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...je(t),
  });
class oc extends Be {
  _parse(t) {
    if (this._getType(t) !== fe.nan) {
      const i = this._getOrReturnCtx(t);
      return ue(i, { code: ee.invalid_type, expected: fe.nan, received: i.parsedType }), Me;
    }
    return { status: 'valid', value: t.data };
  }
}
oc.create = (n) => new oc({ typeName: Ce.ZodNaN, ...je(n) });
const IO = Symbol('zod_brand');
class Ph extends Be {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      i = r.data;
    return this._def.type._parse({ data: i, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class vu extends Be {
  _parse(t) {
    const { status: r, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({ data: i.data, path: i.path, parent: i });
        return o.status === 'aborted'
          ? Me
          : o.status === 'dirty'
            ? (r.dirty(), os(o.value))
            : this._def.out._parseAsync({ data: o.value, path: i.path, parent: i });
      })();
    {
      const l = this._def.in._parseSync({ data: i.data, path: i.path, parent: i });
      return l.status === 'aborted'
        ? Me
        : l.status === 'dirty'
          ? (r.dirty(), { status: 'dirty', value: l.value })
          : this._def.out._parseSync({ data: l.value, path: i.path, parent: i });
    }
  }
  static create(t, r) {
    return new vu({ in: t, out: r, typeName: Ce.ZodPipeline });
  }
}
class iu extends Be {
  _parse(t) {
    const r = this._def.innerType._parse(t),
      i = (l) => (hi(l) && (l.value = Object.freeze(l.value)), l);
    return $l(r) ? r.then((l) => i(l)) : i(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
iu.create = (n, t) => new iu({ innerType: n, typeName: Ce.ZodReadonly, ...je(t) });
function pv(n, t) {
  const r = typeof n == 'function' ? n(t) : typeof n == 'string' ? { message: n } : n;
  return typeof r == 'string' ? { message: r } : r;
}
function lb(n, t = {}, r) {
  return n
    ? xs.create().superRefine((i, l) => {
        var o, d;
        const f = n(i);
        if (f instanceof Promise)
          return f.then((m) => {
            var g, y;
            if (!m) {
              const v = pv(t, i),
                _ =
                  (y = (g = v.fatal) !== null && g !== void 0 ? g : r) !== null && y !== void 0
                    ? y
                    : !0;
              l.addIssue({ code: 'custom', ...v, fatal: _ });
            }
          });
        if (!f) {
          const m = pv(t, i),
            g =
              (d = (o = m.fatal) !== null && o !== void 0 ? o : r) !== null && d !== void 0
                ? d
                : !0;
          l.addIssue({ code: 'custom', ...m, fatal: g });
        }
      })
    : xs.create();
}
const JO = { object: gt.lazycreate };
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
const eE = (n, t = { message: `Input not instance of ${n.name}` }) => lb((r) => r instanceof n, t),
  ub = $n.create,
  ob = Rr.create,
  tE = oc.create,
  nE = jr.create,
  cb = Ql.create,
  aE = mi.create,
  rE = sc.create,
  iE = Kl.create,
  sE = Wl.create,
  lE = xs.create,
  uE = di.create,
  oE = Qa.create,
  cE = lc.create,
  fE = Kn.create,
  dE = gt.create,
  hE = gt.strictCreate,
  mE = Xl.create,
  gE = Oc.create,
  yE = Il.create,
  pE = ba.create,
  vE = Jl.create,
  bE = uc.create,
  _E = gi.create,
  SE = cs.create,
  xE = eu.create,
  wE = tu.create,
  OE = zr.create,
  EE = nu.create,
  CE = ws.create,
  vv = Xn.create,
  TE = ya.create,
  ME = Ur.create,
  NE = Xn.createWithPreprocess,
  DE = vu.create,
  AE = () => ub().optional(),
  kE = () => ob().optional(),
  RE = () => cb().optional(),
  jE = {
    string: (n) => $n.create({ ...n, coerce: !0 }),
    number: (n) => Rr.create({ ...n, coerce: !0 }),
    boolean: (n) => Ql.create({ ...n, coerce: !0 }),
    bigint: (n) => jr.create({ ...n, coerce: !0 }),
    date: (n) => mi.create({ ...n, coerce: !0 }),
  },
  zE = Me;
var ae = Object.freeze({
  __proto__: null,
  defaultErrorMap: Ss,
  setErrorMap: NO,
  getErrorMap: ac,
  makeIssue: rc,
  EMPTY_PATH: DO,
  addIssueToContext: ue,
  ParseStatus: Wt,
  INVALID: Me,
  DIRTY: os,
  OK: an,
  isAborted: bh,
  isDirty: _h,
  isValid: hi,
  isAsync: $l,
  get util() {
    return Ge;
  },
  get objectUtil() {
    return vh;
  },
  ZodParsedType: fe,
  getParsedType: Ya,
  ZodType: Be,
  datetimeRegex: ib,
  ZodString: $n,
  ZodNumber: Rr,
  ZodBigInt: jr,
  ZodBoolean: Ql,
  ZodDate: mi,
  ZodSymbol: sc,
  ZodUndefined: Kl,
  ZodNull: Wl,
  ZodAny: xs,
  ZodUnknown: di,
  ZodNever: Qa,
  ZodVoid: lc,
  ZodArray: Kn,
  ZodObject: gt,
  ZodUnion: Xl,
  ZodDiscriminatedUnion: Oc,
  ZodIntersection: Il,
  ZodTuple: ba,
  ZodRecord: Jl,
  ZodMap: uc,
  ZodSet: gi,
  ZodFunction: cs,
  ZodLazy: eu,
  ZodLiteral: tu,
  ZodEnum: zr,
  ZodNativeEnum: nu,
  ZodPromise: ws,
  ZodEffects: Xn,
  ZodTransformer: Xn,
  ZodOptional: ya,
  ZodNullable: Ur,
  ZodDefault: au,
  ZodCatch: ru,
  ZodNaN: oc,
  BRAND: IO,
  ZodBranded: Ph,
  ZodPipeline: vu,
  ZodReadonly: iu,
  custom: lb,
  Schema: Be,
  ZodSchema: Be,
  late: JO,
  get ZodFirstPartyTypeKind() {
    return Ce;
  },
  coerce: jE,
  any: lE,
  array: fE,
  bigint: nE,
  boolean: cb,
  date: aE,
  discriminatedUnion: gE,
  effect: vv,
  enum: OE,
  function: SE,
  instanceof: eE,
  intersection: yE,
  lazy: xE,
  literal: wE,
  map: bE,
  nan: tE,
  nativeEnum: EE,
  never: oE,
  null: sE,
  nullable: ME,
  number: ob,
  object: dE,
  oboolean: RE,
  onumber: kE,
  optional: TE,
  ostring: AE,
  pipeline: DE,
  preprocess: NE,
  promise: CE,
  record: vE,
  set: _E,
  strictObject: hE,
  string: ub,
  symbol: rE,
  transformer: vv,
  tuple: pE,
  undefined: iE,
  union: mE,
  unknown: uE,
  void: cE,
  NEVER: zE,
  ZodIssueCode: ee,
  quotelessJson: MO,
  ZodError: wn,
});
const UE = ae.object({
  email: ae
    .string()
    .min(1, 'Email is required')
    .superRefine((n, t) => {
      n !== n.trim() &&
        t.addIssue({
          code: ae.ZodIssueCode.custom,
          message: 'Email must not have leading or trailing spaces',
        }),
        n.includes('@') ||
          t.addIssue({ code: ae.ZodIssueCode.custom, message: "Email must contain an '@' symbol" }),
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(n) ||
          t.addIssue({
            code: ae.ZodIssueCode.custom,
            message: 'Email must contain a domain name (e.g., example.com)',
          });
    }),
  password: ae
    .string()
    .regex(/\d+/gi, { message: 'Password must contain at least one digit' })
    .regex(/[A-ZА-Я]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-zа-я]/, { message: 'Password must contain at least one lowercase letter' })
    .min(8, { message: 'Password must be longer than 8 characters' })
    .refine((n) => !/\s/.test(n), { message: 'Password must not contain spaces' }),
});
function LE(n) {
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
function BE(n) {
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
async function HE() {
  const n = `${Lo.clientId}:${Lo.secretId}`,
    t = btoa(n);
  try {
    const r = await fetch(`https://auth.${Lo.region}.commercetools.com/oauth/token`, {
      method: 'POST',
      headers: { Authorization: `Basic ${t}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&scope=manage_customers:${Lo.projectKey}`,
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
const Lo = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function VE(n, t) {
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
      const d = await l.json().catch(() => ({}));
      throw new Error(
        typeof d == 'object' && d !== null && 'message' in d && typeof d.message == 'string'
          ? d.message
          : 'Login failed'
      );
    }
    const o = await l.json();
    if (!BE(o)) throw new Error('Unknown error occurred during getting token');
    return o;
  } catch (l) {
    const o = l instanceof Error ? l.message : 'Unknown error occurred';
    throw new Error(o);
  }
}
const eh = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
async function YE(n) {
  const t = await HE();
  if (!t) throw new Error('Failed to get login token');
  try {
    const r = await fetch(`https://api.${eh.region}.commercetools.com/${eh.projectKey}/login`, {
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
    if (!LE(i)) throw new Error('Invalid login response format');
    const l = await VE(eh, n);
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
function qE() {
  var f, m;
  const {
      register: n,
      handleSubmit: t,
      formState: { errors: r, isValid: i },
      setError: l,
    } = I0({ mode: 'onChange', resolver: eb(UE) }),
    o = Ft(),
    d = async (g) => {
      try {
        'customer' in (await YE(g))
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
          g.preventDefault(), t(d)(g);
        },
        children: [
          S.jsx('h1', {
            className: 'font-additional self-center text-3xl font-bold',
            children: ' Login ',
          }),
          S.jsx(nv, {
            register: n('email'),
            errorMessage: (f = r.email) == null ? void 0 : f.message,
            type: 'text',
            label: 'Email',
            placeholder: 'Enter you email',
            required: !0,
          }),
          S.jsx(nv, {
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
function ZE() {
  const n = Ft(),
    t = !!localStorage.getItem('firstName');
  return (
    k.useEffect(() => {
      t && n('/', { replace: !0 });
    }, [t, n]),
    S.jsx('section', {
      className: 'w-screen flex justify-center max-w-[1440px] m-auto items-center mw',
      children: S.jsx(qE, {}),
    })
  );
}
const fb = [
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
function FE({ error: n, id: t, register: r }) {
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
          fb.map(({ code: i, name: l }) =>
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
const db = 6048e5,
  PE = 864e5,
  bv = Symbol.for('constructDateFrom');
function kt(n, t) {
  return typeof n == 'function'
    ? n(t)
    : n && typeof n == 'object' && bv in n
      ? n[bv](t)
      : n instanceof Date
        ? new n.constructor(t)
        : new Date(t);
}
function ut(n, t) {
  return kt(t || n, n);
}
function hb(n, t, r) {
  const i = ut(n, r == null ? void 0 : r.in);
  return isNaN(t) ? kt(n, NaN) : (t && i.setDate(i.getDate() + t), i);
}
function mb(n, t, r) {
  const i = ut(n, r == null ? void 0 : r.in);
  if (isNaN(t)) return kt(n, NaN);
  if (!t) return i;
  const l = i.getDate(),
    o = kt(n, i.getTime());
  o.setMonth(i.getMonth() + t + 1, 0);
  const d = o.getDate();
  return l >= d ? o : (i.setFullYear(o.getFullYear(), o.getMonth(), l), i);
}
let GE = {};
function bu() {
  return GE;
}
function Os(n, t) {
  var f, m, g, y;
  const r = bu(),
    i =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null
        ? void 0
        : m.weekStartsOn) ??
      r.weekStartsOn ??
      ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ??
      0,
    l = ut(n, t == null ? void 0 : t.in),
    o = l.getDay(),
    d = (o < i ? 7 : 0) + o - i;
  return l.setDate(l.getDate() - d), l.setHours(0, 0, 0, 0), l;
}
function su(n, t) {
  return Os(n, { ...t, weekStartsOn: 1 });
}
function gb(n, t) {
  const r = ut(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = kt(r, 0);
  l.setFullYear(i + 1, 0, 4), l.setHours(0, 0, 0, 0);
  const o = su(l),
    d = kt(r, 0);
  d.setFullYear(i, 0, 4), d.setHours(0, 0, 0, 0);
  const f = su(d);
  return r.getTime() >= o.getTime() ? i + 1 : r.getTime() >= f.getTime() ? i : i - 1;
}
function _v(n) {
  const t = ut(n),
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
function Ns(n, ...t) {
  const r = kt.bind(
    null,
    t.find((i) => typeof i == 'object')
  );
  return t.map(r);
}
function lu(n, t) {
  const r = ut(n, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function yb(n, t, r) {
  const [i, l] = Ns(r == null ? void 0 : r.in, n, t),
    o = lu(i),
    d = lu(l),
    f = +o - _v(o),
    m = +d - _v(d);
  return Math.round((f - m) / PE);
}
function $E(n, t) {
  const r = gb(n, t),
    i = kt(n, 0);
  return i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0), su(i);
}
function QE(n, t, r) {
  return hb(n, t * 7, r);
}
function KE(n, t, r) {
  return mb(n, t * 12, r);
}
function WE(n, t) {
  let r,
    i = t == null ? void 0 : t.in;
  return (
    n.forEach((l) => {
      !i && typeof l == 'object' && (i = kt.bind(null, l));
      const o = ut(l, i);
      (!r || r < o || isNaN(+o)) && (r = o);
    }),
    kt(i, r || NaN)
  );
}
function XE(n, t) {
  let r,
    i = t == null ? void 0 : t.in;
  return (
    n.forEach((l) => {
      !i && typeof l == 'object' && (i = kt.bind(null, l));
      const o = ut(l, i);
      (!r || r > o || isNaN(+o)) && (r = o);
    }),
    kt(i, r || NaN)
  );
}
function IE(n, t, r) {
  const [i, l] = Ns(r == null ? void 0 : r.in, n, t);
  return +lu(i) == +lu(l);
}
function pb(n) {
  return (
    n instanceof Date ||
    (typeof n == 'object' && Object.prototype.toString.call(n) === '[object Date]')
  );
}
function JE(n) {
  return !((!pb(n) && typeof n != 'number') || isNaN(+ut(n)));
}
function e2(n, t, r) {
  const [i, l] = Ns(r == null ? void 0 : r.in, n, t),
    o = i.getFullYear() - l.getFullYear(),
    d = i.getMonth() - l.getMonth();
  return o * 12 + d;
}
function t2(n, t) {
  const r = ut(n, t == null ? void 0 : t.in),
    i = r.getMonth();
  return r.setFullYear(r.getFullYear(), i + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function n2(n, t) {
  const [r, i] = Ns(n, t.start, t.end);
  return { start: r, end: i };
}
function a2(n, t) {
  const { start: r, end: i } = n2(t == null ? void 0 : t.in, n);
  let l = +r > +i;
  const o = l ? +r : +i,
    d = l ? i : r;
  d.setHours(0, 0, 0, 0), d.setDate(1);
  let f = 1;
  const m = [];
  for (; +d <= o; ) m.push(kt(r, d)), d.setMonth(d.getMonth() + f);
  return l ? m.reverse() : m;
}
function r2(n, t) {
  const r = ut(n, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function i2(n, t) {
  const r = ut(n, t == null ? void 0 : t.in),
    i = r.getFullYear();
  return r.setFullYear(i + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function vb(n, t) {
  const r = ut(n, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function bb(n, t) {
  var f, m, g, y;
  const r = bu(),
    i =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null
        ? void 0
        : m.weekStartsOn) ??
      r.weekStartsOn ??
      ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ??
      0,
    l = ut(n, t == null ? void 0 : t.in),
    o = l.getDay(),
    d = (o < i ? -7 : 0) + 6 - (o - i);
  return l.setDate(l.getDate() + d), l.setHours(23, 59, 59, 999), l;
}
function s2(n, t) {
  return bb(n, { ...t, weekStartsOn: 1 });
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
function th(n) {
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
    date: th({ formats: o2, defaultWidth: 'full' }),
    time: th({ formats: c2, defaultWidth: 'full' }),
    dateTime: th({ formats: f2, defaultWidth: 'full' }),
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
function kl(n) {
  return (t, r) => {
    const i = r != null && r.context ? String(r.context) : 'standalone';
    let l;
    if (i === 'formatting' && n.formattingValues) {
      const d = n.defaultFormattingWidth || n.defaultWidth,
        f = r != null && r.width ? String(r.width) : d;
      l = n.formattingValues[f] || n.formattingValues[d];
    } else {
      const d = n.defaultWidth,
        f = r != null && r.width ? String(r.width) : n.defaultWidth;
      l = n.values[f] || n.values[d];
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
    era: kl({ values: g2, defaultWidth: 'wide' }),
    quarter: kl({ values: y2, defaultWidth: 'wide', argumentCallback: (n) => n - 1 }),
    month: kl({ values: p2, defaultWidth: 'wide' }),
    day: kl({ values: v2, defaultWidth: 'wide' }),
    dayPeriod: kl({
      values: b2,
      defaultWidth: 'wide',
      formattingValues: _2,
      defaultFormattingWidth: 'wide',
    }),
  };
function Rl(n) {
  return (t, r = {}) => {
    const i = r.width,
      l = (i && n.matchPatterns[i]) || n.matchPatterns[n.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const d = o[0],
      f = (i && n.parsePatterns[i]) || n.parsePatterns[n.defaultParseWidth],
      m = Array.isArray(f) ? O2(f, (v) => v.test(d)) : w2(f, (v) => v.test(d));
    let g;
    (g = n.valueCallback ? n.valueCallback(m) : m), (g = r.valueCallback ? r.valueCallback(g) : g);
    const y = t.slice(d.length);
    return { value: g, rest: y };
  };
}
function w2(n, t) {
  for (const r in n) if (Object.prototype.hasOwnProperty.call(n, r) && t(n[r])) return r;
}
function O2(n, t) {
  for (let r = 0; r < n.length; r++) if (t(n[r])) return r;
}
function E2(n) {
  return (t, r = {}) => {
    const i = t.match(n.matchPattern);
    if (!i) return null;
    const l = i[0],
      o = t.match(n.parsePattern);
    if (!o) return null;
    let d = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    const f = t.slice(l.length);
    return { value: d, rest: f };
  };
}
const C2 = /^(\d+)(th|st|nd|rd)?/i,
  T2 = /\d+/i,
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
    ordinalNumber: E2({
      matchPattern: C2,
      parsePattern: T2,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: Rl({
      matchPatterns: M2,
      defaultMatchWidth: 'wide',
      parsePatterns: N2,
      defaultParseWidth: 'any',
    }),
    quarter: Rl({
      matchPatterns: D2,
      defaultMatchWidth: 'wide',
      parsePatterns: A2,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: Rl({
      matchPatterns: k2,
      defaultMatchWidth: 'wide',
      parsePatterns: R2,
      defaultParseWidth: 'any',
    }),
    day: Rl({
      matchPatterns: j2,
      defaultMatchWidth: 'wide',
      parsePatterns: z2,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Rl({
      matchPatterns: U2,
      defaultMatchWidth: 'any',
      parsePatterns: L2,
      defaultParseWidth: 'any',
    }),
  },
  Gh = {
    code: 'en-US',
    formatDistance: u2,
    formatLong: d2,
    formatRelative: m2,
    localize: x2,
    match: B2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function H2(n, t) {
  const r = ut(n, t == null ? void 0 : t.in);
  return yb(r, vb(r)) + 1;
}
function _b(n, t) {
  const r = ut(n, t == null ? void 0 : t.in),
    i = +su(r) - +$E(r);
  return Math.round(i / db) + 1;
}
function Sb(n, t) {
  var y, v, _, w;
  const r = ut(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = bu(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((v = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((w = (_ = l.locale) == null ? void 0 : _.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    d = kt((t == null ? void 0 : t.in) || n, 0);
  d.setFullYear(i + 1, 0, o), d.setHours(0, 0, 0, 0);
  const f = Os(d, t),
    m = kt((t == null ? void 0 : t.in) || n, 0);
  m.setFullYear(i, 0, o), m.setHours(0, 0, 0, 0);
  const g = Os(m, t);
  return +r >= +f ? i + 1 : +r >= +g ? i : i - 1;
}
function V2(n, t) {
  var f, m, g, y;
  const r = bu(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((y = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : y.firstWeekContainsDate) ??
      1,
    l = Sb(n, t),
    o = kt((t == null ? void 0 : t.in) || n, 0);
  return o.setFullYear(l, 0, i), o.setHours(0, 0, 0, 0), Os(o, t);
}
function xb(n, t) {
  const r = ut(n, t == null ? void 0 : t.in),
    i = +Os(r, t) - +V2(r, t);
  return Math.round(i / db) + 1;
}
function at(n, t) {
  const r = n < 0 ? '-' : '',
    i = Math.abs(n).toString().padStart(t, '0');
  return r + i;
}
const Or = {
    y(n, t) {
      const r = n.getFullYear(),
        i = r > 0 ? r : 1 - r;
      return at(t === 'yy' ? i % 100 : i, t.length);
    },
    M(n, t) {
      const r = n.getMonth();
      return t === 'M' ? String(r + 1) : at(r + 1, 2);
    },
    d(n, t) {
      return at(n.getDate(), t.length);
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
      return at(n.getHours() % 12 || 12, t.length);
    },
    H(n, t) {
      return at(n.getHours(), t.length);
    },
    m(n, t) {
      return at(n.getMinutes(), t.length);
    },
    s(n, t) {
      return at(n.getSeconds(), t.length);
    },
    S(n, t) {
      const r = t.length,
        i = n.getMilliseconds(),
        l = Math.trunc(i * Math.pow(10, r - 3));
      return at(l, t.length);
    },
  },
  is = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Sv = {
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
      return Or.y(n, t);
    },
    Y: function (n, t, r, i) {
      const l = Sb(n, i),
        o = l > 0 ? l : 1 - l;
      if (t === 'YY') {
        const d = o % 100;
        return at(d, 2);
      }
      return t === 'Yo' ? r.ordinalNumber(o, { unit: 'year' }) : at(o, t.length);
    },
    R: function (n, t) {
      const r = gb(n);
      return at(r, t.length);
    },
    u: function (n, t) {
      const r = n.getFullYear();
      return at(r, t.length);
    },
    Q: function (n, t, r) {
      const i = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(i);
        case 'QQ':
          return at(i, 2);
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
          return at(i, 2);
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
          return Or.M(n, t);
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
          return at(i + 1, 2);
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
      const l = xb(n, i);
      return t === 'wo' ? r.ordinalNumber(l, { unit: 'week' }) : at(l, t.length);
    },
    I: function (n, t, r) {
      const i = _b(n);
      return t === 'Io' ? r.ordinalNumber(i, { unit: 'week' }) : at(i, t.length);
    },
    d: function (n, t, r) {
      return t === 'do' ? r.ordinalNumber(n.getDate(), { unit: 'date' }) : Or.d(n, t);
    },
    D: function (n, t, r) {
      const i = H2(n);
      return t === 'Do' ? r.ordinalNumber(i, { unit: 'dayOfYear' }) : at(i, t.length);
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
          return at(o, 2);
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
          return at(o, t.length);
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
          return at(l, t.length);
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
        (i === 12 ? (l = is.noon) : i === 0 ? (l = is.midnight) : (l = i / 12 >= 1 ? 'pm' : 'am'),
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
          ? (l = is.evening)
          : i >= 12
            ? (l = is.afternoon)
            : i >= 4
              ? (l = is.morning)
              : (l = is.night),
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
      return Or.h(n, t);
    },
    H: function (n, t, r) {
      return t === 'Ho' ? r.ordinalNumber(n.getHours(), { unit: 'hour' }) : Or.H(n, t);
    },
    K: function (n, t, r) {
      const i = n.getHours() % 12;
      return t === 'Ko' ? r.ordinalNumber(i, { unit: 'hour' }) : at(i, t.length);
    },
    k: function (n, t, r) {
      let i = n.getHours();
      return (
        i === 0 && (i = 24), t === 'ko' ? r.ordinalNumber(i, { unit: 'hour' }) : at(i, t.length)
      );
    },
    m: function (n, t, r) {
      return t === 'mo' ? r.ordinalNumber(n.getMinutes(), { unit: 'minute' }) : Or.m(n, t);
    },
    s: function (n, t, r) {
      return t === 'so' ? r.ordinalNumber(n.getSeconds(), { unit: 'second' }) : Or.s(n, t);
    },
    S: function (n, t) {
      return Or.S(n, t);
    },
    X: function (n, t, r) {
      const i = n.getTimezoneOffset();
      if (i === 0) return 'Z';
      switch (t) {
        case 'X':
          return wv(i);
        case 'XXXX':
        case 'XX':
          return ri(i);
        case 'XXXXX':
        case 'XXX':
        default:
          return ri(i, ':');
      }
    },
    x: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'x':
          return wv(i);
        case 'xxxx':
        case 'xx':
          return ri(i);
        case 'xxxxx':
        case 'xxx':
        default:
          return ri(i, ':');
      }
    },
    O: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + xv(i, ':');
        case 'OOOO':
        default:
          return 'GMT' + ri(i, ':');
      }
    },
    z: function (n, t, r) {
      const i = n.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + xv(i, ':');
        case 'zzzz':
        default:
          return 'GMT' + ri(i, ':');
      }
    },
    t: function (n, t, r) {
      const i = Math.trunc(+n / 1e3);
      return at(i, t.length);
    },
    T: function (n, t, r) {
      return at(+n, t.length);
    },
  };
function xv(n, t = '') {
  const r = n > 0 ? '-' : '+',
    i = Math.abs(n),
    l = Math.trunc(i / 60),
    o = i % 60;
  return o === 0 ? r + String(l) : r + String(l) + t + at(o, 2);
}
function wv(n, t) {
  return n % 60 === 0 ? (n > 0 ? '-' : '+') + at(Math.abs(n) / 60, 2) : ri(n, t);
}
function ri(n, t = '') {
  const r = n > 0 ? '-' : '+',
    i = Math.abs(n),
    l = at(Math.trunc(i / 60), 2),
    o = at(i % 60, 2);
  return r + l + t + o;
}
const Ov = (n, t) => {
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
  wb = (n, t) => {
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
  Y2 = (n, t) => {
    const r = n.match(/(P+)(p+)?/) || [],
      i = r[1],
      l = r[2];
    if (!l) return Ov(n, t);
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
    return o.replace('{{date}}', Ov(i, t)).replace('{{time}}', wb(l, t));
  },
  q2 = { p: wb, P: Y2 },
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
  eC = /[a-zA-Z]/;
function Xo(n, t, r) {
  var y, v, _, w, x, N, T, A;
  const i = bu(),
    l = (r == null ? void 0 : r.locale) ?? i.locale ?? Gh,
    o =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((v = (y = r == null ? void 0 : r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((w = (_ = i.locale) == null ? void 0 : _.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    d =
      (r == null ? void 0 : r.weekStartsOn) ??
      ((N = (x = r == null ? void 0 : r.locale) == null ? void 0 : x.options) == null
        ? void 0
        : N.weekStartsOn) ??
      i.weekStartsOn ??
      ((A = (T = i.locale) == null ? void 0 : T.options) == null ? void 0 : A.weekStartsOn) ??
      0,
    f = ut(n, r == null ? void 0 : r.in);
  if (!JE(f)) throw new RangeError('Invalid time value');
  let m = t
    .match(X2)
    .map((j) => {
      const R = j[0];
      if (R === 'p' || R === 'P') {
        const q = q2[R];
        return q(j, l.formatLong);
      }
      return j;
    })
    .join('')
    .match(W2)
    .map((j) => {
      if (j === "''") return { isToken: !1, value: "'" };
      const R = j[0];
      if (R === "'") return { isToken: !1, value: tC(j) };
      if (Sv[R]) return { isToken: !0, value: j };
      if (R.match(eC))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + R + '`'
        );
      return { isToken: !1, value: j };
    });
  l.localize.preprocessor && (m = l.localize.preprocessor(f, m));
  const g = { firstWeekContainsDate: o, weekStartsOn: d, locale: l };
  return m
    .map((j) => {
      if (!j.isToken) return j.value;
      const R = j.value;
      ((!(r != null && r.useAdditionalWeekYearTokens) && $2(R)) ||
        (!(r != null && r.useAdditionalDayOfYearTokens) && G2(R))) &&
        Q2(R, t, String(n));
      const q = Sv[R[0]];
      return q(f, R, l.localize, g);
    })
    .join('');
}
function tC(n) {
  const t = n.match(I2);
  return t ? t[1].replace(J2, "'") : n;
}
function nC(n, t) {
  const r = ut(n, t == null ? void 0 : t.in),
    i = r.getFullYear(),
    l = r.getMonth(),
    o = kt(r, 0);
  return o.setFullYear(i, l + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function aC(n, t) {
  return ut(n, t == null ? void 0 : t.in).getMonth();
}
function rC(n, t) {
  return ut(n, t == null ? void 0 : t.in).getFullYear();
}
function iC(n, t) {
  return +ut(n) > +ut(t);
}
function sC(n, t) {
  return +ut(n) < +ut(t);
}
function lC(n, t, r) {
  const [i, l] = Ns(r == null ? void 0 : r.in, n, t);
  return i.getFullYear() === l.getFullYear() && i.getMonth() === l.getMonth();
}
function uC(n, t, r) {
  const [i, l] = Ns(r == null ? void 0 : r.in, n, t);
  return i.getFullYear() === l.getFullYear();
}
function oC(n, t, r) {
  const i = ut(n, r == null ? void 0 : r.in),
    l = i.getFullYear(),
    o = i.getDate(),
    d = kt(n, 0);
  d.setFullYear(l, t, 15), d.setHours(0, 0, 0, 0);
  const f = nC(d);
  return i.setMonth(t, Math.min(o, f)), i;
}
function cC(n, t, r) {
  const i = ut(n, r == null ? void 0 : r.in);
  return isNaN(+i) ? kt(n, NaN) : (i.setFullYear(t), i);
}
const nh = {},
  Hl = {};
function Zl(n, t) {
  try {
    const i =
      (
        nh[n] ||
        (nh[n] = new Intl.DateTimeFormat('en-GB', {
          timeZone: n,
          hour: 'numeric',
          timeZoneName: 'longOffset',
        }).format)
      )(t).split('GMT')[1] || '';
    return i in Hl ? Hl[i] : Ev(i, i.split(':'));
  } catch {
    if (n in Hl) return Hl[n];
    const r = n == null ? void 0 : n.match(fC);
    return r ? Ev(n, r.slice(1)) : NaN;
  }
}
const fC = /([+-]\d\d):?(\d\d)?/;
function Ev(n, t) {
  const r = +t[0],
    i = +(t[1] || 0);
  return (Hl[n] = r > 0 ? r * 60 + i : r * 60 - i);
}
class ma extends Date {
  constructor(...t) {
    super(),
      t.length > 1 && typeof t[t.length - 1] == 'string' && (this.timeZone = t.pop()),
      (this.internal = new Date()),
      isNaN(Zl(this.timeZone, this))
        ? this.setTime(NaN)
        : t.length
          ? typeof t[0] == 'number' &&
            (t.length === 1 || (t.length === 2 && typeof t[1] != 'number'))
            ? this.setTime(t[0])
            : typeof t[0] == 'string'
              ? this.setTime(+new Date(t[0]))
              : t[0] instanceof Date
                ? this.setTime(+t[0])
                : (this.setTime(+new Date(...t)), Ob(this), xh(this))
          : this.setTime(Date.now());
  }
  static tz(t, ...r) {
    return r.length ? new ma(...r, t) : new ma(Date.now(), t);
  }
  withTimeZone(t) {
    return new ma(+this, t);
  }
  getTimezoneOffset() {
    return -Zl(this.timeZone, this);
  }
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), xh(this), +this;
  }
  [Symbol.for('constructDateFrom')](t) {
    return new ma(+new Date(t), this.timeZone);
  }
}
const Cv = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!Cv.test(n)) return;
  const t = n.replace(Cv, '$1UTC');
  ma.prototype[t] &&
    (n.startsWith('get')
      ? (ma.prototype[n] = function () {
          return this.internal[t]();
        })
      : ((ma.prototype[n] = function () {
          return Date.prototype[t].apply(this.internal, arguments), dC(this), +this;
        }),
        (ma.prototype[t] = function () {
          return Date.prototype[t].apply(this, arguments), xh(this), +this;
        })));
});
function xh(n) {
  n.internal.setTime(+n),
    n.internal.setUTCMinutes(n.internal.getUTCMinutes() - n.getTimezoneOffset());
}
function dC(n) {
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
    Ob(n);
}
function Ob(n) {
  const t = Zl(n.timeZone, n),
    r = new Date(+n);
  r.setUTCHours(r.getUTCHours() - 1);
  const i = -new Date(+n).getTimezoneOffset(),
    l = -new Date(+r).getTimezoneOffset(),
    o = i - l,
    d = Date.prototype.getHours.apply(n) !== n.internal.getUTCHours();
  o && d && n.internal.setUTCMinutes(n.internal.getUTCMinutes() + o);
  const f = i - t;
  f && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + f);
  const m = Zl(n.timeZone, n),
    y = -new Date(+n).getTimezoneOffset() - m,
    v = m !== t,
    _ = y - f;
  if (v && _) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + _);
    const w = Zl(n.timeZone, n),
      x = m - w;
    x &&
      (n.internal.setUTCMinutes(n.internal.getUTCMinutes() + x),
      Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + x));
  }
}
class Kt extends ma {
  static tz(t, ...r) {
    return r.length ? new Kt(...r, t) : new Kt(Date.now(), t);
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
    return `${t} GMT${r}${i}${l} (${hC(this.timeZone, this)})`;
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
    return new Kt(+this, t);
  }
  [Symbol.for('constructDateFrom')](t) {
    return new Kt(+new Date(t), this.timeZone);
  }
}
function hC(n, t) {
  return new Intl.DateTimeFormat('en-GB', { timeZone: n, timeZoneName: 'long' })
    .format(t)
    .slice(12);
}
var _e;
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
})(_e || (_e = {}));
var yt;
(function (n) {
  (n.disabled = 'disabled'),
    (n.hidden = 'hidden'),
    (n.outside = 'outside'),
    (n.focused = 'focused'),
    (n.today = 'today');
})(yt || (yt = {}));
var Qn;
(function (n) {
  (n.range_end = 'range_end'),
    (n.range_middle = 'range_middle'),
    (n.range_start = 'range_start'),
    (n.selected = 'selected');
})(Qn || (Qn = {}));
var Sn;
(function (n) {
  (n.weeks_before_enter = 'weeks_before_enter'),
    (n.weeks_before_exit = 'weeks_before_exit'),
    (n.weeks_after_enter = 'weeks_after_enter'),
    (n.weeks_after_exit = 'weeks_after_exit'),
    (n.caption_after_enter = 'caption_after_enter'),
    (n.caption_after_exit = 'caption_after_exit'),
    (n.caption_before_enter = 'caption_before_enter'),
    (n.caption_before_exit = 'caption_before_exit');
})(Sn || (Sn = {}));
const Tv = 5,
  mC = 4;
function gC(n, t) {
  const r = t.startOfMonth(n),
    i = r.getDay() > 0 ? r.getDay() : 7,
    l = t.addDays(n, -i + 1),
    o = t.addDays(l, Tv * 7 - 1);
  return t.getMonth(n) === t.getMonth(o) ? Tv : mC;
}
function Eb(n, t) {
  const r = t.startOfMonth(n),
    i = r.getDay();
  return i === 1 ? r : i === 0 ? t.addDays(r, -1 * 6) : t.addDays(r, -1 * (i - 1));
}
function yC(n, t) {
  const r = Eb(n, t),
    i = gC(n, t);
  return t.addDays(r, i * 7 - 1);
}
class Xa {
  constructor(t, r) {
    (this.Date = Date),
      (this.today = () => {
        var i;
        return (i = this.overrides) != null && i.today
          ? this.overrides.today()
          : this.options.timeZone
            ? Kt.tz(this.options.timeZone)
            : new this.Date();
      }),
      (this.newDate = (i, l, o) => {
        var d;
        return (d = this.overrides) != null && d.newDate
          ? this.overrides.newDate(i, l, o)
          : this.options.timeZone
            ? new Kt(i, l, o, this.options.timeZone)
            : new Date(i, l, o);
      }),
      (this.addDays = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addDays ? this.overrides.addDays(i, l) : hb(i, l);
      }),
      (this.addMonths = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addMonths
          ? this.overrides.addMonths(i, l)
          : mb(i, l);
      }),
      (this.addWeeks = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addWeeks
          ? this.overrides.addWeeks(i, l)
          : QE(i, l);
      }),
      (this.addYears = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.addYears
          ? this.overrides.addYears(i, l)
          : KE(i, l);
      }),
      (this.differenceInCalendarDays = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.differenceInCalendarDays
          ? this.overrides.differenceInCalendarDays(i, l)
          : yb(i, l);
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
          ? this.overrides.endOfBroadcastWeek(i)
          : yC(i, this);
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
      (this.endOfWeek = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.endOfWeek
          ? this.overrides.endOfWeek(i, l)
          : bb(i, this.options);
      }),
      (this.endOfYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.endOfYear ? this.overrides.endOfYear(i) : i2(i);
      }),
      (this.format = (i, l, o) => {
        var f;
        const d =
          (f = this.overrides) != null && f.format
            ? this.overrides.format(i, l, this.options)
            : Xo(i, l, this.options);
        return this.options.numerals && this.options.numerals !== 'latn'
          ? this.replaceDigits(d)
          : d;
      }),
      (this.getISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.getISOWeek ? this.overrides.getISOWeek(i) : _b(i);
      }),
      (this.getMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.getMonth
          ? this.overrides.getMonth(i, this.options)
          : aC(i, this.options);
      }),
      (this.getYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.getYear
          ? this.overrides.getYear(i, this.options)
          : rC(i, this.options);
      }),
      (this.getWeek = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.getWeek
          ? this.overrides.getWeek(i, this.options)
          : xb(i, this.options);
      }),
      (this.isAfter = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isAfter ? this.overrides.isAfter(i, l) : iC(i, l);
      }),
      (this.isBefore = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isBefore
          ? this.overrides.isBefore(i, l)
          : sC(i, l);
      }),
      (this.isDate = (i) => {
        var l;
        return (l = this.overrides) != null && l.isDate ? this.overrides.isDate(i) : pb(i);
      }),
      (this.isSameDay = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameDay
          ? this.overrides.isSameDay(i, l)
          : IE(i, l);
      }),
      (this.isSameMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameMonth
          ? this.overrides.isSameMonth(i, l)
          : lC(i, l);
      }),
      (this.isSameYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.isSameYear
          ? this.overrides.isSameYear(i, l)
          : uC(i, l);
      }),
      (this.max = (i) => {
        var l;
        return (l = this.overrides) != null && l.max ? this.overrides.max(i) : WE(i);
      }),
      (this.min = (i) => {
        var l;
        return (l = this.overrides) != null && l.min ? this.overrides.min(i) : XE(i);
      }),
      (this.setMonth = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.setMonth
          ? this.overrides.setMonth(i, l)
          : oC(i, l);
      }),
      (this.setYear = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.setYear ? this.overrides.setYear(i, l) : cC(i, l);
      }),
      (this.startOfBroadcastWeek = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.startOfBroadcastWeek
          ? this.overrides.startOfBroadcastWeek(i, this)
          : Eb(i, this);
      }),
      (this.startOfDay = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfDay ? this.overrides.startOfDay(i) : lu(i);
      }),
      (this.startOfISOWeek = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfISOWeek
          ? this.overrides.startOfISOWeek(i)
          : su(i);
      }),
      (this.startOfMonth = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfMonth
          ? this.overrides.startOfMonth(i)
          : r2(i);
      }),
      (this.startOfWeek = (i, l) => {
        var o;
        return (o = this.overrides) != null && o.startOfWeek
          ? this.overrides.startOfWeek(i, this.options)
          : Os(i, this.options);
      }),
      (this.startOfYear = (i) => {
        var l;
        return (l = this.overrides) != null && l.startOfYear
          ? this.overrides.startOfYear(i)
          : vb(i);
      }),
      (this.options = { locale: Gh, ...t }),
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
const _a = new Xa();
class Cb {
  constructor(t, r, i = _a) {
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
class pC {
  constructor(t, r) {
    (this.date = t), (this.weeks = r);
  }
}
class vC {
  constructor(t, r) {
    (this.days = r), (this.weekNumber = t);
  }
}
function Za(n, t, r = !1, i = _a) {
  let { from: l, to: o } = n;
  const { differenceInCalendarDays: d, isSameDay: f } = i;
  return l && o
    ? (d(o, l) < 0 && ([l, o] = [o, l]), d(t, l) >= (r ? 1 : 0) && d(o, t) >= (r ? 1 : 0))
    : !r && o
      ? f(o, t)
      : !r && l
        ? f(l, t)
        : !1;
}
function Tb(n) {
  return !!(n && typeof n == 'object' && 'before' in n && 'after' in n);
}
function $h(n) {
  return !!(n && typeof n == 'object' && 'from' in n);
}
function Mb(n) {
  return !!(n && typeof n == 'object' && 'after' in n);
}
function Nb(n) {
  return !!(n && typeof n == 'object' && 'before' in n);
}
function Db(n) {
  return !!(n && typeof n == 'object' && 'dayOfWeek' in n);
}
function Ab(n, t) {
  return Array.isArray(n) && n.every(t.isDate);
}
function Fa(n, t, r = _a) {
  const i = Array.isArray(t) ? t : [t],
    { isSameDay: l, differenceInCalendarDays: o, isAfter: d } = r;
  return i.some((f) => {
    if (typeof f == 'boolean') return f;
    if (r.isDate(f)) return l(n, f);
    if (Ab(f, r)) return f.includes(n);
    if ($h(f)) return Za(f, n, !1, r);
    if (Db(f))
      return Array.isArray(f.dayOfWeek)
        ? f.dayOfWeek.includes(n.getDay())
        : f.dayOfWeek === n.getDay();
    if (Tb(f)) {
      const m = o(f.before, n),
        g = o(f.after, n),
        y = m > 0,
        v = g < 0;
      return d(f.before, f.after) ? v && y : y || v;
    }
    return Mb(f)
      ? o(n, f.after) > 0
      : Nb(f)
        ? o(f.before, n) > 0
        : typeof f == 'function'
          ? f(n)
          : !1;
  });
}
function bC(n, t, r) {
  const {
      disabled: i,
      hidden: l,
      modifiers: o,
      showOutsideDays: d,
      broadcastCalendar: f,
      today: m,
    } = t,
    { isSameDay: g, isSameMonth: y, startOfMonth: v, isBefore: _, endOfMonth: w, isAfter: x } = r,
    N = t.startMonth && v(t.startMonth),
    T = t.endMonth && w(t.endMonth),
    A = { [yt.focused]: [], [yt.outside]: [], [yt.disabled]: [], [yt.hidden]: [], [yt.today]: [] },
    j = {};
  for (const R of n) {
    const { date: q, displayMonth: M } = R,
      K = !!(M && !y(q, M)),
      W = !!(N && _(q, N)),
      oe = !!(T && x(q, T)),
      X = !!(i && Fa(q, i, r)),
      ye = !!(l && Fa(q, l, r)) || W || oe || (!f && !d && K) || (f && d === !1 && K),
      ke = g(q, m ?? r.today());
    K && A.outside.push(R),
      X && A.disabled.push(R),
      ye && A.hidden.push(R),
      ke && A.today.push(R),
      o &&
        Object.keys(o).forEach((de) => {
          const Se = o == null ? void 0 : o[de];
          Se && Fa(q, Se, r) && (j[de] ? j[de].push(R) : (j[de] = [R]));
        });
  }
  return (R) => {
    const q = {
        [yt.focused]: !1,
        [yt.disabled]: !1,
        [yt.hidden]: !1,
        [yt.outside]: !1,
        [yt.today]: !1,
      },
      M = {};
    for (const K in A) {
      const W = A[K];
      q[K] = W.some((oe) => oe === R);
    }
    for (const K in j) M[K] = j[K].some((W) => W === R);
    return { ...q, ...M };
  };
}
function _C(n, t, r = {}) {
  return Object.entries(n)
    .filter(([, l]) => l === !0)
    .reduce(
      (l, [o]) => (
        r[o] ? l.push(r[o]) : t[yt[o]] ? l.push(t[yt[o]]) : t[Qn[o]] && l.push(t[Qn[o]]), l
      ),
      [t[_e.Day]]
    );
}
function SC(n) {
  return I.createElement('button', { ...n });
}
function xC(n) {
  return I.createElement('span', { ...n });
}
function wC(n) {
  const { size: t = 24, orientation: r = 'left', className: i } = n;
  return I.createElement(
    'svg',
    { className: i, width: t, height: t, viewBox: '0 0 24 24' },
    r === 'up' &&
      I.createElement('polygon', { points: '6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28' }),
    r === 'down' &&
      I.createElement('polygon', { points: '6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72' }),
    r === 'left' &&
      I.createElement('polygon', {
        points: '16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20',
      }),
    r === 'right' &&
      I.createElement('polygon', {
        points: '8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20',
      })
  );
}
function OC(n) {
  const { day: t, modifiers: r, ...i } = n;
  return I.createElement('td', { ...i });
}
function EC(n) {
  const { day: t, modifiers: r, ...i } = n,
    l = I.useRef(null);
  return (
    I.useEffect(() => {
      var o;
      r.focused && ((o = l.current) == null || o.focus());
    }, [r.focused]),
    I.createElement('button', { ref: l, ...i })
  );
}
function CC(n) {
  const { options: t, className: r, components: i, classNames: l, ...o } = n,
    d = [l[_e.Dropdown], r].join(' '),
    f = t == null ? void 0 : t.find(({ value: m }) => m === o.value);
  return I.createElement(
    'span',
    { 'data-disabled': o.disabled, className: l[_e.DropdownRoot] },
    I.createElement(
      i.Select,
      { className: d, ...o },
      t == null
        ? void 0
        : t.map(({ value: m, label: g, disabled: y }) =>
            I.createElement(i.Option, { key: m, value: m, disabled: y }, g)
          )
    ),
    I.createElement(
      'span',
      { className: l[_e.CaptionLabel], 'aria-hidden': !0 },
      f == null ? void 0 : f.label,
      I.createElement(i.Chevron, { orientation: 'down', size: 18, className: l[_e.Chevron] })
    )
  );
}
function TC(n) {
  return I.createElement('div', { ...n });
}
function MC(n) {
  return I.createElement('div', { ...n });
}
function NC(n) {
  const { calendarMonth: t, displayIndex: r, ...i } = n;
  return I.createElement('div', { ...i }, n.children);
}
function DC(n) {
  const { calendarMonth: t, displayIndex: r, ...i } = n;
  return I.createElement('div', { ...i });
}
function AC(n) {
  return I.createElement('table', { ...n });
}
function kC(n) {
  return I.createElement('div', { ...n });
}
const kb = k.createContext(void 0);
function _u() {
  const n = k.useContext(kb);
  if (n === void 0) throw new Error('useDayPicker() must be used within a custom component.');
  return n;
}
function RC(n) {
  const { components: t } = _u();
  return I.createElement(t.Dropdown, { ...n });
}
function jC(n) {
  const { onPreviousClick: t, onNextClick: r, previousMonth: i, nextMonth: l, ...o } = n,
    {
      components: d,
      classNames: f,
      labels: { labelPrevious: m, labelNext: g },
    } = _u(),
    y = k.useCallback(
      (_) => {
        l && (r == null || r(_));
      },
      [l, r]
    ),
    v = k.useCallback(
      (_) => {
        i && (t == null || t(_));
      },
      [i, t]
    );
  return I.createElement(
    'nav',
    { ...o },
    I.createElement(
      d.PreviousMonthButton,
      {
        type: 'button',
        className: f[_e.PreviousMonthButton],
        tabIndex: i ? void 0 : -1,
        'aria-disabled': i ? void 0 : !0,
        'aria-label': m(i),
        onClick: v,
      },
      I.createElement(d.Chevron, {
        disabled: i ? void 0 : !0,
        className: f[_e.Chevron],
        orientation: 'left',
      })
    ),
    I.createElement(
      d.NextMonthButton,
      {
        type: 'button',
        className: f[_e.NextMonthButton],
        tabIndex: l ? void 0 : -1,
        'aria-disabled': l ? void 0 : !0,
        'aria-label': g(l),
        onClick: y,
      },
      I.createElement(d.Chevron, {
        disabled: l ? void 0 : !0,
        orientation: 'right',
        className: f[_e.Chevron],
      })
    )
  );
}
function zC(n) {
  const { components: t } = _u();
  return I.createElement(t.Button, { ...n });
}
function UC(n) {
  return I.createElement('option', { ...n });
}
function LC(n) {
  const { components: t } = _u();
  return I.createElement(t.Button, { ...n });
}
function BC(n) {
  const { rootRef: t, ...r } = n;
  return I.createElement('div', { ...r, ref: t });
}
function HC(n) {
  return I.createElement('select', { ...n });
}
function VC(n) {
  const { week: t, ...r } = n;
  return I.createElement('tr', { ...r });
}
function YC(n) {
  return I.createElement('th', { ...n });
}
function qC(n) {
  return I.createElement('thead', { 'aria-hidden': !0 }, I.createElement('tr', { ...n }));
}
function ZC(n) {
  const { week: t, ...r } = n;
  return I.createElement('th', { ...r });
}
function FC(n) {
  return I.createElement('th', { ...n });
}
function PC(n) {
  return I.createElement('tbody', { ...n });
}
function GC(n) {
  const { components: t } = _u();
  return I.createElement(t.Dropdown, { ...n });
}
const $C = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Button: SC,
      CaptionLabel: xC,
      Chevron: wC,
      Day: OC,
      DayButton: EC,
      Dropdown: CC,
      DropdownNav: TC,
      Footer: MC,
      Month: NC,
      MonthCaption: DC,
      MonthGrid: AC,
      Months: kC,
      MonthsDropdown: RC,
      Nav: jC,
      NextMonthButton: zC,
      Option: UC,
      PreviousMonthButton: LC,
      Root: BC,
      Select: HC,
      Week: VC,
      WeekNumber: ZC,
      WeekNumberHeader: FC,
      Weekday: YC,
      Weekdays: qC,
      Weeks: PC,
      YearsDropdown: GC,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function QC(n) {
  return { ...$C, ...n };
}
function KC(n) {
  const t = {
    'data-mode': n.mode ?? void 0,
    'data-required': 'required' in n ? n.required : void 0,
    'data-multiple-months': (n.numberOfMonths && n.numberOfMonths > 1) || void 0,
    'data-week-numbers': n.showWeekNumber || void 0,
    'data-broadcast-calendar': n.broadcastCalendar || void 0,
    'data-nav-layout': n.navLayout || void 0,
  };
  return (
    Object.entries(n).forEach(([r, i]) => {
      r.startsWith('data-') && (t[r] = i);
    }),
    t
  );
}
function Rb() {
  const n = {};
  for (const t in _e) n[_e[t]] = `rdp-${_e[t]}`;
  for (const t in yt) n[yt[t]] = `rdp-${yt[t]}`;
  for (const t in Qn) n[Qn[t]] = `rdp-${Qn[t]}`;
  for (const t in Sn) n[Sn[t]] = `rdp-${Sn[t]}`;
  return n;
}
function jb(n, t, r) {
  return (r ?? new Xa(t)).format(n, 'LLLL y');
}
const WC = jb;
function XC(n, t, r) {
  return (r ?? new Xa(t)).format(n, 'd');
}
function IC(n, t = _a) {
  return t.format(n, 'LLLL');
}
function JC(n, t = _a) {
  return n < 10
    ? t.formatNumber(`0${n.toLocaleString()}`)
    : t.formatNumber(`${n.toLocaleString()}`);
}
function eT() {
  return '';
}
function tT(n, t, r) {
  return (r ?? new Xa(t)).format(n, 'cccccc');
}
function zb(n, t = _a) {
  return t.format(n, 'yyyy');
}
const nT = zb,
  aT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        formatCaption: jb,
        formatDay: XC,
        formatMonthCaption: WC,
        formatMonthDropdown: IC,
        formatWeekNumber: JC,
        formatWeekNumberHeader: eT,
        formatWeekdayName: tT,
        formatYearCaption: nT,
        formatYearDropdown: zb,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function rT(n) {
  return (
    n != null &&
      n.formatMonthCaption &&
      !n.formatCaption &&
      (n.formatCaption = n.formatMonthCaption),
    n != null &&
      n.formatYearCaption &&
      !n.formatYearDropdown &&
      (n.formatYearDropdown = n.formatYearCaption),
    { ...aT, ...n }
  );
}
function iT(n, t, r, i, l) {
  const { startOfMonth: o, startOfYear: d, endOfYear: f, eachMonthOfInterval: m, getMonth: g } = l;
  return m({ start: d(n), end: f(n) }).map((_) => {
    const w = i.formatMonthDropdown(_, l),
      x = g(_),
      N = (t && _ < o(t)) || (r && _ > o(r)) || !1;
    return { value: x, label: w, disabled: N };
  });
}
function sT(n, t = {}, r = {}) {
  let i = { ...(t == null ? void 0 : t[_e.Day]) };
  return (
    Object.entries(n)
      .filter(([, l]) => l === !0)
      .forEach(([l]) => {
        i = { ...i, ...(r == null ? void 0 : r[l]) };
      }),
    i
  );
}
function lT(n, t, r) {
  const i = n.today(),
    l = t ? n.startOfISOWeek(i) : n.startOfWeek(i),
    o = [];
  for (let d = 0; d < 7; d++) {
    const f = n.addDays(l, d);
    o.push(f);
  }
  return o;
}
function uT(n, t, r, i) {
  if (!n || !t) return;
  const { startOfYear: l, endOfYear: o, addYears: d, getYear: f, isBefore: m, isSameYear: g } = i,
    y = l(n),
    v = o(t),
    _ = [];
  let w = y;
  for (; m(w, v) || g(w, v); ) _.push(w), (w = d(w, 1));
  return _.map((x) => {
    const N = r.formatYearDropdown(x, i);
    return { value: f(x), label: N, disabled: !1 };
  });
}
function Ub(n, t, r) {
  return (r ?? new Xa(t)).format(n, 'LLLL y');
}
const oT = Ub;
function cT(n, t, r, i) {
  let l = (i ?? new Xa(r)).format(n, 'PPPP');
  return t != null && t.today && (l = `Today, ${l}`), l;
}
function Lb(n, t, r, i) {
  let l = (i ?? new Xa(r)).format(n, 'PPPP');
  return t.today && (l = `Today, ${l}`), t.selected && (l = `${l}, selected`), l;
}
const fT = Lb;
function dT() {
  return '';
}
function hT(n) {
  return 'Choose the Month';
}
function mT(n) {
  return 'Go to the Next Month';
}
function gT(n) {
  return 'Go to the Previous Month';
}
function yT(n, t, r) {
  return (r ?? new Xa(t)).format(n, 'cccc');
}
function pT(n, t) {
  return `Week ${n}`;
}
function vT(n) {
  return 'Week Number';
}
function bT(n) {
  return 'Choose the Year';
}
const _T = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        labelCaption: oT,
        labelDay: fT,
        labelDayButton: Lb,
        labelGrid: Ub,
        labelGridcell: cT,
        labelMonthDropdown: hT,
        labelNav: dT,
        labelNext: mT,
        labelPrevious: gT,
        labelWeekNumber: pT,
        labelWeekNumberHeader: vT,
        labelWeekday: yT,
        labelYearDropdown: bT,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Su = (n) => (n instanceof HTMLElement ? n : null),
  ah = (n) => [...(n.querySelectorAll('[data-animated-month]') ?? [])],
  ST = (n) => Su(n.querySelector('[data-animated-month]')),
  rh = (n) => Su(n.querySelector('[data-animated-caption]')),
  ih = (n) => Su(n.querySelector('[data-animated-weeks]')),
  xT = (n) => Su(n.querySelector('[data-animated-nav]')),
  wT = (n) => Su(n.querySelector('[data-animated-weekdays]'));
function OT(n, t, { classNames: r, months: i, focused: l, dateLib: o }) {
  const d = k.useRef(null),
    f = k.useRef(i),
    m = k.useRef(!1);
  k.useLayoutEffect(() => {
    const g = f.current;
    if (
      ((f.current = i),
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
      _ = v ? r[Sn.caption_after_enter] : r[Sn.caption_before_enter],
      w = v ? r[Sn.weeks_after_enter] : r[Sn.weeks_before_enter],
      x = d.current,
      N = n.current.cloneNode(!0);
    if (
      (N instanceof HTMLElement
        ? (ah(N).forEach((R) => {
            if (!(R instanceof HTMLElement)) return;
            const q = ST(R);
            q && R.contains(q) && R.removeChild(q);
            const M = rh(R);
            M && M.classList.remove(_);
            const K = ih(R);
            K && K.classList.remove(w);
          }),
          (d.current = N))
        : (d.current = null),
      m.current || y || l)
    )
      return;
    const T = x instanceof HTMLElement ? ah(x) : [],
      A = ah(n.current);
    if (
      A &&
      A.every((j) => j instanceof HTMLElement) &&
      T &&
      T.every((j) => j instanceof HTMLElement)
    ) {
      (m.current = !0), (n.current.style.isolation = 'isolate');
      const j = xT(n.current);
      j && (j.style.zIndex = '1'),
        A.forEach((R, q) => {
          const M = T[q];
          if (!M) return;
          (R.style.position = 'relative'), (R.style.overflow = 'hidden');
          const K = rh(R);
          K && K.classList.add(_);
          const W = ih(R);
          W && W.classList.add(w);
          const oe = () => {
            (m.current = !1),
              n.current && (n.current.style.isolation = ''),
              j && (j.style.zIndex = ''),
              K && K.classList.remove(_),
              W && W.classList.remove(w),
              (R.style.position = ''),
              (R.style.overflow = ''),
              R.contains(M) && R.removeChild(M);
          };
          (M.style.pointerEvents = 'none'),
            (M.style.position = 'absolute'),
            (M.style.overflow = 'hidden'),
            M.setAttribute('aria-hidden', 'true');
          const X = wT(M);
          X && (X.style.opacity = '0');
          const ye = rh(M);
          ye &&
            (ye.classList.add(v ? r[Sn.caption_before_exit] : r[Sn.caption_after_exit]),
            ye.addEventListener('animationend', oe));
          const ke = ih(M);
          ke && ke.classList.add(v ? r[Sn.weeks_before_exit] : r[Sn.weeks_after_exit]),
            R.insertBefore(M, R.firstChild);
        });
    }
  });
}
function ET(n, t, r, i) {
  const l = n[0],
    o = n[n.length - 1],
    { ISOWeek: d, fixedWeeks: f, broadcastCalendar: m } = r ?? {},
    {
      addDays: g,
      differenceInCalendarDays: y,
      differenceInCalendarMonths: v,
      endOfBroadcastWeek: _,
      endOfISOWeek: w,
      endOfMonth: x,
      endOfWeek: N,
      isAfter: T,
      startOfBroadcastWeek: A,
      startOfISOWeek: j,
      startOfWeek: R,
    } = i,
    q = m ? A(l, i) : d ? j(l) : R(l),
    M = m ? _(o) : d ? w(x(o)) : N(x(o)),
    K = y(M, q),
    W = v(o, l) + 1,
    oe = [];
  for (let ke = 0; ke <= K; ke++) {
    const de = g(q, ke);
    if (t && T(de, t)) break;
    oe.push(de);
  }
  const ye = (m ? 35 : 42) * W;
  if (f && oe.length < ye) {
    const ke = ye - oe.length;
    for (let de = 0; de < ke; de++) {
      const Se = g(oe[oe.length - 1], 1);
      oe.push(Se);
    }
  }
  return oe;
}
function CT(n) {
  const t = [];
  return n.reduce((r, i) => {
    const l = i.weeks.reduce((o, d) => [...o, ...d.days], t);
    return [...r, ...l];
  }, t);
}
function TT(n, t, r, i) {
  const { numberOfMonths: l = 1 } = r,
    o = [];
  for (let d = 0; d < l; d++) {
    const f = i.addMonths(n, d);
    if (t && f > t) break;
    o.push(f);
  }
  return o;
}
function Mv(n, t) {
  const {
    month: r,
    defaultMonth: i,
    today: l = t.today(),
    numberOfMonths: o = 1,
    endMonth: d,
    startMonth: f,
  } = n;
  let m = r || i || l;
  const { differenceInCalendarMonths: g, addMonths: y, startOfMonth: v } = t;
  if (d && g(d, m) < 0) {
    const _ = -1 * (o - 1);
    m = y(d, _);
  }
  return f && g(m, f) < 0 && (m = f), v(m);
}
function MT(n, t, r, i) {
  const {
      addDays: l,
      endOfBroadcastWeek: o,
      endOfISOWeek: d,
      endOfMonth: f,
      endOfWeek: m,
      getISOWeek: g,
      getWeek: y,
      startOfBroadcastWeek: v,
      startOfISOWeek: _,
      startOfWeek: w,
    } = i,
    x = n.reduce((N, T) => {
      const A = r.broadcastCalendar ? v(T, i) : r.ISOWeek ? _(T) : w(T),
        j = r.broadcastCalendar ? o(T) : r.ISOWeek ? d(f(T)) : m(f(T)),
        R = t.filter((W) => W >= A && W <= j),
        q = r.broadcastCalendar ? 35 : 42;
      if (r.fixedWeeks && R.length < q) {
        const W = t.filter((oe) => {
          const X = q - R.length;
          return oe > j && oe <= l(j, X);
        });
        R.push(...W);
      }
      const M = R.reduce((W, oe) => {
          const X = r.ISOWeek ? g(oe) : y(oe),
            ye = W.find((de) => de.weekNumber === X),
            ke = new Cb(oe, T, i);
          return ye ? ye.days.push(ke) : W.push(new vC(X, [ke])), W;
        }, []),
        K = new pC(T, M);
      return N.push(K), N;
    }, []);
  return r.reverseMonths ? x.reverse() : x;
}
function NT(n, t) {
  let { startMonth: r, endMonth: i } = n;
  const {
      startOfYear: l,
      startOfDay: o,
      startOfMonth: d,
      endOfMonth: f,
      addYears: m,
      endOfYear: g,
      newDate: y,
      today: v,
    } = t,
    { fromYear: _, toYear: w, fromMonth: x, toMonth: N } = n;
  !r && x && (r = x),
    !r && _ && (r = t.newDate(_, 0, 1)),
    !i && N && (i = N),
    !i && w && (i = y(w, 11, 31));
  const T = n.captionLayout === 'dropdown' || n.captionLayout === 'dropdown-years';
  return (
    r ? (r = d(r)) : _ ? (r = y(_, 0, 1)) : !r && T && (r = l(m(n.today ?? v(), -100))),
    i ? (i = f(i)) : w ? (i = y(w, 11, 31)) : !i && T && (i = g(n.today ?? v())),
    [r && o(r), i && o(i)]
  );
}
function DT(n, t, r, i) {
  if (r.disableNavigation) return;
  const { pagedNavigation: l, numberOfMonths: o = 1 } = r,
    { startOfMonth: d, addMonths: f, differenceInCalendarMonths: m } = i,
    g = l ? o : 1,
    y = d(n);
  if (!t) return f(y, g);
  if (!(m(t, n) < o)) return f(y, g);
}
function AT(n, t, r, i) {
  if (r.disableNavigation) return;
  const { pagedNavigation: l, numberOfMonths: o } = r,
    { startOfMonth: d, addMonths: f, differenceInCalendarMonths: m } = i,
    g = l ? (o ?? 1) : 1,
    y = d(n);
  if (!t) return f(y, -g);
  if (!(m(y, t) <= 0)) return f(y, -g);
}
function kT(n) {
  const t = [];
  return n.reduce((r, i) => [...r, ...i.weeks], t);
}
function Ec(n, t) {
  const [r, i] = k.useState(n);
  return [t === void 0 ? r : t, i];
}
function RT(n, t) {
  const [r, i] = NT(n, t),
    { startOfMonth: l, endOfMonth: o } = t,
    d = Mv(n, t),
    [f, m] = Ec(d, n.month ? d : void 0);
  k.useEffect(() => {
    const K = Mv(n, t);
    m(K);
  }, [n.timeZone]);
  const g = TT(f, i, n, t),
    y = ET(g, n.endMonth ? o(n.endMonth) : void 0, n, t),
    v = MT(g, y, n, t),
    _ = kT(v),
    w = CT(v),
    x = AT(f, r, n, t),
    N = DT(f, i, n, t),
    { disableNavigation: T, onMonthChange: A } = n,
    j = (K) => _.some((W) => W.days.some((oe) => oe.isEqualTo(K))),
    R = (K) => {
      if (T) return;
      let W = l(K);
      r && W < l(r) && (W = l(r)), i && W > l(i) && (W = l(i)), m(W), A == null || A(W);
    };
  return {
    months: v,
    weeks: _,
    days: w,
    navStart: r,
    navEnd: i,
    previousMonth: x,
    nextMonth: N,
    goToMonth: R,
    goToDay: (K) => {
      j(K) || R(K.date);
    },
  };
}
var oa;
(function (n) {
  (n[(n.Today = 0)] = 'Today'),
    (n[(n.Selected = 1)] = 'Selected'),
    (n[(n.LastFocused = 2)] = 'LastFocused'),
    (n[(n.FocusedModifier = 3)] = 'FocusedModifier');
})(oa || (oa = {}));
function Nv(n) {
  return !n[yt.disabled] && !n[yt.hidden] && !n[yt.outside];
}
function jT(n, t, r, i) {
  let l,
    o = -1;
  for (const d of n) {
    const f = t(d);
    Nv(f) &&
      (f[yt.focused] && o < oa.FocusedModifier
        ? ((l = d), (o = oa.FocusedModifier))
        : i != null && i.isEqualTo(d) && o < oa.LastFocused
          ? ((l = d), (o = oa.LastFocused))
          : r(d.date) && o < oa.Selected
            ? ((l = d), (o = oa.Selected))
            : f[yt.today] && o < oa.Today && ((l = d), (o = oa.Today)));
  }
  return l || (l = n.find((d) => Nv(t(d)))), l;
}
function zT(n, t, r, i, l, o, d) {
  const { ISOWeek: f, broadcastCalendar: m } = o,
    {
      addDays: g,
      addMonths: y,
      addWeeks: v,
      addYears: _,
      endOfBroadcastWeek: w,
      endOfISOWeek: x,
      endOfWeek: N,
      max: T,
      min: A,
      startOfBroadcastWeek: j,
      startOfISOWeek: R,
      startOfWeek: q,
    } = d;
  let K = {
    day: g,
    week: v,
    month: y,
    year: _,
    startOfWeek: (W) => (m ? j(W, d) : f ? R(W) : q(W)),
    endOfWeek: (W) => (m ? w(W) : f ? x(W) : N(W)),
  }[n](r, t === 'after' ? 1 : -1);
  return t === 'before' && i ? (K = T([i, K])) : t === 'after' && l && (K = A([l, K])), K;
}
function Bb(n, t, r, i, l, o, d, f = 0) {
  if (f > 365) return;
  const m = zT(n, t, r.date, i, l, o, d),
    g = !!(o.disabled && Fa(m, o.disabled, d)),
    y = !!(o.hidden && Fa(m, o.hidden, d)),
    v = m,
    _ = new Cb(m, v, d);
  return !g && !y ? _ : Bb(n, t, _, i, l, o, d, f + 1);
}
function UT(n, t, r, i, l) {
  const { autoFocus: o } = n,
    [d, f] = k.useState(),
    m = jT(t.days, r, i || (() => !1), d),
    [g, y] = k.useState(o ? m : void 0);
  return {
    isFocusTarget: (N) => !!(m != null && m.isEqualTo(N)),
    setFocused: y,
    focused: g,
    blur: () => {
      f(g), y(void 0);
    },
    moveFocus: (N, T) => {
      if (!g) return;
      const A = Bb(N, T, g, t.navStart, t.navEnd, n, l);
      A && (t.goToDay(A), y(A));
    },
  };
}
function LT(n, t) {
  const { selected: r, required: i, onSelect: l } = n,
    [o, d] = Ec(r, l ? r : void 0),
    f = l ? r : o,
    { isSameDay: m } = t,
    g = (w) => (f == null ? void 0 : f.some((x) => m(x, w))) ?? !1,
    { min: y, max: v } = n;
  return {
    selected: f,
    select: (w, x, N) => {
      let T = [...(f ?? [])];
      if (g(w)) {
        if ((f == null ? void 0 : f.length) === y || (i && (f == null ? void 0 : f.length) === 1))
          return;
        T = f == null ? void 0 : f.filter((A) => !m(A, w));
      } else (f == null ? void 0 : f.length) === v ? (T = [w]) : (T = [...T, w]);
      return l || d(T), l == null || l(T, w, x, N), T;
    },
    isSelected: g,
  };
}
function BT(n, t, r = 0, i = 0, l = !1, o = _a) {
  const { from: d, to: f } = t || {},
    { isSameDay: m, isAfter: g, isBefore: y } = o;
  let v;
  if (!d && !f) v = { from: n, to: r > 0 ? void 0 : n };
  else if (d && !f)
    m(d, n)
      ? l
        ? (v = { from: d, to: void 0 })
        : (v = void 0)
      : y(n, d)
        ? (v = { from: n, to: d })
        : (v = { from: d, to: n });
  else if (d && f)
    if (m(d, n) && m(f, n)) l ? (v = { from: d, to: f }) : (v = void 0);
    else if (m(d, n)) v = { from: d, to: r > 0 ? void 0 : n };
    else if (m(f, n)) v = { from: n, to: r > 0 ? void 0 : n };
    else if (y(n, d)) v = { from: n, to: f };
    else if (g(n, d)) v = { from: d, to: n };
    else if (g(n, f)) v = { from: d, to: n };
    else throw new Error('Invalid range');
  if (v != null && v.from && v != null && v.to) {
    const _ = o.differenceInCalendarDays(v.to, v.from);
    i > 0 && _ > i
      ? (v = { from: n, to: void 0 })
      : r > 1 && _ < r && (v = { from: n, to: void 0 });
  }
  return v;
}
function HT(n, t, r = _a) {
  const i = Array.isArray(t) ? t : [t];
  let l = n.from;
  const o = r.differenceInCalendarDays(n.to, n.from),
    d = Math.min(o, 6);
  for (let f = 0; f <= d; f++) {
    if (i.includes(l.getDay())) return !0;
    l = r.addDays(l, 1);
  }
  return !1;
}
function Dv(n, t, r = _a) {
  return Za(n, t.from, !1, r) || Za(n, t.to, !1, r) || Za(t, n.from, !1, r) || Za(t, n.to, !1, r);
}
function VT(n, t, r = _a) {
  const i = Array.isArray(t) ? t : [t];
  if (
    i
      .filter((f) => typeof f != 'function')
      .some((f) =>
        typeof f == 'boolean'
          ? f
          : r.isDate(f)
            ? Za(n, f, !1, r)
            : Ab(f, r)
              ? f.some((m) => Za(n, m, !1, r))
              : $h(f)
                ? f.from && f.to
                  ? Dv(n, { from: f.from, to: f.to }, r)
                  : !1
                : Db(f)
                  ? HT(n, f.dayOfWeek, r)
                  : Tb(f)
                    ? r.isAfter(f.before, f.after)
                      ? Dv(n, { from: r.addDays(f.after, 1), to: r.addDays(f.before, -1) }, r)
                      : Fa(n.from, f, r) || Fa(n.to, f, r)
                    : Mb(f) || Nb(f)
                      ? Fa(n.from, f, r) || Fa(n.to, f, r)
                      : !1
      )
  )
    return !0;
  const d = i.filter((f) => typeof f == 'function');
  if (d.length) {
    let f = n.from;
    const m = r.differenceInCalendarDays(n.to, n.from);
    for (let g = 0; g <= m; g++) {
      if (d.some((y) => y(f))) return !0;
      f = r.addDays(f, 1);
    }
  }
  return !1;
}
function YT(n, t) {
  const { disabled: r, excludeDisabled: i, selected: l, required: o, onSelect: d } = n,
    [f, m] = Ec(l, d ? l : void 0),
    g = d ? l : f;
  return {
    selected: g,
    select: (_, w, x) => {
      const { min: N, max: T } = n,
        A = _ ? BT(_, g, N, T, o, t) : void 0;
      return (
        i &&
          r &&
          A != null &&
          A.from &&
          A.to &&
          VT({ from: A.from, to: A.to }, r, t) &&
          ((A.from = _), (A.to = void 0)),
        d || m(A),
        d == null || d(A, _, w, x),
        A
      );
    },
    isSelected: (_) => g && Za(g, _, !1, t),
  };
}
function qT(n, t) {
  const { selected: r, required: i, onSelect: l } = n,
    [o, d] = Ec(r, l ? r : void 0),
    f = l ? r : o,
    { isSameDay: m } = t;
  return {
    selected: f,
    select: (v, _, w) => {
      let x = v;
      return !i && f && f && m(v, f) && (x = void 0), l || d(x), l == null || l(x, v, _, w), x;
    },
    isSelected: (v) => (f ? m(f, v) : !1),
  };
}
function ZT(n, t) {
  const r = qT(n, t),
    i = LT(n, t),
    l = YT(n, t);
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
function FT(n) {
  var Hr;
  let t = n;
  t.timeZone &&
    ((t = { ...n }),
    t.today && (t.today = new Kt(t.today, t.timeZone)),
    t.month && (t.month = new Kt(t.month, t.timeZone)),
    t.defaultMonth && (t.defaultMonth = new Kt(t.defaultMonth, t.timeZone)),
    t.startMonth && (t.startMonth = new Kt(t.startMonth, t.timeZone)),
    t.endMonth && (t.endMonth = new Kt(t.endMonth, t.timeZone)),
    t.mode === 'single' && t.selected
      ? (t.selected = new Kt(t.selected, t.timeZone))
      : t.mode === 'multiple' && t.selected
        ? (t.selected = (Hr = t.selected) == null ? void 0 : Hr.map((Le) => new Kt(Le, t.timeZone)))
        : t.mode === 'range' &&
          t.selected &&
          (t.selected = {
            from: t.selected.from ? new Kt(t.selected.from, t.timeZone) : void 0,
            to: t.selected.to ? new Kt(t.selected.to, t.timeZone) : void 0,
          }));
  const {
      components: r,
      formatters: i,
      labels: l,
      dateLib: o,
      locale: d,
      classNames: f,
    } = k.useMemo(() => {
      const Le = { ...Gh, ...t.locale };
      return {
        dateLib: new Xa(
          {
            locale: Le,
            weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
            firstWeekContainsDate: t.firstWeekContainsDate,
            useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
            useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
            timeZone: t.timeZone,
            numerals: t.numerals,
          },
          t.dateLib
        ),
        components: QC(t.components),
        formatters: rT(t.formatters),
        labels: { ..._T, ...t.labels },
        locale: Le,
        classNames: { ...Rb(), ...t.classNames },
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
      captionLayout: m,
      mode: g,
      navLayout: y,
      numberOfMonths: v = 1,
      onDayBlur: _,
      onDayClick: w,
      onDayFocus: x,
      onDayKeyDown: N,
      onDayMouseEnter: T,
      onDayMouseLeave: A,
      onNextClick: j,
      onPrevClick: R,
      showWeekNumber: q,
      styles: M,
    } = t,
    {
      formatCaption: K,
      formatDay: W,
      formatMonthDropdown: oe,
      formatWeekNumber: X,
      formatWeekNumberHeader: ye,
      formatWeekdayName: ke,
      formatYearDropdown: de,
    } = i,
    Se = RT(t, o),
    {
      days: Ae,
      months: He,
      navStart: V,
      navEnd: J,
      previousMonth: ce,
      nextMonth: xe,
      goToMonth: E,
    } = Se,
    Z = bC(Ae, t, o),
    { isSelected: re, select: te, selected: pe } = ZT(t, o) ?? {},
    {
      blur: ze,
      focused: we,
      isFocusTarget: Tt,
      moveFocus: Ie,
      setFocused: Bt,
    } = UT(t, Se, Z, re ?? (() => !1), o),
    {
      labelDayButton: Ia,
      labelGridcell: Ja,
      labelGrid: er,
      labelMonthDropdown: Lr,
      labelNav: Sa,
      labelPrevious: vi,
      labelNext: Ds,
      labelWeekday: rn,
      labelWeekNumber: xu,
      labelWeekNumberHeader: Br,
      labelYearDropdown: C,
    } = l,
    B = k.useMemo(() => lT(o, t.ISOWeek), [o, t.ISOWeek]),
    F = g !== void 0 || w !== void 0,
    se = k.useCallback(() => {
      ce && (E(ce), R == null || R(ce));
    }, [ce, E, R]),
    ie = k.useCallback(() => {
      xe && (E(xe), j == null || j(xe));
    }, [E, xe, j]),
    ne = k.useCallback(
      (Le, ot) => (Je) => {
        Je.preventDefault(),
          Je.stopPropagation(),
          Bt(Le),
          te == null || te(Le.date, ot, Je),
          w == null || w(Le.date, ot, Je);
      },
      [te, w, Bt]
    ),
    ge = k.useCallback(
      (Le, ot) => (Je) => {
        Bt(Le), x == null || x(Le.date, ot, Je);
      },
      [x, Bt]
    ),
    De = k.useCallback(
      (Le, ot) => (Je) => {
        ze(), _ == null || _(Le.date, ot, Je);
      },
      [ze, _]
    ),
    qe = k.useCallback(
      (Le, ot) => (Je) => {
        const sn = {
          ArrowLeft: ['day', t.dir === 'rtl' ? 'after' : 'before'],
          ArrowRight: ['day', t.dir === 'rtl' ? 'before' : 'after'],
          ArrowDown: ['week', 'after'],
          ArrowUp: ['week', 'before'],
          PageUp: [Je.shiftKey ? 'year' : 'month', 'before'],
          PageDown: [Je.shiftKey ? 'year' : 'month', 'after'],
          Home: ['startOfWeek', 'before'],
          End: ['endOfWeek', 'after'],
        };
        if (sn[Je.key]) {
          Je.preventDefault(), Je.stopPropagation();
          const [dn, Vr] = sn[Je.key];
          Ie(dn, Vr);
        }
        N == null || N(Le.date, ot, Je);
      },
      [Ie, N, t.dir]
    ),
    rt = k.useCallback(
      (Le, ot) => (Je) => {
        T == null || T(Le.date, ot, Je);
      },
      [T]
    ),
    tr = k.useCallback(
      (Le, ot) => (Je) => {
        A == null || A(Le.date, ot, Je);
      },
      [A]
    ),
    Cn = k.useCallback(
      (Le) => (ot) => {
        const Je = Number(ot.target.value),
          sn = o.setMonth(o.startOfMonth(Le), Je);
        E(sn);
      },
      [o, E]
    ),
    As = k.useCallback(
      (Le) => (ot) => {
        const Je = Number(ot.target.value),
          sn = o.setYear(o.startOfMonth(Le), Je);
        E(sn);
      },
      [o, E]
    ),
    { className: ea, style: ta } = k.useMemo(
      () => ({
        className: [f[_e.Root], t.className].filter(Boolean).join(' '),
        style: { ...(M == null ? void 0 : M[_e.Root]), ...t.style },
      }),
      [f, t.className, t.style, M]
    ),
    Ln = KC(t),
    na = k.useRef(null);
  OT(na, !!t.animate, { classNames: f, months: He, focused: we, dateLib: o });
  const xa = {
    dayPickerProps: t,
    selected: pe,
    select: te,
    isSelected: re,
    months: He,
    nextMonth: xe,
    previousMonth: ce,
    goToMonth: E,
    getModifiers: Z,
    components: r,
    classNames: f,
    styles: M,
    labels: l,
    formatters: i,
  };
  return I.createElement(
    kb.Provider,
    { value: xa },
    I.createElement(
      r.Root,
      {
        rootRef: t.animate ? na : void 0,
        className: ea,
        style: ta,
        dir: t.dir,
        id: t.id,
        lang: t.lang,
        nonce: t.nonce,
        title: t.title,
        role: t.role,
        'aria-label': t['aria-label'],
        ...Ln,
      },
      I.createElement(
        r.Months,
        { className: f[_e.Months], style: M == null ? void 0 : M[_e.Months] },
        !t.hideNavigation &&
          !y &&
          I.createElement(r.Nav, {
            'data-animated-nav': t.animate ? 'true' : void 0,
            className: f[_e.Nav],
            style: M == null ? void 0 : M[_e.Nav],
            'aria-label': Sa(),
            onPreviousClick: se,
            onNextClick: ie,
            previousMonth: ce,
            nextMonth: xe,
          }),
        He.map((Le, ot) => {
          const Je = iT(Le.date, V, J, i, o),
            sn = uT(V, J, i, o);
          return I.createElement(
            r.Month,
            {
              'data-animated-month': t.animate ? 'true' : void 0,
              className: f[_e.Month],
              style: M == null ? void 0 : M[_e.Month],
              key: ot,
              displayIndex: ot,
              calendarMonth: Le,
            },
            y === 'around' &&
              !t.hideNavigation &&
              ot === 0 &&
              I.createElement(
                r.PreviousMonthButton,
                {
                  type: 'button',
                  className: f[_e.PreviousMonthButton],
                  tabIndex: ce ? void 0 : -1,
                  'aria-disabled': ce ? void 0 : !0,
                  'aria-label': vi(ce),
                  onClick: se,
                  'data-animated-button': t.animate ? 'true' : void 0,
                },
                I.createElement(r.Chevron, {
                  disabled: ce ? void 0 : !0,
                  className: f[_e.Chevron],
                  orientation: t.dir === 'rtl' ? 'right' : 'left',
                })
              ),
            I.createElement(
              r.MonthCaption,
              {
                'data-animated-caption': t.animate ? 'true' : void 0,
                className: f[_e.MonthCaption],
                style: M == null ? void 0 : M[_e.MonthCaption],
                calendarMonth: Le,
                displayIndex: ot,
              },
              m != null && m.startsWith('dropdown')
                ? I.createElement(
                    r.DropdownNav,
                    { className: f[_e.Dropdowns], style: M == null ? void 0 : M[_e.Dropdowns] },
                    m === 'dropdown' || m === 'dropdown-months'
                      ? I.createElement(r.MonthsDropdown, {
                          className: f[_e.MonthsDropdown],
                          'aria-label': Lr(),
                          classNames: f,
                          components: r,
                          disabled: !!t.disableNavigation,
                          onChange: Cn(Le.date),
                          options: Je,
                          style: M == null ? void 0 : M[_e.Dropdown],
                          value: o.getMonth(Le.date),
                        })
                      : I.createElement('span', null, oe(Le.date, o)),
                    m === 'dropdown' || m === 'dropdown-years'
                      ? I.createElement(r.YearsDropdown, {
                          className: f[_e.YearsDropdown],
                          'aria-label': C(o.options),
                          classNames: f,
                          components: r,
                          disabled: !!t.disableNavigation,
                          onChange: As(Le.date),
                          options: sn,
                          style: M == null ? void 0 : M[_e.Dropdown],
                          value: o.getYear(Le.date),
                        })
                      : I.createElement('span', null, de(Le.date, o)),
                    I.createElement(
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
                      K(Le.date, o.options, o)
                    )
                  )
                : I.createElement(
                    r.CaptionLabel,
                    { className: f[_e.CaptionLabel], role: 'status', 'aria-live': 'polite' },
                    K(Le.date, o.options, o)
                  )
            ),
            y === 'around' &&
              !t.hideNavigation &&
              ot === v - 1 &&
              I.createElement(
                r.NextMonthButton,
                {
                  type: 'button',
                  className: f[_e.NextMonthButton],
                  tabIndex: xe ? void 0 : -1,
                  'aria-disabled': xe ? void 0 : !0,
                  'aria-label': Ds(xe),
                  onClick: ie,
                  'data-animated-button': t.animate ? 'true' : void 0,
                },
                I.createElement(r.Chevron, {
                  disabled: xe ? void 0 : !0,
                  className: f[_e.Chevron],
                  orientation: t.dir === 'rtl' ? 'left' : 'right',
                })
              ),
            ot === v - 1 &&
              y === 'after' &&
              !t.hideNavigation &&
              I.createElement(r.Nav, {
                'data-animated-nav': t.animate ? 'true' : void 0,
                className: f[_e.Nav],
                style: M == null ? void 0 : M[_e.Nav],
                'aria-label': Sa(),
                onPreviousClick: se,
                onNextClick: ie,
                previousMonth: ce,
                nextMonth: xe,
              }),
            I.createElement(
              r.MonthGrid,
              {
                role: 'grid',
                'aria-multiselectable': g === 'multiple' || g === 'range',
                'aria-label': er(Le.date, o.options, o) || void 0,
                className: f[_e.MonthGrid],
                style: M == null ? void 0 : M[_e.MonthGrid],
              },
              !t.hideWeekdays &&
                I.createElement(
                  r.Weekdays,
                  {
                    'data-animated-weekdays': t.animate ? 'true' : void 0,
                    className: f[_e.Weekdays],
                    style: M == null ? void 0 : M[_e.Weekdays],
                  },
                  q &&
                    I.createElement(
                      r.WeekNumberHeader,
                      {
                        'aria-label': Br(o.options),
                        className: f[_e.WeekNumberHeader],
                        style: M == null ? void 0 : M[_e.WeekNumberHeader],
                        scope: 'col',
                      },
                      ye()
                    ),
                  B.map((dn, Vr) =>
                    I.createElement(
                      r.Weekday,
                      {
                        'aria-label': rn(dn, o.options, o),
                        className: f[_e.Weekday],
                        key: Vr,
                        style: M == null ? void 0 : M[_e.Weekday],
                        scope: 'col',
                      },
                      ke(dn, o.options, o)
                    )
                  )
                ),
              I.createElement(
                r.Weeks,
                {
                  'data-animated-weeks': t.animate ? 'true' : void 0,
                  className: f[_e.Weeks],
                  style: M == null ? void 0 : M[_e.Weeks],
                },
                Le.weeks.map((dn, Vr) =>
                  I.createElement(
                    r.Week,
                    {
                      className: f[_e.Week],
                      key: dn.weekNumber,
                      style: M == null ? void 0 : M[_e.Week],
                      week: dn,
                    },
                    q &&
                      I.createElement(
                        r.WeekNumber,
                        {
                          week: dn,
                          style: M == null ? void 0 : M[_e.WeekNumber],
                          'aria-label': xu(dn.weekNumber, { locale: d }),
                          className: f[_e.WeekNumber],
                          scope: 'row',
                          role: 'rowheader',
                        },
                        X(dn.weekNumber, o)
                      ),
                    dn.days.map((Mt) => {
                      const { date: ln } = Mt,
                        $e = Z(Mt);
                      if (
                        (($e[yt.focused] = !$e.hidden && !!(we != null && we.isEqualTo(Mt))),
                        ($e[Qn.selected] = (re == null ? void 0 : re(ln)) || $e.selected),
                        $h(pe))
                      ) {
                        const { from: Ot, to: Rt } = pe;
                        ($e[Qn.range_start] = !!(Ot && Rt && o.isSameDay(ln, Ot))),
                          ($e[Qn.range_end] = !!(Ot && Rt && o.isSameDay(ln, Rt))),
                          ($e[Qn.range_middle] = Za(pe, ln, !0, o));
                      }
                      const wu = sT($e, M, t.modifiersStyles),
                        Rc = _C($e, f, t.modifiersClassNames),
                        aa = !F && !$e.hidden ? Ja(ln, $e, o.options, o) : void 0;
                      return I.createElement(
                        r.Day,
                        {
                          key: `${o.format(ln, 'yyyy-MM-dd')}_${o.format(Mt.displayMonth, 'yyyy-MM')}`,
                          day: Mt,
                          modifiers: $e,
                          className: Rc.join(' '),
                          style: wu,
                          role: 'gridcell',
                          'aria-selected': $e.selected || void 0,
                          'aria-label': aa,
                          'data-day': o.format(ln, 'yyyy-MM-dd'),
                          'data-month': Mt.outside ? o.format(ln, 'yyyy-MM') : void 0,
                          'data-selected': $e.selected || void 0,
                          'data-disabled': $e.disabled || void 0,
                          'data-hidden': $e.hidden || void 0,
                          'data-outside': Mt.outside || void 0,
                          'data-focused': $e.focused || void 0,
                          'data-today': $e.today || void 0,
                        },
                        !$e.hidden && F
                          ? I.createElement(
                              r.DayButton,
                              {
                                className: f[_e.DayButton],
                                style: M == null ? void 0 : M[_e.DayButton],
                                type: 'button',
                                day: Mt,
                                modifiers: $e,
                                disabled: $e.disabled || void 0,
                                tabIndex: Tt(Mt) ? 0 : -1,
                                'aria-label': Ia(ln, $e, o.options, o),
                                onClick: ne(Mt, $e),
                                onBlur: De(Mt, $e),
                                onFocus: ge(Mt, $e),
                                onKeyDown: qe(Mt, $e),
                                onMouseEnter: rt(Mt, $e),
                                onMouseLeave: tr(Mt, $e),
                              },
                              W(ln, o.options, o)
                            )
                          : !$e.hidden && W(Mt.date, o.options, o)
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
        I.createElement(
          r.Footer,
          {
            className: f[_e.Footer],
            style: M == null ? void 0 : M[_e.Footer],
            role: 'status',
            'aria-live': 'polite',
          },
          t.footer
        )
    )
  );
}
function PT({ title: n, id: t, error: r, type: i, register: l, control: o }) {
  const [d, f] = k.useState(void 0),
    m = Rb(),
    [g, y] = k.useState(!1),
    v = k.useRef(null);
  return (
    k.useEffect(() => {
      const _ = (w) => {
        v.current && !v.current.contains(w.target) && y(!1);
      };
      return (
        document.addEventListener('mousedown', _),
        () => {
          document.removeEventListener('mousedown', _);
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
          value: d ? Xo(d, 'yyyy-MM-dd') : '',
          readOnly: !0,
          className: 'hidden',
        }),
        S.jsx(fO, {
          name: t,
          control: o,
          render: ({ field: _ }) =>
            S.jsxs(S.Fragment, {
              children: [
                S.jsx('div', {
                  className:
                    'rounded-lg text-olive font-main p-1 w-[300px] hover:cursor-pointer focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki',
                  onClick: () => {
                    y(!g);
                  },
                  children: d ? Xo(d, 'dd MMMM, yyyy') : 'Pick a date',
                }),
                g &&
                  S.jsx('div', {
                    tabIndex: 0,
                    ref: v,
                    className: 'absolute z-10 w-fit h-fit outline-none mt-1 -translate-y-1',
                    children: S.jsx(FT, {
                      mode: 'single',
                      disabled: { before: new Date(1930, 1, 1), after: new Date() },
                      selected: d,
                      onSelect: (w) => {
                        f(w), w && _.onChange(Xo(w, 'yyyy-MM-dd')), y(!1);
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
function wh({ title: n, id: t, type: r, error: i, register: l }) {
  const [o, d] = k.useState(!1),
    f = r === 'password',
    m = r === 'checkbox',
    g = r === 'email',
    y = f ? (o ? 'text' : 'password') : r;
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
      f &&
        S.jsx('button', {
          type: 'button',
          className: 'absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer pt-3',
          onClick: () => {
            d((v) => !v);
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
function Av({ title: n, content: t, register: r, errors: i, hint: l, control: o }) {
  var d;
  return S.jsxs('fieldset', {
    className: 'flex flex-row gap-4 p-2 flex-wrap justify-center',
    children: [
      S.jsxs('legend', {
        className: 'text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main',
        children: [n, l && S.jsx('p', { className: 'text-base text-goldenrod', children: l })],
      }),
      t.map((f) => {
        var y, v;
        const m = f.id;
        return String(m).toLowerCase().includes('date')
          ? S.jsx(
              PT,
              {
                title: f.title,
                error: (y = i[m]) == null ? void 0 : y.message,
                id: m,
                type: f.type,
                control: o,
                register: r(m),
              },
              String(m)
            )
          : S.jsx(
              wh,
              {
                title: f.title,
                id: String(m),
                type: f.type,
                register: r(m),
                error: (v = i[m]) == null ? void 0 : v.message,
              },
              String(m)
            );
      }),
      n.includes('address') &&
        S.jsx(FE, {
          id: `${n.split(' ')[0]}Country`,
          register: r(`${n.split(' ')[0]}Country`),
          error: (d = i[`${n.split(' ')[0]}Country`]) == null ? void 0 : d.message,
        }),
    ],
  });
}
const fs = new Date(),
  Qh = ae
    .string()
    .refine((n) => fb.some((t) => t.code === n), { message: 'Please select a country' }),
  GT = ae.object({
    firstName: ae
      .string()
      .min(1, 'First name must be at least 1 character')
      .max(20, 'First name must be no longer than 20 characters'),
    lastName: ae
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name must be no longer than 20 characters'),
    dateOfBirth: ae.string().refine((n) => {
      const t = new Date(n);
      let r = fs.getFullYear() - t.getFullYear();
      const i = fs.getMonth() - t.getMonth(),
        l = fs.getDate() - t.getDate();
      return (i < 0 || (i === 0 && l < 0)) && r--, r >= 13;
    }, 'You must be at least 13 years old'),
  }),
  $T = ae.object({
    email: ae
      .string()
      .min(1, 'Email is required')
      .superRefine((n, t) => {
        n !== n.trim() &&
          t.addIssue({
            code: ae.ZodIssueCode.custom,
            message: 'Email must not have leading or trailing spaces',
          }),
          n.includes('@') ||
            t.addIssue({
              code: ae.ZodIssueCode.custom,
              message: "Email must contain an '@' symbol",
            }),
          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(n) ||
            t.addIssue({
              code: ae.ZodIssueCode.custom,
              message: 'Email must contain a domain name (e.g., example.com)',
            });
      }),
    password: ae
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must include an uppercase letter')
      .regex(/[a-z]/, 'Password must include a lowercase letter')
      .regex(/[0-9]/, 'Password must include a number')
      .refine((n) => !/\s/.test(n), { message: 'Password must not contain spaces' }),
  }),
  QT = ae.object({
    petName: ae.string().min(2, 'First name must be at least 2 characters').max(20),
    petBirthDate: ae.string().refine((n) => {
      const t = new Date(n);
      let r = fs.getFullYear() - t.getFullYear();
      const i = fs.getMonth() - t.getMonth(),
        l = fs.getDate() - t.getDate();
      return (i < 0 || (i === 0 && l < 0)) && r--, r <= 35;
    }, 'Your pet must be very old... Try applying for Guinness World Records'),
  }),
  Hb = /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/,
  KT = ae.object({
    shippingStreetName: ae.string().min(5, 'Street name must be at least 5 characters'),
    shippingCity: ae.string().min(2, 'City name must be at least 2 characters'),
    shippingPostalCode: ae.string().regex(Hb, 'Postal code must be valid (e.g., 12345)'),
    shippingCountry: Qh,
  }),
  WT = ae.object({
    billingStreetName: ae.string().min(5, 'Street name must be at least 5 characters').optional(),
    billingCity: ae.string().min(2, 'City name must be at least 2 characters').optional(),
    billingPostalCode: ae.string().regex(Hb, 'Postal code must be valid (e.g., 12345)').optional(),
    billingCountry: Qh.optional(),
  }),
  jl = GT.merge($T)
    .merge(QT)
    .merge(KT)
    .merge(WT)
    .extend({ defaultAddress: ae.boolean().optional() }),
  XT = jl.extend({ sameAsShipping: ae.boolean().optional() }).refine(
    (n) => {
      if (n.sameAsShipping) return !0;
      const { billingStreetName: t, billingCity: r, billingPostalCode: i, billingCountry: l } = n;
      return ae
        .object({
          billingStreetName: jl.shape.billingStreetName,
          billingCity: jl.shape.billingCity,
          billingPostalCode: jl.shape.billingPostalCode,
          billingCountry: jl.shape.billingCountry,
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
async function IT(n, t, r) {
  var x, N, T, A;
  const i = Zb.safeParse(n),
    l = (x = i.data) == null ? void 0 : x.customer.version,
    o = (N = i.data) == null ? void 0 : N.customer.id,
    d = (T = i.data) == null ? void 0 : T.customer.addresses[0].id,
    f = (A = i.data) != null && A.customer.addresses[1] ? i.data.customer.addresses[1].id : d,
    m = [
      { action: 'addShippingAddressId', addressId: d },
      { action: 'addBillingAddressId', addressId: f },
    ],
    g = r
      ? [
          { action: 'setDefaultShippingAddress', addressId: d },
          { action: 'setDefaultBillingAddress', addressId: f },
        ]
      : [],
    y = { version: l ?? 1, actions: [...m, ...g] },
    _ = await (
      await fetch(Yb + `/${o ?? ''}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(y),
      })
    ).json(),
    w = qb.safeParse(_);
  if (!w.success)
    throw (
      (console.error('Invalid response structure:', w.error),
      console.log('Raw response:', _),
      new Error('Sign-up failed: Invalid response structure'))
    );
  return w.data;
}
const JT = 'QMdMW3dn2QFBIFpoFRm_yfE0',
  eM = 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  tM = 'ecommerce2v',
  Vb = 'europe-west1.gcp',
  nM = `https://api.${Vb}.commercetools.com/${tM}`,
  Yb = `${nM}/customers`,
  aM = ae.object({
    error: ae.string(),
    error_description: ae.string().optional(),
    message: ae.string().optional(),
  }),
  rM = ae.object({ access_token: ae.string(), expires_in: ae.number(), token_type: ae.string() });
async function iM() {
  const n = JT,
    t = eM,
    r = `https://auth.${Vb}.commercetools.com/oauth/token`,
    i = btoa(`${n}:${t}`),
    l = await fetch(r, {
      method: 'POST',
      headers: { Authorization: `Basic ${i}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials',
    }),
    o = await l.json();
  if (!l.ok) {
    const f = aM.safeParse(o);
    throw f.success
      ? new Error(
          `Token fetch failed: ${f.data.error_description ?? f.data.message ?? f.data.error}`
        )
      : new Error('Token fetch failed: Unknown error response');
  }
  const d = rM.safeParse(o);
  if (!d.success) throw new Error('Token fetch failed: Invalid response format');
  return console.log(d.data.access_token), d.data.access_token;
}
const sM = ae.object({ clientId: ae.string(), isPlatformClient: ae.boolean() }),
  lM = ae.object({
    clientId: ae.string().optional(),
    isPlatformClient: ae.boolean(),
    user: ae.object({ typeId: ae.string().optional(), id: ae.string().optional() }).optional(),
  }),
  qb = ae
    .object({
      id: ae.string(),
      version: ae.number(),
      versionModifiedAt: ae.string(),
      lastMessageSequenceNumber: ae.number(),
      createdAt: ae.string(),
      lastModifiedAt: ae.string(),
      lastModifiedBy: lM,
      createdBy: sM,
      email: ae.string(),
      firstName: ae.string(),
      lastName: ae.string(),
      dateOfBirth: ae.string(),
      addresses: ae.array(
        ae.object({
          id: ae.string().optional(),
          firstName: ae.string().optional(),
          lastName: ae.string().optional(),
          streetName: ae.string(),
          postalCode: ae.string(),
          city: ae.string(),
          country: Qh,
        })
      ),
      defaultShippingAddressId: ae.string().optional(),
      defaultBillingAddressId: ae.string().optional(),
      shippingAddressIds: ae.array(ae.string()),
      billingAddressIds: ae.array(ae.string()),
      isEmailVerified: ae.boolean(),
      customerGroupAssignments: ae.array(ae.unknown()),
      custom: ae.object({
        type: ae.object({ typeId: ae.string(), id: ae.string() }),
        fields: ae.object({ petName: ae.string(), petBirthDate: ae.string() }),
      }),
      stores: ae.array(ae.unknown()),
      authenticationMode: ae.string(),
    })
    .passthrough(),
  Zb = ae.object({ customer: qb });
async function uM(n, t) {
  const r = await fetch(Yb, {
      method: 'POST',
      headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(n),
    }),
    i = await r.json();
  if (!r.ok) {
    const o = i.message ?? r.statusText;
    throw new Error(`Sign-up failed: ${o}`);
  }
  const l = Zb.safeParse(i);
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
      formState: { errors: d, isValid: f, isSubmitting: m },
    } = I0({ mode: 'all', resolver: eb(XT) }),
    [g, y] = k.useState(null),
    v = F0({ name: 'sameAsShipping', control: l });
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
          T = w.sameAsShipping ? [x] : [x, N],
          A = {
            ...w,
            addresses: T,
            custom: {
              type: { key: 'customerCustomFields' },
              fields: { petName: w.petName, petBirthDate: w.petBirthDate },
            },
          };
        try {
          y('');
          const j = await iM(),
            R = await uM(A, j);
          console.log('Sign-up successful:', R);
          const q = await IT(R, j, w.defaultAddress ?? !1);
          console.log('Addresses successful:', q), n(w.firstName);
        } catch (j) {
          const R = j instanceof Error ? j.message : 'Something went wrong. Please try again.';
          console.log(j), y(R);
        }
      },
      handleSubmit: r,
      errors: d,
      isValid: f,
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
  var T;
  const [n, t] = k.useState(!1),
    [r, i] = k.useState(''),
    l = Ft(),
    {
      register: o,
      control: d,
      handleValidSubmit: f,
      handleSubmit: m,
      errors: g,
      isValid: y,
      isSubmitting: v,
      sameAsShipping: _,
      submitError: w,
    } = oM((A) => {
      i(A), t(!0);
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
        onSubmit: (A) => {
          A.preventDefault(), m(f)(A);
        },
        children: [
          gM.map(({ title: A, content: j, hint: R }) =>
            S.jsx(Av, { title: A, content: j, register: o, errors: g, control: d, hint: R }, A)
          ),
          S.jsx(wh, {
            type: 'checkbox',
            title: 'Billing address same as shipping',
            id: 'sameAsShipping',
            register: o('sameAsShipping'),
            error: (T = g.sameAsShipping) == null ? void 0 : T.message,
          }),
          _
            ? S.jsx(wh, {
                type: 'checkbox',
                title: 'Set as default address',
                id: 'defaultAddress',
                register: o('defaultAddress'),
              })
            : S.jsx(Av, { title: 'billing address', content: mM, register: o, errors: g }),
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
  const i = Ft();
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
  const n = Ft(),
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
const Bo = {
    'canvas-page': '_canvas-page_19qpy_1',
    'catalog-title': '_catalog-title_19qpy_11',
    'catalog-background': '_catalog-background_19qpy_17',
    'catalog-img': '_catalog-img_19qpy_21',
  },
  SM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function xM() {
  return (
    k.useEffect(() => {
      document.title = 'Catalog | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Bo['canvas-page'],
      children: [
        S.jsx('h2', { className: Bo['catalog-title'], children: 'Catalog page coming soon”' }),
        S.jsx('div', {
          className: Bo['catalog-background'],
          children: S.jsx('img', { className: Bo['catalog-img'], src: SM, alt: 'catalog' }),
        }),
      ],
    })
  );
}
const zl = {
    'canvas-page': '_canvas-page_p5yo0_1',
    'cart-background': '_cart-background_p5yo0_10',
    'empty-img': '_empty-img_p5yo0_16',
    'cart-title-empty': '_cart-title-empty_p5yo0_20',
    'cart-text-empty': '_cart-text-empty_p5yo0_26',
  },
  wM = '/eCommerce/assets/cartEmptyCorgi-Dd1WEbPa.png';
function OM() {
  return (
    k.useEffect(() => {
      document.title = 'Cart | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: zl['canvas-page'],
      children: [
        S.jsx('h2', {
          className: zl['cart-title-empty'],
          children: "It's time to start shopping!",
        }),
        S.jsx('span', {
          className: zl['cart-text-empty'],
          children: 'Fill it with discounts from our popular departments',
        }),
        S.jsx('div', {
          className: zl['cart-background'],
          children: S.jsx('img', { className: zl['empty-img'], src: wM, alt: 'empty' }),
        }),
      ],
    })
  );
}
const Ho = {
    'canvas-page': '_canvas-page_qatng_1',
    'favorites-title': '_favorites-title_qatng_11',
    'favorites-background': '_favorites-background_qatng_17',
    'favorites-img': '_favorites-img_qatng_21',
  },
  EM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function CM() {
  return (
    k.useEffect(() => {
      document.title = 'Favorites | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Ho['canvas-page'],
      children: [
        S.jsx('h2', { className: Ho['favorites-title'], children: 'Favorites page coming soon”' }),
        S.jsx('div', {
          className: Ho['favorites-background'],
          children: S.jsx('img', { className: Ho['favorites-img'], src: EM, alt: 'favorites' }),
        }),
      ],
    })
  );
}
const Vo = {
    'canvas-page': '_canvas-page_q3san_1',
    'orders-title': '_orders-title_q3san_11',
    'orders-background': '_orders-background_q3san_17',
    'orders-img': '_orders-img_q3san_21',
  },
  TM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function MM() {
  return (
    k.useEffect(() => {
      document.title = 'Order | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Vo['canvas-page'],
      children: [
        S.jsx('h2', { className: Vo['orders-title'], children: 'Orders page coming soon”' }),
        S.jsx('div', {
          className: Vo['orders-background'],
          children: S.jsx('img', { className: Vo['orders-img'], src: TM, alt: 'orders' }),
        }),
      ],
    })
  );
}
const NM = '/eCommerce/assets/pageNotFound-CtxT6sMr.png',
  Yo = {
    'main-wrapper-404': '_main-wrapper-404_zmbuz_1',
    'not-found-pages': '_not-found-pages_zmbuz_9',
    'back-home-button': '_back-home-button_zmbuz_16',
  };
function DM() {
  k.useEffect(() => {
    document.title = '404 | Zoo Shop | Pet Supplies';
  }, []);
  const n = Ft();
  function t() {
    n('/');
  }
  return S.jsx('main', {
    className: Yo.main,
    children: S.jsxs('div', {
      className: Yo['main-wrapper-404'],
      children: [
        S.jsx('button', { onClick: t, className: Yo['back-home-button'], children: 'Back Home' }),
        S.jsx('img', { className: Yo['not-found-pages'], src: NM, alt: '404 Page Not Found' }),
      ],
    }),
  });
}
const qo = {
    'canvas-page': '_canvas-page_1xuvd_1',
    'about-title': '_about-title_1xuvd_11',
    'about-background': '_about-background_1xuvd_17',
    'about-img': '_about-img_1xuvd_21',
  },
  AM = '/eCommerce/assets/aboutUs-DLpfez0Q.png';
function kM() {
  return (
    k.useEffect(() => {
      document.title = 'About Us | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: qo['canvas-page'],
      children: [
        S.jsx('h2', { className: qo['about-title'], children: 'About Us page coming soon”' }),
        S.jsx('div', {
          className: qo['about-background'],
          children: S.jsx('img', { className: qo['about-img'], src: AM, alt: 'about' }),
        }),
      ],
    })
  );
}
const Zo = {
    'canvas-page': '_canvas-page_17osm_1',
    'profile-title': '_profile-title_17osm_11',
    'profile-background': '_profile-background_17osm_17',
    'profile-img': '_profile-img_17osm_21',
  },
  RM = '/eCommerce/assets/corgiPaint-CeW47dEF.png';
function jM() {
  return (
    k.useEffect(() => {
      document.title = 'Profile | Zoo Shop | Pet Supplies';
    }, []),
    S.jsxs('div', {
      className: Zo['canvas-page'],
      children: [
        S.jsx('h2', { className: Zo['profile-title'], children: 'Profile page coming soon”' }),
        S.jsx('div', {
          className: Zo['profile-background'],
          children: S.jsx('img', { className: Zo['profile-img'], src: RM, alt: 'profile' }),
        }),
      ],
    })
  );
}
const Er = {
    'canvas-page': '_canvas-page_9k8ys_1',
    'team-title': '_team-title_9k8ys_9',
    'team-background': '_team-background_9k8ys_16',
    'team-img': '_team-img_9k8ys_24',
    'team-img2': '_team-img2_9k8ys_25',
    'team-img3': '_team-img3_9k8ys_26',
    'team-img4': '_team-img4_9k8ys_27',
    'team-img5': '_team-img5_9k8ys_28',
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
      className: Er['canvas-page'],
      children: [
        S.jsx('h2', {
          className: Er['team-title'],
          children: 'Our friendly team of website developers',
        }),
        S.jsxs('div', {
          className: Er['team-background'],
          children: [
            S.jsx('img', { className: Er['team-img'], src: zM, alt: 'team' }),
            S.jsx('img', { className: Er['team-img2'], src: UM, alt: 'team' }),
            S.jsx('img', { className: Er['team-img3'], src: LM, alt: 'team' }),
            S.jsx('img', { className: Er['team-img4'], src: BM, alt: 'team' }),
            S.jsx('img', { className: Er['team-img5'], src: HM, alt: 'team' }),
          ],
        }),
      ],
    })
  );
}
function YM() {
  const n = localStorage.getItem('firstName');
  return S.jsx(Ex, {
    children: S.jsxs(_n, {
      path: '/',
      element: S.jsx(Dw, {}),
      children: [
        S.jsx(_n, { index: !0, element: S.jsx(aO, {}) }),
        S.jsx(_n, { path: 'login', element: n ? S.jsx(ev, { to: '/' }) : S.jsx(ZE, {}) }),
        S.jsx(_n, { path: '/registration', element: n ? S.jsx(ev, { to: '/' }) : S.jsx(_M, {}) }),
        S.jsx(_n, { path: 'catalog', element: S.jsx(xM, {}) }),
        S.jsx(_n, { path: 'cart', element: S.jsx(OM, {}) }),
        S.jsx(_n, { path: 'favorites', element: S.jsx(CM, {}) }),
        S.jsx(_n, { path: 'orders', element: S.jsx(MM, {}) }),
        S.jsx(_n, { path: 'profile', element: S.jsx(jM, {}) }),
        S.jsx(_n, { path: 'about', element: S.jsx(kM, {}) }),
        S.jsx(_n, { path: 'team', element: S.jsx(VM, {}) }),
        S.jsx(_n, { path: '*', element: S.jsx(DM, {}) }),
      ],
    }),
  });
}
var sh = { exports: {} },
  lh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kv;
function qM() {
  if (kv) return lh;
  kv = 1;
  var n = _c();
  function t(m, g) {
    return (m === g && (m !== 0 || 1 / m === 1 / g)) || (m !== m && g !== g);
  }
  var r = typeof Object.is == 'function' ? Object.is : t,
    i = n.useSyncExternalStore,
    l = n.useRef,
    o = n.useEffect,
    d = n.useMemo,
    f = n.useDebugValue;
  return (
    (lh.useSyncExternalStoreWithSelector = function (m, g, y, v, _) {
      var w = l(null);
      if (w.current === null) {
        var x = { hasValue: !1, value: null };
        w.current = x;
      } else x = w.current;
      w = d(
        function () {
          function T(M) {
            if (!A) {
              if (((A = !0), (j = M), (M = v(M)), _ !== void 0 && x.hasValue)) {
                var K = x.value;
                if (_(K, M)) return (R = K);
              }
              return (R = M);
            }
            if (((K = R), r(j, M))) return K;
            var W = v(M);
            return _ !== void 0 && _(K, W) ? ((j = M), K) : ((j = M), (R = W));
          }
          var A = !1,
            j,
            R,
            q = y === void 0 ? null : y;
          return [
            function () {
              return T(g());
            },
            q === null
              ? void 0
              : function () {
                  return T(q());
                },
          ];
        },
        [g, y, v, _]
      );
      var N = i(m, w[0], w[1]);
      return (
        o(
          function () {
            (x.hasValue = !0), (x.value = N);
          },
          [N]
        ),
        f(N),
        N
      );
    }),
    lh
  );
}
var Rv;
function ZM() {
  return Rv || ((Rv = 1), (sh.exports = qM())), sh.exports;
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
var jv = { notify() {}, get: () => [] };
function GM(n, t) {
  let r,
    i = jv,
    l = 0,
    o = !1;
  function d(N) {
    y();
    const T = i.subscribe(N);
    let A = !1;
    return () => {
      A || ((A = !0), T(), v());
    };
  }
  function f() {
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
    l--, r && l === 0 && (r(), (r = void 0), i.clear(), (i = jv));
  }
  function _() {
    o || ((o = !0), y());
  }
  function w() {
    o && ((o = !1), v());
  }
  const x = {
    addNestedSub: d,
    notifyNestedSubs: f,
    handleChangeWrapper: m,
    isSubscribed: g,
    trySubscribe: _,
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
  uh = Symbol.for('react-redux-context'),
  oh = typeof globalThis < 'u' ? globalThis : {};
function JM() {
  if (!k.createContext) return {};
  const n = oh[uh] ?? (oh[uh] = new Map());
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
    d = k.useMemo(() => l.getState(), [l]);
  IM(() => {
    const { subscription: m } = o;
    return (
      (m.onStateChange = m.notifyNestedSubs),
      m.trySubscribe(),
      d !== l.getState() && m.notifyNestedSubs(),
      () => {
        m.tryUnsubscribe(), (m.onStateChange = void 0);
      }
    );
  }, [o, d]);
  const f = r || eN;
  return k.createElement(f.Provider, { value: o }, t);
}
var nN = tN;
function Zt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var aN = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  zv = aN,
  ch = () => Math.random().toString(36).substring(7).split('').join('.'),
  rN = {
    INIT: `@@redux/INIT${ch()}`,
    REPLACE: `@@redux/REPLACE${ch()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ch()}`,
  },
  cc = rN;
function Kh(n) {
  if (typeof n != 'object' || n === null) return !1;
  let t = n;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(n) === t || Object.getPrototypeOf(n) === null;
}
function Fb(n, t, r) {
  if (typeof n != 'function') throw new Error(Zt(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Zt(0));
  if ((typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)), typeof r < 'u')) {
    if (typeof r != 'function') throw new Error(Zt(1));
    return r(Fb)(n, t);
  }
  let i = n,
    l = t,
    o = new Map(),
    d = o,
    f = 0,
    m = !1;
  function g() {
    d === o &&
      ((d = new Map()),
      o.forEach((T, A) => {
        d.set(A, T);
      }));
  }
  function y() {
    if (m) throw new Error(Zt(3));
    return l;
  }
  function v(T) {
    if (typeof T != 'function') throw new Error(Zt(4));
    if (m) throw new Error(Zt(5));
    let A = !0;
    g();
    const j = f++;
    return (
      d.set(j, T),
      function () {
        if (A) {
          if (m) throw new Error(Zt(6));
          (A = !1), g(), d.delete(j), (o = null);
        }
      }
    );
  }
  function _(T) {
    if (!Kh(T)) throw new Error(Zt(7));
    if (typeof T.type > 'u') throw new Error(Zt(8));
    if (typeof T.type != 'string') throw new Error(Zt(17));
    if (m) throw new Error(Zt(9));
    try {
      (m = !0), (l = i(l, T));
    } finally {
      m = !1;
    }
    return (
      (o = d).forEach((j) => {
        j();
      }),
      T
    );
  }
  function w(T) {
    if (typeof T != 'function') throw new Error(Zt(10));
    (i = T), _({ type: cc.REPLACE });
  }
  function x() {
    const T = v;
    return {
      subscribe(A) {
        if (typeof A != 'object' || A === null) throw new Error(Zt(11));
        function j() {
          const q = A;
          q.next && q.next(y());
        }
        return j(), { unsubscribe: T(j) };
      },
      [zv]() {
        return this;
      },
    };
  }
  return (
    _({ type: cc.INIT }), { dispatch: _, subscribe: v, getState: y, replaceReducer: w, [zv]: x }
  );
}
function iN(n) {
  Object.keys(n).forEach((t) => {
    const r = n[t];
    if (typeof r(void 0, { type: cc.INIT }) > 'u') throw new Error(Zt(12));
    if (typeof r(void 0, { type: cc.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(Zt(13));
  });
}
function sN(n) {
  const t = Object.keys(n),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const d = t[o];
    typeof n[d] == 'function' && (r[d] = n[d]);
  }
  const i = Object.keys(r);
  let l;
  try {
    iN(r);
  } catch (o) {
    l = o;
  }
  return function (d = {}, f) {
    if (l) throw l;
    let m = !1;
    const g = {};
    for (let y = 0; y < i.length; y++) {
      const v = i[y],
        _ = r[v],
        w = d[v],
        x = _(w, f);
      if (typeof x > 'u') throw (f && f.type, new Error(Zt(14)));
      (g[v] = x), (m = m || x !== w);
    }
    return (m = m || i.length !== Object.keys(d).length), m ? g : d;
  };
}
function fc(...n) {
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
      throw new Error(Zt(15));
    };
    const d = { getState: l.getState, dispatch: (m, ...g) => o(m, ...g) },
      f = n.map((m) => m(d));
    return (o = fc(...f)(l.dispatch)), { ...l, dispatch: o };
  };
}
function uN(n) {
  return Kh(n) && 'type' in n && typeof n.type == 'string';
}
var Pb = Symbol.for('immer-nothing'),
  Uv = Symbol.for('immer-draftable'),
  On = Symbol.for('immer-state');
function Gn(n, ...t) {
  throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`);
}
var Es = Object.getPrototypeOf;
function yi(n) {
  return !!n && !!n[On];
}
function Ka(n) {
  var t;
  return n
    ? Gb(n) ||
        Array.isArray(n) ||
        !!n[Uv] ||
        !!((t = n.constructor) != null && t[Uv]) ||
        Tc(n) ||
        Mc(n)
    : !1;
}
var oN = Object.prototype.constructor.toString();
function Gb(n) {
  if (!n || typeof n != 'object') return !1;
  const t = Es(n);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object ? !0 : typeof r == 'function' && Function.toString.call(r) === oN;
}
function dc(n, t) {
  Cc(n) === 0
    ? Reflect.ownKeys(n).forEach((r) => {
        t(r, n[r], n);
      })
    : n.forEach((r, i) => t(i, r, n));
}
function Cc(n) {
  const t = n[On];
  return t ? t.type_ : Array.isArray(n) ? 1 : Tc(n) ? 2 : Mc(n) ? 3 : 0;
}
function Oh(n, t) {
  return Cc(n) === 2 ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}
function $b(n, t, r) {
  const i = Cc(n);
  i === 2 ? n.set(t, r) : i === 3 ? n.add(r) : (n[t] = r);
}
function cN(n, t) {
  return n === t ? n !== 0 || 1 / n === 1 / t : n !== n && t !== t;
}
function Tc(n) {
  return n instanceof Map;
}
function Mc(n) {
  return n instanceof Set;
}
function ii(n) {
  return n.copy_ || n.base_;
}
function Eh(n, t) {
  if (Tc(n)) return new Map(n);
  if (Mc(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const r = Gb(n);
  if (t === !0 || (t === 'class_only' && !r)) {
    const i = Object.getOwnPropertyDescriptors(n);
    delete i[On];
    let l = Reflect.ownKeys(i);
    for (let o = 0; o < l.length; o++) {
      const d = l[o],
        f = i[d];
      f.writable === !1 && ((f.writable = !0), (f.configurable = !0)),
        (f.get || f.set) &&
          (i[d] = { configurable: !0, writable: !0, enumerable: f.enumerable, value: n[d] });
    }
    return Object.create(Es(n), i);
  } else {
    const i = Es(n);
    if (i !== null && r) return { ...n };
    const l = Object.create(i);
    return Object.assign(l, n);
  }
}
function Wh(n, t = !1) {
  return (
    Nc(n) ||
      yi(n) ||
      !Ka(n) ||
      (Cc(n) > 1 && (n.set = n.add = n.clear = n.delete = fN),
      Object.freeze(n),
      t && Object.entries(n).forEach(([r, i]) => Wh(i, !0))),
    n
  );
}
function fN() {
  Gn(2);
}
function Nc(n) {
  return Object.isFrozen(n);
}
var dN = {};
function pi(n) {
  const t = dN[n];
  return t || Gn(0, n), t;
}
var uu;
function Qb() {
  return uu;
}
function hN(n, t) {
  return { drafts_: [], parent_: n, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Lv(n, t) {
  t && (pi('Patches'), (n.patches_ = []), (n.inversePatches_ = []), (n.patchListener_ = t));
}
function Ch(n) {
  Th(n), n.drafts_.forEach(mN), (n.drafts_ = null);
}
function Th(n) {
  n === uu && (uu = n.parent_);
}
function Bv(n) {
  return (uu = hN(uu, n));
}
function mN(n) {
  const t = n[On];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Hv(n, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    n !== void 0 && n !== r
      ? (r[On].modified_ && (Ch(t), Gn(4)),
        Ka(n) && ((n = hc(t, n)), t.parent_ || mc(t, n)),
        t.patches_ &&
          pi('Patches').generateReplacementPatches_(r[On].base_, n, t.patches_, t.inversePatches_))
      : (n = hc(t, r, [])),
    Ch(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    n !== Pb ? n : void 0
  );
}
function hc(n, t, r) {
  if (Nc(t)) return t;
  const i = t[On];
  if (!i) return dc(t, (l, o) => Vv(n, i, t, l, o, r)), t;
  if (i.scope_ !== n) return t;
  if (!i.modified_) return mc(n, i.base_, !0), i.base_;
  if (!i.finalized_) {
    (i.finalized_ = !0), i.scope_.unfinalizedDrafts_--;
    const l = i.copy_;
    let o = l,
      d = !1;
    i.type_ === 3 && ((o = new Set(l)), l.clear(), (d = !0)),
      dc(o, (f, m) => Vv(n, i, l, f, m, r, d)),
      mc(n, l, !1),
      r && n.patches_ && pi('Patches').generatePatches_(i, r, n.patches_, n.inversePatches_);
  }
  return i.copy_;
}
function Vv(n, t, r, i, l, o, d) {
  if (yi(l)) {
    const f = o && t && t.type_ !== 3 && !Oh(t.assigned_, i) ? o.concat(i) : void 0,
      m = hc(n, l, f);
    if (($b(r, i, m), yi(m))) n.canAutoFreeze_ = !1;
    else return;
  } else d && r.add(l);
  if (Ka(l) && !Nc(l)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    hc(n, l),
      (!t || !t.scope_.parent_) &&
        typeof i != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, i) &&
        mc(n, l);
  }
}
function mc(n, t, r = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Wh(t, r);
}
function gN(n, t) {
  const r = Array.isArray(n),
    i = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : Qb(),
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
    o = Xh;
  r && ((l = [i]), (o = ou));
  const { revoke: d, proxy: f } = Proxy.revocable(l, o);
  return (i.draft_ = f), (i.revoke_ = d), f;
}
var Xh = {
    get(n, t) {
      if (t === On) return n;
      const r = ii(n);
      if (!Oh(r, t)) return yN(n, r, t);
      const i = r[t];
      return n.finalized_ || !Ka(i)
        ? i
        : i === fh(n.base_, t)
          ? (dh(n), (n.copy_[t] = Nh(i, n)))
          : i;
    },
    has(n, t) {
      return t in ii(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(ii(n));
    },
    set(n, t, r) {
      const i = Kb(ii(n), t);
      if (i != null && i.set) return i.set.call(n.draft_, r), !0;
      if (!n.modified_) {
        const l = fh(ii(n), t),
          o = l == null ? void 0 : l[On];
        if (o && o.base_ === r) return (n.copy_[t] = r), (n.assigned_[t] = !1), !0;
        if (cN(r, l) && (r !== void 0 || Oh(n.base_, t))) return !0;
        dh(n), Mh(n);
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
        fh(n.base_, t) !== void 0 || t in n.base_
          ? ((n.assigned_[t] = !1), dh(n), Mh(n))
          : delete n.assigned_[t],
        n.copy_ && delete n.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(n, t) {
      const r = ii(n),
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
      Gn(11);
    },
    getPrototypeOf(n) {
      return Es(n.base_);
    },
    setPrototypeOf() {
      Gn(12);
    },
  },
  ou = {};
dc(Xh, (n, t) => {
  ou[n] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
ou.deleteProperty = function (n, t) {
  return ou.set.call(this, n, t, void 0);
};
ou.set = function (n, t, r) {
  return Xh.set.call(this, n[0], t, r, n[0]);
};
function fh(n, t) {
  const r = n[On];
  return (r ? ii(r) : n)[t];
}
function yN(n, t, r) {
  var l;
  const i = Kb(t, r);
  return i ? ('value' in i ? i.value : (l = i.get) == null ? void 0 : l.call(n.draft_)) : void 0;
}
function Kb(n, t) {
  if (!(t in n)) return;
  let r = Es(n);
  for (; r; ) {
    const i = Object.getOwnPropertyDescriptor(r, t);
    if (i) return i;
    r = Es(r);
  }
}
function Mh(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && Mh(n.parent_));
}
function dh(n) {
  n.copy_ || (n.copy_ = Eh(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var pN = class {
  constructor(n) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, i) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const o = r;
          r = t;
          const d = this;
          return function (m = o, ...g) {
            return d.produce(m, (y) => r.call(this, y, ...g));
          };
        }
        typeof r != 'function' && Gn(6), i !== void 0 && typeof i != 'function' && Gn(7);
        let l;
        if (Ka(t)) {
          const o = Bv(this),
            d = Nh(t, void 0);
          let f = !0;
          try {
            (l = r(d)), (f = !1);
          } finally {
            f ? Ch(o) : Th(o);
          }
          return Lv(o, i), Hv(l, o);
        } else if (!t || typeof t != 'object') {
          if (
            ((l = r(t)),
            l === void 0 && (l = t),
            l === Pb && (l = void 0),
            this.autoFreeze_ && Wh(l, !0),
            i)
          ) {
            const o = [],
              d = [];
            pi('Patches').generateReplacementPatches_(t, l, o, d), i(o, d);
          }
          return l;
        } else Gn(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (d, ...f) => this.produceWithPatches(d, (m) => t(m, ...f));
        let i, l;
        return [
          this.produce(t, r, (d, f) => {
            (i = d), (l = f);
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
    Ka(n) || Gn(8), yi(n) && (n = vN(n));
    const t = Bv(this),
      r = Nh(n, void 0);
    return (r[On].isManual_ = !0), Th(t), r;
  }
  finishDraft(n, t) {
    const r = n && n[On];
    (!r || !r.isManual_) && Gn(9);
    const { scope_: i } = r;
    return Lv(i, t), Hv(void 0, i);
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
    const i = pi('Patches').applyPatches_;
    return yi(n) ? i(n, t) : this.produce(n, (l) => i(l, t));
  }
};
function Nh(n, t) {
  const r = Tc(n) ? pi('MapSet').proxyMap_(n, t) : Mc(n) ? pi('MapSet').proxySet_(n, t) : gN(n, t);
  return (t ? t.scope_ : Qb()).drafts_.push(r), r;
}
function vN(n) {
  return yi(n) || Gn(10, n), Wb(n);
}
function Wb(n) {
  if (!Ka(n) || Nc(n)) return n;
  const t = n[On];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = Eh(n, t.scope_.immer_.useStrictShallowCopy_));
  } else r = Eh(n, !0);
  return (
    dc(r, (i, l) => {
      $b(r, i, Wb(l));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var En = new pN(),
  Xb = En.produce;
En.produceWithPatches.bind(En);
En.setAutoFreeze.bind(En);
En.setUseStrictShallowCopy.bind(En);
En.applyPatches.bind(En);
En.createDraft.bind(En);
En.finishDraft.bind(En);
function Ib(n) {
  return ({ dispatch: r, getState: i }) =>
    (l) =>
    (o) =>
      typeof o == 'function' ? o(r, i, n) : l(o);
}
var bN = Ib(),
  _N = Ib,
  SN =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? fc : fc.apply(null, arguments);
        };
function Yv(n, t) {
  function r(...i) {
    if (t) {
      let l = t(...i);
      if (!l) throw new Error(Ga(0));
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
var Jb = class Vl extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Vl.prototype);
  }
  static get [Symbol.species]() {
    return Vl;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Vl(...t[0].concat(this))
      : new Vl(...t.concat(this));
  }
};
function qv(n) {
  return Ka(n) ? Xb(n, () => {}) : n;
}
function Fo(n, t, r) {
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
      let d = new Jb();
      return r && (xN(r) ? d.push(bN) : d.push(_N(r.extraArgument))), d;
    },
  ON = 'RTK_autoBatch',
  Zv = (n) => (t) => {
    setTimeout(t, n);
  },
  EN =
    (n = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const i = t(...r);
      let l = !0,
        o = !1,
        d = !1;
      const f = new Set(),
        m =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Zv(10)
              : n.type === 'callback'
                ? n.queueNotification
                : Zv(n.timeout),
        g = () => {
          (d = !1), o && ((o = !1), f.forEach((y) => y()));
        };
      return Object.assign({}, i, {
        subscribe(y) {
          const v = () => l && y(),
            _ = i.subscribe(v);
          return (
            f.add(y),
            () => {
              _(), f.delete(y);
            }
          );
        },
        dispatch(y) {
          var v;
          try {
            return (
              (l = !((v = y == null ? void 0 : y.meta) != null && v[ON])),
              (o = !l),
              o && (d || ((d = !0), m(g))),
              i.dispatch(y)
            );
          } finally {
            l = !0;
          }
        },
      });
    },
  CN = (n) =>
    function (r) {
      const { autoBatch: i = !0 } = r ?? {};
      let l = new Jb(n);
      return i && l.push(EN(typeof i == 'object' ? i : void 0)), l;
    };
function TN(n) {
  const t = wN(),
    {
      reducer: r = void 0,
      middleware: i,
      devTools: l = !0,
      preloadedState: o = void 0,
      enhancers: d = void 0,
    } = n || {};
  let f;
  if (typeof r == 'function') f = r;
  else if (Kh(r)) f = sN(r);
  else throw new Error(Ga(1));
  let m;
  typeof i == 'function' ? (m = i(t)) : (m = t());
  let g = fc;
  l && (g = SN({ trace: !1, ...(typeof l == 'object' && l) }));
  const y = lN(...m),
    v = CN(y);
  let _ = typeof d == 'function' ? d(v) : v();
  const w = g(..._);
  return Fb(f, o, w);
}
function e_(n) {
  const t = {},
    r = [];
  let i;
  const l = {
    addCase(o, d) {
      const f = typeof o == 'string' ? o : o.type;
      if (!f) throw new Error(Ga(28));
      if (f in t) throw new Error(Ga(29));
      return (t[f] = d), l;
    },
    addMatcher(o, d) {
      return r.push({ matcher: o, reducer: d }), l;
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
  let [r, i, l] = e_(t),
    o;
  if (MN(n)) o = () => qv(n());
  else {
    const f = qv(n);
    o = () => f;
  }
  function d(f = o(), m) {
    let g = [r[m.type], ...i.filter(({ matcher: y }) => y(m)).map(({ reducer: y }) => y)];
    return (
      g.filter((y) => !!y).length === 0 && (g = [l]),
      g.reduce((y, v) => {
        if (v)
          if (yi(y)) {
            const w = v(y, m);
            return w === void 0 ? y : w;
          } else {
            if (Ka(y)) return Xb(y, (_) => v(_, m));
            {
              const _ = v(y, m);
              if (_ === void 0) {
                if (y === null) return y;
                throw Error('A case reducer on a non-draftable value must not return undefined');
              }
              return _;
            }
          }
        return y;
      }, f)
    );
  }
  return (d.getInitialState = o), d;
}
var DN = Symbol.for('rtk-slice-createasyncthunk');
function AN(n, t) {
  return `${n}/${t}`;
}
function kN({ creators: n } = {}) {
  var r;
  const t = (r = n == null ? void 0 : n.asyncThunk) == null ? void 0 : r[DN];
  return function (l) {
    const { name: o, reducerPath: d = o } = l;
    if (!o) throw new Error(Ga(11));
    const f = (typeof l.reducers == 'function' ? l.reducers(zN()) : l.reducers) || {},
      m = Object.keys(f),
      g = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      y = {
        addCase(q, M) {
          const K = typeof q == 'string' ? q : q.type;
          if (!K) throw new Error(Ga(12));
          if (K in g.sliceCaseReducersByType) throw new Error(Ga(13));
          return (g.sliceCaseReducersByType[K] = M), y;
        },
        addMatcher(q, M) {
          return g.sliceMatchers.push({ matcher: q, reducer: M }), y;
        },
        exposeAction(q, M) {
          return (g.actionCreators[q] = M), y;
        },
        exposeCaseReducer(q, M) {
          return (g.sliceCaseReducersByName[q] = M), y;
        },
      };
    m.forEach((q) => {
      const M = f[q],
        K = { reducerName: q, type: AN(o, q), createNotation: typeof l.reducers == 'function' };
      LN(M) ? HN(K, M, y, t) : UN(K, M, y);
    });
    function v() {
      const [q = {}, M = [], K = void 0] =
          typeof l.extraReducers == 'function' ? e_(l.extraReducers) : [l.extraReducers],
        W = { ...q, ...g.sliceCaseReducersByType };
      return NN(l.initialState, (oe) => {
        for (let X in W) oe.addCase(X, W[X]);
        for (let X of g.sliceMatchers) oe.addMatcher(X.matcher, X.reducer);
        for (let X of M) oe.addMatcher(X.matcher, X.reducer);
        K && oe.addDefaultCase(K);
      });
    }
    const _ = (q) => q,
      w = new Map(),
      x = new WeakMap();
    let N;
    function T(q, M) {
      return N || (N = v()), N(q, M);
    }
    function A() {
      return N || (N = v()), N.getInitialState();
    }
    function j(q, M = !1) {
      function K(oe) {
        let X = oe[q];
        return typeof X > 'u' && M && (X = Fo(x, K, A)), X;
      }
      function W(oe = _) {
        const X = Fo(w, M, () => new WeakMap());
        return Fo(X, oe, () => {
          const ye = {};
          for (const [ke, de] of Object.entries(l.selectors ?? {}))
            ye[ke] = RN(de, oe, () => Fo(x, oe, A), M);
          return ye;
        });
      }
      return {
        reducerPath: q,
        getSelectors: W,
        get selectors() {
          return W(K);
        },
        selectSlice: K,
      };
    }
    const R = {
      name: o,
      reducer: T,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: A,
      ...j(d),
      injectInto(q, { reducerPath: M, ...K } = {}) {
        const W = M ?? d;
        return q.inject({ reducerPath: W, reducer: T }, K), { ...R, ...j(W, !0) };
      },
    };
    return R;
  };
}
function RN(n, t, r, i) {
  function l(o, ...d) {
    let f = t(o);
    return typeof f > 'u' && i && (f = r()), n(f, ...d);
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
  let o, d;
  if ('reducer' in i) {
    if (r && !BN(i)) throw new Error(Ga(17));
    (o = i.reducer), (d = i.prepare);
  } else o = i;
  l.addCase(n, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, d ? Yv(n, d) : Yv(n));
}
function LN(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function BN(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function HN({ type: n, reducerName: t }, r, i, l) {
  if (!l) throw new Error(Ga(18));
  const { payloadCreator: o, fulfilled: d, pending: f, rejected: m, settled: g, options: y } = r,
    v = l(n, o, y);
  i.exposeAction(t, v),
    d && i.addCase(v.fulfilled, d),
    f && i.addCase(v.pending, f),
    m && i.addCase(v.rejected, m),
    g && i.addMatcher(v.settled, g),
    i.exposeCaseReducer(t, {
      fulfilled: d || Po,
      pending: f || Po,
      rejected: m || Po,
      settled: g || Po,
    });
}
function Po() {}
function Ga(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const VN = { value: 0 },
  t_ = jN({
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
  { increment: $D, decrement: QD, incrementByAmount: KD } = t_.actions,
  YN = t_.reducer,
  qN = TN({ reducer: { counter: YN } });
var Dc = class {
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
  Ac = typeof window > 'u' || 'Deno' in globalThis;
function Yn() {}
function ZN(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function FN(n) {
  return typeof n == 'number' && n >= 0 && n !== 1 / 0;
}
function PN(n, t) {
  return Math.max(n + (t || 0) - Date.now(), 0);
}
function Fv(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function GN(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function Pv(n, t) {
  const { type: r = 'all', exact: i, fetchStatus: l, predicate: o, queryKey: d, stale: f } = n;
  if (d) {
    if (i) {
      if (t.queryHash !== Ih(d, t.options)) return !1;
    } else if (!fu(t.queryKey, d)) return !1;
  }
  if (r !== 'all') {
    const m = t.isActive();
    if ((r === 'active' && !m) || (r === 'inactive' && m)) return !1;
  }
  return !(
    (typeof f == 'boolean' && t.isStale() !== f) ||
    (l && l !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Gv(n, t) {
  const { exact: r, status: i, predicate: l, mutationKey: o } = n;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (cu(t.options.mutationKey) !== cu(o)) return !1;
    } else if (!fu(t.options.mutationKey, o)) return !1;
  }
  return !((i && t.state.status !== i) || (l && !l(t)));
}
function Ih(n, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || cu)(n);
}
function cu(n) {
  return JSON.stringify(n, (t, r) =>
    Dh(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, l) => ((i[l] = r[l]), i), {})
      : r
  );
}
function fu(n, t) {
  return n === t
    ? !0
    : typeof n != typeof t
      ? !1
      : n && t && typeof n == 'object' && typeof t == 'object'
        ? Object.keys(t).every((r) => fu(n[r], t[r]))
        : !1;
}
function n_(n, t) {
  if (n === t) return n;
  const r = $v(n) && $v(t);
  if (r || (Dh(n) && Dh(t))) {
    const i = r ? n : Object.keys(n),
      l = i.length,
      o = r ? t : Object.keys(t),
      d = o.length,
      f = r ? [] : {};
    let m = 0;
    for (let g = 0; g < d; g++) {
      const y = r ? g : o[g];
      ((!r && i.includes(y)) || r) && n[y] === void 0 && t[y] === void 0
        ? ((f[y] = void 0), m++)
        : ((f[y] = n_(n[y], t[y])), f[y] === n[y] && n[y] !== void 0 && m++);
    }
    return l === d && m === l ? n : f;
  }
  return t;
}
function $v(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Dh(n) {
  if (!Qv(n)) return !1;
  const t = n.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Qv(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function Qv(n) {
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
      ? n_(n, t)
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
var Jh = Symbol();
function a_(n, t) {
  return !n.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !n.queryFn || n.queryFn === Jh
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
var li,
  Mr,
  ds,
  d0,
  XN =
    ((d0 = class extends Dc {
      constructor() {
        super();
        Ke(this, li);
        Ke(this, Mr);
        Ke(this, ds);
        Re(this, ds, (t) => {
          if (!Ac && window.addEventListener) {
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
        $(this, Mr) || this.setEventListener($(this, ds));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = $(this, Mr)) == null || t.call(this), Re(this, Mr, void 0));
      }
      setEventListener(t) {
        var r;
        Re(this, ds, t),
          (r = $(this, Mr)) == null || r.call(this),
          Re(
            this,
            Mr,
            t((i) => {
              typeof i == 'boolean' ? this.setFocused(i) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        $(this, li) !== t && (Re(this, li, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof $(this, li) == 'boolean'
          ? $(this, li)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (li = new WeakMap()),
    (Mr = new WeakMap()),
    (ds = new WeakMap()),
    d0),
  r_ = new XN(),
  hs,
  Nr,
  ms,
  h0,
  IN =
    ((h0 = class extends Dc {
      constructor() {
        super();
        Ke(this, hs, !0);
        Ke(this, Nr);
        Ke(this, ms);
        Re(this, ms, (t) => {
          if (!Ac && window.addEventListener) {
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
        $(this, Nr) || this.setEventListener($(this, ms));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = $(this, Nr)) == null || t.call(this), Re(this, Nr, void 0));
      }
      setEventListener(t) {
        var r;
        Re(this, ms, t),
          (r = $(this, Nr)) == null || r.call(this),
          Re(this, Nr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        $(this, hs) !== t &&
          (Re(this, hs, t),
          this.listeners.forEach((i) => {
            i(t);
          }));
      }
      isOnline() {
        return $(this, hs);
      }
    }),
    (hs = new WeakMap()),
    (Nr = new WeakMap()),
    (ms = new WeakMap()),
    h0),
  gc = new IN();
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
function i_(n) {
  return (n ?? 'online') === 'online' ? gc.isOnline() : !0;
}
var s_ = class extends Error {
  constructor(n) {
    super('CancelledError'),
      (this.revert = n == null ? void 0 : n.revert),
      (this.silent = n == null ? void 0 : n.silent);
  }
};
function hh(n) {
  return n instanceof s_;
}
function l_(n) {
  let t = !1,
    r = 0,
    i = !1,
    l;
  const o = JN(),
    d = (N) => {
      var T;
      i || (_(new s_(N)), (T = n.abort) == null || T.call(n));
    },
    f = () => {
      t = !0;
    },
    m = () => {
      t = !1;
    },
    g = () => r_.isFocused() && (n.networkMode === 'always' || gc.isOnline()) && n.canRun(),
    y = () => i_(n.networkMode) && n.canRun(),
    v = (N) => {
      var T;
      i || ((i = !0), (T = n.onSuccess) == null || T.call(n, N), l == null || l(), o.resolve(N));
    },
    _ = (N) => {
      var T;
      i || ((i = !0), (T = n.onError) == null || T.call(n, N), l == null || l(), o.reject(N));
    },
    w = () =>
      new Promise((N) => {
        var T;
        (l = (A) => {
          (i || g()) && N(A);
        }),
          (T = n.onPause) == null || T.call(n);
      }).then(() => {
        var N;
        (l = void 0), i || (N = n.onContinue) == null || N.call(n);
      }),
    x = () => {
      if (i) return;
      let N;
      const T = r === 0 ? n.initialPromise : void 0;
      try {
        N = T ?? n.fn();
      } catch (A) {
        N = Promise.reject(A);
      }
      Promise.resolve(N)
        .then(v)
        .catch((A) => {
          var K;
          if (i) return;
          const j = n.retry ?? (Ac ? 0 : 3),
            R = n.retryDelay ?? eD,
            q = typeof R == 'function' ? R(r, A) : R,
            M = j === !0 || (typeof j == 'number' && r < j) || (typeof j == 'function' && j(r, A));
          if (t || !M) {
            _(A);
            return;
          }
          r++,
            (K = n.onFail) == null || K.call(n, r, A),
            $N(q)
              .then(() => (g() ? void 0 : w()))
              .then(() => {
                t ? _(A) : x();
              });
        });
    };
  return {
    promise: o,
    cancel: d,
    continue: () => (l == null || l(), o),
    cancelRetry: f,
    continueRetry: m,
    canStart: y,
    start: () => (y() ? x() : w().then(x), o),
  };
}
var tD = (n) => setTimeout(n, 0);
function nD() {
  let n = [],
    t = 0,
    r = (f) => {
      f();
    },
    i = (f) => {
      f();
    },
    l = tD;
  const o = (f) => {
      t
        ? n.push(f)
        : l(() => {
            r(f);
          });
    },
    d = () => {
      const f = n;
      (n = []),
        f.length &&
          l(() => {
            i(() => {
              f.forEach((m) => {
                r(m);
              });
            });
          });
    };
  return {
    batch: (f) => {
      let m;
      t++;
      try {
        m = f();
      } finally {
        t--, t || d();
      }
      return m;
    },
    batchCalls:
      (f) =>
      (...m) => {
        o(() => {
          f(...m);
        });
      },
    schedule: o,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      i = f;
    },
    setScheduler: (f) => {
      l = f;
    },
  };
}
var nn = nD(),
  ui,
  m0,
  u_ =
    ((m0 = class {
      constructor() {
        Ke(this, ui);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          FN(this.gcTime) &&
            Re(
              this,
              ui,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (Ac ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        $(this, ui) && (clearTimeout($(this, ui)), Re(this, ui, void 0));
      }
    }),
    (ui = new WeakMap()),
    m0),
  gs,
  ys,
  Un,
  oi,
  Qt,
  hu,
  ci,
  qn,
  Va,
  g0,
  aD =
    ((g0 = class extends u_ {
      constructor(t) {
        super();
        Ke(this, qn);
        Ke(this, gs);
        Ke(this, ys);
        Ke(this, Un);
        Ke(this, oi);
        Ke(this, Qt);
        Ke(this, hu);
        Ke(this, ci);
        Re(this, ci, !1),
          Re(this, hu, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Re(this, oi, t.client),
          Re(this, Un, $(this, oi).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Re(this, gs, iD(this.options)),
          (this.state = t.state ?? $(this, gs)),
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
        (this.options = { ...$(this, hu), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && $(this, Un).remove(this);
      }
      setData(t, r) {
        const i = QN(this.state.data, t, this.options);
        return (
          Gt(this, qn, Va).call(this, {
            data: i,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          i
        );
      }
      setState(t, r) {
        Gt(this, qn, Va).call(this, { type: 'setState', state: t, setStateOptions: r });
      }
      cancel(t) {
        var i, l;
        const r = (i = $(this, Qt)) == null ? void 0 : i.promise;
        return (
          (l = $(this, Qt)) == null || l.cancel(t), r ? r.then(Yn).catch(Yn) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState($(this, gs));
      }
      isActive() {
        return this.observers.some((t) => GN(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Jh ||
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
          $(this, Un).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            ($(this, Qt) &&
              ($(this, ci) ? $(this, Qt).cancel({ revert: !0 }) : $(this, Qt).cancelRetry()),
            this.scheduleGc()),
          $(this, Un).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || Gt(this, qn, Va).call(this, { type: 'invalidate' });
      }
      fetch(t, r) {
        var m, g, y;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if ($(this, Qt)) return $(this, Qt).continueRetry(), $(this, Qt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const v = this.observers.find((_) => _.options.queryFn);
          v && this.setOptions(v.options);
        }
        const i = new AbortController(),
          l = (v) => {
            Object.defineProperty(v, 'signal', {
              enumerable: !0,
              get: () => (Re(this, ci, !0), i.signal),
            });
          },
          o = () => {
            const v = a_(this.options, r),
              _ = { client: $(this, oi), queryKey: this.queryKey, meta: this.meta };
            return (
              l(_),
              Re(this, ci, !1),
              this.options.persister ? this.options.persister(v, _, this) : v(_)
            );
          },
          d = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: $(this, oi),
            state: this.state,
            fetchFn: o,
          };
        l(d),
          (m = this.options.behavior) == null || m.onFetch(d, this),
          Re(this, ys, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) &&
            Gt(this, qn, Va).call(this, {
              type: 'fetch',
              meta: (y = d.fetchOptions) == null ? void 0 : y.meta,
            });
        const f = (v) => {
          var _, w, x, N;
          (hh(v) && v.silent) || Gt(this, qn, Va).call(this, { type: 'error', error: v }),
            hh(v) ||
              ((w = (_ = $(this, Un).config).onError) == null || w.call(_, v, this),
              (N = (x = $(this, Un).config).onSettled) == null ||
                N.call(x, this.state.data, v, this)),
            this.scheduleGc();
        };
        return (
          Re(
            this,
            Qt,
            l_({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: d.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (v) => {
                var _, w, x, N;
                if (v === void 0) {
                  f(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(v);
                } catch (T) {
                  f(T);
                  return;
                }
                (w = (_ = $(this, Un).config).onSuccess) == null || w.call(_, v, this),
                  (N = (x = $(this, Un).config).onSettled) == null ||
                    N.call(x, v, this.state.error, this),
                  this.scheduleGc();
              },
              onError: f,
              onFail: (v, _) => {
                Gt(this, qn, Va).call(this, { type: 'failed', failureCount: v, error: _ });
              },
              onPause: () => {
                Gt(this, qn, Va).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Gt(this, qn, Va).call(this, { type: 'continue' });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
              canRun: () => !0,
            })
          ),
          $(this, Qt).start()
        );
      }
    }),
    (gs = new WeakMap()),
    (ys = new WeakMap()),
    (Un = new WeakMap()),
    (oi = new WeakMap()),
    (Qt = new WeakMap()),
    (hu = new WeakMap()),
    (ci = new WeakMap()),
    (qn = new WeakSet()),
    (Va = function (t) {
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
            return hh(l) && l.revert && $(this, ys)
              ? { ...$(this, ys), fetchStatus: 'idle' }
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
            $(this, Un).notify({ query: this, type: 'updated', action: t });
        });
    }),
    g0);
function rD(n, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: i_(t.networkMode) ? 'fetching' : 'paused',
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
var ca,
  y0,
  sD =
    ((y0 = class extends Dc {
      constructor(t = {}) {
        super();
        Ke(this, ca);
        (this.config = t), Re(this, ca, new Map());
      }
      build(t, r, i) {
        const l = r.queryKey,
          o = r.queryHash ?? Ih(l, r);
        let d = this.get(o);
        return (
          d ||
            ((d = new aD({
              client: t,
              queryKey: l,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: i,
              defaultOptions: t.getQueryDefaults(l),
            })),
            this.add(d)),
          d
        );
      }
      add(t) {
        $(this, ca).has(t.queryHash) ||
          ($(this, ca).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const r = $(this, ca).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && $(this, ca).delete(t.queryHash),
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
        return $(this, ca).get(t);
      }
      getAll() {
        return [...$(this, ca).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Pv(r, i));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((i) => Pv(t, i)) : r;
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
    (ca = new WeakMap()),
    y0),
  fa,
  Jt,
  fi,
  da,
  Cr,
  p0,
  lD =
    ((p0 = class extends u_ {
      constructor(t) {
        super();
        Ke(this, da);
        Ke(this, fa);
        Ke(this, Jt);
        Ke(this, fi);
        (this.mutationId = t.mutationId),
          Re(this, Jt, t.mutationCache),
          Re(this, fa, []),
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
        $(this, fa).includes(t) ||
          ($(this, fa).push(t),
          this.clearGcTimeout(),
          $(this, Jt).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        Re(
          this,
          fa,
          $(this, fa).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          $(this, Jt).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        $(this, fa).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : $(this, Jt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = $(this, fi)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, d, f, m, g, y, v, _, w, x, N, T, A, j, R, q, M, K, W, oe;
        const r = () => {
          Gt(this, da, Cr).call(this, { type: 'continue' });
        };
        Re(
          this,
          fi,
          l_({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (X, ye) => {
              Gt(this, da, Cr).call(this, { type: 'failed', failureCount: X, error: ye });
            },
            onPause: () => {
              Gt(this, da, Cr).call(this, { type: 'pause' });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => $(this, Jt).canRun(this),
          })
        );
        const i = this.state.status === 'pending',
          l = !$(this, fi).canStart();
        try {
          if (i) r();
          else {
            Gt(this, da, Cr).call(this, { type: 'pending', variables: t, isPaused: l }),
              await ((d = (o = $(this, Jt).config).onMutate) == null ? void 0 : d.call(o, t, this));
            const ye = await ((m = (f = this.options).onMutate) == null ? void 0 : m.call(f, t));
            ye !== this.state.context &&
              Gt(this, da, Cr).call(this, {
                type: 'pending',
                context: ye,
                variables: t,
                isPaused: l,
              });
          }
          const X = await $(this, fi).start();
          return (
            await ((y = (g = $(this, Jt).config).onSuccess) == null
              ? void 0
              : y.call(g, X, t, this.state.context, this)),
            await ((_ = (v = this.options).onSuccess) == null
              ? void 0
              : _.call(v, X, t, this.state.context)),
            await ((x = (w = $(this, Jt).config).onSettled) == null
              ? void 0
              : x.call(w, X, null, this.state.variables, this.state.context, this)),
            await ((T = (N = this.options).onSettled) == null
              ? void 0
              : T.call(N, X, null, t, this.state.context)),
            Gt(this, da, Cr).call(this, { type: 'success', data: X }),
            X
          );
        } catch (X) {
          try {
            throw (
              (await ((j = (A = $(this, Jt).config).onError) == null
                ? void 0
                : j.call(A, X, t, this.state.context, this)),
              await ((q = (R = this.options).onError) == null
                ? void 0
                : q.call(R, X, t, this.state.context)),
              await ((K = (M = $(this, Jt).config).onSettled) == null
                ? void 0
                : K.call(M, void 0, X, this.state.variables, this.state.context, this)),
              await ((oe = (W = this.options).onSettled) == null
                ? void 0
                : oe.call(W, void 0, X, t, this.state.context)),
              X)
            );
          } finally {
            Gt(this, da, Cr).call(this, { type: 'error', error: X });
          }
        } finally {
          $(this, Jt).runNext(this);
        }
      }
    }),
    (fa = new WeakMap()),
    (Jt = new WeakMap()),
    (fi = new WeakMap()),
    (da = new WeakSet()),
    (Cr = function (t) {
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
          $(this, fa).forEach((i) => {
            i.onMutationUpdate(t);
          }),
            $(this, Jt).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    p0);
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
var qa,
  Zn,
  mu,
  v0,
  oD =
    ((v0 = class extends Dc {
      constructor(t = {}) {
        super();
        Ke(this, qa);
        Ke(this, Zn);
        Ke(this, mu);
        (this.config = t), Re(this, qa, new Set()), Re(this, Zn, new Map()), Re(this, mu, 0);
      }
      build(t, r, i) {
        const l = new lD({
          mutationCache: this,
          mutationId: ++zo(this, mu)._,
          options: t.defaultMutationOptions(r),
          state: i,
        });
        return this.add(l), l;
      }
      add(t) {
        $(this, qa).add(t);
        const r = Go(t);
        if (typeof r == 'string') {
          const i = $(this, Zn).get(r);
          i ? i.push(t) : $(this, Zn).set(r, [t]);
        }
        this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        if ($(this, qa).delete(t)) {
          const r = Go(t);
          if (typeof r == 'string') {
            const i = $(this, Zn).get(r);
            if (i)
              if (i.length > 1) {
                const l = i.indexOf(t);
                l !== -1 && i.splice(l, 1);
              } else i[0] === t && $(this, Zn).delete(r);
          }
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        const r = Go(t);
        if (typeof r == 'string') {
          const i = $(this, Zn).get(r),
            l = i == null ? void 0 : i.find((o) => o.state.status === 'pending');
          return !l || l === t;
        } else return !0;
      }
      runNext(t) {
        var i;
        const r = Go(t);
        if (typeof r == 'string') {
          const l =
            (i = $(this, Zn).get(r)) == null ? void 0 : i.find((o) => o !== t && o.state.isPaused);
          return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        nn.batch(() => {
          $(this, qa).forEach((t) => {
            this.notify({ type: 'removed', mutation: t });
          }),
            $(this, qa).clear(),
            $(this, Zn).clear();
        });
      }
      getAll() {
        return Array.from($(this, qa));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Gv(r, i));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Gv(t, r));
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
        return nn.batch(() => Promise.all(t.map((r) => r.continue().catch(Yn))));
      }
    }),
    (qa = new WeakMap()),
    (Zn = new WeakMap()),
    (mu = new WeakMap()),
    v0);
function Go(n) {
  var t;
  return (t = n.options.scope) == null ? void 0 : t.id;
}
function Kv(n) {
  return {
    onFetch: (t, r) => {
      var y, v, _, w, x;
      const i = t.options,
        l =
          (_ =
            (v = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : v.fetchMore) ==
          null
            ? void 0
            : _.direction,
        o = ((w = t.state.data) == null ? void 0 : w.pages) || [],
        d = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let f = { pages: [], pageParams: [] },
        m = 0;
      const g = async () => {
        let N = !1;
        const T = (R) => {
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
          A = a_(t.options, t.fetchOptions),
          j = async (R, q, M) => {
            if (N) return Promise.reject();
            if (q == null && R.pages.length) return Promise.resolve(R);
            const K = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: q,
              direction: M ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            T(K);
            const W = await A(K),
              { maxPages: oe } = t.options,
              X = M ? WN : KN;
            return { pages: X(R.pages, W, oe), pageParams: X(R.pageParams, q, oe) };
          };
        if (l && o.length) {
          const R = l === 'backward',
            q = R ? cD : Wv,
            M = { pages: o, pageParams: d },
            K = q(i, M);
          f = await j(M, K, R);
        } else {
          const R = n ?? o.length;
          do {
            const q = m === 0 ? (d[0] ?? i.initialPageParam) : Wv(i, f);
            if (m > 0 && q == null) break;
            (f = await j(f, q)), m++;
          } while (m < R);
        }
        return f;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var N, T;
            return (T = (N = t.options).persister) == null
              ? void 0
              : T.call(
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
function Wv(n, { pages: t, pageParams: r }) {
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
var bt,
  Dr,
  Ar,
  ps,
  vs,
  kr,
  bs,
  _s,
  b0,
  fD =
    ((b0 = class {
      constructor(n = {}) {
        Ke(this, bt);
        Ke(this, Dr);
        Ke(this, Ar);
        Ke(this, ps);
        Ke(this, vs);
        Ke(this, kr);
        Ke(this, bs);
        Ke(this, _s);
        Re(this, bt, n.queryCache || new sD()),
          Re(this, Dr, n.mutationCache || new oD()),
          Re(this, Ar, n.defaultOptions || {}),
          Re(this, ps, new Map()),
          Re(this, vs, new Map()),
          Re(this, kr, 0);
      }
      mount() {
        zo(this, kr)._++,
          $(this, kr) === 1 &&
            (Re(
              this,
              bs,
              r_.subscribe(async (n) => {
                n && (await this.resumePausedMutations(), $(this, bt).onFocus());
              })
            ),
            Re(
              this,
              _s,
              gc.subscribe(async (n) => {
                n && (await this.resumePausedMutations(), $(this, bt).onOnline());
              })
            ));
      }
      unmount() {
        var n, t;
        zo(this, kr)._--,
          $(this, kr) === 0 &&
            ((n = $(this, bs)) == null || n.call(this),
            Re(this, bs, void 0),
            (t = $(this, _s)) == null || t.call(this),
            Re(this, _s, void 0));
      }
      isFetching(n) {
        return $(this, bt).findAll({ ...n, fetchStatus: 'fetching' }).length;
      }
      isMutating(n) {
        return $(this, Dr).findAll({ ...n, status: 'pending' }).length;
      }
      getQueryData(n) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: n });
        return (r = $(this, bt).get(t.queryHash)) == null ? void 0 : r.state.data;
      }
      ensureQueryData(n) {
        const t = this.defaultQueryOptions(n),
          r = $(this, bt).build(this, t),
          i = r.state.data;
        return i === void 0
          ? this.fetchQuery(n)
          : (n.revalidateIfStale && r.isStaleByTime(Fv(t.staleTime, r)) && this.prefetchQuery(t),
            Promise.resolve(i));
      }
      getQueriesData(n) {
        return $(this, bt)
          .findAll(n)
          .map(({ queryKey: t, state: r }) => {
            const i = r.data;
            return [t, i];
          });
      }
      setQueryData(n, t, r) {
        const i = this.defaultQueryOptions({ queryKey: n }),
          l = $(this, bt).get(i.queryHash),
          o = l == null ? void 0 : l.state.data,
          d = ZN(t, o);
        if (d !== void 0)
          return $(this, bt)
            .build(this, i)
            .setData(d, { ...r, manual: !0 });
      }
      setQueriesData(n, t, r) {
        return nn.batch(() =>
          $(this, bt)
            .findAll(n)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, t, r)])
        );
      }
      getQueryState(n) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: n });
        return (r = $(this, bt).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(n) {
        const t = $(this, bt);
        nn.batch(() => {
          t.findAll(n).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(n, t) {
        const r = $(this, bt);
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
            $(this, bt)
              .findAll(n)
              .map((l) => l.cancel(r))
          );
        return Promise.all(i).then(Yn).catch(Yn);
      }
      invalidateQueries(n, t = {}) {
        return nn.batch(
          () => (
            $(this, bt)
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
            $(this, bt)
              .findAll(n)
              .filter((l) => !l.isDisabled())
              .map((l) => {
                let o = l.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(Yn)),
                  l.state.fetchStatus === 'paused' ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(i).then(Yn);
      }
      fetchQuery(n) {
        const t = this.defaultQueryOptions(n);
        t.retry === void 0 && (t.retry = !1);
        const r = $(this, bt).build(this, t);
        return r.isStaleByTime(Fv(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
      }
      prefetchQuery(n) {
        return this.fetchQuery(n).then(Yn).catch(Yn);
      }
      fetchInfiniteQuery(n) {
        return (n.behavior = Kv(n.pages)), this.fetchQuery(n);
      }
      prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(Yn).catch(Yn);
      }
      ensureInfiniteQueryData(n) {
        return (n.behavior = Kv(n.pages)), this.ensureQueryData(n);
      }
      resumePausedMutations() {
        return gc.isOnline() ? $(this, Dr).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return $(this, bt);
      }
      getMutationCache() {
        return $(this, Dr);
      }
      getDefaultOptions() {
        return $(this, Ar);
      }
      setDefaultOptions(n) {
        Re(this, Ar, n);
      }
      setQueryDefaults(n, t) {
        $(this, ps).set(cu(n), { queryKey: n, defaultOptions: t });
      }
      getQueryDefaults(n) {
        const t = [...$(this, ps).values()],
          r = {};
        return (
          t.forEach((i) => {
            fu(n, i.queryKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(n, t) {
        $(this, vs).set(cu(n), { mutationKey: n, defaultOptions: t });
      }
      getMutationDefaults(n) {
        const t = [...$(this, vs).values()],
          r = {};
        return (
          t.forEach((i) => {
            fu(n, i.mutationKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(n) {
        if (n._defaulted) return n;
        const t = {
          ...$(this, Ar).queries,
          ...this.getQueryDefaults(n.queryKey),
          ...n,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Ih(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === Jh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(n) {
        return n != null && n._defaulted
          ? n
          : {
              ...$(this, Ar).mutations,
              ...((n == null ? void 0 : n.mutationKey) && this.getMutationDefaults(n.mutationKey)),
              ...n,
              _defaulted: !0,
            };
      }
      clear() {
        $(this, bt).clear(), $(this, Dr).clear();
      }
    }),
    (bt = new WeakMap()),
    (Dr = new WeakMap()),
    (Ar = new WeakMap()),
    (ps = new WeakMap()),
    (vs = new WeakMap()),
    (kr = new WeakMap()),
    (bs = new WeakMap()),
    (_s = new WeakMap()),
    b0),
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
  Ne = (n) => typeof n == 'string',
  Ul = () => {
    let n, t;
    const r = new Promise((i, l) => {
      (n = i), (t = l);
    });
    return (r.resolve = n), (r.reject = t), r;
  },
  Xv = (n) => (n == null ? '' : '' + n),
  gD = (n, t, r) => {
    n.forEach((i) => {
      t[i] && (r[i] = t[i]);
    });
  },
  yD = /###/g,
  Iv = (n) => (n && n.indexOf('###') > -1 ? n.replace(yD, '.') : n),
  Jv = (n) => !n || Ne(n),
  Fl = (n, t, r) => {
    const i = Ne(t) ? t.split('.') : t;
    let l = 0;
    for (; l < i.length - 1; ) {
      if (Jv(n)) return {};
      const o = Iv(i[l]);
      !n[o] && r && (n[o] = new r()),
        Object.prototype.hasOwnProperty.call(n, o) ? (n = n[o]) : (n = {}),
        ++l;
    }
    return Jv(n) ? {} : { obj: n, k: Iv(i[l]) };
  },
  e0 = (n, t, r) => {
    const { obj: i, k: l } = Fl(n, t, Object);
    if (i !== void 0 || t.length === 1) {
      i[l] = r;
      return;
    }
    let o = t[t.length - 1],
      d = t.slice(0, t.length - 1),
      f = Fl(n, d, Object);
    for (; f.obj === void 0 && d.length; )
      (o = `${d[d.length - 1]}.${o}`),
        (d = d.slice(0, d.length - 1)),
        (f = Fl(n, d, Object)),
        f != null && f.obj && typeof f.obj[`${f.k}.${o}`] < 'u' && (f.obj = void 0);
    f.obj[`${f.k}.${o}`] = r;
  },
  pD = (n, t, r, i) => {
    const { obj: l, k: o } = Fl(n, t, Object);
    (l[o] = l[o] || []), l[o].push(r);
  },
  yc = (n, t) => {
    const { obj: r, k: i } = Fl(n, t);
    if (r && Object.prototype.hasOwnProperty.call(r, i)) return r[i];
  },
  vD = (n, t, r) => {
    const i = yc(n, r);
    return i !== void 0 ? i : yc(t, r);
  },
  o_ = (n, t, r) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in n
          ? Ne(n[i]) || n[i] instanceof String || Ne(t[i]) || t[i] instanceof String
            ? r && (n[i] = t[i])
            : o_(n[i], t[i], r)
          : (n[i] = t[i]));
    return n;
  },
  ss = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var bD = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const _D = (n) => (Ne(n) ? n.replace(/[&<>"'\/]/g, (t) => bD[t]) : n);
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
  OD = (n, t, r) => {
    (t = t || ''), (r = r || '');
    const i = xD.filter((d) => t.indexOf(d) < 0 && r.indexOf(d) < 0);
    if (i.length === 0) return !0;
    const l = wD.getRegExp(`(${i.map((d) => (d === '?' ? '\\?' : d)).join('|')})`);
    let o = !l.test(n);
    if (!o) {
      const d = n.indexOf(r);
      d > 0 && !l.test(n.substring(0, d)) && (o = !0);
    }
    return o;
  },
  Ah = (n, t, r = '.') => {
    if (!n) return;
    if (n[t]) return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : void 0;
    const i = t.split(r);
    let l = n;
    for (let o = 0; o < i.length; ) {
      if (!l || typeof l != 'object') return;
      let d,
        f = '';
      for (let m = o; m < i.length; ++m)
        if ((m !== o && (f += r), (f += i[m]), (d = l[f]), d !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof d) > -1 && m < i.length - 1) continue;
          o += m - o + 1;
          break;
        }
      l = d;
    }
    return l;
  },
  pc = (n) => (n == null ? void 0 : n.replace('_', '-')),
  ED = {
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
class vc {
  constructor(t, r = {}) {
    this.init(t, r);
  }
  init(t, r = {}) {
    (this.prefix = r.prefix || 'i18next:'),
      (this.logger = t || ED),
      (this.options = r),
      (this.debug = r.debug);
  }
  log(...t) {
    return this.forward(t, 'log', '', !0);
  }
  warn(...t) {
    return this.forward(t, 'warn', '', !0);
  }
  error(...t) {
    return this.forward(t, 'error', '');
  }
  deprecate(...t) {
    return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, r, i, l) {
    return l && !this.debug
      ? null
      : (Ne(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[r](t));
  }
  create(t) {
    return new vc(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new vc(this.logger, t);
  }
}
var ga = new vc();
class kc {
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
  emit(t, ...r) {
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach(([l, o]) => {
        for (let d = 0; d < o; d++) l(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(([l, o]) => {
          for (let d = 0; d < o; d++) l.apply(l, [t, ...r]);
        });
  }
}
class t0 extends kc {
  constructor(t, r = { ns: ['translation'], defaultNS: 'translation' }) {
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
  getResource(t, r, i, l = {}) {
    var g, y;
    const o = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      d =
        l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let f;
    t.indexOf('.') > -1
      ? (f = t.split('.'))
      : ((f = [t, r]),
        i && (Array.isArray(i) ? f.push(...i) : Ne(i) && o ? f.push(...i.split(o)) : f.push(i)));
    const m = yc(this.data, f);
    return (
      !m && !r && !i && t.indexOf('.') > -1 && ((t = f[0]), (r = f[1]), (i = f.slice(2).join('.'))),
      m || !d || !Ne(i)
        ? m
        : Ah((y = (g = this.data) == null ? void 0 : g[t]) == null ? void 0 : y[r], i, o)
    );
  }
  addResource(t, r, i, l, o = { silent: !1 }) {
    const d = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let f = [t, r];
    i && (f = f.concat(d ? i.split(d) : i)),
      t.indexOf('.') > -1 && ((f = t.split('.')), (l = r), (r = f[1])),
      this.addNamespaces(r),
      e0(this.data, f, l),
      o.silent || this.emit('added', t, r, i, l);
  }
  addResources(t, r, i, l = { silent: !1 }) {
    for (const o in i)
      (Ne(i[o]) || Array.isArray(i[o])) && this.addResource(t, r, o, i[o], { silent: !0 });
    l.silent || this.emit('added', t, r, i);
  }
  addResourceBundle(t, r, i, l, o, d = { silent: !1, skipCopy: !1 }) {
    let f = [t, r];
    t.indexOf('.') > -1 && ((f = t.split('.')), (l = i), (i = r), (r = f[1])),
      this.addNamespaces(r);
    let m = yc(this.data, f) || {};
    d.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      l ? o_(m, i, o) : (m = { ...m, ...i }),
      e0(this.data, f, m),
      d.silent || this.emit('added', t, r, i);
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
var c_ = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, t, r, i, l) {
    return (
      n.forEach((o) => {
        var d;
        t = ((d = this.processors[o]) == null ? void 0 : d.process(t, r, i, l)) ?? t;
      }),
      t
    );
  },
};
const n0 = {},
  a0 = (n) => !Ne(n) && typeof n != 'boolean' && typeof n != 'number';
class bc extends kc {
  constructor(t, r = {}) {
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
      (this.logger = ga.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, r = { interpolation: {} }) {
    const i = { ...r };
    if (t == null) return !1;
    const l = this.resolve(t, i);
    return (l == null ? void 0 : l.res) !== void 0;
  }
  extractFromKey(t, r) {
    let i = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ':');
    const l = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = r.ns || this.options.defaultNS || [];
    const d = i && t.indexOf(i) > -1,
      f =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !OD(t, i, l);
    if (d && !f) {
      const m = t.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return { key: t, namespaces: Ne(o) ? [o] : o };
      const g = t.split(i);
      (i !== l || (i === l && this.options.ns.indexOf(g[0]) > -1)) && (o = g.shift()),
        (t = g.join(l));
    }
    return { key: t, namespaces: Ne(o) ? [o] : o };
  }
  translate(t, r, i) {
    let l = typeof r == 'object' ? { ...r } : r;
    if (
      (typeof l != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (l = this.options.overloadTranslationOptionHandler(arguments)),
      typeof options == 'object' && (l = { ...l }),
      l || (l = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const o = l.returnDetails !== void 0 ? l.returnDetails : this.options.returnDetails,
      d = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      { key: f, namespaces: m } = this.extractFromKey(t[t.length - 1], l),
      g = m[m.length - 1];
    let y = l.nsSeparator !== void 0 ? l.nsSeparator : this.options.nsSeparator;
    y === void 0 && (y = ':');
    const v = l.lng || this.language,
      _ = l.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((v == null ? void 0 : v.toLowerCase()) === 'cimode')
      return _
        ? o
          ? {
              res: `${g}${y}${f}`,
              usedKey: f,
              exactUsedKey: f,
              usedLng: v,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(l),
            }
          : `${g}${y}${f}`
        : o
          ? {
              res: f,
              usedKey: f,
              exactUsedKey: f,
              usedLng: v,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(l),
            }
          : f;
    const w = this.resolve(t, l);
    let x = w == null ? void 0 : w.res;
    const N = (w == null ? void 0 : w.usedKey) || f,
      T = (w == null ? void 0 : w.exactUsedKey) || f,
      A = ['[object Number]', '[object Function]', '[object RegExp]'],
      j = l.joinArrays !== void 0 ? l.joinArrays : this.options.joinArrays,
      R = !this.i18nFormat || this.i18nFormat.handleAsObject,
      q = l.count !== void 0 && !Ne(l.count),
      M = bc.hasDefaultValue(l),
      K = q ? this.pluralResolver.getSuffix(v, l.count, l) : '',
      W = l.ordinal && q ? this.pluralResolver.getSuffix(v, l.count, { ordinal: !1 }) : '',
      oe = q && !l.ordinal && l.count === 0,
      X =
        (oe && l[`defaultValue${this.options.pluralSeparator}zero`]) ||
        l[`defaultValue${K}`] ||
        l[`defaultValue${W}`] ||
        l.defaultValue;
    let ye = x;
    R && !x && M && (ye = X);
    const ke = a0(ye),
      de = Object.prototype.toString.apply(ye);
    if (R && ye && ke && A.indexOf(de) < 0 && !(Ne(j) && Array.isArray(ye))) {
      if (!l.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const Se = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(N, ye, { ...l, ns: m })
          : `key '${f} (${this.language})' returned an object instead of string.`;
        return o ? ((w.res = Se), (w.usedParams = this.getUsedParamsDetails(l)), w) : Se;
      }
      if (d) {
        const Se = Array.isArray(ye),
          Ae = Se ? [] : {},
          He = Se ? T : N;
        for (const V in ye)
          if (Object.prototype.hasOwnProperty.call(ye, V)) {
            const J = `${He}${d}${V}`;
            M && !x
              ? (Ae[V] = this.translate(J, {
                  ...l,
                  defaultValue: a0(X) ? X[V] : void 0,
                  joinArrays: !1,
                  ns: m,
                }))
              : (Ae[V] = this.translate(J, { ...l, joinArrays: !1, ns: m })),
              Ae[V] === J && (Ae[V] = ye[V]);
          }
        x = Ae;
      }
    } else if (R && Ne(j) && Array.isArray(x))
      (x = x.join(j)), x && (x = this.extendTranslation(x, t, l, i));
    else {
      let Se = !1,
        Ae = !1;
      !this.isValidLookup(x) && M && ((Se = !0), (x = X)),
        this.isValidLookup(x) || ((Ae = !0), (x = f));
      const V =
          (l.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Ae
            ? void 0
            : x,
        J = M && X !== x && this.options.updateMissing;
      if (Ae || Se || J) {
        if ((this.logger.log(J ? 'updateKey' : 'missingKey', v, g, f, J ? X : x), d)) {
          const Z = this.resolve(f, { ...l, keySeparator: !1 });
          Z &&
            Z.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let ce = [];
        const xe = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          l.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && xe && xe[0])
          for (let Z = 0; Z < xe.length; Z++) ce.push(xe[Z]);
        else
          this.options.saveMissingTo === 'all'
            ? (ce = this.languageUtils.toResolveHierarchy(l.lng || this.language))
            : ce.push(l.lng || this.language);
        const E = (Z, re, te) => {
          var ze;
          const pe = M && te !== x ? te : V;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(Z, g, re, pe, J, l)
            : (ze = this.backendConnector) != null &&
              ze.saveMissing &&
              this.backendConnector.saveMissing(Z, g, re, pe, J, l),
            this.emit('missingKey', Z, g, re, x);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && q
            ? ce.forEach((Z) => {
                const re = this.pluralResolver.getSuffixes(Z, l);
                oe &&
                  l[`defaultValue${this.options.pluralSeparator}zero`] &&
                  re.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  re.push(`${this.options.pluralSeparator}zero`),
                  re.forEach((te) => {
                    E([Z], f + te, l[`defaultValue${te}`] || X);
                  });
              })
            : E(ce, f, X));
      }
      (x = this.extendTranslation(x, t, l, w, i)),
        Ae && x === f && this.options.appendNamespaceToMissingKey && (x = `${g}${y}${f}`),
        (Ae || Se) &&
          this.options.parseMissingKeyHandler &&
          (x = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${g}${y}${f}` : f,
            Se ? x : void 0,
            l
          ));
    }
    return o ? ((w.res = x), (w.usedParams = this.getUsedParamsDetails(l)), w) : x;
  }
  extendTranslation(t, r, i, l, o) {
    var m, g;
    if ((m = this.i18nFormat) != null && m.parse)
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
      const y =
        Ne(t) &&
        (((g = i == null ? void 0 : i.interpolation) == null ? void 0 : g.skipOnVariables) !==
        void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (y) {
        const w = t.match(this.interpolator.nestingRegexp);
        v = w && w.length;
      }
      let _ = i.replace && !Ne(i.replace) ? i.replace : i;
      if (
        (this.options.interpolation.defaultVariables &&
          (_ = { ...this.options.interpolation.defaultVariables, ..._ }),
        (t = this.interpolator.interpolate(t, _, i.lng || this.language || l.usedLng, i)),
        y)
      ) {
        const w = t.match(this.interpolator.nestingRegexp),
          x = w && w.length;
        v < x && (i.nest = !1);
      }
      !i.lng && l && l.res && (i.lng = this.language || l.usedLng),
        i.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            (...w) =>
              (o == null ? void 0 : o[0]) === w[0] && !i.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${w[0]} in key: ${r[0]}`
                  ),
                  null)
                : this.translate(...w, r),
            i
          )),
        i.interpolation && this.interpolator.reset();
    }
    const d = i.postProcess || this.options.postProcess,
      f = Ne(d) ? [d] : d;
    return (
      t != null &&
        f != null &&
        f.length &&
        i.applyPostProcessor !== !1 &&
        (t = c_.handle(
          f,
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
  resolve(t, r = {}) {
    let i, l, o, d, f;
    return (
      Ne(t) && (t = [t]),
      t.forEach((m) => {
        if (this.isValidLookup(i)) return;
        const g = this.extractFromKey(m, r),
          y = g.key;
        l = y;
        let v = g.namespaces;
        this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
        const _ = r.count !== void 0 && !Ne(r.count),
          w = _ && !r.ordinal && r.count === 0,
          x =
            r.context !== void 0 &&
            (Ne(r.context) || typeof r.context == 'number') &&
            r.context !== '',
          N = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
        v.forEach((T) => {
          var A, j;
          this.isValidLookup(i) ||
            ((f = T),
            !n0[`${N[0]}-${T}`] &&
              (A = this.utils) != null &&
              A.hasLoadedNamespace &&
              !((j = this.utils) != null && j.hasLoadedNamespace(f)) &&
              ((n0[`${N[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${N.join(', ')}" won't get resolved as namespace "${f}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            N.forEach((R) => {
              var K;
              if (this.isValidLookup(i)) return;
              d = R;
              const q = [y];
              if ((K = this.i18nFormat) != null && K.addLookupKeys)
                this.i18nFormat.addLookupKeys(q, y, R, T, r);
              else {
                let W;
                _ && (W = this.pluralResolver.getSuffix(R, r.count, r));
                const oe = `${this.options.pluralSeparator}zero`,
                  X = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (_ &&
                    (q.push(y + W),
                    r.ordinal &&
                      W.indexOf(X) === 0 &&
                      q.push(y + W.replace(X, this.options.pluralSeparator)),
                    w && q.push(y + oe)),
                  x)
                ) {
                  const ye = `${y}${this.options.contextSeparator}${r.context}`;
                  q.push(ye),
                    _ &&
                      (q.push(ye + W),
                      r.ordinal &&
                        W.indexOf(X) === 0 &&
                        q.push(ye + W.replace(X, this.options.pluralSeparator)),
                      w && q.push(ye + oe));
                }
              }
              let M;
              for (; (M = q.pop()); )
                this.isValidLookup(i) || ((o = M), (i = this.getResource(R, T, M, r)));
            }));
        });
      }),
      { res: i, usedKey: l, exactUsedKey: o, usedLng: d, usedNS: f }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, r, i, l = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource
      ? this.i18nFormat.getResource(t, r, i, l)
      : this.resourceStore.getResource(t, r, i, l);
  }
  getUsedParamsDetails(t = {}) {
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
      i = t.replace && !Ne(t.replace);
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
class r0 {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = ga.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = pc(t)), !t || t.indexOf('-') < 0)) return null;
    const r = t.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = pc(t)), !t || t.indexOf('-') < 0)) return t;
    const r = t.split('-');
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(t) {
    if (Ne(t) && t.indexOf('-') > -1) {
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
          r = this.options.supportedLngs.find((d) => {
            if (d === o) return d;
            if (
              !(d.indexOf('-') < 0 && o.indexOf('-') < 0) &&
              ((d.indexOf('-') > 0 && o.indexOf('-') < 0 && d.substring(0, d.indexOf('-')) === o) ||
                (d.indexOf(o) === 0 && o.length > 1))
            )
              return d;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(t, r) {
    if (!t) return [];
    if ((typeof t == 'function' && (t = t(r)), Ne(t) && (t = [t]), Array.isArray(t))) return t;
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
      o = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? l.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      Ne(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && o(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' && o(this.getLanguagePartFromCode(t)))
        : Ne(t) && o(this.formatLanguageCode(t)),
      i.forEach((d) => {
        l.indexOf(d) < 0 && o(this.formatLanguageCode(d));
      }),
      l
    );
  }
}
const i0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  s0 = {
    select: (n) => (n === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class CD {
  constructor(t, r = {}) {
    (this.languageUtils = t),
      (this.options = r),
      (this.logger = ga.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(t, r) {
    this.rules[t] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, r = {}) {
    const i = pc(t === 'dev' ? 'en' : t),
      l = r.ordinal ? 'ordinal' : 'cardinal',
      o = JSON.stringify({ cleanedCode: i, type: l });
    if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
    let d;
    try {
      d = new Intl.PluralRules(i, { type: l });
    } catch {
      if (!Intl) return this.logger.error('No Intl support, please use an Intl polyfill!'), s0;
      if (!t.match(/-|_/)) return s0;
      const m = this.languageUtils.getLanguagePartFromCode(t);
      d = this.getRule(m, r);
    }
    return (this.pluralRulesCache[o] = d), d;
  }
  needsPlural(t, r = {}) {
    let i = this.getRule(t, r);
    return (
      i || (i = this.getRule('dev', r)),
      (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(t, r, i = {}) {
    return this.getSuffixes(t, i).map((l) => `${r}${l}`);
  }
  getSuffixes(t, r = {}) {
    let i = this.getRule(t, r);
    return (
      i || (i = this.getRule('dev', r)),
      i
        ? i
            .resolvedOptions()
            .pluralCategories.sort((l, o) => i0[l] - i0[o])
            .map(
              (l) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${l}`
            )
        : []
    );
  }
  getSuffix(t, r, i = {}) {
    const l = this.getRule(t, i);
    return l
      ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ''}${l.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix('dev', r, i));
  }
}
const l0 = (n, t, r, i = '.', l = !0) => {
    let o = vD(n, t, r);
    return !o && l && Ne(r) && ((o = Ah(n, r, i)), o === void 0 && (o = Ah(t, r, i))), o;
  },
  mh = (n) => n.replace(/\$/g, '$$$$');
class TD {
  constructor(t = {}) {
    var r;
    (this.logger = ga.create('interpolator')),
      (this.options = t),
      (this.format =
        ((r = t == null ? void 0 : t.interpolation) == null ? void 0 : r.format) || ((i) => i)),
      this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: r,
      escapeValue: i,
      useRawValueToEscape: l,
      prefix: o,
      prefixEscaped: d,
      suffix: f,
      suffixEscaped: m,
      formatSeparator: g,
      unescapeSuffix: y,
      unescapePrefix: v,
      nestingPrefix: _,
      nestingPrefixEscaped: w,
      nestingSuffix: x,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: T,
      maxReplaces: A,
      alwaysFormat: j,
    } = t.interpolation;
    (this.escape = r !== void 0 ? r : _D),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = o ? ss(o) : d || '{{'),
      (this.suffix = f ? ss(f) : m || '}}'),
      (this.formatSeparator = g || ','),
      (this.unescapePrefix = y ? '' : v || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : y || ''),
      (this.nestingPrefix = _ ? ss(_) : w || ss('$t(')),
      (this.nestingSuffix = x ? ss(x) : N || ss(')')),
      (this.nestingOptionsSeparator = T || ','),
      (this.maxReplaces = A || 1e3),
      (this.alwaysFormat = j !== void 0 ? j : !1),
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
    let o, d, f;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (x) => {
        if (x.indexOf(this.formatSeparator) < 0) {
          const j = l0(r, m, x, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(j, void 0, i, { ...l, ...r, interpolationkey: x })
            : j;
        }
        const N = x.split(this.formatSeparator),
          T = N.shift().trim(),
          A = N.join(this.formatSeparator).trim();
        return this.format(
          l0(r, m, T, this.options.keySeparator, this.options.ignoreJSONStructure),
          A,
          i,
          { ...l, ...r, interpolationkey: T }
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
        { regex: this.regexpUnescape, safeValue: (x) => mh(x) },
        { regex: this.regexp, safeValue: (x) => (this.escapeValue ? mh(this.escape(x)) : mh(x)) },
      ].forEach((x) => {
        for (f = 0; (o = x.regex.exec(t)); ) {
          const N = o[1].trim();
          if (((d = g(N)), d === void 0))
            if (typeof y == 'function') {
              const A = y(t, o, l);
              d = Ne(A) ? A : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, N)) d = '';
            else if (v) {
              d = o[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${N} for interpolating ${t}`), (d = '');
          else !Ne(d) && !this.useRawValueToEscape && (d = Xv(d));
          const T = x.safeValue(d);
          if (
            ((t = t.replace(o[0], T)),
            v
              ? ((x.regex.lastIndex += d.length), (x.regex.lastIndex -= o[0].length))
              : (x.regex.lastIndex = 0),
            f++,
            f >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, r, i = {}) {
    let l, o, d;
    const f = (m, g) => {
      const y = this.nestingOptionsSeparator;
      if (m.indexOf(y) < 0) return m;
      const v = m.split(new RegExp(`${y}[ ]*{`));
      let _ = `{${v[1]}`;
      (m = v[0]), (_ = this.interpolate(_, d));
      const w = _.match(/'/g),
        x = _.match(/"/g);
      ((((w == null ? void 0 : w.length) ?? 0) % 2 === 0 && !x) || x.length % 2 !== 0) &&
        (_ = _.replace(/'/g, '"'));
      try {
        (d = JSON.parse(_)), g && (d = { ...g, ...d });
      } catch (N) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${m}`, N),
          `${m}${y}${_}`
        );
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, m;
    };
    for (; (l = this.nestingRegexp.exec(t)); ) {
      let m = [];
      (d = { ...i }),
        (d = d.replace && !Ne(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let g = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const y = l[1].split(this.formatSeparator).map((v) => v.trim());
        (l[1] = y.shift()), (m = y), (g = !0);
      }
      if (((o = r(f.call(this, l[1].trim(), d), d)), o && l[0] === t && !Ne(o))) return o;
      Ne(o) || (o = Xv(o)),
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
          : l.split(';').forEach((d) => {
              if (d) {
                const [f, ...m] = d.split(':'),
                  g = m
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  y = f.trim();
                r[y] || (r[y] = g),
                  g === 'false' && (r[y] = !1),
                  g === 'true' && (r[y] = !0),
                  isNaN(g) || (r[y] = parseInt(g, 10));
              }
            });
    }
    return { formatName: t, formatOptions: r };
  },
  ls = (n) => {
    const t = {};
    return (r, i, l) => {
      let o = l;
      l &&
        l.interpolationkey &&
        l.formatParams &&
        l.formatParams[l.interpolationkey] &&
        l[l.interpolationkey] &&
        (o = { ...o, [l.interpolationkey]: void 0 });
      const d = i + JSON.stringify(o);
      let f = t[d];
      return f || ((f = n(pc(i), l)), (t[d] = f)), f(r);
    };
  };
class ND {
  constructor(t = {}) {
    (this.logger = ga.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: ls((r, i) => {
          const l = new Intl.NumberFormat(r, { ...i });
          return (o) => l.format(o);
        }),
        currency: ls((r, i) => {
          const l = new Intl.NumberFormat(r, { ...i, style: 'currency' });
          return (o) => l.format(o);
        }),
        datetime: ls((r, i) => {
          const l = new Intl.DateTimeFormat(r, { ...i });
          return (o) => l.format(o);
        }),
        relativetime: ls((r, i) => {
          const l = new Intl.RelativeTimeFormat(r, { ...i });
          return (o) => l.format(o, i.range || 'day');
        }),
        list: ls((r, i) => {
          const l = new Intl.ListFormat(r, { ...i });
          return (o) => l.format(o);
        }),
      }),
      this.init(t);
  }
  init(t, r = { interpolation: {} }) {
    this.formatSeparator = r.interpolation.formatSeparator || ',';
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r;
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = ls(r);
  }
  format(t, r, i, l = {}) {
    const o = r.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf('(') > 1 &&
      o[0].indexOf(')') < 0 &&
      o.find((f) => f.indexOf(')') > -1)
    ) {
      const f = o.findIndex((m) => m.indexOf(')') > -1);
      o[0] = [o[0], ...o.splice(1, f)].join(this.formatSeparator);
    }
    return o.reduce((f, m) => {
      var v;
      const { formatName: g, formatOptions: y } = MD(m);
      if (this.formats[g]) {
        let _ = f;
        try {
          const w =
              ((v = l == null ? void 0 : l.formatParams) == null
                ? void 0
                : v[l.interpolationkey]) || {},
            x = w.locale || w.lng || l.locale || l.lng || i;
          _ = this.formats[g](f, x, { ...y, ...l, ...w });
        } catch (w) {
          this.logger.warn(w);
        }
        return _;
      } else this.logger.warn(`there was no format function for ${g}`);
      return f;
    }, t);
  }
}
const DD = (n, t) => {
  n.pending[t] !== void 0 && (delete n.pending[t], n.pendingCount--);
};
class AD extends kc {
  constructor(t, r, i, l = {}) {
    var o, d;
    super(),
      (this.backend = t),
      (this.store = r),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = l),
      (this.logger = ga.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (d = (o = this.backend) == null ? void 0 : o.init) == null || d.call(o, i, l.backend, l);
  }
  queueLoad(t, r, i, l) {
    const o = {},
      d = {},
      f = {},
      m = {};
    return (
      t.forEach((g) => {
        let y = !0;
        r.forEach((v) => {
          const _ = `${g}|${v}`;
          !i.reload && this.store.hasResourceBundle(g, v)
            ? (this.state[_] = 2)
            : this.state[_] < 0 ||
              (this.state[_] === 1
                ? d[_] === void 0 && (d[_] = !0)
                : ((this.state[_] = 1),
                  (y = !1),
                  d[_] === void 0 && (d[_] = !0),
                  o[_] === void 0 && (o[_] = !0),
                  m[v] === void 0 && (m[v] = !0)));
        }),
          y || (f[g] = !0);
      }),
      (Object.keys(o).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: l,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(f),
        toLoadNamespaces: Object.keys(m),
      }
    );
  }
  loaded(t, r, i) {
    const l = t.split('|'),
      o = l[0],
      d = l[1];
    r && this.emit('failedLoading', o, d, r),
      !r && i && this.store.addResourceBundle(o, d, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = r ? -1 : 2),
      r && i && (this.state[t] = 0);
    const f = {};
    this.queue.forEach((m) => {
      pD(m.loaded, [o], d),
        DD(m, t),
        r && m.errors.push(r),
        m.pendingCount === 0 &&
          !m.done &&
          (Object.keys(m.loaded).forEach((g) => {
            f[g] || (f[g] = {});
            const y = m.loaded[g];
            y.length &&
              y.forEach((v) => {
                f[g][v] === void 0 && (f[g][v] = !0);
              });
          }),
          (m.done = !0),
          m.errors.length ? m.callback(m.errors) : m.callback());
    }),
      this.emit('loaded', f),
      (this.queue = this.queue.filter((m) => !m.done));
  }
  read(t, r, i, l = 0, o = this.retryTimeout, d) {
    if (!t.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: t, ns: r, fcName: i, tried: l, wait: o, callback: d });
      return;
    }
    this.readingCalls++;
    const f = (g, y) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const v = this.waitingReads.shift();
          this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (g && y && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, r, i, l + 1, o * 2, d);
          }, o);
          return;
        }
        d(g, y);
      },
      m = this.backend[i].bind(this.backend);
    if (m.length === 2) {
      try {
        const g = m(t, r);
        g && typeof g.then == 'function' ? g.then((y) => f(null, y)).catch(f) : f(null, g);
      } catch (g) {
        f(g);
      }
      return;
    }
    return m(t, r, f);
  }
  prepareLoading(t, r, i = {}, l) {
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), l && l()
      );
    Ne(t) && (t = this.languageUtils.toResolveHierarchy(t)), Ne(r) && (r = [r]);
    const o = this.queueLoad(t, r, i, l);
    if (!o.toLoad.length) return o.pending.length || l(), null;
    o.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(t, r, i) {
    this.prepareLoading(t, r, {}, i);
  }
  reload(t, r, i) {
    this.prepareLoading(t, r, { reload: !0 }, i);
  }
  loadOne(t, r = '') {
    const i = t.split('|'),
      l = i[0],
      o = i[1];
    this.read(l, o, 'read', void 0, void 0, (d, f) => {
      d && this.logger.warn(`${r}loading namespace ${o} for language ${l} failed`, d),
        !d && f && this.logger.log(`${r}loaded namespace ${o} for language ${l}`, f),
        this.loaded(t, d, f);
    });
  }
  saveMissing(t, r, i, l, o, d = {}, f = () => {}) {
    var m, g, y, v, _;
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
      if ((_ = this.backend) != null && _.create) {
        const w = { ...d, isUpdate: o },
          x = this.backend.create.bind(this.backend);
        if (x.length < 6)
          try {
            let N;
            x.length === 5 ? (N = x(t, r, i, l, w)) : (N = x(t, r, i, l)),
              N && typeof N.then == 'function' ? N.then((T) => f(null, T)).catch(f) : f(null, N);
          } catch (N) {
            f(N);
          }
        else x(t, r, i, l, f, w);
      }
      !t || !t[0] || this.store.addResource(t[0], r, i, l);
    }
  }
}
const u0 = () => ({
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
        Ne(n[1]) && (t.defaultValue = n[1]),
        Ne(n[2]) && (t.tDescription = n[2]),
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
  o0 = (n) => {
    var t, r;
    return (
      Ne(n.ns) && (n.ns = [n.ns]),
      Ne(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]),
      Ne(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]),
      ((r = (t = n.supportedLngs) == null ? void 0 : t.indexOf) == null
        ? void 0
        : r.call(t, 'cimode')) < 0 && (n.supportedLngs = n.supportedLngs.concat(['cimode'])),
      typeof n.initImmediate == 'boolean' && (n.initAsync = n.initImmediate),
      n
    );
  },
  $o = () => {},
  kD = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((r) => {
      typeof n[r] == 'function' && (n[r] = n[r].bind(n));
    });
  };
class du extends kc {
  constructor(t = {}, r) {
    if (
      (super(),
      (this.options = o0(t)),
      (this.services = {}),
      (this.logger = ga),
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
  init(t = {}, r) {
    (this.isInitializing = !0),
      typeof t == 'function' && ((r = t), (t = {})),
      t.defaultNS == null &&
        t.ns &&
        (Ne(t.ns)
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf('translation') < 0 && (t.defaultNS = t.ns[0]));
    const i = u0();
    (this.options = { ...i, ...this.options, ...o0(t) }),
      (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
      t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const l = (g) => (g ? (typeof g == 'function' ? new g() : g) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? ga.init(l(this.modules.logger), this.options)
        : ga.init(null, this.options);
      let g;
      this.modules.formatter ? (g = this.modules.formatter) : (g = ND);
      const y = new r0(this.options);
      this.store = new t0(this.options.resources, this.options);
      const v = this.services;
      (v.logger = ga),
        (v.resourceStore = this.store),
        (v.languageUtils = y),
        (v.pluralResolver = new CD(y, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((v.formatter = l(g)),
          v.formatter.init(v, this.options),
          (this.options.interpolation.format = v.formatter.format.bind(v.formatter))),
        (v.interpolator = new TD(this.options)),
        (v.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (v.backendConnector = new AD(l(this.modules.backend), v.resourceStore, v, this.options)),
        v.backendConnector.on('*', (_, ...w) => {
          this.emit(_, ...w);
        }),
        this.modules.languageDetector &&
          ((v.languageDetector = l(this.modules.languageDetector)),
          v.languageDetector.init &&
            v.languageDetector.init(v, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((v.i18nFormat = l(this.modules.i18nFormat)),
          v.i18nFormat.init && v.i18nFormat.init(this)),
        (this.translator = new bc(this.services, this.options)),
        this.translator.on('*', (_, ...w) => {
          this.emit(_, ...w);
        }),
        this.modules.external.forEach((_) => {
          _.init && _.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = $o),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      g.length > 0 && g[0] !== 'dev' && (this.options.lng = g[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (g) => {
          this[g] = (...y) => this.store[g](...y);
        }
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((g) => {
        this[g] = (...y) => (this.store[g](...y), this);
      });
    const f = Ul(),
      m = () => {
        const g = (y, v) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            f.resolve(v),
            r(y, v);
        };
        if (this.languages && !this.isInitialized) return g(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, g);
      };
    return this.options.resources || !this.options.initAsync ? m() : setTimeout(m, 0), f;
  }
  loadResources(t, r = $o) {
    var o, d;
    let i = r;
    const l = Ne(t) ? t : this.language;
    if (
      (typeof t == 'function' && (i = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (l == null ? void 0 : l.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return i();
      const f = [],
        m = (g) => {
          if (!g || g === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(g).forEach((v) => {
            v !== 'cimode' && f.indexOf(v) < 0 && f.push(v);
          });
        };
      l
        ? m(l)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((y) => m(y)),
        (d = (o = this.options.preload) == null ? void 0 : o.forEach) == null ||
          d.call(o, (g) => m(g)),
        this.services.backendConnector.load(f, this.options.ns, (g) => {
          !g && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            i(g);
        });
    } else i(null);
  }
  reloadResources(t, r, i) {
    const l = Ul();
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof r == 'function' && ((i = r), (r = void 0)),
      t || (t = this.languages),
      r || (r = this.options.ns),
      i || (i = $o),
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
      t.type === 'postProcessor' && c_.addPostProcessor(t),
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
    this.isLanguageChangingTo = t;
    const i = Ul();
    this.emit('languageChanging', t);
    const l = (f) => {
        (this.language = f),
          (this.languages = this.services.languageUtils.toResolveHierarchy(f)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(f);
      },
      o = (f, m) => {
        m
          ? this.isLanguageChangingTo === t &&
            (l(m),
            this.translator.changeLanguage(m),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', m),
            this.logger.log('languageChanged', m))
          : (this.isLanguageChangingTo = void 0),
          i.resolve((...g) => this.t(...g)),
          r && r(f, (...g) => this.t(...g));
      },
      d = (f) => {
        var y, v;
        !t && !f && this.services.languageDetector && (f = []);
        const m = Ne(f) ? f : f && f[0],
          g = this.store.hasLanguageSomeTranslations(m)
            ? m
            : this.services.languageUtils.getBestMatchFromCodes(Ne(f) ? [f] : f);
        g &&
          (this.language || l(g),
          this.translator.language || this.translator.changeLanguage(g),
          (v = (y = this.services.languageDetector) == null ? void 0 : y.cacheUserLanguage) ==
            null || v.call(y, g)),
          this.loadResources(g, (_) => {
            o(_, g);
          });
      };
    return (
      !t && this.services.languageDetector && !this.services.languageDetector.async
        ? d(this.services.languageDetector.detect())
        : !t && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(d)
            : this.services.languageDetector.detect(d)
          : d(t),
      i
    );
  }
  getFixedT(t, r, i) {
    const l = (o, d, ...f) => {
      let m;
      typeof d != 'object'
        ? (m = this.options.overloadTranslationOptionHandler([o, d].concat(f)))
        : (m = { ...d }),
        (m.lng = m.lng || l.lng),
        (m.lngs = m.lngs || l.lngs),
        (m.ns = m.ns || l.ns),
        m.keyPrefix !== '' && (m.keyPrefix = m.keyPrefix || i || l.keyPrefix);
      const g = this.options.keySeparator || '.';
      let y;
      return (
        m.keyPrefix && Array.isArray(o)
          ? (y = o.map((v) => `${m.keyPrefix}${g}${v}`))
          : (y = m.keyPrefix ? `${m.keyPrefix}${g}${o}` : o),
        this.t(y, m)
      );
    };
    return Ne(t) ? (l.lng = t) : (l.lngs = t), (l.ns = r), (l.keyPrefix = i), l;
  }
  t(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...t);
  }
  exists(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, r = {}) {
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
    const d = (f, m) => {
      const g = this.services.backendConnector.state[`${f}|${m}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (r.precheck) {
      const f = r.precheck(this, d);
      if (f !== void 0) return f;
    }
    return !!(
      this.hasResourceBundle(i, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(i, t) && (!l || d(o, t)))
    );
  }
  loadNamespaces(t, r) {
    const i = Ul();
    return this.options.ns
      ? (Ne(t) && (t = [t]),
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
    const i = Ul();
    Ne(t) && (t = [t]);
    const l = this.options.preload || [],
      o = t.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return o.length
      ? ((this.options.preload = l.concat(o)),
        this.loadResources((d) => {
          i.resolve(), r && r(d);
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
      i = ((o = this.services) == null ? void 0 : o.languageUtils) || new r0(u0());
    return r.indexOf(i.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance(t = {}, r) {
    return new du(t, r);
  }
  cloneInstance(t = {}, r = $o) {
    const i = t.forkResourceStore;
    i && delete t.forkResourceStore;
    const l = { ...this.options, ...t, isClone: !0 },
      o = new du(l);
    if (
      ((t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)),
      ['store', 'services', 'language'].forEach((f) => {
        o[f] = this[f];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      i)
    ) {
      const f = Object.keys(this.store.data).reduce(
        (m, g) => (
          (m[g] = { ...this.store.data[g] }),
          (m[g] = Object.keys(m[g]).reduce((y, v) => ((y[v] = { ...m[g][v] }), y), m[g])),
          m
        ),
        {}
      );
      (o.store = new t0(f, l)), (o.services.resourceStore = o.store);
    }
    return (
      (o.translator = new bc(o.services, l)),
      o.translator.on('*', (f, ...m) => {
        o.emit(f, ...m);
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
const Xt = du.createInstance();
Xt.createInstance = du.createInstance;
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
let c0 = {
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
    c0 = { ...c0, ...n };
  },
  BD = {
    type: '3rdParty',
    init(n) {
      LD(n.options.react);
    },
  },
  HD = 'Welcome to React',
  VD = 'This is demo to show i18n. (aka translation from src/locales/en.json)',
  YD = { welcome: HD, description: VD },
  qD = 'Добро пожаловать в Реактик',
  ZD = 'Это дэмо для i18n. (то есть перевода из src/locales/ru.json)',
  FD = { welcome: qD, description: ZD };
Xt.use(BD).init({
  resources: { en: { translation: YD }, ru: { translation: FD } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: !1 },
});
function PD(n) {
  AS.createRoot(n).render(
    S.jsx(k.StrictMode, {
      children: S.jsx(hD, {
        client: mD,
        children: S.jsx(nN, { store: qN, children: S.jsx(Kx, { children: S.jsx(YM, {}) }) }),
      }),
    })
  );
}
const f0 = document.getElementById('root');
f0 && PD(f0);
