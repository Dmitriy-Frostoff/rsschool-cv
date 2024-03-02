!(function () {
  let t;
  let n;
  let e;
  let s;
  let r;
  let o;
  let c;
  let i;
  const u = {
    385(t) {
      t.exports = function (t, n) {
        return (
          n || (n = {}),
          t
            ? ((t = String(t.__esModule ? t.default : t)),
              n.hash && (t += n.hash),
              n.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t)
                ? '"'.concat(t, '"')
                : t)
            : t
        );
      };
    },
    942(t, n, e) {
      t.exports = `${e.p}src/assets/icons/favicon64x64.54a0.ico`;
    },
    852(t, n, e) {
      t.exports = `${e.p}src/prism/prism.8a02.js`;
    },
    405(t, n, e) {
      t.exports = `${e.p}src/prism/prism.b88d.css`;
    },
    86(t, n, e) {
      t.exports = `${e.p}src/assets/img/IMG_20210918_16370a.6d9f.jpg`;
    },
    122(t, n, e) {
      t.exports = `${e.p}src/assets/svg/contacts/codewars.998d.gif`;
    },
    477(t, n, e) {
      t.exports = `${e.p}src/assets/svg/contacts/github.d823.gif`;
    },
  };
  const a = {};
  function f(t) {
    const n = a[t];
    if (void 0 !== n) return n.exports;
    const e = (a[t] = { exports: {} });
    return u[t](e, e.exports, f), e.exports;
  }
  (f.m = u),
    (f.n = function (t) {
      const n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return f.d(n, { a: n }), n;
    }),
    (f.d = function (t, n) {
      for (const e in n)
        f.o(n, e) &&
          !f.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
    }),
    (f.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (f.p = ''),
    (f.b = document.baseURI || self.location.href),
    (t = f(385)),
    (n = f.n(t)),
    (e = new URL(f(405), f.b)),
    (s = new URL(f(942), f.b)),
    (r = new URL(f(86), f.b)),
    (o = new URL(f(477), f.b)),
    (c = new URL(f(122), f.b)),
    (i = new URL(f(852), f.b)),
    n()(e),
    n()(s),
    n()(r),
    n()(o),
    n()(c),
    n()(i);
})();
// # sourceMappingURL=main.e63f.js.map
