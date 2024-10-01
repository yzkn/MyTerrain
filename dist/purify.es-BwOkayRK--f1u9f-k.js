/*! @license DOMPurify 2.5.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.6/LICENSE */
function D(n) {
  "@babel/helpers - typeof";
  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, D(n);
}
function Mt(n, o) {
  return Mt = Object.setPrototypeOf || function(a, l) {
    return a.__proto__ = l, a;
  }, Mt(n, o);
}
function ze() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function it(n, o, a) {
  return ze() ? it = Reflect.construct : it = function(l, f, b) {
    var A = [null];
    A.push.apply(A, f);
    var K = Function.bind.apply(l, A), C = new K();
    return b && Mt(C, b.prototype), C;
  }, it.apply(null, arguments);
}
function w(n) {
  return Pe(n) || je(n) || Be(n) || Ge();
}
function Pe(n) {
  if (Array.isArray(n)) return It(n);
}
function je(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Be(n, o) {
  if (n) {
    if (typeof n == "string") return It(n, o);
    var a = Object.prototype.toString.call(n).slice(8, -1);
    if (a === "Object" && n.constructor && (a = n.constructor.name), a === "Map" || a === "Set") return Array.from(n);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return It(n, o);
  }
}
function It(n, o) {
  (o == null || o > n.length) && (o = n.length);
  for (var a = 0, l = new Array(o); a < o; a++) l[a] = n[a];
  return l;
}
function Ge() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var We = Object.hasOwnProperty, ce = Object.setPrototypeOf, qe = Object.isFrozen, Ye = Object.getPrototypeOf, $e = Object.getOwnPropertyDescriptor, y = Object.freeze, v = Object.seal, Ke = Object.create, he = typeof Reflect < "u" && Reflect, ct = he.apply, Ft = he.construct;
ct || (ct = function(n, o, a) {
  return n.apply(o, a);
});
y || (y = function(n) {
  return n;
});
v || (v = function(n) {
  return n;
});
Ft || (Ft = function(n, o) {
  return it(n, w(o));
});
var Ve = E(Array.prototype.forEach), ue = E(Array.prototype.pop), $ = E(Array.prototype.push), lt = E(String.prototype.toLowerCase), xt = E(String.prototype.toString), se = E(String.prototype.match), _ = E(String.prototype.replace), Xe = E(String.prototype.indexOf), Ze = E(String.prototype.trim), g = E(RegExp.prototype.test), Ot = Je(TypeError);
function E(n) {
  return function(o) {
    for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
      l[f - 1] = arguments[f];
    return ct(n, o, l);
  };
}
function Je(n) {
  return function() {
    for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return Ft(n, a);
  };
}
function i(n, o, a) {
  var l;
  a = (l = a) !== null && l !== void 0 ? l : lt, ce && ce(n, null);
  for (var f = o.length; f--; ) {
    var b = o[f];
    if (typeof b == "string") {
      var A = a(b);
      A !== b && (qe(o) || (o[f] = A), b = A);
    }
    n[b] = !0;
  }
  return n;
}
function U(n) {
  var o = Ke(null), a;
  for (a in n)
    ct(We, n, [a]) === !0 && (o[a] = n[a]);
  return o;
}
function ot(n, o) {
  for (; n !== null; ) {
    var a = $e(n, o);
    if (a) {
      if (a.get)
        return E(a.get);
      if (typeof a.value == "function")
        return E(a.value);
    }
    n = Ye(n);
  }
  function l(f) {
    return console.warn("fallback value for", f), null;
  }
  return l;
}
var me = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Lt = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ct = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Qe = y(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Rt = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), tn = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), fe = y(["#text"]), pe = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Dt = y(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), de = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), at = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), en = v(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nn = v(/<%[\w\W]*|[\w\W]*%>/gm), rn = v(/\${[\w\W]*}/gm), on = v(/^data-[\-\w.\u00B7-\uFFFF]/), an = v(/^aria-[\-\w]+$/), ln = v(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cn = v(/^(?:\w+script|data):/i), un = v(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), sn = v(/^html$/i), mn = v(/^[a-z][.\w]*(-[.\w]+)+$/i), fn = function() {
  return typeof window > "u" ? null : window;
}, pn = function(n, o) {
  if (D(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var a = null, l = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(l) && (a = o.currentScript.getAttribute(l));
  var f = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(f, {
      createHTML: function(b) {
        return b;
      },
      createScriptURL: function(b) {
        return b;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + f + " could not be created."), null;
  }
};
function ge() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fn(), o = function(t) {
    return ge(t);
  };
  if (o.version = "2.5.6", o.removed = [], !n || !n.document || n.document.nodeType !== 9)
    return o.isSupported = !1, o;
  var a = n.document, l = n.document, f = n.DocumentFragment, b = n.HTMLTemplateElement, A = n.Node, K = n.Element, C = n.NodeFilter, Ut = n.NamedNodeMap, ye = Ut === void 0 ? n.NamedNodeMap || n.MozNamedAttrMap : Ut, be = n.HTMLFormElement, Te = n.DOMParser, V = n.trustedTypes, X = K.prototype, Ne = ot(X, "cloneNode"), ve = ot(X, "nextSibling"), Ee = ot(X, "childNodes"), ut = ot(X, "parentNode");
  if (typeof b == "function") {
    var st = l.createElement("template");
    st.content && st.content.ownerDocument && (l = st.content.ownerDocument);
  }
  var S = pn(V, a), mt = S ? S.createHTML("") : "", Z = l, ft = Z.implementation, Ae = Z.createNodeIterator, Se = Z.createDocumentFragment, _e = Z.getElementsByTagName, we = a.importNode, Ht = {};
  try {
    Ht = U(l).documentMode ? l.documentMode : {};
  } catch {
  }
  var k = {};
  o.isSupported = typeof ut == "function" && ft && ft.createHTMLDocument !== void 0 && Ht !== 9;
  var pt = en, dt = nn, ht = rn, ke = on, xe = an, Oe = cn, zt = un, Le = mn, gt = ln, p = null, Pt = i({}, [].concat(w(me), w(Lt), w(Ct), w(Rt), w(fe))), d = null, jt = i({}, [].concat(w(pe), w(Dt), w(de), w(at))), u = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), W = null, yt = null, Bt = !0, bt = !0, Gt = !1, Wt = !0, H = !1, Tt = !0, M = !1, Nt = !1, vt = !1, z = !1, J = !1, Q = !1, qt = !0, Yt = !1, Ce = "user-content-", Et = !0, q = !1, P = {}, j = null, $t = i({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Kt = null, Vt = i({}, ["audio", "video", "img", "source", "image", "track"]), At = null, Xt = i({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt = "http://www.w3.org/1998/Math/MathML", et = "http://www.w3.org/2000/svg", O = "http://www.w3.org/1999/xhtml", B = O, St = !1, _t = null, Re = i({}, [tt, et, O], xt), I, De = ["application/xhtml+xml", "text/html"], Me = "text/html", h, G = null, Ie = l.createElement("form"), Zt = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, wt = function(t) {
    G && G === t || ((!t || D(t) !== "object") && (t = {}), t = U(t), I = // eslint-disable-next-line unicorn/prefer-includes
    De.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? I = Me : I = t.PARSER_MEDIA_TYPE, h = I === "application/xhtml+xml" ? xt : lt, p = "ALLOWED_TAGS" in t ? i({}, t.ALLOWED_TAGS, h) : Pt, d = "ALLOWED_ATTR" in t ? i({}, t.ALLOWED_ATTR, h) : jt, _t = "ALLOWED_NAMESPACES" in t ? i({}, t.ALLOWED_NAMESPACES, xt) : Re, At = "ADD_URI_SAFE_ATTR" in t ? i(
      U(Xt),
      // eslint-disable-line indent
      t.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      h
      // eslint-disable-line indent
    ) : Xt, Kt = "ADD_DATA_URI_TAGS" in t ? i(
      U(Vt),
      // eslint-disable-line indent
      t.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      h
      // eslint-disable-line indent
    ) : Vt, j = "FORBID_CONTENTS" in t ? i({}, t.FORBID_CONTENTS, h) : $t, W = "FORBID_TAGS" in t ? i({}, t.FORBID_TAGS, h) : {}, yt = "FORBID_ATTR" in t ? i({}, t.FORBID_ATTR, h) : {}, P = "USE_PROFILES" in t ? t.USE_PROFILES : !1, Bt = t.ALLOW_ARIA_ATTR !== !1, bt = t.ALLOW_DATA_ATTR !== !1, Gt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Wt = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, H = t.SAFE_FOR_TEMPLATES || !1, Tt = t.SAFE_FOR_XML !== !1, M = t.WHOLE_DOCUMENT || !1, z = t.RETURN_DOM || !1, J = t.RETURN_DOM_FRAGMENT || !1, Q = t.RETURN_TRUSTED_TYPE || !1, vt = t.FORCE_BODY || !1, qt = t.SANITIZE_DOM !== !1, Yt = t.SANITIZE_NAMED_PROPS || !1, Et = t.KEEP_CONTENT !== !1, q = t.IN_PLACE || !1, gt = t.ALLOWED_URI_REGEXP || gt, B = t.NAMESPACE || O, u = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Zt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (u.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Zt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (u.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (u.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), H && (bt = !1), J && (z = !0), P && (p = i({}, w(fe)), d = [], P.html === !0 && (i(p, me), i(d, pe)), P.svg === !0 && (i(p, Lt), i(d, Dt), i(d, at)), P.svgFilters === !0 && (i(p, Ct), i(d, Dt), i(d, at)), P.mathMl === !0 && (i(p, Rt), i(d, de), i(d, at))), t.ADD_TAGS && (p === Pt && (p = U(p)), i(p, t.ADD_TAGS, h)), t.ADD_ATTR && (d === jt && (d = U(d)), i(d, t.ADD_ATTR, h)), t.ADD_URI_SAFE_ATTR && i(At, t.ADD_URI_SAFE_ATTR, h), t.FORBID_CONTENTS && (j === $t && (j = U(j)), i(j, t.FORBID_CONTENTS, h)), Et && (p["#text"] = !0), M && i(p, ["html", "head", "body"]), p.table && (i(p, ["tbody"]), delete W.tbody), y && y(t), G = t);
  }, Jt = i({}, ["mi", "mo", "mn", "ms", "mtext"]), Qt = i({}, ["foreignobject", "annotation-xml"]), Fe = i({}, ["title", "style", "font", "a", "script"]), nt = i({}, Lt);
  i(nt, Ct), i(nt, Qe);
  var kt = i({}, Rt);
  i(kt, tn);
  var Ue = function(t) {
    var r = ut(t);
    (!r || !r.tagName) && (r = {
      namespaceURI: B,
      tagName: "template"
    });
    var e = lt(t.tagName), c = lt(r.tagName);
    return _t[t.namespaceURI] ? t.namespaceURI === et ? r.namespaceURI === O ? e === "svg" : r.namespaceURI === tt ? e === "svg" && (c === "annotation-xml" || Jt[c]) : !!nt[e] : t.namespaceURI === tt ? r.namespaceURI === O ? e === "math" : r.namespaceURI === et ? e === "math" && Qt[c] : !!kt[e] : t.namespaceURI === O ? r.namespaceURI === et && !Qt[c] || r.namespaceURI === tt && !Jt[c] ? !1 : !kt[e] && (Fe[e] || !nt[e]) : !!(I === "application/xhtml+xml" && _t[t.namespaceURI]) : !1;
  }, F = function(t) {
    $(o.removed, {
      element: t
    });
    try {
      t.parentNode.removeChild(t);
    } catch {
      try {
        t.outerHTML = mt;
      } catch {
        t.remove();
      }
    }
  }, rt = function(t, r) {
    try {
      $(o.removed, {
        attribute: r.getAttributeNode(t),
        from: r
      });
    } catch {
      $(o.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(t), t === "is" && !d[t])
      if (z || J)
        try {
          F(r);
        } catch {
        }
      else
        try {
          r.setAttribute(t, "");
        } catch {
        }
  }, te = function(t) {
    var r, e;
    if (vt)
      t = "<remove></remove>" + t;
    else {
      var c = se(t, /^[\r\n\t ]+/);
      e = c && c[0];
    }
    I === "application/xhtml+xml" && B === O && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    var s = S ? S.createHTML(t) : t;
    if (B === O)
      try {
        r = new Te().parseFromString(s, I);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ft.createDocument(B, "template", null);
      try {
        r.documentElement.innerHTML = St ? mt : s;
      } catch {
      }
    }
    var N = r.body || r.documentElement;
    return t && e && N.insertBefore(l.createTextNode(e), N.childNodes[0] || null), B === O ? _e.call(r, M ? "html" : "body")[0] : M ? r.documentElement : N;
  }, ee = function(t) {
    return Ae.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      C.SHOW_ELEMENT | C.SHOW_COMMENT | C.SHOW_TEXT | C.SHOW_PROCESSING_INSTRUCTION | C.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ne = function(t) {
    return t instanceof be && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof ye) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Y = function(t) {
    return D(A) === "object" ? t instanceof A : t && D(t) === "object" && typeof t.nodeType == "number" && typeof t.nodeName == "string";
  }, L = function(t, r, e) {
    k[t] && Ve(k[t], function(c) {
      c.call(o, r, e, G);
    });
  }, re = function(t) {
    var r;
    if (L("beforeSanitizeElements", t, null), ne(t) || g(/[\u0080-\uFFFF]/, t.nodeName))
      return F(t), !0;
    var e = h(t.nodeName);
    if (L("uponSanitizeElement", t, {
      tagName: e,
      allowedTags: p
    }), t.hasChildNodes() && !Y(t.firstElementChild) && (!Y(t.content) || !Y(t.content.firstElementChild)) && g(/<[/\w]/g, t.innerHTML) && g(/<[/\w]/g, t.textContent) || e === "select" && g(/<template/i, t.innerHTML) || t.nodeType === 7 || Tt && t.nodeType === 8 && g(/<[/\w]/g, t.data))
      return F(t), !0;
    if (!p[e] || W[e]) {
      if (!W[e] && ae(e) && (u.tagNameCheck instanceof RegExp && g(u.tagNameCheck, e) || u.tagNameCheck instanceof Function && u.tagNameCheck(e)))
        return !1;
      if (Et && !j[e]) {
        var c = ut(t) || t.parentNode, s = Ee(t) || t.childNodes;
        if (s && c)
          for (var N = s.length, m = N - 1; m >= 0; --m) {
            var R = Ne(s[m], !0);
            R.__removalCount = (t.__removalCount || 0) + 1, c.insertBefore(R, ve(t));
          }
      }
      return F(t), !0;
    }
    return t instanceof K && !Ue(t) || (e === "noscript" || e === "noembed" || e === "noframes") && g(/<\/no(script|embed|frames)/i, t.innerHTML) ? (F(t), !0) : (H && t.nodeType === 3 && (r = t.textContent, r = _(r, pt, " "), r = _(r, dt, " "), r = _(r, ht, " "), t.textContent !== r && ($(o.removed, {
      element: t.cloneNode()
    }), t.textContent = r)), L("afterSanitizeElements", t, null), !1);
  }, oe = function(t, r, e) {
    if (qt && (r === "id" || r === "name") && (e in l || e in Ie))
      return !1;
    if (!(bt && !yt[r] && g(ke, r)) && !(Bt && g(xe, r))) {
      if (!d[r] || yt[r]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ae(t) && (u.tagNameCheck instanceof RegExp && g(u.tagNameCheck, t) || u.tagNameCheck instanceof Function && u.tagNameCheck(t)) && (u.attributeNameCheck instanceof RegExp && g(u.attributeNameCheck, r) || u.attributeNameCheck instanceof Function && u.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          r === "is" && u.allowCustomizedBuiltInElements && (u.tagNameCheck instanceof RegExp && g(u.tagNameCheck, e) || u.tagNameCheck instanceof Function && u.tagNameCheck(e)))
        ) return !1;
      } else if (!At[r] && !g(gt, _(e, zt, "")) && !((r === "src" || r === "xlink:href" || r === "href") && t !== "script" && Xe(e, "data:") === 0 && Kt[t]) && !(Gt && !g(Oe, _(e, zt, ""))) && e)
        return !1;
    }
    return !0;
  }, ae = function(t) {
    return t !== "annotation-xml" && se(t, Le);
  }, ie = function(t) {
    var r, e, c, s;
    L("beforeSanitizeAttributes", t, null);
    var N = t.attributes;
    if (N) {
      var m = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: d
      };
      for (s = N.length; s--; ) {
        r = N[s];
        var R = r, x = R.name, T = R.namespaceURI;
        if (e = x === "value" ? r.value : Ze(r.value), c = h(x), m.attrName = c, m.attrValue = e, m.keepAttr = !0, m.forceKeepAttr = void 0, L("uponSanitizeAttribute", t, m), e = m.attrValue, Tt && g(/((--!?|])>)|<\/(style|title)/i, e)) {
          rt(x, t);
          continue;
        }
        if (!m.forceKeepAttr && (rt(x, t), !!m.keepAttr)) {
          if (!Wt && g(/\/>/i, e)) {
            rt(x, t);
            continue;
          }
          H && (e = _(e, pt, " "), e = _(e, dt, " "), e = _(e, ht, " "));
          var le = h(t.nodeName);
          if (oe(le, c, e)) {
            if (Yt && (c === "id" || c === "name") && (rt(x, t), e = Ce + e), S && D(V) === "object" && typeof V.getAttributeType == "function" && !T)
              switch (V.getAttributeType(le, c)) {
                case "TrustedHTML": {
                  e = S.createHTML(e);
                  break;
                }
                case "TrustedScriptURL": {
                  e = S.createScriptURL(e);
                  break;
                }
              }
            try {
              T ? t.setAttributeNS(T, x, e) : t.setAttribute(x, e), ne(t) ? F(t) : ue(o.removed);
            } catch {
            }
          }
        }
      }
      L("afterSanitizeAttributes", t, null);
    }
  }, He = function t(r) {
    var e, c = ee(r);
    for (L("beforeSanitizeShadowDOM", r, null); e = c.nextNode(); )
      L("uponSanitizeShadowNode", e, null), !re(e) && (e.content instanceof f && t(e.content), ie(e));
    L("afterSanitizeShadowDOM", r, null);
  };
  return o.sanitize = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e, c, s, N, m;
    if (St = !t, St && (t = "<!-->"), typeof t != "string" && !Y(t))
      if (typeof t.toString == "function") {
        if (t = t.toString(), typeof t != "string")
          throw Ot("dirty is not a string, aborting");
      } else
        throw Ot("toString is not a function");
    if (!o.isSupported) {
      if (D(n.toStaticHTML) === "object" || typeof n.toStaticHTML == "function") {
        if (typeof t == "string")
          return n.toStaticHTML(t);
        if (Y(t))
          return n.toStaticHTML(t.outerHTML);
      }
      return t;
    }
    if (Nt || wt(r), o.removed = [], typeof t == "string" && (q = !1), q) {
      if (t.nodeName) {
        var R = h(t.nodeName);
        if (!p[R] || W[R])
          throw Ot("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (t instanceof A)
      e = te("<!---->"), c = e.ownerDocument.importNode(t, !0), c.nodeType === 1 && c.nodeName === "BODY" || c.nodeName === "HTML" ? e = c : e.appendChild(c);
    else {
      if (!z && !H && !M && // eslint-disable-next-line unicorn/prefer-includes
      t.indexOf("<") === -1)
        return S && Q ? S.createHTML(t) : t;
      if (e = te(t), !e)
        return z ? null : Q ? mt : "";
    }
    e && vt && F(e.firstChild);
    for (var x = ee(q ? t : e); s = x.nextNode(); )
      s.nodeType === 3 && s === N || re(s) || (s.content instanceof f && He(s.content), ie(s), N = s);
    if (N = null, q)
      return t;
    if (z) {
      if (J)
        for (m = Se.call(e.ownerDocument); e.firstChild; )
          m.appendChild(e.firstChild);
      else
        m = e;
      return (d.shadowroot || d.shadowrootmod) && (m = we.call(a, m, !0)), m;
    }
    var T = M ? e.outerHTML : e.innerHTML;
    return M && p["!doctype"] && e.ownerDocument && e.ownerDocument.doctype && e.ownerDocument.doctype.name && g(sn, e.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + e.ownerDocument.doctype.name + `>
` + T), H && (T = _(T, pt, " "), T = _(T, dt, " "), T = _(T, ht, " ")), S && Q ? S.createHTML(T) : T;
  }, o.setConfig = function(t) {
    wt(t), Nt = !0;
  }, o.clearConfig = function() {
    G = null, Nt = !1;
  }, o.isValidAttribute = function(t, r, e) {
    G || wt({});
    var c = h(t), s = h(r);
    return oe(c, s, e);
  }, o.addHook = function(t, r) {
    typeof r == "function" && (k[t] = k[t] || [], $(k[t], r));
  }, o.removeHook = function(t) {
    if (k[t])
      return ue(k[t]);
  }, o.removeHooks = function(t) {
    k[t] && (k[t] = []);
  }, o.removeAllHooks = function() {
    k = {};
  }, o;
}
var dn = ge();
export {
  dn as default
};
