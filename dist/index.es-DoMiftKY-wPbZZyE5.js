import { p as Xi } from "./app-DjSUPO6U.js";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Io(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ce = function(i) {
  return i && i.Math === Math && i;
}, _ = (
  // eslint-disable-next-line es/no-global-this -- safe
  ce(typeof globalThis == "object" && globalThis) || ce(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  ce(typeof self == "object" && self) || ce(typeof Zt == "object" && Zt) || ce(typeof Zt == "object" && Zt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Ae = {}, D = function(i) {
  try {
    return !!i();
  } catch {
    return !0;
  }
}, Ah = D, ht = !Ah(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Eh = D, vr = !Eh(function() {
  var i = (function() {
  }).bind();
  return typeof i != "function" || i.hasOwnProperty("prototype");
}), Ch = vr, ze = Function.prototype.call, W = Ch ? ze.bind(ze) : function() {
  return ze.apply(ze, arguments);
}, _o = {}, Lo = {}.propertyIsEnumerable, Do = Object.getOwnPropertyDescriptor, Ph = Do && !Lo.call({ 1: 2 }, 1);
_o.f = Ph ? function(i) {
  var t = Do(this, i);
  return !!t && t.enumerable;
} : Lo;
var Sn = function(i, t) {
  return {
    enumerable: !(i & 1),
    configurable: !(i & 2),
    writable: !(i & 4),
    value: t
  };
}, Bo = vr, Fo = Function.prototype, Yi = Fo.call, Nh = Bo && Fo.bind.bind(Yi, Yi), B = Bo ? Nh : function(i) {
  return function() {
    return Yi.apply(i, arguments);
  };
}, jo = B, Mh = jo({}.toString), Rh = jo("".slice), Ft = function(i) {
  return Rh(Mh(i), 8, -1);
}, Vh = B, kh = D, Ih = Ft, $r = Object, _h = Vh("".split), Uo = kh(function() {
  return !$r("z").propertyIsEnumerable(0);
}) ? function(i) {
  return Ih(i) === "String" ? _h(i, "") : $r(i);
} : $r, jt = function(i) {
  return i == null;
}, Lh = jt, Dh = TypeError, lt = function(i) {
  if (Lh(i)) throw new Dh("Can't call method on " + i);
  return i;
}, Bh = Uo, Fh = lt, Ee = function(i) {
  return Bh(Fh(i));
}, Zr = typeof document == "object" && document.all, F = typeof Zr > "u" && Zr !== void 0 ? function(i) {
  return typeof i == "function" || i === Zr;
} : function(i) {
  return typeof i == "function";
}, jh = F, ct = function(i) {
  return typeof i == "object" ? i !== null : jh(i);
}, Jr = _, Uh = F, zh = function(i) {
  return Uh(i) ? i : void 0;
}, Ut = function(i, t) {
  return arguments.length < 2 ? zh(Jr[i]) : Jr[i] && Jr[i][t];
}, Hh = B, xr = Hh({}.isPrototypeOf), Xh = _, da = Xh.navigator, ma = da && da.userAgent, Ce = ma ? String(ma) : "", zo = _, Kr = Ce, ya = zo.process, va = zo.Deno, xa = ya && ya.versions || va && va.version, ba = xa && xa.v8, ut, gr;
ba && (ut = ba.split("."), gr = ut[0] > 0 && ut[0] < 4 ? 1 : +(ut[0] + ut[1]));
!gr && Kr && (ut = Kr.match(/Edge\/(\d+)/), (!ut || ut[1] >= 74) && (ut = Kr.match(/Chrome\/(\d+)/), ut && (gr = +ut[1])));
var Tn = gr, wa = Tn, Yh = D, Wh = _, qh = Wh.String, Ho = !!Object.getOwnPropertySymbols && !Yh(function() {
  var i = Symbol("symbol detection");
  return !qh(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && wa && wa < 41;
}), Gh = Ho, Xo = Gh && !Symbol.sham && typeof Symbol.iterator == "symbol", Qh = Ut, $h = F, Zh = xr, Jh = Xo, Kh = Object, Yo = Jh ? function(i) {
  return typeof i == "symbol";
} : function(i) {
  var t = Qh("Symbol");
  return $h(t) && Zh(t.prototype, Kh(i));
}, tl = String, br = function(i) {
  try {
    return tl(i);
  } catch {
    return "Object";
  }
}, el = F, rl = br, il = TypeError, wt = function(i) {
  if (el(i)) return i;
  throw new il(rl(i) + " is not a function");
}, nl = wt, al = jt, oe = function(i, t) {
  var e = i[t];
  return al(e) ? void 0 : nl(e);
}, ti = W, ei = F, ri = ct, sl = TypeError, ol = function(i, t) {
  var e, r;
  if (t === "string" && ei(e = i.toString) && !ri(r = ti(e, i)) || ei(e = i.valueOf) && !ri(r = ti(e, i)) || t !== "string" && ei(e = i.toString) && !ri(r = ti(e, i))) return r;
  throw new sl("Can't convert object to primitive value");
}, Wo = { exports: {} }, Sa = _, ul = Object.defineProperty, On = function(i, t) {
  try {
    ul(Sa, i, { value: t, configurable: !0, writable: !0 });
  } catch {
    Sa[i] = t;
  }
  return t;
}, hl = _, ll = On, Ta = "__core-js_shared__", Oa = Wo.exports = hl[Ta] || ll(Ta, {});
(Oa.versions || (Oa.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var An = Wo.exports, Aa = An, En = function(i, t) {
  return Aa[i] || (Aa[i] = t || {});
}, cl = lt, gl = Object, wr = function(i) {
  return gl(cl(i));
}, fl = B, pl = wr, dl = fl({}.hasOwnProperty), gt = Object.hasOwn || function(i, t) {
  return dl(pl(i), t);
}, ml = B, yl = 0, vl = Math.random(), xl = ml(1 .toString), qo = function(i) {
  return "Symbol(" + (i === void 0 ? "" : i) + ")_" + xl(++yl + vl, 36);
}, bl = _, wl = En, Ea = gt, Sl = qo, Tl = Ho, Ol = Xo, Jt = bl.Symbol, ii = wl("wks"), Al = Ol ? Jt.for || Jt : Jt && Jt.withoutSetter || Sl, X = function(i) {
  return Ea(ii, i) || (ii[i] = Tl && Ea(Jt, i) ? Jt[i] : Al("Symbol." + i)), ii[i];
}, El = W, Ca = ct, Pa = Yo, Cl = oe, Pl = ol, Nl = X, Ml = TypeError, Rl = Nl("toPrimitive"), Vl = function(i, t) {
  if (!Ca(i) || Pa(i)) return i;
  var e = Cl(i, Rl), r;
  if (e) {
    if (t === void 0 && (t = "default"), r = El(e, i, t), !Ca(r) || Pa(r)) return r;
    throw new Ml("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), Pl(i, t);
}, kl = Vl, Il = Yo, Go = function(i) {
  var t = kl(i, "string");
  return Il(t) ? t : t + "";
}, _l = _, Na = ct, Wi = _l.document, Ll = Na(Wi) && Na(Wi.createElement), Sr = function(i) {
  return Ll ? Wi.createElement(i) : {};
}, Dl = ht, Bl = D, Fl = Sr, Qo = !Dl && !Bl(function() {
  return Object.defineProperty(Fl("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), jl = ht, Ul = W, zl = _o, Hl = Sn, Xl = Ee, Yl = Go, Wl = gt, ql = Qo, Ma = Object.getOwnPropertyDescriptor;
Ae.f = jl ? Ma : function(i, t) {
  if (i = Xl(i), t = Yl(t), ql) try {
    return Ma(i, t);
  } catch {
  }
  if (Wl(i, t)) return Hl(!Ul(zl.f, i, t), i[t]);
};
var St = {}, Gl = ht, Ql = D, $o = Gl && Ql(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), $l = ct, Zl = String, Jl = TypeError, K = function(i) {
  if ($l(i)) return i;
  throw new Jl(Zl(i) + " is not an object");
}, Kl = ht, tc = Qo, ec = $o, He = K, Ra = Go, rc = TypeError, ni = Object.defineProperty, ic = Object.getOwnPropertyDescriptor, ai = "enumerable", si = "configurable", oi = "writable";
St.f = Kl ? ec ? function(i, t, e) {
  if (He(i), t = Ra(t), He(e), typeof i == "function" && t === "prototype" && "value" in e && oi in e && !e[oi]) {
    var r = ic(i, t);
    r && r[oi] && (i[t] = e.value, e = {
      configurable: si in e ? e[si] : r[si],
      enumerable: ai in e ? e[ai] : r[ai],
      writable: !1
    });
  }
  return ni(i, t, e);
} : ni : function(i, t, e) {
  if (He(i), t = Ra(t), He(e), tc) try {
    return ni(i, t, e);
  } catch {
  }
  if ("get" in e || "set" in e) throw new rc("Accessors not supported");
  return "value" in e && (i[t] = e.value), i;
};
var nc = ht, ac = St, sc = Sn, Pe = nc ? function(i, t, e) {
  return ac.f(i, t, sc(1, e));
} : function(i, t, e) {
  return i[t] = e, i;
}, Zo = { exports: {} }, qi = ht, oc = gt, Jo = Function.prototype, uc = qi && Object.getOwnPropertyDescriptor, Cn = oc(Jo, "name"), hc = Cn && (function() {
}).name === "something", lc = Cn && (!qi || qi && uc(Jo, "name").configurable), Tr = {
  EXISTS: Cn,
  PROPER: hc,
  CONFIGURABLE: lc
}, cc = B, gc = F, Gi = An, fc = cc(Function.toString);
gc(Gi.inspectSource) || (Gi.inspectSource = function(i) {
  return fc(i);
});
var Pn = Gi.inspectSource, pc = _, dc = F, Va = pc.WeakMap, mc = dc(Va) && /native code/.test(String(Va)), yc = En, vc = qo, ka = yc("keys"), Nn = function(i) {
  return ka[i] || (ka[i] = vc(i));
}, Mn = {}, xc = mc, Ko = _, bc = ct, wc = Pe, ui = gt, hi = An, Sc = Nn, Tc = Mn, Ia = "Object already initialized", Qi = Ko.TypeError, Oc = Ko.WeakMap, fr, Se, pr, Ac = function(i) {
  return pr(i) ? Se(i) : fr(i, {});
}, Ec = function(i) {
  return function(t) {
    var e;
    if (!bc(t) || (e = Se(t)).type !== i)
      throw new Qi("Incompatible receiver, " + i + " required");
    return e;
  };
};
if (xc || hi.state) {
  var dt = hi.state || (hi.state = new Oc());
  dt.get = dt.get, dt.has = dt.has, dt.set = dt.set, fr = function(i, t) {
    if (dt.has(i)) throw new Qi(Ia);
    return t.facade = i, dt.set(i, t), t;
  }, Se = function(i) {
    return dt.get(i) || {};
  }, pr = function(i) {
    return dt.has(i);
  };
} else {
  var Wt = Sc("state");
  Tc[Wt] = !0, fr = function(i, t) {
    if (ui(i, Wt)) throw new Qi(Ia);
    return t.facade = i, wc(i, Wt, t), t;
  }, Se = function(i) {
    return ui(i, Wt) ? i[Wt] : {};
  }, pr = function(i) {
    return ui(i, Wt);
  };
}
var Or = {
  set: fr,
  get: Se,
  has: pr,
  enforce: Ac,
  getterFor: Ec
}, Rn = B, Cc = D, Pc = F, Xe = gt, $i = ht, Nc = Tr.CONFIGURABLE, Mc = Pn, tu = Or, Rc = tu.enforce, Vc = tu.get, _a = String, sr = Object.defineProperty, kc = Rn("".slice), Ic = Rn("".replace), _c = Rn([].join), Lc = $i && !Cc(function() {
  return sr(function() {
  }, "length", { value: 8 }).length !== 8;
}), Dc = String(String).split("String"), Bc = Zo.exports = function(i, t, e) {
  kc(_a(t), 0, 7) === "Symbol(" && (t = "[" + Ic(_a(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!Xe(i, "name") || Nc && i.name !== t) && ($i ? sr(i, "name", { value: t, configurable: !0 }) : i.name = t), Lc && e && Xe(e, "arity") && i.length !== e.arity && sr(i, "length", { value: e.arity });
  try {
    e && Xe(e, "constructor") && e.constructor ? $i && sr(i, "prototype", { writable: !1 }) : i.prototype && (i.prototype = void 0);
  } catch {
  }
  var r = Rc(i);
  return Xe(r, "source") || (r.source = _c(Dc, typeof t == "string" ? t : "")), i;
};
Function.prototype.toString = Bc(function() {
  return Pc(this) && Vc(this).source || Mc(this);
}, "toString");
var eu = Zo.exports, Fc = F, jc = St, Uc = eu, zc = On, zt = function(i, t, e, r) {
  r || (r = {});
  var n = r.enumerable, a = r.name !== void 0 ? r.name : t;
  if (Fc(e) && Uc(e, a, r), r.global)
    n ? i[t] = e : zc(t, e);
  else {
    try {
      r.unsafe ? i[t] && (n = !0) : delete i[t];
    } catch {
    }
    n ? i[t] = e : jc.f(i, t, {
      value: e,
      enumerable: !1,
      configurable: !r.nonConfigurable,
      writable: !r.nonWritable
    });
  }
  return i;
}, ru = {}, Hc = Math.ceil, Xc = Math.floor, Yc = Math.trunc || function(i) {
  var t = +i;
  return (t > 0 ? Xc : Hc)(t);
}, Wc = Yc, Ar = function(i) {
  var t = +i;
  return t !== t || t === 0 ? 0 : Wc(t);
}, qc = Ar, Gc = Math.max, Qc = Math.min, $c = function(i, t) {
  var e = qc(i);
  return e < 0 ? Gc(e + t, 0) : Qc(e, t);
}, Zc = Ar, Jc = Math.min, ue = function(i) {
  var t = Zc(i);
  return t > 0 ? Jc(t, 9007199254740991) : 0;
}, Kc = ue, Vn = function(i) {
  return Kc(i.length);
}, tg = Ee, eg = $c, rg = Vn, La = function(i) {
  return function(t, e, r) {
    var n = tg(t), a = rg(n);
    if (a === 0) return !i && -1;
    var o = eg(r, a), s;
    if (i && e !== e) {
      for (; a > o; )
        if (s = n[o++], s !== s) return !0;
    } else for (; a > o; o++)
      if ((i || o in n) && n[o] === e) return i || o || 0;
    return !i && -1;
  };
}, iu = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: La(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: La(!1)
}, ig = B, li = gt, ng = Ee, ag = iu.indexOf, sg = Mn, Da = ig([].push), nu = function(i, t) {
  var e = ng(i), r = 0, n = [], a;
  for (a in e) !li(sg, a) && li(e, a) && Da(n, a);
  for (; t.length > r; ) li(e, a = t[r++]) && (~ag(n, a) || Da(n, a));
  return n;
}, kn = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], og = nu, ug = kn, hg = ug.concat("length", "prototype");
ru.f = Object.getOwnPropertyNames || function(i) {
  return og(i, hg);
};
var au = {};
au.f = Object.getOwnPropertySymbols;
var lg = Ut, cg = B, gg = ru, fg = au, pg = K, dg = cg([].concat), mg = lg("Reflect", "ownKeys") || function(i) {
  var t = gg.f(pg(i)), e = fg.f;
  return e ? dg(t, e(i)) : t;
}, Ba = gt, yg = mg, vg = Ae, xg = St, bg = function(i, t, e) {
  for (var r = yg(t), n = xg.f, a = vg.f, o = 0; o < r.length; o++) {
    var s = r[o];
    !Ba(i, s) && !(e && Ba(e, s)) && n(i, s, a(t, s));
  }
}, wg = D, Sg = F, Tg = /#|\.prototype\./, Ne = function(i, t) {
  var e = Ag[Og(i)];
  return e === Cg ? !0 : e === Eg ? !1 : Sg(t) ? wg(t) : !!t;
}, Og = Ne.normalize = function(i) {
  return String(i).replace(Tg, ".").toLowerCase();
}, Ag = Ne.data = {}, Eg = Ne.NATIVE = "N", Cg = Ne.POLYFILL = "P", su = Ne, Ye = _, Pg = Ae.f, Ng = Pe, Mg = zt, Rg = On, Vg = bg, kg = su, tt = function(i, t) {
  var e = i.target, r = i.global, n = i.stat, a, o, s, u, h, l;
  if (r ? o = Ye : n ? o = Ye[e] || Rg(e, {}) : o = Ye[e] && Ye[e].prototype, o) for (s in t) {
    if (h = t[s], i.dontCallGetSet ? (l = Pg(o, s), u = l && l.value) : u = o[s], a = kg(r ? s : e + (n ? "." : "#") + s, i.forced), !a && u !== void 0) {
      if (typeof h == typeof u) continue;
      Vg(h, u);
    }
    (i.sham || u && u.sham) && Ng(h, "sham", !0), Mg(o, s, h, i);
  }
}, ge = _, Ig = Ce, _g = Ft, We = function(i) {
  return Ig.slice(0, i.length) === i;
}, ou = function() {
  return We("Bun/") ? "BUN" : We("Cloudflare-Workers") ? "CLOUDFLARE" : We("Deno/") ? "DENO" : We("Node.js/") ? "NODE" : ge.Bun && typeof Bun.version == "string" ? "BUN" : ge.Deno && typeof Deno.version == "object" ? "DENO" : _g(ge.process) === "process" ? "NODE" : ge.window && ge.document ? "BROWSER" : "REST";
}(), Lg = ou, Er = Lg === "NODE", Dg = B, Bg = wt, Fg = function(i, t, e) {
  try {
    return Dg(Bg(Object.getOwnPropertyDescriptor(i, t)[e]));
  } catch {
  }
}, jg = ct, Ug = function(i) {
  return jg(i) || i === null;
}, zg = Ug, Hg = String, Xg = TypeError, Yg = function(i) {
  if (zg(i)) return i;
  throw new Xg("Can't set " + Hg(i) + " as a prototype");
}, Wg = Fg, qg = ct, Gg = lt, Qg = Yg, uu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var i = !1, t = {}, e;
  try {
    e = Wg(Object.prototype, "__proto__", "set"), e(t, []), i = t instanceof Array;
  } catch {
  }
  return function(r, n) {
    return Gg(r), Qg(n), qg(r) && (i ? e(r, n) : r.__proto__ = n), r;
  };
}() : void 0), $g = St.f, Zg = gt, Jg = X, Fa = Jg("toStringTag"), Cr = function(i, t, e) {
  i && !e && (i = i.prototype), i && !Zg(i, Fa) && $g(i, Fa, { configurable: !0, value: t });
}, ja = eu, Kg = St, tf = function(i, t, e) {
  return e.get && ja(e.get, t, { getter: !0 }), e.set && ja(e.set, t, { setter: !0 }), Kg.f(i, t, e);
}, ef = Ut, rf = tf, nf = X, af = ht, Ua = nf("species"), sf = function(i) {
  var t = ef(i);
  af && t && !t[Ua] && rf(t, Ua, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, of = xr, uf = TypeError, hf = function(i, t) {
  if (of(t, i)) return i;
  throw new uf("Incorrect invocation");
}, lf = X, cf = lf("toStringTag"), hu = {};
hu[cf] = "z";
var gf = String(hu) === "[object z]", ff = gf, pf = F, or = Ft, df = X, mf = df("toStringTag"), yf = Object, vf = or(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", xf = function(i, t) {
  try {
    return i[t];
  } catch {
  }
}, In = ff ? or : function(i) {
  var t, e, r;
  return i === void 0 ? "Undefined" : i === null ? "Null" : typeof (e = xf(t = yf(i), mf)) == "string" ? e : vf ? or(t) : (r = or(t)) === "Object" && pf(t.callee) ? "Arguments" : r;
}, bf = B, wf = D, lu = F, Sf = In, Tf = Ut, Of = Pn, cu = function() {
}, gu = Tf("Reflect", "construct"), _n = /^\s*(?:class|function)\b/, Af = bf(_n.exec), Ef = !_n.test(cu), fe = function(i) {
  if (!lu(i)) return !1;
  try {
    return gu(cu, [], i), !0;
  } catch {
    return !1;
  }
}, fu = function(i) {
  if (!lu(i)) return !1;
  switch (Sf(i)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Ef || !!Af(_n, Of(i));
  } catch {
    return !0;
  }
};
fu.sham = !0;
var Cf = !gu || wf(function() {
  var i;
  return fe(fe.call) || !fe(Object) || !fe(function() {
    i = !0;
  }) || i;
}) ? fu : fe, Pf = Cf, Nf = br, Mf = TypeError, Rf = function(i) {
  if (Pf(i)) return i;
  throw new Mf(Nf(i) + " is not a constructor");
}, za = K, Vf = Rf, kf = jt, If = X, _f = If("species"), pu = function(i, t) {
  var e = za(i).constructor, r;
  return e === void 0 || kf(r = za(e)[_f]) ? t : Vf(r);
}, Lf = vr, du = Function.prototype, Ha = du.apply, Xa = du.call, mu = typeof Reflect == "object" && Reflect.apply || (Lf ? Xa.bind(Ha) : function() {
  return Xa.apply(Ha, arguments);
}), Df = Ft, Bf = B, Pr = function(i) {
  if (Df(i) === "Function") return Bf(i);
}, Ya = Pr, Ff = wt, jf = vr, Uf = Ya(Ya.bind), Ln = function(i, t) {
  return Ff(i), t === void 0 ? i : jf ? Uf(i, t) : function() {
    return i.apply(t, arguments);
  };
}, zf = Ut, yu = zf("document", "documentElement"), Hf = B, Xf = Hf([].slice), Yf = TypeError, Wf = function(i, t) {
  if (i < t) throw new Yf("Not enough arguments");
  return i;
}, qf = Ce, vu = /(?:ipad|iphone|ipod).*applewebkit/i.test(qf), it = _, Gf = mu, Qf = Ln, Wa = F, $f = gt, xu = D, qa = yu, Zf = Xf, Ga = Sr, Jf = Wf, Kf = vu, tp = Er, Zi = it.setImmediate, Ji = it.clearImmediate, ep = it.process, ci = it.Dispatch, rp = it.Function, Qa = it.MessageChannel, ip = it.String, gi = 0, be = {}, $a = "onreadystatechange", Te, Vt, fi, pi;
xu(function() {
  Te = it.location;
});
var Dn = function(i) {
  if ($f(be, i)) {
    var t = be[i];
    delete be[i], t();
  }
}, di = function(i) {
  return function() {
    Dn(i);
  };
}, Za = function(i) {
  Dn(i.data);
}, Ja = function(i) {
  it.postMessage(ip(i), Te.protocol + "//" + Te.host);
};
(!Zi || !Ji) && (Zi = function(i) {
  Jf(arguments.length, 1);
  var t = Wa(i) ? i : rp(i), e = Zf(arguments, 1);
  return be[++gi] = function() {
    Gf(t, void 0, e);
  }, Vt(gi), gi;
}, Ji = function(i) {
  delete be[i];
}, tp ? Vt = function(i) {
  ep.nextTick(di(i));
} : ci && ci.now ? Vt = function(i) {
  ci.now(di(i));
} : Qa && !Kf ? (fi = new Qa(), pi = fi.port2, fi.port1.onmessage = Za, Vt = Qf(pi.postMessage, pi)) : it.addEventListener && Wa(it.postMessage) && !it.importScripts && Te && Te.protocol !== "file:" && !xu(Ja) ? (Vt = Ja, it.addEventListener("message", Za, !1)) : $a in Ga("script") ? Vt = function(i) {
  qa.appendChild(Ga("script"))[$a] = function() {
    qa.removeChild(this), Dn(i);
  };
} : Vt = function(i) {
  setTimeout(di(i), 0);
});
var bu = {
  set: Zi,
  clear: Ji
}, Ka = _, np = ht, ap = Object.getOwnPropertyDescriptor, sp = function(i) {
  if (!np) return Ka[i];
  var t = ap(Ka, i);
  return t && t.value;
}, wu = function() {
  this.head = null, this.tail = null;
};
wu.prototype = {
  add: function(i) {
    var t = { item: i, next: null }, e = this.tail;
    e ? e.next = t : this.head = t, this.tail = t;
  },
  get: function() {
    var i = this.head;
    if (i) {
      var t = this.head = i.next;
      return t === null && (this.tail = null), i.item;
    }
  }
};
var Su = wu, op = Ce, up = /ipad|iphone|ipod/i.test(op) && typeof Pebble < "u", hp = Ce, lp = /web0s(?!.*chrome)/i.test(hp), ne = _, cp = sp, ts = Ln, mi = bu.set, gp = Su, fp = vu, pp = up, dp = lp, yi = Er, es = ne.MutationObserver || ne.WebKitMutationObserver, rs = ne.document, is = ne.process, qe = ne.Promise, Ki = cp("queueMicrotask"), qt, vi, xi, Ge, ns;
if (!Ki) {
  var Qe = new gp(), $e = function() {
    var i, t;
    for (yi && (i = is.domain) && i.exit(); t = Qe.get(); ) try {
      t();
    } catch (e) {
      throw Qe.head && qt(), e;
    }
    i && i.enter();
  };
  !fp && !yi && !dp && es && rs ? (vi = !0, xi = rs.createTextNode(""), new es($e).observe(xi, { characterData: !0 }), qt = function() {
    xi.data = vi = !vi;
  }) : !pp && qe && qe.resolve ? (Ge = qe.resolve(void 0), Ge.constructor = qe, ns = ts(Ge.then, Ge), qt = function() {
    ns($e);
  }) : yi ? qt = function() {
    is.nextTick($e);
  } : (mi = ts(mi, ne), qt = function() {
    mi($e);
  }), Ki = function(i) {
    Qe.head || qt(), Qe.add(i);
  };
}
var mp = Ki, yp = function(i, t) {
  try {
    arguments.length === 1 ? console.error(i) : console.error(i, t);
  } catch {
  }
}, Bn = function(i) {
  try {
    return { error: !1, value: i() };
  } catch (t) {
    return { error: !0, value: t };
  }
}, vp = _, Nr = vp.Promise, xp = _, we = Nr, bp = F, wp = su, Sp = Pn, Tp = X, as = ou, bi = Tn;
we && we.prototype;
var Op = Tp("species"), tn = !1, Tu = bp(xp.PromiseRejectionEvent), Ap = wp("Promise", function() {
  var i = Sp(we), t = i !== String(we);
  if (!t && bi === 66) return !0;
  if (!bi || bi < 51 || !/native code/.test(i)) {
    var e = new we(function(a) {
      a(1);
    }), r = function(a) {
      a(function() {
      }, function() {
      });
    }, n = e.constructor = {};
    if (n[Op] = r, tn = e.then(function() {
    }) instanceof r, !tn) return !0;
  }
  return !t && (as === "BROWSER" || as === "DENO") && !Tu;
}), Me = {
  CONSTRUCTOR: Ap,
  REJECTION_EVENT: Tu,
  SUBCLASSING: tn
}, he = {}, ss = wt, Ep = TypeError, Cp = function(i) {
  var t, e;
  this.promise = new i(function(r, n) {
    if (t !== void 0 || e !== void 0) throw new Ep("Bad Promise constructor");
    t = r, e = n;
  }), this.resolve = ss(t), this.reject = ss(e);
};
he.f = function(i) {
  return new Cp(i);
};
var Pp = tt, dr = Er, Et = _, ae = W, os = zt, us = uu, Np = Cr, Mp = sf, Rp = wt, ur = F, Vp = ct, kp = hf, Ip = pu, Ou = bu.set, Fn = mp, _p = yp, Lp = Bn, Dp = Su, Au = Or, mr = Nr, jn = Me, Eu = he, Mr = "Promise", Cu = jn.CONSTRUCTOR, Bp = jn.REJECTION_EVENT, Fp = jn.SUBCLASSING, wi = Au.getterFor(Mr), jp = Au.set, $t = mr && mr.prototype, Lt = mr, Ze = $t, Pu = Et.TypeError, en = Et.document, Un = Et.process, rn = Eu.f, Up = rn, zp = !!(en && en.createEvent && Et.dispatchEvent), Nu = "unhandledrejection", Hp = "rejectionhandled", hs = 0, Mu = 1, Xp = 2, zn = 1, Ru = 2, Je, ls, Yp, cs, Vu = function(i) {
  var t;
  return Vp(i) && ur(t = i.then) ? t : !1;
}, ku = function(i, t) {
  var e = t.value, r = t.state === Mu, n = r ? i.ok : i.fail, a = i.resolve, o = i.reject, s = i.domain, u, h, l;
  try {
    n ? (r || (t.rejection === Ru && qp(t), t.rejection = zn), n === !0 ? u = e : (s && s.enter(), u = n(e), s && (s.exit(), l = !0)), u === i.promise ? o(new Pu("Promise-chain cycle")) : (h = Vu(u)) ? ae(h, u, a, o) : a(u)) : o(e);
  } catch (g) {
    s && !l && s.exit(), o(g);
  }
}, Iu = function(i, t) {
  i.notified || (i.notified = !0, Fn(function() {
    for (var e = i.reactions, r; r = e.get(); )
      ku(r, i);
    i.notified = !1, t && !i.rejection && Wp(i);
  }));
}, _u = function(i, t, e) {
  var r, n;
  zp ? (r = en.createEvent("Event"), r.promise = t, r.reason = e, r.initEvent(i, !1, !0), Et.dispatchEvent(r)) : r = { promise: t, reason: e }, !Bp && (n = Et["on" + i]) ? n(r) : i === Nu && _p("Unhandled promise rejection", e);
}, Wp = function(i) {
  ae(Ou, Et, function() {
    var t = i.facade, e = i.value, r = gs(i), n;
    if (r && (n = Lp(function() {
      dr ? Un.emit("unhandledRejection", e, t) : _u(Nu, t, e);
    }), i.rejection = dr || gs(i) ? Ru : zn, n.error))
      throw n.value;
  });
}, gs = function(i) {
  return i.rejection !== zn && !i.parent;
}, qp = function(i) {
  ae(Ou, Et, function() {
    var t = i.facade;
    dr ? Un.emit("rejectionHandled", t) : _u(Hp, t, i.value);
  });
}, Kt = function(i, t, e) {
  return function(r) {
    i(t, r, e);
  };
}, ee = function(i, t, e) {
  i.done || (i.done = !0, e && (i = e), i.value = t, i.state = Xp, Iu(i, !0));
}, nn = function(i, t, e) {
  if (!i.done) {
    i.done = !0, e && (i = e);
    try {
      if (i.facade === t) throw new Pu("Promise can't be resolved itself");
      var r = Vu(t);
      r ? Fn(function() {
        var n = { done: !1 };
        try {
          ae(
            r,
            t,
            Kt(nn, n, i),
            Kt(ee, n, i)
          );
        } catch (a) {
          ee(n, a, i);
        }
      }) : (i.value = t, i.state = Mu, Iu(i, !1));
    } catch (n) {
      ee({ done: !1 }, n, i);
    }
  }
};
if (Cu && (Lt = function(i) {
  kp(this, Ze), Rp(i), ae(Je, this);
  var t = wi(this);
  try {
    i(Kt(nn, t), Kt(ee, t));
  } catch (e) {
    ee(t, e);
  }
}, Ze = Lt.prototype, Je = function(i) {
  jp(this, {
    type: Mr,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new Dp(),
    rejection: !1,
    state: hs,
    value: null
  });
}, Je.prototype = os(Ze, "then", function(i, t) {
  var e = wi(this), r = rn(Ip(this, Lt));
  return e.parent = !0, r.ok = ur(i) ? i : !0, r.fail = ur(t) && t, r.domain = dr ? Un.domain : void 0, e.state === hs ? e.reactions.add(r) : Fn(function() {
    ku(r, e);
  }), r.promise;
}), ls = function() {
  var i = new Je(), t = wi(i);
  this.promise = i, this.resolve = Kt(nn, t), this.reject = Kt(ee, t);
}, Eu.f = rn = function(i) {
  return i === Lt || i === Yp ? new ls(i) : Up(i);
}, ur(mr) && $t !== Object.prototype)) {
  cs = $t.then, Fp || os($t, "then", function(i, t) {
    var e = this;
    return new Lt(function(r, n) {
      ae(cs, e, r, n);
    }).then(i, t);
  }, { unsafe: !0 });
  try {
    delete $t.constructor;
  } catch {
  }
  us && us($t, Ze);
}
Pp({ global: !0, constructor: !0, wrap: !0, forced: Cu }, {
  Promise: Lt
});
Np(Lt, Mr, !1);
Mp(Mr);
var Re = {}, Gp = X, Qp = Re, $p = Gp("iterator"), Zp = Array.prototype, Jp = function(i) {
  return i !== void 0 && (Qp.Array === i || Zp[$p] === i);
}, Kp = In, fs = oe, td = jt, ed = Re, rd = X, id = rd("iterator"), Lu = function(i) {
  if (!td(i)) return fs(i, id) || fs(i, "@@iterator") || ed[Kp(i)];
}, nd = W, ad = wt, sd = K, od = br, ud = Lu, hd = TypeError, ld = function(i, t) {
  var e = arguments.length < 2 ? ud(i) : t;
  if (ad(e)) return sd(nd(e, i));
  throw new hd(od(i) + " is not iterable");
}, cd = W, ps = K, gd = oe, fd = function(i, t, e) {
  var r, n;
  ps(i);
  try {
    if (r = gd(i, "return"), !r) {
      if (t === "throw") throw e;
      return e;
    }
    r = cd(r, i);
  } catch (a) {
    n = !0, r = a;
  }
  if (t === "throw") throw e;
  if (n) throw r;
  return ps(r), e;
}, pd = Ln, dd = W, md = K, yd = br, vd = Jp, xd = Vn, ds = xr, bd = ld, wd = Lu, ms = fd, Sd = TypeError, hr = function(i, t) {
  this.stopped = i, this.result = t;
}, ys = hr.prototype, Du = function(i, t, e) {
  var r = e && e.that, n = !!(e && e.AS_ENTRIES), a = !!(e && e.IS_RECORD), o = !!(e && e.IS_ITERATOR), s = !!(e && e.INTERRUPTED), u = pd(t, r), h, l, g, f, c, d, p, m = function(b) {
    return h && ms(h, "normal", b), new hr(!0, b);
  }, y = function(b) {
    return n ? (md(b), s ? u(b[0], b[1], m) : u(b[0], b[1])) : s ? u(b, m) : u(b);
  };
  if (a)
    h = i.iterator;
  else if (o)
    h = i;
  else {
    if (l = wd(i), !l) throw new Sd(yd(i) + " is not iterable");
    if (vd(l)) {
      for (g = 0, f = xd(i); f > g; g++)
        if (c = y(i[g]), c && ds(ys, c)) return c;
      return new hr(!1);
    }
    h = bd(i, l);
  }
  for (d = a ? i.next : h.next; !(p = dd(d, h)).done; ) {
    try {
      c = y(p.value);
    } catch (b) {
      ms(h, "throw", b);
    }
    if (typeof c == "object" && c && ds(ys, c)) return c;
  }
  return new hr(!1);
}, Td = X, Bu = Td("iterator"), Fu = !1;
try {
  var Od = 0, vs = {
    next: function() {
      return { done: !!Od++ };
    },
    return: function() {
      Fu = !0;
    }
  };
  vs[Bu] = function() {
    return this;
  }, Array.from(vs, function() {
    throw 2;
  });
} catch {
}
var Ad = function(i, t) {
  try {
    if (!t && !Fu) return !1;
  } catch {
    return !1;
  }
  var e = !1;
  try {
    var r = {};
    r[Bu] = function() {
      return {
        next: function() {
          return { done: e = !0 };
        }
      };
    }, i(r);
  } catch {
  }
  return e;
}, Ed = Nr, Cd = Ad, Pd = Me.CONSTRUCTOR, ju = Pd || !Cd(function(i) {
  Ed.all(i).then(void 0, function() {
  });
}), Nd = tt, Md = W, Rd = wt, Vd = he, kd = Bn, Id = Du, _d = ju;
Nd({ target: "Promise", stat: !0, forced: _d }, {
  all: function(i) {
    var t = this, e = Vd.f(t), r = e.resolve, n = e.reject, a = kd(function() {
      var o = Rd(t.resolve), s = [], u = 0, h = 1;
      Id(i, function(l) {
        var g = u++, f = !1;
        h++, Md(o, t, l).then(function(c) {
          f || (f = !0, s[g] = c, --h || r(s));
        }, n);
      }), --h || r(s);
    });
    return a.error && n(a.value), e.promise;
  }
});
var Ld = tt, Dd = Me.CONSTRUCTOR, an = Nr, Bd = Ut, Fd = F, jd = zt, xs = an && an.prototype;
Ld({ target: "Promise", proto: !0, forced: Dd, real: !0 }, {
  catch: function(i) {
    return this.then(void 0, i);
  }
});
if (Fd(an)) {
  var bs = Bd("Promise").prototype.catch;
  xs.catch !== bs && jd(xs, "catch", bs, { unsafe: !0 });
}
var Ud = tt, zd = W, Hd = wt, Xd = he, Yd = Bn, Wd = Du, qd = ju;
Ud({ target: "Promise", stat: !0, forced: qd }, {
  race: function(i) {
    var t = this, e = Xd.f(t), r = e.reject, n = Yd(function() {
      var a = Hd(t.resolve);
      Wd(i, function(o) {
        zd(a, t, o).then(e.resolve, r);
      });
    });
    return n.error && r(n.value), e.promise;
  }
});
var Gd = tt, Qd = he, $d = Me.CONSTRUCTOR;
Gd({ target: "Promise", stat: !0, forced: $d }, {
  reject: function(i) {
    var t = Qd.f(this), e = t.reject;
    return e(i), t.promise;
  }
});
var Zd = K, Jd = ct, Kd = he, tm = function(i, t) {
  if (Zd(i), Jd(t) && t.constructor === i) return t;
  var e = Kd.f(i), r = e.resolve;
  return r(t), e.promise;
}, em = tt, rm = Ut, im = Me.CONSTRUCTOR, nm = tm;
rm("Promise");
em({ target: "Promise", stat: !0, forced: im }, {
  resolve: function(i) {
    return nm(this, i);
  }
});
function ws(i, t, e, r, n, a, o) {
  try {
    var s = i[a](o), u = s.value;
  } catch (h) {
    return void e(h);
  }
  s.done ? t(u) : Promise.resolve(u).then(r, n);
}
function bt(i) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, n) {
      var a = i.apply(t, e);
      function o(u) {
        ws(a, r, n, o, s, "next", u);
      }
      function s(u) {
        ws(a, r, n, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var am = In, sm = String, mt = function(i) {
  if (am(i) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return sm(i);
}, om = K, Uu = function() {
  var i = om(this), t = "";
  return i.hasIndices && (t += "d"), i.global && (t += "g"), i.ignoreCase && (t += "i"), i.multiline && (t += "m"), i.dotAll && (t += "s"), i.unicode && (t += "u"), i.unicodeSets && (t += "v"), i.sticky && (t += "y"), t;
}, Hn = D, um = _, Xn = um.RegExp, Yn = Hn(function() {
  var i = Xn("a", "y");
  return i.lastIndex = 2, i.exec("abcd") !== null;
}), hm = Yn || Hn(function() {
  return !Xn("a", "y").sticky;
}), lm = Yn || Hn(function() {
  var i = Xn("^r", "gy");
  return i.lastIndex = 2, i.exec("str") !== null;
}), zu = {
  BROKEN_CARET: lm,
  MISSED_STICKY: hm,
  UNSUPPORTED_Y: Yn
}, Hu = {}, cm = nu, gm = kn, fm = Object.keys || function(i) {
  return cm(i, gm);
}, pm = ht, dm = $o, mm = St, ym = K, vm = Ee, xm = fm;
Hu.f = pm && !dm ? Object.defineProperties : function(i, t) {
  ym(i);
  for (var e = vm(t), r = xm(t), n = r.length, a = 0, o; n > a; ) mm.f(i, o = r[a++], e[o]);
  return i;
};
var bm = K, wm = Hu, Ss = kn, Sm = Mn, Tm = yu, Om = Sr, Am = Nn, Ts = ">", Os = "<", sn = "prototype", on = "script", Xu = Am("IE_PROTO"), Si = function() {
}, Yu = function(i) {
  return Os + on + Ts + i + Os + "/" + on + Ts;
}, As = function(i) {
  i.write(Yu("")), i.close();
  var t = i.parentWindow.Object;
  return i = null, t;
}, Em = function() {
  var i = Om("iframe"), t = "java" + on + ":", e;
  return i.style.display = "none", Tm.appendChild(i), i.src = String(t), e = i.contentWindow.document, e.open(), e.write(Yu("document.F=Object")), e.close(), e.F;
}, Ke, lr = function() {
  try {
    Ke = new ActiveXObject("htmlfile");
  } catch {
  }
  lr = typeof document < "u" ? document.domain && Ke ? As(Ke) : Em() : As(Ke);
  for (var i = Ss.length; i--; ) delete lr[sn][Ss[i]];
  return lr();
};
Sm[Xu] = !0;
var Wn = Object.create || function(i, t) {
  var e;
  return i !== null ? (Si[sn] = bm(i), e = new Si(), Si[sn] = null, e[Xu] = i) : e = lr(), t === void 0 ? e : wm.f(e, t);
}, Cm = D, Pm = _, Nm = Pm.RegExp, Mm = Cm(function() {
  var i = Nm(".", "s");
  return !(i.dotAll && i.test(`
`) && i.flags === "s");
}), Rm = D, Vm = _, km = Vm.RegExp, Im = Rm(function() {
  var i = km("(?<a>b)", "g");
  return i.exec("b").groups.a !== "b" || "b".replace(i, "$<a>c") !== "bc";
}), te = W, Rr = B, _m = mt, Lm = Uu, Dm = zu, Bm = En, Fm = Wn, jm = Or.get, Um = Mm, zm = Im, Hm = Bm("native-string-replace", String.prototype.replace), yr = RegExp.prototype.exec, un = yr, Xm = Rr("".charAt), Ym = Rr("".indexOf), Wm = Rr("".replace), Ti = Rr("".slice), hn = function() {
  var i = /a/, t = /b*/g;
  return te(yr, i, "a"), te(yr, t, "a"), i.lastIndex !== 0 || t.lastIndex !== 0;
}(), Wu = Dm.BROKEN_CARET, ln = /()??/.exec("")[1] !== void 0, qm = hn || ln || Wu || Um || zm;
qm && (un = function(i) {
  var t = this, e = jm(t), r = _m(i), n = e.raw, a, o, s, u, h, l, g;
  if (n)
    return n.lastIndex = t.lastIndex, a = te(un, n, r), t.lastIndex = n.lastIndex, a;
  var f = e.groups, c = Wu && t.sticky, d = te(Lm, t), p = t.source, m = 0, y = r;
  if (c && (d = Wm(d, "y", ""), Ym(d, "g") === -1 && (d += "g"), y = Ti(r, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && Xm(r, t.lastIndex - 1) !== `
`) && (p = "(?: " + p + ")", y = " " + y, m++), o = new RegExp("^(?:" + p + ")", d)), ln && (o = new RegExp("^" + p + "$(?!\\s)", d)), hn && (s = t.lastIndex), u = te(yr, c ? o : t, y), c ? u ? (u.input = Ti(u.input, m), u[0] = Ti(u[0], m), u.index = t.lastIndex, t.lastIndex += u[0].length) : t.lastIndex = 0 : hn && u && (t.lastIndex = t.global ? u.index + u[0].length : s), ln && u && u.length > 1 && te(Hm, u[0], o, function() {
    for (h = 1; h < arguments.length - 2; h++)
      arguments[h] === void 0 && (u[h] = void 0);
  }), u && f)
    for (u.groups = l = Fm(null), h = 0; h < f.length; h++)
      g = f[h], l[g[0]] = u[g[1]];
  return u;
});
var qn = un, Gm = tt, Es = qn;
Gm({ target: "RegExp", proto: !0, forced: /./.exec !== Es }, {
  exec: Es
});
var Cs = W, Ps = zt, Qm = qn, Ns = D, qu = X, $m = Pe, Zm = qu("species"), Oi = RegExp.prototype, Gn = function(i, t, e, r) {
  var n = qu(i), a = !Ns(function() {
    var h = {};
    return h[n] = function() {
      return 7;
    }, ""[i](h) !== 7;
  }), o = a && !Ns(function() {
    var h = !1, l = /a/;
    return i === "split" && (l = {}, l.constructor = {}, l.constructor[Zm] = function() {
      return l;
    }, l.flags = "", l[n] = /./[n]), l.exec = function() {
      return h = !0, null;
    }, l[n](""), !h;
  });
  if (!a || !o || e) {
    var s = /./[n], u = t(n, ""[i], function(h, l, g, f, c) {
      var d = l.exec;
      return d === Qm || d === Oi.exec ? a && !c ? { done: !0, value: Cs(s, l, g, f) } : { done: !0, value: Cs(h, g, l, f) } : { done: !1 };
    });
    Ps(String.prototype, i, u[0]), Ps(Oi, n, u[1]);
  }
  r && $m(Oi[n], "sham", !0);
}, Qn = B, Jm = Ar, Km = mt, ty = lt, ey = Qn("".charAt), Ms = Qn("".charCodeAt), ry = Qn("".slice), Rs = function(i) {
  return function(t, e) {
    var r = Km(ty(t)), n = Jm(e), a = r.length, o, s;
    return n < 0 || n >= a ? i ? "" : void 0 : (o = Ms(r, n), o < 55296 || o > 56319 || n + 1 === a || (s = Ms(r, n + 1)) < 56320 || s > 57343 ? i ? ey(r, n) : o : i ? ry(r, n, n + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, iy = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Rs(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Rs(!0)
}, ny = iy.charAt, $n = function(i, t, e) {
  return t + (e ? ny(i, t).length : 1);
}, Vs = W, ay = K, sy = F, oy = Ft, uy = qn, hy = TypeError, Zn = function(i, t) {
  var e = i.exec;
  if (sy(e)) {
    var r = Vs(e, i, t);
    return r !== null && ay(r), r;
  }
  if (oy(i) === "RegExp") return Vs(uy, i, t);
  throw new hy("RegExp#exec called on incompatible receiver");
}, ly = W, cy = Gn, gy = K, fy = jt, py = ue, Ai = mt, dy = lt, my = oe, yy = $n, ks = Zn;
cy("match", function(i, t, e) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function(r) {
      var n = dy(this), a = fy(r) ? void 0 : my(r, i);
      return a ? ly(a, r, n) : new RegExp(r)[i](Ai(n));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(r) {
      var n = gy(this), a = Ai(r), o = e(t, n, a);
      if (o.done) return o.value;
      if (!n.global) return ks(n, a);
      var s = n.unicode;
      n.lastIndex = 0;
      for (var u = [], h = 0, l; (l = ks(n, a)) !== null; ) {
        var g = Ai(l[0]);
        u[h] = g, g === "" && (n.lastIndex = yy(a, py(n.lastIndex), s)), h++;
      }
      return h === 0 ? null : u;
    }
  ];
});
var Jn = B, vy = wr, xy = Math.floor, Ei = Jn("".charAt), by = Jn("".replace), Ci = Jn("".slice), wy = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Sy = /\$([$&'`]|\d{1,2})/g, Ty = function(i, t, e, r, n, a) {
  var o = e + i.length, s = r.length, u = Sy;
  return n !== void 0 && (n = vy(n), u = wy), by(a, u, function(h, l) {
    var g;
    switch (Ei(l, 0)) {
      case "$":
        return "$";
      case "&":
        return i;
      case "`":
        return Ci(t, 0, e);
      case "'":
        return Ci(t, o);
      case "<":
        g = n[Ci(l, 1, -1)];
        break;
      default:
        var f = +l;
        if (f === 0) return h;
        if (f > s) {
          var c = xy(f / 10);
          return c === 0 ? h : c <= s ? r[c - 1] === void 0 ? Ei(l, 1) : r[c - 1] + Ei(l, 1) : h;
        }
        g = r[f - 1];
    }
    return g === void 0 ? "" : g;
  });
}, Oy = mu, Is = W, Vr = B, Ay = Gn, Ey = D, Cy = K, Py = F, Ny = jt, My = Ar, Ry = ue, Gt = mt, Vy = lt, ky = $n, Iy = oe, _y = Ty, Ly = Zn, Dy = X, cn = Dy("replace"), By = Math.max, Fy = Math.min, jy = Vr([].concat), Pi = Vr([].push), _s = Vr("".indexOf), Ls = Vr("".slice), Uy = function(i) {
  return i === void 0 ? i : String(i);
}, zy = function() {
  return "a".replace(/./, "$0") === "$0";
}(), Ds = function() {
  return /./[cn] ? /./[cn]("a", "$0") === "" : !1;
}(), Hy = !Ey(function() {
  var i = /./;
  return i.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(i, "$<a>") !== "7";
});
Ay("replace", function(i, t, e) {
  var r = Ds ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(n, a) {
      var o = Vy(this), s = Ny(n) ? void 0 : Iy(n, cn);
      return s ? Is(s, n, o, a) : Is(t, Gt(o), n, a);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(n, a) {
      var o = Cy(this), s = Gt(n);
      if (typeof a == "string" && _s(a, r) === -1 && _s(a, "$<") === -1) {
        var u = e(t, o, s, a);
        if (u.done) return u.value;
      }
      var h = Py(a);
      h || (a = Gt(a));
      var l = o.global, g;
      l && (g = o.unicode, o.lastIndex = 0);
      for (var f = [], c; c = Ly(o, s), !(c === null || (Pi(f, c), !l)); ) {
        var d = Gt(c[0]);
        d === "" && (o.lastIndex = ky(s, Ry(o.lastIndex), g));
      }
      for (var p = "", m = 0, y = 0; y < f.length; y++) {
        c = f[y];
        for (var b = Gt(c[0]), x = By(Fy(My(c.index), s.length), 0), w = [], A, O = 1; O < c.length; O++) Pi(w, Uy(c[O]));
        var S = c.groups;
        if (h) {
          var C = jy([b], w, x, s);
          S !== void 0 && Pi(C, S), A = Gt(Oy(a, void 0, C));
        } else
          A = _y(b, s, x, w, S, a);
        x >= m && (p += Ls(s, m, x) + A, m = x + b.length);
      }
      return p + Ls(s, m);
    }
  ];
}, !Hy || !zy || Ds);
var Xy = ct, Yy = Ft, Wy = X, qy = Wy("match"), Gy = function(i) {
  var t;
  return Xy(i) && ((t = i[qy]) !== void 0 ? !!t : Yy(i) === "RegExp");
}, Qy = Gy, $y = TypeError, Kn = function(i) {
  if (Qy(i))
    throw new $y("The method doesn't accept regular expressions");
  return i;
}, Zy = X, Jy = Zy("match"), ta = function(i) {
  var t = /./;
  try {
    "/./"[i](t);
  } catch {
    try {
      return t[Jy] = !1, "/./"[i](t);
    } catch {
    }
  }
  return !1;
}, Ky = tt, t0 = Pr, e0 = Ae.f, r0 = ue, Bs = mt, i0 = Kn, n0 = lt, a0 = ta, s0 = t0("".slice), o0 = Math.min, Gu = a0("startsWith"), u0 = !Gu && !!function() {
  var i = e0(String.prototype, "startsWith");
  return i && !i.writable;
}();
Ky({ target: "String", proto: !0, forced: !u0 && !Gu }, {
  startsWith: function(i) {
    var t = Bs(n0(this));
    i0(i);
    var e = r0(o0(arguments.length > 1 ? arguments[1] : void 0, t.length)), r = Bs(i);
    return s0(t, e, e + r.length) === r;
  }
});
var h0 = X, l0 = Wn, c0 = St.f, gn = h0("unscopables"), fn = Array.prototype;
fn[gn] === void 0 && c0(fn, gn, {
  configurable: !0,
  value: l0(null)
});
var g0 = function(i) {
  fn[gn][i] = !0;
}, f0 = D, p0 = !f0(function() {
  function i() {
  }
  return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
}), d0 = gt, m0 = F, y0 = wr, v0 = Nn, x0 = p0, Fs = v0("IE_PROTO"), pn = Object, b0 = pn.prototype, Qu = x0 ? pn.getPrototypeOf : function(i) {
  var t = y0(i);
  if (d0(t, Fs)) return t[Fs];
  var e = t.constructor;
  return m0(e) && t instanceof e ? e.prototype : t instanceof pn ? b0 : null;
}, w0 = D, S0 = F, T0 = ct, js = Qu, O0 = zt, A0 = X, dn = A0("iterator"), $u = !1, Dt, Ni, Mi;
[].keys && (Mi = [].keys(), "next" in Mi ? (Ni = js(js(Mi)), Ni !== Object.prototype && (Dt = Ni)) : $u = !0);
var E0 = !T0(Dt) || w0(function() {
  var i = {};
  return Dt[dn].call(i) !== i;
});
E0 && (Dt = {});
S0(Dt[dn]) || O0(Dt, dn, function() {
  return this;
});
var Zu = {
  IteratorPrototype: Dt,
  BUGGY_SAFARI_ITERATORS: $u
}, C0 = Zu.IteratorPrototype, P0 = Wn, N0 = Sn, M0 = Cr, R0 = Re, V0 = function() {
  return this;
}, k0 = function(i, t, e, r) {
  var n = t + " Iterator";
  return i.prototype = P0(C0, { next: N0(+!r, e) }), M0(i, n, !1), R0[n] = V0, i;
}, I0 = tt, _0 = W, Ju = Tr, L0 = F, D0 = k0, Us = Qu, zs = uu, B0 = Cr, F0 = Pe, Ri = zt, j0 = X, U0 = Re, Ku = Zu, z0 = Ju.PROPER, H0 = Ju.CONFIGURABLE, Hs = Ku.IteratorPrototype, tr = Ku.BUGGY_SAFARI_ITERATORS, pe = j0("iterator"), Xs = "keys", de = "values", Ys = "entries", X0 = function() {
  return this;
}, Y0 = function(i, t, e, r, n, a, o) {
  D0(e, t, r);
  var s = function(y) {
    if (y === n && f) return f;
    if (!tr && y && y in l) return l[y];
    switch (y) {
      case Xs:
        return function() {
          return new e(this, y);
        };
      case de:
        return function() {
          return new e(this, y);
        };
      case Ys:
        return function() {
          return new e(this, y);
        };
    }
    return function() {
      return new e(this);
    };
  }, u = t + " Iterator", h = !1, l = i.prototype, g = l[pe] || l["@@iterator"] || n && l[n], f = !tr && g || s(n), c = t === "Array" && l.entries || g, d, p, m;
  if (c && (d = Us(c.call(new i())), d !== Object.prototype && d.next && (Us(d) !== Hs && (zs ? zs(d, Hs) : L0(d[pe]) || Ri(d, pe, X0)), B0(d, u, !0))), z0 && n === de && g && g.name !== de && (H0 ? F0(l, "name", de) : (h = !0, f = function() {
    return _0(g, this);
  })), n)
    if (p = {
      values: s(de),
      keys: a ? f : s(Xs),
      entries: s(Ys)
    }, o) for (m in p)
      (tr || h || !(m in l)) && Ri(l, m, p[m]);
    else I0({ target: t, proto: !0, forced: tr || h }, p);
  return l[pe] !== f && Ri(l, pe, f, { name: n }), U0[t] = f, p;
}, W0 = function(i, t) {
  return { value: i, done: t };
}, q0 = Ee, ea = g0, Ws = Re, th = Or, G0 = St.f, Q0 = Y0, er = W0, $0 = ht, eh = "Array Iterator", Z0 = th.set, J0 = th.getterFor(eh), K0 = Q0(Array, "Array", function(i, t) {
  Z0(this, {
    type: eh,
    target: q0(i),
    // target
    index: 0,
    // next index
    kind: t
    // kind
  });
}, function() {
  var i = J0(this), t = i.target, e = i.index++;
  if (!t || e >= t.length)
    return i.target = null, er(void 0, !0);
  switch (i.kind) {
    case "keys":
      return er(e, !1);
    case "values":
      return er(t[e], !1);
  }
  return er([e, t[e]], !1);
}, "values"), qs = Ws.Arguments = Ws.Array;
ea("keys");
ea("values");
ea("entries");
if ($0 && qs.name !== "values") try {
  G0(qs, "name", { value: "values" });
} catch {
}
var tv = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, ev = Sr, Vi = ev("span").classList, Gs = Vi && Vi.constructor && Vi.constructor.prototype, rv = Gs === Object.prototype ? void 0 : Gs, Qs = _, rh = tv, iv = rv, ye = K0, $s = Pe, nv = Cr, av = X, ki = av("iterator"), Ii = ye.values, ih = function(i, t) {
  if (i) {
    if (i[ki] !== Ii) try {
      $s(i, ki, Ii);
    } catch {
      i[ki] = Ii;
    }
    if (nv(i, t, !0), rh[t]) {
      for (var e in ye)
        if (i[e] !== ye[e]) try {
          $s(i, e, ye[e]);
        } catch {
          i[e] = ye[e];
        }
    }
  }
};
for (var _i in rh)
  ih(Qs[_i] && Qs[_i].prototype, _i);
ih(iv, "DOMTokenList");
function sv(i, t) {
  if (Xi(i) != "object" || !i) return i;
  var e = i[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(i, t || "default");
    if (Xi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(i);
}
function ov(i) {
  var t = sv(i, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function ra(i, t, e) {
  return (t = ov(t)) in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[t] = e, i;
}
var uv = wt, hv = wr, lv = Uo, cv = Vn, Zs = TypeError, Js = "Reduce of empty array with no initial value", Ks = function(i) {
  return function(t, e, r, n) {
    var a = hv(t), o = lv(a), s = cv(a);
    if (uv(e), s === 0 && r < 2) throw new Zs(Js);
    var u = i ? s - 1 : 0, h = i ? -1 : 1;
    if (r < 2) for (; ; ) {
      if (u in o) {
        n = o[u], u += h;
        break;
      }
      if (u += h, i ? u < 0 : s <= u)
        throw new Zs(Js);
    }
    for (; i ? u >= 0 : s > u; u += h) u in o && (n = e(n, o[u], u, a));
    return n;
  };
}, gv = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Ks(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Ks(!0)
}, fv = D, nh = function(i, t) {
  var e = [][i];
  return !!e && fv(function() {
    e.call(null, t || function() {
      return 1;
    }, 1);
  });
}, pv = tt, dv = gv.left, mv = nh, to = Tn, yv = Er, vv = !yv && to > 79 && to < 83, xv = vv || !mv("reduce");
pv({ target: "Array", proto: !0, forced: xv }, {
  reduce: function(i) {
    var t = arguments.length;
    return dv(this, i, t, t > 1 ? arguments[1] : void 0);
  }
});
var bv = tt, wv = Pr, Sv = Ae.f, Tv = ue, eo = mt, Ov = Kn, Av = lt, Ev = ta, Cv = wv("".slice), Pv = Math.min, ah = Ev("endsWith"), Nv = !ah && !!function() {
  var i = Sv(String.prototype, "endsWith");
  return i && !i.writable;
}();
bv({ target: "String", proto: !0, forced: !Nv && !ah }, {
  endsWith: function(i) {
    var t = eo(Av(this));
    Ov(i);
    var e = arguments.length > 1 ? arguments[1] : void 0, r = t.length, n = e === void 0 ? r : Pv(Tv(e), r), a = eo(i);
    return Cv(t, n - a.length, n) === a;
  }
});
var Li = W, sh = B, Mv = Gn, Rv = K, Vv = jt, kv = lt, Iv = pu, _v = $n, Lv = ue, ro = mt, Dv = oe, io = Zn, Bv = zu, Fv = D, Qt = Bv.UNSUPPORTED_Y, jv = 4294967295, Uv = Math.min, Di = sh([].push), Bi = sh("".slice), zv = !Fv(function() {
  var i = /(?:)/, t = i.exec;
  i.exec = function() {
    return t.apply(this, arguments);
  };
  var e = "ab".split(i);
  return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
}), no = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
Mv("split", function(i, t, e) {
  var r = "0".split(void 0, 0).length ? function(n, a) {
    return n === void 0 && a === 0 ? [] : Li(t, this, n, a);
  } : t;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(n, a) {
      var o = kv(this), s = Vv(n) ? void 0 : Dv(n, i);
      return s ? Li(s, n, o, a) : Li(r, ro(o), n, a);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(n, a) {
      var o = Rv(this), s = ro(n);
      if (!no) {
        var u = e(r, o, s, a, r !== t);
        if (u.done) return u.value;
      }
      var h = Iv(o, RegExp), l = o.unicode, g = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Qt ? "g" : "y"), f = new h(Qt ? "^(?:" + o.source + ")" : o, g), c = a === void 0 ? jv : a >>> 0;
      if (c === 0) return [];
      if (s.length === 0) return io(f, s) === null ? [s] : [];
      for (var d = 0, p = 0, m = []; p < s.length; ) {
        f.lastIndex = Qt ? 0 : p;
        var y = io(f, Qt ? Bi(s, p) : s), b;
        if (y === null || (b = Uv(Lv(f.lastIndex + (Qt ? p : 0)), s.length)) === d)
          p = _v(s, p, l);
        else {
          if (Di(m, Bi(s, d, p)), m.length === c) return m;
          for (var x = 1; x <= y.length - 1; x++)
            if (Di(m, y[x]), m.length === c) return m;
          p = d = b;
        }
      }
      return Di(m, Bi(s, d)), m;
    }
  ];
}, no || !zv, Qt);
var kr = { exports: {} }, ve = { exports: {} };
(function() {
  var i, t, e, r, n, a;
  typeof performance < "u" && performance !== null && performance.now ? ve.exports = function() {
    return performance.now();
  } : typeof process < "u" && process !== null && process.hrtime ? (ve.exports = function() {
    return (i() - n) / 1e6;
  }, t = process.hrtime, i = function() {
    var o;
    return o = t(), o[0] * 1e9 + o[1];
  }, r = i(), a = process.uptime() * 1e9, n = r - a) : Date.now ? (ve.exports = function() {
    return Date.now() - e;
  }, e = Date.now()) : (ve.exports = function() {
    return (/* @__PURE__ */ new Date()).getTime() - e;
  }, e = (/* @__PURE__ */ new Date()).getTime());
}).call(Zt);
var Hv = ve.exports, Xv = Hv, xt = typeof window > "u" ? Zt : window, rr = ["moz", "webkit"], re = "AnimationFrame", se = xt["request" + re], Oe = xt["cancel" + re] || xt["cancelRequest" + re];
for (var me = 0; !se && me < rr.length; me++)
  se = xt[rr[me] + "Request" + re], Oe = xt[rr[me] + "Cancel" + re] || xt[rr[me] + "CancelRequest" + re];
if (!se || !Oe) {
  var Fi = 0, ao = 0, kt = [], Yv = 1e3 / 60;
  se = function(i) {
    if (kt.length === 0) {
      var t = Xv(), e = Math.max(0, Yv - (t - Fi));
      Fi = e + t, setTimeout(function() {
        var r = kt.slice(0);
        kt.length = 0;
        for (var n = 0; n < r.length; n++)
          if (!r[n].cancelled)
            try {
              r[n].callback(Fi);
            } catch (a) {
              setTimeout(function() {
                throw a;
              }, 0);
            }
      }, Math.round(e));
    }
    return kt.push({
      handle: ++ao,
      callback: i,
      cancelled: !1
    }), ao;
  }, Oe = function(i) {
    for (var t = 0; t < kt.length; t++)
      kt[t].handle === i && (kt[t].cancelled = !0);
  };
}
kr.exports = function(i) {
  return se.call(xt, i);
};
kr.exports.cancel = function() {
  Oe.apply(xt, arguments);
};
kr.exports.polyfill = function(i) {
  i || (i = xt), i.requestAnimationFrame = se, i.cancelAnimationFrame = Oe;
};
var Wv = kr.exports;
const ji = /* @__PURE__ */ Io(Wv);
var oh = `	
\v\f\r                　\u2028\u2029\uFEFF`, qv = B, Gv = lt, Qv = mt, mn = oh, so = qv("".replace), $v = RegExp("^[" + mn + "]+"), Zv = RegExp("(^|[^" + mn + "])[" + mn + "]+$"), Ui = function(i) {
  return function(t) {
    var e = Qv(Gv(t));
    return i & 1 && (e = so(e, $v, "")), i & 2 && (e = so(e, Zv, "$1")), e;
  };
}, Jv = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Ui(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Ui(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Ui(3)
}, Kv = Tr.PROPER, tx = D, oo = oh, uo = "​᠎", ex = function(i) {
  return tx(function() {
    return !!oo[i]() || uo[i]() !== uo || Kv && oo[i].name !== i;
  });
}, rx = tt, ix = Jv.trim, nx = ex;
rx({ target: "String", proto: !0, forced: nx("trim") }, {
  trim: function() {
    return ix(this);
  }
});
var ax = function(i) {
  this.ok = !1, this.alpha = 1, i.charAt(0) == "#" && (i = i.substr(1, 6)), i = i.replace(/ /g, ""), i = i.toLowerCase();
  var t = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  i = t[i] || i;
  for (var e = [
    {
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3]),
          parseFloat(u[4])
        ];
      }
    },
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3])
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(u) {
        return [
          parseInt(u[1], 16),
          parseInt(u[2], 16),
          parseInt(u[3], 16)
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(u) {
        return [
          parseInt(u[1] + u[1], 16),
          parseInt(u[2] + u[2], 16),
          parseInt(u[3] + u[3], 16)
        ];
      }
    }
  ], r = 0; r < e.length; r++) {
    var n = e[r].re, a = e[r].process, o = n.exec(i);
    if (o) {
      var s = a(o);
      this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = !0;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toRGBA = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
  }, this.toHex = function() {
    var u = this.r.toString(16), h = this.g.toString(16), l = this.b.toString(16);
    return u.length == 1 && (u = "0" + u), h.length == 1 && (h = "0" + h), l.length == 1 && (l = "0" + l), "#" + u + h + l;
  }, this.getHelpXML = function() {
    for (var u = new Array(), h = 0; h < e.length; h++)
      for (var l = e[h].example, g = 0; g < l.length; g++)
        u[u.length] = l[g];
    for (var f in t)
      u[u.length] = f;
    var c = document.createElement("ul");
    c.setAttribute("id", "rgbcolor-examples");
    for (var h = 0; h < u.length; h++)
      try {
        var d = document.createElement("li"), p = new RGBColor(u[h]), m = document.createElement("div");
        m.style.cssText = "margin: 3px; border: 1px solid black; background:" + p.toHex() + "; color:" + p.toHex(), m.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(
          " " + u[h] + " -> " + p.toRGB() + " -> " + p.toHex()
        );
        d.appendChild(m), d.appendChild(y), c.appendChild(d);
      } catch {
      }
    return c;
  };
};
const yn = /* @__PURE__ */ Io(ax);
var sx = tt, ox = Pr, ux = iu.indexOf, hx = nh, vn = ox([].indexOf), uh = !!vn && 1 / vn([1], 1, -0) < 0, lx = uh || !hx("indexOf");
sx({ target: "Array", proto: !0, forced: lx }, {
  indexOf: function(i) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return uh ? vn(this, i, t) || 0 : ux(this, i, t);
  }
});
var cx = tt, gx = B, fx = Kn, px = lt, ho = mt, dx = ta, mx = gx("".indexOf);
cx({ target: "String", proto: !0, forced: !dx("includes") }, {
  includes: function(i) {
    return !!~mx(
      ho(px(this)),
      ho(fx(i)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var yx = Ft, vx = Array.isArray || function(i) {
  return yx(i) === "Array";
}, xx = tt, bx = B, wx = vx, Sx = bx([].reverse), lo = [1, 2];
xx({ target: "Array", proto: !0, forced: String(lo) === String(lo.reverse()) }, {
  reverse: function() {
    return wx(this) && (this.length = this.length), Sx(this);
  }
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var hh = function(i, t) {
  return (hh = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  })(i, t);
};
function lh(i, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function e() {
    this.constructor = i;
  }
  hh(i, t), i.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function Tx(i) {
  var t = "";
  Array.isArray(i) || (i = [i]);
  for (var e = 0; e < i.length; e++) {
    var r = i[e];
    if (r.type === v.CLOSE_PATH) t += "z";
    else if (r.type === v.HORIZ_LINE_TO) t += (r.relative ? "h" : "H") + r.x;
    else if (r.type === v.VERT_LINE_TO) t += (r.relative ? "v" : "V") + r.y;
    else if (r.type === v.MOVE_TO) t += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === v.LINE_TO) t += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === v.CURVE_TO) t += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === v.SMOOTH_CURVE_TO) t += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === v.QUAD_TO) t += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === v.SMOOTH_QUAD_TO) t += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== v.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + e + ".");
      t += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return t;
}
function xn(i, t) {
  var e = i[0], r = i[1];
  return [e * Math.cos(t) - r * Math.sin(t), e * Math.sin(t) + r * Math.cos(t)];
}
function ot() {
  for (var i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
  for (var e = 0; e < i.length; e++) if (typeof i[e] != "number") throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof i[e] + " == typeof " + i[e]);
  return !0;
}
var Ot = Math.PI;
function zi(i, t, e) {
  i.lArcFlag = i.lArcFlag === 0 ? 0 : 1, i.sweepFlag = i.sweepFlag === 0 ? 0 : 1;
  var r = i.rX, n = i.rY, a = i.x, o = i.y;
  r = Math.abs(i.rX), n = Math.abs(i.rY);
  var s = xn([(t - a) / 2, (e - o) / 2], -i.xRot / 180 * Ot), u = s[0], h = s[1], l = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(h, 2) / Math.pow(n, 2);
  1 < l && (r *= Math.sqrt(l), n *= Math.sqrt(l)), i.rX = r, i.rY = n;
  var g = Math.pow(r, 2) * Math.pow(h, 2) + Math.pow(n, 2) * Math.pow(u, 2), f = (i.lArcFlag !== i.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(n, 2) - g) / g)), c = r * h / n * f, d = -n * u / r * f, p = xn([c, d], i.xRot / 180 * Ot);
  i.cX = p[0] + (t + a) / 2, i.cY = p[1] + (e + o) / 2, i.phi1 = Math.atan2((h - d) / n, (u - c) / r), i.phi2 = Math.atan2((-h - d) / n, (-u - c) / r), i.sweepFlag === 0 && i.phi2 > i.phi1 && (i.phi2 -= 2 * Ot), i.sweepFlag === 1 && i.phi2 < i.phi1 && (i.phi2 += 2 * Ot), i.phi1 *= 180 / Ot, i.phi2 *= 180 / Ot;
}
function co(i, t, e) {
  ot(i, t, e);
  var r = i * i + t * t - e * e;
  if (0 > r) return [];
  if (r === 0) return [[i * e / (i * i + t * t), t * e / (i * i + t * t)]];
  var n = Math.sqrt(r);
  return [[(i * e + t * n) / (i * i + t * t), (t * e - i * n) / (i * i + t * t)], [(i * e - t * n) / (i * i + t * t), (t * e + i * n) / (i * i + t * t)]];
}
var z, yt = Math.PI / 180;
function go(i, t, e) {
  return (1 - e) * i + e * t;
}
function fo(i, t, e, r) {
  return i + Math.cos(r / 180 * Ot) * t + Math.sin(r / 180 * Ot) * e;
}
function po(i, t, e, r) {
  var n = 1e-6, a = t - i, o = e - t, s = 3 * a + 3 * (r - e) - 6 * o, u = 6 * (o - a), h = 3 * a;
  return Math.abs(s) < n ? [-h / u] : function(l, g, f) {
    var c = l * l / 4 - g;
    if (c < -f) return [];
    if (c <= f) return [-l / 2];
    var d = Math.sqrt(c);
    return [-l / 2 - d, -l / 2 + d];
  }(u / s, h / s, n);
}
function mo(i, t, e, r, n) {
  var a = 1 - n;
  return i * (a * a * a) + t * (3 * a * a * n) + e * (3 * a * n * n) + r * (n * n * n);
}
(function(i) {
  function t() {
    return n(function(s, u, h) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += u), s.y1 !== void 0 && (s.y1 += h), s.x2 !== void 0 && (s.x2 += u), s.y2 !== void 0 && (s.y2 += h), s.x !== void 0 && (s.x += u), s.y !== void 0 && (s.y += h), s.relative = !1), s;
    });
  }
  function e() {
    var s = NaN, u = NaN, h = NaN, l = NaN;
    return n(function(g, f, c) {
      return g.type & v.SMOOTH_CURVE_TO && (g.type = v.CURVE_TO, s = isNaN(s) ? f : s, u = isNaN(u) ? c : u, g.x1 = g.relative ? f - s : 2 * f - s, g.y1 = g.relative ? c - u : 2 * c - u), g.type & v.CURVE_TO ? (s = g.relative ? f + g.x2 : g.x2, u = g.relative ? c + g.y2 : g.y2) : (s = NaN, u = NaN), g.type & v.SMOOTH_QUAD_TO && (g.type = v.QUAD_TO, h = isNaN(h) ? f : h, l = isNaN(l) ? c : l, g.x1 = g.relative ? f - h : 2 * f - h, g.y1 = g.relative ? c - l : 2 * c - l), g.type & v.QUAD_TO ? (h = g.relative ? f + g.x1 : g.x1, l = g.relative ? c + g.y1 : g.y1) : (h = NaN, l = NaN), g;
    });
  }
  function r() {
    var s = NaN, u = NaN;
    return n(function(h, l, g) {
      if (h.type & v.SMOOTH_QUAD_TO && (h.type = v.QUAD_TO, s = isNaN(s) ? l : s, u = isNaN(u) ? g : u, h.x1 = h.relative ? l - s : 2 * l - s, h.y1 = h.relative ? g - u : 2 * g - u), h.type & v.QUAD_TO) {
        s = h.relative ? l + h.x1 : h.x1, u = h.relative ? g + h.y1 : h.y1;
        var f = h.x1, c = h.y1;
        h.type = v.CURVE_TO, h.x1 = ((h.relative ? 0 : l) + 2 * f) / 3, h.y1 = ((h.relative ? 0 : g) + 2 * c) / 3, h.x2 = (h.x + 2 * f) / 3, h.y2 = (h.y + 2 * c) / 3;
      } else s = NaN, u = NaN;
      return h;
    });
  }
  function n(s) {
    var u = 0, h = 0, l = NaN, g = NaN;
    return function(f) {
      if (isNaN(l) && !(f.type & v.MOVE_TO)) throw new Error("path must start with moveto");
      var c = s(f, u, h, l, g);
      return f.type & v.CLOSE_PATH && (u = l, h = g), f.x !== void 0 && (u = f.relative ? u + f.x : f.x), f.y !== void 0 && (h = f.relative ? h + f.y : f.y), f.type & v.MOVE_TO && (l = u, g = h), c;
    };
  }
  function a(s, u, h, l, g, f) {
    return ot(s, u, h, l, g, f), n(function(c, d, p, m) {
      var y = c.x1, b = c.x2, x = c.relative && !isNaN(m), w = c.x !== void 0 ? c.x : x ? 0 : d, A = c.y !== void 0 ? c.y : x ? 0 : p;
      function O(at) {
        return at * at;
      }
      c.type & v.HORIZ_LINE_TO && u !== 0 && (c.type = v.LINE_TO, c.y = c.relative ? 0 : p), c.type & v.VERT_LINE_TO && h !== 0 && (c.type = v.LINE_TO, c.x = c.relative ? 0 : d), c.x !== void 0 && (c.x = c.x * s + A * h + (x ? 0 : g)), c.y !== void 0 && (c.y = w * u + c.y * l + (x ? 0 : f)), c.x1 !== void 0 && (c.x1 = c.x1 * s + c.y1 * h + (x ? 0 : g)), c.y1 !== void 0 && (c.y1 = y * u + c.y1 * l + (x ? 0 : f)), c.x2 !== void 0 && (c.x2 = c.x2 * s + c.y2 * h + (x ? 0 : g)), c.y2 !== void 0 && (c.y2 = b * u + c.y2 * l + (x ? 0 : f));
      var S = s * l - u * h;
      if (c.xRot !== void 0 && (s !== 1 || u !== 0 || h !== 0 || l !== 1)) if (S === 0) delete c.rX, delete c.rY, delete c.xRot, delete c.lArcFlag, delete c.sweepFlag, c.type = v.LINE_TO;
      else {
        var C = c.xRot * Math.PI / 180, V = Math.sin(C), I = Math.cos(C), j = 1 / O(c.rX), N = 1 / O(c.rY), q = O(I) * j + O(V) * N, G = 2 * V * I * (j - N), H = O(V) * j + O(I) * N, Q = q * l * l - G * u * l + H * u * u, Y = G * (s * l + u * h) - 2 * (q * h * l + H * s * u), $ = q * h * h - G * s * h + H * s * s, M = (Math.atan2(Y, Q - $) + Math.PI) % Math.PI / 2, k = Math.sin(M), Z = Math.cos(M);
        c.rX = Math.abs(S) / Math.sqrt(Q * O(Z) + Y * k * Z + $ * O(k)), c.rY = Math.abs(S) / Math.sqrt(Q * O(k) - Y * k * Z + $ * O(Z)), c.xRot = 180 * M / Math.PI;
      }
      return c.sweepFlag !== void 0 && 0 > S && (c.sweepFlag = +!c.sweepFlag), c;
    });
  }
  function o() {
    return function(s) {
      var u = {};
      for (var h in s) u[h] = s[h];
      return u;
    };
  }
  i.ROUND = function(s) {
    function u(h) {
      return Math.round(h * s) / s;
    }
    return s === void 0 && (s = 1e13), ot(s), function(h) {
      return h.x1 !== void 0 && (h.x1 = u(h.x1)), h.y1 !== void 0 && (h.y1 = u(h.y1)), h.x2 !== void 0 && (h.x2 = u(h.x2)), h.y2 !== void 0 && (h.y2 = u(h.y2)), h.x !== void 0 && (h.x = u(h.x)), h.y !== void 0 && (h.y = u(h.y)), h.rX !== void 0 && (h.rX = u(h.rX)), h.rY !== void 0 && (h.rY = u(h.rY)), h;
    };
  }, i.TO_ABS = t, i.TO_REL = function() {
    return n(function(s, u, h) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= h), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= h), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= h), s.relative = !0), s;
    });
  }, i.NORMALIZE_HVZ = function(s, u, h) {
    return s === void 0 && (s = !0), u === void 0 && (u = !0), h === void 0 && (h = !0), n(function(l, g, f, c, d) {
      if (isNaN(c) && !(l.type & v.MOVE_TO)) throw new Error("path must start with moveto");
      return u && l.type & v.HORIZ_LINE_TO && (l.type = v.LINE_TO, l.y = l.relative ? 0 : f), h && l.type & v.VERT_LINE_TO && (l.type = v.LINE_TO, l.x = l.relative ? 0 : g), s && l.type & v.CLOSE_PATH && (l.type = v.LINE_TO, l.x = l.relative ? c - g : c, l.y = l.relative ? d - f : d), l.type & v.ARC && (l.rX === 0 || l.rY === 0) && (l.type = v.LINE_TO, delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag), l;
    });
  }, i.NORMALIZE_ST = e, i.QT_TO_C = r, i.INFO = n, i.SANITIZE = function(s) {
    s === void 0 && (s = 0), ot(s);
    var u = NaN, h = NaN, l = NaN, g = NaN;
    return n(function(f, c, d, p, m) {
      var y = Math.abs, b = !1, x = 0, w = 0;
      if (f.type & v.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : c - u, w = isNaN(h) ? 0 : d - h), f.type & (v.CURVE_TO | v.SMOOTH_CURVE_TO) ? (u = f.relative ? c + f.x2 : f.x2, h = f.relative ? d + f.y2 : f.y2) : (u = NaN, h = NaN), f.type & v.SMOOTH_QUAD_TO ? (l = isNaN(l) ? c : 2 * c - l, g = isNaN(g) ? d : 2 * d - g) : f.type & v.QUAD_TO ? (l = f.relative ? c + f.x1 : f.x1, g = f.relative ? d + f.y1 : f.y2) : (l = NaN, g = NaN), f.type & v.LINE_COMMANDS || f.type & v.ARC && (f.rX === 0 || f.rY === 0 || !f.lArcFlag) || f.type & v.CURVE_TO || f.type & v.SMOOTH_CURVE_TO || f.type & v.QUAD_TO || f.type & v.SMOOTH_QUAD_TO) {
        var A = f.x === void 0 ? 0 : f.relative ? f.x : f.x - c, O = f.y === void 0 ? 0 : f.relative ? f.y : f.y - d;
        x = isNaN(l) ? f.x1 === void 0 ? x : f.relative ? f.x : f.x1 - c : l - c, w = isNaN(g) ? f.y1 === void 0 ? w : f.relative ? f.y : f.y1 - d : g - d;
        var S = f.x2 === void 0 ? 0 : f.relative ? f.x : f.x2 - c, C = f.y2 === void 0 ? 0 : f.relative ? f.y : f.y2 - d;
        y(A) <= s && y(O) <= s && y(x) <= s && y(w) <= s && y(S) <= s && y(C) <= s && (b = !0);
      }
      return f.type & v.CLOSE_PATH && y(c - p) <= s && y(d - m) <= s && (b = !0), b ? [] : f;
    });
  }, i.MATRIX = a, i.ROTATE = function(s, u, h) {
    u === void 0 && (u = 0), h === void 0 && (h = 0), ot(s, u, h);
    var l = Math.sin(s), g = Math.cos(s);
    return a(g, l, -l, g, u - u * g + h * l, h - u * l - h * g);
  }, i.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), ot(s, u), a(1, 0, 0, 1, s, u);
  }, i.SCALE = function(s, u) {
    return u === void 0 && (u = s), ot(s, u), a(s, 0, 0, u, 0, 0);
  }, i.SKEW_X = function(s) {
    return ot(s), a(1, 0, Math.atan(s), 1, 0, 0);
  }, i.SKEW_Y = function(s) {
    return ot(s), a(1, Math.atan(s), 0, 1, 0, 0);
  }, i.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), ot(s), a(-1, 0, 0, 1, s, 0);
  }, i.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), ot(s), a(1, 0, 0, -1, 0, s);
  }, i.A_TO_C = function() {
    return n(function(s, u, h) {
      return v.ARC === s.type ? function(l, g, f) {
        var c, d, p, m;
        l.cX || zi(l, g, f);
        for (var y = Math.min(l.phi1, l.phi2), b = Math.max(l.phi1, l.phi2) - y, x = Math.ceil(b / 90), w = new Array(x), A = g, O = f, S = 0; S < x; S++) {
          var C = go(l.phi1, l.phi2, S / x), V = go(l.phi1, l.phi2, (S + 1) / x), I = V - C, j = 4 / 3 * Math.tan(I * yt / 4), N = [Math.cos(C * yt) - j * Math.sin(C * yt), Math.sin(C * yt) + j * Math.cos(C * yt)], q = N[0], G = N[1], H = [Math.cos(V * yt), Math.sin(V * yt)], Q = H[0], Y = H[1], $ = [Q + j * Math.sin(V * yt), Y - j * Math.cos(V * yt)], M = $[0], k = $[1];
          w[S] = { relative: l.relative, type: v.CURVE_TO };
          var Z = function(at, pt) {
            var Tt = xn([at * l.rX, pt * l.rY], l.xRot), Xt = Tt[0], ke = Tt[1];
            return [l.cX + Xt, l.cY + ke];
          };
          c = Z(q, G), w[S].x1 = c[0], w[S].y1 = c[1], d = Z(M, k), w[S].x2 = d[0], w[S].y2 = d[1], p = Z(Q, Y), w[S].x = p[0], w[S].y = p[1], l.relative && (w[S].x1 -= A, w[S].y1 -= O, w[S].x2 -= A, w[S].y2 -= O, w[S].x -= A, w[S].y -= O), A = (m = [w[S].x, w[S].y])[0], O = m[1];
        }
        return w;
      }(s, s.relative ? 0 : u, s.relative ? 0 : h) : s;
    });
  }, i.ANNOTATE_ARCS = function() {
    return n(function(s, u, h) {
      return s.relative && (u = 0, h = 0), v.ARC === s.type && zi(s, u, h), s;
    });
  }, i.CLONE = o, i.CALCULATE_BOUNDS = function() {
    var s = function(f) {
      var c = {};
      for (var d in f) c[d] = f[d];
      return c;
    }, u = t(), h = r(), l = e(), g = n(function(f, c, d) {
      var p = l(h(u(s(f))));
      function m(k) {
        k > g.maxX && (g.maxX = k), k < g.minX && (g.minX = k);
      }
      function y(k) {
        k > g.maxY && (g.maxY = k), k < g.minY && (g.minY = k);
      }
      if (p.type & v.DRAWING_COMMANDS && (m(c), y(d)), p.type & v.HORIZ_LINE_TO && m(p.x), p.type & v.VERT_LINE_TO && y(p.y), p.type & v.LINE_TO && (m(p.x), y(p.y)), p.type & v.CURVE_TO) {
        m(p.x), y(p.y);
        for (var b = 0, x = po(c, p.x1, p.x2, p.x); b < x.length; b++)
          0 < (M = x[b]) && 1 > M && m(mo(c, p.x1, p.x2, p.x, M));
        for (var w = 0, A = po(d, p.y1, p.y2, p.y); w < A.length; w++)
          0 < (M = A[w]) && 1 > M && y(mo(d, p.y1, p.y2, p.y, M));
      }
      if (p.type & v.ARC) {
        m(p.x), y(p.y), zi(p, c, d);
        for (var O = p.xRot / 180 * Math.PI, S = Math.cos(O) * p.rX, C = Math.sin(O) * p.rX, V = -Math.sin(O) * p.rY, I = Math.cos(O) * p.rY, j = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], N = j[0], q = j[1], G = function(k) {
          var Z = k[0], at = k[1], pt = 180 * Math.atan2(at, Z) / Math.PI;
          return pt < N ? pt + 360 : pt;
        }, H = 0, Q = co(V, -S, 0).map(G); H < Q.length; H++)
          (M = Q[H]) > N && M < q && m(fo(p.cX, S, V, M));
        for (var Y = 0, $ = co(I, -C, 0).map(G); Y < $.length; Y++) {
          var M;
          (M = $[Y]) > N && M < q && y(fo(p.cY, C, I, M));
        }
      }
      return f;
    });
    return g.minX = 1 / 0, g.maxX = -1 / 0, g.minY = 1 / 0, g.maxY = -1 / 0, g;
  };
})(z || (z = {}));
var st, ch = function() {
  function i() {
  }
  return i.prototype.round = function(t) {
    return this.transform(z.ROUND(t));
  }, i.prototype.toAbs = function() {
    return this.transform(z.TO_ABS());
  }, i.prototype.toRel = function() {
    return this.transform(z.TO_REL());
  }, i.prototype.normalizeHVZ = function(t, e, r) {
    return this.transform(z.NORMALIZE_HVZ(t, e, r));
  }, i.prototype.normalizeST = function() {
    return this.transform(z.NORMALIZE_ST());
  }, i.prototype.qtToC = function() {
    return this.transform(z.QT_TO_C());
  }, i.prototype.aToC = function() {
    return this.transform(z.A_TO_C());
  }, i.prototype.sanitize = function(t) {
    return this.transform(z.SANITIZE(t));
  }, i.prototype.translate = function(t, e) {
    return this.transform(z.TRANSLATE(t, e));
  }, i.prototype.scale = function(t, e) {
    return this.transform(z.SCALE(t, e));
  }, i.prototype.rotate = function(t, e, r) {
    return this.transform(z.ROTATE(t, e, r));
  }, i.prototype.matrix = function(t, e, r, n, a, o) {
    return this.transform(z.MATRIX(t, e, r, n, a, o));
  }, i.prototype.skewX = function(t) {
    return this.transform(z.SKEW_X(t));
  }, i.prototype.skewY = function(t) {
    return this.transform(z.SKEW_Y(t));
  }, i.prototype.xSymmetry = function(t) {
    return this.transform(z.X_AXIS_SYMMETRY(t));
  }, i.prototype.ySymmetry = function(t) {
    return this.transform(z.Y_AXIS_SYMMETRY(t));
  }, i.prototype.annotateArcs = function() {
    return this.transform(z.ANNOTATE_ARCS());
  }, i;
}(), Ox = function(i) {
  return i === " " || i === "	" || i === "\r" || i === `
`;
}, yo = function(i) {
  return 48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57;
}, Ax = function(i) {
  function t() {
    var e = i.call(this) || this;
    return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e;
  }
  return lh(t, i), t.prototype.finish = function(e) {
    if (e === void 0 && (e = []), this.parse(" ", e), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return e;
  }, t.prototype.parse = function(e, r) {
    var n = this;
    r === void 0 && (r = []);
    for (var a = function(g) {
      r.push(g), n.curArgs.length = 0, n.canParseCommandOrComma = !0;
    }, o = 0; o < e.length; o++) {
      var s = e[o], u = !(this.curCommandType !== v.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), h = yo(s) && (this.curNumber === "0" && s === "0" || u);
      if (!yo(s) || h) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var l = Number(this.curNumber);
          if (isNaN(l)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === v.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > l) throw new SyntaxError('Expected positive number, got "' + l + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(l), this.curArgs.length === Ex[this.curCommandType] && (v.HORIZ_LINE_TO === this.curCommandType ? a({ type: v.HORIZ_LINE_TO, relative: this.curCommandRelative, x: l }) : v.VERT_LINE_TO === this.curCommandType ? a({ type: v.VERT_LINE_TO, relative: this.curCommandRelative, y: l }) : this.curCommandType === v.MOVE_TO || this.curCommandType === v.LINE_TO || this.curCommandType === v.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), v.MOVE_TO === this.curCommandType && (this.curCommandType = v.LINE_TO)) : this.curCommandType === v.CURVE_TO ? a({ type: v.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === v.SMOOTH_CURVE_TO ? a({ type: v.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === v.QUAD_TO ? a({ type: v.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === v.ARC && a({ type: v.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!Ox(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (s !== "+" && s !== "-" && s !== ".") if (h) this.curNumber = s, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + o + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, s !== "z" && s !== "Z") if (s === "h" || s === "H") this.curCommandType = v.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
          else if (s === "v" || s === "V") this.curCommandType = v.VERT_LINE_TO, this.curCommandRelative = s === "v";
          else if (s === "m" || s === "M") this.curCommandType = v.MOVE_TO, this.curCommandRelative = s === "m";
          else if (s === "l" || s === "L") this.curCommandType = v.LINE_TO, this.curCommandRelative = s === "l";
          else if (s === "c" || s === "C") this.curCommandType = v.CURVE_TO, this.curCommandRelative = s === "c";
          else if (s === "s" || s === "S") this.curCommandType = v.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
          else if (s === "q" || s === "Q") this.curCommandType = v.QUAD_TO, this.curCommandRelative = s === "q";
          else if (s === "t" || s === "T") this.curCommandType = v.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
          else {
            if (s !== "a" && s !== "A") throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ".");
            this.curCommandType = v.ARC, this.curCommandRelative = s === "a";
          }
          else r.push({ type: v.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = s, this.curNumberHasDecimal = s === ".";
      } else this.curNumber += s, this.curNumberHasDecimal = !0;
      else this.curNumber += s;
      else this.curNumber += s, this.curNumberHasExp = !0;
      else this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, t.prototype.transform = function(e) {
    return Object.create(this, { parse: { value: function(r, n) {
      n === void 0 && (n = []);
      for (var a = 0, o = Object.getPrototypeOf(this).parse.call(this, r); a < o.length; a++) {
        var s = o[a], u = e(s);
        Array.isArray(u) ? n.push.apply(n, u) : n.push(u);
      }
      return n;
    } } });
  }, t;
}(ch), v = function(i) {
  function t(e) {
    var r = i.call(this) || this;
    return r.commands = typeof e == "string" ? t.parse(e) : e, r;
  }
  return lh(t, i), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var e = z.CALCULATE_BOUNDS();
    return this.transform(e), e;
  }, t.prototype.transform = function(e) {
    for (var r = [], n = 0, a = this.commands; n < a.length; n++) {
      var o = e(a[n]);
      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
    }
    return this.commands = r, this;
  }, t.encode = function(e) {
    return Tx(e);
  }, t.parse = function(e) {
    var r = new Ax(), n = [];
    return r.parse(e, n), r.finish(n), n;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(ch), Ex = ((st = {})[v.MOVE_TO] = 2, st[v.LINE_TO] = 2, st[v.HORIZ_LINE_TO] = 1, st[v.VERT_LINE_TO] = 1, st[v.CLOSE_PATH] = 0, st[v.QUAD_TO] = 4, st[v.SMOOTH_QUAD_TO] = 2, st[v.CURVE_TO] = 6, st[v.SMOOTH_CURVE_TO] = 4, st[v.ARC] = 7, st), Cx = W, Px = gt, Nx = xr, Mx = Uu, vo = RegExp.prototype, Rx = function(i) {
  var t = i.flags;
  return t === void 0 && !("flags" in vo) && !Px(i, "flags") && Nx(vo, i) ? Cx(Mx, i) : t;
}, Vx = Tr.PROPER, kx = zt, Ix = K, xo = mt, _x = D, Lx = Rx, ia = "toString", gh = RegExp.prototype, fh = gh[ia], Dx = _x(function() {
  return fh.call({ source: "a", flags: "b" }) !== "/a/b";
}), Bx = Vx && fh.name !== ia;
(Dx || Bx) && kx(gh, ia, function() {
  var i = Ix(this), t = xo(i.source), e = xo(Lx(i));
  return "/" + t + "/" + e;
}, { unsafe: !0 });
function cr(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cr = function(t) {
    return typeof t;
  } : cr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(i);
}
function Fx(i, t) {
  if (!(i instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var jx = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], Ux = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function zx(i, t, e, r, n) {
  if (typeof i == "string" && (i = document.getElementById(i)), !i || cr(i) !== "object" || !("getContext" in i))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var a = i.getContext("2d");
  try {
    return a.getImageData(t, e, r, n);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function Hx(i, t, e, r, n, a) {
  if (!(isNaN(a) || a < 1)) {
    a |= 0;
    var o = zx(i, t, e, r, n);
    o = Xx(o, t, e, r, n, a), i.getContext("2d").putImageData(o, t, e);
  }
}
function Xx(i, t, e, r, n, a) {
  for (var o = i.data, s = 2 * a + 1, u = r - 1, h = n - 1, l = a + 1, g = l * (l + 1) / 2, f = new bo(), c = f, d, p = 1; p < s; p++)
    c = c.next = new bo(), p === l && (d = c);
  c.next = f;
  for (var m = null, y = null, b = 0, x = 0, w = jx[a], A = Ux[a], O = 0; O < n; O++) {
    c = f;
    for (var S = o[x], C = o[x + 1], V = o[x + 2], I = o[x + 3], j = 0; j < l; j++)
      c.r = S, c.g = C, c.b = V, c.a = I, c = c.next;
    for (var N = 0, q = 0, G = 0, H = 0, Q = l * S, Y = l * C, $ = l * V, M = l * I, k = g * S, Z = g * C, at = g * V, pt = g * I, Tt = 1; Tt < l; Tt++) {
      var Xt = x + ((u < Tt ? u : Tt) << 2), ke = o[Xt], sa = o[Xt + 1], oa = o[Xt + 2], ua = o[Xt + 3], Ie = l - Tt;
      k += (c.r = ke) * Ie, Z += (c.g = sa) * Ie, at += (c.b = oa) * Ie, pt += (c.a = ua) * Ie, N += ke, q += sa, G += oa, H += ua, c = c.next;
    }
    m = f, y = d;
    for (var Br = 0; Br < r; Br++) {
      var Fr = pt * w >>> A;
      if (o[x + 3] = Fr, Fr !== 0) {
        var jr = 255 / Fr;
        o[x] = (k * w >>> A) * jr, o[x + 1] = (Z * w >>> A) * jr, o[x + 2] = (at * w >>> A) * jr;
      } else
        o[x] = o[x + 1] = o[x + 2] = 0;
      k -= Q, Z -= Y, at -= $, pt -= M, Q -= m.r, Y -= m.g, $ -= m.b, M -= m.a;
      var Pt = Br + a + 1;
      Pt = b + (Pt < u ? Pt : u) << 2, N += m.r = o[Pt], q += m.g = o[Pt + 1], G += m.b = o[Pt + 2], H += m.a = o[Pt + 3], k += N, Z += q, at += G, pt += H, m = m.next;
      var _e = y, ha = _e.r, la = _e.g, ca = _e.b, ga = _e.a;
      Q += ha, Y += la, $ += ca, M += ga, N -= ha, q -= la, G -= ca, H -= ga, y = y.next, x += 4;
    }
    b += r;
  }
  for (var Yt = 0; Yt < r; Yt++) {
    x = Yt << 2;
    var Nt = o[x], Mt = o[x + 1], Rt = o[x + 2], et = o[x + 3], Ur = l * Nt, zr = l * Mt, Hr = l * Rt, Xr = l * et, Le = g * Nt, De = g * Mt, Be = g * Rt, Fe = g * et;
    c = f;
    for (var fa = 0; fa < l; fa++)
      c.r = Nt, c.g = Mt, c.b = Rt, c.a = et, c = c.next;
    for (var pa = r, Yr = 0, Wr = 0, qr = 0, Gr = 0, je = 1; je <= a; je++) {
      x = pa + Yt << 2;
      var Ue = l - je;
      Le += (c.r = Nt = o[x]) * Ue, De += (c.g = Mt = o[x + 1]) * Ue, Be += (c.b = Rt = o[x + 2]) * Ue, Fe += (c.a = et = o[x + 3]) * Ue, Gr += Nt, Yr += Mt, Wr += Rt, qr += et, c = c.next, je < h && (pa += r);
    }
    x = Yt, m = f, y = d;
    for (var Qr = 0; Qr < n; Qr++) {
      var rt = x << 2;
      o[rt + 3] = et = Fe * w >>> A, et > 0 ? (et = 255 / et, o[rt] = (Le * w >>> A) * et, o[rt + 1] = (De * w >>> A) * et, o[rt + 2] = (Be * w >>> A) * et) : o[rt] = o[rt + 1] = o[rt + 2] = 0, Le -= Ur, De -= zr, Be -= Hr, Fe -= Xr, Ur -= m.r, zr -= m.g, Hr -= m.b, Xr -= m.a, rt = Yt + ((rt = Qr + l) < h ? rt : h) * r << 2, Le += Gr += m.r = o[rt], De += Yr += m.g = o[rt + 1], Be += Wr += m.b = o[rt + 2], Fe += qr += m.a = o[rt + 3], m = m.next, Ur += Nt = y.r, zr += Mt = y.g, Hr += Rt = y.b, Xr += et = y.a, Gr -= Nt, Yr -= Mt, Wr -= Rt, qr -= et, y = y.next, x += r;
    }
  }
  return i;
}
var bo = (
  /**
   * Set properties.
   */
  function i() {
    Fx(this, i), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function Yx() {
  var {
    DOMParser: i
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: i,
    createCanvas(e, r) {
      return new OffscreenCanvas(e, r);
    },
    createImage(e) {
      return bt(function* () {
        var r = yield fetch(e), n = yield r.blob(), a = yield createImageBitmap(n);
        return a;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof i > "u") && Reflect.deleteProperty(t, "DOMParser"), t;
}
function Wx(i) {
  var {
    DOMParser: t,
    canvas: e,
    fetch: r
  } = i;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: t,
    fetch: r,
    createCanvas: e.createCanvas,
    createImage: e.loadImage
  };
}
var nb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: Yx,
  node: Wx
});
function le(i) {
  return i.replace(/(?!\u3000)\s+/gm, " ");
}
function qx(i) {
  return i.replace(/^[\n \t]+/, "");
}
function Gx(i) {
  return i.replace(/[\n \t]+$/, "");
}
function nt(i) {
  var t = (i || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return t.map(parseFloat);
}
var Qx = /^[A-Z-]+$/;
function $x(i) {
  return Qx.test(i) ? i.toLowerCase() : i;
}
function ph(i) {
  var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(i) || [];
  return t[2] || t[3] || t[4];
}
function Zx(i) {
  if (!i.startsWith("rgb"))
    return i;
  var t = 3, e = i.replace(/\d+(\.\d+)?/g, (r, n) => t-- && n ? String(Math.round(parseFloat(r))) : r);
  return e;
}
var Jx = /(\[[^\]]+\])/g, Kx = /(#[^\s+>~.[:]+)/g, t1 = /(\.[^\s+>~.[:]+)/g, e1 = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, r1 = /(:[\w-]+\([^)]*\))/gi, i1 = /(:[^\s+>~.[:]+)/g, n1 = /([^\s+>~.[:]+)/g;
function It(i, t) {
  var e = t.exec(i);
  return e ? [i.replace(t, " "), e.length] : [i, 0];
}
function a1(i) {
  var t = [0, 0, 0], e = i.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [e, r] = It(e, Jx), t[1] += r, [e, r] = It(e, Kx), t[0] += r, [e, r] = It(e, t1), t[1] += r, [e, r] = It(e, e1), t[2] += r, [e, r] = It(e, r1), t[1] += r, [e, r] = It(e, i1), t[1] += r, e = e.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [e, r] = It(e, n1), t[2] += r, t.join("");
}
var ie = 1e-8;
function wo(i) {
  return Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2));
}
function bn(i, t) {
  return (i[0] * t[0] + i[1] * t[1]) / (wo(i) * wo(t));
}
function So(i, t) {
  return (i[0] * t[1] < i[1] * t[0] ? -1 : 1) * Math.acos(bn(i, t));
}
function To(i) {
  return i * i * i;
}
function Oo(i) {
  return 3 * i * i * (1 - i);
}
function Ao(i) {
  return 3 * i * (1 - i) * (1 - i);
}
function Eo(i) {
  return (1 - i) * (1 - i) * (1 - i);
}
function Co(i) {
  return i * i;
}
function Po(i) {
  return 2 * i * (1 - i);
}
function No(i) {
  return (1 - i) * (1 - i);
}
class T {
  constructor(t, e, r) {
    this.document = t, this.name = e, this.value = r, this.isNormalizedColor = !1;
  }
  static empty(t) {
    return new T(t, "EMPTY", "");
  }
  split() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: e,
      name: r
    } = this;
    return le(this.getString()).trim().split(t).map((n) => new T(e, r, n));
  }
  hasValue(t) {
    var {
      value: e
    } = this;
    return e !== null && e !== "" && (t || e !== 0) && typeof e < "u";
  }
  isString(t) {
    var {
      value: e
    } = this, r = typeof e == "string";
    return !r || !t ? r : t.test(e);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue())
      return !1;
    var t = this.getString();
    switch (!0) {
      case t.endsWith("px"):
      case /^[0-9]+$/.test(t):
        return !0;
      default:
        return !1;
    }
  }
  setValue(t) {
    return this.value = t, this;
  }
  getValue(t) {
    return typeof t > "u" || this.hasValue() ? this.value : t;
  }
  getNumber(t) {
    if (!this.hasValue())
      return typeof t > "u" ? 0 : parseFloat(t);
    var {
      value: e
    } = this, r = parseFloat(e);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(t) {
    return typeof t > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(t);
  }
  getColor(t) {
    var e = this.getString(t);
    return this.isNormalizedColor || (this.isNormalizedColor = !0, e = Zx(e), this.value = e), e;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue())
      return 0;
    var [r, n] = typeof t == "boolean" ? [void 0, t] : [t], {
      viewPort: a
    } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * a.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * a.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && n):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * a.computeSize(r);
      default: {
        var o = this.getNumber();
        return e && o < 1 ? o * a.computeSize(r) : o;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue())
      return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var t = this.getString(), e = /#([^)'"]+)/.exec(t);
    return e && (e = e[1]), e || (e = t), this.document.definitions[e];
  }
  getFillStyleDefinition(t, e) {
    var r = this.getDefinition();
    if (!r)
      return null;
    if (typeof r.createGradient == "function")
      return r.createGradient(this.document.ctx, t, e);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var n = r.getAttribute("patternTransform");
        r = r.getHrefAttribute().getDefinition(), n.hasValue() && r.getAttribute("patternTransform", !0).setValue(n.value);
      }
      return r.createPattern(this.document.ctx, t, e);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? T.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(t) {
    for (var e = this.getColor(), r = e.length, n = 0, a = 0; a < r && (e[a] === "," && n++, n !== 3); a++)
      ;
    if (t.hasValue() && this.isString() && n !== 3) {
      var o = new yn(e);
      o.ok && (o.alpha = t.getNumber(), e = o.toRGBA());
    }
    return new T(this.document, this.name, e);
  }
}
T.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
class s1 {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(t, e) {
    this.viewPorts.push({
      width: t,
      height: e
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: t
    } = this;
    return t[t.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(t) {
    return typeof t == "number" ? t : t === "x" ? this.width : t === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
}
class L {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  static parse(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = e, n = e] = nt(t);
    return new L(r, n);
  }
  static parseScale(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = e, n = r] = nt(t);
    return new L(r, n);
  }
  static parsePath(t) {
    for (var e = nt(t), r = e.length, n = [], a = 0; a < r; a += 2)
      n.push(new L(e[a], e[a + 1]));
    return n;
  }
  angleTo(t) {
    return Math.atan2(t.y - this.y, t.x - this.x);
  }
  applyTransform(t) {
    var {
      x: e,
      y: r
    } = this, n = e * t[0] + r * t[2] + t[4], a = e * t[1] + r * t[3] + t[5];
    this.x = n, this.y = a;
  }
}
class o1 {
  constructor(t) {
    this.screen = t, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: t,
        onClick: e,
        onMouseMove: r
      } = this, n = t.ctx.canvas;
      n.onclick = e, n.onmousemove = r, this.working = !0;
    }
  }
  stop() {
    if (this.working) {
      var t = this.screen.ctx.canvas;
      this.working = !1, t.onclick = null, t.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: t,
        events: e,
        eventElements: r
      } = this, {
        style: n
      } = t.ctx.canvas;
      n && (n.cursor = ""), e.forEach((a, o) => {
        for (var {
          run: s
        } = a, u = r[o]; u; )
          s(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(t, e) {
    if (!(!this.working || !e)) {
      var {
        events: r,
        eventElements: n
      } = this;
      r.forEach((a, o) => {
        var {
          x: s,
          y: u
        } = a;
        !n[o] && e.isPointInPath && e.isPointInPath(s, u) && (n[o] = t);
      });
    }
  }
  checkBoundingBox(t, e) {
    if (!(!this.working || !e)) {
      var {
        events: r,
        eventElements: n
      } = this;
      r.forEach((a, o) => {
        var {
          x: s,
          y: u
        } = a;
        !n[o] && e.isPointInBox(s, u) && (n[o] = t);
      });
    }
  }
  mapXY(t, e) {
    for (var {
      window: r,
      ctx: n
    } = this.screen, a = new L(t, e), o = n.canvas; o; )
      a.x -= o.offsetLeft, a.y -= o.offsetTop, o = o.offsetParent;
    return r.scrollX && (a.x += r.scrollX), r.scrollY && (a.y += r.scrollY), a;
  }
  onClick(t) {
    var {
      x: e,
      y: r
    } = this.mapXY(t.clientX, t.clientY);
    this.events.push({
      type: "onclick",
      x: e,
      y: r,
      run(n) {
        n.onClick && n.onClick();
      }
    });
  }
  onMouseMove(t) {
    var {
      x: e,
      y: r
    } = this.mapXY(t.clientX, t.clientY);
    this.events.push({
      type: "onmousemove",
      x: e,
      y: r,
      run(n) {
        n.onMouseMove && n.onMouseMove();
      }
    });
  }
}
var dh = typeof window < "u" ? window : null, mh = typeof fetch < "u" ? fetch.bind(void 0) : null;
class Ir {
  constructor(t) {
    var {
      fetch: e = mh,
      window: r = dh
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new s1(), this.mouse = new o1(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = e;
  }
  wait(t) {
    this.waits.push(t);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock)
      return !0;
    var t = this.waits.every((e) => e());
    return t && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = t, t;
  }
  setDefaults(t) {
    t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4;
  }
  setViewBox(t) {
    var {
      document: e,
      ctx: r,
      aspectRatio: n,
      width: a,
      desiredWidth: o,
      height: s,
      desiredHeight: u,
      minX: h = 0,
      minY: l = 0,
      refX: g,
      refY: f,
      clip: c = !1,
      clipX: d = 0,
      clipY: p = 0
    } = t, m = le(n).replace(/^defer\s/, ""), [y, b] = m.split(" "), x = y || "xMidYMid", w = b || "meet", A = a / o, O = s / u, S = Math.min(A, O), C = Math.max(A, O), V = o, I = u;
    w === "meet" && (V *= S, I *= S), w === "slice" && (V *= C, I *= C);
    var j = new T(e, "refX", g), N = new T(e, "refY", f), q = j.hasValue() && N.hasValue();
    if (q && r.translate(-S * j.getPixels("x"), -S * N.getPixels("y")), c) {
      var G = S * d, H = S * p;
      r.beginPath(), r.moveTo(G, H), r.lineTo(a, H), r.lineTo(a, s), r.lineTo(G, s), r.closePath(), r.clip();
    }
    if (!q) {
      var Q = w === "meet" && S === O, Y = w === "slice" && C === O, $ = w === "meet" && S === A, M = w === "slice" && C === A;
      x.startsWith("xMid") && (Q || Y) && r.translate(a / 2 - V / 2, 0), x.endsWith("YMid") && ($ || M) && r.translate(0, s / 2 - I / 2), x.startsWith("xMax") && (Q || Y) && r.translate(a - V, 0), x.endsWith("YMax") && ($ || M) && r.translate(0, s - I);
    }
    switch (!0) {
      case x === "none":
        r.scale(A, O);
        break;
      case w === "meet":
        r.scale(S, S);
        break;
      case w === "slice":
        r.scale(C, C);
        break;
    }
    r.translate(-h, -l);
  }
  start(t) {
    var {
      enableRedraw: e = !1,
      ignoreMouse: r = !1,
      ignoreAnimation: n = !1,
      ignoreDimensions: a = !1,
      ignoreClear: o = !1,
      forceRedraw: s,
      scaleWidth: u,
      scaleHeight: h,
      offsetX: l,
      offsetY: g
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: f,
      mouse: c
    } = this, d = 1e3 / f;
    if (this.frameDuration = d, this.readyPromise = new Promise((x) => {
      this.resolveReady = x;
    }), this.isReady() && this.render(t, a, o, u, h, l, g), !!e) {
      var p = Date.now(), m = p, y = 0, b = () => {
        p = Date.now(), y = p - m, y >= d && (m = p - y % d, this.shouldUpdate(n, s) && (this.render(t, a, o, u, h, l, g), c.runEvents())), this.intervalId = ji(b);
      };
      r || c.start(), this.intervalId = ji(b);
    }
  }
  stop() {
    this.intervalId && (ji.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(t, e) {
    if (!t) {
      var {
        frameDuration: r
      } = this, n = this.animations.reduce((a, o) => o.update(r) || a, !1);
      if (n)
        return !0;
    }
    return !!(typeof e == "function" && e() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(t, e, r, n, a, o, s) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: h,
      viewPort: l,
      ctx: g,
      isFirstRender: f
    } = this, c = g.canvas;
    l.clear(), c.width && c.height ? l.setCurrent(c.width, c.height) : l.setCurrent(u, h);
    var d = t.getStyle("width"), p = t.getStyle("height");
    !e && (f || typeof n != "number" && typeof a != "number") && (d.hasValue() && (c.width = d.getPixels("x"), c.style && (c.style.width = "".concat(c.width, "px"))), p.hasValue() && (c.height = p.getPixels("y"), c.style && (c.style.height = "".concat(c.height, "px"))));
    var m = c.clientWidth || c.width, y = c.clientHeight || c.height;
    if (e && d.hasValue() && p.hasValue() && (m = d.getPixels("x"), y = p.getPixels("y")), l.setCurrent(m, y), typeof o == "number" && t.getAttribute("x", !0).setValue(o), typeof s == "number" && t.getAttribute("y", !0).setValue(s), typeof n == "number" || typeof a == "number") {
      var b = nt(t.getAttribute("viewBox").getString()), x = 0, w = 0;
      if (typeof n == "number") {
        var A = t.getStyle("width");
        A.hasValue() ? x = A.getPixels("x") / n : isNaN(b[2]) || (x = b[2] / n);
      }
      if (typeof a == "number") {
        var O = t.getStyle("height");
        O.hasValue() ? w = O.getPixels("y") / a : isNaN(b[3]) || (w = b[3] / a);
      }
      x || (x = w), w || (w = x), t.getAttribute("width", !0).setValue(n), t.getAttribute("height", !0).setValue(a);
      var S = t.getStyle("transform", !0, !0);
      S.setValue("".concat(S.getString(), " scale(").concat(1 / x, ", ").concat(1 / w, ")"));
    }
    r || g.clearRect(0, 0, m, y), t.render(g), f && (this.isFirstRender = !1);
  }
}
Ir.defaultWindow = dh;
Ir.defaultFetch = mh;
var {
  defaultFetch: u1
} = Ir, h1 = typeof DOMParser < "u" ? DOMParser : null;
class Hi {
  constructor() {
    var {
      fetch: t = u1,
      DOMParser: e = h1
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = t, this.DOMParser = e;
  }
  parse(t) {
    var e = this;
    return bt(function* () {
      return t.startsWith("<") ? e.parseFromString(t) : e.load(t);
    })();
  }
  parseFromString(t) {
    var e = new this.DOMParser();
    try {
      return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
    } catch {
      return this.checkDocument(e.parseFromString(t, "text/xml"));
    }
  }
  checkDocument(t) {
    var e = t.getElementsByTagName("parsererror")[0];
    if (e)
      throw new Error(e.textContent);
    return t;
  }
  load(t) {
    var e = this;
    return bt(function* () {
      var r = yield e.fetch(t), n = yield r.text();
      return e.parseFromString(n);
    })();
  }
}
class l1 {
  constructor(t, e) {
    this.type = "translate", this.point = null, this.point = L.parse(e);
  }
  apply(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.translate(e || 0, r || 0);
  }
  unapply(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.translate(-1 * e || 0, -1 * r || 0);
  }
  applyToPoint(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
  }
}
class c1 {
  constructor(t, e, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var n = nt(e);
    this.angle = new T(t, "angle", n[0]), this.originX = r[0], this.originY = r[1], this.cx = n[1] || 0, this.cy = n[2] || 0;
  }
  apply(t) {
    var {
      cx: e,
      cy: r,
      originX: n,
      originY: a,
      angle: o
    } = this, s = e + n.getPixels("x"), u = r + a.getPixels("y");
    t.translate(s, u), t.rotate(o.getRadians()), t.translate(-s, -u);
  }
  unapply(t) {
    var {
      cx: e,
      cy: r,
      originX: n,
      originY: a,
      angle: o
    } = this, s = e + n.getPixels("x"), u = r + a.getPixels("y");
    t.translate(s, u), t.rotate(-1 * o.getRadians()), t.translate(-s, -u);
  }
  applyToPoint(t) {
    var {
      cx: e,
      cy: r,
      angle: n
    } = this, a = n.getRadians();
    t.applyTransform([
      1,
      0,
      0,
      1,
      e || 0,
      r || 0
      // this.p.y
    ]), t.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]), t.applyTransform([
      1,
      0,
      0,
      1,
      -e || 0,
      -r || 0
      // -this.p.y
    ]);
  }
}
class g1 {
  constructor(t, e, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var n = L.parseScale(e);
    (n.x === 0 || n.y === 0) && (n.x = ie, n.y = ie), this.scale = n, this.originX = r[0], this.originY = r[1];
  }
  apply(t) {
    var {
      scale: {
        x: e,
        y: r
      },
      originX: n,
      originY: a
    } = this, o = n.getPixels("x"), s = a.getPixels("y");
    t.translate(o, s), t.scale(e, r || e), t.translate(-o, -s);
  }
  unapply(t) {
    var {
      scale: {
        x: e,
        y: r
      },
      originX: n,
      originY: a
    } = this, o = n.getPixels("x"), s = a.getPixels("y");
    t.translate(o, s), t.scale(1 / e, 1 / r || e), t.translate(-o, -s);
  }
  applyToPoint(t) {
    var {
      x: e,
      y: r
    } = this.scale;
    t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
  }
}
class yh {
  constructor(t, e, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = nt(e), this.originX = r[0], this.originY = r[1];
  }
  apply(t) {
    var {
      originX: e,
      originY: r,
      matrix: n
    } = this, a = e.getPixels("x"), o = r.getPixels("y");
    t.translate(a, o), t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), t.translate(-a, -o);
  }
  unapply(t) {
    var {
      originX: e,
      originY: r,
      matrix: n
    } = this, a = n[0], o = n[2], s = n[4], u = n[1], h = n[3], l = n[5], g = 0, f = 0, c = 1, d = 1 / (a * (h * c - l * f) - o * (u * c - l * g) + s * (u * f - h * g)), p = e.getPixels("x"), m = r.getPixels("y");
    t.translate(p, m), t.transform(d * (h * c - l * f), d * (l * g - u * c), d * (s * f - o * c), d * (a * c - s * g), d * (o * l - s * h), d * (s * u - a * l)), t.translate(-p, -m);
  }
  applyToPoint(t) {
    t.applyTransform(this.matrix);
  }
}
class vh extends yh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skew", this.angle = null, this.angle = new T(t, "angle", e);
  }
}
class f1 extends vh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class p1 extends vh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function d1(i) {
  return le(i).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function m1(i) {
  var [t, e] = i.split("(");
  return [t.trim(), e.trim().replace(")", "")];
}
class Bt {
  constructor(t, e, r) {
    this.document = t, this.transforms = [];
    var n = d1(e);
    n.forEach((a) => {
      if (a !== "none") {
        var [o, s] = m1(a), u = Bt.transformTypes[o];
        typeof u < "u" && this.transforms.push(new u(this.document, s, r));
      }
    });
  }
  static fromElement(t, e) {
    var r = e.getStyle("transform", !1, !0), [n, a = n] = e.getStyle("transform-origin", !1, !0).split(), o = [n, a];
    return r.hasValue() ? new Bt(t, r.getString(), o) : null;
  }
  apply(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = 0; n < r; n++)
      e[n].apply(t);
  }
  unapply(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = r - 1; n >= 0; n--)
      e[n].unapply(t);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = 0; n < r; n++)
      e[n].applyToPoint(t);
  }
}
Bt.transformTypes = {
  translate: l1,
  rotate: c1,
  scale: g1,
  matrix: yh,
  skewX: f1,
  skewY: p1
};
class R {
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = t, this.node = e, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!e || e.nodeType !== 1)) {
      if (Array.from(e.attributes).forEach((s) => {
        var u = $x(s.nodeName);
        this.attributes[u] = new T(t, u, s.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var n = this.getAttribute("style").getString().split(";").map((s) => s.trim());
        n.forEach((s) => {
          if (s) {
            var [u, h] = s.split(":").map((l) => l.trim());
            this.styles[u] = new T(t, u, h);
          }
        });
      }
      var {
        definitions: a
      } = t, o = this.getAttribute("id");
      o.hasValue() && (a[o.getString()] || (a[o.getString()] = this)), Array.from(e.childNodes).forEach((s) => {
        if (s.nodeType === 1)
          this.addChild(s);
        else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
          var u = t.createTextNode(s);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.attributes[t];
    if (!r && e) {
      var n = new T(this.document, t, "");
      return this.attributes[t] = n, n;
    }
    return r || T.empty(this.document);
  }
  getHrefAttribute() {
    for (var t in this.attributes)
      if (t === "href" || t.endsWith(":href"))
        return this.attributes[t];
    return T.empty(this.document);
  }
  getStyle(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = this.styles[t];
    if (n)
      return n;
    var a = this.getAttribute(t);
    if (a != null && a.hasValue())
      return this.styles[t] = a, a;
    if (!r) {
      var {
        parent: o
      } = this;
      if (o) {
        var s = o.getStyle(t);
        if (s != null && s.hasValue())
          return s;
      }
    }
    if (e) {
      var u = new T(this.document, t, "");
      return this.styles[t] = u, u;
    }
    return n || T.empty(this.document);
  }
  render(t) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (t.save(), this.getStyle("mask").hasValue()) {
        var e = this.getStyle("mask").getDefinition();
        e && (this.applyEffects(t), e.apply(t, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(t), r.apply(t, this));
      } else
        this.setContext(t), this.renderChildren(t), this.clearContext(t);
      t.restore();
    }
  }
  setContext(t) {
  }
  applyEffects(t) {
    var e = Bt.fromElement(this.document, this);
    e && e.apply(t);
    var r = this.getStyle("clip-path", !1, !0);
    if (r.hasValue()) {
      var n = r.getDefinition();
      n && n.apply(t);
    }
  }
  clearContext(t) {
  }
  renderChildren(t) {
    this.children.forEach((e) => {
      e.render(t);
    });
  }
  addChild(t) {
    var e = t instanceof R ? t : this.document.createElement(t);
    e.parent = this, R.ignoreChildTypes.includes(e.type) || this.children.push(e);
  }
  matchesSelector(t) {
    var e, {
      node: r
    } = this;
    if (typeof r.matches == "function")
      return r.matches(t);
    var n = (e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, "class");
    return !n || n === "" ? !1 : n.split(" ").some((a) => ".".concat(a) === t);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: t,
      stylesSpecificity: e
    } = this.document;
    for (var r in t)
      if (!r.startsWith("@") && this.matchesSelector(r)) {
        var n = t[r], a = e[r];
        if (n)
          for (var o in n) {
            var s = this.stylesSpecificity[o];
            typeof s > "u" && (s = "000"), a >= s && (this.styles[o] = n[o], this.stylesSpecificity[o] = a);
          }
      }
  }
  removeStyles(t, e) {
    var r = e.reduce((n, a) => {
      var o = t.getStyle(a);
      if (!o.hasValue())
        return n;
      var s = o.getString();
      return o.setValue(""), [...n, [a, s]];
    }, []);
    return r;
  }
  restoreStyles(t, e) {
    e.forEach((r) => {
      var [n, a] = r;
      t.getStyle(n, !0).setValue(a);
    });
  }
  isFirstChild() {
    var t;
    return ((t = this.parent) === null || t === void 0 ? void 0 : t.children.indexOf(this)) === 0;
  }
}
R.ignoreChildTypes = ["title"];
class y1 extends R {
  constructor(t, e, r) {
    super(t, e, r);
  }
}
function v1(i) {
  var t = i.trim();
  return /^('|")/.test(t) ? t : '"'.concat(t, '"');
}
function x1(i) {
  return typeof process > "u" ? i : i.trim().split(",").map(v1).join(",");
}
function b1(i) {
  if (!i)
    return "";
  var t = i.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(t) ? t : "";
  }
}
function w1(i) {
  if (!i)
    return "";
  var t = i.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^[\d.]+$/.test(t) ? t : "";
  }
}
class J {
  constructor(t, e, r, n, a, o) {
    var s = o ? typeof o == "string" ? J.parse(o) : o : {};
    this.fontFamily = a || s.fontFamily, this.fontSize = n || s.fontSize, this.fontStyle = t || s.fontStyle, this.fontWeight = r || s.fontWeight, this.fontVariant = e || s.fontVariant;
  }
  static parse() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, r = "", n = "", a = "", o = "", s = "", u = le(t).trim().split(" "), h = {
      fontSize: !1,
      fontStyle: !1,
      fontWeight: !1,
      fontVariant: !1
    };
    return u.forEach((l) => {
      switch (!0) {
        case (!h.fontStyle && J.styles.includes(l)):
          l !== "inherit" && (r = l), h.fontStyle = !0;
          break;
        case (!h.fontVariant && J.variants.includes(l)):
          l !== "inherit" && (n = l), h.fontStyle = !0, h.fontVariant = !0;
          break;
        case (!h.fontWeight && J.weights.includes(l)):
          l !== "inherit" && (a = l), h.fontStyle = !0, h.fontVariant = !0, h.fontWeight = !0;
          break;
        case !h.fontSize:
          l !== "inherit" && ([o] = l.split("/")), h.fontStyle = !0, h.fontVariant = !0, h.fontWeight = !0, h.fontSize = !0;
          break;
        default:
          l !== "inherit" && (s += l);
      }
    }), new J(r, n, a, o, s, e);
  }
  toString() {
    return [
      b1(this.fontStyle),
      this.fontVariant,
      w1(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      x1(this.fontFamily)
    ].join(" ").trim();
  }
}
J.styles = "normal|italic|oblique|inherit";
J.variants = "normal|small-caps|inherit";
J.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class ft {
  constructor() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = t, this.y1 = e, this.x2 = r, this.y2 = n, this.addPoint(t, e), this.addPoint(r, n);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(t, e) {
    typeof t < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), typeof e < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
  }
  addX(t) {
    this.addPoint(t, null);
  }
  addY(t) {
    this.addPoint(null, t);
  }
  addBoundingBox(t) {
    if (t) {
      var {
        x1: e,
        y1: r,
        x2: n,
        y2: a
      } = t;
      this.addPoint(e, r), this.addPoint(n, a);
    }
  }
  sumCubic(t, e, r, n, a) {
    return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * n + Math.pow(t, 3) * a;
  }
  bezierCurveAdd(t, e, r, n, a) {
    var o = 6 * e - 12 * r + 6 * n, s = -3 * e + 9 * r - 9 * n + 3 * a, u = 3 * r - 3 * e;
    if (s === 0) {
      if (o === 0)
        return;
      var h = -u / o;
      0 < h && h < 1 && (t ? this.addX(this.sumCubic(h, e, r, n, a)) : this.addY(this.sumCubic(h, e, r, n, a)));
      return;
    }
    var l = Math.pow(o, 2) - 4 * u * s;
    if (!(l < 0)) {
      var g = (-o + Math.sqrt(l)) / (2 * s);
      0 < g && g < 1 && (t ? this.addX(this.sumCubic(g, e, r, n, a)) : this.addY(this.sumCubic(g, e, r, n, a)));
      var f = (-o - Math.sqrt(l)) / (2 * s);
      0 < f && f < 1 && (t ? this.addX(this.sumCubic(f, e, r, n, a)) : this.addY(this.sumCubic(f, e, r, n, a)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(t, e, r, n, a, o, s, u) {
    this.addPoint(t, e), this.addPoint(s, u), this.bezierCurveAdd(!0, t, r, a, s), this.bezierCurveAdd(!1, e, n, o, u);
  }
  addQuadraticCurve(t, e, r, n, a, o) {
    var s = t + 0.6666666666666666 * (r - t), u = e + 2 / 3 * (n - e), h = s + 1 / 3 * (a - t), l = u + 1 / 3 * (o - e);
    this.addBezierCurve(t, e, s, h, u, l, a, o);
  }
  isPointInBox(t, e) {
    var {
      x1: r,
      y1: n,
      x2: a,
      y2: o
    } = this;
    return r <= t && t <= a && n <= e && e <= o;
  }
}
class E extends v {
  constructor(t) {
    super(t.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new L(0, 0), this.control = new L(0, 0), this.current = new L(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: t,
      commands: e
    } = this;
    return t >= e.length - 1;
  }
  next() {
    var t = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = t, t;
  }
  getPoint() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new L(this.command[t], this.command[e]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(t, e) {
    var r = this.getPoint(t, e);
    return this.control = r, r;
  }
  getAsCurrentPoint(t, e) {
    var r = this.getPoint(t, e);
    return this.current = r, r;
  }
  getReflectedControlPoint() {
    var t = this.previousCommand.type;
    if (t !== v.CURVE_TO && t !== v.SMOOTH_CURVE_TO && t !== v.QUAD_TO && t !== v.SMOOTH_QUAD_TO)
      return this.current;
    var {
      current: {
        x: e,
        y: r
      },
      control: {
        x: n,
        y: a
      }
    } = this, o = new L(2 * e - n, 2 * r - a);
    return o;
  }
  makeAbsolute(t) {
    if (this.command.relative) {
      var {
        x: e,
        y: r
      } = this.current;
      t.x += e, t.y += r;
    }
    return t;
  }
  addMarker(t, e, r) {
    var {
      points: n,
      angles: a
    } = this;
    r && a.length > 0 && !a[a.length - 1] && (a[a.length - 1] = n[n.length - 1].angleTo(r)), this.addMarkerAngle(t, e ? e.angleTo(t) : null);
  }
  addMarkerAngle(t, e) {
    this.points.push(t), this.angles.push(e);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: t
    } = this, e = t.length, r = 0; r < e; r++)
      if (!t[r]) {
        for (var n = r + 1; n < e; n++)
          if (t[n]) {
            t[r] = t[n];
            break;
          }
      }
    return t;
  }
}
class Ht extends R {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = !1;
  }
  calculateOpacity() {
    for (var t = 1, e = this; e; ) {
      var r = e.getStyle("opacity", !1, !0);
      r.hasValue(!0) && (t *= r.getNumber()), e = e.parent;
    }
    return t;
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!e) {
      var r = this.getStyle("fill"), n = this.getStyle("fill-opacity"), a = this.getStyle("stroke"), o = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, n);
        s && (t.fillStyle = s);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (t.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (n.hasValue()) {
        var h = new T(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
        t.fillStyle = h;
      }
      if (a.isUrlDefinition()) {
        var l = a.getFillStyleDefinition(this, o);
        l && (t.strokeStyle = l);
      } else if (a.hasValue()) {
        a.getString() === "currentColor" && a.setValue(this.getStyle("color").getColor());
        var g = a.getString();
        g !== "inherit" && (t.strokeStyle = g === "none" ? "rgba(0,0,0,0)" : g);
      }
      if (o.hasValue()) {
        var f = new T(this.document, "stroke", t.strokeStyle).addOpacity(o).getString();
        t.strokeStyle = f;
      }
      var c = this.getStyle("stroke-width");
      if (c.hasValue()) {
        var d = c.getPixels();
        t.lineWidth = d || ie;
      }
      var p = this.getStyle("stroke-linecap"), m = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), b = this.getStyle("stroke-dasharray"), x = this.getStyle("stroke-dashoffset");
      if (p.hasValue() && (t.lineCap = p.getString()), m.hasValue() && (t.lineJoin = m.getString()), y.hasValue() && (t.miterLimit = y.getNumber()), b.hasValue() && b.getString() !== "none") {
        var w = nt(b.getString());
        typeof t.setLineDash < "u" ? t.setLineDash(w) : typeof t.webkitLineDash < "u" ? t.webkitLineDash = w : typeof t.mozDash < "u" && !(w.length === 1 && w[0] === 0) && (t.mozDash = w);
        var A = x.getPixels();
        typeof t.lineDashOffset < "u" ? t.lineDashOffset = A : typeof t.webkitLineDashOffset < "u" ? t.webkitLineDashOffset = A : typeof t.mozDashOffset < "u" && (t.mozDashOffset = A);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof t.font < "u") {
      var O = this.getStyle("font"), S = this.getStyle("font-style"), C = this.getStyle("font-variant"), V = this.getStyle("font-weight"), I = this.getStyle("font-size"), j = this.getStyle("font-family"), N = new J(S.getString(), C.getString(), V.getString(), I.hasValue() ? "".concat(I.getPixels(!0), "px") : "", j.getString(), J.parse(O.getString(), t.font));
      S.setValue(N.fontStyle), C.setValue(N.fontVariant), V.setValue(N.fontWeight), I.setValue(N.fontSize), j.setValue(N.fontFamily), t.font = N.toString(), I.isPixels() && (this.document.emSize = I.getPixels(), this.modifiedEmSizeStack = !0);
    }
    e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity());
  }
  clearContext(t) {
    super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class P extends Ht {
  constructor(t, e, r) {
    super(t, e, r), this.type = "path", this.pathParser = null, this.pathParser = new E(this.getAttribute("d").getString());
  }
  path(t) {
    var {
      pathParser: e
    } = this, r = new ft();
    for (e.reset(), t && t.beginPath(); !e.isEnd(); )
      switch (e.next().type) {
        case E.MOVE_TO:
          this.pathM(t, r);
          break;
        case E.LINE_TO:
          this.pathL(t, r);
          break;
        case E.HORIZ_LINE_TO:
          this.pathH(t, r);
          break;
        case E.VERT_LINE_TO:
          this.pathV(t, r);
          break;
        case E.CURVE_TO:
          this.pathC(t, r);
          break;
        case E.SMOOTH_CURVE_TO:
          this.pathS(t, r);
          break;
        case E.QUAD_TO:
          this.pathQ(t, r);
          break;
        case E.SMOOTH_QUAD_TO:
          this.pathT(t, r);
          break;
        case E.ARC:
          this.pathA(t, r);
          break;
        case E.CLOSE_PATH:
          this.pathZ(t, r);
          break;
      }
    return r;
  }
  getBoundingBox(t) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: t
    } = this, e = t.getMarkerPoints(), r = t.getMarkerAngles(), n = e.map((a, o) => [a, r[o]]);
    return n;
  }
  renderChildren(t) {
    this.path(t), this.document.screen.mouse.checkPath(this, t);
    var e = this.getStyle("fill-rule");
    t.fillStyle !== "" && (e.getString("inherit") !== "inherit" ? t.fill(e.getString()) : t.fill()), t.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore()) : t.stroke());
    var r = this.getMarkers();
    if (r) {
      var n = r.length - 1, a = this.getStyle("marker-start"), o = this.getStyle("marker-mid"), s = this.getStyle("marker-end");
      if (a.isUrlDefinition()) {
        var u = a.getDefinition(), [h, l] = r[0];
        u.render(t, h, l);
      }
      if (o.isUrlDefinition())
        for (var g = o.getDefinition(), f = 1; f < n; f++) {
          var [c, d] = r[f];
          g.render(t, c, d);
        }
      if (s.isUrlDefinition()) {
        var p = s.getDefinition(), [m, y] = r[n];
        p.render(t, m, y);
      }
    }
  }
  static pathM(t) {
    var e = t.getAsCurrentPoint();
    return t.start = t.current, {
      point: e
    };
  }
  pathM(t, e) {
    var {
      pathParser: r
    } = this, {
      point: n
    } = P.pathM(r), {
      x: a,
      y: o
    } = n;
    r.addMarker(n), e.addPoint(a, o), t && t.moveTo(a, o);
  }
  static pathL(t) {
    var {
      current: e
    } = t, r = t.getAsCurrentPoint();
    return {
      current: e,
      point: r
    };
  }
  pathL(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = P.pathL(r), {
      x: o,
      y: s
    } = a;
    r.addMarker(a, n), e.addPoint(o, s), t && t.lineTo(o, s);
  }
  static pathH(t) {
    var {
      current: e,
      command: r
    } = t, n = new L((r.relative ? e.x : 0) + r.x, e.y);
    return t.current = n, {
      current: e,
      point: n
    };
  }
  pathH(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = P.pathH(r), {
      x: o,
      y: s
    } = a;
    r.addMarker(a, n), e.addPoint(o, s), t && t.lineTo(o, s);
  }
  static pathV(t) {
    var {
      current: e,
      command: r
    } = t, n = new L(e.x, (r.relative ? e.y : 0) + r.y);
    return t.current = n, {
      current: e,
      point: n
    };
  }
  pathV(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = P.pathV(r), {
      x: o,
      y: s
    } = a;
    r.addMarker(a, n), e.addPoint(o, s), t && t.lineTo(o, s);
  }
  static pathC(t) {
    var {
      current: e
    } = t, r = t.getPoint("x1", "y1"), n = t.getAsControlPoint("x2", "y2"), a = t.getAsCurrentPoint();
    return {
      current: e,
      point: r,
      controlPoint: n,
      currentPoint: a
    };
  }
  pathC(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a,
      controlPoint: o,
      currentPoint: s
    } = P.pathC(r);
    r.addMarker(s, o, a), e.addBezierCurve(n.x, n.y, a.x, a.y, o.x, o.y, s.x, s.y), t && t.bezierCurveTo(a.x, a.y, o.x, o.y, s.x, s.y);
  }
  static pathS(t) {
    var {
      current: e
    } = t, r = t.getReflectedControlPoint(), n = t.getAsControlPoint("x2", "y2"), a = t.getAsCurrentPoint();
    return {
      current: e,
      point: r,
      controlPoint: n,
      currentPoint: a
    };
  }
  pathS(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a,
      controlPoint: o,
      currentPoint: s
    } = P.pathS(r);
    r.addMarker(s, o, a), e.addBezierCurve(n.x, n.y, a.x, a.y, o.x, o.y, s.x, s.y), t && t.bezierCurveTo(a.x, a.y, o.x, o.y, s.x, s.y);
  }
  static pathQ(t) {
    var {
      current: e
    } = t, r = t.getAsControlPoint("x1", "y1"), n = t.getAsCurrentPoint();
    return {
      current: e,
      controlPoint: r,
      currentPoint: n
    };
  }
  pathQ(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      controlPoint: a,
      currentPoint: o
    } = P.pathQ(r);
    r.addMarker(o, a, a), e.addQuadraticCurve(n.x, n.y, a.x, a.y, o.x, o.y), t && t.quadraticCurveTo(a.x, a.y, o.x, o.y);
  }
  static pathT(t) {
    var {
      current: e
    } = t, r = t.getReflectedControlPoint();
    t.control = r;
    var n = t.getAsCurrentPoint();
    return {
      current: e,
      controlPoint: r,
      currentPoint: n
    };
  }
  pathT(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      controlPoint: a,
      currentPoint: o
    } = P.pathT(r);
    r.addMarker(o, a, a), e.addQuadraticCurve(n.x, n.y, a.x, a.y, o.x, o.y), t && t.quadraticCurveTo(a.x, a.y, o.x, o.y);
  }
  static pathA(t) {
    var {
      current: e,
      command: r
    } = t, {
      rX: n,
      rY: a,
      xRot: o,
      lArcFlag: s,
      sweepFlag: u
    } = r, h = o * (Math.PI / 180), l = t.getAsCurrentPoint(), g = new L(Math.cos(h) * (e.x - l.x) / 2 + Math.sin(h) * (e.y - l.y) / 2, -Math.sin(h) * (e.x - l.x) / 2 + Math.cos(h) * (e.y - l.y) / 2), f = Math.pow(g.x, 2) / Math.pow(n, 2) + Math.pow(g.y, 2) / Math.pow(a, 2);
    f > 1 && (n *= Math.sqrt(f), a *= Math.sqrt(f));
    var c = (s === u ? -1 : 1) * Math.sqrt((Math.pow(n, 2) * Math.pow(a, 2) - Math.pow(n, 2) * Math.pow(g.y, 2) - Math.pow(a, 2) * Math.pow(g.x, 2)) / (Math.pow(n, 2) * Math.pow(g.y, 2) + Math.pow(a, 2) * Math.pow(g.x, 2)));
    isNaN(c) && (c = 0);
    var d = new L(c * n * g.y / a, c * -a * g.x / n), p = new L((e.x + l.x) / 2 + Math.cos(h) * d.x - Math.sin(h) * d.y, (e.y + l.y) / 2 + Math.sin(h) * d.x + Math.cos(h) * d.y), m = So([1, 0], [(g.x - d.x) / n, (g.y - d.y) / a]), y = [(g.x - d.x) / n, (g.y - d.y) / a], b = [(-g.x - d.x) / n, (-g.y - d.y) / a], x = So(y, b);
    return bn(y, b) <= -1 && (x = Math.PI), bn(y, b) >= 1 && (x = 0), {
      currentPoint: l,
      rX: n,
      rY: a,
      sweepFlag: u,
      xAxisRotation: h,
      centp: p,
      a1: m,
      ad: x
    };
  }
  pathA(t, e) {
    var {
      pathParser: r
    } = this, {
      currentPoint: n,
      rX: a,
      rY: o,
      sweepFlag: s,
      xAxisRotation: u,
      centp: h,
      a1: l,
      ad: g
    } = P.pathA(r), f = 1 - s ? 1 : -1, c = l + f * (g / 2), d = new L(h.x + a * Math.cos(c), h.y + o * Math.sin(c));
    if (r.addMarkerAngle(d, c - f * Math.PI / 2), r.addMarkerAngle(n, c - f * Math.PI), e.addPoint(n.x, n.y), t && !isNaN(l) && !isNaN(g)) {
      var p = a > o ? a : o, m = a > o ? 1 : a / o, y = a > o ? o / a : 1;
      t.translate(h.x, h.y), t.rotate(u), t.scale(m, y), t.arc(0, 0, p, l, l + g, !!(1 - s)), t.scale(1 / m, 1 / y), t.rotate(-u), t.translate(-h.x, -h.y);
    }
  }
  static pathZ(t) {
    t.current = t.start;
  }
  pathZ(t, e) {
    P.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
  }
}
class xh extends P {
  constructor(t, e, r) {
    super(t, e, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class Ct extends Ht {
  constructor(t, e, r) {
    super(t, e, new.target === Ct ? !0 : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(t, e);
    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    r && (t.textBaseline = r);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(t) {
    if (this.type !== "text")
      return this.getTElementBoundingBox(t);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
    var e = null;
    return this.children.forEach((r, n) => {
      var a = this.getChildBoundingBox(t, this, this, n);
      e ? e.addBoundingBox(a) : e = a;
    }), e;
  }
  getFontSize() {
    var {
      document: t,
      parent: e
    } = this, r = J.parse(t.ctx.font).fontSize, n = e.getStyle("font-size").getNumber(r);
    return n;
  }
  getTElementBoundingBox(t) {
    var e = this.getFontSize();
    return new ft(this.x, this.y - e, this.x + this.measureText(t), this.y);
  }
  getGlyph(t, e, r) {
    var n = e[r], a = null;
    if (t.isArabic) {
      var o = e.length, s = e[r - 1], u = e[r + 1], h = "isolated";
      if ((r === 0 || s === " ") && r < o - 1 && u !== " " && (h = "terminal"), r > 0 && s !== " " && r < o - 1 && u !== " " && (h = "medial"), r > 0 && s !== " " && (r === o - 1 || u === " ") && (h = "initial"), typeof t.glyphs[n] < "u") {
        var l = t.glyphs[n];
        a = l instanceof xh ? l : l[h];
      }
    } else
      a = t.glyphs[n];
    return a || (a = t.missingGlyph), a;
  }
  getText() {
    return "";
  }
  getTextFromNode(t) {
    var e = t || this.node, r = Array.from(e.parentNode.childNodes), n = r.indexOf(e), a = r.length - 1, o = le(
      // textNode.value
      // || textNode.text
      e.textContent || ""
    );
    return n === 0 && (o = qx(o)), n === a && (o = Gx(o)), o;
  }
  renderChildren(t) {
    if (this.type !== "text") {
      this.renderTElementChildren(t);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t), this.children.forEach((r, n) => {
      this.renderChild(t, this, this, n);
    });
    var {
      mouse: e
    } = this.document.screen;
    e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
  }
  renderTElementChildren(t) {
    var {
      document: e,
      parent: r
    } = this, n = this.getText(), a = r.getStyle("font-family").getDefinition();
    if (a) {
      for (var {
        unitsPerEm: o
      } = a.fontFace, s = J.parse(e.ctx.font), u = r.getStyle("font-size").getNumber(s.fontSize), h = r.getStyle("font-style").getString(s.fontStyle), l = u / o, g = a.isRTL ? n.split("").reverse().join("") : n, f = nt(r.getAttribute("dx").getString()), c = g.length, d = 0; d < c; d++) {
        var p = this.getGlyph(a, g, d);
        t.translate(this.x, this.y), t.scale(l, -l);
        var m = t.lineWidth;
        t.lineWidth = t.lineWidth * o / u, h === "italic" && t.transform(1, 0, 0.4, 1, 0, 0), p.render(t), h === "italic" && t.transform(1, 0, -0.4, 1, 0, 0), t.lineWidth = m, t.scale(1 / l, -1 / l), t.translate(-this.x, -this.y), this.x += u * (p.horizAdvX || a.horizAdvX) / o, typeof f[d] < "u" && !isNaN(f[d]) && (this.x += f[d]);
      }
      return;
    }
    var {
      x: y,
      y: b
    } = this;
    t.fillStyle && t.fillText(n, y, b), t.strokeStyle && t.strokeText(n, y, b);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var t = this.leafTexts[this.textChunkStart], e = t.getStyle("text-anchor").getString("start"), r = !1, n = 0;
      e === "start" && !r || e === "end" && r ? n = t.x - this.minX : e === "end" && !r || e === "start" && r ? n = t.x - this.maxX : n = t.x - (this.minX + this.maxX) / 2;
      for (var a = this.textChunkStart; a < this.leafTexts.length; a++)
        this.leafTexts[a].x += n;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(t) {
    this.children.forEach((e, r) => {
      this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(t, e, r, n) {
    var a = r.children[n];
    a.children.length > 0 ? a.children.forEach((o, s) => {
      e.adjustChildCoordinatesRecursiveCore(t, e, a, s);
    }) : this.adjustChildCoordinates(t, e, r, n);
  }
  adjustChildCoordinates(t, e, r, n) {
    var a = r.children[n];
    if (typeof a.measureText != "function")
      return a;
    t.save(), a.setContext(t, !0);
    var o = a.getAttribute("x"), s = a.getAttribute("y"), u = a.getAttribute("dx"), h = a.getAttribute("dy"), l = a.getStyle("font-family").getDefinition(), g = !!l && l.isRTL;
    n === 0 && (o.hasValue() || o.setValue(a.getInheritedAttribute("x")), s.hasValue() || s.setValue(a.getInheritedAttribute("y")), u.hasValue() || u.setValue(a.getInheritedAttribute("dx")), h.hasValue() || h.setValue(a.getInheritedAttribute("dy")));
    var f = a.measureText(t);
    return g && (e.x -= f), o.hasValue() ? (e.applyAnchoring(), a.x = o.getPixels("x"), u.hasValue() && (a.x += u.getPixels("x"))) : (u.hasValue() && (e.x += u.getPixels("x")), a.x = e.x), e.x = a.x, g || (e.x += f), s.hasValue() ? (a.y = s.getPixels("y"), h.hasValue() && (a.y += h.getPixels("y"))) : (h.hasValue() && (e.y += h.getPixels("y")), a.y = e.y), e.y = a.y, e.leafTexts.push(a), e.minX = Math.min(e.minX, a.x, a.x + f), e.maxX = Math.max(e.maxX, a.x, a.x + f), a.clearContext(t), t.restore(), a;
  }
  getChildBoundingBox(t, e, r, n) {
    var a = r.children[n];
    if (typeof a.getBoundingBox != "function")
      return null;
    var o = a.getBoundingBox(t);
    return o ? (a.children.forEach((s, u) => {
      var h = e.getChildBoundingBox(t, e, a, u);
      o.addBoundingBox(h);
    }), o) : null;
  }
  renderChild(t, e, r, n) {
    var a = r.children[n];
    a.render(t), a.children.forEach((o, s) => {
      e.renderChild(t, e, a, s);
    });
  }
  measureText(t) {
    var {
      measureCache: e
    } = this;
    if (~e)
      return e;
    var r = this.getText(), n = this.measureTargetText(t, r);
    return this.measureCache = n, n;
  }
  measureTargetText(t, e) {
    if (!e.length)
      return 0;
    var {
      parent: r
    } = this, n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (var a = this.getFontSize(), o = n.isRTL ? e.split("").reverse().join("") : e, s = nt(r.getAttribute("dx").getString()), u = o.length, h = 0, l = 0; l < u; l++) {
        var g = this.getGlyph(n, o, l);
        h += (g.horizAdvX || n.horizAdvX) * a / n.fontFace.unitsPerEm, typeof s[l] < "u" && !isNaN(s[l]) && (h += s[l]);
      }
      return h;
    }
    if (!t.measureText)
      return e.length * 10;
    t.save(), this.setContext(t, !0);
    var {
      width: f
    } = t.measureText(e);
    return this.clearContext(t), t.restore(), f;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(t) {
    for (var e = this; e instanceof Ct && e.isFirstChild(); ) {
      var r = e.parent.getAttribute(t);
      if (r.hasValue(!0))
        return r.getValue("0");
      e = e.parent;
    }
    return null;
  }
}
class _r extends Ct {
  constructor(t, e, r) {
    super(t, e, new.target === _r ? !0 : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class S1 extends _r {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class Ve extends Ht {
  constructor() {
    super(...arguments), this.type = "svg", this.root = !1;
  }
  setContext(t) {
    var e, {
      document: r
    } = this, {
      screen: n,
      window: a
    } = r, o = t.canvas;
    if (n.setDefaults(t), o.style && typeof t.font < "u" && a && typeof a.getComputedStyle < "u") {
      t.font = a.getComputedStyle(o).getPropertyValue("font");
      var s = new T(r, "fontSize", J.parse(t.font).fontSize);
      s.hasValue() && (r.rootEmSize = s.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: h
    } = n.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var l = this.getAttribute("refX"), g = this.getAttribute("refY"), f = this.getAttribute("viewBox"), c = f.hasValue() ? nt(f.getString()) : null, d = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", p = 0, m = 0, y = 0, b = 0;
    c && (p = c[0], m = c[1]), this.root || (u = this.getStyle("width").getPixels("x"), h = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = p, b = m, p = 0, m = 0)), n.viewPort.setCurrent(u, h), this.node && (!this.parent || ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), c && (u = c[2], h = c[3]), r.setViewBox({
      ctx: t,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: n.viewPort.width,
      desiredWidth: u,
      height: n.viewPort.height,
      desiredHeight: h,
      minX: p,
      minY: m,
      refX: l.getValue(),
      refY: g.getValue(),
      clip: d,
      clipX: y,
      clipY: b
    }), c && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(u, h));
  }
  clearContext(t) {
    super.clearContext(t), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = this.getAttribute("width", !0), a = this.getAttribute("height", !0), o = this.getAttribute("viewBox"), s = this.getAttribute("style"), u = n.getNumber(0), h = a.getNumber(0);
    if (r)
      if (typeof r == "string")
        this.getAttribute("preserveAspectRatio", !0).setValue(r);
      else {
        var l = this.getAttribute("preserveAspectRatio");
        l.hasValue() && l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (n.setValue(t), a.setValue(e), o.hasValue() || o.setValue("0 0 ".concat(u || t, " ").concat(h || e)), s.hasValue()) {
      var g = this.getStyle("width"), f = this.getStyle("height");
      g.hasValue() && g.setValue("".concat(t, "px")), f.hasValue() && f.setValue("".concat(e, "px"));
    }
  }
}
class bh extends P {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(t) {
    var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), n = this.getStyle("width", !1, !0).getPixels("x"), a = this.getStyle("height", !1, !0).getPixels("y"), o = this.getAttribute("rx"), s = this.getAttribute("ry"), u = o.getPixels("x"), h = s.getPixels("y");
    if (o.hasValue() && !s.hasValue() && (h = u), s.hasValue() && !o.hasValue() && (u = h), u = Math.min(u, n / 2), h = Math.min(h, a / 2), t) {
      var l = 4 * ((Math.sqrt(2) - 1) / 3);
      t.beginPath(), a > 0 && n > 0 && (t.moveTo(e + u, r), t.lineTo(e + n - u, r), t.bezierCurveTo(e + n - u + l * u, r, e + n, r + h - l * h, e + n, r + h), t.lineTo(e + n, r + a - h), t.bezierCurveTo(e + n, r + a - h + l * h, e + n - u + l * u, r + a, e + n - u, r + a), t.lineTo(e + u, r + a), t.bezierCurveTo(e + u - l * u, r + a, e, r + a - h + l * h, e, r + a - h), t.lineTo(e, r + h), t.bezierCurveTo(e, r + h - l * h, e + u - l * u, r, e + u, r), t.closePath());
    }
    return new ft(e, r, e + n, r + a);
  }
  getMarkers() {
    return null;
  }
}
class T1 extends P {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(t) {
    var e = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), n = this.getAttribute("r").getPixels();
    return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, Math.PI * 2, !1), t.closePath()), new ft(e - n, r - n, e + n, r + n);
  }
  getMarkers() {
    return null;
  }
}
class O1 extends P {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(t) {
    var e = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), n = this.getAttribute("ry").getPixels("y"), a = this.getAttribute("cx").getPixels("x"), o = this.getAttribute("cy").getPixels("y");
    return t && r > 0 && n > 0 && (t.beginPath(), t.moveTo(a + r, o), t.bezierCurveTo(a + r, o + e * n, a + e * r, o + n, a, o + n), t.bezierCurveTo(a - e * r, o + n, a - r, o + e * n, a - r, o), t.bezierCurveTo(a - r, o - e * n, a - e * r, o - n, a, o - n), t.bezierCurveTo(a + e * r, o - n, a + r, o - e * n, a + r, o), t.closePath()), new ft(a - r, o - n, a + r, o + n);
  }
  getMarkers() {
    return null;
  }
}
class A1 extends P {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new L(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new L(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(t) {
    var [{
      x: e,
      y: r
    }, {
      x: n,
      y: a
    }] = this.getPoints();
    return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(n, a)), new ft(e, r, n, a);
  }
  getMarkers() {
    var [t, e] = this.getPoints(), r = t.angleTo(e);
    return [[t, r], [e, r]];
  }
}
class wh extends P {
  constructor(t, e, r) {
    super(t, e, r), this.type = "polyline", this.points = [], this.points = L.parsePath(this.getAttribute("points").getString());
  }
  path(t) {
    var {
      points: e
    } = this, [{
      x: r,
      y: n
    }] = e, a = new ft(r, n);
    return t && (t.beginPath(), t.moveTo(r, n)), e.forEach((o) => {
      var {
        x: s,
        y: u
      } = o;
      a.addPoint(s, u), t && t.lineTo(s, u);
    }), a;
  }
  getMarkers() {
    var {
      points: t
    } = this, e = t.length - 1, r = [];
    return t.forEach((n, a) => {
      a !== e && r.push([n, n.angleTo(t[a + 1])]);
    }), r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]), r;
  }
}
class E1 extends wh {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(t) {
    var e = super.path(t), [{
      x: r,
      y: n
    }] = this.points;
    return t && (t.lineTo(r, n), t.closePath()), e;
  }
}
class C1 extends R {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(t, e, r) {
    var n = this.getStyle("width").getPixels("x", !0), a = this.getStyle("height").getPixels("y", !0), o = new Ve(this.document, null);
    o.attributes.viewBox = new T(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.width = new T(this.document, "width", "".concat(n, "px")), o.attributes.height = new T(this.document, "height", "".concat(a, "px")), o.attributes.transform = new T(this.document, "transform", this.getAttribute("patternTransform").getValue()), o.children = this.children;
    var s = this.document.createCanvas(n, a), u = s.getContext("2d"), h = this.getAttribute("x"), l = this.getAttribute("y");
    h.hasValue() && l.hasValue() && u.translate(h.getPixels("x", !0), l.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var g = -1; g <= 1; g++)
      for (var f = -1; f <= 1; f++)
        u.save(), o.attributes.x = new T(this.document, "x", g * s.width), o.attributes.y = new T(this.document, "y", f * s.height), o.render(u), u.restore();
    var c = t.createPattern(s, "repeat");
    return c;
  }
}
class P1 extends R {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(t, e, r) {
    if (e) {
      var {
        x: n,
        y: a
      } = e, o = this.getAttribute("orient").getString("auto"), s = this.getAttribute("markerUnits").getString("strokeWidth");
      t.translate(n, a), o === "auto" && t.rotate(r), s === "strokeWidth" && t.scale(t.lineWidth, t.lineWidth), t.save();
      var u = new Ve(this.document, null);
      u.type = this.type, u.attributes.viewBox = new T(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new T(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new T(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new T(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new T(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new T(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new T(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new T(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(t), t.restore(), s === "strokeWidth" && t.scale(1 / t.lineWidth, 1 / t.lineWidth), o === "auto" && t.rotate(-r), t.translate(-n, -a);
    }
  }
}
class N1 extends R {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class na extends Ht {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(t) {
    var e = new ft();
    return this.children.forEach((r) => {
      e.addBoundingBox(r.getBoundingBox(t));
    }), e;
  }
}
class Sh extends R {
  constructor(t, e, r) {
    super(t, e, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: n,
      children: a
    } = this;
    a.forEach((o) => {
      o.type === "stop" && n.push(o);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(t, e, r) {
    var n = this;
    this.getHrefAttribute().hasValue() && (n = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(n));
    var {
      stops: a
    } = n, o = this.getGradient(t, e);
    if (!o)
      return this.addParentOpacity(r, a[a.length - 1].color);
    if (a.forEach((m) => {
      o.addColorStop(m.offset, this.addParentOpacity(r, m.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: s
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: h
      } = s.screen, [l] = h.viewPorts, g = new bh(s, null);
      g.attributes.x = new T(s, "x", -u / 3), g.attributes.y = new T(s, "y", -u / 3), g.attributes.width = new T(s, "width", u), g.attributes.height = new T(s, "height", u);
      var f = new na(s, null);
      f.attributes.transform = new T(s, "transform", this.getAttribute("gradientTransform").getValue()), f.children = [g];
      var c = new Ve(s, null);
      c.attributes.x = new T(s, "x", 0), c.attributes.y = new T(s, "y", 0), c.attributes.width = new T(s, "width", l.width), c.attributes.height = new T(s, "height", l.height), c.children = [f];
      var d = s.createCanvas(l.width, l.height), p = d.getContext("2d");
      return p.fillStyle = o, c.render(p), p.createPattern(d, "no-repeat");
    }
    return o;
  }
  inheritStopContainer(t) {
    this.attributesToInherit.forEach((e) => {
      !this.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
    });
  }
  addParentOpacity(t, e) {
    if (t.hasValue()) {
      var r = new T(this.document, "color", e);
      return r.addOpacity(t).getColor();
    }
    return e;
  }
}
class M1 extends Sh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === "objectBoundingBox", n = r ? e.getBoundingBox(t) : null;
    if (r && !n)
      return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
    var a = r ? n.x + n.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), o = r ? n.y + n.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), s = r ? n.x + n.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = r ? n.y + n.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return a === s && o === u ? null : t.createLinearGradient(a, o, s, u);
  }
}
class R1 extends Sh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === "objectBoundingBox", n = e.getBoundingBox(t);
    if (r && !n)
      return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
    var a = r ? n.x + n.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), o = r ? n.y + n.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), s = a, u = o;
    this.getAttribute("fx").hasValue() && (s = r ? n.x + n.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? n.y + n.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var h = r ? (n.width + n.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), l = this.getAttribute("fr").getPixels();
    return t.createRadialGradient(s, u, l, a, o, h);
  }
}
class V1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "stop";
    var n = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), a = this.getStyle("stop-opacity"), o = this.getStyle("stop-color", !0);
    o.getString() === "" && o.setValue("#000"), a.hasValue() && (o = o.addOpacity(a)), this.offset = n, this.color = o.getColor();
  }
}
class aa extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, t.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new T(t, "values", null);
    var n = this.getAttribute("values");
    n.hasValue() && this.values.setValue(n.getString().split(";"));
  }
  getProperty() {
    var t = this.getAttribute("attributeType").getString(), e = this.getAttribute("attributeName").getString();
    return t === "CSS" ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
  }
  calcValue() {
    var {
      initialUnits: t
    } = this, {
      progress: e,
      from: r,
      to: n
    } = this.getProgress(), a = r.getNumber() + (n.getNumber() - r.getNumber()) * e;
    return t === "%" && (a *= 100), "".concat(a).concat(t);
  }
  update(t) {
    var {
      parent: e
    } = this, r = this.getProperty();
    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
      var n = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite")
        this.duration = 0;
      else if (n === "freeze" && !this.frozen)
        this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
      else if (n === "remove" && !this.removed)
        return this.removed = !0, r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), !0;
      return !1;
    }
    this.duration += t;
    var a = !1;
    if (this.begin < this.duration) {
      var o = this.calcValue(), s = this.getAttribute("type");
      if (s.hasValue()) {
        var u = s.getString();
        o = "".concat(u, "(").concat(o, ")");
      }
      r.setValue(o), a = !0;
    }
    return a;
  }
  getProgress() {
    var {
      document: t,
      values: e
    } = this, r = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (e.hasValue()) {
      var n = r.progress * (e.getValue().length - 1), a = Math.floor(n), o = Math.ceil(n);
      r.from = new T(t, "from", parseFloat(e.getValue()[a])), r.to = new T(t, "to", parseFloat(e.getValue()[o])), r.progress = (n - a) / (o - a);
    } else
      r.from = this.from, r.to = this.to;
    return r;
  }
}
class k1 extends aa {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = new yn(e.getColor()), a = new yn(r.getColor());
    if (n.ok && a.ok) {
      var o = n.r + (a.r - n.r) * t, s = n.g + (a.g - n.g) * t, u = n.b + (a.b - n.b) * t;
      return "rgb(".concat(Math.floor(o), ", ").concat(Math.floor(s), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class I1 extends aa {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = nt(e.getString()), a = nt(r.getString()), o = n.map((s, u) => {
      var h = a[u];
      return s + (h - s) * t;
    }).join(" ");
    return o;
  }
}
class _1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: n
    } = t, {
      children: a
    } = this;
    for (var o of a)
      switch (o.type) {
        case "font-face": {
          this.fontFace = o;
          var s = o.getStyle("font-family");
          s.hasValue() && (n[s.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = o;
          break;
        case "glyph": {
          var u = o;
          u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
          break;
        }
      }
  }
  render() {
  }
}
class L1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class D1 extends P {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class B1 extends Ct {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var t = this.getHrefAttribute().getDefinition();
    if (t) {
      var e = t.children[0];
      if (e)
        return e.getText();
    }
    return "";
  }
}
class F1 extends Ct {
  constructor(t, e, r) {
    super(t, e, r), this.type = "a";
    var {
      childNodes: n
    } = e, a = n[0], o = n.length > 0 && Array.from(n).every((s) => s.nodeType === 3);
    this.hasText = o, this.text = o ? this.getTextFromNode(a) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(t) {
    if (this.hasText) {
      super.renderChildren(t);
      var {
        document: e,
        x: r,
        y: n
      } = this, {
        mouse: a
      } = e.screen, o = new T(e, "fontSize", J.parse(e.ctx.font).fontSize);
      a.isWorking() && a.checkBoundingBox(this, new ft(r, n - o.getPixels("y"), r + this.measureText(t), n));
    } else if (this.children.length > 0) {
      var s = new na(this.document, null);
      s.children = this.children, s.parent = this, s.render(t);
    }
  }
  onClick() {
    var {
      window: t
    } = this.document;
    t && t.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var t = this.document.ctx;
    t.canvas.style.cursor = "pointer";
  }
}
function Mo(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function ir(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mo(Object(e), !0).forEach(function(r) {
      ra(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Mo(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class j1 extends Ct {
  constructor(t, e, r) {
    super(t, e, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var n = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(n);
  }
  getText() {
    return this.text;
  }
  path(t) {
    var {
      dataArray: e
    } = this;
    t && t.beginPath(), e.forEach((r) => {
      var {
        type: n,
        points: a
      } = r;
      switch (n) {
        case E.LINE_TO:
          t && t.lineTo(a[0], a[1]);
          break;
        case E.MOVE_TO:
          t && t.moveTo(a[0], a[1]);
          break;
        case E.CURVE_TO:
          t && t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case E.QUAD_TO:
          t && t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
          break;
        case E.ARC: {
          var [o, s, u, h, l, g, f, c] = a, d = u > h ? u : h, p = u > h ? 1 : u / h, m = u > h ? h / u : 1;
          t && (t.translate(o, s), t.rotate(f), t.scale(p, m), t.arc(0, 0, d, l, l + g, !!(1 - c)), t.scale(1 / p, 1 / m), t.rotate(-f), t.translate(-o, -s));
          break;
        }
        case E.CLOSE_PATH:
          t && t.closePath();
          break;
      }
    });
  }
  renderChildren(t) {
    this.setTextData(t), t.save();
    var e = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
      glyphInfo: n
    } = this, a = t.fillStyle;
    e === "underline" && t.beginPath(), n.forEach((o, s) => {
      var {
        p0: u,
        p1: h,
        rotation: l,
        text: g
      } = o;
      t.save(), t.translate(u.x, u.y), t.rotate(l), t.fillStyle && t.fillText(g, 0, 0), t.strokeStyle && t.strokeText(g, 0, 0), t.restore(), e === "underline" && (s === 0 && t.moveTo(u.x, u.y + r / 8), t.lineTo(h.x, h.y + r / 5));
    }), e === "underline" && (t.lineWidth = r / 20, t.strokeStyle = a, t.stroke(), t.closePath()), t.restore();
  }
  getLetterSpacingAt() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[t] || 0;
  }
  findSegmentToFitChar(t, e, r, n, a, o, s, u, h) {
    var l = o, g = this.measureText(t, u);
    u === " " && e === "justify" && r < n && (g += (n - r) / a), h > -1 && (l += this.getLetterSpacingAt(h));
    var f = this.textHeight / 20, c = this.getEquidistantPointOnPath(l, f, 0), d = this.getEquidistantPointOnPath(l + g, f, 0), p = {
      p0: c,
      p1: d
    }, m = c && d ? Math.atan2(d.y - c.y, d.x - c.x) : 0;
    if (s) {
      var y = Math.cos(Math.PI / 2 + m) * s, b = Math.cos(-m) * s;
      p.p0 = ir(ir({}, c), {}, {
        x: c.x + y,
        y: c.y + b
      }), p.p1 = ir(ir({}, d), {}, {
        x: d.x + y,
        y: d.y + b
      });
    }
    return l += g, {
      offset: l,
      segment: p,
      rotation: m
    };
  }
  measureText(t, e) {
    var {
      measuresCache: r
    } = this, n = e || this.getText();
    if (r.has(n))
      return r.get(n);
    var a = this.measureTargetText(t, n);
    return r.set(n, a), a;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(t) {
    if (!this.glyphInfo) {
      var e = this.getText(), r = e.split(""), n = e.split(" ").length - 1, a = this.parent.getAttribute("dx").split().map((w) => w.getPixels("x")), o = this.parent.getAttribute("dy").getPixels("y"), s = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), h = this.parent.getStyle("letter-spacing"), l = 0;
      !u.hasValue() || u.getValue() === "inherit" ? l = h.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (l = u.getPixels());
      var g = [], f = e.length;
      this.letterSpacingCache = g;
      for (var c = 0; c < f; c++)
        g.push(typeof a[c] < "u" ? a[c] : l);
      var d = g.reduce((w, A, O) => O === 0 ? 0 : w + A || 0, 0), p = this.measureText(t), m = Math.max(p + d, 0);
      this.textWidth = p, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), b = this.getStyle("startOffset").getNumber(0) * y, x = 0;
      (s === "middle" || s === "center") && (x = -m / 2), (s === "end" || s === "right") && (x = -m), x += b, r.forEach((w, A) => {
        var {
          offset: O,
          segment: S,
          rotation: C
        } = this.findSegmentToFitChar(t, s, m, y, n, x, o, w, A);
        x = O, !(!S.p0 || !S.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[A],
          p0: S.p0,
          p1: S.p1,
          rotation: C
        });
      });
    }
  }
  parsePathData(t) {
    if (this.pathLength = -1, !t)
      return [];
    var e = [], {
      pathParser: r
    } = t;
    for (r.reset(); !r.isEnd(); ) {
      var {
        current: n
      } = r, a = n ? n.x : 0, o = n ? n.y : 0, s = r.next(), u = s.type, h = [];
      switch (s.type) {
        case E.MOVE_TO:
          this.pathM(r, h);
          break;
        case E.LINE_TO:
          u = this.pathL(r, h);
          break;
        case E.HORIZ_LINE_TO:
          u = this.pathH(r, h);
          break;
        case E.VERT_LINE_TO:
          u = this.pathV(r, h);
          break;
        case E.CURVE_TO:
          this.pathC(r, h);
          break;
        case E.SMOOTH_CURVE_TO:
          u = this.pathS(r, h);
          break;
        case E.QUAD_TO:
          this.pathQ(r, h);
          break;
        case E.SMOOTH_QUAD_TO:
          u = this.pathT(r, h);
          break;
        case E.ARC:
          h = this.pathA(r);
          break;
        case E.CLOSE_PATH:
          P.pathZ(r);
          break;
      }
      s.type !== E.CLOSE_PATH ? e.push({
        type: u,
        points: h,
        start: {
          x: a,
          y: o
        },
        pathLength: this.calcLength(a, o, u, h)
      }) : e.push({
        type: E.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return e;
  }
  pathM(t, e) {
    var {
      x: r,
      y: n
    } = P.pathM(t).point;
    e.push(r, n);
  }
  pathL(t, e) {
    var {
      x: r,
      y: n
    } = P.pathL(t).point;
    return e.push(r, n), E.LINE_TO;
  }
  pathH(t, e) {
    var {
      x: r,
      y: n
    } = P.pathH(t).point;
    return e.push(r, n), E.LINE_TO;
  }
  pathV(t, e) {
    var {
      x: r,
      y: n
    } = P.pathV(t).point;
    return e.push(r, n), E.LINE_TO;
  }
  pathC(t, e) {
    var {
      point: r,
      controlPoint: n,
      currentPoint: a
    } = P.pathC(t);
    e.push(r.x, r.y, n.x, n.y, a.x, a.y);
  }
  pathS(t, e) {
    var {
      point: r,
      controlPoint: n,
      currentPoint: a
    } = P.pathS(t);
    return e.push(r.x, r.y, n.x, n.y, a.x, a.y), E.CURVE_TO;
  }
  pathQ(t, e) {
    var {
      controlPoint: r,
      currentPoint: n
    } = P.pathQ(t);
    e.push(r.x, r.y, n.x, n.y);
  }
  pathT(t, e) {
    var {
      controlPoint: r,
      currentPoint: n
    } = P.pathT(t);
    return e.push(r.x, r.y, n.x, n.y), E.QUAD_TO;
  }
  pathA(t) {
    var {
      rX: e,
      rY: r,
      sweepFlag: n,
      xAxisRotation: a,
      centp: o,
      a1: s,
      ad: u
    } = P.pathA(t);
    return n === 0 && u > 0 && (u -= 2 * Math.PI), n === 1 && u < 0 && (u += 2 * Math.PI), [o.x, o.y, e, r, s, u, a, n];
  }
  calcLength(t, e, r, n) {
    var a = 0, o = null, s = null, u = 0;
    switch (r) {
      case E.LINE_TO:
        return this.getLineLength(t, e, n[0], n[1]);
      case E.CURVE_TO:
        for (a = 0, o = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnCubicBezier(u, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return a;
      case E.QUAD_TO:
        for (a = 0, o = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnQuadraticBezier(u, t, e, n[0], n[1], n[2], n[3]), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return a;
      case E.ARC: {
        a = 0;
        var h = n[4], l = n[5], g = n[4] + l, f = Math.PI / 180;
        if (Math.abs(h - g) < f && (f = Math.abs(h - g)), o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), l < 0)
          for (u = h - f; u > g; u -= f)
            s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        else
          for (u = h + f; u < g; u += f)
            s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), a += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], g, 0), a += this.getLineLength(o.x, o.y, s.x, s.y), a;
      }
    }
    return 0;
  }
  getPointOnLine(t, e, r, n, a) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (a - r) / (n - e + ie), h = Math.sqrt(t * t / (1 + u * u));
    n < e && (h *= -1);
    var l = u * h, g = null;
    if (n === e)
      g = {
        x: o,
        y: s + l
      };
    else if ((s - r) / (o - e + ie) === u)
      g = {
        x: o + h,
        y: s + l
      };
    else {
      var f = 0, c = 0, d = this.getLineLength(e, r, n, a);
      if (d < ie)
        return null;
      var p = (o - e) * (n - e) + (s - r) * (a - r);
      p /= d * d, f = e + p * (n - e), c = r + p * (a - r);
      var m = this.getLineLength(o, s, f, c), y = Math.sqrt(t * t - m * m);
      h = Math.sqrt(y * y / (1 + u * u)), n < e && (h *= -1), l = u * h, g = {
        x: f + h,
        y: c + l
      };
    }
    return g;
  }
  getPointOnPath(t) {
    var e = this.getPathLength(), r = 0, n = null;
    if (t < -5e-5 || t - 5e-5 > e)
      return null;
    var {
      dataArray: a
    } = this;
    for (var o of a) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)) {
        r += o.pathLength;
        continue;
      }
      var s = t - r, u = 0;
      switch (o.type) {
        case E.LINE_TO:
          n = this.getPointOnLine(s, o.start.x, o.start.y, o.points[0], o.points[1], o.start.x, o.start.y);
          break;
        case E.ARC: {
          var h = o.points[4], l = o.points[5], g = o.points[4] + l;
          if (u = h + s / o.pathLength * l, l < 0 && u < g || l >= 0 && u > g)
            break;
          n = this.getPointOnEllipticalArc(o.points[0], o.points[1], o.points[2], o.points[3], u, o.points[6]);
          break;
        }
        case E.CURVE_TO:
          u = s / o.pathLength, u > 1 && (u = 1), n = this.getPointOnCubicBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3], o.points[4], o.points[5]);
          break;
        case E.QUAD_TO:
          u = s / o.pathLength, u > 1 && (u = 1), n = this.getPointOnQuadraticBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3]);
          break;
      }
      if (n)
        return n;
      break;
    }
    return null;
  }
  getLineLength(t, e, r, n) {
    return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((t, e) => e.pathLength > 0 ? t + e.pathLength : t, 0)), this.pathLength;
  }
  getPointOnCubicBezier(t, e, r, n, a, o, s, u, h) {
    var l = u * To(t) + o * Oo(t) + n * Ao(t) + e * Eo(t), g = h * To(t) + s * Oo(t) + a * Ao(t) + r * Eo(t);
    return {
      x: l,
      y: g
    };
  }
  getPointOnQuadraticBezier(t, e, r, n, a, o, s) {
    var u = o * Co(t) + n * Po(t) + e * No(t), h = s * Co(t) + a * Po(t) + r * No(t);
    return {
      x: u,
      y: h
    };
  }
  getPointOnEllipticalArc(t, e, r, n, a, o) {
    var s = Math.cos(o), u = Math.sin(o), h = {
      x: r * Math.cos(a),
      y: n * Math.sin(a)
    };
    return {
      x: t + (h.x * s - h.y * u),
      y: e + (h.x * u + h.y * s)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(t, e) {
    var r = this.getPathLength(), n = e || 0.25, a = t || r / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== a || this.equidistantCache.precision !== n) {
      this.equidistantCache = {
        step: a,
        precision: n,
        points: []
      };
      for (var o = 0, s = 0; s <= r; s += n) {
        var u = this.getPointOnPath(s), h = this.getPointOnPath(s + n);
        !u || !h || (o += this.getLineLength(u.x, u.y, h.x, h.y), o >= a && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: s
        }), o -= a));
      }
    }
  }
  getEquidistantPointOnPath(t, e, r) {
    if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5)
      return null;
    var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[n] || null;
  }
}
var U1 = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class z1 extends Ht {
  constructor(t, e, r) {
    super(t, e, r), this.type = "image", this.loaded = !1;
    var n = this.getHrefAttribute().getString();
    if (n) {
      var a = n.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(n);
      t.images.push(this), a ? this.loadSvg(n) : this.loadImage(n), this.isSvg = a;
    }
  }
  loadImage(t) {
    var e = this;
    return bt(function* () {
      try {
        var r = yield e.document.createImage(t);
        e.image = r;
      } catch (n) {
        console.error('Error while loading image "'.concat(t, '":'), n);
      }
      e.loaded = !0;
    })();
  }
  loadSvg(t) {
    var e = this;
    return bt(function* () {
      var r = U1.exec(t);
      if (r) {
        var n = r[5];
        r[4] === "base64" ? e.image = atob(n) : e.image = decodeURIComponent(n);
      } else
        try {
          var a = yield e.document.fetch(t), o = yield a.text();
          e.image = o;
        } catch (s) {
          console.error('Error while loading image "'.concat(t, '":'), s);
        }
      e.loaded = !0;
    })();
  }
  renderChildren(t) {
    var {
      document: e,
      image: r,
      loaded: n
    } = this, a = this.getAttribute("x").getPixels("x"), o = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!n || !r || !s || !u)) {
      if (t.save(), t.translate(a, o), this.isSvg) {
        var h = e.canvg.forkString(t, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u
        });
        h.document.documentElement.parent = this, h.render();
      } else {
        var l = this.image;
        e.setViewBox({
          ctx: t,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: s,
          desiredWidth: l.width,
          height: u,
          desiredHeight: l.height
        }), this.loaded && (typeof l.complete > "u" || l.complete) && t.drawImage(l, 0, 0);
      }
      t.restore();
    }
  }
  getBoundingBox() {
    var t = this.getAttribute("x").getPixels("x"), e = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), n = this.getStyle("height").getPixels("y");
    return new ft(t, e, t + r, e + n);
  }
}
class H1 extends Ht {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(t) {
  }
}
class X1 {
  constructor(t) {
    this.document = t, this.loaded = !1, t.fonts.push(this);
  }
  load(t, e) {
    var r = this;
    return bt(function* () {
      try {
        var {
          document: n
        } = r, a = yield n.canvg.parser.load(e), o = a.getElementsByTagName("font");
        Array.from(o).forEach((s) => {
          var u = n.createElement(s);
          n.definitions[t] = u;
        });
      } catch (s) {
        console.error('Error while loading font "'.concat(e, '":'), s);
      }
      r.loaded = !0;
    })();
  }
}
class Th extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "style";
    var n = le(
      Array.from(e.childNodes).map((o) => o.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), a = n.split("}");
    a.forEach((o) => {
      var s = o.trim();
      if (s) {
        var u = s.split("{"), h = u[0].split(","), l = u[1].split(";");
        h.forEach((g) => {
          var f = g.trim();
          if (f) {
            var c = t.styles[f] || {};
            if (l.forEach((m) => {
              var y = m.indexOf(":"), b = m.substr(0, y).trim(), x = m.substr(y + 1, m.length - y).trim();
              b && x && (c[b] = new T(t, b, x));
            }), t.styles[f] = c, t.stylesSpecificity[f] = a1(f), f === "@font-face") {
              var d = c["font-family"].getString().replace(/"|'/g, ""), p = c.src.getString().split(",");
              p.forEach((m) => {
                if (m.indexOf('format("svg")') > 0) {
                  var y = ph(m);
                  y && new X1(t).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
Th.parseExternalUrl = ph;
class Y1 extends Ht {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(t) {
    super.setContext(t);
    var e = this.getAttribute("x"), r = this.getAttribute("y");
    e.hasValue() && t.translate(e.getPixels("x"), 0), r.hasValue() && t.translate(0, r.getPixels("y"));
  }
  path(t) {
    var {
      element: e
    } = this;
    e && e.path(t);
  }
  renderChildren(t) {
    var {
      document: e,
      element: r
    } = this;
    if (r) {
      var n = r;
      if (r.type === "symbol" && (n = new Ve(e, null), n.attributes.viewBox = new T(e, "viewBox", r.getAttribute("viewBox").getString()), n.attributes.preserveAspectRatio = new T(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), n.attributes.overflow = new T(e, "overflow", r.getAttribute("overflow").getString()), n.children = r.children, r.styles.opacity = new T(e, "opacity", this.calculateOpacity())), n.type === "svg") {
        var a = this.getStyle("width", !1, !0), o = this.getStyle("height", !1, !0);
        a.hasValue() && (n.attributes.width = new T(e, "width", a.getString())), o.hasValue() && (n.attributes.height = new T(e, "height", o.getString()));
      }
      var s = n.parent;
      n.parent = this, n.render(t), n.parent = s;
    }
  }
  getBoundingBox(t) {
    var {
      element: e
    } = this;
    return e ? e.getBoundingBox(t) : null;
  }
  elementTransform() {
    var {
      document: t,
      element: e
    } = this;
    return Bt.fromElement(t, e);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function nr(i, t, e, r, n, a) {
  return i[e * r * 4 + t * 4 + a];
}
function ar(i, t, e, r, n, a, o) {
  i[e * r * 4 + t * 4 + a] = o;
}
function U(i, t, e) {
  var r = i[t];
  return r * e;
}
function vt(i, t, e, r) {
  return t + Math.cos(i) * e + Math.sin(i) * r;
}
class Oh extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feColorMatrix";
    var n = nt(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var a = n[0];
        n = [0.213 + 0.787 * a, 0.715 - 0.715 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 + 0.285 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 - 0.715 * a, 0.072 + 0.928 * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var o = n[0] * Math.PI / 180;
        n = [vt(o, 0.213, 0.787, -0.213), vt(o, 0.715, -0.715, -0.715), vt(o, 0.072, -0.072, 0.928), 0, 0, vt(o, 0.213, -0.213, 0.143), vt(o, 0.715, 0.285, 0.14), vt(o, 0.072, -0.072, -0.283), 0, 0, vt(o, 0.213, -0.213, -0.787), vt(o, 0.715, -0.715, 0.715), vt(o, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = n, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(t, e, r, n, a) {
    for (var {
      includeOpacity: o,
      matrix: s
    } = this, u = t.getImageData(0, 0, n, a), h = 0; h < a; h++)
      for (var l = 0; l < n; l++) {
        var g = nr(u.data, l, h, n, a, 0), f = nr(u.data, l, h, n, a, 1), c = nr(u.data, l, h, n, a, 2), d = nr(u.data, l, h, n, a, 3), p = U(s, 0, g) + U(s, 1, f) + U(s, 2, c) + U(s, 3, d) + U(s, 4, 1), m = U(s, 5, g) + U(s, 6, f) + U(s, 7, c) + U(s, 8, d) + U(s, 9, 1), y = U(s, 10, g) + U(s, 11, f) + U(s, 12, c) + U(s, 13, d) + U(s, 14, 1), b = U(s, 15, g) + U(s, 16, f) + U(s, 17, c) + U(s, 18, d) + U(s, 19, 1);
        o && (p = 0, m = 0, y = 0, b *= d / 255), ar(u.data, l, h, n, a, 0, p), ar(u.data, l, h, n, a, 1, m), ar(u.data, l, h, n, a, 2, y), ar(u.data, l, h, n, a, 3, b);
      }
    t.clearRect(0, 0, n, a), t.putImageData(u, 0, 0);
  }
}
class Lr extends R {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(t, e) {
    var {
      document: r
    } = this, n = this.getAttribute("x").getPixels("x"), a = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), s = this.getStyle("height").getPixels("y");
    if (!o && !s) {
      var u = new ft();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(t));
      }), n = Math.floor(u.x1), a = Math.floor(u.y1), o = Math.floor(u.width), s = Math.floor(u.height);
    }
    var h = this.removeStyles(e, Lr.ignoreStyles), l = r.createCanvas(n + o, a + s), g = l.getContext("2d");
    r.screen.setDefaults(g), this.renderChildren(g), new Oh(r, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(g, 0, 0, n + o, a + s);
    var f = r.createCanvas(n + o, a + s), c = f.getContext("2d");
    r.screen.setDefaults(c), e.render(c), c.globalCompositeOperation = "destination-in", c.fillStyle = g.createPattern(l, "no-repeat"), c.fillRect(0, 0, n + o, a + s), t.fillStyle = c.createPattern(f, "no-repeat"), t.fillRect(0, 0, n + o, a + s), this.restoreStyles(e, h);
  }
  render(t) {
  }
}
Lr.ignoreStyles = ["mask", "transform", "clip-path"];
var Ro = () => {
};
class W1 extends R {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(t) {
    var {
      document: e
    } = this, r = Reflect.getPrototypeOf(t), {
      beginPath: n,
      closePath: a
    } = t;
    r && (r.beginPath = Ro, r.closePath = Ro), Reflect.apply(n, t, []), this.children.forEach((o) => {
      if (!(typeof o.path > "u")) {
        var s = typeof o.elementTransform < "u" ? o.elementTransform() : null;
        s || (s = Bt.fromElement(e, o)), s && s.apply(t), o.path(t), r && (r.closePath = a), s && s.unapply(t);
      }
    }), Reflect.apply(a, t, []), t.clip(), r && (r.beginPath = n, r.closePath = a);
  }
  render(t) {
  }
}
class Dr extends R {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(t, e) {
    var {
      document: r,
      children: n
    } = this, a = e.getBoundingBox(t);
    if (a) {
      var o = 0, s = 0;
      n.forEach((y) => {
        var b = y.extraFilterDistance || 0;
        o = Math.max(o, b), s = Math.max(s, b);
      });
      var u = Math.floor(a.width), h = Math.floor(a.height), l = u + 2 * o, g = h + 2 * s;
      if (!(l < 1 || g < 1)) {
        var f = Math.floor(a.x), c = Math.floor(a.y), d = this.removeStyles(e, Dr.ignoreStyles), p = r.createCanvas(l, g), m = p.getContext("2d");
        r.screen.setDefaults(m), m.translate(-f + o, -c + s), e.render(m), n.forEach((y) => {
          typeof y.apply == "function" && y.apply(m, 0, 0, l, g);
        }), t.drawImage(p, 0, 0, l, g, f - o, c - s, l, g), this.restoreStyles(e, d);
      }
    }
  }
  render(t) {
  }
}
Dr.ignoreStyles = ["filter", "transform", "clip-path"];
class q1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(t, e, r, n, a) {
  }
}
class G1 extends R {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(t, e, r, n, a) {
  }
}
class Q1 extends R {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(t, e, r, n, a) {
  }
}
class $1 extends R {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(t, e, r, n, a) {
    var {
      document: o,
      blurRadius: s
    } = this, u = o.window ? o.window.document.body : null, h = t.canvas;
    h.id = o.getUniqueId(), u && (h.style.display = "none", u.appendChild(h)), Hx(h, e, r, n, a, s), u && u.removeChild(h);
  }
}
class Z1 extends R {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class J1 extends R {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var K1 = {
  svg: Ve,
  rect: bh,
  circle: T1,
  ellipse: O1,
  line: A1,
  polyline: wh,
  polygon: E1,
  path: P,
  pattern: C1,
  marker: P1,
  defs: N1,
  linearGradient: M1,
  radialGradient: R1,
  stop: V1,
  animate: aa,
  animateColor: k1,
  animateTransform: I1,
  font: _1,
  "font-face": L1,
  "missing-glyph": D1,
  glyph: xh,
  text: Ct,
  tspan: _r,
  tref: B1,
  a: F1,
  textPath: j1,
  image: z1,
  g: na,
  symbol: H1,
  style: Th,
  use: Y1,
  mask: Lr,
  clipPath: W1,
  filter: Dr,
  feDropShadow: q1,
  feMorphology: G1,
  feComposite: Q1,
  feColorMatrix: Oh,
  feGaussianBlur: $1,
  title: Z1,
  desc: J1
};
function Vo(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function tb(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vo(Object(e), !0).forEach(function(r) {
      ra(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Vo(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
function eb(i, t) {
  var e = document.createElement("canvas");
  return e.width = i, e.height = t, e;
}
function rb(i) {
  return wn.apply(this, arguments);
}
function wn() {
  return wn = bt(function* (i) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = document.createElement("img");
    return t && (e.crossOrigin = "Anonymous"), new Promise((r, n) => {
      e.onload = () => {
        r(e);
      }, e.onerror = (a, o, s, u, h) => {
        n(h);
      }, e.src = i;
    });
  }), wn.apply(this, arguments);
}
class At {
  constructor(t) {
    var {
      rootEmSize: e = 12,
      emSize: r = 12,
      createCanvas: n = At.createCanvas,
      createImage: a = At.createImage,
      anonymousCrossOrigin: o
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = t, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = e, this.emSize = r, this.createCanvas = n, this.createImage = this.bindCreateImage(a, o), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(t, e) {
    return typeof e == "boolean" ? (r, n) => t(r, typeof n == "boolean" ? n : e) : t;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: t
    } = this;
    return t[t.length - 1];
  }
  set emSize(t) {
    var {
      emSizeStack: e
    } = this;
    e.push(t);
  }
  popEmSize() {
    var {
      emSizeStack: t
    } = this;
    t.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((t) => t.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((t) => t.loaded);
  }
  createDocumentElement(t) {
    var e = this.createElement(t.documentElement);
    return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, e;
  }
  createElement(t) {
    var e = t.nodeName.replace(/^[^:]+:/, ""), r = At.elementTypes[e];
    return typeof r < "u" ? new r(this, t) : new y1(this, t);
  }
  createTextNode(t) {
    return new S1(this, t);
  }
  setViewBox(t) {
    this.screen.setViewBox(tb({
      document: this
    }, t));
  }
}
At.createCanvas = eb;
At.createImage = rb;
At.elementTypes = K1;
function ko(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function _t(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ko(Object(e), !0).forEach(function(r) {
      ra(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : ko(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class xe {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new Hi(r), this.screen = new Ir(t, r), this.options = r;
    var n = new At(this, r), a = n.createDocumentElement(e);
    this.document = n, this.documentElement = a;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(t, e) {
    var r = arguments;
    return bt(function* () {
      var n = r.length > 2 && r[2] !== void 0 ? r[2] : {}, a = new Hi(n), o = yield a.parse(e);
      return new xe(t, o, n);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = new Hi(r), a = n.parseFromString(e);
    return new xe(t, a, r);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xe.from(t, e, _t(_t({}, this.options), r));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xe.fromString(t, e, _t(_t({}, this.options), r));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var t = arguments, e = this;
    return bt(function* () {
      var r = t.length > 0 && t[0] !== void 0 ? t[0] : {};
      e.start(_t({
        enableRedraw: !0,
        ignoreAnimation: !0,
        ignoreMouse: !0
      }, r)), yield e.ready(), e.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: e,
      screen: r,
      options: n
    } = this;
    r.start(e, _t(_t({
      enableRedraw: !0
    }, n), t));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(t, e, r);
  }
}
export {
  F1 as AElement,
  k1 as AnimateColorElement,
  aa as AnimateElement,
  I1 as AnimateTransformElement,
  ft as BoundingBox,
  To as CB1,
  Oo as CB2,
  Ao as CB3,
  Eo as CB4,
  xe as Canvg,
  T1 as CircleElement,
  W1 as ClipPathElement,
  N1 as DefsElement,
  J1 as DescElement,
  At as Document,
  R as Element,
  O1 as EllipseElement,
  Oh as FeColorMatrixElement,
  Q1 as FeCompositeElement,
  q1 as FeDropShadowElement,
  $1 as FeGaussianBlurElement,
  G1 as FeMorphologyElement,
  Dr as FilterElement,
  J as Font,
  _1 as FontElement,
  L1 as FontFaceElement,
  na as GElement,
  xh as GlyphElement,
  Sh as GradientElement,
  z1 as ImageElement,
  A1 as LineElement,
  M1 as LinearGradientElement,
  P1 as MarkerElement,
  Lr as MaskElement,
  yh as Matrix,
  D1 as MissingGlyphElement,
  o1 as Mouse,
  ie as PSEUDO_ZERO,
  Hi as Parser,
  P as PathElement,
  E as PathParser,
  C1 as PatternElement,
  L as Point,
  E1 as PolygonElement,
  wh as PolylineElement,
  T as Property,
  Co as QB1,
  Po as QB2,
  No as QB3,
  R1 as RadialGradientElement,
  bh as RectElement,
  Ht as RenderedElement,
  c1 as Rotate,
  Ve as SVGElement,
  X1 as SVGFontLoader,
  g1 as Scale,
  Ir as Screen,
  vh as Skew,
  f1 as SkewX,
  p1 as SkewY,
  V1 as StopElement,
  Th as StyleElement,
  H1 as SymbolElement,
  B1 as TRefElement,
  _r as TSpanElement,
  Ct as TextElement,
  j1 as TextPathElement,
  Z1 as TitleElement,
  Bt as Transform,
  l1 as Translate,
  y1 as UnknownElement,
  Y1 as UseElement,
  s1 as ViewPort,
  le as compressSpaces,
  xe as default,
  a1 as getSelectorSpecificity,
  $x as normalizeAttributeName,
  Zx as normalizeColor,
  ph as parseExternalUrl,
  nb as presets,
  nt as toNumbers,
  qx as trimLeft,
  Gx as trimRight,
  wo as vectorMagnitude,
  So as vectorsAngle,
  bn as vectorsRatio
};
